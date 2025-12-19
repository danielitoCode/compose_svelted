<script lang="ts">
    import { Modifier } from "../../core/modifier/Modifier";

    export let modifier: Modifier = Modifier.empty();
</script>

<div
        class="flex flex-col"
        style={modifier.toStyle()}
>
    <slot />
</div>