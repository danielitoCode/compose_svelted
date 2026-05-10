<script lang="ts">
    import { Modifier } from "../../core/modifier/Modifier";
    import { Alignment } from "./Alignment";
    import { Arrangement } from "./Arrangement";
    import type { ArrangementValue } from "./Arrangement";
    import type { HorizontalAlignment } from "./Alignment";

    export let modifier: Modifier = Modifier.empty();

    /**
     * Alineación en el eje cross (horizontal) de todos los hijos.
     * Equivalente a horizontalAlignment en Jetpack Compose Column.
     * @default Alignment.Start
     */
    export let horizontalAlignment: HorizontalAlignment = Alignment.Start;

    /**
     * Disposición en el eje main (vertical).
     * Equivalente a verticalArrangement en Jetpack Compose Column.
     * @default Arrangement.Top
     */
    export let verticalArrangement: ArrangementValue = Arrangement.Top;

    $: gapStyle = verticalArrangement.type === 'spaced'
        ? `gap:${verticalArrangement.gap}px;`
        : '';
</script>

<!--
    Column — contenedor flex vertical.

    • align-items controla la alineación horizontal de los hijos (cross-axis)
    • justify-content controla la distribución vertical (main-axis)
    • Los hijos pueden sobreescribir su alineación individual via
      Modifier.align() que inyecta align-self en su propio estilo

    No hay wrapper interno: cada hijo gestiona su propio layout.
    El scroll no está habilitado por defecto — usar Modifier.verticalScroll()
    o LazyColumn para contenido que desborda.
-->
<div
        style={`
    display: flex;
    flex-direction: column;
    align-items: ${horizontalAlignment.cssValue};
    justify-content: ${verticalArrangement.justifyContent};
    ${gapStyle}
    ${modifier.toStyle()}
  `}
>
    <slot />
</div>
