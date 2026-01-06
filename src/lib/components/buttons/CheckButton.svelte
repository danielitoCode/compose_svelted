<script lang="ts">
    import { Modifier } from "../../core/modifier/Modifier";
    import { ColorScheme } from "../../core/theme/ColorScheme";
    import { resolveColor } from "../../core/theme/resolve";
    import { RoundedCornerShape } from "../../core/shapes/RoundedCornerShape";
    import AnimatedVisibility from "../motion/AnimatedVisibility.svelte";
    import { scaleIn, scaleOut } from "../../core/motion/transitions";
    import type { Shape } from "../../core/shapes/Shape";

    export let checked: boolean;
    export let onCheckedChange: (value: boolean) => void;

    export let enabled: boolean = true;
    export let shape: Shape = RoundedCornerShape(8);
    export let modifier: Modifier = Modifier.empty();

    function toggle() {
        if (!enabled) return;
        onCheckedChange(!checked);
    }

    $: background = checked
        ? resolveColor(ColorScheme.Primary)
        : resolveColor(ColorScheme.SurfaceVariant);

    $: contentColor = checked
        ? resolveColor(ColorScheme.OnPrimary)
        : resolveColor(ColorScheme.OnSurface);
</script>

<button
        on:click={toggle}
        disabled={!enabled}
        style={`
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 12px 16px;
        background: ${background};
        color: ${contentColor};
        border-radius: ${shape.toCssBorderRadius()};
        border: none;
        cursor: ${enabled ? "pointer" : "default"};
        transition: background 200ms ease;
        ${modifier.toStyle()}
    `}
>
    <!-- Check visual -->
    <div
            style={`
            width: 20px;
            height: 20px;
            border-radius: 4px;
            background: ${checked ? contentColor : "transparent"};
            display: flex;
            align-items: center;
            justify-content: center;
        `}
    >
        <AnimatedVisibility
                visible={checked}
                enter={scaleIn()}
                exit={scaleOut()}
        >
            <div
                    style={`
                    width: 10px;
                    height: 10px;
                    background: ${background};
                    border-radius: 2px;
                `}></div>
        </AnimatedVisibility>
    </div>

    <!-- Content -->
    <slot />
</button>