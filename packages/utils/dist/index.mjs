function y(r, e = 1e3) {
  let t = !1, s, n = 1e3;
  e && (n = e);
  const c = async () => {
    try {
      await r();
    } finally {
      t && (s = setTimeout(() => {
        clearTimeout(s), c();
      }, n));
    }
  };
  return {
    start: () => {
      if (t)
        throw new Error("ready start!");
      t = !0, c();
    },
    stop: () => t = !1,
    refresh: c,
    setTime: (f) => {
      n = f;
    }
  };
}
function T({
  cb: r,
  retryCount: e,
  intervalTime: t,
  event: s
}) {
  let n = !1, c = !1, i = () => {
  };
  return {
    promise: new Promise(async (a, f) => {
      i = () => {
        if (n == !0)
          return;
        e = 0, c = !0, n = !0;
        const o = "Because of reason [user cancel], re-execute end";
        return console.warn(o), s(o), f(new Error(o));
      };
      const p = async () => {
        try {
          const o = await r();
          n = !0, a(o);
        } catch (o) {
          if (c)
            return;
          let u = "";
          o instanceof Error ? u = o.message : u = JSON.stringify(o);
          const w = `Because of reason [${u}], start re-execute on ${e}`;
          if (console.warn(w), s(w), e == 0) {
            const d = `Because of reason [${u}], re-execute end`;
            console.error(d), s(d), n = !0, f(o);
          } else
            e !== 0 && (e > 0 && e--, setTimeout(() => {
              p();
            }, t));
        }
      };
      p();
    }),
    cancel: i
  };
}
function b(r, e) {
  let t = (i) => {
  }, s;
  e && (s = setTimeout(() => {
    t("execute function timeout");
  }, e));
  const n = new Promise((i, m) => {
    t = (a = "promise aborted") => {
      m(new g(a));
    };
  });
  return {
    promise: Promise.race([r, n]).then((i) => (s && (clearTimeout(s), s = void 0), i)),
    abort: t
  };
}
class g extends Error {
  constructor(e) {
    super(e);
  }
}
function l(r) {
  return r && (Array.isArray(r) ? r.map((e) => l(e)) : r instanceof Date ? new Date(r) : typeof r == "object" ? Object.fromEntries(
    Object.entries(r).map(([e, t]) => [e, l(t)])
  ) : r);
}
function x(r) {
  const e = l(r);
  return { data: r, defaultData: e, getClone: () => l(e) };
}
export {
  b as cancelablePromise,
  x as dataWithDefault,
  l as deepClone,
  y as loopFunc,
  T as reExecute
};
