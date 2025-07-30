import react from '@vitejs/plugin-react-swc';
import path from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  mode: 'production',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router'],
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    minify: true,
    manifest: true,
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @use "@/assets/styles/variables" as *;
        @use "@/assets/styles/mixins" as *;
        `,
      },
    },
  },
});
