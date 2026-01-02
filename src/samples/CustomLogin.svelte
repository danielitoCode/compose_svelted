<script>
    import {
        Alignment,
        Arrangement, Box,
        Button,
        ColorScheme,
        Column,
        Modifier, Surface,
        Text,
        TextField,
        TextStyle
    } from "../lib";
    let name = "";
    let pass = "";
</script>
<!--IMPORTS-->
<Box contentAlignment={Alignment.Center} modifier={Modifier.fillMaxSize()}>
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
            <Button>
                Validar
            </Button>
            <Text textStyle={TextStyle.BodyMedium}>compose-svelted library</Text>
        </Column>
    </Surface>
</Box>