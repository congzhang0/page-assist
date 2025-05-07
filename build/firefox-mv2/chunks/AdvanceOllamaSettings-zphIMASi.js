import { a as x, c as h, j as e } from "./FontSizeProvider-C1DZf1x-.js";
import { F as l, p as m, I as d, G as u, U as b, l as g, V as j, W as w, X as v, Y as f, Z as p, _ as S, $ as R, a0 as N } from "./SaveButton-B6h4W40A.js";
const U = () => {
  const [i] = l.useForm(), c = l.useWatch("urlRewriteEnabled", i), { t: a } = x("settings"), o = async () => {
    try {
      const [s, n, t, r] = await Promise.all([p(), S(), R(), N()]);
      i.setFieldsValue({ urlRewriteEnabled: s, rewriteUrl: n, headers: t, autoCORSFix: r });
    } catch (s) {
      console.error(s);
    }
  };
  return h.useEffect(() => {
    o();
  }, []), e.jsxs(l, { onFinish: (s) => {
    var _a;
    const n = (_a = s == null ? void 0 : s.headers) == null ? void 0 : _a.filter((t) => t.key && t.value);
    j(s.urlRewriteEnabled), w(s.rewriteUrl), v(n), f(s.autoCORSFix);
  }, form: i, layout: "vertical", className: "space-y-4", children: [e.jsx(l.Item, { name: "urlRewriteEnabled", label: a("ollamaSettings.settings.advanced.urlRewriteEnabled.label"), children: e.jsx(m, {}) }), e.jsx(l.Item, { required: c, name: "rewriteUrl", label: a("ollamaSettings.settings.advanced.rewriteUrl.label"), children: e.jsx(d, { disabled: !c, className: "w-full", placeholder: a("ollamaSettings.settings.advanced.rewriteUrl.placeholder") }) }), e.jsx(l.Item, { name: "autoCORSFix", label: a("ollamaSettings.settings.advanced.autoCORSFix.label"), children: e.jsx(m, {}) }), e.jsx(l.List, { name: "headers", children: (s, { add: n, remove: t }) => e.jsxs("div", { className: "flex flex-col ", children: [e.jsxs("div", { className: "flex justify-between items-center", children: [e.jsx("h3", { className: "text-md font-semibold", children: a("ollamaSettings.settings.advanced.headers.label") }), e.jsx("button", { type: "button", className: "dark:bg-white dark:text-black text-white bg-black p-1.5 text-xs rounded-md", onClick: () => {
    n();
  }, children: a("ollamaSettings.settings.advanced.headers.add") })] }), s.map((r, y) => e.jsxs("div", { className: "flex items-center   w-full", children: [e.jsxs("div", { className: "flex-grow flex mt-3 space-x-4", children: [e.jsx(l.Item, { label: a("ollamaSettings.settings.advanced.headers.key.label"), name: [r.name, "key"], className: "flex-1 mb-0", children: e.jsx(d, { className: "w-full", placeholder: a("ollamaSettings.settings.advanced.headers.key.placeholder") }) }), e.jsx(l.Item, { label: a("ollamaSettings.settings.advanced.headers.value.label"), name: [r.name, "value"], className: "flex-1 mb-0", children: e.jsx(d, { className: "w-full", placeholder: a("ollamaSettings.settings.advanced.headers.value.placeholder") }) })] }), e.jsx("button", { type: "button", onClick: () => {
    t(r.name);
  }, className: "shrink-0 ml-2 text-red-500 dark:text-red-400", children: e.jsx(u, { className: "w-5 h-5" }) })] }, r.key))] }) }), e.jsx(b, {}), e.jsx(l.Item, { className: "flex justify-end", children: e.jsx(g, { btnType: "submit" }) })] });
};
export {
  U as A
};
