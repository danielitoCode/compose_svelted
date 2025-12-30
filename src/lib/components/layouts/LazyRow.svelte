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

    export let scrollEnabled: boolean = true;
    export let hideScrollbar: boolean = false;
    export let horizontalSpacing: number | null = null;

    function resolveGap(): string {
        if (horizontalSpacing !== null) {
            return `${horizontalSpacing}px`;
        }

        return horizontalArrangement.type === "spaced"
            ? `${horizontalArrangement.gap}px`
            : "0px";
    }

    function resolveOverflowX(): string {
        return scrollEnabled ? "auto" : "hidden";
    }

    function resolveScrollbarStyle(): string {
        if (!hideScrollbar) return "";

        return `
      scrollbar-width: none;
      -ms-overflow-style: none;
    `;
    }
</script>

<div
        class={hideScrollbar ? "lazy-row--hide-scrollbar" : ""}
        style={`
    display: flex;
    flex-direction: row;

    align-items: ${verticalAlignment};
    justify-content: ${horizontalArrangement.justifyContent};
    gap: ${resolveGap()};

    overflow-x: ${resolveOverflowX()};
    overflow-y: visible;

    height: fit-content;
    min-height: fit-content;

    ${resolveScrollbarStyle()}
    ${modifier.toStyle()}
  `}
>
    {#each items as item}
        <slot {item} />
    {/each}
</div>

<style>
    .lazy-row--hide-scrollbar::-webkit-scrollbar {
        display: none;
    }
</style>