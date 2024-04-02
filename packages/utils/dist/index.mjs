function E(r, e = 1e3) {
  let t = !1, s, n = 1e3;
  e && (n = e);
  const i = async () => {
    try {
      await r();
    } finally {
      t && (s = setTimeout(() => {
        clearTimeout(s), i();
      }, n));
    }
  };
  return {
    start: () => {
      if (t)
        throw new Error("ready start!");
      t = !0, i();
    },
    stop: () => t = !1,
    refresh: i,
    setTime: (f) => {
      n = f;
    }
  };
}
function x({
  cb: r,
  retryCount: e,
  intervalTime: t,
  event: s
}) {
  let n = !1, i = !1, c = () => {
  };
  return {
    promise: new Promise(async (a, f) => {
      c = () => {
        if (n == !0)
          return;
        e = 0, i = !0, n = !0;
        const o = "Because of reason [user cancel], re-execute end";
        return console.warn(o), s(o), f(new Error(o));
      };
      const m = async () => {
        try {
          const o = await r();
          n = !0, a(o);
        } catch (o) {
          if (i)
            return;
          let l = "";
          o instanceof Error ? l = o.message : l = JSON.stringify(o);
          const d = `Because of reason [${l}], start re-execute on ${e}`;
          if (console.warn(d), s(d), e == 0) {
            const p = `Because of reason [${l}], re-execute end`;
            console.error(p), s(p), n = !0, f(o);
          } else
            e !== 0 && (e > 0 && e--, setTimeout(() => {
              m();
            }, t));
        }
      };
      m();
    }),
    cancel: c
  };
}
function g(r, e) {
  let t = (c) => {
  }, s;
  e && (s = setTimeout(() => {
    t("execute function timeout");
  }, e));
  const n = new Promise((c, h) => {
    t = (a = "promise aborted") => {
      h(new w(a));
    };
  });
  return {
    promise: Promise.race([r, n]).then((c) => (s && (clearTimeout(s), s = void 0), c)),
    abort: t
  };
}
class w extends Error {
  constructor(e) {
    super(e);
  }
}
function u(r) {
  return r && (Array.isArray(r) ? r.map((e) => u(e)) : r instanceof Date ? new Date(r) : typeof r == "object" ? Object.fromEntries(
    Object.entries(r).map(([e, t]) => [e, u(t)])
  ) : r);
}
function y(r) {
  const e = u(r);
  return { data: r, defaultData: e, getClone: () => u(e) };
}
class T {
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
export {
  T as EventsCollect,
  g as cancelablePromise,
  y as dataWithDefault,
  u as deepClone,
  E as loopFunc,
  x as reExecute
};
