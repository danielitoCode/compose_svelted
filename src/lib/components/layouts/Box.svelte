<script lang="ts">
    import { Modifier } from "../../core/modifier/Modifier";
    import { Alignment } from "./Alignment";
    import type { BoxAlignment } from "./Alignment";
    import { resolveBoxPlaceItems } from "./resolveAlignment";

    export let modifier: Modifier = Modifier.empty();

    /**
     * Alineación por defecto para TODOS los hijos del Box.
     * Equivalente a contentAlignment en Jetpack Compose.
     *
     * Cada hijo puede sobreescribir con Modifier.align(Alignment.XXX).
     *
     * @default Alignment.TopStart
     */
    export let contentAlignment: BoxAlignment = Alignment.TopStart;

    /**
     * CSS Grid place-items resuelto desde el contentAlignment.
     * Formato: "<vertical> <horizontal>"
     */
    $: placeItems = resolveBoxPlaceItems(contentAlignment);
</script>

<!--
    Box — contenedor de apilamiento (stack), fiel a Jetpack Compose.

    Implementación:
    • display: grid con grid-template-areas: 'stack'
    • El CSS interno fuerza a todos los hijos directos a usar grid-area: 'stack'
    • Esto hace que todos los hijos se solapen en la misma celda.
    • place-items controla la alineación por defecto de TODOS los hijos.
    • Cada hijo puede sobreescribir con place-self via Modifier.align().
-->
<div
    class="cs-box"
    style={`
        display: grid;
        grid-template-areas: 'stack';
        place-items: ${placeItems};
        position: relative;
        ${modifier.toStyle()}
    `}
>
    <slot />
</div>

<style>
    /* Fuerza a todos los hijos directos a apilarse en la misma área de grid */
    .cs-box > :global(*) {
        grid-area: stack;
    }
</style>
