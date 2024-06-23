import { defineConfig } from 'vite';
export default defineConfig({
    css: {
        preprocessorOptions: {
            scss: {},
        },
    },
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
