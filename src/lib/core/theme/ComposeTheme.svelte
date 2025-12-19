<script lang="ts">
    import { setContext } from "svelte"
    import type { ComposeTheme as Theme, ThemeMode } from "./theme"
    import { themeState, resolvedTheme } from "./store"
    import { themeToCssVars } from "./cssVars"
    import {
        defaultLightTheme,
        defaultDarkTheme,
    } from "./defaults/defaultTheme"

    // 🔑 CLAVE: valor por defecto = prop opcional para Svelte
    export let light: Theme | undefined = undefined
    export let dark: Theme | undefined = undefined
    export let mode: ThemeMode = "system"

    // Resolver con defaults (idéntico a MaterialTheme)
    $: resolvedLight = light ?? defaultLightTheme
    $: resolvedDark = dark ?? defaultDarkTheme

    $: themeState.set({
        light: resolvedLight,
        dark: resolvedDark,
        mode,
    })

    setContext("compose-theme", themeState)

    $: css = $resolvedTheme ? themeToCssVars($resolvedTheme) : ""
</script>

<!-- NO layout, NO scroll -->
<div style={css}>
    <slot />
</div>