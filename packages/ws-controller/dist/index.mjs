const T = (i) => {
  if (typeof i == "object" && i !== null) {
    if (typeof Object.getPrototypeOf == "function") {
      const e = Object.getPrototypeOf(i);
      return e === Object.prototype || e === null;
    }
    return Object.prototype.toString.call(i) === "[object Object]";
  }
  return !1;
}, l = (...i) => i.reduce((e, t) => {
  if (Array.isArray(t))
    throw new TypeError("Arguments provided to ts-deepmerge must be objects, not arrays.");
  return Object.keys(t).forEach((s) => {
    ["__proto__", "constructor", "prototype"].includes(s) || (Array.isArray(e[s]) && Array.isArray(t[s]) ? e[s] = l.options.mergeArrays ? l.options.uniqueArrayItems ? Array.from(new Set(e[s].concat(t[s]))) : [...e[s], ...t[s]] : t[s] : T(e[s]) && T(t[s]) ? e[s] = l(e[s], t[s]) : e[s] = t[s] === void 0 ? l.options.allowUndefinedOverrides ? t[s] : e[s] : t[s]);
  }), e;
}, {}), g = {
  allowUndefinedOverrides: !0,
  mergeArrays: !0,
  uniqueArrayItems: !0
};
l.options = g;
l.withOptions = (i, ...e) => {
  l.options = Object.assign(Object.assign({}, g), i);
  const t = l(...e);
  return l.options = g, t;
};
class E extends Promise {
  constructor(e, t) {
    let s, n;
    super((o, c) => {
      e(o, c), s = o, n = c;
    }), this.resolve = s, this.reject = n, this.cancelPromise = t;
  }
  cancel() {
    var e, t;
    (e = this.reject) == null || e.call(this, "promise has been canceled"), (t = this.cancelPromise) == null || t.call(this);
  }
}
var r = /* @__PURE__ */ ((i) => (i.closed = "closed", i.connecting = "connecting", i.connected = "connected", i.closing = "closing", i))(r || {});
class w {
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
  cb: i,
  retryCount: e,
  intervalTime: t,
  event: s
}) {
  let n = !1, o = () => {
  };
  return {
    promise: new Promise(async (d, u) => {
      o = () => {
        e = 0, n = !0;
        const h = "Because of reason [user cancel], re-execute end";
        return console.warn(h), s(h), u(new Error(h));
      };
      const f = async () => {
        try {
          const h = await i();
          d(h);
        } catch (h) {
          if (n)
            return;
          let m = `${h}`;
          h instanceof Error && (m = h.message);
          const p = `Because of reason [${m}], start re-execute on ${e}`;
          if (console.warn(p), s(p), e == 0) {
            const v = `Because of reason [${m}], re-execute end`;
            console.error(v), s(v), u(h);
          } else
            e !== 0 && (e > 0 && e--, setTimeout(() => {
              f();
            }, t));
        }
      };
      f();
    }),
    cancel: o
  };
}
class C {
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
    var o, c;
    if (!this.sendTimer || !((c = (o = this.options).handleHeartbeatMsg) == null ? void 0 : c.call(o, e)))
      return;
    let s = (/* @__PURE__ */ new Date()).getTime();
    const n = `heartbeat started at ${this.startTime}, completed in ${s}', duration is ${(s - this.startTime) / 1e3} seconds`;
    this.wsController.events.dispatchEvent("log", n), this.startTime = 0, this.sendTimer && (clearTimeout(this.sendTimer), this.sendTimer = null), this.reSendTimer || (this.reSendTimer = setTimeout(() => {
      this.send(), this.reSendTimer && clearTimeout(this.reSendTimer), this.reSendTimer = null;
    }, this.options.intervalTime));
  }
  clear() {
    this.sendTimer && clearTimeout(this.sendTimer), this.sendTimer = null, this.reSendTimer && clearTimeout(this.reSendTimer), this.reSendTimer = null, this.connectingXPromise && this.connectingXPromise.cancel(), this.wsController.events.dispatchEvent("log", "heartbeat was cleared out by user");
  }
}
let a = null;
class S {
  constructor(e) {
    this.options = {
      address: "",
      connectTimeout: 5e3,
      reconnectIntervalTime: 2e3,
      retry: 2,
      onOpened: function() {
      }
    }, this._connectStatus = r.closed, this.connectingCb = {
      resovle: null,
      reject: null
    }, this.closingCb = {
      resovle: null,
      reject: null
    }, this.pause = !1, this.connectingTimer = null, this.closingTimer = null, this.heartbeat = new C({ wsController: this }), this.events = new w(["message", "log", "status"]), this.setOptions(e);
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
    a = new WebSocket(e), a.onopen = function(s) {
      var n, o, c, d;
      if (t.connectStatus == r.connecting) {
        t.connectStatus = r.connected;
        const u = "Websocket start success.";
        (o = (n = t.connectingCb) == null ? void 0 : n.resovle) == null || o.call(n, { success: !0, message: u }), t.events.dispatchEvent("log", u), t._clearConnect(), (d = (c = t.options).onOpened) == null || d.call(c, t), setTimeout(() => {
          t.heartbeat.send();
        }, 1e3);
      }
    }, a.onclose = function(s) {
      var n, o;
      if (t.connectStatus == r.closing) {
        t.connectStatus = r.closed;
        const c = "Websocket closed success";
        (o = (n = t.closingCb) == null ? void 0 : n.resovle) == null || o.call(n, { success: !0, message: c }), t.events.dispatchEvent("log", c), t._clearClose();
      }
    }, a.onerror = function(s) {
      var n, o, c, d;
      if (t.connectStatus == r.connecting) {
        t.connectStatus = r.closed;
        const u = "Websocket start error";
        (o = (n = t.connectingCb) == null ? void 0 : n.reject) == null || o.call(n, { success: !1, message: u }), t.events.dispatchEvent("log", u), t._clearConnect();
      } else
        t.connectStatus == r.closing && (t.connectStatus = r.connecting, (d = (c = t.closingCb) == null ? void 0 : c.reject) == null || d.call(c, {
          success: !1,
          message: `关闭失败: onerror:${s}`
        }), t._clearClose());
    }, a.onmessage = function(s) {
      t.heartbeat.received(s), !t.pause && t.events.dispatchEvent("message", s);
    };
  }
  async _wsConnect(e) {
    return new Promise((t, s) => {
      try {
        let n = l(this.options, e ?? {});
        if (this.connectStatus == r.connected) {
          const o = "Websocket already connected";
          return this.events.dispatchEvent("log", o), t({ success: !0, message: o });
        }
        if (this.connectStatus !== r.closed) {
          const o = `Websocket connect failed: connectStatus current is ${this.connectStatus} not closed`;
          throw new Error(o);
        }
        this.connectingCb.resovle = t, this.connectingCb.reject = s, this.connectStatus = r.connecting, this._setSocketInstance(n.address), this.connectingTimer = setTimeout(() => {
          throw new Error("Websocket connect timeout");
        }, n.connectTimeout);
      } catch (n) {
        this.connectStatus = r.closed, a == null || a.close();
        let o = `${n}`;
        n instanceof Error && (o = n.message);
        const c = `connect failed: ${o}`;
        this.events.dispatchEvent("log", c), this._clearConnect(), s({ success: !1, message: c });
      }
    });
  }
  _clearConnect() {
    this.connectingCb.resovle = null, this.connectingCb.reject = null, this.connectingTimer && (clearTimeout(this.connectingTimer), this.connectingTimer = null);
  }
  async _wsClose() {
    return new Promise((e, t) => {
      if (this.connectStatus == r.closed) {
        const s = "Websocket already closed";
        return this.events.dispatchEvent("log", s), e({ success: !0, message: s });
      }
      if (this.connectStatus !== r.connected) {
        const s = `Websocket close filed: connectStatus current is ${this.connectStatus} not in connected.`;
        return this.events.dispatchEvent("log", s), t({ success: !1, message: s });
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
    var e;
    (e = this.connectingXPromise) == null || e.cancel(), this.heartbeat.clear(), await this._wsClose();
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
  S as WsController,
  E as XPromise
};
