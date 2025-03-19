import { l as lodashExports, _ as __vitePreload, c as create, H as H$5, a as c$8, I as Icon } from '../iconify-91NgEiYE.js';
import { importShared } from '../__federation_fn_import-D9ReRsJu.js';
import { j as jsxRuntimeExports } from '../jsx-runtime-XI9uIe3W.js';
import { c as createCache } from '../emotion-cache.browser.esm-BasAJTkK.js';
import { g as getRegisteredStyles, s as serializeStyles, r as registerStyles, i as insertStyles } from '../emotion-serialize.esm-NRQwqoEn.js';

const _$9 = 2700, p$9 = 6500, I$4 = (t) => {
  const r = t / 100;
  return [R$3(r), T$7(r), A$3(r)];
}, R$3 = (t) => {
  if (t <= 66)
    return 255;
  const r = 329.698727446 * (t - 60) ** -0.1332047592;
  return lodashExports.clamp(r, 0, 255);
}, T$7 = (t) => {
  let r;
  return t <= 66 ? r = 99.4708025861 * Math.log(t) - 161.1195681661 : r = 288.1221695283 * (t - 60) ** -0.0755148492, lodashExports.clamp(r, 0, 255);
}, A$3 = (t) => {
  if (t >= 66)
    return 255;
  if (t <= 19)
    return 0;
  const r = 138.5177312231 * Math.log(t - 10) - 305.0447927307;
  return lodashExports.clamp(r, 0, 255);
}, h$5 = (t, r) => {
  const e = Math.max(...t), o = Math.max(...r);
  let n;
  return o === 0 ? n = 0 : n = e / o, r.map((c) => Math.round(c * n));
}, K$1 = (t) => Math.floor(1e6 / t), u$d = (t) => Math.floor(1e6 / t), k$4 = (t, r, e) => {
  const [o, n, c, a, s] = t, w = u$d(r ?? _$9), g = u$d(e ?? p$9), b = w - g;
  let l;
  try {
    l = s / (a + s);
  } catch (L) {
    console.log("Error:", L), l = 0.5;
  }
  const M = g + l * b, d = M ? K$1(M) : 0, [f, x, v] = I$4(d), i = Math.max(a, s) / 255, E = [o + f * i, n + x * i, c + v * i];
  return h$5([o, n, c, a, s], E);
}, B$3 = (t) => {
  const [r, e, o, n] = t, c = [r + n, e + n, o + n];
  return h$5([r, e, o, n], c);
};

const a$7 = (t) => {
  if (t = t.replace("#", ""), t.length === 6) return t;
  let r = "";
  for (const e of t)
    r += e + e;
  return r;
}, f$7 = (t, r, e = 50) => {
  let l = "";
  t = a$7(t), r = a$7(r);
  for (let n = 0; n <= 5; n += 2) {
    const u = parseInt(t.substr(n, 2), 16), s = parseInt(r.substr(n, 2), 16);
    let o = Math.floor(s + (u - s) * (e / 100)).toString(16);
    for (; o.length < 2; ) o = "0" + o;
    l += o;
  }
  return `#${l}`;
};

const b$4 = (t) => {
  const s = Math.round(Math.min(Math.max(t, 0), 255)).toString(16);
  return s.length === 1 ? `0${s}` : s;
}, S$6 = (t) => (t = a$7(t), [parseInt(t.substring(0, 2), 16), parseInt(t.substring(2, 4), 16), parseInt(t.substring(4, 6), 16)]), f$6 = (t) => `#${b$4(t[0])}${b$4(t[1])}${b$4(t[2])}`, h$4 = 0.95047, i$4 = 1, l$6 = 1.08883, m$b = 0.137931034, v$4 = 0.206896552, y$4 = 0.12841855, N$2 = 8856452e-9, a$6 = (t) => (t /= 255, t <= 0.04045 ? t / 12.92 : ((t + 0.055) / 1.055) ** 2.4), g$9 = (t) => t > N$2 ? t ** (1 / 3) : t / y$4 + m$b, u$c = (t) => 255 * (t <= 304e-5 ? 12.92 * t : 1.055 * t ** (1 / 2.4) - 0.055), x$3 = (t) => t > v$4 ? t * t * t : y$4 * (t - m$b), $$1 = (t) => {
  let [s, r, o] = t;
  s = a$6(s), r = a$6(r), o = a$6(o);
  const n = g$9((0.4124564 * s + 0.3575761 * r + 0.1804375 * o) / h$4), c = g$9((0.2126729 * s + 0.7151522 * r + 0.072175 * o) / i$4), e = g$9((0.0193339 * s + 0.119192 * r + 0.9503041 * o) / l$6);
  return [n, c, e];
}, X = (t) => {
  const [s, r, o] = $$1(t), n = 116 * r - 16;
  return [n < 0 ? 0 : n, 500 * (s - r), 200 * (r - o)];
}, I$3 = (t) => {
  const [s, r, o] = t;
  let n = (s + 16) / 116, c = isNaN(r) ? n : n + r / 500, e = isNaN(o) ? n : n - o / 200;
  n = i$4 * x$3(n), c = h$4 * x$3(c), e = l$6 * x$3(e);
  const z = u$c(3.2404542 * c - 1.5371385 * n - 0.4985314 * e), M = u$c(-0.969266 * c + 1.8760108 * n + 0.041556 * e), p = u$c(0.0556434 * c - 0.2040259 * n + 1.0572252 * e);
  return [z, M, p];
}, Y = (t) => {
  const s = I$3(t);
  return f$6(s);
}, d$c = (t) => {
  const [s, r, o] = t, n = Math.max(s, r, o), c = n - Math.min(s, r, o), e = c && (n === s ? (r - o) / c : n === r ? 2 + (o - s) / c : 4 + (s - r) / c);
  return [60 * (e < 0 ? e + 6 : e), n && c / n, n];
}, k$3 = (t) => {
  const [s, r, o] = t, n = (c) => {
    const e = (c + s / 60) % 6;
    return o - o * r * Math.max(Math.min(e, 4 - e, 1), 0);
  };
  return [n(5), n(3), n(1)];
}, Z = (t) => d$c(t).slice(0, 2), j = (t) => k$3([t[0], t[1], 255]);

const f$5 = [
  "#44739e",
  "#984ea3",
  "#00d2d5",
  "#ff7f00",
  "#af8d00",
  "#7f80cd",
  "#b3e900",
  "#c42e60",
  "#a65628",
  "#f781bf",
  "#8dd3c7",
  "#bebada",
  "#fb8072",
  "#80b1d3",
  "#fdb462",
  "#fccde5",
  "#bc80bd",
  "#ffed6f",
  "#c4eaff",
  "#cf8c00",
  "#1b9e77",
  "#d95f02",
  "#e7298a",
  "#e6ab02",
  "#a6761d",
  "#0097ff",
  "#00d067",
  "#f43600",
  "#4ba93b",
  "#5779bb",
  "#927acc",
  "#97ee3f",
  "#bf3947",
  "#9f5b00",
  "#f48758",
  "#8caed6",
  "#f2b94f",
  "#eff26e",
  "#e43872",
  "#d9b100",
  "#9d7a00",
  "#698cff",
  "#d9d9d9",
  "#00d27e",
  "#d06800",
  "#009f82",
  "#c49200",
  "#cbe8ff",
  "#fecddf",
  "#c27eb6",
  "#8cd2ce",
  "#c4b8d9",
  "#f883b0",
  "#a49100",
  "#f48800",
  "#27d0df",
  "#a04a9b"
];
function e$4(d) {
  return f$5[d % f$5.length];
}

const r$6 = /* @__PURE__ */ new Set([
  "primary",
  "accent",
  "disabled",
  "red",
  "pink",
  "purple",
  "deep-purple",
  "indigo",
  "blue",
  "light-blue",
  "cyan",
  "teal",
  "green",
  "light-green",
  "lime",
  "yellow",
  "amber",
  "orange",
  "deep-orange",
  "brown",
  "light-grey",
  "grey",
  "dark-grey",
  "blue-grey",
  "black",
  "white"
]);
function n$b(e) {
  return r$6.has(e) ? `var(--${e}-color)` : e;
}

const s$8 = (r) => {
  const t = [0, 0, 0];
  for (let n = 0; n < r.length; n++) {
    const o = r[n] / 255;
    t[n] = o <= 0.03928 ? o / 12.92 : ((o + 0.055) / 1.055) ** 2.4;
  }
  return 0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2];
}, u$b = (r, t) => {
  const n = s$8(r), o = s$8(t);
  return n > o ? (n + 0.05) / (o + 0.05) : (o + 0.05) / (n + 0.05);
}, c$7 = (r, t) => Math.round((u$b(r, t) + Number.EPSILON) * 100) / 100;

const e$3 = (s) => {
  if (s && s.attributes && s.attributes.brightness && !s.entity_id.startsWith("plant")) {
    const r = s.attributes.brightness, t = Number(Number((r + 245) / 5).toFixed(0));
    return {
      raw: t,
      css: `brightness(${t}%)`
    };
  }
  return {
    css: "brightness(100%)",
    raw: 100
  };
};

const e$2 = (n, t = 1) => [n[0] - 18 * t, n[1], n[2]], o$8 = (n, t = 1) => e$2(n, -t);

const r$5 = {
  UNKNOWN: "unknown",
  ONOFF: "onoff",
  BRIGHTNESS: "brightness",
  COLOR_TEMP: "color_temp",
  HS: "hs",
  XY: "xy",
  RGB: "rgb",
  RGBW: "rgbw",
  RGBWW: "rgbww",
  WHITE: "white"
};

const s$7 = [
  r$5.HS,
  r$5.XY,
  r$5.RGB,
  r$5.RGBW,
  r$5.RGBWW
], e$1 = [
  ...s$7,
  r$5.COLOR_TEMP,
  r$5.BRIGHTNESS,
  r$5.WHITE
], u$a = (o, r) => o.attributes.supported_color_modes?.includes(r) || false, c$6 = (o) => o.attributes.color_mode && s$7.includes(o.attributes.color_mode) || false, d$b = (o) => o.attributes.supported_color_modes?.some((r) => s$7.includes(r)) || false, i$3 = (o) => o.attributes.supported_color_modes?.some((r) => e$1.includes(r)) || false, p$8 = (o) => o.attributes.color_mode === r$5.RGBWW ? o.attributes.rgbww_color : o.attributes.color_mode === r$5.RGBW ? o.attributes.rgbw_color : o.attributes.rgb_color;

function p$7(r) {
  if (r.attributes) {
    if ("hs_color" in r.attributes && r.attributes.hs_color !== null)
      return j([r.attributes.hs_color[0], r.attributes.hs_color[1] / 100]);
    if ("color_temp_kelvin" in r.attributes && r.attributes.color_temp_kelvin !== null)
      return I$4(r.attributes.color_temp_kelvin);
    if ("rgb_color" in r.attributes && r.attributes.rgb_color !== null)
      return r.attributes.rgb_color;
    if ("rgbw_color" in r.attributes && r.attributes.rgbw_color !== null)
      return B$3(r.attributes.rgbw_color);
    if ("rgbww_color" in r.attributes && r.attributes.rgbww_color !== null)
      return k$4(r.attributes.rgbww_color, r.attributes.min_color_temp_kelvin, r.attributes.max_color_temp_kelvin);
    if (i$3(r))
      return I$4(2e3);
  }
  return null;
}
function k$2(r) {
  const o = r ? p$7(r) : null, t = o ? o.map((c) => c.toFixed(0)).map(Number) : null, s = o ? f$6(o) : "var(--ha-A400)", u = t ? `rgba(${t.join(", ")})` : "var(--ha-S500-contrast)", b = t ? `rgba(${[...t, 0.35].join(", ")})` : "var(--ha-A200)", { css: a, raw: e } = e$3(r);
  return {
    color: o || [33, 33, 33],
    hexColor: s,
    rgbColor: u,
    rgbaColor: b,
    brightness: a,
    brightnessValue: e
  };
}

const m$a = (o) => lodashExports.snakeCase(o.substr(0, o.indexOf(".")));

const ERR_CANNOT_CONNECT = 1;
const ERR_INVALID_AUTH = 2;
const ERR_CONNECTION_LOST = 3;
const ERR_HASS_HOST_REQUIRED = 4;
const ERR_INVALID_HTTPS_TO_HTTP = 5;
const ERR_INVALID_AUTH_CALLBACK = 6;

function auth(accessToken) {
    return {
        type: "auth",
        access_token: accessToken,
    };
}
function supportedFeatures() {
    return {
        type: "supported_features",
        id: 1, // Always the first message after auth
        features: { coalesce_messages: 1 },
    };
}
function states() {
    return {
        type: "get_states",
    };
}
function config() {
    return {
        type: "get_config",
    };
}
function services() {
    return {
        type: "get_services",
    };
}
function user() {
    return {
        type: "auth/current_user",
    };
}
function callService$1(domain, service, serviceData, target, returnResponse) {
    const message = {
        type: "call_service",
        domain,
        service,
        target,
        return_response: returnResponse,
    };
    if (serviceData) {
        message.service_data = serviceData;
    }
    return message;
}
function subscribeEvents(eventType) {
    const message = {
        type: "subscribe_events",
    };
    if (eventType) {
        message.event_type = eventType;
    }
    return message;
}
function unsubscribeEvents(subscription) {
    return {
        type: "unsubscribe_events",
        subscription,
    };
}
function ping() {
    return {
        type: "ping",
    };
}
function error(code, message) {
    return {
        type: "result",
        success: false,
        error: {
            code,
            message,
        },
    };
}

function parseQuery(queryString) {
    const query = {};
    const items = queryString.split("&");
    for (let i = 0; i < items.length; i++) {
        const item = items[i].split("=");
        const key = decodeURIComponent(item[0]);
        const value = item.length > 1 ? decodeURIComponent(item[1]) : undefined;
        query[key] = value;
    }
    return query;
}
const atLeastHaVersion = (version, major, minor, patch) => {
    const [haMajor, haMinor, haPatch] = version.split(".", 3);
    return (Number(haMajor) > major ||
        (Number(haMajor) === major &&
            (patch === undefined
                ? Number(haMinor) >= minor
                : Number(haMinor) > minor)) ||
        (patch !== undefined &&
            Number(haMajor) === major &&
            Number(haMinor) === minor &&
            Number(haPatch) >= patch));
};

/**
 * Create a web socket connection with a Home Assistant instance.
 */
const MSG_TYPE_AUTH_INVALID = "auth_invalid";
const MSG_TYPE_AUTH_OK = "auth_ok";
function createSocket(options) {
    if (!options.auth) {
        throw ERR_HASS_HOST_REQUIRED;
    }
    const auth$1 = options.auth;
    // Start refreshing expired tokens even before the WS connection is open.
    // We know that we will need auth anyway.
    let authRefreshTask = auth$1.expired
        ? auth$1.refreshAccessToken().then(() => {
            authRefreshTask = undefined;
        }, () => {
            authRefreshTask = undefined;
        })
        : undefined;
    // Convert from http:// -> ws://, https:// -> wss://
    const url = auth$1.wsUrl;
    function connect(triesLeft, promResolve, promReject) {
        const socket = new WebSocket(url);
        // If invalid auth, we will not try to reconnect.
        let invalidAuth = false;
        const closeMessage = () => {
            // If we are in error handler make sure close handler doesn't also fire.
            socket.removeEventListener("close", closeMessage);
            if (invalidAuth) {
                promReject(ERR_INVALID_AUTH);
                return;
            }
            // Reject if we no longer have to retry
            if (triesLeft === 0) {
                // We never were connected and will not retry
                promReject(ERR_CANNOT_CONNECT);
                return;
            }
            const newTries = triesLeft === -1 ? -1 : triesLeft - 1;
            // Try again in a second
            setTimeout(() => connect(newTries, promResolve, promReject), 1000);
        };
        // Auth is mandatory, so we can send the auth message right away.
        const handleOpen = async (event) => {
            try {
                if (auth$1.expired) {
                    await (authRefreshTask ? authRefreshTask : auth$1.refreshAccessToken());
                }
                socket.send(JSON.stringify(auth(auth$1.accessToken)));
            }
            catch (err) {
                // Refresh token failed
                invalidAuth = err === ERR_INVALID_AUTH;
                socket.close();
            }
        };
        const handleMessage = async (event) => {
            const message = JSON.parse(event.data);
            switch (message.type) {
                case MSG_TYPE_AUTH_INVALID:
                    invalidAuth = true;
                    socket.close();
                    break;
                case MSG_TYPE_AUTH_OK:
                    socket.removeEventListener("open", handleOpen);
                    socket.removeEventListener("message", handleMessage);
                    socket.removeEventListener("close", closeMessage);
                    socket.removeEventListener("error", closeMessage);
                    socket.haVersion = message.ha_version;
                    if (atLeastHaVersion(socket.haVersion, 2022, 9)) {
                        socket.send(JSON.stringify(supportedFeatures()));
                    }
                    promResolve(socket);
                    break;
            }
        };
        socket.addEventListener("open", handleOpen);
        socket.addEventListener("message", handleMessage);
        socket.addEventListener("close", closeMessage);
        socket.addEventListener("error", closeMessage);
    }
    return new Promise((resolve, reject) => connect(options.setupRetry, resolve, reject));
}

/**
 * Connection that wraps a socket and provides an interface to interact with
 * the Home Assistant websocket API.
 */
class Connection {
    constructor(socket, options) {
        this._handleMessage = (event) => {
            let messageGroup = JSON.parse(event.data);
            if (!Array.isArray(messageGroup)) {
                messageGroup = [messageGroup];
            }
            messageGroup.forEach((message) => {
                const info = this.commands.get(message.id);
                switch (message.type) {
                    case "event":
                        if (info) {
                            info.callback(message.event);
                        }
                        else {
                            console.warn(`Received event for unknown subscription ${message.id}. Unsubscribing.`);
                            this.sendMessagePromise(unsubscribeEvents(message.id)).catch((err) => {
                            });
                        }
                        break;
                    case "result":
                        // No info is fine. If just sendMessage is used, we did not store promise for result
                        if (info) {
                            if (message.success) {
                                info.resolve(message.result);
                                // Don't remove subscriptions.
                                if (!("subscribe" in info)) {
                                    this.commands.delete(message.id);
                                }
                            }
                            else {
                                info.reject(message.error);
                                this.commands.delete(message.id);
                            }
                        }
                        break;
                    case "pong":
                        if (info) {
                            info.resolve();
                            this.commands.delete(message.id);
                        }
                        else {
                            console.warn(`Received unknown pong response ${message.id}`);
                        }
                        break;
                }
            });
        };
        this._handleClose = async () => {
            const oldCommands = this.commands;
            // reset to original state except haVersion
            this.commandId = 1;
            this.oldSubscriptions = this.commands;
            this.commands = new Map();
            this.socket = undefined;
            // Reject in-flight sendMessagePromise requests
            oldCommands.forEach((info) => {
                // We don't cancel subscribeEvents commands in flight
                // as we will be able to recover them.
                if (!("subscribe" in info)) {
                    info.reject(error(ERR_CONNECTION_LOST, "Connection lost"));
                }
            });
            if (this.closeRequested) {
                return;
            }
            this.fireEvent("disconnected");
            // Disable setupRetry, we control it here with auto-backoff
            const options = Object.assign(Object.assign({}, this.options), { setupRetry: 0 });
            const reconnect = (tries) => {
                setTimeout(async () => {
                    if (this.closeRequested) {
                        return;
                    }
                    try {
                        const socket = await options.createSocket(options);
                        this._setSocket(socket);
                    }
                    catch (err) {
                        if (this._queuedMessages) {
                            const queuedMessages = this._queuedMessages;
                            this._queuedMessages = undefined;
                            for (const msg of queuedMessages) {
                                if (msg.reject) {
                                    msg.reject(ERR_CONNECTION_LOST);
                                }
                            }
                        }
                        if (err === ERR_INVALID_AUTH) {
                            this.fireEvent("reconnect-error", err);
                        }
                        else {
                            reconnect(tries + 1);
                        }
                    }
                }, Math.min(tries, 5) * 1000);
            };
            if (this.suspendReconnectPromise) {
                await this.suspendReconnectPromise;
                this.suspendReconnectPromise = undefined;
                // For the first retry after suspend, we will queue up
                // all messages.
                this._queuedMessages = [];
            }
            reconnect(0);
        };
        // connection options
        //  - setupRetry: amount of ms to retry when unable to connect on initial setup
        //  - createSocket: create a new Socket connection
        this.options = options;
        // id if next command to send
        this.commandId = 2; // socket may send 1 at the start to enable features
        // info about active subscriptions and commands in flight
        this.commands = new Map();
        // map of event listeners
        this.eventListeners = new Map();
        // true if a close is requested by the user
        this.closeRequested = false;
        this._setSocket(socket);
    }
    get connected() {
        // Using conn.socket.OPEN instead of WebSocket for better node support
        return (this.socket !== undefined && this.socket.readyState == this.socket.OPEN);
    }
    _setSocket(socket) {
        this.socket = socket;
        this.haVersion = socket.haVersion;
        socket.addEventListener("message", this._handleMessage);
        socket.addEventListener("close", this._handleClose);
        const oldSubscriptions = this.oldSubscriptions;
        if (oldSubscriptions) {
            this.oldSubscriptions = undefined;
            oldSubscriptions.forEach((info) => {
                if ("subscribe" in info && info.subscribe) {
                    info.subscribe().then((unsub) => {
                        info.unsubscribe = unsub;
                        // We need to resolve this in case it wasn't resolved yet.
                        // This allows us to subscribe while we're disconnected
                        // and recover properly.
                        info.resolve();
                    });
                }
            });
        }
        const queuedMessages = this._queuedMessages;
        if (queuedMessages) {
            this._queuedMessages = undefined;
            for (const queuedMsg of queuedMessages) {
                queuedMsg.resolve();
            }
        }
        this.fireEvent("ready");
    }
    addEventListener(eventType, callback) {
        let listeners = this.eventListeners.get(eventType);
        if (!listeners) {
            listeners = [];
            this.eventListeners.set(eventType, listeners);
        }
        listeners.push(callback);
    }
    removeEventListener(eventType, callback) {
        const listeners = this.eventListeners.get(eventType);
        if (!listeners) {
            return;
        }
        const index = listeners.indexOf(callback);
        if (index !== -1) {
            listeners.splice(index, 1);
        }
    }
    fireEvent(eventType, eventData) {
        (this.eventListeners.get(eventType) || []).forEach((callback) => callback(this, eventData));
    }
    suspendReconnectUntil(suspendPromise) {
        this.suspendReconnectPromise = suspendPromise;
    }
    suspend() {
        if (!this.suspendReconnectPromise) {
            throw new Error("Suspend promise not set");
        }
        if (this.socket) {
            this.socket.close();
        }
    }
    /**
     * Reconnect the websocket connection.
     * @param force discard old socket instead of gracefully closing it.
     */
    reconnect(force = false) {
        if (!this.socket) {
            return;
        }
        if (!force) {
            this.socket.close();
            return;
        }
        this.socket.removeEventListener("message", this._handleMessage);
        this.socket.removeEventListener("close", this._handleClose);
        this.socket.close();
        this._handleClose();
    }
    close() {
        this.closeRequested = true;
        if (this.socket) {
            this.socket.close();
        }
    }
    /**
     * Subscribe to a specific or all events.
     *
     * @param callback Callback  to be called when a new event fires
     * @param eventType
     * @returns promise that resolves to an unsubscribe function
     */
    async subscribeEvents(callback, eventType) {
        return this.subscribeMessage(callback, subscribeEvents(eventType));
    }
    ping() {
        return this.sendMessagePromise(ping());
    }
    sendMessage(message, commandId) {
        if (!this.connected) {
            throw ERR_CONNECTION_LOST;
        }
        if (this._queuedMessages) {
            if (commandId) {
                throw new Error("Cannot queue with commandId");
            }
            this._queuedMessages.push({ resolve: () => this.sendMessage(message) });
            return;
        }
        if (!commandId) {
            commandId = this._genCmdId();
        }
        message.id = commandId;
        this.socket.send(JSON.stringify(message));
    }
    sendMessagePromise(message) {
        return new Promise((resolve, reject) => {
            if (this._queuedMessages) {
                this._queuedMessages.push({
                    reject,
                    resolve: async () => {
                        try {
                            resolve(await this.sendMessagePromise(message));
                        }
                        catch (err) {
                            reject(err);
                        }
                    },
                });
                return;
            }
            const commandId = this._genCmdId();
            this.commands.set(commandId, { resolve, reject });
            this.sendMessage(message, commandId);
        });
    }
    /**
     * Call a websocket command that starts a subscription on the backend.
     *
     * @param message the message to start the subscription
     * @param callback the callback to be called when a new item arrives
     * @param [options.resubscribe] re-established a subscription after a reconnect. Defaults to true.
     * @returns promise that resolves to an unsubscribe function
     */
    async subscribeMessage(callback, subscribeMessage, options) {
        if (this._queuedMessages) {
            await new Promise((resolve, reject) => {
                this._queuedMessages.push({ resolve, reject });
            });
        }
        let info;
        await new Promise((resolve, reject) => {
            // Command ID that will be used
            const commandId = this._genCmdId();
            // We store unsubscribe on info object. That way we can overwrite it in case
            // we get disconnected and we have to subscribe again.
            info = {
                resolve,
                reject,
                callback,
                subscribe: (options === null || options === void 0 ? void 0 : options.resubscribe) !== false
                    ? () => this.subscribeMessage(callback, subscribeMessage)
                    : undefined,
                unsubscribe: async () => {
                    // No need to unsubscribe if we're disconnected
                    if (this.connected) {
                        await this.sendMessagePromise(unsubscribeEvents(commandId));
                    }
                    this.commands.delete(commandId);
                },
            };
            this.commands.set(commandId, info);
            try {
                this.sendMessage(subscribeMessage, commandId);
            }
            catch (err) {
                // Happens when the websocket is already closing.
                // Don't have to handle the error, reconnect logic will pick it up.
            }
        });
        return () => info.unsubscribe();
    }
    _genCmdId() {
        return ++this.commandId;
    }
}

const genClientId = () => `${location.protocol}//${location.host}/`;
const genExpires = (expires_in) => {
    return expires_in * 1000 + Date.now();
};
function genRedirectUrl() {
    // Get current url but without # part.
    const { protocol, host, pathname, search } = location;
    return `${protocol}//${host}${pathname}${search}`;
}
function genAuthorizeUrl(hassUrl, clientId, redirectUrl, state) {
    let authorizeUrl = `${hassUrl}/auth/authorize?response_type=code&redirect_uri=${encodeURIComponent(redirectUrl)}`;
    if (clientId !== null) {
        authorizeUrl += `&client_id=${encodeURIComponent(clientId)}`;
    }
    if (state) {
        authorizeUrl += `&state=${encodeURIComponent(state)}`;
    }
    return authorizeUrl;
}
function redirectAuthorize(hassUrl, clientId, redirectUrl, state) {
    // Add either ?auth_callback=1 or &auth_callback=1
    redirectUrl += (redirectUrl.includes("?") ? "&" : "?") + "auth_callback=1";
    document.location.href = genAuthorizeUrl(hassUrl, clientId, redirectUrl, state);
}
async function tokenRequest(hassUrl, clientId, data) {
    // Browsers don't allow fetching tokens from https -> http.
    // Throw an error because it's a pain to debug this.
    // Guard against not working in node.
    const l = typeof location !== "undefined" && location;
    if (l && l.protocol === "https:") {
        // Ensure that the hassUrl is hosted on https.
        const a = document.createElement("a");
        a.href = hassUrl;
        if (a.protocol === "http:" && a.hostname !== "localhost") {
            throw ERR_INVALID_HTTPS_TO_HTTP;
        }
    }
    const formData = new FormData();
    if (clientId !== null) {
        formData.append("client_id", clientId);
    }
    Object.keys(data).forEach((key) => {
        // @ts-ignore
        formData.append(key, data[key]);
    });
    const resp = await fetch(`${hassUrl}/auth/token`, {
        method: "POST",
        credentials: "same-origin",
        body: formData,
    });
    if (!resp.ok) {
        throw resp.status === 400 /* auth invalid */ ||
            resp.status === 403 /* user not active */
            ? ERR_INVALID_AUTH
            : new Error("Unable to fetch tokens");
    }
    const tokens = await resp.json();
    tokens.hassUrl = hassUrl;
    tokens.clientId = clientId;
    tokens.expires = genExpires(tokens.expires_in);
    return tokens;
}
function fetchToken(hassUrl, clientId, code) {
    return tokenRequest(hassUrl, clientId, {
        code,
        grant_type: "authorization_code",
    });
}
function encodeOAuthState(state) {
    return btoa(JSON.stringify(state));
}
function decodeOAuthState(encoded) {
    return JSON.parse(atob(encoded));
}
class Auth {
    constructor(data, saveTokens) {
        this.data = data;
        this._saveTokens = saveTokens;
    }
    get wsUrl() {
        // Convert from http:// -> ws://, https:// -> wss://
        return `ws${this.data.hassUrl.substr(4)}/api/websocket`;
    }
    get accessToken() {
        return this.data.access_token;
    }
    get expired() {
        return Date.now() > this.data.expires;
    }
    /**
     * Refresh the access token.
     */
    async refreshAccessToken() {
        if (!this.data.refresh_token)
            throw new Error("No refresh_token");
        const data = await tokenRequest(this.data.hassUrl, this.data.clientId, {
            grant_type: "refresh_token",
            refresh_token: this.data.refresh_token,
        });
        // Access token response does not contain refresh token.
        data.refresh_token = this.data.refresh_token;
        this.data = data;
        if (this._saveTokens)
            this._saveTokens(data);
    }
    /**
     * Revoke the refresh & access tokens.
     */
    async revoke() {
        if (!this.data.refresh_token)
            throw new Error("No refresh_token to revoke");
        const formData = new FormData();
        formData.append("token", this.data.refresh_token);
        // There is no error checking, as revoke will always return 200
        await fetch(`${this.data.hassUrl}/auth/revoke`, {
            method: "POST",
            credentials: "same-origin",
            body: formData,
        });
        if (this._saveTokens) {
            this._saveTokens(null);
        }
    }
}
function createLongLivedTokenAuth(hassUrl, access_token) {
    return new Auth({
        hassUrl,
        clientId: null,
        expires: Date.now() + 1e11,
        refresh_token: "",
        access_token,
        expires_in: 1e11,
    });
}
async function getAuth(options = {}) {
    let data;
    let hassUrl = options.hassUrl;
    // Strip trailing slash.
    if (hassUrl && hassUrl[hassUrl.length - 1] === "/") {
        hassUrl = hassUrl.substr(0, hassUrl.length - 1);
    }
    const clientId = options.clientId !== undefined ? options.clientId : genClientId();
    const limitHassInstance = options.limitHassInstance === true;
    // Use auth code if it was passed in
    if (options.authCode && hassUrl) {
        data = await fetchToken(hassUrl, clientId, options.authCode);
        if (options.saveTokens) {
            options.saveTokens(data);
        }
    }
    // Check if we came back from an authorize redirect
    if (!data) {
        const query = parseQuery(location.search.substr(1));
        // Check if we got redirected here from authorize page
        if ("auth_callback" in query) {
            // Restore state
            const state = decodeOAuthState(query.state);
            if (limitHassInstance &&
                (state.hassUrl !== hassUrl || state.clientId !== clientId)) {
                throw ERR_INVALID_AUTH_CALLBACK;
            }
            data = await fetchToken(state.hassUrl, state.clientId, query.code);
            if (options.saveTokens) {
                options.saveTokens(data);
            }
        }
    }
    // Check for stored tokens
    if (!data && options.loadTokens) {
        data = await options.loadTokens();
    }
    if (data) {
        return new Auth(data, options.saveTokens);
    }
    if (hassUrl === undefined) {
        throw ERR_HASS_HOST_REQUIRED;
    }
    // If no tokens found but a hassUrl was passed in, let's go get some tokens!
    redirectAuthorize(hassUrl, clientId, options.redirectUrl || genRedirectUrl(), encodeOAuthState({
        hassUrl,
        clientId,
    }));
    // Just don't resolve while we navigate to next page
    return new Promise(() => { });
}

const createStore = (state) => {
    let listeners = [];
    function unsubscribe(listener) {
        let out = [];
        for (let i = 0; i < listeners.length; i++) {
            if (listeners[i] === listener) {
                listener = null;
            }
            else {
                out.push(listeners[i]);
            }
        }
        listeners = out;
    }
    function setState(update, overwrite) {
        state = overwrite ? update : Object.assign(Object.assign({}, state), update);
        let currentListeners = listeners;
        for (let i = 0; i < currentListeners.length; i++) {
            currentListeners[i](state);
        }
    }
    /**
     * An observable state container, returned from {@link createStore}
     * @name store
     */
    return {
        get state() {
            return state;
        },
        /**
         * Create a bound copy of the given action function.
         * The bound returned function invokes action() and persists the result back to the store.
         * If the return value of `action` is a Promise, the resolved value will be used as state.
         * @param {Function} action	An action of the form `action(state, ...args) -> stateUpdate`
         * @returns {Function} boundAction()
         */
        action(action) {
            function apply(result) {
                setState(result, false);
            }
            // Note: perf tests verifying this implementation: https://esbench.com/bench/5a295e6299634800a0349500
            return function () {
                let args = [state];
                for (let i = 0; i < arguments.length; i++)
                    args.push(arguments[i]);
                // @ts-ignore
                let ret = action.apply(this, args);
                if (ret != null) {
                    return ret instanceof Promise ? ret.then(apply) : apply(ret);
                }
            };
        },
        /**
         * Apply a partial state object to the current state, invoking registered listeners.
         * @param {Object} update				An object with properties to be merged into state
         * @param {Boolean} [overwrite=false]	If `true`, update will replace state instead of being merged into it
         */
        setState,
        clearState() {
            state = undefined;
        },
        /**
         * Register a listener function to be called whenever state is changed. Returns an `unsubscribe()` function.
         * @param {Function} listener	A function to call when state changes. Gets passed the new state.
         * @returns {Function} unsubscribe()
         */
        subscribe(listener) {
            listeners.push(listener);
            return () => {
                unsubscribe(listener);
            };
        },
        // /**
        //  * Remove a previously-registered listener function.
        //  * @param {Function} listener	The callback previously passed to `subscribe()` that should be removed.
        //  * @function
        //  */
        // unsubscribe,
    };
};

// Time to wait to unsubscribe from updates after last subscriber unsubscribes
const UNSUB_GRACE_PERIOD = 5000; // 5 seconds
/**
 *
 * @param conn connection
 * @param key the key to store it on the connection. Must be unique for each collection.
 * @param fetchCollection fetch the current state. If undefined assumes subscribeUpdates receives current state
 * @param subscribeUpdates subscribe to updates on the current state
 * @returns
 */
const getCollection = (conn, key, fetchCollection, subscribeUpdates, options = { unsubGrace: true }) => {
    // @ts-ignore
    if (conn[key]) {
        // @ts-ignore
        return conn[key];
    }
    let active = 0;
    let unsubProm;
    let unsubTimer;
    let store = createStore();
    const refresh = () => {
        if (!fetchCollection) {
            throw new Error("Collection does not support refresh");
        }
        return fetchCollection(conn).then((state) => store.setState(state, true));
    };
    const refreshSwallow = () => refresh().catch((err) => {
        // Swallow errors if socket is connecting, closing or closed.
        // We will automatically call refresh again when we re-establish the connection.
        if (conn.connected) {
            throw err;
        }
    });
    const setupUpdateSubscription = () => {
        if (unsubTimer !== undefined) {
            clearTimeout(unsubTimer);
            unsubTimer = undefined;
            return;
        }
        if (subscribeUpdates) {
            unsubProm = subscribeUpdates(conn, store);
        }
        if (fetchCollection) {
            // Fetch when connection re-established.
            conn.addEventListener("ready", refreshSwallow);
            refreshSwallow();
        }
        conn.addEventListener("disconnected", handleDisconnect);
    };
    const teardownUpdateSubscription = () => {
        unsubTimer = undefined;
        // Unsubscribe from changes
        if (unsubProm)
            unsubProm.then((unsub) => {
                unsub();
            });
        store.clearState();
        conn.removeEventListener("ready", refresh);
        conn.removeEventListener("disconnected", handleDisconnect);
    };
    const scheduleTeardownUpdateSubscription = () => {
        unsubTimer = setTimeout(teardownUpdateSubscription, UNSUB_GRACE_PERIOD);
    };
    const handleDisconnect = () => {
        // If we're going to unsubscribe and then lose connection,
        // just unsubscribe immediately.
        if (unsubTimer) {
            clearTimeout(unsubTimer);
            teardownUpdateSubscription();
        }
    };
    // @ts-ignore
    conn[key] = {
        get state() {
            return store.state;
        },
        refresh,
        subscribe(subscriber) {
            active++;
            // If this was the first subscriber, attach collection
            if (active === 1) {
                setupUpdateSubscription();
            }
            const unsub = store.subscribe(subscriber);
            if (store.state !== undefined) {
                // Don't call it right away so that caller has time
                // to initialize all the things.
                setTimeout(() => subscriber(store.state), 0);
            }
            return () => {
                unsub();
                active--;
                if (!active) {
                    options.unsubGrace
                        ? scheduleTeardownUpdateSubscription()
                        : teardownUpdateSubscription();
                }
            };
        },
    };
    // @ts-ignore
    return conn[key];
};
// Legacy name. It gets a collection and subscribes.
const createCollection = (key, fetchCollection, subscribeUpdates, conn, onChange) => getCollection(conn, key, fetchCollection, subscribeUpdates).subscribe(onChange);

const getStates = (connection) => connection.sendMessagePromise(states());
const getServices = (connection) => connection.sendMessagePromise(services());
const getConfig = (connection) => connection.sendMessagePromise(config());
const getUser = (connection) => connection.sendMessagePromise(user());
const callService = (connection, domain, service, serviceData, target, returnResponse) => connection.sendMessagePromise(callService$1(domain, service, serviceData, target, returnResponse));

function processComponentLoaded(state, event) {
    if (state === undefined)
        return null;
    return {
        components: state.components.concat(event.data.component),
    };
}
const fetchConfig = (conn) => getConfig(conn);
const subscribeUpdates$1 = (conn, store) => Promise.all([
    conn.subscribeEvents(store.action(processComponentLoaded), "component_loaded"),
    conn.subscribeEvents(() => fetchConfig(conn).then((config) => store.setState(config, true)), "core_config_updated"),
]).then((unsubs) => () => unsubs.forEach((unsub) => unsub()));
const configColl = (conn) => getCollection(conn, "_cnf", fetchConfig, subscribeUpdates$1);
const subscribeConfig = (conn, onChange) => configColl(conn).subscribe(onChange);

function processEvent(store, updates) {
    const state = Object.assign({}, store.state);
    if (updates.a) {
        for (const entityId in updates.a) {
            const newState = updates.a[entityId];
            let last_changed = new Date(newState.lc * 1000).toISOString();
            state[entityId] = {
                entity_id: entityId,
                state: newState.s,
                attributes: newState.a,
                context: typeof newState.c === "string"
                    ? { id: newState.c, parent_id: null, user_id: null }
                    : newState.c,
                last_changed: last_changed,
                last_updated: newState.lu
                    ? new Date(newState.lu * 1000).toISOString()
                    : last_changed,
            };
        }
    }
    if (updates.r) {
        for (const entityId of updates.r) {
            delete state[entityId];
        }
    }
    if (updates.c) {
        for (const entityId in updates.c) {
            let entityState = state[entityId];
            if (!entityState) {
                console.warn("Received state update for unknown entity", entityId);
                continue;
            }
            entityState = Object.assign({}, entityState);
            const { "+": toAdd, "-": toRemove } = updates.c[entityId];
            const attributesChanged = (toAdd === null || toAdd === void 0 ? void 0 : toAdd.a) || (toRemove === null || toRemove === void 0 ? void 0 : toRemove.a);
            const attributes = attributesChanged
                ? Object.assign({}, entityState.attributes) : entityState.attributes;
            if (toAdd) {
                if (toAdd.s !== undefined) {
                    entityState.state = toAdd.s;
                }
                if (toAdd.c) {
                    if (typeof toAdd.c === "string") {
                        entityState.context = Object.assign(Object.assign({}, entityState.context), { id: toAdd.c });
                    }
                    else {
                        entityState.context = Object.assign(Object.assign({}, entityState.context), toAdd.c);
                    }
                }
                if (toAdd.lc) {
                    entityState.last_updated = entityState.last_changed = new Date(toAdd.lc * 1000).toISOString();
                }
                else if (toAdd.lu) {
                    entityState.last_updated = new Date(toAdd.lu * 1000).toISOString();
                }
                if (toAdd.a) {
                    Object.assign(attributes, toAdd.a);
                }
            }
            if (toRemove === null || toRemove === void 0 ? void 0 : toRemove.a) {
                for (const key of toRemove.a) {
                    delete attributes[key];
                }
            }
            if (attributesChanged) {
                entityState.attributes = attributes;
            }
            state[entityId] = entityState;
        }
    }
    store.setState(state, true);
}
const subscribeUpdates = (conn, store) => conn.subscribeMessage((ev) => processEvent(store, ev), {
    type: "subscribe_entities",
});
function legacyProcessEvent(store, event) {
    const state = store.state;
    if (state === undefined)
        return;
    const { entity_id, new_state } = event.data;
    if (new_state) {
        store.setState({ [new_state.entity_id]: new_state });
    }
    else {
        const newEntities = Object.assign({}, state);
        delete newEntities[entity_id];
        store.setState(newEntities, true);
    }
}
async function legacyFetchEntities(conn) {
    const states = await getStates(conn);
    const entities = {};
    for (let i = 0; i < states.length; i++) {
        const state = states[i];
        entities[state.entity_id] = state;
    }
    return entities;
}
const legacySubscribeUpdates = (conn, store) => conn.subscribeEvents((ev) => legacyProcessEvent(store, ev), "state_changed");
const entitiesColl = (conn) => atLeastHaVersion(conn.haVersion, 2022, 4, 0)
    ? getCollection(conn, "_ent", undefined, subscribeUpdates)
    : getCollection(conn, "_ent", legacyFetchEntities, legacySubscribeUpdates);
const subscribeEntities = (conn, onChange) => entitiesColl(conn).subscribe(onChange);

// JS extensions in imports allow tsc output to be consumed by browsers.
async function createConnection(options) {
    const connOptions = Object.assign({ setupRetry: 0, createSocket }, options);
    const socket = await connOptions.createSocket(connOptions);
    const conn = new Connection(socket, connOptions);
    return conn;
}

const o$7 = typeof window < "u" ? window.localStorage : null, t$4 = o$7 !== null;
function l$5() {
  t$4 ? o$7.removeItem("hassTokens") : console.error("Local storage not supported on this device.");
}
function a$5(r) {
  if (t$4)
    try {
      o$7.setItem("hassTokens", JSON.stringify(r));
    } catch (s) {
      console.error("Failed to save tokens, probably due to private mode or storage full", s);
    }
  else
    console.error("Local storage not supported on this device.");
}
function c$5(r, s = true) {
  if (!t$4)
    return console.error("Local storage not supported on this device."), null;
  const n = o$7.getItem("hassTokens");
  if (n)
    try {
      const e = JSON.parse(n);
      if (e.hassUrl === r)
        return e;
      if (s)
        return l$5(), null;
    } catch (e) {
      return console.error("Error parsing stored tokens.", e?.message || ""), l$5(), null;
    }
  return null;
}

const n$a = (e, a, o) => {
  const c = e[a];
  return c ? typeof c == "function" ? c() : Promise.resolve(c) : new Promise((f, s) => {
    (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(
      s.bind(
        null,
        new Error(
          "Unknown variable dynamic import: " + a + (a.split("/").length !== o ? ". Note that variables only represent file names one level deep." : "")
        )
      )
    );
  });
}, d$a = {}, h$3 = [
  {
    code: "af",
    hash: "14247a2bcb1b9b9c5c2966cc0eaeccf2",
    name: "Afrikaans"
  },
  {
    code: "ar",
    hash: "26a62c7251ed0498cb76bd1d548e07c3",
    name: "العربية"
  },
  {
    code: "bg",
    hash: "6b09fa419179a42b3b6e28e05ab6fbd6",
    name: "Български"
  },
  {
    code: "bn",
    hash: "6790cee1eca3dc1004fe2070972dc1e5",
    name: "বাংলা"
  },
  {
    code: "bs",
    hash: "0b5bc8d41fe38db0d9ea96c18b0b6f42",
    name: "Bosanski"
  },
  {
    code: "ca",
    hash: "a7ec5cfe45de3abf34c09af4752544d1",
    name: "Català"
  },
  {
    code: "cs",
    hash: "348f5eb0ac8fdb2d3cd313a889b1dc71",
    name: "Čeština"
  },
  {
    code: "cy",
    hash: "5915dfc0205d59f5c2a24da737a03f54",
    name: "Cymraeg"
  },
  {
    code: "da",
    hash: "02d0cbf75d5eaa311c20990b8a83f459",
    name: "Dansk"
  },
  {
    code: "de",
    hash: "ae13a971749701e45cf0768d9f31ee85",
    name: "Deutsch"
  },
  {
    code: "el",
    hash: "aedf8a61790d24d44eef7b4d9eb52a8c",
    name: "Ελληνικά"
  },
  {
    code: "en",
    hash: "78671cd02dcd4c684a49184868cd09f7",
    name: "English"
  },
  {
    code: "en-GB",
    hash: "b180108c6ba3246ebd8cb11ed15cd52c",
    name: "English (GB)"
  },
  {
    code: "eo",
    hash: "16d471d3f53687b81d801a83fd70145b",
    name: "Esperanto"
  },
  {
    code: "es",
    hash: "732ff09b3fae53c8a03f9b54686be4e8",
    name: "Español"
  },
  {
    code: "es-419",
    hash: "23e7764bfae3fd4e491b5042fc0b397f",
    name: "Español (Latin America)"
  },
  {
    code: "et",
    hash: "ef1aec4de9330a6fb679b795ea0e3575",
    name: "Eesti"
  },
  {
    code: "eu",
    hash: "7ad43989ac35d43e21ca7319fc65bda5",
    name: "Euskara"
  },
  {
    code: "fa",
    hash: "9de96fd941e0e32503825ba2fe0f3f9c",
    name: "فارسی"
  },
  {
    code: "fi",
    hash: "770ee464bbd0125ca70c68f9fd42353e",
    name: "Suomi"
  },
  {
    code: "fy",
    hash: "8c4200852ea22718dcfd18d181c3e731",
    name: "Frysk"
  },
  {
    code: "fr",
    hash: "ca3b7b2e2f54b5dc832a914eea65f264",
    name: "Français"
  },
  {
    code: "ga",
    hash: "af88afd08b682d1acd2549fd4b9adb17",
    name: "Gaeilge"
  },
  {
    code: "gl",
    hash: "e249d04536670ea55c94b46f27255ca2",
    name: "Galego"
  },
  {
    code: "gsw",
    hash: "471862efce404a3bf86c93729d5b327f",
    name: "Schwiizerdütsch"
  },
  {
    code: "he",
    hash: "3830b1206fb408a8bc1285958765e04b",
    name: "עברית"
  },
  {
    code: "hi",
    hash: "7372a9c54617667563cc61a35bcc528f",
    name: "हिन्दी"
  },
  {
    code: "hr",
    hash: "1cf633216262f852b7a08b42874be63d",
    name: "Hrvatski"
  },
  {
    code: "hu",
    hash: "d247c7090c4bc254922dfd57f1fb09b4",
    name: "Magyar"
  },
  {
    code: "hy",
    hash: "6975461688d2598ce2111979d1d01056",
    name: "Հայերեն"
  },
  {
    code: "id",
    hash: "fd3c0def53488f14f0a436e28f83ba6e",
    name: "Indonesia"
  },
  {
    code: "it",
    hash: "116da93d7ebb77e85076a85ee00a0f4e",
    name: "Italiano"
  },
  {
    code: "is",
    hash: "fc5733b668e877ea779a799aab17ab2a",
    name: "Íslenska"
  },
  {
    code: "ja",
    hash: "b20ee6a24662d61ad788174f59768ef9",
    name: "日本語"
  },
  {
    code: "ka",
    hash: "24d4763f5226dece682f001d1a81dbda",
    name: "Kartuli"
  },
  {
    code: "ko",
    hash: "f61cf99049eef1f7bfc3f43002e82c2a",
    name: "한국어"
  },
  {
    code: "lb",
    hash: "603ecc882a805f45dbb6e199b3c87ec9",
    name: "Lëtzebuergesch"
  },
  {
    code: "lt",
    hash: "19abea26dfa26b01e58458877f924cf0",
    name: "Lietuvių"
  },
  {
    code: "lv",
    hash: "592c73369594a376c95ac982db7dcc23",
    name: "Latviešu"
  },
  {
    code: "mk",
    hash: "91db793989e78fbedef76993bc84017d",
    name: "Македонски"
  },
  {
    code: "ml",
    hash: "542f52de14959d511dcc1c2ec0753b2f",
    name: "മലയാളം"
  },
  {
    code: "nl",
    hash: "7dc6a0a9ee073f5a200fd77d74e91273",
    name: "Nederlands"
  },
  {
    code: "nb",
    hash: "283a45baf59283f9695453ac76e92c5c",
    name: "Norsk Bokmål"
  },
  {
    code: "nn",
    hash: "bdce0da5d354f48c7eb86bdc1a4cd99e",
    name: "Norsk Nynorsk"
  },
  {
    code: "pl",
    hash: "65e4af686d8003f6ec3dbef207e3496b",
    name: "Polski"
  },
  {
    code: "pt",
    hash: "8299462a1d6c5c2c3e30036007ab3a90",
    name: "Português"
  },
  {
    code: "pt-BR",
    hash: "1ce77a353384c818b422ea352623130e",
    name: "Português (BR)"
  },
  {
    code: "ro",
    hash: "e4fdbb8dd486adb630bf91bc45759a9a",
    name: "Română"
  },
  {
    code: "ru",
    hash: "bcc837f7c35d8b7fd5c4b8b132897937",
    name: "Русский"
  },
  {
    code: "sk",
    hash: "58f8de83036745be62359d3ff264bfd1",
    name: "Slovenčina"
  },
  {
    code: "sl",
    hash: "538f4f6d83a7c05aa6872dda2d587563",
    name: "Slovenščina"
  },
  {
    code: "sr",
    hash: "670d86891d9e37acf78b79c16abfc6ff",
    name: "Српски"
  },
  {
    code: "sr-Latn",
    hash: "595cab6303de725000903be1c92809cd",
    name: "Srpski"
  },
  {
    code: "sv",
    hash: "401d57686d2311d59e7d6bdd416443a6",
    name: "Svenska"
  },
  {
    code: "ta",
    hash: "f142f7a684b04549d63e465810daec49",
    name: "தமிழ்"
  },
  {
    code: "te",
    hash: "9790d7308be59a0e99e65ee9428597e2",
    name: "తెలుగు"
  },
  {
    code: "th",
    hash: "07c5e06dae4325ea15ac4290c99213b0",
    name: "ภาษาไทย"
  },
  {
    code: "tr",
    hash: "9989b01546a0cf87995b9a8e9f7889b6",
    name: "Türkçe"
  },
  {
    code: "uk",
    hash: "f5bd354d9528c0dd60066347d0a32a14",
    name: "Українська"
  },
  {
    code: "ur",
    hash: "420acff562577cdb9d8038fcec9714c2",
    name: "اُردُو"
  },
  {
    code: "vi",
    hash: "a6f8cc191910036de86db7ad33151fb8",
    name: "Tiếng Việt"
  },
  {
    code: "zh-Hans",
    hash: "c9dee5b0449cbde9c35b3a824bb3eafd",
    name: "简体中文"
  },
  {
    code: "zh-Hant",
    hash: "df0c2ecc8d0ca6da8cbcfc6bf11d41c7",
    name: "繁體中文"
  }
], m$9 = h$3.map((e) => ({
  ...e,
  async fetch() {
    const a = d$a[e.code];
    if (typeof a < "u") return a;
    const o = await n$a(/* @__PURE__ */ Object.assign({ "./af/af.json": () => __vitePreload(() => import('../af-ChyaDERO.js'),true?[]:void 0), "./ar/ar.json": () => __vitePreload(() => import('../ar-CawARbgY.js'),true?[]:void 0), "./bg/bg.json": () => __vitePreload(() => import('../bg-BAq2enuo.js'),true?[]:void 0), "./bn/bn.json": () => __vitePreload(() => import('../bn-FkJVlMOR.js'),true?[]:void 0), "./bs/bs.json": () => __vitePreload(() => import('../bs-CrAEVEWk.js'),true?[]:void 0), "./ca/ca.json": () => __vitePreload(() => import('../ca-DN3S46cw.js'),true?[]:void 0), "./cs/cs.json": () => __vitePreload(() => import('../cs-bbaASyT4.js'),true?[]:void 0), "./cy/cy.json": () => __vitePreload(() => import('../cy-DFJ0Ad8w.js'),true?[]:void 0), "./da/da.json": () => __vitePreload(() => import('../da-CMg18hUc.js'),true?[]:void 0), "./de/de.json": () => __vitePreload(() => import('../de-D4cLACIZ.js'),true?[]:void 0), "./el/el.json": () => __vitePreload(() => import('../el-5thfBlWc.js'),true?[]:void 0), "./en-GB/en-GB.json": () => __vitePreload(() => import('../en-GB-DIGZC2_f.js'),true?[]:void 0), "./en/en.json": () => __vitePreload(() => import('../en-DwKvBB9A.js'),true?[]:void 0), "./eo/eo.json": () => __vitePreload(() => import('../eo-8FxsrjxQ.js'),true?[]:void 0), "./es-419/es-419.json": () => __vitePreload(() => import('../es-419-DRbFWzEw.js'),true?[]:void 0), "./es/es.json": () => __vitePreload(() => import('../es-DrdXo2VH.js'),true?[]:void 0), "./et/et.json": () => __vitePreload(() => import('../et-CTXD4GI2.js'),true?[]:void 0), "./eu/eu.json": () => __vitePreload(() => import('../eu-BQqcblMD.js'),true?[]:void 0), "./fa/fa.json": () => __vitePreload(() => import('../fa-CfBsvk9-.js'),true?[]:void 0), "./fi/fi.json": () => __vitePreload(() => import('../fi-D5urPlNI.js'),true?[]:void 0), "./fr/fr.json": () => __vitePreload(() => import('../fr-BneGJTyY.js'),true?[]:void 0), "./fy/fy.json": () => __vitePreload(() => import('../fy-CpWuiCCP.js'),true?[]:void 0), "./ga/ga.json": () => __vitePreload(() => import('../ga-C0zacYJi.js'),true?[]:void 0), "./gl/gl.json": () => __vitePreload(() => import('../gl-D6umM3bg.js'),true?[]:void 0), "./gsw/gsw.json": () => __vitePreload(() => import('../gsw-b9zEzc-5.js'),true?[]:void 0), "./he/he.json": () => __vitePreload(() => import('../he-D9W8d3z5.js'),true?[]:void 0), "./hi/hi.json": () => __vitePreload(() => import('../hi-BE8VDBED.js'),true?[]:void 0), "./hr/hr.json": () => __vitePreload(() => import('../hr-DaV_0Pg4.js'),true?[]:void 0), "./hu/hu.json": () => __vitePreload(() => import('../hu-BKggPcPR.js'),true?[]:void 0), "./hy/hy.json": () => __vitePreload(() => import('../hy-DHZvDzVL.js'),true?[]:void 0), "./id/id.json": () => __vitePreload(() => import('../id-CbwUnRaU.js'),true?[]:void 0), "./is/is.json": () => __vitePreload(() => import('../is-BZZk9bBk.js'),true?[]:void 0), "./it/it.json": () => __vitePreload(() => import('../it-CBi9Crl8.js'),true?[]:void 0), "./ja/ja.json": () => __vitePreload(() => import('../ja-D8gzXlVX.js'),true?[]:void 0), "./ka/ka.json": () => __vitePreload(() => import('../ka-BU-t44TB.js'),true?[]:void 0), "./ko/ko.json": () => __vitePreload(() => import('../ko-DPSkyiT3.js'),true?[]:void 0), "./lb/lb.json": () => __vitePreload(() => import('../lb-DYEmmp_f.js'),true?[]:void 0), "./lt/lt.json": () => __vitePreload(() => import('../lt-4zFeN5RJ.js'),true?[]:void 0), "./lv/lv.json": () => __vitePreload(() => import('../lv-BRiNfC2m.js'),true?[]:void 0), "./mk/mk.json": () => __vitePreload(() => import('../mk-DPh69YaT.js'),true?[]:void 0), "./ml/ml.json": () => __vitePreload(() => import('../ml-DrFXLraP.js'),true?[]:void 0), "./nb/nb.json": () => __vitePreload(() => import('../nb-BtJ5v3tI.js'),true?[]:void 0), "./nl/nl.json": () => __vitePreload(() => import('../nl-BLFeoApm.js'),true?[]:void 0), "./nn/nn.json": () => __vitePreload(() => import('../nn-BSCjRjnF.js'),true?[]:void 0), "./pl/pl.json": () => __vitePreload(() => import('../pl-9gZ11NJD.js'),true?[]:void 0), "./pt-BR/pt-BR.json": () => __vitePreload(() => import('../pt-BR-CWvlfgl_.js'),true?[]:void 0), "./pt/pt.json": () => __vitePreload(() => import('../pt-XmZeE7AV.js'),true?[]:void 0), "./ro/ro.json": () => __vitePreload(() => import('../ro-CWlqqYgu.js'),true?[]:void 0), "./ru/ru.json": () => __vitePreload(() => import('../ru-BqVXGNyC.js'),true?[]:void 0), "./sk/sk.json": () => __vitePreload(() => import('../sk-BP_PCMbU.js'),true?[]:void 0), "./sl/sl.json": () => __vitePreload(() => import('../sl-CLjS32Nv.js'),true?[]:void 0), "./sr-Latn/sr-Latn.json": () => __vitePreload(() => import('../sr-Latn-C6O97QpR.js'),true?[]:void 0), "./sr/sr.json": () => __vitePreload(() => import('../sr-Bito0e82.js'),true?[]:void 0), "./sv/sv.json": () => __vitePreload(() => import('../sv-BSNhFI9i.js'),true?[]:void 0), "./ta/ta.json": () => __vitePreload(() => import('../ta-CbpSWDwj.js'),true?[]:void 0), "./te/te.json": () => __vitePreload(() => import('../te-CP2itq8R.js'),true?[]:void 0), "./th/th.json": () => __vitePreload(() => import('../th-zqr2_pei.js'),true?[]:void 0), "./tr/tr.json": () => __vitePreload(() => import('../tr-CLa_qI5v.js'),true?[]:void 0), "./uk/uk.json": () => __vitePreload(() => import('../uk-C9uTDGoK.js'),true?[]:void 0), "./ur/ur.json": () => __vitePreload(() => import('../ur-B4PmMORt.js'),true?[]:void 0), "./vi/vi.json": () => __vitePreload(() => import('../vi-BP9Rtu1L.js'),true?[]:void 0), "./zh-Hans/zh-Hans.json": () => __vitePreload(() => import('../zh-Hans-BVllTnCx.js'),true?[]:void 0), "./zh-Hant/zh-Hant.json": () => __vitePreload(() => import('../zh-Hant-K1pLbhQM.js'),true?[]:void 0) }), `./${e.code}/${e.code}.json`, 3);
    return d$a[e.code] = o.default, o.default;
  }
}));

const isDate = d => d instanceof Date;
const isEmpty = o => Object.keys(o).length === 0;
const isObject = o => o != null && typeof o === 'object';
const hasOwnProperty = (o, ...args) => Object.prototype.hasOwnProperty.call(o, ...args);
const isEmptyObject = (o) => isObject(o) && isEmpty(o);
const makeObjectWithoutPrototype = () => Object.create(null);

const diff = (lhs, rhs) => {
  if (lhs === rhs) return {}; // equal return no diff

  if (!isObject(lhs) || !isObject(rhs)) return rhs; // return updated rhs

  const deletedValues = Object.keys(lhs).reduce((acc, key) => {
    if (!hasOwnProperty(rhs, key)) {
      acc[key] = undefined;
      
    }

    return acc;
  }, makeObjectWithoutPrototype());

  if (isDate(lhs) || isDate(rhs)) {
    if (lhs.valueOf() == rhs.valueOf()) return {};
    return rhs;
  }

  return Object.keys(rhs).reduce((acc, key) => {
    if (!hasOwnProperty(lhs, key)){
      acc[key] = rhs[key]; // return added r key
      return acc;
    } 

    const difference = diff(lhs[key], rhs[key]);

    // If the difference is empty, and the lhs is an empty object or the rhs is not an empty object
    if (isEmptyObject(difference) && !isDate(difference) && (isEmptyObject(lhs[key]) || !isEmptyObject(rhs[key])))
      return acc; // return no diff

    acc[key] = difference; // return updated key
    return acc; // return updated key
  }, deletedValues);
};

const {createContext:a$4} = await importShared('react');
const u$9 = ["last_changed", "last_updated", "context"], l$4 = (t, e = u$9) => Object.fromEntries(
  Object.entries(t).map(([n, s]) => [
    n,
    Object.fromEntries(Object.entries(s).filter(([r]) => !e.includes(r)))
  ])
), p$6 = {
  xxs: 600,
  xs: 900,
  sm: 1200,
  md: 1536,
  lg: 1700,
  xlg: 1701
}, b$3 = create((t) => ({
  routes: [],
  setRoutes: (e) => t(() => ({ routes: e })),
  entities: {},
  setHassUrl: (e) => t({ hassUrl: e }),
  hassUrl: null,
  hash: "",
  locales: null,
  setLocales: (e) => t({ locales: e }),
  setHash: (e) => t({ hash: e }),
  setPortalRoot: (e) => t({ portalRoot: e }),
  windowContext: window,
  setWindowContext: (e) => t({ windowContext: e }),
  setEntities: (e) => t((n) => {
    const s = diff(l$4(n.entities), l$4(e));
    if (!lodashExports.isEmpty(s)) {
      const r = Object.keys(s).reduce(
        (o, i) => ({
          ...o,
          [i]: e[i]
        }),
        {}
      );
      return Object.keys(r).forEach((o) => {
        n.entities[o] = {
          ...n.entities[o],
          ...e[o]
        };
      }), n.ready ? {
        lastUpdated: /* @__PURE__ */ new Date(),
        entities: n.entities
      } : {
        ready: true,
        lastUpdated: /* @__PURE__ */ new Date(),
        entities: n.entities
      };
    }
    return n;
  }),
  connection: null,
  setConnection: (e) => t({ connection: e }),
  cannotConnect: false,
  setCannotConnect: (e) => t({ cannotConnect: e }),
  ready: false,
  setReady: (e) => t({ ready: e }),
  lastUpdated: /* @__PURE__ */ new Date(),
  setLastUpdated: (e) => t({ lastUpdated: e }),
  auth: null,
  setAuth: (e) => t({ auth: e }),
  config: null,
  setConfig: (e) => t({ config: e }),
  error: null,
  setError: (e) => t({ error: e }),
  breakpoints: p$6,
  setBreakpoints: (e) => t({
    breakpoints: {
      ...e,
      xlg: e.lg + 1
    }
  }),
  globalComponentStyles: {},
  setGlobalComponentStyles: (e) => t(() => ({ globalComponentStyles: e }))
})), h$2 = a$4({});

const T$6 = await importShared('react');

const {useContext:lt,useState:Ht,useEffect:C$3,forwardRef:$t,useRef:H$4,useCallback:v$3,memo:It,useMemo:xt} = await importShared('react');
const dt = await importShared('@emotion/styled');

const {keyframes:ne} = await importShared('@emotion/react');
function oe() {
  const e = lt(h$2);
  if (e === void 0 || lodashExports.isEmpty(e))
    throw new Error("useHass must be used within a HassProvider, have you wrapped your application in <HassConnect hassUrl={HASS_URL} />?");
  return e;
}
const I$2 = {};
function st(e) {
  Object.assign(I$2, e);
}
function ae(e, r) {
  const { search: o, replace: n, fallback: s } = r ?? {};
  return I$2[e] ? typeof o == "string" && typeof n == "string" ? I$2[e].replace(`${o}`, n).trim() : I$2[e] : s || e;
}
function Ie() {
  return I$2;
}
const xe = (e, r) => {
  const { fallback: o = ae("unknown") } = r ?? {}, [n, s] = Ht(o), { getConfig: l } = oe();
  return C$3(() => {
    (async () => {
      const i = (await l())?.language, p = m$9.find((f) => f.code === i);
      if (p) {
        const f = await p.fetch();
        s(f[e] ?? o);
      }
    })();
  }, [e, o, l]), n;
};
var q, ct;
function se$1() {
  if (ct) return q;
  ct = 1;
  var e = H$5, r = {
    childContextTypes: true,
    contextType: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromError: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
  }, o = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
  }, n = {
    $$typeof: true,
    render: true,
    defaultProps: true,
    displayName: true,
    propTypes: true
  }, s = {
    $$typeof: true,
    compare: true,
    defaultProps: true,
    displayName: true,
    propTypes: true,
    type: true
  }, l = {};
  l[e.ForwardRef] = n, l[e.Memo] = s;
  function a(g) {
    return e.isMemo(g) ? s : l[g.$$typeof] || r;
  }
  var i = Object.defineProperty, p = Object.getOwnPropertyNames, f = Object.getOwnPropertySymbols, U = Object.getOwnPropertyDescriptor, R = Object.getPrototypeOf, S = Object.prototype;
  function c(g, y, _) {
    if (typeof y != "string") {
      if (S) {
        var b = R(y);
        b && b !== S && c(g, b, _);
      }
      var A = p(y);
      f && (A = A.concat(f(y)));
      for (var m = a(g), j = a(y), P = 0; P < A.length; ++P) {
        var w = A[P];
        if (!o[w] && !(_ && _[w]) && !(j && j[w]) && !(m && m[w])) {
          var L = U(y, w);
          try {
            i(g, w, L);
          } catch {
          }
        }
      }
    }
    return g;
  }
  return q = c, q;
}
se$1();
var ce = function(r) {
  return r();
}, ie = T$6.useInsertionEffect ? T$6.useInsertionEffect : false, ue = ie || ce, mt = /* @__PURE__ */ T$6.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ createCache({
    key: "css"
  }) : null
);
mt.Provider;
var le = function(r) {
  return /* @__PURE__ */ $t(function(o, n) {
    var s = lt(mt);
    return r(o, s, n);
  });
}, fe = /* @__PURE__ */ T$6.createContext({}), F = {}.hasOwnProperty, Q = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", gt = function(r, o) {
  var n = {};
  for (var s in o)
    F.call(o, s) && (n[s] = o[s]);
  return n[Q] = r, n;
}, he = function(r) {
  var o = r.cache, n = r.serialized, s = r.isStringTag;
  return registerStyles(o, n, s), ue(function() {
    return insertStyles(o, n, s);
  }), null;
}, de = /* @__PURE__ */ le(function(e, r, o) {
  var n = e.css;
  typeof n == "string" && r.registered[n] !== void 0 && (n = r.registered[n]);
  var s = e[Q], l = [n], a = "";
  typeof e.className == "string" ? a = getRegisteredStyles(r.registered, l, e.className) : e.className != null && (a = e.className + " ");
  var i = serializeStyles(l, void 0, T$6.useContext(fe));
  a += r.key + "-" + i.name;
  var p = {};
  for (var f in e)
    F.call(e, f) && f !== "css" && f !== Q && (p[f] = e[f]);
  return p.className = a, o && (p.ref = o), /* @__PURE__ */ T$6.createElement(T$6.Fragment, null, /* @__PURE__ */ T$6.createElement(he, {
    cache: r,
    serialized: i,
    isStringTag: typeof s == "string"
  }), /* @__PURE__ */ T$6.createElement(s, p));
}), yt = de, it = jsxRuntimeExports.Fragment, E$5 = function(r, o, n) {
  return F.call(o, "css") ? jsxRuntimeExports.jsx(yt, gt(r, o), n) : jsxRuntimeExports.jsx(r, o, n);
}, G$2 = function(r, o, n) {
  return F.call(o, "css") ? jsxRuntimeExports.jsxs(yt, gt(r, o), n) : jsxRuntimeExports.jsxs(r, o, n);
};
function $(e, r) {
  const n = (() => {
    switch (e) {
      case ERR_INVALID_AUTH:
        return `ERR_INVALID_AUTH: Invalid authentication. ${r ? 'Check your "Long-Lived Access Token".' : ""}`;
      case ERR_CANNOT_CONNECT:
        return "ERR_CANNOT_CONNECT: Unable to connect";
      case ERR_CONNECTION_LOST:
        return "ERR_CONNECTION_LOST: Lost connection to home assistant.";
      case ERR_HASS_HOST_REQUIRED:
        return "ERR_HASS_HOST_REQUIRED: Please enter a Home Assistant URL.";
      case ERR_INVALID_HTTPS_TO_HTTP:
        return 'ERR_INVALID_HTTPS_TO_HTTP: Cannot connect to Home Assistant instances over "http://".';
      default:
        return null;
    }
  })();
  return n !== null ? n : e?.error || e?.message || `Unknown Error (${e})`;
}
function vt() {
  try {
    return window.top?.hassConnection;
  } catch (e) {
    console.error("Error getting inherited connection", e);
    return;
  }
}
function pe(e, r) {
  const o = location && location.search.includes("auth_callback=1"), n = !!vt(), s = !!r, l = !!c$5(e, false);
  switch (true) {
    case o:
      return "auth-callback";
    case n:
      return "inherited-auth";
    case s:
      return "provided-token";
    case l:
      return "saved-tokens";
    default:
      return "user-request";
  }
}
const Et = async (e, r) => {
  const o = pe(e, r);
  if (o === "inherited-auth")
    try {
      const { auth: a, conn: i } = await vt();
      return {
        type: "success",
        connection: i,
        auth: a
      };
    } catch (a) {
      return {
        type: "error",
        error: $(a, r)
      };
    }
  if (o === "provided-token" && r)
    try {
      const a = await createLongLivedTokenAuth(e, r);
      return {
        type: "success",
        connection: await createConnection({ auth: a }),
        auth: a
      };
    } catch (a) {
      return {
        type: "error",
        error: $(a, r)
      };
    }
  const n = {
    saveTokens: a$5,
    loadTokens: () => Promise.resolve(c$5(e))
  };
  if (e && o === "user-request") {
    if (n.hassUrl = e, n.hassUrl === "")
      return {
        type: "error",
        error: "Please enter a Home Assistant URL."
      };
    if (n.hassUrl.indexOf("://") === -1)
      return {
        type: "error",
        error: "Please enter your full URL, including the protocol part (https://)."
      };
    try {
      new URL(n.hassUrl);
    } catch (a) {
      return console.log("Error:", a), {
        type: "error",
        error: "Invalid URL"
      };
    }
  }
  let s;
  try {
    s = await getAuth(n);
  } catch (a) {
    return a?.error === "invalid_grant" ? (l$5(), Et(e, r)) : o === "saved-tokens" && a === ERR_CANNOT_CONNECT ? {
      type: "failed",
      cannotConnect: true
    } : {
      type: "error",
      error: $(a, r)
    };
  } finally {
    location && location.search.includes("auth_callback=1") && history.replaceState(null, "", location.pathname);
  }
  let l;
  try {
    l = await createConnection({ auth: s });
  } catch (a) {
    if (o === "saved-tokens") {
      if (a === ERR_CANNOT_CONNECT)
        return {
          type: "failed",
          cannotConnect: true
        };
      a === ERR_INVALID_AUTH && a$5(null);
    }
    return {
      type: "error",
      error: $(a, r)
    };
  }
  return {
    type: "success",
    connection: l,
    auth: s
  };
};
function me({ children: e, hassUrl: r, hassToken: o, locale: n, portalRoot: s, windowContext: l }) {
  const a = H$4(null), i = H$4(false), p = H$4(false), f = b$3((t) => t.setHash), U = b$3((t) => t.hash), R = b$3((t) => t.routes), S = b$3((t) => t.setRoutes), c = b$3((t) => t.connection), g = b$3((t) => t.setConnection), y = H$4(null), _ = b$3((t) => t.entities), b = b$3((t) => t.setEntities), A = b$3((t) => t.error), m = b$3((t) => t.setError), j = b$3((t) => t.cannotConnect), P = b$3((t) => t.setCannotConnect), w = b$3((t) => t.setAuth), L = b$3((t) => t.ready), M = b$3((t) => t.setReady), N = b$3((t) => t.setConfig), J = b$3((t) => t.setHassUrl), K = b$3((t) => t.setPortalRoot), D = b$3((t) => t.setLocales), X = b$3((t) => t.setWindowContext);
  C$3(() => {
    s && K(s);
  }, [s, K]), C$3(() => {
    l && X(l);
  }, [l, X]);
  const Z = v$3(() => {
    w(null), g(null), y.current = null, b({}), N(null), m(null), P(false), M(false), S([]), i.current = false, a.current && (a.current(), a.current = null);
  }, [w, P, N, g, b, m, M, S]), tt = v$3(async () => {
    try {
      Z(), l$5(), location && location.reload();
    } catch (t) {
      console.log("Error:", t), m("Unable to log out!");
    }
  }, [Z, m]), wt = v$3(async () => {
    const t = await Et(r, o);
    t.type === "error" ? (i.current = false, m(t.error)) : t.type === "failed" ? (i.current = false, P(true)) : t.type === "success" && (w(t.auth), g(t.connection), y.current = t.connection, i.current = true);
  }, [r, o, m, w, g, P]);
  C$3(() => {
    J(r);
  }, [r, J]);
  const Ct = v$3(async () => c === null ? null : await getStates(c), [c]), Rt = v$3(async () => c === null ? null : await getServices(c), [c]), St = v$3(async () => c === null ? null : await getConfig(c), [c]), Tt = v$3(async () => c === null ? null : await getUser(c), [c]), bt = v$3(
    (t) => new URL(t, c?.options.auth?.data.hassUrl).toString(),
    [c]
  );
  async function Pt(t, d) {
    try {
      const u = await fetch(`${r}/api${t}`, {
        method: "GET",
        ...d ?? {},
        headers: {
          Authorization: "Bearer " + c?.options.auth?.accessToken,
          "Content-type": "application/json;charset=UTF-8",
          ...d?.headers ?? {}
        }
      });
      return u.status === 200 ? {
        status: "success",
        data: await u.json()
      } : {
        status: "error",
        data: u.statusText
      };
    } catch (u) {
      return console.log("Error:", u), {
        status: "error",
        data: `API Request failed for endpoint "${t}", follow instructions here: https://shannonhochkins.github.io/ha-component-kit/?path=/docs/core-hooks-usehass-hass-callapi--docs.`
      };
    }
  }
  const k = v$3(
    async (t) => {
      const d = m$9.find(({ code: u }) => u === (n ?? t?.language));
      if (d)
        return await d.fetch();
      throw new Error(
        `Locale "${n ?? t?.language}" not found, available options are "${m$9.map(({ code: u }) => `${u}`).join(", ")}"`
      );
    },
    [n]
  );
  C$3(() => {
    n && k(null).then((t) => {
      st(t), D(t);
    }).catch((t) => {
      m(`Error retrieving translations from Home Assistant: ${t?.message ?? t}`);
    });
  }, [n, k, D, m]), C$3(() => {
    if (!c || p.current) return;
    p.current = true;
    const t = subscribeConfig(c, (d) => {
      k(d).then((u) => {
        N(d), st(u), D(u);
      }).catch((u) => {
        N(d), m(`Error retrieving translations from Home Assistant: ${u?.message ?? u}`);
      });
    });
    return () => {
      t();
    };
  }, [c, D, k, N, m]), C$3(() => {
    location.hash !== "" && location.hash.replace("#", "") !== U && f(location.hash);
  }, [f, U]), C$3(() => {
    function t() {
      S(
        R.map((d) => d.hash === location.hash.replace("#", "") ? {
          ...d,
          active: true
        } : {
          ...d,
          active: false
        })
      ), f(location.hash);
    }
    return window.addEventListener("hashchange", t), () => {
      window.removeEventListener("hashchange", t);
    };
  }, [R, f, S]);
  const At = v$3(
    (t) => {
      if (!(R.find((u) => u.hash === t.hash) !== void 0) && typeof window < "u") {
        const u = window.location.hash.replace("#", ""), O = u !== "" && u === t.hash;
        S([
          ...R,
          {
            ...t,
            active: O
          }
        ]);
      }
    },
    [R, S]
  ), Ot = v$3(
    (t) => R.find((u) => u.hash === t) || null,
    [R]
  ), _t = v$3(() => _, [_]), Lt = v$3(
    async ({
      domain: t,
      service: d,
      serviceData: u,
      target: O,
      returnResponse: rt
    }) => {
      const Nt = typeof O == "string" || lodashExports.isArray(O) ? {
        entity_id: O
      } : O;
      if (typeof d != "string")
        throw new Error("service must be a string");
      if (c && L)
        try {
          const W = await callService(
            c,
            lodashExports.snakeCase(t),
            lodashExports.snakeCase(d),
            // purposely cast here as we know it's correct
            u,
            Nt,
            rt
          );
          return rt ? W : void 0;
        } catch (W) {
          console.log("Error:", W);
        }
    },
    [c, L]
  );
  C$3(() => {
    c && a.current === null && (a.current = subscribeEntities(c, (t) => {
      b(t);
    }));
  }, [c, b]), C$3(() => () => {
    i.current = false, a.current && (a.current(), a.current = null);
  }, []);
  const et = c$8(
    async () => {
      try {
        if (y.current && !c) {
          g(y.current), i.current = !0;
          return;
        }
        if (!y.current && c) {
          y.current = c, i.current = !0;
          return;
        }
        if (i.current) return;
        i.current = !0, await wt();
      } catch (t) {
        const d = $(t);
        m(`Unable to connect to Home Assistant, please check the URL: "${d}"`);
      }
    },
    100,
    {
      leading: true,
      trailing: false
    }
  );
  return C$3(() => {
    et();
  }, [et]), j ? /* @__PURE__ */ G$2("p", { children: [
    "Unable to connect to $",
    c$5(r).hassUrl,
    ", refresh the page and try again, or ",
    /* @__PURE__ */ E$5("a", { onClick: tt, children: "Logout" }),
    "."
  ] }) : /* @__PURE__ */ E$5(
    h$2.Provider,
    {
      value: {
        useStore: b$3,
        logout: tt,
        addRoute: At,
        getRoute: Ot,
        getStates: Ct,
        getServices: Rt,
        getConfig: St,
        getUser: Tt,
        callApi: Pt,
        getAllEntities: _t,
        // cast here we don't have to redefine all the overloads, might fix later
        callService: Lt,
        joinHassUrl: bt
      },
      children: A === null ? e(L) : A
    }
  );
}
const z = ne`
  0% {stroke-width:0; opacity:0;}
  50% {stroke-width:5; opacity:1;}
  100% {stroke-width:0; opacity:0;}
`;
function ge({ className: e }) {
  return /* @__PURE__ */ E$5("div", { className: e, children: /* @__PURE__ */ G$2("svg", { children: [
    /* @__PURE__ */ E$5("path", { d: "m 12.5,20 15,0 0,0 -15,0 z" }),
    /* @__PURE__ */ E$5("path", { d: "m 32.5,20 15,0 0,0 -15,0 z" }),
    /* @__PURE__ */ E$5("path", { d: "m 52.5,20 15,0 0,0 -15,0 z" }),
    /* @__PURE__ */ E$5("path", { d: "m 72.5,20 15,0 0,0 -15,0 z" })
  ] }) });
}
const ye = dt(ge)`
  position: fixed;
  inset: 0;
  background-color: #1a1a1a;
  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 6.25em;
    height: 3.125em;
    margin: -1.562em 0 0 -3.125em;
    path {
      fill: none;
      stroke: #f0c039;
      opacity: 0;
    }
    path:nth-of-type(1) {
      animation: ${z} 1s ease-in-out 0s infinite alternate;
    }
    path:nth-of-type(2) {
      animation: ${z} 1s ease-in-out 0.1s infinite alternate;
    }
    path:nth-of-type(3) {
      animation: ${z} 1s ease-in-out 0.2s infinite alternate;
    }
    path:nth-of-type(4) {
      animation: ${z} 1s ease-in-out 0.3s infinite alternate;
    }
  }
`, ut = dt.div`
  width: 100%;
  height: 100%;
`, Ue = It(function({
  children: r,
  hassUrl: o,
  hassToken: n,
  loading: s = /* @__PURE__ */ E$5(ye, {}),
  onReady: l,
  options: a = {}
}) {
  const i = H$4(false), p = xt(() => {
    try {
      return new URL(o).origin;
    } catch (f) {
      return console.log("Error:", f), null;
    }
  }, [o]);
  return !p || p === "null" || p === null ? /* @__PURE__ */ E$5(it, { children: "Provide the hassUrl prop with a valid url to your home assistant instance." }) : /* @__PURE__ */ E$5(me, { hassUrl: p, hassToken: n, ...a, children: (f) => /* @__PURE__ */ E$5(it, { children: f ? /* @__PURE__ */ G$2(ut, { children: [
    l && !i.current && (l(), i.current = true, null),
    r
  ] }) : /* @__PURE__ */ E$5(ut, { children: s }) }) });
});

const l$3 = (o, a) => {
  const t = m$a(o);
  switch (t) {
    case "plant":
      return ae("plant_status");
    case "switch":
      return a && a === "outlet" ? ae("outlet") : ae("switch");
    case "alarm_control_panel":
      return ae("alarm_panel");
    case "tts":
      return ae("text_to_speech");
    case "cloud":
      return ae("home_assistant_cloud");
    case "hassio":
      return ae("home_assistant") + " IO";
    case "frontend":
      return ae("home_assistant_frontend");
    case "homeassistant":
      return ae("home_assistant");
    case "lawn_mower":
      return ae("lawn_mower_commands");
    case "rest_command":
      return ae("restful_command");
    case "persistent_notification":
      return ae("persistent_notification");
    case "binary_sensor":
      return ae("binary_sensor");
    case "datetime":
      return ae("date_time");
    case "alert":
      return ae("alert_classes");
    case "water_heater":
      return `${ae("water")} ${ae("aux_heat")}`;
    case "stt":
    case "google":
    case "reolink":
    case "notify":
    case "zha":
    case "vacuum":
      return lodashExports.startCase(lodashExports.lowerCase(t));
    default: {
      const r = ae(t);
      return r === t ? lodashExports.startCase(lodashExports.lowerCase(t)) : r;
    }
  }
};

const r$4 = (t, e) => (t.supported_features & e) !== 0;

function f$4(a, u) {
  const o = a.getTime();
  if (isNaN(o))
    return console.error("Invalid timestamp"), "unknown";
  const m = new Intl.RelativeTimeFormat(u, { numeric: "auto" });
  let t;
  const n = [
    ["second", 60],
    ["minute", 60],
    ["hour", 24],
    ["day", 30],
    ["month", 12],
    ["year", 1 / 0]
  ], i = (o - (/* @__PURE__ */ new Date()).getTime()) / 1e3;
  let e = Math.abs(i);
  for (t = 0; t < n.length && !(e < n[t][1]); t++)
    e /= n[t][1];
  const r = m.format(Math.round(e) * (i < 0 ? -1 : 1), n[t][0]);
  return r === "now" ? "just now" : r;
}

const n$9 = "unavailable", t$3 = "unknown", A$2 = "on", o$6 = "off", S$5 = "°C", I$1 = "°F", _$8 = /* @__PURE__ */ new Set(["camera", "image", "media_player"]), i$2 = [A$2, o$6, n$9, t$3], s$6 = (a) => (c, e) => a.includes(c, e), T$5 = [n$9, t$3], N$1 = [n$9, t$3, o$6], l$2 = s$6(T$5), U$2 = s$6(N$1);

function w$2(t) {
  const r = m$a(t.entity_id), e = t.state;
  if (["button", "event", "input_button", "scene"].includes(r))
    return e !== n$9;
  if (l$2(e) || e === o$6 && r !== "alert")
    return false;
  switch (r) {
    case "alarm_control_panel":
      return e !== "disarmed";
    case "alert":
      return e !== "idle";
    case "cover":
      return e !== "closed";
    case "device_tracker":
    case "person":
      return e !== "not_home";
    case "lawn_mower":
      return ["mowing", "error"].includes(e);
    case "lock":
      return e !== "locked";
    case "media_player":
      return e !== "standby";
    case "vacuum":
      return !["idle", "docked", "paused"].includes(e);
    case "plant":
      return e === "problem";
    case "group":
      return ["on", "home", "open", "locked", "problem"].includes(e);
    case "timer":
      return e === "active";
    case "camera":
      return e === "streaming";
  }
  return true;
}

function a$3(i) {
  return i ? lodashExports.join(lodashExports.map(lodashExports.split(`${i}`, "_"), lodashExports.capitalize), " ") : "";
}

const u$8 = (i, t) => {
  const r = t?.display_precision;
  if (r != null)
    return {
      maximumFractionDigits: r,
      minimumFractionDigits: r
    };
  if (Number.isInteger(Number(i?.attributes?.step)) && Number.isInteger(Number(i?.state)))
    return { maximumFractionDigits: 0 };
}, a$2 = (i) => n$8(i.attributes), n$8 = (i, t) => !!i.unit_of_measurement || !!i.state_class || (t || []).includes(i.device_class || ""), m$8 = (i, t) => {
  const r = {
    maximumFractionDigits: 2,
    ...t
  };
  if (typeof i != "string")
    return r;
  if (!t || t.minimumFractionDigits === void 0 && t.maximumFractionDigits === void 0) {
    const e = i.indexOf(".") > -1 ? i.split(".")[1].length : 0;
    r.minimumFractionDigits = e, r.maximumFractionDigits = e;
  }
  return r;
}, s$5 = (i, t = 2) => Math.round(i * 10 ** t) / 10 ** t, c$4 = (i, t) => (Number.isNaN = Number.isNaN || function r(e) {
  return typeof e == "number" && r(e);
}, !Number.isNaN(Number(i)) && i !== "" ? new Intl.NumberFormat(
  "en-US",
  m$8(i, {
    ...t,
    useGrouping: false
  })
).format(Number(i)) : typeof i == "string" ? i : `${s$5(i, t?.maximumFractionDigits).toString()}${t?.style === "currency" ? ` ${t.currency}` : ""}`);

const I = {
  ms: 1,
  s: 1e3,
  min: 6e4,
  h: 36e5,
  d: 864e5
}, d$9 = (t, e) => u$7(parseFloat(t) * I[e]) || "0", o$5 = (t, e = 2) => {
  let r = "" + t;
  for (let n = 1; n < e; n++)
    r = parseInt(r) < 10 ** n ? `0${r}` : r;
  return r;
};
function u$7(t) {
  const e = Math.floor(t / 1e3 / 3600), r = Math.floor(t / 1e3 % 3600 / 60), n = Math.floor(t / 1e3 % 3600 % 60), a = Math.floor(t % 1e3);
  return e > 0 ? `${e}:${o$5(r)}:${o$5(n)}` : r > 0 ? `${r}:${o$5(n)}` : n > 0 || a > 0 ? `${n}${a > 0 ? `.${o$5(a, 3)}` : ""}` : null;
}
const N = /^\d{4}-(0[1-9]|1[0-2])-([12]\d|0[1-9]|3[01])[T| ](((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)(\8[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)$/, E$4 = (t) => N.test(t), m$7 = "^\\d{4}-(0[1-9]|1[0-2])-([12]\\d|0[1-9]|3[01])", f$3 = new RegExp(m$7 + "$"), D$4 = new RegExp(m$7), h$1 = (t, e = false) => e ? D$4.test(t) : f$3.test(t);
function L$2(t) {
  return t ? t instanceof Date && !isNaN(t.valueOf()) : false;
}
const s$4 = {}, c$3 = {}, i$1 = {}, S$4 = (t) => (s$4[t] || (s$4[t] = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
  timeZone: t
})), s$4[t]), l$1 = (t) => (c$3[t] || (c$3[t] = new Intl.DateTimeFormat("en-US", {
  hour: "numeric",
  minute: "2-digit",
  hourCycle: "h12",
  timeZone: t
})), c$3[t]), _$7 = (t) => (i$1[t] || (i$1[t] = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "2-digit",
  hourCycle: "h12",
  timeZone: t
})), i$1[t]), C$2 = (t, e) => S$4(e.time_zone).format(t), O$4 = (t, e) => l$1(e.time_zone).format(t), T$4 = (t, e) => _$7(e.time_zone).format(t);

const f$2 = /* @__PURE__ */ new Set([
  "temperature",
  "current_temperature",
  "target_temperature",
  "target_temp_temp",
  "target_temp_high",
  "target_temp_low",
  "target_temp_step",
  "min_temp",
  "max_temp"
]), g$8 = {
  light: {
    brightness: (e) => Math.round(e / 255 * 100).toString()
  },
  media_player: {
    volume_level: (e) => Math.round(e * 100).toString(),
    media_duration: (e) => d$9(e.toString(), "s")
  }
}, T$3 = {
  climate: {
    humidity: "%",
    current_humidity: "%",
    target_humidity_low: "%",
    target_humidity_high: "%",
    target_humidity_step: "%",
    min_humidity: "%",
    max_humidity: "%"
  },
  cover: {
    current_position: "%",
    current_tilt_position: "%"
  },
  fan: {
    percentage: "%"
  },
  humidifier: {
    humidity: "%",
    current_humidity: "%",
    min_humidity: "%",
    max_humidity: "%"
  },
  light: {
    color_temp: "mired",
    max_mireds: "mired",
    min_mireds: "mired",
    color_temp_kelvin: "K",
    min_color_temp_kelvin: "K",
    max_color_temp_kelvin: "K",
    brightness: "%"
  },
  sun: {
    azimuth: "°",
    elevation: "°"
  },
  vacuum: {
    battery_level: "%"
  },
  valve: {
    current_position: "%"
  },
  sensor: {
    battery_level: "%"
  },
  media_player: {
    volume_level: "%"
  }
}, v$2 = (e, n, m) => {
  const i = e.unit_system.length || "";
  switch (m) {
    case "visibility":
      return n.attributes.visibility_unit || i;
    case "precipitation":
      return n.attributes.precipitation_unit || (i === "km" ? "mm" : "in");
    case "pressure":
      return n.attributes.pressure_unit || (i === "km" ? "hPa" : "inHg");
    case "temperature":
    case "templow":
      return n.attributes.temperature_unit || e.unit_system.temperature;
    case "wind_speed":
      return n.attributes.wind_speed_unit || `${i}/h`;
    case "humidity":
    case "precipitation_probability":
      return "%";
    default: {
      const a = e.unit_system;
      return m in a ? a[m] : "";
    }
  }
}, A$1 = (e, n, m, i, a) => {
  const t = a !== void 0 ? a : e.attributes[i];
  if (t === null)
    return ae("unknown");
  if (typeof t == "number") {
    const r = m$a(e.entity_id), o = g$8[r]?.[i], s = o ? o(t) : c$4(t);
    let u = T$3[r]?.[i];
    return r === "weather" ? u = v$2(n, e, i) : f$2.has(i) && (u = n.unit_system.temperature), u ? `${s}${u}` : s;
  }
  if (typeof t == "string" && h$1(t, true)) {
    if (E$4(t)) {
      const o = new Date(t);
      if (L$2(o))
        return new Intl.DateTimeFormat("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "2-digit",
          second: "2-digit",
          hourCycle: "h12"
        }).format(o);
    }
    const r = new Date(t);
    if (L$2(r))
      return new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
      }).format(r);
  }
  return Array.isArray(t) && t.some((r) => r instanceof Object) || !Array.isArray(t) && t instanceof Object ? JSON.stringify(t) : Array.isArray(t) ? t.map((r) => A$1(e, n, m, i, r)).join(", ") : ae(t);
};

const K = (i, m, t, s, r) => {
  const e = s?.[i.entity_id];
  return g$7(
    m,
    t,
    e,
    i.entity_id,
    i.attributes,
    r !== void 0 ? r : i.state
  );
};
let u$6;
const S$3 = async (i) => u$6 || (u$6 = i.sendMessagePromise({
  type: "sensor/numeric_device_classes"
}), u$6);
let d$8 = [];
const g$7 = (i, m, t, s, r, e) => {
  if (e === t$3 || e === n$9)
    return ae(e);
  const o = m$a(s);
  if (S$3(i).then((n) => d$8 = n?.numeric_device_classes ?? []), n$8(r, o === "sensor" ? d$8 : [])) {
    const n = r.unit_of_measurement;
    if (r.device_class === "duration" && r.unit_of_measurement && I[n] && t?.display_precision === void 0)
      try {
        return d$9(e, n);
      } catch {
      }
    if (r.device_class === "monetary")
      try {
        return c$4(e, {
          style: "currency",
          currency: r.unit_of_measurement,
          minimumFractionDigits: 2,
          // Override monetary options with number format
          ...u$8({ state: e, attributes: r }, t)
        });
      } catch {
      }
    const c = c$4(e, u$8({ state: e, attributes: r }, t)), a = r.unit_of_measurement;
    return a ? `${c}${a}` : c;
  }
  if (o === "datetime") {
    const n = new Date(e);
    return T$4(n, m);
  }
  if (["date", "input_datetime", "time"].includes(o))
    try {
      const n = e.split(" ");
      if (n.length === 2)
        return T$4(new Date(n.join("T")), m);
      if (n.length === 1) {
        if (e.includes("-"))
          return C$2(/* @__PURE__ */ new Date(`${e}T00:00`), m);
        if (e.includes(":")) {
          const c = /* @__PURE__ */ new Date();
          return O$4(/* @__PURE__ */ new Date(`${c.toISOString().split("T")[0]}T${e}`), m);
        }
      }
      return e;
    } catch {
      return e;
    }
  if (o === "counter" || o === "number" || o === "input_number")
    return c$4(e, u$8({ state: e, attributes: r }, t));
  if (["button", "conversation", "event", "image", "input_button", "notify", "scene", "stt", "tag", "tts", "wake_word"].includes(o) || o === "sensor" && r.device_class === "timestamp")
    try {
      return T$4(new Date(e), m);
    } catch {
      return e;
    }
  return ae(e);
};

const {useCallback:n$7} = await importShared('react');
function k$1(t) {
  const { useStore: i } = oe(), r = i((o) => o.entities[t]);
  return n$7(
    (o) => {
      if (t === "unknown")
        return null;
      if (!r) {
        if (o)
          return null;
        throw new Error(`${ae("entity_not_found")} - "${t}"`);
      }
      return r;
    },
    [r, t]
  );
}

const {useMemo:p$5,useCallback:m$6} = await importShared('react');
function a$1(e, r, t) {
  return new Proxy(
    // @ts-expect-error - purposely not defining the target object here
    {},
    {
      get: (i, s) => {
        const n = s;
        if (n !== "toJSON")
          return function(f) {
            const { target: l, serviceData: u, returnResponse: o } = f || {};
            let c = t ?? l;
            return Array.isArray(c) && (c = [...lodashExports.uniq(c)]), console.info(
              `${ae("perform_action_name", {
                search: "{name}",
                replace: `${e}.${n}`
              })} ${e}.${n}:`,
              {
                target: c,
                serviceData: u,
                returnResponse: o
              }
            ), r({
              domain: e,
              service: n,
              serviceData: u,
              target: c,
              // necessary cast here as the overloads expect true | false | undefined not a boolean
              returnResponse: o
            });
          };
      }
    }
  );
}
function x$2(e, r) {
  const { callService: t } = oe(), i = p$5(() => e ? a$1(e, t, r) : void 0, [e, t, r]), s = m$6(
    (n) => a$1(n, t, r),
    [t, r]
  );
  return e ? i : s;
}

const g$6 = ["climate", "humidifier", "water_heater"], H$3 = ["climate", "humidifier", "input_datetime", "thermostat", "water_heater", "person", "device_tracker"], _$6 = [
  "temperature",
  "current_temperature",
  "target_temp_low",
  "target_temp_high",
  "hvac_action",
  "humidity",
  "mode",
  "action",
  "current_humidity"
], S$2 = (s) => s.substr(s.indexOf(".") + 1), b$2 = (s, i) => i?.friendly_name === void 0 ? S$2(s).replace(/_/g, " ") : i.friendly_name || "", E$3 = (s) => H$3.includes(m$a(s)), P$1 = ({
  connection: s,
  entityIds: i,
  callbackFunction: n,
  hoursToShow: e = 24,
  minimalResponse: t = true,
  significantChangesOnly: r = true,
  noAttributes: o
}) => {
  const u = {
    type: "history/stream",
    entity_ids: i,
    start_time: new Date((/* @__PURE__ */ new Date()).getTime() - 3600 * e * 1e3).toISOString(),
    minimal_response: t,
    significant_changes_only: r,
    no_attributes: o ?? !i.some((l) => E$3(l))
  }, a = new T$2(s, e);
  return s.subscribeMessage((l) => n(a.processMessage(l)), u);
};
let T$2 = class T {
  connection;
  hoursToShow;
  combinedHistory;
  constructor(i, n) {
    this.connection = i, this.hoursToShow = n, this.combinedHistory = {};
  }
  processMessage(i) {
    if (!this.combinedHistory || !Object.keys(this.combinedHistory).length)
      return this.combinedHistory = i.states, this.combinedHistory;
    if (!Object.keys(i.states).length)
      return this.combinedHistory;
    const n = this.hoursToShow ? ((/* @__PURE__ */ new Date()).getTime() - 60 * 60 * this.hoursToShow * 1e3) / 1e3 : void 0, e = {};
    for (const t of Object.keys(this.combinedHistory))
      e[t] = [];
    for (const t of Object.keys(i.states))
      e[t] = [];
    for (const t of Object.keys(e)) {
      if (t in this.combinedHistory && t in i.states) {
        const r = this.combinedHistory[t], o = r[r.length - 1];
        e[t] = r.concat(i.states[t]), i.states[t][0].lu < o.lu && (e[t] = e[t].sort((u, a) => u.lu - a.lu));
      } else t in this.combinedHistory ? e[t] = this.combinedHistory[t] : e[t] = i.states[t];
      if (n && t in this.combinedHistory) {
        const r = e[t].filter((u) => u.lu < n);
        if (!r.length || (e[t] = e[t].filter((u) => u.lu >= n), e[t].length && e[t][0].lu === n))
          continue;
        const o = r[r.length - 1];
        o.lu = n, e[t].unshift(o);
      }
    }
    return this.combinedHistory = e, this.combinedHistory;
  }
};
const d$7 = (s, i) => s.state === i.state && // Only compare attributes if both states have an attributes object.
// When `minimal_response` is sent, only the first and last state
// will have attributes except for domains in DOMAINS_USE_LAST_UPDATED.
(!s.attributes || !i.attributes || _$6.every((n) => s.attributes[n] === i.attributes[n])), O$3 = (s, i, n) => {
  const e = [];
  return Object.keys(i).forEach((t) => {
    const r = i[t], o = r[0], u = m$a(t), a = [];
    for (const c of r) {
      let m;
      if (g$6.includes(u)) {
        m = {
          state: c.s,
          last_changed: c.lu * 1e3,
          attributes: {}
        };
        for (const h of _$6)
          h in c.a && (m.attributes[h] = c.a[h]);
      } else
        m = {
          state: c.s,
          // lc (last_changed) may be omitted if its the same
          // as lu (last_updated).
          last_changed: (c.lc ? c.lc : c.lu) * 1e3,
          attributes: {}
        };
      a.length > 1 && d$7(m, a[a.length - 1]) && d$7(m, a[a.length - 2]) || a.push(m);
    }
    const l = t in n ? n[t].attributes : "friendly_name" in o.a ? o.a : void 0;
    e.push({
      domain: u,
      name: b$2(t, l || {}),
      entity_id: t,
      states: a
    });
  }), {
    unit: s,
    identifier: Object.keys(n).join(""),
    data: e
  };
}, w$1 = (s, i, n) => {
  const e = [], t = i[0];
  for (const r of i)
    e.length > 0 && r.s === e[e.length - 1].state || (n?.attributes.device_class && n?.attributes.device_class, e.push({
      state: r.s,
      // lc (last_changed) may be omitted if its the same
      // as lu (last_updated).
      last_changed: (r.lc ? r.lc : r.lu) * 1e3
    }));
  return {
    name: b$2(s, n?.attributes || t.a),
    entity_id: s,
    data: e
  };
}, D$3 = (s) => p$4(s.attributes), p$4 = (s) => "unit_of_measurement" in s || "state_class" in s, R$2 = (s, i, n) => {
  const e = {}, t = [];
  return n ? (Object.keys(n).forEach((o) => {
    const u = n[o];
    if (u.length === 0)
      return;
    const a = o in i ? i[o] : void 0, l = !a && u.find((m) => m.a && p$4(m.a));
    let c;
    a && D$3(a) ? c = a.attributes.unit_of_measurement || " " : l ? c = l.a.unit_of_measurement || " " : c = {
      zone: ae("people_in_zone"),
      climate: s.unit_system.temperature,
      counter: "#",
      humidifier: "%",
      input_number: "#",
      number: "#",
      water_heater: s.unit_system.temperature
    }[m$a(o)], c ? c in e && o in e[c] ? e[c][o].push(...u) : (c in e || (e[c] = {}), e[c][o] = u) : t.push(w$1(o, u, a));
  }), { line: Object.keys(e).map((o) => O$3(o, e[o], i)), timeline: t }) : { line: [], timeline: [] };
};

const m$5 = (t) => t.reduce((u, r) => u + parseFloat(r.state), 0) / t.length, x$1 = (t) => parseFloat(t[t.length - 1].state) || 0, D$2 = (t, u, r, o, c, g) => {
  const a = [];
  let f = (g - c) / 80;
  f = f !== 0 ? f : 80;
  let e = r / (u - (o === 1 ? 1 : 0));
  e = isFinite(e) ? e : r;
  const s = t.filter(Boolean)[0];
  let l = [m$5(s), x$1(s)];
  const d = (n, N, M = 0, b = 1) => {
    if (b > 1 && n)
      return n.forEach((R, _) => d(R, N, _, b - 1));
    const h = e * (N + M / 6);
    n && (l = [m$5(n), x$1(n)]);
    const T = 80 + 5 / 2 - ((n ? l[0] : l[1]) - c) / f;
    return a.push([h, T]);
  };
  for (let n = 0; n < t.length; n += 1)
    d(t[n], n, 0, o);
  return a.length === 1 && (a[1] = [r, a[0][1]]), a.push([r, a[a.length - 1][1]]), a;
}, E$2 = (t, u, r, o, c) => {
  t.forEach((e) => {
    e.state = Number(e.state);
  }), t.every((e) => Number.isNaN(e.state)) && (t = t.map((e, s) => Number.isNaN(e.state) ? {
    ...e,
    state: s
  } : e)), t = t.filter((e) => !Number.isNaN(e.state));
  const g = c?.min !== void 0 ? c.min : Math.min(...t.map((e) => e.state)), a = c?.max !== void 0 ? c.max : Math.max(...t.map((e) => e.state)), p = (/* @__PURE__ */ new Date()).getTime(), f = (e, s, l) => {
    const d = p - new Date(s.last_changed).getTime();
    let n = Math.abs(d / (1e3 * 3600) - u);
    return l ? (n = (n - Math.floor(n)) * 60, n = Number((Math.round(n / 10) * 10).toString()[0])) : n = Math.floor(n), e[n] || (e[n] = []), e[n].push(s), e;
  };
  if (t = t.reduce(
    // @ts-expect-error - bad typing, fix later
    (e, s) => f(e, s, false),
    []
  ), o > 1 && (t = t.map(
    (e) => (
      // @ts-expect-error - bad typing, fix later
      e.reduce((s, l) => f(s, l, true), [])
    )
  )), !!t.length)
    return D$2(t, u, r, o, g, a);
}, S$1 = (t, u, r, o, c) => {
  if (!t)
    return;
  const g = t.map((a) => ({
    _state: a.s,
    state: Number(a.s),
    // With minimal response and compressed state, we don't have last_changed,
    // so we use last_updated since its always the same as last_changed since
    // we already filtered out states that are the same.
    last_changed: a.lu * 1e3
  }));
  return E$2(g, u, r, o, c);
};

const {useRef:C$1,useState:g$5,useMemo:y$3,useEffect:b$1} = await importShared('react');
const U$1 = (t, e) => {
  const { useStore: l } = oe(), c = l((i) => i.connection), u = l((i) => i.config), o = C$1(false), m = k$1(t), [r, d] = g$5({}), [f, S] = g$5({
    loading: !e?.disable,
    timeline: [],
    entityHistory: [],
    coordinates: []
  }), s = y$3(() => ({
    disable: e?.disable,
    significantChangesOnly: e?.significantChangesOnly,
    minimalResponse: e?.minimalResponse,
    hoursToShow: e?.hoursToShow,
    limits: e?.limits
  }), [e?.disable, e?.significantChangesOnly, e?.minimalResponse, e?.hoursToShow, e?.limits]);
  return b$1(() => {
    if (!c || s?.disable) return;
    let i = true, n = null;
    return P$1({
      connection: c,
      entityIds: [t],
      significantChangesOnly: s?.significantChangesOnly,
      minimalResponse: s?.minimalResponse,
      hoursToShow: s?.hoursToShow,
      callbackFunction: (a) => {
        i && (o.current = true, d(a));
      }
    }).then((a) => {
      n = a;
    }).catch(() => {
      n?.(), o.current = false;
    }), () => {
      i = false, n?.(), o.current = false;
    };
  }, [t, s, c]), b$1(() => {
    if (!s?.disable && o.current) {
      const i = m(true);
      if (!i) return;
      const n = {
        [t]: i
      }, h = R$2(u, n, r).timeline.filter(({ entity_id: p }) => p === t), H = S$1(
        r[t],
        s?.hoursToShow ?? 24,
        500,
        // viewbox of the svgGraph
        typeof s?.significantChangesOnly > "u" || s?.significantChangesOnly === true ? 1 : 2,
        s?.limits
      ) ?? [];
      S({
        loading: false,
        timeline: h.length > 0 ? h[0].data : [],
        entityHistory: r[t],
        coordinates: H
      });
    }
  }, [t, u, s, m, r]), y$3(() => f, [f]);
};

const t$2 = (r) => {
  const e = r.state === "off";
  switch (r.attributes.device_class) {
    case "battery":
      return e ? "mdi:battery" : "mdi:battery-outline";
    case "battery_charging":
      return e ? "mdi:battery" : "mdi:battery-charging";
    case "carbon_monoxide":
      return e ? "mdi:smoke-detector" : "mdi:smoke-detector-alert";
    case "cold":
      return e ? "mdi:thermometer" : "mdi:snowflake";
    case "connectivity":
      return e ? "mdi:close-network-outline" : "mdi:check-network-outline";
    case "door":
      return e ? "mdi:door-closed" : "mdi:door-open";
    case "garage_door":
      return e ? "mdi:garage" : "mdi:garage-open";
    case "power":
      return e ? "mdi:power-plug-off" : "mdi:power-plug";
    case "gas":
    case "problem":
    case "safety":
    case "tamper":
      return e ? "mdi:check-circle" : "mdi:alert-circle";
    case "smoke":
      return e ? "mdi:smoke-detector-variant" : "mdi:smoke-detector-variant-alert";
    case "heat":
      return e ? "mdi:thermometer" : "mdi:fire";
    case "light":
      return e ? "mdi:brightness-5" : "mdi:brightness-7";
    case "lock":
      return e ? "mdi:lock" : "mdi:lock-open";
    case "moisture":
      return e ? "mdi:water-off" : "mdi:water";
    case "motion":
      return e ? "mdi:motion-sensor-off" : "mdi:motion-sensor";
    case "occupancy":
      return e ? "mdi:home-outline" : "mdi:home";
    case "opening":
      return e ? "mdi:square" : "mdi:square-outline";
    case "plug":
      return e ? "mdi:power-plug-off" : "mdi:power-plug";
    case "presence":
      return e ? "mdi:home-outline" : "mdi:home";
    case "running":
      return e ? "mdi:stop" : "mdi:play";
    case "sound":
      return e ? "mdi:music-note-off" : "mdi:music-note";
    case "update":
      return e ? "mdi:package" : "mdi:package-up";
    case "vibration":
      return e ? "mdi:crop-portrait" : "mdi:vibrate";
    case "window":
      return e ? "mdi:window-closed" : "mdi:window-open";
    default:
      return e ? "mdi:radiobox-blank" : "mdi:checkbox-marked-circle";
  }
};

const e = {
  apparent_power: "mdi:flash",
  aqi: "mdi:air-filter",
  atmospheric_pressure: "mdi:thermometer-lines",
  // battery: mdiBattery, => not included by design since `sensorIcon()` will dynamically determine the icon
  carbon_dioxide: "mdi:molecule-co2",
  carbon_monoxide: "mdi:molecule-co",
  current: "mdi:current-ac",
  data_rate: "mdi:transmission-tower",
  data_size: "mdi:database",
  date: "mdi:calendar",
  distance: "mdi:arrow-left-right",
  duration: "mdi:progress-clock",
  energy: "mdi:lightning-bolt",
  frequency: "mdi:sine-wave",
  gas: "mdi:meter-gas",
  humidity: "mdi:water-percent",
  illuminance: "mdi:brightness-5",
  irradiance: "mdi:sun-wireless",
  moisture: "mdi:water-percent",
  monetary: "mdi:cash",
  nitrogen_dioxide: "mdi:molecule",
  nitrogen_monoxide: "mdi:molecule",
  nitrous_oxide: "mdi:molecule",
  ozone: "mdi:molecule",
  ph: "mdi:ph",
  pm1: "mdi:molecule",
  pm10: "mdi:molecule",
  pm25: "mdi:molecule",
  power: "mdi:flash",
  power_factor: "mdi:angle-acute",
  precipitation: "mdi:weather-rainy",
  precipitation_intensity: "mdi:weather-pouring",
  pressure: "mdi:gauge",
  reactive_power: "mdi:flash",
  signal_strength: "mdi:wifi",
  sound_pressure: "mdi:ear-hearing",
  speed: "mdi:speedometer",
  sulphur_dioxide: "mdi:molecule",
  temperature: "mdi:thermometer",
  timestamp: "mdi:clock",
  volatile_organic_compounds: "mdi:molecule",
  volatile_organic_compounds_parts: "mdi:molecule",
  voltage: "mdi:sine-wave",
  volume: "mdi:car-coolant-level",
  water: "mdi:water",
  weight: "mdi:weight",
  wind_speed: "mdi:weather-windy"
}, i = {
  air_quality: "mdi:air-filter",
  alert: "mdi:alert",
  calendar: "mdi:calendar",
  climate: "mdi:thermostat",
  configurator: "mdi:cog",
  conversation: "mdi:microphone-message",
  counter: "mdi:counter",
  datetime: "mdi:calendar-clock",
  date: "mdi:calendar",
  demo: "mdi:home-assistant",
  google_assistant: "mdi:google-assistant",
  group: "mdi:google-circles-communities",
  homeassistant: "mdi:home-assistant",
  homekit: "mdi:home-automation",
  image: "mdi:image",
  image_processing: "mdi:image-filter-frames",
  input_button: "mdi:button-pointer",
  input_datetime: "mdi:calendar-clock",
  input_number: "mdi:ray-vertex",
  input_select: "mdi:format-list-bulleted",
  input_text: "mdi:form-textbox",
  lawn_mower: "mdi:robot-mower",
  light: "mdi:lightbulb",
  mailbox: "mdi:mailbox",
  notify: "mdi:comment-alert",
  number: "mdi:ray-vertex",
  persistent_notification: "mdi:bell",
  plant: "mdi:flower",
  proximity: "mdi:apple-safari",
  remote: "mdi:remote",
  scene: "mdi:palette",
  media_player: "mdi:music-box",
  schedule: "mdi:calendar-clock",
  script: "mdi:script-text",
  select: "mdi:format-list-bulleted",
  sensor: "mdi:eye",
  simple_alarm: "mdi:bell",
  siren: "mdi:bullhorn",
  stt: "mdi:microphone-message",
  text: "mdi:form-textbox",
  todo: "mdi:clipboard-list",
  time: "mdi:clock",
  timer: "mdi:timer-outline",
  tts: "mdi:speaker-message",
  updater: "mdi:cloud-upload",
  vacuum: "mdi:robot-vacuum",
  wake_word: "mdi:chat-sleep",
  zone: "mdi:map-marker-radius"
};

const a = {
  10: "mdi:battery-10",
  20: "mdi:battery-20",
  30: "mdi:battery-30",
  40: "mdi:battery-40",
  50: "mdi:battery-50",
  60: "mdi:battery-60",
  70: "mdi:battery-70",
  80: "mdi:battery-80",
  90: "mdi:battery-90",
  100: "mdi:battery"
}, n$6 = {
  10: "mdi:battery-charging-10",
  20: "mdi:battery-charging-20",
  30: "mdi:battery-charging-30",
  40: "mdi:battery-charging-40",
  50: "mdi:battery-charging-50",
  60: "mdi:battery-charging-60",
  70: "mdi:battery-charging-70",
  80: "mdi:battery-charging-80",
  90: "mdi:battery-charging-90",
  100: "mdi:battery-charging"
}, b = (t, r = false) => {
  const i = Math.round(t / 10) * 10;
  return r && t >= 10 ? n$6[i] : r ? "mdi:battery-charging-outline" : t <= 5 ? "mdi:battery-alert-variant-outline" : a[i];
}, y$2 = (t, r) => {
  const i = t.state, e = r;
  return d$6(i, e);
}, d$6 = (t, r) => {
  const i = Number(t);
  return isNaN(i) ? t === "off" ? "mdi:battery" : t === "on" ? "mdi:battery-alert" : "mdi:battery-unknown" : b(i, r);
};

const p$3 = "battery", T$1 = (t) => {
  const r = t?.attributes.device_class;
  if (r && r in e)
    return e[r];
  if (r === p$3)
    return t ? y$2(t) : "mdi:battery";
  const o = t?.attributes.unit_of_measurement;
  if (o === S$5 || o === I$1)
    return "mdi:thermometer";
};

const s$3 = (r) => {
  const e$1 = r.attributes.device_class;
  if (e$1 && e$1 in e)
    return e[e$1];
};

const o$4 = (e) => {
  const r = e.state !== "closed";
  switch (e.attributes.device_class) {
    case "garage":
      switch (e.state) {
        case "opening":
          return "mdi:arrow-up-box";
        case "closing":
          return "mdi:arrow-down-box";
        case "closed":
          return "mdi:garage";
        default:
          return "mdi:garage-open";
      }
    case "gate":
      switch (e.state) {
        case "opening":
        case "closing":
          return "mdi:gate-arrow-right";
        case "closed":
          return "mdi:gate";
        default:
          return "mdi:gate-open";
      }
    case "door":
      return r ? "mdi:door-open" : "mdi:door-closed";
    case "damper":
      return r ? "mdi:circle" : "mdi:circle-slice-8";
    case "shutter":
      switch (e.state) {
        case "opening":
          return "mdi:arrow-up-box";
        case "closing":
          return "mdi:arrow-down-box";
        case "closed":
          return "mdi:window-shutter";
        default:
          return "mdi:window-shutter-open";
      }
    case "curtain":
      switch (e.state) {
        case "opening":
          return "mdi:arrow-split-vertical";
        case "closing":
          return "mdi:arrow-collapse-horizontal";
        case "closed":
          return "mdi:curtains-closed";
        default:
          return "mdi:curtains";
      }
    case "blind":
      switch (e.state) {
        case "opening":
          return "mdi:arrow-up-box";
        case "closing":
          return "mdi:arrow-down-box";
        case "closed":
          return "mdi:blinds-horizontal-closed";
        default:
          return "mdi:blinds-horizontal";
      }
    case "shade":
      switch (e.state) {
        case "opening":
          return "mdi:arrow-up-box";
        case "closing":
          return "mdi:arrow-down-box";
        case "closed":
          return "mdi:roller-shade-closed";
        default:
          return "mdi:roller-shade";
      }
    case "window":
      switch (e.state) {
        case "opening":
          return "mdi:arrow-up-box";
        case "closing":
          return "mdi:arrow-down-box";
        case "closed":
          return "mdi:window-closed";
        default:
          return "mdi:window-open";
      }
  }
  switch (e.state) {
    case "opening":
      return "mdi:arrow-up-box";
    case "closing":
      return "mdi:arrow-down-box";
    case "closed":
      return "mdi:window-closed";
    default:
      return "mdi:window-open";
  }
};

const r$3 = (e) => {
  switch (e) {
    case "armed_away":
      return "mdi:shield-lock";
    case "armed_vacation":
      return "mdi:shield-airplane";
    case "armed_home":
      return "mdi:shield-home";
    case "armed_night":
      return "mdi:shield-moon";
    case "armed_custom_bypass":
      return "mdi:security";
    case "pending":
      return "mdi:shield-outline";
    case "triggered":
      return "mdi:bell-ring";
    case "disarmed":
      return "mdi:shield-off";
    default:
      return "mdi:shield";
  }
};

function r$2(e) {
  switch (e) {
    case "clear-night":
      return "mdi:weather-night";
    case "cloudy":
      return "mdi:weather-cloudy";
    case "fog":
      return "mdi:weather-fog";
    case "hail":
      return "mdi:weather-hail";
    case "lightning":
      return "mdi:weather-lightning";
    case "lightning-rainy":
      return "mdi:weather-lightning-rainy";
    case "partlycloudy":
      return "mdi:weather-partly-cloudy";
    case "pouring":
      return "mdi:weather-pouring";
    case "rainy":
      return "mdi:weather-rainy";
    case "snowy":
      return "mdi:weather-snowy";
    case "snowy-rainy":
      return "mdi:weather-snowy-rainy";
    case "sunny":
      return "mdi:weather-sunny";
    case "windy":
      return "mdi:weather-windy";
    case "windy-variant":
      return "mdi:weather-windy-variant";
    case "exceptional":
    default:
      return "mdi:alert-circle-outline";
  }
}

const {useMemo:h,useCallback:B$2,useState:H$2,useEffect:_$5} = await importShared('react');
function De(r, t) {
  const e = h(() => {
    const i$1 = lodashExports.snakeCase(r);
    return i[i$1] ? i[i$1] : "mdi:information-outline";
  }, [r]);
  return e === null ? null : /* @__PURE__ */ E$5(
    Icon,
    {
      style: {
        fontSize: t?.fontSize ?? "24px"
      },
      icon: e,
      ...t
    }
  );
}
function Ne(r, t) {
  return h(() => r === null ? null : /* @__PURE__ */ E$5(
    Icon,
    {
      style: {
        fontSize: t?.fontSize ?? "24px"
      },
      icon: r || "octicon:info-24",
      ...t
    }
  ), [r, t]);
}
function O$2(r, t) {
  const e = t.state;
  switch (r) {
    case "alarm_control_panel":
      return r$3(e);
    case "automation":
      return e === "unavailable" ? "mdi:robot-confused" : e === "off" ? "mdi:robot-off" : "mdi:robot";
    case "binary_sensor":
      return t$2(t);
    case "button":
      switch (t.attributes.device_class) {
        case "identify":
          return "mdi:crosshairs-question";
        case "restart":
          return "mdi:restart";
        case "update":
          return "mdi:package-up";
        default:
          return "mdi:button-pointer";
      }
    case "camera":
      return e === "off" ? "mdi:video-off" : "mdi:video";
    case "cover":
      return o$4(t);
    case "device_tracker":
      return t.attributes.source_type === "router" ? e === "home" ? "mdi:lan-connect" : "mdi:lan-disconnect" : ["bluetooth", "bluetooth_le"].includes(t.attributes.source_type) ? e === "home" ? "mdi:bluetooth-connect" : "mdi:bluetooth" : e === "not_home" ? "mdi:account-arrow-right" : "mdi:account";
    case "event":
      switch (t.attributes.device_class) {
        case "doorbell":
          return "mdi:doorbell";
        case "button":
          return "mdi:gesture-tap-button";
        case "motion":
          return "mdi:motion-sensor";
        default:
          return "mdi:eye-check";
      }
    case "fan":
      return e === "off" ? "mdi:fan-off" : "mdi:fan";
    case "humidifier":
      return e === "off" ? "mdi:air-humidifier-off" : "mdi:air-humidifier";
    case "input_boolean":
      return e === "on" ? "mdi:check-circle-outline" : "mdi:close-circle-outline";
    case "input_datetime":
      if (!t.attributes.has_date)
        return "mdi:clock";
      if (!t.attributes.has_time)
        return "mdi:calendar";
      break;
    case "lock":
      switch (e) {
        case "unlocked":
          return "mdi:lock-open";
        case "jammed":
          return "mdi:lock-alert";
        case "locking":
        case "unlocking":
          return "mdi:lock-clock";
        default:
          return "mdi:lock";
      }
    case "media_player":
      switch (t.attributes.device_class) {
        case "speaker":
          switch (e) {
            case "playing":
              return "mdi:speaker-play";
            case "paused":
              return "mdi:speaker-pause";
            case "off":
              return "mdi:speaker-off";
            default:
              return "mdi:speaker";
          }
        case "tv":
          switch (e) {
            case "playing":
              return "mdi:television-play";
            case "paused":
              return "mdi:television-pause";
            case "off":
              return "mdi:television-off";
            default:
              return "mdi:television";
          }
        case "receiver":
          switch (e) {
            case "off":
              return "mdi:audio-video-off";
            default:
              return "mdi:audio-video";
          }
        default:
          switch (e) {
            case "playing":
            case "paused":
              return "mdi:cast-connected";
            case "off":
              return "mdi:cast-off";
            default:
              return "mdi:cast";
          }
      }
    case "number": {
      const i = s$3(t);
      if (i)
        return i;
      break;
    }
    case "person":
      return e === "not_home" ? "mdi:account-arrow-right" : "mdi:account";
    case "switch":
      switch (t.attributes.device_class) {
        case "outlet":
          return e === "on" ? "mdi:power-plug" : "mdi:power-plug-off";
        case "switch":
          return e === "on" ? "mdi:toggle-switch-variant" : "mdi:toggle-switch-variant-off";
        default:
          return "mdi:toggle-switch-variant";
      }
    case "sensor": {
      const i = T$1(t);
      if (i)
        return i;
      break;
    }
    case "sun":
      return t.state === "above_horizon" ? "mdi:white-balance-sunny" : "mdi:weather-night";
    case "switch_as_x":
      return "mdi:swap-horizontal";
    case "threshold":
      return "mdi:chart-sankey";
    case "update":
      return "mdi:package";
    case "water_heater":
      return e === "off" ? "mdi:water-boiler-off" : "mdi:water-boiler";
    case "weather":
      return r$2(t.state);
  }
  if (r in i)
    return i[r];
}
function Oe(r, t) {
  const e = re(r || "unknown", {
    returnNullIfNotFound: true
  });
  return h(() => {
    if (e === null) return null;
    const d = e.attributes.icon ?? O$2(m$a(r), e);
    return d ? /* @__PURE__ */ E$5(
      Icon,
      {
        style: {
          fontSize: t?.fontSize ?? "24px"
        },
        icon: d,
        ...t
      }
    ) : null;
  }, [e, r, t]);
}
const v$1 = {
  throttle: 25,
  returnNullIfNotFound: false,
  historyOptions: {
    hoursToShow: 24,
    significantChangesOnly: true,
    minimalResponse: true,
    disable: true
  }
};
function re(r, t = v$1) {
  const { throttle: e, returnNullIfNotFound: i, historyOptions: d } = {
    ...v$1,
    ...t,
    historyOptions: {
      ...v$1.historyOptions,
      ...t.historyOptions
    }
  }, b = k$1(r), s = b(i), x = m$a(r), S = x$2(x, r), E = U$1(r, d), { useStore: z } = oe(), C = z((o) => o.config?.language), c = B$2(
    (o) => {
      const g = /* @__PURE__ */ new Date(), a = new Date(o.attributes.last_triggered ?? o.last_updated), m = f$4(a, C), w = Math.abs(g.getTime() - a.getTime()), l = m === "just now", { hexColor: f, rgbColor: T, brightness: F, brightnessValue: $, rgbaColor: j, color: A } = k$2(o);
      return {
        ...o,
        custom: {
          color: A,
          relativeTime: m,
          timeDiff: w,
          active: l,
          hexColor: f,
          rgbColor: T,
          brightness: F,
          brightnessValue: $,
          rgbaColor: j
        }
      };
    },
    [C]
  ), D = c$8(
    (o) => {
      u(c(o));
    },
    e,
    {
      leading: true,
      trailing: true
    }
  ), [n, u] = H$2(s !== null ? c(s) : null);
  return _$5(() => {
    u((o) => o === null ? null : c(o));
  }, [c]), _$5(() => {
    const o = b(true);
    if (o && n) {
      const g = diff(
        lodashExports.omit(o, "custom", "last_changed", "last_updated", "context", "attributes.icon"),
        lodashExports.omit(n, "custom", "last_changed", "last_updated", "context", "attributes.icon")
      ), a = lodashExports.cloneDeep(o), m = typeof a.attributes.icon == "string", w = typeof n.attributes.icon == "string";
      let l = !lodashExports.isEmpty(g);
      if (m && w && a.attributes.icon !== n.attributes.icon)
        l = true;
      else if (!m) {
        const f = O$2(m$a(a.entity_id), a);
        f !== n.attributes.icon && (a.attributes.icon = f, l = true);
      }
      l && D(a);
    }
  }, [n, D, b]), _$5(() => {
    s && !n && u(c(s)), !s && n && u(null), s && n && s.entity_id !== n.entity_id && u(c(s));
  }, [s, n, c]), h(() => n === null ? null : {
    ...n,
    history: E,
    service: S
  }, [n, E, S]);
}

const {useMemo:r$1} = await importShared('react');
const M$3 = (t) => r$1(
  () => t.state === A$2 ? Math.max(Math.round((t.attributes.brightness ?? 0) * 100 / 255), 1) : 0,
  [t.attributes.brightness, t.state]
);

const {useMemo:o$3} = await importShared('react');
const n$5 = (r) => o$3(() => {
  if (r.state === A$2)
    return r.attributes.color_mode === r$5.COLOR_TEMP ? r.attributes.color_temp_kelvin : void 0;
}, [r.state, r.attributes.color_mode, r.attributes.color_temp_kelvin]);

const {useMemo:u$5} = await importShared('react');
const L$1 = (r) => {
  const n = u$5(() => {
    if (r.state === A$2) {
      if (r.attributes.color_mode === r$5.RGB && r.attributes.rgb_color && !u$a(r, r$5.RGBWW) && !u$a(r, r$5.RGBW)) {
        const o = Math.max(...r.attributes.rgb_color);
        if (o < 255)
          return o;
      }
      return;
    }
  }, [r]), l = u$5(() => {
    const o = r.state !== A$2 ? void 0 : r.attributes.color_mode === r$5.RGBW && r.attributes.rgbw_color ? Math.round(r.attributes.rgbw_color[3] * 100 / 255) : void 0;
    return o != null ? o * 255 / 100 : void 0;
  }, [r]), a = u$5(() => {
    const o = r.state !== A$2 ? void 0 : r.attributes.color_mode === r$5.RGBWW && r.attributes.rgbww_color ? Math.round(r.attributes.rgbww_color[3] * 100 / 255) : void 0;
    return o != null ? o * 255 / 100 : void 0;
  }, [r]), c = u$5(() => {
    const o = r.state !== A$2 ? void 0 : r.attributes.color_mode === r$5.RGBWW && r.attributes.rgbww_color ? Math.round(r.attributes.rgbww_color[4] * 100 / 255) : void 0;
    return o != null ? o * 255 / 100 : void 0;
  }, [r]), e = p$8(r), i = u$5(() => {
    const o = r.state !== A$2 ? void 0 : e ? Math.round(Math.max(...e.slice(0, 3)) * 100 / 255) : void 0;
    return o != null ? o * 255 / 100 : void 0;
  }, [r, e]), m = u$5(() => r.state !== A$2 ? void 0 : e ? Z(e.slice(0, 3)) : void 0, [r, e]);
  return {
    brightnessAdjusted: n,
    white: l,
    coolWhite: a,
    warmWhite: c,
    colorBrightness: i,
    hs: m
  };
};

const {useState:_$4,useRef:g$4,useMemo:p$2,useEffect:B$1} = await importShared('react');
const O$1 = ({ blacklist: n = [], whitelist: r = [], min: u = 0, max: c = 20 } = {}) => {
  const { getAllEntities: f } = oe(), [s, d] = _$4([]), e = f(), m = g$4(null), a = !lodashExports.isEqual(m.current, e), o = p$2(
    () => Object.values(e).filter((t) => {
      const E = t.attributes.unit_of_measurement === "%" && t.attributes.device_class === "battery", b = Number(t.state) <= c && Number(t.state) >= u, h = n.some((i) => t.entity_id.includes(i)), v = r.length === 0 || r.some((i) => t.entity_id.includes(i));
      return E && b && v && !h;
    }),
    [n, e, c, u, r]
  );
  return B$1(() => {
    a && !lodashExports.isEqual(o, s) && d(o), m.current = e;
  }, [a, o, s, e]), p$2(() => s, [s]);
};

const {useState:c$2,useEffect:m$4} = await importShared('react');
const _$3 = (t) => {
  const [i, s] = c$2(null), { useStore: r } = oe(), e = r((o) => o.connection);
  return m$4(() => {
    (async () => {
      if (!e)
        return;
      const n = await e.sendMessagePromise({
        type: "config/entity_registry/get",
        entity_id: t
      });
      s(n);
    })();
  }, [e, t]), i;
};

const M$2 = ["counter", "proximity", "sensor", "zone"], U = (r, a) => ({
  entity_id: r.entity_id,
  state: a,
  attributes: {
    // Rebuild the historical state by copying static attributes only
    device_class: r?.attributes.device_class,
    source_type: r?.attributes.source_type,
    has_date: r?.attributes.has_date,
    has_time: r?.attributes.has_time,
    // We do not want to use dynamic entity pictures (e.g., from media player) for the log book rendering,
    // as they would present a false state in the log (played media right now vs actual historic data).
    entity_picture_local: _$8.has(m$a(r.entity_id)) ? void 0 : r?.attributes.entity_picture_local,
    entity_picture: _$8.has(m$a(r.entity_id)) ? void 0 : r?.attributes.entity_picture
  }
}), D$1 = (r, a, c, s, t, i) => {
  if ((t || i) && (!t || t.length === 0) && (!i || i.length === 0))
    return Promise.reject(`${ae("no_matching_entities_found")}, ${ae("no_matching_devices_found")}`);
  const n = {
    type: "logbook/event_stream",
    start_time: c,
    end_time: s
  };
  return t?.length && (n.entity_ids = t), i?.length && (n.device_ids = i), r.subscribeMessage((g) => a(g), n);
}, l = {
  "numeric state of": "logbook_triggered_by_numeric_state_of",
  // number state trigger
  "state of": "triggered_by_state_of",
  // state trigger
  event: "triggered_by_event",
  // event trigger
  time: "triggered_by_time",
  // time trigger
  "time pattern": "triggered_by_time_pattern",
  // time trigger
  "Home Assistant stopping": "logbook_triggered_by_homeassistant_stopping",
  // stop event
  "Home Assistant starting": "logbook_triggered_by_homeassistant_starting"
  // start event
}, H$1 = (r) => {
  for (const a in l)
    if (r.startsWith(a))
      return r.replace(
        a,
        // @ts-expect-error - this is fine, it'll return undefined
        `${ae(`${l[a]}`)}`
      );
  return r;
}, P = (r, a, c) => {
  switch (c) {
    case "device_tracker":
    case "person":
      return r === "not_home" ? ae("was_detected_away") : r === "home" ? ae("was_detected_at_home") : ae("was_detected_at_state", {
        search: "{state}",
        replace: r
      });
    case "sun":
      return r === "above_horizon" ? ae("rose") : ae("set");
    case "binary_sensor": {
      const s = r === A$2, t = r === o$6, i = a.attributes.device_class;
      switch (i) {
        case "battery":
          if (s)
            return ae("was_low");
          if (t)
            return ae("was_normal");
          break;
        case "connectivity":
          if (s)
            return ae("was_connected");
          if (t)
            return ae("was_disconnected");
          break;
        case "door":
        case "garage_door":
        case "opening":
        case "window":
          if (s)
            return ae("was_opened");
          if (t)
            return ae("was_closed");
          break;
        case "lock":
          if (s)
            return ae("was_unlocked");
          if (t)
            return ae("was_locked");
          break;
        case "plug":
          if (s)
            return ae("was_plugged_in");
          if (t)
            return ae("was_unplugged");
          break;
        case "presence":
          if (s)
            return ae("was_detected_at_home");
          if (t)
            return ae("was_detected_away");
          break;
        case "safety":
          if (s)
            return ae("was_unsafe");
          if (t)
            return ae("was_safe");
          break;
        case "cold":
        case "gas":
        case "heat":
        case "moisture":
        case "motion":
        case "occupancy":
        case "power":
        case "problem":
        case "smoke":
        case "sound":
        case "vibration":
          if (s)
            return ae("detected_device_class", {
              search: "{device_class}",
              replace: i
            });
          if (t)
            return ae("cleared_no_device_class_detected", {
              search: "{device_class}",
              replace: i
            });
          break;
        case "tamper":
          if (s)
            return ae("detected_tampering");
          if (t)
            return ae("cleared_tampering");
          break;
      }
      break;
    }
    case "cover":
      switch (r) {
        case "open":
          return ae("was_opened");
        case "opening":
          return ae("is_opening");
        case "closing":
          return ae("is_closing");
        case "closed":
          return ae("was_closed");
      }
      break;
    case "event":
      return ae("detected_an_event");
    case "lock":
      switch (r) {
        case "unlocked":
          return ae("was_unlocked");
        case "locking":
          return ae("is_locking");
        case "unlocking":
          return ae("is_unlocking");
        case "locked":
          return ae("was_locked");
        case "jammed":
          return ae("is_jammed");
      }
      break;
  }
  return r === A$2 ? ae("turned_on") : r === o$6 ? ae("turned_off") : r === t$3 ? ae("became_unknown") : r === n$9 ? ae("became_unavailable") : ae("changed_to_state", {
    search: "{state}",
    replace: a ? a.state : r
  });
};

const {useState:_$2,useRef:d$5,useMemo:D,useCallback:m$3,useEffect:k} = await importShared('react');
const H = 24, g$3 = (f, s) => new Date(f.getTime() - s * 1e3).getTime() / 1e3;
function G$1(f, s) {
  const { useStore: L } = oe(), [b, O] = _$2(void 0), l = L((e) => e.connection), [w, i] = _$2([]), n = d$5([]), a = d$5(false), u = d$5(void 0), c = D(() => {
    const e = {};
    return s?.hoursToShow ? e.recent = s.hoursToShow * 60 * 60 : s?.startTime && s?.endTime ? e.range = [s.startTime, s.endTime] : e.recent = H * 60 * 60, e;
  }, [s]), h = m$3(() => {
    const e = /* @__PURE__ */ new Date();
    if ("range" in c)
      return {
        now: e,
        startTime: c.range[0],
        endTime: c.range[1],
        purgeBeforePythonTime: void 0
      };
    if ("recent" in c) {
      const o = g$3(e, c.recent);
      return {
        now: e,
        startTime: new Date(o * 1e3),
        // end streaming one year from now
        endTime: new Date(e.getTime() + 86400 * 365 * 1e3),
        purgeBeforePythonTime: g$3(e, c.recent)
      };
    }
    throw new Error("Unexpected time specified");
  }, [c]), T = m$3(
    (e) => n.current ? e ? n.current.filter((o) => o.when > e) : n.current : [],
    []
  ), p = m$3(
    (e) => {
      const o = c && "recent" in c ? g$3(/* @__PURE__ */ new Date(), c.recent) : void 0, r = [...e.events].reverse();
      if (!n.current.length) {
        n.current = r, i(r);
        return;
      }
      if (!r.length)
        return;
      const t = T(o);
      t.length ? r[r.length - 1].when > // oldest new entry
      t[0].when ? (n.current = r.concat(t), i(n.current)) : t[t.length - 1].when > // oldest old entry
      r[0].when ? (n.current = t.concat(r), i(n.current)) : (n.current = t.concat(r).sort((P, R) => R.when - P.when), i(n.current)) : (n.current = r, i(r));
    },
    [c, T]
  );
  k(() => () => {
    a.current = false, n.current = [], i([]);
  }, []);
  const S = m$3(
    (e, o) => D$1(
      l,
      (t) => {
        a.current && p(t);
      },
      o.startTime.toISOString(),
      o.endTime.toISOString(),
      [e]
    ).catch((t) => {
      a.current = false, t instanceof Error && O(t.message);
    }),
    [l, p]
  ), E = c$8(
    async (e, o) => {
      if (u.current) {
        const r = await u.current;
        r && await r(), u.current = void 0;
      }
      a.current = true, u.current = await S(e, o);
    },
    100,
    {
      leading: true,
      trailing: true
    }
  );
  if (k(() => {
    const e = h();
    return E(f, e), () => {
      a.current = false, u.current && u.current();
    };
  }, [h, E, S, f]), b)
    throw new Error(b);
  return D(() => w, [w]);
}

const {useState:s$2,useEffect:u$4,useMemo:m$2} = await importShared('react');
function M$1() {
  const { useStore: n } = oe(), o = n((t) => t.connection), [r, i] = s$2(null);
  return u$4(() => {
    if (!o) return;
    const t = subscribeConfig(o, (e) => {
      i(e);
    });
    return () => {
      t();
    };
  }, [o]), m$2(() => r, [r]);
}

function g$2() {
  return M$1()?.state ?? "LOADING";
}

const u$3 = 288e5, c$1 = 864e5, d$4 = (t) => {
  if (t && t?.length && t?.length > 2) {
    const e = new Date(t[1].datetime);
    return new Date(t[2].datetime).getTime() - e.getTime() < u$3;
  }
}, f$1 = (t) => {
  if (t && t?.length && t?.length > 2) {
    const e = new Date(t[1].datetime);
    return new Date(t[2].datetime).getTime() - e.getTime() < c$1;
  }
}, n$4 = (t) => {
  if (t?.forecast && t.forecast.length > 2)
    return d$4(t.forecast) ? {
      forecast: t.forecast,
      type: "hourly"
    } : f$1(t.forecast) ? {
      forecast: t.forecast,
      type: "twice_daily"
    } : { forecast: t.forecast, type: "daily" };
}, O = (t, e, i) => {
  return e?.type !== void 0 && e?.forecast && e?.forecast?.length > 2 ? { forecast: e.forecast, type: e?.type } : n$4(t);
}, S = (t, e, i, o) => t.subscribeMessage(o, {
  type: "weather/subscribe_forecast",
  forecast_type: i,
  entity_id: e
}), C = (t) => {
  const e = [];
  return r$4(
    t.attributes,
    1
    /* FORECAST_DAILY */
  ) && e.push("daily"), r$4(
    t.attributes,
    4
    /* FORECAST_TWICE_DAILY */
  ) && e.push("twice_daily"), r$4(
    t.attributes,
    2
    /* FORECAST_HOURLY */
  ) && e.push("hourly"), e;
};

const {useState:p$1,useRef:d$3,useCallback:v,useEffect:w,useMemo:y$1} = await importShared('react');
function B(n, E) {
  const { useStore: g } = oe(), i = g((r) => r.connection), o = re(n), [a, h] = p$1(null), [f, k] = p$1(null), t = d$3(false), e = d$3(void 0), { type: b = "daily" } = E || {}, m = v(
    (r, c) => S(i, r, c, (s) => {
      t.current && k(s);
    }).catch((s) => {
      t.current = false, s instanceof Error && h(s.message);
    }),
    [i]
  ), l = c$8(
    async (r, c) => {
      if (e.current) {
        const u = await e.current;
        u && u(), e.current = void 0;
      }
      t.current = true, e.current = await m(r, c);
    },
    100,
    {
      trailing: true,
      leading: true
    }
  );
  if (w(() => (l(n, b), () => {
    t.current = false, e.current && e.current();
  }), [b, l, m, n]), a)
    throw a;
  return y$1(() => {
    const r = O(o.attributes, f);
    return {
      ...o,
      forecast: r
    };
  }, [o, f]);
}

const t$1 = (e) => e.sendMessagePromise({
  type: "config/area_registry/list"
}), o$2 = (e, r) => e.subscribeEvents(
  lodashExports.debounce(() => t$1(e).then((s) => r.setState(s, true)), 500, {
    leading: true
  }),
  "area_registry_updated"
), n$3 = (e, r) => createCollection("_areaRegistry", t$1, o$2, e, r);

const s$1 = (t) => t.sendMessagePromise({
  type: "config/entity_registry/list"
}), y = (t, e) => t.subscribeEvents(
  lodashExports.debounce(() => s$1(t).then((i) => e.setState(i, true)), 500, {
    leading: true
  }),
  "entity_registry_updated"
), g$1 = (t, e) => createCollection("_entityRegistry", s$1, y, t, e);

const s = (e) => e.sendMessagePromise({
  type: "config/device_registry/list"
}), o$1 = (e, t) => e.subscribeEvents(
  lodashExports.debounce(() => s(e).then((i) => t.setState(i, true)), 500, {
    leading: true
  }),
  "device_registry_updated"
), n$2 = (e, t) => createCollection("_dr", s, o$1, e, t);

const {useState:u$2,useEffect:E$1,useMemo:g} = await importShared('react');
function L() {
  const { useStore: v, joinHassUrl: p, getAllEntities: y } = oe(), [d, _] = u$2([]), [o, b] = u$2([]), [m, h] = u$2([]), s = v((e) => e.connection), a = y();
  return E$1(() => {
    if (!s) return;
    const e = n$3(s, (i) => {
      _(i);
    }), n = g$1(s, (i) => {
      h(i);
    }), r = n$2(s, (i) => {
      b(i);
    });
    return () => {
      e(), n(), r();
    };
  }, [s]), g(() => d.map((e) => {
    const n = [], r = [], i = [];
    for (const t of o)
      t.area_id === e.area_id && (t.entry_type === "service" ? i.push(t) : r.push(t));
    for (const t of m) {
      const c = a[t.entity_id];
      if (!c || (t.area_id === e.area_id && n.push(c), !t.device_id)) continue;
      const f = o.find((I) => I.id === t.device_id);
      if (!f) continue;
      const A = f.area_id === e.area_id;
      !t.area_id && A && n.push(c);
    }
    return {
      ...e,
      picture: e.picture ? p(e.picture) : e.picture,
      devices: r,
      services: i,
      entities: n
    };
  }), [d, o, p, m, a]);
}

const {useState:f,useRef:d$2,useMemo:m$1,useEffect:p} = await importShared('react');
const x = (s) => {
  const { useStore: i } = oe(), o = i((t) => t.connection), [c, n] = f(null), r = d$2(null), u = m$1(() => s, [s]);
  return p(() => () => {
    try {
      r.current?.(), r.current = null;
    } catch (t) {
      console.log("Error:", t), r.current = null;
    }
  }, []), p(() => {
    if (!o) return;
    const t = (e) => {
      e?.result && n((l) => l === e.result ? l : e.result);
    }, a = (e) => {
      e?.code === "template_error" ? n(e.error) : n(e?.error || "Could not process template request.");
    };
    o.subscribeMessage(t, {
      type: "render_template",
      ...u
    }).then((e) => {
      r.current = e;
    }).catch((e) => {
      a(e);
    });
  }, [o, u]), m$1(() => c, [c]);
};

const _$1 = 640, A = 0.5625, T = [1, 2, 3, 4, 6, 8], E = 1, R$1 = 2, t = "hls", c = "web_rtc";

const r = {}, u$1 = async (o, m, i, a, t, ...p) => {
  const c = Date.now(), s = `${o}-${t}`, e = r[s];
  if (e && c - e.timestamp < m)
    return e.promise;
  const n = i(a, t, ...p);
  return r[s] = { timestamp: c, promise: n }, n;
};

const n$1 = (t, e) => t.sendMessagePromise({ type: "auth/sign_path", path: e }), o = (t, e, a) => `${t}&width=${e}&height=${a}`, u = (t) => `/api/camera_proxy_stream/${t.entity_id}?token=${t.attributes.access_token}`, d$1 = async (t, e, a, r) => {
  const s = await u$1("_cameraTmbUrl", 9e3, m, t, e);
  return o(s, a, r);
}, m = async (t, e) => {
  const { path: a } = await n$1(t, `/api/camera_proxy/${e}`);
  return a;
}, _ = async (t, e, a) => {
  const r = {
    type: "camera/stream",
    entity_id: e
  };
  const { url: s } = await t.sendMessagePromise(r);
  return s;
};

const {useRef:R,useState:n,useMemo:M,useCallback:d,useEffect:G} = await importShared('react');
function se(A$1, t) {
  const e = re(A$1), { useStore: C, joinHassUrl: s } = oe(), a = C((r) => r.connection), c$1 = R(false), f = R(false), [p, b] = n(void 0), [E, L] = n(void 0), [o, W] = n(void 0), [h, x] = n(void 0), [_$2, m] = n(t?.stream !== false), [S, l] = n(t?.poster !== false), U = M(() => s(u(e)), [e, s]), i = d(async () => {
    if (t?.poster !== false && a && !l$2(e.state) && !f.current) {
      f.current = true, l(true);
      try {
        const r = Math.ceil((t?.imageWidth ?? _$1) * devicePixelRatio), P = Math.ceil(r * (t?.aspectRatio ?? A)), y = await d$1(a, e.entity_id, r, P);
        b(s(y)), l(!1);
      } catch (r) {
        l(false), r instanceof Error && x(r);
      }
    }
  }, [e.entity_id, s, e.state, a, t?.poster, t?.aspectRatio, t?.imageWidth]), u$1 = d(async () => {
    if (t?.stream !== false && a && !l$2(e.state) && !c$1.current) {
      c$1.current = true, m(true);
      try {
        const r = await _(a, e.entity_id);
        L(s(r)), m(!1);
      } catch (r) {
        m(false), console.error(r), r instanceof Error && W(r);
      }
    }
  }, [e.entity_id, s, e.state, a, t?.stream]), g = d(() => o || !r$4(e.attributes, R$1) ? true : e.attributes.frontend_stream_type === c ? typeof RTCPeerConnection > "u" : false, [e.attributes, o]);
  return G(() => {
    u$1(), i();
  }, [u$1, i]), M(() => ({
    ...e,
    stream: {
      url: E,
      loading: _$2,
      error: o,
      refresh: async () => (c$1.current = false, u$1())
    },
    poster: {
      url: p,
      loading: S,
      error: h,
      refresh: async () => (f.current = false, i())
    },
    mjpeg: {
      url: U,
      shouldRenderMJPEG: g()
    }
  }), [
    e,
    E,
    g,
    _$2,
    o,
    u$1,
    p,
    S,
    h,
    U,
    i
  ]);
}

export { A as ASPECT_RATIO_DEFAULT, T as CAMERA_ORIENTATIONS, E as CAMERA_SUPPORT_ON_OFF, R$1 as CAMERA_SUPPORT_STREAM, f$5 as COLORS, M$2 as CONTINUOUS_DOMAINS, i$2 as DEFAULT_STATES, _$8 as DOMAINS_WITH_DYNAMIC_PICTURE, g$8 as DOMAIN_ATTRIBUTES_FORMATERS, T$3 as DOMAIN_ATTRIBUTES_UNITS, Ue as HassConnect, h$2 as HassContext, r$5 as LIGHT_COLOR_MODES, _$1 as MAX_IMAGE_WIDTH, o$6 as OFF, N$1 as OFF_STATES, A$2 as ON, t as STREAM_TYPE_HLS, c as STREAM_TYPE_WEB_RTC, f$2 as TEMPERATURE_ATTRIBUTES, r$6 as THEME_COLORS, n$9 as UNAVAILABLE, T$5 as UNAVAILABLE_STATES, S$5 as UNIT_C, I$1 as UNIT_F, I as UNIT_TO_MILLISECOND_CONVERT, t$3 as UNKNOWN, b as batteryIconByLevel, L$2 as checkValidDate, A$1 as computeAttributeValueDisplay, n$b as computeCssColor, m$a as computeDomain, l$3 as computeDomainTitle, K as computeStateDisplay, g$7 as computeStateDisplayFromEntityAttributes, E$2 as coordinates, U as createHistoricState, a$1 as createService, a$7 as expandHex, C$2 as formatDate, T$4 as formatDateTime, d$9 as formatDuration, c$4 as formatNumber, O$4 as formatTime, e$4 as getColorByIndex, k$2 as getCssColorValue, m$8 as getDefaultFormatOptions, O$2 as getIconByEntity, p$8 as getLightCurrentModeRgbColor, u$8 as getNumberFormatOptions, c$7 as getRGBContrastRatio, C as getSupportedForecastTypes, v$2 as getWeatherUnit, S$6 as hex2rgb, f$7 as hexBlend, j as hs2rgb, k$3 as hsv2rgb, h$1 as isDate, n$8 as isNumericFromAttributes, a$2 as isNumericState, U$2 as isOffState, E$4 as isTimestamp, l$2 as isUnavailableState, Y as lab2hex, I$3 as lab2rgb, o$8 as labBrighten, e$2 as labDarken, c$6 as lightIsInColorMode, i$3 as lightSupportsBrightness, d$b as lightSupportsColor, u$a as lightSupportsColorMode, c$5 as loadTokens, m$9 as locales, ae as localize, P as localizeStateMessage, H$1 as localizeTriggerSource, s$8 as luminosity, u$7 as millisecondsToDuration, f$6 as rgb2hex, Z as rgb2hs, d$c as rgb2hsv, X as rgb2lab, u$b as rgbContrast, B$3 as rgbw2rgb, k$4 as rgbww2rgb, s$5 as round, a$5 as saveTokens, w$2 as stateActive, e$3 as stateColorBrightness, n$3 as subscribeAreaRegistry, n$2 as subscribeDeviceRegistry, g$1 as subscribeEntityRegistry, D$1 as subscribeLogbook, r$4 as supportsFeatureFromAttributes, I$4 as temperature2rgb, f$4 as timeAgo, a$3 as toReadableString, st as updateLocales, L as useAreas, se as useCamera, M$1 as useConfig, _$3 as useDevice, re as useEntity, g$2 as useHaStatus, oe as useHass, U$1 as useHistory, Ne as useIcon, De as useIconByDomain, Oe as useIconByEntity, M$3 as useLightBrightness, L$1 as useLightColor, n$5 as useLightTemperature, xe as useLocale, Ie as useLocales, G$1 as useLogs, O$1 as useLowDevices, x$2 as useService, k$1 as useSubscribeEntity, x as useTemplate, B as useWeather };
