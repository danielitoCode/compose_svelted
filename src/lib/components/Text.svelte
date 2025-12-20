<script lang="ts">
    import { Modifier } from "../core/modifier/Modifier";
    import { resolveTextStyle, resolveColor } from "../core/theme/resolve";
    import type { TextStyleToken } from "../core/theme/TextStyle";
    import type { ColorToken } from "../core/theme/ColorScheme";

    export let modifier: Modifier = Modifier.empty();
    export let style: TextStyleToken = "bodyMedium";
    export let color: ColorToken = "onSurface";
</script>

<p
        class="block m-0"
        style={`
    ${resolveTextStyle(style)};
    color:${resolveColor(color)};
    ${modifier.toStyle()}
  `}
>
    <slot />
</p>