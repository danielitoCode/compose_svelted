<script lang="ts">
    import type { Modifier } from "../../core/modifier/Modifier";
    import { ModifierNone } from "../../core/modifier/Modifier";

    export let modifier: Modifier = ModifierNone;
</script>

<div
        class="relative"
        style={modifier.toStyle()}
>
    <slot />
</div>