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
        LazyRow, Scaffold, ButtonWithIcon, OutlinedButton, AnimatedVisibility, scaleIn, fadeOut, CheckButton, fadeIn
    } from "./lib";

    import { Modifier } from "./lib";
    import { Arrangement } from "./lib";
    import CustomLogin from "./samples/CustomLogin.svelte";
    import ProfesionalLogin from "./samples/ProfesionalLogin.svelte";

    let enabled = false;

</script>

<ComposeTheme mode="system">
    <AppRoot>
        <Surface
                color={ColorScheme.Background}
                modifier={Modifier.fillMaxSize()}
        >
            <Box
                modifier={Modifier.fillMaxSize()}
                contentAlignment={Alignment.Center}>
                <Text>HOLA</Text>
            </Box>
        </Surface>
    </AppRoot>
</ComposeTheme>