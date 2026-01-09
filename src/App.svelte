<script lang="ts">
    import {
        NavHost,
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
        composable, rememberNavController
    } from "./lib";

    import { Modifier } from "./lib";
    import { Login, Home, Details } from "./samples/navigation/routes";

    import { Arrangement } from "./lib";
    import CustomLogin from "./samples/CustomLogin.svelte";
    import ProfesionalLogin from "./samples/ProfesionalLogin.svelte";

    import LoginScreen from "./samples/navigation/LoginScreen.svelte";
    import HomeScreen from "./samples/navigation/HomeScreen.svelte";
    import DetailsScreen from "./samples/navigation/DetailsScreen.svelte";

    // ✅ SOLO controller, el store está oculto
    const navController = rememberNavController(Login.path);

    let enabled = false;

</script>

<ComposeTheme mode="system">
    <AppRoot>
        <Surface
                color={ColorScheme.Background}
                modifier={Modifier.fillMaxSize()}
        >
            <NavHost
                navController={navController}
                modifier={Modifier.fillMaxSize()}
                routes={[
                    composable(Login, () => LoginScreen),
                    composable(Home, () => HomeScreen),
                    composable(Details, () => DetailsScreen)
                ]}
            />
        </Surface>
    </AppRoot>
</ComposeTheme>