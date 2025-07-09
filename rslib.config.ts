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
    // {
    //   ...shared,
    //   format: 'esm',
    //   output: {
    //     distPath: {
    //       root: './dist/esm',
    //     },
    //   },
    // },
    // {
    //   ...shared,
    //   format: 'cjs',
    //   output: {
    //     distPath: {
    //       root: './dist/cjs',
    //     },
    //   },
    // },
    {
      ...shared,
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
