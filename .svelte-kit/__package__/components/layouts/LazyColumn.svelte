<script lang="ts">
    import { Modifier } from "../../core/modifier/Modifier";
    import { onMount, tick } from "svelte";
    import { Alignment } from "./Alignment";
    import { Arrangement } from "./Arrangement";
    import type { ArrangementValue } from "./Arrangement";
    import type { HorizontalAlignment } from "./Alignment";

    export let items: any[] = [];
    export let modifier: Modifier = Modifier.empty();

    export let horizontalAlignment: HorizontalAlignment = Alignment.Start;
    export let verticalArrangement: ArrangementValue = Arrangement.Start;

    let container: HTMLDivElement;
    let probeItem: HTMLDivElement | null = null;

    let scrollTop = 0;
    let viewportHeight = 0;

    let estimatedItemHeight = 56;
    let measured = false;

    const overscan = 3;

    onMount(() => {
        viewportHeight = container.clientHeight;
    });

    async function measure() {
        await tick();
        if (probeItem) {
            estimatedItemHeight = probeItem.offsetHeight;
            measured = true;
        }
    }

    $: if (probeItem && !measured) {
        measure();
    }

    function onScroll(e: Event) {
        scrollTop = (e.target as HTMLDivElement).scrollTop;
    }

    // --- Virtualization ---
    $: totalHeight = items.length * estimatedItemHeight;

    $: startIndex = Math.max(
        0,
        Math.floor(scrollTop / estimatedItemHeight) - overscan
    );

    $: visibleCount =
        Math.ceil(viewportHeight / estimatedItemHeight) + overscan * 2;

    $: endIndex = Math.min(items.length, startIndex + visibleCount);
    $: visibleItems = items.slice(startIndex, endIndex);

    function resolveGap(): string {
        return verticalArrangement.type === "spaced"
            ? `${verticalArrangement.gap}px`
            : "0px";
    }
</script>

<div
        bind:this={container}
        on:scroll={onScroll}
        class="compose-lazy-column"
        style={`
    overflow-y: auto;
    overflow-x: hidden;
    position: relative;
    ${modifier.toStyle()}
  `}
>
    <!-- Espacio total -->
    <div style={`height:${totalHeight}px; position:relative;`}>
        <!-- Ventana visible -->
        <div
                style={`
        position:absolute;
        top:${startIndex * estimatedItemHeight}px;
        left:0;
        right:0;

        display:flex;
        flex-direction:column;
        align-items:${horizontalAlignment};
        gap:${resolveGap()};
      `}
        >
            {#each visibleItems as item, i}
                {#if i === 0 && !measured}
                    <div bind:this={probeItem}>
                        <slot {item} />
                    </div>
                {:else}
                    <div>
                        <slot {item} />
                    </div>
                {/if}
            {/each}
        </div>
    </div>
</div>