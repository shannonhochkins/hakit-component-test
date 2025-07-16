import {createModuleFederationConfig} from '@module-federation/rsbuild-plugin';
import { name, version } from './package.json';
import manifest from './manifest.json';
import { createHash } from 'crypto';

// Convert package name to valid JavaScript identifier
const federationName = name.replace(/[@\/]/g, '_').replace(/-/g, '_');

// Generate deterministic unique ID from manifest contents + version
const manifestString = JSON.stringify(manifest) + version;
const uniqueId = createHash('md5').update(manifestString).digest('hex').substring(0, 8);
const publicPathVar = `__MF_${federationName}_${uniqueId}_PUBLIC_PATH__`;

export default createModuleFederationConfig({
  name: federationName,
  exposes: manifest.components.map(component => ({
    [`./${component.name}`]: component.src
  })),
  // Use dynamic public path from window variable
  getPublicPath: `function() { return window['${publicPathVar}'] || './'; }`,
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

// Export the public path variable name for build scripts
export { publicPathVar };
