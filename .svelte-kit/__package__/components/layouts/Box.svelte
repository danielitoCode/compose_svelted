<script lang="ts">
    import { Modifier } from "../../core/modifier/Modifier";
    import type {BoxAlignment} from "./Alignment";

    export let modifier: Modifier = Modifier.empty();
    export let contentAlignment: BoxAlignment | undefined = undefined;

    $: contentStyle = contentAlignment ? alignmentToFlexStyle(contentAlignment) : "";

    function alignmentToFlexStyle(alignment: BoxAlignment): string {
        const parts = alignment.split(" ");
        const horiz = parts[0] === "flex-start" ? "flex-start" : parts[0] === "flex-end" ? "flex-end" : "center";
        const vert = parts[1] || parts[0];
        const v = vert === "flex-start" ? "flex-start" : vert === "flex-end" ? "flex-end" : "center";

        return `display:flex; align-items:${v}; justify-content:${horiz};`;
    }
</script>

<div
        class="relative"
        style={`${contentStyle} ${modifier.toStyle()}`}
>
    <slot />
</div>