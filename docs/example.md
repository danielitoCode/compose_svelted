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
    modifier={Modifier.fillMaxSize()}
>
    <Surface color={ColorScheme.Surface}>
        <Column
            horizontalAlignment={Alignment.CenterVertically}
            verticalArrangement={Arrangement.spacedBy(30)}
            modifier={Modifier.padding(30)}
        >
            <Text textStyle={TextStyle.HeadlineMedium}>Custom Login</Text>
            <TextField
                value={name}
                onValueChange={value => name = value}
                label="Email:"
            />
            <TextField
                value={pass}
                onValueChange={value => pass = value}
                label="Contraseña:"
            />
            <Button>Validar</Button>
            <Text textStyle={TextStyle.BodyMedium}>
                compose-svelted library
            </Text>
        </Column>
    </Surface>
</Box>
```

