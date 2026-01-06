<script lang="ts">
    import { Modifier } from "../core/modifier/Modifier";
    import { resolveColor } from "../core/theme/resolve";
    import type { ColorToken } from "../core/theme/ColorScheme";

    // ✅ default = no-op modifier
    export let modifier: Modifier = Modifier.empty();
    export let color: ColorToken = "surface";
</script>

<div
        class="block"
        style={`
    background:${resolveColor(color)};
    ${modifier.toStyle()}
  `}
>
    <slot />
</div>
