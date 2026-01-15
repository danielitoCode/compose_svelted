<script lang="ts">
    import {
        NavHost,
        AppRoot,
        Column,
        Surface,
        OutlinedTextField,
        ComposeTheme,
        Icon,
        ColorScheme,
        RoundedCornerShape, Row, TextField, Box, Alignment, TextStyle, Button, Density, LazyColumn, Card, Spacer,
        LazyRow, Scaffold, ButtonWithIcon, OutlinedButton, AnimatedVisibility, scaleIn, fadeOut, CheckButton, fadeIn,
        composable, rememberNavController
    } from "../dist";
    import { fade } from "../dist";

    import { Modifier } from "../dist";
    import { Login, Home, Details } from "./samples/navigation/routes";

    import { Arrangement } from "../dist";
    import CustomLogin from "./samples/CustomLogin.svelte";
    import ProfesionalLogin from "./samples/ProfesionalLogin.svelte";

    import LoginScreen from "./samples/navigation/LoginScreen.svelte";
    import HomeScreen from "./samples/navigation/HomeScreen.svelte";
    import DetailsScreen from "./samples/navigation/DetailsScreen.svelte";
    import MainNavigationWrapper from "./samples/navigation/MainNavigationWrapper.svelte";
    import {Text} from "./lib/index";

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
            <Text>e</Text>
            <MainNavigationWrapper modifier={Modifier.fillMaxSize()}/>
        </Surface>
    </AppRoot>
</ComposeTheme>