<script lang="ts">
    import {
        ColorScheme,
        Arrangement,
        Box,
        Column,
        Modifier,
        Text,
        TextStyle,
        CodeBlock,
        Spacer
    } from '@danielito1996/compose-svelted';

    export let modifier: Modifier = Modifier.empty();

</script>

<Column
        modifier={ modifier
            .fillMaxSize()
            .padding(24)
            .verticalScroll(true)
        }
        verticalArrangement={Arrangement.spacedBy(20)}
>
    <!-- Header -->
    <Text
            color={ColorScheme.OnBackground}
            textStyle={TextStyle.HeadlineLarge}>
        🚀 Get Started
    </Text>

    <Text color={ColorScheme.OnSurface} textStyle={TextStyle.BodyLarge}>
        Esta guía te ayudará a comenzar con Compose Svelted de forma rápida.
        No necesitas conocer CSS avanzado ni configuraciones complejas.
        Si vienes de Jetpack Compose, el modelo te resultará familiar.
    </Text>

    <Spacer />

    <!-- Installation -->
    <Text color={ColorScheme.OnBackground} textStyle={TextStyle.TitleLarge}>
        📦 Instalación
    </Text>

    <Text textStyle={TextStyle.BodyLarge}>
        Instala la librería desde npm:
    </Text>

    <CodeBlock language="bash">
        {`npm install @danielito1996/compose-svelted`}
    </CodeBlock>

    <Text textStyle={TextStyle.BodyLarge}>
        Compose Svelted está pensado para usarse directamente en proyectos Svelte
        sin configuraciones adicionales.
    </Text>

    <Spacer />

    <!-- App root -->
    <Text textStyle={TextStyle.TitleLarge}>
        🧱 Estructura básica
    </Text>

    <Text textStyle={TextStyle.BodyLarge}>
        Toda aplicación debe comenzar con un tema y un contenedor raíz.
        Esto permite que los componentes funcionen correctamente
        y que el sistema de diseño sea consistente.
    </Text>

    <CodeBlock language="svelte">
        {`
<script>
  import {
    ComposeTheme,
    AppRoot,
    Surface,
    Text,
    Modifier
  } from "@danielito1996/compose-svelted";
</script>

<ComposeTheme mode="system">
  <AppRoot>
    <Surface modifier={Modifier.fillMaxSize()}>
      <Text>Hello Compose Svelted</Text>
    </Surface>
  </AppRoot>
</ComposeTheme>
`}
    </CodeBlock>

    <Spacer />

    <!-- Layout -->
    <Text textStyle={TextStyle.TitleLarge}>
        📐 Layouts declarativos
    </Text>

    <Text textStyle={TextStyle.BodyLarge}>
        En lugar de trabajar directamente con flexbox o clases CSS,
        Compose Svelted ofrece layouts declarativos como Column, Row y Box.
    </Text>

    <CodeBlock language="svelte">
        {`import {Column} from "@danielito1996/compose-svelted";

<Column modifier={Modifier.padding(16)}>
    <Text textStyle={TextStyle.TitleLarge}>
        Title
    </Text>

    <Text>
        Description text
    </Text>
</Column>
`}
    </CodeBlock>

    <Text textStyle={TextStyle.BodyLarge}>
        El layout describe la intención del diseño de forma explícita,
        sin estilos ocultos.
    </Text>

    <Spacer />

    <!-- Modifier -->
    <Text textStyle={TextStyle.TitleLarge}>
        🧩 Modifier
    </Text>

    <Text textStyle={TextStyle.BodyLarge}>
        Modifier es una API inmutable y encadenable que describe cómo
        un componente debe comportarse visualmente.
    </Text>

    <CodeBlock language="typescript">
        {`
Modifier
  .fillMaxSize()
  .padding(16)
  .background(ColorScheme.Surface)
`}
    </CodeBlock>

    <Text textStyle={TextStyle.BodyLarge}>
        Los modifiers no mutan el componente,
        solo describen intención.
    </Text>

    <Spacer />

    <!-- Navigation -->
    <Text textStyle={TextStyle.TitleLarge}>
        🧭 Navegación (Core V2)
    </Text>

    <Text textStyle={TextStyle.BodyLarge}>
        Compose Svelted incluye un sistema de navegación declarativo,
        inspirado en Jetpack Compose.
    </Text>

    <CodeBlock language="svelte">
        {`import {rememberNavController} from "@danielito1996/compose-svelted";

const navController = rememberNavController("home");

<NavHost
  navController={navController}
  routes={[
    composable(Home, () => HomeScreen),
    composable(Details, () => DetailsScreen)
  ]}
/>
`}
    </CodeBlock>

    <Text textStyle={TextStyle.BodyLarge}>
        La navegación es estado, no rutas acopladas al navegador.
    </Text>

    <Spacer />

    <!-- Next -->
    <Text textStyle={TextStyle.TitleLarge}>
        👉 ¿Qué sigue?
    </Text>

    <Text textStyle={TextStyle.BodyLarge}>
        A partir de aquí puedes explorar:
    </Text>

    <Text textStyle={TextStyle.BodyLarge}>
        • Theme y ColorScheme
        • Layouts avanzados
        • Componentes disponibles
        • Motion y animaciones
        • Limitaciones actuales
    </Text>

    <Spacer />

    <Text textStyle={TextStyle.BodyLarge}>
        Compose Svelted está en evolución,
        pero su núcleo ya es estable y predecible.
        Experimenta, compón y construye.
    </Text>
</Column>