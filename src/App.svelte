<script lang="ts">
    import {
        AppRoot,
        Column,
        Surface,
        Text,
        OutlinedTextField,
        ComposeTheme,
        Icon,
        ColorScheme,
        RoundedCornerShape, Row, TextField, Box, Alignment, TextStyle, Button, Density, LazyColumn, Card, Spacer,
        LazyRow, Scaffold, ButtonWithIcon, OutlinedButton, AnimatedVisibility, scaleIn, fadeOut, CheckButton, fadeIn,
        AnimatedContent, scaleFade
    } from "./lib";

    import { Modifier } from "./lib";
    import { Arrangement } from "./lib";
    import CustomLogin from "./samples/CustomLogin.svelte";
    import ProfesionalLogin from "./samples/ProfesionalLogin.svelte";

    let enabled = false;
    let step = 1;

</script>

<ComposeTheme mode="system">
    <AppRoot>
        <Surface
                color={ColorScheme.Background}
                modifier={Modifier.fillMaxSize().verticalScroll(true)}
        >
            <Column
                    verticalArrangement={Arrangement.spacedBy(16)}
                    modifier={Modifier.padding(24)}
            >
                <Button onClick={() => step++}>
                    Siguiente
                </Button>

                <AnimatedContent targetState={step} transition={scaleFade()}>
                    <Card>
                        <Text>Paso {step}</Text>
                    </Card>
                </AnimatedContent>
            </Column>
        </Surface>
    </AppRoot>
</ComposeTheme>