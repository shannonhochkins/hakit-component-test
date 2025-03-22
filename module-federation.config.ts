import {createModuleFederationConfig} from '@module-federation/rsbuild-plugin';
import { name, dependencies } from './package.json';

export default createModuleFederationConfig({
  name,
  exposes: {
    './Navigation': './src/components/Navigation/index.tsx',
    './Root': './src/components/Root/index.tsx',
  },
  shared: {
    react: {
      eager: true,
    },
    'react-dom': {
      eager: true,
    },
    '@hakit/core': {
      singleton: true,
    },
    '@hakit/components': {
      singleton: true,
    },
    '@measured/puck': {
      singleton: true,
    },
  },
})
