<script lang="ts">
    import {composable, Modifier, NavHost, rememberNavController} from "../../../dist";
    import ProfesionalLogin from "../ProfesionalLogin.svelte";
    import {Details, Home, Login} from "./routes";
    import HomeScreen from "./HomeScreen.svelte";
    import DetailsScreen from "./DetailsScreen.svelte";
    import ProfesionalHomeScreen from "../ProfesionalHomeScreen.svelte";

    export let modifier: Modifier = Modifier.empty();

    const navController = rememberNavController(Home.path);

</script>

<NavHost
    navController={navController}
    modifier={modifier.fillMaxSize()}
    routes={[
        composable(Login, () => ProfesionalLogin),
        composable(Home, () => ProfesionalHomeScreen),
        composable(Details, () => DetailsScreen)
    ]}
/>