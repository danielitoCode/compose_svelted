<script lang="ts">
    import {
        Arrangement,
        Column,
        Modifier,
        Text,
        TextStyle,
        Spacer
    } from '@danielito1996/compose-svelted';
</script>

<Column
        modifier={Modifier.fillMaxSize().padding(24).verticalScroll(true)}
        verticalArrangement={Arrangement.spacedBy(24)}
>
    <!-- Header -->
    <Text textStyle={TextStyle.HeadlineSmall}>
        🚧 Limitations
    </Text>

    <Text textStyle={TextStyle.BodyLarge}>
        Compose Svelted es un proyecto en evolución.
        Esta sección describe de forma transparente
        las limitaciones actuales del core y las decisiones
        de diseño que las motivan.
    </Text>

    <!-- ================= SCOPE ================= -->

    <Text textStyle={TextStyle.TitleMedium}>
        🎯 Alcance del proyecto
    </Text>

    <Text textStyle={TextStyle.BodyLarge}>
        Compose Svelted no intenta reemplazar el ecosistema web,
        ni abstraer completamente HTML, CSS o JavaScript.
    </Text>

    <Text textStyle={TextStyle.BodyLarge}>
        El objetivo es ofrecer una capa declarativa y predecible
        inspirada en Jetpack Compose,
        especialmente pensada para desarrolladores Android.
    </Text>

    <!-- ================= NO MAGIC ================= -->

    <Text textStyle={TextStyle.TitleMedium}>
        🧙‍♂️ No hay magia oculta
    </Text>

    <Text textStyle={TextStyle.BodyLarge}>
        A diferencia de otros frameworks o librerías de UI,
        Compose Svelted evita comportamientos implícitos
        o transformaciones automáticas del DOM.
    </Text>

    <Text textStyle={TextStyle.BodyLarge}>
        Esto significa que algunas capacidades avanzadas
        del ecosistema web no están abstraídas
        en componentes de alto nivel.
    </Text>

    <!-- ================= MOTION ================= -->

    <Text textStyle={TextStyle.TitleMedium}>
        🎥 Animaciones avanzadas
    </Text>

    <Text textStyle={TextStyle.BodyLarge}>
        El sistema de motion cubre los casos más comunes
        como visibilidad y cambios de estado.
    </Text>

    <Text textStyle={TextStyle.BodyLarge}>
        Animaciones complejas como:
        transiciones compartidas,
        animaciones basadas en gestos,
        o sincronización avanzada entre vistas
        no forman parte de Core V2.
    </Text>

    <Text textStyle={TextStyle.BodyLarge}>
        Estas capacidades están consideradas
        para futuras versiones del core.
    </Text>

    <!-- ================= RESPONSIVE ================= -->

    <Text textStyle={TextStyle.TitleMedium}>
        📱 Diseño responsive
    </Text>

    <Text textStyle={TextStyle.BodyLarge}>
        Compose Svelted no proporciona actualmente
        un sistema de breakpoints o layouts adaptativos
        de alto nivel.
    </Text>

    <Text textStyle={TextStyle.BodyLarge}>
        El diseño responsive se logra combinando
        layouts declarativos con capacidades nativas del navegador
        o soluciones externas como CSS o Tailwind.
    </Text>

    <!-- ================= PERFORMANCE ================= -->

    <Text textStyle={TextStyle.TitleMedium}>
        ⚡ Rendimiento
    </Text>

    <Text textStyle={TextStyle.BodyLarge}>
        Aunque Svelte ofrece excelente rendimiento,
        Compose Svelted no realiza optimizaciones
        específicas a nivel de rendering o memoización
        como lo hace Jetpack Compose en Android.
    </Text>

    <Text textStyle={TextStyle.BodyLarge}>
        El rendimiento depende en gran medida
        del uso correcto de los layouts y del tamaño del árbol de UI.
    </Text>

    <!-- ================= ECOSYSTEM ================= -->

    <Text textStyle={TextStyle.TitleMedium}>
        🌱 Ecosistema y componentes
    </Text>

    <Text textStyle={TextStyle.BodyLarge}>
        Core V2 incluye únicamente los componentes esenciales.
        No existe (todavía) un catálogo extenso de componentes avanzados.
    </Text>

    <Text textStyle={TextStyle.BodyLarge}>
        La filosofía es crecer de forma orgánica,
        priorizando estabilidad y coherencia
        antes que cantidad.
    </Text>

    <!-- ================= ROADMAP ================= -->

    <Text textStyle={TextStyle.TitleMedium}>
        🗺️ Roadmap
    </Text>

    <Text textStyle={TextStyle.BodyLarge}>
        Algunas áreas identificadas para futuras versiones incluyen:
    </Text>

    <Text textStyle={TextStyle.BodyLarge}>
        • Animaciones más avanzadas
        • Mejor soporte responsive
        • Componentes de alto nivel opcionales
        • Mejor integración con herramientas del ecosistema web
        • Documentación interactiva más avanzada
    </Text>

    <!-- ================= CLOSING ================= -->

    <Spacer />

    <Text textStyle={TextStyle.BodyLarge}>
        Las limitaciones actuales no son errores,
        sino decisiones conscientes de diseño.
    </Text>

    <Text textStyle={TextStyle.BodyLarge}>
        Compose Svelted prioriza claridad,
        estabilidad y un modelo mental consistente
        sobre características complejas difíciles de mantener.
    </Text>
</Column>