function Ti(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
var Si = { exports: {} };
(function(a, e) {
  (function(t) {
    var i = /^(?=((?:[a-zA-Z0-9+\-.]+:)?))\1(?=((?:\/\/[^\/?#]*)?))\2(?=((?:(?:[^?#\/]*\/)*[^;?#\/]*)?))\3((?:;[^?#]*)?)(\?[^#]*)?(#[^]*)?$/, s = /^(?=([^\/?#]*))\1([^]*)$/, n = /(?:\/|^)\.(?=\/)/g, r = /(?:\/|^)\.\.\/(?!\.\.\/)[^\/]*(?=\/)/g, o = {
      // If opts.alwaysNormalize is true then the path will always be normalized even when it starts with / or //
      // E.g
      // With opts.alwaysNormalize = false (default, spec compliant)
      // http://a.com/b/cd + /e/f/../g => http://a.com/e/f/../g
      // With opts.alwaysNormalize = true (not spec compliant)
      // http://a.com/b/cd + /e/f/../g => http://a.com/e/g
      buildAbsoluteURL: function(l, d, u) {
        if (u = u || {}, l = l.trim(), d = d.trim(), !d) {
          if (!u.alwaysNormalize)
            return l;
          var h = o.parseURL(l);
          if (!h)
            throw new Error("Error trying to parse base URL.");
          return h.path = o.normalizePath(
            h.path
          ), o.buildURLFromParts(h);
        }
        var c = o.parseURL(d);
        if (!c)
          throw new Error("Error trying to parse relative URL.");
        if (c.scheme)
          return u.alwaysNormalize ? (c.path = o.normalizePath(c.path), o.buildURLFromParts(c)) : d;
        var f = o.parseURL(l);
        if (!f)
          throw new Error("Error trying to parse base URL.");
        if (!f.netLoc && f.path && f.path[0] !== "/") {
          var m = s.exec(f.path);
          f.netLoc = m[1], f.path = m[2];
        }
        f.netLoc && !f.path && (f.path = "/");
        var g = {
          // 2c) Otherwise, the embedded URL inherits the scheme of
          // the base URL.
          scheme: f.scheme,
          netLoc: c.netLoc,
          path: null,
          params: c.params,
          query: c.query,
          fragment: c.fragment
        };
        if (!c.netLoc && (g.netLoc = f.netLoc, c.path[0] !== "/"))
          if (!c.path)
            g.path = f.path, c.params || (g.params = f.params, c.query || (g.query = f.query));
          else {
            var p = f.path, y = p.substring(0, p.lastIndexOf("/") + 1) + c.path;
            g.path = o.normalizePath(y);
          }
        return g.path === null && (g.path = u.alwaysNormalize ? o.normalizePath(c.path) : c.path), o.buildURLFromParts(g);
      },
      parseURL: function(l) {
        var d = i.exec(l);
        return d ? {
          scheme: d[1] || "",
          netLoc: d[2] || "",
          path: d[3] || "",
          params: d[4] || "",
          query: d[5] || "",
          fragment: d[6] || ""
        } : null;
      },
      normalizePath: function(l) {
        for (l = l.split("").reverse().join("").replace(n, ""); l.length !== (l = l.replace(r, "")).length; )
          ;
        return l.split("").reverse().join("");
      },
      buildURLFromParts: function(l) {
        return l.scheme + l.netLoc + l.path + l.params + l.query + l.fragment;
      }
    };
    a.exports = o;
  })();
})(Si);
var Rt = Si.exports;
function Ft(a, e) {
  var t = Object.keys(a);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(a);
    e && (i = i.filter(function(s) {
      return Object.getOwnPropertyDescriptor(a, s).enumerable;
    })), t.push.apply(t, i);
  }
  return t;
}
function oe(a) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Ft(Object(t), true).forEach(function(i) {
      us(a, i, t[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(t)) : Ft(Object(t)).forEach(function(i) {
      Object.defineProperty(a, i, Object.getOwnPropertyDescriptor(t, i));
    });
  }
  return a;
}
function ls(a, e) {
  if (typeof a != "object" || !a) return a;
  var t = a[Symbol.toPrimitive];
  if (t !== void 0) {
    var i = t.call(a, e);
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(a);
}
function ds(a) {
  var e = ls(a, "string");
  return typeof e == "symbol" ? e : String(e);
}
function us(a, e, t) {
  return e = ds(e), e in a ? Object.defineProperty(a, e, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : a[e] = t, a;
}
function ae() {
  return ae = Object.assign ? Object.assign.bind() : function(a) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (a[i] = t[i]);
    }
    return a;
  }, ae.apply(this, arguments);
}
const k = Number.isFinite || function(a) {
  return typeof a == "number" && isFinite(a);
}, hs = Number.isSafeInteger || function(a) {
  return typeof a == "number" && Math.abs(a) <= cs;
}, cs = Number.MAX_SAFE_INTEGER || 9007199254740991;
let x = /* @__PURE__ */ function(a) {
  return a.MEDIA_ATTACHING = "hlsMediaAttaching", a.MEDIA_ATTACHED = "hlsMediaAttached", a.MEDIA_DETACHING = "hlsMediaDetaching", a.MEDIA_DETACHED = "hlsMediaDetached", a.BUFFER_RESET = "hlsBufferReset", a.BUFFER_CODECS = "hlsBufferCodecs", a.BUFFER_CREATED = "hlsBufferCreated", a.BUFFER_APPENDING = "hlsBufferAppending", a.BUFFER_APPENDED = "hlsBufferAppended", a.BUFFER_EOS = "hlsBufferEos", a.BUFFER_FLUSHING = "hlsBufferFlushing", a.BUFFER_FLUSHED = "hlsBufferFlushed", a.MANIFEST_LOADING = "hlsManifestLoading", a.MANIFEST_LOADED = "hlsManifestLoaded", a.MANIFEST_PARSED = "hlsManifestParsed", a.LEVEL_SWITCHING = "hlsLevelSwitching", a.LEVEL_SWITCHED = "hlsLevelSwitched", a.LEVEL_LOADING = "hlsLevelLoading", a.LEVEL_LOADED = "hlsLevelLoaded", a.LEVEL_UPDATED = "hlsLevelUpdated", a.LEVEL_PTS_UPDATED = "hlsLevelPtsUpdated", a.LEVELS_UPDATED = "hlsLevelsUpdated", a.AUDIO_TRACKS_UPDATED = "hlsAudioTracksUpdated", a.AUDIO_TRACK_SWITCHING = "hlsAudioTrackSwitching", a.AUDIO_TRACK_SWITCHED = "hlsAudioTrackSwitched", a.AUDIO_TRACK_LOADING = "hlsAudioTrackLoading", a.AUDIO_TRACK_LOADED = "hlsAudioTrackLoaded", a.SUBTITLE_TRACKS_UPDATED = "hlsSubtitleTracksUpdated", a.SUBTITLE_TRACKS_CLEARED = "hlsSubtitleTracksCleared", a.SUBTITLE_TRACK_SWITCH = "hlsSubtitleTrackSwitch", a.SUBTITLE_TRACK_LOADING = "hlsSubtitleTrackLoading", a.SUBTITLE_TRACK_LOADED = "hlsSubtitleTrackLoaded", a.SUBTITLE_FRAG_PROCESSED = "hlsSubtitleFragProcessed", a.CUES_PARSED = "hlsCuesParsed", a.NON_NATIVE_TEXT_TRACKS_FOUND = "hlsNonNativeTextTracksFound", a.INIT_PTS_FOUND = "hlsInitPtsFound", a.FRAG_LOADING = "hlsFragLoading", a.FRAG_LOAD_EMERGENCY_ABORTED = "hlsFragLoadEmergencyAborted", a.FRAG_LOADED = "hlsFragLoaded", a.FRAG_DECRYPTED = "hlsFragDecrypted", a.FRAG_PARSING_INIT_SEGMENT = "hlsFragParsingInitSegment", a.FRAG_PARSING_USERDATA = "hlsFragParsingUserdata", a.FRAG_PARSING_METADATA = "hlsFragParsingMetadata", a.FRAG_PARSED = "hlsFragParsed", a.FRAG_BUFFERED = "hlsFragBuffered", a.FRAG_CHANGED = "hlsFragChanged", a.FPS_DROP = "hlsFpsDrop", a.FPS_DROP_LEVEL_CAPPING = "hlsFpsDropLevelCapping", a.MAX_AUTO_LEVEL_UPDATED = "hlsMaxAutoLevelUpdated", a.ERROR = "hlsError", a.DESTROYING = "hlsDestroying", a.KEY_LOADING = "hlsKeyLoading", a.KEY_LOADED = "hlsKeyLoaded", a.LIVE_BACK_BUFFER_REACHED = "hlsLiveBackBufferReached", a.BACK_BUFFER_REACHED = "hlsBackBufferReached", a.STEERING_MANIFEST_LOADED = "hlsSteeringManifestLoaded", a;
}({}), K = /* @__PURE__ */ function(a) {
  return a.NETWORK_ERROR = "networkError", a.MEDIA_ERROR = "mediaError", a.KEY_SYSTEM_ERROR = "keySystemError", a.MUX_ERROR = "muxError", a.OTHER_ERROR = "otherError", a;
}({}), R = /* @__PURE__ */ function(a) {
  return a.KEY_SYSTEM_NO_KEYS = "keySystemNoKeys", a.KEY_SYSTEM_NO_ACCESS = "keySystemNoAccess", a.KEY_SYSTEM_NO_SESSION = "keySystemNoSession", a.KEY_SYSTEM_NO_CONFIGURED_LICENSE = "keySystemNoConfiguredLicense", a.KEY_SYSTEM_LICENSE_REQUEST_FAILED = "keySystemLicenseRequestFailed", a.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED = "keySystemServerCertificateRequestFailed", a.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED = "keySystemServerCertificateUpdateFailed", a.KEY_SYSTEM_SESSION_UPDATE_FAILED = "keySystemSessionUpdateFailed", a.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED = "keySystemStatusOutputRestricted", a.KEY_SYSTEM_STATUS_INTERNAL_ERROR = "keySystemStatusInternalError", a.MANIFEST_LOAD_ERROR = "manifestLoadError", a.MANIFEST_LOAD_TIMEOUT = "manifestLoadTimeOut", a.MANIFEST_PARSING_ERROR = "manifestParsingError", a.MANIFEST_INCOMPATIBLE_CODECS_ERROR = "manifestIncompatibleCodecsError", a.LEVEL_EMPTY_ERROR = "levelEmptyError", a.LEVEL_LOAD_ERROR = "levelLoadError", a.LEVEL_LOAD_TIMEOUT = "levelLoadTimeOut", a.LEVEL_PARSING_ERROR = "levelParsingError", a.LEVEL_SWITCH_ERROR = "levelSwitchError", a.AUDIO_TRACK_LOAD_ERROR = "audioTrackLoadError", a.AUDIO_TRACK_LOAD_TIMEOUT = "audioTrackLoadTimeOut", a.SUBTITLE_LOAD_ERROR = "subtitleTrackLoadError", a.SUBTITLE_TRACK_LOAD_TIMEOUT = "subtitleTrackLoadTimeOut", a.FRAG_LOAD_ERROR = "fragLoadError", a.FRAG_LOAD_TIMEOUT = "fragLoadTimeOut", a.FRAG_DECRYPT_ERROR = "fragDecryptError", a.FRAG_PARSING_ERROR = "fragParsingError", a.FRAG_GAP = "fragGap", a.REMUX_ALLOC_ERROR = "remuxAllocError", a.KEY_LOAD_ERROR = "keyLoadError", a.KEY_LOAD_TIMEOUT = "keyLoadTimeOut", a.BUFFER_ADD_CODEC_ERROR = "bufferAddCodecError", a.BUFFER_INCOMPATIBLE_CODECS_ERROR = "bufferIncompatibleCodecsError", a.BUFFER_APPEND_ERROR = "bufferAppendError", a.BUFFER_APPENDING_ERROR = "bufferAppendingError", a.BUFFER_STALLED_ERROR = "bufferStalledError", a.BUFFER_FULL_ERROR = "bufferFullError", a.BUFFER_SEEK_OVER_HOLE = "bufferSeekOverHole", a.BUFFER_NUDGE_ON_STALL = "bufferNudgeOnStall", a.INTERNAL_EXCEPTION = "internalException", a.INTERNAL_ABORTED = "aborted", a.UNKNOWN = "unknown", a;
}({});
const Le = function() {
}, yt = {
  trace: Le,
  debug: Le,
  log: Le,
  warn: Le,
  info: Le,
  error: Le
};
let Fe = yt;
function fs(a) {
  const e = self.console[a];
  return e ? e.bind(self.console, `[${a}] >`) : Le;
}
function ms(a, ...e) {
  e.forEach(function(t) {
    Fe[t] = a[t] ? a[t].bind(a) : fs(t);
  });
}
function gs(a, e) {
  if (typeof console == "object" && a === true || typeof a == "object") {
    ms(
      a,
      // Remove out from list here to hard-disable a log-level
      // 'trace',
      "debug",
      "log",
      "info",
      "warn",
      "error"
    );
    try {
      Fe.log(`Debug logs enabled for "${e}" in hls.js version 1.5.18`);
    } catch {
      Fe = yt;
    }
  } else
    Fe = yt;
}
const L = Fe, ps = /^(\d+)x(\d+)$/, Ot = /(.+?)=(".*?"|.*?)(?:,|$)/g;
class Z {
  constructor(e) {
    typeof e == "string" && (e = Z.parseAttrList(e)), ae(this, e);
  }
  get clientAttrs() {
    return Object.keys(this).filter((e) => e.substring(0, 2) === "X-");
  }
  decimalInteger(e) {
    const t = parseInt(this[e], 10);
    return t > Number.MAX_SAFE_INTEGER ? 1 / 0 : t;
  }
  hexadecimalInteger(e) {
    if (this[e]) {
      let t = (this[e] || "0x").slice(2);
      t = (t.length & 1 ? "0" : "") + t;
      const i = new Uint8Array(t.length / 2);
      for (let s = 0; s < t.length / 2; s++)
        i[s] = parseInt(t.slice(s * 2, s * 2 + 2), 16);
      return i;
    } else
      return null;
  }
  hexadecimalIntegerAsNumber(e) {
    const t = parseInt(this[e], 16);
    return t > Number.MAX_SAFE_INTEGER ? 1 / 0 : t;
  }
  decimalFloatingPoint(e) {
    return parseFloat(this[e]);
  }
  optionalFloat(e, t) {
    const i = this[e];
    return i ? parseFloat(i) : t;
  }
  enumeratedString(e) {
    return this[e];
  }
  bool(e) {
    return this[e] === "YES";
  }
  decimalResolution(e) {
    const t = ps.exec(this[e]);
    if (t !== null)
      return {
        width: parseInt(t[1], 10),
        height: parseInt(t[2], 10)
      };
  }
  static parseAttrList(e) {
    let t;
    const i = {}, s = '"';
    for (Ot.lastIndex = 0; (t = Ot.exec(e)) !== null; ) {
      let n = t[2];
      n.indexOf(s) === 0 && n.lastIndexOf(s) === n.length - 1 && (n = n.slice(1, -1));
      const r = t[1].trim();
      i[r] = n;
    }
    return i;
  }
}
function xs(a) {
  return a !== "ID" && a !== "CLASS" && a !== "START-DATE" && a !== "DURATION" && a !== "END-DATE" && a !== "END-ON-NEXT";
}
function ys(a) {
  return a === "SCTE35-OUT" || a === "SCTE35-IN";
}
class Li {
  constructor(e, t) {
    if (this.attr = void 0, this._startDate = void 0, this._endDate = void 0, this._badValueForSameId = void 0, t) {
      const i = t.attr;
      for (const s in i)
        if (Object.prototype.hasOwnProperty.call(e, s) && e[s] !== i[s]) {
          L.warn(`DATERANGE tag attribute: "${s}" does not match for tags with ID: "${e.ID}"`), this._badValueForSameId = s;
          break;
        }
      e = ae(new Z({}), i, e);
    }
    if (this.attr = e, this._startDate = new Date(e["START-DATE"]), "END-DATE" in this.attr) {
      const i = new Date(this.attr["END-DATE"]);
      k(i.getTime()) && (this._endDate = i);
    }
  }
  get id() {
    return this.attr.ID;
  }
  get class() {
    return this.attr.CLASS;
  }
  get startDate() {
    return this._startDate;
  }
  get endDate() {
    if (this._endDate)
      return this._endDate;
    const e = this.duration;
    return e !== null ? new Date(this._startDate.getTime() + e * 1e3) : null;
  }
  get duration() {
    if ("DURATION" in this.attr) {
      const e = this.attr.decimalFloatingPoint("DURATION");
      if (k(e))
        return e;
    } else if (this._endDate)
      return (this._endDate.getTime() - this._startDate.getTime()) / 1e3;
    return null;
  }
  get plannedDuration() {
    return "PLANNED-DURATION" in this.attr ? this.attr.decimalFloatingPoint("PLANNED-DURATION") : null;
  }
  get endOnNext() {
    return this.attr.bool("END-ON-NEXT");
  }
  get isValid() {
    return !!this.id && !this._badValueForSameId && k(this.startDate.getTime()) && (this.duration === null || this.duration >= 0) && (!this.endOnNext || !!this.class);
  }
}
class et {
  constructor() {
    this.aborted = false, this.loaded = 0, this.retry = 0, this.total = 0, this.chunkCount = 0, this.bwEstimate = 0, this.loading = {
      start: 0,
      first: 0,
      end: 0
    }, this.parsing = {
      start: 0,
      end: 0
    }, this.buffering = {
      start: 0,
      first: 0,
      end: 0
    };
  }
}
var Q = {
  AUDIO: "audio",
  VIDEO: "video",
  AUDIOVIDEO: "audiovideo"
};
class vi {
  constructor(e) {
    this._byteRange = null, this._url = null, this.baseurl = void 0, this.relurl = void 0, this.elementaryStreams = {
      [Q.AUDIO]: null,
      [Q.VIDEO]: null,
      [Q.AUDIOVIDEO]: null
    }, this.baseurl = e;
  }
  // setByteRange converts a EXT-X-BYTERANGE attribute into a two element array
  setByteRange(e, t) {
    const i = e.split("@", 2);
    let s;
    i.length === 1 ? s = t?.byteRangeEndOffset || 0 : s = parseInt(i[1]), this._byteRange = [s, parseInt(i[0]) + s];
  }
  get byteRange() {
    return this._byteRange ? this._byteRange : [];
  }
  get byteRangeStartOffset() {
    return this.byteRange[0];
  }
  get byteRangeEndOffset() {
    return this.byteRange[1];
  }
  get url() {
    return !this._url && this.baseurl && this.relurl && (this._url = Rt.buildAbsoluteURL(this.baseurl, this.relurl, {
      alwaysNormalize: true
    })), this._url || "";
  }
  set url(e) {
    this._url = e;
  }
}
class st extends vi {
  constructor(e, t) {
    super(t), this._decryptdata = null, this.rawProgramDateTime = null, this.programDateTime = null, this.tagList = [], this.duration = 0, this.sn = 0, this.levelkeys = void 0, this.type = void 0, this.loader = null, this.keyLoader = null, this.level = -1, this.cc = 0, this.startPTS = void 0, this.endPTS = void 0, this.startDTS = void 0, this.endDTS = void 0, this.start = 0, this.deltaPTS = void 0, this.maxStartPTS = void 0, this.minEndPTS = void 0, this.stats = new et(), this.data = void 0, this.bitrateTest = false, this.title = null, this.initSegment = null, this.endList = void 0, this.gap = void 0, this.urlId = 0, this.type = e;
  }
  get decryptdata() {
    const {
      levelkeys: e
    } = this;
    if (!e && !this._decryptdata)
      return null;
    if (!this._decryptdata && this.levelkeys && !this.levelkeys.NONE) {
      const t = this.levelkeys.identity;
      if (t)
        this._decryptdata = t.getDecryptData(this.sn);
      else {
        const i = Object.keys(this.levelkeys);
        if (i.length === 1)
          return this._decryptdata = this.levelkeys[i[0]].getDecryptData(this.sn);
      }
    }
    return this._decryptdata;
  }
  get end() {
    return this.start + this.duration;
  }
  get endProgramDateTime() {
    if (this.programDateTime === null || !k(this.programDateTime))
      return null;
    const e = k(this.duration) ? this.duration : 0;
    return this.programDateTime + e * 1e3;
  }
  get encrypted() {
    var e;
    if ((e = this._decryptdata) != null && e.encrypted)
      return true;
    if (this.levelkeys) {
      const t = Object.keys(this.levelkeys), i = t.length;
      if (i > 1 || i === 1 && this.levelkeys[t[0]].encrypted)
        return true;
    }
    return false;
  }
  setKeyFormat(e) {
    if (this.levelkeys) {
      const t = this.levelkeys[e];
      t && !this._decryptdata && (this._decryptdata = t.getDecryptData(this.sn));
    }
  }
  abortRequests() {
    var e, t;
    (e = this.loader) == null || e.abort(), (t = this.keyLoader) == null || t.abort();
  }
  setElementaryStreamInfo(e, t, i, s, n, r = false) {
    const {
      elementaryStreams: o
    } = this, l = o[e];
    if (!l) {
      o[e] = {
        startPTS: t,
        endPTS: i,
        startDTS: s,
        endDTS: n,
        partial: r
      };
      return;
    }
    l.startPTS = Math.min(l.startPTS, t), l.endPTS = Math.max(l.endPTS, i), l.startDTS = Math.min(l.startDTS, s), l.endDTS = Math.max(l.endDTS, n);
  }
  clearElementaryStreamInfo() {
    const {
      elementaryStreams: e
    } = this;
    e[Q.AUDIO] = null, e[Q.VIDEO] = null, e[Q.AUDIOVIDEO] = null;
  }
}
class Es extends vi {
  constructor(e, t, i, s, n) {
    super(i), this.fragOffset = 0, this.duration = 0, this.gap = false, this.independent = false, this.relurl = void 0, this.fragment = void 0, this.index = void 0, this.stats = new et(), this.duration = e.decimalFloatingPoint("DURATION"), this.gap = e.bool("GAP"), this.independent = e.bool("INDEPENDENT"), this.relurl = e.enumeratedString("URI"), this.fragment = t, this.index = s;
    const r = e.enumeratedString("BYTERANGE");
    r && this.setByteRange(r, n), n && (this.fragOffset = n.fragOffset + n.duration);
  }
  get start() {
    return this.fragment.start + this.fragOffset;
  }
  get end() {
    return this.start + this.duration;
  }
  get loaded() {
    const {
      elementaryStreams: e
    } = this;
    return !!(e.audio || e.video || e.audiovideo);
  }
}
const Ts = 10;
class Ss {
  constructor(e) {
    this.PTSKnown = false, this.alignedSliding = false, this.averagetargetduration = void 0, this.endCC = 0, this.endSN = 0, this.fragments = void 0, this.fragmentHint = void 0, this.partList = null, this.dateRanges = void 0, this.live = true, this.ageHeader = 0, this.advancedDateTime = void 0, this.updated = true, this.advanced = true, this.availabilityDelay = void 0, this.misses = 0, this.startCC = 0, this.startSN = 0, this.startTimeOffset = null, this.targetduration = 0, this.totalduration = 0, this.type = null, this.url = void 0, this.m3u8 = "", this.version = null, this.canBlockReload = false, this.canSkipUntil = 0, this.canSkipDateRanges = false, this.skippedSegments = 0, this.recentlyRemovedDateranges = void 0, this.partHoldBack = 0, this.holdBack = 0, this.partTarget = 0, this.preloadHint = void 0, this.renditionReports = void 0, this.tuneInGoal = 0, this.deltaUpdateFailed = void 0, this.driftStartTime = 0, this.driftEndTime = 0, this.driftStart = 0, this.driftEnd = 0, this.encryptedFragments = void 0, this.playlistParsingError = null, this.variableList = null, this.hasVariableRefs = false, this.fragments = [], this.encryptedFragments = [], this.dateRanges = {}, this.url = e;
  }
  reloaded(e) {
    if (!e) {
      this.advanced = true, this.updated = true;
      return;
    }
    const t = this.lastPartSn - e.lastPartSn, i = this.lastPartIndex - e.lastPartIndex;
    this.updated = this.endSN !== e.endSN || !!i || !!t || !this.live, this.advanced = this.endSN > e.endSN || t > 0 || t === 0 && i > 0, this.updated || this.advanced ? this.misses = Math.floor(e.misses * 0.6) : this.misses = e.misses + 1, this.availabilityDelay = e.availabilityDelay;
  }
  get hasProgramDateTime() {
    return this.fragments.length ? k(this.fragments[this.fragments.length - 1].programDateTime) : false;
  }
  get levelTargetDuration() {
    return this.averagetargetduration || this.targetduration || Ts;
  }
  get drift() {
    const e = this.driftEndTime - this.driftStartTime;
    return e > 0 ? (this.driftEnd - this.driftStart) * 1e3 / e : 1;
  }
  get edge() {
    return this.partEnd || this.fragmentEnd;
  }
  get partEnd() {
    var e;
    return (e = this.partList) != null && e.length ? this.partList[this.partList.length - 1].end : this.fragmentEnd;
  }
  get fragmentEnd() {
    var e;
    return (e = this.fragments) != null && e.length ? this.fragments[this.fragments.length - 1].end : 0;
  }
  get age() {
    return this.advancedDateTime ? Math.max(Date.now() - this.advancedDateTime, 0) / 1e3 : 0;
  }
  get lastPartIndex() {
    var e;
    return (e = this.partList) != null && e.length ? this.partList[this.partList.length - 1].index : -1;
  }
  get lastPartSn() {
    var e;
    return (e = this.partList) != null && e.length ? this.partList[this.partList.length - 1].fragment.sn : this.endSN;
  }
}
var Oe = {}, Ls = /* @__PURE__ */ Ti(Oe);
function ve(a, e, t) {
  return Uint8Array.prototype.slice ? a.slice(e, t) : new Uint8Array(Array.prototype.slice.call(a, e, t));
}
const bt = (a, e) => e + 10 <= a.length && a[e] === 73 && a[e + 1] === 68 && a[e + 2] === 51 && a[e + 3] < 255 && a[e + 4] < 255 && a[e + 6] < 128 && a[e + 7] < 128 && a[e + 8] < 128 && a[e + 9] < 128, Ai = (a, e) => e + 10 <= a.length && a[e] === 51 && a[e + 1] === 68 && a[e + 2] === 73 && a[e + 3] < 255 && a[e + 4] < 255 && a[e + 6] < 128 && a[e + 7] < 128 && a[e + 8] < 128 && a[e + 9] < 128, Ke = (a, e) => {
  const t = e;
  let i = 0;
  for (; bt(a, e); ) {
    i += 10;
    const s = tt(a, e + 6);
    i += s, Ai(a, e + 10) && (i += 10), e += i;
  }
  if (i > 0)
    return a.subarray(t, t + i);
}, tt = (a, e) => {
  let t = 0;
  return t = (a[e] & 127) << 21, t |= (a[e + 1] & 127) << 14, t |= (a[e + 2] & 127) << 7, t |= a[e + 3] & 127, t;
}, vs = (a, e) => bt(a, e) && tt(a, e + 6) + 10 <= a.length - e, Ri = (a) => {
  const e = Ii(a);
  for (let t = 0; t < e.length; t++) {
    const i = e[t];
    if (bi(i))
      return Cs(i);
  }
}, bi = (a) => a && a.key === "PRIV" && a.info === "com.apple.streaming.transportStreamTimestamp", As = (a) => {
  const e = String.fromCharCode(a[0], a[1], a[2], a[3]), t = tt(a, 4), i = 10;
  return {
    type: e,
    size: t,
    data: a.subarray(i, i + t)
  };
}, Ii = (a) => {
  let e = 0;
  const t = [];
  for (; bt(a, e); ) {
    const i = tt(a, e + 6);
    e += 10;
    const s = e + i;
    for (; e + 8 < s; ) {
      const n = As(a.subarray(e)), r = Rs(n);
      r && t.push(r), e += n.size + 10;
    }
    Ai(a, e) && (e += 10);
  }
  return t;
}, Rs = (a) => a.type === "PRIV" ? bs(a) : a.type[0] === "W" ? Ds(a) : Is(a), bs = (a) => {
  if (a.size < 2)
    return;
  const e = Se(a.data, true), t = new Uint8Array(a.data.subarray(e.length + 1));
  return {
    key: a.type,
    info: e,
    data: t.buffer
  };
}, Is = (a) => {
  if (a.size < 2)
    return;
  if (a.type === "TXXX") {
    let t = 1;
    const i = Se(a.data.subarray(t), true);
    t += i.length + 1;
    const s = Se(a.data.subarray(t));
    return {
      key: a.type,
      info: i,
      data: s
    };
  }
  const e = Se(a.data.subarray(1));
  return {
    key: a.type,
    data: e
  };
}, Ds = (a) => {
  if (a.type === "WXXX") {
    if (a.size < 2)
      return;
    let t = 1;
    const i = Se(a.data.subarray(t), true);
    t += i.length + 1;
    const s = Se(a.data.subarray(t));
    return {
      key: a.type,
      info: i,
      data: s
    };
  }
  const e = Se(a.data);
  return {
    key: a.type,
    data: e
  };
}, Cs = (a) => {
  if (a.data.byteLength === 8) {
    const e = new Uint8Array(a.data), t = e[3] & 1;
    let i = (e[4] << 23) + (e[5] << 15) + (e[6] << 7) + e[7];
    return i /= 45, t && (i += 4772185884e-2), Math.round(i);
  }
}, Se = (a, e = false) => {
  const t = _s();
  if (t) {
    const d = t.decode(a);
    if (e) {
      const u = d.indexOf("\0");
      return u !== -1 ? d.substring(0, u) : d;
    }
    return d.replace(/\0/g, "");
  }
  const i = a.length;
  let s, n, r, o = "", l = 0;
  for (; l < i; ) {
    if (s = a[l++], s === 0 && e)
      return o;
    if (s === 0 || s === 3)
      continue;
    switch (s >> 4) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
        o += String.fromCharCode(s);
        break;
      case 12:
      case 13:
        n = a[l++], o += String.fromCharCode((s & 31) << 6 | n & 63);
        break;
      case 14:
        n = a[l++], r = a[l++], o += String.fromCharCode((s & 15) << 12 | (n & 63) << 6 | (r & 63) << 0);
        break;
    }
  }
  return o;
};
let nt;
function _s() {
  if (!navigator.userAgent.includes("PlayStation 4"))
    return !nt && typeof self.TextDecoder < "u" && (nt = new self.TextDecoder("utf-8")), nt;
}
const kt = {
  hexDump: function(a) {
    let e = "";
    for (let t = 0; t < a.length; t++) {
      let i = a[t].toString(16);
      i.length < 2 && (i = "0" + i), e += i;
    }
    return e;
  }
}, We = Math.pow(2, 32) - 1, ws = [].push, Di = {
  video: 1,
  audio: 2,
  id3: 3,
  text: 4
};
function te(a) {
  return String.fromCharCode.apply(null, a);
}
function Ci(a, e) {
  const t = a[e] << 8 | a[e + 1];
  return t < 0 ? 65536 + t : t;
}
function N(a, e) {
  const t = _i(a, e);
  return t < 0 ? 4294967296 + t : t;
}
function Mt(a, e) {
  let t = N(a, e);
  return t *= Math.pow(2, 32), t += N(a, e + 4), t;
}
function _i(a, e) {
  return a[e] << 24 | a[e + 1] << 16 | a[e + 2] << 8 | a[e + 3];
}
function rt(a, e, t) {
  a[e] = t >> 24, a[e + 1] = t >> 16 & 255, a[e + 2] = t >> 8 & 255, a[e + 3] = t & 255;
}
function Ps(a) {
  const e = a.byteLength;
  for (let t = 0; t < e; ) {
    const i = N(a, t);
    if (i > 8 && a[t + 4] === 109 && a[t + 5] === 111 && a[t + 6] === 111 && a[t + 7] === 102)
      return true;
    t = i > 1 ? t + i : e;
  }
  return false;
}
function G(a, e) {
  const t = [];
  if (!e.length)
    return t;
  const i = a.byteLength;
  for (let s = 0; s < i; ) {
    const n = N(a, s), r = te(a.subarray(s + 4, s + 8)), o = n > 1 ? s + n : i;
    if (r === e[0])
      if (e.length === 1)
        t.push(a.subarray(s + 8, o));
      else {
        const l = G(a.subarray(s + 8, o), e.slice(1));
        l.length && ws.apply(t, l);
      }
    s = o;
  }
  return t;
}
function Fs(a) {
  const e = [], t = a[0];
  let i = 8;
  const s = N(a, i);
  i += 4;
  let n = 0, r = 0;
  t === 0 ? (n = N(a, i), r = N(a, i + 4), i += 8) : (n = Mt(a, i), r = Mt(a, i + 8), i += 16), i += 2;
  let o = a.length + r;
  const l = Ci(a, i);
  i += 2;
  for (let d = 0; d < l; d++) {
    let u = i;
    const h = N(a, u);
    u += 4;
    const c = h & 2147483647;
    if ((h & 2147483648) >>> 31 === 1)
      return L.warn("SIDX has hierarchical references (not supported)"), null;
    const m = N(a, u);
    u += 4, e.push({
      referenceSize: c,
      subsegmentDuration: m,
      // unscaled
      info: {
        duration: m / s,
        start: o,
        end: o + c - 1
      }
    }), o += c, u += 4, i = u;
  }
  return {
    earliestPresentationTime: n,
    timescale: s,
    version: t,
    referencesCount: l,
    references: e
  };
}
function wi(a) {
  const e = [], t = G(a, ["moov", "trak"]);
  for (let s = 0; s < t.length; s++) {
    const n = t[s], r = G(n, ["tkhd"])[0];
    if (r) {
      let o = r[0];
      const l = N(r, o === 0 ? 12 : 20), d = G(n, ["mdia", "mdhd"])[0];
      if (d) {
        o = d[0];
        const u = N(d, o === 0 ? 12 : 20), h = G(n, ["mdia", "hdlr"])[0];
        if (h) {
          const c = te(h.subarray(8, 12)), f = {
            soun: Q.AUDIO,
            vide: Q.VIDEO
          }[c];
          if (f) {
            const m = G(n, ["mdia", "minf", "stbl", "stsd"])[0], g = Os(m);
            e[l] = {
              timescale: u,
              type: f
            }, e[f] = oe({
              timescale: u,
              id: l
            }, g);
          }
        }
      }
    }
  }
  return G(a, ["moov", "mvex", "trex"]).forEach((s) => {
    const n = N(s, 4), r = e[n];
    r && (r.default = {
      duration: N(s, 12),
      flags: N(s, 20)
    });
  }), e;
}
function Os(a) {
  const e = a.subarray(8), t = e.subarray(86), i = te(e.subarray(4, 8));
  let s = i;
  const n = i === "enca" || i === "encv";
  if (n) {
    const o = G(e, [i])[0].subarray(i === "enca" ? 28 : 78);
    G(o, ["sinf"]).forEach((d) => {
      const u = G(d, ["schm"])[0];
      if (u) {
        const h = te(u.subarray(4, 8));
        if (h === "cbcs" || h === "cenc") {
          const c = G(d, ["frma"])[0];
          c && (s = te(c));
        }
      }
    });
  }
  switch (s) {
    case "avc1":
    case "avc2":
    case "avc3":
    case "avc4": {
      const r = G(t, ["avcC"])[0];
      s += "." + ke(r[1]) + ke(r[2]) + ke(r[3]);
      break;
    }
    case "mp4a": {
      const r = G(e, [i])[0], o = G(r.subarray(28), ["esds"])[0];
      if (o && o.length > 12) {
        let l = 4;
        if (o[l++] !== 3)
          break;
        l = at(o, l), l += 2;
        const d = o[l++];
        if (d & 128 && (l += 2), d & 64 && (l += o[l++]), o[l++] !== 4)
          break;
        l = at(o, l);
        const u = o[l++];
        if (u === 64)
          s += "." + ke(u);
        else
          break;
        if (l += 12, o[l++] !== 5)
          break;
        l = at(o, l);
        const h = o[l++];
        let c = (h & 248) >> 3;
        c === 31 && (c += 1 + ((h & 7) << 3) + ((o[l] & 224) >> 5)), s += "." + c;
      }
      break;
    }
    case "hvc1":
    case "hev1": {
      const r = G(t, ["hvcC"])[0], o = r[1], l = ["", "A", "B", "C"][o >> 6], d = o & 31, u = N(r, 2), h = (o & 32) >> 5 ? "H" : "L", c = r[12], f = r.subarray(6, 12);
      s += "." + l + d, s += "." + u.toString(16).toUpperCase(), s += "." + h + c;
      let m = "";
      for (let g = f.length; g--; ) {
        const p = f[g];
        (p || m) && (m = "." + p.toString(16).toUpperCase() + m);
      }
      s += m;
      break;
    }
    case "dvh1":
    case "dvhe": {
      const r = G(t, ["dvcC"])[0], o = r[2] >> 1 & 127, l = r[2] << 5 & 32 | r[3] >> 3 & 31;
      s += "." + fe(o) + "." + fe(l);
      break;
    }
    case "vp09": {
      const r = G(t, ["vpcC"])[0], o = r[4], l = r[5], d = r[6] >> 4 & 15;
      s += "." + fe(o) + "." + fe(l) + "." + fe(d);
      break;
    }
    case "av01": {
      const r = G(t, ["av1C"])[0], o = r[1] >>> 5, l = r[1] & 31, d = r[2] >>> 7 ? "H" : "M", u = (r[2] & 64) >> 6, h = (r[2] & 32) >> 5, c = o === 2 && u ? h ? 12 : 10 : u ? 10 : 8, f = (r[2] & 16) >> 4, m = (r[2] & 8) >> 3, g = (r[2] & 4) >> 2, p = r[2] & 3;
      s += "." + o + "." + fe(l) + d + "." + fe(c) + "." + f + "." + m + g + p + "." + fe(1) + "." + fe(1) + "." + fe(1) + "." + 0;
      break;
    }
  }
  return {
    codec: s,
    encrypted: n
  };
}
function at(a, e) {
  const t = e + 5;
  for (; a[e++] & 128 && e < t; )
    ;
  return e;
}
function ke(a) {
  return ("0" + a.toString(16).toUpperCase()).slice(-2);
}
function fe(a) {
  return (a < 10 ? "0" : "") + a;
}
function ks(a, e) {
  if (!a || !e)
    return a;
  const t = e.keyId;
  return t && e.isCommonEncryption && G(a, ["moov", "trak"]).forEach((s) => {
    const r = G(s, ["mdia", "minf", "stbl", "stsd"])[0].subarray(8);
    let o = G(r, ["enca"]);
    const l = o.length > 0;
    l || (o = G(r, ["encv"])), o.forEach((d) => {
      const u = l ? d.subarray(28) : d.subarray(78);
      G(u, ["sinf"]).forEach((c) => {
        const f = Ms(c);
        if (f) {
          const m = f.subarray(8, 24);
          m.some((g) => g !== 0) || (L.log(`[eme] Patching keyId in 'enc${l ? "a" : "v"}>sinf>>tenc' box: ${kt.hexDump(m)} -> ${kt.hexDump(t)}`), f.set(t, 8));
        }
      });
    });
  }), a;
}
function Ms(a) {
  const e = G(a, ["schm"])[0];
  if (e) {
    const t = te(e.subarray(4, 8));
    if (t === "cbcs" || t === "cenc")
      return G(a, ["schi", "tenc"])[0];
  }
  return null;
}
function Ns(a, e) {
  return G(e, ["moof", "traf"]).reduce((t, i) => {
    const s = G(i, ["tfdt"])[0], n = s[0], r = G(i, ["tfhd"]).reduce((o, l) => {
      const d = N(l, 4), u = a[d];
      if (u) {
        let h = N(s, 4);
        if (n === 1) {
          if (h === We)
            return L.warn("[mp4-demuxer]: Ignoring assumed invalid signed 64-bit track fragment decode time"), o;
          h *= We + 1, h += N(s, 8);
        }
        const c = u.timescale || 9e4, f = h / c;
        if (k(f) && (o === null || f < o))
          return f;
      }
      return o;
    }, null);
    return r !== null && k(r) && (t === null || r < t) ? r : t;
  }, null);
}
function Bs(a, e) {
  let t = 0, i = 0, s = 0;
  const n = G(a, ["moof", "traf"]);
  for (let r = 0; r < n.length; r++) {
    const o = n[r], l = G(o, ["tfhd"])[0], d = N(l, 4), u = e[d];
    if (!u)
      continue;
    const h = u.default, c = N(l, 0) | h?.flags;
    let f = h?.duration;
    c & 8 && (c & 2 ? f = N(l, 12) : f = N(l, 8));
    const m = u.timescale || 9e4, g = G(o, ["trun"]);
    for (let p = 0; p < g.length; p++) {
      if (t = Us(g[p]), !t && f) {
        const y = N(g[p], 4);
        t = f * y;
      }
      u.type === Q.VIDEO ? i += t / m : u.type === Q.AUDIO && (s += t / m);
    }
  }
  if (i === 0 && s === 0) {
    let r = 1 / 0, o = 0, l = 0;
    const d = G(a, ["sidx"]);
    for (let u = 0; u < d.length; u++) {
      const h = Fs(d[u]);
      if (h != null && h.references) {
        r = Math.min(r, h.earliestPresentationTime / h.timescale);
        const c = h.references.reduce((f, m) => f + m.info.duration || 0, 0);
        o = Math.max(o, c + h.earliestPresentationTime / h.timescale), l = o - r;
      }
    }
    if (l && k(l))
      return l;
  }
  return i || s;
}
function Us(a) {
  const e = N(a, 0);
  let t = 8;
  e & 1 && (t += 4), e & 4 && (t += 4);
  let i = 0;
  const s = N(a, 4);
  for (let n = 0; n < s; n++) {
    if (e & 256) {
      const r = N(a, t);
      i += r, t += 4;
    }
    e & 512 && (t += 4), e & 1024 && (t += 4), e & 2048 && (t += 4);
  }
  return i;
}
function $s(a, e, t) {
  G(e, ["moof", "traf"]).forEach((i) => {
    G(i, ["tfhd"]).forEach((s) => {
      const n = N(s, 4), r = a[n];
      if (!r)
        return;
      const o = r.timescale || 9e4;
      G(i, ["tfdt"]).forEach((l) => {
        const d = l[0], u = t * o;
        if (u) {
          let h = N(l, 4);
          if (d === 0)
            h -= u, h = Math.max(h, 0), rt(l, 4, h);
          else {
            h *= Math.pow(2, 32), h += N(l, 8), h -= u, h = Math.max(h, 0);
            const c = Math.floor(h / (We + 1)), f = Math.floor(h % (We + 1));
            rt(l, 4, c), rt(l, 8, f);
          }
        }
      });
    });
  });
}
function Gs(a) {
  const e = {
    valid: null,
    remainder: null
  }, t = G(a, ["moof"]);
  if (t.length < 2)
    return e.remainder = a, e;
  const i = t[t.length - 1];
  return e.valid = ve(a, 0, i.byteOffset - 8), e.remainder = ve(a, i.byteOffset - 8), e;
}
function ce(a, e) {
  const t = new Uint8Array(a.length + e.length);
  return t.set(a), t.set(e, a.length), t;
}
function Nt(a, e) {
  const t = [], i = e.samples, s = e.timescale, n = e.id;
  let r = false;
  return G(i, ["moof"]).map((l) => {
    const d = l.byteOffset - 8;
    G(l, ["traf"]).map((h) => {
      const c = G(h, ["tfdt"]).map((f) => {
        const m = f[0];
        let g = N(f, 4);
        return m === 1 && (g *= Math.pow(2, 32), g += N(f, 8)), g / s;
      })[0];
      return c !== void 0 && (a = c), G(h, ["tfhd"]).map((f) => {
        const m = N(f, 4), g = N(f, 0) & 16777215, p = (g & 1) !== 0, y = (g & 2) !== 0, v = (g & 8) !== 0;
        let E = 0;
        const b = (g & 16) !== 0;
        let S = 0;
        const I = (g & 32) !== 0;
        let A = 8;
        m === n && (p && (A += 8), y && (A += 4), v && (E = N(f, A), A += 4), b && (S = N(f, A), A += 4), I && (A += 4), e.type === "video" && (r = Vs(e.codec)), G(h, ["trun"]).map((D) => {
          const P = D[0], _ = N(D, 0) & 16777215, C = (_ & 1) !== 0;
          let $ = 0;
          const M = (_ & 4) !== 0, U = (_ & 256) !== 0;
          let B = 0;
          const V = (_ & 512) !== 0;
          let W = 0;
          const X = (_ & 1024) !== 0, O = (_ & 2048) !== 0;
          let F = 0;
          const Y = N(D, 4);
          let H = 8;
          C && ($ = N(D, H), H += 4), M && (H += 4);
          let z = $ + d;
          for (let se = 0; se < Y; se++) {
            if (U ? (B = N(D, H), H += 4) : B = E, V ? (W = N(D, H), H += 4) : W = S, X && (H += 4), O && (P === 0 ? F = N(D, H) : F = _i(D, H), H += 4), e.type === Q.VIDEO) {
              let le = 0;
              for (; le < W; ) {
                const ne = N(i, z);
                if (z += 4, Hs(r, i[z])) {
                  const Re = i.subarray(z, z + ne);
                  Pi(Re, r ? 2 : 1, a + F / s, t);
                }
                z += ne, le += ne + 4;
              }
            }
            a += B / s;
          }
        }));
      });
    });
  }), t;
}
function Vs(a) {
  if (!a)
    return false;
  const e = a.indexOf("."), t = e < 0 ? a : a.substring(0, e);
  return t === "hvc1" || t === "hev1" || // Dolby Vision
  t === "dvh1" || t === "dvhe";
}
function Hs(a, e) {
  if (a) {
    const t = e >> 1 & 63;
    return t === 39 || t === 40;
  } else
    return (e & 31) === 6;
}
function Pi(a, e, t, i) {
  const s = Fi(a);
  let n = 0;
  n += e;
  let r = 0, o = 0, l = 0;
  for (; n < s.length; ) {
    r = 0;
    do {
      if (n >= s.length)
        break;
      l = s[n++], r += l;
    } while (l === 255);
    o = 0;
    do {
      if (n >= s.length)
        break;
      l = s[n++], o += l;
    } while (l === 255);
    const d = s.length - n;
    let u = n;
    if (o < d)
      n += o;
    else if (o > d) {
      L.error(`Malformed SEI payload. ${o} is too small, only ${d} bytes left to parse.`);
      break;
    }
    if (r === 4) {
      if (s[u++] === 181) {
        const c = Ci(s, u);
        if (u += 2, c === 49) {
          const f = N(s, u);
          if (u += 4, f === 1195456820) {
            const m = s[u++];
            if (m === 3) {
              const g = s[u++], p = 31 & g, y = 64 & g, v = y ? 2 + p * 3 : 0, E = new Uint8Array(v);
              if (y) {
                E[0] = g;
                for (let b = 1; b < v; b++)
                  E[b] = s[u++];
              }
              i.push({
                type: m,
                payloadType: r,
                pts: t,
                bytes: E
              });
            }
          }
        }
      }
    } else if (r === 5 && o > 16) {
      const h = [];
      for (let m = 0; m < 16; m++) {
        const g = s[u++].toString(16);
        h.push(g.length == 1 ? "0" + g : g), (m === 3 || m === 5 || m === 7 || m === 9) && h.push("-");
      }
      const c = o - 16, f = new Uint8Array(c);
      for (let m = 0; m < c; m++)
        f[m] = s[u++];
      i.push({
        payloadType: r,
        pts: t,
        uuid: h.join(""),
        userData: Se(f),
        userDataBytes: f
      });
    }
  }
}
function Fi(a) {
  const e = a.byteLength, t = [];
  let i = 1;
  for (; i < e - 2; )
    a[i] === 0 && a[i + 1] === 0 && a[i + 2] === 3 ? (t.push(i + 2), i += 2) : i++;
  if (t.length === 0)
    return a;
  const s = e - t.length, n = new Uint8Array(s);
  let r = 0;
  for (i = 0; i < s; r++, i++)
    r === t[0] && (r++, t.shift()), n[i] = a[r];
  return n;
}
function Ks(a) {
  const e = a[0];
  let t = "", i = "", s = 0, n = 0, r = 0, o = 0, l = 0, d = 0;
  if (e === 0) {
    for (; te(a.subarray(d, d + 1)) !== "\0"; )
      t += te(a.subarray(d, d + 1)), d += 1;
    for (t += te(a.subarray(d, d + 1)), d += 1; te(a.subarray(d, d + 1)) !== "\0"; )
      i += te(a.subarray(d, d + 1)), d += 1;
    i += te(a.subarray(d, d + 1)), d += 1, s = N(a, 12), n = N(a, 16), o = N(a, 20), l = N(a, 24), d = 28;
  } else if (e === 1) {
    d += 4, s = N(a, d), d += 4;
    const h = N(a, d);
    d += 4;
    const c = N(a, d);
    for (d += 4, r = 2 ** 32 * h + c, hs(r) || (r = Number.MAX_SAFE_INTEGER, L.warn("Presentation time exceeds safe integer limit and wrapped to max safe integer in parsing emsg box")), o = N(a, d), d += 4, l = N(a, d), d += 4; te(a.subarray(d, d + 1)) !== "\0"; )
      t += te(a.subarray(d, d + 1)), d += 1;
    for (t += te(a.subarray(d, d + 1)), d += 1; te(a.subarray(d, d + 1)) !== "\0"; )
      i += te(a.subarray(d, d + 1)), d += 1;
    i += te(a.subarray(d, d + 1)), d += 1;
  }
  const u = a.subarray(d, a.byteLength);
  return {
    schemeIdUri: t,
    value: i,
    timeScale: s,
    presentationTime: r,
    presentationTimeDelta: n,
    eventDuration: o,
    id: l,
    payload: u
  };
}
class It {
  static clearKeyUriToKeyIdMap() {
  }
  constructor(e, t, i, s = [1], n = null) {
    this.uri = void 0, this.method = void 0, this.keyFormat = void 0, this.keyFormatVersions = void 0, this.encrypted = void 0, this.isCommonEncryption = void 0, this.iv = null, this.key = null, this.keyId = null, this.pssh = null, this.method = e, this.uri = t, this.keyFormat = i, this.keyFormatVersions = s, this.iv = n, this.encrypted = e ? e !== "NONE" : false, this.isCommonEncryption = this.encrypted && e !== "AES-128";
  }
  isSupported() {
    if (this.method) {
      if (this.method === "AES-128" || this.method === "NONE")
        return true;
      if (this.keyFormat === "identity")
        return this.method === "SAMPLE-AES";
    }
    return false;
  }
  getDecryptData(e) {
    if (!this.encrypted || !this.uri)
      return null;
    if (this.method === "AES-128" && this.uri && !this.iv) {
      typeof e != "number" && (this.method === "AES-128" && !this.iv && L.warn(`missing IV for initialization segment with method="${this.method}" - compliance issue`), e = 0);
      const t = Ws(e);
      return new It(this.method, this.uri, "identity", this.keyFormatVersions, t);
    }
    return this;
  }
}
function Ws(a) {
  const e = new Uint8Array(16);
  for (let t = 12; t < 16; t++)
    e[t] = a >> 8 * (15 - t) & 255;
  return e;
}
function Ae(a = true) {
  return typeof self > "u" ? void 0 : (a || !self.MediaSource) && self.ManagedMediaSource || self.MediaSource || self.WebKitMediaSource;
}
function Ys(a) {
  return typeof self < "u" && a === self.ManagedMediaSource;
}
const Ye = {
  audio: {
    a3ds: 1,
    "ac-3": 0.95,
    "ac-4": 1,
    alac: 0.9,
    alaw: 1,
    dra1: 1,
    "dts+": 1,
    "dts-": 1,
    dtsc: 1,
    dtse: 1,
    dtsh: 1,
    "ec-3": 0.9,
    enca: 1,
    fLaC: 0.9,
    // MP4-RA listed codec entry for FLAC
    flac: 0.9,
    // legacy browser codec name for FLAC
    FLAC: 0.9,
    // some manifests may list "FLAC" with Apple's tools
    g719: 1,
    g726: 1,
    m4ae: 1,
    mha1: 1,
    mha2: 1,
    mhm1: 1,
    mhm2: 1,
    mlpa: 1,
    mp4a: 1,
    "raw ": 1,
    Opus: 1,
    opus: 1,
    // browsers expect this to be lowercase despite MP4RA says 'Opus'
    samr: 1,
    sawb: 1,
    sawp: 1,
    sevc: 1,
    sqcp: 1,
    ssmv: 1,
    twos: 1,
    ulaw: 1
  },
  video: {
    avc1: 1,
    avc2: 1,
    avc3: 1,
    avc4: 1,
    avcp: 1,
    av01: 0.8,
    drac: 1,
    dva1: 1,
    dvav: 1,
    dvh1: 0.7,
    dvhe: 0.7,
    encv: 1,
    hev1: 0.75,
    hvc1: 0.75,
    mjp2: 1,
    mp4v: 1,
    mvc1: 1,
    mvc2: 1,
    mvc3: 1,
    mvc4: 1,
    resv: 1,
    rv60: 1,
    s263: 1,
    svc1: 1,
    svc2: 1,
    "vc-1": 1,
    vp08: 1,
    vp09: 0.9
  },
  text: {
    stpp: 1,
    wvtt: 1
  }
};
function js(a, e) {
  const t = Ye[e];
  return !!t && !!t[a.slice(0, 4)];
}
function ot(a, e, t = true) {
  return !a.split(",").some((i) => !Oi(i, e, t));
}
function Oi(a, e, t = true) {
  var i;
  const s = Ae(t);
  return (i = s?.isTypeSupported(Et(a, e))) != null ? i : false;
}
function Et(a, e) {
  return `${e}/mp4;codecs="${a}"`;
}
function Bt(a) {
  if (a) {
    const e = a.substring(0, 4);
    return Ye.video[e];
  }
  return 2;
}
function je(a) {
  return a.split(",").reduce((e, t) => {
    const i = Ye.video[t];
    return i ? (i * 2 + e) / (e ? 3 : 2) : (Ye.audio[t] + e) / (e ? 2 : 1);
  }, 0);
}
const lt = {};
function qs(a, e = true) {
  if (lt[a])
    return lt[a];
  const t = {
    flac: ["flac", "fLaC", "FLAC"],
    opus: ["opus", "Opus"]
  }[a];
  for (let i = 0; i < t.length; i++)
    if (Oi(t[i], "audio", e))
      return lt[a] = t[i], t[i];
  return a;
}
const zs = /flac|opus/i;
function qe(a, e = true) {
  return a.replace(zs, (t) => qs(t.toLowerCase(), e));
}
function Ut(a, e) {
  return a && a !== "mp4a" ? a : e && e.split(",")[0];
}
function Xs(a) {
  const e = a.split(",");
  for (let t = 0; t < e.length; t++) {
    const i = e[t].split(".");
    if (i.length > 2) {
      let s = i.shift() + ".";
      s += parseInt(i.shift()).toString(16), s += ("000" + parseInt(i.shift()).toString(16)).slice(-4), e[t] = s;
    }
  }
  return e.join(",");
}
const $t = /#EXT-X-STREAM-INF:([^\r\n]*)(?:[\r\n](?:#[^\r\n]*)?)*([^\r\n]+)|#EXT-X-(SESSION-DATA|SESSION-KEY|DEFINE|CONTENT-STEERING|START):([^\r\n]*)[\r\n]+/g, Gt = /#EXT-X-MEDIA:(.*)/g, Qs = /^#EXT(?:INF|-X-TARGETDURATION):/m, Vt = new RegExp([
  /#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source,
  // duration (#EXTINF:<duration>,<title>), group 1 => duration, group 2 => title
  /(?!#) *(\S[^\r\n]*)/.source,
  // segment URI, group 3 => the URI (note newline is not eaten)
  /#EXT-X-BYTERANGE:*(.+)/.source,
  // next segment's byterange, group 4 => range spec (x@y)
  /#EXT-X-PROGRAM-DATE-TIME:(.+)/.source,
  // next segment's program date/time group 5 => the datetime spec
  /#.*/.source
  // All other non-segment oriented tags will match with all groups empty
].join("|"), "g"), Js = new RegExp([/#(EXTM3U)/.source, /#EXT-X-(DATERANGE|DEFINE|KEY|MAP|PART|PART-INF|PLAYLIST-TYPE|PRELOAD-HINT|RENDITION-REPORT|SERVER-CONTROL|SKIP|START):(.+)/.source, /#EXT-X-(BITRATE|DISCONTINUITY-SEQUENCE|MEDIA-SEQUENCE|TARGETDURATION|VERSION): *(\d+)/.source, /#EXT-X-(DISCONTINUITY|ENDLIST|GAP|INDEPENDENT-SEGMENTS)/.source, /(#)([^:]*):(.*)/.source, /(#)(.*)(?:.*)\r?\n?/.source].join("|"));
class ge {
  static findGroup(e, t) {
    for (let i = 0; i < e.length; i++) {
      const s = e[i];
      if (s.id === t)
        return s;
    }
  }
  static resolve(e, t) {
    return Rt.buildAbsoluteURL(t, e, {
      alwaysNormalize: true
    });
  }
  static isMediaPlaylist(e) {
    return Qs.test(e);
  }
  static parseMasterPlaylist(e, t) {
    const s = {
      contentSteering: null,
      levels: [],
      playlistParsingError: null,
      sessionData: null,
      sessionKeys: null,
      startTimeOffset: null,
      variableList: null,
      hasVariableRefs: false
    }, n = [];
    $t.lastIndex = 0;
    let r;
    for (; (r = $t.exec(e)) != null; )
      if (r[1]) {
        var o;
        const d = new Z(r[1]), u = r[2], h = {
          attrs: d,
          bitrate: d.decimalInteger("BANDWIDTH") || d.decimalInteger("AVERAGE-BANDWIDTH"),
          name: d.NAME,
          url: ge.resolve(u, t)
        }, c = d.decimalResolution("RESOLUTION");
        c && (h.width = c.width, h.height = c.height), Zs(d.CODECS, h), (o = h.unknownCodecs) != null && o.length || n.push(h), s.levels.push(h);
      } else if (r[3]) {
        const d = r[3], u = r[4];
        switch (d) {
          case "SESSION-DATA": {
            const h = new Z(u), c = h["DATA-ID"];
            c && (s.sessionData === null && (s.sessionData = {}), s.sessionData[c] = h);
            break;
          }
          case "SESSION-KEY": {
            const h = Ht(u, t);
            h.encrypted && h.isSupported() ? (s.sessionKeys === null && (s.sessionKeys = []), s.sessionKeys.push(h)) : L.warn(`[Keys] Ignoring invalid EXT-X-SESSION-KEY tag: "${u}"`);
            break;
          }
          case "DEFINE":
            break;
          case "CONTENT-STEERING": {
            const h = new Z(u);
            s.contentSteering = {
              uri: ge.resolve(h["SERVER-URI"], t),
              pathwayId: h["PATHWAY-ID"] || "."
            };
            break;
          }
          case "START": {
            s.startTimeOffset = Kt(u);
            break;
          }
        }
      }
    const l = n.length > 0 && n.length < s.levels.length;
    return s.levels = l ? n : s.levels, s.levels.length === 0 && (s.playlistParsingError = new Error("no levels found in manifest")), s;
  }
  static parseMasterPlaylistMedia(e, t, i) {
    let s;
    const n = {}, r = i.levels, o = {
      AUDIO: r.map((d) => ({
        id: d.attrs.AUDIO,
        audioCodec: d.audioCodec
      })),
      SUBTITLES: r.map((d) => ({
        id: d.attrs.SUBTITLES,
        textCodec: d.textCodec
      })),
      "CLOSED-CAPTIONS": []
    };
    let l = 0;
    for (Gt.lastIndex = 0; (s = Gt.exec(e)) !== null; ) {
      const d = new Z(s[1]), u = d.TYPE;
      if (u) {
        const h = o[u], c = n[u] || [];
        n[u] = c;
        const f = d.LANGUAGE, m = d["ASSOC-LANGUAGE"], g = d.CHANNELS, p = d.CHARACTERISTICS, y = d["INSTREAM-ID"], v = {
          attrs: d,
          bitrate: 0,
          id: l++,
          groupId: d["GROUP-ID"] || "",
          name: d.NAME || f || "",
          type: u,
          default: d.bool("DEFAULT"),
          autoselect: d.bool("AUTOSELECT"),
          forced: d.bool("FORCED"),
          lang: f,
          url: d.URI ? ge.resolve(d.URI, t) : ""
        };
        if (m && (v.assocLang = m), g && (v.channels = g), p && (v.characteristics = p), y && (v.instreamId = y), h != null && h.length) {
          const E = ge.findGroup(h, v.groupId) || h[0];
          Wt(v, E, "audioCodec"), Wt(v, E, "textCodec");
        }
        c.push(v);
      }
    }
    return n;
  }
  static parseLevelPlaylist(e, t, i, s, n, r) {
    const o = new Ss(t), l = o.fragments;
    let d = null, u = 0, h = 0, c = 0, f = 0, m = null, g = new st(s, t), p, y, v, E = -1, b = false, S = null;
    for (Vt.lastIndex = 0, o.m3u8 = e, o.hasVariableRefs = false; (p = Vt.exec(e)) !== null; ) {
      b && (b = false, g = new st(s, t), g.start = c, g.sn = u, g.cc = f, g.level = i, d && (g.initSegment = d, g.rawProgramDateTime = d.rawProgramDateTime, d.rawProgramDateTime = null, S && (g.setByteRange(S), S = null)));
      const P = p[1];
      if (P) {
        g.duration = parseFloat(P);
        const _ = (" " + p[2]).slice(1);
        g.title = _ || null, g.tagList.push(_ ? ["INF", P, _] : ["INF", P]);
      } else if (p[3]) {
        if (k(g.duration)) {
          g.start = c, v && qt(g, v, o), g.sn = u, g.level = i, g.cc = f, l.push(g);
          const _ = (" " + p[3]).slice(1);
          g.relurl = _, Yt(g, m), m = g, c += g.duration, u++, h = 0, b = true;
        }
      } else if (p[4]) {
        const _ = (" " + p[4]).slice(1);
        m ? g.setByteRange(_, m) : g.setByteRange(_);
      } else if (p[5])
        g.rawProgramDateTime = (" " + p[5]).slice(1), g.tagList.push(["PROGRAM-DATE-TIME", g.rawProgramDateTime]), E === -1 && (E = l.length);
      else {
        if (p = p[0].match(Js), !p) {
          L.warn("No matches on slow regex match for level playlist!");
          continue;
        }
        for (y = 1; y < p.length && !(typeof p[y] < "u"); y++)
          ;
        const _ = (" " + p[y]).slice(1), C = (" " + p[y + 1]).slice(1), $ = p[y + 2] ? (" " + p[y + 2]).slice(1) : "";
        switch (_) {
          case "PLAYLIST-TYPE":
            o.type = C.toUpperCase();
            break;
          case "MEDIA-SEQUENCE":
            u = o.startSN = parseInt(C);
            break;
          case "SKIP": {
            const M = new Z(C), U = M.decimalInteger("SKIPPED-SEGMENTS");
            if (k(U)) {
              o.skippedSegments = U;
              for (let V = U; V--; )
                l.unshift(null);
              u += U;
            }
            const B = M.enumeratedString("RECENTLY-REMOVED-DATERANGES");
            B && (o.recentlyRemovedDateranges = B.split("	"));
            break;
          }
          case "TARGETDURATION":
            o.targetduration = Math.max(parseInt(C), 1);
            break;
          case "VERSION":
            o.version = parseInt(C);
            break;
          case "INDEPENDENT-SEGMENTS":
          case "EXTM3U":
            break;
          case "ENDLIST":
            o.live = false;
            break;
          case "#":
            (C || $) && g.tagList.push($ ? [C, $] : [C]);
            break;
          case "DISCONTINUITY":
            f++, g.tagList.push(["DIS"]);
            break;
          case "GAP":
            g.gap = true, g.tagList.push([_]);
            break;
          case "BITRATE":
            g.tagList.push([_, C]);
            break;
          case "DATERANGE": {
            const M = new Z(C), U = new Li(M, o.dateRanges[M.ID]);
            U.isValid || o.skippedSegments ? o.dateRanges[U.id] = U : L.warn(`Ignoring invalid DATERANGE tag: "${C}"`), g.tagList.push(["EXT-X-DATERANGE", C]);
            break;
          }
          case "DEFINE":
            break;
          case "DISCONTINUITY-SEQUENCE":
            f = parseInt(C);
            break;
          case "KEY": {
            const M = Ht(C, t);
            if (M.isSupported()) {
              if (M.method === "NONE") {
                v = void 0;
                break;
              }
              v || (v = {}), v[M.keyFormat] && (v = ae({}, v)), v[M.keyFormat] = M;
            } else
              L.warn(`[Keys] Ignoring invalid EXT-X-KEY tag: "${C}"`);
            break;
          }
          case "START":
            o.startTimeOffset = Kt(C);
            break;
          case "MAP": {
            const M = new Z(C);
            if (g.duration) {
              const U = new st(s, t);
              jt(U, M, i, v), d = U, g.initSegment = d, d.rawProgramDateTime && !g.rawProgramDateTime && (g.rawProgramDateTime = d.rawProgramDateTime);
            } else {
              const U = g.byteRangeEndOffset;
              if (U) {
                const B = g.byteRangeStartOffset;
                S = `${U - B}@${B}`;
              } else
                S = null;
              jt(g, M, i, v), d = g, b = true;
            }
            break;
          }
          case "SERVER-CONTROL": {
            const M = new Z(C);
            o.canBlockReload = M.bool("CAN-BLOCK-RELOAD"), o.canSkipUntil = M.optionalFloat("CAN-SKIP-UNTIL", 0), o.canSkipDateRanges = o.canSkipUntil > 0 && M.bool("CAN-SKIP-DATERANGES"), o.partHoldBack = M.optionalFloat("PART-HOLD-BACK", 0), o.holdBack = M.optionalFloat("HOLD-BACK", 0);
            break;
          }
          case "PART-INF": {
            const M = new Z(C);
            o.partTarget = M.decimalFloatingPoint("PART-TARGET");
            break;
          }
          case "PART": {
            let M = o.partList;
            M || (M = o.partList = []);
            const U = h > 0 ? M[M.length - 1] : void 0, B = h++, V = new Z(C), W = new Es(V, g, t, B, U);
            M.push(W), g.duration += W.duration;
            break;
          }
          case "PRELOAD-HINT": {
            const M = new Z(C);
            o.preloadHint = M;
            break;
          }
          case "RENDITION-REPORT": {
            const M = new Z(C);
            o.renditionReports = o.renditionReports || [], o.renditionReports.push(M);
            break;
          }
          default:
            L.warn(`line parsed but not handled: ${p}`);
            break;
        }
      }
    }
    m && !m.relurl ? (l.pop(), c -= m.duration, o.partList && (o.fragmentHint = m)) : o.partList && (Yt(g, m), g.cc = f, o.fragmentHint = g, v && qt(g, v, o));
    const I = l.length, A = l[0], D = l[I - 1];
    if (c += o.skippedSegments * o.targetduration, c > 0 && I && D) {
      o.averagetargetduration = c / I;
      const P = D.sn;
      o.endSN = P !== "initSegment" ? P : 0, o.live || (D.endList = true), A && (o.startCC = A.cc);
    } else
      o.endSN = 0, o.startCC = 0;
    return o.fragmentHint && (c += o.fragmentHint.duration), o.totalduration = c, o.endCC = f, E > 0 && en(l, E), o;
  }
}
function Ht(a, e, t) {
  var i, s;
  const n = new Z(a), r = (i = n.METHOD) != null ? i : "", o = n.URI, l = n.hexadecimalInteger("IV"), d = n.KEYFORMATVERSIONS, u = (s = n.KEYFORMAT) != null ? s : "identity";
  o && n.IV && !l && L.error(`Invalid IV: ${n.IV}`);
  const h = o ? ge.resolve(o, e) : "", c = (d || "1").split("/").map(Number).filter(Number.isFinite);
  return new It(r, h, u, c, l);
}
function Kt(a) {
  const t = new Z(a).decimalFloatingPoint("TIME-OFFSET");
  return k(t) ? t : null;
}
function Zs(a, e) {
  let t = (a || "").split(/[ ,]+/).filter((i) => i);
  ["video", "audio", "text"].forEach((i) => {
    const s = t.filter((n) => js(n, i));
    s.length && (e[`${i}Codec`] = s.join(","), t = t.filter((n) => s.indexOf(n) === -1));
  }), e.unknownCodecs = t;
}
function Wt(a, e, t) {
  const i = e[t];
  i && (a[t] = i);
}
function en(a, e) {
  let t = a[e];
  for (let i = e; i--; ) {
    const s = a[i];
    if (!s)
      return;
    s.programDateTime = t.programDateTime - s.duration * 1e3, t = s;
  }
}
function Yt(a, e) {
  a.rawProgramDateTime ? a.programDateTime = Date.parse(a.rawProgramDateTime) : e != null && e.programDateTime && (a.programDateTime = e.endProgramDateTime), k(a.programDateTime) || (a.programDateTime = null, a.rawProgramDateTime = null);
}
function jt(a, e, t, i) {
  a.relurl = e.URI, e.BYTERANGE && a.setByteRange(e.BYTERANGE), a.level = t, a.sn = "initSegment", i && (a.levelkeys = i), a.initSegment = null;
}
function qt(a, e, t) {
  a.levelkeys = e;
  const {
    encryptedFragments: i
  } = t;
  (!i.length || i[i.length - 1].levelkeys !== e) && Object.keys(e).some((s) => e[s].isCommonEncryption) && i.push(a);
}
var j = {
  MANIFEST: "manifest",
  LEVEL: "level",
  AUDIO_TRACK: "audioTrack",
  SUBTITLE_TRACK: "subtitleTrack"
}, q = {
  MAIN: "main",
  AUDIO: "audio",
  SUBTITLE: "subtitle"
};
function zt(a) {
  const {
    type: e
  } = a;
  switch (e) {
    case j.AUDIO_TRACK:
      return q.AUDIO;
    case j.SUBTITLE_TRACK:
      return q.SUBTITLE;
    default:
      return q.MAIN;
  }
}
function dt(a, e) {
  let t = a.url;
  return (t === void 0 || t.indexOf("data:") === 0) && (t = e.url), t;
}
class tn {
  constructor(e) {
    this.hls = void 0, this.loaders = /* @__PURE__ */ Object.create(null), this.variableList = null, this.hls = e, this.registerListeners();
  }
  startLoad(e) {
  }
  stopLoad() {
    this.destroyInternalLoaders();
  }
  registerListeners() {
    const {
      hls: e
    } = this;
    e.on(x.MANIFEST_LOADING, this.onManifestLoading, this), e.on(x.LEVEL_LOADING, this.onLevelLoading, this), e.on(x.AUDIO_TRACK_LOADING, this.onAudioTrackLoading, this), e.on(x.SUBTITLE_TRACK_LOADING, this.onSubtitleTrackLoading, this);
  }
  unregisterListeners() {
    const {
      hls: e
    } = this;
    e.off(x.MANIFEST_LOADING, this.onManifestLoading, this), e.off(x.LEVEL_LOADING, this.onLevelLoading, this), e.off(x.AUDIO_TRACK_LOADING, this.onAudioTrackLoading, this), e.off(x.SUBTITLE_TRACK_LOADING, this.onSubtitleTrackLoading, this);
  }
  /**
   * Returns defaults or configured loader-type overloads (pLoader and loader config params)
   */
  createInternalLoader(e) {
    const t = this.hls.config, i = t.pLoader, s = t.loader, n = i || s, r = new n(t);
    return this.loaders[e.type] = r, r;
  }
  getInternalLoader(e) {
    return this.loaders[e.type];
  }
  resetInternalLoader(e) {
    this.loaders[e] && delete this.loaders[e];
  }
  /**
   * Call `destroy` on all internal loader instances mapped (one per context type)
   */
  destroyInternalLoaders() {
    for (const e in this.loaders) {
      const t = this.loaders[e];
      t && t.destroy(), this.resetInternalLoader(e);
    }
  }
  destroy() {
    this.variableList = null, this.unregisterListeners(), this.destroyInternalLoaders();
  }
  onManifestLoading(e, t) {
    const {
      url: i
    } = t;
    this.variableList = null, this.load({
      id: null,
      level: 0,
      responseType: "text",
      type: j.MANIFEST,
      url: i,
      deliveryDirectives: null
    });
  }
  onLevelLoading(e, t) {
    const {
      id: i,
      level: s,
      pathwayId: n,
      url: r,
      deliveryDirectives: o
    } = t;
    this.load({
      id: i,
      level: s,
      pathwayId: n,
      responseType: "text",
      type: j.LEVEL,
      url: r,
      deliveryDirectives: o
    });
  }
  onAudioTrackLoading(e, t) {
    const {
      id: i,
      groupId: s,
      url: n,
      deliveryDirectives: r
    } = t;
    this.load({
      id: i,
      groupId: s,
      level: null,
      responseType: "text",
      type: j.AUDIO_TRACK,
      url: n,
      deliveryDirectives: r
    });
  }
  onSubtitleTrackLoading(e, t) {
    const {
      id: i,
      groupId: s,
      url: n,
      deliveryDirectives: r
    } = t;
    this.load({
      id: i,
      groupId: s,
      level: null,
      responseType: "text",
      type: j.SUBTITLE_TRACK,
      url: n,
      deliveryDirectives: r
    });
  }
  load(e) {
    var t;
    const i = this.hls.config;
    let s = this.getInternalLoader(e);
    if (s) {
      const d = s.context;
      if (d && d.url === e.url && d.level === e.level) {
        L.trace("[playlist-loader]: playlist request ongoing");
        return;
      }
      L.log(`[playlist-loader]: aborting previous loader for type: ${e.type}`), s.abort();
    }
    let n;
    if (e.type === j.MANIFEST ? n = i.manifestLoadPolicy.default : n = ae({}, i.playlistLoadPolicy.default, {
      timeoutRetry: null,
      errorRetry: null
    }), s = this.createInternalLoader(e), k((t = e.deliveryDirectives) == null ? void 0 : t.part)) {
      let d;
      if (e.type === j.LEVEL && e.level !== null ? d = this.hls.levels[e.level].details : e.type === j.AUDIO_TRACK && e.id !== null ? d = this.hls.audioTracks[e.id].details : e.type === j.SUBTITLE_TRACK && e.id !== null && (d = this.hls.subtitleTracks[e.id].details), d) {
        const u = d.partTarget, h = d.targetduration;
        if (u && h) {
          const c = Math.max(u * 3, h * 0.8) * 1e3;
          n = ae({}, n, {
            maxTimeToFirstByteMs: Math.min(c, n.maxTimeToFirstByteMs),
            maxLoadTimeMs: Math.min(c, n.maxTimeToFirstByteMs)
          });
        }
      }
    }
    const r = n.errorRetry || n.timeoutRetry || {}, o = {
      loadPolicy: n,
      timeout: n.maxLoadTimeMs,
      maxRetry: r.maxNumRetry || 0,
      retryDelay: r.retryDelayMs || 0,
      maxRetryDelay: r.maxRetryDelayMs || 0
    }, l = {
      onSuccess: (d, u, h, c) => {
        const f = this.getInternalLoader(h);
        this.resetInternalLoader(h.type);
        const m = d.data;
        if (m.indexOf("#EXTM3U") !== 0) {
          this.handleManifestParsingError(d, h, new Error("no EXTM3U delimiter"), c || null, u);
          return;
        }
        u.parsing.start = performance.now(), ge.isMediaPlaylist(m) ? this.handleTrackOrLevelPlaylist(d, u, h, c || null, f) : this.handleMasterPlaylist(d, u, h, c);
      },
      onError: (d, u, h, c) => {
        this.handleNetworkError(u, h, false, d, c);
      },
      onTimeout: (d, u, h) => {
        this.handleNetworkError(u, h, true, void 0, d);
      }
    };
    s.load(e, o, l);
  }
  handleMasterPlaylist(e, t, i, s) {
    const n = this.hls, r = e.data, o = dt(e, i), l = ge.parseMasterPlaylist(r, o);
    if (l.playlistParsingError) {
      this.handleManifestParsingError(e, i, l.playlistParsingError, s, t);
      return;
    }
    const {
      contentSteering: d,
      levels: u,
      sessionData: h,
      sessionKeys: c,
      startTimeOffset: f,
      variableList: m
    } = l;
    this.variableList = m;
    const {
      AUDIO: g = [],
      SUBTITLES: p,
      "CLOSED-CAPTIONS": y
    } = ge.parseMasterPlaylistMedia(r, o, l);
    g.length && !g.some((E) => !E.url) && u[0].audioCodec && !u[0].attrs.AUDIO && (L.log("[playlist-loader]: audio codec signaled in quality level, but no embedded audio track signaled, create one"), g.unshift({
      type: "main",
      name: "main",
      groupId: "main",
      default: false,
      autoselect: false,
      forced: false,
      id: -1,
      attrs: new Z({}),
      bitrate: 0,
      url: ""
    })), n.trigger(x.MANIFEST_LOADED, {
      levels: u,
      audioTracks: g,
      subtitles: p,
      captions: y,
      contentSteering: d,
      url: o,
      stats: t,
      networkDetails: s,
      sessionData: h,
      sessionKeys: c,
      startTimeOffset: f,
      variableList: m
    });
  }
  handleTrackOrLevelPlaylist(e, t, i, s, n) {
    const r = this.hls, {
      id: o,
      level: l,
      type: d
    } = i, u = dt(e, i), h = 0, c = k(l) ? l : k(o) ? o : 0, f = zt(i), m = ge.parseLevelPlaylist(e.data, u, c, f, h, this.variableList);
    if (d === j.MANIFEST) {
      const g = {
        attrs: new Z({}),
        bitrate: 0,
        details: m,
        name: "",
        url: u
      };
      r.trigger(x.MANIFEST_LOADED, {
        levels: [g],
        audioTracks: [],
        url: u,
        stats: t,
        networkDetails: s,
        sessionData: null,
        sessionKeys: null,
        contentSteering: null,
        startTimeOffset: null,
        variableList: null
      });
    }
    t.parsing.end = performance.now(), i.levelDetails = m, this.handlePlaylistLoaded(m, e, t, i, s, n);
  }
  handleManifestParsingError(e, t, i, s, n) {
    this.hls.trigger(x.ERROR, {
      type: K.NETWORK_ERROR,
      details: R.MANIFEST_PARSING_ERROR,
      fatal: t.type === j.MANIFEST,
      url: e.url,
      err: i,
      error: i,
      reason: i.message,
      response: e,
      context: t,
      networkDetails: s,
      stats: n
    });
  }
  handleNetworkError(e, t, i = false, s, n) {
    let r = `A network ${i ? "timeout" : "error" + (s ? " (status " + s.code + ")" : "")} occurred while loading ${e.type}`;
    e.type === j.LEVEL ? r += `: ${e.level} id: ${e.id}` : (e.type === j.AUDIO_TRACK || e.type === j.SUBTITLE_TRACK) && (r += ` id: ${e.id} group-id: "${e.groupId}"`);
    const o = new Error(r);
    L.warn(`[playlist-loader]: ${r}`);
    let l = R.UNKNOWN, d = false;
    const u = this.getInternalLoader(e);
    switch (e.type) {
      case j.MANIFEST:
        l = i ? R.MANIFEST_LOAD_TIMEOUT : R.MANIFEST_LOAD_ERROR, d = true;
        break;
      case j.LEVEL:
        l = i ? R.LEVEL_LOAD_TIMEOUT : R.LEVEL_LOAD_ERROR, d = false;
        break;
      case j.AUDIO_TRACK:
        l = i ? R.AUDIO_TRACK_LOAD_TIMEOUT : R.AUDIO_TRACK_LOAD_ERROR, d = false;
        break;
      case j.SUBTITLE_TRACK:
        l = i ? R.SUBTITLE_TRACK_LOAD_TIMEOUT : R.SUBTITLE_LOAD_ERROR, d = false;
        break;
    }
    u && this.resetInternalLoader(e.type);
    const h = {
      type: K.NETWORK_ERROR,
      details: l,
      fatal: d,
      url: e.url,
      loader: u,
      context: e,
      error: o,
      networkDetails: t,
      stats: n
    };
    if (s) {
      const c = t?.url || e.url;
      h.response = oe({
        url: c,
        data: void 0
      }, s);
    }
    this.hls.trigger(x.ERROR, h);
  }
  handlePlaylistLoaded(e, t, i, s, n, r) {
    const o = this.hls, {
      type: l,
      level: d,
      id: u,
      groupId: h,
      deliveryDirectives: c
    } = s, f = dt(t, s), m = zt(s), g = typeof s.level == "number" && m === q.MAIN ? d : void 0;
    if (!e.fragments.length) {
      const y = new Error("No Segments found in Playlist");
      o.trigger(x.ERROR, {
        type: K.NETWORK_ERROR,
        details: R.LEVEL_EMPTY_ERROR,
        fatal: false,
        url: f,
        error: y,
        reason: y.message,
        response: t,
        context: s,
        level: g,
        parent: m,
        networkDetails: n,
        stats: i
      });
      return;
    }
    e.targetduration || (e.playlistParsingError = new Error("Missing Target Duration"));
    const p = e.playlistParsingError;
    if (p) {
      o.trigger(x.ERROR, {
        type: K.NETWORK_ERROR,
        details: R.LEVEL_PARSING_ERROR,
        fatal: false,
        url: f,
        error: p,
        reason: p.message,
        response: t,
        context: s,
        level: g,
        parent: m,
        networkDetails: n,
        stats: i
      });
      return;
    }
    switch (e.live && r && (r.getCacheAge && (e.ageHeader = r.getCacheAge() || 0), (!r.getCacheAge || isNaN(e.ageHeader)) && (e.ageHeader = 0)), l) {
      case j.MANIFEST:
      case j.LEVEL:
        o.trigger(x.LEVEL_LOADED, {
          details: e,
          level: g || 0,
          id: u || 0,
          stats: i,
          networkDetails: n,
          deliveryDirectives: c
        });
        break;
      case j.AUDIO_TRACK:
        o.trigger(x.AUDIO_TRACK_LOADED, {
          details: e,
          id: u || 0,
          groupId: h || "",
          stats: i,
          networkDetails: n,
          deliveryDirectives: c
        });
        break;
      case j.SUBTITLE_TRACK:
        o.trigger(x.SUBTITLE_TRACK_LOADED, {
          details: e,
          id: u || 0,
          groupId: h || "",
          stats: i,
          networkDetails: n,
          deliveryDirectives: c
        });
        break;
    }
  }
}
function sn(a, e) {
  let t;
  try {
    t = new Event("addtrack");
  } catch {
    t = document.createEvent("Event"), t.initEvent("addtrack", false, false);
  }
  t.track = a, e.dispatchEvent(t);
}
function nn(a) {
  const e = a.mode;
  if (e === "disabled" && (a.mode = "hidden"), a.cues)
    for (let t = a.cues.length; t--; )
      a.removeCue(a.cues[t]);
  e === "disabled" && (a.mode = e);
}
function rn(a, e, t, i) {
  const s = a.mode;
  if (s === "disabled" && (a.mode = "hidden"), a.cues && a.cues.length > 0) {
    const n = on(a.cues, e, t);
    for (let r = 0; r < n.length; r++)
      (!i || i(n[r])) && a.removeCue(n[r]);
  }
  s === "disabled" && (a.mode = s);
}
function an(a, e) {
  if (e < a[0].startTime)
    return 0;
  const t = a.length - 1;
  if (e > a[t].endTime)
    return -1;
  let i = 0, s = t;
  for (; i <= s; ) {
    const n = Math.floor((s + i) / 2);
    if (e < a[n].startTime)
      s = n - 1;
    else if (e > a[n].startTime && i < t)
      i = n + 1;
    else
      return n;
  }
  return a[i].startTime - e < e - a[s].startTime ? i : s;
}
function on(a, e, t) {
  const i = [], s = an(a, e);
  if (s > -1)
    for (let n = s, r = a.length; n < r; n++) {
      const o = a[n];
      if (o.startTime >= e && o.endTime <= t)
        i.push(o);
      else if (o.startTime > t)
        return i;
    }
  return i;
}
var he = {
  audioId3: "org.id3",
  dateRange: "com.apple.quicktime.HLS",
  emsg: "https://aomedia.org/emsg/ID3"
};
const ln = 0.25;
function Tt() {
  if (!(typeof self > "u"))
    return self.VTTCue || self.TextTrackCue;
}
function Xt(a, e, t, i, s) {
  let n = new a(e, t, "");
  try {
    n.value = i, s && (n.type = s);
  } catch {
    n = new a(e, t, JSON.stringify(s ? oe({
      type: s
    }, i) : i));
  }
  return n;
}
const Me = (() => {
  const a = Tt();
  try {
    a && new a(0, Number.POSITIVE_INFINITY, "");
  } catch {
    return Number.MAX_VALUE;
  }
  return Number.POSITIVE_INFINITY;
})();
function ut(a, e) {
  return a.getTime() / 1e3 - e;
}
function dn(a) {
  return Uint8Array.from(a.replace(/^0x/, "").replace(/([\da-fA-F]{2}) ?/g, "0x$1 ").replace(/ +$/, "").split(" ")).buffer;
}
class un {
  constructor(e) {
    this.hls = void 0, this.id3Track = null, this.media = null, this.dateRangeCuesAppended = {}, this.hls = e, this._registerListeners();
  }
  destroy() {
    this._unregisterListeners(), this.id3Track = null, this.media = null, this.dateRangeCuesAppended = {}, this.hls = null;
  }
  _registerListeners() {
    const {
      hls: e
    } = this;
    e.on(x.MEDIA_ATTACHED, this.onMediaAttached, this), e.on(x.MEDIA_DETACHING, this.onMediaDetaching, this), e.on(x.MANIFEST_LOADING, this.onManifestLoading, this), e.on(x.FRAG_PARSING_METADATA, this.onFragParsingMetadata, this), e.on(x.BUFFER_FLUSHING, this.onBufferFlushing, this), e.on(x.LEVEL_UPDATED, this.onLevelUpdated, this);
  }
  _unregisterListeners() {
    const {
      hls: e
    } = this;
    e.off(x.MEDIA_ATTACHED, this.onMediaAttached, this), e.off(x.MEDIA_DETACHING, this.onMediaDetaching, this), e.off(x.MANIFEST_LOADING, this.onManifestLoading, this), e.off(x.FRAG_PARSING_METADATA, this.onFragParsingMetadata, this), e.off(x.BUFFER_FLUSHING, this.onBufferFlushing, this), e.off(x.LEVEL_UPDATED, this.onLevelUpdated, this);
  }
  // Add ID3 metatadata text track.
  onMediaAttached(e, t) {
    this.media = t.media;
  }
  onMediaDetaching() {
    this.id3Track && (nn(this.id3Track), this.id3Track = null, this.media = null, this.dateRangeCuesAppended = {});
  }
  onManifestLoading() {
    this.dateRangeCuesAppended = {};
  }
  createTrack(e) {
    const t = this.getID3Track(e.textTracks);
    return t.mode = "hidden", t;
  }
  getID3Track(e) {
    if (this.media) {
      for (let t = 0; t < e.length; t++) {
        const i = e[t];
        if (i.kind === "metadata" && i.label === "id3")
          return sn(i, this.media), i;
      }
      return this.media.addTextTrack("metadata", "id3");
    }
  }
  onFragParsingMetadata(e, t) {
    if (!this.media)
      return;
    const {
      hls: {
        config: {
          enableEmsgMetadataCues: i,
          enableID3MetadataCues: s
        }
      }
    } = this;
    if (!i && !s)
      return;
    const {
      samples: n
    } = t;
    this.id3Track || (this.id3Track = this.createTrack(this.media));
    const r = Tt();
    if (r)
      for (let o = 0; o < n.length; o++) {
        const l = n[o].type;
        if (l === he.emsg && !i || !s)
          continue;
        const d = Ii(n[o].data);
        if (d) {
          const u = n[o].pts;
          let h = u + n[o].duration;
          h > Me && (h = Me), h - u <= 0 && (h = u + ln);
          for (let f = 0; f < d.length; f++) {
            const m = d[f];
            if (!bi(m)) {
              this.updateId3CueEnds(u, l);
              const g = Xt(r, u, h, m, l);
              g && this.id3Track.addCue(g);
            }
          }
        }
      }
  }
  updateId3CueEnds(e, t) {
    var i;
    const s = (i = this.id3Track) == null ? void 0 : i.cues;
    if (s)
      for (let n = s.length; n--; ) {
        const r = s[n];
        r.type === t && r.startTime < e && r.endTime === Me && (r.endTime = e);
      }
  }
  onBufferFlushing(e, {
    startOffset: t,
    endOffset: i,
    type: s
  }) {
    const {
      id3Track: n,
      hls: r
    } = this;
    if (!r)
      return;
    const {
      config: {
        enableEmsgMetadataCues: o,
        enableID3MetadataCues: l
      }
    } = r;
    if (n && (o || l)) {
      let d;
      s === "audio" ? d = (u) => u.type === he.audioId3 && l : s === "video" ? d = (u) => u.type === he.emsg && o : d = (u) => u.type === he.audioId3 && l || u.type === he.emsg && o, rn(n, t, i, d);
    }
  }
  onLevelUpdated(e, {
    details: t
  }) {
    if (!this.media || !t.hasProgramDateTime || !this.hls.config.enableDateRangeMetadataCues)
      return;
    const {
      dateRangeCuesAppended: i,
      id3Track: s
    } = this, {
      dateRanges: n
    } = t, r = Object.keys(n);
    if (s) {
      const u = Object.keys(i).filter((h) => !r.includes(h));
      for (let h = u.length; h--; ) {
        const c = u[h];
        Object.keys(i[c].cues).forEach((f) => {
          s.removeCue(i[c].cues[f]);
        }), delete i[c];
      }
    }
    const o = t.fragments[t.fragments.length - 1];
    if (r.length === 0 || !k(o?.programDateTime))
      return;
    this.id3Track || (this.id3Track = this.createTrack(this.media));
    const l = o.programDateTime / 1e3 - o.start, d = Tt();
    for (let u = 0; u < r.length; u++) {
      const h = r[u], c = n[h], f = ut(c.startDate, l), m = i[h], g = m?.cues || {};
      let p = m?.durationKnown || false, y = Me;
      const v = c.endDate;
      if (v)
        y = ut(v, l), p = true;
      else if (c.endOnNext && !p) {
        const b = r.reduce((S, I) => {
          if (I !== c.id) {
            const A = n[I];
            if (A.class === c.class && A.startDate > c.startDate && (!S || c.startDate < S.startDate))
              return A;
          }
          return S;
        }, null);
        b && (y = ut(b.startDate, l), p = true);
      }
      const E = Object.keys(c.attr);
      for (let b = 0; b < E.length; b++) {
        const S = E[b];
        if (!xs(S))
          continue;
        const I = g[S];
        if (I)
          p && !m.durationKnown && (I.endTime = y);
        else if (d) {
          let A = c.attr[S];
          ys(S) && (A = dn(A));
          const D = Xt(d, f, y, {
            key: S,
            data: A
          }, he.dateRange);
          D && (D.id = h, this.id3Track.addCue(D), g[S] = D);
        }
      }
      i[h] = {
        cues: g,
        dateRange: c,
        durationKnown: p
      };
    }
  }
}
class hn {
  constructor(e) {
    this.hls = void 0, this.config = void 0, this.media = null, this.levelDetails = null, this.currentTime = 0, this.stallCount = 0, this._latency = null, this.timeupdateHandler = () => this.timeupdate(), this.hls = e, this.config = e.config, this.registerListeners();
  }
  get latency() {
    return this._latency || 0;
  }
  get maxLatency() {
    const {
      config: e,
      levelDetails: t
    } = this;
    return e.liveMaxLatencyDuration !== void 0 ? e.liveMaxLatencyDuration : t ? e.liveMaxLatencyDurationCount * t.targetduration : 0;
  }
  get targetLatency() {
    const {
      levelDetails: e
    } = this;
    if (e === null)
      return null;
    const {
      holdBack: t,
      partHoldBack: i,
      targetduration: s
    } = e, {
      liveSyncDuration: n,
      liveSyncDurationCount: r,
      lowLatencyMode: o
    } = this.config, l = this.hls.userConfig;
    let d = o && i || t;
    (l.liveSyncDuration || l.liveSyncDurationCount || d === 0) && (d = n !== void 0 ? n : r * s);
    const u = s;
    return d + Math.min(this.stallCount * 1, u);
  }
  get liveSyncPosition() {
    const e = this.estimateLiveEdge(), t = this.targetLatency, i = this.levelDetails;
    if (e === null || t === null || i === null)
      return null;
    const s = i.edge, n = e - t - this.edgeStalled, r = s - i.totalduration, o = s - (this.config.lowLatencyMode && i.partTarget || i.targetduration);
    return Math.min(Math.max(r, n), o);
  }
  get drift() {
    const {
      levelDetails: e
    } = this;
    return e === null ? 1 : e.drift;
  }
  get edgeStalled() {
    const {
      levelDetails: e
    } = this;
    if (e === null)
      return 0;
    const t = (this.config.lowLatencyMode && e.partTarget || e.targetduration) * 3;
    return Math.max(e.age - t, 0);
  }
  get forwardBufferLength() {
    const {
      media: e,
      levelDetails: t
    } = this;
    if (!e || !t)
      return 0;
    const i = e.buffered.length;
    return (i ? e.buffered.end(i - 1) : t.edge) - this.currentTime;
  }
  destroy() {
    this.unregisterListeners(), this.onMediaDetaching(), this.levelDetails = null, this.hls = this.timeupdateHandler = null;
  }
  registerListeners() {
    this.hls.on(x.MEDIA_ATTACHED, this.onMediaAttached, this), this.hls.on(x.MEDIA_DETACHING, this.onMediaDetaching, this), this.hls.on(x.MANIFEST_LOADING, this.onManifestLoading, this), this.hls.on(x.LEVEL_UPDATED, this.onLevelUpdated, this), this.hls.on(x.ERROR, this.onError, this);
  }
  unregisterListeners() {
    this.hls.off(x.MEDIA_ATTACHED, this.onMediaAttached, this), this.hls.off(x.MEDIA_DETACHING, this.onMediaDetaching, this), this.hls.off(x.MANIFEST_LOADING, this.onManifestLoading, this), this.hls.off(x.LEVEL_UPDATED, this.onLevelUpdated, this), this.hls.off(x.ERROR, this.onError, this);
  }
  onMediaAttached(e, t) {
    this.media = t.media, this.media.addEventListener("timeupdate", this.timeupdateHandler);
  }
  onMediaDetaching() {
    this.media && (this.media.removeEventListener("timeupdate", this.timeupdateHandler), this.media = null);
  }
  onManifestLoading() {
    this.levelDetails = null, this._latency = null, this.stallCount = 0;
  }
  onLevelUpdated(e, {
    details: t
  }) {
    this.levelDetails = t, t.advanced && this.timeupdate(), !t.live && this.media && this.media.removeEventListener("timeupdate", this.timeupdateHandler);
  }
  onError(e, t) {
    var i;
    t.details === R.BUFFER_STALLED_ERROR && (this.stallCount++, (i = this.levelDetails) != null && i.live && L.warn("[playback-rate-controller]: Stall detected, adjusting target latency"));
  }
  timeupdate() {
    const {
      media: e,
      levelDetails: t
    } = this;
    if (!e || !t)
      return;
    this.currentTime = e.currentTime;
    const i = this.computeLatency();
    if (i === null)
      return;
    this._latency = i;
    const {
      lowLatencyMode: s,
      maxLiveSyncPlaybackRate: n
    } = this.config;
    if (!s || n === 1 || !t.live)
      return;
    const r = this.targetLatency;
    if (r === null)
      return;
    const o = i - r, l = Math.min(this.maxLatency, r + t.targetduration);
    if (o < l && o > 0.05 && this.forwardBufferLength > 1) {
      const u = Math.min(2, Math.max(1, n)), h = Math.round(2 / (1 + Math.exp(-0.75 * o - this.edgeStalled)) * 20) / 20;
      e.playbackRate = Math.min(u, Math.max(1, h));
    } else e.playbackRate !== 1 && e.playbackRate !== 0 && (e.playbackRate = 1);
  }
  estimateLiveEdge() {
    const {
      levelDetails: e
    } = this;
    return e === null ? null : e.edge + e.age;
  }
  computeLatency() {
    const e = this.estimateLiveEdge();
    return e === null ? null : e - this.currentTime;
  }
}
const St = ["NONE", "TYPE-0", "TYPE-1", null];
function cn(a) {
  return St.indexOf(a) > -1;
}
const ze = ["SDR", "PQ", "HLG"];
function fn(a) {
  return !!a && ze.indexOf(a) > -1;
}
var $e = {
  No: "",
  Yes: "YES",
  v2: "v2"
};
function Qt(a) {
  const {
    canSkipUntil: e,
    canSkipDateRanges: t,
    age: i
  } = a, s = i < e / 2;
  return e && s ? t ? $e.v2 : $e.Yes : $e.No;
}
class Jt {
  constructor(e, t, i) {
    this.msn = void 0, this.part = void 0, this.skip = void 0, this.msn = e, this.part = t, this.skip = i;
  }
  addDirectives(e) {
    const t = new self.URL(e);
    return this.msn !== void 0 && t.searchParams.set("_HLS_msn", this.msn.toString()), this.part !== void 0 && t.searchParams.set("_HLS_part", this.part.toString()), this.skip && t.searchParams.set("_HLS_skip", this.skip), t.href;
  }
}
class Lt {
  constructor(e) {
    this._attrs = void 0, this.audioCodec = void 0, this.bitrate = void 0, this.codecSet = void 0, this.url = void 0, this.frameRate = void 0, this.height = void 0, this.id = void 0, this.name = void 0, this.videoCodec = void 0, this.width = void 0, this.details = void 0, this.fragmentError = 0, this.loadError = 0, this.loaded = void 0, this.realBitrate = 0, this.supportedPromise = void 0, this.supportedResult = void 0, this._avgBitrate = 0, this._audioGroups = void 0, this._subtitleGroups = void 0, this._urlId = 0, this.url = [e.url], this._attrs = [e.attrs], this.bitrate = e.bitrate, e.details && (this.details = e.details), this.id = e.id || 0, this.name = e.name, this.width = e.width || 0, this.height = e.height || 0, this.frameRate = e.attrs.optionalFloat("FRAME-RATE", 0), this._avgBitrate = e.attrs.decimalInteger("AVERAGE-BANDWIDTH"), this.audioCodec = e.audioCodec, this.videoCodec = e.videoCodec, this.codecSet = [e.videoCodec, e.audioCodec].filter((t) => !!t).map((t) => t.substring(0, 4)).join(","), this.addGroupId("audio", e.attrs.AUDIO), this.addGroupId("text", e.attrs.SUBTITLES);
  }
  get maxBitrate() {
    return Math.max(this.realBitrate, this.bitrate);
  }
  get averageBitrate() {
    return this._avgBitrate || this.realBitrate || this.bitrate;
  }
  get attrs() {
    return this._attrs[0];
  }
  get codecs() {
    return this.attrs.CODECS || "";
  }
  get pathwayId() {
    return this.attrs["PATHWAY-ID"] || ".";
  }
  get videoRange() {
    return this.attrs["VIDEO-RANGE"] || "SDR";
  }
  get score() {
    return this.attrs.optionalFloat("SCORE", 0);
  }
  get uri() {
    return this.url[0] || "";
  }
  hasAudioGroup(e) {
    return Zt(this._audioGroups, e);
  }
  hasSubtitleGroup(e) {
    return Zt(this._subtitleGroups, e);
  }
  get audioGroups() {
    return this._audioGroups;
  }
  get subtitleGroups() {
    return this._subtitleGroups;
  }
  addGroupId(e, t) {
    if (t) {
      if (e === "audio") {
        let i = this._audioGroups;
        i || (i = this._audioGroups = []), i.indexOf(t) === -1 && i.push(t);
      } else if (e === "text") {
        let i = this._subtitleGroups;
        i || (i = this._subtitleGroups = []), i.indexOf(t) === -1 && i.push(t);
      }
    }
  }
  // Deprecated methods (retained for backwards compatibility)
  get urlId() {
    return 0;
  }
  set urlId(e) {
  }
  get audioGroupIds() {
    return this.audioGroups ? [this.audioGroupId] : void 0;
  }
  get textGroupIds() {
    return this.subtitleGroups ? [this.textGroupId] : void 0;
  }
  get audioGroupId() {
    var e;
    return (e = this.audioGroups) == null ? void 0 : e[0];
  }
  get textGroupId() {
    var e;
    return (e = this.subtitleGroups) == null ? void 0 : e[0];
  }
  addFallback() {
  }
}
function Zt(a, e) {
  return !e || !a ? false : a.indexOf(e) !== -1;
}
function ht(a, e) {
  const t = e.startPTS;
  if (k(t)) {
    let i = 0, s;
    e.sn > a.sn ? (i = t - a.start, s = a) : (i = a.start - t, s = e), s.duration !== i && (s.duration = i);
  } else e.sn > a.sn ? a.cc === e.cc && a.minEndPTS ? e.start = a.start + (a.minEndPTS - a.start) : e.start = a.start + a.duration : e.start = Math.max(a.start - e.duration, 0);
}
function ki(a, e, t, i, s, n) {
  i - t <= 0 && (L.warn("Fragment should have a positive duration", e), i = t + e.duration, n = s + e.duration);
  let o = t, l = i;
  const d = e.startPTS, u = e.endPTS;
  if (k(d)) {
    const p = Math.abs(d - t);
    k(e.deltaPTS) ? e.deltaPTS = Math.max(p, e.deltaPTS) : e.deltaPTS = p, o = Math.max(t, d), t = Math.min(t, d), s = Math.min(s, e.startDTS), l = Math.min(i, u), i = Math.max(i, u), n = Math.max(n, e.endDTS);
  }
  const h = t - e.start;
  e.start !== 0 && (e.start = t), e.duration = i - e.start, e.startPTS = t, e.maxStartPTS = o, e.startDTS = s, e.endPTS = i, e.minEndPTS = l, e.endDTS = n;
  const c = e.sn;
  if (!a || c < a.startSN || c > a.endSN)
    return 0;
  let f;
  const m = c - a.startSN, g = a.fragments;
  for (g[m] = e, f = m; f > 0; f--)
    ht(g[f], g[f - 1]);
  for (f = m; f < g.length - 1; f++)
    ht(g[f], g[f + 1]);
  return a.fragmentHint && ht(g[g.length - 1], a.fragmentHint), a.PTSKnown = a.alignedSliding = true, h;
}
function mn(a, e) {
  let t = null;
  const i = a.fragments;
  for (let l = i.length - 1; l >= 0; l--) {
    const d = i[l].initSegment;
    if (d) {
      t = d;
      break;
    }
  }
  a.fragmentHint && delete a.fragmentHint.endPTS;
  let s = 0, n;
  if (xn(a, e, (l, d) => {
    l.relurl && (s = l.cc - d.cc), k(l.startPTS) && k(l.endPTS) && (d.start = d.startPTS = l.startPTS, d.startDTS = l.startDTS, d.maxStartPTS = l.maxStartPTS, d.endPTS = l.endPTS, d.endDTS = l.endDTS, d.minEndPTS = l.minEndPTS, d.duration = l.endPTS - l.startPTS, d.duration && (n = d), e.PTSKnown = e.alignedSliding = true), d.elementaryStreams = l.elementaryStreams, d.loader = l.loader, d.stats = l.stats, l.initSegment && (d.initSegment = l.initSegment, t = l.initSegment);
  }), t && (e.fragmentHint ? e.fragments.concat(e.fragmentHint) : e.fragments).forEach((d) => {
    var u;
    d && (!d.initSegment || d.initSegment.relurl === ((u = t) == null ? void 0 : u.relurl)) && (d.initSegment = t);
  }), e.skippedSegments)
    if (e.deltaUpdateFailed = e.fragments.some((l) => !l), e.deltaUpdateFailed) {
      L.warn("[level-helper] Previous playlist missing segments skipped in delta playlist");
      for (let l = e.skippedSegments; l--; )
        e.fragments.shift();
      e.startSN = e.fragments[0].sn, e.startCC = e.fragments[0].cc;
    } else e.canSkipDateRanges && (e.dateRanges = gn(a.dateRanges, e.dateRanges, e.recentlyRemovedDateranges));
  const r = e.fragments;
  if (s) {
    L.warn("discontinuity sliding from playlist, take drift into account");
    for (let l = 0; l < r.length; l++)
      r[l].cc += s;
  }
  e.skippedSegments && (e.startCC = e.fragments[0].cc), pn(a.partList, e.partList, (l, d) => {
    d.elementaryStreams = l.elementaryStreams, d.stats = l.stats;
  }), n ? ki(e, n, n.startPTS, n.endPTS, n.startDTS, n.endDTS) : Mi(a, e), r.length && (e.totalduration = e.edge - r[0].start), e.driftStartTime = a.driftStartTime, e.driftStart = a.driftStart;
  const o = e.advancedDateTime;
  if (e.advanced && o) {
    const l = e.edge;
    e.driftStart || (e.driftStartTime = o, e.driftStart = l), e.driftEndTime = o, e.driftEnd = l;
  } else
    e.driftEndTime = a.driftEndTime, e.driftEnd = a.driftEnd, e.advancedDateTime = a.advancedDateTime;
}
function gn(a, e, t) {
  const i = ae({}, a);
  return t && t.forEach((s) => {
    delete i[s];
  }), Object.keys(e).forEach((s) => {
    const n = new Li(e[s].attr, i[s]);
    n.isValid ? i[s] = n : L.warn(`Ignoring invalid Playlist Delta Update DATERANGE tag: "${JSON.stringify(e[s].attr)}"`);
  }), i;
}
function pn(a, e, t) {
  if (a && e) {
    let i = 0;
    for (let s = 0, n = a.length; s <= n; s++) {
      const r = a[s], o = e[s + i];
      r && o && r.index === o.index && r.fragment.sn === o.fragment.sn ? t(r, o) : i--;
    }
  }
}
function xn(a, e, t) {
  const i = e.skippedSegments, s = Math.max(a.startSN, e.startSN) - e.startSN, n = (a.fragmentHint ? 1 : 0) + (i ? e.endSN : Math.min(a.endSN, e.endSN)) - e.startSN, r = e.startSN - a.startSN, o = e.fragmentHint ? e.fragments.concat(e.fragmentHint) : e.fragments, l = a.fragmentHint ? a.fragments.concat(a.fragmentHint) : a.fragments;
  for (let d = s; d <= n; d++) {
    const u = l[r + d];
    let h = o[d];
    i && !h && d < i && (h = e.fragments[d] = u), u && h && t(u, h);
  }
}
function Mi(a, e) {
  const t = e.startSN + e.skippedSegments - a.startSN, i = a.fragments;
  t < 0 || t >= i.length || yn(e, i[t].start);
}
function yn(a, e) {
  if (e) {
    const t = a.fragments;
    for (let i = a.skippedSegments; i < t.length; i++)
      t[i].start += e;
    a.fragmentHint && (a.fragmentHint.start += e);
  }
}
function En(a, e = 1 / 0) {
  let t = 1e3 * a.targetduration;
  if (a.updated) {
    const i = a.fragments;
    if (i.length && t * 4 > e) {
      const n = i[i.length - 1].duration * 1e3;
      n < t && (t = n);
    }
  } else
    t /= 2;
  return Math.round(t);
}
function Tn(a, e, t) {
  if (!(a != null && a.details))
    return null;
  const i = a.details;
  let s = i.fragments[e - i.startSN];
  return s || (s = i.fragmentHint, s && s.sn === e) ? s : e < i.startSN && t && t.sn === e ? t : null;
}
function ei(a, e, t) {
  var i;
  return a != null && a.details ? Ni((i = a.details) == null ? void 0 : i.partList, e, t) : null;
}
function Ni(a, e, t) {
  if (a)
    for (let i = a.length; i--; ) {
      const s = a[i];
      if (s.index === t && s.fragment.sn === e)
        return s;
    }
  return null;
}
function Bi(a) {
  a.forEach((e, t) => {
    const {
      details: i
    } = e;
    i != null && i.fragments && i.fragments.forEach((s) => {
      s.level = t;
    });
  });
}
function Xe(a) {
  switch (a.details) {
    case R.FRAG_LOAD_TIMEOUT:
    case R.KEY_LOAD_TIMEOUT:
    case R.LEVEL_LOAD_TIMEOUT:
    case R.MANIFEST_LOAD_TIMEOUT:
      return true;
  }
  return false;
}
function ti(a, e) {
  const t = Xe(e);
  return a.default[`${t ? "timeout" : "error"}Retry`];
}
function Dt(a, e) {
  const t = a.backoff === "linear" ? 1 : Math.pow(2, e);
  return Math.min(t * a.retryDelayMs, a.maxRetryDelayMs);
}
function ii(a) {
  return oe(oe({}, a), {
    errorRetry: null,
    timeoutRetry: null
  });
}
function Qe(a, e, t, i) {
  if (!a)
    return false;
  const s = i?.code, n = e < a.maxNumRetry && (Sn(s) || !!t);
  return a.shouldRetry ? a.shouldRetry(a, e, t, i, n) : n;
}
function Sn(a) {
  return a === 0 && navigator.onLine === false || !!a && (a < 400 || a > 499);
}
const Ui = {
  /**
   * Searches for an item in an array which matches a certain condition.
   * This requires the condition to only match one item in the array,
   * and for the array to be ordered.
   *
   * @param list The array to search.
   * @param comparisonFn
   *      Called and provided a candidate item as the first argument.
   *      Should return:
   *          > -1 if the item should be located at a lower index than the provided item.
   *          > 1 if the item should be located at a higher index than the provided item.
   *          > 0 if the item is the item you're looking for.
   *
   * @returns the object if found, otherwise returns null
   */
  search: function(a, e) {
    let t = 0, i = a.length - 1, s = null, n = null;
    for (; t <= i; ) {
      s = (t + i) / 2 | 0, n = a[s];
      const r = e(n);
      if (r > 0)
        t = s + 1;
      else if (r < 0)
        i = s - 1;
      else
        return n;
    }
    return null;
  }
};
function Ln(a, e, t) {
  if (e === null || !Array.isArray(a) || !a.length || !k(e))
    return null;
  const i = a[0].programDateTime;
  if (e < (i || 0))
    return null;
  const s = a[a.length - 1].endProgramDateTime;
  if (e >= (s || 0))
    return null;
  t = t || 0;
  for (let n = 0; n < a.length; ++n) {
    const r = a[n];
    if (An(e, t, r))
      return r;
  }
  return null;
}
function $i(a, e, t = 0, i = 0, s = 5e-3) {
  let n = null;
  if (a) {
    n = e[a.sn - e[0].sn + 1] || null;
    const o = a.endDTS - t;
    o > 0 && o < 15e-7 && (t += 15e-7);
  } else t === 0 && e[0].start === 0 && (n = e[0]);
  if (n && ((!a || a.level === n.level) && si(t, i, n) === 0 || vn(n, a, Math.min(s, i))))
    return n;
  const r = Ui.search(e, si.bind(null, t, i));
  return r && (r !== a || !n) ? r : n;
}
function vn(a, e, t) {
  if (e && e.start === 0 && e.level < a.level && (e.endPTS || 0) > 0) {
    const i = e.tagList.reduce((s, n) => (n[0] === "INF" && (s += parseFloat(n[1])), s), t);
    return a.start <= i;
  }
  return false;
}
function si(a = 0, e = 0, t) {
  if (t.start <= a && t.start + t.duration > a)
    return 0;
  const i = Math.min(e, t.duration + (t.deltaPTS ? t.deltaPTS : 0));
  return t.start + t.duration - i <= a ? 1 : t.start - i > a && t.start ? -1 : 0;
}
function An(a, e, t) {
  const i = Math.min(e, t.duration + (t.deltaPTS ? t.deltaPTS : 0)) * 1e3;
  return (t.endProgramDateTime || 0) - i > a;
}
function Rn(a, e) {
  return Ui.search(a, (t) => t.cc < e ? 1 : t.cc > e ? -1 : 0);
}
var ie = {
  DoNothing: 0,
  SendAlternateToPenaltyBox: 2,
  RemoveAlternatePermanently: 3,
  RetryRequest: 5
}, de = {
  None: 0,
  MoveAllAlternatesMatchingHost: 1,
  MoveAllAlternatesMatchingHDCP: 2};
class bn {
  constructor(e) {
    this.hls = void 0, this.playlistError = 0, this.penalizedRenditions = {}, this.log = void 0, this.warn = void 0, this.error = void 0, this.hls = e, this.log = L.log.bind(L, "[info]:"), this.warn = L.warn.bind(L, "[warning]:"), this.error = L.error.bind(L, "[error]:"), this.registerListeners();
  }
  registerListeners() {
    const e = this.hls;
    e.on(x.ERROR, this.onError, this), e.on(x.MANIFEST_LOADING, this.onManifestLoading, this), e.on(x.LEVEL_UPDATED, this.onLevelUpdated, this);
  }
  unregisterListeners() {
    const e = this.hls;
    e && (e.off(x.ERROR, this.onError, this), e.off(x.ERROR, this.onErrorOut, this), e.off(x.MANIFEST_LOADING, this.onManifestLoading, this), e.off(x.LEVEL_UPDATED, this.onLevelUpdated, this));
  }
  destroy() {
    this.unregisterListeners(), this.hls = null, this.penalizedRenditions = {};
  }
  startLoad(e) {
  }
  stopLoad() {
    this.playlistError = 0;
  }
  getVariantLevelIndex(e) {
    return e?.type === q.MAIN ? e.level : this.hls.loadLevel;
  }
  onManifestLoading() {
    this.playlistError = 0, this.penalizedRenditions = {};
  }
  onLevelUpdated() {
    this.playlistError = 0;
  }
  onError(e, t) {
    var i, s;
    if (t.fatal)
      return;
    const n = this.hls, r = t.context;
    switch (t.details) {
      case R.FRAG_LOAD_ERROR:
      case R.FRAG_LOAD_TIMEOUT:
      case R.KEY_LOAD_ERROR:
      case R.KEY_LOAD_TIMEOUT:
        t.errorAction = this.getFragRetryOrSwitchAction(t);
        return;
      case R.FRAG_PARSING_ERROR:
        if ((i = t.frag) != null && i.gap) {
          t.errorAction = {
            action: ie.DoNothing,
            flags: de.None
          };
          return;
        }
      // falls through
      case R.FRAG_GAP:
      case R.FRAG_DECRYPT_ERROR: {
        t.errorAction = this.getFragRetryOrSwitchAction(t), t.errorAction.action = ie.SendAlternateToPenaltyBox;
        return;
      }
      case R.LEVEL_EMPTY_ERROR:
      case R.LEVEL_PARSING_ERROR:
        {
          var o, l;
          const d = t.parent === q.MAIN ? t.level : n.loadLevel;
          t.details === R.LEVEL_EMPTY_ERROR && ((o = t.context) != null && (l = o.levelDetails) != null && l.live) ? t.errorAction = this.getPlaylistRetryOrSwitchAction(t, d) : (t.levelRetry = false, t.errorAction = this.getLevelSwitchAction(t, d));
        }
        return;
      case R.LEVEL_LOAD_ERROR:
      case R.LEVEL_LOAD_TIMEOUT:
        typeof r?.level == "number" && (t.errorAction = this.getPlaylistRetryOrSwitchAction(t, r.level));
        return;
      case R.AUDIO_TRACK_LOAD_ERROR:
      case R.AUDIO_TRACK_LOAD_TIMEOUT:
      case R.SUBTITLE_LOAD_ERROR:
      case R.SUBTITLE_TRACK_LOAD_TIMEOUT:
        if (r) {
          const d = n.levels[n.loadLevel];
          if (d && (r.type === j.AUDIO_TRACK && d.hasAudioGroup(r.groupId) || r.type === j.SUBTITLE_TRACK && d.hasSubtitleGroup(r.groupId))) {
            t.errorAction = this.getPlaylistRetryOrSwitchAction(t, n.loadLevel), t.errorAction.action = ie.SendAlternateToPenaltyBox, t.errorAction.flags = de.MoveAllAlternatesMatchingHost;
            return;
          }
        }
        return;
      case R.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED:
        {
          const d = n.levels[n.loadLevel], u = d?.attrs["HDCP-LEVEL"];
          u ? t.errorAction = {
            action: ie.SendAlternateToPenaltyBox,
            flags: de.MoveAllAlternatesMatchingHDCP,
            hdcpLevel: u
          } : this.keySystemError(t);
        }
        return;
      case R.BUFFER_ADD_CODEC_ERROR:
      case R.REMUX_ALLOC_ERROR:
      case R.BUFFER_APPEND_ERROR:
        t.errorAction = this.getLevelSwitchAction(t, (s = t.level) != null ? s : n.loadLevel);
        return;
      case R.INTERNAL_EXCEPTION:
      case R.BUFFER_APPENDING_ERROR:
      case R.BUFFER_FULL_ERROR:
      case R.LEVEL_SWITCH_ERROR:
      case R.BUFFER_STALLED_ERROR:
      case R.BUFFER_SEEK_OVER_HOLE:
      case R.BUFFER_NUDGE_ON_STALL:
        t.errorAction = {
          action: ie.DoNothing,
          flags: de.None
        };
        return;
    }
    t.type === K.KEY_SYSTEM_ERROR && this.keySystemError(t);
  }
  keySystemError(e) {
    const t = this.getVariantLevelIndex(e.frag);
    e.levelRetry = false, e.errorAction = this.getLevelSwitchAction(e, t);
  }
  getPlaylistRetryOrSwitchAction(e, t) {
    const i = this.hls, s = ti(i.config.playlistLoadPolicy, e), n = this.playlistError++;
    if (Qe(s, n, Xe(e), e.response))
      return {
        action: ie.RetryRequest,
        flags: de.None,
        retryConfig: s,
        retryCount: n
      };
    const o = this.getLevelSwitchAction(e, t);
    return s && (o.retryConfig = s, o.retryCount = n), o;
  }
  getFragRetryOrSwitchAction(e) {
    const t = this.hls, i = this.getVariantLevelIndex(e.frag), s = t.levels[i], {
      fragLoadPolicy: n,
      keyLoadPolicy: r
    } = t.config, o = ti(e.details.startsWith("key") ? r : n, e), l = t.levels.reduce((u, h) => u + h.fragmentError, 0);
    if (s && (e.details !== R.FRAG_GAP && s.fragmentError++, Qe(o, l, Xe(e), e.response)))
      return {
        action: ie.RetryRequest,
        flags: de.None,
        retryConfig: o,
        retryCount: l
      };
    const d = this.getLevelSwitchAction(e, i);
    return o && (d.retryConfig = o, d.retryCount = l), d;
  }
  getLevelSwitchAction(e, t) {
    const i = this.hls;
    t == null && (t = i.loadLevel);
    const s = this.hls.levels[t];
    if (s) {
      var n, r;
      const d = e.details;
      s.loadError++, d === R.BUFFER_APPEND_ERROR && s.fragmentError++;
      let u = -1;
      const {
        levels: h,
        loadLevel: c,
        minAutoLevel: f,
        maxAutoLevel: m
      } = i;
      i.autoLevelEnabled || (i.loadLevel = -1);
      const g = (n = e.frag) == null ? void 0 : n.type, y = (g === q.AUDIO && d === R.FRAG_PARSING_ERROR || e.sourceBufferName === "audio" && (d === R.BUFFER_ADD_CODEC_ERROR || d === R.BUFFER_APPEND_ERROR)) && h.some(({
        audioCodec: I
      }) => s.audioCodec !== I), E = e.sourceBufferName === "video" && (d === R.BUFFER_ADD_CODEC_ERROR || d === R.BUFFER_APPEND_ERROR) && h.some(({
        codecSet: I,
        audioCodec: A
      }) => s.codecSet !== I && s.audioCodec === A), {
        type: b,
        groupId: S
      } = (r = e.context) != null ? r : {};
      for (let I = h.length; I--; ) {
        const A = (I + c) % h.length;
        if (A !== c && A >= f && A <= m && h[A].loadError === 0) {
          var o, l;
          const D = h[A];
          if (d === R.FRAG_GAP && g === q.MAIN && e.frag) {
            const P = h[A].details;
            if (P) {
              const _ = $i(e.frag, P.fragments, e.frag.start);
              if (_ != null && _.gap)
                continue;
            }
          } else {
            if (b === j.AUDIO_TRACK && D.hasAudioGroup(S) || b === j.SUBTITLE_TRACK && D.hasSubtitleGroup(S))
              continue;
            if (g === q.AUDIO && (o = s.audioGroups) != null && o.some((P) => D.hasAudioGroup(P)) || g === q.SUBTITLE && (l = s.subtitleGroups) != null && l.some((P) => D.hasSubtitleGroup(P)) || y && s.audioCodec === D.audioCodec || !y && s.audioCodec !== D.audioCodec || E && s.codecSet === D.codecSet)
              continue;
          }
          u = A;
          break;
        }
      }
      if (u > -1 && i.loadLevel !== u)
        return e.levelRetry = true, this.playlistError = 0, {
          action: ie.SendAlternateToPenaltyBox,
          flags: de.None,
          nextAutoLevel: u
        };
    }
    return {
      action: ie.SendAlternateToPenaltyBox,
      flags: de.MoveAllAlternatesMatchingHost
    };
  }
  onErrorOut(e, t) {
    var i;
    switch ((i = t.errorAction) == null ? void 0 : i.action) {
      case ie.DoNothing:
        break;
      case ie.SendAlternateToPenaltyBox:
        this.sendAlternateToPenaltyBox(t), !t.errorAction.resolved && t.details !== R.FRAG_GAP ? t.fatal = true : /MediaSource readyState: ended/.test(t.error.message) && (this.warn(`MediaSource ended after "${t.sourceBufferName}" sourceBuffer append error. Attempting to recover from media error.`), this.hls.recoverMediaError());
        break;
    }
    if (t.fatal) {
      this.hls.stopLoad();
      return;
    }
  }
  sendAlternateToPenaltyBox(e) {
    const t = this.hls, i = e.errorAction;
    if (!i)
      return;
    const {
      flags: s,
      hdcpLevel: n,
      nextAutoLevel: r
    } = i;
    switch (s) {
      case de.None:
        this.switchLevel(e, r);
        break;
      case de.MoveAllAlternatesMatchingHDCP:
        n && (t.maxHdcpLevel = St[St.indexOf(n) - 1], i.resolved = true), this.warn(`Restricting playback to HDCP-LEVEL of "${t.maxHdcpLevel}" or lower`);
        break;
    }
    i.resolved || this.switchLevel(e, r);
  }
  switchLevel(e, t) {
    t !== void 0 && e.errorAction && (this.warn(`switching to level ${t} after ${e.details}`), this.hls.nextAutoLevel = t, e.errorAction.resolved = true, this.hls.nextLoadLevel = this.hls.nextAutoLevel);
  }
}
class In {
  constructor(e, t) {
    this.hls = void 0, this.timer = -1, this.requestScheduled = -1, this.canLoad = false, this.log = void 0, this.warn = void 0, this.log = L.log.bind(L, `${t}:`), this.warn = L.warn.bind(L, `${t}:`), this.hls = e;
  }
  destroy() {
    this.clearTimer(), this.hls = this.log = this.warn = null;
  }
  clearTimer() {
    this.timer !== -1 && (self.clearTimeout(this.timer), this.timer = -1);
  }
  startLoad() {
    this.canLoad = true, this.requestScheduled = -1, this.loadPlaylist();
  }
  stopLoad() {
    this.canLoad = false, this.clearTimer();
  }
  switchParams(e, t, i) {
    const s = t?.renditionReports;
    if (s) {
      let n = -1;
      for (let r = 0; r < s.length; r++) {
        const o = s[r];
        let l;
        try {
          l = new self.URL(o.URI, t.url).href;
        } catch (d) {
          L.warn(`Could not construct new URL for Rendition Report: ${d}`), l = o.URI || "";
        }
        if (l === e) {
          n = r;
          break;
        } else l === e.substring(0, l.length) && (n = r);
      }
      if (n !== -1) {
        const r = s[n], o = parseInt(r["LAST-MSN"]) || t?.lastPartSn;
        let l = parseInt(r["LAST-PART"]) || t?.lastPartIndex;
        if (this.hls.config.lowLatencyMode) {
          const u = Math.min(t.age - t.partTarget, t.targetduration);
          l >= 0 && u > t.partTarget && (l += 1);
        }
        const d = i && Qt(i);
        return new Jt(o, l >= 0 ? l : void 0, d);
      }
    }
  }
  loadPlaylist(e) {
    this.requestScheduled === -1 && (this.requestScheduled = self.performance.now());
  }
  shouldLoadPlaylist(e) {
    return this.canLoad && !!e && !!e.url && (!e.details || e.details.live);
  }
  shouldReloadPlaylist(e) {
    return this.timer === -1 && this.requestScheduled === -1 && this.shouldLoadPlaylist(e);
  }
  playlistLoaded(e, t, i) {
    const {
      details: s,
      stats: n
    } = t, r = self.performance.now(), o = n.loading.first ? Math.max(0, r - n.loading.first) : 0;
    if (s.advancedDateTime = Date.now() - o, s.live || i != null && i.live) {
      if (s.reloaded(i), i && this.log(`live playlist ${e} ${s.advanced ? "REFRESHED " + s.lastPartSn + "-" + s.lastPartIndex : s.updated ? "UPDATED" : "MISSED"}`), i && s.fragments.length > 0 && mn(i, s), !this.canLoad || !s.live)
        return;
      let l, d, u;
      if (s.canBlockReload && s.endSN && s.advanced) {
        const p = this.hls.config.lowLatencyMode, y = s.lastPartSn, v = s.endSN, E = s.lastPartIndex, b = E !== -1, S = y === v, I = p ? 0 : E;
        b ? (d = S ? v + 1 : y, u = S ? I : E + 1) : d = v + 1;
        const A = s.age, D = A + s.ageHeader;
        let P = Math.min(D - s.partTarget, s.targetduration * 1.5);
        if (P > 0) {
          if (i && P > i.tuneInGoal)
            this.warn(`CDN Tune-in goal increased from: ${i.tuneInGoal} to: ${P} with playlist age: ${s.age}`), P = 0;
          else {
            const _ = Math.floor(P / s.targetduration);
            if (d += _, u !== void 0) {
              const C = Math.round(P % s.targetduration / s.partTarget);
              u += C;
            }
            this.log(`CDN Tune-in age: ${s.ageHeader}s last advanced ${A.toFixed(2)}s goal: ${P} skip sn ${_} to part ${u}`);
          }
          s.tuneInGoal = P;
        }
        if (l = this.getDeliveryDirectives(s, t.deliveryDirectives, d, u), p || !S) {
          this.loadPlaylist(l);
          return;
        }
      } else (s.canBlockReload || s.canSkipUntil) && (l = this.getDeliveryDirectives(s, t.deliveryDirectives, d, u));
      const h = this.hls.mainForwardBufferInfo, c = h ? h.end - h.len : 0, f = (s.edge - c) * 1e3, m = En(s, f);
      s.updated && r > this.requestScheduled + m && (this.requestScheduled = n.loading.start), d !== void 0 && s.canBlockReload ? this.requestScheduled = n.loading.first + m - (s.partTarget * 1e3 || 1e3) : this.requestScheduled === -1 || this.requestScheduled + m < r ? this.requestScheduled = r : this.requestScheduled - r <= 0 && (this.requestScheduled += m);
      let g = this.requestScheduled - r;
      g = Math.max(0, g), this.log(`reload live playlist ${e} in ${Math.round(g)} ms`), this.timer = self.setTimeout(() => this.loadPlaylist(l), g);
    } else
      this.clearTimer();
  }
  getDeliveryDirectives(e, t, i, s) {
    let n = Qt(e);
    return t != null && t.skip && e.deltaUpdateFailed && (i = t.msn, s = t.part, n = $e.No), new Jt(i, s, n);
  }
  checkRetry(e) {
    const t = e.details, i = Xe(e), s = e.errorAction, {
      action: n,
      retryCount: r = 0,
      retryConfig: o
    } = s || {}, l = !!s && !!o && (n === ie.RetryRequest || !s.resolved && n === ie.SendAlternateToPenaltyBox);
    if (l) {
      var d;
      if (this.requestScheduled = -1, r >= o.maxNumRetry)
        return false;
      if (i && (d = e.context) != null && d.deliveryDirectives)
        this.warn(`Retrying playlist loading ${r + 1}/${o.maxNumRetry} after "${t}" without delivery-directives`), this.loadPlaylist();
      else {
        const u = Dt(o, r);
        this.timer = self.setTimeout(() => this.loadPlaylist(), u), this.warn(`Retrying playlist loading ${r + 1}/${o.maxNumRetry} after "${t}" in ${u}ms`);
      }
      e.levelRetry = true, s.resolved = true;
    }
    return l;
  }
}
class be {
  //  About half of the estimated value will be from the last |halfLife| samples by weight.
  constructor(e, t = 0, i = 0) {
    this.halfLife = void 0, this.alpha_ = void 0, this.estimate_ = void 0, this.totalWeight_ = void 0, this.halfLife = e, this.alpha_ = e ? Math.exp(Math.log(0.5) / e) : 0, this.estimate_ = t, this.totalWeight_ = i;
  }
  sample(e, t) {
    const i = Math.pow(this.alpha_, e);
    this.estimate_ = t * (1 - i) + i * this.estimate_, this.totalWeight_ += e;
  }
  getTotalWeight() {
    return this.totalWeight_;
  }
  getEstimate() {
    if (this.alpha_) {
      const e = 1 - Math.pow(this.alpha_, this.totalWeight_);
      if (e)
        return this.estimate_ / e;
    }
    return this.estimate_;
  }
}
class Dn {
  constructor(e, t, i, s = 100) {
    this.defaultEstimate_ = void 0, this.minWeight_ = void 0, this.minDelayMs_ = void 0, this.slow_ = void 0, this.fast_ = void 0, this.defaultTTFB_ = void 0, this.ttfb_ = void 0, this.defaultEstimate_ = i, this.minWeight_ = 1e-3, this.minDelayMs_ = 50, this.slow_ = new be(e), this.fast_ = new be(t), this.defaultTTFB_ = s, this.ttfb_ = new be(e);
  }
  update(e, t) {
    const {
      slow_: i,
      fast_: s,
      ttfb_: n
    } = this;
    i.halfLife !== e && (this.slow_ = new be(e, i.getEstimate(), i.getTotalWeight())), s.halfLife !== t && (this.fast_ = new be(t, s.getEstimate(), s.getTotalWeight())), n.halfLife !== e && (this.ttfb_ = new be(e, n.getEstimate(), n.getTotalWeight()));
  }
  sample(e, t) {
    e = Math.max(e, this.minDelayMs_);
    const i = 8 * t, s = e / 1e3, n = i / s;
    this.fast_.sample(s, n), this.slow_.sample(s, n);
  }
  sampleTTFB(e) {
    const t = e / 1e3, i = Math.sqrt(2) * Math.exp(-Math.pow(t, 2) / 2);
    this.ttfb_.sample(i, Math.max(e, 5));
  }
  canEstimate() {
    return this.fast_.getTotalWeight() >= this.minWeight_;
  }
  getEstimate() {
    return this.canEstimate() ? Math.min(this.fast_.getEstimate(), this.slow_.getEstimate()) : this.defaultEstimate_;
  }
  getEstimateTTFB() {
    return this.ttfb_.getTotalWeight() >= this.minWeight_ ? this.ttfb_.getEstimate() : this.defaultTTFB_;
  }
  destroy() {
  }
}
function Cn() {
  if (typeof matchMedia == "function") {
    const a = matchMedia("(dynamic-range: high)"), e = matchMedia("bad query");
    if (a.media !== e.media)
      return a.matches === true;
  }
  return false;
}
function _n(a, e) {
  let t = false, i = [];
  return a && (t = a !== "SDR", i = [a]), e && (i = e.allowedVideoRanges || ze.slice(0), t = e.preferHDR !== void 0 ? e.preferHDR : Cn(), t ? i = i.filter((s) => s !== "SDR") : i = ["SDR"]), {
    preferHDR: t,
    allowedVideoRanges: i
  };
}
function wn(a, e, t, i, s) {
  const n = Object.keys(a), r = i?.channels, o = i?.audioCodec, l = r && parseInt(r) === 2;
  let d = true, u = false, h = 1 / 0, c = 1 / 0, f = 1 / 0, m = 0, g = [];
  const {
    preferHDR: p,
    allowedVideoRanges: y
  } = _n(e, s);
  for (let S = n.length; S--; ) {
    const I = a[n[S]];
    d = I.channels[2] > 0, h = Math.min(h, I.minHeight), c = Math.min(c, I.minFramerate), f = Math.min(f, I.minBitrate);
    const A = y.filter((D) => I.videoRanges[D] > 0);
    A.length > 0 && (u = true, g = A);
  }
  h = k(h) ? h : 0, c = k(c) ? c : 0;
  const v = Math.max(1080, h), E = Math.max(30, c);
  return f = k(f) ? f : t, t = Math.max(f, t), u || (e = void 0, g = []), {
    codecSet: n.reduce((S, I) => {
      const A = a[I];
      if (I === S)
        return S;
      if (A.minBitrate > t)
        return pe(I, `min bitrate of ${A.minBitrate} > current estimate of ${t}`), S;
      if (!A.hasDefaultAudio)
        return pe(I, "no renditions with default or auto-select sound found"), S;
      if (o && I.indexOf(o.substring(0, 4)) % 5 !== 0)
        return pe(I, `audio codec preference "${o}" not found`), S;
      if (r && !l) {
        if (!A.channels[r])
          return pe(I, `no renditions with ${r} channel sound found (channels options: ${Object.keys(A.channels)})`), S;
      } else if ((!o || l) && d && A.channels[2] === 0)
        return pe(I, "no renditions with stereo sound found"), S;
      return A.minHeight > v ? (pe(I, `min resolution of ${A.minHeight} > maximum of ${v}`), S) : A.minFramerate > E ? (pe(I, `min framerate of ${A.minFramerate} > maximum of ${E}`), S) : g.some((D) => A.videoRanges[D] > 0) ? A.maxScore < m ? (pe(I, `max score of ${A.maxScore} < selected max of ${m}`), S) : S && (je(I) >= je(S) || A.fragmentError > a[S].fragmentError) ? S : (m = A.maxScore, I) : (pe(I, `no variants with VIDEO-RANGE of ${JSON.stringify(g)} found`), S);
    }, void 0),
    videoRanges: g,
    preferHDR: p,
    minFramerate: c,
    minBitrate: f
  };
}
function pe(a, e) {
  L.log(`[abr] start candidates with "${a}" ignored because ${e}`);
}
function Pn(a) {
  return a.reduce((e, t) => {
    let i = e.groups[t.groupId];
    i || (i = e.groups[t.groupId] = {
      tracks: [],
      channels: {
        2: 0
      },
      hasDefault: false,
      hasAutoSelect: false
    }), i.tracks.push(t);
    const s = t.channels || "2";
    return i.channels[s] = (i.channels[s] || 0) + 1, i.hasDefault = i.hasDefault || t.default, i.hasAutoSelect = i.hasAutoSelect || t.autoselect, i.hasDefault && (e.hasDefaultAudio = true), i.hasAutoSelect && (e.hasAutoSelectAudio = true), e;
  }, {
    hasDefaultAudio: false,
    hasAutoSelectAudio: false,
    groups: {}
  });
}
function Fn(a, e, t, i) {
  return a.slice(t, i + 1).reduce((s, n) => {
    if (!n.codecSet)
      return s;
    const r = n.audioGroups;
    let o = s[n.codecSet];
    o || (s[n.codecSet] = o = {
      minBitrate: 1 / 0,
      minHeight: 1 / 0,
      minFramerate: 1 / 0,
      maxScore: 0,
      videoRanges: {
        SDR: 0
      },
      channels: {
        2: 0
      },
      hasDefaultAudio: !r,
      fragmentError: 0
    }), o.minBitrate = Math.min(o.minBitrate, n.bitrate);
    const l = Math.min(n.height, n.width);
    return o.minHeight = Math.min(o.minHeight, l), o.minFramerate = Math.min(o.minFramerate, n.frameRate), o.maxScore = Math.max(o.maxScore, n.score), o.fragmentError += n.fragmentError, o.videoRanges[n.videoRange] = (o.videoRanges[n.videoRange] || 0) + 1, s;
  }, {});
}
class On {
  constructor(e) {
    this.hls = void 0, this.lastLevelLoadSec = 0, this.lastLoadedFragLevel = -1, this.firstSelection = -1, this._nextAutoLevel = -1, this.nextAutoLevelKey = "", this.audioTracksByGroup = null, this.codecTiers = null, this.timer = -1, this.fragCurrent = null, this.partCurrent = null, this.bitrateTestDelay = 0, this.bwEstimator = void 0, this._abandonRulesCheck = () => {
      const {
        fragCurrent: t,
        partCurrent: i,
        hls: s
      } = this, {
        autoLevelEnabled: n,
        media: r
      } = s;
      if (!t || !r)
        return;
      const o = performance.now(), l = i ? i.stats : t.stats, d = i ? i.duration : t.duration, u = o - l.loading.start, h = s.minAutoLevel;
      if (l.aborted || l.loaded && l.loaded === l.total || t.level <= h) {
        this.clearTimer(), this._nextAutoLevel = -1;
        return;
      }
      if (!n || r.paused || !r.playbackRate || !r.readyState)
        return;
      const c = s.mainForwardBufferInfo;
      if (c === null)
        return;
      const f = this.bwEstimator.getEstimateTTFB(), m = Math.abs(r.playbackRate);
      if (u <= Math.max(f, 1e3 * (d / (m * 2))))
        return;
      const g = c.len / m, p = l.loading.first ? l.loading.first - l.loading.start : -1, y = l.loaded && p > -1, v = this.getBwEstimate(), E = s.levels, b = E[t.level], S = l.total || Math.max(l.loaded, Math.round(d * b.averageBitrate / 8));
      let I = y ? u - p : u;
      I < 1 && y && (I = Math.min(u, l.loaded * 8 / v));
      const A = y ? l.loaded * 1e3 / I : 0, D = A ? (S - l.loaded) / A : S * 8 / v + f / 1e3;
      if (D <= g)
        return;
      const P = A ? A * 8 : v;
      let _ = Number.POSITIVE_INFINITY, C;
      for (C = t.level - 1; C > h; C--) {
        const M = E[C].maxBitrate;
        if (_ = this.getTimeToLoadFrag(f / 1e3, P, d * M, !E[C].details), _ < g)
          break;
      }
      if (_ >= D || _ > d * 10)
        return;
      s.nextLoadLevel = s.nextAutoLevel = C, y ? this.bwEstimator.sample(u - Math.min(f, p), l.loaded) : this.bwEstimator.sampleTTFB(u);
      const $ = E[C].maxBitrate;
      this.getBwEstimate() * this.hls.config.abrBandWidthUpFactor > $ && this.resetEstimator($), this.clearTimer(), L.warn(`[abr] Fragment ${t.sn}${i ? " part " + i.index : ""} of level ${t.level} is loading too slowly;
      Time to underbuffer: ${g.toFixed(3)} s
      Estimated load time for current fragment: ${D.toFixed(3)} s
      Estimated load time for down switch fragment: ${_.toFixed(3)} s
      TTFB estimate: ${p | 0} ms
      Current BW estimate: ${k(v) ? v | 0 : "Unknown"} bps
      New BW estimate: ${this.getBwEstimate() | 0} bps
      Switching to level ${C} @ ${$ | 0} bps`), s.trigger(x.FRAG_LOAD_EMERGENCY_ABORTED, {
        frag: t,
        part: i,
        stats: l
      });
    }, this.hls = e, this.bwEstimator = this.initEstimator(), this.registerListeners();
  }
  resetEstimator(e) {
    e && (L.log(`setting initial bwe to ${e}`), this.hls.config.abrEwmaDefaultEstimate = e), this.firstSelection = -1, this.bwEstimator = this.initEstimator();
  }
  initEstimator() {
    const e = this.hls.config;
    return new Dn(e.abrEwmaSlowVoD, e.abrEwmaFastVoD, e.abrEwmaDefaultEstimate);
  }
  registerListeners() {
    const {
      hls: e
    } = this;
    e.on(x.MANIFEST_LOADING, this.onManifestLoading, this), e.on(x.FRAG_LOADING, this.onFragLoading, this), e.on(x.FRAG_LOADED, this.onFragLoaded, this), e.on(x.FRAG_BUFFERED, this.onFragBuffered, this), e.on(x.LEVEL_SWITCHING, this.onLevelSwitching, this), e.on(x.LEVEL_LOADED, this.onLevelLoaded, this), e.on(x.LEVELS_UPDATED, this.onLevelsUpdated, this), e.on(x.MAX_AUTO_LEVEL_UPDATED, this.onMaxAutoLevelUpdated, this), e.on(x.ERROR, this.onError, this);
  }
  unregisterListeners() {
    const {
      hls: e
    } = this;
    e && (e.off(x.MANIFEST_LOADING, this.onManifestLoading, this), e.off(x.FRAG_LOADING, this.onFragLoading, this), e.off(x.FRAG_LOADED, this.onFragLoaded, this), e.off(x.FRAG_BUFFERED, this.onFragBuffered, this), e.off(x.LEVEL_SWITCHING, this.onLevelSwitching, this), e.off(x.LEVEL_LOADED, this.onLevelLoaded, this), e.off(x.LEVELS_UPDATED, this.onLevelsUpdated, this), e.off(x.MAX_AUTO_LEVEL_UPDATED, this.onMaxAutoLevelUpdated, this), e.off(x.ERROR, this.onError, this));
  }
  destroy() {
    this.unregisterListeners(), this.clearTimer(), this.hls = this._abandonRulesCheck = null, this.fragCurrent = this.partCurrent = null;
  }
  onManifestLoading(e, t) {
    this.lastLoadedFragLevel = -1, this.firstSelection = -1, this.lastLevelLoadSec = 0, this.fragCurrent = this.partCurrent = null, this.onLevelsUpdated(), this.clearTimer();
  }
  onLevelsUpdated() {
    this.lastLoadedFragLevel > -1 && this.fragCurrent && (this.lastLoadedFragLevel = this.fragCurrent.level), this._nextAutoLevel = -1, this.onMaxAutoLevelUpdated(), this.codecTiers = null, this.audioTracksByGroup = null;
  }
  onMaxAutoLevelUpdated() {
    this.firstSelection = -1, this.nextAutoLevelKey = "";
  }
  onFragLoading(e, t) {
    const i = t.frag;
    if (!this.ignoreFragment(i)) {
      if (!i.bitrateTest) {
        var s;
        this.fragCurrent = i, this.partCurrent = (s = t.part) != null ? s : null;
      }
      this.clearTimer(), this.timer = self.setInterval(this._abandonRulesCheck, 100);
    }
  }
  onLevelSwitching(e, t) {
    this.clearTimer();
  }
  onError(e, t) {
    if (!t.fatal)
      switch (t.details) {
        case R.BUFFER_ADD_CODEC_ERROR:
        case R.BUFFER_APPEND_ERROR:
          this.lastLoadedFragLevel = -1, this.firstSelection = -1;
          break;
        case R.FRAG_LOAD_TIMEOUT: {
          const i = t.frag, {
            fragCurrent: s,
            partCurrent: n
          } = this;
          if (i && s && i.sn === s.sn && i.level === s.level) {
            const r = performance.now(), o = n ? n.stats : i.stats, l = r - o.loading.start, d = o.loading.first ? o.loading.first - o.loading.start : -1;
            if (o.loaded && d > -1) {
              const h = this.bwEstimator.getEstimateTTFB();
              this.bwEstimator.sample(l - Math.min(h, d), o.loaded);
            } else
              this.bwEstimator.sampleTTFB(l);
          }
          break;
        }
      }
  }
  getTimeToLoadFrag(e, t, i, s) {
    const n = e + i / t, r = s ? this.lastLevelLoadSec : 0;
    return n + r;
  }
  onLevelLoaded(e, t) {
    const i = this.hls.config, {
      loading: s
    } = t.stats, n = s.end - s.start;
    k(n) && (this.lastLevelLoadSec = n / 1e3), t.details.live ? this.bwEstimator.update(i.abrEwmaSlowLive, i.abrEwmaFastLive) : this.bwEstimator.update(i.abrEwmaSlowVoD, i.abrEwmaFastVoD);
  }
  onFragLoaded(e, {
    frag: t,
    part: i
  }) {
    const s = i ? i.stats : t.stats;
    if (t.type === q.MAIN && this.bwEstimator.sampleTTFB(s.loading.first - s.loading.start), !this.ignoreFragment(t)) {
      if (this.clearTimer(), t.level === this._nextAutoLevel && (this._nextAutoLevel = -1), this.firstSelection = -1, this.hls.config.abrMaxWithRealBitrate) {
        const n = i ? i.duration : t.duration, r = this.hls.levels[t.level], o = (r.loaded ? r.loaded.bytes : 0) + s.loaded, l = (r.loaded ? r.loaded.duration : 0) + n;
        r.loaded = {
          bytes: o,
          duration: l
        }, r.realBitrate = Math.round(8 * o / l);
      }
      if (t.bitrateTest) {
        const n = {
          stats: s,
          frag: t,
          part: i,
          id: t.type
        };
        this.onFragBuffered(x.FRAG_BUFFERED, n), t.bitrateTest = false;
      } else
        this.lastLoadedFragLevel = t.level;
    }
  }
  onFragBuffered(e, t) {
    const {
      frag: i,
      part: s
    } = t, n = s != null && s.stats.loaded ? s.stats : i.stats;
    if (n.aborted || this.ignoreFragment(i))
      return;
    const r = n.parsing.end - n.loading.start - Math.min(n.loading.first - n.loading.start, this.bwEstimator.getEstimateTTFB());
    this.bwEstimator.sample(r, n.loaded), n.bwEstimate = this.getBwEstimate(), i.bitrateTest ? this.bitrateTestDelay = r / 1e3 : this.bitrateTestDelay = 0;
  }
  ignoreFragment(e) {
    return e.type !== q.MAIN || e.sn === "initSegment";
  }
  clearTimer() {
    this.timer > -1 && (self.clearInterval(this.timer), this.timer = -1);
  }
  get firstAutoLevel() {
    const {
      maxAutoLevel: e,
      minAutoLevel: t
    } = this.hls, i = this.getBwEstimate(), s = this.hls.config.maxStarvationDelay, n = this.findBestLevel(i, t, e, 0, s, 1, 1);
    if (n > -1)
      return n;
    const r = this.hls.firstLevel, o = Math.min(Math.max(r, t), e);
    return L.warn(`[abr] Could not find best starting auto level. Defaulting to first in playlist ${r} clamped to ${o}`), o;
  }
  get forcedAutoLevel() {
    return this.nextAutoLevelKey ? -1 : this._nextAutoLevel;
  }
  // return next auto level
  get nextAutoLevel() {
    const e = this.forcedAutoLevel, i = this.bwEstimator.canEstimate(), s = this.lastLoadedFragLevel > -1;
    if (e !== -1 && (!i || !s || this.nextAutoLevelKey === this.getAutoLevelKey()))
      return e;
    const n = i && s ? this.getNextABRAutoLevel() : this.firstAutoLevel;
    if (e !== -1) {
      const r = this.hls.levels;
      if (r.length > Math.max(e, n) && r[e].loadError <= r[n].loadError)
        return e;
    }
    return this._nextAutoLevel = n, this.nextAutoLevelKey = this.getAutoLevelKey(), n;
  }
  getAutoLevelKey() {
    return `${this.getBwEstimate()}_${this.getStarvationDelay().toFixed(2)}`;
  }
  getNextABRAutoLevel() {
    const {
      fragCurrent: e,
      partCurrent: t,
      hls: i
    } = this, {
      maxAutoLevel: s,
      config: n,
      minAutoLevel: r
    } = i, o = t ? t.duration : e ? e.duration : 0, l = this.getBwEstimate(), d = this.getStarvationDelay();
    let u = n.abrBandWidthFactor, h = n.abrBandWidthUpFactor;
    if (d) {
      const p = this.findBestLevel(l, r, s, d, 0, u, h);
      if (p >= 0)
        return p;
    }
    let c = o ? Math.min(o, n.maxStarvationDelay) : n.maxStarvationDelay;
    if (!d) {
      const p = this.bitrateTestDelay;
      p && (c = (o ? Math.min(o, n.maxLoadingDelay) : n.maxLoadingDelay) - p, L.info(`[abr] bitrate test took ${Math.round(1e3 * p)}ms, set first fragment max fetchDuration to ${Math.round(1e3 * c)} ms`), u = h = 1);
    }
    const f = this.findBestLevel(l, r, s, d, c, u, h);
    if (L.info(`[abr] ${d ? "rebuffering expected" : "buffer is empty"}, optimal quality level ${f}`), f > -1)
      return f;
    const m = i.levels[r], g = i.levels[i.loadLevel];
    return m?.bitrate < g?.bitrate ? r : i.loadLevel;
  }
  getStarvationDelay() {
    const e = this.hls, t = e.media;
    if (!t)
      return 1 / 0;
    const i = t && t.playbackRate !== 0 ? Math.abs(t.playbackRate) : 1, s = e.mainForwardBufferInfo;
    return (s ? s.len : 0) / i;
  }
  getBwEstimate() {
    return this.bwEstimator.canEstimate() ? this.bwEstimator.getEstimate() : this.hls.config.abrEwmaDefaultEstimate;
  }
  findBestLevel(e, t, i, s, n, r, o) {
    var l;
    const d = s + n, u = this.lastLoadedFragLevel, h = u === -1 ? this.hls.firstLevel : u, {
      fragCurrent: c,
      partCurrent: f
    } = this, {
      levels: m,
      allAudioTracks: g,
      loadLevel: p,
      config: y
    } = this.hls;
    if (m.length === 1)
      return 0;
    const v = m[h], E = !!(v != null && (l = v.details) != null && l.live), b = p === -1 || u === -1;
    let S, I = "SDR", A = v?.frameRate || 0;
    const {
      audioPreference: D,
      videoPreference: P
    } = y, _ = this.audioTracksByGroup || (this.audioTracksByGroup = Pn(g));
    if (b) {
      if (this.firstSelection !== -1)
        return this.firstSelection;
      const B = this.codecTiers || (this.codecTiers = Fn(m, _, t, i)), V = wn(B, I, e, D, P), {
        codecSet: W,
        videoRanges: X,
        minFramerate: O,
        minBitrate: F,
        preferHDR: Y
      } = V;
      S = W, I = Y ? X[X.length - 1] : X[0], A = O, e = Math.max(e, F), L.log(`[abr] picked start tier ${JSON.stringify(V)}`);
    } else
      S = v?.codecSet, I = v?.videoRange;
    const C = f ? f.duration : c ? c.duration : 0, $ = this.bwEstimator.getEstimateTTFB() / 1e3, M = [];
    for (let B = i; B >= t; B--) {
      var U;
      const V = m[B], W = B > h;
      if (!V)
        continue;
      if (S && V.codecSet !== S || I && V.videoRange !== I || W && A > V.frameRate || !W && A > 0 && A < V.frameRate || V.supportedResult && !((U = V.supportedResult.decodingInfoResults) != null && U[0].smooth)) {
        M.push(B);
        continue;
      }
      const X = V.details, O = (f ? X?.partTarget : X?.averagetargetduration) || C;
      let F;
      W ? F = o * e : F = r * e;
      const Y = C && s >= C * 2 && n === 0 ? m[B].averageBitrate : m[B].maxBitrate, H = this.getTimeToLoadFrag($, F, Y * O, X === void 0);
      if (
        // if adjusted bw is greater than level bitrate AND
        F >= Y && // no level change, or new level has no error history
        (B === u || V.loadError === 0 && V.fragmentError === 0) && // fragment fetchDuration unknown OR live stream OR fragment fetchDuration less than max allowed fetch duration, then this level matches
        // we don't account for max Fetch Duration for live streams, this is to avoid switching down when near the edge of live sliding window ...
        // special case to support startLevel = -1 (bitrateTest) on live streams : in that case we should not exit loop so that findBestLevel will return -1
        (H <= $ || !k(H) || E && !this.bitrateTestDelay || H < d)
      ) {
        const se = this.forcedAutoLevel;
        return B !== p && (se === -1 || se !== p) && (M.length && L.trace(`[abr] Skipped level(s) ${M.join(",")} of ${i} max with CODECS and VIDEO-RANGE:"${m[M[0]].codecs}" ${m[M[0]].videoRange}; not compatible with "${v.codecs}" ${I}`), L.info(`[abr] switch candidate:${h}->${B} adjustedbw(${Math.round(F)})-bitrate=${Math.round(F - Y)} ttfb:${$.toFixed(1)} avgDuration:${O.toFixed(1)} maxFetchDuration:${d.toFixed(1)} fetchDuration:${H.toFixed(1)} firstSelection:${b} codecSet:${S} videoRange:${I} hls.loadLevel:${p}`)), b && (this.firstSelection = B), B;
      }
    }
    return -1;
  }
  set nextAutoLevel(e) {
    const {
      maxAutoLevel: t,
      minAutoLevel: i
    } = this.hls, s = Math.min(Math.max(e, i), t);
    this._nextAutoLevel !== s && (this.nextAutoLevelKey = "", this._nextAutoLevel = s);
  }
}
const kn = {
  length: 0,
  start: () => 0,
  end: () => 0
};
class J {
  /**
   * Return true if `media`'s buffered include `position`
   */
  static isBuffered(e, t) {
    try {
      if (e) {
        const i = J.getBuffered(e);
        for (let s = 0; s < i.length; s++)
          if (t >= i.start(s) && t <= i.end(s))
            return !0;
      }
    } catch {
    }
    return false;
  }
  static bufferInfo(e, t, i) {
    try {
      if (e) {
        const s = J.getBuffered(e), n = [];
        let r;
        for (r = 0; r < s.length; r++)
          n.push({
            start: s.start(r),
            end: s.end(r)
          });
        return this.bufferedInfo(n, t, i);
      }
    } catch {
    }
    return {
      len: 0,
      start: t,
      end: t,
      nextStart: void 0
    };
  }
  static bufferedInfo(e, t, i) {
    t = Math.max(0, t), e.sort(function(d, u) {
      const h = d.start - u.start;
      return h || u.end - d.end;
    });
    let s = [];
    if (i)
      for (let d = 0; d < e.length; d++) {
        const u = s.length;
        if (u) {
          const h = s[u - 1].end;
          e[d].start - h < i ? e[d].end > h && (s[u - 1].end = e[d].end) : s.push(e[d]);
        } else
          s.push(e[d]);
      }
    else
      s = e;
    let n = 0, r, o = t, l = t;
    for (let d = 0; d < s.length; d++) {
      const u = s[d].start, h = s[d].end;
      if (t + i >= u && t < h)
        o = u, l = h, n = l - t;
      else if (t + i < u) {
        r = u;
        break;
      }
    }
    return {
      len: n,
      start: o || 0,
      end: l || 0,
      nextStart: r
    };
  }
  /**
   * Safe method to get buffered property.
   * SourceBuffer.buffered may throw if SourceBuffer is removed from it's MediaSource
   */
  static getBuffered(e) {
    try {
      return e.buffered;
    } catch (t) {
      return L.log("failed to get media.buffered", t), kn;
    }
  }
}
class Mn {
  constructor(e) {
    this.buffers = void 0, this.queues = {
      video: [],
      audio: [],
      audiovideo: []
    }, this.buffers = e;
  }
  append(e, t, i) {
    const s = this.queues[t];
    s.push(e), s.length === 1 && !i && this.executeNext(t);
  }
  insertAbort(e, t) {
    this.queues[t].unshift(e), this.executeNext(t);
  }
  appendBlocker(e) {
    let t;
    const i = new Promise((n) => {
      t = n;
    }), s = {
      execute: t,
      onStart: () => {
      },
      onComplete: () => {
      },
      onError: () => {
      }
    };
    return this.append(s, e), i;
  }
  executeNext(e) {
    const t = this.queues[e];
    if (t.length) {
      const i = t[0];
      try {
        i.execute();
      } catch (s) {
        L.warn(`[buffer-operation-queue]: Exception executing "${e}" SourceBuffer operation: ${s}`), i.onError(s);
        const n = this.buffers[e];
        n != null && n.updating || this.shiftAndExecuteNext(e);
      }
    }
  }
  shiftAndExecuteNext(e) {
    this.queues[e].shift(), this.executeNext(e);
  }
  current(e) {
    return this.queues[e][0];
  }
}
const ni = /(avc[1234]|hvc1|hev1|dvh[1e]|vp09|av01)(?:\.[^.,]+)+/;
class Nn {
  constructor(e) {
    this.details = null, this._objectUrl = null, this.operationQueue = void 0, this.listeners = void 0, this.hls = void 0, this.bufferCodecEventsExpected = 0, this._bufferCodecEventsTotal = 0, this.media = null, this.mediaSource = null, this.lastMpegAudioChunk = null, this.appendSource = void 0, this.appendErrors = {
      audio: 0,
      video: 0,
      audiovideo: 0
    }, this.tracks = {}, this.pendingTracks = {}, this.sourceBuffer = void 0, this.log = void 0, this.warn = void 0, this.error = void 0, this._onEndStreaming = (i) => {
      this.hls && this.hls.pauseBuffering();
    }, this._onStartStreaming = (i) => {
      this.hls && this.hls.resumeBuffering();
    }, this._onMediaSourceOpen = () => {
      const {
        media: i,
        mediaSource: s
      } = this;
      this.log("Media source opened"), i && (i.removeEventListener("emptied", this._onMediaEmptied), this.updateMediaElementDuration(), this.hls.trigger(x.MEDIA_ATTACHED, {
        media: i,
        mediaSource: s
      })), s && s.removeEventListener("sourceopen", this._onMediaSourceOpen), this.checkPendingTracks();
    }, this._onMediaSourceClose = () => {
      this.log("Media source closed");
    }, this._onMediaSourceEnded = () => {
      this.log("Media source ended");
    }, this._onMediaEmptied = () => {
      const {
        mediaSrc: i,
        _objectUrl: s
      } = this;
      i !== s && L.error(`Media element src was set while attaching MediaSource (${s} > ${i})`);
    }, this.hls = e;
    const t = "[buffer-controller]";
    this.appendSource = Ys(Ae(e.config.preferManagedMediaSource)), this.log = L.log.bind(L, t), this.warn = L.warn.bind(L, t), this.error = L.error.bind(L, t), this._initSourceBuffer(), this.registerListeners();
  }
  hasSourceTypes() {
    return this.getSourceBufferTypes().length > 0 || Object.keys(this.pendingTracks).length > 0;
  }
  destroy() {
    this.unregisterListeners(), this.details = null, this.lastMpegAudioChunk = null, this.hls = null;
  }
  registerListeners() {
    const {
      hls: e
    } = this;
    e.on(x.MEDIA_ATTACHING, this.onMediaAttaching, this), e.on(x.MEDIA_DETACHING, this.onMediaDetaching, this), e.on(x.MANIFEST_LOADING, this.onManifestLoading, this), e.on(x.MANIFEST_PARSED, this.onManifestParsed, this), e.on(x.BUFFER_RESET, this.onBufferReset, this), e.on(x.BUFFER_APPENDING, this.onBufferAppending, this), e.on(x.BUFFER_CODECS, this.onBufferCodecs, this), e.on(x.BUFFER_EOS, this.onBufferEos, this), e.on(x.BUFFER_FLUSHING, this.onBufferFlushing, this), e.on(x.LEVEL_UPDATED, this.onLevelUpdated, this), e.on(x.FRAG_PARSED, this.onFragParsed, this), e.on(x.FRAG_CHANGED, this.onFragChanged, this);
  }
  unregisterListeners() {
    const {
      hls: e
    } = this;
    e.off(x.MEDIA_ATTACHING, this.onMediaAttaching, this), e.off(x.MEDIA_DETACHING, this.onMediaDetaching, this), e.off(x.MANIFEST_LOADING, this.onManifestLoading, this), e.off(x.MANIFEST_PARSED, this.onManifestParsed, this), e.off(x.BUFFER_RESET, this.onBufferReset, this), e.off(x.BUFFER_APPENDING, this.onBufferAppending, this), e.off(x.BUFFER_CODECS, this.onBufferCodecs, this), e.off(x.BUFFER_EOS, this.onBufferEos, this), e.off(x.BUFFER_FLUSHING, this.onBufferFlushing, this), e.off(x.LEVEL_UPDATED, this.onLevelUpdated, this), e.off(x.FRAG_PARSED, this.onFragParsed, this), e.off(x.FRAG_CHANGED, this.onFragChanged, this);
  }
  _initSourceBuffer() {
    this.sourceBuffer = {}, this.operationQueue = new Mn(this.sourceBuffer), this.listeners = {
      audio: [],
      video: [],
      audiovideo: []
    }, this.appendErrors = {
      audio: 0,
      video: 0,
      audiovideo: 0
    }, this.lastMpegAudioChunk = null;
  }
  onManifestLoading() {
    this.bufferCodecEventsExpected = this._bufferCodecEventsTotal = 0, this.details = null;
  }
  onManifestParsed(e, t) {
    let i = 2;
    t.audio && !t.video || t.altAudio, i = 1, this.bufferCodecEventsExpected = this._bufferCodecEventsTotal = i, this.log(`${this.bufferCodecEventsExpected} bufferCodec event(s) expected`);
  }
  onMediaAttaching(e, t) {
    const i = this.media = t.media, s = Ae(this.appendSource);
    if (i && s) {
      var n;
      const r = this.mediaSource = new s();
      this.log(`created media source: ${(n = r.constructor) == null ? void 0 : n.name}`), r.addEventListener("sourceopen", this._onMediaSourceOpen), r.addEventListener("sourceended", this._onMediaSourceEnded), r.addEventListener("sourceclose", this._onMediaSourceClose), this.appendSource && (r.addEventListener("startstreaming", this._onStartStreaming), r.addEventListener("endstreaming", this._onEndStreaming));
      const o = this._objectUrl = self.URL.createObjectURL(r);
      if (this.appendSource)
        try {
          i.removeAttribute("src");
          const l = self.ManagedMediaSource;
          i.disableRemotePlayback = i.disableRemotePlayback || l && r instanceof l, ri(i), Bn(i, o), i.load();
        } catch {
          i.src = o;
        }
      else
        i.src = o;
      i.addEventListener("emptied", this._onMediaEmptied);
    }
  }
  onMediaDetaching() {
    const {
      media: e,
      mediaSource: t,
      _objectUrl: i
    } = this;
    if (t) {
      if (this.log("media source detaching"), t.readyState === "open")
        try {
          t.endOfStream();
        } catch (s) {
          this.warn(`onMediaDetaching: ${s.message} while calling endOfStream`);
        }
      this.onBufferReset(), t.removeEventListener("sourceopen", this._onMediaSourceOpen), t.removeEventListener("sourceended", this._onMediaSourceEnded), t.removeEventListener("sourceclose", this._onMediaSourceClose), this.appendSource && (t.removeEventListener("startstreaming", this._onStartStreaming), t.removeEventListener("endstreaming", this._onEndStreaming)), e && (e.removeEventListener("emptied", this._onMediaEmptied), i && self.URL.revokeObjectURL(i), this.mediaSrc === i ? (e.removeAttribute("src"), this.appendSource && ri(e), e.load()) : this.warn("media|source.src was changed by a third party - skip cleanup")), this.mediaSource = null, this.media = null, this._objectUrl = null, this.bufferCodecEventsExpected = this._bufferCodecEventsTotal, this.pendingTracks = {}, this.tracks = {};
    }
    this.hls.trigger(x.MEDIA_DETACHED, void 0);
  }
  onBufferReset() {
    this.getSourceBufferTypes().forEach((e) => {
      this.resetBuffer(e);
    }), this._initSourceBuffer(), this.hls.resumeBuffering();
  }
  resetBuffer(e) {
    const t = this.sourceBuffer[e];
    try {
      if (t) {
        var i;
        this.removeBufferListeners(e), this.sourceBuffer[e] = void 0, (i = this.mediaSource) != null && i.sourceBuffers.length && this.mediaSource.removeSourceBuffer(t);
      }
    } catch (s) {
      this.warn(`onBufferReset ${e}`, s);
    }
  }
  onBufferCodecs(e, t) {
    const i = this.getSourceBufferTypes().length, s = Object.keys(t);
    if (s.forEach((r) => {
      if (i) {
        const l = this.tracks[r];
        if (l && typeof l.buffer.changeType == "function") {
          var o;
          const {
            id: d,
            codec: u,
            levelCodec: h,
            container: c,
            metadata: f
          } = t[r], m = Ut(l.codec, l.levelCodec), g = m?.replace(ni, "$1");
          let p = Ut(u, h);
          const y = (o = p) == null ? void 0 : o.replace(ni, "$1");
          if (p && g !== y) {
            r.slice(0, 5) === "audio" && (p = qe(p, this.appendSource));
            const v = `${c};codecs=${p}`;
            this.appendChangeType(r, v), this.log(`switching codec ${m} to ${p}`), this.tracks[r] = {
              buffer: l.buffer,
              codec: u,
              container: c,
              levelCodec: h,
              metadata: f,
              id: d
            };
          }
        }
      } else
        this.pendingTracks[r] = t[r];
    }), i)
      return;
    const n = Math.max(this.bufferCodecEventsExpected - 1, 0);
    this.bufferCodecEventsExpected !== n && (this.log(`${n} bufferCodec event(s) expected ${s.join(",")}`), this.bufferCodecEventsExpected = n), this.mediaSource && this.mediaSource.readyState === "open" && this.checkPendingTracks();
  }
  appendChangeType(e, t) {
    const {
      operationQueue: i
    } = this, s = {
      execute: () => {
        const n = this.sourceBuffer[e];
        n && (this.log(`changing ${e} sourceBuffer type to ${t}`), n.changeType(t)), i.shiftAndExecuteNext(e);
      },
      onStart: () => {
      },
      onComplete: () => {
      },
      onError: (n) => {
        this.warn(`Failed to change ${e} SourceBuffer type`, n);
      }
    };
    i.append(s, e, !!this.pendingTracks[e]);
  }
  onBufferAppending(e, t) {
    const {
      hls: i,
      operationQueue: s,
      tracks: n
    } = this, {
      data: r,
      type: o,
      frag: l,
      part: d,
      chunkMeta: u
    } = t, h = u.buffering[o], c = self.performance.now();
    h.start = c;
    const f = l.stats.buffering, m = d ? d.stats.buffering : null;
    f.start === 0 && (f.start = c), m && m.start === 0 && (m.start = c);
    const g = n.audio;
    let p = false;
    o === "audio" && g?.container === "audio/mpeg" && (p = !this.lastMpegAudioChunk || u.id === 1 || this.lastMpegAudioChunk.sn !== u.sn, this.lastMpegAudioChunk = u);
    const y = l.start, v = {
      execute: () => {
        if (h.executeStart = self.performance.now(), p) {
          const E = this.sourceBuffer[o];
          if (E) {
            const b = y - E.timestampOffset;
            Math.abs(b) >= 0.1 && (this.log(`Updating audio SourceBuffer timestampOffset to ${y} (delta: ${b}) sn: ${l.sn})`), E.timestampOffset = y);
          }
        }
        this.appendExecutor(r, o);
      },
      onStart: () => {
      },
      onComplete: () => {
        const E = self.performance.now();
        h.executeEnd = h.end = E, f.first === 0 && (f.first = E), m && m.first === 0 && (m.first = E);
        const {
          sourceBuffer: b
        } = this, S = {};
        for (const I in b)
          S[I] = J.getBuffered(b[I]);
        this.appendErrors[o] = 0, o === "audio" || o === "video" ? this.appendErrors.audiovideo = 0 : (this.appendErrors.audio = 0, this.appendErrors.video = 0), this.hls.trigger(x.BUFFER_APPENDED, {
          type: o,
          frag: l,
          part: d,
          chunkMeta: u,
          parent: l.type,
          timeRanges: S
        });
      },
      onError: (E) => {
        const b = {
          type: K.MEDIA_ERROR,
          parent: l.type,
          details: R.BUFFER_APPEND_ERROR,
          sourceBufferName: o,
          frag: l,
          part: d,
          chunkMeta: u,
          error: E,
          err: E,
          fatal: false
        };
        if (E.code === DOMException.QUOTA_EXCEEDED_ERR)
          b.details = R.BUFFER_FULL_ERROR;
        else {
          const S = ++this.appendErrors[o];
          b.details = R.BUFFER_APPEND_ERROR, this.warn(`Failed ${S}/${i.config.appendErrorMaxRetry} times to append segment in "${o}" sourceBuffer`), S >= i.config.appendErrorMaxRetry && (b.fatal = true);
        }
        i.trigger(x.ERROR, b);
      }
    };
    s.append(v, o, !!this.pendingTracks[o]);
  }
  onBufferFlushing(e, t) {
    const {
      operationQueue: i
    } = this, s = (n) => ({
      execute: this.removeExecutor.bind(this, n, t.startOffset, t.endOffset),
      onStart: () => {
      },
      onComplete: () => {
        this.hls.trigger(x.BUFFER_FLUSHED, {
          type: n
        });
      },
      onError: (r) => {
        this.warn(`Failed to remove from ${n} SourceBuffer`, r);
      }
    });
    t.type ? i.append(s(t.type), t.type) : this.getSourceBufferTypes().forEach((n) => {
      i.append(s(n), n);
    });
  }
  onFragParsed(e, t) {
    const {
      frag: i,
      part: s
    } = t, n = [], r = s ? s.elementaryStreams : i.elementaryStreams;
    r[Q.AUDIOVIDEO] ? n.push("audiovideo") : (r[Q.AUDIO] && n.push("audio"), r[Q.VIDEO] && n.push("video"));
    const o = () => {
      const l = self.performance.now();
      i.stats.buffering.end = l, s && (s.stats.buffering.end = l);
      const d = s ? s.stats : i.stats;
      this.hls.trigger(x.FRAG_BUFFERED, {
        frag: i,
        part: s,
        stats: d,
        id: i.type
      });
    };
    n.length === 0 && this.warn(`Fragments must have at least one ElementaryStreamType set. type: ${i.type} level: ${i.level} sn: ${i.sn}`), this.blockBuffers(o, n);
  }
  onFragChanged(e, t) {
    this.trimBuffers();
  }
  // on BUFFER_EOS mark matching sourcebuffer(s) as ended and trigger checkEos()
  // an undefined data.type will mark all buffers as EOS.
  onBufferEos(e, t) {
    this.getSourceBufferTypes().reduce((s, n) => {
      const r = this.sourceBuffer[n];
      return r && (!t.type || t.type === n) && (r.ending = true, r.ended || (r.ended = true, this.log(`${n} sourceBuffer now EOS`))), s && !!(!r || r.ended);
    }, true) && (this.log("Queueing mediaSource.endOfStream()"), this.blockBuffers(() => {
      this.getSourceBufferTypes().forEach((n) => {
        const r = this.sourceBuffer[n];
        r && (r.ending = false);
      });
      const {
        mediaSource: s
      } = this;
      if (!s || s.readyState !== "open") {
        s && this.log(`Could not call mediaSource.endOfStream(). mediaSource.readyState: ${s.readyState}`);
        return;
      }
      this.log("Calling mediaSource.endOfStream()"), s.endOfStream();
    }));
  }
  onLevelUpdated(e, {
    details: t
  }) {
    t.fragments.length && (this.details = t, this.getSourceBufferTypes().length ? this.blockBuffers(this.updateMediaElementDuration.bind(this)) : this.updateMediaElementDuration());
  }
  trimBuffers() {
    const {
      hls: e,
      details: t,
      media: i
    } = this;
    if (!i || t === null || !this.getSourceBufferTypes().length)
      return;
    const n = e.config, r = i.currentTime, o = t.levelTargetDuration, l = t.live && n.liveBackBufferLength !== null ? n.liveBackBufferLength : n.backBufferLength;
    if (k(l) && l > 0) {
      const d = Math.max(l, o), u = Math.floor(r / o) * o - d;
      this.flushBackBuffer(r, o, u);
    }
    if (k(n.frontBufferFlushThreshold) && n.frontBufferFlushThreshold > 0) {
      const d = Math.max(n.maxBufferLength, n.frontBufferFlushThreshold), u = Math.max(d, o), h = Math.floor(r / o) * o + u;
      this.flushFrontBuffer(r, o, h);
    }
  }
  flushBackBuffer(e, t, i) {
    const {
      details: s,
      sourceBuffer: n
    } = this;
    this.getSourceBufferTypes().forEach((o) => {
      const l = n[o];
      if (l) {
        const d = J.getBuffered(l);
        if (d.length > 0 && i > d.start(0)) {
          if (this.hls.trigger(x.BACK_BUFFER_REACHED, {
            bufferEnd: i
          }), s != null && s.live)
            this.hls.trigger(x.LIVE_BACK_BUFFER_REACHED, {
              bufferEnd: i
            });
          else if (l.ended && d.end(d.length - 1) - e < t * 2) {
            this.log(`Cannot flush ${o} back buffer while SourceBuffer is in ended state`);
            return;
          }
          this.hls.trigger(x.BUFFER_FLUSHING, {
            startOffset: 0,
            endOffset: i,
            type: o
          });
        }
      }
    });
  }
  flushFrontBuffer(e, t, i) {
    const {
      sourceBuffer: s
    } = this;
    this.getSourceBufferTypes().forEach((r) => {
      const o = s[r];
      if (o) {
        const l = J.getBuffered(o), d = l.length;
        if (d < 2)
          return;
        const u = l.start(d - 1), h = l.end(d - 1);
        if (i > u || e >= u && e <= h)
          return;
        if (o.ended && e - h < 2 * t) {
          this.log(`Cannot flush ${r} front buffer while SourceBuffer is in ended state`);
          return;
        }
        this.hls.trigger(x.BUFFER_FLUSHING, {
          startOffset: u,
          endOffset: 1 / 0,
          type: r
        });
      }
    });
  }
  /**
   * Update Media Source duration to current level duration or override to Infinity if configuration parameter
   * 'liveDurationInfinity` is set to `true`
   * More details: https://github.com/video-dev/hls.js/issues/355
   */
  updateMediaElementDuration() {
    if (!this.details || !this.media || !this.mediaSource || this.mediaSource.readyState !== "open")
      return;
    const {
      details: e,
      hls: t,
      media: i,
      mediaSource: s
    } = this, n = e.fragments[0].start + e.totalduration, r = i.duration, o = k(s.duration) ? s.duration : 0;
    e.live && t.config.liveDurationInfinity ? (s.duration = 1 / 0, this.updateSeekableRange(e)) : (n > o && n > r || !k(r)) && (this.log(`Updating Media Source duration to ${n.toFixed(3)}`), s.duration = n);
  }
  updateSeekableRange(e) {
    const t = this.mediaSource, i = e.fragments;
    if (i.length && e.live && t != null && t.setLiveSeekableRange) {
      const n = Math.max(0, i[0].start), r = Math.max(n, n + e.totalduration);
      this.log(`Media Source duration is set to ${t.duration}. Setting seekable range to ${n}-${r}.`), t.setLiveSeekableRange(n, r);
    }
  }
  checkPendingTracks() {
    const {
      bufferCodecEventsExpected: e,
      operationQueue: t,
      pendingTracks: i
    } = this, s = Object.keys(i).length;
    if (s && (!e || s === 2 || "audiovideo" in i)) {
      this.createSourceBuffers(i), this.pendingTracks = {};
      const n = this.getSourceBufferTypes();
      if (n.length)
        this.hls.trigger(x.BUFFER_CREATED, {
          tracks: this.tracks
        }), n.forEach((r) => {
          t.executeNext(r);
        });
      else {
        const r = new Error("could not create source buffer for media codec(s)");
        this.hls.trigger(x.ERROR, {
          type: K.MEDIA_ERROR,
          details: R.BUFFER_INCOMPATIBLE_CODECS_ERROR,
          fatal: true,
          error: r,
          reason: r.message
        });
      }
    }
  }
  createSourceBuffers(e) {
    const {
      sourceBuffer: t,
      mediaSource: i
    } = this;
    if (!i)
      throw Error("createSourceBuffers called when mediaSource was null");
    for (const n in e)
      if (!t[n]) {
        var s;
        const r = e[n];
        if (!r)
          throw Error(`source buffer exists for track ${n}, however track does not`);
        let o = ((s = r.levelCodec) == null ? void 0 : s.indexOf(",")) === -1 ? r.levelCodec : r.codec;
        o && n.slice(0, 5) === "audio" && (o = qe(o, this.appendSource));
        const l = `${r.container};codecs=${o}`;
        this.log(`creating sourceBuffer(${l})`);
        try {
          const d = t[n] = i.addSourceBuffer(l), u = n;
          this.addBufferListener(u, "updatestart", this._onSBUpdateStart), this.addBufferListener(u, "updateend", this._onSBUpdateEnd), this.addBufferListener(u, "error", this._onSBUpdateError), this.appendSource && this.addBufferListener(u, "bufferedchange", (h, c) => {
            const f = c.removedRanges;
            f != null && f.length && this.hls.trigger(x.BUFFER_FLUSHED, {
              type: n
            });
          }), this.tracks[n] = {
            buffer: d,
            codec: o,
            container: r.container,
            levelCodec: r.levelCodec,
            metadata: r.metadata,
            id: r.id
          };
        } catch (d) {
          this.error(`error while trying to add sourceBuffer: ${d.message}`), this.hls.trigger(x.ERROR, {
            type: K.MEDIA_ERROR,
            details: R.BUFFER_ADD_CODEC_ERROR,
            fatal: false,
            error: d,
            sourceBufferName: n,
            mimeType: l
          });
        }
      }
  }
  get mediaSrc() {
    var e, t;
    const i = ((e = this.media) == null || (t = e.querySelector) == null ? void 0 : t.call(e, "source")) || this.media;
    return i?.src;
  }
  _onSBUpdateStart(e) {
    const {
      operationQueue: t
    } = this;
    t.current(e).onStart();
  }
  _onSBUpdateEnd(e) {
    var t;
    if (((t = this.mediaSource) == null ? void 0 : t.readyState) === "closed") {
      this.resetBuffer(e);
      return;
    }
    const {
      operationQueue: i
    } = this;
    i.current(e).onComplete(), i.shiftAndExecuteNext(e);
  }
  _onSBUpdateError(e, t) {
    var i;
    const s = new Error(`${e} SourceBuffer error. MediaSource readyState: ${(i = this.mediaSource) == null ? void 0 : i.readyState}`);
    this.error(`${s}`, t), this.hls.trigger(x.ERROR, {
      type: K.MEDIA_ERROR,
      details: R.BUFFER_APPENDING_ERROR,
      sourceBufferName: e,
      error: s,
      fatal: false
    });
    const n = this.operationQueue.current(e);
    n && n.onError(s);
  }
  // This method must result in an updateend event; if remove is not called, _onSBUpdateEnd must be called manually
  removeExecutor(e, t, i) {
    const {
      media: s,
      mediaSource: n,
      operationQueue: r,
      sourceBuffer: o
    } = this, l = o[e];
    if (!s || !n || !l) {
      this.warn(`Attempting to remove from the ${e} SourceBuffer, but it does not exist`), r.shiftAndExecuteNext(e);
      return;
    }
    const d = k(s.duration) ? s.duration : 1 / 0, u = k(n.duration) ? n.duration : 1 / 0, h = Math.max(0, t), c = Math.min(i, d, u);
    c > h && (!l.ending || l.ended) ? (l.ended = false, this.log(`Removing [${h},${c}] from the ${e} SourceBuffer`), l.remove(h, c)) : r.shiftAndExecuteNext(e);
  }
  // This method must result in an updateend event; if append is not called, _onSBUpdateEnd must be called manually
  appendExecutor(e, t) {
    const i = this.sourceBuffer[t];
    if (!i) {
      if (!this.pendingTracks[t])
        throw new Error(`Attempting to append to the ${t} SourceBuffer, but it does not exist`);
      return;
    }
    i.ended = false, i.appendBuffer(e);
  }
  // Enqueues an operation to each SourceBuffer queue which, upon execution, resolves a promise. When all promises
  // resolve, the onUnblocked function is executed. Functions calling this method do not need to unblock the queue
  // upon completion, since we already do it here
  blockBuffers(e, t = this.getSourceBufferTypes()) {
    if (!t.length) {
      this.log("Blocking operation requested, but no SourceBuffers exist"), Promise.resolve().then(e);
      return;
    }
    const {
      operationQueue: i
    } = this, s = t.map((n) => i.appendBlocker(n));
    Promise.all(s).then(() => {
      e(), t.forEach((n) => {
        const r = this.sourceBuffer[n];
        r != null && r.updating || i.shiftAndExecuteNext(n);
      });
    });
  }
  getSourceBufferTypes() {
    return Object.keys(this.sourceBuffer);
  }
  addBufferListener(e, t, i) {
    const s = this.sourceBuffer[e];
    if (!s)
      return;
    const n = i.bind(this, e);
    this.listeners[e].push({
      event: t,
      listener: n
    }), s.addEventListener(t, n);
  }
  removeBufferListeners(e) {
    const t = this.sourceBuffer[e];
    t && this.listeners[e].forEach((i) => {
      t.removeEventListener(i.event, i.listener);
    });
  }
}
function ri(a) {
  const e = a.querySelectorAll("source");
  [].slice.call(e).forEach((t) => {
    a.removeChild(t);
  });
}
function Bn(a, e) {
  const t = self.document.createElement("source");
  t.type = "video/mp4", t.src = e, a.appendChild(t);
}
class Ct {
  constructor(e) {
    this.hls = void 0, this.autoLevelCapping = void 0, this.firstLevel = void 0, this.media = void 0, this.restrictedLevels = void 0, this.timer = void 0, this.clientRect = void 0, this.streamController = void 0, this.hls = e, this.autoLevelCapping = Number.POSITIVE_INFINITY, this.firstLevel = -1, this.media = null, this.restrictedLevels = [], this.timer = void 0, this.clientRect = null, this.registerListeners();
  }
  setStreamController(e) {
    this.streamController = e;
  }
  destroy() {
    this.hls && this.unregisterListener(), this.timer && this.stopCapping(), this.media = null, this.clientRect = null, this.hls = this.streamController = null;
  }
  registerListeners() {
    const {
      hls: e
    } = this;
    e.on(x.FPS_DROP_LEVEL_CAPPING, this.onFpsDropLevelCapping, this), e.on(x.MEDIA_ATTACHING, this.onMediaAttaching, this), e.on(x.MANIFEST_PARSED, this.onManifestParsed, this), e.on(x.LEVELS_UPDATED, this.onLevelsUpdated, this), e.on(x.BUFFER_CODECS, this.onBufferCodecs, this), e.on(x.MEDIA_DETACHING, this.onMediaDetaching, this);
  }
  unregisterListener() {
    const {
      hls: e
    } = this;
    e.off(x.FPS_DROP_LEVEL_CAPPING, this.onFpsDropLevelCapping, this), e.off(x.MEDIA_ATTACHING, this.onMediaAttaching, this), e.off(x.MANIFEST_PARSED, this.onManifestParsed, this), e.off(x.LEVELS_UPDATED, this.onLevelsUpdated, this), e.off(x.BUFFER_CODECS, this.onBufferCodecs, this), e.off(x.MEDIA_DETACHING, this.onMediaDetaching, this);
  }
  onFpsDropLevelCapping(e, t) {
    const i = this.hls.levels[t.droppedLevel];
    this.isLevelAllowed(i) && this.restrictedLevels.push({
      bitrate: i.bitrate,
      height: i.height,
      width: i.width
    });
  }
  onMediaAttaching(e, t) {
    this.media = t.media instanceof HTMLVideoElement ? t.media : null, this.clientRect = null, this.timer && this.hls.levels.length && this.detectPlayerSize();
  }
  onManifestParsed(e, t) {
    const i = this.hls;
    this.restrictedLevels = [], this.firstLevel = t.firstLevel, i.config.capLevelToPlayerSize && t.video && this.startCapping();
  }
  onLevelsUpdated(e, t) {
    this.timer && k(this.autoLevelCapping) && this.detectPlayerSize();
  }
  // Only activate capping when playing a video stream; otherwise, multi-bitrate audio-only streams will be restricted
  // to the first level
  onBufferCodecs(e, t) {
    this.hls.config.capLevelToPlayerSize && t.video && this.startCapping();
  }
  onMediaDetaching() {
    this.stopCapping();
  }
  detectPlayerSize() {
    if (this.media) {
      if (this.mediaHeight <= 0 || this.mediaWidth <= 0) {
        this.clientRect = null;
        return;
      }
      const e = this.hls.levels;
      if (e.length) {
        const t = this.hls, i = this.getMaxLevel(e.length - 1);
        i !== this.autoLevelCapping && L.log(`Setting autoLevelCapping to ${i}: ${e[i].height}p@${e[i].bitrate} for media ${this.mediaWidth}x${this.mediaHeight}`), t.autoLevelCapping = i, t.autoLevelCapping > this.autoLevelCapping && this.streamController && this.streamController.nextLevelSwitch(), this.autoLevelCapping = t.autoLevelCapping;
      }
    }
  }
  /*
   * returns level should be the one with the dimensions equal or greater than the media (player) dimensions (so the video will be downscaled)
   */
  getMaxLevel(e) {
    const t = this.hls.levels;
    if (!t.length)
      return -1;
    const i = t.filter((s, n) => this.isLevelAllowed(s) && n <= e);
    return this.clientRect = null, Ct.getMaxLevelByMediaSize(i, this.mediaWidth, this.mediaHeight);
  }
  startCapping() {
    this.timer || (this.autoLevelCapping = Number.POSITIVE_INFINITY, self.clearInterval(this.timer), this.timer = self.setInterval(this.detectPlayerSize.bind(this), 1e3), this.detectPlayerSize());
  }
  stopCapping() {
    this.restrictedLevels = [], this.firstLevel = -1, this.autoLevelCapping = Number.POSITIVE_INFINITY, this.timer && (self.clearInterval(this.timer), this.timer = void 0);
  }
  getDimensions() {
    if (this.clientRect)
      return this.clientRect;
    const e = this.media, t = {
      width: 0,
      height: 0
    };
    if (e) {
      const i = e.getBoundingClientRect();
      t.width = i.width, t.height = i.height, !t.width && !t.height && (t.width = i.right - i.left || e.width || 0, t.height = i.bottom - i.top || e.height || 0);
    }
    return this.clientRect = t, t;
  }
  get mediaWidth() {
    return this.getDimensions().width * this.contentScaleFactor;
  }
  get mediaHeight() {
    return this.getDimensions().height * this.contentScaleFactor;
  }
  get contentScaleFactor() {
    let e = 1;
    if (!this.hls.config.ignoreDevicePixelRatio)
      try {
        e = self.devicePixelRatio;
      } catch {
      }
    return e;
  }
  isLevelAllowed(e) {
    return !this.restrictedLevels.some((i) => e.bitrate === i.bitrate && e.width === i.width && e.height === i.height);
  }
  static getMaxLevelByMediaSize(e, t, i) {
    if (!(e != null && e.length))
      return -1;
    const s = (o, l) => l ? o.width !== l.width || o.height !== l.height : true;
    let n = e.length - 1;
    const r = Math.max(t, i);
    for (let o = 0; o < e.length; o += 1) {
      const l = e[o];
      if ((l.width >= r || l.height >= r) && s(l, e[o + 1])) {
        n = o;
        break;
      }
    }
    return n;
  }
}
class Un {
  constructor(e) {
    this.hls = void 0, this.isVideoPlaybackQualityAvailable = false, this.timer = void 0, this.media = null, this.lastTime = void 0, this.lastDroppedFrames = 0, this.lastDecodedFrames = 0, this.streamController = void 0, this.hls = e, this.registerListeners();
  }
  setStreamController(e) {
    this.streamController = e;
  }
  registerListeners() {
    this.hls.on(x.MEDIA_ATTACHING, this.onMediaAttaching, this);
  }
  unregisterListeners() {
    this.hls.off(x.MEDIA_ATTACHING, this.onMediaAttaching, this);
  }
  destroy() {
    this.timer && clearInterval(this.timer), this.unregisterListeners(), this.isVideoPlaybackQualityAvailable = false, this.media = null;
  }
  onMediaAttaching(e, t) {
    const i = this.hls.config;
    if (i.capLevelOnFPSDrop) {
      const s = t.media instanceof self.HTMLVideoElement ? t.media : null;
      this.media = s, s && typeof s.getVideoPlaybackQuality == "function" && (this.isVideoPlaybackQualityAvailable = true), self.clearInterval(this.timer), this.timer = self.setInterval(this.checkFPSInterval.bind(this), i.fpsDroppedMonitoringPeriod);
    }
  }
  checkFPS(e, t, i) {
    const s = performance.now();
    if (t) {
      if (this.lastTime) {
        const n = s - this.lastTime, r = i - this.lastDroppedFrames, o = t - this.lastDecodedFrames, l = 1e3 * r / n, d = this.hls;
        if (d.trigger(x.FPS_DROP, {
          currentDropped: r,
          currentDecoded: o,
          totalDroppedFrames: i
        }), l > 0 && r > d.config.fpsDroppedMonitoringThreshold * o) {
          let u = d.currentLevel;
          L.warn("drop FPS ratio greater than max allowed value for currentLevel: " + u), u > 0 && (d.autoLevelCapping === -1 || d.autoLevelCapping >= u) && (u = u - 1, d.trigger(x.FPS_DROP_LEVEL_CAPPING, {
            level: u,
            droppedLevel: d.currentLevel
          }), d.autoLevelCapping = u, this.streamController.nextLevelSwitch());
        }
      }
      this.lastTime = s, this.lastDroppedFrames = i, this.lastDecodedFrames = t;
    }
  }
  checkFPSInterval() {
    const e = this.media;
    if (e)
      if (this.isVideoPlaybackQualityAvailable) {
        const t = e.getVideoPlaybackQuality();
        this.checkFPS(e, t.totalVideoFrames, t.droppedVideoFrames);
      } else
        this.checkFPS(e, e.webkitDecodedFrameCount, e.webkitDroppedFrameCount);
  }
}
const $n = 3e5;
class Gn {
  constructor(e) {
    this.hls = void 0, this.log = void 0, this.loader = null, this.uri = null, this.pathwayId = ".", this.pathwayPriority = null, this.timeToLoad = 300, this.reloadTimer = -1, this.updated = 0, this.started = false, this.enabled = true, this.levels = null, this.audioTracks = null, this.subtitleTracks = null, this.penalizedPathways = {}, this.hls = e, this.log = L.log.bind(L, "[content-steering]:"), this.registerListeners();
  }
  registerListeners() {
    const e = this.hls;
    e.on(x.MANIFEST_LOADING, this.onManifestLoading, this), e.on(x.MANIFEST_LOADED, this.onManifestLoaded, this), e.on(x.MANIFEST_PARSED, this.onManifestParsed, this), e.on(x.ERROR, this.onError, this);
  }
  unregisterListeners() {
    const e = this.hls;
    e && (e.off(x.MANIFEST_LOADING, this.onManifestLoading, this), e.off(x.MANIFEST_LOADED, this.onManifestLoaded, this), e.off(x.MANIFEST_PARSED, this.onManifestParsed, this), e.off(x.ERROR, this.onError, this));
  }
  startLoad() {
    if (this.started = true, this.clearTimeout(), this.enabled && this.uri) {
      if (this.updated) {
        const e = this.timeToLoad * 1e3 - (performance.now() - this.updated);
        if (e > 0) {
          this.scheduleRefresh(this.uri, e);
          return;
        }
      }
      this.loadSteeringManifest(this.uri);
    }
  }
  stopLoad() {
    this.started = false, this.loader && (this.loader.destroy(), this.loader = null), this.clearTimeout();
  }
  clearTimeout() {
    this.reloadTimer !== -1 && (self.clearTimeout(this.reloadTimer), this.reloadTimer = -1);
  }
  destroy() {
    this.unregisterListeners(), this.stopLoad(), this.hls = null, this.levels = this.audioTracks = this.subtitleTracks = null;
  }
  removeLevel(e) {
    const t = this.levels;
    t && (this.levels = t.filter((i) => i !== e));
  }
  onManifestLoading() {
    this.stopLoad(), this.enabled = true, this.timeToLoad = 300, this.updated = 0, this.uri = null, this.pathwayId = ".", this.levels = this.audioTracks = this.subtitleTracks = null;
  }
  onManifestLoaded(e, t) {
    const {
      contentSteering: i
    } = t;
    i !== null && (this.pathwayId = i.pathwayId, this.uri = i.uri, this.started && this.startLoad());
  }
  onManifestParsed(e, t) {
    this.audioTracks = t.audioTracks, this.subtitleTracks = t.subtitleTracks;
  }
  onError(e, t) {
    const {
      errorAction: i
    } = t;
    if (i?.action === ie.SendAlternateToPenaltyBox && i.flags === de.MoveAllAlternatesMatchingHost) {
      const s = this.levels;
      let n = this.pathwayPriority, r = this.pathwayId;
      if (t.context) {
        const {
          groupId: o,
          pathwayId: l,
          type: d
        } = t.context;
        o && s ? r = this.getPathwayForGroupId(o, d, r) : l && (r = l);
      }
      r in this.penalizedPathways || (this.penalizedPathways[r] = performance.now()), !n && s && (n = s.reduce((o, l) => (o.indexOf(l.pathwayId) === -1 && o.push(l.pathwayId), o), [])), n && n.length > 1 && (this.updatePathwayPriority(n), i.resolved = this.pathwayId !== r), i.resolved || L.warn(`Could not resolve ${t.details} ("${t.error.message}") with content-steering for Pathway: ${r} levels: ${s && s.length} priorities: ${JSON.stringify(n)} penalized: ${JSON.stringify(this.penalizedPathways)}`);
    }
  }
  filterParsedLevels(e) {
    this.levels = e;
    let t = this.getLevelsForPathway(this.pathwayId);
    if (t.length === 0) {
      const i = e[0].pathwayId;
      this.log(`No levels found in Pathway ${this.pathwayId}. Setting initial Pathway to "${i}"`), t = this.getLevelsForPathway(i), this.pathwayId = i;
    }
    return t.length !== e.length && this.log(`Found ${t.length}/${e.length} levels in Pathway "${this.pathwayId}"`), t;
  }
  getLevelsForPathway(e) {
    return this.levels === null ? [] : this.levels.filter((t) => e === t.pathwayId);
  }
  updatePathwayPriority(e) {
    this.pathwayPriority = e;
    let t;
    const i = this.penalizedPathways, s = performance.now();
    Object.keys(i).forEach((n) => {
      s - i[n] > $n && delete i[n];
    });
    for (let n = 0; n < e.length; n++) {
      const r = e[n];
      if (r in i)
        continue;
      if (r === this.pathwayId)
        return;
      const o = this.hls.nextLoadLevel, l = this.hls.levels[o];
      if (t = this.getLevelsForPathway(r), t.length > 0) {
        this.log(`Setting Pathway to "${r}"`), this.pathwayId = r, Bi(t), this.hls.trigger(x.LEVELS_UPDATED, {
          levels: t
        });
        const d = this.hls.levels[o];
        l && d && this.levels && (d.attrs["STABLE-VARIANT-ID"] !== l.attrs["STABLE-VARIANT-ID"] && d.bitrate !== l.bitrate && this.log(`Unstable Pathways change from bitrate ${l.bitrate} to ${d.bitrate}`), this.hls.nextLoadLevel = o);
        break;
      }
    }
  }
  getPathwayForGroupId(e, t, i) {
    const s = this.getLevelsForPathway(i).concat(this.levels || []);
    for (let n = 0; n < s.length; n++)
      if (t === j.AUDIO_TRACK && s[n].hasAudioGroup(e) || t === j.SUBTITLE_TRACK && s[n].hasSubtitleGroup(e))
        return s[n].pathwayId;
    return i;
  }
  clonePathways(e) {
    const t = this.levels;
    if (!t)
      return;
    const i = {}, s = {};
    e.forEach((n) => {
      const {
        ID: r,
        "BASE-ID": o,
        "URI-REPLACEMENT": l
      } = n;
      if (t.some((u) => u.pathwayId === r))
        return;
      const d = this.getLevelsForPathway(o).map((u) => {
        const h = new Z(u.attrs);
        h["PATHWAY-ID"] = r;
        const c = h.AUDIO && `${h.AUDIO}_clone_${r}`, f = h.SUBTITLES && `${h.SUBTITLES}_clone_${r}`;
        c && (i[h.AUDIO] = c, h.AUDIO = c), f && (s[h.SUBTITLES] = f, h.SUBTITLES = f);
        const m = Gi(u.uri, h["STABLE-VARIANT-ID"], "PER-VARIANT-URIS", l), g = new Lt({
          attrs: h,
          audioCodec: u.audioCodec,
          bitrate: u.bitrate,
          height: u.height,
          name: u.name,
          url: m,
          videoCodec: u.videoCodec,
          width: u.width
        });
        if (u.audioGroups)
          for (let p = 1; p < u.audioGroups.length; p++)
            g.addGroupId("audio", `${u.audioGroups[p]}_clone_${r}`);
        if (u.subtitleGroups)
          for (let p = 1; p < u.subtitleGroups.length; p++)
            g.addGroupId("text", `${u.subtitleGroups[p]}_clone_${r}`);
        return g;
      });
      t.push(...d), ai(this.audioTracks, i, l, r), ai(this.subtitleTracks, s, l, r);
    });
  }
  loadSteeringManifest(e) {
    const t = this.hls.config, i = t.loader;
    this.loader && this.loader.destroy(), this.loader = new i(t);
    let s;
    try {
      s = new self.URL(e);
    } catch {
      this.enabled = false, this.log(`Failed to parse Steering Manifest URI: ${e}`);
      return;
    }
    if (s.protocol !== "data:") {
      const u = (this.hls.bandwidthEstimate || t.abrEwmaDefaultEstimate) | 0;
      s.searchParams.set("_HLS_pathway", this.pathwayId), s.searchParams.set("_HLS_throughput", "" + u);
    }
    const n = {
      responseType: "json",
      url: s.href
    }, r = t.steeringManifestLoadPolicy.default, o = r.errorRetry || r.timeoutRetry || {}, l = {
      loadPolicy: r,
      timeout: r.maxLoadTimeMs,
      maxRetry: o.maxNumRetry || 0,
      retryDelay: o.retryDelayMs || 0,
      maxRetryDelay: o.maxRetryDelayMs || 0
    }, d = {
      onSuccess: (u, h, c, f) => {
        this.log(`Loaded steering manifest: "${s}"`);
        const m = u.data;
        if (m.VERSION !== 1) {
          this.log(`Steering VERSION ${m.VERSION} not supported!`);
          return;
        }
        this.updated = performance.now(), this.timeToLoad = m.TTL;
        const {
          "RELOAD-URI": g,
          "PATHWAY-CLONES": p,
          "PATHWAY-PRIORITY": y
        } = m;
        if (g)
          try {
            this.uri = new self.URL(g, s).href;
          } catch {
            this.enabled = false, this.log(`Failed to parse Steering Manifest RELOAD-URI: ${g}`);
            return;
          }
        this.scheduleRefresh(this.uri || c.url), p && this.clonePathways(p);
        const v = {
          steeringManifest: m,
          url: s.toString()
        };
        this.hls.trigger(x.STEERING_MANIFEST_LOADED, v), y && this.updatePathwayPriority(y);
      },
      onError: (u, h, c, f) => {
        if (this.log(`Error loading steering manifest: ${u.code} ${u.text} (${h.url})`), this.stopLoad(), u.code === 410) {
          this.enabled = false, this.log(`Steering manifest ${h.url} no longer available`);
          return;
        }
        let m = this.timeToLoad * 1e3;
        if (u.code === 429) {
          const g = this.loader;
          if (typeof g?.getResponseHeader == "function") {
            const p = g.getResponseHeader("Retry-After");
            p && (m = parseFloat(p) * 1e3);
          }
          this.log(`Steering manifest ${h.url} rate limited`);
          return;
        }
        this.scheduleRefresh(this.uri || h.url, m);
      },
      onTimeout: (u, h, c) => {
        this.log(`Timeout loading steering manifest (${h.url})`), this.scheduleRefresh(this.uri || h.url);
      }
    };
    this.log(`Requesting steering manifest: ${s}`), this.loader.load(n, l, d);
  }
  scheduleRefresh(e, t = this.timeToLoad * 1e3) {
    this.clearTimeout(), this.reloadTimer = self.setTimeout(() => {
      var i;
      const s = (i = this.hls) == null ? void 0 : i.media;
      if (s && !s.ended) {
        this.loadSteeringManifest(e);
        return;
      }
      this.scheduleRefresh(e, this.timeToLoad * 1e3);
    }, t);
  }
}
function ai(a, e, t, i) {
  a && Object.keys(e).forEach((s) => {
    const n = a.filter((r) => r.groupId === s).map((r) => {
      const o = ae({}, r);
      return o.details = void 0, o.attrs = new Z(o.attrs), o.url = o.attrs.URI = Gi(r.url, r.attrs["STABLE-RENDITION-ID"], "PER-RENDITION-URIS", t), o.groupId = o.attrs["GROUP-ID"] = e[s], o.attrs["PATHWAY-ID"] = i, o;
    });
    a.push(...n);
  });
}
function Gi(a, e, t, i) {
  const {
    HOST: s,
    PARAMS: n,
    [t]: r
  } = i;
  let o;
  e && (o = r?.[e], o && (a = o));
  const l = new self.URL(a);
  return s && !o && (l.host = s), n && Object.keys(n).sort().forEach((d) => {
    d && l.searchParams.set(d, n[d]);
  }), l.href;
}
const Vn = /^age:\s*[\d.]+\s*$/im;
class Vi {
  constructor(e) {
    this.xhrSetup = void 0, this.requestTimeout = void 0, this.retryTimeout = void 0, this.retryDelay = void 0, this.config = null, this.callbacks = null, this.context = null, this.loader = null, this.stats = void 0, this.xhrSetup = e && e.xhrSetup || null, this.stats = new et(), this.retryDelay = 0;
  }
  destroy() {
    this.callbacks = null, this.abortInternal(), this.loader = null, this.config = null, this.context = null, this.xhrSetup = null;
  }
  abortInternal() {
    const e = this.loader;
    self.clearTimeout(this.requestTimeout), self.clearTimeout(this.retryTimeout), e && (e.onreadystatechange = null, e.onprogress = null, e.readyState !== 4 && (this.stats.aborted = true, e.abort()));
  }
  abort() {
    var e;
    this.abortInternal(), (e = this.callbacks) != null && e.onAbort && this.callbacks.onAbort(this.stats, this.context, this.loader);
  }
  load(e, t, i) {
    if (this.stats.loading.start)
      throw new Error("Loader can only be used once.");
    this.stats.loading.start = self.performance.now(), this.context = e, this.config = t, this.callbacks = i, this.loadInternal();
  }
  loadInternal() {
    const {
      config: e,
      context: t
    } = this;
    if (!e || !t)
      return;
    const i = this.loader = new self.XMLHttpRequest(), s = this.stats;
    s.loading.first = 0, s.loaded = 0, s.aborted = false;
    const n = this.xhrSetup;
    n ? Promise.resolve().then(() => {
      if (!(this.loader !== i || this.stats.aborted))
        return n(i, t.url);
    }).catch((r) => {
      if (!(this.loader !== i || this.stats.aborted))
        return i.open("GET", t.url, true), n(i, t.url);
    }).then(() => {
      this.loader !== i || this.stats.aborted || this.openAndSendXhr(i, t, e);
    }).catch((r) => {
      this.callbacks.onError({
        code: i.status,
        text: r.message
      }, t, i, s);
    }) : this.openAndSendXhr(i, t, e);
  }
  openAndSendXhr(e, t, i) {
    e.readyState || e.open("GET", t.url, true);
    const s = t.headers, {
      maxTimeToFirstByteMs: n,
      maxLoadTimeMs: r
    } = i.loadPolicy;
    if (s)
      for (const o in s)
        e.setRequestHeader(o, s[o]);
    t.rangeEnd && e.setRequestHeader("Range", "bytes=" + t.rangeStart + "-" + (t.rangeEnd - 1)), e.onreadystatechange = this.readystatechange.bind(this), e.onprogress = this.loadprogress.bind(this), e.responseType = t.responseType, self.clearTimeout(this.requestTimeout), i.timeout = n && k(n) ? n : r, this.requestTimeout = self.setTimeout(this.loadtimeout.bind(this), i.timeout), e.send();
  }
  readystatechange() {
    const {
      context: e,
      loader: t,
      stats: i
    } = this;
    if (!e || !t)
      return;
    const s = t.readyState, n = this.config;
    if (!i.aborted && s >= 2 && (i.loading.first === 0 && (i.loading.first = Math.max(self.performance.now(), i.loading.start), n.timeout !== n.loadPolicy.maxLoadTimeMs && (self.clearTimeout(this.requestTimeout), n.timeout = n.loadPolicy.maxLoadTimeMs, this.requestTimeout = self.setTimeout(this.loadtimeout.bind(this), n.loadPolicy.maxLoadTimeMs - (i.loading.first - i.loading.start)))), s === 4)) {
      self.clearTimeout(this.requestTimeout), t.onreadystatechange = null, t.onprogress = null;
      const r = t.status, o = t.responseType === "text" ? t.responseText : null;
      if (r >= 200 && r < 300) {
        const h = o ?? t.response;
        if (h != null) {
          i.loading.end = Math.max(self.performance.now(), i.loading.first);
          const c = t.responseType === "arraybuffer" ? h.byteLength : h.length;
          if (i.loaded = i.total = c, i.bwEstimate = i.total * 8e3 / (i.loading.end - i.loading.first), !this.callbacks)
            return;
          const f = this.callbacks.onProgress;
          if (f && f(i, e, h, t), !this.callbacks)
            return;
          const m = {
            url: t.responseURL,
            data: h,
            code: r
          };
          this.callbacks.onSuccess(m, i, e, t);
          return;
        }
      }
      const l = n.loadPolicy.errorRetry, d = i.retry, u = {
        url: e.url,
        data: void 0,
        code: r
      };
      Qe(l, d, false, u) ? this.retry(l) : (L.error(`${r} while loading ${e.url}`), this.callbacks.onError({
        code: r,
        text: t.statusText
      }, e, t, i));
    }
  }
  loadtimeout() {
    if (!this.config) return;
    const e = this.config.loadPolicy.timeoutRetry, t = this.stats.retry;
    if (Qe(e, t, true))
      this.retry(e);
    else {
      var i;
      L.warn(`timeout while loading ${(i = this.context) == null ? void 0 : i.url}`);
      const s = this.callbacks;
      s && (this.abortInternal(), s.onTimeout(this.stats, this.context, this.loader));
    }
  }
  retry(e) {
    const {
      context: t,
      stats: i
    } = this;
    this.retryDelay = Dt(e, i.retry), i.retry++, L.warn(`${status ? "HTTP Status " + status : "Timeout"} while loading ${t?.url}, retrying ${i.retry}/${e.maxNumRetry} in ${this.retryDelay}ms`), this.abortInternal(), this.loader = null, self.clearTimeout(this.retryTimeout), this.retryTimeout = self.setTimeout(this.loadInternal.bind(this), this.retryDelay);
  }
  loadprogress(e) {
    const t = this.stats;
    t.loaded = e.loaded, e.lengthComputable && (t.total = e.total);
  }
  getCacheAge() {
    let e = null;
    if (this.loader && Vn.test(this.loader.getAllResponseHeaders())) {
      const t = this.loader.getResponseHeader("age");
      e = t ? parseFloat(t) : null;
    }
    return e;
  }
  getResponseHeader(e) {
    return this.loader && new RegExp(`^${e}:\\s*[\\d.]+\\s*$`, "im").test(this.loader.getAllResponseHeaders()) ? this.loader.getResponseHeader(e) : null;
  }
}
class Hn {
  constructor() {
    this.chunks = [], this.dataLength = 0;
  }
  push(e) {
    this.chunks.push(e), this.dataLength += e.length;
  }
  flush() {
    const {
      chunks: e,
      dataLength: t
    } = this;
    let i;
    if (e.length)
      e.length === 1 ? i = e[0] : i = Kn(e, t);
    else return new Uint8Array(0);
    return this.reset(), i;
  }
  reset() {
    this.chunks.length = 0, this.dataLength = 0;
  }
}
function Kn(a, e) {
  const t = new Uint8Array(e);
  let i = 0;
  for (let s = 0; s < a.length; s++) {
    const n = a[s];
    t.set(n, i), i += n.length;
  }
  return t;
}
function Wn() {
  if (
    // @ts-ignore
    self.fetch && self.AbortController && self.ReadableStream && self.Request
  )
    try {
      return new self.ReadableStream({}), !0;
    } catch {
    }
  return false;
}
const Yn = /(\d+)-(\d+)\/(\d+)/;
class oi {
  constructor(e) {
    this.fetchSetup = void 0, this.requestTimeout = void 0, this.request = null, this.response = null, this.controller = void 0, this.context = null, this.config = null, this.callbacks = null, this.stats = void 0, this.loader = null, this.fetchSetup = e.fetchSetup || Xn, this.controller = new self.AbortController(), this.stats = new et();
  }
  destroy() {
    this.loader = this.callbacks = this.context = this.config = this.request = null, this.abortInternal(), this.response = null, this.fetchSetup = this.controller = this.stats = null;
  }
  abortInternal() {
    this.controller && !this.stats.loading.end && (this.stats.aborted = true, this.controller.abort());
  }
  abort() {
    var e;
    this.abortInternal(), (e = this.callbacks) != null && e.onAbort && this.callbacks.onAbort(this.stats, this.context, this.response);
  }
  load(e, t, i) {
    const s = this.stats;
    if (s.loading.start)
      throw new Error("Loader can only be used once.");
    s.loading.start = self.performance.now();
    const n = jn(e, this.controller.signal), r = i.onProgress, o = e.responseType === "arraybuffer", l = o ? "byteLength" : "length", {
      maxTimeToFirstByteMs: d,
      maxLoadTimeMs: u
    } = t.loadPolicy;
    this.context = e, this.config = t, this.callbacks = i, this.request = this.fetchSetup(e, n), self.clearTimeout(this.requestTimeout), t.timeout = d && k(d) ? d : u, this.requestTimeout = self.setTimeout(() => {
      this.abortInternal(), i.onTimeout(s, e, this.response);
    }, t.timeout), self.fetch(this.request).then((h) => {
      this.response = this.loader = h;
      const c = Math.max(self.performance.now(), s.loading.start);
      if (self.clearTimeout(this.requestTimeout), t.timeout = u, this.requestTimeout = self.setTimeout(() => {
        this.abortInternal(), i.onTimeout(s, e, this.response);
      }, u - (c - s.loading.start)), !h.ok) {
        const {
          status: f,
          statusText: m
        } = h;
        throw new Qn(m || "fetch, bad network response", f, h);
      }
      return s.loading.first = c, s.total = zn(h.headers) || s.total, r && k(t.highWaterMark) ? this.loadProgressively(h, s, e, t.highWaterMark, r) : o ? h.arrayBuffer() : e.responseType === "json" ? h.json() : h.text();
    }).then((h) => {
      const c = this.response;
      if (!c)
        throw new Error("loader destroyed");
      self.clearTimeout(this.requestTimeout), s.loading.end = Math.max(self.performance.now(), s.loading.first);
      const f = h[l];
      f && (s.loaded = s.total = f);
      const m = {
        url: c.url,
        data: h,
        code: c.status
      };
      r && !k(t.highWaterMark) && r(s, e, h, c), i.onSuccess(m, s, e, c);
    }).catch((h) => {
      if (self.clearTimeout(this.requestTimeout), s.aborted)
        return;
      const c = h && h.code || 0, f = h ? h.message : null;
      i.onError({
        code: c,
        text: f
      }, e, h ? h.details : null, s);
    });
  }
  getCacheAge() {
    let e = null;
    if (this.response) {
      const t = this.response.headers.get("age");
      e = t ? parseFloat(t) : null;
    }
    return e;
  }
  getResponseHeader(e) {
    return this.response ? this.response.headers.get(e) : null;
  }
  loadProgressively(e, t, i, s = 0, n) {
    const r = new Hn(), o = e.body.getReader(), l = () => o.read().then((d) => {
      if (d.done)
        return r.dataLength && n(t, i, r.flush(), e), Promise.resolve(new ArrayBuffer(0));
      const u = d.value, h = u.length;
      return t.loaded += h, h < s || r.dataLength ? (r.push(u), r.dataLength >= s && n(t, i, r.flush(), e)) : n(t, i, u, e), l();
    }).catch(() => Promise.reject());
    return l();
  }
}
function jn(a, e) {
  const t = {
    method: "GET",
    mode: "cors",
    credentials: "same-origin",
    signal: e,
    headers: new self.Headers(ae({}, a.headers))
  };
  return a.rangeEnd && t.headers.set("Range", "bytes=" + a.rangeStart + "-" + String(a.rangeEnd - 1)), t;
}
function qn(a) {
  const e = Yn.exec(a);
  if (e)
    return parseInt(e[2]) - parseInt(e[1]) + 1;
}
function zn(a) {
  const e = a.get("Content-Range");
  if (e) {
    const i = qn(e);
    if (k(i))
      return i;
  }
  const t = a.get("Content-Length");
  if (t)
    return parseInt(t);
}
function Xn(a, e) {
  return new self.Request(a.url, e);
}
class Qn extends Error {
  constructor(e, t, i) {
    super(e), this.code = void 0, this.details = void 0, this.code = t, this.details = i;
  }
}
const Jn = {
  maxTimeToFirstByteMs: 8e3,
  maxLoadTimeMs: 2e4,
  timeoutRetry: null,
  errorRetry: null
}, Hi = oe(oe({
  autoStartLoad: true,
  // used by stream-controller
  startPosition: -1,
  // used by stream-controller
  defaultAudioCodec: void 0,
  // used by stream-controller
  debug: false,
  // used by logger
  capLevelOnFPSDrop: false,
  // used by fps-controller
  capLevelToPlayerSize: false,
  // used by cap-level-controller
  ignoreDevicePixelRatio: false,
  // used by cap-level-controller
  preferManagedMediaSource: true,
  initialLiveManifestSize: 1,
  // used by stream-controller
  maxBufferLength: 30,
  // used by stream-controller
  backBufferLength: 1 / 0,
  // used by buffer-controller
  frontBufferFlushThreshold: 1 / 0,
  maxBufferSize: 60 * 1e3 * 1e3,
  // used by stream-controller
  maxBufferHole: 0.1,
  // used by stream-controller
  highBufferWatchdogPeriod: 2,
  // used by stream-controller
  nudgeOffset: 0.1,
  // used by stream-controller
  nudgeMaxRetry: 3,
  // used by stream-controller
  maxFragLookUpTolerance: 0.25,
  // used by stream-controller
  liveSyncDurationCount: 3,
  // used by latency-controller
  liveMaxLatencyDurationCount: 1 / 0,
  // used by latency-controller
  liveSyncDuration: void 0,
  // used by latency-controller
  liveMaxLatencyDuration: void 0,
  // used by latency-controller
  maxLiveSyncPlaybackRate: 1,
  // used by latency-controller
  liveDurationInfinity: false,
  // used by buffer-controller
  /**
   * @deprecated use backBufferLength
   */
  liveBackBufferLength: null,
  // used by buffer-controller
  maxMaxBufferLength: 600,
  // used by stream-controller
  enableWorker: true,
  // used by transmuxer
  workerPath: null,
  // used by transmuxer
  enableSoftwareAES: true,
  // used by decrypter
  startLevel: void 0,
  // used by level-controller
  startFragPrefetch: false,
  // used by stream-controller
  fpsDroppedMonitoringPeriod: 5e3,
  // used by fps-controller
  fpsDroppedMonitoringThreshold: 0.2,
  // used by fps-controller
  appendErrorMaxRetry: 3,
  // used by buffer-controller
  loader: Vi,
  // loader: FetchLoader,
  fLoader: void 0,
  // used by fragment-loader
  pLoader: void 0,
  // used by playlist-loader
  xhrSetup: void 0,
  // used by xhr-loader
  licenseXhrSetup: void 0,
  // used by eme-controller
  licenseResponseCallback: void 0,
  // used by eme-controller
  abrController: On,
  bufferController: Nn,
  capLevelController: Ct,
  errorController: bn,
  fpsController: Un,
  stretchShortVideoTrack: false,
  // used by mp4-remuxer
  maxAudioFramesDrift: 1,
  // used by mp4-remuxer
  forceKeyFrameOnDiscontinuity: true,
  // used by ts-demuxer
  abrEwmaFastLive: 3,
  // used by abr-controller
  abrEwmaSlowLive: 9,
  // used by abr-controller
  abrEwmaFastVoD: 3,
  // used by abr-controller
  abrEwmaSlowVoD: 9,
  // used by abr-controller
  abrEwmaDefaultEstimate: 5e5,
  // 500 kbps  // used by abr-controller
  abrEwmaDefaultEstimateMax: 5e6,
  // 5 mbps
  abrBandWidthFactor: 0.95,
  // used by abr-controller
  abrBandWidthUpFactor: 0.7,
  // used by abr-controller
  abrMaxWithRealBitrate: false,
  // used by abr-controller
  maxStarvationDelay: 4,
  // used by abr-controller
  maxLoadingDelay: 4,
  // used by abr-controller
  minAutoBitrate: 0,
  // used by hls
  emeEnabled: false,
  // used by eme-controller
  widevineLicenseUrl: void 0,
  // used by eme-controller
  drmSystems: {},
  // used by eme-controller
  drmSystemOptions: {},
  // used by eme-controller
  requestMediaKeySystemAccessFunc: null,
  // used by eme-controller
  testBandwidth: true,
  progressive: false,
  lowLatencyMode: true,
  cmcd: void 0,
  enableDateRangeMetadataCues: true,
  enableEmsgMetadataCues: true,
  enableID3MetadataCues: true,
  useMediaCapabilities: false,
  certLoadPolicy: {
    default: Jn
  },
  keyLoadPolicy: {
    default: {
      maxTimeToFirstByteMs: 8e3,
      maxLoadTimeMs: 2e4,
      timeoutRetry: {
        maxNumRetry: 1,
        retryDelayMs: 1e3,
        maxRetryDelayMs: 2e4,
        backoff: "linear"
      },
      errorRetry: {
        maxNumRetry: 8,
        retryDelayMs: 1e3,
        maxRetryDelayMs: 2e4,
        backoff: "linear"
      }
    }
  },
  manifestLoadPolicy: {
    default: {
      maxTimeToFirstByteMs: 1 / 0,
      maxLoadTimeMs: 2e4,
      timeoutRetry: {
        maxNumRetry: 2,
        retryDelayMs: 0,
        maxRetryDelayMs: 0
      },
      errorRetry: {
        maxNumRetry: 1,
        retryDelayMs: 1e3,
        maxRetryDelayMs: 8e3
      }
    }
  },
  playlistLoadPolicy: {
    default: {
      maxTimeToFirstByteMs: 1e4,
      maxLoadTimeMs: 2e4,
      timeoutRetry: {
        maxNumRetry: 2,
        retryDelayMs: 0,
        maxRetryDelayMs: 0
      },
      errorRetry: {
        maxNumRetry: 2,
        retryDelayMs: 1e3,
        maxRetryDelayMs: 8e3
      }
    }
  },
  fragLoadPolicy: {
    default: {
      maxTimeToFirstByteMs: 1e4,
      maxLoadTimeMs: 12e4,
      timeoutRetry: {
        maxNumRetry: 4,
        retryDelayMs: 0,
        maxRetryDelayMs: 0
      },
      errorRetry: {
        maxNumRetry: 6,
        retryDelayMs: 1e3,
        maxRetryDelayMs: 8e3
      }
    }
  },
  steeringManifestLoadPolicy: {
    default: {
      maxTimeToFirstByteMs: 1e4,
      maxLoadTimeMs: 2e4,
      timeoutRetry: {
        maxNumRetry: 2,
        retryDelayMs: 0,
        maxRetryDelayMs: 0
      },
      errorRetry: {
        maxNumRetry: 1,
        retryDelayMs: 1e3,
        maxRetryDelayMs: 8e3
      }
    }
  },
  // These default settings are deprecated in favor of the above policies
  // and are maintained for backwards compatibility
  manifestLoadingTimeOut: 1e4,
  manifestLoadingMaxRetry: 1,
  manifestLoadingRetryDelay: 1e3,
  manifestLoadingMaxRetryTimeout: 64e3,
  levelLoadingTimeOut: 1e4,
  levelLoadingMaxRetry: 4,
  levelLoadingRetryDelay: 1e3,
  levelLoadingMaxRetryTimeout: 64e3,
  fragLoadingTimeOut: 2e4,
  fragLoadingMaxRetry: 6,
  fragLoadingRetryDelay: 1e3,
  fragLoadingMaxRetryTimeout: 64e3
}, Zn()), {}, {
  subtitleStreamController: void 0,
  subtitleTrackController: void 0,
  timelineController: void 0,
  audioStreamController: void 0,
  audioTrackController: void 0,
  emeController: void 0,
  cmcdController: void 0,
  contentSteeringController: Gn
});
function Zn() {
  return {
    cueHandler: Ls,
    // used by timeline-controller
    enableWebVTT: false,
    // used by timeline-controller
    enableIMSC1: false,
    // used by timeline-controller
    enableCEA708Captions: false,
    // used by timeline-controller
    captionsTextTrack1Label: "English",
    // used by timeline-controller
    captionsTextTrack1LanguageCode: "en",
    // used by timeline-controller
    captionsTextTrack2Label: "Spanish",
    // used by timeline-controller
    captionsTextTrack2LanguageCode: "es",
    // used by timeline-controller
    captionsTextTrack3Label: "Unknown CC",
    // used by timeline-controller
    captionsTextTrack3LanguageCode: "",
    // used by timeline-controller
    captionsTextTrack4Label: "Unknown CC",
    // used by timeline-controller
    captionsTextTrack4LanguageCode: "",
    // used by timeline-controller
    renderTextTracksNatively: true
  };
}
function er(a, e) {
  if ((e.liveSyncDurationCount || e.liveMaxLatencyDurationCount) && (e.liveSyncDuration || e.liveMaxLatencyDuration))
    throw new Error("Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration");
  if (e.liveMaxLatencyDurationCount !== void 0 && (e.liveSyncDurationCount === void 0 || e.liveMaxLatencyDurationCount <= e.liveSyncDurationCount))
    throw new Error('Illegal hls.js config: "liveMaxLatencyDurationCount" must be greater than "liveSyncDurationCount"');
  if (e.liveMaxLatencyDuration !== void 0 && (e.liveSyncDuration === void 0 || e.liveMaxLatencyDuration <= e.liveSyncDuration))
    throw new Error('Illegal hls.js config: "liveMaxLatencyDuration" must be greater than "liveSyncDuration"');
  const t = vt(a), i = ["manifest", "level", "frag"], s = ["TimeOut", "MaxRetry", "RetryDelay", "MaxRetryTimeout"];
  return i.forEach((n) => {
    const r = `${n === "level" ? "playlist" : n}LoadPolicy`, o = e[r] === void 0, l = [];
    s.forEach((d) => {
      const u = `${n}Loading${d}`, h = e[u];
      if (h !== void 0 && o) {
        l.push(u);
        const c = t[r].default;
        switch (e[r] = {
          default: c
        }, d) {
          case "TimeOut":
            c.maxLoadTimeMs = h, c.maxTimeToFirstByteMs = h;
            break;
          case "MaxRetry":
            c.errorRetry.maxNumRetry = h, c.timeoutRetry.maxNumRetry = h;
            break;
          case "RetryDelay":
            c.errorRetry.retryDelayMs = h, c.timeoutRetry.retryDelayMs = h;
            break;
          case "MaxRetryTimeout":
            c.errorRetry.maxRetryDelayMs = h, c.timeoutRetry.maxRetryDelayMs = h;
            break;
        }
      }
    }), l.length && L.warn(`hls.js config: "${l.join('", "')}" setting(s) are deprecated, use "${r}": ${JSON.stringify(e[r])}`);
  }), oe(oe({}, t), e);
}
function vt(a) {
  return a && typeof a == "object" ? Array.isArray(a) ? a.map(vt) : Object.keys(a).reduce((e, t) => (e[t] = vt(a[t]), e), {}) : a;
}
function tr(a) {
  const e = a.loader;
  e !== oi && e !== Vi ? (L.log("[config]: Custom loader detected, cannot enable progressive streaming"), a.progressive = false) : Wn() && (a.loader = oi, a.progressive = true, a.enableSoftwareAES = true, L.log("[config]: Progressive streaming enabled, using FetchLoader"));
}
let ct;
class ir extends In {
  constructor(e, t) {
    super(e, "[level-controller]"), this._levels = [], this._firstLevel = -1, this._maxAutoLevel = -1, this._startLevel = void 0, this.currentLevel = null, this.currentLevelIndex = -1, this.manualLevelIndex = -1, this.steering = void 0, this.onParsedComplete = void 0, this.steering = t, this._registerListeners();
  }
  _registerListeners() {
    const {
      hls: e
    } = this;
    e.on(x.MANIFEST_LOADING, this.onManifestLoading, this), e.on(x.MANIFEST_LOADED, this.onManifestLoaded, this), e.on(x.LEVEL_LOADED, this.onLevelLoaded, this), e.on(x.LEVELS_UPDATED, this.onLevelsUpdated, this), e.on(x.FRAG_BUFFERED, this.onFragBuffered, this), e.on(x.ERROR, this.onError, this);
  }
  _unregisterListeners() {
    const {
      hls: e
    } = this;
    e.off(x.MANIFEST_LOADING, this.onManifestLoading, this), e.off(x.MANIFEST_LOADED, this.onManifestLoaded, this), e.off(x.LEVEL_LOADED, this.onLevelLoaded, this), e.off(x.LEVELS_UPDATED, this.onLevelsUpdated, this), e.off(x.FRAG_BUFFERED, this.onFragBuffered, this), e.off(x.ERROR, this.onError, this);
  }
  destroy() {
    this._unregisterListeners(), this.steering = null, this.resetLevels(), super.destroy();
  }
  stopLoad() {
    this._levels.forEach((t) => {
      t.loadError = 0, t.fragmentError = 0;
    }), super.stopLoad();
  }
  resetLevels() {
    this._startLevel = void 0, this.manualLevelIndex = -1, this.currentLevelIndex = -1, this.currentLevel = null, this._levels = [], this._maxAutoLevel = -1;
  }
  onManifestLoading(e, t) {
    this.resetLevels();
  }
  onManifestLoaded(e, t) {
    const i = this.hls.config.preferManagedMediaSource, s = [], n = {}, r = {};
    let o = false, l = false, d = false;
    t.levels.forEach((u) => {
      var h, c;
      const f = u.attrs;
      let {
        audioCodec: m,
        videoCodec: g
      } = u;
      ((h = m) == null ? void 0 : h.indexOf("mp4a.40.34")) !== -1 && (ct || (ct = /chrome|firefox/i.test(navigator.userAgent)), ct && (u.audioCodec = m = void 0)), m && (u.audioCodec = m = qe(m, i)), ((c = g) == null ? void 0 : c.indexOf("avc1")) === 0 && (g = u.videoCodec = Xs(g));
      const {
        width: p,
        height: y,
        unknownCodecs: v
      } = u;
      if (o || (o = !!(p && y)), l || (l = !!g), d || (d = !!m), v != null && v.length || m && !ot(m, "audio", i) || g && !ot(g, "video", i))
        return;
      const {
        CODECS: E,
        "FRAME-RATE": b,
        "HDCP-LEVEL": S,
        "PATHWAY-ID": I,
        RESOLUTION: A,
        "VIDEO-RANGE": D
      } = f, _ = `${`${I || "."}-`}${u.bitrate}-${A}-${b}-${E}-${D}-${S}`;
      if (n[_])
        if (n[_].uri !== u.url && !u.attrs["PATHWAY-ID"]) {
          const C = r[_] += 1;
          u.attrs["PATHWAY-ID"] = new Array(C + 1).join(".");
          const $ = new Lt(u);
          n[_] = $, s.push($);
        } else
          n[_].addGroupId("audio", f.AUDIO), n[_].addGroupId("text", f.SUBTITLES);
      else {
        const C = new Lt(u);
        n[_] = C, r[_] = 1, s.push(C);
      }
    }), this.filterAndSortMediaOptions(s, t, o, l, d);
  }
  filterAndSortMediaOptions(e, t, i, s, n) {
    let r = [], o = [], l = e;
    if ((i || s) && n && (l = l.filter(({
      videoCodec: m,
      videoRange: g,
      width: p,
      height: y
    }) => (!!m || !!(p && y)) && fn(g))), l.length === 0) {
      Promise.resolve().then(() => {
        if (this.hls) {
          t.levels.length && this.warn(`One or more CODECS in variant not supported: ${JSON.stringify(t.levels[0].attrs)}`);
          const m = new Error("no level with compatible codecs found in manifest");
          this.hls.trigger(x.ERROR, {
            type: K.MEDIA_ERROR,
            details: R.MANIFEST_INCOMPATIBLE_CODECS_ERROR,
            fatal: true,
            url: t.url,
            error: m,
            reason: m.message
          });
        }
      });
      return;
    }
    if (t.audioTracks) {
      const {
        preferManagedMediaSource: m
      } = this.hls.config;
      r = t.audioTracks.filter((g) => !g.audioCodec || ot(g.audioCodec, "audio", m)), li(r);
    }
    t.subtitles && (o = t.subtitles, li(o));
    const d = l.slice(0);
    l.sort((m, g) => {
      if (m.attrs["HDCP-LEVEL"] !== g.attrs["HDCP-LEVEL"])
        return (m.attrs["HDCP-LEVEL"] || "") > (g.attrs["HDCP-LEVEL"] || "") ? 1 : -1;
      if (i && m.height !== g.height)
        return m.height - g.height;
      if (m.frameRate !== g.frameRate)
        return m.frameRate - g.frameRate;
      if (m.videoRange !== g.videoRange)
        return ze.indexOf(m.videoRange) - ze.indexOf(g.videoRange);
      if (m.videoCodec !== g.videoCodec) {
        const p = Bt(m.videoCodec), y = Bt(g.videoCodec);
        if (p !== y)
          return y - p;
      }
      if (m.uri === g.uri && m.codecSet !== g.codecSet) {
        const p = je(m.codecSet), y = je(g.codecSet);
        if (p !== y)
          return y - p;
      }
      return m.averageBitrate !== g.averageBitrate ? m.averageBitrate - g.averageBitrate : 0;
    });
    let u = d[0];
    if (this.steering && (l = this.steering.filterParsedLevels(l), l.length !== d.length)) {
      for (let m = 0; m < d.length; m++)
        if (d[m].pathwayId === l[0].pathwayId) {
          u = d[m];
          break;
        }
    }
    this._levels = l;
    for (let m = 0; m < l.length; m++)
      if (l[m] === u) {
        var h;
        this._firstLevel = m;
        const g = u.bitrate, p = this.hls.bandwidthEstimate;
        if (this.log(`manifest loaded, ${l.length} level(s) found, first bitrate: ${g}`), ((h = this.hls.userConfig) == null ? void 0 : h.abrEwmaDefaultEstimate) === void 0) {
          const y = Math.min(g, this.hls.config.abrEwmaDefaultEstimateMax);
          y > p && p === Hi.abrEwmaDefaultEstimate && (this.hls.bandwidthEstimate = y);
        }
        break;
      }
    const c = n && !s, f = {
      levels: l,
      audioTracks: r,
      subtitleTracks: o,
      sessionData: t.sessionData,
      sessionKeys: t.sessionKeys,
      firstLevel: this._firstLevel,
      stats: t.stats,
      audio: n,
      video: s,
      altAudio: !c && r.some((m) => !!m.url)
    };
    this.hls.trigger(x.MANIFEST_PARSED, f), (this.hls.config.autoStartLoad || this.hls.forceStartLoad) && this.hls.startLoad(this.hls.config.startPosition);
  }
  get levels() {
    return this._levels.length === 0 ? null : this._levels;
  }
  get level() {
    return this.currentLevelIndex;
  }
  set level(e) {
    const t = this._levels;
    if (t.length === 0)
      return;
    if (e < 0 || e >= t.length) {
      const u = new Error("invalid level idx"), h = e < 0;
      if (this.hls.trigger(x.ERROR, {
        type: K.OTHER_ERROR,
        details: R.LEVEL_SWITCH_ERROR,
        level: e,
        fatal: h,
        error: u,
        reason: u.message
      }), h)
        return;
      e = Math.min(e, t.length - 1);
    }
    const i = this.currentLevelIndex, s = this.currentLevel, n = s ? s.attrs["PATHWAY-ID"] : void 0, r = t[e], o = r.attrs["PATHWAY-ID"];
    if (this.currentLevelIndex = e, this.currentLevel = r, i === e && r.details && s && n === o)
      return;
    this.log(`Switching to level ${e} (${r.height ? r.height + "p " : ""}${r.videoRange ? r.videoRange + " " : ""}${r.codecSet ? r.codecSet + " " : ""}@${r.bitrate})${o ? " with Pathway " + o : ""} from level ${i}${n ? " with Pathway " + n : ""}`);
    const l = {
      level: e,
      attrs: r.attrs,
      details: r.details,
      bitrate: r.bitrate,
      averageBitrate: r.averageBitrate,
      maxBitrate: r.maxBitrate,
      realBitrate: r.realBitrate,
      width: r.width,
      height: r.height,
      codecSet: r.codecSet,
      audioCodec: r.audioCodec,
      videoCodec: r.videoCodec,
      audioGroups: r.audioGroups,
      subtitleGroups: r.subtitleGroups,
      loaded: r.loaded,
      loadError: r.loadError,
      fragmentError: r.fragmentError,
      name: r.name,
      id: r.id,
      uri: r.uri,
      url: r.url,
      urlId: 0,
      audioGroupIds: r.audioGroupIds,
      textGroupIds: r.textGroupIds
    };
    this.hls.trigger(x.LEVEL_SWITCHING, l);
    const d = r.details;
    if (!d || d.live) {
      const u = this.switchParams(r.uri, s?.details, d);
      this.loadPlaylist(u);
    }
  }
  get manualLevel() {
    return this.manualLevelIndex;
  }
  set manualLevel(e) {
    this.manualLevelIndex = e, this._startLevel === void 0 && (this._startLevel = e), e !== -1 && (this.level = e);
  }
  get firstLevel() {
    return this._firstLevel;
  }
  set firstLevel(e) {
    this._firstLevel = e;
  }
  get startLevel() {
    if (this._startLevel === void 0) {
      const e = this.hls.config.startLevel;
      return e !== void 0 ? e : this.hls.firstAutoLevel;
    }
    return this._startLevel;
  }
  set startLevel(e) {
    this._startLevel = e;
  }
  onError(e, t) {
    t.fatal || !t.context || t.context.type === j.LEVEL && t.context.level === this.level && this.checkRetry(t);
  }
  // reset errors on the successful load of a fragment
  onFragBuffered(e, {
    frag: t
  }) {
    if (t !== void 0 && t.type === q.MAIN) {
      const i = t.elementaryStreams;
      if (!Object.keys(i).some((n) => !!i[n]))
        return;
      const s = this._levels[t.level];
      s != null && s.loadError && (this.log(`Resetting level error count of ${s.loadError} on frag buffered`), s.loadError = 0);
    }
  }
  onLevelLoaded(e, t) {
    var i;
    const {
      level: s,
      details: n
    } = t, r = this._levels[s];
    if (!r) {
      var o;
      this.warn(`Invalid level index ${s}`), (o = t.deliveryDirectives) != null && o.skip && (n.deltaUpdateFailed = true);
      return;
    }
    s === this.currentLevelIndex ? (r.fragmentError === 0 && (r.loadError = 0), this.playlistLoaded(s, t, r.details)) : (i = t.deliveryDirectives) != null && i.skip && (n.deltaUpdateFailed = true);
  }
  loadPlaylist(e) {
    super.loadPlaylist();
    const t = this.currentLevelIndex, i = this.currentLevel;
    if (i && this.shouldLoadPlaylist(i)) {
      let s = i.uri;
      if (e)
        try {
          s = e.addDirectives(s);
        } catch (r) {
          this.warn(`Could not construct new URL with HLS Delivery Directives: ${r}`);
        }
      const n = i.attrs["PATHWAY-ID"];
      this.log(`Loading level index ${t}${e?.msn !== void 0 ? " at sn " + e.msn + " part " + e.part : ""} with${n ? " Pathway " + n : ""} ${s}`), this.clearTimer(), this.hls.trigger(x.LEVEL_LOADING, {
        url: s,
        level: t,
        pathwayId: i.attrs["PATHWAY-ID"],
        id: 0,
        // Deprecated Level urlId
        deliveryDirectives: e || null
      });
    }
  }
  get nextLoadLevel() {
    return this.manualLevelIndex !== -1 ? this.manualLevelIndex : this.hls.nextAutoLevel;
  }
  set nextLoadLevel(e) {
    this.level = e, this.manualLevelIndex === -1 && (this.hls.nextAutoLevel = e);
  }
  removeLevel(e) {
    var t;
    const i = this._levels.filter((s, n) => n !== e ? true : (this.steering && this.steering.removeLevel(s), s === this.currentLevel && (this.currentLevel = null, this.currentLevelIndex = -1, s.details && s.details.fragments.forEach((r) => r.level = -1)), false));
    Bi(i), this._levels = i, this.currentLevelIndex > -1 && (t = this.currentLevel) != null && t.details && (this.currentLevelIndex = this.currentLevel.details.fragments[0].level), this.hls.trigger(x.LEVELS_UPDATED, {
      levels: i
    });
  }
  onLevelsUpdated(e, {
    levels: t
  }) {
    this._levels = t;
  }
  checkMaxAutoUpdated() {
    const {
      autoLevelCapping: e,
      maxAutoLevel: t,
      maxHdcpLevel: i
    } = this.hls;
    this._maxAutoLevel !== t && (this._maxAutoLevel = t, this.hls.trigger(x.MAX_AUTO_LEVEL_UPDATED, {
      autoLevelCapping: e,
      levels: this.levels,
      maxAutoLevel: t,
      minAutoLevel: this.hls.minAutoLevel,
      maxHdcpLevel: i
    }));
  }
}
function li(a) {
  const e = {};
  a.forEach((t) => {
    const i = t.groupId || "";
    t.id = e[i] = e[i] || 0, e[i]++;
  });
}
var re = {
  NOT_LOADED: "NOT_LOADED",
  APPENDING: "APPENDING",
  PARTIAL: "PARTIAL",
  OK: "OK"
};
class sr {
  constructor(e) {
    this.activePartLists = /* @__PURE__ */ Object.create(null), this.endListFragments = /* @__PURE__ */ Object.create(null), this.fragments = /* @__PURE__ */ Object.create(null), this.timeRanges = /* @__PURE__ */ Object.create(null), this.bufferPadding = 0.2, this.hls = void 0, this.hasGaps = false, this.hls = e, this._registerListeners();
  }
  _registerListeners() {
    const {
      hls: e
    } = this;
    e.on(x.BUFFER_APPENDED, this.onBufferAppended, this), e.on(x.FRAG_BUFFERED, this.onFragBuffered, this), e.on(x.FRAG_LOADED, this.onFragLoaded, this);
  }
  _unregisterListeners() {
    const {
      hls: e
    } = this;
    e.off(x.BUFFER_APPENDED, this.onBufferAppended, this), e.off(x.FRAG_BUFFERED, this.onFragBuffered, this), e.off(x.FRAG_LOADED, this.onFragLoaded, this);
  }
  destroy() {
    this._unregisterListeners(), this.fragments = // @ts-ignore
    this.activePartLists = // @ts-ignore
    this.endListFragments = this.timeRanges = null;
  }
  /**
   * Return a Fragment or Part with an appended range that matches the position and levelType
   * Otherwise, return null
   */
  getAppendedFrag(e, t) {
    const i = this.activePartLists[t];
    if (i)
      for (let s = i.length; s--; ) {
        const n = i[s];
        if (!n)
          break;
        const r = n.end;
        if (n.start <= e && r !== null && e <= r)
          return n;
      }
    return this.getBufferedFrag(e, t);
  }
  /**
   * Return a buffered Fragment that matches the position and levelType.
   * A buffered Fragment is one whose loading, parsing and appending is done (completed or "partial" meaning aborted).
   * If not found any Fragment, return null
   */
  getBufferedFrag(e, t) {
    const {
      fragments: i
    } = this, s = Object.keys(i);
    for (let n = s.length; n--; ) {
      const r = i[s[n]];
      if (r?.body.type === t && r.buffered) {
        const o = r.body;
        if (o.start <= e && e <= o.end)
          return o;
      }
    }
    return null;
  }
  /**
   * Partial fragments effected by coded frame eviction will be removed
   * The browser will unload parts of the buffer to free up memory for new buffer data
   * Fragments will need to be reloaded when the buffer is freed up, removing partial fragments will allow them to reload(since there might be parts that are still playable)
   */
  detectEvictedFragments(e, t, i, s) {
    this.timeRanges && (this.timeRanges[e] = t);
    const n = s?.fragment.sn || -1;
    Object.keys(this.fragments).forEach((r) => {
      const o = this.fragments[r];
      if (!o || n >= o.body.sn)
        return;
      if (!o.buffered && !o.loaded) {
        o.body.type === i && this.removeFragment(o.body);
        return;
      }
      const l = o.range[e];
      l && l.time.some((d) => {
        const u = !this.isTimeBuffered(d.startPTS, d.endPTS, t);
        return u && this.removeFragment(o.body), u;
      });
    });
  }
  /**
   * Checks if the fragment passed in is loaded in the buffer properly
   * Partially loaded fragments will be registered as a partial fragment
   */
  detectPartialFragments(e) {
    const t = this.timeRanges, {
      frag: i,
      part: s
    } = e;
    if (!t || i.sn === "initSegment")
      return;
    const n = Ie(i), r = this.fragments[n];
    if (!r || r.buffered && i.gap)
      return;
    const o = !i.relurl;
    Object.keys(t).forEach((l) => {
      const d = i.elementaryStreams[l];
      if (!d)
        return;
      const u = t[l], h = o || d.partial === true;
      r.range[l] = this.getBufferedTimes(i, s, h, u);
    }), r.loaded = null, Object.keys(r.range).length ? (r.buffered = true, (r.body.endList = i.endList || r.body.endList) && (this.endListFragments[r.body.type] = r), Ne(r) || this.removeParts(i.sn - 1, i.type)) : this.removeFragment(r.body);
  }
  removeParts(e, t) {
    const i = this.activePartLists[t];
    i && (this.activePartLists[t] = i.filter((s) => s.fragment.sn >= e));
  }
  fragBuffered(e, t) {
    const i = Ie(e);
    let s = this.fragments[i];
    !s && t && (s = this.fragments[i] = {
      body: e,
      appendedPTS: null,
      loaded: null,
      buffered: false,
      range: /* @__PURE__ */ Object.create(null)
    }, e.gap && (this.hasGaps = true)), s && (s.loaded = null, s.buffered = true);
  }
  getBufferedTimes(e, t, i, s) {
    const n = {
      time: [],
      partial: i
    }, r = e.start, o = e.end, l = e.minEndPTS || o, d = e.maxStartPTS || r;
    for (let u = 0; u < s.length; u++) {
      const h = s.start(u) - this.bufferPadding, c = s.end(u) + this.bufferPadding;
      if (d >= h && l <= c) {
        n.time.push({
          startPTS: Math.max(r, s.start(u)),
          endPTS: Math.min(o, s.end(u))
        });
        break;
      } else if (r < c && o > h) {
        const f = Math.max(r, s.start(u)), m = Math.min(o, s.end(u));
        m > f && (n.partial = true, n.time.push({
          startPTS: f,
          endPTS: m
        }));
      } else if (o <= h)
        break;
    }
    return n;
  }
  /**
   * Gets the partial fragment for a certain time
   */
  getPartialFragment(e) {
    let t = null, i, s, n, r = 0;
    const {
      bufferPadding: o,
      fragments: l
    } = this;
    return Object.keys(l).forEach((d) => {
      const u = l[d];
      u && Ne(u) && (s = u.body.start - o, n = u.body.end + o, e >= s && e <= n && (i = Math.min(e - s, n - e), r <= i && (t = u.body, r = i)));
    }), t;
  }
  isEndListAppended(e) {
    const t = this.endListFragments[e];
    return t !== void 0 && (t.buffered || Ne(t));
  }
  getState(e) {
    const t = Ie(e), i = this.fragments[t];
    return i ? i.buffered ? Ne(i) ? re.PARTIAL : re.OK : re.APPENDING : re.NOT_LOADED;
  }
  isTimeBuffered(e, t, i) {
    let s, n;
    for (let r = 0; r < i.length; r++) {
      if (s = i.start(r) - this.bufferPadding, n = i.end(r) + this.bufferPadding, e >= s && t <= n)
        return true;
      if (t <= s)
        return false;
    }
    return false;
  }
  onFragLoaded(e, t) {
    const {
      frag: i,
      part: s
    } = t;
    if (i.sn === "initSegment" || i.bitrateTest)
      return;
    const n = s ? null : t, r = Ie(i);
    this.fragments[r] = {
      body: i,
      appendedPTS: null,
      loaded: n,
      buffered: false,
      range: /* @__PURE__ */ Object.create(null)
    };
  }
  onBufferAppended(e, t) {
    const {
      frag: i,
      part: s,
      timeRanges: n
    } = t;
    if (i.sn === "initSegment")
      return;
    const r = i.type;
    if (s) {
      let o = this.activePartLists[r];
      o || (this.activePartLists[r] = o = []), o.push(s);
    }
    this.timeRanges = n, Object.keys(n).forEach((o) => {
      const l = n[o];
      this.detectEvictedFragments(o, l, r, s);
    });
  }
  onFragBuffered(e, t) {
    this.detectPartialFragments(t);
  }
  hasFragment(e) {
    const t = Ie(e);
    return !!this.fragments[t];
  }
  hasParts(e) {
    var t;
    return !!((t = this.activePartLists[e]) != null && t.length);
  }
  removeFragmentsInRange(e, t, i, s, n) {
    s && !this.hasGaps || Object.keys(this.fragments).forEach((r) => {
      const o = this.fragments[r];
      if (!o)
        return;
      const l = o.body;
      l.type !== i || s && !l.gap || l.start < t && l.end > e && (o.buffered || n) && this.removeFragment(l);
    });
  }
  removeFragment(e) {
    const t = Ie(e);
    e.stats.loaded = 0, e.clearElementaryStreamInfo();
    const i = this.activePartLists[e.type];
    if (i) {
      const s = e.sn;
      this.activePartLists[e.type] = i.filter((n) => n.fragment.sn !== s);
    }
    delete this.fragments[t], e.endList && delete this.endListFragments[e.type];
  }
  removeAllFragments() {
    this.fragments = /* @__PURE__ */ Object.create(null), this.endListFragments = /* @__PURE__ */ Object.create(null), this.activePartLists = /* @__PURE__ */ Object.create(null), this.hasGaps = false;
  }
}
function Ne(a) {
  var e, t, i;
  return a.buffered && (a.body.gap || ((e = a.range.video) == null ? void 0 : e.partial) || ((t = a.range.audio) == null ? void 0 : t.partial) || ((i = a.range.audiovideo) == null ? void 0 : i.partial));
}
function Ie(a) {
  return `${a.type}_${a.level}_${a.sn}`;
}
const di = Math.pow(2, 17);
class nr {
  constructor(e) {
    this.config = void 0, this.loader = null, this.partLoadTimeout = -1, this.config = e;
  }
  destroy() {
    this.loader && (this.loader.destroy(), this.loader = null);
  }
  abort() {
    this.loader && this.loader.abort();
  }
  load(e, t) {
    const i = e.url;
    if (!i)
      return Promise.reject(new xe({
        type: K.NETWORK_ERROR,
        details: R.FRAG_LOAD_ERROR,
        fatal: false,
        frag: e,
        error: new Error(`Fragment does not have a ${i ? "part list" : "url"}`),
        networkDetails: null
      }));
    this.abort();
    const s = this.config, n = s.fLoader, r = s.loader;
    return new Promise((o, l) => {
      if (this.loader && this.loader.destroy(), e.gap)
        if (e.tagList.some((f) => f[0] === "GAP")) {
          l(hi(e));
          return;
        } else
          e.gap = false;
      const d = this.loader = e.loader = n ? new n(s) : new r(s), u = ui(e), h = ii(s.fragLoadPolicy.default), c = {
        loadPolicy: h,
        timeout: h.maxLoadTimeMs,
        maxRetry: 0,
        retryDelay: 0,
        maxRetryDelay: 0,
        highWaterMark: e.sn === "initSegment" ? 1 / 0 : di
      };
      e.stats = d.stats, d.load(u, c, {
        onSuccess: (f, m, g, p) => {
          this.resetLoader(e, d);
          let y = f.data;
          g.resetIV && e.decryptdata && (e.decryptdata.iv = new Uint8Array(y.slice(0, 16)), y = y.slice(16)), o({
            frag: e,
            part: null,
            payload: y,
            networkDetails: p
          });
        },
        onError: (f, m, g, p) => {
          this.resetLoader(e, d), l(new xe({
            type: K.NETWORK_ERROR,
            details: R.FRAG_LOAD_ERROR,
            fatal: false,
            frag: e,
            response: oe({
              url: i,
              data: void 0
            }, f),
            error: new Error(`HTTP Error ${f.code} ${f.text}`),
            networkDetails: g,
            stats: p
          }));
        },
        onAbort: (f, m, g) => {
          this.resetLoader(e, d), l(new xe({
            type: K.NETWORK_ERROR,
            details: R.INTERNAL_ABORTED,
            fatal: false,
            frag: e,
            error: new Error("Aborted"),
            networkDetails: g,
            stats: f
          }));
        },
        onTimeout: (f, m, g) => {
          this.resetLoader(e, d), l(new xe({
            type: K.NETWORK_ERROR,
            details: R.FRAG_LOAD_TIMEOUT,
            fatal: false,
            frag: e,
            error: new Error(`Timeout after ${c.timeout}ms`),
            networkDetails: g,
            stats: f
          }));
        },
        onProgress: (f, m, g, p) => {
          t && t({
            frag: e,
            part: null,
            payload: g,
            networkDetails: p
          });
        }
      });
    });
  }
  loadPart(e, t, i) {
    this.abort();
    const s = this.config, n = s.fLoader, r = s.loader;
    return new Promise((o, l) => {
      if (this.loader && this.loader.destroy(), e.gap || t.gap) {
        l(hi(e, t));
        return;
      }
      const d = this.loader = e.loader = n ? new n(s) : new r(s), u = ui(e, t), h = ii(s.fragLoadPolicy.default), c = {
        loadPolicy: h,
        timeout: h.maxLoadTimeMs,
        maxRetry: 0,
        retryDelay: 0,
        maxRetryDelay: 0,
        highWaterMark: di
      };
      t.stats = d.stats, d.load(u, c, {
        onSuccess: (f, m, g, p) => {
          this.resetLoader(e, d), this.updateStatsFromPart(e, t);
          const y = {
            frag: e,
            part: t,
            payload: f.data,
            networkDetails: p
          };
          i(y), o(y);
        },
        onError: (f, m, g, p) => {
          this.resetLoader(e, d), l(new xe({
            type: K.NETWORK_ERROR,
            details: R.FRAG_LOAD_ERROR,
            fatal: false,
            frag: e,
            part: t,
            response: oe({
              url: u.url,
              data: void 0
            }, f),
            error: new Error(`HTTP Error ${f.code} ${f.text}`),
            networkDetails: g,
            stats: p
          }));
        },
        onAbort: (f, m, g) => {
          e.stats.aborted = t.stats.aborted, this.resetLoader(e, d), l(new xe({
            type: K.NETWORK_ERROR,
            details: R.INTERNAL_ABORTED,
            fatal: false,
            frag: e,
            part: t,
            error: new Error("Aborted"),
            networkDetails: g,
            stats: f
          }));
        },
        onTimeout: (f, m, g) => {
          this.resetLoader(e, d), l(new xe({
            type: K.NETWORK_ERROR,
            details: R.FRAG_LOAD_TIMEOUT,
            fatal: false,
            frag: e,
            part: t,
            error: new Error(`Timeout after ${c.timeout}ms`),
            networkDetails: g,
            stats: f
          }));
        }
      });
    });
  }
  updateStatsFromPart(e, t) {
    const i = e.stats, s = t.stats, n = s.total;
    if (i.loaded += s.loaded, n) {
      const l = Math.round(e.duration / t.duration), d = Math.min(Math.round(i.loaded / n), l), h = (l - d) * Math.round(i.loaded / d);
      i.total = i.loaded + h;
    } else
      i.total = Math.max(i.loaded, i.total);
    const r = i.loading, o = s.loading;
    r.start ? r.first += o.first - o.start : (r.start = o.start, r.first = o.first), r.end = o.end;
  }
  resetLoader(e, t) {
    e.loader = null, this.loader === t && (self.clearTimeout(this.partLoadTimeout), this.loader = null), t.destroy();
  }
}
function ui(a, e = null) {
  const t = e || a, i = {
    frag: a,
    part: e,
    responseType: "arraybuffer",
    url: t.url,
    headers: {},
    rangeStart: 0,
    rangeEnd: 0
  }, s = t.byteRangeStartOffset, n = t.byteRangeEndOffset;
  if (k(s) && k(n)) {
    var r;
    let o = s, l = n;
    if (a.sn === "initSegment" && ((r = a.decryptdata) == null ? void 0 : r.method) === "AES-128") {
      const d = n - s;
      d % 16 && (l = n + (16 - d % 16)), s !== 0 && (i.resetIV = true, o = s - 16);
    }
    i.rangeStart = o, i.rangeEnd = l;
  }
  return i;
}
function hi(a, e) {
  const t = new Error(`GAP ${a.gap ? "tag" : "attribute"} found`), i = {
    type: K.MEDIA_ERROR,
    details: R.FRAG_GAP,
    fatal: false,
    frag: a,
    error: t,
    networkDetails: null
  };
  return e && (i.part = e), (e || a).stats.aborted = true, new xe(i);
}
class xe extends Error {
  constructor(e) {
    super(e.error.message), this.data = void 0, this.data = e;
  }
}
class rr {
  constructor(e) {
    this.config = void 0, this.keyUriToKeyInfo = {}, this.emeController = null, this.config = e;
  }
  abort(e) {
    for (const i in this.keyUriToKeyInfo) {
      const s = this.keyUriToKeyInfo[i].loader;
      if (s) {
        var t;
        if (e && e !== ((t = s.context) == null ? void 0 : t.frag.type))
          return;
        s.abort();
      }
    }
  }
  detach() {
    for (const e in this.keyUriToKeyInfo) {
      const t = this.keyUriToKeyInfo[e];
      (t.mediaKeySessionContext || t.decryptdata.isCommonEncryption) && delete this.keyUriToKeyInfo[e];
    }
  }
  destroy() {
    this.detach();
    for (const e in this.keyUriToKeyInfo) {
      const t = this.keyUriToKeyInfo[e].loader;
      t && t.destroy();
    }
    this.keyUriToKeyInfo = {};
  }
  createKeyLoadError(e, t = R.KEY_LOAD_ERROR, i, s, n) {
    return new xe({
      type: K.NETWORK_ERROR,
      details: t,
      fatal: false,
      frag: e,
      response: n,
      error: i,
      networkDetails: s
    });
  }
  loadClear(e, t) {
    if (this.emeController && this.config.emeEnabled) {
      const {
        sn: i,
        cc: s
      } = e;
      for (let n = 0; n < t.length; n++) {
        const r = t[n];
        if (s <= r.cc && (i === "initSegment" || r.sn === "initSegment" || i < r.sn)) {
          this.emeController.selectKeySystemFormat(r).then((o) => {
            r.setKeyFormat(o);
          });
          break;
        }
      }
    }
  }
  load(e) {
    return !e.decryptdata && e.encrypted && this.emeController ? this.emeController.selectKeySystemFormat(e).then((t) => this.loadInternal(e, t)) : this.loadInternal(e);
  }
  loadInternal(e, t) {
    var i, s;
    t && e.setKeyFormat(t);
    const n = e.decryptdata;
    if (!n) {
      const d = new Error(t ? `Expected frag.decryptdata to be defined after setting format ${t}` : "Missing decryption data on fragment in onKeyLoading");
      return Promise.reject(this.createKeyLoadError(e, R.KEY_LOAD_ERROR, d));
    }
    const r = n.uri;
    if (!r)
      return Promise.reject(this.createKeyLoadError(e, R.KEY_LOAD_ERROR, new Error(`Invalid key URI: "${r}"`)));
    let o = this.keyUriToKeyInfo[r];
    if ((i = o) != null && i.decryptdata.key)
      return n.key = o.decryptdata.key, Promise.resolve({
        frag: e,
        keyInfo: o
      });
    if ((s = o) != null && s.keyLoadPromise) {
      var l;
      switch ((l = o.mediaKeySessionContext) == null ? void 0 : l.keyStatus) {
        case void 0:
        case "status-pending":
        case "usable":
        case "usable-in-future":
          return o.keyLoadPromise.then((d) => (n.key = d.keyInfo.decryptdata.key, {
            frag: e,
            keyInfo: o
          }));
      }
    }
    switch (o = this.keyUriToKeyInfo[r] = {
      decryptdata: n,
      keyLoadPromise: null,
      loader: null,
      mediaKeySessionContext: null
    }, n.method) {
      case "ISO-23001-7":
      case "SAMPLE-AES":
      case "SAMPLE-AES-CENC":
      case "SAMPLE-AES-CTR":
        return n.keyFormat === "identity" ? this.loadKeyHTTP(o, e) : this.loadKeyEME(o, e);
      case "AES-128":
        return this.loadKeyHTTP(o, e);
      default:
        return Promise.reject(this.createKeyLoadError(e, R.KEY_LOAD_ERROR, new Error(`Key supplied with unsupported METHOD: "${n.method}"`)));
    }
  }
  loadKeyEME(e, t) {
    const i = {
      frag: t,
      keyInfo: e
    };
    if (this.emeController && this.config.emeEnabled) {
      const s = this.emeController.loadKey(i);
      if (s)
        return (e.keyLoadPromise = s.then((n) => (e.mediaKeySessionContext = n, i))).catch((n) => {
          throw e.keyLoadPromise = null, n;
        });
    }
    return Promise.resolve(i);
  }
  loadKeyHTTP(e, t) {
    const i = this.config, s = i.loader, n = new s(i);
    return t.keyLoader = e.loader = n, e.keyLoadPromise = new Promise((r, o) => {
      const l = {
        keyInfo: e,
        frag: t,
        responseType: "arraybuffer",
        url: e.decryptdata.uri
      }, d = i.keyLoadPolicy.default, u = {
        loadPolicy: d,
        timeout: d.maxLoadTimeMs,
        maxRetry: 0,
        retryDelay: 0,
        maxRetryDelay: 0
      }, h = {
        onSuccess: (c, f, m, g) => {
          const {
            frag: p,
            keyInfo: y,
            url: v
          } = m;
          if (!p.decryptdata || y !== this.keyUriToKeyInfo[v])
            return o(this.createKeyLoadError(p, R.KEY_LOAD_ERROR, new Error("after key load, decryptdata unset or changed"), g));
          y.decryptdata.key = p.decryptdata.key = new Uint8Array(c.data), p.keyLoader = null, y.loader = null, r({
            frag: p,
            keyInfo: y
          });
        },
        onError: (c, f, m, g) => {
          this.resetLoader(f), o(this.createKeyLoadError(t, R.KEY_LOAD_ERROR, new Error(`HTTP Error ${c.code} loading key ${c.text}`), m, oe({
            url: l.url,
            data: void 0
          }, c)));
        },
        onTimeout: (c, f, m) => {
          this.resetLoader(f), o(this.createKeyLoadError(t, R.KEY_LOAD_TIMEOUT, new Error("key loading timed out"), m));
        },
        onAbort: (c, f, m) => {
          this.resetLoader(f), o(this.createKeyLoadError(t, R.INTERNAL_ABORTED, new Error("key loading aborted"), m));
        }
      };
      n.load(l, u, h);
    });
  }
  resetLoader(e) {
    const {
      frag: t,
      keyInfo: i,
      url: s
    } = e, n = i.loader;
    t.keyLoader === n && (t.keyLoader = null, i.loader = null), delete this.keyUriToKeyInfo[s], n && n.destroy();
  }
}
class ar {
  constructor() {
    this._boundTick = void 0, this._tickTimer = null, this._tickInterval = null, this._tickCallCount = 0, this._boundTick = this.tick.bind(this);
  }
  destroy() {
    this.onHandlerDestroying(), this.onHandlerDestroyed();
  }
  onHandlerDestroying() {
    this.clearNextTick(), this.clearInterval();
  }
  onHandlerDestroyed() {
  }
  hasInterval() {
    return !!this._tickInterval;
  }
  hasNextTick() {
    return !!this._tickTimer;
  }
  /**
   * @param millis - Interval time (ms)
   * @eturns True when interval has been scheduled, false when already scheduled (no effect)
   */
  setInterval(e) {
    return this._tickInterval ? false : (this._tickCallCount = 0, this._tickInterval = self.setInterval(this._boundTick, e), true);
  }
  /**
   * @returns True when interval was cleared, false when none was set (no effect)
   */
  clearInterval() {
    return this._tickInterval ? (self.clearInterval(this._tickInterval), this._tickInterval = null, true) : false;
  }
  /**
   * @returns True when timeout was cleared, false when none was set (no effect)
   */
  clearNextTick() {
    return this._tickTimer ? (self.clearTimeout(this._tickTimer), this._tickTimer = null, true) : false;
  }
  /**
   * Will call the subclass doTick implementation in this main loop tick
   * or in the next one (via setTimeout(,0)) in case it has already been called
   * in this tick (in case this is a re-entrant call).
   */
  tick() {
    this._tickCallCount++, this._tickCallCount === 1 && (this.doTick(), this._tickCallCount > 1 && this.tickImmediate(), this._tickCallCount = 0);
  }
  tickImmediate() {
    this.clearNextTick(), this._tickTimer = self.setTimeout(this._boundTick, 0);
  }
  /**
   * For subclass to implement task logic
   * @abstract
   */
  doTick() {
  }
}
class Ki {
  constructor(e, t, i, s = 0, n = -1, r = false) {
    this.level = void 0, this.sn = void 0, this.part = void 0, this.id = void 0, this.size = void 0, this.partial = void 0, this.transmuxing = Be(), this.buffering = {
      audio: Be(),
      video: Be(),
      audiovideo: Be()
    }, this.level = e, this.sn = t, this.id = i, this.size = s, this.part = n, this.partial = r;
  }
}
function Be() {
  return {
    start: 0,
    executeStart: 0,
    executeEnd: 0,
    end: 0
  };
}
function Ge(a, e) {
  for (let i = 0, s = a.length; i < s; i++) {
    var t;
    if (((t = a[i]) == null ? void 0 : t.cc) === e)
      return a[i];
  }
  return null;
}
function or(a, e, t) {
  return !!(e && (t.endCC > t.startCC || a && a.cc < t.startCC));
}
function lr(a, e) {
  const t = a.fragments, i = e.fragments;
  if (!i.length || !t.length) {
    L.log("No fragments to align");
    return;
  }
  const s = Ge(t, i[0].cc);
  if (!s || s && !s.startPTS) {
    L.log("No frag in previous level to align on");
    return;
  }
  return s;
}
function ci(a, e) {
  if (a) {
    const t = a.start + e;
    a.start = a.startPTS = t, a.endPTS = t + a.duration;
  }
}
function Wi(a, e) {
  const t = e.fragments;
  for (let i = 0, s = t.length; i < s; i++)
    ci(t[i], a);
  e.fragmentHint && ci(e.fragmentHint, a), e.alignedSliding = true;
}
function dr(a, e, t) {
  e && (ur(a, t, e), !t.alignedSliding && e && hr(t, e), !t.alignedSliding && e && !t.skippedSegments && Mi(e, t));
}
function ur(a, e, t) {
  if (or(a, t, e)) {
    const i = lr(t, e);
    i && k(i.start) && (L.log(`Adjusting PTS using last level due to CC increase within current level ${e.url}`), Wi(i.start, e));
  }
}
function hr(a, e) {
  if (!a.hasProgramDateTime || !e.hasProgramDateTime)
    return;
  const t = a.fragments, i = e.fragments;
  if (!t.length || !i.length)
    return;
  let s, n;
  const r = Math.min(e.endCC, a.endCC);
  e.startCC < r && a.startCC < r && (s = Ge(i, r), n = Ge(t, r)), (!s || !n) && (s = i[Math.floor(i.length / 2)], n = Ge(t, s.cc) || t[Math.floor(t.length / 2)]);
  const o = s.programDateTime, l = n.programDateTime;
  if (!o || !l)
    return;
  const d = (l - o) / 1e3 - (n.start - s.start);
  Wi(d, a);
}
class cr {
  constructor(e, t) {
    this.subtle = void 0, this.aesIV = void 0, this.subtle = e, this.aesIV = t;
  }
  decrypt(e, t) {
    return this.subtle.decrypt({
      name: "AES-CBC",
      iv: this.aesIV
    }, t, e);
  }
}
class fr {
  constructor(e, t) {
    this.subtle = void 0, this.key = void 0, this.subtle = e, this.key = t;
  }
  expandKey() {
    return this.subtle.importKey("raw", this.key, {
      name: "AES-CBC"
    }, false, ["encrypt", "decrypt"]);
  }
}
function mr(a) {
  const e = a.byteLength, t = e && new DataView(a.buffer).getUint8(e - 1);
  return t ? ve(a, 0, e - t) : a;
}
class gr {
  constructor() {
    this.rcon = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], this.subMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)], this.invSubMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)], this.sBox = new Uint32Array(256), this.invSBox = new Uint32Array(256), this.key = new Uint32Array(0), this.ksRows = 0, this.keySize = 0, this.keySchedule = void 0, this.invKeySchedule = void 0, this.initTable();
  }
  // Using view.getUint32() also swaps the byte order.
  uint8ArrayToUint32Array_(e) {
    const t = new DataView(e), i = new Uint32Array(4);
    for (let s = 0; s < 4; s++)
      i[s] = t.getUint32(s * 4);
    return i;
  }
  initTable() {
    const e = this.sBox, t = this.invSBox, i = this.subMix, s = i[0], n = i[1], r = i[2], o = i[3], l = this.invSubMix, d = l[0], u = l[1], h = l[2], c = l[3], f = new Uint32Array(256);
    let m = 0, g = 0, p = 0;
    for (p = 0; p < 256; p++)
      p < 128 ? f[p] = p << 1 : f[p] = p << 1 ^ 283;
    for (p = 0; p < 256; p++) {
      let y = g ^ g << 1 ^ g << 2 ^ g << 3 ^ g << 4;
      y = y >>> 8 ^ y & 255 ^ 99, e[m] = y, t[y] = m;
      const v = f[m], E = f[v], b = f[E];
      let S = f[y] * 257 ^ y * 16843008;
      s[m] = S << 24 | S >>> 8, n[m] = S << 16 | S >>> 16, r[m] = S << 8 | S >>> 24, o[m] = S, S = b * 16843009 ^ E * 65537 ^ v * 257 ^ m * 16843008, d[y] = S << 24 | S >>> 8, u[y] = S << 16 | S >>> 16, h[y] = S << 8 | S >>> 24, c[y] = S, m ? (m = v ^ f[f[f[b ^ v]]], g ^= f[f[g]]) : m = g = 1;
    }
  }
  expandKey(e) {
    const t = this.uint8ArrayToUint32Array_(e);
    let i = true, s = 0;
    for (; s < t.length && i; )
      i = t[s] === this.key[s], s++;
    if (i)
      return;
    this.key = t;
    const n = this.keySize = t.length;
    if (n !== 4 && n !== 6 && n !== 8)
      throw new Error("Invalid aes key size=" + n);
    const r = this.ksRows = (n + 6 + 1) * 4;
    let o, l;
    const d = this.keySchedule = new Uint32Array(r), u = this.invKeySchedule = new Uint32Array(r), h = this.sBox, c = this.rcon, f = this.invSubMix, m = f[0], g = f[1], p = f[2], y = f[3];
    let v, E;
    for (o = 0; o < r; o++) {
      if (o < n) {
        v = d[o] = t[o];
        continue;
      }
      E = v, o % n === 0 ? (E = E << 8 | E >>> 24, E = h[E >>> 24] << 24 | h[E >>> 16 & 255] << 16 | h[E >>> 8 & 255] << 8 | h[E & 255], E ^= c[o / n | 0] << 24) : n > 6 && o % n === 4 && (E = h[E >>> 24] << 24 | h[E >>> 16 & 255] << 16 | h[E >>> 8 & 255] << 8 | h[E & 255]), d[o] = v = (d[o - n] ^ E) >>> 0;
    }
    for (l = 0; l < r; l++)
      o = r - l, l & 3 ? E = d[o] : E = d[o - 4], l < 4 || o <= 4 ? u[l] = E : u[l] = m[h[E >>> 24]] ^ g[h[E >>> 16 & 255]] ^ p[h[E >>> 8 & 255]] ^ y[h[E & 255]], u[l] = u[l] >>> 0;
  }
  // Adding this as a method greatly improves performance.
  networkToHostOrderSwap(e) {
    return e << 24 | (e & 65280) << 8 | (e & 16711680) >> 8 | e >>> 24;
  }
  decrypt(e, t, i) {
    const s = this.keySize + 6, n = this.invKeySchedule, r = this.invSBox, o = this.invSubMix, l = o[0], d = o[1], u = o[2], h = o[3], c = this.uint8ArrayToUint32Array_(i);
    let f = c[0], m = c[1], g = c[2], p = c[3];
    const y = new Int32Array(e), v = new Int32Array(y.length);
    let E, b, S, I, A, D, P, _, C, $, M, U, B, V;
    const W = this.networkToHostOrderSwap;
    for (; t < y.length; ) {
      for (C = W(y[t]), $ = W(y[t + 1]), M = W(y[t + 2]), U = W(y[t + 3]), A = C ^ n[0], D = U ^ n[1], P = M ^ n[2], _ = $ ^ n[3], B = 4, V = 1; V < s; V++)
        E = l[A >>> 24] ^ d[D >> 16 & 255] ^ u[P >> 8 & 255] ^ h[_ & 255] ^ n[B], b = l[D >>> 24] ^ d[P >> 16 & 255] ^ u[_ >> 8 & 255] ^ h[A & 255] ^ n[B + 1], S = l[P >>> 24] ^ d[_ >> 16 & 255] ^ u[A >> 8 & 255] ^ h[D & 255] ^ n[B + 2], I = l[_ >>> 24] ^ d[A >> 16 & 255] ^ u[D >> 8 & 255] ^ h[P & 255] ^ n[B + 3], A = E, D = b, P = S, _ = I, B = B + 4;
      E = r[A >>> 24] << 24 ^ r[D >> 16 & 255] << 16 ^ r[P >> 8 & 255] << 8 ^ r[_ & 255] ^ n[B], b = r[D >>> 24] << 24 ^ r[P >> 16 & 255] << 16 ^ r[_ >> 8 & 255] << 8 ^ r[A & 255] ^ n[B + 1], S = r[P >>> 24] << 24 ^ r[_ >> 16 & 255] << 16 ^ r[A >> 8 & 255] << 8 ^ r[D & 255] ^ n[B + 2], I = r[_ >>> 24] << 24 ^ r[A >> 16 & 255] << 16 ^ r[D >> 8 & 255] << 8 ^ r[P & 255] ^ n[B + 3], v[t] = W(E ^ f), v[t + 1] = W(I ^ m), v[t + 2] = W(S ^ g), v[t + 3] = W(b ^ p), f = C, m = $, g = M, p = U, t = t + 4;
    }
    return v.buffer;
  }
}
const pr = 16;
class _t {
  constructor(e, {
    removePKCS7Padding: t = true
  } = {}) {
    if (this.logEnabled = true, this.removePKCS7Padding = void 0, this.subtle = null, this.softwareDecrypter = null, this.key = null, this.fastAesKey = null, this.remainderData = null, this.currentIV = null, this.currentResult = null, this.useSoftware = void 0, this.useSoftware = e.enableSoftwareAES, this.removePKCS7Padding = t, t)
      try {
        const i = self.crypto;
        i && (this.subtle = i.subtle || i.webkitSubtle);
      } catch {
      }
    this.useSoftware = !this.subtle;
  }
  destroy() {
    this.subtle = null, this.softwareDecrypter = null, this.key = null, this.fastAesKey = null, this.remainderData = null, this.currentIV = null, this.currentResult = null;
  }
  isSync() {
    return this.useSoftware;
  }
  flush() {
    const {
      currentResult: e,
      remainderData: t
    } = this;
    if (!e || t)
      return this.reset(), null;
    const i = new Uint8Array(e);
    return this.reset(), this.removePKCS7Padding ? mr(i) : i;
  }
  reset() {
    this.currentResult = null, this.currentIV = null, this.remainderData = null, this.softwareDecrypter && (this.softwareDecrypter = null);
  }
  decrypt(e, t, i) {
    return this.useSoftware ? new Promise((s, n) => {
      this.softwareDecrypt(new Uint8Array(e), t, i);
      const r = this.flush();
      r ? s(r.buffer) : n(new Error("[softwareDecrypt] Failed to decrypt data"));
    }) : this.webCryptoDecrypt(new Uint8Array(e), t, i);
  }
  // Software decryption is progressive. Progressive decryption may not return a result on each call. Any cached
  // data is handled in the flush() call
  softwareDecrypt(e, t, i) {
    const {
      currentIV: s,
      currentResult: n,
      remainderData: r
    } = this;
    this.logOnce("JS AES decrypt"), r && (e = ce(r, e), this.remainderData = null);
    const o = this.getValidChunk(e);
    if (!o.length)
      return null;
    s && (i = s);
    let l = this.softwareDecrypter;
    l || (l = this.softwareDecrypter = new gr()), l.expandKey(t);
    const d = n;
    return this.currentResult = l.decrypt(o.buffer, 0, i), this.currentIV = ve(o, -16).buffer, d || null;
  }
  webCryptoDecrypt(e, t, i) {
    if (this.key !== t || !this.fastAesKey) {
      if (!this.subtle)
        return Promise.resolve(this.onWebCryptoError(e, t, i));
      this.key = t, this.fastAesKey = new fr(this.subtle, t);
    }
    return this.fastAesKey.expandKey().then((s) => this.subtle ? (this.logOnce("WebCrypto AES decrypt"), new cr(this.subtle, new Uint8Array(i)).decrypt(e.buffer, s)) : Promise.reject(new Error("web crypto not initialized"))).catch((s) => (L.warn(`[decrypter]: WebCrypto Error, disable WebCrypto API, ${s.name}: ${s.message}`), this.onWebCryptoError(e, t, i)));
  }
  onWebCryptoError(e, t, i) {
    this.useSoftware = true, this.logEnabled = true, this.softwareDecrypt(e, t, i);
    const s = this.flush();
    if (s)
      return s.buffer;
    throw new Error("WebCrypto and softwareDecrypt: failed to decrypt data");
  }
  getValidChunk(e) {
    let t = e;
    const i = e.length - e.length % pr;
    return i !== e.length && (t = ve(e, 0, i), this.remainderData = ve(e, i)), t;
  }
  logOnce(e) {
    this.logEnabled && (L.log(`[decrypter]: ${e}`), this.logEnabled = false);
  }
}
const xr = {
  toString: function(a) {
    let e = "";
    const t = a.length;
    for (let i = 0; i < t; i++)
      e += `[${a.start(i).toFixed(3)}-${a.end(i).toFixed(3)}]`;
    return e;
  }
}, w = {
  STOPPED: "STOPPED",
  IDLE: "IDLE",
  KEY_LOADING: "KEY_LOADING",
  FRAG_LOADING: "FRAG_LOADING",
  FRAG_LOADING_WAITING_RETRY: "FRAG_LOADING_WAITING_RETRY",
  PARSING: "PARSING",
  PARSED: "PARSED",
  ENDED: "ENDED",
  ERROR: "ERROR",
  WAITING_LEVEL: "WAITING_LEVEL"
};
class yr extends ar {
  constructor(e, t, i, s, n) {
    super(), this.hls = void 0, this.fragPrevious = null, this.fragCurrent = null, this.fragmentTracker = void 0, this.transmuxer = null, this._state = w.STOPPED, this.playlistType = void 0, this.media = null, this.mediaBuffer = null, this.config = void 0, this.bitrateTest = false, this.lastCurrentTime = 0, this.nextLoadPosition = 0, this.startPosition = 0, this.startTimeOffset = null, this.loadedmetadata = false, this.retryDate = 0, this.levels = null, this.fragmentLoader = void 0, this.keyLoader = void 0, this.levelLastLoaded = null, this.startFragRequested = false, this.decrypter = void 0, this.initPTS = [], this.buffering = true, this.onvseeking = null, this.onvended = null, this.logPrefix = "", this.log = void 0, this.warn = void 0, this.playlistType = n, this.logPrefix = s, this.log = L.log.bind(L, `${s}:`), this.warn = L.warn.bind(L, `${s}:`), this.hls = e, this.fragmentLoader = new nr(e.config), this.keyLoader = i, this.fragmentTracker = t, this.config = e.config, this.decrypter = new _t(e.config), e.on(x.MANIFEST_LOADED, this.onManifestLoaded, this);
  }
  doTick() {
    this.onTickEnd();
  }
  onTickEnd() {
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  startLoad(e) {
  }
  stopLoad() {
    this.fragmentLoader.abort(), this.keyLoader.abort(this.playlistType);
    const e = this.fragCurrent;
    e != null && e.loader && (e.abortRequests(), this.fragmentTracker.removeFragment(e)), this.resetTransmuxer(), this.fragCurrent = null, this.fragPrevious = null, this.clearInterval(), this.clearNextTick(), this.state = w.STOPPED;
  }
  pauseBuffering() {
    this.buffering = false;
  }
  resumeBuffering() {
    this.buffering = true;
  }
  _streamEnded(e, t) {
    if (t.live || e.nextStart || !e.end || !this.media)
      return false;
    const i = t.partList;
    if (i != null && i.length) {
      const n = i[i.length - 1];
      return J.isBuffered(this.media, n.start + n.duration / 2);
    }
    const s = t.fragments[t.fragments.length - 1].type;
    return this.fragmentTracker.isEndListAppended(s);
  }
  getLevelDetails() {
    if (this.levels && this.levelLastLoaded !== null) {
      var e;
      return (e = this.levelLastLoaded) == null ? void 0 : e.details;
    }
  }
  onMediaAttached(e, t) {
    const i = this.media = this.mediaBuffer = t.media;
    this.onvseeking = this.onMediaSeeking.bind(this), this.onvended = this.onMediaEnded.bind(this), i.addEventListener("seeking", this.onvseeking), i.addEventListener("ended", this.onvended);
    const s = this.config;
    this.levels && s.autoStartLoad && this.state === w.STOPPED && this.startLoad(s.startPosition);
  }
  onMediaDetaching() {
    const e = this.media;
    e != null && e.ended && (this.log("MSE detaching and video ended, reset startPosition"), this.startPosition = this.lastCurrentTime = 0), e && this.onvseeking && this.onvended && (e.removeEventListener("seeking", this.onvseeking), e.removeEventListener("ended", this.onvended), this.onvseeking = this.onvended = null), this.keyLoader && this.keyLoader.detach(), this.media = this.mediaBuffer = null, this.loadedmetadata = false, this.fragmentTracker.removeAllFragments(), this.stopLoad();
  }
  onMediaSeeking() {
    const {
      config: e,
      fragCurrent: t,
      media: i,
      mediaBuffer: s,
      state: n
    } = this, r = i ? i.currentTime : 0, o = J.bufferInfo(s || i, r, e.maxBufferHole);
    if (this.log(`media seeking to ${k(r) ? r.toFixed(3) : r}, state: ${n}`), this.state === w.ENDED)
      this.resetLoadingState();
    else if (t) {
      const l = e.maxFragLookUpTolerance, d = t.start - l, u = t.start + t.duration + l;
      if (!o.len || u < o.start || d > o.end) {
        const h = r > u;
        (r < d || h) && (h && t.loader && (this.log("seeking outside of buffer while fragment load in progress, cancel fragment load"), t.abortRequests(), this.resetLoadingState()), this.fragPrevious = null);
      }
    }
    i && (this.fragmentTracker.removeFragmentsInRange(r, 1 / 0, this.playlistType, true), this.lastCurrentTime = r), !this.loadedmetadata && !o.len && (this.nextLoadPosition = this.startPosition = r), this.tickImmediate();
  }
  onMediaEnded() {
    this.startPosition = this.lastCurrentTime = 0;
  }
  onManifestLoaded(e, t) {
    this.startTimeOffset = t.startTimeOffset, this.initPTS = [];
  }
  onHandlerDestroying() {
    this.hls.off(x.MANIFEST_LOADED, this.onManifestLoaded, this), this.stopLoad(), super.onHandlerDestroying(), this.hls = null;
  }
  onHandlerDestroyed() {
    this.state = w.STOPPED, this.fragmentLoader && this.fragmentLoader.destroy(), this.keyLoader && this.keyLoader.destroy(), this.decrypter && this.decrypter.destroy(), this.hls = this.log = this.warn = this.decrypter = this.keyLoader = this.fragmentLoader = this.fragmentTracker = null, super.onHandlerDestroyed();
  }
  loadFragment(e, t, i) {
    this._loadFragForPlayback(e, t, i);
  }
  _loadFragForPlayback(e, t, i) {
    const s = (n) => {
      if (this.fragContextChanged(e)) {
        this.warn(`Fragment ${e.sn}${n.part ? " p: " + n.part.index : ""} of level ${e.level} was dropped during download.`), this.fragmentTracker.removeFragment(e);
        return;
      }
      e.stats.chunkCount++, this._handleFragmentLoadProgress(n);
    };
    this._doFragLoad(e, t, i, s).then((n) => {
      if (!n)
        return;
      const r = this.state;
      if (this.fragContextChanged(e)) {
        (r === w.FRAG_LOADING || !this.fragCurrent && r === w.PARSING) && (this.fragmentTracker.removeFragment(e), this.state = w.IDLE);
        return;
      }
      "payload" in n && (this.log(`Loaded fragment ${e.sn} of level ${e.level}`), this.hls.trigger(x.FRAG_LOADED, n)), this._handleFragmentLoadComplete(n);
    }).catch((n) => {
      this.state === w.STOPPED || this.state === w.ERROR || (this.warn(`Frag error: ${n?.message || n}`), this.resetFragmentLoading(e));
    });
  }
  clearTrackerIfNeeded(e) {
    var t;
    const {
      fragmentTracker: i
    } = this;
    if (i.getState(e) === re.APPENDING) {
      const n = e.type, r = this.getFwdBufferInfo(this.mediaBuffer, n), o = Math.max(e.duration, r ? r.len : this.config.maxBufferLength), l = this.backtrackFragment;
      ((l ? e.sn - l.sn : 0) === 1 || this.reduceMaxBufferLength(o, e.duration)) && i.removeFragment(e);
    } else ((t = this.mediaBuffer) == null ? void 0 : t.buffered.length) === 0 ? i.removeAllFragments() : i.hasParts(e.type) && (i.detectPartialFragments({
      frag: e,
      part: null,
      stats: e.stats,
      id: e.type
    }), i.getState(e) === re.PARTIAL && i.removeFragment(e));
  }
  checkLiveUpdate(e) {
    if (e.updated && !e.live) {
      const t = e.fragments[e.fragments.length - 1];
      this.fragmentTracker.detectPartialFragments({
        frag: t,
        part: null,
        stats: t.stats,
        id: t.type
      });
    }
    e.fragments[0] || (e.deltaUpdateFailed = true);
  }
  flushMainBuffer(e, t, i = null) {
    if (!(e - t))
      return;
    const s = {
      startOffset: e,
      endOffset: t,
      type: i
    };
    this.hls.trigger(x.BUFFER_FLUSHING, s);
  }
  _loadInitSegment(e, t) {
    this._doFragLoad(e, t).then((i) => {
      if (!i || this.fragContextChanged(e) || !this.levels)
        throw new Error("init load aborted");
      return i;
    }).then((i) => {
      const {
        hls: s
      } = this, {
        payload: n
      } = i, r = e.decryptdata;
      if (n && n.byteLength > 0 && r != null && r.key && r.iv && r.method === "AES-128") {
        const o = self.performance.now();
        return this.decrypter.decrypt(new Uint8Array(n), r.key.buffer, r.iv.buffer).catch((l) => {
          throw s.trigger(x.ERROR, {
            type: K.MEDIA_ERROR,
            details: R.FRAG_DECRYPT_ERROR,
            fatal: false,
            error: l,
            reason: l.message,
            frag: e
          }), l;
        }).then((l) => {
          const d = self.performance.now();
          return s.trigger(x.FRAG_DECRYPTED, {
            frag: e,
            payload: l,
            stats: {
              tstart: o,
              tdecrypt: d
            }
          }), i.payload = l, this.completeInitSegmentLoad(i);
        });
      }
      return this.completeInitSegmentLoad(i);
    }).catch((i) => {
      this.state === w.STOPPED || this.state === w.ERROR || (this.warn(i), this.resetFragmentLoading(e));
    });
  }
  completeInitSegmentLoad(e) {
    const {
      levels: t
    } = this;
    if (!t)
      throw new Error("init load aborted, missing levels");
    const i = e.frag.stats;
    this.state = w.IDLE, e.frag.data = new Uint8Array(e.payload), i.parsing.start = i.buffering.start = self.performance.now(), i.parsing.end = i.buffering.end = self.performance.now(), this.tick();
  }
  fragContextChanged(e) {
    const {
      fragCurrent: t
    } = this;
    return !e || !t || e.sn !== t.sn || e.level !== t.level;
  }
  fragBufferedComplete(e, t) {
    var i, s, n, r;
    const o = this.mediaBuffer ? this.mediaBuffer : this.media;
    if (this.log(`Buffered ${e.type} sn: ${e.sn}${t ? " part: " + t.index : ""} of ${this.playlistType === q.MAIN ? "level" : "track"} ${e.level} (frag:[${((i = e.startPTS) != null ? i : NaN).toFixed(3)}-${((s = e.endPTS) != null ? s : NaN).toFixed(3)}] > buffer:${o ? xr.toString(J.getBuffered(o)) : "(detached)"})`), e.sn !== "initSegment") {
      var l;
      if (e.type !== q.SUBTITLE) {
        const u = e.elementaryStreams;
        if (!Object.keys(u).some((h) => !!u[h])) {
          this.state = w.IDLE;
          return;
        }
      }
      const d = (l = this.levels) == null ? void 0 : l[e.level];
      d != null && d.fragmentError && (this.log(`Resetting level fragment error count of ${d.fragmentError} on frag buffered`), d.fragmentError = 0);
    }
    this.state = w.IDLE, o && (!this.loadedmetadata && e.type == q.MAIN && o.buffered.length && ((n = this.fragCurrent) == null ? void 0 : n.sn) === ((r = this.fragPrevious) == null ? void 0 : r.sn) && (this.loadedmetadata = true, this.seekToStartPos()), this.tick());
  }
  seekToStartPos() {
  }
  _handleFragmentLoadComplete(e) {
    const {
      transmuxer: t
    } = this;
    if (!t)
      return;
    const {
      frag: i,
      part: s,
      partsLoaded: n
    } = e, r = !n || n.length === 0 || n.some((l) => !l), o = new Ki(i.level, i.sn, i.stats.chunkCount + 1, 0, s ? s.index : -1, !r);
    t.flush(o);
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _handleFragmentLoadProgress(e) {
  }
  _doFragLoad(e, t, i = null, s) {
    var n;
    const r = t?.details;
    if (!this.levels || !r)
      throw new Error(`frag load aborted, missing level${r ? "" : " detail"}s`);
    let o = null;
    if (e.encrypted && !((n = e.decryptdata) != null && n.key) ? (this.log(`Loading key for ${e.sn} of [${r.startSN}-${r.endSN}], ${this.logPrefix === "[stream-controller]" ? "level" : "track"} ${e.level}`), this.state = w.KEY_LOADING, this.fragCurrent = e, o = this.keyLoader.load(e).then((u) => {
      if (!this.fragContextChanged(u.frag))
        return this.hls.trigger(x.KEY_LOADED, u), this.state === w.KEY_LOADING && (this.state = w.IDLE), u;
    }), this.hls.trigger(x.KEY_LOADING, {
      frag: e
    }), this.fragCurrent === null && (o = Promise.reject(new Error("frag load aborted, context changed in KEY_LOADING")))) : !e.encrypted && r.encryptedFragments.length && this.keyLoader.loadClear(e, r.encryptedFragments), i = Math.max(e.start, i || 0), this.config.lowLatencyMode && e.sn !== "initSegment") {
      const u = r.partList;
      if (u && s) {
        i > e.end && r.fragmentHint && (e = r.fragmentHint);
        const h = this.getNextPart(u, e, i);
        if (h > -1) {
          const c = u[h];
          this.log(`Loading part sn: ${e.sn} p: ${c.index} cc: ${e.cc} of playlist [${r.startSN}-${r.endSN}] parts [0-${h}-${u.length - 1}] ${this.logPrefix === "[stream-controller]" ? "level" : "track"}: ${e.level}, target: ${parseFloat(i.toFixed(3))}`), this.nextLoadPosition = c.start + c.duration, this.state = w.FRAG_LOADING;
          let f;
          return o ? f = o.then((m) => !m || this.fragContextChanged(m.frag) ? null : this.doFragPartsLoad(e, c, t, s)).catch((m) => this.handleFragLoadError(m)) : f = this.doFragPartsLoad(e, c, t, s).catch((m) => this.handleFragLoadError(m)), this.hls.trigger(x.FRAG_LOADING, {
            frag: e,
            part: c,
            targetBufferTime: i
          }), this.fragCurrent === null ? Promise.reject(new Error("frag load aborted, context changed in FRAG_LOADING parts")) : f;
        } else if (!e.url || this.loadedEndOfParts(u, i))
          return Promise.resolve(null);
      }
    }
    this.log(`Loading fragment ${e.sn} cc: ${e.cc} ${r ? "of [" + r.startSN + "-" + r.endSN + "] " : ""}${this.logPrefix === "[stream-controller]" ? "level" : "track"}: ${e.level}, target: ${parseFloat(i.toFixed(3))}`), k(e.sn) && !this.bitrateTest && (this.nextLoadPosition = e.start + e.duration), this.state = w.FRAG_LOADING;
    const l = this.config.progressive;
    let d;
    return l && o ? d = o.then((u) => !u || this.fragContextChanged(u?.frag) ? null : this.fragmentLoader.load(e, s)).catch((u) => this.handleFragLoadError(u)) : d = Promise.all([this.fragmentLoader.load(e, l ? s : void 0), o]).then(([u]) => (!l && u && s && s(u), u)).catch((u) => this.handleFragLoadError(u)), this.hls.trigger(x.FRAG_LOADING, {
      frag: e,
      targetBufferTime: i
    }), this.fragCurrent === null ? Promise.reject(new Error("frag load aborted, context changed in FRAG_LOADING")) : d;
  }
  doFragPartsLoad(e, t, i, s) {
    return new Promise((n, r) => {
      var o;
      const l = [], d = (o = i.details) == null ? void 0 : o.partList, u = (h) => {
        this.fragmentLoader.loadPart(e, h, s).then((c) => {
          l[h.index] = c;
          const f = c.part;
          this.hls.trigger(x.FRAG_LOADED, c);
          const m = ei(i, e.sn, h.index + 1) || Ni(d, e.sn, h.index + 1);
          if (m)
            u(m);
          else
            return n({
              frag: e,
              part: f,
              partsLoaded: l
            });
        }).catch(r);
      };
      u(t);
    });
  }
  handleFragLoadError(e) {
    if ("data" in e) {
      const t = e.data;
      e.data && t.details === R.INTERNAL_ABORTED ? this.handleFragLoadAborted(t.frag, t.part) : this.hls.trigger(x.ERROR, t);
    } else
      this.hls.trigger(x.ERROR, {
        type: K.OTHER_ERROR,
        details: R.INTERNAL_EXCEPTION,
        err: e,
        error: e,
        fatal: true
      });
    return null;
  }
  _handleTransmuxerFlush(e) {
    const t = this.getCurrentContext(e);
    if (!t || this.state !== w.PARSING) {
      !this.fragCurrent && this.state !== w.STOPPED && this.state !== w.ERROR && (this.state = w.IDLE);
      return;
    }
    const {
      frag: i,
      part: s,
      level: n
    } = t, r = self.performance.now();
    i.stats.parsing.end = r, s && (s.stats.parsing.end = r), this.updateLevelTiming(i, s, n, e.partial);
  }
  getCurrentContext(e) {
    const {
      levels: t,
      fragCurrent: i
    } = this, {
      level: s,
      sn: n,
      part: r
    } = e;
    if (!(t != null && t[s]))
      return this.warn(`Levels object was unset while buffering fragment ${n} of level ${s}. The current chunk will not be buffered.`), null;
    const o = t[s], l = r > -1 ? ei(o, n, r) : null, d = l ? l.fragment : Tn(o, n, i);
    return d ? (i && i !== d && (d.stats = i.stats), {
      frag: d,
      part: l,
      level: o
    }) : null;
  }
  bufferFragmentData(e, t, i, s, n) {
    var r;
    if (!e || this.state !== w.PARSING)
      return;
    const {
      data1: o,
      data2: l
    } = e;
    let d = o;
    if (o && l && (d = ce(o, l)), !((r = d) != null && r.length))
      return;
    const u = {
      type: e.type,
      frag: t,
      part: i,
      chunkMeta: s,
      parent: t.type,
      data: d
    };
    if (this.hls.trigger(x.BUFFER_APPENDING, u), e.dropped && e.independent && !i) {
      if (n)
        return;
      this.flushBufferGap(t);
    }
  }
  flushBufferGap(e) {
    const t = this.media;
    if (!t)
      return;
    if (!J.isBuffered(t, t.currentTime)) {
      this.flushMainBuffer(0, e.start);
      return;
    }
    const i = t.currentTime, s = J.bufferInfo(t, i, 0), n = e.duration, r = Math.min(this.config.maxFragLookUpTolerance * 2, n * 0.25), o = Math.max(Math.min(e.start - r, s.end - r), i + r);
    e.start - o > r && this.flushMainBuffer(o, e.start);
  }
  getFwdBufferInfo(e, t) {
    const i = this.getLoadPosition();
    return k(i) ? this.getFwdBufferInfoAtPos(e, i, t) : null;
  }
  getFwdBufferInfoAtPos(e, t, i) {
    const {
      config: {
        maxBufferHole: s
      }
    } = this, n = J.bufferInfo(e, t, s);
    if (n.len === 0 && n.nextStart !== void 0) {
      const r = this.fragmentTracker.getBufferedFrag(t, i);
      if (r && n.nextStart < r.end)
        return J.bufferInfo(e, t, Math.max(n.nextStart, s));
    }
    return n;
  }
  getMaxBufferLength(e) {
    const {
      config: t
    } = this;
    let i;
    return e ? i = Math.max(8 * t.maxBufferSize / e, t.maxBufferLength) : i = t.maxBufferLength, Math.min(i, t.maxMaxBufferLength);
  }
  reduceMaxBufferLength(e, t) {
    const i = this.config, s = Math.max(Math.min(e - t, i.maxBufferLength), t), n = Math.max(e - t * 3, i.maxMaxBufferLength / 2, s);
    return n >= s ? (i.maxMaxBufferLength = n, this.warn(`Reduce max buffer length to ${n}s`), true) : false;
  }
  getAppendedFrag(e, t = q.MAIN) {
    const i = this.fragmentTracker.getAppendedFrag(e, q.MAIN);
    return i && "fragment" in i ? i.fragment : i;
  }
  getNextFragment(e, t) {
    const i = t.fragments, s = i.length;
    if (!s)
      return null;
    const {
      config: n
    } = this, r = i[0].start;
    let o;
    if (t.live) {
      const l = n.initialLiveManifestSize;
      if (s < l)
        return this.warn(`Not enough fragments to start playback (have: ${s}, need: ${l})`), null;
      (!t.PTSKnown && !this.startFragRequested && this.startPosition === -1 || e < r) && (o = this.getInitialLiveFragment(t, i), this.startPosition = this.nextLoadPosition = o ? this.hls.liveSyncPosition || o.start : e);
    } else e <= r && (o = i[0]);
    if (!o) {
      const l = n.lowLatencyMode ? t.partEnd : t.fragmentEnd;
      o = this.getFragmentAtPosition(e, l, t);
    }
    return this.mapToInitFragWhenRequired(o);
  }
  isLoopLoading(e, t) {
    const i = this.fragmentTracker.getState(e);
    return (i === re.OK || i === re.PARTIAL && !!e.gap) && this.nextLoadPosition > t;
  }
  getNextFragmentLoopLoading(e, t, i, s, n) {
    const r = e.gap, o = this.getNextFragment(this.nextLoadPosition, t);
    if (o === null)
      return o;
    if (e = o, r && e && !e.gap && i.nextStart) {
      const l = this.getFwdBufferInfoAtPos(this.mediaBuffer ? this.mediaBuffer : this.media, i.nextStart, s);
      if (l !== null && i.len + l.len >= n)
        return this.log(`buffer full after gaps in "${s}" playlist starting at sn: ${e.sn}`), null;
    }
    return e;
  }
  mapToInitFragWhenRequired(e) {
    return e != null && e.initSegment && !(e != null && e.initSegment.data) && !this.bitrateTest ? e.initSegment : e;
  }
  getNextPart(e, t, i) {
    let s = -1, n = false, r = true;
    for (let o = 0, l = e.length; o < l; o++) {
      const d = e[o];
      if (r = r && !d.independent, s > -1 && i < d.start)
        break;
      const u = d.loaded;
      u ? s = -1 : (n || d.independent || r) && d.fragment === t && (s = o), n = u;
    }
    return s;
  }
  loadedEndOfParts(e, t) {
    const i = e[e.length - 1];
    return i && t > i.start && i.loaded;
  }
  /*
   This method is used find the best matching first fragment for a live playlist. This fragment is used to calculate the
   "sliding" of the playlist, which is its offset from the start of playback. After sliding we can compute the real
   start and end times for each fragment in the playlist (after which this method will not need to be called).
  */
  getInitialLiveFragment(e, t) {
    const i = this.fragPrevious;
    let s = null;
    if (i) {
      if (e.hasProgramDateTime && (this.log(`Live playlist, switching playlist, load frag with same PDT: ${i.programDateTime}`), s = Ln(t, i.endProgramDateTime, this.config.maxFragLookUpTolerance)), !s) {
        const n = i.sn + 1;
        if (n >= e.startSN && n <= e.endSN) {
          const r = t[n - e.startSN];
          i.cc === r.cc && (s = r, this.log(`Live playlist, switching playlist, load frag with next SN: ${s.sn}`));
        }
        s || (s = Rn(t, i.cc), s && this.log(`Live playlist, switching playlist, load frag with same CC: ${s.sn}`));
      }
    } else {
      const n = this.hls.liveSyncPosition;
      n !== null && (s = this.getFragmentAtPosition(n, this.bitrateTest ? e.fragmentEnd : e.edge, e));
    }
    return s;
  }
  /*
  This method finds the best matching fragment given the provided position.
   */
  getFragmentAtPosition(e, t, i) {
    const {
      config: s
    } = this;
    let {
      fragPrevious: n
    } = this, {
      fragments: r,
      endSN: o
    } = i;
    const {
      fragmentHint: l
    } = i, {
      maxFragLookUpTolerance: d
    } = s, u = i.partList, h = !!(s.lowLatencyMode && u != null && u.length && l);
    h && l && !this.bitrateTest && (r = r.concat(l), o = l.sn);
    let c;
    if (e < t) {
      const f = e > t - d ? 0 : d;
      c = $i(n, r, e, f);
    } else
      c = r[r.length - 1];
    if (c) {
      const f = c.sn - i.startSN, m = this.fragmentTracker.getState(c);
      if ((m === re.OK || m === re.PARTIAL && c.gap) && (n = c), n && c.sn === n.sn && (!h || u[0].fragment.sn > c.sn) && n && c.level === n.level) {
        const p = r[f + 1];
        c.sn < o && this.fragmentTracker.getState(p) !== re.OK ? c = p : c = null;
      }
    }
    return c;
  }
  synchronizeToLiveEdge(e) {
    const {
      config: t,
      media: i
    } = this;
    if (!i)
      return;
    const s = this.hls.liveSyncPosition, n = i.currentTime, r = e.fragments[0].start, o = e.edge, l = n >= r - t.maxFragLookUpTolerance && n <= o;
    if (s !== null && i.duration > s && (n < s || !l)) {
      const d = t.liveMaxLatencyDuration !== void 0 ? t.liveMaxLatencyDuration : t.liveMaxLatencyDurationCount * e.targetduration;
      (!l && i.readyState < 4 || n < o - d) && (this.loadedmetadata || (this.nextLoadPosition = s), i.readyState && (this.warn(`Playback: ${n.toFixed(3)} is located too far from the end of live sliding playlist: ${o}, reset currentTime to : ${s.toFixed(3)}`), i.currentTime = s));
    }
  }
  alignPlaylists(e, t, i) {
    const s = e.fragments.length;
    if (!s)
      return this.warn("No fragments in live playlist"), 0;
    const n = e.fragments[0].start, r = !t, o = e.alignedSliding && k(n);
    if (r || !o && !n) {
      const {
        fragPrevious: l
      } = this;
      dr(l, i, e);
      const d = e.fragments[0].start;
      return this.log(`Live playlist sliding: ${d.toFixed(2)} start-sn: ${t ? t.startSN : "na"}->${e.startSN} prev-sn: ${l ? l.sn : "na"} fragments: ${s}`), d;
    }
    return n;
  }
  waitForCdnTuneIn(e) {
    return e.live && e.canBlockReload && e.partTarget && e.tuneInGoal > Math.max(e.partHoldBack, e.partTarget * 3);
  }
  setStartPosition(e, t) {
    let i = this.startPosition;
    if (i < t && (i = -1), i === -1 || this.lastCurrentTime === -1) {
      const s = this.startTimeOffset !== null, n = s ? this.startTimeOffset : e.startTimeOffset;
      n !== null && k(n) ? (i = t + n, n < 0 && (i += e.totalduration), i = Math.min(Math.max(t, i), t + e.totalduration), this.log(`Start time offset ${n} found in ${s ? "multivariant" : "media"} playlist, adjust startPosition to ${i}`), this.startPosition = i) : e.live ? i = this.hls.liveSyncPosition || t : this.startPosition = i = 0, this.lastCurrentTime = i;
    }
    this.nextLoadPosition = i;
  }
  getLoadPosition() {
    const {
      media: e
    } = this;
    let t = 0;
    return this.loadedmetadata && e ? t = e.currentTime : this.nextLoadPosition && (t = this.nextLoadPosition), t;
  }
  handleFragLoadAborted(e, t) {
    this.transmuxer && e.sn !== "initSegment" && e.stats.aborted && (this.warn(`Fragment ${e.sn}${t ? " part " + t.index : ""} of level ${e.level} was aborted`), this.resetFragmentLoading(e));
  }
  resetFragmentLoading(e) {
    (!this.fragCurrent || !this.fragContextChanged(e) && this.state !== w.FRAG_LOADING_WAITING_RETRY) && (this.state = w.IDLE);
  }
  onFragmentOrKeyLoadError(e, t) {
    if (t.chunkMeta && !t.frag) {
      const u = this.getCurrentContext(t.chunkMeta);
      u && (t.frag = u.frag);
    }
    const i = t.frag;
    if (!i || i.type !== e || !this.levels)
      return;
    if (this.fragContextChanged(i)) {
      var s;
      this.warn(`Frag load error must match current frag to retry ${i.url} > ${(s = this.fragCurrent) == null ? void 0 : s.url}`);
      return;
    }
    const n = t.details === R.FRAG_GAP;
    n && this.fragmentTracker.fragBuffered(i, true);
    const r = t.errorAction, {
      action: o,
      retryCount: l = 0,
      retryConfig: d
    } = r || {};
    if (r && o === ie.RetryRequest && d) {
      this.resetStartWhenNotLoaded(this.levelLastLoaded);
      const u = Dt(d, l);
      this.warn(`Fragment ${i.sn} of ${e} ${i.level} errored with ${t.details}, retrying loading ${l + 1}/${d.maxNumRetry} in ${u}ms`), r.resolved = true, this.retryDate = self.performance.now() + u, this.state = w.FRAG_LOADING_WAITING_RETRY;
    } else if (d && r)
      if (this.resetFragmentErrors(e), l < d.maxNumRetry)
        !n && o !== ie.RemoveAlternatePermanently && (r.resolved = true);
      else {
        L.warn(`${t.details} reached or exceeded max retry (${l})`);
        return;
      }
    else r?.action === ie.SendAlternateToPenaltyBox ? this.state = w.WAITING_LEVEL : this.state = w.ERROR;
    this.tickImmediate();
  }
  reduceLengthAndFlushBuffer(e) {
    if (this.state === w.PARSING || this.state === w.PARSED) {
      const t = e.frag, i = e.parent, s = this.getFwdBufferInfo(this.mediaBuffer, i), n = s && s.len > 0.5;
      n && this.reduceMaxBufferLength(s.len, t?.duration || 10);
      const r = !n;
      return r && this.warn(`Buffer full error while media.currentTime is not buffered, flush ${i} buffer`), t && (this.fragmentTracker.removeFragment(t), this.nextLoadPosition = t.start), this.resetLoadingState(), r;
    }
    return false;
  }
  resetFragmentErrors(e) {
    e === q.AUDIO && (this.fragCurrent = null), this.loadedmetadata || (this.startFragRequested = false), this.state !== w.STOPPED && (this.state = w.IDLE);
  }
  afterBufferFlushed(e, t, i) {
    if (!e)
      return;
    const s = J.getBuffered(e);
    this.fragmentTracker.detectEvictedFragments(t, s, i), this.state === w.ENDED && this.resetLoadingState();
  }
  resetLoadingState() {
    this.log("Reset loading state"), this.fragCurrent = null, this.fragPrevious = null, this.state = w.IDLE;
  }
  resetStartWhenNotLoaded(e) {
    if (!this.loadedmetadata) {
      this.startFragRequested = false;
      const t = e ? e.details : null;
      t != null && t.live ? (this.startPosition = -1, this.setStartPosition(t, 0), this.resetLoadingState()) : this.nextLoadPosition = this.startPosition;
    }
  }
  resetWhenMissingContext(e) {
    this.warn(`The loading context changed while buffering fragment ${e.sn} of level ${e.level}. This chunk will not be buffered.`), this.removeUnbufferedFrags(), this.resetStartWhenNotLoaded(this.levelLastLoaded), this.resetLoadingState();
  }
  removeUnbufferedFrags(e = 0) {
    this.fragmentTracker.removeFragmentsInRange(e, 1 / 0, this.playlistType, false, true);
  }
  updateLevelTiming(e, t, i, s) {
    var n;
    const r = i.details;
    if (!r) {
      this.warn("level.details undefined");
      return;
    }
    if (!Object.keys(e.elementaryStreams).reduce((l, d) => {
      const u = e.elementaryStreams[d];
      if (u) {
        const h = u.endPTS - u.startPTS;
        if (h <= 0)
          return this.warn(`Could not parse fragment ${e.sn} ${d} duration reliably (${h})`), l || false;
        const c = s ? 0 : ki(r, e, u.startPTS, u.endPTS, u.startDTS, u.endDTS);
        return this.hls.trigger(x.LEVEL_PTS_UPDATED, {
          details: r,
          level: i,
          drift: c,
          type: d,
          frag: e,
          start: u.startPTS,
          end: u.endPTS
        }), true;
      }
      return l;
    }, false) && ((n = this.transmuxer) == null ? void 0 : n.error) === null) {
      const l = new Error(`Found no media in fragment ${e.sn} of level ${e.level} resetting transmuxer to fallback to playlist timing`);
      if (i.fragmentError === 0 && (i.fragmentError++, e.gap = true, this.fragmentTracker.removeFragment(e), this.fragmentTracker.fragBuffered(e, true)), this.warn(l.message), this.hls.trigger(x.ERROR, {
        type: K.MEDIA_ERROR,
        details: R.FRAG_PARSING_ERROR,
        fatal: false,
        error: l,
        frag: e,
        reason: `Found no media in msn ${e.sn} of level "${i.url}"`
      }), !this.hls)
        return;
      this.resetTransmuxer();
    }
    this.state = w.PARSED, this.hls.trigger(x.FRAG_PARSED, {
      frag: e,
      part: t
    });
  }
  resetTransmuxer() {
    this.transmuxer && (this.transmuxer.destroy(), this.transmuxer = null);
  }
  recoverWorkerError(e) {
    e.event === "demuxerWorker" && (this.fragmentTracker.removeAllFragments(), this.resetTransmuxer(), this.resetStartWhenNotLoaded(this.levelLastLoaded), this.resetLoadingState());
  }
  set state(e) {
    const t = this._state;
    t !== e && (this._state = e, this.log(`${t}->${e}`));
  }
  get state() {
    return this._state;
  }
}
function Yi() {
  return self.SourceBuffer || self.WebKitSourceBuffer;
}
function ji() {
  if (!Ae())
    return false;
  const e = Yi();
  return !e || e.prototype && typeof e.prototype.appendBuffer == "function" && typeof e.prototype.remove == "function";
}
function Er() {
  if (!ji())
    return false;
  const a = Ae();
  return typeof a?.isTypeSupported == "function" && (["avc1.42E01E,mp4a.40.2", "av01.0.01M.08", "vp09.00.50.08"].some((e) => a.isTypeSupported(Et(e, "video"))) || ["mp4a.40.2", "fLaC"].some((e) => a.isTypeSupported(Et(e, "audio"))));
}
function Tr() {
  var a;
  const e = Yi();
  return typeof (e == null || (a = e.prototype) == null ? void 0 : a.changeType) == "function";
}
function Sr() {
  return typeof __HLS_WORKER_BUNDLE__ == "function";
}
function Lr() {
  const a = new self.Blob([`var exports={};var module={exports:exports};function define(f){f()};define.amd=true;(${__HLS_WORKER_BUNDLE__.toString()})(true);`], {
    type: "text/javascript"
  }), e = self.URL.createObjectURL(a);
  return {
    worker: new self.Worker(e),
    objectURL: e
  };
}
function vr(a) {
  const e = new self.URL(a, self.location.href).href;
  return {
    worker: new self.Worker(e),
    scriptURL: e
  };
}
function me(a = "", e = 9e4) {
  return {
    type: a,
    id: -1,
    pid: -1,
    inputTimeScale: e,
    sequenceNumber: -1,
    samples: [],
    dropped: 0
  };
}
class qi {
  constructor() {
    this._audioTrack = void 0, this._id3Track = void 0, this.frameIndex = 0, this.cachedData = null, this.basePTS = null, this.initPTS = null, this.lastPTS = null;
  }
  resetInitSegment(e, t, i, s) {
    this._id3Track = {
      type: "id3",
      id: 3,
      pid: -1,
      inputTimeScale: 9e4,
      sequenceNumber: 0,
      samples: [],
      dropped: 0
    };
  }
  resetTimeStamp(e) {
    this.initPTS = e, this.resetContiguity();
  }
  resetContiguity() {
    this.basePTS = null, this.lastPTS = null, this.frameIndex = 0;
  }
  canParse(e, t) {
    return false;
  }
  appendFrame(e, t, i) {
  }
  // feed incoming data to the front of the parsing pipeline
  demux(e, t) {
    this.cachedData && (e = ce(this.cachedData, e), this.cachedData = null);
    let i = Ke(e, 0), s = i ? i.length : 0, n;
    const r = this._audioTrack, o = this._id3Track, l = i ? Ri(i) : void 0, d = e.length;
    for ((this.basePTS === null || this.frameIndex === 0 && k(l)) && (this.basePTS = Ar(l, t, this.initPTS), this.lastPTS = this.basePTS), this.lastPTS === null && (this.lastPTS = this.basePTS), i && i.length > 0 && o.samples.push({
      pts: this.lastPTS,
      dts: this.lastPTS,
      data: i,
      type: he.audioId3,
      duration: Number.POSITIVE_INFINITY
    }); s < d; ) {
      if (this.canParse(e, s)) {
        const u = this.appendFrame(r, e, s);
        u ? (this.frameIndex++, this.lastPTS = u.sample.pts, s += u.length, n = s) : s = d;
      } else vs(e, s) ? (i = Ke(e, s), o.samples.push({
        pts: this.lastPTS,
        dts: this.lastPTS,
        data: i,
        type: he.audioId3,
        duration: Number.POSITIVE_INFINITY
      }), s += i.length, n = s) : s++;
      if (s === d && n !== d) {
        const u = ve(e, n);
        this.cachedData ? this.cachedData = ce(this.cachedData, u) : this.cachedData = u;
      }
    }
    return {
      audioTrack: r,
      videoTrack: me(),
      id3Track: o,
      textTrack: me()
    };
  }
  demuxSampleAes(e, t, i) {
    return Promise.reject(new Error(`[${this}] This demuxer does not support Sample-AES decryption`));
  }
  flush(e) {
    const t = this.cachedData;
    return t && (this.cachedData = null, this.demux(t, 0)), {
      audioTrack: this._audioTrack,
      videoTrack: me(),
      id3Track: this._id3Track,
      textTrack: me()
    };
  }
  destroy() {
  }
}
const Ar = (a, e, t) => {
  if (k(a))
    return a * 90;
  const i = t ? t.baseTime * 9e4 / t.timescale : 0;
  return e * 9e4 + i;
};
function Rr(a, e, t, i) {
  let s, n, r, o;
  const l = navigator.userAgent.toLowerCase(), d = i, u = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350];
  s = ((e[t + 2] & 192) >>> 6) + 1;
  const h = (e[t + 2] & 60) >>> 2;
  if (h > u.length - 1) {
    const c = new Error(`invalid ADTS sampling index:${h}`);
    a.emit(x.ERROR, x.ERROR, {
      type: K.MEDIA_ERROR,
      details: R.FRAG_PARSING_ERROR,
      fatal: true,
      error: c,
      reason: c.message
    });
    return;
  }
  return r = (e[t + 2] & 1) << 2, r |= (e[t + 3] & 192) >>> 6, L.log(`manifest codec:${i}, ADTS type:${s}, samplingIndex:${h}`), /firefox/i.test(l) ? h >= 6 ? (s = 5, o = new Array(4), n = h - 3) : (s = 2, o = new Array(2), n = h) : l.indexOf("android") !== -1 ? (s = 2, o = new Array(2), n = h) : (s = 5, o = new Array(4), i && (i.indexOf("mp4a.40.29") !== -1 || i.indexOf("mp4a.40.5") !== -1) || !i && h >= 6 ? n = h - 3 : ((i && i.indexOf("mp4a.40.2") !== -1 && (h >= 6 && r === 1 || /vivaldi/i.test(l)) || !i && r === 1) && (s = 2, o = new Array(2)), n = h)), o[0] = s << 3, o[0] |= (h & 14) >> 1, o[1] |= (h & 1) << 7, o[1] |= r << 3, s === 5 && (o[1] |= (n & 14) >> 1, o[2] = (n & 1) << 7, o[2] |= 8, o[3] = 0), {
    config: o,
    samplerate: u[h],
    channelCount: r,
    codec: "mp4a.40." + s,
    manifestCodec: d
  };
}
function zi(a, e) {
  return a[e] === 255 && (a[e + 1] & 246) === 240;
}
function Xi(a, e) {
  return a[e + 1] & 1 ? 7 : 9;
}
function wt(a, e) {
  return (a[e + 3] & 3) << 11 | a[e + 4] << 3 | (a[e + 5] & 224) >>> 5;
}
function br(a, e) {
  return e + 5 < a.length;
}
function Je(a, e) {
  return e + 1 < a.length && zi(a, e);
}
function Ir(a, e) {
  return br(a, e) && zi(a, e) && wt(a, e) <= a.length - e;
}
function Dr(a, e) {
  if (Je(a, e)) {
    const t = Xi(a, e);
    if (e + t >= a.length)
      return false;
    const i = wt(a, e);
    if (i <= t)
      return false;
    const s = e + i;
    return s === a.length || Je(a, s);
  }
  return false;
}
function Qi(a, e, t, i, s) {
  if (!a.samplerate) {
    const n = Rr(e, t, i, s);
    if (!n)
      return;
    a.config = n.config, a.samplerate = n.samplerate, a.channelCount = n.channelCount, a.codec = n.codec, a.manifestCodec = n.manifestCodec, L.log(`parsed codec:${a.codec}, rate:${n.samplerate}, channels:${n.channelCount}`);
  }
}
function Ji(a) {
  return 1024 * 9e4 / a;
}
function Cr(a, e) {
  const t = Xi(a, e);
  if (e + t <= a.length) {
    const i = wt(a, e) - t;
    if (i > 0)
      return {
        headerLength: t,
        frameLength: i
      };
  }
}
function Zi(a, e, t, i, s) {
  const n = Ji(a.samplerate), r = i + s * n, o = Cr(e, t);
  let l;
  if (o) {
    const {
      frameLength: h,
      headerLength: c
    } = o, f = c + h, m = Math.max(0, t + f - e.length);
    m ? (l = new Uint8Array(f - c), l.set(e.subarray(t + c, e.length), 0)) : l = e.subarray(t + c, t + f);
    const g = {
      unit: l,
      pts: r
    };
    return m || a.samples.push(g), {
      sample: g,
      length: f,
      missing: m
    };
  }
  const d = e.length - t;
  return l = new Uint8Array(d), l.set(e.subarray(t, e.length), 0), {
    sample: {
      unit: l,
      pts: r
    },
    length: d,
    missing: -1
  };
}
let Ue = null;
const _r = [32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 32, 48, 56, 64, 80, 96, 112, 128, 144, 160, 176, 192, 224, 256, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160], wr = [44100, 48e3, 32e3, 22050, 24e3, 16e3, 11025, 12e3, 8e3], Pr = [
  // MPEG 2.5
  [
    0,
    // Reserved
    72,
    // Layer3
    144,
    // Layer2
    12
    // Layer1
  ],
  // Reserved
  [
    0,
    // Reserved
    0,
    // Layer3
    0,
    // Layer2
    0
    // Layer1
  ],
  // MPEG 2
  [
    0,
    // Reserved
    72,
    // Layer3
    144,
    // Layer2
    12
    // Layer1
  ],
  // MPEG 1
  [
    0,
    // Reserved
    144,
    // Layer3
    144,
    // Layer2
    12
    // Layer1
  ]
], Fr = [
  0,
  // Reserved
  1,
  // Layer3
  1,
  // Layer2
  4
  // Layer1
];
function es(a, e, t, i, s) {
  if (t + 24 > e.length)
    return;
  const n = ts(e, t);
  if (n && t + n.frameLength <= e.length) {
    const r = n.samplesPerFrame * 9e4 / n.sampleRate, o = i + s * r, l = {
      unit: e.subarray(t, t + n.frameLength),
      pts: o,
      dts: o
    };
    return a.config = [], a.channelCount = n.channelCount, a.samplerate = n.sampleRate, a.samples.push(l), {
      sample: l,
      length: n.frameLength,
      missing: 0
    };
  }
}
function ts(a, e) {
  const t = a[e + 1] >> 3 & 3, i = a[e + 1] >> 1 & 3, s = a[e + 2] >> 4 & 15, n = a[e + 2] >> 2 & 3;
  if (t !== 1 && s !== 0 && s !== 15 && n !== 3) {
    const r = a[e + 2] >> 1 & 1, o = a[e + 3] >> 6, l = t === 3 ? 3 - i : i === 3 ? 3 : 4, d = _r[l * 14 + s - 1] * 1e3, h = wr[(t === 3 ? 0 : t === 2 ? 1 : 2) * 3 + n], c = o === 3 ? 1 : 2, f = Pr[t][i], m = Fr[i], g = f * 8 * m, p = Math.floor(f * d / h + r) * m;
    if (Ue === null) {
      const E = (navigator.userAgent || "").match(/Chrome\/(\d+)/i);
      Ue = E ? parseInt(E[1]) : 0;
    }
    return !!Ue && Ue <= 87 && i === 2 && d >= 224e3 && o === 0 && (a[e + 3] = a[e + 3] | 128), {
      sampleRate: h,
      channelCount: c,
      frameLength: p,
      samplesPerFrame: g
    };
  }
}
function Pt(a, e) {
  return a[e] === 255 && (a[e + 1] & 224) === 224 && (a[e + 1] & 6) !== 0;
}
function is(a, e) {
  return e + 1 < a.length && Pt(a, e);
}
function Or(a, e) {
  return Pt(a, e) && 4 <= a.length - e;
}
function ss(a, e) {
  if (e + 1 < a.length && Pt(a, e)) {
    const i = ts(a, e);
    let s = 4;
    i != null && i.frameLength && (s = i.frameLength);
    const n = e + s;
    return n === a.length || is(a, n);
  }
  return false;
}
class kr extends qi {
  constructor(e, t) {
    super(), this.observer = void 0, this.config = void 0, this.observer = e, this.config = t;
  }
  resetInitSegment(e, t, i, s) {
    super.resetInitSegment(e, t, i, s), this._audioTrack = {
      container: "audio/adts",
      type: "audio",
      id: 2,
      pid: -1,
      sequenceNumber: 0,
      segmentCodec: "aac",
      samples: [],
      manifestCodec: t,
      duration: s,
      inputTimeScale: 9e4,
      dropped: 0
    };
  }
  // Source for probe info - https://wiki.multimedia.cx/index.php?title=ADTS
  static probe(e) {
    if (!e)
      return false;
    const t = Ke(e, 0);
    let i = t?.length || 0;
    if (ss(e, i))
      return false;
    for (let s = e.length; i < s; i++)
      if (Dr(e, i))
        return L.log("ADTS sync word found !"), true;
    return false;
  }
  canParse(e, t) {
    return Ir(e, t);
  }
  appendFrame(e, t, i) {
    Qi(e, this.observer, t, i, e.manifestCodec);
    const s = Zi(e, t, i, this.basePTS, this.frameIndex);
    if (s && s.missing === 0)
      return s;
  }
}
const Mr = /\/emsg[-/]ID3/i;
class Nr {
  constructor(e, t) {
    this.remainderData = null, this.timeOffset = 0, this.config = void 0, this.videoTrack = void 0, this.audioTrack = void 0, this.id3Track = void 0, this.txtTrack = void 0, this.config = t;
  }
  resetTimeStamp() {
  }
  resetInitSegment(e, t, i, s) {
    const n = this.videoTrack = me("video", 1), r = this.audioTrack = me("audio", 1), o = this.txtTrack = me("text", 1);
    if (this.id3Track = me("id3", 1), this.timeOffset = 0, !(e != null && e.byteLength))
      return;
    const l = wi(e);
    if (l.video) {
      const {
        id: d,
        timescale: u,
        codec: h
      } = l.video;
      n.id = d, n.timescale = o.timescale = u, n.codec = h;
    }
    if (l.audio) {
      const {
        id: d,
        timescale: u,
        codec: h
      } = l.audio;
      r.id = d, r.timescale = u, r.codec = h;
    }
    o.id = Di.text, n.sampleDuration = 0, n.duration = r.duration = s;
  }
  resetContiguity() {
    this.remainderData = null;
  }
  static probe(e) {
    return Ps(e);
  }
  demux(e, t) {
    this.timeOffset = t;
    let i = e;
    const s = this.videoTrack, n = this.txtTrack;
    if (this.config.progressive) {
      this.remainderData && (i = ce(this.remainderData, e));
      const o = Gs(i);
      this.remainderData = o.remainder, s.samples = o.valid || new Uint8Array();
    } else
      s.samples = i;
    const r = this.extractID3Track(s, t);
    return n.samples = Nt(t, s), {
      videoTrack: s,
      audioTrack: this.audioTrack,
      id3Track: r,
      textTrack: this.txtTrack
    };
  }
  flush() {
    const e = this.timeOffset, t = this.videoTrack, i = this.txtTrack;
    t.samples = this.remainderData || new Uint8Array(), this.remainderData = null;
    const s = this.extractID3Track(t, this.timeOffset);
    return i.samples = Nt(e, t), {
      videoTrack: t,
      audioTrack: me(),
      id3Track: s,
      textTrack: me()
    };
  }
  extractID3Track(e, t) {
    const i = this.id3Track;
    if (e.samples.length) {
      const s = G(e.samples, ["emsg"]);
      s && s.forEach((n) => {
        const r = Ks(n);
        if (Mr.test(r.schemeIdUri)) {
          const o = k(r.presentationTime) ? r.presentationTime / r.timeScale : t + r.presentationTimeDelta / r.timeScale;
          let l = r.eventDuration === 4294967295 ? Number.POSITIVE_INFINITY : r.eventDuration / r.timeScale;
          l <= 1e-3 && (l = Number.POSITIVE_INFINITY);
          const d = r.payload;
          i.samples.push({
            data: d,
            len: d.byteLength,
            dts: o,
            pts: o,
            type: he.emsg,
            duration: l
          });
        }
      });
    }
    return i;
  }
  demuxSampleAes(e, t, i) {
    return Promise.reject(new Error("The MP4 demuxer does not support SAMPLE-AES decryption"));
  }
  destroy() {
  }
}
const Br = (a, e) => {
  let t = 0, i = 5;
  e += i;
  const s = new Uint32Array(1), n = new Uint32Array(1), r = new Uint8Array(1);
  for (; i > 0; ) {
    r[0] = a[e];
    const o = Math.min(i, 8), l = 8 - o;
    n[0] = 4278190080 >>> 24 + l << l, s[0] = (r[0] & n[0]) >> l, t = t ? t << o | s[0] : s[0], e += 1, i -= o;
  }
  return t;
};
class Ur {
  constructor() {
    this.VideoSample = null;
  }
  createVideoSample(e, t, i, s) {
    return {
      key: e,
      frame: false,
      pts: t,
      dts: i,
      units: [],
      debug: s,
      length: 0
    };
  }
  getLastNalUnit(e) {
    var t;
    let i = this.VideoSample, s;
    if ((!i || i.units.length === 0) && (i = e[e.length - 1]), (t = i) != null && t.units) {
      const n = i.units;
      s = n[n.length - 1];
    }
    return s;
  }
  pushAccessUnit(e, t) {
    if (e.units.length && e.frame) {
      if (e.pts === void 0) {
        const i = t.samples, s = i.length;
        if (s) {
          const n = i[s - 1];
          e.pts = n.pts, e.dts = n.dts;
        } else {
          t.dropped++;
          return;
        }
      }
      t.samples.push(e);
    }
    e.debug.length && L.log(e.pts + "/" + e.dts + ":" + e.debug);
  }
}
class fi {
  constructor(e) {
    this.data = void 0, this.bytesAvailable = void 0, this.word = void 0, this.bitsAvailable = void 0, this.data = e, this.bytesAvailable = e.byteLength, this.word = 0, this.bitsAvailable = 0;
  }
  // ():void
  loadWord() {
    const e = this.data, t = this.bytesAvailable, i = e.byteLength - t, s = new Uint8Array(4), n = Math.min(4, t);
    if (n === 0)
      throw new Error("no bytes available");
    s.set(e.subarray(i, i + n)), this.word = new DataView(s.buffer).getUint32(0), this.bitsAvailable = n * 8, this.bytesAvailable -= n;
  }
  // (count:int):void
  skipBits(e) {
    let t;
    e = Math.min(e, this.bytesAvailable * 8 + this.bitsAvailable), this.bitsAvailable > e ? (this.word <<= e, this.bitsAvailable -= e) : (e -= this.bitsAvailable, t = e >> 3, e -= t << 3, this.bytesAvailable -= t, this.loadWord(), this.word <<= e, this.bitsAvailable -= e);
  }
  // (size:int):uint
  readBits(e) {
    let t = Math.min(this.bitsAvailable, e);
    const i = this.word >>> 32 - t;
    if (e > 32 && L.error("Cannot read more than 32 bits at a time"), this.bitsAvailable -= t, this.bitsAvailable > 0)
      this.word <<= t;
    else if (this.bytesAvailable > 0)
      this.loadWord();
    else
      throw new Error("no bits available");
    return t = e - t, t > 0 && this.bitsAvailable ? i << t | this.readBits(t) : i;
  }
  // ():uint
  skipLZ() {
    let e;
    for (e = 0; e < this.bitsAvailable; ++e)
      if (this.word & 2147483648 >>> e)
        return this.word <<= e, this.bitsAvailable -= e, e;
    return this.loadWord(), e + this.skipLZ();
  }
  // ():void
  skipUEG() {
    this.skipBits(1 + this.skipLZ());
  }
  // ():void
  skipEG() {
    this.skipBits(1 + this.skipLZ());
  }
  // ():uint
  readUEG() {
    const e = this.skipLZ();
    return this.readBits(e + 1) - 1;
  }
  // ():int
  readEG() {
    const e = this.readUEG();
    return 1 & e ? 1 + e >>> 1 : -1 * (e >>> 1);
  }
  // Some convenience functions
  // :Boolean
  readBoolean() {
    return this.readBits(1) === 1;
  }
  // ():int
  readUByte() {
    return this.readBits(8);
  }
  // ():int
  readUShort() {
    return this.readBits(16);
  }
  // ():int
  readUInt() {
    return this.readBits(32);
  }
  /**
   * Advance the ExpGolomb decoder past a scaling list. The scaling
   * list is optionally transmitted as part of a sequence parameter
   * set and is not relevant to transmuxing.
   * @param count the number of entries in this scaling list
   * @see Recommendation ITU-T H.264, Section 7.3.2.1.1.1
   */
  skipScalingList(e) {
    let t = 8, i = 8, s;
    for (let n = 0; n < e; n++)
      i !== 0 && (s = this.readEG(), i = (t + s + 256) % 256), t = i === 0 ? t : i;
  }
  /**
   * Read a sequence parameter set and return some interesting video
   * properties. A sequence parameter set is the H264 metadata that
   * describes the properties of upcoming video frames.
   * @returns an object with configuration parsed from the
   * sequence parameter set, including the dimensions of the
   * associated video frames.
   */
  readSPS() {
    let e = 0, t = 0, i = 0, s = 0, n, r, o;
    const l = this.readUByte.bind(this), d = this.readBits.bind(this), u = this.readUEG.bind(this), h = this.readBoolean.bind(this), c = this.skipBits.bind(this), f = this.skipEG.bind(this), m = this.skipUEG.bind(this), g = this.skipScalingList.bind(this);
    l();
    const p = l();
    if (d(5), c(3), l(), m(), p === 100 || p === 110 || p === 122 || p === 244 || p === 44 || p === 83 || p === 86 || p === 118 || p === 128) {
      const I = u();
      if (I === 3 && c(1), m(), m(), c(1), h())
        for (r = I !== 3 ? 8 : 12, o = 0; o < r; o++)
          h() && (o < 6 ? g(16) : g(64));
    }
    m();
    const y = u();
    if (y === 0)
      u();
    else if (y === 1)
      for (c(1), f(), f(), n = u(), o = 0; o < n; o++)
        f();
    m(), c(1);
    const v = u(), E = u(), b = d(1);
    b === 0 && c(1), c(1), h() && (e = u(), t = u(), i = u(), s = u());
    let S = [1, 1];
    if (h() && h())
      switch (l()) {
        case 1:
          S = [1, 1];
          break;
        case 2:
          S = [12, 11];
          break;
        case 3:
          S = [10, 11];
          break;
        case 4:
          S = [16, 11];
          break;
        case 5:
          S = [40, 33];
          break;
        case 6:
          S = [24, 11];
          break;
        case 7:
          S = [20, 11];
          break;
        case 8:
          S = [32, 11];
          break;
        case 9:
          S = [80, 33];
          break;
        case 10:
          S = [18, 11];
          break;
        case 11:
          S = [15, 11];
          break;
        case 12:
          S = [64, 33];
          break;
        case 13:
          S = [160, 99];
          break;
        case 14:
          S = [4, 3];
          break;
        case 15:
          S = [3, 2];
          break;
        case 16:
          S = [2, 1];
          break;
        case 255: {
          S = [l() << 8 | l(), l() << 8 | l()];
          break;
        }
      }
    return {
      width: Math.ceil((v + 1) * 16 - e * 2 - t * 2),
      height: (2 - b) * (E + 1) * 16 - (b ? 2 : 4) * (i + s),
      pixelRatio: S
    };
  }
  readSliceType() {
    return this.readUByte(), this.readUEG(), this.readUEG();
  }
}
class $r extends Ur {
  parseAVCPES(e, t, i, s, n) {
    const r = this.parseAVCNALu(e, i.data);
    let o = this.VideoSample, l, d = false;
    i.data = null, o && r.length && !e.audFound && (this.pushAccessUnit(o, e), o = this.VideoSample = this.createVideoSample(false, i.pts, i.dts, "")), r.forEach((u) => {
      var h;
      switch (u.type) {
        // NDR
        case 1: {
          let g = false;
          l = true;
          const p = u.data;
          if (d && p.length > 4) {
            const y = new fi(p).readSliceType();
            (y === 2 || y === 4 || y === 7 || y === 9) && (g = true);
          }
          if (g) {
            var c;
            (c = o) != null && c.frame && !o.key && (this.pushAccessUnit(o, e), o = this.VideoSample = null);
          }
          o || (o = this.VideoSample = this.createVideoSample(true, i.pts, i.dts, "")), o.frame = true, o.key = g;
          break;
        }
        case 5:
          l = true, (h = o) != null && h.frame && !o.key && (this.pushAccessUnit(o, e), o = this.VideoSample = null), o || (o = this.VideoSample = this.createVideoSample(true, i.pts, i.dts, "")), o.key = true, o.frame = true;
          break;
        // SEI
        case 6: {
          l = true, Pi(u.data, 1, i.pts, t.samples);
          break;
        }
        case 7: {
          var f, m;
          l = true, d = true;
          const g = u.data, y = new fi(g).readSPS();
          if (!e.sps || e.width !== y.width || e.height !== y.height || ((f = e.pixelRatio) == null ? void 0 : f[0]) !== y.pixelRatio[0] || ((m = e.pixelRatio) == null ? void 0 : m[1]) !== y.pixelRatio[1]) {
            e.width = y.width, e.height = y.height, e.pixelRatio = y.pixelRatio, e.sps = [g], e.duration = n;
            const v = g.subarray(1, 4);
            let E = "avc1.";
            for (let b = 0; b < 3; b++) {
              let S = v[b].toString(16);
              S.length < 2 && (S = "0" + S), E += S;
            }
            e.codec = E;
          }
          break;
        }
        // PPS
        case 8:
          l = true, e.pps = [u.data];
          break;
        // AUD
        case 9:
          l = true, e.audFound = true, o && this.pushAccessUnit(o, e), o = this.VideoSample = this.createVideoSample(false, i.pts, i.dts, "");
          break;
        // Filler Data
        case 12:
          l = true;
          break;
        default:
          l = false, o && (o.debug += "unknown NAL " + u.type + " ");
          break;
      }
      o && l && o.units.push(u);
    }), s && o && (this.pushAccessUnit(o, e), this.VideoSample = null);
  }
  parseAVCNALu(e, t) {
    const i = t.byteLength;
    let s = e.naluState || 0;
    const n = s, r = [];
    let o = 0, l, d, u, h = -1, c = 0;
    for (s === -1 && (h = 0, c = t[0] & 31, s = 0, o = 1); o < i; ) {
      if (l = t[o++], !s) {
        s = l ? 0 : 1;
        continue;
      }
      if (s === 1) {
        s = l ? 0 : 2;
        continue;
      }
      if (!l)
        s = 3;
      else if (l === 1) {
        if (d = o - s - 1, h >= 0) {
          const f = {
            data: t.subarray(h, d),
            type: c
          };
          r.push(f);
        } else {
          const f = this.getLastNalUnit(e.samples);
          f && (n && o <= 4 - n && f.state && (f.data = f.data.subarray(0, f.data.byteLength - n)), d > 0 && (f.data = ce(f.data, t.subarray(0, d)), f.state = 0));
        }
        o < i ? (u = t[o] & 31, h = o, c = u, s = 0) : s = -1;
      } else
        s = 0;
    }
    if (h >= 0 && s >= 0) {
      const f = {
        data: t.subarray(h, i),
        type: c,
        state: s
      };
      r.push(f);
    }
    if (r.length === 0) {
      const f = this.getLastNalUnit(e.samples);
      f && (f.data = ce(f.data, t));
    }
    return e.naluState = s, r;
  }
}
class Gr {
  constructor(e, t, i) {
    this.keyData = void 0, this.decrypter = void 0, this.keyData = i, this.decrypter = new _t(t, {
      removePKCS7Padding: false
    });
  }
  decryptBuffer(e) {
    return this.decrypter.decrypt(e, this.keyData.key.buffer, this.keyData.iv.buffer);
  }
  // AAC - encrypt all full 16 bytes blocks starting from offset 16
  decryptAacSample(e, t, i) {
    const s = e[t].unit;
    if (s.length <= 16)
      return;
    const n = s.subarray(16, s.length - s.length % 16), r = n.buffer.slice(n.byteOffset, n.byteOffset + n.length);
    this.decryptBuffer(r).then((o) => {
      const l = new Uint8Array(o);
      s.set(l, 16), this.decrypter.isSync() || this.decryptAacSamples(e, t + 1, i);
    });
  }
  decryptAacSamples(e, t, i) {
    for (; ; t++) {
      if (t >= e.length) {
        i();
        return;
      }
      if (!(e[t].unit.length < 32) && (this.decryptAacSample(e, t, i), !this.decrypter.isSync()))
        return;
    }
  }
  // AVC - encrypt one 16 bytes block out of ten, starting from offset 32
  getAvcEncryptedData(e) {
    const t = Math.floor((e.length - 48) / 160) * 16 + 16, i = new Int8Array(t);
    let s = 0;
    for (let n = 32; n < e.length - 16; n += 160, s += 16)
      i.set(e.subarray(n, n + 16), s);
    return i;
  }
  getAvcDecryptedUnit(e, t) {
    const i = new Uint8Array(t);
    let s = 0;
    for (let n = 32; n < e.length - 16; n += 160, s += 16)
      e.set(i.subarray(s, s + 16), n);
    return e;
  }
  decryptAvcSample(e, t, i, s, n) {
    const r = Fi(n.data), o = this.getAvcEncryptedData(r);
    this.decryptBuffer(o.buffer).then((l) => {
      n.data = this.getAvcDecryptedUnit(r, l), this.decrypter.isSync() || this.decryptAvcSamples(e, t, i + 1, s);
    });
  }
  decryptAvcSamples(e, t, i, s) {
    if (e instanceof Uint8Array)
      throw new Error("Cannot decrypt samples of type Uint8Array");
    for (; ; t++, i = 0) {
      if (t >= e.length) {
        s();
        return;
      }
      const n = e[t].units;
      for (; !(i >= n.length); i++) {
        const r = n[i];
        if (!(r.data.length <= 48 || r.type !== 1 && r.type !== 5) && (this.decryptAvcSample(e, t, i, s, r), !this.decrypter.isSync()))
          return;
      }
    }
  }
}
const ee = 188;
class Te {
  constructor(e, t, i) {
    this.observer = void 0, this.config = void 0, this.typeSupported = void 0, this.sampleAes = null, this.pmtParsed = false, this.audioCodec = void 0, this.videoCodec = void 0, this._duration = 0, this._pmtId = -1, this._videoTrack = void 0, this._audioTrack = void 0, this._id3Track = void 0, this._txtTrack = void 0, this.aacOverFlow = null, this.remainderData = null, this.videoParser = void 0, this.observer = e, this.config = t, this.typeSupported = i, this.videoParser = new $r();
  }
  static probe(e) {
    const t = Te.syncOffset(e);
    return t > 0 && L.warn(`MPEG2-TS detected but first sync word found @ offset ${t}`), t !== -1;
  }
  static syncOffset(e) {
    const t = e.length;
    let i = Math.min(ee * 5, t - ee) + 1, s = 0;
    for (; s < i; ) {
      let n = false, r = -1, o = 0;
      for (let l = s; l < t; l += ee)
        if (e[l] === 71 && (t - l === ee || e[l + ee] === 71)) {
          if (o++, r === -1 && (r = l, r !== 0 && (i = Math.min(r + ee * 99, e.length - ee) + 1)), n || (n = At(e, l) === 0), n && o > 1 && (r === 0 && o > 2 || l + ee > i))
            return r;
        } else {
          if (o)
            return -1;
          break;
        }
      s++;
    }
    return -1;
  }
  /**
   * Creates a track model internal to demuxer used to drive remuxing input
   */
  static createTrack(e, t) {
    return {
      container: e === "video" || e === "audio" ? "video/mp2t" : void 0,
      type: e,
      id: Di[e],
      pid: -1,
      inputTimeScale: 9e4,
      sequenceNumber: 0,
      samples: [],
      dropped: 0,
      duration: e === "audio" ? t : void 0
    };
  }
  /**
   * Initializes a new init segment on the demuxer/remuxer interface. Needed for discontinuities/track-switches (or at stream start)
   * Resets all internal track instances of the demuxer.
   */
  resetInitSegment(e, t, i, s) {
    this.pmtParsed = false, this._pmtId = -1, this._videoTrack = Te.createTrack("video"), this._audioTrack = Te.createTrack("audio", s), this._id3Track = Te.createTrack("id3"), this._txtTrack = Te.createTrack("text"), this._audioTrack.segmentCodec = "aac", this.aacOverFlow = null, this.remainderData = null, this.audioCodec = t, this.videoCodec = i, this._duration = s;
  }
  resetTimeStamp() {
  }
  resetContiguity() {
    const {
      _audioTrack: e,
      _videoTrack: t,
      _id3Track: i
    } = this;
    e && (e.pesData = null), t && (t.pesData = null), i && (i.pesData = null), this.aacOverFlow = null, this.remainderData = null;
  }
  demux(e, t, i = false, s = false) {
    i || (this.sampleAes = null);
    let n;
    const r = this._videoTrack, o = this._audioTrack, l = this._id3Track, d = this._txtTrack;
    let u = r.pid, h = r.pesData, c = o.pid, f = l.pid, m = o.pesData, g = l.pesData, p = null, y = this.pmtParsed, v = this._pmtId, E = e.length;
    if (this.remainderData && (e = ce(this.remainderData, e), E = e.length, this.remainderData = null), E < ee && !s)
      return this.remainderData = e, {
        audioTrack: o,
        videoTrack: r,
        id3Track: l,
        textTrack: d
      };
    const b = Math.max(0, Te.syncOffset(e));
    E -= (E - b) % ee, E < e.byteLength && !s && (this.remainderData = new Uint8Array(e.buffer, E, e.buffer.byteLength - E));
    let S = 0;
    for (let A = b; A < E; A += ee)
      if (e[A] === 71) {
        const D = !!(e[A + 1] & 64), P = At(e, A), _ = (e[A + 3] & 48) >> 4;
        let C;
        if (_ > 1) {
          if (C = A + 5 + e[A + 4], C === A + ee)
            continue;
        } else
          C = A + 4;
        switch (P) {
          case u:
            D && (h && (n = De(h)) && this.videoParser.parseAVCPES(r, d, n, false, this._duration), h = {
              data: [],
              size: 0
            }), h && (h.data.push(e.subarray(C, A + ee)), h.size += A + ee - C);
            break;
          case c:
            if (D) {
              if (m && (n = De(m)))
                switch (o.segmentCodec) {
                  case "aac":
                    this.parseAACPES(o, n);
                    break;
                  case "mp3":
                    this.parseMPEGPES(o, n);
                    break;
                }
              m = {
                data: [],
                size: 0
              };
            }
            m && (m.data.push(e.subarray(C, A + ee)), m.size += A + ee - C);
            break;
          case f:
            D && (g && (n = De(g)) && this.parseID3PES(l, n), g = {
              data: [],
              size: 0
            }), g && (g.data.push(e.subarray(C, A + ee)), g.size += A + ee - C);
            break;
          case 0:
            D && (C += e[C] + 1), v = this._pmtId = Vr(e, C);
            break;
          case v: {
            D && (C += e[C] + 1);
            const $ = Hr(e, C, this.typeSupported, i, this.observer);
            u = $.videoPid, u > 0 && (r.pid = u, r.segmentCodec = $.segmentVideoCodec), c = $.audioPid, c > 0 && (o.pid = c, o.segmentCodec = $.segmentAudioCodec), f = $.id3Pid, f > 0 && (l.pid = f), p !== null && !y && (L.warn(`MPEG-TS PMT found at ${A} after unknown PID '${p}'. Backtracking to sync byte @${b} to parse all TS packets.`), p = null, A = b - 188), y = this.pmtParsed = true;
            break;
          }
          case 17:
          case 8191:
            break;
          default:
            p = P;
            break;
        }
      } else
        S++;
    S > 0 && Ze(this.observer, new Error(`Found ${S} TS packet/s that do not start with 0x47`)), r.pesData = h, o.pesData = m, l.pesData = g;
    const I = {
      audioTrack: o,
      videoTrack: r,
      id3Track: l,
      textTrack: d
    };
    return s && this.extractRemainingSamples(I), I;
  }
  flush() {
    const {
      remainderData: e
    } = this;
    this.remainderData = null;
    let t;
    return e ? t = this.demux(e, -1, false, true) : t = {
      videoTrack: this._videoTrack,
      audioTrack: this._audioTrack,
      id3Track: this._id3Track,
      textTrack: this._txtTrack
    }, this.extractRemainingSamples(t), this.sampleAes ? this.decrypt(t, this.sampleAes) : t;
  }
  extractRemainingSamples(e) {
    const {
      audioTrack: t,
      videoTrack: i,
      id3Track: s,
      textTrack: n
    } = e, r = i.pesData, o = t.pesData, l = s.pesData;
    let d;
    if (r && (d = De(r)) ? (this.videoParser.parseAVCPES(i, n, d, true, this._duration), i.pesData = null) : i.pesData = r, o && (d = De(o))) {
      switch (t.segmentCodec) {
        case "aac":
          this.parseAACPES(t, d);
          break;
        case "mp3":
          this.parseMPEGPES(t, d);
          break;
      }
      t.pesData = null;
    } else
      o != null && o.size && L.log("last AAC PES packet truncated,might overlap between fragments"), t.pesData = o;
    l && (d = De(l)) ? (this.parseID3PES(s, d), s.pesData = null) : s.pesData = l;
  }
  demuxSampleAes(e, t, i) {
    const s = this.demux(e, i, true, !this.config.progressive), n = this.sampleAes = new Gr(this.observer, this.config, t);
    return this.decrypt(s, n);
  }
  decrypt(e, t) {
    return new Promise((i) => {
      const {
        audioTrack: s,
        videoTrack: n
      } = e;
      s.samples && s.segmentCodec === "aac" ? t.decryptAacSamples(s.samples, 0, () => {
        n.samples ? t.decryptAvcSamples(n.samples, 0, 0, () => {
          i(e);
        }) : i(e);
      }) : n.samples && t.decryptAvcSamples(n.samples, 0, 0, () => {
        i(e);
      });
    });
  }
  destroy() {
    this._duration = 0;
  }
  parseAACPES(e, t) {
    let i = 0;
    const s = this.aacOverFlow;
    let n = t.data;
    if (s) {
      this.aacOverFlow = null;
      const h = s.missing, c = s.sample.unit.byteLength;
      if (h === -1)
        n = ce(s.sample.unit, n);
      else {
        const f = c - h;
        s.sample.unit.set(n.subarray(0, h), f), e.samples.push(s.sample), i = s.missing;
      }
    }
    let r, o;
    for (r = i, o = n.length; r < o - 1 && !Je(n, r); r++)
      ;
    if (r !== i) {
      let h;
      const c = r < o - 1;
      if (c ? h = `AAC PES did not start with ADTS header,offset:${r}` : h = "No ADTS header found in AAC PES", Ze(this.observer, new Error(h), c), !c)
        return;
    }
    Qi(e, this.observer, n, r, this.audioCodec);
    let l;
    if (t.pts !== void 0)
      l = t.pts;
    else if (s) {
      const h = Ji(e.samplerate);
      l = s.sample.pts + h;
    } else {
      L.warn("[tsdemuxer]: AAC PES unknown PTS");
      return;
    }
    let d = 0, u;
    for (; r < o; )
      if (u = Zi(e, n, r, l, d), r += u.length, u.missing) {
        this.aacOverFlow = u;
        break;
      } else
        for (d++; r < o - 1 && !Je(n, r); r++)
          ;
  }
  parseMPEGPES(e, t) {
    const i = t.data, s = i.length;
    let n = 0, r = 0;
    const o = t.pts;
    if (o === void 0) {
      L.warn("[tsdemuxer]: MPEG PES unknown PTS");
      return;
    }
    for (; r < s; )
      if (is(i, r)) {
        const l = es(e, i, r, o, n);
        if (l)
          r += l.length, n++;
        else
          break;
      } else
        r++;
  }
  parseAC3PES(e, t) {
  }
  parseID3PES(e, t) {
    if (t.pts === void 0) {
      L.warn("[tsdemuxer]: ID3 PES unknown PTS");
      return;
    }
    const i = ae({}, t, {
      type: this._videoTrack ? he.emsg : he.audioId3,
      duration: Number.POSITIVE_INFINITY
    });
    e.samples.push(i);
  }
}
function At(a, e) {
  return ((a[e + 1] & 31) << 8) + a[e + 2];
}
function Vr(a, e) {
  return (a[e + 10] & 31) << 8 | a[e + 11];
}
function Hr(a, e, t, i, s) {
  const n = {
    audioPid: -1,
    videoPid: -1,
    id3Pid: -1,
    segmentVideoCodec: "avc",
    segmentAudioCodec: "aac"
  }, r = (a[e + 1] & 15) << 8 | a[e + 2], o = e + 3 + r - 4, l = (a[e + 10] & 15) << 8 | a[e + 11];
  for (e += 12 + l; e < o; ) {
    const d = At(a, e), u = (a[e + 3] & 15) << 8 | a[e + 4];
    switch (a[e]) {
      case 207:
        if (!i) {
          ft("ADTS AAC");
          break;
        }
      /* falls through */
      case 15:
        n.audioPid === -1 && (n.audioPid = d);
        break;
      // Packetized metadata (ID3)
      case 21:
        n.id3Pid === -1 && (n.id3Pid = d);
        break;
      case 219:
        if (!i) {
          ft("H.264");
          break;
        }
      /* falls through */
      case 27:
        n.videoPid === -1 && (n.videoPid = d, n.segmentVideoCodec = "avc");
        break;
      // ISO/IEC 11172-3 (MPEG-1 audio)
      // or ISO/IEC 13818-3 (MPEG-2 halved sample rate audio)
      case 3:
      case 4:
        !t.mpeg && !t.mp3 ? L.log("MPEG audio found, not supported in this browser") : n.audioPid === -1 && (n.audioPid = d, n.segmentAudioCodec = "mp3");
        break;
      case 193:
        if (!i) {
          ft("AC-3");
          break;
        }
      /* falls through */
      case 129:
        L.warn("AC-3 in M2TS support not included in build");
        break;
      case 6:
        if (n.audioPid === -1 && u > 0) {
          let h = e + 5, c = u;
          for (; c > 2; ) {
            switch (a[h]) {
              case 106:
                L.warn("AC-3 in M2TS support not included in build");
                break;
            }
            const m = a[h + 1] + 2;
            h += m, c -= m;
          }
        }
        break;
      case 194:
      // SAMPLE-AES EC3
      /* falls through */
      case 135:
        return Ze(s, new Error("Unsupported EC-3 in M2TS found")), n;
      case 36:
        return Ze(s, new Error("Unsupported HEVC in M2TS found")), n;
    }
    e += u + 5;
  }
  return n;
}
function Ze(a, e, t) {
  L.warn(`parsing error: ${e.message}`), a.emit(x.ERROR, x.ERROR, {
    type: K.MEDIA_ERROR,
    details: R.FRAG_PARSING_ERROR,
    fatal: false,
    levelRetry: t,
    error: e,
    reason: e.message
  });
}
function ft(a) {
  L.log(`${a} with AES-128-CBC encryption found in unencrypted stream`);
}
function De(a) {
  let e = 0, t, i, s, n, r;
  const o = a.data;
  if (!a || a.size === 0)
    return null;
  for (; o[0].length < 19 && o.length > 1; )
    o[0] = ce(o[0], o[1]), o.splice(1, 1);
  if (t = o[0], (t[0] << 16) + (t[1] << 8) + t[2] === 1) {
    if (i = (t[4] << 8) + t[5], i && i > a.size - 6)
      return null;
    const d = t[7];
    d & 192 && (n = (t[9] & 14) * 536870912 + // 1 << 29
    (t[10] & 255) * 4194304 + // 1 << 22
    (t[11] & 254) * 16384 + // 1 << 14
    (t[12] & 255) * 128 + // 1 << 7
    (t[13] & 254) / 2, d & 64 ? (r = (t[14] & 14) * 536870912 + // 1 << 29
    (t[15] & 255) * 4194304 + // 1 << 22
    (t[16] & 254) * 16384 + // 1 << 14
    (t[17] & 255) * 128 + // 1 << 7
    (t[18] & 254) / 2, n - r > 60 * 9e4 && (L.warn(`${Math.round((n - r) / 9e4)}s delta between PTS and DTS, align them`), n = r)) : r = n), s = t[8];
    let u = s + 9;
    if (a.size <= u)
      return null;
    a.size -= u;
    const h = new Uint8Array(a.size);
    for (let c = 0, f = o.length; c < f; c++) {
      t = o[c];
      let m = t.byteLength;
      if (u)
        if (u > m) {
          u -= m;
          continue;
        } else
          t = t.subarray(u), m -= u, u = 0;
      h.set(t, e), e += m;
    }
    return i && (i -= s + 3), {
      data: h,
      pts: n,
      dts: r,
      len: i
    };
  }
  return null;
}
class Kr extends qi {
  resetInitSegment(e, t, i, s) {
    super.resetInitSegment(e, t, i, s), this._audioTrack = {
      container: "audio/mpeg",
      type: "audio",
      id: 2,
      pid: -1,
      sequenceNumber: 0,
      segmentCodec: "mp3",
      samples: [],
      manifestCodec: t,
      duration: s,
      inputTimeScale: 9e4,
      dropped: 0
    };
  }
  static probe(e) {
    if (!e)
      return false;
    const t = Ke(e, 0);
    let i = t?.length || 0;
    if (t && e[i] === 11 && e[i + 1] === 119 && Ri(t) !== void 0 && // check the bsid to confirm ac-3 or ec-3 (not mp3)
    Br(e, i) <= 16)
      return false;
    for (let s = e.length; i < s; i++)
      if (ss(e, i))
        return L.log("MPEG Audio sync word found !"), true;
    return false;
  }
  canParse(e, t) {
    return Or(e, t);
  }
  appendFrame(e, t, i) {
    if (this.basePTS !== null)
      return es(e, t, i, this.basePTS, this.frameIndex);
  }
}
class mi {
  static getSilentFrame(e, t) {
    switch (e) {
      case "mp4a.40.2":
        if (t === 1)
          return new Uint8Array([0, 200, 0, 128, 35, 128]);
        if (t === 2)
          return new Uint8Array([33, 0, 73, 144, 2, 25, 0, 35, 128]);
        if (t === 3)
          return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 142]);
        if (t === 4)
          return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 128, 44, 128, 8, 2, 56]);
        if (t === 5)
          return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 56]);
        if (t === 6)
          return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 0, 178, 0, 32, 8, 224]);
        break;
      // handle HE-AAC below (mp4a.40.5 / mp4a.40.29)
      default:
        if (t === 1)
          return new Uint8Array([1, 64, 34, 128, 163, 78, 230, 128, 186, 8, 0, 0, 0, 28, 6, 241, 193, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
        if (t === 2)
          return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
        if (t === 3)
          return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
        break;
    }
  }
}
const Ee = Math.pow(2, 32) - 1;
class T {
  static init() {
    T.types = {
      avc1: [],
      // codingname
      avcC: [],
      btrt: [],
      dinf: [],
      dref: [],
      esds: [],
      ftyp: [],
      hdlr: [],
      mdat: [],
      mdhd: [],
      mdia: [],
      mfhd: [],
      minf: [],
      moof: [],
      moov: [],
      mp4a: [],
      ".mp3": [],
      dac3: [],
      "ac-3": [],
      mvex: [],
      mvhd: [],
      pasp: [],
      sdtp: [],
      stbl: [],
      stco: [],
      stsc: [],
      stsd: [],
      stsz: [],
      stts: [],
      tfdt: [],
      tfhd: [],
      traf: [],
      trak: [],
      trun: [],
      trex: [],
      tkhd: [],
      vmhd: [],
      smhd: []
    };
    let e;
    for (e in T.types)
      T.types.hasOwnProperty(e) && (T.types[e] = [e.charCodeAt(0), e.charCodeAt(1), e.charCodeAt(2), e.charCodeAt(3)]);
    const t = new Uint8Array([
      0,
      // version 0
      0,
      0,
      0,
      // flags
      0,
      0,
      0,
      0,
      // pre_defined
      118,
      105,
      100,
      101,
      // handler_type: 'vide'
      0,
      0,
      0,
      0,
      // reserved
      0,
      0,
      0,
      0,
      // reserved
      0,
      0,
      0,
      0,
      // reserved
      86,
      105,
      100,
      101,
      111,
      72,
      97,
      110,
      100,
      108,
      101,
      114,
      0
      // name: 'VideoHandler'
    ]), i = new Uint8Array([
      0,
      // version 0
      0,
      0,
      0,
      // flags
      0,
      0,
      0,
      0,
      // pre_defined
      115,
      111,
      117,
      110,
      // handler_type: 'soun'
      0,
      0,
      0,
      0,
      // reserved
      0,
      0,
      0,
      0,
      // reserved
      0,
      0,
      0,
      0,
      // reserved
      83,
      111,
      117,
      110,
      100,
      72,
      97,
      110,
      100,
      108,
      101,
      114,
      0
      // name: 'SoundHandler'
    ]);
    T.HDLR_TYPES = {
      video: t,
      audio: i
    };
    const s = new Uint8Array([
      0,
      // version 0
      0,
      0,
      0,
      // flags
      0,
      0,
      0,
      1,
      // entry_count
      0,
      0,
      0,
      12,
      // entry_size
      117,
      114,
      108,
      32,
      // 'url' type
      0,
      // version 0
      0,
      0,
      1
      // entry_flags
    ]), n = new Uint8Array([
      0,
      // version
      0,
      0,
      0,
      // flags
      0,
      0,
      0,
      0
      // entry_count
    ]);
    T.STTS = T.STSC = T.STCO = n, T.STSZ = new Uint8Array([
      0,
      // version
      0,
      0,
      0,
      // flags
      0,
      0,
      0,
      0,
      // sample_size
      0,
      0,
      0,
      0
      // sample_count
    ]), T.VMHD = new Uint8Array([
      0,
      // version
      0,
      0,
      1,
      // flags
      0,
      0,
      // graphicsmode
      0,
      0,
      0,
      0,
      0,
      0
      // opcolor
    ]), T.SMHD = new Uint8Array([
      0,
      // version
      0,
      0,
      0,
      // flags
      0,
      0,
      // balance
      0,
      0
      // reserved
    ]), T.STSD = new Uint8Array([
      0,
      // version 0
      0,
      0,
      0,
      // flags
      0,
      0,
      0,
      1
    ]);
    const r = new Uint8Array([105, 115, 111, 109]), o = new Uint8Array([97, 118, 99, 49]), l = new Uint8Array([0, 0, 0, 1]);
    T.FTYP = T.box(T.types.ftyp, r, l, r, o), T.DINF = T.box(T.types.dinf, T.box(T.types.dref, s));
  }
  static box(e, ...t) {
    let i = 8, s = t.length;
    const n = s;
    for (; s--; )
      i += t[s].byteLength;
    const r = new Uint8Array(i);
    for (r[0] = i >> 24 & 255, r[1] = i >> 16 & 255, r[2] = i >> 8 & 255, r[3] = i & 255, r.set(e, 4), s = 0, i = 8; s < n; s++)
      r.set(t[s], i), i += t[s].byteLength;
    return r;
  }
  static hdlr(e) {
    return T.box(T.types.hdlr, T.HDLR_TYPES[e]);
  }
  static mdat(e) {
    return T.box(T.types.mdat, e);
  }
  static mdhd(e, t) {
    t *= e;
    const i = Math.floor(t / (Ee + 1)), s = Math.floor(t % (Ee + 1));
    return T.box(T.types.mdhd, new Uint8Array([
      1,
      // version 1
      0,
      0,
      0,
      // flags
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      2,
      // creation_time
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      3,
      // modification_time
      e >> 24 & 255,
      e >> 16 & 255,
      e >> 8 & 255,
      e & 255,
      // timescale
      i >> 24,
      i >> 16 & 255,
      i >> 8 & 255,
      i & 255,
      s >> 24,
      s >> 16 & 255,
      s >> 8 & 255,
      s & 255,
      85,
      196,
      // 'und' language (undetermined)
      0,
      0
    ]));
  }
  static mdia(e) {
    return T.box(T.types.mdia, T.mdhd(e.timescale, e.duration), T.hdlr(e.type), T.minf(e));
  }
  static mfhd(e) {
    return T.box(T.types.mfhd, new Uint8Array([
      0,
      0,
      0,
      0,
      // flags
      e >> 24,
      e >> 16 & 255,
      e >> 8 & 255,
      e & 255
      // sequence_number
    ]));
  }
  static minf(e) {
    return e.type === "audio" ? T.box(T.types.minf, T.box(T.types.smhd, T.SMHD), T.DINF, T.stbl(e)) : T.box(T.types.minf, T.box(T.types.vmhd, T.VMHD), T.DINF, T.stbl(e));
  }
  static moof(e, t, i) {
    return T.box(T.types.moof, T.mfhd(e), T.traf(i, t));
  }
  static moov(e) {
    let t = e.length;
    const i = [];
    for (; t--; )
      i[t] = T.trak(e[t]);
    return T.box.apply(null, [T.types.moov, T.mvhd(e[0].timescale, e[0].duration)].concat(i).concat(T.mvex(e)));
  }
  static mvex(e) {
    let t = e.length;
    const i = [];
    for (; t--; )
      i[t] = T.trex(e[t]);
    return T.box.apply(null, [T.types.mvex, ...i]);
  }
  static mvhd(e, t) {
    t *= e;
    const i = Math.floor(t / (Ee + 1)), s = Math.floor(t % (Ee + 1)), n = new Uint8Array([
      1,
      // version 1
      0,
      0,
      0,
      // flags
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      2,
      // creation_time
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      3,
      // modification_time
      e >> 24 & 255,
      e >> 16 & 255,
      e >> 8 & 255,
      e & 255,
      // timescale
      i >> 24,
      i >> 16 & 255,
      i >> 8 & 255,
      i & 255,
      s >> 24,
      s >> 16 & 255,
      s >> 8 & 255,
      s & 255,
      0,
      1,
      0,
      0,
      // 1.0 rate
      1,
      0,
      // 1.0 volume
      0,
      0,
      // reserved
      0,
      0,
      0,
      0,
      // reserved
      0,
      0,
      0,
      0,
      // reserved
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      64,
      0,
      0,
      0,
      // transformation: unity matrix
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      // pre_defined
      255,
      255,
      255,
      255
      // next_track_ID
    ]);
    return T.box(T.types.mvhd, n);
  }
  static sdtp(e) {
    const t = e.samples || [], i = new Uint8Array(4 + t.length);
    let s, n;
    for (s = 0; s < t.length; s++)
      n = t[s].flags, i[s + 4] = n.dependsOn << 4 | n.isDependedOn << 2 | n.hasRedundancy;
    return T.box(T.types.sdtp, i);
  }
  static stbl(e) {
    return T.box(T.types.stbl, T.stsd(e), T.box(T.types.stts, T.STTS), T.box(T.types.stsc, T.STSC), T.box(T.types.stsz, T.STSZ), T.box(T.types.stco, T.STCO));
  }
  static avc1(e) {
    let t = [], i = [], s, n, r;
    for (s = 0; s < e.sps.length; s++)
      n = e.sps[s], r = n.byteLength, t.push(r >>> 8 & 255), t.push(r & 255), t = t.concat(Array.prototype.slice.call(n));
    for (s = 0; s < e.pps.length; s++)
      n = e.pps[s], r = n.byteLength, i.push(r >>> 8 & 255), i.push(r & 255), i = i.concat(Array.prototype.slice.call(n));
    const o = T.box(T.types.avcC, new Uint8Array([
      1,
      // version
      t[3],
      // profile
      t[4],
      // profile compat
      t[5],
      // level
      255,
      // lengthSizeMinusOne, hard-coded to 4 bytes
      224 | e.sps.length
      // 3bit reserved (111) + numOfSequenceParameterSets
    ].concat(t).concat([
      e.pps.length
      // numOfPictureParameterSets
    ]).concat(i))), l = e.width, d = e.height, u = e.pixelRatio[0], h = e.pixelRatio[1];
    return T.box(
      T.types.avc1,
      new Uint8Array([
        0,
        0,
        0,
        // reserved
        0,
        0,
        0,
        // reserved
        0,
        1,
        // data_reference_index
        0,
        0,
        // pre_defined
        0,
        0,
        // reserved
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        // pre_defined
        l >> 8 & 255,
        l & 255,
        // width
        d >> 8 & 255,
        d & 255,
        // height
        0,
        72,
        0,
        0,
        // horizresolution
        0,
        72,
        0,
        0,
        // vertresolution
        0,
        0,
        0,
        0,
        // reserved
        0,
        1,
        // frame_count
        18,
        100,
        97,
        105,
        108,
        // dailymotion/hls.js
        121,
        109,
        111,
        116,
        105,
        111,
        110,
        47,
        104,
        108,
        115,
        46,
        106,
        115,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        // compressorname
        0,
        24,
        // depth = 24
        17,
        17
      ]),
      // pre_defined = -1
      o,
      T.box(T.types.btrt, new Uint8Array([
        0,
        28,
        156,
        128,
        // bufferSizeDB
        0,
        45,
        198,
        192,
        // maxBitrate
        0,
        45,
        198,
        192
      ])),
      // avgBitrate
      T.box(T.types.pasp, new Uint8Array([
        u >> 24,
        // hSpacing
        u >> 16 & 255,
        u >> 8 & 255,
        u & 255,
        h >> 24,
        // vSpacing
        h >> 16 & 255,
        h >> 8 & 255,
        h & 255
      ]))
    );
  }
  static esds(e) {
    const t = e.config.length;
    return new Uint8Array([
      0,
      // version 0
      0,
      0,
      0,
      // flags
      3,
      // descriptor_type
      23 + t,
      // length
      0,
      1,
      // es_id
      0,
      // stream_priority
      4,
      // descriptor_type
      15 + t,
      // length
      64,
      // codec : mpeg4_audio
      21,
      // stream_type
      0,
      0,
      0,
      // buffer_size
      0,
      0,
      0,
      0,
      // maxBitrate
      0,
      0,
      0,
      0,
      // avgBitrate
      5
      // descriptor_type
    ].concat([t]).concat(e.config).concat([6, 1, 2]));
  }
  static audioStsd(e) {
    const t = e.samplerate;
    return new Uint8Array([
      0,
      0,
      0,
      // reserved
      0,
      0,
      0,
      // reserved
      0,
      1,
      // data_reference_index
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      // reserved
      0,
      e.channelCount,
      // channelcount
      0,
      16,
      // sampleSize:16bits
      0,
      0,
      0,
      0,
      // reserved2
      t >> 8 & 255,
      t & 255,
      //
      0,
      0
    ]);
  }
  static mp4a(e) {
    return T.box(T.types.mp4a, T.audioStsd(e), T.box(T.types.esds, T.esds(e)));
  }
  static mp3(e) {
    return T.box(T.types[".mp3"], T.audioStsd(e));
  }
  static ac3(e) {
    return T.box(T.types["ac-3"], T.audioStsd(e), T.box(T.types.dac3, e.config));
  }
  static stsd(e) {
    return e.type === "audio" ? e.segmentCodec === "mp3" && e.codec === "mp3" ? T.box(T.types.stsd, T.STSD, T.mp3(e)) : e.segmentCodec === "ac3" ? T.box(T.types.stsd, T.STSD, T.ac3(e)) : T.box(T.types.stsd, T.STSD, T.mp4a(e)) : T.box(T.types.stsd, T.STSD, T.avc1(e));
  }
  static tkhd(e) {
    const t = e.id, i = e.duration * e.timescale, s = e.width, n = e.height, r = Math.floor(i / (Ee + 1)), o = Math.floor(i % (Ee + 1));
    return T.box(T.types.tkhd, new Uint8Array([
      1,
      // version 1
      0,
      0,
      7,
      // flags
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      2,
      // creation_time
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      3,
      // modification_time
      t >> 24 & 255,
      t >> 16 & 255,
      t >> 8 & 255,
      t & 255,
      // track_ID
      0,
      0,
      0,
      0,
      // reserved
      r >> 24,
      r >> 16 & 255,
      r >> 8 & 255,
      r & 255,
      o >> 24,
      o >> 16 & 255,
      o >> 8 & 255,
      o & 255,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      // reserved
      0,
      0,
      // layer
      0,
      0,
      // alternate_group
      0,
      0,
      // non-audio track volume
      0,
      0,
      // reserved
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      64,
      0,
      0,
      0,
      // transformation: unity matrix
      s >> 8 & 255,
      s & 255,
      0,
      0,
      // width
      n >> 8 & 255,
      n & 255,
      0,
      0
      // height
    ]));
  }
  static traf(e, t) {
    const i = T.sdtp(e), s = e.id, n = Math.floor(t / (Ee + 1)), r = Math.floor(t % (Ee + 1));
    return T.box(
      T.types.traf,
      T.box(T.types.tfhd, new Uint8Array([
        0,
        // version 0
        0,
        0,
        0,
        // flags
        s >> 24,
        s >> 16 & 255,
        s >> 8 & 255,
        s & 255
        // track_ID
      ])),
      T.box(T.types.tfdt, new Uint8Array([
        1,
        // version 1
        0,
        0,
        0,
        // flags
        n >> 24,
        n >> 16 & 255,
        n >> 8 & 255,
        n & 255,
        r >> 24,
        r >> 16 & 255,
        r >> 8 & 255,
        r & 255
      ])),
      T.trun(e, i.length + 16 + // tfhd
      20 + // tfdt
      8 + // traf header
      16 + // mfhd
      8 + // moof header
      8),
      // mdat header
      i
    );
  }
  /**
   * Generate a track box.
   * @param track a track definition
   */
  static trak(e) {
    return e.duration = e.duration || 4294967295, T.box(T.types.trak, T.tkhd(e), T.mdia(e));
  }
  static trex(e) {
    const t = e.id;
    return T.box(T.types.trex, new Uint8Array([
      0,
      // version 0
      0,
      0,
      0,
      // flags
      t >> 24,
      t >> 16 & 255,
      t >> 8 & 255,
      t & 255,
      // track_ID
      0,
      0,
      0,
      1,
      // default_sample_description_index
      0,
      0,
      0,
      0,
      // default_sample_duration
      0,
      0,
      0,
      0,
      // default_sample_size
      0,
      1,
      0,
      1
      // default_sample_flags
    ]));
  }
  static trun(e, t) {
    const i = e.samples || [], s = i.length, n = 12 + 16 * s, r = new Uint8Array(n);
    let o, l, d, u, h, c;
    for (t += 8 + n, r.set([
      e.type === "video" ? 1 : 0,
      // version 1 for video with signed-int sample_composition_time_offset
      0,
      15,
      1,
      // flags
      s >>> 24 & 255,
      s >>> 16 & 255,
      s >>> 8 & 255,
      s & 255,
      // sample_count
      t >>> 24 & 255,
      t >>> 16 & 255,
      t >>> 8 & 255,
      t & 255
      // data_offset
    ], 0), o = 0; o < s; o++)
      l = i[o], d = l.duration, u = l.size, h = l.flags, c = l.cts, r.set([
        d >>> 24 & 255,
        d >>> 16 & 255,
        d >>> 8 & 255,
        d & 255,
        // sample_duration
        u >>> 24 & 255,
        u >>> 16 & 255,
        u >>> 8 & 255,
        u & 255,
        // sample_size
        h.isLeading << 2 | h.dependsOn,
        h.isDependedOn << 6 | h.hasRedundancy << 4 | h.paddingValue << 1 | h.isNonSync,
        h.degradPrio & 61440,
        h.degradPrio & 15,
        // sample_flags
        c >>> 24 & 255,
        c >>> 16 & 255,
        c >>> 8 & 255,
        c & 255
        // sample_composition_time_offset
      ], 12 + 16 * o);
    return T.box(T.types.trun, r);
  }
  static initSegment(e) {
    T.types || T.init();
    const t = T.moov(e);
    return ce(T.FTYP, t);
  }
}
T.types = void 0;
T.HDLR_TYPES = void 0;
T.STTS = void 0;
T.STSC = void 0;
T.STCO = void 0;
T.STSZ = void 0;
T.VMHD = void 0;
T.SMHD = void 0;
T.STSD = void 0;
T.FTYP = void 0;
T.DINF = void 0;
const Wr = 9e4;
function Yr(a, e, t = 1, i = false) {
  const s = a * e * t;
  return i ? Math.round(s) : s;
}
function Pe(a, e = false) {
  return Yr(a, 1e3, 1 / Wr, e);
}
const jr = 10 * 1e3, gi = 1024, qr = 1152, zr = 1536;
let Ce = null, mt = null;
class gt {
  constructor(e, t, i, s = "") {
    if (this.observer = void 0, this.config = void 0, this.typeSupported = void 0, this.ISGenerated = false, this._initPTS = null, this._initDTS = null, this.nextAvcDts = null, this.nextAudioPts = null, this.videoSampleDuration = null, this.isAudioContiguous = false, this.isVideoContiguous = false, this.videoTrackConfig = void 0, this.observer = e, this.config = t, this.typeSupported = i, this.ISGenerated = false, Ce === null) {
      const r = (navigator.userAgent || "").match(/Chrome\/(\d+)/i);
      Ce = r ? parseInt(r[1]) : 0;
    }
    if (mt === null) {
      const n = navigator.userAgent.match(/Safari\/(\d+)/i);
      mt = n ? parseInt(n[1]) : 0;
    }
  }
  destroy() {
    this.config = this.videoTrackConfig = this._initPTS = this._initDTS = null;
  }
  resetTimeStamp(e) {
    L.log("[mp4-remuxer]: initPTS & initDTS reset"), this._initPTS = this._initDTS = e;
  }
  resetNextTimestamp() {
    L.log("[mp4-remuxer]: reset next timestamp"), this.isVideoContiguous = false, this.isAudioContiguous = false;
  }
  resetInitSegment() {
    L.log("[mp4-remuxer]: ISGenerated flag reset"), this.ISGenerated = false, this.videoTrackConfig = void 0;
  }
  getVideoStartPts(e) {
    let t = false;
    const i = e[0].pts, s = e.reduce((n, r) => {
      let o = r.pts, l = o - n;
      return l < -4294967296 && (t = true, o = ue(o, i), l = o - n), l > 0 ? n : o;
    }, i);
    return t && L.debug("PTS rollover detected"), s;
  }
  remux(e, t, i, s, n, r, o, l) {
    let d, u, h, c, f, m, g = n, p = n;
    const y = e.pid > -1, v = t.pid > -1, E = t.samples.length, b = e.samples.length > 0, S = o && E > 0 || E > 1;
    if ((!y || b) && (!v || S) || this.ISGenerated || o) {
      if (this.ISGenerated) {
        var A, D, P, _;
        const U = this.videoTrackConfig;
        U && (t.width !== U.width || t.height !== U.height || ((A = t.pixelRatio) == null ? void 0 : A[0]) !== ((D = U.pixelRatio) == null ? void 0 : D[0]) || ((P = t.pixelRatio) == null ? void 0 : P[1]) !== ((_ = U.pixelRatio) == null ? void 0 : _[1])) && this.resetInitSegment();
      } else
        h = this.generateIS(e, t, n, r);
      const C = this.isVideoContiguous;
      let $ = -1, M;
      if (S && ($ = Xr(t.samples), !C && this.config.forceKeyFrameOnDiscontinuity))
        if (m = true, $ > 0) {
          L.warn(`[mp4-remuxer]: Dropped ${$} out of ${E} video samples due to a missing keyframe`);
          const U = this.getVideoStartPts(t.samples);
          t.samples = t.samples.slice($), t.dropped += $, p += (t.samples[0].pts - U) / t.inputTimeScale, M = p;
        } else $ === -1 && (L.warn(`[mp4-remuxer]: No keyframe found out of ${E} video samples`), m = false);
      if (this.ISGenerated) {
        if (b && S) {
          const U = this.getVideoStartPts(t.samples), V = (ue(e.samples[0].pts, U) - U) / t.inputTimeScale;
          g += Math.max(0, V), p += Math.max(0, -V);
        }
        if (b) {
          if (e.samplerate || (L.warn("[mp4-remuxer]: regenerate InitSegment as audio detected"), h = this.generateIS(e, t, n, r)), u = this.remuxAudio(e, g, this.isAudioContiguous, r, v || S || l === q.AUDIO ? p : void 0), S) {
            const U = u ? u.endPTS - u.startPTS : 0;
            t.inputTimeScale || (L.warn("[mp4-remuxer]: regenerate InitSegment as video detected"), h = this.generateIS(e, t, n, r)), d = this.remuxVideo(t, p, C, U);
          }
        } else S && (d = this.remuxVideo(t, p, C, 0));
        d && (d.firstKeyFrame = $, d.independent = $ !== -1, d.firstKeyFramePTS = M);
      }
    }
    return this.ISGenerated && this._initPTS && this._initDTS && (i.samples.length && (f = ns(i, n, this._initPTS, this._initDTS)), s.samples.length && (c = rs(s, n, this._initPTS))), {
      audio: u,
      video: d,
      initSegment: h,
      independent: m,
      text: c,
      id3: f
    };
  }
  generateIS(e, t, i, s) {
    const n = e.samples, r = t.samples, o = this.typeSupported, l = {}, d = this._initPTS;
    let u = !d || s, h = "audio/mp4", c, f, m;
    if (u && (c = f = 1 / 0), e.config && n.length) {
      switch (e.timescale = e.samplerate, e.segmentCodec) {
        case "mp3":
          o.mpeg ? (h = "audio/mpeg", e.codec = "") : o.mp3 && (e.codec = "mp3");
          break;
        case "ac3":
          e.codec = "ac-3";
          break;
      }
      l.audio = {
        id: "audio",
        container: h,
        codec: e.codec,
        initSegment: e.segmentCodec === "mp3" && o.mpeg ? new Uint8Array(0) : T.initSegment([e]),
        metadata: {
          channelCount: e.channelCount
        }
      }, u && (m = e.inputTimeScale, !d || m !== d.timescale ? c = f = n[0].pts - Math.round(m * i) : u = false);
    }
    if (t.sps && t.pps && r.length) {
      if (t.timescale = t.inputTimeScale, l.video = {
        id: "main",
        container: "video/mp4",
        codec: t.codec,
        initSegment: T.initSegment([t]),
        metadata: {
          width: t.width,
          height: t.height
        }
      }, u)
        if (m = t.inputTimeScale, !d || m !== d.timescale) {
          const g = this.getVideoStartPts(r), p = Math.round(m * i);
          f = Math.min(f, ue(r[0].dts, g) - p), c = Math.min(c, g - p);
        } else
          u = false;
      this.videoTrackConfig = {
        width: t.width,
        height: t.height,
        pixelRatio: t.pixelRatio
      };
    }
    if (Object.keys(l).length)
      return this.ISGenerated = true, u ? (this._initPTS = {
        baseTime: c,
        timescale: m
      }, this._initDTS = {
        baseTime: f,
        timescale: m
      }) : c = m = void 0, {
        tracks: l,
        initPTS: c,
        timescale: m
      };
  }
  remuxVideo(e, t, i, s) {
    const n = e.inputTimeScale, r = e.samples, o = [], l = r.length, d = this._initPTS;
    let u = this.nextAvcDts, h = 8, c = this.videoSampleDuration, f, m, g = Number.POSITIVE_INFINITY, p = Number.NEGATIVE_INFINITY, y = false;
    if (!i || u === null) {
      const O = t * n, F = r[0].pts - ue(r[0].dts, r[0].pts);
      Ce && u !== null && Math.abs(O - F - u) < 15e3 ? i = true : u = O - F;
    }
    const v = d.baseTime * n / d.timescale;
    for (let O = 0; O < l; O++) {
      const F = r[O];
      F.pts = ue(F.pts - v, u), F.dts = ue(F.dts - v, u), F.dts < r[O > 0 ? O - 1 : O].dts && (y = true);
    }
    y && r.sort(function(O, F) {
      const Y = O.dts - F.dts, H = O.pts - F.pts;
      return Y || H;
    }), f = r[0].dts, m = r[r.length - 1].dts;
    const E = m - f, b = E ? Math.round(E / (l - 1)) : c || e.inputTimeScale / 30;
    if (i) {
      const O = f - u, F = O > b, Y = O < -1;
      if ((F || Y) && (F ? L.warn(`AVC: ${Pe(O, true)} ms (${O}dts) hole between fragments detected at ${t.toFixed(3)}`) : L.warn(`AVC: ${Pe(-O, true)} ms (${O}dts) overlapping between fragments detected at ${t.toFixed(3)}`), !Y || u >= r[0].pts || Ce)) {
        f = u;
        const H = r[0].pts - O;
        if (F)
          r[0].dts = f, r[0].pts = H;
        else
          for (let z = 0; z < r.length && !(r[z].dts > H); z++)
            r[z].dts -= O, r[z].pts -= O;
        L.log(`Video: Initial PTS/DTS adjusted: ${Pe(H, true)}/${Pe(f, true)}, delta: ${Pe(O, true)} ms`);
      }
    }
    f = Math.max(0, f);
    let S = 0, I = 0, A = f;
    for (let O = 0; O < l; O++) {
      const F = r[O], Y = F.units, H = Y.length;
      let z = 0;
      for (let se = 0; se < H; se++)
        z += Y[se].data.length;
      I += z, S += H, F.length = z, F.dts < A ? (F.dts = A, A += b / 4 | 0 || 1) : A = F.dts, g = Math.min(F.pts, g), p = Math.max(F.pts, p);
    }
    m = r[l - 1].dts;
    const D = I + 4 * S + 8;
    let P;
    try {
      P = new Uint8Array(D);
    } catch (O) {
      this.observer.emit(x.ERROR, x.ERROR, {
        type: K.MUX_ERROR,
        details: R.REMUX_ALLOC_ERROR,
        fatal: false,
        error: O,
        bytes: D,
        reason: `fail allocating video mdat ${D}`
      });
      return;
    }
    const _ = new DataView(P.buffer);
    _.setUint32(0, D), P.set(T.types.mdat, 4);
    let C = false, $ = Number.POSITIVE_INFINITY, M = Number.POSITIVE_INFINITY, U = Number.NEGATIVE_INFINITY, B = Number.NEGATIVE_INFINITY;
    for (let O = 0; O < l; O++) {
      const F = r[O], Y = F.units;
      let H = 0;
      for (let le = 0, ne = Y.length; le < ne; le++) {
        const Re = Y[le], we = Re.data, it = Re.data.byteLength;
        _.setUint32(h, it), h += 4, P.set(we, h), h += it, H += 4 + it;
      }
      let z;
      if (O < l - 1)
        c = r[O + 1].dts - F.dts, z = r[O + 1].pts - F.pts;
      else {
        const le = this.config, ne = O > 0 ? F.dts - r[O - 1].dts : b;
        if (z = O > 0 ? F.pts - r[O - 1].pts : b, le.stretchShortVideoTrack && this.nextAudioPts !== null) {
          const Re = Math.floor(le.maxBufferHole * n), we = (s ? g + s * n : this.nextAudioPts) - F.pts;
          we > Re ? (c = we - ne, c < 0 ? c = ne : C = true, L.log(`[mp4-remuxer]: It is approximately ${we / 90} ms to the next segment; using duration ${c / 90} ms for the last video frame.`)) : c = ne;
        } else
          c = ne;
      }
      const se = Math.round(F.pts - F.dts);
      $ = Math.min($, c), U = Math.max(U, c), M = Math.min(M, z), B = Math.max(B, z), o.push(new pi(F.key, c, H, se));
    }
    if (o.length) {
      if (Ce) {
        if (Ce < 70) {
          const O = o[0].flags;
          O.dependsOn = 2, O.isNonSync = 0;
        }
      } else if (mt && B - M < U - $ && b / U < 0.025 && o[0].cts === 0) {
        L.warn("Found irregular gaps in sample duration. Using PTS instead of DTS to determine MP4 sample duration.");
        let O = f;
        for (let F = 0, Y = o.length; F < Y; F++) {
          const H = O + o[F].duration, z = O + o[F].cts;
          if (F < Y - 1) {
            const se = H + o[F + 1].cts;
            o[F].duration = se - z;
          } else
            o[F].duration = F ? o[F - 1].duration : b;
          o[F].cts = 0, O = H;
        }
      }
    }
    c = C || !c ? b : c, this.nextAvcDts = u = m + c, this.videoSampleDuration = c, this.isVideoContiguous = true;
    const X = {
      data1: T.moof(e.sequenceNumber++, f, ae({}, e, {
        samples: o
      })),
      data2: P,
      startPTS: g / n,
      endPTS: (p + c) / n,
      startDTS: f / n,
      endDTS: u / n,
      type: "video",
      hasAudio: false,
      hasVideo: true,
      nb: o.length,
      dropped: e.dropped
    };
    return e.samples = [], e.dropped = 0, X;
  }
  getSamplesPerFrame(e) {
    switch (e.segmentCodec) {
      case "mp3":
        return qr;
      case "ac3":
        return zr;
      default:
        return gi;
    }
  }
  remuxAudio(e, t, i, s, n) {
    const r = e.inputTimeScale, o = e.samplerate ? e.samplerate : r, l = r / o, d = this.getSamplesPerFrame(e), u = d * l, h = this._initPTS, c = e.segmentCodec === "mp3" && this.typeSupported.mpeg, f = [], m = n !== void 0;
    let g = e.samples, p = c ? 0 : 8, y = this.nextAudioPts || -1;
    const v = t * r, E = h.baseTime * r / h.timescale;
    if (this.isAudioContiguous = i = i || g.length && y > 0 && (s && Math.abs(v - y) < 9e3 || Math.abs(ue(g[0].pts - E, v) - y) < 20 * u), g.forEach(function(V) {
      V.pts = ue(V.pts - E, v);
    }), !i || y < 0) {
      if (g = g.filter((V) => V.pts >= 0), !g.length)
        return;
      n === 0 ? y = 0 : s && !m ? y = Math.max(0, v) : y = g[0].pts;
    }
    if (e.segmentCodec === "aac") {
      const V = this.config.maxAudioFramesDrift;
      for (let W = 0, X = y; W < g.length; W++) {
        const O = g[W], F = O.pts, Y = F - X, H = Math.abs(1e3 * Y / r);
        if (Y <= -V * u && m)
          W === 0 && (L.warn(`Audio frame @ ${(F / r).toFixed(3)}s overlaps nextAudioPts by ${Math.round(1e3 * Y / r)} ms.`), this.nextAudioPts = y = X = F);
        else if (Y >= V * u && H < jr && m) {
          let z = Math.round(Y / u);
          X = F - z * u, X < 0 && (z--, X += u), W === 0 && (this.nextAudioPts = y = X), L.warn(`[mp4-remuxer]: Injecting ${z} audio frame @ ${(X / r).toFixed(3)}s due to ${Math.round(1e3 * Y / r)} ms gap.`);
          for (let se = 0; se < z; se++) {
            const le = Math.max(X, 0);
            let ne = mi.getSilentFrame(e.manifestCodec || e.codec, e.channelCount);
            ne || (L.log("[mp4-remuxer]: Unable to get silent frame for given audio codec; duplicating last frame instead."), ne = O.unit.subarray()), g.splice(W, 0, {
              unit: ne,
              pts: le
            }), X += u, W++;
          }
        }
        O.pts = X, X += u;
      }
    }
    let b = null, S = null, I, A = 0, D = g.length;
    for (; D--; )
      A += g[D].unit.byteLength;
    for (let V = 0, W = g.length; V < W; V++) {
      const X = g[V], O = X.unit;
      let F = X.pts;
      if (S !== null) {
        const H = f[V - 1];
        H.duration = Math.round((F - S) / l);
      } else if (i && e.segmentCodec === "aac" && (F = y), b = F, A > 0) {
        A += p;
        try {
          I = new Uint8Array(A);
        } catch (H) {
          this.observer.emit(x.ERROR, x.ERROR, {
            type: K.MUX_ERROR,
            details: R.REMUX_ALLOC_ERROR,
            fatal: false,
            error: H,
            bytes: A,
            reason: `fail allocating audio mdat ${A}`
          });
          return;
        }
        c || (new DataView(I.buffer).setUint32(0, A), I.set(T.types.mdat, 4));
      } else
        return;
      I.set(O, p);
      const Y = O.byteLength;
      p += Y, f.push(new pi(true, d, Y, 0)), S = F;
    }
    const P = f.length;
    if (!P)
      return;
    const _ = f[f.length - 1];
    this.nextAudioPts = y = S + l * _.duration;
    const C = c ? new Uint8Array(0) : T.moof(e.sequenceNumber++, b / l, ae({}, e, {
      samples: f
    }));
    e.samples = [];
    const $ = b / r, M = y / r, B = {
      data1: C,
      data2: I,
      startPTS: $,
      endPTS: M,
      startDTS: $,
      endDTS: M,
      type: "audio",
      hasAudio: true,
      hasVideo: false,
      nb: P
    };
    return this.isAudioContiguous = true, B;
  }
  remuxEmptyAudio(e, t, i, s) {
    const n = e.inputTimeScale, r = e.samplerate ? e.samplerate : n, o = n / r, l = this.nextAudioPts, d = this._initDTS, u = d.baseTime * 9e4 / d.timescale, h = (l !== null ? l : s.startDTS * n) + u, c = s.endDTS * n + u, f = o * gi, m = Math.ceil((c - h) / f), g = mi.getSilentFrame(e.manifestCodec || e.codec, e.channelCount);
    if (L.warn("[mp4-remuxer]: remux empty Audio"), !g) {
      L.trace("[mp4-remuxer]: Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec");
      return;
    }
    const p = [];
    for (let y = 0; y < m; y++) {
      const v = h + y * f;
      p.push({
        unit: g,
        pts: v,
        dts: v
      });
    }
    return e.samples = p, this.remuxAudio(e, t, i, false);
  }
}
function ue(a, e) {
  let t;
  if (e === null)
    return a;
  for (e < a ? t = -8589934592 : t = 8589934592; Math.abs(a - e) > 4294967296; )
    a += t;
  return a;
}
function Xr(a) {
  for (let e = 0; e < a.length; e++)
    if (a[e].key)
      return e;
  return -1;
}
function ns(a, e, t, i) {
  const s = a.samples.length;
  if (!s)
    return;
  const n = a.inputTimeScale;
  for (let o = 0; o < s; o++) {
    const l = a.samples[o];
    l.pts = ue(l.pts - t.baseTime * n / t.timescale, e * n) / n, l.dts = ue(l.dts - i.baseTime * n / i.timescale, e * n) / n;
  }
  const r = a.samples;
  return a.samples = [], {
    samples: r
  };
}
function rs(a, e, t) {
  const i = a.samples.length;
  if (!i)
    return;
  const s = a.inputTimeScale;
  for (let r = 0; r < i; r++) {
    const o = a.samples[r];
    o.pts = ue(o.pts - t.baseTime * s / t.timescale, e * s) / s;
  }
  a.samples.sort((r, o) => r.pts - o.pts);
  const n = a.samples;
  return a.samples = [], {
    samples: n
  };
}
class pi {
  constructor(e, t, i, s) {
    this.size = void 0, this.duration = void 0, this.cts = void 0, this.flags = void 0, this.duration = t, this.size = i, this.cts = s, this.flags = {
      isLeading: 0,
      isDependedOn: 0,
      hasRedundancy: 0,
      degradPrio: 0,
      dependsOn: e ? 2 : 1,
      isNonSync: e ? 0 : 1
    };
  }
}
class Qr {
  constructor() {
    this.emitInitSegment = false, this.audioCodec = void 0, this.videoCodec = void 0, this.initData = void 0, this.initPTS = null, this.initTracks = void 0, this.lastEndTime = null;
  }
  destroy() {
  }
  resetTimeStamp(e) {
    this.initPTS = e, this.lastEndTime = null;
  }
  resetNextTimestamp() {
    this.lastEndTime = null;
  }
  resetInitSegment(e, t, i, s) {
    this.audioCodec = t, this.videoCodec = i, this.generateInitSegment(ks(e, s)), this.emitInitSegment = true;
  }
  generateInitSegment(e) {
    let {
      audioCodec: t,
      videoCodec: i
    } = this;
    if (!(e != null && e.byteLength)) {
      this.initTracks = void 0, this.initData = void 0;
      return;
    }
    const s = this.initData = wi(e);
    s.audio && (t = xi(s.audio, Q.AUDIO)), s.video && (i = xi(s.video, Q.VIDEO));
    const n = {};
    s.audio && s.video ? n.audiovideo = {
      container: "video/mp4",
      codec: t + "," + i,
      initSegment: e,
      id: "main"
    } : s.audio ? n.audio = {
      container: "audio/mp4",
      codec: t,
      initSegment: e,
      id: "audio"
    } : s.video ? n.video = {
      container: "video/mp4",
      codec: i,
      initSegment: e,
      id: "main"
    } : L.warn("[passthrough-remuxer.ts]: initSegment does not contain moov or trak boxes."), this.initTracks = n;
  }
  remux(e, t, i, s, n, r) {
    var o, l;
    let {
      initPTS: d,
      lastEndTime: u
    } = this;
    const h = {
      audio: void 0,
      video: void 0,
      text: s,
      id3: i,
      initSegment: void 0
    };
    k(u) || (u = this.lastEndTime = n || 0);
    const c = t.samples;
    if (!(c != null && c.length))
      return h;
    const f = {
      initPTS: void 0,
      timescale: 1
    };
    let m = this.initData;
    if ((o = m) != null && o.length || (this.generateInitSegment(c), m = this.initData), !((l = m) != null && l.length))
      return L.warn("[passthrough-remuxer.ts]: Failed to generate initSegment."), h;
    this.emitInitSegment && (f.tracks = this.initTracks, this.emitInitSegment = false);
    const g = Bs(c, m), p = Ns(m, c), y = p === null ? n : p;
    (Jr(d, y, n, g) || f.timescale !== d.timescale && r) && (f.initPTS = y - n, d && d.timescale === 1 && L.warn(`Adjusting initPTS by ${f.initPTS - d.baseTime}`), this.initPTS = d = {
      baseTime: f.initPTS,
      timescale: 1
    });
    const v = e ? y - d.baseTime / d.timescale : u, E = v + g;
    $s(m, c, d.baseTime / d.timescale), g > 0 ? this.lastEndTime = E : (L.warn("Duration parsed from mp4 should be greater than zero"), this.resetNextTimestamp());
    const b = !!m.audio, S = !!m.video;
    let I = "";
    b && (I += "audio"), S && (I += "video");
    const A = {
      data1: c,
      startPTS: v,
      startDTS: v,
      endPTS: E,
      endDTS: E,
      type: I,
      hasAudio: b,
      hasVideo: S,
      nb: 1,
      dropped: 0
    };
    return h.audio = A.type === "audio" ? A : void 0, h.video = A.type !== "audio" ? A : void 0, h.initSegment = f, h.id3 = ns(i, n, d, d), s.samples.length && (h.text = rs(s, n, d)), h;
  }
}
function Jr(a, e, t, i) {
  if (a === null)
    return true;
  const s = Math.max(i, 1), n = e - a.baseTime / a.timescale;
  return Math.abs(n - t) > s;
}
function xi(a, e) {
  const t = a?.codec;
  if (t && t.length > 4)
    return t;
  if (e === Q.AUDIO) {
    if (t === "ec-3" || t === "ac-3" || t === "alac")
      return t;
    if (t === "fLaC" || t === "Opus")
      return qe(t, false);
    const i = "mp4a.40.5";
    return L.info(`Parsed audio codec "${t}" or audio object type not handled. Using "${i}"`), i;
  }
  return L.warn(`Unhandled video codec "${t}"`), t === "hvc1" || t === "hev1" ? "hvc1.1.6.L120.90" : t === "av01" ? "av01.0.04M.08" : "avc1.42e01e";
}
const yi = typeof self < "u" ? self : void 0;
let ye;
try {
  ye = self.performance.now.bind(self.performance);
} catch {
  L.debug("Unable to use Performance API on this environment"), ye = yi?.Date.now;
}
const pt = [{
  demux: Nr,
  remux: Qr
}, {
  demux: Te,
  remux: gt
}, {
  demux: kr,
  remux: gt
}, {
  demux: Kr,
  remux: gt
}];
class Ei {
  constructor(e, t, i, s, n) {
    this.async = false, this.observer = void 0, this.typeSupported = void 0, this.config = void 0, this.vendor = void 0, this.id = void 0, this.demuxer = void 0, this.remuxer = void 0, this.decrypter = void 0, this.probe = void 0, this.decryptionPromise = null, this.transmuxConfig = void 0, this.currentTransmuxState = void 0, this.observer = e, this.typeSupported = t, this.config = i, this.vendor = s, this.id = n;
  }
  configure(e) {
    this.transmuxConfig = e, this.decrypter && this.decrypter.reset();
  }
  push(e, t, i, s) {
    const n = i.transmuxing;
    n.executeStart = ye();
    let r = new Uint8Array(e);
    const {
      currentTransmuxState: o,
      transmuxConfig: l
    } = this;
    s && (this.currentTransmuxState = s);
    const {
      contiguous: d,
      discontinuity: u,
      trackSwitch: h,
      accurateTimeOffset: c,
      timeOffset: f,
      initSegmentChange: m
    } = s || o, {
      audioCodec: g,
      videoCodec: p,
      defaultInitPts: y,
      duration: v,
      initSegmentData: E
    } = l, b = Zr(r, t);
    if (b && b.method === "AES-128") {
      const D = this.getDecrypter();
      if (D.isSync()) {
        let P = D.softwareDecrypt(r, b.key.buffer, b.iv.buffer);
        if (i.part > -1 && (P = D.flush()), !P)
          return n.executeEnd = ye(), xt(i);
        r = new Uint8Array(P);
      } else
        return this.decryptionPromise = D.webCryptoDecrypt(r, b.key.buffer, b.iv.buffer).then((P) => {
          const _ = this.push(P, null, i);
          return this.decryptionPromise = null, _;
        }), this.decryptionPromise;
    }
    const S = this.needsProbing(u, h);
    if (S) {
      const D = this.configureTransmuxer(r);
      if (D)
        return L.warn(`[transmuxer] ${D.message}`), this.observer.emit(x.ERROR, x.ERROR, {
          type: K.MEDIA_ERROR,
          details: R.FRAG_PARSING_ERROR,
          fatal: false,
          error: D,
          reason: D.message
        }), n.executeEnd = ye(), xt(i);
    }
    (u || h || m || S) && this.resetInitSegment(E, g, p, v, t), (u || m || S) && this.resetInitialTimestamp(y), d || this.resetContiguity();
    const I = this.transmux(r, b, f, c, i), A = this.currentTransmuxState;
    return A.contiguous = true, A.discontinuity = false, A.trackSwitch = false, n.executeEnd = ye(), I;
  }
  // Due to data caching, flush calls can produce more than one TransmuxerResult (hence the Array type)
  flush(e) {
    const t = e.transmuxing;
    t.executeStart = ye();
    const {
      decrypter: i,
      currentTransmuxState: s,
      decryptionPromise: n
    } = this;
    if (n)
      return n.then(() => this.flush(e));
    const r = [], {
      timeOffset: o
    } = s;
    if (i) {
      const h = i.flush();
      h && r.push(this.push(h, null, e));
    }
    const {
      demuxer: l,
      remuxer: d
    } = this;
    if (!l || !d)
      return t.executeEnd = ye(), [xt(e)];
    const u = l.flush(o);
    return Ve(u) ? u.then((h) => (this.flushRemux(r, h, e), r)) : (this.flushRemux(r, u, e), r);
  }
  flushRemux(e, t, i) {
    const {
      audioTrack: s,
      videoTrack: n,
      id3Track: r,
      textTrack: o
    } = t, {
      accurateTimeOffset: l,
      timeOffset: d
    } = this.currentTransmuxState;
    L.log(`[transmuxer.ts]: Flushed fragment ${i.sn}${i.part > -1 ? " p: " + i.part : ""} of level ${i.level}`);
    const u = this.remuxer.remux(s, n, r, o, d, l, true, this.id);
    e.push({
      remuxResult: u,
      chunkMeta: i
    }), i.transmuxing.executeEnd = ye();
  }
  resetInitialTimestamp(e) {
    const {
      demuxer: t,
      remuxer: i
    } = this;
    !t || !i || (t.resetTimeStamp(e), i.resetTimeStamp(e));
  }
  resetContiguity() {
    const {
      demuxer: e,
      remuxer: t
    } = this;
    !e || !t || (e.resetContiguity(), t.resetNextTimestamp());
  }
  resetInitSegment(e, t, i, s, n) {
    const {
      demuxer: r,
      remuxer: o
    } = this;
    !r || !o || (r.resetInitSegment(e, t, i, s), o.resetInitSegment(e, t, i, n));
  }
  destroy() {
    this.demuxer && (this.demuxer.destroy(), this.demuxer = void 0), this.remuxer && (this.remuxer.destroy(), this.remuxer = void 0);
  }
  transmux(e, t, i, s, n) {
    let r;
    return t && t.method === "SAMPLE-AES" ? r = this.transmuxSampleAes(e, t, i, s, n) : r = this.transmuxUnencrypted(e, i, s, n), r;
  }
  transmuxUnencrypted(e, t, i, s) {
    const {
      audioTrack: n,
      videoTrack: r,
      id3Track: o,
      textTrack: l
    } = this.demuxer.demux(e, t, false, !this.config.progressive);
    return {
      remuxResult: this.remuxer.remux(n, r, o, l, t, i, false, this.id),
      chunkMeta: s
    };
  }
  transmuxSampleAes(e, t, i, s, n) {
    return this.demuxer.demuxSampleAes(e, t, i).then((r) => ({
      remuxResult: this.remuxer.remux(r.audioTrack, r.videoTrack, r.id3Track, r.textTrack, i, s, false, this.id),
      chunkMeta: n
    }));
  }
  configureTransmuxer(e) {
    const {
      config: t,
      observer: i,
      typeSupported: s,
      vendor: n
    } = this;
    let r;
    for (let c = 0, f = pt.length; c < f; c++) {
      var o;
      if ((o = pt[c].demux) != null && o.probe(e)) {
        r = pt[c];
        break;
      }
    }
    if (!r)
      return new Error("Failed to find demuxer by probing fragment data");
    const l = this.demuxer, d = this.remuxer, u = r.remux, h = r.demux;
    (!d || !(d instanceof u)) && (this.remuxer = new u(i, t, s, n)), (!l || !(l instanceof h)) && (this.demuxer = new h(i, t, s), this.probe = h.probe);
  }
  needsProbing(e, t) {
    return !this.demuxer || !this.remuxer || e || t;
  }
  getDecrypter() {
    let e = this.decrypter;
    return e || (e = this.decrypter = new _t(this.config)), e;
  }
}
function Zr(a, e) {
  let t = null;
  return a.byteLength > 0 && e?.key != null && e.iv !== null && e.method != null && (t = e), t;
}
const xt = (a) => ({
  remuxResult: {},
  chunkMeta: a
});
function Ve(a) {
  return "then" in a && a.then instanceof Function;
}
class ea {
  constructor(e, t, i, s, n) {
    this.audioCodec = void 0, this.videoCodec = void 0, this.initSegmentData = void 0, this.duration = void 0, this.defaultInitPts = void 0, this.audioCodec = e, this.videoCodec = t, this.initSegmentData = i, this.duration = s, this.defaultInitPts = n || null;
  }
}
class ta {
  constructor(e, t, i, s, n, r) {
    this.discontinuity = void 0, this.contiguous = void 0, this.accurateTimeOffset = void 0, this.trackSwitch = void 0, this.timeOffset = void 0, this.initSegmentChange = void 0, this.discontinuity = e, this.contiguous = t, this.accurateTimeOffset = i, this.trackSwitch = s, this.timeOffset = n, this.initSegmentChange = r;
  }
}
var as = { exports: {} };
(function(a) {
  var e = Object.prototype.hasOwnProperty, t = "~";
  function i() {
  }
  Object.create && (i.prototype = /* @__PURE__ */ Object.create(null), new i().__proto__ || (t = false));
  function s(l, d, u) {
    this.fn = l, this.context = d, this.once = u || false;
  }
  function n(l, d, u, h, c) {
    if (typeof u != "function")
      throw new TypeError("The listener must be a function");
    var f = new s(u, h || l, c), m = t ? t + d : d;
    return l._events[m] ? l._events[m].fn ? l._events[m] = [l._events[m], f] : l._events[m].push(f) : (l._events[m] = f, l._eventsCount++), l;
  }
  function r(l, d) {
    --l._eventsCount === 0 ? l._events = new i() : delete l._events[d];
  }
  function o() {
    this._events = new i(), this._eventsCount = 0;
  }
  o.prototype.eventNames = function() {
    var d = [], u, h;
    if (this._eventsCount === 0) return d;
    for (h in u = this._events)
      e.call(u, h) && d.push(t ? h.slice(1) : h);
    return Object.getOwnPropertySymbols ? d.concat(Object.getOwnPropertySymbols(u)) : d;
  }, o.prototype.listeners = function(d) {
    var u = t ? t + d : d, h = this._events[u];
    if (!h) return [];
    if (h.fn) return [h.fn];
    for (var c = 0, f = h.length, m = new Array(f); c < f; c++)
      m[c] = h[c].fn;
    return m;
  }, o.prototype.listenerCount = function(d) {
    var u = t ? t + d : d, h = this._events[u];
    return h ? h.fn ? 1 : h.length : 0;
  }, o.prototype.emit = function(d, u, h, c, f, m) {
    var g = t ? t + d : d;
    if (!this._events[g]) return false;
    var p = this._events[g], y = arguments.length, v, E;
    if (p.fn) {
      switch (p.once && this.removeListener(d, p.fn, void 0, true), y) {
        case 1:
          return p.fn.call(p.context), true;
        case 2:
          return p.fn.call(p.context, u), true;
        case 3:
          return p.fn.call(p.context, u, h), true;
        case 4:
          return p.fn.call(p.context, u, h, c), true;
        case 5:
          return p.fn.call(p.context, u, h, c, f), true;
        case 6:
          return p.fn.call(p.context, u, h, c, f, m), true;
      }
      for (E = 1, v = new Array(y - 1); E < y; E++)
        v[E - 1] = arguments[E];
      p.fn.apply(p.context, v);
    } else {
      var b = p.length, S;
      for (E = 0; E < b; E++)
        switch (p[E].once && this.removeListener(d, p[E].fn, void 0, true), y) {
          case 1:
            p[E].fn.call(p[E].context);
            break;
          case 2:
            p[E].fn.call(p[E].context, u);
            break;
          case 3:
            p[E].fn.call(p[E].context, u, h);
            break;
          case 4:
            p[E].fn.call(p[E].context, u, h, c);
            break;
          default:
            if (!v) for (S = 1, v = new Array(y - 1); S < y; S++)
              v[S - 1] = arguments[S];
            p[E].fn.apply(p[E].context, v);
        }
    }
    return true;
  }, o.prototype.on = function(d, u, h) {
    return n(this, d, u, h, false);
  }, o.prototype.once = function(d, u, h) {
    return n(this, d, u, h, true);
  }, o.prototype.removeListener = function(d, u, h, c) {
    var f = t ? t + d : d;
    if (!this._events[f]) return this;
    if (!u)
      return r(this, f), this;
    var m = this._events[f];
    if (m.fn)
      m.fn === u && (!c || m.once) && (!h || m.context === h) && r(this, f);
    else {
      for (var g = 0, p = [], y = m.length; g < y; g++)
        (m[g].fn !== u || c && !m[g].once || h && m[g].context !== h) && p.push(m[g]);
      p.length ? this._events[f] = p.length === 1 ? p[0] : p : r(this, f);
    }
    return this;
  }, o.prototype.removeAllListeners = function(d) {
    var u;
    return d ? (u = t ? t + d : d, this._events[u] && r(this, u)) : (this._events = new i(), this._eventsCount = 0), this;
  }, o.prototype.off = o.prototype.removeListener, o.prototype.addListener = o.prototype.on, o.prefixed = t, o.EventEmitter = o, a.exports = o;
})(as);
var ia = as.exports, os = /* @__PURE__ */ Ti(ia);
class sa {
  constructor(e, t, i, s) {
    this.error = null, this.hls = void 0, this.id = void 0, this.observer = void 0, this.frag = null, this.part = null, this.useWorker = void 0, this.workerContext = null, this.onwmsg = void 0, this.transmuxer = null, this.onTransmuxComplete = void 0, this.onFlush = void 0;
    const n = e.config;
    this.hls = e, this.id = t, this.useWorker = !!n.enableWorker, this.onTransmuxComplete = i, this.onFlush = s;
    const r = (d, u) => {
      u = u || {}, u.frag = this.frag, u.id = this.id, d === x.ERROR && (this.error = u.error), this.hls.trigger(d, u);
    };
    this.observer = new os(), this.observer.on(x.FRAG_DECRYPTED, r), this.observer.on(x.ERROR, r);
    const o = Ae(n.preferManagedMediaSource) || {
      isTypeSupported: () => false
    }, l = {
      mpeg: o.isTypeSupported("audio/mpeg"),
      mp3: o.isTypeSupported('audio/mp4; codecs="mp3"'),
      ac3: false
    };
    if (this.useWorker && typeof Worker < "u" && (n.workerPath || Sr())) {
      try {
        n.workerPath ? (L.log(`loading Web Worker ${n.workerPath} for "${t}"`), this.workerContext = vr(n.workerPath)) : (L.log(`injecting Web Worker for "${t}"`), this.workerContext = Lr()), this.onwmsg = (h) => this.onWorkerMessage(h);
        const {
          worker: u
        } = this.workerContext;
        u.addEventListener("message", this.onwmsg), u.onerror = (h) => {
          const c = new Error(`${h.message}  (${h.filename}:${h.lineno})`);
          n.enableWorker = !1, L.warn(`Error in "${t}" Web Worker, fallback to inline`), this.hls.trigger(x.ERROR, {
            type: K.OTHER_ERROR,
            details: R.INTERNAL_EXCEPTION,
            fatal: !1,
            event: "demuxerWorker",
            error: c
          });
        }, u.postMessage({
          cmd: "init",
          typeSupported: l,
          vendor: "",
          id: t,
          config: JSON.stringify(n)
        });
      } catch (u) {
        L.warn(`Error setting up "${t}" Web Worker, fallback to inline`, u), this.resetWorker(), this.error = null, this.transmuxer = new Ei(this.observer, l, n, "", t);
      }
      return;
    }
    this.transmuxer = new Ei(this.observer, l, n, "", t);
  }
  resetWorker() {
    if (this.workerContext) {
      const {
        worker: e,
        objectURL: t
      } = this.workerContext;
      t && self.URL.revokeObjectURL(t), e.removeEventListener("message", this.onwmsg), e.onerror = null, e.terminate(), this.workerContext = null;
    }
  }
  destroy() {
    if (this.workerContext)
      this.resetWorker(), this.onwmsg = void 0;
    else {
      const t = this.transmuxer;
      t && (t.destroy(), this.transmuxer = null);
    }
    const e = this.observer;
    e && e.removeAllListeners(), this.frag = null, this.observer = null, this.hls = null;
  }
  push(e, t, i, s, n, r, o, l, d, u) {
    var h, c;
    d.transmuxing.start = self.performance.now();
    const {
      transmuxer: f
    } = this, m = r ? r.start : n.start, g = n.decryptdata, p = this.frag, y = !(p && n.cc === p.cc), v = !(p && d.level === p.level), E = p ? d.sn - p.sn : -1, b = this.part ? d.part - this.part.index : -1, S = E === 0 && d.id > 1 && d.id === p?.stats.chunkCount, I = !v && (E === 1 || E === 0 && (b === 1 || S && b <= 0)), A = self.performance.now();
    (v || E || n.stats.parsing.start === 0) && (n.stats.parsing.start = A), r && (b || !I) && (r.stats.parsing.start = A);
    const D = !(p && ((h = n.initSegment) == null ? void 0 : h.url) === ((c = p.initSegment) == null ? void 0 : c.url)), P = new ta(y, I, l, v, m, D);
    if (!I || y || D) {
      L.log(`[transmuxer-interface, ${n.type}]: Starting new transmux session for sn: ${d.sn} p: ${d.part} level: ${d.level} id: ${d.id}
        discontinuity: ${y}
        trackSwitch: ${v}
        contiguous: ${I}
        accurateTimeOffset: ${l}
        timeOffset: ${m}
        initSegmentChange: ${D}`);
      const _ = new ea(i, s, t, o, u);
      this.configureTransmuxer(_);
    }
    if (this.frag = n, this.part = r, this.workerContext)
      this.workerContext.worker.postMessage({
        cmd: "demux",
        data: e,
        decryptdata: g,
        chunkMeta: d,
        state: P
      }, e instanceof ArrayBuffer ? [e] : []);
    else if (f) {
      const _ = f.push(e, g, d, P);
      Ve(_) ? (f.async = true, _.then((C) => {
        this.handleTransmuxComplete(C);
      }).catch((C) => {
        this.transmuxerError(C, d, "transmuxer-interface push error");
      })) : (f.async = false, this.handleTransmuxComplete(_));
    }
  }
  flush(e) {
    e.transmuxing.start = self.performance.now();
    const {
      transmuxer: t
    } = this;
    if (this.workerContext)
      this.workerContext.worker.postMessage({
        cmd: "flush",
        chunkMeta: e
      });
    else if (t) {
      let i = t.flush(e);
      Ve(i) || t.async ? (Ve(i) || (i = Promise.resolve(i)), i.then((n) => {
        this.handleFlushResult(n, e);
      }).catch((n) => {
        this.transmuxerError(n, e, "transmuxer-interface flush error");
      })) : this.handleFlushResult(i, e);
    }
  }
  transmuxerError(e, t, i) {
    this.hls && (this.error = e, this.hls.trigger(x.ERROR, {
      type: K.MEDIA_ERROR,
      details: R.FRAG_PARSING_ERROR,
      chunkMeta: t,
      frag: this.frag || void 0,
      fatal: false,
      error: e,
      err: e,
      reason: i
    }));
  }
  handleFlushResult(e, t) {
    e.forEach((i) => {
      this.handleTransmuxComplete(i);
    }), this.onFlush(t);
  }
  onWorkerMessage(e) {
    const t = e.data;
    if (!(t != null && t.event)) {
      L.warn(`worker message received with no ${t ? "event name" : "data"}`);
      return;
    }
    const i = this.hls;
    if (this.hls)
      switch (t.event) {
        case "init": {
          var s;
          const n = (s = this.workerContext) == null ? void 0 : s.objectURL;
          n && self.URL.revokeObjectURL(n);
          break;
        }
        case "transmuxComplete": {
          this.handleTransmuxComplete(t.data);
          break;
        }
        case "flush": {
          this.onFlush(t.data);
          break;
        }
        // pass logs from the worker thread to the main logger
        case "workerLog":
          L[t.data.logType] && L[t.data.logType](t.data.message);
          break;
        default: {
          t.data = t.data || {}, t.data.frag = this.frag, t.data.id = this.id, i.trigger(t.event, t.data);
          break;
        }
      }
  }
  configureTransmuxer(e) {
    const {
      transmuxer: t
    } = this;
    this.workerContext ? this.workerContext.worker.postMessage({
      cmd: "configure",
      config: e
    }) : t && t.configure(e);
  }
  handleTransmuxComplete(e) {
    e.chunkMeta.transmuxing.end = self.performance.now(), this.onTransmuxComplete(e);
  }
}
const na = 250, He = 2, ra = 0.1, aa = 0.05;
class oa {
  constructor(e, t, i, s) {
    this.config = void 0, this.media = null, this.fragmentTracker = void 0, this.hls = void 0, this.nudgeRetry = 0, this.stallReported = false, this.stalled = null, this.moved = false, this.seeking = false, this.config = e, this.media = t, this.fragmentTracker = i, this.hls = s;
  }
  destroy() {
    this.media = null, this.hls = this.fragmentTracker = null;
  }
  /**
   * Checks if the playhead is stuck within a gap, and if so, attempts to free it.
   * A gap is an unbuffered range between two buffered ranges (or the start and the first buffered range).
   *
   * @param lastCurrentTime - Previously read playhead position
   */
  poll(e, t) {
    const {
      config: i,
      media: s,
      stalled: n
    } = this;
    if (s === null)
      return;
    const {
      currentTime: r,
      seeking: o
    } = s, l = this.seeking && !o, d = !this.seeking && o;
    if (this.seeking = o, r !== e) {
      if (this.moved = true, o || (this.nudgeRetry = 0), n !== null) {
        if (this.stallReported) {
          const p = self.performance.now() - n;
          L.warn(`playback not stuck anymore @${r}, after ${Math.round(p)}ms`), this.stallReported = false;
        }
        this.stalled = null;
      }
      return;
    }
    if (d || l) {
      this.stalled = null;
      return;
    }
    if (s.paused && !o || s.ended || s.playbackRate === 0 || !J.getBuffered(s).length) {
      this.nudgeRetry = 0;
      return;
    }
    const u = J.bufferInfo(s, r, 0), h = u.nextStart || 0;
    if (o) {
      const p = u.len > He, y = !h || t && t.start <= r || h - r > He && !this.fragmentTracker.getPartialFragment(r);
      if (p || y)
        return;
      this.moved = false;
    }
    if (!this.moved && this.stalled !== null) {
      var c;
      if (!(u.len > 0) && !h)
        return;
      const y = Math.max(h, u.start || 0) - r, v = this.hls.levels ? this.hls.levels[this.hls.currentLevel] : null, b = (v == null || (c = v.details) == null ? void 0 : c.live) ? v.details.targetduration * 2 : He, S = this.fragmentTracker.getPartialFragment(r);
      if (y > 0 && (y <= b || S)) {
        s.paused || this._trySkipBufferHole(S);
        return;
      }
    }
    const f = self.performance.now();
    if (n === null) {
      this.stalled = f;
      return;
    }
    const m = f - n;
    if (!o && m >= na && (this._reportStall(u), !this.media))
      return;
    const g = J.bufferInfo(s, r, i.maxBufferHole);
    this._tryFixBufferStall(g, m);
  }
  /**
   * Detects and attempts to fix known buffer stalling issues.
   * @param bufferInfo - The properties of the current buffer.
   * @param stalledDurationMs - The amount of time Hls.js has been stalling for.
   * @private
   */
  _tryFixBufferStall(e, t) {
    const {
      config: i,
      fragmentTracker: s,
      media: n
    } = this;
    if (n === null)
      return;
    const r = n.currentTime, o = s.getPartialFragment(r);
    o && (this._trySkipBufferHole(o) || !this.media) || (e.len > i.maxBufferHole || e.nextStart && e.nextStart - r < i.maxBufferHole) && t > i.highBufferWatchdogPeriod * 1e3 && (L.warn("Trying to nudge playhead over buffer-hole"), this.stalled = null, this._tryNudgeBuffer());
  }
  /**
   * Triggers a BUFFER_STALLED_ERROR event, but only once per stall period.
   * @param bufferLen - The playhead distance from the end of the current buffer segment.
   * @private
   */
  _reportStall(e) {
    const {
      hls: t,
      media: i,
      stallReported: s
    } = this;
    if (!s && i) {
      this.stallReported = true;
      const n = new Error(`Playback stalling at @${i.currentTime} due to low buffer (${JSON.stringify(e)})`);
      L.warn(n.message), t.trigger(x.ERROR, {
        type: K.MEDIA_ERROR,
        details: R.BUFFER_STALLED_ERROR,
        fatal: false,
        error: n,
        buffer: e.len
      });
    }
  }
  /**
   * Attempts to fix buffer stalls by jumping over known gaps caused by partial fragments
   * @param partial - The partial fragment found at the current time (where playback is stalling).
   * @private
   */
  _trySkipBufferHole(e) {
    const {
      config: t,
      hls: i,
      media: s
    } = this;
    if (s === null)
      return 0;
    const n = s.currentTime, r = J.bufferInfo(s, n, 0), o = n < r.start ? r.start : r.nextStart;
    if (o) {
      const l = r.len <= t.maxBufferHole, d = r.len > 0 && r.len < 1 && s.readyState < 3, u = o - n;
      if (u > 0 && (l || d)) {
        if (u > t.maxBufferHole) {
          const {
            fragmentTracker: c
          } = this;
          let f = false;
          if (n === 0) {
            const m = c.getAppendedFrag(0, q.MAIN);
            m && o < m.end && (f = true);
          }
          if (!f) {
            const m = e || c.getAppendedFrag(n, q.MAIN);
            if (m) {
              let g = false, p = m.end;
              for (; p < o; ) {
                const y = c.getPartialFragment(p);
                if (y)
                  p += y.duration;
                else {
                  g = true;
                  break;
                }
              }
              if (g)
                return 0;
            }
          }
        }
        const h = Math.max(o + aa, n + ra);
        if (L.warn(`skipping hole, adjusting currentTime from ${n} to ${h}`), this.moved = true, this.stalled = null, s.currentTime = h, e && !e.gap) {
          const c = new Error(`fragment loaded with buffer holes, seeking from ${n} to ${h}`);
          i.trigger(x.ERROR, {
            type: K.MEDIA_ERROR,
            details: R.BUFFER_SEEK_OVER_HOLE,
            fatal: false,
            error: c,
            reason: c.message,
            frag: e
          });
        }
        return h;
      }
    }
    return 0;
  }
  /**
   * Attempts to fix buffer stalls by advancing the mediaElement's current time by a small amount.
   * @private
   */
  _tryNudgeBuffer() {
    const {
      config: e,
      hls: t,
      media: i,
      nudgeRetry: s
    } = this;
    if (i === null)
      return;
    const n = i.currentTime;
    if (this.nudgeRetry++, s < e.nudgeMaxRetry) {
      const r = n + (s + 1) * e.nudgeOffset, o = new Error(`Nudging 'currentTime' from ${n} to ${r}`);
      L.warn(o.message), i.currentTime = r, t.trigger(x.ERROR, {
        type: K.MEDIA_ERROR,
        details: R.BUFFER_NUDGE_ON_STALL,
        error: o,
        fatal: false
      });
    } else {
      const r = new Error(`Playhead still not moving while enough data buffered @${n} after ${e.nudgeMaxRetry} nudges`);
      L.error(r.message), t.trigger(x.ERROR, {
        type: K.MEDIA_ERROR,
        details: R.BUFFER_STALLED_ERROR,
        error: r,
        fatal: true
      });
    }
  }
}
const la = 100;
class da extends yr {
  constructor(e, t, i) {
    super(e, t, i, "[stream-controller]", q.MAIN), this.audioCodecSwap = false, this.gapController = null, this.level = -1, this._forceStartLoad = false, this.altAudio = false, this.audioOnly = false, this.fragPlaying = null, this.onvplaying = null, this.onvseeked = null, this.fragLastKbps = 0, this.couldBacktrack = false, this.backtrackFragment = null, this.audioCodecSwitch = false, this.videoBuffer = null, this._registerListeners();
  }
  _registerListeners() {
    const {
      hls: e
    } = this;
    e.on(x.MEDIA_ATTACHED, this.onMediaAttached, this), e.on(x.MEDIA_DETACHING, this.onMediaDetaching, this), e.on(x.MANIFEST_LOADING, this.onManifestLoading, this), e.on(x.MANIFEST_PARSED, this.onManifestParsed, this), e.on(x.LEVEL_LOADING, this.onLevelLoading, this), e.on(x.LEVEL_LOADED, this.onLevelLoaded, this), e.on(x.FRAG_LOAD_EMERGENCY_ABORTED, this.onFragLoadEmergencyAborted, this), e.on(x.ERROR, this.onError, this), e.on(x.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), e.on(x.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this), e.on(x.BUFFER_CREATED, this.onBufferCreated, this), e.on(x.BUFFER_FLUSHED, this.onBufferFlushed, this), e.on(x.LEVELS_UPDATED, this.onLevelsUpdated, this), e.on(x.FRAG_BUFFERED, this.onFragBuffered, this);
  }
  _unregisterListeners() {
    const {
      hls: e
    } = this;
    e.off(x.MEDIA_ATTACHED, this.onMediaAttached, this), e.off(x.MEDIA_DETACHING, this.onMediaDetaching, this), e.off(x.MANIFEST_LOADING, this.onManifestLoading, this), e.off(x.MANIFEST_PARSED, this.onManifestParsed, this), e.off(x.LEVEL_LOADED, this.onLevelLoaded, this), e.off(x.FRAG_LOAD_EMERGENCY_ABORTED, this.onFragLoadEmergencyAborted, this), e.off(x.ERROR, this.onError, this), e.off(x.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), e.off(x.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this), e.off(x.BUFFER_CREATED, this.onBufferCreated, this), e.off(x.BUFFER_FLUSHED, this.onBufferFlushed, this), e.off(x.LEVELS_UPDATED, this.onLevelsUpdated, this), e.off(x.FRAG_BUFFERED, this.onFragBuffered, this);
  }
  onHandlerDestroying() {
    this._unregisterListeners(), super.onHandlerDestroying();
  }
  startLoad(e) {
    if (this.levels) {
      const {
        lastCurrentTime: t,
        hls: i
      } = this;
      if (this.stopLoad(), this.setInterval(la), this.level = -1, !this.startFragRequested) {
        let s = i.startLevel;
        s === -1 && (i.config.testBandwidth && this.levels.length > 1 ? (s = 0, this.bitrateTest = true) : s = i.firstAutoLevel), i.nextLoadLevel = s, this.level = i.loadLevel, this.loadedmetadata = false;
      }
      t > 0 && e === -1 && (this.log(`Override startPosition with lastCurrentTime @${t.toFixed(3)}`), e = t), this.state = w.IDLE, this.nextLoadPosition = this.startPosition = this.lastCurrentTime = e, this.tick();
    } else
      this._forceStartLoad = true, this.state = w.STOPPED;
  }
  stopLoad() {
    this._forceStartLoad = false, super.stopLoad();
  }
  doTick() {
    switch (this.state) {
      case w.WAITING_LEVEL: {
        const {
          levels: t,
          level: i
        } = this, s = t?.[i], n = s?.details;
        if (n && (!n.live || this.levelLastLoaded === s)) {
          if (this.waitForCdnTuneIn(n))
            break;
          this.state = w.IDLE;
          break;
        } else if (this.hls.nextLoadLevel !== this.level) {
          this.state = w.IDLE;
          break;
        }
        break;
      }
      case w.FRAG_LOADING_WAITING_RETRY:
        {
          var e;
          const t = self.performance.now(), i = this.retryDate;
          if (!i || t >= i || (e = this.media) != null && e.seeking) {
            const {
              levels: s,
              level: n
            } = this, r = s?.[n];
            this.resetStartWhenNotLoaded(r || null), this.state = w.IDLE;
          }
        }
        break;
    }
    this.state === w.IDLE && this.doTickIdle(), this.onTickEnd();
  }
  onTickEnd() {
    super.onTickEnd(), this.checkBuffer(), this.checkFragmentChanged();
  }
  doTickIdle() {
    const {
      hls: e,
      levelLastLoaded: t,
      levels: i,
      media: s
    } = this;
    if (t === null || !s && (this.startFragRequested || !e.config.startFragPrefetch) || this.altAudio && this.audioOnly)
      return;
    const n = this.buffering ? e.nextLoadLevel : e.loadLevel;
    if (!(i != null && i[n]))
      return;
    const r = i[n], o = this.getMainFwdBufferInfo();
    if (o === null)
      return;
    const l = this.getLevelDetails();
    if (l && this._streamEnded(o, l)) {
      const g = {};
      this.altAudio && (g.type = "video"), this.hls.trigger(x.BUFFER_EOS, g), this.state = w.ENDED;
      return;
    }
    if (!this.buffering)
      return;
    e.loadLevel !== n && e.manualLevel === -1 && this.log(`Adapting to level ${n} from level ${this.level}`), this.level = e.nextLoadLevel = n;
    const d = r.details;
    if (!d || this.state === w.WAITING_LEVEL || d.live && this.levelLastLoaded !== r) {
      this.level = n, this.state = w.WAITING_LEVEL;
      return;
    }
    const u = o.len, h = this.getMaxBufferLength(r.maxBitrate);
    if (u >= h)
      return;
    this.backtrackFragment && this.backtrackFragment.start > o.end && (this.backtrackFragment = null);
    const c = this.backtrackFragment ? this.backtrackFragment.start : o.end;
    let f = this.getNextFragment(c, d);
    if (this.couldBacktrack && !this.fragPrevious && f && f.sn !== "initSegment" && this.fragmentTracker.getState(f) !== re.OK) {
      var m;
      const p = ((m = this.backtrackFragment) != null ? m : f).sn - d.startSN, y = d.fragments[p - 1];
      y && f.cc === y.cc && (f = y, this.fragmentTracker.removeFragment(y));
    } else this.backtrackFragment && o.len && (this.backtrackFragment = null);
    if (f && this.isLoopLoading(f, c)) {
      if (!f.gap) {
        const p = this.audioOnly && !this.altAudio ? Q.AUDIO : Q.VIDEO, y = (p === Q.VIDEO ? this.videoBuffer : this.mediaBuffer) || this.media;
        y && this.afterBufferFlushed(y, p, q.MAIN);
      }
      f = this.getNextFragmentLoopLoading(f, d, o, q.MAIN, h);
    }
    f && (f.initSegment && !f.initSegment.data && !this.bitrateTest && (f = f.initSegment), this.loadFragment(f, r, c));
  }
  loadFragment(e, t, i) {
    const s = this.fragmentTracker.getState(e);
    this.fragCurrent = e, s === re.NOT_LOADED || s === re.PARTIAL ? e.sn === "initSegment" ? this._loadInitSegment(e, t) : this.bitrateTest ? (this.log(`Fragment ${e.sn} of level ${e.level} is being downloaded to test bitrate and will not be buffered`), this._loadBitrateTestFrag(e, t)) : (this.startFragRequested = true, super.loadFragment(e, t, i)) : this.clearTrackerIfNeeded(e);
  }
  getBufferedFrag(e) {
    return this.fragmentTracker.getBufferedFrag(e, q.MAIN);
  }
  followingBufferedFrag(e) {
    return e ? this.getBufferedFrag(e.end + 0.5) : null;
  }
  /*
    on immediate level switch :
     - pause playback if playing
     - cancel any pending load request
     - and trigger a buffer flush
  */
  immediateLevelSwitch() {
    this.abortCurrentFrag(), this.flushMainBuffer(0, Number.POSITIVE_INFINITY);
  }
  /**
   * try to switch ASAP without breaking video playback:
   * in order to ensure smooth but quick level switching,
   * we need to find the next flushable buffer range
   * we should take into account new segment fetch time
   */
  nextLevelSwitch() {
    const {
      levels: e,
      media: t
    } = this;
    if (t != null && t.readyState) {
      let i;
      const s = this.getAppendedFrag(t.currentTime);
      s && s.start > 1 && this.flushMainBuffer(0, s.start - 1);
      const n = this.getLevelDetails();
      if (n != null && n.live) {
        const o = this.getMainFwdBufferInfo();
        if (!o || o.len < n.targetduration * 2)
          return;
      }
      if (!t.paused && e) {
        const o = this.hls.nextLoadLevel, l = e[o], d = this.fragLastKbps;
        d && this.fragCurrent ? i = this.fragCurrent.duration * l.maxBitrate / (1e3 * d) + 1 : i = 0;
      } else
        i = 0;
      const r = this.getBufferedFrag(t.currentTime + i);
      if (r) {
        const o = this.followingBufferedFrag(r);
        if (o) {
          this.abortCurrentFrag();
          const l = o.maxStartPTS ? o.maxStartPTS : o.start, d = o.duration, u = Math.max(r.end, l + Math.min(Math.max(d - this.config.maxFragLookUpTolerance, d * (this.couldBacktrack ? 0.5 : 0.125)), d * (this.couldBacktrack ? 0.75 : 0.25)));
          this.flushMainBuffer(u, Number.POSITIVE_INFINITY);
        }
      }
    }
  }
  abortCurrentFrag() {
    const e = this.fragCurrent;
    switch (this.fragCurrent = null, this.backtrackFragment = null, e && (e.abortRequests(), this.fragmentTracker.removeFragment(e)), this.state) {
      case w.KEY_LOADING:
      case w.FRAG_LOADING:
      case w.FRAG_LOADING_WAITING_RETRY:
      case w.PARSING:
      case w.PARSED:
        this.state = w.IDLE;
        break;
    }
    this.nextLoadPosition = this.getLoadPosition();
  }
  flushMainBuffer(e, t) {
    super.flushMainBuffer(e, t, this.altAudio ? "video" : null);
  }
  onMediaAttached(e, t) {
    super.onMediaAttached(e, t);
    const i = t.media;
    this.onvplaying = this.onMediaPlaying.bind(this), this.onvseeked = this.onMediaSeeked.bind(this), i.addEventListener("playing", this.onvplaying), i.addEventListener("seeked", this.onvseeked), this.gapController = new oa(this.config, i, this.fragmentTracker, this.hls);
  }
  onMediaDetaching() {
    const {
      media: e
    } = this;
    e && this.onvplaying && this.onvseeked && (e.removeEventListener("playing", this.onvplaying), e.removeEventListener("seeked", this.onvseeked), this.onvplaying = this.onvseeked = null, this.videoBuffer = null), this.fragPlaying = null, this.gapController && (this.gapController.destroy(), this.gapController = null), super.onMediaDetaching();
  }
  onMediaPlaying() {
    this.tick();
  }
  onMediaSeeked() {
    const e = this.media, t = e ? e.currentTime : null;
    k(t) && this.log(`Media seeked to ${t.toFixed(3)}`);
    const i = this.getMainFwdBufferInfo();
    if (i === null || i.len === 0) {
      this.warn(`Main forward buffer length on "seeked" event ${i ? i.len : "empty"})`);
      return;
    }
    this.tick();
  }
  onManifestLoading() {
    this.log("Trigger BUFFER_RESET"), this.hls.trigger(x.BUFFER_RESET, void 0), this.fragmentTracker.removeAllFragments(), this.couldBacktrack = false, this.startPosition = this.lastCurrentTime = this.fragLastKbps = 0, this.levels = this.fragPlaying = this.backtrackFragment = this.levelLastLoaded = null, this.altAudio = this.audioOnly = this.startFragRequested = false;
  }
  onManifestParsed(e, t) {
    let i = false, s = false;
    t.levels.forEach((n) => {
      const r = n.audioCodec;
      r && (i = i || r.indexOf("mp4a.40.2") !== -1, s = s || r.indexOf("mp4a.40.5") !== -1);
    }), this.audioCodecSwitch = i && s && !Tr(), this.audioCodecSwitch && this.log("Both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC"), this.levels = t.levels, this.startFragRequested = false;
  }
  onLevelLoading(e, t) {
    const {
      levels: i
    } = this;
    if (!i || this.state !== w.IDLE)
      return;
    const s = i[t.level];
    (!s.details || s.details.live && this.levelLastLoaded !== s || this.waitForCdnTuneIn(s.details)) && (this.state = w.WAITING_LEVEL);
  }
  onLevelLoaded(e, t) {
    var i;
    const {
      levels: s
    } = this, n = t.level, r = t.details, o = r.totalduration;
    if (!s) {
      this.warn(`Levels were reset while loading level ${n}`);
      return;
    }
    this.log(`Level ${n} loaded [${r.startSN},${r.endSN}]${r.lastPartSn ? `[part-${r.lastPartSn}-${r.lastPartIndex}]` : ""}, cc [${r.startCC}, ${r.endCC}] duration:${o}`);
    const l = s[n], d = this.fragCurrent;
    d && (this.state === w.FRAG_LOADING || this.state === w.FRAG_LOADING_WAITING_RETRY) && d.level !== t.level && d.loader && this.abortCurrentFrag();
    let u = 0;
    if (r.live || (i = l.details) != null && i.live) {
      var h;
      if (this.checkLiveUpdate(r), r.deltaUpdateFailed)
        return;
      u = this.alignPlaylists(r, l.details, (h = this.levelLastLoaded) == null ? void 0 : h.details);
    }
    if (l.details = r, this.levelLastLoaded = l, this.hls.trigger(x.LEVEL_UPDATED, {
      details: r,
      level: n
    }), this.state === w.WAITING_LEVEL) {
      if (this.waitForCdnTuneIn(r))
        return;
      this.state = w.IDLE;
    }
    this.startFragRequested ? r.live && this.synchronizeToLiveEdge(r) : this.setStartPosition(r, u), this.tick();
  }
  _handleFragmentLoadProgress(e) {
    var t;
    const {
      frag: i,
      part: s,
      payload: n
    } = e, {
      levels: r
    } = this;
    if (!r) {
      this.warn(`Levels were reset while fragment load was in progress. Fragment ${i.sn} of level ${i.level} will not be buffered`);
      return;
    }
    const o = r[i.level], l = o.details;
    if (!l) {
      this.warn(`Dropping fragment ${i.sn} of level ${i.level} after level details were reset`), this.fragmentTracker.removeFragment(i);
      return;
    }
    const d = o.videoCodec, u = l.PTSKnown || !l.live, h = (t = i.initSegment) == null ? void 0 : t.data, c = this._getAudioCodec(o), f = this.transmuxer = this.transmuxer || new sa(this.hls, q.MAIN, this._handleTransmuxComplete.bind(this), this._handleTransmuxerFlush.bind(this)), m = s ? s.index : -1, g = m !== -1, p = new Ki(i.level, i.sn, i.stats.chunkCount, n.byteLength, m, g), y = this.initPTS[i.cc];
    f.push(n, h, c, d, i, s, l.totalduration, u, p, y);
  }
  onAudioTrackSwitching(e, t) {
    const i = this.altAudio;
    if (!!!t.url) {
      if (this.mediaBuffer !== this.media) {
        this.log("Switching on main audio, use media.buffered to schedule main fragment loading"), this.mediaBuffer = this.media;
        const r = this.fragCurrent;
        r && (this.log("Switching to main audio track, cancel main fragment load"), r.abortRequests(), this.fragmentTracker.removeFragment(r)), this.resetTransmuxer(), this.resetLoadingState();
      } else this.audioOnly && this.resetTransmuxer();
      const n = this.hls;
      i && (n.trigger(x.BUFFER_FLUSHING, {
        startOffset: 0,
        endOffset: Number.POSITIVE_INFINITY,
        type: null
      }), this.fragmentTracker.removeAllFragments()), n.trigger(x.AUDIO_TRACK_SWITCHED, t);
    }
  }
  onAudioTrackSwitched(e, t) {
    const i = t.id, s = !!this.hls.audioTracks[i].url;
    if (s) {
      const n = this.videoBuffer;
      n && this.mediaBuffer !== n && (this.log("Switching on alternate audio, use video.buffered to schedule main fragment loading"), this.mediaBuffer = n);
    }
    this.altAudio = s, this.tick();
  }
  onBufferCreated(e, t) {
    const i = t.tracks;
    let s, n, r = false;
    for (const o in i) {
      const l = i[o];
      if (l.id === "main") {
        if (n = o, s = l, o === "video") {
          const d = i[o];
          d && (this.videoBuffer = d.buffer);
        }
      } else
        r = true;
    }
    r && s ? (this.log(`Alternate track found, use ${n}.buffered to schedule main fragment loading`), this.mediaBuffer = s.buffer) : this.mediaBuffer = this.media;
  }
  onFragBuffered(e, t) {
    const {
      frag: i,
      part: s
    } = t;
    if (i && i.type !== q.MAIN)
      return;
    if (this.fragContextChanged(i)) {
      this.warn(`Fragment ${i.sn}${s ? " p: " + s.index : ""} of level ${i.level} finished buffering, but was aborted. state: ${this.state}`), this.state === w.PARSED && (this.state = w.IDLE);
      return;
    }
    const n = s ? s.stats : i.stats;
    this.fragLastKbps = Math.round(8 * n.total / (n.buffering.end - n.loading.first)), i.sn !== "initSegment" && (this.fragPrevious = i), this.fragBufferedComplete(i, s);
  }
  onError(e, t) {
    var i;
    if (t.fatal) {
      this.state = w.ERROR;
      return;
    }
    switch (t.details) {
      case R.FRAG_GAP:
      case R.FRAG_PARSING_ERROR:
      case R.FRAG_DECRYPT_ERROR:
      case R.FRAG_LOAD_ERROR:
      case R.FRAG_LOAD_TIMEOUT:
      case R.KEY_LOAD_ERROR:
      case R.KEY_LOAD_TIMEOUT:
        this.onFragmentOrKeyLoadError(q.MAIN, t);
        break;
      case R.LEVEL_LOAD_ERROR:
      case R.LEVEL_LOAD_TIMEOUT:
      case R.LEVEL_PARSING_ERROR:
        !t.levelRetry && this.state === w.WAITING_LEVEL && ((i = t.context) == null ? void 0 : i.type) === j.LEVEL && (this.state = w.IDLE);
        break;
      case R.BUFFER_APPEND_ERROR:
      case R.BUFFER_FULL_ERROR:
        if (!t.parent || t.parent !== "main")
          return;
        if (t.details === R.BUFFER_APPEND_ERROR) {
          this.resetLoadingState();
          return;
        }
        this.reduceLengthAndFlushBuffer(t) && this.flushMainBuffer(0, Number.POSITIVE_INFINITY);
        break;
      case R.INTERNAL_EXCEPTION:
        this.recoverWorkerError(t);
        break;
    }
  }
  // Checks the health of the buffer and attempts to resolve playback stalls.
  checkBuffer() {
    const {
      media: e,
      gapController: t
    } = this;
    if (!(!e || !t || !e.readyState)) {
      if (this.loadedmetadata || !J.getBuffered(e).length) {
        const i = this.state !== w.IDLE ? this.fragCurrent : null;
        t.poll(this.lastCurrentTime, i);
      }
      this.lastCurrentTime = e.currentTime;
    }
  }
  onFragLoadEmergencyAborted() {
    this.state = w.IDLE, this.loadedmetadata || (this.startFragRequested = false, this.nextLoadPosition = this.startPosition), this.tickImmediate();
  }
  onBufferFlushed(e, {
    type: t
  }) {
    if (t !== Q.AUDIO || this.audioOnly && !this.altAudio) {
      const i = (t === Q.VIDEO ? this.videoBuffer : this.mediaBuffer) || this.media;
      this.afterBufferFlushed(i, t, q.MAIN), this.tick();
    }
  }
  onLevelsUpdated(e, t) {
    this.level > -1 && this.fragCurrent && (this.level = this.fragCurrent.level), this.levels = t.levels;
  }
  swapAudioCodec() {
    this.audioCodecSwap = !this.audioCodecSwap;
  }
  /**
   * Seeks to the set startPosition if not equal to the mediaElement's current time.
   */
  seekToStartPos() {
    const {
      media: e
    } = this;
    if (!e)
      return;
    const t = e.currentTime;
    let i = this.startPosition;
    if (i >= 0 && t < i) {
      if (e.seeking) {
        this.log(`could not seek to ${i}, already seeking at ${t}`);
        return;
      }
      const s = J.getBuffered(e), r = (s.length ? s.start(0) : 0) - i;
      r > 0 && (r < this.config.maxBufferHole || r < this.config.maxFragLookUpTolerance) && (this.log(`adjusting start position by ${r} to match buffer start`), i += r, this.startPosition = i), this.log(`seek to target start position ${i} from current time ${t}`), e.currentTime = i;
    }
  }
  _getAudioCodec(e) {
    let t = this.config.defaultAudioCodec || e.audioCodec;
    return this.audioCodecSwap && t && (this.log("Swapping audio codec"), t.indexOf("mp4a.40.5") !== -1 ? t = "mp4a.40.2" : t = "mp4a.40.5"), t;
  }
  _loadBitrateTestFrag(e, t) {
    e.bitrateTest = true, this._doFragLoad(e, t).then((i) => {
      const {
        hls: s
      } = this;
      if (!i || this.fragContextChanged(e))
        return;
      t.fragmentError = 0, this.state = w.IDLE, this.startFragRequested = false, this.bitrateTest = false;
      const n = e.stats;
      n.parsing.start = n.parsing.end = n.buffering.start = n.buffering.end = self.performance.now(), s.trigger(x.FRAG_LOADED, i), e.bitrateTest = false;
    });
  }
  _handleTransmuxComplete(e) {
    var t;
    const i = "main", {
      hls: s
    } = this, {
      remuxResult: n,
      chunkMeta: r
    } = e, o = this.getCurrentContext(r);
    if (!o) {
      this.resetWhenMissingContext(r);
      return;
    }
    const {
      frag: l,
      part: d,
      level: u
    } = o, {
      video: h,
      text: c,
      id3: f,
      initSegment: m
    } = n, {
      details: g
    } = u, p = this.altAudio ? void 0 : n.audio;
    if (this.fragContextChanged(l)) {
      this.fragmentTracker.removeFragment(l);
      return;
    }
    if (this.state = w.PARSING, m) {
      if (m != null && m.tracks) {
        const E = l.initSegment || l;
        this._bufferInitSegment(u, m.tracks, E, r), s.trigger(x.FRAG_PARSING_INIT_SEGMENT, {
          frag: E,
          id: i,
          tracks: m.tracks
        });
      }
      const y = m.initPTS, v = m.timescale;
      k(y) && (this.initPTS[l.cc] = {
        baseTime: y,
        timescale: v
      }, s.trigger(x.INIT_PTS_FOUND, {
        frag: l,
        id: i,
        initPTS: y,
        timescale: v
      }));
    }
    if (h && g && l.sn !== "initSegment") {
      const y = g.fragments[l.sn - 1 - g.startSN], v = l.sn === g.startSN, E = !y || l.cc > y.cc;
      if (n.independent !== false) {
        const {
          startPTS: b,
          endPTS: S,
          startDTS: I,
          endDTS: A
        } = h;
        if (d)
          d.elementaryStreams[h.type] = {
            startPTS: b,
            endPTS: S,
            startDTS: I,
            endDTS: A
          };
        else if (h.firstKeyFrame && h.independent && r.id === 1 && !E && (this.couldBacktrack = true), h.dropped && h.independent) {
          const D = this.getMainFwdBufferInfo(), P = (D ? D.end : this.getLoadPosition()) + this.config.maxBufferHole, _ = h.firstKeyFramePTS ? h.firstKeyFramePTS : b;
          if (!v && P < _ - this.config.maxBufferHole && !E) {
            this.backtrack(l);
            return;
          } else E && (l.gap = true);
          l.setElementaryStreamInfo(h.type, l.start, S, l.start, A, true);
        } else v && b > He && (l.gap = true);
        l.setElementaryStreamInfo(h.type, b, S, I, A), this.backtrackFragment && (this.backtrackFragment = l), this.bufferFragmentData(h, l, d, r, v || E);
      } else if (v || E)
        l.gap = true;
      else {
        this.backtrack(l);
        return;
      }
    }
    if (p) {
      const {
        startPTS: y,
        endPTS: v,
        startDTS: E,
        endDTS: b
      } = p;
      d && (d.elementaryStreams[Q.AUDIO] = {
        startPTS: y,
        endPTS: v,
        startDTS: E,
        endDTS: b
      }), l.setElementaryStreamInfo(Q.AUDIO, y, v, E, b), this.bufferFragmentData(p, l, d, r);
    }
    if (g && f != null && (t = f.samples) != null && t.length) {
      const y = {
        id: i,
        frag: l,
        details: g,
        samples: f.samples
      };
      s.trigger(x.FRAG_PARSING_METADATA, y);
    }
    if (g && c) {
      const y = {
        id: i,
        frag: l,
        details: g,
        samples: c.samples
      };
      s.trigger(x.FRAG_PARSING_USERDATA, y);
    }
  }
  _bufferInitSegment(e, t, i, s) {
    if (this.state !== w.PARSING)
      return;
    this.audioOnly = !!t.audio && !t.video, this.altAudio && !this.audioOnly && delete t.audio;
    const {
      audio: n,
      video: r,
      audiovideo: o
    } = t;
    if (n) {
      let l = e.audioCodec;
      const d = navigator.userAgent.toLowerCase();
      if (this.audioCodecSwitch) {
        l && (l.indexOf("mp4a.40.5") !== -1 ? l = "mp4a.40.2" : l = "mp4a.40.5");
        const u = n.metadata;
        u && "channelCount" in u && (u.channelCount || 1) !== 1 && d.indexOf("firefox") === -1 && (l = "mp4a.40.5");
      }
      l && l.indexOf("mp4a.40.5") !== -1 && d.indexOf("android") !== -1 && n.container !== "audio/mpeg" && (l = "mp4a.40.2", this.log(`Android: force audio codec to ${l}`)), e.audioCodec && e.audioCodec !== l && this.log(`Swapping manifest audio codec "${e.audioCodec}" for "${l}"`), n.levelCodec = l, n.id = "main", this.log(`Init audio buffer, container:${n.container}, codecs[selected/level/parsed]=[${l || ""}/${e.audioCodec || ""}/${n.codec}]`);
    }
    r && (r.levelCodec = e.videoCodec, r.id = "main", this.log(`Init video buffer, container:${r.container}, codecs[level/parsed]=[${e.videoCodec || ""}/${r.codec}]`)), o && this.log(`Init audiovideo buffer, container:${o.container}, codecs[level/parsed]=[${e.codecs}/${o.codec}]`), this.hls.trigger(x.BUFFER_CODECS, t), Object.keys(t).forEach((l) => {
      const u = t[l].initSegment;
      u != null && u.byteLength && this.hls.trigger(x.BUFFER_APPENDING, {
        type: l,
        data: u,
        frag: i,
        part: null,
        chunkMeta: s,
        parent: i.type
      });
    }), this.tickImmediate();
  }
  getMainFwdBufferInfo() {
    return this.getFwdBufferInfo(this.mediaBuffer ? this.mediaBuffer : this.media, q.MAIN);
  }
  backtrack(e) {
    this.couldBacktrack = true, this.backtrackFragment = e, this.resetTransmuxer(), this.flushBufferGap(e), this.fragmentTracker.removeFragment(e), this.fragPrevious = null, this.nextLoadPosition = e.start, this.state = w.IDLE;
  }
  checkFragmentChanged() {
    const e = this.media;
    let t = null;
    if (e && e.readyState > 1 && e.seeking === false) {
      const i = e.currentTime;
      if (J.isBuffered(e, i) ? t = this.getAppendedFrag(i) : J.isBuffered(e, i + 0.1) && (t = this.getAppendedFrag(i + 0.1)), t) {
        this.backtrackFragment = null;
        const s = this.fragPlaying, n = t.level;
        (!s || t.sn !== s.sn || s.level !== n) && (this.fragPlaying = t, this.hls.trigger(x.FRAG_CHANGED, {
          frag: t
        }), (!s || s.level !== n) && this.hls.trigger(x.LEVEL_SWITCHED, {
          level: n
        }));
      }
    }
  }
  get nextLevel() {
    const e = this.nextBufferedFrag;
    return e ? e.level : -1;
  }
  get currentFrag() {
    const e = this.media;
    return e ? this.fragPlaying || this.getAppendedFrag(e.currentTime) : null;
  }
  get currentProgramDateTime() {
    const e = this.media;
    if (e) {
      const t = e.currentTime, i = this.currentFrag;
      if (i && k(t) && k(i.programDateTime)) {
        const s = i.programDateTime + (t - i.start) * 1e3;
        return new Date(s);
      }
    }
    return null;
  }
  get currentLevel() {
    const e = this.currentFrag;
    return e ? e.level : -1;
  }
  get nextBufferedFrag() {
    const e = this.currentFrag;
    return e ? this.followingBufferedFrag(e) : null;
  }
  get forceStartLoad() {
    return this._forceStartLoad;
  }
}
class _e {
  /**
   * Get the video-dev/hls.js package version.
   */
  static get version() {
    return "1.5.18";
  }
  /**
   * Check if the required MediaSource Extensions are available.
   */
  static isMSESupported() {
    return ji();
  }
  /**
   * Check if MediaSource Extensions are available and isTypeSupported checks pass for any baseline codecs.
   */
  static isSupported() {
    return Er();
  }
  /**
   * Get the MediaSource global used for MSE playback (ManagedMediaSource, MediaSource, or WebKitMediaSource).
   */
  static getMediaSource() {
    return Ae();
  }
  static get Events() {
    return x;
  }
  static get ErrorTypes() {
    return K;
  }
  static get ErrorDetails() {
    return R;
  }
  /**
   * Get the default configuration applied to new instances.
   */
  static get DefaultConfig() {
    return _e.defaultConfig ? _e.defaultConfig : Hi;
  }
  /**
   * Replace the default configuration applied to new instances.
   */
  static set DefaultConfig(e) {
    _e.defaultConfig = e;
  }
  /**
   * Creates an instance of an HLS client that can attach to exactly one `HTMLMediaElement`.
   * @param userConfig - Configuration options applied over `Hls.DefaultConfig`
   */
  constructor(e = {}) {
    this.config = void 0, this.userConfig = void 0, this.coreComponents = void 0, this.networkControllers = void 0, this.started = false, this._emitter = new os(), this._autoLevelCapping = -1, this._maxHdcpLevel = null, this.abrController = void 0, this.bufferController = void 0, this.capLevelController = void 0, this.latencyController = void 0, this.levelController = void 0, this.streamController = void 0, this.audioTrackController = void 0, this.subtitleTrackController = void 0, this.emeController = void 0, this.cmcdController = void 0, this._media = null, this.url = null, this.triggeringException = void 0, gs(e.debug || false, "Hls instance");
    const t = this.config = er(_e.DefaultConfig, e);
    this.userConfig = e, t.progressive && tr(t);
    const {
      abrController: i,
      bufferController: s,
      capLevelController: n,
      errorController: r,
      fpsController: o
    } = t, l = new r(this), d = this.abrController = new i(this), u = this.bufferController = new s(this), h = this.capLevelController = new n(this), c = new o(this), f = new tn(this), m = new un(this), g = t.contentSteeringController, p = g ? new g(this) : null, y = this.levelController = new ir(this, p), v = new sr(this), E = new rr(this.config), b = this.streamController = new da(this, v, E);
    h.setStreamController(b), c.setStreamController(b);
    const S = [f, y, b];
    p && S.splice(1, 0, p), this.networkControllers = S;
    const I = [d, u, h, c, m, v];
    this.audioTrackController = this.createController(t.audioTrackController, S);
    const A = t.audioStreamController;
    A && S.push(new A(this, v, E)), this.subtitleTrackController = this.createController(t.subtitleTrackController, S);
    const D = t.subtitleStreamController;
    D && S.push(new D(this, v, E)), this.createController(t.timelineController, I), E.emeController = this.emeController = this.createController(t.emeController, I), this.cmcdController = this.createController(t.cmcdController, I), this.latencyController = this.createController(hn, I), this.coreComponents = I, S.push(l);
    const P = l.onErrorOut;
    typeof P == "function" && this.on(x.ERROR, P, l);
  }
  createController(e, t) {
    if (e) {
      const i = new e(this);
      return t && t.push(i), i;
    }
    return null;
  }
  // Delegate the EventEmitter through the public API of Hls.js
  on(e, t, i = this) {
    this._emitter.on(e, t, i);
  }
  once(e, t, i = this) {
    this._emitter.once(e, t, i);
  }
  removeAllListeners(e) {
    this._emitter.removeAllListeners(e);
  }
  off(e, t, i = this, s) {
    this._emitter.off(e, t, i, s);
  }
  listeners(e) {
    return this._emitter.listeners(e);
  }
  emit(e, t, i) {
    return this._emitter.emit(e, t, i);
  }
  trigger(e, t) {
    if (this.config.debug)
      return this.emit(e, e, t);
    try {
      return this.emit(e, e, t);
    } catch (i) {
      if (L.error("An internal error happened while handling event " + e + '. Error message: "' + i.message + '". Here is a stacktrace:', i), !this.triggeringException) {
        this.triggeringException = true;
        const s = e === x.ERROR;
        this.trigger(x.ERROR, {
          type: K.OTHER_ERROR,
          details: R.INTERNAL_EXCEPTION,
          fatal: s,
          event: e,
          error: i
        }), this.triggeringException = false;
      }
    }
    return false;
  }
  listenerCount(e) {
    return this._emitter.listenerCount(e);
  }
  /**
   * Dispose of the instance
   */
  destroy() {
    L.log("destroy"), this.trigger(x.DESTROYING, void 0), this.detachMedia(), this.removeAllListeners(), this._autoLevelCapping = -1, this.url = null, this.networkControllers.forEach((t) => t.destroy()), this.networkControllers.length = 0, this.coreComponents.forEach((t) => t.destroy()), this.coreComponents.length = 0;
    const e = this.config;
    e.xhrSetup = e.fetchSetup = void 0, this.userConfig = null;
  }
  /**
   * Attaches Hls.js to a media element
   */
  attachMedia(e) {
    L.log("attachMedia"), this._media = e, this.trigger(x.MEDIA_ATTACHING, {
      media: e
    });
  }
  /**
   * Detach Hls.js from the media
   */
  detachMedia() {
    L.log("detachMedia"), this.trigger(x.MEDIA_DETACHING, void 0), this._media = null;
  }
  /**
   * Set the source URL. Can be relative or absolute.
   */
  loadSource(e) {
    this.stopLoad();
    const t = this.media, i = this.url, s = this.url = Rt.buildAbsoluteURL(self.location.href, e, {
      alwaysNormalize: true
    });
    this._autoLevelCapping = -1, this._maxHdcpLevel = null, L.log(`loadSource:${s}`), t && i && (i !== s || this.bufferController.hasSourceTypes()) && (this.detachMedia(), this.attachMedia(t)), this.trigger(x.MANIFEST_LOADING, {
      url: e
    });
  }
  /**
   * Start loading data from the stream source.
   * Depending on default config, client starts loading automatically when a source is set.
   *
   * @param startPosition - Set the start position to stream from.
   * Defaults to -1 (None: starts from earliest point)
   */
  startLoad(e = -1) {
    L.log(`startLoad(${e})`), this.started = true, this.resumeBuffering();
    for (let t = 0; t < this.networkControllers.length && (this.networkControllers[t].startLoad(e), !(!this.started || !this.networkControllers)); t++)
      ;
  }
  /**
   * Stop loading of any stream data.
   */
  stopLoad() {
    L.log("stopLoad"), this.started = false;
    for (let e = 0; e < this.networkControllers.length && (this.networkControllers[e].stopLoad(), !(this.started || !this.networkControllers)); e++)
      ;
  }
  /**
   * Resumes stream controller segment loading after `pauseBuffering` has been called.
   */
  resumeBuffering() {
    L.log("resume buffering"), this.networkControllers.forEach((e) => {
      e.resumeBuffering && e.resumeBuffering();
    });
  }
  /**
   * Prevents stream controller from loading new segments until `resumeBuffering` is called.
   * This allows for media buffering to be paused without interupting playlist loading.
   */
  pauseBuffering() {
    L.log("pause buffering"), this.networkControllers.forEach((e) => {
      e.pauseBuffering && e.pauseBuffering();
    });
  }
  /**
   * Swap through possible audio codecs in the stream (for example to switch from stereo to 5.1)
   */
  swapAudioCodec() {
    L.log("swapAudioCodec"), this.streamController.swapAudioCodec();
  }
  /**
   * When the media-element fails, this allows to detach and then re-attach it
   * as one call (convenience method).
   *
   * Automatic recovery of media-errors by this process is configurable.
   */
  recoverMediaError() {
    L.log("recoverMediaError");
    const e = this._media;
    this.detachMedia(), e && this.attachMedia(e);
  }
  removeLevel(e) {
    this.levelController.removeLevel(e);
  }
  /**
   * @returns an array of levels (variants) sorted by HDCP-LEVEL, RESOLUTION (height), FRAME-RATE, CODECS, VIDEO-RANGE, and BANDWIDTH
   */
  get levels() {
    const e = this.levelController.levels;
    return e || [];
  }
  /**
   * Index of quality level (variant) currently played
   */
  get currentLevel() {
    return this.streamController.currentLevel;
  }
  /**
   * Set quality level index immediately. This will flush the current buffer to replace the quality asap. That means playback will interrupt at least shortly to re-buffer and re-sync eventually. Set to -1 for automatic level selection.
   */
  set currentLevel(e) {
    L.log(`set currentLevel:${e}`), this.levelController.manualLevel = e, this.streamController.immediateLevelSwitch();
  }
  /**
   * Index of next quality level loaded as scheduled by stream controller.
   */
  get nextLevel() {
    return this.streamController.nextLevel;
  }
  /**
   * Set quality level index for next loaded data.
   * This will switch the video quality asap, without interrupting playback.
   * May abort current loading of data, and flush parts of buffer (outside currently played fragment region).
   * @param newLevel - Pass -1 for automatic level selection
   */
  set nextLevel(e) {
    L.log(`set nextLevel:${e}`), this.levelController.manualLevel = e, this.streamController.nextLevelSwitch();
  }
  /**
   * Return the quality level of the currently or last (of none is loaded currently) segment
   */
  get loadLevel() {
    return this.levelController.level;
  }
  /**
   * Set quality level index for next loaded data in a conservative way.
   * This will switch the quality without flushing, but interrupt current loading.
   * Thus the moment when the quality switch will appear in effect will only be after the already existing buffer.
   * @param newLevel - Pass -1 for automatic level selection
   */
  set loadLevel(e) {
    L.log(`set loadLevel:${e}`), this.levelController.manualLevel = e;
  }
  /**
   * get next quality level loaded
   */
  get nextLoadLevel() {
    return this.levelController.nextLoadLevel;
  }
  /**
   * Set quality level of next loaded segment in a fully "non-destructive" way.
   * Same as `loadLevel` but will wait for next switch (until current loading is done).
   */
  set nextLoadLevel(e) {
    this.levelController.nextLoadLevel = e;
  }
  /**
   * Return "first level": like a default level, if not set,
   * falls back to index of first level referenced in manifest
   */
  get firstLevel() {
    return Math.max(this.levelController.firstLevel, this.minAutoLevel);
  }
  /**
   * Sets "first-level", see getter.
   */
  set firstLevel(e) {
    L.log(`set firstLevel:${e}`), this.levelController.firstLevel = e;
  }
  /**
   * Return the desired start level for the first fragment that will be loaded.
   * The default value of -1 indicates automatic start level selection.
   * Setting hls.nextAutoLevel without setting a startLevel will result in
   * the nextAutoLevel value being used for one fragment load.
   */
  get startLevel() {
    const e = this.levelController.startLevel;
    return e === -1 && this.abrController.forcedAutoLevel > -1 ? this.abrController.forcedAutoLevel : e;
  }
  /**
   * set  start level (level of first fragment that will be played back)
   * if not overrided by user, first level appearing in manifest will be used as start level
   * if -1 : automatic start level selection, playback will start from level matching download bandwidth
   * (determined from download of first segment)
   */
  set startLevel(e) {
    L.log(`set startLevel:${e}`), e !== -1 && (e = Math.max(e, this.minAutoLevel)), this.levelController.startLevel = e;
  }
  /**
   * Whether level capping is enabled.
   * Default value is set via `config.capLevelToPlayerSize`.
   */
  get capLevelToPlayerSize() {
    return this.config.capLevelToPlayerSize;
  }
  /**
   * Enables or disables level capping. If disabled after previously enabled, `nextLevelSwitch` will be immediately called.
   */
  set capLevelToPlayerSize(e) {
    const t = !!e;
    t !== this.config.capLevelToPlayerSize && (t ? this.capLevelController.startCapping() : (this.capLevelController.stopCapping(), this.autoLevelCapping = -1, this.streamController.nextLevelSwitch()), this.config.capLevelToPlayerSize = t);
  }
  /**
   * Capping/max level value that should be used by automatic level selection algorithm (`ABRController`)
   */
  get autoLevelCapping() {
    return this._autoLevelCapping;
  }
  /**
   * Returns the current bandwidth estimate in bits per second, when available. Otherwise, `NaN` is returned.
   */
  get bandwidthEstimate() {
    const {
      bwEstimator: e
    } = this.abrController;
    return e ? e.getEstimate() : NaN;
  }
  set bandwidthEstimate(e) {
    this.abrController.resetEstimator(e);
  }
  /**
   * get time to first byte estimate
   * @type {number}
   */
  get ttfbEstimate() {
    const {
      bwEstimator: e
    } = this.abrController;
    return e ? e.getEstimateTTFB() : NaN;
  }
  /**
   * Capping/max level value that should be used by automatic level selection algorithm (`ABRController`)
   */
  set autoLevelCapping(e) {
    this._autoLevelCapping !== e && (L.log(`set autoLevelCapping:${e}`), this._autoLevelCapping = e, this.levelController.checkMaxAutoUpdated());
  }
  get maxHdcpLevel() {
    return this._maxHdcpLevel;
  }
  set maxHdcpLevel(e) {
    cn(e) && this._maxHdcpLevel !== e && (this._maxHdcpLevel = e, this.levelController.checkMaxAutoUpdated());
  }
  /**
   * True when automatic level selection enabled
   */
  get autoLevelEnabled() {
    return this.levelController.manualLevel === -1;
  }
  /**
   * Level set manually (if any)
   */
  get manualLevel() {
    return this.levelController.manualLevel;
  }
  /**
   * min level selectable in auto mode according to config.minAutoBitrate
   */
  get minAutoLevel() {
    const {
      levels: e,
      config: {
        minAutoBitrate: t
      }
    } = this;
    if (!e) return 0;
    const i = e.length;
    for (let s = 0; s < i; s++)
      if (e[s].maxBitrate >= t)
        return s;
    return 0;
  }
  /**
   * max level selectable in auto mode according to autoLevelCapping
   */
  get maxAutoLevel() {
    const {
      levels: e,
      autoLevelCapping: t,
      maxHdcpLevel: i
    } = this;
    let s;
    if (t === -1 && e != null && e.length ? s = e.length - 1 : s = t, i)
      for (let n = s; n--; ) {
        const r = e[n].attrs["HDCP-LEVEL"];
        if (r && r <= i)
          return n;
      }
    return s;
  }
  get firstAutoLevel() {
    return this.abrController.firstAutoLevel;
  }
  /**
   * next automatically selected quality level
   */
  get nextAutoLevel() {
    return this.abrController.nextAutoLevel;
  }
  /**
   * this setter is used to force next auto level.
   * this is useful to force a switch down in auto mode:
   * in case of load error on level N, hls.js can set nextAutoLevel to N-1 for example)
   * forced value is valid for one fragment. upon successful frag loading at forced level,
   * this value will be resetted to -1 by ABR controller.
   */
  set nextAutoLevel(e) {
    this.abrController.nextAutoLevel = e;
  }
  /**
   * get the datetime value relative to media.currentTime for the active level Program Date Time if present
   */
  get playingDate() {
    return this.streamController.currentProgramDateTime;
  }
  get mainForwardBufferInfo() {
    return this.streamController.getMainFwdBufferInfo();
  }
  /**
   * Find and select the best matching audio track, making a level switch when a Group change is necessary.
   * Updates `hls.config.audioPreference`. Returns the selected track, or null when no matching track is found.
   */
  setAudioOption(e) {
    var t;
    return (t = this.audioTrackController) == null ? void 0 : t.setAudioOption(e);
  }
  /**
   * Find and select the best matching subtitle track, making a level switch when a Group change is necessary.
   * Updates `hls.config.subtitlePreference`. Returns the selected track, or null when no matching track is found.
   */
  setSubtitleOption(e) {
    var t;
    return (t = this.subtitleTrackController) == null || t.setSubtitleOption(e), null;
  }
  /**
   * Get the complete list of audio tracks across all media groups
   */
  get allAudioTracks() {
    const e = this.audioTrackController;
    return e ? e.allAudioTracks : [];
  }
  /**
   * Get the list of selectable audio tracks
   */
  get audioTracks() {
    const e = this.audioTrackController;
    return e ? e.audioTracks : [];
  }
  /**
   * index of the selected audio track (index in audio track lists)
   */
  get audioTrack() {
    const e = this.audioTrackController;
    return e ? e.audioTrack : -1;
  }
  /**
   * selects an audio track, based on its index in audio track lists
   */
  set audioTrack(e) {
    const t = this.audioTrackController;
    t && (t.audioTrack = e);
  }
  /**
   * get the complete list of subtitle tracks across all media groups
   */
  get allSubtitleTracks() {
    const e = this.subtitleTrackController;
    return e ? e.allSubtitleTracks : [];
  }
  /**
   * get alternate subtitle tracks list from playlist
   */
  get subtitleTracks() {
    const e = this.subtitleTrackController;
    return e ? e.subtitleTracks : [];
  }
  /**
   * index of the selected subtitle track (index in subtitle track lists)
   */
  get subtitleTrack() {
    const e = this.subtitleTrackController;
    return e ? e.subtitleTrack : -1;
  }
  get media() {
    return this._media;
  }
  /**
   * select an subtitle track, based on its index in subtitle track lists
   */
  set subtitleTrack(e) {
    const t = this.subtitleTrackController;
    t && (t.subtitleTrack = e);
  }
  /**
   * Whether subtitle display is enabled or not
   */
  get subtitleDisplay() {
    const e = this.subtitleTrackController;
    return e ? e.subtitleDisplay : false;
  }
  /**
   * Enable/disable subtitle display rendering
   */
  set subtitleDisplay(e) {
    const t = this.subtitleTrackController;
    t && (t.subtitleDisplay = e);
  }
  /**
   * get mode for Low-Latency HLS loading
   */
  get lowLatencyMode() {
    return this.config.lowLatencyMode;
  }
  /**
   * Enable/disable Low-Latency HLS part playlist and segment loading, and start live streams at playlist PART-HOLD-BACK rather than HOLD-BACK.
   */
  set lowLatencyMode(e) {
    this.config.lowLatencyMode = e;
  }
  /**
   * Position (in seconds) of live sync point (ie edge of live position minus safety delay defined by ```hls.config.liveSyncDuration```)
   * @returns null prior to loading live Playlist
   */
  get liveSyncPosition() {
    return this.latencyController.liveSyncPosition;
  }
  /**
   * Estimated position (in seconds) of live edge (ie edge of live playlist plus time sync playlist advanced)
   * @returns 0 before first playlist is loaded
   */
  get latency() {
    return this.latencyController.latency;
  }
  /**
   * maximum distance from the edge before the player seeks forward to ```hls.liveSyncPosition```
   * configured using ```liveMaxLatencyDurationCount``` (multiple of target duration) or ```liveMaxLatencyDuration```
   * @returns 0 before first playlist is loaded
   */
  get maxLatency() {
    return this.latencyController.maxLatency;
  }
  /**
   * target distance from the edge as calculated by the latency controller
   */
  get targetLatency() {
    return this.latencyController.targetLatency;
  }
  /**
   * the rate at which the edge of the current live playlist is advancing or 1 if there is none
   */
  get drift() {
    return this.latencyController.drift;
  }
  /**
   * set to true when startLoad is called before MANIFEST_PARSED event
   */
  get forceStartLoad() {
    return this.streamController.forceStartLoad;
  }
}
_e.defaultConfig = void 0;
Oe.KeySystemFormats;
Oe.KeySystems;
Oe.SubtitleStreamController;
Oe.TimelineController;

export { On as AbrController, Z as AttrList, Ls as AudioStreamController, Ls as AudioTrackController, In as BasePlaylistController, vi as BaseSegment, yr as BaseStreamController, Nn as BufferController, Ls as CMCDController, Ct as CapLevelController, Ki as ChunkMetadata, Gn as ContentSteeringController, Li as DateRange, Ls as EMEController, de as ErrorActionFlags, bn as ErrorController, R as ErrorDetails, K as ErrorTypes, x as Events, Un as FPSController, st as Fragment, _e as Hls, $e as HlsSkip, Jt as HlsUrlParameters, Lt as Level, Ss as LevelDetails, It as LevelKey, et as LoadStats, he as MetadataSchema, ie as NetworkErrorAction, Es as Part, q as PlaylistLevelType, Ls as SubtitleTrackController, _e as default, Ae as getMediaSource, ji as isMSESupported, Er as isSupported };
