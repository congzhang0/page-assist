var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { r as oe, _ as il, T as al, q as Gt, k as ua, n as Ks, o as ht, l as Ie, U as da, s as Ys, v as Qs, w as Js, y as Xe, V as ol, W as Dr, X as cl, Y as Dt, Z as eu, $ as tu, a0 as nu, p as Le, a1 as Ze, a2 as ru, c as la, a3 as iu, A as au, a4 as po, i as ou, a5 as sl, a6 as ul, a7 as dl, a8 as ll, a9 as go, aa as ft, g as fl, ab as hl, a as ba, f as cu, j as Te, e as pl, __tla as __tla_0 } from "./FontSizeProvider-C1DZf1x-.js";
import { S as gl, __tla as __tla_1 } from "./SettingsOptionLayout-OzuGfHmE.js";
import { O as ml, __tla as __tla_2 } from "./Layout-D44e2h93.js";
import { a as bl, u as Gr, c as yl, b as vl, d as Dl, f as xl, g as _l, __tla as __tla_3 } from "./knowledge-fqI6SHTl.js";
import { T as yn, a6 as fa, P as su, a7 as wl, a8 as Ul, a9 as Tl, aa as El, ab as Tn, ac as Zt, ad as et, ae as Cl, af as Al, ag as Fl, ah as Sl, ai as kl, aj as mo, ak as bo, al as yo, O as Bl, c as uu, a1 as Wl, b as vo, g as Rl, a as Il, F as lt, e as ya, I as Ol, h as du, u as Nl, k as Ll, B as Ml, G as Do } from "./SaveButton-B6h4W40A.js";
import { a4 as ql, a5 as xr, a6 as Pl, a7 as va, a8 as Fn, a9 as jl, aa as $l, ab as zl, ac as Sn, t as lu, h as Xl, T as Vl, __tla as __tla_4 } from "./Sidebar-DZH9YUxk.js";
import { s as xt } from "./chevron-right-CHUn5UPl.js";
import { F as xo, __tla as __tla_5 } from "./Table-D7-VcBcl.js";
import "./index-23mm4Rzq.js";
import "./useBubbleLock-D9rWo-oM.js";
import "./index-Bva-imIy.js";
let cm;
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
  })(),
  (() => {
    try {
      return __tla_4;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_5;
    } catch {
    }
  })()
]).then(async () => {
  var Hl = {
    percent: 0,
    prefixCls: "rc-progress",
    strokeColor: "#2db7f5",
    strokeLinecap: "round",
    strokeWidth: 1,
    trailColor: "#D9D9D9",
    trailWidth: 1,
    gapPosition: "bottom"
  }, Gl = function() {
    var t = oe.useRef([]), n = oe.useRef(null);
    return oe.useEffect(function() {
      var r = Date.now(), a = false;
      t.current.forEach(function(i) {
        if (i) {
          a = true;
          var c = i.style;
          c.transitionDuration = ".3s, .3s, .3s, .06s", n.current && r - n.current < 100 && (c.transitionDuration = "0s, 0s");
        }
      }), a && (n.current = Date.now());
    }), t.current;
  }, _o = 0, Zl = al();
  function Kl() {
    var e;
    return Zl ? (e = _o, _o += 1) : e = "TEST_OR_SSR", e;
  }
  const Yl = function(e) {
    var t = oe.useState(), n = il(t, 2), r = n[0], a = n[1];
    return oe.useEffect(function() {
      a("rc_progress_".concat(Kl()));
    }, []), e || r;
  };
  var wo = function(t) {
    var n = t.bg, r = t.children;
    return oe.createElement("div", {
      style: {
        width: "100%",
        height: "100%",
        background: n
      }
    }, r);
  };
  function Uo(e, t) {
    return Object.keys(e).map(function(n) {
      var r = parseFloat(n), a = "".concat(Math.floor(r * t), "%");
      return "".concat(e[n], " ").concat(a);
    });
  }
  var Ql = oe.forwardRef(function(e, t) {
    var n = e.prefixCls, r = e.color, a = e.gradientId, i = e.radius, c = e.style, o = e.ptg, s = e.strokeLinecap, d = e.strokeWidth, b = e.size, p = e.gapDegree, g = r && Gt(r) === "object", m = g ? "#FFF" : void 0, y = b / 2, l = oe.createElement("circle", {
      className: "".concat(n, "-circle-path"),
      r: i,
      cx: y,
      cy: y,
      stroke: m,
      strokeLinecap: s,
      strokeWidth: d,
      opacity: o === 0 ? 0 : 1,
      style: c,
      ref: t
    });
    if (!g) return l;
    var u = "".concat(a, "-conic"), h = p ? "".concat(180 + p / 2, "deg") : "0deg", f = Uo(r, (360 - p) / 360), v = Uo(r, 1), w = "conic-gradient(from ".concat(h, ", ").concat(f.join(", "), ")"), x = "linear-gradient(to ".concat(p ? "bottom" : "top", ", ").concat(v.join(", "), ")");
    return oe.createElement(oe.Fragment, null, oe.createElement("mask", {
      id: u
    }, l), oe.createElement("foreignObject", {
      x: 0,
      y: 0,
      width: b,
      height: b,
      mask: "url(#".concat(u, ")")
    }, oe.createElement(wo, {
      bg: x
    }, oe.createElement(wo, {
      bg: w
    }))));
  }), gn = 100, Zr = function(t, n, r, a, i, c, o, s, d, b) {
    var p = arguments.length > 10 && arguments[10] !== void 0 ? arguments[10] : 0, g = r / 100 * 360 * ((360 - c) / 360), m = c === 0 ? 0 : {
      bottom: 0,
      top: 180,
      left: 90,
      right: -90
    }[o], y = (100 - a) / 100 * n;
    d === "round" && a !== 100 && (y += b / 2, y >= n && (y = n - 0.01));
    var l = gn / 2;
    return {
      stroke: typeof s == "string" ? s : void 0,
      strokeDasharray: "".concat(n, "px ").concat(t),
      strokeDashoffset: y + p,
      transform: "rotate(".concat(i + g + m, "deg)"),
      transformOrigin: "".concat(l, "px ").concat(l, "px"),
      transition: "stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s, opacity .3s ease 0s",
      fillOpacity: 0
    };
  }, Jl = [
    "id",
    "prefixCls",
    "steps",
    "strokeWidth",
    "trailWidth",
    "gapDegree",
    "gapPosition",
    "trailColor",
    "strokeLinecap",
    "style",
    "className",
    "strokeColor",
    "percent"
  ];
  function To(e) {
    var t = e ?? [];
    return Array.isArray(t) ? t : [
      t
    ];
  }
  var ef = function(t) {
    var n = ua(ua({}, Hl), t), r = n.id, a = n.prefixCls, i = n.steps, c = n.strokeWidth, o = n.trailWidth, s = n.gapDegree, d = s === void 0 ? 0 : s, b = n.gapPosition, p = n.trailColor, g = n.strokeLinecap, m = n.style, y = n.className, l = n.strokeColor, u = n.percent, h = Ks(n, Jl), f = gn / 2, v = Yl(r), w = "".concat(v, "-gradient"), x = f - c / 2, U = Math.PI * 2 * x, E = d > 0 ? 90 + d / 2 : -90, F = U * ((360 - d) / 360), C = Gt(i) === "object" ? i : {
      count: i,
      gap: 2
    }, R = C.count, z = C.gap, T = To(u), B = To(l), _ = B.find(function(N) {
      return N && Gt(N) === "object";
    }), P = _ && Gt(_) === "object", k = P ? "butt" : g, I = Zr(U, F, 0, 100, E, d, b, p, k, c), H = Gl(), q = function() {
      var $ = 0;
      return T.map(function(M, ee) {
        var te = B[ee] || B[B.length - 1], se = Zr(U, F, $, M, E, d, b, te, k, c);
        return $ += M, oe.createElement(Ql, {
          key: ee,
          color: te,
          ptg: M,
          radius: x,
          prefixCls: a,
          gradientId: w,
          style: se,
          strokeLinecap: k,
          strokeWidth: c,
          gapDegree: d,
          ref: function(fe) {
            H[ee] = fe;
          },
          size: gn
        });
      }).reverse();
    }, Y = function() {
      var $ = Math.round(R * (T[0] / 100)), M = 100 / R, ee = 0;
      return new Array(R).fill(null).map(function(te, se) {
        var le = se <= $ - 1 ? B[0] : p, fe = le && Gt(le) === "object" ? "url(#".concat(w, ")") : void 0, ge = Zr(U, F, ee, M, E, d, b, le, "butt", c, z);
        return ee += (F - ge.strokeDashoffset + z) * 100 / F, oe.createElement("circle", {
          key: se,
          className: "".concat(a, "-circle-path"),
          r: x,
          cx: f,
          cy: f,
          stroke: fe,
          strokeWidth: c,
          opacity: 1,
          style: ge,
          ref: function(De) {
            H[se] = De;
          }
        });
      });
    };
    return oe.createElement("svg", ht({
      className: Ie("".concat(a, "-circle"), y),
      viewBox: "0 0 ".concat(gn, " ").concat(gn),
      style: m,
      id: r,
      role: "presentation"
    }, h), !R && oe.createElement("circle", {
      className: "".concat(a, "-circle-trail"),
      r: x,
      cx: f,
      cy: f,
      stroke: p,
      strokeLinecap: k,
      strokeWidth: o || c,
      style: I
    }), R ? Y() : q());
  };
  function _t(e) {
    return !e || e < 0 ? 0 : e > 100 ? 100 : e;
  }
  function hr(e) {
    let { success: t, successPercent: n } = e, r = n;
    return t && "progress" in t && (r = t.progress), t && "percent" in t && (r = t.percent), r;
  }
  const tf = (e) => {
    let { percent: t, success: n, successPercent: r } = e;
    const a = _t(hr({
      success: n,
      successPercent: r
    }));
    return [
      a,
      _t(_t(t) - a)
    ];
  }, nf = (e) => {
    let { success: t = {}, strokeColor: n } = e;
    const { strokeColor: r } = t;
    return [
      r || da.green,
      n || null
    ];
  }, _r = (e, t, n) => {
    var r, a, i, c;
    let o = -1, s = -1;
    if (t === "step") {
      const d = n.steps, b = n.strokeWidth;
      typeof e == "string" || typeof e > "u" ? (o = e === "small" ? 2 : 14, s = b ?? 8) : typeof e == "number" ? [o, s] = [
        e,
        e
      ] : [o = 14, s = 8] = Array.isArray(e) ? e : [
        e.width,
        e.height
      ], o *= d;
    } else if (t === "line") {
      const d = n == null ? void 0 : n.strokeWidth;
      typeof e == "string" || typeof e > "u" ? s = d || (e === "small" ? 6 : 8) : typeof e == "number" ? [o, s] = [
        e,
        e
      ] : [o = -1, s = 8] = Array.isArray(e) ? e : [
        e.width,
        e.height
      ];
    } else (t === "circle" || t === "dashboard") && (typeof e == "string" || typeof e > "u" ? [o, s] = e === "small" ? [
      60,
      60
    ] : [
      120,
      120
    ] : typeof e == "number" ? [o, s] = [
      e,
      e
    ] : Array.isArray(e) && (o = (a = (r = e[0]) !== null && r !== void 0 ? r : e[1]) !== null && a !== void 0 ? a : 120, s = (c = (i = e[0]) !== null && i !== void 0 ? i : e[1]) !== null && c !== void 0 ? c : 120));
    return [
      o,
      s
    ];
  }, rf = 3, af = (e) => rf / e * 100, of = (e) => {
    const { prefixCls: t, trailColor: n = null, strokeLinecap: r = "round", gapPosition: a, gapDegree: i, width: c = 120, type: o, children: s, success: d, size: b = c, steps: p } = e, [g, m] = _r(b, "circle");
    let { strokeWidth: y } = e;
    y === void 0 && (y = Math.max(af(g), 6));
    const l = {
      width: g,
      height: m,
      fontSize: g * 0.15 + 6
    }, u = oe.useMemo(() => {
      if (i || i === 0) return i;
      if (o === "dashboard") return 75;
    }, [
      i,
      o
    ]), h = tf(e), f = a || o === "dashboard" && "bottom" || void 0, v = Object.prototype.toString.call(e.strokeColor) === "[object Object]", w = nf({
      success: d,
      strokeColor: e.strokeColor
    }), x = Ie(`${t}-inner`, {
      [`${t}-circle-gradient`]: v
    }), U = oe.createElement(ef, {
      steps: p,
      percent: p ? h[1] : h,
      strokeWidth: y,
      trailWidth: y,
      strokeColor: p ? w[1] : w,
      strokeLinecap: r,
      trailColor: n,
      prefixCls: t,
      gapDegree: u,
      gapPosition: f
    }), E = g <= 20, F = oe.createElement("div", {
      className: x,
      style: l
    }, U, !E && s);
    return E ? oe.createElement(yn, {
      title: s
    }, F) : F;
  }, pr = "--progress-line-stroke-color", fu = "--progress-percent", Eo = (e) => {
    const t = e ? "100%" : "-100%";
    return new fa(`antProgress${e ? "RTL" : "LTR"}Active`, {
      "0%": {
        transform: `translateX(${t}) scaleX(0)`,
        opacity: 0.1
      },
      "20%": {
        transform: `translateX(${t}) scaleX(0)`,
        opacity: 0.5
      },
      to: {
        transform: "translateX(0) scaleX(1)",
        opacity: 0
      }
    });
  }, cf = (e) => {
    const { componentCls: t, iconCls: n } = e;
    return {
      [t]: Object.assign(Object.assign({}, Js(e)), {
        display: "inline-block",
        "&-rtl": {
          direction: "rtl"
        },
        "&-line": {
          position: "relative",
          width: "100%",
          fontSize: e.fontSize
        },
        [`${t}-outer`]: {
          display: "inline-flex",
          alignItems: "center",
          width: "100%"
        },
        [`${t}-inner`]: {
          position: "relative",
          display: "inline-block",
          width: "100%",
          flex: 1,
          overflow: "hidden",
          verticalAlign: "middle",
          backgroundColor: e.remainingColor,
          borderRadius: e.lineBorderRadius
        },
        [`${t}-inner:not(${t}-circle-gradient)`]: {
          [`${t}-circle-path`]: {
            stroke: e.defaultColor
          }
        },
        [`${t}-success-bg, ${t}-bg`]: {
          position: "relative",
          background: e.defaultColor,
          borderRadius: e.lineBorderRadius,
          transition: `all ${e.motionDurationSlow} ${e.motionEaseInOutCirc}`
        },
        [`${t}-layout-bottom`]: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          [`${t}-text`]: {
            width: "max-content",
            marginInlineStart: 0,
            marginTop: e.marginXXS
          }
        },
        [`${t}-bg`]: {
          overflow: "hidden",
          "&::after": {
            content: '""',
            background: {
              _multi_value_: true,
              value: [
                "inherit",
                `var(${pr})`
              ]
            },
            height: "100%",
            width: `calc(1 / var(${fu}) * 100%)`,
            display: "block"
          },
          [`&${t}-bg-inner`]: {
            minWidth: "max-content",
            "&::after": {
              content: "none"
            },
            [`${t}-text-inner`]: {
              color: e.colorWhite,
              [`&${t}-text-bright`]: {
                color: "rgba(0, 0, 0, 0.45)"
              }
            }
          }
        },
        [`${t}-success-bg`]: {
          position: "absolute",
          insetBlockStart: 0,
          insetInlineStart: 0,
          backgroundColor: e.colorSuccess
        },
        [`${t}-text`]: {
          display: "inline-block",
          marginInlineStart: e.marginXS,
          color: e.colorText,
          lineHeight: 1,
          width: "2em",
          whiteSpace: "nowrap",
          textAlign: "start",
          verticalAlign: "middle",
          wordBreak: "normal",
          [n]: {
            fontSize: e.fontSize
          },
          [`&${t}-text-outer`]: {
            width: "max-content"
          },
          [`&${t}-text-outer${t}-text-start`]: {
            width: "max-content",
            marginInlineStart: 0,
            marginInlineEnd: e.marginXS
          }
        },
        [`${t}-text-inner`]: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          marginInlineStart: 0,
          padding: `0 ${Xe(e.paddingXXS)}`,
          [`&${t}-text-start`]: {
            justifyContent: "start"
          },
          [`&${t}-text-end`]: {
            justifyContent: "end"
          }
        },
        [`&${t}-status-active`]: {
          [`${t}-bg::before`]: {
            position: "absolute",
            inset: 0,
            backgroundColor: e.colorBgContainer,
            borderRadius: e.lineBorderRadius,
            opacity: 0,
            animationName: Eo(),
            animationDuration: e.progressActiveMotionDuration,
            animationTimingFunction: e.motionEaseOutQuint,
            animationIterationCount: "infinite",
            content: '""'
          }
        },
        [`&${t}-rtl${t}-status-active`]: {
          [`${t}-bg::before`]: {
            animationName: Eo(true)
          }
        },
        [`&${t}-status-exception`]: {
          [`${t}-bg`]: {
            backgroundColor: e.colorError
          },
          [`${t}-text`]: {
            color: e.colorError
          }
        },
        [`&${t}-status-exception ${t}-inner:not(${t}-circle-gradient)`]: {
          [`${t}-circle-path`]: {
            stroke: e.colorError
          }
        },
        [`&${t}-status-success`]: {
          [`${t}-bg`]: {
            backgroundColor: e.colorSuccess
          },
          [`${t}-text`]: {
            color: e.colorSuccess
          }
        },
        [`&${t}-status-success ${t}-inner:not(${t}-circle-gradient)`]: {
          [`${t}-circle-path`]: {
            stroke: e.colorSuccess
          }
        }
      })
    };
  }, sf = (e) => {
    const { componentCls: t, iconCls: n } = e;
    return {
      [t]: {
        [`${t}-circle-trail`]: {
          stroke: e.remainingColor
        },
        [`&${t}-circle ${t}-inner`]: {
          position: "relative",
          lineHeight: 1,
          backgroundColor: "transparent"
        },
        [`&${t}-circle ${t}-text`]: {
          position: "absolute",
          insetBlockStart: "50%",
          insetInlineStart: 0,
          width: "100%",
          margin: 0,
          padding: 0,
          color: e.circleTextColor,
          fontSize: e.circleTextFontSize,
          lineHeight: 1,
          whiteSpace: "normal",
          textAlign: "center",
          transform: "translateY(-50%)",
          [n]: {
            fontSize: e.circleIconFontSize
          }
        },
        [`${t}-circle&-status-exception`]: {
          [`${t}-text`]: {
            color: e.colorError
          }
        },
        [`${t}-circle&-status-success`]: {
          [`${t}-text`]: {
            color: e.colorSuccess
          }
        }
      },
      [`${t}-inline-circle`]: {
        lineHeight: 1,
        [`${t}-inner`]: {
          verticalAlign: "bottom"
        }
      }
    };
  }, uf = (e) => {
    const { componentCls: t } = e;
    return {
      [t]: {
        [`${t}-steps`]: {
          display: "inline-block",
          "&-outer": {
            display: "flex",
            flexDirection: "row",
            alignItems: "center"
          },
          "&-item": {
            flexShrink: 0,
            minWidth: e.progressStepMinWidth,
            marginInlineEnd: e.progressStepMarginInlineEnd,
            backgroundColor: e.remainingColor,
            transition: `all ${e.motionDurationSlow}`,
            "&-active": {
              backgroundColor: e.defaultColor
            }
          }
        }
      }
    };
  }, df = (e) => {
    const { componentCls: t, iconCls: n } = e;
    return {
      [t]: {
        [`${t}-small&-line, ${t}-small&-line ${t}-text ${n}`]: {
          fontSize: e.fontSizeSM
        }
      }
    };
  }, lf = (e) => ({
    circleTextColor: e.colorText,
    defaultColor: e.colorInfo,
    remainingColor: e.colorFillSecondary,
    lineBorderRadius: 100,
    circleTextFontSize: "1em",
    circleIconFontSize: `${e.fontSize / e.fontSizeSM}em`
  }), ff = Ys("Progress", (e) => {
    const t = e.calc(e.marginXXS).div(2).equal(), n = Qs(e, {
      progressStepMarginInlineEnd: t,
      progressStepMinWidth: t,
      progressActiveMotionDuration: "2.4s"
    });
    return [
      cf(n),
      sf(n),
      uf(n),
      df(n)
    ];
  }, lf);
  var hf = function(e, t) {
    var n = {};
    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
    return n;
  };
  const pf = (e) => {
    let t = [];
    return Object.keys(e).forEach((n) => {
      const r = parseFloat(n.replace(/%/g, ""));
      Number.isNaN(r) || t.push({
        key: r,
        value: e[n]
      });
    }), t = t.sort((n, r) => n.key - r.key), t.map((n) => {
      let { key: r, value: a } = n;
      return `${a} ${r}%`;
    }).join(", ");
  }, gf = (e, t) => {
    const { from: n = da.blue, to: r = da.blue, direction: a = t === "rtl" ? "to left" : "to right" } = e, i = hf(e, [
      "from",
      "to",
      "direction"
    ]);
    if (Object.keys(i).length !== 0) {
      const o = pf(i), s = `linear-gradient(${a}, ${o})`;
      return {
        background: s,
        [pr]: s
      };
    }
    const c = `linear-gradient(${a}, ${n}, ${r})`;
    return {
      background: c,
      [pr]: c
    };
  }, mf = (e) => {
    const { prefixCls: t, direction: n, percent: r, size: a, strokeWidth: i, strokeColor: c, strokeLinecap: o = "round", children: s, trailColor: d = null, percentPosition: b, success: p } = e, { align: g, type: m } = b, y = c && typeof c != "string" ? gf(c, n) : {
      [pr]: c,
      background: c
    }, l = o === "square" || o === "butt" ? 0 : void 0, u = a ?? [
      -1,
      i || (a === "small" ? 6 : 8)
    ], [h, f] = _r(u, "line", {
      strokeWidth: i
    }), v = {
      backgroundColor: d || void 0,
      borderRadius: l
    }, w = Object.assign(Object.assign({
      width: `${_t(r)}%`,
      height: f,
      borderRadius: l
    }, y), {
      [fu]: _t(r) / 100
    }), x = hr(e), U = {
      width: `${_t(x)}%`,
      height: f,
      borderRadius: l,
      backgroundColor: p == null ? void 0 : p.strokeColor
    }, E = {
      width: h < 0 ? "100%" : h
    }, F = oe.createElement("div", {
      className: `${t}-inner`,
      style: v
    }, oe.createElement("div", {
      className: Ie(`${t}-bg`, `${t}-bg-${m}`),
      style: w
    }, m === "inner" && s), x !== void 0 && oe.createElement("div", {
      className: `${t}-success-bg`,
      style: U
    })), C = m === "outer" && g === "start", R = m === "outer" && g === "end";
    return m === "outer" && g === "center" ? oe.createElement("div", {
      className: `${t}-layout-bottom`
    }, F, s) : oe.createElement("div", {
      className: `${t}-outer`,
      style: E
    }, C && s, F, R && s);
  }, bf = (e) => {
    const { size: t, steps: n, rounding: r = Math.round, percent: a = 0, strokeWidth: i = 8, strokeColor: c, trailColor: o = null, prefixCls: s, children: d } = e, b = r(n * (a / 100)), g = t ?? [
      t === "small" ? 2 : 14,
      i
    ], [m, y] = _r(g, "step", {
      steps: n,
      strokeWidth: i
    }), l = m / n, u = Array.from({
      length: n
    });
    for (let h = 0; h < n; h++) {
      const f = Array.isArray(c) ? c[h] : c;
      u[h] = oe.createElement("div", {
        key: h,
        className: Ie(`${s}-steps-item`, {
          [`${s}-steps-item-active`]: h <= b - 1
        }),
        style: {
          backgroundColor: h <= b - 1 ? f : o,
          width: l,
          height: y
        }
      });
    }
    return oe.createElement("div", {
      className: `${s}-steps-outer`
    }, u, d);
  };
  var yf = function(e, t) {
    var n = {};
    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
    return n;
  };
  const vf = [
    "normal",
    "exception",
    "active",
    "success"
  ], Df = oe.forwardRef((e, t) => {
    const { prefixCls: n, className: r, rootClassName: a, steps: i, strokeColor: c, percent: o = 0, size: s = "default", showInfo: d = true, type: b = "line", status: p, format: g, style: m, percentPosition: y = {} } = e, l = yf(e, [
      "prefixCls",
      "className",
      "rootClassName",
      "steps",
      "strokeColor",
      "percent",
      "size",
      "showInfo",
      "type",
      "status",
      "format",
      "style",
      "percentPosition"
    ]), { align: u = "end", type: h = "outer" } = y, f = Array.isArray(c) ? c[0] : c, v = typeof c == "string" || Array.isArray(c) ? c : void 0, w = oe.useMemo(() => {
      if (f) {
        const q = typeof f == "string" ? f : Object.values(f)[0];
        return new ol(q).isLight();
      }
      return false;
    }, [
      c
    ]), x = oe.useMemo(() => {
      var q, Y;
      const N = hr(e);
      return parseInt(N !== void 0 ? (q = N ?? 0) === null || q === void 0 ? void 0 : q.toString() : (Y = o ?? 0) === null || Y === void 0 ? void 0 : Y.toString(), 10);
    }, [
      o,
      e.success,
      e.successPercent
    ]), U = oe.useMemo(() => !vf.includes(p) && x >= 100 ? "success" : p || "normal", [
      p,
      x
    ]), { getPrefixCls: E, direction: F, progress: C } = oe.useContext(Dr), R = E("progress", n), [z, T, B] = ff(R), _ = b === "line", P = _ && !i, k = oe.useMemo(() => {
      if (!d) return null;
      const q = hr(e);
      let Y;
      const N = g || ((M) => `${M}%`), $ = _ && w && h === "inner";
      return h === "inner" || g || U !== "exception" && U !== "success" ? Y = N(_t(o), _t(q)) : U === "exception" ? Y = _ ? oe.createElement(wl, null) : oe.createElement(Ul, null) : U === "success" && (Y = _ ? oe.createElement(Tl, null) : oe.createElement(El, null)), oe.createElement("span", {
        className: Ie(`${R}-text`, {
          [`${R}-text-bright`]: $,
          [`${R}-text-${u}`]: P,
          [`${R}-text-${h}`]: P
        }),
        title: typeof Y == "string" ? Y : void 0
      }, Y);
    }, [
      d,
      o,
      x,
      U,
      b,
      R,
      g
    ]);
    let I;
    b === "line" ? I = i ? oe.createElement(bf, Object.assign({}, e, {
      strokeColor: v,
      prefixCls: R,
      steps: typeof i == "object" ? i.count : i
    }), k) : oe.createElement(mf, Object.assign({}, e, {
      strokeColor: f,
      prefixCls: R,
      direction: F,
      percentPosition: {
        align: u,
        type: h
      }
    }), k) : (b === "circle" || b === "dashboard") && (I = oe.createElement(of, Object.assign({}, e, {
      strokeColor: f,
      prefixCls: R,
      progressStatus: U
    }), k));
    const H = Ie(R, `${R}-status-${U}`, {
      [`${R}-${b === "dashboard" && "circle" || b}`]: b !== "line",
      [`${R}-inline-circle`]: b === "circle" && _r(s, "circle")[0] <= 20,
      [`${R}-line`]: P,
      [`${R}-line-align-${u}`]: P,
      [`${R}-line-position-${h}`]: P,
      [`${R}-steps`]: i,
      [`${R}-show-info`]: d,
      [`${R}-${s}`]: typeof s == "string",
      [`${R}-rtl`]: F === "rtl"
    }, C == null ? void 0 : C.className, r, a, T, B);
    return z(oe.createElement("div", Object.assign({
      ref: t,
      style: Object.assign(Object.assign({}, C == null ? void 0 : C.style), m),
      className: H,
      role: "progressbar",
      "aria-valuenow": x,
      "aria-valuemin": 0,
      "aria-valuemax": 100
    }, su(l, [
      "trailColor",
      "strokeWidth",
      "width",
      "gapDegree",
      "gapPosition",
      "strokeLinecap",
      "success",
      "successPercent"
    ])), I));
  });
  var xf = {
    icon: {
      tag: "svg",
      attrs: {
        viewBox: "64 64 896 896",
        focusable: "false"
      },
      children: [
        {
          tag: "path",
          attrs: {
            d: "M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"
          }
        }
      ]
    },
    name: "delete",
    theme: "outlined"
  }, _f = function(t, n) {
    return oe.createElement(Tn, ht({}, t, {
      ref: n,
      icon: xf
    }));
  }, wf = oe.forwardRef(_f), Uf = {
    icon: {
      tag: "svg",
      attrs: {
        viewBox: "64 64 896 896",
        focusable: "false"
      },
      children: [
        {
          tag: "path",
          attrs: {
            d: "M505.7 661a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"
          }
        }
      ]
    },
    name: "download",
    theme: "outlined"
  }, Tf = function(t, n) {
    return oe.createElement(Tn, ht({}, t, {
      ref: n,
      icon: Uf
    }));
  }, Ef = oe.forwardRef(Tf), Cf = {
    icon: function(t, n) {
      return {
        tag: "svg",
        attrs: {
          viewBox: "64 64 896 896",
          focusable: "false"
        },
        children: [
          {
            tag: "path",
            attrs: {
              d: "M534 352V136H232v752h560V394H576a42 42 0 01-42-42z",
              fill: n
            }
          },
          {
            tag: "path",
            attrs: {
              d: "M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM602 137.8L790.2 326H602V137.8zM792 888H232V136h302v216a42 42 0 0042 42h216v494z",
              fill: t
            }
          }
        ]
      };
    },
    name: "file",
    theme: "twotone"
  }, Af = function(t, n) {
    return oe.createElement(Tn, ht({}, t, {
      ref: n,
      icon: Cf
    }));
  }, Ff = oe.forwardRef(Af), Sf = {
    icon: {
      tag: "svg",
      attrs: {
        viewBox: "64 64 896 896",
        focusable: "false"
      },
      children: [
        {
          tag: "path",
          attrs: {
            d: "M779.3 196.6c-94.2-94.2-247.6-94.2-341.7 0l-261 260.8c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0012.7 0l261-260.8c32.4-32.4 75.5-50.2 121.3-50.2s88.9 17.8 121.2 50.2c32.4 32.4 50.2 75.5 50.2 121.2 0 45.8-17.8 88.8-50.2 121.2l-266 265.9-43.1 43.1c-40.3 40.3-105.8 40.3-146.1 0-19.5-19.5-30.2-45.4-30.2-73s10.7-53.5 30.2-73l263.9-263.8c6.7-6.6 15.5-10.3 24.9-10.3h.1c9.4 0 18.1 3.7 24.7 10.3 6.7 6.7 10.3 15.5 10.3 24.9 0 9.3-3.7 18.1-10.3 24.7L372.4 653c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0012.7 0l215.6-215.6c19.9-19.9 30.8-46.3 30.8-74.4s-11-54.6-30.8-74.4c-41.1-41.1-107.9-41-149 0L463 364 224.8 602.1A172.22 172.22 0 00174 724.8c0 46.3 18.1 89.8 50.8 122.5 33.9 33.8 78.3 50.7 122.7 50.7 44.4 0 88.8-16.9 122.6-50.7l309.2-309C824.8 492.7 850 432 850 367.5c.1-64.6-25.1-125.3-70.7-170.9z"
          }
        }
      ]
    },
    name: "paper-clip",
    theme: "outlined"
  }, kf = function(t, n) {
    return oe.createElement(Tn, ht({}, t, {
      ref: n,
      icon: Sf
    }));
  }, Bf = oe.forwardRef(kf), Wf = {
    icon: function(t, n) {
      return {
        tag: "svg",
        attrs: {
          viewBox: "64 64 896 896",
          focusable: "false"
        },
        children: [
          {
            tag: "path",
            attrs: {
              d: "M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 632H136v-39.9l138.5-164.3 150.1 178L658.1 489 888 761.6V792zm0-129.8L664.2 396.8c-3.2-3.8-9-3.8-12.2 0L424.6 666.4l-144-170.7c-3.2-3.8-9-3.8-12.2 0L136 652.7V232h752v430.2z",
              fill: t
            }
          },
          {
            tag: "path",
            attrs: {
              d: "M424.6 765.8l-150.1-178L136 752.1V792h752v-30.4L658.1 489z",
              fill: n
            }
          },
          {
            tag: "path",
            attrs: {
              d: "M136 652.7l132.4-157c3.2-3.8 9-3.8 12.2 0l144 170.7L652 396.8c3.2-3.8 9-3.8 12.2 0L888 662.2V232H136v420.7zM304 280a88 88 0 110 176 88 88 0 010-176z",
              fill: n
            }
          },
          {
            tag: "path",
            attrs: {
              d: "M276 368a28 28 0 1056 0 28 28 0 10-56 0z",
              fill: n
            }
          },
          {
            tag: "path",
            attrs: {
              d: "M304 456a88 88 0 100-176 88 88 0 000 176zm0-116c15.5 0 28 12.5 28 28s-12.5 28-28 28-28-12.5-28-28 12.5-28 28-28z",
              fill: t
            }
          }
        ]
      };
    },
    name: "picture",
    theme: "twotone"
  }, Rf = function(t, n) {
    return oe.createElement(Tn, ht({}, t, {
      ref: n,
      icon: Wf
    }));
  }, If = oe.forwardRef(Rf);
  const Kr = function(e, t) {
    if (e && t) {
      var n = Array.isArray(t) ? t : t.split(","), r = e.name || "", a = e.type || "", i = a.replace(/\/.*$/, "");
      return n.some(function(c) {
        var o = c.trim();
        if (/^\*(\/\*)?$/.test(c)) return true;
        if (o.charAt(0) === ".") {
          var s = r.toLowerCase(), d = o.toLowerCase(), b = [
            d
          ];
          return (d === ".jpg" || d === ".jpeg") && (b = [
            ".jpg",
            ".jpeg"
          ]), b.some(function(p) {
            return s.endsWith(p);
          });
        }
        return /\/\*$/.test(o) ? i === o.replace(/\/.*$/, "") : a === o ? true : /^\w+$/.test(o) ? (cl(false, "Upload takes an invalidate 'accept' type '".concat(o, "'.Skip for check.")), true) : false;
      });
    }
    return true;
  };
  function Of(e, t) {
    var n = "cannot ".concat(e.method, " ").concat(e.action, " ").concat(t.status, "'"), r = new Error(n);
    return r.status = t.status, r.method = e.method, r.url = e.action, r;
  }
  function Co(e) {
    var t = e.responseText || e.response;
    if (!t) return t;
    try {
      return JSON.parse(t);
    } catch {
      return t;
    }
  }
  function Nf(e) {
    var t = new XMLHttpRequest();
    e.onProgress && t.upload && (t.upload.onprogress = function(i) {
      i.total > 0 && (i.percent = i.loaded / i.total * 100), e.onProgress(i);
    });
    var n = new FormData();
    e.data && Object.keys(e.data).forEach(function(a) {
      var i = e.data[a];
      if (Array.isArray(i)) {
        i.forEach(function(c) {
          n.append("".concat(a, "[]"), c);
        });
        return;
      }
      n.append(a, i);
    }), e.file instanceof Blob ? n.append(e.filename, e.file, e.file.name) : n.append(e.filename, e.file), t.onerror = function(i) {
      e.onError(i);
    }, t.onload = function() {
      return t.status < 200 || t.status >= 300 ? e.onError(Of(e, t), Co(t)) : e.onSuccess(Co(t), t);
    }, t.open(e.method, e.action, true), e.withCredentials && "withCredentials" in t && (t.withCredentials = true);
    var r = e.headers || {};
    return r["X-Requested-With"] !== null && t.setRequestHeader("X-Requested-With", "XMLHttpRequest"), Object.keys(r).forEach(function(a) {
      r[a] !== null && t.setRequestHeader(a, r[a]);
    }), t.send(n), {
      abort: function() {
        t.abort();
      }
    };
  }
  var Lf = function() {
    var e = Zt(et().mark(function t(n, r) {
      var a, i, c, o, s, d, b, p;
      return et().wrap(function(m) {
        for (; ; ) switch (m.prev = m.next) {
          case 0:
            d = function() {
              return d = Zt(et().mark(function l(u) {
                return et().wrap(function(f) {
                  for (; ; ) switch (f.prev = f.next) {
                    case 0:
                      return f.abrupt("return", new Promise(function(v) {
                        u.file(function(w) {
                          r(w) ? (u.fullPath && !w.webkitRelativePath && (Object.defineProperties(w, {
                            webkitRelativePath: {
                              writable: true
                            }
                          }), w.webkitRelativePath = u.fullPath.replace(/^\//, ""), Object.defineProperties(w, {
                            webkitRelativePath: {
                              writable: false
                            }
                          })), v(w)) : v(null);
                        });
                      }));
                    case 1:
                    case "end":
                      return f.stop();
                  }
                }, l);
              })), d.apply(this, arguments);
            }, s = function(l) {
              return d.apply(this, arguments);
            }, o = function() {
              return o = Zt(et().mark(function l(u) {
                var h, f, v, w, x;
                return et().wrap(function(E) {
                  for (; ; ) switch (E.prev = E.next) {
                    case 0:
                      h = u.createReader(), f = [];
                    case 2:
                      return E.next = 5, new Promise(function(F) {
                        h.readEntries(F, function() {
                          return F([]);
                        });
                      });
                    case 5:
                      if (v = E.sent, w = v.length, w) {
                        E.next = 9;
                        break;
                      }
                      return E.abrupt("break", 12);
                    case 9:
                      for (x = 0; x < w; x++) f.push(v[x]);
                      E.next = 2;
                      break;
                    case 12:
                      return E.abrupt("return", f);
                    case 13:
                    case "end":
                      return E.stop();
                  }
                }, l);
              })), o.apply(this, arguments);
            }, c = function(l) {
              return o.apply(this, arguments);
            }, a = [], i = [], n.forEach(function(y) {
              return i.push(y.webkitGetAsEntry());
            }), b = function() {
              var y = Zt(et().mark(function l(u, h) {
                var f, v;
                return et().wrap(function(x) {
                  for (; ; ) switch (x.prev = x.next) {
                    case 0:
                      if (u) {
                        x.next = 2;
                        break;
                      }
                      return x.abrupt("return");
                    case 2:
                      if (u.path = h || "", !u.isFile) {
                        x.next = 10;
                        break;
                      }
                      return x.next = 6, s(u);
                    case 6:
                      f = x.sent, f && a.push(f), x.next = 15;
                      break;
                    case 10:
                      if (!u.isDirectory) {
                        x.next = 15;
                        break;
                      }
                      return x.next = 13, c(u);
                    case 13:
                      v = x.sent, i.push.apply(i, Dt(v));
                    case 15:
                    case "end":
                      return x.stop();
                  }
                }, l);
              }));
              return function(u, h) {
                return y.apply(this, arguments);
              };
            }(), p = 0;
          case 9:
            if (!(p < i.length)) {
              m.next = 15;
              break;
            }
            return m.next = 12, b(i[p]);
          case 12:
            p++, m.next = 9;
            break;
          case 15:
            return m.abrupt("return", a);
          case 16:
          case "end":
            return m.stop();
        }
      }, t);
    }));
    return function(n, r) {
      return e.apply(this, arguments);
    };
  }(), Mf = +/* @__PURE__ */ new Date(), qf = 0;
  function Yr() {
    return "rc-upload-".concat(Mf, "-").concat(++qf);
  }
  var Pf = [
    "component",
    "prefixCls",
    "className",
    "classNames",
    "disabled",
    "id",
    "name",
    "style",
    "styles",
    "multiple",
    "accept",
    "capture",
    "children",
    "directory",
    "openFileDialogOnClick",
    "onMouseEnter",
    "onMouseLeave",
    "hasControlInside"
  ], jf = function(e) {
    eu(n, e);
    var t = tu(n);
    function n() {
      var r;
      nu(this, n);
      for (var a = arguments.length, i = new Array(a), c = 0; c < a; c++) i[c] = arguments[c];
      return r = t.call.apply(t, [
        this
      ].concat(i)), Le(Ze(r), "state", {
        uid: Yr()
      }), Le(Ze(r), "reqs", {}), Le(Ze(r), "fileInput", void 0), Le(Ze(r), "_isMounted", void 0), Le(Ze(r), "onChange", function(o) {
        var s = r.props, d = s.accept, b = s.directory, p = o.target.files, g = Dt(p).filter(function(m) {
          return !b || Kr(m, d);
        });
        r.uploadFiles(g), r.reset();
      }), Le(Ze(r), "onClick", function(o) {
        var s = r.fileInput;
        if (s) {
          var d = o.target, b = r.props.onClick;
          if (d && d.tagName === "BUTTON") {
            var p = s.parentNode;
            p.focus(), d.blur();
          }
          s.click(), b && b(o);
        }
      }), Le(Ze(r), "onKeyDown", function(o) {
        o.key === "Enter" && r.onClick(o);
      }), Le(Ze(r), "onFileDrop", function() {
        var o = Zt(et().mark(function s(d) {
          var b, p, g;
          return et().wrap(function(y) {
            for (; ; ) switch (y.prev = y.next) {
              case 0:
                if (b = r.props.multiple, d.preventDefault(), d.type !== "dragover") {
                  y.next = 4;
                  break;
                }
                return y.abrupt("return");
              case 4:
                if (!r.props.directory) {
                  y.next = 11;
                  break;
                }
                return y.next = 7, Lf(Array.prototype.slice.call(d.dataTransfer.items), function(l) {
                  return Kr(l, r.props.accept);
                });
              case 7:
                p = y.sent, r.uploadFiles(p), y.next = 14;
                break;
              case 11:
                g = Dt(d.dataTransfer.files).filter(function(l) {
                  return Kr(l, r.props.accept);
                }), b === false && (g = g.slice(0, 1)), r.uploadFiles(g);
              case 14:
              case "end":
                return y.stop();
            }
          }, s);
        }));
        return function(s) {
          return o.apply(this, arguments);
        };
      }()), Le(Ze(r), "uploadFiles", function(o) {
        var s = Dt(o), d = s.map(function(b) {
          return b.uid = Yr(), r.processFile(b, s);
        });
        Promise.all(d).then(function(b) {
          var p = r.props.onBatchStart;
          p == null ? void 0 : p(b.map(function(g) {
            var m = g.origin, y = g.parsedFile;
            return {
              file: m,
              parsedFile: y
            };
          })), b.filter(function(g) {
            return g.parsedFile !== null;
          }).forEach(function(g) {
            r.post(g);
          });
        });
      }), Le(Ze(r), "processFile", function() {
        var o = Zt(et().mark(function s(d, b) {
          var p, g, m, y, l, u, h, f, v;
          return et().wrap(function(x) {
            for (; ; ) switch (x.prev = x.next) {
              case 0:
                if (p = r.props.beforeUpload, g = d, !p) {
                  x.next = 14;
                  break;
                }
                return x.prev = 3, x.next = 6, p(d, b);
              case 6:
                g = x.sent, x.next = 12;
                break;
              case 9:
                x.prev = 9, x.t0 = x.catch(3), g = false;
              case 12:
                if (g !== false) {
                  x.next = 14;
                  break;
                }
                return x.abrupt("return", {
                  origin: d,
                  parsedFile: null,
                  action: null,
                  data: null
                });
              case 14:
                if (m = r.props.action, typeof m != "function") {
                  x.next = 21;
                  break;
                }
                return x.next = 18, m(d);
              case 18:
                y = x.sent, x.next = 22;
                break;
              case 21:
                y = m;
              case 22:
                if (l = r.props.data, typeof l != "function") {
                  x.next = 29;
                  break;
                }
                return x.next = 26, l(d);
              case 26:
                u = x.sent, x.next = 30;
                break;
              case 29:
                u = l;
              case 30:
                return h = (Gt(g) === "object" || typeof g == "string") && g ? g : d, h instanceof File ? f = h : f = new File([
                  h
                ], d.name, {
                  type: d.type
                }), v = f, v.uid = d.uid, x.abrupt("return", {
                  origin: d,
                  data: u,
                  parsedFile: v,
                  action: y
                });
              case 35:
              case "end":
                return x.stop();
            }
          }, s, null, [
            [
              3,
              9
            ]
          ]);
        }));
        return function(s, d) {
          return o.apply(this, arguments);
        };
      }()), Le(Ze(r), "saveFileInput", function(o) {
        r.fileInput = o;
      }), r;
    }
    return ru(n, [
      {
        key: "componentDidMount",
        value: function() {
          this._isMounted = true;
        }
      },
      {
        key: "componentWillUnmount",
        value: function() {
          this._isMounted = false, this.abort();
        }
      },
      {
        key: "post",
        value: function(a) {
          var i = this, c = a.data, o = a.origin, s = a.action, d = a.parsedFile;
          if (this._isMounted) {
            var b = this.props, p = b.onStart, g = b.customRequest, m = b.name, y = b.headers, l = b.withCredentials, u = b.method, h = o.uid, f = g || Nf, v = {
              action: s,
              filename: m,
              data: c,
              file: d,
              headers: y,
              withCredentials: l,
              method: u || "post",
              onProgress: function(x) {
                var U = i.props.onProgress;
                U == null ? void 0 : U(x, d);
              },
              onSuccess: function(x, U) {
                var E = i.props.onSuccess;
                E == null ? void 0 : E(x, d, U), delete i.reqs[h];
              },
              onError: function(x, U) {
                var E = i.props.onError;
                E == null ? void 0 : E(x, U, d), delete i.reqs[h];
              }
            };
            p(o), this.reqs[h] = f(v);
          }
        }
      },
      {
        key: "reset",
        value: function() {
          this.setState({
            uid: Yr()
          });
        }
      },
      {
        key: "abort",
        value: function(a) {
          var i = this.reqs;
          if (a) {
            var c = a.uid ? a.uid : a;
            i[c] && i[c].abort && i[c].abort(), delete i[c];
          } else Object.keys(i).forEach(function(o) {
            i[o] && i[o].abort && i[o].abort(), delete i[o];
          });
        }
      },
      {
        key: "render",
        value: function() {
          var a = this.props, i = a.component, c = a.prefixCls, o = a.className, s = a.classNames, d = s === void 0 ? {} : s, b = a.disabled, p = a.id, g = a.name, m = a.style, y = a.styles, l = y === void 0 ? {} : y, u = a.multiple, h = a.accept, f = a.capture, v = a.children, w = a.directory, x = a.openFileDialogOnClick, U = a.onMouseEnter, E = a.onMouseLeave, F = a.hasControlInside, C = Ks(a, Pf), R = Ie(Le(Le(Le({}, c, true), "".concat(c, "-disabled"), b), o, o)), z = w ? {
            directory: "directory",
            webkitdirectory: "webkitdirectory"
          } : {}, T = b ? {} : {
            onClick: x ? this.onClick : function() {
            },
            onKeyDown: x ? this.onKeyDown : function() {
            },
            onMouseEnter: U,
            onMouseLeave: E,
            onDrop: this.onFileDrop,
            onDragOver: this.onFileDrop,
            tabIndex: F ? void 0 : "0"
          };
          return la.createElement(i, ht({}, T, {
            className: R,
            role: F ? void 0 : "button",
            style: m
          }), la.createElement("input", ht({}, Cl(C, {
            aria: true,
            data: true
          }), {
            id: p,
            name: g,
            disabled: b,
            type: "file",
            ref: this.saveFileInput,
            onClick: function(_) {
              return _.stopPropagation();
            },
            key: this.state.uid,
            style: ua({
              display: "none"
            }, l.input),
            className: d.input,
            accept: h
          }, z, {
            multiple: u,
            onChange: this.onChange
          }, f != null ? {
            capture: f
          } : {})), v);
        }
      }
    ]), n;
  }(oe.Component);
  function Qr() {
  }
  var ha = function(e) {
    eu(n, e);
    var t = tu(n);
    function n() {
      var r;
      nu(this, n);
      for (var a = arguments.length, i = new Array(a), c = 0; c < a; c++) i[c] = arguments[c];
      return r = t.call.apply(t, [
        this
      ].concat(i)), Le(Ze(r), "uploader", void 0), Le(Ze(r), "saveUploader", function(o) {
        r.uploader = o;
      }), r;
    }
    return ru(n, [
      {
        key: "abort",
        value: function(a) {
          this.uploader.abort(a);
        }
      },
      {
        key: "render",
        value: function() {
          return la.createElement(jf, ht({}, this.props, {
            ref: this.saveUploader
          }));
        }
      }
    ]), n;
  }(oe.Component);
  Le(ha, "defaultProps", {
    component: "span",
    prefixCls: "rc-upload",
    data: {},
    headers: {},
    name: "file",
    multipart: false,
    onStart: Qr,
    onError: Qr,
    onSuccess: Qr,
    multiple: false,
    beforeUpload: null,
    customRequest: null,
    withCredentials: false,
    openFileDialogOnClick: true,
    hasControlInside: false
  });
  const $f = (e) => {
    const { componentCls: t, iconCls: n } = e;
    return {
      [`${t}-wrapper`]: {
        [`${t}-drag`]: {
          position: "relative",
          width: "100%",
          height: "100%",
          textAlign: "center",
          background: e.colorFillAlter,
          border: `${Xe(e.lineWidth)} dashed ${e.colorBorder}`,
          borderRadius: e.borderRadiusLG,
          cursor: "pointer",
          transition: `border-color ${e.motionDurationSlow}`,
          [t]: {
            padding: e.padding
          },
          [`${t}-btn`]: {
            display: "table",
            width: "100%",
            height: "100%",
            outline: "none",
            borderRadius: e.borderRadiusLG,
            "&:focus-visible": {
              outline: `${Xe(e.lineWidthFocus)} solid ${e.colorPrimaryBorder}`
            }
          },
          [`${t}-drag-container`]: {
            display: "table-cell",
            verticalAlign: "middle"
          },
          [`
          &:not(${t}-disabled):hover,
          &-hover:not(${t}-disabled)
        `]: {
            borderColor: e.colorPrimaryHover
          },
          [`p${t}-drag-icon`]: {
            marginBottom: e.margin,
            [n]: {
              color: e.colorPrimary,
              fontSize: e.uploadThumbnailSize
            }
          },
          [`p${t}-text`]: {
            margin: `0 0 ${Xe(e.marginXXS)}`,
            color: e.colorTextHeading,
            fontSize: e.fontSizeLG
          },
          [`p${t}-hint`]: {
            color: e.colorTextDescription,
            fontSize: e.fontSize
          },
          [`&${t}-disabled`]: {
            [`p${t}-drag-icon ${n},
            p${t}-text,
            p${t}-hint
          `]: {
              color: e.colorTextDisabled
            }
          }
        }
      }
    };
  }, zf = (e) => {
    const { componentCls: t, iconCls: n, fontSize: r, lineHeight: a, calc: i } = e, c = `${t}-list-item`, o = `${c}-actions`, s = `${c}-action`;
    return {
      [`${t}-wrapper`]: {
        [`${t}-list`]: Object.assign(Object.assign({}, iu()), {
          lineHeight: e.lineHeight,
          [c]: {
            position: "relative",
            height: i(e.lineHeight).mul(r).equal(),
            marginTop: e.marginXS,
            fontSize: r,
            display: "flex",
            alignItems: "center",
            transition: `background-color ${e.motionDurationSlow}`,
            borderRadius: e.borderRadiusSM,
            "&:hover": {
              backgroundColor: e.controlItemBgHover
            },
            [`${c}-name`]: Object.assign(Object.assign({}, au), {
              padding: `0 ${Xe(e.paddingXS)}`,
              lineHeight: a,
              flex: "auto",
              transition: `all ${e.motionDurationSlow}`
            }),
            [o]: {
              whiteSpace: "nowrap",
              [s]: {
                opacity: 0
              },
              [n]: {
                color: e.actionsColor,
                transition: `all ${e.motionDurationSlow}`
              },
              [`
              ${s}:focus-visible,
              &.picture ${s}
            `]: {
                opacity: 1
              }
            },
            [`${t}-icon ${n}`]: {
              color: e.colorIcon,
              fontSize: r
            },
            [`${c}-progress`]: {
              position: "absolute",
              bottom: e.calc(e.uploadProgressOffset).mul(-1).equal(),
              width: "100%",
              paddingInlineStart: i(r).add(e.paddingXS).equal(),
              fontSize: r,
              lineHeight: 0,
              pointerEvents: "none",
              "> div": {
                margin: 0
              }
            }
          },
          [`${c}:hover ${s}`]: {
            opacity: 1
          },
          [`${c}-error`]: {
            color: e.colorError,
            [`${c}-name, ${t}-icon ${n}`]: {
              color: e.colorError
            },
            [o]: {
              [`${n}, ${n}:hover`]: {
                color: e.colorError
              },
              [s]: {
                opacity: 1
              }
            }
          },
          [`${t}-list-item-container`]: {
            transition: `opacity ${e.motionDurationSlow}, height ${e.motionDurationSlow}`,
            "&::before": {
              display: "table",
              width: 0,
              height: 0,
              content: '""'
            }
          }
        })
      }
    };
  }, Xf = (e) => {
    const { componentCls: t } = e, n = new fa("uploadAnimateInlineIn", {
      from: {
        width: 0,
        height: 0,
        padding: 0,
        opacity: 0,
        margin: e.calc(e.marginXS).div(-2).equal()
      }
    }), r = new fa("uploadAnimateInlineOut", {
      to: {
        width: 0,
        height: 0,
        padding: 0,
        opacity: 0,
        margin: e.calc(e.marginXS).div(-2).equal()
      }
    }), a = `${t}-animate-inline`;
    return [
      {
        [`${t}-wrapper`]: {
          [`${a}-appear, ${a}-enter, ${a}-leave`]: {
            animationDuration: e.motionDurationSlow,
            animationTimingFunction: e.motionEaseInOutCirc,
            animationFillMode: "forwards"
          },
          [`${a}-appear, ${a}-enter`]: {
            animationName: n
          },
          [`${a}-leave`]: {
            animationName: r
          }
        }
      },
      {
        [`${t}-wrapper`]: ql(e)
      },
      n,
      r
    ];
  }, Vf = (e) => {
    const { componentCls: t, iconCls: n, uploadThumbnailSize: r, uploadProgressOffset: a, calc: i } = e, c = `${t}-list`, o = `${c}-item`;
    return {
      [`${t}-wrapper`]: {
        [`
        ${c}${c}-picture,
        ${c}${c}-picture-card,
        ${c}${c}-picture-circle
      `]: {
          [o]: {
            position: "relative",
            height: i(r).add(i(e.lineWidth).mul(2)).add(i(e.paddingXS).mul(2)).equal(),
            padding: e.paddingXS,
            border: `${Xe(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
            borderRadius: e.borderRadiusLG,
            "&:hover": {
              background: "transparent"
            },
            [`${o}-thumbnail`]: Object.assign(Object.assign({}, au), {
              width: r,
              height: r,
              lineHeight: Xe(i(r).add(e.paddingSM).equal()),
              textAlign: "center",
              flex: "none",
              [n]: {
                fontSize: e.fontSizeHeading2,
                color: e.colorPrimary
              },
              img: {
                display: "block",
                width: "100%",
                height: "100%",
                overflow: "hidden"
              }
            }),
            [`${o}-progress`]: {
              bottom: a,
              width: `calc(100% - ${Xe(i(e.paddingSM).mul(2).equal())})`,
              marginTop: 0,
              paddingInlineStart: i(r).add(e.paddingXS).equal()
            }
          },
          [`${o}-error`]: {
            borderColor: e.colorError,
            [`${o}-thumbnail ${n}`]: {
              [`svg path[fill='${po[0]}']`]: {
                fill: e.colorErrorBg
              },
              [`svg path[fill='${po.primary}']`]: {
                fill: e.colorError
              }
            }
          },
          [`${o}-uploading`]: {
            borderStyle: "dashed",
            [`${o}-name`]: {
              marginBottom: a
            }
          }
        },
        [`${c}${c}-picture-circle ${o}`]: {
          [`&, &::before, ${o}-thumbnail`]: {
            borderRadius: "50%"
          }
        }
      }
    };
  }, Hf = (e) => {
    const { componentCls: t, iconCls: n, fontSizeLG: r, colorTextLightSolid: a, calc: i } = e, c = `${t}-list`, o = `${c}-item`, s = e.uploadPicCardSize;
    return {
      [`
      ${t}-wrapper${t}-picture-card-wrapper,
      ${t}-wrapper${t}-picture-circle-wrapper
    `]: Object.assign(Object.assign({}, iu()), {
        display: "block",
        [`${t}${t}-select`]: {
          width: s,
          height: s,
          textAlign: "center",
          verticalAlign: "top",
          backgroundColor: e.colorFillAlter,
          border: `${Xe(e.lineWidth)} dashed ${e.colorBorder}`,
          borderRadius: e.borderRadiusLG,
          cursor: "pointer",
          transition: `border-color ${e.motionDurationSlow}`,
          [`> ${t}`]: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            textAlign: "center"
          },
          [`&:not(${t}-disabled):hover`]: {
            borderColor: e.colorPrimary
          }
        },
        [`${c}${c}-picture-card, ${c}${c}-picture-circle`]: {
          display: "flex",
          flexWrap: "wrap",
          "@supports not (gap: 1px)": {
            "& > *": {
              marginBlockEnd: e.marginXS,
              marginInlineEnd: e.marginXS
            }
          },
          "@supports (gap: 1px)": {
            gap: e.marginXS
          },
          [`${c}-item-container`]: {
            display: "inline-block",
            width: s,
            height: s,
            verticalAlign: "top"
          },
          "&::after": {
            display: "none"
          },
          "&::before": {
            display: "none"
          },
          [o]: {
            height: "100%",
            margin: 0,
            "&::before": {
              position: "absolute",
              zIndex: 1,
              width: `calc(100% - ${Xe(i(e.paddingXS).mul(2).equal())})`,
              height: `calc(100% - ${Xe(i(e.paddingXS).mul(2).equal())})`,
              backgroundColor: e.colorBgMask,
              opacity: 0,
              transition: `all ${e.motionDurationSlow}`,
              content: '" "'
            }
          },
          [`${o}:hover`]: {
            [`&::before, ${o}-actions`]: {
              opacity: 1
            }
          },
          [`${o}-actions`]: {
            position: "absolute",
            insetInlineStart: 0,
            zIndex: 10,
            width: "100%",
            whiteSpace: "nowrap",
            textAlign: "center",
            opacity: 0,
            transition: `all ${e.motionDurationSlow}`,
            [`
            ${n}-eye,
            ${n}-download,
            ${n}-delete
          `]: {
              zIndex: 10,
              width: r,
              margin: `0 ${Xe(e.marginXXS)}`,
              fontSize: r,
              cursor: "pointer",
              transition: `all ${e.motionDurationSlow}`,
              color: a,
              "&:hover": {
                color: a
              },
              svg: {
                verticalAlign: "baseline"
              }
            }
          },
          [`${o}-thumbnail, ${o}-thumbnail img`]: {
            position: "static",
            display: "block",
            width: "100%",
            height: "100%",
            objectFit: "contain"
          },
          [`${o}-name`]: {
            display: "none",
            textAlign: "center"
          },
          [`${o}-file + ${o}-name`]: {
            position: "absolute",
            bottom: e.margin,
            display: "block",
            width: `calc(100% - ${Xe(i(e.paddingXS).mul(2).equal())})`
          },
          [`${o}-uploading`]: {
            [`&${o}`]: {
              backgroundColor: e.colorFillAlter
            },
            [`&::before, ${n}-eye, ${n}-download, ${n}-delete`]: {
              display: "none"
            }
          },
          [`${o}-progress`]: {
            bottom: e.marginXL,
            width: `calc(100% - ${Xe(i(e.paddingXS).mul(2).equal())})`,
            paddingInlineStart: 0
          }
        }
      }),
      [`${t}-wrapper${t}-picture-circle-wrapper`]: {
        [`${t}${t}-select`]: {
          borderRadius: "50%"
        }
      }
    };
  }, Gf = (e) => {
    const { componentCls: t } = e;
    return {
      [`${t}-rtl`]: {
        direction: "rtl"
      }
    };
  }, Zf = (e) => {
    const { componentCls: t, colorTextDisabled: n } = e;
    return {
      [`${t}-wrapper`]: Object.assign(Object.assign({}, Js(e)), {
        [t]: {
          outline: 0,
          "input[type='file']": {
            cursor: "pointer"
          }
        },
        [`${t}-select`]: {
          display: "inline-block"
        },
        [`${t}-hidden`]: {
          display: "none"
        },
        [`${t}-disabled`]: {
          color: n,
          cursor: "not-allowed"
        }
      })
    };
  }, Kf = (e) => ({
    actionsColor: e.colorIcon
  }), Yf = Ys("Upload", (e) => {
    const { fontSizeHeading3: t, fontHeight: n, lineWidth: r, controlHeightLG: a, calc: i } = e, c = Qs(e, {
      uploadThumbnailSize: i(t).mul(2).equal(),
      uploadProgressOffset: i(i(n).div(2)).add(r).equal(),
      uploadPicCardSize: i(a).mul(2.55).equal()
    });
    return [
      Zf(c),
      $f(c),
      Vf(c),
      Hf(c),
      zf(c),
      Xf(c),
      Gf(c),
      Al(c)
    ];
  }, Kf);
  function kn(e) {
    return Object.assign(Object.assign({}, e), {
      lastModified: e.lastModified,
      lastModifiedDate: e.lastModifiedDate,
      name: e.name,
      size: e.size,
      type: e.type,
      uid: e.uid,
      percent: 0,
      originFileObj: e
    });
  }
  function Bn(e, t) {
    const n = Dt(t), r = n.findIndex((a) => {
      let { uid: i } = a;
      return i === e.uid;
    });
    return r === -1 ? n.push(e) : n[r] = e, n;
  }
  function Jr(e, t) {
    const n = e.uid !== void 0 ? "uid" : "name";
    return t.filter((r) => r[n] === e[n])[0];
  }
  function Qf(e, t) {
    const n = e.uid !== void 0 ? "uid" : "name", r = t.filter((a) => a[n] !== e[n]);
    return r.length === t.length ? null : r;
  }
  const Jf = function() {
    const t = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "").split("/"), r = t[t.length - 1].split(/#|\?/)[0];
    return (/\.[^./\\]*$/.exec(r) || [
      ""
    ])[0];
  }, hu = (e) => e.indexOf("image/") === 0, eh = (e) => {
    if (e.type && !e.thumbUrl) return hu(e.type);
    const t = e.thumbUrl || e.url || "", n = Jf(t);
    return /^data:image\//.test(t) || /(webp|svg|png|gif|jpg|jpeg|jfif|bmp|dpg|ico|heic|heif)$/i.test(n) ? true : !(/^data:/.test(t) || n);
  }, bt = 200;
  function th(e) {
    return new Promise((t) => {
      if (!e.type || !hu(e.type)) {
        t("");
        return;
      }
      const n = document.createElement("canvas");
      n.width = bt, n.height = bt, n.style.cssText = `position: fixed; left: 0; top: 0; width: ${bt}px; height: ${bt}px; z-index: 9999; display: none;`, document.body.appendChild(n);
      const r = n.getContext("2d"), a = new Image();
      if (a.onload = () => {
        const { width: i, height: c } = a;
        let o = bt, s = bt, d = 0, b = 0;
        i > c ? (s = c * (bt / i), b = -(s - o) / 2) : (o = i * (bt / c), d = -(o - s) / 2), r.drawImage(a, d, b, o, s);
        const p = n.toDataURL();
        document.body.removeChild(n), window.URL.revokeObjectURL(a.src), t(p);
      }, a.crossOrigin = "anonymous", e.type.startsWith("image/svg+xml")) {
        const i = new FileReader();
        i.onload = () => {
          i.result && typeof i.result == "string" && (a.src = i.result);
        }, i.readAsDataURL(e);
      } else if (e.type.startsWith("image/gif")) {
        const i = new FileReader();
        i.onload = () => {
          i.result && t(i.result);
        }, i.readAsDataURL(e);
      } else a.src = window.URL.createObjectURL(e);
    });
  }
  const nh = oe.forwardRef((e, t) => {
    let { prefixCls: n, className: r, style: a, locale: i, listType: c, file: o, items: s, progress: d, iconRender: b, actionIconRender: p, itemRender: g, isImgUrl: m, showPreviewIcon: y, showRemoveIcon: l, showDownloadIcon: u, previewIcon: h, removeIcon: f, downloadIcon: v, extra: w, onPreview: x, onDownload: U, onClose: E } = e;
    var F, C;
    const { status: R } = o, [z, T] = oe.useState(R);
    oe.useEffect(() => {
      R !== "removed" && T(R);
    }, [
      R
    ]);
    const [B, _] = oe.useState(false);
    oe.useEffect(() => {
      const we = setTimeout(() => {
        _(true);
      }, 300);
      return () => {
        clearTimeout(we);
      };
    }, []);
    const P = b(o);
    let k = oe.createElement("div", {
      className: `${n}-icon`
    }, P);
    if (c === "picture" || c === "picture-card" || c === "picture-circle") if (z === "uploading" || !o.thumbUrl && !o.url) {
      const we = Ie(`${n}-list-item-thumbnail`, {
        [`${n}-list-item-file`]: z !== "uploading"
      });
      k = oe.createElement("div", {
        className: we
      }, P);
    } else {
      const we = (m == null ? void 0 : m(o)) ? oe.createElement("img", {
        src: o.thumbUrl || o.url,
        alt: o.name,
        className: `${n}-list-item-image`,
        crossOrigin: o.crossOrigin
      }) : P, D = Ie(`${n}-list-item-thumbnail`, {
        [`${n}-list-item-file`]: m && !m(o)
      });
      k = oe.createElement("a", {
        className: D,
        onClick: (G) => x(o, G),
        href: o.url || o.thumbUrl,
        target: "_blank",
        rel: "noopener noreferrer"
      }, we);
    }
    const I = Ie(`${n}-list-item`, `${n}-list-item-${z}`), H = typeof o.linkProps == "string" ? JSON.parse(o.linkProps) : o.linkProps, q = (typeof l == "function" ? l(o) : l) ? p((typeof f == "function" ? f(o) : f) || oe.createElement(wf, null), () => E(o), n, i.removeFile, true) : null, Y = (typeof u == "function" ? u(o) : u) && z === "done" ? p((typeof v == "function" ? v(o) : v) || oe.createElement(Ef, null), () => U(o), n, i.downloadFile) : null, N = c !== "picture-card" && c !== "picture-circle" && oe.createElement("span", {
      key: "download-delete",
      className: Ie(`${n}-list-item-actions`, {
        picture: c === "picture"
      })
    }, Y, q), $ = typeof w == "function" ? w(o) : w, M = $ && oe.createElement("span", {
      className: `${n}-list-item-extra`
    }, $), ee = Ie(`${n}-list-item-name`), te = o.url ? oe.createElement("a", Object.assign({
      key: "view",
      target: "_blank",
      rel: "noopener noreferrer",
      className: ee,
      title: o.name
    }, H, {
      href: o.url,
      onClick: (we) => x(o, we)
    }), o.name, M) : oe.createElement("span", {
      key: "view",
      className: ee,
      onClick: (we) => x(o, we),
      title: o.name
    }, o.name, M), se = (typeof y == "function" ? y(o) : y) && (o.url || o.thumbUrl) ? oe.createElement("a", {
      href: o.url || o.thumbUrl,
      target: "_blank",
      rel: "noopener noreferrer",
      onClick: (we) => x(o, we),
      title: i.previewFile
    }, typeof h == "function" ? h(o) : h || oe.createElement(Fl, null)) : null, le = (c === "picture-card" || c === "picture-circle") && z !== "uploading" && oe.createElement("span", {
      className: `${n}-list-item-actions`
    }, se, z === "done" && Y, q), { getPrefixCls: fe } = oe.useContext(Dr), ge = fe(), me = oe.createElement("div", {
      className: I
    }, k, te, N, le, B && oe.createElement(ou, {
      motionName: `${ge}-fade`,
      visible: z === "uploading",
      motionDeadline: 2e3
    }, (we) => {
      let { className: D } = we;
      const G = "percent" in o ? oe.createElement(Df, Object.assign({}, d, {
        type: "line",
        percent: o.percent,
        "aria-label": o["aria-label"],
        "aria-labelledby": o["aria-labelledby"]
      })) : null;
      return oe.createElement("div", {
        className: Ie(`${n}-list-item-progress`, D)
      }, G);
    })), De = o.response && typeof o.response == "string" ? o.response : ((F = o.error) === null || F === void 0 ? void 0 : F.statusText) || ((C = o.error) === null || C === void 0 ? void 0 : C.message) || i.uploadError, Ce = z === "error" ? oe.createElement(yn, {
      title: De,
      getPopupContainer: (we) => we.parentNode
    }, me) : me;
    return oe.createElement("div", {
      className: Ie(`${n}-list-item-container`, r),
      style: a,
      ref: t
    }, g ? g(Ce, o, s, {
      download: U.bind(null, o),
      preview: x.bind(null, o),
      remove: E.bind(null, o)
    }) : Ce);
  }), rh = (e, t) => {
    const { listType: n = "text", previewFile: r = th, onPreview: a, onDownload: i, onRemove: c, locale: o, iconRender: s, isImageUrl: d = eh, prefixCls: b, items: p = [], showPreviewIcon: g = true, showRemoveIcon: m = true, showDownloadIcon: y = false, removeIcon: l, previewIcon: u, downloadIcon: h, extra: f, progress: v = {
      size: [
        -1,
        2
      ],
      showInfo: false
    }, appendAction: w, appendActionVisible: x = true, itemRender: U, disabled: E } = e, F = Sl(), [C, R] = oe.useState(false), z = [
      "picture-card",
      "picture-circle"
    ].includes(n);
    oe.useEffect(() => {
      n.startsWith("picture") && (p || []).forEach((M) => {
        !(M.originFileObj instanceof File || M.originFileObj instanceof Blob) || M.thumbUrl !== void 0 || (M.thumbUrl = "", r == null ? void 0 : r(M.originFileObj).then((ee) => {
          M.thumbUrl = ee || "", F();
        }));
      });
    }, [
      n,
      p,
      r
    ]), oe.useEffect(() => {
      R(true);
    }, []);
    const T = (M, ee) => {
      if (a) return ee == null ? void 0 : ee.preventDefault(), a(M);
    }, B = (M) => {
      typeof i == "function" ? i(M) : M.url && window.open(M.url);
    }, _ = (M) => {
      c == null ? void 0 : c(M);
    }, P = (M) => {
      if (s) return s(M, n);
      const ee = M.status === "uploading";
      if (n.startsWith("picture")) {
        const te = n === "picture" ? oe.createElement(yo, null) : o.uploading, se = (d == null ? void 0 : d(M)) ? oe.createElement(If, null) : oe.createElement(Ff, null);
        return ee ? te : se;
      }
      return ee ? oe.createElement(yo, null) : oe.createElement(Bf, null);
    }, k = (M, ee, te, se, le) => {
      const fe = {
        type: "text",
        size: "small",
        title: se,
        onClick: (ge) => {
          var me, De;
          ee(), oe.isValidElement(M) && ((De = (me = M.props).onClick) === null || De === void 0 || De.call(me, ge));
        },
        className: `${te}-list-item-action`,
        disabled: le ? E : false
      };
      return oe.isValidElement(M) ? oe.createElement(bo, Object.assign({}, fe, {
        icon: mo(M, Object.assign(Object.assign({}, M.props), {
          onClick: () => {
          }
        }))
      })) : oe.createElement(bo, Object.assign({}, fe), oe.createElement("span", null, M));
    };
    oe.useImperativeHandle(t, () => ({
      handlePreview: T,
      handleDownload: B
    }));
    const { getPrefixCls: I } = oe.useContext(Dr), H = I("upload", b), q = I(), Y = Ie(`${H}-list`, `${H}-list-${n}`), N = oe.useMemo(() => su(kl(q), [
      "onAppearEnd",
      "onEnterEnd",
      "onLeaveEnd"
    ]), [
      q
    ]), $ = Object.assign(Object.assign({}, z ? {} : N), {
      motionDeadline: 2e3,
      motionName: `${H}-${z ? "animate-inline" : "animate"}`,
      keys: Dt(p.map((M) => ({
        key: M.uid,
        file: M
      }))),
      motionAppear: C
    });
    return oe.createElement("div", {
      className: Y
    }, oe.createElement(sl, Object.assign({}, $, {
      component: false
    }), (M) => {
      let { key: ee, file: te, className: se, style: le } = M;
      return oe.createElement(nh, {
        key: ee,
        locale: o,
        prefixCls: H,
        className: se,
        style: le,
        file: te,
        items: p,
        progress: v,
        listType: n,
        isImgUrl: d,
        showPreviewIcon: g,
        showRemoveIcon: m,
        showDownloadIcon: y,
        removeIcon: l,
        previewIcon: u,
        downloadIcon: h,
        extra: f,
        iconRender: P,
        actionIconRender: k,
        itemRender: U,
        onPreview: T,
        onDownload: B,
        onClose: _
      });
    }), w && oe.createElement(ou, Object.assign({}, $, {
      visible: x,
      forceRender: true
    }), (M) => {
      let { className: ee, style: te } = M;
      return mo(w, (se) => ({
        className: Ie(se.className, ee),
        style: Object.assign(Object.assign(Object.assign({}, te), {
          pointerEvents: ee ? "none" : void 0
        }), se.style)
      }));
    }));
  }, ih = oe.forwardRef(rh);
  var ah = function(e, t, n, r) {
    function a(i) {
      return i instanceof n ? i : new n(function(c) {
        c(i);
      });
    }
    return new (n || (n = Promise))(function(i, c) {
      function o(b) {
        try {
          d(r.next(b));
        } catch (p) {
          c(p);
        }
      }
      function s(b) {
        try {
          d(r.throw(b));
        } catch (p) {
          c(p);
        }
      }
      function d(b) {
        b.done ? i(b.value) : a(b.value).then(o, s);
      }
      d((r = r.apply(e, [])).next());
    });
  };
  const mn = `__LIST_IGNORE_${Date.now()}__`, oh = (e, t) => {
    const { fileList: n, defaultFileList: r, onRemove: a, showUploadList: i = true, listType: c = "text", onPreview: o, onDownload: s, onChange: d, onDrop: b, previewFile: p, disabled: g, locale: m, iconRender: y, isImageUrl: l, progress: u, prefixCls: h, className: f, type: v = "select", children: w, style: x, itemRender: U, maxCount: E, data: F = {}, multiple: C = false, hasControlInside: R = true, action: z = "", accept: T = "", supportServerRender: B = true, rootClassName: _ } = e, P = oe.useContext(ul), k = g ?? P, [I, H] = Bl(r || [], {
      value: n,
      postState: (ue) => ue ?? []
    }), [q, Y] = oe.useState("drop"), N = oe.useRef(null), $ = oe.useRef(null);
    oe.useMemo(() => {
      const ue = Date.now();
      (n || []).forEach((be, ve) => {
        !be.uid && !Object.isFrozen(be) && (be.uid = `__AUTO__${ue}_${ve}__`);
      });
    }, [
      n
    ]);
    const M = (ue, be, ve) => {
      let xe = Dt(be), Ae = false;
      E === 1 ? xe = xe.slice(-1) : E && (Ae = xe.length > E, xe = xe.slice(0, E)), go.flushSync(() => {
        H(xe);
      });
      const We = {
        file: ue,
        fileList: xe
      };
      ve && (We.event = ve), (!Ae || ue.status === "removed" || xe.some((Ye) => Ye.uid === ue.uid)) && go.flushSync(() => {
        d == null ? void 0 : d(We);
      });
    }, ee = (ue, be) => ah(void 0, void 0, void 0, function* () {
      const { beforeUpload: ve, transformFile: xe } = e;
      let Ae = ue;
      if (ve) {
        const We = yield ve(ue, be);
        if (We === false) return false;
        if (delete ue[mn], We === mn) return Object.defineProperty(ue, mn, {
          value: true,
          configurable: true
        }), false;
        typeof We == "object" && We && (Ae = We);
      }
      return xe && (Ae = yield xe(Ae)), Ae;
    }), te = (ue) => {
      const be = ue.filter((Ae) => !Ae.file[mn]);
      if (!be.length) return;
      const ve = be.map((Ae) => kn(Ae.file));
      let xe = Dt(I);
      ve.forEach((Ae) => {
        xe = Bn(Ae, xe);
      }), ve.forEach((Ae, We) => {
        let Ye = Ae;
        if (be[We].parsedFile) Ae.status = "uploading";
        else {
          const { originFileObj: A } = Ae;
          let S;
          try {
            S = new File([
              A
            ], A.name, {
              type: A.type
            });
          } catch {
            S = new Blob([
              A
            ], {
              type: A.type
            }), S.name = A.name, S.lastModifiedDate = /* @__PURE__ */ new Date(), S.lastModified = (/* @__PURE__ */ new Date()).getTime();
          }
          S.uid = Ae.uid, Ye = S;
        }
        M(Ye, xe);
      });
    }, se = (ue, be, ve) => {
      try {
        typeof ue == "string" && (ue = JSON.parse(ue));
      } catch {
      }
      if (!Jr(be, I)) return;
      const xe = kn(be);
      xe.status = "done", xe.percent = 100, xe.response = ue, xe.xhr = ve;
      const Ae = Bn(xe, I);
      M(xe, Ae);
    }, le = (ue, be) => {
      if (!Jr(be, I)) return;
      const ve = kn(be);
      ve.status = "uploading", ve.percent = ue.percent;
      const xe = Bn(ve, I);
      M(ve, xe, ue);
    }, fe = (ue, be, ve) => {
      if (!Jr(ve, I)) return;
      const xe = kn(ve);
      xe.error = ue, xe.response = be, xe.status = "error";
      const Ae = Bn(xe, I);
      M(xe, Ae);
    }, ge = (ue) => {
      let be;
      Promise.resolve(typeof a == "function" ? a(ue) : a).then((ve) => {
        var xe;
        if (ve === false) return;
        const Ae = Qf(ue, I);
        Ae && (be = Object.assign(Object.assign({}, ue), {
          status: "removed"
        }), I == null ? void 0 : I.forEach((We) => {
          const Ye = be.uid !== void 0 ? "uid" : "name";
          We[Ye] === be[Ye] && !Object.isFrozen(We) && (We.status = "removed");
        }), (xe = N.current) === null || xe === void 0 || xe.abort(be), M(be, Ae));
      });
    }, me = (ue) => {
      Y(ue.type), ue.type === "drop" && (b == null ? void 0 : b(ue));
    };
    oe.useImperativeHandle(t, () => ({
      onBatchStart: te,
      onSuccess: se,
      onProgress: le,
      onError: fe,
      fileList: I,
      upload: N.current,
      nativeElement: $.current
    }));
    const { getPrefixCls: De, direction: Ce, upload: we } = oe.useContext(Dr), D = De("upload", h), G = Object.assign(Object.assign({
      onBatchStart: te,
      onError: fe,
      onProgress: le,
      onSuccess: se
    }, e), {
      data: F,
      multiple: C,
      action: z,
      accept: T,
      supportServerRender: B,
      prefixCls: D,
      disabled: k,
      beforeUpload: ee,
      onChange: void 0,
      hasControlInside: R
    });
    delete G.className, delete G.style, (!w || k) && delete G.id;
    const Z = `${D}-wrapper`, [O, W, X] = Yf(D, Z), [ae] = dl("Upload", ll.Upload), { showRemoveIcon: ne, showPreviewIcon: K, showDownloadIcon: L, removeIcon: V, previewIcon: J, downloadIcon: ie, extra: he } = typeof i == "boolean" ? {} : i, ye = typeof ne > "u" ? !k : ne, Ue = (ue, be) => i ? oe.createElement(ih, {
      prefixCls: D,
      listType: c,
      items: I,
      previewFile: p,
      onPreview: o,
      onDownload: s,
      onRemove: ge,
      showRemoveIcon: ye,
      showPreviewIcon: K,
      showDownloadIcon: L,
      removeIcon: V,
      previewIcon: J,
      downloadIcon: ie,
      iconRender: y,
      extra: he,
      locale: Object.assign(Object.assign({}, ae), m),
      isImageUrl: l,
      progress: u,
      appendAction: ue,
      appendActionVisible: be,
      itemRender: U,
      disabled: k
    }) : ue, _e = Ie(Z, f, _, W, X, we == null ? void 0 : we.className, {
      [`${D}-rtl`]: Ce === "rtl",
      [`${D}-picture-card-wrapper`]: c === "picture-card",
      [`${D}-picture-circle-wrapper`]: c === "picture-circle"
    }), Q = Object.assign(Object.assign({}, we == null ? void 0 : we.style), x);
    if (v === "drag") {
      const ue = Ie(W, D, `${D}-drag`, {
        [`${D}-drag-uploading`]: I.some((be) => be.status === "uploading"),
        [`${D}-drag-hover`]: q === "dragover",
        [`${D}-disabled`]: k,
        [`${D}-rtl`]: Ce === "rtl"
      });
      return O(oe.createElement("span", {
        className: _e,
        ref: $
      }, oe.createElement("div", {
        className: ue,
        style: Q,
        onDrop: me,
        onDragOver: me,
        onDragLeave: me
      }, oe.createElement(ha, Object.assign({}, G, {
        ref: N,
        className: `${D}-btn`
      }), oe.createElement("div", {
        className: `${D}-drag-container`
      }, w))), Ue()));
    }
    const ce = Ie(D, `${D}-select`, {
      [`${D}-disabled`]: k,
      [`${D}-hidden`]: !w
    }), de = oe.createElement("div", {
      className: ce
    }, oe.createElement(ha, Object.assign({}, G, {
      ref: N
    })));
    return O(c === "picture-card" || c === "picture-circle" ? oe.createElement("span", {
      className: _e,
      ref: $
    }, Ue(de, !!w)) : oe.createElement("span", {
      className: _e,
      ref: $
    }, de, Ue()));
  }, pu = oe.forwardRef(oh);
  var ch = function(e, t) {
    var n = {};
    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
    return n;
  };
  const sh = oe.forwardRef((e, t) => {
    var { style: n, height: r, hasControlInside: a = false } = e, i = ch(e, [
      "style",
      "height",
      "hasControlInside"
    ]);
    return oe.createElement(pu, Object.assign({
      ref: t,
      hasControlInside: a
    }, i, {
      type: "drag",
      style: Object.assign(Object.assign({}, n), {
        height: r
      })
    }));
  }), Qt = pu;
  Qt.Dragger = sh;
  Qt.LIST_IGNORE = mn;
  const uh = uu("FileUp", [
    [
      "path",
      {
        d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
        key: "1rqfz7"
      }
    ],
    [
      "path",
      {
        d: "M14 2v4a2 2 0 0 0 2 2h4",
        key: "tnqrlb"
      }
    ],
    [
      "path",
      {
        d: "M12 12v6",
        key: "3ahymv"
      }
    ],
    [
      "path",
      {
        d: "m15 15-3-3-3 3",
        key: "15xj92"
      }
    ]
  ]);
  const gu = uu("Inbox", [
    [
      "polyline",
      {
        points: "22 12 16 12 14 15 10 15 8 12 2 12",
        key: "o97t9d"
      }
    ],
    [
      "path",
      {
        d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",
        key: "oot6mr"
      }
    ]
  ]), dh = (e) => new Promise((t, n) => {
    if (!e) {
      n(new Error("File does not exist"));
      return;
    }
    const r = new FileReader();
    r.readAsDataURL(e), r.onload = () => t(r.result), r.onerror = (a) => {
      console.error("Failed to convert file to Base64:", a), n(a);
    };
  }), lh = async (e) => await (await (await fetch(e)).blob()).arrayBuffer(), fh = () => "XXXXXXXX-XXXX-4XXX-YXXX-XXXXXXXXXXXX".replace(/[XY]/g, (e) => {
    const t = Math.random() * 16 | 0;
    return (e === "X" ? t : t & 3 | 8).toString(16);
  }), mu = async ({ file: e, mime: t }) => {
    let n = t || e.type, r = e.name;
    return {
      content: await dh(e.originFileObj),
      type: n,
      filename: r,
      source_id: fh()
    };
  };
  var bn = {
    exports: {}
  }, hh = bn.exports, Ao;
  function ph() {
    return Ao || (Ao = 1, function(e, t) {
      (function(n, r) {
        var a = {};
        n.PubSub ? (a = n.PubSub, console.warn("PubSub already loaded, using existing version")) : (n.PubSub = a, r(a)), e !== void 0 && e.exports && (t = e.exports = a), t.PubSub = a, e.exports = t = a;
      })(typeof window == "object" && window || hh || ft, function(n) {
        var r = {}, a = -1, i = "*";
        function c(l) {
          var u;
          for (u in l) if (Object.prototype.hasOwnProperty.call(l, u)) return true;
          return false;
        }
        function o(l) {
          return function() {
            throw l;
          };
        }
        function s(l, u, h) {
          try {
            l(u, h);
          } catch (f) {
            setTimeout(o(f), 0);
          }
        }
        function d(l, u, h) {
          l(u, h);
        }
        function b(l, u, h, f) {
          var v = r[u], w = f ? d : s, x;
          if (Object.prototype.hasOwnProperty.call(r, u)) for (x in v) Object.prototype.hasOwnProperty.call(v, x) && w(v[x], l, h);
        }
        function p(l, u, h) {
          return function() {
            var v = String(l), w = v.lastIndexOf(".");
            for (b(l, l, u, h); w !== -1; ) v = v.substr(0, w), w = v.lastIndexOf("."), b(l, v, u, h);
            b(l, i, u, h);
          };
        }
        function g(l) {
          var u = String(l), h = !!(Object.prototype.hasOwnProperty.call(r, u) && c(r[u]));
          return h;
        }
        function m(l) {
          for (var u = String(l), h = g(u) || g(i), f = u.lastIndexOf("."); !h && f !== -1; ) u = u.substr(0, f), f = u.lastIndexOf("."), h = g(u);
          return h;
        }
        function y(l, u, h, f) {
          l = typeof l == "symbol" ? l.toString() : l;
          var v = p(l, u, f), w = m(l);
          return w ? (h === true ? v() : setTimeout(v, 0), true) : false;
        }
        n.publish = function(l, u) {
          return y(l, u, false, n.immediateExceptions);
        }, n.publishSync = function(l, u) {
          return y(l, u, true, n.immediateExceptions);
        }, n.subscribe = function(l, u) {
          if (typeof u != "function") return false;
          l = typeof l == "symbol" ? l.toString() : l, Object.prototype.hasOwnProperty.call(r, l) || (r[l] = {});
          var h = "uid_" + String(++a);
          return r[l][h] = u, h;
        }, n.subscribeAll = function(l) {
          return n.subscribe(i, l);
        }, n.subscribeOnce = function(l, u) {
          var h = n.subscribe(l, function() {
            n.unsubscribe(h), u.apply(this, arguments);
          });
          return n;
        }, n.clearAllSubscriptions = function() {
          r = {};
        }, n.clearSubscriptions = function(u) {
          var h;
          for (h in r) Object.prototype.hasOwnProperty.call(r, h) && h.indexOf(u) === 0 && delete r[h];
        }, n.countSubscriptions = function(u) {
          var h, f, v = 0;
          for (h in r) if (Object.prototype.hasOwnProperty.call(r, h) && h.indexOf(u) === 0) {
            for (f in r[h]) v++;
            break;
          }
          return v;
        }, n.getSubscriptions = function(u) {
          var h, f = [];
          for (h in r) Object.prototype.hasOwnProperty.call(r, h) && h.indexOf(u) === 0 && f.push(h);
          return f;
        }, n.unsubscribe = function(l) {
          var u = function(F) {
            var C;
            for (C in r) if (Object.prototype.hasOwnProperty.call(r, C) && C.indexOf(F) === 0) return true;
            return false;
          }, h = typeof l == "string" && (Object.prototype.hasOwnProperty.call(r, l) || u(l)), f = !h && typeof l == "string", v = typeof l == "function", w = false, x, U, E;
          if (h) {
            n.clearSubscriptions(l);
            return;
          }
          for (x in r) if (Object.prototype.hasOwnProperty.call(r, x)) {
            if (U = r[x], f && U[l]) {
              delete U[l], w = l;
              break;
            }
            if (v) for (E in U) Object.prototype.hasOwnProperty.call(U, E) && U[E] === l && (delete U[E], w = true);
          }
          return w;
        };
      });
    }(bn, bn.exports)), bn.exports;
  }
  var gh = ph();
  const Da = fl(gh);
  class mh extends xr {
    constructor({ url: t, name: n }) {
      super();
      __publicField(this, "pdf");
      __publicField(this, "url");
      __publicField(this, "name");
      this.url = t, this.name = n;
    }
    async load() {
      const t = [], n = await Pl(this.url);
      for (let r = 1; r <= n.numPages; r += 1) {
        const i = await (await n.getPage(r)).getTextContent();
        if ((i == null ? void 0 : i.items.length) === 0) continue;
        const c = i == null ? void 0 : i.items.map((o) => o.str).join(`
`).replace(/\x00/g, "").trim();
        t.push({
          pageContent: c,
          metadata: {
            source: this.name,
            page: r,
            type: "pdf"
          }
        });
      }
      return t;
    }
  }
  var Fo = {}, ei = {}, ti = 34, an = 10, ni = 13;
  function bu(e) {
    return new Function("d", "return {" + e.map(function(t, n) {
      return JSON.stringify(t) + ": d[" + n + '] || ""';
    }).join(",") + "}");
  }
  function bh(e, t) {
    var n = bu(e);
    return function(r, a) {
      return t(n(r), a, e);
    };
  }
  function So(e) {
    var t = /* @__PURE__ */ Object.create(null), n = [];
    return e.forEach(function(r) {
      for (var a in r) a in t || n.push(t[a] = a);
    }), n;
  }
  function ze(e, t) {
    var n = e + "", r = n.length;
    return r < t ? new Array(t - r + 1).join(0) + n : n;
  }
  function yh(e) {
    return e < 0 ? "-" + ze(-e, 6) : e > 9999 ? "+" + ze(e, 6) : ze(e, 4);
  }
  function vh(e) {
    var t = e.getUTCHours(), n = e.getUTCMinutes(), r = e.getUTCSeconds(), a = e.getUTCMilliseconds();
    return isNaN(e) ? "Invalid Date" : yh(e.getUTCFullYear()) + "-" + ze(e.getUTCMonth() + 1, 2) + "-" + ze(e.getUTCDate(), 2) + (a ? "T" + ze(t, 2) + ":" + ze(n, 2) + ":" + ze(r, 2) + "." + ze(a, 3) + "Z" : r ? "T" + ze(t, 2) + ":" + ze(n, 2) + ":" + ze(r, 2) + "Z" : n || t ? "T" + ze(t, 2) + ":" + ze(n, 2) + "Z" : "");
  }
  function Dh(e) {
    var t = new RegExp('["' + e + `
\r]`), n = e.charCodeAt(0);
    function r(p, g) {
      var m, y, l = a(p, function(u, h) {
        if (m) return m(u, h - 1);
        y = u, m = g ? bh(u, g) : bu(u);
      });
      return l.columns = y || [], l;
    }
    function a(p, g) {
      var m = [], y = p.length, l = 0, u = 0, h, f = y <= 0, v = false;
      p.charCodeAt(y - 1) === an && --y, p.charCodeAt(y - 1) === ni && --y;
      function w() {
        if (f) return ei;
        if (v) return v = false, Fo;
        var U, E = l, F;
        if (p.charCodeAt(E) === ti) {
          for (; l++ < y && p.charCodeAt(l) !== ti || p.charCodeAt(++l) === ti; ) ;
          return (U = l) >= y ? f = true : (F = p.charCodeAt(l++)) === an ? v = true : F === ni && (v = true, p.charCodeAt(l) === an && ++l), p.slice(E + 1, U - 1).replace(/""/g, '"');
        }
        for (; l < y; ) {
          if ((F = p.charCodeAt(U = l++)) === an) v = true;
          else if (F === ni) v = true, p.charCodeAt(l) === an && ++l;
          else if (F !== n) continue;
          return p.slice(E, U);
        }
        return f = true, p.slice(E, y);
      }
      for (; (h = w()) !== ei; ) {
        for (var x = []; h !== Fo && h !== ei; ) x.push(h), h = w();
        g && (x = g(x, u++)) == null || m.push(x);
      }
      return m;
    }
    function i(p, g) {
      return p.map(function(m) {
        return g.map(function(y) {
          return b(m[y]);
        }).join(e);
      });
    }
    function c(p, g) {
      return g == null && (g = So(p)), [
        g.map(b).join(e)
      ].concat(i(p, g)).join(`
`);
    }
    function o(p, g) {
      return g == null && (g = So(p)), i(p, g).join(`
`);
    }
    function s(p) {
      return p.map(d).join(`
`);
    }
    function d(p) {
      return p.map(b).join(e);
    }
    function b(p) {
      return p == null ? "" : p instanceof Date ? vh(p) : t.test(p += "") ? '"' + p.replace(/"/g, '""') + '"' : p;
    }
    return {
      parse: r,
      parseRows: a,
      format: c,
      formatBody: o,
      formatRows: s,
      formatRow: d,
      formatValue: b
    };
  }
  class xh extends xr {
    constructor({ url: t, name: n }) {
      super();
      __publicField(this, "pdf");
      __publicField(this, "url");
      __publicField(this, "name");
      __publicField(this, "options");
      this.url = t, this.name = n, this.options = {};
    }
    async parse(t) {
      const { column: n, separator: r = "," } = this.options;
      let i = Dh(r).parseRows(t.trim());
      if (n !== void 0) {
        if (!i[0].includes(n)) throw new Error(`ColumnNotFoundError: Column ${n} not found`);
        const o = i[0].indexOf(n);
        return i.map((s) => s[o]);
      }
      const c = i[0];
      return i = i.slice(1), i.map((o) => o.map((s, d) => `${c[d]}: ${s}`).join(`
`));
    }
    async load() {
      const t = await fetch(this.url);
      if (!t.ok) throw new Error(`Failed to fetch ${this.url}`);
      const n = await t.text(), r = await this.parse(n);
      let a = {
        source: this.name,
        type: "csv"
      };
      return r.forEach((i, c) => {
        if (typeof i != "string") throw new Error(`Expected string, at position ${c} got ${typeof i}`);
      }), r.map((i, c) => new va({
        pageContent: i,
        metadata: r.length === 1 ? a : {
          ...a,
          line: c + 1
        }
      }));
    }
  }
  class _h extends xr {
    constructor({ url: t, name: n }) {
      super();
      __publicField(this, "pdf");
      __publicField(this, "url");
      __publicField(this, "name");
      this.url = t, this.name = n;
    }
    async parse(t) {
      return [
        t
      ];
    }
    async load() {
      const t = await fetch(this.url);
      if (!t.ok) throw new Error(`Failed to fetch ${this.url}`);
      const n = await t.text(), r = await this.parse(n);
      let a = {
        source: this.name,
        type: "txt"
      };
      return r.forEach((i, c) => {
        if (typeof i != "string") throw new Error(`Expected string, at position ${c} got ${typeof i}`);
      }), r.map((i, c) => new va({
        pageContent: i,
        metadata: r.length === 1 ? a : {
          ...a,
          line: c + 1
        }
      }));
    }
  }
  var Qe = {}, xa = "1.13.7", ko = typeof self == "object" && self.self === self && self || typeof global == "object" && global.global === global && global || Function("return this")() || {}, wr = Array.prototype, _a = Object.prototype, Bo = typeof Symbol < "u" ? Symbol.prototype : null, wh = wr.push, En = wr.slice, vn = _a.toString, Uh = _a.hasOwnProperty, yu = typeof ArrayBuffer < "u", Th = typeof DataView < "u", Eh = Array.isArray, Wo = Object.keys, Ro = Object.create, Io = yu && ArrayBuffer.isView, Ch = isNaN, Ah = isFinite, vu = !{
    toString: null
  }.propertyIsEnumerable("toString"), Oo = [
    "valueOf",
    "isPrototypeOf",
    "toString",
    "propertyIsEnumerable",
    "hasOwnProperty",
    "toLocaleString"
  ], Fh = Math.pow(2, 53) - 1;
  function je(e, t) {
    return t = t == null ? e.length - 1 : +t, function() {
      for (var n = Math.max(arguments.length - t, 0), r = Array(n), a = 0; a < n; a++) r[a] = arguments[a + t];
      switch (t) {
        case 0:
          return e.call(this, r);
        case 1:
          return e.call(this, arguments[0], r);
        case 2:
          return e.call(this, arguments[0], arguments[1], r);
      }
      var i = Array(t + 1);
      for (a = 0; a < t; a++) i[a] = arguments[a];
      return i[t] = r, e.apply(this, i);
    };
  }
  function Tt(e) {
    var t = typeof e;
    return t === "function" || t === "object" && !!e;
  }
  function Du(e) {
    return e === null;
  }
  function wa(e) {
    return e === void 0;
  }
  function Ua(e) {
    return e === true || e === false || vn.call(e) === "[object Boolean]";
  }
  function xu(e) {
    return !!(e && e.nodeType === 1);
  }
  function Pe(e) {
    var t = "[object " + e + "]";
    return function(n) {
      return vn.call(n) === t;
    };
  }
  const Ur = Pe("String"), Ta = Pe("Number"), _u = Pe("Date"), wu = Pe("RegExp"), Uu = Pe("Error"), Ea = Pe("Symbol"), Ca = Pe("ArrayBuffer");
  var Tu = Pe("Function"), Sh = ko.document && ko.document.childNodes;
  typeof /./ != "function" && typeof Int8Array != "object" && typeof Sh != "function" && (Tu = function(e) {
    return typeof e == "function" || false;
  });
  const qe = Tu, Eu = Pe("Object");
  var Cu = Th && (!/\[native code\]/.test(String(DataView)) || Eu(new DataView(new ArrayBuffer(8)))), Aa = typeof Map < "u" && Eu(/* @__PURE__ */ new Map()), kh = Pe("DataView");
  function Bh(e) {
    return e != null && qe(e.getInt8) && Ca(e.buffer);
  }
  const Dn = Cu ? Bh : kh, Et = Eh || Pe("Array");
  function Ct(e, t) {
    return e != null && Uh.call(e, t);
  }
  var pa = Pe("Arguments");
  (function() {
    pa(arguments) || (pa = function(e) {
      return Ct(e, "callee");
    });
  })();
  const Tr = pa;
  function Au(e) {
    return !Ea(e) && Ah(e) && !isNaN(parseFloat(e));
  }
  function Fa(e) {
    return Ta(e) && Ch(e);
  }
  function Sa(e) {
    return function() {
      return e;
    };
  }
  function Fu(e) {
    return function(t) {
      var n = e(t);
      return typeof n == "number" && n >= 0 && n <= Fh;
    };
  }
  function Su(e) {
    return function(t) {
      return t == null ? void 0 : t[e];
    };
  }
  const gr = Su("byteLength"), Wh = Fu(gr);
  var Rh = /\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/;
  function Ih(e) {
    return Io ? Io(e) && !Dn(e) : Wh(e) && Rh.test(vn.call(e));
  }
  const ka = yu ? Ih : Sa(false), Ve = Su("length");
  function Oh(e) {
    for (var t = {}, n = e.length, r = 0; r < n; ++r) t[e[r]] = true;
    return {
      contains: function(a) {
        return t[a] === true;
      },
      push: function(a) {
        return t[a] = true, e.push(a);
      }
    };
  }
  function ku(e, t) {
    t = Oh(t);
    var n = Oo.length, r = e.constructor, a = qe(r) && r.prototype || _a, i = "constructor";
    for (Ct(e, i) && !t.contains(i) && t.push(i); n--; ) i = Oo[n], i in e && e[i] !== a[i] && !t.contains(i) && t.push(i);
  }
  function Oe(e) {
    if (!Tt(e)) return [];
    if (Wo) return Wo(e);
    var t = [];
    for (var n in e) Ct(e, n) && t.push(n);
    return vu && ku(e, t), t;
  }
  function Bu(e) {
    if (e == null) return true;
    var t = Ve(e);
    return typeof t == "number" && (Et(e) || Ur(e) || Tr(e)) ? t === 0 : Ve(Oe(e)) === 0;
  }
  function Ba(e, t) {
    var n = Oe(t), r = n.length;
    if (e == null) return !r;
    for (var a = Object(e), i = 0; i < r; i++) {
      var c = n[i];
      if (t[c] !== a[c] || !(c in a)) return false;
    }
    return true;
  }
  function Se(e) {
    if (e instanceof Se) return e;
    if (!(this instanceof Se)) return new Se(e);
    this._wrapped = e;
  }
  Se.VERSION = xa;
  Se.prototype.value = function() {
    return this._wrapped;
  };
  Se.prototype.valueOf = Se.prototype.toJSON = Se.prototype.value;
  Se.prototype.toString = function() {
    return String(this._wrapped);
  };
  function No(e) {
    return new Uint8Array(e.buffer || e, e.byteOffset || 0, gr(e));
  }
  var Lo = "[object DataView]";
  function ga(e, t, n, r) {
    if (e === t) return e !== 0 || 1 / e === 1 / t;
    if (e == null || t == null) return false;
    if (e !== e) return t !== t;
    var a = typeof e;
    return a !== "function" && a !== "object" && typeof t != "object" ? false : Wu(e, t, n, r);
  }
  function Wu(e, t, n, r) {
    e instanceof Se && (e = e._wrapped), t instanceof Se && (t = t._wrapped);
    var a = vn.call(e);
    if (a !== vn.call(t)) return false;
    if (Cu && a == "[object Object]" && Dn(e)) {
      if (!Dn(t)) return false;
      a = Lo;
    }
    switch (a) {
      case "[object RegExp]":
      case "[object String]":
        return "" + e == "" + t;
      case "[object Number]":
        return +e != +e ? +t != +t : +e == 0 ? 1 / +e === 1 / t : +e == +t;
      case "[object Date]":
      case "[object Boolean]":
        return +e == +t;
      case "[object Symbol]":
        return Bo.valueOf.call(e) === Bo.valueOf.call(t);
      case "[object ArrayBuffer]":
      case Lo:
        return Wu(No(e), No(t), n, r);
    }
    var i = a === "[object Array]";
    if (!i && ka(e)) {
      var c = gr(e);
      if (c !== gr(t)) return false;
      if (e.buffer === t.buffer && e.byteOffset === t.byteOffset) return true;
      i = true;
    }
    if (!i) {
      if (typeof e != "object" || typeof t != "object") return false;
      var o = e.constructor, s = t.constructor;
      if (o !== s && !(qe(o) && o instanceof o && qe(s) && s instanceof s) && "constructor" in e && "constructor" in t) return false;
    }
    n = n || [], r = r || [];
    for (var d = n.length; d--; ) if (n[d] === e) return r[d] === t;
    if (n.push(e), r.push(t), i) {
      if (d = e.length, d !== t.length) return false;
      for (; d--; ) if (!ga(e[d], t[d], n, r)) return false;
    } else {
      var b = Oe(e), p;
      if (d = b.length, Oe(t).length !== d) return false;
      for (; d--; ) if (p = b[d], !(Ct(t, p) && ga(e[p], t[p], n, r))) return false;
    }
    return n.pop(), r.pop(), true;
  }
  function Ru(e, t) {
    return ga(e, t);
  }
  function tn(e) {
    if (!Tt(e)) return [];
    var t = [];
    for (var n in e) t.push(n);
    return vu && ku(e, t), t;
  }
  function Wa(e) {
    var t = Ve(e);
    return function(n) {
      if (n == null) return false;
      var r = tn(n);
      if (Ve(r)) return false;
      for (var a = 0; a < t; a++) if (!qe(n[e[a]])) return false;
      return e !== Nu || !qe(n[Ra]);
    };
  }
  var Ra = "forEach", Iu = "has", Ia = [
    "clear",
    "delete"
  ], Ou = [
    "get",
    Iu,
    "set"
  ], Nh = Ia.concat(Ra, Ou), Nu = Ia.concat(Ou), Lh = [
    "add"
  ].concat(Ia, Ra, Iu);
  const Lu = Aa ? Wa(Nh) : Pe("Map"), Mu = Aa ? Wa(Nu) : Pe("WeakMap"), qu = Aa ? Wa(Lh) : Pe("Set"), Pu = Pe("WeakSet");
  function qt(e) {
    for (var t = Oe(e), n = t.length, r = Array(n), a = 0; a < n; a++) r[a] = e[t[a]];
    return r;
  }
  function ju(e) {
    for (var t = Oe(e), n = t.length, r = Array(n), a = 0; a < n; a++) r[a] = [
      t[a],
      e[t[a]]
    ];
    return r;
  }
  function Oa(e) {
    for (var t = {}, n = Oe(e), r = 0, a = n.length; r < a; r++) t[e[n[r]]] = n[r];
    return t;
  }
  function xn(e) {
    var t = [];
    for (var n in e) qe(e[n]) && t.push(n);
    return t.sort();
  }
  function Na(e, t) {
    return function(n) {
      var r = arguments.length;
      if (t && (n = Object(n)), r < 2 || n == null) return n;
      for (var a = 1; a < r; a++) for (var i = arguments[a], c = e(i), o = c.length, s = 0; s < o; s++) {
        var d = c[s];
        (!t || n[d] === void 0) && (n[d] = i[d]);
      }
      return n;
    };
  }
  const La = Na(tn), Jt = Na(Oe), Ma = Na(tn, true);
  function Mh() {
    return function() {
    };
  }
  function $u(e) {
    if (!Tt(e)) return {};
    if (Ro) return Ro(e);
    var t = Mh();
    t.prototype = e;
    var n = new t();
    return t.prototype = null, n;
  }
  function zu(e, t) {
    var n = $u(e);
    return t && Jt(n, t), n;
  }
  function Xu(e) {
    return Tt(e) ? Et(e) ? e.slice() : La({}, e) : e;
  }
  function Vu(e, t) {
    return t(e), e;
  }
  function qa(e) {
    return Et(e) ? e : [
      e
    ];
  }
  Se.toPath = qa;
  function Cn(e) {
    return Se.toPath(e);
  }
  function Pa(e, t) {
    for (var n = t.length, r = 0; r < n; r++) {
      if (e == null) return;
      e = e[t[r]];
    }
    return n ? e : void 0;
  }
  function ja(e, t, n) {
    var r = Pa(e, Cn(t));
    return wa(r) ? n : r;
  }
  function Hu(e, t) {
    t = Cn(t);
    for (var n = t.length, r = 0; r < n; r++) {
      var a = t[r];
      if (!Ct(e, a)) return false;
      e = e[a];
    }
    return !!n;
  }
  function Er(e) {
    return e;
  }
  function Mt(e) {
    return e = Jt({}, e), function(t) {
      return Ba(t, e);
    };
  }
  function Cr(e) {
    return e = Cn(e), function(t) {
      return Pa(t, e);
    };
  }
  function An(e, t, n) {
    if (t === void 0) return e;
    switch (n ?? 3) {
      case 1:
        return function(r) {
          return e.call(t, r);
        };
      case 3:
        return function(r, a, i) {
          return e.call(t, r, a, i);
        };
      case 4:
        return function(r, a, i, c) {
          return e.call(t, r, a, i, c);
        };
    }
    return function() {
      return e.apply(t, arguments);
    };
  }
  function Gu(e, t, n) {
    return e == null ? Er : qe(e) ? An(e, t, n) : Tt(e) && !Et(e) ? Mt(e) : Cr(e);
  }
  function Ar(e, t) {
    return Gu(e, t, 1 / 0);
  }
  Se.iteratee = Ar;
  function He(e, t, n) {
    return Se.iteratee !== Ar ? Se.iteratee(e, t) : Gu(e, t, n);
  }
  function Zu(e, t, n) {
    t = He(t, n);
    for (var r = Oe(e), a = r.length, i = {}, c = 0; c < a; c++) {
      var o = r[c];
      i[o] = t(e[o], o, e);
    }
    return i;
  }
  function $a() {
  }
  function Ku(e) {
    return e == null ? $a : function(t) {
      return ja(e, t);
    };
  }
  function Yu(e, t, n) {
    var r = Array(Math.max(0, e));
    t = An(t, n, 1);
    for (var a = 0; a < e; a++) r[a] = t(a);
    return r;
  }
  function mr(e, t) {
    return t == null && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1));
  }
  const en = Date.now || function() {
    return (/* @__PURE__ */ new Date()).getTime();
  };
  function Qu(e) {
    var t = function(i) {
      return e[i];
    }, n = "(?:" + Oe(e).join("|") + ")", r = RegExp(n), a = RegExp(n, "g");
    return function(i) {
      return i = i == null ? "" : "" + i, r.test(i) ? i.replace(a, t) : i;
    };
  }
  const Ju = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#x27;",
    "`": "&#x60;"
  }, ed = Qu(Ju), qh = Oa(Ju), td = Qu(qh), nd = Se.templateSettings = {
    evaluate: /<%([\s\S]+?)%>/g,
    interpolate: /<%=([\s\S]+?)%>/g,
    escape: /<%-([\s\S]+?)%>/g
  };
  var ri = /(.)^/, Ph = {
    "'": "'",
    "\\": "\\",
    "\r": "r",
    "\n": "n",
    "\u2028": "u2028",
    "\u2029": "u2029"
  }, jh = /\\|'|\r|\n|\u2028|\u2029/g;
  function $h(e) {
    return "\\" + Ph[e];
  }
  var zh = /^\s*(\w|\$)+\s*$/;
  function rd(e, t, n) {
    !t && n && (t = n), t = Ma({}, t, Se.templateSettings);
    var r = RegExp([
      (t.escape || ri).source,
      (t.interpolate || ri).source,
      (t.evaluate || ri).source
    ].join("|") + "|$", "g"), a = 0, i = "__p+='";
    e.replace(r, function(d, b, p, g, m) {
      return i += e.slice(a, m).replace(jh, $h), a = m + d.length, b ? i += `'+
((__t=(` + b + `))==null?'':_.escape(__t))+
'` : p ? i += `'+
((__t=(` + p + `))==null?'':__t)+
'` : g && (i += `';
` + g + `
__p+='`), d;
    }), i += `';
`;
    var c = t.variable;
    if (c) {
      if (!zh.test(c)) throw new Error("variable is not a bare identifier: " + c);
    } else i = `with(obj||{}){
` + i + `}
`, c = "obj";
    i = `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` + i + `return __p;
`;
    var o;
    try {
      o = new Function(c, "_", i);
    } catch (d) {
      throw d.source = i, d;
    }
    var s = function(d) {
      return o.call(this, d, Se);
    };
    return s.source = "function(" + c + `){
` + i + "}", s;
  }
  function id(e, t, n) {
    t = Cn(t);
    var r = t.length;
    if (!r) return qe(n) ? n.call(e) : n;
    for (var a = 0; a < r; a++) {
      var i = e == null ? void 0 : e[t[a]];
      i === void 0 && (i = n, a = r), e = qe(i) ? i.call(e) : i;
    }
    return e;
  }
  var Xh = 0;
  function ad(e) {
    var t = ++Xh + "";
    return e ? e + t : t;
  }
  function od(e) {
    var t = Se(e);
    return t._chain = true, t;
  }
  function cd(e, t, n, r, a) {
    if (!(r instanceof t)) return e.apply(n, a);
    var i = $u(e.prototype), c = e.apply(i, a);
    return Tt(c) ? c : i;
  }
  var Pt = je(function(e, t) {
    var n = Pt.placeholder, r = function() {
      for (var a = 0, i = t.length, c = Array(i), o = 0; o < i; o++) c[o] = t[o] === n ? arguments[a++] : t[o];
      for (; a < arguments.length; ) c.push(arguments[a++]);
      return cd(e, r, this, this, c);
    };
    return r;
  });
  Pt.placeholder = Se;
  const za = je(function(e, t, n) {
    if (!qe(e)) throw new TypeError("Bind must be called on a function");
    var r = je(function(a) {
      return cd(e, r, t, this, n.concat(a));
    });
    return r;
  }), Ke = Fu(Ve);
  function jt(e, t, n, r) {
    if (r = r || [], !t && t !== 0) t = 1 / 0;
    else if (t <= 0) return r.concat(e);
    for (var a = r.length, i = 0, c = Ve(e); i < c; i++) {
      var o = e[i];
      if (Ke(o) && (Et(o) || Tr(o))) if (t > 1) jt(o, t - 1, n, r), a = r.length;
      else for (var s = 0, d = o.length; s < d; ) r[a++] = o[s++];
      else n || (r[a++] = o);
    }
    return r;
  }
  const sd = je(function(e, t) {
    t = jt(t, false, false);
    var n = t.length;
    if (n < 1) throw new Error("bindAll must be passed function names");
    for (; n--; ) {
      var r = t[n];
      e[r] = za(e[r], e);
    }
    return e;
  });
  function ud(e, t) {
    var n = function(r) {
      var a = n.cache, i = "" + (t ? t.apply(this, arguments) : r);
      return Ct(a, i) || (a[i] = e.apply(this, arguments)), a[i];
    };
    return n.cache = {}, n;
  }
  const Xa = je(function(e, t, n) {
    return setTimeout(function() {
      return e.apply(null, n);
    }, t);
  }), dd = Pt(Xa, Se, 1);
  function ld(e, t, n) {
    var r, a, i, c, o = 0;
    n || (n = {});
    var s = function() {
      o = n.leading === false ? 0 : en(), r = null, c = e.apply(a, i), r || (a = i = null);
    }, d = function() {
      var b = en();
      !o && n.leading === false && (o = b);
      var p = t - (b - o);
      return a = this, i = arguments, p <= 0 || p > t ? (r && (clearTimeout(r), r = null), o = b, c = e.apply(a, i), r || (a = i = null)) : !r && n.trailing !== false && (r = setTimeout(s, p)), c;
    };
    return d.cancel = function() {
      clearTimeout(r), o = 0, r = a = i = null;
    }, d;
  }
  function fd(e, t, n) {
    var r, a, i, c, o, s = function() {
      var b = en() - a;
      t > b ? r = setTimeout(s, t - b) : (r = null, n || (c = e.apply(o, i)), r || (i = o = null));
    }, d = je(function(b) {
      return o = this, i = b, a = en(), r || (r = setTimeout(s, t), n && (c = e.apply(o, i))), c;
    });
    return d.cancel = function() {
      clearTimeout(r), r = i = o = null;
    }, d;
  }
  function hd(e, t) {
    return Pt(t, e);
  }
  function Fr(e) {
    return function() {
      return !e.apply(this, arguments);
    };
  }
  function pd() {
    var e = arguments, t = e.length - 1;
    return function() {
      for (var n = t, r = e[t].apply(this, arguments); n--; ) r = e[n].call(this, r);
      return r;
    };
  }
  function gd(e, t) {
    return function() {
      if (--e < 1) return t.apply(this, arguments);
    };
  }
  function Va(e, t) {
    var n;
    return function() {
      return --e > 0 && (n = t.apply(this, arguments)), e <= 1 && (t = null), n;
    };
  }
  const md = Pt(Va, 2);
  function Ha(e, t, n) {
    t = He(t, n);
    for (var r = Oe(e), a, i = 0, c = r.length; i < c; i++) if (a = r[i], t(e[a], a, e)) return a;
  }
  function bd(e) {
    return function(t, n, r) {
      n = He(n, r);
      for (var a = Ve(t), i = e > 0 ? 0 : a - 1; i >= 0 && i < a; i += e) if (n(t[i], i, t)) return i;
      return -1;
    };
  }
  const Sr = bd(1), Ga = bd(-1);
  function Za(e, t, n, r) {
    n = He(n, r, 1);
    for (var a = n(t), i = 0, c = Ve(e); i < c; ) {
      var o = Math.floor((i + c) / 2);
      n(e[o]) < a ? i = o + 1 : c = o;
    }
    return i;
  }
  function yd(e, t, n) {
    return function(r, a, i) {
      var c = 0, o = Ve(r);
      if (typeof i == "number") e > 0 ? c = i >= 0 ? i : Math.max(i + o, c) : o = i >= 0 ? Math.min(i + 1, o) : i + o + 1;
      else if (n && i && o) return i = n(r, a), r[i] === a ? i : -1;
      if (a !== a) return i = t(En.call(r, c, o), Fa), i >= 0 ? i + c : -1;
      for (i = e > 0 ? c : o - 1; i >= 0 && i < o; i += e) if (r[i] === a) return i;
      return -1;
    };
  }
  const Ka = yd(1, Sr, Za), vd = yd(-1, Ga);
  function _n(e, t, n) {
    var r = Ke(e) ? Sr : Ha, a = r(e, t, n);
    if (a !== void 0 && a !== -1) return e[a];
  }
  function Dd(e, t) {
    return _n(e, Mt(t));
  }
  function it(e, t, n) {
    t = An(t, n);
    var r, a;
    if (Ke(e)) for (r = 0, a = e.length; r < a; r++) t(e[r], r, e);
    else {
      var i = Oe(e);
      for (r = 0, a = i.length; r < a; r++) t(e[i[r]], i[r], e);
    }
    return e;
  }
  function pt(e, t, n) {
    t = He(t, n);
    for (var r = !Ke(e) && Oe(e), a = (r || e).length, i = Array(a), c = 0; c < a; c++) {
      var o = r ? r[c] : c;
      i[c] = t(e[o], o, e);
    }
    return i;
  }
  function xd(e) {
    var t = function(n, r, a, i) {
      var c = !Ke(n) && Oe(n), o = (c || n).length, s = e > 0 ? 0 : o - 1;
      for (i || (a = n[c ? c[s] : s], s += e); s >= 0 && s < o; s += e) {
        var d = c ? c[s] : s;
        a = r(a, n[d], d, n);
      }
      return a;
    };
    return function(n, r, a, i) {
      var c = arguments.length >= 3;
      return t(n, An(r, i, 4), a, c);
    };
  }
  const Kt = xd(1), br = xd(-1);
  function wt(e, t, n) {
    var r = [];
    return t = He(t, n), it(e, function(a, i, c) {
      t(a, i, c) && r.push(a);
    }), r;
  }
  function _d(e, t, n) {
    return wt(e, Fr(He(t)), n);
  }
  function yr(e, t, n) {
    t = He(t, n);
    for (var r = !Ke(e) && Oe(e), a = (r || e).length, i = 0; i < a; i++) {
      var c = r ? r[i] : i;
      if (!t(e[c], c, e)) return false;
    }
    return true;
  }
  function vr(e, t, n) {
    t = He(t, n);
    for (var r = !Ke(e) && Oe(e), a = (r || e).length, i = 0; i < a; i++) {
      var c = r ? r[i] : i;
      if (t(e[c], c, e)) return true;
    }
    return false;
  }
  function tt(e, t, n, r) {
    return Ke(e) || (e = qt(e)), (typeof n != "number" || r) && (n = 0), Ka(e, t, n) >= 0;
  }
  const wd = je(function(e, t, n) {
    var r, a;
    return qe(t) ? a = t : (t = Cn(t), r = t.slice(0, -1), t = t[t.length - 1]), pt(e, function(i) {
      var c = a;
      if (!c) {
        if (r && r.length && (i = Pa(i, r)), i == null) return;
        c = i[t];
      }
      return c == null ? c : c.apply(i, n);
    });
  });
  function kr(e, t) {
    return pt(e, Cr(t));
  }
  function Ud(e, t) {
    return wt(e, Mt(t));
  }
  function Ya(e, t, n) {
    var r = -1 / 0, a = -1 / 0, i, c;
    if (t == null || typeof t == "number" && typeof e[0] != "object" && e != null) {
      e = Ke(e) ? e : qt(e);
      for (var o = 0, s = e.length; o < s; o++) i = e[o], i != null && i > r && (r = i);
    } else t = He(t, n), it(e, function(d, b, p) {
      c = t(d, b, p), (c > a || c === -1 / 0 && r === -1 / 0) && (r = d, a = c);
    });
    return r;
  }
  function Td(e, t, n) {
    var r = 1 / 0, a = 1 / 0, i, c;
    if (t == null || typeof t == "number" && typeof e[0] != "object" && e != null) {
      e = Ke(e) ? e : qt(e);
      for (var o = 0, s = e.length; o < s; o++) i = e[o], i != null && i < r && (r = i);
    } else t = He(t, n), it(e, function(d, b, p) {
      c = t(d, b, p), (c < a || c === 1 / 0 && r === 1 / 0) && (r = d, a = c);
    });
    return r;
  }
  var Vh = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;
  function Qa(e) {
    return e ? Et(e) ? En.call(e) : Ur(e) ? e.match(Vh) : Ke(e) ? pt(e, Er) : qt(e) : [];
  }
  function Ja(e, t, n) {
    if (t == null || n) return Ke(e) || (e = qt(e)), e[mr(e.length - 1)];
    var r = Qa(e), a = Ve(r);
    t = Math.max(Math.min(t, a), 0);
    for (var i = a - 1, c = 0; c < t; c++) {
      var o = mr(c, i), s = r[c];
      r[c] = r[o], r[o] = s;
    }
    return r.slice(0, t);
  }
  function Ed(e) {
    return Ja(e, 1 / 0);
  }
  function Cd(e, t, n) {
    var r = 0;
    return t = He(t, n), kr(pt(e, function(a, i, c) {
      return {
        value: a,
        index: r++,
        criteria: t(a, i, c)
      };
    }).sort(function(a, i) {
      var c = a.criteria, o = i.criteria;
      if (c !== o) {
        if (c > o || c === void 0) return 1;
        if (c < o || o === void 0) return -1;
      }
      return a.index - i.index;
    }), "value");
  }
  function Br(e, t) {
    return function(n, r, a) {
      var i = t ? [
        [],
        []
      ] : {};
      return r = He(r, a), it(n, function(c, o) {
        var s = r(c, o, n);
        e(i, c, s);
      }), i;
    };
  }
  const Ad = Br(function(e, t, n) {
    Ct(e, n) ? e[n].push(t) : e[n] = [
      t
    ];
  }), Fd = Br(function(e, t, n) {
    e[n] = t;
  }), Sd = Br(function(e, t, n) {
    Ct(e, n) ? e[n]++ : e[n] = 1;
  }), kd = Br(function(e, t, n) {
    e[n ? 0 : 1].push(t);
  }, true);
  function Bd(e) {
    return e == null ? 0 : Ke(e) ? e.length : Oe(e).length;
  }
  function Hh(e, t, n) {
    return t in n;
  }
  const eo = je(function(e, t) {
    var n = {}, r = t[0];
    if (e == null) return n;
    qe(r) ? (t.length > 1 && (r = An(r, t[1])), t = tn(e)) : (r = Hh, t = jt(t, false, false), e = Object(e));
    for (var a = 0, i = t.length; a < i; a++) {
      var c = t[a], o = e[c];
      r(o, c, e) && (n[c] = o);
    }
    return n;
  }), Wd = je(function(e, t) {
    var n = t[0], r;
    return qe(n) ? (n = Fr(n), t.length > 1 && (r = t[1])) : (t = pt(jt(t, false, false), String), n = function(a, i) {
      return !tt(t, i);
    }), eo(e, n, r);
  });
  function to(e, t, n) {
    return En.call(e, 0, Math.max(0, e.length - (t == null || n ? 1 : t)));
  }
  function Yt(e, t, n) {
    return e == null || e.length < 1 ? t == null || n ? void 0 : [] : t == null || n ? e[0] : to(e, e.length - t);
  }
  function Lt(e, t, n) {
    return En.call(e, t == null || n ? 1 : t);
  }
  function Rd(e, t, n) {
    return e == null || e.length < 1 ? t == null || n ? void 0 : [] : t == null || n ? e[e.length - 1] : Lt(e, Math.max(0, e.length - t));
  }
  function Id(e) {
    return wt(e, Boolean);
  }
  function Od(e, t) {
    return jt(e, t, false);
  }
  const no = je(function(e, t) {
    return t = jt(t, true, true), wt(e, function(n) {
      return !tt(t, n);
    });
  }), Nd = je(function(e, t) {
    return no(e, t);
  });
  function wn(e, t, n, r) {
    Ua(t) || (r = n, n = t, t = false), n != null && (n = He(n, r));
    for (var a = [], i = [], c = 0, o = Ve(e); c < o; c++) {
      var s = e[c], d = n ? n(s, c, e) : s;
      t && !n ? ((!c || i !== d) && a.push(s), i = d) : n ? tt(i, d) || (i.push(d), a.push(s)) : tt(a, s) || a.push(s);
    }
    return a;
  }
  const Ld = je(function(e) {
    return wn(jt(e, true, true));
  });
  function Md(e) {
    for (var t = [], n = arguments.length, r = 0, a = Ve(e); r < a; r++) {
      var i = e[r];
      if (!tt(t, i)) {
        var c;
        for (c = 1; c < n && tt(arguments[c], i); c++) ;
        c === n && t.push(i);
      }
    }
    return t;
  }
  function Un(e) {
    for (var t = e && Ya(e, Ve).length || 0, n = Array(t), r = 0; r < t; r++) n[r] = kr(e, r);
    return n;
  }
  const qd = je(Un);
  function Pd(e, t) {
    for (var n = {}, r = 0, a = Ve(e); r < a; r++) t ? n[e[r]] = t[r] : n[e[r][0]] = e[r][1];
    return n;
  }
  function jd(e, t, n) {
    t == null && (t = e || 0, e = 0), n || (n = t < e ? -1 : 1);
    for (var r = Math.max(Math.ceil((t - e) / n), 0), a = Array(r), i = 0; i < r; i++, e += n) a[i] = e;
    return a;
  }
  function $d(e, t) {
    if (t == null || t < 1) return [];
    for (var n = [], r = 0, a = e.length; r < a; ) n.push(En.call(e, r, r += t));
    return n;
  }
  function ro(e, t) {
    return e._chain ? Se(t).chain() : t;
  }
  function io(e) {
    return it(xn(e), function(t) {
      var n = Se[t] = e[t];
      Se.prototype[t] = function() {
        var r = [
          this._wrapped
        ];
        return wh.apply(r, arguments), ro(this, n.apply(Se, r));
      };
    }), Se;
  }
  it([
    "pop",
    "push",
    "reverse",
    "shift",
    "sort",
    "splice",
    "unshift"
  ], function(e) {
    var t = wr[e];
    Se.prototype[e] = function() {
      var n = this._wrapped;
      return n != null && (t.apply(n, arguments), (e === "shift" || e === "splice") && n.length === 0 && delete n[0]), ro(this, n);
    };
  });
  it([
    "concat",
    "join",
    "slice"
  ], function(e) {
    var t = wr[e];
    Se.prototype[e] = function() {
      var n = this._wrapped;
      return n != null && (n = t.apply(n, arguments)), ro(this, n);
    };
  });
  const Gh = Object.freeze(Object.defineProperty({
    __proto__: null,
    VERSION: xa,
    after: gd,
    all: yr,
    allKeys: tn,
    any: vr,
    assign: Jt,
    before: Va,
    bind: za,
    bindAll: sd,
    chain: od,
    chunk: $d,
    clone: Xu,
    collect: pt,
    compact: Id,
    compose: pd,
    constant: Sa,
    contains: tt,
    countBy: Sd,
    create: zu,
    debounce: fd,
    default: Se,
    defaults: Ma,
    defer: dd,
    delay: Xa,
    detect: _n,
    difference: no,
    drop: Lt,
    each: it,
    escape: ed,
    every: yr,
    extend: La,
    extendOwn: Jt,
    filter: wt,
    find: _n,
    findIndex: Sr,
    findKey: Ha,
    findLastIndex: Ga,
    findWhere: Dd,
    first: Yt,
    flatten: Od,
    foldl: Kt,
    foldr: br,
    forEach: it,
    functions: xn,
    get: ja,
    groupBy: Ad,
    has: Hu,
    head: Yt,
    identity: Er,
    include: tt,
    includes: tt,
    indexBy: Fd,
    indexOf: Ka,
    initial: to,
    inject: Kt,
    intersection: Md,
    invert: Oa,
    invoke: wd,
    isArguments: Tr,
    isArray: Et,
    isArrayBuffer: Ca,
    isBoolean: Ua,
    isDataView: Dn,
    isDate: _u,
    isElement: xu,
    isEmpty: Bu,
    isEqual: Ru,
    isError: Uu,
    isFinite: Au,
    isFunction: qe,
    isMap: Lu,
    isMatch: Ba,
    isNaN: Fa,
    isNull: Du,
    isNumber: Ta,
    isObject: Tt,
    isRegExp: wu,
    isSet: qu,
    isString: Ur,
    isSymbol: Ea,
    isTypedArray: ka,
    isUndefined: wa,
    isWeakMap: Mu,
    isWeakSet: Pu,
    iteratee: Ar,
    keys: Oe,
    last: Rd,
    lastIndexOf: vd,
    map: pt,
    mapObject: Zu,
    matcher: Mt,
    matches: Mt,
    max: Ya,
    memoize: ud,
    methods: xn,
    min: Td,
    mixin: io,
    negate: Fr,
    noop: $a,
    now: en,
    object: Pd,
    omit: Wd,
    once: md,
    pairs: ju,
    partial: Pt,
    partition: kd,
    pick: eo,
    pluck: kr,
    property: Cr,
    propertyOf: Ku,
    random: mr,
    range: jd,
    reduce: Kt,
    reduceRight: br,
    reject: _d,
    rest: Lt,
    restArguments: je,
    result: id,
    sample: Ja,
    select: wt,
    shuffle: Ed,
    size: Bd,
    some: vr,
    sortBy: Cd,
    sortedIndex: Za,
    tail: Lt,
    take: Yt,
    tap: Vu,
    template: rd,
    templateSettings: nd,
    throttle: ld,
    times: Yu,
    toArray: Qa,
    toPath: qa,
    transpose: Un,
    unescape: td,
    union: Ld,
    uniq: wn,
    unique: wn,
    uniqueId: ad,
    unzip: Un,
    values: qt,
    where: Ud,
    without: Nd,
    wrap: hd,
    zip: qd
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  var ma = io(Gh);
  ma._ = ma;
  const Zh = Object.freeze(Object.defineProperty({
    __proto__: null,
    VERSION: xa,
    after: gd,
    all: yr,
    allKeys: tn,
    any: vr,
    assign: Jt,
    before: Va,
    bind: za,
    bindAll: sd,
    chain: od,
    chunk: $d,
    clone: Xu,
    collect: pt,
    compact: Id,
    compose: pd,
    constant: Sa,
    contains: tt,
    countBy: Sd,
    create: zu,
    debounce: fd,
    default: ma,
    defaults: Ma,
    defer: dd,
    delay: Xa,
    detect: _n,
    difference: no,
    drop: Lt,
    each: it,
    escape: ed,
    every: yr,
    extend: La,
    extendOwn: Jt,
    filter: wt,
    find: _n,
    findIndex: Sr,
    findKey: Ha,
    findLastIndex: Ga,
    findWhere: Dd,
    first: Yt,
    flatten: Od,
    foldl: Kt,
    foldr: br,
    forEach: it,
    functions: xn,
    get: ja,
    groupBy: Ad,
    has: Hu,
    head: Yt,
    identity: Er,
    include: tt,
    includes: tt,
    indexBy: Fd,
    indexOf: Ka,
    initial: to,
    inject: Kt,
    intersection: Md,
    invert: Oa,
    invoke: wd,
    isArguments: Tr,
    isArray: Et,
    isArrayBuffer: Ca,
    isBoolean: Ua,
    isDataView: Dn,
    isDate: _u,
    isElement: xu,
    isEmpty: Bu,
    isEqual: Ru,
    isError: Uu,
    isFinite: Au,
    isFunction: qe,
    isMap: Lu,
    isMatch: Ba,
    isNaN: Fa,
    isNull: Du,
    isNumber: Ta,
    isObject: Tt,
    isRegExp: wu,
    isSet: qu,
    isString: Ur,
    isSymbol: Ea,
    isTypedArray: ka,
    isUndefined: wa,
    isWeakMap: Mu,
    isWeakSet: Pu,
    iteratee: Ar,
    keys: Oe,
    last: Rd,
    lastIndexOf: vd,
    map: pt,
    mapObject: Zu,
    matcher: Mt,
    matches: Mt,
    max: Ya,
    memoize: ud,
    methods: xn,
    min: Td,
    mixin: io,
    negate: Fr,
    noop: $a,
    now: en,
    object: Pd,
    omit: Wd,
    once: md,
    pairs: ju,
    partial: Pt,
    partition: kd,
    pick: eo,
    pluck: kr,
    property: Cr,
    propertyOf: Ku,
    random: mr,
    range: jd,
    reduce: Kt,
    reduceRight: br,
    reject: _d,
    rest: Lt,
    restArguments: je,
    result: id,
    sample: Ja,
    select: wt,
    shuffle: Ed,
    size: Bd,
    some: vr,
    sortBy: Cd,
    sortedIndex: Za,
    tail: Lt,
    take: Yt,
    tap: Vu,
    template: rd,
    templateSettings: nd,
    throttle: ld,
    times: Yu,
    toArray: Qa,
    toPath: qa,
    transpose: Un,
    unescape: td,
    union: Ld,
    uniq: wn,
    unique: wn,
    uniqueId: ad,
    unzip: Un,
    values: qt,
    where: Ud,
    without: Nd,
    wrap: hd,
    zip: qd
  }, Symbol.toStringTag, {
    value: "Module"
  })), Re = hl(Zh);
  var Wn = {}, Je = {}, ii = {
    exports: {}
  }, Rn = {
    exports: {}
  }, Mo;
  function nn() {
    if (Mo) return Rn.exports;
    Mo = 1;
    var e = /* @__PURE__ */ function() {
      return this === void 0;
    }();
    if (e) Rn.exports = {
      freeze: Object.freeze,
      defineProperty: Object.defineProperty,
      getDescriptor: Object.getOwnPropertyDescriptor,
      keys: Object.keys,
      names: Object.getOwnPropertyNames,
      getPrototypeOf: Object.getPrototypeOf,
      isArray: Array.isArray,
      isES5: e,
      propertyIsWritable: function(b, p) {
        var g = Object.getOwnPropertyDescriptor(b, p);
        return !!(!g || g.writable || g.set);
      }
    };
    else {
      var t = {}.hasOwnProperty, n = {}.toString, r = {}.constructor.prototype, a = function(b) {
        var p = [];
        for (var g in b) t.call(b, g) && p.push(g);
        return p;
      }, i = function(b, p) {
        return {
          value: b[p]
        };
      }, c = function(b, p, g) {
        return b[p] = g.value, b;
      }, o = function(b) {
        return b;
      }, s = function(b) {
        try {
          return Object(b).constructor.prototype;
        } catch {
          return r;
        }
      }, d = function(b) {
        try {
          return n.call(b) === "[object Array]";
        } catch {
          return false;
        }
      };
      Rn.exports = {
        isArray: d,
        keys: a,
        names: a,
        defineProperty: c,
        getDescriptor: i,
        freeze: o,
        getPrototypeOf: s,
        isES5: e,
        propertyIsWritable: function() {
          return true;
        }
      };
    }
    return Rn.exports;
  }
  var on, qo;
  function ke() {
    if (qo) return on;
    qo = 1;
    var e = {}, t = nn(), n = typeof navigator > "u", r = {
      e: {}
    }, a, i = typeof self < "u" ? self : typeof window < "u" ? window : typeof ft < "u" ? ft : on !== void 0 ? on : null;
    function c() {
      try {
        var M = a;
        return a = null, M.apply(this, arguments);
      } catch (ee) {
        return r.e = ee, r;
      }
    }
    function o(M) {
      return a = M, c;
    }
    var s = function(M, ee) {
      var te = {}.hasOwnProperty;
      function se() {
        this.constructor = M, this.constructor$ = ee;
        for (var le in ee.prototype) te.call(ee.prototype, le) && le.charAt(le.length - 1) !== "$" && (this[le + "$"] = ee.prototype[le]);
      }
      return se.prototype = ee.prototype, M.prototype = new se(), M.prototype;
    };
    function d(M) {
      return M == null || M === true || M === false || typeof M == "string" || typeof M == "number";
    }
    function b(M) {
      return typeof M == "function" || typeof M == "object" && M !== null;
    }
    function p(M) {
      return d(M) ? new Error(E(M)) : M;
    }
    function g(M, ee) {
      var te = M.length, se = new Array(te + 1), le;
      for (le = 0; le < te; ++le) se[le] = M[le];
      return se[le] = ee, se;
    }
    function m(M, ee, te) {
      if (t.isES5) {
        var se = Object.getOwnPropertyDescriptor(M, ee);
        if (se != null) return se.get == null && se.set == null ? se.value : te;
      } else return {}.hasOwnProperty.call(M, ee) ? M[ee] : void 0;
    }
    function y(M, ee, te) {
      if (d(M)) return M;
      var se = {
        value: te,
        configurable: true,
        enumerable: false,
        writable: true
      };
      return t.defineProperty(M, ee, se), M;
    }
    function l(M) {
      throw M;
    }
    var u = function() {
      var M = [
        Array.prototype,
        Object.prototype,
        Function.prototype
      ], ee = function(le) {
        for (var fe = 0; fe < M.length; ++fe) if (M[fe] === le) return true;
        return false;
      };
      if (t.isES5) {
        var te = Object.getOwnPropertyNames;
        return function(le) {
          for (var fe = [], ge = /* @__PURE__ */ Object.create(null); le != null && !ee(le); ) {
            var me;
            try {
              me = te(le);
            } catch {
              return fe;
            }
            for (var De = 0; De < me.length; ++De) {
              var Ce = me[De];
              if (!ge[Ce]) {
                ge[Ce] = true;
                var we = Object.getOwnPropertyDescriptor(le, Ce);
                we != null && we.get == null && we.set == null && fe.push(Ce);
              }
            }
            le = t.getPrototypeOf(le);
          }
          return fe;
        };
      } else {
        var se = {}.hasOwnProperty;
        return function(le) {
          if (ee(le)) return [];
          var fe = [];
          e: for (var ge in le) if (se.call(le, ge)) fe.push(ge);
          else {
            for (var me = 0; me < M.length; ++me) if (se.call(M[me], ge)) continue e;
            fe.push(ge);
          }
          return fe;
        };
      }
    }(), h = /this\s*\.\s*\S+\s*=/;
    function f(M) {
      try {
        if (typeof M == "function") {
          var ee = t.names(M.prototype), te = t.isES5 && ee.length > 1, se = ee.length > 0 && !(ee.length === 1 && ee[0] === "constructor"), le = h.test(M + "") && t.names(M).length > 0;
          if (te || se || le) return true;
        }
        return false;
      } catch {
        return false;
      }
    }
    function v(M) {
      return M;
    }
    var w = /^[a-z$_][a-z$_0-9]*$/i;
    function x(M) {
      return w.test(M);
    }
    function U(M, ee, te) {
      for (var se = new Array(M), le = 0; le < M; ++le) se[le] = ee + le + te;
      return se;
    }
    function E(M) {
      try {
        return M + "";
      } catch {
        return "[no string representation]";
      }
    }
    function F(M) {
      return M !== null && typeof M == "object" && typeof M.message == "string" && typeof M.name == "string";
    }
    function C(M) {
      try {
        y(M, "isOperational", true);
      } catch {
      }
    }
    function R(M) {
      return M == null ? false : M instanceof Error.__BluebirdErrorTypes__.OperationalError || M.isOperational === true;
    }
    function z(M) {
      return F(M) && t.propertyIsWritable(M, "stack");
    }
    var T = function() {
      return "stack" in new Error() ? function(M) {
        return z(M) ? M : new Error(E(M));
      } : function(M) {
        if (z(M)) return M;
        try {
          throw new Error(E(M));
        } catch (ee) {
          return ee;
        }
      };
    }();
    function B(M) {
      return {}.toString.call(M);
    }
    function _(M, ee, te) {
      for (var se = t.names(M), le = 0; le < se.length; ++le) {
        var fe = se[le];
        if (te(fe)) try {
          t.defineProperty(ee, fe, t.getDescriptor(M, fe));
        } catch {
        }
      }
    }
    var P = function(M) {
      return t.isArray(M) ? M : null;
    };
    if (typeof Symbol < "u" && Symbol.iterator) {
      var k = typeof Array.from == "function" ? function(M) {
        return Array.from(M);
      } : function(M) {
        for (var ee = [], te = M[Symbol.iterator](), se; !(se = te.next()).done; ) ee.push(se.value);
        return ee;
      };
      P = function(M) {
        return t.isArray(M) ? M : M != null && typeof M[Symbol.iterator] == "function" ? k(M) : null;
      };
    }
    var I = typeof process < "u" && B(process).toLowerCase() === "[object process]", H = typeof process < "u" && typeof e < "u";
    function q(M) {
      return H ? e[M] : void 0;
    }
    function Y() {
      if (typeof Promise == "function") try {
        var M = new Promise(function() {
        });
        if ({}.toString.call(M) === "[object Promise]") return Promise;
      } catch {
      }
    }
    function N(M, ee) {
      return M.bind(ee);
    }
    var $ = {
      isClass: f,
      isIdentifier: x,
      inheritedDataKeys: u,
      getDataPropertyOrDefault: m,
      thrower: l,
      isArray: t.isArray,
      asArray: P,
      notEnumerableProp: y,
      isPrimitive: d,
      isObject: b,
      isError: F,
      canEvaluate: n,
      errorObj: r,
      tryCatch: o,
      inherits: s,
      withAppended: g,
      maybeWrapAsError: p,
      toFastProperties: v,
      filledRange: U,
      toString: E,
      canAttachTrace: z,
      ensureErrorObject: T,
      originatesFromRejection: R,
      markAsOriginatingFromRejection: C,
      classString: B,
      copyDescriptors: _,
      hasDevTools: typeof chrome < "u" && chrome && typeof chrome.loadTimes == "function",
      isNode: I,
      hasEnvVariables: H,
      env: q,
      global: i,
      getNativePromise: Y,
      domainBind: N
    };
    $.isRecentNode = $.isNode && function() {
      var M = process.versions.node.split(".").map(Number);
      return M[0] === 0 && M[1] > 10 || M[0] > 0;
    }(), $.isNode && $.toFastProperties(process);
    try {
      throw new Error();
    } catch (M) {
      $.lastLineError = M;
    }
    return on = $, on;
  }
  var In = {
    exports: {}
  }, ai, Po;
  function Kh() {
    if (Po) return ai;
    Po = 1;
    var e = ke(), t, n = function() {
      throw new Error(`No async scheduler available

    See http://goo.gl/MqrFmX
`);
    }, r = e.getNativePromise();
    if (e.isNode && typeof MutationObserver > "u") {
      var a = ft.setImmediate, i = process.nextTick;
      t = e.isRecentNode ? function(o) {
        a.call(ft, o);
      } : function(o) {
        i.call(process, o);
      };
    } else if (typeof r == "function" && typeof r.resolve == "function") {
      var c = r.resolve();
      t = function(o) {
        c.then(o);
      };
    } else typeof MutationObserver < "u" && !(typeof window < "u" && window.navigator && (window.navigator.standalone || window.cordova)) ? t = function() {
      var o = document.createElement("div"), s = {
        attributes: true
      }, d = false, b = document.createElement("div"), p = new MutationObserver(function() {
        o.classList.toggle("foo"), d = false;
      });
      p.observe(b, s);
      var g = function() {
        d || (d = true, b.classList.toggle("foo"));
      };
      return function(y) {
        var l = new MutationObserver(function() {
          l.disconnect(), y();
        });
        l.observe(o, s), g();
      };
    }() : typeof setImmediate < "u" ? t = function(o) {
      setImmediate(o);
    } : typeof setTimeout < "u" ? t = function(o) {
      setTimeout(o, 0);
    } : t = n;
    return ai = t, ai;
  }
  var oi, jo;
  function Yh() {
    if (jo) return oi;
    jo = 1;
    function e(n, r, a, i, c) {
      for (var o = 0; o < c; ++o) a[o + i] = n[o + r], n[o + r] = void 0;
    }
    function t(n) {
      this._capacity = n, this._length = 0, this._front = 0;
    }
    return t.prototype._willBeOverCapacity = function(n) {
      return this._capacity < n;
    }, t.prototype._pushOne = function(n) {
      var r = this.length();
      this._checkCapacity(r + 1);
      var a = this._front + r & this._capacity - 1;
      this[a] = n, this._length = r + 1;
    }, t.prototype.push = function(n, r, a) {
      var i = this.length() + 3;
      if (this._willBeOverCapacity(i)) {
        this._pushOne(n), this._pushOne(r), this._pushOne(a);
        return;
      }
      var c = this._front + i - 3;
      this._checkCapacity(i);
      var o = this._capacity - 1;
      this[c + 0 & o] = n, this[c + 1 & o] = r, this[c + 2 & o] = a, this._length = i;
    }, t.prototype.shift = function() {
      var n = this._front, r = this[n];
      return this[n] = void 0, this._front = n + 1 & this._capacity - 1, this._length--, r;
    }, t.prototype.length = function() {
      return this._length;
    }, t.prototype._checkCapacity = function(n) {
      this._capacity < n && this._resizeTo(this._capacity << 1);
    }, t.prototype._resizeTo = function(n) {
      var r = this._capacity;
      this._capacity = n;
      var a = this._front, i = this._length, c = a + i & r - 1;
      e(this, 0, this, r, c);
    }, oi = t, oi;
  }
  var $o;
  function Qh() {
    if ($o) return In.exports;
    $o = 1;
    var e;
    try {
      throw new Error();
    } catch (s) {
      e = s;
    }
    var t = Kh(), n = Yh(), r = ke();
    function a() {
      this._customScheduler = false, this._isTickUsed = false, this._lateQueue = new n(16), this._normalQueue = new n(16), this._haveDrainedQueues = false, this._trampolineEnabled = true;
      var s = this;
      this.drainQueues = function() {
        s._drainQueues();
      }, this._schedule = t;
    }
    a.prototype.setScheduler = function(s) {
      var d = this._schedule;
      return this._schedule = s, this._customScheduler = true, d;
    }, a.prototype.hasCustomScheduler = function() {
      return this._customScheduler;
    }, a.prototype.enableTrampoline = function() {
      this._trampolineEnabled = true;
    }, a.prototype.disableTrampolineIfNecessary = function() {
      r.hasDevTools && (this._trampolineEnabled = false);
    }, a.prototype.haveItemsQueued = function() {
      return this._isTickUsed || this._haveDrainedQueues;
    }, a.prototype.fatalError = function(s, d) {
      d ? (process.stderr.write("Fatal " + (s instanceof Error ? s.stack : s) + `
`), process.exit(2)) : this.throwLater(s);
    }, a.prototype.throwLater = function(s, d) {
      if (arguments.length === 1 && (d = s, s = function() {
        throw d;
      }), typeof setTimeout < "u") setTimeout(function() {
        s(d);
      }, 0);
      else try {
        this._schedule(function() {
          s(d);
        });
      } catch {
        throw new Error(`No async scheduler available

    See http://goo.gl/MqrFmX
`);
      }
    };
    function i(s, d, b) {
      this._lateQueue.push(s, d, b), this._queueTick();
    }
    function c(s, d, b) {
      this._normalQueue.push(s, d, b), this._queueTick();
    }
    function o(s) {
      this._normalQueue._pushOne(s), this._queueTick();
    }
    return r.hasDevTools ? (a.prototype.invokeLater = function(s, d, b) {
      this._trampolineEnabled ? i.call(this, s, d, b) : this._schedule(function() {
        setTimeout(function() {
          s.call(d, b);
        }, 100);
      });
    }, a.prototype.invoke = function(s, d, b) {
      this._trampolineEnabled ? c.call(this, s, d, b) : this._schedule(function() {
        s.call(d, b);
      });
    }, a.prototype.settlePromises = function(s) {
      this._trampolineEnabled ? o.call(this, s) : this._schedule(function() {
        s._settlePromises();
      });
    }) : (a.prototype.invokeLater = i, a.prototype.invoke = c, a.prototype.settlePromises = o), a.prototype._drainQueue = function(s) {
      for (; s.length() > 0; ) {
        var d = s.shift();
        if (typeof d != "function") {
          d._settlePromises();
          continue;
        }
        var b = s.shift(), p = s.shift();
        d.call(b, p);
      }
    }, a.prototype._drainQueues = function() {
      this._drainQueue(this._normalQueue), this._reset(), this._haveDrainedQueues = true, this._drainQueue(this._lateQueue);
    }, a.prototype._queueTick = function() {
      this._isTickUsed || (this._isTickUsed = true, this._schedule(this.drainQueues));
    }, a.prototype._reset = function() {
      this._isTickUsed = false;
    }, In.exports = a, In.exports.firstLineError = e, In.exports;
  }
  var ci, zo;
  function Ut() {
    if (zo) return ci;
    zo = 1;
    var e = nn(), t = e.freeze, n = ke(), r = n.inherits, a = n.notEnumerableProp;
    function i(h, f) {
      function v(w) {
        if (!(this instanceof v)) return new v(w);
        a(this, "message", typeof w == "string" ? w : f), a(this, "name", h), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : Error.call(this);
      }
      return r(v, Error), v;
    }
    var c, o, s = i("Warning", "warning"), d = i("CancellationError", "cancellation error"), b = i("TimeoutError", "timeout error"), p = i("AggregateError", "aggregate error");
    try {
      c = TypeError, o = RangeError;
    } catch {
      c = i("TypeError", "type error"), o = i("RangeError", "range error");
    }
    for (var g = "join pop push shift unshift slice filter forEach some every map indexOf lastIndexOf reduce reduceRight sort reverse".split(" "), m = 0; m < g.length; ++m) typeof Array.prototype[g[m]] == "function" && (p.prototype[g[m]] = Array.prototype[g[m]]);
    e.defineProperty(p.prototype, "length", {
      value: 0,
      configurable: false,
      writable: true,
      enumerable: true
    }), p.prototype.isOperational = true;
    var y = 0;
    p.prototype.toString = function() {
      var h = Array(y * 4 + 1).join(" "), f = `
` + h + `AggregateError of:
`;
      y++, h = Array(y * 4 + 1).join(" ");
      for (var v = 0; v < this.length; ++v) {
        for (var w = this[v] === this ? "[Circular AggregateError]" : this[v] + "", x = w.split(`
`), U = 0; U < x.length; ++U) x[U] = h + x[U];
        w = x.join(`
`), f += w + `
`;
      }
      return y--, f;
    };
    function l(h) {
      if (!(this instanceof l)) return new l(h);
      a(this, "name", "OperationalError"), a(this, "message", h), this.cause = h, this.isOperational = true, h instanceof Error ? (a(this, "message", h.message), a(this, "stack", h.stack)) : Error.captureStackTrace && Error.captureStackTrace(this, this.constructor);
    }
    r(l, Error);
    var u = Error.__BluebirdErrorTypes__;
    return u || (u = t({
      CancellationError: d,
      TimeoutError: b,
      OperationalError: l,
      RejectionError: l,
      AggregateError: p
    }), e.defineProperty(Error, "__BluebirdErrorTypes__", {
      value: u,
      writable: false,
      enumerable: false,
      configurable: false
    })), ci = {
      Error,
      TypeError: c,
      RangeError: o,
      CancellationError: u.CancellationError,
      OperationalError: u.OperationalError,
      TimeoutError: u.TimeoutError,
      AggregateError: u.AggregateError,
      Warning: s
    }, ci;
  }
  var si, Xo;
  function Jh() {
    return Xo || (Xo = 1, si = function(e, t) {
      var n = ke(), r = n.errorObj, a = n.isObject;
      function i(p, g) {
        if (a(p)) {
          if (p instanceof e) return p;
          var m = o(p);
          if (m === r) {
            g && g._pushContext();
            var y = e.reject(m.e);
            return g && g._popContext(), y;
          } else if (typeof m == "function") {
            if (d(p)) {
              var y = new e(t);
              return p._then(y._fulfill, y._reject, void 0, y, null), y;
            }
            return b(p, m, g);
          }
        }
        return p;
      }
      function c(p) {
        return p.then;
      }
      function o(p) {
        try {
          return c(p);
        } catch (g) {
          return r.e = g, r;
        }
      }
      var s = {}.hasOwnProperty;
      function d(p) {
        try {
          return s.call(p, "_promise0");
        } catch {
          return false;
        }
      }
      function b(p, g, m) {
        var y = new e(t), l = y;
        m && m._pushContext(), y._captureStackTrace(), m && m._popContext();
        var u = true, h = n.tryCatch(g).call(p, f, v);
        u = false, y && h === r && (y._rejectCallback(h.e, true, true), y = null);
        function f(w) {
          y && (y._resolveCallback(w), y = null);
        }
        function v(w) {
          y && (y._rejectCallback(w, u, true), y = null);
        }
        return l;
      }
      return i;
    }), si;
  }
  var ui, Vo;
  function ep() {
    return Vo || (Vo = 1, ui = function(e, t, n, r, a) {
      var i = ke();
      i.isArray;
      function c(s) {
        switch (s) {
          case -2:
            return [];
          case -3:
            return {};
        }
      }
      function o(s) {
        var d = this._promise = new e(t);
        s instanceof e && d._propagateFrom(s, 3), d._setOnCancel(this), this._values = s, this._length = 0, this._totalResolved = 0, this._init(void 0, -2);
      }
      return i.inherits(o, a), o.prototype.length = function() {
        return this._length;
      }, o.prototype.promise = function() {
        return this._promise;
      }, o.prototype._init = function s(d, b) {
        var p = n(this._values, this._promise);
        if (p instanceof e) {
          p = p._target();
          var g = p._bitField;
          if (this._values = p, (g & 50397184) === 0) return this._promise._setAsyncGuaranteed(), p._then(s, this._reject, void 0, this, b);
          if ((g & 33554432) !== 0) p = p._value();
          else return (g & 16777216) !== 0 ? this._reject(p._reason()) : this._cancel();
        }
        if (p = i.asArray(p), p === null) {
          var m = r("expecting an array or an iterable object but got " + i.classString(p)).reason();
          this._promise._rejectCallback(m, false);
          return;
        }
        if (p.length === 0) {
          b === -5 ? this._resolveEmptyArray() : this._resolve(c(b));
          return;
        }
        this._iterate(p);
      }, o.prototype._iterate = function(s) {
        var d = this.getActualLength(s.length);
        this._length = d, this._values = this.shouldCopyValues() ? new Array(d) : this._values;
        for (var b = this._promise, p = false, g = null, m = 0; m < d; ++m) {
          var y = n(s[m], b);
          y instanceof e ? (y = y._target(), g = y._bitField) : g = null, p ? g !== null && y.suppressUnhandledRejections() : g !== null ? (g & 50397184) === 0 ? (y._proxy(this, m), this._values[m] = y) : (g & 33554432) !== 0 ? p = this._promiseFulfilled(y._value(), m) : (g & 16777216) !== 0 ? p = this._promiseRejected(y._reason(), m) : p = this._promiseCancelled(m) : p = this._promiseFulfilled(y, m);
        }
        p || b._setAsyncGuaranteed();
      }, o.prototype._isResolved = function() {
        return this._values === null;
      }, o.prototype._resolve = function(s) {
        this._values = null, this._promise._fulfill(s);
      }, o.prototype._cancel = function() {
        this._isResolved() || !this._promise._isCancellable() || (this._values = null, this._promise._cancel());
      }, o.prototype._reject = function(s) {
        this._values = null, this._promise._rejectCallback(s, false);
      }, o.prototype._promiseFulfilled = function(s, d) {
        this._values[d] = s;
        var b = ++this._totalResolved;
        return b >= this._length ? (this._resolve(this._values), true) : false;
      }, o.prototype._promiseCancelled = function() {
        return this._cancel(), true;
      }, o.prototype._promiseRejected = function(s) {
        return this._totalResolved++, this._reject(s), true;
      }, o.prototype._resultCancelled = function() {
        if (!this._isResolved()) {
          var s = this._values;
          if (this._cancel(), s instanceof e) s.cancel();
          else for (var d = 0; d < s.length; ++d) s[d] instanceof e && s[d].cancel();
        }
      }, o.prototype.shouldCopyValues = function() {
        return true;
      }, o.prototype.getActualLength = function(s) {
        return s;
      }, o;
    }), ui;
  }
  var di, Ho;
  function tp() {
    return Ho || (Ho = 1, di = function(e) {
      var t = false, n = [];
      e.prototype._promiseCreated = function() {
      }, e.prototype._pushContext = function() {
      }, e.prototype._popContext = function() {
        return null;
      }, e._peekContext = e.prototype._peekContext = function() {
      };
      function r() {
        this._trace = new r.CapturedTrace(i());
      }
      r.prototype._pushContext = function() {
        this._trace !== void 0 && (this._trace._promiseCreated = null, n.push(this._trace));
      }, r.prototype._popContext = function() {
        if (this._trace !== void 0) {
          var c = n.pop(), o = c._promiseCreated;
          return c._promiseCreated = null, o;
        }
        return null;
      };
      function a() {
        if (t) return new r();
      }
      function i() {
        var c = n.length - 1;
        if (c >= 0) return n[c];
      }
      return r.CapturedTrace = null, r.create = a, r.deactivateLongStackTraces = function() {
      }, r.activateLongStackTraces = function() {
        var c = e.prototype._pushContext, o = e.prototype._popContext, s = e._peekContext, d = e.prototype._peekContext, b = e.prototype._promiseCreated;
        r.deactivateLongStackTraces = function() {
          e.prototype._pushContext = c, e.prototype._popContext = o, e._peekContext = s, e.prototype._peekContext = d, e.prototype._promiseCreated = b, t = false;
        }, t = true, e.prototype._pushContext = r.prototype._pushContext, e.prototype._popContext = r.prototype._popContext, e._peekContext = e.prototype._peekContext = i, e.prototype._promiseCreated = function() {
          var p = this._peekContext();
          p && p._promiseCreated == null && (p._promiseCreated = this);
        };
      }, r;
    }), di;
  }
  var li, Go;
  function np() {
    return Go || (Go = 1, li = function(e, t) {
      var n = e._getDomain, r = e._async, a = Ut().Warning, i = ke(), c = i.canAttachTrace, o, s, d = /[\\\/]bluebird[\\\/]js[\\\/](release|debug|instrumented)/, b = /\((?:timers\.js):\d+:\d+\)/, p = /[\/<\(](.+?):(\d+):(\d+)\)?\s*$/, g = null, m = null, y = false, l, u = !!(i.env("BLUEBIRD_DEBUG") != 0 && (i.env("BLUEBIRD_DEBUG") || i.env("NODE_ENV") === "development")), h = !!(i.env("BLUEBIRD_WARNINGS") != 0 && (u || i.env("BLUEBIRD_WARNINGS"))), f = !!(i.env("BLUEBIRD_LONG_STACK_TRACES") != 0 && (u || i.env("BLUEBIRD_LONG_STACK_TRACES"))), v = i.env("BLUEBIRD_W_FORGOTTEN_RETURN") != 0 && (h || !!i.env("BLUEBIRD_W_FORGOTTEN_RETURN"));
      e.prototype.suppressUnhandledRejections = function() {
        var L = this._target();
        L._bitField = L._bitField & -1048577 | 524288;
      }, e.prototype._ensurePossibleRejectionHandled = function() {
        (this._bitField & 524288) === 0 && (this._setRejectionIsUnhandled(), r.invokeLater(this._notifyUnhandledRejection, this, void 0));
      }, e.prototype._notifyUnhandledRejectionIsHandled = function() {
        Ce("rejectionHandled", o, void 0, this);
      }, e.prototype._setReturnedNonUndefined = function() {
        this._bitField = this._bitField | 268435456;
      }, e.prototype._returnedNonUndefined = function() {
        return (this._bitField & 268435456) !== 0;
      }, e.prototype._notifyUnhandledRejection = function() {
        if (this._isRejectionUnhandled()) {
          var L = this._settledValue();
          this._setUnhandledRejectionIsNotified(), Ce("unhandledRejection", s, L, this);
        }
      }, e.prototype._setUnhandledRejectionIsNotified = function() {
        this._bitField = this._bitField | 262144;
      }, e.prototype._unsetUnhandledRejectionIsNotified = function() {
        this._bitField = this._bitField & -262145;
      }, e.prototype._isUnhandledRejectionNotified = function() {
        return (this._bitField & 262144) > 0;
      }, e.prototype._setRejectionIsUnhandled = function() {
        this._bitField = this._bitField | 1048576;
      }, e.prototype._unsetRejectionIsUnhandled = function() {
        this._bitField = this._bitField & -1048577, this._isUnhandledRejectionNotified() && (this._unsetUnhandledRejectionIsNotified(), this._notifyUnhandledRejectionIsHandled());
      }, e.prototype._isRejectionUnhandled = function() {
        return (this._bitField & 1048576) > 0;
      }, e.prototype._warn = function(L, V, J) {
        return ee(L, V, J || this);
      }, e.onPossiblyUnhandledRejection = function(L) {
        var V = n();
        s = typeof L == "function" ? V === null ? L : i.domainBind(V, L) : void 0;
      }, e.onUnhandledRejectionHandled = function(L) {
        var V = n();
        o = typeof L == "function" ? V === null ? L : i.domainBind(V, L) : void 0;
      };
      var w = function() {
      };
      e.longStackTraces = function() {
        if (r.haveItemsQueued() && !K.longStackTraces) throw new Error(`cannot enable long stack traces after promises have been created

    See http://goo.gl/MqrFmX
`);
        if (!K.longStackTraces && G()) {
          var L = e.prototype._captureStackTrace, V = e.prototype._attachExtraTrace;
          K.longStackTraces = true, w = function() {
            if (r.haveItemsQueued() && !K.longStackTraces) throw new Error(`cannot enable long stack traces after promises have been created

    See http://goo.gl/MqrFmX
`);
            e.prototype._captureStackTrace = L, e.prototype._attachExtraTrace = V, t.deactivateLongStackTraces(), r.enableTrampoline(), K.longStackTraces = false;
          }, e.prototype._captureStackTrace = Y, e.prototype._attachExtraTrace = N, t.activateLongStackTraces(), r.disableTrampolineIfNecessary();
        }
      }, e.hasLongStackTraces = function() {
        return K.longStackTraces && G();
      };
      var x = function() {
        try {
          if (typeof CustomEvent == "function") {
            var L = new CustomEvent("CustomEvent");
            return i.global.dispatchEvent(L), function(V, J) {
              var ie = new CustomEvent(V.toLowerCase(), {
                detail: J,
                cancelable: true
              });
              return !i.global.dispatchEvent(ie);
            };
          } else if (typeof Event == "function") {
            var L = new Event("CustomEvent");
            return i.global.dispatchEvent(L), function(J, ie) {
              var he = new Event(J.toLowerCase(), {
                cancelable: true
              });
              return he.detail = ie, !i.global.dispatchEvent(he);
            };
          } else {
            var L = document.createEvent("CustomEvent");
            return L.initCustomEvent("testingtheevent", false, true, {}), i.global.dispatchEvent(L), function(J, ie) {
              var he = document.createEvent("CustomEvent");
              return he.initCustomEvent(J.toLowerCase(), false, true, ie), !i.global.dispatchEvent(he);
            };
          }
        } catch {
        }
        return function() {
          return false;
        };
      }(), U = function() {
        return i.isNode ? function() {
          return process.emit.apply(process, arguments);
        } : i.global ? function(L) {
          var V = "on" + L.toLowerCase(), J = i.global[V];
          return J ? (J.apply(i.global, [].slice.call(arguments, 1)), true) : false;
        } : function() {
          return false;
        };
      }();
      function E(L, V) {
        return {
          promise: V
        };
      }
      var F = {
        promiseCreated: E,
        promiseFulfilled: E,
        promiseRejected: E,
        promiseResolved: E,
        promiseCancelled: E,
        promiseChained: function(L, V, J) {
          return {
            promise: V,
            child: J
          };
        },
        warning: function(L, V) {
          return {
            warning: V
          };
        },
        unhandledRejection: function(L, V, J) {
          return {
            reason: V,
            promise: J
          };
        },
        rejectionHandled: E
      }, C = function(L) {
        var V = false;
        try {
          V = U.apply(null, arguments);
        } catch (ie) {
          r.throwLater(ie), V = true;
        }
        var J = false;
        try {
          J = x(L, F[L].apply(null, arguments));
        } catch (ie) {
          r.throwLater(ie), J = true;
        }
        return J || V;
      };
      e.config = function(L) {
        if (L = Object(L), "longStackTraces" in L && (L.longStackTraces ? e.longStackTraces() : !L.longStackTraces && e.hasLongStackTraces() && w()), "warnings" in L) {
          var V = L.warnings;
          K.warnings = !!V, v = K.warnings, i.isObject(V) && "wForgottenReturn" in V && (v = !!V.wForgottenReturn);
        }
        if ("cancellation" in L && L.cancellation && !K.cancellation) {
          if (r.haveItemsQueued()) throw new Error("cannot enable cancellation after promises are in use");
          e.prototype._clearCancellationData = P, e.prototype._propagateFrom = k, e.prototype._onCancel = B, e.prototype._setOnCancel = _, e.prototype._attachCancellationCallback = T, e.prototype._execute = z, H = k, K.cancellation = true;
        }
        return "monitoring" in L && (L.monitoring && !K.monitoring ? (K.monitoring = true, e.prototype._fireEvent = C) : !L.monitoring && K.monitoring && (K.monitoring = false, e.prototype._fireEvent = R)), e;
      };
      function R() {
        return false;
      }
      e.prototype._fireEvent = R, e.prototype._execute = function(L, V, J) {
        try {
          L(V, J);
        } catch (ie) {
          return ie;
        }
      }, e.prototype._onCancel = function() {
      }, e.prototype._setOnCancel = function(L) {
      }, e.prototype._attachCancellationCallback = function(L) {
      }, e.prototype._captureStackTrace = function() {
      }, e.prototype._attachExtraTrace = function() {
      }, e.prototype._clearCancellationData = function() {
      }, e.prototype._propagateFrom = function(L, V) {
      };
      function z(L, V, J) {
        var ie = this;
        try {
          L(V, J, function(he) {
            if (typeof he != "function") throw new TypeError("onCancel must be a function, got: " + i.toString(he));
            ie._attachCancellationCallback(he);
          });
        } catch (he) {
          return he;
        }
      }
      function T(L) {
        if (!this._isCancellable()) return this;
        var V = this._onCancel();
        V !== void 0 ? i.isArray(V) ? V.push(L) : this._setOnCancel([
          V,
          L
        ]) : this._setOnCancel(L);
      }
      function B() {
        return this._onCancelField;
      }
      function _(L) {
        this._onCancelField = L;
      }
      function P() {
        this._cancellationParent = void 0, this._onCancelField = void 0;
      }
      function k(L, V) {
        if ((V & 1) !== 0) {
          this._cancellationParent = L;
          var J = L._branchesRemainingToCancel;
          J === void 0 && (J = 0), L._branchesRemainingToCancel = J + 1;
        }
        (V & 2) !== 0 && L._isBound() && this._setBoundTo(L._boundTo);
      }
      function I(L, V) {
        (V & 2) !== 0 && L._isBound() && this._setBoundTo(L._boundTo);
      }
      var H = I;
      function q() {
        var L = this._boundTo;
        return L !== void 0 && L instanceof e ? L.isFulfilled() ? L.value() : void 0 : L;
      }
      function Y() {
        this._trace = new ae(this._peekContext());
      }
      function N(L, V) {
        if (c(L)) {
          var J = this._trace;
          if (J !== void 0 && V && (J = J._parent), J !== void 0) J.attachExtraTrace(L);
          else if (!L.__stackCleaned__) {
            var ie = me(L);
            i.notEnumerableProp(L, "stack", ie.message + `
` + ie.stack.join(`
`)), i.notEnumerableProp(L, "__stackCleaned__", true);
          }
        }
      }
      function $(L, V, J, ie, he) {
        if (L === void 0 && V !== null && v) {
          if (he !== void 0 && he._returnedNonUndefined() || (ie._bitField & 65535) === 0) return;
          J && (J = J + " ");
          var ye = "", Ue = "";
          if (V._trace) {
            for (var _e = V._trace.stack.split(`
`), Q = fe(_e), ce = Q.length - 1; ce >= 0; --ce) {
              var de = Q[ce];
              if (!b.test(de)) {
                var ue = de.match(p);
                ue && (ye = "at " + ue[1] + ":" + ue[2] + ":" + ue[3] + " ");
                break;
              }
            }
            if (Q.length > 0) {
              for (var be = Q[0], ce = 0; ce < _e.length; ++ce) if (_e[ce] === be) {
                ce > 0 && (Ue = `
` + _e[ce - 1]);
                break;
              }
            }
          }
          var ve = "a promise was created in a " + J + "handler " + ye + "but was not returned from it, see http://goo.gl/rRqMUw" + Ue;
          ie._warn(ve, true, V);
        }
      }
      function M(L, V) {
        var J = L + " is deprecated and will be removed in a future version.";
        return V && (J += " Use " + V + " instead."), ee(J);
      }
      function ee(L, V, J) {
        if (K.warnings) {
          var ie = new a(L), he;
          if (V) J._attachExtraTrace(ie);
          else if (K.longStackTraces && (he = e._peekContext())) he.attachExtraTrace(ie);
          else {
            var ye = me(ie);
            ie.stack = ye.message + `
` + ye.stack.join(`
`);
          }
          C("warning", ie) || De(ie, "", true);
        }
      }
      function te(L, V) {
        for (var J = 0; J < V.length - 1; ++J) V[J].push("From previous event:"), V[J] = V[J].join(`
`);
        return J < V.length && (V[J] = V[J].join(`
`)), L + `
` + V.join(`
`);
      }
      function se(L) {
        for (var V = 0; V < L.length; ++V) (L[V].length === 0 || V + 1 < L.length && L[V][0] === L[V + 1][0]) && (L.splice(V, 1), V--);
      }
      function le(L) {
        for (var V = L[0], J = 1; J < L.length; ++J) {
          for (var ie = L[J], he = V.length - 1, ye = V[he], Ue = -1, _e = ie.length - 1; _e >= 0; --_e) if (ie[_e] === ye) {
            Ue = _e;
            break;
          }
          for (var _e = Ue; _e >= 0; --_e) {
            var Q = ie[_e];
            if (V[he] === Q) V.pop(), he--;
            else break;
          }
          V = ie;
        }
      }
      function fe(L) {
        for (var V = [], J = 0; J < L.length; ++J) {
          var ie = L[J], he = ie === "    (No stack trace)" || g.test(ie), ye = he && Z(ie);
          he && !ye && (y && ie.charAt(0) !== " " && (ie = "    " + ie), V.push(ie));
        }
        return V;
      }
      function ge(L) {
        for (var V = L.stack.replace(/\s+$/g, "").split(`
`), J = 0; J < V.length; ++J) {
          var ie = V[J];
          if (ie === "    (No stack trace)" || g.test(ie)) break;
        }
        return J > 0 && L.name != "SyntaxError" && (V = V.slice(J)), V;
      }
      function me(L) {
        var V = L.stack, J = L.toString();
        return V = typeof V == "string" && V.length > 0 ? ge(L) : [
          "    (No stack trace)"
        ], {
          message: J,
          stack: L.name == "SyntaxError" ? V : fe(V)
        };
      }
      function De(L, V, J) {
        if (typeof console < "u") {
          var ie;
          if (i.isObject(L)) {
            var he = L.stack;
            ie = V + m(he, L);
          } else ie = V + String(L);
          typeof l == "function" ? l(ie, J) : (typeof console.log == "function" || typeof console.log == "object") && console.log(ie);
        }
      }
      function Ce(L, V, J, ie) {
        var he = false;
        try {
          typeof V == "function" && (he = true, L === "rejectionHandled" ? V(ie) : V(J, ie));
        } catch (ye) {
          r.throwLater(ye);
        }
        L === "unhandledRejection" ? !C(L, J, ie) && !he && De(J, "Unhandled rejection ") : C(L, ie);
      }
      function we(L) {
        var V;
        if (typeof L == "function") V = "[function " + (L.name || "anonymous") + "]";
        else {
          V = L && typeof L.toString == "function" ? L.toString() : i.toString(L);
          var J = /\[object [a-zA-Z0-9$_]+\]/;
          if (J.test(V)) try {
            var ie = JSON.stringify(L);
            V = ie;
          } catch {
          }
          V.length === 0 && (V = "(empty array)");
        }
        return "(<" + D(V) + ">, no stack trace)";
      }
      function D(L) {
        var V = 41;
        return L.length < V ? L : L.substr(0, V - 3) + "...";
      }
      function G() {
        return typeof ne == "function";
      }
      var Z = function() {
        return false;
      }, O = /[\/<\(]([^:\/]+):(\d+):(?:\d+)\)?\s*$/;
      function W(L) {
        var V = L.match(O);
        if (V) return {
          fileName: V[1],
          line: parseInt(V[2], 10)
        };
      }
      function X(L, V) {
        if (G()) {
          for (var J = L.stack.split(`
`), ie = V.stack.split(`
`), he = -1, ye = -1, Ue, _e, Q = 0; Q < J.length; ++Q) {
            var ce = W(J[Q]);
            if (ce) {
              Ue = ce.fileName, he = ce.line;
              break;
            }
          }
          for (var Q = 0; Q < ie.length; ++Q) {
            var ce = W(ie[Q]);
            if (ce) {
              _e = ce.fileName, ye = ce.line;
              break;
            }
          }
          he < 0 || ye < 0 || !Ue || !_e || Ue !== _e || he >= ye || (Z = function(de) {
            if (d.test(de)) return true;
            var ue = W(de);
            return !!(ue && ue.fileName === Ue && he <= ue.line && ue.line <= ye);
          });
        }
      }
      function ae(L) {
        this._parent = L, this._promisesCreated = 0;
        var V = this._length = 1 + (L === void 0 ? 0 : L._length);
        ne(this, ae), V > 32 && this.uncycle();
      }
      i.inherits(ae, Error), t.CapturedTrace = ae, ae.prototype.uncycle = function() {
        var L = this._length;
        if (!(L < 2)) {
          for (var V = [], J = {}, ie = 0, he = this; he !== void 0; ++ie) V.push(he), he = he._parent;
          L = this._length = ie;
          for (var ie = L - 1; ie >= 0; --ie) {
            var ye = V[ie].stack;
            J[ye] === void 0 && (J[ye] = ie);
          }
          for (var ie = 0; ie < L; ++ie) {
            var Ue = V[ie].stack, _e = J[Ue];
            if (_e !== void 0 && _e !== ie) {
              _e > 0 && (V[_e - 1]._parent = void 0, V[_e - 1]._length = 1), V[ie]._parent = void 0, V[ie]._length = 1;
              var Q = ie > 0 ? V[ie - 1] : this;
              _e < L - 1 ? (Q._parent = V[_e + 1], Q._parent.uncycle(), Q._length = Q._parent._length + 1) : (Q._parent = void 0, Q._length = 1);
              for (var ce = Q._length + 1, de = ie - 2; de >= 0; --de) V[de]._length = ce, ce++;
              return;
            }
          }
        }
      }, ae.prototype.attachExtraTrace = function(L) {
        if (!L.__stackCleaned__) {
          this.uncycle();
          for (var V = me(L), J = V.message, ie = [
            V.stack
          ], he = this; he !== void 0; ) ie.push(fe(he.stack.split(`
`))), he = he._parent;
          le(ie), se(ie), i.notEnumerableProp(L, "stack", te(J, ie)), i.notEnumerableProp(L, "__stackCleaned__", true);
        }
      };
      var ne = function() {
        var V = /^\s*at\s*/, J = function(Ue, _e) {
          return typeof Ue == "string" ? Ue : _e.name !== void 0 && _e.message !== void 0 ? _e.toString() : we(_e);
        };
        if (typeof Error.stackTraceLimit == "number" && typeof Error.captureStackTrace == "function") {
          Error.stackTraceLimit += 6, g = V, m = J;
          var ie = Error.captureStackTrace;
          return Z = function(Ue) {
            return d.test(Ue);
          }, function(Ue, _e) {
            Error.stackTraceLimit += 6, ie(Ue, _e), Error.stackTraceLimit -= 6;
          };
        }
        var he = new Error();
        if (typeof he.stack == "string" && he.stack.split(`
`)[0].indexOf("stackDetection@") >= 0) return g = /@/, m = J, y = true, function(_e) {
          _e.stack = new Error().stack;
        };
        var ye;
        try {
          throw new Error();
        } catch (Ue) {
          ye = "stack" in Ue;
        }
        return !("stack" in he) && ye && typeof Error.stackTraceLimit == "number" ? (g = V, m = J, function(_e) {
          Error.stackTraceLimit += 6;
          try {
            throw new Error();
          } catch (Q) {
            _e.stack = Q.stack;
          }
          Error.stackTraceLimit -= 6;
        }) : (m = function(Ue, _e) {
          return typeof Ue == "string" ? Ue : (typeof _e == "object" || typeof _e == "function") && _e.name !== void 0 && _e.message !== void 0 ? _e.toString() : we(_e);
        }, null);
      }();
      typeof console < "u" && typeof console.warn < "u" && (l = function(L) {
        console.warn(L);
      }, i.isNode && process.stderr.isTTY ? l = function(L, V) {
        var J = V ? "\x1B[33m" : "\x1B[31m";
        console.warn(J + L + `\x1B[0m
`);
      } : !i.isNode && typeof new Error().stack == "string" && (l = function(L, V) {
        console.warn("%c" + L, V ? "color: darkorange" : "color: red");
      }));
      var K = {
        warnings: h,
        longStackTraces: false,
        cancellation: false,
        monitoring: false
      };
      return f && e.longStackTraces(), {
        longStackTraces: function() {
          return K.longStackTraces;
        },
        warnings: function() {
          return K.warnings;
        },
        cancellation: function() {
          return K.cancellation;
        },
        monitoring: function() {
          return K.monitoring;
        },
        propagateFromFunction: function() {
          return H;
        },
        boundValueFunction: function() {
          return q;
        },
        checkForgottenReturns: $,
        setBounds: X,
        warn: ee,
        deprecated: M,
        CapturedTrace: ae,
        fireDomEvent: x,
        fireGlobalEvent: U
      };
    }), li;
  }
  var fi, Zo;
  function rp() {
    return Zo || (Zo = 1, fi = function(e, t) {
      var n = ke(), r = e.CancellationError, a = n.errorObj;
      function i(p, g, m) {
        this.promise = p, this.type = g, this.handler = m, this.called = false, this.cancelPromise = null;
      }
      i.prototype.isFinallyHandler = function() {
        return this.type === 0;
      };
      function c(p) {
        this.finallyHandler = p;
      }
      c.prototype._resultCancelled = function() {
        o(this.finallyHandler);
      };
      function o(p, g) {
        return p.cancelPromise != null ? (arguments.length > 1 ? p.cancelPromise._reject(g) : p.cancelPromise._cancel(), p.cancelPromise = null, true) : false;
      }
      function s() {
        return b.call(this, this.promise._target()._settledValue());
      }
      function d(p) {
        if (!o(this, p)) return a.e = p, a;
      }
      function b(p) {
        var g = this.promise, m = this.handler;
        if (!this.called) {
          this.called = true;
          var y = this.isFinallyHandler() ? m.call(g._boundValue()) : m.call(g._boundValue(), p);
          if (y !== void 0) {
            g._setReturnedNonUndefined();
            var l = t(y, g);
            if (l instanceof e) {
              if (this.cancelPromise != null) if (l._isCancelled()) {
                var u = new r("late cancellation observer");
                return g._attachExtraTrace(u), a.e = u, a;
              } else l.isPending() && l._attachCancellationCallback(new c(this));
              return l._then(s, d, void 0, this, void 0);
            }
          }
        }
        return g.isRejected() ? (o(this), a.e = p, a) : (o(this), p);
      }
      return e.prototype._passThrough = function(p, g, m, y) {
        return typeof p != "function" ? this.then() : this._then(m, y, void 0, new i(this, g, p), void 0);
      }, e.prototype.lastly = e.prototype.finally = function(p) {
        return this._passThrough(p, 0, b, b);
      }, e.prototype.tap = function(p) {
        return this._passThrough(p, 1, b);
      }, i;
    }), fi;
  }
  var hi, Ko;
  function ip() {
    return Ko || (Ko = 1, hi = function(e) {
      var t = ke(), n = nn().keys, r = t.tryCatch, a = t.errorObj;
      function i(c, o, s) {
        return function(d) {
          var b = s._boundValue();
          e: for (var p = 0; p < c.length; ++p) {
            var g = c[p];
            if (g === Error || g != null && g.prototype instanceof Error) {
              if (d instanceof g) return r(o).call(b, d);
            } else if (typeof g == "function") {
              var m = r(g).call(b, d);
              if (m === a) return m;
              if (m) return r(o).call(b, d);
            } else if (t.isObject(d)) {
              for (var y = n(g), l = 0; l < y.length; ++l) {
                var u = y[l];
                if (g[u] != d[u]) continue e;
              }
              return r(o).call(b, d);
            }
          }
          return e;
        };
      }
      return i;
    }), hi;
  }
  var pi, Yo;
  function zd() {
    if (Yo) return pi;
    Yo = 1;
    var e = ke(), t = e.maybeWrapAsError, n = Ut(), r = n.OperationalError, a = nn();
    function i(d) {
      return d instanceof Error && a.getPrototypeOf(d) === Error.prototype;
    }
    var c = /^(?:name|message|stack|cause)$/;
    function o(d) {
      var b;
      if (i(d)) {
        b = new r(d), b.name = d.name, b.message = d.message, b.stack = d.stack;
        for (var p = a.keys(d), g = 0; g < p.length; ++g) {
          var m = p[g];
          c.test(m) || (b[m] = d[m]);
        }
        return b;
      }
      return e.markAsOriginatingFromRejection(d), d;
    }
    function s(d, b) {
      return function(p, g) {
        if (d !== null) {
          if (p) {
            var m = o(t(p));
            d._attachExtraTrace(m), d._reject(m);
          } else if (!b) d._fulfill(g);
          else {
            for (var y = arguments.length, l = new Array(Math.max(y - 1, 0)), u = 1; u < y; ++u) l[u - 1] = arguments[u];
            d._fulfill(l);
          }
          d = null;
        }
      };
    }
    return pi = s, pi;
  }
  var gi, Qo;
  function ap() {
    return Qo || (Qo = 1, gi = function(e, t, n, r, a) {
      var i = ke(), c = i.tryCatch;
      e.method = function(o) {
        if (typeof o != "function") throw new e.TypeError("expecting a function but got " + i.classString(o));
        return function() {
          var s = new e(t);
          s._captureStackTrace(), s._pushContext();
          var d = c(o).apply(this, arguments), b = s._popContext();
          return a.checkForgottenReturns(d, b, "Promise.method", s), s._resolveFromSyncValue(d), s;
        };
      }, e.attempt = e.try = function(o) {
        if (typeof o != "function") return r("expecting a function but got " + i.classString(o));
        var s = new e(t);
        s._captureStackTrace(), s._pushContext();
        var d;
        if (arguments.length > 1) {
          a.deprecated("calling Promise.try with more than 1 argument");
          var b = arguments[1], p = arguments[2];
          d = i.isArray(b) ? c(o).apply(p, b) : c(o).call(p, b);
        } else d = c(o)();
        var g = s._popContext();
        return a.checkForgottenReturns(d, g, "Promise.try", s), s._resolveFromSyncValue(d), s;
      }, e.prototype._resolveFromSyncValue = function(o) {
        o === i.errorObj ? this._rejectCallback(o.e, false) : this._resolveCallback(o, true);
      };
    }), gi;
  }
  var mi, Jo;
  function op() {
    return Jo || (Jo = 1, mi = function(e, t, n, r) {
      var a = false, i = function(d, b) {
        this._reject(b);
      }, c = function(d, b) {
        b.promiseRejectionQueued = true, b.bindingPromise._then(i, i, null, this, d);
      }, o = function(d, b) {
        (this._bitField & 50397184) === 0 && this._resolveCallback(b.target);
      }, s = function(d, b) {
        b.promiseRejectionQueued || this._reject(d);
      };
      e.prototype.bind = function(d) {
        a || (a = true, e.prototype._propagateFrom = r.propagateFromFunction(), e.prototype._boundValue = r.boundValueFunction());
        var b = n(d), p = new e(t);
        p._propagateFrom(this, 1);
        var g = this._target();
        if (p._setBoundTo(b), b instanceof e) {
          var m = {
            promiseRejectionQueued: false,
            promise: p,
            target: g,
            bindingPromise: b
          };
          g._then(t, c, void 0, p, m), b._then(o, s, void 0, p, m), p._setOnCancel(b);
        } else p._resolveCallback(g);
        return p;
      }, e.prototype._setBoundTo = function(d) {
        d !== void 0 ? (this._bitField = this._bitField | 2097152, this._boundTo = d) : this._bitField = this._bitField & -2097153;
      }, e.prototype._isBound = function() {
        return (this._bitField & 2097152) === 2097152;
      }, e.bind = function(d, b) {
        return e.resolve(b).bind(d);
      };
    }), mi;
  }
  var bi, ec;
  function cp() {
    return ec || (ec = 1, bi = function(e, t, n, r) {
      var a = ke(), i = a.tryCatch, c = a.errorObj, o = e._async;
      e.prototype.break = e.prototype.cancel = function() {
        if (!r.cancellation()) return this._warn("cancellation is disabled");
        for (var s = this, d = s; s._isCancellable(); ) {
          if (!s._cancelBy(d)) {
            d._isFollowing() ? d._followee().cancel() : d._cancelBranched();
            break;
          }
          var b = s._cancellationParent;
          if (b == null || !b._isCancellable()) {
            s._isFollowing() ? s._followee().cancel() : s._cancelBranched();
            break;
          } else s._isFollowing() && s._followee().cancel(), s._setWillBeCancelled(), d = s, s = b;
        }
      }, e.prototype._branchHasCancelled = function() {
        this._branchesRemainingToCancel--;
      }, e.prototype._enoughBranchesHaveCancelled = function() {
        return this._branchesRemainingToCancel === void 0 || this._branchesRemainingToCancel <= 0;
      }, e.prototype._cancelBy = function(s) {
        return s === this ? (this._branchesRemainingToCancel = 0, this._invokeOnCancel(), true) : (this._branchHasCancelled(), this._enoughBranchesHaveCancelled() ? (this._invokeOnCancel(), true) : false);
      }, e.prototype._cancelBranched = function() {
        this._enoughBranchesHaveCancelled() && this._cancel();
      }, e.prototype._cancel = function() {
        this._isCancellable() && (this._setCancelled(), o.invoke(this._cancelPromises, this, void 0));
      }, e.prototype._cancelPromises = function() {
        this._length() > 0 && this._settlePromises();
      }, e.prototype._unsetOnCancel = function() {
        this._onCancelField = void 0;
      }, e.prototype._isCancellable = function() {
        return this.isPending() && !this._isCancelled();
      }, e.prototype.isCancellable = function() {
        return this.isPending() && !this.isCancelled();
      }, e.prototype._doInvokeOnCancel = function(s, d) {
        if (a.isArray(s)) for (var b = 0; b < s.length; ++b) this._doInvokeOnCancel(s[b], d);
        else if (s !== void 0) if (typeof s == "function") {
          if (!d) {
            var p = i(s).call(this._boundValue());
            p === c && (this._attachExtraTrace(p.e), o.throwLater(p.e));
          }
        } else s._resultCancelled(this);
      }, e.prototype._invokeOnCancel = function() {
        var s = this._onCancel();
        this._unsetOnCancel(), o.invoke(this._doInvokeOnCancel, this, s);
      }, e.prototype._invokeInternalOnCancel = function() {
        this._isCancellable() && (this._doInvokeOnCancel(this._onCancel(), true), this._unsetOnCancel());
      }, e.prototype._resultCancelled = function() {
        this.cancel();
      };
    }), bi;
  }
  var yi, tc;
  function sp() {
    return tc || (tc = 1, yi = function(e) {
      function t() {
        return this.value;
      }
      function n() {
        throw this.reason;
      }
      e.prototype.return = e.prototype.thenReturn = function(r) {
        return r instanceof e && r.suppressUnhandledRejections(), this._then(t, void 0, void 0, {
          value: r
        }, void 0);
      }, e.prototype.throw = e.prototype.thenThrow = function(r) {
        return this._then(n, void 0, void 0, {
          reason: r
        }, void 0);
      }, e.prototype.catchThrow = function(r) {
        if (arguments.length <= 1) return this._then(void 0, n, void 0, {
          reason: r
        }, void 0);
        var a = arguments[1], i = function() {
          throw a;
        };
        return this.caught(r, i);
      }, e.prototype.catchReturn = function(r) {
        if (arguments.length <= 1) return r instanceof e && r.suppressUnhandledRejections(), this._then(void 0, t, void 0, {
          value: r
        }, void 0);
        var a = arguments[1];
        a instanceof e && a.suppressUnhandledRejections();
        var i = function() {
          return a;
        };
        return this.caught(r, i);
      };
    }), yi;
  }
  var vi, nc;
  function up() {
    return nc || (nc = 1, vi = function(e) {
      function t(s) {
        s !== void 0 ? (s = s._target(), this._bitField = s._bitField, this._settledValueField = s._isFateSealed() ? s._settledValue() : void 0) : (this._bitField = 0, this._settledValueField = void 0);
      }
      t.prototype._settledValue = function() {
        return this._settledValueField;
      };
      var n = t.prototype.value = function() {
        if (!this.isFulfilled()) throw new TypeError(`cannot get fulfillment value of a non-fulfilled promise

    See http://goo.gl/MqrFmX
`);
        return this._settledValue();
      }, r = t.prototype.error = t.prototype.reason = function() {
        if (!this.isRejected()) throw new TypeError(`cannot get rejection reason of a non-rejected promise

    See http://goo.gl/MqrFmX
`);
        return this._settledValue();
      }, a = t.prototype.isFulfilled = function() {
        return (this._bitField & 33554432) !== 0;
      }, i = t.prototype.isRejected = function() {
        return (this._bitField & 16777216) !== 0;
      }, c = t.prototype.isPending = function() {
        return (this._bitField & 50397184) === 0;
      }, o = t.prototype.isResolved = function() {
        return (this._bitField & 50331648) !== 0;
      };
      t.prototype.isCancelled = function() {
        return (this._bitField & 8454144) !== 0;
      }, e.prototype.__isCancelled = function() {
        return (this._bitField & 65536) === 65536;
      }, e.prototype._isCancelled = function() {
        return this._target().__isCancelled();
      }, e.prototype.isCancelled = function() {
        return (this._target()._bitField & 8454144) !== 0;
      }, e.prototype.isPending = function() {
        return c.call(this._target());
      }, e.prototype.isRejected = function() {
        return i.call(this._target());
      }, e.prototype.isFulfilled = function() {
        return a.call(this._target());
      }, e.prototype.isResolved = function() {
        return o.call(this._target());
      }, e.prototype.value = function() {
        return n.call(this._target());
      }, e.prototype.reason = function() {
        var s = this._target();
        return s._unsetRejectionIsUnhandled(), r.call(s);
      }, e.prototype._value = function() {
        return this._settledValue();
      }, e.prototype._reason = function() {
        return this._unsetRejectionIsUnhandled(), this._settledValue();
      }, e.PromiseInspection = t;
    }), vi;
  }
  var Di, rc;
  function dp() {
    return rc || (rc = 1, Di = function(e, t, n, r, a, i) {
      var c = ke(), o = c.canEvaluate, s = c.tryCatch, d = c.errorObj, b;
      if (o) {
        for (var p = function(f) {
          return new Function("value", "holder", `                             
	            'use strict';                                                    
	            holder.pIndex = value;                                           
	            holder.checkFulfillment(this);                                   
	            `.replace(/Index/g, f));
        }, g = function(f) {
          return new Function("promise", "holder", `                           
	            'use strict';                                                    
	            holder.pIndex = promise;                                         
	            `.replace(/Index/g, f));
        }, m = function(f) {
          for (var v = new Array(f), w = 0; w < v.length; ++w) v[w] = "this.p" + (w + 1);
          var x = v.join(" = ") + " = null;", U = `var promise;
` + v.map(function(R) {
            return `                                                         
	                promise = ` + R + `;                                      
	                if (promise instanceof Promise) {                            
	                    promise.cancel();                                        
	                }                                                            
	            `;
          }).join(`
`), E = v.join(", "), F = "Holder$" + f, C = `return function(tryCatch, errorObj, Promise, async) {    
	            'use strict';                                                    
	            function [TheName](fn) {                                         
	                [TheProperties]                                              
	                this.fn = fn;                                                
	                this.asyncNeeded = true;                                     
	                this.now = 0;                                                
	            }                                                                
	                                                                             
	            [TheName].prototype._callFunction = function(promise) {          
	                promise._pushContext();                                      
	                var ret = tryCatch(this.fn)([ThePassedArguments]);           
	                promise._popContext();                                       
	                if (ret === errorObj) {                                      
	                    promise._rejectCallback(ret.e, false);                   
	                } else {                                                     
	                    promise._resolveCallback(ret);                           
	                }                                                            
	            };                                                               
	                                                                             
	            [TheName].prototype.checkFulfillment = function(promise) {       
	                var now = ++this.now;                                        
	                if (now === [TheTotal]) {                                    
	                    if (this.asyncNeeded) {                                  
	                        async.invoke(this._callFunction, this, promise);     
	                    } else {                                                 
	                        this._callFunction(promise);                         
	                    }                                                        
	                                                                             
	                }                                                            
	            };                                                               
	                                                                             
	            [TheName].prototype._resultCancelled = function() {              
	                [CancellationCode]                                           
	            };                                                               
	                                                                             
	            return [TheName];                                                
	        }(tryCatch, errorObj, Promise, async);                               
	        `;
          return C = C.replace(/\[TheName\]/g, F).replace(/\[TheTotal\]/g, f).replace(/\[ThePassedArguments\]/g, E).replace(/\[TheProperties\]/g, x).replace(/\[CancellationCode\]/g, U), new Function("tryCatch", "errorObj", "Promise", "async", C)(s, d, e, a);
        }, y = [], l = [], u = [], h = 0; h < 8; ++h) y.push(m(h + 1)), l.push(p(h + 1)), u.push(g(h + 1));
        b = function(f) {
          this._reject(f);
        };
      }
      e.join = function() {
        var f = arguments.length - 1, v;
        if (f > 0 && typeof arguments[f] == "function" && (v = arguments[f], f <= 8 && o)) {
          var _ = new e(r);
          _._captureStackTrace();
          for (var w = y[f - 1], x = new w(v), U = l, E = 0; E < f; ++E) {
            var F = n(arguments[E], _);
            if (F instanceof e) {
              F = F._target();
              var C = F._bitField;
              (C & 50397184) === 0 ? (F._then(U[E], b, void 0, _, x), u[E](F, x), x.asyncNeeded = false) : (C & 33554432) !== 0 ? U[E].call(_, F._value(), x) : (C & 16777216) !== 0 ? _._reject(F._reason()) : _._cancel();
            } else U[E].call(_, F, x);
          }
          if (!_._isFateSealed()) {
            if (x.asyncNeeded) {
              var R = i();
              R !== null && (x.fn = c.domainBind(R, x.fn));
            }
            _._setAsyncGuaranteed(), _._setOnCancel(x);
          }
          return _;
        }
        for (var z = arguments.length, T = new Array(z), B = 0; B < z; ++B) T[B] = arguments[B];
        v && T.pop();
        var _ = new t(T).promise();
        return v !== void 0 ? _.spread(v) : _;
      };
    }), Di;
  }
  var xi, ic;
  function lp() {
    return ic || (ic = 1, xi = function(e, t, n, r, a, i) {
      var c = e._getDomain, o = ke(), s = o.tryCatch, d = o.errorObj, b = e._async;
      function p(m, y, l, u) {
        this.constructor$(m), this._promise._captureStackTrace();
        var h = c();
        this._callback = h === null ? y : o.domainBind(h, y), this._preservedValues = u === a ? new Array(this.length()) : null, this._limit = l, this._inFlight = 0, this._queue = [], b.invoke(this._asyncInit, this, void 0);
      }
      o.inherits(p, t), p.prototype._asyncInit = function() {
        this._init$(void 0, -2);
      }, p.prototype._init = function() {
      }, p.prototype._promiseFulfilled = function(m, y) {
        var l = this._values, u = this.length(), h = this._preservedValues, f = this._limit;
        if (y < 0) {
          if (y = y * -1 - 1, l[y] = m, f >= 1 && (this._inFlight--, this._drainQueue(), this._isResolved())) return true;
        } else {
          if (f >= 1 && this._inFlight >= f) return l[y] = m, this._queue.push(y), false;
          h !== null && (h[y] = m);
          var v = this._promise, w = this._callback, x = v._boundValue();
          v._pushContext();
          var U = s(w).call(x, m, y, u), E = v._popContext();
          if (i.checkForgottenReturns(U, E, h !== null ? "Promise.filter" : "Promise.map", v), U === d) return this._reject(U.e), true;
          var F = r(U, this._promise);
          if (F instanceof e) {
            F = F._target();
            var C = F._bitField;
            if ((C & 50397184) === 0) return f >= 1 && this._inFlight++, l[y] = F, F._proxy(this, (y + 1) * -1), false;
            if ((C & 33554432) !== 0) U = F._value();
            else return (C & 16777216) !== 0 ? (this._reject(F._reason()), true) : (this._cancel(), true);
          }
          l[y] = U;
        }
        var R = ++this._totalResolved;
        return R >= u ? (h !== null ? this._filter(l, h) : this._resolve(l), true) : false;
      }, p.prototype._drainQueue = function() {
        for (var m = this._queue, y = this._limit, l = this._values; m.length > 0 && this._inFlight < y; ) {
          if (this._isResolved()) return;
          var u = m.pop();
          this._promiseFulfilled(l[u], u);
        }
      }, p.prototype._filter = function(m, y) {
        for (var l = y.length, u = new Array(l), h = 0, f = 0; f < l; ++f) m[f] && (u[h++] = y[f]);
        u.length = h, this._resolve(u);
      }, p.prototype.preservedValues = function() {
        return this._preservedValues;
      };
      function g(m, y, l, u) {
        if (typeof y != "function") return n("expecting a function but got " + o.classString(y));
        var h = 0;
        if (l !== void 0) if (typeof l == "object" && l !== null) {
          if (typeof l.concurrency != "number") return e.reject(new TypeError("'concurrency' must be a number but it is " + o.classString(l.concurrency)));
          h = l.concurrency;
        } else return e.reject(new TypeError("options argument must be an object but it is " + o.classString(l)));
        return h = typeof h == "number" && isFinite(h) && h >= 1 ? h : 0, new p(m, y, h, u).promise();
      }
      e.prototype.map = function(m, y) {
        return g(this, m, y, null);
      }, e.map = function(m, y, l, u) {
        return g(m, y, l, u);
      };
    }), xi;
  }
  var _i, ac;
  function fp() {
    if (ac) return _i;
    ac = 1;
    var e = Object.create;
    if (e) {
      var t = e(null), n = e(null);
      t[" size"] = n[" size"] = 0;
    }
    return _i = function(r) {
      var a = ke(), i = a.canEvaluate, c = a.isIdentifier, o, s;
      {
        var d = function(u) {
          return new Function("ensureMethod", `                                    
	        return function(obj) {                                               
	            'use strict'                                                     
	            var len = this.length;                                           
	            ensureMethod(obj, 'methodName');                                 
	            switch(len) {                                                    
	                case 1: return obj.methodName(this[0]);                      
	                case 2: return obj.methodName(this[0], this[1]);             
	                case 3: return obj.methodName(this[0], this[1], this[2]);    
	                case 0: return obj.methodName();                             
	                default:                                                     
	                    return obj.methodName.apply(obj, this);                  
	            }                                                                
	        };                                                                   
	        `.replace(/methodName/g, u))(g);
        }, b = function(u) {
          return new Function("obj", `                                             
	        'use strict';                                                        
	        return obj.propertyName;                                             
	        `.replace("propertyName", u));
        }, p = function(u, h, f) {
          var v = f[u];
          if (typeof v != "function") {
            if (!c(u)) return null;
            if (v = h(u), f[u] = v, f[" size"]++, f[" size"] > 512) {
              for (var w = Object.keys(f), x = 0; x < 256; ++x) delete f[w[x]];
              f[" size"] = w.length - 256;
            }
          }
          return v;
        };
        o = function(u) {
          return p(u, d, t);
        }, s = function(u) {
          return p(u, b, n);
        };
      }
      function g(u, h) {
        var f;
        if (u != null && (f = u[h]), typeof f != "function") {
          var v = "Object " + a.classString(u) + " has no method '" + a.toString(h) + "'";
          throw new r.TypeError(v);
        }
        return f;
      }
      function m(u) {
        var h = this.pop(), f = g(u, h);
        return f.apply(u, this);
      }
      r.prototype.call = function(u) {
        for (var h = arguments.length, f = new Array(Math.max(h - 1, 0)), v = 1; v < h; ++v) f[v - 1] = arguments[v];
        if (i) {
          var w = o(u);
          if (w !== null) return this._then(w, void 0, void 0, f, void 0);
        }
        return f.push(u), this._then(m, void 0, void 0, f, void 0);
      };
      function y(u) {
        return u[this];
      }
      function l(u) {
        var h = +this;
        return h < 0 && (h = Math.max(0, h + u.length)), u[h];
      }
      r.prototype.get = function(u) {
        var h = typeof u == "number", f;
        if (h) f = l;
        else if (i) {
          var v = s(u);
          f = v !== null ? v : y;
        } else f = y;
        return this._then(f, void 0, void 0, u, void 0);
      };
    }, _i;
  }
  var wi, oc;
  function hp() {
    return oc || (oc = 1, wi = function(e, t, n, r, a, i) {
      var c = ke(), o = Ut().TypeError, s = ke().inherits, d = c.errorObj, b = c.tryCatch, p = {};
      function g(v) {
        setTimeout(function() {
          throw v;
        }, 0);
      }
      function m(v) {
        var w = n(v);
        return w !== v && typeof v._isDisposable == "function" && typeof v._getDisposer == "function" && v._isDisposable() && w._setDisposable(v._getDisposer()), w;
      }
      function y(v, w) {
        var x = 0, U = v.length, E = new e(a);
        function F() {
          if (x >= U) return E._fulfill();
          var C = m(v[x++]);
          if (C instanceof e && C._isDisposable()) {
            try {
              C = n(C._getDisposer().tryDispose(w), v.promise);
            } catch (R) {
              return g(R);
            }
            if (C instanceof e) return C._then(F, g, null, null, null);
          }
          F();
        }
        return F(), E;
      }
      function l(v, w, x) {
        this._data = v, this._promise = w, this._context = x;
      }
      l.prototype.data = function() {
        return this._data;
      }, l.prototype.promise = function() {
        return this._promise;
      }, l.prototype.resource = function() {
        return this.promise().isFulfilled() ? this.promise().value() : p;
      }, l.prototype.tryDispose = function(v) {
        var w = this.resource(), x = this._context;
        x !== void 0 && x._pushContext();
        var U = w !== p ? this.doDispose(w, v) : null;
        return x !== void 0 && x._popContext(), this._promise._unsetDisposable(), this._data = null, U;
      }, l.isDisposer = function(v) {
        return v != null && typeof v.resource == "function" && typeof v.tryDispose == "function";
      };
      function u(v, w, x) {
        this.constructor$(v, w, x);
      }
      s(u, l), u.prototype.doDispose = function(v, w) {
        var x = this.data();
        return x.call(v, v, w);
      };
      function h(v) {
        return l.isDisposer(v) ? (this.resources[this.index]._setDisposable(v), v.promise()) : v;
      }
      function f(v) {
        this.length = v, this.promise = null, this[v - 1] = null;
      }
      f.prototype._resultCancelled = function() {
        for (var v = this.length, w = 0; w < v; ++w) {
          var x = this[w];
          x instanceof e && x.cancel();
        }
      }, e.using = function() {
        var v = arguments.length;
        if (v < 2) return t("you must pass at least 2 arguments to Promise.using");
        var w = arguments[v - 1];
        if (typeof w != "function") return t("expecting a function but got " + c.classString(w));
        var x, U = true;
        v === 2 && Array.isArray(arguments[0]) ? (x = arguments[0], v = x.length, U = false) : (x = arguments, v--);
        for (var E = new f(v), F = 0; F < v; ++F) {
          var C = x[F];
          if (l.isDisposer(C)) {
            var R = C;
            C = C.promise(), C._setDisposable(R);
          } else {
            var z = n(C);
            z instanceof e && (C = z._then(h, null, null, {
              resources: E,
              index: F
            }, void 0));
          }
          E[F] = C;
        }
        for (var T = new Array(E.length), F = 0; F < T.length; ++F) T[F] = e.resolve(E[F]).reflect();
        var B = e.all(T).then(function(P) {
          for (var k = 0; k < P.length; ++k) {
            var I = P[k];
            if (I.isRejected()) return d.e = I.error(), d;
            if (!I.isFulfilled()) {
              B.cancel();
              return;
            }
            P[k] = I.value();
          }
          _._pushContext(), w = b(w);
          var H = U ? w.apply(void 0, P) : w(P), q = _._popContext();
          return i.checkForgottenReturns(H, q, "Promise.using", _), H;
        }), _ = B.lastly(function() {
          var P = new e.PromiseInspection(B);
          return y(E, P);
        });
        return E.promise = _, _._setOnCancel(E), _;
      }, e.prototype._setDisposable = function(v) {
        this._bitField = this._bitField | 131072, this._disposer = v;
      }, e.prototype._isDisposable = function() {
        return (this._bitField & 131072) > 0;
      }, e.prototype._getDisposer = function() {
        return this._disposer;
      }, e.prototype._unsetDisposable = function() {
        this._bitField = this._bitField & -131073, this._disposer = void 0;
      }, e.prototype.disposer = function(v) {
        if (typeof v == "function") return new u(v, this, r());
        throw new o();
      };
    }), wi;
  }
  var Ui, cc;
  function pp() {
    return cc || (cc = 1, Ui = function(e, t, n) {
      var r = ke(), a = e.TimeoutError;
      function i(p) {
        this.handle = p;
      }
      i.prototype._resultCancelled = function() {
        clearTimeout(this.handle);
      };
      var c = function(p) {
        return o(+this).thenReturn(p);
      }, o = e.delay = function(p, g) {
        var m, y;
        return g !== void 0 ? (m = e.resolve(g)._then(c, null, null, p, void 0), n.cancellation() && g instanceof e && m._setOnCancel(g)) : (m = new e(t), y = setTimeout(function() {
          m._fulfill();
        }, +p), n.cancellation() && m._setOnCancel(new i(y)), m._captureStackTrace()), m._setAsyncGuaranteed(), m;
      };
      e.prototype.delay = function(p) {
        return o(p, this);
      };
      var s = function(p, g, m) {
        var y;
        typeof g != "string" ? g instanceof Error ? y = g : y = new a("operation timed out") : y = new a(g), r.markAsOriginatingFromRejection(y), p._attachExtraTrace(y), p._reject(y), m == null ? void 0 : m.cancel();
      };
      function d(p) {
        return clearTimeout(this.handle), p;
      }
      function b(p) {
        throw clearTimeout(this.handle), p;
      }
      e.prototype.timeout = function(p, g) {
        p = +p;
        var m, y, l = new i(setTimeout(function() {
          m.isPending() && s(m, g, y);
        }, p));
        return n.cancellation() ? (y = this.then(), m = y._then(d, b, void 0, l, void 0), m._setOnCancel(l)) : m = this._then(d, b, void 0, l, void 0), m;
      };
    }), Ui;
  }
  var Ti, sc;
  function gp() {
    return sc || (sc = 1, Ti = function(e, t, n, r, a, i) {
      var c = Ut(), o = c.TypeError, s = ke(), d = s.errorObj, b = s.tryCatch, p = [];
      function g(y, l, u) {
        for (var h = 0; h < l.length; ++h) {
          u._pushContext();
          var f = b(l[h])(y);
          if (u._popContext(), f === d) {
            u._pushContext();
            var v = e.reject(d.e);
            return u._popContext(), v;
          }
          var w = r(f, u);
          if (w instanceof e) return w;
        }
        return null;
      }
      function m(y, l, u, h) {
        if (i.cancellation()) {
          var f = new e(n), v = this._finallyPromise = new e(n);
          this._promise = f.lastly(function() {
            return v;
          }), f._captureStackTrace(), f._setOnCancel(this);
        } else {
          var w = this._promise = new e(n);
          w._captureStackTrace();
        }
        this._stack = h, this._generatorFunction = y, this._receiver = l, this._generator = void 0, this._yieldHandlers = typeof u == "function" ? [
          u
        ].concat(p) : p, this._yieldedPromise = null, this._cancellationPhase = false;
      }
      s.inherits(m, a), m.prototype._isResolved = function() {
        return this._promise === null;
      }, m.prototype._cleanup = function() {
        this._promise = this._generator = null, i.cancellation() && this._finallyPromise !== null && (this._finallyPromise._fulfill(), this._finallyPromise = null);
      }, m.prototype._promiseCancelled = function() {
        if (!this._isResolved()) {
          var y = typeof this._generator.return < "u", l;
          if (y) this._promise._pushContext(), l = b(this._generator.return).call(this._generator, void 0), this._promise._popContext();
          else {
            var u = new e.CancellationError("generator .return() sentinel");
            e.coroutine.returnSentinel = u, this._promise._attachExtraTrace(u), this._promise._pushContext(), l = b(this._generator.throw).call(this._generator, u), this._promise._popContext();
          }
          this._cancellationPhase = true, this._yieldedPromise = null, this._continue(l);
        }
      }, m.prototype._promiseFulfilled = function(y) {
        this._yieldedPromise = null, this._promise._pushContext();
        var l = b(this._generator.next).call(this._generator, y);
        this._promise._popContext(), this._continue(l);
      }, m.prototype._promiseRejected = function(y) {
        this._yieldedPromise = null, this._promise._attachExtraTrace(y), this._promise._pushContext();
        var l = b(this._generator.throw).call(this._generator, y);
        this._promise._popContext(), this._continue(l);
      }, m.prototype._resultCancelled = function() {
        if (this._yieldedPromise instanceof e) {
          var y = this._yieldedPromise;
          this._yieldedPromise = null, y.cancel();
        }
      }, m.prototype.promise = function() {
        return this._promise;
      }, m.prototype._run = function() {
        this._generator = this._generatorFunction.call(this._receiver), this._receiver = this._generatorFunction = void 0, this._promiseFulfilled(void 0);
      }, m.prototype._continue = function(y) {
        var l = this._promise;
        if (y === d) return this._cleanup(), this._cancellationPhase ? l.cancel() : l._rejectCallback(y.e, false);
        var u = y.value;
        if (y.done === true) return this._cleanup(), this._cancellationPhase ? l.cancel() : l._resolveCallback(u);
        var h = r(u, this._promise);
        if (!(h instanceof e) && (h = g(h, this._yieldHandlers, this._promise), h === null)) {
          this._promiseRejected(new o(`A value %s was yielded that could not be treated as a promise

    See http://goo.gl/MqrFmX

`.replace("%s", u) + `From coroutine:
` + this._stack.split(`
`).slice(1, -7).join(`
`)));
          return;
        }
        h = h._target();
        var f = h._bitField;
        (f & 50397184) === 0 ? (this._yieldedPromise = h, h._proxy(this, null)) : (f & 33554432) !== 0 ? e._async.invoke(this._promiseFulfilled, this, h._value()) : (f & 16777216) !== 0 ? e._async.invoke(this._promiseRejected, this, h._reason()) : this._promiseCancelled();
      }, e.coroutine = function(y, l) {
        if (typeof y != "function") throw new o(`generatorFunction must be a function

    See http://goo.gl/MqrFmX
`);
        var u = Object(l).yieldHandler, h = m, f = new Error().stack;
        return function() {
          var v = y.apply(this, arguments), w = new h(void 0, void 0, u, f), x = w.promise();
          return w._generator = v, w._promiseFulfilled(void 0), x;
        };
      }, e.coroutine.addYieldHandler = function(y) {
        if (typeof y != "function") throw new o("expecting a function but got " + s.classString(y));
        p.push(y);
      }, e.spawn = function(y) {
        if (i.deprecated("Promise.spawn()", "Promise.coroutine()"), typeof y != "function") return t(`generatorFunction must be a function

    See http://goo.gl/MqrFmX
`);
        var l = new m(y, this), u = l.promise();
        return l._run(e.spawn), u;
      };
    }), Ti;
  }
  var Ei, uc;
  function mp() {
    return uc || (uc = 1, Ei = function(e) {
      var t = ke(), n = e._async, r = t.tryCatch, a = t.errorObj;
      function i(s, d) {
        var b = this;
        if (!t.isArray(s)) return c.call(b, s, d);
        var p = r(d).apply(b._boundValue(), [
          null
        ].concat(s));
        p === a && n.throwLater(p.e);
      }
      function c(s, d) {
        var b = this, p = b._boundValue(), g = s === void 0 ? r(d).call(p, null) : r(d).call(p, null, s);
        g === a && n.throwLater(g.e);
      }
      function o(s, d) {
        var b = this;
        if (!s) {
          var p = new Error(s + "");
          p.cause = s, s = p;
        }
        var g = r(d).call(b._boundValue(), s);
        g === a && n.throwLater(g.e);
      }
      e.prototype.asCallback = e.prototype.nodeify = function(s, d) {
        if (typeof s == "function") {
          var b = c;
          d !== void 0 && Object(d).spread && (b = i), this._then(b, o, void 0, this, s);
        }
        return this;
      };
    }), Ei;
  }
  var Ci, dc;
  function bp() {
    return dc || (dc = 1, Ci = function(e, t) {
      var n = {}, r = ke(), a = zd(), i = r.withAppended, c = r.maybeWrapAsError, o = r.canEvaluate, s = Ut().TypeError, d = "Async", b = {
        __isPromisified__: true
      }, p = [
        "arity",
        "length",
        "name",
        "arguments",
        "caller",
        "callee",
        "prototype",
        "__isPromisified__"
      ], g = new RegExp("^(?:" + p.join("|") + ")$"), m = function(B) {
        return r.isIdentifier(B) && B.charAt(0) !== "_" && B !== "constructor";
      };
      function y(B) {
        return !g.test(B);
      }
      function l(B) {
        try {
          return B.__isPromisified__ === true;
        } catch {
          return false;
        }
      }
      function u(B, _, P) {
        var k = r.getDataPropertyOrDefault(B, _ + P, b);
        return k ? l(k) : false;
      }
      function h(B, _, P) {
        for (var k = 0; k < B.length; k += 2) {
          var I = B[k];
          if (P.test(I)) {
            for (var H = I.replace(P, ""), q = 0; q < B.length; q += 2) if (B[q] === H) throw new s(`Cannot promisify an API that has normal methods with '%s'-suffix

    See http://goo.gl/MqrFmX
`.replace("%s", _));
          }
        }
      }
      function f(B, _, P, k) {
        for (var I = r.inheritedDataKeys(B), H = [], q = 0; q < I.length; ++q) {
          var Y = I[q], N = B[Y], $ = k === m ? true : m(Y);
          typeof N == "function" && !l(N) && !u(B, Y, _) && k(Y, N, B, $) && H.push(Y, N);
        }
        return h(H, _, P), H;
      }
      var v = function(B) {
        return B.replace(/([$])/, "\\$");
      }, w;
      {
        var x = function(B) {
          for (var _ = [
            B
          ], P = Math.max(0, B - 1 - 3), k = B - 1; k >= P; --k) _.push(k);
          for (var k = B + 1; k <= 3; ++k) _.push(k);
          return _;
        }, U = function(B) {
          return r.filledRange(B, "_arg", "");
        }, E = function(B) {
          return r.filledRange(Math.max(B, 3), "_arg", "");
        }, F = function(B) {
          return typeof B.length == "number" ? Math.max(Math.min(B.length, 1024), 0) : 0;
        };
        w = function(B, _, P, k, I, H) {
          var q = Math.max(0, F(k) - 1), Y = x(q), N = typeof B == "string" || _ === n;
          function $(se) {
            var le = U(se).join(", "), fe = se > 0 ? ", " : "", ge;
            return N ? ge = `ret = callback.call(this, {{args}}, nodeback); break;
` : ge = _ === void 0 ? `ret = callback({{args}}, nodeback); break;
` : `ret = callback.call(receiver, {{args}}, nodeback); break;
`, ge.replace("{{args}}", le).replace(", ", fe);
          }
          function M() {
            for (var se = "", le = 0; le < Y.length; ++le) se += "case " + Y[le] + ":" + $(Y[le]);
            return se += `                                                             
	        default:                                                             
	            var args = new Array(len + 1);                                   
	            var i = 0;                                                       
	            for (var i = 0; i < len; ++i) {                                  
	               args[i] = arguments[i];                                       
	            }                                                                
	            args[i] = nodeback;                                              
	            [CodeForCall]                                                    
	            break;                                                           
	        `.replace("[CodeForCall]", N ? `ret = callback.apply(this, args);
` : `ret = callback.apply(receiver, args);
`), se;
          }
          var ee = typeof B == "string" ? "this != null ? this['" + B + "'] : fn" : "fn", te = `'use strict';                                                
	        var ret = function (Parameters) {                                    
	            'use strict';                                                    
	            var len = arguments.length;                                      
	            var promise = new Promise(INTERNAL);                             
	            promise._captureStackTrace();                                    
	            var nodeback = nodebackForPromise(promise, ` + H + `);   
	            var ret;                                                         
	            var callback = tryCatch([GetFunctionCode]);                      
	            switch(len) {                                                    
	                [CodeForSwitchCase]                                          
	            }                                                                
	            if (ret === errorObj) {                                          
	                promise._rejectCallback(maybeWrapAsError(ret.e), true, true);
	            }                                                                
	            if (!promise._isFateSealed()) promise._setAsyncGuaranteed();     
	            return promise;                                                  
	        };                                                                   
	        notEnumerableProp(ret, '__isPromisified__', true);                   
	        return ret;                                                          
	    `.replace("[CodeForSwitchCase]", M()).replace("[GetFunctionCode]", ee);
          return te = te.replace("Parameters", E(q)), new Function("Promise", "fn", "receiver", "withAppended", "maybeWrapAsError", "nodebackForPromise", "tryCatch", "errorObj", "notEnumerableProp", "INTERNAL", te)(e, k, _, i, c, a, r.tryCatch, r.errorObj, r.notEnumerableProp, t);
        };
      }
      function C(B, _, P, k, I, H) {
        var q = /* @__PURE__ */ function() {
          return this;
        }(), Y = B;
        typeof Y == "string" && (B = k);
        function N() {
          var $ = _;
          _ === n && ($ = this);
          var M = new e(t);
          M._captureStackTrace();
          var ee = typeof Y == "string" && this !== q ? this[Y] : B, te = a(M, H);
          try {
            ee.apply($, i(arguments, te));
          } catch (se) {
            M._rejectCallback(c(se), true, true);
          }
          return M._isFateSealed() || M._setAsyncGuaranteed(), M;
        }
        return r.notEnumerableProp(N, "__isPromisified__", true), N;
      }
      var R = o ? w : C;
      function z(B, _, P, k, I) {
        for (var H = new RegExp(v(_) + "$"), q = f(B, _, H, P), Y = 0, N = q.length; Y < N; Y += 2) {
          var $ = q[Y], M = q[Y + 1], ee = $ + _;
          if (k === R) B[ee] = R($, n, $, M, _, I);
          else {
            var te = k(M, function() {
              return R($, n, $, M, _, I);
            });
            r.notEnumerableProp(te, "__isPromisified__", true), B[ee] = te;
          }
        }
        return r.toFastProperties(B), B;
      }
      function T(B, _, P) {
        return R(B, _, void 0, B, null, P);
      }
      e.promisify = function(B, _) {
        if (typeof B != "function") throw new s("expecting a function but got " + r.classString(B));
        if (l(B)) return B;
        _ = Object(_);
        var P = _.context === void 0 ? n : _.context, k = !!_.multiArgs, I = T(B, P, k);
        return r.copyDescriptors(B, I, y), I;
      }, e.promisifyAll = function(B, _) {
        if (typeof B != "function" && typeof B != "object") throw new s(`the target of promisifyAll must be an object or a function

    See http://goo.gl/MqrFmX
`);
        _ = Object(_);
        var P = !!_.multiArgs, k = _.suffix;
        typeof k != "string" && (k = d);
        var I = _.filter;
        typeof I != "function" && (I = m);
        var H = _.promisifier;
        if (typeof H != "function" && (H = R), !r.isIdentifier(k)) throw new RangeError(`suffix must be a valid identifier

    See http://goo.gl/MqrFmX
`);
        for (var q = r.inheritedDataKeys(B), Y = 0; Y < q.length; ++Y) {
          var N = B[q[Y]];
          q[Y] !== "constructor" && r.isClass(N) && (z(N.prototype, k, I, H, P), z(N, k, I, H, P));
        }
        return z(B, k, I, H, P);
      };
    }), Ci;
  }
  var Ai, lc;
  function yp() {
    return lc || (lc = 1, Ai = function(e, t, n, r) {
      var a = ke(), i = a.isObject, c = nn(), o;
      typeof Map == "function" && (o = Map);
      var s = /* @__PURE__ */ function() {
        var g = 0, m = 0;
        function y(l, u) {
          this[g] = l, this[g + m] = u, g++;
        }
        return function(u) {
          m = u.size, g = 0;
          var h = new Array(u.size * 2);
          return u.forEach(y, h), h;
        };
      }(), d = function(g) {
        for (var m = new o(), y = g.length / 2 | 0, l = 0; l < y; ++l) {
          var u = g[y + l], h = g[l];
          m.set(u, h);
        }
        return m;
      };
      function b(g) {
        var m = false, y;
        if (o !== void 0 && g instanceof o) y = s(g), m = true;
        else {
          var l = c.keys(g), u = l.length;
          y = new Array(u * 2);
          for (var h = 0; h < u; ++h) {
            var f = l[h];
            y[h] = g[f], y[h + u] = f;
          }
        }
        this.constructor$(y), this._isMap = m, this._init$(void 0, -3);
      }
      a.inherits(b, t), b.prototype._init = function() {
      }, b.prototype._promiseFulfilled = function(g, m) {
        this._values[m] = g;
        var y = ++this._totalResolved;
        if (y >= this._length) {
          var l;
          if (this._isMap) l = d(this._values);
          else {
            l = {};
            for (var u = this.length(), h = 0, f = this.length(); h < f; ++h) l[this._values[h + u]] = this._values[h];
          }
          return this._resolve(l), true;
        }
        return false;
      }, b.prototype.shouldCopyValues = function() {
        return false;
      }, b.prototype.getActualLength = function(g) {
        return g >> 1;
      };
      function p(g) {
        var m, y = n(g);
        if (i(y)) y instanceof e ? m = y._then(e.props, void 0, void 0, void 0, void 0) : m = new b(y).promise();
        else return r(`cannot await properties of a non-object

    See http://goo.gl/MqrFmX
`);
        return y instanceof e && m._propagateFrom(y, 2), m;
      }
      e.prototype.props = function() {
        return p(this);
      }, e.props = function(g) {
        return p(g);
      };
    }), Ai;
  }
  var Fi, fc;
  function vp() {
    return fc || (fc = 1, Fi = function(e, t, n, r) {
      var a = ke(), i = function(o) {
        return o.then(function(s) {
          return c(s, o);
        });
      };
      function c(o, s) {
        var d = n(o);
        if (d instanceof e) return i(d);
        if (o = a.asArray(o), o === null) return r("expecting an array or an iterable object but got " + a.classString(o));
        var b = new e(t);
        s !== void 0 && b._propagateFrom(s, 3);
        for (var p = b._fulfill, g = b._reject, m = 0, y = o.length; m < y; ++m) {
          var l = o[m];
          l === void 0 && !(m in o) || e.cast(l)._then(p, g, void 0, b, null);
        }
        return b;
      }
      e.race = function(o) {
        return c(o, void 0);
      }, e.prototype.race = function() {
        return c(this, void 0);
      };
    }), Fi;
  }
  var Si, hc;
  function Dp() {
    return hc || (hc = 1, Si = function(e, t, n, r, a, i) {
      var c = e._getDomain, o = ke(), s = o.tryCatch;
      function d(y, l, u, h) {
        this.constructor$(y);
        var f = c();
        this._fn = f === null ? l : o.domainBind(f, l), u !== void 0 && (u = e.resolve(u), u._attachCancellationCallback(this)), this._initialValue = u, this._currentCancellable = null, h === a ? this._eachValues = Array(this._length) : h === 0 ? this._eachValues = null : this._eachValues = void 0, this._promise._captureStackTrace(), this._init$(void 0, -5);
      }
      o.inherits(d, t), d.prototype._gotAccum = function(y) {
        this._eachValues !== void 0 && this._eachValues !== null && y !== a && this._eachValues.push(y);
      }, d.prototype._eachComplete = function(y) {
        return this._eachValues !== null && this._eachValues.push(y), this._eachValues;
      }, d.prototype._init = function() {
      }, d.prototype._resolveEmptyArray = function() {
        this._resolve(this._eachValues !== void 0 ? this._eachValues : this._initialValue);
      }, d.prototype.shouldCopyValues = function() {
        return false;
      }, d.prototype._resolve = function(y) {
        this._promise._resolveCallback(y), this._values = null;
      }, d.prototype._resultCancelled = function(y) {
        if (y === this._initialValue) return this._cancel();
        this._isResolved() || (this._resultCancelled$(), this._currentCancellable instanceof e && this._currentCancellable.cancel(), this._initialValue instanceof e && this._initialValue.cancel());
      }, d.prototype._iterate = function(y) {
        this._values = y;
        var l, u, h = y.length;
        if (this._initialValue !== void 0 ? (l = this._initialValue, u = 0) : (l = e.resolve(y[0]), u = 1), this._currentCancellable = l, !l.isRejected()) for (; u < h; ++u) {
          var f = {
            accum: null,
            value: y[u],
            index: u,
            length: h,
            array: this
          };
          l = l._then(g, void 0, void 0, f, void 0);
        }
        this._eachValues !== void 0 && (l = l._then(this._eachComplete, void 0, void 0, this, void 0)), l._then(b, b, void 0, l, this);
      }, e.prototype.reduce = function(y, l) {
        return p(this, y, l, null);
      }, e.reduce = function(y, l, u, h) {
        return p(y, l, u, h);
      };
      function b(y, l) {
        this.isFulfilled() ? l._resolve(y) : l._reject(y);
      }
      function p(y, l, u, h) {
        if (typeof l != "function") return n("expecting a function but got " + o.classString(l));
        var f = new d(y, l, u, h);
        return f.promise();
      }
      function g(y) {
        this.accum = y, this.array._gotAccum(y);
        var l = r(this.value, this.array._promise);
        return l instanceof e ? (this.array._currentCancellable = l, l._then(m, void 0, void 0, this, void 0)) : m.call(this, l);
      }
      function m(y) {
        var l = this.array, u = l._promise, h = s(l._fn);
        u._pushContext();
        var f;
        l._eachValues !== void 0 ? f = h.call(u._boundValue(), y, this.index, this.length) : f = h.call(u._boundValue(), this.accum, y, this.index, this.length), f instanceof e && (l._currentCancellable = f);
        var v = u._popContext();
        return i.checkForgottenReturns(f, v, l._eachValues !== void 0 ? "Promise.each" : "Promise.reduce", u), f;
      }
    }), Si;
  }
  var ki, pc;
  function xp() {
    return pc || (pc = 1, ki = function(e, t, n) {
      var r = e.PromiseInspection, a = ke();
      function i(c) {
        this.constructor$(c);
      }
      a.inherits(i, t), i.prototype._promiseResolved = function(c, o) {
        this._values[c] = o;
        var s = ++this._totalResolved;
        return s >= this._length ? (this._resolve(this._values), true) : false;
      }, i.prototype._promiseFulfilled = function(c, o) {
        var s = new r();
        return s._bitField = 33554432, s._settledValueField = c, this._promiseResolved(o, s);
      }, i.prototype._promiseRejected = function(c, o) {
        var s = new r();
        return s._bitField = 16777216, s._settledValueField = c, this._promiseResolved(o, s);
      }, e.settle = function(c) {
        return n.deprecated(".settle()", ".reflect()"), new i(c).promise();
      }, e.prototype.settle = function() {
        return e.settle(this);
      };
    }), ki;
  }
  var Bi, gc;
  function _p() {
    return gc || (gc = 1, Bi = function(e, t, n) {
      var r = ke(), a = Ut().RangeError, i = Ut().AggregateError, c = r.isArray, o = {};
      function s(b) {
        this.constructor$(b), this._howMany = 0, this._unwrap = false, this._initialized = false;
      }
      r.inherits(s, t), s.prototype._init = function() {
        if (this._initialized) {
          if (this._howMany === 0) {
            this._resolve([]);
            return;
          }
          this._init$(void 0, -5);
          var b = c(this._values);
          !this._isResolved() && b && this._howMany > this._canPossiblyFulfill() && this._reject(this._getRangeError(this.length()));
        }
      }, s.prototype.init = function() {
        this._initialized = true, this._init();
      }, s.prototype.setUnwrap = function() {
        this._unwrap = true;
      }, s.prototype.howMany = function() {
        return this._howMany;
      }, s.prototype.setHowMany = function(b) {
        this._howMany = b;
      }, s.prototype._promiseFulfilled = function(b) {
        return this._addFulfilled(b), this._fulfilled() === this.howMany() ? (this._values.length = this.howMany(), this.howMany() === 1 && this._unwrap ? this._resolve(this._values[0]) : this._resolve(this._values), true) : false;
      }, s.prototype._promiseRejected = function(b) {
        return this._addRejected(b), this._checkOutcome();
      }, s.prototype._promiseCancelled = function() {
        return this._values instanceof e || this._values == null ? this._cancel() : (this._addRejected(o), this._checkOutcome());
      }, s.prototype._checkOutcome = function() {
        if (this.howMany() > this._canPossiblyFulfill()) {
          for (var b = new i(), p = this.length(); p < this._values.length; ++p) this._values[p] !== o && b.push(this._values[p]);
          return b.length > 0 ? this._reject(b) : this._cancel(), true;
        }
        return false;
      }, s.prototype._fulfilled = function() {
        return this._totalResolved;
      }, s.prototype._rejected = function() {
        return this._values.length - this.length();
      }, s.prototype._addRejected = function(b) {
        this._values.push(b);
      }, s.prototype._addFulfilled = function(b) {
        this._values[this._totalResolved++] = b;
      }, s.prototype._canPossiblyFulfill = function() {
        return this.length() - this._rejected();
      }, s.prototype._getRangeError = function(b) {
        var p = "Input array must contain at least " + this._howMany + " items but contains only " + b + " items";
        return new a(p);
      }, s.prototype._resolveEmptyArray = function() {
        this._reject(this._getRangeError(0));
      };
      function d(b, p) {
        if ((p | 0) !== p || p < 0) return n(`expecting a positive integer

    See http://goo.gl/MqrFmX
`);
        var g = new s(b), m = g.promise();
        return g.setHowMany(p), g.init(), m;
      }
      e.some = function(b, p) {
        return d(b, p);
      }, e.prototype.some = function(b) {
        return d(this, b);
      }, e._SomePromiseArray = s;
    }), Bi;
  }
  var Wi, mc;
  function wp() {
    return mc || (mc = 1, Wi = function(e, t) {
      var n = e.map;
      e.prototype.filter = function(r, a) {
        return n(this, r, a, t);
      }, e.filter = function(r, a, i) {
        return n(r, a, i, t);
      };
    }), Wi;
  }
  var Ri, bc;
  function Up() {
    return bc || (bc = 1, Ri = function(e, t) {
      var n = e.reduce, r = e.all;
      function a() {
        return r(this);
      }
      function i(c, o) {
        return n(c, o, t, t);
      }
      e.prototype.each = function(c) {
        return n(this, c, t, 0)._then(a, void 0, void 0, this, void 0);
      }, e.prototype.mapSeries = function(c) {
        return n(this, c, t, t);
      }, e.each = function(c, o) {
        return n(c, o, t, 0)._then(a, void 0, void 0, c, void 0);
      }, e.mapSeries = i;
    }), Ri;
  }
  var Ii, yc;
  function Tp() {
    return yc || (yc = 1, Ii = function(e) {
      var t = e._SomePromiseArray;
      function n(r) {
        var a = new t(r), i = a.promise();
        return a.setHowMany(1), a.setUnwrap(), a.init(), i;
      }
      e.any = function(r) {
        return n(r);
      }, e.prototype.any = function() {
        return n(this);
      };
    }), Ii;
  }
  var vc;
  function Ep() {
    return vc || (vc = 1, function(e) {
      e.exports = function() {
        var t = function() {
          return new g(`circular promise resolution chain

    See http://goo.gl/MqrFmX
`);
        }, n = function() {
          return new T.PromiseInspection(this._target());
        }, r = function(k) {
          return T.reject(new g(k));
        };
        function a() {
        }
        var i = {}, c = ke(), o;
        c.isNode ? o = function() {
          var k = process.domain;
          return k === void 0 && (k = null), k;
        } : o = function() {
          return null;
        }, c.notEnumerableProp(T, "_getDomain", o);
        var s = nn(), d = Qh(), b = new d();
        s.defineProperty(T, "_async", {
          value: b
        });
        var p = Ut(), g = T.TypeError = p.TypeError;
        T.RangeError = p.RangeError;
        var m = T.CancellationError = p.CancellationError;
        T.TimeoutError = p.TimeoutError, T.OperationalError = p.OperationalError, T.RejectionError = p.OperationalError, T.AggregateError = p.AggregateError;
        var y = function() {
        }, l = {}, u = {}, h = Jh()(T, y), f = ep()(T, y, h, r, a), v = tp()(T), w = v.create, x = np()(T, v);
        x.CapturedTrace;
        var U = rp()(T, h), E = ip()(u), F = zd(), C = c.errorObj, R = c.tryCatch;
        function z(k, I) {
          if (typeof I != "function") throw new g("expecting a function but got " + c.classString(I));
          if (k.constructor !== T) throw new g(`the promise constructor cannot be invoked directly

    See http://goo.gl/MqrFmX
`);
        }
        function T(k) {
          this._bitField = 0, this._fulfillmentHandler0 = void 0, this._rejectionHandler0 = void 0, this._promise0 = void 0, this._receiver0 = void 0, k !== y && (z(this, k), this._resolveFromExecutor(k)), this._promiseCreated(), this._fireEvent("promiseCreated", this);
        }
        T.prototype.toString = function() {
          return "[object Promise]";
        }, T.prototype.caught = T.prototype.catch = function(k) {
          var I = arguments.length;
          if (I > 1) {
            var H = new Array(I - 1), q = 0, Y;
            for (Y = 0; Y < I - 1; ++Y) {
              var N = arguments[Y];
              if (c.isObject(N)) H[q++] = N;
              else return r("expecting an object but got A catch statement predicate " + c.classString(N));
            }
            return H.length = q, k = arguments[Y], this.then(void 0, E(H, k, this));
          }
          return this.then(void 0, k);
        }, T.prototype.reflect = function() {
          return this._then(n, n, void 0, this, void 0);
        }, T.prototype.then = function(k, I) {
          if (x.warnings() && arguments.length > 0 && typeof k != "function" && typeof I != "function") {
            var H = ".then() only accepts functions but was passed: " + c.classString(k);
            arguments.length > 1 && (H += ", " + c.classString(I)), this._warn(H);
          }
          return this._then(k, I, void 0, void 0, void 0);
        }, T.prototype.done = function(k, I) {
          var H = this._then(k, I, void 0, void 0, void 0);
          H._setIsFinal();
        }, T.prototype.spread = function(k) {
          return typeof k != "function" ? r("expecting a function but got " + c.classString(k)) : this.all()._then(k, void 0, void 0, l, void 0);
        }, T.prototype.toJSON = function() {
          var k = {
            isFulfilled: false,
            isRejected: false,
            fulfillmentValue: void 0,
            rejectionReason: void 0
          };
          return this.isFulfilled() ? (k.fulfillmentValue = this.value(), k.isFulfilled = true) : this.isRejected() && (k.rejectionReason = this.reason(), k.isRejected = true), k;
        }, T.prototype.all = function() {
          return arguments.length > 0 && this._warn(".all() was passed arguments but it does not take any"), new f(this).promise();
        }, T.prototype.error = function(k) {
          return this.caught(c.originatesFromRejection, k);
        }, T.getNewLibraryCopy = e.exports, T.is = function(k) {
          return k instanceof T;
        }, T.fromNode = T.fromCallback = function(k) {
          var I = new T(y);
          I._captureStackTrace();
          var H = arguments.length > 1 ? !!Object(arguments[1]).multiArgs : false, q = R(k)(F(I, H));
          return q === C && I._rejectCallback(q.e, true), I._isFateSealed() || I._setAsyncGuaranteed(), I;
        }, T.all = function(k) {
          return new f(k).promise();
        }, T.cast = function(k) {
          var I = h(k);
          return I instanceof T || (I = new T(y), I._captureStackTrace(), I._setFulfilled(), I._rejectionHandler0 = k), I;
        }, T.resolve = T.fulfilled = T.cast, T.reject = T.rejected = function(k) {
          var I = new T(y);
          return I._captureStackTrace(), I._rejectCallback(k, true), I;
        }, T.setScheduler = function(k) {
          if (typeof k != "function") throw new g("expecting a function but got " + c.classString(k));
          return b.setScheduler(k);
        }, T.prototype._then = function(k, I, H, q, Y) {
          var N = Y !== void 0, $ = N ? Y : new T(y), M = this._target(), ee = M._bitField;
          N || ($._propagateFrom(this, 3), $._captureStackTrace(), q === void 0 && (this._bitField & 2097152) !== 0 && ((ee & 50397184) !== 0 ? q = this._boundValue() : q = M === this ? void 0 : this._boundTo), this._fireEvent("promiseChained", this, $));
          var te = o();
          if ((ee & 50397184) !== 0) {
            var se, le, fe = M._settlePromiseCtx;
            (ee & 33554432) !== 0 ? (le = M._rejectionHandler0, se = k) : (ee & 16777216) !== 0 ? (le = M._fulfillmentHandler0, se = I, M._unsetRejectionIsUnhandled()) : (fe = M._settlePromiseLateCancellationObserver, le = new m("late cancellation observer"), M._attachExtraTrace(le), se = I), b.invoke(fe, M, {
              handler: te === null ? se : typeof se == "function" && c.domainBind(te, se),
              promise: $,
              receiver: q,
              value: le
            });
          } else M._addCallbacks(k, I, $, q, te);
          return $;
        }, T.prototype._length = function() {
          return this._bitField & 65535;
        }, T.prototype._isFateSealed = function() {
          return (this._bitField & 117506048) !== 0;
        }, T.prototype._isFollowing = function() {
          return (this._bitField & 67108864) === 67108864;
        }, T.prototype._setLength = function(k) {
          this._bitField = this._bitField & -65536 | k & 65535;
        }, T.prototype._setFulfilled = function() {
          this._bitField = this._bitField | 33554432, this._fireEvent("promiseFulfilled", this);
        }, T.prototype._setRejected = function() {
          this._bitField = this._bitField | 16777216, this._fireEvent("promiseRejected", this);
        }, T.prototype._setFollowing = function() {
          this._bitField = this._bitField | 67108864, this._fireEvent("promiseResolved", this);
        }, T.prototype._setIsFinal = function() {
          this._bitField = this._bitField | 4194304;
        }, T.prototype._isFinal = function() {
          return (this._bitField & 4194304) > 0;
        }, T.prototype._unsetCancelled = function() {
          this._bitField = this._bitField & -65537;
        }, T.prototype._setCancelled = function() {
          this._bitField = this._bitField | 65536, this._fireEvent("promiseCancelled", this);
        }, T.prototype._setWillBeCancelled = function() {
          this._bitField = this._bitField | 8388608;
        }, T.prototype._setAsyncGuaranteed = function() {
          b.hasCustomScheduler() || (this._bitField = this._bitField | 134217728);
        }, T.prototype._receiverAt = function(k) {
          var I = k === 0 ? this._receiver0 : this[k * 4 - 4 + 3];
          if (I !== i) return I === void 0 && this._isBound() ? this._boundValue() : I;
        }, T.prototype._promiseAt = function(k) {
          return this[k * 4 - 4 + 2];
        }, T.prototype._fulfillmentHandlerAt = function(k) {
          return this[k * 4 - 4 + 0];
        }, T.prototype._rejectionHandlerAt = function(k) {
          return this[k * 4 - 4 + 1];
        }, T.prototype._boundValue = function() {
        }, T.prototype._migrateCallback0 = function(k) {
          k._bitField;
          var I = k._fulfillmentHandler0, H = k._rejectionHandler0, q = k._promise0, Y = k._receiverAt(0);
          Y === void 0 && (Y = i), this._addCallbacks(I, H, q, Y, null);
        }, T.prototype._migrateCallbackAt = function(k, I) {
          var H = k._fulfillmentHandlerAt(I), q = k._rejectionHandlerAt(I), Y = k._promiseAt(I), N = k._receiverAt(I);
          N === void 0 && (N = i), this._addCallbacks(H, q, Y, N, null);
        }, T.prototype._addCallbacks = function(k, I, H, q, Y) {
          var N = this._length();
          if (N >= 65531 && (N = 0, this._setLength(0)), N === 0) this._promise0 = H, this._receiver0 = q, typeof k == "function" && (this._fulfillmentHandler0 = Y === null ? k : c.domainBind(Y, k)), typeof I == "function" && (this._rejectionHandler0 = Y === null ? I : c.domainBind(Y, I));
          else {
            var $ = N * 4 - 4;
            this[$ + 2] = H, this[$ + 3] = q, typeof k == "function" && (this[$ + 0] = Y === null ? k : c.domainBind(Y, k)), typeof I == "function" && (this[$ + 1] = Y === null ? I : c.domainBind(Y, I));
          }
          return this._setLength(N + 1), N;
        }, T.prototype._proxy = function(k, I) {
          this._addCallbacks(void 0, void 0, I, k, null);
        }, T.prototype._resolveCallback = function(k, I) {
          if ((this._bitField & 117506048) === 0) {
            if (k === this) return this._rejectCallback(t(), false);
            var H = h(k, this);
            if (!(H instanceof T)) return this._fulfill(k);
            I && this._propagateFrom(H, 2);
            var q = H._target();
            if (q === this) {
              this._reject(t());
              return;
            }
            var Y = q._bitField;
            if ((Y & 50397184) === 0) {
              var N = this._length();
              N > 0 && q._migrateCallback0(this);
              for (var $ = 1; $ < N; ++$) q._migrateCallbackAt(this, $);
              this._setFollowing(), this._setLength(0), this._setFollowee(q);
            } else if ((Y & 33554432) !== 0) this._fulfill(q._value());
            else if ((Y & 16777216) !== 0) this._reject(q._reason());
            else {
              var M = new m("late cancellation observer");
              q._attachExtraTrace(M), this._reject(M);
            }
          }
        }, T.prototype._rejectCallback = function(k, I, H) {
          var q = c.ensureErrorObject(k), Y = q === k;
          if (!Y && !H && x.warnings()) {
            var N = "a promise was rejected with a non-error: " + c.classString(k);
            this._warn(N, true);
          }
          this._attachExtraTrace(q, I ? Y : false), this._reject(k);
        }, T.prototype._resolveFromExecutor = function(k) {
          var I = this;
          this._captureStackTrace(), this._pushContext();
          var H = true, q = this._execute(k, function(Y) {
            I._resolveCallback(Y);
          }, function(Y) {
            I._rejectCallback(Y, H);
          });
          H = false, this._popContext(), q !== void 0 && I._rejectCallback(q, true);
        }, T.prototype._settlePromiseFromHandler = function(k, I, H, q) {
          var Y = q._bitField;
          if ((Y & 65536) === 0) {
            q._pushContext();
            var N;
            I === l ? !H || typeof H.length != "number" ? (N = C, N.e = new g("cannot .spread() a non-array: " + c.classString(H))) : N = R(k).apply(this._boundValue(), H) : N = R(k).call(I, H);
            var $ = q._popContext();
            Y = q._bitField, (Y & 65536) === 0 && (N === u ? q._reject(H) : N === C ? q._rejectCallback(N.e, false) : (x.checkForgottenReturns(N, $, "", q, this), q._resolveCallback(N)));
          }
        }, T.prototype._target = function() {
          for (var k = this; k._isFollowing(); ) k = k._followee();
          return k;
        }, T.prototype._followee = function() {
          return this._rejectionHandler0;
        }, T.prototype._setFollowee = function(k) {
          this._rejectionHandler0 = k;
        }, T.prototype._settlePromise = function(k, I, H, q) {
          var Y = k instanceof T, N = this._bitField, $ = (N & 134217728) !== 0;
          (N & 65536) !== 0 ? (Y && k._invokeInternalOnCancel(), H instanceof U && H.isFinallyHandler() ? (H.cancelPromise = k, R(I).call(H, q) === C && k._reject(C.e)) : I === n ? k._fulfill(n.call(H)) : H instanceof a ? H._promiseCancelled(k) : Y || k instanceof f ? k._cancel() : H.cancel()) : typeof I == "function" ? Y ? ($ && k._setAsyncGuaranteed(), this._settlePromiseFromHandler(I, H, q, k)) : I.call(H, q, k) : H instanceof a ? H._isResolved() || ((N & 33554432) !== 0 ? H._promiseFulfilled(q, k) : H._promiseRejected(q, k)) : Y && ($ && k._setAsyncGuaranteed(), (N & 33554432) !== 0 ? k._fulfill(q) : k._reject(q));
        }, T.prototype._settlePromiseLateCancellationObserver = function(k) {
          var I = k.handler, H = k.promise, q = k.receiver, Y = k.value;
          typeof I == "function" ? H instanceof T ? this._settlePromiseFromHandler(I, q, Y, H) : I.call(q, Y, H) : H instanceof T && H._reject(Y);
        }, T.prototype._settlePromiseCtx = function(k) {
          this._settlePromise(k.promise, k.handler, k.receiver, k.value);
        }, T.prototype._settlePromise0 = function(k, I, H) {
          var q = this._promise0, Y = this._receiverAt(0);
          this._promise0 = void 0, this._receiver0 = void 0, this._settlePromise(q, k, Y, I);
        }, T.prototype._clearCallbackDataAtIndex = function(k) {
          var I = k * 4 - 4;
          this[I + 2] = this[I + 3] = this[I + 0] = this[I + 1] = void 0;
        }, T.prototype._fulfill = function(k) {
          var I = this._bitField;
          if (!((I & 117506048) >>> 16)) {
            if (k === this) {
              var H = t();
              return this._attachExtraTrace(H), this._reject(H);
            }
            this._setFulfilled(), this._rejectionHandler0 = k, (I & 65535) > 0 && ((I & 134217728) !== 0 ? this._settlePromises() : b.settlePromises(this));
          }
        }, T.prototype._reject = function(k) {
          var I = this._bitField;
          if (!((I & 117506048) >>> 16)) {
            if (this._setRejected(), this._fulfillmentHandler0 = k, this._isFinal()) return b.fatalError(k, c.isNode);
            (I & 65535) > 0 ? b.settlePromises(this) : this._ensurePossibleRejectionHandled();
          }
        }, T.prototype._fulfillPromises = function(k, I) {
          for (var H = 1; H < k; H++) {
            var q = this._fulfillmentHandlerAt(H), Y = this._promiseAt(H), N = this._receiverAt(H);
            this._clearCallbackDataAtIndex(H), this._settlePromise(Y, q, N, I);
          }
        }, T.prototype._rejectPromises = function(k, I) {
          for (var H = 1; H < k; H++) {
            var q = this._rejectionHandlerAt(H), Y = this._promiseAt(H), N = this._receiverAt(H);
            this._clearCallbackDataAtIndex(H), this._settlePromise(Y, q, N, I);
          }
        }, T.prototype._settlePromises = function() {
          var k = this._bitField, I = k & 65535;
          if (I > 0) {
            if ((k & 16842752) !== 0) {
              var H = this._fulfillmentHandler0;
              this._settlePromise0(this._rejectionHandler0, H, k), this._rejectPromises(I, H);
            } else {
              var q = this._rejectionHandler0;
              this._settlePromise0(this._fulfillmentHandler0, q, k), this._fulfillPromises(I, q);
            }
            this._setLength(0);
          }
          this._clearCancellationData();
        }, T.prototype._settledValue = function() {
          var k = this._bitField;
          if ((k & 33554432) !== 0) return this._rejectionHandler0;
          if ((k & 16777216) !== 0) return this._fulfillmentHandler0;
        };
        function B(k) {
          this.promise._resolveCallback(k);
        }
        function _(k) {
          this.promise._rejectCallback(k, false);
        }
        T.defer = T.pending = function() {
          x.deprecated("Promise.defer", "new Promise");
          var k = new T(y);
          return {
            promise: k,
            resolve: B,
            reject: _
          };
        }, c.notEnumerableProp(T, "_makeSelfResolutionError", t), ap()(T, y, h, r, x), op()(T, y, h, x), cp()(T, f, r, x), sp()(T), up()(T), dp()(T, f, h, y, b, o), T.Promise = T, T.version = "3.4.7", lp()(T, f, r, h, y, x), fp()(T), hp()(T, r, h, w, y, x), pp()(T, y, x), gp()(T, r, y, h, a, x), mp()(T), bp()(T, y), yp()(T, f, h, r), vp()(T, y, h, r), Dp()(T, f, r, h, y, x), xp()(T, f, x), _p()(T, f, r), wp()(T, y), Up()(T, y), Tp()(T), c.toFastProperties(T), c.toFastProperties(T.prototype);
        function P(k) {
          var I = new T(y);
          I._fulfillmentHandler0 = k, I._rejectionHandler0 = k, I._promise0 = k, I._receiver0 = k;
        }
        return P({
          a: 1
        }), P({
          b: 2
        }), P({
          c: 3
        }), P(1), P(function() {
        }), P(void 0), P(false), P(new T(y)), x.setBounds(d.firstLineError, c.lastLineError), T;
      };
    }(ii)), ii.exports;
  }
  var Dc;
  function At() {
    if (Dc) return Je;
    Dc = 1;
    var e = Re, t = Ep()();
    Je.defer = n, Je.when = t.resolve, Je.resolve = t.resolve, Je.all = t.all, Je.props = t.props, Je.reject = t.reject, Je.promisify = t.promisify, Je.mapSeries = t.mapSeries, Je.attempt = t.attempt, Je.nfcall = function(r) {
      var a = Array.prototype.slice.call(arguments, 1), i = t.promisify(r);
      return i.apply(null, a);
    }, t.prototype.fail = t.prototype.caught, t.prototype.also = function(r) {
      return this.then(function(a) {
        var i = e.extend({}, a, r(a));
        return t.props(i);
      });
    };
    function n() {
      var r, a, i = new t.Promise(function(c, o) {
        r = c, a = o;
      });
      return {
        resolve: r,
        reject: a,
        promise: i
      };
    }
    return Je;
  }
  var Fe = {}, xc;
  function $t() {
    if (xc) return Fe;
    xc = 1;
    var e = Re, t = Fe.types = {
      document: "document",
      paragraph: "paragraph",
      run: "run",
      text: "text",
      tab: "tab",
      checkbox: "checkbox",
      hyperlink: "hyperlink",
      noteReference: "noteReference",
      image: "image",
      note: "note",
      commentReference: "commentReference",
      comment: "comment",
      table: "table",
      tableRow: "tableRow",
      tableCell: "tableCell",
      break: "break",
      bookmarkStart: "bookmarkStart"
    };
    function n(U, E) {
      return E = E || {}, {
        type: t.document,
        children: U,
        notes: E.notes || new p({}),
        comments: E.comments || []
      };
    }
    function r(U, E) {
      E = E || {};
      var F = E.indent || {};
      return {
        type: t.paragraph,
        children: U,
        styleId: E.styleId || null,
        styleName: E.styleName || null,
        numbering: E.numbering || null,
        alignment: E.alignment || null,
        indent: {
          start: F.start || null,
          end: F.end || null,
          firstLine: F.firstLine || null,
          hanging: F.hanging || null
        }
      };
    }
    function a(U, E) {
      return E = E || {}, {
        type: t.run,
        children: U,
        styleId: E.styleId || null,
        styleName: E.styleName || null,
        isBold: !!E.isBold,
        isUnderline: !!E.isUnderline,
        isItalic: !!E.isItalic,
        isStrikethrough: !!E.isStrikethrough,
        isAllCaps: !!E.isAllCaps,
        isSmallCaps: !!E.isSmallCaps,
        verticalAlignment: E.verticalAlignment || i.baseline,
        font: E.font || null,
        fontSize: E.fontSize || null,
        highlight: E.highlight || null
      };
    }
    var i = {
      baseline: "baseline",
      superscript: "superscript",
      subscript: "subscript"
    };
    function c(U) {
      return {
        type: t.text,
        value: U
      };
    }
    function o() {
      return {
        type: t.tab
      };
    }
    function s(U) {
      return {
        type: t.checkbox,
        checked: U.checked
      };
    }
    function d(U, E) {
      return {
        type: t.hyperlink,
        children: U,
        href: E.href,
        anchor: E.anchor,
        targetFrame: E.targetFrame
      };
    }
    function b(U) {
      return {
        type: t.noteReference,
        noteType: U.noteType,
        noteId: U.noteId
      };
    }
    function p(U) {
      this._notes = e.indexBy(U, function(E) {
        return l(E.noteType, E.noteId);
      });
    }
    p.prototype.resolve = function(U) {
      return this.findNoteByKey(l(U.noteType, U.noteId));
    }, p.prototype.findNoteByKey = function(U) {
      return this._notes[U] || null;
    };
    function g(U) {
      return {
        type: t.note,
        noteType: U.noteType,
        noteId: U.noteId,
        body: U.body
      };
    }
    function m(U) {
      return {
        type: t.commentReference,
        commentId: U.commentId
      };
    }
    function y(U) {
      return {
        type: t.comment,
        commentId: U.commentId,
        body: U.body,
        authorName: U.authorName,
        authorInitials: U.authorInitials
      };
    }
    function l(U, E) {
      return U + "-" + E;
    }
    function u(U) {
      return {
        type: t.image,
        read: function(E) {
          return E ? U.readImage(E) : U.readImage().then(function(F) {
            return Buffer.from(F);
          });
        },
        readAsArrayBuffer: function() {
          return U.readImage();
        },
        readAsBase64String: function() {
          return U.readImage("base64");
        },
        readAsBuffer: function() {
          return U.readImage().then(function(E) {
            return Buffer.from(E);
          });
        },
        altText: U.altText,
        contentType: U.contentType
      };
    }
    function h(U, E) {
      return E = E || {}, {
        type: t.table,
        children: U,
        styleId: E.styleId || null,
        styleName: E.styleName || null
      };
    }
    function f(U, E) {
      return E = E || {}, {
        type: t.tableRow,
        children: U,
        isHeader: E.isHeader || false
      };
    }
    function v(U, E) {
      return E = E || {}, {
        type: t.tableCell,
        children: U,
        colSpan: E.colSpan == null ? 1 : E.colSpan,
        rowSpan: E.rowSpan == null ? 1 : E.rowSpan
      };
    }
    function w(U) {
      return {
        type: t.break,
        breakType: U
      };
    }
    function x(U) {
      return {
        type: t.bookmarkStart,
        name: U.name
      };
    }
    return Fe.document = Fe.Document = n, Fe.paragraph = Fe.Paragraph = r, Fe.run = Fe.Run = a, Fe.text = Fe.Text = c, Fe.tab = Fe.Tab = o, Fe.checkbox = Fe.Checkbox = s, Fe.Hyperlink = d, Fe.noteReference = Fe.NoteReference = b, Fe.Notes = p, Fe.Note = g, Fe.commentReference = m, Fe.comment = y, Fe.Image = u, Fe.Table = h, Fe.TableRow = f, Fe.TableCell = v, Fe.lineBreak = w("line"), Fe.pageBreak = w("page"), Fe.columnBreak = w("column"), Fe.BookmarkStart = x, Fe.verticalAlignment = i, Fe;
  }
  var Xt = {}, _c;
  function gt() {
    if (_c) return Xt;
    _c = 1;
    var e = Re;
    Xt.Result = t, Xt.success = n, Xt.warning = r, Xt.error = a;
    function t(s, d) {
      this.value = s, this.messages = d || [];
    }
    t.prototype.map = function(s) {
      return new t(s(this.value), this.messages);
    }, t.prototype.flatMap = function(s) {
      var d = s(this.value);
      return new t(d.value, i([
        this,
        d
      ]));
    }, t.prototype.flatMapThen = function(s) {
      var d = this;
      return s(this.value).then(function(b) {
        return new t(b.value, i([
          d,
          b
        ]));
      });
    }, t.combine = function(s) {
      var d = e.flatten(e.pluck(s, "value")), b = i(s);
      return new t(d, b);
    };
    function n(s) {
      return new t(s, []);
    }
    function r(s) {
      return {
        type: "warning",
        message: s
      };
    }
    function a(s) {
      return {
        type: "error",
        message: s.message,
        error: s
      };
    }
    function i(s) {
      var d = [];
      return e.flatten(e.pluck(s, "messages"), true).forEach(function(b) {
        c(d, b) || d.push(b);
      }), d;
    }
    function c(s, d) {
      return e.find(s, o.bind(null, d)) !== void 0;
    }
    function o(s, d) {
      return s.type === d.type && s.message === d.message;
    }
    return Xt;
  }
  var cn = {}, Oi = {
    exports: {}
  };
  var wc;
  function Cp() {
    return wc || (wc = 1, function(e, t) {
      (function(n) {
        e.exports = n();
      })(function() {
        return function n(r, a, i) {
          function c(d, b) {
            if (!a[d]) {
              if (!r[d]) {
                var p = typeof Fn == "function" && Fn;
                if (!b && p) return p(d, true);
                if (o) return o(d, true);
                var g = new Error("Cannot find module '" + d + "'");
                throw g.code = "MODULE_NOT_FOUND", g;
              }
              var m = a[d] = {
                exports: {}
              };
              r[d][0].call(m.exports, function(y) {
                var l = r[d][1][y];
                return c(l || y);
              }, m, m.exports, n, r, a, i);
            }
            return a[d].exports;
          }
          for (var o = typeof Fn == "function" && Fn, s = 0; s < i.length; s++) c(i[s]);
          return c;
        }({
          1: [
            function(n, r, a) {
              var i = n("./utils"), c = n("./support"), o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
              a.encode = function(s) {
                for (var d, b, p, g, m, y, l, u = [], h = 0, f = s.length, v = f, w = i.getTypeOf(s) !== "string"; h < s.length; ) v = f - h, p = w ? (d = s[h++], b = h < f ? s[h++] : 0, h < f ? s[h++] : 0) : (d = s.charCodeAt(h++), b = h < f ? s.charCodeAt(h++) : 0, h < f ? s.charCodeAt(h++) : 0), g = d >> 2, m = (3 & d) << 4 | b >> 4, y = 1 < v ? (15 & b) << 2 | p >> 6 : 64, l = 2 < v ? 63 & p : 64, u.push(o.charAt(g) + o.charAt(m) + o.charAt(y) + o.charAt(l));
                return u.join("");
              }, a.decode = function(s) {
                var d, b, p, g, m, y, l = 0, u = 0, h = "data:";
                if (s.substr(0, h.length) === h) throw new Error("Invalid base64 input, it looks like a data url.");
                var f, v = 3 * (s = s.replace(/[^A-Za-z0-9+/=]/g, "")).length / 4;
                if (s.charAt(s.length - 1) === o.charAt(64) && v--, s.charAt(s.length - 2) === o.charAt(64) && v--, v % 1 != 0) throw new Error("Invalid base64 input, bad content length.");
                for (f = c.uint8array ? new Uint8Array(0 | v) : new Array(0 | v); l < s.length; ) d = o.indexOf(s.charAt(l++)) << 2 | (g = o.indexOf(s.charAt(l++))) >> 4, b = (15 & g) << 4 | (m = o.indexOf(s.charAt(l++))) >> 2, p = (3 & m) << 6 | (y = o.indexOf(s.charAt(l++))), f[u++] = d, m !== 64 && (f[u++] = b), y !== 64 && (f[u++] = p);
                return f;
              };
            },
            {
              "./support": 30,
              "./utils": 32
            }
          ],
          2: [
            function(n, r, a) {
              var i = n("./external"), c = n("./stream/DataWorker"), o = n("./stream/Crc32Probe"), s = n("./stream/DataLengthProbe");
              function d(b, p, g, m, y) {
                this.compressedSize = b, this.uncompressedSize = p, this.crc32 = g, this.compression = m, this.compressedContent = y;
              }
              d.prototype = {
                getContentWorker: function() {
                  var b = new c(i.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new s("data_length")), p = this;
                  return b.on("end", function() {
                    if (this.streamInfo.data_length !== p.uncompressedSize) throw new Error("Bug : uncompressed data size mismatch");
                  }), b;
                },
                getCompressedWorker: function() {
                  return new c(i.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize", this.compressedSize).withStreamInfo("uncompressedSize", this.uncompressedSize).withStreamInfo("crc32", this.crc32).withStreamInfo("compression", this.compression);
                }
              }, d.createWorkerFrom = function(b, p, g) {
                return b.pipe(new o()).pipe(new s("uncompressedSize")).pipe(p.compressWorker(g)).pipe(new s("compressedSize")).withStreamInfo("compression", p);
              }, r.exports = d;
            },
            {
              "./external": 6,
              "./stream/Crc32Probe": 25,
              "./stream/DataLengthProbe": 26,
              "./stream/DataWorker": 27
            }
          ],
          3: [
            function(n, r, a) {
              var i = n("./stream/GenericWorker");
              a.STORE = {
                magic: "\0\0",
                compressWorker: function() {
                  return new i("STORE compression");
                },
                uncompressWorker: function() {
                  return new i("STORE decompression");
                }
              }, a.DEFLATE = n("./flate");
            },
            {
              "./flate": 7,
              "./stream/GenericWorker": 28
            }
          ],
          4: [
            function(n, r, a) {
              var i = n("./utils"), c = function() {
                for (var o, s = [], d = 0; d < 256; d++) {
                  o = d;
                  for (var b = 0; b < 8; b++) o = 1 & o ? 3988292384 ^ o >>> 1 : o >>> 1;
                  s[d] = o;
                }
                return s;
              }();
              r.exports = function(o, s) {
                return o !== void 0 && o.length ? i.getTypeOf(o) !== "string" ? function(d, b, p, g) {
                  var m = c, y = g + p;
                  d ^= -1;
                  for (var l = g; l < y; l++) d = d >>> 8 ^ m[255 & (d ^ b[l])];
                  return -1 ^ d;
                }(0 | s, o, o.length, 0) : function(d, b, p, g) {
                  var m = c, y = g + p;
                  d ^= -1;
                  for (var l = g; l < y; l++) d = d >>> 8 ^ m[255 & (d ^ b.charCodeAt(l))];
                  return -1 ^ d;
                }(0 | s, o, o.length, 0) : 0;
              };
            },
            {
              "./utils": 32
            }
          ],
          5: [
            function(n, r, a) {
              a.base64 = false, a.binary = false, a.dir = false, a.createFolders = true, a.date = null, a.compression = null, a.compressionOptions = null, a.comment = null, a.unixPermissions = null, a.dosPermissions = null;
            },
            {}
          ],
          6: [
            function(n, r, a) {
              var i = null;
              i = typeof Promise < "u" ? Promise : n("lie"), r.exports = {
                Promise: i
              };
            },
            {
              lie: 37
            }
          ],
          7: [
            function(n, r, a) {
              var i = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Uint32Array < "u", c = n("pako"), o = n("./utils"), s = n("./stream/GenericWorker"), d = i ? "uint8array" : "array";
              function b(p, g) {
                s.call(this, "FlateWorker/" + p), this._pako = null, this._pakoAction = p, this._pakoOptions = g, this.meta = {};
              }
              a.magic = "\b\0", o.inherits(b, s), b.prototype.processChunk = function(p) {
                this.meta = p.meta, this._pako === null && this._createPako(), this._pako.push(o.transformTo(d, p.data), false);
              }, b.prototype.flush = function() {
                s.prototype.flush.call(this), this._pako === null && this._createPako(), this._pako.push([], true);
              }, b.prototype.cleanUp = function() {
                s.prototype.cleanUp.call(this), this._pako = null;
              }, b.prototype._createPako = function() {
                this._pako = new c[this._pakoAction]({
                  raw: true,
                  level: this._pakoOptions.level || -1
                });
                var p = this;
                this._pako.onData = function(g) {
                  p.push({
                    data: g,
                    meta: p.meta
                  });
                };
              }, a.compressWorker = function(p) {
                return new b("Deflate", p);
              }, a.uncompressWorker = function() {
                return new b("Inflate", {});
              };
            },
            {
              "./stream/GenericWorker": 28,
              "./utils": 32,
              pako: 38
            }
          ],
          8: [
            function(n, r, a) {
              function i(m, y) {
                var l, u = "";
                for (l = 0; l < y; l++) u += String.fromCharCode(255 & m), m >>>= 8;
                return u;
              }
              function c(m, y, l, u, h, f) {
                var v, w, x = m.file, U = m.compression, E = f !== d.utf8encode, F = o.transformTo("string", f(x.name)), C = o.transformTo("string", d.utf8encode(x.name)), R = x.comment, z = o.transformTo("string", f(R)), T = o.transformTo("string", d.utf8encode(R)), B = C.length !== x.name.length, _ = T.length !== R.length, P = "", k = "", I = "", H = x.dir, q = x.date, Y = {
                  crc32: 0,
                  compressedSize: 0,
                  uncompressedSize: 0
                };
                y && !l || (Y.crc32 = m.crc32, Y.compressedSize = m.compressedSize, Y.uncompressedSize = m.uncompressedSize);
                var N = 0;
                y && (N |= 8), E || !B && !_ || (N |= 2048);
                var $ = 0, M = 0;
                H && ($ |= 16), h === "UNIX" ? (M = 798, $ |= function(te, se) {
                  var le = te;
                  return te || (le = se ? 16893 : 33204), (65535 & le) << 16;
                }(x.unixPermissions, H)) : (M = 20, $ |= function(te) {
                  return 63 & (te || 0);
                }(x.dosPermissions)), v = q.getUTCHours(), v <<= 6, v |= q.getUTCMinutes(), v <<= 5, v |= q.getUTCSeconds() / 2, w = q.getUTCFullYear() - 1980, w <<= 4, w |= q.getUTCMonth() + 1, w <<= 5, w |= q.getUTCDate(), B && (k = i(1, 1) + i(b(F), 4) + C, P += "up" + i(k.length, 2) + k), _ && (I = i(1, 1) + i(b(z), 4) + T, P += "uc" + i(I.length, 2) + I);
                var ee = "";
                return ee += `
\0`, ee += i(N, 2), ee += U.magic, ee += i(v, 2), ee += i(w, 2), ee += i(Y.crc32, 4), ee += i(Y.compressedSize, 4), ee += i(Y.uncompressedSize, 4), ee += i(F.length, 2), ee += i(P.length, 2), {
                  fileRecord: p.LOCAL_FILE_HEADER + ee + F + P,
                  dirRecord: p.CENTRAL_FILE_HEADER + i(M, 2) + ee + i(z.length, 2) + "\0\0\0\0" + i($, 4) + i(u, 4) + F + P + z
                };
              }
              var o = n("../utils"), s = n("../stream/GenericWorker"), d = n("../utf8"), b = n("../crc32"), p = n("../signature");
              function g(m, y, l, u) {
                s.call(this, "ZipFileWorker"), this.bytesWritten = 0, this.zipComment = y, this.zipPlatform = l, this.encodeFileName = u, this.streamFiles = m, this.accumulate = false, this.contentBuffer = [], this.dirRecords = [], this.currentSourceOffset = 0, this.entriesCount = 0, this.currentFile = null, this._sources = [];
              }
              o.inherits(g, s), g.prototype.push = function(m) {
                var y = m.meta.percent || 0, l = this.entriesCount, u = this._sources.length;
                this.accumulate ? this.contentBuffer.push(m) : (this.bytesWritten += m.data.length, s.prototype.push.call(this, {
                  data: m.data,
                  meta: {
                    currentFile: this.currentFile,
                    percent: l ? (y + 100 * (l - u - 1)) / l : 100
                  }
                }));
              }, g.prototype.openedSource = function(m) {
                this.currentSourceOffset = this.bytesWritten, this.currentFile = m.file.name;
                var y = this.streamFiles && !m.file.dir;
                if (y) {
                  var l = c(m, y, false, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
                  this.push({
                    data: l.fileRecord,
                    meta: {
                      percent: 0
                    }
                  });
                } else this.accumulate = true;
              }, g.prototype.closedSource = function(m) {
                this.accumulate = false;
                var y = this.streamFiles && !m.file.dir, l = c(m, y, true, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
                if (this.dirRecords.push(l.dirRecord), y) this.push({
                  data: function(u) {
                    return p.DATA_DESCRIPTOR + i(u.crc32, 4) + i(u.compressedSize, 4) + i(u.uncompressedSize, 4);
                  }(m),
                  meta: {
                    percent: 100
                  }
                });
                else for (this.push({
                  data: l.fileRecord,
                  meta: {
                    percent: 0
                  }
                }); this.contentBuffer.length; ) this.push(this.contentBuffer.shift());
                this.currentFile = null;
              }, g.prototype.flush = function() {
                for (var m = this.bytesWritten, y = 0; y < this.dirRecords.length; y++) this.push({
                  data: this.dirRecords[y],
                  meta: {
                    percent: 100
                  }
                });
                var l = this.bytesWritten - m, u = function(h, f, v, w, x) {
                  var U = o.transformTo("string", x(w));
                  return p.CENTRAL_DIRECTORY_END + "\0\0\0\0" + i(h, 2) + i(h, 2) + i(f, 4) + i(v, 4) + i(U.length, 2) + U;
                }(this.dirRecords.length, l, m, this.zipComment, this.encodeFileName);
                this.push({
                  data: u,
                  meta: {
                    percent: 100
                  }
                });
              }, g.prototype.prepareNextSource = function() {
                this.previous = this._sources.shift(), this.openedSource(this.previous.streamInfo), this.isPaused ? this.previous.pause() : this.previous.resume();
              }, g.prototype.registerPrevious = function(m) {
                this._sources.push(m);
                var y = this;
                return m.on("data", function(l) {
                  y.processChunk(l);
                }), m.on("end", function() {
                  y.closedSource(y.previous.streamInfo), y._sources.length ? y.prepareNextSource() : y.end();
                }), m.on("error", function(l) {
                  y.error(l);
                }), this;
              }, g.prototype.resume = function() {
                return !!s.prototype.resume.call(this) && (!this.previous && this._sources.length ? (this.prepareNextSource(), true) : this.previous || this._sources.length || this.generatedError ? void 0 : (this.end(), true));
              }, g.prototype.error = function(m) {
                var y = this._sources;
                if (!s.prototype.error.call(this, m)) return false;
                for (var l = 0; l < y.length; l++) try {
                  y[l].error(m);
                } catch {
                }
                return true;
              }, g.prototype.lock = function() {
                s.prototype.lock.call(this);
                for (var m = this._sources, y = 0; y < m.length; y++) m[y].lock();
              }, r.exports = g;
            },
            {
              "../crc32": 4,
              "../signature": 23,
              "../stream/GenericWorker": 28,
              "../utf8": 31,
              "../utils": 32
            }
          ],
          9: [
            function(n, r, a) {
              var i = n("../compressions"), c = n("./ZipFileWorker");
              a.generateWorker = function(o, s, d) {
                var b = new c(s.streamFiles, d, s.platform, s.encodeFileName), p = 0;
                try {
                  o.forEach(function(g, m) {
                    p++;
                    var y = function(f, v) {
                      var w = f || v, x = i[w];
                      if (!x) throw new Error(w + " is not a valid compression method !");
                      return x;
                    }(m.options.compression, s.compression), l = m.options.compressionOptions || s.compressionOptions || {}, u = m.dir, h = m.date;
                    m._compressWorker(y, l).withStreamInfo("file", {
                      name: g,
                      dir: u,
                      date: h,
                      comment: m.comment || "",
                      unixPermissions: m.unixPermissions,
                      dosPermissions: m.dosPermissions
                    }).pipe(b);
                  }), b.entriesCount = p;
                } catch (g) {
                  b.error(g);
                }
                return b;
              };
            },
            {
              "../compressions": 3,
              "./ZipFileWorker": 8
            }
          ],
          10: [
            function(n, r, a) {
              function i() {
                if (!(this instanceof i)) return new i();
                if (arguments.length) throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");
                this.files = /* @__PURE__ */ Object.create(null), this.comment = null, this.root = "", this.clone = function() {
                  var c = new i();
                  for (var o in this) typeof this[o] != "function" && (c[o] = this[o]);
                  return c;
                };
              }
              (i.prototype = n("./object")).loadAsync = n("./load"), i.support = n("./support"), i.defaults = n("./defaults"), i.version = "3.10.1", i.loadAsync = function(c, o) {
                return new i().loadAsync(c, o);
              }, i.external = n("./external"), r.exports = i;
            },
            {
              "./defaults": 5,
              "./external": 6,
              "./load": 11,
              "./object": 15,
              "./support": 30
            }
          ],
          11: [
            function(n, r, a) {
              var i = n("./utils"), c = n("./external"), o = n("./utf8"), s = n("./zipEntries"), d = n("./stream/Crc32Probe"), b = n("./nodejsUtils");
              function p(g) {
                return new c.Promise(function(m, y) {
                  var l = g.decompressed.getContentWorker().pipe(new d());
                  l.on("error", function(u) {
                    y(u);
                  }).on("end", function() {
                    l.streamInfo.crc32 !== g.decompressed.crc32 ? y(new Error("Corrupted zip : CRC32 mismatch")) : m();
                  }).resume();
                });
              }
              r.exports = function(g, m) {
                var y = this;
                return m = i.extend(m || {}, {
                  base64: false,
                  checkCRC32: false,
                  optimizedBinaryString: false,
                  createFolders: false,
                  decodeFileName: o.utf8decode
                }), b.isNode && b.isStream(g) ? c.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")) : i.prepareContent("the loaded zip file", g, true, m.optimizedBinaryString, m.base64).then(function(l) {
                  var u = new s(m);
                  return u.load(l), u;
                }).then(function(l) {
                  var u = [
                    c.Promise.resolve(l)
                  ], h = l.files;
                  if (m.checkCRC32) for (var f = 0; f < h.length; f++) u.push(p(h[f]));
                  return c.Promise.all(u);
                }).then(function(l) {
                  for (var u = l.shift(), h = u.files, f = 0; f < h.length; f++) {
                    var v = h[f], w = v.fileNameStr, x = i.resolve(v.fileNameStr);
                    y.file(x, v.decompressed, {
                      binary: true,
                      optimizedBinaryString: true,
                      date: v.date,
                      dir: v.dir,
                      comment: v.fileCommentStr.length ? v.fileCommentStr : null,
                      unixPermissions: v.unixPermissions,
                      dosPermissions: v.dosPermissions,
                      createFolders: m.createFolders
                    }), v.dir || (y.file(x).unsafeOriginalName = w);
                  }
                  return u.zipComment.length && (y.comment = u.zipComment), y;
                });
              };
            },
            {
              "./external": 6,
              "./nodejsUtils": 14,
              "./stream/Crc32Probe": 25,
              "./utf8": 31,
              "./utils": 32,
              "./zipEntries": 33
            }
          ],
          12: [
            function(n, r, a) {
              var i = n("../utils"), c = n("../stream/GenericWorker");
              function o(s, d) {
                c.call(this, "Nodejs stream input adapter for " + s), this._upstreamEnded = false, this._bindStream(d);
              }
              i.inherits(o, c), o.prototype._bindStream = function(s) {
                var d = this;
                (this._stream = s).pause(), s.on("data", function(b) {
                  d.push({
                    data: b,
                    meta: {
                      percent: 0
                    }
                  });
                }).on("error", function(b) {
                  d.isPaused ? this.generatedError = b : d.error(b);
                }).on("end", function() {
                  d.isPaused ? d._upstreamEnded = true : d.end();
                });
              }, o.prototype.pause = function() {
                return !!c.prototype.pause.call(this) && (this._stream.pause(), true);
              }, o.prototype.resume = function() {
                return !!c.prototype.resume.call(this) && (this._upstreamEnded ? this.end() : this._stream.resume(), true);
              }, r.exports = o;
            },
            {
              "../stream/GenericWorker": 28,
              "../utils": 32
            }
          ],
          13: [
            function(n, r, a) {
              var i = n("readable-stream").Readable;
              function c(o, s, d) {
                i.call(this, s), this._helper = o;
                var b = this;
                o.on("data", function(p, g) {
                  b.push(p) || b._helper.pause(), d && d(g);
                }).on("error", function(p) {
                  b.emit("error", p);
                }).on("end", function() {
                  b.push(null);
                });
              }
              n("../utils").inherits(c, i), c.prototype._read = function() {
                this._helper.resume();
              }, r.exports = c;
            },
            {
              "../utils": 32,
              "readable-stream": 16
            }
          ],
          14: [
            function(n, r, a) {
              r.exports = {
                isNode: typeof Buffer < "u",
                newBufferFrom: function(i, c) {
                  if (Buffer.from && Buffer.from !== Uint8Array.from) return Buffer.from(i, c);
                  if (typeof i == "number") throw new Error('The "data" argument must not be a number');
                  return new Buffer(i, c);
                },
                allocBuffer: function(i) {
                  if (Buffer.alloc) return Buffer.alloc(i);
                  var c = new Buffer(i);
                  return c.fill(0), c;
                },
                isBuffer: function(i) {
                  return Buffer.isBuffer(i);
                },
                isStream: function(i) {
                  return i && typeof i.on == "function" && typeof i.pause == "function" && typeof i.resume == "function";
                }
              };
            },
            {}
          ],
          15: [
            function(n, r, a) {
              function i(x, U, E) {
                var F, C = o.getTypeOf(U), R = o.extend(E || {}, b);
                R.date = R.date || /* @__PURE__ */ new Date(), R.compression !== null && (R.compression = R.compression.toUpperCase()), typeof R.unixPermissions == "string" && (R.unixPermissions = parseInt(R.unixPermissions, 8)), R.unixPermissions && 16384 & R.unixPermissions && (R.dir = true), R.dosPermissions && 16 & R.dosPermissions && (R.dir = true), R.dir && (x = h(x)), R.createFolders && (F = u(x)) && f.call(this, F, true);
                var z = C === "string" && R.binary === false && R.base64 === false;
                E && E.binary !== void 0 || (R.binary = !z), (U instanceof p && U.uncompressedSize === 0 || R.dir || !U || U.length === 0) && (R.base64 = false, R.binary = true, U = "", R.compression = "STORE", C = "string");
                var T = null;
                T = U instanceof p || U instanceof s ? U : y.isNode && y.isStream(U) ? new l(x, U) : o.prepareContent(x, U, R.binary, R.optimizedBinaryString, R.base64);
                var B = new g(x, T, R);
                this.files[x] = B;
              }
              var c = n("./utf8"), o = n("./utils"), s = n("./stream/GenericWorker"), d = n("./stream/StreamHelper"), b = n("./defaults"), p = n("./compressedObject"), g = n("./zipObject"), m = n("./generate"), y = n("./nodejsUtils"), l = n("./nodejs/NodejsStreamInputAdapter"), u = function(x) {
                x.slice(-1) === "/" && (x = x.substring(0, x.length - 1));
                var U = x.lastIndexOf("/");
                return 0 < U ? x.substring(0, U) : "";
              }, h = function(x) {
                return x.slice(-1) !== "/" && (x += "/"), x;
              }, f = function(x, U) {
                return U = U !== void 0 ? U : b.createFolders, x = h(x), this.files[x] || i.call(this, x, null, {
                  dir: true,
                  createFolders: U
                }), this.files[x];
              };
              function v(x) {
                return Object.prototype.toString.call(x) === "[object RegExp]";
              }
              var w = {
                load: function() {
                  throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
                },
                forEach: function(x) {
                  var U, E, F;
                  for (U in this.files) F = this.files[U], (E = U.slice(this.root.length, U.length)) && U.slice(0, this.root.length) === this.root && x(E, F);
                },
                filter: function(x) {
                  var U = [];
                  return this.forEach(function(E, F) {
                    x(E, F) && U.push(F);
                  }), U;
                },
                file: function(x, U, E) {
                  if (arguments.length !== 1) return x = this.root + x, i.call(this, x, U, E), this;
                  if (v(x)) {
                    var F = x;
                    return this.filter(function(R, z) {
                      return !z.dir && F.test(R);
                    });
                  }
                  var C = this.files[this.root + x];
                  return C && !C.dir ? C : null;
                },
                folder: function(x) {
                  if (!x) return this;
                  if (v(x)) return this.filter(function(C, R) {
                    return R.dir && x.test(C);
                  });
                  var U = this.root + x, E = f.call(this, U), F = this.clone();
                  return F.root = E.name, F;
                },
                remove: function(x) {
                  x = this.root + x;
                  var U = this.files[x];
                  if (U || (x.slice(-1) !== "/" && (x += "/"), U = this.files[x]), U && !U.dir) delete this.files[x];
                  else for (var E = this.filter(function(C, R) {
                    return R.name.slice(0, x.length) === x;
                  }), F = 0; F < E.length; F++) delete this.files[E[F].name];
                  return this;
                },
                generate: function() {
                  throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
                },
                generateInternalStream: function(x) {
                  var U, E = {};
                  try {
                    if ((E = o.extend(x || {}, {
                      streamFiles: false,
                      compression: "STORE",
                      compressionOptions: null,
                      type: "",
                      platform: "DOS",
                      comment: null,
                      mimeType: "application/zip",
                      encodeFileName: c.utf8encode
                    })).type = E.type.toLowerCase(), E.compression = E.compression.toUpperCase(), E.type === "binarystring" && (E.type = "string"), !E.type) throw new Error("No output type specified.");
                    o.checkSupport(E.type), E.platform !== "darwin" && E.platform !== "freebsd" && E.platform !== "linux" && E.platform !== "sunos" || (E.platform = "UNIX"), E.platform === "win32" && (E.platform = "DOS");
                    var F = E.comment || this.comment || "";
                    U = m.generateWorker(this, E, F);
                  } catch (C) {
                    (U = new s("error")).error(C);
                  }
                  return new d(U, E.type || "string", E.mimeType);
                },
                generateAsync: function(x, U) {
                  return this.generateInternalStream(x).accumulate(U);
                },
                generateNodeStream: function(x, U) {
                  return (x = x || {}).type || (x.type = "nodebuffer"), this.generateInternalStream(x).toNodejsStream(U);
                }
              };
              r.exports = w;
            },
            {
              "./compressedObject": 2,
              "./defaults": 5,
              "./generate": 9,
              "./nodejs/NodejsStreamInputAdapter": 12,
              "./nodejsUtils": 14,
              "./stream/GenericWorker": 28,
              "./stream/StreamHelper": 29,
              "./utf8": 31,
              "./utils": 32,
              "./zipObject": 35
            }
          ],
          16: [
            function(n, r, a) {
              r.exports = n("stream");
            },
            {
              stream: void 0
            }
          ],
          17: [
            function(n, r, a) {
              var i = n("./DataReader");
              function c(o) {
                i.call(this, o);
                for (var s = 0; s < this.data.length; s++) o[s] = 255 & o[s];
              }
              n("../utils").inherits(c, i), c.prototype.byteAt = function(o) {
                return this.data[this.zero + o];
              }, c.prototype.lastIndexOfSignature = function(o) {
                for (var s = o.charCodeAt(0), d = o.charCodeAt(1), b = o.charCodeAt(2), p = o.charCodeAt(3), g = this.length - 4; 0 <= g; --g) if (this.data[g] === s && this.data[g + 1] === d && this.data[g + 2] === b && this.data[g + 3] === p) return g - this.zero;
                return -1;
              }, c.prototype.readAndCheckSignature = function(o) {
                var s = o.charCodeAt(0), d = o.charCodeAt(1), b = o.charCodeAt(2), p = o.charCodeAt(3), g = this.readData(4);
                return s === g[0] && d === g[1] && b === g[2] && p === g[3];
              }, c.prototype.readData = function(o) {
                if (this.checkOffset(o), o === 0) return [];
                var s = this.data.slice(this.zero + this.index, this.zero + this.index + o);
                return this.index += o, s;
              }, r.exports = c;
            },
            {
              "../utils": 32,
              "./DataReader": 18
            }
          ],
          18: [
            function(n, r, a) {
              var i = n("../utils");
              function c(o) {
                this.data = o, this.length = o.length, this.index = 0, this.zero = 0;
              }
              c.prototype = {
                checkOffset: function(o) {
                  this.checkIndex(this.index + o);
                },
                checkIndex: function(o) {
                  if (this.length < this.zero + o || o < 0) throw new Error("End of data reached (data length = " + this.length + ", asked index = " + o + "). Corrupted zip ?");
                },
                setIndex: function(o) {
                  this.checkIndex(o), this.index = o;
                },
                skip: function(o) {
                  this.setIndex(this.index + o);
                },
                byteAt: function() {
                },
                readInt: function(o) {
                  var s, d = 0;
                  for (this.checkOffset(o), s = this.index + o - 1; s >= this.index; s--) d = (d << 8) + this.byteAt(s);
                  return this.index += o, d;
                },
                readString: function(o) {
                  return i.transformTo("string", this.readData(o));
                },
                readData: function() {
                },
                lastIndexOfSignature: function() {
                },
                readAndCheckSignature: function() {
                },
                readDate: function() {
                  var o = this.readInt(4);
                  return new Date(Date.UTC(1980 + (o >> 25 & 127), (o >> 21 & 15) - 1, o >> 16 & 31, o >> 11 & 31, o >> 5 & 63, (31 & o) << 1));
                }
              }, r.exports = c;
            },
            {
              "../utils": 32
            }
          ],
          19: [
            function(n, r, a) {
              var i = n("./Uint8ArrayReader");
              function c(o) {
                i.call(this, o);
              }
              n("../utils").inherits(c, i), c.prototype.readData = function(o) {
                this.checkOffset(o);
                var s = this.data.slice(this.zero + this.index, this.zero + this.index + o);
                return this.index += o, s;
              }, r.exports = c;
            },
            {
              "../utils": 32,
              "./Uint8ArrayReader": 21
            }
          ],
          20: [
            function(n, r, a) {
              var i = n("./DataReader");
              function c(o) {
                i.call(this, o);
              }
              n("../utils").inherits(c, i), c.prototype.byteAt = function(o) {
                return this.data.charCodeAt(this.zero + o);
              }, c.prototype.lastIndexOfSignature = function(o) {
                return this.data.lastIndexOf(o) - this.zero;
              }, c.prototype.readAndCheckSignature = function(o) {
                return o === this.readData(4);
              }, c.prototype.readData = function(o) {
                this.checkOffset(o);
                var s = this.data.slice(this.zero + this.index, this.zero + this.index + o);
                return this.index += o, s;
              }, r.exports = c;
            },
            {
              "../utils": 32,
              "./DataReader": 18
            }
          ],
          21: [
            function(n, r, a) {
              var i = n("./ArrayReader");
              function c(o) {
                i.call(this, o);
              }
              n("../utils").inherits(c, i), c.prototype.readData = function(o) {
                if (this.checkOffset(o), o === 0) return new Uint8Array(0);
                var s = this.data.subarray(this.zero + this.index, this.zero + this.index + o);
                return this.index += o, s;
              }, r.exports = c;
            },
            {
              "../utils": 32,
              "./ArrayReader": 17
            }
          ],
          22: [
            function(n, r, a) {
              var i = n("../utils"), c = n("../support"), o = n("./ArrayReader"), s = n("./StringReader"), d = n("./NodeBufferReader"), b = n("./Uint8ArrayReader");
              r.exports = function(p) {
                var g = i.getTypeOf(p);
                return i.checkSupport(g), g !== "string" || c.uint8array ? g === "nodebuffer" ? new d(p) : c.uint8array ? new b(i.transformTo("uint8array", p)) : new o(i.transformTo("array", p)) : new s(p);
              };
            },
            {
              "../support": 30,
              "../utils": 32,
              "./ArrayReader": 17,
              "./NodeBufferReader": 19,
              "./StringReader": 20,
              "./Uint8ArrayReader": 21
            }
          ],
          23: [
            function(n, r, a) {
              a.LOCAL_FILE_HEADER = "PK", a.CENTRAL_FILE_HEADER = "PK", a.CENTRAL_DIRECTORY_END = "PK", a.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK\x07", a.ZIP64_CENTRAL_DIRECTORY_END = "PK", a.DATA_DESCRIPTOR = "PK\x07\b";
            },
            {}
          ],
          24: [
            function(n, r, a) {
              var i = n("./GenericWorker"), c = n("../utils");
              function o(s) {
                i.call(this, "ConvertWorker to " + s), this.destType = s;
              }
              c.inherits(o, i), o.prototype.processChunk = function(s) {
                this.push({
                  data: c.transformTo(this.destType, s.data),
                  meta: s.meta
                });
              }, r.exports = o;
            },
            {
              "../utils": 32,
              "./GenericWorker": 28
            }
          ],
          25: [
            function(n, r, a) {
              var i = n("./GenericWorker"), c = n("../crc32");
              function o() {
                i.call(this, "Crc32Probe"), this.withStreamInfo("crc32", 0);
              }
              n("../utils").inherits(o, i), o.prototype.processChunk = function(s) {
                this.streamInfo.crc32 = c(s.data, this.streamInfo.crc32 || 0), this.push(s);
              }, r.exports = o;
            },
            {
              "../crc32": 4,
              "../utils": 32,
              "./GenericWorker": 28
            }
          ],
          26: [
            function(n, r, a) {
              var i = n("../utils"), c = n("./GenericWorker");
              function o(s) {
                c.call(this, "DataLengthProbe for " + s), this.propName = s, this.withStreamInfo(s, 0);
              }
              i.inherits(o, c), o.prototype.processChunk = function(s) {
                if (s) {
                  var d = this.streamInfo[this.propName] || 0;
                  this.streamInfo[this.propName] = d + s.data.length;
                }
                c.prototype.processChunk.call(this, s);
              }, r.exports = o;
            },
            {
              "../utils": 32,
              "./GenericWorker": 28
            }
          ],
          27: [
            function(n, r, a) {
              var i = n("../utils"), c = n("./GenericWorker");
              function o(s) {
                c.call(this, "DataWorker");
                var d = this;
                this.dataIsReady = false, this.index = 0, this.max = 0, this.data = null, this.type = "", this._tickScheduled = false, s.then(function(b) {
                  d.dataIsReady = true, d.data = b, d.max = b && b.length || 0, d.type = i.getTypeOf(b), d.isPaused || d._tickAndRepeat();
                }, function(b) {
                  d.error(b);
                });
              }
              i.inherits(o, c), o.prototype.cleanUp = function() {
                c.prototype.cleanUp.call(this), this.data = null;
              }, o.prototype.resume = function() {
                return !!c.prototype.resume.call(this) && (!this._tickScheduled && this.dataIsReady && (this._tickScheduled = true, i.delay(this._tickAndRepeat, [], this)), true);
              }, o.prototype._tickAndRepeat = function() {
                this._tickScheduled = false, this.isPaused || this.isFinished || (this._tick(), this.isFinished || (i.delay(this._tickAndRepeat, [], this), this._tickScheduled = true));
              }, o.prototype._tick = function() {
                if (this.isPaused || this.isFinished) return false;
                var s = null, d = Math.min(this.max, this.index + 16384);
                if (this.index >= this.max) return this.end();
                switch (this.type) {
                  case "string":
                    s = this.data.substring(this.index, d);
                    break;
                  case "uint8array":
                    s = this.data.subarray(this.index, d);
                    break;
                  case "array":
                  case "nodebuffer":
                    s = this.data.slice(this.index, d);
                }
                return this.index = d, this.push({
                  data: s,
                  meta: {
                    percent: this.max ? this.index / this.max * 100 : 0
                  }
                });
              }, r.exports = o;
            },
            {
              "../utils": 32,
              "./GenericWorker": 28
            }
          ],
          28: [
            function(n, r, a) {
              function i(c) {
                this.name = c || "default", this.streamInfo = {}, this.generatedError = null, this.extraStreamInfo = {}, this.isPaused = true, this.isFinished = false, this.isLocked = false, this._listeners = {
                  data: [],
                  end: [],
                  error: []
                }, this.previous = null;
              }
              i.prototype = {
                push: function(c) {
                  this.emit("data", c);
                },
                end: function() {
                  if (this.isFinished) return false;
                  this.flush();
                  try {
                    this.emit("end"), this.cleanUp(), this.isFinished = true;
                  } catch (c) {
                    this.emit("error", c);
                  }
                  return true;
                },
                error: function(c) {
                  return !this.isFinished && (this.isPaused ? this.generatedError = c : (this.isFinished = true, this.emit("error", c), this.previous && this.previous.error(c), this.cleanUp()), true);
                },
                on: function(c, o) {
                  return this._listeners[c].push(o), this;
                },
                cleanUp: function() {
                  this.streamInfo = this.generatedError = this.extraStreamInfo = null, this._listeners = [];
                },
                emit: function(c, o) {
                  if (this._listeners[c]) for (var s = 0; s < this._listeners[c].length; s++) this._listeners[c][s].call(this, o);
                },
                pipe: function(c) {
                  return c.registerPrevious(this);
                },
                registerPrevious: function(c) {
                  if (this.isLocked) throw new Error("The stream '" + this + "' has already been used.");
                  this.streamInfo = c.streamInfo, this.mergeStreamInfo(), this.previous = c;
                  var o = this;
                  return c.on("data", function(s) {
                    o.processChunk(s);
                  }), c.on("end", function() {
                    o.end();
                  }), c.on("error", function(s) {
                    o.error(s);
                  }), this;
                },
                pause: function() {
                  return !this.isPaused && !this.isFinished && (this.isPaused = true, this.previous && this.previous.pause(), true);
                },
                resume: function() {
                  if (!this.isPaused || this.isFinished) return false;
                  var c = this.isPaused = false;
                  return this.generatedError && (this.error(this.generatedError), c = true), this.previous && this.previous.resume(), !c;
                },
                flush: function() {
                },
                processChunk: function(c) {
                  this.push(c);
                },
                withStreamInfo: function(c, o) {
                  return this.extraStreamInfo[c] = o, this.mergeStreamInfo(), this;
                },
                mergeStreamInfo: function() {
                  for (var c in this.extraStreamInfo) Object.prototype.hasOwnProperty.call(this.extraStreamInfo, c) && (this.streamInfo[c] = this.extraStreamInfo[c]);
                },
                lock: function() {
                  if (this.isLocked) throw new Error("The stream '" + this + "' has already been used.");
                  this.isLocked = true, this.previous && this.previous.lock();
                },
                toString: function() {
                  var c = "Worker " + this.name;
                  return this.previous ? this.previous + " -> " + c : c;
                }
              }, r.exports = i;
            },
            {}
          ],
          29: [
            function(n, r, a) {
              var i = n("../utils"), c = n("./ConvertWorker"), o = n("./GenericWorker"), s = n("../base64"), d = n("../support"), b = n("../external"), p = null;
              if (d.nodestream) try {
                p = n("../nodejs/NodejsStreamOutputAdapter");
              } catch {
              }
              function g(y, l) {
                return new b.Promise(function(u, h) {
                  var f = [], v = y._internalType, w = y._outputType, x = y._mimeType;
                  y.on("data", function(U, E) {
                    f.push(U), l && l(E);
                  }).on("error", function(U) {
                    f = [], h(U);
                  }).on("end", function() {
                    try {
                      var U = function(E, F, C) {
                        switch (E) {
                          case "blob":
                            return i.newBlob(i.transformTo("arraybuffer", F), C);
                          case "base64":
                            return s.encode(F);
                          default:
                            return i.transformTo(E, F);
                        }
                      }(w, function(E, F) {
                        var C, R = 0, z = null, T = 0;
                        for (C = 0; C < F.length; C++) T += F[C].length;
                        switch (E) {
                          case "string":
                            return F.join("");
                          case "array":
                            return Array.prototype.concat.apply([], F);
                          case "uint8array":
                            for (z = new Uint8Array(T), C = 0; C < F.length; C++) z.set(F[C], R), R += F[C].length;
                            return z;
                          case "nodebuffer":
                            return Buffer.concat(F);
                          default:
                            throw new Error("concat : unsupported type '" + E + "'");
                        }
                      }(v, f), x);
                      u(U);
                    } catch (E) {
                      h(E);
                    }
                    f = [];
                  }).resume();
                });
              }
              function m(y, l, u) {
                var h = l;
                switch (l) {
                  case "blob":
                  case "arraybuffer":
                    h = "uint8array";
                    break;
                  case "base64":
                    h = "string";
                }
                try {
                  this._internalType = h, this._outputType = l, this._mimeType = u, i.checkSupport(h), this._worker = y.pipe(new c(h)), y.lock();
                } catch (f) {
                  this._worker = new o("error"), this._worker.error(f);
                }
              }
              m.prototype = {
                accumulate: function(y) {
                  return g(this, y);
                },
                on: function(y, l) {
                  var u = this;
                  return y === "data" ? this._worker.on(y, function(h) {
                    l.call(u, h.data, h.meta);
                  }) : this._worker.on(y, function() {
                    i.delay(l, arguments, u);
                  }), this;
                },
                resume: function() {
                  return i.delay(this._worker.resume, [], this._worker), this;
                },
                pause: function() {
                  return this._worker.pause(), this;
                },
                toNodejsStream: function(y) {
                  if (i.checkSupport("nodestream"), this._outputType !== "nodebuffer") throw new Error(this._outputType + " is not supported by this method");
                  return new p(this, {
                    objectMode: this._outputType !== "nodebuffer"
                  }, y);
                }
              }, r.exports = m;
            },
            {
              "../base64": 1,
              "../external": 6,
              "../nodejs/NodejsStreamOutputAdapter": 13,
              "../support": 30,
              "../utils": 32,
              "./ConvertWorker": 24,
              "./GenericWorker": 28
            }
          ],
          30: [
            function(n, r, a) {
              if (a.base64 = true, a.array = true, a.string = true, a.arraybuffer = typeof ArrayBuffer < "u" && typeof Uint8Array < "u", a.nodebuffer = typeof Buffer < "u", a.uint8array = typeof Uint8Array < "u", typeof ArrayBuffer > "u") a.blob = false;
              else {
                var i = new ArrayBuffer(0);
                try {
                  a.blob = new Blob([
                    i
                  ], {
                    type: "application/zip"
                  }).size === 0;
                } catch {
                  try {
                    var c = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
                    c.append(i), a.blob = c.getBlob("application/zip").size === 0;
                  } catch {
                    a.blob = false;
                  }
                }
              }
              try {
                a.nodestream = !!n("readable-stream").Readable;
              } catch {
                a.nodestream = false;
              }
            },
            {
              "readable-stream": 16
            }
          ],
          31: [
            function(n, r, a) {
              for (var i = n("./utils"), c = n("./support"), o = n("./nodejsUtils"), s = n("./stream/GenericWorker"), d = new Array(256), b = 0; b < 256; b++) d[b] = 252 <= b ? 6 : 248 <= b ? 5 : 240 <= b ? 4 : 224 <= b ? 3 : 192 <= b ? 2 : 1;
              d[254] = d[254] = 1;
              function p() {
                s.call(this, "utf-8 decode"), this.leftOver = null;
              }
              function g() {
                s.call(this, "utf-8 encode");
              }
              a.utf8encode = function(m) {
                return c.nodebuffer ? o.newBufferFrom(m, "utf-8") : function(y) {
                  var l, u, h, f, v, w = y.length, x = 0;
                  for (f = 0; f < w; f++) (64512 & (u = y.charCodeAt(f))) == 55296 && f + 1 < w && (64512 & (h = y.charCodeAt(f + 1))) == 56320 && (u = 65536 + (u - 55296 << 10) + (h - 56320), f++), x += u < 128 ? 1 : u < 2048 ? 2 : u < 65536 ? 3 : 4;
                  for (l = c.uint8array ? new Uint8Array(x) : new Array(x), f = v = 0; v < x; f++) (64512 & (u = y.charCodeAt(f))) == 55296 && f + 1 < w && (64512 & (h = y.charCodeAt(f + 1))) == 56320 && (u = 65536 + (u - 55296 << 10) + (h - 56320), f++), u < 128 ? l[v++] = u : (u < 2048 ? l[v++] = 192 | u >>> 6 : (u < 65536 ? l[v++] = 224 | u >>> 12 : (l[v++] = 240 | u >>> 18, l[v++] = 128 | u >>> 12 & 63), l[v++] = 128 | u >>> 6 & 63), l[v++] = 128 | 63 & u);
                  return l;
                }(m);
              }, a.utf8decode = function(m) {
                return c.nodebuffer ? i.transformTo("nodebuffer", m).toString("utf-8") : function(y) {
                  var l, u, h, f, v = y.length, w = new Array(2 * v);
                  for (l = u = 0; l < v; ) if ((h = y[l++]) < 128) w[u++] = h;
                  else if (4 < (f = d[h])) w[u++] = 65533, l += f - 1;
                  else {
                    for (h &= f === 2 ? 31 : f === 3 ? 15 : 7; 1 < f && l < v; ) h = h << 6 | 63 & y[l++], f--;
                    1 < f ? w[u++] = 65533 : h < 65536 ? w[u++] = h : (h -= 65536, w[u++] = 55296 | h >> 10 & 1023, w[u++] = 56320 | 1023 & h);
                  }
                  return w.length !== u && (w.subarray ? w = w.subarray(0, u) : w.length = u), i.applyFromCharCode(w);
                }(m = i.transformTo(c.uint8array ? "uint8array" : "array", m));
              }, i.inherits(p, s), p.prototype.processChunk = function(m) {
                var y = i.transformTo(c.uint8array ? "uint8array" : "array", m.data);
                if (this.leftOver && this.leftOver.length) {
                  if (c.uint8array) {
                    var l = y;
                    (y = new Uint8Array(l.length + this.leftOver.length)).set(this.leftOver, 0), y.set(l, this.leftOver.length);
                  } else y = this.leftOver.concat(y);
                  this.leftOver = null;
                }
                var u = function(f, v) {
                  var w;
                  for ((v = v || f.length) > f.length && (v = f.length), w = v - 1; 0 <= w && (192 & f[w]) == 128; ) w--;
                  return w < 0 || w === 0 ? v : w + d[f[w]] > v ? w : v;
                }(y), h = y;
                u !== y.length && (c.uint8array ? (h = y.subarray(0, u), this.leftOver = y.subarray(u, y.length)) : (h = y.slice(0, u), this.leftOver = y.slice(u, y.length))), this.push({
                  data: a.utf8decode(h),
                  meta: m.meta
                });
              }, p.prototype.flush = function() {
                this.leftOver && this.leftOver.length && (this.push({
                  data: a.utf8decode(this.leftOver),
                  meta: {}
                }), this.leftOver = null);
              }, a.Utf8DecodeWorker = p, i.inherits(g, s), g.prototype.processChunk = function(m) {
                this.push({
                  data: a.utf8encode(m.data),
                  meta: m.meta
                });
              }, a.Utf8EncodeWorker = g;
            },
            {
              "./nodejsUtils": 14,
              "./stream/GenericWorker": 28,
              "./support": 30,
              "./utils": 32
            }
          ],
          32: [
            function(n, r, a) {
              var i = n("./support"), c = n("./base64"), o = n("./nodejsUtils"), s = n("./external");
              function d(l) {
                return l;
              }
              function b(l, u) {
                for (var h = 0; h < l.length; ++h) u[h] = 255 & l.charCodeAt(h);
                return u;
              }
              n("setimmediate"), a.newBlob = function(l, u) {
                a.checkSupport("blob");
                try {
                  return new Blob([
                    l
                  ], {
                    type: u
                  });
                } catch {
                  try {
                    var h = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
                    return h.append(l), h.getBlob(u);
                  } catch {
                    throw new Error("Bug : can't construct the Blob.");
                  }
                }
              };
              var p = {
                stringifyByChunk: function(l, u, h) {
                  var f = [], v = 0, w = l.length;
                  if (w <= h) return String.fromCharCode.apply(null, l);
                  for (; v < w; ) u === "array" || u === "nodebuffer" ? f.push(String.fromCharCode.apply(null, l.slice(v, Math.min(v + h, w)))) : f.push(String.fromCharCode.apply(null, l.subarray(v, Math.min(v + h, w)))), v += h;
                  return f.join("");
                },
                stringifyByChar: function(l) {
                  for (var u = "", h = 0; h < l.length; h++) u += String.fromCharCode(l[h]);
                  return u;
                },
                applyCanBeUsed: {
                  uint8array: function() {
                    try {
                      return i.uint8array && String.fromCharCode.apply(null, new Uint8Array(1)).length === 1;
                    } catch {
                      return false;
                    }
                  }(),
                  nodebuffer: function() {
                    try {
                      return i.nodebuffer && String.fromCharCode.apply(null, o.allocBuffer(1)).length === 1;
                    } catch {
                      return false;
                    }
                  }()
                }
              };
              function g(l) {
                var u = 65536, h = a.getTypeOf(l), f = true;
                if (h === "uint8array" ? f = p.applyCanBeUsed.uint8array : h === "nodebuffer" && (f = p.applyCanBeUsed.nodebuffer), f) for (; 1 < u; ) try {
                  return p.stringifyByChunk(l, h, u);
                } catch {
                  u = Math.floor(u / 2);
                }
                return p.stringifyByChar(l);
              }
              function m(l, u) {
                for (var h = 0; h < l.length; h++) u[h] = l[h];
                return u;
              }
              a.applyFromCharCode = g;
              var y = {};
              y.string = {
                string: d,
                array: function(l) {
                  return b(l, new Array(l.length));
                },
                arraybuffer: function(l) {
                  return y.string.uint8array(l).buffer;
                },
                uint8array: function(l) {
                  return b(l, new Uint8Array(l.length));
                },
                nodebuffer: function(l) {
                  return b(l, o.allocBuffer(l.length));
                }
              }, y.array = {
                string: g,
                array: d,
                arraybuffer: function(l) {
                  return new Uint8Array(l).buffer;
                },
                uint8array: function(l) {
                  return new Uint8Array(l);
                },
                nodebuffer: function(l) {
                  return o.newBufferFrom(l);
                }
              }, y.arraybuffer = {
                string: function(l) {
                  return g(new Uint8Array(l));
                },
                array: function(l) {
                  return m(new Uint8Array(l), new Array(l.byteLength));
                },
                arraybuffer: d,
                uint8array: function(l) {
                  return new Uint8Array(l);
                },
                nodebuffer: function(l) {
                  return o.newBufferFrom(new Uint8Array(l));
                }
              }, y.uint8array = {
                string: g,
                array: function(l) {
                  return m(l, new Array(l.length));
                },
                arraybuffer: function(l) {
                  return l.buffer;
                },
                uint8array: d,
                nodebuffer: function(l) {
                  return o.newBufferFrom(l);
                }
              }, y.nodebuffer = {
                string: g,
                array: function(l) {
                  return m(l, new Array(l.length));
                },
                arraybuffer: function(l) {
                  return y.nodebuffer.uint8array(l).buffer;
                },
                uint8array: function(l) {
                  return m(l, new Uint8Array(l.length));
                },
                nodebuffer: d
              }, a.transformTo = function(l, u) {
                if (u = u || "", !l) return u;
                a.checkSupport(l);
                var h = a.getTypeOf(u);
                return y[h][l](u);
              }, a.resolve = function(l) {
                for (var u = l.split("/"), h = [], f = 0; f < u.length; f++) {
                  var v = u[f];
                  v === "." || v === "" && f !== 0 && f !== u.length - 1 || (v === ".." ? h.pop() : h.push(v));
                }
                return h.join("/");
              }, a.getTypeOf = function(l) {
                return typeof l == "string" ? "string" : Object.prototype.toString.call(l) === "[object Array]" ? "array" : i.nodebuffer && o.isBuffer(l) ? "nodebuffer" : i.uint8array && l instanceof Uint8Array ? "uint8array" : i.arraybuffer && l instanceof ArrayBuffer ? "arraybuffer" : void 0;
              }, a.checkSupport = function(l) {
                if (!i[l.toLowerCase()]) throw new Error(l + " is not supported by this platform");
              }, a.MAX_VALUE_16BITS = 65535, a.MAX_VALUE_32BITS = -1, a.pretty = function(l) {
                var u, h, f = "";
                for (h = 0; h < (l || "").length; h++) f += "\\x" + ((u = l.charCodeAt(h)) < 16 ? "0" : "") + u.toString(16).toUpperCase();
                return f;
              }, a.delay = function(l, u, h) {
                setImmediate(function() {
                  l.apply(h || null, u || []);
                });
              }, a.inherits = function(l, u) {
                function h() {
                }
                h.prototype = u.prototype, l.prototype = new h();
              }, a.extend = function() {
                var l, u, h = {};
                for (l = 0; l < arguments.length; l++) for (u in arguments[l]) Object.prototype.hasOwnProperty.call(arguments[l], u) && h[u] === void 0 && (h[u] = arguments[l][u]);
                return h;
              }, a.prepareContent = function(l, u, h, f, v) {
                return s.Promise.resolve(u).then(function(w) {
                  return i.blob && (w instanceof Blob || [
                    "[object File]",
                    "[object Blob]"
                  ].indexOf(Object.prototype.toString.call(w)) !== -1) && typeof FileReader < "u" ? new s.Promise(function(x, U) {
                    var E = new FileReader();
                    E.onload = function(F) {
                      x(F.target.result);
                    }, E.onerror = function(F) {
                      U(F.target.error);
                    }, E.readAsArrayBuffer(w);
                  }) : w;
                }).then(function(w) {
                  var x = a.getTypeOf(w);
                  return x ? (x === "arraybuffer" ? w = a.transformTo("uint8array", w) : x === "string" && (v ? w = c.decode(w) : h && f !== true && (w = function(U) {
                    return b(U, i.uint8array ? new Uint8Array(U.length) : new Array(U.length));
                  }(w))), w) : s.Promise.reject(new Error("Can't read the data of '" + l + "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"));
                });
              };
            },
            {
              "./base64": 1,
              "./external": 6,
              "./nodejsUtils": 14,
              "./support": 30,
              setimmediate: 54
            }
          ],
          33: [
            function(n, r, a) {
              var i = n("./reader/readerFor"), c = n("./utils"), o = n("./signature"), s = n("./zipEntry"), d = n("./support");
              function b(p) {
                this.files = [], this.loadOptions = p;
              }
              b.prototype = {
                checkSignature: function(p) {
                  if (!this.reader.readAndCheckSignature(p)) {
                    this.reader.index -= 4;
                    var g = this.reader.readString(4);
                    throw new Error("Corrupted zip or bug: unexpected signature (" + c.pretty(g) + ", expected " + c.pretty(p) + ")");
                  }
                },
                isSignature: function(p, g) {
                  var m = this.reader.index;
                  this.reader.setIndex(p);
                  var y = this.reader.readString(4) === g;
                  return this.reader.setIndex(m), y;
                },
                readBlockEndOfCentral: function() {
                  this.diskNumber = this.reader.readInt(2), this.diskWithCentralDirStart = this.reader.readInt(2), this.centralDirRecordsOnThisDisk = this.reader.readInt(2), this.centralDirRecords = this.reader.readInt(2), this.centralDirSize = this.reader.readInt(4), this.centralDirOffset = this.reader.readInt(4), this.zipCommentLength = this.reader.readInt(2);
                  var p = this.reader.readData(this.zipCommentLength), g = d.uint8array ? "uint8array" : "array", m = c.transformTo(g, p);
                  this.zipComment = this.loadOptions.decodeFileName(m);
                },
                readBlockZip64EndOfCentral: function() {
                  this.zip64EndOfCentralSize = this.reader.readInt(8), this.reader.skip(4), this.diskNumber = this.reader.readInt(4), this.diskWithCentralDirStart = this.reader.readInt(4), this.centralDirRecordsOnThisDisk = this.reader.readInt(8), this.centralDirRecords = this.reader.readInt(8), this.centralDirSize = this.reader.readInt(8), this.centralDirOffset = this.reader.readInt(8), this.zip64ExtensibleData = {};
                  for (var p, g, m, y = this.zip64EndOfCentralSize - 44; 0 < y; ) p = this.reader.readInt(2), g = this.reader.readInt(4), m = this.reader.readData(g), this.zip64ExtensibleData[p] = {
                    id: p,
                    length: g,
                    value: m
                  };
                },
                readBlockZip64EndOfCentralLocator: function() {
                  if (this.diskWithZip64CentralDirStart = this.reader.readInt(4), this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8), this.disksCount = this.reader.readInt(4), 1 < this.disksCount) throw new Error("Multi-volumes zip are not supported");
                },
                readLocalFiles: function() {
                  var p, g;
                  for (p = 0; p < this.files.length; p++) g = this.files[p], this.reader.setIndex(g.localHeaderOffset), this.checkSignature(o.LOCAL_FILE_HEADER), g.readLocalPart(this.reader), g.handleUTF8(), g.processAttributes();
                },
                readCentralDir: function() {
                  var p;
                  for (this.reader.setIndex(this.centralDirOffset); this.reader.readAndCheckSignature(o.CENTRAL_FILE_HEADER); ) (p = new s({
                    zip64: this.zip64
                  }, this.loadOptions)).readCentralPart(this.reader), this.files.push(p);
                  if (this.centralDirRecords !== this.files.length && this.centralDirRecords !== 0 && this.files.length === 0) throw new Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length);
                },
                readEndOfCentral: function() {
                  var p = this.reader.lastIndexOfSignature(o.CENTRAL_DIRECTORY_END);
                  if (p < 0) throw this.isSignature(0, o.LOCAL_FILE_HEADER) ? new Error("Corrupted zip: can't find end of central directory") : new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");
                  this.reader.setIndex(p);
                  var g = p;
                  if (this.checkSignature(o.CENTRAL_DIRECTORY_END), this.readBlockEndOfCentral(), this.diskNumber === c.MAX_VALUE_16BITS || this.diskWithCentralDirStart === c.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === c.MAX_VALUE_16BITS || this.centralDirRecords === c.MAX_VALUE_16BITS || this.centralDirSize === c.MAX_VALUE_32BITS || this.centralDirOffset === c.MAX_VALUE_32BITS) {
                    if (this.zip64 = true, (p = this.reader.lastIndexOfSignature(o.ZIP64_CENTRAL_DIRECTORY_LOCATOR)) < 0) throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");
                    if (this.reader.setIndex(p), this.checkSignature(o.ZIP64_CENTRAL_DIRECTORY_LOCATOR), this.readBlockZip64EndOfCentralLocator(), !this.isSignature(this.relativeOffsetEndOfZip64CentralDir, o.ZIP64_CENTRAL_DIRECTORY_END) && (this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(o.ZIP64_CENTRAL_DIRECTORY_END), this.relativeOffsetEndOfZip64CentralDir < 0)) throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");
                    this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir), this.checkSignature(o.ZIP64_CENTRAL_DIRECTORY_END), this.readBlockZip64EndOfCentral();
                  }
                  var m = this.centralDirOffset + this.centralDirSize;
                  this.zip64 && (m += 20, m += 12 + this.zip64EndOfCentralSize);
                  var y = g - m;
                  if (0 < y) this.isSignature(g, o.CENTRAL_FILE_HEADER) || (this.reader.zero = y);
                  else if (y < 0) throw new Error("Corrupted zip: missing " + Math.abs(y) + " bytes.");
                },
                prepareReader: function(p) {
                  this.reader = i(p);
                },
                load: function(p) {
                  this.prepareReader(p), this.readEndOfCentral(), this.readCentralDir(), this.readLocalFiles();
                }
              }, r.exports = b;
            },
            {
              "./reader/readerFor": 22,
              "./signature": 23,
              "./support": 30,
              "./utils": 32,
              "./zipEntry": 34
            }
          ],
          34: [
            function(n, r, a) {
              var i = n("./reader/readerFor"), c = n("./utils"), o = n("./compressedObject"), s = n("./crc32"), d = n("./utf8"), b = n("./compressions"), p = n("./support");
              function g(m, y) {
                this.options = m, this.loadOptions = y;
              }
              g.prototype = {
                isEncrypted: function() {
                  return (1 & this.bitFlag) == 1;
                },
                useUTF8: function() {
                  return (2048 & this.bitFlag) == 2048;
                },
                readLocalPart: function(m) {
                  var y, l;
                  if (m.skip(22), this.fileNameLength = m.readInt(2), l = m.readInt(2), this.fileName = m.readData(this.fileNameLength), m.skip(l), this.compressedSize === -1 || this.uncompressedSize === -1) throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");
                  if ((y = function(u) {
                    for (var h in b) if (Object.prototype.hasOwnProperty.call(b, h) && b[h].magic === u) return b[h];
                    return null;
                  }(this.compressionMethod)) === null) throw new Error("Corrupted zip : compression " + c.pretty(this.compressionMethod) + " unknown (inner file : " + c.transformTo("string", this.fileName) + ")");
                  this.decompressed = new o(this.compressedSize, this.uncompressedSize, this.crc32, y, m.readData(this.compressedSize));
                },
                readCentralPart: function(m) {
                  this.versionMadeBy = m.readInt(2), m.skip(2), this.bitFlag = m.readInt(2), this.compressionMethod = m.readString(2), this.date = m.readDate(), this.crc32 = m.readInt(4), this.compressedSize = m.readInt(4), this.uncompressedSize = m.readInt(4);
                  var y = m.readInt(2);
                  if (this.extraFieldsLength = m.readInt(2), this.fileCommentLength = m.readInt(2), this.diskNumberStart = m.readInt(2), this.internalFileAttributes = m.readInt(2), this.externalFileAttributes = m.readInt(4), this.localHeaderOffset = m.readInt(4), this.isEncrypted()) throw new Error("Encrypted zip are not supported");
                  m.skip(y), this.readExtraFields(m), this.parseZIP64ExtraField(m), this.fileComment = m.readData(this.fileCommentLength);
                },
                processAttributes: function() {
                  this.unixPermissions = null, this.dosPermissions = null;
                  var m = this.versionMadeBy >> 8;
                  this.dir = !!(16 & this.externalFileAttributes), m == 0 && (this.dosPermissions = 63 & this.externalFileAttributes), m == 3 && (this.unixPermissions = this.externalFileAttributes >> 16 & 65535), this.dir || this.fileNameStr.slice(-1) !== "/" || (this.dir = true);
                },
                parseZIP64ExtraField: function() {
                  if (this.extraFields[1]) {
                    var m = i(this.extraFields[1].value);
                    this.uncompressedSize === c.MAX_VALUE_32BITS && (this.uncompressedSize = m.readInt(8)), this.compressedSize === c.MAX_VALUE_32BITS && (this.compressedSize = m.readInt(8)), this.localHeaderOffset === c.MAX_VALUE_32BITS && (this.localHeaderOffset = m.readInt(8)), this.diskNumberStart === c.MAX_VALUE_32BITS && (this.diskNumberStart = m.readInt(4));
                  }
                },
                readExtraFields: function(m) {
                  var y, l, u, h = m.index + this.extraFieldsLength;
                  for (this.extraFields || (this.extraFields = {}); m.index + 4 < h; ) y = m.readInt(2), l = m.readInt(2), u = m.readData(l), this.extraFields[y] = {
                    id: y,
                    length: l,
                    value: u
                  };
                  m.setIndex(h);
                },
                handleUTF8: function() {
                  var m = p.uint8array ? "uint8array" : "array";
                  if (this.useUTF8()) this.fileNameStr = d.utf8decode(this.fileName), this.fileCommentStr = d.utf8decode(this.fileComment);
                  else {
                    var y = this.findExtraFieldUnicodePath();
                    if (y !== null) this.fileNameStr = y;
                    else {
                      var l = c.transformTo(m, this.fileName);
                      this.fileNameStr = this.loadOptions.decodeFileName(l);
                    }
                    var u = this.findExtraFieldUnicodeComment();
                    if (u !== null) this.fileCommentStr = u;
                    else {
                      var h = c.transformTo(m, this.fileComment);
                      this.fileCommentStr = this.loadOptions.decodeFileName(h);
                    }
                  }
                },
                findExtraFieldUnicodePath: function() {
                  var m = this.extraFields[28789];
                  if (m) {
                    var y = i(m.value);
                    return y.readInt(1) !== 1 || s(this.fileName) !== y.readInt(4) ? null : d.utf8decode(y.readData(m.length - 5));
                  }
                  return null;
                },
                findExtraFieldUnicodeComment: function() {
                  var m = this.extraFields[25461];
                  if (m) {
                    var y = i(m.value);
                    return y.readInt(1) !== 1 || s(this.fileComment) !== y.readInt(4) ? null : d.utf8decode(y.readData(m.length - 5));
                  }
                  return null;
                }
              }, r.exports = g;
            },
            {
              "./compressedObject": 2,
              "./compressions": 3,
              "./crc32": 4,
              "./reader/readerFor": 22,
              "./support": 30,
              "./utf8": 31,
              "./utils": 32
            }
          ],
          35: [
            function(n, r, a) {
              function i(y, l, u) {
                this.name = y, this.dir = u.dir, this.date = u.date, this.comment = u.comment, this.unixPermissions = u.unixPermissions, this.dosPermissions = u.dosPermissions, this._data = l, this._dataBinary = u.binary, this.options = {
                  compression: u.compression,
                  compressionOptions: u.compressionOptions
                };
              }
              var c = n("./stream/StreamHelper"), o = n("./stream/DataWorker"), s = n("./utf8"), d = n("./compressedObject"), b = n("./stream/GenericWorker");
              i.prototype = {
                internalStream: function(y) {
                  var l = null, u = "string";
                  try {
                    if (!y) throw new Error("No output type specified.");
                    var h = (u = y.toLowerCase()) === "string" || u === "text";
                    u !== "binarystring" && u !== "text" || (u = "string"), l = this._decompressWorker();
                    var f = !this._dataBinary;
                    f && !h && (l = l.pipe(new s.Utf8EncodeWorker())), !f && h && (l = l.pipe(new s.Utf8DecodeWorker()));
                  } catch (v) {
                    (l = new b("error")).error(v);
                  }
                  return new c(l, u, "");
                },
                async: function(y, l) {
                  return this.internalStream(y).accumulate(l);
                },
                nodeStream: function(y, l) {
                  return this.internalStream(y || "nodebuffer").toNodejsStream(l);
                },
                _compressWorker: function(y, l) {
                  if (this._data instanceof d && this._data.compression.magic === y.magic) return this._data.getCompressedWorker();
                  var u = this._decompressWorker();
                  return this._dataBinary || (u = u.pipe(new s.Utf8EncodeWorker())), d.createWorkerFrom(u, y, l);
                },
                _decompressWorker: function() {
                  return this._data instanceof d ? this._data.getContentWorker() : this._data instanceof b ? this._data : new o(this._data);
                }
              };
              for (var p = [
                "asText",
                "asBinary",
                "asNodeBuffer",
                "asUint8Array",
                "asArrayBuffer"
              ], g = function() {
                throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
              }, m = 0; m < p.length; m++) i.prototype[p[m]] = g;
              r.exports = i;
            },
            {
              "./compressedObject": 2,
              "./stream/DataWorker": 27,
              "./stream/GenericWorker": 28,
              "./stream/StreamHelper": 29,
              "./utf8": 31
            }
          ],
          36: [
            function(n, r, a) {
              (function(i) {
                var c, o, s = i.MutationObserver || i.WebKitMutationObserver;
                if (s) {
                  var d = 0, b = new s(y), p = i.document.createTextNode("");
                  b.observe(p, {
                    characterData: true
                  }), c = function() {
                    p.data = d = ++d % 2;
                  };
                } else if (i.setImmediate || i.MessageChannel === void 0) c = "document" in i && "onreadystatechange" in i.document.createElement("script") ? function() {
                  var l = i.document.createElement("script");
                  l.onreadystatechange = function() {
                    y(), l.onreadystatechange = null, l.parentNode.removeChild(l), l = null;
                  }, i.document.documentElement.appendChild(l);
                } : function() {
                  setTimeout(y, 0);
                };
                else {
                  var g = new i.MessageChannel();
                  g.port1.onmessage = y, c = function() {
                    g.port2.postMessage(0);
                  };
                }
                var m = [];
                function y() {
                  var l, u;
                  o = true;
                  for (var h = m.length; h; ) {
                    for (u = m, m = [], l = -1; ++l < h; ) u[l]();
                    h = m.length;
                  }
                  o = false;
                }
                r.exports = function(l) {
                  m.push(l) !== 1 || o || c();
                };
              }).call(this, typeof ft < "u" ? ft : typeof self < "u" ? self : typeof window < "u" ? window : {});
            },
            {}
          ],
          37: [
            function(n, r, a) {
              var i = n("immediate");
              function c() {
              }
              var o = {}, s = [
                "REJECTED"
              ], d = [
                "FULFILLED"
              ], b = [
                "PENDING"
              ];
              function p(h) {
                if (typeof h != "function") throw new TypeError("resolver must be a function");
                this.state = b, this.queue = [], this.outcome = void 0, h !== c && l(this, h);
              }
              function g(h, f, v) {
                this.promise = h, typeof f == "function" && (this.onFulfilled = f, this.callFulfilled = this.otherCallFulfilled), typeof v == "function" && (this.onRejected = v, this.callRejected = this.otherCallRejected);
              }
              function m(h, f, v) {
                i(function() {
                  var w;
                  try {
                    w = f(v);
                  } catch (x) {
                    return o.reject(h, x);
                  }
                  w === h ? o.reject(h, new TypeError("Cannot resolve promise with itself")) : o.resolve(h, w);
                });
              }
              function y(h) {
                var f = h && h.then;
                if (h && (typeof h == "object" || typeof h == "function") && typeof f == "function") return function() {
                  f.apply(h, arguments);
                };
              }
              function l(h, f) {
                var v = false;
                function w(E) {
                  v || (v = true, o.reject(h, E));
                }
                function x(E) {
                  v || (v = true, o.resolve(h, E));
                }
                var U = u(function() {
                  f(x, w);
                });
                U.status === "error" && w(U.value);
              }
              function u(h, f) {
                var v = {};
                try {
                  v.value = h(f), v.status = "success";
                } catch (w) {
                  v.status = "error", v.value = w;
                }
                return v;
              }
              (r.exports = p).prototype.finally = function(h) {
                if (typeof h != "function") return this;
                var f = this.constructor;
                return this.then(function(v) {
                  return f.resolve(h()).then(function() {
                    return v;
                  });
                }, function(v) {
                  return f.resolve(h()).then(function() {
                    throw v;
                  });
                });
              }, p.prototype.catch = function(h) {
                return this.then(null, h);
              }, p.prototype.then = function(h, f) {
                if (typeof h != "function" && this.state === d || typeof f != "function" && this.state === s) return this;
                var v = new this.constructor(c);
                return this.state !== b ? m(v, this.state === d ? h : f, this.outcome) : this.queue.push(new g(v, h, f)), v;
              }, g.prototype.callFulfilled = function(h) {
                o.resolve(this.promise, h);
              }, g.prototype.otherCallFulfilled = function(h) {
                m(this.promise, this.onFulfilled, h);
              }, g.prototype.callRejected = function(h) {
                o.reject(this.promise, h);
              }, g.prototype.otherCallRejected = function(h) {
                m(this.promise, this.onRejected, h);
              }, o.resolve = function(h, f) {
                var v = u(y, f);
                if (v.status === "error") return o.reject(h, v.value);
                var w = v.value;
                if (w) l(h, w);
                else {
                  h.state = d, h.outcome = f;
                  for (var x = -1, U = h.queue.length; ++x < U; ) h.queue[x].callFulfilled(f);
                }
                return h;
              }, o.reject = function(h, f) {
                h.state = s, h.outcome = f;
                for (var v = -1, w = h.queue.length; ++v < w; ) h.queue[v].callRejected(f);
                return h;
              }, p.resolve = function(h) {
                return h instanceof this ? h : o.resolve(new this(c), h);
              }, p.reject = function(h) {
                var f = new this(c);
                return o.reject(f, h);
              }, p.all = function(h) {
                var f = this;
                if (Object.prototype.toString.call(h) !== "[object Array]") return this.reject(new TypeError("must be an array"));
                var v = h.length, w = false;
                if (!v) return this.resolve([]);
                for (var x = new Array(v), U = 0, E = -1, F = new this(c); ++E < v; ) C(h[E], E);
                return F;
                function C(R, z) {
                  f.resolve(R).then(function(T) {
                    x[z] = T, ++U !== v || w || (w = true, o.resolve(F, x));
                  }, function(T) {
                    w || (w = true, o.reject(F, T));
                  });
                }
              }, p.race = function(h) {
                var f = this;
                if (Object.prototype.toString.call(h) !== "[object Array]") return this.reject(new TypeError("must be an array"));
                var v = h.length, w = false;
                if (!v) return this.resolve([]);
                for (var x = -1, U = new this(c); ++x < v; ) E = h[x], f.resolve(E).then(function(F) {
                  w || (w = true, o.resolve(U, F));
                }, function(F) {
                  w || (w = true, o.reject(U, F));
                });
                var E;
                return U;
              };
            },
            {
              immediate: 36
            }
          ],
          38: [
            function(n, r, a) {
              var i = {};
              (0, n("./lib/utils/common").assign)(i, n("./lib/deflate"), n("./lib/inflate"), n("./lib/zlib/constants")), r.exports = i;
            },
            {
              "./lib/deflate": 39,
              "./lib/inflate": 40,
              "./lib/utils/common": 41,
              "./lib/zlib/constants": 44
            }
          ],
          39: [
            function(n, r, a) {
              var i = n("./zlib/deflate"), c = n("./utils/common"), o = n("./utils/strings"), s = n("./zlib/messages"), d = n("./zlib/zstream"), b = Object.prototype.toString, p = 0, g = -1, m = 0, y = 8;
              function l(h) {
                if (!(this instanceof l)) return new l(h);
                this.options = c.assign({
                  level: g,
                  method: y,
                  chunkSize: 16384,
                  windowBits: 15,
                  memLevel: 8,
                  strategy: m,
                  to: ""
                }, h || {});
                var f = this.options;
                f.raw && 0 < f.windowBits ? f.windowBits = -f.windowBits : f.gzip && 0 < f.windowBits && f.windowBits < 16 && (f.windowBits += 16), this.err = 0, this.msg = "", this.ended = false, this.chunks = [], this.strm = new d(), this.strm.avail_out = 0;
                var v = i.deflateInit2(this.strm, f.level, f.method, f.windowBits, f.memLevel, f.strategy);
                if (v !== p) throw new Error(s[v]);
                if (f.header && i.deflateSetHeader(this.strm, f.header), f.dictionary) {
                  var w;
                  if (w = typeof f.dictionary == "string" ? o.string2buf(f.dictionary) : b.call(f.dictionary) === "[object ArrayBuffer]" ? new Uint8Array(f.dictionary) : f.dictionary, (v = i.deflateSetDictionary(this.strm, w)) !== p) throw new Error(s[v]);
                  this._dict_set = true;
                }
              }
              function u(h, f) {
                var v = new l(f);
                if (v.push(h, true), v.err) throw v.msg || s[v.err];
                return v.result;
              }
              l.prototype.push = function(h, f) {
                var v, w, x = this.strm, U = this.options.chunkSize;
                if (this.ended) return false;
                w = f === ~~f ? f : f === true ? 4 : 0, typeof h == "string" ? x.input = o.string2buf(h) : b.call(h) === "[object ArrayBuffer]" ? x.input = new Uint8Array(h) : x.input = h, x.next_in = 0, x.avail_in = x.input.length;
                do {
                  if (x.avail_out === 0 && (x.output = new c.Buf8(U), x.next_out = 0, x.avail_out = U), (v = i.deflate(x, w)) !== 1 && v !== p) return this.onEnd(v), !(this.ended = true);
                  x.avail_out !== 0 && (x.avail_in !== 0 || w !== 4 && w !== 2) || (this.options.to === "string" ? this.onData(o.buf2binstring(c.shrinkBuf(x.output, x.next_out))) : this.onData(c.shrinkBuf(x.output, x.next_out)));
                } while ((0 < x.avail_in || x.avail_out === 0) && v !== 1);
                return w === 4 ? (v = i.deflateEnd(this.strm), this.onEnd(v), this.ended = true, v === p) : w !== 2 || (this.onEnd(p), !(x.avail_out = 0));
              }, l.prototype.onData = function(h) {
                this.chunks.push(h);
              }, l.prototype.onEnd = function(h) {
                h === p && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = c.flattenChunks(this.chunks)), this.chunks = [], this.err = h, this.msg = this.strm.msg;
              }, a.Deflate = l, a.deflate = u, a.deflateRaw = function(h, f) {
                return (f = f || {}).raw = true, u(h, f);
              }, a.gzip = function(h, f) {
                return (f = f || {}).gzip = true, u(h, f);
              };
            },
            {
              "./utils/common": 41,
              "./utils/strings": 42,
              "./zlib/deflate": 46,
              "./zlib/messages": 51,
              "./zlib/zstream": 53
            }
          ],
          40: [
            function(n, r, a) {
              var i = n("./zlib/inflate"), c = n("./utils/common"), o = n("./utils/strings"), s = n("./zlib/constants"), d = n("./zlib/messages"), b = n("./zlib/zstream"), p = n("./zlib/gzheader"), g = Object.prototype.toString;
              function m(l) {
                if (!(this instanceof m)) return new m(l);
                this.options = c.assign({
                  chunkSize: 16384,
                  windowBits: 0,
                  to: ""
                }, l || {});
                var u = this.options;
                u.raw && 0 <= u.windowBits && u.windowBits < 16 && (u.windowBits = -u.windowBits, u.windowBits === 0 && (u.windowBits = -15)), !(0 <= u.windowBits && u.windowBits < 16) || l && l.windowBits || (u.windowBits += 32), 15 < u.windowBits && u.windowBits < 48 && (15 & u.windowBits) == 0 && (u.windowBits |= 15), this.err = 0, this.msg = "", this.ended = false, this.chunks = [], this.strm = new b(), this.strm.avail_out = 0;
                var h = i.inflateInit2(this.strm, u.windowBits);
                if (h !== s.Z_OK) throw new Error(d[h]);
                this.header = new p(), i.inflateGetHeader(this.strm, this.header);
              }
              function y(l, u) {
                var h = new m(u);
                if (h.push(l, true), h.err) throw h.msg || d[h.err];
                return h.result;
              }
              m.prototype.push = function(l, u) {
                var h, f, v, w, x, U, E = this.strm, F = this.options.chunkSize, C = this.options.dictionary, R = false;
                if (this.ended) return false;
                f = u === ~~u ? u : u === true ? s.Z_FINISH : s.Z_NO_FLUSH, typeof l == "string" ? E.input = o.binstring2buf(l) : g.call(l) === "[object ArrayBuffer]" ? E.input = new Uint8Array(l) : E.input = l, E.next_in = 0, E.avail_in = E.input.length;
                do {
                  if (E.avail_out === 0 && (E.output = new c.Buf8(F), E.next_out = 0, E.avail_out = F), (h = i.inflate(E, s.Z_NO_FLUSH)) === s.Z_NEED_DICT && C && (U = typeof C == "string" ? o.string2buf(C) : g.call(C) === "[object ArrayBuffer]" ? new Uint8Array(C) : C, h = i.inflateSetDictionary(this.strm, U)), h === s.Z_BUF_ERROR && R === true && (h = s.Z_OK, R = false), h !== s.Z_STREAM_END && h !== s.Z_OK) return this.onEnd(h), !(this.ended = true);
                  E.next_out && (E.avail_out !== 0 && h !== s.Z_STREAM_END && (E.avail_in !== 0 || f !== s.Z_FINISH && f !== s.Z_SYNC_FLUSH) || (this.options.to === "string" ? (v = o.utf8border(E.output, E.next_out), w = E.next_out - v, x = o.buf2string(E.output, v), E.next_out = w, E.avail_out = F - w, w && c.arraySet(E.output, E.output, v, w, 0), this.onData(x)) : this.onData(c.shrinkBuf(E.output, E.next_out)))), E.avail_in === 0 && E.avail_out === 0 && (R = true);
                } while ((0 < E.avail_in || E.avail_out === 0) && h !== s.Z_STREAM_END);
                return h === s.Z_STREAM_END && (f = s.Z_FINISH), f === s.Z_FINISH ? (h = i.inflateEnd(this.strm), this.onEnd(h), this.ended = true, h === s.Z_OK) : f !== s.Z_SYNC_FLUSH || (this.onEnd(s.Z_OK), !(E.avail_out = 0));
              }, m.prototype.onData = function(l) {
                this.chunks.push(l);
              }, m.prototype.onEnd = function(l) {
                l === s.Z_OK && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = c.flattenChunks(this.chunks)), this.chunks = [], this.err = l, this.msg = this.strm.msg;
              }, a.Inflate = m, a.inflate = y, a.inflateRaw = function(l, u) {
                return (u = u || {}).raw = true, y(l, u);
              }, a.ungzip = y;
            },
            {
              "./utils/common": 41,
              "./utils/strings": 42,
              "./zlib/constants": 44,
              "./zlib/gzheader": 47,
              "./zlib/inflate": 49,
              "./zlib/messages": 51,
              "./zlib/zstream": 53
            }
          ],
          41: [
            function(n, r, a) {
              var i = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Int32Array < "u";
              a.assign = function(s) {
                for (var d = Array.prototype.slice.call(arguments, 1); d.length; ) {
                  var b = d.shift();
                  if (b) {
                    if (typeof b != "object") throw new TypeError(b + "must be non-object");
                    for (var p in b) b.hasOwnProperty(p) && (s[p] = b[p]);
                  }
                }
                return s;
              }, a.shrinkBuf = function(s, d) {
                return s.length === d ? s : s.subarray ? s.subarray(0, d) : (s.length = d, s);
              };
              var c = {
                arraySet: function(s, d, b, p, g) {
                  if (d.subarray && s.subarray) s.set(d.subarray(b, b + p), g);
                  else for (var m = 0; m < p; m++) s[g + m] = d[b + m];
                },
                flattenChunks: function(s) {
                  var d, b, p, g, m, y;
                  for (d = p = 0, b = s.length; d < b; d++) p += s[d].length;
                  for (y = new Uint8Array(p), d = g = 0, b = s.length; d < b; d++) m = s[d], y.set(m, g), g += m.length;
                  return y;
                }
              }, o = {
                arraySet: function(s, d, b, p, g) {
                  for (var m = 0; m < p; m++) s[g + m] = d[b + m];
                },
                flattenChunks: function(s) {
                  return [].concat.apply([], s);
                }
              };
              a.setTyped = function(s) {
                s ? (a.Buf8 = Uint8Array, a.Buf16 = Uint16Array, a.Buf32 = Int32Array, a.assign(a, c)) : (a.Buf8 = Array, a.Buf16 = Array, a.Buf32 = Array, a.assign(a, o));
              }, a.setTyped(i);
            },
            {}
          ],
          42: [
            function(n, r, a) {
              var i = n("./common"), c = true, o = true;
              try {
                String.fromCharCode.apply(null, [
                  0
                ]);
              } catch {
                c = false;
              }
              try {
                String.fromCharCode.apply(null, new Uint8Array(1));
              } catch {
                o = false;
              }
              for (var s = new i.Buf8(256), d = 0; d < 256; d++) s[d] = 252 <= d ? 6 : 248 <= d ? 5 : 240 <= d ? 4 : 224 <= d ? 3 : 192 <= d ? 2 : 1;
              function b(p, g) {
                if (g < 65537 && (p.subarray && o || !p.subarray && c)) return String.fromCharCode.apply(null, i.shrinkBuf(p, g));
                for (var m = "", y = 0; y < g; y++) m += String.fromCharCode(p[y]);
                return m;
              }
              s[254] = s[254] = 1, a.string2buf = function(p) {
                var g, m, y, l, u, h = p.length, f = 0;
                for (l = 0; l < h; l++) (64512 & (m = p.charCodeAt(l))) == 55296 && l + 1 < h && (64512 & (y = p.charCodeAt(l + 1))) == 56320 && (m = 65536 + (m - 55296 << 10) + (y - 56320), l++), f += m < 128 ? 1 : m < 2048 ? 2 : m < 65536 ? 3 : 4;
                for (g = new i.Buf8(f), l = u = 0; u < f; l++) (64512 & (m = p.charCodeAt(l))) == 55296 && l + 1 < h && (64512 & (y = p.charCodeAt(l + 1))) == 56320 && (m = 65536 + (m - 55296 << 10) + (y - 56320), l++), m < 128 ? g[u++] = m : (m < 2048 ? g[u++] = 192 | m >>> 6 : (m < 65536 ? g[u++] = 224 | m >>> 12 : (g[u++] = 240 | m >>> 18, g[u++] = 128 | m >>> 12 & 63), g[u++] = 128 | m >>> 6 & 63), g[u++] = 128 | 63 & m);
                return g;
              }, a.buf2binstring = function(p) {
                return b(p, p.length);
              }, a.binstring2buf = function(p) {
                for (var g = new i.Buf8(p.length), m = 0, y = g.length; m < y; m++) g[m] = p.charCodeAt(m);
                return g;
              }, a.buf2string = function(p, g) {
                var m, y, l, u, h = g || p.length, f = new Array(2 * h);
                for (m = y = 0; m < h; ) if ((l = p[m++]) < 128) f[y++] = l;
                else if (4 < (u = s[l])) f[y++] = 65533, m += u - 1;
                else {
                  for (l &= u === 2 ? 31 : u === 3 ? 15 : 7; 1 < u && m < h; ) l = l << 6 | 63 & p[m++], u--;
                  1 < u ? f[y++] = 65533 : l < 65536 ? f[y++] = l : (l -= 65536, f[y++] = 55296 | l >> 10 & 1023, f[y++] = 56320 | 1023 & l);
                }
                return b(f, y);
              }, a.utf8border = function(p, g) {
                var m;
                for ((g = g || p.length) > p.length && (g = p.length), m = g - 1; 0 <= m && (192 & p[m]) == 128; ) m--;
                return m < 0 || m === 0 ? g : m + s[p[m]] > g ? m : g;
              };
            },
            {
              "./common": 41
            }
          ],
          43: [
            function(n, r, a) {
              r.exports = function(i, c, o, s) {
                for (var d = 65535 & i | 0, b = i >>> 16 & 65535 | 0, p = 0; o !== 0; ) {
                  for (o -= p = 2e3 < o ? 2e3 : o; b = b + (d = d + c[s++] | 0) | 0, --p; ) ;
                  d %= 65521, b %= 65521;
                }
                return d | b << 16 | 0;
              };
            },
            {}
          ],
          44: [
            function(n, r, a) {
              r.exports = {
                Z_NO_FLUSH: 0,
                Z_PARTIAL_FLUSH: 1,
                Z_SYNC_FLUSH: 2,
                Z_FULL_FLUSH: 3,
                Z_FINISH: 4,
                Z_BLOCK: 5,
                Z_TREES: 6,
                Z_OK: 0,
                Z_STREAM_END: 1,
                Z_NEED_DICT: 2,
                Z_ERRNO: -1,
                Z_STREAM_ERROR: -2,
                Z_DATA_ERROR: -3,
                Z_BUF_ERROR: -5,
                Z_NO_COMPRESSION: 0,
                Z_BEST_SPEED: 1,
                Z_BEST_COMPRESSION: 9,
                Z_DEFAULT_COMPRESSION: -1,
                Z_FILTERED: 1,
                Z_HUFFMAN_ONLY: 2,
                Z_RLE: 3,
                Z_FIXED: 4,
                Z_DEFAULT_STRATEGY: 0,
                Z_BINARY: 0,
                Z_TEXT: 1,
                Z_UNKNOWN: 2,
                Z_DEFLATED: 8
              };
            },
            {}
          ],
          45: [
            function(n, r, a) {
              var i = function() {
                for (var c, o = [], s = 0; s < 256; s++) {
                  c = s;
                  for (var d = 0; d < 8; d++) c = 1 & c ? 3988292384 ^ c >>> 1 : c >>> 1;
                  o[s] = c;
                }
                return o;
              }();
              r.exports = function(c, o, s, d) {
                var b = i, p = d + s;
                c ^= -1;
                for (var g = d; g < p; g++) c = c >>> 8 ^ b[255 & (c ^ o[g])];
                return -1 ^ c;
              };
            },
            {}
          ],
          46: [
            function(n, r, a) {
              var i, c = n("../utils/common"), o = n("./trees"), s = n("./adler32"), d = n("./crc32"), b = n("./messages"), p = 0, g = 4, m = 0, y = -2, l = -1, u = 4, h = 2, f = 8, v = 9, w = 286, x = 30, U = 19, E = 2 * w + 1, F = 15, C = 3, R = 258, z = R + C + 1, T = 42, B = 113, _ = 1, P = 2, k = 3, I = 4;
              function H(D, G) {
                return D.msg = b[G], G;
              }
              function q(D) {
                return (D << 1) - (4 < D ? 9 : 0);
              }
              function Y(D) {
                for (var G = D.length; 0 <= --G; ) D[G] = 0;
              }
              function N(D) {
                var G = D.state, Z = G.pending;
                Z > D.avail_out && (Z = D.avail_out), Z !== 0 && (c.arraySet(D.output, G.pending_buf, G.pending_out, Z, D.next_out), D.next_out += Z, G.pending_out += Z, D.total_out += Z, D.avail_out -= Z, G.pending -= Z, G.pending === 0 && (G.pending_out = 0));
              }
              function $(D, G) {
                o._tr_flush_block(D, 0 <= D.block_start ? D.block_start : -1, D.strstart - D.block_start, G), D.block_start = D.strstart, N(D.strm);
              }
              function M(D, G) {
                D.pending_buf[D.pending++] = G;
              }
              function ee(D, G) {
                D.pending_buf[D.pending++] = G >>> 8 & 255, D.pending_buf[D.pending++] = 255 & G;
              }
              function te(D, G) {
                var Z, O, W = D.max_chain_length, X = D.strstart, ae = D.prev_length, ne = D.nice_match, K = D.strstart > D.w_size - z ? D.strstart - (D.w_size - z) : 0, L = D.window, V = D.w_mask, J = D.prev, ie = D.strstart + R, he = L[X + ae - 1], ye = L[X + ae];
                D.prev_length >= D.good_match && (W >>= 2), ne > D.lookahead && (ne = D.lookahead);
                do
                  if (L[(Z = G) + ae] === ye && L[Z + ae - 1] === he && L[Z] === L[X] && L[++Z] === L[X + 1]) {
                    X += 2, Z++;
                    do
                      ;
                    while (L[++X] === L[++Z] && L[++X] === L[++Z] && L[++X] === L[++Z] && L[++X] === L[++Z] && L[++X] === L[++Z] && L[++X] === L[++Z] && L[++X] === L[++Z] && L[++X] === L[++Z] && X < ie);
                    if (O = R - (ie - X), X = ie - R, ae < O) {
                      if (D.match_start = G, ne <= (ae = O)) break;
                      he = L[X + ae - 1], ye = L[X + ae];
                    }
                  }
                while ((G = J[G & V]) > K && --W != 0);
                return ae <= D.lookahead ? ae : D.lookahead;
              }
              function se(D) {
                var G, Z, O, W, X, ae, ne, K, L, V, J = D.w_size;
                do {
                  if (W = D.window_size - D.lookahead - D.strstart, D.strstart >= J + (J - z)) {
                    for (c.arraySet(D.window, D.window, J, J, 0), D.match_start -= J, D.strstart -= J, D.block_start -= J, G = Z = D.hash_size; O = D.head[--G], D.head[G] = J <= O ? O - J : 0, --Z; ) ;
                    for (G = Z = J; O = D.prev[--G], D.prev[G] = J <= O ? O - J : 0, --Z; ) ;
                    W += J;
                  }
                  if (D.strm.avail_in === 0) break;
                  if (ae = D.strm, ne = D.window, K = D.strstart + D.lookahead, L = W, V = void 0, V = ae.avail_in, L < V && (V = L), Z = V === 0 ? 0 : (ae.avail_in -= V, c.arraySet(ne, ae.input, ae.next_in, V, K), ae.state.wrap === 1 ? ae.adler = s(ae.adler, ne, V, K) : ae.state.wrap === 2 && (ae.adler = d(ae.adler, ne, V, K)), ae.next_in += V, ae.total_in += V, V), D.lookahead += Z, D.lookahead + D.insert >= C) for (X = D.strstart - D.insert, D.ins_h = D.window[X], D.ins_h = (D.ins_h << D.hash_shift ^ D.window[X + 1]) & D.hash_mask; D.insert && (D.ins_h = (D.ins_h << D.hash_shift ^ D.window[X + C - 1]) & D.hash_mask, D.prev[X & D.w_mask] = D.head[D.ins_h], D.head[D.ins_h] = X, X++, D.insert--, !(D.lookahead + D.insert < C)); ) ;
                } while (D.lookahead < z && D.strm.avail_in !== 0);
              }
              function le(D, G) {
                for (var Z, O; ; ) {
                  if (D.lookahead < z) {
                    if (se(D), D.lookahead < z && G === p) return _;
                    if (D.lookahead === 0) break;
                  }
                  if (Z = 0, D.lookahead >= C && (D.ins_h = (D.ins_h << D.hash_shift ^ D.window[D.strstart + C - 1]) & D.hash_mask, Z = D.prev[D.strstart & D.w_mask] = D.head[D.ins_h], D.head[D.ins_h] = D.strstart), Z !== 0 && D.strstart - Z <= D.w_size - z && (D.match_length = te(D, Z)), D.match_length >= C) if (O = o._tr_tally(D, D.strstart - D.match_start, D.match_length - C), D.lookahead -= D.match_length, D.match_length <= D.max_lazy_match && D.lookahead >= C) {
                    for (D.match_length--; D.strstart++, D.ins_h = (D.ins_h << D.hash_shift ^ D.window[D.strstart + C - 1]) & D.hash_mask, Z = D.prev[D.strstart & D.w_mask] = D.head[D.ins_h], D.head[D.ins_h] = D.strstart, --D.match_length != 0; ) ;
                    D.strstart++;
                  } else D.strstart += D.match_length, D.match_length = 0, D.ins_h = D.window[D.strstart], D.ins_h = (D.ins_h << D.hash_shift ^ D.window[D.strstart + 1]) & D.hash_mask;
                  else O = o._tr_tally(D, 0, D.window[D.strstart]), D.lookahead--, D.strstart++;
                  if (O && ($(D, false), D.strm.avail_out === 0)) return _;
                }
                return D.insert = D.strstart < C - 1 ? D.strstart : C - 1, G === g ? ($(D, true), D.strm.avail_out === 0 ? k : I) : D.last_lit && ($(D, false), D.strm.avail_out === 0) ? _ : P;
              }
              function fe(D, G) {
                for (var Z, O, W; ; ) {
                  if (D.lookahead < z) {
                    if (se(D), D.lookahead < z && G === p) return _;
                    if (D.lookahead === 0) break;
                  }
                  if (Z = 0, D.lookahead >= C && (D.ins_h = (D.ins_h << D.hash_shift ^ D.window[D.strstart + C - 1]) & D.hash_mask, Z = D.prev[D.strstart & D.w_mask] = D.head[D.ins_h], D.head[D.ins_h] = D.strstart), D.prev_length = D.match_length, D.prev_match = D.match_start, D.match_length = C - 1, Z !== 0 && D.prev_length < D.max_lazy_match && D.strstart - Z <= D.w_size - z && (D.match_length = te(D, Z), D.match_length <= 5 && (D.strategy === 1 || D.match_length === C && 4096 < D.strstart - D.match_start) && (D.match_length = C - 1)), D.prev_length >= C && D.match_length <= D.prev_length) {
                    for (W = D.strstart + D.lookahead - C, O = o._tr_tally(D, D.strstart - 1 - D.prev_match, D.prev_length - C), D.lookahead -= D.prev_length - 1, D.prev_length -= 2; ++D.strstart <= W && (D.ins_h = (D.ins_h << D.hash_shift ^ D.window[D.strstart + C - 1]) & D.hash_mask, Z = D.prev[D.strstart & D.w_mask] = D.head[D.ins_h], D.head[D.ins_h] = D.strstart), --D.prev_length != 0; ) ;
                    if (D.match_available = 0, D.match_length = C - 1, D.strstart++, O && ($(D, false), D.strm.avail_out === 0)) return _;
                  } else if (D.match_available) {
                    if ((O = o._tr_tally(D, 0, D.window[D.strstart - 1])) && $(D, false), D.strstart++, D.lookahead--, D.strm.avail_out === 0) return _;
                  } else D.match_available = 1, D.strstart++, D.lookahead--;
                }
                return D.match_available && (O = o._tr_tally(D, 0, D.window[D.strstart - 1]), D.match_available = 0), D.insert = D.strstart < C - 1 ? D.strstart : C - 1, G === g ? ($(D, true), D.strm.avail_out === 0 ? k : I) : D.last_lit && ($(D, false), D.strm.avail_out === 0) ? _ : P;
              }
              function ge(D, G, Z, O, W) {
                this.good_length = D, this.max_lazy = G, this.nice_length = Z, this.max_chain = O, this.func = W;
              }
              function me() {
                this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = f, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new c.Buf16(2 * E), this.dyn_dtree = new c.Buf16(2 * (2 * x + 1)), this.bl_tree = new c.Buf16(2 * (2 * U + 1)), Y(this.dyn_ltree), Y(this.dyn_dtree), Y(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new c.Buf16(F + 1), this.heap = new c.Buf16(2 * w + 1), Y(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new c.Buf16(2 * w + 1), Y(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
              }
              function De(D) {
                var G;
                return D && D.state ? (D.total_in = D.total_out = 0, D.data_type = h, (G = D.state).pending = 0, G.pending_out = 0, G.wrap < 0 && (G.wrap = -G.wrap), G.status = G.wrap ? T : B, D.adler = G.wrap === 2 ? 0 : 1, G.last_flush = p, o._tr_init(G), m) : H(D, y);
              }
              function Ce(D) {
                var G = De(D);
                return G === m && function(Z) {
                  Z.window_size = 2 * Z.w_size, Y(Z.head), Z.max_lazy_match = i[Z.level].max_lazy, Z.good_match = i[Z.level].good_length, Z.nice_match = i[Z.level].nice_length, Z.max_chain_length = i[Z.level].max_chain, Z.strstart = 0, Z.block_start = 0, Z.lookahead = 0, Z.insert = 0, Z.match_length = Z.prev_length = C - 1, Z.match_available = 0, Z.ins_h = 0;
                }(D.state), G;
              }
              function we(D, G, Z, O, W, X) {
                if (!D) return y;
                var ae = 1;
                if (G === l && (G = 6), O < 0 ? (ae = 0, O = -O) : 15 < O && (ae = 2, O -= 16), W < 1 || v < W || Z !== f || O < 8 || 15 < O || G < 0 || 9 < G || X < 0 || u < X) return H(D, y);
                O === 8 && (O = 9);
                var ne = new me();
                return (D.state = ne).strm = D, ne.wrap = ae, ne.gzhead = null, ne.w_bits = O, ne.w_size = 1 << ne.w_bits, ne.w_mask = ne.w_size - 1, ne.hash_bits = W + 7, ne.hash_size = 1 << ne.hash_bits, ne.hash_mask = ne.hash_size - 1, ne.hash_shift = ~~((ne.hash_bits + C - 1) / C), ne.window = new c.Buf8(2 * ne.w_size), ne.head = new c.Buf16(ne.hash_size), ne.prev = new c.Buf16(ne.w_size), ne.lit_bufsize = 1 << W + 6, ne.pending_buf_size = 4 * ne.lit_bufsize, ne.pending_buf = new c.Buf8(ne.pending_buf_size), ne.d_buf = 1 * ne.lit_bufsize, ne.l_buf = 3 * ne.lit_bufsize, ne.level = G, ne.strategy = X, ne.method = Z, Ce(D);
              }
              i = [
                new ge(0, 0, 0, 0, function(D, G) {
                  var Z = 65535;
                  for (Z > D.pending_buf_size - 5 && (Z = D.pending_buf_size - 5); ; ) {
                    if (D.lookahead <= 1) {
                      if (se(D), D.lookahead === 0 && G === p) return _;
                      if (D.lookahead === 0) break;
                    }
                    D.strstart += D.lookahead, D.lookahead = 0;
                    var O = D.block_start + Z;
                    if ((D.strstart === 0 || D.strstart >= O) && (D.lookahead = D.strstart - O, D.strstart = O, $(D, false), D.strm.avail_out === 0) || D.strstart - D.block_start >= D.w_size - z && ($(D, false), D.strm.avail_out === 0)) return _;
                  }
                  return D.insert = 0, G === g ? ($(D, true), D.strm.avail_out === 0 ? k : I) : (D.strstart > D.block_start && ($(D, false), D.strm.avail_out), _);
                }),
                new ge(4, 4, 8, 4, le),
                new ge(4, 5, 16, 8, le),
                new ge(4, 6, 32, 32, le),
                new ge(4, 4, 16, 16, fe),
                new ge(8, 16, 32, 32, fe),
                new ge(8, 16, 128, 128, fe),
                new ge(8, 32, 128, 256, fe),
                new ge(32, 128, 258, 1024, fe),
                new ge(32, 258, 258, 4096, fe)
              ], a.deflateInit = function(D, G) {
                return we(D, G, f, 15, 8, 0);
              }, a.deflateInit2 = we, a.deflateReset = Ce, a.deflateResetKeep = De, a.deflateSetHeader = function(D, G) {
                return D && D.state ? D.state.wrap !== 2 ? y : (D.state.gzhead = G, m) : y;
              }, a.deflate = function(D, G) {
                var Z, O, W, X;
                if (!D || !D.state || 5 < G || G < 0) return D ? H(D, y) : y;
                if (O = D.state, !D.output || !D.input && D.avail_in !== 0 || O.status === 666 && G !== g) return H(D, D.avail_out === 0 ? -5 : y);
                if (O.strm = D, Z = O.last_flush, O.last_flush = G, O.status === T) if (O.wrap === 2) D.adler = 0, M(O, 31), M(O, 139), M(O, 8), O.gzhead ? (M(O, (O.gzhead.text ? 1 : 0) + (O.gzhead.hcrc ? 2 : 0) + (O.gzhead.extra ? 4 : 0) + (O.gzhead.name ? 8 : 0) + (O.gzhead.comment ? 16 : 0)), M(O, 255 & O.gzhead.time), M(O, O.gzhead.time >> 8 & 255), M(O, O.gzhead.time >> 16 & 255), M(O, O.gzhead.time >> 24 & 255), M(O, O.level === 9 ? 2 : 2 <= O.strategy || O.level < 2 ? 4 : 0), M(O, 255 & O.gzhead.os), O.gzhead.extra && O.gzhead.extra.length && (M(O, 255 & O.gzhead.extra.length), M(O, O.gzhead.extra.length >> 8 & 255)), O.gzhead.hcrc && (D.adler = d(D.adler, O.pending_buf, O.pending, 0)), O.gzindex = 0, O.status = 69) : (M(O, 0), M(O, 0), M(O, 0), M(O, 0), M(O, 0), M(O, O.level === 9 ? 2 : 2 <= O.strategy || O.level < 2 ? 4 : 0), M(O, 3), O.status = B);
                else {
                  var ae = f + (O.w_bits - 8 << 4) << 8;
                  ae |= (2 <= O.strategy || O.level < 2 ? 0 : O.level < 6 ? 1 : O.level === 6 ? 2 : 3) << 6, O.strstart !== 0 && (ae |= 32), ae += 31 - ae % 31, O.status = B, ee(O, ae), O.strstart !== 0 && (ee(O, D.adler >>> 16), ee(O, 65535 & D.adler)), D.adler = 1;
                }
                if (O.status === 69) if (O.gzhead.extra) {
                  for (W = O.pending; O.gzindex < (65535 & O.gzhead.extra.length) && (O.pending !== O.pending_buf_size || (O.gzhead.hcrc && O.pending > W && (D.adler = d(D.adler, O.pending_buf, O.pending - W, W)), N(D), W = O.pending, O.pending !== O.pending_buf_size)); ) M(O, 255 & O.gzhead.extra[O.gzindex]), O.gzindex++;
                  O.gzhead.hcrc && O.pending > W && (D.adler = d(D.adler, O.pending_buf, O.pending - W, W)), O.gzindex === O.gzhead.extra.length && (O.gzindex = 0, O.status = 73);
                } else O.status = 73;
                if (O.status === 73) if (O.gzhead.name) {
                  W = O.pending;
                  do {
                    if (O.pending === O.pending_buf_size && (O.gzhead.hcrc && O.pending > W && (D.adler = d(D.adler, O.pending_buf, O.pending - W, W)), N(D), W = O.pending, O.pending === O.pending_buf_size)) {
                      X = 1;
                      break;
                    }
                    X = O.gzindex < O.gzhead.name.length ? 255 & O.gzhead.name.charCodeAt(O.gzindex++) : 0, M(O, X);
                  } while (X !== 0);
                  O.gzhead.hcrc && O.pending > W && (D.adler = d(D.adler, O.pending_buf, O.pending - W, W)), X === 0 && (O.gzindex = 0, O.status = 91);
                } else O.status = 91;
                if (O.status === 91) if (O.gzhead.comment) {
                  W = O.pending;
                  do {
                    if (O.pending === O.pending_buf_size && (O.gzhead.hcrc && O.pending > W && (D.adler = d(D.adler, O.pending_buf, O.pending - W, W)), N(D), W = O.pending, O.pending === O.pending_buf_size)) {
                      X = 1;
                      break;
                    }
                    X = O.gzindex < O.gzhead.comment.length ? 255 & O.gzhead.comment.charCodeAt(O.gzindex++) : 0, M(O, X);
                  } while (X !== 0);
                  O.gzhead.hcrc && O.pending > W && (D.adler = d(D.adler, O.pending_buf, O.pending - W, W)), X === 0 && (O.status = 103);
                } else O.status = 103;
                if (O.status === 103 && (O.gzhead.hcrc ? (O.pending + 2 > O.pending_buf_size && N(D), O.pending + 2 <= O.pending_buf_size && (M(O, 255 & D.adler), M(O, D.adler >> 8 & 255), D.adler = 0, O.status = B)) : O.status = B), O.pending !== 0) {
                  if (N(D), D.avail_out === 0) return O.last_flush = -1, m;
                } else if (D.avail_in === 0 && q(G) <= q(Z) && G !== g) return H(D, -5);
                if (O.status === 666 && D.avail_in !== 0) return H(D, -5);
                if (D.avail_in !== 0 || O.lookahead !== 0 || G !== p && O.status !== 666) {
                  var ne = O.strategy === 2 ? function(K, L) {
                    for (var V; ; ) {
                      if (K.lookahead === 0 && (se(K), K.lookahead === 0)) {
                        if (L === p) return _;
                        break;
                      }
                      if (K.match_length = 0, V = o._tr_tally(K, 0, K.window[K.strstart]), K.lookahead--, K.strstart++, V && ($(K, false), K.strm.avail_out === 0)) return _;
                    }
                    return K.insert = 0, L === g ? ($(K, true), K.strm.avail_out === 0 ? k : I) : K.last_lit && ($(K, false), K.strm.avail_out === 0) ? _ : P;
                  }(O, G) : O.strategy === 3 ? function(K, L) {
                    for (var V, J, ie, he, ye = K.window; ; ) {
                      if (K.lookahead <= R) {
                        if (se(K), K.lookahead <= R && L === p) return _;
                        if (K.lookahead === 0) break;
                      }
                      if (K.match_length = 0, K.lookahead >= C && 0 < K.strstart && (J = ye[ie = K.strstart - 1]) === ye[++ie] && J === ye[++ie] && J === ye[++ie]) {
                        he = K.strstart + R;
                        do
                          ;
                        while (J === ye[++ie] && J === ye[++ie] && J === ye[++ie] && J === ye[++ie] && J === ye[++ie] && J === ye[++ie] && J === ye[++ie] && J === ye[++ie] && ie < he);
                        K.match_length = R - (he - ie), K.match_length > K.lookahead && (K.match_length = K.lookahead);
                      }
                      if (K.match_length >= C ? (V = o._tr_tally(K, 1, K.match_length - C), K.lookahead -= K.match_length, K.strstart += K.match_length, K.match_length = 0) : (V = o._tr_tally(K, 0, K.window[K.strstart]), K.lookahead--, K.strstart++), V && ($(K, false), K.strm.avail_out === 0)) return _;
                    }
                    return K.insert = 0, L === g ? ($(K, true), K.strm.avail_out === 0 ? k : I) : K.last_lit && ($(K, false), K.strm.avail_out === 0) ? _ : P;
                  }(O, G) : i[O.level].func(O, G);
                  if (ne !== k && ne !== I || (O.status = 666), ne === _ || ne === k) return D.avail_out === 0 && (O.last_flush = -1), m;
                  if (ne === P && (G === 1 ? o._tr_align(O) : G !== 5 && (o._tr_stored_block(O, 0, 0, false), G === 3 && (Y(O.head), O.lookahead === 0 && (O.strstart = 0, O.block_start = 0, O.insert = 0))), N(D), D.avail_out === 0)) return O.last_flush = -1, m;
                }
                return G !== g ? m : O.wrap <= 0 ? 1 : (O.wrap === 2 ? (M(O, 255 & D.adler), M(O, D.adler >> 8 & 255), M(O, D.adler >> 16 & 255), M(O, D.adler >> 24 & 255), M(O, 255 & D.total_in), M(O, D.total_in >> 8 & 255), M(O, D.total_in >> 16 & 255), M(O, D.total_in >> 24 & 255)) : (ee(O, D.adler >>> 16), ee(O, 65535 & D.adler)), N(D), 0 < O.wrap && (O.wrap = -O.wrap), O.pending !== 0 ? m : 1);
              }, a.deflateEnd = function(D) {
                var G;
                return D && D.state ? (G = D.state.status) !== T && G !== 69 && G !== 73 && G !== 91 && G !== 103 && G !== B && G !== 666 ? H(D, y) : (D.state = null, G === B ? H(D, -3) : m) : y;
              }, a.deflateSetDictionary = function(D, G) {
                var Z, O, W, X, ae, ne, K, L, V = G.length;
                if (!D || !D.state || (X = (Z = D.state).wrap) === 2 || X === 1 && Z.status !== T || Z.lookahead) return y;
                for (X === 1 && (D.adler = s(D.adler, G, V, 0)), Z.wrap = 0, V >= Z.w_size && (X === 0 && (Y(Z.head), Z.strstart = 0, Z.block_start = 0, Z.insert = 0), L = new c.Buf8(Z.w_size), c.arraySet(L, G, V - Z.w_size, Z.w_size, 0), G = L, V = Z.w_size), ae = D.avail_in, ne = D.next_in, K = D.input, D.avail_in = V, D.next_in = 0, D.input = G, se(Z); Z.lookahead >= C; ) {
                  for (O = Z.strstart, W = Z.lookahead - (C - 1); Z.ins_h = (Z.ins_h << Z.hash_shift ^ Z.window[O + C - 1]) & Z.hash_mask, Z.prev[O & Z.w_mask] = Z.head[Z.ins_h], Z.head[Z.ins_h] = O, O++, --W; ) ;
                  Z.strstart = O, Z.lookahead = C - 1, se(Z);
                }
                return Z.strstart += Z.lookahead, Z.block_start = Z.strstart, Z.insert = Z.lookahead, Z.lookahead = 0, Z.match_length = Z.prev_length = C - 1, Z.match_available = 0, D.next_in = ne, D.input = K, D.avail_in = ae, Z.wrap = X, m;
              }, a.deflateInfo = "pako deflate (from Nodeca project)";
            },
            {
              "../utils/common": 41,
              "./adler32": 43,
              "./crc32": 45,
              "./messages": 51,
              "./trees": 52
            }
          ],
          47: [
            function(n, r, a) {
              r.exports = function() {
                this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = false;
              };
            },
            {}
          ],
          48: [
            function(n, r, a) {
              r.exports = function(i, c) {
                var o, s, d, b, p, g, m, y, l, u, h, f, v, w, x, U, E, F, C, R, z, T, B, _, P;
                o = i.state, s = i.next_in, _ = i.input, d = s + (i.avail_in - 5), b = i.next_out, P = i.output, p = b - (c - i.avail_out), g = b + (i.avail_out - 257), m = o.dmax, y = o.wsize, l = o.whave, u = o.wnext, h = o.window, f = o.hold, v = o.bits, w = o.lencode, x = o.distcode, U = (1 << o.lenbits) - 1, E = (1 << o.distbits) - 1;
                e: do {
                  v < 15 && (f += _[s++] << v, v += 8, f += _[s++] << v, v += 8), F = w[f & U];
                  t: for (; ; ) {
                    if (f >>>= C = F >>> 24, v -= C, (C = F >>> 16 & 255) === 0) P[b++] = 65535 & F;
                    else {
                      if (!(16 & C)) {
                        if ((64 & C) == 0) {
                          F = w[(65535 & F) + (f & (1 << C) - 1)];
                          continue t;
                        }
                        if (32 & C) {
                          o.mode = 12;
                          break e;
                        }
                        i.msg = "invalid literal/length code", o.mode = 30;
                        break e;
                      }
                      R = 65535 & F, (C &= 15) && (v < C && (f += _[s++] << v, v += 8), R += f & (1 << C) - 1, f >>>= C, v -= C), v < 15 && (f += _[s++] << v, v += 8, f += _[s++] << v, v += 8), F = x[f & E];
                      n: for (; ; ) {
                        if (f >>>= C = F >>> 24, v -= C, !(16 & (C = F >>> 16 & 255))) {
                          if ((64 & C) == 0) {
                            F = x[(65535 & F) + (f & (1 << C) - 1)];
                            continue n;
                          }
                          i.msg = "invalid distance code", o.mode = 30;
                          break e;
                        }
                        if (z = 65535 & F, v < (C &= 15) && (f += _[s++] << v, (v += 8) < C && (f += _[s++] << v, v += 8)), m < (z += f & (1 << C) - 1)) {
                          i.msg = "invalid distance too far back", o.mode = 30;
                          break e;
                        }
                        if (f >>>= C, v -= C, (C = b - p) < z) {
                          if (l < (C = z - C) && o.sane) {
                            i.msg = "invalid distance too far back", o.mode = 30;
                            break e;
                          }
                          if (B = h, (T = 0) === u) {
                            if (T += y - C, C < R) {
                              for (R -= C; P[b++] = h[T++], --C; ) ;
                              T = b - z, B = P;
                            }
                          } else if (u < C) {
                            if (T += y + u - C, (C -= u) < R) {
                              for (R -= C; P[b++] = h[T++], --C; ) ;
                              if (T = 0, u < R) {
                                for (R -= C = u; P[b++] = h[T++], --C; ) ;
                                T = b - z, B = P;
                              }
                            }
                          } else if (T += u - C, C < R) {
                            for (R -= C; P[b++] = h[T++], --C; ) ;
                            T = b - z, B = P;
                          }
                          for (; 2 < R; ) P[b++] = B[T++], P[b++] = B[T++], P[b++] = B[T++], R -= 3;
                          R && (P[b++] = B[T++], 1 < R && (P[b++] = B[T++]));
                        } else {
                          for (T = b - z; P[b++] = P[T++], P[b++] = P[T++], P[b++] = P[T++], 2 < (R -= 3); ) ;
                          R && (P[b++] = P[T++], 1 < R && (P[b++] = P[T++]));
                        }
                        break;
                      }
                    }
                    break;
                  }
                } while (s < d && b < g);
                s -= R = v >> 3, f &= (1 << (v -= R << 3)) - 1, i.next_in = s, i.next_out = b, i.avail_in = s < d ? d - s + 5 : 5 - (s - d), i.avail_out = b < g ? g - b + 257 : 257 - (b - g), o.hold = f, o.bits = v;
              };
            },
            {}
          ],
          49: [
            function(n, r, a) {
              var i = n("../utils/common"), c = n("./adler32"), o = n("./crc32"), s = n("./inffast"), d = n("./inftrees"), b = 1, p = 2, g = 0, m = -2, y = 1, l = 852, u = 592;
              function h(T) {
                return (T >>> 24 & 255) + (T >>> 8 & 65280) + ((65280 & T) << 8) + ((255 & T) << 24);
              }
              function f() {
                this.mode = 0, this.last = false, this.wrap = 0, this.havedict = false, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new i.Buf16(320), this.work = new i.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
              }
              function v(T) {
                var B;
                return T && T.state ? (B = T.state, T.total_in = T.total_out = B.total = 0, T.msg = "", B.wrap && (T.adler = 1 & B.wrap), B.mode = y, B.last = 0, B.havedict = 0, B.dmax = 32768, B.head = null, B.hold = 0, B.bits = 0, B.lencode = B.lendyn = new i.Buf32(l), B.distcode = B.distdyn = new i.Buf32(u), B.sane = 1, B.back = -1, g) : m;
              }
              function w(T) {
                var B;
                return T && T.state ? ((B = T.state).wsize = 0, B.whave = 0, B.wnext = 0, v(T)) : m;
              }
              function x(T, B) {
                var _, P;
                return T && T.state ? (P = T.state, B < 0 ? (_ = 0, B = -B) : (_ = 1 + (B >> 4), B < 48 && (B &= 15)), B && (B < 8 || 15 < B) ? m : (P.window !== null && P.wbits !== B && (P.window = null), P.wrap = _, P.wbits = B, w(T))) : m;
              }
              function U(T, B) {
                var _, P;
                return T ? (P = new f(), (T.state = P).window = null, (_ = x(T, B)) !== g && (T.state = null), _) : m;
              }
              var E, F, C = true;
              function R(T) {
                if (C) {
                  var B;
                  for (E = new i.Buf32(512), F = new i.Buf32(32), B = 0; B < 144; ) T.lens[B++] = 8;
                  for (; B < 256; ) T.lens[B++] = 9;
                  for (; B < 280; ) T.lens[B++] = 7;
                  for (; B < 288; ) T.lens[B++] = 8;
                  for (d(b, T.lens, 0, 288, E, 0, T.work, {
                    bits: 9
                  }), B = 0; B < 32; ) T.lens[B++] = 5;
                  d(p, T.lens, 0, 32, F, 0, T.work, {
                    bits: 5
                  }), C = false;
                }
                T.lencode = E, T.lenbits = 9, T.distcode = F, T.distbits = 5;
              }
              function z(T, B, _, P) {
                var k, I = T.state;
                return I.window === null && (I.wsize = 1 << I.wbits, I.wnext = 0, I.whave = 0, I.window = new i.Buf8(I.wsize)), P >= I.wsize ? (i.arraySet(I.window, B, _ - I.wsize, I.wsize, 0), I.wnext = 0, I.whave = I.wsize) : (P < (k = I.wsize - I.wnext) && (k = P), i.arraySet(I.window, B, _ - P, k, I.wnext), (P -= k) ? (i.arraySet(I.window, B, _ - P, P, 0), I.wnext = P, I.whave = I.wsize) : (I.wnext += k, I.wnext === I.wsize && (I.wnext = 0), I.whave < I.wsize && (I.whave += k))), 0;
              }
              a.inflateReset = w, a.inflateReset2 = x, a.inflateResetKeep = v, a.inflateInit = function(T) {
                return U(T, 15);
              }, a.inflateInit2 = U, a.inflate = function(T, B) {
                var _, P, k, I, H, q, Y, N, $, M, ee, te, se, le, fe, ge, me, De, Ce, we, D, G, Z, O, W = 0, X = new i.Buf8(4), ae = [
                  16,
                  17,
                  18,
                  0,
                  8,
                  7,
                  9,
                  6,
                  10,
                  5,
                  11,
                  4,
                  12,
                  3,
                  13,
                  2,
                  14,
                  1,
                  15
                ];
                if (!T || !T.state || !T.output || !T.input && T.avail_in !== 0) return m;
                (_ = T.state).mode === 12 && (_.mode = 13), H = T.next_out, k = T.output, Y = T.avail_out, I = T.next_in, P = T.input, q = T.avail_in, N = _.hold, $ = _.bits, M = q, ee = Y, G = g;
                e: for (; ; ) switch (_.mode) {
                  case y:
                    if (_.wrap === 0) {
                      _.mode = 13;
                      break;
                    }
                    for (; $ < 16; ) {
                      if (q === 0) break e;
                      q--, N += P[I++] << $, $ += 8;
                    }
                    if (2 & _.wrap && N === 35615) {
                      X[_.check = 0] = 255 & N, X[1] = N >>> 8 & 255, _.check = o(_.check, X, 2, 0), $ = N = 0, _.mode = 2;
                      break;
                    }
                    if (_.flags = 0, _.head && (_.head.done = false), !(1 & _.wrap) || (((255 & N) << 8) + (N >> 8)) % 31) {
                      T.msg = "incorrect header check", _.mode = 30;
                      break;
                    }
                    if ((15 & N) != 8) {
                      T.msg = "unknown compression method", _.mode = 30;
                      break;
                    }
                    if ($ -= 4, D = 8 + (15 & (N >>>= 4)), _.wbits === 0) _.wbits = D;
                    else if (D > _.wbits) {
                      T.msg = "invalid window size", _.mode = 30;
                      break;
                    }
                    _.dmax = 1 << D, T.adler = _.check = 1, _.mode = 512 & N ? 10 : 12, $ = N = 0;
                    break;
                  case 2:
                    for (; $ < 16; ) {
                      if (q === 0) break e;
                      q--, N += P[I++] << $, $ += 8;
                    }
                    if (_.flags = N, (255 & _.flags) != 8) {
                      T.msg = "unknown compression method", _.mode = 30;
                      break;
                    }
                    if (57344 & _.flags) {
                      T.msg = "unknown header flags set", _.mode = 30;
                      break;
                    }
                    _.head && (_.head.text = N >> 8 & 1), 512 & _.flags && (X[0] = 255 & N, X[1] = N >>> 8 & 255, _.check = o(_.check, X, 2, 0)), $ = N = 0, _.mode = 3;
                  case 3:
                    for (; $ < 32; ) {
                      if (q === 0) break e;
                      q--, N += P[I++] << $, $ += 8;
                    }
                    _.head && (_.head.time = N), 512 & _.flags && (X[0] = 255 & N, X[1] = N >>> 8 & 255, X[2] = N >>> 16 & 255, X[3] = N >>> 24 & 255, _.check = o(_.check, X, 4, 0)), $ = N = 0, _.mode = 4;
                  case 4:
                    for (; $ < 16; ) {
                      if (q === 0) break e;
                      q--, N += P[I++] << $, $ += 8;
                    }
                    _.head && (_.head.xflags = 255 & N, _.head.os = N >> 8), 512 & _.flags && (X[0] = 255 & N, X[1] = N >>> 8 & 255, _.check = o(_.check, X, 2, 0)), $ = N = 0, _.mode = 5;
                  case 5:
                    if (1024 & _.flags) {
                      for (; $ < 16; ) {
                        if (q === 0) break e;
                        q--, N += P[I++] << $, $ += 8;
                      }
                      _.length = N, _.head && (_.head.extra_len = N), 512 & _.flags && (X[0] = 255 & N, X[1] = N >>> 8 & 255, _.check = o(_.check, X, 2, 0)), $ = N = 0;
                    } else _.head && (_.head.extra = null);
                    _.mode = 6;
                  case 6:
                    if (1024 & _.flags && (q < (te = _.length) && (te = q), te && (_.head && (D = _.head.extra_len - _.length, _.head.extra || (_.head.extra = new Array(_.head.extra_len)), i.arraySet(_.head.extra, P, I, te, D)), 512 & _.flags && (_.check = o(_.check, P, te, I)), q -= te, I += te, _.length -= te), _.length)) break e;
                    _.length = 0, _.mode = 7;
                  case 7:
                    if (2048 & _.flags) {
                      if (q === 0) break e;
                      for (te = 0; D = P[I + te++], _.head && D && _.length < 65536 && (_.head.name += String.fromCharCode(D)), D && te < q; ) ;
                      if (512 & _.flags && (_.check = o(_.check, P, te, I)), q -= te, I += te, D) break e;
                    } else _.head && (_.head.name = null);
                    _.length = 0, _.mode = 8;
                  case 8:
                    if (4096 & _.flags) {
                      if (q === 0) break e;
                      for (te = 0; D = P[I + te++], _.head && D && _.length < 65536 && (_.head.comment += String.fromCharCode(D)), D && te < q; ) ;
                      if (512 & _.flags && (_.check = o(_.check, P, te, I)), q -= te, I += te, D) break e;
                    } else _.head && (_.head.comment = null);
                    _.mode = 9;
                  case 9:
                    if (512 & _.flags) {
                      for (; $ < 16; ) {
                        if (q === 0) break e;
                        q--, N += P[I++] << $, $ += 8;
                      }
                      if (N !== (65535 & _.check)) {
                        T.msg = "header crc mismatch", _.mode = 30;
                        break;
                      }
                      $ = N = 0;
                    }
                    _.head && (_.head.hcrc = _.flags >> 9 & 1, _.head.done = true), T.adler = _.check = 0, _.mode = 12;
                    break;
                  case 10:
                    for (; $ < 32; ) {
                      if (q === 0) break e;
                      q--, N += P[I++] << $, $ += 8;
                    }
                    T.adler = _.check = h(N), $ = N = 0, _.mode = 11;
                  case 11:
                    if (_.havedict === 0) return T.next_out = H, T.avail_out = Y, T.next_in = I, T.avail_in = q, _.hold = N, _.bits = $, 2;
                    T.adler = _.check = 1, _.mode = 12;
                  case 12:
                    if (B === 5 || B === 6) break e;
                  case 13:
                    if (_.last) {
                      N >>>= 7 & $, $ -= 7 & $, _.mode = 27;
                      break;
                    }
                    for (; $ < 3; ) {
                      if (q === 0) break e;
                      q--, N += P[I++] << $, $ += 8;
                    }
                    switch (_.last = 1 & N, $ -= 1, 3 & (N >>>= 1)) {
                      case 0:
                        _.mode = 14;
                        break;
                      case 1:
                        if (R(_), _.mode = 20, B !== 6) break;
                        N >>>= 2, $ -= 2;
                        break e;
                      case 2:
                        _.mode = 17;
                        break;
                      case 3:
                        T.msg = "invalid block type", _.mode = 30;
                    }
                    N >>>= 2, $ -= 2;
                    break;
                  case 14:
                    for (N >>>= 7 & $, $ -= 7 & $; $ < 32; ) {
                      if (q === 0) break e;
                      q--, N += P[I++] << $, $ += 8;
                    }
                    if ((65535 & N) != (N >>> 16 ^ 65535)) {
                      T.msg = "invalid stored block lengths", _.mode = 30;
                      break;
                    }
                    if (_.length = 65535 & N, $ = N = 0, _.mode = 15, B === 6) break e;
                  case 15:
                    _.mode = 16;
                  case 16:
                    if (te = _.length) {
                      if (q < te && (te = q), Y < te && (te = Y), te === 0) break e;
                      i.arraySet(k, P, I, te, H), q -= te, I += te, Y -= te, H += te, _.length -= te;
                      break;
                    }
                    _.mode = 12;
                    break;
                  case 17:
                    for (; $ < 14; ) {
                      if (q === 0) break e;
                      q--, N += P[I++] << $, $ += 8;
                    }
                    if (_.nlen = 257 + (31 & N), N >>>= 5, $ -= 5, _.ndist = 1 + (31 & N), N >>>= 5, $ -= 5, _.ncode = 4 + (15 & N), N >>>= 4, $ -= 4, 286 < _.nlen || 30 < _.ndist) {
                      T.msg = "too many length or distance symbols", _.mode = 30;
                      break;
                    }
                    _.have = 0, _.mode = 18;
                  case 18:
                    for (; _.have < _.ncode; ) {
                      for (; $ < 3; ) {
                        if (q === 0) break e;
                        q--, N += P[I++] << $, $ += 8;
                      }
                      _.lens[ae[_.have++]] = 7 & N, N >>>= 3, $ -= 3;
                    }
                    for (; _.have < 19; ) _.lens[ae[_.have++]] = 0;
                    if (_.lencode = _.lendyn, _.lenbits = 7, Z = {
                      bits: _.lenbits
                    }, G = d(0, _.lens, 0, 19, _.lencode, 0, _.work, Z), _.lenbits = Z.bits, G) {
                      T.msg = "invalid code lengths set", _.mode = 30;
                      break;
                    }
                    _.have = 0, _.mode = 19;
                  case 19:
                    for (; _.have < _.nlen + _.ndist; ) {
                      for (; ge = (W = _.lencode[N & (1 << _.lenbits) - 1]) >>> 16 & 255, me = 65535 & W, !((fe = W >>> 24) <= $); ) {
                        if (q === 0) break e;
                        q--, N += P[I++] << $, $ += 8;
                      }
                      if (me < 16) N >>>= fe, $ -= fe, _.lens[_.have++] = me;
                      else {
                        if (me === 16) {
                          for (O = fe + 2; $ < O; ) {
                            if (q === 0) break e;
                            q--, N += P[I++] << $, $ += 8;
                          }
                          if (N >>>= fe, $ -= fe, _.have === 0) {
                            T.msg = "invalid bit length repeat", _.mode = 30;
                            break;
                          }
                          D = _.lens[_.have - 1], te = 3 + (3 & N), N >>>= 2, $ -= 2;
                        } else if (me === 17) {
                          for (O = fe + 3; $ < O; ) {
                            if (q === 0) break e;
                            q--, N += P[I++] << $, $ += 8;
                          }
                          $ -= fe, D = 0, te = 3 + (7 & (N >>>= fe)), N >>>= 3, $ -= 3;
                        } else {
                          for (O = fe + 7; $ < O; ) {
                            if (q === 0) break e;
                            q--, N += P[I++] << $, $ += 8;
                          }
                          $ -= fe, D = 0, te = 11 + (127 & (N >>>= fe)), N >>>= 7, $ -= 7;
                        }
                        if (_.have + te > _.nlen + _.ndist) {
                          T.msg = "invalid bit length repeat", _.mode = 30;
                          break;
                        }
                        for (; te--; ) _.lens[_.have++] = D;
                      }
                    }
                    if (_.mode === 30) break;
                    if (_.lens[256] === 0) {
                      T.msg = "invalid code -- missing end-of-block", _.mode = 30;
                      break;
                    }
                    if (_.lenbits = 9, Z = {
                      bits: _.lenbits
                    }, G = d(b, _.lens, 0, _.nlen, _.lencode, 0, _.work, Z), _.lenbits = Z.bits, G) {
                      T.msg = "invalid literal/lengths set", _.mode = 30;
                      break;
                    }
                    if (_.distbits = 6, _.distcode = _.distdyn, Z = {
                      bits: _.distbits
                    }, G = d(p, _.lens, _.nlen, _.ndist, _.distcode, 0, _.work, Z), _.distbits = Z.bits, G) {
                      T.msg = "invalid distances set", _.mode = 30;
                      break;
                    }
                    if (_.mode = 20, B === 6) break e;
                  case 20:
                    _.mode = 21;
                  case 21:
                    if (6 <= q && 258 <= Y) {
                      T.next_out = H, T.avail_out = Y, T.next_in = I, T.avail_in = q, _.hold = N, _.bits = $, s(T, ee), H = T.next_out, k = T.output, Y = T.avail_out, I = T.next_in, P = T.input, q = T.avail_in, N = _.hold, $ = _.bits, _.mode === 12 && (_.back = -1);
                      break;
                    }
                    for (_.back = 0; ge = (W = _.lencode[N & (1 << _.lenbits) - 1]) >>> 16 & 255, me = 65535 & W, !((fe = W >>> 24) <= $); ) {
                      if (q === 0) break e;
                      q--, N += P[I++] << $, $ += 8;
                    }
                    if (ge && (240 & ge) == 0) {
                      for (De = fe, Ce = ge, we = me; ge = (W = _.lencode[we + ((N & (1 << De + Ce) - 1) >> De)]) >>> 16 & 255, me = 65535 & W, !(De + (fe = W >>> 24) <= $); ) {
                        if (q === 0) break e;
                        q--, N += P[I++] << $, $ += 8;
                      }
                      N >>>= De, $ -= De, _.back += De;
                    }
                    if (N >>>= fe, $ -= fe, _.back += fe, _.length = me, ge === 0) {
                      _.mode = 26;
                      break;
                    }
                    if (32 & ge) {
                      _.back = -1, _.mode = 12;
                      break;
                    }
                    if (64 & ge) {
                      T.msg = "invalid literal/length code", _.mode = 30;
                      break;
                    }
                    _.extra = 15 & ge, _.mode = 22;
                  case 22:
                    if (_.extra) {
                      for (O = _.extra; $ < O; ) {
                        if (q === 0) break e;
                        q--, N += P[I++] << $, $ += 8;
                      }
                      _.length += N & (1 << _.extra) - 1, N >>>= _.extra, $ -= _.extra, _.back += _.extra;
                    }
                    _.was = _.length, _.mode = 23;
                  case 23:
                    for (; ge = (W = _.distcode[N & (1 << _.distbits) - 1]) >>> 16 & 255, me = 65535 & W, !((fe = W >>> 24) <= $); ) {
                      if (q === 0) break e;
                      q--, N += P[I++] << $, $ += 8;
                    }
                    if ((240 & ge) == 0) {
                      for (De = fe, Ce = ge, we = me; ge = (W = _.distcode[we + ((N & (1 << De + Ce) - 1) >> De)]) >>> 16 & 255, me = 65535 & W, !(De + (fe = W >>> 24) <= $); ) {
                        if (q === 0) break e;
                        q--, N += P[I++] << $, $ += 8;
                      }
                      N >>>= De, $ -= De, _.back += De;
                    }
                    if (N >>>= fe, $ -= fe, _.back += fe, 64 & ge) {
                      T.msg = "invalid distance code", _.mode = 30;
                      break;
                    }
                    _.offset = me, _.extra = 15 & ge, _.mode = 24;
                  case 24:
                    if (_.extra) {
                      for (O = _.extra; $ < O; ) {
                        if (q === 0) break e;
                        q--, N += P[I++] << $, $ += 8;
                      }
                      _.offset += N & (1 << _.extra) - 1, N >>>= _.extra, $ -= _.extra, _.back += _.extra;
                    }
                    if (_.offset > _.dmax) {
                      T.msg = "invalid distance too far back", _.mode = 30;
                      break;
                    }
                    _.mode = 25;
                  case 25:
                    if (Y === 0) break e;
                    if (te = ee - Y, _.offset > te) {
                      if ((te = _.offset - te) > _.whave && _.sane) {
                        T.msg = "invalid distance too far back", _.mode = 30;
                        break;
                      }
                      se = te > _.wnext ? (te -= _.wnext, _.wsize - te) : _.wnext - te, te > _.length && (te = _.length), le = _.window;
                    } else le = k, se = H - _.offset, te = _.length;
                    for (Y < te && (te = Y), Y -= te, _.length -= te; k[H++] = le[se++], --te; ) ;
                    _.length === 0 && (_.mode = 21);
                    break;
                  case 26:
                    if (Y === 0) break e;
                    k[H++] = _.length, Y--, _.mode = 21;
                    break;
                  case 27:
                    if (_.wrap) {
                      for (; $ < 32; ) {
                        if (q === 0) break e;
                        q--, N |= P[I++] << $, $ += 8;
                      }
                      if (ee -= Y, T.total_out += ee, _.total += ee, ee && (T.adler = _.check = _.flags ? o(_.check, k, ee, H - ee) : c(_.check, k, ee, H - ee)), ee = Y, (_.flags ? N : h(N)) !== _.check) {
                        T.msg = "incorrect data check", _.mode = 30;
                        break;
                      }
                      $ = N = 0;
                    }
                    _.mode = 28;
                  case 28:
                    if (_.wrap && _.flags) {
                      for (; $ < 32; ) {
                        if (q === 0) break e;
                        q--, N += P[I++] << $, $ += 8;
                      }
                      if (N !== (4294967295 & _.total)) {
                        T.msg = "incorrect length check", _.mode = 30;
                        break;
                      }
                      $ = N = 0;
                    }
                    _.mode = 29;
                  case 29:
                    G = 1;
                    break e;
                  case 30:
                    G = -3;
                    break e;
                  case 31:
                    return -4;
                  case 32:
                  default:
                    return m;
                }
                return T.next_out = H, T.avail_out = Y, T.next_in = I, T.avail_in = q, _.hold = N, _.bits = $, (_.wsize || ee !== T.avail_out && _.mode < 30 && (_.mode < 27 || B !== 4)) && z(T, T.output, T.next_out, ee - T.avail_out) ? (_.mode = 31, -4) : (M -= T.avail_in, ee -= T.avail_out, T.total_in += M, T.total_out += ee, _.total += ee, _.wrap && ee && (T.adler = _.check = _.flags ? o(_.check, k, ee, T.next_out - ee) : c(_.check, k, ee, T.next_out - ee)), T.data_type = _.bits + (_.last ? 64 : 0) + (_.mode === 12 ? 128 : 0) + (_.mode === 20 || _.mode === 15 ? 256 : 0), (M == 0 && ee === 0 || B === 4) && G === g && (G = -5), G);
              }, a.inflateEnd = function(T) {
                if (!T || !T.state) return m;
                var B = T.state;
                return B.window && (B.window = null), T.state = null, g;
              }, a.inflateGetHeader = function(T, B) {
                var _;
                return T && T.state ? (2 & (_ = T.state).wrap) == 0 ? m : ((_.head = B).done = false, g) : m;
              }, a.inflateSetDictionary = function(T, B) {
                var _, P = B.length;
                return T && T.state ? (_ = T.state).wrap !== 0 && _.mode !== 11 ? m : _.mode === 11 && c(1, B, P, 0) !== _.check ? -3 : z(T, B, P, P) ? (_.mode = 31, -4) : (_.havedict = 1, g) : m;
              }, a.inflateInfo = "pako inflate (from Nodeca project)";
            },
            {
              "../utils/common": 41,
              "./adler32": 43,
              "./crc32": 45,
              "./inffast": 48,
              "./inftrees": 50
            }
          ],
          50: [
            function(n, r, a) {
              var i = n("../utils/common"), c = [
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                13,
                15,
                17,
                19,
                23,
                27,
                31,
                35,
                43,
                51,
                59,
                67,
                83,
                99,
                115,
                131,
                163,
                195,
                227,
                258,
                0,
                0
              ], o = [
                16,
                16,
                16,
                16,
                16,
                16,
                16,
                16,
                17,
                17,
                17,
                17,
                18,
                18,
                18,
                18,
                19,
                19,
                19,
                19,
                20,
                20,
                20,
                20,
                21,
                21,
                21,
                21,
                16,
                72,
                78
              ], s = [
                1,
                2,
                3,
                4,
                5,
                7,
                9,
                13,
                17,
                25,
                33,
                49,
                65,
                97,
                129,
                193,
                257,
                385,
                513,
                769,
                1025,
                1537,
                2049,
                3073,
                4097,
                6145,
                8193,
                12289,
                16385,
                24577,
                0,
                0
              ], d = [
                16,
                16,
                16,
                16,
                17,
                17,
                18,
                18,
                19,
                19,
                20,
                20,
                21,
                21,
                22,
                22,
                23,
                23,
                24,
                24,
                25,
                25,
                26,
                26,
                27,
                27,
                28,
                28,
                29,
                29,
                64,
                64
              ];
              r.exports = function(b, p, g, m, y, l, u, h) {
                var f, v, w, x, U, E, F, C, R, z = h.bits, T = 0, B = 0, _ = 0, P = 0, k = 0, I = 0, H = 0, q = 0, Y = 0, N = 0, $ = null, M = 0, ee = new i.Buf16(16), te = new i.Buf16(16), se = null, le = 0;
                for (T = 0; T <= 15; T++) ee[T] = 0;
                for (B = 0; B < m; B++) ee[p[g + B]]++;
                for (k = z, P = 15; 1 <= P && ee[P] === 0; P--) ;
                if (P < k && (k = P), P === 0) return y[l++] = 20971520, y[l++] = 20971520, h.bits = 1, 0;
                for (_ = 1; _ < P && ee[_] === 0; _++) ;
                for (k < _ && (k = _), T = q = 1; T <= 15; T++) if (q <<= 1, (q -= ee[T]) < 0) return -1;
                if (0 < q && (b === 0 || P !== 1)) return -1;
                for (te[1] = 0, T = 1; T < 15; T++) te[T + 1] = te[T] + ee[T];
                for (B = 0; B < m; B++) p[g + B] !== 0 && (u[te[p[g + B]]++] = B);
                if (E = b === 0 ? ($ = se = u, 19) : b === 1 ? ($ = c, M -= 257, se = o, le -= 257, 256) : ($ = s, se = d, -1), T = _, U = l, H = B = N = 0, w = -1, x = (Y = 1 << (I = k)) - 1, b === 1 && 852 < Y || b === 2 && 592 < Y) return 1;
                for (; ; ) {
                  for (F = T - H, R = u[B] < E ? (C = 0, u[B]) : u[B] > E ? (C = se[le + u[B]], $[M + u[B]]) : (C = 96, 0), f = 1 << T - H, _ = v = 1 << I; y[U + (N >> H) + (v -= f)] = F << 24 | C << 16 | R | 0, v !== 0; ) ;
                  for (f = 1 << T - 1; N & f; ) f >>= 1;
                  if (f !== 0 ? (N &= f - 1, N += f) : N = 0, B++, --ee[T] == 0) {
                    if (T === P) break;
                    T = p[g + u[B]];
                  }
                  if (k < T && (N & x) !== w) {
                    for (H === 0 && (H = k), U += _, q = 1 << (I = T - H); I + H < P && !((q -= ee[I + H]) <= 0); ) I++, q <<= 1;
                    if (Y += 1 << I, b === 1 && 852 < Y || b === 2 && 592 < Y) return 1;
                    y[w = N & x] = k << 24 | I << 16 | U - l | 0;
                  }
                }
                return N !== 0 && (y[U + N] = T - H << 24 | 64 << 16 | 0), h.bits = k, 0;
              };
            },
            {
              "../utils/common": 41
            }
          ],
          51: [
            function(n, r, a) {
              r.exports = {
                2: "need dictionary",
                1: "stream end",
                0: "",
                "-1": "file error",
                "-2": "stream error",
                "-3": "data error",
                "-4": "insufficient memory",
                "-5": "buffer error",
                "-6": "incompatible version"
              };
            },
            {}
          ],
          52: [
            function(n, r, a) {
              var i = n("../utils/common"), c = 0, o = 1;
              function s(W) {
                for (var X = W.length; 0 <= --X; ) W[X] = 0;
              }
              var d = 0, b = 29, p = 256, g = p + 1 + b, m = 30, y = 19, l = 2 * g + 1, u = 15, h = 16, f = 7, v = 256, w = 16, x = 17, U = 18, E = [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                1,
                1,
                1,
                2,
                2,
                2,
                2,
                3,
                3,
                3,
                3,
                4,
                4,
                4,
                4,
                5,
                5,
                5,
                5,
                0
              ], F = [
                0,
                0,
                0,
                0,
                1,
                1,
                2,
                2,
                3,
                3,
                4,
                4,
                5,
                5,
                6,
                6,
                7,
                7,
                8,
                8,
                9,
                9,
                10,
                10,
                11,
                11,
                12,
                12,
                13,
                13
              ], C = [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                2,
                3,
                7
              ], R = [
                16,
                17,
                18,
                0,
                8,
                7,
                9,
                6,
                10,
                5,
                11,
                4,
                12,
                3,
                13,
                2,
                14,
                1,
                15
              ], z = new Array(2 * (g + 2));
              s(z);
              var T = new Array(2 * m);
              s(T);
              var B = new Array(512);
              s(B);
              var _ = new Array(256);
              s(_);
              var P = new Array(b);
              s(P);
              var k, I, H, q = new Array(m);
              function Y(W, X, ae, ne, K) {
                this.static_tree = W, this.extra_bits = X, this.extra_base = ae, this.elems = ne, this.max_length = K, this.has_stree = W && W.length;
              }
              function N(W, X) {
                this.dyn_tree = W, this.max_code = 0, this.stat_desc = X;
              }
              function $(W) {
                return W < 256 ? B[W] : B[256 + (W >>> 7)];
              }
              function M(W, X) {
                W.pending_buf[W.pending++] = 255 & X, W.pending_buf[W.pending++] = X >>> 8 & 255;
              }
              function ee(W, X, ae) {
                W.bi_valid > h - ae ? (W.bi_buf |= X << W.bi_valid & 65535, M(W, W.bi_buf), W.bi_buf = X >> h - W.bi_valid, W.bi_valid += ae - h) : (W.bi_buf |= X << W.bi_valid & 65535, W.bi_valid += ae);
              }
              function te(W, X, ae) {
                ee(W, ae[2 * X], ae[2 * X + 1]);
              }
              function se(W, X) {
                for (var ae = 0; ae |= 1 & W, W >>>= 1, ae <<= 1, 0 < --X; ) ;
                return ae >>> 1;
              }
              function le(W, X, ae) {
                var ne, K, L = new Array(u + 1), V = 0;
                for (ne = 1; ne <= u; ne++) L[ne] = V = V + ae[ne - 1] << 1;
                for (K = 0; K <= X; K++) {
                  var J = W[2 * K + 1];
                  J !== 0 && (W[2 * K] = se(L[J]++, J));
                }
              }
              function fe(W) {
                var X;
                for (X = 0; X < g; X++) W.dyn_ltree[2 * X] = 0;
                for (X = 0; X < m; X++) W.dyn_dtree[2 * X] = 0;
                for (X = 0; X < y; X++) W.bl_tree[2 * X] = 0;
                W.dyn_ltree[2 * v] = 1, W.opt_len = W.static_len = 0, W.last_lit = W.matches = 0;
              }
              function ge(W) {
                8 < W.bi_valid ? M(W, W.bi_buf) : 0 < W.bi_valid && (W.pending_buf[W.pending++] = W.bi_buf), W.bi_buf = 0, W.bi_valid = 0;
              }
              function me(W, X, ae, ne) {
                var K = 2 * X, L = 2 * ae;
                return W[K] < W[L] || W[K] === W[L] && ne[X] <= ne[ae];
              }
              function De(W, X, ae) {
                for (var ne = W.heap[ae], K = ae << 1; K <= W.heap_len && (K < W.heap_len && me(X, W.heap[K + 1], W.heap[K], W.depth) && K++, !me(X, ne, W.heap[K], W.depth)); ) W.heap[ae] = W.heap[K], ae = K, K <<= 1;
                W.heap[ae] = ne;
              }
              function Ce(W, X, ae) {
                var ne, K, L, V, J = 0;
                if (W.last_lit !== 0) for (; ne = W.pending_buf[W.d_buf + 2 * J] << 8 | W.pending_buf[W.d_buf + 2 * J + 1], K = W.pending_buf[W.l_buf + J], J++, ne === 0 ? te(W, K, X) : (te(W, (L = _[K]) + p + 1, X), (V = E[L]) !== 0 && ee(W, K -= P[L], V), te(W, L = $(--ne), ae), (V = F[L]) !== 0 && ee(W, ne -= q[L], V)), J < W.last_lit; ) ;
                te(W, v, X);
              }
              function we(W, X) {
                var ae, ne, K, L = X.dyn_tree, V = X.stat_desc.static_tree, J = X.stat_desc.has_stree, ie = X.stat_desc.elems, he = -1;
                for (W.heap_len = 0, W.heap_max = l, ae = 0; ae < ie; ae++) L[2 * ae] !== 0 ? (W.heap[++W.heap_len] = he = ae, W.depth[ae] = 0) : L[2 * ae + 1] = 0;
                for (; W.heap_len < 2; ) L[2 * (K = W.heap[++W.heap_len] = he < 2 ? ++he : 0)] = 1, W.depth[K] = 0, W.opt_len--, J && (W.static_len -= V[2 * K + 1]);
                for (X.max_code = he, ae = W.heap_len >> 1; 1 <= ae; ae--) De(W, L, ae);
                for (K = ie; ae = W.heap[1], W.heap[1] = W.heap[W.heap_len--], De(W, L, 1), ne = W.heap[1], W.heap[--W.heap_max] = ae, W.heap[--W.heap_max] = ne, L[2 * K] = L[2 * ae] + L[2 * ne], W.depth[K] = (W.depth[ae] >= W.depth[ne] ? W.depth[ae] : W.depth[ne]) + 1, L[2 * ae + 1] = L[2 * ne + 1] = K, W.heap[1] = K++, De(W, L, 1), 2 <= W.heap_len; ) ;
                W.heap[--W.heap_max] = W.heap[1], function(ye, Ue) {
                  var _e, Q, ce, de, ue, be, ve = Ue.dyn_tree, xe = Ue.max_code, Ae = Ue.stat_desc.static_tree, We = Ue.stat_desc.has_stree, Ye = Ue.stat_desc.extra_bits, A = Ue.stat_desc.extra_base, S = Ue.stat_desc.max_length, j = 0;
                  for (de = 0; de <= u; de++) ye.bl_count[de] = 0;
                  for (ve[2 * ye.heap[ye.heap_max] + 1] = 0, _e = ye.heap_max + 1; _e < l; _e++) S < (de = ve[2 * ve[2 * (Q = ye.heap[_e]) + 1] + 1] + 1) && (de = S, j++), ve[2 * Q + 1] = de, xe < Q || (ye.bl_count[de]++, ue = 0, A <= Q && (ue = Ye[Q - A]), be = ve[2 * Q], ye.opt_len += be * (de + ue), We && (ye.static_len += be * (Ae[2 * Q + 1] + ue)));
                  if (j !== 0) {
                    do {
                      for (de = S - 1; ye.bl_count[de] === 0; ) de--;
                      ye.bl_count[de]--, ye.bl_count[de + 1] += 2, ye.bl_count[S]--, j -= 2;
                    } while (0 < j);
                    for (de = S; de !== 0; de--) for (Q = ye.bl_count[de]; Q !== 0; ) xe < (ce = ye.heap[--_e]) || (ve[2 * ce + 1] !== de && (ye.opt_len += (de - ve[2 * ce + 1]) * ve[2 * ce], ve[2 * ce + 1] = de), Q--);
                  }
                }(W, X), le(L, he, W.bl_count);
              }
              function D(W, X, ae) {
                var ne, K, L = -1, V = X[1], J = 0, ie = 7, he = 4;
                for (V === 0 && (ie = 138, he = 3), X[2 * (ae + 1) + 1] = 65535, ne = 0; ne <= ae; ne++) K = V, V = X[2 * (ne + 1) + 1], ++J < ie && K === V || (J < he ? W.bl_tree[2 * K] += J : K !== 0 ? (K !== L && W.bl_tree[2 * K]++, W.bl_tree[2 * w]++) : J <= 10 ? W.bl_tree[2 * x]++ : W.bl_tree[2 * U]++, L = K, he = (J = 0) === V ? (ie = 138, 3) : K === V ? (ie = 6, 3) : (ie = 7, 4));
              }
              function G(W, X, ae) {
                var ne, K, L = -1, V = X[1], J = 0, ie = 7, he = 4;
                for (V === 0 && (ie = 138, he = 3), ne = 0; ne <= ae; ne++) if (K = V, V = X[2 * (ne + 1) + 1], !(++J < ie && K === V)) {
                  if (J < he) for (; te(W, K, W.bl_tree), --J != 0; ) ;
                  else K !== 0 ? (K !== L && (te(W, K, W.bl_tree), J--), te(W, w, W.bl_tree), ee(W, J - 3, 2)) : J <= 10 ? (te(W, x, W.bl_tree), ee(W, J - 3, 3)) : (te(W, U, W.bl_tree), ee(W, J - 11, 7));
                  L = K, he = (J = 0) === V ? (ie = 138, 3) : K === V ? (ie = 6, 3) : (ie = 7, 4);
                }
              }
              s(q);
              var Z = false;
              function O(W, X, ae, ne) {
                ee(W, (d << 1) + (ne ? 1 : 0), 3), function(K, L, V, J) {
                  ge(K), M(K, V), M(K, ~V), i.arraySet(K.pending_buf, K.window, L, V, K.pending), K.pending += V;
                }(W, X, ae);
              }
              a._tr_init = function(W) {
                Z || (function() {
                  var X, ae, ne, K, L, V = new Array(u + 1);
                  for (K = ne = 0; K < b - 1; K++) for (P[K] = ne, X = 0; X < 1 << E[K]; X++) _[ne++] = K;
                  for (_[ne - 1] = K, K = L = 0; K < 16; K++) for (q[K] = L, X = 0; X < 1 << F[K]; X++) B[L++] = K;
                  for (L >>= 7; K < m; K++) for (q[K] = L << 7, X = 0; X < 1 << F[K] - 7; X++) B[256 + L++] = K;
                  for (ae = 0; ae <= u; ae++) V[ae] = 0;
                  for (X = 0; X <= 143; ) z[2 * X + 1] = 8, X++, V[8]++;
                  for (; X <= 255; ) z[2 * X + 1] = 9, X++, V[9]++;
                  for (; X <= 279; ) z[2 * X + 1] = 7, X++, V[7]++;
                  for (; X <= 287; ) z[2 * X + 1] = 8, X++, V[8]++;
                  for (le(z, g + 1, V), X = 0; X < m; X++) T[2 * X + 1] = 5, T[2 * X] = se(X, 5);
                  k = new Y(z, E, p + 1, g, u), I = new Y(T, F, 0, m, u), H = new Y(new Array(0), C, 0, y, f);
                }(), Z = true), W.l_desc = new N(W.dyn_ltree, k), W.d_desc = new N(W.dyn_dtree, I), W.bl_desc = new N(W.bl_tree, H), W.bi_buf = 0, W.bi_valid = 0, fe(W);
              }, a._tr_stored_block = O, a._tr_flush_block = function(W, X, ae, ne) {
                var K, L, V = 0;
                0 < W.level ? (W.strm.data_type === 2 && (W.strm.data_type = function(J) {
                  var ie, he = 4093624447;
                  for (ie = 0; ie <= 31; ie++, he >>>= 1) if (1 & he && J.dyn_ltree[2 * ie] !== 0) return c;
                  if (J.dyn_ltree[18] !== 0 || J.dyn_ltree[20] !== 0 || J.dyn_ltree[26] !== 0) return o;
                  for (ie = 32; ie < p; ie++) if (J.dyn_ltree[2 * ie] !== 0) return o;
                  return c;
                }(W)), we(W, W.l_desc), we(W, W.d_desc), V = function(J) {
                  var ie;
                  for (D(J, J.dyn_ltree, J.l_desc.max_code), D(J, J.dyn_dtree, J.d_desc.max_code), we(J, J.bl_desc), ie = y - 1; 3 <= ie && J.bl_tree[2 * R[ie] + 1] === 0; ie--) ;
                  return J.opt_len += 3 * (ie + 1) + 5 + 5 + 4, ie;
                }(W), K = W.opt_len + 3 + 7 >>> 3, (L = W.static_len + 3 + 7 >>> 3) <= K && (K = L)) : K = L = ae + 5, ae + 4 <= K && X !== -1 ? O(W, X, ae, ne) : W.strategy === 4 || L === K ? (ee(W, 2 + (ne ? 1 : 0), 3), Ce(W, z, T)) : (ee(W, 4 + (ne ? 1 : 0), 3), function(J, ie, he, ye) {
                  var Ue;
                  for (ee(J, ie - 257, 5), ee(J, he - 1, 5), ee(J, ye - 4, 4), Ue = 0; Ue < ye; Ue++) ee(J, J.bl_tree[2 * R[Ue] + 1], 3);
                  G(J, J.dyn_ltree, ie - 1), G(J, J.dyn_dtree, he - 1);
                }(W, W.l_desc.max_code + 1, W.d_desc.max_code + 1, V + 1), Ce(W, W.dyn_ltree, W.dyn_dtree)), fe(W), ne && ge(W);
              }, a._tr_tally = function(W, X, ae) {
                return W.pending_buf[W.d_buf + 2 * W.last_lit] = X >>> 8 & 255, W.pending_buf[W.d_buf + 2 * W.last_lit + 1] = 255 & X, W.pending_buf[W.l_buf + W.last_lit] = 255 & ae, W.last_lit++, X === 0 ? W.dyn_ltree[2 * ae]++ : (W.matches++, X--, W.dyn_ltree[2 * (_[ae] + p + 1)]++, W.dyn_dtree[2 * $(X)]++), W.last_lit === W.lit_bufsize - 1;
              }, a._tr_align = function(W) {
                ee(W, 2, 3), te(W, v, z), function(X) {
                  X.bi_valid === 16 ? (M(X, X.bi_buf), X.bi_buf = 0, X.bi_valid = 0) : 8 <= X.bi_valid && (X.pending_buf[X.pending++] = 255 & X.bi_buf, X.bi_buf >>= 8, X.bi_valid -= 8);
                }(W);
              };
            },
            {
              "../utils/common": 41
            }
          ],
          53: [
            function(n, r, a) {
              r.exports = function() {
                this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
              };
            },
            {}
          ],
          54: [
            function(n, r, a) {
              (function(i) {
                (function(c, o) {
                  if (!c.setImmediate) {
                    var s, d, b, p, g = 1, m = {}, y = false, l = c.document, u = Object.getPrototypeOf && Object.getPrototypeOf(c);
                    u = u && u.setTimeout ? u : c, s = {}.toString.call(c.process) === "[object process]" ? function(w) {
                      process.nextTick(function() {
                        f(w);
                      });
                    } : function() {
                      if (c.postMessage && !c.importScripts) {
                        var w = true, x = c.onmessage;
                        return c.onmessage = function() {
                          w = false;
                        }, c.postMessage("", "*"), c.onmessage = x, w;
                      }
                    }() ? (p = "setImmediate$" + Math.random() + "$", c.addEventListener ? c.addEventListener("message", v, false) : c.attachEvent("onmessage", v), function(w) {
                      c.postMessage(p + w, "*");
                    }) : c.MessageChannel ? ((b = new MessageChannel()).port1.onmessage = function(w) {
                      f(w.data);
                    }, function(w) {
                      b.port2.postMessage(w);
                    }) : l && "onreadystatechange" in l.createElement("script") ? (d = l.documentElement, function(w) {
                      var x = l.createElement("script");
                      x.onreadystatechange = function() {
                        f(w), x.onreadystatechange = null, d.removeChild(x), x = null;
                      }, d.appendChild(x);
                    }) : function(w) {
                      setTimeout(f, 0, w);
                    }, u.setImmediate = function(w) {
                      typeof w != "function" && (w = new Function("" + w));
                      for (var x = new Array(arguments.length - 1), U = 0; U < x.length; U++) x[U] = arguments[U + 1];
                      var E = {
                        callback: w,
                        args: x
                      };
                      return m[g] = E, s(g), g++;
                    }, u.clearImmediate = h;
                  }
                  function h(w) {
                    delete m[w];
                  }
                  function f(w) {
                    if (y) setTimeout(f, 0, w);
                    else {
                      var x = m[w];
                      if (x) {
                        y = true;
                        try {
                          (function(U) {
                            var E = U.callback, F = U.args;
                            switch (F.length) {
                              case 0:
                                E();
                                break;
                              case 1:
                                E(F[0]);
                                break;
                              case 2:
                                E(F[0], F[1]);
                                break;
                              case 3:
                                E(F[0], F[1], F[2]);
                                break;
                              default:
                                E.apply(o, F);
                            }
                          })(x);
                        } finally {
                          h(w), y = false;
                        }
                      }
                    }
                  }
                  function v(w) {
                    w.source === c && typeof w.data == "string" && w.data.indexOf(p) === 0 && f(+w.data.slice(p.length));
                  }
                })(typeof self > "u" ? i === void 0 ? this : i : self);
              }).call(this, typeof ft < "u" ? ft : typeof self < "u" ? self : typeof window < "u" ? window : {});
            },
            {}
          ]
        }, {}, [
          10
        ])(10);
      });
    }(Oi)), Oi.exports;
  }
  var Uc;
  function Xd() {
    if (Uc) return cn;
    Uc = 1;
    var e = jl(), t = Cp();
    cn.openArrayBuffer = n, cn.splitPath = r, cn.joinPath = a;
    function n(i) {
      return t.loadAsync(i).then(function(c) {
        function o(p) {
          return c.file(p) !== null;
        }
        function s(p, g) {
          return c.file(p).async("uint8array").then(function(m) {
            if (g === "base64") return e.fromByteArray(m);
            if (g) {
              var y = new TextDecoder(g);
              return y.decode(m);
            } else return m;
          });
        }
        function d(p, g) {
          c.file(p, g);
        }
        function b() {
          return c.generateAsync({
            type: "arraybuffer"
          });
        }
        return {
          exists: o,
          read: s,
          write: d,
          toArrayBuffer: b
        };
      });
    }
    function r(i) {
      var c = i.lastIndexOf("/");
      return c === -1 ? {
        dirname: "",
        basename: i
      } : {
        dirname: i.substring(0, c),
        basename: i.substring(c + 1)
      };
    }
    function a() {
      var i = Array.prototype.filter.call(arguments, function(o) {
        return o;
      }), c = [];
      return i.forEach(function(o) {
        /^\//.test(o) ? c = [
          o
        ] : c.push(o);
      }), c.join("/");
    }
    return cn;
  }
  var On = {}, yt = {}, Vt = {}, Tc;
  function Vd() {
    if (Tc) return Vt;
    Tc = 1;
    var e = Re;
    Vt.Element = n, Vt.element = function(i, c, o) {
      return new n(i, c, o);
    }, Vt.text = function(i) {
      return {
        type: "text",
        value: i
      };
    };
    var t = Vt.emptyElement = {
      first: function() {
        return null;
      },
      firstOrEmpty: function() {
        return t;
      },
      attributes: {},
      children: []
    };
    function n(i, c, o) {
      this.type = "element", this.name = i, this.attributes = c || {}, this.children = o || [];
    }
    n.prototype.first = function(i) {
      return e.find(this.children, function(c) {
        return c.name === i;
      });
    }, n.prototype.firstOrEmpty = function(i) {
      return this.first(i) || t;
    }, n.prototype.getElementsByTagName = function(i) {
      var c = e.filter(this.children, function(o) {
        return o.name === i;
      });
      return a(c);
    }, n.prototype.text = function() {
      if (this.children.length === 0) return "";
      if (this.children.length !== 1 || this.children[0].type !== "text") throw new Error("Not implemented");
      return this.children[0].value;
    };
    var r = {
      getElementsByTagName: function(i) {
        return a(e.flatten(this.map(function(c) {
          return c.getElementsByTagName(i);
        }, true)));
      }
    };
    function a(i) {
      return e.extend(i, r);
    }
    return Vt;
  }
  var Ni = {}, Nn = {}, sn = {}, ut = {}, Rt = {}, Ec;
  function Wr() {
    if (Ec) return Rt;
    Ec = 1;
    function e(i, c, o) {
      if (o === void 0 && (o = Array.prototype), i && typeof o.find == "function") return o.find.call(i, c);
      for (var s = 0; s < i.length; s++) if (Object.prototype.hasOwnProperty.call(i, s)) {
        var d = i[s];
        if (c.call(void 0, d, s, i)) return d;
      }
    }
    function t(i, c) {
      return c === void 0 && (c = Object), c && typeof c.freeze == "function" ? c.freeze(i) : i;
    }
    function n(i, c) {
      if (i === null || typeof i != "object") throw new TypeError("target is not an object");
      for (var o in c) Object.prototype.hasOwnProperty.call(c, o) && (i[o] = c[o]);
      return i;
    }
    var r = t({
      HTML: "text/html",
      isHTML: function(i) {
        return i === r.HTML;
      },
      XML_APPLICATION: "application/xml",
      XML_TEXT: "text/xml",
      XML_XHTML_APPLICATION: "application/xhtml+xml",
      XML_SVG_IMAGE: "image/svg+xml"
    }), a = t({
      HTML: "http://www.w3.org/1999/xhtml",
      isHTML: function(i) {
        return i === a.HTML;
      },
      SVG: "http://www.w3.org/2000/svg",
      XML: "http://www.w3.org/XML/1998/namespace",
      XMLNS: "http://www.w3.org/2000/xmlns/"
    });
    return Rt.assign = n, Rt.find = e, Rt.freeze = t, Rt.MIME_TYPE = r, Rt.NAMESPACE = a, Rt;
  }
  var Cc;
  function ao() {
    if (Cc) return ut;
    Cc = 1;
    var e = Wr(), t = e.find, n = e.NAMESPACE;
    function r(A) {
      return A !== "";
    }
    function a(A) {
      return A ? A.split(/[\t\n\f\r ]+/).filter(r) : [];
    }
    function i(A, S) {
      return A.hasOwnProperty(S) || (A[S] = true), A;
    }
    function c(A) {
      if (!A) return [];
      var S = a(A);
      return Object.keys(S.reduce(i, {}));
    }
    function o(A) {
      return function(S) {
        return A && A.indexOf(S) !== -1;
      };
    }
    function s(A, S) {
      for (var j in A) Object.prototype.hasOwnProperty.call(A, j) && (S[j] = A[j]);
    }
    function d(A, S) {
      var j = A.prototype;
      if (!(j instanceof S)) {
        let re = function() {
        };
        re.prototype = S.prototype, re = new re(), s(j, re), A.prototype = j = re;
      }
      j.constructor != A && (typeof A != "function" && console.error("unknown Class:" + A), j.constructor = A);
    }
    var b = {}, p = b.ELEMENT_NODE = 1, g = b.ATTRIBUTE_NODE = 2, m = b.TEXT_NODE = 3, y = b.CDATA_SECTION_NODE = 4, l = b.ENTITY_REFERENCE_NODE = 5, u = b.ENTITY_NODE = 6, h = b.PROCESSING_INSTRUCTION_NODE = 7, f = b.COMMENT_NODE = 8, v = b.DOCUMENT_NODE = 9, w = b.DOCUMENT_TYPE_NODE = 10, x = b.DOCUMENT_FRAGMENT_NODE = 11, U = b.NOTATION_NODE = 12, E = {}, F = {};
    E.INDEX_SIZE_ERR = (F[1] = "Index size error", 1), E.DOMSTRING_SIZE_ERR = (F[2] = "DOMString size error", 2);
    var C = E.HIERARCHY_REQUEST_ERR = (F[3] = "Hierarchy request error", 3);
    E.WRONG_DOCUMENT_ERR = (F[4] = "Wrong document", 4), E.INVALID_CHARACTER_ERR = (F[5] = "Invalid character", 5), E.NO_DATA_ALLOWED_ERR = (F[6] = "No data allowed", 6), E.NO_MODIFICATION_ALLOWED_ERR = (F[7] = "No modification allowed", 7);
    var R = E.NOT_FOUND_ERR = (F[8] = "Not found", 8);
    E.NOT_SUPPORTED_ERR = (F[9] = "Not supported", 9);
    var z = E.INUSE_ATTRIBUTE_ERR = (F[10] = "Attribute in use", 10);
    E.INVALID_STATE_ERR = (F[11] = "Invalid state", 11), E.SYNTAX_ERR = (F[12] = "Syntax error", 12), E.INVALID_MODIFICATION_ERR = (F[13] = "Invalid modification", 13), E.NAMESPACE_ERR = (F[14] = "Invalid namespace", 14), E.INVALID_ACCESS_ERR = (F[15] = "Invalid access", 15);
    function T(A, S) {
      if (S instanceof Error) var j = S;
      else j = this, Error.call(this, F[A]), this.message = F[A], Error.captureStackTrace && Error.captureStackTrace(this, T);
      return j.code = A, S && (this.message = this.message + ": " + S), j;
    }
    T.prototype = Error.prototype, s(E, T);
    function B() {
    }
    B.prototype = {
      length: 0,
      item: function(A) {
        return A >= 0 && A < this.length ? this[A] : null;
      },
      toString: function(A, S) {
        for (var j = [], re = 0; re < this.length; re++) xe(this[re], j, A, S);
        return j.join("");
      },
      filter: function(A) {
        return Array.prototype.filter.call(this, A);
      },
      indexOf: function(A) {
        return Array.prototype.indexOf.call(this, A);
      }
    };
    function _(A, S) {
      this._node = A, this._refresh = S, P(this);
    }
    function P(A) {
      var S = A._node._inc || A._node.ownerDocument._inc;
      if (A._inc !== S) {
        var j = A._refresh(A._node);
        if (Ye(A, "length", j.length), !A.$$length || j.length < A.$$length) for (var re = j.length; re in A; re++) Object.prototype.hasOwnProperty.call(A, re) && delete A[re];
        s(j, A), A._inc = S;
      }
    }
    _.prototype.item = function(A) {
      return P(this), this[A] || null;
    }, d(_, B);
    function k() {
    }
    function I(A, S) {
      for (var j = A.length; j--; ) if (A[j] === S) return j;
    }
    function H(A, S, j, re) {
      if (re ? S[I(S, re)] = j : S[S.length++] = j, A) {
        j.ownerElement = A;
        var pe = A.ownerDocument;
        pe && (re && se(pe, A, re), te(pe, A, j));
      }
    }
    function q(A, S, j) {
      var re = I(S, j);
      if (re >= 0) {
        for (var pe = S.length - 1; re < pe; ) S[re] = S[++re];
        if (S.length = pe, A) {
          var Ee = A.ownerDocument;
          Ee && (se(Ee, A, j), j.ownerElement = null);
        }
      } else throw new T(R, new Error(A.tagName + "@" + j));
    }
    k.prototype = {
      length: 0,
      item: B.prototype.item,
      getNamedItem: function(A) {
        for (var S = this.length; S--; ) {
          var j = this[S];
          if (j.nodeName == A) return j;
        }
      },
      setNamedItem: function(A) {
        var S = A.ownerElement;
        if (S && S != this._ownerElement) throw new T(z);
        var j = this.getNamedItem(A.nodeName);
        return H(this._ownerElement, this, A, j), j;
      },
      setNamedItemNS: function(A) {
        var S = A.ownerElement, j;
        if (S && S != this._ownerElement) throw new T(z);
        return j = this.getNamedItemNS(A.namespaceURI, A.localName), H(this._ownerElement, this, A, j), j;
      },
      removeNamedItem: function(A) {
        var S = this.getNamedItem(A);
        return q(this._ownerElement, this, S), S;
      },
      removeNamedItemNS: function(A, S) {
        var j = this.getNamedItemNS(A, S);
        return q(this._ownerElement, this, j), j;
      },
      getNamedItemNS: function(A, S) {
        for (var j = this.length; j--; ) {
          var re = this[j];
          if (re.localName == S && re.namespaceURI == A) return re;
        }
        return null;
      }
    };
    function Y() {
    }
    Y.prototype = {
      hasFeature: function(A, S) {
        return true;
      },
      createDocument: function(A, S, j) {
        var re = new ee();
        if (re.implementation = this, re.childNodes = new B(), re.doctype = j || null, j && re.appendChild(j), S) {
          var pe = re.createElementNS(A, S);
          re.appendChild(pe);
        }
        return re;
      },
      createDocumentType: function(A, S, j) {
        var re = new he();
        return re.name = A, re.nodeName = A, re.publicId = S || "", re.systemId = j || "", re;
      }
    };
    function N() {
    }
    N.prototype = {
      firstChild: null,
      lastChild: null,
      previousSibling: null,
      nextSibling: null,
      attributes: null,
      parentNode: null,
      childNodes: null,
      ownerDocument: null,
      nodeValue: null,
      namespaceURI: null,
      prefix: null,
      localName: null,
      insertBefore: function(A, S) {
        return X(this, A, S);
      },
      replaceChild: function(A, S) {
        X(this, A, S, W), S && this.removeChild(S);
      },
      removeChild: function(A) {
        return fe(this, A);
      },
      appendChild: function(A) {
        return this.insertBefore(A, null);
      },
      hasChildNodes: function() {
        return this.firstChild != null;
      },
      cloneNode: function(A) {
        return We(this.ownerDocument || this, this, A);
      },
      normalize: function() {
        for (var A = this.firstChild; A; ) {
          var S = A.nextSibling;
          S && S.nodeType == m && A.nodeType == m ? (this.removeChild(S), A.appendData(S.data)) : (A.normalize(), A = S);
        }
      },
      isSupported: function(A, S) {
        return this.ownerDocument.implementation.hasFeature(A, S);
      },
      hasAttributes: function() {
        return this.attributes.length > 0;
      },
      lookupPrefix: function(A) {
        for (var S = this; S; ) {
          var j = S._nsMap;
          if (j) {
            for (var re in j) if (Object.prototype.hasOwnProperty.call(j, re) && j[re] === A) return re;
          }
          S = S.nodeType == g ? S.ownerDocument : S.parentNode;
        }
        return null;
      },
      lookupNamespaceURI: function(A) {
        for (var S = this; S; ) {
          var j = S._nsMap;
          if (j && Object.prototype.hasOwnProperty.call(j, A)) return j[A];
          S = S.nodeType == g ? S.ownerDocument : S.parentNode;
        }
        return null;
      },
      isDefaultNamespace: function(A) {
        var S = this.lookupPrefix(A);
        return S == null;
      }
    };
    function $(A) {
      return A == "<" && "&lt;" || A == ">" && "&gt;" || A == "&" && "&amp;" || A == '"' && "&quot;" || "&#" + A.charCodeAt() + ";";
    }
    s(b, N), s(b, N.prototype);
    function M(A, S) {
      if (S(A)) return true;
      if (A = A.firstChild) do
        if (M(A, S)) return true;
      while (A = A.nextSibling);
    }
    function ee() {
      this.ownerDocument = this;
    }
    function te(A, S, j) {
      A && A._inc++;
      var re = j.namespaceURI;
      re === n.XMLNS && (S._nsMap[j.prefix ? j.localName : ""] = j.value);
    }
    function se(A, S, j, re) {
      A && A._inc++;
      var pe = j.namespaceURI;
      pe === n.XMLNS && delete S._nsMap[j.prefix ? j.localName : ""];
    }
    function le(A, S, j) {
      if (A && A._inc) {
        A._inc++;
        var re = S.childNodes;
        if (j) re[re.length++] = j;
        else {
          for (var pe = S.firstChild, Ee = 0; pe; ) re[Ee++] = pe, pe = pe.nextSibling;
          re.length = Ee, delete re[re.length];
        }
      }
    }
    function fe(A, S) {
      var j = S.previousSibling, re = S.nextSibling;
      return j ? j.nextSibling = re : A.firstChild = re, re ? re.previousSibling = j : A.lastChild = j, S.parentNode = null, S.previousSibling = null, S.nextSibling = null, le(A.ownerDocument, A), S;
    }
    function ge(A) {
      return A && (A.nodeType === N.DOCUMENT_NODE || A.nodeType === N.DOCUMENT_FRAGMENT_NODE || A.nodeType === N.ELEMENT_NODE);
    }
    function me(A) {
      return A && (Ce(A) || we(A) || De(A) || A.nodeType === N.DOCUMENT_FRAGMENT_NODE || A.nodeType === N.COMMENT_NODE || A.nodeType === N.PROCESSING_INSTRUCTION_NODE);
    }
    function De(A) {
      return A && A.nodeType === N.DOCUMENT_TYPE_NODE;
    }
    function Ce(A) {
      return A && A.nodeType === N.ELEMENT_NODE;
    }
    function we(A) {
      return A && A.nodeType === N.TEXT_NODE;
    }
    function D(A, S) {
      var j = A.childNodes || [];
      if (t(j, Ce) || De(S)) return false;
      var re = t(j, De);
      return !(S && re && j.indexOf(re) > j.indexOf(S));
    }
    function G(A, S) {
      var j = A.childNodes || [];
      function re(Ee) {
        return Ce(Ee) && Ee !== S;
      }
      if (t(j, re)) return false;
      var pe = t(j, De);
      return !(S && pe && j.indexOf(pe) > j.indexOf(S));
    }
    function Z(A, S, j) {
      if (!ge(A)) throw new T(C, "Unexpected parent node type " + A.nodeType);
      if (j && j.parentNode !== A) throw new T(R, "child not in parent");
      if (!me(S) || De(S) && A.nodeType !== N.DOCUMENT_NODE) throw new T(C, "Unexpected node type " + S.nodeType + " for parent node type " + A.nodeType);
    }
    function O(A, S, j) {
      var re = A.childNodes || [], pe = S.childNodes || [];
      if (S.nodeType === N.DOCUMENT_FRAGMENT_NODE) {
        var Ee = pe.filter(Ce);
        if (Ee.length > 1 || t(pe, we)) throw new T(C, "More than one element or text in fragment");
        if (Ee.length === 1 && !D(A, j)) throw new T(C, "Element in fragment can not be inserted before doctype");
      }
      if (Ce(S) && !D(A, j)) throw new T(C, "Only one element can be added and only after doctype");
      if (De(S)) {
        if (t(re, De)) throw new T(C, "Only one doctype is allowed");
        var Be = t(re, Ce);
        if (j && re.indexOf(Be) < re.indexOf(j)) throw new T(C, "Doctype can only be inserted before an element");
        if (!j && Be) throw new T(C, "Doctype can not be appended since element is present");
      }
    }
    function W(A, S, j) {
      var re = A.childNodes || [], pe = S.childNodes || [];
      if (S.nodeType === N.DOCUMENT_FRAGMENT_NODE) {
        var Ee = pe.filter(Ce);
        if (Ee.length > 1 || t(pe, we)) throw new T(C, "More than one element or text in fragment");
        if (Ee.length === 1 && !G(A, j)) throw new T(C, "Element in fragment can not be inserted before doctype");
      }
      if (Ce(S) && !G(A, j)) throw new T(C, "Only one element can be added and only after doctype");
      if (De(S)) {
        if (t(re, function(ct) {
          return De(ct) && ct !== j;
        })) throw new T(C, "Only one doctype is allowed");
        var Be = t(re, Ce);
        if (j && re.indexOf(Be) < re.indexOf(j)) throw new T(C, "Doctype can only be inserted before an element");
      }
    }
    function X(A, S, j, re) {
      Z(A, S, j), A.nodeType === N.DOCUMENT_NODE && (re || O)(A, S, j);
      var pe = S.parentNode;
      if (pe && pe.removeChild(S), S.nodeType === x) {
        var Ee = S.firstChild;
        if (Ee == null) return S;
        var Be = S.lastChild;
      } else Ee = Be = S;
      var $e = j ? j.previousSibling : A.lastChild;
      Ee.previousSibling = $e, Be.nextSibling = j, $e ? $e.nextSibling = Ee : A.firstChild = Ee, j == null ? A.lastChild = Be : j.previousSibling = Be;
      do
        Ee.parentNode = A;
      while (Ee !== Be && (Ee = Ee.nextSibling));
      return le(A.ownerDocument || A, A), S.nodeType == x && (S.firstChild = S.lastChild = null), S;
    }
    function ae(A, S) {
      return S.parentNode && S.parentNode.removeChild(S), S.parentNode = A, S.previousSibling = A.lastChild, S.nextSibling = null, S.previousSibling ? S.previousSibling.nextSibling = S : A.firstChild = S, A.lastChild = S, le(A.ownerDocument, A, S), S;
    }
    ee.prototype = {
      nodeName: "#document",
      nodeType: v,
      doctype: null,
      documentElement: null,
      _inc: 1,
      insertBefore: function(A, S) {
        if (A.nodeType == x) {
          for (var j = A.firstChild; j; ) {
            var re = j.nextSibling;
            this.insertBefore(j, S), j = re;
          }
          return A;
        }
        return X(this, A, S), A.ownerDocument = this, this.documentElement === null && A.nodeType === p && (this.documentElement = A), A;
      },
      removeChild: function(A) {
        return this.documentElement == A && (this.documentElement = null), fe(this, A);
      },
      replaceChild: function(A, S) {
        X(this, A, S, W), A.ownerDocument = this, S && this.removeChild(S), Ce(A) && (this.documentElement = A);
      },
      importNode: function(A, S) {
        return Ae(this, A, S);
      },
      getElementById: function(A) {
        var S = null;
        return M(this.documentElement, function(j) {
          if (j.nodeType == p && j.getAttribute("id") == A) return S = j, true;
        }), S;
      },
      getElementsByClassName: function(A) {
        var S = c(A);
        return new _(this, function(j) {
          var re = [];
          return S.length > 0 && M(j.documentElement, function(pe) {
            if (pe !== j && pe.nodeType === p) {
              var Ee = pe.getAttribute("class");
              if (Ee) {
                var Be = A === Ee;
                if (!Be) {
                  var $e = c(Ee);
                  Be = S.every(o($e));
                }
                Be && re.push(pe);
              }
            }
          }), re;
        });
      },
      createElement: function(A) {
        var S = new ne();
        S.ownerDocument = this, S.nodeName = A, S.tagName = A, S.localName = A, S.childNodes = new B();
        var j = S.attributes = new k();
        return j._ownerElement = S, S;
      },
      createDocumentFragment: function() {
        var A = new Q();
        return A.ownerDocument = this, A.childNodes = new B(), A;
      },
      createTextNode: function(A) {
        var S = new V();
        return S.ownerDocument = this, S.appendData(A), S;
      },
      createComment: function(A) {
        var S = new J();
        return S.ownerDocument = this, S.appendData(A), S;
      },
      createCDATASection: function(A) {
        var S = new ie();
        return S.ownerDocument = this, S.appendData(A), S;
      },
      createProcessingInstruction: function(A, S) {
        var j = new ce();
        return j.ownerDocument = this, j.tagName = j.nodeName = j.target = A, j.nodeValue = j.data = S, j;
      },
      createAttribute: function(A) {
        var S = new K();
        return S.ownerDocument = this, S.name = A, S.nodeName = A, S.localName = A, S.specified = true, S;
      },
      createEntityReference: function(A) {
        var S = new _e();
        return S.ownerDocument = this, S.nodeName = A, S;
      },
      createElementNS: function(A, S) {
        var j = new ne(), re = S.split(":"), pe = j.attributes = new k();
        return j.childNodes = new B(), j.ownerDocument = this, j.nodeName = S, j.tagName = S, j.namespaceURI = A, re.length == 2 ? (j.prefix = re[0], j.localName = re[1]) : j.localName = S, pe._ownerElement = j, j;
      },
      createAttributeNS: function(A, S) {
        var j = new K(), re = S.split(":");
        return j.ownerDocument = this, j.nodeName = S, j.name = S, j.namespaceURI = A, j.specified = true, re.length == 2 ? (j.prefix = re[0], j.localName = re[1]) : j.localName = S, j;
      }
    }, d(ee, N);
    function ne() {
      this._nsMap = {};
    }
    ne.prototype = {
      nodeType: p,
      hasAttribute: function(A) {
        return this.getAttributeNode(A) != null;
      },
      getAttribute: function(A) {
        var S = this.getAttributeNode(A);
        return S && S.value || "";
      },
      getAttributeNode: function(A) {
        return this.attributes.getNamedItem(A);
      },
      setAttribute: function(A, S) {
        var j = this.ownerDocument.createAttribute(A);
        j.value = j.nodeValue = "" + S, this.setAttributeNode(j);
      },
      removeAttribute: function(A) {
        var S = this.getAttributeNode(A);
        S && this.removeAttributeNode(S);
      },
      appendChild: function(A) {
        return A.nodeType === x ? this.insertBefore(A, null) : ae(this, A);
      },
      setAttributeNode: function(A) {
        return this.attributes.setNamedItem(A);
      },
      setAttributeNodeNS: function(A) {
        return this.attributes.setNamedItemNS(A);
      },
      removeAttributeNode: function(A) {
        return this.attributes.removeNamedItem(A.nodeName);
      },
      removeAttributeNS: function(A, S) {
        var j = this.getAttributeNodeNS(A, S);
        j && this.removeAttributeNode(j);
      },
      hasAttributeNS: function(A, S) {
        return this.getAttributeNodeNS(A, S) != null;
      },
      getAttributeNS: function(A, S) {
        var j = this.getAttributeNodeNS(A, S);
        return j && j.value || "";
      },
      setAttributeNS: function(A, S, j) {
        var re = this.ownerDocument.createAttributeNS(A, S);
        re.value = re.nodeValue = "" + j, this.setAttributeNode(re);
      },
      getAttributeNodeNS: function(A, S) {
        return this.attributes.getNamedItemNS(A, S);
      },
      getElementsByTagName: function(A) {
        return new _(this, function(S) {
          var j = [];
          return M(S, function(re) {
            re !== S && re.nodeType == p && (A === "*" || re.tagName == A) && j.push(re);
          }), j;
        });
      },
      getElementsByTagNameNS: function(A, S) {
        return new _(this, function(j) {
          var re = [];
          return M(j, function(pe) {
            pe !== j && pe.nodeType === p && (A === "*" || pe.namespaceURI === A) && (S === "*" || pe.localName == S) && re.push(pe);
          }), re;
        });
      }
    }, ee.prototype.getElementsByTagName = ne.prototype.getElementsByTagName, ee.prototype.getElementsByTagNameNS = ne.prototype.getElementsByTagNameNS, d(ne, N);
    function K() {
    }
    K.prototype.nodeType = g, d(K, N);
    function L() {
    }
    L.prototype = {
      data: "",
      substringData: function(A, S) {
        return this.data.substring(A, A + S);
      },
      appendData: function(A) {
        A = this.data + A, this.nodeValue = this.data = A, this.length = A.length;
      },
      insertData: function(A, S) {
        this.replaceData(A, 0, S);
      },
      appendChild: function(A) {
        throw new Error(F[C]);
      },
      deleteData: function(A, S) {
        this.replaceData(A, S, "");
      },
      replaceData: function(A, S, j) {
        var re = this.data.substring(0, A), pe = this.data.substring(A + S);
        j = re + j + pe, this.nodeValue = this.data = j, this.length = j.length;
      }
    }, d(L, N);
    function V() {
    }
    V.prototype = {
      nodeName: "#text",
      nodeType: m,
      splitText: function(A) {
        var S = this.data, j = S.substring(A);
        S = S.substring(0, A), this.data = this.nodeValue = S, this.length = S.length;
        var re = this.ownerDocument.createTextNode(j);
        return this.parentNode && this.parentNode.insertBefore(re, this.nextSibling), re;
      }
    }, d(V, L);
    function J() {
    }
    J.prototype = {
      nodeName: "#comment",
      nodeType: f
    }, d(J, L);
    function ie() {
    }
    ie.prototype = {
      nodeName: "#cdata-section",
      nodeType: y
    }, d(ie, L);
    function he() {
    }
    he.prototype.nodeType = w, d(he, N);
    function ye() {
    }
    ye.prototype.nodeType = U, d(ye, N);
    function Ue() {
    }
    Ue.prototype.nodeType = u, d(Ue, N);
    function _e() {
    }
    _e.prototype.nodeType = l, d(_e, N);
    function Q() {
    }
    Q.prototype.nodeName = "#document-fragment", Q.prototype.nodeType = x, d(Q, N);
    function ce() {
    }
    ce.prototype.nodeType = h, d(ce, N);
    function de() {
    }
    de.prototype.serializeToString = function(A, S, j) {
      return ue.call(A, S, j);
    }, N.prototype.toString = ue;
    function ue(A, S) {
      var j = [], re = this.nodeType == 9 && this.documentElement || this, pe = re.prefix, Ee = re.namespaceURI;
      if (Ee && pe == null) {
        var pe = re.lookupPrefix(Ee);
        if (pe == null) var Be = [
          {
            namespace: Ee,
            prefix: null
          }
        ];
      }
      return xe(this, j, A, S, Be), j.join("");
    }
    function be(A, S, j) {
      var re = A.prefix || "", pe = A.namespaceURI;
      if (!pe || re === "xml" && pe === n.XML || pe === n.XMLNS) return false;
      for (var Ee = j.length; Ee--; ) {
        var Be = j[Ee];
        if (Be.prefix === re) return Be.namespace !== pe;
      }
      return true;
    }
    function ve(A, S, j) {
      A.push(" ", S, '="', j.replace(/[<>&"\t\n\r]/g, $), '"');
    }
    function xe(A, S, j, re, pe) {
      if (pe || (pe = []), re) if (A = re(A), A) {
        if (typeof A == "string") {
          S.push(A);
          return;
        }
      } else return;
      switch (A.nodeType) {
        case p:
          var Ee = A.attributes, Be = Ee.length, Me = A.firstChild, $e = A.tagName;
          j = n.isHTML(A.namespaceURI) || j;
          var ct = $e;
          if (!j && !A.prefix && A.namespaceURI) {
            for (var mt, st = 0; st < Ee.length; st++) if (Ee.item(st).name === "xmlns") {
              mt = Ee.item(st).value;
              break;
            }
            if (!mt) for (var St = pe.length - 1; St >= 0; St--) {
              var kt = pe[St];
              if (kt.prefix === "" && kt.namespace === A.namespaceURI) {
                mt = kt.namespace;
                break;
              }
            }
            if (mt !== A.namespaceURI) for (var St = pe.length - 1; St >= 0; St--) {
              var kt = pe[St];
              if (kt.namespace === A.namespaceURI) {
                kt.prefix && (ct = kt.prefix + ":" + $e);
                break;
              }
            }
          }
          S.push("<", ct);
          for (var Bt = 0; Bt < Be; Bt++) {
            var at = Ee.item(Bt);
            at.prefix == "xmlns" ? pe.push({
              prefix: at.localName,
              namespace: at.value
            }) : at.nodeName == "xmlns" && pe.push({
              prefix: "",
              namespace: at.value
            });
          }
          for (var Bt = 0; Bt < Be; Bt++) {
            var at = Ee.item(Bt);
            if (be(at, j, pe)) {
              var Wt = at.prefix || "", rn = at.namespaceURI;
              ve(S, Wt ? "xmlns:" + Wt : "xmlns", rn), pe.push({
                prefix: Wt,
                namespace: rn
              });
            }
            xe(at, S, j, re, pe);
          }
          if ($e === ct && be(A, j, pe)) {
            var Wt = A.prefix || "", rn = A.namespaceURI;
            ve(S, Wt ? "xmlns:" + Wt : "xmlns", rn), pe.push({
              prefix: Wt,
              namespace: rn
            });
          }
          if (Me || j && !/^(?:meta|link|img|br|hr|input)$/i.test($e)) {
            if (S.push(">"), j && /^script$/i.test($e)) for (; Me; ) Me.data ? S.push(Me.data) : xe(Me, S, j, re, pe.slice()), Me = Me.nextSibling;
            else for (; Me; ) xe(Me, S, j, re, pe.slice()), Me = Me.nextSibling;
            S.push("</", ct, ">");
          } else S.push("/>");
          return;
        case v:
        case x:
          for (var Me = A.firstChild; Me; ) xe(Me, S, j, re, pe.slice()), Me = Me.nextSibling;
          return;
        case g:
          return ve(S, A.name, A.value);
        case m:
          return S.push(A.data.replace(/[<&>]/g, $));
        case y:
          return S.push("<![CDATA[", A.data, "]]>");
        case f:
          return S.push("<!--", A.data, "-->");
        case w:
          var fo = A.publicId, zt = A.systemId;
          if (S.push("<!DOCTYPE ", A.name), fo) S.push(" PUBLIC ", fo), zt && zt != "." && S.push(" ", zt), S.push(">");
          else if (zt && zt != ".") S.push(" SYSTEM ", zt, ">");
          else {
            var ho = A.internalSubset;
            ho && S.push(" [", ho, "]"), S.push(">");
          }
          return;
        case h:
          return S.push("<?", A.target, " ", A.data, "?>");
        case l:
          return S.push("&", A.nodeName, ";");
        default:
          S.push("??", A.nodeName);
      }
    }
    function Ae(A, S, j) {
      var re;
      switch (S.nodeType) {
        case p:
          re = S.cloneNode(false), re.ownerDocument = A;
        case x:
          break;
        case g:
          j = true;
          break;
      }
      if (re || (re = S.cloneNode(false)), re.ownerDocument = A, re.parentNode = null, j) for (var pe = S.firstChild; pe; ) re.appendChild(Ae(A, pe, j)), pe = pe.nextSibling;
      return re;
    }
    function We(A, S, j) {
      var re = new S.constructor();
      for (var pe in S) if (Object.prototype.hasOwnProperty.call(S, pe)) {
        var Ee = S[pe];
        typeof Ee != "object" && Ee != re[pe] && (re[pe] = Ee);
      }
      switch (S.childNodes && (re.childNodes = new B()), re.ownerDocument = A, re.nodeType) {
        case p:
          var Be = S.attributes, $e = re.attributes = new k(), ct = Be.length;
          $e._ownerElement = re;
          for (var mt = 0; mt < ct; mt++) re.setAttributeNode(We(A, Be.item(mt), true));
          break;
        case g:
          j = true;
      }
      if (j) for (var st = S.firstChild; st; ) re.appendChild(We(A, st, j)), st = st.nextSibling;
      return re;
    }
    function Ye(A, S, j) {
      A[S] = j;
    }
    try {
      if (Object.defineProperty) {
        let A = function(S) {
          switch (S.nodeType) {
            case p:
            case x:
              var j = [];
              for (S = S.firstChild; S; ) S.nodeType !== 7 && S.nodeType !== 8 && j.push(A(S)), S = S.nextSibling;
              return j.join("");
            default:
              return S.nodeValue;
          }
        };
        Object.defineProperty(_.prototype, "length", {
          get: function() {
            return P(this), this.$$length;
          }
        }), Object.defineProperty(N.prototype, "textContent", {
          get: function() {
            return A(this);
          },
          set: function(S) {
            switch (this.nodeType) {
              case p:
              case x:
                for (; this.firstChild; ) this.removeChild(this.firstChild);
                (S || String(S)) && this.appendChild(this.ownerDocument.createTextNode(S));
                break;
              default:
                this.data = S, this.value = S, this.nodeValue = S;
            }
          }
        }), Ye = function(S, j, re) {
          S["$$" + j] = re;
        };
      }
    } catch {
    }
    return ut.DocumentType = he, ut.DOMException = T, ut.DOMImplementation = Y, ut.Element = ne, ut.Node = N, ut.NodeList = B, ut.XMLSerializer = de, ut;
  }
  var un = {}, Li = {}, Ac;
  function Ap() {
    return Ac || (Ac = 1, function(e) {
      var t = Wr().freeze;
      e.XML_ENTITIES = t({
        amp: "&",
        apos: "'",
        gt: ">",
        lt: "<",
        quot: '"'
      }), e.HTML_ENTITIES = t({
        Aacute: "\xC1",
        aacute: "\xE1",
        Abreve: "\u0102",
        abreve: "\u0103",
        ac: "\u223E",
        acd: "\u223F",
        acE: "\u223E\u0333",
        Acirc: "\xC2",
        acirc: "\xE2",
        acute: "\xB4",
        Acy: "\u0410",
        acy: "\u0430",
        AElig: "\xC6",
        aelig: "\xE6",
        af: "\u2061",
        Afr: "\u{1D504}",
        afr: "\u{1D51E}",
        Agrave: "\xC0",
        agrave: "\xE0",
        alefsym: "\u2135",
        aleph: "\u2135",
        Alpha: "\u0391",
        alpha: "\u03B1",
        Amacr: "\u0100",
        amacr: "\u0101",
        amalg: "\u2A3F",
        AMP: "&",
        amp: "&",
        And: "\u2A53",
        and: "\u2227",
        andand: "\u2A55",
        andd: "\u2A5C",
        andslope: "\u2A58",
        andv: "\u2A5A",
        ang: "\u2220",
        ange: "\u29A4",
        angle: "\u2220",
        angmsd: "\u2221",
        angmsdaa: "\u29A8",
        angmsdab: "\u29A9",
        angmsdac: "\u29AA",
        angmsdad: "\u29AB",
        angmsdae: "\u29AC",
        angmsdaf: "\u29AD",
        angmsdag: "\u29AE",
        angmsdah: "\u29AF",
        angrt: "\u221F",
        angrtvb: "\u22BE",
        angrtvbd: "\u299D",
        angsph: "\u2222",
        angst: "\xC5",
        angzarr: "\u237C",
        Aogon: "\u0104",
        aogon: "\u0105",
        Aopf: "\u{1D538}",
        aopf: "\u{1D552}",
        ap: "\u2248",
        apacir: "\u2A6F",
        apE: "\u2A70",
        ape: "\u224A",
        apid: "\u224B",
        apos: "'",
        ApplyFunction: "\u2061",
        approx: "\u2248",
        approxeq: "\u224A",
        Aring: "\xC5",
        aring: "\xE5",
        Ascr: "\u{1D49C}",
        ascr: "\u{1D4B6}",
        Assign: "\u2254",
        ast: "*",
        asymp: "\u2248",
        asympeq: "\u224D",
        Atilde: "\xC3",
        atilde: "\xE3",
        Auml: "\xC4",
        auml: "\xE4",
        awconint: "\u2233",
        awint: "\u2A11",
        backcong: "\u224C",
        backepsilon: "\u03F6",
        backprime: "\u2035",
        backsim: "\u223D",
        backsimeq: "\u22CD",
        Backslash: "\u2216",
        Barv: "\u2AE7",
        barvee: "\u22BD",
        Barwed: "\u2306",
        barwed: "\u2305",
        barwedge: "\u2305",
        bbrk: "\u23B5",
        bbrktbrk: "\u23B6",
        bcong: "\u224C",
        Bcy: "\u0411",
        bcy: "\u0431",
        bdquo: "\u201E",
        becaus: "\u2235",
        Because: "\u2235",
        because: "\u2235",
        bemptyv: "\u29B0",
        bepsi: "\u03F6",
        bernou: "\u212C",
        Bernoullis: "\u212C",
        Beta: "\u0392",
        beta: "\u03B2",
        beth: "\u2136",
        between: "\u226C",
        Bfr: "\u{1D505}",
        bfr: "\u{1D51F}",
        bigcap: "\u22C2",
        bigcirc: "\u25EF",
        bigcup: "\u22C3",
        bigodot: "\u2A00",
        bigoplus: "\u2A01",
        bigotimes: "\u2A02",
        bigsqcup: "\u2A06",
        bigstar: "\u2605",
        bigtriangledown: "\u25BD",
        bigtriangleup: "\u25B3",
        biguplus: "\u2A04",
        bigvee: "\u22C1",
        bigwedge: "\u22C0",
        bkarow: "\u290D",
        blacklozenge: "\u29EB",
        blacksquare: "\u25AA",
        blacktriangle: "\u25B4",
        blacktriangledown: "\u25BE",
        blacktriangleleft: "\u25C2",
        blacktriangleright: "\u25B8",
        blank: "\u2423",
        blk12: "\u2592",
        blk14: "\u2591",
        blk34: "\u2593",
        block: "\u2588",
        bne: "=\u20E5",
        bnequiv: "\u2261\u20E5",
        bNot: "\u2AED",
        bnot: "\u2310",
        Bopf: "\u{1D539}",
        bopf: "\u{1D553}",
        bot: "\u22A5",
        bottom: "\u22A5",
        bowtie: "\u22C8",
        boxbox: "\u29C9",
        boxDL: "\u2557",
        boxDl: "\u2556",
        boxdL: "\u2555",
        boxdl: "\u2510",
        boxDR: "\u2554",
        boxDr: "\u2553",
        boxdR: "\u2552",
        boxdr: "\u250C",
        boxH: "\u2550",
        boxh: "\u2500",
        boxHD: "\u2566",
        boxHd: "\u2564",
        boxhD: "\u2565",
        boxhd: "\u252C",
        boxHU: "\u2569",
        boxHu: "\u2567",
        boxhU: "\u2568",
        boxhu: "\u2534",
        boxminus: "\u229F",
        boxplus: "\u229E",
        boxtimes: "\u22A0",
        boxUL: "\u255D",
        boxUl: "\u255C",
        boxuL: "\u255B",
        boxul: "\u2518",
        boxUR: "\u255A",
        boxUr: "\u2559",
        boxuR: "\u2558",
        boxur: "\u2514",
        boxV: "\u2551",
        boxv: "\u2502",
        boxVH: "\u256C",
        boxVh: "\u256B",
        boxvH: "\u256A",
        boxvh: "\u253C",
        boxVL: "\u2563",
        boxVl: "\u2562",
        boxvL: "\u2561",
        boxvl: "\u2524",
        boxVR: "\u2560",
        boxVr: "\u255F",
        boxvR: "\u255E",
        boxvr: "\u251C",
        bprime: "\u2035",
        Breve: "\u02D8",
        breve: "\u02D8",
        brvbar: "\xA6",
        Bscr: "\u212C",
        bscr: "\u{1D4B7}",
        bsemi: "\u204F",
        bsim: "\u223D",
        bsime: "\u22CD",
        bsol: "\\",
        bsolb: "\u29C5",
        bsolhsub: "\u27C8",
        bull: "\u2022",
        bullet: "\u2022",
        bump: "\u224E",
        bumpE: "\u2AAE",
        bumpe: "\u224F",
        Bumpeq: "\u224E",
        bumpeq: "\u224F",
        Cacute: "\u0106",
        cacute: "\u0107",
        Cap: "\u22D2",
        cap: "\u2229",
        capand: "\u2A44",
        capbrcup: "\u2A49",
        capcap: "\u2A4B",
        capcup: "\u2A47",
        capdot: "\u2A40",
        CapitalDifferentialD: "\u2145",
        caps: "\u2229\uFE00",
        caret: "\u2041",
        caron: "\u02C7",
        Cayleys: "\u212D",
        ccaps: "\u2A4D",
        Ccaron: "\u010C",
        ccaron: "\u010D",
        Ccedil: "\xC7",
        ccedil: "\xE7",
        Ccirc: "\u0108",
        ccirc: "\u0109",
        Cconint: "\u2230",
        ccups: "\u2A4C",
        ccupssm: "\u2A50",
        Cdot: "\u010A",
        cdot: "\u010B",
        cedil: "\xB8",
        Cedilla: "\xB8",
        cemptyv: "\u29B2",
        cent: "\xA2",
        CenterDot: "\xB7",
        centerdot: "\xB7",
        Cfr: "\u212D",
        cfr: "\u{1D520}",
        CHcy: "\u0427",
        chcy: "\u0447",
        check: "\u2713",
        checkmark: "\u2713",
        Chi: "\u03A7",
        chi: "\u03C7",
        cir: "\u25CB",
        circ: "\u02C6",
        circeq: "\u2257",
        circlearrowleft: "\u21BA",
        circlearrowright: "\u21BB",
        circledast: "\u229B",
        circledcirc: "\u229A",
        circleddash: "\u229D",
        CircleDot: "\u2299",
        circledR: "\xAE",
        circledS: "\u24C8",
        CircleMinus: "\u2296",
        CirclePlus: "\u2295",
        CircleTimes: "\u2297",
        cirE: "\u29C3",
        cire: "\u2257",
        cirfnint: "\u2A10",
        cirmid: "\u2AEF",
        cirscir: "\u29C2",
        ClockwiseContourIntegral: "\u2232",
        CloseCurlyDoubleQuote: "\u201D",
        CloseCurlyQuote: "\u2019",
        clubs: "\u2663",
        clubsuit: "\u2663",
        Colon: "\u2237",
        colon: ":",
        Colone: "\u2A74",
        colone: "\u2254",
        coloneq: "\u2254",
        comma: ",",
        commat: "@",
        comp: "\u2201",
        compfn: "\u2218",
        complement: "\u2201",
        complexes: "\u2102",
        cong: "\u2245",
        congdot: "\u2A6D",
        Congruent: "\u2261",
        Conint: "\u222F",
        conint: "\u222E",
        ContourIntegral: "\u222E",
        Copf: "\u2102",
        copf: "\u{1D554}",
        coprod: "\u2210",
        Coproduct: "\u2210",
        COPY: "\xA9",
        copy: "\xA9",
        copysr: "\u2117",
        CounterClockwiseContourIntegral: "\u2233",
        crarr: "\u21B5",
        Cross: "\u2A2F",
        cross: "\u2717",
        Cscr: "\u{1D49E}",
        cscr: "\u{1D4B8}",
        csub: "\u2ACF",
        csube: "\u2AD1",
        csup: "\u2AD0",
        csupe: "\u2AD2",
        ctdot: "\u22EF",
        cudarrl: "\u2938",
        cudarrr: "\u2935",
        cuepr: "\u22DE",
        cuesc: "\u22DF",
        cularr: "\u21B6",
        cularrp: "\u293D",
        Cup: "\u22D3",
        cup: "\u222A",
        cupbrcap: "\u2A48",
        CupCap: "\u224D",
        cupcap: "\u2A46",
        cupcup: "\u2A4A",
        cupdot: "\u228D",
        cupor: "\u2A45",
        cups: "\u222A\uFE00",
        curarr: "\u21B7",
        curarrm: "\u293C",
        curlyeqprec: "\u22DE",
        curlyeqsucc: "\u22DF",
        curlyvee: "\u22CE",
        curlywedge: "\u22CF",
        curren: "\xA4",
        curvearrowleft: "\u21B6",
        curvearrowright: "\u21B7",
        cuvee: "\u22CE",
        cuwed: "\u22CF",
        cwconint: "\u2232",
        cwint: "\u2231",
        cylcty: "\u232D",
        Dagger: "\u2021",
        dagger: "\u2020",
        daleth: "\u2138",
        Darr: "\u21A1",
        dArr: "\u21D3",
        darr: "\u2193",
        dash: "\u2010",
        Dashv: "\u2AE4",
        dashv: "\u22A3",
        dbkarow: "\u290F",
        dblac: "\u02DD",
        Dcaron: "\u010E",
        dcaron: "\u010F",
        Dcy: "\u0414",
        dcy: "\u0434",
        DD: "\u2145",
        dd: "\u2146",
        ddagger: "\u2021",
        ddarr: "\u21CA",
        DDotrahd: "\u2911",
        ddotseq: "\u2A77",
        deg: "\xB0",
        Del: "\u2207",
        Delta: "\u0394",
        delta: "\u03B4",
        demptyv: "\u29B1",
        dfisht: "\u297F",
        Dfr: "\u{1D507}",
        dfr: "\u{1D521}",
        dHar: "\u2965",
        dharl: "\u21C3",
        dharr: "\u21C2",
        DiacriticalAcute: "\xB4",
        DiacriticalDot: "\u02D9",
        DiacriticalDoubleAcute: "\u02DD",
        DiacriticalGrave: "`",
        DiacriticalTilde: "\u02DC",
        diam: "\u22C4",
        Diamond: "\u22C4",
        diamond: "\u22C4",
        diamondsuit: "\u2666",
        diams: "\u2666",
        die: "\xA8",
        DifferentialD: "\u2146",
        digamma: "\u03DD",
        disin: "\u22F2",
        div: "\xF7",
        divide: "\xF7",
        divideontimes: "\u22C7",
        divonx: "\u22C7",
        DJcy: "\u0402",
        djcy: "\u0452",
        dlcorn: "\u231E",
        dlcrop: "\u230D",
        dollar: "$",
        Dopf: "\u{1D53B}",
        dopf: "\u{1D555}",
        Dot: "\xA8",
        dot: "\u02D9",
        DotDot: "\u20DC",
        doteq: "\u2250",
        doteqdot: "\u2251",
        DotEqual: "\u2250",
        dotminus: "\u2238",
        dotplus: "\u2214",
        dotsquare: "\u22A1",
        doublebarwedge: "\u2306",
        DoubleContourIntegral: "\u222F",
        DoubleDot: "\xA8",
        DoubleDownArrow: "\u21D3",
        DoubleLeftArrow: "\u21D0",
        DoubleLeftRightArrow: "\u21D4",
        DoubleLeftTee: "\u2AE4",
        DoubleLongLeftArrow: "\u27F8",
        DoubleLongLeftRightArrow: "\u27FA",
        DoubleLongRightArrow: "\u27F9",
        DoubleRightArrow: "\u21D2",
        DoubleRightTee: "\u22A8",
        DoubleUpArrow: "\u21D1",
        DoubleUpDownArrow: "\u21D5",
        DoubleVerticalBar: "\u2225",
        DownArrow: "\u2193",
        Downarrow: "\u21D3",
        downarrow: "\u2193",
        DownArrowBar: "\u2913",
        DownArrowUpArrow: "\u21F5",
        DownBreve: "\u0311",
        downdownarrows: "\u21CA",
        downharpoonleft: "\u21C3",
        downharpoonright: "\u21C2",
        DownLeftRightVector: "\u2950",
        DownLeftTeeVector: "\u295E",
        DownLeftVector: "\u21BD",
        DownLeftVectorBar: "\u2956",
        DownRightTeeVector: "\u295F",
        DownRightVector: "\u21C1",
        DownRightVectorBar: "\u2957",
        DownTee: "\u22A4",
        DownTeeArrow: "\u21A7",
        drbkarow: "\u2910",
        drcorn: "\u231F",
        drcrop: "\u230C",
        Dscr: "\u{1D49F}",
        dscr: "\u{1D4B9}",
        DScy: "\u0405",
        dscy: "\u0455",
        dsol: "\u29F6",
        Dstrok: "\u0110",
        dstrok: "\u0111",
        dtdot: "\u22F1",
        dtri: "\u25BF",
        dtrif: "\u25BE",
        duarr: "\u21F5",
        duhar: "\u296F",
        dwangle: "\u29A6",
        DZcy: "\u040F",
        dzcy: "\u045F",
        dzigrarr: "\u27FF",
        Eacute: "\xC9",
        eacute: "\xE9",
        easter: "\u2A6E",
        Ecaron: "\u011A",
        ecaron: "\u011B",
        ecir: "\u2256",
        Ecirc: "\xCA",
        ecirc: "\xEA",
        ecolon: "\u2255",
        Ecy: "\u042D",
        ecy: "\u044D",
        eDDot: "\u2A77",
        Edot: "\u0116",
        eDot: "\u2251",
        edot: "\u0117",
        ee: "\u2147",
        efDot: "\u2252",
        Efr: "\u{1D508}",
        efr: "\u{1D522}",
        eg: "\u2A9A",
        Egrave: "\xC8",
        egrave: "\xE8",
        egs: "\u2A96",
        egsdot: "\u2A98",
        el: "\u2A99",
        Element: "\u2208",
        elinters: "\u23E7",
        ell: "\u2113",
        els: "\u2A95",
        elsdot: "\u2A97",
        Emacr: "\u0112",
        emacr: "\u0113",
        empty: "\u2205",
        emptyset: "\u2205",
        EmptySmallSquare: "\u25FB",
        emptyv: "\u2205",
        EmptyVerySmallSquare: "\u25AB",
        emsp: "\u2003",
        emsp13: "\u2004",
        emsp14: "\u2005",
        ENG: "\u014A",
        eng: "\u014B",
        ensp: "\u2002",
        Eogon: "\u0118",
        eogon: "\u0119",
        Eopf: "\u{1D53C}",
        eopf: "\u{1D556}",
        epar: "\u22D5",
        eparsl: "\u29E3",
        eplus: "\u2A71",
        epsi: "\u03B5",
        Epsilon: "\u0395",
        epsilon: "\u03B5",
        epsiv: "\u03F5",
        eqcirc: "\u2256",
        eqcolon: "\u2255",
        eqsim: "\u2242",
        eqslantgtr: "\u2A96",
        eqslantless: "\u2A95",
        Equal: "\u2A75",
        equals: "=",
        EqualTilde: "\u2242",
        equest: "\u225F",
        Equilibrium: "\u21CC",
        equiv: "\u2261",
        equivDD: "\u2A78",
        eqvparsl: "\u29E5",
        erarr: "\u2971",
        erDot: "\u2253",
        Escr: "\u2130",
        escr: "\u212F",
        esdot: "\u2250",
        Esim: "\u2A73",
        esim: "\u2242",
        Eta: "\u0397",
        eta: "\u03B7",
        ETH: "\xD0",
        eth: "\xF0",
        Euml: "\xCB",
        euml: "\xEB",
        euro: "\u20AC",
        excl: "!",
        exist: "\u2203",
        Exists: "\u2203",
        expectation: "\u2130",
        ExponentialE: "\u2147",
        exponentiale: "\u2147",
        fallingdotseq: "\u2252",
        Fcy: "\u0424",
        fcy: "\u0444",
        female: "\u2640",
        ffilig: "\uFB03",
        fflig: "\uFB00",
        ffllig: "\uFB04",
        Ffr: "\u{1D509}",
        ffr: "\u{1D523}",
        filig: "\uFB01",
        FilledSmallSquare: "\u25FC",
        FilledVerySmallSquare: "\u25AA",
        fjlig: "fj",
        flat: "\u266D",
        fllig: "\uFB02",
        fltns: "\u25B1",
        fnof: "\u0192",
        Fopf: "\u{1D53D}",
        fopf: "\u{1D557}",
        ForAll: "\u2200",
        forall: "\u2200",
        fork: "\u22D4",
        forkv: "\u2AD9",
        Fouriertrf: "\u2131",
        fpartint: "\u2A0D",
        frac12: "\xBD",
        frac13: "\u2153",
        frac14: "\xBC",
        frac15: "\u2155",
        frac16: "\u2159",
        frac18: "\u215B",
        frac23: "\u2154",
        frac25: "\u2156",
        frac34: "\xBE",
        frac35: "\u2157",
        frac38: "\u215C",
        frac45: "\u2158",
        frac56: "\u215A",
        frac58: "\u215D",
        frac78: "\u215E",
        frasl: "\u2044",
        frown: "\u2322",
        Fscr: "\u2131",
        fscr: "\u{1D4BB}",
        gacute: "\u01F5",
        Gamma: "\u0393",
        gamma: "\u03B3",
        Gammad: "\u03DC",
        gammad: "\u03DD",
        gap: "\u2A86",
        Gbreve: "\u011E",
        gbreve: "\u011F",
        Gcedil: "\u0122",
        Gcirc: "\u011C",
        gcirc: "\u011D",
        Gcy: "\u0413",
        gcy: "\u0433",
        Gdot: "\u0120",
        gdot: "\u0121",
        gE: "\u2267",
        ge: "\u2265",
        gEl: "\u2A8C",
        gel: "\u22DB",
        geq: "\u2265",
        geqq: "\u2267",
        geqslant: "\u2A7E",
        ges: "\u2A7E",
        gescc: "\u2AA9",
        gesdot: "\u2A80",
        gesdoto: "\u2A82",
        gesdotol: "\u2A84",
        gesl: "\u22DB\uFE00",
        gesles: "\u2A94",
        Gfr: "\u{1D50A}",
        gfr: "\u{1D524}",
        Gg: "\u22D9",
        gg: "\u226B",
        ggg: "\u22D9",
        gimel: "\u2137",
        GJcy: "\u0403",
        gjcy: "\u0453",
        gl: "\u2277",
        gla: "\u2AA5",
        glE: "\u2A92",
        glj: "\u2AA4",
        gnap: "\u2A8A",
        gnapprox: "\u2A8A",
        gnE: "\u2269",
        gne: "\u2A88",
        gneq: "\u2A88",
        gneqq: "\u2269",
        gnsim: "\u22E7",
        Gopf: "\u{1D53E}",
        gopf: "\u{1D558}",
        grave: "`",
        GreaterEqual: "\u2265",
        GreaterEqualLess: "\u22DB",
        GreaterFullEqual: "\u2267",
        GreaterGreater: "\u2AA2",
        GreaterLess: "\u2277",
        GreaterSlantEqual: "\u2A7E",
        GreaterTilde: "\u2273",
        Gscr: "\u{1D4A2}",
        gscr: "\u210A",
        gsim: "\u2273",
        gsime: "\u2A8E",
        gsiml: "\u2A90",
        Gt: "\u226B",
        GT: ">",
        gt: ">",
        gtcc: "\u2AA7",
        gtcir: "\u2A7A",
        gtdot: "\u22D7",
        gtlPar: "\u2995",
        gtquest: "\u2A7C",
        gtrapprox: "\u2A86",
        gtrarr: "\u2978",
        gtrdot: "\u22D7",
        gtreqless: "\u22DB",
        gtreqqless: "\u2A8C",
        gtrless: "\u2277",
        gtrsim: "\u2273",
        gvertneqq: "\u2269\uFE00",
        gvnE: "\u2269\uFE00",
        Hacek: "\u02C7",
        hairsp: "\u200A",
        half: "\xBD",
        hamilt: "\u210B",
        HARDcy: "\u042A",
        hardcy: "\u044A",
        hArr: "\u21D4",
        harr: "\u2194",
        harrcir: "\u2948",
        harrw: "\u21AD",
        Hat: "^",
        hbar: "\u210F",
        Hcirc: "\u0124",
        hcirc: "\u0125",
        hearts: "\u2665",
        heartsuit: "\u2665",
        hellip: "\u2026",
        hercon: "\u22B9",
        Hfr: "\u210C",
        hfr: "\u{1D525}",
        HilbertSpace: "\u210B",
        hksearow: "\u2925",
        hkswarow: "\u2926",
        hoarr: "\u21FF",
        homtht: "\u223B",
        hookleftarrow: "\u21A9",
        hookrightarrow: "\u21AA",
        Hopf: "\u210D",
        hopf: "\u{1D559}",
        horbar: "\u2015",
        HorizontalLine: "\u2500",
        Hscr: "\u210B",
        hscr: "\u{1D4BD}",
        hslash: "\u210F",
        Hstrok: "\u0126",
        hstrok: "\u0127",
        HumpDownHump: "\u224E",
        HumpEqual: "\u224F",
        hybull: "\u2043",
        hyphen: "\u2010",
        Iacute: "\xCD",
        iacute: "\xED",
        ic: "\u2063",
        Icirc: "\xCE",
        icirc: "\xEE",
        Icy: "\u0418",
        icy: "\u0438",
        Idot: "\u0130",
        IEcy: "\u0415",
        iecy: "\u0435",
        iexcl: "\xA1",
        iff: "\u21D4",
        Ifr: "\u2111",
        ifr: "\u{1D526}",
        Igrave: "\xCC",
        igrave: "\xEC",
        ii: "\u2148",
        iiiint: "\u2A0C",
        iiint: "\u222D",
        iinfin: "\u29DC",
        iiota: "\u2129",
        IJlig: "\u0132",
        ijlig: "\u0133",
        Im: "\u2111",
        Imacr: "\u012A",
        imacr: "\u012B",
        image: "\u2111",
        ImaginaryI: "\u2148",
        imagline: "\u2110",
        imagpart: "\u2111",
        imath: "\u0131",
        imof: "\u22B7",
        imped: "\u01B5",
        Implies: "\u21D2",
        in: "\u2208",
        incare: "\u2105",
        infin: "\u221E",
        infintie: "\u29DD",
        inodot: "\u0131",
        Int: "\u222C",
        int: "\u222B",
        intcal: "\u22BA",
        integers: "\u2124",
        Integral: "\u222B",
        intercal: "\u22BA",
        Intersection: "\u22C2",
        intlarhk: "\u2A17",
        intprod: "\u2A3C",
        InvisibleComma: "\u2063",
        InvisibleTimes: "\u2062",
        IOcy: "\u0401",
        iocy: "\u0451",
        Iogon: "\u012E",
        iogon: "\u012F",
        Iopf: "\u{1D540}",
        iopf: "\u{1D55A}",
        Iota: "\u0399",
        iota: "\u03B9",
        iprod: "\u2A3C",
        iquest: "\xBF",
        Iscr: "\u2110",
        iscr: "\u{1D4BE}",
        isin: "\u2208",
        isindot: "\u22F5",
        isinE: "\u22F9",
        isins: "\u22F4",
        isinsv: "\u22F3",
        isinv: "\u2208",
        it: "\u2062",
        Itilde: "\u0128",
        itilde: "\u0129",
        Iukcy: "\u0406",
        iukcy: "\u0456",
        Iuml: "\xCF",
        iuml: "\xEF",
        Jcirc: "\u0134",
        jcirc: "\u0135",
        Jcy: "\u0419",
        jcy: "\u0439",
        Jfr: "\u{1D50D}",
        jfr: "\u{1D527}",
        jmath: "\u0237",
        Jopf: "\u{1D541}",
        jopf: "\u{1D55B}",
        Jscr: "\u{1D4A5}",
        jscr: "\u{1D4BF}",
        Jsercy: "\u0408",
        jsercy: "\u0458",
        Jukcy: "\u0404",
        jukcy: "\u0454",
        Kappa: "\u039A",
        kappa: "\u03BA",
        kappav: "\u03F0",
        Kcedil: "\u0136",
        kcedil: "\u0137",
        Kcy: "\u041A",
        kcy: "\u043A",
        Kfr: "\u{1D50E}",
        kfr: "\u{1D528}",
        kgreen: "\u0138",
        KHcy: "\u0425",
        khcy: "\u0445",
        KJcy: "\u040C",
        kjcy: "\u045C",
        Kopf: "\u{1D542}",
        kopf: "\u{1D55C}",
        Kscr: "\u{1D4A6}",
        kscr: "\u{1D4C0}",
        lAarr: "\u21DA",
        Lacute: "\u0139",
        lacute: "\u013A",
        laemptyv: "\u29B4",
        lagran: "\u2112",
        Lambda: "\u039B",
        lambda: "\u03BB",
        Lang: "\u27EA",
        lang: "\u27E8",
        langd: "\u2991",
        langle: "\u27E8",
        lap: "\u2A85",
        Laplacetrf: "\u2112",
        laquo: "\xAB",
        Larr: "\u219E",
        lArr: "\u21D0",
        larr: "\u2190",
        larrb: "\u21E4",
        larrbfs: "\u291F",
        larrfs: "\u291D",
        larrhk: "\u21A9",
        larrlp: "\u21AB",
        larrpl: "\u2939",
        larrsim: "\u2973",
        larrtl: "\u21A2",
        lat: "\u2AAB",
        lAtail: "\u291B",
        latail: "\u2919",
        late: "\u2AAD",
        lates: "\u2AAD\uFE00",
        lBarr: "\u290E",
        lbarr: "\u290C",
        lbbrk: "\u2772",
        lbrace: "{",
        lbrack: "[",
        lbrke: "\u298B",
        lbrksld: "\u298F",
        lbrkslu: "\u298D",
        Lcaron: "\u013D",
        lcaron: "\u013E",
        Lcedil: "\u013B",
        lcedil: "\u013C",
        lceil: "\u2308",
        lcub: "{",
        Lcy: "\u041B",
        lcy: "\u043B",
        ldca: "\u2936",
        ldquo: "\u201C",
        ldquor: "\u201E",
        ldrdhar: "\u2967",
        ldrushar: "\u294B",
        ldsh: "\u21B2",
        lE: "\u2266",
        le: "\u2264",
        LeftAngleBracket: "\u27E8",
        LeftArrow: "\u2190",
        Leftarrow: "\u21D0",
        leftarrow: "\u2190",
        LeftArrowBar: "\u21E4",
        LeftArrowRightArrow: "\u21C6",
        leftarrowtail: "\u21A2",
        LeftCeiling: "\u2308",
        LeftDoubleBracket: "\u27E6",
        LeftDownTeeVector: "\u2961",
        LeftDownVector: "\u21C3",
        LeftDownVectorBar: "\u2959",
        LeftFloor: "\u230A",
        leftharpoondown: "\u21BD",
        leftharpoonup: "\u21BC",
        leftleftarrows: "\u21C7",
        LeftRightArrow: "\u2194",
        Leftrightarrow: "\u21D4",
        leftrightarrow: "\u2194",
        leftrightarrows: "\u21C6",
        leftrightharpoons: "\u21CB",
        leftrightsquigarrow: "\u21AD",
        LeftRightVector: "\u294E",
        LeftTee: "\u22A3",
        LeftTeeArrow: "\u21A4",
        LeftTeeVector: "\u295A",
        leftthreetimes: "\u22CB",
        LeftTriangle: "\u22B2",
        LeftTriangleBar: "\u29CF",
        LeftTriangleEqual: "\u22B4",
        LeftUpDownVector: "\u2951",
        LeftUpTeeVector: "\u2960",
        LeftUpVector: "\u21BF",
        LeftUpVectorBar: "\u2958",
        LeftVector: "\u21BC",
        LeftVectorBar: "\u2952",
        lEg: "\u2A8B",
        leg: "\u22DA",
        leq: "\u2264",
        leqq: "\u2266",
        leqslant: "\u2A7D",
        les: "\u2A7D",
        lescc: "\u2AA8",
        lesdot: "\u2A7F",
        lesdoto: "\u2A81",
        lesdotor: "\u2A83",
        lesg: "\u22DA\uFE00",
        lesges: "\u2A93",
        lessapprox: "\u2A85",
        lessdot: "\u22D6",
        lesseqgtr: "\u22DA",
        lesseqqgtr: "\u2A8B",
        LessEqualGreater: "\u22DA",
        LessFullEqual: "\u2266",
        LessGreater: "\u2276",
        lessgtr: "\u2276",
        LessLess: "\u2AA1",
        lesssim: "\u2272",
        LessSlantEqual: "\u2A7D",
        LessTilde: "\u2272",
        lfisht: "\u297C",
        lfloor: "\u230A",
        Lfr: "\u{1D50F}",
        lfr: "\u{1D529}",
        lg: "\u2276",
        lgE: "\u2A91",
        lHar: "\u2962",
        lhard: "\u21BD",
        lharu: "\u21BC",
        lharul: "\u296A",
        lhblk: "\u2584",
        LJcy: "\u0409",
        ljcy: "\u0459",
        Ll: "\u22D8",
        ll: "\u226A",
        llarr: "\u21C7",
        llcorner: "\u231E",
        Lleftarrow: "\u21DA",
        llhard: "\u296B",
        lltri: "\u25FA",
        Lmidot: "\u013F",
        lmidot: "\u0140",
        lmoust: "\u23B0",
        lmoustache: "\u23B0",
        lnap: "\u2A89",
        lnapprox: "\u2A89",
        lnE: "\u2268",
        lne: "\u2A87",
        lneq: "\u2A87",
        lneqq: "\u2268",
        lnsim: "\u22E6",
        loang: "\u27EC",
        loarr: "\u21FD",
        lobrk: "\u27E6",
        LongLeftArrow: "\u27F5",
        Longleftarrow: "\u27F8",
        longleftarrow: "\u27F5",
        LongLeftRightArrow: "\u27F7",
        Longleftrightarrow: "\u27FA",
        longleftrightarrow: "\u27F7",
        longmapsto: "\u27FC",
        LongRightArrow: "\u27F6",
        Longrightarrow: "\u27F9",
        longrightarrow: "\u27F6",
        looparrowleft: "\u21AB",
        looparrowright: "\u21AC",
        lopar: "\u2985",
        Lopf: "\u{1D543}",
        lopf: "\u{1D55D}",
        loplus: "\u2A2D",
        lotimes: "\u2A34",
        lowast: "\u2217",
        lowbar: "_",
        LowerLeftArrow: "\u2199",
        LowerRightArrow: "\u2198",
        loz: "\u25CA",
        lozenge: "\u25CA",
        lozf: "\u29EB",
        lpar: "(",
        lparlt: "\u2993",
        lrarr: "\u21C6",
        lrcorner: "\u231F",
        lrhar: "\u21CB",
        lrhard: "\u296D",
        lrm: "\u200E",
        lrtri: "\u22BF",
        lsaquo: "\u2039",
        Lscr: "\u2112",
        lscr: "\u{1D4C1}",
        Lsh: "\u21B0",
        lsh: "\u21B0",
        lsim: "\u2272",
        lsime: "\u2A8D",
        lsimg: "\u2A8F",
        lsqb: "[",
        lsquo: "\u2018",
        lsquor: "\u201A",
        Lstrok: "\u0141",
        lstrok: "\u0142",
        Lt: "\u226A",
        LT: "<",
        lt: "<",
        ltcc: "\u2AA6",
        ltcir: "\u2A79",
        ltdot: "\u22D6",
        lthree: "\u22CB",
        ltimes: "\u22C9",
        ltlarr: "\u2976",
        ltquest: "\u2A7B",
        ltri: "\u25C3",
        ltrie: "\u22B4",
        ltrif: "\u25C2",
        ltrPar: "\u2996",
        lurdshar: "\u294A",
        luruhar: "\u2966",
        lvertneqq: "\u2268\uFE00",
        lvnE: "\u2268\uFE00",
        macr: "\xAF",
        male: "\u2642",
        malt: "\u2720",
        maltese: "\u2720",
        Map: "\u2905",
        map: "\u21A6",
        mapsto: "\u21A6",
        mapstodown: "\u21A7",
        mapstoleft: "\u21A4",
        mapstoup: "\u21A5",
        marker: "\u25AE",
        mcomma: "\u2A29",
        Mcy: "\u041C",
        mcy: "\u043C",
        mdash: "\u2014",
        mDDot: "\u223A",
        measuredangle: "\u2221",
        MediumSpace: "\u205F",
        Mellintrf: "\u2133",
        Mfr: "\u{1D510}",
        mfr: "\u{1D52A}",
        mho: "\u2127",
        micro: "\xB5",
        mid: "\u2223",
        midast: "*",
        midcir: "\u2AF0",
        middot: "\xB7",
        minus: "\u2212",
        minusb: "\u229F",
        minusd: "\u2238",
        minusdu: "\u2A2A",
        MinusPlus: "\u2213",
        mlcp: "\u2ADB",
        mldr: "\u2026",
        mnplus: "\u2213",
        models: "\u22A7",
        Mopf: "\u{1D544}",
        mopf: "\u{1D55E}",
        mp: "\u2213",
        Mscr: "\u2133",
        mscr: "\u{1D4C2}",
        mstpos: "\u223E",
        Mu: "\u039C",
        mu: "\u03BC",
        multimap: "\u22B8",
        mumap: "\u22B8",
        nabla: "\u2207",
        Nacute: "\u0143",
        nacute: "\u0144",
        nang: "\u2220\u20D2",
        nap: "\u2249",
        napE: "\u2A70\u0338",
        napid: "\u224B\u0338",
        napos: "\u0149",
        napprox: "\u2249",
        natur: "\u266E",
        natural: "\u266E",
        naturals: "\u2115",
        nbsp: "\xA0",
        nbump: "\u224E\u0338",
        nbumpe: "\u224F\u0338",
        ncap: "\u2A43",
        Ncaron: "\u0147",
        ncaron: "\u0148",
        Ncedil: "\u0145",
        ncedil: "\u0146",
        ncong: "\u2247",
        ncongdot: "\u2A6D\u0338",
        ncup: "\u2A42",
        Ncy: "\u041D",
        ncy: "\u043D",
        ndash: "\u2013",
        ne: "\u2260",
        nearhk: "\u2924",
        neArr: "\u21D7",
        nearr: "\u2197",
        nearrow: "\u2197",
        nedot: "\u2250\u0338",
        NegativeMediumSpace: "\u200B",
        NegativeThickSpace: "\u200B",
        NegativeThinSpace: "\u200B",
        NegativeVeryThinSpace: "\u200B",
        nequiv: "\u2262",
        nesear: "\u2928",
        nesim: "\u2242\u0338",
        NestedGreaterGreater: "\u226B",
        NestedLessLess: "\u226A",
        NewLine: `
`,
        nexist: "\u2204",
        nexists: "\u2204",
        Nfr: "\u{1D511}",
        nfr: "\u{1D52B}",
        ngE: "\u2267\u0338",
        nge: "\u2271",
        ngeq: "\u2271",
        ngeqq: "\u2267\u0338",
        ngeqslant: "\u2A7E\u0338",
        nges: "\u2A7E\u0338",
        nGg: "\u22D9\u0338",
        ngsim: "\u2275",
        nGt: "\u226B\u20D2",
        ngt: "\u226F",
        ngtr: "\u226F",
        nGtv: "\u226B\u0338",
        nhArr: "\u21CE",
        nharr: "\u21AE",
        nhpar: "\u2AF2",
        ni: "\u220B",
        nis: "\u22FC",
        nisd: "\u22FA",
        niv: "\u220B",
        NJcy: "\u040A",
        njcy: "\u045A",
        nlArr: "\u21CD",
        nlarr: "\u219A",
        nldr: "\u2025",
        nlE: "\u2266\u0338",
        nle: "\u2270",
        nLeftarrow: "\u21CD",
        nleftarrow: "\u219A",
        nLeftrightarrow: "\u21CE",
        nleftrightarrow: "\u21AE",
        nleq: "\u2270",
        nleqq: "\u2266\u0338",
        nleqslant: "\u2A7D\u0338",
        nles: "\u2A7D\u0338",
        nless: "\u226E",
        nLl: "\u22D8\u0338",
        nlsim: "\u2274",
        nLt: "\u226A\u20D2",
        nlt: "\u226E",
        nltri: "\u22EA",
        nltrie: "\u22EC",
        nLtv: "\u226A\u0338",
        nmid: "\u2224",
        NoBreak: "\u2060",
        NonBreakingSpace: "\xA0",
        Nopf: "\u2115",
        nopf: "\u{1D55F}",
        Not: "\u2AEC",
        not: "\xAC",
        NotCongruent: "\u2262",
        NotCupCap: "\u226D",
        NotDoubleVerticalBar: "\u2226",
        NotElement: "\u2209",
        NotEqual: "\u2260",
        NotEqualTilde: "\u2242\u0338",
        NotExists: "\u2204",
        NotGreater: "\u226F",
        NotGreaterEqual: "\u2271",
        NotGreaterFullEqual: "\u2267\u0338",
        NotGreaterGreater: "\u226B\u0338",
        NotGreaterLess: "\u2279",
        NotGreaterSlantEqual: "\u2A7E\u0338",
        NotGreaterTilde: "\u2275",
        NotHumpDownHump: "\u224E\u0338",
        NotHumpEqual: "\u224F\u0338",
        notin: "\u2209",
        notindot: "\u22F5\u0338",
        notinE: "\u22F9\u0338",
        notinva: "\u2209",
        notinvb: "\u22F7",
        notinvc: "\u22F6",
        NotLeftTriangle: "\u22EA",
        NotLeftTriangleBar: "\u29CF\u0338",
        NotLeftTriangleEqual: "\u22EC",
        NotLess: "\u226E",
        NotLessEqual: "\u2270",
        NotLessGreater: "\u2278",
        NotLessLess: "\u226A\u0338",
        NotLessSlantEqual: "\u2A7D\u0338",
        NotLessTilde: "\u2274",
        NotNestedGreaterGreater: "\u2AA2\u0338",
        NotNestedLessLess: "\u2AA1\u0338",
        notni: "\u220C",
        notniva: "\u220C",
        notnivb: "\u22FE",
        notnivc: "\u22FD",
        NotPrecedes: "\u2280",
        NotPrecedesEqual: "\u2AAF\u0338",
        NotPrecedesSlantEqual: "\u22E0",
        NotReverseElement: "\u220C",
        NotRightTriangle: "\u22EB",
        NotRightTriangleBar: "\u29D0\u0338",
        NotRightTriangleEqual: "\u22ED",
        NotSquareSubset: "\u228F\u0338",
        NotSquareSubsetEqual: "\u22E2",
        NotSquareSuperset: "\u2290\u0338",
        NotSquareSupersetEqual: "\u22E3",
        NotSubset: "\u2282\u20D2",
        NotSubsetEqual: "\u2288",
        NotSucceeds: "\u2281",
        NotSucceedsEqual: "\u2AB0\u0338",
        NotSucceedsSlantEqual: "\u22E1",
        NotSucceedsTilde: "\u227F\u0338",
        NotSuperset: "\u2283\u20D2",
        NotSupersetEqual: "\u2289",
        NotTilde: "\u2241",
        NotTildeEqual: "\u2244",
        NotTildeFullEqual: "\u2247",
        NotTildeTilde: "\u2249",
        NotVerticalBar: "\u2224",
        npar: "\u2226",
        nparallel: "\u2226",
        nparsl: "\u2AFD\u20E5",
        npart: "\u2202\u0338",
        npolint: "\u2A14",
        npr: "\u2280",
        nprcue: "\u22E0",
        npre: "\u2AAF\u0338",
        nprec: "\u2280",
        npreceq: "\u2AAF\u0338",
        nrArr: "\u21CF",
        nrarr: "\u219B",
        nrarrc: "\u2933\u0338",
        nrarrw: "\u219D\u0338",
        nRightarrow: "\u21CF",
        nrightarrow: "\u219B",
        nrtri: "\u22EB",
        nrtrie: "\u22ED",
        nsc: "\u2281",
        nsccue: "\u22E1",
        nsce: "\u2AB0\u0338",
        Nscr: "\u{1D4A9}",
        nscr: "\u{1D4C3}",
        nshortmid: "\u2224",
        nshortparallel: "\u2226",
        nsim: "\u2241",
        nsime: "\u2244",
        nsimeq: "\u2244",
        nsmid: "\u2224",
        nspar: "\u2226",
        nsqsube: "\u22E2",
        nsqsupe: "\u22E3",
        nsub: "\u2284",
        nsubE: "\u2AC5\u0338",
        nsube: "\u2288",
        nsubset: "\u2282\u20D2",
        nsubseteq: "\u2288",
        nsubseteqq: "\u2AC5\u0338",
        nsucc: "\u2281",
        nsucceq: "\u2AB0\u0338",
        nsup: "\u2285",
        nsupE: "\u2AC6\u0338",
        nsupe: "\u2289",
        nsupset: "\u2283\u20D2",
        nsupseteq: "\u2289",
        nsupseteqq: "\u2AC6\u0338",
        ntgl: "\u2279",
        Ntilde: "\xD1",
        ntilde: "\xF1",
        ntlg: "\u2278",
        ntriangleleft: "\u22EA",
        ntrianglelefteq: "\u22EC",
        ntriangleright: "\u22EB",
        ntrianglerighteq: "\u22ED",
        Nu: "\u039D",
        nu: "\u03BD",
        num: "#",
        numero: "\u2116",
        numsp: "\u2007",
        nvap: "\u224D\u20D2",
        nVDash: "\u22AF",
        nVdash: "\u22AE",
        nvDash: "\u22AD",
        nvdash: "\u22AC",
        nvge: "\u2265\u20D2",
        nvgt: ">\u20D2",
        nvHarr: "\u2904",
        nvinfin: "\u29DE",
        nvlArr: "\u2902",
        nvle: "\u2264\u20D2",
        nvlt: "<\u20D2",
        nvltrie: "\u22B4\u20D2",
        nvrArr: "\u2903",
        nvrtrie: "\u22B5\u20D2",
        nvsim: "\u223C\u20D2",
        nwarhk: "\u2923",
        nwArr: "\u21D6",
        nwarr: "\u2196",
        nwarrow: "\u2196",
        nwnear: "\u2927",
        Oacute: "\xD3",
        oacute: "\xF3",
        oast: "\u229B",
        ocir: "\u229A",
        Ocirc: "\xD4",
        ocirc: "\xF4",
        Ocy: "\u041E",
        ocy: "\u043E",
        odash: "\u229D",
        Odblac: "\u0150",
        odblac: "\u0151",
        odiv: "\u2A38",
        odot: "\u2299",
        odsold: "\u29BC",
        OElig: "\u0152",
        oelig: "\u0153",
        ofcir: "\u29BF",
        Ofr: "\u{1D512}",
        ofr: "\u{1D52C}",
        ogon: "\u02DB",
        Ograve: "\xD2",
        ograve: "\xF2",
        ogt: "\u29C1",
        ohbar: "\u29B5",
        ohm: "\u03A9",
        oint: "\u222E",
        olarr: "\u21BA",
        olcir: "\u29BE",
        olcross: "\u29BB",
        oline: "\u203E",
        olt: "\u29C0",
        Omacr: "\u014C",
        omacr: "\u014D",
        Omega: "\u03A9",
        omega: "\u03C9",
        Omicron: "\u039F",
        omicron: "\u03BF",
        omid: "\u29B6",
        ominus: "\u2296",
        Oopf: "\u{1D546}",
        oopf: "\u{1D560}",
        opar: "\u29B7",
        OpenCurlyDoubleQuote: "\u201C",
        OpenCurlyQuote: "\u2018",
        operp: "\u29B9",
        oplus: "\u2295",
        Or: "\u2A54",
        or: "\u2228",
        orarr: "\u21BB",
        ord: "\u2A5D",
        order: "\u2134",
        orderof: "\u2134",
        ordf: "\xAA",
        ordm: "\xBA",
        origof: "\u22B6",
        oror: "\u2A56",
        orslope: "\u2A57",
        orv: "\u2A5B",
        oS: "\u24C8",
        Oscr: "\u{1D4AA}",
        oscr: "\u2134",
        Oslash: "\xD8",
        oslash: "\xF8",
        osol: "\u2298",
        Otilde: "\xD5",
        otilde: "\xF5",
        Otimes: "\u2A37",
        otimes: "\u2297",
        otimesas: "\u2A36",
        Ouml: "\xD6",
        ouml: "\xF6",
        ovbar: "\u233D",
        OverBar: "\u203E",
        OverBrace: "\u23DE",
        OverBracket: "\u23B4",
        OverParenthesis: "\u23DC",
        par: "\u2225",
        para: "\xB6",
        parallel: "\u2225",
        parsim: "\u2AF3",
        parsl: "\u2AFD",
        part: "\u2202",
        PartialD: "\u2202",
        Pcy: "\u041F",
        pcy: "\u043F",
        percnt: "%",
        period: ".",
        permil: "\u2030",
        perp: "\u22A5",
        pertenk: "\u2031",
        Pfr: "\u{1D513}",
        pfr: "\u{1D52D}",
        Phi: "\u03A6",
        phi: "\u03C6",
        phiv: "\u03D5",
        phmmat: "\u2133",
        phone: "\u260E",
        Pi: "\u03A0",
        pi: "\u03C0",
        pitchfork: "\u22D4",
        piv: "\u03D6",
        planck: "\u210F",
        planckh: "\u210E",
        plankv: "\u210F",
        plus: "+",
        plusacir: "\u2A23",
        plusb: "\u229E",
        pluscir: "\u2A22",
        plusdo: "\u2214",
        plusdu: "\u2A25",
        pluse: "\u2A72",
        PlusMinus: "\xB1",
        plusmn: "\xB1",
        plussim: "\u2A26",
        plustwo: "\u2A27",
        pm: "\xB1",
        Poincareplane: "\u210C",
        pointint: "\u2A15",
        Popf: "\u2119",
        popf: "\u{1D561}",
        pound: "\xA3",
        Pr: "\u2ABB",
        pr: "\u227A",
        prap: "\u2AB7",
        prcue: "\u227C",
        prE: "\u2AB3",
        pre: "\u2AAF",
        prec: "\u227A",
        precapprox: "\u2AB7",
        preccurlyeq: "\u227C",
        Precedes: "\u227A",
        PrecedesEqual: "\u2AAF",
        PrecedesSlantEqual: "\u227C",
        PrecedesTilde: "\u227E",
        preceq: "\u2AAF",
        precnapprox: "\u2AB9",
        precneqq: "\u2AB5",
        precnsim: "\u22E8",
        precsim: "\u227E",
        Prime: "\u2033",
        prime: "\u2032",
        primes: "\u2119",
        prnap: "\u2AB9",
        prnE: "\u2AB5",
        prnsim: "\u22E8",
        prod: "\u220F",
        Product: "\u220F",
        profalar: "\u232E",
        profline: "\u2312",
        profsurf: "\u2313",
        prop: "\u221D",
        Proportion: "\u2237",
        Proportional: "\u221D",
        propto: "\u221D",
        prsim: "\u227E",
        prurel: "\u22B0",
        Pscr: "\u{1D4AB}",
        pscr: "\u{1D4C5}",
        Psi: "\u03A8",
        psi: "\u03C8",
        puncsp: "\u2008",
        Qfr: "\u{1D514}",
        qfr: "\u{1D52E}",
        qint: "\u2A0C",
        Qopf: "\u211A",
        qopf: "\u{1D562}",
        qprime: "\u2057",
        Qscr: "\u{1D4AC}",
        qscr: "\u{1D4C6}",
        quaternions: "\u210D",
        quatint: "\u2A16",
        quest: "?",
        questeq: "\u225F",
        QUOT: '"',
        quot: '"',
        rAarr: "\u21DB",
        race: "\u223D\u0331",
        Racute: "\u0154",
        racute: "\u0155",
        radic: "\u221A",
        raemptyv: "\u29B3",
        Rang: "\u27EB",
        rang: "\u27E9",
        rangd: "\u2992",
        range: "\u29A5",
        rangle: "\u27E9",
        raquo: "\xBB",
        Rarr: "\u21A0",
        rArr: "\u21D2",
        rarr: "\u2192",
        rarrap: "\u2975",
        rarrb: "\u21E5",
        rarrbfs: "\u2920",
        rarrc: "\u2933",
        rarrfs: "\u291E",
        rarrhk: "\u21AA",
        rarrlp: "\u21AC",
        rarrpl: "\u2945",
        rarrsim: "\u2974",
        Rarrtl: "\u2916",
        rarrtl: "\u21A3",
        rarrw: "\u219D",
        rAtail: "\u291C",
        ratail: "\u291A",
        ratio: "\u2236",
        rationals: "\u211A",
        RBarr: "\u2910",
        rBarr: "\u290F",
        rbarr: "\u290D",
        rbbrk: "\u2773",
        rbrace: "}",
        rbrack: "]",
        rbrke: "\u298C",
        rbrksld: "\u298E",
        rbrkslu: "\u2990",
        Rcaron: "\u0158",
        rcaron: "\u0159",
        Rcedil: "\u0156",
        rcedil: "\u0157",
        rceil: "\u2309",
        rcub: "}",
        Rcy: "\u0420",
        rcy: "\u0440",
        rdca: "\u2937",
        rdldhar: "\u2969",
        rdquo: "\u201D",
        rdquor: "\u201D",
        rdsh: "\u21B3",
        Re: "\u211C",
        real: "\u211C",
        realine: "\u211B",
        realpart: "\u211C",
        reals: "\u211D",
        rect: "\u25AD",
        REG: "\xAE",
        reg: "\xAE",
        ReverseElement: "\u220B",
        ReverseEquilibrium: "\u21CB",
        ReverseUpEquilibrium: "\u296F",
        rfisht: "\u297D",
        rfloor: "\u230B",
        Rfr: "\u211C",
        rfr: "\u{1D52F}",
        rHar: "\u2964",
        rhard: "\u21C1",
        rharu: "\u21C0",
        rharul: "\u296C",
        Rho: "\u03A1",
        rho: "\u03C1",
        rhov: "\u03F1",
        RightAngleBracket: "\u27E9",
        RightArrow: "\u2192",
        Rightarrow: "\u21D2",
        rightarrow: "\u2192",
        RightArrowBar: "\u21E5",
        RightArrowLeftArrow: "\u21C4",
        rightarrowtail: "\u21A3",
        RightCeiling: "\u2309",
        RightDoubleBracket: "\u27E7",
        RightDownTeeVector: "\u295D",
        RightDownVector: "\u21C2",
        RightDownVectorBar: "\u2955",
        RightFloor: "\u230B",
        rightharpoondown: "\u21C1",
        rightharpoonup: "\u21C0",
        rightleftarrows: "\u21C4",
        rightleftharpoons: "\u21CC",
        rightrightarrows: "\u21C9",
        rightsquigarrow: "\u219D",
        RightTee: "\u22A2",
        RightTeeArrow: "\u21A6",
        RightTeeVector: "\u295B",
        rightthreetimes: "\u22CC",
        RightTriangle: "\u22B3",
        RightTriangleBar: "\u29D0",
        RightTriangleEqual: "\u22B5",
        RightUpDownVector: "\u294F",
        RightUpTeeVector: "\u295C",
        RightUpVector: "\u21BE",
        RightUpVectorBar: "\u2954",
        RightVector: "\u21C0",
        RightVectorBar: "\u2953",
        ring: "\u02DA",
        risingdotseq: "\u2253",
        rlarr: "\u21C4",
        rlhar: "\u21CC",
        rlm: "\u200F",
        rmoust: "\u23B1",
        rmoustache: "\u23B1",
        rnmid: "\u2AEE",
        roang: "\u27ED",
        roarr: "\u21FE",
        robrk: "\u27E7",
        ropar: "\u2986",
        Ropf: "\u211D",
        ropf: "\u{1D563}",
        roplus: "\u2A2E",
        rotimes: "\u2A35",
        RoundImplies: "\u2970",
        rpar: ")",
        rpargt: "\u2994",
        rppolint: "\u2A12",
        rrarr: "\u21C9",
        Rrightarrow: "\u21DB",
        rsaquo: "\u203A",
        Rscr: "\u211B",
        rscr: "\u{1D4C7}",
        Rsh: "\u21B1",
        rsh: "\u21B1",
        rsqb: "]",
        rsquo: "\u2019",
        rsquor: "\u2019",
        rthree: "\u22CC",
        rtimes: "\u22CA",
        rtri: "\u25B9",
        rtrie: "\u22B5",
        rtrif: "\u25B8",
        rtriltri: "\u29CE",
        RuleDelayed: "\u29F4",
        ruluhar: "\u2968",
        rx: "\u211E",
        Sacute: "\u015A",
        sacute: "\u015B",
        sbquo: "\u201A",
        Sc: "\u2ABC",
        sc: "\u227B",
        scap: "\u2AB8",
        Scaron: "\u0160",
        scaron: "\u0161",
        sccue: "\u227D",
        scE: "\u2AB4",
        sce: "\u2AB0",
        Scedil: "\u015E",
        scedil: "\u015F",
        Scirc: "\u015C",
        scirc: "\u015D",
        scnap: "\u2ABA",
        scnE: "\u2AB6",
        scnsim: "\u22E9",
        scpolint: "\u2A13",
        scsim: "\u227F",
        Scy: "\u0421",
        scy: "\u0441",
        sdot: "\u22C5",
        sdotb: "\u22A1",
        sdote: "\u2A66",
        searhk: "\u2925",
        seArr: "\u21D8",
        searr: "\u2198",
        searrow: "\u2198",
        sect: "\xA7",
        semi: ";",
        seswar: "\u2929",
        setminus: "\u2216",
        setmn: "\u2216",
        sext: "\u2736",
        Sfr: "\u{1D516}",
        sfr: "\u{1D530}",
        sfrown: "\u2322",
        sharp: "\u266F",
        SHCHcy: "\u0429",
        shchcy: "\u0449",
        SHcy: "\u0428",
        shcy: "\u0448",
        ShortDownArrow: "\u2193",
        ShortLeftArrow: "\u2190",
        shortmid: "\u2223",
        shortparallel: "\u2225",
        ShortRightArrow: "\u2192",
        ShortUpArrow: "\u2191",
        shy: "\xAD",
        Sigma: "\u03A3",
        sigma: "\u03C3",
        sigmaf: "\u03C2",
        sigmav: "\u03C2",
        sim: "\u223C",
        simdot: "\u2A6A",
        sime: "\u2243",
        simeq: "\u2243",
        simg: "\u2A9E",
        simgE: "\u2AA0",
        siml: "\u2A9D",
        simlE: "\u2A9F",
        simne: "\u2246",
        simplus: "\u2A24",
        simrarr: "\u2972",
        slarr: "\u2190",
        SmallCircle: "\u2218",
        smallsetminus: "\u2216",
        smashp: "\u2A33",
        smeparsl: "\u29E4",
        smid: "\u2223",
        smile: "\u2323",
        smt: "\u2AAA",
        smte: "\u2AAC",
        smtes: "\u2AAC\uFE00",
        SOFTcy: "\u042C",
        softcy: "\u044C",
        sol: "/",
        solb: "\u29C4",
        solbar: "\u233F",
        Sopf: "\u{1D54A}",
        sopf: "\u{1D564}",
        spades: "\u2660",
        spadesuit: "\u2660",
        spar: "\u2225",
        sqcap: "\u2293",
        sqcaps: "\u2293\uFE00",
        sqcup: "\u2294",
        sqcups: "\u2294\uFE00",
        Sqrt: "\u221A",
        sqsub: "\u228F",
        sqsube: "\u2291",
        sqsubset: "\u228F",
        sqsubseteq: "\u2291",
        sqsup: "\u2290",
        sqsupe: "\u2292",
        sqsupset: "\u2290",
        sqsupseteq: "\u2292",
        squ: "\u25A1",
        Square: "\u25A1",
        square: "\u25A1",
        SquareIntersection: "\u2293",
        SquareSubset: "\u228F",
        SquareSubsetEqual: "\u2291",
        SquareSuperset: "\u2290",
        SquareSupersetEqual: "\u2292",
        SquareUnion: "\u2294",
        squarf: "\u25AA",
        squf: "\u25AA",
        srarr: "\u2192",
        Sscr: "\u{1D4AE}",
        sscr: "\u{1D4C8}",
        ssetmn: "\u2216",
        ssmile: "\u2323",
        sstarf: "\u22C6",
        Star: "\u22C6",
        star: "\u2606",
        starf: "\u2605",
        straightepsilon: "\u03F5",
        straightphi: "\u03D5",
        strns: "\xAF",
        Sub: "\u22D0",
        sub: "\u2282",
        subdot: "\u2ABD",
        subE: "\u2AC5",
        sube: "\u2286",
        subedot: "\u2AC3",
        submult: "\u2AC1",
        subnE: "\u2ACB",
        subne: "\u228A",
        subplus: "\u2ABF",
        subrarr: "\u2979",
        Subset: "\u22D0",
        subset: "\u2282",
        subseteq: "\u2286",
        subseteqq: "\u2AC5",
        SubsetEqual: "\u2286",
        subsetneq: "\u228A",
        subsetneqq: "\u2ACB",
        subsim: "\u2AC7",
        subsub: "\u2AD5",
        subsup: "\u2AD3",
        succ: "\u227B",
        succapprox: "\u2AB8",
        succcurlyeq: "\u227D",
        Succeeds: "\u227B",
        SucceedsEqual: "\u2AB0",
        SucceedsSlantEqual: "\u227D",
        SucceedsTilde: "\u227F",
        succeq: "\u2AB0",
        succnapprox: "\u2ABA",
        succneqq: "\u2AB6",
        succnsim: "\u22E9",
        succsim: "\u227F",
        SuchThat: "\u220B",
        Sum: "\u2211",
        sum: "\u2211",
        sung: "\u266A",
        Sup: "\u22D1",
        sup: "\u2283",
        sup1: "\xB9",
        sup2: "\xB2",
        sup3: "\xB3",
        supdot: "\u2ABE",
        supdsub: "\u2AD8",
        supE: "\u2AC6",
        supe: "\u2287",
        supedot: "\u2AC4",
        Superset: "\u2283",
        SupersetEqual: "\u2287",
        suphsol: "\u27C9",
        suphsub: "\u2AD7",
        suplarr: "\u297B",
        supmult: "\u2AC2",
        supnE: "\u2ACC",
        supne: "\u228B",
        supplus: "\u2AC0",
        Supset: "\u22D1",
        supset: "\u2283",
        supseteq: "\u2287",
        supseteqq: "\u2AC6",
        supsetneq: "\u228B",
        supsetneqq: "\u2ACC",
        supsim: "\u2AC8",
        supsub: "\u2AD4",
        supsup: "\u2AD6",
        swarhk: "\u2926",
        swArr: "\u21D9",
        swarr: "\u2199",
        swarrow: "\u2199",
        swnwar: "\u292A",
        szlig: "\xDF",
        Tab: "	",
        target: "\u2316",
        Tau: "\u03A4",
        tau: "\u03C4",
        tbrk: "\u23B4",
        Tcaron: "\u0164",
        tcaron: "\u0165",
        Tcedil: "\u0162",
        tcedil: "\u0163",
        Tcy: "\u0422",
        tcy: "\u0442",
        tdot: "\u20DB",
        telrec: "\u2315",
        Tfr: "\u{1D517}",
        tfr: "\u{1D531}",
        there4: "\u2234",
        Therefore: "\u2234",
        therefore: "\u2234",
        Theta: "\u0398",
        theta: "\u03B8",
        thetasym: "\u03D1",
        thetav: "\u03D1",
        thickapprox: "\u2248",
        thicksim: "\u223C",
        ThickSpace: "\u205F\u200A",
        thinsp: "\u2009",
        ThinSpace: "\u2009",
        thkap: "\u2248",
        thksim: "\u223C",
        THORN: "\xDE",
        thorn: "\xFE",
        Tilde: "\u223C",
        tilde: "\u02DC",
        TildeEqual: "\u2243",
        TildeFullEqual: "\u2245",
        TildeTilde: "\u2248",
        times: "\xD7",
        timesb: "\u22A0",
        timesbar: "\u2A31",
        timesd: "\u2A30",
        tint: "\u222D",
        toea: "\u2928",
        top: "\u22A4",
        topbot: "\u2336",
        topcir: "\u2AF1",
        Topf: "\u{1D54B}",
        topf: "\u{1D565}",
        topfork: "\u2ADA",
        tosa: "\u2929",
        tprime: "\u2034",
        TRADE: "\u2122",
        trade: "\u2122",
        triangle: "\u25B5",
        triangledown: "\u25BF",
        triangleleft: "\u25C3",
        trianglelefteq: "\u22B4",
        triangleq: "\u225C",
        triangleright: "\u25B9",
        trianglerighteq: "\u22B5",
        tridot: "\u25EC",
        trie: "\u225C",
        triminus: "\u2A3A",
        TripleDot: "\u20DB",
        triplus: "\u2A39",
        trisb: "\u29CD",
        tritime: "\u2A3B",
        trpezium: "\u23E2",
        Tscr: "\u{1D4AF}",
        tscr: "\u{1D4C9}",
        TScy: "\u0426",
        tscy: "\u0446",
        TSHcy: "\u040B",
        tshcy: "\u045B",
        Tstrok: "\u0166",
        tstrok: "\u0167",
        twixt: "\u226C",
        twoheadleftarrow: "\u219E",
        twoheadrightarrow: "\u21A0",
        Uacute: "\xDA",
        uacute: "\xFA",
        Uarr: "\u219F",
        uArr: "\u21D1",
        uarr: "\u2191",
        Uarrocir: "\u2949",
        Ubrcy: "\u040E",
        ubrcy: "\u045E",
        Ubreve: "\u016C",
        ubreve: "\u016D",
        Ucirc: "\xDB",
        ucirc: "\xFB",
        Ucy: "\u0423",
        ucy: "\u0443",
        udarr: "\u21C5",
        Udblac: "\u0170",
        udblac: "\u0171",
        udhar: "\u296E",
        ufisht: "\u297E",
        Ufr: "\u{1D518}",
        ufr: "\u{1D532}",
        Ugrave: "\xD9",
        ugrave: "\xF9",
        uHar: "\u2963",
        uharl: "\u21BF",
        uharr: "\u21BE",
        uhblk: "\u2580",
        ulcorn: "\u231C",
        ulcorner: "\u231C",
        ulcrop: "\u230F",
        ultri: "\u25F8",
        Umacr: "\u016A",
        umacr: "\u016B",
        uml: "\xA8",
        UnderBar: "_",
        UnderBrace: "\u23DF",
        UnderBracket: "\u23B5",
        UnderParenthesis: "\u23DD",
        Union: "\u22C3",
        UnionPlus: "\u228E",
        Uogon: "\u0172",
        uogon: "\u0173",
        Uopf: "\u{1D54C}",
        uopf: "\u{1D566}",
        UpArrow: "\u2191",
        Uparrow: "\u21D1",
        uparrow: "\u2191",
        UpArrowBar: "\u2912",
        UpArrowDownArrow: "\u21C5",
        UpDownArrow: "\u2195",
        Updownarrow: "\u21D5",
        updownarrow: "\u2195",
        UpEquilibrium: "\u296E",
        upharpoonleft: "\u21BF",
        upharpoonright: "\u21BE",
        uplus: "\u228E",
        UpperLeftArrow: "\u2196",
        UpperRightArrow: "\u2197",
        Upsi: "\u03D2",
        upsi: "\u03C5",
        upsih: "\u03D2",
        Upsilon: "\u03A5",
        upsilon: "\u03C5",
        UpTee: "\u22A5",
        UpTeeArrow: "\u21A5",
        upuparrows: "\u21C8",
        urcorn: "\u231D",
        urcorner: "\u231D",
        urcrop: "\u230E",
        Uring: "\u016E",
        uring: "\u016F",
        urtri: "\u25F9",
        Uscr: "\u{1D4B0}",
        uscr: "\u{1D4CA}",
        utdot: "\u22F0",
        Utilde: "\u0168",
        utilde: "\u0169",
        utri: "\u25B5",
        utrif: "\u25B4",
        uuarr: "\u21C8",
        Uuml: "\xDC",
        uuml: "\xFC",
        uwangle: "\u29A7",
        vangrt: "\u299C",
        varepsilon: "\u03F5",
        varkappa: "\u03F0",
        varnothing: "\u2205",
        varphi: "\u03D5",
        varpi: "\u03D6",
        varpropto: "\u221D",
        vArr: "\u21D5",
        varr: "\u2195",
        varrho: "\u03F1",
        varsigma: "\u03C2",
        varsubsetneq: "\u228A\uFE00",
        varsubsetneqq: "\u2ACB\uFE00",
        varsupsetneq: "\u228B\uFE00",
        varsupsetneqq: "\u2ACC\uFE00",
        vartheta: "\u03D1",
        vartriangleleft: "\u22B2",
        vartriangleright: "\u22B3",
        Vbar: "\u2AEB",
        vBar: "\u2AE8",
        vBarv: "\u2AE9",
        Vcy: "\u0412",
        vcy: "\u0432",
        VDash: "\u22AB",
        Vdash: "\u22A9",
        vDash: "\u22A8",
        vdash: "\u22A2",
        Vdashl: "\u2AE6",
        Vee: "\u22C1",
        vee: "\u2228",
        veebar: "\u22BB",
        veeeq: "\u225A",
        vellip: "\u22EE",
        Verbar: "\u2016",
        verbar: "|",
        Vert: "\u2016",
        vert: "|",
        VerticalBar: "\u2223",
        VerticalLine: "|",
        VerticalSeparator: "\u2758",
        VerticalTilde: "\u2240",
        VeryThinSpace: "\u200A",
        Vfr: "\u{1D519}",
        vfr: "\u{1D533}",
        vltri: "\u22B2",
        vnsub: "\u2282\u20D2",
        vnsup: "\u2283\u20D2",
        Vopf: "\u{1D54D}",
        vopf: "\u{1D567}",
        vprop: "\u221D",
        vrtri: "\u22B3",
        Vscr: "\u{1D4B1}",
        vscr: "\u{1D4CB}",
        vsubnE: "\u2ACB\uFE00",
        vsubne: "\u228A\uFE00",
        vsupnE: "\u2ACC\uFE00",
        vsupne: "\u228B\uFE00",
        Vvdash: "\u22AA",
        vzigzag: "\u299A",
        Wcirc: "\u0174",
        wcirc: "\u0175",
        wedbar: "\u2A5F",
        Wedge: "\u22C0",
        wedge: "\u2227",
        wedgeq: "\u2259",
        weierp: "\u2118",
        Wfr: "\u{1D51A}",
        wfr: "\u{1D534}",
        Wopf: "\u{1D54E}",
        wopf: "\u{1D568}",
        wp: "\u2118",
        wr: "\u2240",
        wreath: "\u2240",
        Wscr: "\u{1D4B2}",
        wscr: "\u{1D4CC}",
        xcap: "\u22C2",
        xcirc: "\u25EF",
        xcup: "\u22C3",
        xdtri: "\u25BD",
        Xfr: "\u{1D51B}",
        xfr: "\u{1D535}",
        xhArr: "\u27FA",
        xharr: "\u27F7",
        Xi: "\u039E",
        xi: "\u03BE",
        xlArr: "\u27F8",
        xlarr: "\u27F5",
        xmap: "\u27FC",
        xnis: "\u22FB",
        xodot: "\u2A00",
        Xopf: "\u{1D54F}",
        xopf: "\u{1D569}",
        xoplus: "\u2A01",
        xotime: "\u2A02",
        xrArr: "\u27F9",
        xrarr: "\u27F6",
        Xscr: "\u{1D4B3}",
        xscr: "\u{1D4CD}",
        xsqcup: "\u2A06",
        xuplus: "\u2A04",
        xutri: "\u25B3",
        xvee: "\u22C1",
        xwedge: "\u22C0",
        Yacute: "\xDD",
        yacute: "\xFD",
        YAcy: "\u042F",
        yacy: "\u044F",
        Ycirc: "\u0176",
        ycirc: "\u0177",
        Ycy: "\u042B",
        ycy: "\u044B",
        yen: "\xA5",
        Yfr: "\u{1D51C}",
        yfr: "\u{1D536}",
        YIcy: "\u0407",
        yicy: "\u0457",
        Yopf: "\u{1D550}",
        yopf: "\u{1D56A}",
        Yscr: "\u{1D4B4}",
        yscr: "\u{1D4CE}",
        YUcy: "\u042E",
        yucy: "\u044E",
        Yuml: "\u0178",
        yuml: "\xFF",
        Zacute: "\u0179",
        zacute: "\u017A",
        Zcaron: "\u017D",
        zcaron: "\u017E",
        Zcy: "\u0417",
        zcy: "\u0437",
        Zdot: "\u017B",
        zdot: "\u017C",
        zeetrf: "\u2128",
        ZeroWidthSpace: "\u200B",
        Zeta: "\u0396",
        zeta: "\u03B6",
        Zfr: "\u2128",
        zfr: "\u{1D537}",
        ZHcy: "\u0416",
        zhcy: "\u0436",
        zigrarr: "\u21DD",
        Zopf: "\u2124",
        zopf: "\u{1D56B}",
        Zscr: "\u{1D4B5}",
        zscr: "\u{1D4CF}",
        zwj: "\u200D",
        zwnj: "\u200C"
      }), e.entityMap = e.HTML_ENTITIES;
    }(Li)), Li;
  }
  var Ln = {}, Fc;
  function Fp() {
    if (Fc) return Ln;
    Fc = 1;
    var e = Wr().NAMESPACE, t = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, n = new RegExp("[\\-\\.0-9" + t.source.slice(1, -1) + "\\u00B7\\u0300-\\u036F\\u203F-\\u2040]"), r = new RegExp("^" + t.source + n.source + "*(?::" + t.source + n.source + "*)?$"), a = 0, i = 1, c = 2, o = 3, s = 4, d = 5, b = 6, p = 7;
    function g(C, R) {
      this.message = C, this.locator = R, Error.captureStackTrace && Error.captureStackTrace(this, g);
    }
    g.prototype = new Error(), g.prototype.name = g.name;
    function m() {
    }
    m.prototype = {
      parse: function(C, R, z) {
        var T = this.domBuilder;
        T.startDocument(), w(R, R = {}), y(C, R, z, T, this.errorHandler), T.endDocument();
      }
    };
    function y(C, R, z, T, B) {
      function _(ne) {
        if (ne > 65535) {
          ne -= 65536;
          var K = 55296 + (ne >> 10), L = 56320 + (ne & 1023);
          return String.fromCharCode(K, L);
        } else return String.fromCharCode(ne);
      }
      function P(ne) {
        var K = ne.slice(1, -1);
        return Object.hasOwnProperty.call(z, K) ? z[K] : K.charAt(0) === "#" ? _(parseInt(K.substr(1).replace("x", "0x"))) : (B.error("entity not found:" + ne), ne);
      }
      function k(ne) {
        if (ne > ee) {
          var K = C.substring(ee, ne).replace(/&#?\w+;/g, P);
          N && I(ee), T.characters(K, 0, ne - ee), ee = ne;
        }
      }
      function I(ne, K) {
        for (; ne >= q && (K = Y.exec(C)); ) H = K.index, q = H + K[0].length, N.lineNumber++;
        N.columnNumber = ne - H + 1;
      }
      for (var H = 0, q = 0, Y = /.*(?:\r\n?|\n)|.*$/g, N = T.locator, $ = [
        {
          currentNSMap: R
        }
      ], M = {}, ee = 0; ; ) {
        try {
          var te = C.indexOf("<", ee);
          if (te < 0) {
            if (!C.substr(ee).match(/^\s*$/)) {
              var se = T.doc, le = se.createTextNode(C.substr(ee));
              se.appendChild(le), T.currentElement = le;
            }
            return;
          }
          switch (te > ee && k(te), C.charAt(te + 1)) {
            case "/":
              var Z = C.indexOf(">", te + 3), fe = C.substring(te + 2, Z).replace(/[ \t\n\r]+$/g, ""), ge = $.pop();
              Z < 0 ? (fe = C.substring(te + 2).replace(/[\s<].*/, ""), B.error("end tag name: " + fe + " is not complete:" + ge.tagName), Z = te + 1 + fe.length) : fe.match(/\s</) && (fe = fe.replace(/[\s<].*/, ""), B.error("end tag name: " + fe + " maybe not complete"), Z = te + 1 + fe.length);
              var me = ge.localNSMap, De = ge.tagName == fe, Ce = De || ge.tagName && ge.tagName.toLowerCase() == fe.toLowerCase();
              if (Ce) {
                if (T.endElement(ge.uri, ge.localName, fe), me) for (var we in me) Object.prototype.hasOwnProperty.call(me, we) && T.endPrefixMapping(we);
                De || B.fatalError("end tag name: " + fe + " is not match the current start tagName:" + ge.tagName);
              } else $.push(ge);
              Z++;
              break;
            case "?":
              N && I(te), Z = U(C, te, T);
              break;
            case "!":
              N && I(te), Z = x(C, te, T, B);
              break;
            default:
              N && I(te);
              var D = new E(), G = $[$.length - 1].currentNSMap, Z = u(C, te, D, G, P, B), O = D.length;
              if (!D.closed && v(C, Z, D.tagName, M) && (D.closed = true, z.nbsp || B.warning("unclosed xml attribute")), N && O) {
                for (var W = l(N, {}), X = 0; X < O; X++) {
                  var ae = D[X];
                  I(ae.offset), ae.locator = l(N, {});
                }
                T.locator = W, h(D, T, G) && $.push(D), T.locator = N;
              } else h(D, T, G) && $.push(D);
              e.isHTML(D.uri) && !D.closed ? Z = f(C, Z, D.tagName, P, T) : Z++;
          }
        } catch (ne) {
          if (ne instanceof g) throw ne;
          B.error("element parse error: " + ne), Z = -1;
        }
        Z > ee ? ee = Z : k(Math.max(te, ee) + 1);
      }
    }
    function l(C, R) {
      return R.lineNumber = C.lineNumber, R.columnNumber = C.columnNumber, R;
    }
    function u(C, R, z, T, B, _) {
      function P(N, $, M) {
        z.attributeNames.hasOwnProperty(N) && _.fatalError("Attribute " + N + " redefined"), z.addValue(N, $.replace(/[\t\n\r]/g, " ").replace(/&#?\w+;/g, B), M);
      }
      for (var k, I, H = ++R, q = a; ; ) {
        var Y = C.charAt(H);
        switch (Y) {
          case "=":
            if (q === i) k = C.slice(R, H), q = o;
            else if (q === c) q = o;
            else throw new Error("attribute equal must after attrName");
            break;
          case "'":
          case '"':
            if (q === o || q === i) if (q === i && (_.warning('attribute value must after "="'), k = C.slice(R, H)), R = H + 1, H = C.indexOf(Y, R), H > 0) I = C.slice(R, H), P(k, I, R - 1), q = d;
            else throw new Error("attribute value no end '" + Y + "' match");
            else if (q == s) I = C.slice(R, H), P(k, I, R), _.warning('attribute "' + k + '" missed start quot(' + Y + ")!!"), R = H + 1, q = d;
            else throw new Error('attribute value must after "="');
            break;
          case "/":
            switch (q) {
              case a:
                z.setTagName(C.slice(R, H));
              case d:
              case b:
              case p:
                q = p, z.closed = true;
              case s:
              case i:
                break;
              case c:
                z.closed = true;
                break;
              default:
                throw new Error("attribute invalid close char('/')");
            }
            break;
          case "":
            return _.error("unexpected end of input"), q == a && z.setTagName(C.slice(R, H)), H;
          case ">":
            switch (q) {
              case a:
                z.setTagName(C.slice(R, H));
              case d:
              case b:
              case p:
                break;
              case s:
              case i:
                I = C.slice(R, H), I.slice(-1) === "/" && (z.closed = true, I = I.slice(0, -1));
              case c:
                q === c && (I = k), q == s ? (_.warning('attribute "' + I + '" missed quot(")!'), P(k, I, R)) : ((!e.isHTML(T[""]) || !I.match(/^(?:disabled|checked|selected)$/i)) && _.warning('attribute "' + I + '" missed value!! "' + I + '" instead!!'), P(I, I, R));
                break;
              case o:
                throw new Error("attribute value missed!!");
            }
            return H;
          case "\x80":
            Y = " ";
          default:
            if (Y <= " ") switch (q) {
              case a:
                z.setTagName(C.slice(R, H)), q = b;
                break;
              case i:
                k = C.slice(R, H), q = c;
                break;
              case s:
                var I = C.slice(R, H);
                _.warning('attribute "' + I + '" missed quot(")!!'), P(k, I, R);
              case d:
                q = b;
                break;
            }
            else switch (q) {
              case c:
                z.tagName, (!e.isHTML(T[""]) || !k.match(/^(?:disabled|checked|selected)$/i)) && _.warning('attribute "' + k + '" missed value!! "' + k + '" instead2!!'), P(k, k, R), R = H, q = i;
                break;
              case d:
                _.warning('attribute space is required"' + k + '"!!');
              case b:
                q = i, R = H;
                break;
              case o:
                q = s, R = H;
                break;
              case p:
                throw new Error("elements closed character '/' and '>' must be connected to");
            }
        }
        H++;
      }
    }
    function h(C, R, z) {
      for (var T = C.tagName, B = null, Y = C.length; Y--; ) {
        var _ = C[Y], P = _.qName, k = _.value, N = P.indexOf(":");
        if (N > 0) var I = _.prefix = P.slice(0, N), H = P.slice(N + 1), q = I === "xmlns" && H;
        else H = P, I = null, q = P === "xmlns" && "";
        _.localName = H, q !== false && (B == null && (B = {}, w(z, z = {})), z[q] = B[q] = k, _.uri = e.XMLNS, R.startPrefixMapping(q, k));
      }
      for (var Y = C.length; Y--; ) {
        _ = C[Y];
        var I = _.prefix;
        I && (I === "xml" && (_.uri = e.XML), I !== "xmlns" && (_.uri = z[I || ""]));
      }
      var N = T.indexOf(":");
      N > 0 ? (I = C.prefix = T.slice(0, N), H = C.localName = T.slice(N + 1)) : (I = null, H = C.localName = T);
      var $ = C.uri = z[I || ""];
      if (R.startElement($, H, T, C), C.closed) {
        if (R.endElement($, H, T), B) for (I in B) Object.prototype.hasOwnProperty.call(B, I) && R.endPrefixMapping(I);
      } else return C.currentNSMap = z, C.localNSMap = B, true;
    }
    function f(C, R, z, T, B) {
      if (/^(?:script|textarea)$/i.test(z)) {
        var _ = C.indexOf("</" + z + ">", R), P = C.substring(R + 1, _);
        if (/[&<]/.test(P)) return /^script$/i.test(z) ? (B.characters(P, 0, P.length), _) : (P = P.replace(/&#?\w+;/g, T), B.characters(P, 0, P.length), _);
      }
      return R + 1;
    }
    function v(C, R, z, T) {
      var B = T[z];
      return B == null && (B = C.lastIndexOf("</" + z + ">"), B < R && (B = C.lastIndexOf("</" + z)), T[z] = B), B < R;
    }
    function w(C, R) {
      for (var z in C) Object.prototype.hasOwnProperty.call(C, z) && (R[z] = C[z]);
    }
    function x(C, R, z, T) {
      var B = C.charAt(R + 2);
      switch (B) {
        case "-":
          if (C.charAt(R + 3) === "-") {
            var _ = C.indexOf("-->", R + 4);
            return _ > R ? (z.comment(C, R + 4, _ - R - 4), _ + 3) : (T.error("Unclosed comment"), -1);
          } else return -1;
        default:
          if (C.substr(R + 3, 6) == "CDATA[") {
            var _ = C.indexOf("]]>", R + 9);
            return z.startCDATA(), z.characters(C, R + 9, _ - R - 9), z.endCDATA(), _ + 3;
          }
          var P = F(C, R), k = P.length;
          if (k > 1 && /!doctype/i.test(P[0][0])) {
            var I = P[1][0], H = false, q = false;
            k > 3 && (/^public$/i.test(P[2][0]) ? (H = P[3][0], q = k > 4 && P[4][0]) : /^system$/i.test(P[2][0]) && (q = P[3][0]));
            var Y = P[k - 1];
            return z.startDTD(I, H, q), z.endDTD(), Y.index + Y[0].length;
          }
      }
      return -1;
    }
    function U(C, R, z) {
      var T = C.indexOf("?>", R);
      if (T) {
        var B = C.substring(R, T).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);
        return B ? (B[0].length, z.processingInstruction(B[1], B[2]), T + 2) : -1;
      }
      return -1;
    }
    function E() {
      this.attributeNames = {};
    }
    E.prototype = {
      setTagName: function(C) {
        if (!r.test(C)) throw new Error("invalid tagName:" + C);
        this.tagName = C;
      },
      addValue: function(C, R, z) {
        if (!r.test(C)) throw new Error("invalid attribute:" + C);
        this.attributeNames[C] = this.length, this[this.length++] = {
          qName: C,
          value: R,
          offset: z
        };
      },
      length: 0,
      getLocalName: function(C) {
        return this[C].localName;
      },
      getLocator: function(C) {
        return this[C].locator;
      },
      getQName: function(C) {
        return this[C].qName;
      },
      getURI: function(C) {
        return this[C].uri;
      },
      getValue: function(C) {
        return this[C].value;
      }
    };
    function F(C, R) {
      var z, T = [], B = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
      for (B.lastIndex = R, B.exec(C); z = B.exec(C); ) if (T.push(z), z[1]) return T;
    }
    return Ln.XMLReader = m, Ln.ParseError = g, Ln;
  }
  var Sc;
  function Sp() {
    if (Sc) return un;
    Sc = 1;
    var e = Wr(), t = ao(), n = Ap(), r = Fp(), a = t.DOMImplementation, i = e.NAMESPACE, c = r.ParseError, o = r.XMLReader;
    function s(u) {
      return u.replace(/\r[\n\u0085]/g, `
`).replace(/[\r\u0085\u2028]/g, `
`);
    }
    function d(u) {
      this.options = u || {
        locator: {}
      };
    }
    d.prototype.parseFromString = function(u, h) {
      var f = this.options, v = new o(), w = f.domBuilder || new p(), x = f.errorHandler, U = f.locator, E = f.xmlns || {}, F = /\/x?html?$/.test(h), C = F ? n.HTML_ENTITIES : n.XML_ENTITIES;
      U && w.setDocumentLocator(U), v.errorHandler = b(x, w, U), v.domBuilder = f.domBuilder || w, F && (E[""] = i.HTML), E.xml = E.xml || i.XML;
      var R = f.normalizeLineEndings || s;
      return u && typeof u == "string" ? v.parse(R(u), E, C) : v.errorHandler.error("invalid doc source"), w.doc;
    };
    function b(u, h, f) {
      if (!u) {
        if (h instanceof p) return h;
        u = h;
      }
      var v = {}, w = u instanceof Function;
      f = f || {};
      function x(U) {
        var E = u[U];
        !E && w && (E = u.length == 2 ? function(F) {
          u(U, F);
        } : u), v[U] = E && function(F) {
          E("[xmldom " + U + "]	" + F + m(f));
        } || function() {
        };
      }
      return x("warning"), x("error"), x("fatalError"), v;
    }
    function p() {
      this.cdata = false;
    }
    function g(u, h) {
      h.lineNumber = u.lineNumber, h.columnNumber = u.columnNumber;
    }
    p.prototype = {
      startDocument: function() {
        this.doc = new a().createDocument(null, null, null), this.locator && (this.doc.documentURI = this.locator.systemId);
      },
      startElement: function(u, h, f, v) {
        var w = this.doc, x = w.createElementNS(u, f || h), U = v.length;
        l(this, x), this.currentElement = x, this.locator && g(this.locator, x);
        for (var E = 0; E < U; E++) {
          var u = v.getURI(E), F = v.getValue(E), f = v.getQName(E), C = w.createAttributeNS(u, f);
          this.locator && g(v.getLocator(E), C), C.value = C.nodeValue = F, x.setAttributeNode(C);
        }
      },
      endElement: function(u, h, f) {
        var v = this.currentElement;
        v.tagName, this.currentElement = v.parentNode;
      },
      startPrefixMapping: function(u, h) {
      },
      endPrefixMapping: function(u) {
      },
      processingInstruction: function(u, h) {
        var f = this.doc.createProcessingInstruction(u, h);
        this.locator && g(this.locator, f), l(this, f);
      },
      ignorableWhitespace: function(u, h, f) {
      },
      characters: function(u, h, f) {
        if (u = y.apply(this, arguments), u) {
          if (this.cdata) var v = this.doc.createCDATASection(u);
          else var v = this.doc.createTextNode(u);
          this.currentElement ? this.currentElement.appendChild(v) : /^\s*$/.test(u) && this.doc.appendChild(v), this.locator && g(this.locator, v);
        }
      },
      skippedEntity: function(u) {
      },
      endDocument: function() {
        this.doc.normalize();
      },
      setDocumentLocator: function(u) {
        (this.locator = u) && (u.lineNumber = 0);
      },
      comment: function(u, h, f) {
        u = y.apply(this, arguments);
        var v = this.doc.createComment(u);
        this.locator && g(this.locator, v), l(this, v);
      },
      startCDATA: function() {
        this.cdata = true;
      },
      endCDATA: function() {
        this.cdata = false;
      },
      startDTD: function(u, h, f) {
        var v = this.doc.implementation;
        if (v && v.createDocumentType) {
          var w = v.createDocumentType(u, h, f);
          this.locator && g(this.locator, w), l(this, w), this.doc.doctype = w;
        }
      },
      warning: function(u) {
        console.warn("[xmldom warning]	" + u, m(this.locator));
      },
      error: function(u) {
        console.error("[xmldom error]	" + u, m(this.locator));
      },
      fatalError: function(u) {
        throw new c(u, this.locator);
      }
    };
    function m(u) {
      if (u) return `
@` + (u.systemId || "") + "#[line:" + u.lineNumber + ",col:" + u.columnNumber + "]";
    }
    function y(u, h, f) {
      return typeof u == "string" ? u.substr(h, f) : u.length >= h + f || h ? new java.lang.String(u, h, f) + "" : u;
    }
    "endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g, function(u) {
      p.prototype[u] = function() {
        return null;
      };
    });
    function l(u, h) {
      u.currentElement ? u.currentElement.appendChild(h) : u.doc.appendChild(h);
    }
    return un.__DOMHandler = p, un.normalizeLineEndings = s, un.DOMParser = d, un;
  }
  var kc;
  function kp() {
    if (kc) return sn;
    kc = 1;
    var e = ao();
    return sn.DOMImplementation = e.DOMImplementation, sn.XMLSerializer = e.XMLSerializer, sn.DOMParser = Sp().DOMParser, sn;
  }
  var Bc;
  function Bp() {
    if (Bc) return Nn;
    Bc = 1;
    var e = kp(), t = ao();
    function n(r) {
      var a = null, i = new e.DOMParser({
        errorHandler: function(o, s) {
          a = {
            level: o,
            message: s
          };
        }
      }), c = i.parseFromString(r);
      if (a === null) return c;
      throw new Error(a.level + ": " + a.message);
    }
    return Nn.parseFromString = n, Nn.Node = t.Node, Nn;
  }
  var Wc;
  function Wp() {
    if (Wc) return Ni;
    Wc = 1;
    var e = At(), t = Re, n = Bp(), r = Vd(), a = r.Element;
    Ni.readString = c;
    var i = n.Node;
    function c(o, s) {
      s = s || {};
      try {
        var d = n.parseFromString(o, "text/xml");
      } catch (m) {
        return e.reject(m);
      }
      if (d.documentElement.tagName === "parsererror") return e.resolve(new Error(d.documentElement.textContent));
      function b(m) {
        switch (m.nodeType) {
          case i.ELEMENT_NODE:
            return p(m);
          case i.TEXT_NODE:
            return r.text(m.nodeValue);
        }
      }
      function p(m) {
        var y = g(m), l = [];
        t.forEach(m.childNodes, function(h) {
          var f = b(h);
          f && l.push(f);
        });
        var u = {};
        return t.forEach(m.attributes, function(h) {
          u[g(h)] = h.value;
        }), new a(y, u, l);
      }
      function g(m) {
        if (m.namespaceURI) {
          var y = s[m.namespaceURI], l;
          return y ? l = y + ":" : l = "{" + m.namespaceURI + "}", l + m.localName;
        } else return m.localName;
      }
      return e.resolve(b(d.documentElement));
    }
    return Ni;
  }
  var Mi = {}, It = {}, ot = {}, Rc;
  function Ft() {
    return Rc || (Rc = 1, (function() {
      var e, t, n, r, a, i, c, o = [].slice, s = {}.hasOwnProperty;
      e = function() {
        var d, b, p, g, m, y;
        if (y = arguments[0], m = 2 <= arguments.length ? o.call(arguments, 1) : [], a(Object.assign)) Object.assign.apply(null, arguments);
        else for (d = 0, p = m.length; d < p; d++) if (g = m[d], g != null) for (b in g) s.call(g, b) && (y[b] = g[b]);
        return y;
      }, a = function(d) {
        return !!d && Object.prototype.toString.call(d) === "[object Function]";
      }, i = function(d) {
        var b;
        return !!d && ((b = typeof d) == "function" || b === "object");
      }, n = function(d) {
        return a(Array.isArray) ? Array.isArray(d) : Object.prototype.toString.call(d) === "[object Array]";
      }, r = function(d) {
        var b;
        if (n(d)) return !d.length;
        for (b in d) if (s.call(d, b)) return false;
        return true;
      }, c = function(d) {
        var b, p;
        return i(d) && (p = Object.getPrototypeOf(d)) && (b = p.constructor) && typeof b == "function" && b instanceof b && Function.prototype.toString.call(b) === Function.prototype.toString.call(Object);
      }, t = function(d) {
        return a(d.valueOf) ? d.valueOf() : d;
      }, ot.assign = e, ot.isFunction = a, ot.isObject = i, ot.isArray = n, ot.isEmpty = r, ot.isPlainObject = c, ot.getValue = t;
    }).call(ot)), ot;
  }
  var Xn = {
    exports: {}
  }, Vn = {
    exports: {}
  }, Hn = {
    exports: {}
  }, Gn = {
    exports: {}
  }, Rp = Gn.exports, Ic;
  function Hd() {
    return Ic || (Ic = 1, (function() {
      Gn.exports = function() {
        function e(t, n, r) {
          if (this.options = t.options, this.stringify = t.stringify, this.parent = t, n == null) throw new Error("Missing attribute name. " + this.debugInfo(n));
          if (r == null) throw new Error("Missing attribute value. " + this.debugInfo(n));
          this.name = this.stringify.attName(n), this.value = this.stringify.attValue(r);
        }
        return e.prototype.clone = function() {
          return Object.create(this);
        }, e.prototype.toString = function(t) {
          return this.options.writer.set(t).attribute(this);
        }, e.prototype.debugInfo = function(t) {
          return t = t || this.name, t == null ? "parent: <" + this.parent.name + ">" : "attribute: {" + t + "}, parent: <" + this.parent.name + ">";
        }, e;
      }();
    }).call(Rp)), Gn.exports;
  }
  var Ip = Hn.exports, Oc;
  function Rr() {
    return Oc || (Oc = 1, (function() {
      var e, t, n, r, a, i, c = function(s, d) {
        for (var b in d) o.call(d, b) && (s[b] = d[b]);
        function p() {
          this.constructor = s;
        }
        return p.prototype = d.prototype, s.prototype = new p(), s.__super__ = d.prototype, s;
      }, o = {}.hasOwnProperty;
      i = Ft(), a = i.isObject, r = i.isFunction, n = i.getValue, t = Ge(), e = Hd(), Hn.exports = function(s) {
        c(d, s);
        function d(b, p, g) {
          if (d.__super__.constructor.call(this, b), p == null) throw new Error("Missing element name. " + this.debugInfo());
          this.name = this.stringify.eleName(p), this.attributes = {}, g != null && this.attribute(g), b.isDocument && (this.isRoot = true, this.documentObject = b, b.rootObject = this);
        }
        return d.prototype.clone = function() {
          var b, p, g, m;
          g = Object.create(this), g.isRoot && (g.documentObject = null), g.attributes = {}, m = this.attributes;
          for (p in m) o.call(m, p) && (b = m[p], g.attributes[p] = b.clone());
          return g.children = [], this.children.forEach(function(y) {
            var l;
            return l = y.clone(), l.parent = g, g.children.push(l);
          }), g;
        }, d.prototype.attribute = function(b, p) {
          var g, m;
          if (b != null && (b = n(b)), a(b)) for (g in b) o.call(b, g) && (m = b[g], this.attribute(g, m));
          else r(p) && (p = p.apply()), (!this.options.skipNullAttributes || p != null) && (this.attributes[b] = new e(this, b, p));
          return this;
        }, d.prototype.removeAttribute = function(b) {
          var p, g, m;
          if (b == null) throw new Error("Missing attribute name. " + this.debugInfo());
          if (b = n(b), Array.isArray(b)) for (g = 0, m = b.length; g < m; g++) p = b[g], delete this.attributes[p];
          else delete this.attributes[b];
          return this;
        }, d.prototype.toString = function(b) {
          return this.options.writer.set(b).element(this);
        }, d.prototype.att = function(b, p) {
          return this.attribute(b, p);
        }, d.prototype.a = function(b, p) {
          return this.attribute(b, p);
        }, d;
      }(t);
    }).call(Ip)), Hn.exports;
  }
  var Zn = {
    exports: {}
  }, Op = Zn.exports, Nc;
  function Ir() {
    return Nc || (Nc = 1, (function() {
      var e, t = function(r, a) {
        for (var i in a) n.call(a, i) && (r[i] = a[i]);
        function c() {
          this.constructor = r;
        }
        return c.prototype = a.prototype, r.prototype = new c(), r.__super__ = a.prototype, r;
      }, n = {}.hasOwnProperty;
      e = Ge(), Zn.exports = function(r) {
        t(a, r);
        function a(i, c) {
          if (a.__super__.constructor.call(this, i), c == null) throw new Error("Missing CDATA text. " + this.debugInfo());
          this.text = this.stringify.cdata(c);
        }
        return a.prototype.clone = function() {
          return Object.create(this);
        }, a.prototype.toString = function(i) {
          return this.options.writer.set(i).cdata(this);
        }, a;
      }(e);
    }).call(Op)), Zn.exports;
  }
  var Kn = {
    exports: {}
  }, Np = Kn.exports, Lc;
  function Or() {
    return Lc || (Lc = 1, (function() {
      var e, t = function(r, a) {
        for (var i in a) n.call(a, i) && (r[i] = a[i]);
        function c() {
          this.constructor = r;
        }
        return c.prototype = a.prototype, r.prototype = new c(), r.__super__ = a.prototype, r;
      }, n = {}.hasOwnProperty;
      e = Ge(), Kn.exports = function(r) {
        t(a, r);
        function a(i, c) {
          if (a.__super__.constructor.call(this, i), c == null) throw new Error("Missing comment text. " + this.debugInfo());
          this.text = this.stringify.comment(c);
        }
        return a.prototype.clone = function() {
          return Object.create(this);
        }, a.prototype.toString = function(i) {
          return this.options.writer.set(i).comment(this);
        }, a;
      }(e);
    }).call(Np)), Kn.exports;
  }
  var Yn = {
    exports: {}
  }, Lp = Yn.exports, Mc;
  function Nr() {
    return Mc || (Mc = 1, (function() {
      var e, t, n = function(a, i) {
        for (var c in i) r.call(i, c) && (a[c] = i[c]);
        function o() {
          this.constructor = a;
        }
        return o.prototype = i.prototype, a.prototype = new o(), a.__super__ = i.prototype, a;
      }, r = {}.hasOwnProperty;
      t = Ft().isObject, e = Ge(), Yn.exports = function(a) {
        n(i, a);
        function i(c, o, s, d) {
          var b;
          i.__super__.constructor.call(this, c), t(o) && (b = o, o = b.version, s = b.encoding, d = b.standalone), o || (o = "1.0"), this.version = this.stringify.xmlVersion(o), s != null && (this.encoding = this.stringify.xmlEncoding(s)), d != null && (this.standalone = this.stringify.xmlStandalone(d));
        }
        return i.prototype.toString = function(c) {
          return this.options.writer.set(c).declaration(this);
        }, i;
      }(e);
    }).call(Lp)), Yn.exports;
  }
  var Qn = {
    exports: {}
  }, Jn = {
    exports: {}
  }, Mp = Jn.exports, qc;
  function Lr() {
    return qc || (qc = 1, (function() {
      var e, t = function(r, a) {
        for (var i in a) n.call(a, i) && (r[i] = a[i]);
        function c() {
          this.constructor = r;
        }
        return c.prototype = a.prototype, r.prototype = new c(), r.__super__ = a.prototype, r;
      }, n = {}.hasOwnProperty;
      e = Ge(), Jn.exports = function(r) {
        t(a, r);
        function a(i, c, o, s, d, b) {
          if (a.__super__.constructor.call(this, i), c == null) throw new Error("Missing DTD element name. " + this.debugInfo());
          if (o == null) throw new Error("Missing DTD attribute name. " + this.debugInfo(c));
          if (!s) throw new Error("Missing DTD attribute type. " + this.debugInfo(c));
          if (!d) throw new Error("Missing DTD attribute default. " + this.debugInfo(c));
          if (d.indexOf("#") !== 0 && (d = "#" + d), !d.match(/^(#REQUIRED|#IMPLIED|#FIXED|#DEFAULT)$/)) throw new Error("Invalid default value type; expected: #REQUIRED, #IMPLIED, #FIXED or #DEFAULT. " + this.debugInfo(c));
          if (b && !d.match(/^(#FIXED|#DEFAULT)$/)) throw new Error("Default value only applies to #FIXED or #DEFAULT. " + this.debugInfo(c));
          this.elementName = this.stringify.eleName(c), this.attributeName = this.stringify.attName(o), this.attributeType = this.stringify.dtdAttType(s), this.defaultValue = this.stringify.dtdAttDefault(b), this.defaultValueType = d;
        }
        return a.prototype.toString = function(i) {
          return this.options.writer.set(i).dtdAttList(this);
        }, a;
      }(e);
    }).call(Mp)), Jn.exports;
  }
  var er = {
    exports: {}
  }, qp = er.exports, Pc;
  function Mr() {
    return Pc || (Pc = 1, (function() {
      var e, t, n = function(a, i) {
        for (var c in i) r.call(i, c) && (a[c] = i[c]);
        function o() {
          this.constructor = a;
        }
        return o.prototype = i.prototype, a.prototype = new o(), a.__super__ = i.prototype, a;
      }, r = {}.hasOwnProperty;
      t = Ft().isObject, e = Ge(), er.exports = function(a) {
        n(i, a);
        function i(c, o, s, d) {
          if (i.__super__.constructor.call(this, c), s == null) throw new Error("Missing DTD entity name. " + this.debugInfo(s));
          if (d == null) throw new Error("Missing DTD entity value. " + this.debugInfo(s));
          if (this.pe = !!o, this.name = this.stringify.eleName(s), !t(d)) this.value = this.stringify.dtdEntityValue(d);
          else {
            if (!d.pubID && !d.sysID) throw new Error("Public and/or system identifiers are required for an external entity. " + this.debugInfo(s));
            if (d.pubID && !d.sysID) throw new Error("System identifier is required for a public external entity. " + this.debugInfo(s));
            if (d.pubID != null && (this.pubID = this.stringify.dtdPubID(d.pubID)), d.sysID != null && (this.sysID = this.stringify.dtdSysID(d.sysID)), d.nData != null && (this.nData = this.stringify.dtdNData(d.nData)), this.pe && this.nData) throw new Error("Notation declaration is not allowed in a parameter entity. " + this.debugInfo(s));
          }
        }
        return i.prototype.toString = function(c) {
          return this.options.writer.set(c).dtdEntity(this);
        }, i;
      }(e);
    }).call(qp)), er.exports;
  }
  var tr = {
    exports: {}
  }, Pp = tr.exports, jc;
  function qr() {
    return jc || (jc = 1, (function() {
      var e, t = function(r, a) {
        for (var i in a) n.call(a, i) && (r[i] = a[i]);
        function c() {
          this.constructor = r;
        }
        return c.prototype = a.prototype, r.prototype = new c(), r.__super__ = a.prototype, r;
      }, n = {}.hasOwnProperty;
      e = Ge(), tr.exports = function(r) {
        t(a, r);
        function a(i, c, o) {
          if (a.__super__.constructor.call(this, i), c == null) throw new Error("Missing DTD element name. " + this.debugInfo());
          o || (o = "(#PCDATA)"), Array.isArray(o) && (o = "(" + o.join(",") + ")"), this.name = this.stringify.eleName(c), this.value = this.stringify.dtdElementValue(o);
        }
        return a.prototype.toString = function(i) {
          return this.options.writer.set(i).dtdElement(this);
        }, a;
      }(e);
    }).call(Pp)), tr.exports;
  }
  var nr = {
    exports: {}
  }, jp = nr.exports, $c;
  function Pr() {
    return $c || ($c = 1, (function() {
      var e, t = function(r, a) {
        for (var i in a) n.call(a, i) && (r[i] = a[i]);
        function c() {
          this.constructor = r;
        }
        return c.prototype = a.prototype, r.prototype = new c(), r.__super__ = a.prototype, r;
      }, n = {}.hasOwnProperty;
      e = Ge(), nr.exports = function(r) {
        t(a, r);
        function a(i, c, o) {
          if (a.__super__.constructor.call(this, i), c == null) throw new Error("Missing DTD notation name. " + this.debugInfo(c));
          if (!o.pubID && !o.sysID) throw new Error("Public or system identifiers are required for an external entity. " + this.debugInfo(c));
          this.name = this.stringify.eleName(c), o.pubID != null && (this.pubID = this.stringify.dtdPubID(o.pubID)), o.sysID != null && (this.sysID = this.stringify.dtdSysID(o.sysID));
        }
        return a.prototype.toString = function(i) {
          return this.options.writer.set(i).dtdNotation(this);
        }, a;
      }(e);
    }).call(jp)), nr.exports;
  }
  var $p = Qn.exports, zc;
  function jr() {
    return zc || (zc = 1, (function() {
      var e, t, n, r, a, i, c = function(s, d) {
        for (var b in d) o.call(d, b) && (s[b] = d[b]);
        function p() {
          this.constructor = s;
        }
        return p.prototype = d.prototype, s.prototype = new p(), s.__super__ = d.prototype, s;
      }, o = {}.hasOwnProperty;
      i = Ft().isObject, a = Ge(), e = Lr(), n = Mr(), t = qr(), r = Pr(), Qn.exports = function(s) {
        c(d, s);
        function d(b, p, g) {
          var m, y;
          d.__super__.constructor.call(this, b), this.name = "!DOCTYPE", this.documentObject = b, i(p) && (m = p, p = m.pubID, g = m.sysID), g == null && (y = [
            p,
            g
          ], g = y[0], p = y[1]), p != null && (this.pubID = this.stringify.dtdPubID(p)), g != null && (this.sysID = this.stringify.dtdSysID(g));
        }
        return d.prototype.element = function(b, p) {
          var g;
          return g = new t(this, b, p), this.children.push(g), this;
        }, d.prototype.attList = function(b, p, g, m, y) {
          var l;
          return l = new e(this, b, p, g, m, y), this.children.push(l), this;
        }, d.prototype.entity = function(b, p) {
          var g;
          return g = new n(this, false, b, p), this.children.push(g), this;
        }, d.prototype.pEntity = function(b, p) {
          var g;
          return g = new n(this, true, b, p), this.children.push(g), this;
        }, d.prototype.notation = function(b, p) {
          var g;
          return g = new r(this, b, p), this.children.push(g), this;
        }, d.prototype.toString = function(b) {
          return this.options.writer.set(b).docType(this);
        }, d.prototype.ele = function(b, p) {
          return this.element(b, p);
        }, d.prototype.att = function(b, p, g, m, y) {
          return this.attList(b, p, g, m, y);
        }, d.prototype.ent = function(b, p) {
          return this.entity(b, p);
        }, d.prototype.pent = function(b, p) {
          return this.pEntity(b, p);
        }, d.prototype.not = function(b, p) {
          return this.notation(b, p);
        }, d.prototype.up = function() {
          return this.root() || this.documentObject;
        }, d;
      }(a);
    }).call($p)), Qn.exports;
  }
  var rr = {
    exports: {}
  }, zp = rr.exports, Xc;
  function $r() {
    return Xc || (Xc = 1, (function() {
      var e, t = function(r, a) {
        for (var i in a) n.call(a, i) && (r[i] = a[i]);
        function c() {
          this.constructor = r;
        }
        return c.prototype = a.prototype, r.prototype = new c(), r.__super__ = a.prototype, r;
      }, n = {}.hasOwnProperty;
      e = Ge(), rr.exports = function(r) {
        t(a, r);
        function a(i, c) {
          if (a.__super__.constructor.call(this, i), c == null) throw new Error("Missing raw text. " + this.debugInfo());
          this.value = this.stringify.raw(c);
        }
        return a.prototype.clone = function() {
          return Object.create(this);
        }, a.prototype.toString = function(i) {
          return this.options.writer.set(i).raw(this);
        }, a;
      }(e);
    }).call(zp)), rr.exports;
  }
  var ir = {
    exports: {}
  }, Xp = ir.exports, Vc;
  function zr() {
    return Vc || (Vc = 1, (function() {
      var e, t = function(r, a) {
        for (var i in a) n.call(a, i) && (r[i] = a[i]);
        function c() {
          this.constructor = r;
        }
        return c.prototype = a.prototype, r.prototype = new c(), r.__super__ = a.prototype, r;
      }, n = {}.hasOwnProperty;
      e = Ge(), ir.exports = function(r) {
        t(a, r);
        function a(i, c) {
          if (a.__super__.constructor.call(this, i), c == null) throw new Error("Missing element text. " + this.debugInfo());
          this.value = this.stringify.eleText(c);
        }
        return a.prototype.clone = function() {
          return Object.create(this);
        }, a.prototype.toString = function(i) {
          return this.options.writer.set(i).text(this);
        }, a;
      }(e);
    }).call(Xp)), ir.exports;
  }
  var ar = {
    exports: {}
  }, Vp = ar.exports, Hc;
  function Xr() {
    return Hc || (Hc = 1, (function() {
      var e, t = function(r, a) {
        for (var i in a) n.call(a, i) && (r[i] = a[i]);
        function c() {
          this.constructor = r;
        }
        return c.prototype = a.prototype, r.prototype = new c(), r.__super__ = a.prototype, r;
      }, n = {}.hasOwnProperty;
      e = Ge(), ar.exports = function(r) {
        t(a, r);
        function a(i, c, o) {
          if (a.__super__.constructor.call(this, i), c == null) throw new Error("Missing instruction target. " + this.debugInfo());
          this.target = this.stringify.insTarget(c), o && (this.value = this.stringify.insValue(o));
        }
        return a.prototype.clone = function() {
          return Object.create(this);
        }, a.prototype.toString = function(i) {
          return this.options.writer.set(i).processingInstruction(this);
        }, a;
      }(e);
    }).call(Vp)), ar.exports;
  }
  var or = {
    exports: {}
  }, Hp = or.exports, Gc;
  function oo() {
    return Gc || (Gc = 1, (function() {
      var e, t = function(r, a) {
        for (var i in a) n.call(a, i) && (r[i] = a[i]);
        function c() {
          this.constructor = r;
        }
        return c.prototype = a.prototype, r.prototype = new c(), r.__super__ = a.prototype, r;
      }, n = {}.hasOwnProperty;
      e = Ge(), or.exports = function(r) {
        t(a, r);
        function a(i) {
          a.__super__.constructor.call(this, i), this.isDummy = true;
        }
        return a.prototype.clone = function() {
          return Object.create(this);
        }, a.prototype.toString = function(i) {
          return "";
        }, a;
      }(e);
    }).call(Hp)), or.exports;
  }
  var Gp = Vn.exports, Zc;
  function Ge() {
    return Zc || (Zc = 1, (function() {
      var e, t, n, r, a, i, c, o, s, d, b, p, g, m, y = {}.hasOwnProperty;
      m = Ft(), g = m.isObject, p = m.isFunction, b = m.isEmpty, d = m.getValue, i = null, e = null, t = null, n = null, r = null, o = null, s = null, c = null, a = null, Vn.exports = function() {
        function l(u) {
          this.parent = u, this.parent && (this.options = this.parent.options, this.stringify = this.parent.stringify), this.children = [], i || (i = Rr(), e = Ir(), t = Or(), n = Nr(), r = jr(), o = $r(), s = zr(), c = Xr(), a = oo());
        }
        return l.prototype.element = function(u, h, f) {
          var v, w, x, U, E, F, C, R, z, T, B;
          if (F = null, h === null && f == null && (z = [
            {},
            null
          ], h = z[0], f = z[1]), h == null && (h = {}), h = d(h), g(h) || (T = [
            h,
            f
          ], f = T[0], h = T[1]), u != null && (u = d(u)), Array.isArray(u)) for (x = 0, C = u.length; x < C; x++) w = u[x], F = this.element(w);
          else if (p(u)) F = this.element(u.apply());
          else if (g(u)) {
            for (E in u) if (y.call(u, E)) if (B = u[E], p(B) && (B = B.apply()), g(B) && b(B) && (B = null), !this.options.ignoreDecorators && this.stringify.convertAttKey && E.indexOf(this.stringify.convertAttKey) === 0) F = this.attribute(E.substr(this.stringify.convertAttKey.length), B);
            else if (!this.options.separateArrayItems && Array.isArray(B)) for (U = 0, R = B.length; U < R; U++) w = B[U], v = {}, v[E] = w, F = this.element(v);
            else g(B) ? (F = this.element(E), F.element(B)) : F = this.element(E, B);
          } else this.options.skipNullNodes && f === null ? F = this.dummy() : !this.options.ignoreDecorators && this.stringify.convertTextKey && u.indexOf(this.stringify.convertTextKey) === 0 ? F = this.text(f) : !this.options.ignoreDecorators && this.stringify.convertCDataKey && u.indexOf(this.stringify.convertCDataKey) === 0 ? F = this.cdata(f) : !this.options.ignoreDecorators && this.stringify.convertCommentKey && u.indexOf(this.stringify.convertCommentKey) === 0 ? F = this.comment(f) : !this.options.ignoreDecorators && this.stringify.convertRawKey && u.indexOf(this.stringify.convertRawKey) === 0 ? F = this.raw(f) : !this.options.ignoreDecorators && this.stringify.convertPIKey && u.indexOf(this.stringify.convertPIKey) === 0 ? F = this.instruction(u.substr(this.stringify.convertPIKey.length), f) : F = this.node(u, h, f);
          if (F == null) throw new Error("Could not create any elements with: " + u + ". " + this.debugInfo());
          return F;
        }, l.prototype.insertBefore = function(u, h, f) {
          var v, w, x;
          if (this.isRoot) throw new Error("Cannot insert elements at root level. " + this.debugInfo(u));
          return w = this.parent.children.indexOf(this), x = this.parent.children.splice(w), v = this.parent.element(u, h, f), Array.prototype.push.apply(this.parent.children, x), v;
        }, l.prototype.insertAfter = function(u, h, f) {
          var v, w, x;
          if (this.isRoot) throw new Error("Cannot insert elements at root level. " + this.debugInfo(u));
          return w = this.parent.children.indexOf(this), x = this.parent.children.splice(w + 1), v = this.parent.element(u, h, f), Array.prototype.push.apply(this.parent.children, x), v;
        }, l.prototype.remove = function() {
          var u;
          if (this.isRoot) throw new Error("Cannot remove the root element. " + this.debugInfo());
          return u = this.parent.children.indexOf(this), [].splice.apply(this.parent.children, [
            u,
            u - u + 1
          ].concat([])), this.parent;
        }, l.prototype.node = function(u, h, f) {
          var v, w;
          return u != null && (u = d(u)), h || (h = {}), h = d(h), g(h) || (w = [
            h,
            f
          ], f = w[0], h = w[1]), v = new i(this, u, h), f != null && v.text(f), this.children.push(v), v;
        }, l.prototype.text = function(u) {
          var h;
          return h = new s(this, u), this.children.push(h), this;
        }, l.prototype.cdata = function(u) {
          var h;
          return h = new e(this, u), this.children.push(h), this;
        }, l.prototype.comment = function(u) {
          var h;
          return h = new t(this, u), this.children.push(h), this;
        }, l.prototype.commentBefore = function(u) {
          var h, f;
          return h = this.parent.children.indexOf(this), f = this.parent.children.splice(h), this.parent.comment(u), Array.prototype.push.apply(this.parent.children, f), this;
        }, l.prototype.commentAfter = function(u) {
          var h, f;
          return h = this.parent.children.indexOf(this), f = this.parent.children.splice(h + 1), this.parent.comment(u), Array.prototype.push.apply(this.parent.children, f), this;
        }, l.prototype.raw = function(u) {
          var h;
          return h = new o(this, u), this.children.push(h), this;
        }, l.prototype.dummy = function() {
          var u;
          return u = new a(this), this.children.push(u), u;
        }, l.prototype.instruction = function(u, h) {
          var f, v, w, x, U;
          if (u != null && (u = d(u)), h != null && (h = d(h)), Array.isArray(u)) for (x = 0, U = u.length; x < U; x++) f = u[x], this.instruction(f);
          else if (g(u)) for (f in u) y.call(u, f) && (v = u[f], this.instruction(f, v));
          else p(h) && (h = h.apply()), w = new c(this, u, h), this.children.push(w);
          return this;
        }, l.prototype.instructionBefore = function(u, h) {
          var f, v;
          return f = this.parent.children.indexOf(this), v = this.parent.children.splice(f), this.parent.instruction(u, h), Array.prototype.push.apply(this.parent.children, v), this;
        }, l.prototype.instructionAfter = function(u, h) {
          var f, v;
          return f = this.parent.children.indexOf(this), v = this.parent.children.splice(f + 1), this.parent.instruction(u, h), Array.prototype.push.apply(this.parent.children, v), this;
        }, l.prototype.declaration = function(u, h, f) {
          var v, w;
          return v = this.document(), w = new n(v, u, h, f), v.children[0] instanceof n ? v.children[0] = w : v.children.unshift(w), v.root() || v;
        }, l.prototype.doctype = function(u, h) {
          var f, v, w, x, U, E, F, C, R, z;
          for (v = this.document(), w = new r(v, u, h), R = v.children, x = U = 0, F = R.length; U < F; x = ++U) if (f = R[x], f instanceof r) return v.children[x] = w, w;
          for (z = v.children, x = E = 0, C = z.length; E < C; x = ++E) if (f = z[x], f.isRoot) return v.children.splice(x, 0, w), w;
          return v.children.push(w), w;
        }, l.prototype.up = function() {
          if (this.isRoot) throw new Error("The root node has no parent. Use doc() if you need to get the document object.");
          return this.parent;
        }, l.prototype.root = function() {
          var u;
          for (u = this; u; ) {
            if (u.isDocument) return u.rootObject;
            if (u.isRoot) return u;
            u = u.parent;
          }
        }, l.prototype.document = function() {
          var u;
          for (u = this; u; ) {
            if (u.isDocument) return u;
            u = u.parent;
          }
        }, l.prototype.end = function(u) {
          return this.document().end(u);
        }, l.prototype.prev = function() {
          var u;
          for (u = this.parent.children.indexOf(this); u > 0 && this.parent.children[u - 1].isDummy; ) u = u - 1;
          if (u < 1) throw new Error("Already at the first node. " + this.debugInfo());
          return this.parent.children[u - 1];
        }, l.prototype.next = function() {
          var u;
          for (u = this.parent.children.indexOf(this); u < this.parent.children.length - 1 && this.parent.children[u + 1].isDummy; ) u = u + 1;
          if (u === -1 || u === this.parent.children.length - 1) throw new Error("Already at the last node. " + this.debugInfo());
          return this.parent.children[u + 1];
        }, l.prototype.importDocument = function(u) {
          var h;
          return h = u.root().clone(), h.parent = this, h.isRoot = false, this.children.push(h), this;
        }, l.prototype.debugInfo = function(u) {
          var h, f;
          return u = u || this.name, u == null && !((h = this.parent) != null && h.name) ? "" : u == null ? "parent: <" + this.parent.name + ">" : (f = this.parent) != null && f.name ? "node: <" + u + ">, parent: <" + this.parent.name + ">" : "node: <" + u + ">";
        }, l.prototype.ele = function(u, h, f) {
          return this.element(u, h, f);
        }, l.prototype.nod = function(u, h, f) {
          return this.node(u, h, f);
        }, l.prototype.txt = function(u) {
          return this.text(u);
        }, l.prototype.dat = function(u) {
          return this.cdata(u);
        }, l.prototype.com = function(u) {
          return this.comment(u);
        }, l.prototype.ins = function(u, h) {
          return this.instruction(u, h);
        }, l.prototype.doc = function() {
          return this.document();
        }, l.prototype.dec = function(u, h, f) {
          return this.declaration(u, h, f);
        }, l.prototype.dtd = function(u, h) {
          return this.doctype(u, h);
        }, l.prototype.e = function(u, h, f) {
          return this.element(u, h, f);
        }, l.prototype.n = function(u, h, f) {
          return this.node(u, h, f);
        }, l.prototype.t = function(u) {
          return this.text(u);
        }, l.prototype.d = function(u) {
          return this.cdata(u);
        }, l.prototype.c = function(u) {
          return this.comment(u);
        }, l.prototype.r = function(u) {
          return this.raw(u);
        }, l.prototype.i = function(u, h) {
          return this.instruction(u, h);
        }, l.prototype.u = function() {
          return this.up();
        }, l.prototype.importXMLBuilder = function(u) {
          return this.importDocument(u);
        }, l;
      }();
    }).call(Gp)), Vn.exports;
  }
  var cr = {
    exports: {}
  }, Zp = cr.exports, Kc;
  function Gd() {
    return Kc || (Kc = 1, (function() {
      var e = function(n, r) {
        return function() {
          return n.apply(r, arguments);
        };
      }, t = {}.hasOwnProperty;
      cr.exports = function() {
        function n(r) {
          this.assertLegalChar = e(this.assertLegalChar, this);
          var a, i, c;
          r || (r = {}), this.noDoubleEncoding = r.noDoubleEncoding, i = r.stringify || {};
          for (a in i) t.call(i, a) && (c = i[a], this[a] = c);
        }
        return n.prototype.eleName = function(r) {
          return r = "" + r || "", this.assertLegalChar(r);
        }, n.prototype.eleText = function(r) {
          return r = "" + r || "", this.assertLegalChar(this.elEscape(r));
        }, n.prototype.cdata = function(r) {
          return r = "" + r || "", r = r.replace("]]>", "]]]]><![CDATA[>"), this.assertLegalChar(r);
        }, n.prototype.comment = function(r) {
          if (r = "" + r || "", r.match(/--/)) throw new Error("Comment text cannot contain double-hypen: " + r);
          return this.assertLegalChar(r);
        }, n.prototype.raw = function(r) {
          return "" + r || "";
        }, n.prototype.attName = function(r) {
          return r = "" + r || "";
        }, n.prototype.attValue = function(r) {
          return r = "" + r || "", this.attEscape(r);
        }, n.prototype.insTarget = function(r) {
          return "" + r || "";
        }, n.prototype.insValue = function(r) {
          if (r = "" + r || "", r.match(/\?>/)) throw new Error("Invalid processing instruction value: " + r);
          return r;
        }, n.prototype.xmlVersion = function(r) {
          if (r = "" + r || "", !r.match(/1\.[0-9]+/)) throw new Error("Invalid version number: " + r);
          return r;
        }, n.prototype.xmlEncoding = function(r) {
          if (r = "" + r || "", !r.match(/^[A-Za-z](?:[A-Za-z0-9._-])*$/)) throw new Error("Invalid encoding: " + r);
          return r;
        }, n.prototype.xmlStandalone = function(r) {
          return r ? "yes" : "no";
        }, n.prototype.dtdPubID = function(r) {
          return "" + r || "";
        }, n.prototype.dtdSysID = function(r) {
          return "" + r || "";
        }, n.prototype.dtdElementValue = function(r) {
          return "" + r || "";
        }, n.prototype.dtdAttType = function(r) {
          return "" + r || "";
        }, n.prototype.dtdAttDefault = function(r) {
          return r != null ? "" + r || "" : r;
        }, n.prototype.dtdEntityValue = function(r) {
          return "" + r || "";
        }, n.prototype.dtdNData = function(r) {
          return "" + r || "";
        }, n.prototype.convertAttKey = "@", n.prototype.convertPIKey = "?", n.prototype.convertTextKey = "#text", n.prototype.convertCDataKey = "#cdata", n.prototype.convertCommentKey = "#comment", n.prototype.convertRawKey = "#raw", n.prototype.assertLegalChar = function(r) {
          var a;
          if (a = r.match(/[\0\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/), a) throw new Error("Invalid character in string: " + r + " at index " + a.index);
          return r;
        }, n.prototype.elEscape = function(r) {
          var a;
          return a = this.noDoubleEncoding ? /(?!&\S+;)&/g : /&/g, r.replace(a, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\r/g, "&#xD;");
        }, n.prototype.attEscape = function(r) {
          var a;
          return a = this.noDoubleEncoding ? /(?!&\S+;)&/g : /&/g, r.replace(a, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;").replace(/\t/g, "&#x9;").replace(/\n/g, "&#xA;").replace(/\r/g, "&#xD;");
        }, n;
      }();
    }).call(Zp)), cr.exports;
  }
  var sr = {
    exports: {}
  }, ur = {
    exports: {}
  }, Kp = ur.exports, Yc;
  function Zd() {
    return Yc || (Yc = 1, (function() {
      var e = {}.hasOwnProperty;
      ur.exports = function() {
        function t(n) {
          var r, a, i, c, o, s, d, b, p;
          n || (n = {}), this.pretty = n.pretty || false, this.allowEmpty = (a = n.allowEmpty) != null ? a : false, this.pretty ? (this.indent = (i = n.indent) != null ? i : "  ", this.newline = (c = n.newline) != null ? c : `
`, this.offset = (o = n.offset) != null ? o : 0, this.dontprettytextnodes = (s = n.dontprettytextnodes) != null ? s : 0) : (this.indent = "", this.newline = "", this.offset = 0, this.dontprettytextnodes = 0), this.spacebeforeslash = (d = n.spacebeforeslash) != null ? d : "", this.spacebeforeslash === true && (this.spacebeforeslash = " "), this.newlinedefault = this.newline, this.prettydefault = this.pretty, b = n.writer || {};
          for (r in b) e.call(b, r) && (p = b[r], this[r] = p);
        }
        return t.prototype.set = function(n) {
          var r, a, i;
          n || (n = {}), "pretty" in n && (this.pretty = n.pretty), "allowEmpty" in n && (this.allowEmpty = n.allowEmpty), this.pretty ? (this.indent = "indent" in n ? n.indent : "  ", this.newline = "newline" in n ? n.newline : `
`, this.offset = "offset" in n ? n.offset : 0, this.dontprettytextnodes = "dontprettytextnodes" in n ? n.dontprettytextnodes : 0) : (this.indent = "", this.newline = "", this.offset = 0, this.dontprettytextnodes = 0), this.spacebeforeslash = "spacebeforeslash" in n ? n.spacebeforeslash : "", this.spacebeforeslash === true && (this.spacebeforeslash = " "), this.newlinedefault = this.newline, this.prettydefault = this.pretty, a = n.writer || {};
          for (r in a) e.call(a, r) && (i = a[r], this[r] = i);
          return this;
        }, t.prototype.space = function(n) {
          var r;
          return this.pretty ? (r = (n || 0) + this.offset + 1, r > 0 ? new Array(r).join(this.indent) : "") : "";
        }, t;
      }();
    }).call(Kp)), ur.exports;
  }
  var Yp = sr.exports, Qc;
  function co() {
    return Qc || (Qc = 1, (function() {
      var e, t, n, r, a, i, c, o, s, d, b, p, g, m, y = function(u, h) {
        for (var f in h) l.call(h, f) && (u[f] = h[f]);
        function v() {
          this.constructor = u;
        }
        return v.prototype = h.prototype, u.prototype = new v(), u.__super__ = h.prototype, u;
      }, l = {}.hasOwnProperty;
      c = Nr(), o = jr(), e = Ir(), t = Or(), d = Rr(), p = $r(), g = zr(), b = Xr(), s = oo(), n = Lr(), r = qr(), a = Mr(), i = Pr(), m = Zd(), sr.exports = function(u) {
        y(h, u);
        function h(f) {
          h.__super__.constructor.call(this, f);
        }
        return h.prototype.document = function(f) {
          var v, w, x, U, E;
          for (this.textispresent = false, U = "", E = f.children, w = 0, x = E.length; w < x; w++) v = E[w], !(v instanceof s) && (U += (function() {
            switch (false) {
              case !(v instanceof c):
                return this.declaration(v);
              case !(v instanceof o):
                return this.docType(v);
              case !(v instanceof t):
                return this.comment(v);
              case !(v instanceof b):
                return this.processingInstruction(v);
              default:
                return this.element(v, 0);
            }
          }).call(this));
          return this.pretty && U.slice(-this.newline.length) === this.newline && (U = U.slice(0, -this.newline.length)), U;
        }, h.prototype.attribute = function(f) {
          return " " + f.name + '="' + f.value + '"';
        }, h.prototype.cdata = function(f, v) {
          return this.space(v) + "<![CDATA[" + f.text + "]]>" + this.newline;
        }, h.prototype.comment = function(f, v) {
          return this.space(v) + "<!-- " + f.text + " -->" + this.newline;
        }, h.prototype.declaration = function(f, v) {
          var w;
          return w = this.space(v), w += '<?xml version="' + f.version + '"', f.encoding != null && (w += ' encoding="' + f.encoding + '"'), f.standalone != null && (w += ' standalone="' + f.standalone + '"'), w += this.spacebeforeslash + "?>", w += this.newline, w;
        }, h.prototype.docType = function(f, v) {
          var w, x, U, E, F;
          if (v || (v = 0), E = this.space(v), E += "<!DOCTYPE " + f.root().name, f.pubID && f.sysID ? E += ' PUBLIC "' + f.pubID + '" "' + f.sysID + '"' : f.sysID && (E += ' SYSTEM "' + f.sysID + '"'), f.children.length > 0) {
            for (E += " [", E += this.newline, F = f.children, x = 0, U = F.length; x < U; x++) w = F[x], E += (function() {
              switch (false) {
                case !(w instanceof n):
                  return this.dtdAttList(w, v + 1);
                case !(w instanceof r):
                  return this.dtdElement(w, v + 1);
                case !(w instanceof a):
                  return this.dtdEntity(w, v + 1);
                case !(w instanceof i):
                  return this.dtdNotation(w, v + 1);
                case !(w instanceof e):
                  return this.cdata(w, v + 1);
                case !(w instanceof t):
                  return this.comment(w, v + 1);
                case !(w instanceof b):
                  return this.processingInstruction(w, v + 1);
                default:
                  throw new Error("Unknown DTD node type: " + w.constructor.name);
              }
            }).call(this);
            E += "]";
          }
          return E += this.spacebeforeslash + ">", E += this.newline, E;
        }, h.prototype.element = function(f, v) {
          var w, x, U, E, F, C, R, z, T, B, _, P, k;
          v || (v = 0), k = false, this.textispresent ? (this.newline = "", this.pretty = false) : (this.newline = this.newlinedefault, this.pretty = this.prettydefault), P = this.space(v), z = "", z += P + "<" + f.name, T = f.attributes;
          for (R in T) l.call(T, R) && (w = T[R], z += this.attribute(w));
          if (f.children.length === 0 || f.children.every(function(I) {
            return I.value === "";
          })) this.allowEmpty ? z += "></" + f.name + ">" + this.newline : z += this.spacebeforeslash + "/>" + this.newline;
          else if (this.pretty && f.children.length === 1 && f.children[0].value != null) z += ">", z += f.children[0].value, z += "</" + f.name + ">" + this.newline;
          else {
            if (this.dontprettytextnodes) {
              for (B = f.children, U = 0, F = B.length; U < F; U++) if (x = B[U], x.value != null) {
                this.textispresent++, k = true;
                break;
              }
            }
            for (this.textispresent && (this.newline = "", this.pretty = false, P = this.space(v)), z += ">" + this.newline, _ = f.children, E = 0, C = _.length; E < C; E++) x = _[E], z += (function() {
              switch (false) {
                case !(x instanceof e):
                  return this.cdata(x, v + 1);
                case !(x instanceof t):
                  return this.comment(x, v + 1);
                case !(x instanceof d):
                  return this.element(x, v + 1);
                case !(x instanceof p):
                  return this.raw(x, v + 1);
                case !(x instanceof g):
                  return this.text(x, v + 1);
                case !(x instanceof b):
                  return this.processingInstruction(x, v + 1);
                case !(x instanceof s):
                  return "";
                default:
                  throw new Error("Unknown XML node type: " + x.constructor.name);
              }
            }).call(this);
            k && this.textispresent--, this.textispresent || (this.newline = this.newlinedefault, this.pretty = this.prettydefault), z += P + "</" + f.name + ">" + this.newline;
          }
          return z;
        }, h.prototype.processingInstruction = function(f, v) {
          var w;
          return w = this.space(v) + "<?" + f.target, f.value && (w += " " + f.value), w += this.spacebeforeslash + "?>" + this.newline, w;
        }, h.prototype.raw = function(f, v) {
          return this.space(v) + f.value + this.newline;
        }, h.prototype.text = function(f, v) {
          return this.space(v) + f.value + this.newline;
        }, h.prototype.dtdAttList = function(f, v) {
          var w;
          return w = this.space(v) + "<!ATTLIST " + f.elementName + " " + f.attributeName + " " + f.attributeType, f.defaultValueType !== "#DEFAULT" && (w += " " + f.defaultValueType), f.defaultValue && (w += ' "' + f.defaultValue + '"'), w += this.spacebeforeslash + ">" + this.newline, w;
        }, h.prototype.dtdElement = function(f, v) {
          return this.space(v) + "<!ELEMENT " + f.name + " " + f.value + this.spacebeforeslash + ">" + this.newline;
        }, h.prototype.dtdEntity = function(f, v) {
          var w;
          return w = this.space(v) + "<!ENTITY", f.pe && (w += " %"), w += " " + f.name, f.value ? w += ' "' + f.value + '"' : (f.pubID && f.sysID ? w += ' PUBLIC "' + f.pubID + '" "' + f.sysID + '"' : f.sysID && (w += ' SYSTEM "' + f.sysID + '"'), f.nData && (w += " NDATA " + f.nData)), w += this.spacebeforeslash + ">" + this.newline, w;
        }, h.prototype.dtdNotation = function(f, v) {
          var w;
          return w = this.space(v) + "<!NOTATION " + f.name, f.pubID && f.sysID ? w += ' PUBLIC "' + f.pubID + '" "' + f.sysID + '"' : f.pubID ? w += ' PUBLIC "' + f.pubID + '"' : f.sysID && (w += ' SYSTEM "' + f.sysID + '"'), w += this.spacebeforeslash + ">" + this.newline, w;
        }, h.prototype.openNode = function(f, v) {
          var w, x, U, E;
          if (v || (v = 0), f instanceof d) {
            U = this.space(v) + "<" + f.name, E = f.attributes;
            for (x in E) l.call(E, x) && (w = E[x], U += this.attribute(w));
            return U += (f.children ? ">" : "/>") + this.newline, U;
          } else return U = this.space(v) + "<!DOCTYPE " + f.rootNodeName, f.pubID && f.sysID ? U += ' PUBLIC "' + f.pubID + '" "' + f.sysID + '"' : f.sysID && (U += ' SYSTEM "' + f.sysID + '"'), U += (f.children ? " [" : ">") + this.newline, U;
        }, h.prototype.closeNode = function(f, v) {
          switch (v || (v = 0), false) {
            case !(f instanceof d):
              return this.space(v) + "</" + f.name + ">" + this.newline;
            case !(f instanceof o):
              return this.space(v) + "]>" + this.newline;
          }
        }, h;
      }(m);
    }).call(Yp)), sr.exports;
  }
  var Qp = Xn.exports, Jc;
  function Jp() {
    return Jc || (Jc = 1, (function() {
      var e, t, n, r, a = function(c, o) {
        for (var s in o) i.call(o, s) && (c[s] = o[s]);
        function d() {
          this.constructor = c;
        }
        return d.prototype = o.prototype, c.prototype = new d(), c.__super__ = o.prototype, c;
      }, i = {}.hasOwnProperty;
      r = Ft().isPlainObject, e = Ge(), n = Gd(), t = co(), Xn.exports = function(c) {
        a(o, c);
        function o(s) {
          o.__super__.constructor.call(this, null), this.name = "?xml", s || (s = {}), s.writer || (s.writer = new t()), this.options = s, this.stringify = new n(s), this.isDocument = true;
        }
        return o.prototype.end = function(s) {
          var d;
          return s ? r(s) && (d = s, s = this.options.writer.set(d)) : s = this.options.writer, s.document(this);
        }, o.prototype.toString = function(s) {
          return this.options.writer.set(s).document(this);
        }, o;
      }(e);
    }).call(Qp)), Xn.exports;
  }
  var dr = {
    exports: {}
  }, eg = dr.exports, es;
  function tg() {
    return es || (es = 1, (function() {
      var e, t, n, r, a, i, c, o, s, d, b, p, g, m, y, l, u, h, f, v, w = {}.hasOwnProperty;
      v = Ft(), h = v.isObject, u = v.isFunction, f = v.isPlainObject, l = v.getValue, d = Rr(), t = Ir(), n = Or(), p = $r(), y = zr(), b = Xr(), o = Nr(), s = jr(), r = Lr(), i = Mr(), a = qr(), c = Pr(), e = Hd(), m = Gd(), g = co(), dr.exports = function() {
        function x(U, E, F) {
          var C;
          this.name = "?xml", U || (U = {}), U.writer ? f(U.writer) && (C = U.writer, U.writer = new g(C)) : U.writer = new g(U), this.options = U, this.writer = U.writer, this.stringify = new m(U), this.onDataCallback = E || function() {
          }, this.onEndCallback = F || function() {
          }, this.currentNode = null, this.currentLevel = -1, this.openTags = {}, this.documentStarted = false, this.documentCompleted = false, this.root = null;
        }
        return x.prototype.node = function(U, E, F) {
          var C, R;
          if (U == null) throw new Error("Missing node name.");
          if (this.root && this.currentLevel === -1) throw new Error("Document can only have one root node. " + this.debugInfo(U));
          return this.openCurrent(), U = l(U), E === null && F == null && (C = [
            {},
            null
          ], E = C[0], F = C[1]), E == null && (E = {}), E = l(E), h(E) || (R = [
            E,
            F
          ], F = R[0], E = R[1]), this.currentNode = new d(this, U, E), this.currentNode.children = false, this.currentLevel++, this.openTags[this.currentLevel] = this.currentNode, F != null && this.text(F), this;
        }, x.prototype.element = function(U, E, F) {
          return this.currentNode && this.currentNode instanceof s ? this.dtdElement.apply(this, arguments) : this.node(U, E, F);
        }, x.prototype.attribute = function(U, E) {
          var F, C;
          if (!this.currentNode || this.currentNode.children) throw new Error("att() can only be used immediately after an ele() call in callback mode. " + this.debugInfo(U));
          if (U != null && (U = l(U)), h(U)) for (F in U) w.call(U, F) && (C = U[F], this.attribute(F, C));
          else u(E) && (E = E.apply()), (!this.options.skipNullAttributes || E != null) && (this.currentNode.attributes[U] = new e(this, U, E));
          return this;
        }, x.prototype.text = function(U) {
          var E;
          return this.openCurrent(), E = new y(this, U), this.onData(this.writer.text(E, this.currentLevel + 1), this.currentLevel + 1), this;
        }, x.prototype.cdata = function(U) {
          var E;
          return this.openCurrent(), E = new t(this, U), this.onData(this.writer.cdata(E, this.currentLevel + 1), this.currentLevel + 1), this;
        }, x.prototype.comment = function(U) {
          var E;
          return this.openCurrent(), E = new n(this, U), this.onData(this.writer.comment(E, this.currentLevel + 1), this.currentLevel + 1), this;
        }, x.prototype.raw = function(U) {
          var E;
          return this.openCurrent(), E = new p(this, U), this.onData(this.writer.raw(E, this.currentLevel + 1), this.currentLevel + 1), this;
        }, x.prototype.instruction = function(U, E) {
          var F, C, R, z, T;
          if (this.openCurrent(), U != null && (U = l(U)), E != null && (E = l(E)), Array.isArray(U)) for (F = 0, z = U.length; F < z; F++) C = U[F], this.instruction(C);
          else if (h(U)) for (C in U) w.call(U, C) && (R = U[C], this.instruction(C, R));
          else u(E) && (E = E.apply()), T = new b(this, U, E), this.onData(this.writer.processingInstruction(T, this.currentLevel + 1), this.currentLevel + 1);
          return this;
        }, x.prototype.declaration = function(U, E, F) {
          var C;
          if (this.openCurrent(), this.documentStarted) throw new Error("declaration() must be the first node.");
          return C = new o(this, U, E, F), this.onData(this.writer.declaration(C, this.currentLevel + 1), this.currentLevel + 1), this;
        }, x.prototype.doctype = function(U, E, F) {
          if (this.openCurrent(), U == null) throw new Error("Missing root node name.");
          if (this.root) throw new Error("dtd() must come before the root node.");
          return this.currentNode = new s(this, E, F), this.currentNode.rootNodeName = U, this.currentNode.children = false, this.currentLevel++, this.openTags[this.currentLevel] = this.currentNode, this;
        }, x.prototype.dtdElement = function(U, E) {
          var F;
          return this.openCurrent(), F = new a(this, U, E), this.onData(this.writer.dtdElement(F, this.currentLevel + 1), this.currentLevel + 1), this;
        }, x.prototype.attList = function(U, E, F, C, R) {
          var z;
          return this.openCurrent(), z = new r(this, U, E, F, C, R), this.onData(this.writer.dtdAttList(z, this.currentLevel + 1), this.currentLevel + 1), this;
        }, x.prototype.entity = function(U, E) {
          var F;
          return this.openCurrent(), F = new i(this, false, U, E), this.onData(this.writer.dtdEntity(F, this.currentLevel + 1), this.currentLevel + 1), this;
        }, x.prototype.pEntity = function(U, E) {
          var F;
          return this.openCurrent(), F = new i(this, true, U, E), this.onData(this.writer.dtdEntity(F, this.currentLevel + 1), this.currentLevel + 1), this;
        }, x.prototype.notation = function(U, E) {
          var F;
          return this.openCurrent(), F = new c(this, U, E), this.onData(this.writer.dtdNotation(F, this.currentLevel + 1), this.currentLevel + 1), this;
        }, x.prototype.up = function() {
          if (this.currentLevel < 0) throw new Error("The document node has no parent.");
          return this.currentNode ? (this.currentNode.children ? this.closeNode(this.currentNode) : this.openNode(this.currentNode), this.currentNode = null) : this.closeNode(this.openTags[this.currentLevel]), delete this.openTags[this.currentLevel], this.currentLevel--, this;
        }, x.prototype.end = function() {
          for (; this.currentLevel >= 0; ) this.up();
          return this.onEnd();
        }, x.prototype.openCurrent = function() {
          if (this.currentNode) return this.currentNode.children = true, this.openNode(this.currentNode);
        }, x.prototype.openNode = function(U) {
          if (!U.isOpen) return !this.root && this.currentLevel === 0 && U instanceof d && (this.root = U), this.onData(this.writer.openNode(U, this.currentLevel), this.currentLevel), U.isOpen = true;
        }, x.prototype.closeNode = function(U) {
          if (!U.isClosed) return this.onData(this.writer.closeNode(U, this.currentLevel), this.currentLevel), U.isClosed = true;
        }, x.prototype.onData = function(U, E) {
          return this.documentStarted = true, this.onDataCallback(U, E + 1);
        }, x.prototype.onEnd = function() {
          return this.documentCompleted = true, this.onEndCallback();
        }, x.prototype.debugInfo = function(U) {
          return U == null ? "" : "node: <" + U + ">";
        }, x.prototype.ele = function() {
          return this.element.apply(this, arguments);
        }, x.prototype.nod = function(U, E, F) {
          return this.node(U, E, F);
        }, x.prototype.txt = function(U) {
          return this.text(U);
        }, x.prototype.dat = function(U) {
          return this.cdata(U);
        }, x.prototype.com = function(U) {
          return this.comment(U);
        }, x.prototype.ins = function(U, E) {
          return this.instruction(U, E);
        }, x.prototype.dec = function(U, E, F) {
          return this.declaration(U, E, F);
        }, x.prototype.dtd = function(U, E, F) {
          return this.doctype(U, E, F);
        }, x.prototype.e = function(U, E, F) {
          return this.element(U, E, F);
        }, x.prototype.n = function(U, E, F) {
          return this.node(U, E, F);
        }, x.prototype.t = function(U) {
          return this.text(U);
        }, x.prototype.d = function(U) {
          return this.cdata(U);
        }, x.prototype.c = function(U) {
          return this.comment(U);
        }, x.prototype.r = function(U) {
          return this.raw(U);
        }, x.prototype.i = function(U, E) {
          return this.instruction(U, E);
        }, x.prototype.att = function() {
          return this.currentNode && this.currentNode instanceof s ? this.attList.apply(this, arguments) : this.attribute.apply(this, arguments);
        }, x.prototype.a = function() {
          return this.currentNode && this.currentNode instanceof s ? this.attList.apply(this, arguments) : this.attribute.apply(this, arguments);
        }, x.prototype.ent = function(U, E) {
          return this.entity(U, E);
        }, x.prototype.pent = function(U, E) {
          return this.pEntity(U, E);
        }, x.prototype.not = function(U, E) {
          return this.notation(U, E);
        }, x;
      }();
    }).call(eg)), dr.exports;
  }
  var lr = {
    exports: {}
  }, ng = lr.exports, ts;
  function rg() {
    return ts || (ts = 1, (function() {
      var e, t, n, r, a, i, c, o, s, d, b, p, g, m, y = function(u, h) {
        for (var f in h) l.call(h, f) && (u[f] = h[f]);
        function v() {
          this.constructor = u;
        }
        return v.prototype = h.prototype, u.prototype = new v(), u.__super__ = h.prototype, u;
      }, l = {}.hasOwnProperty;
      c = Nr(), o = jr(), e = Ir(), t = Or(), d = Rr(), p = $r(), g = zr(), b = Xr(), s = oo(), n = Lr(), r = qr(), a = Mr(), i = Pr(), m = Zd(), lr.exports = function(u) {
        y(h, u);
        function h(f, v) {
          h.__super__.constructor.call(this, v), this.stream = f;
        }
        return h.prototype.document = function(f) {
          var v, w, x, U, E, F, C, R;
          for (F = f.children, w = 0, U = F.length; w < U; w++) v = F[w], v.isLastRootNode = false;
          for (f.children[f.children.length - 1].isLastRootNode = true, C = f.children, R = [], x = 0, E = C.length; x < E; x++) if (v = C[x], !(v instanceof s)) switch (false) {
            case !(v instanceof c):
              R.push(this.declaration(v));
              break;
            case !(v instanceof o):
              R.push(this.docType(v));
              break;
            case !(v instanceof t):
              R.push(this.comment(v));
              break;
            case !(v instanceof b):
              R.push(this.processingInstruction(v));
              break;
            default:
              R.push(this.element(v));
          }
          return R;
        }, h.prototype.attribute = function(f) {
          return this.stream.write(" " + f.name + '="' + f.value + '"');
        }, h.prototype.cdata = function(f, v) {
          return this.stream.write(this.space(v) + "<![CDATA[" + f.text + "]]>" + this.endline(f));
        }, h.prototype.comment = function(f, v) {
          return this.stream.write(this.space(v) + "<!-- " + f.text + " -->" + this.endline(f));
        }, h.prototype.declaration = function(f, v) {
          return this.stream.write(this.space(v)), this.stream.write('<?xml version="' + f.version + '"'), f.encoding != null && this.stream.write(' encoding="' + f.encoding + '"'), f.standalone != null && this.stream.write(' standalone="' + f.standalone + '"'), this.stream.write(this.spacebeforeslash + "?>"), this.stream.write(this.endline(f));
        }, h.prototype.docType = function(f, v) {
          var w, x, U, E;
          if (v || (v = 0), this.stream.write(this.space(v)), this.stream.write("<!DOCTYPE " + f.root().name), f.pubID && f.sysID ? this.stream.write(' PUBLIC "' + f.pubID + '" "' + f.sysID + '"') : f.sysID && this.stream.write(' SYSTEM "' + f.sysID + '"'), f.children.length > 0) {
            for (this.stream.write(" ["), this.stream.write(this.endline(f)), E = f.children, x = 0, U = E.length; x < U; x++) switch (w = E[x], false) {
              case !(w instanceof n):
                this.dtdAttList(w, v + 1);
                break;
              case !(w instanceof r):
                this.dtdElement(w, v + 1);
                break;
              case !(w instanceof a):
                this.dtdEntity(w, v + 1);
                break;
              case !(w instanceof i):
                this.dtdNotation(w, v + 1);
                break;
              case !(w instanceof e):
                this.cdata(w, v + 1);
                break;
              case !(w instanceof t):
                this.comment(w, v + 1);
                break;
              case !(w instanceof b):
                this.processingInstruction(w, v + 1);
                break;
              default:
                throw new Error("Unknown DTD node type: " + w.constructor.name);
            }
            this.stream.write("]");
          }
          return this.stream.write(this.spacebeforeslash + ">"), this.stream.write(this.endline(f));
        }, h.prototype.element = function(f, v) {
          var w, x, U, E, F, C, R, z;
          v || (v = 0), z = this.space(v), this.stream.write(z + "<" + f.name), C = f.attributes;
          for (F in C) l.call(C, F) && (w = C[F], this.attribute(w));
          if (f.children.length === 0 || f.children.every(function(T) {
            return T.value === "";
          })) this.allowEmpty ? this.stream.write("></" + f.name + ">") : this.stream.write(this.spacebeforeslash + "/>");
          else if (this.pretty && f.children.length === 1 && f.children[0].value != null) this.stream.write(">"), this.stream.write(f.children[0].value), this.stream.write("</" + f.name + ">");
          else {
            for (this.stream.write(">" + this.newline), R = f.children, U = 0, E = R.length; U < E; U++) switch (x = R[U], false) {
              case !(x instanceof e):
                this.cdata(x, v + 1);
                break;
              case !(x instanceof t):
                this.comment(x, v + 1);
                break;
              case !(x instanceof d):
                this.element(x, v + 1);
                break;
              case !(x instanceof p):
                this.raw(x, v + 1);
                break;
              case !(x instanceof g):
                this.text(x, v + 1);
                break;
              case !(x instanceof b):
                this.processingInstruction(x, v + 1);
                break;
              case !(x instanceof s):
                break;
              default:
                throw new Error("Unknown XML node type: " + x.constructor.name);
            }
            this.stream.write(z + "</" + f.name + ">");
          }
          return this.stream.write(this.endline(f));
        }, h.prototype.processingInstruction = function(f, v) {
          return this.stream.write(this.space(v) + "<?" + f.target), f.value && this.stream.write(" " + f.value), this.stream.write(this.spacebeforeslash + "?>" + this.endline(f));
        }, h.prototype.raw = function(f, v) {
          return this.stream.write(this.space(v) + f.value + this.endline(f));
        }, h.prototype.text = function(f, v) {
          return this.stream.write(this.space(v) + f.value + this.endline(f));
        }, h.prototype.dtdAttList = function(f, v) {
          return this.stream.write(this.space(v) + "<!ATTLIST " + f.elementName + " " + f.attributeName + " " + f.attributeType), f.defaultValueType !== "#DEFAULT" && this.stream.write(" " + f.defaultValueType), f.defaultValue && this.stream.write(' "' + f.defaultValue + '"'), this.stream.write(this.spacebeforeslash + ">" + this.endline(f));
        }, h.prototype.dtdElement = function(f, v) {
          return this.stream.write(this.space(v) + "<!ELEMENT " + f.name + " " + f.value), this.stream.write(this.spacebeforeslash + ">" + this.endline(f));
        }, h.prototype.dtdEntity = function(f, v) {
          return this.stream.write(this.space(v) + "<!ENTITY"), f.pe && this.stream.write(" %"), this.stream.write(" " + f.name), f.value ? this.stream.write(' "' + f.value + '"') : (f.pubID && f.sysID ? this.stream.write(' PUBLIC "' + f.pubID + '" "' + f.sysID + '"') : f.sysID && this.stream.write(' SYSTEM "' + f.sysID + '"'), f.nData && this.stream.write(" NDATA " + f.nData)), this.stream.write(this.spacebeforeslash + ">" + this.endline(f));
        }, h.prototype.dtdNotation = function(f, v) {
          return this.stream.write(this.space(v) + "<!NOTATION " + f.name), f.pubID && f.sysID ? this.stream.write(' PUBLIC "' + f.pubID + '" "' + f.sysID + '"') : f.pubID ? this.stream.write(' PUBLIC "' + f.pubID + '"') : f.sysID && this.stream.write(' SYSTEM "' + f.sysID + '"'), this.stream.write(this.spacebeforeslash + ">" + this.endline(f));
        }, h.prototype.endline = function(f) {
          return f.isLastRootNode ? "" : this.newline;
        }, h;
      }(m);
    }).call(ng)), lr.exports;
  }
  var ns;
  function ig() {
    return ns || (ns = 1, (function() {
      var e, t, n, r, a, i, c;
      c = Ft(), a = c.assign, i = c.isFunction, e = Jp(), t = tg(), r = co(), n = rg(), It.create = function(o, s, d, b) {
        var p, g;
        if (o == null) throw new Error("Root element needs a name.");
        return b = a({}, s, d, b), p = new e(b), g = p.element(o), b.headless || (p.declaration(b), (b.pubID != null || b.sysID != null) && p.doctype(b)), g;
      }, It.begin = function(o, s, d) {
        var b;
        return i(o) && (b = [
          o,
          s
        ], s = b[0], d = b[1], o = {}), s ? new t(o, s, d) : new e(o);
      }, It.stringWriter = function(o) {
        return new r(o);
      }, It.streamWriter = function(o, s) {
        return new n(o, s);
      };
    }).call(It)), It;
  }
  var rs;
  function ag() {
    if (rs) return Mi;
    rs = 1;
    var e = Re, t = ig();
    Mi.writeString = n;
    function n(a, i) {
      var c = e.invert(i), o = {
        element: d,
        text: r
      };
      function s(g, m) {
        return o[m.type](g, m);
      }
      function d(g, m) {
        var y = g.element(b(m.name), m.attributes);
        m.children.forEach(function(l) {
          s(y, l);
        });
      }
      function b(g) {
        var m = /^\{(.*)\}(.*)$/.exec(g);
        if (m) {
          var y = c[m[1]];
          return y + (y === "" ? "" : ":") + m[2];
        } else return g;
      }
      function p(g) {
        var m = t.create(b(g.name), {
          version: "1.0",
          encoding: "UTF-8",
          standalone: true
        });
        return e.forEach(i, function(y, l) {
          var u = "xmlns" + (l === "" ? "" : ":" + l);
          m.attribute(u, y);
        }), g.children.forEach(function(y) {
          s(m, y);
        }), m.end();
      }
      return p(a);
    }
    function r(a, i) {
      a.text(i.value);
    }
    return Mi;
  }
  var is;
  function so() {
    if (is) return yt;
    is = 1;
    var e = Vd();
    return yt.Element = e.Element, yt.element = e.element, yt.emptyElement = e.emptyElement, yt.text = e.text, yt.readString = Wp().readString, yt.writeString = ag().writeString, yt;
  }
  var as;
  function og() {
    if (as) return On;
    as = 1;
    var e = Re, t = At(), n = so();
    On.read = a, On.readXmlFromZipFile = i;
    var r = {
      "http://schemas.openxmlformats.org/wordprocessingml/2006/main": "w",
      "http://schemas.openxmlformats.org/officeDocument/2006/relationships": "r",
      "http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing": "wp",
      "http://schemas.openxmlformats.org/drawingml/2006/main": "a",
      "http://schemas.openxmlformats.org/drawingml/2006/picture": "pic",
      "http://purl.oclc.org/ooxml/wordprocessingml/main": "w",
      "http://purl.oclc.org/ooxml/officeDocument/relationships": "r",
      "http://purl.oclc.org/ooxml/drawingml/wordprocessingDrawing": "wp",
      "http://purl.oclc.org/ooxml/drawingml/main": "a",
      "http://purl.oclc.org/ooxml/drawingml/picture": "pic",
      "http://schemas.openxmlformats.org/package/2006/content-types": "content-types",
      "http://schemas.openxmlformats.org/package/2006/relationships": "relationships",
      "http://schemas.openxmlformats.org/markup-compatibility/2006": "mc",
      "urn:schemas-microsoft-com:vml": "v",
      "urn:schemas-microsoft-com:office:word": "office-word",
      "http://schemas.microsoft.com/office/word/2010/wordml": "wordml"
    };
    function a(s) {
      return n.readString(s, r).then(function(d) {
        return o(d)[0];
      });
    }
    function i(s, d) {
      return s.exists(d) ? s.read(d, "utf-8").then(c).then(a) : t.resolve(null);
    }
    function c(s) {
      return s.replace(/^\uFEFF/g, "");
    }
    function o(s) {
      return s.type === "element" ? s.name === "mc:AlternateContent" ? s.first("mc:Fallback").children : (s.children = e.flatten(s.children.map(o, true)), [
        s
      ]) : [
        s
      ];
    }
    return On;
  }
  var Mn = {}, nt = {}, qn = {}, os;
  function cg() {
    if (os) return qn;
    os = 1, Object.defineProperty(qn, "__esModule", {
      value: true
    });
    var e = [
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "32",
        "Dingbat hex": "20",
        "Unicode dec": "32",
        "Unicode hex": "20"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "33",
        "Dingbat hex": "21",
        "Unicode dec": "33",
        "Unicode hex": "21"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "34",
        "Dingbat hex": "22",
        "Unicode dec": "8704",
        "Unicode hex": "2200"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "35",
        "Dingbat hex": "23",
        "Unicode dec": "35",
        "Unicode hex": "23"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "36",
        "Dingbat hex": "24",
        "Unicode dec": "8707",
        "Unicode hex": "2203"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "37",
        "Dingbat hex": "25",
        "Unicode dec": "37",
        "Unicode hex": "25"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "38",
        "Dingbat hex": "26",
        "Unicode dec": "38",
        "Unicode hex": "26"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "39",
        "Dingbat hex": "27",
        "Unicode dec": "8717",
        "Unicode hex": "220D"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "40",
        "Dingbat hex": "28",
        "Unicode dec": "40",
        "Unicode hex": "28"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "41",
        "Dingbat hex": "29",
        "Unicode dec": "41",
        "Unicode hex": "29"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "42",
        "Dingbat hex": "2A",
        "Unicode dec": "42",
        "Unicode hex": "2A"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "43",
        "Dingbat hex": "2B",
        "Unicode dec": "43",
        "Unicode hex": "2B"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "44",
        "Dingbat hex": "2C",
        "Unicode dec": "44",
        "Unicode hex": "2C"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "45",
        "Dingbat hex": "2D",
        "Unicode dec": "8722",
        "Unicode hex": "2212"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "46",
        "Dingbat hex": "2E",
        "Unicode dec": "46",
        "Unicode hex": "2E"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "47",
        "Dingbat hex": "2F",
        "Unicode dec": "47",
        "Unicode hex": "2F"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "48",
        "Dingbat hex": "30",
        "Unicode dec": "48",
        "Unicode hex": "30"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "49",
        "Dingbat hex": "31",
        "Unicode dec": "49",
        "Unicode hex": "31"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "50",
        "Dingbat hex": "32",
        "Unicode dec": "50",
        "Unicode hex": "32"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "51",
        "Dingbat hex": "33",
        "Unicode dec": "51",
        "Unicode hex": "33"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "52",
        "Dingbat hex": "34",
        "Unicode dec": "52",
        "Unicode hex": "34"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "53",
        "Dingbat hex": "35",
        "Unicode dec": "53",
        "Unicode hex": "35"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "54",
        "Dingbat hex": "36",
        "Unicode dec": "54",
        "Unicode hex": "36"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "55",
        "Dingbat hex": "37",
        "Unicode dec": "55",
        "Unicode hex": "37"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "56",
        "Dingbat hex": "38",
        "Unicode dec": "56",
        "Unicode hex": "38"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "57",
        "Dingbat hex": "39",
        "Unicode dec": "57",
        "Unicode hex": "39"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "58",
        "Dingbat hex": "3A",
        "Unicode dec": "58",
        "Unicode hex": "3A"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "59",
        "Dingbat hex": "3B",
        "Unicode dec": "59",
        "Unicode hex": "3B"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "60",
        "Dingbat hex": "3C",
        "Unicode dec": "60",
        "Unicode hex": "3C"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "61",
        "Dingbat hex": "3D",
        "Unicode dec": "61",
        "Unicode hex": "3D"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "62",
        "Dingbat hex": "3E",
        "Unicode dec": "62",
        "Unicode hex": "3E"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "63",
        "Dingbat hex": "3F",
        "Unicode dec": "63",
        "Unicode hex": "3F"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "64",
        "Dingbat hex": "40",
        "Unicode dec": "8773",
        "Unicode hex": "2245"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "65",
        "Dingbat hex": "41",
        "Unicode dec": "913",
        "Unicode hex": "391"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "66",
        "Dingbat hex": "42",
        "Unicode dec": "914",
        "Unicode hex": "392"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "67",
        "Dingbat hex": "43",
        "Unicode dec": "935",
        "Unicode hex": "3A7"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "68",
        "Dingbat hex": "44",
        "Unicode dec": "916",
        "Unicode hex": "394"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "69",
        "Dingbat hex": "45",
        "Unicode dec": "917",
        "Unicode hex": "395"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "70",
        "Dingbat hex": "46",
        "Unicode dec": "934",
        "Unicode hex": "3A6"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "71",
        "Dingbat hex": "47",
        "Unicode dec": "915",
        "Unicode hex": "393"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "72",
        "Dingbat hex": "48",
        "Unicode dec": "919",
        "Unicode hex": "397"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "73",
        "Dingbat hex": "49",
        "Unicode dec": "921",
        "Unicode hex": "399"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "74",
        "Dingbat hex": "4A",
        "Unicode dec": "977",
        "Unicode hex": "3D1"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "75",
        "Dingbat hex": "4B",
        "Unicode dec": "922",
        "Unicode hex": "39A"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "76",
        "Dingbat hex": "4C",
        "Unicode dec": "923",
        "Unicode hex": "39B"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "77",
        "Dingbat hex": "4D",
        "Unicode dec": "924",
        "Unicode hex": "39C"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "78",
        "Dingbat hex": "4E",
        "Unicode dec": "925",
        "Unicode hex": "39D"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "79",
        "Dingbat hex": "4F",
        "Unicode dec": "927",
        "Unicode hex": "39F"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "80",
        "Dingbat hex": "50",
        "Unicode dec": "928",
        "Unicode hex": "3A0"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "81",
        "Dingbat hex": "51",
        "Unicode dec": "920",
        "Unicode hex": "398"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "82",
        "Dingbat hex": "52",
        "Unicode dec": "929",
        "Unicode hex": "3A1"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "83",
        "Dingbat hex": "53",
        "Unicode dec": "931",
        "Unicode hex": "3A3"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "84",
        "Dingbat hex": "54",
        "Unicode dec": "932",
        "Unicode hex": "3A4"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "85",
        "Dingbat hex": "55",
        "Unicode dec": "933",
        "Unicode hex": "3A5"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "86",
        "Dingbat hex": "56",
        "Unicode dec": "962",
        "Unicode hex": "3C2"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "87",
        "Dingbat hex": "57",
        "Unicode dec": "937",
        "Unicode hex": "3A9"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "88",
        "Dingbat hex": "58",
        "Unicode dec": "926",
        "Unicode hex": "39E"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "89",
        "Dingbat hex": "59",
        "Unicode dec": "936",
        "Unicode hex": "3A8"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "90",
        "Dingbat hex": "5A",
        "Unicode dec": "918",
        "Unicode hex": "396"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "91",
        "Dingbat hex": "5B",
        "Unicode dec": "91",
        "Unicode hex": "5B"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "92",
        "Dingbat hex": "5C",
        "Unicode dec": "8756",
        "Unicode hex": "2234"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "93",
        "Dingbat hex": "5D",
        "Unicode dec": "93",
        "Unicode hex": "5D"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "94",
        "Dingbat hex": "5E",
        "Unicode dec": "8869",
        "Unicode hex": "22A5"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "95",
        "Dingbat hex": "5F",
        "Unicode dec": "95",
        "Unicode hex": "5F"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "96",
        "Dingbat hex": "60",
        "Unicode dec": "8254",
        "Unicode hex": "203E"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "97",
        "Dingbat hex": "61",
        "Unicode dec": "945",
        "Unicode hex": "3B1"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "98",
        "Dingbat hex": "62",
        "Unicode dec": "946",
        "Unicode hex": "3B2"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "99",
        "Dingbat hex": "63",
        "Unicode dec": "967",
        "Unicode hex": "3C7"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "100",
        "Dingbat hex": "64",
        "Unicode dec": "948",
        "Unicode hex": "3B4"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "101",
        "Dingbat hex": "65",
        "Unicode dec": "949",
        "Unicode hex": "3B5"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "102",
        "Dingbat hex": "66",
        "Unicode dec": "966",
        "Unicode hex": "3C6"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "103",
        "Dingbat hex": "67",
        "Unicode dec": "947",
        "Unicode hex": "3B3"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "104",
        "Dingbat hex": "68",
        "Unicode dec": "951",
        "Unicode hex": "3B7"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "105",
        "Dingbat hex": "69",
        "Unicode dec": "953",
        "Unicode hex": "3B9"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "106",
        "Dingbat hex": "6A",
        "Unicode dec": "981",
        "Unicode hex": "3D5"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "107",
        "Dingbat hex": "6B",
        "Unicode dec": "954",
        "Unicode hex": "3BA"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "108",
        "Dingbat hex": "6C",
        "Unicode dec": "955",
        "Unicode hex": "3BB"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "109",
        "Dingbat hex": "6D",
        "Unicode dec": "956",
        "Unicode hex": "3BC"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "110",
        "Dingbat hex": "6E",
        "Unicode dec": "957",
        "Unicode hex": "3BD"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "111",
        "Dingbat hex": "6F",
        "Unicode dec": "959",
        "Unicode hex": "3BF"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "112",
        "Dingbat hex": "70",
        "Unicode dec": "960",
        "Unicode hex": "3C0"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "113",
        "Dingbat hex": "71",
        "Unicode dec": "952",
        "Unicode hex": "3B8"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "114",
        "Dingbat hex": "72",
        "Unicode dec": "961",
        "Unicode hex": "3C1"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "115",
        "Dingbat hex": "73",
        "Unicode dec": "963",
        "Unicode hex": "3C3"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "116",
        "Dingbat hex": "74",
        "Unicode dec": "964",
        "Unicode hex": "3C4"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "117",
        "Dingbat hex": "75",
        "Unicode dec": "965",
        "Unicode hex": "3C5"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "118",
        "Dingbat hex": "76",
        "Unicode dec": "982",
        "Unicode hex": "3D6"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "119",
        "Dingbat hex": "77",
        "Unicode dec": "969",
        "Unicode hex": "3C9"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "120",
        "Dingbat hex": "78",
        "Unicode dec": "958",
        "Unicode hex": "3BE"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "121",
        "Dingbat hex": "79",
        "Unicode dec": "968",
        "Unicode hex": "3C8"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "122",
        "Dingbat hex": "7A",
        "Unicode dec": "950",
        "Unicode hex": "3B6"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "123",
        "Dingbat hex": "7B",
        "Unicode dec": "123",
        "Unicode hex": "7B"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "124",
        "Dingbat hex": "7C",
        "Unicode dec": "124",
        "Unicode hex": "7C"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "125",
        "Dingbat hex": "7D",
        "Unicode dec": "125",
        "Unicode hex": "7D"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "126",
        "Dingbat hex": "7E",
        "Unicode dec": "126",
        "Unicode hex": "7E"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "160",
        "Dingbat hex": "A0",
        "Unicode dec": "8364",
        "Unicode hex": "20AC"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "161",
        "Dingbat hex": "A1",
        "Unicode dec": "978",
        "Unicode hex": "3D2"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "162",
        "Dingbat hex": "A2",
        "Unicode dec": "8242",
        "Unicode hex": "2032"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "163",
        "Dingbat hex": "A3",
        "Unicode dec": "8804",
        "Unicode hex": "2264"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "164",
        "Dingbat hex": "A4",
        "Unicode dec": "8260",
        "Unicode hex": "2044"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "165",
        "Dingbat hex": "A5",
        "Unicode dec": "8734",
        "Unicode hex": "221E"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "166",
        "Dingbat hex": "A6",
        "Unicode dec": "402",
        "Unicode hex": "192"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "167",
        "Dingbat hex": "A7",
        "Unicode dec": "9827",
        "Unicode hex": "2663"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "168",
        "Dingbat hex": "A8",
        "Unicode dec": "9830",
        "Unicode hex": "2666"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "169",
        "Dingbat hex": "A9",
        "Unicode dec": "9829",
        "Unicode hex": "2665"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "170",
        "Dingbat hex": "AA",
        "Unicode dec": "9824",
        "Unicode hex": "2660"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "171",
        "Dingbat hex": "AB",
        "Unicode dec": "8596",
        "Unicode hex": "2194"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "172",
        "Dingbat hex": "AC",
        "Unicode dec": "8592",
        "Unicode hex": "2190"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "173",
        "Dingbat hex": "AD",
        "Unicode dec": "8593",
        "Unicode hex": "2191"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "174",
        "Dingbat hex": "AE",
        "Unicode dec": "8594",
        "Unicode hex": "2192"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "175",
        "Dingbat hex": "AF",
        "Unicode dec": "8595",
        "Unicode hex": "2193"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "176",
        "Dingbat hex": "B0",
        "Unicode dec": "176",
        "Unicode hex": "B0"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "177",
        "Dingbat hex": "B1",
        "Unicode dec": "177",
        "Unicode hex": "B1"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "178",
        "Dingbat hex": "B2",
        "Unicode dec": "8243",
        "Unicode hex": "2033"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "179",
        "Dingbat hex": "B3",
        "Unicode dec": "8805",
        "Unicode hex": "2265"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "180",
        "Dingbat hex": "B4",
        "Unicode dec": "215",
        "Unicode hex": "D7"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "181",
        "Dingbat hex": "B5",
        "Unicode dec": "8733",
        "Unicode hex": "221D"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "182",
        "Dingbat hex": "B6",
        "Unicode dec": "8706",
        "Unicode hex": "2202"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "183",
        "Dingbat hex": "B7",
        "Unicode dec": "8226",
        "Unicode hex": "2022"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "184",
        "Dingbat hex": "B8",
        "Unicode dec": "247",
        "Unicode hex": "F7"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "185",
        "Dingbat hex": "B9",
        "Unicode dec": "8800",
        "Unicode hex": "2260"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "186",
        "Dingbat hex": "BA",
        "Unicode dec": "8801",
        "Unicode hex": "2261"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "187",
        "Dingbat hex": "BB",
        "Unicode dec": "8776",
        "Unicode hex": "2248"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "188",
        "Dingbat hex": "BC",
        "Unicode dec": "8230",
        "Unicode hex": "2026"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "189",
        "Dingbat hex": "BD",
        "Unicode dec": "9168",
        "Unicode hex": "23D0"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "190",
        "Dingbat hex": "BE",
        "Unicode dec": "9135",
        "Unicode hex": "23AF"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "191",
        "Dingbat hex": "BF",
        "Unicode dec": "8629",
        "Unicode hex": "21B5"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "192",
        "Dingbat hex": "C0",
        "Unicode dec": "8501",
        "Unicode hex": "2135"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "193",
        "Dingbat hex": "C1",
        "Unicode dec": "8465",
        "Unicode hex": "2111"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "194",
        "Dingbat hex": "C2",
        "Unicode dec": "8476",
        "Unicode hex": "211C"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "195",
        "Dingbat hex": "C3",
        "Unicode dec": "8472",
        "Unicode hex": "2118"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "196",
        "Dingbat hex": "C4",
        "Unicode dec": "8855",
        "Unicode hex": "2297"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "197",
        "Dingbat hex": "C5",
        "Unicode dec": "8853",
        "Unicode hex": "2295"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "198",
        "Dingbat hex": "C6",
        "Unicode dec": "8709",
        "Unicode hex": "2205"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "199",
        "Dingbat hex": "C7",
        "Unicode dec": "8745",
        "Unicode hex": "2229"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "200",
        "Dingbat hex": "C8",
        "Unicode dec": "8746",
        "Unicode hex": "222A"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "201",
        "Dingbat hex": "C9",
        "Unicode dec": "8835",
        "Unicode hex": "2283"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "202",
        "Dingbat hex": "CA",
        "Unicode dec": "8839",
        "Unicode hex": "2287"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "203",
        "Dingbat hex": "CB",
        "Unicode dec": "8836",
        "Unicode hex": "2284"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "204",
        "Dingbat hex": "CC",
        "Unicode dec": "8834",
        "Unicode hex": "2282"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "205",
        "Dingbat hex": "CD",
        "Unicode dec": "8838",
        "Unicode hex": "2286"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "206",
        "Dingbat hex": "CE",
        "Unicode dec": "8712",
        "Unicode hex": "2208"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "207",
        "Dingbat hex": "CF",
        "Unicode dec": "8713",
        "Unicode hex": "2209"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "208",
        "Dingbat hex": "D0",
        "Unicode dec": "8736",
        "Unicode hex": "2220"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "209",
        "Dingbat hex": "D1",
        "Unicode dec": "8711",
        "Unicode hex": "2207"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "210",
        "Dingbat hex": "D2",
        "Unicode dec": "174",
        "Unicode hex": "AE"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "211",
        "Dingbat hex": "D3",
        "Unicode dec": "169",
        "Unicode hex": "A9"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "212",
        "Dingbat hex": "D4",
        "Unicode dec": "8482",
        "Unicode hex": "2122"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "213",
        "Dingbat hex": "D5",
        "Unicode dec": "8719",
        "Unicode hex": "220F"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "214",
        "Dingbat hex": "D6",
        "Unicode dec": "8730",
        "Unicode hex": "221A"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "215",
        "Dingbat hex": "D7",
        "Unicode dec": "8901",
        "Unicode hex": "22C5"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "216",
        "Dingbat hex": "D8",
        "Unicode dec": "172",
        "Unicode hex": "AC"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "217",
        "Dingbat hex": "D9",
        "Unicode dec": "8743",
        "Unicode hex": "2227"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "218",
        "Dingbat hex": "DA",
        "Unicode dec": "8744",
        "Unicode hex": "2228"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "219",
        "Dingbat hex": "DB",
        "Unicode dec": "8660",
        "Unicode hex": "21D4"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "220",
        "Dingbat hex": "DC",
        "Unicode dec": "8656",
        "Unicode hex": "21D0"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "221",
        "Dingbat hex": "DD",
        "Unicode dec": "8657",
        "Unicode hex": "21D1"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "222",
        "Dingbat hex": "DE",
        "Unicode dec": "8658",
        "Unicode hex": "21D2"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "223",
        "Dingbat hex": "DF",
        "Unicode dec": "8659",
        "Unicode hex": "21D3"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "224",
        "Dingbat hex": "E0",
        "Unicode dec": "9674",
        "Unicode hex": "25CA"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "225",
        "Dingbat hex": "E1",
        "Unicode dec": "12296",
        "Unicode hex": "3008"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "226",
        "Dingbat hex": "E2",
        "Unicode dec": "174",
        "Unicode hex": "AE"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "227",
        "Dingbat hex": "E3",
        "Unicode dec": "169",
        "Unicode hex": "A9"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "228",
        "Dingbat hex": "E4",
        "Unicode dec": "8482",
        "Unicode hex": "2122"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "229",
        "Dingbat hex": "E5",
        "Unicode dec": "8721",
        "Unicode hex": "2211"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "230",
        "Dingbat hex": "E6",
        "Unicode dec": "9115",
        "Unicode hex": "239B"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "231",
        "Dingbat hex": "E7",
        "Unicode dec": "9116",
        "Unicode hex": "239C"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "232",
        "Dingbat hex": "E8",
        "Unicode dec": "9117",
        "Unicode hex": "239D"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "233",
        "Dingbat hex": "E9",
        "Unicode dec": "9121",
        "Unicode hex": "23A1"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "234",
        "Dingbat hex": "EA",
        "Unicode dec": "9122",
        "Unicode hex": "23A2"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "235",
        "Dingbat hex": "EB",
        "Unicode dec": "9123",
        "Unicode hex": "23A3"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "236",
        "Dingbat hex": "EC",
        "Unicode dec": "9127",
        "Unicode hex": "23A7"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "237",
        "Dingbat hex": "ED",
        "Unicode dec": "9128",
        "Unicode hex": "23A8"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "238",
        "Dingbat hex": "EE",
        "Unicode dec": "9129",
        "Unicode hex": "23A9"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "239",
        "Dingbat hex": "EF",
        "Unicode dec": "9130",
        "Unicode hex": "23AA"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "240",
        "Dingbat hex": "F0",
        "Unicode dec": "63743",
        "Unicode hex": "F8FF"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "241",
        "Dingbat hex": "F1",
        "Unicode dec": "12297",
        "Unicode hex": "3009"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "242",
        "Dingbat hex": "F2",
        "Unicode dec": "8747",
        "Unicode hex": "222B"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "243",
        "Dingbat hex": "F3",
        "Unicode dec": "8992",
        "Unicode hex": "2320"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "244",
        "Dingbat hex": "F4",
        "Unicode dec": "9134",
        "Unicode hex": "23AE"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "245",
        "Dingbat hex": "F5",
        "Unicode dec": "8993",
        "Unicode hex": "2321"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "246",
        "Dingbat hex": "F6",
        "Unicode dec": "9118",
        "Unicode hex": "239E"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "247",
        "Dingbat hex": "F7",
        "Unicode dec": "9119",
        "Unicode hex": "239F"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "248",
        "Dingbat hex": "F8",
        "Unicode dec": "9120",
        "Unicode hex": "23A0"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "249",
        "Dingbat hex": "F9",
        "Unicode dec": "9124",
        "Unicode hex": "23A4"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "250",
        "Dingbat hex": "FA",
        "Unicode dec": "9125",
        "Unicode hex": "23A5"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "251",
        "Dingbat hex": "FB",
        "Unicode dec": "9126",
        "Unicode hex": "23A6"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "252",
        "Dingbat hex": "FC",
        "Unicode dec": "9131",
        "Unicode hex": "23AB"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "253",
        "Dingbat hex": "FD",
        "Unicode dec": "9132",
        "Unicode hex": "23AC"
      },
      {
        "Typeface name": "Symbol",
        "Dingbat dec": "254",
        "Dingbat hex": "FE",
        "Unicode dec": "9133",
        "Unicode hex": "23AD"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "32",
        "Dingbat hex": "20",
        "Unicode dec": "32",
        "Unicode hex": "20"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "33",
        "Dingbat hex": "21",
        "Unicode dec": "128375",
        "Unicode hex": "1F577"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "34",
        "Dingbat hex": "22",
        "Unicode dec": "128376",
        "Unicode hex": "1F578"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "35",
        "Dingbat hex": "23",
        "Unicode dec": "128370",
        "Unicode hex": "1F572"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "36",
        "Dingbat hex": "24",
        "Unicode dec": "128374",
        "Unicode hex": "1F576"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "37",
        "Dingbat hex": "25",
        "Unicode dec": "127942",
        "Unicode hex": "1F3C6"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "38",
        "Dingbat hex": "26",
        "Unicode dec": "127894",
        "Unicode hex": "1F396"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "39",
        "Dingbat hex": "27",
        "Unicode dec": "128391",
        "Unicode hex": "1F587"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "40",
        "Dingbat hex": "28",
        "Unicode dec": "128488",
        "Unicode hex": "1F5E8"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "41",
        "Dingbat hex": "29",
        "Unicode dec": "128489",
        "Unicode hex": "1F5E9"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "42",
        "Dingbat hex": "2A",
        "Unicode dec": "128496",
        "Unicode hex": "1F5F0"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "43",
        "Dingbat hex": "2B",
        "Unicode dec": "128497",
        "Unicode hex": "1F5F1"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "44",
        "Dingbat hex": "2C",
        "Unicode dec": "127798",
        "Unicode hex": "1F336"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "45",
        "Dingbat hex": "2D",
        "Unicode dec": "127895",
        "Unicode hex": "1F397"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "46",
        "Dingbat hex": "2E",
        "Unicode dec": "128638",
        "Unicode hex": "1F67E"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "47",
        "Dingbat hex": "2F",
        "Unicode dec": "128636",
        "Unicode hex": "1F67C"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "48",
        "Dingbat hex": "30",
        "Unicode dec": "128469",
        "Unicode hex": "1F5D5"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "49",
        "Dingbat hex": "31",
        "Unicode dec": "128470",
        "Unicode hex": "1F5D6"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "50",
        "Dingbat hex": "32",
        "Unicode dec": "128471",
        "Unicode hex": "1F5D7"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "51",
        "Dingbat hex": "33",
        "Unicode dec": "9204",
        "Unicode hex": "23F4"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "52",
        "Dingbat hex": "34",
        "Unicode dec": "9205",
        "Unicode hex": "23F5"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "53",
        "Dingbat hex": "35",
        "Unicode dec": "9206",
        "Unicode hex": "23F6"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "54",
        "Dingbat hex": "36",
        "Unicode dec": "9207",
        "Unicode hex": "23F7"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "55",
        "Dingbat hex": "37",
        "Unicode dec": "9194",
        "Unicode hex": "23EA"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "56",
        "Dingbat hex": "38",
        "Unicode dec": "9193",
        "Unicode hex": "23E9"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "57",
        "Dingbat hex": "39",
        "Unicode dec": "9198",
        "Unicode hex": "23EE"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "58",
        "Dingbat hex": "3A",
        "Unicode dec": "9197",
        "Unicode hex": "23ED"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "59",
        "Dingbat hex": "3B",
        "Unicode dec": "9208",
        "Unicode hex": "23F8"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "60",
        "Dingbat hex": "3C",
        "Unicode dec": "9209",
        "Unicode hex": "23F9"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "61",
        "Dingbat hex": "3D",
        "Unicode dec": "9210",
        "Unicode hex": "23FA"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "62",
        "Dingbat hex": "3E",
        "Unicode dec": "128474",
        "Unicode hex": "1F5DA"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "63",
        "Dingbat hex": "3F",
        "Unicode dec": "128499",
        "Unicode hex": "1F5F3"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "64",
        "Dingbat hex": "40",
        "Unicode dec": "128736",
        "Unicode hex": "1F6E0"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "65",
        "Dingbat hex": "41",
        "Unicode dec": "127959",
        "Unicode hex": "1F3D7"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "66",
        "Dingbat hex": "42",
        "Unicode dec": "127960",
        "Unicode hex": "1F3D8"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "67",
        "Dingbat hex": "43",
        "Unicode dec": "127961",
        "Unicode hex": "1F3D9"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "68",
        "Dingbat hex": "44",
        "Unicode dec": "127962",
        "Unicode hex": "1F3DA"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "69",
        "Dingbat hex": "45",
        "Unicode dec": "127964",
        "Unicode hex": "1F3DC"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "70",
        "Dingbat hex": "46",
        "Unicode dec": "127981",
        "Unicode hex": "1F3ED"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "71",
        "Dingbat hex": "47",
        "Unicode dec": "127963",
        "Unicode hex": "1F3DB"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "72",
        "Dingbat hex": "48",
        "Unicode dec": "127968",
        "Unicode hex": "1F3E0"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "73",
        "Dingbat hex": "49",
        "Unicode dec": "127958",
        "Unicode hex": "1F3D6"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "74",
        "Dingbat hex": "4A",
        "Unicode dec": "127965",
        "Unicode hex": "1F3DD"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "75",
        "Dingbat hex": "4B",
        "Unicode dec": "128739",
        "Unicode hex": "1F6E3"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "76",
        "Dingbat hex": "4C",
        "Unicode dec": "128269",
        "Unicode hex": "1F50D"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "77",
        "Dingbat hex": "4D",
        "Unicode dec": "127956",
        "Unicode hex": "1F3D4"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "78",
        "Dingbat hex": "4E",
        "Unicode dec": "128065",
        "Unicode hex": "1F441"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "79",
        "Dingbat hex": "4F",
        "Unicode dec": "128066",
        "Unicode hex": "1F442"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "80",
        "Dingbat hex": "50",
        "Unicode dec": "127966",
        "Unicode hex": "1F3DE"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "81",
        "Dingbat hex": "51",
        "Unicode dec": "127957",
        "Unicode hex": "1F3D5"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "82",
        "Dingbat hex": "52",
        "Unicode dec": "128740",
        "Unicode hex": "1F6E4"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "83",
        "Dingbat hex": "53",
        "Unicode dec": "127967",
        "Unicode hex": "1F3DF"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "84",
        "Dingbat hex": "54",
        "Unicode dec": "128755",
        "Unicode hex": "1F6F3"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "85",
        "Dingbat hex": "55",
        "Unicode dec": "128364",
        "Unicode hex": "1F56C"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "86",
        "Dingbat hex": "56",
        "Unicode dec": "128363",
        "Unicode hex": "1F56B"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "87",
        "Dingbat hex": "57",
        "Unicode dec": "128360",
        "Unicode hex": "1F568"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "88",
        "Dingbat hex": "58",
        "Unicode dec": "128264",
        "Unicode hex": "1F508"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "89",
        "Dingbat hex": "59",
        "Unicode dec": "127892",
        "Unicode hex": "1F394"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "90",
        "Dingbat hex": "5A",
        "Unicode dec": "127893",
        "Unicode hex": "1F395"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "91",
        "Dingbat hex": "5B",
        "Unicode dec": "128492",
        "Unicode hex": "1F5EC"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "92",
        "Dingbat hex": "5C",
        "Unicode dec": "128637",
        "Unicode hex": "1F67D"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "93",
        "Dingbat hex": "5D",
        "Unicode dec": "128493",
        "Unicode hex": "1F5ED"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "94",
        "Dingbat hex": "5E",
        "Unicode dec": "128490",
        "Unicode hex": "1F5EA"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "95",
        "Dingbat hex": "5F",
        "Unicode dec": "128491",
        "Unicode hex": "1F5EB"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "96",
        "Dingbat hex": "60",
        "Unicode dec": "11156",
        "Unicode hex": "2B94"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "97",
        "Dingbat hex": "61",
        "Unicode dec": "10004",
        "Unicode hex": "2714"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "98",
        "Dingbat hex": "62",
        "Unicode dec": "128690",
        "Unicode hex": "1F6B2"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "99",
        "Dingbat hex": "63",
        "Unicode dec": "11036",
        "Unicode hex": "2B1C"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "100",
        "Dingbat hex": "64",
        "Unicode dec": "128737",
        "Unicode hex": "1F6E1"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "101",
        "Dingbat hex": "65",
        "Unicode dec": "128230",
        "Unicode hex": "1F4E6"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "102",
        "Dingbat hex": "66",
        "Unicode dec": "128753",
        "Unicode hex": "1F6F1"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "103",
        "Dingbat hex": "67",
        "Unicode dec": "11035",
        "Unicode hex": "2B1B"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "104",
        "Dingbat hex": "68",
        "Unicode dec": "128657",
        "Unicode hex": "1F691"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "105",
        "Dingbat hex": "69",
        "Unicode dec": "128712",
        "Unicode hex": "1F6C8"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "106",
        "Dingbat hex": "6A",
        "Unicode dec": "128745",
        "Unicode hex": "1F6E9"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "107",
        "Dingbat hex": "6B",
        "Unicode dec": "128752",
        "Unicode hex": "1F6F0"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "108",
        "Dingbat hex": "6C",
        "Unicode dec": "128968",
        "Unicode hex": "1F7C8"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "109",
        "Dingbat hex": "6D",
        "Unicode dec": "128372",
        "Unicode hex": "1F574"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "110",
        "Dingbat hex": "6E",
        "Unicode dec": "11044",
        "Unicode hex": "2B24"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "111",
        "Dingbat hex": "6F",
        "Unicode dec": "128741",
        "Unicode hex": "1F6E5"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "112",
        "Dingbat hex": "70",
        "Unicode dec": "128660",
        "Unicode hex": "1F694"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "113",
        "Dingbat hex": "71",
        "Unicode dec": "128472",
        "Unicode hex": "1F5D8"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "114",
        "Dingbat hex": "72",
        "Unicode dec": "128473",
        "Unicode hex": "1F5D9"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "115",
        "Dingbat hex": "73",
        "Unicode dec": "10067",
        "Unicode hex": "2753"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "116",
        "Dingbat hex": "74",
        "Unicode dec": "128754",
        "Unicode hex": "1F6F2"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "117",
        "Dingbat hex": "75",
        "Unicode dec": "128647",
        "Unicode hex": "1F687"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "118",
        "Dingbat hex": "76",
        "Unicode dec": "128653",
        "Unicode hex": "1F68D"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "119",
        "Dingbat hex": "77",
        "Unicode dec": "9971",
        "Unicode hex": "26F3"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "120",
        "Dingbat hex": "78",
        "Unicode dec": "10680",
        "Unicode hex": "29B8"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "121",
        "Dingbat hex": "79",
        "Unicode dec": "8854",
        "Unicode hex": "2296"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "122",
        "Dingbat hex": "7A",
        "Unicode dec": "128685",
        "Unicode hex": "1F6AD"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "123",
        "Dingbat hex": "7B",
        "Unicode dec": "128494",
        "Unicode hex": "1F5EE"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "124",
        "Dingbat hex": "7C",
        "Unicode dec": "9168",
        "Unicode hex": "23D0"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "125",
        "Dingbat hex": "7D",
        "Unicode dec": "128495",
        "Unicode hex": "1F5EF"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "126",
        "Dingbat hex": "7E",
        "Unicode dec": "128498",
        "Unicode hex": "1F5F2"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "128",
        "Dingbat hex": "80",
        "Unicode dec": "128697",
        "Unicode hex": "1F6B9"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "129",
        "Dingbat hex": "81",
        "Unicode dec": "128698",
        "Unicode hex": "1F6BA"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "130",
        "Dingbat hex": "82",
        "Unicode dec": "128713",
        "Unicode hex": "1F6C9"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "131",
        "Dingbat hex": "83",
        "Unicode dec": "128714",
        "Unicode hex": "1F6CA"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "132",
        "Dingbat hex": "84",
        "Unicode dec": "128700",
        "Unicode hex": "1F6BC"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "133",
        "Dingbat hex": "85",
        "Unicode dec": "128125",
        "Unicode hex": "1F47D"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "134",
        "Dingbat hex": "86",
        "Unicode dec": "127947",
        "Unicode hex": "1F3CB"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "135",
        "Dingbat hex": "87",
        "Unicode dec": "9975",
        "Unicode hex": "26F7"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "136",
        "Dingbat hex": "88",
        "Unicode dec": "127938",
        "Unicode hex": "1F3C2"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "137",
        "Dingbat hex": "89",
        "Unicode dec": "127948",
        "Unicode hex": "1F3CC"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "138",
        "Dingbat hex": "8A",
        "Unicode dec": "127946",
        "Unicode hex": "1F3CA"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "139",
        "Dingbat hex": "8B",
        "Unicode dec": "127940",
        "Unicode hex": "1F3C4"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "140",
        "Dingbat hex": "8C",
        "Unicode dec": "127949",
        "Unicode hex": "1F3CD"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "141",
        "Dingbat hex": "8D",
        "Unicode dec": "127950",
        "Unicode hex": "1F3CE"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "142",
        "Dingbat hex": "8E",
        "Unicode dec": "128664",
        "Unicode hex": "1F698"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "143",
        "Dingbat hex": "8F",
        "Unicode dec": "128480",
        "Unicode hex": "1F5E0"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "144",
        "Dingbat hex": "90",
        "Unicode dec": "128738",
        "Unicode hex": "1F6E2"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "145",
        "Dingbat hex": "91",
        "Unicode dec": "128176",
        "Unicode hex": "1F4B0"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "146",
        "Dingbat hex": "92",
        "Unicode dec": "127991",
        "Unicode hex": "1F3F7"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "147",
        "Dingbat hex": "93",
        "Unicode dec": "128179",
        "Unicode hex": "1F4B3"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "148",
        "Dingbat hex": "94",
        "Unicode dec": "128106",
        "Unicode hex": "1F46A"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "149",
        "Dingbat hex": "95",
        "Unicode dec": "128481",
        "Unicode hex": "1F5E1"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "150",
        "Dingbat hex": "96",
        "Unicode dec": "128482",
        "Unicode hex": "1F5E2"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "151",
        "Dingbat hex": "97",
        "Unicode dec": "128483",
        "Unicode hex": "1F5E3"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "152",
        "Dingbat hex": "98",
        "Unicode dec": "10031",
        "Unicode hex": "272F"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "153",
        "Dingbat hex": "99",
        "Unicode dec": "128388",
        "Unicode hex": "1F584"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "154",
        "Dingbat hex": "9A",
        "Unicode dec": "128389",
        "Unicode hex": "1F585"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "155",
        "Dingbat hex": "9B",
        "Unicode dec": "128387",
        "Unicode hex": "1F583"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "156",
        "Dingbat hex": "9C",
        "Unicode dec": "128390",
        "Unicode hex": "1F586"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "157",
        "Dingbat hex": "9D",
        "Unicode dec": "128441",
        "Unicode hex": "1F5B9"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "158",
        "Dingbat hex": "9E",
        "Unicode dec": "128442",
        "Unicode hex": "1F5BA"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "159",
        "Dingbat hex": "9F",
        "Unicode dec": "128443",
        "Unicode hex": "1F5BB"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "160",
        "Dingbat hex": "A0",
        "Unicode dec": "128373",
        "Unicode hex": "1F575"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "161",
        "Dingbat hex": "A1",
        "Unicode dec": "128368",
        "Unicode hex": "1F570"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "162",
        "Dingbat hex": "A2",
        "Unicode dec": "128445",
        "Unicode hex": "1F5BD"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "163",
        "Dingbat hex": "A3",
        "Unicode dec": "128446",
        "Unicode hex": "1F5BE"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "164",
        "Dingbat hex": "A4",
        "Unicode dec": "128203",
        "Unicode hex": "1F4CB"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "165",
        "Dingbat hex": "A5",
        "Unicode dec": "128466",
        "Unicode hex": "1F5D2"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "166",
        "Dingbat hex": "A6",
        "Unicode dec": "128467",
        "Unicode hex": "1F5D3"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "167",
        "Dingbat hex": "A7",
        "Unicode dec": "128366",
        "Unicode hex": "1F56E"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "168",
        "Dingbat hex": "A8",
        "Unicode dec": "128218",
        "Unicode hex": "1F4DA"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "169",
        "Dingbat hex": "A9",
        "Unicode dec": "128478",
        "Unicode hex": "1F5DE"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "170",
        "Dingbat hex": "AA",
        "Unicode dec": "128479",
        "Unicode hex": "1F5DF"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "171",
        "Dingbat hex": "AB",
        "Unicode dec": "128451",
        "Unicode hex": "1F5C3"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "172",
        "Dingbat hex": "AC",
        "Unicode dec": "128450",
        "Unicode hex": "1F5C2"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "173",
        "Dingbat hex": "AD",
        "Unicode dec": "128444",
        "Unicode hex": "1F5BC"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "174",
        "Dingbat hex": "AE",
        "Unicode dec": "127917",
        "Unicode hex": "1F3AD"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "175",
        "Dingbat hex": "AF",
        "Unicode dec": "127900",
        "Unicode hex": "1F39C"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "176",
        "Dingbat hex": "B0",
        "Unicode dec": "127896",
        "Unicode hex": "1F398"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "177",
        "Dingbat hex": "B1",
        "Unicode dec": "127897",
        "Unicode hex": "1F399"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "178",
        "Dingbat hex": "B2",
        "Unicode dec": "127911",
        "Unicode hex": "1F3A7"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "179",
        "Dingbat hex": "B3",
        "Unicode dec": "128191",
        "Unicode hex": "1F4BF"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "180",
        "Dingbat hex": "B4",
        "Unicode dec": "127902",
        "Unicode hex": "1F39E"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "181",
        "Dingbat hex": "B5",
        "Unicode dec": "128247",
        "Unicode hex": "1F4F7"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "182",
        "Dingbat hex": "B6",
        "Unicode dec": "127903",
        "Unicode hex": "1F39F"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "183",
        "Dingbat hex": "B7",
        "Unicode dec": "127916",
        "Unicode hex": "1F3AC"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "184",
        "Dingbat hex": "B8",
        "Unicode dec": "128253",
        "Unicode hex": "1F4FD"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "185",
        "Dingbat hex": "B9",
        "Unicode dec": "128249",
        "Unicode hex": "1F4F9"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "186",
        "Dingbat hex": "BA",
        "Unicode dec": "128254",
        "Unicode hex": "1F4FE"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "187",
        "Dingbat hex": "BB",
        "Unicode dec": "128251",
        "Unicode hex": "1F4FB"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "188",
        "Dingbat hex": "BC",
        "Unicode dec": "127898",
        "Unicode hex": "1F39A"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "189",
        "Dingbat hex": "BD",
        "Unicode dec": "127899",
        "Unicode hex": "1F39B"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "190",
        "Dingbat hex": "BE",
        "Unicode dec": "128250",
        "Unicode hex": "1F4FA"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "191",
        "Dingbat hex": "BF",
        "Unicode dec": "128187",
        "Unicode hex": "1F4BB"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "192",
        "Dingbat hex": "C0",
        "Unicode dec": "128421",
        "Unicode hex": "1F5A5"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "193",
        "Dingbat hex": "C1",
        "Unicode dec": "128422",
        "Unicode hex": "1F5A6"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "194",
        "Dingbat hex": "C2",
        "Unicode dec": "128423",
        "Unicode hex": "1F5A7"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "195",
        "Dingbat hex": "C3",
        "Unicode dec": "128377",
        "Unicode hex": "1F579"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "196",
        "Dingbat hex": "C4",
        "Unicode dec": "127918",
        "Unicode hex": "1F3AE"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "197",
        "Dingbat hex": "C5",
        "Unicode dec": "128379",
        "Unicode hex": "1F57B"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "198",
        "Dingbat hex": "C6",
        "Unicode dec": "128380",
        "Unicode hex": "1F57C"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "199",
        "Dingbat hex": "C7",
        "Unicode dec": "128223",
        "Unicode hex": "1F4DF"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "200",
        "Dingbat hex": "C8",
        "Unicode dec": "128385",
        "Unicode hex": "1F581"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "201",
        "Dingbat hex": "C9",
        "Unicode dec": "128384",
        "Unicode hex": "1F580"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "202",
        "Dingbat hex": "CA",
        "Unicode dec": "128424",
        "Unicode hex": "1F5A8"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "203",
        "Dingbat hex": "CB",
        "Unicode dec": "128425",
        "Unicode hex": "1F5A9"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "204",
        "Dingbat hex": "CC",
        "Unicode dec": "128447",
        "Unicode hex": "1F5BF"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "205",
        "Dingbat hex": "CD",
        "Unicode dec": "128426",
        "Unicode hex": "1F5AA"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "206",
        "Dingbat hex": "CE",
        "Unicode dec": "128476",
        "Unicode hex": "1F5DC"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "207",
        "Dingbat hex": "CF",
        "Unicode dec": "128274",
        "Unicode hex": "1F512"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "208",
        "Dingbat hex": "D0",
        "Unicode dec": "128275",
        "Unicode hex": "1F513"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "209",
        "Dingbat hex": "D1",
        "Unicode dec": "128477",
        "Unicode hex": "1F5DD"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "210",
        "Dingbat hex": "D2",
        "Unicode dec": "128229",
        "Unicode hex": "1F4E5"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "211",
        "Dingbat hex": "D3",
        "Unicode dec": "128228",
        "Unicode hex": "1F4E4"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "212",
        "Dingbat hex": "D4",
        "Unicode dec": "128371",
        "Unicode hex": "1F573"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "213",
        "Dingbat hex": "D5",
        "Unicode dec": "127779",
        "Unicode hex": "1F323"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "214",
        "Dingbat hex": "D6",
        "Unicode dec": "127780",
        "Unicode hex": "1F324"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "215",
        "Dingbat hex": "D7",
        "Unicode dec": "127781",
        "Unicode hex": "1F325"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "216",
        "Dingbat hex": "D8",
        "Unicode dec": "127782",
        "Unicode hex": "1F326"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "217",
        "Dingbat hex": "D9",
        "Unicode dec": "9729",
        "Unicode hex": "2601"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "218",
        "Dingbat hex": "DA",
        "Unicode dec": "127784",
        "Unicode hex": "1F328"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "219",
        "Dingbat hex": "DB",
        "Unicode dec": "127783",
        "Unicode hex": "1F327"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "220",
        "Dingbat hex": "DC",
        "Unicode dec": "127785",
        "Unicode hex": "1F329"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "221",
        "Dingbat hex": "DD",
        "Unicode dec": "127786",
        "Unicode hex": "1F32A"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "222",
        "Dingbat hex": "DE",
        "Unicode dec": "127788",
        "Unicode hex": "1F32C"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "223",
        "Dingbat hex": "DF",
        "Unicode dec": "127787",
        "Unicode hex": "1F32B"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "224",
        "Dingbat hex": "E0",
        "Unicode dec": "127772",
        "Unicode hex": "1F31C"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "225",
        "Dingbat hex": "E1",
        "Unicode dec": "127777",
        "Unicode hex": "1F321"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "226",
        "Dingbat hex": "E2",
        "Unicode dec": "128715",
        "Unicode hex": "1F6CB"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "227",
        "Dingbat hex": "E3",
        "Unicode dec": "128719",
        "Unicode hex": "1F6CF"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "228",
        "Dingbat hex": "E4",
        "Unicode dec": "127869",
        "Unicode hex": "1F37D"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "229",
        "Dingbat hex": "E5",
        "Unicode dec": "127864",
        "Unicode hex": "1F378"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "230",
        "Dingbat hex": "E6",
        "Unicode dec": "128718",
        "Unicode hex": "1F6CE"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "231",
        "Dingbat hex": "E7",
        "Unicode dec": "128717",
        "Unicode hex": "1F6CD"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "232",
        "Dingbat hex": "E8",
        "Unicode dec": "9413",
        "Unicode hex": "24C5"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "233",
        "Dingbat hex": "E9",
        "Unicode dec": "9855",
        "Unicode hex": "267F"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "234",
        "Dingbat hex": "EA",
        "Unicode dec": "128710",
        "Unicode hex": "1F6C6"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "235",
        "Dingbat hex": "EB",
        "Unicode dec": "128392",
        "Unicode hex": "1F588"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "236",
        "Dingbat hex": "EC",
        "Unicode dec": "127891",
        "Unicode hex": "1F393"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "237",
        "Dingbat hex": "ED",
        "Unicode dec": "128484",
        "Unicode hex": "1F5E4"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "238",
        "Dingbat hex": "EE",
        "Unicode dec": "128485",
        "Unicode hex": "1F5E5"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "239",
        "Dingbat hex": "EF",
        "Unicode dec": "128486",
        "Unicode hex": "1F5E6"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "240",
        "Dingbat hex": "F0",
        "Unicode dec": "128487",
        "Unicode hex": "1F5E7"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "241",
        "Dingbat hex": "F1",
        "Unicode dec": "128746",
        "Unicode hex": "1F6EA"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "242",
        "Dingbat hex": "F2",
        "Unicode dec": "128063",
        "Unicode hex": "1F43F"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "243",
        "Dingbat hex": "F3",
        "Unicode dec": "128038",
        "Unicode hex": "1F426"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "244",
        "Dingbat hex": "F4",
        "Unicode dec": "128031",
        "Unicode hex": "1F41F"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "245",
        "Dingbat hex": "F5",
        "Unicode dec": "128021",
        "Unicode hex": "1F415"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "246",
        "Dingbat hex": "F6",
        "Unicode dec": "128008",
        "Unicode hex": "1F408"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "247",
        "Dingbat hex": "F7",
        "Unicode dec": "128620",
        "Unicode hex": "1F66C"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "248",
        "Dingbat hex": "F8",
        "Unicode dec": "128622",
        "Unicode hex": "1F66E"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "249",
        "Dingbat hex": "F9",
        "Unicode dec": "128621",
        "Unicode hex": "1F66D"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "250",
        "Dingbat hex": "FA",
        "Unicode dec": "128623",
        "Unicode hex": "1F66F"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "251",
        "Dingbat hex": "FB",
        "Unicode dec": "128506",
        "Unicode hex": "1F5FA"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "252",
        "Dingbat hex": "FC",
        "Unicode dec": "127757",
        "Unicode hex": "1F30D"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "253",
        "Dingbat hex": "FD",
        "Unicode dec": "127759",
        "Unicode hex": "1F30F"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "254",
        "Dingbat hex": "FE",
        "Unicode dec": "127758",
        "Unicode hex": "1F30E"
      },
      {
        "Typeface name": "Webdings",
        "Dingbat dec": "255",
        "Dingbat hex": "FF",
        "Unicode dec": "128330",
        "Unicode hex": "1F54A"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "32",
        "Dingbat hex": "20",
        "Unicode dec": "32",
        "Unicode hex": "20"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "33",
        "Dingbat hex": "21",
        "Unicode dec": "128393",
        "Unicode hex": "1F589"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "34",
        "Dingbat hex": "22",
        "Unicode dec": "9986",
        "Unicode hex": "2702"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "35",
        "Dingbat hex": "23",
        "Unicode dec": "9985",
        "Unicode hex": "2701"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "36",
        "Dingbat hex": "24",
        "Unicode dec": "128083",
        "Unicode hex": "1F453"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "37",
        "Dingbat hex": "25",
        "Unicode dec": "128365",
        "Unicode hex": "1F56D"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "38",
        "Dingbat hex": "26",
        "Unicode dec": "128366",
        "Unicode hex": "1F56E"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "39",
        "Dingbat hex": "27",
        "Unicode dec": "128367",
        "Unicode hex": "1F56F"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "40",
        "Dingbat hex": "28",
        "Unicode dec": "128383",
        "Unicode hex": "1F57F"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "41",
        "Dingbat hex": "29",
        "Unicode dec": "9990",
        "Unicode hex": "2706"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "42",
        "Dingbat hex": "2A",
        "Unicode dec": "128386",
        "Unicode hex": "1F582"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "43",
        "Dingbat hex": "2B",
        "Unicode dec": "128387",
        "Unicode hex": "1F583"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "44",
        "Dingbat hex": "2C",
        "Unicode dec": "128234",
        "Unicode hex": "1F4EA"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "45",
        "Dingbat hex": "2D",
        "Unicode dec": "128235",
        "Unicode hex": "1F4EB"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "46",
        "Dingbat hex": "2E",
        "Unicode dec": "128236",
        "Unicode hex": "1F4EC"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "47",
        "Dingbat hex": "2F",
        "Unicode dec": "128237",
        "Unicode hex": "1F4ED"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "48",
        "Dingbat hex": "30",
        "Unicode dec": "128448",
        "Unicode hex": "1F5C0"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "49",
        "Dingbat hex": "31",
        "Unicode dec": "128449",
        "Unicode hex": "1F5C1"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "50",
        "Dingbat hex": "32",
        "Unicode dec": "128462",
        "Unicode hex": "1F5CE"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "51",
        "Dingbat hex": "33",
        "Unicode dec": "128463",
        "Unicode hex": "1F5CF"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "52",
        "Dingbat hex": "34",
        "Unicode dec": "128464",
        "Unicode hex": "1F5D0"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "53",
        "Dingbat hex": "35",
        "Unicode dec": "128452",
        "Unicode hex": "1F5C4"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "54",
        "Dingbat hex": "36",
        "Unicode dec": "8987",
        "Unicode hex": "231B"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "55",
        "Dingbat hex": "37",
        "Unicode dec": "128430",
        "Unicode hex": "1F5AE"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "56",
        "Dingbat hex": "38",
        "Unicode dec": "128432",
        "Unicode hex": "1F5B0"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "57",
        "Dingbat hex": "39",
        "Unicode dec": "128434",
        "Unicode hex": "1F5B2"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "58",
        "Dingbat hex": "3A",
        "Unicode dec": "128435",
        "Unicode hex": "1F5B3"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "59",
        "Dingbat hex": "3B",
        "Unicode dec": "128436",
        "Unicode hex": "1F5B4"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "60",
        "Dingbat hex": "3C",
        "Unicode dec": "128427",
        "Unicode hex": "1F5AB"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "61",
        "Dingbat hex": "3D",
        "Unicode dec": "128428",
        "Unicode hex": "1F5AC"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "62",
        "Dingbat hex": "3E",
        "Unicode dec": "9991",
        "Unicode hex": "2707"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "63",
        "Dingbat hex": "3F",
        "Unicode dec": "9997",
        "Unicode hex": "270D"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "64",
        "Dingbat hex": "40",
        "Unicode dec": "128398",
        "Unicode hex": "1F58E"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "65",
        "Dingbat hex": "41",
        "Unicode dec": "9996",
        "Unicode hex": "270C"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "66",
        "Dingbat hex": "42",
        "Unicode dec": "128399",
        "Unicode hex": "1F58F"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "67",
        "Dingbat hex": "43",
        "Unicode dec": "128077",
        "Unicode hex": "1F44D"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "68",
        "Dingbat hex": "44",
        "Unicode dec": "128078",
        "Unicode hex": "1F44E"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "69",
        "Dingbat hex": "45",
        "Unicode dec": "9756",
        "Unicode hex": "261C"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "70",
        "Dingbat hex": "46",
        "Unicode dec": "9758",
        "Unicode hex": "261E"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "71",
        "Dingbat hex": "47",
        "Unicode dec": "9757",
        "Unicode hex": "261D"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "72",
        "Dingbat hex": "48",
        "Unicode dec": "9759",
        "Unicode hex": "261F"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "73",
        "Dingbat hex": "49",
        "Unicode dec": "128400",
        "Unicode hex": "1F590"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "74",
        "Dingbat hex": "4A",
        "Unicode dec": "9786",
        "Unicode hex": "263A"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "75",
        "Dingbat hex": "4B",
        "Unicode dec": "128528",
        "Unicode hex": "1F610"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "76",
        "Dingbat hex": "4C",
        "Unicode dec": "9785",
        "Unicode hex": "2639"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "77",
        "Dingbat hex": "4D",
        "Unicode dec": "128163",
        "Unicode hex": "1F4A3"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "78",
        "Dingbat hex": "4E",
        "Unicode dec": "128369",
        "Unicode hex": "1F571"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "79",
        "Dingbat hex": "4F",
        "Unicode dec": "127987",
        "Unicode hex": "1F3F3"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "80",
        "Dingbat hex": "50",
        "Unicode dec": "127985",
        "Unicode hex": "1F3F1"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "81",
        "Dingbat hex": "51",
        "Unicode dec": "9992",
        "Unicode hex": "2708"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "82",
        "Dingbat hex": "52",
        "Unicode dec": "9788",
        "Unicode hex": "263C"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "83",
        "Dingbat hex": "53",
        "Unicode dec": "127778",
        "Unicode hex": "1F322"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "84",
        "Dingbat hex": "54",
        "Unicode dec": "10052",
        "Unicode hex": "2744"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "85",
        "Dingbat hex": "55",
        "Unicode dec": "128326",
        "Unicode hex": "1F546"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "86",
        "Dingbat hex": "56",
        "Unicode dec": "10014",
        "Unicode hex": "271E"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "87",
        "Dingbat hex": "57",
        "Unicode dec": "128328",
        "Unicode hex": "1F548"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "88",
        "Dingbat hex": "58",
        "Unicode dec": "10016",
        "Unicode hex": "2720"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "89",
        "Dingbat hex": "59",
        "Unicode dec": "10017",
        "Unicode hex": "2721"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "90",
        "Dingbat hex": "5A",
        "Unicode dec": "9770",
        "Unicode hex": "262A"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "91",
        "Dingbat hex": "5B",
        "Unicode dec": "9775",
        "Unicode hex": "262F"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "92",
        "Dingbat hex": "5C",
        "Unicode dec": "128329",
        "Unicode hex": "1F549"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "93",
        "Dingbat hex": "5D",
        "Unicode dec": "9784",
        "Unicode hex": "2638"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "94",
        "Dingbat hex": "5E",
        "Unicode dec": "9800",
        "Unicode hex": "2648"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "95",
        "Dingbat hex": "5F",
        "Unicode dec": "9801",
        "Unicode hex": "2649"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "96",
        "Dingbat hex": "60",
        "Unicode dec": "9802",
        "Unicode hex": "264A"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "97",
        "Dingbat hex": "61",
        "Unicode dec": "9803",
        "Unicode hex": "264B"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "98",
        "Dingbat hex": "62",
        "Unicode dec": "9804",
        "Unicode hex": "264C"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "99",
        "Dingbat hex": "63",
        "Unicode dec": "9805",
        "Unicode hex": "264D"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "100",
        "Dingbat hex": "64",
        "Unicode dec": "9806",
        "Unicode hex": "264E"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "101",
        "Dingbat hex": "65",
        "Unicode dec": "9807",
        "Unicode hex": "264F"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "102",
        "Dingbat hex": "66",
        "Unicode dec": "9808",
        "Unicode hex": "2650"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "103",
        "Dingbat hex": "67",
        "Unicode dec": "9809",
        "Unicode hex": "2651"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "104",
        "Dingbat hex": "68",
        "Unicode dec": "9810",
        "Unicode hex": "2652"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "105",
        "Dingbat hex": "69",
        "Unicode dec": "9811",
        "Unicode hex": "2653"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "106",
        "Dingbat hex": "6A",
        "Unicode dec": "128624",
        "Unicode hex": "1F670"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "107",
        "Dingbat hex": "6B",
        "Unicode dec": "128629",
        "Unicode hex": "1F675"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "108",
        "Dingbat hex": "6C",
        "Unicode dec": "9899",
        "Unicode hex": "26AB"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "109",
        "Dingbat hex": "6D",
        "Unicode dec": "128318",
        "Unicode hex": "1F53E"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "110",
        "Dingbat hex": "6E",
        "Unicode dec": "9724",
        "Unicode hex": "25FC"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "111",
        "Dingbat hex": "6F",
        "Unicode dec": "128911",
        "Unicode hex": "1F78F"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "112",
        "Dingbat hex": "70",
        "Unicode dec": "128912",
        "Unicode hex": "1F790"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "113",
        "Dingbat hex": "71",
        "Unicode dec": "10065",
        "Unicode hex": "2751"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "114",
        "Dingbat hex": "72",
        "Unicode dec": "10066",
        "Unicode hex": "2752"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "115",
        "Dingbat hex": "73",
        "Unicode dec": "128927",
        "Unicode hex": "1F79F"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "116",
        "Dingbat hex": "74",
        "Unicode dec": "10731",
        "Unicode hex": "29EB"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "117",
        "Dingbat hex": "75",
        "Unicode dec": "9670",
        "Unicode hex": "25C6"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "118",
        "Dingbat hex": "76",
        "Unicode dec": "10070",
        "Unicode hex": "2756"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "119",
        "Dingbat hex": "77",
        "Unicode dec": "11049",
        "Unicode hex": "2B29"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "120",
        "Dingbat hex": "78",
        "Unicode dec": "8999",
        "Unicode hex": "2327"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "121",
        "Dingbat hex": "79",
        "Unicode dec": "11193",
        "Unicode hex": "2BB9"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "122",
        "Dingbat hex": "7A",
        "Unicode dec": "8984",
        "Unicode hex": "2318"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "123",
        "Dingbat hex": "7B",
        "Unicode dec": "127989",
        "Unicode hex": "1F3F5"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "124",
        "Dingbat hex": "7C",
        "Unicode dec": "127990",
        "Unicode hex": "1F3F6"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "125",
        "Dingbat hex": "7D",
        "Unicode dec": "128630",
        "Unicode hex": "1F676"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "126",
        "Dingbat hex": "7E",
        "Unicode dec": "128631",
        "Unicode hex": "1F677"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "127",
        "Dingbat hex": "7F",
        "Unicode dec": "9647",
        "Unicode hex": "25AF"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "128",
        "Dingbat hex": "80",
        "Unicode dec": "127243",
        "Unicode hex": "1F10B"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "129",
        "Dingbat hex": "81",
        "Unicode dec": "10112",
        "Unicode hex": "2780"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "130",
        "Dingbat hex": "82",
        "Unicode dec": "10113",
        "Unicode hex": "2781"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "131",
        "Dingbat hex": "83",
        "Unicode dec": "10114",
        "Unicode hex": "2782"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "132",
        "Dingbat hex": "84",
        "Unicode dec": "10115",
        "Unicode hex": "2783"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "133",
        "Dingbat hex": "85",
        "Unicode dec": "10116",
        "Unicode hex": "2784"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "134",
        "Dingbat hex": "86",
        "Unicode dec": "10117",
        "Unicode hex": "2785"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "135",
        "Dingbat hex": "87",
        "Unicode dec": "10118",
        "Unicode hex": "2786"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "136",
        "Dingbat hex": "88",
        "Unicode dec": "10119",
        "Unicode hex": "2787"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "137",
        "Dingbat hex": "89",
        "Unicode dec": "10120",
        "Unicode hex": "2788"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "138",
        "Dingbat hex": "8A",
        "Unicode dec": "10121",
        "Unicode hex": "2789"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "139",
        "Dingbat hex": "8B",
        "Unicode dec": "127244",
        "Unicode hex": "1F10C"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "140",
        "Dingbat hex": "8C",
        "Unicode dec": "10122",
        "Unicode hex": "278A"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "141",
        "Dingbat hex": "8D",
        "Unicode dec": "10123",
        "Unicode hex": "278B"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "142",
        "Dingbat hex": "8E",
        "Unicode dec": "10124",
        "Unicode hex": "278C"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "143",
        "Dingbat hex": "8F",
        "Unicode dec": "10125",
        "Unicode hex": "278D"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "144",
        "Dingbat hex": "90",
        "Unicode dec": "10126",
        "Unicode hex": "278E"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "145",
        "Dingbat hex": "91",
        "Unicode dec": "10127",
        "Unicode hex": "278F"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "146",
        "Dingbat hex": "92",
        "Unicode dec": "10128",
        "Unicode hex": "2790"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "147",
        "Dingbat hex": "93",
        "Unicode dec": "10129",
        "Unicode hex": "2791"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "148",
        "Dingbat hex": "94",
        "Unicode dec": "10130",
        "Unicode hex": "2792"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "149",
        "Dingbat hex": "95",
        "Unicode dec": "10131",
        "Unicode hex": "2793"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "150",
        "Dingbat hex": "96",
        "Unicode dec": "128610",
        "Unicode hex": "1F662"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "151",
        "Dingbat hex": "97",
        "Unicode dec": "128608",
        "Unicode hex": "1F660"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "152",
        "Dingbat hex": "98",
        "Unicode dec": "128609",
        "Unicode hex": "1F661"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "153",
        "Dingbat hex": "99",
        "Unicode dec": "128611",
        "Unicode hex": "1F663"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "154",
        "Dingbat hex": "9A",
        "Unicode dec": "128606",
        "Unicode hex": "1F65E"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "155",
        "Dingbat hex": "9B",
        "Unicode dec": "128604",
        "Unicode hex": "1F65C"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "156",
        "Dingbat hex": "9C",
        "Unicode dec": "128605",
        "Unicode hex": "1F65D"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "157",
        "Dingbat hex": "9D",
        "Unicode dec": "128607",
        "Unicode hex": "1F65F"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "158",
        "Dingbat hex": "9E",
        "Unicode dec": "8729",
        "Unicode hex": "2219"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "159",
        "Dingbat hex": "9F",
        "Unicode dec": "8226",
        "Unicode hex": "2022"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "160",
        "Dingbat hex": "A0",
        "Unicode dec": "11037",
        "Unicode hex": "2B1D"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "161",
        "Dingbat hex": "A1",
        "Unicode dec": "11096",
        "Unicode hex": "2B58"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "162",
        "Dingbat hex": "A2",
        "Unicode dec": "128902",
        "Unicode hex": "1F786"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "163",
        "Dingbat hex": "A3",
        "Unicode dec": "128904",
        "Unicode hex": "1F788"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "164",
        "Dingbat hex": "A4",
        "Unicode dec": "128906",
        "Unicode hex": "1F78A"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "165",
        "Dingbat hex": "A5",
        "Unicode dec": "128907",
        "Unicode hex": "1F78B"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "166",
        "Dingbat hex": "A6",
        "Unicode dec": "128319",
        "Unicode hex": "1F53F"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "167",
        "Dingbat hex": "A7",
        "Unicode dec": "9642",
        "Unicode hex": "25AA"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "168",
        "Dingbat hex": "A8",
        "Unicode dec": "128910",
        "Unicode hex": "1F78E"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "169",
        "Dingbat hex": "A9",
        "Unicode dec": "128961",
        "Unicode hex": "1F7C1"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "170",
        "Dingbat hex": "AA",
        "Unicode dec": "128965",
        "Unicode hex": "1F7C5"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "171",
        "Dingbat hex": "AB",
        "Unicode dec": "9733",
        "Unicode hex": "2605"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "172",
        "Dingbat hex": "AC",
        "Unicode dec": "128971",
        "Unicode hex": "1F7CB"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "173",
        "Dingbat hex": "AD",
        "Unicode dec": "128975",
        "Unicode hex": "1F7CF"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "174",
        "Dingbat hex": "AE",
        "Unicode dec": "128979",
        "Unicode hex": "1F7D3"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "175",
        "Dingbat hex": "AF",
        "Unicode dec": "128977",
        "Unicode hex": "1F7D1"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "176",
        "Dingbat hex": "B0",
        "Unicode dec": "11216",
        "Unicode hex": "2BD0"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "177",
        "Dingbat hex": "B1",
        "Unicode dec": "8982",
        "Unicode hex": "2316"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "178",
        "Dingbat hex": "B2",
        "Unicode dec": "11214",
        "Unicode hex": "2BCE"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "179",
        "Dingbat hex": "B3",
        "Unicode dec": "11215",
        "Unicode hex": "2BCF"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "180",
        "Dingbat hex": "B4",
        "Unicode dec": "11217",
        "Unicode hex": "2BD1"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "181",
        "Dingbat hex": "B5",
        "Unicode dec": "10026",
        "Unicode hex": "272A"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "182",
        "Dingbat hex": "B6",
        "Unicode dec": "10032",
        "Unicode hex": "2730"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "183",
        "Dingbat hex": "B7",
        "Unicode dec": "128336",
        "Unicode hex": "1F550"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "184",
        "Dingbat hex": "B8",
        "Unicode dec": "128337",
        "Unicode hex": "1F551"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "185",
        "Dingbat hex": "B9",
        "Unicode dec": "128338",
        "Unicode hex": "1F552"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "186",
        "Dingbat hex": "BA",
        "Unicode dec": "128339",
        "Unicode hex": "1F553"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "187",
        "Dingbat hex": "BB",
        "Unicode dec": "128340",
        "Unicode hex": "1F554"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "188",
        "Dingbat hex": "BC",
        "Unicode dec": "128341",
        "Unicode hex": "1F555"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "189",
        "Dingbat hex": "BD",
        "Unicode dec": "128342",
        "Unicode hex": "1F556"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "190",
        "Dingbat hex": "BE",
        "Unicode dec": "128343",
        "Unicode hex": "1F557"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "191",
        "Dingbat hex": "BF",
        "Unicode dec": "128344",
        "Unicode hex": "1F558"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "192",
        "Dingbat hex": "C0",
        "Unicode dec": "128345",
        "Unicode hex": "1F559"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "193",
        "Dingbat hex": "C1",
        "Unicode dec": "128346",
        "Unicode hex": "1F55A"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "194",
        "Dingbat hex": "C2",
        "Unicode dec": "128347",
        "Unicode hex": "1F55B"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "195",
        "Dingbat hex": "C3",
        "Unicode dec": "11184",
        "Unicode hex": "2BB0"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "196",
        "Dingbat hex": "C4",
        "Unicode dec": "11185",
        "Unicode hex": "2BB1"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "197",
        "Dingbat hex": "C5",
        "Unicode dec": "11186",
        "Unicode hex": "2BB2"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "198",
        "Dingbat hex": "C6",
        "Unicode dec": "11187",
        "Unicode hex": "2BB3"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "199",
        "Dingbat hex": "C7",
        "Unicode dec": "11188",
        "Unicode hex": "2BB4"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "200",
        "Dingbat hex": "C8",
        "Unicode dec": "11189",
        "Unicode hex": "2BB5"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "201",
        "Dingbat hex": "C9",
        "Unicode dec": "11190",
        "Unicode hex": "2BB6"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "202",
        "Dingbat hex": "CA",
        "Unicode dec": "11191",
        "Unicode hex": "2BB7"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "203",
        "Dingbat hex": "CB",
        "Unicode dec": "128618",
        "Unicode hex": "1F66A"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "204",
        "Dingbat hex": "CC",
        "Unicode dec": "128619",
        "Unicode hex": "1F66B"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "205",
        "Dingbat hex": "CD",
        "Unicode dec": "128597",
        "Unicode hex": "1F655"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "206",
        "Dingbat hex": "CE",
        "Unicode dec": "128596",
        "Unicode hex": "1F654"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "207",
        "Dingbat hex": "CF",
        "Unicode dec": "128599",
        "Unicode hex": "1F657"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "208",
        "Dingbat hex": "D0",
        "Unicode dec": "128598",
        "Unicode hex": "1F656"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "209",
        "Dingbat hex": "D1",
        "Unicode dec": "128592",
        "Unicode hex": "1F650"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "210",
        "Dingbat hex": "D2",
        "Unicode dec": "128593",
        "Unicode hex": "1F651"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "211",
        "Dingbat hex": "D3",
        "Unicode dec": "128594",
        "Unicode hex": "1F652"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "212",
        "Dingbat hex": "D4",
        "Unicode dec": "128595",
        "Unicode hex": "1F653"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "213",
        "Dingbat hex": "D5",
        "Unicode dec": "9003",
        "Unicode hex": "232B"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "214",
        "Dingbat hex": "D6",
        "Unicode dec": "8998",
        "Unicode hex": "2326"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "215",
        "Dingbat hex": "D7",
        "Unicode dec": "11160",
        "Unicode hex": "2B98"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "216",
        "Dingbat hex": "D8",
        "Unicode dec": "11162",
        "Unicode hex": "2B9A"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "217",
        "Dingbat hex": "D9",
        "Unicode dec": "11161",
        "Unicode hex": "2B99"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "218",
        "Dingbat hex": "DA",
        "Unicode dec": "11163",
        "Unicode hex": "2B9B"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "219",
        "Dingbat hex": "DB",
        "Unicode dec": "11144",
        "Unicode hex": "2B88"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "220",
        "Dingbat hex": "DC",
        "Unicode dec": "11146",
        "Unicode hex": "2B8A"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "221",
        "Dingbat hex": "DD",
        "Unicode dec": "11145",
        "Unicode hex": "2B89"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "222",
        "Dingbat hex": "DE",
        "Unicode dec": "11147",
        "Unicode hex": "2B8B"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "223",
        "Dingbat hex": "DF",
        "Unicode dec": "129128",
        "Unicode hex": "1F868"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "224",
        "Dingbat hex": "E0",
        "Unicode dec": "129130",
        "Unicode hex": "1F86A"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "225",
        "Dingbat hex": "E1",
        "Unicode dec": "129129",
        "Unicode hex": "1F869"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "226",
        "Dingbat hex": "E2",
        "Unicode dec": "129131",
        "Unicode hex": "1F86B"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "227",
        "Dingbat hex": "E3",
        "Unicode dec": "129132",
        "Unicode hex": "1F86C"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "228",
        "Dingbat hex": "E4",
        "Unicode dec": "129133",
        "Unicode hex": "1F86D"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "229",
        "Dingbat hex": "E5",
        "Unicode dec": "129135",
        "Unicode hex": "1F86F"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "230",
        "Dingbat hex": "E6",
        "Unicode dec": "129134",
        "Unicode hex": "1F86E"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "231",
        "Dingbat hex": "E7",
        "Unicode dec": "129144",
        "Unicode hex": "1F878"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "232",
        "Dingbat hex": "E8",
        "Unicode dec": "129146",
        "Unicode hex": "1F87A"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "233",
        "Dingbat hex": "E9",
        "Unicode dec": "129145",
        "Unicode hex": "1F879"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "234",
        "Dingbat hex": "EA",
        "Unicode dec": "129147",
        "Unicode hex": "1F87B"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "235",
        "Dingbat hex": "EB",
        "Unicode dec": "129148",
        "Unicode hex": "1F87C"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "236",
        "Dingbat hex": "EC",
        "Unicode dec": "129149",
        "Unicode hex": "1F87D"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "237",
        "Dingbat hex": "ED",
        "Unicode dec": "129151",
        "Unicode hex": "1F87F"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "238",
        "Dingbat hex": "EE",
        "Unicode dec": "129150",
        "Unicode hex": "1F87E"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "239",
        "Dingbat hex": "EF",
        "Unicode dec": "8678",
        "Unicode hex": "21E6"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "240",
        "Dingbat hex": "F0",
        "Unicode dec": "8680",
        "Unicode hex": "21E8"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "241",
        "Dingbat hex": "F1",
        "Unicode dec": "8679",
        "Unicode hex": "21E7"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "242",
        "Dingbat hex": "F2",
        "Unicode dec": "8681",
        "Unicode hex": "21E9"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "243",
        "Dingbat hex": "F3",
        "Unicode dec": "11012",
        "Unicode hex": "2B04"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "244",
        "Dingbat hex": "F4",
        "Unicode dec": "8691",
        "Unicode hex": "21F3"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "245",
        "Dingbat hex": "F5",
        "Unicode dec": "11009",
        "Unicode hex": "2B01"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "246",
        "Dingbat hex": "F6",
        "Unicode dec": "11008",
        "Unicode hex": "2B00"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "247",
        "Dingbat hex": "F7",
        "Unicode dec": "11011",
        "Unicode hex": "2B03"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "248",
        "Dingbat hex": "F8",
        "Unicode dec": "11010",
        "Unicode hex": "2B02"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "249",
        "Dingbat hex": "F9",
        "Unicode dec": "129196",
        "Unicode hex": "1F8AC"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "250",
        "Dingbat hex": "FA",
        "Unicode dec": "129197",
        "Unicode hex": "1F8AD"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "251",
        "Dingbat hex": "FB",
        "Unicode dec": "128502",
        "Unicode hex": "1F5F6"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "252",
        "Dingbat hex": "FC",
        "Unicode dec": "10003",
        "Unicode hex": "2713"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "253",
        "Dingbat hex": "FD",
        "Unicode dec": "128503",
        "Unicode hex": "1F5F7"
      },
      {
        "Typeface name": "Wingdings",
        "Dingbat dec": "254",
        "Dingbat hex": "FE",
        "Unicode dec": "128505",
        "Unicode hex": "1F5F9"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "32",
        "Dingbat hex": "20",
        "Unicode dec": "32",
        "Unicode hex": "20"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "33",
        "Dingbat hex": "21",
        "Unicode dec": "128394",
        "Unicode hex": "1F58A"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "34",
        "Dingbat hex": "22",
        "Unicode dec": "128395",
        "Unicode hex": "1F58B"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "35",
        "Dingbat hex": "23",
        "Unicode dec": "128396",
        "Unicode hex": "1F58C"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "36",
        "Dingbat hex": "24",
        "Unicode dec": "128397",
        "Unicode hex": "1F58D"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "37",
        "Dingbat hex": "25",
        "Unicode dec": "9988",
        "Unicode hex": "2704"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "38",
        "Dingbat hex": "26",
        "Unicode dec": "9984",
        "Unicode hex": "2700"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "39",
        "Dingbat hex": "27",
        "Unicode dec": "128382",
        "Unicode hex": "1F57E"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "40",
        "Dingbat hex": "28",
        "Unicode dec": "128381",
        "Unicode hex": "1F57D"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "41",
        "Dingbat hex": "29",
        "Unicode dec": "128453",
        "Unicode hex": "1F5C5"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "42",
        "Dingbat hex": "2A",
        "Unicode dec": "128454",
        "Unicode hex": "1F5C6"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "43",
        "Dingbat hex": "2B",
        "Unicode dec": "128455",
        "Unicode hex": "1F5C7"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "44",
        "Dingbat hex": "2C",
        "Unicode dec": "128456",
        "Unicode hex": "1F5C8"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "45",
        "Dingbat hex": "2D",
        "Unicode dec": "128457",
        "Unicode hex": "1F5C9"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "46",
        "Dingbat hex": "2E",
        "Unicode dec": "128458",
        "Unicode hex": "1F5CA"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "47",
        "Dingbat hex": "2F",
        "Unicode dec": "128459",
        "Unicode hex": "1F5CB"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "48",
        "Dingbat hex": "30",
        "Unicode dec": "128460",
        "Unicode hex": "1F5CC"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "49",
        "Dingbat hex": "31",
        "Unicode dec": "128461",
        "Unicode hex": "1F5CD"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "50",
        "Dingbat hex": "32",
        "Unicode dec": "128203",
        "Unicode hex": "1F4CB"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "51",
        "Dingbat hex": "33",
        "Unicode dec": "128465",
        "Unicode hex": "1F5D1"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "52",
        "Dingbat hex": "34",
        "Unicode dec": "128468",
        "Unicode hex": "1F5D4"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "53",
        "Dingbat hex": "35",
        "Unicode dec": "128437",
        "Unicode hex": "1F5B5"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "54",
        "Dingbat hex": "36",
        "Unicode dec": "128438",
        "Unicode hex": "1F5B6"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "55",
        "Dingbat hex": "37",
        "Unicode dec": "128439",
        "Unicode hex": "1F5B7"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "56",
        "Dingbat hex": "38",
        "Unicode dec": "128440",
        "Unicode hex": "1F5B8"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "57",
        "Dingbat hex": "39",
        "Unicode dec": "128429",
        "Unicode hex": "1F5AD"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "58",
        "Dingbat hex": "3A",
        "Unicode dec": "128431",
        "Unicode hex": "1F5AF"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "59",
        "Dingbat hex": "3B",
        "Unicode dec": "128433",
        "Unicode hex": "1F5B1"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "60",
        "Dingbat hex": "3C",
        "Unicode dec": "128402",
        "Unicode hex": "1F592"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "61",
        "Dingbat hex": "3D",
        "Unicode dec": "128403",
        "Unicode hex": "1F593"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "62",
        "Dingbat hex": "3E",
        "Unicode dec": "128408",
        "Unicode hex": "1F598"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "63",
        "Dingbat hex": "3F",
        "Unicode dec": "128409",
        "Unicode hex": "1F599"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "64",
        "Dingbat hex": "40",
        "Unicode dec": "128410",
        "Unicode hex": "1F59A"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "65",
        "Dingbat hex": "41",
        "Unicode dec": "128411",
        "Unicode hex": "1F59B"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "66",
        "Dingbat hex": "42",
        "Unicode dec": "128072",
        "Unicode hex": "1F448"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "67",
        "Dingbat hex": "43",
        "Unicode dec": "128073",
        "Unicode hex": "1F449"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "68",
        "Dingbat hex": "44",
        "Unicode dec": "128412",
        "Unicode hex": "1F59C"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "69",
        "Dingbat hex": "45",
        "Unicode dec": "128413",
        "Unicode hex": "1F59D"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "70",
        "Dingbat hex": "46",
        "Unicode dec": "128414",
        "Unicode hex": "1F59E"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "71",
        "Dingbat hex": "47",
        "Unicode dec": "128415",
        "Unicode hex": "1F59F"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "72",
        "Dingbat hex": "48",
        "Unicode dec": "128416",
        "Unicode hex": "1F5A0"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "73",
        "Dingbat hex": "49",
        "Unicode dec": "128417",
        "Unicode hex": "1F5A1"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "74",
        "Dingbat hex": "4A",
        "Unicode dec": "128070",
        "Unicode hex": "1F446"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "75",
        "Dingbat hex": "4B",
        "Unicode dec": "128071",
        "Unicode hex": "1F447"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "76",
        "Dingbat hex": "4C",
        "Unicode dec": "128418",
        "Unicode hex": "1F5A2"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "77",
        "Dingbat hex": "4D",
        "Unicode dec": "128419",
        "Unicode hex": "1F5A3"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "78",
        "Dingbat hex": "4E",
        "Unicode dec": "128401",
        "Unicode hex": "1F591"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "79",
        "Dingbat hex": "4F",
        "Unicode dec": "128500",
        "Unicode hex": "1F5F4"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "80",
        "Dingbat hex": "50",
        "Unicode dec": "128504",
        "Unicode hex": "1F5F8"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "81",
        "Dingbat hex": "51",
        "Unicode dec": "128501",
        "Unicode hex": "1F5F5"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "82",
        "Dingbat hex": "52",
        "Unicode dec": "9745",
        "Unicode hex": "2611"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "83",
        "Dingbat hex": "53",
        "Unicode dec": "11197",
        "Unicode hex": "2BBD"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "84",
        "Dingbat hex": "54",
        "Unicode dec": "9746",
        "Unicode hex": "2612"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "85",
        "Dingbat hex": "55",
        "Unicode dec": "11198",
        "Unicode hex": "2BBE"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "86",
        "Dingbat hex": "56",
        "Unicode dec": "11199",
        "Unicode hex": "2BBF"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "87",
        "Dingbat hex": "57",
        "Unicode dec": "128711",
        "Unicode hex": "1F6C7"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "88",
        "Dingbat hex": "58",
        "Unicode dec": "10680",
        "Unicode hex": "29B8"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "89",
        "Dingbat hex": "59",
        "Unicode dec": "128625",
        "Unicode hex": "1F671"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "90",
        "Dingbat hex": "5A",
        "Unicode dec": "128628",
        "Unicode hex": "1F674"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "91",
        "Dingbat hex": "5B",
        "Unicode dec": "128626",
        "Unicode hex": "1F672"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "92",
        "Dingbat hex": "5C",
        "Unicode dec": "128627",
        "Unicode hex": "1F673"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "93",
        "Dingbat hex": "5D",
        "Unicode dec": "8253",
        "Unicode hex": "203D"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "94",
        "Dingbat hex": "5E",
        "Unicode dec": "128633",
        "Unicode hex": "1F679"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "95",
        "Dingbat hex": "5F",
        "Unicode dec": "128634",
        "Unicode hex": "1F67A"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "96",
        "Dingbat hex": "60",
        "Unicode dec": "128635",
        "Unicode hex": "1F67B"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "97",
        "Dingbat hex": "61",
        "Unicode dec": "128614",
        "Unicode hex": "1F666"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "98",
        "Dingbat hex": "62",
        "Unicode dec": "128612",
        "Unicode hex": "1F664"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "99",
        "Dingbat hex": "63",
        "Unicode dec": "128613",
        "Unicode hex": "1F665"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "100",
        "Dingbat hex": "64",
        "Unicode dec": "128615",
        "Unicode hex": "1F667"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "101",
        "Dingbat hex": "65",
        "Unicode dec": "128602",
        "Unicode hex": "1F65A"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "102",
        "Dingbat hex": "66",
        "Unicode dec": "128600",
        "Unicode hex": "1F658"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "103",
        "Dingbat hex": "67",
        "Unicode dec": "128601",
        "Unicode hex": "1F659"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "104",
        "Dingbat hex": "68",
        "Unicode dec": "128603",
        "Unicode hex": "1F65B"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "105",
        "Dingbat hex": "69",
        "Unicode dec": "9450",
        "Unicode hex": "24EA"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "106",
        "Dingbat hex": "6A",
        "Unicode dec": "9312",
        "Unicode hex": "2460"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "107",
        "Dingbat hex": "6B",
        "Unicode dec": "9313",
        "Unicode hex": "2461"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "108",
        "Dingbat hex": "6C",
        "Unicode dec": "9314",
        "Unicode hex": "2462"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "109",
        "Dingbat hex": "6D",
        "Unicode dec": "9315",
        "Unicode hex": "2463"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "110",
        "Dingbat hex": "6E",
        "Unicode dec": "9316",
        "Unicode hex": "2464"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "111",
        "Dingbat hex": "6F",
        "Unicode dec": "9317",
        "Unicode hex": "2465"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "112",
        "Dingbat hex": "70",
        "Unicode dec": "9318",
        "Unicode hex": "2466"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "113",
        "Dingbat hex": "71",
        "Unicode dec": "9319",
        "Unicode hex": "2467"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "114",
        "Dingbat hex": "72",
        "Unicode dec": "9320",
        "Unicode hex": "2468"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "115",
        "Dingbat hex": "73",
        "Unicode dec": "9321",
        "Unicode hex": "2469"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "116",
        "Dingbat hex": "74",
        "Unicode dec": "9471",
        "Unicode hex": "24FF"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "117",
        "Dingbat hex": "75",
        "Unicode dec": "10102",
        "Unicode hex": "2776"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "118",
        "Dingbat hex": "76",
        "Unicode dec": "10103",
        "Unicode hex": "2777"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "119",
        "Dingbat hex": "77",
        "Unicode dec": "10104",
        "Unicode hex": "2778"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "120",
        "Dingbat hex": "78",
        "Unicode dec": "10105",
        "Unicode hex": "2779"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "121",
        "Dingbat hex": "79",
        "Unicode dec": "10106",
        "Unicode hex": "277A"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "122",
        "Dingbat hex": "7A",
        "Unicode dec": "10107",
        "Unicode hex": "277B"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "123",
        "Dingbat hex": "7B",
        "Unicode dec": "10108",
        "Unicode hex": "277C"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "124",
        "Dingbat hex": "7C",
        "Unicode dec": "10109",
        "Unicode hex": "277D"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "125",
        "Dingbat hex": "7D",
        "Unicode dec": "10110",
        "Unicode hex": "277E"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "126",
        "Dingbat hex": "7E",
        "Unicode dec": "10111",
        "Unicode hex": "277F"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "128",
        "Dingbat hex": "80",
        "Unicode dec": "9737",
        "Unicode hex": "2609"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "129",
        "Dingbat hex": "81",
        "Unicode dec": "127765",
        "Unicode hex": "1F315"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "130",
        "Dingbat hex": "82",
        "Unicode dec": "9789",
        "Unicode hex": "263D"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "131",
        "Dingbat hex": "83",
        "Unicode dec": "9790",
        "Unicode hex": "263E"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "132",
        "Dingbat hex": "84",
        "Unicode dec": "11839",
        "Unicode hex": "2E3F"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "133",
        "Dingbat hex": "85",
        "Unicode dec": "10013",
        "Unicode hex": "271D"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "134",
        "Dingbat hex": "86",
        "Unicode dec": "128327",
        "Unicode hex": "1F547"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "135",
        "Dingbat hex": "87",
        "Unicode dec": "128348",
        "Unicode hex": "1F55C"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "136",
        "Dingbat hex": "88",
        "Unicode dec": "128349",
        "Unicode hex": "1F55D"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "137",
        "Dingbat hex": "89",
        "Unicode dec": "128350",
        "Unicode hex": "1F55E"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "138",
        "Dingbat hex": "8A",
        "Unicode dec": "128351",
        "Unicode hex": "1F55F"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "139",
        "Dingbat hex": "8B",
        "Unicode dec": "128352",
        "Unicode hex": "1F560"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "140",
        "Dingbat hex": "8C",
        "Unicode dec": "128353",
        "Unicode hex": "1F561"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "141",
        "Dingbat hex": "8D",
        "Unicode dec": "128354",
        "Unicode hex": "1F562"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "142",
        "Dingbat hex": "8E",
        "Unicode dec": "128355",
        "Unicode hex": "1F563"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "143",
        "Dingbat hex": "8F",
        "Unicode dec": "128356",
        "Unicode hex": "1F564"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "144",
        "Dingbat hex": "90",
        "Unicode dec": "128357",
        "Unicode hex": "1F565"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "145",
        "Dingbat hex": "91",
        "Unicode dec": "128358",
        "Unicode hex": "1F566"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "146",
        "Dingbat hex": "92",
        "Unicode dec": "128359",
        "Unicode hex": "1F567"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "147",
        "Dingbat hex": "93",
        "Unicode dec": "128616",
        "Unicode hex": "1F668"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "148",
        "Dingbat hex": "94",
        "Unicode dec": "128617",
        "Unicode hex": "1F669"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "149",
        "Dingbat hex": "95",
        "Unicode dec": "8901",
        "Unicode hex": "22C5"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "150",
        "Dingbat hex": "96",
        "Unicode dec": "128900",
        "Unicode hex": "1F784"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "151",
        "Dingbat hex": "97",
        "Unicode dec": "10625",
        "Unicode hex": "2981"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "152",
        "Dingbat hex": "98",
        "Unicode dec": "9679",
        "Unicode hex": "25CF"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "153",
        "Dingbat hex": "99",
        "Unicode dec": "9675",
        "Unicode hex": "25CB"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "154",
        "Dingbat hex": "9A",
        "Unicode dec": "128901",
        "Unicode hex": "1F785"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "155",
        "Dingbat hex": "9B",
        "Unicode dec": "128903",
        "Unicode hex": "1F787"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "156",
        "Dingbat hex": "9C",
        "Unicode dec": "128905",
        "Unicode hex": "1F789"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "157",
        "Dingbat hex": "9D",
        "Unicode dec": "8857",
        "Unicode hex": "2299"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "158",
        "Dingbat hex": "9E",
        "Unicode dec": "10687",
        "Unicode hex": "29BF"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "159",
        "Dingbat hex": "9F",
        "Unicode dec": "128908",
        "Unicode hex": "1F78C"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "160",
        "Dingbat hex": "A0",
        "Unicode dec": "128909",
        "Unicode hex": "1F78D"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "161",
        "Dingbat hex": "A1",
        "Unicode dec": "9726",
        "Unicode hex": "25FE"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "162",
        "Dingbat hex": "A2",
        "Unicode dec": "9632",
        "Unicode hex": "25A0"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "163",
        "Dingbat hex": "A3",
        "Unicode dec": "9633",
        "Unicode hex": "25A1"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "164",
        "Dingbat hex": "A4",
        "Unicode dec": "128913",
        "Unicode hex": "1F791"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "165",
        "Dingbat hex": "A5",
        "Unicode dec": "128914",
        "Unicode hex": "1F792"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "166",
        "Dingbat hex": "A6",
        "Unicode dec": "128915",
        "Unicode hex": "1F793"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "167",
        "Dingbat hex": "A7",
        "Unicode dec": "128916",
        "Unicode hex": "1F794"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "168",
        "Dingbat hex": "A8",
        "Unicode dec": "9635",
        "Unicode hex": "25A3"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "169",
        "Dingbat hex": "A9",
        "Unicode dec": "128917",
        "Unicode hex": "1F795"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "170",
        "Dingbat hex": "AA",
        "Unicode dec": "128918",
        "Unicode hex": "1F796"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "171",
        "Dingbat hex": "AB",
        "Unicode dec": "128919",
        "Unicode hex": "1F797"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "172",
        "Dingbat hex": "AC",
        "Unicode dec": "128920",
        "Unicode hex": "1F798"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "173",
        "Dingbat hex": "AD",
        "Unicode dec": "11049",
        "Unicode hex": "2B29"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "174",
        "Dingbat hex": "AE",
        "Unicode dec": "11045",
        "Unicode hex": "2B25"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "175",
        "Dingbat hex": "AF",
        "Unicode dec": "9671",
        "Unicode hex": "25C7"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "176",
        "Dingbat hex": "B0",
        "Unicode dec": "128922",
        "Unicode hex": "1F79A"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "177",
        "Dingbat hex": "B1",
        "Unicode dec": "9672",
        "Unicode hex": "25C8"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "178",
        "Dingbat hex": "B2",
        "Unicode dec": "128923",
        "Unicode hex": "1F79B"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "179",
        "Dingbat hex": "B3",
        "Unicode dec": "128924",
        "Unicode hex": "1F79C"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "180",
        "Dingbat hex": "B4",
        "Unicode dec": "128925",
        "Unicode hex": "1F79D"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "181",
        "Dingbat hex": "B5",
        "Unicode dec": "128926",
        "Unicode hex": "1F79E"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "182",
        "Dingbat hex": "B6",
        "Unicode dec": "11050",
        "Unicode hex": "2B2A"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "183",
        "Dingbat hex": "B7",
        "Unicode dec": "11047",
        "Unicode hex": "2B27"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "184",
        "Dingbat hex": "B8",
        "Unicode dec": "9674",
        "Unicode hex": "25CA"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "185",
        "Dingbat hex": "B9",
        "Unicode dec": "128928",
        "Unicode hex": "1F7A0"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "186",
        "Dingbat hex": "BA",
        "Unicode dec": "9686",
        "Unicode hex": "25D6"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "187",
        "Dingbat hex": "BB",
        "Unicode dec": "9687",
        "Unicode hex": "25D7"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "188",
        "Dingbat hex": "BC",
        "Unicode dec": "11210",
        "Unicode hex": "2BCA"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "189",
        "Dingbat hex": "BD",
        "Unicode dec": "11211",
        "Unicode hex": "2BCB"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "190",
        "Dingbat hex": "BE",
        "Unicode dec": "11200",
        "Unicode hex": "2BC0"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "191",
        "Dingbat hex": "BF",
        "Unicode dec": "11201",
        "Unicode hex": "2BC1"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "192",
        "Dingbat hex": "C0",
        "Unicode dec": "11039",
        "Unicode hex": "2B1F"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "193",
        "Dingbat hex": "C1",
        "Unicode dec": "11202",
        "Unicode hex": "2BC2"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "194",
        "Dingbat hex": "C2",
        "Unicode dec": "11043",
        "Unicode hex": "2B23"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "195",
        "Dingbat hex": "C3",
        "Unicode dec": "11042",
        "Unicode hex": "2B22"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "196",
        "Dingbat hex": "C4",
        "Unicode dec": "11203",
        "Unicode hex": "2BC3"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "197",
        "Dingbat hex": "C5",
        "Unicode dec": "11204",
        "Unicode hex": "2BC4"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "198",
        "Dingbat hex": "C6",
        "Unicode dec": "128929",
        "Unicode hex": "1F7A1"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "199",
        "Dingbat hex": "C7",
        "Unicode dec": "128930",
        "Unicode hex": "1F7A2"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "200",
        "Dingbat hex": "C8",
        "Unicode dec": "128931",
        "Unicode hex": "1F7A3"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "201",
        "Dingbat hex": "C9",
        "Unicode dec": "128932",
        "Unicode hex": "1F7A4"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "202",
        "Dingbat hex": "CA",
        "Unicode dec": "128933",
        "Unicode hex": "1F7A5"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "203",
        "Dingbat hex": "CB",
        "Unicode dec": "128934",
        "Unicode hex": "1F7A6"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "204",
        "Dingbat hex": "CC",
        "Unicode dec": "128935",
        "Unicode hex": "1F7A7"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "205",
        "Dingbat hex": "CD",
        "Unicode dec": "128936",
        "Unicode hex": "1F7A8"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "206",
        "Dingbat hex": "CE",
        "Unicode dec": "128937",
        "Unicode hex": "1F7A9"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "207",
        "Dingbat hex": "CF",
        "Unicode dec": "128938",
        "Unicode hex": "1F7AA"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "208",
        "Dingbat hex": "D0",
        "Unicode dec": "128939",
        "Unicode hex": "1F7AB"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "209",
        "Dingbat hex": "D1",
        "Unicode dec": "128940",
        "Unicode hex": "1F7AC"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "210",
        "Dingbat hex": "D2",
        "Unicode dec": "128941",
        "Unicode hex": "1F7AD"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "211",
        "Dingbat hex": "D3",
        "Unicode dec": "128942",
        "Unicode hex": "1F7AE"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "212",
        "Dingbat hex": "D4",
        "Unicode dec": "128943",
        "Unicode hex": "1F7AF"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "213",
        "Dingbat hex": "D5",
        "Unicode dec": "128944",
        "Unicode hex": "1F7B0"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "214",
        "Dingbat hex": "D6",
        "Unicode dec": "128945",
        "Unicode hex": "1F7B1"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "215",
        "Dingbat hex": "D7",
        "Unicode dec": "128946",
        "Unicode hex": "1F7B2"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "216",
        "Dingbat hex": "D8",
        "Unicode dec": "128947",
        "Unicode hex": "1F7B3"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "217",
        "Dingbat hex": "D9",
        "Unicode dec": "128948",
        "Unicode hex": "1F7B4"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "218",
        "Dingbat hex": "DA",
        "Unicode dec": "128949",
        "Unicode hex": "1F7B5"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "219",
        "Dingbat hex": "DB",
        "Unicode dec": "128950",
        "Unicode hex": "1F7B6"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "220",
        "Dingbat hex": "DC",
        "Unicode dec": "128951",
        "Unicode hex": "1F7B7"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "221",
        "Dingbat hex": "DD",
        "Unicode dec": "128952",
        "Unicode hex": "1F7B8"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "222",
        "Dingbat hex": "DE",
        "Unicode dec": "128953",
        "Unicode hex": "1F7B9"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "223",
        "Dingbat hex": "DF",
        "Unicode dec": "128954",
        "Unicode hex": "1F7BA"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "224",
        "Dingbat hex": "E0",
        "Unicode dec": "128955",
        "Unicode hex": "1F7BB"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "225",
        "Dingbat hex": "E1",
        "Unicode dec": "128956",
        "Unicode hex": "1F7BC"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "226",
        "Dingbat hex": "E2",
        "Unicode dec": "128957",
        "Unicode hex": "1F7BD"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "227",
        "Dingbat hex": "E3",
        "Unicode dec": "128958",
        "Unicode hex": "1F7BE"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "228",
        "Dingbat hex": "E4",
        "Unicode dec": "128959",
        "Unicode hex": "1F7BF"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "229",
        "Dingbat hex": "E5",
        "Unicode dec": "128960",
        "Unicode hex": "1F7C0"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "230",
        "Dingbat hex": "E6",
        "Unicode dec": "128962",
        "Unicode hex": "1F7C2"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "231",
        "Dingbat hex": "E7",
        "Unicode dec": "128964",
        "Unicode hex": "1F7C4"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "232",
        "Dingbat hex": "E8",
        "Unicode dec": "128966",
        "Unicode hex": "1F7C6"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "233",
        "Dingbat hex": "E9",
        "Unicode dec": "128969",
        "Unicode hex": "1F7C9"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "234",
        "Dingbat hex": "EA",
        "Unicode dec": "128970",
        "Unicode hex": "1F7CA"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "235",
        "Dingbat hex": "EB",
        "Unicode dec": "10038",
        "Unicode hex": "2736"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "236",
        "Dingbat hex": "EC",
        "Unicode dec": "128972",
        "Unicode hex": "1F7CC"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "237",
        "Dingbat hex": "ED",
        "Unicode dec": "128974",
        "Unicode hex": "1F7CE"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "238",
        "Dingbat hex": "EE",
        "Unicode dec": "128976",
        "Unicode hex": "1F7D0"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "239",
        "Dingbat hex": "EF",
        "Unicode dec": "128978",
        "Unicode hex": "1F7D2"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "240",
        "Dingbat hex": "F0",
        "Unicode dec": "10041",
        "Unicode hex": "2739"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "241",
        "Dingbat hex": "F1",
        "Unicode dec": "128963",
        "Unicode hex": "1F7C3"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "242",
        "Dingbat hex": "F2",
        "Unicode dec": "128967",
        "Unicode hex": "1F7C7"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "243",
        "Dingbat hex": "F3",
        "Unicode dec": "10031",
        "Unicode hex": "272F"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "244",
        "Dingbat hex": "F4",
        "Unicode dec": "128973",
        "Unicode hex": "1F7CD"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "245",
        "Dingbat hex": "F5",
        "Unicode dec": "128980",
        "Unicode hex": "1F7D4"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "246",
        "Dingbat hex": "F6",
        "Unicode dec": "11212",
        "Unicode hex": "2BCC"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "247",
        "Dingbat hex": "F7",
        "Unicode dec": "11213",
        "Unicode hex": "2BCD"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "248",
        "Dingbat hex": "F8",
        "Unicode dec": "8251",
        "Unicode hex": "203B"
      },
      {
        "Typeface name": "Wingdings 2",
        "Dingbat dec": "249",
        "Dingbat hex": "F9",
        "Unicode dec": "8258",
        "Unicode hex": "2042"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "32",
        "Dingbat hex": "20",
        "Unicode dec": "32",
        "Unicode hex": "20"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "33",
        "Dingbat hex": "21",
        "Unicode dec": "11104",
        "Unicode hex": "2B60"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "34",
        "Dingbat hex": "22",
        "Unicode dec": "11106",
        "Unicode hex": "2B62"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "35",
        "Dingbat hex": "23",
        "Unicode dec": "11105",
        "Unicode hex": "2B61"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "36",
        "Dingbat hex": "24",
        "Unicode dec": "11107",
        "Unicode hex": "2B63"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "37",
        "Dingbat hex": "25",
        "Unicode dec": "11110",
        "Unicode hex": "2B66"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "38",
        "Dingbat hex": "26",
        "Unicode dec": "11111",
        "Unicode hex": "2B67"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "39",
        "Dingbat hex": "27",
        "Unicode dec": "11113",
        "Unicode hex": "2B69"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "40",
        "Dingbat hex": "28",
        "Unicode dec": "11112",
        "Unicode hex": "2B68"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "41",
        "Dingbat hex": "29",
        "Unicode dec": "11120",
        "Unicode hex": "2B70"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "42",
        "Dingbat hex": "2A",
        "Unicode dec": "11122",
        "Unicode hex": "2B72"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "43",
        "Dingbat hex": "2B",
        "Unicode dec": "11121",
        "Unicode hex": "2B71"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "44",
        "Dingbat hex": "2C",
        "Unicode dec": "11123",
        "Unicode hex": "2B73"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "45",
        "Dingbat hex": "2D",
        "Unicode dec": "11126",
        "Unicode hex": "2B76"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "46",
        "Dingbat hex": "2E",
        "Unicode dec": "11128",
        "Unicode hex": "2B78"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "47",
        "Dingbat hex": "2F",
        "Unicode dec": "11131",
        "Unicode hex": "2B7B"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "48",
        "Dingbat hex": "30",
        "Unicode dec": "11133",
        "Unicode hex": "2B7D"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "49",
        "Dingbat hex": "31",
        "Unicode dec": "11108",
        "Unicode hex": "2B64"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "50",
        "Dingbat hex": "32",
        "Unicode dec": "11109",
        "Unicode hex": "2B65"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "51",
        "Dingbat hex": "33",
        "Unicode dec": "11114",
        "Unicode hex": "2B6A"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "52",
        "Dingbat hex": "34",
        "Unicode dec": "11116",
        "Unicode hex": "2B6C"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "53",
        "Dingbat hex": "35",
        "Unicode dec": "11115",
        "Unicode hex": "2B6B"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "54",
        "Dingbat hex": "36",
        "Unicode dec": "11117",
        "Unicode hex": "2B6D"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "55",
        "Dingbat hex": "37",
        "Unicode dec": "11085",
        "Unicode hex": "2B4D"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "56",
        "Dingbat hex": "38",
        "Unicode dec": "11168",
        "Unicode hex": "2BA0"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "57",
        "Dingbat hex": "39",
        "Unicode dec": "11169",
        "Unicode hex": "2BA1"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "58",
        "Dingbat hex": "3A",
        "Unicode dec": "11170",
        "Unicode hex": "2BA2"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "59",
        "Dingbat hex": "3B",
        "Unicode dec": "11171",
        "Unicode hex": "2BA3"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "60",
        "Dingbat hex": "3C",
        "Unicode dec": "11172",
        "Unicode hex": "2BA4"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "61",
        "Dingbat hex": "3D",
        "Unicode dec": "11173",
        "Unicode hex": "2BA5"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "62",
        "Dingbat hex": "3E",
        "Unicode dec": "11174",
        "Unicode hex": "2BA6"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "63",
        "Dingbat hex": "3F",
        "Unicode dec": "11175",
        "Unicode hex": "2BA7"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "64",
        "Dingbat hex": "40",
        "Unicode dec": "11152",
        "Unicode hex": "2B90"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "65",
        "Dingbat hex": "41",
        "Unicode dec": "11153",
        "Unicode hex": "2B91"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "66",
        "Dingbat hex": "42",
        "Unicode dec": "11154",
        "Unicode hex": "2B92"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "67",
        "Dingbat hex": "43",
        "Unicode dec": "11155",
        "Unicode hex": "2B93"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "68",
        "Dingbat hex": "44",
        "Unicode dec": "11136",
        "Unicode hex": "2B80"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "69",
        "Dingbat hex": "45",
        "Unicode dec": "11139",
        "Unicode hex": "2B83"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "70",
        "Dingbat hex": "46",
        "Unicode dec": "11134",
        "Unicode hex": "2B7E"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "71",
        "Dingbat hex": "47",
        "Unicode dec": "11135",
        "Unicode hex": "2B7F"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "72",
        "Dingbat hex": "48",
        "Unicode dec": "11140",
        "Unicode hex": "2B84"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "73",
        "Dingbat hex": "49",
        "Unicode dec": "11142",
        "Unicode hex": "2B86"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "74",
        "Dingbat hex": "4A",
        "Unicode dec": "11141",
        "Unicode hex": "2B85"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "75",
        "Dingbat hex": "4B",
        "Unicode dec": "11143",
        "Unicode hex": "2B87"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "76",
        "Dingbat hex": "4C",
        "Unicode dec": "11151",
        "Unicode hex": "2B8F"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "77",
        "Dingbat hex": "4D",
        "Unicode dec": "11149",
        "Unicode hex": "2B8D"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "78",
        "Dingbat hex": "4E",
        "Unicode dec": "11150",
        "Unicode hex": "2B8E"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "79",
        "Dingbat hex": "4F",
        "Unicode dec": "11148",
        "Unicode hex": "2B8C"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "80",
        "Dingbat hex": "50",
        "Unicode dec": "11118",
        "Unicode hex": "2B6E"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "81",
        "Dingbat hex": "51",
        "Unicode dec": "11119",
        "Unicode hex": "2B6F"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "82",
        "Dingbat hex": "52",
        "Unicode dec": "9099",
        "Unicode hex": "238B"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "83",
        "Dingbat hex": "53",
        "Unicode dec": "8996",
        "Unicode hex": "2324"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "84",
        "Dingbat hex": "54",
        "Unicode dec": "8963",
        "Unicode hex": "2303"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "85",
        "Dingbat hex": "55",
        "Unicode dec": "8997",
        "Unicode hex": "2325"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "86",
        "Dingbat hex": "56",
        "Unicode dec": "9251",
        "Unicode hex": "2423"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "87",
        "Dingbat hex": "57",
        "Unicode dec": "9085",
        "Unicode hex": "237D"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "88",
        "Dingbat hex": "58",
        "Unicode dec": "8682",
        "Unicode hex": "21EA"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "89",
        "Dingbat hex": "59",
        "Unicode dec": "11192",
        "Unicode hex": "2BB8"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "90",
        "Dingbat hex": "5A",
        "Unicode dec": "129184",
        "Unicode hex": "1F8A0"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "91",
        "Dingbat hex": "5B",
        "Unicode dec": "129185",
        "Unicode hex": "1F8A1"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "92",
        "Dingbat hex": "5C",
        "Unicode dec": "129186",
        "Unicode hex": "1F8A2"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "93",
        "Dingbat hex": "5D",
        "Unicode dec": "129187",
        "Unicode hex": "1F8A3"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "94",
        "Dingbat hex": "5E",
        "Unicode dec": "129188",
        "Unicode hex": "1F8A4"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "95",
        "Dingbat hex": "5F",
        "Unicode dec": "129189",
        "Unicode hex": "1F8A5"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "96",
        "Dingbat hex": "60",
        "Unicode dec": "129190",
        "Unicode hex": "1F8A6"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "97",
        "Dingbat hex": "61",
        "Unicode dec": "129191",
        "Unicode hex": "1F8A7"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "98",
        "Dingbat hex": "62",
        "Unicode dec": "129192",
        "Unicode hex": "1F8A8"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "99",
        "Dingbat hex": "63",
        "Unicode dec": "129193",
        "Unicode hex": "1F8A9"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "100",
        "Dingbat hex": "64",
        "Unicode dec": "129194",
        "Unicode hex": "1F8AA"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "101",
        "Dingbat hex": "65",
        "Unicode dec": "129195",
        "Unicode hex": "1F8AB"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "102",
        "Dingbat hex": "66",
        "Unicode dec": "129104",
        "Unicode hex": "1F850"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "103",
        "Dingbat hex": "67",
        "Unicode dec": "129106",
        "Unicode hex": "1F852"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "104",
        "Dingbat hex": "68",
        "Unicode dec": "129105",
        "Unicode hex": "1F851"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "105",
        "Dingbat hex": "69",
        "Unicode dec": "129107",
        "Unicode hex": "1F853"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "106",
        "Dingbat hex": "6A",
        "Unicode dec": "129108",
        "Unicode hex": "1F854"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "107",
        "Dingbat hex": "6B",
        "Unicode dec": "129109",
        "Unicode hex": "1F855"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "108",
        "Dingbat hex": "6C",
        "Unicode dec": "129111",
        "Unicode hex": "1F857"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "109",
        "Dingbat hex": "6D",
        "Unicode dec": "129110",
        "Unicode hex": "1F856"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "110",
        "Dingbat hex": "6E",
        "Unicode dec": "129112",
        "Unicode hex": "1F858"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "111",
        "Dingbat hex": "6F",
        "Unicode dec": "129113",
        "Unicode hex": "1F859"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "112",
        "Dingbat hex": "70",
        "Unicode dec": "9650",
        "Unicode hex": "25B2"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "113",
        "Dingbat hex": "71",
        "Unicode dec": "9660",
        "Unicode hex": "25BC"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "114",
        "Dingbat hex": "72",
        "Unicode dec": "9651",
        "Unicode hex": "25B3"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "115",
        "Dingbat hex": "73",
        "Unicode dec": "9661",
        "Unicode hex": "25BD"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "116",
        "Dingbat hex": "74",
        "Unicode dec": "9664",
        "Unicode hex": "25C0"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "117",
        "Dingbat hex": "75",
        "Unicode dec": "9654",
        "Unicode hex": "25B6"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "118",
        "Dingbat hex": "76",
        "Unicode dec": "9665",
        "Unicode hex": "25C1"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "119",
        "Dingbat hex": "77",
        "Unicode dec": "9655",
        "Unicode hex": "25B7"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "120",
        "Dingbat hex": "78",
        "Unicode dec": "9699",
        "Unicode hex": "25E3"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "121",
        "Dingbat hex": "79",
        "Unicode dec": "9698",
        "Unicode hex": "25E2"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "122",
        "Dingbat hex": "7A",
        "Unicode dec": "9700",
        "Unicode hex": "25E4"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "123",
        "Dingbat hex": "7B",
        "Unicode dec": "9701",
        "Unicode hex": "25E5"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "124",
        "Dingbat hex": "7C",
        "Unicode dec": "128896",
        "Unicode hex": "1F780"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "125",
        "Dingbat hex": "7D",
        "Unicode dec": "128898",
        "Unicode hex": "1F782"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "126",
        "Dingbat hex": "7E",
        "Unicode dec": "128897",
        "Unicode hex": "1F781"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "128",
        "Dingbat hex": "80",
        "Unicode dec": "128899",
        "Unicode hex": "1F783"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "129",
        "Dingbat hex": "81",
        "Unicode dec": "11205",
        "Unicode hex": "2BC5"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "130",
        "Dingbat hex": "82",
        "Unicode dec": "11206",
        "Unicode hex": "2BC6"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "131",
        "Dingbat hex": "83",
        "Unicode dec": "11207",
        "Unicode hex": "2BC7"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "132",
        "Dingbat hex": "84",
        "Unicode dec": "11208",
        "Unicode hex": "2BC8"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "133",
        "Dingbat hex": "85",
        "Unicode dec": "11164",
        "Unicode hex": "2B9C"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "134",
        "Dingbat hex": "86",
        "Unicode dec": "11166",
        "Unicode hex": "2B9E"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "135",
        "Dingbat hex": "87",
        "Unicode dec": "11165",
        "Unicode hex": "2B9D"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "136",
        "Dingbat hex": "88",
        "Unicode dec": "11167",
        "Unicode hex": "2B9F"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "137",
        "Dingbat hex": "89",
        "Unicode dec": "129040",
        "Unicode hex": "1F810"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "138",
        "Dingbat hex": "8A",
        "Unicode dec": "129042",
        "Unicode hex": "1F812"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "139",
        "Dingbat hex": "8B",
        "Unicode dec": "129041",
        "Unicode hex": "1F811"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "140",
        "Dingbat hex": "8C",
        "Unicode dec": "129043",
        "Unicode hex": "1F813"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "141",
        "Dingbat hex": "8D",
        "Unicode dec": "129044",
        "Unicode hex": "1F814"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "142",
        "Dingbat hex": "8E",
        "Unicode dec": "129046",
        "Unicode hex": "1F816"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "143",
        "Dingbat hex": "8F",
        "Unicode dec": "129045",
        "Unicode hex": "1F815"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "144",
        "Dingbat hex": "90",
        "Unicode dec": "129047",
        "Unicode hex": "1F817"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "145",
        "Dingbat hex": "91",
        "Unicode dec": "129048",
        "Unicode hex": "1F818"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "146",
        "Dingbat hex": "92",
        "Unicode dec": "129050",
        "Unicode hex": "1F81A"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "147",
        "Dingbat hex": "93",
        "Unicode dec": "129049",
        "Unicode hex": "1F819"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "148",
        "Dingbat hex": "94",
        "Unicode dec": "129051",
        "Unicode hex": "1F81B"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "149",
        "Dingbat hex": "95",
        "Unicode dec": "129052",
        "Unicode hex": "1F81C"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "150",
        "Dingbat hex": "96",
        "Unicode dec": "129054",
        "Unicode hex": "1F81E"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "151",
        "Dingbat hex": "97",
        "Unicode dec": "129053",
        "Unicode hex": "1F81D"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "152",
        "Dingbat hex": "98",
        "Unicode dec": "129055",
        "Unicode hex": "1F81F"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "153",
        "Dingbat hex": "99",
        "Unicode dec": "129024",
        "Unicode hex": "1F800"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "154",
        "Dingbat hex": "9A",
        "Unicode dec": "129026",
        "Unicode hex": "1F802"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "155",
        "Dingbat hex": "9B",
        "Unicode dec": "129025",
        "Unicode hex": "1F801"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "156",
        "Dingbat hex": "9C",
        "Unicode dec": "129027",
        "Unicode hex": "1F803"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "157",
        "Dingbat hex": "9D",
        "Unicode dec": "129028",
        "Unicode hex": "1F804"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "158",
        "Dingbat hex": "9E",
        "Unicode dec": "129030",
        "Unicode hex": "1F806"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "159",
        "Dingbat hex": "9F",
        "Unicode dec": "129029",
        "Unicode hex": "1F805"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "160",
        "Dingbat hex": "A0",
        "Unicode dec": "129031",
        "Unicode hex": "1F807"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "161",
        "Dingbat hex": "A1",
        "Unicode dec": "129032",
        "Unicode hex": "1F808"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "162",
        "Dingbat hex": "A2",
        "Unicode dec": "129034",
        "Unicode hex": "1F80A"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "163",
        "Dingbat hex": "A3",
        "Unicode dec": "129033",
        "Unicode hex": "1F809"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "164",
        "Dingbat hex": "A4",
        "Unicode dec": "129035",
        "Unicode hex": "1F80B"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "165",
        "Dingbat hex": "A5",
        "Unicode dec": "129056",
        "Unicode hex": "1F820"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "166",
        "Dingbat hex": "A6",
        "Unicode dec": "129058",
        "Unicode hex": "1F822"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "167",
        "Dingbat hex": "A7",
        "Unicode dec": "129060",
        "Unicode hex": "1F824"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "168",
        "Dingbat hex": "A8",
        "Unicode dec": "129062",
        "Unicode hex": "1F826"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "169",
        "Dingbat hex": "A9",
        "Unicode dec": "129064",
        "Unicode hex": "1F828"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "170",
        "Dingbat hex": "AA",
        "Unicode dec": "129066",
        "Unicode hex": "1F82A"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "171",
        "Dingbat hex": "AB",
        "Unicode dec": "129068",
        "Unicode hex": "1F82C"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "172",
        "Dingbat hex": "AC",
        "Unicode dec": "129180",
        "Unicode hex": "1F89C"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "173",
        "Dingbat hex": "AD",
        "Unicode dec": "129181",
        "Unicode hex": "1F89D"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "174",
        "Dingbat hex": "AE",
        "Unicode dec": "129182",
        "Unicode hex": "1F89E"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "175",
        "Dingbat hex": "AF",
        "Unicode dec": "129183",
        "Unicode hex": "1F89F"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "176",
        "Dingbat hex": "B0",
        "Unicode dec": "129070",
        "Unicode hex": "1F82E"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "177",
        "Dingbat hex": "B1",
        "Unicode dec": "129072",
        "Unicode hex": "1F830"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "178",
        "Dingbat hex": "B2",
        "Unicode dec": "129074",
        "Unicode hex": "1F832"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "179",
        "Dingbat hex": "B3",
        "Unicode dec": "129076",
        "Unicode hex": "1F834"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "180",
        "Dingbat hex": "B4",
        "Unicode dec": "129078",
        "Unicode hex": "1F836"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "181",
        "Dingbat hex": "B5",
        "Unicode dec": "129080",
        "Unicode hex": "1F838"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "182",
        "Dingbat hex": "B6",
        "Unicode dec": "129082",
        "Unicode hex": "1F83A"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "183",
        "Dingbat hex": "B7",
        "Unicode dec": "129081",
        "Unicode hex": "1F839"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "184",
        "Dingbat hex": "B8",
        "Unicode dec": "129083",
        "Unicode hex": "1F83B"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "185",
        "Dingbat hex": "B9",
        "Unicode dec": "129176",
        "Unicode hex": "1F898"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "186",
        "Dingbat hex": "BA",
        "Unicode dec": "129178",
        "Unicode hex": "1F89A"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "187",
        "Dingbat hex": "BB",
        "Unicode dec": "129177",
        "Unicode hex": "1F899"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "188",
        "Dingbat hex": "BC",
        "Unicode dec": "129179",
        "Unicode hex": "1F89B"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "189",
        "Dingbat hex": "BD",
        "Unicode dec": "129084",
        "Unicode hex": "1F83C"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "190",
        "Dingbat hex": "BE",
        "Unicode dec": "129086",
        "Unicode hex": "1F83E"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "191",
        "Dingbat hex": "BF",
        "Unicode dec": "129085",
        "Unicode hex": "1F83D"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "192",
        "Dingbat hex": "C0",
        "Unicode dec": "129087",
        "Unicode hex": "1F83F"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "193",
        "Dingbat hex": "C1",
        "Unicode dec": "129088",
        "Unicode hex": "1F840"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "194",
        "Dingbat hex": "C2",
        "Unicode dec": "129090",
        "Unicode hex": "1F842"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "195",
        "Dingbat hex": "C3",
        "Unicode dec": "129089",
        "Unicode hex": "1F841"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "196",
        "Dingbat hex": "C4",
        "Unicode dec": "129091",
        "Unicode hex": "1F843"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "197",
        "Dingbat hex": "C5",
        "Unicode dec": "129092",
        "Unicode hex": "1F844"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "198",
        "Dingbat hex": "C6",
        "Unicode dec": "129094",
        "Unicode hex": "1F846"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "199",
        "Dingbat hex": "C7",
        "Unicode dec": "129093",
        "Unicode hex": "1F845"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "200",
        "Dingbat hex": "C8",
        "Unicode dec": "129095",
        "Unicode hex": "1F847"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "201",
        "Dingbat hex": "C9",
        "Unicode dec": "11176",
        "Unicode hex": "2BA8"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "202",
        "Dingbat hex": "CA",
        "Unicode dec": "11177",
        "Unicode hex": "2BA9"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "203",
        "Dingbat hex": "CB",
        "Unicode dec": "11178",
        "Unicode hex": "2BAA"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "204",
        "Dingbat hex": "CC",
        "Unicode dec": "11179",
        "Unicode hex": "2BAB"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "205",
        "Dingbat hex": "CD",
        "Unicode dec": "11180",
        "Unicode hex": "2BAC"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "206",
        "Dingbat hex": "CE",
        "Unicode dec": "11181",
        "Unicode hex": "2BAD"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "207",
        "Dingbat hex": "CF",
        "Unicode dec": "11182",
        "Unicode hex": "2BAE"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "208",
        "Dingbat hex": "D0",
        "Unicode dec": "11183",
        "Unicode hex": "2BAF"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "209",
        "Dingbat hex": "D1",
        "Unicode dec": "129120",
        "Unicode hex": "1F860"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "210",
        "Dingbat hex": "D2",
        "Unicode dec": "129122",
        "Unicode hex": "1F862"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "211",
        "Dingbat hex": "D3",
        "Unicode dec": "129121",
        "Unicode hex": "1F861"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "212",
        "Dingbat hex": "D4",
        "Unicode dec": "129123",
        "Unicode hex": "1F863"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "213",
        "Dingbat hex": "D5",
        "Unicode dec": "129124",
        "Unicode hex": "1F864"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "214",
        "Dingbat hex": "D6",
        "Unicode dec": "129125",
        "Unicode hex": "1F865"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "215",
        "Dingbat hex": "D7",
        "Unicode dec": "129127",
        "Unicode hex": "1F867"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "216",
        "Dingbat hex": "D8",
        "Unicode dec": "129126",
        "Unicode hex": "1F866"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "217",
        "Dingbat hex": "D9",
        "Unicode dec": "129136",
        "Unicode hex": "1F870"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "218",
        "Dingbat hex": "DA",
        "Unicode dec": "129138",
        "Unicode hex": "1F872"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "219",
        "Dingbat hex": "DB",
        "Unicode dec": "129137",
        "Unicode hex": "1F871"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "220",
        "Dingbat hex": "DC",
        "Unicode dec": "129139",
        "Unicode hex": "1F873"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "221",
        "Dingbat hex": "DD",
        "Unicode dec": "129140",
        "Unicode hex": "1F874"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "222",
        "Dingbat hex": "DE",
        "Unicode dec": "129141",
        "Unicode hex": "1F875"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "223",
        "Dingbat hex": "DF",
        "Unicode dec": "129143",
        "Unicode hex": "1F877"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "224",
        "Dingbat hex": "E0",
        "Unicode dec": "129142",
        "Unicode hex": "1F876"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "225",
        "Dingbat hex": "E1",
        "Unicode dec": "129152",
        "Unicode hex": "1F880"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "226",
        "Dingbat hex": "E2",
        "Unicode dec": "129154",
        "Unicode hex": "1F882"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "227",
        "Dingbat hex": "E3",
        "Unicode dec": "129153",
        "Unicode hex": "1F881"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "228",
        "Dingbat hex": "E4",
        "Unicode dec": "129155",
        "Unicode hex": "1F883"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "229",
        "Dingbat hex": "E5",
        "Unicode dec": "129156",
        "Unicode hex": "1F884"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "230",
        "Dingbat hex": "E6",
        "Unicode dec": "129157",
        "Unicode hex": "1F885"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "231",
        "Dingbat hex": "E7",
        "Unicode dec": "129159",
        "Unicode hex": "1F887"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "232",
        "Dingbat hex": "E8",
        "Unicode dec": "129158",
        "Unicode hex": "1F886"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "233",
        "Dingbat hex": "E9",
        "Unicode dec": "129168",
        "Unicode hex": "1F890"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "234",
        "Dingbat hex": "EA",
        "Unicode dec": "129170",
        "Unicode hex": "1F892"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "235",
        "Dingbat hex": "EB",
        "Unicode dec": "129169",
        "Unicode hex": "1F891"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "236",
        "Dingbat hex": "EC",
        "Unicode dec": "129171",
        "Unicode hex": "1F893"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "237",
        "Dingbat hex": "ED",
        "Unicode dec": "129172",
        "Unicode hex": "1F894"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "238",
        "Dingbat hex": "EE",
        "Unicode dec": "129174",
        "Unicode hex": "1F896"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "239",
        "Dingbat hex": "EF",
        "Unicode dec": "129173",
        "Unicode hex": "1F895"
      },
      {
        "Typeface name": "Wingdings 3",
        "Dingbat dec": "240",
        "Dingbat hex": "F0",
        "Unicode dec": "129175",
        "Unicode hex": "1F897"
      }
    ];
    return qn.default = e, qn;
  }
  var cs;
  function sg() {
    if (cs) return nt;
    cs = 1;
    var e = nt && nt.__importDefault || function(m) {
      return m && m.__esModule ? m : {
        default: m
      };
    };
    Object.defineProperty(nt, "__esModule", {
      value: true
    }), nt.hex = nt.dec = nt.codePoint = void 0;
    for (var t = e(cg()), n = {}, r = String.fromCodePoint ? String.fromCodePoint : g, a = 0, i = t.default; a < i.length; a++) {
      var c = i[a], o = parseInt(c["Unicode dec"], 10), s = {
        codePoint: o,
        string: r(o)
      };
      n[c["Typeface name"].toUpperCase() + "_" + c["Dingbat dec"]] = s;
    }
    function d(m, y) {
      return n[m.toUpperCase() + "_" + y];
    }
    nt.codePoint = d;
    function b(m, y) {
      return d(m, parseInt(y, 10));
    }
    nt.dec = b;
    function p(m, y) {
      return d(m, parseInt(y, 16));
    }
    nt.hex = p;
    function g(m) {
      if (m <= 65535) return String.fromCharCode(m);
      var y = Math.floor((m - 65536) / 1024) + 55296, l = (m - 65536) % 1024 + 56320;
      return String.fromCharCode(y, l);
    }
    return nt;
  }
  var Pn = {}, ss;
  function ug() {
    if (ss) return Pn;
    ss = 1, Pn.uriToZipEntryName = e, Pn.replaceFragment = t;
    function e(n, r) {
      return r.charAt(0) === "/" ? r.substr(1) : n + "/" + r;
    }
    function t(n, r) {
      var a = n.indexOf("#");
      return a !== -1 && (n = n.substring(0, a)), n + "#" + r;
    }
    return Pn;
  }
  var us;
  function dg() {
    if (us) return Mn;
    us = 1, Mn.createBodyReader = o, Mn._readNumberingProperties = d;
    var e = sg(), t = Re, n = $t(), r = gt().Result, a = gt().warning, i = so(), c = ug();
    function o(w) {
      return {
        readXmlElement: function(x) {
          return new s(w).readXmlElement(x);
        },
        readXmlElements: function(x) {
          return new s(w).readXmlElements(x);
        }
      };
    }
    function s(w) {
      var x = [], U = [], E = [], F = w.relationships, C = w.contentTypes, R = w.docxFile, z = w.files, T = w.numbering, B = w.styles;
      function _(Q) {
        var ce = Q.map(P);
        return h(ce);
      }
      function P(Q) {
        if (Q.type === "element") {
          var ce = Z[Q.name];
          if (ce) return ce(Q);
          if (!Object.prototype.hasOwnProperty.call(p, Q.name)) {
            var de = a("An unrecognised element was ignored: " + Q.name);
            return g([
              de
            ]);
          }
        }
        return m();
      }
      function k(Q) {
        return M(Q).map(function(ce) {
          return {
            type: "paragraphProperties",
            styleId: ce.styleId,
            styleName: ce.name,
            alignment: Q.firstOrEmpty("w:jc").attributes["w:val"],
            numbering: d(ce.styleId, Q.firstOrEmpty("w:numPr"), T),
            indent: I(Q.firstOrEmpty("w:ind"))
          };
        });
      }
      function I(Q) {
        return {
          start: Q.attributes["w:start"] || Q.attributes["w:left"],
          end: Q.attributes["w:end"] || Q.attributes["w:right"],
          firstLine: Q.attributes["w:firstLine"],
          hanging: Q.attributes["w:hanging"]
        };
      }
      function H(Q) {
        return ee(Q).map(function(ce) {
          var de = Q.firstOrEmpty("w:sz").attributes["w:val"], ue = /^[0-9]+$/.test(de) ? parseInt(de, 10) / 2 : null;
          return {
            type: "runProperties",
            styleId: ce.styleId,
            styleName: ce.name,
            verticalAlignment: Q.firstOrEmpty("w:vertAlign").attributes["w:val"],
            font: Q.firstOrEmpty("w:rFonts").attributes["w:ascii"],
            fontSize: ue,
            isBold: Y(Q.first("w:b")),
            isUnderline: q(Q.first("w:u")),
            isItalic: Y(Q.first("w:i")),
            isStrikethrough: Y(Q.first("w:strike")),
            isAllCaps: Y(Q.first("w:caps")),
            isSmallCaps: Y(Q.first("w:smallCaps")),
            highlight: $(Q.firstOrEmpty("w:highlight").attributes["w:val"])
          };
        });
      }
      function q(Q) {
        if (Q) {
          var ce = Q.attributes["w:val"];
          return ce !== void 0 && ce !== "false" && ce !== "0" && ce !== "none";
        } else return false;
      }
      function Y(Q) {
        if (Q) {
          var ce = Q.attributes["w:val"];
          return ce !== "false" && ce !== "0";
        } else return false;
      }
      function N(Q) {
        return Q !== "false" && Q !== "0";
      }
      function $(Q) {
        return !Q || Q === "none" ? null : Q;
      }
      function M(Q) {
        return se(Q, "w:pStyle", "Paragraph", B.findParagraphStyleById);
      }
      function ee(Q) {
        return se(Q, "w:rStyle", "Run", B.findCharacterStyleById);
      }
      function te(Q) {
        return se(Q, "w:tblStyle", "Table", B.findTableStyleById);
      }
      function se(Q, ce, de, ue) {
        var be = [], ve = Q.first(ce), xe = null, Ae = null;
        if (ve && (xe = ve.attributes["w:val"], xe)) {
          var We = ue(xe);
          We ? Ae = We.name : be.push(_e(de, xe));
        }
        return l({
          styleId: xe,
          name: Ae
        }, be);
      }
      function le(Q) {
        var ce = Q.attributes["w:fldCharType"];
        if (ce === "begin") x.push({
          type: "begin",
          fldChar: Q
        }), U = [];
        else if (ce === "end") {
          var de = x.pop();
          if (de.type === "begin" && (de = ge(de)), de.type === "checkbox") return y(n.checkbox({
            checked: de.checked
          }));
        } else if (ce === "separate") {
          var ue = x.pop(), be = ge(ue);
          x.push(be);
        }
        return m();
      }
      function fe() {
        var Q = t.last(x.filter(function(ce) {
          return ce.type === "hyperlink";
        }));
        return Q ? Q.options : null;
      }
      function ge(Q) {
        return me(U.join(""), Q.type === "begin" ? Q.fldChar : i.emptyElement);
      }
      function me(Q, ce) {
        var de = /\s*HYPERLINK "(.*)"/.exec(Q);
        if (de) return {
          type: "hyperlink",
          options: {
            href: de[1]
          }
        };
        var ue = /\s*HYPERLINK\s+\\l\s+"(.*)"/.exec(Q);
        if (ue) return {
          type: "hyperlink",
          options: {
            anchor: ue[1]
          }
        };
        var be = /\s*FORMCHECKBOX\s*/.exec(Q);
        if (be) {
          var ve = ce.firstOrEmpty("w:ffData").firstOrEmpty("w:checkBox"), xe = ve.first("w:checked"), Ae = xe == null ? Y(ve.first("w:default")) : Y(xe);
          return {
            type: "checkbox",
            checked: Ae
          };
        }
        return {
          type: "unknown"
        };
      }
      function De(Q) {
        return U.push(Q.text()), m();
      }
      function Ce(Q) {
        var ce = Q.attributes["w:font"], de = Q.attributes["w:char"], ue = e.hex(ce, de);
        return ue == null && /^F0..$/.test(de) && (ue = e.hex(ce, de.substring(2))), ue == null ? g([
          a("A w:sym element with an unsupported character was ignored: char " + de + " in font " + ce)
        ]) : y(new n.Text(ue.string));
      }
      function we(Q) {
        return function(ce) {
          var de = ce.attributes["w:id"];
          return y(new n.NoteReference({
            noteType: Q,
            noteId: de
          }));
        };
      }
      function D(Q) {
        return y(n.commentReference({
          commentId: Q.attributes["w:id"]
        }));
      }
      function G(Q) {
        return _(Q.children);
      }
      var Z = {
        "w:p": function(Q) {
          var ce = Q.firstOrEmpty("w:pPr"), de = !!ce.firstOrEmpty("w:rPr").first("w:del");
          if (de) return Q.children.forEach(function(be) {
            E.push(be);
          }), m();
          var ue = Q.children;
          return E.length > 0 && (ue = E.concat(ue), E = []), u.map(k(ce), _(ue), function(be, ve) {
            return new n.Paragraph(ve, be);
          }).insertExtra();
        },
        "w:r": function(Q) {
          return u.map(H(Q.firstOrEmpty("w:rPr")), _(Q.children), function(ce, de) {
            var ue = fe();
            return ue !== null && (de = [
              new n.Hyperlink(de, ue)
            ]), new n.Run(de, ce);
          });
        },
        "w:fldChar": le,
        "w:instrText": De,
        "w:t": function(Q) {
          return y(new n.Text(Q.text()));
        },
        "w:tab": function(Q) {
          return y(new n.Tab());
        },
        "w:noBreakHyphen": function() {
          return y(new n.Text("\u2011"));
        },
        "w:softHyphen": function(Q) {
          return y(new n.Text("\xAD"));
        },
        "w:sym": Ce,
        "w:hyperlink": function(Q) {
          var ce = Q.attributes["r:id"], de = Q.attributes["w:anchor"];
          return _(Q.children).map(function(ue) {
            function be(xe) {
              var Ae = Q.attributes["w:tgtFrame"] || null;
              return new n.Hyperlink(ue, t.extend({
                targetFrame: Ae
              }, xe));
            }
            if (ce) {
              var ve = F.findTargetByRelationshipId(ce);
              return de && (ve = c.replaceFragment(ve, de)), be({
                href: ve
              });
            } else return de ? be({
              anchor: de
            }) : ue;
          });
        },
        "w:tbl": O,
        "w:tr": X,
        "w:tc": ae,
        "w:footnoteReference": we("footnote"),
        "w:endnoteReference": we("endnote"),
        "w:commentReference": D,
        "w:br": function(Q) {
          var ce = Q.attributes["w:type"];
          return ce == null || ce === "textWrapping" ? y(n.lineBreak) : ce === "page" ? y(n.pageBreak) : ce === "column" ? y(n.columnBreak) : g([
            a("Unsupported break type: " + ce)
          ]);
        },
        "w:bookmarkStart": function(Q) {
          var ce = Q.attributes["w:name"];
          return ce === "_GoBack" ? m() : y(new n.BookmarkStart({
            name: ce
          }));
        },
        "mc:AlternateContent": function(Q) {
          return G(Q.first("mc:Fallback"));
        },
        "w:sdt": function(Q) {
          var ce = Q.firstOrEmpty("w:sdtPr").first("wordml:checkbox");
          if (ce) {
            var de = ce.first("wordml:checked"), ue = !!de && N(de.attributes["wordml:val"]);
            return y(n.checkbox({
              checked: ue
            }));
          } else return _(Q.firstOrEmpty("w:sdtContent").children);
        },
        "w:ins": G,
        "w:object": G,
        "w:smartTag": G,
        "w:drawing": G,
        "w:pict": function(Q) {
          return G(Q).toExtra();
        },
        "v:roundrect": G,
        "v:shape": G,
        "v:textbox": G,
        "w:txbxContent": G,
        "wp:inline": L,
        "wp:anchor": L,
        "v:imagedata": he,
        "v:group": G,
        "v:rect": G
      };
      return {
        readXmlElement: P,
        readXmlElements: _
      };
      function O(Q) {
        var ce = W(Q.firstOrEmpty("w:tblPr"));
        return _(Q.children).flatMap(K).flatMap(function(de) {
          return ce.map(function(ue) {
            return n.Table(de, ue);
          });
        });
      }
      function W(Q) {
        return te(Q).map(function(ce) {
          return {
            styleId: ce.styleId,
            styleName: ce.name
          };
        });
      }
      function X(Q) {
        var ce = Q.firstOrEmpty("w:trPr"), de = !!ce.first("w:tblHeader");
        return _(Q.children).map(function(ue) {
          return n.TableRow(ue, {
            isHeader: de
          });
        });
      }
      function ae(Q) {
        return _(Q.children).map(function(ce) {
          var de = Q.firstOrEmpty("w:tcPr"), ue = de.firstOrEmpty("w:gridSpan").attributes["w:val"], be = ue ? parseInt(ue, 10) : 1, ve = n.TableCell(ce, {
            colSpan: be
          });
          return ve._vMerge = ne(de), ve;
        });
      }
      function ne(Q) {
        var ce = Q.first("w:vMerge");
        if (ce) {
          var de = ce.attributes["w:val"];
          return de === "continue" || !de;
        } else return null;
      }
      function K(Q) {
        var ce = t.any(Q, function(be) {
          return be.type !== n.types.tableRow;
        });
        if (ce) return l(Q, [
          a("unexpected non-row element in table, cell merging may be incorrect")
        ]);
        var de = t.any(Q, function(be) {
          return t.any(be.children, function(ve) {
            return ve.type !== n.types.tableCell;
          });
        });
        if (de) return l(Q, [
          a("unexpected non-cell element in table row, cell merging may be incorrect")
        ]);
        var ue = {};
        return Q.forEach(function(be) {
          var ve = 0;
          be.children.forEach(function(xe) {
            xe._vMerge && ue[ve] ? ue[ve].rowSpan++ : (ue[ve] = xe, xe._vMerge = false), ve += xe.colSpan;
          });
        }), Q.forEach(function(be) {
          be.children = be.children.filter(function(ve) {
            return !ve._vMerge;
          }), be.children.forEach(function(ve) {
            delete ve._vMerge;
          });
        }), y(Q);
      }
      function L(Q) {
        var ce = Q.getElementsByTagName("a:graphic").getElementsByTagName("a:graphicData").getElementsByTagName("pic:pic").getElementsByTagName("pic:blipFill").getElementsByTagName("a:blip");
        return h(ce.map(V.bind(null, Q)));
      }
      function V(Q, ce) {
        var de = Q.first("wp:docPr").attributes, ue = J(de.descr) ? de.title : de.descr, be = ie(ce);
        return be === null ? g([
          a("Could not find image file for a:blip element")
        ]) : Ue(be, ue);
      }
      function J(Q) {
        return Q == null || /^\s*$/.test(Q);
      }
      function ie(Q) {
        var ce = Q.attributes["r:embed"], de = Q.attributes["r:link"];
        if (ce) return ye(ce);
        if (de) {
          var ue = F.findTargetByRelationshipId(de);
          return {
            path: ue,
            read: z.read.bind(z, ue)
          };
        } else return null;
      }
      function he(Q) {
        var ce = Q.attributes["r:id"];
        return ce ? Ue(ye(ce), Q.attributes["o:title"]) : g([
          a("A v:imagedata element without a relationship ID was ignored")
        ]);
      }
      function ye(Q) {
        var ce = c.uriToZipEntryName("word", F.findTargetByRelationshipId(Q));
        return {
          path: ce,
          read: R.read.bind(R, ce)
        };
      }
      function Ue(Q, ce) {
        var de = C.findContentType(Q.path), ue = n.Image({
          readImage: Q.read,
          altText: ce,
          contentType: de
        }), be = b[de] ? [] : a("Image of type " + de + " is unlikely to display in web browsers");
        return l(ue, be);
      }
      function _e(Q, ce) {
        return a(Q + " style with ID " + ce + " was referenced but not defined in the document");
      }
    }
    function d(w, x, U) {
      var E = x.firstOrEmpty("w:ilvl").attributes["w:val"], F = x.firstOrEmpty("w:numId").attributes["w:val"];
      if (E !== void 0 && F !== void 0) return U.findLevel(F, E);
      if (w != null) {
        var C = U.findLevelByParagraphStyleId(w);
        if (C != null) return C;
      }
      return null;
    }
    var b = {
      "image/png": true,
      "image/gif": true,
      "image/jpeg": true,
      "image/svg+xml": true,
      "image/tiff": true
    }, p = {
      "office-word:wrap": true,
      "v:shadow": true,
      "v:shapetype": true,
      "w:annotationRef": true,
      "w:bookmarkEnd": true,
      "w:sectPr": true,
      "w:proofErr": true,
      "w:lastRenderedPageBreak": true,
      "w:commentRangeStart": true,
      "w:commentRangeEnd": true,
      "w:del": true,
      "w:footnoteRef": true,
      "w:endnoteRef": true,
      "w:pPr": true,
      "w:rPr": true,
      "w:tblPr": true,
      "w:tblGrid": true,
      "w:trPr": true,
      "w:tcPr": true
    };
    function g(w) {
      return new u(null, null, w);
    }
    function m() {
      return new u(null);
    }
    function y(w) {
      return new u(w);
    }
    function l(w, x) {
      return new u(w, null, x);
    }
    function u(w, x, U) {
      this.value = w || [], this.extra = x || [], this._result = new r({
        element: this.value,
        extra: x
      }, U), this.messages = this._result.messages;
    }
    u.prototype.toExtra = function() {
      return new u(null, f(this.extra, this.value), this.messages);
    }, u.prototype.insertExtra = function() {
      var w = this.extra;
      return w && w.length ? new u(f(this.value, w), null, this.messages) : this;
    }, u.prototype.map = function(w) {
      var x = this._result.map(function(U) {
        return w(U.element);
      });
      return new u(x.value, this.extra, x.messages);
    }, u.prototype.flatMap = function(w) {
      var x = this._result.flatMap(function(U) {
        return w(U.element)._result;
      });
      return new u(x.value.element, f(this.extra, x.value.extra), x.messages);
    }, u.map = function(w, x, U) {
      return new u(U(w.value, x.value), f(w.extra, x.extra), w.messages.concat(x.messages));
    };
    function h(w) {
      var x = r.combine(t.pluck(w, "_result"));
      return new u(t.flatten(t.pluck(x.value, "element")), t.filter(t.flatten(t.pluck(x.value, "extra")), v), x.messages);
    }
    function f(w, x) {
      return t.flatten([
        w,
        x
      ]);
    }
    function v(w) {
      return w;
    }
    return Mn;
  }
  var qi = {}, ds;
  function lg() {
    if (ds) return qi;
    ds = 1, qi.DocumentXmlReader = n;
    var e = $t(), t = gt().Result;
    function n(r) {
      var a = r.bodyReader;
      function i(c) {
        var o = c.first("w:body");
        if (o == null) throw new Error("Could not find the body element: are you sure this is a docx file?");
        var s = a.readXmlElements(o.children).map(function(d) {
          return new e.Document(d, {
            notes: r.notes,
            comments: r.comments
          });
        });
        return new t(s.value, s.messages);
      }
      return {
        convertXmlToDocument: i
      };
    }
    return qi;
  }
  var dn = {}, ls;
  function fg() {
    if (ls) return dn;
    ls = 1, dn.readRelationships = e, dn.defaultValue = new t([]), dn.Relationships = t;
    function e(n) {
      var r = [];
      return n.children.forEach(function(a) {
        if (a.name === "relationships:Relationship") {
          var i = {
            relationshipId: a.attributes.Id,
            target: a.attributes.Target,
            type: a.attributes.Type
          };
          r.push(i);
        }
      }), new t(r);
    }
    function t(n) {
      var r = {};
      n.forEach(function(i) {
        r[i.relationshipId] = i.target;
      });
      var a = {};
      return n.forEach(function(i) {
        a[i.type] || (a[i.type] = []), a[i.type].push(i.target);
      }), {
        findTargetByRelationshipId: function(i) {
          return r[i];
        },
        findTargetsByType: function(i) {
          return a[i] || [];
        }
      };
    }
    return dn;
  }
  var jn = {}, fs;
  function hg() {
    if (fs) return jn;
    fs = 1, jn.readContentTypesFromXml = t;
    var e = {
      png: "png",
      gif: "gif",
      jpeg: "jpeg",
      jpg: "jpeg",
      tif: "tiff",
      tiff: "tiff",
      bmp: "bmp"
    };
    jn.defaultContentTypes = n({}, {});
    function t(r) {
      var a = {}, i = {};
      return r.children.forEach(function(c) {
        if (c.name === "content-types:Default" && (a[c.attributes.Extension] = c.attributes.ContentType), c.name === "content-types:Override") {
          var o = c.attributes.PartName;
          o.charAt(0) === "/" && (o = o.substring(1)), i[o] = c.attributes.ContentType;
        }
      }), n(i, a);
    }
    function n(r, a) {
      return {
        findContentType: function(i) {
          var c = r[i];
          if (c) return c;
          var o = i.split("."), s = o[o.length - 1];
          if (a.hasOwnProperty(s)) return a[s];
          var d = e[s.toLowerCase()];
          return d ? "image/" + d : null;
        }
      };
    }
    return jn;
  }
  var ln = {}, hs;
  function pg() {
    if (hs) return ln;
    hs = 1;
    var e = Re;
    ln.readNumberingXml = n, ln.Numbering = t, ln.defaultNumbering = new t({}, {});
    function t(c, o, s) {
      var d = e.flatten(e.values(o).map(function(m) {
        return e.values(m.levels);
      })), b = e.indexBy(d.filter(function(m) {
        return m.paragraphStyleId != null;
      }), "paragraphStyleId");
      function p(m, y) {
        var l = c[m];
        if (l) {
          var u = o[l.abstractNumId];
          if (u) {
            if (u.numStyleLink == null) return o[l.abstractNumId].levels[y];
            var h = s.findNumberingStyleById(u.numStyleLink);
            return p(h.numId, y);
          } else return null;
        } else return null;
      }
      function g(m) {
        return b[m] || null;
      }
      return {
        findLevel: p,
        findLevelByParagraphStyleId: g
      };
    }
    function n(c, o) {
      if (!o || !o.styles) throw new Error("styles is missing");
      var s = r(c), d = i(c);
      return new t(d, s, o.styles);
    }
    function r(c) {
      var o = {};
      return c.getElementsByTagName("w:abstractNum").forEach(function(s) {
        var d = s.attributes["w:abstractNumId"];
        o[d] = a(s);
      }), o;
    }
    function a(c) {
      var o = {};
      c.getElementsByTagName("w:lvl").forEach(function(d) {
        var b = d.attributes["w:ilvl"], p = d.firstOrEmpty("w:numFmt").attributes["w:val"], g = d.firstOrEmpty("w:pStyle").attributes["w:val"];
        o[b] = {
          isOrdered: p !== "bullet",
          level: b,
          paragraphStyleId: g
        };
      });
      var s = c.firstOrEmpty("w:numStyleLink").attributes["w:val"];
      return {
        levels: o,
        numStyleLink: s
      };
    }
    function i(c) {
      var o = {};
      return c.getElementsByTagName("w:num").forEach(function(s) {
        var d = s.attributes["w:numId"], b = s.first("w:abstractNumId").attributes["w:val"];
        o[d] = {
          abstractNumId: b
        };
      }), o;
    }
    return ln;
  }
  var fn = {}, ps;
  function gg() {
    if (ps) return fn;
    ps = 1, fn.readStylesXml = t, fn.Styles = e, fn.defaultStyles = new e({}, {});
    function e(i, c, o, s) {
      return {
        findParagraphStyleById: function(d) {
          return i[d];
        },
        findCharacterStyleById: function(d) {
          return c[d];
        },
        findTableStyleById: function(d) {
          return o[d];
        },
        findNumberingStyleById: function(d) {
          return s[d];
        }
      };
    }
    e.EMPTY = new e({}, {}, {}, {});
    function t(i) {
      var c = {}, o = {}, s = {}, d = {}, b = {
        paragraph: c,
        character: o,
        table: s
      };
      return i.getElementsByTagName("w:style").forEach(function(p) {
        var g = n(p);
        if (g.type === "numbering") d[g.styleId] = a(p);
        else {
          var m = b[g.type];
          m && (m[g.styleId] = g);
        }
      }), new e(c, o, s, d);
    }
    function n(i) {
      var c = i.attributes["w:type"], o = i.attributes["w:styleId"], s = r(i);
      return {
        type: c,
        styleId: o,
        name: s
      };
    }
    function r(i) {
      var c = i.first("w:name");
      return c ? c.attributes["w:val"] : null;
    }
    function a(i) {
      var c = i.firstOrEmpty("w:pPr").firstOrEmpty("w:numPr").firstOrEmpty("w:numId").attributes["w:val"];
      return {
        numId: c
      };
    }
    return fn;
  }
  var Ht = {}, gs;
  function mg() {
    if (gs) return Ht;
    gs = 1;
    var e = $t(), t = gt().Result;
    Ht.createFootnotesReader = n.bind(Ht, "footnote"), Ht.createEndnotesReader = n.bind(Ht, "endnote");
    function n(r, a) {
      function i(s) {
        return t.combine(s.getElementsByTagName("w:" + r).filter(c).map(o));
      }
      function c(s) {
        var d = s.attributes["w:type"];
        return d !== "continuationSeparator" && d !== "separator";
      }
      function o(s) {
        var d = s.attributes["w:id"];
        return a.readXmlElements(s.children).map(function(b) {
          return e.Note({
            noteType: r,
            noteId: d,
            body: b
          });
        });
      }
      return i;
    }
    return Ht;
  }
  var Pi = {}, ms;
  function bg() {
    if (ms) return Pi;
    ms = 1;
    var e = $t(), t = gt().Result;
    function n(r) {
      function a(c) {
        return t.combine(c.getElementsByTagName("w:comment").map(i));
      }
      function i(c) {
        var o = c.attributes["w:id"];
        function s(d) {
          return (c.attributes[d] || "").trim() || null;
        }
        return r.readXmlElements(c.children).map(function(d) {
          return e.comment({
            commentId: o,
            body: d,
            authorName: s("w:author"),
            authorInitials: s("w:initials")
          });
        });
      }
      return a;
    }
    return Pi.createCommentsReader = n, Pi;
  }
  var ji = {}, bs;
  function yg() {
    if (bs) return ji;
    bs = 1;
    var e = At();
    ji.Files = t;
    function t() {
      function n(r) {
        return e.reject(new Error("could not open external image: '" + r + `'
cannot open linked files from a web browser`));
      }
      return {
        read: n
      };
    }
    return ji;
  }
  var ys;
  function vg() {
    if (ys) return Wn;
    ys = 1, Wn.read = y, Wn._findPartPaths = l;
    var e = At(), t = $t(), n = gt().Result, r = Xd(), a = og().readXmlFromZipFile, i = dg().createBodyReader, c = lg().DocumentXmlReader, o = fg(), s = hg(), d = pg(), b = gg(), p = mg(), g = bg(), m = yg().Files;
    function y(C, R) {
      return R = R || {}, e.props({
        contentTypes: x(C),
        partPaths: l(C),
        docxFile: C,
        files: R.path ? m.relativeToFile(R.path) : new m(null)
      }).also(function(z) {
        return {
          styles: E(C, z.partPaths.styles)
        };
      }).also(function(z) {
        return {
          numbering: U(C, z.partPaths.numbering, z.styles)
        };
      }).also(function(z) {
        return {
          footnotes: v(z.partPaths.footnotes, z, function(T, B) {
            return B ? p.createFootnotesReader(T)(B) : new n([]);
          }),
          endnotes: v(z.partPaths.endnotes, z, function(T, B) {
            return B ? p.createEndnotesReader(T)(B) : new n([]);
          }),
          comments: v(z.partPaths.comments, z, function(T, B) {
            return B ? g.createCommentsReader(T)(B) : new n([]);
          })
        };
      }).also(function(z) {
        return {
          notes: z.footnotes.flatMap(function(T) {
            return z.endnotes.map(function(B) {
              return new t.Notes(T.concat(B));
            });
          })
        };
      }).then(function(z) {
        return v(z.partPaths.mainDocument, z, function(T, B) {
          return z.notes.flatMap(function(_) {
            return z.comments.flatMap(function(P) {
              var k = new c({
                bodyReader: T,
                notes: _,
                comments: P
              });
              return k.convertXmlToDocument(B);
            });
          });
        });
      });
    }
    function l(C) {
      return F(C).then(function(R) {
        var z = u({
          docxFile: C,
          relationships: R,
          relationshipType: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument",
          basePath: "",
          fallbackPath: "word/document.xml"
        });
        if (!C.exists(z)) throw new Error("Could not find main document part. Are you sure this is a valid .docx file?");
        return f({
          filename: w(z),
          readElement: o.readRelationships,
          defaultValue: o.defaultValue
        })(C).then(function(T) {
          function B(_) {
            return u({
              docxFile: C,
              relationships: T,
              relationshipType: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/" + _,
              basePath: r.splitPath(z).dirname,
              fallbackPath: "word/" + _ + ".xml"
            });
          }
          return {
            mainDocument: z,
            comments: B("comments"),
            endnotes: B("endnotes"),
            footnotes: B("footnotes"),
            numbering: B("numbering"),
            styles: B("styles")
          };
        });
      });
    }
    function u(C) {
      var R = C.docxFile, z = C.relationships, T = C.relationshipType, B = C.basePath, _ = C.fallbackPath, P = z.findTargetsByType(T), k = P.map(function(H) {
        return h(r.joinPath(B, H), "/");
      }), I = k.filter(function(H) {
        return R.exists(H);
      });
      return I.length === 0 ? _ : I[0];
    }
    function h(C, R) {
      return C.substring(0, R.length) === R ? C.substring(R.length) : C;
    }
    function f(C) {
      return function(R) {
        return a(R, C.filename).then(function(z) {
          return z ? C.readElement(z) : C.defaultValue;
        });
      };
    }
    function v(C, R, z) {
      var T = f({
        filename: w(C),
        readElement: o.readRelationships,
        defaultValue: o.defaultValue
      });
      return T(R.docxFile).then(function(B) {
        var _ = new i({
          relationships: B,
          contentTypes: R.contentTypes,
          docxFile: R.docxFile,
          numbering: R.numbering,
          styles: R.styles,
          files: R.files
        });
        return a(R.docxFile, C).then(function(P) {
          return z(_, P);
        });
      });
    }
    function w(C) {
      var R = r.splitPath(C);
      return r.joinPath(R.dirname, "_rels", R.basename + ".rels");
    }
    var x = f({
      filename: "[Content_Types].xml",
      readElement: s.readContentTypesFromXml,
      defaultValue: s.defaultContentTypes
    });
    function U(C, R, z) {
      return f({
        filename: R,
        readElement: function(T) {
          return d.readNumberingXml(T, {
            styles: z
          });
        },
        defaultValue: d.defaultNumbering
      })(C);
    }
    function E(C, R) {
      return f({
        filename: R,
        readElement: b.readStylesXml,
        defaultValue: b.defaultStyles
      })(C);
    }
    var F = f({
      filename: "_rels/.rels",
      readElement: o.readRelationships,
      defaultValue: o.defaultValue
    });
    return Wn;
  }
  var $n = {}, vs;
  function Dg() {
    if (vs) return $n;
    vs = 1;
    var e = Re, t = At(), n = so();
    $n.writeStyleMap = c, $n.readStyleMap = b;
    var r = "http://schemas.zwobble.org/mammoth/style-map", a = "mammoth/style-map", i = "/" + a;
    function c(p, g) {
      return p.write(a, g), o(p).then(function() {
        return s(p);
      });
    }
    function o(p) {
      var g = "word/_rels/document.xml.rels", m = "http://schemas.openxmlformats.org/package/2006/relationships", y = "{" + m + "}Relationship";
      return p.read(g, "utf8").then(n.readString).then(function(l) {
        var u = l.children;
        d(u, y, "Id", {
          Id: "rMammothStyleMap",
          Type: r,
          Target: i
        });
        var h = {
          "": m
        };
        return p.write(g, n.writeString(l, h));
      });
    }
    function s(p) {
      var g = "[Content_Types].xml", m = "http://schemas.openxmlformats.org/package/2006/content-types", y = "{" + m + "}Override";
      return p.read(g, "utf8").then(n.readString).then(function(l) {
        var u = l.children;
        d(u, y, "PartName", {
          PartName: i,
          ContentType: "text/prs.mammoth.style-map"
        });
        var h = {
          "": m
        };
        return p.write(g, n.writeString(l, h));
      });
    }
    function d(p, g, m, y) {
      var l = e.find(p, function(u) {
        return u.name === g && u.attributes[m] === y[m];
      });
      l ? l.attributes = y : p.push(n.element(g, y));
    }
    function b(p) {
      return p.exists(a) ? p.read(a, "utf8") : t.resolve(null);
    }
    return $n;
  }
  var zn = {}, Ot = {}, dt = {}, vt = {}, Ds;
  function Kd() {
    if (Ds) return vt;
    Ds = 1;
    var e = Hr();
    function t(s, d, b) {
      return r(e.element(s, d, {
        fresh: false
      }), b);
    }
    function n(s, d, b) {
      var p = e.element(s, d, {
        fresh: true
      });
      return r(p, b);
    }
    function r(s, d) {
      return {
        type: "element",
        tag: s,
        children: d || []
      };
    }
    function a(s) {
      return {
        type: "text",
        value: s
      };
    }
    var i = {
      type: "forceWrite"
    };
    vt.freshElement = n, vt.nonFreshElement = t, vt.elementWithTag = r, vt.text = a, vt.forceWrite = i;
    var c = {
      br: true,
      hr: true,
      img: true,
      input: true
    };
    function o(s) {
      return s.children.length === 0 && c[s.tag.tagName];
    }
    return vt.isVoidElement = o, vt;
  }
  var $i, xs;
  function xg() {
    if (xs) return $i;
    xs = 1;
    var e = Re, t = Kd();
    function n(l) {
      return r(d(l));
    }
    function r(l) {
      var u = [];
      return l.map(a).forEach(function(h) {
        s(u, h);
      }), u;
    }
    function a(l) {
      return i[l.type](l);
    }
    var i = {
      element: c,
      text: o,
      forceWrite: o
    };
    function c(l) {
      return t.elementWithTag(l.tag, r(l.children));
    }
    function o(l) {
      return l;
    }
    function s(l, u) {
      var h = l[l.length - 1];
      u.type === "element" && !u.tag.fresh && h && h.type === "element" && u.tag.matchesElement(h.tag) ? (u.tag.separator && s(h.children, t.text(u.tag.separator)), u.children.forEach(function(f) {
        s(h.children, f);
      })) : l.push(u);
    }
    function d(l) {
      return b(l, function(u) {
        return p[u.type](u);
      });
    }
    function b(l, u) {
      return e.flatten(e.map(l, u), true);
    }
    var p = {
      element: m,
      text: y,
      forceWrite: g
    };
    function g(l) {
      return [
        l
      ];
    }
    function m(l) {
      var u = d(l.children);
      return u.length === 0 && !t.isVoidElement(l) ? [] : [
        t.elementWithTag(l.tag, u)
      ];
    }
    function y(l) {
      return l.value.length === 0 ? [] : [
        l
      ];
    }
    return $i = n, $i;
  }
  var _s;
  function Vr() {
    if (_s) return dt;
    _s = 1;
    var e = Kd();
    dt.freshElement = e.freshElement, dt.nonFreshElement = e.nonFreshElement, dt.elementWithTag = e.elementWithTag, dt.text = e.text, dt.forceWrite = e.forceWrite, dt.simplify = xg();
    function t(c, o) {
      o.forEach(function(s) {
        n(c, s);
      });
    }
    function n(c, o) {
      r[o.type](c, o);
    }
    var r = {
      element: a,
      text: i,
      forceWrite: function() {
      }
    };
    function a(c, o) {
      e.isVoidElement(o) ? c.selfClosing(o.tag.tagName, o.tag.attributes) : (c.open(o.tag.tagName, o.tag.attributes), t(c, o.children), c.close(o.tag.tagName));
    }
    function i(c, o) {
      c.text(o.value);
    }
    return dt.write = t, dt;
  }
  var ws;
  function Hr() {
    if (ws) return Ot;
    ws = 1;
    var e = Re, t = Vr();
    Ot.topLevelElement = n, Ot.elements = r, Ot.element = i;
    function n(o, s) {
      return r([
        i(o, s, {
          fresh: true
        })
      ]);
    }
    function r(o) {
      return new a(o.map(function(s) {
        return e.isString(s) ? i(s) : s;
      }));
    }
    function a(o) {
      this._elements = o;
    }
    a.prototype.wrap = function(s) {
      for (var d = s(), b = this._elements.length - 1; b >= 0; b--) d = this._elements[b].wrapNodes(d);
      return d;
    };
    function i(o, s, d) {
      return d = d || {}, new c(o, s, d);
    }
    function c(o, s, d) {
      var b = {};
      e.isArray(o) ? (o.forEach(function(p) {
        b[p] = true;
      }), o = o[0]) : b[o] = true, this.tagName = o, this.tagNames = b, this.attributes = s || {}, this.fresh = d.fresh, this.separator = d.separator;
    }
    return c.prototype.matchesElement = function(o) {
      return this.tagNames[o.tagName] && e.isEqual(this.attributes || {}, o.attributes || {});
    }, c.prototype.wrap = function(s) {
      return this.wrapNodes(s());
    }, c.prototype.wrapNodes = function(s) {
      return [
        t.elementWithTag(this, s)
      ];
    }, Ot.empty = r([]), Ot.ignore = {
      wrap: function() {
        return [];
      }
    }, Ot;
  }
  var zi = {}, Us;
  function Yd() {
    return Us || (Us = 1, function(e) {
      var t = Re, n = At(), r = Vr();
      e.imgElement = a;
      function a(i) {
        return function(c, o) {
          return n.when(i(c)).then(function(s) {
            var d = {};
            return c.altText && (d.alt = c.altText), t.extend(d, s), [
              r.freshElement("img", d)
            ];
          });
        };
      }
      e.inline = e.imgElement, e.dataUri = a(function(i) {
        return i.readAsBase64String().then(function(c) {
          return {
            src: "data:" + i.contentType + ";base64," + c
          };
        });
      });
    }(zi)), zi;
  }
  var Xi = {}, Vi = {}, Ts;
  function _g() {
    if (Ts) return Vi;
    Ts = 1;
    var e = Re;
    Vi.writer = t;
    function t(o) {
      return o = o || {}, o.prettyPrint ? r() : a();
    }
    var n = {
      div: true,
      p: true,
      ul: true,
      li: true
    };
    function r() {
      var o = 0, s = "  ", d = [], b = true, p = false, g = a();
      function m(x, U) {
        n[x] && v(), d.push(x), g.open(x, U), n[x] && o++, b = false;
      }
      function y(x) {
        n[x] && (o--, v()), d.pop(), g.close(x);
      }
      function l(x) {
        f();
        var U = w() ? x : x.replace(`
`, `
` + s);
        g.text(U);
      }
      function u(x, U) {
        v(), g.selfClosing(x, U);
      }
      function h() {
        return d.length === 0 || n[d[d.length - 1]];
      }
      function f() {
        p || (v(), p = true);
      }
      function v() {
        if (p = false, !b && h() && !w()) {
          g._append(`
`);
          for (var x = 0; x < o; x++) g._append(s);
        }
      }
      function w() {
        return e.some(d, function(x) {
          return x === "pre";
        });
      }
      return {
        asString: g.asString,
        open: m,
        close: y,
        text: l,
        selfClosing: u
      };
    }
    function a() {
      var o = [];
      function s(l, u) {
        var h = p(u);
        o.push("<" + l + h + ">");
      }
      function d(l) {
        o.push("</" + l + ">");
      }
      function b(l, u) {
        var h = p(u);
        o.push("<" + l + h + " />");
      }
      function p(l) {
        return e.map(l, function(u, h) {
          return " " + h + '="' + c(u) + '"';
        }).join("");
      }
      function g(l) {
        o.push(i(l));
      }
      function m(l) {
        o.push(l);
      }
      function y() {
        return o.join("");
      }
      return {
        asString: y,
        open: s,
        close: d,
        text: g,
        selfClosing: b,
        _append: m
      };
    }
    function i(o) {
      return o.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }
    function c(o) {
      return o.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }
    return Vi;
  }
  var Hi = {}, Es;
  function wg() {
    if (Es) return Hi;
    Es = 1;
    var e = Re;
    function t(p) {
      return n(p, p);
    }
    function n(p, g) {
      return function() {
        return {
          start: p,
          end: g
        };
      };
    }
    function r(p) {
      var g = p.href || "";
      return g ? {
        start: "[",
        end: "](" + g + ")",
        anchorPosition: "before"
      } : {};
    }
    function a(p) {
      var g = p.src || "", m = p.alt || "";
      return g || m ? {
        start: "![" + m + "](" + g + ")"
      } : {};
    }
    function i(p) {
      return function(g, m) {
        return {
          start: m ? `
` : "",
          end: m ? "" : `
`,
          list: {
            isOrdered: p.isOrdered,
            indent: m ? m.indent + 1 : 0,
            count: 0
          }
        };
      };
    }
    function c(p, g, m) {
      g = g || {
        indent: 0,
        isOrdered: false,
        count: 0
      }, g.count++, m.hasClosed = false;
      var y = g.isOrdered ? g.count + "." : "-", l = s("	", g.indent) + y + " ";
      return {
        start: l,
        end: function() {
          if (!m.hasClosed) return m.hasClosed = true, `
`;
        }
      };
    }
    var o = {
      p: n("", `

`),
      br: n("", `  
`),
      ul: i({
        isOrdered: false
      }),
      ol: i({
        isOrdered: true
      }),
      li: c,
      strong: t("__"),
      em: t("*"),
      a: r,
      img: a
    };
    (function() {
      for (var p = 1; p <= 6; p++) o["h" + p] = n(s("#", p) + " ", `

`);
    })();
    function s(p, g) {
      return new Array(g + 1).join(p);
    }
    function d() {
      var p = [], g = [], m = null, y = {};
      function l(x, U) {
        U = U || {};
        var E = o[x] || function() {
          return {};
        }, F = E(U, m, y);
        g.push({
          end: F.end,
          list: m
        }), F.list && (m = F.list);
        var C = F.anchorPosition === "before";
        C && u(U), p.push(F.start || ""), C || u(U);
      }
      function u(x) {
        x.id && p.push('<a id="' + x.id + '"></a>');
      }
      function h(x) {
        var U = g.pop();
        m = U.list;
        var E = e.isFunction(U.end) ? U.end() : U.end;
        p.push(E || "");
      }
      function f(x, U) {
        l(x, U), h();
      }
      function v(x) {
        p.push(b(x));
      }
      function w() {
        return p.join("");
      }
      return {
        asString: w,
        open: l,
        close: h,
        text: v,
        selfClosing: f
      };
    }
    Hi.writer = d;
    function b(p) {
      return p.replace(/\\/g, "\\\\").replace(/([\`\*_\{\}\[\]\(\)\#\+\-\.\!])/g, "\\$1");
    }
    return Hi;
  }
  var Cs;
  function Ug() {
    if (Cs) return Xi;
    Cs = 1;
    var e = _g(), t = wg();
    Xi.writer = n;
    function n(r) {
      return r = r || {}, r.outputFormat === "markdown" ? t.writer() : e.writer(r);
    }
    return Xi;
  }
  var As;
  function Tg() {
    if (As) return zn;
    As = 1;
    var e = Re, t = At(), n = $t(), r = Hr(), a = gt(), i = Yd(), c = Vr(), o = Ug();
    zn.DocumentConverter = s;
    function s(u) {
      return {
        convertToHtml: function(h) {
          var f = e.indexBy(h.type === n.types.document ? h.comments : [], "commentId"), v = new d(u, f);
          return v.convertToHtml(h);
        }
      };
    }
    function d(u, h) {
      var f = 1, v = [], w = [];
      u = e.extend({
        ignoreEmptyParagraphs: true
      }, u);
      var x = u.idPrefix === void 0 ? "" : u.idPrefix, U = u.ignoreEmptyParagraphs, E = r.topLevelElement("p"), F = u.styleMap || [];
      function C(D) {
        var G = [], Z = z(D, G, {}), O = [];
        y(Z, function(X) {
          X.type === "deferred" && O.push(X);
        });
        var W = {};
        return t.mapSeries(O, function(X) {
          return X.value().then(function(ae) {
            W[X.id] = ae;
          });
        }).then(function() {
          function X(ne) {
            return m(ne, function(K) {
              return K.type === "deferred" ? W[K.id] : K.children ? [
                e.extend({}, K, {
                  children: X(K.children)
                })
              ] : [
                K
              ];
            });
          }
          var ae = o.writer({
            prettyPrint: u.prettyPrint,
            outputFormat: u.outputFormat
          });
          return c.write(ae, c.simplify(X(Z))), new a.Result(ae.asString(), G);
        });
      }
      function R(D, G, Z) {
        return m(D, function(O) {
          return z(O, G, Z);
        });
      }
      function z(D, G, Z) {
        if (!Z) throw new Error("options not set");
        var O = we[D.type];
        return O ? O(D, G, Z) : [];
      }
      function T(D, G, Z) {
        return B(D, G).wrap(function() {
          var O = R(D.children, G, Z);
          return U ? O : [
            c.forceWrite
          ].concat(O);
        });
      }
      function B(D, G) {
        var Z = I(D);
        return Z ? Z.to : (D.styleId && G.push(g("paragraph", D)), E);
      }
      function _(D, G, Z) {
        var O = function() {
          return R(D.children, G, Z);
        }, W = [];
        if (D.highlight !== null) {
          var X = k({
            type: "highlight",
            color: D.highlight
          });
          X && W.push(X);
        }
        D.isSmallCaps && W.push(P("smallCaps")), D.isAllCaps && W.push(P("allCaps")), D.isStrikethrough && W.push(P("strikethrough", "s")), D.isUnderline && W.push(P("underline")), D.verticalAlignment === n.verticalAlignment.subscript && W.push(r.element("sub", {}, {
          fresh: false
        })), D.verticalAlignment === n.verticalAlignment.superscript && W.push(r.element("sup", {}, {
          fresh: false
        })), D.isItalic && W.push(P("italic", "em")), D.isBold && W.push(P("bold", "strong"));
        var ae = r.empty, ne = I(D);
        return ne ? ae = ne.to : D.styleId && G.push(g("run", D)), W.push(ae), W.forEach(function(K) {
          O = K.wrap.bind(K, O);
        }), O();
      }
      function P(D, G) {
        var Z = k({
          type: D
        });
        return Z || (G ? r.element(G, {}, {
          fresh: false
        }) : r.empty);
      }
      function k(D, G) {
        var Z = I(D);
        return Z ? Z.to : G;
      }
      function I(D) {
        for (var G = 0; G < F.length; G++) if (F[G].from.matches(D)) return F[G];
      }
      function H(D) {
        return function(G, Z) {
          return t.attempt(function() {
            return D(G, Z);
          }).caught(function(O) {
            return Z.push(a.error(O)), [];
          });
        };
      }
      function q(D) {
        return N(D.noteType, D.noteId);
      }
      function Y(D) {
        return $(D.noteType, D.noteId);
      }
      function N(D, G) {
        return M(D + "-" + G);
      }
      function $(D, G) {
        return M(D + "-ref-" + G);
      }
      function M(D) {
        return x + D;
      }
      var ee = r.elements([
        r.element("table", {}, {
          fresh: true
        })
      ]);
      function te(D, G, Z) {
        return k(D, ee).wrap(function() {
          return se(D, G, Z);
        });
      }
      function se(D, G, Z) {
        var O = e.findIndex(D.children, function(ne) {
          return !ne.type === n.types.tableRow || !ne.isHeader;
        });
        O === -1 && (O = D.children.length);
        var W;
        if (O === 0) W = R(D.children, G, e.extend({}, Z, {
          isTableHeader: false
        }));
        else {
          var X = R(D.children.slice(0, O), G, e.extend({}, Z, {
            isTableHeader: true
          })), ae = R(D.children.slice(O), G, e.extend({}, Z, {
            isTableHeader: false
          }));
          W = [
            c.freshElement("thead", {}, X),
            c.freshElement("tbody", {}, ae)
          ];
        }
        return [
          c.forceWrite
        ].concat(W);
      }
      function le(D, G, Z) {
        var O = R(D.children, G, Z);
        return [
          c.freshElement("tr", {}, [
            c.forceWrite
          ].concat(O))
        ];
      }
      function fe(D, G, Z) {
        var O = Z.isTableHeader ? "th" : "td", W = R(D.children, G, Z), X = {};
        return D.colSpan !== 1 && (X.colspan = D.colSpan.toString()), D.rowSpan !== 1 && (X.rowspan = D.rowSpan.toString()), [
          c.freshElement(O, X, [
            c.forceWrite
          ].concat(W))
        ];
      }
      function ge(D, G, Z) {
        return k(D, r.ignore).wrap(function() {
          var O = h[D.commentId], W = w.length + 1, X = "[" + l(O) + W + "]";
          return w.push({
            label: X,
            comment: O
          }), [
            c.freshElement("a", {
              href: "#" + N("comment", D.commentId),
              id: $("comment", D.commentId)
            }, [
              c.text(X)
            ])
          ];
        });
      }
      function me(D, G, Z) {
        var O = D.label, W = D.comment, X = R(W.body, G, Z).concat([
          c.nonFreshElement("p", {}, [
            c.text(" "),
            c.freshElement("a", {
              href: "#" + $("comment", W.commentId)
            }, [
              c.text("\u2191")
            ])
          ])
        ]);
        return [
          c.freshElement("dt", {
            id: N("comment", W.commentId)
          }, [
            c.text("Comment " + O)
          ]),
          c.freshElement("dd", {}, X)
        ];
      }
      function De(D, G, Z) {
        return Ce(D).wrap(function() {
          return [];
        });
      }
      function Ce(D) {
        var G = I(D);
        return G ? G.to : D.breakType === "line" ? r.topLevelElement("br") : r.empty;
      }
      var we = {
        document: function(D, G, Z) {
          var O = R(D.children, G, Z), W = v.map(function(ae) {
            return D.notes.resolve(ae);
          }), X = R(W, G, Z);
          return O.concat([
            c.freshElement("ol", {}, X),
            c.freshElement("dl", {}, m(w, function(ae) {
              return me(ae, G, Z);
            }))
          ]);
        },
        paragraph: T,
        run: _,
        text: function(D, G, Z) {
          return [
            c.text(D.value)
          ];
        },
        tab: function(D, G, Z) {
          return [
            c.text("	")
          ];
        },
        hyperlink: function(D, G, Z) {
          var O = D.anchor ? "#" + M(D.anchor) : D.href, W = {
            href: O
          };
          D.targetFrame != null && (W.target = D.targetFrame);
          var X = R(D.children, G, Z);
          return [
            c.nonFreshElement("a", W, X)
          ];
        },
        checkbox: function(D) {
          var G = {
            type: "checkbox"
          };
          return D.checked && (G.checked = "checked"), [
            c.freshElement("input", G)
          ];
        },
        bookmarkStart: function(D, G, Z) {
          var O = c.freshElement("a", {
            id: M(D.name)
          }, [
            c.forceWrite
          ]);
          return [
            O
          ];
        },
        noteReference: function(D, G, Z) {
          v.push(D);
          var O = c.freshElement("a", {
            href: "#" + q(D),
            id: Y(D)
          }, [
            c.text("[" + f++ + "]")
          ]);
          return [
            c.freshElement("sup", {}, [
              O
            ])
          ];
        },
        note: function(D, G, Z) {
          var O = R(D.body, G, Z), W = c.elementWithTag(r.element("p", {}, {
            fresh: false
          }), [
            c.text(" "),
            c.freshElement("a", {
              href: "#" + Y(D)
            }, [
              c.text("\u2191")
            ])
          ]), X = O.concat([
            W
          ]);
          return c.freshElement("li", {
            id: q(D)
          }, X);
        },
        commentReference: ge,
        comment: me,
        image: p(H(u.convertImage || i.dataUri)),
        table: te,
        tableRow: le,
        tableCell: fe,
        break: De
      };
      return {
        convertToHtml: C
      };
    }
    var b = 1;
    function p(u) {
      return function(h, f, v) {
        return [
          {
            type: "deferred",
            id: b++,
            value: function() {
              return u(h, f, v);
            }
          }
        ];
      };
    }
    function g(u, h) {
      return a.warning("Unrecognised " + u + " style: '" + h.styleName + "' (Style ID: " + h.styleId + ")");
    }
    function m(u, h) {
      return e.flatten(u.map(h), true);
    }
    function y(u, h) {
      u.forEach(function(f) {
        h(f), f.children && y(f.children, h);
      });
    }
    var l = zn.commentAuthorLabel = function(h) {
      return h.authorInitials || "";
    };
    return zn;
  }
  var Gi = {}, Fs;
  function Eg() {
    if (Fs) return Gi;
    Fs = 1;
    var e = $t();
    function t(n) {
      if (n.type === "text") return n.value;
      if (n.type === e.types.tab) return "	";
      var r = n.type === "paragraph" ? `

` : "";
      return (n.children || []).map(t).join("") + r;
    }
    return Gi.convertElementToRawText = t, Gi;
  }
  var hn = {}, rt = {}, Zi = {}, Ki = {
    exports: {}
  }, Ss;
  function Cg() {
    if (Ss) return Ki.exports;
    Ss = 1;
    var e = Ki.exports = function(t, n) {
      this._tokens = t, this._startIndex = n || 0;
    };
    return e.prototype.head = function() {
      return this._tokens[this._startIndex];
    }, e.prototype.tail = function(t) {
      return new e(this._tokens, this._startIndex + 1);
    }, e.prototype.toArray = function() {
      return this._tokens.slice(this._startIndex);
    }, e.prototype.end = function() {
      return this._tokens[this._tokens.length - 1];
    }, e.prototype.to = function(t) {
      var n = this.head().source, r = t.head() || t.end();
      return n.to(r.source);
    }, Ki.exports;
  }
  var ks;
  function Ag() {
    if (ks) return Zi;
    ks = 1;
    var e = Cg();
    return Zi.Parser = function(t) {
      var n = function(r, a) {
        return r(new e(a));
      };
      return {
        parseTokens: n
      };
    }, Zi;
  }
  var Yi = {}, Qi = {}, Bs;
  function Fg() {
    return Bs || (Bs = 1, function(e) {
      e.none = /* @__PURE__ */ Object.create({
        value: function() {
          throw new Error("Called value on none");
        },
        isNone: function() {
          return true;
        },
        isSome: function() {
          return false;
        },
        map: function() {
          return e.none;
        },
        flatMap: function() {
          return e.none;
        },
        filter: function() {
          return e.none;
        },
        toArray: function() {
          return [];
        },
        orElse: t,
        valueOrElse: t
      });
      function t(r) {
        return typeof r == "function" ? r() : r;
      }
      e.some = function(r) {
        return new n(r);
      };
      var n = function(r) {
        this._value = r;
      };
      n.prototype.value = function() {
        return this._value;
      }, n.prototype.isNone = function() {
        return false;
      }, n.prototype.isSome = function() {
        return true;
      }, n.prototype.map = function(r) {
        return new n(r(this._value));
      }, n.prototype.flatMap = function(r) {
        return r(this._value);
      }, n.prototype.filter = function(r) {
        return r(this._value) ? this : e.none;
      }, n.prototype.toArray = function() {
        return [
          this._value
        ];
      }, n.prototype.orElse = function(r) {
        return this;
      }, n.prototype.valueOrElse = function(r) {
        return this._value;
      }, e.isOption = function(r) {
        return r === e.none || r instanceof n;
      }, e.fromNullable = function(r) {
        return r == null ? e.none : new n(r);
      };
    }(Qi)), Qi;
  }
  var Ji, Ws;
  function uo() {
    if (Ws) return Ji;
    Ws = 1, Ji = {
      failure: function(t, n) {
        if (t.length < 1) throw new Error("Failure must have errors");
        return new e({
          status: "failure",
          remaining: n,
          errors: t
        });
      },
      error: function(t, n) {
        if (t.length < 1) throw new Error("Failure must have errors");
        return new e({
          status: "error",
          remaining: n,
          errors: t
        });
      },
      success: function(t, n, r) {
        return new e({
          status: "success",
          value: t,
          source: r,
          remaining: n,
          errors: []
        });
      },
      cut: function(t) {
        return new e({
          status: "cut",
          remaining: t,
          errors: []
        });
      }
    };
    var e = function(t) {
      this._value = t.value, this._status = t.status, this._hasValue = t.value !== void 0, this._remaining = t.remaining, this._source = t.source, this._errors = t.errors;
    };
    return e.prototype.map = function(t) {
      return this._hasValue ? new e({
        value: t(this._value, this._source),
        status: this._status,
        remaining: this._remaining,
        source: this._source,
        errors: this._errors
      }) : this;
    }, e.prototype.changeRemaining = function(t) {
      return new e({
        value: this._value,
        status: this._status,
        remaining: t,
        source: this._source,
        errors: this._errors
      });
    }, e.prototype.isSuccess = function() {
      return this._status === "success" || this._status === "cut";
    }, e.prototype.isFailure = function() {
      return this._status === "failure";
    }, e.prototype.isError = function() {
      return this._status === "error";
    }, e.prototype.isCut = function() {
      return this._status === "cut";
    }, e.prototype.value = function() {
      return this._value;
    }, e.prototype.remaining = function() {
      return this._remaining;
    }, e.prototype.source = function() {
      return this._source;
    }, e.prototype.errors = function() {
      return this._errors;
    }, Ji;
  }
  var ea = {}, Rs;
  function Qd() {
    if (Rs) return ea;
    Rs = 1, ea.error = function(t) {
      return new e(t);
    };
    var e = function(t) {
      this.expected = t.expected, this.actual = t.actual, this._location = t.location;
    };
    return e.prototype.describe = function() {
      var t = this._location ? this._location.describe() + `:
` : "";
      return t + "Expected " + this.expected + `
but got ` + this.actual;
    }, e.prototype.lineNumber = function() {
      return this._location.lineNumber();
    }, e.prototype.characterNumber = function() {
      return this._location.characterNumber();
    }, ea;
  }
  var ta = {}, Is;
  function Sg() {
    if (Is) return ta;
    Is = 1, ta.fromArray = function(t) {
      var n = 0, r = function() {
        return n < t.length;
      };
      return new e({
        hasNext: r,
        next: function() {
          if (r()) return t[n++];
          throw new Error("No more elements");
        }
      });
    };
    var e = function(t) {
      this._iterator = t;
    };
    return e.prototype.map = function(t) {
      var n = this._iterator;
      return new e({
        hasNext: function() {
          return n.hasNext();
        },
        next: function() {
          return t(n.next());
        }
      });
    }, e.prototype.filter = function(t) {
      var n = this._iterator, r = false, a = false, i, c = function() {
        if (!r) for (r = true, a = false; n.hasNext() && !a; ) i = n.next(), a = t(i);
      };
      return new e({
        hasNext: function() {
          return c(), a;
        },
        next: function() {
          c();
          var o = i;
          return r = false, o;
        }
      });
    }, e.prototype.first = function() {
      var t = this._iterator;
      return this._iterator.hasNext() ? t.next() : null;
    }, e.prototype.toArray = function() {
      for (var t = []; this._iterator.hasNext(); ) t.push(this._iterator.next());
      return t;
    }, ta;
  }
  var Os;
  function Jd() {
    return Os || (Os = 1, function(e) {
      var t = Re, n = Fg(), r = uo(), a = Qd(), i = Sg();
      e.token = function(g, m) {
        var y = m !== void 0;
        return function(l) {
          var u = l.head();
          if (u && u.name === g && (!y || u.value === m)) return r.success(u.value, l.tail(), u.source);
          var h = b({
            name: g,
            value: m
          });
          return p(l, h);
        };
      }, e.tokenOfType = function(g) {
        return e.token(g);
      }, e.firstOf = function(g, m) {
        return t.isArray(m) || (m = Array.prototype.slice.call(arguments, 1)), function(y) {
          return i.fromArray(m).map(function(l) {
            return l(y);
          }).filter(function(l) {
            return l.isSuccess() || l.isError();
          }).first() || p(y, g);
        };
      }, e.then = function(g, m) {
        return function(y) {
          var l = g(y);
          return l.map || console.log(l), l.map(m);
        };
      }, e.sequence = function() {
        var g = Array.prototype.slice.call(arguments, 0), m = function(l) {
          var u = t.foldl(g, function(f, v) {
            var w = f.result, x = f.hasCut;
            if (!w.isSuccess()) return {
              result: w,
              hasCut: x
            };
            var U = v(w.remaining());
            if (U.isCut()) return {
              result: w,
              hasCut: true
            };
            if (U.isSuccess()) {
              var E;
              v.isCaptured ? E = w.value().withValue(v, U.value()) : E = w.value();
              var F = U.remaining(), C = l.to(F);
              return {
                result: r.success(E, F, C),
                hasCut: x
              };
            } else return x ? {
              result: r.error(U.errors(), U.remaining()),
              hasCut: x
            } : {
              result: U,
              hasCut: x
            };
          }, {
            result: r.success(new c(), l),
            hasCut: false
          }).result, h = l.to(u.remaining());
          return u.map(function(f) {
            return f.withValue(e.sequence.source, h);
          });
        };
        m.head = function() {
          var l = t.find(g, y);
          return e.then(m, e.sequence.extract(l));
        }, m.map = function(l) {
          return e.then(m, function(u) {
            return l.apply(this, u.toArray());
          });
        };
        function y(l) {
          return l.isCaptured;
        }
        return m;
      };
      var c = function(g, m) {
        this._values = g || {}, this._valuesArray = m || [];
      };
      c.prototype.withValue = function(g, m) {
        if (g.captureName && g.captureName in this._values) throw new Error('Cannot add second value for capture "' + g.captureName + '"');
        var y = t.clone(this._values);
        y[g.captureName] = m;
        var l = this._valuesArray.concat([
          m
        ]);
        return new c(y, l);
      }, c.prototype.get = function(g) {
        if (g.captureName in this._values) return this._values[g.captureName];
        throw new Error('No value for capture "' + g.captureName + '"');
      }, c.prototype.toArray = function() {
        return this._valuesArray;
      }, e.sequence.capture = function(g, m) {
        var y = function() {
          return g.apply(this, arguments);
        };
        return y.captureName = m, y.isCaptured = true, y;
      }, e.sequence.extract = function(g) {
        return function(m) {
          return m.get(g);
        };
      }, e.sequence.applyValues = function(g) {
        var m = Array.prototype.slice.call(arguments, 1);
        return function(y) {
          var l = m.map(function(u) {
            return y.get(u);
          });
          return g.apply(this, l);
        };
      }, e.sequence.source = {
        captureName: "\u2603source\u2603"
      }, e.sequence.cut = function() {
        return function(g) {
          return r.cut(g);
        };
      }, e.optional = function(g) {
        return function(m) {
          var y = g(m);
          return y.isSuccess() ? y.map(n.some) : y.isFailure() ? r.success(n.none, m) : y;
        };
      }, e.zeroOrMoreWithSeparator = function(g, m) {
        return d(g, m, false);
      }, e.oneOrMoreWithSeparator = function(g, m) {
        return d(g, m, true);
      };
      var o = e.zeroOrMore = function(g) {
        return function(m) {
          for (var y = [], l; (l = g(m)) && l.isSuccess(); ) m = l.remaining(), y.push(l.value());
          return l.isError() ? l : r.success(y, m);
        };
      };
      e.oneOrMore = function(g) {
        return e.oneOrMoreWithSeparator(g, s);
      };
      function s(g) {
        return r.success(null, g);
      }
      var d = function(g, m, y) {
        return function(l) {
          var u = g(l);
          if (u.isSuccess()) {
            var h = e.sequence.capture(g, "main"), f = o(e.then(e.sequence(m, h), e.sequence.extract(h))), v = f(u.remaining());
            return r.success([
              u.value()
            ].concat(v.value()), v.remaining());
          } else return y || u.isError() ? u : r.success([], l);
        };
      };
      e.leftAssociative = function(g, m, y) {
        var l;
        y ? l = [
          {
            func: y,
            rule: m
          }
        ] : l = m, l = l.map(function(h) {
          return e.then(h.rule, function(f) {
            return function(v, w) {
              return h.func(v, f, w);
            };
          });
        });
        var u = e.firstOf.apply(null, [
          "rules"
        ].concat(l));
        return function(h) {
          var f = h, v = g(h);
          if (!v.isSuccess()) return v;
          for (var w = u(v.remaining()); w.isSuccess(); ) {
            var x = w.remaining(), U = f.to(w.remaining()), E = w.value();
            v = r.success(E(v.value(), U), x, U), w = u(v.remaining());
          }
          return w.isError() ? w : v;
        };
      }, e.leftAssociative.firstOf = function() {
        return Array.prototype.slice.call(arguments, 0);
      }, e.nonConsuming = function(g) {
        return function(m) {
          return g(m).changeRemaining(m);
        };
      };
      var b = function(g) {
        return g.value ? g.name + ' "' + g.value + '"' : g.name;
      };
      function p(g, m) {
        var y, l = g.head();
        return l ? y = a.error({
          expected: m,
          actual: b(l),
          location: l.source
        }) : y = a.error({
          expected: m,
          actual: "end of tokens"
        }), r.failure([
          y
        ], g);
      }
    }(Yi)), Yi;
  }
  var na = {
    exports: {}
  }, Ns;
  function el() {
    if (Ns) return na.exports;
    Ns = 1, na.exports = function(t, n) {
      var r = {
        asString: function() {
          return t;
        },
        range: function(a, i) {
          return new e(t, n, a, i);
        }
      };
      return r;
    };
    var e = function(t, n, r, a) {
      this._string = t, this._description = n, this._startIndex = r, this._endIndex = a;
    };
    return e.prototype.to = function(t) {
      return new e(this._string, this._description, this._startIndex, t._endIndex);
    }, e.prototype.describe = function() {
      var t = this._position(), n = this._description ? this._description + `
` : "";
      return n + "Line number: " + t.lineNumber + `
Character number: ` + t.characterNumber;
    }, e.prototype.lineNumber = function() {
      return this._position().lineNumber;
    }, e.prototype.characterNumber = function() {
      return this._position().characterNumber;
    }, e.prototype._position = function() {
      for (var t = this, n = 0, r = function() {
        return t._string.indexOf(`
`, n);
      }, a = 1; r() !== -1 && r() < this._startIndex; ) n = r() + 1, a += 1;
      var i = this._startIndex - n + 1;
      return {
        lineNumber: a,
        characterNumber: i
      };
    }, na.exports;
  }
  var ra, Ls;
  function tl() {
    return Ls || (Ls = 1, ra = function(e, t, n) {
      this.name = e, this.value = t, n && (this.source = n);
    }), ra;
  }
  var ia = {}, Ms;
  function kg() {
    return Ms || (Ms = 1, function(e) {
      var t = Jd(), n = uo();
      e.parser = function(i, c, o) {
        var s = {
          rule: g,
          leftAssociative: m,
          rightAssociative: y
        }, d = new r(o.map(p)), b = t.firstOf(i, c);
        function p(h) {
          return {
            name: h.name,
            rule: a(h.ruleBuilder.bind(null, s))
          };
        }
        function g() {
          return l(d);
        }
        function m(h) {
          return l(d.untilExclusive(h));
        }
        function y(h) {
          return l(d.untilInclusive(h));
        }
        function l(h) {
          return u.bind(null, h);
        }
        function u(h, f) {
          var v = b(f);
          return v.isSuccess() ? h.apply(v) : v;
        }
        return s;
      };
      function r(i) {
        function c(p) {
          return new r(i.slice(0, s().indexOf(p)));
        }
        function o(p) {
          return new r(i.slice(0, s().indexOf(p) + 1));
        }
        function s() {
          return i.map(function(p) {
            return p.name;
          });
        }
        function d(p) {
          for (var g, m; ; ) if (g = b(p.remaining()), g.isSuccess()) m = p.source().to(g.source()), p = n.success(g.value()(p.value(), m), g.remaining(), m);
          else return g.isFailure() ? p : g;
        }
        function b(p) {
          return t.firstOf("infix", i.map(function(g) {
            return g.rule;
          }))(p);
        }
        return {
          apply: d,
          untilExclusive: c,
          untilInclusive: o
        };
      }
      e.infix = function(i, c) {
        function o(s) {
          return e.infix(i, function(d) {
            var b = c(d);
            return function(p) {
              var g = b(p);
              return g.map(function(m) {
                return function(y, l) {
                  return s(y, m, l);
                };
              });
            };
          });
        }
        return {
          name: i,
          ruleBuilder: c,
          map: o
        };
      };
      var a = function(i) {
        var c;
        return function(o) {
          return c || (c = i()), c(o);
        };
      };
    }(ia)), ia;
  }
  var aa = {}, qs;
  function Bg() {
    if (qs) return aa;
    qs = 1;
    var e = tl(), t = el();
    aa.RegexTokeniser = n;
    function n(r) {
      r = r.map(function(o) {
        return {
          name: o.name,
          regex: new RegExp(o.regex.source, "g")
        };
      });
      function a(o, s) {
        for (var d = new t(o, s), b = 0, p = []; b < o.length; ) {
          var g = i(o, b, d);
          b = g.endIndex, p.push(g.token);
        }
        return p.push(c(o, d)), p;
      }
      function i(o, s, d) {
        for (var b = 0; b < r.length; b++) {
          var p = r[b].regex;
          p.lastIndex = s;
          var g = p.exec(o);
          if (g) {
            var y = s + g[0].length;
            if (g.index === s && y > s) {
              var m = g[1], l = new e(r[b].name, m, d.range(s, y));
              return {
                token: l,
                endIndex: y
              };
            }
          }
        }
        var y = s + 1, l = new e("unrecognisedCharacter", o.substring(s, y), d.range(s, y));
        return {
          token: l,
          endIndex: y
        };
      }
      function c(o, s) {
        return new e("end", null, s.range(o.length, o.length));
      }
      return {
        tokenise: a
      };
    }
    return aa;
  }
  var Ps;
  function nl() {
    return Ps || (Ps = 1, rt.Parser = Ag().Parser, rt.rules = Jd(), rt.errors = Qd(), rt.results = uo(), rt.StringSource = el(), rt.Token = tl(), rt.bottomUp = kg(), rt.RegexTokeniser = Bg().RegexTokeniser, rt.rule = function(e) {
      var t;
      return function(n) {
        return t || (t = e()), t(n);
      };
    }), rt;
  }
  var Ne = {}, js;
  function Wg() {
    if (js) return Ne;
    js = 1, Ne.paragraph = e, Ne.run = t, Ne.table = n, Ne.bold = new a("bold"), Ne.italic = new a("italic"), Ne.underline = new a("underline"), Ne.strikethrough = new a("strikethrough"), Ne.allCaps = new a("allCaps"), Ne.smallCaps = new a("smallCaps"), Ne.highlight = r, Ne.commentReference = new a("commentReference"), Ne.lineBreak = new c({
      breakType: "line"
    }), Ne.pageBreak = new c({
      breakType: "page"
    }), Ne.columnBreak = new c({
      breakType: "column"
    }), Ne.equalTo = s, Ne.startsWith = d;
    function e(g) {
      return new a("paragraph", g);
    }
    function t(g) {
      return new a("run", g);
    }
    function n(g) {
      return new a("table", g);
    }
    function r(g) {
      return new i(g);
    }
    function a(g, m) {
      m = m || {}, this._elementType = g, this._styleId = m.styleId, this._styleName = m.styleName, m.list && (this._listIndex = m.list.levelIndex, this._listIsOrdered = m.list.isOrdered);
    }
    a.prototype.matches = function(g) {
      return g.type === this._elementType && (this._styleId === void 0 || g.styleId === this._styleId) && (this._styleName === void 0 || g.styleName && this._styleName.operator(this._styleName.operand, g.styleName)) && (this._listIndex === void 0 || o(g, this._listIndex, this._listIsOrdered)) && (this._breakType === void 0 || this._breakType === g.breakType);
    };
    function i(g) {
      g = g || {}, this._color = g.color;
    }
    i.prototype.matches = function(g) {
      return g.type === "highlight" && (this._color === void 0 || g.color === this._color);
    };
    function c(g) {
      g = g || {}, this._breakType = g.breakType;
    }
    c.prototype.matches = function(g) {
      return g.type === "break" && (this._breakType === void 0 || g.breakType === this._breakType);
    };
    function o(g, m, y) {
      return g.numbering && g.numbering.level == m && g.numbering.isOrdered == y;
    }
    function s(g) {
      return {
        operator: b,
        operand: g
      };
    }
    function d(g) {
      return {
        operator: p,
        operand: g
      };
    }
    function b(g, m) {
      return g.toUpperCase() === m.toUpperCase();
    }
    function p(g, m) {
      return m.toUpperCase().indexOf(g.toUpperCase()) === 0;
    }
    return Ne;
  }
  var oa = {}, $s;
  function Rg() {
    if ($s) return oa;
    $s = 1;
    var e = nl(), t = e.RegexTokeniser;
    oa.tokenise = r;
    var n = "'((?:\\\\.|[^'])*)";
    function r(a) {
      var i = "(?:[a-zA-Z\\-_]|\\\\.)", c = new t([
        {
          name: "identifier",
          regex: new RegExp("(" + i + "(?:" + i + "|[0-9])*)")
        },
        {
          name: "dot",
          regex: /\./
        },
        {
          name: "colon",
          regex: /:/
        },
        {
          name: "gt",
          regex: />/
        },
        {
          name: "whitespace",
          regex: /\s+/
        },
        {
          name: "arrow",
          regex: /=>/
        },
        {
          name: "equals",
          regex: /=/
        },
        {
          name: "startsWith",
          regex: /\^=/
        },
        {
          name: "open-paren",
          regex: /\(/
        },
        {
          name: "close-paren",
          regex: /\)/
        },
        {
          name: "open-square-bracket",
          regex: /\[/
        },
        {
          name: "close-square-bracket",
          regex: /\]/
        },
        {
          name: "string",
          regex: new RegExp(n + "'")
        },
        {
          name: "unterminated-string",
          regex: new RegExp(n)
        },
        {
          name: "integer",
          regex: /([0-9]+)/
        },
        {
          name: "choice",
          regex: /\|/
        },
        {
          name: "bang",
          regex: /(!)/
        }
      ]);
      return c.tokenise(a);
    }
    return oa;
  }
  var zs;
  function Ig() {
    if (zs) return hn;
    zs = 1;
    var e = Re, t = nl(), n = Wg(), r = Hr(), a = Rg().tokenise, i = gt();
    hn.readHtmlPath = b, hn.readDocumentMatcher = s, hn.readStyle = c;
    function c(F) {
      return w(E, F);
    }
    function o() {
      return t.rules.sequence(t.rules.sequence.capture(d()), t.rules.tokenOfType("whitespace"), t.rules.tokenOfType("arrow"), t.rules.sequence.capture(t.rules.optional(t.rules.sequence(t.rules.tokenOfType("whitespace"), t.rules.sequence.capture(p())).head())), t.rules.tokenOfType("end")).map(function(F, C) {
        return {
          from: F,
          to: C.valueOrElse(r.empty)
        };
      });
    }
    function s(F) {
      return w(d(), F);
    }
    function d() {
      var F = t.rules.sequence, C = function(me, De) {
        return t.rules.then(t.rules.token("identifier", me), function() {
          return De;
        });
      }, R = C("p", n.paragraph), z = C("r", n.run), T = t.rules.firstOf("p or r or table", R, z), B = t.rules.sequence(t.rules.tokenOfType("dot"), t.rules.sequence.cut(), t.rules.sequence.capture(g)).map(function(me) {
        return {
          styleId: me
        };
      }), _ = t.rules.firstOf("style name matcher", t.rules.then(t.rules.sequence(t.rules.tokenOfType("equals"), t.rules.sequence.cut(), t.rules.sequence.capture(y)).head(), function(me) {
        return {
          styleName: n.equalTo(me)
        };
      }), t.rules.then(t.rules.sequence(t.rules.tokenOfType("startsWith"), t.rules.sequence.cut(), t.rules.sequence.capture(y)).head(), function(me) {
        return {
          styleName: n.startsWith(me)
        };
      })), P = t.rules.sequence(t.rules.tokenOfType("open-square-bracket"), t.rules.sequence.cut(), t.rules.token("identifier", "style-name"), t.rules.sequence.capture(_), t.rules.tokenOfType("close-square-bracket")).head(), k = t.rules.firstOf("list type", C("ordered-list", {
        isOrdered: true
      }), C("unordered-list", {
        isOrdered: false
      })), I = F(t.rules.tokenOfType("colon"), F.capture(k), F.cut(), t.rules.tokenOfType("open-paren"), F.capture(m), t.rules.tokenOfType("close-paren")).map(function(me, De) {
        return {
          list: {
            isOrdered: me.isOrdered,
            levelIndex: De - 1
          }
        };
      });
      function H(me) {
        var De = t.rules.firstOf.apply(t.rules.firstOf, [
          "matcher suffix"
        ].concat(me)), Ce = t.rules.zeroOrMore(De);
        return t.rules.then(Ce, function(we) {
          var D = {};
          return we.forEach(function(G) {
            e.extend(D, G);
          }), D;
        });
      }
      var q = F(F.capture(T), F.capture(H([
        B,
        P,
        I
      ]))).map(function(me, De) {
        return me(De);
      }), Y = F(t.rules.token("identifier", "table"), F.capture(H([
        B,
        P
      ]))).map(function(me) {
        return n.table(me);
      }), N = C("b", n.bold), $ = C("i", n.italic), M = C("u", n.underline), ee = C("strike", n.strikethrough), te = C("all-caps", n.allCaps), se = C("small-caps", n.smallCaps), le = F(t.rules.token("identifier", "highlight"), t.rules.sequence.capture(t.rules.optional(t.rules.sequence(t.rules.tokenOfType("open-square-bracket"), t.rules.sequence.cut(), t.rules.token("identifier", "color"), t.rules.tokenOfType("equals"), t.rules.sequence.capture(y), t.rules.tokenOfType("close-square-bracket")).head()))).map(function(me) {
        return n.highlight({
          color: me.valueOrElse(void 0)
        });
      }), fe = C("comment-reference", n.commentReference), ge = F(t.rules.token("identifier", "br"), F.cut(), t.rules.tokenOfType("open-square-bracket"), t.rules.token("identifier", "type"), t.rules.tokenOfType("equals"), F.capture(y), t.rules.tokenOfType("close-square-bracket")).map(function(me) {
        switch (me) {
          case "line":
            return n.lineBreak;
          case "page":
            return n.pageBreak;
          case "column":
            return n.columnBreak;
        }
      });
      return t.rules.firstOf("element type", q, Y, N, $, M, ee, te, se, le, fe, ge);
    }
    function b(F) {
      return w(p(), F);
    }
    function p() {
      var F = t.rules.sequence.capture, C = t.rules.tokenOfType("whitespace"), R = t.rules.then(t.rules.optional(t.rules.sequence(t.rules.tokenOfType("colon"), t.rules.token("identifier", "fresh"))), function(_) {
        return _.map(function() {
          return true;
        }).valueOrElse(false);
      }), z = t.rules.then(t.rules.optional(t.rules.sequence(t.rules.tokenOfType("colon"), t.rules.token("identifier", "separator"), t.rules.tokenOfType("open-paren"), F(y), t.rules.tokenOfType("close-paren")).head()), function(_) {
        return _.valueOrElse("");
      }), T = t.rules.oneOrMoreWithSeparator(g, t.rules.tokenOfType("choice")), B = t.rules.sequence(F(T), F(t.rules.zeroOrMore(v)), F(R), F(z)).map(function(_, P, k, I) {
        var H = {}, q = {};
        return P.forEach(function(Y) {
          Y.append && H[Y.name] ? H[Y.name] += " " + Y.value : H[Y.name] = Y.value;
        }), k && (q.fresh = true), I && (q.separator = I), r.element(_, H, q);
      });
      return t.rules.firstOf("html path", t.rules.then(t.rules.tokenOfType("bang"), function() {
        return r.ignore;
      }), t.rules.then(t.rules.zeroOrMoreWithSeparator(B, t.rules.sequence(C, t.rules.tokenOfType("gt"), C)), r.elements));
    }
    var g = t.rules.then(t.rules.tokenOfType("identifier"), u), m = t.rules.tokenOfType("integer"), y = t.rules.then(t.rules.tokenOfType("string"), u), l = {
      n: `
`,
      r: "\r",
      t: "	"
    };
    function u(F) {
      return F.replace(/\\(.)/g, function(C, R) {
        return l[R] || R;
      });
    }
    var h = t.rules.sequence(t.rules.tokenOfType("open-square-bracket"), t.rules.sequence.cut(), t.rules.sequence.capture(g), t.rules.tokenOfType("equals"), t.rules.sequence.capture(y), t.rules.tokenOfType("close-square-bracket")).map(function(F, C) {
      return {
        name: F,
        value: C,
        append: false
      };
    }), f = t.rules.sequence(t.rules.tokenOfType("dot"), t.rules.sequence.cut(), t.rules.sequence.capture(g)).map(function(F) {
      return {
        name: "class",
        value: F,
        append: true
      };
    }), v = t.rules.firstOf("attribute or class", h, f);
    function w(F, C) {
      var R = a(C), z = t.Parser(), T = z.parseTokens(F, R);
      return T.isSuccess() ? i.success(T.value()) : new i.Result(null, [
        i.warning(x(C, T))
      ]);
    }
    function x(F, C) {
      return "Did not understand this style mapping, so ignored it: " + F + `
` + C.errors().map(U).join(`
`);
    }
    function U(F) {
      return "Error was at character number " + F.characterNumber() + ": Expected " + F.expected + " but got " + F.actual;
    }
    var E = o();
    return hn;
  }
  var pn = {}, Xs;
  function Og() {
    if (Xs) return pn;
    Xs = 1, pn.readOptions = r;
    var e = Re, t = pn._defaultStyleMap = [
      "p.Heading1 => h1:fresh",
      "p.Heading2 => h2:fresh",
      "p.Heading3 => h3:fresh",
      "p.Heading4 => h4:fresh",
      "p.Heading5 => h5:fresh",
      "p.Heading6 => h6:fresh",
      "p[style-name='Heading 1'] => h1:fresh",
      "p[style-name='Heading 2'] => h2:fresh",
      "p[style-name='Heading 3'] => h3:fresh",
      "p[style-name='Heading 4'] => h4:fresh",
      "p[style-name='Heading 5'] => h5:fresh",
      "p[style-name='Heading 6'] => h6:fresh",
      "p[style-name='heading 1'] => h1:fresh",
      "p[style-name='heading 2'] => h2:fresh",
      "p[style-name='heading 3'] => h3:fresh",
      "p[style-name='heading 4'] => h4:fresh",
      "p[style-name='heading 5'] => h5:fresh",
      "p[style-name='heading 6'] => h6:fresh",
      "r[style-name='Strong'] => strong",
      "p[style-name='footnote text'] => p:fresh",
      "r[style-name='footnote reference'] =>",
      "p[style-name='endnote text'] => p:fresh",
      "r[style-name='endnote reference'] =>",
      "p[style-name='annotation text'] => p:fresh",
      "r[style-name='annotation reference'] =>",
      "p[style-name='Footnote'] => p:fresh",
      "r[style-name='Footnote anchor'] =>",
      "p[style-name='Endnote'] => p:fresh",
      "r[style-name='Endnote anchor'] =>",
      "p:unordered-list(1) => ul > li:fresh",
      "p:unordered-list(2) => ul|ol > li > ul > li:fresh",
      "p:unordered-list(3) => ul|ol > li > ul|ol > li > ul > li:fresh",
      "p:unordered-list(4) => ul|ol > li > ul|ol > li > ul|ol > li > ul > li:fresh",
      "p:unordered-list(5) => ul|ol > li > ul|ol > li > ul|ol > li > ul|ol > li > ul > li:fresh",
      "p:ordered-list(1) => ol > li:fresh",
      "p:ordered-list(2) => ul|ol > li > ol > li:fresh",
      "p:ordered-list(3) => ul|ol > li > ul|ol > li > ol > li:fresh",
      "p:ordered-list(4) => ul|ol > li > ul|ol > li > ul|ol > li > ol > li:fresh",
      "p:ordered-list(5) => ul|ol > li > ul|ol > li > ul|ol > li > ul|ol > li > ol > li:fresh",
      "r[style-name='Hyperlink'] =>",
      "p[style-name='Normal'] => p:fresh"
    ], n = pn._standardOptions = {
      transformDocument: i,
      includeDefaultStyleMap: true,
      includeEmbeddedStyleMap: true
    };
    function r(c) {
      return c = c || {}, e.extend({}, n, c, {
        customStyleMap: a(c.styleMap),
        readStyleMap: function() {
          var o = this.customStyleMap;
          return this.includeEmbeddedStyleMap && (o = o.concat(a(this.embeddedStyleMap))), this.includeDefaultStyleMap && (o = o.concat(t)), o;
        }
      });
    }
    function a(c) {
      return c ? e.isString(c) ? c.split(`
`).map(function(o) {
        return o.trim();
      }).filter(function(o) {
        return o !== "" && o.charAt(0) !== "#";
      }) : c : [];
    }
    function i(c) {
      return c;
    }
    return pn;
  }
  var ca = {}, Vs;
  function Ng() {
    if (Vs) return ca;
    Vs = 1;
    var e = At(), t = Xd();
    ca.openZip = n;
    function n(r) {
      return r.arrayBuffer ? e.resolve(t.openArrayBuffer(r.arrayBuffer)) : e.reject(new Error("Could not find file in options"));
    }
    return ca;
  }
  var Nt = {}, Hs;
  function Lg() {
    if (Hs) return Nt;
    Hs = 1;
    var e = Re;
    Nt.paragraph = t, Nt.run = n, Nt._elements = a, Nt.getDescendantsOfType = i, Nt.getDescendants = c;
    function t(s) {
      return r("paragraph", s);
    }
    function n(s) {
      return r("run", s);
    }
    function r(s, d) {
      return a(function(b) {
        return b.type === s ? d(b) : b;
      });
    }
    function a(s) {
      return function d(b) {
        if (b.children) {
          var p = e.map(b.children, d);
          b = e.extend(b, {
            children: p
          });
        }
        return s(b);
      };
    }
    function i(s, d) {
      return c(s).filter(function(b) {
        return b.type === d;
      });
    }
    function c(s) {
      var d = [];
      return o(s, function(b) {
        d.push(b);
      }), d;
    }
    function o(s, d) {
      s.children && s.children.forEach(function(b) {
        o(b, d), d(b);
      });
    }
    return Nt;
  }
  var sa = {}, Gs;
  function Mg() {
    if (Gs) return sa;
    Gs = 1;
    var e = Hr(), t = Vr();
    sa.element = n;
    function n(r) {
      return function(a) {
        return t.elementWithTag(e.element(r), [
          a
        ]);
      };
    }
    return sa;
  }
  var Zs;
  function qg() {
    if (Zs) return Qe;
    Zs = 1;
    var e = Re, t = vg(), n = Dg(), r = Tg().DocumentConverter, a = Eg().convertElementToRawText, i = Ig().readStyle, c = Og().readOptions, o = Ng(), s = gt().Result;
    Qe.convertToHtml = d, Qe.convertToMarkdown = b, Qe.convert = p, Qe.extractRawText = l, Qe.images = Yd(), Qe.transforms = Lg(), Qe.underline = Mg(), Qe.embedStyleMap = u, Qe.readEmbeddedStyleMap = g;
    function d(h, f) {
      return p(h, f);
    }
    function b(h, f) {
      var v = Object.create(f || {});
      return v.outputFormat = "markdown", p(h, v);
    }
    function p(h, f) {
      return f = c(f), o.openZip(h).tap(function(v) {
        return n.readStyleMap(v).then(function(w) {
          f.embeddedStyleMap = w;
        });
      }).then(function(v) {
        return t.read(v, h).then(function(w) {
          return w.map(f.transformDocument);
        }).then(function(w) {
          return m(w, f);
        });
      });
    }
    function g(h) {
      return o.openZip(h).then(n.readStyleMap);
    }
    function m(h, f) {
      var v = y(f.readStyleMap()), w = e.extend({}, f, {
        styleMap: v.value
      }), x = new r(w);
      return h.flatMapThen(function(U) {
        return v.flatMapThen(function(E) {
          return x.convertToHtml(U);
        });
      });
    }
    function y(h) {
      return s.combine((h || []).map(i)).map(function(f) {
        return f.filter(function(v) {
          return !!v;
        });
      });
    }
    function l(h) {
      return o.openZip(h).then(t.read).then(function(f) {
        return f.map(a);
      });
    }
    function u(h, f) {
      return o.openZip(h).tap(function(v) {
        return n.writeStyleMap(v, f);
      }).then(function(v) {
        return v.toArrayBuffer();
      }).then(function(v) {
        return {
          toArrayBuffer: function() {
            return v;
          },
          toBuffer: function() {
            return Buffer.from(v);
          }
        };
      });
    }
    return Qe.styleMapping = function() {
      throw new Error(`Use a raw string instead of mammoth.styleMapping e.g. "p[style-name='Title'] => h1" instead of mammoth.styleMapping("p[style-name='Title'] => h1")`);
    }, Qe;
  }
  var Pg = qg();
  class jg extends xr {
    constructor({ fileName: t, buffer: n }) {
      super();
      __publicField(this, "fileName");
      __publicField(this, "buffer");
      this.fileName = t, this.buffer = n;
    }
    async load() {
      const n = (await Pg.extractRawText({
        arrayBuffer: this.buffer
      })).value, r = {
        source: this.fileName
      };
      return n ? [
        new va({
          pageContent: n,
          metadata: r
        })
      ] : [];
    }
  }
  const $g = new Wl(), zg = async (e, t) => {
    try {
      await $g.get("sendNotificationAfterIndexing") && vo.notifications.create({
        type: "basic",
        iconUrl: vo.runtime.getURL("/icon/128.png"),
        title: e,
        message: t
      });
    } catch (n) {
      console.error(n);
    }
  }, Xg = async () => {
    await zg("Page Assist - Embedding Completed", "The knowledge base embedding process is complete. You can now use the knowledge base for chatting.");
  }, Vg = async (e, t) => {
    console.log(`Processing knowledge with id: ${t}`);
    try {
      const n = await bl(t), r = await Rl();
      if (!n) {
        console.error(`Knowledge with id ${t} not found`);
        return;
      }
      await Gr(t, "processing");
      const a = await $l({
        baseUrl: Il(r),
        model: n.embedding_model
      }), i = await zl();
      for (const c of n.source) {
        if (!(c == null ? void 0 : c.content) || (c == null ? void 0 : c.content) === null) {
          console.log(`Skipping document with id ${c.source_id}`);
          continue;
        }
        if (c.type === "pdf" || c.type === "application/pdf") {
          let s = await new mh({
            name: c.filename,
            url: c.content
          }).load();
          const d = await i.splitDocuments(s);
          await Sn.fromDocuments(d, a, {
            knownledge_id: n.id,
            file_id: c.source_id
          });
        } else if (c.type === "csv" || c.type === "text/csv") {
          let s = await new xh({
            name: c.filename,
            url: c.content,
            options: {}
          }).load();
          const d = await i.splitDocuments(s);
          await Sn.fromDocuments(d, a, {
            knownledge_id: n.id,
            file_id: c.source_id
          });
        } else if (c.type === "docx" || c.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document") try {
          let s = await new jg({
            fileName: c.filename,
            buffer: await lh(c.content)
          }).load();
          const d = await i.splitDocuments(s);
          await Sn.fromDocuments(d, a, {
            knownledge_id: n.id,
            file_id: c.source_id
          });
        } catch (o) {
          console.error(`Error processing knowledge with id: ${t}`, o);
        }
        else {
          let s = await new _h({
            name: c.filename,
            url: c.content
          }).load();
          const d = await i.splitDocuments(s);
          await Sn.fromDocuments(d, a, {
            knownledge_id: n.id,
            file_id: c.source_id
          });
        }
      }
      await Gr(t, "finished"), await Xg();
    } catch (n) {
      console.error(`Error processing knowledge with id: ${t}`, n), await Gr(t, "failed");
    } finally {
      console.log(`Finished processing knowledge with id: ${t}`);
    }
  }, lo = Symbol("queue");
  let fr = false;
  Da.subscribe(lo, async (e, t) => {
    try {
      fr = true, await Vg(e, t), fr = false;
    } catch (n) {
      console.error(n), fr = false;
    }
  });
  window.addEventListener("beforeunload", (e) => {
    fr && (e.preventDefault(), e.returnValue = "");
  });
  let rl, Hg, Gg, Zg;
  rl = [
    "image/png",
    "image/jpeg",
    "image/jpg",
    "image/gif",
    "image/webp",
    "image/svg+xml",
    "image/bmp",
    "image/tiff",
    "image/ico",
    "image/heic",
    "image/heif",
    "image/avif",
    "application/x-msdownload",
    "application/x-msi",
    "application/x-dmp",
    "application/zip",
    "application/x-zip-compressed",
    "application/x-rar-compressed",
    "application/x-7z-compressed",
    "application/x-tar",
    "application/x-gzip",
    "application/java-archive",
    "application/octet-stream",
    "application/x-apple-diskimage",
    "application/x-debian-package",
    "application/x-rpm",
    "application/x-sh",
    "application/x-ms-installer",
    "application/vnd.microsoft.portable-executable",
    "application/x-unix-archive",
    "application/x-bzip2",
    "application/x-xz",
    "audio/mpeg",
    "audio/wav",
    "audio/ogg",
    "audio/flac",
    "audio/aac",
    "video/mp4",
    "video/mpeg",
    "video/quicktime",
    "video/x-msvideo",
    "video/webm",
    "video/x-matroska",
    "video/x-ms-wmv",
    "video/x-flv",
    "font/ttf",
    "font/otf",
    "font/woff",
    "font/woff2",
    "application/x-font-ttf",
    "application/x-font-otf",
    "application/font-woff",
    "application/font-woff2"
  ];
  Hg = ({ open: e, setOpen: t }) => {
    const { t: n } = ba([
      "knowledge",
      "common"
    ]), [r] = lt.useForm(), [a] = cu("totalFilePerKB", 5), i = async (s) => {
      const d = await du();
      if (!d) throw new Error(n("noEmbeddingModel"));
      const b = [], p = [
        "application/pdf",
        "text/csv",
        "text/plain",
        "text/markdown",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      ];
      for (const m of s.file) {
        let y = m.type;
        p.includes(y) || (y = "text/plain");
        const l = await mu({
          file: m,
          mime: y
        });
        b.push(l);
      }
      return (await yl({
        embedding_model: d,
        source: b,
        title: s.title
      })).id;
    }, { mutate: c, isPending: o } = ya({
      mutationFn: i,
      onError: (s) => {
        xt.error(s.message);
      },
      onSuccess: async (s) => {
        xt.success(n("form.success")), Da.publish(lo, s), r.resetFields(), t(false);
      }
    });
    return Te.jsx(lu, {
      title: n("addKnowledge"),
      open: e,
      footer: null,
      onCancel: () => t(false),
      children: Te.jsxs(lt, {
        onFinish: c,
        form: r,
        layout: "vertical",
        children: [
          Te.jsx(lt.Item, {
            rules: [
              {
                required: true,
                message: n("form.title.required")
              }
            ],
            name: "title",
            label: n("form.title.label"),
            children: Te.jsx(Ol, {
              size: "large",
              placeholder: n("form.title.placeholder")
            })
          }),
          Te.jsx(lt.Item, {
            name: "file",
            label: n("form.uploadFile.label"),
            rules: [
              {
                required: true,
                message: n("form.uploadFile.required")
              }
            ],
            getValueFromEvent: (s) => Array.isArray(s) ? s : s == null ? void 0 : s.fileList,
            children: Te.jsx(Qt.Dragger, {
              multiple: true,
              maxCount: a,
              beforeUpload: (s) => {
                const d = [
                  "application/pdf",
                  "text/csv",
                  "text/plain",
                  "text/markdown",
                  "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                ].map((b) => b.toLowerCase()).join(", ");
                return rl.includes(s.type.toLowerCase()) ? (xt.error(n("form.uploadFile.uploadError", {
                  allowedTypes: d
                })), Qt.LIST_IGNORE) : false;
              },
              children: Te.jsxs("div", {
                className: "p-3",
                children: [
                  Te.jsx("p", {
                    className: "flex justify-center ant-upload-drag-icon",
                    children: Te.jsx(gu, {
                      className: "w-10 h-10 text-gray-400"
                    })
                  }),
                  Te.jsx("p", {
                    className: "ant-upload-text",
                    children: n("form.uploadFile.uploadText")
                  })
                ]
              })
            })
          }),
          Te.jsx(lt.Item, {
            children: Te.jsx("button", {
              type: "submit",
              disabled: o,
              className: "inline-flex items-center justify-center w-full px-2 py-2 font-medium leading-4 text-center text-white bg-black border border-transparent rounded-md shadow-sm text-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-white dark:text-gray-800 dark:hover:bg-gray-100 dark:focus:ring-gray-500 dark:focus:ring-offset-gray-100 disabled:opacity-50",
              children: n("form.submit")
            })
          })
        ]
      })
    });
  };
  Gg = ({ id: e, open: t, setOpen: n }) => {
    const { t: r } = ba([
      "knowledge",
      "common"
    ]), [a] = lt.useForm(), [i] = cu("totalFilePerKB", 5), c = async (d) => {
      if (!await du()) throw new Error(r("noEmbeddingModel"));
      const p = [], g = [
        "application/pdf",
        "text/csv",
        "text/plain",
        "text/markdown",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      ];
      for (const m of d.file) {
        let y = m.type;
        g.includes(y) || (y = "text/plain");
        const l = await mu({
          file: m,
          mime: y
        });
        p.push(l);
      }
      return await vl(e, p), e;
    }, { mutate: o, isPending: s } = ya({
      mutationFn: c,
      onError: (d) => {
        xt.error(d.message);
      },
      onSuccess: async (d) => {
        xt.success(r("form.success")), Da.publish(lo, d), a.resetFields(), n(false);
      }
    });
    return Te.jsx(lu, {
      title: r("updateKnowledge"),
      open: t,
      footer: null,
      onCancel: () => n(false),
      children: Te.jsxs(lt, {
        onFinish: o,
        form: a,
        layout: "vertical",
        children: [
          Te.jsx(lt.Item, {
            name: "file",
            label: r("form.uploadFile.label"),
            rules: [
              {
                required: true,
                message: r("form.uploadFile.required")
              }
            ],
            getValueFromEvent: (d) => Array.isArray(d) ? d : d == null ? void 0 : d.fileList,
            children: Te.jsx(Qt.Dragger, {
              multiple: true,
              maxCount: i,
              beforeUpload: (d) => {
                const b = [
                  "application/pdf",
                  "text/csv",
                  "text/plain",
                  "text/markdown",
                  "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                ].map((p) => p.toLowerCase()).join(", ");
                return rl.includes(d.type.toLowerCase()) ? (xt.error(r("form.uploadFile.uploadError", {
                  allowedTypes: b
                })), Qt.LIST_IGNORE) : false;
              },
              children: Te.jsxs("div", {
                className: "p-3",
                children: [
                  Te.jsx("p", {
                    className: "flex justify-center ant-upload-drag-icon",
                    children: Te.jsx(gu, {
                      className: "w-10 h-10 text-gray-400"
                    })
                  }),
                  Te.jsx("p", {
                    className: "ant-upload-text",
                    children: r("form.uploadFile.uploadText")
                  })
                ]
              })
            })
          }),
          Te.jsx(lt.Item, {
            children: Te.jsx("button", {
              type: "submit",
              disabled: s,
              className: "inline-flex items-center justify-center w-full px-2 py-2 font-medium leading-4 text-center text-white bg-black border border-transparent rounded-md shadow-sm text-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-white dark:text-gray-800 dark:hover:bg-gray-100 dark:focus:ring-gray-500 dark:focus:ring-offset-gray-100 disabled:opacity-50",
              children: r("form.submit")
            })
          })
        ]
      })
    });
  };
  Zg = () => {
    const { t: e } = ba([
      "knowledge",
      "common"
    ]), [t, n] = oe.useState(false), r = pl(), { selectedKnowledge: a, setSelectedKnowledge: i } = Xl(), [c, o] = oe.useState(false), [s, d] = oe.useState(""), { data: b, status: p } = Nl({
      queryKey: [
        "fetchAllKnowledge"
      ],
      queryFn: () => _l(),
      refetchInterval: 1e3
    }), { mutate: g, isPending: m } = ya({
      mutationFn: xl,
      onSuccess: () => {
        r.invalidateQueries({
          queryKey: [
            "fetchAllKnowledge"
          ]
        }), xt.success(e("deleteSuccess"));
      },
      onError: (l) => {
        xt.error(l.message);
      }
    }), y = {
      finished: "green",
      processing: "yellow",
      pending: "gray",
      failed: "red"
    };
    return Te.jsxs("div", {
      children: [
        Te.jsxs("div", {
          children: [
            Te.jsx("div", {
              className: "mb-6",
              children: Te.jsx("div", {
                className: "-ml-4 -mt-2 flex flex-wrap items-center justify-end sm:flex-nowrap",
                children: Te.jsx("div", {
                  className: "ml-4 mt-2 flex-shrink-0",
                  children: Te.jsx("button", {
                    onClick: () => n(true),
                    className: "inline-flex items-center rounded-md border border-transparent bg-black px-2 py-2 text-md font-medium leading-4 text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-white dark:text-gray-800 dark:hover:bg-gray-100 dark:focus:ring-gray-500 dark:focus:ring-offset-gray-100 disabled:opacity-50",
                    children: e("addBtn")
                  })
                })
              })
            }),
            p === "pending" && Te.jsx(Ll, {
              paragraph: {
                rows: 8
              }
            }),
            p === "success" && Te.jsx(xo, {
              columns: [
                {
                  title: e("columns.title"),
                  dataIndex: "title",
                  key: "title"
                },
                {
                  title: e("columns.status"),
                  dataIndex: "status",
                  key: "status",
                  render: (l) => Te.jsx(Vl, {
                    color: y[l],
                    children: e(`status.${l}`)
                  })
                },
                {
                  title: e("columns.embeddings"),
                  dataIndex: "embedding_model",
                  key: "embedding_model",
                  render: (l) => Ml(l)
                },
                {
                  title: e("columns.createdAt"),
                  dataIndex: "createdAt",
                  key: "createdAt",
                  render: (l) => new Date(l).toLocaleString()
                },
                {
                  title: e("columns.action"),
                  key: "action",
                  render: (l, u) => Te.jsxs("div", {
                    className: "flex gap-4",
                    children: [
                      Te.jsx(yn, {
                        title: e("updateKnowledge"),
                        children: Te.jsx("button", {
                          disabled: m || u.status === "processing",
                          onClick: () => {
                            d(u.id), o(true);
                          },
                          className: "text-gray-700 dark:text-gray-400 disabled:opacity-50",
                          children: Te.jsx(uh, {
                            className: "w-5 h-5"
                          })
                        })
                      }),
                      Te.jsx(yn, {
                        title: e("common:delete"),
                        children: Te.jsx("button", {
                          disabled: m,
                          onClick: () => {
                            window.confirm(e("confirm.delete")) && (g(u.id), (a == null ? void 0 : a.id) === (u == null ? void 0 : u.id) && i(null));
                          },
                          className: "text-red-500 dark:text-red-400",
                          children: Te.jsx(Do, {
                            className: "w-5 h-5"
                          })
                        })
                      })
                    ]
                  })
                }
              ],
              expandable: {
                expandedRowRender: (l) => Te.jsx(xo, {
                  pagination: false,
                  columns: [
                    {
                      title: e("expandedColumns.name"),
                      key: "filename",
                      dataIndex: "filename"
                    },
                    {
                      title: e("columns.action"),
                      key: "action",
                      render: (u, h) => Te.jsx("div", {
                        className: "flex gap-4",
                        children: Te.jsx(yn, {
                          title: e("common:delete"),
                          children: Te.jsx("button", {
                            disabled: m || l.status === "processing",
                            onClick: async () => {
                              window.confirm(e("confirm.deleteSource")) && await Dl(l.id, h.source_id);
                            },
                            className: "text-red-500 dark:text-red-400 disabled:opacity-50",
                            children: Te.jsx(Do, {
                              className: "w-5 h-5"
                            })
                          })
                        })
                      })
                    }
                  ],
                  dataSource: l.source,
                  locale: {
                    emptyText: e("common:noData")
                  }
                }),
                defaultExpandAllRows: false
              },
              bordered: true,
              dataSource: b,
              rowKey: (l) => `${l.name}-${l.id}`
            })
          ]
        }),
        Te.jsx(Hg, {
          open: t,
          setOpen: n
        }),
        Te.jsx(Gg, {
          id: s,
          open: c,
          setOpen: o
        })
      ]
    });
  };
  cm = () => Te.jsx(ml, {
    children: Te.jsx(gl, {
      children: Te.jsx(Zg, {})
    })
  });
});
export {
  __tla,
  cm as default
};
