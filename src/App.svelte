<script lang="ts">
    import {
        AppRoot,
        Box,
        Button,
        ColorScheme,
        Column,
        ComposeTheme,
        Row,
        Spacer,
        Surface,
        Text,
        TextStyle
    } from "./lib";
    import { Modifier } from "./lib";
    import {Arrangement} from "./lib";
    import TonalButton from "./lib/components/TonalButton.svelte";
</script>

<ComposeTheme mode="system">
    <AppRoot>
        <Surface color={ColorScheme.Surface} modifier={Modifier.fillMaxSize().verticalScroll(true)}>
            <Column modifier={Modifier.padding(32)} verticalArrangement={Arrangement.spacedBy(24)}>
                <Button onClick={() => console.log("Primario")}>
                    <Text textStyle={TextStyle.LabelLarge}>BOTÓN PRIMARIO</Text>
                </Button>

                <Button
                        color={ColorScheme.Secondary}
                        onColor={ColorScheme.OnSecondary}
                        shape="medium"
                        elevation="level2"
                        onClick={() => console.log("Secundario")}
                >
                    <Text textStyle={TextStyle.LabelLarge}>SECUNDARIO</Text>
                </Button>

                <TonalButton>HOKA</TonalButton>

                <Button
                        color={ColorScheme.Primary}
                        shape="extraSmall"
                        elevation="level3"
                        onClick={() => console.log("Tertiary")}
                >
                    <Text>TERTIARY</Text>
                </Button>

                <Button onClick={() => console.log("Con icon")}>
                    <!-- Icono placeholder -->
                    <Box modifier={Modifier.background(ColorScheme.OnPrimary).width(24).height(24)} />
                    <Text>GUARDAR</Text>
                </Button>
            </Column>
        </Surface>
    </AppRoot>
</ComposeTheme>