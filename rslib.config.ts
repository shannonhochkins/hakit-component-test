import { pluginReact } from '@rsbuild/plugin-react';
import { defineConfig } from '@rslib/core';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import moduleFederationConfig from './module-federation.config';
import pkg from './package.json';


export default defineConfig({
  
  lib: [
    {
      dts: false,
      format: 'mf',
      output: {
        assetPrefix: '{{{_HAKIT_ASSET_PREFIX_}}}',
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
    }), pluginModuleFederation(moduleFederationConfig, {
      environment: 'production',
    })],
});
