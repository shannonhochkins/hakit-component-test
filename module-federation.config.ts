import {createModuleFederationConfig} from '@module-federation/rsbuild-plugin';
import { name } from './package.json';
import manifest from './manifest.json';

export default createModuleFederationConfig({
  name,
  exposes: manifest.components.map(component => ({
    [`./${component.name}`]: component.src
  })),
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
    '@emotion/react': {
      singleton: true,
    },
  },
})
