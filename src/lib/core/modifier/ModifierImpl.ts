import type {BoxAlignment} from "../../components/layouts/Alignment";
import type {Shape} from "../shapes/Shape";
import type {ColorToken} from "../theme/ColorScheme";
import {resolveColor} from "../theme/resolve";

export type ModifierMeta = {
    align?: BoxAlignment;
};

export type ModifierEntry = {
    className?: string;
    style?: string;
    meta?: ModifierMeta;
};

/* =========================
 * ModifierImpl
 * ========================= */

export class ModifierImpl {
    private readonly entries: ModifierEntry[];

    constructor(entries: ModifierEntry[] = []) {
        this.entries = entries;
    }

    /* -------- composición -------- */

    then(other: ModifierImpl): ModifierImpl {
        return new ModifierImpl([...this.entries, ...other.entries]);
    }

    /* -------- layout size -------- */

    fillMaxWidth(): ModifierImpl {
        return this.then(new ModifierImpl([{ style: "width:100%;" }]));
    }

    fillMaxHeight(): ModifierImpl {
        return this.then(new ModifierImpl([{ style: "height:100%;" }]));
    }

    fillMaxSize(): ModifierImpl {
        return this.then(new ModifierImpl([{ style: "width:100%;height:100%;" }]));
    }

    weight(weight: number, fill: boolean = true): ModifierImpl {
        if (weight <= 0) return this;

        return this.then(
            new ModifierImpl([
                {
                    style: `
            flex-grow:${weight};
            flex-shrink:${fill ? 1 : 0};
            flex-basis:0%;
          `,
                },
            ])
        );
    }

    /* -------- padding / margin -------- */

    padding(value: number): ModifierImpl {
        return this.then(
            new ModifierImpl([{ style: `padding:${value}px;` }])
        );
    }

    paddingHorizontal(value: number): ModifierImpl {
        return this.then(
            new ModifierImpl([
                { style: `padding-left:${value}px;padding-right:${value}px;` },
            ])
        );
    }

    paddingVertical(value: number): ModifierImpl {
        return this.then(
            new ModifierImpl([
                { style: `padding-top:${value}px;padding-bottom:${value}px;` },
            ])
        );
    }

    marginTop(value: number): ModifierImpl {
        return this.then(
            new ModifierImpl([{ style: `margin-top:${value}px;` }])
        );
    }

    /* -------- background / border -------- */

    background(color: ColorToken | string): ModifierImpl {
        const resolved =
            typeof color === "string"
                ? color
                : resolveColor(color as ColorToken);

        return this.then(
            new ModifierImpl([{ style: `background:${resolved};` }])
        );
    }

    border(width: number, color: string, shape?: Shape): ModifierImpl {
        if (width <= 0) return this;

        return this.then(
            new ModifierImpl([
                {
                    style: `
            border:${width}px solid ${color};
            ${shape ? `border-radius:${shape.toCssBorderRadius()};` : ""}
          `,
                },
            ])
        );
    }

    clip(shape: Shape): ModifierImpl {
        return this.then(
            new ModifierImpl([
                {
                    style: `
            border-radius:${shape.toCssBorderRadius()};
            overflow:hidden;
          `,
                },
            ])
        );
    }

    /* -------- posicionamiento semántico -------- */

    align(alignment: BoxAlignment): ModifierImpl {
        return this.then(
            new ModifierImpl([
                {
                    meta: { align: alignment },
                },
            ])
        );
    }

    /* -------- interacción -------- */

    clickable(): ModifierImpl {
        return this.then(
            new ModifierImpl([
                {
                    className: "compose-clickable",
                    style: "cursor:pointer;user-select:none;",
                },
            ])
        );
    }

    /* -------- consumo interno -------- */

    toStyle(): string {
        return this.entries.map(e => e.style ?? "").join("");
    }

    toClass(): string {
        return this.entries.map(e => e.className ?? "").join(" ");
    }

    getMeta(): ModifierMeta {
        const out: ModifierMeta = {};
        for (const e of this.entries) {
            if (e.meta) Object.assign(out, e.meta);
        }
        return out;
    }
}