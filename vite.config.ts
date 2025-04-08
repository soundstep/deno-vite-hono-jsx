import devServer from '@hono/vite-dev-server';
import { defineConfig } from 'vite';
import deno from '@deno/vite-plugin';
import build from '@hono/vite-build/deno';

export default defineConfig(({ mode }) => {
    if (mode === 'client') {
        return {
            esbuild: {
                jsxImportSource: 'hono/jsx/dom', // Optimized for hono/jsx/dom
            },
            build: {
                rollupOptions: {
                    input: './client/index.tsx',
                    output: {
                        entryFileNames: 'static/client.js',
                    },
                },
            },
        };
    }

    return {
        plugins: [
            deno(),
            build({
                entry: 'server/app.tsx',
            }),
            devServer({
                entry: 'server/app.tsx',
            }),
        ],
    };
});
