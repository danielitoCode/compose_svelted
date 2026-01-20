import type { Typography } from "../typography";

/**
 * Material Design 3 - Type Scale
 * Nombres EXACTOS a Jetpack Compose Material 3:
 * displayLarge, displayMedium, displaySmall,
 * headlineLarge, headlineMedium, headlineSmall,
 * titleLarge, titleMedium, titleSmall,
 * bodyLarge, bodyMedium, bodySmall,
 * labelLarge, labelMedium, labelSmall
 *
 * Valores (size/lineHeight/letterSpacing/fontWeight) corresponden a MD3.
 * fontFamily: system stack por defecto (overrideable por el consumidor).
 */
const fontFamily =
    "system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif";

export const defaultTypography: Typography = {
    displayLarge: {
        fontFamily,
        fontSize: "57px",
        lineHeight: "64px",
        letterSpacing: "-0.25px",
        fontWeight: 400,
    },
    displayMedium: {
        fontFamily,
        fontSize: "45px",
        lineHeight: "52px",
        letterSpacing: "0px",
        fontWeight: 400,
    },
    displaySmall: {
        fontFamily,
        fontSize: "36px",
        lineHeight: "44px",
        letterSpacing: "0px",
        fontWeight: 400,
    },

    headlineLarge: {
        fontFamily,
        fontSize: "32px",
        lineHeight: "40px",
        letterSpacing: "0px",
        fontWeight: 400,
    },
    headlineMedium: {
        fontFamily,
        fontSize: "28px",
        lineHeight: "36px",
        letterSpacing: "0px",
        fontWeight: 400,
    },
    headlineSmall: {
        fontFamily,
        fontSize: "24px",
        lineHeight: "32px",
        letterSpacing: "0px",
        fontWeight: 400,
    },

    titleLarge: {
        fontFamily,
        fontSize: "22px",
        lineHeight: "28px",
        letterSpacing: "0px",
        fontWeight: 400,
    },
    titleMedium: {
        fontFamily,
        fontSize: "16px",
        lineHeight: "24px",
        letterSpacing: "0.15px",
        fontWeight: 500,
    },
    titleSmall: {
        fontFamily,
        fontSize: "14px",
        lineHeight: "20px",
        letterSpacing: "0.1px",
        fontWeight: 500,
    },

    bodyLarge: {
        fontFamily,
        fontSize: "16px",
        lineHeight: "24px",
        letterSpacing: "0.5px",
        fontWeight: 400,
    },
    bodyMedium: {
        fontFamily,
        fontSize: "14px",
        lineHeight: "20px",
        letterSpacing: "0.25px",
        fontWeight: 400,
    },
    bodySmall: {
        fontFamily,
        fontSize: "12px",
        lineHeight: "16px",
        letterSpacing: "0.4px",
        fontWeight: 400,
    },

    labelLarge: {
        fontFamily,
        fontSize: "14px",
        lineHeight: "20px",
        letterSpacing: "0.1px",
        fontWeight: 500,
    },
    labelMedium: {
        fontFamily,
        fontSize: "12px",
        lineHeight: "16px",
        letterSpacing: "0.5px",
        fontWeight: 500,
    },
    labelSmall: {
        fontFamily,
        fontSize: "11px",
        lineHeight: "16px",
        letterSpacing: "0.5px",
        fontWeight: 500,
    },
};