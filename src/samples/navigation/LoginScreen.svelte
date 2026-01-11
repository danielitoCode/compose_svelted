<script lang="ts">
    import {
        Column,
        Button,
        Text,
        Modifier,
        Arrangement,
        Alignment
    } from "../../../dist";

    export let navController;
</script>

<Column
        modifier={Modifier.fillMaxSize().padding(32)}
        verticalArrangement={Arrangement.Center}
        horizontalAlignment={Alignment.CenterVertically}
>
    <Text>Login Screen</Text>

    <Button
            modifier={Modifier.marginTop(24)}
            onClick={() => navController.navigate("home")}
    >
        Entrar
    </Button>
</Column>