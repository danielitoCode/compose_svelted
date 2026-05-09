Perfecto 👍
Te dejo las vistas completas, listas para copiar/pegar, ya refactorizadas con el patrón Code + Preview, coherentes con todo lo que has construido hasta ahora y sin dependencias externas.

Voy a darte dos pantallas completas:

LayoutsScreen.svelte

MotionsScreen.svelte

(ComponentsScreen ya la tienes cerrada y correcta).

📐 LayoutsScreen.svelte (COMPLETA)
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
</script>

<Column
        modifier={Modifier.fillMaxSize().padding(24).verticalScroll(true)}
        verticalArrangement={Arrangement.spacedBy(32)}
>
    <Text textStyle={TextStyle.HeadlineSmall}>
        📐 Layouts
    </Text>

    <Text textStyle={TextStyle.BodyLarge}>
        Compose Svelted ofrece layouts declarativos inspirados en Jetpack Compose.
        Column, Row y Box cubren la mayoría de los casos de diseño.
    </Text>

    <!-- ================= COLUMN ================= -->

    <Text textStyle={TextStyle.TitleMedium}>
        📦 Column
    </Text>

    <Row modifier={Modifier.fillMaxWidth()}>
        <Surface modifier={Modifier.weight(1).padding(8)}>
            <CodeBlock language="svelte">
                {`<Column verticalArrangement={Arrangement.spacedBy(8)}>
    <Text>Item 1</Text>
    <Text>Item 2</Text>
    <Text>Item 3</Text>
</Column>`}
            </CodeBlock>
        </Surface>

        <Surface modifier={Modifier.weight(1).padding(16)}>
            <Column verticalArrangement={Arrangement.spacedBy(8)}>
                <Text>Item 1</Text>
                <Text>Item 2</Text>
                <Text>Item 3</Text>
            </Column>
        </Surface>
    </Row>

    <!-- ================= ROW ================= -->

    <Text textStyle={TextStyle.TitleMedium}>
        📏 Row
    </Text>

    <Row modifier={Modifier.fillMaxWidth()}>
        <Surface modifier={Modifier.weight(1).padding(8)}>
            <CodeBlock language="svelte">
                {`<Row horizontalArrangement={Arrangement.spacedBy(12)}>
    <Text>A</Text>
    <Text>B</Text>
    <Text>C</Text>
</Row>`}
            </CodeBlock>
        </Surface>

        <Surface modifier={Modifier.weight(1).padding(16)}>
            <Row horizontalArrangement={Arrangement.spacedBy(12)}>
                <Text>A</Text>
                <Text>B</Text>
                <Text>C</Text>
            </Row>
        </Surface>
    </Row>

    <!-- ================= BOX ================= -->

    <Text textStyle={TextStyle.TitleMedium}>
        🧩 Box
    </Text>

    <Row modifier={Modifier.fillMaxWidth()}>
        <Surface modifier={Modifier.weight(1).padding(8)}>
            <CodeBlock language="svelte">
                {`<Box
    modifier={Modifier.size(120)}
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
            <Box
                    modifier={Modifier.size(120).background(ColorScheme.Surface)}
                    contentAlignment={Alignment.Center}
            >
                <Text>Center</Text>
                <Text modifier={Modifier.align(Alignment.BottomEnd)}>
                    Bottom
                </Text>
            </Box>
        </Surface>
    </Row>

    <Spacer />

    <Text textStyle={TextStyle.BodyLarge}>
        Estos tres layouts forman la base de todo diseño en Compose Svelted.
        La complejidad surge de la composición, no de layouts adicionales.
    </Text>
</Column>