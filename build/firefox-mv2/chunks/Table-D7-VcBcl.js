import { ac as tn, T as ho, q as ft, k as W, X as Et, Y as $e, n as mt, r as l, o as de, c as X, _ as Re, l as Y, p as T, s as hn, v as yn, w as sn, y as A, z as zn, x as ya, ad as ba, ae as Jn, B as yo, a7 as xa, af as Ca, h as Mt, a9 as Sa, ag as $t, ah as on, ai as wr, aj as bo, ak as Qn, al as Er, am as Zn, an as er, i as wa, Z as Ea, $ as $a, a0 as Na, a1 as be, a2 as Ra, W as bn, E as $r, A as Ia, ao as ka, a3 as Oa, V as Zt, a8 as Ka, __tla as __tla_0 } from "./FontSizeProvider-C1DZf1x-.js";
import { P as xo, am as Co, ab as dt, aB as et, O as Bn, ae as an, aC as Pa, aD as Ta, aE as Da, aF as Ma, aG as za, aH as Ba, ao as So, R as wo, aI as Nr, S as La, aj as Ln, a6 as tr, aJ as nr, aK as Rr, aL as _a, aM as Ir, aN as Eo, aO as Ha, ah as ja, af as Aa, al as Fa, ai as Wa, aP as Va, aQ as qa, ak as kr, T as Or, aR as Xa, aS as Ua } from "./SaveButton-B6h4W40A.js";
import { ag as Kr, ah as Pr, D as $o, ai as Ga, aj as Ya, __tla as __tla_1 } from "./Sidebar-DZH9YUxk.js";
import { C as vn, g as Ja } from "./index-23mm4Rzq.js";
import { R as No } from "./index-Bva-imIy.js";
let Rt, Bo;
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
  })()
]).then(async () => {
  function _n(t) {
    return t != null && t === t.window;
  }
  const Qa = (t) => {
    var e, r;
    if (typeof window > "u") return 0;
    let n = 0;
    return _n(t) ? n = t.pageYOffset : t instanceof Document ? n = t.documentElement.scrollTop : (t instanceof HTMLElement || t) && (n = t.scrollTop), t && !_n(t) && typeof n != "number" && (n = (r = ((e = t.ownerDocument) !== null && e !== void 0 ? e : t).documentElement) === null || r === void 0 ? void 0 : r.scrollTop), n;
  };
  function Za(t, e, r, n) {
    const o = r - e;
    return t /= n / 2, t < 1 ? o / 2 * t * t * t + e : o / 2 * ((t -= 2) * t * t + 2) + e;
  }
  function ei(t) {
    let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const { getContainer: r = () => window, callback: n, duration: o = 450 } = e, i = r(), d = Qa(i), a = Date.now(), c = () => {
      const m = Date.now() - a, u = Za(m > o ? o : m, d, t, o);
      _n(i) ? i.scrollTo(window.pageXOffset, u) : i instanceof Document || i.constructor.name === "HTMLDocument" ? i.documentElement.scrollTop = u : i.scrollTop = u, m < o ? tn(c) : typeof n == "function" && n();
    };
    tn(c);
  }
  var Ro = function(e) {
    if (ho() && window.document.documentElement) {
      var r = Array.isArray(e) ? e : [
        e
      ], n = window.document.documentElement;
      return r.some(function(o) {
        return o in n.style;
      });
    }
    return false;
  }, ti = function(e, r) {
    if (!Ro(e)) return false;
    var n = document.createElement("div"), o = n.style[e];
    return n.style[e] = r, n.style[e] !== o;
  };
  function ni(t, e) {
    return !Array.isArray(t) && e !== void 0 ? ti(t, e) : Ro(t);
  }
  function ri(t, e, r) {
    var n = r || {}, o = n.noTrailing, i = o === void 0 ? false : o, d = n.noLeading, a = d === void 0 ? false : d, c = n.debounceMode, s = c === void 0 ? void 0 : c, m, u = false, f = 0;
    function v() {
      m && clearTimeout(m);
    }
    function g(p) {
      var y = p || {}, C = y.upcomingOnly, x = C === void 0 ? false : C;
      v(), u = !x;
    }
    function b() {
      for (var p = arguments.length, y = new Array(p), C = 0; C < p; C++) y[C] = arguments[C];
      var x = this, w = Date.now() - f;
      if (u) return;
      function S() {
        f = Date.now(), e.apply(x, y);
      }
      function E() {
        m = void 0;
      }
      !a && s && !m && S(), v(), s === void 0 && w > t ? a ? (f = Date.now(), i || (m = setTimeout(s ? E : S, t))) : S() : i !== true && (m = setTimeout(s ? E : S, s === void 0 ? t - w : t));
    }
    return b.cancel = g, b;
  }
  function oi(t, e, r) {
    var n = {}, o = n.atBegin, i = o === void 0 ? false : o;
    return ri(t, e, {
      debounceMode: i !== false
    });
  }
  function st(t, e) {
    return t[e];
  }
  var ai = [
    "children"
  ];
  function Io(t, e) {
    return "".concat(t, "-").concat(e);
  }
  function ii(t) {
    return t && t.type && t.type.isTreeNode;
  }
  function cn(t, e) {
    return t ?? e;
  }
  function At(t) {
    var e = t || {}, r = e.title, n = e._title, o = e.key, i = e.children, d = r || "title";
    return {
      title: d,
      _title: n || [
        d
      ],
      key: o || "key",
      children: i || "children"
    };
  }
  function ko(t) {
    function e(r) {
      var n = Co(r);
      return n.map(function(o) {
        if (!ii(o)) return Et(!o, "Tree/TreeNode can only accept TreeNode as children."), null;
        var i = o.key, d = o.props, a = d.children, c = mt(d, ai), s = W({
          key: i
        }, c), m = e(a);
        return m.length && (s.children = m), s;
      }).filter(function(o) {
        return o;
      });
    }
    return e(t);
  }
  function kn(t, e, r) {
    var n = At(r), o = n._title, i = n.key, d = n.children, a = new Set(e === true ? [] : e), c = [];
    function s(m) {
      var u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
      return m.map(function(f, v) {
        for (var g = Io(u ? u.pos : "0", v), b = cn(f[i], g), p, y = 0; y < o.length; y += 1) {
          var C = o[y];
          if (f[C] !== void 0) {
            p = f[C];
            break;
          }
        }
        var x = Object.assign(xo(f, [].concat($e(o), [
          i,
          d
        ])), {
          title: p,
          key: b,
          parent: u,
          pos: g,
          children: null,
          data: f,
          isStart: [].concat($e(u ? u.isStart : []), [
            v === 0
          ]),
          isEnd: [].concat($e(u ? u.isEnd : []), [
            v === m.length - 1
          ])
        });
        return c.push(x), e === true || a.has(b) ? x.children = s(f[d] || [], x) : x.children = [], x;
      });
    }
    return s(t), c;
  }
  function li(t, e, r) {
    var n = {};
    ft(r) === "object" ? n = r : n = {
      externalGetKey: r
    }, n = n || {};
    var o = n, i = o.childrenPropName, d = o.externalGetKey, a = o.fieldNames, c = At(a), s = c.key, m = c.children, u = i || m, f;
    d ? typeof d == "string" ? f = function(b) {
      return b[d];
    } : typeof d == "function" && (f = function(b) {
      return d(b);
    }) : f = function(b, p) {
      return cn(b[s], p);
    };
    function v(g, b, p, y) {
      var C = g ? g[u] : t, x = g ? Io(p.pos, b) : "0", w = g ? [].concat($e(y), [
        g
      ]) : [];
      if (g) {
        var S = f(g, x), E = {
          node: g,
          index: b,
          pos: x,
          key: S,
          parentPos: p.node ? p.pos : null,
          level: p.level + 1,
          nodes: w
        };
        e(E);
      }
      C && C.forEach(function(I, P) {
        v(I, P, {
          node: g,
          pos: x,
          level: p ? p.level + 1 : -1
        }, w);
      });
    }
    v(null);
  }
  function rr(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = e.initWrapper, n = e.processEntity, o = e.onProcessFinished, i = e.externalGetKey, d = e.childrenPropName, a = e.fieldNames, c = arguments.length > 2 ? arguments[2] : void 0, s = i || c, m = {}, u = {}, f = {
      posEntities: m,
      keyEntities: u
    };
    return r && (f = r(f) || f), li(t, function(v) {
      var g = v.node, b = v.index, p = v.pos, y = v.key, C = v.parentPos, x = v.level, w = v.nodes, S = {
        node: g,
        nodes: w,
        index: b,
        key: y,
        pos: p,
        level: x
      }, E = cn(y, p);
      m[p] = S, u[E] = S, S.parent = m[C], S.parent && (S.parent.children = S.parent.children || [], S.parent.children.push(S)), n && n(S, f);
    }, {
      externalGetKey: s,
      childrenPropName: d,
      fieldNames: a
    }), o && o(f), f;
  }
  function nn(t, e) {
    var r = e.expandedKeys, n = e.selectedKeys, o = e.loadedKeys, i = e.loadingKeys, d = e.checkedKeys, a = e.halfCheckedKeys, c = e.dragOverNodeKey, s = e.dropPosition, m = e.keyEntities, u = st(m, t), f = {
      eventKey: t,
      expanded: r.indexOf(t) !== -1,
      selected: n.indexOf(t) !== -1,
      loaded: o.indexOf(t) !== -1,
      loading: i.indexOf(t) !== -1,
      checked: d.indexOf(t) !== -1,
      halfChecked: a.indexOf(t) !== -1,
      pos: String(u ? u.pos : ""),
      dragOver: c === t && s === 0,
      dragOverGapTop: c === t && s === -1,
      dragOverGapBottom: c === t && s === 1
    };
    return f;
  }
  function Fe(t) {
    var e = t.data, r = t.expanded, n = t.selected, o = t.checked, i = t.loaded, d = t.loading, a = t.halfChecked, c = t.dragOver, s = t.dragOverGapTop, m = t.dragOverGapBottom, u = t.pos, f = t.active, v = t.eventKey, g = W(W({}, e), {}, {
      expanded: r,
      selected: n,
      checked: o,
      loaded: i,
      loading: d,
      halfChecked: a,
      dragOver: c,
      dragOverGapTop: s,
      dragOverGapBottom: m,
      pos: u,
      active: f,
      key: v
    });
    return "props" in g || Object.defineProperty(g, "props", {
      get: function() {
        return Et(false, "Second param return from event is node data instead of TreeNode instance. Please read value directly instead of reading from `props`."), t;
      }
    }), g;
  }
  function Oo(t, e) {
    var r = /* @__PURE__ */ new Set();
    return t.forEach(function(n) {
      e.has(n) || r.add(n);
    }), r;
  }
  function si(t) {
    var e = t || {}, r = e.disabled, n = e.disableCheckbox, o = e.checkable;
    return !!(r || n) || o === false;
  }
  function ci(t, e, r, n) {
    for (var o = new Set(t), i = /* @__PURE__ */ new Set(), d = 0; d <= r; d += 1) {
      var a = e.get(d) || /* @__PURE__ */ new Set();
      a.forEach(function(u) {
        var f = u.key, v = u.node, g = u.children, b = g === void 0 ? [] : g;
        o.has(f) && !n(v) && b.filter(function(p) {
          return !n(p.node);
        }).forEach(function(p) {
          o.add(p.key);
        });
      });
    }
    for (var c = /* @__PURE__ */ new Set(), s = r; s >= 0; s -= 1) {
      var m = e.get(s) || /* @__PURE__ */ new Set();
      m.forEach(function(u) {
        var f = u.parent, v = u.node;
        if (!(n(v) || !u.parent || c.has(u.parent.key))) {
          if (n(u.parent.node)) {
            c.add(f.key);
            return;
          }
          var g = true, b = false;
          (f.children || []).filter(function(p) {
            return !n(p.node);
          }).forEach(function(p) {
            var y = p.key, C = o.has(y);
            g && !C && (g = false), !b && (C || i.has(y)) && (b = true);
          }), g && o.add(f.key), b && i.add(f.key), c.add(f.key);
        }
      });
    }
    return {
      checkedKeys: Array.from(o),
      halfCheckedKeys: Array.from(Oo(i, o))
    };
  }
  function di(t, e, r, n, o) {
    for (var i = new Set(t), d = new Set(e), a = 0; a <= n; a += 1) {
      var c = r.get(a) || /* @__PURE__ */ new Set();
      c.forEach(function(f) {
        var v = f.key, g = f.node, b = f.children, p = b === void 0 ? [] : b;
        !i.has(v) && !d.has(v) && !o(g) && p.filter(function(y) {
          return !o(y.node);
        }).forEach(function(y) {
          i.delete(y.key);
        });
      });
    }
    d = /* @__PURE__ */ new Set();
    for (var s = /* @__PURE__ */ new Set(), m = n; m >= 0; m -= 1) {
      var u = r.get(m) || /* @__PURE__ */ new Set();
      u.forEach(function(f) {
        var v = f.parent, g = f.node;
        if (!(o(g) || !f.parent || s.has(f.parent.key))) {
          if (o(f.parent.node)) {
            s.add(v.key);
            return;
          }
          var b = true, p = false;
          (v.children || []).filter(function(y) {
            return !o(y.node);
          }).forEach(function(y) {
            var C = y.key, x = i.has(C);
            b && !x && (b = false), !p && (x || d.has(C)) && (p = true);
          }), b || i.delete(v.key), p && d.add(v.key), s.add(v.key);
        }
      });
    }
    return {
      checkedKeys: Array.from(i),
      halfCheckedKeys: Array.from(Oo(d, i))
    };
  }
  function Ht(t, e, r, n) {
    var o = [], i;
    n ? i = n : i = si;
    var d = new Set(t.filter(function(m) {
      var u = !!st(r, m);
      return u || o.push(m), u;
    })), a = /* @__PURE__ */ new Map(), c = 0;
    Object.keys(r).forEach(function(m) {
      var u = r[m], f = u.level, v = a.get(f);
      v || (v = /* @__PURE__ */ new Set(), a.set(f, v)), v.add(u), c = Math.max(c, f);
    }), Et(!o.length, "Tree missing follow keys: ".concat(o.slice(0, 100).map(function(m) {
      return "'".concat(m, "'");
    }).join(", ")));
    var s;
    return e === true ? s = ci(d, a, c, i) : s = di(d, e.halfCheckedKeys, a, c, i), s;
  }
  const Ko = function() {
    const t = Object.assign({}, arguments.length <= 0 ? void 0 : arguments[0]);
    for (let e = 1; e < arguments.length; e++) {
      const r = e < 0 || arguments.length <= e ? void 0 : arguments[e];
      r && Object.keys(r).forEach((n) => {
        const o = r[n];
        o !== void 0 && (t[n] = o);
      });
    }
    return t;
  };
  var ui = {
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
            d: "M272.9 512l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L186.8 492.3a31.99 31.99 0 000 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H532c6.7 0 10.4-7.7 6.3-12.9L272.9 512zm304 0l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L490.8 492.3a31.99 31.99 0 000 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H836c6.7 0 10.4-7.7 6.3-12.9L576.9 512z"
          }
        }
      ]
    },
    name: "double-left",
    theme: "outlined"
  }, fi = function(e, r) {
    return l.createElement(dt, de({}, e, {
      ref: r,
      icon: ui
    }));
  }, Tr = l.forwardRef(fi), mi = {
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
            d: "M533.2 492.3L277.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H188c-6.7 0-10.4 7.7-6.3 12.9L447.1 512 181.7 851.1A7.98 7.98 0 00188 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5zm304 0L581.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H492c-6.7 0-10.4 7.7-6.3 12.9L751.1 512 485.7 851.1A7.98 7.98 0 00492 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5z"
          }
        }
      ]
    },
    name: "double-right",
    theme: "outlined"
  }, vi = function(e, r) {
    return l.createElement(dt, de({}, e, {
      ref: r,
      icon: mi
    }));
  }, Dr = l.forwardRef(vi), pi = {
    items_per_page: "\u6761/\u9875",
    jump_to: "\u8DF3\u81F3",
    jump_to_confirm: "\u786E\u5B9A",
    page: "\u9875",
    prev_page: "\u4E0A\u4E00\u9875",
    next_page: "\u4E0B\u4E00\u9875",
    prev_5: "\u5411\u524D 5 \u9875",
    next_5: "\u5411\u540E 5 \u9875",
    prev_3: "\u5411\u524D 3 \u9875",
    next_3: "\u5411\u540E 3 \u9875",
    page_size: "\u9875\u7801"
  }, gi = [
    10,
    20,
    50,
    100
  ], hi = function(e) {
    var r = e.pageSizeOptions, n = r === void 0 ? gi : r, o = e.locale, i = e.changeSize, d = e.pageSize, a = e.goButton, c = e.quickGo, s = e.rootPrefixCls, m = e.disabled, u = e.buildOptionText, f = e.showSizeChanger, v = e.sizeChangerRender, g = X.useState(""), b = Re(g, 2), p = b[0], y = b[1], C = function() {
      return !p || Number.isNaN(p) ? void 0 : Number(p);
    }, x = typeof u == "function" ? u : function(R) {
      return "".concat(R, " ").concat(o.items_per_page);
    }, w = function(k) {
      y(k.target.value);
    }, S = function(k) {
      a || p === "" || (y(""), !(k.relatedTarget && (k.relatedTarget.className.indexOf("".concat(s, "-item-link")) >= 0 || k.relatedTarget.className.indexOf("".concat(s, "-item")) >= 0)) && (c == null ? void 0 : c(C())));
    }, E = function(k) {
      p !== "" && (k.keyCode === et.ENTER || k.type === "click") && (y(""), c == null ? void 0 : c(C()));
    }, I = function() {
      return n.some(function(k) {
        return k.toString() === d.toString();
      }) ? n : n.concat([
        d
      ]).sort(function(k, N) {
        var $ = Number.isNaN(Number(k)) ? 0 : Number(k), O = Number.isNaN(Number(N)) ? 0 : Number(N);
        return $ - O;
      });
    }, P = "".concat(s, "-options");
    if (!f && !c) return null;
    var h = null, K = null, z = null;
    return f && v && (h = v({
      disabled: m,
      size: d,
      onSizeChange: function(k) {
        i == null ? void 0 : i(Number(k));
      },
      "aria-label": o.page_size,
      className: "".concat(P, "-size-changer"),
      options: I().map(function(R) {
        return {
          label: x(R),
          value: R
        };
      })
    })), c && (a && (z = typeof a == "boolean" ? X.createElement("button", {
      type: "button",
      onClick: E,
      onKeyUp: E,
      disabled: m,
      className: "".concat(P, "-quick-jumper-button")
    }, o.jump_to_confirm) : X.createElement("span", {
      onClick: E,
      onKeyUp: E
    }, a)), K = X.createElement("div", {
      className: "".concat(P, "-quick-jumper")
    }, o.jump_to, X.createElement("input", {
      disabled: m,
      type: "text",
      value: p,
      onChange: w,
      onKeyUp: E,
      onBlur: S,
      "aria-label": o.page
    }), o.page, z)), X.createElement("li", {
      className: P
    }, h, K);
  }, en = function(e) {
    var r = e.rootPrefixCls, n = e.page, o = e.active, i = e.className, d = e.showTitle, a = e.onClick, c = e.onKeyPress, s = e.itemRender, m = "".concat(r, "-item"), u = Y(m, "".concat(m, "-").concat(n), T(T({}, "".concat(m, "-active"), o), "".concat(m, "-disabled"), !n), i), f = function() {
      a(n);
    }, v = function(p) {
      c(p, a, n);
    }, g = s(n, "page", X.createElement("a", {
      rel: "nofollow"
    }, n));
    return g ? X.createElement("li", {
      title: d ? String(n) : null,
      className: u,
      onClick: f,
      onKeyDown: v,
      tabIndex: 0
    }, g) : null;
  }, yi = function(e, r, n) {
    return n;
  };
  function Mr() {
  }
  function zr(t) {
    var e = Number(t);
    return typeof e == "number" && !Number.isNaN(e) && isFinite(e) && Math.floor(e) === e;
  }
  function Dt(t, e, r) {
    var n = typeof t > "u" ? e : t;
    return Math.floor((r - 1) / n) + 1;
  }
  var bi = function(e) {
    var r = e.prefixCls, n = r === void 0 ? "rc-pagination" : r, o = e.selectPrefixCls, i = o === void 0 ? "rc-select" : o, d = e.className, a = e.current, c = e.defaultCurrent, s = c === void 0 ? 1 : c, m = e.total, u = m === void 0 ? 0 : m, f = e.pageSize, v = e.defaultPageSize, g = v === void 0 ? 10 : v, b = e.onChange, p = b === void 0 ? Mr : b, y = e.hideOnSinglePage, C = e.align, x = e.showPrevNextJumpers, w = x === void 0 ? true : x, S = e.showQuickJumper, E = e.showLessItems, I = e.showTitle, P = I === void 0 ? true : I, h = e.onShowSizeChange, K = h === void 0 ? Mr : h, z = e.locale, R = z === void 0 ? pi : z, k = e.style, N = e.totalBoundaryShowSizeChanger, $ = N === void 0 ? 50 : N, O = e.disabled, D = e.simple, _ = e.showTotal, M = e.showSizeChanger, G = M === void 0 ? u > $ : M, ee = e.sizeChangerRender, ye = e.pageSizeOptions, oe = e.itemRender, pe = oe === void 0 ? yi : oe, xe = e.jumpPrevIcon, ue = e.jumpNextIcon, J = e.prevIcon, te = e.nextIcon, Ce = X.useRef(null), le = Bn(10, {
      value: f,
      defaultValue: g
    }), U = Re(le, 2), j = U[0], H = U[1], q = Bn(1, {
      value: a,
      defaultValue: s,
      postState: function(we) {
        return Math.max(1, Math.min(we, Dt(void 0, j, u)));
      }
    }), Z = Re(q, 2), F = Z[0], ne = Z[1], Ie = X.useState(F), We = Re(Ie, 2), ke = We[0], B = We[1];
    l.useEffect(function() {
      B(F);
    }, [
      F
    ]);
    var V = Math.max(1, F - (E ? 3 : 5)), ae = Math.min(Dt(void 0, j, u), F + (E ? 3 : 5));
    function fe(re, we) {
      var He = re || X.createElement("button", {
        type: "button",
        "aria-label": we,
        className: "".concat(n, "-item-link")
      });
      return typeof re == "function" && (He = X.createElement(re, W({}, e))), He;
    }
    function me(re) {
      var we = re.target.value, He = Dt(void 0, j, u), pt;
      return we === "" ? pt = we : Number.isNaN(Number(we)) ? pt = ke : we >= He ? pt = He : pt = Number(we), pt;
    }
    function Oe(re) {
      return zr(re) && re !== F && zr(u) && u > 0;
    }
    var ze = u > j ? S : false;
    function je(re) {
      (re.keyCode === et.UP || re.keyCode === et.DOWN) && re.preventDefault();
    }
    function ge(re) {
      var we = me(re);
      switch (we !== ke && B(we), re.keyCode) {
        case et.ENTER:
          L(we);
          break;
        case et.UP:
          L(we - 1);
          break;
        case et.DOWN:
          L(we + 1);
          break;
      }
    }
    function ve(re) {
      L(me(re));
    }
    function Q(re) {
      var we = Dt(re, j, u), He = F > we && we !== 0 ? we : F;
      H(re), B(He), K == null ? void 0 : K(F, re), ne(He), p == null ? void 0 : p(He, re);
    }
    function L(re) {
      if (Oe(re) && !O) {
        var we = Dt(void 0, j, u), He = re;
        return re > we ? He = we : re < 1 && (He = 1), He !== ke && B(He), ne(He), p == null ? void 0 : p(He, j), He;
      }
      return F;
    }
    var Ne = F > 1, Te = F < Dt(void 0, j, u);
    function se() {
      Ne && L(F - 1);
    }
    function Pe() {
      Te && L(F + 1);
    }
    function Se() {
      L(V);
    }
    function Le() {
      L(ae);
    }
    function Ae(re, we) {
      if (re.key === "Enter" || re.charCode === et.ENTER || re.keyCode === et.ENTER) {
        for (var He = arguments.length, pt = new Array(He > 2 ? He - 2 : 0), Kt = 2; Kt < He; Kt++) pt[Kt - 2] = arguments[Kt];
        we.apply(void 0, pt);
      }
    }
    function Ue(re) {
      Ae(re, se);
    }
    function vt(re) {
      Ae(re, Pe);
    }
    function De(re) {
      Ae(re, Se);
    }
    function xt(re) {
      Ae(re, Le);
    }
    function Ct(re) {
      var we = pe(re, "prev", fe(J, "prev page"));
      return X.isValidElement(we) ? X.cloneElement(we, {
        disabled: !Ne
      }) : we;
    }
    function Ge(re) {
      var we = pe(re, "next", fe(te, "next page"));
      return X.isValidElement(we) ? X.cloneElement(we, {
        disabled: !Te
      }) : we;
    }
    function nt(re) {
      (re.type === "click" || re.keyCode === et.ENTER) && L(ke);
    }
    var rt = null, Ye = an(e, {
      aria: true,
      data: true
    }), qe = _ && X.createElement("li", {
      className: "".concat(n, "-total-text")
    }, _(u, [
      u === 0 ? 0 : (F - 1) * j + 1,
      F * j > u ? u : F * j
    ])), Je = null, Me = Dt(void 0, j, u);
    if (y && u <= j) return null;
    var _e = [], ot = {
      rootPrefixCls: n,
      onClick: L,
      onKeyPress: Ae,
      showTitle: P,
      itemRender: pe,
      page: -1
    }, Xt = F - 1 > 0 ? F - 1 : 0, Ut = F + 1 < Me ? F + 1 : Me, ht = S && S.goButton, Gt = ft(D) === "object" ? D.readOnly : !D, ie = ht, ce = null;
    D && (ht && (typeof ht == "boolean" ? ie = X.createElement("button", {
      type: "button",
      onClick: nt,
      onKeyUp: nt
    }, R.jump_to_confirm) : ie = X.createElement("span", {
      onClick: nt,
      onKeyUp: nt
    }, ht), ie = X.createElement("li", {
      title: P ? "".concat(R.jump_to).concat(F, "/").concat(Me) : null,
      className: "".concat(n, "-simple-pager")
    }, ie)), ce = X.createElement("li", {
      title: P ? "".concat(F, "/").concat(Me) : null,
      className: "".concat(n, "-simple-pager")
    }, Gt ? ke : X.createElement("input", {
      type: "text",
      "aria-label": R.jump_to,
      value: ke,
      disabled: O,
      onKeyDown: je,
      onKeyUp: ge,
      onChange: ge,
      onBlur: ve,
      size: 3
    }), X.createElement("span", {
      className: "".concat(n, "-slash")
    }, "/"), Me));
    var Ke = E ? 1 : 2;
    if (Me <= 3 + Ke * 2) {
      Me || _e.push(X.createElement(en, de({}, ot, {
        key: "noPager",
        page: 1,
        className: "".concat(n, "-item-disabled")
      })));
      for (var Be = 1; Be <= Me; Be += 1) _e.push(X.createElement(en, de({}, ot, {
        key: Be,
        page: Be,
        active: F === Be
      })));
    } else {
      var Xe = E ? R.prev_3 : R.prev_5, at = E ? R.next_3 : R.next_5, it = pe(V, "jump-prev", fe(xe, "prev page")), Ve = pe(ae, "jump-next", fe(ue, "next page"));
      w && (rt = it ? X.createElement("li", {
        title: P ? Xe : null,
        key: "prev",
        onClick: Se,
        tabIndex: 0,
        onKeyDown: De,
        className: Y("".concat(n, "-jump-prev"), T({}, "".concat(n, "-jump-prev-custom-icon"), !!xe))
      }, it) : null, Je = Ve ? X.createElement("li", {
        title: P ? at : null,
        key: "next",
        onClick: Le,
        tabIndex: 0,
        onKeyDown: xt,
        className: Y("".concat(n, "-jump-next"), T({}, "".concat(n, "-jump-next-custom-icon"), !!ue))
      }, Ve) : null);
      var Bt = Math.max(1, F - Ke), Yt = Math.min(F + Ke, Me);
      F - 1 <= Ke && (Yt = 1 + Ke * 2), Me - F <= Ke && (Bt = Me - Ke * 2);
      for (var St = Bt; St <= Yt; St += 1) _e.push(X.createElement(en, de({}, ot, {
        key: St,
        page: St,
        active: F === St
      })));
      if (F - 1 >= Ke * 2 && F !== 3 && (_e[0] = X.cloneElement(_e[0], {
        className: Y("".concat(n, "-item-after-jump-prev"), _e[0].props.className)
      }), _e.unshift(rt)), Me - F >= Ke * 2 && F !== Me - 2) {
        var It = _e[_e.length - 1];
        _e[_e.length - 1] = X.cloneElement(It, {
          className: Y("".concat(n, "-item-before-jump-next"), It.props.className)
        }), _e.push(Je);
      }
      Bt !== 1 && _e.unshift(X.createElement(en, de({}, ot, {
        key: 1,
        page: 1
      }))), Yt !== Me && _e.push(X.createElement(en, de({}, ot, {
        key: Me,
        page: Me
      })));
    }
    var ut = Ct(Xt);
    if (ut) {
      var Jt = !Ne || !Me;
      ut = X.createElement("li", {
        title: P ? R.prev_page : null,
        onClick: se,
        tabIndex: Jt ? null : 0,
        onKeyDown: Ue,
        className: Y("".concat(n, "-prev"), T({}, "".concat(n, "-disabled"), Jt)),
        "aria-disabled": Jt
      }, ut);
    }
    var kt = Ge(Ut);
    if (kt) {
      var Ot, Lt;
      D ? (Ot = !Te, Lt = Ne ? 0 : null) : (Ot = !Te || !Me, Lt = Ot ? null : 0), kt = X.createElement("li", {
        title: P ? R.next_page : null,
        onClick: Pe,
        tabIndex: Lt,
        onKeyDown: vt,
        className: Y("".concat(n, "-next"), T({}, "".concat(n, "-disabled"), Ot)),
        "aria-disabled": Ot
      }, kt);
    }
    var wn = Y(n, d, T(T(T(T(T({}, "".concat(n, "-start"), C === "start"), "".concat(n, "-center"), C === "center"), "".concat(n, "-end"), C === "end"), "".concat(n, "-simple"), D), "".concat(n, "-disabled"), O));
    return X.createElement("ul", de({
      className: wn,
      style: k,
      ref: Ce
    }, Ye), qe, ut, D ? ce : _e, kt, X.createElement(hi, {
      locale: R,
      rootPrefixCls: n,
      disabled: O,
      selectPrefixCls: i,
      changeSize: Q,
      pageSize: j,
      pageSizeOptions: ye,
      quickGo: ze ? L : null,
      goButton: ie,
      showSizeChanger: G,
      sizeChangerRender: ee
    }));
  };
  const xi = (t) => {
    const { componentCls: e } = t;
    return {
      [`${e}-disabled`]: {
        "&, &:hover": {
          cursor: "not-allowed",
          [`${e}-item-link`]: {
            color: t.colorTextDisabled,
            cursor: "not-allowed"
          }
        },
        "&:focus-visible": {
          cursor: "not-allowed",
          [`${e}-item-link`]: {
            color: t.colorTextDisabled,
            cursor: "not-allowed"
          }
        }
      },
      [`&${e}-disabled`]: {
        cursor: "not-allowed",
        [`${e}-item`]: {
          cursor: "not-allowed",
          backgroundColor: "transparent",
          "&:hover, &:active": {
            backgroundColor: "transparent"
          },
          a: {
            color: t.colorTextDisabled,
            backgroundColor: "transparent",
            border: "none",
            cursor: "not-allowed"
          },
          "&-active": {
            borderColor: t.colorBorder,
            backgroundColor: t.itemActiveBgDisabled,
            "&:hover, &:active": {
              backgroundColor: t.itemActiveBgDisabled
            },
            a: {
              color: t.itemActiveColorDisabled
            }
          }
        },
        [`${e}-item-link`]: {
          color: t.colorTextDisabled,
          cursor: "not-allowed",
          "&:hover, &:active": {
            backgroundColor: "transparent"
          },
          [`${e}-simple&`]: {
            backgroundColor: "transparent",
            "&:hover, &:active": {
              backgroundColor: "transparent"
            }
          }
        },
        [`${e}-simple-pager`]: {
          color: t.colorTextDisabled
        },
        [`${e}-jump-prev, ${e}-jump-next`]: {
          [`${e}-item-link-icon`]: {
            opacity: 0
          },
          [`${e}-item-ellipsis`]: {
            opacity: 1
          }
        }
      },
      [`&${e}-simple`]: {
        [`${e}-prev, ${e}-next`]: {
          [`&${e}-disabled ${e}-item-link`]: {
            "&:hover, &:active": {
              backgroundColor: "transparent"
            }
          }
        }
      }
    };
  }, Ci = (t) => {
    const { componentCls: e } = t;
    return {
      [`&${e}-mini ${e}-total-text, &${e}-mini ${e}-simple-pager`]: {
        height: t.itemSizeSM,
        lineHeight: A(t.itemSizeSM)
      },
      [`&${e}-mini ${e}-item`]: {
        minWidth: t.itemSizeSM,
        height: t.itemSizeSM,
        margin: 0,
        lineHeight: A(t.calc(t.itemSizeSM).sub(2).equal())
      },
      [`&${e}-mini ${e}-prev, &${e}-mini ${e}-next`]: {
        minWidth: t.itemSizeSM,
        height: t.itemSizeSM,
        margin: 0,
        lineHeight: A(t.itemSizeSM)
      },
      [`&${e}-mini:not(${e}-disabled)`]: {
        [`${e}-prev, ${e}-next`]: {
          [`&:hover ${e}-item-link`]: {
            backgroundColor: t.colorBgTextHover
          },
          [`&:active ${e}-item-link`]: {
            backgroundColor: t.colorBgTextActive
          },
          [`&${e}-disabled:hover ${e}-item-link`]: {
            backgroundColor: "transparent"
          }
        }
      },
      [`
    &${e}-mini ${e}-prev ${e}-item-link,
    &${e}-mini ${e}-next ${e}-item-link
    `]: {
        backgroundColor: "transparent",
        borderColor: "transparent",
        "&::after": {
          height: t.itemSizeSM,
          lineHeight: A(t.itemSizeSM)
        }
      },
      [`&${e}-mini ${e}-jump-prev, &${e}-mini ${e}-jump-next`]: {
        height: t.itemSizeSM,
        marginInlineEnd: 0,
        lineHeight: A(t.itemSizeSM)
      },
      [`&${e}-mini ${e}-options`]: {
        marginInlineStart: t.paginationMiniOptionsMarginInlineStart,
        "&-size-changer": {
          top: t.miniOptionsSizeChangerTop
        },
        "&-quick-jumper": {
          height: t.itemSizeSM,
          lineHeight: A(t.itemSizeSM),
          input: Object.assign(Object.assign({}, Ba(t)), {
            width: t.paginationMiniQuickJumperInputWidth,
            height: t.controlHeightSM
          })
        }
      }
    };
  }, Si = (t) => {
    const { componentCls: e } = t;
    return {
      [`
    &${e}-simple ${e}-prev,
    &${e}-simple ${e}-next
    `]: {
        height: t.itemSizeSM,
        lineHeight: A(t.itemSizeSM),
        verticalAlign: "top",
        [`${e}-item-link`]: {
          height: t.itemSizeSM,
          backgroundColor: "transparent",
          border: 0,
          "&:hover": {
            backgroundColor: t.colorBgTextHover
          },
          "&:active": {
            backgroundColor: t.colorBgTextActive
          },
          "&::after": {
            height: t.itemSizeSM,
            lineHeight: A(t.itemSizeSM)
          }
        }
      },
      [`&${e}-simple ${e}-simple-pager`]: {
        display: "inline-block",
        height: t.itemSizeSM,
        marginInlineEnd: t.marginXS,
        input: {
          boxSizing: "border-box",
          height: "100%",
          padding: `0 ${A(t.paginationItemPaddingInline)}`,
          textAlign: "center",
          backgroundColor: t.itemInputBg,
          border: `${A(t.lineWidth)} ${t.lineType} ${t.colorBorder}`,
          borderRadius: t.borderRadius,
          outline: "none",
          transition: `border-color ${t.motionDurationMid}`,
          color: "inherit",
          "&:hover": {
            borderColor: t.colorPrimary
          },
          "&:focus": {
            borderColor: t.colorPrimaryHover,
            boxShadow: `${A(t.inputOutlineOffset)} 0 ${A(t.controlOutlineWidth)} ${t.controlOutline}`
          },
          "&[disabled]": {
            color: t.colorTextDisabled,
            backgroundColor: t.colorBgContainerDisabled,
            borderColor: t.colorBorder,
            cursor: "not-allowed"
          }
        }
      }
    };
  }, wi = (t) => {
    const { componentCls: e } = t;
    return {
      [`${e}-jump-prev, ${e}-jump-next`]: {
        outline: 0,
        [`${e}-item-container`]: {
          position: "relative",
          [`${e}-item-link-icon`]: {
            color: t.colorPrimary,
            fontSize: t.fontSizeSM,
            opacity: 0,
            transition: `all ${t.motionDurationMid}`,
            "&-svg": {
              top: 0,
              insetInlineEnd: 0,
              bottom: 0,
              insetInlineStart: 0,
              margin: "auto"
            }
          },
          [`${e}-item-ellipsis`]: {
            position: "absolute",
            top: 0,
            insetInlineEnd: 0,
            bottom: 0,
            insetInlineStart: 0,
            display: "block",
            margin: "auto",
            color: t.colorTextDisabled,
            letterSpacing: t.paginationEllipsisLetterSpacing,
            textAlign: "center",
            textIndent: t.paginationEllipsisTextIndent,
            opacity: 1,
            transition: `all ${t.motionDurationMid}`
          }
        },
        "&:hover": {
          [`${e}-item-link-icon`]: {
            opacity: 1
          },
          [`${e}-item-ellipsis`]: {
            opacity: 0
          }
        }
      },
      [`
    ${e}-prev,
    ${e}-jump-prev,
    ${e}-jump-next
    `]: {
        marginInlineEnd: t.marginXS
      },
      [`
    ${e}-prev,
    ${e}-next,
    ${e}-jump-prev,
    ${e}-jump-next
    `]: {
        display: "inline-block",
        minWidth: t.itemSize,
        height: t.itemSize,
        color: t.colorText,
        fontFamily: t.fontFamily,
        lineHeight: A(t.itemSize),
        textAlign: "center",
        verticalAlign: "middle",
        listStyle: "none",
        borderRadius: t.borderRadius,
        cursor: "pointer",
        transition: `all ${t.motionDurationMid}`
      },
      [`${e}-prev, ${e}-next`]: {
        outline: 0,
        button: {
          color: t.colorText,
          cursor: "pointer",
          userSelect: "none"
        },
        [`${e}-item-link`]: {
          display: "block",
          width: "100%",
          height: "100%",
          padding: 0,
          fontSize: t.fontSizeSM,
          textAlign: "center",
          backgroundColor: "transparent",
          border: `${A(t.lineWidth)} ${t.lineType} transparent`,
          borderRadius: t.borderRadius,
          outline: "none",
          transition: `all ${t.motionDurationMid}`
        },
        [`&:hover ${e}-item-link`]: {
          backgroundColor: t.colorBgTextHover
        },
        [`&:active ${e}-item-link`]: {
          backgroundColor: t.colorBgTextActive
        },
        [`&${e}-disabled:hover`]: {
          [`${e}-item-link`]: {
            backgroundColor: "transparent"
          }
        }
      },
      [`${e}-slash`]: {
        marginInlineEnd: t.paginationSlashMarginInlineEnd,
        marginInlineStart: t.paginationSlashMarginInlineStart
      },
      [`${e}-options`]: {
        display: "inline-block",
        marginInlineStart: t.margin,
        verticalAlign: "middle",
        "&-size-changer": {
          display: "inline-block",
          width: "auto"
        },
        "&-quick-jumper": {
          display: "inline-block",
          height: t.controlHeight,
          marginInlineStart: t.marginXS,
          lineHeight: A(t.controlHeight),
          verticalAlign: "top",
          input: Object.assign(Object.assign(Object.assign({}, Da(t)), Ma(t, {
            borderColor: t.colorBorder,
            hoverBorderColor: t.colorPrimaryHover,
            activeBorderColor: t.colorPrimary,
            activeShadow: t.activeShadow
          })), {
            "&[disabled]": Object.assign({}, za(t)),
            width: t.calc(t.controlHeightLG).mul(1.25).equal(),
            height: t.controlHeight,
            boxSizing: "border-box",
            margin: 0,
            marginInlineStart: t.marginXS,
            marginInlineEnd: t.marginXS
          })
        }
      }
    };
  }, Ei = (t) => {
    const { componentCls: e } = t;
    return {
      [`${e}-item`]: {
        display: "inline-block",
        minWidth: t.itemSize,
        height: t.itemSize,
        marginInlineEnd: t.marginXS,
        fontFamily: t.fontFamily,
        lineHeight: A(t.calc(t.itemSize).sub(2).equal()),
        textAlign: "center",
        verticalAlign: "middle",
        listStyle: "none",
        backgroundColor: t.itemBg,
        border: `${A(t.lineWidth)} ${t.lineType} transparent`,
        borderRadius: t.borderRadius,
        outline: 0,
        cursor: "pointer",
        userSelect: "none",
        a: {
          display: "block",
          padding: `0 ${A(t.paginationItemPaddingInline)}`,
          color: t.colorText,
          "&:hover": {
            textDecoration: "none"
          }
        },
        [`&:not(${e}-item-active)`]: {
          "&:hover": {
            transition: `all ${t.motionDurationMid}`,
            backgroundColor: t.colorBgTextHover
          },
          "&:active": {
            backgroundColor: t.colorBgTextActive
          }
        },
        "&-active": {
          fontWeight: t.fontWeightStrong,
          backgroundColor: t.itemActiveBg,
          borderColor: t.colorPrimary,
          a: {
            color: t.colorPrimary
          },
          "&:hover": {
            borderColor: t.colorPrimaryHover
          },
          "&:hover a": {
            color: t.colorPrimaryHover
          }
        }
      }
    };
  }, $i = (t) => {
    const { componentCls: e } = t;
    return {
      [e]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, sn(t)), {
        display: "flex",
        "&-start": {
          justifyContent: "start"
        },
        "&-center": {
          justifyContent: "center"
        },
        "&-end": {
          justifyContent: "end"
        },
        "ul, ol": {
          margin: 0,
          padding: 0,
          listStyle: "none"
        },
        "&::after": {
          display: "block",
          clear: "both",
          height: 0,
          overflow: "hidden",
          visibility: "hidden",
          content: '""'
        },
        [`${e}-total-text`]: {
          display: "inline-block",
          height: t.itemSize,
          marginInlineEnd: t.marginXS,
          lineHeight: A(t.calc(t.itemSize).sub(2).equal()),
          verticalAlign: "middle"
        }
      }), Ei(t)), wi(t)), Si(t)), Ci(t)), xi(t)), {
        [`@media only screen and (max-width: ${t.screenLG}px)`]: {
          [`${e}-item`]: {
            "&-after-jump-prev, &-before-jump-next": {
              display: "none"
            }
          }
        },
        [`@media only screen and (max-width: ${t.screenSM}px)`]: {
          [`${e}-options`]: {
            display: "none"
          }
        }
      }),
      [`&${t.componentCls}-rtl`]: {
        direction: "rtl"
      }
    };
  }, Ni = (t) => {
    const { componentCls: e } = t;
    return {
      [`${e}:not(${e}-disabled)`]: {
        [`${e}-item`]: Object.assign({}, ya(t)),
        [`${e}-jump-prev, ${e}-jump-next`]: {
          "&:focus-visible": Object.assign({
            [`${e}-item-link-icon`]: {
              opacity: 1
            },
            [`${e}-item-ellipsis`]: {
              opacity: 0
            }
          }, zn(t))
        },
        [`${e}-prev, ${e}-next`]: {
          [`&:focus-visible ${e}-item-link`]: Object.assign({}, zn(t))
        }
      }
    };
  }, Po = (t) => Object.assign({
    itemBg: t.colorBgContainer,
    itemSize: t.controlHeight,
    itemSizeSM: t.controlHeightSM,
    itemActiveBg: t.colorBgContainer,
    itemLinkBg: t.colorBgContainer,
    itemActiveColorDisabled: t.colorTextDisabled,
    itemActiveBgDisabled: t.controlItemBgActiveDisabled,
    itemInputBg: t.colorBgContainer,
    miniOptionsSizeChangerTop: 0
  }, Ta(t)), To = (t) => yn(t, {
    inputOutlineOffset: 0,
    paginationMiniOptionsMarginInlineStart: t.calc(t.marginXXS).div(2).equal(),
    paginationMiniQuickJumperInputWidth: t.calc(t.controlHeightLG).mul(1.1).equal(),
    paginationItemPaddingInline: t.calc(t.marginXXS).mul(1.5).equal(),
    paginationEllipsisLetterSpacing: t.calc(t.marginXXS).div(2).equal(),
    paginationSlashMarginInlineStart: t.marginSM,
    paginationSlashMarginInlineEnd: t.marginSM,
    paginationEllipsisTextIndent: "0.13em"
  }, Pa(t)), Ri = hn("Pagination", (t) => {
    const e = To(t);
    return [
      $i(e),
      Ni(e)
    ];
  }, Po), Ii = (t) => {
    const { componentCls: e } = t;
    return {
      [`${e}${e}-bordered${e}-disabled:not(${e}-mini)`]: {
        "&, &:hover": {
          [`${e}-item-link`]: {
            borderColor: t.colorBorder
          }
        },
        "&:focus-visible": {
          [`${e}-item-link`]: {
            borderColor: t.colorBorder
          }
        },
        [`${e}-item, ${e}-item-link`]: {
          backgroundColor: t.colorBgContainerDisabled,
          borderColor: t.colorBorder,
          [`&:hover:not(${e}-item-active)`]: {
            backgroundColor: t.colorBgContainerDisabled,
            borderColor: t.colorBorder,
            a: {
              color: t.colorTextDisabled
            }
          },
          [`&${e}-item-active`]: {
            backgroundColor: t.itemActiveBgDisabled
          }
        },
        [`${e}-prev, ${e}-next`]: {
          "&:hover button": {
            backgroundColor: t.colorBgContainerDisabled,
            borderColor: t.colorBorder,
            color: t.colorTextDisabled
          },
          [`${e}-item-link`]: {
            backgroundColor: t.colorBgContainerDisabled,
            borderColor: t.colorBorder
          }
        }
      },
      [`${e}${e}-bordered:not(${e}-mini)`]: {
        [`${e}-prev, ${e}-next`]: {
          "&:hover button": {
            borderColor: t.colorPrimaryHover,
            backgroundColor: t.itemBg
          },
          [`${e}-item-link`]: {
            backgroundColor: t.itemLinkBg,
            borderColor: t.colorBorder
          },
          [`&:hover ${e}-item-link`]: {
            borderColor: t.colorPrimary,
            backgroundColor: t.itemBg,
            color: t.colorPrimary
          },
          [`&${e}-disabled`]: {
            [`${e}-item-link`]: {
              borderColor: t.colorBorder,
              color: t.colorTextDisabled
            }
          }
        },
        [`${e}-item`]: {
          backgroundColor: t.itemBg,
          border: `${A(t.lineWidth)} ${t.lineType} ${t.colorBorder}`,
          [`&:hover:not(${e}-item-active)`]: {
            borderColor: t.colorPrimary,
            backgroundColor: t.itemBg,
            a: {
              color: t.colorPrimary
            }
          },
          "&-active": {
            borderColor: t.colorPrimary
          }
        }
      }
    };
  }, ki = ba([
    "Pagination",
    "bordered"
  ], (t) => {
    const e = To(t);
    return [
      Ii(e)
    ];
  }, Po);
  function Br(t) {
    return l.useMemo(() => typeof t == "boolean" ? [
      t,
      {}
    ] : t && typeof t == "object" ? [
      true,
      t
    ] : [
      void 0,
      void 0
    ], [
      t
    ]);
  }
  var Oi = function(t, e) {
    var r = {};
    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
    if (t != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(t); o < n.length; o++) e.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[o]) && (r[n[o]] = t[n[o]]);
    return r;
  };
  const Ki = (t) => {
    const { align: e, prefixCls: r, selectPrefixCls: n, className: o, rootClassName: i, style: d, size: a, locale: c, responsive: s, showSizeChanger: m, selectComponentClass: u, pageSizeOptions: f } = t, v = Oi(t, [
      "align",
      "prefixCls",
      "selectPrefixCls",
      "className",
      "rootClassName",
      "style",
      "size",
      "locale",
      "responsive",
      "showSizeChanger",
      "selectComponentClass",
      "pageSizeOptions"
    ]), { xs: g } = So(s), [, b] = Jn(), { getPrefixCls: p, direction: y, showSizeChanger: C, className: x, style: w } = yo("pagination"), S = p("pagination", r), [E, I, P] = Ri(S), h = wo(a), K = h === "small" || !!(g && !h && s), [z] = xa("Pagination", Ca), R = Object.assign(Object.assign({}, z), c), [k, N] = Br(m), [$, O] = Br(C), D = k ?? $, _ = N ?? O, M = u || La, G = l.useMemo(() => f ? f.map((ue) => Number(ue)) : void 0, [
      f
    ]), ee = (ue) => {
      var J;
      const { disabled: te, size: Ce, onSizeChange: le, "aria-label": U, className: j, options: H } = ue, { className: q, onChange: Z } = _ || {}, F = (J = H.find((ne) => String(ne.value) === String(Ce))) === null || J === void 0 ? void 0 : J.value;
      return l.createElement(M, Object.assign({
        disabled: te,
        showSearch: true,
        popupMatchSelectWidth: false,
        getPopupContainer: (ne) => ne.parentNode,
        "aria-label": U,
        options: H
      }, _, {
        value: F,
        onChange: (ne, Ie) => {
          le == null ? void 0 : le(ne), Z == null ? void 0 : Z(ne, Ie);
        },
        size: K ? "small" : "middle",
        className: Y(j, q)
      }));
    }, ye = l.useMemo(() => {
      const ue = l.createElement("span", {
        className: `${S}-item-ellipsis`
      }, "\u2022\u2022\u2022"), J = l.createElement("button", {
        className: `${S}-item-link`,
        type: "button",
        tabIndex: -1
      }, y === "rtl" ? l.createElement(Nr, null) : l.createElement(Kr, null)), te = l.createElement("button", {
        className: `${S}-item-link`,
        type: "button",
        tabIndex: -1
      }, y === "rtl" ? l.createElement(Kr, null) : l.createElement(Nr, null)), Ce = l.createElement("a", {
        className: `${S}-item-link`
      }, l.createElement("div", {
        className: `${S}-item-container`
      }, y === "rtl" ? l.createElement(Dr, {
        className: `${S}-item-link-icon`
      }) : l.createElement(Tr, {
        className: `${S}-item-link-icon`
      }), ue)), le = l.createElement("a", {
        className: `${S}-item-link`
      }, l.createElement("div", {
        className: `${S}-item-container`
      }, y === "rtl" ? l.createElement(Tr, {
        className: `${S}-item-link-icon`
      }) : l.createElement(Dr, {
        className: `${S}-item-link-icon`
      }), ue));
      return {
        prevIcon: J,
        nextIcon: te,
        jumpPrevIcon: Ce,
        jumpNextIcon: le
      };
    }, [
      y,
      S
    ]), oe = p("select", n), pe = Y({
      [`${S}-${e}`]: !!e,
      [`${S}-mini`]: K,
      [`${S}-rtl`]: y === "rtl",
      [`${S}-bordered`]: b.wireframe
    }, x, o, i, I, P), xe = Object.assign(Object.assign({}, w), d);
    return E(l.createElement(l.Fragment, null, b.wireframe && l.createElement(ki, {
      prefixCls: S
    }), l.createElement(bi, Object.assign({}, ye, v, {
      style: xe,
      prefixCls: S,
      selectPrefixCls: oe,
      className: pe,
      locale: R,
      pageSizeOptions: G,
      showSizeChanger: D,
      sizeChangerRender: ee
    }))));
  }, pn = 100, Do = pn / 5, Mo = pn / 2 - Do / 2, On = Mo * 2 * Math.PI, Lr = 50, _r = (t) => {
    const { dotClassName: e, style: r, hasCircleCls: n } = t;
    return l.createElement("circle", {
      className: Y(`${e}-circle`, {
        [`${e}-circle-bg`]: n
      }),
      r: Mo,
      cx: Lr,
      cy: Lr,
      strokeWidth: Do,
      style: r
    });
  }, Pi = (t) => {
    let { percent: e, prefixCls: r } = t;
    const n = `${r}-dot`, o = `${n}-holder`, i = `${o}-hidden`, [d, a] = l.useState(false);
    Mt(() => {
      e !== 0 && a(true);
    }, [
      e !== 0
    ]);
    const c = Math.max(Math.min(e, 100), 0);
    if (!d) return null;
    const s = {
      strokeDashoffset: `${On / 4}`,
      strokeDasharray: `${On * c / 100} ${On * (100 - c) / 100}`
    };
    return l.createElement("span", {
      className: Y(o, `${n}-progress`, c <= 0 && i)
    }, l.createElement("svg", {
      viewBox: `0 0 ${pn} ${pn}`,
      role: "progressbar",
      "aria-valuemin": 0,
      "aria-valuemax": 100,
      "aria-valuenow": c
    }, l.createElement(_r, {
      dotClassName: n,
      hasCircleCls: true
    }), l.createElement(_r, {
      dotClassName: n,
      style: s
    })));
  };
  function Ti(t) {
    const { prefixCls: e, percent: r = 0 } = t, n = `${e}-dot`, o = `${n}-holder`, i = `${o}-hidden`;
    return l.createElement(l.Fragment, null, l.createElement("span", {
      className: Y(o, r > 0 && i)
    }, l.createElement("span", {
      className: Y(n, `${e}-dot-spin`)
    }, [
      1,
      2,
      3,
      4
    ].map((d) => l.createElement("i", {
      className: `${e}-dot-item`,
      key: d
    })))), l.createElement(Pi, {
      prefixCls: e,
      percent: r
    }));
  }
  function Di(t) {
    const { prefixCls: e, indicator: r, percent: n } = t, o = `${e}-dot`;
    return r && l.isValidElement(r) ? Ln(r, {
      className: Y(r.props.className, o),
      percent: n
    }) : l.createElement(Ti, {
      prefixCls: e,
      percent: n
    });
  }
  const Mi = new tr("antSpinMove", {
    to: {
      opacity: 1
    }
  }), zi = new tr("antRotate", {
    to: {
      transform: "rotate(405deg)"
    }
  }), Bi = (t) => {
    const { componentCls: e, calc: r } = t;
    return {
      [e]: Object.assign(Object.assign({}, sn(t)), {
        position: "absolute",
        display: "none",
        color: t.colorPrimary,
        fontSize: 0,
        textAlign: "center",
        verticalAlign: "middle",
        opacity: 0,
        transition: `transform ${t.motionDurationSlow} ${t.motionEaseInOutCirc}`,
        "&-spinning": {
          position: "relative",
          display: "inline-block",
          opacity: 1
        },
        [`${e}-text`]: {
          fontSize: t.fontSize,
          paddingTop: r(r(t.dotSize).sub(t.fontSize)).div(2).add(2).equal()
        },
        "&-fullscreen": {
          position: "fixed",
          width: "100vw",
          height: "100vh",
          backgroundColor: t.colorBgMask,
          zIndex: t.zIndexPopupBase,
          inset: 0,
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
          opacity: 0,
          visibility: "hidden",
          transition: `all ${t.motionDurationMid}`,
          "&-show": {
            opacity: 1,
            visibility: "visible"
          },
          [e]: {
            [`${e}-dot-holder`]: {
              color: t.colorWhite
            },
            [`${e}-text`]: {
              color: t.colorTextLightSolid
            }
          }
        },
        "&-nested-loading": {
          position: "relative",
          [`> div > ${e}`]: {
            position: "absolute",
            top: 0,
            insetInlineStart: 0,
            zIndex: 4,
            display: "block",
            width: "100%",
            height: "100%",
            maxHeight: t.contentHeight,
            [`${e}-dot`]: {
              position: "absolute",
              top: "50%",
              insetInlineStart: "50%",
              margin: r(t.dotSize).mul(-1).div(2).equal()
            },
            [`${e}-text`]: {
              position: "absolute",
              top: "50%",
              width: "100%",
              textShadow: `0 1px 2px ${t.colorBgContainer}`
            },
            [`&${e}-show-text ${e}-dot`]: {
              marginTop: r(t.dotSize).div(2).mul(-1).sub(10).equal()
            },
            "&-sm": {
              [`${e}-dot`]: {
                margin: r(t.dotSizeSM).mul(-1).div(2).equal()
              },
              [`${e}-text`]: {
                paddingTop: r(r(t.dotSizeSM).sub(t.fontSize)).div(2).add(2).equal()
              },
              [`&${e}-show-text ${e}-dot`]: {
                marginTop: r(t.dotSizeSM).div(2).mul(-1).sub(10).equal()
              }
            },
            "&-lg": {
              [`${e}-dot`]: {
                margin: r(t.dotSizeLG).mul(-1).div(2).equal()
              },
              [`${e}-text`]: {
                paddingTop: r(r(t.dotSizeLG).sub(t.fontSize)).div(2).add(2).equal()
              },
              [`&${e}-show-text ${e}-dot`]: {
                marginTop: r(t.dotSizeLG).div(2).mul(-1).sub(10).equal()
              }
            }
          },
          [`${e}-container`]: {
            position: "relative",
            transition: `opacity ${t.motionDurationSlow}`,
            "&::after": {
              position: "absolute",
              top: 0,
              insetInlineEnd: 0,
              bottom: 0,
              insetInlineStart: 0,
              zIndex: 10,
              width: "100%",
              height: "100%",
              background: t.colorBgContainer,
              opacity: 0,
              transition: `all ${t.motionDurationSlow}`,
              content: '""',
              pointerEvents: "none"
            }
          },
          [`${e}-blur`]: {
            clear: "both",
            opacity: 0.5,
            userSelect: "none",
            pointerEvents: "none",
            "&::after": {
              opacity: 0.4,
              pointerEvents: "auto"
            }
          }
        },
        "&-tip": {
          color: t.spinDotDefault
        },
        [`${e}-dot-holder`]: {
          width: "1em",
          height: "1em",
          fontSize: t.dotSize,
          display: "inline-block",
          transition: `transform ${t.motionDurationSlow} ease, opacity ${t.motionDurationSlow} ease`,
          transformOrigin: "50% 50%",
          lineHeight: 1,
          color: t.colorPrimary,
          "&-hidden": {
            transform: "scale(0.3)",
            opacity: 0
          }
        },
        [`${e}-dot-progress`]: {
          position: "absolute",
          inset: 0
        },
        [`${e}-dot`]: {
          position: "relative",
          display: "inline-block",
          fontSize: t.dotSize,
          width: "1em",
          height: "1em",
          "&-item": {
            position: "absolute",
            display: "block",
            width: r(t.dotSize).sub(r(t.marginXXS).div(2)).div(2).equal(),
            height: r(t.dotSize).sub(r(t.marginXXS).div(2)).div(2).equal(),
            background: "currentColor",
            borderRadius: "100%",
            transform: "scale(0.75)",
            transformOrigin: "50% 50%",
            opacity: 0.3,
            animationName: Mi,
            animationDuration: "1s",
            animationIterationCount: "infinite",
            animationTimingFunction: "linear",
            animationDirection: "alternate",
            "&:nth-child(1)": {
              top: 0,
              insetInlineStart: 0,
              animationDelay: "0s"
            },
            "&:nth-child(2)": {
              top: 0,
              insetInlineEnd: 0,
              animationDelay: "0.4s"
            },
            "&:nth-child(3)": {
              insetInlineEnd: 0,
              bottom: 0,
              animationDelay: "0.8s"
            },
            "&:nth-child(4)": {
              bottom: 0,
              insetInlineStart: 0,
              animationDelay: "1.2s"
            }
          },
          "&-spin": {
            transform: "rotate(45deg)",
            animationName: zi,
            animationDuration: "1.2s",
            animationIterationCount: "infinite",
            animationTimingFunction: "linear"
          },
          "&-circle": {
            strokeLinecap: "round",
            transition: [
              "stroke-dashoffset",
              "stroke-dasharray",
              "stroke",
              "stroke-width",
              "opacity"
            ].map((n) => `${n} ${t.motionDurationSlow} ease`).join(","),
            fillOpacity: 0,
            stroke: "currentcolor"
          },
          "&-circle-bg": {
            stroke: t.colorFillSecondary
          }
        },
        [`&-sm ${e}-dot`]: {
          "&, &-holder": {
            fontSize: t.dotSizeSM
          }
        },
        [`&-sm ${e}-dot-holder`]: {
          i: {
            width: r(r(t.dotSizeSM).sub(r(t.marginXXS).div(2))).div(2).equal(),
            height: r(r(t.dotSizeSM).sub(r(t.marginXXS).div(2))).div(2).equal()
          }
        },
        [`&-lg ${e}-dot`]: {
          "&, &-holder": {
            fontSize: t.dotSizeLG
          }
        },
        [`&-lg ${e}-dot-holder`]: {
          i: {
            width: r(r(t.dotSizeLG).sub(t.marginXXS)).div(2).equal(),
            height: r(r(t.dotSizeLG).sub(t.marginXXS)).div(2).equal()
          }
        },
        [`&${e}-show-text ${e}-text`]: {
          display: "block"
        }
      })
    };
  }, Li = (t) => {
    const { controlHeightLG: e, controlHeight: r } = t;
    return {
      contentHeight: 400,
      dotSize: e / 2,
      dotSizeSM: e * 0.35,
      dotSizeLG: r
    };
  }, _i = hn("Spin", (t) => {
    const e = yn(t, {
      spinDotDefault: t.colorTextDescription
    });
    return [
      Bi(e)
    ];
  }, Li), Hi = 200, Hr = [
    [
      30,
      0.05
    ],
    [
      70,
      0.03
    ],
    [
      96,
      0.01
    ]
  ];
  function ji(t, e) {
    const [r, n] = l.useState(0), o = l.useRef(null), i = e === "auto";
    return l.useEffect(() => (i && t && (n(0), o.current = setInterval(() => {
      n((d) => {
        const a = 100 - d;
        for (let c = 0; c < Hr.length; c += 1) {
          const [s, m] = Hr[c];
          if (d <= s) return d + a * m;
        }
        return d;
      });
    }, Hi)), () => {
      clearInterval(o.current);
    }), [
      i,
      t
    ]), i ? r : e;
  }
  var Ai = function(t, e) {
    var r = {};
    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
    if (t != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(t); o < n.length; o++) e.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[o]) && (r[n[o]] = t[n[o]]);
    return r;
  };
  let zo;
  function Fi(t, e) {
    return !!t && !!e && !Number.isNaN(Number(e));
  }
  Bo = (t) => {
    var e;
    const { prefixCls: r, spinning: n = true, delay: o = 0, className: i, rootClassName: d, size: a = "default", tip: c, wrapperClassName: s, style: m, children: u, fullscreen: f = false, indicator: v, percent: g } = t, b = Ai(t, [
      "prefixCls",
      "spinning",
      "delay",
      "className",
      "rootClassName",
      "size",
      "tip",
      "wrapperClassName",
      "style",
      "children",
      "fullscreen",
      "indicator",
      "percent"
    ]), { getPrefixCls: p, direction: y, className: C, style: x, indicator: w } = yo("spin"), S = p("spin", r), [E, I, P] = _i(S), [h, K] = l.useState(() => n && !Fi(n, o)), z = ji(h, g);
    l.useEffect(() => {
      if (n) {
        const _ = oi(o, () => {
          K(true);
        });
        return _(), () => {
          var M;
          (M = _ == null ? void 0 : _.cancel) === null || M === void 0 || M.call(_);
        };
      }
      K(false);
    }, [
      o,
      n
    ]);
    const R = l.useMemo(() => typeof u < "u" && !f, [
      u,
      f
    ]), k = Y(S, C, {
      [`${S}-sm`]: a === "small",
      [`${S}-lg`]: a === "large",
      [`${S}-spinning`]: h,
      [`${S}-show-text`]: !!c,
      [`${S}-rtl`]: y === "rtl"
    }, i, !f && d, I, P), N = Y(`${S}-container`, {
      [`${S}-blur`]: h
    }), $ = (e = v ?? w) !== null && e !== void 0 ? e : zo, O = Object.assign(Object.assign({}, x), m), D = l.createElement("div", Object.assign({}, b, {
      style: O,
      className: k,
      "aria-live": "polite",
      "aria-busy": h
    }), l.createElement(Di, {
      prefixCls: S,
      indicator: $,
      percent: z
    }), c && (R || f) ? l.createElement("div", {
      className: `${S}-text`
    }, c) : null);
    return E(R ? l.createElement("div", Object.assign({}, b, {
      className: Y(`${S}-nested-loading`, s, I, P)
    }), h && l.createElement("div", {
      key: "loading"
    }, D), l.createElement("div", {
      className: N,
      key: "container"
    }, u)) : f ? l.createElement("div", {
      className: Y(`${S}-fullscreen`, {
        [`${S}-fullscreen-show`]: h
      }, d, I, P)
    }, D) : D);
  };
  Bo.setDefaultIndicator = (t) => {
    zo = t;
  };
  var Wi = {
    icon: {
      tag: "svg",
      attrs: {
        viewBox: "0 0 1024 1024",
        focusable: "false"
      },
      children: [
        {
          tag: "path",
          attrs: {
            d: "M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"
          }
        }
      ]
    },
    name: "caret-down",
    theme: "filled"
  }, Vi = function(e, r) {
    return l.createElement(dt, de({}, e, {
      ref: r,
      icon: Wi
    }));
  }, qi = l.forwardRef(Vi), Xi = {
    icon: {
      tag: "svg",
      attrs: {
        viewBox: "0 0 1024 1024",
        focusable: "false"
      },
      children: [
        {
          tag: "path",
          attrs: {
            d: "M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"
          }
        }
      ]
    },
    name: "caret-down",
    theme: "outlined"
  }, Ui = function(e, r) {
    return l.createElement(dt, de({}, e, {
      ref: r,
      icon: Xi
    }));
  }, Gi = l.forwardRef(Ui), Yi = {
    icon: {
      tag: "svg",
      attrs: {
        viewBox: "0 0 1024 1024",
        focusable: "false"
      },
      children: [
        {
          tag: "path",
          attrs: {
            d: "M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z"
          }
        }
      ]
    },
    name: "caret-up",
    theme: "outlined"
  }, Ji = function(e, r) {
    return l.createElement(dt, de({}, e, {
      ref: r,
      icon: Yi
    }));
  }, Qi = l.forwardRef(Ji), Zi = {
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
            d: "M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494z"
          }
        }
      ]
    },
    name: "file",
    theme: "outlined"
  }, el = function(e, r) {
    return l.createElement(dt, de({}, e, {
      ref: r,
      icon: Zi
    }));
  }, Lo = l.forwardRef(el), tl = {
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
            d: "M349 838c0 17.7 14.2 32 31.8 32h262.4c17.6 0 31.8-14.3 31.8-32V642H349v196zm531.1-684H143.9c-24.5 0-39.8 26.7-27.5 48l221.3 376h348.8l221.3-376c12.1-21.3-3.2-48-27.7-48z"
          }
        }
      ]
    },
    name: "filter",
    theme: "filled"
  }, nl = function(e, r) {
    return l.createElement(dt, de({}, e, {
      ref: r,
      icon: tl
    }));
  }, rl = l.forwardRef(nl), ol = {
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
            d: "M928 444H820V330.4c0-17.7-14.3-32-32-32H473L355.7 186.2a8.15 8.15 0 00-5.5-2.2H96c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h698c13 0 24.8-7.9 29.7-20l134-332c1.5-3.8 2.3-7.9 2.3-12 0-17.7-14.3-32-32-32zM136 256h188.5l119.6 114.4H748V444H238c-13 0-24.8 7.9-29.7 20L136 643.2V256zm635.3 512H159l103.3-256h612.4L771.3 768z"
          }
        }
      ]
    },
    name: "folder-open",
    theme: "outlined"
  }, al = function(e, r) {
    return l.createElement(dt, de({}, e, {
      ref: r,
      icon: ol
    }));
  }, il = l.forwardRef(al), ll = {
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
            d: "M880 298.4H521L403.7 186.2a8.15 8.15 0 00-5.5-2.2H144c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V330.4c0-17.7-14.3-32-32-32zM840 768H184V256h188.5l119.6 114.4H840V768z"
          }
        }
      ]
    },
    name: "folder",
    theme: "outlined"
  }, sl = function(e, r) {
    return l.createElement(dt, de({}, e, {
      ref: r,
      icon: ll
    }));
  }, cl = l.forwardRef(sl), dl = {
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
            d: "M300 276.5a56 56 0 1056-97 56 56 0 00-56 97zm0 284a56 56 0 1056-97 56 56 0 00-56 97zM640 228a56 56 0 10112 0 56 56 0 00-112 0zm0 284a56 56 0 10112 0 56 56 0 00-112 0zM300 844.5a56 56 0 1056-97 56 56 0 00-56 97zM640 796a56 56 0 10112 0 56 56 0 00-112 0z"
          }
        }
      ]
    },
    name: "holder",
    theme: "outlined"
  }, ul = function(e, r) {
    return l.createElement(dt, de({}, e, {
      ref: r,
      icon: dl
    }));
  }, fl = l.forwardRef(ul), ml = {
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
            d: "M328 544h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z"
          }
        },
        {
          tag: "path",
          attrs: {
            d: "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"
          }
        }
      ]
    },
    name: "minus-square",
    theme: "outlined"
  }, vl = function(e, r) {
    return l.createElement(dt, de({}, e, {
      ref: r,
      icon: ml
    }));
  }, pl = l.forwardRef(vl), gl = {
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
            d: "M328 544h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z"
          }
        },
        {
          tag: "path",
          attrs: {
            d: "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"
          }
        }
      ]
    },
    name: "plus-square",
    theme: "outlined"
  }, hl = function(e, r) {
    return l.createElement(dt, de({}, e, {
      ref: r,
      icon: gl
    }));
  }, yl = l.forwardRef(hl), bt = {}, dn = "rc-table-internal-hook";
  function or(t) {
    var e = l.createContext(void 0), r = function(o) {
      var i = o.value, d = o.children, a = l.useRef(i);
      a.current = i;
      var c = l.useState(function() {
        return {
          getValue: function() {
            return a.current;
          },
          listeners: /* @__PURE__ */ new Set()
        };
      }), s = Re(c, 1), m = s[0];
      return Mt(function() {
        Sa.unstable_batchedUpdates(function() {
          m.listeners.forEach(function(u) {
            u(i);
          });
        });
      }, [
        i
      ]), l.createElement(e.Provider, {
        value: m
      }, d);
    };
    return {
      Context: e,
      Provider: r,
      defaultValue: t
    };
  }
  function tt(t, e) {
    var r = $t(typeof e == "function" ? e : function(u) {
      if (e === void 0) return u;
      if (!Array.isArray(e)) return u[e];
      var f = {};
      return e.forEach(function(v) {
        f[v] = u[v];
      }), f;
    }), n = l.useContext(t == null ? void 0 : t.Context), o = n || {}, i = o.listeners, d = o.getValue, a = l.useRef();
    a.current = r(n ? d() : t == null ? void 0 : t.defaultValue);
    var c = l.useState({}), s = Re(c, 2), m = s[1];
    return Mt(function() {
      if (!n) return;
      function u(f) {
        var v = r(f);
        on(a.current, v, true) || m({});
      }
      return i.add(u), function() {
        i.delete(u);
      };
    }, [
      n
    ]), a.current;
  }
  function bl() {
    var t = l.createContext(null);
    function e() {
      return l.useContext(t);
    }
    function r(o, i) {
      var d = wr(o), a = function(s, m) {
        var u = d ? {
          ref: m
        } : {}, f = l.useRef(0), v = l.useRef(s), g = e();
        return g !== null ? l.createElement(o, de({}, s, u)) : ((!i || i(v.current, s)) && (f.current += 1), v.current = s, l.createElement(t.Provider, {
          value: f.current
        }, l.createElement(o, de({}, s, u))));
      };
      return d ? l.forwardRef(a) : a;
    }
    function n(o, i) {
      var d = wr(o), a = function(s, m) {
        var u = d ? {
          ref: m
        } : {};
        return e(), l.createElement(o, de({}, s, u));
      };
      return d ? l.memo(l.forwardRef(a), i) : l.memo(a, i);
    }
    return {
      makeImmutable: r,
      responseImmutable: n,
      useImmutableMark: e
    };
  }
  var ar = bl(), _o = ar.makeImmutable, Ft = ar.responseImmutable, xl = ar.useImmutableMark, lt = or(), Ho = l.createContext({
    renderWithProps: false
  }), Cl = "RC_TABLE_KEY";
  function Sl(t) {
    return t == null ? [] : Array.isArray(t) ? t : [
      t
    ];
  }
  function xn(t) {
    var e = [], r = {};
    return t.forEach(function(n) {
      for (var o = n || {}, i = o.key, d = o.dataIndex, a = i || Sl(d).join("-") || Cl; r[a]; ) a = "".concat(a, "_next");
      r[a] = true, e.push(a);
    }), e;
  }
  function Hn(t) {
    return t != null;
  }
  function wl(t) {
    return typeof t == "number" && !Number.isNaN(t);
  }
  function El(t) {
    return t && ft(t) === "object" && !Array.isArray(t) && !l.isValidElement(t);
  }
  function $l(t, e, r, n, o, i) {
    var d = l.useContext(Ho), a = xl(), c = bo(function() {
      if (Hn(n)) return [
        n
      ];
      var s = e == null || e === "" ? [] : Array.isArray(e) ? e : [
        e
      ], m = Qn(t, s), u = m, f = void 0;
      if (o) {
        var v = o(m, t, r);
        El(v) ? (u = v.children, f = v.props, d.renderWithProps = true) : u = v;
      }
      return [
        u,
        f
      ];
    }, [
      a,
      t,
      n,
      e,
      o,
      r
    ], function(s, m) {
      if (i) {
        var u = Re(s, 2), f = u[1], v = Re(m, 2), g = v[1];
        return i(g, f);
      }
      return d.renderWithProps ? true : !on(s, m, true);
    });
    return c;
  }
  function Nl(t, e, r, n) {
    var o = t + e - 1;
    return t <= n && o >= r;
  }
  function Rl(t, e) {
    return tt(lt, function(r) {
      var n = Nl(t, e || 1, r.hoverStartRow, r.hoverEndRow);
      return [
        n,
        r.onHover
      ];
    });
  }
  var Il = function(e) {
    var r = e.ellipsis, n = e.rowType, o = e.children, i, d = r === true ? {
      showTitle: true
    } : r;
    return d && (d.showTitle || n === "header") && (typeof o == "string" || typeof o == "number" ? i = o.toString() : l.isValidElement(o) && typeof o.props.children == "string" && (i = o.props.children)), i;
  };
  function kl(t) {
    var e, r, n, o, i, d, a, c, s = t.component, m = t.children, u = t.ellipsis, f = t.scope, v = t.prefixCls, g = t.className, b = t.align, p = t.record, y = t.render, C = t.dataIndex, x = t.renderIndex, w = t.shouldCellUpdate, S = t.index, E = t.rowType, I = t.colSpan, P = t.rowSpan, h = t.fixLeft, K = t.fixRight, z = t.firstFixLeft, R = t.lastFixLeft, k = t.firstFixRight, N = t.lastFixRight, $ = t.appendNode, O = t.additionalProps, D = O === void 0 ? {} : O, _ = t.isSticky, M = "".concat(v, "-cell"), G = tt(lt, [
      "supportSticky",
      "allColumnsFixedLeft",
      "rowHoverable"
    ]), ee = G.supportSticky, ye = G.allColumnsFixedLeft, oe = G.rowHoverable, pe = $l(p, C, x, m, y, w), xe = Re(pe, 2), ue = xe[0], J = xe[1], te = {}, Ce = typeof h == "number" && ee, le = typeof K == "number" && ee;
    Ce && (te.position = "sticky", te.left = h), le && (te.position = "sticky", te.right = K);
    var U = (e = (r = (n = J == null ? void 0 : J.colSpan) !== null && n !== void 0 ? n : D.colSpan) !== null && r !== void 0 ? r : I) !== null && e !== void 0 ? e : 1, j = (o = (i = (d = J == null ? void 0 : J.rowSpan) !== null && d !== void 0 ? d : D.rowSpan) !== null && i !== void 0 ? i : P) !== null && o !== void 0 ? o : 1, H = Rl(S, j), q = Re(H, 2), Z = q[0], F = q[1], ne = $t(function(fe) {
      var me;
      p && F(S, S + j - 1), D == null || (me = D.onMouseEnter) === null || me === void 0 || me.call(D, fe);
    }), Ie = $t(function(fe) {
      var me;
      p && F(-1, -1), D == null || (me = D.onMouseLeave) === null || me === void 0 || me.call(D, fe);
    });
    if (U === 0 || j === 0) return null;
    var We = (a = D.title) !== null && a !== void 0 ? a : Il({
      rowType: E,
      ellipsis: u,
      children: ue
    }), ke = Y(M, g, (c = {}, T(T(T(T(T(T(T(T(T(T(c, "".concat(M, "-fix-left"), Ce && ee), "".concat(M, "-fix-left-first"), z && ee), "".concat(M, "-fix-left-last"), R && ee), "".concat(M, "-fix-left-all"), R && ye && ee), "".concat(M, "-fix-right"), le && ee), "".concat(M, "-fix-right-first"), k && ee), "".concat(M, "-fix-right-last"), N && ee), "".concat(M, "-ellipsis"), u), "".concat(M, "-with-append"), $), "".concat(M, "-fix-sticky"), (Ce || le) && _ && ee), T(c, "".concat(M, "-row-hover"), !J && Z)), D.className, J == null ? void 0 : J.className), B = {};
    b && (B.textAlign = b);
    var V = W(W(W(W({}, J == null ? void 0 : J.style), te), B), D.style), ae = ue;
    return ft(ae) === "object" && !Array.isArray(ae) && !l.isValidElement(ae) && (ae = null), u && (R || k) && (ae = l.createElement("span", {
      className: "".concat(M, "-content")
    }, ae)), l.createElement(s, de({}, J, D, {
      className: ke,
      style: V,
      title: We,
      scope: f,
      onMouseEnter: oe ? ne : void 0,
      onMouseLeave: oe ? Ie : void 0,
      colSpan: U !== 1 ? U : null,
      rowSpan: j !== 1 ? j : null
    }), $, ae);
  }
  const Wt = l.memo(kl);
  function ir(t, e, r, n, o) {
    var i = r[t] || {}, d = r[e] || {}, a, c;
    i.fixed === "left" ? a = n.left[o === "rtl" ? e : t] : d.fixed === "right" && (c = n.right[o === "rtl" ? t : e]);
    var s = false, m = false, u = false, f = false, v = r[e + 1], g = r[t - 1], b = v && !v.fixed || g && !g.fixed || r.every(function(w) {
      return w.fixed === "left";
    });
    if (o === "rtl") {
      if (a !== void 0) {
        var p = g && g.fixed === "left";
        f = !p && b;
      } else if (c !== void 0) {
        var y = v && v.fixed === "right";
        u = !y && b;
      }
    } else if (a !== void 0) {
      var C = v && v.fixed === "left";
      s = !C && b;
    } else if (c !== void 0) {
      var x = g && g.fixed === "right";
      m = !x && b;
    }
    return {
      fixLeft: a,
      fixRight: c,
      lastFixLeft: s,
      firstFixRight: m,
      lastFixRight: u,
      firstFixLeft: f,
      isSticky: n.isSticky
    };
  }
  var jo = l.createContext({});
  function Ol(t) {
    var e = t.className, r = t.index, n = t.children, o = t.colSpan, i = o === void 0 ? 1 : o, d = t.rowSpan, a = t.align, c = tt(lt, [
      "prefixCls",
      "direction"
    ]), s = c.prefixCls, m = c.direction, u = l.useContext(jo), f = u.scrollColumnIndex, v = u.stickyOffsets, g = u.flattenColumns, b = r + i - 1, p = b + 1 === f ? i + 1 : i, y = ir(r, r + p - 1, g, v, m);
    return l.createElement(Wt, de({
      className: e,
      index: r,
      component: "td",
      prefixCls: s,
      record: null,
      dataIndex: null,
      align: a,
      colSpan: p,
      rowSpan: d,
      render: function() {
        return n;
      }
    }, y));
  }
  var Kl = [
    "children"
  ];
  function Pl(t) {
    var e = t.children, r = mt(t, Kl);
    return l.createElement("tr", r, e);
  }
  function Cn(t) {
    var e = t.children;
    return e;
  }
  Cn.Row = Pl;
  Cn.Cell = Ol;
  function Tl(t) {
    var e = t.children, r = t.stickyOffsets, n = t.flattenColumns, o = tt(lt, "prefixCls"), i = n.length - 1, d = n[i], a = l.useMemo(function() {
      return {
        stickyOffsets: r,
        flattenColumns: n,
        scrollColumnIndex: d != null && d.scrollbar ? i : null
      };
    }, [
      d,
      n,
      i,
      r
    ]);
    return l.createElement(jo.Provider, {
      value: a
    }, l.createElement("tfoot", {
      className: "".concat(o, "-summary")
    }, e));
  }
  const fn = Ft(Tl);
  var Ao = Cn;
  function Dl(t) {
    return null;
  }
  function Ml(t) {
    return null;
  }
  function Fo(t, e, r, n, o, i, d) {
    t.push({
      record: e,
      indent: r,
      index: d
    });
    var a = i(e), c = o == null ? void 0 : o.has(a);
    if (e && Array.isArray(e[n]) && c) for (var s = 0; s < e[n].length; s += 1) Fo(t, e[n][s], r + 1, n, o, i, s);
  }
  function Wo(t, e, r, n) {
    var o = l.useMemo(function() {
      if (r != null && r.size) {
        for (var i = [], d = 0; d < (t == null ? void 0 : t.length); d += 1) {
          var a = t[d];
          Fo(i, a, 0, e, r, n, d);
        }
        return i;
      }
      return t == null ? void 0 : t.map(function(c, s) {
        return {
          record: c,
          indent: 0,
          index: s
        };
      });
    }, [
      t,
      e,
      r,
      n
    ]);
    return o;
  }
  function Vo(t, e, r, n) {
    var o = tt(lt, [
      "prefixCls",
      "fixedInfoList",
      "flattenColumns",
      "expandableType",
      "expandRowByClick",
      "onTriggerExpand",
      "rowClassName",
      "expandedRowClassName",
      "indentSize",
      "expandIcon",
      "expandedRowRender",
      "expandIconColumnIndex",
      "expandedKeys",
      "childrenColumnName",
      "rowExpandable",
      "onRow"
    ]), i = o.flattenColumns, d = o.expandableType, a = o.expandedKeys, c = o.childrenColumnName, s = o.onTriggerExpand, m = o.rowExpandable, u = o.onRow, f = o.expandRowByClick, v = o.rowClassName, g = d === "nest", b = d === "row" && (!m || m(t)), p = b || g, y = a && a.has(e), C = c && t && t[c], x = $t(s), w = u == null ? void 0 : u(t, r), S = w == null ? void 0 : w.onClick, E = function(K) {
      f && p && s(t, K);
      for (var z = arguments.length, R = new Array(z > 1 ? z - 1 : 0), k = 1; k < z; k++) R[k - 1] = arguments[k];
      S == null ? void 0 : S.apply(void 0, [
        K
      ].concat(R));
    }, I;
    typeof v == "string" ? I = v : typeof v == "function" && (I = v(t, r, n));
    var P = xn(i);
    return W(W({}, o), {}, {
      columnsKey: P,
      nestExpandable: g,
      expanded: y,
      hasNestChildren: C,
      record: t,
      onTriggerExpand: x,
      rowSupportExpand: b,
      expandable: p,
      rowProps: W(W({}, w), {}, {
        className: Y(I, w == null ? void 0 : w.className),
        onClick: E
      })
    });
  }
  function qo(t) {
    var e = t.prefixCls, r = t.children, n = t.component, o = t.cellComponent, i = t.className, d = t.expanded, a = t.colSpan, c = t.isEmpty, s = tt(lt, [
      "scrollbarSize",
      "fixHeader",
      "fixColumn",
      "componentWidth",
      "horizonScroll"
    ]), m = s.scrollbarSize, u = s.fixHeader, f = s.fixColumn, v = s.componentWidth, g = s.horizonScroll, b = r;
    return (c ? g && v : f) && (b = l.createElement("div", {
      style: {
        width: v - (u && !c ? m : 0),
        position: "sticky",
        left: 0,
        overflow: "hidden"
      },
      className: "".concat(e, "-expanded-row-fixed")
    }, b)), l.createElement(n, {
      className: i,
      style: {
        display: d ? null : "none"
      }
    }, l.createElement(Wt, {
      component: o,
      prefixCls: e,
      colSpan: a
    }, b));
  }
  function zl(t) {
    var e = t.prefixCls, r = t.record, n = t.onExpand, o = t.expanded, i = t.expandable, d = "".concat(e, "-row-expand-icon");
    if (!i) return l.createElement("span", {
      className: Y(d, "".concat(e, "-row-spaced"))
    });
    var a = function(s) {
      n(r, s), s.stopPropagation();
    };
    return l.createElement("span", {
      className: Y(d, T(T({}, "".concat(e, "-row-expanded"), o), "".concat(e, "-row-collapsed"), !o)),
      onClick: a
    });
  }
  function Bl(t, e, r) {
    var n = [];
    function o(i) {
      (i || []).forEach(function(d, a) {
        n.push(e(d, a)), o(d[r]);
      });
    }
    return o(t), n;
  }
  function Xo(t, e, r, n) {
    return typeof t == "string" ? t : typeof t == "function" ? t(e, r, n) : "";
  }
  function Uo(t, e, r, n, o) {
    var i = t.record, d = t.prefixCls, a = t.columnsKey, c = t.fixedInfoList, s = t.expandIconColumnIndex, m = t.nestExpandable, u = t.indentSize, f = t.expandIcon, v = t.expanded, g = t.hasNestChildren, b = t.onTriggerExpand, p = a[r], y = c[r], C;
    r === (s || 0) && m && (C = l.createElement(l.Fragment, null, l.createElement("span", {
      style: {
        paddingLeft: "".concat(u * n, "px")
      },
      className: "".concat(d, "-row-indent indent-level-").concat(n)
    }), f({
      prefixCls: d,
      expanded: v,
      expandable: g,
      record: i,
      onExpand: b
    })));
    var x;
    return e.onCell && (x = e.onCell(i, o)), {
      key: p,
      fixedInfo: y,
      appendCellNode: C,
      additionalCellProps: x || {}
    };
  }
  function Ll(t) {
    var e = t.className, r = t.style, n = t.record, o = t.index, i = t.renderIndex, d = t.rowKey, a = t.indent, c = a === void 0 ? 0 : a, s = t.rowComponent, m = t.cellComponent, u = t.scopeCellComponent, f = Vo(n, d, o, c), v = f.prefixCls, g = f.flattenColumns, b = f.expandedRowClassName, p = f.expandedRowRender, y = f.rowProps, C = f.expanded, x = f.rowSupportExpand, w = l.useRef(false);
    w.current || (w.current = C);
    var S = Xo(b, n, o, c), E = l.createElement(s, de({}, y, {
      "data-row-key": d,
      className: Y(e, "".concat(v, "-row"), "".concat(v, "-row-level-").concat(c), y == null ? void 0 : y.className, T({}, S, c >= 1)),
      style: W(W({}, r), y == null ? void 0 : y.style)
    }), g.map(function(h, K) {
      var z = h.render, R = h.dataIndex, k = h.className, N = Uo(f, h, K, c, o), $ = N.key, O = N.fixedInfo, D = N.appendCellNode, _ = N.additionalCellProps;
      return l.createElement(Wt, de({
        className: k,
        ellipsis: h.ellipsis,
        align: h.align,
        scope: h.rowScope,
        component: h.rowScope ? u : m,
        prefixCls: v,
        key: $,
        record: n,
        index: o,
        renderIndex: i,
        dataIndex: R,
        render: z,
        shouldCellUpdate: h.shouldCellUpdate
      }, O, {
        appendNode: D,
        additionalProps: _
      }));
    })), I;
    if (x && (w.current || C)) {
      var P = p(n, o, c + 1, C);
      I = l.createElement(qo, {
        expanded: C,
        className: Y("".concat(v, "-expanded-row"), "".concat(v, "-expanded-row-level-").concat(c + 1), S),
        prefixCls: v,
        component: s,
        cellComponent: m,
        colSpan: g.length,
        isEmpty: false
      }, P);
    }
    return l.createElement(l.Fragment, null, E, I);
  }
  const _l = Ft(Ll);
  function Hl(t) {
    var e = t.columnKey, r = t.onColumnResize, n = l.useRef();
    return l.useEffect(function() {
      n.current && r(e, n.current.offsetWidth);
    }, []), l.createElement(nr, {
      data: e
    }, l.createElement("td", {
      ref: n,
      style: {
        padding: 0,
        border: 0,
        height: 0
      }
    }, l.createElement("div", {
      style: {
        height: 0,
        overflow: "hidden"
      }
    }, "\xA0")));
  }
  function jl(t) {
    var e = t.prefixCls, r = t.columnsKey, n = t.onColumnResize;
    return l.createElement("tr", {
      "aria-hidden": "true",
      className: "".concat(e, "-measure-row"),
      style: {
        height: 0,
        fontSize: 0
      }
    }, l.createElement(nr.Collection, {
      onBatchResize: function(i) {
        i.forEach(function(d) {
          var a = d.data, c = d.size;
          n(a, c.offsetWidth);
        });
      }
    }, r.map(function(o) {
      return l.createElement(Hl, {
        key: o,
        columnKey: o,
        onColumnResize: n
      });
    })));
  }
  function Al(t) {
    var e = t.data, r = t.measureColumnWidth, n = tt(lt, [
      "prefixCls",
      "getComponent",
      "onColumnResize",
      "flattenColumns",
      "getRowKey",
      "expandedKeys",
      "childrenColumnName",
      "emptyNode"
    ]), o = n.prefixCls, i = n.getComponent, d = n.onColumnResize, a = n.flattenColumns, c = n.getRowKey, s = n.expandedKeys, m = n.childrenColumnName, u = n.emptyNode, f = Wo(e, m, s, c), v = l.useRef({
      renderWithProps: false
    }), g = i([
      "body",
      "wrapper"
    ], "tbody"), b = i([
      "body",
      "row"
    ], "tr"), p = i([
      "body",
      "cell"
    ], "td"), y = i([
      "body",
      "cell"
    ], "th"), C;
    e.length ? C = f.map(function(w, S) {
      var E = w.record, I = w.indent, P = w.index, h = c(E, S);
      return l.createElement(_l, {
        key: h,
        rowKey: h,
        record: E,
        index: S,
        renderIndex: P,
        rowComponent: b,
        cellComponent: p,
        scopeCellComponent: y,
        indent: I
      });
    }) : C = l.createElement(qo, {
      expanded: true,
      className: "".concat(o, "-placeholder"),
      prefixCls: o,
      component: b,
      cellComponent: p,
      colSpan: a.length,
      isEmpty: true
    }, u);
    var x = xn(a);
    return l.createElement(Ho.Provider, {
      value: v.current
    }, l.createElement(g, {
      className: "".concat(o, "-tbody")
    }, r && l.createElement(jl, {
      prefixCls: o,
      columnsKey: x,
      onColumnResize: d
    }), C));
  }
  const Fl = Ft(Al);
  var Wl = [
    "expandable"
  ], rn = "RC_TABLE_INTERNAL_COL_DEFINE";
  function Vl(t) {
    var e = t.expandable, r = mt(t, Wl), n;
    return "expandable" in t ? n = W(W({}, r), e) : n = r, n.showExpandColumn === false && (n.expandIconColumnIndex = -1), n;
  }
  var ql = [
    "columnType"
  ];
  function Go(t) {
    for (var e = t.colWidths, r = t.columns, n = t.columCount, o = tt(lt, [
      "tableLayout"
    ]), i = o.tableLayout, d = [], a = n || r.length, c = false, s = a - 1; s >= 0; s -= 1) {
      var m = e[s], u = r && r[s], f = void 0, v = void 0;
      if (u && (f = u[rn], i === "auto" && (v = u.minWidth)), m || v || f || c) {
        var g = f || {};
        g.columnType;
        var b = mt(g, ql);
        d.unshift(l.createElement("col", de({
          key: s,
          style: {
            width: m,
            minWidth: v
          }
        }, b))), c = true;
      }
    }
    return l.createElement("colgroup", null, d);
  }
  var Xl = [
    "className",
    "noData",
    "columns",
    "flattenColumns",
    "colWidths",
    "columCount",
    "stickyOffsets",
    "direction",
    "fixHeader",
    "stickyTopOffset",
    "stickyBottomOffset",
    "stickyClassName",
    "onScroll",
    "maxContentScroll",
    "children"
  ];
  function Ul(t, e) {
    return l.useMemo(function() {
      for (var r = [], n = 0; n < e; n += 1) {
        var o = t[n];
        if (o !== void 0) r[n] = o;
        else return null;
      }
      return r;
    }, [
      t.join("_"),
      e
    ]);
  }
  var Gl = l.forwardRef(function(t, e) {
    var r = t.className, n = t.noData, o = t.columns, i = t.flattenColumns, d = t.colWidths, a = t.columCount, c = t.stickyOffsets, s = t.direction, m = t.fixHeader, u = t.stickyTopOffset, f = t.stickyBottomOffset, v = t.stickyClassName, g = t.onScroll, b = t.maxContentScroll, p = t.children, y = mt(t, Xl), C = tt(lt, [
      "prefixCls",
      "scrollbarSize",
      "isSticky",
      "getComponent"
    ]), x = C.prefixCls, w = C.scrollbarSize, S = C.isSticky, E = C.getComponent, I = E([
      "header",
      "table"
    ], "table"), P = S && !m ? 0 : w, h = l.useRef(null), K = l.useCallback(function(_) {
      Er(e, _), Er(h, _);
    }, []);
    l.useEffect(function() {
      var _;
      function M(G) {
        var ee = G, ye = ee.currentTarget, oe = ee.deltaX;
        oe && (g({
          currentTarget: ye,
          scrollLeft: ye.scrollLeft + oe
        }), G.preventDefault());
      }
      return (_ = h.current) === null || _ === void 0 || _.addEventListener("wheel", M, {
        passive: false
      }), function() {
        var G;
        (G = h.current) === null || G === void 0 || G.removeEventListener("wheel", M);
      };
    }, []);
    var z = l.useMemo(function() {
      return i.every(function(_) {
        return _.width;
      });
    }, [
      i
    ]), R = i[i.length - 1], k = {
      fixed: R ? R.fixed : null,
      scrollbar: true,
      onHeaderCell: function() {
        return {
          className: "".concat(x, "-cell-scrollbar")
        };
      }
    }, N = l.useMemo(function() {
      return P ? [].concat($e(o), [
        k
      ]) : o;
    }, [
      P,
      o
    ]), $ = l.useMemo(function() {
      return P ? [].concat($e(i), [
        k
      ]) : i;
    }, [
      P,
      i
    ]), O = l.useMemo(function() {
      var _ = c.right, M = c.left;
      return W(W({}, c), {}, {
        left: s === "rtl" ? [].concat($e(M.map(function(G) {
          return G + P;
        })), [
          0
        ]) : M,
        right: s === "rtl" ? _ : [].concat($e(_.map(function(G) {
          return G + P;
        })), [
          0
        ]),
        isSticky: S
      });
    }, [
      P,
      c,
      S
    ]), D = Ul(d, a);
    return l.createElement("div", {
      style: W({
        overflow: "hidden"
      }, S ? {
        top: u,
        bottom: f
      } : {}),
      ref: K,
      className: Y(r, T({}, v, !!v))
    }, l.createElement(I, {
      style: {
        tableLayout: "fixed",
        visibility: n || D ? null : "hidden"
      }
    }, (!n || !b || z) && l.createElement(Go, {
      colWidths: D ? [].concat($e(D), [
        P
      ]) : [],
      columCount: a + 1,
      columns: $
    }), p(W(W({}, y), {}, {
      stickyOffsets: O,
      columns: N,
      flattenColumns: $
    }))));
  });
  const jr = l.memo(Gl);
  var Yl = function(e) {
    var r = e.cells, n = e.stickyOffsets, o = e.flattenColumns, i = e.rowComponent, d = e.cellComponent, a = e.onHeaderRow, c = e.index, s = tt(lt, [
      "prefixCls",
      "direction"
    ]), m = s.prefixCls, u = s.direction, f;
    a && (f = a(r.map(function(g) {
      return g.column;
    }), c));
    var v = xn(r.map(function(g) {
      return g.column;
    }));
    return l.createElement(i, f, r.map(function(g, b) {
      var p = g.column, y = ir(g.colStart, g.colEnd, o, n, u), C;
      return p && p.onHeaderCell && (C = g.column.onHeaderCell(p)), l.createElement(Wt, de({}, g, {
        scope: p.title ? g.colSpan > 1 ? "colgroup" : "col" : null,
        ellipsis: p.ellipsis,
        align: p.align,
        component: d,
        prefixCls: m,
        key: v[b]
      }, y, {
        additionalProps: C,
        rowType: "header"
      }));
    }));
  };
  function Jl(t) {
    var e = [];
    function r(d, a) {
      var c = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
      e[c] = e[c] || [];
      var s = a, m = d.filter(Boolean).map(function(u) {
        var f = {
          key: u.key,
          className: u.className || "",
          children: u.title,
          column: u,
          colStart: s
        }, v = 1, g = u.children;
        return g && g.length > 0 && (v = r(g, s, c + 1).reduce(function(b, p) {
          return b + p;
        }, 0), f.hasSubColumns = true), "colSpan" in u && (v = u.colSpan), "rowSpan" in u && (f.rowSpan = u.rowSpan), f.colSpan = v, f.colEnd = f.colStart + v - 1, e[c].push(f), s += v, v;
      });
      return m;
    }
    r(t, 0);
    for (var n = e.length, o = function(a) {
      e[a].forEach(function(c) {
        !("rowSpan" in c) && !c.hasSubColumns && (c.rowSpan = n - a);
      });
    }, i = 0; i < n; i += 1) o(i);
    return e;
  }
  var Ql = function(e) {
    var r = e.stickyOffsets, n = e.columns, o = e.flattenColumns, i = e.onHeaderRow, d = tt(lt, [
      "prefixCls",
      "getComponent"
    ]), a = d.prefixCls, c = d.getComponent, s = l.useMemo(function() {
      return Jl(n);
    }, [
      n
    ]), m = c([
      "header",
      "wrapper"
    ], "thead"), u = c([
      "header",
      "row"
    ], "tr"), f = c([
      "header",
      "cell"
    ], "th");
    return l.createElement(m, {
      className: "".concat(a, "-thead")
    }, s.map(function(v, g) {
      var b = l.createElement(Yl, {
        key: g,
        flattenColumns: o,
        cells: v,
        stickyOffsets: r,
        rowComponent: u,
        cellComponent: f,
        onHeaderRow: i,
        index: g
      });
      return b;
    }));
  };
  const Ar = Ft(Ql);
  function Fr(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    return typeof e == "number" ? e : e.endsWith("%") ? t * parseFloat(e) / 100 : null;
  }
  function Zl(t, e, r) {
    return l.useMemo(function() {
      if (e && e > 0) {
        var n = 0, o = 0;
        t.forEach(function(f) {
          var v = Fr(e, f.width);
          v ? n += v : o += 1;
        });
        var i = Math.max(e, r), d = Math.max(i - n, o), a = o, c = d / o, s = 0, m = t.map(function(f) {
          var v = W({}, f), g = Fr(e, v.width);
          if (g) v.width = g;
          else {
            var b = Math.floor(c);
            v.width = a === 1 ? d : b, d -= b, a -= 1;
          }
          return s += v.width, v;
        });
        if (s < i) {
          var u = i / s;
          d = i, m.forEach(function(f, v) {
            var g = Math.floor(f.width * u);
            f.width = v === m.length - 1 ? d : g, d -= g;
          });
        }
        return [
          m,
          Math.max(s, i)
        ];
      }
      return [
        t,
        e
      ];
    }, [
      t,
      e,
      r
    ]);
  }
  var es = [
    "children"
  ], ts = [
    "fixed"
  ];
  function lr(t) {
    return Co(t).filter(function(e) {
      return l.isValidElement(e);
    }).map(function(e) {
      var r = e.key, n = e.props, o = n.children, i = mt(n, es), d = W({
        key: r
      }, i);
      return o && (d.children = lr(o)), d;
    });
  }
  function Yo(t) {
    return t.filter(function(e) {
      return e && ft(e) === "object" && !e.hidden;
    }).map(function(e) {
      var r = e.children;
      return r && r.length > 0 ? W(W({}, e), {}, {
        children: Yo(r)
      }) : e;
    });
  }
  function jn(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "key";
    return t.filter(function(r) {
      return r && ft(r) === "object";
    }).reduce(function(r, n, o) {
      var i = n.fixed, d = i === true ? "left" : i, a = "".concat(e, "-").concat(o), c = n.children;
      return c && c.length > 0 ? [].concat($e(r), $e(jn(c, a).map(function(s) {
        return W({
          fixed: d
        }, s);
      }))) : [].concat($e(r), [
        W(W({
          key: a
        }, n), {}, {
          fixed: d
        })
      ]);
    }, []);
  }
  function ns(t) {
    return t.map(function(e) {
      var r = e.fixed, n = mt(e, ts), o = r;
      return r === "left" ? o = "right" : r === "right" && (o = "left"), W({
        fixed: o
      }, n);
    });
  }
  function rs(t, e) {
    var r = t.prefixCls, n = t.columns, o = t.children, i = t.expandable, d = t.expandedKeys, a = t.columnTitle, c = t.getRowKey, s = t.onTriggerExpand, m = t.expandIcon, u = t.rowExpandable, f = t.expandIconColumnIndex, v = t.direction, g = t.expandRowByClick, b = t.columnWidth, p = t.fixed, y = t.scrollWidth, C = t.clientWidth, x = l.useMemo(function() {
      var R = n || lr(o) || [];
      return Yo(R.slice());
    }, [
      n,
      o
    ]), w = l.useMemo(function() {
      if (i) {
        var R = x.slice();
        if (!R.includes(bt)) {
          var k = f || 0;
          k >= 0 && (k || p === "left" || !p) && R.splice(k, 0, bt), p === "right" && R.splice(x.length, 0, bt);
        }
        var N = R.indexOf(bt);
        R = R.filter(function(_, M) {
          return _ !== bt || M === N;
        });
        var $ = x[N], O;
        p ? O = p : O = $ ? $.fixed : null;
        var D = T(T(T(T(T(T({}, rn, {
          className: "".concat(r, "-expand-icon-col"),
          columnType: "EXPAND_COLUMN"
        }), "title", a), "fixed", O), "className", "".concat(r, "-row-expand-icon-cell")), "width", b), "render", function(M, G, ee) {
          var ye = c(G, ee), oe = d.has(ye), pe = u ? u(G) : true, xe = m({
            prefixCls: r,
            expanded: oe,
            expandable: pe,
            record: G,
            onExpand: s
          });
          return g ? l.createElement("span", {
            onClick: function(J) {
              return J.stopPropagation();
            }
          }, xe) : xe;
        });
        return R.map(function(_) {
          return _ === bt ? D : _;
        });
      }
      return x.filter(function(_) {
        return _ !== bt;
      });
    }, [
      i,
      x,
      c,
      d,
      m,
      v
    ]), S = l.useMemo(function() {
      var R = w;
      return e && (R = e(R)), R.length || (R = [
        {
          render: function() {
            return null;
          }
        }
      ]), R;
    }, [
      e,
      w,
      v
    ]), E = l.useMemo(function() {
      return v === "rtl" ? ns(jn(S)) : jn(S);
    }, [
      S,
      v,
      y
    ]), I = l.useMemo(function() {
      for (var R = -1, k = E.length - 1; k >= 0; k -= 1) {
        var N = E[k].fixed;
        if (N === "left" || N === true) {
          R = k;
          break;
        }
      }
      if (R >= 0) for (var $ = 0; $ <= R; $ += 1) {
        var O = E[$].fixed;
        if (O !== "left" && O !== true) return true;
      }
      var D = E.findIndex(function(G) {
        var ee = G.fixed;
        return ee === "right";
      });
      if (D >= 0) for (var _ = D; _ < E.length; _ += 1) {
        var M = E[_].fixed;
        if (M !== "right") return true;
      }
      return false;
    }, [
      E
    ]), P = Zl(E, y, C), h = Re(P, 2), K = h[0], z = h[1];
    return [
      S,
      K,
      z,
      I
    ];
  }
  function os(t, e, r) {
    var n = Vl(t), o = n.expandIcon, i = n.expandedRowKeys, d = n.defaultExpandedRowKeys, a = n.defaultExpandAllRows, c = n.expandedRowRender, s = n.onExpand, m = n.onExpandedRowsChange, u = n.childrenColumnName, f = o || zl, v = u || "children", g = l.useMemo(function() {
      return c ? "row" : t.expandable && t.internalHooks === dn && t.expandable.__PARENT_RENDER_ICON__ || e.some(function(S) {
        return S && ft(S) === "object" && S[v];
      }) ? "nest" : false;
    }, [
      !!c,
      e
    ]), b = l.useState(function() {
      return d || (a ? Bl(e, r, v) : []);
    }), p = Re(b, 2), y = p[0], C = p[1], x = l.useMemo(function() {
      return new Set(i || y || []);
    }, [
      i,
      y
    ]), w = l.useCallback(function(S) {
      var E = r(S, e.indexOf(S)), I, P = x.has(E);
      P ? (x.delete(E), I = $e(x)) : I = [].concat($e(x), [
        E
      ]), C(I), s && s(!P, S), m && m(I);
    }, [
      r,
      x,
      e,
      s,
      m
    ]);
    return [
      n,
      g,
      x,
      f,
      v,
      w
    ];
  }
  function as(t, e, r) {
    var n = t.map(function(o, i) {
      return ir(i, i, t, e, r);
    });
    return bo(function() {
      return n;
    }, [
      n
    ], function(o, i) {
      return !on(o, i);
    });
  }
  function Jo(t) {
    var e = l.useRef(t), r = l.useState({}), n = Re(r, 2), o = n[1], i = l.useRef(null), d = l.useRef([]);
    function a(c) {
      d.current.push(c);
      var s = Promise.resolve();
      i.current = s, s.then(function() {
        if (i.current === s) {
          var m = d.current, u = e.current;
          d.current = [], m.forEach(function(f) {
            e.current = f(e.current);
          }), i.current = null, u !== e.current && o({});
        }
      });
    }
    return l.useEffect(function() {
      return function() {
        i.current = null;
      };
    }, []), [
      e.current,
      a
    ];
  }
  function is(t) {
    var e = l.useRef(null), r = l.useRef();
    function n() {
      window.clearTimeout(r.current);
    }
    function o(d) {
      e.current = d, n(), r.current = window.setTimeout(function() {
        e.current = null, r.current = void 0;
      }, 100);
    }
    function i() {
      return e.current;
    }
    return l.useEffect(function() {
      return n;
    }, []), [
      o,
      i
    ];
  }
  function ls() {
    var t = l.useState(-1), e = Re(t, 2), r = e[0], n = e[1], o = l.useState(-1), i = Re(o, 2), d = i[0], a = i[1], c = l.useCallback(function(s, m) {
      n(s), a(m);
    }, []);
    return [
      r,
      d,
      c
    ];
  }
  var Wr = ho() ? window : null;
  function ss(t, e) {
    var r = ft(t) === "object" ? t : {}, n = r.offsetHeader, o = n === void 0 ? 0 : n, i = r.offsetSummary, d = i === void 0 ? 0 : i, a = r.offsetScroll, c = a === void 0 ? 0 : a, s = r.getContainer, m = s === void 0 ? function() {
      return Wr;
    } : s, u = m() || Wr, f = !!t;
    return l.useMemo(function() {
      return {
        isSticky: f,
        stickyClassName: f ? "".concat(e, "-sticky-holder") : "",
        offsetHeader: o,
        offsetSummary: d,
        offsetScroll: c,
        container: u
      };
    }, [
      f,
      c,
      o,
      d,
      e,
      u
    ]);
  }
  function cs(t, e, r) {
    var n = l.useMemo(function() {
      var o = e.length, i = function(s, m, u) {
        for (var f = [], v = 0, g = s; g !== m; g += u) f.push(v), e[g].fixed && (v += t[g] || 0);
        return f;
      }, d = i(0, o, 1), a = i(o - 1, -1, -1).reverse();
      return r === "rtl" ? {
        left: a,
        right: d
      } : {
        left: d,
        right: a
      };
    }, [
      t,
      e,
      r
    ]);
    return n;
  }
  function Vr(t) {
    var e = t.className, r = t.children;
    return l.createElement("div", {
      className: e
    }, r);
  }
  function qr(t) {
    var e = Zn(t), r = e.getBoundingClientRect(), n = document.documentElement;
    return {
      left: r.left + (window.pageXOffset || n.scrollLeft) - (n.clientLeft || document.body.clientLeft || 0),
      top: r.top + (window.pageYOffset || n.scrollTop) - (n.clientTop || document.body.clientTop || 0)
    };
  }
  var ds = function(e, r) {
    var n, o, i = e.scrollBodyRef, d = e.onScroll, a = e.offsetScroll, c = e.container, s = e.direction, m = tt(lt, "prefixCls"), u = ((n = i.current) === null || n === void 0 ? void 0 : n.scrollWidth) || 0, f = ((o = i.current) === null || o === void 0 ? void 0 : o.clientWidth) || 0, v = u && f * (f / u), g = l.useRef(), b = Jo({
      scrollLeft: 0,
      isHiddenScrollBar: true
    }), p = Re(b, 2), y = p[0], C = p[1], x = l.useRef({
      delta: 0,
      x: 0
    }), w = l.useState(false), S = Re(w, 2), E = S[0], I = S[1], P = l.useRef(null);
    l.useEffect(function() {
      return function() {
        tn.cancel(P.current);
      };
    }, []);
    var h = function() {
      I(false);
    }, K = function($) {
      $.persist(), x.current.delta = $.pageX - y.scrollLeft, x.current.x = 0, I(true), $.preventDefault();
    }, z = function($) {
      var O, D = $ || ((O = window) === null || O === void 0 ? void 0 : O.event), _ = D.buttons;
      if (!E || _ === 0) {
        E && I(false);
        return;
      }
      var M = x.current.x + $.pageX - x.current.x - x.current.delta, G = s === "rtl";
      M = Math.max(G ? v - f : 0, Math.min(G ? 0 : f - v, M));
      var ee = !G || Math.abs(M) + Math.abs(v) < f;
      ee && (d({
        scrollLeft: M / f * (u + 2)
      }), x.current.x = $.pageX);
    }, R = function() {
      tn.cancel(P.current), P.current = tn(function() {
        if (i.current) {
          var $ = qr(i.current).top, O = $ + i.current.offsetHeight, D = c === window ? document.documentElement.scrollTop + window.innerHeight : qr(c).top + c.clientHeight;
          O - Rr() <= D || $ >= D - a ? C(function(_) {
            return W(W({}, _), {}, {
              isHiddenScrollBar: true
            });
          }) : C(function(_) {
            return W(W({}, _), {}, {
              isHiddenScrollBar: false
            });
          });
        }
      });
    }, k = function($) {
      C(function(O) {
        return W(W({}, O), {}, {
          scrollLeft: $ / u * f || 0
        });
      });
    };
    return l.useImperativeHandle(r, function() {
      return {
        setScrollLeft: k,
        checkScrollBarVisible: R
      };
    }), l.useEffect(function() {
      var N = Pr(document.body, "mouseup", h, false), $ = Pr(document.body, "mousemove", z, false);
      return R(), function() {
        N.remove(), $.remove();
      };
    }, [
      v,
      E
    ]), l.useEffect(function() {
      if (i.current) {
        for (var N = [], $ = Zn(i.current); $; ) N.push($), $ = $.parentElement;
        return N.forEach(function(O) {
          return O.addEventListener("scroll", R, false);
        }), window.addEventListener("resize", R, false), window.addEventListener("scroll", R, false), c.addEventListener("scroll", R, false), function() {
          N.forEach(function(O) {
            return O.removeEventListener("scroll", R);
          }), window.removeEventListener("resize", R), window.removeEventListener("scroll", R), c.removeEventListener("scroll", R);
        };
      }
    }, [
      c
    ]), l.useEffect(function() {
      y.isHiddenScrollBar || C(function(N) {
        var $ = i.current;
        return $ ? W(W({}, N), {}, {
          scrollLeft: $.scrollLeft / $.scrollWidth * $.clientWidth
        }) : N;
      });
    }, [
      y.isHiddenScrollBar
    ]), u <= f || !v || y.isHiddenScrollBar ? null : l.createElement("div", {
      style: {
        height: Rr(),
        width: f,
        bottom: a
      },
      className: "".concat(m, "-sticky-scroll")
    }, l.createElement("div", {
      onMouseDown: K,
      ref: g,
      className: Y("".concat(m, "-sticky-scroll-bar"), T({}, "".concat(m, "-sticky-scroll-bar-active"), E)),
      style: {
        width: "".concat(v, "px"),
        transform: "translate3d(".concat(y.scrollLeft, "px, 0, 0)")
      }
    }));
  };
  const us = l.forwardRef(ds);
  var Qo = "rc-table", fs = [], ms = {};
  function vs() {
    return "No Data";
  }
  function ps(t, e) {
    var r = W({
      rowKey: "key",
      prefixCls: Qo,
      emptyText: vs
    }, t), n = r.prefixCls, o = r.className, i = r.rowClassName, d = r.style, a = r.data, c = r.rowKey, s = r.scroll, m = r.tableLayout, u = r.direction, f = r.title, v = r.footer, g = r.summary, b = r.caption, p = r.id, y = r.showHeader, C = r.components, x = r.emptyText, w = r.onRow, S = r.onHeaderRow, E = r.onScroll, I = r.internalHooks, P = r.transformColumns, h = r.internalRefs, K = r.tailor, z = r.getContainerWidth, R = r.sticky, k = r.rowHoverable, N = k === void 0 ? true : k, $ = a || fs, O = !!$.length, D = I === dn, _ = l.useCallback(function(he, Ee) {
      return Qn(C, he) || Ee;
    }, [
      C
    ]), M = l.useMemo(function() {
      return typeof c == "function" ? c : function(he) {
        var Ee = he && he[c];
        return Ee;
      };
    }, [
      c
    ]), G = _([
      "body"
    ]), ee = ls(), ye = Re(ee, 3), oe = ye[0], pe = ye[1], xe = ye[2], ue = os(r, $, M), J = Re(ue, 6), te = J[0], Ce = J[1], le = J[2], U = J[3], j = J[4], H = J[5], q = s == null ? void 0 : s.x, Z = l.useState(0), F = Re(Z, 2), ne = F[0], Ie = F[1], We = rs(W(W(W({}, r), te), {}, {
      expandable: !!te.expandedRowRender,
      columnTitle: te.columnTitle,
      expandedKeys: le,
      getRowKey: M,
      onTriggerExpand: H,
      expandIcon: U,
      expandIconColumnIndex: te.expandIconColumnIndex,
      direction: u,
      scrollWidth: D && K && typeof q == "number" ? q : null,
      clientWidth: ne
    }), D ? P : null), ke = Re(We, 4), B = ke[0], V = ke[1], ae = ke[2], fe = ke[3], me = ae ?? q, Oe = l.useMemo(function() {
      return {
        columns: B,
        flattenColumns: V
      };
    }, [
      B,
      V
    ]), ze = l.useRef(), je = l.useRef(), ge = l.useRef(), ve = l.useRef();
    l.useImperativeHandle(e, function() {
      return {
        nativeElement: ze.current,
        scrollTo: function(Ee) {
          var Qe;
          if (ge.current instanceof HTMLElement) {
            var ct = Ee.index, Ze = Ee.top, _t = Ee.key;
            if (wl(Ze)) {
              var Pt;
              (Pt = ge.current) === null || Pt === void 0 || Pt.scrollTo({
                top: Ze
              });
            } else {
              var Tt, Qt = _t ?? M($[ct]);
              (Tt = ge.current.querySelector('[data-row-key="'.concat(Qt, '"]'))) === null || Tt === void 0 || Tt.scrollIntoView();
            }
          } else (Qe = ge.current) !== null && Qe !== void 0 && Qe.scrollTo && ge.current.scrollTo(Ee);
        }
      };
    });
    var Q = l.useRef(), L = l.useState(false), Ne = Re(L, 2), Te = Ne[0], se = Ne[1], Pe = l.useState(false), Se = Re(Pe, 2), Le = Se[0], Ae = Se[1], Ue = Jo(/* @__PURE__ */ new Map()), vt = Re(Ue, 2), De = vt[0], xt = vt[1], Ct = xn(V), Ge = Ct.map(function(he) {
      return De.get(he);
    }), nt = l.useMemo(function() {
      return Ge;
    }, [
      Ge.join("_")
    ]), rt = cs(nt, V, u), Ye = s && Hn(s.y), qe = s && Hn(me) || !!te.fixed, Je = qe && V.some(function(he) {
      var Ee = he.fixed;
      return Ee;
    }), Me = l.useRef(), _e = ss(R, n), ot = _e.isSticky, Xt = _e.offsetHeader, Ut = _e.offsetSummary, ht = _e.offsetScroll, Gt = _e.stickyClassName, ie = _e.container, ce = l.useMemo(function() {
      return g == null ? void 0 : g($);
    }, [
      g,
      $
    ]), Ke = (Ye || ot) && l.isValidElement(ce) && ce.type === Cn && ce.props.fixed, Be, Xe, at;
    Ye && (Xe = {
      overflowY: O ? "scroll" : "auto",
      maxHeight: s.y
    }), qe && (Be = {
      overflowX: "auto"
    }, Ye || (Xe = {
      overflowY: "hidden"
    }), at = {
      width: me === true ? "auto" : me,
      minWidth: "100%"
    });
    var it = l.useCallback(function(he, Ee) {
      _a(ze.current) && xt(function(Qe) {
        if (Qe.get(he) !== Ee) {
          var ct = new Map(Qe);
          return ct.set(he, Ee), ct;
        }
        return Qe;
      });
    }, []), Ve = is(), Bt = Re(Ve, 2), Yt = Bt[0], St = Bt[1];
    function It(he, Ee) {
      Ee && (typeof Ee == "function" ? Ee(he) : Ee.scrollLeft !== he && (Ee.scrollLeft = he, Ee.scrollLeft !== he && setTimeout(function() {
        Ee.scrollLeft = he;
      }, 0)));
    }
    var ut = $t(function(he) {
      var Ee = he.currentTarget, Qe = he.scrollLeft, ct = u === "rtl", Ze = typeof Qe == "number" ? Qe : Ee.scrollLeft, _t = Ee || ms;
      if (!St() || St() === _t) {
        var Pt;
        Yt(_t), It(Ze, je.current), It(Ze, ge.current), It(Ze, Q.current), It(Ze, (Pt = Me.current) === null || Pt === void 0 ? void 0 : Pt.setScrollLeft);
      }
      var Tt = Ee || je.current;
      if (Tt) {
        var Qt = D && K && typeof me == "number" ? me : Tt.scrollWidth, In = Tt.clientWidth;
        if (Qt === In) {
          se(false), Ae(false);
          return;
        }
        ct ? (se(-Ze < Qt - In), Ae(-Ze > 0)) : (se(Ze > 0), Ae(Ze < Qt - In));
      }
    }), Jt = $t(function(he) {
      ut(he), E == null ? void 0 : E(he);
    }), kt = function() {
      if (qe && ge.current) {
        var Ee;
        ut({
          currentTarget: Zn(ge.current),
          scrollLeft: (Ee = ge.current) === null || Ee === void 0 ? void 0 : Ee.scrollLeft
        });
      } else se(false), Ae(false);
    }, Ot = function(Ee) {
      var Qe, ct = Ee.width;
      (Qe = Me.current) === null || Qe === void 0 || Qe.checkScrollBarVisible();
      var Ze = ze.current ? ze.current.offsetWidth : ct;
      D && z && ze.current && (Ze = z(ze.current, Ze) || Ze), Ze !== ne && (kt(), Ie(Ze));
    }, Lt = l.useRef(false);
    l.useEffect(function() {
      Lt.current && kt();
    }, [
      qe,
      a,
      B.length
    ]), l.useEffect(function() {
      Lt.current = true;
    }, []);
    var wn = l.useState(0), re = Re(wn, 2), we = re[0], He = re[1], pt = l.useState(true), Kt = Re(pt, 2), vr = Kt[0], ma = Kt[1];
    l.useEffect(function() {
      (!K || !D) && (ge.current instanceof Element ? He(Ir(ge.current).width) : He(Ir(ve.current).width)), ma(ni("position", "sticky"));
    }, []), l.useEffect(function() {
      D && h && (h.body.current = ge.current);
    });
    var va = l.useCallback(function(he) {
      return l.createElement(l.Fragment, null, l.createElement(Ar, he), Ke === "top" && l.createElement(fn, he, ce));
    }, [
      Ke,
      ce
    ]), pa = l.useCallback(function(he) {
      return l.createElement(fn, he, ce);
    }, [
      ce
    ]), pr = _([
      "table"
    ], "table"), un = l.useMemo(function() {
      return m || (Je ? me === "max-content" ? "auto" : "fixed" : Ye || ot || V.some(function(he) {
        var Ee = he.ellipsis;
        return Ee;
      }) ? "fixed" : "auto");
    }, [
      Ye,
      Je,
      V,
      m,
      ot
    ]), En, $n = {
      colWidths: nt,
      columCount: V.length,
      stickyOffsets: rt,
      onHeaderRow: S,
      fixHeader: Ye,
      scroll: s
    }, gr = l.useMemo(function() {
      return O ? null : typeof x == "function" ? x() : x;
    }, [
      O,
      x
    ]), hr = l.createElement(Fl, {
      data: $,
      measureColumnWidth: Ye || qe || ot
    }), yr = l.createElement(Go, {
      colWidths: V.map(function(he) {
        var Ee = he.width;
        return Ee;
      }),
      columns: V
    }), br = b != null ? l.createElement("caption", {
      className: "".concat(n, "-caption")
    }, b) : void 0, ga = an(r, {
      data: true
    }), xr = an(r, {
      aria: true
    });
    if (Ye || ot) {
      var Nn;
      typeof G == "function" ? (Nn = G($, {
        scrollbarSize: we,
        ref: ge,
        onScroll: ut
      }), $n.colWidths = V.map(function(he, Ee) {
        var Qe = he.width, ct = Ee === V.length - 1 ? Qe - we : Qe;
        return typeof ct == "number" && !Number.isNaN(ct) ? ct : 0;
      })) : Nn = l.createElement("div", {
        style: W(W({}, Be), Xe),
        onScroll: Jt,
        ref: ge,
        className: Y("".concat(n, "-body"))
      }, l.createElement(pr, de({
        style: W(W({}, at), {}, {
          tableLayout: un
        })
      }, xr), br, yr, hr, !Ke && ce && l.createElement(fn, {
        stickyOffsets: rt,
        flattenColumns: V
      }, ce)));
      var Cr = W(W(W({
        noData: !$.length,
        maxContentScroll: qe && me === "max-content"
      }, $n), Oe), {}, {
        direction: u,
        stickyClassName: Gt,
        onScroll: ut
      });
      En = l.createElement(l.Fragment, null, y !== false && l.createElement(jr, de({}, Cr, {
        stickyTopOffset: Xt,
        className: "".concat(n, "-header"),
        ref: je
      }), va), Nn, Ke && Ke !== "top" && l.createElement(jr, de({}, Cr, {
        stickyBottomOffset: Ut,
        className: "".concat(n, "-summary"),
        ref: Q
      }), pa), ot && ge.current && ge.current instanceof Element && l.createElement(us, {
        ref: Me,
        offsetScroll: ht,
        scrollBodyRef: ge,
        onScroll: ut,
        container: ie,
        direction: u
      }));
    } else En = l.createElement("div", {
      style: W(W({}, Be), Xe),
      className: Y("".concat(n, "-content")),
      onScroll: ut,
      ref: ge
    }, l.createElement(pr, de({
      style: W(W({}, at), {}, {
        tableLayout: un
      })
    }, xr), br, yr, y !== false && l.createElement(Ar, de({}, $n, Oe)), hr, ce && l.createElement(fn, {
      stickyOffsets: rt,
      flattenColumns: V
    }, ce)));
    var Rn = l.createElement("div", de({
      className: Y(n, o, T(T(T(T(T(T(T(T(T(T({}, "".concat(n, "-rtl"), u === "rtl"), "".concat(n, "-ping-left"), Te), "".concat(n, "-ping-right"), Le), "".concat(n, "-layout-fixed"), m === "fixed"), "".concat(n, "-fixed-header"), Ye), "".concat(n, "-fixed-column"), Je), "".concat(n, "-fixed-column-gapped"), Je && fe), "".concat(n, "-scroll-horizontal"), qe), "".concat(n, "-has-fix-left"), V[0] && V[0].fixed), "".concat(n, "-has-fix-right"), V[V.length - 1] && V[V.length - 1].fixed === "right")),
      style: d,
      id: p,
      ref: ze
    }, ga), f && l.createElement(Vr, {
      className: "".concat(n, "-title")
    }, f($)), l.createElement("div", {
      ref: ve,
      className: "".concat(n, "-container")
    }, En), v && l.createElement(Vr, {
      className: "".concat(n, "-footer")
    }, v($)));
    qe && (Rn = l.createElement(nr, {
      onResize: Ot
    }, Rn));
    var Sr = as(V, rt, u), ha = l.useMemo(function() {
      return {
        scrollX: me,
        prefixCls: n,
        getComponent: _,
        scrollbarSize: we,
        direction: u,
        fixedInfoList: Sr,
        isSticky: ot,
        supportSticky: vr,
        componentWidth: ne,
        fixHeader: Ye,
        fixColumn: Je,
        horizonScroll: qe,
        tableLayout: un,
        rowClassName: i,
        expandedRowClassName: te.expandedRowClassName,
        expandIcon: U,
        expandableType: Ce,
        expandRowByClick: te.expandRowByClick,
        expandedRowRender: te.expandedRowRender,
        onTriggerExpand: H,
        expandIconColumnIndex: te.expandIconColumnIndex,
        indentSize: te.indentSize,
        allColumnsFixedLeft: V.every(function(he) {
          return he.fixed === "left";
        }),
        emptyNode: gr,
        columns: B,
        flattenColumns: V,
        onColumnResize: it,
        hoverStartRow: oe,
        hoverEndRow: pe,
        onHover: xe,
        rowExpandable: te.rowExpandable,
        onRow: w,
        getRowKey: M,
        expandedKeys: le,
        childrenColumnName: j,
        rowHoverable: N
      };
    }, [
      me,
      n,
      _,
      we,
      u,
      Sr,
      ot,
      vr,
      ne,
      Ye,
      Je,
      qe,
      un,
      i,
      te.expandedRowClassName,
      U,
      Ce,
      te.expandRowByClick,
      te.expandedRowRender,
      H,
      te.expandIconColumnIndex,
      te.indentSize,
      gr,
      B,
      V,
      it,
      oe,
      pe,
      xe,
      te.rowExpandable,
      w,
      M,
      le,
      j,
      N
    ]);
    return l.createElement(lt.Provider, {
      value: ha
    }, Rn);
  }
  var gs = l.forwardRef(ps);
  function Zo(t) {
    return _o(gs, t);
  }
  var Vt = Zo();
  Vt.EXPAND_COLUMN = bt;
  Vt.INTERNAL_HOOKS = dn;
  Vt.Column = Dl;
  Vt.ColumnGroup = Ml;
  Vt.Summary = Ao;
  var sr = or(null), ea = or(null);
  function hs(t, e, r) {
    var n = e || 1;
    return r[t + n] - (r[t] || 0);
  }
  function ys(t) {
    var e = t.rowInfo, r = t.column, n = t.colIndex, o = t.indent, i = t.index, d = t.component, a = t.renderIndex, c = t.record, s = t.style, m = t.className, u = t.inverse, f = t.getHeight, v = r.render, g = r.dataIndex, b = r.className, p = r.width, y = tt(ea, [
      "columnsOffset"
    ]), C = y.columnsOffset, x = Uo(e, r, n, o, i), w = x.key, S = x.fixedInfo, E = x.appendCellNode, I = x.additionalCellProps, P = I.style, h = I.colSpan, K = h === void 0 ? 1 : h, z = I.rowSpan, R = z === void 0 ? 1 : z, k = n - 1, N = hs(k, K, C), $ = K > 1 ? p - N : 0, O = W(W(W({}, P), s), {}, {
      flex: "0 0 ".concat(N, "px"),
      width: "".concat(N, "px"),
      marginRight: $,
      pointerEvents: "auto"
    }), D = l.useMemo(function() {
      return u ? R <= 1 : K === 0 || R === 0 || R > 1;
    }, [
      R,
      K,
      u
    ]);
    D ? O.visibility = "hidden" : u && (O.height = f == null ? void 0 : f(R));
    var _ = D ? function() {
      return null;
    } : v, M = {};
    return (R === 0 || K === 0) && (M.rowSpan = 1, M.colSpan = 1), l.createElement(Wt, de({
      className: Y(b, m),
      ellipsis: r.ellipsis,
      align: r.align,
      scope: r.rowScope,
      component: d,
      prefixCls: e.prefixCls,
      key: w,
      record: c,
      index: i,
      renderIndex: a,
      dataIndex: g,
      render: _,
      shouldCellUpdate: r.shouldCellUpdate
    }, S, {
      appendNode: E,
      additionalProps: W(W({}, I), {}, {
        style: O
      }, M)
    }));
  }
  var bs = [
    "data",
    "index",
    "className",
    "rowKey",
    "style",
    "extra",
    "getHeight"
  ], xs = l.forwardRef(function(t, e) {
    var r = t.data, n = t.index, o = t.className, i = t.rowKey, d = t.style, a = t.extra, c = t.getHeight, s = mt(t, bs), m = r.record, u = r.indent, f = r.index, v = tt(lt, [
      "prefixCls",
      "flattenColumns",
      "fixColumn",
      "componentWidth",
      "scrollX"
    ]), g = v.scrollX, b = v.flattenColumns, p = v.prefixCls, y = v.fixColumn, C = v.componentWidth, x = tt(sr, [
      "getComponent"
    ]), w = x.getComponent, S = Vo(m, i, n, u), E = w([
      "body",
      "row"
    ], "div"), I = w([
      "body",
      "cell"
    ], "div"), P = S.rowSupportExpand, h = S.expanded, K = S.rowProps, z = S.expandedRowRender, R = S.expandedRowClassName, k;
    if (P && h) {
      var N = z(m, n, u + 1, h), $ = Xo(R, m, n, u), O = {};
      y && (O = {
        style: T({}, "--virtual-width", "".concat(C, "px"))
      });
      var D = "".concat(p, "-expanded-row-cell");
      k = l.createElement(E, {
        className: Y("".concat(p, "-expanded-row"), "".concat(p, "-expanded-row-level-").concat(u + 1), $)
      }, l.createElement(Wt, {
        component: I,
        prefixCls: p,
        className: Y(D, T({}, "".concat(D, "-fixed"), y)),
        additionalProps: O
      }, N));
    }
    var _ = W(W({}, d), {}, {
      width: g
    });
    a && (_.position = "absolute", _.pointerEvents = "none");
    var M = l.createElement(E, de({}, K, s, {
      "data-row-key": i,
      ref: P ? null : e,
      className: Y(o, "".concat(p, "-row"), K == null ? void 0 : K.className, T({}, "".concat(p, "-row-extra"), a)),
      style: W(W({}, _), K == null ? void 0 : K.style)
    }), b.map(function(G, ee) {
      return l.createElement(ys, {
        key: ee,
        component: I,
        rowInfo: S,
        column: G,
        colIndex: ee,
        indent: u,
        index: n,
        renderIndex: f,
        record: m,
        inverse: a,
        getHeight: c
      });
    }));
    return P ? l.createElement("div", {
      ref: e
    }, M, k) : M;
  }), Xr = Ft(xs), Cs = l.forwardRef(function(t, e) {
    var r = t.data, n = t.onScroll, o = tt(lt, [
      "flattenColumns",
      "onColumnResize",
      "getRowKey",
      "prefixCls",
      "expandedKeys",
      "childrenColumnName",
      "scrollX",
      "direction"
    ]), i = o.flattenColumns, d = o.onColumnResize, a = o.getRowKey, c = o.expandedKeys, s = o.prefixCls, m = o.childrenColumnName, u = o.scrollX, f = o.direction, v = tt(sr), g = v.sticky, b = v.scrollY, p = v.listItemHeight, y = v.getComponent, C = v.onScroll, x = l.useRef(), w = Wo(r, m, c, a), S = l.useMemo(function() {
      var k = 0;
      return i.map(function(N) {
        var $ = N.width, O = N.key;
        return k += $, [
          O,
          $,
          k
        ];
      });
    }, [
      i
    ]), E = l.useMemo(function() {
      return S.map(function(k) {
        return k[2];
      });
    }, [
      S
    ]);
    l.useEffect(function() {
      S.forEach(function(k) {
        var N = Re(k, 2), $ = N[0], O = N[1];
        d($, O);
      });
    }, [
      S
    ]), l.useImperativeHandle(e, function() {
      var k, N = {
        scrollTo: function(O) {
          var D;
          (D = x.current) === null || D === void 0 || D.scrollTo(O);
        },
        nativeElement: (k = x.current) === null || k === void 0 ? void 0 : k.nativeElement
      };
      return Object.defineProperty(N, "scrollLeft", {
        get: function() {
          var O;
          return ((O = x.current) === null || O === void 0 ? void 0 : O.getScrollInfo().x) || 0;
        },
        set: function(O) {
          var D;
          (D = x.current) === null || D === void 0 || D.scrollTo({
            left: O
          });
        }
      }), N;
    });
    var I = function(N, $) {
      var O, D = (O = w[$]) === null || O === void 0 ? void 0 : O.record, _ = N.onCell;
      if (_) {
        var M, G = _(D, $);
        return (M = G == null ? void 0 : G.rowSpan) !== null && M !== void 0 ? M : 1;
      }
      return 1;
    }, P = function(N) {
      var $ = N.start, O = N.end, D = N.getSize, _ = N.offsetY;
      if (O < 0) return null;
      for (var M = i.filter(function(U) {
        return I(U, $) === 0;
      }), G = $, ee = function(j) {
        if (M = M.filter(function(H) {
          return I(H, j) === 0;
        }), !M.length) return G = j, 1;
      }, ye = $; ye >= 0 && !ee(ye); ye -= 1) ;
      for (var oe = i.filter(function(U) {
        return I(U, O) !== 1;
      }), pe = O, xe = function(j) {
        if (oe = oe.filter(function(H) {
          return I(H, j) !== 1;
        }), !oe.length) return pe = Math.max(j - 1, O), 1;
      }, ue = O; ue < w.length && !xe(ue); ue += 1) ;
      for (var J = [], te = function(j) {
        var H = w[j];
        if (!H) return 1;
        i.some(function(q) {
          return I(q, j) > 1;
        }) && J.push(j);
      }, Ce = G; Ce <= pe; Ce += 1) te(Ce);
      var le = J.map(function(U) {
        var j = w[U], H = a(j.record, U), q = function(ne) {
          var Ie = U + ne - 1, We = a(w[Ie].record, Ie), ke = D(H, We);
          return ke.bottom - ke.top;
        }, Z = D(H);
        return l.createElement(Xr, {
          key: U,
          data: j,
          rowKey: H,
          index: U,
          style: {
            top: -_ + Z.top
          },
          extra: true,
          getHeight: q
        });
      });
      return le;
    }, h = l.useMemo(function() {
      return {
        columnsOffset: E
      };
    }, [
      E
    ]), K = "".concat(s, "-tbody"), z = y([
      "body",
      "wrapper"
    ]), R = {};
    return g && (R.position = "sticky", R.bottom = 0, ft(g) === "object" && g.offsetScroll && (R.bottom = g.offsetScroll)), l.createElement(ea.Provider, {
      value: h
    }, l.createElement(Eo, {
      fullHeight: false,
      ref: x,
      prefixCls: "".concat(K, "-virtual"),
      styles: {
        horizontalScrollBar: R
      },
      className: K,
      height: b,
      itemHeight: p || 24,
      data: w,
      itemKey: function(N) {
        return a(N.record);
      },
      component: z,
      scrollWidth: u,
      direction: f,
      onVirtualScroll: function(N) {
        var $, O = N.x;
        n({
          currentTarget: ($ = x.current) === null || $ === void 0 ? void 0 : $.nativeElement,
          scrollLeft: O
        });
      },
      onScroll: C,
      extraRender: P
    }, function(k, N, $) {
      var O = a(k.record, N);
      return l.createElement(Xr, {
        data: k,
        rowKey: O,
        index: N,
        style: $.style
      });
    }));
  }), Ss = Ft(Cs), ws = function(e, r) {
    var n = r.ref, o = r.onScroll;
    return l.createElement(Ss, {
      ref: n,
      data: e,
      onScroll: o
    });
  };
  function Es(t, e) {
    var r = t.data, n = t.columns, o = t.scroll, i = t.sticky, d = t.prefixCls, a = d === void 0 ? Qo : d, c = t.className, s = t.listItemHeight, m = t.components, u = t.onScroll, f = o || {}, v = f.x, g = f.y;
    typeof v != "number" && (v = 1), typeof g != "number" && (g = 500);
    var b = $t(function(C, x) {
      return Qn(m, C) || x;
    }), p = $t(u), y = l.useMemo(function() {
      return {
        sticky: i,
        scrollY: g,
        listItemHeight: s,
        getComponent: b,
        onScroll: p
      };
    }, [
      i,
      g,
      s,
      b,
      p
    ]);
    return l.createElement(sr.Provider, {
      value: y
    }, l.createElement(Vt, de({}, t, {
      className: Y(c, "".concat(a, "-virtual")),
      scroll: W(W({}, o), {}, {
        x: v
      }),
      components: W(W({}, m), {}, {
        body: r != null && r.length ? ws : void 0
      }),
      columns: n,
      internalHooks: dn,
      tailor: true,
      ref: e
    })));
  }
  var $s = l.forwardRef(Es);
  function ta(t) {
    return _o($s, t);
  }
  ta();
  const Ns = (t) => null, Rs = (t) => null;
  var cr = l.createContext(null), Is = l.createContext({}), ks = function(e) {
    for (var r = e.prefixCls, n = e.level, o = e.isStart, i = e.isEnd, d = "".concat(r, "-indent-unit"), a = [], c = 0; c < n; c += 1) a.push(l.createElement("span", {
      key: c,
      className: Y(d, T(T({}, "".concat(d, "-start"), o[c]), "".concat(d, "-end"), i[c]))
    }));
    return l.createElement("span", {
      "aria-hidden": "true",
      className: "".concat(r, "-indent")
    }, a);
  };
  const Os = l.memo(ks);
  var Ks = [
    "eventKey",
    "className",
    "style",
    "dragOver",
    "dragOverGapTop",
    "dragOverGapBottom",
    "isLeaf",
    "isStart",
    "isEnd",
    "expanded",
    "selected",
    "checked",
    "halfChecked",
    "loading",
    "domRef",
    "active",
    "data",
    "onMouseMove",
    "selectable"
  ], Ur = "open", Gr = "close", Ps = "---", ln = function(e) {
    var r, n, o, i = e.eventKey, d = e.className, a = e.style, c = e.dragOver, s = e.dragOverGapTop, m = e.dragOverGapBottom, u = e.isLeaf, f = e.isStart, v = e.isEnd, g = e.expanded, b = e.selected, p = e.checked, y = e.halfChecked, C = e.loading, x = e.domRef, w = e.active, S = e.data, E = e.onMouseMove, I = e.selectable, P = mt(e, Ks), h = X.useContext(cr), K = X.useContext(Is), z = X.useRef(null), R = X.useState(false), k = Re(R, 2), N = k[0], $ = k[1], O = !!(h.disabled || e.disabled || (r = K.nodeDisabled) !== null && r !== void 0 && r.call(K, S)), D = X.useMemo(function() {
      return !h.checkable || e.checkable === false ? false : h.checkable;
    }, [
      h.checkable,
      e.checkable
    ]), _ = function(L) {
      O || h.onNodeSelect(L, Fe(e));
    }, M = function(L) {
      O || !D || e.disableCheckbox || h.onNodeCheck(L, Fe(e), !p);
    }, G = X.useMemo(function() {
      return typeof I == "boolean" ? I : h.selectable;
    }, [
      I,
      h.selectable
    ]), ee = function(L) {
      h.onNodeClick(L, Fe(e)), G ? _(L) : M(L);
    }, ye = function(L) {
      h.onNodeDoubleClick(L, Fe(e));
    }, oe = function(L) {
      h.onNodeMouseEnter(L, Fe(e));
    }, pe = function(L) {
      h.onNodeMouseLeave(L, Fe(e));
    }, xe = function(L) {
      h.onNodeContextMenu(L, Fe(e));
    }, ue = X.useMemo(function() {
      return !!(h.draggable && (!h.draggable.nodeDraggable || h.draggable.nodeDraggable(S)));
    }, [
      h.draggable,
      S
    ]), J = function(L) {
      L.stopPropagation(), $(true), h.onNodeDragStart(L, e);
      try {
        L.dataTransfer.setData("text/plain", "");
      } catch {
      }
    }, te = function(L) {
      L.preventDefault(), L.stopPropagation(), h.onNodeDragEnter(L, e);
    }, Ce = function(L) {
      L.preventDefault(), L.stopPropagation(), h.onNodeDragOver(L, e);
    }, le = function(L) {
      L.stopPropagation(), h.onNodeDragLeave(L, e);
    }, U = function(L) {
      L.stopPropagation(), $(false), h.onNodeDragEnd(L, e);
    }, j = function(L) {
      L.preventDefault(), L.stopPropagation(), $(false), h.onNodeDrop(L, e);
    }, H = function(L) {
      C || h.onNodeExpand(L, Fe(e));
    }, q = X.useMemo(function() {
      var Q = st(h.keyEntities, i) || {}, L = Q.children;
      return !!(L || []).length;
    }, [
      h.keyEntities,
      i
    ]), Z = X.useMemo(function() {
      return u === false ? false : u || !h.loadData && !q || h.loadData && e.loaded && !q;
    }, [
      u,
      h.loadData,
      q,
      e.loaded
    ]);
    X.useEffect(function() {
      C || typeof h.loadData == "function" && g && !Z && !e.loaded && h.onNodeLoad(Fe(e));
    }, [
      C,
      h.loadData,
      h.onNodeLoad,
      g,
      Z,
      e
    ]);
    var F = X.useMemo(function() {
      var Q;
      return (Q = h.draggable) !== null && Q !== void 0 && Q.icon ? X.createElement("span", {
        className: "".concat(h.prefixCls, "-draggable-icon")
      }, h.draggable.icon) : null;
    }, [
      h.draggable
    ]), ne = function(L) {
      var Ne = e.switcherIcon || h.switcherIcon;
      return typeof Ne == "function" ? Ne(W(W({}, e), {}, {
        isLeaf: L
      })) : Ne;
    }, Ie = function() {
      if (Z) {
        var L = ne(true);
        return L !== false ? X.createElement("span", {
          className: Y("".concat(h.prefixCls, "-switcher"), "".concat(h.prefixCls, "-switcher-noop"))
        }, L) : null;
      }
      var Ne = ne(false);
      return Ne !== false ? X.createElement("span", {
        onClick: H,
        className: Y("".concat(h.prefixCls, "-switcher"), "".concat(h.prefixCls, "-switcher_").concat(g ? Ur : Gr))
      }, Ne) : null;
    }, We = X.useMemo(function() {
      if (!D) return null;
      var Q = typeof D != "boolean" ? D : null;
      return X.createElement("span", {
        className: Y("".concat(h.prefixCls, "-checkbox"), T(T(T({}, "".concat(h.prefixCls, "-checkbox-checked"), p), "".concat(h.prefixCls, "-checkbox-indeterminate"), !p && y), "".concat(h.prefixCls, "-checkbox-disabled"), O || e.disableCheckbox)),
        onClick: M,
        role: "checkbox",
        "aria-checked": y ? "mixed" : p,
        "aria-disabled": O || e.disableCheckbox,
        "aria-label": "Select ".concat(typeof e.title == "string" ? e.title : "tree node")
      }, Q);
    }, [
      D,
      p,
      y,
      O,
      e.disableCheckbox,
      e.title
    ]), ke = X.useMemo(function() {
      return Z ? null : g ? Ur : Gr;
    }, [
      Z,
      g
    ]), B = X.useMemo(function() {
      return X.createElement("span", {
        className: Y("".concat(h.prefixCls, "-iconEle"), "".concat(h.prefixCls, "-icon__").concat(ke || "docu"), T({}, "".concat(h.prefixCls, "-icon_loading"), C))
      });
    }, [
      h.prefixCls,
      ke,
      C
    ]), V = X.useMemo(function() {
      var Q = !!h.draggable, L = !e.disabled && Q && h.dragOverNodeKey === i;
      return L ? h.dropIndicatorRender({
        dropPosition: h.dropPosition,
        dropLevelOffset: h.dropLevelOffset,
        indent: h.indent,
        prefixCls: h.prefixCls,
        direction: h.direction
      }) : null;
    }, [
      h.dropPosition,
      h.dropLevelOffset,
      h.indent,
      h.prefixCls,
      h.direction,
      h.draggable,
      h.dragOverNodeKey,
      h.dropIndicatorRender
    ]), ae = X.useMemo(function() {
      var Q = e.title, L = Q === void 0 ? Ps : Q, Ne = "".concat(h.prefixCls, "-node-content-wrapper"), Te;
      if (h.showIcon) {
        var se = e.icon || h.icon;
        Te = se ? X.createElement("span", {
          className: Y("".concat(h.prefixCls, "-iconEle"), "".concat(h.prefixCls, "-icon__customize"))
        }, typeof se == "function" ? se(e) : se) : B;
      } else h.loadData && C && (Te = B);
      var Pe;
      return typeof L == "function" ? Pe = L(S) : h.titleRender ? Pe = h.titleRender(S) : Pe = L, X.createElement("span", {
        ref: z,
        title: typeof L == "string" ? L : "",
        className: Y(Ne, "".concat(Ne, "-").concat(ke || "normal"), T({}, "".concat(h.prefixCls, "-node-selected"), !O && (b || N))),
        onMouseEnter: oe,
        onMouseLeave: pe,
        onContextMenu: xe,
        onClick: ee,
        onDoubleClick: ye
      }, Te, X.createElement("span", {
        className: "".concat(h.prefixCls, "-title")
      }, Pe), V);
    }, [
      h.prefixCls,
      h.showIcon,
      e,
      h.icon,
      B,
      h.titleRender,
      S,
      ke,
      oe,
      pe,
      xe,
      ee,
      ye
    ]), fe = an(P, {
      aria: true,
      data: true
    }), me = st(h.keyEntities, i) || {}, Oe = me.level, ze = v[v.length - 1], je = !O && ue, ge = h.draggingNodeKey === i, ve = I !== void 0 ? {
      "aria-selected": !!I
    } : void 0;
    return X.createElement("div", de({
      ref: x,
      role: "treeitem",
      "aria-expanded": u ? void 0 : g,
      className: Y(d, "".concat(h.prefixCls, "-treenode"), (o = {}, T(T(T(T(T(T(T(T(T(T(o, "".concat(h.prefixCls, "-treenode-disabled"), O), "".concat(h.prefixCls, "-treenode-switcher-").concat(g ? "open" : "close"), !u), "".concat(h.prefixCls, "-treenode-checkbox-checked"), p), "".concat(h.prefixCls, "-treenode-checkbox-indeterminate"), y), "".concat(h.prefixCls, "-treenode-selected"), b), "".concat(h.prefixCls, "-treenode-loading"), C), "".concat(h.prefixCls, "-treenode-active"), w), "".concat(h.prefixCls, "-treenode-leaf-last"), ze), "".concat(h.prefixCls, "-treenode-draggable"), ue), "dragging", ge), T(T(T(T(T(T(T(o, "drop-target", h.dropTargetKey === i), "drop-container", h.dropContainerKey === i), "drag-over", !O && c), "drag-over-gap-top", !O && s), "drag-over-gap-bottom", !O && m), "filter-node", (n = h.filterTreeNode) === null || n === void 0 ? void 0 : n.call(h, Fe(e))), "".concat(h.prefixCls, "-treenode-leaf"), Z))),
      style: a,
      draggable: je,
      onDragStart: je ? J : void 0,
      onDragEnter: ue ? te : void 0,
      onDragOver: ue ? Ce : void 0,
      onDragLeave: ue ? le : void 0,
      onDrop: ue ? j : void 0,
      onDragEnd: ue ? U : void 0,
      onMouseMove: E
    }, ve, fe), X.createElement(Os, {
      prefixCls: h.prefixCls,
      level: Oe,
      isStart: f,
      isEnd: v
    }), F, Ie(), We, ae);
  };
  ln.isTreeNode = 1;
  function gt(t, e) {
    if (!t) return [];
    var r = t.slice(), n = r.indexOf(e);
    return n >= 0 && r.splice(n, 1), r;
  }
  function yt(t, e) {
    var r = (t || []).slice();
    return r.indexOf(e) === -1 && r.push(e), r;
  }
  function dr(t) {
    return t.split("-");
  }
  function Ts(t, e) {
    var r = [], n = st(e, t);
    function o() {
      var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
      i.forEach(function(d) {
        var a = d.key, c = d.children;
        r.push(a), o(c);
      });
    }
    return o(n.children), r;
  }
  function Ds(t) {
    if (t.parent) {
      var e = dr(t.pos);
      return Number(e[e.length - 1]) === t.parent.children.length - 1;
    }
    return false;
  }
  function Ms(t) {
    var e = dr(t.pos);
    return Number(e[e.length - 1]) === 0;
  }
  function Yr(t, e, r, n, o, i, d, a, c, s) {
    var m, u = t.clientX, f = t.clientY, v = t.target.getBoundingClientRect(), g = v.top, b = v.height, p = (s === "rtl" ? -1 : 1) * (((o == null ? void 0 : o.x) || 0) - u), y = (p - 12) / n, C = c.filter(function(O) {
      var D;
      return (D = a[O]) === null || D === void 0 || (D = D.children) === null || D === void 0 ? void 0 : D.length;
    }), x = st(a, r.eventKey);
    if (f < g + b / 2) {
      var w = d.findIndex(function(O) {
        return O.key === x.key;
      }), S = w <= 0 ? 0 : w - 1, E = d[S].key;
      x = st(a, E);
    }
    var I = x.key, P = x, h = x.key, K = 0, z = 0;
    if (!C.includes(I)) for (var R = 0; R < y && Ds(x); R += 1) x = x.parent, z += 1;
    var k = e.data, N = x.node, $ = true;
    return Ms(x) && x.level === 0 && f < g + b / 2 && i({
      dragNode: k,
      dropNode: N,
      dropPosition: -1
    }) && x.key === r.eventKey ? K = -1 : (P.children || []).length && C.includes(h) ? i({
      dragNode: k,
      dropNode: N,
      dropPosition: 0
    }) ? K = 0 : $ = false : z === 0 ? y > -1.5 ? i({
      dragNode: k,
      dropNode: N,
      dropPosition: 1
    }) ? K = 1 : $ = false : i({
      dragNode: k,
      dropNode: N,
      dropPosition: 0
    }) ? K = 0 : i({
      dragNode: k,
      dropNode: N,
      dropPosition: 1
    }) ? K = 1 : $ = false : i({
      dragNode: k,
      dropNode: N,
      dropPosition: 1
    }) ? K = 1 : $ = false, {
      dropPosition: K,
      dropLevelOffset: z,
      dropTargetKey: x.key,
      dropTargetPos: x.pos,
      dragOverNodeKey: h,
      dropContainerKey: K === 0 ? null : ((m = x.parent) === null || m === void 0 ? void 0 : m.key) || null,
      dropAllowed: $
    };
  }
  function Jr(t, e) {
    if (t) {
      var r = e.multiple;
      return r ? t.slice() : t.length ? [
        t[0]
      ] : t;
    }
  }
  function Kn(t) {
    if (!t) return null;
    var e;
    if (Array.isArray(t)) e = {
      checkedKeys: t,
      halfCheckedKeys: void 0
    };
    else if (ft(t) === "object") e = {
      checkedKeys: t.checked || void 0,
      halfCheckedKeys: t.halfChecked || void 0
    };
    else return Et(false, "`checkedKeys` is not an array or an object"), null;
    return e;
  }
  function An(t, e) {
    var r = /* @__PURE__ */ new Set();
    function n(o) {
      if (!r.has(o)) {
        var i = st(e, o);
        if (i) {
          r.add(o);
          var d = i.parent, a = i.node;
          a.disabled || d && n(d.key);
        }
      }
    }
    return (t || []).forEach(function(o) {
      n(o);
    }), $e(r);
  }
  function zs(t) {
    const [e, r] = l.useState(null);
    return [
      l.useCallback((i, d, a) => {
        const c = e ?? i, s = Math.min(c || 0, i), m = Math.max(c || 0, i), u = d.slice(s, m + 1).map((g) => t(g)), f = u.some((g) => !a.has(g)), v = [];
        return u.forEach((g) => {
          f ? (a.has(g) || v.push(g), a.add(g)) : (a.delete(g), v.push(g));
        }), r(f ? m : null), v;
      }, [
        e
      ]),
      (i) => {
        r(i);
      }
    ];
  }
  const wt = {}, Fn = "SELECT_ALL", Wn = "SELECT_INVERT", Vn = "SELECT_NONE", Qr = [], na = (t, e) => {
    let r = [];
    return (e || []).forEach((n) => {
      r.push(n), n && typeof n == "object" && t in n && (r = [].concat($e(r), $e(na(t, n[t]))));
    }), r;
  }, Bs = (t, e) => {
    const { preserveSelectedRowKeys: r, selectedRowKeys: n, defaultSelectedRowKeys: o, getCheckboxProps: i, onChange: d, onSelect: a, onSelectAll: c, onSelectInvert: s, onSelectNone: m, onSelectMultiple: u, columnWidth: f, type: v, selections: g, fixed: b, renderCell: p, hideSelectAll: y, checkStrictly: C = true } = e || {}, { prefixCls: x, data: w, pageData: S, getRecordByKey: E, getRowKey: I, expandType: P, childrenColumnName: h, locale: K, getPopupContainer: z } = t, R = er(), [k, N] = zs((U) => U), [$, O] = Bn(n || o || Qr, {
      value: n
    }), D = l.useRef(/* @__PURE__ */ new Map()), _ = l.useCallback((U) => {
      if (r) {
        const j = /* @__PURE__ */ new Map();
        U.forEach((H) => {
          let q = E(H);
          !q && D.current.has(H) && (q = D.current.get(H)), j.set(H, q);
        }), D.current = j;
      }
    }, [
      E,
      r
    ]);
    l.useEffect(() => {
      _($);
    }, [
      $
    ]);
    const M = l.useMemo(() => na(h, S), [
      h,
      S
    ]), { keyEntities: G } = l.useMemo(() => {
      if (C) return {
        keyEntities: null
      };
      let U = w;
      if (r) {
        const j = new Set(M.map((q, Z) => I(q, Z))), H = Array.from(D.current).reduce((q, Z) => {
          let [F, ne] = Z;
          return j.has(F) ? q : q.concat(ne);
        }, []);
        U = [].concat($e(U), $e(H));
      }
      return rr(U, {
        externalGetKey: I,
        childrenPropName: h
      });
    }, [
      w,
      I,
      C,
      h,
      r,
      M
    ]), ee = l.useMemo(() => {
      const U = /* @__PURE__ */ new Map();
      return M.forEach((j, H) => {
        const q = I(j, H), Z = (i ? i(j) : null) || {};
        U.set(q, Z);
      }), U;
    }, [
      M,
      I,
      i
    ]), ye = l.useCallback((U) => {
      const j = I(U);
      let H;
      return ee.has(j) ? H = ee.get(I(U)) : H = i ? i(U) : void 0, !!(H == null ? void 0 : H.disabled);
    }, [
      ee,
      I
    ]), [oe, pe] = l.useMemo(() => {
      if (C) return [
        $ || [],
        []
      ];
      const { checkedKeys: U, halfCheckedKeys: j } = Ht($, true, G, ye);
      return [
        U || [],
        j
      ];
    }, [
      $,
      C,
      G,
      ye
    ]), xe = l.useMemo(() => {
      const U = v === "radio" ? oe.slice(0, 1) : oe;
      return new Set(U);
    }, [
      oe,
      v
    ]), ue = l.useMemo(() => v === "radio" ? /* @__PURE__ */ new Set() : new Set(pe), [
      pe,
      v
    ]);
    l.useEffect(() => {
      e || O(Qr);
    }, [
      !!e
    ]);
    const J = l.useCallback((U, j) => {
      let H, q;
      _(U), r ? (H = U, q = U.map((Z) => D.current.get(Z))) : (H = [], q = [], U.forEach((Z) => {
        const F = E(Z);
        F !== void 0 && (H.push(Z), q.push(F));
      })), O(H), d == null ? void 0 : d(H, q, {
        type: j
      });
    }, [
      O,
      E,
      d,
      r
    ]), te = l.useCallback((U, j, H, q) => {
      if (a) {
        const Z = H.map((F) => E(F));
        a(E(U), j, Z, q);
      }
      J(H, "single");
    }, [
      a,
      E,
      J
    ]), Ce = l.useMemo(() => !g || y ? null : (g === true ? [
      Fn,
      Wn,
      Vn
    ] : g).map((j) => j === Fn ? {
      key: "all",
      text: K.selectionAll,
      onSelect() {
        J(w.map((H, q) => I(H, q)).filter((H) => {
          const q = ee.get(H);
          return !(q == null ? void 0 : q.disabled) || xe.has(H);
        }), "all");
      }
    } : j === Wn ? {
      key: "invert",
      text: K.selectInvert,
      onSelect() {
        const H = new Set(xe);
        S.forEach((Z, F) => {
          const ne = I(Z, F), Ie = ee.get(ne);
          (Ie == null ? void 0 : Ie.disabled) || (H.has(ne) ? H.delete(ne) : H.add(ne));
        });
        const q = Array.from(H);
        s && (R.deprecated(false, "onSelectInvert", "onChange"), s(q)), J(q, "invert");
      }
    } : j === Vn ? {
      key: "none",
      text: K.selectNone,
      onSelect() {
        m == null ? void 0 : m(), J(Array.from(xe).filter((H) => {
          const q = ee.get(H);
          return q == null ? void 0 : q.disabled;
        }), "none");
      }
    } : j).map((j) => Object.assign(Object.assign({}, j), {
      onSelect: function() {
        for (var H, q, Z = arguments.length, F = new Array(Z), ne = 0; ne < Z; ne++) F[ne] = arguments[ne];
        (q = j.onSelect) === null || q === void 0 || (H = q).call.apply(H, [
          j
        ].concat(F)), N(null);
      }
    })), [
      g,
      xe,
      S,
      I,
      s,
      J
    ]);
    return [
      l.useCallback((U) => {
        var j;
        if (!e) return U.filter((ve) => ve !== wt);
        let H = $e(U);
        const q = new Set(xe), Z = M.map(I).filter((ve) => !ee.get(ve).disabled), F = Z.every((ve) => q.has(ve)), ne = Z.some((ve) => q.has(ve)), Ie = () => {
          const ve = [];
          F ? Z.forEach((L) => {
            q.delete(L), ve.push(L);
          }) : Z.forEach((L) => {
            q.has(L) || (q.add(L), ve.push(L));
          });
          const Q = Array.from(q);
          c == null ? void 0 : c(!F, Q.map((L) => E(L)), ve.map((L) => E(L))), J(Q, "all"), N(null);
        };
        let We, ke;
        if (v !== "radio") {
          let ve;
          if (Ce) {
            const se = {
              getPopupContainer: z,
              items: Ce.map((Pe, Se) => {
                const { key: Le, text: Ae, onSelect: Ue } = Pe;
                return {
                  key: Le ?? Se,
                  onClick: () => {
                    Ue == null ? void 0 : Ue(Z);
                  },
                  label: Ae
                };
              })
            };
            ve = l.createElement("div", {
              className: `${x}-selection-extra`
            }, l.createElement($o, {
              menu: se,
              getPopupContainer: z
            }, l.createElement("span", null, l.createElement(Ha, null))));
          }
          const Q = M.map((se, Pe) => {
            const Se = I(se, Pe), Le = ee.get(Se) || {};
            return Object.assign({
              checked: q.has(Se)
            }, Le);
          }).filter((se) => {
            let { disabled: Pe } = se;
            return Pe;
          }), L = !!Q.length && Q.length === M.length, Ne = L && Q.every((se) => {
            let { checked: Pe } = se;
            return Pe;
          }), Te = L && Q.some((se) => {
            let { checked: Pe } = se;
            return Pe;
          });
          ke = l.createElement(vn, {
            checked: L ? Ne : !!M.length && F,
            indeterminate: L ? !Ne && Te : !F && ne,
            onChange: Ie,
            disabled: M.length === 0 || L,
            "aria-label": ve ? "Custom selection" : "Select all",
            skipGroup: true
          }), We = !y && l.createElement("div", {
            className: `${x}-selection`
          }, ke, ve);
        }
        let B;
        v === "radio" ? B = (ve, Q, L) => {
          const Ne = I(Q, L), Te = q.has(Ne), se = ee.get(Ne);
          return {
            node: l.createElement(No, Object.assign({}, se, {
              checked: Te,
              onClick: (Pe) => {
                var Se;
                Pe.stopPropagation(), (Se = se == null ? void 0 : se.onClick) === null || Se === void 0 || Se.call(se, Pe);
              },
              onChange: (Pe) => {
                var Se;
                q.has(Ne) || te(Ne, true, [
                  Ne
                ], Pe.nativeEvent), (Se = se == null ? void 0 : se.onChange) === null || Se === void 0 || Se.call(se, Pe);
              }
            })),
            checked: Te
          };
        } : B = (ve, Q, L) => {
          var Ne;
          const Te = I(Q, L), se = q.has(Te), Pe = ue.has(Te), Se = ee.get(Te);
          let Le;
          return P === "nest" ? Le = Pe : Le = (Ne = Se == null ? void 0 : Se.indeterminate) !== null && Ne !== void 0 ? Ne : Pe, {
            node: l.createElement(vn, Object.assign({}, Se, {
              indeterminate: Le,
              checked: se,
              skipGroup: true,
              onClick: (Ae) => {
                var Ue;
                Ae.stopPropagation(), (Ue = Se == null ? void 0 : Se.onClick) === null || Ue === void 0 || Ue.call(Se, Ae);
              },
              onChange: (Ae) => {
                var Ue;
                const { nativeEvent: vt } = Ae, { shiftKey: De } = vt, xt = Z.findIndex((Ge) => Ge === Te), Ct = oe.some((Ge) => Z.includes(Ge));
                if (De && C && Ct) {
                  const Ge = k(xt, Z, q), nt = Array.from(q);
                  u == null ? void 0 : u(!se, nt.map((rt) => E(rt)), Ge.map((rt) => E(rt))), J(nt, "multiple");
                } else {
                  const Ge = oe;
                  if (C) {
                    const nt = se ? gt(Ge, Te) : yt(Ge, Te);
                    te(Te, !se, nt, vt);
                  } else {
                    const nt = Ht([].concat($e(Ge), [
                      Te
                    ]), true, G, ye), { checkedKeys: rt, halfCheckedKeys: Ye } = nt;
                    let qe = rt;
                    if (se) {
                      const Je = new Set(rt);
                      Je.delete(Te), qe = Ht(Array.from(Je), {
                        halfCheckedKeys: Ye
                      }, G, ye).checkedKeys;
                    }
                    te(Te, !se, qe, vt);
                  }
                }
                N(se ? null : xt), (Ue = Se == null ? void 0 : Se.onChange) === null || Ue === void 0 || Ue.call(Se, Ae);
              }
            })),
            checked: se
          };
        };
        const V = (ve, Q, L) => {
          const { node: Ne, checked: Te } = B(ve, Q, L);
          return p ? p(Te, Q, L, Ne) : Ne;
        };
        if (!H.includes(wt)) if (H.findIndex((ve) => {
          var Q;
          return ((Q = ve[rn]) === null || Q === void 0 ? void 0 : Q.columnType) === "EXPAND_COLUMN";
        }) === 0) {
          const [ve, ...Q] = H;
          H = [
            ve,
            wt
          ].concat($e(Q));
        } else H = [
          wt
        ].concat($e(H));
        const ae = H.indexOf(wt);
        H = H.filter((ve, Q) => ve !== wt || Q === ae);
        const fe = H[ae - 1], me = H[ae + 1];
        let Oe = b;
        Oe === void 0 && ((me == null ? void 0 : me.fixed) !== void 0 ? Oe = me.fixed : (fe == null ? void 0 : fe.fixed) !== void 0 && (Oe = fe.fixed)), Oe && fe && ((j = fe[rn]) === null || j === void 0 ? void 0 : j.columnType) === "EXPAND_COLUMN" && fe.fixed === void 0 && (fe.fixed = Oe);
        const ze = Y(`${x}-selection-col`, {
          [`${x}-selection-col-with-dropdown`]: g && v === "checkbox"
        }), je = () => (e == null ? void 0 : e.columnTitle) ? typeof e.columnTitle == "function" ? e.columnTitle(ke) : e.columnTitle : We, ge = {
          fixed: Oe,
          width: f,
          className: `${x}-selection-column`,
          title: je(),
          render: V,
          onCell: e.onCell,
          [rn]: {
            className: ze
          }
        };
        return H.map((ve) => ve === wt ? ge : ve);
      }, [
        I,
        M,
        e,
        oe,
        xe,
        ue,
        f,
        Ce,
        P,
        ee,
        u,
        te,
        ye
      ]),
      xe
    ];
  };
  function Ls(t, e) {
    return t._antProxy = t._antProxy || {}, Object.keys(e).forEach((r) => {
      if (!(r in t._antProxy)) {
        const n = t[r];
        t._antProxy[r] = n, t[r] = e[r];
      }
    }), t;
  }
  function _s(t, e) {
    return l.useImperativeHandle(t, () => {
      const r = e(), { nativeElement: n } = r;
      return typeof Proxy < "u" ? new Proxy(n, {
        get(o, i) {
          return r[i] ? r[i] : Reflect.get(o, i);
        }
      }) : Ls(n, r);
    });
  }
  function Hs(t) {
    return (e) => {
      const { prefixCls: r, onExpand: n, record: o, expanded: i, expandable: d } = e, a = `${r}-row-expand-icon`;
      return l.createElement("button", {
        type: "button",
        onClick: (c) => {
          n(o, c), c.stopPropagation();
        },
        className: Y(a, {
          [`${a}-spaced`]: !d,
          [`${a}-expanded`]: d && i,
          [`${a}-collapsed`]: d && !i
        }),
        "aria-label": i ? t.collapse : t.expand,
        "aria-expanded": i
      });
    };
  }
  function js(t) {
    return (r, n) => {
      const o = r.querySelector(`.${t}-container`);
      let i = n;
      if (o) {
        const d = getComputedStyle(o), a = parseInt(d.borderLeftWidth, 10), c = parseInt(d.borderRightWidth, 10);
        i = n - a - c;
      }
      return i;
    };
  }
  const Nt = (t, e) => "key" in t && t.key !== void 0 && t.key !== null ? t.key : t.dataIndex ? Array.isArray(t.dataIndex) ? t.dataIndex.join(".") : t.dataIndex : e;
  function qt(t, e) {
    return e ? `${e}-${t}` : `${t}`;
  }
  const Sn = (t, e) => typeof t == "function" ? t(e) : t, As = (t, e) => {
    const r = Sn(t, e);
    return Object.prototype.toString.call(r) === "[object Object]" ? "" : r;
  };
  function Fs(t) {
    const e = l.useRef(t), r = ja();
    return [
      () => e.current,
      (n) => {
        e.current = n, r();
      }
    ];
  }
  var Ws = function(e) {
    var r = e.dropPosition, n = e.dropLevelOffset, o = e.indent, i = {
      pointerEvents: "none",
      position: "absolute",
      right: 0,
      backgroundColor: "red",
      height: 2
    };
    switch (r) {
      case -1:
        i.top = 0, i.left = -n * o;
        break;
      case 1:
        i.bottom = 0, i.left = -n * o;
        break;
      case 0:
        i.bottom = 0, i.left = o;
        break;
    }
    return X.createElement("div", {
      style: i
    });
  };
  function ra(t) {
    if (t == null) throw new TypeError("Cannot destructure " + t);
  }
  function Vs(t, e) {
    var r = l.useState(false), n = Re(r, 2), o = n[0], i = n[1];
    Mt(function() {
      if (o) return t(), function() {
        e();
      };
    }, [
      o
    ]), Mt(function() {
      return i(true), function() {
        i(false);
      };
    }, []);
  }
  var qs = [
    "className",
    "style",
    "motion",
    "motionNodes",
    "motionType",
    "onMotionStart",
    "onMotionEnd",
    "active",
    "treeNodeRequiredProps"
  ], Xs = l.forwardRef(function(t, e) {
    var r = t.className, n = t.style, o = t.motion, i = t.motionNodes, d = t.motionType, a = t.onMotionStart, c = t.onMotionEnd, s = t.active, m = t.treeNodeRequiredProps, u = mt(t, qs), f = l.useState(true), v = Re(f, 2), g = v[0], b = v[1], p = l.useContext(cr), y = p.prefixCls, C = i && d !== "hide";
    Mt(function() {
      i && C !== g && b(C);
    }, [
      i
    ]);
    var x = function() {
      i && a();
    }, w = l.useRef(false), S = function() {
      i && !w.current && (w.current = true, c());
    };
    Vs(x, S);
    var E = function(P) {
      C === P && S();
    };
    return i ? l.createElement(wa, de({
      ref: e,
      visible: g
    }, o, {
      motionAppear: d === "show",
      onVisibleChanged: E
    }), function(I, P) {
      var h = I.className, K = I.style;
      return l.createElement("div", {
        ref: P,
        className: Y("".concat(y, "-treenode-motion"), h),
        style: K
      }, i.map(function(z) {
        var R = Object.assign({}, (ra(z.data), z.data)), k = z.title, N = z.key, $ = z.isStart, O = z.isEnd;
        delete R.children;
        var D = nn(N, m);
        return l.createElement(ln, de({}, R, D, {
          title: k,
          active: s,
          data: z.data,
          key: N,
          isStart: $,
          isEnd: O
        }));
      }));
    }) : l.createElement(ln, de({
      domRef: e,
      className: r,
      style: n
    }, u, {
      active: s
    }));
  });
  function Us() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], r = t.length, n = e.length;
    if (Math.abs(r - n) !== 1) return {
      add: false,
      key: null
    };
    function o(i, d) {
      var a = /* @__PURE__ */ new Map();
      i.forEach(function(s) {
        a.set(s, true);
      });
      var c = d.filter(function(s) {
        return !a.has(s);
      });
      return c.length === 1 ? c[0] : null;
    }
    return r < n ? {
      add: true,
      key: o(t, e)
    } : {
      add: false,
      key: o(e, t)
    };
  }
  function Zr(t, e, r) {
    var n = t.findIndex(function(a) {
      return a.key === r;
    }), o = t[n + 1], i = e.findIndex(function(a) {
      return a.key === r;
    });
    if (o) {
      var d = e.findIndex(function(a) {
        return a.key === o.key;
      });
      return e.slice(i + 1, d);
    }
    return e.slice(i + 1);
  }
  var Gs = [
    "prefixCls",
    "data",
    "selectable",
    "checkable",
    "expandedKeys",
    "selectedKeys",
    "checkedKeys",
    "loadedKeys",
    "loadingKeys",
    "halfCheckedKeys",
    "keyEntities",
    "disabled",
    "dragging",
    "dragOverNodeKey",
    "dropPosition",
    "motion",
    "height",
    "itemHeight",
    "virtual",
    "scrollWidth",
    "focusable",
    "activeItem",
    "focused",
    "tabIndex",
    "onKeyDown",
    "onFocus",
    "onBlur",
    "onActiveChange",
    "onListChangeStart",
    "onListChangeEnd"
  ], eo = {
    width: 0,
    height: 0,
    display: "flex",
    overflow: "hidden",
    opacity: 0,
    border: 0,
    padding: 0,
    margin: 0
  }, Ys = function() {
  }, zt = "RC_TREE_MOTION_".concat(Math.random()), qn = {
    key: zt
  }, oa = {
    key: zt,
    level: 0,
    index: 0,
    pos: "0",
    node: qn,
    nodes: [
      qn
    ]
  }, to = {
    parent: null,
    children: [],
    pos: oa.pos,
    data: qn,
    title: null,
    key: zt,
    isStart: [],
    isEnd: []
  };
  function no(t, e, r, n) {
    return e === false || !r ? t : t.slice(0, Math.ceil(r / n) + 1);
  }
  function ro(t) {
    var e = t.key, r = t.pos;
    return cn(e, r);
  }
  function Js(t) {
    for (var e = String(t.data.key), r = t; r.parent; ) r = r.parent, e = "".concat(r.data.key, " > ").concat(e);
    return e;
  }
  var Qs = l.forwardRef(function(t, e) {
    var r = t.prefixCls, n = t.data;
    t.selectable, t.checkable;
    var o = t.expandedKeys, i = t.selectedKeys, d = t.checkedKeys, a = t.loadedKeys, c = t.loadingKeys, s = t.halfCheckedKeys, m = t.keyEntities, u = t.disabled, f = t.dragging, v = t.dragOverNodeKey, g = t.dropPosition, b = t.motion, p = t.height, y = t.itemHeight, C = t.virtual, x = t.scrollWidth, w = t.focusable, S = t.activeItem, E = t.focused, I = t.tabIndex, P = t.onKeyDown, h = t.onFocus, K = t.onBlur, z = t.onActiveChange, R = t.onListChangeStart, k = t.onListChangeEnd, N = mt(t, Gs), $ = l.useRef(null), O = l.useRef(null);
    l.useImperativeHandle(e, function() {
      return {
        scrollTo: function(V) {
          $.current.scrollTo(V);
        },
        getIndentWidth: function() {
          return O.current.offsetWidth;
        }
      };
    });
    var D = l.useState(o), _ = Re(D, 2), M = _[0], G = _[1], ee = l.useState(n), ye = Re(ee, 2), oe = ye[0], pe = ye[1], xe = l.useState(n), ue = Re(xe, 2), J = ue[0], te = ue[1], Ce = l.useState([]), le = Re(Ce, 2), U = le[0], j = le[1], H = l.useState(null), q = Re(H, 2), Z = q[0], F = q[1], ne = l.useRef(n);
    ne.current = n;
    function Ie() {
      var B = ne.current;
      pe(B), te(B), j([]), F(null), k();
    }
    Mt(function() {
      G(o);
      var B = Us(M, o);
      if (B.key !== null) if (B.add) {
        var V = oe.findIndex(function(je) {
          var ge = je.key;
          return ge === B.key;
        }), ae = no(Zr(oe, n, B.key), C, p, y), fe = oe.slice();
        fe.splice(V + 1, 0, to), te(fe), j(ae), F("show");
      } else {
        var me = n.findIndex(function(je) {
          var ge = je.key;
          return ge === B.key;
        }), Oe = no(Zr(n, oe, B.key), C, p, y), ze = n.slice();
        ze.splice(me + 1, 0, to), te(ze), j(Oe), F("hide");
      }
      else oe !== n && (pe(n), te(n));
    }, [
      o,
      n
    ]), l.useEffect(function() {
      f || Ie();
    }, [
      f
    ]);
    var We = b ? J : n, ke = {
      expandedKeys: o,
      selectedKeys: i,
      loadedKeys: a,
      loadingKeys: c,
      checkedKeys: d,
      halfCheckedKeys: s,
      dragOverNodeKey: v,
      dropPosition: g,
      keyEntities: m
    };
    return l.createElement(l.Fragment, null, E && S && l.createElement("span", {
      style: eo,
      "aria-live": "assertive"
    }, Js(S)), l.createElement("div", null, l.createElement("input", {
      style: eo,
      disabled: w === false || u,
      tabIndex: w !== false ? I : null,
      onKeyDown: P,
      onFocus: h,
      onBlur: K,
      value: "",
      onChange: Ys,
      "aria-label": "for screen reader"
    })), l.createElement("div", {
      className: "".concat(r, "-treenode"),
      "aria-hidden": true,
      style: {
        position: "absolute",
        pointerEvents: "none",
        visibility: "hidden",
        height: 0,
        overflow: "hidden",
        border: 0,
        padding: 0
      }
    }, l.createElement("div", {
      className: "".concat(r, "-indent")
    }, l.createElement("div", {
      ref: O,
      className: "".concat(r, "-indent-unit")
    }))), l.createElement(Eo, de({}, N, {
      data: We,
      itemKey: ro,
      height: p,
      fullHeight: false,
      virtual: C,
      itemHeight: y,
      scrollWidth: x,
      prefixCls: "".concat(r, "-list"),
      ref: $,
      role: "tree",
      onVisibleChange: function(V) {
        V.every(function(ae) {
          return ro(ae) !== zt;
        }) && Ie();
      }
    }), function(B) {
      var V = B.pos, ae = Object.assign({}, (ra(B.data), B.data)), fe = B.title, me = B.key, Oe = B.isStart, ze = B.isEnd, je = cn(me, V);
      delete ae.key, delete ae.children;
      var ge = nn(je, ke);
      return l.createElement(Xs, de({}, ae, ge, {
        title: fe,
        active: !!S && me === S.key,
        pos: V,
        data: B.data,
        isStart: Oe,
        isEnd: ze,
        motion: b,
        motionNodes: me === zt ? U : null,
        motionType: Z,
        onMotionStart: R,
        onMotionEnd: Ie,
        treeNodeRequiredProps: ke,
        onMouseMove: function() {
          z(null);
        }
      }));
    }));
  }), Zs = 10, ur = function(t) {
    Ea(r, t);
    var e = $a(r);
    function r() {
      var n;
      Na(this, r);
      for (var o = arguments.length, i = new Array(o), d = 0; d < o; d++) i[d] = arguments[d];
      return n = e.call.apply(e, [
        this
      ].concat(i)), T(be(n), "destroyed", false), T(be(n), "delayedDragEnterLogic", void 0), T(be(n), "loadingRetryTimes", {}), T(be(n), "state", {
        keyEntities: {},
        indent: null,
        selectedKeys: [],
        checkedKeys: [],
        halfCheckedKeys: [],
        loadedKeys: [],
        loadingKeys: [],
        expandedKeys: [],
        draggingNodeKey: null,
        dragChildrenKeys: [],
        dropTargetKey: null,
        dropPosition: null,
        dropContainerKey: null,
        dropLevelOffset: null,
        dropTargetPos: null,
        dropAllowed: true,
        dragOverNodeKey: null,
        treeData: [],
        flattenNodes: [],
        focused: false,
        activeKey: null,
        listChanging: false,
        prevProps: null,
        fieldNames: At()
      }), T(be(n), "dragStartMousePosition", null), T(be(n), "dragNodeProps", null), T(be(n), "currentMouseOverDroppableNodeKey", null), T(be(n), "listRef", l.createRef()), T(be(n), "onNodeDragStart", function(a, c) {
        var s = n.state, m = s.expandedKeys, u = s.keyEntities, f = n.props.onDragStart, v = c.eventKey;
        n.dragNodeProps = c, n.dragStartMousePosition = {
          x: a.clientX,
          y: a.clientY
        };
        var g = gt(m, v);
        n.setState({
          draggingNodeKey: v,
          dragChildrenKeys: Ts(v, u),
          indent: n.listRef.current.getIndentWidth()
        }), n.setExpandedKeys(g), window.addEventListener("dragend", n.onWindowDragEnd), f == null ? void 0 : f({
          event: a,
          node: Fe(c)
        });
      }), T(be(n), "onNodeDragEnter", function(a, c) {
        var s = n.state, m = s.expandedKeys, u = s.keyEntities, f = s.dragChildrenKeys, v = s.flattenNodes, g = s.indent, b = n.props, p = b.onDragEnter, y = b.onExpand, C = b.allowDrop, x = b.direction, w = c.pos, S = c.eventKey;
        if (n.currentMouseOverDroppableNodeKey !== S && (n.currentMouseOverDroppableNodeKey = S), !n.dragNodeProps) {
          n.resetDragState();
          return;
        }
        var E = Yr(a, n.dragNodeProps, c, g, n.dragStartMousePosition, C, v, u, m, x), I = E.dropPosition, P = E.dropLevelOffset, h = E.dropTargetKey, K = E.dropContainerKey, z = E.dropTargetPos, R = E.dropAllowed, k = E.dragOverNodeKey;
        if (f.includes(h) || !R) {
          n.resetDragState();
          return;
        }
        if (n.delayedDragEnterLogic || (n.delayedDragEnterLogic = {}), Object.keys(n.delayedDragEnterLogic).forEach(function(N) {
          clearTimeout(n.delayedDragEnterLogic[N]);
        }), n.dragNodeProps.eventKey !== c.eventKey && (a.persist(), n.delayedDragEnterLogic[w] = window.setTimeout(function() {
          if (n.state.draggingNodeKey !== null) {
            var N = $e(m), $ = st(u, c.eventKey);
            $ && ($.children || []).length && (N = yt(m, c.eventKey)), n.props.hasOwnProperty("expandedKeys") || n.setExpandedKeys(N), y == null ? void 0 : y(N, {
              node: Fe(c),
              expanded: true,
              nativeEvent: a.nativeEvent
            });
          }
        }, 800)), n.dragNodeProps.eventKey === h && P === 0) {
          n.resetDragState();
          return;
        }
        n.setState({
          dragOverNodeKey: k,
          dropPosition: I,
          dropLevelOffset: P,
          dropTargetKey: h,
          dropContainerKey: K,
          dropTargetPos: z,
          dropAllowed: R
        }), p == null ? void 0 : p({
          event: a,
          node: Fe(c),
          expandedKeys: m
        });
      }), T(be(n), "onNodeDragOver", function(a, c) {
        var s = n.state, m = s.dragChildrenKeys, u = s.flattenNodes, f = s.keyEntities, v = s.expandedKeys, g = s.indent, b = n.props, p = b.onDragOver, y = b.allowDrop, C = b.direction;
        if (n.dragNodeProps) {
          var x = Yr(a, n.dragNodeProps, c, g, n.dragStartMousePosition, y, u, f, v, C), w = x.dropPosition, S = x.dropLevelOffset, E = x.dropTargetKey, I = x.dropContainerKey, P = x.dropTargetPos, h = x.dropAllowed, K = x.dragOverNodeKey;
          m.includes(E) || !h || (n.dragNodeProps.eventKey === E && S === 0 ? n.state.dropPosition === null && n.state.dropLevelOffset === null && n.state.dropTargetKey === null && n.state.dropContainerKey === null && n.state.dropTargetPos === null && n.state.dropAllowed === false && n.state.dragOverNodeKey === null || n.resetDragState() : w === n.state.dropPosition && S === n.state.dropLevelOffset && E === n.state.dropTargetKey && I === n.state.dropContainerKey && P === n.state.dropTargetPos && h === n.state.dropAllowed && K === n.state.dragOverNodeKey || n.setState({
            dropPosition: w,
            dropLevelOffset: S,
            dropTargetKey: E,
            dropContainerKey: I,
            dropTargetPos: P,
            dropAllowed: h,
            dragOverNodeKey: K
          }), p == null ? void 0 : p({
            event: a,
            node: Fe(c)
          }));
        }
      }), T(be(n), "onNodeDragLeave", function(a, c) {
        n.currentMouseOverDroppableNodeKey === c.eventKey && !a.currentTarget.contains(a.relatedTarget) && (n.resetDragState(), n.currentMouseOverDroppableNodeKey = null);
        var s = n.props.onDragLeave;
        s == null ? void 0 : s({
          event: a,
          node: Fe(c)
        });
      }), T(be(n), "onWindowDragEnd", function(a) {
        n.onNodeDragEnd(a, null, true), window.removeEventListener("dragend", n.onWindowDragEnd);
      }), T(be(n), "onNodeDragEnd", function(a, c) {
        var s = n.props.onDragEnd;
        n.setState({
          dragOverNodeKey: null
        }), n.cleanDragState(), s == null ? void 0 : s({
          event: a,
          node: Fe(c)
        }), n.dragNodeProps = null, window.removeEventListener("dragend", n.onWindowDragEnd);
      }), T(be(n), "onNodeDrop", function(a, c) {
        var s, m = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false, u = n.state, f = u.dragChildrenKeys, v = u.dropPosition, g = u.dropTargetKey, b = u.dropTargetPos, p = u.dropAllowed;
        if (p) {
          var y = n.props.onDrop;
          if (n.setState({
            dragOverNodeKey: null
          }), n.cleanDragState(), g !== null) {
            var C = W(W({}, nn(g, n.getTreeNodeRequiredProps())), {}, {
              active: ((s = n.getActiveItem()) === null || s === void 0 ? void 0 : s.key) === g,
              data: st(n.state.keyEntities, g).node
            }), x = f.includes(g);
            Et(!x, "Can not drop to dragNode's children node. This is a bug of rc-tree. Please report an issue.");
            var w = dr(b), S = {
              event: a,
              node: Fe(C),
              dragNode: n.dragNodeProps ? Fe(n.dragNodeProps) : null,
              dragNodesKeys: [
                n.dragNodeProps.eventKey
              ].concat(f),
              dropToGap: v !== 0,
              dropPosition: v + Number(w[w.length - 1])
            };
            m || (y == null ? void 0 : y(S)), n.dragNodeProps = null;
          }
        }
      }), T(be(n), "cleanDragState", function() {
        var a = n.state.draggingNodeKey;
        a !== null && n.setState({
          draggingNodeKey: null,
          dropPosition: null,
          dropContainerKey: null,
          dropTargetKey: null,
          dropLevelOffset: null,
          dropAllowed: true,
          dragOverNodeKey: null
        }), n.dragStartMousePosition = null, n.currentMouseOverDroppableNodeKey = null;
      }), T(be(n), "triggerExpandActionExpand", function(a, c) {
        var s = n.state, m = s.expandedKeys, u = s.flattenNodes, f = c.expanded, v = c.key, g = c.isLeaf;
        if (!(g || a.shiftKey || a.metaKey || a.ctrlKey)) {
          var b = u.filter(function(y) {
            return y.key === v;
          })[0], p = Fe(W(W({}, nn(v, n.getTreeNodeRequiredProps())), {}, {
            data: b.data
          }));
          n.setExpandedKeys(f ? gt(m, v) : yt(m, v)), n.onNodeExpand(a, p);
        }
      }), T(be(n), "onNodeClick", function(a, c) {
        var s = n.props, m = s.onClick, u = s.expandAction;
        u === "click" && n.triggerExpandActionExpand(a, c), m == null ? void 0 : m(a, c);
      }), T(be(n), "onNodeDoubleClick", function(a, c) {
        var s = n.props, m = s.onDoubleClick, u = s.expandAction;
        u === "doubleClick" && n.triggerExpandActionExpand(a, c), m == null ? void 0 : m(a, c);
      }), T(be(n), "onNodeSelect", function(a, c) {
        var s = n.state.selectedKeys, m = n.state, u = m.keyEntities, f = m.fieldNames, v = n.props, g = v.onSelect, b = v.multiple, p = c.selected, y = c[f.key], C = !p;
        C ? b ? s = yt(s, y) : s = [
          y
        ] : s = gt(s, y);
        var x = s.map(function(w) {
          var S = st(u, w);
          return S ? S.node : null;
        }).filter(Boolean);
        n.setUncontrolledState({
          selectedKeys: s
        }), g == null ? void 0 : g(s, {
          event: "select",
          selected: C,
          node: c,
          selectedNodes: x,
          nativeEvent: a.nativeEvent
        });
      }), T(be(n), "onNodeCheck", function(a, c, s) {
        var m = n.state, u = m.keyEntities, f = m.checkedKeys, v = m.halfCheckedKeys, g = n.props, b = g.checkStrictly, p = g.onCheck, y = c.key, C, x = {
          event: "check",
          node: c,
          checked: s,
          nativeEvent: a.nativeEvent
        };
        if (b) {
          var w = s ? yt(f, y) : gt(f, y), S = gt(v, y);
          C = {
            checked: w,
            halfChecked: S
          }, x.checkedNodes = w.map(function(z) {
            return st(u, z);
          }).filter(Boolean).map(function(z) {
            return z.node;
          }), n.setUncontrolledState({
            checkedKeys: w
          });
        } else {
          var E = Ht([].concat($e(f), [
            y
          ]), true, u), I = E.checkedKeys, P = E.halfCheckedKeys;
          if (!s) {
            var h = new Set(I);
            h.delete(y);
            var K = Ht(Array.from(h), {
              halfCheckedKeys: P
            }, u);
            I = K.checkedKeys, P = K.halfCheckedKeys;
          }
          C = I, x.checkedNodes = [], x.checkedNodesPositions = [], x.halfCheckedKeys = P, I.forEach(function(z) {
            var R = st(u, z);
            if (R) {
              var k = R.node, N = R.pos;
              x.checkedNodes.push(k), x.checkedNodesPositions.push({
                node: k,
                pos: N
              });
            }
          }), n.setUncontrolledState({
            checkedKeys: I
          }, false, {
            halfCheckedKeys: P
          });
        }
        p == null ? void 0 : p(C, x);
      }), T(be(n), "onNodeLoad", function(a) {
        var c, s = a.key, m = n.state.keyEntities, u = st(m, s);
        if (!(u != null && (c = u.children) !== null && c !== void 0 && c.length)) {
          var f = new Promise(function(v, g) {
            n.setState(function(b) {
              var p = b.loadedKeys, y = p === void 0 ? [] : p, C = b.loadingKeys, x = C === void 0 ? [] : C, w = n.props, S = w.loadData, E = w.onLoad;
              if (!S || y.includes(s) || x.includes(s)) return null;
              var I = S(a);
              return I.then(function() {
                var P = n.state.loadedKeys, h = yt(P, s);
                E == null ? void 0 : E(h, {
                  event: "load",
                  node: a
                }), n.setUncontrolledState({
                  loadedKeys: h
                }), n.setState(function(K) {
                  return {
                    loadingKeys: gt(K.loadingKeys, s)
                  };
                }), v();
              }).catch(function(P) {
                if (n.setState(function(K) {
                  return {
                    loadingKeys: gt(K.loadingKeys, s)
                  };
                }), n.loadingRetryTimes[s] = (n.loadingRetryTimes[s] || 0) + 1, n.loadingRetryTimes[s] >= Zs) {
                  var h = n.state.loadedKeys;
                  Et(false, "Retry for `loadData` many times but still failed. No more retry."), n.setUncontrolledState({
                    loadedKeys: yt(h, s)
                  }), v();
                }
                g(P);
              }), {
                loadingKeys: yt(x, s)
              };
            });
          });
          return f.catch(function() {
          }), f;
        }
      }), T(be(n), "onNodeMouseEnter", function(a, c) {
        var s = n.props.onMouseEnter;
        s == null ? void 0 : s({
          event: a,
          node: c
        });
      }), T(be(n), "onNodeMouseLeave", function(a, c) {
        var s = n.props.onMouseLeave;
        s == null ? void 0 : s({
          event: a,
          node: c
        });
      }), T(be(n), "onNodeContextMenu", function(a, c) {
        var s = n.props.onRightClick;
        s && (a.preventDefault(), s({
          event: a,
          node: c
        }));
      }), T(be(n), "onFocus", function() {
        var a = n.props.onFocus;
        n.setState({
          focused: true
        });
        for (var c = arguments.length, s = new Array(c), m = 0; m < c; m++) s[m] = arguments[m];
        a == null ? void 0 : a.apply(void 0, s);
      }), T(be(n), "onBlur", function() {
        var a = n.props.onBlur;
        n.setState({
          focused: false
        }), n.onActiveChange(null);
        for (var c = arguments.length, s = new Array(c), m = 0; m < c; m++) s[m] = arguments[m];
        a == null ? void 0 : a.apply(void 0, s);
      }), T(be(n), "getTreeNodeRequiredProps", function() {
        var a = n.state, c = a.expandedKeys, s = a.selectedKeys, m = a.loadedKeys, u = a.loadingKeys, f = a.checkedKeys, v = a.halfCheckedKeys, g = a.dragOverNodeKey, b = a.dropPosition, p = a.keyEntities;
        return {
          expandedKeys: c || [],
          selectedKeys: s || [],
          loadedKeys: m || [],
          loadingKeys: u || [],
          checkedKeys: f || [],
          halfCheckedKeys: v || [],
          dragOverNodeKey: g,
          dropPosition: b,
          keyEntities: p
        };
      }), T(be(n), "setExpandedKeys", function(a) {
        var c = n.state, s = c.treeData, m = c.fieldNames, u = kn(s, a, m);
        n.setUncontrolledState({
          expandedKeys: a,
          flattenNodes: u
        }, true);
      }), T(be(n), "onNodeExpand", function(a, c) {
        var s = n.state.expandedKeys, m = n.state, u = m.listChanging, f = m.fieldNames, v = n.props, g = v.onExpand, b = v.loadData, p = c.expanded, y = c[f.key];
        if (!u) {
          var C = s.includes(y), x = !p;
          if (Et(p && C || !p && !C, "Expand state not sync with index check"), s = x ? yt(s, y) : gt(s, y), n.setExpandedKeys(s), g == null ? void 0 : g(s, {
            node: c,
            expanded: x,
            nativeEvent: a.nativeEvent
          }), x && b) {
            var w = n.onNodeLoad(c);
            w && w.then(function() {
              var S = kn(n.state.treeData, s, f);
              n.setUncontrolledState({
                flattenNodes: S
              });
            }).catch(function() {
              var S = n.state.expandedKeys, E = gt(S, y);
              n.setExpandedKeys(E);
            });
          }
        }
      }), T(be(n), "onListChangeStart", function() {
        n.setUncontrolledState({
          listChanging: true
        });
      }), T(be(n), "onListChangeEnd", function() {
        setTimeout(function() {
          n.setUncontrolledState({
            listChanging: false
          });
        });
      }), T(be(n), "onActiveChange", function(a) {
        var c = n.state.activeKey, s = n.props, m = s.onActiveChange, u = s.itemScrollOffset, f = u === void 0 ? 0 : u;
        c !== a && (n.setState({
          activeKey: a
        }), a !== null && n.scrollTo({
          key: a,
          offset: f
        }), m == null ? void 0 : m(a));
      }), T(be(n), "getActiveItem", function() {
        var a = n.state, c = a.activeKey, s = a.flattenNodes;
        return c === null ? null : s.find(function(m) {
          var u = m.key;
          return u === c;
        }) || null;
      }), T(be(n), "offsetActiveKey", function(a) {
        var c = n.state, s = c.flattenNodes, m = c.activeKey, u = s.findIndex(function(g) {
          var b = g.key;
          return b === m;
        });
        u === -1 && a < 0 && (u = s.length), u = (u + a + s.length) % s.length;
        var f = s[u];
        if (f) {
          var v = f.key;
          n.onActiveChange(v);
        } else n.onActiveChange(null);
      }), T(be(n), "onKeyDown", function(a) {
        var c = n.state, s = c.activeKey, m = c.expandedKeys, u = c.checkedKeys, f = c.fieldNames, v = n.props, g = v.onKeyDown, b = v.checkable, p = v.selectable;
        switch (a.which) {
          case et.UP: {
            n.offsetActiveKey(-1), a.preventDefault();
            break;
          }
          case et.DOWN: {
            n.offsetActiveKey(1), a.preventDefault();
            break;
          }
        }
        var y = n.getActiveItem();
        if (y && y.data) {
          var C = n.getTreeNodeRequiredProps(), x = y.data.isLeaf === false || !!(y.data[f.children] || []).length, w = Fe(W(W({}, nn(s, C)), {}, {
            data: y.data,
            active: true
          }));
          switch (a.which) {
            case et.LEFT: {
              x && m.includes(s) ? n.onNodeExpand({}, w) : y.parent && n.onActiveChange(y.parent.key), a.preventDefault();
              break;
            }
            case et.RIGHT: {
              x && !m.includes(s) ? n.onNodeExpand({}, w) : y.children && y.children.length && n.onActiveChange(y.children[0].key), a.preventDefault();
              break;
            }
            case et.ENTER:
            case et.SPACE: {
              b && !w.disabled && w.checkable !== false && !w.disableCheckbox ? n.onNodeCheck({}, w, !u.includes(s)) : !b && p && !w.disabled && w.selectable !== false && n.onNodeSelect({}, w);
              break;
            }
          }
        }
        g == null ? void 0 : g(a);
      }), T(be(n), "setUncontrolledState", function(a) {
        var c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false, s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
        if (!n.destroyed) {
          var m = false, u = true, f = {};
          Object.keys(a).forEach(function(v) {
            if (n.props.hasOwnProperty(v)) {
              u = false;
              return;
            }
            m = true, f[v] = a[v];
          }), m && (!c || u) && n.setState(W(W({}, f), s));
        }
      }), T(be(n), "scrollTo", function(a) {
        n.listRef.current.scrollTo(a);
      }), n;
    }
    return Ra(r, [
      {
        key: "componentDidMount",
        value: function() {
          this.destroyed = false, this.onUpdated();
        }
      },
      {
        key: "componentDidUpdate",
        value: function() {
          this.onUpdated();
        }
      },
      {
        key: "onUpdated",
        value: function() {
          var o = this.props, i = o.activeKey, d = o.itemScrollOffset, a = d === void 0 ? 0 : d;
          i !== void 0 && i !== this.state.activeKey && (this.setState({
            activeKey: i
          }), i !== null && this.scrollTo({
            key: i,
            offset: a
          }));
        }
      },
      {
        key: "componentWillUnmount",
        value: function() {
          window.removeEventListener("dragend", this.onWindowDragEnd), this.destroyed = true;
        }
      },
      {
        key: "resetDragState",
        value: function() {
          this.setState({
            dragOverNodeKey: null,
            dropPosition: null,
            dropLevelOffset: null,
            dropTargetKey: null,
            dropContainerKey: null,
            dropTargetPos: null,
            dropAllowed: false
          });
        }
      },
      {
        key: "render",
        value: function() {
          var o = this.state, i = o.focused, d = o.flattenNodes, a = o.keyEntities, c = o.draggingNodeKey, s = o.activeKey, m = o.dropLevelOffset, u = o.dropContainerKey, f = o.dropTargetKey, v = o.dropPosition, g = o.dragOverNodeKey, b = o.indent, p = this.props, y = p.prefixCls, C = p.className, x = p.style, w = p.showLine, S = p.focusable, E = p.tabIndex, I = E === void 0 ? 0 : E, P = p.selectable, h = p.showIcon, K = p.icon, z = p.switcherIcon, R = p.draggable, k = p.checkable, N = p.checkStrictly, $ = p.disabled, O = p.motion, D = p.loadData, _ = p.filterTreeNode, M = p.height, G = p.itemHeight, ee = p.scrollWidth, ye = p.virtual, oe = p.titleRender, pe = p.dropIndicatorRender, xe = p.onContextMenu, ue = p.onScroll, J = p.direction, te = p.rootClassName, Ce = p.rootStyle, le = an(this.props, {
            aria: true,
            data: true
          }), U;
          R && (ft(R) === "object" ? U = R : typeof R == "function" ? U = {
            nodeDraggable: R
          } : U = {});
          var j = {
            prefixCls: y,
            selectable: P,
            showIcon: h,
            icon: K,
            switcherIcon: z,
            draggable: U,
            draggingNodeKey: c,
            checkable: k,
            checkStrictly: N,
            disabled: $,
            keyEntities: a,
            dropLevelOffset: m,
            dropContainerKey: u,
            dropTargetKey: f,
            dropPosition: v,
            dragOverNodeKey: g,
            indent: b,
            direction: J,
            dropIndicatorRender: pe,
            loadData: D,
            filterTreeNode: _,
            titleRender: oe,
            onNodeClick: this.onNodeClick,
            onNodeDoubleClick: this.onNodeDoubleClick,
            onNodeExpand: this.onNodeExpand,
            onNodeSelect: this.onNodeSelect,
            onNodeCheck: this.onNodeCheck,
            onNodeLoad: this.onNodeLoad,
            onNodeMouseEnter: this.onNodeMouseEnter,
            onNodeMouseLeave: this.onNodeMouseLeave,
            onNodeContextMenu: this.onNodeContextMenu,
            onNodeDragStart: this.onNodeDragStart,
            onNodeDragEnter: this.onNodeDragEnter,
            onNodeDragOver: this.onNodeDragOver,
            onNodeDragLeave: this.onNodeDragLeave,
            onNodeDragEnd: this.onNodeDragEnd,
            onNodeDrop: this.onNodeDrop
          };
          return l.createElement(cr.Provider, {
            value: j
          }, l.createElement("div", {
            className: Y(y, C, te, T(T(T({}, "".concat(y, "-show-line"), w), "".concat(y, "-focused"), i), "".concat(y, "-active-focused"), s !== null)),
            style: Ce
          }, l.createElement(Qs, de({
            ref: this.listRef,
            prefixCls: y,
            style: x,
            data: d,
            disabled: $,
            selectable: P,
            checkable: !!k,
            motion: O,
            dragging: c !== null,
            height: M,
            itemHeight: G,
            virtual: ye,
            focusable: S,
            focused: i,
            tabIndex: I,
            activeItem: this.getActiveItem(),
            onFocus: this.onFocus,
            onBlur: this.onBlur,
            onKeyDown: this.onKeyDown,
            onActiveChange: this.onActiveChange,
            onListChangeStart: this.onListChangeStart,
            onListChangeEnd: this.onListChangeEnd,
            onContextMenu: xe,
            onScroll: ue,
            scrollWidth: ee
          }, this.getTreeNodeRequiredProps(), le))));
        }
      }
    ], [
      {
        key: "getDerivedStateFromProps",
        value: function(o, i) {
          var d = i.prevProps, a = {
            prevProps: o
          };
          function c(I) {
            return !d && o.hasOwnProperty(I) || d && d[I] !== o[I];
          }
          var s, m = i.fieldNames;
          if (c("fieldNames") && (m = At(o.fieldNames), a.fieldNames = m), c("treeData") ? s = o.treeData : c("children") && (Et(false, "`children` of Tree is deprecated. Please use `treeData` instead."), s = ko(o.children)), s) {
            a.treeData = s;
            var u = rr(s, {
              fieldNames: m
            });
            a.keyEntities = W(T({}, zt, oa), u.keyEntities);
          }
          var f = a.keyEntities || i.keyEntities;
          if (c("expandedKeys") || d && c("autoExpandParent")) a.expandedKeys = o.autoExpandParent || !d && o.defaultExpandParent ? An(o.expandedKeys, f) : o.expandedKeys;
          else if (!d && o.defaultExpandAll) {
            var v = W({}, f);
            delete v[zt];
            var g = [];
            Object.keys(v).forEach(function(I) {
              var P = v[I];
              P.children && P.children.length && g.push(P.key);
            }), a.expandedKeys = g;
          } else !d && o.defaultExpandedKeys && (a.expandedKeys = o.autoExpandParent || o.defaultExpandParent ? An(o.defaultExpandedKeys, f) : o.defaultExpandedKeys);
          if (a.expandedKeys || delete a.expandedKeys, s || a.expandedKeys) {
            var b = kn(s || i.treeData, a.expandedKeys || i.expandedKeys, m);
            a.flattenNodes = b;
          }
          if (o.selectable && (c("selectedKeys") ? a.selectedKeys = Jr(o.selectedKeys, o) : !d && o.defaultSelectedKeys && (a.selectedKeys = Jr(o.defaultSelectedKeys, o))), o.checkable) {
            var p;
            if (c("checkedKeys") ? p = Kn(o.checkedKeys) || {} : !d && o.defaultCheckedKeys ? p = Kn(o.defaultCheckedKeys) || {} : s && (p = Kn(o.checkedKeys) || {
              checkedKeys: i.checkedKeys,
              halfCheckedKeys: i.halfCheckedKeys
            }), p) {
              var y = p, C = y.checkedKeys, x = C === void 0 ? [] : C, w = y.halfCheckedKeys, S = w === void 0 ? [] : w;
              if (!o.checkStrictly) {
                var E = Ht(x, true, f);
                x = E.checkedKeys, S = E.halfCheckedKeys;
              }
              a.checkedKeys = x, a.halfCheckedKeys = S;
            }
          }
          return c("loadedKeys") && (a.loadedKeys = o.loadedKeys), a;
        }
      }
    ]), r;
  }(l.Component);
  T(ur, "defaultProps", {
    prefixCls: "rc-tree",
    showLine: false,
    showIcon: true,
    selectable: true,
    multiple: false,
    checkable: false,
    disabled: false,
    checkStrictly: false,
    draggable: false,
    defaultExpandParent: true,
    autoExpandParent: false,
    defaultExpandAll: false,
    defaultExpandedKeys: [],
    defaultCheckedKeys: [],
    defaultSelectedKeys: [],
    dropIndicatorRender: Ws,
    allowDrop: function() {
      return true;
    },
    expandAction: false
  });
  T(ur, "TreeNode", ln);
  const ec = (t) => {
    let { treeCls: e, treeNodeCls: r, directoryNodeSelectedBg: n, directoryNodeSelectedColor: o, motionDurationMid: i, borderRadius: d, controlItemBgHover: a } = t;
    return {
      [`${e}${e}-directory ${r}`]: {
        [`${e}-node-content-wrapper`]: {
          position: "static",
          [`> *:not(${e}-drop-indicator)`]: {
            position: "relative"
          },
          "&:hover": {
            background: "transparent"
          },
          "&:before": {
            position: "absolute",
            inset: 0,
            transition: `background-color ${i}`,
            content: '""',
            borderRadius: d
          },
          "&:hover:before": {
            background: a
          }
        },
        [`${e}-switcher, ${e}-checkbox, ${e}-draggable-icon`]: {
          zIndex: 1
        },
        "&-selected": {
          [`${e}-switcher, ${e}-draggable-icon`]: {
            color: o
          },
          [`${e}-node-content-wrapper`]: {
            color: o,
            background: "transparent",
            "&:before, &:hover:before": {
              background: n
            }
          }
        }
      }
    };
  }, tc = new tr("ant-tree-node-fx-do-not-use", {
    "0%": {
      opacity: 0
    },
    "100%": {
      opacity: 1
    }
  }), nc = (t, e) => ({
    [`.${t}-switcher-icon`]: {
      display: "inline-block",
      fontSize: 10,
      verticalAlign: "baseline",
      svg: {
        transition: `transform ${e.motionDurationSlow}`
      }
    }
  }), rc = (t, e) => ({
    [`.${t}-drop-indicator`]: {
      position: "absolute",
      zIndex: 1,
      height: 2,
      backgroundColor: e.colorPrimary,
      borderRadius: 1,
      pointerEvents: "none",
      "&:after": {
        position: "absolute",
        top: -3,
        insetInlineStart: -6,
        width: 8,
        height: 8,
        backgroundColor: "transparent",
        border: `${A(e.lineWidthBold)} solid ${e.colorPrimary}`,
        borderRadius: "50%",
        content: '""'
      }
    }
  }), oc = (t, e) => {
    const { treeCls: r, treeNodeCls: n, treeNodePadding: o, titleHeight: i, indentSize: d, nodeSelectedBg: a, nodeHoverBg: c, colorTextQuaternary: s, controlItemBgActiveDisabled: m } = e;
    return {
      [r]: Object.assign(Object.assign({}, sn(e)), {
        background: e.colorBgContainer,
        borderRadius: e.borderRadius,
        transition: `background-color ${e.motionDurationSlow}`,
        "&-rtl": {
          direction: "rtl"
        },
        [`&${r}-rtl ${r}-switcher_close ${r}-switcher-icon svg`]: {
          transform: "rotate(90deg)"
        },
        [`&-focused:not(:hover):not(${r}-active-focused)`]: Object.assign({}, zn(e)),
        [`${r}-list-holder-inner`]: {
          alignItems: "flex-start"
        },
        [`&${r}-block-node`]: {
          [`${r}-list-holder-inner`]: {
            alignItems: "stretch",
            [`${r}-node-content-wrapper`]: {
              flex: "auto"
            },
            [`${n}.dragging:after`]: {
              position: "absolute",
              inset: 0,
              border: `1px solid ${e.colorPrimary}`,
              opacity: 0,
              animationName: tc,
              animationDuration: e.motionDurationSlow,
              animationPlayState: "running",
              animationFillMode: "forwards",
              content: '""',
              pointerEvents: "none",
              borderRadius: e.borderRadius
            }
          }
        },
        [n]: {
          display: "flex",
          alignItems: "flex-start",
          marginBottom: o,
          lineHeight: A(i),
          position: "relative",
          "&:before": {
            content: '""',
            position: "absolute",
            zIndex: 1,
            insetInlineStart: 0,
            width: "100%",
            top: "100%",
            height: o
          },
          [`&-disabled ${r}-node-content-wrapper`]: {
            color: e.colorTextDisabled,
            cursor: "not-allowed",
            "&:hover": {
              background: "transparent"
            }
          },
          [`${r}-checkbox-disabled + ${r}-node-selected,&${n}-disabled${n}-selected ${r}-node-content-wrapper`]: {
            backgroundColor: m
          },
          [`${r}-checkbox-disabled`]: {
            pointerEvents: "unset"
          },
          [`&:not(${n}-disabled)`]: {
            [`${r}-node-content-wrapper`]: {
              "&:hover": {
                color: e.nodeHoverColor
              }
            }
          },
          [`&-active ${r}-node-content-wrapper`]: {
            background: e.controlItemBgHover
          },
          [`&:not(${n}-disabled).filter-node ${r}-title`]: {
            color: e.colorPrimary,
            fontWeight: 500
          },
          "&-draggable": {
            cursor: "grab",
            [`${r}-draggable-icon`]: {
              flexShrink: 0,
              width: i,
              textAlign: "center",
              visibility: "visible",
              color: s
            },
            [`&${n}-disabled ${r}-draggable-icon`]: {
              visibility: "hidden"
            }
          }
        },
        [`${r}-indent`]: {
          alignSelf: "stretch",
          whiteSpace: "nowrap",
          userSelect: "none",
          "&-unit": {
            display: "inline-block",
            width: d
          }
        },
        [`${r}-draggable-icon`]: {
          visibility: "hidden"
        },
        [`${r}-switcher, ${r}-checkbox`]: {
          marginInlineEnd: e.calc(e.calc(i).sub(e.controlInteractiveSize)).div(2).equal()
        },
        [`${r}-switcher`]: Object.assign(Object.assign({}, nc(t, e)), {
          position: "relative",
          flex: "none",
          alignSelf: "stretch",
          width: i,
          textAlign: "center",
          cursor: "pointer",
          userSelect: "none",
          transition: `all ${e.motionDurationSlow}`,
          "&-noop": {
            cursor: "unset"
          },
          "&:before": {
            pointerEvents: "none",
            content: '""',
            width: i,
            height: i,
            position: "absolute",
            left: {
              _skip_check_: true,
              value: 0
            },
            top: 0,
            borderRadius: e.borderRadius,
            transition: `all ${e.motionDurationSlow}`
          },
          [`&:not(${r}-switcher-noop):hover:before`]: {
            backgroundColor: e.colorBgTextHover
          },
          [`&_close ${r}-switcher-icon svg`]: {
            transform: "rotate(-90deg)"
          },
          "&-loading-icon": {
            color: e.colorPrimary
          },
          "&-leaf-line": {
            position: "relative",
            zIndex: 1,
            display: "inline-block",
            width: "100%",
            height: "100%",
            "&:before": {
              position: "absolute",
              top: 0,
              insetInlineEnd: e.calc(i).div(2).equal(),
              bottom: e.calc(o).mul(-1).equal(),
              marginInlineStart: -1,
              borderInlineEnd: `1px solid ${e.colorBorder}`,
              content: '""'
            },
            "&:after": {
              position: "absolute",
              width: e.calc(e.calc(i).div(2).equal()).mul(0.8).equal(),
              height: e.calc(i).div(2).equal(),
              borderBottom: `1px solid ${e.colorBorder}`,
              content: '""'
            }
          }
        }),
        [`${r}-node-content-wrapper`]: Object.assign(Object.assign({
          position: "relative",
          minHeight: i,
          paddingBlock: 0,
          paddingInline: e.paddingXS,
          background: "transparent",
          borderRadius: e.borderRadius,
          cursor: "pointer",
          transition: `all ${e.motionDurationMid}, border 0s, line-height 0s, box-shadow 0s`
        }, rc(t, e)), {
          "&:hover": {
            backgroundColor: c
          },
          [`&${r}-node-selected`]: {
            color: e.nodeSelectedColor,
            backgroundColor: a
          },
          [`${r}-iconEle`]: {
            display: "inline-block",
            width: i,
            height: i,
            textAlign: "center",
            verticalAlign: "top",
            "&:empty": {
              display: "none"
            }
          }
        }),
        [`${r}-unselectable ${r}-node-content-wrapper:hover`]: {
          backgroundColor: "transparent"
        },
        [`${n}.drop-container > [draggable]`]: {
          boxShadow: `0 0 0 2px ${e.colorPrimary}`
        },
        "&-show-line": {
          [`${r}-indent-unit`]: {
            position: "relative",
            height: "100%",
            "&:before": {
              position: "absolute",
              top: 0,
              insetInlineEnd: e.calc(i).div(2).equal(),
              bottom: e.calc(o).mul(-1).equal(),
              borderInlineEnd: `1px solid ${e.colorBorder}`,
              content: '""'
            },
            "&-end:before": {
              display: "none"
            }
          },
          [`${r}-switcher`]: {
            background: "transparent",
            "&-line-icon": {
              verticalAlign: "-0.15em"
            }
          }
        },
        [`${n}-leaf-last ${r}-switcher-leaf-line:before`]: {
          top: "auto !important",
          bottom: "auto !important",
          height: `${A(e.calc(i).div(2).equal())} !important`
        }
      })
    };
  }, ac = function(t, e) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
    const n = `.${t}`, o = `${n}-treenode`, i = e.calc(e.paddingXS).div(2).equal(), d = yn(e, {
      treeCls: n,
      treeNodeCls: o,
      treeNodePadding: i
    });
    return [
      oc(t, d),
      r && ec(d)
    ].filter(Boolean);
  }, ic = (t) => {
    const { controlHeightSM: e, controlItemBgHover: r, controlItemBgActive: n } = t, o = e;
    return {
      titleHeight: o,
      indentSize: o,
      nodeHoverBg: r,
      nodeHoverColor: t.colorText,
      nodeSelectedBg: n,
      nodeSelectedColor: t.colorText
    };
  }, lc = (t) => {
    const { colorTextLightSolid: e, colorPrimary: r } = t;
    return Object.assign(Object.assign({}, ic(t)), {
      directoryNodeSelectedColor: e,
      directoryNodeSelectedBg: r
    });
  }, sc = hn("Tree", (t, e) => {
    let { prefixCls: r } = e;
    return [
      {
        [t.componentCls]: Ja(`${r}-checkbox`, t)
      },
      ac(r, t),
      Aa(t)
    ];
  }, lc), oo = 4;
  function cc(t) {
    const { dropPosition: e, dropLevelOffset: r, prefixCls: n, indent: o, direction: i = "ltr" } = t, d = i === "ltr" ? "left" : "right", a = i === "ltr" ? "right" : "left", c = {
      [d]: -r * o + oo,
      [a]: 0
    };
    switch (e) {
      case -1:
        c.top = -3;
        break;
      case 1:
        c.bottom = -3;
        break;
      default:
        c.bottom = -3, c[d] = o + oo;
        break;
    }
    return X.createElement("div", {
      style: c,
      className: `${n}-drop-indicator`
    });
  }
  const dc = (t) => {
    const { prefixCls: e, switcherIcon: r, treeNodeProps: n, showLine: o, switcherLoadingIcon: i } = t, { isLeaf: d, expanded: a, loading: c } = n;
    if (c) return l.isValidElement(i) ? i : l.createElement(Fa, {
      className: `${e}-switcher-loading-icon`
    });
    let s;
    if (o && typeof o == "object" && (s = o.showLeafIcon), d) {
      if (!o) return null;
      if (typeof s != "boolean" && s) {
        const f = typeof s == "function" ? s(n) : s, v = `${e}-switcher-line-custom-icon`;
        return l.isValidElement(f) ? Ln(f, {
          className: Y(f.props.className || "", v)
        }) : f;
      }
      return s ? l.createElement(Lo, {
        className: `${e}-switcher-line-icon`
      }) : l.createElement("span", {
        className: `${e}-switcher-leaf-line`
      });
    }
    const m = `${e}-switcher-icon`, u = typeof r == "function" ? r(n) : r;
    return l.isValidElement(u) ? Ln(u, {
      className: Y(u.props.className || "", m)
    }) : u !== void 0 ? u : o ? a ? l.createElement(pl, {
      className: `${e}-switcher-line-icon`
    }) : l.createElement(yl, {
      className: `${e}-switcher-line-icon`
    }) : l.createElement(qi, {
      className: m
    });
  }, aa = X.forwardRef((t, e) => {
    var r;
    const { getPrefixCls: n, direction: o, virtual: i, tree: d } = X.useContext(bn), { prefixCls: a, className: c, showIcon: s = false, showLine: m, switcherIcon: u, switcherLoadingIcon: f, blockNode: v = false, children: g, checkable: b = false, selectable: p = true, draggable: y, motion: C, style: x } = t, w = n("tree", a), S = n(), E = C ?? Object.assign(Object.assign({}, Wa(S)), {
      motionAppear: false
    }), I = Object.assign(Object.assign({}, t), {
      checkable: b,
      selectable: p,
      showIcon: s,
      motion: E,
      blockNode: v,
      showLine: !!m,
      dropIndicatorRender: cc
    }), [P, h, K] = sc(w), [, z] = Jn(), R = z.paddingXS / 2 + (((r = z.Tree) === null || r === void 0 ? void 0 : r.titleHeight) || z.controlHeightSM), k = X.useMemo(() => {
      if (!y) return false;
      let $ = {};
      switch (typeof y) {
        case "function":
          $.nodeDraggable = y;
          break;
        case "object":
          $ = Object.assign({}, y);
          break;
      }
      return $.icon !== false && ($.icon = $.icon || X.createElement(fl, null)), $;
    }, [
      y
    ]), N = ($) => X.createElement(dc, {
      prefixCls: w,
      switcherIcon: u,
      switcherLoadingIcon: f,
      treeNodeProps: $,
      showLine: m
    });
    return P(X.createElement(ur, Object.assign({
      itemHeight: R,
      ref: e,
      virtual: i
    }, I, {
      style: Object.assign(Object.assign({}, d == null ? void 0 : d.style), x),
      prefixCls: w,
      className: Y({
        [`${w}-icon-hide`]: !s,
        [`${w}-block-node`]: v,
        [`${w}-unselectable`]: !p,
        [`${w}-rtl`]: o === "rtl"
      }, d == null ? void 0 : d.className, c, h, K),
      direction: o,
      checkable: b && X.createElement("span", {
        className: `${w}-checkbox-inner`
      }),
      selectable: p,
      switcherIcon: N,
      draggable: k
    }), g));
  }), ao = 0, Pn = 1, io = 2;
  function fr(t, e, r) {
    const { key: n, children: o } = r;
    function i(d) {
      const a = d[n], c = d[o];
      e(a, d) !== false && fr(c || [], e, r);
    }
    t.forEach(i);
  }
  function uc(t) {
    let { treeData: e, expandedKeys: r, startKey: n, endKey: o, fieldNames: i } = t;
    const d = [];
    let a = ao;
    if (n && n === o) return [
      n
    ];
    if (!n || !o) return [];
    function c(s) {
      return s === n || s === o;
    }
    return fr(e, (s) => {
      if (a === io) return false;
      if (c(s)) {
        if (d.push(s), a === ao) a = Pn;
        else if (a === Pn) return a = io, false;
      } else a === Pn && d.push(s);
      return r.includes(s);
    }, At(i)), d;
  }
  function Tn(t, e, r) {
    const n = $e(e), o = [];
    return fr(t, (i, d) => {
      const a = n.indexOf(i);
      return a !== -1 && (o.push(d), n.splice(a, 1)), !!n.length;
    }, At(r)), o;
  }
  var lo = function(t, e) {
    var r = {};
    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
    if (t != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(t); o < n.length; o++) e.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[o]) && (r[n[o]] = t[n[o]]);
    return r;
  };
  function fc(t) {
    const { isLeaf: e, expanded: r } = t;
    return e ? l.createElement(Lo, null) : r ? l.createElement(il, null) : l.createElement(cl, null);
  }
  function so(t) {
    let { treeData: e, children: r } = t;
    return e || ko(r);
  }
  const mc = (t, e) => {
    var { defaultExpandAll: r, defaultExpandParent: n, defaultExpandedKeys: o } = t, i = lo(t, [
      "defaultExpandAll",
      "defaultExpandParent",
      "defaultExpandedKeys"
    ]);
    const d = l.useRef(null), a = l.useRef(null), c = () => {
      const { keyEntities: P } = rr(so(i));
      let h;
      return r ? h = Object.keys(P) : n ? h = An(i.expandedKeys || o || [], P) : h = i.expandedKeys || o || [], h;
    }, [s, m] = l.useState(i.selectedKeys || i.defaultSelectedKeys || []), [u, f] = l.useState(() => c());
    l.useEffect(() => {
      "selectedKeys" in i && m(i.selectedKeys);
    }, [
      i.selectedKeys
    ]), l.useEffect(() => {
      "expandedKeys" in i && f(i.expandedKeys);
    }, [
      i.expandedKeys
    ]);
    const v = (P, h) => {
      var K;
      return "expandedKeys" in i || f(P), (K = i.onExpand) === null || K === void 0 ? void 0 : K.call(i, P, h);
    }, g = (P, h) => {
      var K;
      const { multiple: z, fieldNames: R } = i, { node: k, nativeEvent: N } = h, { key: $ = "" } = k, O = so(i), D = Object.assign(Object.assign({}, h), {
        selected: true
      }), _ = (N == null ? void 0 : N.ctrlKey) || (N == null ? void 0 : N.metaKey), M = N == null ? void 0 : N.shiftKey;
      let G;
      z && _ ? (G = P, d.current = $, a.current = G, D.selectedNodes = Tn(O, G, R)) : z && M ? (G = Array.from(new Set([].concat($e(a.current || []), $e(uc({
        treeData: O,
        expandedKeys: u,
        startKey: $,
        endKey: d.current,
        fieldNames: R
      }))))), D.selectedNodes = Tn(O, G, R)) : (G = [
        $
      ], d.current = $, a.current = G, D.selectedNodes = Tn(O, G, R)), (K = i.onSelect) === null || K === void 0 || K.call(i, G, D), "selectedKeys" in i || m(G);
    }, { getPrefixCls: b, direction: p } = l.useContext(bn), { prefixCls: y, className: C, showIcon: x = true, expandAction: w = "click" } = i, S = lo(i, [
      "prefixCls",
      "className",
      "showIcon",
      "expandAction"
    ]), E = b("tree", y), I = Y(`${E}-directory`, {
      [`${E}-directory-rtl`]: p === "rtl"
    }, C);
    return l.createElement(aa, Object.assign({
      icon: fc,
      ref: e,
      blockNode: true
    }, S, {
      showIcon: x,
      expandAction: w,
      prefixCls: E,
      className: I,
      expandedKeys: u,
      selectedKeys: s,
      onSelect: g,
      onExpand: v
    }));
  }, vc = l.forwardRef(mc), mr = aa;
  mr.DirectoryTree = vc;
  mr.TreeNode = ln;
  const co = (t) => {
    const { value: e, filterSearch: r, tablePrefixCls: n, locale: o, onChange: i } = t;
    return r ? l.createElement("div", {
      className: `${n}-filter-dropdown-search`
    }, l.createElement(Va, {
      prefix: l.createElement(qa, null),
      placeholder: o.filterSearchPlaceholder,
      onChange: i,
      value: e,
      htmlSize: 1,
      className: `${n}-filter-dropdown-search-input`
    })) : null;
  }, pc = (t) => {
    const { keyCode: e } = t;
    e === et.ENTER && t.stopPropagation();
  }, gc = l.forwardRef((t, e) => l.createElement("div", {
    className: t.className,
    onClick: (r) => r.stopPropagation(),
    onKeyDown: pc,
    ref: e
  }, t.children));
  function jt(t) {
    let e = [];
    return (t || []).forEach((r) => {
      let { value: n, children: o } = r;
      e.push(n), o && (e = [].concat($e(e), $e(jt(o))));
    }), e;
  }
  function hc(t) {
    return t.some((e) => {
      let { children: r } = e;
      return r;
    });
  }
  function ia(t, e) {
    return typeof e == "string" || typeof e == "number" ? e == null ? void 0 : e.toString().toLowerCase().includes(t.trim().toLowerCase()) : false;
  }
  function la(t) {
    let { filters: e, prefixCls: r, filteredKeys: n, filterMultiple: o, searchValue: i, filterSearch: d } = t;
    return e.map((a, c) => {
      const s = String(a.value);
      if (a.children) return {
        key: s || c,
        label: a.text,
        popupClassName: `${r}-dropdown-submenu`,
        children: la({
          filters: a.children,
          prefixCls: r,
          filteredKeys: n,
          filterMultiple: o,
          searchValue: i,
          filterSearch: d
        })
      };
      const m = o ? vn : No, u = {
        key: a.value !== void 0 ? s : c,
        label: l.createElement(l.Fragment, null, l.createElement(m, {
          checked: n.includes(s)
        }), l.createElement("span", null, a.text))
      };
      return i.trim() ? typeof d == "function" ? d(i, a) ? u : null : ia(i, a.text) ? u : null : u;
    });
  }
  function Dn(t) {
    return t || [];
  }
  const yc = (t) => {
    var e, r, n, o;
    const { tablePrefixCls: i, prefixCls: d, column: a, dropdownPrefixCls: c, columnKey: s, filterOnClose: m, filterMultiple: u, filterMode: f = "menu", filterSearch: v = false, filterState: g, triggerFilter: b, locale: p, children: y, getPopupContainer: C, rootClassName: x } = t, { filterResetToDefaultFilteredValue: w, defaultFilteredValue: S, filterDropdownProps: E = {}, filterDropdownOpen: I, filterDropdownVisible: P, onFilterDropdownVisibleChange: h, onFilterDropdownOpenChange: K } = a, [z, R] = l.useState(false), k = !!(g && (!((e = g.filteredKeys) === null || e === void 0) && e.length || g.forceFiltered)), N = (B) => {
      var V;
      R(B), (V = E.onOpenChange) === null || V === void 0 || V.call(E, B), K == null ? void 0 : K(B), h == null ? void 0 : h(B);
    }, $ = (o = (n = (r = E.open) !== null && r !== void 0 ? r : I) !== null && n !== void 0 ? n : P) !== null && o !== void 0 ? o : z, O = g == null ? void 0 : g.filteredKeys, [D, _] = Fs(Dn(O)), M = (B) => {
      let { selectedKeys: V } = B;
      _(V);
    }, G = (B, V) => {
      let { node: ae, checked: fe } = V;
      M(u ? {
        selectedKeys: B
      } : {
        selectedKeys: fe && ae.key ? [
          ae.key
        ] : []
      });
    };
    l.useEffect(() => {
      z && M({
        selectedKeys: Dn(O)
      });
    }, [
      O
    ]);
    const [ee, ye] = l.useState([]), oe = (B) => {
      ye(B);
    }, [pe, xe] = l.useState(""), ue = (B) => {
      const { value: V } = B.target;
      xe(V);
    };
    l.useEffect(() => {
      z || xe("");
    }, [
      z
    ]);
    const J = (B) => {
      const V = (B == null ? void 0 : B.length) ? B : null;
      if (V === null && (!g || !g.filteredKeys) || on(V, g == null ? void 0 : g.filteredKeys, true)) return null;
      b({
        column: a,
        key: s,
        filteredKeys: V
      });
    }, te = () => {
      N(false), J(D());
    }, Ce = function() {
      let { confirm: B, closeDropdown: V } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
        confirm: false,
        closeDropdown: false
      };
      B && J([]), V && N(false), xe(""), _(w ? (S || []).map((ae) => String(ae)) : []);
    }, le = function() {
      let { closeDropdown: B } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
        closeDropdown: true
      };
      B && N(false), J(D());
    }, U = (B, V) => {
      V.source === "trigger" && (B && O !== void 0 && _(Dn(O)), N(B), !B && !a.filterDropdown && m && te());
    }, j = Y({
      [`${c}-menu-without-submenu`]: !hc(a.filters || [])
    }), H = (B) => {
      if (B.target.checked) {
        const V = jt(a == null ? void 0 : a.filters).map((ae) => String(ae));
        _(V);
      } else _([]);
    }, q = (B) => {
      let { filters: V } = B;
      return (V || []).map((ae, fe) => {
        const me = String(ae.value), Oe = {
          title: ae.text,
          key: ae.value !== void 0 ? me : String(fe)
        };
        return ae.children && (Oe.children = q({
          filters: ae.children
        })), Oe;
      });
    }, Z = (B) => {
      var V;
      return Object.assign(Object.assign({}, B), {
        text: B.title,
        value: B.key,
        children: ((V = B.children) === null || V === void 0 ? void 0 : V.map((ae) => Z(ae))) || []
      });
    };
    let F;
    const { direction: ne, renderEmpty: Ie } = l.useContext(bn);
    if (typeof a.filterDropdown == "function") F = a.filterDropdown({
      prefixCls: `${c}-custom`,
      setSelectedKeys: (B) => M({
        selectedKeys: B
      }),
      selectedKeys: D(),
      confirm: le,
      clearFilters: Ce,
      filters: a.filters,
      visible: $,
      close: () => {
        N(false);
      }
    });
    else if (a.filterDropdown) F = a.filterDropdown;
    else {
      const B = D() || [], V = () => {
        var fe, me;
        const Oe = (fe = Ie == null ? void 0 : Ie("Table.filter")) !== null && fe !== void 0 ? fe : l.createElement($r, {
          image: $r.PRESENTED_IMAGE_SIMPLE,
          description: p.filterEmptyText,
          styles: {
            image: {
              height: 24
            }
          },
          style: {
            margin: 0,
            padding: "16px 0"
          }
        });
        if ((a.filters || []).length === 0) return Oe;
        if (f === "tree") return l.createElement(l.Fragment, null, l.createElement(co, {
          filterSearch: v,
          value: pe,
          onChange: ue,
          tablePrefixCls: i,
          locale: p
        }), l.createElement("div", {
          className: `${i}-filter-dropdown-tree`
        }, u ? l.createElement(vn, {
          checked: B.length === jt(a.filters).length,
          indeterminate: B.length > 0 && B.length < jt(a.filters).length,
          className: `${i}-filter-dropdown-checkall`,
          onChange: H
        }, (me = p == null ? void 0 : p.filterCheckall) !== null && me !== void 0 ? me : p == null ? void 0 : p.filterCheckAll) : null, l.createElement(mr, {
          checkable: true,
          selectable: false,
          blockNode: true,
          multiple: u,
          checkStrictly: !u,
          className: `${c}-menu`,
          onCheck: G,
          checkedKeys: B,
          selectedKeys: B,
          showIcon: false,
          treeData: q({
            filters: a.filters
          }),
          autoExpandParent: true,
          defaultExpandAll: true,
          filterTreeNode: pe.trim() ? (ge) => typeof v == "function" ? v(pe, Z(ge)) : ia(pe, ge.title) : void 0
        })));
        const ze = la({
          filters: a.filters || [],
          filterSearch: v,
          prefixCls: d,
          filteredKeys: D(),
          filterMultiple: u,
          searchValue: pe
        }), je = ze.every((ge) => ge === null);
        return l.createElement(l.Fragment, null, l.createElement(co, {
          filterSearch: v,
          value: pe,
          onChange: ue,
          tablePrefixCls: i,
          locale: p
        }), je ? Oe : l.createElement(Ga, {
          selectable: true,
          multiple: u,
          prefixCls: `${c}-menu`,
          className: j,
          onSelect: M,
          onDeselect: M,
          selectedKeys: B,
          getPopupContainer: C,
          openKeys: ee,
          onOpenChange: oe,
          items: ze
        }));
      }, ae = () => w ? on((S || []).map((fe) => String(fe)), B, true) : B.length === 0;
      F = l.createElement(l.Fragment, null, V(), l.createElement("div", {
        className: `${d}-dropdown-btns`
      }, l.createElement(kr, {
        type: "link",
        size: "small",
        disabled: ae(),
        onClick: () => Ce()
      }, p.filterReset), l.createElement(kr, {
        type: "primary",
        size: "small",
        onClick: te
      }, p.filterConfirm)));
    }
    a.filterDropdown && (F = l.createElement(Ya, {
      selectable: void 0
    }, F)), F = l.createElement(gc, {
      className: `${d}-dropdown`
    }, F);
    const ke = Ko({
      trigger: [
        "click"
      ],
      placement: ne === "rtl" ? "bottomLeft" : "bottomRight",
      children: (() => {
        let B;
        return typeof a.filterIcon == "function" ? B = a.filterIcon(k) : a.filterIcon ? B = a.filterIcon : B = l.createElement(rl, null), l.createElement("span", {
          role: "button",
          tabIndex: -1,
          className: Y(`${d}-trigger`, {
            active: k
          }),
          onClick: (V) => {
            V.stopPropagation();
          }
        }, B);
      })(),
      getPopupContainer: C
    }, Object.assign(Object.assign({}, E), {
      rootClassName: Y(x, E.rootClassName),
      open: $,
      onOpenChange: U,
      dropdownRender: () => typeof (E == null ? void 0 : E.dropdownRender) == "function" ? E.dropdownRender(F) : F
    }));
    return l.createElement("div", {
      className: `${d}-column`
    }, l.createElement("span", {
      className: `${i}-column-title`
    }, y), l.createElement($o, Object.assign({}, ke)));
  }, Xn = (t, e, r) => {
    let n = [];
    return (t || []).forEach((o, i) => {
      var d;
      const a = qt(i, r), c = o.filterDropdown !== void 0;
      if (o.filters || c || "onFilter" in o) if ("filteredValue" in o) {
        let s = o.filteredValue;
        c || (s = (d = s == null ? void 0 : s.map(String)) !== null && d !== void 0 ? d : s), n.push({
          column: o,
          key: Nt(o, a),
          filteredKeys: s,
          forceFiltered: o.filtered
        });
      } else n.push({
        column: o,
        key: Nt(o, a),
        filteredKeys: e && o.defaultFilteredValue ? o.defaultFilteredValue : void 0,
        forceFiltered: o.filtered
      });
      "children" in o && (n = [].concat($e(n), $e(Xn(o.children, e, a))));
    }), n;
  };
  function sa(t, e, r, n, o, i, d, a, c) {
    return r.map((s, m) => {
      const u = qt(m, a), { filterOnClose: f = true, filterMultiple: v = true, filterMode: g, filterSearch: b } = s;
      let p = s;
      if (p.filters || p.filterDropdown) {
        const y = Nt(p, u), C = n.find((x) => {
          let { key: w } = x;
          return y === w;
        });
        p = Object.assign(Object.assign({}, p), {
          title: (x) => l.createElement(yc, {
            tablePrefixCls: t,
            prefixCls: `${t}-filter`,
            dropdownPrefixCls: e,
            column: p,
            columnKey: y,
            filterState: C,
            filterOnClose: f,
            filterMultiple: v,
            filterMode: g,
            filterSearch: b,
            triggerFilter: i,
            locale: o,
            getPopupContainer: d,
            rootClassName: c
          }, Sn(s.title, x))
        });
      }
      return "children" in p && (p = Object.assign(Object.assign({}, p), {
        children: sa(t, e, p.children, n, o, i, d, u, c)
      })), p;
    });
  }
  const uo = (t) => {
    const e = {};
    return t.forEach((r) => {
      let { key: n, filteredKeys: o, column: i } = r;
      const d = n, { filters: a, filterDropdown: c } = i;
      if (c) e[d] = o || null;
      else if (Array.isArray(o)) {
        const s = jt(a);
        e[d] = s.filter((m) => o.includes(String(m)));
      } else e[d] = null;
    }), e;
  }, Un = (t, e, r) => e.reduce((o, i) => {
    const { column: { onFilter: d, filters: a }, filteredKeys: c } = i;
    return d && c && c.length ? o.map((s) => Object.assign({}, s)).filter((s) => c.some((m) => {
      const u = jt(a), f = u.findIndex((g) => String(g) === String(m)), v = f !== -1 ? u[f] : m;
      return s[r] && (s[r] = Un(s[r], e, r)), d(v, s);
    })) : o;
  }, t), ca = (t) => t.flatMap((e) => "children" in e ? [
    e
  ].concat($e(ca(e.children || []))) : [
    e
  ]), bc = (t) => {
    const { prefixCls: e, dropdownPrefixCls: r, mergedColumns: n, onFilterChange: o, getPopupContainer: i, locale: d, rootClassName: a } = t;
    er();
    const c = l.useMemo(() => ca(n || []), [
      n
    ]), [s, m] = l.useState(() => Xn(c, true)), u = l.useMemo(() => {
      const b = Xn(c, false);
      if (b.length === 0) return b;
      let p = true;
      if (b.forEach((y) => {
        let { filteredKeys: C } = y;
        C !== void 0 && (p = false);
      }), p) {
        const y = (c || []).map((C, x) => Nt(C, qt(x)));
        return s.filter((C) => {
          let { key: x } = C;
          return y.includes(x);
        }).map((C) => {
          const x = c[y.findIndex((w) => w === C.key)];
          return Object.assign(Object.assign({}, C), {
            column: Object.assign(Object.assign({}, C.column), x),
            forceFiltered: x.filtered
          });
        });
      }
      return b;
    }, [
      c,
      s
    ]), f = l.useMemo(() => uo(u), [
      u
    ]), v = (b) => {
      const p = u.filter((y) => {
        let { key: C } = y;
        return C !== b.key;
      });
      p.push(b), m(p), o(uo(p), p);
    };
    return [
      (b) => sa(e, r, b, u, d, v, i, void 0, a),
      u,
      f
    ];
  }, xc = (t, e, r) => {
    const n = l.useRef({});
    function o(i) {
      var d;
      if (!n.current || n.current.data !== t || n.current.childrenColumnName !== e || n.current.getRowKey !== r) {
        let c = function(s) {
          s.forEach((m, u) => {
            const f = r(m, u);
            a.set(f, m), m && typeof m == "object" && e in m && c(m[e] || []);
          });
        };
        const a = /* @__PURE__ */ new Map();
        c(t), n.current = {
          data: t,
          childrenColumnName: e,
          kvMap: a,
          getRowKey: r
        };
      }
      return (d = n.current.kvMap) === null || d === void 0 ? void 0 : d.get(i);
    }
    return [
      o
    ];
  };
  var Cc = function(t, e) {
    var r = {};
    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
    if (t != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(t); o < n.length; o++) e.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[o]) && (r[n[o]] = t[n[o]]);
    return r;
  };
  const da = 10;
  function Sc(t, e) {
    const r = {
      current: t.current,
      pageSize: t.pageSize
    };
    return Object.keys(e && typeof e == "object" ? e : {}).forEach((o) => {
      const i = t[o];
      typeof i != "function" && (r[o] = i);
    }), r;
  }
  function wc(t, e, r) {
    const n = r && typeof r == "object" ? r : {}, { total: o = 0 } = n, i = Cc(n, [
      "total"
    ]), [d, a] = l.useState(() => ({
      current: "defaultCurrent" in i ? i.defaultCurrent : 1,
      pageSize: "defaultPageSize" in i ? i.defaultPageSize : da
    })), c = Ko(d, i, {
      total: o > 0 ? o : t
    }), s = Math.ceil((o || t) / c.pageSize);
    c.current > s && (c.current = s || 1);
    const m = (f, v) => {
      a({
        current: f ?? 1,
        pageSize: v || c.pageSize
      });
    }, u = (f, v) => {
      var g;
      r && ((g = r.onChange) === null || g === void 0 || g.call(r, f, v)), m(f, v), e(f, v || (c == null ? void 0 : c.pageSize));
    };
    return r === false ? [
      {},
      () => {
      }
    ] : [
      Object.assign(Object.assign({}, c), {
        onChange: u
      }),
      m
    ];
  }
  let mn, Mn, gn, fo, Ec, Gn, ua, mo, vo, Yn, $c, fa, Nc, Rc, Ic, kc, Oc, Kc, Pc, Tc, Dc, Mc, zc, Bc, Lc, _c, Hc, jc, po, Ac, Fc, Wc, go, Vc, qc, Xc, Uc, Gc;
  mn = "ascend";
  Mn = "descend";
  gn = (t) => typeof t.sorter == "object" && typeof t.sorter.multiple == "number" ? t.sorter.multiple : false;
  fo = (t) => typeof t == "function" ? t : t && typeof t == "object" && t.compare ? t.compare : false;
  Ec = (t, e) => e ? t[t.indexOf(e) + 1] : t[0];
  Gn = (t, e, r) => {
    let n = [];
    const o = (i, d) => {
      n.push({
        column: i,
        key: Nt(i, d),
        multiplePriority: gn(i),
        sortOrder: i.sortOrder
      });
    };
    return (t || []).forEach((i, d) => {
      const a = qt(d, r);
      i.children ? ("sortOrder" in i && o(i, a), n = [].concat($e(n), $e(Gn(i.children, e, a)))) : i.sorter && ("sortOrder" in i ? o(i, a) : e && i.defaultSortOrder && n.push({
        column: i,
        key: Nt(i, a),
        multiplePriority: gn(i),
        sortOrder: i.defaultSortOrder
      }));
    }), n;
  };
  ua = (t, e, r, n, o, i, d, a) => (e || []).map((s, m) => {
    const u = qt(m, a);
    let f = s;
    if (f.sorter) {
      const v = f.sortDirections || o, g = f.showSorterTooltip === void 0 ? d : f.showSorterTooltip, b = Nt(f, u), p = r.find((h) => {
        let { key: K } = h;
        return K === b;
      }), y = p ? p.sortOrder : null, C = Ec(v, y);
      let x;
      if (s.sortIcon) x = s.sortIcon({
        sortOrder: y
      });
      else {
        const h = v.includes(mn) && l.createElement(Qi, {
          className: Y(`${t}-column-sorter-up`, {
            active: y === mn
          })
        }), K = v.includes(Mn) && l.createElement(Gi, {
          className: Y(`${t}-column-sorter-down`, {
            active: y === Mn
          })
        });
        x = l.createElement("span", {
          className: Y(`${t}-column-sorter`, {
            [`${t}-column-sorter-full`]: !!(h && K)
          })
        }, l.createElement("span", {
          className: `${t}-column-sorter-inner`,
          "aria-hidden": "true"
        }, h, K));
      }
      const { cancelSort: w, triggerAsc: S, triggerDesc: E } = i || {};
      let I = w;
      C === Mn ? I = E : C === mn && (I = S);
      const P = typeof g == "object" ? Object.assign({
        title: I
      }, g) : {
        title: I
      };
      f = Object.assign(Object.assign({}, f), {
        className: Y(f.className, {
          [`${t}-column-sort`]: y
        }),
        title: (h) => {
          const K = `${t}-column-sorters`, z = l.createElement("span", {
            className: `${t}-column-title`
          }, Sn(s.title, h)), R = l.createElement("div", {
            className: K
          }, z, x);
          return g ? typeof g != "boolean" && (g == null ? void 0 : g.target) === "sorter-icon" ? l.createElement("div", {
            className: `${K} ${t}-column-sorters-tooltip-target-sorter`
          }, z, l.createElement(Or, Object.assign({}, P), x)) : l.createElement(Or, Object.assign({}, P), R) : R;
        },
        onHeaderCell: (h) => {
          var K;
          const z = ((K = s.onHeaderCell) === null || K === void 0 ? void 0 : K.call(s, h)) || {}, R = z.onClick, k = z.onKeyDown;
          z.onClick = (O) => {
            n({
              column: s,
              key: b,
              sortOrder: C,
              multiplePriority: gn(s)
            }), R == null ? void 0 : R(O);
          }, z.onKeyDown = (O) => {
            O.keyCode === et.ENTER && (n({
              column: s,
              key: b,
              sortOrder: C,
              multiplePriority: gn(s)
            }), k == null ? void 0 : k(O));
          };
          const N = As(s.title, {}), $ = N == null ? void 0 : N.toString();
          return y && (z["aria-sort"] = y === "ascend" ? "ascending" : "descending"), z["aria-label"] = $ || "", z.className = Y(z.className, `${t}-column-has-sorters`), z.tabIndex = 0, s.ellipsis && (z.title = (N ?? "").toString()), z;
        }
      });
    }
    return "children" in f && (f = Object.assign(Object.assign({}, f), {
      children: ua(t, f.children, r, n, o, i, d, u)
    })), f;
  });
  mo = (t) => {
    const { column: e, sortOrder: r } = t;
    return {
      column: e,
      order: r,
      field: e.dataIndex,
      columnKey: e.key
    };
  };
  vo = (t) => {
    const e = t.filter((r) => {
      let { sortOrder: n } = r;
      return n;
    }).map(mo);
    if (e.length === 0 && t.length) {
      const r = t.length - 1;
      return Object.assign(Object.assign({}, mo(t[r])), {
        column: void 0,
        order: void 0,
        field: void 0,
        columnKey: void 0
      });
    }
    return e.length <= 1 ? e[0] || {} : e;
  };
  Yn = (t, e, r) => {
    const n = e.slice().sort((d, a) => a.multiplePriority - d.multiplePriority), o = t.slice(), i = n.filter((d) => {
      let { column: { sorter: a }, sortOrder: c } = d;
      return fo(a) && c;
    });
    return i.length ? o.sort((d, a) => {
      for (let c = 0; c < i.length; c += 1) {
        const s = i[c], { column: { sorter: m }, sortOrder: u } = s, f = fo(m);
        if (f && u) {
          const v = f(d, a, u);
          if (v !== 0) return u === mn ? v : -v;
        }
      }
      return 0;
    }).map((d) => {
      const a = d[r];
      return a ? Object.assign(Object.assign({}, d), {
        [r]: Yn(a, e, r)
      }) : d;
    }) : o;
  };
  $c = (t) => {
    const { prefixCls: e, mergedColumns: r, sortDirections: n, tableLocale: o, showSorterTooltip: i, onSorterChange: d } = t, [a, c] = l.useState(() => Gn(r, true)), s = (b, p) => {
      const y = [];
      return b.forEach((C, x) => {
        const w = qt(x, p);
        if (y.push(Nt(C, w)), Array.isArray(C.children)) {
          const S = s(C.children, w);
          y.push.apply(y, $e(S));
        }
      }), y;
    }, m = l.useMemo(() => {
      let b = true;
      const p = Gn(r, false);
      if (!p.length) {
        const w = s(r);
        return a.filter((S) => {
          let { key: E } = S;
          return w.includes(E);
        });
      }
      const y = [];
      function C(w) {
        b ? y.push(w) : y.push(Object.assign(Object.assign({}, w), {
          sortOrder: null
        }));
      }
      let x = null;
      return p.forEach((w) => {
        x === null ? (C(w), w.sortOrder && (w.multiplePriority === false ? b = false : x = true)) : (x && w.multiplePriority !== false || (b = false), C(w));
      }), y;
    }, [
      r,
      a
    ]), u = l.useMemo(() => {
      var b, p;
      const y = m.map((C) => {
        let { column: x, sortOrder: w } = C;
        return {
          column: x,
          order: w
        };
      });
      return {
        sortColumns: y,
        sortColumn: (b = y[0]) === null || b === void 0 ? void 0 : b.column,
        sortOrder: (p = y[0]) === null || p === void 0 ? void 0 : p.order
      };
    }, [
      m
    ]), f = (b) => {
      let p;
      b.multiplePriority === false || !m.length || m[0].multiplePriority === false ? p = [
        b
      ] : p = [].concat($e(m.filter((y) => {
        let { key: C } = y;
        return C !== b.key;
      })), [
        b
      ]), c(p), d(vo(p), p);
    };
    return [
      (b) => ua(e, b, m, f, n, o, i),
      m,
      u,
      () => vo(m)
    ];
  };
  fa = (t, e) => t.map((n) => {
    const o = Object.assign({}, n);
    return o.title = Sn(n.title, e), "children" in o && (o.children = fa(o.children, e)), o;
  });
  Nc = (t) => [
    l.useCallback((r) => fa(r, t), [
      t
    ])
  ];
  Rc = Zo((t, e) => {
    const { _renderTimes: r } = t, { _renderTimes: n } = e;
    return r !== n;
  });
  Ic = ta((t, e) => {
    const { _renderTimes: r } = t, { _renderTimes: n } = e;
    return r !== n;
  });
  kc = (t) => {
    const { componentCls: e, lineWidth: r, lineType: n, tableBorderColor: o, tableHeaderBg: i, tablePaddingVertical: d, tablePaddingHorizontal: a, calc: c } = t, s = `${A(r)} ${n} ${o}`, m = (u, f, v) => ({
      [`&${e}-${u}`]: {
        [`> ${e}-container`]: {
          [`> ${e}-content, > ${e}-body`]: {
            "\n            > table > tbody > tr > th,\n            > table > tbody > tr > td\n          ": {
              [`> ${e}-expanded-row-fixed`]: {
                margin: `${A(c(f).mul(-1).equal())}
              ${A(c(c(v).add(r)).mul(-1).equal())}`
              }
            }
          }
        }
      }
    });
    return {
      [`${e}-wrapper`]: {
        [`${e}${e}-bordered`]: Object.assign(Object.assign(Object.assign({
          [`> ${e}-title`]: {
            border: s,
            borderBottom: 0
          },
          [`> ${e}-container`]: {
            borderInlineStart: s,
            borderTop: s,
            [`
            > ${e}-content,
            > ${e}-header,
            > ${e}-body,
            > ${e}-summary
          `]: {
              "> table": {
                "\n                > thead > tr > th,\n                > thead > tr > td,\n                > tbody > tr > th,\n                > tbody > tr > td,\n                > tfoot > tr > th,\n                > tfoot > tr > td\n              ": {
                  borderInlineEnd: s
                },
                "> thead": {
                  "> tr:not(:last-child) > th": {
                    borderBottom: s
                  },
                  "> tr > th::before": {
                    backgroundColor: "transparent !important"
                  }
                },
                "\n                > thead > tr,\n                > tbody > tr,\n                > tfoot > tr\n              ": {
                  [`> ${e}-cell-fix-right-first::after`]: {
                    borderInlineEnd: s
                  }
                },
                "\n                > tbody > tr > th,\n                > tbody > tr > td\n              ": {
                  [`> ${e}-expanded-row-fixed`]: {
                    margin: `${A(c(d).mul(-1).equal())} ${A(c(c(a).add(r)).mul(-1).equal())}`,
                    "&::after": {
                      position: "absolute",
                      top: 0,
                      insetInlineEnd: r,
                      bottom: 0,
                      borderInlineEnd: s,
                      content: '""'
                    }
                  }
                }
              }
            }
          },
          [`&${e}-scroll-horizontal`]: {
            [`> ${e}-container > ${e}-body`]: {
              "> table > tbody": {
                [`
                > tr${e}-expanded-row,
                > tr${e}-placeholder
              `]: {
                  "> th, > td": {
                    borderInlineEnd: 0
                  }
                }
              }
            }
          }
        }, m("middle", t.tablePaddingVerticalMiddle, t.tablePaddingHorizontalMiddle)), m("small", t.tablePaddingVerticalSmall, t.tablePaddingHorizontalSmall)), {
          [`> ${e}-footer`]: {
            border: s,
            borderTop: 0
          }
        }),
        [`${e}-cell`]: {
          [`${e}-container:first-child`]: {
            borderTop: 0
          },
          "&-scrollbar:not([rowspan])": {
            boxShadow: `0 ${A(r)} 0 ${A(r)} ${i}`
          }
        },
        [`${e}-bordered ${e}-cell-scrollbar`]: {
          borderInlineEnd: s
        }
      }
    };
  };
  Oc = (t) => {
    const { componentCls: e } = t;
    return {
      [`${e}-wrapper`]: {
        [`${e}-cell-ellipsis`]: Object.assign(Object.assign({}, Ia), {
          wordBreak: "keep-all",
          [`
          &${e}-cell-fix-left-last,
          &${e}-cell-fix-right-first
        `]: {
            overflow: "visible",
            [`${e}-cell-content`]: {
              display: "block",
              overflow: "hidden",
              textOverflow: "ellipsis"
            }
          },
          [`${e}-column-title`]: {
            overflow: "hidden",
            textOverflow: "ellipsis",
            wordBreak: "keep-all"
          }
        })
      }
    };
  };
  Kc = (t) => {
    const { componentCls: e } = t;
    return {
      [`${e}-wrapper`]: {
        [`${e}-tbody > tr${e}-placeholder`]: {
          textAlign: "center",
          color: t.colorTextDisabled,
          "\n          &:hover > th,\n          &:hover > td,\n        ": {
            background: t.colorBgContainer
          }
        }
      }
    };
  };
  Pc = (t) => {
    const { componentCls: e, antCls: r, motionDurationSlow: n, lineWidth: o, paddingXS: i, lineType: d, tableBorderColor: a, tableExpandIconBg: c, tableExpandColumnWidth: s, borderRadius: m, tablePaddingVertical: u, tablePaddingHorizontal: f, tableExpandedRowBg: v, paddingXXS: g, expandIconMarginTop: b, expandIconSize: p, expandIconHalfInner: y, expandIconScale: C, calc: x } = t, w = `${A(o)} ${d} ${a}`, S = x(g).sub(o).equal();
    return {
      [`${e}-wrapper`]: {
        [`${e}-expand-icon-col`]: {
          width: s
        },
        [`${e}-row-expand-icon-cell`]: {
          textAlign: "center",
          [`${e}-row-expand-icon`]: {
            display: "inline-flex",
            float: "none",
            verticalAlign: "sub"
          }
        },
        [`${e}-row-indent`]: {
          height: 1,
          float: "left"
        },
        [`${e}-row-expand-icon`]: Object.assign(Object.assign({}, ka(t)), {
          position: "relative",
          float: "left",
          width: p,
          height: p,
          color: "inherit",
          lineHeight: A(p),
          background: c,
          border: w,
          borderRadius: m,
          transform: `scale(${C})`,
          "&:focus, &:hover, &:active": {
            borderColor: "currentcolor"
          },
          "&::before, &::after": {
            position: "absolute",
            background: "currentcolor",
            transition: `transform ${n} ease-out`,
            content: '""'
          },
          "&::before": {
            top: y,
            insetInlineEnd: S,
            insetInlineStart: S,
            height: o
          },
          "&::after": {
            top: S,
            bottom: S,
            insetInlineStart: y,
            width: o,
            transform: "rotate(90deg)"
          },
          "&-collapsed::before": {
            transform: "rotate(-180deg)"
          },
          "&-collapsed::after": {
            transform: "rotate(0deg)"
          },
          "&-spaced": {
            "&::before, &::after": {
              display: "none",
              content: "none"
            },
            background: "transparent",
            border: 0,
            visibility: "hidden"
          }
        }),
        [`${e}-row-indent + ${e}-row-expand-icon`]: {
          marginTop: b,
          marginInlineEnd: i
        },
        [`tr${e}-expanded-row`]: {
          "&, &:hover": {
            "> th, > td": {
              background: v
            }
          },
          [`${r}-descriptions-view`]: {
            display: "flex",
            table: {
              flex: "auto",
              width: "100%"
            }
          }
        },
        [`${e}-expanded-row-fixed`]: {
          position: "relative",
          margin: `${A(x(u).mul(-1).equal())} ${A(x(f).mul(-1).equal())}`,
          padding: `${A(u)} ${A(f)}`
        }
      }
    };
  };
  Tc = (t) => {
    const { componentCls: e, antCls: r, iconCls: n, tableFilterDropdownWidth: o, tableFilterDropdownSearchWidth: i, paddingXXS: d, paddingXS: a, colorText: c, lineWidth: s, lineType: m, tableBorderColor: u, headerIconColor: f, fontSizeSM: v, tablePaddingHorizontal: g, borderRadius: b, motionDurationSlow: p, colorIcon: y, colorPrimary: C, tableHeaderFilterActiveBg: x, colorTextDisabled: w, tableFilterDropdownBg: S, tableFilterDropdownHeight: E, controlItemBgHover: I, controlItemBgActive: P, boxShadowSecondary: h, filterDropdownMenuBg: K, calc: z } = t, R = `${r}-dropdown`, k = `${e}-filter-dropdown`, N = `${r}-tree`, $ = `${A(s)} ${m} ${u}`;
    return [
      {
        [`${e}-wrapper`]: {
          [`${e}-filter-column`]: {
            display: "flex",
            justifyContent: "space-between"
          },
          [`${e}-filter-trigger`]: {
            position: "relative",
            display: "flex",
            alignItems: "center",
            marginBlock: z(d).mul(-1).equal(),
            marginInline: `${A(d)} ${A(z(g).div(2).mul(-1).equal())}`,
            padding: `0 ${A(d)}`,
            color: f,
            fontSize: v,
            borderRadius: b,
            cursor: "pointer",
            transition: `all ${p}`,
            "&:hover": {
              color: y,
              background: x
            },
            "&.active": {
              color: C
            }
          }
        }
      },
      {
        [`${r}-dropdown`]: {
          [k]: Object.assign(Object.assign({}, sn(t)), {
            minWidth: o,
            backgroundColor: S,
            borderRadius: b,
            boxShadow: h,
            overflow: "hidden",
            [`${R}-menu`]: {
              maxHeight: E,
              overflowX: "hidden",
              border: 0,
              boxShadow: "none",
              borderRadius: "unset",
              backgroundColor: K,
              "&:empty::after": {
                display: "block",
                padding: `${A(a)} 0`,
                color: w,
                fontSize: v,
                textAlign: "center",
                content: '"Not Found"'
              }
            },
            [`${k}-tree`]: {
              paddingBlock: `${A(a)} 0`,
              paddingInline: a,
              [N]: {
                padding: 0
              },
              [`${N}-treenode ${N}-node-content-wrapper:hover`]: {
                backgroundColor: I
              },
              [`${N}-treenode-checkbox-checked ${N}-node-content-wrapper`]: {
                "&, &:hover": {
                  backgroundColor: P
                }
              }
            },
            [`${k}-search`]: {
              padding: a,
              borderBottom: $,
              "&-input": {
                input: {
                  minWidth: i
                },
                [n]: {
                  color: w
                }
              }
            },
            [`${k}-checkall`]: {
              width: "100%",
              marginBottom: d,
              marginInlineStart: d
            },
            [`${k}-btns`]: {
              display: "flex",
              justifyContent: "space-between",
              padding: `${A(z(a).sub(s).equal())} ${A(a)}`,
              overflow: "hidden",
              borderTop: $
            }
          })
        }
      },
      {
        [`${r}-dropdown ${k}, ${k}-submenu`]: {
          [`${r}-checkbox-wrapper + span`]: {
            paddingInlineStart: a,
            color: c
          },
          "> ul": {
            maxHeight: "calc(100vh - 130px)",
            overflowX: "hidden",
            overflowY: "auto"
          }
        }
      }
    ];
  };
  Dc = (t) => {
    const { componentCls: e, lineWidth: r, colorSplit: n, motionDurationSlow: o, zIndexTableFixed: i, tableBg: d, zIndexTableSticky: a, calc: c } = t, s = n;
    return {
      [`${e}-wrapper`]: {
        [`
        ${e}-cell-fix-left,
        ${e}-cell-fix-right
      `]: {
          position: "sticky !important",
          zIndex: i,
          background: d
        },
        [`
        ${e}-cell-fix-left-first::after,
        ${e}-cell-fix-left-last::after
      `]: {
          position: "absolute",
          top: 0,
          right: {
            _skip_check_: true,
            value: 0
          },
          bottom: c(r).mul(-1).equal(),
          width: 30,
          transform: "translateX(100%)",
          transition: `box-shadow ${o}`,
          content: '""',
          pointerEvents: "none"
        },
        [`${e}-cell-fix-left-all::after`]: {
          display: "none"
        },
        [`
        ${e}-cell-fix-right-first::after,
        ${e}-cell-fix-right-last::after
      `]: {
          position: "absolute",
          top: 0,
          bottom: c(r).mul(-1).equal(),
          left: {
            _skip_check_: true,
            value: 0
          },
          width: 30,
          transform: "translateX(-100%)",
          transition: `box-shadow ${o}`,
          content: '""',
          pointerEvents: "none"
        },
        [`${e}-container`]: {
          position: "relative",
          "&::before, &::after": {
            position: "absolute",
            top: 0,
            bottom: 0,
            zIndex: c(a).add(1).equal({
              unit: false
            }),
            width: 30,
            transition: `box-shadow ${o}`,
            content: '""',
            pointerEvents: "none"
          },
          "&::before": {
            insetInlineStart: 0
          },
          "&::after": {
            insetInlineEnd: 0
          }
        },
        [`${e}-ping-left`]: {
          [`&:not(${e}-has-fix-left) ${e}-container::before`]: {
            boxShadow: `inset 10px 0 8px -8px ${s}`
          },
          [`
          ${e}-cell-fix-left-first::after,
          ${e}-cell-fix-left-last::after
        `]: {
            boxShadow: `inset 10px 0 8px -8px ${s}`
          },
          [`${e}-cell-fix-left-last::before`]: {
            backgroundColor: "transparent !important"
          }
        },
        [`${e}-ping-right`]: {
          [`&:not(${e}-has-fix-right) ${e}-container::after`]: {
            boxShadow: `inset -10px 0 8px -8px ${s}`
          },
          [`
          ${e}-cell-fix-right-first::after,
          ${e}-cell-fix-right-last::after
        `]: {
            boxShadow: `inset -10px 0 8px -8px ${s}`
          }
        },
        [`${e}-fixed-column-gapped`]: {
          [`
        ${e}-cell-fix-left-first::after,
        ${e}-cell-fix-left-last::after,
        ${e}-cell-fix-right-first::after,
        ${e}-cell-fix-right-last::after
      `]: {
            boxShadow: "none"
          }
        }
      }
    };
  };
  Mc = (t) => {
    const { componentCls: e, antCls: r, margin: n } = t;
    return {
      [`${e}-wrapper`]: {
        [`${e}-pagination${r}-pagination`]: {
          margin: `${A(n)} 0`
        },
        [`${e}-pagination`]: {
          display: "flex",
          flexWrap: "wrap",
          rowGap: t.paddingXS,
          "> *": {
            flex: "none"
          },
          "&-left": {
            justifyContent: "flex-start"
          },
          "&-center": {
            justifyContent: "center"
          },
          "&-right": {
            justifyContent: "flex-end"
          }
        }
      }
    };
  };
  zc = (t) => {
    const { componentCls: e, tableRadius: r } = t;
    return {
      [`${e}-wrapper`]: {
        [e]: {
          [`${e}-title, ${e}-header`]: {
            borderRadius: `${A(r)} ${A(r)} 0 0`
          },
          [`${e}-title + ${e}-container`]: {
            borderStartStartRadius: 0,
            borderStartEndRadius: 0,
            [`${e}-header, table`]: {
              borderRadius: 0
            },
            "table > thead > tr:first-child": {
              "th:first-child, th:last-child, td:first-child, td:last-child": {
                borderRadius: 0
              }
            }
          },
          "&-container": {
            borderStartStartRadius: r,
            borderStartEndRadius: r,
            "table > thead > tr:first-child": {
              "> *:first-child": {
                borderStartStartRadius: r
              },
              "> *:last-child": {
                borderStartEndRadius: r
              }
            }
          },
          "&-footer": {
            borderRadius: `0 0 ${A(r)} ${A(r)}`
          }
        }
      }
    };
  };
  Bc = (t) => {
    const { componentCls: e } = t;
    return {
      [`${e}-wrapper-rtl`]: {
        direction: "rtl",
        table: {
          direction: "rtl"
        },
        [`${e}-pagination-left`]: {
          justifyContent: "flex-end"
        },
        [`${e}-pagination-right`]: {
          justifyContent: "flex-start"
        },
        [`${e}-row-expand-icon`]: {
          float: "right",
          "&::after": {
            transform: "rotate(-90deg)"
          },
          "&-collapsed::before": {
            transform: "rotate(180deg)"
          },
          "&-collapsed::after": {
            transform: "rotate(0deg)"
          }
        },
        [`${e}-container`]: {
          "&::before": {
            insetInlineStart: "unset",
            insetInlineEnd: 0
          },
          "&::after": {
            insetInlineStart: 0,
            insetInlineEnd: "unset"
          },
          [`${e}-row-indent`]: {
            float: "right"
          }
        }
      }
    };
  };
  Lc = (t) => {
    const { componentCls: e, antCls: r, iconCls: n, fontSizeIcon: o, padding: i, paddingXS: d, headerIconColor: a, headerIconHoverColor: c, tableSelectionColumnWidth: s, tableSelectedRowBg: m, tableSelectedRowHoverBg: u, tableRowHoverBg: f, tablePaddingHorizontal: v, calc: g } = t;
    return {
      [`${e}-wrapper`]: {
        [`${e}-selection-col`]: {
          width: s,
          [`&${e}-selection-col-with-dropdown`]: {
            width: g(s).add(o).add(g(i).div(4)).equal()
          }
        },
        [`${e}-bordered ${e}-selection-col`]: {
          width: g(s).add(g(d).mul(2)).equal(),
          [`&${e}-selection-col-with-dropdown`]: {
            width: g(s).add(o).add(g(i).div(4)).add(g(d).mul(2)).equal()
          }
        },
        [`
        table tr th${e}-selection-column,
        table tr td${e}-selection-column,
        ${e}-selection-column
      `]: {
          paddingInlineEnd: t.paddingXS,
          paddingInlineStart: t.paddingXS,
          textAlign: "center",
          [`${r}-radio-wrapper`]: {
            marginInlineEnd: 0
          }
        },
        [`table tr th${e}-selection-column${e}-cell-fix-left`]: {
          zIndex: g(t.zIndexTableFixed).add(1).equal({
            unit: false
          })
        },
        [`table tr th${e}-selection-column::after`]: {
          backgroundColor: "transparent !important"
        },
        [`${e}-selection`]: {
          position: "relative",
          display: "inline-flex",
          flexDirection: "column"
        },
        [`${e}-selection-extra`]: {
          position: "absolute",
          top: 0,
          zIndex: 1,
          cursor: "pointer",
          transition: `all ${t.motionDurationSlow}`,
          marginInlineStart: "100%",
          paddingInlineStart: A(g(v).div(4).equal()),
          [n]: {
            color: a,
            fontSize: o,
            verticalAlign: "baseline",
            "&:hover": {
              color: c
            }
          }
        },
        [`${e}-tbody`]: {
          [`${e}-row`]: {
            [`&${e}-row-selected`]: {
              [`> ${e}-cell`]: {
                background: m,
                "&-row-hover": {
                  background: u
                }
              }
            },
            [`> ${e}-cell-row-hover`]: {
              background: f
            }
          }
        }
      }
    };
  };
  _c = (t) => {
    const { componentCls: e, tableExpandColumnWidth: r, calc: n } = t, o = (i, d, a, c) => ({
      [`${e}${e}-${i}`]: {
        fontSize: c,
        [`
        ${e}-title,
        ${e}-footer,
        ${e}-cell,
        ${e}-thead > tr > th,
        ${e}-tbody > tr > th,
        ${e}-tbody > tr > td,
        tfoot > tr > th,
        tfoot > tr > td
      `]: {
          padding: `${A(d)} ${A(a)}`
        },
        [`${e}-filter-trigger`]: {
          marginInlineEnd: A(n(a).div(2).mul(-1).equal())
        },
        [`${e}-expanded-row-fixed`]: {
          margin: `${A(n(d).mul(-1).equal())} ${A(n(a).mul(-1).equal())}`
        },
        [`${e}-tbody`]: {
          [`${e}-wrapper:only-child ${e}`]: {
            marginBlock: A(n(d).mul(-1).equal()),
            marginInline: `${A(n(r).sub(a).equal())} ${A(n(a).mul(-1).equal())}`
          }
        },
        [`${e}-selection-extra`]: {
          paddingInlineStart: A(n(a).div(4).equal())
        }
      }
    });
    return {
      [`${e}-wrapper`]: Object.assign(Object.assign({}, o("middle", t.tablePaddingVerticalMiddle, t.tablePaddingHorizontalMiddle, t.tableFontSizeMiddle)), o("small", t.tablePaddingVerticalSmall, t.tablePaddingHorizontalSmall, t.tableFontSizeSmall))
    };
  };
  Hc = (t) => {
    const { componentCls: e, marginXXS: r, fontSizeIcon: n, headerIconColor: o, headerIconHoverColor: i } = t;
    return {
      [`${e}-wrapper`]: {
        [`${e}-thead th${e}-column-has-sorters`]: {
          outline: "none",
          cursor: "pointer",
          transition: `all ${t.motionDurationSlow}, left 0s`,
          "&:hover": {
            background: t.tableHeaderSortHoverBg,
            "&::before": {
              backgroundColor: "transparent !important"
            }
          },
          "&:focus-visible": {
            color: t.colorPrimary
          },
          [`
          &${e}-cell-fix-left:hover,
          &${e}-cell-fix-right:hover
        `]: {
            background: t.tableFixedHeaderSortActiveBg
          }
        },
        [`${e}-thead th${e}-column-sort`]: {
          background: t.tableHeaderSortBg,
          "&::before": {
            backgroundColor: "transparent !important"
          }
        },
        [`td${e}-column-sort`]: {
          background: t.tableBodySortBg
        },
        [`${e}-column-title`]: {
          position: "relative",
          zIndex: 1,
          flex: 1,
          minWidth: 0
        },
        [`${e}-column-sorters`]: {
          display: "flex",
          flex: "auto",
          alignItems: "center",
          justifyContent: "space-between",
          "&::after": {
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            content: '""'
          }
        },
        [`${e}-column-sorters-tooltip-target-sorter`]: {
          "&::after": {
            content: "none"
          }
        },
        [`${e}-column-sorter`]: {
          marginInlineStart: r,
          color: o,
          fontSize: 0,
          transition: `color ${t.motionDurationSlow}`,
          "&-inner": {
            display: "inline-flex",
            flexDirection: "column",
            alignItems: "center"
          },
          "&-up, &-down": {
            fontSize: n,
            "&.active": {
              color: t.colorPrimary
            }
          },
          [`${e}-column-sorter-up + ${e}-column-sorter-down`]: {
            marginTop: "-0.3em"
          }
        },
        [`${e}-column-sorters:hover ${e}-column-sorter`]: {
          color: i
        }
      }
    };
  };
  jc = (t) => {
    const { componentCls: e, opacityLoading: r, tableScrollThumbBg: n, tableScrollThumbBgHover: o, tableScrollThumbSize: i, tableScrollBg: d, zIndexTableSticky: a, stickyScrollBarBorderRadius: c, lineWidth: s, lineType: m, tableBorderColor: u } = t, f = `${A(s)} ${m} ${u}`;
    return {
      [`${e}-wrapper`]: {
        [`${e}-sticky`]: {
          "&-holder": {
            position: "sticky",
            zIndex: a,
            background: t.colorBgContainer
          },
          "&-scroll": {
            position: "sticky",
            bottom: 0,
            height: `${A(i)} !important`,
            zIndex: a,
            display: "flex",
            alignItems: "center",
            background: d,
            borderTop: f,
            opacity: r,
            "&:hover": {
              transformOrigin: "center bottom"
            },
            "&-bar": {
              height: i,
              backgroundColor: n,
              borderRadius: c,
              transition: `all ${t.motionDurationSlow}, transform 0s`,
              position: "absolute",
              bottom: 0,
              "&:hover, &-active": {
                backgroundColor: o
              }
            }
          }
        }
      }
    };
  };
  po = (t) => {
    const { componentCls: e, lineWidth: r, tableBorderColor: n, calc: o } = t, i = `${A(r)} ${t.lineType} ${n}`;
    return {
      [`${e}-wrapper`]: {
        [`${e}-summary`]: {
          position: "relative",
          zIndex: t.zIndexTableFixed,
          background: t.tableBg,
          "> tr": {
            "> th, > td": {
              borderBottom: i
            }
          }
        },
        [`div${e}-summary`]: {
          boxShadow: `0 ${A(o(r).mul(-1).equal())} 0 ${n}`
        }
      }
    };
  };
  Ac = (t) => {
    const { componentCls: e, motionDurationMid: r, lineWidth: n, lineType: o, tableBorderColor: i, calc: d } = t, a = `${A(n)} ${o} ${i}`, c = `${e}-expanded-row-cell`;
    return {
      [`${e}-wrapper`]: {
        [`${e}-tbody-virtual`]: {
          [`${e}-tbody-virtual-holder-inner`]: {
            [`
            & > ${e}-row, 
            & > div:not(${e}-row) > ${e}-row
          `]: {
              display: "flex",
              boxSizing: "border-box",
              width: "100%"
            }
          },
          [`${e}-cell`]: {
            borderBottom: a,
            transition: `background ${r}`
          },
          [`${e}-expanded-row`]: {
            [`${c}${c}-fixed`]: {
              position: "sticky",
              insetInlineStart: 0,
              overflow: "hidden",
              width: `calc(var(--virtual-width) - ${A(n)})`,
              borderInlineEnd: "none"
            }
          }
        },
        [`${e}-bordered`]: {
          [`${e}-tbody-virtual`]: {
            "&:after": {
              content: '""',
              insetInline: 0,
              bottom: 0,
              borderBottom: a,
              position: "absolute"
            },
            [`${e}-cell`]: {
              borderInlineEnd: a,
              [`&${e}-cell-fix-right-first:before`]: {
                content: '""',
                position: "absolute",
                insetBlock: 0,
                insetInlineStart: d(n).mul(-1).equal(),
                borderInlineStart: a
              }
            }
          },
          [`&${e}-virtual`]: {
            [`${e}-placeholder ${e}-cell`]: {
              borderInlineEnd: a,
              borderBottom: a
            }
          }
        }
      }
    };
  };
  Fc = (t) => {
    const { componentCls: e, fontWeightStrong: r, tablePaddingVertical: n, tablePaddingHorizontal: o, tableExpandColumnWidth: i, lineWidth: d, lineType: a, tableBorderColor: c, tableFontSize: s, tableBg: m, tableRadius: u, tableHeaderTextColor: f, motionDurationMid: v, tableHeaderBg: g, tableHeaderCellSplitColor: b, tableFooterTextColor: p, tableFooterBg: y, calc: C } = t, x = `${A(d)} ${a} ${c}`;
    return {
      [`${e}-wrapper`]: Object.assign(Object.assign({
        clear: "both",
        maxWidth: "100%"
      }, Oa()), {
        [e]: Object.assign(Object.assign({}, sn(t)), {
          fontSize: s,
          background: m,
          borderRadius: `${A(u)} ${A(u)} 0 0`,
          scrollbarColor: `${t.tableScrollThumbBg} ${t.tableScrollBg}`
        }),
        table: {
          width: "100%",
          textAlign: "start",
          borderRadius: `${A(u)} ${A(u)} 0 0`,
          borderCollapse: "separate",
          borderSpacing: 0
        },
        [`
          ${e}-cell,
          ${e}-thead > tr > th,
          ${e}-tbody > tr > th,
          ${e}-tbody > tr > td,
          tfoot > tr > th,
          tfoot > tr > td
        `]: {
          position: "relative",
          padding: `${A(n)} ${A(o)}`,
          overflowWrap: "break-word"
        },
        [`${e}-title`]: {
          padding: `${A(n)} ${A(o)}`
        },
        [`${e}-thead`]: {
          "\n          > tr > th,\n          > tr > td\n        ": {
            position: "relative",
            color: f,
            fontWeight: r,
            textAlign: "start",
            background: g,
            borderBottom: x,
            transition: `background ${v} ease`,
            "&[colspan]:not([colspan='1'])": {
              textAlign: "center"
            },
            [`&:not(:last-child):not(${e}-selection-column):not(${e}-row-expand-icon-cell):not([colspan])::before`]: {
              position: "absolute",
              top: "50%",
              insetInlineEnd: 0,
              width: 1,
              height: "1.6em",
              backgroundColor: b,
              transform: "translateY(-50%)",
              transition: `background-color ${v}`,
              content: '""'
            }
          },
          "> tr:not(:last-child) > th[colspan]": {
            borderBottom: 0
          }
        },
        [`${e}-tbody`]: {
          "> tr": {
            "> th, > td": {
              transition: `background ${v}, border-color ${v}`,
              borderBottom: x,
              [`
              > ${e}-wrapper:only-child,
              > ${e}-expanded-row-fixed > ${e}-wrapper:only-child
            `]: {
                [e]: {
                  marginBlock: A(C(n).mul(-1).equal()),
                  marginInline: `${A(C(i).sub(o).equal())}
                ${A(C(o).mul(-1).equal())}`,
                  [`${e}-tbody > tr:last-child > td`]: {
                    borderBottomWidth: 0,
                    "&:first-child, &:last-child": {
                      borderRadius: 0
                    }
                  }
                }
              }
            },
            "> th": {
              position: "relative",
              color: f,
              fontWeight: r,
              textAlign: "start",
              background: g,
              borderBottom: x,
              transition: `background ${v} ease`
            }
          }
        },
        [`${e}-footer`]: {
          padding: `${A(n)} ${A(o)}`,
          color: p,
          background: y
        }
      })
    };
  };
  Wc = (t) => {
    const { colorFillAlter: e, colorBgContainer: r, colorTextHeading: n, colorFillSecondary: o, colorFillContent: i, controlItemBgActive: d, controlItemBgActiveHover: a, padding: c, paddingSM: s, paddingXS: m, colorBorderSecondary: u, borderRadiusLG: f, controlHeight: v, colorTextPlaceholder: g, fontSize: b, fontSizeSM: p, lineHeight: y, lineWidth: C, colorIcon: x, colorIconHover: w, opacityLoading: S, controlInteractiveSize: E } = t, I = new Zt(o).onBackground(r).toHexString(), P = new Zt(i).onBackground(r).toHexString(), h = new Zt(e).onBackground(r).toHexString(), K = new Zt(x), z = new Zt(w), R = E / 2 - C, k = R * 2 + C * 3;
    return {
      headerBg: h,
      headerColor: n,
      headerSortActiveBg: I,
      headerSortHoverBg: P,
      bodySortBg: h,
      rowHoverBg: h,
      rowSelectedBg: d,
      rowSelectedHoverBg: a,
      rowExpandedBg: e,
      cellPaddingBlock: c,
      cellPaddingInline: c,
      cellPaddingBlockMD: s,
      cellPaddingInlineMD: m,
      cellPaddingBlockSM: m,
      cellPaddingInlineSM: m,
      borderColor: u,
      headerBorderRadius: f,
      footerBg: h,
      footerColor: n,
      cellFontSize: b,
      cellFontSizeMD: b,
      cellFontSizeSM: b,
      headerSplitColor: u,
      fixedHeaderSortActiveBg: I,
      headerFilterHoverBg: i,
      filterDropdownMenuBg: r,
      filterDropdownBg: r,
      expandIconBg: r,
      selectionColumnWidth: v,
      stickyScrollBarBg: g,
      stickyScrollBarBorderRadius: 100,
      expandIconMarginTop: (b * y - C * 3) / 2 - Math.ceil((p * 1.4 - C * 3) / 2),
      headerIconColor: K.clone().setA(K.a * S).toRgbString(),
      headerIconHoverColor: z.clone().setA(z.a * S).toRgbString(),
      expandIconHalfInner: R,
      expandIconSize: k,
      expandIconScale: E / k
    };
  };
  go = 2;
  Vc = hn("Table", (t) => {
    const { colorTextHeading: e, colorSplit: r, colorBgContainer: n, controlInteractiveSize: o, headerBg: i, headerColor: d, headerSortActiveBg: a, headerSortHoverBg: c, bodySortBg: s, rowHoverBg: m, rowSelectedBg: u, rowSelectedHoverBg: f, rowExpandedBg: v, cellPaddingBlock: g, cellPaddingInline: b, cellPaddingBlockMD: p, cellPaddingInlineMD: y, cellPaddingBlockSM: C, cellPaddingInlineSM: x, borderColor: w, footerBg: S, footerColor: E, headerBorderRadius: I, cellFontSize: P, cellFontSizeMD: h, cellFontSizeSM: K, headerSplitColor: z, fixedHeaderSortActiveBg: R, headerFilterHoverBg: k, filterDropdownBg: N, expandIconBg: $, selectionColumnWidth: O, stickyScrollBarBg: D, calc: _ } = t, M = yn(t, {
      tableFontSize: P,
      tableBg: n,
      tableRadius: I,
      tablePaddingVertical: g,
      tablePaddingHorizontal: b,
      tablePaddingVerticalMiddle: p,
      tablePaddingHorizontalMiddle: y,
      tablePaddingVerticalSmall: C,
      tablePaddingHorizontalSmall: x,
      tableBorderColor: w,
      tableHeaderTextColor: d,
      tableHeaderBg: i,
      tableFooterTextColor: E,
      tableFooterBg: S,
      tableHeaderCellSplitColor: z,
      tableHeaderSortBg: a,
      tableHeaderSortHoverBg: c,
      tableBodySortBg: s,
      tableFixedHeaderSortActiveBg: R,
      tableHeaderFilterActiveBg: k,
      tableFilterDropdownBg: N,
      tableRowHoverBg: m,
      tableSelectedRowBg: u,
      tableSelectedRowHoverBg: f,
      zIndexTableFixed: go,
      zIndexTableSticky: _(go).add(1).equal({
        unit: false
      }),
      tableFontSizeMiddle: h,
      tableFontSizeSmall: K,
      tableSelectionColumnWidth: O,
      tableExpandIconBg: $,
      tableExpandColumnWidth: _(o).add(_(t.padding).mul(2)).equal(),
      tableExpandedRowBg: v,
      tableFilterDropdownWidth: 120,
      tableFilterDropdownHeight: 264,
      tableFilterDropdownSearchWidth: 140,
      tableScrollThumbSize: 8,
      tableScrollThumbBg: D,
      tableScrollThumbBgHover: e,
      tableScrollBg: r
    });
    return [
      Fc(M),
      Mc(M),
      po(M),
      Hc(M),
      Tc(M),
      kc(M),
      zc(M),
      Pc(M),
      po(M),
      Kc(M),
      Lc(M),
      Dc(M),
      jc(M),
      Oc(M),
      _c(M),
      Bc(M),
      Ac(M)
    ];
  }, Wc, {
    unitless: {
      expandIconScale: true
    }
  });
  qc = [];
  Xc = (t, e) => {
    var r, n;
    const { prefixCls: o, className: i, rootClassName: d, style: a, size: c, bordered: s, dropdownPrefixCls: m, dataSource: u, pagination: f, rowSelection: v, rowKey: g = "key", rowClassName: b, columns: p, children: y, childrenColumnName: C, onChange: x, getPopupContainer: w, loading: S, expandIcon: E, expandable: I, expandedRowRender: P, expandIconColumnIndex: h, indentSize: K, scroll: z, sortDirections: R, locale: k, showSorterTooltip: N = {
      target: "full-header"
    }, virtual: $ } = t;
    er();
    const O = l.useMemo(() => p || lr(y), [
      p,
      y
    ]), D = l.useMemo(() => O.some((ie) => ie.responsive), [
      O
    ]), _ = So(D), M = l.useMemo(() => {
      const ie = new Set(Object.keys(_).filter((ce) => _[ce]));
      return O.filter((ce) => !ce.responsive || ce.responsive.some((Ke) => ie.has(Ke)));
    }, [
      O,
      _
    ]), G = xo(t, [
      "className",
      "style",
      "columns"
    ]), { locale: ee = Ka, direction: ye, table: oe, renderEmpty: pe, getPrefixCls: xe, getPopupContainer: ue } = l.useContext(bn), J = wo(c), te = Object.assign(Object.assign({}, ee.Table), k), Ce = u || qc, le = xe("table", o), U = xe("dropdown", m), [, j] = Jn(), H = Xa(le), [q, Z, F] = Vc(le, H), ne = Object.assign(Object.assign({
      childrenColumnName: C,
      expandIconColumnIndex: h
    }, I), {
      expandIcon: (r = I == null ? void 0 : I.expandIcon) !== null && r !== void 0 ? r : (n = oe == null ? void 0 : oe.expandable) === null || n === void 0 ? void 0 : n.expandIcon
    }), { childrenColumnName: Ie = "children" } = ne, We = l.useMemo(() => Ce.some((ie) => ie == null ? void 0 : ie[Ie]) ? "nest" : P || (I == null ? void 0 : I.expandedRowRender) ? "row" : null, [
      Ce
    ]), ke = {
      body: l.useRef(null)
    }, B = js(le), V = l.useRef(null), ae = l.useRef(null);
    _s(e, () => Object.assign(Object.assign({}, ae.current), {
      nativeElement: V.current
    }));
    const fe = l.useMemo(() => typeof g == "function" ? g : (ie) => ie == null ? void 0 : ie[g], [
      g
    ]), [me] = xc(Ce, Ie, fe), Oe = {}, ze = function(ie, ce) {
      let Ke = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
      var Be, Xe, at, it;
      const Ve = Object.assign(Object.assign({}, Oe), ie);
      Ke && ((Be = Oe.resetPagination) === null || Be === void 0 || Be.call(Oe), !((Xe = Ve.pagination) === null || Xe === void 0) && Xe.current && (Ve.pagination.current = 1), f && ((at = f.onChange) === null || at === void 0 || at.call(f, 1, (it = Ve.pagination) === null || it === void 0 ? void 0 : it.pageSize))), z && z.scrollToFirstRowOnChange !== false && ke.body.current && ei(0, {
        getContainer: () => ke.body.current
      }), x == null ? void 0 : x(Ve.pagination, Ve.filters, Ve.sorter, {
        currentDataSource: Un(Yn(Ce, Ve.sorterStates, Ie), Ve.filterStates, Ie),
        action: ce
      });
    }, je = (ie, ce) => {
      ze({
        sorter: ie,
        sorterStates: ce
      }, "sort", false);
    }, [ge, ve, Q, L] = $c({
      prefixCls: le,
      mergedColumns: M,
      onSorterChange: je,
      sortDirections: R || [
        "ascend",
        "descend"
      ],
      tableLocale: te,
      showSorterTooltip: N
    }), Ne = l.useMemo(() => Yn(Ce, ve, Ie), [
      Ce,
      ve
    ]);
    Oe.sorter = L(), Oe.sorterStates = ve;
    const Te = (ie, ce) => {
      ze({
        filters: ie,
        filterStates: ce
      }, "filter", true);
    }, [se, Pe, Se] = bc({
      prefixCls: le,
      locale: te,
      dropdownPrefixCls: U,
      mergedColumns: M,
      onFilterChange: Te,
      getPopupContainer: w || ue,
      rootClassName: Y(d, H)
    }), Le = Un(Ne, Pe, Ie);
    Oe.filters = Se, Oe.filterStates = Pe;
    const Ae = l.useMemo(() => {
      const ie = {};
      return Object.keys(Se).forEach((ce) => {
        Se[ce] !== null && (ie[ce] = Se[ce]);
      }), Object.assign(Object.assign({}, Q), {
        filters: ie
      });
    }, [
      Q,
      Se
    ]), [Ue] = Nc(Ae), vt = (ie, ce) => {
      ze({
        pagination: Object.assign(Object.assign({}, Oe.pagination), {
          current: ie,
          pageSize: ce
        })
      }, "paginate");
    }, [De, xt] = wc(Le.length, vt, f);
    Oe.pagination = f === false ? {} : Sc(De, f), Oe.resetPagination = xt;
    const Ct = l.useMemo(() => {
      if (f === false || !De.pageSize) return Le;
      const { current: ie = 1, total: ce, pageSize: Ke = da } = De;
      return Le.length < ce ? Le.length > Ke ? Le.slice((ie - 1) * Ke, ie * Ke) : Le : Le.slice((ie - 1) * Ke, ie * Ke);
    }, [
      !!f,
      Le,
      De == null ? void 0 : De.current,
      De == null ? void 0 : De.pageSize,
      De == null ? void 0 : De.total
    ]), [Ge, nt] = Bs({
      prefixCls: le,
      data: Le,
      pageData: Ct,
      getRowKey: fe,
      getRecordByKey: me,
      expandType: We,
      childrenColumnName: Ie,
      locale: te,
      getPopupContainer: w || ue
    }, v), rt = (ie, ce, Ke) => {
      let Be;
      return typeof b == "function" ? Be = Y(b(ie, ce, Ke)) : Be = Y(b), Y({
        [`${le}-row-selected`]: nt.has(fe(ie, ce))
      }, Be);
    };
    ne.__PARENT_RENDER_ICON__ = ne.expandIcon, ne.expandIcon = ne.expandIcon || E || Hs(te), We === "nest" && ne.expandIconColumnIndex === void 0 ? ne.expandIconColumnIndex = v ? 1 : 0 : ne.expandIconColumnIndex > 0 && v && (ne.expandIconColumnIndex -= 1), typeof ne.indentSize != "number" && (ne.indentSize = typeof K == "number" ? K : 15);
    const Ye = l.useCallback((ie) => Ue(Ge(se(ge(ie)))), [
      ge,
      se,
      Ge
    ]);
    let qe, Je;
    if (f !== false && (De == null ? void 0 : De.total)) {
      let ie;
      De.size ? ie = De.size : ie = J === "small" || J === "middle" ? "small" : void 0;
      const ce = (Xe) => l.createElement(Ki, Object.assign({}, De, {
        className: Y(`${le}-pagination ${le}-pagination-${Xe}`, De.className),
        size: ie
      })), Ke = ye === "rtl" ? "left" : "right", { position: Be } = De;
      if (Be !== null && Array.isArray(Be)) {
        const Xe = Be.find((Ve) => Ve.includes("top")), at = Be.find((Ve) => Ve.includes("bottom")), it = Be.every((Ve) => `${Ve}` == "none");
        !Xe && !at && !it && (Je = ce(Ke)), Xe && (qe = ce(Xe.toLowerCase().replace("top", ""))), at && (Je = ce(at.toLowerCase().replace("bottom", "")));
      } else Je = ce(Ke);
    }
    let Me;
    typeof S == "boolean" ? Me = {
      spinning: S
    } : typeof S == "object" && (Me = Object.assign({
      spinning: true
    }, S));
    const _e = Y(F, H, `${le}-wrapper`, oe == null ? void 0 : oe.className, {
      [`${le}-wrapper-rtl`]: ye === "rtl"
    }, i, d, Z), ot = Object.assign(Object.assign({}, oe == null ? void 0 : oe.style), a), Xt = typeof (k == null ? void 0 : k.emptyText) < "u" ? k.emptyText : (pe == null ? void 0 : pe("Table")) || l.createElement(Ua, {
      componentName: "Table"
    }), Ut = $ ? Ic : Rc, ht = {}, Gt = l.useMemo(() => {
      const { fontSize: ie, lineHeight: ce, lineWidth: Ke, padding: Be, paddingXS: Xe, paddingSM: at } = j, it = Math.floor(ie * ce);
      switch (J) {
        case "middle":
          return at * 2 + it + Ke;
        case "small":
          return Xe * 2 + it + Ke;
        default:
          return Be * 2 + it + Ke;
      }
    }, [
      j,
      J
    ]);
    return $ && (ht.listItemHeight = Gt), q(l.createElement("div", {
      ref: V,
      className: _e,
      style: ot
    }, l.createElement(Bo, Object.assign({
      spinning: false
    }, Me), qe, l.createElement(Ut, Object.assign({}, ht, G, {
      ref: ae,
      columns: M,
      direction: ye,
      expandable: ne,
      prefixCls: le,
      className: Y({
        [`${le}-middle`]: J === "middle",
        [`${le}-small`]: J === "small",
        [`${le}-bordered`]: s,
        [`${le}-empty`]: Ce.length === 0
      }, F, H, Z),
      data: Ct,
      rowKey: fe,
      rowClassName: rt,
      emptyText: Xt,
      internalHooks: dn,
      internalRefs: ke,
      transformColumns: Ye,
      getContainerWidth: B
    })), Je)));
  };
  Uc = l.forwardRef(Xc);
  Gc = (t, e) => {
    const r = l.useRef(0);
    return r.current += 1, l.createElement(Uc, Object.assign({}, t, {
      ref: e,
      _renderTimes: r.current
    }));
  };
  Rt = l.forwardRef(Gc);
  Rt.SELECTION_COLUMN = wt;
  Rt.EXPAND_COLUMN = bt;
  Rt.SELECTION_ALL = Fn;
  Rt.SELECTION_INVERT = Wn;
  Rt.SELECTION_NONE = Vn;
  Rt.Column = Ns;
  Rt.ColumnGroup = Rs;
  Rt.Summary = Ao;
});
export {
  Rt as F,
  Bo as S,
  __tla
};
