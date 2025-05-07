import { r as n, n as $, _ as w, l as D, p as m, o as M, k as g, c as j, ac as _ } from "./FontSizeProvider-C1DZf1x-.js";
import { O as V } from "./SaveButton-B6h4W40A.js";
var A = ["prefixCls", "className", "style", "checked", "disabled", "defaultChecked", "type", "title", "onChange"], I = n.forwardRef(function(e, a) {
  var r = e.prefixCls, c = r === void 0 ? "rc-checkbox" : r, d = e.className, u = e.style, y = e.checked, o = e.disabled, f = e.defaultChecked, R = f === void 0 ? false : f, v = e.type, h = v === void 0 ? "checkbox" : v, x = e.title, i = e.onChange, E = $(e, A), s = n.useRef(null), p = n.useRef(null), N = V(R, { value: y }), k = w(N, 2), C = k[0], P = k[1];
  n.useImperativeHandle(a, function() {
    return { focus: function(t) {
      var l;
      (l = s.current) === null || l === void 0 || l.focus(t);
    }, blur: function() {
      var t;
      (t = s.current) === null || t === void 0 || t.blur();
    }, input: s.current, nativeElement: p.current };
  });
  var L = D(c, d, m(m({}, "".concat(c, "-checked"), C), "".concat(c, "-disabled"), o)), S = function(t) {
    o || ("checked" in e || P(t.target.checked), i == null ? void 0 : i({ target: g(g({}, e), {}, { type: h, checked: t.target.checked }), stopPropagation: function() {
      t.stopPropagation();
    }, preventDefault: function() {
      t.preventDefault();
    }, nativeEvent: t.nativeEvent }));
  };
  return n.createElement("span", { className: L, title: x, style: u, ref: p }, n.createElement("input", M({}, E, { className: "".concat(c, "-input"), ref: s, onChange: S, disabled: o, checked: !!C, type: h })), n.createElement("span", { className: "".concat(c, "-inner") }));
});
function T(e) {
  const a = j.useRef(null), r = () => {
    _.cancel(a.current), a.current = null;
  };
  return [() => {
    r(), a.current = _(() => {
      a.current = null;
    });
  }, (u) => {
    a.current && (u.stopPropagation(), r()), e == null ? void 0 : e(u);
  }];
}
export {
  I as C,
  T as u
};
