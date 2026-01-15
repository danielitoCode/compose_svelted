import { defineConfig } from "vite";
import { svelte } from '@sveltejs/vite-plugin-svelte';
import * as path from "path";

export default defineConfig({
    plugins: [svelte()],
    build: {
        lib: {
            entry: path.resolve(__dirname, "src/lib/index.d.ts"),
            formats: ["es"],
            fileName: () => "index.js"
        },
        outDir: "dist",
        emptyOutDir: true,
        rollupOptions: {
            external: ["svelte"]
        }
    }
});