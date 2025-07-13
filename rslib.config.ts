import { pluginReact } from '@rsbuild/plugin-react';
import { defineConfig } from '@rslib/core';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import moduleFederationConfig from './module-federation.config';
import pkg from './package.json';

const shared = {
  dts: {
    bundle: false,
  },
};

export default defineConfig({
  lib: [
    {
      ...shared,
      bundle: false, // Module Federation works better in bundleless mode
      format: 'mf',
      output: {
        // set unpkg cdn as assetPrefix if you want to publish
        assetPrefix:
          process.env.NODE_ENV === 'production'
            ? `http://localhost:3001/${pkg.name}-v${pkg.version}/`
            : undefined,
        distPath: {
          root: './dist/mf',
        },
      },
    },
  ],
  
  server: {
    port: 3001,
  },
  performance: {
    chunkSplit: {
      strategy: 'single-vendor',
      override: {
        chunks: 'all',
        minSize: 100000, // Increase minimum chunk size
        maxSize: 500000, // Set maximum chunk size
        cacheGroups: {
          // Group all exposed components together
          components: {
            test: /src[\\/]components/,
            name: 'components',
            chunks: 'all',
            priority: 5,
            reuseExistingChunk: true,
          },
        },
      },
    },
  },
  tools: {
    swc: {
      jsc: {
        experimental: {
          plugins: [['@swc/plugin-emotion', {}]],
        },
      },
    },
  },
  plugins: [
    pluginReact({
      swcReactOptions: {
        importSource: '@emotion/react',
      }
    }), pluginModuleFederation(moduleFederationConfig)],
});
