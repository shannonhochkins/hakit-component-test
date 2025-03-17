import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'Testing',
      filename: 'remoteEntry.js',
      // Modules to expose
      exposes: {
          './Layout': './src/components/Layout',
          './Slider': './src/components/Slider',
          './Navigation': './src/components/Navigation',
          './Background': './src/components/Background',
          './Root': './src/components/Root',
      },
      shared: ['react', 'react-dom', '@hakit/core', '@hakit/components', 'uuid', 'framer-motion', '@measured/puck', '@emotion/styled', '@emotion/react'],
    })
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
    rollupOptions: {
      // external: ['@emotion/react', '@emotion/styled']
    }
  }
});