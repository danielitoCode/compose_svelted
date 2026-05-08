<script lang="ts">
    import {
        Box,
        Alignment,
        Text,
        TextStyle,
        Button,
        Modifier,
        Scaffold,
        Row,
        Column,
        Arrangement,
        ColorScheme,
        Surface
    } from '@danielito1996/compose-svelted';
    import type { NavController } from '@danielito1996/compose-svelted';

    let { navController }: { navController: NavController } = $props();

    let selectedAlignment = $state(Alignment.Center);

    const alignments = [
        { label: 'TopStart', value: Alignment.TopStart },
        { label: 'TopCenter', value: Alignment.TopCenter },
        { label: 'TopEnd', value: Alignment.TopEnd },
        { label: 'CenterStart', value: Alignment.CenterStart },
        { label: 'Center', value: Alignment.Center },
        { label: 'CenterEnd', value: Alignment.CenterEnd },
        { label: 'BottomStart', value: Alignment.BottomStart },
        { label: 'BottomCenter', value: Alignment.BottomCenter },
        { label: 'BottomEnd', value: Alignment.BottomEnd },
    ];

    let alignmentName = $derived(
        alignments.find(a => a.value.horizontal === selectedAlignment.horizontal && a.value.vertical === selectedAlignment.vertical)?.label || 'Custom'
    );
</script>

<Scaffold modifier={Modifier.fillMaxSize()}>
    <svelte:fragment slot="topBar">
        <Surface color="surface" modifier={Modifier.fillMaxWidth().padding(16)}>
            <Row verticalAlignment={Alignment.CenterVertically}>
                <Button onClick={() => navController.popBackStack()} modifier={Modifier.padding({ end: 16 })}>
                    Atrás
                </Button>
                <Text textStyle="titleLarge">Box Playground</Text>
            </Row>
        </Surface>
    </svelte:fragment>

    <Column modifier={Modifier.fillMaxSize().padding(24)} verticalArrangement={Arrangement.spacedBy(32)}>
        
        <!-- Info Card -->
        <Surface color="secondary" modifier={Modifier.fillMaxWidth().padding(20).clip({ toCssBorderRadius: () => '16px' })}>
            <Column verticalArrangement={Arrangement.spacedBy(8)}>
                <Text textStyle="titleMedium" color="onSecondary">Configuración Actual</Text>
                <Text textStyle="bodySmall" color="onSecondary">contentAlignment: <b>{alignmentName}</b></Text>
            </Column>
        </Surface>

        <!-- Preview Area -->
        <Column verticalArrangement={Arrangement.spacedBy(8)} modifier={Modifier.weight(1)}>
            <Text textStyle="labelLarge" color="outline">PREVISUALIZACIÓN (STACK)</Text>
            <Surface color="surfaceVariant" modifier={Modifier.fillMaxSize().clip({ toCssBorderRadius: () => '24px' }).border(1, "#DEE1E6")}>
                <Box
                    modifier={Modifier.fillMaxSize()}
                    contentAlignment={selectedAlignment}
                >
                    <Surface modifier={Modifier.size(160).background(ColorScheme.Primary).clip({ toCssBorderRadius: () => '16px' }).padding(16)}>
                         <Text color="onPrimary" textStyle="labelMedium">Fondo</Text>
                    </Surface>
                    <Surface modifier={Modifier.size(110).background(ColorScheme.Secondary).clip({ toCssBorderRadius: () => '16px' }).padding(12)}>
                        <Text color="onSecondary" textStyle="labelSmall">Medio</Text>
                    </Surface>
                    <Surface modifier={Modifier.size(60).background(ColorScheme.Tertiary).clip({ toCssBorderRadius: () => '16px' }).padding(8)}>
                         <Text color="onTertiary" textStyle="labelSmall">Top</Text>
                    </Surface>
                </Box>
            </Surface>
        </Column>

        <!-- Controls -->
        <Column verticalArrangement={Arrangement.spacedBy(16)}>
            <Text textStyle="titleSmall">Seleccionar BoxAlignment</Text>
            <div class="control-grid">
                {#each alignments as align}
                    <Button
                        onClick={() => selectedAlignment = align.value}
                        color={selectedAlignment.horizontal === align.value.horizontal && selectedAlignment.vertical === align.value.vertical ? "primary" : "surfaceVariant"}
                        onColor={selectedAlignment.horizontal === align.value.horizontal && selectedAlignment.vertical === align.value.vertical ? "onPrimary" : "onSurfaceVariant"}
                        modifier={Modifier.fillMaxWidth()}
                    >
                        {align.label}
                    </Button>
                {/each}
            </div>
        </Column>
    </Column>
</Scaffold>

<style>
    .control-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 12px;
        width: 100%;
    }
</style>
