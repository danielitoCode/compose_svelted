import type { Shape } from "./Shape";

type CornerSize = number | string;

type RoundedCornerParams =
    | CornerSize
    | {
    topStart?: CornerSize;
    topEnd?: CornerSize;
    bottomEnd?: CornerSize;
    bottomStart?: CornerSize;
};

function toCss(value?: CornerSize): string {
    if (value === undefined) return "0px";
    return typeof value === "number" ? `${value}px` : value;
}

class RoundedCornerShapeImpl implements Shape {
    constructor(private readonly params: RoundedCornerParams) {}

    toCssBorderRadius(): string {
        // Caso: un solo valor → todas las esquinas
        if (typeof this.params === "number" || typeof this.params === "string") {
            const v = toCss(this.params);
            return `${v} ${v} ${v} ${v}`;
        }

        const {
            topStart = 0,
            topEnd = 0,
            bottomEnd = 0,
            bottomStart = 0,
        } = this.params;

        // CSS: top-left, top-right, bottom-right, bottom-left
        return `
            ${toCss(topStart)}
            ${toCss(topEnd)}
            ${toCss(bottomEnd)}
            ${toCss(bottomStart)}
        `.trim();
    }
}

/**
 * Compose-like factory
 */
export function RoundedCornerShape(
    params: RoundedCornerParams
): Shape {
    return new RoundedCornerShapeImpl(params);
}