function y(s, t = 1e3) {
  let e = !1, r, i = 1e3;
  t && (i = t);
  const n = async () => {
    try {
      await s();
    } finally {
      e && (r = setTimeout(() => {
        clearTimeout(r), n();
      }, i));
    }
  };
  return {
    start: () => {
      if (e)
        throw new Error("ready start!");
      e = !0, n();
    },
    stop: () => e = !1,
    refresh: n,
    setTime: (l) => {
      i = l;
    }
  };
}
function x({
  cb: s,
  retryCount: t,
  intervalTime: e,
  event: r
}) {
  let i = !1, n = !1, a = () => {
  };
  return {
    promise: new Promise(async (c, l) => {
      a = () => {
        if (i == !0)
          return;
        t = 0, n = !0, i = !0;
        const o = "Because of reason [user cancel], re-execute end";
        return console.warn(o), r(o), l(new Error(o));
      };
      const g = async () => {
        try {
          const o = await s();
          i = !0, c(o);
        } catch (o) {
          if (n)
            return;
          let f = "";
          o instanceof Error ? f = o.message : f = JSON.stringify(o);
          const S = `Because of reason [${f}], start re-execute on ${t}`;
          if (console.warn(S), r(S), t == 0) {
            const d = `Because of reason [${f}], re-execute end`;
            console.error(d), r(d), i = !0, l(o);
          } else
            t !== 0 && (t > 0 && t--, setTimeout(() => {
              g();
            }, e));
        }
      };
      g();
    }),
    cancel: a
  };
}
function L(s, t) {
  let e = (a) => {
  }, r;
  t && (r = setTimeout(() => {
    e("execute function timeout");
  }, t));
  const i = new Promise((a, h) => {
    e = (c = "promise aborted") => {
      h(new m(c));
    };
  });
  return {
    promise: Promise.race([s, i]).then((a) => (r && (clearTimeout(r), r = void 0), a)),
    abort: e
  };
}
class m extends Error {
  constructor(t) {
    super(t);
  }
}
function u(s) {
  return s && (Array.isArray(s) ? s.map((t) => u(t)) : s instanceof Date ? new Date(s) : typeof s == "object" ? Object.fromEntries(
    Object.entries(s).map(([t, e]) => [t, u(e)])
  ) : s);
}
function b(s) {
  const t = u(s);
  return { data: s, defaultData: t, getClone: () => u(t) };
}
class w {
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
    const r = this.events[t].indexOf(e);
    r !== -1 && this.events[t].splice(r, 1);
  }
  dispatchEvent(t, e) {
    if (!Reflect.has(this.events, t))
      throw new Error(`event ${t} doesn't exist!`);
    this.events[t].forEach((r) => r(e));
  }
}
function p(s = {}, t = {}) {
  let e;
  for (e in t)
    s[e] = P(s[e]) ? p(s[e], t[e]) : s[e] = t[e];
  return s;
}
function P(s) {
  return Object.prototype.toString.call(s) === "[object Object]";
}
const E = {
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
class T {
  constructor({ requestFun: t, listState: e }) {
    this.events = new w(["changeState"]), this.setListState = (r) => {
      let i = {
        set: (a, h, c) => {
          Reflect.set(a, h, c);
          const l = u(a);
          return this.events.dispatchEvent("changeState", l), !0;
        }
      };
      const n = p(E, r);
      return new Proxy(n, i);
    }, this.getList = () => new Promise((r, i) => {
      this.listState.getListStatus === "loading" && i(new Error("加载中,请稍等")), this.listState.getListStatus = "loading";
      const n = { ...this.listState.searchParams, page: this.listState.pageParams };
      this.requestFun(n).then((a) => {
        const { list: h, total: c, totalPage: l = 0 } = a;
        this.listState.totalPage = l, this.listState.total = c, this.listState.list = h, this.listState.getListStatus = "succeed", r(a);
      }).catch((a) => {
        console.error(a), this.listState.getListStatus = "failed", i(a);
      });
    }), this.handleSearch = async () => {
      this.listState.searchStatus = "loading", this.listState.pageParams.pageIndex = 1;
      try {
        const r = await this.getList();
        return this.listState.searchStatus = "succeed", r;
      } catch (r) {
        console.error("search get error:" + r), this.listState.searchStatus = "failed";
      }
    }, this.handlePageChange = async ({ pageIndex: r, pageSize: i }) => {
      this.listState.pagingStatus = "loading", r && (this.listState.pageParams.pageIndex = r), i && (this.listState.pageParams.pageSize = i);
      try {
        const n = await this.getList();
        return this.listState.pagingStatus = "succeed", n;
      } catch (n) {
        console.error("search get error:" + n), this.listState.pagingStatus = "failed";
      }
    }, this.listState = this.setListState(e), t && (this.requestFun = t);
  }
}
export {
  w as EventsCollect,
  T as ListInstance,
  L as cancelablePromise,
  b as dataWithDefault,
  u as deepClone,
  y as loopFunc,
  x as reExecute
};
