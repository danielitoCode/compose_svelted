<script lang="ts">
    import {
        Arrangement,
        Alignment,
        Column,
        Row,
        Box,
        Modifier,
        Text,
        TextStyle,
        Spacer,
        Surface,
        ColorScheme,
        CodeBlock
    } from '@danielito1996/compose-svelted';
    import PreviewBox from "../components/PreviewBox.svelte";
</script>

<Column
        modifier={Modifier.fillMaxSize().padding(24).verticalScroll(true)}
        verticalArrangement={Arrangement.spacedBy(32)}
>
    <Text textStyle={TextStyle.HeadlineLarge}>
        📐 Layouts
    </Text>

    <Text textStyle={TextStyle.BodyLarge}>
        Compose Svelted ofrece layouts declarativos inspirados en Jetpack Compose.
        Column, Row y Box cubren la mayoría de los casos de diseño.
    </Text>

    <!-- ================= COLUMN ================= -->

    <Text textStyle={TextStyle.TitleLarge}>
        📦 Column
    </Text>

    <Row
            modifier={Modifier.fillMaxWidth()}
            verticalAlignment = {Alignment.Bottom}
    >
        <Surface modifier={Modifier.weight(1).padding(8)}>
            <CodeBlock language="svelte">
                {`
                    <Column verticalArrangement={Arrangement.spacedBy(8)}>
                        <Text>Item 1</Text>
                        <Text>Item 2</Text>
                        <Text>Item 3</Text>
                    </Column>
                `}
                </CodeBlock>
        </Surface>

        <Surface modifier={Modifier.weight(1).padding(16)}>
            <PreviewBox modifier = {Modifier.fillMaxWidth().height(160)}>
                <Column verticalArrangement={Arrangement.spacedBy(8)}>
                    <Text>Item 1</Text>
                    <Text>Item 2</Text>
                    <Text>Item 3</Text>
                </Column>
            </PreviewBox>
        </Surface>
    </Row>

    <!-- ================= ROW ================= -->

    <Text textStyle={TextStyle.TitleLarge}>
        📏 Row
    </Text>

    <Row
            verticalAlignment = { Alignment.Bottom }
            modifier={Modifier.fillMaxWidth()}>
        <Surface modifier={Modifier.weight(1).padding(8)}>
            <CodeBlock language="svelte">
                {`
                    <Row
                        horizontalArrangement={Arrangement.SpaceBetween}

                    >
                            <Text>Elemento A</Text>
                            <Text>Elemento B</Text>
                            <Text>Elemento C</Text>
                    </Row>
                `}
            </CodeBlock>
        </Surface>

        <Surface
                modifier={Modifier.weight(1).padding(16)}>
            <PreviewBox
                    modifier={ Modifier.fillMaxWidth().height(210).padding(20)}
            >
                <Row
                        modifier={ Modifier.fillMaxWidth() }
                        verticalAlignment = {Alignment.CenterVertically}
                        horizontalArrangement={ Arrangement.SpaceBetween }
                >
                    <Text>Elemento A</Text>
                    <Text>Elemento B</Text>
                    <Text>Elemento C</Text>
                </Row>
            </PreviewBox>
        </Surface>
    </Row>

    <!-- ================= BOX ================= -->

    <Text textStyle={TextStyle.TitleLarge}>
        🧩 Box
    </Text>

    <Row
            verticalAlignment = { Alignment.Bottom }
            modifier={Modifier.fillMaxWidth()}
    >
        <Surface modifier={Modifier.weight(1).padding(8)}>
            <CodeBlock language="svelte">
                {`
                    <Box
                        modifier={Modifier.size(210)}
                        contentAlignment={Alignment.Center}
                    >
                        <Text>Center</Text>
                        <Text modifier={Modifier.align(Alignment.BottomEnd)}>
                            Bottom
                        </Text>
                    </Box>`}
            </CodeBlock>
        </Surface>

        <Surface modifier={Modifier.weight(1).padding(16)}>
            <PreviewBox
                    modifier={ Modifier.fillMaxWidth().height(210).padding(20)}
            >
                <Box
                        modifier={ Modifier.fillMaxWidth() }
                        contentAlignment={Alignment.Center}
                >
                    <Text modifier={Modifier.align(Alignment.TopStart)}>
                        Start
                    </Text>
                    <Text>Center</Text>
                    <Text modifier={Modifier.align(Alignment.BottomEnd)}>
                        Bottom
                    </Text>
                </Box>
            </PreviewBox>
        </Surface>
    </Row>

    <Spacer />

    <Text textStyle={TextStyle.BodyLarge}>
        Estos tres layouts forman la base de todo diseño en Compose Svelted.
        La complejidad surge de la composición, no de layouts adicionales.
    </Text>
</Column>


