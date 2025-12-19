import type { ColorToken } from "./ColorScheme";
import type { TextStyleToken } from "./TextStyle";

export const resolveColor = (c: ColorToken) =>
    `var(--md-sys-color-${c})`;

export const resolveTextStyle = (t: TextStyleToken) =>
    `var(--md-sys-typescale-${t})`;