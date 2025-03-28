# Component uploads

Testing the upload of a component to the hakit builder

- Can't use process environment variables, or at least you'll have to define them in the vite config

- Can't use emotion as you can't dynamically import emotion because of their custom runtime

# Rslib MF Project

This example demonstrates how to use Rslib to build a simple Module Federation React component.

### Command

Build package

```
pnpm build
```

Dev mode with host


```
npm run mf-dev
```

Then a Manifest link will be printed in the console, this should be the entry point for the host application.

All components exposed will be automatically loaded by the host application unless in the disabled list within hakit.


### Emotion JS
Nothing to do, should be handled by editor