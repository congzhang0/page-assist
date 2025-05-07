import { Q as d, u as c, a as l, r, j as e, M as m, C as u, t as n, S as g, b as h, P as x, F as j, O as y, E as v, R as E, c as f } from "./FontSizeProvider-C1DZf1x-.js";
const p = new d();
function P() {
  const { mode: o } = c(), { t: s, i18n: t } = l(), [i, a] = r.useState("ltr");
  return r.useEffect(() => {
    t.resolvedLanguage && (document.documentElement.lang = t.resolvedLanguage, document.documentElement.dir = t.dir(t.resolvedLanguage), a(t.dir(t.resolvedLanguage)));
  }, [t, t.resolvedLanguage]), e.jsx(m, { children: e.jsx(u, { theme: { algorithm: o === "dark" ? n.darkAlgorithm : n.defaultAlgorithm, token: { fontFamily: "Arimo" } }, renderEmpty: () => e.jsx(v, { imageStyle: { height: 60 }, description: s("common:noData") }), direction: i, children: e.jsx(g, { hashPriority: "high", children: e.jsx(h, { client: p, children: e.jsx(x, { children: e.jsx(j, { children: e.jsx(y, {}) }) }) }) }) }) });
}
E.createRoot(document.getElementById("root")).render(e.jsx(f.StrictMode, { children: e.jsx(P, {}) }));
