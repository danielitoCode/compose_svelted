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

    $: backgroundColor = typeof color === "string" ? resolveColor(color as ColorToken) : color;
    $: contentColor = typeof onColor === "string" ? resolveColor(onColor as ColorToken) : onColor;
    $: borderRadius = `var(--md-sys-shape-${shape})`;
    $: boxShadow = `var(--md-sys-elevation-${elevation})`;
</script>

<!--
    Button — Componente Material 3 independiente.
    No depende de Tailwind.
-->
<button
        on:click={onClick}
        class="cs-button"
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

<style>
    .cs-button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border: none;
        cursor: pointer;
        padding: 10px 24px;
        gap: 8px;
        font-family: inherit;
        font-weight: 500;
        letter-spacing: 0.1px;
        transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        user-select: none;
        -webkit-tap-highlight-color: transparent;
        outline: none;
    }

    .cs-button:hover {
        opacity: 0.92;
        box-shadow: var(--md-sys-elevation-level2);
    }

    .cs-button:active {
        transform: scale(0.97);
        opacity: 0.85;
    }
</style>