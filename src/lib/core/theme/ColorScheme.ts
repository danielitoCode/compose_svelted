import type { ColorScheme as Def } from "./colors";

export type ColorToken = keyof Def;

export const ColorScheme = {
    Primary: "primary",
    OnPrimary: "onPrimary",

    Secondary: "secondary",
    OnSecondary: "onSecondary",

    Background: "background",
    OnBackground: "onBackground",

    Surface: "surface",
    OnSurface: "onSurface",

    SurfaceVariant: "surfaceVariant",
    OnSurfaceVariant: "onSurfaceVariant",

    Tertiary: "tertiary",
    OnTertiary: "onTertiary",

    Outline: "outline",

    Error: "error",
    OnError: "onError",
} as const;