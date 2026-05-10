import type { BoxAlignment, HorizontalAlignment, VerticalAlignment } from "../../components/layouts/Alignment";
import type { Shape } from "../shapes/Shape";
import type { ColorToken } from "../theme/ColorScheme";
export type ModifierMeta = {
    /** Alineación de este hijo dentro de su contenedor (place-self en grid, align-self en flex) */
    align?: BoxAlignment | HorizontalAlignment | VerticalAlignment;
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
export declare class ModifierImpl {
    private readonly entries;
    constructor(entries?: ModifierEntry[]);
    then(other: ModifierImpl): ModifierImpl;
    fillMaxWidth(): ModifierImpl;
    fillMaxHeight(): ModifierImpl;
    fillMaxSize(): ModifierImpl;
    width(value: number | string, unit?: string): ModifierImpl;
    height(value: number | string, unit?: string): ModifierImpl;
    size(value: number | string, unit?: string): ModifierImpl;
    weight(weight: number, fill?: boolean): ModifierImpl;
    padding(valueOrParams?: PaddingValue, unit?: string): ModifierImpl;
    paddingHorizontal(value: number): ModifierImpl;
    paddingVertical(value: number): ModifierImpl;
    marginTop(value: number, unit?: string): ModifierImpl;
    background(color: ColorToken | string): ModifierImpl;
    border(width: number, color: string, shape?: Shape): ModifierImpl;
    clip(shape: Shape): ModifierImpl;
    offset(x: number, y: number): ModifierImpl;
    /**
     * Sobreescribe la alineación de este hijo dentro de un contenedor (Box, Column, Row).
     * Equivalente a Modifier.align() en Jetpack Compose.
     */
    align(alignment: BoxAlignment | HorizontalAlignment | VerticalAlignment): ModifierImpl;
    clickable(_onClick?: () => void): ModifierImpl;
    verticalScroll(enabled?: boolean): ModifierImpl;
    horizontalScroll(enabled?: boolean): ModifierImpl;
    toStyle(): string;
    toClass(): string;
    getMeta(): ModifierMeta;
}
export {};
