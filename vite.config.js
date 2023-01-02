import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default (mode) =>
  defineConfig({
    define: {
      'process.env': loadEnv(mode, process.cwd(), ''),
    },
    plugins: [vue()],
    resolve: {
      alias: [
        {
          find: /^~.+/,
          replacement: (val) => {
            return val.replace(/^~/, '');
          },
        },
      ],
    },
  });
