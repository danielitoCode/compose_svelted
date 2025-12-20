<script lang="ts">
    import { Modifier } from "../core/modifier/Modifier";
    import { resolveTextStyle, resolveColor } from "../core/theme/resolve";
    import type { TextStyleToken } from "../core/theme/TextStyle";
    import {ColorScheme, type ColorToken} from "../core/theme/ColorScheme";

    export let modifier: Modifier = Modifier.empty();
    export let textStyle: TextStyleToken = "bodyMedium";
    // Color puede ser token del tema o un color directo (hex, rgb, named...)
    export let color: ColorToken | string = ColorScheme.OnSurface;

    // Resolvemos el color: si es token → var(--...), si es string directo → lo usamos tal cual
    $: finalColor = typeof color === "string" ? color : resolveColor(color);
</script>

<p
        class="block m-0"
        style={`
    ${resolveTextStyle(textStyle)};
    color:${finalColor};
    ${modifier.toStyle()}
  `}
>
    <slot />
</p>