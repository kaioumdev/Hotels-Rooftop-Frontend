import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import commonjs from 'vite-plugin-commonjs';

export default defineConfig({
  plugins: [react(), commonjs()],
  optimizeDeps: {
    include: ['editorjs-html'], // Ensure this package is pre-bundled
  },
  build: {
    commonjsOptions: {
      include: [/editorjs-html/, /node_modules/], // Include CommonJS dependencies
    },
  },
});
