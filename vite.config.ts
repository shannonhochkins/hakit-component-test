import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import federation from "@originjs/vite-plugin-federation";

// const ENTRIES = {

// }

// https://vite.dev/config/

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'Testing',
      filename: 'remoteEntry.js',
      remotes: {
        remoteName: '',
      },
      // Modules to expose
      exposes: {
          './Layout': './src/',
      },
      shared: ['react', 'react-dom'],
      // mode: 'development',
    })
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
    // lib: {
    //   entry: './src/components/Slider',
    //   name: 'Testing',
    //   formats: ['es'], // or 'umd', etc.
    //   fileName: (format) => `remote-${format}.js`
    // },
  }
});