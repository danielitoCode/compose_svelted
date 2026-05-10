<script lang="ts">
    import type { ContentTransition } from "../../../core/motion/ContentTransition";
    import { fade } from "../../../core/motion/contentTransitions";

    export let targetState: any;
    export let transition: ContentTransition = fade();

    let currentKey = targetState;
    let exiting = false;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    $: if (targetState !== currentKey) {
        exiting = true;
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            currentKey = targetState;
            exiting = false;
            timeoutId = null;
        }, transition.duration);
    }
</script>

<!--
    Contenedor de transición — ocupa todo el espacio del padre.
    Se añade display:flex y flex-direction:column para asegurar que los hijos
    con height:100% o flex:1 se expandan correctamente.
-->
<div style="position:relative;width:100%;height:100%;overflow:hidden;display:flex;flex-direction:column;">
    <div
            style={`
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      transition: opacity ${transition.duration}ms ease, transform ${transition.duration}ms ease;
      ${exiting ? transition.exit : transition.enter}
    `}
    >
        <slot />
    </div>
</div>