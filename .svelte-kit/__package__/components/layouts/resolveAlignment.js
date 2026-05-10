/**
 * resolveAlignment.ts
 *
 * Funciones puras que traducen los tokens de Alignment a CSS inline.
 * Trabajan con el nuevo shape de BoxAlignment (objeto con .horizontal / .vertical).
 */
// ─── Box (CSS Grid stacking) ──────────────────────────────────────────────────
/**
 * Resuelve el `place-items` de un Box stack container.
 * CSS Grid: "align-items justify-items"
 */
export function resolveBoxPlaceItems(alignment) {
    // grid place-items = "<vertical> <horizontal>"
    var v = resolveCssAlign(alignment.vertical);
    var h = resolveCssAlign(alignment.horizontal);
    return "".concat(v, " ").concat(h);
}
/**
 * Resuelve el `place-self` de un hijo de Box que sobreescribe su alineación.
 * Usado por Modifier.align() dentro de un Box.
 */
export function resolveBoxPlaceSelf(alignment) {
    var v = resolveCssAlign(alignment.vertical);
    var h = resolveCssAlign(alignment.horizontal);
    return "place-self:".concat(v, " ").concat(h, ";");
}
// ─── Flex (Column / Row cross-axis align-self) ────────────────────────────────
/**
 * Resuelve `align-self` para un hijo de Column (eje horizontal).
 */
export function resolveColumnAlignSelf(alignment) {
    return "align-self:".concat(alignment.cssValue, ";");
}
/**
 * Resuelve `align-self` para un hijo de Row (eje vertical).
 */
export function resolveRowAlignSelf(alignment) {
    return "align-self:".concat(alignment.cssValue, ";");
}
// ─── Internos ─────────────────────────────────────────────────────────────────
/** Normaliza los valores CSS de flex a los equivalentes de grid */
function resolveCssAlign(value) {
    switch (value) {
        case 'flex-start': return 'start';
        case 'flex-end': return 'end';
        default: return 'center';
    }
}
