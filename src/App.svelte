<script lang="ts">
    import {
        Alignment,
        AppRoot,
        Box,
        Button,
        ColorScheme,
        Column,
        ComposeTheme,
        ContentScale, Icon, Image, painterResource, Res,
        Row,
        Spacer,
        Surface,
        Text,
        TextStyle
    } from "./lib";
    import { Modifier } from "./lib";
    import {Arrangement} from "./lib";

    import boatSrc from "./assets/raw/boat.svg";
    import cashSrc from "./assets/raw/cash.svg";
    import hav3mSrc from "./assets/img/hav3m.png";

</script>

<ComposeTheme mode="system">
    <AppRoot>
        <Surface color={ColorScheme.Surface} modifier={Modifier.fillMaxSize().verticalScroll(true)}>
            <Column modifier={Modifier.padding(32)} verticalArrangement={Arrangement.spacedBy(40)}>
                {#each Object.entries(ContentScale) as [name, scale]}
                    <Column>
                        <Text textStyle={TextStyle.TitleMedium}>{name}</Text>
                        <Image
                                painter={painterResource(Res.image("hav3m.png"))}
                        contentScale={scale}
                        contentDescription="Ejemplo {name}"
                        modifier={Modifier.width(300).height(150).background("#333")}
                        />
                    </Column>
                {/each}
            </Column>
        </Surface>
    </AppRoot>
</ComposeTheme>