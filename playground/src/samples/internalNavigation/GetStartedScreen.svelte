<script lang="ts">
    import {
        Arrangement,
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
        modifier={modifier.fillMaxSize().padding(24).verticalScroll(true)}
        verticalArrangement={Arrangement.spacedBy(20)}
>
    <Text textStyle={TextStyle.HeadlineLarge}>🚀 Get Started</Text>

    <Text textStyle={TextStyle.BodyLarge}>
        Guía paso a paso para integrar Compose Svelted en un proyecto nuevo, sin confusiones.
        Vamos a cubrir: instalación, baseline estricto, baseline seguro y alternativa manual con app.css.
    </Text>

    <Spacer />

    <Text textStyle={TextStyle.TitleLarge}>📦 Paso 1 — Instalación</Text>

    <Text textStyle={TextStyle.BodyLarge}>
        1) Crea tu proyecto Svelte.
    </Text>
    <Text textStyle={TextStyle.BodyLarge}>
        2) Entra a la carpeta del proyecto.
    </Text>
    <Text textStyle={TextStyle.BodyLarge}>
        3) Instala la librería.
    </Text>

    <CodeBlock language="bash">{`npm install @danielito1996/compose-svelted`}</CodeBlock>

    <Text textStyle={TextStyle.BodyLarge}>
        Desde aquí eliges UNA de estas 3 rutas de configuración CSS.
        No mezcles baseline estricto + baseline seguro al mismo tiempo.
    </Text>

    <Spacer />

    <Text textStyle={TextStyle.TitleLarge}>🎯 Paso 2 Configuración de css</Text>

    <Text textStyle={TextStyle.TitleMedium}>-> Variante A — Baseline estricto (recomendado para proyectos nuevos)</Text>

    <Text textStyle={TextStyle.BodyLarge}>
        Qué hace: aplica un baseline completo para garantizar comportamiento consistente de
        fillMaxSize(), AppRoot, layouts y navegación.
        Úsalo si el proyecto es nuevo y todavía no tienes CSS global complejo.
    </Text>

    <Text textStyle={TextStyle.BodyLarge}>
        Qué editar exactamente:
        - Abre src/main.ts.
        - Agrega este import arriba de tu app.css.
    </Text>

    <CodeBlock language="ts">{`// src/main.ts
import "@danielito1996/compose-svelted/baseline.css";
import "./app.css";`}</CodeBlock>

    <Text textStyle={TextStyle.BodyLarge}>
        Qué NO hacer:
        - No importes baseline-safe.css en este modo.
        - No dupliques resets globales fuertes en app.css.
    </Text>

    <Spacer />

    <Text textStyle={TextStyle.TitleMedium}>-> Variante B — Baseline seguro (para apps con CSS existente)</Text>

    <Text textStyle={TextStyle.BodyLarge}>
        Qué hace: aplica solo lo mínimo (box-sizing + root 100%) para reducir conflictos
        con estilos globales ya existentes.
        Úsalo si vienes de un proyecto con Tailwind, Bootstrap o reset propio.
    </Text>

    <Text textStyle={TextStyle.BodyLarge}>
        Qué editar exactamente:
        - Abre src/main.ts.
        - Importa baseline-safe.css en lugar de baseline.css.
    </Text>

    <CodeBlock language="ts">{`// src/main.ts
import "@danielito1996/compose-svelted/baseline-safe.css";
import "./app.css";`}</CodeBlock>

    <Text textStyle={TextStyle.BodyLarge}>
        Qué NO hacer:
        - No importes baseline.css junto con baseline-safe.css.
        - Si algo se rompe visualmente, usa esta variante primero.
    </Text>

    <Spacer />

    <Text textStyle={TextStyle.TitleMedium}>-> Variante C — Sin baseline importado (control total en app.css)</Text>

    <Text textStyle={TextStyle.BodyLarge}>
        Si no quieres importar ningún baseline del paquete:
        - No importes baseline.css ni baseline-safe.css.
        - Reemplaza el contenido de src/app.css por este mínimo requerido.
    </Text>

    <CodeBlock language="css">{`/* src/app.css */
*,:before,:after { box-sizing: border-box; }

html, body, #app {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

body {
  font-family: Inter, system-ui, sans-serif;
}`}</CodeBlock>

    <Text textStyle={TextStyle.BodyLarge}>
        Nota técnica:
        - Si necesitas desbloquear scroll global, puedes quitar el overflow: hidden.
        - Si prefieres scroll natural del documento, quitalo.
    </Text>

    <Spacer />

    <Text textStyle={TextStyle.TitleLarge}>🧱 Paso 3 — Estructura base de la app</Text>

    <CodeBlock language="svelte">{`<script>
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
</ComposeTheme>`}</CodeBlock>

    <Text textStyle={TextStyle.BodyLarge}>
        Si esta pantalla renderiza bien, la base está correcta.
    </Text>

    <Spacer />

    <Text textStyle={TextStyle.TitleLarge}>✅ Checklist rápido (para “no fallar”)</Text>

    <Text textStyle={TextStyle.BodyLarge}>
        1• Instalaste el paquete con npm.
    </Text>
    <Text textStyle={TextStyle.BodyLarge}>
        2• Elegiste solo 1 estrategia CSS (estricto / seguro / manual).
    </Text>
    <Text textStyle={TextStyle.BodyLarge}>
        3• No mezclaste baseline.css con baseline-safe.css.
    </Text>
    <Text textStyle={TextStyle.BodyLarge}>
        4• html, body y #app ocupan 100%.
    </Text>
    <Text textStyle={TextStyle.BodyLarge}>
        5• AppRoot está presente en la raíz.
    </Text>
</Column>