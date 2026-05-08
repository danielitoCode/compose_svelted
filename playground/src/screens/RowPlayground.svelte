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
        <Column verticalArrangement={Arrangement.spacedBy(8)}>
            <Text textStyle="labelLarge" color="outline">PREVISUALIZACIÓN</Text>
            <Surface color="surfaceVariant" modifier={Modifier.fillMaxWidth().height(200).clip({ toCssBorderRadius: () => '24px' }).border(1, "#DEE1E6")}>
                <Row
                    modifier={Modifier.fillMaxSize()}
                    horizontalArrangement={horizontalArrangement}
                    verticalAlignment={verticalAlignment}
                >
                    <Surface modifier={Modifier.size(80).background(ColorScheme.Primary).clip({ toCssBorderRadius: () => '12px' })} />
                    <Surface modifier={Modifier.size(60).background(ColorScheme.Secondary).clip({ toCssBorderRadius: () => '12px' })} />
                    <Surface modifier={Modifier.size(100).background(ColorScheme.Outline).clip({ toCssBorderRadius: () => '12px' })} />
                </Row>
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
</style>
