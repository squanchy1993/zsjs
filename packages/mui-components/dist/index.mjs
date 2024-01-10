import Z from "react";
import { createRoot as sr } from "react-dom/client";
import { Snackbar as ur, Alert as lr } from "@mui/material";
var X = { exports: {} }, I = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oe;
function cr() {
  return Oe || (Oe = 1, process.env.NODE_ENV !== "production" && function() {
    var C = Z, c = Symbol.for("react.element"), d = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), h = Symbol.for("react.strict_mode"), T = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), b = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), P = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), M = Symbol.for("react.offscreen"), Q = Symbol.iterator, Se = "@@iterator";
    function we(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = Q && e[Q] || e[Se];
      return typeof r == "function" ? r : null;
    }
    var j = C.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        xe("error", e, t);
      }
    }
    function xe(e, r, t) {
      {
        var n = j.ReactDebugCurrentFrame, i = n.getStackAddendum();
        i !== "" && (r += "%s", t = t.concat([i]));
        var s = t.map(function(o) {
          return String(o);
        });
        s.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var Pe = !1, je = !1, ke = !1, De = !1, Fe = !1, ee;
    ee = Symbol.for("react.module.reference");
    function Ae(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === y || e === T || Fe || e === h || e === P || e === g || De || e === M || Pe || je || ke || typeof e == "object" && e !== null && (e.$$typeof === w || e.$$typeof === E || e.$$typeof === S || e.$$typeof === b || e.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ee || e.getModuleId !== void 0));
    }
    function Ie(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var i = r.displayName || r.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function re(e) {
      return e.displayName || "Context";
    }
    function R(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case y:
          return "Fragment";
        case d:
          return "Portal";
        case T:
          return "Profiler";
        case h:
          return "StrictMode";
        case P:
          return "Suspense";
        case g:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case b:
            var r = e;
            return re(r) + ".Consumer";
          case S:
            var t = e;
            return re(t._context) + ".Provider";
          case f:
            return Ie(e, e.render, "ForwardRef");
          case E:
            var n = e.displayName || null;
            return n !== null ? n : R(e.type) || "Memo";
          case w: {
            var i = e, s = i._payload, o = i._init;
            try {
              return R(o(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var x = Object.assign, F = 0, te, ne, ae, oe, ie, se, ue;
    function le() {
    }
    le.__reactDisabledLog = !0;
    function $e() {
      {
        if (F === 0) {
          te = console.log, ne = console.info, ae = console.warn, oe = console.error, ie = console.group, se = console.groupCollapsed, ue = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: le,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        F++;
      }
    }
    function Me() {
      {
        if (F--, F === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: x({}, e, {
              value: te
            }),
            info: x({}, e, {
              value: ne
            }),
            warn: x({}, e, {
              value: ae
            }),
            error: x({}, e, {
              value: oe
            }),
            group: x({}, e, {
              value: ie
            }),
            groupCollapsed: x({}, e, {
              value: se
            }),
            groupEnd: x({}, e, {
              value: ue
            })
          });
        }
        F < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var U = j.ReactCurrentDispatcher, B;
    function W(e, r, t) {
      {
        if (B === void 0)
          try {
            throw Error();
          } catch (i) {
            var n = i.stack.trim().match(/\n( *(at )?)/);
            B = n && n[1] || "";
          }
        return `
` + B + e;
      }
    }
    var q = !1, Y;
    {
      var We = typeof WeakMap == "function" ? WeakMap : Map;
      Y = new We();
    }
    function ce(e, r) {
      if (!e || q)
        return "";
      {
        var t = Y.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      q = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = U.current, U.current = null, $e();
      try {
        if (r) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (_) {
              n = _;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (_) {
              n = _;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (_) {
            n = _;
          }
          e();
        }
      } catch (_) {
        if (_ && n && typeof _.stack == "string") {
          for (var a = _.stack.split(`
`), p = n.stack.split(`
`), u = a.length - 1, l = p.length - 1; u >= 1 && l >= 0 && a[u] !== p[l]; )
            l--;
          for (; u >= 1 && l >= 0; u--, l--)
            if (a[u] !== p[l]) {
              if (u !== 1 || l !== 1)
                do
                  if (u--, l--, l < 0 || a[u] !== p[l]) {
                    var m = `
` + a[u].replace(" at new ", " at ");
                    return e.displayName && m.includes("<anonymous>") && (m = m.replace("<anonymous>", e.displayName)), typeof e == "function" && Y.set(e, m), m;
                  }
                while (u >= 1 && l >= 0);
              break;
            }
        }
      } finally {
        q = !1, U.current = s, Me(), Error.prepareStackTrace = i;
      }
      var D = e ? e.displayName || e.name : "", Te = D ? W(D) : "";
      return typeof e == "function" && Y.set(e, Te), Te;
    }
    function Ye(e, r, t) {
      return ce(e, !1);
    }
    function Ne(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function N(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ce(e, Ne(e));
      if (typeof e == "string")
        return W(e);
      switch (e) {
        case P:
          return W("Suspense");
        case g:
          return W("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            return Ye(e.render);
          case E:
            return N(e.type, r, t);
          case w: {
            var n = e, i = n._payload, s = n._init;
            try {
              return N(s(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var L = Object.prototype.hasOwnProperty, fe = {}, de = j.ReactDebugCurrentFrame;
    function V(e) {
      if (e) {
        var r = e._owner, t = N(e.type, e._source, r ? r.type : null);
        de.setExtraStackFrame(t);
      } else
        de.setExtraStackFrame(null);
    }
    function Le(e, r, t, n, i) {
      {
        var s = Function.call.bind(L);
        for (var o in e)
          if (s(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var p = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw p.name = "Invariant Violation", p;
              }
              a = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (u) {
              a = u;
            }
            a && !(a instanceof Error) && (V(i), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), V(null)), a instanceof Error && !(a.message in fe) && (fe[a.message] = !0, V(i), v("Failed %s type: %s", t, a.message), V(null));
          }
      }
    }
    var Ve = Array.isArray;
    function J(e) {
      return Ve(e);
    }
    function Ue(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Be(e) {
      try {
        return ve(e), !1;
      } catch {
        return !0;
      }
    }
    function ve(e) {
      return "" + e;
    }
    function pe(e) {
      if (Be(e))
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ue(e)), ve(e);
    }
    var A = j.ReactCurrentOwner, qe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, he, ge, z;
    z = {};
    function Je(e) {
      if (L.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function ze(e) {
      if (L.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Ge(e, r) {
      if (typeof e.ref == "string" && A.current && r && A.current.stateNode !== r) {
        var t = R(A.current.type);
        z[t] || (v('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', R(A.current.type), e.ref), z[t] = !0);
      }
    }
    function He(e, r) {
      {
        var t = function() {
          he || (he = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function Ke(e, r) {
      {
        var t = function() {
          ge || (ge = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var Xe = function(e, r, t, n, i, s, o) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: c,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: o,
        // Record the component responsible for creating this element.
        _owner: s
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function Ze(e, r, t, n, i) {
      {
        var s, o = {}, a = null, p = null;
        t !== void 0 && (pe(t), a = "" + t), ze(r) && (pe(r.key), a = "" + r.key), Je(r) && (p = r.ref, Ge(r, i));
        for (s in r)
          L.call(r, s) && !qe.hasOwnProperty(s) && (o[s] = r[s]);
        if (e && e.defaultProps) {
          var u = e.defaultProps;
          for (s in u)
            o[s] === void 0 && (o[s] = u[s]);
        }
        if (a || p) {
          var l = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && He(o, l), p && Ke(o, l);
        }
        return Xe(e, a, p, i, n, A.current, o);
      }
    }
    var G = j.ReactCurrentOwner, me = j.ReactDebugCurrentFrame;
    function k(e) {
      if (e) {
        var r = e._owner, t = N(e.type, e._source, r ? r.type : null);
        me.setExtraStackFrame(t);
      } else
        me.setExtraStackFrame(null);
    }
    var H;
    H = !1;
    function K(e) {
      return typeof e == "object" && e !== null && e.$$typeof === c;
    }
    function ye() {
      {
        if (G.current) {
          var e = R(G.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Qe(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var be = {};
    function er(e) {
      {
        var r = ye();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Ee(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = er(r);
        if (be[t])
          return;
        be[t] = !0;
        var n = "";
        e && e._owner && e._owner !== G.current && (n = " It was passed a child from " + R(e._owner.type) + "."), k(e), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), k(null);
      }
    }
    function Re(e, r) {
      {
        if (typeof e != "object")
          return;
        if (J(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            K(n) && Ee(n, r);
          }
        else if (K(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = we(e);
          if (typeof i == "function" && i !== e.entries)
            for (var s = i.call(e), o; !(o = s.next()).done; )
              K(o.value) && Ee(o.value, r);
        }
      }
    }
    function rr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === E))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = R(r);
          Le(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !H) {
          H = !0;
          var i = R(r);
          v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function tr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            k(e), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), k(null);
            break;
          }
        }
        e.ref !== null && (k(e), v("Invalid attribute `ref` supplied to `React.Fragment`."), k(null));
      }
    }
    function _e(e, r, t, n, i, s) {
      {
        var o = Ae(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var p = Qe(i);
          p ? a += p : a += ye();
          var u;
          e === null ? u = "null" : J(e) ? u = "array" : e !== void 0 && e.$$typeof === c ? (u = "<" + (R(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : u = typeof e, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", u, a);
        }
        var l = Ze(e, r, t, i, s);
        if (l == null)
          return l;
        if (o) {
          var m = r.children;
          if (m !== void 0)
            if (n)
              if (J(m)) {
                for (var D = 0; D < m.length; D++)
                  Re(m[D], e);
                Object.freeze && Object.freeze(m);
              } else
                v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Re(m, e);
        }
        return e === y ? tr(l) : rr(l), l;
      }
    }
    function nr(e, r, t) {
      return _e(e, r, t, !0);
    }
    function ar(e, r, t) {
      return _e(e, r, t, !1);
    }
    var or = ar, ir = nr;
    I.Fragment = y, I.jsx = or, I.jsxs = ir;
  }()), I;
}
var $ = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ce;
function fr() {
  if (Ce)
    return $;
  Ce = 1;
  var C = Z, c = Symbol.for("react.element"), d = Symbol.for("react.fragment"), y = Object.prototype.hasOwnProperty, h = C.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, T = { key: !0, ref: !0, __self: !0, __source: !0 };
  function S(b, f, P) {
    var g, E = {}, w = null, M = null;
    P !== void 0 && (w = "" + P), f.key !== void 0 && (w = "" + f.key), f.ref !== void 0 && (M = f.ref);
    for (g in f)
      y.call(f, g) && !T.hasOwnProperty(g) && (E[g] = f[g]);
    if (b && b.defaultProps)
      for (g in f = b.defaultProps, f)
        E[g] === void 0 && (E[g] = f[g]);
    return { $$typeof: c, type: b, key: w, ref: M, props: E, _owner: h.current };
  }
  return $.Fragment = d, $.jsx = S, $.jsxs = S, $;
}
process.env.NODE_ENV === "production" ? X.exports = fr() : X.exports = cr();
var O = X.exports;
const gr = ({ className: C, ...c }) => /* @__PURE__ */ O.jsx("p", { children: "fasdfasd" });
function dr({
  content: C,
  duration: c,
  type: d,
  handleClose: y
}) {
  const [h, T] = Z.useState(!0);
  return /* @__PURE__ */ O.jsx(
    ur,
    {
      open: h,
      autoHideDuration: c,
      anchorOrigin: { vertical: "top", horizontal: "center" },
      onClose: () => {
        T(!1), y();
      },
      children: /* @__PURE__ */ O.jsx(lr, { severity: d, children: C })
    }
  );
}
class mr {
  static success({
    content: c,
    duration: d
  }) {
    this.renderMessage({
      content: /* @__PURE__ */ O.jsx("span", { children: c }),
      duration: d,
      type: "success"
    });
  }
  static error({ content: c, duration: d }) {
    this.renderMessage({
      content: /* @__PURE__ */ O.jsx("span", { children: c }),
      duration: d,
      type: "error"
    });
  }
  static warning({
    content: c,
    duration: d
  }) {
    this.renderMessage({
      content: /* @__PURE__ */ O.jsx("span", { children: c }),
      duration: d,
      type: "warning"
    });
  }
  static info({ content: c, duration: d }) {
    this.renderMessage({
      content: /* @__PURE__ */ O.jsx("span", { children: c }),
      duration: d,
      type: "info"
    });
  }
  static renderMessage({
    content: c,
    duration: d = 1e3,
    type: y
  }) {
    const h = document.createElement("div"), T = sr(h), S = () => {
      var f;
      (f = h == null ? void 0 : h.parentNode) == null || f.removeChild(h);
    }, b = /* @__PURE__ */ O.jsx(
      dr,
      {
        content: c,
        duration: d,
        type: y,
        handleClose: S
      }
    );
    T.render(b), document.body.appendChild(h);
  }
}
export {
  gr as MyButton,
  mr as ZsMessage
};
