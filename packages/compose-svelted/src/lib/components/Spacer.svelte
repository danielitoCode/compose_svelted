<script lang="ts">
    import { Modifier } from "../core/modifier/Modifier";

    /**
     * Spacer: ocupa espacio vacío.
     * Uso: <Spacer modifier={Modifier.height(16)} /> o width()
     */
    export let modifier: Modifier = Modifier.empty();
</script>

<div style={modifier.toStyle()}></div>