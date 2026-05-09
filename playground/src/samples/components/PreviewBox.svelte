<script lang="ts">
    import {Alignment, Box, Modifier} from "@danielito1996/compose-svelted";

    export let modifier: Modifier = Modifier.empty();

</script>

<div class="preview-canvas">
    <Box
            contentAlignment = {Alignment.Center}
            modifier = { modifier }
    >
        <slot/>
    </Box>
</div>