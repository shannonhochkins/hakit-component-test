import { j as jsxRuntimeExports } from './jsx-runtime-XI9uIe3W.js';
import { h as hasOwn, E as Emotion$1, c as createEmotionProps } from './emotion-element-f0de968e.browser.esm-Ph06bIc_.js';
import './emotion-use-insertion-effect-with-fallbacks.browser.esm-DTjd7d4P.js';

var Fragment = jsxRuntimeExports.Fragment;
var jsx = function jsx(type, props, key) {
  if (!hasOwn.call(props, 'css')) {
    return jsxRuntimeExports.jsx(type, props, key);
  }

  return jsxRuntimeExports.jsx(Emotion$1, createEmotionProps(type, props), key);
};
var jsxs = function jsxs(type, props, key) {
  if (!hasOwn.call(props, 'css')) {
    return jsxRuntimeExports.jsxs(type, props, key);
  }

  return jsxRuntimeExports.jsxs(Emotion$1, createEmotionProps(type, props), key);
};

export { Fragment as F, jsxs as a, jsx as j };
