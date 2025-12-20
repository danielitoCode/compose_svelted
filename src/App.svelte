<script lang="ts">

    import {AppRoot, Column, ComposeTheme, Row, Surface, Text} from "./lib";
    import { Modifier } from "./lib";
    import {Alignment} from "./lib";
    import {Arrangement} from "./lib";
</script>

<ComposeTheme mode="light">
    <AppRoot>
        <Surface color = "primary" modifier={Modifier.fillMaxSize()}>

            <Row modifier={Modifier.fillMaxHeight()}>
                <Column
                        modifier={Modifier.fillMaxHeight()}
                        horizontalAlignment={Alignment.CenterHorizontally}
                        verticalArrangement={Arrangement.SpaceBetween}
                >
                    <Text modifier={Modifier.padding(8)}>
                        Hola Compose
                    </Text>

                    <Row modifier={Modifier.padding(4)}>
                        <Text>A</Text>
                        <Text>B</Text>
                    </Row>
                </Column>

                <Column
                        modifier={Modifier.fillMaxHeight()}
                        horizontalAlignment={Alignment.Start}
                        verticalArrangement={Arrangement.SpaceAround}
                >
                    <Text modifier={Modifier.padding(8)}>
                        Hola Compose
                    </Text>

                    <Row modifier={Modifier.padding(4)}>
                        <Text>A</Text>
                        <Text>B</Text>
                    </Row>
                </Column>

                <Column
                        horizontalAlignment={Alignment.CenterHorizontally}
                        verticalArrangement={Arrangement.spacedBy(29)}
                >
                    <Text modifier={Modifier.padding(8)}>
                        Hola Compose
                    </Text>

                    <Row modifier={Modifier.padding(4)}>
                        <Text>A</Text>
                        <Text>B</Text>
                    </Row>
                </Column>

                <Column
                        horizontalAlignment={Alignment.CenterHorizontally}
                >
                    <Text modifier={Modifier.padding(8)}>
                        Hola Compose
                    </Text>

                    <Row modifier={Modifier.padding(4)}>
                        <Text>A</Text>
                        <Text>B</Text>
                    </Row>
                </Column>
            </Row>
        </Surface>
    </AppRoot>
</ComposeTheme>