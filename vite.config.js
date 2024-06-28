import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [],
    build: {
        rollupOptions: {
            input: {
                main: 'index.html',
            },
            output: {
                manualChunks: {},
                entryFileNames: '[name].js',
            },
        },
    },
});
