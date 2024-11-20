export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, './public/assets'),
    },
  },
  build: {
    rollupOptions: {
      input: './public/index.html',
    },
  },
});
