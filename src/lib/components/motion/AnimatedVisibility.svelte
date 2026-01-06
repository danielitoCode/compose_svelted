<script lang="ts">
    import type { AnimationSpec } from "../../core/motion/AnimationSpec";
    import { fadeIn, fadeOut } from "../../core/motion/transitions";

    export let visible: boolean;

    // Defaults elegantes (Compose-like)
    export let enter: AnimationSpec = fadeIn();
    export let exit: AnimationSpec = fadeOut();

    let shouldRender = visible;
    let style = "";

    function applyEnter() {
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
    }

    function applyExit() {
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

    $: {
        if (visible) {
            shouldRender = true;
            applyEnter();
        } else if (shouldRender) {
            applyExit();
        }
    }
</script>

{#if shouldRender}
    <div style={style}>
        <slot />
    </div>
{/if}