<script>
    import {
        Alignment,
        Arrangement,
        Box,
        Button,
        ColorScheme,
        Column,
        Modifier,
        Surface,
        Text,
        TextField,
        TextStyle,
        Row,
        Image,
        ContentScale, RoundedCornerShape
    } from "../lib";

    let email = "";
    let password = "";
</script>

<Box modifier={Modifier.fillMaxSize()}>

    <!-- Background image -->
    <Image
            painter="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
            contentDescription="Background"
            contentScale={ContentScale.Crop}
            modifier={
                Modifier.fillMaxSize()
                    .align(Alignment.Center)
            }
    />

    <!-- Overlay -->
    <Box
            contentAlignment={Alignment.Center}
            modifier={
                Modifier
                    .fillMaxSize()
                    .background("rgba(0,0,0,0.45)")
                    .align(Alignment.Center)
            }
    >
        <Surface
                color={ColorScheme.Surface}
                modifier={
                    Modifier.padding(24).clip(RoundedCornerShape(30))
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
    </Box>
</Box>