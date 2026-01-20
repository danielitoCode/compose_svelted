<script lang="ts">
    import { Modifier } from "../../core/modifier/Modifier";
    import { resolveColor } from "../../core/theme/resolve";
    import type { ColorToken } from "../../core/theme/ColorScheme";

    export let onClick: () => void = () => {};
    export let modifier: Modifier = Modifier.empty();

    // MD3 Tonal defaults (IMPORTANTES)
    export let color: ColorToken | string = "secondaryContainer";
    export let onColor: ColorToken | string = "onSecondaryContainer";

    export let shape: "none" | "extraSmall" | "small" | "medium" | "large" = "large";

    $: backgroundColor = resolveColor(color as ColorToken);
    $: contentColor = resolveColor(onColor as ColorToken);
    $: borderRadius = `var(--md-sys-shape-${shape})`;
</script>

<button
        on:click={onClick}
        style={`
    background: ${backgroundColor};   /* 👈 CLAVE */
    color: ${contentColor};
    border-radius: ${borderRadius};

    position: relative;
    isolation: isolate;
    overflow: hidden;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    min-height: 40px;
    padding: 0 24px;

    font: var(--md-sys-typescale-label-large);
    font-weight: 500;

    border: none;
    cursor: pointer;
    user-select: none;
    outline: none;

    transition:
      background-color 160ms cubic-bezier(0.2,0,0,1);

    ${modifier.toStyle()}
  `}
>
    <!-- State layer -->
    <span
            class="md-state-layer"
            style={`background:${contentColor};`}
    />

    <span class="md-content">
    <slot />
  </span>
</button>

<style>
    .md-state-layer {
        position: absolute;
        inset: 0;
        opacity: 0;
        pointer-events: none;
        border-radius: inherit;
        transition: opacity 140ms cubic-bezier(0.2,0,0,1);
        z-index: 0;
    }

    .md-content {
        position: relative;
        z-index: 1;
    }

    /* Hover: perceptible pero sin “respirar” */
    button:hover .md-state-layer {
        opacity: 0.12;
    }

    /* Pressed */
    button:active .md-state-layer {
        opacity: 0.22;
    }

    /* Focus */
    button:focus-visible {
        outline: 2px solid
        color-mix(in srgb, currentColor 40%, transparent);
        outline-offset: 2px;
    }
</style>