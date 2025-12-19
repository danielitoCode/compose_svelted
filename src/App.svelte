<script lang="ts">
    import {Column, ComposeTheme, Row, Surface, Text} from "./lib";
    import { Modifier } from "./lib";
</script>

<ComposeTheme mode="system">
    <Surface modifier={Modifier.padding(16)}>
        <Column modifier={Modifier.fillMaxWidth()}>
            <Text modifier={Modifier.padding(8)}>
                Hola Compose
            </Text>

            <Row modifier={Modifier.padding(4)}>
                <Text>A</Text>
                <Text>B</Text>
            </Row>
        </Column>
    </Surface>
</ComposeTheme>