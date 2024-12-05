import { defineConfig } from 'vite';

export default defineConfig({
    build: {
      lib: {
        entry: './src/index.js',
        name: 'ttyDebouncePlugin',
        fileName: 'tty-debounce-plugin',
      },
      rollupOptions: {
        external: ['vue'],
        output: {
          globals: {
            vue: 'Vue'
          }
        }
      }
    }
  });