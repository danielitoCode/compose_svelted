import { writable, derived } from "svelte/store";
import type { ComposeTheme, ThemeMode } from "./theme";
import { systemTheme } from "./systemTheme";

export const themeState = writable<{
    light: ComposeTheme;
    dark: ComposeTheme;
    mode: ThemeMode;
} | null>(null);

// 🔑 ESTE es el tema efectivo (como MaterialTheme)
export const resolvedTheme = derived(
    [themeState, systemTheme],
    ([$theme, $system]) => {
        if (!$theme) return null;

        const mode =
            $theme.mode === "system"
                ? $system
                : $theme.mode;

        return mode === "dark"
            ? $theme.dark
            : $theme.light;
    }
);