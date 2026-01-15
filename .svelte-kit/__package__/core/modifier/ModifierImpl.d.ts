import type { BoxAlignment } from "../../components/layouts/Alignment";
import type { Shape } from "../shapes/Shape";
import type { ColorToken } from "../theme/ColorScheme";
export type ModifierEntry = {
    className?: string;
    style?: string;
};
export declare class ModifierImpl {
    private readonly entries;
    constructor(entries?: ModifierEntry[]);
    then(other: ModifierImpl): ModifierImpl;
    paddingHorizontal(value: number): ModifierImpl;
    verticalScroll(enabled?: boolean): ModifierImpl;
    horizontalScroll(enabled?: boolean): ModifierImpl;
    paddingVertical(value: number): ModifierImpl;
    fillMaxWidth(): ModifierImpl;
    fillMaxHeight(): ModifierImpl;
    fillMaxSize(): ModifierImpl;
    background(color: ColorToken | string): ModifierImpl;
    weight(weight: number, fill?: boolean): ModifierImpl;
    align(alignment: BoxAlignment): ModifierImpl;
    padding(valueOrParams?: number | {
        top?: number;
        bottom?: number;
        start?: number;
        end?: number;
    }, unit?: string): ModifierImpl;
    width(value: number | string, unit?: string): ModifierImpl;
    height(value: number | string, unit?: string): ModifierImpl;
    marginTop(value: number, unit?: string): ModifierImpl;
    clip(shape: Shape): ModifierImpl;
    size(value: number | string, unit?: string): ModifierImpl;
    offset(x: number, y: number): ModifierImpl;
    clickable(onClick: () => void): ModifierImpl;
    border(width: number, color: string, shape?: Shape): ModifierImpl;
    toStyle(): string;
    toClass(): string;
}
