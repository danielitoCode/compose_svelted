/**
 * Arrangement — eje principal (main axis).
 *
 * Fiel a Jetpack Compose:
 *  - Arrangement.Start, Center, End, SpaceBetween, SpaceAround, SpaceEvenly
 *  - Arrangement.spacedBy(gap) → gap entre hijos, con justificación base opcional
 *  - Arrangement.spacedBy(gap, Arrangement.Center) → centrado + gap
 */
// ─── Tokens estáticos ────────────────────────────────────────────────────────
var staticArrangement = function (justifyContent) {
    return ({ type: 'static', justifyContent: justifyContent });
};
// ─── Arrangement public API ──────────────────────────────────────────────────
export var Arrangement = {
    // Column main-axis (vertical)
    Top: staticArrangement('flex-start'),
    Bottom: staticArrangement('flex-end'),
    // Row main-axis (horizontal)
    Start: staticArrangement('flex-start'),
    End: staticArrangement('flex-end'),
    // Compartidos
    Center: staticArrangement('center'),
    SpaceBetween: staticArrangement('space-between'),
    SpaceAround: staticArrangement('space-around'),
    SpaceEvenly: staticArrangement('space-evenly'),
    /**
     * Espaciado uniforme entre hijos con gap en px.
     * @param gap        Espacio en píxeles entre elementos
     * @param baseAlign  Alineación base del main-axis (por defecto flex-start)
     *
     * @example
     * Arrangement.spacedBy(16)
     * Arrangement.spacedBy(16, Arrangement.Center)
     */
    spacedBy: function (gap, baseAlign) {
        if (baseAlign === void 0) { baseAlign = staticArrangement('flex-start'); }
        return { type: 'spaced', gap: gap, justifyContent: baseAlign.justifyContent };
    },
};
