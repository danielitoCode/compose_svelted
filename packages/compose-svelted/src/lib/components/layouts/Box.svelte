<script lang="ts">
    import { setContext } from "svelte";
    import { Modifier } from "../../core/modifier/Modifier";
    import type { BoxAlignment } from "./Alignment";
    import { Alignment } from "./Alignment";
    import { resolveBoxAlignment } from "./resolveAlignment";
    import { BOX_CTX, type BoxLayoutContext } from "./boxContext";
    import type { ModifierImpl } from "../../core/modifier/ModifierImpl";

    export let modifier: Modifier = Modifier.empty();
    export let contentAlignment: BoxAlignment = Alignment.TopStart;

    const ctx: BoxLayoutContext = {
        contentAlignment,
        resolveChildPosition: (childModifier?: ModifierImpl) => {
            const align = childModifier?.getMeta().align ?? contentAlignment;
            // resolveBoxAlignment ya devuelve "position:absolute; top... left..."
            return resolveBoxAlignment(align);
        }
    };

    // Actualiza el contexto cuando cambie contentAlignment
    $: setContext(BOX_CTX, { ...ctx, contentAlignment });
</script>

<div
        style={`
    position: relative;
    width: 100%;
    height: 100%;
    ${modifier.toStyle()}
  `}
>
    <slot />
</div>

<style>
    /* 👇 ESTO ES LO QUE FALTABA */
    :global(> *) {
        position: absolute;
        inset: 0;
    }
</style>