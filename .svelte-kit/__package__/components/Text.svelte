<script lang="ts">
    import { Modifier } from "../core/modifier/Modifier";
    import { resolveTextStyle, resolveColor } from "../core/theme/resolve";
    import type { TextStyleToken } from "../core/theme/TextStyle";
    import { ColorScheme, type ColorToken } from "../core/theme/ColorScheme";

    export let modifier: Modifier = Modifier.empty();
    export let textStyle: TextStyleToken = "bodyMedium";

    // Aceptamos token o string directo
    export let color: ColorToken | string = "onSurface";

    $: resolvedColor = typeof color === "string" ? resolveColor(color as ColorToken) : color;
</script>

<!--
    Text — Componente Material 3 independiente.
    No depende de Tailwind.
-->
<p
    class="cs-text"
    style={`
        ${resolveTextStyle(textStyle)};
        color: ${resolvedColor};
        ${modifier.toStyle()}
    `}
>
    <slot />
</p>

<style>
    .cs-text {
        display: block;
        margin: 0;
        padding: 0;
    }
</style>