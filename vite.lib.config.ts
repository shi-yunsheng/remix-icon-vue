import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [dts(), vue(), vueJsx()],
  build: {
    // minify: false,
    lib: {
      entry: 'package/index.ts',
      name: 'RemixIcon',
      formats: ['es'],
    },
    emptyOutDir: true,
    rollupOptions: {
      external: ['vue'],
      output: [
        {
          globals: {
            vue: 'Vue',
          },
          entryFileNames: '[name].mjs',
          preserveModules: true,
        },
      ],
    },
  },
});
