<script lang="ts">
    import {
        Column,
        Button,
        Text,
        Modifier,
        Arrangement, Alignment
    } from "../../../dist";

    export let navController;
    export let navBackStackEntry;

    const { id } = navBackStackEntry?.args ?? {};
</script>

<Column
        modifier={Modifier.fillMaxSize().padding(32)}
        verticalArrangement={Arrangement.Center}
        horizontalAlignment={Alignment.CenterVertically}
>
    <Text>Details Screen</Text>
    <Text>ID recibido: {id}</Text>

    <Button onClick={() => navController.popBackStack()}>
        Volver
    </Button>
</Column>
