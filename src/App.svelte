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
        RoundedCornerShape, Row, TextField, Box, Alignment
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
            <Column
                    modifier={Modifier.padding(32)}
                    verticalArrangement={Arrangement.spacedBy(32)}
            >

                <Text textStyle="titleLarge">
                    Modifier – UI Test
                </Text>

                <!-- Border -->
                <Box
                        modifier={Modifier
                        .size(120)
                        .border(2, "red", RoundedCornerShape(16))
                    }
                >
                    <Text>Border</Text>
                </Box>

                <!-- Clip + border -->
                <Box
                        modifier={Modifier
                        .size(120)
                        .clip(RoundedCornerShape(24))
                        .background(ColorScheme.Error)
                    }
                >
                    <Text>Clip</Text>
                </Box>

                <!-- Offset -->
                <Box
                        modifier={Modifier
                        .size(120)
                        .background("#E0E0E0")
                        .offset(24, 12)
                    }
                >
                    <Text>Offset</Text>
                </Box>

                <!-- Clickable -->
                <Box
                        on:click={() => alert("Clicked!")}
                        modifier={Modifier
                        .size(120)
                        .background("#BBDEFB")
                        .clip(RoundedCornerShape(12))
                        .clickable(() => {})
                    }
                >
                    <Text modifier={Modifier.align(Alignment.Center)}>Clickable</Text>
                </Box>

            </Column>
        </Surface>
    </AppRoot>
</ComposeTheme>