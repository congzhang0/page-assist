import { r as i, _ as A, h as he, i as fe, k as X, l as L, m as ie, n as ge, o as J, p as T, q as ne, s as be, v as Se, w as pe, x as $e, y as P, z as ye, A as we, B as Ce } from "./FontSizeProvider-C1DZf1x-.js";
import { O as xe, P as Re, Q as Oe, R as Ne } from "./SaveButton-B6h4W40A.js";
var k = function(t, n) {
  if (!t) return null;
  var a = { left: t.offsetLeft, right: t.parentElement.clientWidth - t.clientWidth - t.offsetLeft, width: t.clientWidth, top: t.offsetTop, bottom: t.parentElement.clientHeight - t.clientHeight - t.offsetTop, height: t.clientHeight };
  return n ? { left: 0, right: 0, width: 0, top: a.top, bottom: a.bottom, height: a.height } : { left: a.left, right: a.right, width: a.width, top: 0, bottom: 0, height: 0 };
}, y = function(t) {
  return t !== void 0 ? "".concat(t, "px") : void 0;
};
function Me(e) {
  var t = e.prefixCls, n = e.containerRef, a = e.value, o = e.getValueIndex, s = e.motionName, S = e.onMotionStart, f = e.onMotionEnd, b = e.direction, w = e.vertical, u = w === void 0 ? false : w, R = i.useRef(null), H = i.useState(a), O = A(H, 2), v = O[0], N = O[1], M = function(j) {
    var C, z = o(j), x = (C = n.current) === null || C === void 0 ? void 0 : C.querySelectorAll(".".concat(t, "-item"))[z];
    return (x == null ? void 0 : x.offsetParent) && x;
  }, E = i.useState(null), m = A(E, 2), r = m[0], I = m[1], _ = i.useState(null), g = A(_, 2), l = g[0], D = g[1];
  he(function() {
    if (v !== a) {
      var c = M(v), j = M(a), C = k(c, u), z = k(j, u);
      N(a), I(C), D(z), c && j ? S() : f();
    }
  }, [a]);
  var p = i.useMemo(function() {
    if (u) {
      var c;
      return y((c = r == null ? void 0 : r.top) !== null && c !== void 0 ? c : 0);
    }
    return y(b === "rtl" ? -(r == null ? void 0 : r.right) : r == null ? void 0 : r.left);
  }, [u, b, r]), $ = i.useMemo(function() {
    if (u) {
      var c;
      return y((c = l == null ? void 0 : l.top) !== null && c !== void 0 ? c : 0);
    }
    return y(b === "rtl" ? -(l == null ? void 0 : l.right) : l == null ? void 0 : l.left);
  }, [u, b, l]), F = function() {
    return u ? { transform: "translateY(var(--thumb-start-top))", height: "var(--thumb-start-height)" } : { transform: "translateX(var(--thumb-start-left))", width: "var(--thumb-start-width)" };
  }, B = function() {
    return u ? { transform: "translateY(var(--thumb-active-top))", height: "var(--thumb-active-height)" } : { transform: "translateX(var(--thumb-active-left))", width: "var(--thumb-active-width)" };
  }, K = function() {
    I(null), D(null), f();
  };
  return !r || !l ? null : i.createElement(fe, { visible: true, motionName: s, motionAppear: true, onAppearStart: F, onAppearActive: B, onVisibleChanged: K }, function(c, j) {
    var C = c.className, z = c.style, x = X(X({}, z), {}, { "--thumb-start-left": p, "--thumb-start-width": y(r == null ? void 0 : r.width), "--thumb-active-left": $, "--thumb-active-width": y(l == null ? void 0 : l.width), "--thumb-start-top": p, "--thumb-start-height": y(r == null ? void 0 : r.height), "--thumb-active-top": $, "--thumb-active-height": y(l == null ? void 0 : l.height) }), q = { ref: ie(R, j), style: x, className: L("".concat(t, "-thumb"), C) };
    return i.createElement("div", q);
  });
}
var Ie = ["prefixCls", "direction", "vertical", "options", "disabled", "defaultValue", "value", "name", "onChange", "className", "motionName"];
function je(e) {
  if (typeof e.title < "u") return e.title;
  if (ne(e.label) !== "object") {
    var t;
    return (t = e.label) === null || t === void 0 ? void 0 : t.toString();
  }
}
function Pe(e) {
  return e.map(function(t) {
    if (ne(t) === "object" && t !== null) {
      var n = je(t);
      return X(X({}, t), {}, { title: n });
    }
    return { label: t == null ? void 0 : t.toString(), title: t == null ? void 0 : t.toString(), value: t };
  });
}
var He = function(t) {
  var n = t.prefixCls, a = t.className, o = t.disabled, s = t.checked, S = t.label, f = t.title, b = t.value, w = t.name, u = t.onChange, R = t.onFocus, H = t.onBlur, O = t.onKeyDown, v = t.onKeyUp, N = t.onMouseDown, M = function(m) {
    o || u(m, b);
  };
  return i.createElement("label", { className: L(a, T({}, "".concat(n, "-item-disabled"), o)), onMouseDown: N }, i.createElement("input", { name: w, className: "".concat(n, "-item-input"), type: "radio", disabled: o, checked: s, onChange: M, onFocus: R, onBlur: H, onKeyDown: O, onKeyUp: v }), i.createElement("div", { className: "".concat(n, "-item-label"), title: f, "aria-selected": s }, S));
}, Ee = i.forwardRef(function(e, t) {
  var n, a, o = e.prefixCls, s = o === void 0 ? "rc-segmented" : o, S = e.direction, f = e.vertical, b = e.options, w = b === void 0 ? [] : b, u = e.disabled, R = e.defaultValue, H = e.value, O = e.name, v = e.onChange, N = e.className, M = N === void 0 ? "" : N, E = e.motionName, m = E === void 0 ? "thumb-motion" : E, r = ge(e, Ie), I = i.useRef(null), _ = i.useMemo(function() {
    return ie(I, t);
  }, [I, t]), g = i.useMemo(function() {
    return Pe(w);
  }, [w]), l = xe((n = g[0]) === null || n === void 0 ? void 0 : n.value, { value: H, defaultValue: R }), D = A(l, 2), p = D[0], $ = D[1], F = i.useState(false), B = A(F, 2), K = B[0], c = B[1], j = function(h, V) {
    $(V), v == null ? void 0 : v(V);
  }, C = Re(r, ["children"]), z = i.useState(false), x = A(z, 2), q = x[0], U = x[1], oe = i.useState(false), G = A(oe, 2), re = G[0], Y = G[1], le = function() {
    Y(true);
  }, se = function() {
    Y(false);
  }, ce = function() {
    U(false);
  }, ue = function(h) {
    h.key === "Tab" && U(true);
  }, Q = function(h) {
    var V = g.findIndex(function(ve) {
      return ve.value === p;
    }), Z = g.length, me = (V + h + Z) % Z, W = g[me];
    W && ($(W.value), v == null ? void 0 : v(W.value));
  }, de = function(h) {
    switch (h.key) {
      case "ArrowLeft":
      case "ArrowUp":
        Q(-1);
        break;
      case "ArrowRight":
      case "ArrowDown":
        Q(1);
        break;
    }
  };
  return i.createElement("div", J({ role: "radiogroup", "aria-label": "segmented control", tabIndex: u ? void 0 : 0 }, C, { className: L(s, (a = {}, T(a, "".concat(s, "-rtl"), S === "rtl"), T(a, "".concat(s, "-disabled"), u), T(a, "".concat(s, "-vertical"), f), a), M), ref: _ }), i.createElement("div", { className: "".concat(s, "-group") }, i.createElement(Me, { vertical: f, prefixCls: s, value: p, containerRef: I, motionName: "".concat(s, "-").concat(m), direction: S, getValueIndex: function(h) {
    return g.findIndex(function(V) {
      return V.value === h;
    });
  }, onMotionStart: function() {
    c(true);
  }, onMotionEnd: function() {
    c(false);
  } }), g.map(function(d) {
    var h;
    return i.createElement(He, J({}, d, { name: O, key: d.value, prefixCls: s, className: L(d.className, "".concat(s, "-item"), (h = {}, T(h, "".concat(s, "-item-selected"), d.value === p && !K), T(h, "".concat(s, "-item-focused"), re && q && d.value === p), h)), checked: d.value === p, onChange: j, onFocus: le, onBlur: se, onKeyDown: de, onKeyUp: ue, onMouseDown: ce, disabled: !!u || !!d.disabled }));
  })));
}), De = Ee;
function ee(e, t) {
  return { [`${e}, ${e}:hover, ${e}:focus`]: { color: t.colorTextDisabled, cursor: "not-allowed" } };
}
function te(e) {
  return { backgroundColor: e.itemSelectedBg, boxShadow: e.boxShadowTertiary };
}
const Be = Object.assign({ overflow: "hidden" }, we), ze = (e) => {
  const { componentCls: t } = e, n = e.calc(e.controlHeight).sub(e.calc(e.trackPadding).mul(2)).equal(), a = e.calc(e.controlHeightLG).sub(e.calc(e.trackPadding).mul(2)).equal(), o = e.calc(e.controlHeightSM).sub(e.calc(e.trackPadding).mul(2)).equal();
  return { [t]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, pe(e)), { display: "inline-block", padding: e.trackPadding, color: e.itemColor, background: e.trackBg, borderRadius: e.borderRadius, transition: `all ${e.motionDurationMid} ${e.motionEaseInOut}` }), $e(e)), { [`${t}-group`]: { position: "relative", display: "flex", alignItems: "stretch", justifyItems: "flex-start", flexDirection: "row", width: "100%" }, [`&${t}-rtl`]: { direction: "rtl" }, [`&${t}-vertical`]: { [`${t}-group`]: { flexDirection: "column" }, [`${t}-thumb`]: { width: "100%", height: 0, padding: `0 ${P(e.paddingXXS)}` } }, [`&${t}-block`]: { display: "flex" }, [`&${t}-block ${t}-item`]: { flex: 1, minWidth: 0 }, [`${t}-item`]: { position: "relative", textAlign: "center", cursor: "pointer", transition: `color ${e.motionDurationMid} ${e.motionEaseInOut}`, borderRadius: e.borderRadiusSM, transform: "translateZ(0)", "&-selected": Object.assign(Object.assign({}, te(e)), { color: e.itemSelectedColor }), "&-focused": Object.assign({}, ye(e)), "&::after": { content: '""', position: "absolute", zIndex: -1, width: "100%", height: "100%", top: 0, insetInlineStart: 0, borderRadius: "inherit", opacity: 0, transition: `opacity ${e.motionDurationMid}`, pointerEvents: "none" }, [`&:hover:not(${t}-item-selected):not(${t}-item-disabled)`]: { color: e.itemHoverColor, "&::after": { opacity: 1, backgroundColor: e.itemHoverBg } }, [`&:active:not(${t}-item-selected):not(${t}-item-disabled)`]: { color: e.itemHoverColor, "&::after": { opacity: 1, backgroundColor: e.itemActiveBg } }, "&-label": Object.assign({ minHeight: n, lineHeight: P(n), padding: `0 ${P(e.segmentedPaddingHorizontal)}` }, Be), "&-icon + *": { marginInlineStart: e.calc(e.marginSM).div(2).equal() }, "&-input": { position: "absolute", insetBlockStart: 0, insetInlineStart: 0, width: 0, height: 0, opacity: 0, pointerEvents: "none" } }, [`${t}-thumb`]: Object.assign(Object.assign({}, te(e)), { position: "absolute", insetBlockStart: 0, insetInlineStart: 0, width: 0, height: "100%", padding: `${P(e.paddingXXS)} 0`, borderRadius: e.borderRadiusSM, transition: `transform ${e.motionDurationSlow} ${e.motionEaseInOut}, height ${e.motionDurationSlow} ${e.motionEaseInOut}`, [`& ~ ${t}-item:not(${t}-item-selected):not(${t}-item-disabled)::after`]: { backgroundColor: "transparent" } }), [`&${t}-lg`]: { borderRadius: e.borderRadiusLG, [`${t}-item-label`]: { minHeight: a, lineHeight: P(a), padding: `0 ${P(e.segmentedPaddingHorizontal)}`, fontSize: e.fontSizeLG }, [`${t}-item, ${t}-thumb`]: { borderRadius: e.borderRadius } }, [`&${t}-sm`]: { borderRadius: e.borderRadiusSM, [`${t}-item-label`]: { minHeight: o, lineHeight: P(o), padding: `0 ${P(e.segmentedPaddingHorizontalSM)}` }, [`${t}-item, ${t}-thumb`]: { borderRadius: e.borderRadiusXS } } }), ee(`&-disabled ${t}-item`, e)), ee(`${t}-item-disabled`, e)), { [`${t}-thumb-motion-appear-active`]: { transition: `transform ${e.motionDurationSlow} ${e.motionEaseInOut}, width ${e.motionDurationSlow} ${e.motionEaseInOut}`, willChange: "transform, width" }, [`&${t}-shape-round`]: { borderRadius: 9999, [`${t}-item, ${t}-thumb`]: { borderRadius: 9999 } } }) };
}, Ae = (e) => {
  const { colorTextLabel: t, colorText: n, colorFillSecondary: a, colorBgElevated: o, colorFill: s, lineWidthBold: S, colorBgLayout: f } = e;
  return { trackPadding: S, trackBg: f, itemColor: t, itemHoverColor: n, itemHoverBg: a, itemSelectedBg: o, itemActiveBg: s, itemSelectedColor: n };
}, Ve = be("Segmented", (e) => {
  const { lineWidth: t, calc: n } = e, a = Se(e, { segmentedPaddingHorizontal: n(e.controlPaddingHorizontal).sub(t).equal(), segmentedPaddingHorizontalSM: n(e.controlPaddingHorizontalSM).sub(t).equal() });
  return [ze(a)];
}, Ae);
var ae = function(e, t) {
  var n = {};
  for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, a = Object.getOwnPropertySymbols(e); o < a.length; o++) t.indexOf(a[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[o]) && (n[a[o]] = e[a[o]]);
  return n;
};
function Te(e) {
  return typeof e == "object" && !!(e == null ? void 0 : e.icon);
}
const _e = i.forwardRef((e, t) => {
  const n = Oe(), { prefixCls: a, className: o, rootClassName: s, block: S, options: f = [], size: b = "middle", style: w, vertical: u, shape: R = "default", name: H = n } = e, O = ae(e, ["prefixCls", "className", "rootClassName", "block", "options", "size", "style", "vertical", "shape", "name"]), { getPrefixCls: v, direction: N, className: M, style: E } = Ce("segmented"), m = v("segmented", a), [r, I, _] = Ve(m), g = Ne(b), l = i.useMemo(() => f.map(($) => {
    if (Te($)) {
      const { icon: F, label: B } = $, K = ae($, ["icon", "label"]);
      return Object.assign(Object.assign({}, K), { label: i.createElement(i.Fragment, null, i.createElement("span", { className: `${m}-item-icon` }, F), B && i.createElement("span", null, B)) });
    }
    return $;
  }), [f, m]), D = L(o, s, M, { [`${m}-block`]: S, [`${m}-sm`]: g === "small", [`${m}-lg`]: g === "large", [`${m}-vertical`]: u, [`${m}-shape-${R}`]: R === "round" }, I, _), p = Object.assign(Object.assign({}, E), w);
  return r(i.createElement(De, Object.assign({}, O, { name: H, className: D, style: p, options: l, ref: t, prefixCls: m, direction: N, vertical: u })));
}), Le = _e;
export {
  Le as S
};
