<script lang="ts">
    import {AppRoot, ColorScheme, ComposeTheme, Modifier, rememberNavController, Surface} from "../dist";
    import {Login} from "./samples/navigation/routes";
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
        </Surface>
    </AppRoot>
</ComposeTheme>