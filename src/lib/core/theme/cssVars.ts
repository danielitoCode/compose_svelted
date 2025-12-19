import type { ComposeTheme } from "./theme";

export function themeToCssVars(theme: ComposeTheme): string {
    const vars: string[] = [];

    Object.entries(theme.colorScheme).forEach(([k, v]) =>
        vars.push(`--md-sys-color-${k}: ${v};`)
    );

    Object.entries(theme.typography).forEach(([k, v]) => {
        vars.push(
            `--md-sys-typescale-${k}: ` +
            `font-family:${v.fontFamily};` +
            `font-size:${v.fontSize};` +
            `line-height:${v.lineHeight};` +
            `letter-spacing:${v.letterSpacing};` +
            `font-weight:${v.fontWeight};`
        );
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