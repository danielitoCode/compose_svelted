<script lang="ts">
    import {
        Column,
        Button,
        Text,
        Modifier,
        Arrangement, Alignment
    } from "../../../dist";

    export let navController;
</script>

<Column
        modifier={Modifier.fillMaxSize().padding(32)}
        verticalArrangement={Arrangement.Center}
        horizontalAlignment={Alignment.CenterVertically}
>
    <Text>Home Screen</Text>

    <Button
            onClick={() =>
        navController.navigate("details", { id: 42 })
    }
    >
        Ir a Details (id=42)
    </Button>

    <Button
            onClick={() => navController.popBackStack()}
    >
        Logout
    </Button>
</Column>