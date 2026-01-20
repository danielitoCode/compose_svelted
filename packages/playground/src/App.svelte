<script lang="ts">
    console.log("App.svelte mounted");

    import {
        Alignment,
        AppRoot, Box,
        Button,
        ComposeTheme,
        helloCompose,
        Modifier,
        Surface,
        Text,
        TonalButton
    } from "@danielito1996/compose-svelted";
</script>

<ComposeTheme mode="system">
    <AppRoot>
        <Surface modifier={Modifier.fillMaxSize()}>
            <Box modifier={Modifier.fillMaxSize()}>
                <Text modifier={Modifier.align(Alignment.Center)}>HOLA SOY UN COMPONENTE DE LIBRERIA</Text>
                <Button modifier={Modifier.align(Alignment.Center)} onClick={() => {alert("CLICK EN BOTON DE LIBRERIA")}}>
                    HOLA SOY UN BOTON
                </Button>
                <TonalButton onClick={() => {}}>
                    HOLA SOY UN TONAL BOTON
                </TonalButton>
            </Box>
        </Surface>
    </AppRoot>
</ComposeTheme>

