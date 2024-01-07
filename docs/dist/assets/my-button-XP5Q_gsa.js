import { j as jsxRuntimeExports, u as useMDXComponents } from "./index-D9YKVBLB.js";
const MyButton = ({ className, ...props }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "fasdfasd" });
};
const Demo1 = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(MyButton, { children: "demo1" });
};
const code = "import React from 'react'\nimport { MyButton } from '@zsjs/mui-components'\n\nconst Demo1 = () => {\n  return <MyButton>demo1</MyButton>\n}\n\nexport default Demo1\n";
const title = void 0;
const desc = void 0;
const demoMeta = { code, title, desc };
const isDemo = true;
const _demo0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Demo1,
  demoMeta,
  isDemo
}, Symbol.toStringTag, { value: "Module" }));
function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    p: "p",
    strong: "strong",
    code: "code",
    h2: "h2"
  }, useMDXComponents(), props.components), { Demo } = _components;
  if (!Demo)
    _missingMdxReference("Demo", true);
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(_components.h1, {
      id: "button",
      children: "Button"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["This is a ", jsxRuntimeExports.jsx(_components.strong, {
        children: "markdown"
      }), " document of the ", jsxRuntimeExports.jsx(_components.code, {
        children: "Button"
      }), " component."]
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["You can put this page in a subGroup of the side menu using ", jsxRuntimeExports.jsx(_components.code, {
        children: "staticData.subGroup"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "demos",
      children: "Demos"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "You can import demos like this:"
    }), "\n", jsxRuntimeExports.jsx(Demo, _demo0)]
  });
}
function MDXContent(props = {}) {
  const { wrapper: MDXLayout } = Object.assign({}, useMDXComponents(), props.components);
  return MDXLayout ? jsxRuntimeExports.jsx(MDXLayout, Object.assign({}, props, {
    children: jsxRuntimeExports.jsx(_createMdxContent, props)
  })) : _createMdxContent(props);
}
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
const m0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: MDXContent
}, Symbol.toStringTag, { value: "Module" }));
const modules = {};
modules["main"] = m0;
export {
  modules as default
};
