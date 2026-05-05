import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  root: __dirname,
  plugins: [svelte()],
  resolve: {
    alias: {
      '@danielito1996/compose-svelted': path.resolve(__dirname, '../src/lib/index.ts')
    }
  }
});
