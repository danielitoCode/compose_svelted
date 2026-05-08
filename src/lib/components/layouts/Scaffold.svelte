<script lang="ts">
    import { Modifier } from "../../core/modifier/Modifier";
    import { resolveBoxPlaceSelf } from "./resolveAlignment";
    import { Alignment } from "./Alignment";
    import type { BoxAlignment } from "./Alignment";

    export let modifier: Modifier = Modifier.empty();
    export let contentPadding = 16;

    /**
     * Posición del FloatingActionButton dentro del Scaffold.
     * @default Alignment.BottomEnd
     */
    export let fabAlignment: BoxAlignment = Alignment.BottomEnd;

    $: fabPlaceSelf = resolveBoxPlaceSelf(fabAlignment);
</script>

<!--
    Scaffold — estructura base de pantalla.

    Slots:
      topBar              → barra superior (TopAppBar)
      default             → contenido principal (ahora es un flex container para permitir fillMaxSize)
      bottomBar           → barra inferior (NavigationBar)
      floatingActionButton → FAB posicionado por fabAlignment
-->
<div
        class="cs-relative"
        style={`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow: hidden;
    ${modifier.toStyle()}
  `}
>
    <!-- Top bar -->
    <slot name="topBar" />

    <!-- Content — ocupa el espacio restante -->
    <!--
        Se añade display: flex para que los hijos que usen fillMaxSize()
        puedan expandirse correctamente basándose en el tamaño de este contenedor.
    -->
    <div
            style={`
      flex: 1;
      display: flex;
      flex-direction: column;
      min-height: 0;
      padding: ${contentPadding}px;
      overflow: hidden;
    `}
    >
        <slot />
    </div>

    <!-- Bottom bar -->
    <slot name="bottomBar" />

    <!-- FAB overlay -->
    <div
            style="
      position: absolute;
      inset: 0;
      pointer-events: none;
      display: grid;
      grid-template-areas: 'fab';
    "
    >
        <div
                style={`
        grid-area: fab;
        ${fabPlaceSelf}
        pointer-events: auto;
        margin: 16px;
        width: fit-content;
        height: fit-content;
      `}
        >
            <slot name="floatingActionButton" />
        </div>
    </div>
</div>
