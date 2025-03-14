import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
const libraryName = 'Layout';

export default defineConfig({
  plugins: [react()],
  mode: 'production',
  build: {
    lib: {
      // The entry point for your library
      entry: 'src/index.tsx',
      // The name of the global variable when you build in UMD or iife formats
      name: libraryName,
      formats: ['es'],
      // The default file name for the output (e.g. my-plugin.umd.js, my-plugin.es.js, etc.)
      fileName: (format) => `plugin.${format}.js`,
    },
    rollupOptions: {
      // Indicate which deps should remain external to the bundle.
      external: [
        'react',
        'react-dom',
        // If you have another package that is already in the host project,
        // add it here as well, e.g. 'some-other-package'
        // '@measured/puck'
      ],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized dependencies
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          '@measured-puck': '@measured/puck',
        },
      },
    },
  },
});