/**
 * resolveAlignment.ts
 *
 * Funciones puras que traducen los tokens de Alignment a CSS inline.
 * Trabajan con el nuevo shape de BoxAlignment (objeto con .horizontal / .vertical).
 */

import type { BoxAlignment, HorizontalAlignment, VerticalAlignment } from './Alignment';

// ─── Box (CSS Grid stacking) ──────────────────────────────────────────────────

/**
 * Resuelve el `place-items` de un Box stack container.
 * CSS Grid: "align-items justify-items"
 */
export function resolveBoxPlaceItems(alignment: BoxAlignment): string {
    // grid place-items = "<vertical> <horizontal>"
    const v = resolveCssAlign(alignment.vertical);
    const h = resolveCssAlign(alignment.horizontal);
    return `${v} ${h}`;
}

/**
 * Resuelve el `place-self` de un hijo de Box que sobreescribe su alineación.
 * Usado por Modifier.align() dentro de un Box.
 */
export function resolveBoxPlaceSelf(alignment: BoxAlignment): string {
    const v = resolveCssAlign(alignment.vertical);
    const h = resolveCssAlign(alignment.horizontal);
    return `place-self:${v} ${h};`;
}

// ─── Flex (Column / Row cross-axis align-self) ────────────────────────────────

/**
 * Resuelve `align-self` para un hijo de Column (eje horizontal).
 */
export function resolveColumnAlignSelf(alignment: HorizontalAlignment): string {
    return `align-self:${alignment.cssValue};`;
}

/**
 * Resuelve `align-self` para un hijo de Row (eje vertical).
 */
export function resolveRowAlignSelf(alignment: VerticalAlignment): string {
    return `align-self:${alignment.cssValue};`;
}

// ─── Internos ─────────────────────────────────────────────────────────────────

/** Normaliza los valores CSS de flex a los equivalentes de grid */
function resolveCssAlign(value: string): string {
    switch (value) {
        case 'flex-start': return 'start';
        case 'flex-end':   return 'end';
        default:           return 'center';
    }
}
