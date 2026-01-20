import type { ComposeTheme } from "./theme";

export function themeToCssVars(theme: ComposeTheme): string {
    const vars: string[] = [];

    Object.entries(theme.colorScheme).forEach(([k, v]) =>
        vars.push(`--md-sys-color-${k}: ${v};`)
    );

    // === Tipografía: una variable por cada propiedad (¡esto soluciona el bug!) ===
    Object.entries(theme.typography).forEach(([styleKey, style]) => {
        vars.push(`--md-sys-typescale-${styleKey}-font-family: ${style.fontFamily};`);
        vars.push(`--md-sys-typescale-${styleKey}-font-size: ${style.fontSize};`);
        vars.push(`--md-sys-typescale-${styleKey}-line-height: ${style.lineHeight};`);
        vars.push(`--md-sys-typescale-${styleKey}-letter-spacing: ${style.letterSpacing};`);
        vars.push(`--md-sys-typescale-${styleKey}-font-weight: ${style.fontWeight};`);
    });

    Object.entries(theme.shapes).forEach(([k, v]) =>
        vars.push(`--md-sys-shape-${k}: ${v};`)
    );

    Object.entries(theme.elevation).forEach(([k, v]) =>
        vars.push(`--md-sys-elevation-${k}: ${v};`)
    );

    Object.entries(theme.spacing).forEach(([k, v]) =>
        vars.push(`--md-sys-spacing-${k}: ${v};`)
    );

    return vars.join("\n");
}