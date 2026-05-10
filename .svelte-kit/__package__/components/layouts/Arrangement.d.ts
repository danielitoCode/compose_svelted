/**
 * Arrangement — eje principal (main axis).
 *
 * Fiel a Jetpack Compose:
 *  - Arrangement.Start, Center, End, SpaceBetween, SpaceAround, SpaceEvenly
 *  - Arrangement.spacedBy(gap) → gap entre hijos, con justificación base opcional
 *  - Arrangement.spacedBy(gap, Arrangement.Center) → centrado + gap
 */
type JustifyContent = 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
export type ArrangementValue = {
    readonly type: 'static';
    readonly justifyContent: JustifyContent;
    readonly gap?: never;
} | {
    readonly type: 'spaced';
    readonly justifyContent: JustifyContent;
    readonly gap: number;
};
export declare const Arrangement: {
    readonly Top: ArrangementValue;
    readonly Bottom: ArrangementValue;
    readonly Start: ArrangementValue;
    readonly End: ArrangementValue;
    readonly Center: ArrangementValue;
    readonly SpaceBetween: ArrangementValue;
    readonly SpaceAround: ArrangementValue;
    readonly SpaceEvenly: ArrangementValue;
    /**
     * Espaciado uniforme entre hijos con gap en px.
     * @param gap        Espacio en píxeles entre elementos
     * @param baseAlign  Alineación base del main-axis (por defecto flex-start)
     *
     * @example
     * Arrangement.spacedBy(16)
     * Arrangement.spacedBy(16, Arrangement.Center)
     */
    readonly spacedBy: (gap: number, baseAlign?: ArrangementValue) => ArrangementValue;
};
export {};
