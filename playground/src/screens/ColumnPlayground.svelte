<script lang="ts">
    import {
        Column,
        Alignment,
        Arrangement,
        Text,
        TextStyle,
        Button,
        Modifier,
        Scaffold,
        ColorScheme,
        Surface,
        Row,
        Box
    } from '@danielito1996/compose-svelted';
    import type { NavController } from '@danielito1996/compose-svelted';

    let { navController }: { navController: NavController } = $props();

    let verticalArrangement = $state(Arrangement.Top);
    let horizontalAlignment = $state(Alignment.CenterHorizontally);

    const arrangements = [
        { label: 'Top', value: Arrangement.Top },
        { label: 'Center', value: Arrangement.Center },
        { label: 'Bottom', value: Arrangement.Bottom },
        { label: 'SpaceBetween', value: Arrangement.SpaceBetween },
        { label: 'SpaceAround', value: Arrangement.SpaceAround },
        { label: 'SpaceEvenly', value: Arrangement.SpaceEvenly },
        { label: 'SpacedBy 16', value: Arrangement.spacedBy(16) },
    ];

    const alignments = [
        { label: 'Start', value: Alignment.Start },
        { label: 'CenterHorizontally', value: Alignment.CenterHorizontally },
        { label: 'End', value: Alignment.End },
    ];

    let arrangementName = $derived(
        arrangements.find(a => a.value.justifyContent === verticalArrangement.justifyContent && a.value.gap === verticalArrangement.gap)?.label || 'Custom'
    );
    let alignmentName = $derived(
        alignments.find(a => a.value.cssValue === horizontalAlignment.cssValue)?.label || 'Custom'
    );
</script>

<Scaffold modifier={Modifier.fillMaxSize()}>
    <svelte:fragment slot="topBar">
        <Surface color="surface" modifier={Modifier.fillMaxWidth().padding(16)}>
            <Row verticalAlignment={Alignment.CenterVertically}>
                <Button onClick={() => navController.popBackStack()} modifier={Modifier.padding({ end: 16 })}>
                    Atrás
                </Button>
                <Text textStyle="titleLarge">Column Playground</Text>
            </Row>
        </Surface>
    </svelte:fragment>

    <Row modifier={Modifier.fillMaxSize().padding(24)} horizontalArrangement={Arrangement.spacedBy(32)}>
        <!-- View Area -->
        <Column verticalArrangement={Arrangement.spacedBy(8)} modifier={Modifier.width(320).fillMaxHeight()}>
            <Text textStyle="labelLarge" color="outline">PREVISUALIZACIÓN</Text>
            <Surface color="surfaceVariant" modifier={Modifier.fillMaxSize().clip({ toCssBorderRadius: () => '24px' }).border(1, "#DEE1E6").padding(12)}>
                <div class="preview-canvas">
                    <Column
                            modifier={Modifier.fillMaxSize().clip({ toCssBorderRadius: () => '12px' }).padding(10)}
                            verticalArrangement={verticalArrangement}
                            horizontalAlignment={horizontalAlignment}
                    >
                        <Surface modifier={Modifier.size(88).background(ColorScheme.Primary).clip({ toCssBorderRadius: () => '12px' }).border(2, 'rgba(255,255,255,0.35)')} />
                        <Surface modifier={Modifier.size(64).background(ColorScheme.Secondary).clip({ toCssBorderRadius: () => '12px' }).border(2, 'rgba(255,255,255,0.35)')} />
                        <Surface modifier={Modifier.size(104).background(ColorScheme.Tertiary).clip({ toCssBorderRadius: () => '12px' }).border(2, 'rgba(255,255,255,0.35)')} />
                    </Column>
                </div>
            </Surface>
        </Column>

        <!-- Controls Area -->
        <Column modifier={Modifier.weight(1).verticalScroll()} verticalArrangement={Arrangement.spacedBy(32)}>

            <Surface color="secondary" modifier={Modifier.fillMaxWidth().padding(20).clip({ toCssBorderRadius: () => '16px' })}>
                <Column verticalArrangement={Arrangement.spacedBy(8)}>
                    <Text textStyle="titleMedium" color="onSecondary">Configuración Actual</Text>
                    <Row horizontalArrangement={Arrangement.spacedBy(16)}>
                        <Text textStyle="bodySmall" color="onSecondary">Arrangement: <b>{arrangementName}</b></Text>
                        <Text textStyle="bodySmall" color="onSecondary">Alignment: <b>{alignmentName}</b></Text>
                    </Row>
                </Column>
            </Surface>

            <Column verticalArrangement={Arrangement.spacedBy(16)}>
                <Text textStyle="titleSmall">Vertical Arrangement (Y)</Text>
                <div class="control-grid">
                    {#each arrangements as arr}
                        <Button
                                onClick={() => verticalArrangement = arr.value}
                                color={verticalArrangement.justifyContent === arr.value.justifyContent && verticalArrangement.gap === arr.value.gap ? "primary" : "surfaceVariant"}
                                onColor={verticalArrangement.justifyContent === arr.value.justifyContent && verticalArrangement.gap === arr.value.gap ? "onPrimary" : "onSurfaceVariant"}
                                modifier={Modifier.fillMaxWidth()}
                        >
                            {arr.label}
                        </Button>
                    {/each}
                </div>
            </Column>

            <Column verticalArrangement={Arrangement.spacedBy(16)}>
                <Text textStyle="titleSmall">Horizontal Alignment (X)</Text>
                <div class="control-grid">
                    {#each alignments as align}
                        <Button
                                onClick={() => horizontalAlignment = align.value}
                                color={horizontalAlignment.cssValue === align.value.cssValue ? "primary" : "surfaceVariant"}
                                onColor={horizontalAlignment.cssValue === align.value.cssValue ? "onPrimary" : "onSurfaceVariant"}
                                modifier={Modifier.fillMaxWidth()}
                        >
                            {align.label}
                        </Button>
                    {/each}
                </div>
            </Column>
        </Column>
    </Row>
</Scaffold>

<style>
    .control-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
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