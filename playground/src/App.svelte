<script lang="ts">
  import {
    AppRoot,
    ComposeTheme,
    NavHost,
    rememberNavController,
    composable
  } from '@danielito1996/compose-svelted';

  // Pantallas
  import Home from "./screens/Home.svelte";
  import LayoutsMenu from "./screens/LayoutsMenu.svelte";
  import BoxPlayground from "./screens/BoxPlayground.svelte";
  import MainNavigationWrapper from "./samples/navigation/MainNavigationWrapper.svelte";
  import RowPlayground from "./screens/RowPlayground.svelte";
  import ColumnPlayground from "./screens/ColumnPlayground.svelte";

  const navController = rememberNavController('home');

  const routes = [
    composable({ path: 'home' }, () => Home),
    composable({ path: 'samples' }, () => MainNavigationWrapper),
    composable({ path: 'layouts' }, () => LayoutsMenu),
    composable({ path: 'box-playground' }, () => BoxPlayground),
    composable({ path: 'row-playground' }, () => RowPlayground),
    composable({ path: 'column-playground' }, () => ColumnPlayground),
  ];
</script>

<ComposeTheme mode="system">
  <AppRoot>
    <NavHost {navController} {routes} />
  </AppRoot>
</ComposeTheme>
