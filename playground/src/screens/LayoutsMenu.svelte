<script lang="ts">
    import {
        Column,
        Arrangement,
        Alignment,
        Text,
        TextStyle,
        Button,
        Modifier,
        Scaffold,
        Row,
        Surface
    } from '@danielito1996/compose-svelted';
    import type { NavController } from '@danielito1996/compose-svelted';

    let { navController } : { navController: NavController } = $props();
</script>

<Scaffold modifier={Modifier.fillMaxSize()}>
    <svelte:fragment slot="topBar">
        <Surface color="surface" modifier={Modifier.fillMaxWidth().padding(16)}>
            <Row verticalAlignment={Alignment.CenterVertically}>
                <Button onClick={() => navController.popBackStack()} modifier={Modifier.padding({ end: 16 })}>
                    Atrás
                </Button>
                <Text textStyle="titleLarge">Catálogo de Layouts</Text>
            </Row>
        </Surface>
    </svelte:fragment>

    <Column
        modifier={Modifier.fillMaxSize().padding(32)}
        verticalArrangement={Arrangement.spacedBy(32)}
        horizontalAlignment={Alignment.CenterHorizontally}
    >
        <Text textStyle="headlineSmall" color="primary">Selecciona un Playground</Text>

        <Column verticalArrangement={Arrangement.spacedBy(16)} modifier={Modifier.width(320)}>
            <Button onClick={() => navController.navigate('box-playground')} modifier={Modifier.fillMaxWidth().height(80)}>
                <Column horizontalAlignment={Alignment.CenterHorizontally}>
                    <Text textStyle="titleMedium">Box Alignment</Text>
                    <Text textStyle="labelSmall">Apilamiento y Stacking</Text>
                </Column>
            </Button>
            
            <Button onClick={() => navController.navigate('row-playground')} modifier={Modifier.fillMaxWidth().height(80)}>
                <Column horizontalAlignment={Alignment.CenterHorizontally}>
                    <Text textStyle="titleMedium">Row Layout</Text>
                    <Text textStyle="labelSmall">Flujo Horizontal</Text>
                </Column>
            </Button>
            
            <Button onClick={() => navController.navigate('column-playground')} modifier={Modifier.fillMaxWidth().height(80)}>
                <Column horizontalAlignment={Alignment.CenterHorizontally}>
                    <Text textStyle="titleMedium">Column Layout</Text>
                    <Text textStyle="labelSmall">Flujo Vertical</Text>
                </Column>
            </Button>
        </Column>

        <Surface color="surfaceVariant" modifier={Modifier.padding(24).clip({ toCssBorderRadius: () => '16px' }).width(400)}>
            <Text textStyle="bodySmall">
                Estos componentes forman la base de cualquier interfaz en Compose. Dominar sus alineaciones es clave para layouts responsivos.
            </Text>
        </Surface>
    </Column>
</Scaffold>
