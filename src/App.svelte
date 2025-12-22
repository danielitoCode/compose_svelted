<script lang="ts">
    import {
        AppRoot,
        Column,
        Surface,
        Text,
        OutlinedTextField,
        ComposeTheme,
        Icon,
        ColorScheme,
        RoundedCornerShape
    } from "./lib";

    import { Modifier } from "./lib";
    import { Arrangement } from "./lib";

    let name = "";
    let email = "";
    let bio = "";
    let filled = "Texto inicial";
    let notes = "";
</script>

<ComposeTheme mode="system">
    <AppRoot>
        <Surface
                color={ColorScheme.Surface}
                modifier={Modifier.fillMaxSize().verticalScroll(true)}
        >
            <Column
                    modifier={Modifier.padding(32)}
                    verticalArrangement={Arrangement.spacedBy(32)}
            >

                <!-- Section title -->
                <Text textStyle="titleLarge">
                    OutlinedTextField – UI Test
                </Text>

                <!-- 1. Simple outlined -->
                <Column verticalArrangement={Arrangement.spacedBy(12)}>
                    <Text textStyle="labelLarge">Outlined / Single line</Text>
                    <OutlinedTextField
                            value={name}
                            onValueChange={(v) => name = v}
                            label="Nombre completo"
                            placeholder="Tu nombre aquí"
                    />
                </Column>

                <!-- 2. With icons -->
                <Column verticalArrangement={Arrangement.spacedBy(12)}>
                    <Text textStyle="labelLarge">Outlined / Icons</Text>
                    <OutlinedTextField
                            value={email}
                            onValueChange={(v) => email = v}
                            label="Email"
                            placeholder="tu@email.com"
                    >
                        <Icon
                                slot="leadingIcon"
                                painter="https://api.iconify.design/mdi/email.svg"
                                tint="onSurfaceVariant"
                                modifier={Modifier.size(24)}
                        />
                        <Icon
                                slot="trailingIcon"
                                painter="https://api.iconify.design/mdi/close.svg"
                                tint="onSurfaceVariant"
                                modifier={Modifier.size(24)}
                        />
                    </OutlinedTextField>
                </Column>

                <!-- 3. Pre-filled -->
                <Column verticalArrangement={Arrangement.spacedBy(12)}>
                    <Text textStyle="labelLarge">Outlined / Pre-filled value</Text>
                    <OutlinedTextField
                            value={filled}
                            onValueChange={(v) => filled = v}
                            label="Campo con valor"
                    />
                </Column>

                <!-- 4. Custom shape -->
                <Column verticalArrangement={Arrangement.spacedBy(12)}>
                    <Text textStyle="labelLarge">Outlined / Custom shape</Text>
                    <OutlinedTextField
                            value={notes}
                            onValueChange={(v) => notes = v}
                            label="Notas"
                            placeholder="Escribe algo…"
                            shape={RoundedCornerShape({
                            topStart: 16,
                            topEnd: 16,
                            bottomStart: 0,
                            bottomEnd: 0
                        })}
                    />
                </Column>

                <!-- 5. Multiline -->
                <Column verticalArrangement={Arrangement.spacedBy(12)}>
                    <Text textStyle="labelLarge">Outlined / Multiline</Text>
                    <OutlinedTextField
                            value={bio}
                            onValueChange={(v) => bio = v}
                            label="Biografía"
                            singleLine={false}
                            modifier={Modifier.height(120)}
                    />
                </Column>

                <!-- 6. Multiline + shape -->
                <Column verticalArrangement={Arrangement.spacedBy(12)}>
                    <Text textStyle="labelLarge">Outlined / Multiline + Shape</Text>
                    <OutlinedTextField
                            value={bio}
                            onValueChange={(v) => bio = v}
                            label="Descripción larga"
                            singleLine={false}
                            shape={RoundedCornerShape(24)}
                            modifier={Modifier.height(160)}
                    />
                </Column>

            </Column>
        </Surface>
    </AppRoot>
</ComposeTheme>