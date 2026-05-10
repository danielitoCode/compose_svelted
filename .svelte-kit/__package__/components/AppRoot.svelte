<script lang="ts">
    import { Modifier } from "../core/modifier/Modifier";

    export let modifier: Modifier = Modifier.empty();
</script>

<!--
    AppRoot — ancla de toda la aplicación.

    Ocupa el 100% del contenedor padre (que gracias a baseline.css es el viewport).
    overflow:hidden garantiza que ningún hijo desborde el viewport accidentalmente.
    position:relative es el contexto de posicionamiento para capas absolutas internas.
    Se añade display:flex para actuar como raíz sólida para el crecimiento de hijos.
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
    <slot />
</div>