import { importShared } from '../__federation_fn_import-Cbj1D39_.js';
import { j as jsxRuntimeExports } from '../jsx-runtime-XI9uIe3W.js';
import { g as getDefaultExportFromCjs } from '../_commonjsHelpers-BFTU3MAI.js';

var __create$4 = Object.create;
var __defProp$7 = Object.defineProperty;
var __defProps$6 = Object.defineProperties;
var __getOwnPropDesc$4 = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs$6 = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols$7 = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp$7 = Object.prototype.hasOwnProperty;
var __propIsEnum$7 = Object.prototype.propertyIsEnumerable;
var __typeError$5 = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp$7 = (obj, key, value) => key in obj ? __defProp$7(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$7 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$7.call(b, prop))
      __defNormalProp$7(a, prop, b[prop]);
  if (__getOwnPropSymbols$7)
    for (var prop of __getOwnPropSymbols$7(b)) {
      if (__propIsEnum$7.call(b, prop))
        __defNormalProp$7(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$6 = (a, b) => __defProps$6(a, __getOwnPropDescs$6(b));
var __objRest$4 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$7.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$7)
    for (var prop of __getOwnPropSymbols$7(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$7.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp$7.call(to, key) && key !== except)
        __defProp$7(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc$4(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create$4(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  !mod || !mod.__esModule ? __defProp$7(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __accessCheck$5 = (obj, member, msg) => member.has(obj) || __typeError$5("Cannot " + msg);
var __privateGet$5 = (obj, member, getter) => (__accessCheck$5(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd$5 = (obj, member, value) => member.has(obj) ? __typeError$5("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet$5 = (obj, member, value, setter) => (__accessCheck$5(obj, member, "write to private field"), member.set(obj, value), value);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// ../tsup-config/react-import.js
await importShared('react');

var init_react_import = __esm({
  "../tsup-config/react-import.js"() {
  }
});

// lib/resolve-all-data.ts
init_react_import();

// lib/resolve-component-data.ts
init_react_import();

// lib/get-changed.ts
init_react_import();
var getChanged = (newItem, oldItem) => {
  return newItem ? Object.keys(newItem.props || {}).reduce((acc, item) => {
    const newItemProps = (newItem == null ? void 0 : newItem.props) || {};
    const oldItemProps = (oldItem == null ? void 0 : oldItem.props) || {};
    return __spreadProps$6(__spreadValues$7({}, acc), {
      [item]: oldItemProps[item] !== newItemProps[item]
    });
  }, {}) : {};
};

// lib/resolve-component-data.ts
var cache = { lastChange: {} };
var resolveAllComponentData = (content, config, onResolveStart, onResolveEnd) => __async(void 0, null, function* () {
  return yield Promise.all(
    content.map((item) => __async(void 0, null, function* () {
      return yield resolveComponentData(
        item,
        config,
        onResolveStart,
        onResolveEnd
      );
    }))
  );
});
var resolveComponentData = (item, config, onResolveStart, onResolveEnd) => __async(void 0, null, function* () {
  const configForItem = config.components[item.type];
  if (configForItem.resolveData) {
    const { item: oldItem = null, resolved = {} } = cache.lastChange[item.props.id] || {};
    if (item && item === oldItem) {
      return resolved;
    }
    const changed = getChanged(item, oldItem);
    if (onResolveStart) {
      onResolveStart(item);
    }
    const { props: resolvedProps, readOnly = {} } = yield configForItem.resolveData(item, { changed, lastData: oldItem });
    const resolvedItem = __spreadProps$6(__spreadValues$7({}, item), {
      props: __spreadValues$7(__spreadValues$7({}, item.props), resolvedProps)
    });
    if (Object.keys(readOnly).length) {
      resolvedItem.readOnly = readOnly;
    }
    cache.lastChange[item.props.id] = {
      item,
      resolved: resolvedItem
    };
    if (onResolveEnd) {
      onResolveEnd(resolvedItem);
    }
    return resolvedItem;
  }
  return item;
});

// lib/resolve-root-data.ts
init_react_import();
var cache2 = {};
function resolveRootData(data, config) {
  return __async(this, null, function* () {
    var _a, _b, _c, _d, _e;
    if (((_a = config.root) == null ? void 0 : _a.resolveData) && data.root.props) {
      if (((_b = cache2.lastChange) == null ? void 0 : _b.original) === data.root) {
        return cache2.lastChange.resolved;
      }
      const changed = getChanged(data.root, (_c = cache2.lastChange) == null ? void 0 : _c.original);
      const rootWithProps = data.root;
      const resolvedRoot = yield (_e = config.root) == null ? void 0 : _e.resolveData(rootWithProps, {
        changed,
        lastData: ((_d = cache2.lastChange) == null ? void 0 : _d.original) || {}
      });
      cache2.lastChange = {
        original: data.root,
        resolved: resolvedRoot
      };
      return __spreadProps$6(__spreadValues$7(__spreadValues$7({}, data.root), resolvedRoot), {
        props: __spreadValues$7(__spreadValues$7({}, data.root.props), resolvedRoot.props)
      });
    }
    return data.root;
  });
}

// lib/default-data.ts
init_react_import();
var defaultData = (data) => __spreadProps$6(__spreadValues$7({}, data), {
  root: data.root || {},
  content: data.content || []
});

// lib/resolve-all-data.ts
function resolveAllData(data, config, onResolveStart, onResolveEnd) {
  return __async(this, null, function* () {
    const defaultedData = defaultData(data);
    const dynamicRoot = yield resolveRootData(defaultedData, config);
    const { zones = {} } = data;
    const zoneKeys = Object.keys(zones);
    const resolvedZones = {};
    for (let i = 0; i < zoneKeys.length; i++) {
      const zoneKey = zoneKeys[i];
      resolvedZones[zoneKey] = yield resolveAllComponentData(
        zones[zoneKey],
        config,
        onResolveStart,
        onResolveEnd
      );
    }
    return __spreadProps$6(__spreadValues$7({}, defaultedData), {
      root: dynamicRoot,
      content: yield resolveAllComponentData(
        defaultedData.content,
        config,
        onResolveStart,
        onResolveEnd
      ),
      zones: resolvedZones
    });
  });
}

// lib/root-droppable-id.ts
init_react_import();
var rootDroppableId = "default-zone";

// lib/setup-zone.ts
init_react_import();
var setupZone = (data, zoneKey) => {
  if (zoneKey === rootDroppableId) {
    return data;
  }
  const newData = __spreadProps$6(__spreadValues$7({}, data), {
    zones: data.zones ? __spreadValues$7({}, data.zones) : {}
  });
  newData.zones[zoneKey] = newData.zones[zoneKey] || [];
  return newData;
};

var i=Symbol.for("preact-signals");function t$1(){if(!(s>1)){var i,t=false;while(void 0!==h){var r=h;h=void 0;f++;while(void 0!==r){var o=r.o;r.o=void 0;r.f&=-3;if(!(8&r.f)&&c$1(r))try{r.c();}catch(r){if(!t){i=r;t=true;}}r=o;}}f=0;s--;if(t)throw i}else s--;}function r$1(i){if(s>0)return i();s++;try{return i()}finally{t$1();}}var o=void 0;function n$1(i){var t=o;o=void 0;try{return i()}finally{o=t;}}var h=void 0,s=0,f=0,v=0;function e$1(i){if(void 0!==o){var t=i.n;if(void 0===t||t.t!==o){t={i:0,S:i,p:o.s,n:void 0,t:o,e:void 0,x:void 0,r:t};if(void 0!==o.s)o.s.n=t;o.s=t;i.n=t;if(32&o.f)i.S(t);return t}else if(-1===t.i){t.i=0;if(void 0!==t.n){t.n.p=t.p;if(void 0!==t.p)t.p.n=t.n;t.p=o.s;t.n=void 0;o.s.n=t;o.s=t;}return t}}}function u$1(i){this.v=i;this.i=0;this.n=void 0;this.t=void 0;}u$1.prototype.brand=i;u$1.prototype.h=function(){return  true};u$1.prototype.S=function(i){if(this.t!==i&&void 0===i.e){i.x=this.t;if(void 0!==this.t)this.t.e=i;this.t=i;}};u$1.prototype.U=function(i){if(void 0!==this.t){var t=i.e,r=i.x;if(void 0!==t){t.x=r;i.e=void 0;}if(void 0!==r){r.e=t;i.x=void 0;}if(i===this.t)this.t=r;}};u$1.prototype.subscribe=function(i){var t=this;return E(function(){var r=t.value,n=o;o=void 0;try{i(r);}finally{o=n;}})};u$1.prototype.valueOf=function(){return this.value};u$1.prototype.toString=function(){return this.value+""};u$1.prototype.toJSON=function(){return this.value};u$1.prototype.peek=function(){var i=o;o=void 0;try{return this.value}finally{o=i;}};Object.defineProperty(u$1.prototype,"value",{get:function(){var i=e$1(this);if(void 0!==i)i.i=this.i;return this.v},set:function(i){if(i!==this.v){if(f>100)throw new Error("Cycle detected");this.v=i;this.i++;v++;s++;try{for(var r=this.t;void 0!==r;r=r.x)r.t.N();}finally{t$1();}}}});function d(i){return new u$1(i)}function c$1(i){for(var t=i.s;void 0!==t;t=t.n)if(t.S.i!==t.i||!t.S.h()||t.S.i!==t.i)return  true;return  false}function a(i){for(var t=i.s;void 0!==t;t=t.n){var r=t.S.n;if(void 0!==r)t.r=r;t.S.n=t;t.i=-1;if(void 0===t.n){i.s=t;break}}}function l(i){var t=i.s,r=void 0;while(void 0!==t){var o=t.p;if(-1===t.i){t.S.U(t);if(void 0!==o)o.n=t.n;if(void 0!==t.n)t.n.p=o;}else r=t;t.S.n=t.r;if(void 0!==t.r)t.r=void 0;t=o;}i.s=r;}function y(i){u$1.call(this,void 0);this.x=i;this.s=void 0;this.g=v-1;this.f=4;}(y.prototype=new u$1).h=function(){this.f&=-3;if(1&this.f)return  false;if(32==(36&this.f))return  true;this.f&=-5;if(this.g===v)return  true;this.g=v;this.f|=1;if(this.i>0&&!c$1(this)){this.f&=-2;return  true}var i=o;try{a(this);o=this;var t=this.x();if(16&this.f||this.v!==t||0===this.i){this.v=t;this.f&=-17;this.i++;}}catch(i){this.v=i;this.f|=16;this.i++;}o=i;l(this);this.f&=-2;return  true};y.prototype.S=function(i){if(void 0===this.t){this.f|=36;for(var t=this.s;void 0!==t;t=t.n)t.S.S(t);}u$1.prototype.S.call(this,i);};y.prototype.U=function(i){if(void 0!==this.t){u$1.prototype.U.call(this,i);if(void 0===this.t){this.f&=-33;for(var t=this.s;void 0!==t;t=t.n)t.S.U(t);}}};y.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var i=this.t;void 0!==i;i=i.x)i.t.N();}};Object.defineProperty(y.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var i=e$1(this);this.h();if(void 0!==i)i.i=this.i;if(16&this.f)throw this.v;return this.v}});function w(i){return new y(i)}function _(i){var r=i.u;i.u=void 0;if("function"==typeof r){s++;var n=o;o=void 0;try{r();}catch(t){i.f&=-2;i.f|=8;g(i);throw t}finally{o=n;t$1();}}}function g(i){for(var t=i.s;void 0!==t;t=t.n)t.S.U(t);i.x=void 0;i.s=void 0;_(i);}function p(i){if(o!==this)throw new Error("Out-of-order effect");l(this);o=i;this.f&=-2;if(8&this.f)g(this);t$1();}function b(i){this.x=i;this.u=void 0;this.s=void 0;this.o=void 0;this.f=32;}b.prototype.c=function(){var i=this.S();try{if(8&this.f)return;if(void 0===this.x)return;var t=this.x();if("function"==typeof t)this.u=t;}finally{i();}};b.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1;this.f&=-9;_(this);a(this);s++;var i=o;o=this;return p.bind(this,i)};b.prototype.N=function(){if(!(2&this.f)){this.f|=2;this.o=h;h=this;}};b.prototype.d=function(){this.f|=8;if(!(1&this.f))g(this);};function E(i){var t=new b(i);try{t.c();}catch(i){t.d();throw i}return t.d.bind(t)}

// src/index.ts
function computed(compute, comparator) {
  if (comparator) {
    let previousValue;
    return w(() => {
      const value = compute();
      if (value && previousValue && comparator(previousValue, value)) {
        return previousValue;
      }
      previousValue = value;
      return value;
    });
  }
  return w(compute);
}

// src/comparators.ts
function deepEqual$1(a, b) {
  if (a === b) {
    return true;
  }
  if (typeof a === "function" && typeof b === "function") {
    return a === b;
  }
  if (a instanceof Set && b instanceof Set) {
    if (a.size !== b.size) {
      return false;
    }
    for (const value of a) {
      if (!b.has(value)) {
        return false;
      }
    }
    return true;
  }
  if (Array.isArray(a)) {
    if (!Array.isArray(b) || a.length !== b.length) {
      return false;
    }
    const hasDifferentValues = a.some(
      (value, index) => !deepEqual$1(value, b[index])
    );
    return !hasDifferentValues;
  }
  try {
    return JSON.stringify(a) === JSON.stringify(b);
  } catch (e) {
    return false;
  }
}
function reactive({ get }, _) {
  return {
    init(value) {
      return d(value);
    },
    get() {
      const current = get.call(this);
      return current.value;
    },
    set(newValue) {
      const current = get.call(this);
      if (current.peek() === newValue) {
        return;
      }
      current.value = newValue;
    }
  };
}
function derived(target, _) {
  const map = /* @__PURE__ */ new WeakMap();
  return function() {
    let result = map.get(this);
    if (!result) {
      result = computed(target.bind(this));
      map.set(this, result);
    }
    return result.value;
  };
}
function effects(...entries) {
  const effects2 = entries.map(E);
  return () => effects2.forEach((cleanup) => cleanup());
}

var __create$3 = Object.create;
var __defProp$6 = Object.defineProperty;
var __getOwnPropDesc$3 = Object.getOwnPropertyDescriptor;
var __getOwnPropSymbols$6 = Object.getOwnPropertySymbols;
var __hasOwnProp$6 = Object.prototype.hasOwnProperty;
var __propIsEnum$6 = Object.prototype.propertyIsEnumerable;
var __knownSymbol$3 = (name, symbol) => (symbol = Symbol[name]) ? symbol : Symbol.for("Symbol." + name);
var __typeError$4 = (msg) => {
  throw TypeError(msg);
};
var __pow = Math.pow;
var __defNormalProp$6 = (obj, key, value) => key in obj ? __defProp$6(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$6 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$6.call(b, prop))
      __defNormalProp$6(a, prop, b[prop]);
  if (__getOwnPropSymbols$6)
    for (var prop of __getOwnPropSymbols$6(b)) {
      if (__propIsEnum$6.call(b, prop))
        __defNormalProp$6(a, prop, b[prop]);
    }
  return a;
};
var __name$2 = (target, value) => __defProp$6(target, "name", { value, configurable: true });
var __decoratorStart$3 = (base) => {
  var _a;
  return [, , , __create$3((_a = void 0 ) != null ? _a : null)];
};
var __decoratorStrings$3 = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"];
var __expectFn$3 = (fn) => fn !== void 0 && typeof fn !== "function" ? __typeError$4("Function expected") : fn;
var __decoratorContext$3 = (kind, name, done, metadata, fns) => ({ kind: __decoratorStrings$3[kind], name, metadata, addInitializer: (fn) => done._ ? __typeError$4("Already initialized") : fns.push(__expectFn$3(fn || null)) });
var __decoratorMetadata$3 = (array, target) => __defNormalProp$6(target, __knownSymbol$3("metadata"), array[3]);
var __runInitializers$3 = (array, flags, self, value) => {
  for (var i = 0, fns = array[flags >> 1], n = fns && fns.length; i < n; i++) flags & 1 ? fns[i].call(self) : value = fns[i].call(self, value);
  return value;
};
var __decorateElement$3 = (array, flags, name, decorators, target, extra) => {
  var fn, it, done, ctx, access, k = flags & 7, s = !!(flags & 8), p = !!(flags & 16);
  var j = k > 3 ? array.length + 1 : k ? s ? 1 : 2 : 0, key = __decoratorStrings$3[k + 5];
  var initializers = k > 3 && (array[j - 1] = []), extraInitializers = array[j] || (array[j] = []);
  var desc = k && (!p && !s && (target = target.prototype), k < 5 && (k > 3 || !p) && __getOwnPropDesc$3(k < 4 ? target : { get [name]() {
    return __privateGet$4(this, extra);
  }, set [name](x) {
    return __privateSet$4(this, extra, x);
  } }, name));
  k ? p && k < 4 && __name$2(extra, (k > 2 ? "set " : k > 1 ? "get " : "") + name) : __name$2(target, name);
  for (var i = decorators.length - 1; i >= 0; i--) {
    ctx = __decoratorContext$3(k, name, done = {}, array[3], extraInitializers);
    if (k) {
      ctx.static = s, ctx.private = p, access = ctx.access = { has: p ? (x) => __privateIn$2(target, x) : (x) => name in x };
      if (k ^ 3) access.get = p ? (x) => (k ^ 1 ? __privateGet$4 : __privateMethod$3)(x, target, k ^ 4 ? extra : desc.get) : (x) => x[name];
      if (k > 2) access.set = p ? (x, y) => __privateSet$4(x, target, y, k ^ 4 ? extra : desc.set) : (x, y) => x[name] = y;
    }
    it = (0, decorators[i])(k ? k < 4 ? p ? extra : desc[key] : k > 4 ? void 0 : { get: desc.get, set: desc.set } : target, ctx), done._ = 1;
    if (k ^ 4 || it === void 0) __expectFn$3(it) && (k > 4 ? initializers.unshift(it) : k ? p ? extra = it : desc[key] = it : target = it);
    else if (typeof it !== "object" || it === null) __typeError$4("Object expected");
    else __expectFn$3(fn = it.get) && (desc.get = fn), __expectFn$3(fn = it.set) && (desc.set = fn), __expectFn$3(fn = it.init) && initializers.unshift(fn);
  }
  return k || __decoratorMetadata$3(array, target), desc && __defProp$6(target, name, desc), p ? k ^ 4 ? extra : desc : target;
};
var __accessCheck$4 = (obj, member, msg) => member.has(obj) || __typeError$4("Cannot " + msg);
var __privateIn$2 = (member, obj) => Object(obj) !== obj ? __typeError$4('Cannot use the "in" operator on this value') : member.has(obj);
var __privateGet$4 = (obj, member, getter) => (__accessCheck$4(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd$4 = (obj, member, value) => member.has(obj) ? __typeError$4("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet$4 = (obj, member, value, setter) => (__accessCheck$4(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod$3 = (obj, member, method) => (__accessCheck$4(obj, member, "access private method"), method);

// src/point/Point.ts
var Point = class _Point {
  /**
   * @param {number} Coordinate of the point on the horizontal axis
   * @param {number} Coordinate of the point on the vertical axis
   */
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  /**
   * Returns the delta between this point and another point.
   *
   * @param {Point} a - A point
   * @param {Point} b - Another point
   */
  static delta(a, b) {
    return new _Point(a.x - b.x, a.y - b.y);
  }
  /**
   * Returns the distance (hypotenuse) between this point and another point.
   *
   * @param {Point} a - A point
   * @param {Point} b - Another point
   */
  static distance(a, b) {
    return Math.hypot(a.x - b.x, a.y - b.y);
  }
  /**
   * Returns true if both points are equal.
   *
   * @param {Point} a - A point
   * @param {Point} b - Another point
   */
  static equals(a, b) {
    return a.x === b.x && a.y === b.y;
  }
  static from({ x, y }) {
    return new _Point(x, y);
  }
};

// src/shapes/Rectangle.ts
var Rectangle = class _Rectangle {
  constructor(left, top, width, height) {
    this.left = left;
    this.top = top;
    this.width = width;
    this.height = height;
    this.scale = {
      x: 1,
      y: 1
    };
  }
  get inverseScale() {
    return {
      x: 1 / this.scale.x,
      y: 1 / this.scale.y
    };
  }
  translate(x, y) {
    const { top, left, width, height, scale } = this;
    const newShape = new _Rectangle(left + x, top + y, width, height);
    newShape.scale = __spreadValues$6({}, scale);
    return newShape;
  }
  get boundingRectangle() {
    const { width, height, left, top, right, bottom } = this;
    return { width, height, left, top, right, bottom };
  }
  get center() {
    const { left, top, right, bottom } = this;
    return new Point((left + right) / 2, (top + bottom) / 2);
  }
  get area() {
    const { width, height } = this;
    return width * height;
  }
  equals(shape) {
    if (!(shape instanceof _Rectangle)) {
      return false;
    }
    const { left, top, width, height } = this;
    return left === shape.left && top === shape.top && width === shape.width && height === shape.height;
  }
  containsPoint(point) {
    const { top, left, bottom, right } = this;
    return top <= point.y && point.y <= bottom && left <= point.x && point.x <= right;
  }
  intersectionArea(shape) {
    if (shape instanceof _Rectangle) {
      return rectangleRectangleIntersection(this, shape);
    }
    return 0;
  }
  intersectionRatio(shape) {
    const { area } = this;
    const intersectionArea = this.intersectionArea(shape);
    const intersectionRatio = intersectionArea / (shape.area + area - intersectionArea);
    return intersectionRatio;
  }
  get bottom() {
    const { top, height } = this;
    return top + height;
  }
  get right() {
    const { left, width } = this;
    return left + width;
  }
  static from({ top, left, width, height }) {
    return new _Rectangle(left, top, width, height);
  }
  static intersectionRatio(a, b) {
    return _Rectangle.from(a).intersectionRatio(_Rectangle.from(b));
  }
};
function rectangleRectangleIntersection(a, b) {
  const top = Math.max(b.top, a.top);
  const left = Math.max(b.left, a.left);
  const right = Math.min(b.left + b.width, a.left + a.width);
  const bottom = Math.min(b.top + b.height, a.top + a.height);
  const width = right - left;
  const height = bottom - top;
  if (left < right && top < bottom) {
    const intersectionArea = width * height;
    return intersectionArea;
  }
  return 0;
}
var SENSITIVITY = 10;
var _direction_dec, _delta_dec, _current_dec, _previous_dec, _initial_dec, _velocity_dec, _timestamp, _init$3, _velocity, _initial, _previous, _current;
_velocity_dec = [reactive], _initial_dec = [reactive], _previous_dec = [reactive], _current_dec = [reactive], _delta_dec = [derived], _direction_dec = [derived];
var Position = class {
  constructor(initialValue) {
    __runInitializers$3(_init$3, 5, this);
    __privateAdd$4(this, _timestamp, 0);
    __privateAdd$4(this, _velocity, __runInitializers$3(_init$3, 8, this, {
      x: 0,
      y: 0
    })), __runInitializers$3(_init$3, 11, this);
    __privateAdd$4(this, _initial, __runInitializers$3(_init$3, 12, this)), __runInitializers$3(_init$3, 15, this);
    __privateAdd$4(this, _previous, __runInitializers$3(_init$3, 16, this)), __runInitializers$3(_init$3, 19, this);
    __privateAdd$4(this, _current, __runInitializers$3(_init$3, 20, this)), __runInitializers$3(_init$3, 23, this);
    const point = Point.from(initialValue);
    this.initial = point;
    this.current = point;
    this.previous = point;
  }
  get delta() {
    return Point.delta(this.current, this.initial);
  }
  get direction() {
    const delta = {
      x: this.current.x - this.previous.x,
      y: this.current.y - this.previous.y
    };
    if (!delta.x && !delta.y) {
      return null;
    }
    if (Math.abs(delta.x) > Math.abs(delta.y)) {
      return delta.x > 0 ? "right" : "left";
    }
    return delta.y > 0 ? "down" : "up";
  }
  reset(coordinates) {
    const point = Point.from(coordinates);
    r$1(() => {
      __privateSet$4(this, _timestamp, 0);
      this.velocity = { x: 0, y: 0 };
      this.current = point;
      this.previous = point;
      this.initial = point;
    });
  }
  update(coordinates) {
    const { current } = this;
    const point = Point.from(coordinates);
    if (Point.equals(current, point)) {
      return;
    }
    const delta = {
      x: point.x - current.x,
      y: point.y - current.y
    };
    const timestamp = Date.now();
    const timeDelta = timestamp - __privateGet$4(this, _timestamp);
    const velocity = (delta2) => Math.round(delta2 / timeDelta * 100);
    if (Math.abs(delta.x) < SENSITIVITY || Math.abs(delta.y) < SENSITIVITY) {
      this.previous = current;
    }
    __privateSet$4(this, _timestamp, timestamp);
    this.velocity = {
      x: velocity(delta.x),
      y: velocity(delta.y)
    };
    this.current = point;
  }
};
_init$3 = __decoratorStart$3();
_timestamp = new WeakMap();
_velocity = new WeakMap();
_initial = new WeakMap();
_previous = new WeakMap();
_current = new WeakMap();
__decorateElement$3(_init$3, 4, "velocity", _velocity_dec, Position, _velocity);
__decorateElement$3(_init$3, 4, "initial", _initial_dec, Position, _initial);
__decorateElement$3(_init$3, 4, "previous", _previous_dec, Position, _previous);
__decorateElement$3(_init$3, 4, "current", _current_dec, Position, _current);
__decorateElement$3(_init$3, 2, "delta", _delta_dec, Position);
__decorateElement$3(_init$3, 2, "direction", _direction_dec, Position);
__decoratorMetadata$3(_init$3, Position);

// src/distance/distance.ts
function exceedsDistance({ x, y }, distance) {
  const dx = Math.abs(x);
  const dy = Math.abs(y);
  if (typeof distance === "number") {
    return Math.sqrt(__pow(dx, 2) + __pow(dy, 2)) > distance;
  }
  if ("x" in distance && "y" in distance) {
    return dx > distance.x && dy > distance.y;
  }
  if ("x" in distance) {
    return dx > distance.x;
  }
  if ("y" in distance) {
    return dy > distance.y;
  }
  return false;
}

// src/types/axis.ts
var Axis = /* @__PURE__ */ ((Axis2) => {
  Axis2["Horizontal"] = "x";
  Axis2["Vertical"] = "y";
  return Axis2;
})(Axis || {});
var Axes = Object.values(Axis);

var __create$2 = Object.create;
var __defProp$5 = Object.defineProperty;
var __defProps$5 = Object.defineProperties;
var __getOwnPropDesc$2 = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs$5 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$5 = Object.getOwnPropertySymbols;
var __hasOwnProp$5 = Object.prototype.hasOwnProperty;
var __propIsEnum$5 = Object.prototype.propertyIsEnumerable;
var __knownSymbol$2 = (name, symbol) => (symbol = Symbol[name]) ? symbol : Symbol.for("Symbol." + name);
var __typeError$3 = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp$5 = (obj, key, value) => key in obj ? __defProp$5(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$5 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$5.call(b, prop))
      __defNormalProp$5(a, prop, b[prop]);
  if (__getOwnPropSymbols$5)
    for (var prop of __getOwnPropSymbols$5(b)) {
      if (__propIsEnum$5.call(b, prop))
        __defNormalProp$5(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$5 = (a, b) => __defProps$5(a, __getOwnPropDescs$5(b));
var __name$1 = (target, value) => __defProp$5(target, "name", { value, configurable: true });
var __objRest$3 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$5.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$5)
    for (var prop of __getOwnPropSymbols$5(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$5.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __decoratorStart$2 = (base) => {
  var _a;
  return [, , , __create$2((_a = base == null ? void 0 : base[__knownSymbol$2("metadata")]) != null ? _a : null)];
};
var __decoratorStrings$2 = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"];
var __expectFn$2 = (fn) => fn !== void 0 && typeof fn !== "function" ? __typeError$3("Function expected") : fn;
var __decoratorContext$2 = (kind, name, done, metadata, fns) => ({ kind: __decoratorStrings$2[kind], name, metadata, addInitializer: (fn) => done._ ? __typeError$3("Already initialized") : fns.push(__expectFn$2(fn || null)) });
var __decoratorMetadata$2 = (array, target) => __defNormalProp$5(target, __knownSymbol$2("metadata"), array[3]);
var __runInitializers$2 = (array, flags, self, value) => {
  for (var i = 0, fns = array[flags >> 1], n = fns && fns.length; i < n; i++) flags & 1 ? fns[i].call(self) : value = fns[i].call(self, value);
  return value;
};
var __decorateElement$2 = (array, flags, name, decorators, target, extra) => {
  var fn, it, done, ctx, access, k = flags & 7, s = !!(flags & 8), p = !!(flags & 16);
  var j = k > 3 ? array.length + 1 : k ? s ? 1 : 2 : 0, key = __decoratorStrings$2[k + 5];
  var initializers = k > 3 && (array[j - 1] = []), extraInitializers = array[j] || (array[j] = []);
  var desc = k && (!p && !s && (target = target.prototype), k < 5 && (k > 3 || !p) && __getOwnPropDesc$2(k < 4 ? target : { get [name]() {
    return __privateGet$3(this, extra);
  }, set [name](x) {
    return __privateSet$3(this, extra, x);
  } }, name));
  k ? p && k < 4 && __name$1(extra, (k > 2 ? "set " : k > 1 ? "get " : "") + name) : __name$1(target, name);
  for (var i = decorators.length - 1; i >= 0; i--) {
    ctx = __decoratorContext$2(k, name, done = {}, array[3], extraInitializers);
    if (k) {
      ctx.static = s, ctx.private = p, access = ctx.access = { has: p ? (x) => __privateIn$1(target, x) : (x) => name in x };
      if (k ^ 3) access.get = p ? (x) => (k ^ 1 ? __privateGet$3 : __privateMethod$2)(x, target, k ^ 4 ? extra : desc.get) : (x) => x[name];
      if (k > 2) access.set = p ? (x, y) => __privateSet$3(x, target, y, k ^ 4 ? extra : desc.set) : (x, y) => x[name] = y;
    }
    it = (0, decorators[i])(k ? k < 4 ? p ? extra : desc[key] : k > 4 ? void 0 : { get: desc.get, set: desc.set } : target, ctx), done._ = 1;
    if (k ^ 4 || it === void 0) __expectFn$2(it) && (k > 4 ? initializers.unshift(it) : k ? p ? extra = it : desc[key] = it : target = it);
    else if (typeof it !== "object" || it === null) __typeError$3("Object expected");
    else __expectFn$2(fn = it.get) && (desc.get = fn), __expectFn$2(fn = it.set) && (desc.set = fn), __expectFn$2(fn = it.init) && initializers.unshift(fn);
  }
  return k || __decoratorMetadata$2(array, target), desc && __defProp$5(target, name, desc), p ? k ^ 4 ? extra : desc : target;
};
var __accessCheck$3 = (obj, member, msg) => member.has(obj) || __typeError$3("Cannot " + msg);
var __privateIn$1 = (member, obj) => Object(obj) !== obj ? __typeError$3('Cannot use the "in" operator on this value') : member.has(obj);
var __privateGet$3 = (obj, member, getter) => (__accessCheck$3(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd$3 = (obj, member, value) => member.has(obj) ? __typeError$3("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet$3 = (obj, member, value, setter) => (__accessCheck$3(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod$2 = (obj, member, method) => (__accessCheck$3(obj, member, "access private method"), method);

// src/core/plugins/utilities.ts
function configure(plugin, options) {
  return {
    plugin,
    options
  };
}
function configurator(plugin) {
  return (options) => {
    return configure(plugin, options);
  };
}
function descriptor(plugin) {
  if (typeof plugin === "function") {
    return {
      plugin,
      options: void 0
    };
  }
  return plugin;
}

// src/core/plugins/plugin.ts
var _disabled_dec, _init$2, _disabled;
_disabled_dec = [reactive];
var Plugin = class {
  constructor(manager, options) {
    this.manager = manager;
    this.options = options;
    __privateAdd$3(this, _disabled, __runInitializers$2(_init$2, 8, this, false)), __runInitializers$2(_init$2, 11, this);
  }
  /**
   * Enable a disabled plugin instance.
   * Triggers effects.
   */
  enable() {
    this.disabled = false;
  }
  /**
   * Disable an enabled plugin instance.
   * Triggers effects.
   */
  disable() {
    this.disabled = true;
  }
  /**
   * Whether the plugin instance is disabled.
   * Does not trigger effects when accessed.
   */
  isDisabled() {
    return n$1(() => {
      return this.disabled;
    });
  }
  /**
   * Configure a plugin instance with new options.
   */
  configure(options) {
    this.options = options;
  }
  /**
   * Destroy a plugin instance.
   */
  destroy() {
  }
  /**
   * Configure a plugin constructor with options.
   * This method is used to configure the options that the
   * plugin constructor will use to create plugin instances.
   */
  static configure(options) {
    return configure(this, options);
  }
};
_init$2 = __decoratorStart$2(null);
_disabled = new WeakMap();
__decorateElement$2(_init$2, 4, "disabled", _disabled_dec, Plugin, _disabled);
__decoratorMetadata$2(_init$2, Plugin);
var CorePlugin = class extends Plugin {
};

// src/core/plugins/registry.ts
var _previousValues;
var PluginRegistry = class {
  constructor(manager) {
    this.manager = manager;
    this.instances = /* @__PURE__ */ new Map();
    __privateAdd$3(this, _previousValues, []);
  }
  get values() {
    return Array.from(this.instances.values());
  }
  set values(entries) {
    const descriptors = entries.map(descriptor).reduceRight((acc, descriptor2) => {
      if (acc.some(({ plugin }) => plugin === descriptor2.plugin)) {
        return acc;
      }
      return [descriptor2, ...acc];
    }, []);
    const constructors = descriptors.map(({ plugin }) => plugin);
    for (const plugin of __privateGet$3(this, _previousValues)) {
      if (!constructors.includes(plugin)) {
        if (plugin.prototype instanceof CorePlugin) {
          continue;
        }
        this.unregister(plugin);
      }
    }
    for (const { plugin, options } of descriptors) {
      this.register(plugin, options);
    }
    __privateSet$3(this, _previousValues, constructors);
  }
  get(plugin) {
    const instance = this.instances.get(plugin);
    return instance;
  }
  register(plugin, options) {
    const existingInstance = this.instances.get(plugin);
    if (existingInstance) {
      if (existingInstance.options !== options) {
        existingInstance.options = options;
      }
      return existingInstance;
    }
    const instance = new plugin(this.manager, options);
    this.instances.set(plugin, instance);
    return instance;
  }
  unregister(plugin) {
    const instance = this.instances.get(plugin);
    if (instance) {
      instance.destroy();
      this.instances.delete(plugin);
    }
  }
  destroy() {
    for (const plugin of this.instances.values()) {
      plugin.destroy();
    }
    this.instances.clear();
  }
};
_previousValues = new WeakMap();

// src/core/collision/utilities.ts
function sortCollisions(a, b) {
  if (a.priority === b.priority) {
    if (a.type === b.type) {
      return b.value - a.value;
    }
    return b.type - a.type;
  }
  return b.priority - a.priority;
}

// src/core/collision/observer.ts
var DEFAULT_VALUE = [];
var _previousCoordinates, _collisions;
var CollisionObserver = class extends Plugin {
  constructor(manager) {
    super(manager);
    __privateAdd$3(this, _previousCoordinates);
    __privateAdd$3(this, _collisions);
    this.computeCollisions = this.computeCollisions.bind(this);
    __privateSet$3(this, _collisions, d(DEFAULT_VALUE));
    this.destroy = effects(
      () => {
        const collisions = this.computeCollisions();
        const coordinates = n$1(
          () => this.manager.dragOperation.position.current
        );
        const previousCoordinates = __privateGet$3(this, _previousCoordinates);
        __privateSet$3(this, _previousCoordinates, coordinates);
        if (previousCoordinates && coordinates.x == previousCoordinates.x && coordinates.y == previousCoordinates.y) {
          return;
        }
        __privateGet$3(this, _collisions).value = collisions;
      },
      () => {
        const { dragOperation } = this.manager;
        if (dragOperation.status.initialized) {
          this.forceUpdate();
        }
      }
    );
  }
  forceUpdate(immediate = true) {
    n$1(() => {
      if (immediate) {
        __privateGet$3(this, _collisions).value = this.computeCollisions();
      } else {
        __privateSet$3(this, _previousCoordinates, void 0);
      }
    });
  }
  computeCollisions(entries, collisionDetector) {
    const { registry, dragOperation } = this.manager;
    const { source, shape, status } = dragOperation;
    if (!status.initialized || !shape) {
      return DEFAULT_VALUE;
    }
    const collisions = [];
    for (const entry of entries != null ? entries : registry.droppables) {
      if (entry.disabled) {
        continue;
      }
      if (source && !entry.accepts(source)) {
        continue;
      }
      const detectCollision = collisionDetector != null ? collisionDetector : entry.collisionDetector;
      if (!detectCollision) {
        continue;
      }
      entry.shape;
      const collision = n$1(
        () => detectCollision({
          droppable: entry,
          dragOperation
        })
      );
      if (collision) {
        if (entry.collisionPriority != null) {
          collision.priority = entry.collisionPriority;
        }
        collisions.push(collision);
      }
    }
    collisions.sort(sortCollisions);
    return collisions;
  }
  get collisions() {
    return __privateGet$3(this, _collisions).value;
  }
};
_previousCoordinates = new WeakMap();
_collisions = new WeakMap();

// src/core/manager/events.ts
var Monitor$1 = class Monitor {
  constructor() {
    this.registry = /* @__PURE__ */ new Map();
  }
  addEventListener(name, handler) {
    const { registry } = this;
    const listeners = new Set(registry.get(name));
    listeners.add(handler);
    registry.set(name, listeners);
    return () => this.removeEventListener(name, handler);
  }
  removeEventListener(name, handler) {
    const { registry } = this;
    const listeners = new Set(registry.get(name));
    listeners.delete(handler);
    registry.set(name, listeners);
  }
  dispatch(name, ...args) {
    const { registry } = this;
    const listeners = registry.get(name);
    if (!listeners) {
      return;
    }
    for (const listener of listeners) {
      listener(...args);
    }
  }
};
var DragDropMonitor = class extends Monitor$1 {
  constructor(manager) {
    super();
    this.manager = manager;
  }
  dispatch(type, event) {
    const args = [event, this.manager];
    super.dispatch(type, ...args);
  }
};
function defaultPreventable(event, cancelable = true) {
  let defaultPrevented = false;
  return __spreadProps$5(__spreadValues$5({}, event), {
    cancelable,
    get defaultPrevented() {
      return defaultPrevented;
    },
    preventDefault() {
      if (!cancelable) {
        return;
      }
      defaultPrevented = true;
    }
  });
}

// src/core/collision/notifier.ts
var CollisionNotifier = class extends CorePlugin {
  constructor(manager) {
    super(manager);
    const isEqual = (a, b) => a.map(({ id }) => id).join("") === b.map(({ id }) => id).join("");
    let previousCollisions = [];
    this.destroy = effects(
      () => {
        const { dragOperation, collisionObserver } = manager;
        if (dragOperation.status.initializing) {
          previousCollisions = [];
          collisionObserver.enable();
        }
      },
      () => {
        const { collisionObserver, monitor } = manager;
        const { collisions } = collisionObserver;
        if (collisionObserver.isDisabled()) {
          return;
        }
        const event = defaultPreventable({
          collisions
        });
        monitor.dispatch("collision", event);
        if (event.defaultPrevented) {
          return;
        }
        if (isEqual(collisions, previousCollisions)) {
          return;
        } else {
          previousCollisions = collisions;
        }
        const [firstCollision] = collisions;
        n$1(() => {
          var _a;
          if ((firstCollision == null ? void 0 : firstCollision.id) !== ((_a = manager.dragOperation.target) == null ? void 0 : _a.id)) {
            collisionObserver.disable();
            manager.actions.setDropTarget(firstCollision == null ? void 0 : firstCollision.id).then(() => {
              collisionObserver.enable();
            });
          }
        });
      }
    );
  }
};

// src/core/collision/types.ts
var CollisionPriority = /* @__PURE__ */ ((CollisionPriority2) => {
  CollisionPriority2[CollisionPriority2["Lowest"] = 0] = "Lowest";
  CollisionPriority2[CollisionPriority2["Low"] = 1] = "Low";
  CollisionPriority2[CollisionPriority2["Normal"] = 2] = "Normal";
  CollisionPriority2[CollisionPriority2["High"] = 3] = "High";
  CollisionPriority2[CollisionPriority2["Highest"] = 4] = "Highest";
  return CollisionPriority2;
})(CollisionPriority || {});
var CollisionType = /* @__PURE__ */ ((CollisionType2) => {
  CollisionType2[CollisionType2["Collision"] = 0] = "Collision";
  CollisionType2[CollisionType2["ShapeIntersection"] = 1] = "ShapeIntersection";
  CollisionType2[CollisionType2["PointerIntersection"] = 2] = "PointerIntersection";
  return CollisionType2;
})(CollisionType || {});
var _disabled_dec2, _data_dec, _id_dec, _manager_dec, _init2$1, _manager, _id, _data, _disabled2;
_manager_dec = [reactive], _id_dec = [reactive], _data_dec = [reactive], _disabled_dec2 = [reactive];
var Entity = class {
  /**
   * Creates a new instance of the `Entity` class.
   *
   * @param input - An object containing the initial properties of the entity.
   * @param manager - The manager that controls the drag and drop operations.
   */
  constructor(input, manager) {
    __privateAdd$3(this, _manager, __runInitializers$2(_init2$1, 8, this)), __runInitializers$2(_init2$1, 11, this);
    __privateAdd$3(this, _id, __runInitializers$2(_init2$1, 12, this)), __runInitializers$2(_init2$1, 15, this);
    __privateAdd$3(this, _data, __runInitializers$2(_init2$1, 16, this)), __runInitializers$2(_init2$1, 19, this);
    __privateAdd$3(this, _disabled2, __runInitializers$2(_init2$1, 20, this)), __runInitializers$2(_init2$1, 23, this);
    const { effects: effects5, id, data = {}, disabled = false } = input;
    let previousId = id;
    this.manager = manager;
    this.id = id;
    this.data = data;
    this.disabled = disabled;
    this.effects = () => {
      var _a;
      return [
        () => {
          const { id: id2, manager: manager2 } = this;
          if (id2 === previousId) {
            return;
          }
          manager2 == null ? void 0 : manager2.registry.register(this);
          return () => manager2 == null ? void 0 : manager2.registry.unregister(this);
        },
        ...(_a = effects5 == null ? void 0 : effects5()) != null ? _a : []
      ];
    };
    this.register = this.register.bind(this);
    this.unregister = this.unregister.bind(this);
    this.destroy = this.destroy.bind(this);
    if (manager) {
      queueMicrotask(() => {
        var _a;
        return (_a = this.manager) == null ? void 0 : _a.registry.register(this);
      });
    }
  }
  /**
   * A method that registers the entity with the manager.
   * @returns CleanupFunction | void
   */
  register() {
    var _a;
    return (_a = this.manager) == null ? void 0 : _a.registry.register(this);
  }
  /**
   * A method that unregisters the entity from the manager.
   * @returns void
   */
  unregister() {
    var _a;
    (_a = this.manager) == null ? void 0 : _a.registry.unregister(this);
  }
  /**
   * A method that cleans up the entity when it is no longer needed.
   * @returns void
   */
  destroy() {
    var _a;
    (_a = this.manager) == null ? void 0 : _a.registry.unregister(this);
  }
};
_init2$1 = __decoratorStart$2(null);
_manager = new WeakMap();
_id = new WeakMap();
_data = new WeakMap();
_disabled2 = new WeakMap();
__decorateElement$2(_init2$1, 4, "manager", _manager_dec, Entity, _manager);
__decorateElement$2(_init2$1, 4, "id", _id_dec, Entity, _id);
__decorateElement$2(_init2$1, 4, "data", _data_dec, Entity, _data);
__decorateElement$2(_init2$1, 4, "disabled", _disabled_dec2, Entity, _disabled2);
__decoratorMetadata$2(_init2$1, Entity);
var EntityRegistry = class {
  constructor() {
    this.map = d(/* @__PURE__ */ new Map());
    this.cleanupFunctions = /* @__PURE__ */ new WeakMap();
    /**
     * Registers a entity in the registry.
     * @param key - The unique identifier of the entity.
     * @param value - The entity to register.
     * @returns A function that unregisters the entity.
     */
    this.register = (key, value) => {
      const current = this.map.peek();
      const currentValue = current.get(key);
      const unregister = () => this.unregister(key, value);
      if (currentValue === value) return unregister;
      if (currentValue) {
        const cleanup2 = this.cleanupFunctions.get(currentValue);
        cleanup2 == null ? void 0 : cleanup2();
        this.cleanupFunctions.delete(currentValue);
      }
      const updatedMap = new Map(current);
      updatedMap.set(key, value);
      this.map.value = updatedMap;
      const cleanup = effects(...value.effects());
      this.cleanupFunctions.set(value, cleanup);
      return unregister;
    };
    /**
     * Unregisters an entity from the registry.
     * @param key - The unique identifier of the entity.
     * @param value - The entity instance to unregister.
     */
    this.unregister = (key, value) => {
      const current = this.map.peek();
      if (current.get(key) !== value) {
        return;
      }
      const cleanup = this.cleanupFunctions.get(value);
      cleanup == null ? void 0 : cleanup();
      this.cleanupFunctions.delete(value);
      const updatedMap = new Map(current);
      updatedMap.delete(key);
      this.map.value = updatedMap;
    };
  }
  /**
   * Iterator for the EntityRegistry class.
   * @returns An iterator for the values in the map.
   */
  [Symbol.iterator]() {
    return this.map.peek().values();
  }
  get value() {
    return this.map.value.values();
  }
  /**
   * Checks if a entity with the given identifier exists in the registry.
   * @param identifier - The unique identifier of the entity.
   * @returns True if the entity exists, false otherwise.
   */
  has(identifier) {
    return this.map.value.has(identifier);
  }
  /**
   * Retrieves a entity from the registry using its identifier.
   * @param identifier - The unique identifier of the entity.
   * @returns The entity if it exists, undefined otherwise.
   */
  get(identifier) {
    return this.map.value.get(identifier);
  }
  /**
   * Destroys all entries in the registry and clears the registry.
   */
  destroy() {
    for (const entry of this) {
      const cleanup = this.cleanupFunctions.get(entry);
      cleanup == null ? void 0 : cleanup();
      entry.destroy();
    }
    this.map.value = /* @__PURE__ */ new Map();
  }
};
var _isDragSource_dec, _status_dec, _type_dec, _modifiers_dec, _c$1, _init3$1, _modifiers, _type, _status;
var Draggable$1 = class Draggable extends (_c$1 = Entity, _modifiers_dec = [reactive], _type_dec = [reactive], _status_dec = [reactive], _isDragSource_dec = [derived], _c$1) {
  constructor(_a, manager) {
    var _b = _a, { modifiers, type, sensors } = _b, input = __objRest$3(_b, ["modifiers", "type", "sensors"]);
    super(input, manager);
    __runInitializers$2(_init3$1, 5, this);
    __privateAdd$3(this, _modifiers, __runInitializers$2(_init3$1, 8, this)), __runInitializers$2(_init3$1, 11, this);
    __privateAdd$3(this, _type, __runInitializers$2(_init3$1, 12, this)), __runInitializers$2(_init3$1, 15, this);
    __privateAdd$3(this, _status, __runInitializers$2(_init3$1, 16, this, "idle")), __runInitializers$2(_init3$1, 19, this);
    this.type = type;
    this.sensors = sensors;
    this.modifiers = modifiers;
  }
  get isDragSource() {
    var _a, _b;
    return ((_b = (_a = this.manager) == null ? void 0 : _a.dragOperation.source) == null ? void 0 : _b.id) === this.id;
  }
};
_init3$1 = __decoratorStart$2(_c$1);
_modifiers = new WeakMap();
_type = new WeakMap();
_status = new WeakMap();
__decorateElement$2(_init3$1, 4, "modifiers", _modifiers_dec, Draggable$1, _modifiers);
__decorateElement$2(_init3$1, 4, "type", _type_dec, Draggable$1, _type);
__decorateElement$2(_init3$1, 4, "status", _status_dec, Draggable$1, _status);
__decorateElement$2(_init3$1, 2, "isDragSource", _isDragSource_dec, Draggable$1);
__decoratorMetadata$2(_init3$1, Draggable$1);
var _isDropTarget_dec, _shape_dec, _collisionPriority_dec, _collisionDetector_dec, _type_dec2, _accept_dec, _c2$1, _init4$1, _accept, _type2, _collisionDetector, _collisionPriority, _shape;
var Droppable$1 = class Droppable extends (_c2$1 = Entity, _accept_dec = [reactive], _type_dec2 = [reactive], _collisionDetector_dec = [reactive], _collisionPriority_dec = [reactive], _shape_dec = [reactive], _isDropTarget_dec = [derived], _c2$1) {
  constructor(_a, manager) {
    var _b = _a, { accept, collisionDetector, collisionPriority, type } = _b, input = __objRest$3(_b, ["accept", "collisionDetector", "collisionPriority", "type"]);
    super(input, manager);
    __runInitializers$2(_init4$1, 5, this);
    __privateAdd$3(this, _accept, __runInitializers$2(_init4$1, 8, this)), __runInitializers$2(_init4$1, 11, this);
    __privateAdd$3(this, _type2, __runInitializers$2(_init4$1, 12, this)), __runInitializers$2(_init4$1, 15, this);
    __privateAdd$3(this, _collisionDetector, __runInitializers$2(_init4$1, 16, this)), __runInitializers$2(_init4$1, 19, this);
    __privateAdd$3(this, _collisionPriority, __runInitializers$2(_init4$1, 20, this)), __runInitializers$2(_init4$1, 23, this);
    __privateAdd$3(this, _shape, __runInitializers$2(_init4$1, 24, this)), __runInitializers$2(_init4$1, 27, this);
    this.accept = accept;
    this.collisionDetector = collisionDetector;
    this.collisionPriority = collisionPriority;
    this.type = type;
  }
  /**
   * Checks whether or not the droppable accepts a given draggable.
   *
   * @param {Draggable} draggable
   * @returns {boolean}
   */
  accepts(draggable) {
    const { accept } = this;
    if (!accept) {
      return true;
    }
    if (typeof accept === "function") {
      return accept(draggable);
    }
    if (!draggable.type) {
      return false;
    }
    if (Array.isArray(accept)) {
      return accept.includes(draggable.type);
    }
    return draggable.type === accept;
  }
  get isDropTarget() {
    var _a, _b;
    return ((_b = (_a = this.manager) == null ? void 0 : _a.dragOperation.target) == null ? void 0 : _b.id) === this.id;
  }
};
_init4$1 = __decoratorStart$2(_c2$1);
_accept = new WeakMap();
_type2 = new WeakMap();
_collisionDetector = new WeakMap();
_collisionPriority = new WeakMap();
_shape = new WeakMap();
__decorateElement$2(_init4$1, 4, "accept", _accept_dec, Droppable$1, _accept);
__decorateElement$2(_init4$1, 4, "type", _type_dec2, Droppable$1, _type2);
__decorateElement$2(_init4$1, 4, "collisionDetector", _collisionDetector_dec, Droppable$1, _collisionDetector);
__decorateElement$2(_init4$1, 4, "collisionPriority", _collisionPriority_dec, Droppable$1, _collisionPriority);
__decorateElement$2(_init4$1, 4, "shape", _shape_dec, Droppable$1, _shape);
__decorateElement$2(_init4$1, 2, "isDropTarget", _isDropTarget_dec, Droppable$1);
__decoratorMetadata$2(_init4$1, Droppable$1);

// src/core/sensors/sensor.ts
var Sensor = class extends Plugin {
  constructor(manager, options) {
    super(manager, options);
    this.manager = manager;
    this.options = options;
  }
};

// src/core/modifiers/modifier.ts
var Modifier = class extends Plugin {
  constructor(manager, options) {
    super(manager, options);
    this.manager = manager;
    this.options = options;
  }
  apply(operation) {
    return operation.transform;
  }
};

// src/core/manager/registry.ts
var DragDropRegistry = class {
  constructor(manager) {
    this.draggables = new EntityRegistry();
    this.droppables = new EntityRegistry();
    this.plugins = new PluginRegistry(manager);
    this.sensors = new PluginRegistry(manager);
    this.modifiers = new PluginRegistry(manager);
  }
  register(input, options) {
    if (input instanceof Draggable$1) {
      return this.draggables.register(input.id, input);
    }
    if (input instanceof Droppable$1) {
      return this.droppables.register(input.id, input);
    }
    if (input.prototype instanceof Modifier) {
      return this.modifiers.register(input, options);
    }
    if (input.prototype instanceof Sensor) {
      return this.sensors.register(input, options);
    }
    if (input.prototype instanceof Plugin) {
      return this.plugins.register(input, options);
    }
    throw new Error("Invalid instance type");
  }
  unregister(input) {
    if (input instanceof Entity) {
      if (input instanceof Draggable$1) {
        return this.draggables.unregister(input.id, input);
      }
      if (input instanceof Droppable$1) {
        return this.droppables.unregister(input.id, input);
      }
      return () => {
      };
    }
    if (input.prototype instanceof Modifier) {
      return this.modifiers.unregister(input);
    }
    if (input.prototype instanceof Sensor) {
      return this.sensors.unregister(input);
    }
    if (input.prototype instanceof Plugin) {
      return this.plugins.unregister(input);
    }
    throw new Error("Invalid instance type");
  }
  destroy() {
    this.draggables.destroy();
    this.droppables.destroy();
    this.plugins.destroy();
    this.sensors.destroy();
    this.modifiers.destroy();
  }
};
function DragOperationManager(manager) {
  const {
    registry: { draggables, droppables },
    monitor
  } = manager;
  const status = d("idle" /* Idle */);
  const shape = {
    initial: d(null),
    current: d(null)
  };
  const canceled = d(false);
  const position = new Position({ x: 0, y: 0 });
  const activatorEvent = d(null);
  const sourceIdentifier = d(null);
  const targetIdentifier = d(null);
  const dragging = computed(() => status.value === "dragging" /* Dragging */);
  const initialized = computed(() => status.value !== "idle" /* Idle */);
  const initializing = computed(() => status.value === "initializing" /* Initializing */);
  const idle = computed(() => status.value === "idle" /* Idle */);
  const dropped = computed(() => status.value === "dropped" /* Dropped */);
  const dragended = d(true);
  let previousSource;
  const source = computed(() => {
    var _a;
    const identifier = sourceIdentifier.value;
    if (identifier == null) return null;
    const value = draggables.get(identifier);
    if (value) {
      previousSource = value;
    }
    return (_a = value != null ? value : previousSource) != null ? _a : null;
  });
  const target = computed(() => {
    var _a;
    const identifier = targetIdentifier.value;
    return identifier != null ? (_a = droppables.get(identifier)) != null ? _a : null : null;
  });
  const modifiers = d([]);
  const dispose = E(() => {
    var _a, _b, _c3;
    const currentModifiers = modifiers.peek();
    if (!deepEqual$1(currentModifiers, manager.modifiers)) {
      currentModifiers.forEach((modifier) => modifier.destroy());
    }
    modifiers.value = (_c3 = (_b = (_a = source.value) == null ? void 0 : _a.modifiers) == null ? void 0 : _b.map((modifier) => {
      const { plugin, options } = descriptor(modifier);
      return new plugin(manager, options);
    })) != null ? _c3 : manager.modifiers;
  });
  const transform = computed(() => {
    const { x, y } = position.delta;
    let transform2 = { x, y };
    const initialShape = shape.initial.peek();
    const currentShape = shape.current.peek();
    const operation2 = {
      activatorEvent: activatorEvent.peek(),
      canceled: canceled.peek(),
      source: source.peek(),
      target: target.peek(),
      status: {
        current: status.peek(),
        idle: idle.peek(),
        initializing: initializing.peek(),
        initialized: initialized.peek(),
        dragging: dragging.peek(),
        dragended: dragended.peek(),
        dropped: dropped.peek()
      },
      shape: initialShape && currentShape ? { initial: initialShape, current: currentShape } : null,
      position
    };
    for (const modifier of modifiers.value) {
      transform2 = modifier.apply(__spreadProps$5(__spreadValues$5({}, operation2), { transform: transform2 }));
    }
    return transform2;
  });
  const operation = {
    get activatorEvent() {
      return activatorEvent.value;
    },
    get canceled() {
      return canceled.value;
    },
    get source() {
      return source.value;
    },
    get target() {
      return target.value;
    },
    status: {
      get current() {
        return status.value;
      },
      get idle() {
        return idle.value;
      },
      get initializing() {
        return initializing.value;
      },
      get initialized() {
        return initialized.value;
      },
      get dragging() {
        return dragging.value;
      },
      get dragended() {
        return dragended.value;
      },
      get dropped() {
        return dropped.value;
      }
    },
    get shape() {
      const initial = shape.initial.value;
      const current = shape.current.value;
      return initial && current ? { initial, current } : null;
    },
    set shape(value) {
      var _a;
      if (value && ((_a = shape.current.peek()) == null ? void 0 : _a.equals(value))) {
        return;
      }
      const initial = shape.initial.peek();
      if (!initial) {
        shape.initial.value = value;
      }
      shape.current.value = value;
    },
    get transform() {
      return transform.value;
    },
    position
  };
  const reset = () => {
    r$1(() => {
      status.value = "idle" /* Idle */;
      sourceIdentifier.value = null;
      targetIdentifier.value = null;
      shape.current.value = null;
      shape.initial.value = null;
      position.reset({ x: 0, y: 0 });
      modifiers.value = [];
    });
  };
  const actions = {
    setDragSource(identifier) {
      sourceIdentifier.value = identifier;
    },
    setDropTarget(identifier) {
      const id = identifier != null ? identifier : null;
      if (targetIdentifier.peek() === id) {
        return Promise.resolve(false);
      }
      targetIdentifier.value = id;
      const event = defaultPreventable({
        operation: snapshot(operation)
      });
      if (status.peek() === "dragging" /* Dragging */) {
        monitor.dispatch("dragover", event);
      }
      return manager.renderer.rendering.then(() => event.defaultPrevented);
    },
    start({ event, coordinates }) {
      const sourceInstance = source.peek();
      if (!sourceInstance) {
        throw new Error("Cannot start a drag operation without a drag source");
      }
      r$1(() => {
        shape.initial.value = null;
        shape.current.value = null;
        dragended.value = false;
        canceled.value = false;
        activatorEvent.value = event;
        position.reset(coordinates);
      });
      const beforeStartEvent = defaultPreventable({
        operation: snapshot(operation)
      });
      monitor.dispatch("beforedragstart", beforeStartEvent);
      manager.renderer.rendering.then(() => {
        if (beforeStartEvent.defaultPrevented) {
          reset();
          return;
        }
        status.value = "initializing" /* Initializing */;
        requestAnimationFrame(() => {
          status.value = "dragging" /* Dragging */;
          monitor.dispatch("dragstart", {
            operation: snapshot(operation),
            cancelable: false
          });
        });
      });
    },
    move({
      by,
      to,
      cancelable = true
    }) {
      if (!dragging.peek()) {
        return;
      }
      const event = defaultPreventable(
        {
          operation: snapshot(operation),
          by,
          to
        },
        cancelable
      );
      monitor.dispatch("dragmove", event);
      queueMicrotask(() => {
        if (event.defaultPrevented) {
          return;
        }
        const coordinates = to != null ? to : {
          x: position.current.x + by.x,
          y: position.current.y + by.y
        };
        position.update(coordinates);
      });
    },
    stop({ canceled: eventCanceled = false } = {}) {
      let promise;
      const suspend = () => {
        const output = {
          resume: () => {
          },
          abort: () => {
          }
        };
        promise = new Promise((resolve, reject) => {
          output.resume = resolve;
          output.abort = reject;
        });
        return output;
      };
      const end = () => {
        manager.renderer.rendering.then(() => {
          status.value = "dropped" /* Dropped */;
          manager.renderer.rendering.then(reset);
        });
      };
      r$1(() => {
        dragended.value = true;
        canceled.value = eventCanceled;
      });
      monitor.dispatch("dragend", {
        operation: snapshot(operation),
        canceled: eventCanceled,
        suspend
      });
      if (promise) {
        promise.then(end).catch(reset);
      } else {
        end();
      }
    }
  };
  return {
    operation,
    actions,
    cleanup() {
      if (status.peek() !== "idle" /* Idle */) {
        actions.stop({ canceled: true });
      }
      modifiers.value.forEach((modifier) => modifier.destroy());
      dispose();
    }
  };
}
function snapshot(obj) {
  return __spreadValues$5({}, obj);
}

// src/core/manager/renderer.ts
var defaultRenderer = {
  get rendering() {
    return Promise.resolve();
  }
};

// src/core/manager/manager.ts
var DragDropManager$1 = class DragDropManager {
  constructor(config) {
    this.destroy = () => {
      this.registry.destroy();
      this.collisionObserver.destroy();
    };
    const {
      plugins = [],
      sensors = [],
      modifiers = [],
      renderer = defaultRenderer
    } = config != null ? config : {};
    const monitor = new DragDropMonitor(this);
    const registry = new DragDropRegistry(this);
    this.registry = registry;
    this.monitor = monitor;
    this.renderer = renderer;
    const { actions, operation, cleanup } = DragOperationManager(this);
    this.actions = actions;
    this.dragOperation = operation;
    this.collisionObserver = new CollisionObserver(this);
    this.plugins = [CollisionNotifier, ...plugins];
    this.modifiers = modifiers;
    this.sensors = sensors;
    const { destroy } = this;
    this.destroy = () => {
      cleanup();
      destroy();
    };
  }
  get plugins() {
    return this.registry.plugins.values;
  }
  set plugins(plugins) {
    this.registry.plugins.values = plugins;
  }
  get modifiers() {
    return this.registry.modifiers.values;
  }
  set modifiers(modifiers) {
    this.registry.modifiers.values = modifiers;
  }
  get sensors() {
    return this.registry.sensors.values;
  }
  set sensors(sensors) {
    this.registry.sensors.values = sensors;
  }
};

var __typeError$2 = (msg) => {
  throw TypeError(msg);
};
var __accessCheck$2 = (obj, member, msg) => member.has(obj) || __typeError$2("Cannot " + msg);
var __privateGet$2 = (obj, member, getter) => (__accessCheck$2(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd$2 = (obj, member, value) => member.has(obj) ? __typeError$2("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet$2 = (obj, member, value, setter) => (__accessCheck$2(obj, member, "write to private field"), member.set(obj, value), value);
var __privateMethod$1 = (obj, member, method) => (__accessCheck$2(obj, member, "access private method"), method);

// src/utilities/bounding-rectangle/getBoundingRectangle.ts
function getBoundingRectangle(element) {
  const { width, height, top, left, bottom, right } = element.getBoundingClientRect();
  return { width, height, top, left, bottom, right };
}

// src/utilities/execution-context/canUseDOM.ts
var canUseDOM$1 = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";

// src/utilities/type-guards/isWindow.ts
function isWindow(element) {
  const elementString = Object.prototype.toString.call(element);
  return elementString === "[object Window]" || // In Electron context the Window object serializes to [object global]
  elementString === "[object global]";
}

// src/utilities/type-guards/isNode.ts
function isNode(node) {
  return "nodeType" in node;
}

// src/utilities/execution-context/getWindow.ts
function getWindow(target) {
  var _a, _b, _c;
  if (!target) {
    return window;
  }
  if (isWindow(target)) {
    return target;
  }
  if (!isNode(target)) {
    return window;
  }
  if ("defaultView" in target) {
    return (_a = target.defaultView) != null ? _a : window;
  }
  return (_c = (_b = target.ownerDocument) == null ? void 0 : _b.defaultView) != null ? _c : window;
}

// src/utilities/type-guards/isDocument.ts
function isDocument(node) {
  const { Document } = getWindow(node);
  return node instanceof Document;
}

// src/utilities/type-guards/isHTMLElement.ts
function isHTMLElement(node) {
  if (!node || isWindow(node)) return false;
  return node instanceof getWindow(node).HTMLElement;
}

// src/utilities/execution-context/getDocument.ts
function getDocument(target) {
  if (!target) {
    return document;
  }
  if (isWindow(target)) {
    return target.document;
  }
  if (!isNode(target)) {
    return document;
  }
  if (isDocument(target)) {
    return target;
  }
  if (isHTMLElement(target)) {
    return target.ownerDocument;
  }
  return document;
}

// src/utilities/bounding-rectangle/getViewportBoundingRectangle.ts
function getViewportBoundingRectangle(element) {
  const { documentElement } = getDocument(element);
  const width = documentElement.clientWidth;
  const height = documentElement.clientHeight;
  return {
    top: 0,
    left: 0,
    right: width,
    bottom: height,
    width,
    height
  };
}

// src/utilities/scheduling/timeout.ts
function timeout(callback, duration) {
  const id = setTimeout(callback, duration);
  return () => clearTimeout(id);
}

// src/utilities/scheduling/throttle.ts
function throttle$1(func, limit) {
  const time = () => performance.now();
  let cancel;
  let lastRan;
  return function(...args) {
    const context = this;
    if (!lastRan) {
      func.apply(context, args);
      lastRan = time();
    } else {
      cancel == null ? void 0 : cancel();
      cancel = timeout(
        () => {
          func.apply(context, args);
          lastRan = time();
        },
        limit - (time() - lastRan)
      );
    }
  };
}

// src/utilities/bounding-rectangle/isRectEqual.ts
function isRectEqual(a, b) {
  if (a === b) return true;
  if (!a || !b) return false;
  return a.top == b.top && a.left == b.left && a.right == b.right && a.bottom == b.bottom;
}

// src/utilities/bounding-rectangle/isOverflowVisible.ts
function isOverflowVisible(element, style) {
  if (element instanceof getWindow(element).HTMLDetailsElement && element.open === false) {
    return false;
  }
  const { overflow, overflowX, overflowY } = getComputedStyle(element);
  return overflow === "visible" && overflowX === "visible" && overflowY === "visible";
}

// src/utilities/bounding-rectangle/getVisibleBoundingRectangle.ts
function getVisibleBoundingRectangle(element, boundingClientRect = element.getBoundingClientRect(), margin = 0) {
  var _a;
  let rect = boundingClientRect;
  const { ownerDocument } = element;
  const ownerWindow = (_a = ownerDocument.defaultView) != null ? _a : window;
  let ancestor = element.parentElement;
  while (ancestor && ancestor !== ownerDocument.documentElement) {
    if (!isOverflowVisible(ancestor)) {
      const ancestorRect = ancestor.getBoundingClientRect();
      const marginTop = margin * (ancestorRect.bottom - ancestorRect.top);
      const marginRight = margin * (ancestorRect.right - ancestorRect.left);
      const marginBottom = margin * (ancestorRect.bottom - ancestorRect.top);
      const marginLeft = margin * (ancestorRect.right - ancestorRect.left);
      rect = {
        top: Math.max(rect.top, ancestorRect.top - marginTop),
        right: Math.min(rect.right, ancestorRect.right + marginRight),
        bottom: Math.min(rect.bottom, ancestorRect.bottom + marginBottom),
        left: Math.max(rect.left, ancestorRect.left - marginLeft),
        width: 0,
        // Will be calculated next
        height: 0
        // Will be calculated next
      };
      rect.width = rect.right - rect.left;
      rect.height = rect.bottom - rect.top;
    }
    ancestor = ancestor.parentElement;
  }
  const viewportWidth = ownerWindow.innerWidth;
  const viewportHeight = ownerWindow.innerHeight;
  const viewportMarginY = margin * viewportHeight;
  const viewportMarginX = margin * viewportWidth;
  rect = {
    top: Math.max(rect.top, 0 - viewportMarginY),
    right: Math.min(rect.right, viewportWidth + viewportMarginX),
    bottom: Math.min(rect.bottom, viewportHeight + viewportMarginY),
    left: Math.max(rect.left, 0 - viewportMarginX),
    width: 0,
    // Will be calculated next
    height: 0
    // Will be calculated next
  };
  rect.width = rect.right - rect.left;
  rect.height = rect.bottom - rect.top;
  if (rect.width < 0) {
    rect.width = 0;
  }
  if (rect.height < 0) {
    rect.height = 0;
  }
  return rect;
}

// src/utilities/bounding-rectangle/isVisible.ts
function isVisible(element, boundingClientRect = element.getBoundingClientRect()) {
  const { width, height } = getVisibleBoundingRectangle(
    element,
    boundingClientRect
  );
  return width > 0 && height > 0;
}

// src/utilities/bounding-rectangle/PositionObserver.ts
var threshold = Array.from({ length: 100 }, (_, index) => index / 100);
var THROTTLE_INTERVAL = 75;
var _callback, _visible, _previousBoundingClientRect, _resizeObserver, _positionObserver, _visibilityObserver, _debug, _disconnected, _observePosition, _PositionObserver_instances, notify_fn, updateDebug_fn;
var PositionObserver = class {
  constructor(element, callback, options = { debug: false }) {
    this.element = element;
    __privateAdd$2(this, _PositionObserver_instances);
    __privateAdd$2(this, _callback);
    __privateAdd$2(this, _visible, true);
    __privateAdd$2(this, _previousBoundingClientRect);
    __privateAdd$2(this, _resizeObserver);
    __privateAdd$2(this, _positionObserver);
    __privateAdd$2(this, _visibilityObserver);
    __privateAdd$2(this, _debug);
    __privateAdd$2(this, _disconnected, false);
    __privateAdd$2(this, _observePosition, throttle$1(() => {
      var _a, _b, _c;
      const { element } = this;
      (_a = __privateGet$2(this, _positionObserver)) == null ? void 0 : _a.disconnect();
      if (__privateGet$2(this, _disconnected) || !__privateGet$2(this, _visible) || !element.isConnected) {
        return;
      }
      const root = (_b = element.ownerDocument) != null ? _b : document;
      const { innerHeight, innerWidth } = (_c = root.defaultView) != null ? _c : window;
      const clientRect = element.getBoundingClientRect();
      const visibleRect = getVisibleBoundingRectangle(element, clientRect);
      const { top, left, bottom, right } = visibleRect;
      const insetTop = -Math.floor(top);
      const insetLeft = -Math.floor(left);
      const insetRight = -Math.floor(innerWidth - right);
      const insetBottom = -Math.floor(innerHeight - bottom);
      const rootMargin = `${insetTop}px ${insetRight}px ${insetBottom}px ${insetLeft}px`;
      this.boundingClientRect = clientRect;
      __privateSet$2(this, _positionObserver, new IntersectionObserver(
        (entries) => {
          const [entry] = entries;
          const { intersectionRect } = entry;
          const intersectionRatio = Rectangle.intersectionRatio(
            intersectionRect,
            visibleRect
          );
          if (intersectionRatio !== 1) {
            __privateGet$2(this, _observePosition).call(this);
          }
        },
        {
          threshold,
          rootMargin,
          root
        }
      ));
      __privateGet$2(this, _positionObserver).observe(element);
      __privateMethod$1(this, _PositionObserver_instances, notify_fn).call(this);
    }, THROTTLE_INTERVAL));
    __privateSet$2(this, _callback, callback);
    this.boundingClientRect = element.getBoundingClientRect();
    __privateSet$2(this, _visible, isVisible(element, this.boundingClientRect));
    const root = element.ownerDocument;
    if (options == null ? void 0 : options.debug) {
      __privateSet$2(this, _debug, document.createElement("div"));
      __privateGet$2(this, _debug).style.background = "rgba(0,0,0,0.15)";
      __privateGet$2(this, _debug).style.position = "fixed";
      __privateGet$2(this, _debug).style.pointerEvents = "none";
      root.body.appendChild(__privateGet$2(this, _debug));
    }
    __privateSet$2(this, _visibilityObserver, new IntersectionObserver(
      (entries) => {
        var _a, _b;
        const entry = entries[entries.length - 1];
        const { boundingClientRect, isIntersecting: visible } = entry;
        const { width, height } = boundingClientRect;
        const previousVisible = __privateGet$2(this, _visible);
        __privateSet$2(this, _visible, visible);
        if (!width && !height) return;
        if (previousVisible && !visible) {
          (_a = __privateGet$2(this, _positionObserver)) == null ? void 0 : _a.disconnect();
          __privateGet$2(this, _callback).call(this, null);
          (_b = __privateGet$2(this, _resizeObserver)) == null ? void 0 : _b.disconnect();
          __privateSet$2(this, _resizeObserver, void 0);
          if (__privateGet$2(this, _debug)) __privateGet$2(this, _debug).style.visibility = "hidden";
        } else {
          __privateGet$2(this, _observePosition).call(this);
        }
        if (visible && !__privateGet$2(this, _resizeObserver)) {
          __privateSet$2(this, _resizeObserver, new ResizeObserver(__privateGet$2(this, _observePosition)));
          __privateGet$2(this, _resizeObserver).observe(element);
        }
      },
      {
        threshold,
        root
      }
    ));
    if (__privateGet$2(this, _visible)) {
      __privateGet$2(this, _callback).call(this, this.boundingClientRect);
    }
    __privateGet$2(this, _visibilityObserver).observe(element);
  }
  disconnect() {
    var _a, _b, _c;
    __privateSet$2(this, _disconnected, true);
    (_a = __privateGet$2(this, _resizeObserver)) == null ? void 0 : _a.disconnect();
    (_b = __privateGet$2(this, _positionObserver)) == null ? void 0 : _b.disconnect();
    __privateGet$2(this, _visibilityObserver).disconnect();
    (_c = __privateGet$2(this, _debug)) == null ? void 0 : _c.remove();
  }
};
_callback = new WeakMap();
_visible = new WeakMap();
_previousBoundingClientRect = new WeakMap();
_resizeObserver = new WeakMap();
_positionObserver = new WeakMap();
_visibilityObserver = new WeakMap();
_debug = new WeakMap();
_disconnected = new WeakMap();
_observePosition = new WeakMap();
_PositionObserver_instances = new WeakSet();
notify_fn = function() {
  if (__privateGet$2(this, _disconnected)) return;
  __privateMethod$1(this, _PositionObserver_instances, updateDebug_fn).call(this);
  if (isRectEqual(this.boundingClientRect, __privateGet$2(this, _previousBoundingClientRect)))
    return;
  __privateGet$2(this, _callback).call(this, this.boundingClientRect);
  __privateSet$2(this, _previousBoundingClientRect, this.boundingClientRect);
};
updateDebug_fn = function() {
  if (__privateGet$2(this, _debug)) {
    const { top, left, width, height } = getVisibleBoundingRectangle(
      this.element
    );
    __privateGet$2(this, _debug).style.overflow = "hidden";
    __privateGet$2(this, _debug).style.visibility = "visible";
    __privateGet$2(this, _debug).style.top = `${Math.floor(top)}px`;
    __privateGet$2(this, _debug).style.left = `${Math.floor(left)}px`;
    __privateGet$2(this, _debug).style.width = `${Math.floor(width)}px`;
    __privateGet$2(this, _debug).style.height = `${Math.floor(height)}px`;
  }
};

// src/utilities/execution-context/isSafari.ts
function isSafari() {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}

// src/utilities/element/cloneElement.ts
function cloneElement(element) {
  const window2 = getWindow(element);
  const selector = "input, textarea, select, canvas, [contenteditable]";
  const clonedElement = element.cloneNode(true);
  const fields = Array.from(element.querySelectorAll(selector));
  const clonedFields = Array.from(clonedElement.querySelectorAll(selector));
  clonedFields.forEach((field, index) => {
    const originalField = fields[index];
    if (isField(field) && isField(originalField)) {
      if (field.type !== "file") {
        field.value = originalField.value;
      }
      if (field.type === "radio" && field.name) {
        field.name = `Cloned__${field.name}`;
      }
    }
    if (field instanceof window2.HTMLCanvasElement && originalField instanceof window2.HTMLCanvasElement && originalField.width > 0 && originalField.height > 0) {
      const destCtx = field.getContext("2d");
      destCtx == null ? void 0 : destCtx.drawImage(originalField, 0, 0);
    }
  });
  return clonedElement;
}
function isField(element) {
  return "value" in element;
}

// src/utilities/element/getElementFromPoint.ts
function getElementFromPoint(document2, { x, y }) {
  const element = document2.elementFromPoint(x, y);
  if (element instanceof HTMLIFrameElement) {
    const { contentDocument } = element;
    if (contentDocument) {
      const { left, top } = element.getBoundingClientRect();
      return getElementFromPoint(contentDocument, {
        x: x - left,
        y: y - top
      });
    }
  }
  return element;
}

// src/utilities/element/proxiedElements.ts
var ProxiedElements = /* @__PURE__ */ new WeakMap();

// src/utilities/event-listeners/Listeners.ts
var Listeners = class {
  constructor() {
    this.entries = /* @__PURE__ */ new Set();
    this.clear = () => {
      for (const entry of this.entries) {
        const [target, { type, listener, options }] = entry;
        target.removeEventListener(type, listener, options);
      }
      this.entries.clear();
    };
  }
  bind(target, input) {
    const listeners = Array.isArray(input) ? input : [input];
    const entries = [];
    for (const descriptor of listeners) {
      const { type, listener, options } = descriptor;
      const entry = [target, descriptor];
      target.addEventListener(type, listener, options);
      this.entries.add(entry);
      entries.push(entry);
    }
    return function cleanup() {
      for (const [target2, { type, listener, options }] of entries) {
        target2.removeEventListener(type, listener, options);
      }
    };
  }
};

// src/utilities/popover/supportsPopover.ts
function supportsPopover(element) {
  return "showPopover" in element && "hidePopover" in element && typeof element.showPopover === "function" && typeof element.hidePopover === "function";
}

// src/utilities/popover/showPopover.ts
function showPopover(element) {
  if (supportsPopover(element) && element.isConnected && element.hasAttribute("popover")) {
    element.showPopover();
  }
}

// src/utilities/scroll/documentScrollingElement.ts
function isDocumentScrollingElement(element) {
  if (!canUseDOM$1 || !element) {
    return false;
  }
  return element === getDocument(element).scrollingElement;
}

// src/utilities/scroll/getScrollPosition.ts
function getScrollPosition(scrollableElement) {
  const window2 = getWindow(scrollableElement);
  const rect = isDocumentScrollingElement(scrollableElement) ? getViewportBoundingRectangle(scrollableElement) : getBoundingRectangle(scrollableElement);
  const dimensions = isDocumentScrollingElement(scrollableElement) ? {
    height: window2.innerHeight,
    width: window2.innerWidth
  } : {
    height: scrollableElement.clientHeight,
    width: scrollableElement.clientWidth
  };
  const position = {
    current: {
      x: scrollableElement.scrollLeft,
      y: scrollableElement.scrollTop
    },
    max: {
      x: scrollableElement.scrollWidth - dimensions.width,
      y: scrollableElement.scrollHeight - dimensions.height
    }
  };
  const isTop = position.current.y <= 0;
  const isLeft = position.current.x <= 0;
  const isBottom = position.current.y >= position.max.y;
  const isRight = position.current.x >= position.max.x;
  return {
    rect,
    position,
    isTop,
    isLeft,
    isBottom,
    isRight
  };
}

// src/utilities/scroll/canScroll.ts
function canScroll(scrollableElement, by) {
  const { isTop, isBottom, isLeft, isRight, position } = getScrollPosition(scrollableElement);
  const { x, y } = by != null ? by : { x: 0, y: 0 };
  const top = !isTop && position.current.y + y > 0;
  const bottom = !isBottom && position.current.y + y < position.max.y;
  const left = !isLeft && position.current.x + x > 0;
  const right = !isRight && position.current.x + x < position.max.x;
  return {
    top,
    bottom,
    left,
    right,
    x: left || right,
    y: top || bottom
  };
}

// src/utilities/type-guards/isSVGElement.ts
function isSVGElement(node) {
  return node instanceof getWindow(node).SVGElement;
}

// src/utilities/styles/getComputedStyles.ts
function getComputedStyles(element) {
  return getWindow(element).getComputedStyle(element);
}

// src/utilities/scroll/isFixed.ts
function isFixed(node, computedStyle = getComputedStyles(node)) {
  return computedStyle.position === "fixed" || computedStyle.position === "sticky";
}

// src/utilities/scroll/isScrollable.ts
function isScrollable(element, computedStyle = getComputedStyles(element)) {
  const overflowRegex = /(auto|scroll|overlay)/;
  const properties = ["overflow", "overflowX", "overflowY"];
  return properties.some((property) => {
    const value = computedStyle[property];
    return typeof value === "string" ? overflowRegex.test(value) : false;
  });
}

// src/utilities/scroll/getScrollableAncestors.ts
var defaultOptions = {
  excludeElement: true
};
function getScrollableAncestors(element, options = defaultOptions) {
  const { limit, excludeElement } = options;
  const scrollParents = /* @__PURE__ */ new Set();
  function findScrollableAncestors(node) {
    if (limit != null && scrollParents.size >= limit) {
      return scrollParents;
    }
    if (!node) {
      return scrollParents;
    }
    if (isDocument(node) && node.scrollingElement != null && !scrollParents.has(node.scrollingElement)) {
      scrollParents.add(node.scrollingElement);
      return scrollParents;
    }
    if (!isHTMLElement(node)) {
      if (isSVGElement(node)) {
        return findScrollableAncestors(node.parentElement);
      }
      return scrollParents;
    }
    if (scrollParents.has(node)) {
      return scrollParents;
    }
    const computedStyle = getComputedStyles(node);
    if (excludeElement && node === element) ; else if (isScrollable(node, computedStyle)) {
      scrollParents.add(node);
    }
    if (isFixed(node, computedStyle)) {
      const { scrollingElement } = node.ownerDocument;
      if (scrollingElement) scrollParents.add(scrollingElement);
      return scrollParents;
    }
    return findScrollableAncestors(node.parentNode);
  }
  if (!element) {
    return scrollParents;
  }
  return findScrollableAncestors(element);
}
function getFirstScrollableAncestor(node) {
  const [firstScrollableAncestor] = getScrollableAncestors(node, { limit: 1 });
  return firstScrollableAncestor != null ? firstScrollableAncestor : null;
}

// src/utilities/frame/getFrameElement.ts
function getFrameElement(el) {
  const refWindow = el == null ? void 0 : el.ownerDocument.defaultView;
  if (refWindow && refWindow.self !== refWindow.parent) {
    return refWindow.frameElement;
  }
  return null;
}

// src/utilities/frame/getFrameTransform.ts
function getFrameTransform(el, boundary = window.frameElement) {
  const transform = {
    x: 0,
    y: 0,
    scaleX: 1,
    scaleY: 1
  };
  if (!el) return transform;
  let frame = getFrameElement(el);
  while (frame) {
    if (frame === boundary) {
      return transform;
    }
    const rect = frame.getBoundingClientRect();
    const { x: scaleX, y: scaleY } = getScale(frame, rect);
    transform.x = transform.x + rect.left;
    transform.y = transform.y + rect.top;
    transform.scaleX = transform.scaleX * scaleX;
    transform.scaleY = transform.scaleY * scaleY;
    frame = getFrameElement(frame);
  }
  return transform;
}
function getScale(element, boundingRectangle = element.getBoundingClientRect()) {
  const width = Math.round(boundingRectangle.width);
  const height = Math.round(boundingRectangle.height);
  if (isHTMLElement(element)) {
    return {
      x: width / element.offsetWidth,
      y: height / element.offsetHeight
    };
  }
  const styles = getComputedStyles(element);
  return {
    x: (parseFloat(styles.width) || width) / width,
    y: (parseFloat(styles.height) || height) / height
  };
}

// src/utilities/scroll/detectScrollIntent.ts
var ScrollDirection = /* @__PURE__ */ ((ScrollDirection2) => {
  ScrollDirection2[ScrollDirection2["Idle"] = 0] = "Idle";
  ScrollDirection2[ScrollDirection2["Forward"] = 1] = "Forward";
  ScrollDirection2[ScrollDirection2["Reverse"] = -1] = "Reverse";
  return ScrollDirection2;
})(ScrollDirection || {});
var defaultThreshold = {
  x: 0.2,
  y: 0.2
};
var defaultTolerance = {
  x: 10,
  y: 10
};
function detectScrollIntent(scrollableElement, coordinates, intent, acceleration = 25, thresholdPercentage = defaultThreshold, tolerance = defaultTolerance) {
  const { x, y } = coordinates;
  const { rect, isTop, isBottom, isLeft, isRight } = getScrollPosition(scrollableElement);
  const frameTransform = getFrameTransform(scrollableElement);
  const scrollContainerRect = new Rectangle(
    rect.left * frameTransform.scaleX + frameTransform.x,
    rect.top * frameTransform.scaleY + frameTransform.y,
    rect.width * frameTransform.scaleX,
    rect.height * frameTransform.scaleY
  );
  const direction = {
    x: 0 /* Idle */,
    y: 0 /* Idle */
  };
  const speed = {
    x: 0,
    y: 0
  };
  const threshold2 = {
    height: scrollContainerRect.height * thresholdPercentage.y,
    width: scrollContainerRect.width * thresholdPercentage.x
  };
  if (!isTop && y <= scrollContainerRect.top + threshold2.height && (intent == null ? void 0 : intent.y) !== 1 /* Forward */ && x >= scrollContainerRect.left - tolerance.x && x <= scrollContainerRect.right + tolerance.x) {
    direction.y = -1 /* Reverse */;
    speed.y = acceleration * Math.abs(
      (scrollContainerRect.top + threshold2.height - y) / threshold2.height
    );
  } else if (!isBottom && y >= scrollContainerRect.bottom - threshold2.height && (intent == null ? void 0 : intent.y) !== -1 /* Reverse */ && x >= scrollContainerRect.left - tolerance.x && x <= scrollContainerRect.right + tolerance.x) {
    direction.y = 1 /* Forward */;
    speed.y = acceleration * Math.abs(
      (scrollContainerRect.bottom - threshold2.height - y) / threshold2.height
    );
  }
  if (!isRight && x >= scrollContainerRect.right - threshold2.width && (intent == null ? void 0 : intent.x) !== -1 /* Reverse */ && y >= scrollContainerRect.top - tolerance.y && y <= scrollContainerRect.bottom + tolerance.y) {
    direction.x = 1 /* Forward */;
    speed.x = acceleration * Math.abs(
      (scrollContainerRect.right - threshold2.width - x) / threshold2.width
    );
  } else if (!isLeft && x <= scrollContainerRect.left + threshold2.width && (intent == null ? void 0 : intent.x) !== 1 /* Forward */ && y >= scrollContainerRect.top - tolerance.y && y <= scrollContainerRect.bottom + tolerance.y) {
    direction.x = -1 /* Reverse */;
    speed.x = acceleration * Math.abs(
      (scrollContainerRect.left + threshold2.width - x) / threshold2.width
    );
  }
  return {
    direction,
    speed
  };
}

// src/utilities/scroll/scrollIntoViewIfNeeded.ts
function supportsScrollIntoViewIfNeeded(element) {
  return "scrollIntoViewIfNeeded" in element && typeof element.scrollIntoViewIfNeeded === "function";
}
function scrollIntoViewIfNeeded(el, centerIfNeeded = false) {
  if (supportsScrollIntoViewIfNeeded(el)) {
    el.scrollIntoViewIfNeeded(centerIfNeeded);
    return;
  }
  if (!isHTMLElement(el)) {
    return el.scrollIntoView();
  }
  var parent = getFirstScrollableAncestor(el);
  if (!isHTMLElement(parent)) {
    return;
  }
  const parentComputedStyle = getComputedStyles(parent), parentBorderTopWidth = parseInt(
    parentComputedStyle.getPropertyValue("border-top-width")
  ), parentBorderLeftWidth = parseInt(
    parentComputedStyle.getPropertyValue("border-left-width")
  ), overTop = el.offsetTop - parent.offsetTop < parent.scrollTop, overBottom = el.offsetTop - parent.offsetTop + el.clientHeight - parentBorderTopWidth > parent.scrollTop + parent.clientHeight, overLeft = el.offsetLeft - parent.offsetLeft < parent.scrollLeft, overRight = el.offsetLeft - parent.offsetLeft + el.clientWidth - parentBorderLeftWidth > parent.scrollLeft + parent.clientWidth, alignWithTop = overTop && !overBottom;
  if ((overTop || overBottom) && centerIfNeeded) {
    parent.scrollTop = el.offsetTop - parent.offsetTop - parent.clientHeight / 2 - parentBorderTopWidth + el.clientHeight / 2;
  }
  if ((overLeft || overRight) && centerIfNeeded) {
    parent.scrollLeft = el.offsetLeft - parent.offsetLeft - parent.clientWidth / 2 - parentBorderLeftWidth + el.clientWidth / 2;
  }
  if ((overTop || overBottom || overLeft || overRight) && !centerIfNeeded) {
    el.scrollIntoView(alignWithTop);
  }
}

// src/utilities/scheduling/scheduler.ts
var Scheduler = class {
  constructor() {
    this.tasks = /* @__PURE__ */ new Set();
    this.flush = () => {
      const tasks = this.tasks;
      this.animationFrame = void 0;
      this.tasks = /* @__PURE__ */ new Set();
      for (const task of tasks) {
        task();
      }
    };
  }
  schedule(task) {
    this.tasks.add(task);
    if (!this.animationFrame) {
      this.animationFrame = requestAnimationFrame(this.flush);
    }
  }
};
var scheduler = new Scheduler();

// src/utilities/transform/inverseTransform.ts
function inverseTransform(rect, parsedTransform, transformOrigin) {
  const { scaleX, scaleY, x: translateX, y: translateY } = parsedTransform;
  const x = rect.left - translateX - (1 - scaleX) * parseFloat(transformOrigin);
  const y = rect.top - translateY - (1 - scaleY) * parseFloat(transformOrigin.slice(transformOrigin.indexOf(" ") + 1));
  const w = scaleX ? rect.width / scaleX : rect.width;
  const h = scaleY ? rect.height / scaleY : rect.height;
  return {
    width: w,
    height: h,
    top: y,
    right: x + w,
    bottom: y + h,
    left: x
  };
}

// src/utilities/type-guards/supportsStyle.ts
function supportsStyle(element) {
  return "style" in element && element.style instanceof getWindow(element).CSSStyleDeclaration;
}

// src/utilities/styles/Styles.ts
var Styles = class {
  constructor(element) {
    this.element = element;
    this.initial = /* @__PURE__ */ new Map();
  }
  set(properties, prefix = "") {
    const { element } = this;
    if (!supportsStyle(element)) {
      return;
    }
    for (const [key, value] of Object.entries(properties)) {
      const property = `${prefix}${key}`;
      if (!this.initial.has(property)) {
        this.initial.set(property, element.style.getPropertyValue(property));
      }
      element.style.setProperty(
        property,
        typeof value === "string" ? value : `${value}px`
      );
    }
  }
  remove(properties, prefix = "") {
    const { element } = this;
    if (!supportsStyle(element)) {
      return;
    }
    for (const key of properties) {
      const property = `${prefix}${key}`;
      element.style.removeProperty(property);
    }
  }
  reset() {
    const { element } = this;
    if (!supportsStyle(element)) {
      return;
    }
    for (const [key, value] of this.initial) {
      element.style.setProperty(key, value);
    }
    if (element.getAttribute("style") === "") {
      element.removeAttribute("style");
    }
  }
};

// src/utilities/transform/animateTransform.ts
function animateTransform({
  element,
  keyframes,
  options,
  onReady,
  onFinish
}) {
  const styles = new Styles(element);
  const { transitionProperty } = getComputedStyles(element);
  const properties = transitionProperty.split(", ");
  styles.set({
    "transition-property": properties.length ? properties.filter(
      (property) => !property.includes("transform") && !property.includes("translate")
    ).join(", ") : "none"
  });
  onReady == null ? void 0 : onReady();
  element.animate(keyframes, options).finished.then(() => {
    onFinish == null ? void 0 : onFinish();
    styles.reset();
  });
}

// src/utilities/transform/parseTranslate.ts
function parseTranslate(translate) {
  if (translate === "none") {
    return null;
  }
  const [x, y, z = "0"] = translate.split(" ");
  const output = { x: parseFloat(x), y: parseFloat(y), z: parseInt(z, 10) };
  if (isNaN(output.x) && isNaN(output.y)) {
    return null;
  }
  return {
    x: isNaN(output.x) ? 0 : output.x,
    y: isNaN(output.y) ? 0 : output.y,
    z: isNaN(output.z) ? 0 : output.z
  };
}

// src/utilities/transform/computeTranslate.ts
function getFinalKeyframe(element, match) {
  const { KeyframeEffect } = getWindow(element);
  const animations = element.getAnimations();
  if (animations.length > 0) {
    for (const animation of animations) {
      const { effect } = animation;
      const keyframes = effect instanceof KeyframeEffect ? effect.getKeyframes() : [];
      const matchedKeyframes = keyframes.filter(match);
      if (matchedKeyframes.length > 0) {
        return matchedKeyframes[matchedKeyframes.length - 1];
      }
    }
  }
  return null;
}
function computeTranslate(element, translate = getComputedStyles(element).translate, projected = true) {
  if (projected) {
    const keyframe = getFinalKeyframe(
      element,
      (keyframe2) => "translate" in keyframe2
    );
    if (keyframe) {
      const { translate: translate2 = "" } = keyframe;
      if (typeof translate2 === "string") {
        const finalTranslate = parseTranslate(translate2);
        if (finalTranslate) {
          return finalTranslate;
        }
      }
    }
  }
  if (translate) {
    const finalTranslate = parseTranslate(translate);
    if (finalTranslate) {
      return finalTranslate;
    }
  }
  return { x: 0, y: 0, z: 0 };
}

// src/utilities/transform/parseScale.ts
function parseScale(scale) {
  if (scale === "none") {
    return null;
  }
  const values = scale.split(" ");
  const x = parseFloat(values[0]);
  const y = parseFloat(values[1]);
  if (isNaN(x) && isNaN(y)) {
    return null;
  }
  return {
    x: isNaN(x) ? y : x,
    y: isNaN(y) ? x : y
  };
}

// src/utilities/transform/parseTransform.ts
function parseTransform(computedStyles) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i;
  const { scale, transform, translate } = computedStyles;
  const parsedScale = parseScale(scale);
  const parsedTranslate = parseTranslate(translate);
  const parsedMatrix = parseTransformMatrix(transform);
  if (!parsedMatrix && !parsedScale && !parsedTranslate) {
    return null;
  }
  const normalizedScale = {
    x: (_a = parsedScale == null ? void 0 : parsedScale.x) != null ? _a : 1,
    y: (_b = parsedScale == null ? void 0 : parsedScale.y) != null ? _b : 1
  };
  const normalizedTranslate = {
    x: (_c = parsedTranslate == null ? void 0 : parsedTranslate.x) != null ? _c : 0,
    y: (_d = parsedTranslate == null ? void 0 : parsedTranslate.y) != null ? _d : 0
  };
  const normalizedMatrix = {
    x: (_e = parsedMatrix == null ? void 0 : parsedMatrix.x) != null ? _e : 0,
    y: (_f = parsedMatrix == null ? void 0 : parsedMatrix.y) != null ? _f : 0,
    scaleX: (_g = parsedMatrix == null ? void 0 : parsedMatrix.scaleX) != null ? _g : 1,
    scaleY: (_h = parsedMatrix == null ? void 0 : parsedMatrix.scaleY) != null ? _h : 1
  };
  return {
    x: normalizedTranslate.x + normalizedMatrix.x,
    y: normalizedTranslate.y + normalizedMatrix.y,
    z: (_i = parsedTranslate == null ? void 0 : parsedTranslate.z) != null ? _i : 0,
    scaleX: normalizedScale.x * normalizedMatrix.scaleX,
    scaleY: normalizedScale.y * normalizedMatrix.scaleY
  };
}
function parseTransformMatrix(transform) {
  if (transform.startsWith("matrix3d(")) {
    const transformArray = transform.slice(9, -1).split(/, /);
    return {
      x: +transformArray[12],
      y: +transformArray[13],
      scaleX: +transformArray[0],
      scaleY: +transformArray[5]
    };
  } else if (transform.startsWith("matrix(")) {
    const transformArray = transform.slice(7, -1).split(/, /);
    return {
      x: +transformArray[4],
      y: +transformArray[5],
      scaleX: +transformArray[0],
      scaleY: +transformArray[3]
    };
  }
  return null;
}

// src/utilities/shapes/DOMRectangle.ts
var DOMRectangle = class extends Rectangle {
  constructor(element, options = {}) {
    var _a, _b;
    const {
      frameTransform = getFrameTransform(element),
      ignoreTransforms,
      getBoundingClientRect = getBoundingRectangle
    } = options;
    const resetAnimations = forceFinishAnimations(element);
    const boundingRectangle = getBoundingClientRect(element);
    let { top, left, width, height } = boundingRectangle;
    const computedStyles = getComputedStyles(element);
    const parsedTransform = parseTransform(computedStyles);
    const scale = {
      x: (_a = parsedTransform == null ? void 0 : parsedTransform.scaleX) != null ? _a : 1,
      y: (_b = parsedTransform == null ? void 0 : parsedTransform.scaleY) != null ? _b : 1
    };
    resetAnimations == null ? void 0 : resetAnimations();
    const projectedTransform = getProjectedTransform(element);
    if (parsedTransform && (ignoreTransforms || projectedTransform)) {
      const updated = inverseTransform(
        boundingRectangle,
        parsedTransform,
        computedStyles.transformOrigin
      );
      top = updated.top;
      left = updated.left;
      width = updated.width;
      height = updated.height;
    }
    if (projectedTransform && !ignoreTransforms) {
      top = top + projectedTransform.y;
      left = left + projectedTransform.x;
      width = width * projectedTransform.scaleX;
      height = height * projectedTransform.scaleY;
      scale.x = projectedTransform.scaleX;
      scale.y = projectedTransform.scaleY;
    }
    if (frameTransform) {
      if (!ignoreTransforms) {
        left *= frameTransform.scaleX;
        width *= frameTransform.scaleX;
        top *= frameTransform.scaleY;
        height *= frameTransform.scaleY;
      }
      left += frameTransform.x;
      top += frameTransform.y;
    }
    super(left, top, width, height);
    this.scale = scale;
  }
};
function getProjectedTransform(element) {
  var _a;
  const { KeyframeEffect } = getWindow(element);
  const animations = element.getAnimations();
  let projectedTransform = null;
  if (!animations.length) return null;
  for (const animation of animations) {
    const keyframes = animation.effect instanceof KeyframeEffect ? animation.effect.getKeyframes() : [];
    const keyframe = keyframes[keyframes.length - 1];
    if (!keyframe) continue;
    const { transform = "", translate = "", scale = "" } = keyframe;
    if (transform || translate || scale) {
      const parsedTransform = parseTransform({
        transform: typeof transform === "string" ? transform : "",
        translate: typeof translate === "string" ? translate : "",
        scale: typeof scale === "string" ? scale : ""
      });
      if (parsedTransform) {
        projectedTransform = projectedTransform ? {
          x: projectedTransform.x + parsedTransform.x,
          y: projectedTransform.y + parsedTransform.y,
          z: (_a = projectedTransform.z) != null ? _a : parsedTransform.z,
          scaleX: projectedTransform.scaleX * parsedTransform.scaleX,
          scaleY: projectedTransform.scaleY * parsedTransform.scaleY
        } : parsedTransform;
      }
    }
  }
  return projectedTransform;
}
function forceFinishAnimations(element) {
  const { KeyframeEffect } = getWindow(element);
  const animations = element.ownerDocument.getAnimations().filter((animation) => {
    if (animation.effect instanceof KeyframeEffect) {
      const { target } = animation.effect;
      if (target !== element && (target == null ? void 0 : target.contains(element))) {
        return animation.effect.getKeyframes().some((keyframe) => {
          const { transform, translate, scale, width, height } = keyframe;
          return transform || translate || scale || width || height;
        });
      }
    }
  }).map((animation) => {
    const { effect, currentTime } = animation;
    const duration = effect == null ? void 0 : effect.getComputedTiming().duration;
    if (animation.pending) return;
    if (typeof duration == "number" && typeof currentTime == "number" && currentTime < duration) {
      animation.currentTime = duration;
      return () => {
        animation.currentTime = currentTime;
      };
    }
  });
  if (animations.length > 0) {
    return () => animations.forEach((reset) => reset == null ? void 0 : reset());
  }
}

// src/utilities/type-guards/isElement.ts
function isElement(target) {
  return target instanceof getWindow(target).Element;
}

// src/utilities/type-guards/isKeyboardEvent.ts
function isKeyboardEvent(event) {
  if (!event) return false;
  const { KeyboardEvent } = getWindow(event.target);
  return event instanceof KeyboardEvent;
}

// src/utilities/type-guards/isPointerEvent.ts
function isPointerEvent(event) {
  if (!event) return false;
  const { PointerEvent } = getWindow(event.target);
  return event instanceof PointerEvent;
}

// src/utilities/misc/generateUniqueId.ts
var ids = {};
function generateUniqueId(prefix) {
  const id = ids[prefix] == null ? 0 : ids[prefix] + 1;
  ids[prefix] = id;
  return `${prefix}-${id}`;
}

// src/algorithms/pointerIntersection.ts
var pointerIntersection$1 = ({
  dragOperation,
  droppable
}) => {
  const pointerCoordinates = dragOperation.position.current;
  if (!pointerCoordinates) {
    return null;
  }
  const { id } = droppable;
  if (!droppable.shape) {
    return null;
  }
  if (droppable.shape.containsPoint(pointerCoordinates)) {
    const distance = Point.distance(droppable.shape.center, pointerCoordinates);
    return {
      id,
      value: 1 / distance,
      type: CollisionType.PointerIntersection,
      priority: CollisionPriority.High
    };
  }
  return null;
};
var shapeIntersection = ({
  dragOperation,
  droppable
}) => {
  const { shape } = dragOperation;
  if (!droppable.shape || !(shape == null ? void 0 : shape.current)) {
    return null;
  }
  const intersectionArea = shape.current.intersectionArea(droppable.shape);
  if (intersectionArea) {
    const { position } = dragOperation;
    const distance = Point.distance(droppable.shape.center, position.current);
    const intersectionRatio = intersectionArea / (shape.current.area + droppable.shape.area - intersectionArea);
    const value = intersectionRatio / distance;
    return {
      id: droppable.id,
      value,
      type: CollisionType.ShapeIntersection,
      priority: CollisionPriority.Normal
    };
  }
  return null;
};

// src/algorithms/default.ts
var defaultCollisionDetection = (args) => {
  var _a;
  return (_a = pointerIntersection$1(args)) != null ? _a : shapeIntersection(args);
};
var closestCorners$1 = (input) => {
  const { dragOperation, droppable } = input;
  const { shape, position } = dragOperation;
  if (!droppable.shape) {
    return null;
  }
  const { left, top, right, bottom } = droppable.shape.boundingRectangle;
  const corners = [
    {
      x: left,
      y: top
    },
    {
      x: right,
      y: top
    },
    {
      x: left,
      y: bottom
    },
    {
      x: right,
      y: bottom
    }
  ];
  const distance = corners.reduce(
    (acc, corner) => {
      var _a;
      return acc + Point.distance(
        Point.from(corner),
        (_a = shape == null ? void 0 : shape.current.center) != null ? _a : position.current
      );
    },
    0
  );
  const value = distance / 4;
  return {
    id: droppable.id,
    value: 1 / value,
    type: CollisionType.Collision,
    priority: CollisionPriority.Normal
  };
};

var __create$1 = Object.create;
var __defProp$4 = Object.defineProperty;
var __defProps$4 = Object.defineProperties;
var __getOwnPropDesc$1 = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs$4 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$4 = Object.getOwnPropertySymbols;
var __hasOwnProp$4 = Object.prototype.hasOwnProperty;
var __propIsEnum$4 = Object.prototype.propertyIsEnumerable;
var __knownSymbol$1 = (name, symbol) => (symbol = Symbol[name]) ? symbol : Symbol.for("Symbol." + name);
var __typeError$1 = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp$4 = (obj, key, value) => key in obj ? __defProp$4(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$4 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$4.call(b, prop))
      __defNormalProp$4(a, prop, b[prop]);
  if (__getOwnPropSymbols$4)
    for (var prop of __getOwnPropSymbols$4(b)) {
      if (__propIsEnum$4.call(b, prop))
        __defNormalProp$4(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$4 = (a, b) => __defProps$4(a, __getOwnPropDescs$4(b));
var __name = (target, value) => __defProp$4(target, "name", { value, configurable: true });
var __objRest$2 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$4.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$4)
    for (var prop of __getOwnPropSymbols$4(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$4.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __decoratorStart$1 = (base) => {
  var _a3;
  return [, , , __create$1((_a3 = base == null ? void 0 : base[__knownSymbol$1("metadata")]) != null ? _a3 : null)];
};
var __decoratorStrings$1 = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"];
var __expectFn$1 = (fn) => fn !== void 0 && typeof fn !== "function" ? __typeError$1("Function expected") : fn;
var __decoratorContext$1 = (kind, name, done, metadata, fns) => ({ kind: __decoratorStrings$1[kind], name, metadata, addInitializer: (fn) => done._ ? __typeError$1("Already initialized") : fns.push(__expectFn$1(fn || null)) });
var __decoratorMetadata$1 = (array, target) => __defNormalProp$4(target, __knownSymbol$1("metadata"), array[3]);
var __runInitializers$1 = (array, flags, self, value) => {
  for (var i = 0, fns = array[flags >> 1], n = fns && fns.length; i < n; i++) flags & 1 ? fns[i].call(self) : value = fns[i].call(self, value);
  return value;
};
var __decorateElement$1 = (array, flags, name, decorators, target, extra) => {
  var fn, it, done, ctx, access, k = flags & 7, s = !!(flags & 8), p = !!(flags & 16);
  var j = k > 3 ? array.length + 1 : k ? s ? 1 : 2 : 0, key = __decoratorStrings$1[k + 5];
  var initializers = k > 3 && (array[j - 1] = []), extraInitializers = array[j] || (array[j] = []);
  var desc = k && (!p && !s && (target = target.prototype), k < 5 && (k > 3 || !p) && __getOwnPropDesc$1(k < 4 ? target : { get [name]() {
    return __privateGet$1(this, extra);
  }, set [name](x) {
    return __privateSet$1(this, extra, x);
  } }, name));
  k ? p && k < 4 && __name(extra, (k > 2 ? "set " : k > 1 ? "get " : "") + name) : __name(target, name);
  for (var i = decorators.length - 1; i >= 0; i--) {
    ctx = __decoratorContext$1(k, name, done = {}, array[3], extraInitializers);
    if (k) {
      ctx.static = s, ctx.private = p, access = ctx.access = { has: p ? (x) => __privateIn(target, x) : (x) => name in x };
      if (k ^ 3) access.get = p ? (x) => (k ^ 1 ? __privateGet$1 : __privateMethod)(x, target, k ^ 4 ? extra : desc.get) : (x) => x[name];
      if (k > 2) access.set = p ? (x, y) => __privateSet$1(x, target, y, k ^ 4 ? extra : desc.set) : (x, y) => x[name] = y;
    }
    it = (0, decorators[i])(k ? k < 4 ? p ? extra : desc[key] : k > 4 ? void 0 : { get: desc.get, set: desc.set } : target, ctx), done._ = 1;
    if (k ^ 4 || it === void 0) __expectFn$1(it) && (k > 4 ? initializers.unshift(it) : k ? p ? extra = it : desc[key] = it : target = it);
    else if (typeof it !== "object" || it === null) __typeError$1("Object expected");
    else __expectFn$1(fn = it.get) && (desc.get = fn), __expectFn$1(fn = it.set) && (desc.set = fn), __expectFn$1(fn = it.init) && initializers.unshift(fn);
  }
  return k || __decoratorMetadata$1(array, target), desc && __defProp$4(target, name, desc), p ? k ^ 4 ? extra : desc : target;
};
var __accessCheck$1 = (obj, member, msg) => member.has(obj) || __typeError$1("Cannot " + msg);
var __privateIn = (member, obj) => Object(obj) !== obj ? __typeError$1('Cannot use the "in" operator on this value') : member.has(obj);
var __privateGet$1 = (obj, member, getter) => (__accessCheck$1(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd$1 = (obj, member, value) => member.has(obj) ? __typeError$1("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet$1 = (obj, member, value, setter) => (__accessCheck$1(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck$1(obj, member, "access private method"), method);

// src/core/plugins/accessibility/defaults.ts
var defaultAttributes$1 = {
  role: "button",
  roleDescription: "draggable"};
var defaultDescriptionIdPrefix = `dnd-kit-description`;
var defaultAnnouncementIdPrefix = `dnd-kit-announcement`;
var defaultScreenReaderInstructions = {
  draggable: `To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item in a given direction. Press space again to drop the item in its new position, or press escape to cancel.`
};
var defaultAnnouncements = {
  dragstart({ operation: { source } }) {
    if (!source) return;
    return `Picked up draggable item ${source.id}.`;
  },
  dragover({ operation: { source, target } }) {
    if (!source) return;
    if (target) {
      return `Draggable item ${source.id} was moved over droppable target ${target.id}.`;
    }
    return `Draggable item ${source.id} is no longer over a droppable target.`;
  },
  dragend({ operation: { source, target }, canceled }) {
    if (!source) return;
    if (canceled) {
      return `Dragging was cancelled. Draggable item ${source.id} was dropped.`;
    }
    if (target) {
      return `Draggable item ${source.id} was dropped over droppable target ${target.id}`;
    }
    return `Draggable item ${source.id} was dropped.`;
  }
};
function isFocusable(element) {
  const window = getWindow(element);
  return element instanceof window.HTMLInputElement || element instanceof window.HTMLSelectElement || element instanceof window.HTMLTextAreaElement || element instanceof window.HTMLAnchorElement || element instanceof window.HTMLButtonElement || element instanceof window.HTMLAreaElement;
}

// src/core/plugins/accessibility/HiddenText.ts
function createHiddenText(id, value) {
  const element = document.createElement("div");
  element.id = id;
  element.style.setProperty("display", "none");
  element.innerText = value;
  return element;
}

// src/core/plugins/accessibility/LiveRegion.ts
function createLiveRegion(id) {
  const element = document.createElement("div");
  element.id = id;
  element.setAttribute("role", "status");
  element.setAttribute("aria-live", "polite");
  element.setAttribute("aria-atomic", "true");
  element.style.setProperty("position", "fixed");
  element.style.setProperty("width", "1px");
  element.style.setProperty("height", "1px");
  element.style.setProperty("margin", "-1px");
  element.style.setProperty("border", "0");
  element.style.setProperty("padding", "0");
  element.style.setProperty("overflow", "hidden");
  element.style.setProperty("clip", "rect(0 0 0 0)");
  element.style.setProperty("clip-path", "inset(100%)");
  element.style.setProperty("white-space", "nowrap");
  return element;
}

// src/core/plugins/accessibility/Accessibility.ts
var Accessibility = class extends Plugin {
  constructor(manager, options) {
    super(manager);
    const {
      id,
      idPrefix: {
        description: descriptionPrefix = defaultDescriptionIdPrefix,
        announcement: announcementPrefix = defaultAnnouncementIdPrefix
      } = {},
      announcements = defaultAnnouncements,
      screenReaderInstructions = defaultScreenReaderInstructions
    } = options != null ? options : {};
    const descriptionId = id ? `${descriptionPrefix}-${id}` : generateUniqueId(descriptionPrefix);
    const announcementId = id ? `${announcementPrefix}-${id}` : generateUniqueId(announcementPrefix);
    let hiddenTextElement;
    let liveRegionElement;
    const eventListeners = Object.entries(announcements).map(
      ([eventName, getAnnouncement]) => {
        return this.manager.monitor.addEventListener(
          eventName,
          (event, manager2) => {
            const announcement = getAnnouncement == null ? void 0 : getAnnouncement(event, manager2);
            if (announcement && liveRegionElement) {
              liveRegionElement.innerText = announcement;
            }
          }
        );
      }
    );
    const initialize = () => {
      hiddenTextElement = createHiddenText(
        descriptionId,
        screenReaderInstructions.draggable
      );
      liveRegionElement = createLiveRegion(announcementId);
      document.body.append(hiddenTextElement, liveRegionElement);
    };
    const cleanupEffects = effects(() => {
      for (const draggable of manager.registry.draggables.value) {
        const { element, handle } = draggable;
        const activator = handle != null ? handle : element;
        const window = getWindow(activator);
        if (activator) {
          if (!hiddenTextElement || !liveRegionElement) {
            initialize();
          }
          if ((!isFocusable(activator) || isSafari()) && !activator.hasAttribute("tabindex")) {
            activator.setAttribute("tabindex", "0");
          }
          if (!activator.hasAttribute("role") && !(activator instanceof window.HTMLButtonElement)) {
            activator.setAttribute("role", defaultAttributes$1.role);
          }
          if (!activator.hasAttribute("role-description")) {
            activator.setAttribute(
              "aria-roledescription",
              defaultAttributes$1.roleDescription
            );
          }
          if (!activator.hasAttribute("aria-describedby")) {
            activator.setAttribute("aria-describedby", descriptionId);
          }
          for (const key of ["aria-pressed", "aria-grabbed"]) {
            activator.setAttribute(key, String(draggable.isDragSource));
          }
          activator.setAttribute("aria-disabled", String(draggable.disabled));
        }
      }
      this.destroy = () => {
        hiddenTextElement == null ? void 0 : hiddenTextElement.remove();
        liveRegionElement == null ? void 0 : liveRegionElement.remove();
        eventListeners.forEach((unsubscribe) => unsubscribe());
        cleanupEffects();
      };
    });
  }
};
var Cursor = class extends Plugin {
  constructor(manager, options) {
    super(manager, options);
    this.manager = manager;
    this.destroy = E(() => {
      var _a3;
      const { dragOperation } = this.manager;
      const { cursor = "grabbing" } = (_a3 = this.options) != null ? _a3 : {};
      if (dragOperation.status.initialized) {
        const style = document.createElement("style");
        style.innerText = `* { cursor: ${cursor} !important; }`;
        document.head.appendChild(style);
        return () => {
          style.remove();
        };
      }
    });
  }
};
var ATTR_PREFIX = "data-dnd-";
var CSS_PREFIX = "--dnd-";
var ATTRIBUTE = `${ATTR_PREFIX}dragging`;
var cssRules = `[${ATTRIBUTE}] {position: fixed !important;pointer-events: none !important;touch-action: none !important;z-index: calc(infinity);will-change: translate;top: var(${CSS_PREFIX}top, 0px) !important;left: var(${CSS_PREFIX}left, 0px) !important;right: unset !important;bottom: unset !important;width: var(${CSS_PREFIX}width, auto) !important;height: var(${CSS_PREFIX}height, auto) !important;box-sizing:border-box;}[${ATTRIBUTE}] *{pointer-events: none !important;}[${ATTRIBUTE}][style*="${CSS_PREFIX}translate"] {translate: var(${CSS_PREFIX}translate) !important;}[style*="${CSS_PREFIX}transition"] {transition: var(${CSS_PREFIX}transition) !important;}*:where([${ATTRIBUTE}][popover]){overflow:visible;background:var(${CSS_PREFIX}background);border:var(${CSS_PREFIX}border);margin:unset;padding:unset;color:inherit;}[${ATTRIBUTE}]::backdrop {display: none}html:has([${ATTRIBUTE}]) * {user-select:none;-webkit-user-select:none;}`;
var PLACEHOLDER_ATTRIBUTE = `${ATTR_PREFIX}placeholder`;
var IGNORED_ATTRIBUTES = [
  ATTRIBUTE,
  PLACEHOLDER_ATTRIBUTE,
  "popover",
  "aria-pressed",
  "aria-grabbing"
];
var IGNORED_STYLES = ["view-transition-name"];
var _Feedback = class _Feedback extends Plugin {
  constructor(manager, options) {
    super(manager);
    const styleTags = /* @__PURE__ */ new Map();
    let initialSize;
    let initialCoordinates;
    let initialFrameTransform;
    let initialTranslate = { x: 0, y: 0 };
    let currentTranslate;
    let transformOrigin;
    let moved = false;
    const styleInjectionCleanup = E(() => {
      var _a3, _b2;
      const { status, source, target } = manager.dragOperation;
      if (status.initialized) {
        const sourceDocument = getDocument((_a3 = source == null ? void 0 : source.element) != null ? _a3 : null);
        const targetDocument = getDocument((_b2 = target == null ? void 0 : target.element) != null ? _b2 : null);
        const documents = /* @__PURE__ */ new Set([sourceDocument, targetDocument]);
        for (const doc of documents) {
          if (!styleTags.has(doc)) {
            const style = document.createElement("style");
            style.innerText = cssRules;
            doc.head.prepend(style);
            styleTags.set(doc, style);
          }
        }
        return styleInjectionCleanup;
      }
    });
    const cleanupEffect = E(() => {
      var _a3;
      const { dragOperation } = manager;
      const { position, source, status } = dragOperation;
      if (status.idle) {
        currentTranslate = void 0;
        initialCoordinates = void 0;
        initialSize = void 0;
        initialFrameTransform = void 0;
        initialTranslate = { x: 0, y: 0 };
        transformOrigin = void 0;
        return;
      }
      if (!source) return;
      const { element, feedback } = source;
      if (!element || feedback === "none") {
        return;
      }
      let cleanup;
      const frameTransform = getFrameTransform(element);
      const shape = new DOMRectangle(element, {
        frameTransform: null,
        ignoreTransforms: true
      });
      const { width, height, top, left } = shape;
      const styles = new Styles(element);
      const { background, border, transition, translate } = getComputedStyles(element);
      const clone = feedback === "clone";
      const placeholder = feedback !== "move" ? createPlaceholder(source) : null;
      const isKeyboardOperation = n$1(
        () => isKeyboardEvent(manager.dragOperation.activatorEvent)
      );
      if (translate !== "none") {
        const parsedTranslate = parseTranslate(translate);
        if (parsedTranslate) {
          initialTranslate = parsedTranslate;
        }
      }
      const relativeTop = top * frameTransform.scaleY + frameTransform.y;
      const relativeLeft = left * frameTransform.scaleX + frameTransform.x;
      if (!initialCoordinates) {
        initialCoordinates = { x: relativeLeft, y: relativeTop };
      }
      if (!initialSize) {
        initialSize = { width, height };
      }
      if (!initialFrameTransform) {
        initialFrameTransform = frameTransform;
      }
      if (!transformOrigin) {
        const current = n$1(() => position.current);
        transformOrigin = {
          x: (current.x - left * frameTransform.scaleX - frameTransform.x) / (width * frameTransform.scaleX),
          y: (current.y - top * frameTransform.scaleY - frameTransform.y) / (height * frameTransform.scaleY)
        };
      }
      const coordinatesDelta = {
        x: initialCoordinates.x - relativeLeft,
        y: initialCoordinates.y - relativeTop
      };
      const sizeDelta = {
        width: (initialSize.width * initialFrameTransform.scaleX - width * frameTransform.scaleX) * transformOrigin.x,
        height: (initialSize.height * initialFrameTransform.scaleY - height * frameTransform.scaleY) * transformOrigin.y
      };
      const delta = {
        x: coordinatesDelta.x / frameTransform.scaleX + sizeDelta.width,
        y: coordinatesDelta.y / frameTransform.scaleY + sizeDelta.height
      };
      const projected = {
        left: left + delta.x,
        top: top + delta.y
      };
      element.setAttribute(ATTRIBUTE, "true");
      const transform = n$1(() => dragOperation.transform);
      const translateString = `${transform.x * frameTransform.scaleX + initialTranslate.x}px ${transform.y * frameTransform.scaleY + initialTranslate.y}px 0`;
      styles.set(
        {
          width,
          height,
          top: projected.top,
          left: projected.left,
          background,
          border,
          translate: translateString
        },
        CSS_PREFIX
      );
      if (placeholder) {
        element.insertAdjacentElement("afterend", placeholder);
        if (options == null ? void 0 : options.rootElement) {
          const root = typeof options.rootElement === "function" ? options.rootElement(source) : options.rootElement;
          root.appendChild(element);
        }
      }
      if (supportsPopover(element)) {
        if (!element.hasAttribute("popover")) {
          element.setAttribute("popover", "");
        }
        showPopover(element);
      }
      const actual = new DOMRectangle(element, {
        ignoreTransforms: true
      });
      const offset = {
        top: projected.top - actual.top,
        left: projected.left - actual.left
      };
      if (Math.abs(offset.left) > 0.01 || Math.abs(offset.top) > 0.01) {
        styles.set(
          {
            top: actual.top + offset.top,
            left: actual.left + offset.left
          },
          CSS_PREFIX
        );
      } else {
        offset.left = 0;
        offset.top = 0;
      }
      const resizeObserver = new ResizeObserver(() => {
        if (!placeholder) return;
        const placeholderShape = new DOMRectangle(placeholder, {
          ignoreTransforms: true
        });
        const origin = transformOrigin != null ? transformOrigin : { x: 1, y: 1 };
        const dX = (width - placeholderShape.width) * origin.x + delta.x;
        const dY = (height - placeholderShape.height) * origin.y + delta.y;
        styles.set(
          {
            width: placeholderShape.width,
            height: placeholderShape.height,
            top: top + dY,
            left: left + dX
          },
          CSS_PREFIX
        );
        const window = getWindow(element);
        if (element instanceof window.HTMLTableRowElement && placeholder instanceof window.HTMLTableRowElement) {
          const cells = Array.from(element.cells);
          const placeholderCells = Array.from(placeholder.cells);
          for (const [index, cell] of cells.entries()) {
            const placeholderCell = placeholderCells[index];
            cell.style.width = `${placeholderCell.offsetWidth}px`;
          }
        }
        dragOperation.shape = new DOMRectangle(element);
      });
      dragOperation.shape = new DOMRectangle(element);
      source.status = "dragging";
      let elementMutationObserver;
      let documentMutationObserver;
      if (placeholder) {
        resizeObserver.observe(placeholder);
        elementMutationObserver = new MutationObserver(() => {
          for (const attribute of Array.from(element.attributes)) {
            if (attribute.name.startsWith("aria-") || IGNORED_ATTRIBUTES.includes(attribute.name)) {
              continue;
            }
            if (attribute.name === "style") {
              if (supportsStyle(element) && supportsStyle(placeholder)) {
                placeholder.setAttribute("style", clone ? "" : "opacity: 0;");
                placeholder.style.setProperty("transition", "none");
                for (const key of Object.values(element.style)) {
                  if (key.startsWith(CSS_PREFIX) || IGNORED_STYLES.includes(key)) {
                    continue;
                  }
                  placeholder.style.setProperty(
                    key,
                    element.style.getPropertyValue(key)
                  );
                }
              }
              continue;
            }
            placeholder.setAttribute(attribute.name, attribute.value);
          }
          if (clone) {
            placeholder.innerHTML = element.innerHTML;
          }
        });
        elementMutationObserver.observe(element, {
          attributes: true,
          subtree: true
        });
        documentMutationObserver = new MutationObserver((entries) => {
          for (const entry of entries) {
            const { addedNodes } = entry;
            if (addedNodes.length > 0 && Array.from(addedNodes).some((node) => node.contains(element))) {
              element.insertAdjacentElement("afterend", placeholder);
              showPopover(element);
              return;
            }
          }
        });
        documentMutationObserver.observe(element.ownerDocument.body, {
          childList: true,
          subtree: true
        });
      }
      const cleanupEffect2 = E(function updateTransform() {
        const { transform: transform2, status: status2 } = dragOperation;
        if (!transform2.x && !transform2.y && !moved) {
          return;
        }
        if (!moved) {
          moved = true;
        }
        if (status2.dragging) {
          const translateTransition = isKeyboardOperation ? "250ms cubic-bezier(0.25, 1, 0.5, 1)" : "0ms linear";
          const x = transform2.x / frameTransform.scaleX + initialTranslate.x;
          const y = transform2.y / frameTransform.scaleY + initialTranslate.y;
          styles.set(
            {
              transition: `${transition}, translate ${translateTransition}`,
              translate: `${x}px ${y}px 0`
            },
            CSS_PREFIX
          );
          dragOperation.shape = new DOMRectangle(element);
          currentTranslate = {
            x,
            y
          };
        }
      });
      const id = (_a3 = manager.dragOperation.source) == null ? void 0 : _a3.id;
      const restoreFocus = () => {
        var _a4;
        if (!isKeyboardOperation || id == null) {
          return;
        }
        const draggable = manager.registry.draggables.get(id);
        const element2 = (_a4 = draggable == null ? void 0 : draggable.handle) != null ? _a4 : draggable == null ? void 0 : draggable.element;
        if (element2 instanceof HTMLElement) {
          element2.focus();
        }
      };
      let dropEffectCleanup;
      cleanup = () => {
        elementMutationObserver == null ? void 0 : elementMutationObserver.disconnect();
        documentMutationObserver == null ? void 0 : documentMutationObserver.disconnect();
        resizeObserver.disconnect();
        styles.reset();
        if (placeholder && (moved || placeholder.parentElement !== element.parentElement) && element.isConnected) {
          placeholder.replaceWith(element);
        }
        placeholder == null ? void 0 : placeholder.remove();
        element.removeAttribute(ATTRIBUTE);
        if (supportsPopover(element)) {
          element.removeAttribute("popover");
        }
        cleanupEffect2();
        dropEffectCleanup == null ? void 0 : dropEffectCleanup();
        source.status = "idle";
        moved = false;
      };
      dropEffectCleanup = E(function dropAnimation() {
        if (dragOperation.status.dropped) {
          const onComplete = cleanup;
          cleanup = void 0;
          source.status = "dropping";
          const transform2 = currentTranslate;
          if (!transform2) {
            onComplete == null ? void 0 : onComplete();
            return;
          }
          manager.renderer.rendering.then(() => {
            showPopover(element);
            const target = placeholder != null ? placeholder : element;
            const animations = element.getAnimations();
            if (animations.length) {
              animations.forEach((animation) => {
                const { effect: effect9 } = animation;
                if (effect9 instanceof KeyframeEffect) {
                  if (effect9.getKeyframes().some((keyframe) => keyframe.translate)) {
                    animation.finish();
                  }
                }
              });
            }
            const sameFrame = getFrameElement(element) === getFrameElement(target);
            const options2 = {
              frameTransform: sameFrame ? null : void 0
            };
            const current = new DOMRectangle(element, options2);
            const final = new DOMRectangle(target, options2);
            const delta2 = {
              x: current.center.x - final.center.x,
              y: current.center.y - final.center.y
            };
            const finalTransform = {
              x: transform2.x - delta2.x,
              y: transform2.y - delta2.y
            };
            const heightKeyframes = Math.round(current.height) !== Math.round(final.height) ? {
              minHeight: [`${current.height}px`, `${final.height}px`],
              maxHeight: [`${current.height}px`, `${final.height}px`]
            } : {};
            const widthKeyframes = Math.round(current.width) !== Math.round(final.width) ? {
              minWidth: [`${current.width}px`, `${final.width}px`],
              maxWidth: [`${current.width}px`, `${final.width}px`]
            } : {};
            animateTransform({
              element,
              keyframes: __spreadProps$4(__spreadValues$4(__spreadValues$4({}, heightKeyframes), widthKeyframes), {
                translate: [
                  `${transform2.x}px ${transform2.y}px 0`,
                  `${finalTransform.x}px ${finalTransform.y}px 0`
                ]
              }),
              options: {
                duration: moved ? 250 : 0,
                easing: "ease"
              },
              onReady() {
                styles.remove(["translate"], CSS_PREFIX);
              },
              onFinish() {
                requestAnimationFrame(restoreFocus);
                onComplete == null ? void 0 : onComplete();
              }
            });
          });
        }
      });
      return () => cleanup == null ? void 0 : cleanup();
    });
    this.destroy = () => {
      styleInjectionCleanup();
      cleanupEffect();
      styleTags.forEach((style) => style.remove());
    };
  }
};
_Feedback.configure = configurator(_Feedback);
var Feedback = _Feedback;
function createPlaceholder(source) {
  return n$1(() => {
    var _a3;
    const { element, manager } = source;
    if (!element || !manager) return;
    const { droppables } = manager.registry;
    const containedDroppables = /* @__PURE__ */ new Map();
    for (const droppable of droppables) {
      if (!droppable.element) continue;
      if (element === droppable.element || element.contains(droppable.element)) {
        const identifierAttribute = `${ATTR_PREFIX}${generateUniqueId("dom-id")}`;
        droppable.element.setAttribute(identifierAttribute, "");
        containedDroppables.set(droppable, identifierAttribute);
      }
    }
    const cleanup = [];
    const placeholder = cloneElement(element);
    const { remove } = placeholder;
    for (const [droppable, identifierAttribute] of containedDroppables) {
      if (!droppable.element) continue;
      const selector = `[${identifierAttribute}]`;
      const clonedElement = placeholder.matches(selector) ? placeholder : placeholder.querySelector(selector);
      (_a3 = droppable.element) == null ? void 0 : _a3.removeAttribute(identifierAttribute);
      if (!clonedElement) continue;
      let current = droppable.element;
      droppable.proxy = clonedElement;
      clonedElement.removeAttribute(identifierAttribute);
      ProxiedElements.set(current, clonedElement);
      cleanup.push(() => {
        ProxiedElements.delete(current);
        droppable.proxy = void 0;
      });
    }
    placeholder.setAttribute("inert", "true");
    placeholder.setAttribute("tab-index", "-1");
    placeholder.setAttribute("aria-hidden", "true");
    placeholder.setAttribute(PLACEHOLDER_ATTRIBUTE, "");
    placeholder.remove = () => {
      cleanup.forEach((fn) => fn());
      remove.call(placeholder);
    };
    return placeholder;
  });
}
var LOCKED = true;
var UNLOCKED = false;
var _dec, _a, _dec2, _b, _init$1, __b, __a;
_b = (_dec2 = [reactive], ScrollDirection.Forward), _a = (_dec = [reactive], ScrollDirection.Reverse);
var ScrollLock = class {
  constructor() {
    __privateAdd$1(this, __b, __runInitializers$1(_init$1, 8, this, LOCKED)), __runInitializers$1(_init$1, 11, this);
    __privateAdd$1(this, __a, __runInitializers$1(_init$1, 12, this, LOCKED)), __runInitializers$1(_init$1, 15, this);
  }
  isLocked(direction) {
    if (direction === ScrollDirection.Idle) {
      return false;
    }
    if (direction == null) {
      return this[ScrollDirection.Forward] === LOCKED && this[ScrollDirection.Reverse] === LOCKED;
    }
    return this[direction] === LOCKED;
  }
  unlock(direction) {
    if (direction === ScrollDirection.Idle) {
      return;
    }
    this[direction] = UNLOCKED;
  }
};
_init$1 = __decoratorStart$1(null);
__b = new WeakMap();
__a = new WeakMap();
__decorateElement$1(_init$1, 4, _b, _dec2, ScrollLock, __b);
__decorateElement$1(_init$1, 4, _a, _dec, ScrollLock, __a);
__decoratorMetadata$1(_init$1, ScrollLock);

// src/core/plugins/scrolling/ScrollIntent.ts
var DIRECTIONS = [ScrollDirection.Forward, ScrollDirection.Reverse];
var ScrollIntent = class {
  constructor() {
    this.x = new ScrollLock();
    this.y = new ScrollLock();
  }
  isLocked() {
    return this.x.isLocked() && this.y.isLocked();
  }
};
var ScrollIntentTracker = class extends Plugin {
  constructor(manager) {
    super(manager);
    const scrollIntent = d(new ScrollIntent());
    let previousDelta = null;
    this.signal = scrollIntent;
    E(() => {
      const { status } = manager.dragOperation;
      if (!status.initialized) {
        previousDelta = null;
        scrollIntent.value = new ScrollIntent();
        return;
      }
      const { delta } = manager.dragOperation.position;
      if (previousDelta) {
        const directions = {
          x: getDirection$2(delta.x, previousDelta.x),
          y: getDirection$2(delta.y, previousDelta.y)
        };
        const intent = scrollIntent.peek();
        r$1(() => {
          for (const axis of Axes) {
            for (const direction of DIRECTIONS) {
              if (directions[axis] === direction) {
                intent[axis].unlock(direction);
              }
            }
          }
          scrollIntent.value = intent;
        });
      }
      previousDelta = delta;
    });
  }
  get current() {
    return this.signal.peek();
  }
};
function getDirection$2(a, b) {
  return Math.sign(a - b);
}

// src/core/plugins/scrolling/Scroller.ts
var _autoScrolling_dec, _a2, _init2, _autoScrolling, _meta, _scroll;
var Scroller = class extends (_a2 = CorePlugin, _autoScrolling_dec = [reactive], _a2) {
  constructor(manager) {
    super(manager);
    __privateAdd$1(this, _autoScrolling, __runInitializers$1(_init2, 8, this, false)), __runInitializers$1(_init2, 11, this);
    __privateAdd$1(this, _meta);
    __privateAdd$1(this, _scroll, () => {
      if (!__privateGet$1(this, _meta)) {
        return;
      }
      const { element, by } = __privateGet$1(this, _meta);
      if (by.y) element.scrollTop += by.y;
      if (by.x) element.scrollLeft += by.x;
    });
    this.scroll = (options) => {
      var _a3;
      if (this.disabled) {
        return false;
      }
      const elements = this.getScrollableElements();
      if (!elements) {
        __privateSet$1(this, _meta, void 0);
        return false;
      }
      const { position } = this.manager.dragOperation;
      const currentPosition = position == null ? void 0 : position.current;
      if (currentPosition) {
        const { by } = options != null ? options : {};
        const intent = by ? {
          x: getScrollIntent(by.x),
          y: getScrollIntent(by.y)
        } : void 0;
        const scrollIntent = intent ? void 0 : this.scrollIntentTracker.current;
        if (scrollIntent == null ? void 0 : scrollIntent.isLocked()) {
          return false;
        }
        for (const scrollableElement of elements) {
          const elementCanScroll = canScroll(scrollableElement, by);
          if (elementCanScroll.x || elementCanScroll.y) {
            const { speed, direction } = detectScrollIntent(
              scrollableElement,
              currentPosition,
              intent
            );
            if (scrollIntent) {
              for (const axis of Axes) {
                if (scrollIntent[axis].isLocked(direction[axis])) {
                  speed[axis] = 0;
                  direction[axis] = 0;
                }
              }
            }
            if (direction.x || direction.y) {
              const { x, y } = by != null ? by : direction;
              const scrollLeftBy = x * speed.x;
              const scrollTopBy = y * speed.y;
              if (scrollLeftBy || scrollTopBy) {
                const previousScrollBy = (_a3 = __privateGet$1(this, _meta)) == null ? void 0 : _a3.by;
                if (this.autoScrolling && previousScrollBy) {
                  const scrollIntentMismatch = previousScrollBy.x && !scrollLeftBy || previousScrollBy.y && !scrollTopBy;
                  if (scrollIntentMismatch) continue;
                }
                __privateSet$1(this, _meta, {
                  element: scrollableElement,
                  by: {
                    x: scrollLeftBy,
                    y: scrollTopBy
                  }
                });
                scheduler.schedule(__privateGet$1(this, _scroll));
                return true;
              }
            }
          }
        }
      }
      __privateSet$1(this, _meta, void 0);
      return false;
    };
    let previousElementFromPoint = null;
    let previousScrollableElements = null;
    const elementFromPoint = computed(() => {
      const { position } = manager.dragOperation;
      if (!position) {
        return null;
      }
      const element = getElementFromPoint(document, position.current);
      if (element) {
        previousElementFromPoint = element;
      }
      return element != null ? element : previousElementFromPoint;
    });
    const scrollableElements = computed(() => {
      const element = elementFromPoint.value;
      const { documentElement } = getDocument(element);
      if (!element || element === documentElement) {
        const { target } = manager.dragOperation;
        const targetElement = target == null ? void 0 : target.element;
        if (targetElement) {
          const elements = getScrollableAncestors(targetElement, {
            excludeElement: false
          });
          previousScrollableElements = elements;
          return elements;
        }
      }
      if (element) {
        const elements = getScrollableAncestors(element, {
          excludeElement: false
        });
        if (this.autoScrolling && previousScrollableElements && elements.size < (previousScrollableElements == null ? void 0 : previousScrollableElements.size)) {
          return previousScrollableElements;
        }
        previousScrollableElements = elements;
        return elements;
      }
      previousScrollableElements = null;
      return null;
    }, deepEqual$1);
    this.getScrollableElements = () => {
      return scrollableElements.value;
    };
    this.scrollIntentTracker = new ScrollIntentTracker(manager);
    this.destroy = manager.monitor.addEventListener("dragmove", (event) => {
      if (this.disabled || event.defaultPrevented || !isKeyboardEvent(manager.dragOperation.activatorEvent) || !event.by) {
        return;
      }
      if (this.scroll({ by: event.by })) {
        event.preventDefault();
      }
    });
  }
};
_init2 = __decoratorStart$1(_a2);
_autoScrolling = new WeakMap();
_meta = new WeakMap();
_scroll = new WeakMap();
__decorateElement$1(_init2, 4, "autoScrolling", _autoScrolling_dec, Scroller, _autoScrolling);
__decoratorMetadata$1(_init2, Scroller);
function getScrollIntent(value) {
  if (value > 0) {
    return ScrollDirection.Forward;
  }
  if (value < 0) {
    return ScrollDirection.Reverse;
  }
  return ScrollDirection.Idle;
}
var AUTOSCROLL_INTERVAL = 10;
var AutoScroller = class extends Plugin {
  constructor(manager, _options) {
    super(manager);
    const scroller = manager.registry.plugins.get(Scroller);
    if (!scroller) {
      throw new Error("AutoScroller plugin depends on Scroller plugin");
    }
    this.destroy = E(() => {
      if (this.disabled) {
        return;
      }
      const { position: _, status } = manager.dragOperation;
      if (status.dragging) {
        const canScroll2 = scroller.scroll();
        if (canScroll2) {
          scroller.autoScrolling = true;
          const interval = setInterval(scroller.scroll, AUTOSCROLL_INTERVAL);
          return () => {
            clearInterval(interval);
          };
        } else {
          scroller.autoScrolling = false;
        }
      }
    });
  }
};
var listenerOptions = {
  capture: true,
  passive: true
};
var _timeout;
var ScrollListener = class extends CorePlugin {
  constructor(manager) {
    super(manager);
    __privateAdd$1(this, _timeout);
    this.handleScroll = () => {
      if (__privateGet$1(this, _timeout) == null) {
        __privateSet$1(this, _timeout, setTimeout(() => {
          this.manager.collisionObserver.forceUpdate(false);
          __privateSet$1(this, _timeout, void 0);
        }, 50));
      }
    };
    const { dragOperation } = this.manager;
    this.destroy = E(() => {
      var _a3, _b2, _c3;
      const enabled = dragOperation.status.dragging;
      if (enabled) {
        const root = (_c3 = (_b2 = (_a3 = dragOperation.source) == null ? void 0 : _a3.element) == null ? void 0 : _b2.ownerDocument) != null ? _c3 : document;
        root.addEventListener("scroll", this.handleScroll, listenerOptions);
        return () => {
          root.removeEventListener(
            "scroll",
            this.handleScroll,
            listenerOptions
          );
        };
      }
    });
  }
};
_timeout = new WeakMap();
var PreventSelection = class extends Plugin {
  constructor(manager) {
    super(manager);
    this.manager = manager;
    this.destroy = E(() => {
      const { dragOperation } = this.manager;
      if (dragOperation.status.initialized) {
        const style = document.createElement("style");
        style.innerText = `* { user-select: none !important;, -webkit-user-select: none !important; }`;
        document.head.appendChild(style);
        document.addEventListener("selectionchange", removeSelection, {
          capture: true
        });
        return () => {
          document.removeEventListener("selectionchange", removeSelection, {
            capture: true
          });
          style.remove();
        };
      }
    });
  }
};
function removeSelection() {
  var _a3;
  (_a3 = document.getSelection()) == null ? void 0 : _a3.removeAllRanges();
}
var DEFAULT_KEYBOARD_CODES = {
  start: ["Space", "Enter"],
  cancel: ["Escape"],
  end: ["Space", "Enter", "Tab"],
  up: ["ArrowUp"],
  down: ["ArrowDown"],
  left: ["ArrowLeft"],
  right: ["ArrowRight"]
};
var DEFAULT_OFFSET = 10;
var _cleanupFunctions;
var KeyboardSensor = class extends Sensor {
  constructor(manager, options) {
    super(manager);
    this.manager = manager;
    this.options = options;
    __privateAdd$1(this, _cleanupFunctions, []);
    this.listeners = new Listeners();
    this.handleSourceKeyDown = (event, source, options) => {
      if (this.disabled || event.defaultPrevented) {
        return;
      }
      if (!isElement(event.target)) {
        return;
      }
      if (source.disabled) {
        return;
      }
      if (!source.handle && source.element && event.target === source.element || source.handle && event.target === source.handle) {
        const { keyboardCodes = DEFAULT_KEYBOARD_CODES } = options != null ? options : {};
        if (!keyboardCodes.start.includes(event.code)) {
          return;
        }
        if (!this.manager.dragOperation.status.idle) {
          return;
        }
        this.handleStart(event, source, options);
      }
    };
  }
  bind(source, options = this.options) {
    const unbind = E(() => {
      var _a3;
      const target = (_a3 = source.handle) != null ? _a3 : source.element;
      const listener = (event) => {
        if (isKeyboardEvent(event)) {
          this.handleSourceKeyDown(event, source, options);
        }
      };
      if (target) {
        target.addEventListener("keydown", listener);
        return () => {
          target.removeEventListener("keydown", listener);
        };
      }
    });
    return unbind;
  }
  handleStart(event, source, options) {
    const { element } = source;
    if (!element) {
      throw new Error("Source draggable does not have an associated element");
    }
    event.preventDefault();
    event.stopImmediatePropagation();
    scrollIntoViewIfNeeded(element);
    const { center } = new DOMRectangle(element);
    r$1(() => {
      this.manager.actions.setDragSource(source.id);
      this.manager.actions.start({
        event,
        coordinates: {
          x: center.x,
          y: center.y
        }
      });
    });
    this.sideEffects();
    const sourceDocument = getDocument(element);
    const sourceWindow = getWindow(sourceDocument);
    const listeners = [
      this.listeners.bind(sourceDocument, [
        {
          type: "keydown",
          listener: (event2) => this.handleKeyDown(event2, source, options),
          options: { capture: true }
        }
      ]),
      this.listeners.bind(sourceWindow, [
        { type: "resize", listener: () => this.handleEnd(true) }
      ])
    ];
    __privateGet$1(this, _cleanupFunctions).push(...listeners);
  }
  handleKeyDown(event, _source, options) {
    const { keyboardCodes = DEFAULT_KEYBOARD_CODES } = options != null ? options : {};
    if (isKeycode(event, [...keyboardCodes.end, ...keyboardCodes.cancel])) {
      event.preventDefault();
      const canceled = isKeycode(event, keyboardCodes.cancel);
      this.handleEnd(canceled);
      return;
    }
    if (isKeycode(event, keyboardCodes.up)) {
      this.handleMove("up", event);
    } else if (isKeycode(event, keyboardCodes.down)) {
      this.handleMove("down", event);
    }
    if (isKeycode(event, keyboardCodes.left)) {
      this.handleMove("left", event);
    } else if (isKeycode(event, keyboardCodes.right)) {
      this.handleMove("right", event);
    }
  }
  handleEnd(canceled) {
    this.manager.actions.stop({
      canceled
    });
    this.cleanup();
  }
  handleMove(direction, event) {
    const { shape } = this.manager.dragOperation;
    const factor = event.shiftKey ? 5 : 1;
    let offset = {
      x: 0,
      y: 0
    };
    if (!shape) {
      return;
    }
    switch (direction) {
      case "up":
        offset = { x: 0, y: -10 * factor };
        break;
      case "down":
        offset = { x: 0, y: DEFAULT_OFFSET * factor };
        break;
      case "left":
        offset = { x: -10 * factor, y: 0 };
        break;
      case "right":
        offset = { x: DEFAULT_OFFSET * factor, y: 0 };
        break;
    }
    if ((offset == null ? void 0 : offset.x) || (offset == null ? void 0 : offset.y)) {
      event.preventDefault();
      this.manager.actions.move({
        by: offset
      });
    }
  }
  sideEffects() {
    const autoScroller = this.manager.registry.plugins.get(AutoScroller);
    if ((autoScroller == null ? void 0 : autoScroller.disabled) === false) {
      autoScroller.disable();
      __privateGet$1(this, _cleanupFunctions).push(() => {
        autoScroller.enable();
      });
    }
  }
  cleanup() {
    __privateGet$1(this, _cleanupFunctions).forEach((cleanup) => cleanup());
  }
  destroy() {
    this.cleanup();
    this.listeners.clear();
  }
};
_cleanupFunctions = new WeakMap();
function isKeycode(event, codes) {
  return codes.includes(event.code);
}
var _clearTimeout$1;
var _PointerSensor$1 = class _PointerSensor extends Sensor {
  constructor(manager, options) {
    super(manager);
    this.manager = manager;
    this.options = options;
    this.listeners = new Listeners();
    this.cleanup = /* @__PURE__ */ new Set();
    __privateAdd$1(this, _clearTimeout$1);
    this.handleCancel = this.handleCancel.bind(this);
    this.handlePointerUp = this.handlePointerUp.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  bind(source, options = this.options) {
    const unbind = E(() => {
      var _a3;
      const target = (_a3 = source.handle) != null ? _a3 : source.element;
      const listener = (event) => {
        if (isPointerEvent(event)) {
          this.handlePointerDown(event, source, options);
        }
      };
      if (target) {
        patchWindow$1(target.ownerDocument.defaultView);
        target.addEventListener("pointerdown", listener);
        return () => {
          target.removeEventListener("pointerdown", listener);
        };
      }
    });
    return unbind;
  }
  handlePointerDown(event, source, options = {}) {
    if (this.disabled || !event.isPrimary || event.button !== 0 || !isElement(event.target) || source.disabled || isCapturedBySensor(event)) {
      return;
    }
    const { target } = event;
    const isNativeDraggable = isHTMLElement(target) && target.draggable && target.getAttribute("draggable") === "true";
    const offset = getFrameTransform(source.element);
    this.initialCoordinates = {
      x: event.clientX * offset.scaleX + offset.x,
      y: event.clientY * offset.scaleY + offset.y
    };
    const { activationConstraints } = options;
    const constraints = typeof activationConstraints === "function" ? activationConstraints(event, source) : activationConstraints;
    event.sensor = this;
    if (!(constraints == null ? void 0 : constraints.delay) && !(constraints == null ? void 0 : constraints.distance)) {
      this.handleStart(source, event);
    } else {
      const { delay } = constraints;
      if (delay) {
        const timeout = setTimeout(
          () => this.handleStart(source, event),
          delay.value
        );
        __privateSet$1(this, _clearTimeout$1, () => {
          clearTimeout(timeout);
          __privateSet$1(this, _clearTimeout$1, void 0);
        });
      }
    }
    const ownerDocument = getDocument(event.target);
    const unbindListeners = this.listeners.bind(ownerDocument, [
      {
        type: "pointermove",
        listener: (event2) => this.handlePointerMove(event2, source, options)
      },
      {
        type: "pointerup",
        listener: this.handlePointerUp,
        options: {
          capture: true
        }
      },
      {
        // Cancel activation if there is a competing Drag and Drop interaction
        type: "dragstart",
        listener: isNativeDraggable ? this.handleCancel : preventDefault$1
      }
    ]);
    const cleanup = () => {
      var _a3;
      setTimeout(unbindListeners);
      (_a3 = __privateGet$1(this, _clearTimeout$1)) == null ? void 0 : _a3.call(this);
      this.initialCoordinates = void 0;
    };
    this.cleanup.add(cleanup);
  }
  handlePointerMove(event, source, options) {
    const coordinates = {
      x: event.clientX,
      y: event.clientY
    };
    const offset = getFrameTransform(source.element);
    coordinates.x = coordinates.x * offset.scaleX + offset.x;
    coordinates.y = coordinates.y * offset.scaleY + offset.y;
    if (this.manager.dragOperation.status.dragging) {
      event.preventDefault();
      event.stopPropagation();
      this.manager.actions.move({ to: coordinates });
      return;
    }
    if (!this.initialCoordinates) {
      return;
    }
    const delta = {
      x: coordinates.x - this.initialCoordinates.x,
      y: coordinates.y - this.initialCoordinates.y
    };
    const { activationConstraints } = options;
    const constraints = typeof activationConstraints === "function" ? activationConstraints(event, source) : activationConstraints;
    const { distance, delay } = constraints != null ? constraints : {};
    if (distance) {
      if (distance.tolerance != null && exceedsDistance(delta, distance.tolerance)) {
        return this.handleCancel();
      }
      if (exceedsDistance(delta, distance.value)) {
        return this.handleStart(source, event);
      }
    }
    if (delay) {
      if (exceedsDistance(delta, delay.tolerance)) {
        return this.handleCancel();
      }
    }
  }
  handlePointerUp(event) {
    const { status } = this.manager.dragOperation;
    if (!status.idle) {
      event.preventDefault();
      event.stopPropagation();
      const canceled = !status.initialized;
      this.manager.actions.stop({ canceled });
    }
    this.cleanup.forEach((cleanup) => cleanup());
    this.cleanup.clear();
  }
  handleKeyDown(event) {
    if (event.key === "Escape") {
      event.preventDefault();
      this.handleCancel();
    }
  }
  handleStart(source, event) {
    var _a3;
    const { manager, initialCoordinates } = this;
    (_a3 = __privateGet$1(this, _clearTimeout$1)) == null ? void 0 : _a3.call(this);
    if (!initialCoordinates || manager.dragOperation.status.initialized) {
      return;
    }
    if (event.defaultPrevented) {
      return;
    }
    event.preventDefault();
    r$1(() => {
      manager.actions.setDragSource(source.id);
      manager.actions.start({ coordinates: initialCoordinates, event });
    });
    const ownerDocument = getDocument(event.target);
    const unbind = this.listeners.bind(ownerDocument, [
      {
        // Prevent scrolling on touch devices
        type: "touchmove",
        listener: preventDefault$1,
        options: {
          passive: false
        }
      },
      {
        // Prevent click events
        type: "click",
        listener: preventDefault$1
      },
      {
        type: "keydown",
        listener: this.handleKeyDown
      }
    ]);
    ownerDocument.body.setPointerCapture(event.pointerId);
    this.cleanup.add(unbind);
  }
  handleCancel() {
    const { dragOperation } = this.manager;
    if (dragOperation.status.initialized) {
      this.manager.actions.stop({ canceled: true });
    }
    this.cleanup.forEach((cleanup) => cleanup());
    this.cleanup.clear();
  }
  destroy() {
    this.listeners.clear();
  }
};
_clearTimeout$1 = new WeakMap();
_PointerSensor$1.configure = configurator(_PointerSensor$1);
var PointerSensor$1 = _PointerSensor$1;
function isCapturedBySensor(event) {
  return "sensor" in event;
}
function preventDefault$1(event) {
  event.preventDefault();
}
function noop$1() {
}
var windows$1 = /* @__PURE__ */ new WeakSet();
function patchWindow$1(window) {
  if (!window || windows$1.has(window)) {
    return;
  }
  window.addEventListener("touchmove", noop$1, {
    capture: false,
    passive: false
  });
  windows$1.add(window);
}

// src/core/manager/manager.ts
var defaultPreset = {
  modifiers: [],
  plugins: [Accessibility, AutoScroller, Cursor, Feedback, PreventSelection],
  sensors: [
    PointerSensor$1.configure({
      activationConstraints(event, source) {
        var _a3;
        const { pointerType, target } = event;
        if (pointerType === "mouse" && isElement(target) && (source.handle === target || ((_a3 = source.handle) == null ? void 0 : _a3.contains(target)))) {
          return void 0;
        }
        return {
          delay: { value: 200, tolerance: 10 },
          distance: { value: 5 }
        };
      }
    }),
    KeyboardSensor
  ]
};
var DragDropManager = class extends DragDropManager$1 {
  constructor(input = {}) {
    const {
      plugins = defaultPreset.plugins,
      sensors = defaultPreset.sensors,
      modifiers = []
    } = input;
    super(__spreadProps$4(__spreadValues$4({}, input), {
      plugins: [ScrollListener, Scroller, ...plugins],
      sensors,
      modifiers
    }));
  }
};
var _feedback_dec, _element_dec, _handle_dec, _c, _init3, _handle, _element$1, _feedback;
var Draggable = class extends (_c = Draggable$1, _handle_dec = [reactive], _element_dec = [reactive], _feedback_dec = [reactive], _c) {
  constructor(_a3, manager) {
    var _b2 = _a3, {
      element,
      effects: effects2 = () => [],
      handle,
      feedback = "default"
    } = _b2, input = __objRest$2(_b2, [
      "element",
      "effects",
      "handle",
      "feedback"
    ]);
    super(
      __spreadValues$4({
        effects: () => [
          ...effects2(),
          () => {
            var _a4, _b3;
            const { manager: manager2 } = this;
            if (!manager2) return;
            const sensors = (_b3 = (_a4 = this.sensors) == null ? void 0 : _a4.map(descriptor)) != null ? _b3 : [
              ...manager2.sensors
            ];
            const unbindFunctions = sensors.map((entry) => {
              const sensorInstance = entry instanceof Sensor ? entry : manager2.registry.register(entry.plugin);
              const options = entry instanceof Sensor ? void 0 : entry.options;
              const unbind = sensorInstance.bind(this, options);
              return unbind;
            });
            return function cleanup() {
              unbindFunctions.forEach((unbind) => unbind());
            };
          }
        ]
      }, input),
      manager
    );
    __privateAdd$1(this, _handle, __runInitializers$1(_init3, 8, this)), __runInitializers$1(_init3, 11, this);
    __privateAdd$1(this, _element$1, __runInitializers$1(_init3, 12, this)), __runInitializers$1(_init3, 15, this);
    __privateAdd$1(this, _feedback, __runInitializers$1(_init3, 16, this)), __runInitializers$1(_init3, 19, this);
    this.element = element;
    this.handle = handle;
    this.feedback = feedback;
  }
};
_init3 = __decoratorStart$1(_c);
_handle = new WeakMap();
_element$1 = new WeakMap();
_feedback = new WeakMap();
__decorateElement$1(_init3, 4, "handle", _handle_dec, Draggable, _handle);
__decorateElement$1(_init3, 4, "element", _element_dec, Draggable, _element$1);
__decorateElement$1(_init3, 4, "feedback", _feedback_dec, Draggable, _feedback);
__decoratorMetadata$1(_init3, Draggable);
var _proxy_dec, _element_dec2, _c2, _init4, _element2, _d, element_get, element_set, _Droppable_instances, _proxy;
var Droppable = class extends (_c2 = Droppable$1, _element_dec2 = [reactive], _proxy_dec = [reactive], _c2) {
  constructor(_a3, manager) {
    var _b2 = _a3, { element, effects: effects2 = () => [] } = _b2, input = __objRest$2(_b2, ["element", "effects"]);
    const { collisionDetector = defaultCollisionDetection } = input;
    const updateShape = (boundingClientRect) => {
      const { manager: manager2, element: element2 } = this;
      if (!element2 || boundingClientRect === null) {
        this.shape = void 0;
        return void 0;
      }
      if (!manager2) return;
      const updatedShape = new DOMRectangle(element2);
      const shape = n$1(() => this.shape);
      if (updatedShape && (shape == null ? void 0 : shape.equals(updatedShape))) {
        return shape;
      }
      this.shape = updatedShape;
      return updatedShape;
    };
    const observePosition = d(false);
    super(
      __spreadProps$4(__spreadValues$4({}, input), {
        collisionDetector,
        effects: () => [
          ...effects2(),
          () => {
            const { element: element2, manager: manager2 } = this;
            if (!manager2) return;
            const { dragOperation } = manager2;
            const { source } = dragOperation;
            observePosition.value = Boolean(
              source && dragOperation.status.initialized && element2 && !this.disabled && this.accepts(source)
            );
          },
          () => {
            const { element: element2 } = this;
            if (observePosition.value && element2) {
              const positionObserver = new PositionObserver(
                element2,
                updateShape
              );
              return () => {
                positionObserver.disconnect();
                this.shape = void 0;
              };
            }
          },
          () => {
            var _a4;
            if ((_a4 = this.manager) == null ? void 0 : _a4.dragOperation.status.initialized) {
              return () => {
                this.shape = void 0;
              };
            }
          }
        ]
      }),
      manager
    );
    __privateAdd$1(this, _Droppable_instances);
    __privateAdd$1(this, _element2, __runInitializers$1(_init4, 8, this)), __runInitializers$1(_init4, 11, this);
    __privateAdd$1(this, _proxy, __runInitializers$1(_init4, 12, this)), __runInitializers$1(_init4, 15, this);
    this.element = element;
    this.refreshShape = () => updateShape();
  }
  set element(element) {
    __privateSet$1(this, _Droppable_instances, element, element_set);
  }
  get element() {
    var _a3;
    return (_a3 = this.proxy) != null ? _a3 : __privateGet$1(this, _Droppable_instances, element_get);
  }
};
_init4 = __decoratorStart$1(_c2);
_element2 = new WeakMap();
_Droppable_instances = new WeakSet();
_proxy = new WeakMap();
_d = __decorateElement$1(_init4, 20, "#element", _element_dec2, _Droppable_instances, _element2), element_get = _d.get, element_set = _d.set;
__decorateElement$1(_init4, 4, "proxy", _proxy_dec, Droppable, _proxy);
__decoratorMetadata$1(_init4, Droppable);

// src/utilities/currentValue.ts
function isRef(value) {
  return value != null && typeof value === "object" && "current" in value;
}
function currentValue(value) {
  var _a;
  if (value == null) {
    return void 0;
  }
  if (isRef(value)) {
    return (_a = value.current) != null ? _a : void 0;
  }
  return value;
}

const {useRef: useRef$3,useLayoutEffect: useLayoutEffect$2,useEffect: useEffect$3,useMemo: useMemo$1,useState: useState$3} = await importShared('react');
const {flushSync} = await importShared('react-dom');

function useConstant(initializer) {
  const ref = useRef$3(null);
  if (!ref.current) {
    ref.current = initializer();
  }
  return ref.current;
}
var canUseDOM = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
var useIsomorphicLayoutEffect = canUseDOM ? useLayoutEffect$2 : useEffect$3;

// src/hooks/useSignal.ts
function useSignal(signal, sync = false) {
  let val = signal.peek();
  const read = useRef$3(false);
  const update = useState$3(val)[1];
  useIsomorphicLayoutEffect(
    () => E(() => {
      if (val !== (val = signal.value)) {
        if (!read.current) return;
        if (sync) {
          flushSync(() => update(val));
        } else {
          update(val);
        }
      }
    }),
    [signal, sync]
  );
  return {
    get value() {
      read.current = true;
      return signal.value;
    }
  };
}

// src/hooks/useComputed.ts
function useComputed(compute, dependencies = [], sync = false) {
  const $compute = useRef$3(compute);
  $compute.current = compute;
  return useSignal(
    useMemo$1(() => computed(() => $compute.current()), dependencies),
    sync
  );
}

// src/hooks/useImmediateEffect.ts
function useImmediateEffect(callback, _) {
  callback();
}
function useLatest(value) {
  const valueRef = useRef$3(value);
  useIsomorphicLayoutEffect(() => {
    valueRef.current = value;
  }, [value]);
  return valueRef;
}
function useOnValueChange$1(value, onChange, effect2 = useEffect$3, compare = Object.is) {
  const tracked = useRef$3(value);
  effect2(() => {
    const oldValue = tracked.current;
    if (!compare(value, oldValue)) {
      tracked.current = value;
      onChange(value, oldValue);
    }
  }, [onChange, value]);
}
function useOnElementChange(value, onChange) {
  const previous = useRef$3(currentValue(value));
  useIsomorphicLayoutEffect(() => {
    const current = currentValue(value);
    if (current !== previous.current) {
      previous.current = current;
      onChange(current);
    }
  });
}

const {createContext: createContext$2,useState: useState$2,useEffect: useEffect$2,startTransition,useContext: useContext$2,useCallback: useCallback$3,useTransition,useRef: useRef$2,useLayoutEffect: useLayoutEffect$1} = await importShared('react');

var __defProp$3 = Object.defineProperty;
var __defProps$3 = Object.defineProperties;
var __getOwnPropDescs$3 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$3 = Object.getOwnPropertySymbols;
var __hasOwnProp$3 = Object.prototype.hasOwnProperty;
var __propIsEnum$3 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$3 = (obj, key, value) => key in obj ? __defProp$3(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$3 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$3.call(b, prop))
      __defNormalProp$3(a, prop, b[prop]);
  if (__getOwnPropSymbols$3)
    for (var prop of __getOwnPropSymbols$3(b)) {
      if (__propIsEnum$3.call(b, prop))
        __defNormalProp$3(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$3 = (a, b) => __defProps$3(a, __getOwnPropDescs$3(b));
var __objRest$1 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$3.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$3)
    for (var prop of __getOwnPropSymbols$3(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$3.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var defaultManager = new DragDropManager();
var DragDropContext$1 = createContext$2(
  defaultManager
);
function useRenderer() {
  const [_, startTransition2] = useTransition();
  const [transitionCount, setTransitionCount] = useState$2(0);
  const rendering = useRef$2(null);
  const resolver = useRef$2(null);
  const renderer = useConstant(() => ({
    get rendering() {
      var _a;
      return (_a = rendering.current) != null ? _a : Promise.resolve();
    }
  }));
  useOnValueChange$1(
    transitionCount,
    () => {
      var _a;
      (_a = resolver.current) == null ? void 0 : _a.call(resolver);
      rendering.current = null;
    },
    useLayoutEffect$1
  );
  return {
    renderer,
    trackRendering(callback) {
      if (!rendering.current) {
        rendering.current = new Promise((resolve) => {
          resolver.current = resolve;
        });
      }
      startTransition2(() => {
        callback();
        setTransitionCount((count) => count + 1);
      });
    }
  };
}
var options = [void 0, deepEqual$1];
function DragDropProvider(_a) {
  var _b = _a, {
    children,
    onCollision,
    onBeforeDragStart,
    onDragStart,
    onDragMove,
    onDragOver,
    onDragEnd
  } = _b, input = __objRest$1(_b, [
    "children",
    "onCollision",
    "onBeforeDragStart",
    "onDragStart",
    "onDragMove",
    "onDragOver",
    "onDragEnd"
  ]);
  var _a2;
  const { renderer, trackRendering } = useRenderer();
  const [manager, setManager] = useState$2(
    (_a2 = input.manager) != null ? _a2 : null
  );
  const { plugins, modifiers, sensors } = input;
  const handleBeforeDragStart = useLatest(onBeforeDragStart);
  const handleDragStart = useLatest(onDragStart);
  const handleDragOver = useLatest(onDragOver);
  const handleDragMove = useLatest(onDragMove);
  const handleDragEnd = useLatest(onDragEnd);
  const handleCollision = useLatest(onCollision);
  useEffect$2(() => {
    var _a3;
    const manager2 = (_a3 = input.manager) != null ? _a3 : new DragDropManager(input);
    manager2.renderer = renderer;
    manager2.monitor.addEventListener("beforedragstart", (event, manager3) => {
      const callback = handleBeforeDragStart.current;
      if (callback) {
        trackRendering(() => callback(event, manager3));
      }
    });
    manager2.monitor.addEventListener(
      "dragstart",
      (event, manager3) => {
        var _a4;
        return (_a4 = handleDragStart.current) == null ? void 0 : _a4.call(handleDragStart, event, manager3);
      }
    );
    manager2.monitor.addEventListener("dragover", (event, manager3) => {
      const callback = handleDragOver.current;
      if (callback) {
        trackRendering(() => callback(event, manager3));
      }
    });
    manager2.monitor.addEventListener("dragmove", (event, manager3) => {
      const callback = handleDragMove.current;
      if (callback) {
        trackRendering(() => callback(event, manager3));
      }
    });
    manager2.monitor.addEventListener("dragend", (event, manager3) => {
      const callback = handleDragEnd.current;
      if (callback) {
        trackRendering(() => callback(event, manager3));
      }
    });
    manager2.monitor.addEventListener(
      "collision",
      (event, manager3) => {
        var _a4;
        return (_a4 = handleCollision.current) == null ? void 0 : _a4.call(handleCollision, event, manager3);
      }
    );
    startTransition(() => setManager(manager2));
    return manager2.destroy;
  }, [renderer, input.manager]);
  useOnValueChange$1(
    plugins,
    () => manager && (manager.plugins = plugins != null ? plugins : defaultPreset.plugins),
    ...options
  );
  useOnValueChange$1(
    sensors,
    () => manager && (manager.sensors = sensors != null ? sensors : defaultPreset.sensors),
    ...options
  );
  useOnValueChange$1(
    modifiers,
    () => manager && (manager.modifiers = modifiers != null ? modifiers : defaultPreset.modifiers),
    ...options
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(DragDropContext$1.Provider, { value: manager, children });
}
function useDragDropManager() {
  return useContext$2(DragDropContext$1);
}

// src/core/hooks/useInstance.ts
function useInstance(initializer) {
  var _a;
  const manager = (_a = useDragDropManager()) != null ? _a : void 0;
  const [instance] = useState$2(() => initializer(void 0));
  if (instance.manager !== manager) {
    instance.manager = manager;
  }
  useIsomorphicLayoutEffect(instance.register, [manager, instance]);
  return instance;
}

// src/core/draggable/useDraggable.ts
function useDraggable(input) {
  const { disabled, data, element, handle, id, modifiers, sensors } = input;
  const draggable = useInstance(
    (manager) => new Draggable(
      __spreadProps$3(__spreadValues$3({}, input), {
        handle: currentValue(handle),
        element: currentValue(element)
      }),
      manager
    )
  );
  const isDragSource = useComputed(() => draggable.isDragSource, [draggable]);
  const status = useComputed(() => draggable.status, [draggable]);
  useOnValueChange$1(id, () => draggable.id = id);
  useOnElementChange(handle, (handle2) => draggable.handle = handle2);
  useOnElementChange(element, (element2) => draggable.element = element2);
  useOnValueChange$1(data, () => data && (draggable.data = data));
  useOnValueChange$1(disabled, () => draggable.disabled = disabled === true);
  useOnValueChange$1(sensors, () => draggable.sensors = sensors);
  useOnValueChange$1(
    modifiers,
    () => draggable.modifiers = modifiers,
    void 0,
    deepEqual$1
  );
  useOnValueChange$1(
    input.feedback,
    () => {
      var _a;
      return draggable.feedback = (_a = input.feedback) != null ? _a : "default";
    }
  );
  return {
    draggable,
    get isDragSource() {
      return isDragSource.value;
    },
    get status() {
      return status.value;
    },
    handleRef: useCallback$3(
      (element2) => {
        draggable.handle = element2 != null ? element2 : void 0;
      },
      [draggable]
    ),
    ref: useCallback$3(
      (element2) => {
        var _a, _b;
        if (!element2 && ((_a = draggable.element) == null ? void 0 : _a.isConnected) && !((_b = draggable.manager) == null ? void 0 : _b.dragOperation.status.idle)) {
          return;
        }
        draggable.element = element2 != null ? element2 : void 0;
      },
      [draggable]
    )
  };
}
function useDroppable(input) {
  const { collisionDetector, data, disabled, element, id, accept, type } = input;
  const droppable = useInstance(
    (manager) => new Droppable(
      __spreadProps$3(__spreadValues$3({}, input), {
        element: currentValue(element)
      }),
      manager
    )
  );
  const isDropTarget = useComputed(() => droppable.isDropTarget, [droppable]);
  useOnValueChange$1(id, () => droppable.id = id);
  useOnElementChange(element, (element2) => droppable.element = element2);
  useOnValueChange$1(accept, () => droppable.id = id, void 0, deepEqual$1);
  useOnValueChange$1(collisionDetector, () => droppable.id = id);
  useOnValueChange$1(data, () => data && (droppable.data = data));
  useOnValueChange$1(disabled, () => droppable.disabled = disabled === true);
  useOnValueChange$1(type, () => droppable.id = id);
  return {
    get isDropTarget() {
      return isDropTarget.value;
    },
    ref: useCallback$3(
      (element2) => {
        var _a, _b;
        if (!element2 && ((_a = droppable.element) == null ? void 0 : _a.isConnected) && !((_b = droppable.manager) == null ? void 0 : _b.dragOperation.status.idle)) {
          return;
        }
        droppable.element = element2 != null ? element2 : void 0;
      },
      [droppable]
    ),
    droppable
  };
}

var __create = Object.create;
var __defProp$2 = Object.defineProperty;
var __defProps$2 = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs$2 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$2 = Object.getOwnPropertySymbols;
var __hasOwnProp$2 = Object.prototype.hasOwnProperty;
var __propIsEnum$2 = Object.prototype.propertyIsEnumerable;
var __knownSymbol = (name, symbol) => (symbol = Symbol[name]) ? symbol : Symbol.for("Symbol." + name);
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp$2 = (obj, key, value) => key in obj ? __defProp$2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$2 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$2.call(b, prop))
      __defNormalProp$2(a, prop, b[prop]);
  if (__getOwnPropSymbols$2)
    for (var prop of __getOwnPropSymbols$2(b)) {
      if (__propIsEnum$2.call(b, prop))
        __defNormalProp$2(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$2 = (a, b) => __defProps$2(a, __getOwnPropDescs$2(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$2.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$2)
    for (var prop of __getOwnPropSymbols$2(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$2.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __decoratorStart = (base) => {
  var _a;
  return [, , , __create((_a = void 0 ) != null ? _a : null)];
};
var __decoratorStrings = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"];
var __expectFn = (fn) => fn !== void 0 && typeof fn !== "function" ? __typeError("Function expected") : fn;
var __decoratorContext = (kind, name, done, metadata, fns) => ({ kind: __decoratorStrings[kind], name, metadata, addInitializer: (fn) => done._ ? __typeError("Already initialized") : fns.push(__expectFn(fn || null)) });
var __decoratorMetadata = (array, target) => __defNormalProp$2(target, __knownSymbol("metadata"), array[3]);
var __runInitializers = (array, flags, self, value) => {
  for (var i = 0, fns = array[flags >> 1], n = fns && fns.length; i < n; i++) flags & 1 ? fns[i].call(self) : value = fns[i].call(self, value);
  return value;
};
var __decorateElement = (array, flags, name, decorators, target, extra) => {
  var fn, it, done, ctx, access, k = flags & 7, s = false, p = false;
  var j = array.length + 1 , key = __decoratorStrings[k + 5];
  var initializers = (array[j - 1] = []), extraInitializers = array[j] || (array[j] = []);
  var desc = ((target = target.prototype), __getOwnPropDesc({ get [name]() {
    return __privateGet(this, extra);
  }, set [name](x) {
    return __privateSet(this, extra, x);
  } }, name));
  for (var i = decorators.length - 1; i >= 0; i--) {
    ctx = __decoratorContext(k, name, done = {}, array[3], extraInitializers);
    {
      ctx.static = s, ctx.private = p, access = ctx.access = { has: (x) => name in x };
      access.get = (x) => x[name];
      access.set = (x, y) => x[name] = y;
    }
    it = (0, decorators[i])({ get: desc.get, set: desc.set } , ctx), done._ = 1;
    if (it === void 0) __expectFn(it) && (desc[key] = it );
    else if (typeof it !== "object" || it === null) __typeError("Object expected");
    else __expectFn(fn = it.get) && (desc.get = fn), __expectFn(fn = it.set) && (desc.set = fn), __expectFn(fn = it.init) && initializers.unshift(fn);
  }
  return desc && __defProp$2(target, name, desc), target;
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), member.set(obj, value), value);

// src/sortable/utilities.ts
function isSortable(element) {
  return element instanceof SortableDroppable || element instanceof SortableDraggable;
}

// src/sortable/SortableKeyboardPlugin.ts
var TOLERANCE = 10;
var SortableKeyboardPlugin = class extends Plugin {
  constructor(manager) {
    super(manager);
    const cleanupEffect = E(() => {
      const { dragOperation } = manager;
      if (!isKeyboardEvent(dragOperation.activatorEvent)) {
        return;
      }
      if (!isSortable(dragOperation.source)) {
        return;
      }
      if (dragOperation.status.initialized) {
        const scroller = manager.registry.plugins.get(Scroller);
        if (scroller) {
          scroller.disable();
          return () => scroller.enable();
        }
      }
    });
    const unsubscribe = manager.monitor.addEventListener(
      "dragmove",
      (event, manager2) => {
        queueMicrotask(() => {
          if (this.disabled || event.defaultPrevented) {
            return;
          }
          const { dragOperation } = manager2;
          if (!isKeyboardEvent(dragOperation.activatorEvent)) {
            return;
          }
          if (!isSortable(dragOperation.source)) {
            return;
          }
          if (!dragOperation.shape) {
            return;
          }
          const { actions, collisionObserver, registry } = manager2;
          const { by } = event;
          if (!by) {
            return;
          }
          const direction = getDirection$1(by);
          const { source, target } = dragOperation;
          const { center } = dragOperation.shape.current;
          const potentialTargets = [];
          const cleanup = [];
          r$1(() => {
            for (const droppable of registry.droppables) {
              const { id: id2 } = droppable;
              if (!droppable.accepts(source) || id2 === (target == null ? void 0 : target.id) && isSortable(droppable) || !droppable.element) {
                continue;
              }
              let previousShape = droppable.shape;
              const shape = new DOMRectangle(droppable.element, {
                getBoundingClientRect: (element) => getVisibleBoundingRectangle(element, void 0, 0.2)
              });
              if (!shape.height || !shape.width) continue;
              if (direction == "down" && center.y + TOLERANCE < shape.center.y || direction == "up" && center.y - TOLERANCE > shape.center.y || direction == "left" && center.x - TOLERANCE > shape.center.x || direction == "right" && center.x + TOLERANCE < shape.center.x) {
                potentialTargets.push(droppable);
                droppable.shape = shape;
                cleanup.push(() => droppable.shape = previousShape);
              }
            }
          });
          event.preventDefault();
          collisionObserver.disable();
          const collisions = collisionObserver.computeCollisions(
            potentialTargets,
            closestCorners$1
          );
          r$1(() => cleanup.forEach((clean) => clean()));
          const [firstCollision] = collisions;
          if (!firstCollision) {
            return;
          }
          const { id } = firstCollision;
          const { index, group } = source.sortable;
          actions.setDropTarget(id).then((defaultPrevented) => {
            if (defaultPrevented) return;
            const { source: source2, target: target2 } = dragOperation;
            if (!source2 || !isSortable(source2)) {
              return;
            }
            const {
              index: newIndex,
              group: newGroup,
              target: targetElement
            } = source2.sortable;
            const updated = index !== newIndex || group !== newGroup;
            const element = updated ? targetElement : target2 == null ? void 0 : target2.element;
            if (!element) return;
            scrollIntoViewIfNeeded(element);
            const shape = new DOMRectangle(element);
            if (!shape) {
              return;
            }
            actions.move({
              to: {
                x: shape.center.x,
                y: shape.center.y
              }
            });
            if (updated) {
              actions.setDropTarget(source2.id).then(() => collisionObserver.enable());
            } else {
              collisionObserver.enable();
            }
          });
        });
      }
    );
    this.destroy = () => {
      unsubscribe();
      cleanupEffect();
    };
  }
};
function getDirection$1(delta) {
  const { x, y } = delta;
  if (x > 0) {
    return "right";
  } else if (x < 0) {
    return "left";
  } else if (y > 0) {
    return "down";
  } else if (y < 0) {
    return "up";
  }
}

// ../helpers/dist/index.js
var __defProp2 = Object.defineProperty;
var __defProps2 = Object.defineProperties;
var __getOwnPropDescs2 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols2 = Object.getOwnPropertySymbols;
var __hasOwnProp2 = Object.prototype.hasOwnProperty;
var __propIsEnum2 = Object.prototype.propertyIsEnumerable;
var __defNormalProp2 = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues2 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp2.call(b, prop))
      __defNormalProp2(a, prop, b[prop]);
  if (__getOwnPropSymbols2)
    for (var prop of __getOwnPropSymbols2(b)) {
      if (__propIsEnum2.call(b, prop))
        __defNormalProp2(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps2 = (a, b) => __defProps2(a, __getOwnPropDescs2(b));
function arrayMove(array, from, to) {
  if (from === to) {
    return array;
  }
  const newArray = array.slice();
  newArray.splice(to, 0, newArray.splice(from, 1)[0]);
  return newArray;
}
function mutate(items, event, mutation) {
  var _a, _b;
  const { source, target, canceled } = event.operation;
  if (!source || !target || canceled) {
    if ("preventDefault" in event) event.preventDefault();
    return items;
  }
  const findIndex = (item, id) => item === id || typeof item === "object" && "id" in item && item.id === id;
  if (Array.isArray(items)) {
    const sourceIndex2 = items.findIndex((item) => findIndex(item, source.id));
    const targetIndex2 = items.findIndex((item) => findIndex(item, target.id));
    if (sourceIndex2 === -1 || targetIndex2 === -1) {
      return items;
    }
    if (!canceled && "index" in source && typeof source.index === "number") {
      const projectedSourceIndex = source.index;
      if (projectedSourceIndex !== sourceIndex2) {
        return mutation(items, sourceIndex2, projectedSourceIndex);
      }
    }
    return mutation(items, sourceIndex2, targetIndex2);
  }
  const entries = Object.entries(items);
  let sourceIndex = -1;
  let sourceParent;
  let targetIndex = -1;
  let targetParent;
  for (const [id, children] of entries) {
    if (sourceIndex === -1) {
      sourceIndex = children.findIndex((item) => findIndex(item, source.id));
      if (sourceIndex !== -1) {
        sourceParent = id;
      }
    }
    if (targetIndex === -1) {
      targetIndex = children.findIndex((item) => findIndex(item, target.id));
      if (targetIndex !== -1) {
        targetParent = id;
      }
    }
    if (sourceIndex !== -1 && targetIndex !== -1) {
      break;
    }
  }
  if (!source.manager) return items;
  const { dragOperation } = source.manager;
  const position = (_b = (_a = dragOperation.shape) == null ? void 0 : _a.current.center) != null ? _b : dragOperation.position.current;
  if (targetParent == null) {
    if (target.id in items) {
      const insertionIndex = target.shape && position.y > target.shape.center.y ? items[target.id].length : 0;
      targetParent = target.id;
      targetIndex = insertionIndex;
    }
  }
  if (sourceParent == null || targetParent == null || sourceParent === targetParent && sourceIndex === targetIndex) {
    if ("preventDefault" in event) event.preventDefault();
    return items;
  }
  if (sourceParent === targetParent) {
    return __spreadProps2(__spreadValues2({}, items), {
      [sourceParent]: mutation(items[sourceParent], sourceIndex, targetIndex)
    });
  }
  const isBelowTarget = target.shape && Math.round(position.y) > Math.round(target.shape.center.y);
  const modifier = isBelowTarget ? 1 : 0;
  const sourceItem = items[sourceParent][sourceIndex];
  return __spreadProps2(__spreadValues2({}, items), {
    [sourceParent]: [
      ...items[sourceParent].slice(0, sourceIndex),
      ...items[sourceParent].slice(sourceIndex + 1)
    ],
    [targetParent]: [
      ...items[targetParent].slice(0, targetIndex + modifier),
      sourceItem,
      ...items[targetParent].slice(targetIndex + modifier)
    ]
  });
}
function move(items, event) {
  return mutate(items, event, arrayMove);
}
var defaultGroup = "__default__";
var OptimisticSortingPlugin = class extends Plugin {
  constructor(manager) {
    super(manager);
    const getSortableInstances = () => {
      const sortableInstances = /* @__PURE__ */ new Map();
      for (const droppable of manager.registry.droppables) {
        if (droppable instanceof SortableDroppable) {
          const { sortable } = droppable;
          const { group } = sortable;
          let instances = sortableInstances.get(group);
          if (!instances) {
            instances = /* @__PURE__ */ new Set();
            sortableInstances.set(group, instances);
          }
          instances.add(sortable);
        }
      }
      for (const [group, instances] of sortableInstances) {
        sortableInstances.set(group, new Set(sort(instances)));
      }
      return sortableInstances;
    };
    const unsubscribe = [
      manager.monitor.addEventListener("dragover", (event, manager2) => {
        queueMicrotask(() => {
          if (this.disabled || event.defaultPrevented) {
            return;
          }
          const { dragOperation } = manager2;
          const { source, target } = dragOperation;
          if (!isSortable(source) || !isSortable(target)) {
            return;
          }
          if (source.sortable === target.sortable) {
            return;
          }
          const instances = getSortableInstances();
          const sameGroup = source.sortable.group === target.sortable.group;
          const sourceInstances = instances.get(source.sortable.group);
          const targetInstances = sameGroup ? sourceInstances : instances.get(target.sortable.group);
          if (!sourceInstances || !targetInstances) return;
          manager2.renderer.rendering.then(() => {
            var _a, _b, _c;
            const newInstances = getSortableInstances();
            for (const [group, sortableInstances] of instances.entries()) {
              const entries = Array.from(sortableInstances).entries();
              for (const [index, sortable] of entries) {
                if (sortable.index !== index || sortable.group !== group || !((_a = newInstances.get(group)) == null ? void 0 : _a.has(sortable))) {
                  return;
                }
              }
            }
            const sourceElement = source.sortable.element;
            const targetElement = target.sortable.element;
            if (!targetElement || !sourceElement) {
              return;
            }
            if (!sameGroup && target.id === source.sortable.group) {
              return;
            }
            const orderedSourceSortables = sort(sourceInstances);
            const orderedTargetSortables = sameGroup ? orderedSourceSortables : sort(targetInstances);
            const sourceGroup = (_b = source.sortable.group) != null ? _b : defaultGroup;
            const targetGroup = (_c = target.sortable.group) != null ? _c : defaultGroup;
            const state = {
              [sourceGroup]: orderedSourceSortables,
              [targetGroup]: orderedTargetSortables
            };
            const newState = move(state, event);
            if (state === newState) return;
            const sourceIndex = newState[targetGroup].indexOf(source.sortable);
            const targetIndex = newState[targetGroup].indexOf(target.sortable);
            reorder$1(sourceElement, sourceIndex, targetElement, targetIndex);
            manager2.collisionObserver.disable();
            r$1(() => {
              for (const [index, sortable] of newState[sourceGroup].entries()) {
                sortable.index = index;
              }
              if (!sameGroup) {
                for (const [index, sortable] of newState[targetGroup].entries()) {
                  sortable.group = target.sortable.group;
                  sortable.index = index;
                }
              }
            });
            manager2.actions.setDropTarget(source.id).then(() => manager2.collisionObserver.enable());
          });
        });
      }),
      manager.monitor.addEventListener("dragend", (event, manager2) => {
        if (!event.canceled) {
          return;
        }
        const { dragOperation } = manager2;
        const { source } = dragOperation;
        if (!isSortable(source)) {
          return;
        }
        if (source.sortable.initialIndex === source.sortable.index && source.sortable.initialGroup === source.sortable.group) {
          return;
        }
        queueMicrotask(() => {
          const instances = getSortableInstances();
          const initialGroupInstances = instances.get(
            source.sortable.initialGroup
          );
          if (!initialGroupInstances) return;
          manager2.renderer.rendering.then(() => {
            var _a;
            for (const [group, sortableInstances] of instances.entries()) {
              const entries = Array.from(sortableInstances).entries();
              for (const [index, sortable] of entries) {
                if (sortable.index !== index || sortable.group !== group) {
                  return;
                }
              }
            }
            const initialGroup = sort(initialGroupInstances);
            const sourceElement = source.sortable.element;
            const targetElement = (_a = initialGroup[source.sortable.initialIndex]) == null ? void 0 : _a.element;
            if (!targetElement || !sourceElement) {
              return;
            }
            reorder$1(
              sourceElement,
              source.sortable.initialIndex,
              targetElement,
              source.sortable.initialIndex
            );
            r$1(() => {
              for (const [_, sortableInstances] of instances.entries()) {
                const entries = Array.from(sortableInstances).values();
                for (const sortable of entries) {
                  sortable.index = sortable.initialIndex;
                  sortable.group = sortable.initialGroup;
                }
              }
            });
          });
        });
      })
    ];
    this.destroy = () => {
      for (const unsubscribeListener of unsubscribe) {
        unsubscribeListener();
      }
    };
  }
};
function reorder$1(sourceElement, sourceIndex, targetElement, targetIndex) {
  const position = targetIndex < sourceIndex ? "afterend" : "beforebegin";
  targetElement.insertAdjacentElement(position, sourceElement);
}
function sortByIndex(a, b) {
  return a.index - b.index;
}
function sort(instances) {
  return Array.from(instances).sort(sortByIndex);
}

// src/sortable/sortable.ts
var defaultPlugins = [
  SortableKeyboardPlugin,
  OptimisticSortingPlugin
];
var defaultSortableTransition = {
  duration: 250,
  easing: "cubic-bezier(0.25, 1, 0.5, 1)",
  idle: false
};
var _group_dec, _index_dec, _init, _index, _group, _element;
_index_dec = [reactive], _group_dec = [reactive];
var Sortable2 = class {
  constructor(_a, manager) {
    __privateAdd(this, _index, __runInitializers(_init, 8, this)), __runInitializers(_init, 11, this);
    __privateAdd(this, _group, __runInitializers(_init, 12, this)), __runInitializers(_init, 15, this);
    __privateAdd(this, _element);
    this.register = () => {
      r$1(() => {
        var _a, _b;
        (_a = this.manager) == null ? void 0 : _a.registry.register(this.droppable);
        (_b = this.manager) == null ? void 0 : _b.registry.register(this.draggable);
      });
      return () => this.unregister();
    };
    this.unregister = () => {
      r$1(() => {
        var _a, _b;
        (_a = this.manager) == null ? void 0 : _a.registry.unregister(this.droppable);
        (_b = this.manager) == null ? void 0 : _b.registry.unregister(this.draggable);
      });
    };
    this.destroy = () => {
      r$1(() => {
        this.droppable.destroy();
        this.draggable.destroy();
      });
    };
    var _b = _a, {
      effects: inputEffects = () => [],
      group,
      index,
      sensors,
      type,
      transition = defaultSortableTransition,
      plugins = defaultPlugins
    } = _b, input = __objRest(_b, [
      "effects",
      "group",
      "index",
      "sensors",
      "type",
      "transition",
      "plugins"
    ]);
    let previousGroup = group;
    this.droppable = new SortableDroppable(input, manager, this);
    this.draggable = new SortableDraggable(
      __spreadProps$2(__spreadValues$2({}, input), {
        effects: () => [
          () => {
            var _a2;
            return (_a2 = this.manager) == null ? void 0 : _a2.monitor.addEventListener("dragstart", () => {
              this.initialIndex = this.index;
              this.initialGroup = this.group;
              this.previousIndex = this.index;
            });
          },
          () => {
            const { index: index2, group: group2, previousIndex, manager: _ } = this;
            if (index2 !== previousIndex || group2 !== previousGroup) {
              this.previousIndex = index2;
              previousGroup = group2;
              this.animate();
            }
          },
          () => {
            const { target } = this;
            const { feedback, isDragSource } = this.draggable;
            if (feedback == "move" && isDragSource) {
              this.droppable.disabled = !target;
            }
          },
          () => {
            const { manager: manager2 } = this;
            for (const plugin of plugins) {
              manager2 == null ? void 0 : manager2.registry.register(plugin);
            }
          },
          ...inputEffects()
        ],
        type,
        sensors
      }),
      manager,
      this
    );
    __privateSet(this, _element, input.element);
    this.manager = manager;
    this.index = index;
    this.previousIndex = index;
    this.initialIndex = index;
    this.group = group;
    this.type = type;
    this.transition = transition;
  }
  animate() {
    n$1(() => {
      const { manager, transition } = this;
      const { shape } = this.droppable;
      if (!manager) return;
      const { idle } = manager.dragOperation.status;
      if (!shape || !transition || idle && !transition.idle) {
        return;
      }
      manager.renderer.rendering.then(() => {
        const { element } = this;
        if (!element) {
          return;
        }
        const updatedShape = this.refreshShape();
        if (!updatedShape) {
          return;
        }
        queueMicrotask(() => {
          const delta = {
            x: shape.boundingRectangle.left - updatedShape.boundingRectangle.left,
            y: shape.boundingRectangle.top - updatedShape.boundingRectangle.top
          };
          const { translate } = getComputedStyles(element);
          const currentTranslate = computeTranslate(element, translate, false);
          const finalTranslate = computeTranslate(element, translate);
          if (delta.x || delta.y) {
            animateTransform({
              element,
              keyframes: {
                translate: [
                  `${currentTranslate.x + delta.x}px ${currentTranslate.y + delta.y}px ${currentTranslate.z}`,
                  `${finalTranslate.x}px ${finalTranslate.y}px ${finalTranslate.z}`
                ]
              },
              options: transition,
              onFinish: () => {
                if (!manager.dragOperation.status.dragging) {
                  this.droppable.shape = void 0;
                }
              }
            });
          }
        });
      });
    });
  }
  get manager() {
    return this.draggable.manager;
  }
  set manager(manager) {
    r$1(() => {
      this.draggable.manager = manager;
      this.droppable.manager = manager;
    });
  }
  set element(element) {
    r$1(() => {
      const previousElement = __privateGet(this, _element);
      const droppableElement = this.droppable.element;
      const draggableElement = this.draggable.element;
      if (!droppableElement || droppableElement === previousElement) {
        this.droppable.element = element;
      }
      if (!draggableElement || draggableElement === previousElement) {
        this.draggable.element = element;
      }
      __privateSet(this, _element, element);
    });
  }
  get element() {
    var _a, _b;
    const element = __privateGet(this, _element);
    if (!element) return;
    return (_b = (_a = ProxiedElements.get(element)) != null ? _a : element) != null ? _b : this.droppable.element;
  }
  set target(target) {
    this.droppable.element = target;
  }
  get target() {
    return this.droppable.element;
  }
  set source(source) {
    this.draggable.element = source;
  }
  get source() {
    return this.draggable.element;
  }
  get disabled() {
    return this.draggable.disabled && this.droppable.disabled;
  }
  set feedback(value) {
    this.draggable.feedback = value;
  }
  set disabled(value) {
    r$1(() => {
      this.droppable.disabled = value;
      this.draggable.disabled = value;
    });
  }
  set data(data) {
    r$1(() => {
      this.droppable.data = data;
      this.draggable.data = data;
    });
  }
  set handle(handle) {
    this.draggable.handle = handle;
  }
  set id(id) {
    r$1(() => {
      this.droppable.id = id;
      this.draggable.id = id;
    });
  }
  get id() {
    return this.droppable.id;
  }
  set sensors(value) {
    this.draggable.sensors = value;
  }
  set modifiers(value) {
    this.draggable.modifiers = value;
  }
  set collisionPriority(value) {
    this.droppable.collisionPriority = value;
  }
  set collisionDetector(value) {
    this.droppable.collisionDetector = value != null ? value : defaultCollisionDetection;
  }
  set type(type) {
    r$1(() => {
      this.droppable.type = type;
      this.draggable.type = type;
    });
  }
  get type() {
    return this.draggable.type;
  }
  set accept(value) {
    this.droppable.accept = value;
  }
  get accept() {
    return this.droppable.accept;
  }
  get isDropTarget() {
    return this.droppable.isDropTarget;
  }
  /**
   * A boolean indicating whether the sortable item is the source of a drag operation.
   */
  get isDragSource() {
    return this.draggable.isDragSource;
  }
  get status() {
    return this.draggable.status;
  }
  refreshShape() {
    return this.droppable.refreshShape();
  }
  accepts(draggable) {
    return this.droppable.accepts(draggable);
  }
};
_init = __decoratorStart();
_index = new WeakMap();
_group = new WeakMap();
_element = new WeakMap();
__decorateElement(_init, 4, "index", _index_dec, Sortable2, _index);
__decorateElement(_init, 4, "group", _group_dec, Sortable2, _group);
__decoratorMetadata(_init, Sortable2);
var SortableDraggable = class extends Draggable {
  constructor(input, manager, sortable) {
    super(input, manager);
    this.sortable = sortable;
  }
  get index() {
    return this.sortable.index;
  }
};
var SortableDroppable = class extends Droppable {
  constructor(input, manager, sortable) {
    super(input, manager);
    this.sortable = sortable;
  }
};

const {useCallback: useCallback$2} = await importShared('react');

var __defProp$1 = Object.defineProperty;
var __defProps$1 = Object.defineProperties;
var __getOwnPropDescs$1 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$1 = Object.getOwnPropertySymbols;
var __hasOwnProp$1 = Object.prototype.hasOwnProperty;
var __propIsEnum$1 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1.call(b, prop))
      __defNormalProp$1(a, prop, b[prop]);
  if (__getOwnPropSymbols$1)
    for (var prop of __getOwnPropSymbols$1(b)) {
      if (__propIsEnum$1.call(b, prop))
        __defNormalProp$1(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$1 = (a, b) => __defProps$1(a, __getOwnPropDescs$1(b));
function useSortable(input) {
  const {
    accept,
    collisionDetector,
    collisionPriority,
    id,
    data,
    element,
    handle,
    index,
    group,
    disabled,
    feedback,
    modifiers,
    sensors,
    target,
    transition = defaultSortableTransition,
    type
  } = input;
  const sortable = useInstance((manager) => {
    return new Sortable2(
      __spreadProps$1(__spreadValues$1({}, input), {
        handle: currentValue(handle),
        element: currentValue(element),
        target: currentValue(target),
        feedback
      }),
      manager
    );
  });
  const isDropTarget = useComputed(() => sortable.isDropTarget, [sortable]);
  const isDragSource = useComputed(() => sortable.isDragSource, [sortable]);
  const status = useComputed(() => sortable.status, [sortable]);
  useOnValueChange$1(id, () => sortable.id = id);
  useIsomorphicLayoutEffect(() => {
    r$1(() => {
      sortable.group = group;
      sortable.index = index;
    });
  }, [sortable, group, index]);
  useOnValueChange$1(type, () => sortable.type = type);
  useOnValueChange$1(
    accept,
    () => sortable.accept = accept,
    void 0,
    deepEqual$1
  );
  useOnValueChange$1(data, () => data && (sortable.data = data));
  useOnValueChange$1(
    index,
    () => {
      var _a;
      if (((_a = sortable.manager) == null ? void 0 : _a.dragOperation.status.idle) && (transition == null ? void 0 : transition.idle)) {
        sortable.refreshShape();
      }
    },
    useImmediateEffect
  );
  useOnElementChange(handle, (handle2) => sortable.handle = handle2);
  useOnElementChange(element, (element2) => sortable.element = element2);
  useOnElementChange(target, (target2) => sortable.target = target2);
  useOnValueChange$1(disabled, () => sortable.disabled = disabled === true);
  useOnValueChange$1(sensors, () => sortable.sensors = sensors);
  useOnValueChange$1(
    collisionDetector,
    () => sortable.collisionDetector = collisionDetector
  );
  useOnValueChange$1(
    collisionPriority,
    () => sortable.collisionPriority = collisionPriority
  );
  useOnValueChange$1(feedback, () => sortable.feedback = feedback != null ? feedback : "default");
  useOnValueChange$1(transition, () => sortable.transition = transition);
  useOnValueChange$1(
    modifiers,
    () => sortable.modifiers = modifiers,
    void 0,
    deepEqual$1
  );
  return {
    get isDragSource() {
      return isDragSource.value;
    },
    get isDropTarget() {
      return isDropTarget.value;
    },
    get status() {
      return status.value;
    },
    handleRef: useCallback$2(
      (element2) => {
        sortable.handle = element2 != null ? element2 : void 0;
      },
      [sortable]
    ),
    ref: useCallback$2(
      (element2) => {
        var _a, _b;
        if (!element2 && ((_a = sortable.element) == null ? void 0 : _a.isConnected) && !((_b = sortable.manager) == null ? void 0 : _b.dragOperation.status.idle)) {
          return;
        }
        sortable.element = element2 != null ? element2 : void 0;
      },
      [sortable]
    ),
    sourceRef: useCallback$2(
      (element2) => {
        var _a, _b;
        if (!element2 && ((_a = sortable.source) == null ? void 0 : _a.isConnected) && !((_b = sortable.manager) == null ? void 0 : _b.dragOperation.status.idle)) {
          return;
        }
        sortable.source = element2 != null ? element2 : void 0;
      },
      [sortable]
    ),
    targetRef: useCallback$2(
      (element2) => {
        var _a, _b;
        if (!element2 && ((_a = sortable.target) == null ? void 0 : _a.isConnected) && !((_b = sortable.manager) == null ? void 0 : _b.dragOperation.status.idle)) {
          return;
        }
        sortable.target = element2 != null ? element2 : void 0;
      },
      [sortable]
    )
  };
}

const createStoreImpl = (createState) => {
  let state;
  const listeners = /* @__PURE__ */ new Set();
  const setState = (partial, replace) => {
    const nextState = typeof partial === "function" ? partial(state) : partial;
    if (!Object.is(nextState, state)) {
      const previousState = state;
      state = (replace != null ? replace : typeof nextState !== "object" || nextState === null) ? nextState : Object.assign({}, state, nextState);
      listeners.forEach((listener) => listener(state, previousState));
    }
  };
  const getState = () => state;
  const getInitialState = () => initialState;
  const subscribe = (listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };
  const api = { setState, getState, getInitialState, subscribe };
  const initialState = state = createState(setState, getState, api);
  return api;
};
const createStore = (createState) => createState ? createStoreImpl(createState) : createStoreImpl;

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var _AxisModifier = class _AxisModifier extends Modifier {
  apply({ transform }) {
    if (!this.options) {
      return transform;
    }
    const { axis, value } = this.options;
    return __spreadProps(__spreadValues({}, transform), {
      [axis]: value
    });
  }
};
_AxisModifier.configure = configurator(_AxisModifier);
var AxisModifier = _AxisModifier;
AxisModifier.configure({
  axis: "x",
  value: 0
});
AxisModifier.configure({
  axis: "y",
  value: 0
});

// src/modifiers/boundingRectangle.ts
function restrictShapeToBoundingRectangle(shape, transform, boundingRect) {
  const value = __spreadValues({}, transform);
  if (shape.boundingRectangle.top + transform.y <= boundingRect.top) {
    value.y = boundingRect.top - shape.boundingRectangle.top;
  } else if (shape.boundingRectangle.bottom + transform.y >= boundingRect.top + boundingRect.height) {
    value.y = boundingRect.top + boundingRect.height - shape.boundingRectangle.bottom;
  }
  if (shape.boundingRectangle.left + transform.x <= boundingRect.left) {
    value.x = boundingRect.left - shape.boundingRectangle.left;
  } else if (shape.boundingRectangle.right + transform.x >= boundingRect.left + boundingRect.width) {
    value.x = boundingRect.left + boundingRect.width - shape.boundingRectangle.right;
  }
  return value;
}
var _SnapModifier = class _SnapModifier extends Modifier {
  apply({ transform }) {
    var _a;
    const { size = 20 } = (_a = this.options) != null ? _a : {};
    const x = typeof size === "number" ? size : size.x;
    const y = typeof size === "number" ? size : size.y;
    return __spreadProps(__spreadValues({}, transform), {
      x: Math.ceil(transform.x / x) * x,
      y: Math.ceil(transform.y / y) * y
    });
  }
};
_SnapModifier.configure = configurator(_SnapModifier);

var _RestrictToElement = class _RestrictToElement extends Modifier {
  constructor(manager, options) {
    super(manager, options);
    this.boundingRectangle = d(null);
    this.destroy = E(() => {
      if (!this.options) {
        return;
      }
      const { dragOperation } = manager;
      const { status } = dragOperation;
      if (status.initialized) {
        const { element } = this.options;
        const target = typeof element === "function" ? element(dragOperation) : element;
        if (!target) {
          return;
        }
        let timeout;
        const updateBoundingRectangle = () => {
          this.boundingRectangle.value = getBoundingRectangle(target);
        };
        const handleScroll = () => {
          if (timeout) {
            return;
          }
          timeout = setTimeout(() => {
            updateBoundingRectangle();
            timeout = void 0;
          }, 25);
        };
        const resizeObserver = new ResizeObserver(updateBoundingRectangle);
        resizeObserver.observe(target);
        document.addEventListener("scroll", handleScroll, {
          passive: true,
          capture: true
        });
        return () => {
          document.removeEventListener("scroll", handleScroll, {
            capture: true
          });
          resizeObserver.disconnect();
          this.boundingRectangle.value = null;
        };
      }
    });
  }
  apply(operation) {
    const { shape, transform } = operation;
    if (!shape) {
      return transform;
    }
    const boundingRectangle = this.boundingRectangle.value;
    if (!boundingRectangle) {
      return transform;
    }
    const { initial, current } = shape;
    const { height, width } = current.boundingRectangle;
    const left = initial.center.x - width / 2;
    const top = initial.center.y - height / 2;
    const restrictedTransform = restrictShapeToBoundingRectangle(
      new Rectangle(left, top, width, height),
      transform,
      boundingRectangle
    );
    return restrictedTransform;
  }
};
_RestrictToElement.configure = configurator(_RestrictToElement);
var RestrictToElement = _RestrictToElement;

const {useRef:r,useEffect:n,useMemo:t,useCallback:u,useState:e} = await importShared('react');
function c(u,e,c){var i=this,a=r(null),o=r(0),f=r(null),l=r([]),m=r(),v=r(),d=r(u),p=r(true);n(function(){d.current=u;},[u]);var g=!e&&0!==e&&"undefined"!=typeof window;if("function"!=typeof u)throw new TypeError("Expected a function");e=+e||0;var w=!!(c=c||{}).leading,s=!("trailing"in c)||!!c.trailing,x="maxWait"in c,y=x?Math.max(+c.maxWait||0,e):null;n(function(){return p.current=true,function(){p.current=false;}},[]);var h=t(function(){var r=function(r){var n=l.current,t=m.current;return l.current=m.current=null,o.current=r,v.current=d.current.apply(t,n)},n=function(r,n){g&&cancelAnimationFrame(f.current),f.current=g?requestAnimationFrame(r):setTimeout(r,n);},t=function(r){if(!p.current)return  false;var n=r-a.current;return !a.current||n>=e||n<0||x&&r-o.current>=y},u=function(n){return f.current=null,s&&l.current?r(n):(l.current=m.current=null,v.current)},c=function r(){var c=Date.now();if(t(c))return u(c);if(p.current){var i=e-(c-a.current),f=x?Math.min(i,y-(c-o.current)):i;n(r,f);}},h=function(){var u=Date.now(),d=t(u);if(l.current=[].slice.call(arguments),m.current=i,a.current=u,d){if(!f.current&&p.current)return o.current=a.current,n(c,e),w?r(a.current):v.current;if(x)return n(c,e),r(a.current)}return f.current||n(c,e),v.current};return h.cancel=function(){f.current&&(g?cancelAnimationFrame(f.current):clearTimeout(f.current)),o.current=0,l.current=a.current=m.current=f.current=null;},h.isPending=function(){return !!f.current},h.flush=function(){return f.current?u(Date.now()):v.current},h},[w,x,e,y,s,g]);return h}

const React$1 = await importShared('react');

const identity = (arg) => arg;
function useStore(api, selector = identity) {
  const slice = React$1.useSyncExternalStore(
    api.subscribe,
    () => selector(api.getState()),
    () => selector(api.getInitialState())
  );
  React$1.useDebugValue(slice);
  return slice;
}

const isIterable = (obj) => Symbol.iterator in obj;
const hasIterableEntries = (value) => (
  // HACK: avoid checking entries type
  "entries" in value
);
const compareEntries = (valueA, valueB) => {
  const mapA = valueA instanceof Map ? valueA : new Map(valueA.entries());
  const mapB = valueB instanceof Map ? valueB : new Map(valueB.entries());
  if (mapA.size !== mapB.size) {
    return false;
  }
  for (const [key, value] of mapA) {
    if (!Object.is(value, mapB.get(key))) {
      return false;
    }
  }
  return true;
};
const compareIterables = (valueA, valueB) => {
  const iteratorA = valueA[Symbol.iterator]();
  const iteratorB = valueB[Symbol.iterator]();
  let nextA = iteratorA.next();
  let nextB = iteratorB.next();
  while (!nextA.done && !nextB.done) {
    if (!Object.is(nextA.value, nextB.value)) {
      return false;
    }
    nextA = iteratorA.next();
    nextB = iteratorB.next();
  }
  return !!nextA.done && !!nextB.done;
};
function shallow(valueA, valueB) {
  if (Object.is(valueA, valueB)) {
    return true;
  }
  if (typeof valueA !== "object" || valueA === null || typeof valueB !== "object" || valueB === null) {
    return false;
  }
  if (!isIterable(valueA) || !isIterable(valueB)) {
    return compareEntries(
      { entries: () => Object.entries(valueA) },
      { entries: () => Object.entries(valueB) }
    );
  }
  if (hasIterableEntries(valueA) && hasIterableEntries(valueB)) {
    return compareEntries(valueA, valueB);
  }
  return compareIterables(valueA, valueB);
}

const React = await importShared('react');

function useShallow(selector) {
  const prev = React.useRef(undefined);
  return (state) => {
    const next = selector(state);
    return shallow(prev.current, next) ? prev.current : prev.current = next;
  };
}

function commonjsRequire(path) {
	throw new Error('Could not dynamically require "' + path + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}

var object_hash = {exports: {}};

var hasRequiredObject_hash;

function requireObject_hash () {
	if (hasRequiredObject_hash) return object_hash.exports;
	hasRequiredObject_hash = 1;
	(function (module, exports) {
		!function(e){module.exports=e();}(function(){return function r(o,i,u){function s(n,e){if(!i[n]){if(!o[n]){var t="function"==typeof commonjsRequire&&commonjsRequire;if(!e&&t)return t(n,true);if(a)return a(n,true);throw new Error("Cannot find module '"+n+"'")}e=i[n]={exports:{}};o[n][0].call(e.exports,function(e){var t=o[n][1][e];return s(t||e)},e,e.exports,r,o,i,u);}return i[n].exports}for(var a="function"==typeof commonjsRequire&&commonjsRequire,e=0;e<u.length;e++)s(u[e]);return s}({1:[function(w,b,m){!function(e,n,s,c,d,h,p,g,y){var r=w("crypto");function t(e,t){t=u(e,t);var n;return void 0===(n="passthrough"!==t.algorithm?r.createHash(t.algorithm):new l).write&&(n.write=n.update,n.end=n.update),f(t,n).dispatch(e),n.update||n.end(""),n.digest?n.digest("buffer"===t.encoding?void 0:t.encoding):(e=n.read(),"buffer"!==t.encoding?e.toString(t.encoding):e)}(m=b.exports=t).sha1=function(e){return t(e)},m.keys=function(e){return t(e,{excludeValues:true,algorithm:"sha1",encoding:"hex"})},m.MD5=function(e){return t(e,{algorithm:"md5",encoding:"hex"})},m.keysMD5=function(e){return t(e,{algorithm:"md5",encoding:"hex",excludeValues:true})};var o=r.getHashes?r.getHashes().slice():["sha1","md5"],i=(o.push("passthrough"),["buffer","hex","binary","base64"]);function u(e,t){var n={};if(n.algorithm=(t=t||{}).algorithm||"sha1",n.encoding=t.encoding||"hex",n.excludeValues=!!t.excludeValues,n.algorithm=n.algorithm.toLowerCase(),n.encoding=n.encoding.toLowerCase(),n.ignoreUnknown=true===t.ignoreUnknown,n.respectType=false!==t.respectType,n.respectFunctionNames=false!==t.respectFunctionNames,n.respectFunctionProperties=false!==t.respectFunctionProperties,n.unorderedArrays=true===t.unorderedArrays,n.unorderedSets=false!==t.unorderedSets,n.unorderedObjects=false!==t.unorderedObjects,n.replacer=t.replacer||void 0,n.excludeKeys=t.excludeKeys||void 0,void 0===e)throw new Error("Object argument required.");for(var r=0;r<o.length;++r)o[r].toLowerCase()===n.algorithm.toLowerCase()&&(n.algorithm=o[r]);if(-1===o.indexOf(n.algorithm))throw new Error('Algorithm "'+n.algorithm+'"  not supported. supported values: '+o.join(", "));if(-1===i.indexOf(n.encoding)&&"passthrough"!==n.algorithm)throw new Error('Encoding "'+n.encoding+'"  not supported. supported values: '+i.join(", "));return n}function a(e){if("function"==typeof e)return null!=/^function\s+\w*\s*\(\s*\)\s*{\s+\[native code\]\s+}$/i.exec(Function.prototype.toString.call(e))}function f(o,t,i){i=i||[];function u(e){return t.update?t.update(e,"utf8"):t.write(e,"utf8")}return {dispatch:function(e){return this["_"+(null===(e=o.replacer?o.replacer(e):e)?"null":typeof e)](e)},_object:function(t){var n,e=Object.prototype.toString.call(t),r=/\[object (.*)\]/i.exec(e);r=(r=r?r[1]:"unknown:["+e+"]").toLowerCase();if(0<=(e=i.indexOf(t)))return this.dispatch("[CIRCULAR:"+e+"]");if(i.push(t),void 0!==s&&s.isBuffer&&s.isBuffer(t))return u("buffer:"),u(t);if("object"===r||"function"===r||"asyncfunction"===r)return e=Object.keys(t),o.unorderedObjects&&(e=e.sort()),false===o.respectType||a(t)||e.splice(0,0,"prototype","__proto__","constructor"),o.excludeKeys&&(e=e.filter(function(e){return !o.excludeKeys(e)})),u("object:"+e.length+":"),n=this,e.forEach(function(e){n.dispatch(e),u(":"),o.excludeValues||n.dispatch(t[e]),u(",");});if(!this["_"+r]){if(o.ignoreUnknown)return u("["+r+"]");throw new Error('Unknown object type "'+r+'"')}this["_"+r](t);},_array:function(e,t){t=void 0!==t?t:false!==o.unorderedArrays;var n=this;if(u("array:"+e.length+":"),!t||e.length<=1)return e.forEach(function(e){return n.dispatch(e)});var r=[],t=e.map(function(e){var t=new l,n=i.slice();return f(o,t,n).dispatch(e),r=r.concat(n.slice(i.length)),t.read().toString()});return i=i.concat(r),t.sort(),this._array(t,false)},_date:function(e){return u("date:"+e.toJSON())},_symbol:function(e){return u("symbol:"+e.toString())},_error:function(e){return u("error:"+e.toString())},_boolean:function(e){return u("bool:"+e.toString())},_string:function(e){u("string:"+e.length+":"),u(e.toString());},_function:function(e){u("fn:"),a(e)?this.dispatch("[native]"):this.dispatch(e.toString()),false!==o.respectFunctionNames&&this.dispatch("function-name:"+String(e.name)),o.respectFunctionProperties&&this._object(e);},_number:function(e){return u("number:"+e.toString())},_xml:function(e){return u("xml:"+e.toString())},_null:function(){return u("Null")},_undefined:function(){return u("Undefined")},_regexp:function(e){return u("regex:"+e.toString())},_uint8array:function(e){return u("uint8array:"),this.dispatch(Array.prototype.slice.call(e))},_uint8clampedarray:function(e){return u("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(e))},_int8array:function(e){return u("int8array:"),this.dispatch(Array.prototype.slice.call(e))},_uint16array:function(e){return u("uint16array:"),this.dispatch(Array.prototype.slice.call(e))},_int16array:function(e){return u("int16array:"),this.dispatch(Array.prototype.slice.call(e))},_uint32array:function(e){return u("uint32array:"),this.dispatch(Array.prototype.slice.call(e))},_int32array:function(e){return u("int32array:"),this.dispatch(Array.prototype.slice.call(e))},_float32array:function(e){return u("float32array:"),this.dispatch(Array.prototype.slice.call(e))},_float64array:function(e){return u("float64array:"),this.dispatch(Array.prototype.slice.call(e))},_arraybuffer:function(e){return u("arraybuffer:"),this.dispatch(new Uint8Array(e))},_url:function(e){return u("url:"+e.toString())},_map:function(e){u("map:");e=Array.from(e);return this._array(e,false!==o.unorderedSets)},_set:function(e){u("set:");e=Array.from(e);return this._array(e,false!==o.unorderedSets)},_file:function(e){return u("file:"),this.dispatch([e.name,e.size,e.type,e.lastModfied])},_blob:function(){if(o.ignoreUnknown)return u("[blob]");throw Error('Hashing Blob objects is currently not supported\n(see https://github.com/puleos/object-hash/issues/26)\nUse "options.replacer" or "options.ignoreUnknown"\n')},_domwindow:function(){return u("domwindow")},_bigint:function(e){return u("bigint:"+e.toString())},_process:function(){return u("process")},_timer:function(){return u("timer")},_pipe:function(){return u("pipe")},_tcp:function(){return u("tcp")},_udp:function(){return u("udp")},_tty:function(){return u("tty")},_statwatcher:function(){return u("statwatcher")},_securecontext:function(){return u("securecontext")},_connection:function(){return u("connection")},_zlib:function(){return u("zlib")},_context:function(){return u("context")},_nodescript:function(){return u("nodescript")},_httpparser:function(){return u("httpparser")},_dataview:function(){return u("dataview")},_signal:function(){return u("signal")},_fsevent:function(){return u("fsevent")},_tlswrap:function(){return u("tlswrap")}}}function l(){return {buf:"",write:function(e){this.buf+=e;},end:function(e){this.buf+=e;},read:function(){return this.buf}}}m.writeToStream=function(e,t,n){return void 0===n&&(n=t,t={}),f(t=u(e,t),n).dispatch(e)};}.call(this,w("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},w("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/fake_9a5aa49d.js","/");},{buffer:3,crypto:5,lYpoI2:11}],2:[function(e,t,f){!function(e,t,n,r,o,i,u,s,a){!function(e){var a="undefined"!=typeof Uint8Array?Uint8Array:Array,t="+".charCodeAt(0),n="/".charCodeAt(0),r="0".charCodeAt(0),o="a".charCodeAt(0),i="A".charCodeAt(0),u="-".charCodeAt(0),s="_".charCodeAt(0);function f(e){e=e.charCodeAt(0);return e===t||e===u?62:e===n||e===s?63:e<r?-1:e<r+10?e-r+26+26:e<i+26?e-i:e<o+26?e-o+26:void 0}e.toByteArray=function(e){var t,n;if(0<e.length%4)throw new Error("Invalid string. Length must be a multiple of 4");var r=e.length,r="="===e.charAt(r-2)?2:"="===e.charAt(r-1)?1:0,o=new a(3*e.length/4-r),i=0<r?e.length-4:e.length,u=0;function s(e){o[u++]=e;}for(t=0;t<i;t+=4,0)s((16711680&(n=f(e.charAt(t))<<18|f(e.charAt(t+1))<<12|f(e.charAt(t+2))<<6|f(e.charAt(t+3))))>>16),s((65280&n)>>8),s(255&n);return 2==r?s(255&(n=f(e.charAt(t))<<2|f(e.charAt(t+1))>>4)):1==r&&(s((n=f(e.charAt(t))<<10|f(e.charAt(t+1))<<4|f(e.charAt(t+2))>>2)>>8&255),s(255&n)),o},e.fromByteArray=function(e){var t,n,r,o,i=e.length%3,u="";function s(e){return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(e)}for(t=0,r=e.length-i;t<r;t+=3)n=(e[t]<<16)+(e[t+1]<<8)+e[t+2],u+=s((o=n)>>18&63)+s(o>>12&63)+s(o>>6&63)+s(63&o);switch(i){case 1:u=(u+=s((n=e[e.length-1])>>2))+s(n<<4&63)+"==";break;case 2:u=(u=(u+=s((n=(e[e.length-2]<<8)+e[e.length-1])>>10))+s(n>>4&63))+s(n<<2&63)+"=";}return u};}(void 0===f?this.base64js={}:f);}.call(this,e("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/base64-js/lib/b64.js","/node_modules/gulp-browserify/node_modules/base64-js/lib");},{buffer:3,lYpoI2:11}],3:[function(O,e,H){!function(e,n,f,r,h,p,g,y,w){var a=O("base64-js"),i=O("ieee754");function f(e,t,n){if(!(this instanceof f))return new f(e,t,n);var r,o,i,u,s=typeof e;if("base64"===t&&"string"==s)for(e=(u=e).trim?u.trim():u.replace(/^\s+|\s+$/g,"");e.length%4!=0;)e+="=";if("number"==s)r=j(e);else if("string"==s)r=f.byteLength(e,t);else {if("object"!=s)throw new Error("First argument needs to be a number, array or string.");r=j(e.length);}if(f._useTypedArrays?o=f._augment(new Uint8Array(r)):((o=this).length=r,o._isBuffer=true),f._useTypedArrays&&"number"==typeof e.byteLength)o._set(e);else if(C(u=e)||f.isBuffer(u)||u&&"object"==typeof u&&"number"==typeof u.length)for(i=0;i<r;i++)f.isBuffer(e)?o[i]=e.readUInt8(i):o[i]=e[i];else if("string"==s)o.write(e,0,t);else if("number"==s&&!f._useTypedArrays&&!n)for(i=0;i<r;i++)o[i]=0;return o}function b(e,t,n,r){return f._charsWritten=c(function(e){for(var t=[],n=0;n<e.length;n++)t.push(255&e.charCodeAt(n));return t}(t),e,n,r)}function m(e,t,n,r){return f._charsWritten=c(function(e){for(var t,n,r=[],o=0;o<e.length;o++)n=e.charCodeAt(o),t=n>>8,n=n%256,r.push(n),r.push(t);return r}(t),e,n,r)}function v(e,t,n){var r="";n=Math.min(e.length,n);for(var o=t;o<n;o++)r+=String.fromCharCode(e[o]);return r}function o(e,t,n,r){r||(d("boolean"==typeof n,"missing or invalid endian"),d(null!=t,"missing offset"),d(t+1<e.length,"Trying to read beyond buffer length"));var o,r=e.length;if(!(r<=t))return n?(o=e[t],t+1<r&&(o|=e[t+1]<<8)):(o=e[t]<<8,t+1<r&&(o|=e[t+1])),o}function u(e,t,n,r){r||(d("boolean"==typeof n,"missing or invalid endian"),d(null!=t,"missing offset"),d(t+3<e.length,"Trying to read beyond buffer length"));var o,r=e.length;if(!(r<=t))return n?(t+2<r&&(o=e[t+2]<<16),t+1<r&&(o|=e[t+1]<<8),o|=e[t],t+3<r&&(o+=e[t+3]<<24>>>0)):(t+1<r&&(o=e[t+1]<<16),t+2<r&&(o|=e[t+2]<<8),t+3<r&&(o|=e[t+3]),o+=e[t]<<24>>>0),o}function _(e,t,n,r){if(r||(d("boolean"==typeof n,"missing or invalid endian"),d(null!=t,"missing offset"),d(t+1<e.length,"Trying to read beyond buffer length")),!(e.length<=t))return r=o(e,t,n,true),32768&r?-1*(65535-r+1):r}function E(e,t,n,r){if(r||(d("boolean"==typeof n,"missing or invalid endian"),d(null!=t,"missing offset"),d(t+3<e.length,"Trying to read beyond buffer length")),!(e.length<=t))return r=u(e,t,n,true),2147483648&r?-1*(4294967295-r+1):r}function I(e,t,n,r){return r||(d("boolean"==typeof n,"missing or invalid endian"),d(t+3<e.length,"Trying to read beyond buffer length")),i.read(e,t,n,23,4)}function A(e,t,n,r){return r||(d("boolean"==typeof n,"missing or invalid endian"),d(t+7<e.length,"Trying to read beyond buffer length")),i.read(e,t,n,52,8)}function s(e,t,n,r,o){o||(d(null!=t,"missing value"),d("boolean"==typeof r,"missing or invalid endian"),d(null!=n,"missing offset"),d(n+1<e.length,"trying to write beyond buffer length"),Y(t,65535));o=e.length;if(!(o<=n))for(var i=0,u=Math.min(o-n,2);i<u;i++)e[n+i]=(t&255<<8*(r?i:1-i))>>>8*(r?i:1-i);}function l(e,t,n,r,o){o||(d(null!=t,"missing value"),d("boolean"==typeof r,"missing or invalid endian"),d(null!=n,"missing offset"),d(n+3<e.length,"trying to write beyond buffer length"),Y(t,4294967295));o=e.length;if(!(o<=n))for(var i=0,u=Math.min(o-n,4);i<u;i++)e[n+i]=t>>>8*(r?i:3-i)&255;}function B(e,t,n,r,o){o||(d(null!=t,"missing value"),d("boolean"==typeof r,"missing or invalid endian"),d(null!=n,"missing offset"),d(n+1<e.length,"Trying to write beyond buffer length"),F(t,32767,-32768)),e.length<=n||s(e,0<=t?t:65535+t+1,n,r,o);}function L(e,t,n,r,o){o||(d(null!=t,"missing value"),d("boolean"==typeof r,"missing or invalid endian"),d(null!=n,"missing offset"),d(n+3<e.length,"Trying to write beyond buffer length"),F(t,2147483647,-2147483648)),e.length<=n||l(e,0<=t?t:4294967295+t+1,n,r,o);}function U(e,t,n,r,o){o||(d(null!=t,"missing value"),d("boolean"==typeof r,"missing or invalid endian"),d(null!=n,"missing offset"),d(n+3<e.length,"Trying to write beyond buffer length"),D(t,34028234663852886e22,-34028234663852886e22)),e.length<=n||i.write(e,t,n,r,23,4);}function x(e,t,n,r,o){o||(d(null!=t,"missing value"),d("boolean"==typeof r,"missing or invalid endian"),d(null!=n,"missing offset"),d(n+7<e.length,"Trying to write beyond buffer length"),D(t,17976931348623157e292,-17976931348623157e292)),e.length<=n||i.write(e,t,n,r,52,8);}H.Buffer=f,H.SlowBuffer=f,H.INSPECT_MAX_BYTES=50,f.poolSize=8192,f._useTypedArrays=function(){try{var e=new ArrayBuffer(0),t=new Uint8Array(e);return t.foo=function(){return 42},42===t.foo()&&"function"==typeof t.subarray}catch(e){return  false}}(),f.isEncoding=function(e){switch(String(e).toLowerCase()){case "hex":case "utf8":case "utf-8":case "ascii":case "binary":case "base64":case "raw":case "ucs2":case "ucs-2":case "utf16le":case "utf-16le":return  true;default:return  false}},f.isBuffer=function(e){return !(null==e||!e._isBuffer)},f.byteLength=function(e,t){var n;switch(e+="",t||"utf8"){case "hex":n=e.length/2;break;case "utf8":case "utf-8":n=T(e).length;break;case "ascii":case "binary":case "raw":n=e.length;break;case "base64":n=M(e).length;break;case "ucs2":case "ucs-2":case "utf16le":case "utf-16le":n=2*e.length;break;default:throw new Error("Unknown encoding")}return n},f.concat=function(e,t){if(d(C(e),"Usage: Buffer.concat(list, [totalLength])\nlist should be an Array."),0===e.length)return new f(0);if(1===e.length)return e[0];if("number"!=typeof t)for(o=t=0;o<e.length;o++)t+=e[o].length;for(var n=new f(t),r=0,o=0;o<e.length;o++){var i=e[o];i.copy(n,r),r+=i.length;}return n},f.prototype.write=function(e,t,n,r){isFinite(t)?isFinite(n)||(r=n,n=void 0):(a=r,r=t,t=n,n=a),t=Number(t)||0;var o,i,u,s,a=this.length-t;switch((!n||a<(n=Number(n)))&&(n=a),r=String(r||"utf8").toLowerCase()){case "hex":o=function(e,t,n,r){n=Number(n)||0;var o=e.length-n;(!r||o<(r=Number(r)))&&(r=o),d((o=t.length)%2==0,"Invalid hex string"),o/2<r&&(r=o/2);for(var i=0;i<r;i++){var u=parseInt(t.substr(2*i,2),16);d(!isNaN(u),"Invalid hex string"),e[n+i]=u;}return f._charsWritten=2*i,i}(this,e,t,n);break;case "utf8":case "utf-8":i=this,u=t,s=n,o=f._charsWritten=c(T(e),i,u,s);break;case "ascii":case "binary":o=b(this,e,t,n);break;case "base64":i=this,u=t,s=n,o=f._charsWritten=c(M(e),i,u,s);break;case "ucs2":case "ucs-2":case "utf16le":case "utf-16le":o=m(this,e,t,n);break;default:throw new Error("Unknown encoding")}return o},f.prototype.toString=function(e,t,n){var r,o,i,u,s=this;if(e=String(e||"utf8").toLowerCase(),t=Number(t)||0,(n=void 0!==n?Number(n):s.length)===t)return "";switch(e){case "hex":r=function(e,t,n){var r=e.length;(!t||t<0)&&(t=0);(!n||n<0||r<n)&&(n=r);for(var o="",i=t;i<n;i++)o+=k(e[i]);return o}(s,t,n);break;case "utf8":case "utf-8":r=function(e,t,n){var r="",o="";n=Math.min(e.length,n);for(var i=t;i<n;i++)e[i]<=127?(r+=N(o)+String.fromCharCode(e[i]),o=""):o+="%"+e[i].toString(16);return r+N(o)}(s,t,n);break;case "ascii":case "binary":r=v(s,t,n);break;case "base64":o=s,u=n,r=0===(i=t)&&u===o.length?a.fromByteArray(o):a.fromByteArray(o.slice(i,u));break;case "ucs2":case "ucs-2":case "utf16le":case "utf-16le":r=function(e,t,n){for(var r=e.slice(t,n),o="",i=0;i<r.length;i+=2)o+=String.fromCharCode(r[i]+256*r[i+1]);return o}(s,t,n);break;default:throw new Error("Unknown encoding")}return r},f.prototype.toJSON=function(){return {type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},f.prototype.copy=function(e,t,n,r){if(t=t||0,(r=r||0===r?r:this.length)!==(n=n||0)&&0!==e.length&&0!==this.length){d(n<=r,"sourceEnd < sourceStart"),d(0<=t&&t<e.length,"targetStart out of bounds"),d(0<=n&&n<this.length,"sourceStart out of bounds"),d(0<=r&&r<=this.length,"sourceEnd out of bounds"),r>this.length&&(r=this.length);var o=(r=e.length-t<r-n?e.length-t+n:r)-n;if(o<100||!f._useTypedArrays)for(var i=0;i<o;i++)e[i+t]=this[i+n];else e._set(this.subarray(n,n+o),t);}},f.prototype.slice=function(e,t){var n=this.length;if(e=S(e,n,0),t=S(t,n,n),f._useTypedArrays)return f._augment(this.subarray(e,t));for(var r=t-e,o=new f(r,void 0,true),i=0;i<r;i++)o[i]=this[i+e];return o},f.prototype.get=function(e){return console.log(".get() is deprecated. Access using array indexes instead."),this.readUInt8(e)},f.prototype.set=function(e,t){return console.log(".set() is deprecated. Access using array indexes instead."),this.writeUInt8(e,t)},f.prototype.readUInt8=function(e,t){if(t||(d(null!=e,"missing offset"),d(e<this.length,"Trying to read beyond buffer length")),!(e>=this.length))return this[e]},f.prototype.readUInt16LE=function(e,t){return o(this,e,true,t)},f.prototype.readUInt16BE=function(e,t){return o(this,e,false,t)},f.prototype.readUInt32LE=function(e,t){return u(this,e,true,t)},f.prototype.readUInt32BE=function(e,t){return u(this,e,false,t)},f.prototype.readInt8=function(e,t){if(t||(d(null!=e,"missing offset"),d(e<this.length,"Trying to read beyond buffer length")),!(e>=this.length))return 128&this[e]?-1*(255-this[e]+1):this[e]},f.prototype.readInt16LE=function(e,t){return _(this,e,true,t)},f.prototype.readInt16BE=function(e,t){return _(this,e,false,t)},f.prototype.readInt32LE=function(e,t){return E(this,e,true,t)},f.prototype.readInt32BE=function(e,t){return E(this,e,false,t)},f.prototype.readFloatLE=function(e,t){return I(this,e,true,t)},f.prototype.readFloatBE=function(e,t){return I(this,e,false,t)},f.prototype.readDoubleLE=function(e,t){return A(this,e,true,t)},f.prototype.readDoubleBE=function(e,t){return A(this,e,false,t)},f.prototype.writeUInt8=function(e,t,n){n||(d(null!=e,"missing value"),d(null!=t,"missing offset"),d(t<this.length,"trying to write beyond buffer length"),Y(e,255)),t>=this.length||(this[t]=e);},f.prototype.writeUInt16LE=function(e,t,n){s(this,e,t,true,n);},f.prototype.writeUInt16BE=function(e,t,n){s(this,e,t,false,n);},f.prototype.writeUInt32LE=function(e,t,n){l(this,e,t,true,n);},f.prototype.writeUInt32BE=function(e,t,n){l(this,e,t,false,n);},f.prototype.writeInt8=function(e,t,n){n||(d(null!=e,"missing value"),d(null!=t,"missing offset"),d(t<this.length,"Trying to write beyond buffer length"),F(e,127,-128)),t>=this.length||(0<=e?this.writeUInt8(e,t,n):this.writeUInt8(255+e+1,t,n));},f.prototype.writeInt16LE=function(e,t,n){B(this,e,t,true,n);},f.prototype.writeInt16BE=function(e,t,n){B(this,e,t,false,n);},f.prototype.writeInt32LE=function(e,t,n){L(this,e,t,true,n);},f.prototype.writeInt32BE=function(e,t,n){L(this,e,t,false,n);},f.prototype.writeFloatLE=function(e,t,n){U(this,e,t,true,n);},f.prototype.writeFloatBE=function(e,t,n){U(this,e,t,false,n);},f.prototype.writeDoubleLE=function(e,t,n){x(this,e,t,true,n);},f.prototype.writeDoubleBE=function(e,t,n){x(this,e,t,false,n);},f.prototype.fill=function(e,t,n){if(t=t||0,n=n||this.length,d("number"==typeof(e="string"==typeof(e=e||0)?e.charCodeAt(0):e)&&!isNaN(e),"value is not a number"),d(t<=n,"end < start"),n!==t&&0!==this.length){d(0<=t&&t<this.length,"start out of bounds"),d(0<=n&&n<=this.length,"end out of bounds");for(var r=t;r<n;r++)this[r]=e;}},f.prototype.inspect=function(){for(var e=[],t=this.length,n=0;n<t;n++)if(e[n]=k(this[n]),n===H.INSPECT_MAX_BYTES){e[n+1]="...";break}return "<Buffer "+e.join(" ")+">"},f.prototype.toArrayBuffer=function(){if("undefined"==typeof Uint8Array)throw new Error("Buffer.toArrayBuffer not supported in this browser");if(f._useTypedArrays)return new f(this).buffer;for(var e=new Uint8Array(this.length),t=0,n=e.length;t<n;t+=1)e[t]=this[t];return e.buffer};var t=f.prototype;function S(e,t,n){return "number"!=typeof e?n:t<=(e=~~e)?t:0<=e||0<=(e+=t)?e:0}function j(e){return (e=~~Math.ceil(+e))<0?0:e}function C(e){return (Array.isArray||function(e){return "[object Array]"===Object.prototype.toString.call(e)})(e)}function k(e){return e<16?"0"+e.toString(16):e.toString(16)}function T(e){for(var t=[],n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<=127)t.push(e.charCodeAt(n));else for(var o=n,i=(55296<=r&&r<=57343&&n++,encodeURIComponent(e.slice(o,n+1)).substr(1).split("%")),u=0;u<i.length;u++)t.push(parseInt(i[u],16));}return t}function M(e){return a.toByteArray(e)}function c(e,t,n,r){for(var o=0;o<r&&!(o+n>=t.length||o>=e.length);o++)t[o+n]=e[o];return o}function N(e){try{return decodeURIComponent(e)}catch(e){return String.fromCharCode(65533)}}function Y(e,t){d("number"==typeof e,"cannot write a non-number as a number"),d(0<=e,"specified a negative value for writing an unsigned value"),d(e<=t,"value is larger than maximum value for type"),d(Math.floor(e)===e,"value has a fractional component");}function F(e,t,n){d("number"==typeof e,"cannot write a non-number as a number"),d(e<=t,"value larger than maximum allowed value"),d(n<=e,"value smaller than minimum allowed value"),d(Math.floor(e)===e,"value has a fractional component");}function D(e,t,n){d("number"==typeof e,"cannot write a non-number as a number"),d(e<=t,"value larger than maximum allowed value"),d(n<=e,"value smaller than minimum allowed value");}function d(e,t){if(!e)throw new Error(t||"Failed assertion")}f._augment=function(e){return e._isBuffer=true,e._get=e.get,e._set=e.set,e.get=t.get,e.set=t.set,e.write=t.write,e.toString=t.toString,e.toLocaleString=t.toString,e.toJSON=t.toJSON,e.copy=t.copy,e.slice=t.slice,e.readUInt8=t.readUInt8,e.readUInt16LE=t.readUInt16LE,e.readUInt16BE=t.readUInt16BE,e.readUInt32LE=t.readUInt32LE,e.readUInt32BE=t.readUInt32BE,e.readInt8=t.readInt8,e.readInt16LE=t.readInt16LE,e.readInt16BE=t.readInt16BE,e.readInt32LE=t.readInt32LE,e.readInt32BE=t.readInt32BE,e.readFloatLE=t.readFloatLE,e.readFloatBE=t.readFloatBE,e.readDoubleLE=t.readDoubleLE,e.readDoubleBE=t.readDoubleBE,e.writeUInt8=t.writeUInt8,e.writeUInt16LE=t.writeUInt16LE,e.writeUInt16BE=t.writeUInt16BE,e.writeUInt32LE=t.writeUInt32LE,e.writeUInt32BE=t.writeUInt32BE,e.writeInt8=t.writeInt8,e.writeInt16LE=t.writeInt16LE,e.writeInt16BE=t.writeInt16BE,e.writeInt32LE=t.writeInt32LE,e.writeInt32BE=t.writeInt32BE,e.writeFloatLE=t.writeFloatLE,e.writeFloatBE=t.writeFloatBE,e.writeDoubleLE=t.writeDoubleLE,e.writeDoubleBE=t.writeDoubleBE,e.fill=t.fill,e.inspect=t.inspect,e.toArrayBuffer=t.toArrayBuffer,e};}.call(this,O("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},O("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/buffer/index.js","/node_modules/gulp-browserify/node_modules/buffer");},{"base64-js":2,buffer:3,ieee754:10,lYpoI2:11}],4:[function(c,d,e){!function(e,t,a,n,r,o,i,u,s){var a=c("buffer").Buffer,f=4,l=new a(f);l.fill(0);d.exports={hash:function(e,t,n,r){for(var o=t(function(e,t){e.length%f!=0&&(n=e.length+(f-e.length%f),e=a.concat([e,l],n));for(var n,r=[],o=t?e.readInt32BE:e.readInt32LE,i=0;i<e.length;i+=f)r.push(o.call(e,i));return r}(e=a.isBuffer(e)?e:new a(e),r),8*e.length),t=r,i=new a(n),u=t?i.writeInt32BE:i.writeInt32LE,s=0;s<o.length;s++)u.call(i,o[s],4*s,true);return i}};}.call(this,c("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},c("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/helpers.js","/node_modules/gulp-browserify/node_modules/crypto-browserify");},{buffer:3,lYpoI2:11}],5:[function(v,e,_){!function(l,c,u,d,h,p,g,y,w){var u=v("buffer").Buffer,e=v("./sha"),t=v("./sha256"),n=v("./rng"),b={sha1:e,sha256:t,md5:v("./md5")},s=64,a=new u(s);function r(e,n){var r=b[e=e||"sha1"],o=[];return r||i("algorithm:",e,"is not yet supported"),{update:function(e){return u.isBuffer(e)||(e=new u(e)),o.push(e),e.length,this},digest:function(e){var t=u.concat(o),t=n?function(e,t,n){u.isBuffer(t)||(t=new u(t)),u.isBuffer(n)||(n=new u(n)),t.length>s?t=e(t):t.length<s&&(t=u.concat([t,a],s));for(var r=new u(s),o=new u(s),i=0;i<s;i++)r[i]=54^t[i],o[i]=92^t[i];return n=e(u.concat([r,n])),e(u.concat([o,n]))}(r,n,t):r(t);return o=null,e?t.toString(e):t}}}function i(){var e=[].slice.call(arguments).join(" ");throw new Error([e,"we accept pull requests","http://github.com/dominictarr/crypto-browserify"].join("\n"))}a.fill(0),_.createHash=function(e){return r(e)},_.createHmac=r,_.randomBytes=function(e,t){if(!t||!t.call)return new u(n(e));try{t.call(this,void 0,new u(n(e)));}catch(e){t(e);}};var o,f=["createCredentials","createCipher","createCipheriv","createDecipher","createDecipheriv","createSign","createVerify","createDiffieHellman","pbkdf2"],m=function(e){_[e]=function(){i("sorry,",e,"is not implemented yet");};};for(o in f)m(f[o]);}.call(this,v("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},v("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/index.js","/node_modules/gulp-browserify/node_modules/crypto-browserify");},{"./md5":6,"./rng":7,"./sha":8,"./sha256":9,buffer:3,lYpoI2:11}],6:[function(w,b,e){!function(e,r,o,i,u,a,f,l,y){var t=w("./helpers");function n(e,t){e[t>>5]|=128<<t%32,e[14+(t+64>>>9<<4)]=t;for(var n=1732584193,r=-271733879,o=-1732584194,i=271733878,u=0;u<e.length;u+=16){var s=n,a=r,f=o,l=i,n=c(n,r,o,i,e[u+0],7,-680876936),i=c(i,n,r,o,e[u+1],12,-389564586),o=c(o,i,n,r,e[u+2],17,606105819),r=c(r,o,i,n,e[u+3],22,-1044525330);n=c(n,r,o,i,e[u+4],7,-176418897),i=c(i,n,r,o,e[u+5],12,1200080426),o=c(o,i,n,r,e[u+6],17,-1473231341),r=c(r,o,i,n,e[u+7],22,-45705983),n=c(n,r,o,i,e[u+8],7,1770035416),i=c(i,n,r,o,e[u+9],12,-1958414417),o=c(o,i,n,r,e[u+10],17,-42063),r=c(r,o,i,n,e[u+11],22,-1990404162),n=c(n,r,o,i,e[u+12],7,1804603682),i=c(i,n,r,o,e[u+13],12,-40341101),o=c(o,i,n,r,e[u+14],17,-1502002290),n=d(n,r=c(r,o,i,n,e[u+15],22,1236535329),o,i,e[u+1],5,-165796510),i=d(i,n,r,o,e[u+6],9,-1069501632),o=d(o,i,n,r,e[u+11],14,643717713),r=d(r,o,i,n,e[u+0],20,-373897302),n=d(n,r,o,i,e[u+5],5,-701558691),i=d(i,n,r,o,e[u+10],9,38016083),o=d(o,i,n,r,e[u+15],14,-660478335),r=d(r,o,i,n,e[u+4],20,-405537848),n=d(n,r,o,i,e[u+9],5,568446438),i=d(i,n,r,o,e[u+14],9,-1019803690),o=d(o,i,n,r,e[u+3],14,-187363961),r=d(r,o,i,n,e[u+8],20,1163531501),n=d(n,r,o,i,e[u+13],5,-1444681467),i=d(i,n,r,o,e[u+2],9,-51403784),o=d(o,i,n,r,e[u+7],14,1735328473),n=h(n,r=d(r,o,i,n,e[u+12],20,-1926607734),o,i,e[u+5],4,-378558),i=h(i,n,r,o,e[u+8],11,-2022574463),o=h(o,i,n,r,e[u+11],16,1839030562),r=h(r,o,i,n,e[u+14],23,-35309556),n=h(n,r,o,i,e[u+1],4,-1530992060),i=h(i,n,r,o,e[u+4],11,1272893353),o=h(o,i,n,r,e[u+7],16,-155497632),r=h(r,o,i,n,e[u+10],23,-1094730640),n=h(n,r,o,i,e[u+13],4,681279174),i=h(i,n,r,o,e[u+0],11,-358537222),o=h(o,i,n,r,e[u+3],16,-722521979),r=h(r,o,i,n,e[u+6],23,76029189),n=h(n,r,o,i,e[u+9],4,-640364487),i=h(i,n,r,o,e[u+12],11,-421815835),o=h(o,i,n,r,e[u+15],16,530742520),n=p(n,r=h(r,o,i,n,e[u+2],23,-995338651),o,i,e[u+0],6,-198630844),i=p(i,n,r,o,e[u+7],10,1126891415),o=p(o,i,n,r,e[u+14],15,-1416354905),r=p(r,o,i,n,e[u+5],21,-57434055),n=p(n,r,o,i,e[u+12],6,1700485571),i=p(i,n,r,o,e[u+3],10,-1894986606),o=p(o,i,n,r,e[u+10],15,-1051523),r=p(r,o,i,n,e[u+1],21,-2054922799),n=p(n,r,o,i,e[u+8],6,1873313359),i=p(i,n,r,o,e[u+15],10,-30611744),o=p(o,i,n,r,e[u+6],15,-1560198380),r=p(r,o,i,n,e[u+13],21,1309151649),n=p(n,r,o,i,e[u+4],6,-145523070),i=p(i,n,r,o,e[u+11],10,-1120210379),o=p(o,i,n,r,e[u+2],15,718787259),r=p(r,o,i,n,e[u+9],21,-343485551),n=g(n,s),r=g(r,a),o=g(o,f),i=g(i,l);}return Array(n,r,o,i)}function s(e,t,n,r,o,i){return g((t=g(g(t,e),g(r,i)))<<o|t>>>32-o,n)}function c(e,t,n,r,o,i,u){return s(t&n|~t&r,e,t,o,i,u)}function d(e,t,n,r,o,i,u){return s(t&r|n&~r,e,t,o,i,u)}function h(e,t,n,r,o,i,u){return s(t^n^r,e,t,o,i,u)}function p(e,t,n,r,o,i,u){return s(n^(t|~r),e,t,o,i,u)}function g(e,t){var n=(65535&e)+(65535&t);return (e>>16)+(t>>16)+(n>>16)<<16|65535&n}b.exports=function(e){return t.hash(e,n,16)};}.call(this,w("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},w("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/md5.js","/node_modules/gulp-browserify/node_modules/crypto-browserify");},{"./helpers":4,buffer:3,lYpoI2:11}],7:[function(e,l,t){!function(e,t,n,r,o,i,u,s,f){l.exports=function(e){for(var t,n=new Array(e),r=0;r<e;r++)0==(3&r)&&(t=4294967296*Math.random()),n[r]=t>>>((3&r)<<3)&255;return n};}.call(this,e("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/rng.js","/node_modules/gulp-browserify/node_modules/crypto-browserify");},{buffer:3,lYpoI2:11}],8:[function(c,d,e){!function(e,t,n,r,o,s,a,f,l){var i=c("./helpers");function u(l,c){l[c>>5]|=128<<24-c%32,l[15+(c+64>>9<<4)]=c;for(var e,t,n,r=Array(80),o=1732584193,i=-271733879,u=-1732584194,s=271733878,d=-1009589776,h=0;h<l.length;h+=16){for(var p=o,g=i,y=u,w=s,b=d,a=0;a<80;a++){r[a]=a<16?l[h+a]:v(r[a-3]^r[a-8]^r[a-14]^r[a-16],1);var f=m(m(v(o,5),(f=i,t=u,n=s,(e=a)<20?f&t|~f&n:!(e<40)&&e<60?f&t|f&n|t&n:f^t^n)),m(m(d,r[a]),(e=a)<20?1518500249:e<40?1859775393:e<60?-1894007588:-899497514)),d=s,s=u,u=v(i,30),i=o,o=f;}o=m(o,p),i=m(i,g),u=m(u,y),s=m(s,w),d=m(d,b);}return Array(o,i,u,s,d)}function m(e,t){var n=(65535&e)+(65535&t);return (e>>16)+(t>>16)+(n>>16)<<16|65535&n}function v(e,t){return e<<t|e>>>32-t}d.exports=function(e){return i.hash(e,u,20,true)};}.call(this,c("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},c("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/sha.js","/node_modules/gulp-browserify/node_modules/crypto-browserify");},{"./helpers":4,buffer:3,lYpoI2:11}],9:[function(c,d,e){!function(e,t,n,r,u,s,a,f,l){function b(e,t){var n=(65535&e)+(65535&t);return (e>>16)+(t>>16)+(n>>16)<<16|65535&n}function o(e,l){var c,d=new Array(1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298),t=new Array(1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225),n=new Array(64);e[l>>5]|=128<<24-l%32,e[15+(l+64>>9<<4)]=l;for(var r,o,h=0;h<e.length;h+=16){for(var i=t[0],u=t[1],s=t[2],p=t[3],a=t[4],g=t[5],y=t[6],w=t[7],f=0;f<64;f++)n[f]=f<16?e[f+h]:b(b(b((o=n[f-2],m(o,17)^m(o,19)^v(o,10)),n[f-7]),(o=n[f-15],m(o,7)^m(o,18)^v(o,3))),n[f-16]),c=b(b(b(b(w,m(o=a,6)^m(o,11)^m(o,25)),a&g^~a&y),d[f]),n[f]),r=b(m(r=i,2)^m(r,13)^m(r,22),i&u^i&s^u&s),w=y,y=g,g=a,a=b(p,c),p=s,s=u,u=i,i=b(c,r);t[0]=b(i,t[0]),t[1]=b(u,t[1]),t[2]=b(s,t[2]),t[3]=b(p,t[3]),t[4]=b(a,t[4]),t[5]=b(g,t[5]),t[6]=b(y,t[6]),t[7]=b(w,t[7]);}return t}var i=c("./helpers"),m=function(e,t){return e>>>t|e<<32-t},v=function(e,t){return e>>>t};d.exports=function(e){return i.hash(e,o,32,true)};}.call(this,c("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},c("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/sha256.js","/node_modules/gulp-browserify/node_modules/crypto-browserify");},{"./helpers":4,buffer:3,lYpoI2:11}],10:[function(e,t,f){!function(e,t,n,r,o,i,u,s,a){f.read=function(e,t,n,r,o){var i,u,l=8*o-r-1,c=(1<<l)-1,d=c>>1,s=-7,a=n?o-1:0,f=n?-1:1,o=e[t+a];for(a+=f,i=o&(1<<-s)-1,o>>=-s,s+=l;0<s;i=256*i+e[t+a],a+=f,s-=8);for(u=i&(1<<-s)-1,i>>=-s,s+=r;0<s;u=256*u+e[t+a],a+=f,s-=8);if(0===i)i=1-d;else {if(i===c)return u?NaN:1/0*(o?-1:1);u+=Math.pow(2,r),i-=d;}return (o?-1:1)*u*Math.pow(2,i-r)},f.write=function(e,t,l,n,r,c){var o,i,u=8*c-r-1,s=(1<<u)-1,a=s>>1,d=23===r?Math.pow(2,-24)-Math.pow(2,-77):0,f=n?0:c-1,h=n?1:-1,c=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(i=isNaN(t)?1:0,o=s):(o=Math.floor(Math.log(t)/Math.LN2),t*(n=Math.pow(2,-o))<1&&(o--,n*=2),2<=(t+=1<=o+a?d/n:d*Math.pow(2,1-a))*n&&(o++,n/=2),s<=o+a?(i=0,o=s):1<=o+a?(i=(t*n-1)*Math.pow(2,r),o+=a):(i=t*Math.pow(2,a-1)*Math.pow(2,r),o=0));8<=r;e[l+f]=255&i,f+=h,i/=256,r-=8);for(o=o<<r|i,u+=r;0<u;e[l+f]=255&o,f+=h,o/=256,u-=8);e[l+f-h]|=128*c;};}.call(this,e("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/ieee754/index.js","/node_modules/gulp-browserify/node_modules/ieee754");},{buffer:3,lYpoI2:11}],11:[function(e,h,t){!function(e,t,n,r,o,f,l,c,d){var i,u,s;function a(){}(e=h.exports={}).nextTick=(u="undefined"!=typeof window&&window.setImmediate,s="undefined"!=typeof window&&window.postMessage&&window.addEventListener,u?function(e){return window.setImmediate(e)}:s?(i=[],window.addEventListener("message",function(e){var t=e.source;t!==window&&null!==t||"process-tick"!==e.data||(e.stopPropagation(),0<i.length&&i.shift()());},true),function(e){i.push(e),window.postMessage("process-tick","*");}):function(e){setTimeout(e,0);}),e.title="browser",e.browser=true,e.env={},e.argv=[],e.on=a,e.addListener=a,e.once=a,e.off=a,e.removeListener=a,e.removeAllListeners=a,e.emit=a,e.binding=function(e){throw new Error("process.binding is not supported")},e.cwd=function(){return "/"},e.chdir=function(e){throw new Error("process.chdir is not supported")};}.call(this,e("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/process/browser.js","/node_modules/gulp-browserify/node_modules/process");},{buffer:3,lYpoI2:11}]},{},[1])(1)}); 
	} (object_hash));
	return object_hash.exports;
}

var object_hashExports = requireObject_hash();
const hash = /*@__PURE__*/getDefaultExportFromCjs(object_hashExports);

const {useContext: useContext$1,createContext: createContext$1,useState: useState$1,useCallback: useCallback$1,useRef: useRef$1,useLayoutEffect,useEffect: useEffect$1} = await importShared('react');

function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}

var reservedModifierKeywords = ['shift', 'alt', 'meta', 'mod', 'ctrl'];
var mappedKeys = {
  esc: 'escape',
  "return": 'enter',
  '.': 'period',
  ',': 'comma',
  '-': 'slash',
  ' ': 'space',
  '`': 'backquote',
  '#': 'backslash',
  '+': 'bracketright',
  ShiftLeft: 'shift',
  ShiftRight: 'shift',
  AltLeft: 'alt',
  AltRight: 'alt',
  MetaLeft: 'meta',
  MetaRight: 'meta',
  OSLeft: 'meta',
  OSRight: 'meta',
  ControlLeft: 'ctrl',
  ControlRight: 'ctrl'
};
function mapKey(key) {
  return (key && mappedKeys[key] || key || '').trim().toLowerCase().replace(/key|digit|numpad|arrow/, '');
}
function isHotkeyModifier(key) {
  return reservedModifierKeywords.includes(key);
}
function parseKeysHookInput(keys, splitKey) {
  if (splitKey === void 0) {
    splitKey = ',';
  }
  return keys.split(splitKey);
}
function parseHotkey(hotkey, combinationKey, description) {
  if (combinationKey === void 0) {
    combinationKey = '+';
  }
  var keys = hotkey.toLocaleLowerCase().split(combinationKey).map(function (k) {
    return mapKey(k);
  });
  var modifiers = {
    alt: keys.includes('alt'),
    ctrl: keys.includes('ctrl') || keys.includes('control'),
    shift: keys.includes('shift'),
    meta: keys.includes('meta'),
    mod: keys.includes('mod')
  };
  var singleCharKeys = keys.filter(function (k) {
    return !reservedModifierKeywords.includes(k);
  });
  return _extends({}, modifiers, {
    keys: singleCharKeys,
    description: description,
    hotkey: hotkey
  });
}

(function () {
  if (typeof document !== 'undefined') {
    document.addEventListener('keydown', function (e) {
      if (e.key === undefined) {
        // Synthetic event (e.g., Chrome autofill).  Ignore.
        return;
      }
      pushToCurrentlyPressedKeys([mapKey(e.key), mapKey(e.code)]);
    });
    document.addEventListener('keyup', function (e) {
      if (e.key === undefined) {
        // Synthetic event (e.g., Chrome autofill).  Ignore.
        return;
      }
      removeFromCurrentlyPressedKeys([mapKey(e.key), mapKey(e.code)]);
    });
  }
  if (typeof window !== 'undefined') {
    window.addEventListener('blur', function () {
      currentlyPressedKeys.clear();
    });
  }
})();
var currentlyPressedKeys = /*#__PURE__*/new Set();
// https://github.com/microsoft/TypeScript/issues/17002
function isReadonlyArray(value) {
  return Array.isArray(value);
}
function isHotkeyPressed(key, splitKey) {
  if (splitKey === void 0) {
    splitKey = ',';
  }
  var hotkeyArray = isReadonlyArray(key) ? key : key.split(splitKey);
  return hotkeyArray.every(function (hotkey) {
    return currentlyPressedKeys.has(hotkey.trim().toLowerCase());
  });
}
function pushToCurrentlyPressedKeys(key) {
  var hotkeyArray = Array.isArray(key) ? key : [key];
  /*
  Due to a weird behavior on macOS we need to clear the set if the user pressed down the meta key and presses another key.
  https://stackoverflow.com/questions/11818637/why-does-javascript-drop-keyup-events-when-the-metakey-is-pressed-on-mac-browser
  Otherwise the set will hold all ever pressed keys while the meta key is down which leads to wrong results.
   */
  if (currentlyPressedKeys.has('meta')) {
    currentlyPressedKeys.forEach(function (key) {
      return !isHotkeyModifier(key) && currentlyPressedKeys["delete"](key.toLowerCase());
    });
  }
  hotkeyArray.forEach(function (hotkey) {
    return currentlyPressedKeys.add(hotkey.toLowerCase());
  });
}
function removeFromCurrentlyPressedKeys(key) {
  var hotkeyArray = Array.isArray(key) ? key : [key];
  /*
  Due to a weird behavior on macOS we need to clear the set if the user pressed down the meta key and presses another key.
  https://stackoverflow.com/questions/11818637/why-does-javascript-drop-keyup-events-when-the-metakey-is-pressed-on-mac-browser
  Otherwise the set will hold all ever pressed keys while the meta key is down which leads to wrong results.
   */
  if (key === 'meta') {
    currentlyPressedKeys.clear();
  } else {
    hotkeyArray.forEach(function (hotkey) {
      return currentlyPressedKeys["delete"](hotkey.toLowerCase());
    });
  }
}

function maybePreventDefault(e, hotkey, preventDefault) {
  if (typeof preventDefault === 'function' && preventDefault(e, hotkey) || preventDefault === true) {
    e.preventDefault();
  }
}
function isHotkeyEnabled(e, hotkey, enabled) {
  if (typeof enabled === 'function') {
    return enabled(e, hotkey);
  }
  return enabled === true || enabled === undefined;
}
function isKeyboardEventTriggeredByInput(ev) {
  return isHotkeyEnabledOnTag(ev, ['input', 'textarea', 'select']);
}
function isHotkeyEnabledOnTag(event, enabledOnTags) {
  if (enabledOnTags === void 0) {
    enabledOnTags = false;
  }
  var target = event.target,
    composed = event.composed;
  var targetTagName = null;
  if (isCustomElement(target) && composed) {
    targetTagName = event.composedPath()[0] && event.composedPath()[0].tagName;
  } else {
    targetTagName = target && target.tagName;
  }
  if (isReadonlyArray(enabledOnTags)) {
    return Boolean(targetTagName && enabledOnTags && enabledOnTags.some(function (tag) {
      var _targetTagName;
      return tag.toLowerCase() === ((_targetTagName = targetTagName) == null ? void 0 : _targetTagName.toLowerCase());
    }));
  }
  return Boolean(targetTagName && enabledOnTags && enabledOnTags);
}
function isCustomElement(element) {
  // We just do a basic check w/o any complex RegEx or validation against the list of legacy names containing a hyphen,
  // as none of them is likely to be an event target, and it won't hurt anyway if we miss.
  // see: https://html.spec.whatwg.org/multipage/custom-elements.html#prod-potentialcustomelementname
  return !!element.tagName && !element.tagName.startsWith("-") && element.tagName.includes("-");
}
function isScopeActive(activeScopes, scopes) {
  if (activeScopes.length === 0 && scopes) {
    console.warn('A hotkey has the "scopes" option set, however no active scopes were found. If you want to use the global scopes feature, you need to wrap your app in a <HotkeysProvider>');
    return true;
  }
  if (!scopes) {
    return true;
  }
  return activeScopes.some(function (scope) {
    return scopes.includes(scope);
  }) || activeScopes.includes('*');
}
var isHotkeyMatchingKeyboardEvent = function isHotkeyMatchingKeyboardEvent(e, hotkey, ignoreModifiers) {
  if (ignoreModifiers === void 0) {
    ignoreModifiers = false;
  }
  var alt = hotkey.alt,
    meta = hotkey.meta,
    mod = hotkey.mod,
    shift = hotkey.shift,
    ctrl = hotkey.ctrl,
    keys = hotkey.keys;
  var pressedKeyUppercase = e.key,
    code = e.code,
    ctrlKey = e.ctrlKey,
    metaKey = e.metaKey,
    shiftKey = e.shiftKey,
    altKey = e.altKey;
  var keyCode = mapKey(code);
  var pressedKey = pressedKeyUppercase.toLowerCase();
  if (!(keys != null && keys.includes(keyCode)) && !(keys != null && keys.includes(pressedKey)) && !['ctrl', 'control', 'unknown', 'meta', 'alt', 'shift', 'os'].includes(keyCode)) {
    return false;
  }
  if (!ignoreModifiers) {
    // We check the pressed keys for compatibility with the keyup event. In keyup events the modifier flags are not set.
    if (alt === !altKey && pressedKey !== 'alt') {
      return false;
    }
    if (shift === !shiftKey && pressedKey !== 'shift') {
      return false;
    }
    // Mod is a special key name that is checking for meta on macOS and ctrl on other platforms
    if (mod) {
      if (!metaKey && !ctrlKey) {
        return false;
      }
    } else {
      if (meta === !metaKey && pressedKey !== 'meta' && pressedKey !== 'os') {
        return false;
      }
      if (ctrl === !ctrlKey && pressedKey !== 'ctrl' && pressedKey !== 'control') {
        return false;
      }
    }
  }
  // All modifiers are correct, now check the key
  // If the key is set, we check for the key
  if (keys && keys.length === 1 && (keys.includes(pressedKey) || keys.includes(keyCode))) {
    return true;
  } else if (keys) {
    // Check if all keys are present in pressedDownKeys set
    return isHotkeyPressed(keys);
  } else if (!keys) {
    // If the key is not set, we only listen for modifiers, that check went alright, so we return true
    return true;
  }
  // There is nothing that matches.
  return false;
};

var BoundHotkeysProxyProvider = /*#__PURE__*/createContext$1(undefined);
var useBoundHotkeysProxy = function useBoundHotkeysProxy() {
  return useContext$1(BoundHotkeysProxyProvider);
};

function deepEqual(x, y) {
  //@ts-ignore
  return x && y && typeof x === 'object' && typeof y === 'object' ? Object.keys(x).length === Object.keys(y).length &&
  //@ts-ignore
  Object.keys(x).reduce(function (isEqual, key) {
    return isEqual && deepEqual(x[key], y[key]);
  }, true) : x === y;
}

var HotkeysContext = /*#__PURE__*/createContext$1({
  hotkeys: [],
  enabledScopes: [],
  toggleScope: function toggleScope() {},
  enableScope: function enableScope() {},
  disableScope: function disableScope() {}
});
var useHotkeysContext = function useHotkeysContext() {
  return useContext$1(HotkeysContext);
};

function useDeepEqualMemo(value) {
  var ref = useRef$1(undefined);
  if (!deepEqual(ref.current, value)) {
    ref.current = value;
  }
  return ref.current;
}

var stopPropagation = function stopPropagation(e) {
  e.stopPropagation();
  e.preventDefault();
  e.stopImmediatePropagation();
};
var useSafeLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect$1;
function useHotkeys(keys, callback, options, dependencies) {
  var _useState = useState$1(null),
    ref = _useState[0],
    setRef = _useState[1];
  var hasTriggeredRef = useRef$1(false);
  var _options = !(options instanceof Array) ? options : !(dependencies instanceof Array) ? dependencies : undefined;
  var _keys = isReadonlyArray(keys) ? keys.join(_options == null ? void 0 : _options.splitKey) : keys;
  var _deps = options instanceof Array ? options : dependencies instanceof Array ? dependencies : undefined;
  var memoisedCB = useCallback$1(callback, _deps != null ? _deps : []);
  var cbRef = useRef$1(memoisedCB);
  if (_deps) {
    cbRef.current = memoisedCB;
  } else {
    cbRef.current = callback;
  }
  var memoisedOptions = useDeepEqualMemo(_options);
  var _useHotkeysContext = useHotkeysContext(),
    enabledScopes = _useHotkeysContext.enabledScopes;
  var proxy = useBoundHotkeysProxy();
  useSafeLayoutEffect(function () {
    if ((memoisedOptions == null ? void 0 : memoisedOptions.enabled) === false || !isScopeActive(enabledScopes, memoisedOptions == null ? void 0 : memoisedOptions.scopes)) {
      return;
    }
    var listener = function listener(e, isKeyUp) {
      var _e$target;
      if (isKeyUp === void 0) {
        isKeyUp = false;
      }
      if (isKeyboardEventTriggeredByInput(e) && !isHotkeyEnabledOnTag(e, memoisedOptions == null ? void 0 : memoisedOptions.enableOnFormTags)) {
        return;
      }
      // TODO: SINCE THE EVENT IS NOW ATTACHED TO THE REF, THE ACTIVE ELEMENT CAN NEVER BE INSIDE THE REF. THE HOTKEY ONLY TRIGGERS IF THE
      // REF IS THE ACTIVE ELEMENT. THIS IS A PROBLEM SINCE FOCUSED SUB COMPONENTS WON'T TRIGGER THE HOTKEY.
      if (ref !== null) {
        var rootNode = ref.getRootNode();
        if ((rootNode instanceof Document || rootNode instanceof ShadowRoot) && rootNode.activeElement !== ref && !ref.contains(rootNode.activeElement)) {
          stopPropagation(e);
          return;
        }
      }
      if ((_e$target = e.target) != null && _e$target.isContentEditable && !(memoisedOptions != null && memoisedOptions.enableOnContentEditable)) {
        return;
      }
      parseKeysHookInput(_keys, memoisedOptions == null ? void 0 : memoisedOptions.splitKey).forEach(function (key) {
        var _hotkey$keys;
        var hotkey = parseHotkey(key, memoisedOptions == null ? void 0 : memoisedOptions.combinationKey);
        if (isHotkeyMatchingKeyboardEvent(e, hotkey, memoisedOptions == null ? void 0 : memoisedOptions.ignoreModifiers) || (_hotkey$keys = hotkey.keys) != null && _hotkey$keys.includes('*')) {
          if (memoisedOptions != null && memoisedOptions.ignoreEventWhen != null && memoisedOptions.ignoreEventWhen(e)) {
            return;
          }
          if (isKeyUp && hasTriggeredRef.current) {
            return;
          }
          maybePreventDefault(e, hotkey, memoisedOptions == null ? void 0 : memoisedOptions.preventDefault);
          if (!isHotkeyEnabled(e, hotkey, memoisedOptions == null ? void 0 : memoisedOptions.enabled)) {
            stopPropagation(e);
            return;
          }
          // Execute the user callback for that hotkey
          cbRef.current(e, hotkey);
          if (!isKeyUp) {
            hasTriggeredRef.current = true;
          }
        }
      });
    };
    var handleKeyDown = function handleKeyDown(event) {
      if (event.key === undefined) {
        // Synthetic event (e.g., Chrome autofill).  Ignore.
        return;
      }
      pushToCurrentlyPressedKeys(mapKey(event.code));
      if ((memoisedOptions == null ? void 0 : memoisedOptions.keydown) === undefined && (memoisedOptions == null ? void 0 : memoisedOptions.keyup) !== true || memoisedOptions != null && memoisedOptions.keydown) {
        listener(event);
      }
    };
    var handleKeyUp = function handleKeyUp(event) {
      if (event.key === undefined) {
        // Synthetic event (e.g., Chrome autofill).  Ignore.
        return;
      }
      removeFromCurrentlyPressedKeys(mapKey(event.code));
      hasTriggeredRef.current = false;
      if (memoisedOptions != null && memoisedOptions.keyup) {
        listener(event, true);
      }
    };
    var domNode = ref || (_options == null ? void 0 : _options.document) || document;
    // @ts-ignore
    domNode.addEventListener('keyup', handleKeyUp);
    // @ts-ignore
    domNode.addEventListener('keydown', handleKeyDown);
    if (proxy) {
      parseKeysHookInput(_keys, memoisedOptions == null ? void 0 : memoisedOptions.splitKey).forEach(function (key) {
        return proxy.addHotkey(parseHotkey(key, memoisedOptions == null ? void 0 : memoisedOptions.combinationKey, memoisedOptions == null ? void 0 : memoisedOptions.description));
      });
    }
    return function () {
      // @ts-ignore
      domNode.removeEventListener('keyup', handleKeyUp);
      // @ts-ignore
      domNode.removeEventListener('keydown', handleKeyDown);
      if (proxy) {
        parseKeysHookInput(_keys, memoisedOptions == null ? void 0 : memoisedOptions.splitKey).forEach(function (key) {
          return proxy.removeHotkey(parseHotkey(key, memoisedOptions == null ? void 0 : memoisedOptions.combinationKey, memoisedOptions == null ? void 0 : memoisedOptions.description));
        });
      }
    };
  }, [ref, _keys, memoisedOptions, enabledScopes]);
  return setRef;
}

var require_classnames = __commonJS({
  "../../node_modules/classnames/index.js"(exports, module) {
    init_react_import();
    (function() {
      var hasOwn = {}.hasOwnProperty;
      function classNames() {
        var classes = "";
        for (var i = 0; i < arguments.length; i++) {
          var arg = arguments[i];
          if (arg) {
            classes = appendClass(classes, parseValue(arg));
          }
        }
        return classes;
      }
      function parseValue(arg) {
        if (typeof arg === "string" || typeof arg === "number") {
          return arg;
        }
        if (typeof arg !== "object") {
          return "";
        }
        if (Array.isArray(arg)) {
          return classNames.apply(null, arg);
        }
        if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
          return arg.toString();
        }
        var classes = "";
        for (var key in arg) {
          if (hasOwn.call(arg, key) && arg[key]) {
            classes = appendClass(classes, key);
          }
        }
        return classes;
      }
      function appendClass(value, newClass) {
        if (!newClass) {
          return value;
        }
        if (value) {
          return value + " " + newClass;
        }
        return value + newClass;
      }
      if (typeof module !== "undefined" && module.exports) {
        classNames.default = classNames;
        module.exports = classNames;
      } else if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
        define("classnames", [], function() {
          return classNames;
        });
      } else {
        window.classNames = classNames;
      }
    })();
  }
});
init_react_import();
init_react_import();
init_react_import();
init_react_import();
init_react_import();
init_react_import();
var overrideKeys = [
  "header",
  "headerActions",
  "fields",
  "fieldLabel",
  "components",
  "componentItem",
  "outline",
  "puck",
  "preview"
];
init_react_import();
init_react_import();
init_react_import();
init_react_import();
init_react_import();
init_react_import();
init_react_import();
init_react_import();
var import_classnames = __toESM(require_classnames());
var getClassNameFactory = (rootClass, styles2, config = { baseClass: "" }) => (options = {}) => {
  if (typeof options === "string") {
    const descendant = options;
    const style = styles2[`${rootClass}-${descendant}`];
    if (style) {
      return config.baseClass + styles2[`${rootClass}-${descendant}`] || "";
    }
    return "";
  } else if (typeof options === "object") {
    const modifiers = options;
    const prefixedModifiers = {};
    for (let modifier in modifiers) {
      prefixedModifiers[styles2[`${rootClass}--${modifier}`]] = modifiers[modifier];
    }
    const c = styles2[rootClass];
    return config.baseClass + (0, import_classnames.default)(__spreadValues$7({
      [c]: !!c
    }, prefixedModifiers));
  } else {
    return config.baseClass + styles2[rootClass] || "";
  }
};
var get_class_name_factory_default = getClassNameFactory;
init_react_import();
var styles_module_default = { "ActionBar": "_ActionBar_rvadt_1", "ActionBar-label": "_ActionBar-label_rvadt_18", "ActionBar-action": "_ActionBar-action_rvadt_30", "ActionBar-group": "_ActionBar-group_rvadt_38" };
var getClassName = get_class_name_factory_default("ActionBar", styles_module_default);
var ActionBar = ({
  label,
  children
}) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  "div",
  {
    className: getClassName(),
    onClick: (e) => {
      e.stopPropagation();
    },
    children: [
      label && /* @__PURE__ */ jsxRuntimeExports.jsx(ActionBar.Group, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: getClassName("label"), children: label }) }),
      children
    ]
  }
);
var Action = ({
  children,
  label,
  onClick
}) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "button",
  {
    type: "button",
    className: getClassName("action"),
    onClick,
    title: label,
    children
  }
);
var Group = ({ children }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: getClassName("group"), children });
var Label = ({ label }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: getClassName("label"), children: label });
ActionBar.Action = Action;
ActionBar.Label = Label;
ActionBar.Group = Group;
init_react_import();
init_react_import();
var styles_module_default2 = { "InputWrapper": "_InputWrapper_g5w3n_1", "Input-label": "_Input-label_g5w3n_5", "Input-labelIcon": "_Input-labelIcon_g5w3n_14", "Input-disabledIcon": "_Input-disabledIcon_g5w3n_21", "Input-input": "_Input-input_g5w3n_26", "Input": "_Input_g5w3n_1", "Input--readOnly": "_Input--readOnly_g5w3n_74", "Input-radioGroupItems": "_Input-radioGroupItems_g5w3n_85", "Input-radio": "_Input-radio_g5w3n_85", "Input-radioInner": "_Input-radioInner_g5w3n_102", "Input-radioInput": "_Input-radioInput_g5w3n_147" };
const {useCallback:useCallback5,useContext:useContext3,useEffect:useEffect9,useMemo:useMemo5,useState:useState12} = await importShared('react');

init_react_import();
init_react_import();
init_react_import();
var styles_module_default3 = { "ArrayField": "_ArrayField_14u8o_5", "ArrayField--isDraggingFrom": "_ArrayField--isDraggingFrom_14u8o_13", "ArrayField-addButton": "_ArrayField-addButton_14u8o_18", "ArrayField--hasItems": "_ArrayField--hasItems_14u8o_33", "ArrayField-inner": "_ArrayField-inner_14u8o_59", "ArrayFieldItem": "_ArrayFieldItem_14u8o_67", "ArrayFieldItem--isDragging": "_ArrayFieldItem--isDragging_14u8o_78", "ArrayFieldItem--isExpanded": "_ArrayFieldItem--isExpanded_14u8o_82", "ArrayFieldItem-summary": "_ArrayFieldItem-summary_14u8o_97", "ArrayField--addDisabled": "_ArrayField--addDisabled_14u8o_127", "ArrayFieldItem-body": "_ArrayFieldItem-body_14u8o_166", "ArrayFieldItem-fieldset": "_ArrayFieldItem-fieldset_14u8o_175", "ArrayFieldItem-rhs": "_ArrayFieldItem-rhs_14u8o_183", "ArrayFieldItem-actions": "_ArrayFieldItem-actions_14u8o_189" };
init_react_import();
init_react_import();
const {forwardRef:forwardRef2,createElement:createElement2} = await importShared('react');

init_react_import();
var toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
var mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
init_react_import();
const {forwardRef,createElement} = await importShared('react');

init_react_import();
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
var Icon = forwardRef(
  (_a, ref) => {
    var _b = _a, {
      color = "currentColor",
      size = 24,
      strokeWidth = 2,
      absoluteStrokeWidth,
      className = "",
      children,
      iconNode
    } = _b, rest = __objRest$4(_b, [
      "color",
      "size",
      "strokeWidth",
      "absoluteStrokeWidth",
      "className",
      "children",
      "iconNode"
    ]);
    return createElement(
      "svg",
      __spreadValues$7(__spreadProps$6(__spreadValues$7({
        ref
      }, defaultAttributes), {
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: mergeClasses("lucide", className)
      }), rest),
      [
        ...iconNode.map(([tag, attrs]) => createElement(tag, attrs)),
        ...Array.isArray(children) ? children : [children]
      ]
    );
  }
);
var createLucideIcon = (iconName, iconNode) => {
  const Component = forwardRef2(
    (_a, ref) => {
      var _b = _a, { className } = _b, props = __objRest$4(_b, ["className"]);
      return createElement2(Icon, __spreadValues$7({
        ref,
        iconNode,
        className: mergeClasses(`lucide-${toKebabCase(iconName)}`, className)
      }, props));
    }
  );
  Component.displayName = `${iconName}`;
  return Component;
};
init_react_import();
var ChevronDown = createLucideIcon("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
init_react_import();
var ChevronRight = createLucideIcon("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
init_react_import();
var ChevronUp = createLucideIcon("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]);
init_react_import();
var CircleCheckBig = createLucideIcon("CircleCheckBig", [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
]);
init_react_import();
var Copy = createLucideIcon("Copy", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
init_react_import();
var CornerLeftUp = createLucideIcon("CornerLeftUp", [
  ["polyline", { points: "14 9 9 4 4 9", key: "m9oyvo" }],
  ["path", { d: "M20 20h-7a4 4 0 0 1-4-4V4", key: "1blwi3" }]
]);
init_react_import();
var EllipsisVertical = createLucideIcon("EllipsisVertical", [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "12", cy: "5", r: "1", key: "gxeob9" }],
  ["circle", { cx: "12", cy: "19", r: "1", key: "lyex9k" }]
]);
init_react_import();
var Globe = createLucideIcon("Globe", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
]);
init_react_import();
var Hash = createLucideIcon("Hash", [
  ["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }],
  ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }],
  ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }],
  ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }]
]);
init_react_import();
var Layers = createLucideIcon("Layers", [
  [
    "path",
    {
      d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
      key: "zw3jo"
    }
  ],
  [
    "path",
    {
      d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
      key: "1wduqc"
    }
  ],
  [
    "path",
    {
      d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
      key: "kqbvx6"
    }
  ]
]);
init_react_import();
var LayoutGrid = createLucideIcon("LayoutGrid", [
  ["rect", { width: "7", height: "7", x: "3", y: "3", rx: "1", key: "1g98yp" }],
  ["rect", { width: "7", height: "7", x: "14", y: "3", rx: "1", key: "6d4xhi" }],
  ["rect", { width: "7", height: "7", x: "14", y: "14", rx: "1", key: "nxv5o0" }],
  ["rect", { width: "7", height: "7", x: "3", y: "14", rx: "1", key: "1bb6yr" }]
]);
init_react_import();
var Link = createLucideIcon("Link", [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
]);
init_react_import();
var List = createLucideIcon("List", [
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M3 18h.01", key: "1tta3j" }],
  ["path", { d: "M3 6h.01", key: "1rqtza" }],
  ["path", { d: "M8 12h13", key: "1za7za" }],
  ["path", { d: "M8 18h13", key: "1lx6n3" }],
  ["path", { d: "M8 6h13", key: "ik3vkj" }]
]);
init_react_import();
var LockOpen = createLucideIcon("LockOpen", [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 9.9-1", key: "1mm8w8" }]
]);
init_react_import();
var Lock = createLucideIcon("Lock", [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
]);
init_react_import();
var Monitor = createLucideIcon("Monitor", [
  ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }],
  ["line", { x1: "8", x2: "16", y1: "21", y2: "21", key: "1svkeh" }],
  ["line", { x1: "12", x2: "12", y1: "17", y2: "21", key: "vw1qmm" }]
]);
init_react_import();
var PanelLeft = createLucideIcon("PanelLeft", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M9 3v18", key: "fh3hqa" }]
]);
init_react_import();
var PanelRight = createLucideIcon("PanelRight", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M15 3v18", key: "14nvp0" }]
]);
init_react_import();
var Plus = createLucideIcon("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
init_react_import();
var Redo2 = createLucideIcon("Redo2", [
  ["path", { d: "m15 14 5-5-5-5", key: "12vg1m" }],
  ["path", { d: "M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13", key: "6uklza" }]
]);
init_react_import();
var Search = createLucideIcon("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }]
]);
init_react_import();
var SlidersHorizontal = createLucideIcon("SlidersHorizontal", [
  ["line", { x1: "21", x2: "14", y1: "4", y2: "4", key: "obuewd" }],
  ["line", { x1: "10", x2: "3", y1: "4", y2: "4", key: "1q6298" }],
  ["line", { x1: "21", x2: "12", y1: "12", y2: "12", key: "1iu8h1" }],
  ["line", { x1: "8", x2: "3", y1: "12", y2: "12", key: "ntss68" }],
  ["line", { x1: "21", x2: "16", y1: "20", y2: "20", key: "14d8ph" }],
  ["line", { x1: "12", x2: "3", y1: "20", y2: "20", key: "m0wm8r" }],
  ["line", { x1: "14", x2: "14", y1: "2", y2: "6", key: "14e1ph" }],
  ["line", { x1: "8", x2: "8", y1: "10", y2: "14", key: "1i6ji0" }],
  ["line", { x1: "16", x2: "16", y1: "18", y2: "22", key: "1lctlv" }]
]);
init_react_import();
var Smartphone = createLucideIcon("Smartphone", [
  ["rect", { width: "14", height: "20", x: "5", y: "2", rx: "2", ry: "2", key: "1yt0o3" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }]
]);
init_react_import();
var Tablet = createLucideIcon("Tablet", [
  ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", ry: "2", key: "76otgf" }],
  ["line", { x1: "12", x2: "12.01", y1: "18", y2: "18", key: "1dp563" }]
]);
init_react_import();
var Trash = createLucideIcon("Trash", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }]
]);
init_react_import();
var Type = createLucideIcon("Type", [
  ["polyline", { points: "4 7 4 4 20 4 20 7", key: "1nosan" }],
  ["line", { x1: "9", x2: "15", y1: "20", y2: "20", key: "swin9y" }],
  ["line", { x1: "12", x2: "12", y1: "4", y2: "20", key: "1tx1rr" }]
]);
init_react_import();
var Undo2 = createLucideIcon("Undo2", [
  ["path", { d: "M9 14 4 9l5-5", key: "102s5s" }],
  ["path", { d: "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11", key: "f3b9sd" }]
]);
init_react_import();
var ZoomIn = createLucideIcon("ZoomIn", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
]);
init_react_import();
var ZoomOut = createLucideIcon("ZoomOut", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
]);
init_react_import();
init_react_import();
const {useState} = await importShared('react');

init_react_import();
var IconButton_module_default = { "IconButton": "_IconButton_swpni_1", "IconButton--disabled": "_IconButton--disabled_swpni_20", "IconButton-title": "_IconButton-title_swpni_33" };
init_react_import();
init_react_import();
init_react_import();
init_react_import();
var reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};
init_react_import();
var replace = (list, index, newItem) => {
  const result = Array.from(list);
  result.splice(index, 1);
  result.splice(index, 0, newItem);
  return result;
};
init_react_import();
var styles_module_default4 = { "Loader": "_Loader_nacdm_13", "loader-animation": "_loader-animation_nacdm_1" };
var getClassName2 = get_class_name_factory_default("Loader", styles_module_default4);
var Loader = (_a) => {
  var _b = _a, {
    color,
    size = 16
  } = _b, props = __objRest$4(_b, [
    "color",
    "size"
  ]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    __spreadValues$7({
      className: getClassName2(),
      style: {
        width: size,
        height: size,
        color
      },
      "aria-label": "loading"
    }, props)
  );
};
var getClassName3 = get_class_name_factory_default("IconButton", IconButton_module_default);
var IconButton = ({
  children,
  href,
  onClick,
  variant = "primary",
  type,
  disabled,
  tabIndex,
  newTab,
  fullWidth,
  title
}) => {
  const [loading, setLoading] = useState(false);
  const ElementType = href ? "a" : "button";
  const el = /* @__PURE__ */ jsxRuntimeExports.jsxs(
    ElementType,
    {
      className: getClassName3({
        primary: variant === "primary",
        secondary: variant === "secondary",
        disabled,
        fullWidth
      }),
      onClick: (e) => {
        if (!onClick) return;
        setLoading(true);
        Promise.resolve(onClick(e)).then(() => {
          setLoading(false);
        });
      },
      type,
      disabled: disabled || loading,
      tabIndex,
      target: newTab ? "_blank" : void 0,
      rel: newTab ? "noreferrer" : void 0,
      href,
      title,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: getClassName3("title"), children: title }),
        children,
        loading && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          "  ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, { size: 14 })
        ] })
      ]
    }
  );
  return el;
};
const {useCallback:useCallback3,useEffect:useEffect4,useState:useState7} = await importShared('react');

init_react_import();
init_react_import();
var styles_module_default5 = { "DragIcon": "_DragIcon_17p8x_1", "DragIcon--disabled": "_DragIcon--disabled_17p8x_8" };
var getClassName4 = get_class_name_factory_default("DragIcon", styles_module_default5);
var DragIcon = ({ isDragDisabled }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: getClassName4({ disabled: isDragDisabled }), children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 20 20", width: "12", fill: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M7 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 2zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 14zm6-8a2 2 0 1 0-.001-4.001A2 2 0 0 0 13 6zm0 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 14z" }) }) });
init_react_import();
const {createContext,useContext,useEffect:useEffect3,useState:useState4} = await importShared('react');

init_react_import();
function getItem(selector, data, dynamicProps = {}) {
  if (!selector.zone || selector.zone === rootDroppableId) {
    const item2 = data.content[selector.index];
    return (item2 == null ? void 0 : item2.props) ? __spreadProps$6(__spreadValues$7({}, item2), { props: dynamicProps[item2.props.id] || item2.props }) : void 0;
  }
  const item = setupZone(data, selector.zone).zones[selector.zone][selector.index];
  return (item == null ? void 0 : item.props) ? __spreadProps$6(__spreadValues$7({}, item), { props: dynamicProps[item.props.id] || item.props }) : void 0;
}
init_react_import();
var defaultViewports = [
  { width: 360, height: "auto", icon: "Smartphone", label: "Small" },
  { width: 768, height: "auto", icon: "Tablet", label: "Medium" },
  { width: 1280, height: "auto", icon: "Monitor", label: "Large" }
];
init_react_import();
const {useCallback,useEffect,useState:useState2} = await importShared('react');

init_react_import();
var flattenData = (data) => {
  return Object.keys(data.zones || {}).reduce(
    (acc, zone) => [...acc, ...data.zones[zone]],
    data.content
  );
};
var useResolvedPermissions = (config, appState, globalPermissions, setComponentLoading, unsetComponentLoading) => {
  const [cache, setCache] = useState2({});
  const [resolvedPermissions, setResolvedPermissions] = useState2({});
  const resolveDataForItem = useCallback(
    (item, force = false) => __async(void 0, null, function* () {
      var _a, _b, _c;
      const componentConfig = item.type === "root" ? config.root : config.components[item.type];
      if (!componentConfig) {
        return;
      }
      const initialPermissions = __spreadValues$7(__spreadValues$7({}, globalPermissions), componentConfig.permissions);
      if (componentConfig.resolvePermissions) {
        const changed = getChanged(item, (_a = cache[item.props.id]) == null ? void 0 : _a.lastData);
        if (Object.values(changed).some((el) => el === true) || force) {
          setComponentLoading == null ? void 0 : setComponentLoading(item.props.id);
          const resolvedPermissions2 = yield componentConfig.resolvePermissions(
            item,
            {
              changed,
              lastPermissions: ((_b = cache[item.props.id]) == null ? void 0 : _b.lastPermissions) || null,
              permissions: initialPermissions,
              appState,
              lastData: ((_c = cache[item.props.id]) == null ? void 0 : _c.lastData) || null
            }
          );
          setCache((_cache) => __spreadProps$6(__spreadValues$7({}, _cache), {
            [item.props.id]: {
              lastData: item,
              lastPermissions: resolvedPermissions2
            }
          }));
          setResolvedPermissions((p) => __spreadProps$6(__spreadValues$7({}, p), {
            [item.props.id]: resolvedPermissions2
          }));
          unsetComponentLoading == null ? void 0 : unsetComponentLoading(item.props.id);
        }
      }
    }),
    [config, globalPermissions, appState, cache]
  );
  const resolveDataForRoot = (force = false) => {
    resolveDataForItem(
      // Shim the root data in by conforming to component data shape
      {
        type: "root",
        props: __spreadProps$6(__spreadValues$7({}, appState.data.root.props), { id: "puck-root" })
      },
      force
    );
  };
  const resolvePermissions = useCallback(
    (..._0) => __async(void 0, [..._0], function* ({ item, type, root } = {}, force = false) {
      if (item) {
        yield resolveDataForItem(item, force);
      } else if (type) {
        flattenData(appState.data).filter((item2) => item2.type === type).map((item2) => __async(void 0, null, function* () {
          yield resolveDataForItem(item2, force);
        }));
      } else if (root) {
        resolveDataForRoot(force);
      } else {
        resolveDataForRoot(force);
        flattenData(appState.data).map((item2) => __async(void 0, null, function* () {
          yield resolveDataForItem(item2, force);
        }));
      }
    }),
    [config, appState]
  );
  const refreshPermissions = useCallback(
    (params) => __async(void 0, null, function* () {
      resolvePermissions(params, true);
    }),
    [config, appState]
  );
  useEffect(() => {
    resolvePermissions();
  }, [config, appState.data]);
  const getPermissions = useCallback(
    ({ item, type, root } = {}) => {
      if (item) {
        const componentConfig = config.components[item.type];
        const initialPermissions = __spreadValues$7(__spreadValues$7({}, globalPermissions), componentConfig == null ? void 0 : componentConfig.permissions);
        const resolvedForItem = resolvedPermissions[item.props.id];
        return resolvedForItem ? __spreadValues$7(__spreadValues$7({}, globalPermissions), resolvedForItem) : initialPermissions;
      } else if (type) {
        const componentConfig = config.components[type];
        return __spreadValues$7(__spreadValues$7({}, globalPermissions), componentConfig == null ? void 0 : componentConfig.permissions);
      } else if (root) {
        const rootConfig = config.root;
        const initialPermissions = __spreadValues$7(__spreadValues$7({}, globalPermissions), rootConfig == null ? void 0 : rootConfig.permissions);
        const resolvedForItem = resolvedPermissions["puck-root"];
        return resolvedForItem ? __spreadValues$7(__spreadValues$7({}, globalPermissions), resolvedForItem) : initialPermissions;
      }
      return globalPermissions;
    },
    [config, resolvedPermissions]
  );
  return {
    getPermissions,
    refreshPermissions
  };
};
init_react_import();
const {useCallback:useCallback2,useEffect:useEffect2,useState:useState3} = await importShared('react');

init_react_import();
var applyDynamicProps = (data, dynamicProps, rootData) => {
  return __spreadProps$6(__spreadValues$7({}, data), {
    root: __spreadValues$7(__spreadValues$7({}, data.root), rootData ? rootData : {}),
    content: data.content.map((item) => {
      return dynamicProps[item.props.id] ? __spreadValues$7(__spreadValues$7({}, item), dynamicProps[item.props.id]) : item;
    }),
    zones: Object.keys(data.zones || {}).reduce((acc, zoneKey) => {
      return __spreadProps$6(__spreadValues$7({}, acc), {
        [zoneKey]: data.zones[zoneKey].map((item) => {
          return dynamicProps[item.props.id] ? __spreadValues$7(__spreadValues$7({}, item), dynamicProps[item.props.id]) : item;
        })
      });
    }, {})
  });
};
var useResolvedData = (appState, config, dispatch, setComponentLoading, unsetComponentLoading, refreshPermissions) => {
  const [{ resolverKey, newAppState }, setResolverState] = useState3({
    resolverKey: 0,
    newAppState: appState
  });
  const deferredSetStates = {};
  const _setComponentLoading = useCallback2(
    (id, loading, defer2 = 0) => {
      if (deferredSetStates[id]) {
        clearTimeout(deferredSetStates[id]);
        delete deferredSetStates[id];
      }
      deferredSetStates[id] = setTimeout(() => {
        if (loading) {
          setComponentLoading(id);
        } else {
          unsetComponentLoading(id);
        }
        delete deferredSetStates[id];
      }, defer2);
    },
    []
  );
  const runResolvers = () => __async(void 0, null, function* () {
    const newData = newAppState.data;
    const flatContent = flattenData(newData).filter(
      (item) => {
        var _a;
        return !!((_a = config.components[item.type]) == null ? void 0 : _a.resolveData);
      }
    );
    const applyIfChange = (dynamicDataMap, dynamicRoot) => {
      const processed = applyDynamicProps(
        appState.data,
        dynamicDataMap,
        dynamicRoot
      );
      const processedAppState = __spreadProps$6(__spreadValues$7({}, appState), { data: processed });
      const containsChanges = JSON.stringify(appState) !== JSON.stringify(processedAppState);
      if (containsChanges) {
        dispatch({
          type: "set",
          state: (prev) => __spreadProps$6(__spreadValues$7({}, prev), {
            data: applyDynamicProps(prev.data, dynamicDataMap, dynamicRoot),
            ui: resolverKey > 0 ? __spreadValues$7(__spreadValues$7({}, prev.ui), newAppState.ui) : prev.ui
          }),
          recordHistory: resolverKey > 0
        });
      }
    };
    const promises = [];
    promises.push(
      (() => __async(void 0, null, function* () {
        _setComponentLoading("puck-root", true, 50);
        const dynamicRoot = yield resolveRootData(newData, config);
        applyIfChange({}, dynamicRoot);
        _setComponentLoading("puck-root", false);
      }))()
    );
    flatContent.forEach((item) => {
      promises.push(
        (() => __async(void 0, null, function* () {
          refreshPermissions({ item });
          const dynamicData = yield resolveComponentData(
            item,
            config,
            (item2) => {
              _setComponentLoading(item2.props.id, true, 50);
            },
            (item2) => {
              deferredSetStates[item2.props.id];
              _setComponentLoading(item2.props.id, false);
            }
          );
          const dynamicDataMap = { [item.props.id]: dynamicData };
          applyIfChange(dynamicDataMap);
        }))()
      );
    });
    yield Promise.all(promises);
  });
  useEffect2(() => {
    runResolvers();
  }, [resolverKey]);
  const resolveData = useCallback2((newAppState2 = appState) => {
    setResolverState((curr) => ({
      resolverKey: curr.resolverKey + 1,
      newAppState: newAppState2
    }));
  }, []);
  return {
    resolveData
  };
};
var defaultAppState = {
  data: { content: [], root: {} },
  ui: {
    leftSideBarVisible: true,
    rightSideBarVisible: true,
    arrayState: {},
    itemSelector: null,
    componentList: {},
    isDragging: false,
    previewMode: "edit",
    viewports: {
      current: {
        width: defaultViewports[0].width,
        height: defaultViewports[0].height || "auto"
      },
      options: [],
      controlsVisible: true
    },
    field: { focus: null }
  }
};
var defaultContext = {
  state: defaultAppState,
  dispatch: () => null,
  config: { components: {} },
  componentState: {},
  setComponentState: () => {
  },
  resolveData: () => {
  },
  plugins: [],
  overrides: {},
  history: {},
  viewports: defaultViewports,
  zoomConfig: {
    autoZoom: 1,
    rootHeight: 0,
    zoom: 1
  },
  setZoomConfig: () => null,
  status: "LOADING",
  setStatus: () => null,
  iframe: {},
  globalPermissions: {},
  getPermissions: () => ({}),
  refreshPermissions: () => null
};
var appContext = createContext(defaultContext);
var AppProvider = ({
  children,
  value
}) => {
  const [zoomConfig, setZoomConfig] = useState4(defaultContext.zoomConfig);
  const [status, setStatus] = useState4("LOADING");
  useEffect3(() => {
    setStatus("MOUNTED");
  }, []);
  const selectedItem = value.state.ui.itemSelector ? getItem(value.state.ui.itemSelector, value.state.data) : void 0;
  const [componentState, setComponentState] = useState4({});
  const setComponentLoading = (id) => {
    setComponentState((prev) => {
      var _a;
      return __spreadProps$6(__spreadValues$7({}, prev), {
        [id]: __spreadProps$6(__spreadValues$7({}, prev[id]), {
          loadingCount: (((_a = prev[id]) == null ? void 0 : _a.loadingCount) || 0) + 1
        })
      });
    });
  };
  const unsetComponentLoading = (id) => {
    setComponentState((prev) => {
      var _a;
      return __spreadProps$6(__spreadValues$7({}, prev), {
        [id]: __spreadProps$6(__spreadValues$7({}, prev[id]), {
          loadingCount: Math.max((((_a = prev[id]) == null ? void 0 : _a.loadingCount) || 0) - 1, 0)
        })
      });
    });
  };
  const { getPermissions, refreshPermissions } = useResolvedPermissions(
    value.config,
    value.state,
    value.globalPermissions || {},
    setComponentLoading,
    unsetComponentLoading
  );
  const { resolveData } = useResolvedData(
    value.state,
    value.config,
    value.dispatch,
    setComponentLoading,
    unsetComponentLoading,
    refreshPermissions
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    appContext.Provider,
    {
      value: __spreadProps$6(__spreadValues$7({}, value), {
        selectedItem,
        zoomConfig,
        setZoomConfig,
        status,
        setStatus,
        getPermissions,
        refreshPermissions,
        componentState,
        setComponentState,
        resolveData
      }),
      children
    }
  );
};
function useAppContext() {
  const mainContext = useContext(appContext);
  return __spreadProps$6(__spreadValues$7({}, mainContext), {
    // Helpers
    setUi: (ui, recordHistory) => {
      return mainContext.dispatch({
        type: "setUi",
        ui,
        recordHistory
      });
    }
  });
}
init_react_import();
const {useState:useState6} = await importShared('react');

init_react_import();
function useDroppableSafe(input) {
  if (typeof window === "undefined") {
    return { ref: () => {
    } };
  }
  return useDroppable(input);
}
function useDraggableSafe(input) {
  if (typeof window === "undefined") {
    return { ref: () => {
    } };
  }
  return useDraggable(input);
}
function useSortableSafe(input) {
  if (typeof window === "undefined") {
    return { ref: () => {
    }, status: "idle" };
  }
  return useSortable(input);
}
init_react_import();
const {useState:useState5} = await importShared('react');

init_react_import();
var _clearTimeout;
var _PointerSensor = class _PointerSensor2 extends Sensor {
  constructor(manager, options) {
    super(manager);
    this.manager = manager;
    this.options = options;
    this.listeners = new Listeners();
    this.cleanup = /* @__PURE__ */ new Set();
    this.source = void 0;
    __privateAdd$5(this, _clearTimeout);
    this.handleCancel = this.handleCancel.bind(this);
    this.handlePointerUp = this.handlePointerUp.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    E(() => {
      const unbindGlobal = this.bindGlobal(options != null ? options : {});
      return () => {
        unbindGlobal();
      };
    });
  }
  bind(source, options = this.options) {
    const unbind = E(() => {
      var _a;
      const target = (_a = source.handle) != null ? _a : source.element;
      const listener = (event) => {
        if (isPointerEvent(event)) {
          this.handlePointerDown(event, source, options);
        }
      };
      if (target) {
        patchWindow(target.ownerDocument.defaultView);
        target.addEventListener("pointerdown", listener);
        return () => {
          target.removeEventListener("pointerdown", listener);
        };
      }
    });
    return unbind;
  }
  bindGlobal(options) {
    const documents = /* @__PURE__ */ new Set();
    for (const draggable of this.manager.registry.draggables.value) {
      if (draggable.element) {
        documents.add(getDocument(draggable.element));
      }
    }
    for (const droppable of this.manager.registry.droppables.value) {
      if (droppable.element) {
        documents.add(getDocument(droppable.element));
      }
    }
    const unbindFns = Array.from(documents).map(
      (doc) => this.listeners.bind(doc, [
        {
          type: "pointermove",
          listener: (event) => this.handlePointerMove(event, doc, options)
        },
        {
          type: "pointerup",
          listener: this.handlePointerUp,
          options: {
            capture: true
          }
        },
        {
          // Cancel activation if there is a competing Drag and Drop interaction
          type: "dragstart",
          listener: this.handleDragStart
        }
      ])
    );
    return () => {
      unbindFns.forEach((unbind) => unbind());
    };
  }
  handlePointerDown(event, source, options = {}) {
    if (this.disabled || !event.isPrimary || event.button !== 0 || !isElement(event.target) || source.disabled) {
      return;
    }
    const offset = getFrameTransform(source.element);
    this.initialCoordinates = {
      x: event.clientX * offset.scaleX + offset.x,
      y: event.clientY * offset.scaleY + offset.y
    };
    this.source = source;
    const { activationConstraints } = options;
    const constraints = typeof activationConstraints === "function" ? activationConstraints(event, source) : activationConstraints;
    event.stopImmediatePropagation();
    if (!(constraints == null ? void 0 : constraints.delay) && !(constraints == null ? void 0 : constraints.distance)) {
      this.handleStart(source, event);
    } else {
      const { delay } = constraints;
      if (delay) {
        const timeout3 = setTimeout(
          () => this.handleStart(source, event),
          delay.value
        );
        __privateSet$5(this, _clearTimeout, () => {
          clearTimeout(timeout3);
          __privateSet$5(this, _clearTimeout, void 0);
        });
      }
    }
    const cleanup = () => {
      var _a;
      (_a = __privateGet$5(this, _clearTimeout)) == null ? void 0 : _a.call(this);
      this.initialCoordinates = void 0;
      this.source = void 0;
    };
    this.cleanup.add(cleanup);
  }
  handlePointerMove(event, doc, options) {
    if (!this.source) {
      return;
    }
    const ownerDocument = this.source.element && getDocument(this.source.element);
    if (doc !== ownerDocument) {
      return;
    }
    const coordinates = {
      x: event.clientX,
      y: event.clientY
    };
    const offset = getFrameTransform(this.source.element);
    coordinates.x = coordinates.x * offset.scaleX + offset.x;
    coordinates.y = coordinates.y * offset.scaleY + offset.y;
    if (this.manager.dragOperation.status.dragging) {
      event.preventDefault();
      event.stopPropagation();
      this.manager.actions.move({ to: coordinates });
      return;
    }
    if (!this.initialCoordinates) {
      return;
    }
    const delta = {
      x: coordinates.x - this.initialCoordinates.x,
      y: coordinates.y - this.initialCoordinates.y
    };
    const { activationConstraints } = options;
    const constraints = typeof activationConstraints === "function" ? activationConstraints(event, this.source) : activationConstraints;
    const { distance, delay } = constraints != null ? constraints : {};
    if (distance) {
      if (distance.tolerance != null && exceedsDistance(delta, distance.tolerance)) {
        return this.handleCancel();
      }
      if (exceedsDistance(delta, distance.value)) {
        return this.handleStart(this.source, event);
      }
    }
    if (delay) {
      if (exceedsDistance(delta, delay.tolerance)) {
        return this.handleCancel();
      }
    }
  }
  handlePointerUp(event) {
    if (!this.source) {
      return;
    }
    event.preventDefault();
    event.stopPropagation();
    const { status } = this.manager.dragOperation;
    if (!status.idle) {
      const canceled = !status.initialized;
      this.manager.actions.stop({ canceled });
    }
    this.cleanup.forEach((cleanup) => cleanup());
    this.cleanup.clear();
  }
  handleKeyDown(event) {
    if (event.key === "Escape") {
      event.preventDefault();
      this.handleCancel();
    }
  }
  handleStart(source, event) {
    var _a;
    const { manager, initialCoordinates } = this;
    (_a = __privateGet$5(this, _clearTimeout)) == null ? void 0 : _a.call(this);
    if (!initialCoordinates || manager.dragOperation.status.initialized) {
      return;
    }
    if (event.defaultPrevented) {
      return;
    }
    event.preventDefault();
    r$1(() => {
      manager.actions.setDragSource(source.id);
      manager.actions.start({ coordinates: initialCoordinates, event });
    });
    const ownerDocument = getDocument(event.target);
    const unbind = this.listeners.bind(ownerDocument, [
      {
        // Prevent scrolling on touch devices
        type: "touchmove",
        listener: preventDefault,
        options: {
          passive: false
        }
      },
      {
        // Prevent click events
        type: "click",
        listener: preventDefault
      },
      {
        type: "keydown",
        listener: this.handleKeyDown
      }
    ]);
    ownerDocument.body.setPointerCapture(event.pointerId);
    this.cleanup.add(unbind);
  }
  handleDragStart(event) {
    const { target } = event;
    if (!isElement(target)) {
      return;
    }
    const isNativeDraggable = isHTMLElement(target) && target.draggable && target.getAttribute("draggable") === "true";
    if (isNativeDraggable) {
      this.handleCancel();
    } else {
      preventDefault(event);
    }
  }
  handleCancel() {
    const { dragOperation } = this.manager;
    if (dragOperation.status.initialized) {
      this.manager.actions.stop({ canceled: true });
    }
    this.cleanup.forEach((cleanup) => cleanup());
    this.cleanup.clear();
  }
  destroy() {
    this.listeners.clear();
  }
};
_clearTimeout = /* @__PURE__ */ new WeakMap();
_PointerSensor.configure = configurator(_PointerSensor);
var PointerSensor = _PointerSensor;
function preventDefault(event) {
  event.preventDefault();
}
function noop() {
}
var windows = /* @__PURE__ */ new WeakSet();
function patchWindow(window2) {
  if (!window2 || windows.has(window2)) {
    return;
  }
  window2.addEventListener("touchmove", noop, {
    capture: false,
    passive: false
  });
  windows.add(window2);
}
var useSensors = () => {
  const [sensors] = useState5(() => [
    PointerSensor.configure({
      activationConstraints(event, source) {
        var _a;
        const { pointerType, target } = event;
        if (pointerType === "mouse" && isElement(target) && (source.handle === target || ((_a = source.handle) == null ? void 0 : _a.contains(target)))) {
          return void 0;
        }
        const delay = { value: 200, tolerance: 10 };
        if (pointerType === "touch") {
          return { delay };
        }
        return {
          delay,
          distance: { value: 5 }
        };
      }
    })
  ]);
  return sensors;
};
init_react_import();
init_react_import();
init_react_import();
var collisionDebug = (a, b, id, color, label) => {
  return;
};
var distanceChange = "increasing";
var directionalCollision = (input, previous) => {
  var _a;
  const { dragOperation, droppable } = input;
  const { shape: dropShape } = droppable;
  const { position } = dragOperation;
  const dragShape = (_a = dragOperation.shape) == null ? void 0 : _a.current;
  if (!dragShape || !dropShape) return null;
  const dropCenter = dropShape.center;
  const distanceToPrevious = Math.sqrt(
    Math.pow(dropCenter.x - previous.x, 2) + Math.pow(dropCenter.y - previous.y, 2)
  );
  const distanceToCurrent = Math.sqrt(
    Math.pow(dropCenter.x - position.current.x, 2) + Math.pow(dropCenter.y - position.current.y, 2)
  );
  distanceChange = distanceToCurrent === distanceToPrevious ? distanceChange : distanceToCurrent < distanceToPrevious ? "decreasing" : "increasing";
  collisionDebug(
    dragShape.center,
    dropCenter,
    droppable.id.toString());
  if (distanceChange === "decreasing") {
    return {
      id: droppable.id,
      value: 1,
      type: CollisionType.Collision
    };
  }
  return null;
};
init_react_import();
var getDirection = (dragAxis, delta) => {
  if (dragAxis === "dynamic") {
    if (Math.abs(delta.y) > Math.abs(delta.x)) {
      return delta.y === 0 ? null : delta.y > 0 ? "down" : "up";
    } else {
      return delta.x === 0 ? null : delta.x > 0 ? "right" : "left";
    }
  } else if (dragAxis === "x") {
    return delta.x === 0 ? null : delta.x > 0 ? "right" : "left";
  }
  return delta.y === 0 ? null : delta.y > 0 ? "down" : "up";
};
init_react_import();
var getMidpointImpact = (dragShape, dropShape, direction, offsetMultiplier = 0) => {
  const dragRect = dragShape.boundingRectangle;
  const dropCenter = dropShape.center;
  if (direction === "down") {
    const offset2 = offsetMultiplier * dropShape.boundingRectangle.height;
    return dragRect.bottom >= dropCenter.y + offset2;
  } else if (direction === "up") {
    const offset2 = offsetMultiplier * dropShape.boundingRectangle.height;
    return dragRect.top < dropCenter.y - offset2;
  } else if (direction === "left") {
    const offset2 = offsetMultiplier * dropShape.boundingRectangle.width;
    return dropCenter.x - offset2 >= dragRect.left;
  }
  const offset = offsetMultiplier * dropShape.boundingRectangle.width;
  return dragRect.right - offset >= dropCenter.x;
};
init_react_import();
var INTERVAL_SENSITIVITY = 10;
var intervalCache = {
  current: { x: 0, y: 0 },
  delta: { x: 0, y: 0 },
  previous: { x: 0, y: 0 },
  direction: null
};
var trackMovementInterval = (point, dragAxis = "dynamic") => {
  intervalCache.current = point;
  intervalCache.delta = {
    x: point.x - intervalCache.previous.x,
    y: point.y - intervalCache.previous.y
  };
  intervalCache.direction = getDirection(dragAxis, intervalCache.delta) || intervalCache.direction;
  if (Math.abs(intervalCache.delta.x) > INTERVAL_SENSITIVITY || Math.abs(intervalCache.delta.y) > INTERVAL_SENSITIVITY) {
    intervalCache.previous = Point.from(point);
  }
  return intervalCache;
};
init_react_import();
var pointerIntersection = ({
  dragOperation,
  droppable
}) => {
  const pointerCoordinates = dragOperation.position.current;
  if (!pointerCoordinates) {
    return null;
  }
  const { id } = droppable;
  if (!droppable.shape) {
    return null;
  }
  if (droppable.shape.containsPoint(pointerCoordinates)) {
    const distance = Point.distance(droppable.shape.center, pointerCoordinates);
    return {
      id,
      value: 1 / distance,
      type: CollisionType.PointerIntersection,
      priority: CollisionPriority.High
    };
  }
  return null;
};
var closestCorners = (input) => {
  const { dragOperation, droppable } = input;
  const { shape, position } = dragOperation;
  if (!droppable.shape) {
    return null;
  }
  const { left, top, right, bottom } = droppable.shape.boundingRectangle;
  const corners = [
    {
      x: left,
      y: top
    },
    {
      x: right,
      y: top
    },
    {
      x: left,
      y: bottom
    },
    {
      x: right,
      y: bottom
    }
  ];
  const distance = corners.reduce(
    (acc, corner) => {
      var _a;
      return acc + Point.distance(
        Point.from(corner),
        (_a = shape == null ? void 0 : shape.current.center) != null ? _a : position.current
      );
    },
    0
  );
  const value = distance / 4;
  return {
    id: droppable.id,
    value: 1 / value,
    type: CollisionType.Collision,
    priority: CollisionPriority.Normal
  };
};
init_react_import();
var collisionStore = createStore(() => ({
  fallbackEnabled: false
}));
var flushNext = "";
var createDynamicCollisionDetector = (dragAxis, midpointOffset = 0.05) => (input) => {
  var _a, _b, _c, _d, _e;
  const { dragOperation, droppable } = input;
  const { position } = dragOperation;
  const dragShape = (_a = dragOperation.shape) == null ? void 0 : _a.current;
  const { shape: dropShape } = droppable;
  if (!dragShape || !dropShape) {
    return null;
  }
  const { center: dragCenter } = dragShape;
  const { fallbackEnabled } = collisionStore.getState();
  const interval = trackMovementInterval(position.current, dragAxis);
  dragOperation.data = __spreadProps$6(__spreadValues$7({}, dragOperation.data), {
    direction: interval.direction
  });
  const collisionMap = dragOperation.data.collisionMap || {};
  dragOperation.data.collisionMap = collisionMap;
  collisionMap[droppable.id] = {
    direction: interval.direction
  };
  const { center: dropCenter } = dropShape;
  const overMidpoint = getMidpointImpact(
    dragShape,
    dropShape,
    interval.direction,
    midpointOffset
  );
  if (((_b = dragOperation.source) == null ? void 0 : _b.id) === droppable.id) {
    const collision = directionalCollision(input, interval.previous);
    collisionDebug(dragCenter, dropCenter, droppable.id.toString());
    if (collision) {
      return __spreadProps$6(__spreadValues$7({}, collision), {
        priority: CollisionPriority.Highest
      });
    }
  }
  const intersectionArea = dragShape.intersectionArea(dropShape);
  const intersectionRatio = intersectionArea / dropShape.area;
  if (intersectionArea && overMidpoint) {
    collisionDebug(
      dragCenter,
      dropCenter,
      droppable.id.toString());
    const collision = {
      id: droppable.id,
      value: intersectionRatio,
      priority: CollisionPriority.High,
      type: CollisionType.Collision
    };
    const shouldFlushId = flushNext === droppable.id;
    flushNext = "";
    return __spreadProps$6(__spreadValues$7({}, collision), { id: shouldFlushId ? "flush" : collision.id });
  }
  if (fallbackEnabled && ((_c = dragOperation.source) == null ? void 0 : _c.id) !== droppable.id) {
    const xAxisIntersection = dropShape.boundingRectangle.right > dragShape.boundingRectangle.left && dropShape.boundingRectangle.left < dragShape.boundingRectangle.right;
    const yAxisIntersection = dropShape.boundingRectangle.bottom > dragShape.boundingRectangle.top && dropShape.boundingRectangle.top < dragShape.boundingRectangle.bottom;
    if (dragAxis === "y" && xAxisIntersection || yAxisIntersection) {
      const fallbackCollision = closestCorners(input);
      if (fallbackCollision) {
        const direction = getDirection(dragAxis, {
          x: dragShape.center.x - (((_d = droppable.shape) == null ? void 0 : _d.center.x) || 0),
          y: dragShape.center.y - (((_e = droppable.shape) == null ? void 0 : _e.center.y) || 0)
        });
        collisionMap[droppable.id] = {
          direction
        };
        if (intersectionArea) {
          collisionDebug(
            dragCenter,
            dropCenter,
            droppable.id.toString());
          flushNext = droppable.id;
          return __spreadProps$6(__spreadValues$7({}, fallbackCollision), {
            priority: CollisionPriority.Low
          });
        }
        collisionDebug(
          dragCenter,
          dropCenter,
          droppable.id.toString());
        return __spreadProps$6(__spreadValues$7({}, fallbackCollision), { priority: CollisionPriority.Lowest });
      }
    }
  }
  collisionDebug(dragCenter, dropCenter, droppable.id.toString());
  delete collisionMap[droppable.id];
  return null;
};
var SortableProvider = ({
  children,
  onDragStart,
  onDragEnd,
  onMove
}) => {
  const [move, setMove] = useState6({ source: -1, target: -1 });
  const sensors = useSensors();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    DragDropProvider,
    {
      sensors,
      modifiers: [
        RestrictToElement.configure({
          element() {
            return document.querySelector("[data-dnd-container]");
          }
        })
      ],
      onDragStart,
      onDragOver: (event, manager) => {
        var _a, _b;
        const { operation } = event;
        const { source, target } = operation;
        if (!source || !target) return;
        let sourceIndex = source.data.index;
        let targetIndex = target.data.index;
        const collisionData = (_b = (_a = manager.dragOperation.data) == null ? void 0 : _a.collisionMap) == null ? void 0 : _b[target.id];
        if (sourceIndex !== targetIndex && source.id !== target.id) {
          const collisionPosition = (collisionData == null ? void 0 : collisionData.direction) === "up" ? "before" : "after";
          if (targetIndex >= sourceIndex) {
            targetIndex = targetIndex - 1;
          }
          if (collisionPosition === "after") {
            targetIndex = targetIndex + 1;
          }
          setMove({
            source: sourceIndex,
            target: targetIndex
          });
        }
      },
      onDragEnd: () => {
        setTimeout(() => {
          if (move.source !== -1 && move.target !== -1) {
            onMove(move);
          }
          onDragEnd();
        }, 250);
        setMove({ source: -1, target: -1 });
      },
      children
    }
  );
};
var Sortable = ({
  id,
  index,
  disabled,
  children,
  type = "item"
}) => {
  const { ref: sortableRef, status } = useSortableSafe({
    id,
    type,
    index,
    disabled,
    data: { index },
    collisionDetector: createDynamicCollisionDetector("y")
  });
  return children({ status, ref: sortableRef });
};
init_react_import();
const {createContext:createContext2,useContext:useContext2,useMemo} = await importShared('react');
var NestedFieldContext = createContext2({});
var useNestedFieldContext = () => {
  const context = useContext2(NestedFieldContext);
  return __spreadProps$6(__spreadValues$7({}, context), {
    readOnlyFields: context.readOnlyFields || {}
  });
};
var NestedFieldProvider = ({
  children,
  name,
  subName,
  wildcardName = name,
  readOnlyFields
}) => {
  const subPath = `${name}.${subName}`;
  const wildcardSubPath = `${wildcardName}.${subName}`;
  const subReadOnlyFields = useMemo(
    () => Object.keys(readOnlyFields).reduce((acc, readOnlyKey) => {
      const isLocal = readOnlyKey.indexOf(subPath) > -1 || readOnlyKey.indexOf(wildcardSubPath) > -1;
      if (isLocal) {
        const subPathPattern = new RegExp(
          `^(${name}|${wildcardName}).`.replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\./g, "\\.").replace(/\*/g, "\\*")
        );
        const localName = readOnlyKey.replace(subPathPattern, "");
        return __spreadProps$6(__spreadValues$7({}, acc), {
          [localName]: readOnlyFields[readOnlyKey]
        });
      }
      return acc;
    }, {}),
    [name, subName, wildcardName, readOnlyFields]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    NestedFieldContext.Provider,
    {
      value: { readOnlyFields: subReadOnlyFields, localName: subName },
      children
    }
  );
};
var getClassName5 = get_class_name_factory_default("ArrayField", styles_module_default3);
var getClassNameItem = get_class_name_factory_default("ArrayFieldItem", styles_module_default3);
var ArrayField = ({
  field,
  onChange,
  value: _value,
  name,
  label,
  readOnly,
  id,
  Label: Label2 = (props) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", __spreadValues$7({}, props))
}) => {
  const { state, setUi, selectedItem, getPermissions } = useAppContext();
  const { readOnlyFields, localName = name } = useNestedFieldContext();
  const value = _value;
  const arrayState = state.ui.arrayState[id] || {
    items: Array.from(value || []).map((item, idx) => {
      return {
        _originalIndex: idx,
        _arrayId: `${id}-${idx}`
      };
    }),
    openId: ""
  };
  const [localState, setLocalState] = useState7({ arrayState, value });
  useEffect4(() => {
    setLocalState({ arrayState, value });
  }, [value, state.ui.arrayState[id]]);
  const mapArrayStateToUi = useCallback3(
    (partialArrayState) => {
      return {
        arrayState: __spreadProps$6(__spreadValues$7({}, state.ui.arrayState), {
          [id]: __spreadValues$7(__spreadValues$7({}, arrayState), partialArrayState)
        })
      };
    },
    [arrayState]
  );
  const getHighestIndex = useCallback3(() => {
    return arrayState.items.reduce(
      (acc, item) => item._originalIndex > acc ? item._originalIndex : acc,
      -1
    );
  }, [arrayState]);
  const regenerateArrayState = useCallback3(
    (value2) => {
      let highestIndex = getHighestIndex();
      const newItems = Array.from(value2 || []).map((item, idx) => {
        var _a;
        const arrayStateItem = arrayState.items[idx];
        const newItem = {
          _originalIndex: typeof (arrayStateItem == null ? void 0 : arrayStateItem._originalIndex) !== "undefined" ? arrayStateItem._originalIndex : highestIndex + 1,
          _arrayId: ((_a = arrayState.items[idx]) == null ? void 0 : _a._arrayId) || `${id}-${highestIndex + 1}`
        };
        if (newItem._originalIndex > highestIndex) {
          highestIndex = newItem._originalIndex;
        }
        return newItem;
      });
      return __spreadProps$6(__spreadValues$7({}, arrayState), { items: newItems });
    },
    [arrayState]
  );
  useEffect4(() => {
    if (arrayState.items.length > 0) {
      setUi(mapArrayStateToUi(arrayState));
    }
  }, []);
  const [isDragging, setIsDragging] = useState7(false);
  const forceReadOnly = getPermissions({ item: selectedItem }).edit === false;
  if (field.type !== "array" || !field.arrayFields) {
    return null;
  }
  const addDisabled = field.max !== void 0 && localState.arrayState.items.length >= field.max || readOnly;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Label2,
    {
      label: label || name,
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(List, { size: 16 }),
      el: "div",
      readOnly,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        SortableProvider,
        {
          onDragStart: () => setIsDragging(true),
          onDragEnd: () => setIsDragging(false),
          onMove: (move) => {
            const newValue = reorder(value, move.source, move.target);
            const newArrayStateItems = reorder(
              arrayState.items,
              move.source,
              move.target
            );
            const newUi = {
              arrayState: __spreadProps$6(__spreadValues$7({}, state.ui.arrayState), {
                [id]: __spreadProps$6(__spreadValues$7({}, arrayState), { items: newArrayStateItems })
              })
            };
            setUi(newUi, false);
            onChange(newValue, newUi);
            setLocalState({
              value: newValue,
              arrayState: __spreadProps$6(__spreadValues$7({}, arrayState), { items: newArrayStateItems })
            });
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: getClassName5({
                hasItems: Array.isArray(value) && value.length > 0,
                addDisabled
              }),
              onClick: (e) => {
                e.preventDefault();
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: getClassName5("inner"), "data-dnd-container": true, children: localState.arrayState.items.map((item, i) => {
                  const { _arrayId = `${id}-${i}`, _originalIndex = i } = item;
                  const data = Array.from(localState.value || [])[i] || {};
                  return /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Sortable,
                    {
                      id: _arrayId,
                      index: i,
                      disabled: readOnly,
                      children: ({ status, ref }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "div",
                        {
                          ref,
                          className: getClassNameItem({
                            isExpanded: arrayState.openId === _arrayId,
                            isDragging: status === "dragging",
                            readOnly
                          }),
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsxs(
                              "div",
                              {
                                onClick: (e) => {
                                  if (isDragging) return;
                                  e.preventDefault();
                                  e.stopPropagation();
                                  if (arrayState.openId === _arrayId) {
                                    setUi(
                                      mapArrayStateToUi({
                                        openId: ""
                                      })
                                    );
                                  } else {
                                    setUi(
                                      mapArrayStateToUi({
                                        openId: _arrayId
                                      })
                                    );
                                  }
                                },
                                className: getClassNameItem("summary"),
                                children: [
                                  field.getItemSummary ? field.getItemSummary(data, i) : `Item #${_originalIndex}`,
                                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: getClassNameItem("rhs"), children: [
                                    !readOnly && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: getClassNameItem("actions"), children: [
                                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: getClassNameItem("action"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                                        IconButton,
                                        {
                                          type: "button",
                                          disabled: !!addDisabled,
                                          onClick: (e) => {
                                            e.stopPropagation();
                                            const existingValue = [...value || []];
                                            existingValue.splice(
                                              i,
                                              0,
                                              existingValue[i]
                                            );
                                            onChange(
                                              existingValue,
                                              mapArrayStateToUi(
                                                regenerateArrayState(existingValue)
                                              )
                                            );
                                          },
                                          title: "Duplicate",
                                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { size: 16 })
                                        }
                                      ) }),
                                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: getClassNameItem("action"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                                        IconButton,
                                        {
                                          type: "button",
                                          disabled: field.min !== void 0 && field.min >= localState.arrayState.items.length,
                                          onClick: (e) => {
                                            e.stopPropagation();
                                            const existingValue = [...value || []];
                                            const existingItems = [
                                              ...arrayState.items || []
                                            ];
                                            existingValue.splice(i, 1);
                                            existingItems.splice(i, 1);
                                            onChange(
                                              existingValue,
                                              mapArrayStateToUi({
                                                items: existingItems
                                              })
                                            );
                                          },
                                          title: "Delete",
                                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash, { size: 16 })
                                        }
                                      ) })
                                    ] }),
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DragIcon, {}) })
                                  ] })
                                ]
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: getClassNameItem("body"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "fieldset",
                              {
                                className: getClassNameItem("fieldset"),
                                onPointerDownCapture: (e) => {
                                  e.stopPropagation();
                                },
                                children: Object.keys(field.arrayFields).map((subName) => {
                                  const subField = field.arrayFields[subName];
                                  const indexName = `${name}[${i}]`;
                                  const subPath = `${indexName}.${subName}`;
                                  const localIndexName = `${localName}[${i}]`;
                                  const localWildcardName = `${localName}[*]`;
                                  const localSubPath = `${localIndexName}.${subName}`;
                                  const localWildcardSubPath = `${localWildcardName}.${subName}`;
                                  const subReadOnly = forceReadOnly ? forceReadOnly : typeof readOnlyFields[subPath] !== "undefined" ? readOnlyFields[localSubPath] : readOnlyFields[localWildcardSubPath];
                                  const label2 = subField.label || subName;
                                  return /* @__PURE__ */ jsxRuntimeExports.jsx(
                                    NestedFieldProvider,
                                    {
                                      name: localIndexName,
                                      wildcardName: localWildcardName,
                                      subName,
                                      readOnlyFields,
                                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                                        AutoFieldPrivate,
                                        {
                                          name: subPath,
                                          label: label2,
                                          id: `${_arrayId}_${subName}`,
                                          readOnly: subReadOnly,
                                          field: __spreadProps$6(__spreadValues$7({}, subField), {
                                            label: label2
                                            // May be used by custom fields
                                          }),
                                          value: data[subName],
                                          onChange: (val, ui) => {
                                            onChange(
                                              replace(value, i, __spreadProps$6(__spreadValues$7({}, data), {
                                                [subName]: val
                                              })),
                                              ui
                                            );
                                          }
                                        }
                                      )
                                    },
                                    subPath
                                  );
                                })
                              }
                            ) })
                          ]
                        }
                      )
                    },
                    _arrayId
                  );
                }) }),
                !addDisabled && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    className: getClassName5("addButton"),
                    onClick: () => {
                      if (isDragging) return;
                      const existingValue = value || [];
                      const newValue = [
                        ...existingValue,
                        field.defaultItemProps || {}
                      ];
                      const newArrayState = regenerateArrayState(newValue);
                      onChange(newValue, mapArrayStateToUi(newArrayState));
                    },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 21 })
                  }
                )
              ]
            }
          )
        }
      )
    }
  );
};
init_react_import();
var getClassName6 = get_class_name_factory_default("Input", styles_module_default2);
var DefaultField = ({
  field,
  onChange,
  readOnly,
  value: _value,
  name,
  label,
  Label: Label2,
  id
}) => {
  const value = _value;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Label2,
    {
      label: label || name,
      icon: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        field.type === "text" && /* @__PURE__ */ jsxRuntimeExports.jsx(Type, { size: 16 }),
        field.type === "number" && /* @__PURE__ */ jsxRuntimeExports.jsx(Hash, { size: 16 })
      ] }),
      readOnly,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          className: getClassName6("input"),
          autoComplete: "off",
          type: field.type,
          title: label || name,
          name,
          value: (value == null ? void 0 : value.toString) ? value.toString() : "",
          onChange: (e) => {
            if (field.type === "number") {
              const numberValue = Number(e.currentTarget.value);
              if (typeof field.min !== "undefined" && numberValue < field.min) {
                return;
              }
              if (typeof field.max !== "undefined" && numberValue > field.max) {
                return;
              }
              onChange(numberValue);
            } else {
              onChange(e.currentTarget.value);
            }
          },
          readOnly,
          tabIndex: readOnly ? -1 : void 0,
          id,
          min: field.type === "number" ? field.min : void 0,
          max: field.type === "number" ? field.max : void 0
        }
      )
    }
  );
};
init_react_import();
const {useEffect:useEffect8} = await importShared('react');

init_react_import();
const {useMemo:useMemo2,useEffect:useEffect7,useState:useState10,useCallback:useCallback4,isValidElement} = await importShared('react');

init_react_import();
var styles_module_default6 = { "ExternalInput-actions": "_ExternalInput-actions_91ls0_1", "ExternalInput-button": "_ExternalInput-button_91ls0_5", "ExternalInput--dataSelected": "_ExternalInput--dataSelected_91ls0_24", "ExternalInput--readOnly": "_ExternalInput--readOnly_91ls0_31", "ExternalInput-detachButton": "_ExternalInput-detachButton_91ls0_35", "ExternalInput": "_ExternalInput_91ls0_1", "ExternalInputModal": "_ExternalInputModal_91ls0_79", "ExternalInputModal-grid": "_ExternalInputModal-grid_91ls0_89", "ExternalInputModal--filtersToggled": "_ExternalInputModal--filtersToggled_91ls0_100", "ExternalInputModal-filters": "_ExternalInputModal-filters_91ls0_105", "ExternalInputModal-masthead": "_ExternalInputModal-masthead_91ls0_124", "ExternalInputModal-tableWrapper": "_ExternalInputModal-tableWrapper_91ls0_133", "ExternalInputModal-table": "_ExternalInputModal-table_91ls0_133", "ExternalInputModal-thead": "_ExternalInputModal-thead_91ls0_149", "ExternalInputModal-th": "_ExternalInputModal-th_91ls0_149", "ExternalInputModal-td": "_ExternalInputModal-td_91ls0_164", "ExternalInputModal-tr": "_ExternalInputModal-tr_91ls0_169", "ExternalInputModal-tbody": "_ExternalInputModal-tbody_91ls0_176", "ExternalInputModal--hasData": "_ExternalInputModal--hasData_91ls0_202", "ExternalInputModal-loadingBanner": "_ExternalInputModal-loadingBanner_91ls0_206", "ExternalInputModal--isLoading": "_ExternalInputModal--isLoading_91ls0_223", "ExternalInputModal-searchForm": "_ExternalInputModal-searchForm_91ls0_227", "ExternalInputModal-search": "_ExternalInputModal-search_91ls0_227", "ExternalInputModal-searchIcon": "_ExternalInputModal-searchIcon_91ls0_264", "ExternalInputModal-searchIconText": "_ExternalInputModal-searchIconText_91ls0_289", "ExternalInputModal-searchInput": "_ExternalInputModal-searchInput_91ls0_299", "ExternalInputModal-searchActions": "_ExternalInputModal-searchActions_91ls0_313", "ExternalInputModal-searchActionIcon": "_ExternalInputModal-searchActionIcon_91ls0_326", "ExternalInputModal-footerContainer": "_ExternalInputModal-footerContainer_91ls0_330", "ExternalInputModal-footer": "_ExternalInputModal-footer_91ls0_330", "ExternalInputModal-field": "_ExternalInputModal-field_91ls0_343" };
init_react_import();
const {useEffect:useEffect5,useState:useState8} = await importShared('react');

init_react_import();
var styles_module_default7 = { "Modal": "_Modal_ikbaj_1", "Modal--isOpen": "_Modal--isOpen_ikbaj_15", "Modal-inner": "_Modal-inner_ikbaj_19" };
const {createPortal} = await importShared('react-dom');
var getClassName7 = get_class_name_factory_default("Modal", styles_module_default7);
var Modal = ({
  children,
  onClose,
  isOpen
}) => {
  const [rootEl, setRootEl] = useState8(null);
  useEffect5(() => {
    setRootEl(document.getElementById("puck-portal-root"));
  }, []);
  if (!rootEl) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", {});
  }
  return createPortal(
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: getClassName7({ isOpen }), onClick: onClose, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: getClassName7("inner"),
        onClick: (e) => e.stopPropagation(),
        children
      }
    ) }),
    rootEl
  );
};
init_react_import();
init_react_import();
var styles_module_default8 = { "Heading": "_Heading_qxrry_1", "Heading--xxxxl": "_Heading--xxxxl_qxrry_12", "Heading--xxxl": "_Heading--xxxl_qxrry_18", "Heading--xxl": "_Heading--xxl_qxrry_22", "Heading--xl": "_Heading--xl_qxrry_26", "Heading--l": "_Heading--l_qxrry_30", "Heading--m": "_Heading--m_qxrry_34", "Heading--s": "_Heading--s_qxrry_38", "Heading--xs": "_Heading--xs_qxrry_42" };
var getClassName8 = get_class_name_factory_default("Heading", styles_module_default8);
var Heading = ({ children, rank, size = "m" }) => {
  const Tag = rank ? `h${rank}` : "span";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Tag,
    {
      className: getClassName8({
        [size]: true
      }),
      children
    }
  );
};
init_react_import();
init_react_import();
const {useEffect:useEffect6,useState:useState9} = await importShared('react');

init_react_import();
var Button_module_default = { "Button": "_Button_10byl_1", "Button--medium": "_Button--medium_10byl_29", "Button--large": "_Button--large_10byl_37", "Button-icon": "_Button-icon_10byl_44", "Button--primary": "_Button--primary_10byl_48", "Button--secondary": "_Button--secondary_10byl_67", "Button--flush": "_Button--flush_10byl_84", "Button--disabled": "_Button--disabled_10byl_88", "Button--fullWidth": "_Button--fullWidth_10byl_95", "Button-spinner": "_Button-spinner_10byl_100" };
init_react_import();
var dataAttrRe = /^(data-.*)$/;
var filterDataAttrs = (props) => {
  let filteredProps = {};
  for (const prop in props) {
    if (Object.prototype.hasOwnProperty.call(props, prop) && dataAttrRe.test(prop)) {
      filteredProps[prop] = props[prop];
    }
  }
  return filteredProps;
};
var getClassName9 = get_class_name_factory_default("Button", Button_module_default);
var Button = (_a) => {
  var _b = _a, {
    children,
    href,
    onClick,
    variant = "primary",
    type,
    disabled,
    tabIndex,
    newTab,
    fullWidth,
    icon,
    size = "medium",
    loading: loadingProp = false
  } = _b, props = __objRest$4(_b, [
    "children",
    "href",
    "onClick",
    "variant",
    "type",
    "disabled",
    "tabIndex",
    "newTab",
    "fullWidth",
    "icon",
    "size",
    "loading"
  ]);
  const [loading, setLoading] = useState9(loadingProp);
  useEffect6(() => setLoading(loadingProp), [loadingProp]);
  const ElementType = href ? "a" : type ? "button" : "span";
  const dataAttrs = filterDataAttrs(props);
  const el = /* @__PURE__ */ jsxRuntimeExports.jsxs(
    ElementType,
    __spreadProps$6(__spreadValues$7({
      className: getClassName9({
        primary: variant === "primary",
        secondary: variant === "secondary",
        disabled,
        fullWidth,
        [size]: true
      }),
      onClick: (e) => {
        if (!onClick) return;
        setLoading(true);
        Promise.resolve(onClick(e)).then(() => {
          setLoading(false);
        });
      },
      type,
      disabled: disabled || loading,
      tabIndex,
      target: newTab ? "_blank" : void 0,
      rel: newTab ? "noreferrer" : void 0,
      href
    }, dataAttrs), {
      children: [
        icon && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: getClassName9("icon"), children: icon }),
        children,
        loading && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: getClassName9("spinner"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, { size: 14 }) })
      ]
    })
  );
  return el;
};
var getClassName10 = get_class_name_factory_default("ExternalInput", styles_module_default6);
var getClassNameModal = get_class_name_factory_default("ExternalInputModal", styles_module_default6);
var dataCache = {};
var ExternalInput = ({
  field,
  onChange,
  value = null,
  name,
  id,
  readOnly
}) => {
  const {
    mapProp = (val) => val,
    mapRow = (val) => val,
    filterFields
  } = field || {};
  const [data, setData] = useState10([]);
  const [isOpen, setOpen] = useState10(false);
  const [isLoading, setIsLoading] = useState10(true);
  const hasFilterFields = !!filterFields;
  const [filters, setFilters] = useState10(field.initialFilters || {});
  const [filtersToggled, setFiltersToggled] = useState10(hasFilterFields);
  const mappedData = useMemo2(() => {
    return data.map(mapRow);
  }, [data]);
  const keys = useMemo2(() => {
    const validKeys = /* @__PURE__ */ new Set();
    for (const item of mappedData) {
      for (const key of Object.keys(item)) {
        if (typeof item[key] === "string" || typeof item[key] === "number" || isValidElement(item[key])) {
          validKeys.add(key);
        }
      }
    }
    return Array.from(validKeys);
  }, [mappedData]);
  const [searchQuery, setSearchQuery] = useState10(field.initialQuery || "");
  const search = useCallback4(
    (query, filters2) => __async(void 0, null, function* () {
      setIsLoading(true);
      const cacheKey = `${id}-${query}-${JSON.stringify(filters2)}`;
      const listData = dataCache[cacheKey] || (yield field.fetchList({ query, filters: filters2 }));
      if (listData) {
        setData(listData);
        setIsLoading(false);
        dataCache[cacheKey] = listData;
      }
    }),
    [id, field]
  );
  const Footer = useCallback4(
    (props) => field.renderFooter ? field.renderFooter(props) : /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: getClassNameModal("footer"), children: [
      props.items.length,
      " result",
      props.items.length === 1 ? "" : "s"
    ] }),
    [field.renderFooter]
  );
  useEffect7(() => {
    search(searchQuery, filters);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: getClassName10({
        dataSelected: !!value,
        modalVisible: isOpen,
        readOnly
      }),
      id,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: getClassName10("actions"), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setOpen(true),
              className: getClassName10("button"),
              disabled: readOnly,
              children: value ? field.getItemSummary ? field.getItemSummary(value) : "External item" : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { size: "16" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: field.placeholder })
              ] })
            }
          ),
          value && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              className: getClassName10("detachButton"),
              onClick: () => {
                onChange(null);
              },
              disabled: readOnly,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(LockOpen, { size: 16 })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Modal, { onClose: () => setOpen(false), isOpen, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "form",
          {
            className: getClassNameModal({
              isLoading,
              loaded: !isLoading,
              hasData: mappedData.length > 0,
              filtersToggled
            }),
            onSubmit: (e) => {
              e.preventDefault();
              search(searchQuery, filters);
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: getClassNameModal("masthead"), children: field.showSearch ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: getClassNameModal("searchForm"), children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: getClassNameModal("search"), children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: getClassNameModal("searchIconText"), children: "Search" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: getClassNameModal("searchIcon"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { size: "18" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      className: getClassNameModal("searchInput"),
                      name: "q",
                      type: "search",
                      placeholder: field.placeholder,
                      onChange: (e) => {
                        setSearchQuery(e.currentTarget.value);
                      },
                      autoComplete: "off",
                      value: searchQuery
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: getClassNameModal("searchActions"), children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", loading: isLoading, fullWidth: true, children: "Search" }),
                  hasFilterFields && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: getClassNameModal("searchActionIcon"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    IconButton,
                    {
                      title: "Toggle filters",
                      onClick: (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setFiltersToggled(!filtersToggled);
                      },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(SlidersHorizontal, { size: 20 })
                    }
                  ) })
                ] })
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Heading, { rank: "2", size: "xs", children: field.placeholder || "Select data" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: getClassNameModal("grid"), children: [
                hasFilterFields && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: getClassNameModal("filters"), children: hasFilterFields && Object.keys(filterFields).map((fieldName) => {
                  const filterField = filterFields[fieldName];
                  return /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: getClassNameModal("field"),
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        AutoFieldPrivate,
                        {
                          field: filterField,
                          name: fieldName,
                          id: `external_field_${fieldName}_filter`,
                          label: filterField.label || fieldName,
                          value: filters[fieldName],
                          onChange: (value2) => {
                            const newFilters = __spreadProps$6(__spreadValues$7({}, filters), {
                              [fieldName]: value2
                            });
                            setFilters(newFilters);
                            search(searchQuery, newFilters);
                          }
                        }
                      )
                    },
                    fieldName
                  );
                }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: getClassNameModal("tableWrapper"), children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: getClassNameModal("table"), children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: getClassNameModal("thead"), children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { className: getClassNameModal("tr"), children: keys.map((key) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "th",
                      {
                        className: getClassNameModal("th"),
                        style: { textAlign: "left" },
                        children: key
                      },
                      key
                    )) }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: getClassNameModal("tbody"), children: mappedData.map((item, i) => {
                      return /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "tr",
                        {
                          style: { whiteSpace: "nowrap" },
                          className: getClassNameModal("tr"),
                          onClick: () => {
                            onChange(mapProp(data[i]));
                            setOpen(false);
                          },
                          children: keys.map((key) => /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: getClassNameModal("td"), children: item[key] }, key))
                        },
                        i
                      );
                    }) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: getClassNameModal("loadingBanner"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, { size: 24 }) })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: getClassNameModal("footerContainer"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, { items: mappedData }) })
            ]
          }
        ) })
      ]
    }
  );
};
var ExternalField = ({
  field,
  onChange,
  value,
  name,
  label,
  Label: Label2,
  id,
  readOnly
}) => {
  var _a, _b, _c;
  const validField = field;
  const deprecatedField = field;
  useEffect8(() => {
    if (deprecatedField.adaptor) {
      console.error(
        "Warning: The `adaptor` API is deprecated. Please use updated APIs on the `external` field instead. This will be a breaking change in a future release."
      );
    }
  }, []);
  if (field.type !== "external") {
    return null;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Label2, { label: label || name, icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { size: 16 }), el: "div", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    ExternalInput,
    {
      name,
      field: __spreadProps$6(__spreadValues$7({}, validField), {
        // DEPRECATED
        placeholder: ((_a = deprecatedField.adaptor) == null ? void 0 : _a.name) ? `Select from ${deprecatedField.adaptor.name}` : validField.placeholder || "Select data",
        mapProp: ((_b = deprecatedField.adaptor) == null ? void 0 : _b.mapProp) || validField.mapProp,
        mapRow: validField.mapRow,
        fetchList: ((_c = deprecatedField.adaptor) == null ? void 0 : _c.fetchList) ? () => __async(void 0, null, function* () {
          return yield deprecatedField.adaptor.fetchList(
            deprecatedField.adaptorParams
          );
        }) : validField.fetchList
      }),
      onChange,
      value,
      id,
      readOnly
    }
  ) });
};
init_react_import();
const {useMemo:useMemo3} = await importShared('react');

init_react_import();
var safeJsonParse = (str) => {
  try {
    const jsonValue = JSON.parse(str);
    return jsonValue;
  } catch (e) {
    return str;
  }
};
var getClassName11 = get_class_name_factory_default("Input", styles_module_default2);
var RadioField = ({
  field,
  onChange,
  readOnly,
  value,
  name,
  id,
  label,
  Label: Label2
}) => {
  const flatOptions = useMemo3(
    () => field.type === "radio" ? field.options.map(({ value: value2 }) => value2) : [],
    [field]
  );
  if (field.type !== "radio" || !field.options) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Label2,
    {
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { size: 16 }),
      label: label || name,
      readOnly,
      el: "div",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: getClassName11("radioGroupItems"), id, children: field.options.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "label",
        {
          className: getClassName11("radio"),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "radio",
                className: getClassName11("radioInput"),
                value: option.value,
                name,
                onChange: (e) => {
                  var _a;
                  const jsonValue = (_a = safeJsonParse(e.target.value)) != null ? _a : e.target.value;
                  if (flatOptions.indexOf(jsonValue) > -1) {
                    onChange(jsonValue);
                  } else {
                    onChange(e.target.value);
                  }
                },
                disabled: readOnly,
                checked: value === option.value
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: getClassName11("radioInner"), children: option.label || option.value })
          ]
        },
        option.label + option.value
      )) })
    }
  );
};
init_react_import();
const {useMemo:useMemo4} = await importShared('react');
var getClassName12 = get_class_name_factory_default("Input", styles_module_default2);
var SelectField = ({
  field,
  onChange,
  label,
  Label: Label2,
  value,
  name,
  readOnly,
  id
}) => {
  const flatOptions = useMemo4(
    () => field.type === "select" ? field.options.map(({ value: value2 }) => value2) : [],
    [field]
  );
  if (field.type !== "select" || !field.options) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Label2,
    {
      label: label || name,
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { size: 16 }),
      readOnly,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "select",
        {
          id,
          title: label || name,
          className: getClassName12("input"),
          disabled: readOnly,
          onChange: (e) => {
            var _a;
            const jsonValue = (_a = safeJsonParse(e.target.value)) != null ? _a : e.target.value;
            if (flatOptions.indexOf(jsonValue) > -1) {
              onChange(jsonValue);
            } else {
              onChange(e.target.value);
            }
          },
          value,
          children: field.options.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "option",
            {
              label: option.label,
              value: option.value
            },
            option.label + option.value
          ))
        }
      )
    }
  );
};
init_react_import();
var getClassName13 = get_class_name_factory_default("Input", styles_module_default2);
var TextareaField = ({
  onChange,
  readOnly,
  value,
  name,
  label,
  Label: Label2,
  id
}) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Label2, { label: label || name, icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Type, { size: 16 }), readOnly, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "textarea",
    {
      id,
      className: getClassName13("input"),
      autoComplete: "off",
      name,
      value: typeof value === "undefined" ? "" : value,
      onChange: (e) => onChange(e.currentTarget.value),
      readOnly,
      tabIndex: readOnly ? -1 : void 0,
      rows: 5
    }
  ) });
};
init_react_import();
init_react_import();
var styles_module_default9 = { "ObjectField": "_ObjectField_1ua3y_5", "ObjectField-fieldset": "_ObjectField-fieldset_1ua3y_13" };
var getClassName14 = get_class_name_factory_default("ObjectField", styles_module_default9);
var ObjectField = ({
  field,
  onChange,
  value,
  name,
  label,
  Label: Label2,
  readOnly,
  id
}) => {
  const { readOnlyFields, localName = name } = useNestedFieldContext();
  if (field.type !== "object" || !field.objectFields) {
    return null;
  }
  const data = value || {};
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Label2,
    {
      label: label || name,
      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(EllipsisVertical, { size: 16 }),
      el: "div",
      readOnly,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: getClassName14(), children: /* @__PURE__ */ jsxRuntimeExports.jsx("fieldset", { className: getClassName14("fieldset"), children: Object.keys(field.objectFields).map((subName) => {
        const subField = field.objectFields[subName];
        const subPath = `${name}.${subName}`;
        const localSubPath = `${localName || name}.${subName}`;
        const subReadOnly = readOnly ? readOnly : readOnlyFields[localSubPath];
        const label2 = subField.label || subName;
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          NestedFieldProvider,
          {
            name: localName || id,
            subName,
            readOnlyFields,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              AutoFieldPrivate,
              {
                name: subPath,
                label: subPath,
                id: `${id}_${subName}`,
                readOnly: subReadOnly,
                field: __spreadProps$6(__spreadValues$7({}, subField), {
                  label: label2
                  // May be used by custom fields
                }),
                value: data[subName],
                onChange: (val, ui) => {
                  onChange(
                    __spreadProps$6(__spreadValues$7({}, data), {
                      [subName]: val
                    }),
                    ui
                  );
                }
              }
            )
          },
          subPath
        );
      }) }) })
    }
  );
};
init_react_import();
const React2 = await importShared('react');
const {useState:useState11} = React2;

init_react_import();
const {v4:uuidv4} = await importShared('uuid');

var generateId = (type) => type ? `${type}-${uuidv4()}` : uuidv4();
var useSafeId = () => {
  if (typeof React2.useId !== "undefined") {
    return React2.useId();
  }
  const [id] = useState11(generateId());
  return id;
};
var getClassName15 = get_class_name_factory_default("Input", styles_module_default2);
var getClassNameWrapper = get_class_name_factory_default("InputWrapper", styles_module_default2);
var FieldLabel = ({
  children,
  icon,
  label,
  el = "label",
  readOnly,
  className
}) => {
  const El = el;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(El, { className, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: getClassName15("label"), children: [
      icon ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: getClassName15("labelIcon"), children: icon }) : /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {}),
      label,
      readOnly && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: getClassName15("disabledIcon"), title: "Read-only", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { size: "12" }) })
    ] }),
    children
  ] });
};
var FieldLabelInternal = ({
  children,
  icon,
  label,
  el = "label",
  readOnly
}) => {
  const { overrides } = useAppContext();
  const Wrapper = useMemo5(
    () => overrides.fieldLabel || FieldLabel,
    [overrides]
  );
  if (!label) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Wrapper,
    {
      label,
      icon,
      className: getClassName15({ readOnly }),
      readOnly,
      el,
      children
    }
  );
};
function AutoFieldInternal(props) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const { dispatch, overrides, selectedItem } = useAppContext();
  const nestedFieldContext = useContext3(NestedFieldContext);
  const { id, Label: Label2 = FieldLabelInternal } = props;
  const field = props.field;
  const label = field.label;
  const defaultId = useSafeId();
  const resolvedId = id || defaultId;
  const defaultFields = {
    array: ArrayField,
    external: ExternalField,
    object: ObjectField,
    select: SelectField,
    textarea: TextareaField,
    radio: RadioField,
    text: DefaultField,
    number: DefaultField
  };
  const render = __spreadProps$6(__spreadValues$7({}, overrides.fieldTypes), {
    array: ((_a = overrides.fieldTypes) == null ? void 0 : _a.array) || defaultFields.array,
    external: ((_b = overrides.fieldTypes) == null ? void 0 : _b.external) || defaultFields.external,
    object: ((_c = overrides.fieldTypes) == null ? void 0 : _c.object) || defaultFields.object,
    select: ((_d = overrides.fieldTypes) == null ? void 0 : _d.select) || defaultFields.select,
    textarea: ((_e = overrides.fieldTypes) == null ? void 0 : _e.textarea) || defaultFields.textarea,
    radio: ((_f = overrides.fieldTypes) == null ? void 0 : _f.radio) || defaultFields.radio,
    text: ((_g = overrides.fieldTypes) == null ? void 0 : _g.text) || defaultFields.text,
    number: ((_h = overrides.fieldTypes) == null ? void 0 : _h.number) || defaultFields.number
  });
  const mergedProps = __spreadProps$6(__spreadValues$7({}, props), {
    field,
    label,
    Label: Label2,
    id: resolvedId
  });
  const onFocus = useCallback5(
    (e) => {
      if (mergedProps.name && (e.target.nodeName === "INPUT" || e.target.nodeName === "TEXTAREA")) {
        e.stopPropagation();
        dispatch({
          type: "setUi",
          ui: {
            field: { focus: mergedProps.name }
          }
        });
      }
    },
    [mergedProps.name]
  );
  const onBlur = useCallback5((e) => {
    if ("name" in e.target) {
      dispatch({
        type: "setUi",
        ui: {
          field: { focus: null }
        }
      });
    }
  }, []);
  if (field.type === "custom") {
    if (!field.render) {
      return null;
    }
    const CustomField = field.render;
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: getClassNameWrapper(), onFocus, onBlur, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: getClassName15(), children: /* @__PURE__ */ jsxRuntimeExports.jsx(CustomField, __spreadValues$7({}, mergedProps)) }) });
  }
  const children = defaultFields[field.type](mergedProps);
  const Render2 = render[field.type];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    NestedFieldContext.Provider,
    {
      value: {
        readOnlyFields: nestedFieldContext.readOnlyFields || (selectedItem == null ? void 0 : selectedItem.readOnly) || {},
        localName: nestedFieldContext.localName
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: getClassNameWrapper(),
          onFocus,
          onBlur,
          onClick: (e) => {
            e.stopPropagation();
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Render2, __spreadProps$6(__spreadValues$7({}, mergedProps), { children }))
        }
      )
    }
  );
}
function AutoFieldPrivate(props) {
  const { state } = useAppContext();
  const { value, onChange } = props;
  const [localValue, setLocalValue] = useState12(value);
  const onChangeDb = c(
    (val, ui) => {
      onChange(val, ui);
    },
    50,
    { leading: true }
  );
  const onChangeLocal = useCallback5((val, ui) => {
    setLocalValue(val);
    onChangeDb(val, ui);
  }, []);
  useEffect9(() => {
    if (state.ui.field.focus !== props.name) {
      setLocalValue(value);
    }
  }, [value]);
  const localProps = {
    value: localValue,
    onChange: onChangeLocal
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AutoFieldInternal, __spreadValues$7(__spreadValues$7({}, props), localProps));
}
function AutoField(props) {
  const DefaultLabel = useMemo5(() => {
    const DefaultLabel2 = (labelProps) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      __spreadProps$6(__spreadValues$7({}, labelProps), {
        className: getClassName15({ readOnly: props.readOnly })
      })
    );
    return DefaultLabel2;
  }, [props.readOnly]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AutoFieldInternal, __spreadProps$6(__spreadValues$7({}, props), { Label: DefaultLabel }));
}
init_react_import();
init_react_import();
var styles_module_default10 = { "Drawer": "_Drawer_fkqfo_1", "Drawer-draggable": "_Drawer-draggable_fkqfo_8", "Drawer-draggableBg": "_Drawer-draggableBg_fkqfo_12", "Drawer-draggableFg": "_Drawer-draggableFg_fkqfo_21", "DrawerItem-draggable": "_DrawerItem-draggable_fkqfo_25", "DrawerItem--disabled": "_DrawerItem--disabled_fkqfo_38", "DrawerItem": "_DrawerItem_fkqfo_25", "Drawer--isDraggingFrom": "_Drawer--isDraggingFrom_fkqfo_48", "DrawerItem-name": "_DrawerItem-name_fkqfo_66" };
const {useId:useId2,useMemo:useMemo9,useState:useState19} = await importShared('react');

init_react_import();
const {createContext:createContext4,useCallback:useCallback11,useContext:useContext7,useEffect:useEffect15,useId,useRef:useRef3,useState:useState18} = await importShared('react');
init_react_import();
const {forwardRef:forwardRef3,useCallback:useCallback10,useContext:useContext6,useEffect:useEffect14,useMemo:useMemo8,useRef:useRef2} = await importShared('react');

init_react_import();
const {useCallback:useCallback7,useContext:useContext5,useEffect:useEffect10,useMemo:useMemo7,useRef,useState:useState14} = await importShared('react');

init_react_import();
var styles_module_default11 = { "DraggableComponent": "_DraggableComponent_1ukn8_1", "DraggableComponent-overlay": "_DraggableComponent-overlay_1ukn8_12", "DraggableComponent-loadingOverlay": "_DraggableComponent-loadingOverlay_1ukn8_29", "DraggableComponent--hover": "_DraggableComponent--hover_1ukn8_45", "DraggableComponent--isLocked": "_DraggableComponent--isLocked_1ukn8_45", "DraggableComponent--isSelected": "_DraggableComponent--isSelected_1ukn8_54", "DraggableComponent-actionsOverlay": "_DraggableComponent-actionsOverlay_1ukn8_66", "DraggableComponent-actions": "_DraggableComponent-actions_1ukn8_66" };
const {createPortal:createPortal2} = await importShared('react-dom');

init_react_import();
function getDeepScrollPosition(element) {
  let totalScroll = {
    x: 0,
    y: 0
  };
  let current = element;
  while (current && current !== document.documentElement) {
    const parent = current.parentElement;
    if (parent) {
      totalScroll.x += parent.scrollLeft;
      totalScroll.y += parent.scrollTop;
    }
    current = parent;
  }
  return totalScroll;
}
init_react_import();
const {createContext:createContext3,useCallback:useCallback6,useMemo:useMemo6,useState:useState13} = await importShared('react');
var dropZoneContext = createContext3(null);
var ZoneStoreContext = createContext3(
  createStore(() => ({
    zoneDepthIndex: {},
    nextZoneDepthIndex: {},
    areaDepthIndex: {},
    nextAreaDepthIndex: {},
    draggedItem: null,
    previewIndex: {}
  }))
);
var ZoneStoreProvider = ({
  children,
  store
}) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ZoneStoreContext.Provider, { value: store, children });
};
var DropZoneProvider = ({
  children,
  value
}) => {
  const [hoveringComponent, setHoveringComponent] = useState13();
  const [areasWithZones, setAreasWithZones] = useState13(
    {}
  );
  const [activeZones, setActiveZones] = useState13({});
  const { dispatch } = useAppContext();
  const registerZoneArea = useCallback6(
    (area) => {
      setAreasWithZones((latest) => __spreadProps$6(__spreadValues$7({}, latest), { [area]: true }));
    },
    [setAreasWithZones]
  );
  const registerZone = useCallback6(
    (zoneCompound) => {
      if (!dispatch) {
        return;
      }
      dispatch({
        type: "registerZone",
        zone: zoneCompound
      });
      setActiveZones((latest) => __spreadProps$6(__spreadValues$7({}, latest), { [zoneCompound]: true }));
    },
    [setActiveZones, dispatch]
  );
  const unregisterZone = useCallback6(
    (zoneCompound) => {
      if (!dispatch) {
        return;
      }
      dispatch({
        type: "unregisterZone",
        zone: zoneCompound
      });
      setActiveZones((latest) => __spreadProps$6(__spreadValues$7({}, latest), {
        [zoneCompound]: false
      }));
    },
    [setActiveZones, dispatch]
  );
  const memoValue = useMemo6(
    () => __spreadValues$7({
      hoveringComponent,
      setHoveringComponent,
      registerZoneArea,
      areasWithZones,
      registerZone,
      unregisterZone,
      activeZones
    }, value),
    [value, hoveringComponent, areasWithZones, activeZones]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: memoValue && /* @__PURE__ */ jsxRuntimeExports.jsx(dropZoneContext.Provider, { value: memoValue, children }) });
};
init_react_import();
const {useContext:useContext4} = await importShared('react');
function useContextStore(context, selector) {
  const store = useContext4(context);
  if (!store) {
    throw new Error("useContextStore must be used inside context");
  }
  return useStore(store, useShallow(selector));
}
var getClassName16 = get_class_name_factory_default("DraggableComponent", styles_module_default11);
var space = 8;
var actionsOverlayTop = space * 6.5;
var actionsTop = -44;
var actionsSide = space;
var DefaultActionBar = ({
  label,
  children,
  parentAction
}) => /* @__PURE__ */ jsxRuntimeExports.jsxs(ActionBar, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsxs(ActionBar.Group, { children: [
    parentAction,
    label && /* @__PURE__ */ jsxRuntimeExports.jsx(ActionBar.Label, { label })
  ] }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(ActionBar.Group, { children })
] });
var convertIdToSelector = (id, zoneCompound, data) => {
  const content = zoneCompound && data.zones && zoneCompound !== "default-zone" ? data.zones[zoneCompound] : data.content;
  const index = content.findIndex((item) => item.props.id === id);
  return {
    zone: zoneCompound || "",
    index
  };
};
var DraggableComponent = ({
  children,
  depth,
  componentType,
  id,
  index,
  zoneCompound,
  isLoading = false,
  isSelected = false,
  debug,
  label,
  isEnabled,
  autoDragAxis,
  userDragAxis,
  inDroppableZone = true
}) => {
  const {
    zoomConfig,
    overrides,
    selectedItem,
    getPermissions,
    dispatch,
    iframe,
    state
  } = useAppContext();
  const ctx = useContext5(dropZoneContext);
  const [localZones, setLocalZones] = useState14({});
  const registerLocalZone = useCallback7(
    (zoneCompound2, active) => {
      var _a;
      (_a = ctx == null ? void 0 : ctx.registerLocalZone) == null ? void 0 : _a.call(ctx, zoneCompound2, active);
      setLocalZones((obj) => __spreadProps$6(__spreadValues$7({}, obj), {
        [zoneCompound2]: active
      }));
    },
    [setLocalZones]
  );
  const unregisterLocalZone = useCallback7(
    (zoneCompound2) => {
      var _a;
      (_a = ctx == null ? void 0 : ctx.unregisterLocalZone) == null ? void 0 : _a.call(ctx, zoneCompound2);
      setLocalZones((obj) => {
        const newLocalZones = __spreadValues$7({}, obj);
        delete newLocalZones[zoneCompound2];
        return newLocalZones;
      });
    },
    [setLocalZones]
  );
  const containsActiveZone = Object.values(localZones).filter(Boolean).length > 0;
  const { path = [] } = ctx || {};
  const [canDrag, setCanDrag] = useState14(false);
  useEffect10(() => {
    var _a;
    const item = getItem({ index, zone: zoneCompound }, state.data);
    if (item) {
      const perms = getPermissions({
        item
      });
      setCanDrag((_a = perms.drag) != null ? _a : true);
    }
  }, [state, index, zoneCompound, getPermissions]);
  const userIsDragging = useContextStore(
    ZoneStoreContext,
    (s) => !!s.draggedItem
  );
  const canCollide = canDrag || userIsDragging;
  const disabled = !isEnabled || !canCollide;
  const [dragAxis, setDragAxis] = useState14(userDragAxis || autoDragAxis);
  const { ref: sortableRef, status } = useSortableSafe({
    id,
    index,
    group: zoneCompound,
    type: "component",
    data: {
      areaId: ctx == null ? void 0 : ctx.areaId,
      zone: zoneCompound,
      index,
      componentType,
      containsActiveZone,
      depth,
      path,
      inDroppableZone
    },
    collisionPriority: isEnabled ? depth : 0,
    collisionDetector: createDynamicCollisionDetector(dragAxis),
    disabled,
    // "Out of the way" transition from react-beautiful-dnd
    transition: {
      duration: 200,
      easing: "cubic-bezier(0.2, 0, 0, 1)"
    }
  });
  const thisIsDragging = status === "dragging";
  const ref = useRef(null);
  const refSetter = useCallback7(
    (el) => {
      sortableRef(el);
      if (el) {
        ref.current = el;
      }
    },
    [sortableRef]
  );
  const [portalEl, setPortalEl] = useState14();
  useEffect10(() => {
    var _a, _b, _c;
    setPortalEl(
      iframe.enabled ? (_a = ref.current) == null ? void 0 : _a.ownerDocument.body : (_c = (_b = ref.current) == null ? void 0 : _b.closest("[data-puck-preview]")) != null ? _c : document.body
    );
  }, [iframe.enabled, ref.current]);
  const getStyle = useCallback7(() => {
    var _a, _b, _c;
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const deepScrollPosition = getDeepScrollPosition(ref.current);
    const portalContainerEl = iframe.enabled ? null : (_a = ref.current) == null ? void 0 : _a.closest("[data-puck-preview]");
    const portalContainerRect = portalContainerEl == null ? void 0 : portalContainerEl.getBoundingClientRect();
    const portalScroll = portalContainerEl ? getDeepScrollPosition(portalContainerEl) : { x: 0, y: 0 };
    const scroll = {
      x: deepScrollPosition.x - portalScroll.x - ((_b = portalContainerRect == null ? void 0 : portalContainerRect.left) != null ? _b : 0),
      y: deepScrollPosition.y - portalScroll.y - ((_c = portalContainerRect == null ? void 0 : portalContainerRect.top) != null ? _c : 0)
    };
    const style2 = {
      left: `${rect.left + scroll.x}px`,
      top: `${rect.top + scroll.y}px`,
      height: `${rect.height}px`,
      width: `${rect.width}px`
    };
    return style2;
  }, [ref.current]);
  const [style, setStyle] = useState14();
  const sync = useCallback7(() => {
    setStyle(getStyle());
  }, [ref.current, iframe]);
  useEffect10(() => {
    if (ref.current && !userIsDragging) {
      const observer = new ResizeObserver(sync);
      observer.observe(ref.current);
      return () => {
        observer.disconnect();
      };
    }
  }, [ref.current, userIsDragging]);
  useEffect10(() => {
    ctx == null ? void 0 : ctx.registerPath(
      id,
      {
        index,
        zone: zoneCompound
      },
      componentType
    );
    return () => {
      var _a;
      (_a = ctx == null ? void 0 : ctx.unregisterPath) == null ? void 0 : _a.call(ctx, id);
    };
  }, [id, zoneCompound, index, componentType]);
  const CustomActionBar = useMemo7(
    () => overrides.actionBar || DefaultActionBar,
    [overrides.actionBar]
  );
  const permissions = getPermissions({
    item: selectedItem
  });
  const onClick = useCallback7(
    (e) => {
      e.stopPropagation();
      dispatch({
        type: "setUi",
        ui: {
          itemSelector: { index, zone: zoneCompound }
        }
      });
    },
    [index, zoneCompound, id]
  );
  const onSelectParent = useCallback7(() => {
    if (!(ctx == null ? void 0 : ctx.areaId)) {
      return;
    }
    const parentAreaId = ctx.areaId;
    const parentZone = path[path.length - 3];
    const parentItemSelector = convertIdToSelector(
      parentAreaId,
      parentZone,
      state.data
    );
    dispatch({
      type: "setUi",
      ui: {
        itemSelector: parentItemSelector
      }
    });
  }, [ctx, path]);
  const onDuplicate = useCallback7(() => {
    dispatch({
      type: "duplicate",
      sourceIndex: index,
      sourceZone: zoneCompound
    });
  }, [index, zoneCompound]);
  const onDelete = useCallback7(() => {
    dispatch({
      type: "remove",
      index,
      zone: zoneCompound
    });
  }, [index, zoneCompound]);
  const [hover, setHover] = useState14(false);
  const indicativeHover = (ctx == null ? void 0 : ctx.hoveringComponent) === id;
  useEffect10(() => {
    if (!ref.current) {
      return;
    }
    const el = ref.current;
    const _onMouseOver = (e) => {
      if (userIsDragging) {
        if (thisIsDragging) {
          setHover(true);
        } else {
          setHover(false);
        }
      } else {
        setHover(true);
      }
      e.stopPropagation();
    };
    const _onMouseOut = (e) => {
      e.stopPropagation();
      setHover(false);
    };
    el.setAttribute("data-puck-component", id);
    el.setAttribute("data-puck-dnd", id);
    el.style.position = "relative";
    el.addEventListener("click", onClick);
    el.addEventListener("mouseover", _onMouseOver);
    el.addEventListener("mouseout", _onMouseOut);
    if (thisIsDragging) {
      el.setAttribute("data-puck-dragging", "");
    } else {
      el.removeAttribute("data-puck-dragging");
    }
    return () => {
      el.removeAttribute("data-puck-component");
      el.removeAttribute("data-puck-dnd");
      el.removeEventListener("click", onClick);
      el.removeEventListener("mouseover", _onMouseOver);
      el.removeEventListener("mouseout", _onMouseOut);
      el.removeAttribute("data-puck-dragging");
    };
  }, [
    ref,
    onClick,
    containsActiveZone,
    zoneCompound,
    id,
    userIsDragging,
    thisIsDragging,
    inDroppableZone
  ]);
  useEffect10(() => {
    if (ref.current && disabled) {
      ref.current.setAttribute("data-puck-disabled", "");
      return () => {
        var _a;
        (_a = ref.current) == null ? void 0 : _a.removeAttribute("data-puck-disabled");
      };
    }
  }, [disabled, ref]);
  const [isVisible, setIsVisible] = useState14(false);
  useEffect10(() => {
    sync();
    if ((isSelected || hover || indicativeHover) && !userIsDragging) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [isSelected, hover, indicativeHover, iframe, state.data, userIsDragging]);
  const syncActionsPosition = useCallback7(
    (el) => {
      if (el) {
        const view = el.ownerDocument.defaultView;
        if (view) {
          const rect = el.getBoundingClientRect();
          const diffLeft = rect.x;
          const exceedsBoundsLeft = diffLeft < 0;
          if (exceedsBoundsLeft) {
            el.style.transformOrigin = "left top";
            el.style.left = "0px";
          }
        }
      }
    },
    [zoomConfig]
  );
  useEffect10(() => {
    if (userDragAxis) {
      setDragAxis(userDragAxis);
      return;
    }
    if (ref.current) {
      const computedStyle = window.getComputedStyle(ref.current);
      if (computedStyle.display === "inline" || computedStyle.display === "inline-block") {
        setDragAxis("x");
        return;
      }
    }
    setDragAxis(autoDragAxis);
  }, [ref, userDragAxis, autoDragAxis]);
  const parentAction = (ctx == null ? void 0 : ctx.areaId) && (ctx == null ? void 0 : ctx.areaId) !== "root" && /* @__PURE__ */ jsxRuntimeExports.jsx(ActionBar.Action, { onClick: onSelectParent, label: "Select parent", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CornerLeftUp, { size: 16 }) });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    DropZoneProvider,
    {
      value: __spreadProps$6(__spreadValues$7({}, ctx), {
        areaId: id,
        zoneCompound,
        index,
        depth: depth + 1,
        registerLocalZone,
        unregisterLocalZone,
        path: [...path, id]
      }),
      children: [
        isVisible && createPortal2(
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: getClassName16({
                isSelected,
                isDragging: thisIsDragging,
                hover: hover || indicativeHover
              }),
              style: __spreadValues$7({}, style),
              "data-puck-overlay": true,
              children: [
                debug,
                isLoading && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: getClassName16("loadingOverlay"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, {}) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: getClassName16("actionsOverlay"),
                    style: {
                      top: actionsOverlayTop / zoomConfig.zoom
                    },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: getClassName16("actions"),
                        style: {
                          transform: `scale(${1 / zoomConfig.zoom}`,
                          top: actionsTop / zoomConfig.zoom,
                          right: 0,
                          paddingLeft: actionsSide,
                          paddingRight: actionsSide
                        },
                        ref: syncActionsPosition,
                        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          CustomActionBar,
                          {
                            parentAction,
                            label: label,
                            children: [
                              permissions.duplicate && /* @__PURE__ */ jsxRuntimeExports.jsx(ActionBar.Action, { onClick: onDuplicate, label: "Duplicate", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { size: 16 }) }),
                              permissions.delete && /* @__PURE__ */ jsxRuntimeExports.jsx(ActionBar.Action, { onClick: onDelete, label: "Delete", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash, { size: 16 }) })
                            ]
                          }
                        )
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: getClassName16("overlay") })
              ]
            }
          ),
          portalEl || document.body
        ),
        children(refSetter)
      ]
    }
  );
};
init_react_import();
var styles_module_default12 = { "DropZone": "_DropZone_kmkdc_1", "DropZone--isActive": "_DropZone--isActive_kmkdc_10", "DropZone--hasChildren": "_DropZone--hasChildren_kmkdc_14", "DropZone--userIsDragging": "_DropZone--userIsDragging_kmkdc_22", "DropZone--isAreaSelected": "_DropZone--isAreaSelected_kmkdc_26", "DropZone--hoveringOverArea": "_DropZone--hoveringOverArea_kmkdc_27", "DropZone--isRootZone": "_DropZone--isRootZone_kmkdc_27", "DropZone--isDestination": "_DropZone--isDestination_kmkdc_37", "DropZone-item": "_DropZone-item_kmkdc_49", "DropZone-hitbox": "_DropZone-hitbox_kmkdc_53", "DropZone--isEnabled": "_DropZone--isEnabled_kmkdc_61", "DropZone--isAnimating": "_DropZone--isAnimating_kmkdc_70" };
init_react_import();
const {useEffect:useEffect11,useState:useState15} = await importShared('react');

var useMinEmptyHeight = ({
  zoneCompound,
  userMinEmptyHeight,
  ref
}) => {
  const [prevHeight, setPrevHeight] = useState15(0);
  const [isAnimating, setIsAnimating] = useState15(false);
  const { draggedItem, isZone } = useContextStore(ZoneStoreContext, (s) => {
    var _a, _b;
    return {
      draggedItem: ((_a = s.draggedItem) == null ? void 0 : _a.data.zone) === zoneCompound ? s.draggedItem : null,
      isZone: ((_b = s.draggedItem) == null ? void 0 : _b.data.zone) === zoneCompound
    };
  });
  useEffect11(() => {
    if (draggedItem && ref.current) {
      if (isZone) {
        const rect = ref.current.getBoundingClientRect();
        setPrevHeight(rect.height);
        setIsAnimating(true);
        return;
      }
    }
    setPrevHeight(0);
    setTimeout(() => {
      setIsAnimating(false);
    }, 400);
  }, [ref.current, draggedItem, zoneCompound]);
  return [prevHeight || userMinEmptyHeight, isAnimating];
};
init_react_import();
function assignRef(ref, node) {
  if (typeof ref === "function") {
    ref(node);
  } else if (ref && typeof ref === "object" && "current" in ref) {
    ref.current = node;
  }
}
function assignRefs(refs, node) {
  refs.forEach((ref) => {
    assignRef(ref, node);
  });
}
init_react_import();
const {useEffect:useEffect12,useState:useState16} = await importShared('react');

init_react_import();
const {useCallback:useCallback8} = await importShared('react');

function useRenderedCallback(callback, deps) {
  const manager = useDragDropManager();
  return useCallback8(
    (...args) => __async(this, null, function* () {
      yield manager == null ? void 0 : manager.renderer.rendering;
      return callback(...args);
    }),
    [...deps, manager]
  );
}
init_react_import();
var insert = (list, index, item) => {
  const result = Array.from(list);
  result.splice(index, 0, item);
  return result;
};
var useContentWithPreview = (content, zoneCompound) => {
  const { draggedItemId, preview, previewExists } = useContextStore(
    ZoneStoreContext,
    (s) => {
      var _a;
      return {
        draggedItemId: (_a = s.draggedItem) == null ? void 0 : _a.id,
        preview: s.previewIndex[zoneCompound],
        previewExists: Object.keys(s.previewIndex || {}).length > 0
      };
    }
  );
  const {
    state: {
      ui: { isDragging }
    }
  } = useAppContext();
  const [contentWithPreview, setContentWithPreview] = useState16(content);
  const [localPreview, setLocalPreview] = useState16(
    preview
  );
  const updateContent = useRenderedCallback(
    (content2, preview2, isDragging2) => {
      if (isDragging2 && !previewExists) {
        return;
      }
      if (preview2) {
        if (preview2.type === "insert") {
          setContentWithPreview(
            insert(
              content2.filter((item) => item.props.id !== preview2.props.id),
              preview2.index,
              {
                type: "preview",
                props: { id: preview2.props.id }
              }
            )
          );
        } else {
          setContentWithPreview(
            insert(
              content2.filter((item) => item.props.id !== preview2.props.id),
              preview2.index,
              {
                type: preview2.componentType,
                props: preview2.props
              }
            )
          );
        }
      } else {
        setContentWithPreview(
          previewExists ? content2.filter((item) => item.props.id !== draggedItemId) : content2
        );
      }
      setLocalPreview(preview2);
    },
    [draggedItemId, previewExists]
  );
  useEffect12(() => {
    updateContent(content, preview, isDragging);
  }, [content, preview, isDragging]);
  return [contentWithPreview, localPreview];
};
init_react_import();
const {useCallback:useCallback9,useEffect:useEffect13,useState:useState17} = await importShared('react');

var GRID_DRAG_AXIS = "dynamic";
var FLEX_ROW_DRAG_AXIS = "x";
var DEFAULT_DRAG_AXIS = "y";
var useDragAxis = (ref, collisionAxis) => {
  const { status } = useAppContext();
  const [dragAxis, setDragAxis] = useState17(
    collisionAxis || DEFAULT_DRAG_AXIS
  );
  const calculateDragAxis = useCallback9(() => {
    if (ref.current) {
      const computedStyle = window.getComputedStyle(ref.current);
      if (computedStyle.display === "grid") {
        setDragAxis(GRID_DRAG_AXIS);
      } else if (computedStyle.display === "flex" && computedStyle.flexDirection === "row") {
        setDragAxis(FLEX_ROW_DRAG_AXIS);
      } else {
        setDragAxis(DEFAULT_DRAG_AXIS);
      }
    }
  }, [ref.current]);
  useEffect13(() => {
    const onViewportChange = () => {
      calculateDragAxis();
    };
    window.addEventListener("viewportchange", onViewportChange);
    return () => {
      window.removeEventListener("viewportchange", onViewportChange);
    };
  }, []);
  useEffect13(calculateDragAxis, [status, collisionAxis]);
  return [dragAxis, calculateDragAxis];
};
var getClassName17 = get_class_name_factory_default("DropZone", styles_module_default12);
var DropZoneEditPure = (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(DropZoneEdit, __spreadValues$7({}, props));
var DropZoneEdit = forwardRef3(
  function DropZoneEditInternal({
    zone,
    allow,
    disallow,
    style,
    className,
    minEmptyHeight: userMinEmptyHeight = 128,
    collisionAxis
  }, userRef) {
    const appContext2 = useAppContext();
    const ctx = useContext6(dropZoneContext);
    const {
      // These all need setting via context
      data,
      config,
      areaId,
      registerZoneArea,
      depth,
      registerLocalZone,
      unregisterLocalZone,
      path = [],
      activeZones
    } = ctx;
    let zoneCompound = rootDroppableId;
    if (areaId) {
      if (zone !== rootDroppableId) {
        zoneCompound = `${areaId}:${zone}`;
      }
    }
    const isRootZone = zoneCompound === rootDroppableId || zone === rootDroppableId || areaId === "root";
    const {
      isDeepestZone,
      inNextDeepestArea,
      draggedComponentType,
      userIsDragging
    } = useContextStore(ZoneStoreContext, (s) => {
      var _a, _b, _c;
      return {
        isDeepestZone: (_a = s.zoneDepthIndex[zoneCompound]) != null ? _a : false,
        inNextDeepestArea: s.nextAreaDepthIndex[areaId || ""],
        draggedItemId: (_b = s.draggedItem) == null ? void 0 : _b.id,
        draggedComponentType: (_c = s.draggedItem) == null ? void 0 : _c.data.componentType,
        userIsDragging: !!s.draggedItem
      };
    });
    const { itemSelector } = appContext2.state.ui;
    useEffect14(() => {
      if (areaId && registerZoneArea) {
        registerZoneArea(areaId);
      }
    }, [areaId]);
    useEffect14(() => {
      if (ctx == null ? void 0 : ctx.registerZone) {
        ctx == null ? void 0 : ctx.registerZone(zoneCompound);
      }
      return () => {
        if (ctx == null ? void 0 : ctx.unregisterZone) {
          ctx == null ? void 0 : ctx.unregisterZone(zoneCompound);
        }
      };
    }, []);
    const content = useMemo8(() => {
      if (areaId && zone !== rootDroppableId) {
        return setupZone(data, zoneCompound).zones[zoneCompound];
      }
      return data.content || [];
    }, [data, zoneCompound]);
    const ref = useRef2(null);
    const acceptsTarget = useCallback10(
      (componentType) => {
        if (!componentType) {
          return true;
        }
        if (disallow) {
          const defaultedAllow = allow || [];
          const filteredDisallow = (disallow || []).filter(
            (item) => defaultedAllow.indexOf(item) === -1
          );
          if (filteredDisallow.indexOf(componentType) !== -1) {
            return false;
          }
        } else if (allow) {
          if (allow.indexOf(componentType) === -1) {
            return false;
          }
        }
        return true;
      },
      [allow, disallow]
    );
    useEffect14(() => {
      if (registerLocalZone) {
        registerLocalZone(zoneCompound, acceptsTarget(draggedComponentType));
      }
      return () => {
        if (unregisterLocalZone) {
          unregisterLocalZone(zoneCompound);
        }
      };
    }, [draggedComponentType, zoneCompound]);
    const hoveringOverArea = inNextDeepestArea || isRootZone;
    let isEnabled = true;
    if (userIsDragging) {
      isEnabled = isDeepestZone;
    }
    if (isEnabled) {
      isEnabled = acceptsTarget(draggedComponentType);
    }
    const [contentWithPreview, preview] = useContentWithPreview(
      content,
      zoneCompound
    );
    const isDropEnabled = isEnabled && (preview ? contentWithPreview.length === 1 : contentWithPreview.length === 0);
    const droppableConfig = {
      id: zoneCompound,
      collisionPriority: isEnabled ? depth : 0,
      disabled: !isDropEnabled,
      collisionDetector: pointerIntersection,
      type: "dropzone",
      data: {
        areaId,
        depth,
        isDroppableTarget: acceptsTarget(draggedComponentType),
        path
      }
    };
    const { ref: dropRef } = useDroppableSafe(droppableConfig);
    const selectedItem = itemSelector ? getItem(itemSelector, data) : null;
    const isAreaSelected = selectedItem && areaId === selectedItem.props.id;
    const [dragAxis] = useDragAxis(ref, collisionAxis);
    const [minEmptyHeight, isAnimating] = useMinEmptyHeight({
      zoneCompound,
      userMinEmptyHeight,
      ref
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: `${getClassName17({
          isRootZone,
          userIsDragging,
          hoveringOverArea,
          isEnabled,
          isAreaSelected,
          hasChildren: content.length > 0,
          isActive: activeZones == null ? void 0 : activeZones[zoneCompound],
          isAnimating
        })}${className ? ` ${className}` : ""}`,
        ref: (node) => {
          assignRefs([ref, dropRef, userRef], node);
        },
        "data-testid": `dropzone:${zoneCompound}`,
        "data-puck-dropzone": zoneCompound,
        style: __spreadProps$6(__spreadValues$7({}, style), {
          "--min-empty-height": `${minEmptyHeight}px`,
          backgroundColor: style == null ? void 0 : style.backgroundColor
        }),
        children: contentWithPreview.map((item, i) => {
          var _a, _b, _c, _d, _e, _f, _g;
          const componentId = item.props.id;
          const puckProps = {
            renderDropZone: DropZoneEditPure,
            isEditing: true,
            dragRef: null
          };
          const defaultedProps = __spreadProps$6(__spreadValues$7(__spreadValues$7({}, (_a = config.components[item.type]) == null ? void 0 : _a.defaultProps), item.props), {
            puck: puckProps,
            editMode: true
            // DEPRECATED
          });
          const isSelected = (selectedItem == null ? void 0 : selectedItem.props.id) === componentId || false;
          let Render2 = config.components[item.type] && item.type !== "preview" ? config.components[item.type].render : () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { padding: 48, textAlign: "center" }, children: [
            "No configuration for ",
            item.type
          ] });
          const componentConfig = config.components[item.type];
          let componentType = item.type;
          let label = (_b = componentConfig == null ? void 0 : componentConfig["label"]) != null ? _b : item.type.toString();
          if (item.type === "preview") {
            let Preview4 = function() {
              return /* @__PURE__ */ jsxRuntimeExports.jsx(DrawerItemInner, { name: label, children: appContext2.overrides.componentItem });
            };
            componentType = (_c = preview == null ? void 0 : preview.componentType) != null ? _c : "__preview";
            label = (_f = (_e = (_d = config.components[componentType]) == null ? void 0 : _d.label) != null ? _e : componentType) != null ? _f : "Preview";
            Render2 = Preview4;
          }
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            DropZoneProvider,
            {
              value: __spreadProps$6(__spreadValues$7({}, ctx), { path: [...path, zoneCompound] }),
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                DraggableComponent,
                {
                  id: componentId,
                  componentType,
                  zoneCompound,
                  depth: depth + 1,
                  index: i,
                  isLoading: ((_g = appContext2.componentState[componentId]) == null ? void 0 : _g.loadingCount) > 0,
                  isSelected,
                  label,
                  isEnabled,
                  autoDragAxis: dragAxis,
                  userDragAxis: collisionAxis,
                  inDroppableZone: acceptsTarget(draggedComponentType),
                  children: (dragRef) => (componentConfig == null ? void 0 : componentConfig.inline) ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Render2,
                    __spreadProps$6(__spreadValues$7({}, defaultedProps), {
                      puck: __spreadProps$6(__spreadValues$7({}, defaultedProps.puck), {
                        dragRef
                      })
                    })
                  ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: dragRef, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Render2, __spreadValues$7({}, defaultedProps)) })
                }
              )
            },
            componentId
          );
        })
      }
    );
  }
);
var DropZoneRenderPure = (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(DropZoneRender, __spreadValues$7({}, props));
var DropZoneRender = forwardRef3(
  function DropZoneRenderInternal({ className, style, zone }, ref) {
    const ctx = useContext6(dropZoneContext);
    const { data, areaId = "root", config } = ctx || {};
    let zoneCompound = rootDroppableId;
    let content = (data == null ? void 0 : data.content) || [];
    useEffect14(() => {
      if (ctx == null ? void 0 : ctx.registerZone) {
        ctx == null ? void 0 : ctx.registerZone(zoneCompound);
      }
      return () => {
        if (ctx == null ? void 0 : ctx.unregisterZone) {
          ctx == null ? void 0 : ctx.unregisterZone(zoneCompound);
        }
      };
    }, []);
    if (!data || !config) {
      return null;
    }
    if (areaId && zone && zone !== rootDroppableId) {
      zoneCompound = `${areaId}:${zone}`;
      content = setupZone(data, zoneCompound).zones[zoneCompound];
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className, style, ref, children: content.map((item) => {
      const Component = config.components[item.type];
      if (Component) {
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          DropZoneProvider,
          {
            value: {
              data,
              config,
              areaId: item.props.id,
              depth: 1,
              path: []
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Component.render,
              __spreadProps$6(__spreadValues$7({}, item.props), {
                puck: {
                  renderDropZone: DropZoneRenderPure
                }
              })
            )
          },
          item.props.id
        );
      }
      return null;
    }) });
  }
);
var DropZonePure = (props) => /* @__PURE__ */ jsxRuntimeExports.jsx(DropZone, __spreadValues$7({}, props));
var DropZone = forwardRef3(
  function DropZone2(props, ref) {
    const ctx = useContext6(dropZoneContext);
    if ((ctx == null ? void 0 : ctx.mode) === "edit") {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DropZoneEdit, __spreadProps$6(__spreadValues$7({}, props), { ref })) });
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DropZoneRender, __spreadProps$6(__spreadValues$7({}, props), { ref })) });
  }
);
init_react_import();
var getZoneId = (zoneCompound) => {
  if (!zoneCompound) {
    return [];
  }
  if (zoneCompound && zoneCompound.indexOf(":") > -1) {
    return zoneCompound.split(":");
  }
  return [rootDroppableId, zoneCompound];
};
init_react_import();
init_react_import();
function timeout2(callback, duration) {
  const id = setTimeout(callback, duration);
  return () => clearTimeout(id);
}
function throttle(func, limit) {
  const time = () => performance.now();
  let cancel;
  let lastRan = 0;
  return function(...args) {
    const now = time();
    const context = this;
    if (now - lastRan >= limit) {
      func.apply(context, args);
      lastRan = now;
    } else {
      cancel == null ? void 0 : cancel();
      cancel = timeout2(() => {
        func.apply(context, args);
        lastRan = time();
      }, limit - (now - lastRan));
    }
  };
}
init_react_import();
var getFrame = () => {
  if (typeof window === "undefined") return;
  let frameEl = document.querySelector("#preview-frame");
  if ((frameEl == null ? void 0 : frameEl.tagName) === "IFRAME") {
    return frameEl.contentDocument || document;
  }
  return (frameEl == null ? void 0 : frameEl.ownerDocument) || document;
};
init_react_import();
var GlobalPosition = class {
  constructor(target, original) {
    this.scaleFactor = 1;
    this.frameEl = null;
    this.frameRect = null;
    var _a;
    this.target = target;
    this.original = original;
    this.frameEl = document.querySelector("iframe");
    if (this.frameEl) {
      this.frameRect = this.frameEl.getBoundingClientRect();
      this.scaleFactor = this.frameRect.width / (((_a = this.frameEl.contentWindow) == null ? void 0 : _a.innerWidth) || 1);
    }
  }
  get x() {
    return this.original.x;
  }
  get y() {
    return this.original.y;
  }
  get global() {
    if (document !== this.target.ownerDocument && this.frameRect) {
      return {
        x: this.x * this.scaleFactor + this.frameRect.left,
        y: this.y * this.scaleFactor + this.frameRect.top
      };
    }
    return this.original;
  }
  get frame() {
    if (document === this.target.ownerDocument && this.frameRect) {
      return {
        x: (this.x - this.frameRect.left) / this.scaleFactor,
        y: (this.y - this.frameRect.top) / this.scaleFactor
      };
    }
    return this.original;
  }
};
init_react_import();
var BaseEvent = typeof PointerEvent !== "undefined" ? PointerEvent : Event;
var BubbledPointerEvent = class extends BaseEvent {
  constructor(type, data) {
    super(type, data);
    this._originalTarget = null;
    this.originalTarget = data.originalTarget;
  }
  // Necessary for Firefox
  set originalTarget(target) {
    this._originalTarget = target;
  }
  // Necessary for Firefox
  get originalTarget() {
    return this._originalTarget;
  }
};
var depthSort = (candidates) => {
  return candidates.sort((a, b) => {
    const aData = a.data;
    const bData = b.data;
    if (aData.depth > bData.depth) {
      return 1;
    }
    if (bData.depth > aData.depth) {
      return -1;
    }
    return 0;
  });
};
var getZoneId2 = (candidate) => {
  let id = candidate == null ? void 0 : candidate.id;
  if (!candidate) return null;
  if (candidate.type === "component") {
    const data = candidate.data;
    if (data.containsActiveZone) {
      id = null;
    } else {
      id = data.zone;
    }
  } else if (candidate.type === "void") {
    return "void";
  }
  return id;
};
var getPointerCollisions = (position, manager) => {
  const candidates = [];
  let elements = position.target.ownerDocument.elementsFromPoint(
    position.x,
    position.y
  );
  const previewFrame = elements.find(
    (el) => el.getAttribute("data-puck-preview")
  );
  const drawer = elements.find((el) => el.getAttribute("data-puck-drawer"));
  if (drawer) {
    elements = [drawer];
  }
  if (previewFrame) {
    const frame = getFrame();
    if (frame) {
      elements = frame.elementsFromPoint(position.frame.x, position.frame.y);
    }
  }
  if (elements) {
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      const dropzoneId = element.getAttribute("data-puck-dropzone");
      if (dropzoneId) {
        const droppable = manager.registry.droppables.get(dropzoneId);
        if (droppable) {
          candidates.push(droppable);
        }
      }
      const id = element.getAttribute("data-puck-dnd");
      if (id) {
        const droppable = manager.registry.droppables.get(id);
        if (droppable) {
          candidates.push(droppable);
        }
      }
    }
  }
  return candidates;
};
var findDeepestCandidate = (position, manager) => {
  var _a;
  const candidates = getPointerCollisions(position, manager);
  if (candidates.length > 0) {
    const sortedCandidates = depthSort(candidates);
    const draggable = manager.dragOperation.source;
    const draggedCandidateIndex = sortedCandidates.findIndex(
      (candidate) => candidate.id === (draggable == null ? void 0 : draggable.id)
    );
    const draggedCandidateId = draggable == null ? void 0 : draggable.id;
    let filteredCandidates = [...sortedCandidates];
    if (draggedCandidateId && draggedCandidateIndex > -1) {
      filteredCandidates.splice(draggedCandidateIndex, 1);
    }
    filteredCandidates = filteredCandidates.filter((candidate) => {
      const candidateData = candidate.data;
      if (draggedCandidateId && draggedCandidateIndex > -1) {
        if (candidateData.path.indexOf(draggedCandidateId) > -1) {
          return false;
        }
      }
      if (candidate.type === "dropzone") {
        const candidateData2 = candidate.data;
        if (!candidateData2.isDroppableTarget) {
          return false;
        }
        if (candidateData2.areaId === draggedCandidateId) {
          return false;
        }
      } else if (candidate.type === "component") {
        const candidateData2 = candidate.data;
        if (!candidateData2.inDroppableZone) {
          return false;
        }
      }
      return true;
    });
    filteredCandidates.reverse();
    const zone = getZoneId2(filteredCandidates[0]);
    const area = (_a = filteredCandidates[0]) == null ? void 0 : _a.data.areaId;
    return { zone, area };
  }
  return {
    zone: "default-zone",
    area: null
  };
};
var createNestedDroppablePlugin = ({ onChange }, id) => class NestedDroppablePlugin extends Plugin {
  constructor(manager, options) {
    super(manager);
    if (typeof window === "undefined") {
      return;
    }
    const cleanupEffect = effects(() => {
      const handleMove = (event) => {
        const target = event instanceof BubbledPointerEvent ? event.originalTarget || event.target : event.target;
        const position = new GlobalPosition(target, {
          x: event.clientX,
          y: event.clientY
        });
        const elements = document.elementsFromPoint(
          position.global.x,
          position.global.y
        );
        const overEl = elements.some((el) => el.id === id);
        if (overEl) {
          onChange(findDeepestCandidate(position, manager), manager);
        }
      };
      const handleMoveThrottled = throttle(handleMove, 50);
      const handlePointerMove = (event) => {
        handleMoveThrottled(event);
      };
      document.body.addEventListener("pointermove", handlePointerMove, {
        capture: true
        // dndkit's PointerSensor prevents propagation during drag
      });
      this.destroy = () => {
        document.body.removeEventListener("pointermove", handlePointerMove, {
          capture: true
        });
        cleanupEffect();
      };
    });
  }
};
init_react_import();
init_react_import();
init_react_import();
init_react_import();
var remove = (list, index) => {
  const result = Array.from(list);
  result.splice(index, 1);
  return result;
};
init_react_import();
function reduceRelatedZones(item, data, fn) {
  return __spreadProps$6(__spreadValues$7({}, data), {
    zones: Object.keys(data.zones || {}).reduce(
      (acc, key) => {
        const [parentId] = getZoneId(key);
        if (parentId === item.props.id) {
          const zones = data.zones;
          return fn(acc, key, zones[key]);
        }
        return __spreadProps$6(__spreadValues$7({}, acc), { [key]: data.zones[key] });
      },
      {}
    )
  });
}
var findRelatedByZoneId = (zoneId, data) => {
  const [zoneParentId] = getZoneId(zoneId);
  return (data.zones[zoneId] || []).reduce(
    (acc, zoneItem) => {
      const related = findRelatedByItem(zoneItem, data);
      if (zoneItem.props.id === zoneParentId) {
        return __spreadProps$6(__spreadValues$7(__spreadValues$7({}, acc), related), { [zoneId]: zoneItem });
      }
      return __spreadValues$7(__spreadValues$7({}, acc), related);
    },
    {}
  );
};
var findRelatedByItem = (item, data) => {
  return Object.keys(data.zones || {}).reduce(
    (acc, zoneId) => {
      const [zoneParentId] = getZoneId(zoneId);
      if (item.props.id === zoneParentId) {
        const related = findRelatedByZoneId(zoneId, data);
        return __spreadProps$6(__spreadValues$7(__spreadValues$7({}, acc), related), {
          [zoneId]: data.zones[zoneId]
        });
      }
      return acc;
    },
    {}
  );
};
var removeRelatedZones = (item, data) => {
  const newData = __spreadValues$7({}, data);
  const related = findRelatedByItem(item, data);
  Object.keys(related).forEach((key) => {
    delete newData.zones[key];
  });
  return newData;
};
function duplicateRelatedZones(item, data, newId) {
  return reduceRelatedZones(item, data, (acc, key, zone) => {
    const dupedZone = zone.map((zoneItem) => __spreadProps$6(__spreadValues$7({}, zoneItem), {
      props: __spreadProps$6(__spreadValues$7({}, zoneItem.props), { id: generateId(zoneItem.type) })
    }));
    const dupeOfDupes = dupedZone.reduce(
      (dupeOfDupes2, item2, index) => __spreadValues$7(__spreadValues$7({}, dupeOfDupes2), duplicateRelatedZones(zone[index], data, item2.props.id).zones),
      acc
    );
    const [_, zoneId] = getZoneId(key);
    return __spreadProps$6(__spreadValues$7({}, dupeOfDupes), {
      [key]: zone,
      [`${newId}:${zoneId}`]: dupedZone
    });
  });
}
var zoneCache = {};
var addToZoneCache = (key, data) => {
  zoneCache[key] = data;
};
var replaceAction = (data, action) => {
  if (action.destinationZone === rootDroppableId) {
    return __spreadProps$6(__spreadValues$7({}, data), {
      content: replace(data.content, action.destinationIndex, action.data)
    });
  }
  const newData = setupZone(data, action.destinationZone);
  return __spreadProps$6(__spreadValues$7({}, newData), {
    zones: __spreadProps$6(__spreadValues$7({}, newData.zones), {
      [action.destinationZone]: replace(
        newData.zones[action.destinationZone],
        action.destinationIndex,
        action.data
      )
    })
  });
};
function insertAction(data, action, config) {
  const emptyComponentData = {
    type: action.componentType,
    props: __spreadProps$6(__spreadValues$7({}, config.components[action.componentType].defaultProps || {}), {
      id: action.id || generateId(action.componentType)
    })
  };
  if (action.destinationZone === rootDroppableId) {
    return __spreadProps$6(__spreadValues$7({}, data), {
      content: insert(
        data.content,
        action.destinationIndex,
        emptyComponentData
      )
    });
  }
  const newData = setupZone(data, action.destinationZone);
  return __spreadProps$6(__spreadValues$7({}, data), {
    zones: __spreadProps$6(__spreadValues$7({}, newData.zones), {
      [action.destinationZone]: insert(
        newData.zones[action.destinationZone],
        action.destinationIndex,
        emptyComponentData
      )
    })
  });
}
var reorderAction = (data, action) => {
  if (action.destinationZone === rootDroppableId) {
    return __spreadProps$6(__spreadValues$7({}, data), {
      content: reorder(
        data.content,
        action.sourceIndex,
        action.destinationIndex
      )
    });
  }
  const newData = setupZone(data, action.destinationZone);
  return __spreadProps$6(__spreadValues$7({}, data), {
    zones: __spreadProps$6(__spreadValues$7({}, newData.zones), {
      [action.destinationZone]: reorder(
        newData.zones[action.destinationZone],
        action.sourceIndex,
        action.destinationIndex
      )
    })
  });
};
function reduceData(data, action, config) {
  if (action.type === "insert") {
    return insertAction(data, action, config);
  }
  if (action.type === "duplicate") {
    const item = getItem(
      { index: action.sourceIndex, zone: action.sourceZone },
      data
    );
    const newItem = __spreadProps$6(__spreadValues$7({}, item), {
      props: __spreadProps$6(__spreadValues$7({}, item.props), {
        id: generateId(item.type)
      })
    });
    const dataWithRelatedDuplicated = duplicateRelatedZones(
      item,
      data,
      newItem.props.id
    );
    if (action.sourceZone === rootDroppableId) {
      return __spreadProps$6(__spreadValues$7({}, dataWithRelatedDuplicated), {
        content: insert(data.content, action.sourceIndex + 1, newItem)
      });
    }
    return __spreadProps$6(__spreadValues$7({}, dataWithRelatedDuplicated), {
      zones: __spreadProps$6(__spreadValues$7({}, dataWithRelatedDuplicated.zones), {
        [action.sourceZone]: insert(
          dataWithRelatedDuplicated.zones[action.sourceZone],
          action.sourceIndex + 1,
          newItem
        )
      })
    });
  }
  if (action.type === "reorder") {
    return reorderAction(data, action);
  }
  if (action.type === "move") {
    if (action.sourceZone === action.destinationZone && action.sourceIndex === action.destinationIndex) {
      return data;
    }
    const newData = setupZone(
      setupZone(data, action.sourceZone),
      action.destinationZone
    );
    const item = getItem(
      { zone: action.sourceZone, index: action.sourceIndex },
      newData
    );
    if (action.sourceZone === action.destinationZone) {
      return reorderAction(data, __spreadProps$6(__spreadValues$7({}, action), { type: "reorder" }));
    }
    if (action.sourceZone === rootDroppableId) {
      return __spreadProps$6(__spreadValues$7({}, newData), {
        content: remove(newData.content, action.sourceIndex),
        zones: __spreadProps$6(__spreadValues$7({}, newData.zones), {
          [action.destinationZone]: insert(
            newData.zones[action.destinationZone],
            action.destinationIndex,
            item
          )
        })
      });
    }
    if (action.destinationZone === rootDroppableId) {
      return __spreadProps$6(__spreadValues$7({}, newData), {
        content: insert(newData.content, action.destinationIndex, item),
        zones: __spreadProps$6(__spreadValues$7({}, newData.zones), {
          [action.sourceZone]: remove(
            newData.zones[action.sourceZone],
            action.sourceIndex
          )
        })
      });
    }
    return __spreadProps$6(__spreadValues$7({}, newData), {
      zones: __spreadProps$6(__spreadValues$7({}, newData.zones), {
        [action.sourceZone]: remove(
          newData.zones[action.sourceZone],
          action.sourceIndex
        ),
        [action.destinationZone]: insert(
          newData.zones[action.destinationZone],
          action.destinationIndex,
          item
        )
      })
    });
  }
  if (action.type === "replace") {
    return replaceAction(data, action);
  }
  if (action.type === "remove") {
    const item = getItem({ index: action.index, zone: action.zone }, data);
    const dataWithRelatedRemoved = setupZone(
      removeRelatedZones(item, data),
      action.zone
    );
    if (action.zone === rootDroppableId) {
      return __spreadProps$6(__spreadValues$7({}, dataWithRelatedRemoved), {
        content: remove(data.content, action.index)
      });
    }
    return __spreadProps$6(__spreadValues$7({}, dataWithRelatedRemoved), {
      zones: __spreadProps$6(__spreadValues$7({}, dataWithRelatedRemoved.zones), {
        [action.zone]: remove(
          dataWithRelatedRemoved.zones[action.zone],
          action.index
        )
      })
    });
  }
  if (action.type === "registerZone") {
    if (zoneCache[action.zone]) {
      return __spreadProps$6(__spreadValues$7({}, data), {
        zones: __spreadProps$6(__spreadValues$7({}, data.zones), {
          [action.zone]: zoneCache[action.zone]
        })
      });
    }
    return setupZone(data, action.zone);
  }
  if (action.type === "unregisterZone") {
    const _zones = __spreadValues$7({}, data.zones || {});
    if (_zones[action.zone]) {
      zoneCache[action.zone] = _zones[action.zone];
      delete _zones[action.zone];
    }
    return __spreadProps$6(__spreadValues$7({}, data), { zones: _zones });
  }
  if (action.type === "setData") {
    if (typeof action.data === "object") {
      return __spreadValues$7(__spreadValues$7({}, data), action.data);
    }
    return __spreadValues$7(__spreadValues$7({}, data), action.data(data));
  }
  return data;
}
init_react_import();
var reduceUi = (ui, action) => {
  if (action.type === "setUi") {
    if (typeof action.ui === "object") {
      return __spreadValues$7(__spreadValues$7({}, ui), action.ui);
    }
    return __spreadValues$7(__spreadValues$7({}, ui), action.ui(ui));
  }
  if (action.type === "duplicate") {
    return __spreadProps$6(__spreadValues$7({}, ui), {
      itemSelector: { index: action.sourceIndex + 1, zone: action.sourceZone }
    });
  }
  if (action.type === "remove") {
    return __spreadProps$6(__spreadValues$7({}, ui), {
      itemSelector: null
    });
  }
  return ui;
};
init_react_import();
function storeInterceptor(reducer, record, onAction) {
  return (state, action) => {
    const newAppState = reducer(state, action);
    const isValidType = ![
      "registerZone",
      "unregisterZone",
      "setData",
      "setUi",
      "set"
    ].includes(action.type);
    if (typeof action.recordHistory !== "undefined" ? action.recordHistory : isValidType) {
      if (record) record(newAppState);
    }
    onAction == null ? void 0 : onAction(action, newAppState, state);
    return newAppState;
  };
}
var setAction = (state, action) => {
  if (typeof action.state === "object") {
    return __spreadValues$7(__spreadValues$7({}, state), action.state);
  }
  return __spreadValues$7(__spreadValues$7({}, state), action.state(state));
};
function createReducer({
  config,
  record,
  onAction
}) {
  return storeInterceptor(
    (state, action) => {
      const data = reduceData(state.data, action, config);
      const ui = reduceUi(state.ui, action);
      if (action.type === "set") {
        return setAction(state, action);
      }
      return { data, ui };
    },
    record,
    onAction
  );
}
var insertComponent = (componentType, zone, index, {
  config,
  dispatch,
  resolveData,
  state
}) => {
  const id = generateId(componentType);
  const insertActionData = {
    type: "insert",
    componentType,
    destinationIndex: index,
    destinationZone: zone,
    id
  };
  const insertedData = insertAction(state.data, insertActionData, config);
  dispatch(__spreadProps$6(__spreadValues$7({}, insertActionData), {
    // Dispatch insert rather set, as user's may rely on this via onAction
    // We must always record history here so the insert is added to user history
    // If the user has defined a resolveData method, they will end up with 2 history
    // entries on insert - one for the initial insert, and one when the data resolves
    recordHistory: true
  }));
  const itemSelector = {
    index,
    zone
  };
  dispatch({ type: "setUi", ui: { itemSelector } });
  resolveData({
    data: insertedData,
    ui: __spreadProps$6(__spreadValues$7({}, state.ui), { itemSelector })
  });
};
init_react_import();
function getDeepDir(el) {
  function findDir(node) {
    if (!node) return "ltr";
    const d = node.getAttribute("dir");
    return d || findDir(node.parentElement);
  }
  return el ? findDir(el) : "ltr";
}
var dragListenerContext = createContext4({
  dragListeners: {}
});
function useDragListener(type, fn, deps = []) {
  const { setDragListeners } = useContext7(dragListenerContext);
  useEffect15(() => {
    if (setDragListeners) {
      setDragListeners((old) => __spreadProps$6(__spreadValues$7({}, old), {
        [type]: [...old[type] || [], fn]
      }));
    }
  }, deps);
}
var AREA_CHANGE_DEBOUNCE_MS = 100;
var useTempDisableFallback = (timeout3) => {
  const lastFallbackDisable = useRef3(null);
  return useCallback11((manager) => {
    collisionStore.setState({ fallbackEnabled: false });
    const fallbackId = generateId();
    lastFallbackDisable.current = fallbackId;
    setTimeout(() => {
      if (lastFallbackDisable.current === fallbackId) {
        collisionStore.setState({ fallbackEnabled: true });
        manager.collisionObserver.forceUpdate(true);
      }
    }, timeout3);
  }, []);
};
var DragDropContextClient = ({
  children,
  disableAutoScroll
}) => {
  const { state, config, dispatch, resolveData } = useAppContext();
  const id = useId();
  const { data } = state;
  const debouncedParamsRef = useRef3(null);
  const tempDisableFallback = useTempDisableFallback(100);
  const [zoneStore] = useState18(
    () => createStore(() => ({
      zoneDepthIndex: {},
      nextZoneDepthIndex: {},
      areaDepthIndex: {},
      nextAreaDepthIndex: {},
      draggedItem: null,
      previewIndex: {}
    }))
  );
  const getChanged2 = useCallback11(
    (params, id2) => {
      const { zoneDepthIndex = {}, areaDepthIndex = {} } = zoneStore.getState() || {};
      const stateHasZone = Object.keys(zoneDepthIndex).length > 0;
      const stateHasArea = Object.keys(areaDepthIndex).length > 0;
      let zoneChanged = false;
      let areaChanged = false;
      if (params.zone && !zoneDepthIndex[params.zone]) {
        zoneChanged = true;
      } else if (!params.zone && stateHasZone) {
        zoneChanged = true;
      }
      if (params.area && !areaDepthIndex[params.area]) {
        areaChanged = true;
      } else if (!params.area && stateHasArea) {
        areaChanged = true;
      }
      return { zoneChanged, areaChanged };
    },
    [zoneStore]
  );
  const setDeepestAndCollide = useCallback11(
    (params, manager) => {
      const { zoneChanged, areaChanged } = getChanged2(params, id);
      if (!zoneChanged && !areaChanged) return;
      zoneStore.setState({
        zoneDepthIndex: params.zone ? { [params.zone]: true } : {},
        areaDepthIndex: params.area ? { [params.area]: true } : {}
      });
      tempDisableFallback(manager);
      setTimeout(() => {
        manager.collisionObserver.forceUpdate(true);
      }, 50);
      debouncedParamsRef.current = null;
    },
    [zoneStore]
  );
  const setDeepestDb = c(
    setDeepestAndCollide,
    AREA_CHANGE_DEBOUNCE_MS
  );
  const cancelDb = () => {
    setDeepestDb.cancel();
    debouncedParamsRef.current = null;
  };
  useEffect15(() => {
  }, []);
  const [plugins] = useState18(() => [
    ...disableAutoScroll ? defaultPreset.plugins.filter((plugin) => plugin !== AutoScroller) : defaultPreset.plugins,
    createNestedDroppablePlugin(
      {
        onChange: (params, manager) => {
          const state2 = zoneStore.getState();
          const { zoneChanged, areaChanged } = getChanged2(params, id);
          const isDragging = manager.dragOperation.status.dragging;
          if (areaChanged || zoneChanged) {
            let nextZoneDepthIndex = {};
            let nextAreaDepthIndex = {};
            if (params.zone) {
              nextZoneDepthIndex = { [params.zone]: true };
            }
            if (params.area) {
              nextAreaDepthIndex = { [params.area]: true };
            }
            zoneStore.setState({ nextZoneDepthIndex, nextAreaDepthIndex });
          }
          if (params.zone !== "void" && (state2 == null ? void 0 : state2.zoneDepthIndex["void"])) {
            setDeepestAndCollide(params, manager);
            return;
          }
          if (areaChanged) {
            if (isDragging) {
              const debouncedParams = debouncedParamsRef.current;
              const isSameParams = debouncedParams && debouncedParams.area === params.area && debouncedParams.zone === params.zone;
              if (!isSameParams) {
                cancelDb();
                setDeepestDb(params, manager);
                debouncedParamsRef.current = params;
              }
            } else {
              cancelDb();
              setDeepestAndCollide(params, manager);
            }
            return;
          }
          if (zoneChanged) {
            setDeepestAndCollide(params, manager);
          }
          cancelDb();
        }
      },
      id
    )
  ]);
  const sensors = useSensors();
  const [dragListeners, setDragListeners] = useState18({});
  const [pathData, setPathData] = useState18();
  const dragMode = useRef3(null);
  const registerPath = useCallback11(
    (id2, selector, label) => {
      const [area] = getZoneId(selector.zone);
      setPathData((latestPathData = {}) => {
        const parentPathData = latestPathData[area] || { path: [] };
        return __spreadProps$6(__spreadValues$7({}, latestPathData), {
          [id2]: {
            path: [
              ...parentPathData.path,
              ...selector.zone ? [selector.zone] : []
            ],
            label
          }
        });
      });
    },
    [data, setPathData]
  );
  const unregisterPath = useCallback11(
    (id2) => {
      setPathData((latestPathData = {}) => {
        const newPathData = __spreadValues$7({}, latestPathData);
        delete newPathData[id2];
        return newPathData;
      });
    },
    [data, setPathData]
  );
  const initialSelector = useRef3(void 0);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    dragListenerContext.Provider,
    {
      value: {
        dragListeners,
        setDragListeners
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        DragDropProvider,
        {
          plugins,
          sensors,
          onDragEnd: (event, manager) => {
            var _a;
            const { source, target } = event.operation;
            if (!source) {
              zoneStore.setState({ draggedItem: null });
              return;
            }
            const { zone, index } = source.data;
            const { previewIndex = {} } = zoneStore.getState() || {};
            const thisPreview = ((_a = previewIndex[zone]) == null ? void 0 : _a.props.id) === source.id ? previewIndex[zone] : null;
            setTimeout(() => {
              var _a2, _b;
              zoneStore.setState({ draggedItem: null });
              if (event.canceled || (target == null ? void 0 : target.type) === "void") {
                zoneStore.setState({ previewIndex: {} });
                (_a2 = dragListeners.dragend) == null ? void 0 : _a2.forEach((fn) => {
                  fn(event, manager);
                });
                dispatch({
                  type: "setUi",
                  ui: {
                    itemSelector: null,
                    isDragging: false
                  }
                });
                return;
              }
              if (thisPreview) {
                zoneStore.setState({ previewIndex: {} });
                if (thisPreview.type === "insert") {
                  insertComponent(
                    thisPreview.componentType,
                    thisPreview.zone,
                    thisPreview.index,
                    { config, dispatch, resolveData, state }
                  );
                } else if (initialSelector.current) {
                  dispatch({
                    type: "move",
                    sourceIndex: initialSelector.current.index,
                    sourceZone: initialSelector.current.zone,
                    destinationIndex: thisPreview.index,
                    destinationZone: thisPreview.zone,
                    recordHistory: false
                  });
                }
              }
              setTimeout(() => {
                dispatch({
                  type: "setUi",
                  ui: {
                    itemSelector: { index, zone },
                    isDragging: false
                  },
                  recordHistory: true
                });
              }, 50);
              (_b = dragListeners.dragend) == null ? void 0 : _b.forEach((fn) => {
                fn(event, manager);
              });
            }, 250);
          },
          onDragOver: (event, manager) => {
            var _a, _b, _c, _d, _e;
            event.preventDefault();
            const draggedItem = (_a = zoneStore.getState()) == null ? void 0 : _a.draggedItem;
            if (!draggedItem) return;
            cancelDb();
            const { source, target } = event.operation;
            if (!target || !source || target.type === "void") return;
            const [sourceId] = source.id.split(":");
            const [targetId] = target.id.split(":");
            const sourceData = source.data;
            let sourceZone = sourceData.zone;
            let sourceIndex = sourceData.index;
            let targetZone = "";
            let targetIndex = 0;
            if (target.type === "component") {
              const targetData = target.data;
              targetZone = targetData.zone;
              targetIndex = targetData.index;
              const collisionData = (_c = (_b = manager.dragOperation.data) == null ? void 0 : _b.collisionMap) == null ? void 0 : _c[targetId];
              const dir = getDeepDir(target.element);
              const collisionPosition = (collisionData == null ? void 0 : collisionData.direction) === "up" || dir === "ltr" && (collisionData == null ? void 0 : collisionData.direction) === "left" || dir === "rtl" && (collisionData == null ? void 0 : collisionData.direction) === "right" ? "before" : "after";
              if (targetIndex >= sourceIndex && sourceZone === targetZone) {
                targetIndex = targetIndex - 1;
              }
              if (collisionPosition === "after") {
                targetIndex = targetIndex + 1;
              }
            } else {
              targetZone = target.id.toString();
              targetIndex = 0;
            }
            if (targetId === sourceId || ((_d = pathData == null ? void 0 : pathData[target.id]) == null ? void 0 : _d.path.find((path) => {
              const [pathId] = path.split(":");
              return pathId === sourceId;
            }))) {
              return;
            }
            if (dragMode.current === "new") {
              zoneStore.setState({
                previewIndex: {
                  [targetZone]: {
                    componentType: sourceData.componentType,
                    type: "insert",
                    index: targetIndex,
                    zone: targetZone,
                    props: {
                      id: source.id.toString()
                    }
                  }
                }
              });
            } else {
              if (!initialSelector.current) {
                initialSelector.current = {
                  zone: sourceData.zone,
                  index: sourceData.index
                };
              }
              const item = getItem(initialSelector.current, data);
              if (item) {
                zoneStore.setState({
                  previewIndex: {
                    [targetZone]: {
                      componentType: sourceData.componentType,
                      type: "move",
                      index: targetIndex,
                      zone: targetZone,
                      props: item.props
                    }
                  }
                });
              }
            }
            (_e = dragListeners.dragover) == null ? void 0 : _e.forEach((fn) => {
              fn(event, manager);
            });
          },
          onDragStart: (event, manager) => {
            var _a;
            dispatch({
              type: "setUi",
              ui: { itemSelector: null, isDragging: true }
            });
            const { source } = event.operation;
            if (source && source.type !== "void") {
              const sourceData = source.data;
              const item = getItem(
                {
                  zone: sourceData.zone,
                  index: sourceData.index
                },
                data
              );
              if (item) {
                zoneStore.setState({
                  previewIndex: {
                    [sourceData.zone]: {
                      componentType: sourceData.componentType,
                      type: "move",
                      index: sourceData.index,
                      zone: sourceData.zone,
                      props: item.props
                    }
                  }
                });
              }
            }
            (_a = dragListeners.dragstart) == null ? void 0 : _a.forEach((fn) => {
              fn(event, manager);
            });
          },
          onBeforeDragStart: (event) => {
            var _a;
            const isNewComponent = ((_a = event.operation.source) == null ? void 0 : _a.data.type) === "drawer";
            dragMode.current = isNewComponent ? "new" : "existing";
            initialSelector.current = void 0;
            zoneStore.setState({ draggedItem: event.operation.source });
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(ZoneStoreProvider, { store: zoneStore, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            DropZoneProvider,
            {
              value: {
                data,
                config,
                mode: "edit",
                areaId: "root",
                depth: 0,
                registerPath,
                unregisterPath,
                pathData,
                path: []
              },
              children
            }
          ) })
        }
      )
    }
  ) });
};
var DragDropContext = ({
  children,
  disableAutoScroll
}) => {
  const { status } = useAppContext();
  if (status === "LOADING") {
    return children;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(DragDropContextClient, { disableAutoScroll, children });
};
var getClassName18 = get_class_name_factory_default("Drawer", styles_module_default10);
var getClassNameItem2 = get_class_name_factory_default("DrawerItem", styles_module_default10);
var DrawerItemInner = ({
  children,
  name,
  label,
  dragRef,
  isDragDisabled
}) => {
  const CustomInner = useMemo9(
    () => children || (({ children: children2 }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: getClassNameItem2("default"), children: children2 })),
    [children]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: getClassNameItem2({ disabled: isDragDisabled }),
      ref: dragRef,
      onMouseDown: (e) => e.preventDefault(),
      "data-testid": dragRef ? `drawer-item:${name}` : "",
      "data-puck-drawer-item": true,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(CustomInner, { name, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: getClassNameItem2("draggableWrapper"), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: getClassNameItem2("draggable"), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: getClassNameItem2("name"), children: label != null ? label : name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: getClassNameItem2("icon"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(DragIcon, {}) })
      ] }) }) })
    }
  );
};
var DrawerItemDraggable = ({
  children,
  name,
  label,
  id,
  isDragDisabled
}) => {
  const { ref } = useDraggableSafe({
    id,
    data: { type: "drawer", componentType: name },
    disabled: isDragDisabled
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: getClassName18("draggable"), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: getClassName18("draggableBg"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(DrawerItemInner, { name, label, children }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: getClassName18("draggableFg"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      DrawerItemInner,
      {
        name,
        label,
        dragRef: ref,
        isDragDisabled,
        children
      }
    ) })
  ] });
};
var DrawerItem = ({
  name,
  children,
  id,
  label,
  index,
  isDragDisabled
}) => {
  const resolvedId = id || name;
  const [dynamicId, setDynamicId] = useState19(generateId(resolvedId));
  if (typeof index !== "undefined") {
    console.error(
      "Warning: The `index` prop on Drawer.Item is deprecated and no longer required."
    );
  }
  useDragListener(
    "dragend",
    () => {
      setDynamicId(generateId(resolvedId));
    },
    [resolvedId]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    DrawerItemDraggable,
    {
      name,
      label,
      id: dynamicId,
      isDragDisabled,
      children
    }
  ) }, dynamicId);
};
var Drawer = ({
  children,
  droppableId,
  direction
}) => {
  if (droppableId) {
    console.error(
      "Warning: The `droppableId` prop on Drawer is deprecated and no longer required."
    );
  }
  if (direction) {
    console.error(
      "Warning: The `direction` prop on Drawer is deprecated and no longer required to achieve multi-directional dragging."
    );
  }
  const id = useId2();
  const { ref } = useDroppableSafe({
    id,
    type: "void",
    collisionPriority: 0
    // Never collide with this, but we use it so NestedDroppablePlugin respects the Drawer
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: getClassName18(),
      ref,
      "data-puck-dnd": id,
      "data-puck-drawer": true,
      children
    }
  );
};
Drawer.Item = DrawerItem;
init_react_import();
const {useCallback:useCallback18,useEffect:useEffect24,useMemo:useMemo19,useReducer,useState:useState27} = await importShared('react');

init_react_import();
init_react_import();
var styles_module_default13 = { "SidebarSection": "_SidebarSection_8boj8_1", "SidebarSection-title": "_SidebarSection-title_8boj8_12", "SidebarSection--noBorderTop": "_SidebarSection--noBorderTop_8boj8_20", "SidebarSection-content": "_SidebarSection-content_8boj8_24", "SidebarSection--noPadding": "_SidebarSection--noPadding_8boj8_28", "SidebarSection-breadcrumbLabel": "_SidebarSection-breadcrumbLabel_8boj8_41", "SidebarSection-breadcrumbs": "_SidebarSection-breadcrumbs_8boj8_70", "SidebarSection-breadcrumb": "_SidebarSection-breadcrumb_8boj8_41", "SidebarSection-heading": "_SidebarSection-heading_8boj8_82", "SidebarSection-loadingOverlay": "_SidebarSection-loadingOverlay_8boj8_86" };
init_react_import();
const {useContext:useContext8,useMemo:useMemo10} = await importShared('react');

var convertPathDataToBreadcrumbs = (selectedItem, pathData, data) => {
  const id = selectedItem ? selectedItem == null ? void 0 : selectedItem.props.id : "";
  const currentPathData = pathData && id && pathData[id] ? __spreadValues$7({}, pathData[id]) : { path: [] };
  if (!id) {
    return [];
  }
  return currentPathData == null ? void 0 : currentPathData.path.reduce((acc, zoneCompound) => {
    const [area] = getZoneId(zoneCompound);
    if (area === rootDroppableId) {
      return [
        {
          label: "Page",
          selector: null
        }
      ];
    }
    const parentZoneCompound = acc.length > 0 ? acc[acc.length - 1].zoneCompound : rootDroppableId;
    let parentZone = data.content;
    if (parentZoneCompound && parentZoneCompound !== rootDroppableId) {
      parentZone = data.zones[parentZoneCompound];
    }
    if (!parentZone) {
      return acc;
    }
    const itemIndex = parentZone.findIndex(
      (queryItem) => queryItem.props.id === area
    );
    const item = parentZone[itemIndex];
    if (!item) {
      return acc;
    }
    return [
      ...acc,
      {
        label: item.type.toString(),
        selector: {
          index: itemIndex,
          zone: parentZoneCompound
        },
        zoneCompound
      }
    ];
  }, []);
};
var useBreadcrumbs = (renderCount) => {
  const {
    state: { data },
    selectedItem
  } = useAppContext();
  const dzContext = useContext8(dropZoneContext);
  return useMemo10(() => {
    const breadcrumbs = convertPathDataToBreadcrumbs(
      selectedItem,
      dzContext == null ? void 0 : dzContext.pathData,
      data
    );
    {
      return breadcrumbs.slice(breadcrumbs.length - renderCount);
    }
  }, [selectedItem, dzContext == null ? void 0 : dzContext.pathData, renderCount]);
};
var getClassName19 = get_class_name_factory_default("SidebarSection", styles_module_default13);
var SidebarSection = ({
  children,
  title,
  background,
  showBreadcrumbs,
  noBorderTop,
  noPadding,
  isLoading
}) => {
  const { setUi } = useAppContext();
  const breadcrumbs = useBreadcrumbs(1);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: getClassName19({ noBorderTop, noPadding }),
      style: { background },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: getClassName19("title"), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: getClassName19("breadcrumbs"), children: [
          showBreadcrumbs ? breadcrumbs.map((breadcrumb, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: getClassName19("breadcrumb"), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                className: getClassName19("breadcrumbLabel"),
                onClick: () => setUi({ itemSelector: breadcrumb.selector }),
                children: breadcrumb.label
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 16 })
          ] }, i)) : null,
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: getClassName19("heading"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heading, { rank: "2", size: "xs", children: title }) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: getClassName19("content"), children }),
        isLoading && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: getClassName19("loadingOverlay"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, { size: 32 }) })
      ]
    }
  );
};
init_react_import();
var flushZones = (appState) => {
  const containsZones = typeof appState.data.zones !== "undefined";
  if (containsZones) {
    Object.keys(appState.data.zones || {}).forEach((zone) => {
      addToZoneCache(zone, appState.data.zones[zone]);
    });
    return __spreadProps$6(__spreadValues$7({}, appState), {
      data: __spreadProps$6(__spreadValues$7({}, appState.data), {
        zones: {}
      })
    });
  }
  return appState;
};
init_react_import();
init_react_import();
var styles_module_default14 = { "MenuBar": "_MenuBar_8pf8c_1", "MenuBar--menuOpen": "_MenuBar--menuOpen_8pf8c_14", "MenuBar-inner": "_MenuBar-inner_8pf8c_29", "MenuBar-history": "_MenuBar-history_8pf8c_45" };
var getClassName20 = get_class_name_factory_default("MenuBar", styles_module_default14);
function MenuBar({
  appState,
  dispatch,
  menuOpen = false,
  onPublish,
  renderHeaderActions,
  setMenuOpen
}) {
  const {
    history: { back, forward, historyStore }
  } = useAppContext();
  const { hasFuture = false, hasPast = false } = historyStore || {};
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: getClassName20({ menuOpen }),
      onClick: (event) => {
        var _a;
        const element = event.target;
        if (window.matchMedia("(min-width: 638px)").matches) {
          return;
        }
        if (element.tagName === "A" && ((_a = element.getAttribute("href")) == null ? void 0 : _a.startsWith("#"))) {
          setMenuOpen(false);
        }
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: getClassName20("inner"), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: getClassName20("history"), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { title: "undo", disabled: !hasPast, onClick: back, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Undo2, { size: 21 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { title: "redo", disabled: !hasFuture, onClick: forward, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Redo2, { size: 21 }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: renderHeaderActions && renderHeaderActions({
          state: appState,
          dispatch
        }) })
      ] })
    }
  );
}
init_react_import();
var styles_module_default15 = { "Puck": "_Puck_11o75_19", "Puck-portal": "_Puck-portal_11o75_24", "PuckLayout-inner": "_PuckLayout-inner_11o75_31", "PuckLayout--mounted": "_PuckLayout--mounted_11o75_43", "PuckLayout--leftSideBarVisible": "_PuckLayout--leftSideBarVisible_11o75_47", "PuckLayout--rightSideBarVisible": "_PuckLayout--rightSideBarVisible_11o75_53", "PuckLayout-mounted": "_PuckLayout-mounted_11o75_67", "PuckLayout": "_PuckLayout_11o75_31", "PuckLayout-header": "_PuckLayout-header_11o75_108", "PuckLayout-headerInner": "_PuckLayout-headerInner_11o75_117", "PuckLayout-headerToggle": "_PuckLayout-headerToggle_11o75_127", "PuckLayout-rightSideBarToggle": "_PuckLayout-rightSideBarToggle_11o75_134", "PuckLayout-leftSideBarToggle": "_PuckLayout-leftSideBarToggle_11o75_135", "PuckLayout-headerTitle": "_PuckLayout-headerTitle_11o75_139", "PuckLayout-headerPath": "_PuckLayout-headerPath_11o75_143", "PuckLayout-headerTools": "_PuckLayout-headerTools_11o75_150", "PuckLayout-menuButton": "_PuckLayout-menuButton_11o75_156", "PuckLayout--menuOpen": "_PuckLayout--menuOpen_11o75_161", "PuckLayout-leftSideBar": "_PuckLayout-leftSideBar_11o75_135", "PuckLayout-rightSideBar": "_PuckLayout-rightSideBar_11o75_134" };
init_react_import();
init_react_import();
var styles_module_default16 = { "PuckFields": "_PuckFields_10bh7_1", "PuckFields--isLoading": "_PuckFields--isLoading_10bh7_6", "PuckFields-loadingOverlay": "_PuckFields-loadingOverlay_10bh7_10", "PuckFields-loadingOverlayInner": "_PuckFields-loadingOverlayInner_10bh7_25", "PuckFields-field": "_PuckFields-field_10bh7_32", "PuckFields--wrapFields": "_PuckFields--wrapFields_10bh7_36" };
const {useMemo:useMemo12} = await importShared('react');

init_react_import();
const {useCallback:useCallback13,useEffect:useEffect17,useMemo:useMemo11,useRef:useRef5,useState:useState20} = await importShared('react');

init_react_import();
const {useCallback:useCallback12,useContext:useContext9} = await importShared('react');

var getParent = (itemSelector, pathData, data) => {
  var _a;
  if (!itemSelector) return null;
  const item = getItem(itemSelector, data);
  const breadcrumbs = convertPathDataToBreadcrumbs(item, pathData, data);
  const lastItem = breadcrumbs[breadcrumbs.length - 1];
  const parent = (lastItem == null ? void 0 : lastItem.selector) ? (_a = getItem(lastItem.selector, data)) != null ? _a : null : null;
  return parent || null;
};
var useGetParent = () => {
  const { state } = useAppContext();
  const { pathData } = useContext9(dropZoneContext) || {};
  return useCallback12(
    () => getParent(state.ui.itemSelector, pathData, state.data),
    [state.ui.itemSelector, pathData, state.data]
  );
};
var useParent = () => {
  return useGetParent()();
};
init_react_import();
const {useRef:useRef4,useEffect:useEffect16} = await importShared('react');

function useOnValueChange(value, onChange, compare = Object.is, deps = []) {
  const tracked = useRef4(value);
  useEffect16(() => {
    const oldValue = tracked.current;
    if (!compare(value, oldValue)) {
      tracked.current = value;
      onChange(value, oldValue);
    }
  }, [onChange, compare, value, ...deps]);
}
init_react_import();
var selectorIs = (a, b) => (a == null ? void 0 : a.zone) === (b == null ? void 0 : b.zone) && (a == null ? void 0 : a.index) === (b == null ? void 0 : b.index);
var defaultPageFields = {
  title: { type: "text" }
};
var useResolvedFields = ({
  _skipValueCheck,
  _skipIdCheck
} = {}) => {
  var _a, _b;
  const { selectedItem, state, config } = useAppContext();
  const parent = useParent();
  const { data } = state;
  const rootFields = ((_a = config.root) == null ? void 0 : _a.fields) || defaultPageFields;
  const componentConfig = selectedItem ? config.components[selectedItem.type] : null;
  const defaultFields = useMemo11(
    () => (selectedItem ? componentConfig == null ? void 0 : componentConfig.fields : rootFields) || {},
    [selectedItem, rootFields, componentConfig == null ? void 0 : componentConfig.fields]
  );
  const rootProps = data.root.props || data.root;
  const [lastSelectedData, setLastSelectedData] = useState20({});
  const [resolvedFields, setResolvedFields] = useState20({
    fields: defaultFields,
    id: selectedItem == null ? void 0 : selectedItem.props.id
  });
  const [fieldsLoading, setFieldsLoading] = useState20(false);
  const lastFields = useRef5(defaultFields);
  const defaultResolveFields = (_componentData, _params) => defaultFields;
  const componentData = useMemo11(
    () => selectedItem ? selectedItem : { props: rootProps, readOnly: data.root.readOnly || {} },
    [selectedItem, rootProps, data.root.readOnly]
  );
  const hasComponentResolver = selectedItem && (componentConfig == null ? void 0 : componentConfig.resolveFields);
  const hasRootResolver = !selectedItem && ((_b = config.root) == null ? void 0 : _b.resolveFields);
  const hasResolver = hasComponentResolver || hasRootResolver;
  const resolveFields = useCallback13(
    (..._0) => __async(void 0, [..._0], function* (fields = {}) {
      var _a2;
      const lastData = ((_a2 = lastSelectedData.props) == null ? void 0 : _a2.id) === componentData.props.id ? lastSelectedData : null;
      const changed = getChanged(componentData, lastData);
      setLastSelectedData(componentData);
      if (hasComponentResolver) {
        return yield componentConfig.resolveFields(
          componentData,
          {
            changed,
            fields,
            lastFields: lastFields.current,
            lastData,
            appState: state,
            parent
          }
        );
      }
      if (hasRootResolver) {
        return yield config.root.resolveFields(componentData, {
          changed,
          fields,
          lastFields: lastFields.current,
          lastData,
          appState: state,
          parent
        });
      }
      return defaultResolveFields(componentData, {
        lastFields: lastFields.current});
    }),
    [data, config, componentData, selectedItem, state, parent]
  );
  const triggerResolver = useCallback13(() => {
    var _a2, _b2;
    if (!((_a2 = state.ui.itemSelector) == null ? void 0 : _a2.zone) || ((_b2 = state.ui.itemSelector) == null ? void 0 : _b2.zone) === "default-zone" || parent) {
      if (hasResolver) {
        setFieldsLoading(true);
        resolveFields(defaultFields).then((fields) => {
          setResolvedFields({
            fields: fields || {},
            id: selectedItem == null ? void 0 : selectedItem.props.id
          });
          lastFields.current = fields;
          setFieldsLoading(false);
        });
        return;
      }
    }
    setResolvedFields({ fields: defaultFields, id: selectedItem == null ? void 0 : selectedItem.props.id });
  }, [
    defaultFields,
    state.ui.itemSelector,
    selectedItem,
    hasResolver,
    parent,
    resolveFields
  ]);
  useOnValueChange(
    state.ui.itemSelector,
    () => {
      lastFields.current = defaultFields;
    },
    selectorIs
  );
  useOnValueChange(
    { data, parent, itemSelector: state.ui.itemSelector },
    () => {
      if (_skipValueCheck) return;
      triggerResolver();
    },
    (a, b) => JSON.stringify(a) === JSON.stringify(b)
  );
  useEffect17(() => {
    triggerResolver();
  }, []);
  if (resolvedFields.id !== (selectedItem == null ? void 0 : selectedItem.props.id) && !_skipIdCheck) {
    return [defaultFields, fieldsLoading];
  }
  return [resolvedFields.fields, fieldsLoading];
};
var getClassName21 = get_class_name_factory_default("PuckFields", styles_module_default16);
var DefaultFields = ({
  children
}) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children });
};
var Fields = ({ wrapFields = true }) => {
  var _a, _b;
  const {
    selectedItem,
    state,
    dispatch,
    config,
    resolveData,
    componentState,
    overrides
  } = useAppContext();
  const { data, ui } = state;
  const { itemSelector } = ui;
  const [fields, fieldsResolving] = useResolvedFields();
  const { getPermissions } = useAppContext();
  const componentResolving = selectedItem ? ((_a = componentState[selectedItem == null ? void 0 : selectedItem.props.id]) == null ? void 0 : _a.loadingCount) > 0 : ((_b = componentState["puck-root"]) == null ? void 0 : _b.loadingCount) > 0;
  const isLoading = fieldsResolving || componentResolving;
  const rootProps = data.root.props || data.root;
  const Wrapper = useMemo12(() => overrides.fields || DefaultFields, [overrides]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "form",
    {
      className: getClassName21({ wrapFields }),
      onSubmit: (e) => {
        e.preventDefault();
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Wrapper, { isLoading, itemSelector, children: Object.keys(fields).map((fieldName) => {
          const field = fields[fieldName];
          if (!(field == null ? void 0 : field.type)) return null;
          const onChange = (value, updatedUi) => {
            var _a2, _b2;
            let currentProps;
            if (selectedItem) {
              currentProps = selectedItem.props;
            } else {
              currentProps = rootProps;
            }
            const newProps = __spreadProps$6(__spreadValues$7({}, currentProps), {
              [fieldName]: value
            });
            if (selectedItem && itemSelector) {
              const replaceActionData = {
                destinationIndex: itemSelector.index,
                destinationZone: itemSelector.zone || rootDroppableId,
                data: __spreadProps$6(__spreadValues$7({}, selectedItem), { props: newProps })
              };
              const replacedData = replaceAction(data, replaceActionData);
              const setActionData = {
                type: "set",
                state: {
                  data: __spreadValues$7(__spreadValues$7({}, data), replacedData),
                  ui: __spreadValues$7(__spreadValues$7({}, ui), updatedUi)
                }
              };
              if ((_a2 = config.components[selectedItem.type]) == null ? void 0 : _a2.resolveData) {
                resolveData(setAction(state, setActionData));
              } else {
                dispatch(__spreadProps$6(__spreadValues$7({}, setActionData), {
                  recordHistory: true
                }));
              }
            } else {
              if (data.root.props) {
                if ((_b2 = config.root) == null ? void 0 : _b2.resolveData) {
                  resolveData({
                    ui: __spreadValues$7(__spreadValues$7({}, ui), updatedUi),
                    data: __spreadProps$6(__spreadValues$7({}, data), {
                      root: { props: newProps }
                    })
                  });
                } else {
                  dispatch({
                    type: "set",
                    state: {
                      ui: __spreadValues$7(__spreadValues$7({}, ui), updatedUi),
                      data: __spreadProps$6(__spreadValues$7({}, data), {
                        root: { props: newProps }
                      })
                    },
                    recordHistory: true
                  });
                }
              } else {
                dispatch({
                  type: "setData",
                  data: { root: newProps }
                });
              }
            }
          };
          if (selectedItem && itemSelector) {
            const { readOnly = {} } = selectedItem;
            const { edit } = getPermissions({
              item: selectedItem
            });
            const id = `${selectedItem.props.id}_${field.type}_${fieldName}`;
            return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: getClassName21("field"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              AutoFieldPrivate,
              {
                field,
                name: fieldName,
                id,
                readOnly: !edit || readOnly[fieldName],
                value: selectedItem.props[fieldName],
                onChange
              }
            ) }, id);
          } else {
            const readOnly = data.root.readOnly || {};
            const { edit } = getPermissions({
              root: true
            });
            const id = `root_${field.type}_${fieldName}`;
            return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: getClassName21("field"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              AutoFieldPrivate,
              {
                field,
                name: fieldName,
                id,
                readOnly: !edit || readOnly[fieldName],
                value: rootProps[fieldName],
                onChange
              }
            ) }, id);
          }
        }) }),
        isLoading && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: getClassName21("loadingOverlay"), children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: getClassName21("loadingOverlayInner"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, { size: 16 }) }) })
      ]
    }
  );
};
init_react_import();
init_react_import();
const {useEffect:useEffect18,useState:useState21} = await importShared('react');

init_react_import();
init_react_import();
var styles_module_default17 = { "ComponentList": "_ComponentList_1rrlt_1", "ComponentList--isExpanded": "_ComponentList--isExpanded_1rrlt_5", "ComponentList-content": "_ComponentList-content_1rrlt_9", "ComponentList-title": "_ComponentList-title_1rrlt_17", "ComponentList-titleIcon": "_ComponentList-titleIcon_1rrlt_53" };
var getClassName22 = get_class_name_factory_default("ComponentList", styles_module_default17);
var ComponentListItem = ({
  name,
  label
}) => {
  const { overrides, getPermissions } = useAppContext();
  const canInsert = getPermissions({
    type: name
  }).insert;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Drawer.Item, { label, name, isDragDisabled: !canInsert, children: overrides.componentItem });
};
var ComponentList = ({
  children,
  title,
  id
}) => {
  const { config, state, setUi } = useAppContext();
  const { expanded = true } = state.ui.componentList[id] || {};
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: getClassName22({ isExpanded: expanded }), children: [
    title && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        className: getClassName22("title"),
        onClick: () => setUi({
          componentList: __spreadProps$6(__spreadValues$7({}, state.ui.componentList), {
            [id]: __spreadProps$6(__spreadValues$7({}, state.ui.componentList[id]), {
              expanded: !expanded
            })
          })
        }),
        title: expanded ? `Collapse${title ? ` ${title}` : ""}` : `Expand${title ? ` ${title}` : ""}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: getClassName22("titleIcon"), children: expanded ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { size: 12 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { size: 12 }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: getClassName22("content"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Drawer, { children: children || Object.keys(config.components).map((componentKey) => {
      var _a;
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        ComponentListItem,
        {
          label: (_a = config.components[componentKey]["label"]) != null ? _a : componentKey,
          name: componentKey
        },
        componentKey
      );
    }) }) })
  ] });
};
ComponentList.Item = ComponentListItem;
var useComponentList = (config, ui) => {
  const [componentList, setComponentList] = useState21();
  useEffect18(() => {
    var _a, _b, _c;
    if (Object.keys(ui.componentList).length > 0) {
      const matchedComponents = [];
      let _componentList;
      _componentList = Object.entries(ui.componentList).map(
        ([categoryKey, category]) => {
          if (category.visible === false || !category.components) {
            return null;
          }
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            ComponentList,
            {
              id: categoryKey,
              title: category.title || categoryKey,
              children: category.components.map((componentName, i) => {
                var _a2;
                matchedComponents.push(componentName);
                const componentConf = config.components[componentName] || {};
                return /* @__PURE__ */ jsxRuntimeExports.jsx(
                  ComponentList.Item,
                  {
                    label: (_a2 = componentConf["label"]) != null ? _a2 : componentName,
                    name: componentName,
                    index: i
                  },
                  componentName
                );
              })
            },
            categoryKey
          );
        }
      );
      const remainingComponents = Object.keys(config.components).filter(
        (component) => matchedComponents.indexOf(component) === -1
      );
      if (remainingComponents.length > 0 && !((_a = ui.componentList.other) == null ? void 0 : _a.components) && ((_b = ui.componentList.other) == null ? void 0 : _b.visible) !== false) {
        _componentList.push(
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ComponentList,
            {
              id: "other",
              title: ((_c = ui.componentList.other) == null ? void 0 : _c.title) || "Other",
              children: remainingComponents.map((componentName, i) => {
                var _a2;
                const componentConf = config.components[componentName] || {};
                return /* @__PURE__ */ jsxRuntimeExports.jsx(
                  ComponentList.Item,
                  {
                    name: componentName,
                    label: (_a2 = componentConf["label"]) != null ? _a2 : componentName,
                    index: i
                  },
                  componentName
                );
              })
            },
            "other"
          )
        );
      }
      setComponentList(_componentList);
    }
  }, [config.categories, config.components, ui.componentList]);
  return componentList;
};
const {useMemo:useMemo13} = await importShared('react');
var Components = () => {
  const { config, state, overrides } = useAppContext();
  const componentList = useComponentList(config, state.ui);
  const Wrapper = useMemo13(() => overrides.components || "div", [overrides]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Wrapper, { children: componentList ? componentList : /* @__PURE__ */ jsxRuntimeExports.jsx(ComponentList, { id: "all" }) });
};
init_react_import();
const {useCallback:useCallback14,useEffect:useEffect20,useRef:useRef7,useMemo:useMemo14} = await importShared('react');

init_react_import();
const {createContext:createContext5,useContext:useContext10,useEffect:useEffect19,useState:useState22} = await importShared('react');
const {createPortal:createPortal3} = await importShared('react-dom');
var styleSelector = 'style, link[rel="stylesheet"]';
var collectStyles = (doc) => {
  const collected = [];
  doc.querySelectorAll(styleSelector).forEach((style) => {
    collected.push(style);
  });
  return collected;
};
var getStyleSheet = (el) => {
  return Array.from(document.styleSheets).find((ss) => {
    const ownerNode = ss.ownerNode;
    return ownerNode.href === el.href;
  });
};
var getStyles = (styleSheet) => {
  if (styleSheet) {
    try {
      return [...styleSheet.cssRules].map((rule) => rule.cssText).join("");
    } catch (e) {
      console.warn(
        "Access to stylesheet %s is denied. Ignoring…",
        styleSheet.href
      );
    }
  }
  return "";
};
var syncAttributes = (sourceElement, targetElement) => {
  const attributes = sourceElement.attributes;
  if ((attributes == null ? void 0 : attributes.length) > 0) {
    Array.from(attributes).forEach((attribute) => {
      targetElement.setAttribute(attribute.name, attribute.value);
    });
  }
};
var defer = (fn) => setTimeout(fn, 0);
var CopyHostStyles = ({
  children,
  debug = false,
  onStylesLoaded = () => null
}) => {
  const { document: doc, window: win } = useFrame();
  useEffect19(() => {
    if (!win || !doc) {
      return () => {
      };
    }
    let elements = [];
    const hashes = {};
    const lookupEl = (el) => elements.findIndex((elementMap) => elementMap.original === el);
    const mirrorEl = (el, inlineStyles = false) => __async(void 0, null, function* () {
      let mirror;
      if (el.nodeName === "LINK" && inlineStyles) {
        mirror = document.createElement("style");
        mirror.type = "text/css";
        let styleSheet = getStyleSheet(el);
        if (!styleSheet) {
          yield new Promise((resolve) => {
            const fn = () => {
              resolve();
              el.removeEventListener("load", fn);
            };
            el.addEventListener("load", fn);
          });
          styleSheet = getStyleSheet(el);
        }
        const styles2 = getStyles(styleSheet);
        if (!styles2) {
          if (debug) {
            console.warn(
              `Tried to load styles for link element, but couldn't find them. Skipping...`
            );
          }
          return;
        }
        mirror.innerHTML = styles2;
        mirror.setAttribute("data-href", el.getAttribute("href"));
      } else {
        mirror = el.cloneNode(true);
      }
      return mirror;
    });
    const addEl = (el) => __async(void 0, null, function* () {
      const index = lookupEl(el);
      if (index > -1) {
        if (debug)
          console.log(
            `Tried to add an element that was already mirrored. Updating instead...`
          );
        elements[index].mirror.innerText = el.innerText;
        return;
      }
      const mirror = yield mirrorEl(el);
      if (!mirror) {
        return;
      }
      const elHash = hash(mirror.outerHTML);
      if (hashes[elHash]) {
        if (debug)
          console.log(
            `iframe already contains element that is being mirrored. Skipping...`
          );
        return;
      }
      hashes[elHash] = true;
      doc.head.append(mirror);
      elements.push({ original: el, mirror });
      if (debug) console.log(`Added style node ${el.outerHTML}`);
    });
    const removeEl = (el) => {
      var _a, _b;
      const index = lookupEl(el);
      if (index === -1) {
        if (debug)
          console.log(
            `Tried to remove an element that did not exist. Skipping...`
          );
        return;
      }
      const elHash = hash(el.outerHTML);
      (_b = (_a = elements[index]) == null ? void 0 : _a.mirror) == null ? void 0 : _b.remove();
      delete hashes[elHash];
      if (debug) console.log(`Removed style node ${el.outerHTML}`);
    };
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "childList") {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.TEXT_NODE || node.nodeType === Node.ELEMENT_NODE) {
              const el = node.nodeType === Node.TEXT_NODE ? node.parentElement : node;
              if (el && el.matches(styleSelector)) {
                defer(() => addEl(el));
              }
            }
          });
          mutation.removedNodes.forEach((node) => {
            if (node.nodeType === Node.TEXT_NODE || node.nodeType === Node.ELEMENT_NODE) {
              const el = node.nodeType === Node.TEXT_NODE ? node.parentElement : node;
              if (el && el.matches(styleSelector)) {
                defer(() => removeEl(el));
              }
            }
          });
        }
      });
    });
    const parentDocument = win.parent.document;
    const collectedStyles = collectStyles(parentDocument);
    const hrefs = [];
    let stylesLoaded = 0;
    const parentHtml = parentDocument.getElementsByTagName("html")[0];
    syncAttributes(parentHtml, doc.documentElement);
    const parentBody = parentDocument.getElementsByTagName("body")[0];
    syncAttributes(parentBody, doc.body);
    Promise.all(
      collectedStyles.map((styleNode, i) => __async(void 0, null, function* () {
        if (styleNode.nodeName === "LINK") {
          const linkHref = styleNode.href;
          if (hrefs.indexOf(linkHref) > -1) {
            return;
          }
          hrefs.push(linkHref);
        }
        const mirror = yield mirrorEl(styleNode);
        if (!mirror) return;
        elements.push({ original: styleNode, mirror });
        return mirror;
      }))
    ).then((mirrorStyles) => {
      const filtered = mirrorStyles.filter(
        (el) => typeof el !== "undefined"
      );
      filtered.forEach((mirror) => {
        mirror.onload = () => {
          stylesLoaded = stylesLoaded + 1;
          if (stylesLoaded >= elements.length) {
            onStylesLoaded();
          }
        };
        mirror.onerror = () => {
          console.warn(`AutoFrame couldn't load a stylesheet`);
          stylesLoaded = stylesLoaded + 1;
          if (stylesLoaded >= elements.length) {
            onStylesLoaded();
          }
        };
      });
      doc.head.innerHTML = "";
      doc.head.append(...filtered);
      observer.observe(parentDocument.head, { childList: true, subtree: true });
      filtered.forEach((el) => {
        const elHash = hash(el.outerHTML);
        hashes[elHash] = true;
      });
    });
    return () => {
      observer.disconnect();
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children });
};
var autoFrameContext = createContext5({});
var useFrame = () => useContext10(autoFrameContext);
function AutoFrame(_a) {
  var _b = _a, {
    children,
    className,
    debug,
    id,
    onStylesLoaded,
    frameRef
  } = _b, props = __objRest$4(_b, [
    "children",
    "className",
    "debug",
    "id",
    "onStylesLoaded",
    "frameRef"
  ]);
  const [loaded, setLoaded] = useState22(false);
  const [ctx, setCtx] = useState22({});
  const [mountTarget, setMountTarget] = useState22();
  useEffect19(() => {
    var _a2;
    if (frameRef.current) {
      setCtx({
        document: frameRef.current.contentDocument || void 0,
        window: frameRef.current.contentWindow || void 0
      });
      setMountTarget(
        (_a2 = frameRef.current.contentDocument) == null ? void 0 : _a2.getElementById("frame-root")
      );
    }
  }, [frameRef, loaded]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "iframe",
    __spreadProps$6(__spreadValues$7({}, props), {
      className,
      id,
      srcDoc: '<!DOCTYPE html><html><head></head><body><div id="frame-root" data-puck-entry></div></body></html>',
      ref: frameRef,
      onLoad: () => {
        setLoaded(true);
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(autoFrameContext.Provider, { value: ctx, children: loaded && mountTarget && /* @__PURE__ */ jsxRuntimeExports.jsx(CopyHostStyles, { debug, onStylesLoaded, children: createPortal3(children, mountTarget) }) })
    })
  );
}
AutoFrame.displayName = "AutoFrame";
var AutoFrame_default = AutoFrame;
init_react_import();
var styles_module_default18 = { "PuckPreview": "_PuckPreview_z2rgu_1", "PuckPreview-frame": "_PuckPreview-frame_z2rgu_6" };
init_react_import();
function Render({
  config,
  data
}) {
  var _a;
  const defaultedData = __spreadProps$6(__spreadValues$7({}, data), {
    root: data.root || {},
    content: data.content || []
  });
  const rootProps = defaultedData.root.props || defaultedData.root;
  const title = (rootProps == null ? void 0 : rootProps.title) || "";
  if ((_a = config.root) == null ? void 0 : _a.render) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      DropZoneProvider,
      {
        value: {
          data: defaultedData,
          config,
          mode: "render",
          depth: 0,
          path: []
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          config.root.render,
          __spreadProps$6(__spreadValues$7({}, rootProps), {
            puck: {
              renderDropZone: DropZonePure,
              isEditing: false,
              dragRef: null
            },
            title,
            editMode: false,
            id: "puck-root",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(DropZonePure, { zone: rootDroppableId })
          })
        )
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    DropZoneProvider,
    {
      value: {
        data: defaultedData,
        config,
        mode: "render",
        depth: 0,
        path: []
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(DropZonePure, { zone: rootDroppableId })
    }
  );
}
var getClassName23 = get_class_name_factory_default("PuckPreview", styles_module_default18);
var useBubbleIframeEvents = (ref) => {
  const { status } = useAppContext();
  useEffect20(() => {
    var _a;
    if (ref.current && status === "READY") {
      const iframe = ref.current;
      const handlePointerMove = (event) => {
        const evt = new BubbledPointerEvent("pointermove", __spreadProps$6(__spreadValues$7({}, event), {
          bubbles: true,
          cancelable: false,
          clientX: event.clientX,
          clientY: event.clientY,
          originalTarget: event.target
        }));
        iframe.dispatchEvent(evt);
      };
      (_a = iframe.contentDocument) == null ? void 0 : _a.addEventListener(
        "pointermove",
        handlePointerMove,
        {
          capture: true
        }
      );
      return () => {
        var _a2;
        (_a2 = iframe.contentDocument) == null ? void 0 : _a2.removeEventListener(
          "pointermove",
          handlePointerMove
        );
      };
    }
  }, [status]);
};
var Preview2 = ({ id = "puck-preview" }) => {
  const { config, dispatch, state, setStatus, iframe, overrides } = useAppContext();
  const Page = useCallback14(
    (pageProps) => {
      var _a, _b;
      return ((_a = config.root) == null ? void 0 : _a.render) ? (_b = config.root) == null ? void 0 : _b.render(__spreadValues$7({
        id: "puck-root"
      }, pageProps)) : /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: pageProps.children });
    },
    [config.root]
  );
  const Frame = useMemo14(() => overrides.iframe, [overrides]);
  const rootProps = state.data.root.props || state.data.root;
  const ref = useRef7(null);
  useBubbleIframeEvents(ref);
  const inner = state.ui.previewMode === "edit" ? /* @__PURE__ */ jsxRuntimeExports.jsx(
    Page,
    __spreadProps$6(__spreadValues$7({}, rootProps), {
      puck: {
        renderDropZone: DropZonePure,
        isEditing: true,
        dragRef: null
      },
      editMode: true,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(DropZonePure, { zone: rootDroppableId })
    })
  ) : /* @__PURE__ */ jsxRuntimeExports.jsx(Render, { data: state.data, config });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: getClassName23(),
      id,
      "data-puck-preview": true,
      onClick: () => {
        dispatch({ type: "setUi", ui: __spreadProps$6(__spreadValues$7({}, state.ui), { itemSelector: null }) });
      },
      children: iframe.enabled ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        AutoFrame_default,
        {
          id: "preview-frame",
          className: getClassName23("frame"),
          "data-rfd-iframe": true,
          onStylesLoaded: () => {
            setStatus("READY");
          },
          frameRef: ref,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(autoFrameContext.Consumer, { children: ({ document: document2 }) => {
            if (Frame) {
              return /* @__PURE__ */ jsxRuntimeExports.jsx(Frame, { document: document2, children: inner });
            }
            return inner;
          } })
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          id: "preview-frame",
          className: getClassName23("frame"),
          ref,
          "data-puck-entry": true,
          children: inner
        }
      )
    }
  );
};
init_react_import();
init_react_import();
init_react_import();
var findZonesForArea = (data, area) => {
  const { zones = {} } = data;
  const result = Object.keys(zones).filter(
    (zoneId) => getZoneId(zoneId)[0] === area
  );
  return result.reduce((acc, key) => {
    return __spreadProps$6(__spreadValues$7({}, acc), { [key]: zones[key] });
  }, {});
};
var areaContainsZones = (data, area) => {
  const zones = Object.keys(findZonesForArea(data, area));
  return zones.length > 0;
};
init_react_import();
init_react_import();
var styles_module_default19 = { "LayerTree": "_LayerTree_7rx04_1", "LayerTree-zoneTitle": "_LayerTree-zoneTitle_7rx04_11", "LayerTree-helper": "_LayerTree-helper_7rx04_17", "Layer": "_Layer_7rx04_1", "Layer-inner": "_Layer-inner_7rx04_29", "Layer--containsZone": "_Layer--containsZone_7rx04_35", "Layer-clickable": "_Layer-clickable_7rx04_39", "Layer--isSelected": "_Layer--isSelected_7rx04_61", "Layer-chevron": "_Layer-chevron_7rx04_77", "Layer--childIsSelected": "_Layer--childIsSelected_7rx04_78", "Layer-zones": "_Layer-zones_7rx04_82", "Layer-title": "_Layer-title_7rx04_96", "Layer-name": "_Layer-name_7rx04_105", "Layer-icon": "_Layer-icon_7rx04_111", "Layer-zoneIcon": "_Layer-zoneIcon_7rx04_116" };
init_react_import();
var scrollIntoView = (el) => {
  const oldStyle = __spreadValues$7({}, el.style);
  el.style.scrollMargin = "256px";
  if (el) {
    el == null ? void 0 : el.scrollIntoView({ behavior: "smooth" });
    el.style.scrollMargin = oldStyle.scrollMargin || "";
  }
};
const {useContext:useContext11} = await importShared('react');

init_react_import();
var isChildOfZone = (item, maybeChild, ctx) => {
  var _a;
  const { data, pathData = {} } = ctx || {};
  return maybeChild && data ? !!((_a = pathData[maybeChild.props.id]) == null ? void 0 : _a.path.find((zoneCompound) => {
    const [area] = getZoneId(zoneCompound);
    return area === item.props.id;
  })) : false;
};
init_react_import();
var onScrollEnd = (frame, cb) => {
  let scrollTimeout;
  const callback = function() {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(function() {
      cb();
      frame == null ? void 0 : frame.removeEventListener("scroll", callback);
    }, 50);
  };
  frame == null ? void 0 : frame.addEventListener("scroll", callback);
  setTimeout(() => {
    if (!scrollTimeout) {
      cb();
    }
  }, 50);
};
var getClassName24 = get_class_name_factory_default("LayerTree", styles_module_default19);
var getClassNameLayer = get_class_name_factory_default("Layer", styles_module_default19);
var LayerTree = ({
  data,
  config,
  zoneContent,
  itemSelector,
  setItemSelector,
  zone,
  label
}) => {
  const zones = data.zones || {};
  const ctx = useContext11(dropZoneContext);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    label && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: getClassName24("zoneTitle"), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: getClassName24("zoneIcon"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { size: "16" }) }),
      " ",
      label
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: getClassName24(), children: [
      zoneContent.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: getClassName24("helper"), children: "No items" }),
      zoneContent.map((item, i) => {
        var _a;
        const isSelected = (itemSelector == null ? void 0 : itemSelector.index) === i && (itemSelector.zone === zone || itemSelector.zone === rootDroppableId && !zone);
        const zonesForItem = findZonesForArea(data, item.props.id);
        const containsZone = Object.keys(zonesForItem).length > 0;
        const { setHoveringComponent = () => {
        }, hoveringComponent } = ctx || {};
        const selectedItem = itemSelector && data ? getItem(itemSelector, data) : null;
        const isHovering = hoveringComponent === item.props.id;
        const childIsSelected = isChildOfZone(item, selectedItem, ctx);
        const componentConfig = config.components[item.type];
        const label2 = (_a = componentConfig == null ? void 0 : componentConfig["label"]) != null ? _a : item.type.toString();
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "li",
          {
            className: getClassNameLayer({
              isSelected,
              isHovering,
              containsZone,
              childIsSelected
            }),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: getClassNameLayer("inner"), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  className: getClassNameLayer("clickable"),
                  onClick: () => {
                    if (isSelected) {
                      setItemSelector(null);
                      return;
                    }
                    const id = zoneContent[i].props.id;
                    const frame = getFrame();
                    const el = frame == null ? void 0 : frame.querySelector(
                      `[data-puck-component="${id}"]`
                    );
                    if (!el) {
                      console.error(
                        "Scroll failed. No element was found for",
                        id
                      );
                      return;
                    }
                    scrollIntoView(el);
                    onScrollEnd(frame, () => {
                      setItemSelector({
                        index: i,
                        zone
                      });
                    });
                  },
                  onMouseOver: (e) => {
                    e.stopPropagation();
                    setHoveringComponent(item.props.id);
                  },
                  onMouseOut: (e) => {
                    e.stopPropagation();
                    setHoveringComponent(null);
                  },
                  children: [
                    containsZone && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: getClassNameLayer("chevron"),
                        title: isSelected ? "Collapse" : "Expand",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { size: "12" })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: getClassNameLayer("title"), children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: getClassNameLayer("icon"), children: item.type === "Text" || item.type === "Heading" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Type, { size: "16" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(LayoutGrid, { size: "16" }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: getClassNameLayer("name"), children: label2 })
                    ] })
                  ]
                }
              ) }),
              containsZone && Object.keys(zonesForItem).map((zoneKey, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: getClassNameLayer("zones"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                LayerTree,
                {
                  config,
                  data,
                  zoneContent: zones[zoneKey],
                  setItemSelector,
                  itemSelector,
                  zone: zoneKey,
                  label: getZoneId(zoneKey)[1]
                }
              ) }, idx))
            ]
          },
          `${item.props.id}_${i}`
        );
      })
    ] })
  ] });
};
const {useCallback:useCallback15,useMemo:useMemo15} = await importShared('react');
var Outline = () => {
  const { dispatch, state, overrides, config } = useAppContext();
  const { data, ui } = state;
  const { itemSelector } = ui;
  const setItemSelector = useCallback15(
    (newItemSelector) => {
      dispatch({
        type: "setUi",
        ui: { itemSelector: newItemSelector }
      });
    },
    []
  );
  const Wrapper = useMemo15(() => overrides.outline || "div", [overrides]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Wrapper, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(dropZoneContext.Consumer, { children: (ctx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    (ctx == null ? void 0 : ctx.activeZones) && (ctx == null ? void 0 : ctx.activeZones[rootDroppableId]) && /* @__PURE__ */ jsxRuntimeExports.jsx(
      LayerTree,
      {
        config,
        data,
        label: areaContainsZones(data, "root") ? rootDroppableId : "",
        zoneContent: data.content,
        setItemSelector,
        itemSelector
      }
    ),
    Object.entries(findZonesForArea(data, "root")).map(
      ([zoneKey, zone]) => {
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          LayerTree,
          {
            config,
            data,
            label: zoneKey,
            zone: zoneKey,
            zoneContent: zone,
            setItemSelector,
            itemSelector
          },
          zoneKey
        );
      }
    )
  ] }) }) });
};
init_react_import();
function usePuckHistory({
  dispatch,
  initialAppState,
  historyStore,
  iframeEnabled
}) {
  const back = () => {
    var _a;
    if (historyStore.hasPast) {
      dispatch({
        type: "set",
        state: ((_a = historyStore.prevHistory) == null ? void 0 : _a.state) || initialAppState
      });
      historyStore.back();
    }
  };
  const forward = () => {
    if (historyStore.nextHistory) {
      dispatch({ type: "set", state: historyStore.nextHistory.state });
      historyStore.forward();
    }
  };
  const backIframe = () => {
    if (iframeEnabled) {
      back();
    }
  };
  const forwardIframe = () => {
    if (iframeEnabled) {
      forward();
    }
  };
  const setHistories = (histories) => {
    var _a;
    dispatch({
      type: "set",
      state: ((_a = histories[histories.length - 1]) == null ? void 0 : _a.state) || initialAppState
    });
    historyStore.setHistories(histories);
  };
  const setHistoryIndex = (index) => {
    var _a;
    if (historyStore.histories.length > index) {
      dispatch({
        type: "set",
        state: ((_a = historyStore.histories[index]) == null ? void 0 : _a.state) || initialAppState
      });
      historyStore.setHistoryIndex(index);
    }
  };
  const frame = getFrame();
  const resolvedFrame = typeof window !== "undefined" && frame !== document ? frame : void 0;
  useHotkeys("meta+z", back, { preventDefault: true });
  useHotkeys("meta+shift+z", forward, { preventDefault: true });
  useHotkeys("meta+y", forward, { preventDefault: true });
  useHotkeys("meta+z", backIframe, {
    preventDefault: true,
    document: resolvedFrame
  });
  useHotkeys("meta+shift+z", forwardIframe, {
    preventDefault: true,
    document: resolvedFrame
  });
  useHotkeys("meta+y", forwardIframe, {
    preventDefault: true,
    document: resolvedFrame
  });
  return {
    back,
    forward,
    historyStore,
    setHistories,
    setHistoryIndex
  };
}
init_react_import();
const {useState:useState23} = await importShared('react');
var EMPTY_HISTORY_INDEX = 0;
function useHistoryStore(initialHistory) {
  var _a, _b;
  const [histories, setHistories] = useState23(
    (_a = initialHistory == null ? void 0 : initialHistory.histories) != null ? _a : []
  );
  const updateHistories = (histories2) => {
    setHistories(histories2);
    setIndex(histories2.length - 1);
  };
  const [index, setIndex] = useState23(
    (_b = initialHistory == null ? void 0 : initialHistory.index) != null ? _b : EMPTY_HISTORY_INDEX
  );
  const hasPast = index > EMPTY_HISTORY_INDEX;
  const hasFuture = index < histories.length - 1;
  const currentHistory = histories[index];
  const nextHistory = hasFuture ? histories[index + 1] : null;
  const prevHistory = hasPast ? histories[index - 1] : null;
  const record = c((state) => {
    const history = {
      state,
      id: generateId("history")
    };
    updateHistories([...histories.slice(0, index + 1), history]);
  }, 250);
  const back = () => {
    setIndex(index - 1);
  };
  const forward = () => {
    setIndex(index + 1);
  };
  return {
    index,
    currentHistory,
    hasPast,
    hasFuture,
    record,
    back,
    forward,
    nextHistory,
    prevHistory,
    histories,
    setHistories: updateHistories,
    setHistoryIndex: setIndex
  };
}
init_react_import();
init_react_import();
init_react_import();
var prefix = "Invariant failed";
function invariant(condition, message) {
  {
    throw new Error(prefix);
  }
}
var getRect = function getRect2(_ref) {
  var top = _ref.top, right = _ref.right, bottom = _ref.bottom, left = _ref.left;
  var width = right - left;
  var height = bottom - top;
  var rect = {
    top,
    right,
    bottom,
    left,
    width,
    height,
    x: left,
    y: top,
    center: {
      x: (right + left) / 2,
      y: (bottom + top) / 2
    }
  };
  return rect;
};
var expand = function expand2(target, expandBy) {
  return {
    top: target.top - expandBy.top,
    left: target.left - expandBy.left,
    bottom: target.bottom + expandBy.bottom,
    right: target.right + expandBy.right
  };
};
var shrink = function shrink2(target, shrinkBy) {
  return {
    top: target.top + shrinkBy.top,
    left: target.left + shrinkBy.left,
    bottom: target.bottom - shrinkBy.bottom,
    right: target.right - shrinkBy.right
  };
};
var noSpacing = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
};
var createBox = function createBox2(_ref2) {
  var borderBox = _ref2.borderBox, _ref2$margin = _ref2.margin, margin = _ref2$margin === void 0 ? noSpacing : _ref2$margin, _ref2$border = _ref2.border, border = _ref2$border === void 0 ? noSpacing : _ref2$border, _ref2$padding = _ref2.padding, padding = _ref2$padding === void 0 ? noSpacing : _ref2$padding;
  var marginBox = getRect(expand(borderBox, margin));
  var paddingBox = getRect(shrink(borderBox, border));
  var contentBox = getRect(shrink(paddingBox, padding));
  return {
    marginBox,
    borderBox: getRect(borderBox),
    paddingBox,
    contentBox,
    margin,
    border,
    padding
  };
};
var parse = function parse2(raw) {
  var value = raw.slice(0, -2);
  var suffix = raw.slice(-2);
  if (suffix !== "px") {
    return 0;
  }
  var result = Number(value);
  !!isNaN(result) ? invariant() : void 0;
  return result;
};
var calculateBox = function calculateBox2(borderBox, styles2) {
  var margin = {
    top: parse(styles2.marginTop),
    right: parse(styles2.marginRight),
    bottom: parse(styles2.marginBottom),
    left: parse(styles2.marginLeft)
  };
  var padding = {
    top: parse(styles2.paddingTop),
    right: parse(styles2.paddingRight),
    bottom: parse(styles2.paddingBottom),
    left: parse(styles2.paddingLeft)
  };
  var border = {
    top: parse(styles2.borderTopWidth),
    right: parse(styles2.borderRightWidth),
    bottom: parse(styles2.borderBottomWidth),
    left: parse(styles2.borderLeftWidth)
  };
  return createBox({
    borderBox,
    margin,
    padding,
    border
  });
};
var getBox = function getBox2(el) {
  var borderBox = el.getBoundingClientRect();
  var styles2 = window.getComputedStyle(el);
  return calculateBox(borderBox, styles2);
};
const {useCallback:useCallback16,useEffect:useEffect22,useMemo:useMemo17,useRef:useRef8,useState:useState25} = await importShared('react');

init_react_import();
const {useEffect:useEffect21,useMemo:useMemo16,useState:useState24} = await importShared('react');

init_react_import();
var styles_module_default20 = { "ViewportControls": "_ViewportControls_gejzr_1", "ViewportControls-divider": "_ViewportControls-divider_gejzr_15", "ViewportControls-zoomSelect": "_ViewportControls-zoomSelect_gejzr_21", "ViewportButton--isActive": "_ViewportButton--isActive_gejzr_38", "ViewportButton-inner": "_ViewportButton-inner_gejzr_38" };
var icons = {
  Smartphone: /* @__PURE__ */ jsxRuntimeExports.jsx(Smartphone, { size: 16 }),
  Tablet: /* @__PURE__ */ jsxRuntimeExports.jsx(Tablet, { size: 16 }),
  Monitor: /* @__PURE__ */ jsxRuntimeExports.jsx(Monitor, { size: 16 })
};
var getClassName25 = get_class_name_factory_default("ViewportControls", styles_module_default20);
var getClassNameButton = get_class_name_factory_default("ViewportButton", styles_module_default20);
var ViewportButton = ({
  children,
  height = "auto",
  title,
  width,
  onClick
}) => {
  const { state } = useAppContext();
  const [isActive, setIsActive] = useState24(false);
  useEffect21(() => {
    setIsActive(width === state.ui.viewports.current.width);
  }, [width, state.ui.viewports.current.width]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: getClassNameButton({ isActive }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    IconButton,
    {
      title,
      disabled: isActive,
      onClick: (e) => {
        e.stopPropagation();
        onClick({ width, height });
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: getClassNameButton("inner"), children })
    }
  ) });
};
var defaultZoomOptions = [
  { label: "25%", value: 0.25 },
  { label: "50%", value: 0.5 },
  { label: "75%", value: 0.75 },
  { label: "100%", value: 1 },
  { label: "125%", value: 1.25 },
  { label: "150%", value: 1.5 },
  { label: "200%", value: 2 }
];
var ViewportControls = ({
  autoZoom,
  zoom,
  onViewportChange,
  onZoom
}) => {
  var _a, _b;
  const { viewports } = useAppContext();
  const defaultsContainAutoZoom = defaultZoomOptions.find(
    (option) => option.value === autoZoom
  );
  const zoomOptions = useMemo16(
    () => [
      ...defaultZoomOptions,
      ...defaultsContainAutoZoom ? [] : [
        {
          value: autoZoom,
          label: `${(autoZoom * 100).toFixed(0)}% (Auto)`
        }
      ]
    ].filter((a) => a.value <= autoZoom).sort((a, b) => a.value > b.value ? 1 : -1),
    [autoZoom]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: getClassName25(), children: [
    viewports.map((viewport, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      ViewportButton,
      {
        height: viewport.height,
        width: viewport.width,
        title: viewport.label ? `Switch to ${viewport.label} viewport` : "Switch viewport",
        onClick: onViewportChange,
        children: typeof viewport.icon === "string" ? icons[viewport.icon] || viewport.icon : viewport.icon || icons.Smartphone
      },
      i
    )),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: getClassName25("divider") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      IconButton,
      {
        title: "Zoom viewport out",
        disabled: zoom <= ((_a = zoomOptions[0]) == null ? void 0 : _a.value),
        onClick: (e) => {
          e.stopPropagation();
          onZoom(
            zoomOptions[Math.max(
              zoomOptions.findIndex((option) => option.value === zoom) - 1,
              0
            )].value
          );
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(ZoomOut, { size: 16 })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      IconButton,
      {
        title: "Zoom viewport in",
        disabled: zoom >= ((_b = zoomOptions[zoomOptions.length - 1]) == null ? void 0 : _b.value),
        onClick: (e) => {
          e.stopPropagation();
          onZoom(
            zoomOptions[Math.min(
              zoomOptions.findIndex((option) => option.value === zoom) + 1,
              zoomOptions.length - 1
            )].value
          );
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(ZoomIn, { size: 16 })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: getClassName25("divider") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "select",
      {
        className: getClassName25("zoomSelect"),
        value: zoom.toString(),
        onChange: (e) => {
          onZoom(parseFloat(e.currentTarget.value));
        },
        children: zoomOptions.map((option) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "option",
          {
            value: option.value,
            label: option.label
          },
          option.label
        ))
      }
    )
  ] });
};
init_react_import();
var styles_module_default21 = { "PuckCanvas": "_PuckCanvas_18jay_1", "PuckCanvas-controls": "_PuckCanvas-controls_18jay_16", "PuckCanvas-inner": "_PuckCanvas-inner_18jay_21", "PuckCanvas-root": "_PuckCanvas-root_18jay_30", "PuckCanvas--ready": "_PuckCanvas--ready_18jay_55", "PuckCanvas-loader": "_PuckCanvas-loader_18jay_60", "PuckCanvas--showLoader": "_PuckCanvas--showLoader_18jay_70" };
init_react_import();
var getZoomConfig = (uiViewport, frame, zoom) => {
  const box = getBox(frame);
  const { width: frameWidth, height: frameHeight } = box.contentBox;
  const viewportHeight = uiViewport.height === "auto" ? frameHeight : uiViewport.height;
  let rootHeight = 0;
  let autoZoom = 1;
  if (uiViewport.width > frameWidth || viewportHeight > frameHeight) {
    const widthZoom = Math.min(frameWidth / uiViewport.width, 1);
    const heightZoom = Math.min(frameHeight / viewportHeight, 1);
    zoom = widthZoom;
    if (widthZoom < heightZoom) {
      rootHeight = viewportHeight / zoom;
    } else {
      rootHeight = viewportHeight;
      zoom = heightZoom;
    }
    autoZoom = zoom;
  } else {
    {
      autoZoom = 1;
      zoom = 1;
      rootHeight = viewportHeight;
    }
  }
  return { autoZoom, rootHeight, zoom };
};
var getClassName26 = get_class_name_factory_default("PuckCanvas", styles_module_default21);
var Canvas = () => {
  const { status, iframe } = useAppContext();
  const { dispatch, state, overrides, setUi, zoomConfig, setZoomConfig } = useAppContext();
  const { ui } = state;
  const frameRef = useRef8(null);
  const [showTransition, setShowTransition] = useState25(false);
  const defaultRender = useMemo17(() => {
    const PuckDefault = ({ children }) => /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children });
    return PuckDefault;
  }, []);
  const CustomPreview = useMemo17(
    () => overrides.preview || defaultRender,
    [overrides]
  );
  const getFrameDimensions = useCallback16(() => {
    if (frameRef.current) {
      const frame = frameRef.current;
      const box = getBox(frame);
      return { width: box.contentBox.width, height: box.contentBox.height };
    }
    return { width: 0, height: 0 };
  }, [frameRef]);
  const resetAutoZoom = useCallback16(
    (ui2 = state.ui) => {
      if (frameRef.current) {
        setZoomConfig(
          getZoomConfig(ui2.viewports.current, frameRef.current, zoomConfig.zoom)
        );
      }
    },
    [frameRef, zoomConfig, state.ui]
  );
  useEffect22(() => {
    setShowTransition(false);
    resetAutoZoom();
  }, [frameRef, ui.leftSideBarVisible, ui.rightSideBarVisible]);
  useEffect22(() => {
    const { height: frameHeight } = getFrameDimensions();
    if (ui.viewports.current.height === "auto") {
      setZoomConfig(__spreadProps$6(__spreadValues$7({}, zoomConfig), {
        rootHeight: frameHeight / zoomConfig.zoom
      }));
    }
  }, [zoomConfig.zoom]);
  useEffect22(() => {
    {
      setShowTransition(true);
      resetAutoZoom(ui);
    }
  }, [ui.viewports.current.width]);
  useEffect22(() => {
    const cb = () => {
      setShowTransition(false);
      resetAutoZoom();
    };
    window.addEventListener("resize", cb);
    return () => {
      window.removeEventListener("resize", cb);
    };
  }, []);
  const [showLoader, setShowLoader] = useState25(false);
  useEffect22(() => {
    setTimeout(() => {
      setShowLoader(true);
    }, 500);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: getClassName26({
        ready: status === "READY" || !iframe.enabled || !iframe.waitForStyles,
        showLoader
      }),
      onClick: () => dispatch({
        type: "setUi",
        ui: { itemSelector: null },
        recordHistory: true
      }),
      children: [
        ui.viewports.controlsVisible && iframe.enabled && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: getClassName26("controls"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          ViewportControls,
          {
            autoZoom: zoomConfig.autoZoom,
            zoom: zoomConfig.zoom,
            onViewportChange: (viewport) => {
              setShowTransition(true);
              const uiViewport = __spreadProps$6(__spreadValues$7({}, viewport), {
                height: viewport.height || "auto",
                zoom: zoomConfig.zoom
              });
              const newUi = __spreadProps$6(__spreadValues$7({}, ui), {
                viewports: __spreadProps$6(__spreadValues$7({}, ui.viewports), { current: uiViewport }),
                itemSelector: null
              });
              setUi(newUi);
              {
                resetAutoZoom(newUi);
              }
            },
            onZoom: (zoom) => {
              setShowTransition(true);
              setZoomConfig(__spreadProps$6(__spreadValues$7({}, zoomConfig), { zoom }));
            }
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: getClassName26("inner"), ref: frameRef, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: getClassName26("root"),
              style: {
                width: iframe.enabled ? ui.viewports.current.width : "100%",
                height: zoomConfig.rootHeight,
                transform: iframe.enabled ? `scale(${zoomConfig.zoom})` : void 0,
                transition: showTransition ? "width 150ms ease-out, height 150ms ease-out, transform 150ms ease-out" : "",
                overflow: iframe.enabled ? void 0 : "auto"
              },
              suppressHydrationWarning: true,
              id: "puck-canvas-root",
              onTransitionEnd: () => {
                window.dispatchEvent(
                  new CustomEvent("viewportchange", {
                    bubbles: true,
                    cancelable: false
                  })
                );
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(CustomPreview, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Preview2, {}) })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: getClassName26("loader"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, { size: 24 }) })
        ] })
      ]
    }
  );
};
init_react_import();
const {useMemo:useMemo18} = await importShared('react');

init_react_import();
var loadOverrides = ({
  overrides,
  plugins
}) => {
  const collected = __spreadValues$7({}, overrides);
  plugins == null ? void 0 : plugins.forEach((plugin) => {
    Object.keys(plugin.overrides).forEach((_overridesType) => {
      const overridesType = _overridesType;
      if (overridesType === "fieldTypes") {
        const fieldTypes = plugin.overrides.fieldTypes;
        Object.keys(fieldTypes).forEach((fieldType) => {
          collected.fieldTypes = collected.fieldTypes || {};
          const childNode2 = collected.fieldTypes[fieldType];
          const Comp2 = (props) => fieldTypes[fieldType](__spreadProps$6(__spreadValues$7({}, props), {
            children: childNode2 ? childNode2(props) : props.children
          }));
          collected.fieldTypes[fieldType] = Comp2;
        });
        return;
      }
      const childNode = collected[overridesType];
      const Comp = (props) => plugin.overrides[overridesType](__spreadProps$6(__spreadValues$7({}, props), {
        children: childNode ? childNode(props) : props.children
      }));
      collected[overridesType] = Comp;
    });
  });
  return collected;
};
var useLoadedOverrides = ({
  overrides,
  plugins
}) => {
  return useMemo18(() => {
    return loadOverrides({ overrides, plugins });
  }, [plugins, overrides]);
};
init_react_import();
var DefaultOverride = ({ children }) => /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children });
init_react_import();
const {useEffect:useEffect23,useState:useState26} = await importShared('react');

var styles = ``;
var useInjectStyleSheet = (initialStyles, iframeEnabled) => {
  const [el, setEl] = useState26();
  useEffect23(() => {
    setEl(document.createElement("style"));
  }, []);
  useEffect23(() => {
    var _a;
    if (!el || typeof window === "undefined") {
      return;
    }
    el.innerHTML = initialStyles;
    if (iframeEnabled) {
      const frame = getFrame();
      (_a = frame == null ? void 0 : frame.head) == null ? void 0 : _a.appendChild(el);
    }
    document.head.appendChild(el);
  }, [iframeEnabled, el]);
  return el;
};
var useInjectGlobalCss = (iframeEnabled) => {
  return useInjectStyleSheet(styles, iframeEnabled);
};
init_react_import();
const {useCallback:useCallback17} = await importShared('react');
var usePreviewModeHotkeys = (dispatch, iframeEnabled) => {
  const toggleInteractive = useCallback17(() => {
    dispatch({
      type: "setUi",
      ui: (ui) => ({
        previewMode: ui.previewMode === "edit" ? "interactive" : "edit"
      })
    });
  }, [dispatch]);
  const toggleInteractiveIframe = () => {
    if (iframeEnabled) {
      toggleInteractive();
    }
  };
  const frame = getFrame();
  const resolvedFrame = typeof window !== "undefined" && frame !== document ? frame : void 0;
  useHotkeys("meta+i", toggleInteractive, { preventDefault: true });
  useHotkeys("meta+i", toggleInteractiveIframe, {
    preventDefault: true,
    document: resolvedFrame
  });
  useHotkeys("ctrl+i", toggleInteractive, { preventDefault: true });
  useHotkeys("ctrl+i", toggleInteractiveIframe, {
    preventDefault: true,
    document: resolvedFrame
  });
};
var getClassName27 = get_class_name_factory_default("Puck", styles_module_default15);
var getLayoutClassName = get_class_name_factory_default("PuckLayout", styles_module_default15);
function Puck({
  children,
  config,
  data: initialData,
  ui: initialUi,
  onChange,
  onPublish,
  onAction,
  permissions = {},
  plugins,
  overrides,
  renderHeader,
  renderHeaderActions,
  headerTitle,
  headerPath,
  viewports = defaultViewports,
  iframe: _iframe,
  dnd,
  initialHistory: _initialHistory
}) {
  var _a, _b;
  const iframe = __spreadValues$7({
    enabled: true,
    waitForStyles: true
  }, _iframe);
  useInjectGlobalCss(iframe.enabled);
  const [generatedAppState] = useState27(() => {
    var _a2, _b2, _c, _d, _e, _f, _g, _h, _i;
    const initial = __spreadValues$7(__spreadValues$7({}, defaultAppState.ui), initialUi);
    let clientUiState = {};
    if (typeof window !== "undefined") {
      if (window.matchMedia("(max-width: 638px)").matches) {
        clientUiState = __spreadProps$6(__spreadValues$7({}, clientUiState), {
          leftSideBarVisible: false,
          rightSideBarVisible: false
        });
      }
      const viewportWidth = window.innerWidth;
      const viewportDifferences = Object.entries(viewports).map(([key, value]) => ({
        key,
        diff: Math.abs(viewportWidth - value.width)
      })).sort((a, b) => a.diff > b.diff ? 1 : -1);
      const closestViewport = viewportDifferences[0].key;
      if (iframe.enabled) {
        clientUiState = __spreadProps$6(__spreadValues$7({}, clientUiState), {
          viewports: __spreadProps$6(__spreadValues$7({}, initial.viewports), {
            current: __spreadProps$6(__spreadValues$7({}, initial.viewports.current), {
              height: ((_b2 = (_a2 = initialUi == null ? void 0 : initialUi.viewports) == null ? void 0 : _a2.current) == null ? void 0 : _b2.height) || ((_c = viewports[closestViewport]) == null ? void 0 : _c.height) || "auto",
              width: ((_e = (_d = initialUi == null ? void 0 : initialUi.viewports) == null ? void 0 : _d.current) == null ? void 0 : _e.width) || ((_f = viewports[closestViewport]) == null ? void 0 : _f.width)
            })
          })
        });
      }
    }
    if (Object.keys((initialData == null ? void 0 : initialData.root) || {}).length > 0 && !((_g = initialData == null ? void 0 : initialData.root) == null ? void 0 : _g.props)) {
      console.error(
        "Warning: Defining props on `root` is deprecated. Please use `root.props`, or republish this page to migrate automatically."
      );
    }
    const rootProps2 = ((_h = initialData == null ? void 0 : initialData.root) == null ? void 0 : _h.props) || (initialData == null ? void 0 : initialData.root) || {};
    const defaultedRootProps = __spreadValues$7(__spreadValues$7({}, (_i = config.root) == null ? void 0 : _i.defaultProps), rootProps2);
    return __spreadProps$6(__spreadValues$7({}, defaultAppState), {
      data: __spreadProps$6(__spreadValues$7({}, initialData), {
        root: __spreadProps$6(__spreadValues$7({}, initialData == null ? void 0 : initialData.root), { props: defaultedRootProps }),
        content: initialData.content || []
      }),
      ui: __spreadProps$6(__spreadValues$7(__spreadValues$7({}, initial), clientUiState), {
        // Store categories under componentList on state to allow render functions and plugins to modify
        componentList: config.categories ? Object.entries(config.categories).reduce(
          (acc, [categoryName, category]) => {
            return __spreadProps$6(__spreadValues$7({}, acc), {
              [categoryName]: {
                title: category.title,
                components: category.components,
                expanded: category.defaultExpanded,
                visible: category.visible
              }
            });
          },
          {}
        ) : {}
      })
    });
  });
  const { appendData = true } = _initialHistory || {};
  const histories = [
    ...(_initialHistory == null ? void 0 : _initialHistory.histories) || [],
    ...appendData ? [{ state: generatedAppState }] : []
  ].map((history2) => __spreadProps$6(__spreadValues$7({}, history2), {
    // Inject default data to enable partial history injections
    state: __spreadValues$7(__spreadValues$7({}, generatedAppState), history2.state)
  }));
  const initialHistoryIndex = (_initialHistory == null ? void 0 : _initialHistory.index) || histories.length - 1;
  const initialAppState = histories[initialHistoryIndex].state;
  const historyStore = useHistoryStore({
    histories,
    index: initialHistoryIndex
  });
  const [reducer] = useState27(
    () => createReducer({
      config,
      record: historyStore.record,
      onAction
    })
  );
  const [appState, dispatch] = useReducer(
    reducer,
    flushZones(initialAppState)
  );
  const { data, ui } = appState;
  const history = usePuckHistory({
    dispatch,
    initialAppState,
    historyStore,
    iframeEnabled: (_a = _iframe == null ? void 0 : _iframe.enabled) != null ? _a : true
  });
  const [menuOpen, setMenuOpen] = useState27(false);
  const { itemSelector, leftSideBarVisible, rightSideBarVisible } = ui;
  const selectedItem = itemSelector ? getItem(itemSelector, data) : null;
  useEffect24(() => {
    if (onChange) onChange(data);
  }, [data]);
  const rootProps = data.root.props || data.root;
  const toggleSidebars = useCallback18(
    (sidebar) => {
      const widerViewport = window.matchMedia("(min-width: 638px)").matches;
      const sideBarVisible = sidebar === "left" ? leftSideBarVisible : rightSideBarVisible;
      const oppositeSideBar = sidebar === "left" ? "rightSideBarVisible" : "leftSideBarVisible";
      dispatch({
        type: "setUi",
        ui: __spreadValues$7({
          [`${sidebar}SideBarVisible`]: !sideBarVisible
        }, !widerViewport ? { [oppositeSideBar]: false } : {})
      });
    },
    [dispatch, leftSideBarVisible, rightSideBarVisible]
  );
  useEffect24(() => {
    if (!window.matchMedia("(min-width: 638px)").matches) {
      dispatch({
        type: "setUi",
        ui: {
          leftSideBarVisible: false,
          rightSideBarVisible: false
        }
      });
    }
    const handleResize = () => {
      if (!window.matchMedia("(min-width: 638px)").matches) {
        dispatch({
          type: "setUi",
          ui: (ui2) => __spreadValues$7(__spreadValues$7({}, ui2), ui2.rightSideBarVisible ? { leftSideBarVisible: false } : {})
        });
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const defaultHeaderRender = useMemo19(() => {
    if (renderHeader) {
      console.warn(
        "`renderHeader` is deprecated. Please use `overrides.header` and the `usePuck` hook instead"
      );
      const RenderHeader = (_a2) => {
        var _b2 = _a2, { actions } = _b2, props = __objRest$4(_b2, ["actions"]);
        const Comp = renderHeader;
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, __spreadProps$6(__spreadValues$7({}, props), { dispatch, state: appState, children: actions }));
      };
      return RenderHeader;
    }
    return DefaultOverride;
  }, [renderHeader]);
  const defaultHeaderActionsRender = useMemo19(() => {
    if (renderHeaderActions) {
      console.warn(
        "`renderHeaderActions` is deprecated. Please use `overrides.headerActions` and the `usePuck` hook instead."
      );
      const RenderHeader = (props) => {
        const Comp = renderHeaderActions;
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, __spreadProps$6(__spreadValues$7({}, props), { dispatch, state: appState }));
      };
      return RenderHeader;
    }
    return DefaultOverride;
  }, [renderHeader]);
  const loadedOverrides = useLoadedOverrides({
    overrides,
    plugins
  });
  const CustomPuck = useMemo19(
    () => loadedOverrides.puck || DefaultOverride,
    [loadedOverrides]
  );
  const CustomHeader = useMemo19(
    () => loadedOverrides.header || defaultHeaderRender,
    [loadedOverrides]
  );
  const CustomHeaderActions = useMemo19(
    () => loadedOverrides.headerActions || defaultHeaderActionsRender,
    [loadedOverrides]
  );
  const [mounted, setMounted] = useState27(false);
  useEffect24(() => {
    setMounted(true);
  }, []);
  const selectedComponentConfig = selectedItem && config.components[selectedItem.type];
  const selectedComponentLabel = selectedItem ? (_b = selectedComponentConfig == null ? void 0 : selectedComponentConfig["label"]) != null ? _b : selectedItem.type.toString() : "";
  usePreviewModeHotkeys(dispatch, iframe.enabled);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `Puck ${getClassName27()}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AppProvider,
      {
        value: {
          state: appState,
          dispatch,
          config,
          plugins: plugins || [],
          overrides: loadedOverrides,
          history,
          viewports,
          iframe,
          globalPermissions: __spreadValues$7({
            delete: true,
            drag: true,
            duplicate: true,
            insert: true,
            edit: true
          }, permissions),
          getPermissions: () => ({}),
          refreshPermissions: () => null
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(DragDropContext, { disableAutoScroll: dnd == null ? void 0 : dnd.disableAutoScroll, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CustomPuck, { children: children || /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: getLayoutClassName({
              leftSideBarVisible,
              menuOpen,
              mounted,
              rightSideBarVisible
            }),
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: getLayoutClassName("inner"), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                CustomHeader,
                {
                  actions: /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CustomHeaderActions, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      onClick: () => {
                        onPublish && onPublish(data);
                      },
                      icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { size: "14px" }),
                      children: "Publish"
                    }
                  ) }) }),
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: getLayoutClassName("header"), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: getLayoutClassName("headerInner"), children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: getLayoutClassName("headerToggle"), children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: getLayoutClassName("leftSideBarToggle"),
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                            IconButton,
                            {
                              onClick: () => {
                                toggleSidebars("left");
                              },
                              title: "Toggle left sidebar",
                              children: /* @__PURE__ */ jsxRuntimeExports.jsx(PanelLeft, { focusable: "false" })
                            }
                          )
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: getLayoutClassName("rightSideBarToggle"),
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                            IconButton,
                            {
                              onClick: () => {
                                toggleSidebars("right");
                              },
                              title: "Toggle right sidebar",
                              children: /* @__PURE__ */ jsxRuntimeExports.jsx(PanelRight, { focusable: "false" })
                            }
                          )
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: getLayoutClassName("headerTitle"), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Heading, { rank: "2", size: "xs", children: [
                      headerTitle || rootProps.title || "Page",
                      headerPath && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                        " ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "code",
                          {
                            className: getLayoutClassName("headerPath"),
                            children: headerPath
                          }
                        )
                      ] })
                    ] }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: getLayoutClassName("headerTools"), children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: getLayoutClassName("menuButton"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        IconButton,
                        {
                          onClick: () => {
                            return setMenuOpen(!menuOpen);
                          },
                          title: "Toggle menu bar",
                          children: menuOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { focusable: "false" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { focusable: "false" })
                        }
                      ) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        MenuBar,
                        {
                          appState,
                          dispatch,
                          onPublish,
                          menuOpen,
                          renderHeaderActions: () => /* @__PURE__ */ jsxRuntimeExports.jsx(CustomHeaderActions, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Button,
                            {
                              onClick: () => {
                                onPublish && onPublish(data);
                              },
                              icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { size: "14px" }),
                              children: "Publish"
                            }
                          ) }),
                          setMenuOpen
                        }
                      )
                    ] })
                  ] }) })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: getLayoutClassName("leftSideBar"), children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarSection, { title: "Components", noBorderTop: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Components, {}) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SidebarSection, { title: "Outline", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outline, {}) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Canvas, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: getLayoutClassName("rightSideBar"), children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                SidebarSection,
                {
                  noPadding: true,
                  noBorderTop: true,
                  showBreadcrumbs: true,
                  title: selectedItem ? selectedComponentLabel : "Page",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Fields, {})
                }
              ) })
            ] })
          }
        ) }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "puck-portal-root", className: getClassName27("portal") })
  ] });
}
Puck.Components = Components;
Puck.Fields = Fields;
Puck.Outline = Outline;
Puck.Preview = Preview2;
init_react_import();
var migrations = [
  // Migrate root to root.props
  (data) => {
    const rootProps = data.root.props || data.root;
    if (Object.keys(data.root).length > 0 && !data.root.props) {
      console.warn(
        "Migration applied: Root props moved from `root` to `root.props`."
      );
      return __spreadProps$6(__spreadValues$7({}, data), {
        root: {
          props: __spreadValues$7({}, rootProps)
        }
      });
    }
    return data;
  }
];
function migrate(data) {
  return migrations == null ? void 0 : migrations.reduce((acc, migration) => migration(acc), data);
}
init_react_import();
function transformProps(data, propTransforms) {
  const mapItem = (item) => {
    if (propTransforms[item.type]) {
      return __spreadProps$6(__spreadValues$7({}, item), {
        props: propTransforms[item.type](item.props)
      });
    }
    return item;
  };
  const defaultedData = defaultData(data);
  const rootProps = defaultedData.root.props || defaultedData.root;
  let newRoot = __spreadValues$7({}, defaultedData.root);
  if (propTransforms["root"]) {
    if (defaultedData.root.props) {
      newRoot.props = propTransforms["root"](rootProps);
    } else {
      newRoot = propTransforms["root"](rootProps);
    }
  }
  const afterPropTransforms = __spreadProps$6(__spreadValues$7({}, defaultedData), {
    root: newRoot,
    content: defaultedData.content.map(mapItem),
    zones: Object.keys(data.zones || {}).reduce(
      (acc, zoneKey) => __spreadProps$6(__spreadValues$7({}, acc), {
        [zoneKey]: data.zones[zoneKey].map(mapItem)
      }),
      {}
    )
  });
  return afterPropTransforms;
}
init_react_import();
var usePuck = () => {
  const {
    state: appState,
    config,
    history,
    dispatch,
    selectedItem: currentItem,
    getPermissions,
    refreshPermissions
  } = useAppContext();
  if (dispatch === defaultContext.dispatch) {
    throw new Error(
      "usePuck was used outside of the <Puck> component. The usePuck hook must be rendered within the <Puck> context as children, overrides or plugins as described in https://puckeditor.com/docs/api-reference/functions/use-puck."
    );
  }
  return {
    appState,
    config,
    dispatch,
    getPermissions,
    refreshPermissions,
    history: {
      back: history.back,
      forward: history.forward,
      setHistories: history.setHistories,
      setHistoryIndex: history.setHistoryIndex,
      hasPast: history.historyStore.hasPast,
      hasFuture: history.historyStore.hasFuture,
      histories: history.historyStore.histories,
      index: history.historyStore.index,
      historyStore: history.historyStore
    },
    selectedItem: currentItem || null
  };
};
/*! Bundled license information:

classnames/index.js:
  (*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  *)

lucide-react/dist/esm/shared/src/utils.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/defaultAttributes.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/Icon.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/createLucideIcon.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/chevron-down.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/chevron-right.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/chevron-up.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/circle-check-big.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/copy.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/corner-left-up.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/ellipsis-vertical.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/globe.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/hash.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/layers.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/layout-grid.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/link.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/list.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/lock-open.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/lock.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/monitor.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/panel-left.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/panel-right.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/plus.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/redo-2.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/search.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/sliders-horizontal.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/smartphone.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/tablet.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/trash.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/type.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/undo-2.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/zoom-in.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/zoom-out.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/lucide-react.js:
  (**
   * @license lucide-react v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/

export { Action, ActionBar, AutoField, Button, Drawer, DropZone, FieldLabel, Group, IconButton, Label, Puck, Render, migrate, overrideKeys, resolveAllData, transformProps, usePuck };
