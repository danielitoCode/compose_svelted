<script lang="ts">
    import { Modifier } from "../core/modifier/Modifier";
    import { resolveColor } from "../core/theme/resolve";
    import { ColorScheme, type ColorToken } from "../core/theme/ColorScheme";

    export let onClick: () => void = () => {};
    export let modifier: Modifier = Modifier.empty();

    // Defaults para TonalButton (secundario suave)
    export let color: ColorToken | string = "secondaryContainer";
    export let onColor: ColorToken | string = "onSecondaryContainer";

    export let shape: "none" | "extraSmall" | "small" | "medium" | "large" = "large";
    export let elevation: "level0" | "level1" | "level2" | "level3" | "level4" = "level0";  // Tonal suele ser sin elevación

    $: backgroundColor = typeof color === "string" ? resolveColor(color as ColorToken) : color;
    $: contentColor = typeof onColor === "string" ? resolveColor(onColor as ColorToken) : onColor;
    $: borderRadius = `var(--md-sys-shape-${shape})`;
    $: boxShadow = `var(--md-sys-elevation-${elevation})`;
</script>

<button
        on:click={onClick}
        class="border-0 cursor-pointer flex items-center justify-center gap-8 px-24 py-12 font-medium tracking-wider transition-all hover:opacity-90 active:scale-95"
        style={`
    background: ${backgroundColor};
    color: ${contentColor};
    border-radius: ${borderRadius};
    box-shadow: ${boxShadow};
    ${modifier.toStyle()}
  `}
>
    <slot />
</button>