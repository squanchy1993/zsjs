const w = (o) => {
  if (typeof o == "object" && o !== null) {
    if (typeof Object.getPrototypeOf == "function") {
      const e = Object.getPrototypeOf(o);
      return e === Object.prototype || e === null;
    }
    return Object.prototype.toString.call(o) === "[object Object]";
  }
  return !1;
}, l = (...o) => o.reduce((e, t) => {
  if (Array.isArray(t))
    throw new TypeError("Arguments provided to ts-deepmerge must be objects, not arrays.");
  return Object.keys(t).forEach((s) => {
    ["__proto__", "constructor", "prototype"].includes(s) || (Array.isArray(e[s]) && Array.isArray(t[s]) ? e[s] = l.options.mergeArrays ? l.options.uniqueArrayItems ? Array.from(new Set(e[s].concat(t[s]))) : [...e[s], ...t[s]] : t[s] : w(e[s]) && w(t[s]) ? e[s] = l(e[s], t[s]) : e[s] = t[s] === void 0 ? l.options.allowUndefinedOverrides ? t[s] : e[s] : t[s]);
  }), e;
}, {}), g = {
  allowUndefinedOverrides: !0,
  mergeArrays: !0,
  uniqueArrayItems: !0
};
l.options = g;
l.withOptions = (o, ...e) => {
  l.options = Object.assign(Object.assign({}, g), o);
  const t = l(...e);
  return l.options = g, t;
};
class P extends Promise {
  constructor(e, t) {
    let s, c;
    super((i, n) => {
      e(i, n), s = i, c = n;
    }), this.resolve = s, this.reject = c, this.cancelPromise = t;
  }
  cancel() {
    var e, t;
    (e = this.reject) == null || e.call(this, "promise has been canceled"), (t = this.cancelPromise) == null || t.call(this);
  }
}
var r = /* @__PURE__ */ ((o) => (o.closed = "closed", o.connecting = "connecting", o.connected = "connected", o.closing = "closing", o))(r || {});
class E {
  constructor(e) {
    this.events = {}, e.forEach((t) => {
      Reflect.set(this.events, t, []);
    });
  }
  /**
   * Add a callback function
   * @param {string} eventName - The event name.
   * @param {function} fun - The callback function.
   */
  addEventListener(e, t) {
    if (!Reflect.has(this.events, e))
      throw new Error(`event ${e} doesn't exist!`);
    this.events[e].includes(t) || this.events[e].push(t);
  }
  /**
  * remove a callback function
  * @param {string} eventName - The event name.
  * @param {function} fun - The callback function.
  */
  removeEventListener(e, t) {
    if (!Reflect.has(this.events, e))
      throw new Error(`event ${e} doesn't exist!`);
    const s = this.events[e].indexOf(t);
    s !== -1 && this.events[e].splice(s, 1);
  }
  dispatchEvent(e, t) {
    if (!Reflect.has(this.events, e))
      throw new Error(`event ${e} doesn't exist!`);
    this.events[e].forEach((s) => s(t));
  }
}
function b({
  cb: o,
  retryCount: e,
  intervalTime: t,
  event: s
}) {
  let c = !1, i = !1, n = () => {
  };
  const h = new Promise(async (d, f) => {
    n = () => {
      e = 0, i = !0, c = !0;
      const u = "Because of reason [user cancel], re-execute end";
      return console.warn(u), s(u), f(new Error(u));
    };
    const p = async () => {
      try {
        const u = await o();
        c = !0, d(u);
      } catch (u) {
        if (i)
          return;
        let m = "";
        u instanceof Error ? m = u.message : m = JSON.stringify(u);
        const v = `Because of reason [${m}], start re-execute on ${e}`;
        if (console.warn(v), s(v), e == 0) {
          const T = `Because of reason [${m}], re-execute end`;
          console.error(T), s(T), c = !0, f(u);
        } else
          e !== 0 && (e > 0 && e--, setTimeout(() => {
            p();
          }, t));
      }
    };
    p();
  });
  return {
    finished: c,
    promise: h,
    cancel: n
  };
}
function S(o) {
  let e = (c) => {
  };
  const t = new Promise((c, i) => {
    e = (n = "promise aborted") => {
      i(new C(n));
    };
  });
  return {
    promise: Promise.race([o, t]),
    abort: e
  };
}
class C extends Error {
  constructor(e) {
    super(e);
  }
}
class O {
  constructor({
    wsController: e,
    options: t
  }) {
    this.sendTimer = null, this.reSendTimer = null, this.connectingXPromise = null, this.startTime = 0, this.options = {
      handleHeartbeatMsg: (s) => !0,
      timeout: 5e3,
      intervalTime: 5e3,
      sendMsg: "---- heartbeat ----"
    }, this.wsController = e, this.setOptions(t);
  }
  setOptions(e = {}) {
    this.options = l(this.options, e);
  }
  send() {
    const e = `heartbeat send message: ${this.options.sendMsg}`;
    this.wsController.events.dispatchEvent("log", e), this.startTime = (/* @__PURE__ */ new Date()).getTime(), this.wsController.send(this.options.sendMsg), this.sendTimer && clearTimeout(this.sendTimer), this.sendTimer = setTimeout(async () => {
      this.wsController.connectStatus == r.connected && await this.wsController._wsClose(), this.connectingXPromise = b({
        cb: () => this.wsController._wsConnect({}),
        retryCount: -1,
        intervalTime: 2e3,
        event: (t) => this.wsController.events.dispatchEvent("log", t)
      });
    }, this.options.timeout);
  }
  received(e) {
    var i, n;
    if (!this.sendTimer || !((n = (i = this.options).handleHeartbeatMsg) == null ? void 0 : n.call(i, e)))
      return;
    let s = (/* @__PURE__ */ new Date()).getTime();
    const c = `heartbeat started at ${this.startTime}, completed in ${s}', duration is ${(s - this.startTime) / 1e3} seconds`;
    this.wsController.events.dispatchEvent("log", c), this.startTime = 0, this.sendTimer && (clearTimeout(this.sendTimer), this.sendTimer = null), this.reSendTimer || (this.reSendTimer = setTimeout(() => {
      this.send(), this.reSendTimer && clearTimeout(this.reSendTimer), this.reSendTimer = null;
    }, this.options.intervalTime));
  }
  clear() {
    this.sendTimer && clearTimeout(this.sendTimer), this.sendTimer = null, this.reSendTimer && clearTimeout(this.reSendTimer), this.reSendTimer = null, this.connectingXPromise && this.connectingXPromise.cancel(), this.wsController.events.dispatchEvent("log", "heartbeat was cleared out by user");
  }
}
let a = null;
class _ {
  constructor(e) {
    this.options = {
      address: "",
      connectTimeout: 5e3,
      reconnectIntervalTime: 2e3,
      retry: 2,
      onOpened: function() {
      }
    }, this._connectStatus = r.closed, this.closingCb = {
      resovle: null,
      reject: null
    }, this.pause = !1, this.connectingTimer = null, this.closingTimer = null, this.heartbeat = new O({ wsController: this }), this.events = new E(["message", "log", "status"]), this.setOptions(e);
  }
  get connectStatus() {
    return this._connectStatus;
  }
  set connectStatus(e) {
    this._connectStatus = e, this.events.dispatchEvent("status", this._connectStatus);
  }
  setOptions({
    wsOptions: e,
    heartbeatOptions: t
  }) {
    this.options = l(this.options, e ?? {}), this.heartbeat.setOptions(t);
  }
  _setSocketInstance(e) {
    const t = this;
    return new Promise((s, c) => {
      a = new WebSocket(e), a.onopen = function(i) {
        var n, h;
        if (t.connectStatus == r.connecting) {
          t.connectStatus = r.connected;
          const d = "Websocket start success.";
          s({ success: !0, message: d }), t.events.dispatchEvent("log", d), (h = (n = t.options).onOpened) == null || h.call(n, t), setTimeout(() => {
            t.heartbeat.send();
          }, 1e3);
        }
      }, a.onclose = function(i) {
        var n, h;
        if (t.connectStatus == r.closing) {
          t.connectStatus = r.closed;
          const d = "Websocket closed success";
          (h = (n = t.closingCb) == null ? void 0 : n.resovle) == null || h.call(n, { success: !0, message: d }), t.events.dispatchEvent("log", d), t._clearClose();
        }
      }, a.onerror = function(i) {
        var n, h;
        if (t.connectStatus == r.connecting) {
          t.connectStatus = r.closed;
          const d = "Websocket start error";
          c(new Error(d)), t.events.dispatchEvent("log", d);
        } else
          t.connectStatus == r.closing && (t.connectStatus = r.connecting, (h = (n = t.closingCb) == null ? void 0 : n.reject) == null || h.call(n, new Error(`Websocket close error: onerror:${i}`)), t._clearClose());
      }, a.onmessage = function(i) {
        t.heartbeat.received(i), !t.pause && t.events.dispatchEvent("message", i);
      };
    });
  }
  async _wsConnect(e) {
    return new Promise(async (t, s) => {
      try {
        let c = l(this.options, e ?? {});
        if (this.connectStatus == r.connected) {
          const n = "Websocket already connected";
          return this.events.dispatchEvent("log", n), t({ success: !0, message: n });
        }
        if (!c.address) {
          const n = "Websocket adress not exsit";
          throw this.events.dispatchEvent("log", n), new Error(n);
        }
        if (this.connectStatus !== r.closed) {
          const n = `Websocket connect failed: connectStatus current is ${this.connectStatus} not closed`;
          throw new Error(n);
        }
        this.connectStatus = r.connecting;
        const i = S(this._setSocketInstance(c.address));
        this.connectingTimer = setTimeout(() => {
          i.abort("Websocket connect timeout");
        }, c.connectTimeout), await i.promise;
      } catch (c) {
        this.connectStatus = r.closed, a == null || a.close();
        let i = `${c}`;
        c instanceof Error && (i = c.message);
        const n = `connect failed: ${i}`;
        this.events.dispatchEvent("log", n), s(new Error(n));
      } finally {
        this._clearConnect();
      }
    });
  }
  _clearConnect() {
    this.connectingTimer && (clearTimeout(this.connectingTimer), this.connectingTimer = null);
  }
  async _wsClose() {
    return new Promise((e, t) => {
      if (this.connectStatus == r.closed) {
        const s = "Websocket already closed";
        return this.events.dispatchEvent("log", s), e({ success: !0, message: s });
      }
      if (this.connectStatus !== r.connected) {
        const s = `Websocket close filed: connectStatus current is ${this.connectStatus} not in connected.`;
        return this.events.dispatchEvent("log", s), t(new Error(s));
      }
      this.closingCb.resovle = e, this.closingCb.reject = t, this.connectStatus = r.closing, a == null || a.close(), this.closingTimer = setTimeout(() => {
        this.connectStatus = r.closed;
        const s = "Websocket close were timeout so it forced shutdown";
        this.events.dispatchEvent("log", s), e({ success: !0, message: s }), this._clearClose();
      }, 2e3);
    });
  }
  _clearClose() {
    this.closingCb.resovle = null, this.closingCb.reject = null, this.closingTimer && (clearTimeout(this.closingTimer), this.closingTimer = null);
  }
  /**
   * Start connect websocket
   */
  connect(e) {
    return this.connectingXPromise = b({
      cb: () => this._wsConnect(e),
      retryCount: 3,
      intervalTime: 0,
      event: (t) => this.events.dispatchEvent("log", t)
    }), this.connectingXPromise.promise;
  }
  /**
   * Close websocket
   */
  async close() {
    var e, t;
    (e = this.connectingXPromise) != null && e.finished && ((t = this.connectingXPromise) == null || t.cancel()), this.heartbeat.clear(), await this._wsClose();
  }
  /**
   * Send msg
   * @param {string} msg - The event name.
   */
  send(e) {
    if (this.connectStatus !== r.connected) {
      const t = "Websocket send error: connectStatus not in connected status.";
      throw this.events.dispatchEvent("log", t), new Error(t);
    }
    a == null || a.send(e);
  }
  /**
   * Add a callback function
   * @param {string} eventName - The event name.
   * @param {function} fun - The callback function.
   */
  addEventListener(e, t) {
    this.events.addEventListener(e, t);
  }
  /**
   * remove a callback function
   * @param {string} eventName - The event name.
   * @param {function} fun - The callback function.
   */
  removeEventListener(e, t) {
    this.events.removeEventListener(e, t);
  }
}
export {
  r as SocketStatus,
  _ as WsController,
  P as XPromise
};
