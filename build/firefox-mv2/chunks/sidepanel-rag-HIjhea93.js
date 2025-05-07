import { a as m, f as i, j as e } from "./FontSizeProvider-C1DZf1x-.js";
import { p as c, o as x } from "./SaveButton-B6h4W40A.js";
const b = ({ hideBorder: t }) => {
  const { t: s } = m("settings"), [n, l] = i("chatWithWebsiteEmbedding", true), [r, d] = i("maxWebsiteContext", 4028);
  return e.jsxs("div", { children: [e.jsxs("div", { className: "mb-5", children: [e.jsx("h2", { className: `${t ? "text-md" : "text-base font-semibold leading-7"} text-gray-900 dark:text-white`, children: s("generalSettings.sidepanelRag.heading") }), !t && e.jsx("div", { className: "border border-b border-gray-200 dark:border-gray-600 mt-3" })] }), e.jsxs("div", { className: `${t ? "" : "text-sm"} space-y-4`, children: [e.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0", children: [e.jsx("span", { className: "text-gray-700  truncate dark:text-neutral-50", children: s("generalSettings.sidepanelRag.ragEnabled.label") }), e.jsx("div", { children: e.jsx(c, { className: "mt-4 sm:mt-0", checked: n, onChange: (a) => l(a) }) })] }), e.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0", children: [e.jsx("span", { className: "text-gray-700 truncate dark:text-neutral-50", children: s("generalSettings.sidepanelRag.maxWebsiteContext.label") }), e.jsx("div", { children: e.jsx(x, { disabled: n, className: "mt-4 sm:mt-0", value: r, onChange: (a) => d(a), placeholder: s("generalSettings.sidepanelRag.maxWebsiteContext.placeholder") }) })] })] })] });
};
export {
  b as S
};
