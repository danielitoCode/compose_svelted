import type { ColorToken } from "./ColorScheme";
import type { TextStyleToken } from "./TextStyle";

export const resolveColor = (c: ColorToken) =>
    `var(--md-sys-color-${c})`;

// Ahora resolvemos cada propiedad por separado
export const resolveTextStyle = (t: TextStyleToken) => `
    font-family: var(--md-sys-typescale-${t}-font-family);
    font-size: var(--md-sys-typescale-${t}-font-size);
    line-height: var(--md-sys-typescale-${t}-line-height);
    letter-spacing: var(--md-sys-typescale-${t}-letter-spacing);
    font-weight: var(--md-sys-typescale-${t}-font-weight);
`;