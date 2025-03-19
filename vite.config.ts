import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import federation from "@originjs/vite-plugin-federation";


// https://vite.dev/config/

export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: [
          [
            '@emotion/babel-plugin',
            {
              sourceMap: false,
              autoLabel: 'dev-only',
              labelFormat: '[local]',
              cssPropOptimization: true,
            },
          ],
        ],
      },
    }),
    federation({
      name: 'Testing',
      filename: 'remoteEntry.js',
      // Modules to expose
      exposes: {  
          './Layout': './src/components/Layout',
          './Slider': './src/components/Slider',
          './Navigation': './src/components/Navigation',
          './Background': {
            import: './src/components/Background'
          },
          './Root': {
            import: './src/components/Root'
          },
      },
      // declare interface SharedConfig {
      //   /**
      //    * Include the provided and fallback module directly instead behind an async request. This allows to use this shared module in initial load too. All possible shared modules need to be eager too.
      //    */
      //   // eager?: boolean
      
      //   /**
      //    * Provided module that should be provided to share scope. Also acts as fallback module if no shared module is found in share scope or version isn't valid. Defaults to the property name.
      //    */
      //   import?: boolean
      
      //   /**
      //    * Package name to determine required version from description file. This is only needed when package name can't be automatically determined from request.
      //    */
      //   // packageName?: string
      
      //   /**
      //    * Specify the path to the custom package, the field is not supported in dev mode
      //    */
      //   packagePath?: string | undefined
      
      //   /**
      //    * Version requirement from module in share scope.
      //    */
      //   requiredVersion?: string | false
      
      //   /**
      //    * Module is looked up under this key from the share scope.
      //    */
      //   // shareKey?: string
      
      //   /**
      //    * Share scope name.
      //    */
      //   shareScope?: string
      
      //   /**
      //    * Allow only a single version of the shared module in share scope (disabled by default).
      //    */
      //   // singleton?: boolean
      
      //   /**
      //    * Do not accept shared module if version is not valid (defaults to yes, if local fallback module is available and shared module is not a singleton, otherwise no, has no effect if there is no required version specified).
      //    */
      //   // strictVersion?: boolean
      
      //   /**
      //    * Version of the provided module. Will replace lower matching versions, but not higher.
      //    */
      //   version?: string | false
      
      //   /**
      //    * determine whether to include the shared in the chunk, true is included, false will not generate a shared chunk, only the remote side of the parameter is valid, the host side will definitely generate a shared chunk
      //    */
      //   generate?: boolean
      
      //   /**
      //    * if true, the shared dep will be append in the html head, only valid in prod mode
      //    */
      //   modulePreload?: boolean
      // }
      shared: {
        react: {
          generate: false,
          import: false,
          // import
     // packagePath
          // requiredVersion
          // shareScope
          // version
          // generate
          // modulePreload
        },
        'react-dom': {
          generate: true,
          import: true,
          modulePreload: false,
        },
        '@emotion/react': {
          generate: true,
          import: true,
          modulePreload: false,
        },
        '@emotion/styled': {
          generate: true,
          import: true,
          modulePreload: false,
        },
        '@hakit/core': {
          generate: true,
          import: true,
          modulePreload: false,
        },
        '@hakit/components': {
          generate: true,
          import: true,
          modulePreload: false,
        },
        'uuid': {
          generate: true,
          import: true,
          modulePreload: false,
        },
        'framer-motion': {
          generate: true,
          import: true,
          modulePreload: false,
        },
      }
      // shared: ['react', 'react-dom', '@hakit/core', '@hakit/components', 'uuid', 'framer-motion', '@measured/puck', '@emotion/styled', '@emotion/react'],
    })
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
    rollupOptions: {
      // external: ['@hakit/components', '@hakit/core']
    }
  }
});