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
// ─── Helpers internos ────────────────────────────────────────────────────────
function h(cssValue) {
    return { _brand: 'HorizontalAlignment', cssValue: cssValue };
}
function v(cssValue) {
    return { _brand: 'VerticalAlignment', cssValue: cssValue };
}
function box(horizontal, vertical) {
    return { _brand: 'BoxAlignment', horizontal: horizontal, vertical: vertical };
}
// ─── Tokens públicos ─────────────────────────────────────────────────────────
export var Alignment = {
    // Horizontal — eje cross de Column
    Start: h('flex-start'),
    CenterHorizontally: h('center'),
    End: h('flex-end'),
    // Vertical — eje cross de Row
    Top: v('flex-start'),
    CenterVertically: v('center'),
    Bottom: v('flex-end'),
    // Box — alineación compuesta (stack)
    TopStart: box('flex-start', 'flex-start'),
    TopCenter: box('center', 'flex-start'),
    TopEnd: box('flex-end', 'flex-start'),
    CenterStart: box('flex-start', 'center'),
    Center: box('center', 'center'),
    CenterEnd: box('flex-end', 'center'),
    BottomStart: box('flex-start', 'flex-end'),
    BottomCenter: box('center', 'flex-end'),
    BottomEnd: box('flex-end', 'flex-end'),
};
