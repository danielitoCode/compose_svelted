<script lang="ts">
    import { Modifier } from "../core/modifier/Modifier";
    import { resolveColor } from "../core/theme/resolve";
    import {ColorScheme, type ColorToken} from "../core/theme/ColorScheme";

    export let src: string = "";

    export let tint: ColorToken | string | undefined = undefined;

    export let modifier: Modifier = Modifier.empty();

    // Lógica simple y segura
    $: backgroundColor = (() => {
        if (!tint) return resolveColor(ColorScheme.OnBackground as ColorToken);

        // Si es color directo (hex, rgb, hsl, named)
        if (
            typeof tint === "string" &&
            (tint.startsWith("#") || tint.startsWith("rgb") || tint.startsWith("hsl") || tint === "transparent")
        ) {
            return tint;
        }

        // Si es token del tema (string key como "primary", "onSurface")
        if (typeof tint === "string") {
            return resolveColor(tint as ColorToken); // var(--md-sys-color-primary)
        }

        return "currentColor";
    })();
</script>

<div
        class="block"
        style={`
    -webkit-mask-image: url(${src});
    mask-image: url(${src});
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    -webkit-mask-size: contain;
    mask-size: contain;
    -webkit-mask-position: center;
    mask-position: center;
    background-color: ${backgroundColor};
    ${modifier.toStyle()}
  `}
></div>