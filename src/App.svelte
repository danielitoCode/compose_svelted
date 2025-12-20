<script lang="ts">

    import {AppRoot, Column, ComposeTheme, Row, Surface, Text} from "./lib";
    import { Modifier } from "./lib";
</script>

<ComposeTheme mode="system">
    <AppRoot>
        <Surface color = "primary" modifier={Modifier.fillMaxHeight()}>
            <Column modifier={Modifier.empty()}>
                <Text modifier={Modifier.padding(8)}>
                    Hola Compose
                </Text>

                <Row modifier={Modifier.padding(4)}>
                    <Text>A</Text>
                    <Text>B</Text>
                </Row>
            </Column>
        </Surface>
    </AppRoot>
</ComposeTheme>