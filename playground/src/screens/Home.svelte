<script lang="ts">
    import {
        Column,
        Arrangement,
        Alignment,
        Text,
        TextStyle,
        Button,
        Modifier,
        Surface,
        Box
    } from '@danielito1996/compose-svelted';
    import type { NavController } from '@danielito1996/compose-svelted';

    let { navController }: { navController: NavController } = $props();
</script>

<Box modifier={Modifier.fillMaxSize().background("surface")}>
    <!-- Background Decoration -->
    <div style="position: absolute; top: -100px; right: -100px; width: 400px; height: 400px; background: var(--md-sys-color-primaryContainer); border-radius: 50%; filter: blur(80px); opacity: 0.5;"></div>
    <div style="position: absolute; bottom: -100px; left: -100px; width: 300px; height: 300px; background: var(--md-sys-color-tertiaryContainer); border-radius: 50%; filter: blur(80px); opacity: 0.4;"></div>

    <Column
        modifier={Modifier.fillMaxSize().padding(48)}
        verticalArrangement={Arrangement.Center}
        horizontalAlignment={Alignment.CenterHorizontally}
    >
        <Surface color="primary" modifier={Modifier.size(120).clip({ toCssBorderRadius: () => '32px' }).padding(24).border(0, '', { toCssBorderRadius: () => '32px' })}>
             <svg viewBox="0 0 24 24" fill="currentColor" style="width: 100%; height: 100%; color: var(--md-sys-color-onPrimary)">
                <path d="M12,2L4.5,20.29L5.21,21L12,18L18.79,21L19.5,20.29L12,2Z" />
             </svg>
        </Surface>

        <Column
            modifier={Modifier.padding({ top: 32, bottom: 48 })}
            horizontalAlignment={Alignment.CenterHorizontally}
            verticalArrangement={Arrangement.spacedBy(8)}
        >
            <Text textStyle="displayMedium">Compose Svelted</Text>
            <Text textStyle="titleMedium" color="outline">Modern Jetpack Compose for Svelte</Text>
        </Column>

        <Column
            verticalArrangement={Arrangement.spacedBy(16)}
            modifier={Modifier.width(280)}
        >
            <Button
                onClick={() => navController.navigate('layouts')}
                modifier={Modifier.fillMaxWidth().height(56)}
                shape="large"
            >
                Explorar Layouts
            </Button>

            <Button
                onClick={() => {}}
                modifier={Modifier.fillMaxWidth().height(56)}
                color="surfaceVariant"
                onColor="onSurfaceVariant"
                shape="large"
            >
                Documentación
            </Button>
        </Column>
        
        <Box modifier={Modifier.padding({ top: 64 })}>
            <Text textStyle="labelMedium" color="outline">v0.2.7-alpha</Text>
        </Box>
    </Column>
</Box>
