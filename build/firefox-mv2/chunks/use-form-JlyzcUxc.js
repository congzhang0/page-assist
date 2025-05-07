import { r as i, g as ge } from "./FontSizeProvider-C1DZf1x-.js";
function pe(t) {
  if (!/^[0-9a-zA-Z-]+$/.test(t)) throw new Error(`[@mantine/use-form] Form name "${t}" is invalid, it should contain only letters, numbers and dashes`);
}
const Se = typeof window < "u" ? i.useLayoutEffect : i.useEffect;
function m(t, e) {
  Se(() => {
    if (t) return window.addEventListener(t, e), () => window.removeEventListener(t, e);
  }, [t]);
}
function Fe(t, e) {
  t && pe(t), m(`mantine-form:${t}:set-field-value`, (r) => e.setFieldValue(r.detail.path, r.detail.value)), m(`mantine-form:${t}:set-values`, (r) => e.setValues(r.detail)), m(`mantine-form:${t}:set-initial-values`, (r) => e.setInitialValues(r.detail)), m(`mantine-form:${t}:set-errors`, (r) => e.setErrors(r.detail)), m(`mantine-form:${t}:set-field-error`, (r) => e.setFieldError(r.detail.path, r.detail.error)), m(`mantine-form:${t}:clear-field-error`, (r) => e.clearFieldError(r.detail)), m(`mantine-form:${t}:clear-errors`, e.clearErrors), m(`mantine-form:${t}:reset`, e.reset), m(`mantine-form:${t}:validate`, e.validate), m(`mantine-form:${t}:validate-field`, (r) => e.validateField(r.detail)), m(`mantine-form:${t}:reorder-list-item`, (r) => e.reorderListItem(r.detail.path, r.detail.payload)), m(`mantine-form:${t}:remove-list-item`, (r) => e.removeListItem(r.detail.path, r.detail.index)), m(`mantine-form:${t}:insert-list-item`, (r) => e.insertListItem(r.detail.path, r.detail.item, r.detail.index)), m(`mantine-form:${t}:set-dirty`, (r) => e.setDirty(r.detail)), m(`mantine-form:${t}:set-touched`, (r) => e.setTouched(r.detail)), m(`mantine-form:${t}:reset-dirty`, (r) => e.resetDirty(r.detail)), m(`mantine-form:${t}:reset-touched`, e.resetTouched);
}
function me(t) {
  return (e) => {
    if (!e) t(e);
    else if (typeof e == "function") t(e);
    else if (typeof e == "object" && "nativeEvent" in e) {
      const { currentTarget: r } = e;
      r instanceof HTMLInputElement ? r.type === "checkbox" ? t(r.checked) : t(r.value) : (r instanceof HTMLTextAreaElement || r instanceof HTMLSelectElement) && t(r.value);
    } else t(e);
  };
}
function X(t) {
  return t === null || typeof t != "object" ? {} : Object.keys(t).reduce((e, r) => {
    const n = t[r];
    return n != null && n !== false && (e[r] = n), e;
  }, {});
}
function je(t) {
  const [e, r] = i.useState(X(t)), n = i.useRef(e), s = i.useCallback((u) => {
    r((f) => {
      const V = X(typeof u == "function" ? u(f) : u);
      return n.current = V, V;
    });
  }, []), o = i.useCallback(() => s({}), []), c = i.useCallback((u) => {
    n.current[u] !== void 0 && s((f) => {
      const V = { ...f };
      return delete V[u], V;
    });
  }, [e]), a = i.useCallback((u, f) => {
    f == null || f === false ? c(u) : n.current[u] !== f && s((V) => ({ ...V, [u]: f }));
  }, [e]);
  return { errorsState: e, setErrors: s, clearErrors: o, setFieldError: a, clearFieldError: c };
}
function Z(t, e) {
  if (e === null || typeof e != "object") return {};
  const r = { ...e };
  return Object.keys(e).forEach((n) => {
    n.includes(`${String(t)}.`) && delete r[n];
  }), r;
}
function x(t, e) {
  const r = t.substring(e.length + 1).split(".")[0];
  return parseInt(r, 10);
}
function ee(t, e, r, n) {
  if (e === void 0) return r;
  const s = `${String(t)}`;
  let o = r;
  n === -1 && (o = Z(`${s}.${e}`, o));
  const c = { ...o }, a = /* @__PURE__ */ new Set();
  return Object.entries(o).filter(([u]) => {
    if (!u.startsWith(`${s}.`)) return false;
    const f = x(u, s);
    return Number.isNaN(f) ? false : f >= e;
  }).forEach(([u, f]) => {
    const V = x(u, s), F = u.replace(`${s}.${V}`, `${s}.${V + n}`);
    c[F] = f, a.add(F), a.has(u) || delete c[u];
  }), c;
}
function he(t, { from: e, to: r }, n) {
  const s = `${t}.${e}`, o = `${t}.${r}`, c = { ...n };
  return Object.keys(n).every((a) => {
    let u, f;
    if (a.startsWith(s) && (u = a, f = a.replace(s, o)), a.startsWith(o) && (u = a.replace(o, s), f = a), u && f) {
      const V = c[u], F = c[f];
      return F === void 0 ? delete c[u] : c[u] = F, V === void 0 ? delete c[f] : c[f] = V, false;
    }
    return true;
  }), c;
}
function te(t, e, r) {
  typeof r.value == "object" && (r.value = P(r.value)), !r.enumerable || r.get || r.set || !r.configurable || !r.writable || e === "__proto__" ? Object.defineProperty(t, e, r) : t[e] = r.value;
}
function P(t) {
  if (typeof t != "object") return t;
  var e = 0, r, n, s, o = Object.prototype.toString.call(t);
  if (o === "[object Object]" ? s = Object.create(t.__proto__ || null) : o === "[object Array]" ? s = Array(t.length) : o === "[object Set]" ? (s = /* @__PURE__ */ new Set(), t.forEach(function(c) {
    s.add(P(c));
  })) : o === "[object Map]" ? (s = /* @__PURE__ */ new Map(), t.forEach(function(c, a) {
    s.set(P(a), P(c));
  })) : o === "[object Date]" ? s = /* @__PURE__ */ new Date(+t) : o === "[object RegExp]" ? s = new RegExp(t.source, t.flags) : o === "[object DataView]" ? s = new t.constructor(P(t.buffer)) : o === "[object ArrayBuffer]" ? s = t.slice(0) : o.slice(-6) === "Array]" && (s = new t.constructor(t)), s) {
    for (n = Object.getOwnPropertySymbols(t); e < n.length; e++) te(s, n[e], Object.getOwnPropertyDescriptor(t, n[e]));
    for (e = 0, n = Object.getOwnPropertyNames(t); e < n.length; e++) Object.hasOwnProperty.call(s, r = n[e]) && s[r] === t[r] || te(s, r, Object.getOwnPropertyDescriptor(t, r));
  }
  return s || t;
}
function ce(t) {
  return typeof t != "string" ? [] : t.split(".");
}
function j(t, e) {
  const r = ce(t);
  if (r.length === 0 || typeof e != "object" || e === null) return;
  let n = e[r[0]];
  for (let s = 1; s < r.length && n != null; s += 1) n = n[r[s]];
  return n;
}
function N(t, e, r) {
  const n = ce(t);
  if (n.length === 0) return r;
  const s = P(r);
  if (n.length === 1) return s[n[0]] = e, s;
  let o = s[n[0]];
  for (let c = 1; c < n.length - 1; c += 1) {
    if (o === void 0) return s;
    o = o[n[c]];
  }
  return o[n[n.length - 1]] = e, s;
}
function ke(t, { from: e, to: r }, n) {
  const s = j(t, n);
  if (!Array.isArray(s)) return n;
  const o = [...s], c = s[e];
  return o.splice(e, 1), o.splice(r, 0, c), N(t, o, n);
}
function Ce(t, e, r, n) {
  const s = j(t, n);
  if (!Array.isArray(s)) return n;
  const o = [...s];
  return o.splice(typeof r == "number" ? r : o.length, 0, e), N(t, o, n);
}
function De(t, e, r) {
  const n = j(t, r);
  return Array.isArray(n) ? N(t, n.filter((s, o) => o !== e), r) : r;
}
function Oe(t, e, r, n) {
  const s = j(t, n);
  if (!Array.isArray(s) || s.length <= r) return n;
  const o = [...s];
  return o[r] = e, N(t, o, n);
}
function we({ $values: t, $errors: e, $status: r }) {
  const n = i.useCallback((a, u) => {
    r.clearFieldDirty(a), e.setErrors((f) => he(a, u, f)), t.setValues({ values: ke(a, u, t.refValues.current), updateState: true });
  }, []), s = i.useCallback((a, u) => {
    r.clearFieldDirty(a), e.setErrors((f) => ee(a, u, f, -1)), t.setValues({ values: De(a, u, t.refValues.current), updateState: true });
  }, []), o = i.useCallback((a, u, f) => {
    r.clearFieldDirty(a), e.setErrors((V) => ee(a, f, V, 1)), t.setValues({ values: Ce(a, u, f, t.refValues.current), updateState: true });
  }, []), c = i.useCallback((a, u, f) => {
    r.clearFieldDirty(a), t.setValues({ values: Oe(a, f, u, t.refValues.current), updateState: true });
  }, []);
  return { reorderListItem: n, removeListItem: s, insertListItem: o, replaceListItem: c };
}
var U, re;
function $e() {
  return re || (re = 1, U = function t(e, r) {
    if (e === r) return true;
    if (e && r && typeof e == "object" && typeof r == "object") {
      if (e.constructor !== r.constructor) return false;
      var n, s, o;
      if (Array.isArray(e)) {
        if (n = e.length, n != r.length) return false;
        for (s = n; s-- !== 0; ) if (!t(e[s], r[s])) return false;
        return true;
      }
      if (e.constructor === RegExp) return e.source === r.source && e.flags === r.flags;
      if (e.valueOf !== Object.prototype.valueOf) return e.valueOf() === r.valueOf();
      if (e.toString !== Object.prototype.toString) return e.toString() === r.toString();
      if (o = Object.keys(e), n = o.length, n !== Object.keys(r).length) return false;
      for (s = n; s-- !== 0; ) if (!Object.prototype.hasOwnProperty.call(r, o[s])) return false;
      for (s = n; s-- !== 0; ) {
        var c = o[s];
        if (!t(e[c], r[c])) return false;
      }
      return true;
    }
    return e !== e && r !== r;
  }), U;
}
var Ie = $e();
const K = ge(Ie);
function q(t, e) {
  const r = Object.keys(t);
  if (typeof e == "string") {
    const n = r.filter((s) => s.startsWith(`${e}.`));
    return t[e] || n.some((s) => t[s]) || false;
  }
  return r.some((n) => t[n]);
}
function Re({ initialDirty: t, initialTouched: e, mode: r, $values: n }) {
  const [s, o] = i.useState(e), [c, a] = i.useState(t), u = i.useRef(e), f = i.useRef(t), V = i.useCallback((b) => {
    const p = typeof b == "function" ? b(u.current) : b;
    u.current = p, r === "controlled" && o(p);
  }, []), F = i.useCallback((b, p = false) => {
    const S = typeof b == "function" ? b(f.current) : b;
    f.current = S, (r === "controlled" || p) && a(S);
  }, []), h = i.useCallback(() => V({}), []), L = i.useCallback((b) => {
    const p = b ? { ...n.refValues.current, ...b } : n.refValues.current;
    n.setValuesSnapshot(p), F({});
  }, []), v = i.useCallback((b, p) => {
    V((S) => q(S, b) === p ? S : { ...S, [b]: p });
  }, []), d = i.useCallback((b, p, S) => {
    F((D) => q(D, b) === p ? D : { ...D, [b]: p }, S);
  }, []), y = i.useCallback((b, p) => {
    const S = q(f.current, b), D = !K(j(b, n.getValuesSnapshot()), p), A = Z(b, f.current);
    A[b] = D, F(A, S !== D);
  }, []), g = i.useCallback((b) => q(u.current, b), []), O = i.useCallback((b) => F((p) => {
    if (typeof b != "string") return p;
    const S = Z(b, p);
    return delete S[b], K(S, p) ? p : S;
  }), []), k = i.useCallback((b) => {
    if (b) {
      const S = j(b, f.current);
      if (typeof S == "boolean") return S;
      const D = j(b, n.refValues.current), A = j(b, n.valuesSnapshot.current);
      return !K(D, A);
    }
    return Object.keys(f.current).length > 0 ? q(f.current) : !K(n.refValues.current, n.valuesSnapshot.current);
  }, []), R = i.useCallback(() => f.current, []), w = i.useCallback(() => u.current, []);
  return { touchedState: s, dirtyState: c, touchedRef: u, dirtyRef: f, setTouched: V, setDirty: F, resetDirty: L, resetTouched: h, isTouched: g, setFieldTouched: v, setFieldDirty: d, setTouchedState: o, setDirtyState: a, clearFieldDirty: O, isDirty: k, getDirty: R, getTouched: w, setCalculatedFieldDirty: y };
}
function Te({ initialValues: t, onValuesChange: e, mode: r }) {
  const n = i.useRef(false), [s, o] = i.useState(t || {}), c = i.useRef(s), a = i.useRef(s), u = i.useCallback(({ values: d, subscribers: y, updateState: g = true, mergeWithPreviousValues: O = true }) => {
    const k = c.current, R = d instanceof Function ? d(c.current) : d, w = O ? { ...k, ...R } : R;
    c.current = w, g && o(w), e == null ? void 0 : e(w, k), y == null ? void 0 : y.filter(Boolean).forEach((b) => b({ updatedValues: w, previousValues: k }));
  }, [e]), f = i.useCallback((d) => {
    var _a;
    const y = j(d.path, c.current), g = d.value instanceof Function ? d.value(y) : d.value;
    if (y !== g) {
      const O = c.current, k = N(d.path, g, c.current);
      u({ values: k, updateState: d.updateState }), (_a = d.subscribers) == null ? void 0 : _a.filter(Boolean).forEach((R) => R({ path: d.path, updatedValues: k, previousValues: O }));
    }
  }, [u]), V = i.useCallback((d) => {
    a.current = d;
  }, []), F = i.useCallback((d, y) => {
    n.current || (n.current = true, u({ values: d, updateState: r === "controlled" }), V(d), y());
  }, [u]), h = i.useCallback(() => {
    u({ values: a.current, updateState: true, mergeWithPreviousValues: false });
  }, [u]), L = i.useCallback(() => c.current, []), v = i.useCallback(() => a.current, []);
  return { initialized: n, stateValues: s, refValues: c, valuesSnapshot: a, setValues: u, setFieldValue: f, resetValues: h, setValuesSnapshot: V, initialize: F, getValues: L, getValuesSnapshot: v };
}
function Ae({ $status: t }) {
  const e = i.useRef({}), r = i.useCallback((s, o) => {
    i.useEffect(() => (e.current[s] = e.current[s] || [], e.current[s].push(o), () => {
      e.current[s] = e.current[s].filter((c) => c !== o);
    }), [o]);
  }, []), n = i.useCallback((s) => e.current[s] ? e.current[s].map((o) => (c) => o({ previousValue: j(s, c.previousValues), value: j(s, c.updatedValues), touched: t.isTouched(s), dirty: t.isDirty(s) })) : [], []);
  return { subscribers: e, watch: r, getFieldSubscribers: n };
}
function se(t, e) {
  return t ? `${t}-${e.toString()}` : e.toString();
}
const W = Symbol("root-rule");
function ne(t) {
  const e = X(t);
  return { hasErrors: Object.keys(e).length > 0, errors: e };
}
function G(t, e, r = "", n = {}) {
  return typeof t != "object" || t === null ? n : Object.keys(t).reduce((s, o) => {
    const c = t[o], a = `${r === "" ? "" : `${r}.`}${o}`, u = j(a, e);
    let f = false;
    return typeof c == "function" && (s[a] = c(u, e, a)), typeof c == "object" && Array.isArray(u) && (f = true, u.forEach((V, F) => G(c, e, `${a}.${F}`, s)), W in c && (s[a] = c[W](u, e, a))), typeof c == "object" && typeof u == "object" && u !== null && (f || G(c, e, a, s), W in c && (s[a] = c[W](u, e, a))), s;
  }, n);
}
function J(t, e) {
  return ne(typeof t == "function" ? t(e) : G(t, e));
}
function B(t, e, r) {
  if (typeof t != "string") return { hasError: false, error: null };
  const n = J(e, r), s = Object.keys(n.errors).find((o) => t.split(".").every((c, a) => c === o.split(".")[a]));
  return { hasError: !!s, error: s ? n.errors[s] : null };
}
const Le = "__MANTINE_FORM_INDEX__";
function oe(t, e) {
  return e ? typeof e == "boolean" ? e : Array.isArray(e) ? e.includes(t.replace(/[.][0-9]+/g, `.${Le}`)) : false : false;
}
function ve({ name: t, mode: e = "controlled", initialValues: r, initialErrors: n = {}, initialDirty: s = {}, initialTouched: o = {}, clearInputErrorOnChange: c = true, validateInputOnChange: a = false, validateInputOnBlur: u = false, onValuesChange: f, transformValues: V = (d) => d, enhanceGetInputProps: F, validate: h, onSubmitPreventDefault: L = "always", touchTrigger: v = "change" } = {}) {
  const d = je(n), y = Te({ initialValues: r, onValuesChange: f, mode: e }), g = Re({ initialDirty: s, initialTouched: o, $values: y, mode: e }), O = we({ $values: y, $errors: d, $status: g }), k = Ae({ $status: g }), [R, w] = i.useState(0), [b, p] = i.useState({}), [S, D] = i.useState(false), A = i.useCallback(() => {
    y.resetValues(), d.clearErrors(), g.resetDirty(), g.resetTouched(), e === "uncontrolled" && w((l) => l + 1);
  }, []), M = i.useCallback((l) => {
    c && d.clearErrors(), e === "uncontrolled" && w((E) => E + 1), Object.keys(k.subscribers.current).forEach((E) => {
      const C = j(E, y.refValues.current), $ = j(E, l);
      C !== $ && k.getFieldSubscribers(E).forEach((T) => T({ previousValues: l, updatedValues: y.refValues.current }));
    });
  }, [c]), ue = i.useCallback((l) => {
    const E = y.refValues.current;
    y.initialize(l, () => e === "uncontrolled" && w((C) => C + 1)), M(E);
  }, [M]), Q = i.useCallback((l, E, C) => {
    const $ = oe(l, a), T = E instanceof Function ? E(j(l, y.refValues.current)) : E;
    g.setCalculatedFieldDirty(l, T), v === "change" && g.setFieldTouched(l, true), !$ && c && d.clearFieldError(l), y.setFieldValue({ path: l, value: E, updateState: e === "controlled", subscribers: [...k.getFieldSubscribers(l), $ ? (_) => {
      const I = B(l, h, _.updatedValues);
      I.hasError ? d.setFieldError(l, I.error) : d.clearFieldError(l);
    } : null, (C == null ? void 0 : C.forceUpdate) !== false && e !== "controlled" ? () => p((_) => ({ ..._, [l]: (_[l] || 0) + 1 })) : null] });
  }, [f, h]), ie = i.useCallback((l) => {
    const E = y.refValues.current;
    y.setValues({ values: l, updateState: e === "controlled" }), M(E);
  }, [f, M]), Y = i.useCallback(() => {
    const l = J(h, y.refValues.current);
    return d.setErrors(l.errors), l;
  }, [h]), le = i.useCallback((l) => {
    const E = B(l, h, y.refValues.current);
    return E.hasError ? d.setFieldError(l, E.error) : d.clearFieldError(l), E;
  }, [h]), ae = (l, { type: E = "input", withError: C = true, withFocus: $ = true, ...T } = {}) => {
    const I = { onChange: me((z) => Q(l, z, { forceUpdate: false })), "data-path": se(t, l) };
    return C && (I.error = d.errorsState[l]), E === "checkbox" ? I[e === "controlled" ? "checked" : "defaultChecked"] = j(l, y.refValues.current) : I[e === "controlled" ? "value" : "defaultValue"] = j(l, y.refValues.current), $ && (I.onFocus = () => g.setFieldTouched(l, true), I.onBlur = () => {
      if (oe(l, u)) {
        const z = B(l, h, y.refValues.current);
        z.hasError ? d.setFieldError(l, z.error) : d.clearFieldError(l);
      }
    }), Object.assign(I, F == null ? void 0 : F({ inputProps: I, field: l, options: { type: E, withError: C, withFocus: $, ...T }, form: H }));
  }, fe = (l, E) => (C) => {
    L === "always" && (C == null ? void 0 : C.preventDefault());
    const $ = Y();
    if ($.hasErrors) L === "validation-failed" && (C == null ? void 0 : C.preventDefault()), E == null ? void 0 : E($.errors, y.refValues.current, C);
    else {
      const T = l == null ? void 0 : l(V(y.refValues.current), C);
      T instanceof Promise && (D(true), T.finally(() => D(false)));
    }
  }, de = (l) => V(l || y.refValues.current), be = i.useCallback((l) => {
    l.preventDefault(), A();
  }, []), ye = i.useCallback((l) => l ? !B(l, h, y.refValues.current).hasError : !J(h, y.refValues.current).hasErrors, [h]), Ve = (l) => `${R}-${l}-${b[l] || 0}`, Ee = i.useCallback((l) => document.querySelector(`[data-path="${se(t, l)}"]`), []), H = { watch: k.watch, initialized: y.initialized.current, values: y.stateValues, getValues: y.getValues, getInitialValues: y.getValuesSnapshot, setInitialValues: y.setValuesSnapshot, initialize: ue, setValues: ie, setFieldValue: Q, submitting: S, setSubmitting: D, errors: d.errorsState, setErrors: d.setErrors, setFieldError: d.setFieldError, clearFieldError: d.clearFieldError, clearErrors: d.clearErrors, resetDirty: g.resetDirty, setTouched: g.setTouched, setDirty: g.setDirty, isTouched: g.isTouched, resetTouched: g.resetTouched, isDirty: g.isDirty, getTouched: g.getTouched, getDirty: g.getDirty, reorderListItem: O.reorderListItem, insertListItem: O.insertListItem, removeListItem: O.removeListItem, replaceListItem: O.replaceListItem, reset: A, validate: Y, validateField: le, getInputProps: ae, onSubmit: fe, onReset: be, isValid: ye, getTransformedValues: de, key: Ve, getInputNode: Ee };
  return Fe(t, H), H;
}
export {
  ve as u
};
