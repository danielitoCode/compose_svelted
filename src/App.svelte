<script lang="ts">
    import {
        Alignment,
        AppRoot,
        Box,
        Button,
        ColorScheme,
        Column,
        ComposeTheme,
        ContentScale, Icon, Image, painterResource, Res, RoundedCornerShape,
        Row,
        Spacer,
        Surface,
        Text, TextField,
        TextStyle
    } from "./lib";
    import { Modifier } from "./lib";
    import {Arrangement} from "./lib";

    let name = "";
    let email = "";
    let bio="";

</script>

<ComposeTheme mode="system">
    <AppRoot>
        <Surface color={ColorScheme.Surface} modifier={Modifier.fillMaxSize().verticalScroll(true)}>
            <Column verticalArrangement={Arrangement.spacedBy(24)} modifier={Modifier.padding(32)}>
                <TextField
                        shape={RoundedCornerShape({
                            topStart: 12,
                            topEnd: 12
                        })}
                        value={name}
                        onValueChange={(v) => name = v}
                        label="Nombre completo"
                        placeholder="Tu nombre aquí"
                >
                    <Icon slot="leadingIcon" painter="https://api.iconify.design/mdi/account.svg" tint="onSurfaceVariant" modifier={Modifier.width(24).height(24)} />
                    <Icon slot="trailingIcon" painter="https://api.iconify.design/mdi/close.svg" tint="onSurfaceVariant" modifier={Modifier.width(24).height(24)} />
                </TextField>

                <TextField
                        shape={RoundedCornerShape({
                            topStart: 16,
                            topEnd: 16,
                            bottomStart: 0,
                            bottomEnd: 0
                        })}
                        value={email}
                        onValueChange={(v) => email = v}
                        label="Email"
                        placeholder="tu@email.com"
                        singleLine={true}
                >
                    <Icon slot="leadingIcon" painter="https://api.iconify.design/mdi/email.svg" tint="onSurfaceVariant" modifier={Modifier.width(24).height(24)} />
                </TextField>

                <TextField
                        value={bio}
                        onValueChange={(v) => bio = v}
                        label="Biografía"
                        singleLine={false}
                        modifier={Modifier.height(120)}
                />

                <Surface color={ColorScheme.OnSurface} modifier={Modifier.size(156).clip(RoundedCornerShape(15))}></Surface>
            </Column>
        </Surface>
    </AppRoot>
</ComposeTheme>