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
        TextField,
        Image,
        Icon,
        ColorScheme, painterResource, Res
    } from "../../../dist";

    import CodeBlock from "../../lib/components/custom/CodeBlock.svelte";

    let email = "";
</script>

<Column
        modifier={Modifier
        .fillMaxSize()
        .padding(24)
        .verticalScroll(true)
    }
        verticalArrangement={Arrangement.spacedBy(32)}
>
    <!-- Header -->
    <Text textStyle={TextStyle.HeadlineSmall}>
        🧩 Components
    </Text>

    <Text textStyle={TextStyle.BodyLarge}>
        Los componentes de Compose Svelted son piezas simples,
        diseñadas para ser compuestas entre sí.
        Cada ejemplo muestra el código y su resultado real.
    </Text>

    <!-- ================= TEXT ================= -->

    <Text textStyle={TextStyle.TitleMedium}>
        📝 Text
    </Text>

    <Row modifier={Modifier.fillMaxWidth()}>
        <!-- Code -->
        <Surface modifier={Modifier.weight(1).padding(8)}>
            <CodeBlock language="svelte">
                {`<Text textStyle={TextStyle.TitleLarge}>
    Title
</Text>

<Text textStyle={TextStyle.BodyLarge}>
    Body text
</Text>`}
            </CodeBlock>
        </Surface>

        <!-- Preview -->
        <Surface modifier={Modifier.weight(1).padding(16)}>
            <Column verticalArrangement={Arrangement.spacedBy(8)}>
                <Text textStyle={TextStyle.TitleLarge}>
                    Title
                </Text>
                <Text textStyle={TextStyle.BodyLarge}>
                    Body text
                </Text>
            </Column>
        </Surface>
    </Row>

    <!-- ================= BUTTON ================= -->

    <Text textStyle={TextStyle.TitleMedium}>
        🔘 Button
    </Text>

    <Row modifier={Modifier.fillMaxWidth()}>
        <!-- Code -->
        <Surface modifier={Modifier.weight(1).padding(8)}>
            <CodeBlock language="svelte">
                {`<Button>
    Confirm
</Button>

<Button
    color={ColorScheme.Secondary}
    modifier={Modifier.fillMaxWidth()}
>
    Secondary action
</Button>`}
            </CodeBlock>
        </Surface>

        <!-- Preview -->
        <Surface modifier={Modifier.weight(1).padding(16)}>
            <Column verticalArrangement={Arrangement.spacedBy(12)}>
                <Button>
                    Confirm
                </Button>

                <Button
                        color={ColorScheme.Secondary}
                        modifier={Modifier.fillMaxWidth()}
                >
                    Secondary action
                </Button>
            </Column>
        </Surface>
    </Row>

    <!-- ================= TEXTFIELD ================= -->

    <Text textStyle={TextStyle.TitleMedium}>
        ⌨️ TextField
    </Text>

    <Row modifier={Modifier.fillMaxWidth()}>
        <!-- Code -->
        <Surface modifier={Modifier.weight(1).padding(8)}>
            <CodeBlock language="svelte">
                {`<TextField
    label="Email"
    value={email}
    onValueChange={v => email = v}
/>`}
            </CodeBlock>
        </Surface>

        <!-- Preview -->
        <Surface modifier={Modifier.weight(1).padding(16)}>
            <TextField
                    label="Email"
                    value={email}
                    onValueChange={v => email = v}
            />
        </Surface>
    </Row>

    <!-- ================= SURFACE ================= -->

    <Text textStyle={TextStyle.TitleMedium}>
        🧱 Surface
    </Text>

    <Row modifier={Modifier.fillMaxWidth()}>
        <!-- Code -->
        <Surface modifier={Modifier.weight(1).padding(8)}>
            <CodeBlock language="svelte">
                {`<Surface
    color={ColorScheme.Surface}
    modifier={Modifier.padding(16)}
>
    <Text>Surface content</Text>
</Surface>`}
            </CodeBlock>
        </Surface>

        <!-- Preview -->
        <Surface modifier={Modifier.weight(1).padding(16)}>
            <Surface
                    color={ColorScheme.Surface}
                    modifier={Modifier.padding(16)}
            >
                <Text>Surface content</Text>
            </Surface>
        </Surface>
    </Row>

    <!-- ================= IMAGE & ICON ================= -->

    <Text textStyle={TextStyle.TitleMedium}>
        🖼️ Image & Icon
    </Text>

    <Row modifier={Modifier.fillMaxWidth()}>
        <!-- Code -->
        <Surface modifier={Modifier.weight(1).padding(8)}>
            <CodeBlock language="svelte">
                {` <Image
                        painter={painterResource(Res.raw("icon.svg"))}
                        modifier={Modifier.size(48)}
                />
                <Icon
                        painter={painterResource(Res.raw("icon.svg"))}
                        modifier={Modifier.size(48)}
                        tint={ColorScheme.OnBackground}
                />`}
            </CodeBlock>
        </Surface>

        <!-- Preview -->
        <Surface modifier={Modifier.weight(1).padding(16)}>
            <Row
                    horizontalArrangement={Arrangement.spacedBy(16)}
                    verticalAlignment={Alignment.CenterVertically}
            >
                <Image
                        painter={painterResource(Res.raw("icon.svg"))}
                        modifier={Modifier.size(48)}
                />
                <Icon
                        painter={painterResource(Res.raw("icon.svg"))}
                        modifier={Modifier.size(48)}
                        tint={ColorScheme.OnBackground}
                />
            </Row>
        </Surface>
    </Row>

    <!-- ================= COMPOSITION ================= -->

    <Text textStyle={TextStyle.TitleMedium}>
        🧩 Composición
    </Text>

    <Row modifier={Modifier.fillMaxWidth()}>
        <!-- Code -->
        <Surface modifier={Modifier.weight(1).padding(8)}>
            <CodeBlock language="svelte">
                {`<Row
    horizontalArrangement={Arrangement.spacedBy(12)}
    verticalAlignment={Alignment.CenterVertically}
>
    <Icon
        painter={painterResource(Res.raw("icon.svg"))}
        modifier={Modifier.size(48)}
        tint={ColorScheme.OnBackground}
    />
    <Text>Label</Text>
</Row>`}
            </CodeBlock>
        </Surface>

        <!-- Preview -->
        <Surface modifier={Modifier.weight(1).padding(16)}>
            <Row
                    horizontalArrangement={Arrangement.spacedBy(12)}
                    verticalAlignment={Alignment.CenterVertically}
            >
                <Icon
                        painter={painterResource(Res.raw("icon.svg"))}
                        modifier={Modifier.size(48)}
                        tint={ColorScheme.OnBackground}
                />
                <Text>Label</Text>
            </Row>
        </Surface>
    </Row>

    <!-- Closing -->
    <Spacer />

    <Text textStyle={TextStyle.BodyLarge}>
        Cada componente de Compose Svelted está diseñado
        para ser simple, predecible y composable.
        La potencia no viene de componentes complejos,
        sino de cómo se combinan.
    </Text>
</Column>