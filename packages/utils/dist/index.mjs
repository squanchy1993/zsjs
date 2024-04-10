function dt(t, e = 1e3) {
  let r = !1, n, s = 1e3;
  e && (s = e);
  const a = async () => {
    try {
      await t();
    } finally {
      r && (n = setTimeout(() => {
        clearTimeout(n), a();
      }, s));
    }
  };
  return {
    start: () => {
      if (r)
        throw new Error("ready start!");
      r = !0, a();
    },
    stop: () => r = !1,
    refresh: a,
    setTime: (u) => {
      s = u;
    }
  };
}
function gt({
  cb: t,
  retryCount: e,
  intervalTime: r,
  event: n
}) {
  let s = !1, a = !1, i = () => {
  };
  return {
    promise: new Promise(async (f, u) => {
      i = () => {
        if (s == !0)
          return;
        e = 0, a = !0, s = !0;
        const l = "Because of reason [user cancel], re-execute end";
        return console.warn(l), n(l), u(new Error(l));
      };
      const m = async () => {
        try {
          const l = await t();
          s = !0, f(l);
        } catch (l) {
          if (a)
            return;
          let h = "";
          l instanceof Error ? h = l.message : h = JSON.stringify(l);
          const g = `Because of reason [${h}], start re-execute on ${e}`;
          if (console.warn(g), n(g), e == 0) {
            const y = `Because of reason [${h}], re-execute end`;
            console.error(y), n(y), s = !0, u(l);
          } else
            e !== 0 && (e > 0 && e--, setTimeout(() => {
              m();
            }, r));
        }
      };
      m();
    }),
    cancel: i
  };
}
function mt(t, e) {
  let r = (i) => {
  }, n;
  e && (n = setTimeout(() => {
    r("execute function timeout");
  }, e));
  const s = new Promise((i, o) => {
    r = (f = "promise aborted") => {
      o(new B(f));
    };
  });
  return {
    promise: Promise.race([t, s]).then((i) => (n && (clearTimeout(n), n = void 0), i)),
    abort: r
  };
}
class B extends Error {
  constructor(e) {
    super(e);
  }
}
function b(t) {
  return t && (Array.isArray(t) ? t.map((e) => b(e)) : t instanceof Date ? new Date(t) : typeof t == "object" ? Object.fromEntries(
    Object.entries(t).map(([e, r]) => [e, b(r)])
  ) : t);
}
function St(t) {
  const e = b(t);
  return { data: t, defaultData: e, getClone: () => b(e) };
}
class M {
  constructor(e) {
    this.events = {}, e.forEach((r) => {
      Reflect.set(this.events, r, []);
    });
  }
  /**
   * Add a callback function
   * @param {string} eventName - The event name.
   * @param {function} fun - The callback function.
   */
  addEventListener(e, r) {
    if (!Reflect.has(this.events, e))
      throw new Error(`event ${e} doesn't exist!`);
    this.events[e].includes(r) || this.events[e].push(r);
  }
  /**
  * remove a callback function
  * @param {string} eventName - The event name.
  * @param {function} fun - The callback function.
  */
  removeEventListener(e, r) {
    if (!Reflect.has(this.events, e))
      throw new Error(`event ${e} doesn't exist!`);
    const n = this.events[e].indexOf(r);
    n !== -1 && this.events[e].splice(n, 1);
  }
  dispatchEvent(e, r) {
    if (!Reflect.has(this.events, e))
      throw new Error(`event ${e} doesn't exist!`);
    this.events[e].forEach((n) => n(r));
  }
}
function C(t = {}, e = {}) {
  let r;
  for (r in e)
    t[r] = F(t[r]) ? C(t[r], e[r]) : t[r] = e[r];
  return t;
}
function F(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
var z = typeof global == "object" && global && global.Object === Object && global, G = typeof self == "object" && self && self.Object === Object && self, R = z || G || Function("return this")(), v = R.Symbol, k = Object.prototype, U = k.hasOwnProperty, _ = k.toString, p = v ? v.toStringTag : void 0;
function q(t) {
  var e = U.call(t, p), r = t[p];
  try {
    t[p] = void 0;
    var n = !0;
  } catch {
  }
  var s = _.call(t);
  return n && (e ? t[p] = r : delete t[p]), s;
}
var H = Object.prototype, J = H.toString;
function X(t) {
  return J.call(t);
}
var K = "[object Null]", Q = "[object Undefined]", P = v ? v.toStringTag : void 0;
function V(t) {
  return t == null ? t === void 0 ? Q : K : P && P in Object(t) ? q(t) : X(t);
}
function Y(t) {
  return t != null && typeof t == "object";
}
var Z = "[object Symbol]";
function N(t) {
  return typeof t == "symbol" || Y(t) && V(t) == Z;
}
var tt = /\s/;
function et(t) {
  for (var e = t.length; e-- && tt.test(t.charAt(e)); )
    ;
  return e;
}
var rt = /^\s+/;
function nt(t) {
  return t && t.slice(0, et(t) + 1).replace(rt, "");
}
function j(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
var I = NaN, st = /^[-+]0x[0-9a-f]+$/i, it = /^0b[01]+$/i, at = /^0o[0-7]+$/i, ot = parseInt;
function $(t) {
  if (typeof t == "number")
    return t;
  if (N(t))
    return I;
  if (j(t)) {
    var e = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = j(e) ? e + "" : e;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = nt(t);
  var r = it.test(t);
  return r || at.test(t) ? ot(t.slice(2), r ? 2 : 8) : st.test(t) ? I : +t;
}
var x = function() {
  return R.Date.now();
}, ct = "Expected a function", ft = Math.max, lt = Math.min;
function ut(t, e, r) {
  var n, s, a, i, o, f, u = 0, m = !1, l = !1, h = !0;
  if (typeof t != "function")
    throw new TypeError(ct);
  e = $(e) || 0, j(r) && (m = !!r.leading, l = "maxWait" in r, a = l ? ft($(r.maxWait) || 0, e) : a, h = "trailing" in r ? !!r.trailing : h);
  function g(c) {
    var d = n, S = s;
    return n = s = void 0, u = c, i = t.apply(S, d), i;
  }
  function y(c) {
    return u = c, o = setTimeout(T, e), m ? g(c) : i;
  }
  function D(c) {
    var d = c - f, S = c - u, L = e - d;
    return l ? lt(L, a - S) : L;
  }
  function w(c) {
    var d = c - f, S = c - u;
    return f === void 0 || d >= e || d < 0 || l && S >= a;
  }
  function T() {
    var c = x();
    if (w(c))
      return O(c);
    o = setTimeout(T, D(c));
  }
  function O(c) {
    return o = void 0, h && n ? g(c) : (n = s = void 0, i);
  }
  function W() {
    o !== void 0 && clearTimeout(o), u = 0, n = f = s = o = void 0;
  }
  function A() {
    return o === void 0 ? i : O(x());
  }
  function E() {
    var c = x(), d = w(c);
    if (n = arguments, s = this, f = c, d) {
      if (o === void 0)
        return y(f);
      if (l)
        return clearTimeout(o), o = setTimeout(T, e), g(f);
    }
    return o === void 0 && (o = setTimeout(T, e)), i;
  }
  return E.cancel = W, E.flush = A, E;
}
const ht = {
  searchParams: {},
  pageParams: {
    pageIndex: 1,
    pageSize: 10
  },
  pageSizes: [10, 30, 50],
  list: [],
  total: 0,
  totalPage: 0,
  // status
  getListStatus: "succeed",
  // succeed, failed, loading;
  searchStatus: "succeed",
  // succeed failed, loading;
  pagingStatus: "succeed"
  /* succeed */
  // succeed failed, loading;
};
class pt {
  constructor({ requestFun: e, listState: r }) {
    this.events = new M(["changeState"]), this.addStateChangeListener = (n) => this.events.addEventListener("changeState", n), this.removeStateChangeListener = (n) => this.events.removeEventListener("changeState", n), this.dispatchStateChangeListener = ut(() => {
      const n = b(this.listState);
      this.events.dispatchEvent("changeState", n);
    }, 50), this.setListState = (n) => {
      let s = {
        set: (i, o, f) => (Reflect.set(i, o, f), this.dispatchStateChangeListener(), !0)
      };
      const a = C(ht, n);
      return new Proxy(a, s);
    }, this.getList = () => new Promise((n, s) => {
      this.listState.getListStatus === "loading" && s(new Error("加载中,请稍等")), this.listState.getListStatus = "loading";
      const a = { ...this.listState.searchParams, page: this.listState.pageParams };
      this.requestFun(a).then((i) => {
        const { list: o, total: f, totalPage: u = 0 } = i;
        this.listState.totalPage = u, this.listState.total = f, this.listState.list = o, this.listState.getListStatus = "succeed", n(i);
      }).catch((i) => {
        console.error(i), this.listState.getListStatus = "failed", s(i);
      });
    }), this.handleSearch = async () => {
      this.listState.searchStatus = "loading", this.listState.pageParams.pageIndex = 1;
      try {
        const n = await this.getList();
        return this.listState.searchStatus = "succeed", n;
      } catch (n) {
        console.error("search get error:" + n), this.listState.searchStatus = "failed";
      }
    }, this.handlePageChange = async ({ pageIndex: n, pageSize: s }) => {
      this.listState.pagingStatus = "loading", n && (this.listState.pageParams.pageIndex = n), s && (this.listState.pageParams.pageSize = s);
      try {
        const a = await this.getList();
        return this.listState.pagingStatus = "succeed", a;
      } catch (a) {
        console.error("search get error:" + a), this.listState.pagingStatus = "failed";
      }
    }, this.listState = this.setListState(r), e && (this.requestFun = e);
  }
}
export {
  M as EventsCollect,
  pt as ListInstance,
  mt as cancelablePromise,
  St as dataWithDefault,
  b as deepClone,
  dt as loopFunc,
  gt as reExecute
};
