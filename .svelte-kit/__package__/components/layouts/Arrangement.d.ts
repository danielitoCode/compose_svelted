/**
 * Arrangement — eje principal (main axis)
 * Fiel a Jetpack Compose
 */
export type ArrangementValue = {
    type: "static";
    justifyContent: string;
} | {
    type: "spaced";
    gap: number;
    justifyContent: string;
};
export declare const Arrangement: {
    readonly Start: ArrangementValue;
    readonly Center: ArrangementValue;
    readonly End: ArrangementValue;
    readonly Bottom: ArrangementValue;
    readonly Top: ArrangementValue;
    readonly SpaceBetween: ArrangementValue;
    readonly SpaceAround: ArrangementValue;
    readonly SpaceEvenly: ArrangementValue;
    readonly spacedBy: (value: number) => ArrangementValue;
};
