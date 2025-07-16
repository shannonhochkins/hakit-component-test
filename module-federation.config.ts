import {createModuleFederationConfig} from '@module-federation/rsbuild-plugin';
import { name, version } from './package.json';
import manifest from './manifest.json';

// Convert package name to valid JavaScript identifier
const federationName = name.replace(/[@\/]/g, '_').replace(/-/g, '_');

export default createModuleFederationConfig({
  name: federationName,
  exposes: manifest.components.map(component => ({
    [`./${component.name}`]: component.src
  })),
  // Use relative paths for dynamic hosting
  getPublicPath: `function() { return ''; }`,
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
