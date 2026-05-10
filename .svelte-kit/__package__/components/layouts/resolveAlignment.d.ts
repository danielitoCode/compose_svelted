/**
 * resolveAlignment.ts
 *
 * Funciones puras que traducen los tokens de Alignment a CSS inline.
 * Trabajan con el nuevo shape de BoxAlignment (objeto con .horizontal / .vertical).
 */
import type { BoxAlignment, HorizontalAlignment, VerticalAlignment } from './Alignment';
/**
 * Resuelve el `place-items` de un Box stack container.
 * CSS Grid: "align-items justify-items"
 */
export declare function resolveBoxPlaceItems(alignment: BoxAlignment): string;
/**
 * Resuelve el `place-self` de un hijo de Box que sobreescribe su alineación.
 * Usado por Modifier.align() dentro de un Box.
 */
export declare function resolveBoxPlaceSelf(alignment: BoxAlignment): string;
/**
 * Resuelve `align-self` para un hijo de Column (eje horizontal).
 */
export declare function resolveColumnAlignSelf(alignment: HorizontalAlignment): string;
/**
 * Resuelve `align-self` para un hijo de Row (eje vertical).
 */
export declare function resolveRowAlignSelf(alignment: VerticalAlignment): string;
