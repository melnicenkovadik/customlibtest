import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { viteStaticCopy } from "vite-plugin-static-copy";
// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    build: {
        lib: {
            entry: path.resolve(__dirname, './src/components/index.ts'),
            name: 'MyComponentLibrary', // Имя библиотеки
            fileName: 'my-component-library', // Имя файла
            formats: ['es'],
        },
        rollupOptions: {
            external: ['react', 'react-dom', 'react/jsx-runtime'],
            output: {
                preserveModules: true,
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                    'react/jsx-runtime': 'react/jsx-runtime',
                },
            },
        },
    },
    plugins: [
        react(),
        dts({ rollupTypes: true }),
        // Убери viteStaticCopy, если нет нужды в копировании статических файлов
        viteStaticCopy({
            targets: [
                {
                    src: './src/shared/tailwind.preset.js',
                    dest: '.',
                },
                {
                    src: './src/shared/tailwind.preset.d.ts',
                    dest: '.',
                },
                {
                    src: './src/shared/styles.css',
                    dest: '.',
                },
            ],
        }),
    ],
});
