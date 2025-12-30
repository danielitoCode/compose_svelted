<script lang="ts">
    import { Modifier } from "../../core/modifier/Modifier";
    import { Alignment } from "./Alignment";
    import { Arrangement } from "./Arrangement";
    import type { ArrangementValue } from "./Arrangement";
    import type { VerticalAlignment } from "./Alignment";

    export let items: any[] = [];
    export let modifier: Modifier = Modifier.empty();

    export let verticalAlignment: VerticalAlignment = Alignment.Top;
    export let horizontalArrangement: ArrangementValue = Arrangement.Start;

    function resolveGap(arrangement: ArrangementValue): string {
        return arrangement.type === "spaced"
            ? `${arrangement.gap}px`
            : "0px";
    }
</script>

<div
        style={`
    display: flex;
    flex-direction: row;
    align-items: ${verticalAlignment};
    justify-content: ${horizontalArrangement.justifyContent};
    gap: ${resolveGap(horizontalArrangement)};
    overflow-x: auto;
    ${modifier.toStyle()}
  `}
>
    {#each items as item}
        <slot {item} />
    {/each}
</div>