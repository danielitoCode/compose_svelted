<script lang="ts">
    import type { ContentTransition } from "../../core/motion/ContentTransition";
    import { fade } from "../../core/motion/contentTransitions";

    export let targetState: any;
    export let transition: ContentTransition = fade();

    let currentState = targetState;
    let previousState: any = null;
    let animating = false;

    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    $: if (targetState !== currentState) {
        // limpiar timeout previo si existe
        if (timeoutId) {
            clearTimeout(timeoutId);
            timeoutId = null;
        }

        previousState = currentState;
        currentState = targetState;
        animating = true;

        timeoutId = setTimeout(() => {
            previousState = null;
            animating = false;
            timeoutId = null;
        }, transition.duration);
    }
</script>

<div class="relative overflow-hidden">
    {#if previousState !== null}
        <div class={`absolute inset-0 ${transition.exit}`}>
            <slot value={previousState} />
        </div>
    {/if}

    <div class={animating ? transition.enter : ""}>
        <slot value={currentState} />
    </div>
</div>