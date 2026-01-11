<script lang="ts">
    import {
        Arrangement,
        Column,
        Modifier,
        Text,
        TextStyle,
        Spacer
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
        🙋‍♂️ Bienvenido a Compose Svelted
    </Text>

    <Text textStyle={TextStyle.BodyLarge}>
        Compose Svelted es una librería de UI inspirada en Jetpack Compose,
        diseñada para llevar el modelo mental declarativo y predecible
        de Android al ecosistema web usando Svelte.
    </Text>

    <Spacer />

    <!-- Problema clásico -->
    <Text textStyle={TextStyle.TitleMedium}>
        🌎 El problema clásico en la Web
    </Text>

    <Text textStyle={TextStyle.BodyLarge}>
        Tradicionalmente, diseñar interfaces web implica coordinar HTML,
        CSS y JavaScript para lograr vistas dinámicas y mantenibles.
        Aunque este enfoque es poderoso, también puede volverse complejo,
        difícil de testear y poco predecible a medida que el proyecto crece.
    </Text>

    <Text textStyle={TextStyle.BodyLarge}>
        Los frameworks modernos ayudan, pero el modelo mental sigue siendo
        muy distinto al que muchos desarrolladores ya dominan en otras
        plataformas.
    </Text>

    <!-- Contexto -->
    <Text textStyle={TextStyle.TitleMedium}>
        ⚙️ El contexto actual
    </Text>

    <Text textStyle={TextStyle.BodyLarge}>
        Frameworks como Angular o React han marcado el camino, mientras que
        Svelte propone un enfoque diferente: compilación en build-time,
        bundles más ligeros y ausencia de Virtual DOM.
    </Text>

    <Text textStyle={TextStyle.BodyLarge}>
        Estas características hacen de Svelte una base ideal para explorar
        nuevos modelos de composición de UI.
    </Text>

    <!-- Propuesta -->
    <Text textStyle={TextStyle.TitleMedium}>
        🤷‍♂️ ¿Dónde entra Compose Svelted?
    </Text>

    <Text textStyle={TextStyle.BodyLarge}>
        Compose Svelted nace de una necesidad real: permitir que desarrolladores
        con experiencia en Jetpack Compose puedan construir interfaces web
        sin reaprender desde cero paradigmas completamente distintos.
    </Text>

    <Text textStyle={TextStyle.BodyLarge}>
        En lugar de adaptar al desarrollador al modelo web tradicional,
        la librería adapta el ecosistema web a un modelo declarativo,
        explícito y componible.
    </Text>

    <!-- Código ejemplo -->
    <Text textStyle={TextStyle.TitleMedium}>
        🧩 Un ejemplo simple
    </Text>

    <CodeBlock language="svelte">
        {`
<Column modifier={Modifier.padding(16)}>
    <Text textStyle={TextStyle.TitleLarge}>
        Hello Compose
    </Text>

    <Button onClick={onClick}>
        Click me
    </Button>
</Column>
`}
    </CodeBlock>

    <Text textStyle={TextStyle.BodyLarge}>
        El código describe directamente la intención del diseño.
        No hay clases CSS ocultas, ni estilos dispersos.
        La UI es una función explícita del estado.
    </Text>

    <!-- Filosofía -->
    <Text textStyle={TextStyle.TitleMedium}>
        🧠 Filosofía
    </Text>

    <Text textStyle={TextStyle.BodyLarge}>
        Compose Svelted no intenta eliminar CSS ni JavaScript.
        Al contrario, los utiliza internamente para ofrecer resultados
        consistentes y configurables, mientras expone una API ergonómica
        y predecible al desarrollador.
    </Text>

    <Text textStyle={TextStyle.BodyLarge}>
        La librería apuesta por:
        claridad sobre magia,
        composición sobre herencia,
        y estado explícito sobre efectos colaterales.
    </Text>

    <!-- Dogfooding -->
    <Text textStyle={TextStyle.TitleMedium}>
        🐶 Dogfooding
    </Text>

    <Text textStyle={TextStyle.BodyLarge}>
        Esta misma página está construida utilizando Compose Svelted.
        No es una landing externa ni un sitio separado:
        es la librería usándose a sí misma.
    </Text>

    <Text textStyle={TextStyle.BodyLarge}>
        Creemos que una librería de UI debe demostrar su valor
        en su propio producto.
    </Text>

    <Spacer />

    <!-- Cierre -->
    <Text textStyle={TextStyle.BodyLarge}>
        Compose Svelted está en evolución constante,
        pero su núcleo ya es sólido.
        Si vienes de Jetpack Compose, te sentirás en casa.
        Si vienes del mundo web, encontrarás una forma
        diferente y explícita de construir interfaces.
    </Text>
</Column>