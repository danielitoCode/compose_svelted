/**
 * Arrangement — eje principal (main axis).
 *
 * Fiel a Jetpack Compose:
 *  - Arrangement.Start, Center, End, SpaceBetween, SpaceAround, SpaceEvenly
 *  - Arrangement.spacedBy(gap) → gap entre hijos, con justificación base opcional
 *  - Arrangement.spacedBy(gap, Arrangement.Center) → centrado + gap
 */

type JustifyContent =
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';

export type ArrangementValue =
    | { readonly type: 'static'; readonly justifyContent: JustifyContent; readonly gap?: never }
    | { readonly type: 'spaced'; readonly justifyContent: JustifyContent; readonly gap: number };

// ─── Tokens estáticos ────────────────────────────────────────────────────────

const staticArrangement = (justifyContent: JustifyContent): ArrangementValue =>
    ({ type: 'static', justifyContent });

// ─── Arrangement public API ──────────────────────────────────────────────────

export const Arrangement = {
    // Column main-axis (vertical)
    Top:    staticArrangement('flex-start'),
    Bottom: staticArrangement('flex-end'),

    // Row main-axis (horizontal)
    Start:  staticArrangement('flex-start'),
    End:    staticArrangement('flex-end'),

    // Compartidos
    Center:      staticArrangement('center'),
    SpaceBetween: staticArrangement('space-between'),
    SpaceAround:  staticArrangement('space-around'),
    SpaceEvenly:  staticArrangement('space-evenly'),

    /**
     * Espaciado uniforme entre hijos con gap en px.
     * @param gap        Espacio en píxeles entre elementos
     * @param baseAlign  Alineación base del main-axis (por defecto flex-start)
     *
     * @example
     * Arrangement.spacedBy(16)
     * Arrangement.spacedBy(16, Arrangement.Center)
     */
    spacedBy(gap: number, baseAlign: ArrangementValue = staticArrangement('flex-start')): ArrangementValue {
        return { type: 'spaced', gap, justifyContent: baseAlign.justifyContent };
    },
} as const;