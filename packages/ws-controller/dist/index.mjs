const b = (o) => {
  if (typeof o == "object" && o !== null) {
    if (typeof Object.getPrototypeOf == "function") {
      const e = Object.getPrototypeOf(o);
      return e === Object.prototype || e === null;
    }
    return Object.prototype.toString.call(o) === "[object Object]";
  }
  return !1;
}, m = (...o) => o.reduce((e, t) => {
  if (Array.isArray(t))
    throw new TypeError("Arguments provided to ts-deepmerge must be objects, not arrays.");
  return Object.keys(t).forEach((s) => {
    ["__proto__", "constructor", "prototype"].includes(s) || (Array.isArray(e[s]) && Array.isArray(t[s]) ? e[s] = m.options.mergeArrays ? m.options.uniqueArrayItems ? Array.from(new Set(e[s].concat(t[s]))) : [...e[s], ...t[s]] : t[s] : b(e[s]) && b(t[s]) ? e[s] = m(e[s], t[s]) : e[s] = t[s] === void 0 ? m.options.allowUndefinedOverrides ? t[s] : e[s] : t[s]);
  }), e;
}, {}), f = {
  allowUndefinedOverrides: !0,
  mergeArrays: !0,
  uniqueArrayItems: !0
};
m.options = f;
m.withOptions = (o, ...e) => {
  m.options = Object.assign(Object.assign({}, f), o);
  const t = m(...e);
  return m.options = f, t;
};
class P extends Promise {
  constructor(e, t) {
    let s, n;
    super((c, r) => {
      e(c, r), s = c, n = r;
    }), this.resolve = s, this.reject = n, this.cancelPromise = t;
  }
  cancel() {
    var e, t;
    (e = this.reject) == null || e.call(this, "promise has been canceled"), (t = this.cancelPromise) == null || t.call(this);
  }
}
var h = /* @__PURE__ */ ((o) => (o.closed = "closed", o.connecting = "connecting", o.connected = "connected", o.closing = "closing", o))(h || {});
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
function T({
  cb: o,
  retryCount: e,
  intervalTime: t,
  event: s
}) {
  let n = !1, c = !1, r = () => {
  };
  return {
    promise: new Promise(async (u, i) => {
      r = () => {
        if (n == !0)
          return;
        e = 0, c = !0, n = !0;
        const l = "Because of reason [user cancel], re-execute end";
        return console.warn(l), s(l), i(new Error(l));
      };
      const a = async () => {
        try {
          const l = await o();
          n = !0, u(l);
        } catch (l) {
          if (c)
            return;
          let p = "";
          l instanceof Error ? p = l.message : p = JSON.stringify(l);
          const v = `Because of reason [${p}], start re-execute on ${e}`;
          if (console.warn(v), s(v), e == 0) {
            const w = `Because of reason [${p}], re-execute end`;
            console.error(w), s(w), n = !0, i(l);
          } else
            e !== 0 && (e > 0 && e--, setTimeout(() => {
              a();
            }, t));
        }
      };
      a();
    }),
    cancel: r
  };
}
function S(o, e) {
  let t = (r) => {
  }, s;
  e && (s = setTimeout(() => {
    t("execute function timeout");
  }, e));
  const n = new Promise((r, g) => {
    t = (u = "promise aborted") => {
      g(new C(u));
    };
  });
  return {
    promise: Promise.race([o, n]).then((r) => (s && (clearTimeout(s), s = void 0), r)),
    abort: t
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
    this.connectingXPromise = null, this.startTime = 0, this.options = {
      handleHeartbeatMsg: (s) => !0,
      timeout: 5e3,
      intervalTime: 5e3,
      sendMsg: "---- heartbeat ----"
    }, this.wsController = e, this.setOptions(t);
  }
  setOptions(e = {}) {
    this.options = m(this.options, e);
  }
  send() {
    const e = `heartbeat send message: ${this.options.sendMsg}`;
    this.wsController.events.dispatchEvent("log", e), this.startTime = (/* @__PURE__ */ new Date()).getTime(), this.sendTimer && clearTimeout(this.sendTimer), this.sendTimer = setTimeout(async () => {
      this.wsController.connectStatus == h.connected && await this.wsController.close(), this.connectingXPromise = T({
        cb: () => this.wsController.connect({}, 0, 0),
        retryCount: -1,
        intervalTime: 2e3,
        event: (t) => this.wsController.events.dispatchEvent("log", t)
      });
    }, this.options.timeout), this.wsController.send(this.options.sendMsg);
  }
  received(e) {
    var c, r;
    if (!this.sendTimer || !((r = (c = this.options).handleHeartbeatMsg) == null ? void 0 : r.call(c, e)))
      return;
    let s = (/* @__PURE__ */ new Date()).getTime();
    const n = `heartbeat started at ${this.startTime}, completed in ${s}', duration is ${(s - this.startTime) / 1e3} seconds`;
    this.wsController.events.dispatchEvent("log", n), this.startTime = 0, this.sendTimer && (clearTimeout(this.sendTimer), this.sendTimer = void 0), this.reSendTimer || (this.reSendTimer = setTimeout(() => {
      this.send(), this.reSendTimer && clearTimeout(this.reSendTimer), this.reSendTimer = void 0;
    }, this.options.intervalTime));
  }
  clear() {
    this.sendTimer && clearTimeout(this.sendTimer), this.sendTimer = void 0, this.reSendTimer && clearTimeout(this.reSendTimer), this.reSendTimer = void 0, this.connectingXPromise && this.connectingXPromise.cancel(), this.wsController.events.dispatchEvent("log", "heartbeat was cleared out by user");
  }
}
let d = null;
class W {
  constructor(e) {
    this.options = {
      address: "",
      connectTimeout: 5e3,
      reconnectIntervalTime: 2e3,
      retry: 2,
      onOpened: function() {
      }
    }, this._connectStatus = h.closed, this.closingCb = {
      resovle: null,
      reject: null
    }, this.pause = !1, this.connectingTimer = null, this.heartbeat = new O({ wsController: this }), this.events = new E(["message", "log", "status"]), this.setOptions(e);
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
    this.options = m(this.options, e ?? {}), this.heartbeat.setOptions(t);
  }
  _startWsConnect(e, t = 0, s = 0) {
    const n = this;
    console.log("_startWsConnect>>>", e);
    const c = () => new Promise((r, g) => {
      d = new WebSocket(e), d.onopen = function(u) {
        if (console.log("onopen", n.connectStatus), n.connectStatus == h.connecting) {
          const i = "Websocket start success.";
          n.events.dispatchEvent("log", i), r({ success: !0, message: i });
        }
      }, d.onmessage = function(u) {
        console.log("onmessage", n.connectStatus), n.heartbeat.received(u), !n.pause && n.events.dispatchEvent("message", u);
      }, d.onerror = function(u) {
        var i, a;
        if (console.log("Websocket onerror:", n.connectStatus), n.connectStatus == h.connecting) {
          const l = `Websocket onerror:${u}`;
          g(new Error(l)), console.log("Websocket onerror: connecting", n.connectStatus, g), n.events.dispatchEvent("log", l);
        } else
          n.connectStatus == h.closing && ((a = (i = n.closingCb) == null ? void 0 : i.reject) == null || a.call(i, new Error(`Websocket onerror:${u}`)));
      }, d.onclose = function(u) {
        var i, a;
        if (console.log("onclose", n.connectStatus), n.connectStatus == h.closing) {
          const l = "Websocket closed success";
          (a = (i = n.closingCb) == null ? void 0 : i.resovle) == null || a.call(i, { success: !0, message: l }), n.events.dispatchEvent("log", l);
        }
      };
    });
    return T({
      cb: () => S(c(), n.options.connectTimeout).promise,
      retryCount: t,
      intervalTime: s,
      event: (r) => this.events.dispatchEvent("log", r)
    });
  }
  async connect(e, t = 3, s = 0) {
    return new Promise(async (n, c) => {
      var r, g, u;
      try {
        if (this.setOptions({ wsOptions: e }), this.connectStatus == h.connected) {
          const a = "Websocket already connected";
          return this.events.dispatchEvent("log", a), n({ success: !0, message: a });
        }
        if (!this.options.address) {
          const a = "Websocket adress not exsit";
          throw this.events.dispatchEvent("log", a), new Error(a);
        }
        if (this.connectStatus !== h.closed) {
          const a = `Websocket connect failed: connectStatus current is ${this.connectStatus} not closed`;
          throw new Error(a);
        }
        this.connectStatus = h.connecting, (r = this.socketConnect) == null || r.cancel(), this.socketConnect = void 0, this.socketConnect = this._startWsConnect(this.options.address, t, s);
        let i = await this.socketConnect.promise;
        this.connectStatus = h.connected, (u = (g = this.options).onOpened) == null || u.call(g, this), setTimeout(() => {
          this.heartbeat.send();
        }, 1e3), n(i), console.log("connect>>>: success", this.connectStatus);
      } catch (i) {
        this.connectStatus = h.closed, console.log("connect>>>: error", i);
        let a = `${i}`;
        i instanceof Error && (a = i.message);
        const l = `connect failed: ${a}`;
        this.events.dispatchEvent("log", l), c(new Error(l));
      }
    });
  }
  async _wsClose() {
    return new Promise((e, t) => {
      clearTimeout(this.closingTimer), this.closingTimer = setTimeout(() => {
        e({ success: !0, message: "Websocket close were timeout so it forced shutdown" }), s();
      }, 2e3);
      const s = () => {
        this.closingCb.resovle = null, this.closingCb.reject = null, clearTimeout(this.closingTimer);
      };
      this.closingCb.resovle = () => {
        e({ success: !0, message: "Websocket closed" }), s();
      }, this.closingCb.reject = (n) => {
        const c = `Websocket closed error: ${JSON.stringify(n.message)}`;
        e({ success: !0, message: c }), s();
      }, d == null || d.close();
    });
  }
  /**
   * Close websocket
   */
  async close() {
    return new Promise(async (e, t) => {
      var n;
      if (this.connectStatus == h.closed) {
        const c = "Websocket already closed";
        return this.events.dispatchEvent("log", c), e({ success: !0, message: c });
      }
      if (this.connectStatus !== h.connected) {
        const c = `Websocket close filed: connectStatus current is ${this.connectStatus} not in connected.`;
        return this.events.dispatchEvent("log", c), t(new Error(c));
      }
      this.connectStatus = h.closing;
      const { message: s } = await this._wsClose();
      this.events.dispatchEvent("log", s), this.connectStatus = h.closed, (n = this.socketConnect) == null || n.cancel(), this.heartbeat.clear(), e({ success: !0, message: s });
    });
  }
  /**
   * Send msg
   * @param {string} msg - The event name.
   */
  send(e) {
    if (this.connectStatus !== h.connected) {
      const t = "Websocket send error: connectStatus not in connected status.";
      throw this.events.dispatchEvent("log", t), new Error(t);
    }
    d == null || d.send(e);
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
  h as SocketStatus,
  W as WsController,
  P as XPromise
};
