# **COMPOSE-ESVELTED EXAMPLE**

### 👀 Remember

Compose-svelted follow is a JetpackCompose-like svelte library, the components are similar in both.

### Custom Login

<p align="center">
  <img src="assets/design/logins/customlogin.png"/>
</p>

#### Code:

```xml
<!--IMPORTS-->
<Box
    contentAlignment={Alignment.Center}
    modifier={Modifier.fillMaxSize().background(ColorScheme.Background)}
>
    <Surface color={ColorScheme.Surface}>
        <Column
            horizontalAlignment={Alignment.CenterVertically}
            verticalArrangement={Arrangement.spacedBy(20)}
            modifier={Modifier.padding(32)}
        >
            <!-- Header -->
            <Column
                horizontalAlignment={Alignment.CenterVertically}
                verticalArrangement={Arrangement.spacedBy(8)}
            >
                <Text textStyle={TextStyle.HeadlineMedium}>
                    Bienvenido 👋
                </Text>
                <Text textStyle={TextStyle.BodyMedium}>
                    Accede a tu cuenta para continuar
                </Text>
            </Column>

             <!-- Form -->
            <Column
                verticalArrangement={Arrangement.spacedBy(16)}
                modifier={Modifier.fillMaxWidth()}
            >
                <TextField
                    value={name}
                    onValueChange={value => name = value}
                    label="Email"
                />

                <TextField
                    value={pass}
                    onValueChange={value => pass = value}
                    label="Contraseña"
                />
            </Column>

            <!-- Action -->
            <Button modifier={Modifier.fillMaxWidth()}>
                <Row
                    horizontalArrangement={Arrangement.spacedBy(10)}
                    verticalAlignment={Alignment.CenterVertically}
                >
                    <Icon
                        painter="https://cdn.jsdelivr.net/npm/@mdi/svg/svg/login.svg"
                        tint={ColorScheme.OnPrimary}
                        modifier={Modifier.size(18)}
                    />

                    <Text color={ColorScheme.OnPrimary}>
                        Iniciar sesión
                    </Text>
                </Row>
            </Button>

            <!-- Footer -->
            <Text textStyle={TextStyle.BodyMedium}>
                compose-svelted · UI declarativa
            </Text>
        </Column>
    </Surface>
</Box>
```

### Ritch Login

<p align="center">
  <img src="assets/design/logins/ritchlogin.png"/>
</p>

#### Code:

```xml
<!--IMPORTS-->
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
```
