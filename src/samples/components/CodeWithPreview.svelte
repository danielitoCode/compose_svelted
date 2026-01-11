<script lang="ts">
    import { Row, Modifier, Surface } from "../../../dist";

    export let modifier: Modifier = Modifier.empty();
</script>

<Row
        modifier={modifier.fillMaxWidth()}
>
    <Surface modifier={Modifier.weight(1).padding(8)}>
        <slot name="code" />
    </Surface>

    <Surface modifier={Modifier.weight(1).padding(8)}>
        <slot name="preview" />
    </Surface>
</Row>