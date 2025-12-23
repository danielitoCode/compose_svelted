import type {BoxAlignment} from "../../components/layouts/Alignment";
import type {Shape} from "../shapes/Shape";
import type {ColorToken} from "../theme/ColorScheme";
import {resolveColor} from "../theme/resolve";

export type ModifierEntry = {
    className?: string;
    style?: string;
};

export class ModifierImpl {
    private readonly entries: ModifierEntry[];

    constructor(entries: ModifierEntry[] = []) {
        this.entries = entries;
    }

    then(other: ModifierImpl): ModifierImpl {
        return new ModifierImpl([...this.entries, ...other.entries]);
    }

    paddingHorizontal(value: number): ModifierImpl {
        return this.then(
            new ModifierImpl([
                { style: `padding-left:${value}px;padding-right:${value}px;` },
            ])
        );
    }

    verticalScroll(enabled: boolean = true): ModifierImpl {
        return this.then(
            new ModifierImpl([{
                style: enabled
                    ? `overflow-y:auto;overflow-x:hidden;-webkit-overflow-scrolling:touch;`
                    : ''
            }])
        );
    }

    horizontalScroll(enabled: boolean = true): ModifierImpl {
        return this.then(
            new ModifierImpl([{
                style: enabled
                    ? `overflow-x:auto;overflow-y:hidden;-webkit-overflow-scrolling:touch;white-space:nowrap;`
                    : ''
            }])
        );
    }

    paddingVertical(value: number): ModifierImpl {
        return this.then(
            new ModifierImpl([
                { style: `padding-top:${value}px;padding-bottom:${value}px;` },
            ])
        );
    }

    fillMaxWidth(): ModifierImpl {
        return this.then(
            new ModifierImpl([{ style: `width:100%;` }])
        );
    }

    fillMaxHeight(): ModifierImpl {
        return this.then(
            new ModifierImpl([{ style: `height:100%;` }])
        );
    }

    fillMaxSize(): ModifierImpl {
        return this.then(
            new ModifierImpl([{ style: `width:100%;height:100%;` }])
        );
    }

    background(color: ColorToken | string): ModifierImpl {
        let resolved: string;

        if (
            typeof color === "string" &&
            (
                color.startsWith("#") ||
                color.startsWith("rgb") ||
                color.startsWith("hsl") ||
                color === "transparent" ||
                color === "currentColor"
            )
        ) {
            // Color CSS directo
            resolved = color;
        } else {
            // Token de ComposeTheme
            resolved = resolveColor(color as ColorToken);
        }

        return this.then(
            new ModifierImpl([
                { style: `background:${resolved};` }
            ])
        );
    }

    weight(weight: number, fill: boolean = true): ModifierImpl {
        if (weight <= 0) {
            console.warn("Modifier.weight() debe ser > 0");
            return this;
        }

        const styleParts = [
            `flex-grow: ${weight};`,
            `flex-shrink: ${fill ? 1 : 0};`,
            `flex-basis: 0%;`  // importante para que el peso funcione bien
        ];

        return this.then(new ModifierImpl([{ style: styleParts.join(" ") }]));
    }

    align(alignment: BoxAlignment): ModifierImpl {
        const parts = alignment.split(' ');
        const horizontal = parts[0]; // flex-start, center, flex-end
        const vertical = parts[1] || parts[0]; // para casos simples como "center"

        let style = 'position: absolute;';

        // Vertical
        if (vertical === 'flex-start') {
            style += 'top: 0;';
        } else if (vertical === 'flex-end') {
            style += 'bottom: 0;';
        } else if (vertical === 'center') {
            style += 'top: 50%; transform: translateY(-50%);';
        }

        // Horizontal
        if (horizontal === 'flex-start') {
            style += 'left: 0;';
        } else if (horizontal === 'flex-end') {
            style += 'right: 0;';
        } else if (horizontal === 'center') {
            style += 'left: 50%;';
            // Combinar transform si ya hay translateY
            if (style.includes('translateY')) {
                style = style.replace('translateY(-50%)', 'translate(-50%, -50%)');
            } else {
                style += 'transform: translateX(-50%);';
            }
        }

        return this.then(new ModifierImpl([{ style }]));
    }

    padding(valueOrParams: number | { top?: number; bottom?: number; start?: number; end?: number } = 0, unit: string = 'px'): ModifierImpl {
        let style = '';

        if (typeof valueOrParams === 'number') {
            // Padding uniforme
            style = `padding:${valueOrParams}${unit};`;
        } else {
            // Padding direccional
            const { top = 0, bottom = 0, start = 0, end = 0 } = valueOrParams;
            style = `
                padding-top:${top}${unit};
                padding-bottom:${bottom}${unit};
                padding-left:${start}${unit};
                //padding-right:${end}${unit};
    `.trim();
        }

        return this.then(new ModifierImpl([{ style }]));
    }

    width(value: number | string, unit = 'px'): ModifierImpl {
        const size = typeof value === 'number' ? `${value}${unit}` : value;
        return this.then(new ModifierImpl([{ style: `width:${size};` }]));
    }

    height(value: number | string, unit = 'px'): ModifierImpl {
        const size = typeof value === 'number' ? `${value}${unit}` : value;
        return this.then(new ModifierImpl([{ style: `height:${size};` }]));
    }

    marginTop(value: number, unit = 'px'): ModifierImpl {
        return this.then(new ModifierImpl([{ style: `margin-top:${value}${unit};` }]));
    }

    clip(shape: Shape): ModifierImpl {
        return this.then(
            new ModifierImpl([
                {
                    style: `
                    border-radius:${shape.toCssBorderRadius()};
                    overflow:hidden;
                `
                }
            ])
        );
    }

    size(value: number | string, unit: string = "px"): ModifierImpl {
        if (value === null || value === undefined) {
            return this;
        }

        let resolved: string;

        if (typeof value === "number") {
            if (isNaN(value)) return this;
            resolved = `${value}${unit}`;
        } else {
            if (value.trim() === "") return this;
            resolved = value;
        }

        return this.then(
            new ModifierImpl([
                {
                    style: `width:${resolved};height:${resolved};`
                }
            ])
        );
    }

    offset(x: number, y: number): ModifierImpl {
        if (isNaN(x) || isNaN(y)) return this;

        return this.then(
            new ModifierImpl([
                {
                    style: `transform: translate(${x}px, ${y}px);`
                }
            ])
        );
    }

    clickable(onClick: () => void): ModifierImpl {
        return this.then(
            new ModifierImpl([
                {
                    className: "compose-clickable",
                    style: `
                    cursor: pointer;
                    user-select: none;
                `
                }
            ])
        );
    }

    border(width: number, color: string, shape?: Shape): ModifierImpl {
        if (width <= 0) return this;

        const radius = shape ? shape.toCssBorderRadius() : undefined;

        return this.then(
            new ModifierImpl([
                {
                    style: `
                    border:${width}px solid ${color};
                    ${radius ? `border-radius:${radius};` : ""}
                `
                }
            ])
        );
    }

    // ---- consumo interno ----

    toStyle(): string {
        return this.entries.map(e => e.style ?? "").join("");
    }

    toClass(): string {
        return this.entries.map(e => e.className ?? "").join(" ");
    }
}