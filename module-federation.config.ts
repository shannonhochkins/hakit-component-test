import {createModuleFederationConfig} from '@module-federation/rsbuild-plugin';
import { name, version } from './package.json';
import manifest from './manifest.json';

export default createModuleFederationConfig({
  name,
  exposes: manifest.components.map(component => ({
    [`./${component.name}`]: component.src
  })),
  getPublicPath: `function() { return 'http://localhost:3001/${name}-v${version}/'; }`,
  shared: {
    react: {
      singleton: true,
      eager: false, // Don't bundle, expect from host
      requiredVersion: false,
      import: false, // Don't provide fallback
    },
    'react-dom': {
      singleton: true,
      eager: false,
      requiredVersion: false,
      import: false,
    },
    '@hakit/core': {
      singleton: true,
      eager: false,
      requiredVersion: false,
      import: false,
    },
    '@hakit/components': {
      singleton: true,
      eager: false,
      requiredVersion: false,
      import: false,
    },
    '@measured/puck': {
      singleton: true,
      eager: false,
      requiredVersion: false,
      import: false,
    },
    '@emotion/react': {
      singleton: true,
      eager: false,
      requiredVersion: false,
      import: false,
    },
  },
})
