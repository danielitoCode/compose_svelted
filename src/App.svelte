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
        RoundedCornerShape, Row, TextField, Box, Alignment, TextStyle, Button
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
                color={ColorScheme.Background}
                modifier={Modifier.fillMaxSize().verticalScroll(true)}
        >
            <Row
                    modifier={Modifier.fillMaxWidth()}
                    horizontalArrangement={Arrangement.SpaceAround}
            >

                <!-- FILLED -->
                <Column
                        verticalArrangement={Arrangement.spacedBy(20)}
                >
                    <Text textStyle="titleMedium">Filled TextField</Text>

                    <TextField label="Simple" />

                    <TextField label="Leading icon">
                        <Icon
                                slot="leadingIcon"
                                painter="https://api.iconify.design/mdi/account.svg"
                                tint={ColorScheme.Primary}
                                modifier={Modifier.size(24)}
                        />
                    </TextField>

                    <TextField label="Trailing icon">
                        <Icon
                                slot="trailingIcon"
                                painter="https://api.iconify.design/mdi/close.svg"
                                tint={ColorScheme.Primary}
                                modifier={Modifier.size(24)}
                        />
                    </TextField>

                    <TextField label="Both icons">
                        <Icon
                                slot="leadingIcon"
                                painter="https://api.iconify.design/mdi/email.svg"
                                tint={ColorScheme.Primary}
                                modifier={Modifier.size(24)}
                        />
                        <Icon
                                slot="trailingIcon"
                                painter="https://api.iconify.design/mdi/check.svg"
                                tint={ColorScheme.Primary}
                                modifier={Modifier.size(24)}
                        />
                    </TextField>

                    <TextField
                            label="Multiline"
                            singleLine={false}
                    />
                </Column>

                <!-- OUTLINED -->
                <Column
                        verticalArrangement={Arrangement.spacedBy(20)}
                >
                    <Text textStyle="titleMedium">Outlined TextField</Text>

                    <OutlinedTextField label="Simple" />

                    <OutlinedTextField label="Leading icon">
                        <Icon
                                slot="leadingIcon"
                                painter="https://api.iconify.design/mdi/account-outline.svg"
                                tint={ColorScheme.Primary}
                                modifier={Modifier.size(24)}
                        />
                    </OutlinedTextField>

                    <OutlinedTextField label="Trailing icon">
                        <Icon
                                slot="trailingIcon"
                                painter="https://api.iconify.design/mdi/close-circle-outline.svg"
                                tint={ColorScheme.Primary}
                                modifier={Modifier.size(24)}
                        />
                    </OutlinedTextField>

                    <OutlinedTextField label="Both icons">
                        <Icon
                                slot="leadingIcon"
                                painter="https://api.iconify.design/mdi/email-outline.svg"
                                tint={ColorScheme.Primary}
                                modifier={Modifier.size(24)}
                        />
                        <Icon
                                slot="trailingIcon"
                                painter="https://api.iconify.design/mdi/check-circle-outline.svg"
                                tint={ColorScheme.Primary}
                                modifier={Modifier.size(24)}
                        />
                    </OutlinedTextField>

                    <OutlinedTextField
                            label="Multiline"
                            singleLine={false}
                    />
                </Column>

            </Row>
        </Surface>
    </AppRoot>
</ComposeTheme>