<script lang="ts">
    import {
        Arrangement,
        Column,
        Modifier,
        Text,
        TextStyle,
        Spacer,
        Surface,
        ColorScheme
    } from "../../../dist";

    import CodeBlock from "../../lib/components/custom/CodeBlock.svelte";

    export let modifier: Modifier = Modifier.empty();
</script>

<Column
        modifier={modifier
        .fillMaxSize()
        .padding(24)
        .verticalScroll(true)
    }
        verticalArrangement={Arrangement.spacedBy(20)}
>
    <!-- Header -->
    <Text textStyle={TextStyle.HeadlineSmall}>
        🎨 Theme
    </Text>

    <Text textStyle={TextStyle.BodyLarge}>
        Compose Svelted incluye un sistema de temas inspirado en Material y Jetpack Compose,
        diseñado para ser predecible, declarativo y compatible con el modo oscuro y claro
        del sistema operativo.
    </Text>

    <Spacer />

    <!-- What is a theme -->
    <Text textStyle={TextStyle.TitleMedium}>
        🧠 ¿Qué es un Theme?
    </Text>

    <Text textStyle={TextStyle.BodyLarge}>
        Un Theme define cómo se ven los componentes de la aplicación:
        colores, superficies, contrastes y jerarquía visual.
    </Text>

    <Text textStyle={TextStyle.BodyLarge}>
        En lugar de aplicar estilos manuales o clases CSS,
        Compose Svelted utiliza tokens semánticos como
        <b>Primary</b>, <b>Surface</b> o <b>OnSurface</b>.
    </Text>

    <Spacer />

    <!-- ComposeTheme -->
    <Text textStyle={TextStyle.TitleMedium}>
        🧩 ComposeTheme
    </Text>

    <Text textStyle={TextStyle.BodyLarge}>
        Toda aplicación debe estar envuelta en un <b>ComposeTheme</b>.
        Este componente es el punto de entrada del sistema de temas.
    </Text>

    <CodeBlock language="svelte">
        {`
<ComposeTheme mode="system">
    <AppRoot>
        <Surface modifier={Modifier.fillMaxSize()}>
            <!-- App content -->
        </Surface>
    </AppRoot>
</ComposeTheme>
`}
    </CodeBlock>

    <Text textStyle={TextStyle.BodyLarge}>
        ComposeTheme inyecta las variables de color y tipografía necesarias
        para que los componentes funcionen correctamente.
    </Text>

    <Spacer />

    <!-- Modes -->
    <Text textStyle={TextStyle.TitleMedium}>
        🌗 Modos de color
    </Text>

    <Text textStyle={TextStyle.BodyLarge}>
        Compose Svelted soporta tres modos de tema:
    </Text>

    <Text textStyle={TextStyle.BodyLarge}>
        • <b>light</b>: fuerza el tema claro
        • <b>dark</b>: fuerza el tema oscuro
        • <b>system</b>: sigue la preferencia del sistema operativo
    </Text>

    <CodeBlock language="svelte">
        {`
<ComposeTheme mode="dark">
    <!-- Always dark -->
</ComposeTheme>

<ComposeTheme mode="light">
    <!-- Always light -->
</ComposeTheme>

<ComposeTheme mode="system">
    <!-- Follows OS preference -->
</ComposeTheme>
`}
    </CodeBlock>

    <Text textStyle={TextStyle.BodyLarge}>
        Cuando se usa <b>system</b>, el tema cambia automáticamente
        si el usuario modifica el modo oscuro o claro del sistema.
    </Text>

    <Spacer />

    <!-- ColorScheme -->
    <Text textStyle={TextStyle.TitleMedium}>
        🎨 ColorScheme
    </Text>

    <Text textStyle={TextStyle.BodyLarge}>
        ColorScheme define un conjunto de colores semánticos
        que los componentes utilizan internamente.
    </Text>

    <Text textStyle={TextStyle.BodyLarge}>
        En lugar de pensar en colores específicos,
        se trabaja con intención:
        fondo, superficie, contenido, énfasis.
    </Text>

    <CodeBlock language="typescript">
        {`
Surface color={ColorScheme.Surface}
Text color={ColorScheme.OnSurface}
Button color={ColorScheme.Primary}
`}
    </CodeBlock>

    <Text textStyle={TextStyle.BodyLarge}>
        Esto garantiza contraste adecuado y consistencia visual
        tanto en modo claro como oscuro.
    </Text>

    <Spacer />

    <!-- Customization -->
    <Text textStyle={TextStyle.TitleMedium}>
        🛠️ Personalización
    </Text>

    <Text textStyle={TextStyle.BodyLarge}>
        Compose Svelted no impide el uso de CSS o Tailwind,
        pero recomienda usar el sistema de temas como base.
    </Text>

    <Text textStyle={TextStyle.BodyLarge}>
        Los componentes aceptan colores personalizados cuando es necesario,
        pero los valores por defecto siempre provienen del tema.
    </Text>

    <Spacer />

    <!-- Philosophy -->
    <Text textStyle={TextStyle.TitleMedium}>
        🧭 Filosofía
    </Text>

    <Text textStyle={TextStyle.BodyLarge}>
        El sistema de temas existe para reducir decisiones repetitivas
        y evitar inconsistencias visuales.
    </Text>

    <Text textStyle={TextStyle.BodyLarge}>
        Al igual que en Jetpack Compose,
        el desarrollador describe intención,
        no estilos específicos.
    </Text>

    <Spacer />

    <!-- Example -->
    <Surface
            color={ColorScheme.Surface}
            modifier={Modifier.padding(16)}
    >
        <Text>
            Este Surface utiliza el color del tema actual.
            Cambia automáticamente entre light y dark.
        </Text>
    </Surface>

    <Spacer />

    <!-- Closing -->
    <Text textStyle={TextStyle.BodyLarge}>
        El sistema de temas de Compose Svelted es simple a propósito.
        Su objetivo es ser estable, predecible y fácil de extender
        en futuras versiones del core.
    </Text>
</Column>