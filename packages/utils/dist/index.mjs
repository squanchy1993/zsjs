function dt(t, e = 1e3) {
  let r = !1, s, n = 1e3;
  e && (n = e);
  const o = async () => {
    try {
      await t();
    } finally {
      r && (s = setTimeout(() => {
        clearTimeout(s), o();
      }, n));
    }
  };
  return {
    start: () => {
      if (r)
        throw new Error("ready start!");
      r = !0, o();
    },
    stop: () => r = !1,
    refresh: o,
    setTime: (u) => {
      n = u;
    }
  };
}
function gt({
  cb: t,
  retryCount: e,
  intervalTime: r,
  event: s
}) {
  let n = !1, o = !1, a = () => {
  };
  return {
    promise: new Promise(async (l, u) => {
      a = () => {
        if (n == !0)
          return;
        e = 0, o = !0, n = !0;
        const f = "Because of reason [user cancel], re-execute end";
        return console.warn(f), s(f), u(new Error(f));
      };
      const g = async () => {
        try {
          const f = await t();
          n = !0, l(f);
        } catch (f) {
          if (o)
            return;
          let h = "";
          f instanceof Error ? h = f.message : h = JSON.stringify(f);
          const m = `Because of reason [${h}], start re-execute on ${e}`;
          if (console.warn(m), s(m), e == 0) {
            const y = `Because of reason [${h}], re-execute end`;
            console.error(y), s(y), n = !0, u(f);
          } else
            e !== 0 && (e > 0 && e--, setTimeout(() => {
              g();
            }, r));
        }
      };
      g();
    }),
    cancel: a
  };
}
function mt(t, e) {
  let r = (a) => {
  }, s;
  e && (s = setTimeout(() => {
    r("execute function timeout");
  }, e));
  const n = new Promise((a, i) => {
    r = (l = "promise aborted") => {
      i(new A(l));
    };
  });
  return {
    promise: Promise.race([t, n]).then((a) => (s && (clearTimeout(s), s = void 0), a)),
    abort: r
  };
}
class A extends Error {
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
    const s = this.events[e].indexOf(r);
    s !== -1 && this.events[e].splice(s, 1);
  }
  dispatchEvent(e, r) {
    if (!Reflect.has(this.events, e))
      throw new Error(`event ${e} doesn't exist!`);
    this.events[e].forEach((s) => s(r));
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
var z = typeof global == "object" && global && global.Object === Object && global, G = typeof self == "object" && self && self.Object === Object && self, k = z || G || Function("return this")(), v = k.Symbol, R = Object.prototype, U = R.hasOwnProperty, _ = R.toString, p = v ? v.toStringTag : void 0;
function q(t) {
  var e = U.call(t, p), r = t[p];
  try {
    t[p] = void 0;
    var s = !0;
  } catch {
  }
  var n = _.call(t);
  return s && (e ? t[p] = r : delete t[p]), n;
}
var H = Object.prototype, J = H.toString;
function X(t) {
  return J.call(t);
}
var K = "[object Null]", Q = "[object Undefined]", O = v ? v.toStringTag : void 0;
function V(t) {
  return t == null ? t === void 0 ? Q : K : O && O in Object(t) ? q(t) : X(t);
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
function w(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
var I = NaN, st = /^[-+]0x[0-9a-f]+$/i, it = /^0b[01]+$/i, at = /^0o[0-7]+$/i, ot = parseInt;
function $(t) {
  if (typeof t == "number")
    return t;
  if (N(t))
    return I;
  if (w(t)) {
    var e = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = w(e) ? e + "" : e;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = nt(t);
  var r = it.test(t);
  return r || at.test(t) ? ot(t.slice(2), r ? 2 : 8) : st.test(t) ? I : +t;
}
var E = function() {
  return k.Date.now();
}, ct = "Expected a function", lt = Math.max, ft = Math.min;
function ut(t, e, r) {
  var s, n, o, a, i, l, u = 0, g = !1, f = !1, h = !0;
  if (typeof t != "function")
    throw new TypeError(ct);
  e = $(e) || 0, w(r) && (g = !!r.leading, f = "maxWait" in r, o = f ? lt($(r.maxWait) || 0, e) : o, h = "trailing" in r ? !!r.trailing : h);
  function m(c) {
    var d = s, S = n;
    return s = n = void 0, u = c, a = t.apply(S, d), a;
  }
  function y(c) {
    return u = c, i = setTimeout(T, e), g ? m(c) : a;
  }
  function D(c) {
    var d = c - l, S = c - u, L = e - d;
    return f ? ft(L, o - S) : L;
  }
  function P(c) {
    var d = c - l, S = c - u;
    return l === void 0 || d >= e || d < 0 || f && S >= o;
  }
  function T() {
    var c = E();
    if (P(c))
      return j(c);
    i = setTimeout(T, D(c));
  }
  function j(c) {
    return i = void 0, h && s ? m(c) : (s = n = void 0, a);
  }
  function B() {
    i !== void 0 && clearTimeout(i), u = 0, s = l = n = i = void 0;
  }
  function W() {
    return i === void 0 ? a : j(E());
  }
  function x() {
    var c = E(), d = P(c);
    if (s = arguments, n = this, l = c, d) {
      if (i === void 0)
        return y(l);
      if (f)
        return clearTimeout(i), i = setTimeout(T, e), m(l);
    }
    return i === void 0 && (i = setTimeout(T, e)), a;
  }
  return x.cancel = B, x.flush = W, x;
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
  constructor({
    requestFun: e = void 0,
    listState: r = void 0,
    listType: s = "replace"
    /* replace */
  }) {
    this.events = new M(["changeState"]), this.addStateChangeListener = (n) => this.events.addEventListener("changeState", n), this.removeStateChangeListener = (n) => this.events.removeEventListener("changeState", n), this.dispatchStateChangeListener = ut(() => {
      const n = b(this.listState);
      this.events.dispatchEvent("changeState", n);
    }, 50), this.setListState = (n) => {
      let o = {
        set: (i, l, u) => (Reflect.set(i, l, u), this.dispatchStateChangeListener(), !0)
      };
      const a = C(ht, n);
      return new Proxy(a, o);
    }, this.getList = () => new Promise((n, o) => {
      this.listState.getListStatus === "loading" && o(new Error("加载中,请稍等")), this.listState.getListStatus = "loading";
      const a = {
        ...this.listState.searchParams,
        page: this.listState.pageParams
      };
      this.requestFun(a).then((i) => {
        this.listState.getListStatus = "succeed";
        const { list: l, total: u, totalPage: g = 0 } = i;
        this.listState.totalPage = g, this.listState.total = u, this.listType == "replace" || this.listState.pageParams.pageIndex == 1 ? this.listState.list = l : this.listState.list = this.listState.list.concat(l), n(i);
      }).catch((i) => {
        console.error(i), this.listState.getListStatus = "failed", o(i);
      });
    }), this.handleSearch = async () => {
      this.listState.searchStatus = "loading", this.listState.pageParams.pageIndex = 1;
      try {
        const n = await this.getList();
        return this.listState.searchStatus = "succeed", n;
      } catch (n) {
        console.error("search get error:" + n), this.listState.searchStatus = "failed";
      }
    }, this.handlePageChange = async ({
      pageIndex: n,
      pageSize: o
    }) => {
      this.listState.pagingStatus = "loading", n && (this.listState.pageParams.pageIndex = n), o && (this.listState.pageParams.pageSize = o);
      try {
        const a = await this.getList();
        return this.listState.pagingStatus = "succeed", a;
      } catch (a) {
        console.error("search get error:" + a), this.listState.pagingStatus = "failed";
      }
    }, e && (this.requestFun = e), this.listState = this.setListState(r), this.listType = s;
  }
}
function bt(t) {
  let e = {
    succeed: [],
    fail: []
  }, r = !1;
  return async function(s) {
    return new Promise(async (n, o) => {
      if (e.succeed.push(n), e.fail.push(o), !r) {
        r = !0;
        try {
          const a = await t(s);
          e.succeed.map((i) => i(a));
        } catch (a) {
          e.fail.map((i) => i(a));
        } finally {
          e.succeed = [], e.fail = [], r = !1;
        }
      }
    });
  };
}
export {
  M as EventsCollect,
  pt as ListInstance,
  mt as cancelablePromise,
  St as dataWithDefault,
  b as deepClone,
  dt as loopFunc,
  gt as reExecute,
  bt as syncPromise
};
