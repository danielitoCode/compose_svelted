<script lang="ts">
    import { Modifier } from "../../core/modifier/Modifier";
    import { Alignment } from "./Alignment";
    import { Arrangement } from "./Arrangement";
    import type { ArrangementValue } from "./Arrangement";
    import type { VerticalAlignment } from "./Alignment";

    export let modifier: Modifier = Modifier.empty();

    /**
     * Alineación en el eje cross (vertical) de todos los hijos.
     * Equivalente a verticalAlignment en Jetpack Compose Row.
     * @default Alignment.Top
     */
    export let verticalAlignment: VerticalAlignment = Alignment.Top;

    /**
     * Disposición en el eje main (horizontal).
     * Equivalente a horizontalArrangement en Jetpack Compose Row.
     * @default Arrangement.Start
     */
    export let horizontalArrangement: ArrangementValue = Arrangement.Start;

    $: gapStyle = horizontalArrangement.type === 'spaced'
        ? `gap:${horizontalArrangement.gap}px;`
        : '';
</script>

<!--
    Row — contenedor flex horizontal.

    • align-items controla la alineación vertical de los hijos (cross-axis)
    • justify-content controla la distribución horizontal (main-axis)
    • Los hijos pueden sobreescribir su alineación individual via
      Modifier.align() que inyecta align-self en su propio estilo

    No hay wrapper interno: cada hijo gestiona su propio layout.
    El scroll no está habilitado por defecto — usar Modifier.horizontalScroll()
    o LazyRow para contenido que desborda.
-->
<div
        style={`
    display: flex;
    flex-direction: row;
    align-items: ${verticalAlignment.cssValue};
    justify-content: ${horizontalArrangement.justifyContent};
    ${gapStyle}
    ${modifier.toStyle()}
  `}
>
    <slot />
</div>
