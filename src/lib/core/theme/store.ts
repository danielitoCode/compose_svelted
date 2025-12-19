import { writable, derived } from "svelte/store";
import type { ComposeTheme, ThemeMode } from "./theme";

export const themeState = writable<{
    light: ComposeTheme;
    dark: ComposeTheme;
    mode: ThemeMode;
} | null>(null);

const prefersDark = () =>
    window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false;

export const resolvedTheme = derived(themeState, ($t) => {
    if (!$t) return null;

    const mode =
        $t.mode === "system"
            ? prefersDark() ? "dark" : "light"
            : $t.mode;

    return $t[mode];
});