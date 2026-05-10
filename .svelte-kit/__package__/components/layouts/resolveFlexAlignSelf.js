import { resolveBoxPlaceSelf } from './resolveAlignment';
/**
 * @deprecated Usar resolveBoxPlaceSelf desde resolveAlignment.ts
 * Mantenido por compatibilidad interna durante la transición.
 */
export function resolveFlexAlignSelf(alignment) {
    return resolveBoxPlaceSelf(alignment);
}
