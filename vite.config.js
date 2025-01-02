// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import tailwindcss from 'tailwindcss';
// import react from '@vitejs/plugin-react';
// import commonjs from 'vite-plugin-commonjs';

// export default defineConfig({
//   plugins: [react(), commonjs()],
//   css: {
//     postcss: {
//       plugins: [tailwindcss()],
//     },
//   },
//   optimizeDeps: {
//     include: ['editorjs-html'], // Ensure this package is pre-bundled
//   },
//   build: {
//     commonjsOptions: {
//       include: [/editorjs-html/, /node_modules/], // Include CommonJS dependencies
//     },
//   },

// });

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
