<script lang="ts">
    import {
        Alignment,
        AppRoot,
        Box,
        Button,
        ColorScheme,
        Column,
        ComposeTheme,
        ContentScale, Icon,
        Row,
        Spacer,
        Surface,
        Text,
        TextStyle
    } from "./lib";
    import { Modifier } from "./lib";
    import {Arrangement} from "./lib";
    import {TonalButton} from "./lib";
</script>

<ComposeTheme mode="system">
    <AppRoot>
        <Surface color={ColorScheme.Surface} modifier={Modifier.fillMaxSize().verticalScroll(true)}>
            <Column verticalArrangement={Arrangement.spacedBy(24)} modifier={Modifier.padding(32)}>
                <Text textStyle={TextStyle.TitleLarge}>Iconos con tint</Text>

                <Row horizontalArrangement={Arrangement.spacedBy(32)}>
                    <Icon src="https://api.iconify.design/mdi/account.svg" tint={ColorScheme.OnPrimary} modifier={Modifier.width(64).height(64)} />
                    <Icon src="https://api.iconify.design/mdi/heart.svg" tint={ColorScheme.Error} modifier={Modifier.width(64).height(64)} />
                    <Icon src="https://api.iconify.design/mdi/star.svg" tint="#FFD700" modifier={Modifier.width(64).height(64)} />
                    <Icon src="https://api.iconify.design/mdi/thumb-up.svg" modifier={Modifier.width(64).height(64)} /> <!-- sin tint → hereda del tema -->
                </Row>

                <Text textStyle={TextStyle.TitleLarge}>Icon en Button</Text>
                <Button onClick={() => console.log("Guardar")}>
                    <Icon src="https://api.iconify.design/mdi/content-save.svg" modifier={Modifier.width(24).height(24)} />
                    <Text>Guardar</Text>
                </Button>
            </Column>
        </Surface>
    </AppRoot>
</ComposeTheme>