const p = (r) => {
  if (typeof r == "object" && r !== null) {
    if (typeof Object.getPrototypeOf == "function") {
      const t = Object.getPrototypeOf(r);
      return t === Object.prototype || t === null;
    }
    return Object.prototype.toString.call(r) === "[object Object]";
  }
  return !1;
}, h = (...r) => r.reduce((t, e) => {
  if (Array.isArray(e))
    throw new TypeError("Arguments provided to ts-deepmerge must be objects, not arrays.");
  return Object.keys(e).forEach((s) => {
    ["__proto__", "constructor", "prototype"].includes(s) || (Array.isArray(t[s]) && Array.isArray(e[s]) ? t[s] = h.options.mergeArrays ? h.options.uniqueArrayItems ? Array.from(new Set(t[s].concat(e[s]))) : [...t[s], ...e[s]] : e[s] : p(t[s]) && p(e[s]) ? t[s] = h(t[s], e[s]) : t[s] = e[s] === void 0 ? h.options.allowUndefinedOverrides ? e[s] : t[s] : e[s]);
  }), t;
}, {}), m = {
  allowUndefinedOverrides: !0,
  mergeArrays: !0,
  uniqueArrayItems: !0
};
h.options = m;
h.withOptions = (r, ...t) => {
  h.options = Object.assign(Object.assign({}, m), r);
  const e = h(...t);
  return h.options = m, e;
};
class v extends Promise {
  constructor(t, e) {
    let s, n;
    super((i, o) => {
      t(i, o), s = i, n = o;
    }), this.resolve = s, this.reject = n, this.cancelPromise = e;
  }
  cancel() {
    var t, e;
    (t = this.reject) == null || t.call(this, "promise has been canceled"), (e = this.cancelPromise) == null || e.call(this);
  }
}
var c = /* @__PURE__ */ ((r) => (r.closed = "closed", r.connecting = "connecting", r.connected = "connected", r.closing = "closing", r))(c || {});
class T {
  constructor(t) {
    this.events = {}, t.forEach((e) => {
      Reflect.set(this.events, e, []);
    });
  }
  /**
   * Add a callback function
   * @param {string} eventName - The event name.
   * @param {function} fun - The callback function.
   */
  addEventListener(t, e) {
    if (!Reflect.has(this.events, t))
      throw new Error(`event ${t} doesn't exist!`);
    this.events[t].includes(e) || this.events[t].push(e);
  }
  /**
  * remove a callback function
  * @param {string} eventName - The event name.
  * @param {function} fun - The callback function.
  */
  removeEventListener(t, e) {
    if (!Reflect.has(this.events, t))
      throw new Error(`event ${t} doesn't exist!`);
    const s = this.events[t].indexOf(e);
    s !== -1 && this.events[t].splice(s, 1);
  }
  dispatchEvent(t, e) {
    if (!Reflect.has(this.events, t))
      throw new Error(`event ${t} doesn't exist!`);
    this.events[t].forEach((s) => s(e));
  }
}
class b {
  constructor({ wsContoller: t, options: e }) {
    this.sendTimer = null, this.reSendTimer = null, this.connectingXPromise = null, this.startTime = 0, this.options = {
      handleHeartbeatMsg: (s) => !0,
      timeout: 5e3,
      intervalTime: 5e3,
      sendMsg: "---- heartbeat ----"
    }, this.wsContoller = t, this.setOptions(e);
  }
  setOptions(t = {}) {
    this.options = h(this.options, t);
  }
  send() {
    const t = `heartbeat send message: ${this.options.sendMsg}`;
    this.wsContoller.events.dispatchEvent("log", t), this.startTime = (/* @__PURE__ */ new Date()).getTime(), this.wsContoller.send(this.options.sendMsg), this.sendTimer && clearTimeout(this.sendTimer), this.sendTimer = setTimeout(async () => {
      this.wsContoller.connectStatus == c.connected && await this.wsContoller._wsClose(), this.connectingXPromise = this.wsContoller._reExecute({ cb: () => this.wsContoller._wsConnect({}), retryCount: -1, intervalTime: 2e3 });
    }, this.options.timeout);
  }
  received(t) {
    var i, o;
    if (!this.sendTimer || !((o = (i = this.options).handleHeartbeatMsg) == null ? void 0 : o.call(i, t)))
      return;
    let s = (/* @__PURE__ */ new Date()).getTime();
    const n = `heartbeat started at ${this.startTime}, completed in ${s}', duration is ${(s - this.startTime) / 1e3} seconds`;
    this.wsContoller.events.dispatchEvent("log", n), this.startTime = 0, this.sendTimer && (clearTimeout(this.sendTimer), this.sendTimer = null), this.reSendTimer || (this.reSendTimer = setTimeout(() => {
      this.send(), this.reSendTimer && clearTimeout(this.reSendTimer), this.reSendTimer = null;
    }, this.options.intervalTime));
  }
  clear() {
    this.sendTimer && clearTimeout(this.sendTimer), this.sendTimer = null, this.reSendTimer && clearTimeout(this.reSendTimer), this.reSendTimer = null, this.connectingXPromise && this.connectingXPromise.cancel(), this.wsContoller.events.dispatchEvent("log", "heartbeat was cleared out by user");
  }
}
let a = null;
class w {
  constructor(t) {
    this.options = {
      address: "",
      connectTimeout: 5e3,
      reconnectIntervalTime: 2e3,
      retry: 2,
      onOpened: function() {
      }
    }, this._connectStatus = c.closed, this.connectingCb = {
      resovle: null,
      reject: null
    }, this.closingCb = {
      resovle: null,
      reject: null
    }, this.pause = !1, this.connectingTimer = null, this.closingTimer = null, this.heartbeat = new b({ wsContoller: this }), this.events = new T(["message", "log", "status"]), this.setOptions(t);
  }
  get connectStatus() {
    return this._connectStatus;
  }
  set connectStatus(t) {
    this._connectStatus = t, this.events.dispatchEvent("status", this._connectStatus);
  }
  setOptions({ wsOptions: t, heartbeatOptions: e }) {
    this.options = h(this.options, t ?? {}), this.heartbeat.setOptions(e);
  }
  _setSocketInstance(t) {
    const e = this;
    a = new WebSocket(t), a.onopen = function(s) {
      var n, i, o, u;
      if (e.connectStatus == c.connecting) {
        e.connectStatus = c.connected;
        const l = "Websocket start success.";
        (i = (n = e.connectingCb) == null ? void 0 : n.resovle) == null || i.call(n, { success: !0, message: l }), e.events.dispatchEvent("log", l), e._clearConnect(), (u = (o = e.options).onOpened) == null || u.call(o, e), setTimeout(() => {
          e.heartbeat.send();
        }, 1e3);
      }
    }, a.onclose = function(s) {
      var n, i;
      if (e.connectStatus == c.closing) {
        e.connectStatus = c.closed;
        const o = "Websocket closed success";
        (i = (n = e.closingCb) == null ? void 0 : n.resovle) == null || i.call(n, { success: !0, message: o }), e.events.dispatchEvent("log", o), e._clearClose();
      }
    }, a.onerror = function(s) {
      var n, i, o, u;
      if (e.connectStatus == c.connecting) {
        e.connectStatus = c.closed;
        const l = "Websocket start error";
        (i = (n = e.connectingCb) == null ? void 0 : n.reject) == null || i.call(n, { success: !1, message: l }), e.events.dispatchEvent("log", l), e._clearConnect();
      } else
        e.connectStatus == c.closing && (e.connectStatus = c.connecting, (u = (o = e.closingCb) == null ? void 0 : o.reject) == null || u.call(o, { success: !1, message: `关闭失败: onerror:${s}` }), e._clearClose());
    }, a.onmessage = function(s) {
      e.heartbeat.received(s), !e.pause && e.events.dispatchEvent("message", s);
    };
  }
  async _wsConnect(t) {
    return new Promise((e, s) => {
      try {
        let n = h(this.options, t ?? {});
        if (this.connectStatus == c.connected) {
          const i = "Websocket already connected";
          return this.events.dispatchEvent("log", i), e({ success: !0, message: i });
        }
        if (this.connectStatus !== c.closed) {
          const i = `Websocket connect failed: connectStatus current is ${this.connectStatus} not closed`;
          throw new Error(i);
        }
        this.connectingCb.resovle = e, this.connectingCb.reject = s, this.connectStatus = c.connecting, this._setSocketInstance(n.address), this.connectingTimer = setTimeout(() => {
          throw new Error("Websocket connect timeout");
        }, n.connectTimeout);
      } catch (n) {
        this.connectStatus = c.closed, a == null || a.close();
        let i = `${n}`;
        n instanceof Error && (i = n.message);
        const o = `connect failed: ${i}`;
        this.events.dispatchEvent("log", o), this._clearConnect(), s({ success: !1, message: o });
      }
    });
  }
  _reExecute({ cb: t, retryCount: e, intervalTime: s }) {
    const n = () => {
      e = 0;
    };
    return new v(async (i, o) => {
      const u = async () => {
        try {
          const l = await t();
          i(l);
        } catch (l) {
          let d = `${l}`;
          l instanceof Error && (d = l.message);
          const g = `Because of reason [${d}], start re-execute on ${e}`;
          if (console.warn(g), this.events.dispatchEvent("log", g), e !== 0)
            e > 0 && e--, setTimeout(() => {
              u();
            }, s);
          else if (e == 0) {
            const f = `Because of reason [${d}], re-execute end`;
            return console.error(f), this.events.dispatchEvent("log", f), o(l);
          }
        }
      };
      u();
    }, n);
  }
  _clearConnect() {
    this.connectingCb.resovle = null, this.connectingCb.reject = null, this.connectingTimer && (clearTimeout(this.connectingTimer), this.connectingTimer = null);
  }
  async _wsClose() {
    return new Promise((t, e) => {
      if (this.connectStatus == c.closed) {
        const s = "Websocket already closed";
        return this.events.dispatchEvent("log", s), t({ success: !0, message: s });
      }
      if (this.connectStatus !== c.connected) {
        const s = `Websocket close filed: connectStatus current is ${this.connectStatus} not in connected.`;
        return this.events.dispatchEvent("log", s), e({ success: !1, message: s });
      }
      this.closingCb.resovle = t, this.closingCb.reject = e, this.connectStatus = c.closing, a == null || a.close(), this.closingTimer = setTimeout(() => {
        this.connectStatus = c.closed;
        const s = "Websocket close were timeout so it forced shutdown";
        this.events.dispatchEvent("log", s), t({ success: !0, message: s }), this._clearClose();
      }, 2e3);
    });
  }
  _clearClose() {
    this.closingCb.resovle = null, this.closingCb.reject = null, this.closingTimer && (clearTimeout(this.closingTimer), this.closingTimer = null);
  }
  /**
   * Start connect websocket
   */
  connect(t) {
    return this.connectingXPromise = this._reExecute({ cb: () => this._wsConnect(t), retryCount: 3, intervalTime: 0 }), this.connectingXPromise;
  }
  /**
   * Close websocket
   */
  async close() {
    var t;
    (t = this.connectingXPromise) == null || t.cancel(), this.heartbeat.clear(), await this._wsClose();
  }
  /**
   * Send msg
   * @param {string} msg - The event name.
   */
  send(t) {
    if (this.connectStatus !== c.connected) {
      const e = "Websocket send error: connectStatus not in connected status.";
      throw this.events.dispatchEvent("log", e), new Error(e);
    }
    a == null || a.send(t);
  }
  /**
   * Add a callback function
   * @param {string} eventName - The event name.
   * @param {function} fun - The callback function.
   */
  addEventListener(t, e) {
    this.events.addEventListener(t, e);
  }
  /**
   * remove a callback function
   * @param {string} eventName - The event name.
   * @param {function} fun - The callback function.
   */
  removeEventListener(t, e) {
    this.events.removeEventListener(t, e);
  }
}
export {
  c as SocketStatus,
  w as WsContoller,
  v as XPromise
};
