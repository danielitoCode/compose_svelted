<script lang="ts">
    import { themeState, resolvedTheme } from "./store";
    import { themeToCssVars } from "./cssVars";
    import { defaultLightTheme, defaultDarkTheme } from "./defaults/defaultTheme";
    import type { ComposeTheme as Theme, ThemeMode } from "./theme";

    export let light: Theme | undefined = undefined;
    export let dark: Theme | undefined = undefined;
    export let mode: ThemeMode = "system";

    $: themeState.set({
        light: light ?? defaultLightTheme,
        dark: dark ?? defaultDarkTheme,
        mode,
    });

    $: css = $resolvedTheme ? themeToCssVars($resolvedTheme) : "";
</script>

<!--
    ComposeTheme — Proveedor de tokens y estilos globales.
    Aplica las variables CSS y establece el fondo/color base siguiendo el esquema de Material 3.
    Ocupa el 100% para asegurar que los fondos cubran toda la pantalla.
-->
<div
    style={`
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        background-color: var(--md-sys-color-surface, white);
        color: var(--md-sys-color-onSurface, black);
        ${css}
    `}
>
    <slot />
</div>