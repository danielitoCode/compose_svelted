import { get } from "svelte/store";
import { resolvedTheme } from "./store";

export function getCurrentColor(token: string): string {
    const theme = get(resolvedTheme);
    if (!theme) return "#2a2a2a"; // fallback

    // Buscamos el token en el colorScheme actual
    return theme.colorScheme[token as keyof typeof theme.colorScheme] || "#2a2a2a";
}