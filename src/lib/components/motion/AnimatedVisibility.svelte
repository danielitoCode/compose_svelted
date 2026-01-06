<script lang="ts">
    import { onMount } from "svelte";

    export let visible: boolean;

    export let enter = {
        from: "opacity: 0; transform: scale(0.95)",
        to: "opacity: 1; transform: scale(1)",
        duration: 180,
        easing: "ease-out"
    };

    export let exit = {
        from: "opacity: 1; transform: scale(1)",
        to: "opacity: 0; transform: scale(0.95)",
        duration: 140,
        easing: "ease-in"
    };

    let shouldRender = visible;
    let style = "";

    $: if (visible) {
        shouldRender = true;
        style = `
            ${enter.from};
            transition: all ${enter.duration}ms ${enter.easing};
        `;
        requestAnimationFrame(() => {
            style = `
                ${enter.to};
                transition: all ${enter.duration}ms ${enter.easing};
            `;
        });
    } else if (shouldRender) {
        style = `
            ${exit.from};
            transition: all ${exit.duration}ms ${exit.easing};
        `;
        requestAnimationFrame(() => {
            style = `
                ${exit.to};
                transition: all ${exit.duration}ms ${exit.easing};
            `;
        });
        setTimeout(() => {
            shouldRender = false;
        }, exit.duration);
    }
</script>

{#if shouldRender}
    <div style={style}>
        <slot />
    </div>
{/if}