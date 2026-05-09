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
        Surface,
        Image,
        Button,
        ColorScheme,
        RoundedCornerShape
    } from '@danielito1996/compose-svelted';
    import ProjectCard from "../components/ProjectCard.svelte";
</script>

<Column
        modifier={Modifier.fillMaxSize().padding(24).verticalScroll(true)}
        verticalArrangement={Arrangement.spacedBy(32)}
>
    <!-- Header -->
    <Text textStyle={TextStyle.HeadlineSmall}>
        🚀 Examples
    </Text>

    <Text textStyle={TextStyle.BodyLarge}>
        Algunos ejemplos de interfaces que podrían construirse
        utilizando Compose Svelted.
        Estos proyectos son demostrativos y representan
        escenarios reales de uso.
    </Text>

    <!-- ================= GRID ================= -->

    <Column verticalArrangement={Arrangement.spacedBy(24)}>
        <!-- Row 1 -->
        <Row
                horizontalArrangement={Arrangement.spacedBy(24)}
        >
            <ProjectCard
                    title="Task Manager"
                    description="Aplicación de gestión de tareas con navegación, animaciones y tema dinámico."
                    image="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
            />

            <ProjectCard
                    title="Finance Dashboard"
                    description="Panel administrativo con layouts complejos y superficies elevadas."
                    image="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c"
            />
        </Row>

        <!-- Row 2 -->
        <Row
                horizontalArrangement={Arrangement.spacedBy(24)}
        >
            <ProjectCard
                    title="Social App"
                    description="Feed social con animaciones declarativas y componentes reutilizables."
                    image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            />

            <ProjectCard
                    title="E-commerce"
                    description="Catálogo de productos con tarjetas, imágenes y layouts responsivos."
                    image="https://images.unsplash.com/photo-1515165562835-c4c2b7b0c5a8"
            />
        </Row>
    </Column>

    <!-- Closing -->
    <Text textStyle={TextStyle.BodyLarge}>
        Compose Svelted permite construir este tipo de interfaces
        de forma declarativa, predecible y consistente,
        sin depender de estilos CSS manuales.
    </Text>
</Column>
