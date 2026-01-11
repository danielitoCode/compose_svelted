<script>
    import {
        Alignment,
        Arrangement,
        Box,
        Button,
        AnimatedVisibility,
        ColorScheme,
        Column,
        Modifier,
        Surface,
        Text,
        TextField,
        TextStyle,
        Row,
        Image,
        ContentScale,
        RoundedCornerShape, fadeIn
    } from "../../dist/index.d.ts";

    import { scaleIn, fadeOut } from "../../dist/index.d.ts";

    let email = "";
    let password = "";

    // Control de visibilidad (en real vendrá de router / auth)
    let showLogin = true;
</script>

<Box modifier={Modifier.fillMaxSize()}>

    <!-- Background animated image -->
    <Image
            painter="https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif"
            contentDescription="Animated background"
            contentScale={ContentScale.Crop}
            modifier={Modifier.fillMaxSize()}
    />

    <!-- Overlay -->
    <Box
            contentAlignment={Alignment.Center}
            modifier={
            Modifier
                .fillMaxSize()
                .background("rgba(0,0,0,0.45)")
        }
    >
        <!-- Animated Card -->
        <AnimatedVisibility
                visible={showLogin}
                enter={fadeIn()}
                exit={fadeOut()}
        >
            <Surface
                    color={ColorScheme.Surface}
                    modifier={
                    Modifier
                        .padding(24)
                        .clip(RoundedCornerShape(30))
                }
            >
                <Column
                        horizontalAlignment={Alignment.CenterVertically}
                        verticalArrangement={Arrangement.spacedBy(28)}
                        modifier={Modifier.padding(36)}
                >
                    <!-- Brand -->
                    <Column
                            horizontalAlignment={Alignment.CenterVertically}
                            verticalArrangement={Arrangement.spacedBy(12)}
                    >
                        <Image
                                painter="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
                                contentDescription="Logo"
                                contentScale={ContentScale.Fit}
                                modifier={Modifier.size(56)}
                        />

                        <Text textStyle={TextStyle.HeadlineMedium}>
                            Iniciar sesión
                        </Text>

                        <Text textStyle={TextStyle.BodyMedium}>
                            Accede a tu cuenta
                        </Text>
                    </Column>

                    <!-- Form -->
                    <Column
                            verticalArrangement={Arrangement.spacedBy(16)}
                            modifier={Modifier.fillMaxWidth()}
                    >
                        <TextField
                                value={email}
                                onValueChange={v => email = v}
                                label="Email"
                        />

                        <TextField
                                value={password}
                                onValueChange={v => password = v}
                                label="Contraseña"
                        />
                    </Column>

                    <!-- Action -->
                    <Button modifier={Modifier.fillMaxWidth()}>
                        <Row
                                horizontalArrangement={Arrangement.spacedBy(10)}
                                verticalAlignment={Alignment.CenterVertically}
                        >
                            <Image
                                    painter="https://cdn.jsdelivr.net/npm/@mdi/svg/svg/login.svg"
                                    contentDescription="Login"
                                    contentScale={ContentScale.Fit}
                                    modifier={Modifier.size(18)}
                            />

                            <Text>
                                Acceder
                            </Text>
                        </Row>
                    </Button>

                    <Text textStyle={TextStyle.BodyMedium}>
                        compose-svelted · UI declarativa
                    </Text>
                </Column>
            </Surface>
        </AnimatedVisibility>
    </Box>
</Box>