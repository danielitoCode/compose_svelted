<script lang="ts">
    import {AppRoot, Box, ColorScheme, Column, ComposeTheme, Row, Surface, Text, TextStyle} from "./lib";
    import { Modifier } from "./lib";
    import {Alignment} from "./lib";
    import {Arrangement} from "./lib";
</script>

<ComposeTheme mode="system">
    <AppRoot>
        <Surface color={ColorScheme.Surface} modifier={Modifier.fillMaxSize().verticalScroll(true)}>
            <Column horizontalAlignment={Alignment.CenterHorizontally} modifier={Modifier.padding(24)} verticalArrangement={Arrangement.spacedBy(40)}>

                <Text textStyle={TextStyle.HeadlineLarge}>Test de Box: Tres Variantes de Alineación</Text>

                <!-- 1. Hijos deciden (como el test anterior) -->
                <Text textStyle={TextStyle.TitleLarge}>1. Hijos deciden con Modifier.align()</Text>
                <Surface color={ColorScheme.SurfaceVariant} modifier={Modifier.padding(16)}>
                    <Box modifier={Modifier.width(300).height(300).background("#444444")}>
                        <Surface color={ColorScheme.Primary} modifier={Modifier.fillMaxSize()} />
                        <Text textStyle={TextStyle.HeadlineMedium} color={ColorScheme.OnPrimary} modifier={Modifier.align(Alignment.Center)}>
                            Centro
                        </Text>
                        <Box modifier={Modifier.background("#FFEB3B").padding(8).align(Alignment.TopStart)}>
                            <Text color="#000">TopStart</Text>
                        </Box>
                        <Box modifier={Modifier.background("#4CAF50").padding(8).align(Alignment.BottomEnd)}>
                            <Text color="#FFF">BottomEnd</Text>
                        </Box>
                        <!-- Puedes añadir los otros 7 si quieres -->
                    </Box>
                </Surface>

                <!-- 2. Box decide (contentAlignment global) -->
                <Text textStyle={TextStyle.TitleLarge}>2. Box decide con contentAlignment</Text>
                <Surface color={ColorScheme.SurfaceVariant} modifier={Modifier.padding(16)}>
                    <Box
                            modifier={Modifier.width(300).height(300).background("#444444")}
                            contentAlignment={Alignment.BottomEnd}
                    >
                    <Surface color={ColorScheme.Primary} modifier={Modifier.fillMaxSize()} />
                    <Text textStyle={TextStyle.BodyLarge} color={ColorScheme.OnPrimary}>
                        Estoy en BottomEnd (por contentAlignment del Box)
                    </Text>
                    <Text textStyle={TextStyle.BodyLarge} color={ColorScheme.OnPrimary}>
                        Yo también estoy en BottomEnd
                    </Text>
                    <Box modifier={Modifier.background("#FFEB3B").padding(8)}>
                        <Text color="#000">Yo también (sin align)</Text>
                    </Box>
                    </Box>
                </Surface>

                <!-- 3. Mixto: Box decide, pero hijos overridean -->
                <Text textStyle={TextStyle.TitleLarge}>3. Mixto: Box decide, pero hijos overridean</Text>
                <Surface color={ColorScheme.SurfaceVariant} modifier={Modifier.padding(16)}>
                    <Box
                            modifier={Modifier.width(300).height(300).background("#444444")}
                            contentAlignment={Alignment.BottomEnd}
                    >
                    <Surface color={ColorScheme.Primary} modifier={Modifier.fillMaxSize()} />

                    <Text textStyle={TextStyle.BodyLarge} color={ColorScheme.OnPrimary}>
                        Default: BottomEnd
                    </Text>

                    <Text
                            textStyle={TextStyle.BodyLarge}
                            color="#000"
                            modifier={Modifier.background("#FFEB3B").padding(12).align(Alignment.TopStart)}
                    >
                        Override: TopStart
                    </Text>

                    <Box modifier={Modifier.background("#4CAF50").padding(12).align(Alignment.Center)}>
                        <Text color="#FFF">Override: Centro</Text>
                    </Box>
                    </Box>
                </Surface>

            </Column>
        </Surface>
    </AppRoot>
</ComposeTheme>