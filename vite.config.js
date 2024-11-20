import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Настройка путей для локальных файлов
      '@assets': path.resolve(__dirname, './src/assets'),
      '@js': path.resolve(__dirname, './src/assets/js'),
      '@css': path.resolve(__dirname, './src/assets/css'),
      '@plugins': path.resolve(__dirname, './src/assets/plugins'),
    },
  },
  server: {
    fs: {
      // Разрешаем доступ к локальным файлам вне проекта, если потребуется
      strict: false,
    },
  },
  build: {
    rollupOptions: {
      external: [
        '/src/assets/js/jquery.min.js',
        '/src/assets/js/popper.min.js',
        '/src/assets/js/bootstrap.min.js',
        '/src/assets/plugins/fancybox-master/dist/jquery.fancybox.min.js',
        '/src/assets/plugins/owl-carousel/dist/owl.carousel.min.js',
        '/src/assets/js/main.js',
      ],
    },
  },
});
