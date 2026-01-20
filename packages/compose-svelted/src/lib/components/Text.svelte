<script lang="ts">
    import { Modifier } from "../core/modifier/Modifier";
    import { resolveTextStyle, resolveColor } from "../core/theme/resolve";
    import type { TextStyleToken } from "../core/theme/TextStyle";
    import { ColorScheme, type ColorToken } from "../core/theme/ColorScheme";

    export let modifier: Modifier = Modifier.empty();
    export let textStyle: TextStyleToken = "bodyMedium";

    // Aceptamos token o string directo
    export let color: ColorToken | string = "onSurface";  // string literal por defecto

    // Usamos la misma lógica que Surface (que ya funciona)
    $: resolvedColor = typeof color === "string" ? resolveColor(color as ColorToken) : color;
</script>

<p class="block m-0" style={`
  ${resolveTextStyle(textStyle)};
  color: ${resolvedColor};
  ${modifier.toStyle()}
`}>
    <slot />
</p>