import type { ColorToken } from "./ColorScheme";
import type { TextStyleToken } from "./TextStyle";

export const resolveColor = (c: ColorToken) =>
    `var(--md-sys-color-${c})`;

export function resolveTintColor(color: ColorToken | string): string {
    if (color.startsWith("#") || color.startsWith("rgb") || color.startsWith("hsl")) {
        return color; // directo
    }

    // Para token del tema, resolvemos var a hex/RGB real usando getComputedStyle
    const dummy = document.createElement("div");
    dummy.style.color = resolveColor(color as ColorToken); // var(--...)
    document.body.appendChild(dummy);
    const computed = getComputedStyle(dummy).color; // rgb(...) o hex
    document.body.removeChild(dummy);

    return computed;
}

// Ahora resolvemos cada propiedad por separado
export const resolveTextStyle = (t: TextStyleToken) => `
    font-family: var(--md-sys-typescale-${t}-font-family);
    font-size: var(--md-sys-typescale-${t}-font-size);
    line-height: var(--md-sys-typescale-${t}-line-height);
    letter-spacing: var(--md-sys-typescale-${t}-letter-spacing);
    font-weight: var(--md-sys-typescale-${t}-font-weight);
`;