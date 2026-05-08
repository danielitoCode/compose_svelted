<script lang="ts">
    import { Modifier } from "../core/modifier/Modifier";
    import { resolveColor } from "../core/theme/resolve";
    import type { ColorToken } from "../core/theme/ColorScheme";

    export let modifier: Modifier = Modifier.empty();
    export let color: ColorToken = "surface";
</script>

<!--
    Surface — Contenedor base de Material 3.
    Sin dependencias de Tailwind.
-->
<div
        class="cs-surface"
        style={`
    background:${resolveColor(color)};
    ${modifier.toStyle()}
  `}
>
    <slot />
</div>

<style>
    .cs-surface {
        display: block;
        box-sizing: border-box;
    }
</style>
