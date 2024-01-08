import { f as createCache, a as React__default, S as StyleProvider, h as extractStyle } from "./index-rS_JMrVD.js";
var ssrPlugin = {
  id: "vite-pages-theme-doc-antd-ssr",
  prepare(app) {
    const cache = createCache();
    return {
      app: /* @__PURE__ */ React__default.createElement(StyleProvider, {
        cache
      }, app),
      extractStyle: () => extractStyle(cache)
    };
  }
};
export {
  ssrPlugin as default
};
