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
        LazyRow, Scaffold, ButtonWithIcon, OutlinedButton, AnimatedVisibility
    } from "./lib";

    import { Modifier } from "./lib";
    import { Arrangement } from "./lib";
    import CustomLogin from "./samples/CustomLogin.svelte";
    import ProfesionalLogin from "./samples/ProfesionalLogin.svelte";

    let name = "";
    let pass = "";
    let email = "";
    let userId = "Dan";
    let bio = "";
    let filled = "Texto inicial";
    let notes = "";
    // Lista larga simulada
    const items = Array.from({ length: 1000 }, (_, i) => ({
        id: i,
        title: `Item #${i}`
    }));

</script>

<ComposeTheme mode="system">
    <AppRoot>
        <Surface
                color={ColorScheme.Background}
                modifier={Modifier.fillMaxSize().verticalScroll(true)}
        >
            <AnimatedVisibility visible={true}>
                <Card elevation={6}>
                    <CustomLogin/>
                </Card>
            </AnimatedVisibility>
        </Surface>
    </AppRoot>
</ComposeTheme>