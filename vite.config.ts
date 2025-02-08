import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, './src/components/index.ts'), // Путь к файлу index.ts
      name: 'my-component-library', // Имя библиотеки
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
    dts({
      rollupTypes: true,
      entryRoot: 'src',
      outDir: 'dist',
    }),
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
          src: './src/index.css',
          dest: '.',
        },
      ],
    }),
  ],
});
