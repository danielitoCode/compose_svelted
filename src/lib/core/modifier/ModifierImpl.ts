import { resolveColor } from "../theme/resolve";
import type { BoxAlignment } from "../../components/layouts/Alignment";
import type { Shape } from "../shapes/Shape";
import type { ColorToken } from "../theme/ColorScheme";

export type ModifierMeta = {
    align?: BoxAlignment;
};

export type ModifierEntry = {
    className?: string;
    style?: string;
    meta?: ModifierMeta;
};

type PaddingValue = number | {
    top?: number;
    bottom?: number;
    start?: number;
    end?: number;
};

function toCssLength(value: number | string, unit = "px"): string {
    return typeof value === "number" ? `${value}${unit}` : value;
}

export class ModifierImpl {
    constructor(private readonly entries: ModifierEntry[] = []) {}

    then(other: ModifierImpl): ModifierImpl {
        return new ModifierImpl([...this.entries, ...other.entries]);
    }

    fillMaxWidth(): ModifierImpl {
        return this.then(new ModifierImpl([{ style: "width:100%;" }]));
    }

    fillMaxHeight(): ModifierImpl {
        return this.then(new ModifierImpl([{ style: "height:100%;" }]));
    }

    fillMaxSize(): ModifierImpl {
        return this.then(new ModifierImpl([{ style: "width:100%;height:100%;" }]));
    }

    width(value: number | string, unit = "px"): ModifierImpl {
        return this.then(new ModifierImpl([{ style: `width:${toCssLength(value, unit)};` }]));
    }

    height(value: number | string, unit = "px"): ModifierImpl {
        return this.then(new ModifierImpl([{ style: `height:${toCssLength(value, unit)};` }]));
    }

    size(value: number | string, unit = "px"): ModifierImpl {
        const cssValue = toCssLength(value, unit);
        return this.then(new ModifierImpl([{ style: `width:${cssValue};height:${cssValue};` }]));
    }

    weight(weight: number, fill = true): ModifierImpl {
        if (weight <= 0) {
            return this;
        }

        return this.then(new ModifierImpl([
            {
                style: `flex-grow:${weight};flex-shrink:${fill ? 1 : 0};flex-basis:0%;`
            }
        ]));
    }

    padding(valueOrParams: PaddingValue = 0, unit = "px"): ModifierImpl {
        if (typeof valueOrParams === "number") {
            return this.then(new ModifierImpl([{ style: `padding:${valueOrParams}${unit};` }]));
        }

        const { top = 0, bottom = 0, start = 0, end = 0 } = valueOrParams;
        return this.then(new ModifierImpl([
            {
                style: [
                    `padding-top:${top}${unit};`,
                    `padding-bottom:${bottom}${unit};`,
                    `padding-left:${start}${unit};`,
                    `padding-right:${end}${unit};`
                ].join("")
            }
        ]));
    }

    paddingHorizontal(value: number): ModifierImpl {
        return this.then(new ModifierImpl([
            { style: `padding-left:${value}px;padding-right:${value}px;` }
        ]));
    }

    paddingVertical(value: number): ModifierImpl {
        return this.then(new ModifierImpl([
            { style: `padding-top:${value}px;padding-bottom:${value}px;` }
        ]));
    }

    marginTop(value: number, unit = "px"): ModifierImpl {
        return this.then(new ModifierImpl([{ style: `margin-top:${value}${unit};` }]));
    }

    background(color: ColorToken | string): ModifierImpl {
        const resolved = typeof color === "string" ? color : resolveColor(color);
        return this.then(new ModifierImpl([{ style: `background:${resolved};` }]));
    }

    border(width: number, color: string, shape?: Shape): ModifierImpl {
        if (width <= 0) {
            return this;
        }

        const borderRadius = shape ? `border-radius:${shape.toCssBorderRadius()};` : "";
        return this.then(new ModifierImpl([
            { style: `border:${width}px solid ${color};${borderRadius}` }
        ]));
    }

    clip(shape: Shape): ModifierImpl {
        return this.then(new ModifierImpl([
            { style: `border-radius:${shape.toCssBorderRadius()};overflow:hidden;` }
        ]));
    }

    offset(x: number, y: number): ModifierImpl {
        return this.then(new ModifierImpl([
            { style: `transform:translate(${x}px, ${y}px);` }
        ]));
    }

    align(alignment: BoxAlignment): ModifierImpl {
        return this.then(new ModifierImpl([{ meta: { align: alignment } }]));
    }

    clickable(_onClick?: () => void): ModifierImpl {
        return this.then(new ModifierImpl([
            { className: "compose-clickable", style: "cursor:pointer;user-select:none;" }
        ]));
    }

    verticalScroll(enabled = true): ModifierImpl {
        return enabled
            ? this.then(new ModifierImpl([{ style: "overflow-y:auto;" }]))
            : this;
    }

    horizontalScroll(enabled = true): ModifierImpl {
        return enabled
            ? this.then(new ModifierImpl([{ style: "overflow-x:auto;" }]))
            : this;
    }

    toStyle(): string {
        return this.entries.map((entry) => entry.style ?? "").join("");
    }

    toClass(): string {
        return this.entries.map((entry) => entry.className ?? "").filter(Boolean).join(" ");
    }

    getMeta(): ModifierMeta {
        return this.entries.reduce<ModifierMeta>((acc, entry) => ({ ...acc, ...(entry.meta ?? {}) }), {});
    }
}
