import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, './src/assets'),
      '@js': path.resolve(__dirname, './src/assets/js'),
      '@css': path.resolve(__dirname, './src/assets/css'),
      '@plugins': path.resolve(__dirname, './src/assets/plugins'),
    },
  },
  server: {
    fs: {
      strict: false,
    },
  },
});
