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
        Button,
        ColorScheme
    } from "../../../dist";

    import CodeBlock from "../../lib/components/custom/CodeBlock.svelte";
</script>

<Column
        modifier={Modifier.fillMaxSize().padding(24).verticalScroll(true)}
        verticalArrangement={Arrangement.spacedBy(40)}
>
    <!-- Header -->
    <Text textStyle={TextStyle.HeadlineSmall}>
        🎨 Design
    </Text>

    <Text textStyle={TextStyle.BodyLarge}>
        Esta sección muestra cómo los conceptos de Compose Svelted
        se alinean directamente con Jetpack Compose.
        El objetivo no es copiar sintaxis, sino compartir el mismo modelo mental.
    </Text>

    <!-- ===================================================== -->
    <!-- COLUMN -->
    <!-- ===================================================== -->

    <Text textStyle={TextStyle.TitleMedium}>
        📦 Column
    </Text>

    <Text textStyle={TextStyle.BodyLarge}>
        Column organiza sus elementos de forma vertical.
        Es el layout base para la mayoría de las pantallas.
    </Text>

    <!-- Demo -->
    <Surface
            color={ColorScheme.Surface}
            modifier={Modifier.padding(16)}
    >
        <Column verticalArrangement={Arrangement.spacedBy(8)}>
            <Text textStyle={TextStyle.TitleMedium}>
                Profile
            </Text>
            <Text>Username</Text>
            <Button>Follow</Button>
        </Column>
    </Surface>

    <!-- Code comparison -->
    <Row modifier={Modifier.fillMaxWidth()}>
        <Surface modifier={Modifier.weight(1).padding(8)}>
            <Text textStyle={TextStyle.LabelSmall}>Compose Svelted</Text>
            <CodeBlock language="svelte">
                {`<Column verticalArrangement={Arrangement.spacedBy(8)}>
    <Text textStyle={TextStyle.TitleMedium}>
        Profile
    </Text>
    <Text>Username</Text>
    <Button>Follow</Button>
</Column>`}
            </CodeBlock>
        </Surface>

        <Surface modifier={Modifier.weight(1).padding(8)}>
            <Text textStyle={TextStyle.LabelSmall}>Jetpack Compose</Text>
            <CodeBlock language="kotlin">
                {`Column(
    verticalArrangement = Arrangement.spacedBy(8.dp)
) {
    Text(
        text = "Profile",
        style = MaterialTheme.typography.titleMedium
    )
    Text("Username")
    Button(onClick = {}) {
        Text("Follow")
    }
}`}
            </CodeBlock>
        </Surface>
    </Row>

    <!-- ===================================================== -->
    <!-- ROW -->
    <!-- ===================================================== -->

    <Text textStyle={TextStyle.TitleMedium}>
        📏 Row
    </Text>

    <Text textStyle={TextStyle.BodyLarge}>
        Row organiza elementos horizontalmente.
        Es ideal para barras de acciones o listas horizontales.
    </Text>

    <!-- Demo -->
    <Surface modifier={Modifier.padding(16)}>
        <Row
                horizontalArrangement={Arrangement.spacedBy(12)}
                verticalAlignment={Alignment.CenterVertically}
        >
            <Button>Like</Button>
            <Button>Share</Button>
        </Row>
    </Surface>

    <!-- Code comparison -->
    <Row modifier={Modifier.fillMaxWidth()}>
        <Surface modifier={Modifier.weight(1).padding(8)}>
            <Text textStyle={TextStyle.LabelSmall}>Compose Svelted</Text>
            <CodeBlock language="svelte">
                {`<Row
    horizontalArrangement={Arrangement.spacedBy(12)}
    verticalAlignment={Alignment.CenterVertically}
>
    <Button>Like</Button>
    <Button>Share</Button>
</Row>`}
            </CodeBlock>
        </Surface>

        <Surface modifier={Modifier.weight(1).padding(8)}>
            <Text textStyle={TextStyle.LabelSmall}>Jetpack Compose</Text>
            <CodeBlock language="kotlin">
                {`Row(
    horizontalArrangement = Arrangement.spacedBy(12.dp),
    verticalAlignment = Alignment.CenterVertically
) {
    Button(onClick = {}) { Text("Like") }
    Button(onClick = {}) { Text("Share") }
}`}
            </CodeBlock>
        </Surface>
    </Row>

    <!-- ===================================================== -->
    <!-- BOX -->
    <!-- ===================================================== -->

    <Text textStyle={TextStyle.TitleMedium}>
        🧩 Box
    </Text>

    <Text textStyle={TextStyle.BodyLarge}>
        Box permite superponer elementos y controlar su alineación.
        Es útil para overlays, badges y layouts complejos.
    </Text>

    <!-- Demo -->
    <Surface modifier={Modifier.padding(16)}>
        <Box
                modifier={Modifier.size(120).background(ColorScheme.Surface)}
                contentAlignment={Alignment.Center}
        >
            <Text>Center</Text>
            <Text modifier={Modifier.align(Alignment.BottomEnd)}>
                Badge
            </Text>
        </Box>
    </Surface>

    <!-- Code comparison -->
    <Row modifier={Modifier.fillMaxWidth()}>
        <Surface modifier={Modifier.weight(1).padding(8)}>
            <Text textStyle={TextStyle.LabelSmall}>Compose Svelted</Text>
            <CodeBlock language="svelte">
                {`<Box
    modifier={Modifier.size(120)}
    contentAlignment={Alignment.Center}
>
    <Text>Center</Text>
    <Text modifier={Modifier.align(Alignment.BottomEnd)}>
        Badge
    </Text>
</Box>`}
            </CodeBlock>
        </Surface>

        <Surface modifier={Modifier.weight(1).padding(8)}>
            <Text textStyle={TextStyle.LabelSmall}>Jetpack Compose</Text>
            <CodeBlock language="kotlin">
                {`Box(
    modifier = Modifier.size(120.dp),
    contentAlignment = Alignment.Center
) {
    Text("Center")
    Text(
        text = "Badge",
        modifier = Modifier.align(Alignment.BottomEnd)
    )
}`}
            </CodeBlock>
        </Surface>
    </Row>

    <!-- ===================================================== -->
    <!-- Closing -->
    <!-- ===================================================== -->

    <Spacer />

    <Text textStyle={TextStyle.BodyLarge}>
        Compose Svelted no busca copiar Jetpack Compose línea por línea,
        sino ofrecer el mismo modelo declarativo y predecible
        dentro del ecosistema web.
    </Text>

    <Text textStyle={TextStyle.BodyLarge}>
        Si sabes diseñar en Jetpack Compose,
        ya sabes diseñar en Compose Svelted.
    </Text>
</Column>