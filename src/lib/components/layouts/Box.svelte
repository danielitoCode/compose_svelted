<script lang="ts">
    import { Modifier } from "../../core/modifier/Modifier";

    export let modifier: Modifier = Modifier.empty();
</script>

<div
        class="relative"
        style={modifier.toStyle()}
>
    <slot />
</div>