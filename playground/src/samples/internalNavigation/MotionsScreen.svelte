<script lang="ts">
    import {
        Arrangement,
        Column,
        Row,
        Modifier,
        Text,
        TextStyle,
        Spacer,
        Surface,
        Button,
        AnimatedVisibility,
        AnimatedContent,
        CodeBlock,
        Alignment
    } from '@danielito1996/compose-svelted';
    import PreviewBox from "../components/PreviewBox.svelte";

    let visible = true;
    let state: "A" | "B" = "A";
</script>

<Column
        modifier={Modifier.fillMaxSize().padding(24).verticalScroll(true)}
        verticalArrangement={Arrangement.spacedBy(32)}
>
    <Text textStyle={TextStyle.HeadlineLarge}>
        🎥 Motion
    </Text>

    <Text textStyle={TextStyle.BodyLarge}>
        El sistema de motion en Compose Svelted es declarativo.
        Las animaciones describen cambios de estado, no efectos imperativos.
    </Text>

    <!-- ================= ANIMATED VISIBILITY ================= -->

    <Text textStyle={TextStyle.TitleLarge}>
        🎬 AnimatedVisibility
    </Text>

    <Row
            verticalAlignment = {Alignment.Bottom}
            modifier={Modifier.fillMaxWidth()}
    >
        <!-- Code -->
        <Surface modifier={Modifier.weight(1).padding(8)}>
            <CodeBlock language="svelte">
                {`
                    <AnimatedVisibility visible={visible}>
                        <Surface modifier={Modifier.padding(16)}>
                            <Text>Hello Motion</Text>
                        </Surface>
                    </AnimatedVisibility>
                `}
            </CodeBlock>
        </Surface>

        <!-- Preview -->
        <Surface modifier={Modifier.weight(1).padding(16)}>
            <PreviewBox modifier={Modifier.fillMaxWidth().height(160)}>
                <Column
                        horizontalAlignment={Alignment.CenterHorizontally}
                        verticalArrangement={Arrangement.spacedBy(12)}
                >
                    <Button onClick={() => visible = !visible}>
                        Toggle
                    </Button>

                    <AnimatedVisibility visible={visible}>
                        <Surface modifier={Modifier.padding(16)}>
                            <Text>Hello Motion</Text>
                        </Surface>
                    </AnimatedVisibility>
                </Column>
            </PreviewBox>
        </Surface>
    </Row>

    <!-- ================= ANIMATED CONTENT ================= -->

    <Text textStyle={TextStyle.TitleLarge}>
        🔄 AnimatedContent
    </Text>

    <Row
            verticalAlignment={Alignment.Bottom}
            modifier={Modifier.fillMaxWidth()}
    >
        <!-- Code -->
        <Surface modifier={Modifier.weight(1).padding(8)}>
            <CodeBlock language="svelte">
                {`
                    <AnimatedContent targetState={state}>
                        <Text>{state}</Text>
                    </AnimatedContent>
                `}
            </CodeBlock>
        </Surface>

        <!-- Preview -->
        <Surface modifier={Modifier.weight(1).padding(16)}>
            <PreviewBox modifier={Modifier.fillMaxWidth().height(125)}>
                <Column
                        horizontalAlignment={Alignment.CenterHorizontally}
                        verticalArrangement={Arrangement.spacedBy(12)}
                >
                    <Button onClick={() => state = state === "A" ? "B" : "A"}>
                        Change state
                    </Button>

                    <AnimatedContent targetState={state}>
                        <Text textStyle={TextStyle.HeadlineMedium}>
                            {state}
                        </Text>
                    </AnimatedContent>
                </Column>
            </PreviewBox>
        </Surface>
    </Row>

    <Spacer />

    <Text textStyle={TextStyle.BodyLarge}>
        AnimatedVisibility controla la aparición y desaparición de contenido,
        mientras que AnimatedContent anima transiciones entre estados.
    </Text>

    <Text textStyle={TextStyle.BodyLarge}>
        Ambos componentes están diseñados para ser predecibles,
        compatibles con scroll y seguros en escenarios reales.
    </Text>
</Column>