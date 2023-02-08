/// <reference types="vitest" />
import { defineConfig } from 'vite';
import { join } from 'path';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import AutoImport from 'unplugin-auto-import/vite'; // 自动导入
import Components from 'unplugin-vue-components/vite'; // 自动注册
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import Icons from 'unplugin-icons/vite'; // icon相关
import IconsResolver from 'unplugin-icons/resolver'; // icon相关

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
  plugins: [
    vueJsx(),
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver(), IconsResolver({ prefix: 'Icon' })],
    }),
    Components({
      resolvers: [
        ElementPlusResolver(),
        IconsResolver({ enabledCollections: ['ep'] }),
      ],
    }),
    Icons({
      autoInstall: true,
    }),
  ],
});
