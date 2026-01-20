<script lang="ts">
    import { Modifier } from "../../core/modifier/Modifier";
    import { resolveColor } from "../../core/theme/resolve";
    import { ColorScheme, type ColorToken } from "../../core/theme/ColorScheme";

    export let onClick: () => void = () => {};
    export let modifier: Modifier = Modifier.empty();

    export let color: ColorToken | string = "primary";
    export let onColor: ColorToken | string = "onPrimary";

    export let shape: "none" | "extraSmall" | "small" | "medium" | "large" = "large";
    export let elevation: "level0" | "level1" | "level2" | "level3" | "level4" = "level1";

    $: backgroundColor = resolveColor(color as ColorToken);
    $: contentColor = resolveColor(onColor as ColorToken);
    $: borderRadius = `var(--md-sys-shape-${shape})`;
    $: boxShadow = `var(--md-sys-elevation-${elevation})`;
</script>

<button
        on:click={onClick}
        class="border-0 cursor-pointer inline-flex items-center justify-center gap-8 font-medium tracking-wider transition-all hover:opacity-90 active:scale-95"
        style={`
    background: ${backgroundColor};
    color: ${contentColor};
    border-radius: ${borderRadius};
    box-shadow: ${boxShadow};
    padding: 10px 24px;  <!-- Padding moderado: vertical 10px, horizontal 24px (como Compose) -->
    ${modifier.toStyle()}
  `}
>
    <slot />
</button>