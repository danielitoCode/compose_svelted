<script lang="ts">
    import Surface from "../Surface.svelte";
    import { Modifier } from "../../core/modifier/Modifier";
    import type { Shape } from "../../core/shapes/Shape";
    import { RoundedCornerShape } from "../../core/shapes/RoundedCornerShape";

    export let elevation: number | string = 1;
    export let shape: Shape = RoundedCornerShape(16);
    export let modifier: Modifier = Modifier.empty();

    function elevationToShadow(value: number | string): string {
        if (!value || value === 0) return "none";
        const v = typeof value === "number" ? `${value}px` : value;
        return `0 ${v} calc(${v} * 3) rgba(0,0,0,0.16)`;
    }

    $: shadow = elevationToShadow(elevation);
</script>

<Surface
        modifier={modifier}
>
    <div style={`box-shadow: ${shadow}; border-radius: ${shape.toCssBorderRadius()};`}>
        <slot />
    </div>
</Surface>