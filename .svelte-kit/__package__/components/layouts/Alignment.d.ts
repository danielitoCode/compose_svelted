/**
 * Alignment — tokens de alineación type-safe con branded types.
 *
 * Los objetos son opacos: nunca se puede pasar un VerticalAlignment donde
 * se espera un HorizontalAlignment, aunque ambos representen "center" en CSS.
 *
 * Filosofía Jetpack Compose:
 *  - HorizontalAlignment → eje cross de Column
 *  - VerticalAlignment   → eje cross de Row
 *  - BoxAlignment        → alineación compuesta para Box (stack)
 */
export type HorizontalAlignment = {
    readonly _brand: 'HorizontalAlignment';
    readonly cssValue: string;
};
export type VerticalAlignment = {
    readonly _brand: 'VerticalAlignment';
    readonly cssValue: string;
};
/** Alineación compuesta para Box — encapsula horizontal + vertical */
export type BoxAlignment = {
    readonly _brand: 'BoxAlignment';
    readonly horizontal: string;
    readonly vertical: string;
};
export declare const Alignment: {
    readonly Start: HorizontalAlignment;
    readonly CenterHorizontally: HorizontalAlignment;
    readonly End: HorizontalAlignment;
    readonly Top: VerticalAlignment;
    readonly CenterVertically: VerticalAlignment;
    readonly Bottom: VerticalAlignment;
    readonly TopStart: BoxAlignment;
    readonly TopCenter: BoxAlignment;
    readonly TopEnd: BoxAlignment;
    readonly CenterStart: BoxAlignment;
    readonly Center: BoxAlignment;
    readonly CenterEnd: BoxAlignment;
    readonly BottomStart: BoxAlignment;
    readonly BottomCenter: BoxAlignment;
    readonly BottomEnd: BoxAlignment;
};
