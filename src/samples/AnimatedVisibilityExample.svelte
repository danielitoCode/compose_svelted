<script>
    import {
        AnimatedVisibility,
        Arrangement,
        Card, CheckButton,
        Column,
        fadeIn,
        fadeOut,
        Modifier,
        Text,
        TextStyle
    } from "../lib";

    let enabled = false
</script>

<Column
        verticalArrangement={Arrangement.spacedBy(16)}
        modifier={Modifier.padding(24)}
>
    <Text textStyle={TextStyle.HeadlineMedium}>
        CheckButton · AnimatedVisibility
    </Text>

    <!-- CheckButton test -->
    <CheckButton
            checked={enabled}
            onCheckedChange={v => enabled = v}
            modifier={Modifier.fillMaxWidth()}
    >
        <Text>
            Mostrar opciones avanzadas
        </Text>
    </CheckButton>

    <!-- Animated content -->
    <AnimatedVisibility
            visible={enabled}
            enter={fadeIn()}
            exit={fadeOut()}
    >
        <Card elevation={4} modifier={Modifier.fillMaxWidth()}>
            <Column
                    verticalArrangement={Arrangement.spacedBy(8)}
                    modifier={Modifier.padding(16)}
            >
                <Text textStyle={TextStyle.TitleMedium}>
                    Opciones avanzadas
                </Text>

                <Text textStyle={TextStyle.BodyMedium}>
                    Este contenido aparece y desaparece
                    usando AnimatedVisibility, controlado
                    por el estado del CheckButton.
                </Text>

                <Text textStyle={TextStyle.BodySmall}>
                    ✔ Estado: {enabled ? "ACTIVO" : "INACTIVO"}
                </Text>
            </Column>
        </Card>
    </AnimatedVisibility>
</Column>