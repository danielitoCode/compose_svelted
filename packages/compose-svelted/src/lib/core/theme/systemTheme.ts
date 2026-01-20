import { readable } from "svelte/store";

export type SystemTheme = "light" | "dark";

export const systemTheme = readable<SystemTheme>("light", (set) => {
    if (typeof window === "undefined") return;

    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const update = () => {
        set(media.matches ? "dark" : "light");
    };

    update(); // estado inicial
    media.addEventListener("change", update);

    return () => {
        media.removeEventListener("change", update);
    };
});