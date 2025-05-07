import { Q as a, u as s, a as i, r as d, j as e, M as l, C as c, t, S as m, b as u, P as g, F as h, d as x, E as j, R as y, c as v } from "./FontSizeProvider-C1DZf1x-.js";
const E = new a();
function f() {
  const { mode: n } = s(), { t: o, i18n: r } = i();
  return d.useEffect(() => {
    r.resolvedLanguage && (document.documentElement.lang = r.resolvedLanguage, document.documentElement.dir = r.dir(r.resolvedLanguage));
  }, [r, r.resolvedLanguage]), e.jsx(l, { children: e.jsx(c, { theme: { algorithm: n === "dark" ? t.darkAlgorithm : t.defaultAlgorithm, token: { fontFamily: "Arimo" } }, renderEmpty: () => e.jsx(j, { imageStyle: { height: 60 }, description: o("common:noData") }), children: e.jsx(m, { hashPriority: "high", children: e.jsx(u, { client: E, children: e.jsx(g, { children: e.jsx(h, { children: e.jsx(x, {}) }) }) }) }) }) });
}
y.createRoot(document.getElementById("root")).render(e.jsx(v.StrictMode, { children: e.jsx(f, {}) }));
