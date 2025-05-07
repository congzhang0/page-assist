import { c as q, r as o, l as j, s as K, v as Q, w as J, y as v, A as Y, B as Z, a as k, j as y, __tla as __tla_0 } from "./FontSizeProvider-C1DZf1x-.js";
import { S as ee, __tla as __tla_1 } from "./SettingsOptionLayout-OzuGfHmE.js";
import { O as te, __tla as __tla_2 } from "./Layout-D44e2h93.js";
import { am as le, an as A, ao as ne, R as se, u as ae, k as oe, b as re, g as ie, a3 as ce, a as de } from "./SaveButton-B6h4W40A.js";
import { __tla as __tla_3 } from "./Sidebar-DZH9YUxk.js";
import "./chevron-right-CHUn5UPl.js";
let Be;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_1;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_2;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_3;
    } catch {
    }
  })()
]).then(async () => {
  const me = {
    xxl: 3,
    xl: 3,
    lg: 3,
    md: 3,
    sm: 2,
    xs: 1
  }, R = q.createContext({});
  var be = function(e, t) {
    var n = {};
    for (var l in e) Object.prototype.hasOwnProperty.call(e, l) && t.indexOf(l) < 0 && (n[l] = e[l]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var s = 0, l = Object.getOwnPropertySymbols(e); s < l.length; s++) t.indexOf(l[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, l[s]) && (n[l[s]] = e[l[s]]);
    return n;
  };
  const ue = (e) => le(e).map((t) => Object.assign(Object.assign({}, t == null ? void 0 : t.props), {
    key: t.key
  }));
  function pe(e, t, n) {
    const l = o.useMemo(() => t || ue(n), [
      t,
      n
    ]);
    return o.useMemo(() => l.map((r) => {
      var { span: a } = r, p = be(r, [
        "span"
      ]);
      return a === "filled" ? Object.assign(Object.assign({}, p), {
        filled: true
      }) : Object.assign(Object.assign({}, p), {
        span: typeof a == "number" ? a : A(e, a)
      });
    }), [
      l,
      e
    ]);
  }
  var ge = function(e, t) {
    var n = {};
    for (var l in e) Object.prototype.hasOwnProperty.call(e, l) && t.indexOf(l) < 0 && (n[l] = e[l]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var s = 0, l = Object.getOwnPropertySymbols(e); s < l.length; s++) t.indexOf(l[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, l[s]) && (n[l[s]] = e[l[s]]);
    return n;
  };
  function ye(e, t) {
    let n = [], l = [], s = false, r = 0;
    return e.filter((a) => a).forEach((a) => {
      const { filled: p } = a, g = ge(a, [
        "filled"
      ]);
      if (p) {
        l.push(g), n.push(l), l = [], r = 0;
        return;
      }
      const f = t - r;
      r += a.span || 1, r >= t ? (r > t ? (s = true, l.push(Object.assign(Object.assign({}, g), {
        span: f
      }))) : l.push(g), n.push(l), l = [], r = 0) : l.push(g);
    }), l.length > 0 && n.push(l), n = n.map((a) => {
      const p = a.reduce((g, f) => g + (f.span || 1), 0);
      if (p < t) {
        const g = a[a.length - 1];
        return g.span = t - (p - (g.span || 1)), a;
      }
      return a;
    }), [
      n,
      s
    ];
  }
  const fe = (e, t) => {
    const [n, l] = o.useMemo(() => ye(t, e), [
      t,
      e
    ]);
    return n;
  }, he = (e) => {
    let { children: t } = e;
    return t;
  };
  function T(e) {
    return e != null;
  }
  const z = (e) => {
    const { itemPrefixCls: t, component: n, span: l, className: s, style: r, labelStyle: a, contentStyle: p, bordered: g, label: f, content: x, colon: S, type: m, styles: b } = e, $ = n, i = o.useContext(R), { classNames: u } = i;
    return g ? o.createElement($, {
      className: j({
        [`${t}-item-label`]: m === "label",
        [`${t}-item-content`]: m === "content",
        [`${u == null ? void 0 : u.label}`]: m === "label",
        [`${u == null ? void 0 : u.content}`]: m === "content"
      }, s),
      style: r,
      colSpan: l
    }, T(f) && o.createElement("span", {
      style: Object.assign(Object.assign({}, a), b == null ? void 0 : b.label)
    }, f), T(x) && o.createElement("span", {
      style: Object.assign(Object.assign({}, a), b == null ? void 0 : b.content)
    }, x)) : o.createElement($, {
      className: j(`${t}-item`, s),
      style: r,
      colSpan: l
    }, o.createElement("div", {
      className: `${t}-item-container`
    }, (f || f === 0) && o.createElement("span", {
      className: j(`${t}-item-label`, u == null ? void 0 : u.label, {
        [`${t}-item-no-colon`]: !S
      }),
      style: Object.assign(Object.assign({}, a), b == null ? void 0 : b.label)
    }, f), (x || x === 0) && o.createElement("span", {
      className: j(`${t}-item-content`, u == null ? void 0 : u.content),
      style: Object.assign(Object.assign({}, p), b == null ? void 0 : b.content)
    }, x)));
  };
  function M(e, t, n) {
    let { colon: l, prefixCls: s, bordered: r } = t, { component: a, type: p, showLabel: g, showContent: f, labelStyle: x, contentStyle: S, styles: m } = n;
    return e.map((b, $) => {
      let { label: i, children: u, prefixCls: c = s, className: C, style: w, labelStyle: E, contentStyle: P, span: I = 1, key: h, styles: d } = b;
      return typeof a == "string" ? o.createElement(z, {
        key: `${p}-${h || $}`,
        className: C,
        style: w,
        styles: {
          label: Object.assign(Object.assign(Object.assign(Object.assign({}, x), m == null ? void 0 : m.label), E), d == null ? void 0 : d.label),
          content: Object.assign(Object.assign(Object.assign(Object.assign({}, S), m == null ? void 0 : m.content), P), d == null ? void 0 : d.content)
        },
        span: I,
        colon: l,
        component: a,
        itemPrefixCls: c,
        bordered: r,
        label: g ? i : null,
        content: f ? u : null,
        type: p
      }) : [
        o.createElement(z, {
          key: `label-${h || $}`,
          className: C,
          style: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, x), m == null ? void 0 : m.label), w), E), d == null ? void 0 : d.label),
          span: 1,
          colon: l,
          component: a[0],
          itemPrefixCls: c,
          bordered: r,
          label: i,
          type: "label"
        }),
        o.createElement(z, {
          key: `content-${h || $}`,
          className: C,
          style: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, S), m == null ? void 0 : m.content), w), P), d == null ? void 0 : d.content),
          span: I * 2 - 1,
          component: a[1],
          itemPrefixCls: c,
          bordered: r,
          content: u,
          type: "content"
        })
      ];
    });
  }
  const ve = (e) => {
    const t = o.useContext(R), { prefixCls: n, vertical: l, row: s, index: r, bordered: a } = e;
    return l ? o.createElement(o.Fragment, null, o.createElement("tr", {
      key: `label-${r}`,
      className: `${n}-row`
    }, M(s, e, Object.assign({
      component: "th",
      type: "label",
      showLabel: true
    }, t))), o.createElement("tr", {
      key: `content-${r}`,
      className: `${n}-row`
    }, M(s, e, Object.assign({
      component: "td",
      type: "content",
      showContent: true
    }, t)))) : o.createElement("tr", {
      key: r,
      className: `${n}-row`
    }, M(s, e, Object.assign({
      component: a ? [
        "th",
        "td"
      ] : "td",
      type: "item",
      showLabel: true,
      showContent: true
    }, t)));
  }, xe = (e) => {
    const { componentCls: t, labelBg: n } = e;
    return {
      [`&${t}-bordered`]: {
        [`> ${t}-view`]: {
          border: `${v(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,
          "> table": {
            tableLayout: "auto"
          },
          [`${t}-row`]: {
            borderBottom: `${v(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,
            "&:first-child": {
              "> th:first-child, > td:first-child": {
                borderStartStartRadius: e.borderRadiusLG
              }
            },
            "&:last-child": {
              borderBottom: "none",
              "> th:first-child, > td:first-child": {
                borderEndStartRadius: e.borderRadiusLG
              }
            },
            [`> ${t}-item-label, > ${t}-item-content`]: {
              padding: `${v(e.padding)} ${v(e.paddingLG)}`,
              borderInlineEnd: `${v(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,
              "&:last-child": {
                borderInlineEnd: "none"
              }
            },
            [`> ${t}-item-label`]: {
              color: e.colorTextSecondary,
              backgroundColor: n,
              "&::after": {
                display: "none"
              }
            }
          }
        },
        [`&${t}-middle`]: {
          [`${t}-row`]: {
            [`> ${t}-item-label, > ${t}-item-content`]: {
              padding: `${v(e.paddingSM)} ${v(e.paddingLG)}`
            }
          }
        },
        [`&${t}-small`]: {
          [`${t}-row`]: {
            [`> ${t}-item-label, > ${t}-item-content`]: {
              padding: `${v(e.paddingXS)} ${v(e.padding)}`
            }
          }
        }
      }
    };
  }, Oe = (e) => {
    const { componentCls: t, extraColor: n, itemPaddingBottom: l, itemPaddingEnd: s, colonMarginRight: r, colonMarginLeft: a, titleMarginBottom: p } = e;
    return {
      [t]: Object.assign(Object.assign(Object.assign({}, J(e)), xe(e)), {
        "&-rtl": {
          direction: "rtl"
        },
        [`${t}-header`]: {
          display: "flex",
          alignItems: "center",
          marginBottom: p
        },
        [`${t}-title`]: Object.assign(Object.assign({}, Y), {
          flex: "auto",
          color: e.titleColor,
          fontWeight: e.fontWeightStrong,
          fontSize: e.fontSizeLG,
          lineHeight: e.lineHeightLG
        }),
        [`${t}-extra`]: {
          marginInlineStart: "auto",
          color: n,
          fontSize: e.fontSize
        },
        [`${t}-view`]: {
          width: "100%",
          borderRadius: e.borderRadiusLG,
          table: {
            width: "100%",
            tableLayout: "fixed",
            borderCollapse: "collapse"
          }
        },
        [`${t}-row`]: {
          "> th, > td": {
            paddingBottom: l,
            paddingInlineEnd: s
          },
          "> th:last-child, > td:last-child": {
            paddingInlineEnd: 0
          },
          "&:last-child": {
            borderBottom: "none",
            "> th, > td": {
              paddingBottom: 0
            }
          }
        },
        [`${t}-item-label`]: {
          color: e.labelColor,
          fontWeight: "normal",
          fontSize: e.fontSize,
          lineHeight: e.lineHeight,
          textAlign: "start",
          "&::after": {
            content: '":"',
            position: "relative",
            top: -0.5,
            marginInline: `${v(a)} ${v(r)}`
          },
          [`&${t}-item-no-colon::after`]: {
            content: '""'
          }
        },
        [`${t}-item-no-label`]: {
          "&::after": {
            margin: 0,
            content: '""'
          }
        },
        [`${t}-item-content`]: {
          display: "table-cell",
          flex: 1,
          color: e.contentColor,
          fontSize: e.fontSize,
          lineHeight: e.lineHeight,
          wordBreak: "break-word",
          overflowWrap: "break-word"
        },
        [`${t}-item`]: {
          paddingBottom: 0,
          verticalAlign: "top",
          "&-container": {
            display: "flex",
            [`${t}-item-label`]: {
              display: "inline-flex",
              alignItems: "baseline"
            },
            [`${t}-item-content`]: {
              display: "inline-flex",
              alignItems: "baseline",
              minWidth: "1em"
            }
          }
        },
        "&-middle": {
          [`${t}-row`]: {
            "> th, > td": {
              paddingBottom: e.paddingSM
            }
          }
        },
        "&-small": {
          [`${t}-row`]: {
            "> th, > td": {
              paddingBottom: e.paddingXS
            }
          }
        }
      })
    };
  }, je = (e) => ({
    labelBg: e.colorFillAlter,
    labelColor: e.colorTextTertiary,
    titleColor: e.colorText,
    titleMarginBottom: e.fontSizeSM * e.lineHeightSM,
    itemPaddingBottom: e.padding,
    itemPaddingEnd: e.padding,
    colonMarginRight: e.marginXS,
    colonMarginLeft: e.marginXXS / 2,
    contentColor: e.colorText,
    extraColor: e.colorText
  }), $e = K("Descriptions", (e) => {
    const t = Q(e, {});
    return Oe(t);
  }, je);
  var Se = function(e, t) {
    var n = {};
    for (var l in e) Object.prototype.hasOwnProperty.call(e, l) && t.indexOf(l) < 0 && (n[l] = e[l]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var s = 0, l = Object.getOwnPropertySymbols(e); s < l.length; s++) t.indexOf(l[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, l[s]) && (n[l[s]] = e[l[s]]);
    return n;
  };
  const H = (e) => {
    const { prefixCls: t, title: n, extra: l, column: s, colon: r = true, bordered: a, layout: p, children: g, className: f, rootClassName: x, style: S, size: m, labelStyle: b, contentStyle: $, styles: i, items: u, classNames: c } = e, C = Se(e, [
      "prefixCls",
      "title",
      "extra",
      "column",
      "colon",
      "bordered",
      "layout",
      "children",
      "className",
      "rootClassName",
      "style",
      "size",
      "labelStyle",
      "contentStyle",
      "styles",
      "items",
      "classNames"
    ]), { getPrefixCls: w, direction: E, className: P, style: I, classNames: h, styles: d } = Z("descriptions"), O = w("descriptions", t), L = ne(), W = o.useMemo(() => {
      var N;
      return typeof s == "number" ? s : (N = A(L, Object.assign(Object.assign({}, me), s))) !== null && N !== void 0 ? N : 3;
    }, [
      L,
      s
    ]), D = pe(L, u, g), B = se(m), G = fe(W, D), [V, X, F] = $e(O), U = o.useMemo(() => ({
      labelStyle: b,
      contentStyle: $,
      styles: {
        content: Object.assign(Object.assign({}, d.content), i == null ? void 0 : i.content),
        label: Object.assign(Object.assign({}, d.label), i == null ? void 0 : i.label)
      },
      classNames: {
        label: j(h.label, c == null ? void 0 : c.label),
        content: j(h.content, c == null ? void 0 : c.content)
      }
    }), [
      b,
      $,
      i,
      c,
      h,
      d
    ]);
    return V(o.createElement(R.Provider, {
      value: U
    }, o.createElement("div", Object.assign({
      className: j(O, P, h.root, c == null ? void 0 : c.root, {
        [`${O}-${B}`]: B && B !== "default",
        [`${O}-bordered`]: !!a,
        [`${O}-rtl`]: E === "rtl"
      }, f, x, X, F),
      style: Object.assign(Object.assign(Object.assign(Object.assign({}, I), d.root), i == null ? void 0 : i.root), S)
    }, C), (n || l) && o.createElement("div", {
      className: j(`${O}-header`, h.header, c == null ? void 0 : c.header),
      style: Object.assign(Object.assign({}, d.header), i == null ? void 0 : i.header)
    }, n && o.createElement("div", {
      className: j(`${O}-title`, h.title, c == null ? void 0 : c.title),
      style: Object.assign(Object.assign({}, d.title), i == null ? void 0 : i.title)
    }, n), l && o.createElement("div", {
      className: j(`${O}-extra`, h.extra, c == null ? void 0 : c.extra),
      style: Object.assign(Object.assign({}, d.extra), i == null ? void 0 : i.extra)
    }, l)), o.createElement("div", {
      className: `${O}-view`
    }, o.createElement("table", null, o.createElement("tbody", null, G.map((N, _) => o.createElement(ve, {
      key: _,
      index: _,
      colon: r,
      prefixCls: O,
      vertical: p === "vertical",
      bordered: a,
      row: N
    }))))))));
  };
  H.Item = he;
  let Ce;
  Ce = () => {
    const { t: e } = k("settings"), { data: t, status: n } = ae({
      queryKey: [
        "fetchOllamURL"
      ],
      queryFn: async () => {
        const l = re.runtime.getManifest().version;
        try {
          const s = await ie(), r = await ce(`${de(s)}/api/version`);
          return r.ok ? {
            ollama: (await r.json()).version,
            chromeVersion: l
          } : {
            ollama: "N/A",
            chromeVersion: l
          };
        } catch {
          return {
            ollama: "N/A",
            chromeVersion: l
          };
        }
      }
    });
    return y.jsxs("div", {
      className: "flex flex-col space-y-3",
      children: [
        n === "pending" && y.jsx(oe, {
          paragraph: {
            rows: 4
          },
          active: true
        }),
        n === "success" && y.jsxs("div", {
          className: "flex flex-col space-y-4",
          children: [
            y.jsx(H, {
              title: e("about.heading"),
              column: 1,
              size: "middle",
              items: [
                {
                  key: 1,
                  label: e("about.chromeVersion"),
                  children: t.chromeVersion
                },
                {
                  key: 1,
                  label: e("about.ollamaVersion"),
                  children: t.ollama
                },
                {
                  key: 2,
                  label: "Community",
                  children: y.jsx("a", {
                    href: "https://discord.com/invite/bu54382uBd",
                    target: "_blank",
                    rel: "noreferrer",
                    className: "text-blue-500 dark:text-blue-400",
                    children: "Discord Server"
                  })
                },
                {
                  key: 3,
                  label: "X (formerly Twitter)",
                  children: y.jsx("a", {
                    href: "https://twitter.com/page_assist",
                    target: "_blank",
                    rel: "noreferrer",
                    className: "text-blue-500 dark:text-blue-400",
                    children: "@page_assist"
                  })
                }
              ]
            }),
            y.jsxs("div", {
              children: [
                y.jsx("p", {
                  className: "text-sm text-gray-700 dark:text-gray-400 mb-4",
                  children: e("about.support")
                }),
                y.jsxs("div", {
                  className: "flex gap-2",
                  children: [
                    y.jsx("a", {
                      href: "https://ko-fi.com/n4ze3m",
                      target: "_blank",
                      rel: "noreferrer",
                      className: "text-blue-500 dark:text-blue-400 border dark:border-gray-600 px-2.5 py-2 rounded-md",
                      children: e("about.koFi")
                    }),
                    y.jsx("a", {
                      href: "https://github.com/sponsors/n4ze3m",
                      target: "_blank",
                      rel: "noreferrer",
                      className: "text-blue-500 dark:text-blue-400 border dark:border-gray-600 px-2.5 py-2 rounded-md",
                      children: e("about.githubSponsor")
                    })
                  ]
                })
              ]
            })
          ]
        })
      ]
    });
  };
  Be = () => y.jsx(te, {
    children: y.jsx(ee, {
      children: y.jsx(Ce, {})
    })
  });
});
export {
  __tla,
  Be as default
};
