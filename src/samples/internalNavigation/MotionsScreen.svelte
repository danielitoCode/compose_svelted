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
        Button
    } from "../../../dist";

    import AnimatedVisibility from "../../lib/components/motion/AnimatedVisibility.svelte";
    import AnimatedContent from "../../lib/components/motion/AnimatedContent.svelte";
    import CodeBlock from "../../lib/components/custom/CodeBlock.svelte";

    let visible = true;
    let state: "A" | "B" = "A";
</script>

<Column
        modifier={Modifier.fillMaxSize().padding(24).verticalScroll(true)}
        verticalArrangement={Arrangement.spacedBy(32)}
>
    <Text textStyle={TextStyle.HeadlineSmall}>
        🎥 Motion
    </Text>

    <Text textStyle={TextStyle.BodyLarge}>
        El sistema de motion en Compose Svelted es declarativo.
        Las animaciones describen cambios de estado, no efectos imperativos.
    </Text>

    <!-- ================= ANIMATED VISIBILITY ================= -->

    <Text textStyle={TextStyle.TitleMedium}>
        🎬 AnimatedVisibility
    </Text>

    <Row modifier={Modifier.fillMaxWidth()}>
        <!-- Code -->
        <Surface modifier={Modifier.weight(1).padding(8)}>
            <CodeBlock language="svelte">
                {`<AnimatedVisibility visible={visible}>
    <Surface modifier={Modifier.padding(16)}>
        <Text>Hello Motion</Text>
    </Surface>
</AnimatedVisibility>`}
            </CodeBlock>
        </Surface>

        <!-- Preview -->
        <Surface modifier={Modifier.weight(1).padding(16)}>
            <Column verticalArrangement={Arrangement.spacedBy(12)}>
                <Button onClick={() => visible = !visible}>
                    Toggle
                </Button>

                <AnimatedVisibility visible={visible}>
                    <Surface modifier={Modifier.padding(16)}>
                        <Text>Hello Motion</Text>
                    </Surface>
                </AnimatedVisibility>
            </Column>
        </Surface>
    </Row>

    <!-- ================= ANIMATED CONTENT ================= -->

    <Text textStyle={TextStyle.TitleMedium}>
        🔄 AnimatedContent
    </Text>

    <Row modifier={Modifier.fillMaxWidth()}>
        <!-- Code -->
        <Surface modifier={Modifier.weight(1).padding(8)}>
            <CodeBlock language="svelte">
                {`<AnimatedContent targetState={state}>
    <Text>{state}</Text>
</AnimatedContent>`}
            </CodeBlock>
        </Surface>

        <!-- Preview -->
        <Surface modifier={Modifier.weight(1).padding(16)}>
            <Column verticalArrangement={Arrangement.spacedBy(12)}>
                <Button onClick={() => state = state === "A" ? "B" : "A"}>
                    Change state
                </Button>

                <AnimatedContent targetState={state}>
                    <Text textStyle={TextStyle.HeadlineMedium}>
                        {state}
                    </Text>
                </AnimatedContent>
            </Column>
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