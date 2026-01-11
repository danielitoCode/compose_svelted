<script lang="ts">
    import {
        Alignment,
        Arrangement, ColorScheme, Column, composable, fade,
        Icon,
        Image,
        Modifier, NavHost,
        painterResource, rememberNavController,
        Res, RoundedCornerShape,
        Row, Spacer,
        Surface,
        Text,
        TextStyle
    } from "../../dist";

    import {Scaffold} from "../../dist";
    import NavButton from "./components/NavButton.svelte";
    import {
        About,
        Components,
        Design, Examples,
        Layouts, Limitations,
        Motions,
        Started,
        Theme,
        Utils
    } from "./internalNavigation/internalRoutes";
    import AboutScreen from "./internalNavigation/AboutScreen.svelte";
    import GetStartedScreen from "./internalNavigation/GetStartedScreen.svelte";
    import ThemeScreen from "./internalNavigation/ThemeScreen.svelte";
    import LayoutsScreen from "./internalNavigation/LayoutsScreen.svelte";
    import ComponentsScreen from "./internalNavigation/ComponentsScreen.svelte";
    import MotionsScreen from "./internalNavigation/MotionsScreen.svelte";
    import UtilsScreen from "./internalNavigation/UtilsScreen.svelte";
    import LimitationsScreen from "./internalNavigation/LimitationsScreen.svelte";
    import DesignScreen from "./internalNavigation/DesignScreen.svelte";
    import ExamplesScreens from "./internalNavigation/ExamplesScreens.svelte";

    export let modifier: Modifier = Modifier.empty();
    const navController=rememberNavController(About.path)
</script>

<Scaffold
    modifier={modifier.fillMaxSize().padding(20)}
>
    <!--TopBar-->
    <Row
        slot="topBar"
        modifier={Modifier.fillMaxWidth().padding(15)}
        horizontalArrangement={Arrangement.SpaceBetween}
        verticalAlignment={Alignment.CenterVertically}
    >
        <Row
            horizontalArrangement={Arrangement.spacedBy(8)}
            verticalAlignment={Alignment.CenterVertically}
        >
            <Image
                painter={painterResource(Res.raw("icon.svg"))}
                modifier={Modifier.size(45)}
            />
            <Column>
                <Text textStyle={TextStyle.HeadlineMedium}>
                    Compose Svelted
                </Text>
                <Text>
                    A svelte library for android devs
                </Text>
            </Column>
        </Row>
        <Text textStyle={TextStyle.HeadlineSmall}>Core V2</Text>
    </Row>
    <!--BottomBar-->
    <Row
        slot="bottomBar"
        horizontalArrangement={Arrangement.SpaceAround}
        modifier={Modifier.fillMaxWidth()}
    >
        <Row
            horizontalArrangement={Arrangement.spacedBy(8)}
            verticalAlignment={Alignment.CenterVertically}
        >
            <Spacer modifier={Modifier.width(2)}/>
            <Icon
                    painter={painterResource(Res.raw("phone.svg"))}
                    modifier={Modifier.size(25)}
            />
            <Text>
                +5354071078
            </Text>
        </Row>
        <Row
            horizontalArrangement={Arrangement.spacedBy(8)}
            verticalAlignment={Alignment.CenterVertically}
        >
            <Text>
                Designed by:
            </Text>
            <Spacer modifier={Modifier.width(2)}/>
            <Icon
                painter={painterResource(Res.raw("github.svg"))}
                modifier={Modifier.size(25)}
            />
            <Text>
                <a href="https://github.com/danielitoCode">Daniel Imbert Tabares</a>
            </Text>
        </Row>
        <Row
            horizontalArrangement={Arrangement.spacedBy(8)}
            verticalAlignment={Alignment.CenterVertically}
        >
            <Spacer modifier={Modifier.width(2)}/>
            <Icon
                    painter={painterResource(Res.raw("mail.svg"))}
                    modifier={Modifier.size(25)}
            />
            <Text>
                daniel.imbert96@gmail.com
            </Text>
        </Row>
    </Row>
    <!--Content-->
    <Row modifier={Modifier.fillMaxSize()}>
        <Surface
            color={ColorScheme.Primary}
            modifier={
                Modifier
                    .weight(1)
                    .fillMaxSize()
                    .clip(RoundedCornerShape(20))
                    .padding(10)
            }
        >
            <Column
                horizontalAlignment={Alignment.CenterHorizontally}
                verticalArrangement={Arrangement.SpaceAround}
                modifier={Modifier.fillMaxSize()}
            >
                <NavButton
                    onClick={()=>{navController.navigate(About.path)}}
                    modifier={Modifier.fillMaxWidth()}
                    painter={painterResource(Res.raw("info.svg"))}
                    text="About library"
                />
                <NavButton
                        onClick={()=>{navController.navigate(Started.path)}}
                        modifier={Modifier.fillMaxWidth()}
                        painter={painterResource(Res.raw("start.svg"))}
                        text="Get started"
                />
                <NavButton
                        onClick={()=>{navController.navigate(Theme.path)}}
                        modifier={Modifier.fillMaxWidth()}
                        painter={painterResource(Res.raw("theme.svg"))}
                        text="Theme"
                />
                <NavButton
                        onClick={()=>{navController.navigate(Layouts.path)}}
                        modifier={Modifier.fillMaxWidth()}
                        painter={painterResource(Res.raw("layouts.svg"))}
                        text="Layouts"
                />
                <NavButton
                        onClick={()=>{navController.navigate(Components.path)}}
                        modifier={Modifier.fillMaxWidth()}
                        painter={painterResource(Res.raw("components.svg"))}
                        text="Components"
                />
                <NavButton
                        onClick={()=>{navController.navigate(Motions.path)}}
                        modifier={Modifier.fillMaxWidth()}
                        painter={painterResource(Res.raw("motion.svg"))}
                        text="Motions"
                />
                <NavButton
                        onClick={()=>{navController.navigate(Utils.path)}}
                        modifier={Modifier.fillMaxWidth()}
                        painter={painterResource(Res.raw("utils.svg"))}
                        text="Utils"
                />
                <NavButton
                        onClick={()=>{navController.navigate(Design.path)}}
                        modifier={Modifier.fillMaxWidth()}
                        painter={painterResource(Res.raw("design.svg"))}
                        text="Design"
                />
                <NavButton
                        onClick={()=>{navController.navigate(Examples.path)}}
                        modifier={Modifier.fillMaxWidth()}
                        painter={painterResource(Res.raw("example.svg"))}
                        text="Examples"
                />
                <NavButton
                        onClick={()=>{navController.navigate(Limitations.path)}}
                        modifier={Modifier.fillMaxWidth()}
                        painter={painterResource(Res.raw("shield.svg"))}
                        text="Limitations"
                />
                <Column
                    horizontalAlignment={Alignment.CenterHorizontally}
                    verticalArrangement={Arrangement.spacedBy(5)}
                >
                    <Image
                            painter={painterResource(Res.raw("compose.svg"))}
                            modifier={Modifier.size(100)}
                    />
                    <Text color={ColorScheme.OnPrimary}>
                        Inspired by
                    </Text>
                    <Text color={ColorScheme.OnPrimary} textStyle={TextStyle.HeadlineSmall}>
                        JETPACK COMPOSE
                    </Text>
                </Column>
            </Column>
        </Surface>
        <Spacer modifier={Modifier.width(20)}/>
        <Surface
                color={ColorScheme.Surface}
                modifier={
                    Modifier
                        .weight(6)
                        .fillMaxSize()
                        .clip(RoundedCornerShape(20))
                        .padding(10)
                }
        >
            <NavHost
                modifier={Modifier.fillMaxSize().padding(20).verticalScroll()}
                navController={navController}
                transition={fade(4000000)}
                routes={[
                    composable(About, () => AboutScreen),
                    composable(Started, () => GetStartedScreen),
                    composable(Theme, () => ThemeScreen),
                    composable(Layouts, () => LayoutsScreen),
                    composable(Components, () => ComponentsScreen),
                    composable(Design, () => DesignScreen),
                    composable(Motions, () => MotionsScreen),
                    composable(Utils, () => UtilsScreen),
                    composable(Examples, () => ExamplesScreens),
                    composable(Limitations, () => LimitationsScreen),
                ]}
            />
        </Surface>
    </Row>
</Scaffold>