<script lang="ts">
    import {
        Arrangement,
        Alignment,
        Column,
        Row,
        Modifier,
        Text,
        TextStyle,
        Spacer,
        Surface,
        Button
    } from "../../../dist";

    import {
        fadeIn,
        fadeOut,
        scaleIn,
        scaleOut
    } from "../../lib/core/motion/transitions";

    import AnimatedVisibility from "../../lib/components/motion/AnimatedVisibility.svelte";
    import CodeBlock from "../../lib/components/custom/CodeBlock.svelte";

    let visible = true;
</script>

<Column
        modifier={Modifier.fillMaxSize().padding(24).verticalScroll(true)}
        verticalArrangement={Arrangement.spacedBy(32)}
>
    <!-- Header -->
    <Text textStyle={TextStyle.HeadlineSmall}>
        🧰 Utils
    </Text>

    <Text textStyle={TextStyle.BodyLarge}>
        Los utils de Compose Svelted son piezas fundamentales que complementan
        a los componentes: alineación, distribución, estilos tipográficos
        y helpers de animación.
    </Text>

    <!-- ================= ALIGNMENT ================= -->

    <Text textStyle={TextStyle.TitleMedium}>
        🎯 Alignment
    </Text>

    <Text textStyle={TextStyle.BodyLarge}>
        Alignment define cómo se posicionan los elementos dentro de un layout.
        Se utiliza principalmente en Row, Column y Box.
    </Text>

    <CodeBlock language="typescript">
        {`Alignment.Center
Alignment.CenterHorizontally
Alignment.CenterVertically
Alignment.TopStart
Alignment.TopEnd
Alignment.BottomStart
Alignment.BottomEnd`}
    </CodeBlock>

    <Text textStyle={TextStyle.BodyLarge}>
        Alignment describe intención, no coordenadas absolutas.
    </Text>

    <!-- ================= ARRANGEMENT ================= -->

    <Text textStyle={TextStyle.TitleMedium}>
        📐 Arrangement
    </Text>

    <Text textStyle={TextStyle.BodyLarge}>
        Arrangement controla cómo se distribuye el espacio
        entre los hijos de un layout.
    </Text>

    <CodeBlock language="typescript">
        {`Arrangement.Start
Arrangement.Center
Arrangement.End
Arrangement.SpaceBetween
Arrangement.SpaceAround
Arrangement.spacedBy(16)`}
    </CodeBlock>

    <Text textStyle={TextStyle.BodyLarge}>
        Arrangement es especialmente útil para mantener
        consistencia de espaciado sin usar márgenes manuales.
    </Text>

    <!-- ================= TEXT STYLES ================= -->

    <Text textStyle={TextStyle.TitleMedium}>
        📝 TextStyle
    </Text>

    <Text textStyle={TextStyle.BodyLarge}>
        TextStyle define la jerarquía tipográfica.
        Todos los textos deben usar estilos semánticos,
        no tamaños arbitrarios.
    </Text>

    <CodeBlock language="typescript">
        {`TextStyle.DisplayLarge
TextStyle.HeadlineLarge
TextStyle.HeadlineMedium
TextStyle.TitleMedium
TextStyle.BodyLarge
TextStyle.BodyMedium
TextStyle.LabelSmall`}
    </CodeBlock>

    <Text textStyle={TextStyle.BodyLarge}>
        El tema define el tamaño, peso y espaciado real
        de cada estilo.
    </Text>

    <!-- ================= MOTION HELPERS ================= -->

    <Text textStyle={TextStyle.TitleMedium}>
        🎥 Motion helpers
    </Text>

    <Text textStyle={TextStyle.BodyLarge}>
        Los helpers de motion describen transiciones comunes
        que pueden reutilizarse en AnimatedVisibility
        y AnimatedContent.
    </Text>

    <CodeBlock language="typescript">
        {`fadeIn()
fadeOut()
scaleIn()
scaleOut()`}
    </CodeBlock>

    <Text textStyle={TextStyle.BodyLarge}>
        Estos helpers encapsulan duración, easing
        y estados iniciales y finales.
    </Text>

    <!-- ================= MOTION PREVIEW ================= -->

    <Row modifier={Modifier.fillMaxWidth()}>
        <!-- Code -->
        <Surface modifier={Modifier.weight(1).padding(8)}>
            <CodeBlock language="svelte">
                {`<AnimatedVisibility
    visible={visible}
    enter={fadeIn()}
    exit={fadeOut()}
>
    <Surface modifier={Modifier.padding(16)}>
        <Text>Animated content</Text>
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

                <AnimatedVisibility
                        visible={visible}
                        enter={fadeIn()}
                        exit={fadeOut()}
                >
                    <Surface modifier={Modifier.padding(16)}>
                        <Text>Animated content</Text>
                    </Surface>
                </AnimatedVisibility>
            </Column>
        </Surface>
    </Row>

    <!-- ================= PHILOSOPHY ================= -->

    <Spacer />

    <Text textStyle={TextStyle.BodyLarge}>
        Los utils existen para reducir repetición
        y evitar decisiones innecesarias.
    </Text>

    <Text textStyle={TextStyle.BodyLarge}>
        En Compose Svelted, los componentes hacen poco,
        pero los utils permiten combinarlos
        de forma expresiva y consistente.
    </Text>
</Column>