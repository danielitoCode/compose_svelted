<script lang="ts">
    import {
        Row,
        Alignment,
        Arrangement,
        Text,
        TextStyle,
        Button,
        Modifier,
        Scaffold,
        ColorScheme,
        Surface,
        Column,
        Box
    } from '@danielito1996/compose-svelted';
    import type { NavController } from '@danielito1996/compose-svelted';

    let { navController }: { navController: NavController } = $props();

    let horizontalArrangement = $state(Arrangement.Start);
    let verticalAlignment = $state(Alignment.CenterVertically);

    const arrangements = [
        { label: 'Start', value: Arrangement.Start },
        { label: 'Center', value: Arrangement.Center },
        { label: 'End', value: Arrangement.End },
        { label: 'SpaceBetween', value: Arrangement.SpaceBetween },
        { label: 'SpaceAround', value: Arrangement.SpaceAround },
        { label: 'SpaceEvenly', value: Arrangement.SpaceEvenly },
        { label: 'SpacedBy 16', value: Arrangement.spacedBy(16) },
    ];

    const alignments = [
        { label: 'Top', value: Alignment.Top },
        { label: 'CenterVertically', value: Alignment.CenterVertically },
        { label: 'Bottom', value: Alignment.Bottom },
    ];

    let arrangementName = $derived(
        arrangements.find(a => a.value.justifyContent === horizontalArrangement.justifyContent && a.value.gap === horizontalArrangement.gap)?.label || 'Custom'
    );
    let alignmentName = $derived(
        alignments.find(a => a.value.cssValue === verticalAlignment.cssValue)?.label || 'Custom'
    );
</script>

<Scaffold modifier={Modifier.fillMaxSize()}>
    <svelte:fragment slot="topBar">
        <Surface color="surface" modifier={Modifier.fillMaxWidth().border(0, '', { toCssBorderRadius: () => '0' }).padding(16)}>
            <Row verticalAlignment={Alignment.CenterVertically}>
                <Button onClick={() => navController.popBackStack()} modifier={Modifier.padding({ end: 16 })}>
                    Atrás
                </Button>
                <Text textStyle="titleLarge">Row Playground</Text>
            </Row>
        </Surface>
    </svelte:fragment>

    <Column modifier={Modifier.fillMaxSize().padding(24)} verticalArrangement={Arrangement.spacedBy(32)}>

        <!-- Info Card -->
        <Surface color="secondary" modifier={Modifier.fillMaxWidth().padding(20).clip({ toCssBorderRadius: () => '16px' })}>
            <Row horizontalArrangement={Arrangement.SpaceBetween} verticalAlignment={Alignment.CenterVertically}>
                <Column verticalArrangement={Arrangement.spacedBy(8)}>
                    <Text textStyle="titleMedium" color="onSecondary">Configuración Actual</Text>
                    <Row horizontalArrangement={Arrangement.spacedBy(16)}>
                        <Text textStyle="bodySmall" color="onSecondary">Arrangement: <b>{arrangementName}</b></Text>
                        <Text textStyle="bodySmall" color="onSecondary">Alignment: <b>{alignmentName}</b></Text>
                    </Row>
                </Column>
                <Box modifier={Modifier.width(300)}>
                    <Text textStyle="bodySmall" color="onSecondary">
                        El Row posiciona hijos horizontalmente. El eje principal (X) es controlado por Arrangement.
                    </Text>
                </Box>
            </Row>
        </Surface>

        <!-- Preview Area -->
        <Column verticalArrangement={Arrangement.spacedBy(8)} modifier={Modifier.fillMaxWidth()}>
            <Text textStyle="labelLarge" color="outline">PREVISUALIZACIÓN</Text>
            <Surface color="surfaceVariant" modifier={Modifier.fillMaxWidth().height(260).clip({ toCssBorderRadius: () => '24px' }).border(1, "#DEE1E6").padding(12)}>
                <div class="preview-canvas">
                    <Row
                            modifier={Modifier.fillMaxSize().clip({ toCssBorderRadius: () => '12px' }).padding(10)}
                            horizontalArrangement={horizontalArrangement}
                            verticalAlignment={verticalAlignment}
                    >
                        <Surface modifier={Modifier.size(88).background(ColorScheme.Primary).clip({ toCssBorderRadius: () => '12px' }).border(2, 'rgba(255,255,255,0.35)')} />
                        <Surface modifier={Modifier.size(64).background(ColorScheme.Secondary).clip({ toCssBorderRadius: () => '12px' }).border(2, 'rgba(255,255,255,0.35)')} />
                        <Surface modifier={Modifier.size(104).background(ColorScheme.Tertiary).clip({ toCssBorderRadius: () => '12px' }).border(2, 'rgba(255,255,255,0.35)')} />
                    </Row>
                </div>
            </Surface>
        </Column>

        <!-- Controls -->
        <Row modifier={Modifier.fillMaxWidth().weight(1)} horizontalArrangement={Arrangement.spacedBy(24)}>
            <Column modifier={Modifier.weight(1)} verticalArrangement={Arrangement.spacedBy(16)}>
                <Text textStyle="titleSmall">Horizontal Arrangement (X)</Text>
                <div class="control-grid">
                    {#each arrangements as arr}
                        <Button
                                onClick={() => horizontalArrangement = arr.value}
                                color={horizontalArrangement.justifyContent === arr.value.justifyContent && horizontalArrangement.gap === arr.value.gap ? "primary" : "surfaceVariant"}
                                onColor={horizontalArrangement.justifyContent === arr.value.justifyContent && horizontalArrangement.gap === arr.value.gap ? "onPrimary" : "onSurfaceVariant"}
                                modifier={Modifier.fillMaxWidth()}
                        >
                            {arr.label}
                        </Button>
                    {/each}
                </div>
            </Column>

            <Column modifier={Modifier.weight(1)} verticalArrangement={Arrangement.spacedBy(16)}>
                <Text textStyle="titleSmall">Vertical Alignment (Y)</Text>
                <div class="control-grid">
                    {#each alignments as align}
                        <Button
                                onClick={() => verticalAlignment = align.value}
                                color={verticalAlignment === align.value ? "primary" : "surfaceVariant"}
                                onColor={verticalAlignment.cssValue === align.value.cssValue ? "onPrimary" : "onSurfaceVariant"}
                                modifier={Modifier.fillMaxWidth()}
                        >
                            {align.label}
                        </Button>
                    {/each}
                </div>
            </Column>
        </Row>
    </Column>
</Scaffold>

<style>
    .control-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
        gap: 12px;
        width: 100%;
    }

    .preview-canvas {
        width: 100%;
        height: 100%;
        border-radius: 16px;
        border: 1px dashed rgba(255, 255, 255, 0.25);
        background:
                linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px),
                linear-gradient(0deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px),
                radial-gradient(circle at top right, rgba(255, 115, 47, 0.18), transparent 40%),
                #15161a;
        background-size: 24px 24px, 24px 24px, auto, auto;
        overflow: hidden;
    }
</style>