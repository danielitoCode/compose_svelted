<script lang="ts">
    import type { ContentTransition } from "../../core/motion/ContentTransition";
    import { fade } from "../../core/motion/contentTransitions";
    import { Modifier } from "../../core/modifier/Modifier";

    export let targetState: any;
    export let transition: ContentTransition = fade();

    // 🔥 NUEVO: modifier (Compose-like)
    export let modifier: Modifier = Modifier.empty();

    let currentState = targetState;
    let previousState: any = null;
    let animating = false;

    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    $: if (targetState !== currentState) {
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

<!-- 🔥 CLAVE: el contenedor SIEMPRE ocupa espacio -->
<div
        class="relative overflow-hidden w-full h-full"
        style={modifier.toStyle()}
>
    {#if previousState !== null}
        <div class={`absolute inset-0 w-full h-full ${transition.exit}`}>
            <slot value={previousState} />
        </div>
    {/if}

    <div class={`w-full h-full ${animating ? transition.enter : ""}`}>
        <slot value={currentState} />
    </div>
</div>