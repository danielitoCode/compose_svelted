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
        RoundedCornerShape, Row, TextField, Box, Alignment, TextStyle, Button, Density, LazyColumn, Card, Spacer
    } from "./lib";

    import { Modifier } from "./lib";
    import { Arrangement } from "./lib";

    let name = "";
    let email = "";
    let userId = "Dan";
    let bio = "";
    let filled = "Texto inicial";
    let notes = "";
    // Lista larga simulada
    const items = Array.from({ length: 200 }, (_, i) => ({
        id: i,
        title: `Item #${i + 1}`,
        subtitle: `Descripción del item ${i + 1}`
    }));
</script>

<ComposeTheme mode="system">
    <AppRoot>
        <Surface
                color={ColorScheme.Background}
                modifier={Modifier.fillMaxSize().verticalScroll(true)}
        >
            <LazyColumn
                    items={items}
                    modifier={Modifier.fillMaxSize()}
                    horizontalAlignment={Alignment.CenterHorizontally}
                    verticalArrangement={Arrangement.spacedBy(12)}
            >
                <svelte:fragment let:item>
                    <Surface modifier={Modifier.fillMaxWidth().padding(12)}>
                        <Text>{item.title}</Text>
                    </Surface>
                </svelte:fragment>
            </LazyColumn>
        </Surface>
    </AppRoot>
</ComposeTheme>