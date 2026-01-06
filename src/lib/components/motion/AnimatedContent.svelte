<script lang="ts">
    import type { ContentTransition } from "../../core/motion/ContentTransition";
    import { fade } from "../../core/motion/contentTransitions";

    export let targetState: any;
    export let transition: ContentTransition = fade();

    let currentState = targetState;
    let previousState: any = null;
    let animating = false;

    $: if (targetState !== currentState) {
        previousState = currentState;
        currentState = targetState;
        animating = true;

        setTimeout(() => {
            previousState = null;
            animating = false;
        }, transition.duration);
    }
</script>

<div class="relative overflow-hidden">
    {#if previousState !== null}
        <div
                class={`absolute inset-0 ${transition.exit}`}
        >
            <slot value={previousState} />
        </div>
    {/if}

    <div
            class={`${animating ? transition.enter : ""}`}
    >
        <slot value={currentState} />
    </div>
</div>