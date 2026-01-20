<script lang="ts">
    import { getContext } from "svelte";
    import { Modifier } from "../core/modifier/Modifier";
    import { resolveTextStyle, resolveColor } from "../core/theme/resolve";
    import type { TextStyleToken } from "../core/theme/TextStyle";
    import type { ColorToken } from "../core/theme/ColorScheme";
    import type { BoxLayoutContext } from "./layouts/boxContext";
    import { BOX_CTX } from "./layouts/boxContext";
    import { ModifierImpl } from "../core/modifier/ModifierImpl";

    export let modifier: Modifier = Modifier.empty();
    export let textStyle: TextStyleToken = "bodyMedium";
    export let color: ColorToken | string = "onSurface";

    $: resolvedColor =
        typeof color === "string" ? resolveColor(color as ColorToken) : color;

    const box = getContext<BoxLayoutContext | undefined>(BOX_CTX);

    // Convertimos a impl para leer meta.align si hace falta
    $: modImpl = modifier as unknown as ModifierImpl;
</script>

{#if box}
    <!-- Wrapper ABSOLUTO controlado por Box -->
    <div style={`
    ${box.resolveChildPosition(modImpl)}
    ${modifier.toStyle()}
  `}>
        <p style={`
      margin: 0;
      display: block;
      ${resolveTextStyle(textStyle)};
      color: ${resolvedColor};
    `}>
            <slot />
        </p>
    </div>
{:else}
    <!-- Render normal fuera de Box -->
    <p style={`
    margin: 0;
    display: block;
    ${resolveTextStyle(textStyle)};
    color: ${resolvedColor};
    ${modifier.toStyle()}
  `}>
        <slot />
    </p>
{/if}