/// <reference types="vitest" />
import { defineConfig } from 'vite';
import { join } from 'path';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': join(__dirname, 'src'),
    },
  },
  build: {
    target: 'es2015', // 构建出来的产物支持的环境
  },

  test: {
    globals: true,
    environment: 'jsdom',
    transformMode: {
      web: [/\.tsx$/],
    },
  },
  plugins: [vueJsx(), vue()],
});
