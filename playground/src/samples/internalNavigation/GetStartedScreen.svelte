<script lang="ts">

    import {Alignment, Arrangement, Box, Column, Modifier, Text, TextStyle, CodeBlock, Spacer} from '@danielito1996/compose-svelted';
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
    <Text textStyle={TextStyle.HeadlineLarge}>
        🚀 Get Started
    </Text>

    <Text textStyle={TextStyle.BodyLarge}>
        Esta guía te ayudará a comenzar con Compose Svelted de forma rápida.
        No necesitas conocer CSS avanzado ni configuraciones complejas.
        Si vienes de Jetpack Compose, el modelo te resultará familiar.
    </Text>

    <Spacer />

    <!-- Installation -->
    <Text textStyle={TextStyle.TitleLarge}>
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
        sin configuraciones adicionales.:
    </Text>

    <Spacer />

    <!-- Baseline CSS -->
    <Text textStyle={TextStyle.TitleLarge}>
        🎯 Baseline CSS (recomendado)
    </Text>

    <Text textStyle={TextStyle.BodyLarge}>
        Para que <b>fillMaxSize()</b>, <b>AppRoot</b> y los layouts funcionen
        de forma consistente en cualquier proyecto, recomendamos importar
        el baseline oficial de la librería.
    </Text>

    <CodeBlock language="css">
        {`/* src/main.ts o src/app.css */
import "@danielito1996/compose-svelted/baseline.css";`}
    </CodeBlock>

    <Text textStyle={TextStyle.BodyLarge}>
        Si prefieres no usar baseline completo, al menos define:
        <b> html, body y #app al 100% de ancho/alto</b>.
        Aun así, baseline.css es la opción recomendada. Diciendo esto, para usar la variante personalizada,
        se debe sustituir el contenido del app.css , borrarlo completamente y pegar el siguiente código:

        <CodeBlock language="css">
            {`
    *,:before,:after { box-sizing: border-box; }

    html, body, #app {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    body { font-family: Inter, system-ui, sans-serif; }
        `}
        </CodeBlock>
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
        {`
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
        {`
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