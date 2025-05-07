var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _n2, _e, _t, _r2, _a2, _o2, _i2, _s2, _u2, _l2, _g2, _d2, _f2, _c2, _h2, _Vf_instances, m_fn, v_fn, p_fn, b_fn, y_fn, w_fn, C_fn, S_fn, x_fn, _a3, _n3, _e2, _t2, _r3, _Uf_instances, a_fn, o_fn, _b2, _n4, _e3, _t3, _r4, _a4, _o3, _i3, _s3, _dS_instances, u_fn, l_fn, _c3;
import { aE as wc, aF as ys, aG as In, aH as Ia, aI as Sa, aJ as cf, aK as Zo, aL as ws, aM as uf, aN as df, aO as ff, aP as Cs, aQ as Ba, aR as Ss, aS as mf, r as l, e as Cc, aT as Sc, aU as gf, aV as hf, aW as xc, ap as $c, aX as vf, aD as pf, aY as xs, c as ae, aZ as bf, Z as za, $ as Ha, a0 as fn, a2 as mn, ai as Yr, ax as Va, as as Qr, k as V, a_ as So, q as et, o as Ie, p as D, ar as ei, _ as te, ag as jt, a$ as Lr, b0 as yf, b1 as Ec, b2 as zi, X as un, n as rt, l as Q, a4 as wf, ae as or, a5 as Rc, Y as fe, a9 as Wr, b3 as Cf, b4 as Oc, b5 as Sf, ac as pt, i as xr, m as Tn, W as ft, b6 as Ic, s as Lt, v as mt, V as Wa, y as ne, w as Ut, x as Hi, az as Jr, B as _n, b7 as xo, b8 as xf, ad as Ac, a6 as kn, T as qr, h as ut, b9 as ti, ba as $f, bb as Ef, bc as Pc, bd as Rf, a1 as nt, be as jr, ak as Nn, bf as Pn, ah as $s, C as Nc, bg as Of, al as If, bh as ni, bi as Af, aj as Pf, E as Mr, bj as Nf, A as ri, an as Mc, a3 as Mf, am as Ff, bk as Tf, av as _f, a7 as jf, a8 as Df, bl as Lf, g as Bf, aA as zf, a as Hf, j as Es } from "./FontSizeProvider-C1DZf1x-.js";
var Vf = (_a3 = class extends wc {
  constructor(e2, t) {
    super();
    __privateAdd(this, _Vf_instances);
    __privateAdd(this, _n2);
    __privateAdd(this, _e);
    __privateAdd(this, _t);
    __privateAdd(this, _r2);
    __privateAdd(this, _a2);
    __privateAdd(this, _o2);
    __privateAdd(this, _i2);
    __privateAdd(this, _s2);
    __privateAdd(this, _u2);
    __privateAdd(this, _l2);
    __privateAdd(this, _g2);
    __privateAdd(this, _d2);
    __privateAdd(this, _f2);
    __privateAdd(this, _c2);
    __privateAdd(this, _h2, /* @__PURE__ */ new Set());
    this.options = t, __privateSet(this, _n2, e2), __privateSet(this, _s2, null), __privateSet(this, _i2, ys()), this.options.experimental_prefetchInRender || __privateGet(this, _i2).reject(new Error("experimental_prefetchInRender feature flag is not enabled")), this.bindMethods(), this.setOptions(t);
  }
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 && (__privateGet(this, _e).addObserver(this), Rs(__privateGet(this, _e), this.options) ? __privateMethod(this, _Vf_instances, m_fn).call(this) : this.updateResult(), __privateMethod(this, _Vf_instances, y_fn).call(this));
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return ai(__privateGet(this, _e), this.options, this.options.refetchOnReconnect);
  }
  shouldFetchOnWindowFocus() {
    return ai(__privateGet(this, _e), this.options, this.options.refetchOnWindowFocus);
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set(), __privateMethod(this, _Vf_instances, w_fn).call(this), __privateMethod(this, _Vf_instances, C_fn).call(this), __privateGet(this, _e).removeObserver(this);
  }
  setOptions(e2) {
    const t = this.options, n = __privateGet(this, _e);
    if (this.options = __privateGet(this, _n2).defaultQueryOptions(e2), this.options.enabled !== void 0 && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof In(this.options.enabled, __privateGet(this, _e)) != "boolean") throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");
    __privateMethod(this, _Vf_instances, S_fn).call(this), __privateGet(this, _e).setOptions(this.options), t._defaulted && !Ia(this.options, t) && __privateGet(this, _n2).getQueryCache().notify({ type: "observerOptionsUpdated", query: __privateGet(this, _e), observer: this });
    const r = this.hasListeners();
    r && Os(__privateGet(this, _e), n, this.options, t) && __privateMethod(this, _Vf_instances, m_fn).call(this), this.updateResult(), r && (__privateGet(this, _e) !== n || In(this.options.enabled, __privateGet(this, _e)) !== In(t.enabled, __privateGet(this, _e)) || Sa(this.options.staleTime, __privateGet(this, _e)) !== Sa(t.staleTime, __privateGet(this, _e))) && __privateMethod(this, _Vf_instances, v_fn).call(this);
    const a = __privateMethod(this, _Vf_instances, p_fn).call(this);
    r && (__privateGet(this, _e) !== n || In(this.options.enabled, __privateGet(this, _e)) !== In(t.enabled, __privateGet(this, _e)) || a !== __privateGet(this, _c2)) && __privateMethod(this, _Vf_instances, b_fn).call(this, a);
  }
  getOptimisticResult(e2) {
    const t = __privateGet(this, _n2).getQueryCache().build(__privateGet(this, _n2), e2), n = this.createResult(t, e2);
    return qf(this, n) && (__privateSet(this, _r2, n), __privateSet(this, _o2, this.options), __privateSet(this, _a2, __privateGet(this, _e).state)), n;
  }
  getCurrentResult() {
    return __privateGet(this, _r2);
  }
  trackResult(e2, t) {
    return new Proxy(e2, { get: (n, r) => (this.trackProp(r), t == null ? void 0 : t(r), Reflect.get(n, r)) });
  }
  trackProp(e2) {
    __privateGet(this, _h2).add(e2);
  }
  getCurrentQuery() {
    return __privateGet(this, _e);
  }
  refetch({ ...e2 } = {}) {
    return this.fetch({ ...e2 });
  }
  fetchOptimistic(e2) {
    const t = __privateGet(this, _n2).defaultQueryOptions(e2), n = __privateGet(this, _n2).getQueryCache().build(__privateGet(this, _n2), t);
    return n.fetch().then(() => this.createResult(n, t));
  }
  fetch(e2) {
    return __privateMethod(this, _Vf_instances, m_fn).call(this, { ...e2, cancelRefetch: e2.cancelRefetch ?? true }).then(() => (this.updateResult(), __privateGet(this, _r2)));
  }
  createResult(e2, t) {
    var _a5;
    const n = __privateGet(this, _e), r = this.options, a = __privateGet(this, _r2), o = __privateGet(this, _a2), i = __privateGet(this, _o2), c = e2 !== n ? e2.state : __privateGet(this, _t), { state: u } = e2;
    let d = { ...u }, f = false, h;
    if (t._optimisticResults) {
      const O = this.hasListeners(), R = !O && Rs(e2, t), S = O && Os(e2, n, t, r);
      (R || S) && (d = { ...d, ...ff(u.data, e2.options) }), t._optimisticResults === "isRestoring" && (d.fetchStatus = "idle");
    }
    let { error: p, errorUpdatedAt: g, status: v } = d;
    h = d.data;
    let m = false;
    if (t.placeholderData !== void 0 && h === void 0 && v === "pending") {
      let O;
      (a == null ? void 0 : a.isPlaceholderData) && t.placeholderData === (i == null ? void 0 : i.placeholderData) ? (O = a.data, m = true) : O = typeof t.placeholderData == "function" ? t.placeholderData((_a5 = __privateGet(this, _g2)) == null ? void 0 : _a5.state.data, __privateGet(this, _g2)) : t.placeholderData, O !== void 0 && (v = "success", h = Cs(a == null ? void 0 : a.data, O, t), f = true);
    }
    if (t.select && h !== void 0 && !m) if (a && h === (o == null ? void 0 : o.data) && t.select === __privateGet(this, _u2)) h = __privateGet(this, _l2);
    else try {
      __privateSet(this, _u2, t.select), h = t.select(h), h = Cs(a == null ? void 0 : a.data, h, t), __privateSet(this, _l2, h), __privateSet(this, _s2, null);
    } catch (O) {
      __privateSet(this, _s2, O);
    }
    __privateGet(this, _s2) && (p = __privateGet(this, _s2), h = __privateGet(this, _l2), g = Date.now(), v = "error");
    const w = d.fetchStatus === "fetching", b = v === "pending", C = v === "error", x = b && w, I = h !== void 0, E = { status: v, fetchStatus: d.fetchStatus, isPending: b, isSuccess: v === "success", isError: C, isInitialLoading: x, isLoading: x, data: h, dataUpdatedAt: d.dataUpdatedAt, error: p, errorUpdatedAt: g, failureCount: d.fetchFailureCount, failureReason: d.fetchFailureReason, errorUpdateCount: d.errorUpdateCount, isFetched: d.dataUpdateCount > 0 || d.errorUpdateCount > 0, isFetchedAfterMount: d.dataUpdateCount > c.dataUpdateCount || d.errorUpdateCount > c.errorUpdateCount, isFetching: w, isRefetching: w && !b, isLoadingError: C && !I, isPaused: d.fetchStatus === "paused", isPlaceholderData: f, isRefetchError: C && I, isStale: Vi(e2, t), refetch: this.refetch, promise: __privateGet(this, _i2) };
    if (this.options.experimental_prefetchInRender) {
      const O = ($) => {
        E.status === "error" ? $.reject(E.error) : E.data !== void 0 && $.resolve(E.data);
      }, R = () => {
        const $ = __privateSet(this, _i2, E.promise = ys());
        O($);
      }, S = __privateGet(this, _i2);
      switch (S.status) {
        case "pending":
          e2.queryHash === n.queryHash && O(S);
          break;
        case "fulfilled":
          (E.status === "error" || E.data !== S.value) && R();
          break;
        case "rejected":
          (E.status !== "error" || E.error !== S.reason) && R();
          break;
      }
    }
    return E;
  }
  updateResult() {
    const e2 = __privateGet(this, _r2), t = this.createResult(__privateGet(this, _e), this.options);
    if (__privateSet(this, _a2, __privateGet(this, _e).state), __privateSet(this, _o2, this.options), __privateGet(this, _a2).data !== void 0 && __privateSet(this, _g2, __privateGet(this, _e)), Ia(t, e2)) return;
    __privateSet(this, _r2, t);
    const n = () => {
      if (!e2) return true;
      const { notifyOnChangeProps: r } = this.options, a = typeof r == "function" ? r() : r;
      if (a === "all" || !a && !__privateGet(this, _h2).size) return true;
      const o = new Set(a ?? __privateGet(this, _h2));
      return this.options.throwOnError && o.add("error"), Object.keys(__privateGet(this, _r2)).some((i) => {
        const s = i;
        return __privateGet(this, _r2)[s] !== e2[s] && o.has(s);
      });
    };
    __privateMethod(this, _Vf_instances, x_fn).call(this, { listeners: n() });
  }
  onQueryUpdate() {
    this.updateResult(), this.hasListeners() && __privateMethod(this, _Vf_instances, y_fn).call(this);
  }
}, _n2 = new WeakMap(), _e = new WeakMap(), _t = new WeakMap(), _r2 = new WeakMap(), _a2 = new WeakMap(), _o2 = new WeakMap(), _i2 = new WeakMap(), _s2 = new WeakMap(), _u2 = new WeakMap(), _l2 = new WeakMap(), _g2 = new WeakMap(), _d2 = new WeakMap(), _f2 = new WeakMap(), _c2 = new WeakMap(), _h2 = new WeakMap(), _Vf_instances = new WeakSet(), m_fn = function(e2) {
  __privateMethod(this, _Vf_instances, S_fn).call(this);
  let t = __privateGet(this, _e).fetch(this.options, e2);
  return (e2 == null ? void 0 : e2.throwOnError) || (t = t.catch(cf)), t;
}, v_fn = function() {
  __privateMethod(this, _Vf_instances, w_fn).call(this);
  const e2 = Sa(this.options.staleTime, __privateGet(this, _e));
  if (Zo || __privateGet(this, _r2).isStale || !ws(e2)) return;
  const n = uf(__privateGet(this, _r2).dataUpdatedAt, e2) + 1;
  __privateSet(this, _d2, setTimeout(() => {
    __privateGet(this, _r2).isStale || this.updateResult();
  }, n));
}, p_fn = function() {
  return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(__privateGet(this, _e)) : this.options.refetchInterval) ?? false;
}, b_fn = function(e2) {
  __privateMethod(this, _Vf_instances, C_fn).call(this), __privateSet(this, _c2, e2), !(Zo || In(this.options.enabled, __privateGet(this, _e)) === false || !ws(__privateGet(this, _c2)) || __privateGet(this, _c2) === 0) && __privateSet(this, _f2, setInterval(() => {
    (this.options.refetchIntervalInBackground || df.isFocused()) && __privateMethod(this, _Vf_instances, m_fn).call(this);
  }, __privateGet(this, _c2)));
}, y_fn = function() {
  __privateMethod(this, _Vf_instances, v_fn).call(this), __privateMethod(this, _Vf_instances, b_fn).call(this, __privateMethod(this, _Vf_instances, p_fn).call(this));
}, w_fn = function() {
  __privateGet(this, _d2) && (clearTimeout(__privateGet(this, _d2)), __privateSet(this, _d2, void 0));
}, C_fn = function() {
  __privateGet(this, _f2) && (clearInterval(__privateGet(this, _f2)), __privateSet(this, _f2, void 0));
}, S_fn = function() {
  const e2 = __privateGet(this, _n2).getQueryCache().build(__privateGet(this, _n2), this.options);
  if (e2 === __privateGet(this, _e)) return;
  const t = __privateGet(this, _e);
  __privateSet(this, _e, e2), __privateSet(this, _t, e2.state), this.hasListeners() && (t == null ? void 0 : t.removeObserver(this), e2.addObserver(this));
}, x_fn = function(e2) {
  Ba.batch(() => {
    e2.listeners && this.listeners.forEach((t) => {
      t(__privateGet(this, _r2));
    }), __privateGet(this, _n2).getQueryCache().notify({ query: __privateGet(this, _e), type: "observerResultsUpdated" });
  });
}, _a3);
function Wf(e2, t) {
  return In(t.enabled, e2) !== false && e2.state.data === void 0 && !(e2.state.status === "error" && t.retryOnMount === false);
}
function Rs(e2, t) {
  return Wf(e2, t) || e2.state.data !== void 0 && ai(e2, t, t.refetchOnMount);
}
function ai(e2, t, n) {
  if (In(t.enabled, e2) !== false) {
    const r = typeof n == "function" ? n(e2) : n;
    return r === "always" || r !== false && Vi(e2, t);
  }
  return false;
}
function Os(e2, t, n, r) {
  return (e2 !== t || In(r.enabled, e2) === false) && (!n.suspense || e2.state.status !== "error") && Vi(e2, n);
}
function Vi(e2, t) {
  return In(t.enabled, e2) !== false && e2.isStaleByTime(Sa(t.staleTime, e2));
}
function qf(e2, t) {
  return !Ia(e2.getCurrentResult(), t);
}
var Uf = (_b2 = class extends wc {
  constructor(t, n) {
    super();
    __privateAdd(this, _Uf_instances);
    __privateAdd(this, _n3);
    __privateAdd(this, _e2);
    __privateAdd(this, _t2);
    __privateAdd(this, _r3);
    __privateSet(this, _n3, t), this.setOptions(n), this.bindMethods(), __privateMethod(this, _Uf_instances, a_fn).call(this);
  }
  bindMethods() {
    this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this);
  }
  setOptions(t) {
    var _a5;
    const n = this.options;
    this.options = __privateGet(this, _n3).defaultMutationOptions(t), Ia(this.options, n) || __privateGet(this, _n3).getMutationCache().notify({ type: "observerOptionsUpdated", mutation: __privateGet(this, _t2), observer: this }), (n == null ? void 0 : n.mutationKey) && this.options.mutationKey && Ss(n.mutationKey) !== Ss(this.options.mutationKey) ? this.reset() : ((_a5 = __privateGet(this, _t2)) == null ? void 0 : _a5.state.status) === "pending" && __privateGet(this, _t2).setOptions(this.options);
  }
  onUnsubscribe() {
    var _a5;
    this.hasListeners() || ((_a5 = __privateGet(this, _t2)) == null ? void 0 : _a5.removeObserver(this));
  }
  onMutationUpdate(t) {
    __privateMethod(this, _Uf_instances, a_fn).call(this), __privateMethod(this, _Uf_instances, o_fn).call(this, t);
  }
  getCurrentResult() {
    return __privateGet(this, _e2);
  }
  reset() {
    var _a5;
    (_a5 = __privateGet(this, _t2)) == null ? void 0 : _a5.removeObserver(this), __privateSet(this, _t2, void 0), __privateMethod(this, _Uf_instances, a_fn).call(this), __privateMethod(this, _Uf_instances, o_fn).call(this);
  }
  mutate(t, n) {
    var _a5;
    return __privateSet(this, _r3, n), (_a5 = __privateGet(this, _t2)) == null ? void 0 : _a5.removeObserver(this), __privateSet(this, _t2, __privateGet(this, _n3).getMutationCache().build(__privateGet(this, _n3), this.options)), __privateGet(this, _t2).addObserver(this), __privateGet(this, _t2).execute(t);
  }
}, _n3 = new WeakMap(), _e2 = new WeakMap(), _t2 = new WeakMap(), _r3 = new WeakMap(), _Uf_instances = new WeakSet(), a_fn = function() {
  var _a5;
  const t = ((_a5 = __privateGet(this, _t2)) == null ? void 0 : _a5.state) ?? mf();
  __privateSet(this, _e2, { ...t, isPending: t.status === "pending", isSuccess: t.status === "success", isError: t.status === "error", isIdle: t.status === "idle", mutate: this.mutate, reset: this.reset });
}, o_fn = function(t) {
  Ba.batch(() => {
    var _a5, _b3, _c4, _d3, _e4, _f3, _g3, _h3;
    if (__privateGet(this, _r3) && this.hasListeners()) {
      const n = __privateGet(this, _e2).variables, r = __privateGet(this, _e2).context;
      (t == null ? void 0 : t.type) === "success" ? ((_b3 = (_a5 = __privateGet(this, _r3)).onSuccess) == null ? void 0 : _b3.call(_a5, t.data, n, r), (_d3 = (_c4 = __privateGet(this, _r3)).onSettled) == null ? void 0 : _d3.call(_c4, t.data, null, n, r)) : (t == null ? void 0 : t.type) === "error" && ((_f3 = (_e4 = __privateGet(this, _r3)).onError) == null ? void 0 : _f3.call(_e4, t.error, n, r), (_h3 = (_g3 = __privateGet(this, _r3)).onSettled) == null ? void 0 : _h3.call(_g3, void 0, t.error, n, r));
    }
    this.listeners.forEach((n) => {
      n(__privateGet(this, _e2));
    });
  });
}, _b2), Fc = l.createContext(false), kf = () => l.useContext(Fc);
Fc.Provider;
function Gf() {
  let e2 = false;
  return { clearReset: () => {
    e2 = false;
  }, reset: () => {
    e2 = true;
  }, isReset: () => e2 };
}
var Kf = l.createContext(Gf()), Xf = () => l.useContext(Kf);
function Tc(e2, t) {
  return typeof e2 == "function" ? e2(...t) : !!e2;
}
function oi() {
}
var Yf = (e2, t) => {
  (e2.suspense || e2.throwOnError || e2.experimental_prefetchInRender) && (t.isReset() || (e2.retryOnMount = false));
}, Qf = (e2) => {
  l.useEffect(() => {
    e2.clearReset();
  }, [e2]);
}, Jf = ({ result: e2, errorResetBoundary: t, throwOnError: n, query: r, suspense: a }) => e2.isError && !t.isReset() && !e2.isFetching && r && (a && e2.data === void 0 || Tc(n, [e2.error, r])), Zf = (e2) => {
  const t = e2.staleTime;
  e2.suspense && (e2.staleTime = typeof t == "function" ? (...n) => Math.max(t(...n), 1e3) : Math.max(t ?? 1e3, 1e3), typeof e2.gcTime == "number" && (e2.gcTime = Math.max(e2.gcTime, 1e3)));
}, em = (e2, t) => e2.isLoading && e2.isFetching && !t, tm = (e2, t) => (e2 == null ? void 0 : e2.suspense) && t.isPending, Is = (e2, t, n) => t.fetchOptimistic(e2).catch(() => {
  n.clearReset();
});
function nm(e2, t, n) {
  var _a5, _b3, _c4, _d3, _e4, _f3;
  const r = Cc(), a = kf(), o = Xf(), i = r.defaultQueryOptions(e2);
  (_b3 = (_a5 = r.getDefaultOptions().queries) == null ? void 0 : _a5._experimental_beforeQuery) == null ? void 0 : _b3.call(_a5, i), i._optimisticResults = a ? "isRestoring" : "optimistic", Zf(i), Yf(i, o), Qf(o);
  const s = !r.getQueryCache().get(i.queryHash), [c] = l.useState(() => new t(r, i)), u = c.getOptimisticResult(i), d = !a && e2.subscribed !== false;
  if (l.useSyncExternalStore(l.useCallback((f) => {
    const h = d ? c.subscribe(Ba.batchCalls(f)) : oi;
    return c.updateResult(), h;
  }, [c, d]), () => c.getCurrentResult(), () => c.getCurrentResult()), l.useEffect(() => {
    c.setOptions(i);
  }, [i, c]), tm(i, u)) throw Is(i, c, o);
  if (Jf({ result: u, errorResetBoundary: o, throwOnError: i.throwOnError, query: r.getQueryCache().get(i.queryHash), suspense: i.suspense })) throw u.error;
  return (_d3 = (_c4 = r.getDefaultOptions().queries) == null ? void 0 : _c4._experimental_afterQuery) == null ? void 0 : _d3.call(_c4, i, u), i.experimental_prefetchInRender && !Zo && em(u, a) && ((_f3 = s ? Is(i, c, o) : (_e4 = r.getQueryCache().get(i.queryHash)) == null ? void 0 : _e4.promise) == null ? void 0 : _f3.catch(oi).finally(() => {
    c.updateResult();
  })), i.notifyOnChangeProps ? u : c.trackResult(u);
}
function j$(e2, t) {
  return nm(e2, Vf);
}
function D$(e2, t) {
  const n = Cc(), [r] = l.useState(() => new Uf(n, e2));
  l.useEffect(() => {
    r.setOptions(e2);
  }, [r, e2]);
  const a = l.useSyncExternalStore(l.useCallback((i) => r.subscribe(Ba.batchCalls(i)), [r]), () => r.getCurrentResult(), () => r.getCurrentResult()), o = l.useCallback((i, s) => {
    r.mutate(i, s).catch(oi);
  }, [r]);
  if (a.error && Tc(r.options.throwOnError, [a.error])) throw a.error;
  return { ...a, mutate: o, mutateAsync: a.mutate };
}
/**
* React Router DOM v6.10.0
*
* Copyright (c) Remix Software Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE.md file in the root directory of this source tree.
*
* @license MIT
*/
function Aa() {
  return Aa = Object.assign ? Object.assign.bind() : function(e2) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e2[r] = n[r]);
    }
    return e2;
  }, Aa.apply(this, arguments);
}
function _c(e2, t) {
  if (e2 == null) return {};
  var n = {}, r = Object.keys(e2), a, o;
  for (o = 0; o < r.length; o++) a = r[o], !(t.indexOf(a) >= 0) && (n[a] = e2[a]);
  return n;
}
function rm(e2) {
  return !!(e2.metaKey || e2.altKey || e2.ctrlKey || e2.shiftKey);
}
function am(e2, t) {
  return e2.button === 0 && (!t || t === "_self") && !rm(e2);
}
const om = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset"], im = ["aria-current", "caseSensitive", "className", "end", "style", "to", "children"], sm = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", lm = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, cm = l.forwardRef(function(t, n) {
  let { onClick: r, relative: a, reloadDocument: o, replace: i, state: s, target: c, to: u, preventScrollReset: d } = t, f = _c(t, om), { basename: h } = l.useContext(Sc), p, g = false;
  if (typeof u == "string" && lm.test(u) && (p = u, sm)) {
    let b = new URL(window.location.href), C = u.startsWith("//") ? new URL(b.protocol + u) : new URL(u), x = gf(C.pathname, h);
    C.origin === b.origin && x != null ? u = x + C.search + C.hash : g = true;
  }
  let v = hf(u, { relative: a }), m = um(u, { replace: i, state: s, target: c, preventScrollReset: d, relative: a });
  function w(b) {
    r && r(b), b.defaultPrevented || m(b);
  }
  return l.createElement("a", Aa({}, f, { href: p || v, onClick: g || o ? r : w, ref: n, target: c }));
}), L$ = l.forwardRef(function(t, n) {
  let { "aria-current": r = "page", caseSensitive: a = false, className: o = "", end: i = false, style: s, to: c, children: u } = t, d = _c(t, im), f = xc(c, { relative: d.relative }), h = $c(), p = l.useContext(vf), { navigator: g } = l.useContext(Sc), v = g.encodeLocation ? g.encodeLocation(f).pathname : f.pathname, m = h.pathname, w = p && p.navigation && p.navigation.location ? p.navigation.location.pathname : null;
  a || (m = m.toLowerCase(), w = w ? w.toLowerCase() : null, v = v.toLowerCase());
  let b = m === v || !i && m.startsWith(v) && m.charAt(v.length) === "/", C = w != null && (w === v || !i && w.startsWith(v) && w.charAt(v.length) === "/"), x = b ? r : void 0, I;
  typeof o == "function" ? I = o({ isActive: b, isPending: C }) : I = [o, b ? "active" : null, C ? "pending" : null].filter(Boolean).join(" ");
  let y = typeof s == "function" ? s({ isActive: b, isPending: C }) : s;
  return l.createElement(cm, Aa({}, d, { "aria-current": x, className: I, ref: n, style: y, to: c }), typeof u == "function" ? u({ isActive: b, isPending: C }) : u);
});
var As;
(function(e2) {
  e2.UseScrollRestoration = "useScrollRestoration", e2.UseSubmitImpl = "useSubmitImpl", e2.UseFetcher = "useFetcher";
})(As || (As = {}));
var Ps;
(function(e2) {
  e2.UseFetchers = "useFetchers", e2.UseScrollRestoration = "useScrollRestoration";
})(Ps || (Ps = {}));
function um(e2, t) {
  let { target: n, replace: r, state: a, preventScrollReset: o, relative: i } = t === void 0 ? {} : t, s = pf(), c = $c(), u = xc(e2, { relative: i });
  return l.useCallback((d) => {
    if (am(d, n)) {
      d.preventDefault();
      let f = r !== void 0 ? r : xs(c) === xs(u);
      s(e2, { replace: f, state: a, preventScrollReset: o, relative: i });
    }
  }, [c, s, u, r, a, n, e2, o, i]);
}
function Mn(e2) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = [];
  return ae.Children.forEach(e2, function(r) {
    r == null && !t.keepEmpty || (Array.isArray(r) ? n = n.concat(Mn(r)) : bf(r) && r.props ? n = n.concat(Mn(r.props.children, t)) : n.push(r));
  }), n;
}
var ii = l.createContext(null);
function dm(e2) {
  var t = e2.children, n = e2.onBatchResize, r = l.useRef(0), a = l.useRef([]), o = l.useContext(ii), i = l.useCallback(function(s, c, u) {
    r.current += 1;
    var d = r.current;
    a.current.push({ size: s, element: c, data: u }), Promise.resolve().then(function() {
      d === r.current && (n == null ? void 0 : n(a.current), a.current = []);
    }), o == null ? void 0 : o(s, c, u);
  }, [n, o]);
  return l.createElement(ii.Provider, { value: i }, t);
}
var jc = function() {
  if (typeof Map < "u") return Map;
  function e2(t, n) {
    var r = -1;
    return t.some(function(a, o) {
      return a[0] === n ? (r = o, true) : false;
    }), r;
  }
  return function() {
    function t() {
      this.__entries__ = [];
    }
    return Object.defineProperty(t.prototype, "size", { get: function() {
      return this.__entries__.length;
    }, enumerable: true, configurable: true }), t.prototype.get = function(n) {
      var r = e2(this.__entries__, n), a = this.__entries__[r];
      return a && a[1];
    }, t.prototype.set = function(n, r) {
      var a = e2(this.__entries__, n);
      ~a ? this.__entries__[a][1] = r : this.__entries__.push([n, r]);
    }, t.prototype.delete = function(n) {
      var r = this.__entries__, a = e2(r, n);
      ~a && r.splice(a, 1);
    }, t.prototype.has = function(n) {
      return !!~e2(this.__entries__, n);
    }, t.prototype.clear = function() {
      this.__entries__.splice(0);
    }, t.prototype.forEach = function(n, r) {
      r === void 0 && (r = null);
      for (var a = 0, o = this.__entries__; a < o.length; a++) {
        var i = o[a];
        n.call(r, i[1], i[0]);
      }
    }, t;
  }();
}(), si = typeof window < "u" && typeof document < "u" && window.document === document, Pa = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), fm = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(Pa) : function(e2) {
    return setTimeout(function() {
      return e2(Date.now());
    }, 1e3 / 60);
  };
}(), mm = 2;
function gm(e2, t) {
  var n = false, r = false, a = 0;
  function o() {
    n && (n = false, e2()), r && s();
  }
  function i() {
    fm(o);
  }
  function s() {
    var c = Date.now();
    if (n) {
      if (c - a < mm) return;
      r = true;
    } else n = true, r = false, setTimeout(i, t);
    a = c;
  }
  return s;
}
var hm = 20, vm = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], pm = typeof MutationObserver < "u", bm = function() {
  function e2() {
    this.connected_ = false, this.mutationEventsAdded_ = false, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = gm(this.refresh.bind(this), hm);
  }
  return e2.prototype.addObserver = function(t) {
    ~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_();
  }, e2.prototype.removeObserver = function(t) {
    var n = this.observers_, r = n.indexOf(t);
    ~r && n.splice(r, 1), !n.length && this.connected_ && this.disconnect_();
  }, e2.prototype.refresh = function() {
    var t = this.updateObservers_();
    t && this.refresh();
  }, e2.prototype.updateObservers_ = function() {
    var t = this.observers_.filter(function(n) {
      return n.gatherActive(), n.hasActive();
    });
    return t.forEach(function(n) {
      return n.broadcastActive();
    }), t.length > 0;
  }, e2.prototype.connect_ = function() {
    !si || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), pm ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, { attributes: true, childList: true, characterData: true, subtree: true })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = true), this.connected_ = true);
  }, e2.prototype.disconnect_ = function() {
    !si || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = false, this.connected_ = false);
  }, e2.prototype.onTransitionEnd_ = function(t) {
    var n = t.propertyName, r = n === void 0 ? "" : n, a = vm.some(function(o) {
      return !!~r.indexOf(o);
    });
    a && this.refresh();
  }, e2.getInstance = function() {
    return this.instance_ || (this.instance_ = new e2()), this.instance_;
  }, e2.instance_ = null, e2;
}(), Dc = function(e2, t) {
  for (var n = 0, r = Object.keys(t); n < r.length; n++) {
    var a = r[n];
    Object.defineProperty(e2, a, { value: t[a], enumerable: false, writable: false, configurable: true });
  }
  return e2;
}, wr = function(e2) {
  var t = e2 && e2.ownerDocument && e2.ownerDocument.defaultView;
  return t || Pa;
}, Lc = qa(0, 0, 0, 0);
function Na(e2) {
  return parseFloat(e2) || 0;
}
function Ns(e2) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  return t.reduce(function(r, a) {
    var o = e2["border-" + a + "-width"];
    return r + Na(o);
  }, 0);
}
function ym(e2) {
  for (var t = ["top", "right", "bottom", "left"], n = {}, r = 0, a = t; r < a.length; r++) {
    var o = a[r], i = e2["padding-" + o];
    n[o] = Na(i);
  }
  return n;
}
function wm(e2) {
  var t = e2.getBBox();
  return qa(0, 0, t.width, t.height);
}
function Cm(e2) {
  var t = e2.clientWidth, n = e2.clientHeight;
  if (!t && !n) return Lc;
  var r = wr(e2).getComputedStyle(e2), a = ym(r), o = a.left + a.right, i = a.top + a.bottom, s = Na(r.width), c = Na(r.height);
  if (r.boxSizing === "border-box" && (Math.round(s + o) !== t && (s -= Ns(r, "left", "right") + o), Math.round(c + i) !== n && (c -= Ns(r, "top", "bottom") + i)), !xm(e2)) {
    var u = Math.round(s + o) - t, d = Math.round(c + i) - n;
    Math.abs(u) !== 1 && (s -= u), Math.abs(d) !== 1 && (c -= d);
  }
  return qa(a.left, a.top, s, c);
}
var Sm = /* @__PURE__ */ function() {
  return typeof SVGGraphicsElement < "u" ? function(e2) {
    return e2 instanceof wr(e2).SVGGraphicsElement;
  } : function(e2) {
    return e2 instanceof wr(e2).SVGElement && typeof e2.getBBox == "function";
  };
}();
function xm(e2) {
  return e2 === wr(e2).document.documentElement;
}
function $m(e2) {
  return si ? Sm(e2) ? wm(e2) : Cm(e2) : Lc;
}
function Em(e2) {
  var t = e2.x, n = e2.y, r = e2.width, a = e2.height, o = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, i = Object.create(o.prototype);
  return Dc(i, { x: t, y: n, width: r, height: a, top: n, right: t + r, bottom: a + n, left: t }), i;
}
function qa(e2, t, n, r) {
  return { x: e2, y: t, width: n, height: r };
}
var Rm = function() {
  function e2(t) {
    this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = qa(0, 0, 0, 0), this.target = t;
  }
  return e2.prototype.isActive = function() {
    var t = $m(this.target);
    return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight;
  }, e2.prototype.broadcastRect = function() {
    var t = this.contentRect_;
    return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t;
  }, e2;
}(), Om = /* @__PURE__ */ function() {
  function e2(t, n) {
    var r = Em(n);
    Dc(this, { target: t, contentRect: r });
  }
  return e2;
}(), Im = function() {
  function e2(t, n, r) {
    if (this.activeObservations_ = [], this.observations_ = new jc(), typeof t != "function") throw new TypeError("The callback provided as parameter 1 is not a function.");
    this.callback_ = t, this.controller_ = n, this.callbackCtx_ = r;
  }
  return e2.prototype.observe = function(t) {
    if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
    if (!(typeof Element > "u" || !(Element instanceof Object))) {
      if (!(t instanceof wr(t).Element)) throw new TypeError('parameter 1 is not of type "Element".');
      var n = this.observations_;
      n.has(t) || (n.set(t, new Rm(t)), this.controller_.addObserver(this), this.controller_.refresh());
    }
  }, e2.prototype.unobserve = function(t) {
    if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
    if (!(typeof Element > "u" || !(Element instanceof Object))) {
      if (!(t instanceof wr(t).Element)) throw new TypeError('parameter 1 is not of type "Element".');
      var n = this.observations_;
      n.has(t) && (n.delete(t), n.size || this.controller_.removeObserver(this));
    }
  }, e2.prototype.disconnect = function() {
    this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
  }, e2.prototype.gatherActive = function() {
    var t = this;
    this.clearActive(), this.observations_.forEach(function(n) {
      n.isActive() && t.activeObservations_.push(n);
    });
  }, e2.prototype.broadcastActive = function() {
    if (this.hasActive()) {
      var t = this.callbackCtx_, n = this.activeObservations_.map(function(r) {
        return new Om(r.target, r.broadcastRect());
      });
      this.callback_.call(t, n, t), this.clearActive();
    }
  }, e2.prototype.clearActive = function() {
    this.activeObservations_.splice(0);
  }, e2.prototype.hasActive = function() {
    return this.activeObservations_.length > 0;
  }, e2;
}(), Bc = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new jc(), zc = /* @__PURE__ */ function() {
  function e2(t) {
    if (!(this instanceof e2)) throw new TypeError("Cannot call a class as a function.");
    if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
    var n = bm.getInstance(), r = new Im(t, n, this);
    Bc.set(this, r);
  }
  return e2;
}();
["observe", "unobserve", "disconnect"].forEach(function(e2) {
  zc.prototype[e2] = function() {
    var t;
    return (t = Bc.get(this))[e2].apply(t, arguments);
  };
});
var Am = function() {
  return typeof Pa.ResizeObserver < "u" ? Pa.ResizeObserver : zc;
}(), Wn = /* @__PURE__ */ new Map();
function Pm(e2) {
  e2.forEach(function(t) {
    var n, r = t.target;
    (n = Wn.get(r)) === null || n === void 0 || n.forEach(function(a) {
      return a(r);
    });
  });
}
var Hc = new Am(Pm);
function Nm(e2, t) {
  Wn.has(e2) || (Wn.set(e2, /* @__PURE__ */ new Set()), Hc.observe(e2)), Wn.get(e2).add(t);
}
function Mm(e2, t) {
  Wn.has(e2) && (Wn.get(e2).delete(t), Wn.get(e2).size || (Hc.unobserve(e2), Wn.delete(e2)));
}
var Fm = function(e2) {
  za(n, e2);
  var t = Ha(n);
  function n() {
    return fn(this, n), t.apply(this, arguments);
  }
  return mn(n, [{ key: "render", value: function() {
    return this.props.children;
  } }]), n;
}(l.Component);
function Tm(e2, t) {
  var n = e2.children, r = e2.disabled, a = l.useRef(null), o = l.useRef(null), i = l.useContext(ii), s = typeof n == "function", c = s ? n(a) : n, u = l.useRef({ width: -1, height: -1, offsetWidth: -1, offsetHeight: -1 }), d = !s && l.isValidElement(c) && Yr(c), f = d ? Va(c) : null, h = Qr(f, a), p = function() {
    var w;
    return So(a.current) || (a.current && et(a.current) === "object" ? So((w = a.current) === null || w === void 0 ? void 0 : w.nativeElement) : null) || So(o.current);
  };
  l.useImperativeHandle(t, function() {
    return p();
  });
  var g = l.useRef(e2);
  g.current = e2;
  var v = l.useCallback(function(m) {
    var w = g.current, b = w.onResize, C = w.data, x = m.getBoundingClientRect(), I = x.width, y = x.height, E = m.offsetWidth, O = m.offsetHeight, R = Math.floor(I), S = Math.floor(y);
    if (u.current.width !== R || u.current.height !== S || u.current.offsetWidth !== E || u.current.offsetHeight !== O) {
      var $ = { width: R, height: S, offsetWidth: E, offsetHeight: O };
      u.current = $;
      var P = E === Math.round(I) ? I : E, A = O === Math.round(y) ? y : O, N = V(V({}, $), {}, { offsetWidth: P, offsetHeight: A });
      i == null ? void 0 : i(N, m, C), b && Promise.resolve().then(function() {
        b(N, m);
      });
    }
  }, []);
  return l.useEffect(function() {
    var m = p();
    return m && !r && Nm(m, v), function() {
      return Mm(m, v);
    };
  }, [a.current, r]), l.createElement(Fm, { ref: o }, d ? l.cloneElement(c, { ref: h }) : c);
}
var _m = l.forwardRef(Tm), jm = "rc-observer-key";
function Dm(e2, t) {
  var n = e2.children, r = typeof n == "function" ? [n] : Mn(n);
  return r.map(function(a, o) {
    var i = (a == null ? void 0 : a.key) || "".concat(jm, "-").concat(o);
    return l.createElement(_m, Ie({}, e2, { key: i, ref: o === 0 ? t : void 0 }), a);
  });
}
var Gn = l.forwardRef(Dm);
Gn.Collection = dm;
var it = function() {
  function e2(t, n) {
    fn(this, e2), D(this, "name", void 0), D(this, "style", void 0), D(this, "_keyframe", true), this.name = t, this.style = n;
  }
  return mn(e2, [{ key: "getName", value: function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
    return n ? "".concat(n, "-").concat(this.name) : this.name;
  } }]), e2;
}();
function $o(e2) {
  return e2 !== void 0;
}
function yn(e2, t) {
  var n = t || {}, r = n.defaultValue, a = n.value, o = n.onChange, i = n.postState, s = ei(function() {
    return $o(a) ? a : $o(r) ? typeof r == "function" ? r() : r : typeof e2 == "function" ? e2() : e2;
  }), c = te(s, 2), u = c[0], d = c[1], f = a !== void 0 ? a : u, h = i ? i(f) : f, p = jt(o), g = ei([f]), v = te(g, 2), m = v[0], w = v[1];
  Lr(function() {
    var C = m[0];
    u !== C && p(u, C);
  }, [m]), Lr(function() {
    $o(a) || d(a);
  }, [a]);
  var b = jt(function(C, x) {
    d(C, x), w([f], x);
  });
  return [h, b];
}
const tr = ["blue", "purple", "cyan", "green", "magenta", "pink", "red", "orange", "yellow", "volcano", "geekblue", "lime", "gold"];
function Lm(e2, t) {
  return tr.reduce((n, r) => {
    const a = e2[`${r}1`], o = e2[`${r}3`], i = e2[`${r}6`], s = e2[`${r}7`];
    return Object.assign(Object.assign({}, n), t(r, { lightColor: a, lightBorderColor: o, darkColor: i, textColor: s }));
  }, {});
}
var Bm = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" } }] }, name: "check-circle", theme: "filled" };
function Vc(e2) {
  var t;
  return e2 == null || (t = e2.getRootNode) === null || t === void 0 ? void 0 : t.call(e2);
}
function zm(e2) {
  return Vc(e2) instanceof ShadowRoot;
}
function Ma(e2) {
  return zm(e2) ? Vc(e2) : null;
}
function Hm(e2) {
  return e2.replace(/-(.)/g, function(t, n) {
    return n.toUpperCase();
  });
}
function Vm(e2, t) {
  un(e2, "[@ant-design/icons] ".concat(t));
}
function Ms(e2) {
  return et(e2) === "object" && typeof e2.name == "string" && typeof e2.theme == "string" && (et(e2.icon) === "object" || typeof e2.icon == "function");
}
function Fs() {
  var e2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(e2).reduce(function(t, n) {
    var r = e2[n];
    switch (n) {
      case "class":
        t.className = r, delete t.class;
        break;
      default:
        delete t[n], t[Hm(n)] = r;
    }
    return t;
  }, {});
}
function li(e2, t, n) {
  return n ? ae.createElement(e2.tag, V(V({ key: t }, Fs(e2.attrs)), n), (e2.children || []).map(function(r, a) {
    return li(r, "".concat(t, "-").concat(e2.tag, "-").concat(a));
  })) : ae.createElement(e2.tag, V({ key: t }, Fs(e2.attrs)), (e2.children || []).map(function(r, a) {
    return li(r, "".concat(t, "-").concat(e2.tag, "-").concat(a));
  }));
}
function Wc(e2) {
  return yf(e2)[0];
}
function qc(e2) {
  return e2 ? Array.isArray(e2) ? e2 : [e2] : [];
}
var Wm = `
.anticon {
  display: inline-flex;
  align-items: center;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`, qm = function(t) {
  var n = l.useContext(Ec), r = n.csp, a = n.prefixCls, o = n.layer, i = Wm;
  a && (i = i.replace(/anticon/g, a)), o && (i = "@layer ".concat(o, ` {
`).concat(i, `
}`)), l.useEffect(function() {
    var s = t.current, c = Ma(s);
    zi(i, "@ant-design-icons", { prepend: !o, csp: r, attachTo: c });
  }, []);
}, Um = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"], Br = { primaryColor: "#333", secondaryColor: "#E6E6E6", calculated: false };
function km(e2) {
  var t = e2.primaryColor, n = e2.secondaryColor;
  Br.primaryColor = t, Br.secondaryColor = n || Wc(t), Br.calculated = !!n;
}
function Gm() {
  return V({}, Br);
}
var $r = function(t) {
  var n = t.icon, r = t.className, a = t.onClick, o = t.style, i = t.primaryColor, s = t.secondaryColor, c = rt(t, Um), u = l.useRef(), d = Br;
  if (i && (d = { primaryColor: i, secondaryColor: s || Wc(i) }), qm(u), Vm(Ms(n), "icon should be icon definiton, but got ".concat(n)), !Ms(n)) return null;
  var f = n;
  return f && typeof f.icon == "function" && (f = V(V({}, f), {}, { icon: f.icon(d.primaryColor, d.secondaryColor) })), li(f.icon, "svg-".concat(f.name), V(V({ className: r, onClick: a, style: o, "data-icon": f.name, width: "1em", height: "1em", fill: "currentColor", "aria-hidden": "true" }, c), {}, { ref: u }));
};
$r.displayName = "IconReact";
$r.getTwoToneColors = Gm;
$r.setTwoToneColors = km;
function Uc(e2) {
  var t = qc(e2), n = te(t, 2), r = n[0], a = n[1];
  return $r.setTwoToneColors({ primaryColor: r, secondaryColor: a });
}
function Km() {
  var e2 = $r.getTwoToneColors();
  return e2.calculated ? [e2.primaryColor, e2.secondaryColor] : e2.primaryColor;
}
var Xm = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
Uc(wf.primary);
var Ft = l.forwardRef(function(e2, t) {
  var n = e2.className, r = e2.icon, a = e2.spin, o = e2.rotate, i = e2.tabIndex, s = e2.onClick, c = e2.twoToneColor, u = rt(e2, Xm), d = l.useContext(Ec), f = d.prefixCls, h = f === void 0 ? "anticon" : f, p = d.rootClassName, g = Q(p, h, D(D({}, "".concat(h, "-").concat(r.name), !!r.name), "".concat(h, "-spin"), !!a || r.name === "loading"), n), v = i;
  v === void 0 && s && (v = -1);
  var m = o ? { msTransform: "rotate(".concat(o, "deg)"), transform: "rotate(".concat(o, "deg)") } : void 0, w = qc(c), b = te(w, 2), C = b[0], x = b[1];
  return l.createElement("span", Ie({ role: "img", "aria-label": r.name }, u, { ref: t, tabIndex: v, onClick: s, className: g }), l.createElement($r, { icon: r, primaryColor: C, secondaryColor: x, style: m }));
});
Ft.displayName = "AntdIcon";
Ft.getTwoToneColor = Km;
Ft.setTwoToneColor = Uc;
var Ym = function(t, n) {
  return l.createElement(Ft, Ie({}, t, { ref: n, icon: Bm }));
}, Qm = l.forwardRef(Ym), Jm = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z" } }] }, name: "close-circle", theme: "filled" }, Zm = function(t, n) {
  return l.createElement(Ft, Ie({}, t, { ref: n, icon: Jm }));
}, Wi = l.forwardRef(Zm), eg = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z" } }] }, name: "close", theme: "outlined" }, tg = function(t, n) {
  return l.createElement(Ft, Ie({}, t, { ref: n, icon: eg }));
}, ng = l.forwardRef(tg), rg = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "exclamation-circle", theme: "filled" }, ag = function(t, n) {
  return l.createElement(Ft, Ie({}, t, { ref: n, icon: rg }));
}, og = l.forwardRef(ag), ig = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "info-circle", theme: "filled" }, sg = function(t, n) {
  return l.createElement(Ft, Ie({}, t, { ref: n, icon: ig }));
}, B$ = l.forwardRef(sg), lg = `accept acceptCharset accessKey action allowFullScreen allowTransparency
    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge
    charSet checked classID className colSpan cols content contentEditable contextMenu
    controls coords crossOrigin data dateTime default defer dir disabled download draggable
    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder
    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity
    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media
    mediaGroup method min minLength multiple muted name noValidate nonce open
    optimum pattern placeholder poster preload radioGroup readOnly rel required
    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected
    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style
    summary tabIndex target title type useMap value width wmode wrap`, cg = `onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`, ug = "".concat(lg, " ").concat(cg).split(/[\s\n]+/), dg = "aria-", fg = "data-";
function Ts(e2, t) {
  return e2.indexOf(t) === 0;
}
function nr(e2) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false, n;
  t === false ? n = { aria: true, data: true, attr: true } : t === true ? n = { aria: true } : n = V({}, t);
  var r = {};
  return Object.keys(e2).forEach(function(a) {
    (n.aria && (a === "role" || Ts(a, dg)) || n.data && Ts(a, fg) || n.attr && ug.includes(a)) && (r[a] = e2[a]);
  }), r;
}
function kc(e2) {
  return e2 && ae.isValidElement(e2) && e2.type === ae.Fragment;
}
const mg = (e2, t, n) => ae.isValidElement(e2) ? ae.cloneElement(e2, typeof n == "function" ? n(e2.props || {}) : n) : t;
function qn(e2, t) {
  return mg(e2, e2, t);
}
const _s = (e2) => typeof e2 == "object" && e2 != null && e2.nodeType === 1, js = (e2, t) => (!t || e2 !== "hidden") && e2 !== "visible" && e2 !== "clip", va = (e2, t) => {
  if (e2.clientHeight < e2.scrollHeight || e2.clientWidth < e2.scrollWidth) {
    const n = getComputedStyle(e2, null);
    return js(n.overflowY, t) || js(n.overflowX, t) || ((r) => {
      const a = ((o) => {
        if (!o.ownerDocument || !o.ownerDocument.defaultView) return null;
        try {
          return o.ownerDocument.defaultView.frameElement;
        } catch {
          return null;
        }
      })(r);
      return !!a && (a.clientHeight < r.scrollHeight || a.clientWidth < r.scrollWidth);
    })(e2);
  }
  return false;
}, pa = (e2, t, n, r, a, o, i, s) => o < e2 && i > t || o > e2 && i < t ? 0 : o <= e2 && s <= n || i >= t && s >= n ? o - e2 - r : i > t && s < n || o < e2 && s > n ? i - t + a : 0, gg = (e2) => {
  const t = e2.parentElement;
  return t ?? (e2.getRootNode().host || null);
}, Ds = (e2, t) => {
  var n, r, a, o;
  if (typeof document > "u") return [];
  const { scrollMode: i, block: s, inline: c, boundary: u, skipOverflowHiddenElements: d } = t, f = typeof u == "function" ? u : (M) => M !== u;
  if (!_s(e2)) throw new TypeError("Invalid target");
  const h = document.scrollingElement || document.documentElement, p = [];
  let g = e2;
  for (; _s(g) && f(g); ) {
    if (g = gg(g), g === h) {
      p.push(g);
      break;
    }
    g != null && g === document.body && va(g) && !va(document.documentElement) || g != null && va(g, d) && p.push(g);
  }
  const v = (r = (n = window.visualViewport) == null ? void 0 : n.width) != null ? r : innerWidth, m = (o = (a = window.visualViewport) == null ? void 0 : a.height) != null ? o : innerHeight, { scrollX: w, scrollY: b } = window, { height: C, width: x, top: I, right: y, bottom: E, left: O } = e2.getBoundingClientRect(), { top: R, right: S, bottom: $, left: P } = ((M) => {
    const _ = window.getComputedStyle(M);
    return { top: parseFloat(_.scrollMarginTop) || 0, right: parseFloat(_.scrollMarginRight) || 0, bottom: parseFloat(_.scrollMarginBottom) || 0, left: parseFloat(_.scrollMarginLeft) || 0 };
  })(e2);
  let A = s === "start" || s === "nearest" ? I - R : s === "end" ? E + $ : I + C / 2 - R + $, N = c === "center" ? O + x / 2 - P + S : c === "end" ? y + S : O - P;
  const T = [];
  for (let M = 0; M < p.length; M++) {
    const _ = p[M], { height: j, width: z, top: L, right: H, bottom: Y, left: k } = _.getBoundingClientRect();
    if (i === "if-needed" && I >= 0 && O >= 0 && E <= m && y <= v && (_ === h && !va(_) || I >= L && E <= Y && O >= k && y <= H)) return T;
    const F = getComputedStyle(_), B = parseInt(F.borderLeftWidth, 10), G = parseInt(F.borderTopWidth, 10), re = parseInt(F.borderRightWidth, 10), W = parseInt(F.borderBottomWidth, 10);
    let J = 0, oe = 0;
    const K = "offsetWidth" in _ ? _.offsetWidth - _.clientWidth - B - re : 0, q = "offsetHeight" in _ ? _.offsetHeight - _.clientHeight - G - W : 0, Z = "offsetWidth" in _ ? _.offsetWidth === 0 ? 0 : z / _.offsetWidth : 0, ie = "offsetHeight" in _ ? _.offsetHeight === 0 ? 0 : j / _.offsetHeight : 0;
    if (h === _) J = s === "start" ? A : s === "end" ? A - m : s === "nearest" ? pa(b, b + m, m, G, W, b + A, b + A + C, C) : A - m / 2, oe = c === "start" ? N : c === "center" ? N - v / 2 : c === "end" ? N - v : pa(w, w + v, v, B, re, w + N, w + N + x, x), J = Math.max(0, J + b), oe = Math.max(0, oe + w);
    else {
      J = s === "start" ? A - L - G : s === "end" ? A - Y + W + q : s === "nearest" ? pa(L, Y, j, G, W + q, A, A + C, C) : A - (L + j / 2) + q / 2, oe = c === "start" ? N - k - B : c === "center" ? N - (k + z / 2) + K / 2 : c === "end" ? N - H + re + K : pa(k, H, z, B, re + K, N, N + x, x);
      const { scrollLeft: X, scrollTop: ee } = _;
      J = ie === 0 ? 0 : Math.max(0, Math.min(ee + J / ie, _.scrollHeight - j / ie + q)), oe = Z === 0 ? 0 : Math.max(0, Math.min(X + oe / Z, _.scrollWidth - z / Z + K)), A += ee - J, N += X - oe;
    }
    T.push({ el: _, top: J, left: oe });
  }
  return T;
}, hg = (e2) => e2 === false ? { block: "end", inline: "nearest" } : ((t) => t === Object(t) && Object.keys(t).length !== 0)(e2) ? e2 : { block: "start", inline: "nearest" };
function vg(e2, t) {
  if (!e2.isConnected || !((a) => {
    let o = a;
    for (; o && o.parentNode; ) {
      if (o.parentNode === document) return true;
      o = o.parentNode instanceof ShadowRoot ? o.parentNode.host : o.parentNode;
    }
    return false;
  })(e2)) return;
  const n = ((a) => {
    const o = window.getComputedStyle(a);
    return { top: parseFloat(o.scrollMarginTop) || 0, right: parseFloat(o.scrollMarginRight) || 0, bottom: parseFloat(o.scrollMarginBottom) || 0, left: parseFloat(o.scrollMarginLeft) || 0 };
  })(e2);
  if (((a) => typeof a == "object" && typeof a.behavior == "function")(t)) return t.behavior(Ds(e2, t));
  const r = typeof t == "boolean" || t == null ? void 0 : t.behavior;
  for (const { el: a, top: o, left: i } of Ds(e2, hg(t))) {
    const s = o - n.top + n.bottom, c = i - n.left + n.right;
    a.scroll({ top: s, left: c, behavior: r });
  }
}
const ir = (e2) => {
  const [, , , , t] = or();
  return t ? `${e2}-css-var` : "";
};
var He = { BACKSPACE: 8, TAB: 9, ENTER: 13, SHIFT: 16, CTRL: 17, ALT: 18, CAPS_LOCK: 20, ESC: 27, SPACE: 32, END: 35, HOME: 36, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40, N: 78, P: 80, META: 91, WIN_KEY_RIGHT: 92, CONTEXT_MENU: 93, F1: 112, F2: 113, F3: 114, F4: 115, F5: 116, F6: 117, F7: 118, F8: 119, F9: 120, F10: 121, F11: 122, F12: 123, SEMICOLON: 186, EQUALS: 187, WIN_KEY: 224 }, pg = l.forwardRef(function(e2, t) {
  var n = e2.prefixCls, r = e2.style, a = e2.className, o = e2.duration, i = o === void 0 ? 4.5 : o, s = e2.showProgress, c = e2.pauseOnHover, u = c === void 0 ? true : c, d = e2.eventKey, f = e2.content, h = e2.closable, p = e2.closeIcon, g = p === void 0 ? "x" : p, v = e2.props, m = e2.onClick, w = e2.onNoticeClose, b = e2.times, C = e2.hovering, x = l.useState(false), I = te(x, 2), y = I[0], E = I[1], O = l.useState(0), R = te(O, 2), S = R[0], $ = R[1], P = l.useState(0), A = te(P, 2), N = A[0], T = A[1], M = C || y, _ = i > 0 && s, j = function() {
    w(d);
  }, z = function(B) {
    (B.key === "Enter" || B.code === "Enter" || B.keyCode === He.ENTER) && j();
  };
  l.useEffect(function() {
    if (!M && i > 0) {
      var F = Date.now() - N, B = setTimeout(function() {
        j();
      }, i * 1e3 - N);
      return function() {
        u && clearTimeout(B), T(Date.now() - F);
      };
    }
  }, [i, M, b]), l.useEffect(function() {
    if (!M && _ && (u || N === 0)) {
      var F = performance.now(), B, G = function re() {
        cancelAnimationFrame(B), B = requestAnimationFrame(function(W) {
          var J = W + N - F, oe = Math.min(J / (i * 1e3), 1);
          $(oe * 100), oe < 1 && re();
        });
      };
      return G(), function() {
        u && cancelAnimationFrame(B);
      };
    }
  }, [i, N, M, _, b]);
  var L = l.useMemo(function() {
    return et(h) === "object" && h !== null ? h : h ? { closeIcon: g } : {};
  }, [h, g]), H = nr(L, true), Y = 100 - (!S || S < 0 ? 0 : S > 100 ? 100 : S), k = "".concat(n, "-notice");
  return l.createElement("div", Ie({}, v, { ref: t, className: Q(k, a, D({}, "".concat(k, "-closable"), h)), style: r, onMouseEnter: function(B) {
    var G;
    E(true), v == null || (G = v.onMouseEnter) === null || G === void 0 || G.call(v, B);
  }, onMouseLeave: function(B) {
    var G;
    E(false), v == null || (G = v.onMouseLeave) === null || G === void 0 || G.call(v, B);
  }, onClick: m }), l.createElement("div", { className: "".concat(k, "-content") }, f), h && l.createElement("a", Ie({ tabIndex: 0, className: "".concat(k, "-close"), onKeyDown: z, "aria-label": "Close" }, H, { onClick: function(B) {
    B.preventDefault(), B.stopPropagation(), j();
  } }), L.closeIcon), _ && l.createElement("progress", { className: "".concat(k, "-progress"), max: "100", value: Y }, Y + "%"));
}), Gc = ae.createContext({}), z$ = function(t) {
  var n = t.children, r = t.classNames;
  return ae.createElement(Gc.Provider, { value: { classNames: r } }, n);
}, Ls = 8, Bs = 3, zs = 16, bg = function(t) {
  var n = { offset: Ls, threshold: Bs, gap: zs };
  if (t && et(t) === "object") {
    var r, a, o;
    n.offset = (r = t.offset) !== null && r !== void 0 ? r : Ls, n.threshold = (a = t.threshold) !== null && a !== void 0 ? a : Bs, n.gap = (o = t.gap) !== null && o !== void 0 ? o : zs;
  }
  return [!!t, n];
}, yg = ["className", "style", "classNames", "styles"], wg = function(t) {
  var n = t.configList, r = t.placement, a = t.prefixCls, o = t.className, i = t.style, s = t.motion, c = t.onAllNoticeRemoved, u = t.onNoticeClose, d = t.stack, f = l.useContext(Gc), h = f.classNames, p = l.useRef({}), g = l.useState(null), v = te(g, 2), m = v[0], w = v[1], b = l.useState([]), C = te(b, 2), x = C[0], I = C[1], y = n.map(function(M) {
    return { config: M, key: String(M.key) };
  }), E = bg(d), O = te(E, 2), R = O[0], S = O[1], $ = S.offset, P = S.threshold, A = S.gap, N = R && (x.length > 0 || y.length <= P), T = typeof s == "function" ? s(r) : s;
  return l.useEffect(function() {
    R && x.length > 1 && I(function(M) {
      return M.filter(function(_) {
        return y.some(function(j) {
          var z = j.key;
          return _ === z;
        });
      });
    });
  }, [x, y, R]), l.useEffect(function() {
    var M;
    if (R && p.current[(M = y[y.length - 1]) === null || M === void 0 ? void 0 : M.key]) {
      var _;
      w(p.current[(_ = y[y.length - 1]) === null || _ === void 0 ? void 0 : _.key]);
    }
  }, [y, R]), ae.createElement(Rc, Ie({ key: r, className: Q(a, "".concat(a, "-").concat(r), h == null ? void 0 : h.list, o, D(D({}, "".concat(a, "-stack"), !!R), "".concat(a, "-stack-expanded"), N)), style: i, keys: y, motionAppear: true }, T, { onAllRemoved: function() {
    c(r);
  } }), function(M, _) {
    var j = M.config, z = M.className, L = M.style, H = M.index, Y = j, k = Y.key, F = Y.times, B = String(k), G = j, re = G.className, W = G.style, J = G.classNames, oe = G.styles, K = rt(G, yg), q = y.findIndex(function(ue) {
      return ue.key === B;
    }), Z = {};
    if (R) {
      var ie = y.length - 1 - (q > -1 ? q : H - 1), X = r === "top" || r === "bottom" ? "-50%" : "0";
      if (ie > 0) {
        var ee, le, se;
        Z.height = N ? (ee = p.current[B]) === null || ee === void 0 ? void 0 : ee.offsetHeight : m == null ? void 0 : m.offsetHeight;
        for (var de = 0, Oe = 0; Oe < ie; Oe++) {
          var xe;
          de += ((xe = p.current[y[y.length - 1 - Oe].key]) === null || xe === void 0 ? void 0 : xe.offsetHeight) + A;
        }
        var We = (N ? de : ie * $) * (r.startsWith("top") ? 1 : -1), ce = !N && m !== null && m !== void 0 && m.offsetWidth && (le = p.current[B]) !== null && le !== void 0 && le.offsetWidth ? ((m == null ? void 0 : m.offsetWidth) - $ * 2 * (ie < 3 ? ie : 3)) / ((se = p.current[B]) === null || se === void 0 ? void 0 : se.offsetWidth) : 1;
        Z.transform = "translate3d(".concat(X, ", ").concat(We, "px, 0) scaleX(").concat(ce, ")");
      } else Z.transform = "translate3d(".concat(X, ", 0, 0)");
    }
    return ae.createElement("div", { ref: _, className: Q("".concat(a, "-notice-wrapper"), z, J == null ? void 0 : J.wrapper), style: V(V(V({}, L), Z), oe == null ? void 0 : oe.wrapper), onMouseEnter: function() {
      return I(function(pe) {
        return pe.includes(B) ? pe : [].concat(fe(pe), [B]);
      });
    }, onMouseLeave: function() {
      return I(function(pe) {
        return pe.filter(function($e) {
          return $e !== B;
        });
      });
    } }, ae.createElement(pg, Ie({}, K, { ref: function(pe) {
      q > -1 ? p.current[B] = pe : delete p.current[B];
    }, prefixCls: a, classNames: J, styles: oe, className: Q(re, h == null ? void 0 : h.notice), style: W, times: F, key: k, eventKey: k, onNoticeClose: u, hovering: R && x.length > 0 })));
  });
}, Cg = l.forwardRef(function(e2, t) {
  var n = e2.prefixCls, r = n === void 0 ? "rc-notification" : n, a = e2.container, o = e2.motion, i = e2.maxCount, s = e2.className, c = e2.style, u = e2.onAllRemoved, d = e2.stack, f = e2.renderNotifications, h = l.useState([]), p = te(h, 2), g = p[0], v = p[1], m = function(R) {
    var S, $ = g.find(function(P) {
      return P.key === R;
    });
    $ == null || (S = $.onClose) === null || S === void 0 || S.call($), v(function(P) {
      return P.filter(function(A) {
        return A.key !== R;
      });
    });
  };
  l.useImperativeHandle(t, function() {
    return { open: function(R) {
      v(function(S) {
        var $ = fe(S), P = $.findIndex(function(T) {
          return T.key === R.key;
        }), A = V({}, R);
        if (P >= 0) {
          var N;
          A.times = (((N = S[P]) === null || N === void 0 ? void 0 : N.times) || 0) + 1, $[P] = A;
        } else A.times = 0, $.push(A);
        return i > 0 && $.length > i && ($ = $.slice(-i)), $;
      });
    }, close: function(R) {
      m(R);
    }, destroy: function() {
      v([]);
    } };
  });
  var w = l.useState({}), b = te(w, 2), C = b[0], x = b[1];
  l.useEffect(function() {
    var O = {};
    g.forEach(function(R) {
      var S = R.placement, $ = S === void 0 ? "topRight" : S;
      $ && (O[$] = O[$] || [], O[$].push(R));
    }), Object.keys(C).forEach(function(R) {
      O[R] = O[R] || [];
    }), x(O);
  }, [g]);
  var I = function(R) {
    x(function(S) {
      var $ = V({}, S), P = $[R] || [];
      return P.length || delete $[R], $;
    });
  }, y = l.useRef(false);
  if (l.useEffect(function() {
    Object.keys(C).length > 0 ? y.current = true : y.current && (u == null ? void 0 : u(), y.current = false);
  }, [C]), !a) return null;
  var E = Object.keys(C);
  return Wr.createPortal(l.createElement(l.Fragment, null, E.map(function(O) {
    var R = C[O], S = l.createElement(wg, { key: O, configList: R, placement: O, prefixCls: r, className: s == null ? void 0 : s(O), style: c == null ? void 0 : c(O), motion: o, onNoticeClose: m, onAllNoticeRemoved: I, stack: d });
    return f ? f(S, { prefixCls: r, key: O }) : S;
  })), a);
}), Sg = ["getContainer", "motion", "prefixCls", "maxCount", "className", "style", "onAllRemoved", "stack", "renderNotifications"], xg = function() {
  return document.body;
}, Hs = 0;
function $g() {
  for (var e2 = {}, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
  return n.forEach(function(a) {
    a && Object.keys(a).forEach(function(o) {
      var i = a[o];
      i !== void 0 && (e2[o] = i);
    });
  }), e2;
}
function H$() {
  var e2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e2.getContainer, n = t === void 0 ? xg : t, r = e2.motion, a = e2.prefixCls, o = e2.maxCount, i = e2.className, s = e2.style, c = e2.onAllRemoved, u = e2.stack, d = e2.renderNotifications, f = rt(e2, Sg), h = l.useState(), p = te(h, 2), g = p[0], v = p[1], m = l.useRef(), w = l.createElement(Cg, { container: g, ref: m, prefixCls: a, motion: r, maxCount: o, className: i, style: s, onAllRemoved: c, stack: u, renderNotifications: d }), b = l.useState([]), C = te(b, 2), x = C[0], I = C[1], y = jt(function(O) {
    var R = $g(f, O);
    (R.key === null || R.key === void 0) && (R.key = "rc-notification-".concat(Hs), Hs += 1), I(function(S) {
      return [].concat(fe(S), [{ type: "open", config: R }]);
    });
  }), E = l.useMemo(function() {
    return { open: y, close: function(R) {
      I(function(S) {
        return [].concat(fe(S), [{ type: "close", key: R }]);
      });
    }, destroy: function() {
      I(function(R) {
        return [].concat(fe(R), [{ type: "destroy" }]);
      });
    } };
  }, []);
  return l.useEffect(function() {
    v(n());
  }), l.useEffect(function() {
    if (m.current && x.length) {
      x.forEach(function(S) {
        switch (S.type) {
          case "open":
            m.current.open(S.config);
            break;
          case "close":
            m.current.close(S.key);
            break;
          case "destroy":
            m.current.destroy();
            break;
        }
      });
      var O, R;
      I(function(S) {
        return (O !== S || !R) && (O = S, R = S.filter(function($) {
          return !x.includes($);
        })), R;
      });
    }
  }, [x]), [E, w];
}
var Eg = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, name: "loading", theme: "outlined" }, Rg = function(t, n) {
  return l.createElement(Ft, Ie({}, t, { ref: n, icon: Eg }));
}, Ua = l.forwardRef(Rg);
const Kc = ae.createContext(void 0), Vn = 100, Og = 10, V$ = Vn * Og, Xc = { Modal: Vn, Drawer: Vn, Popover: Vn, Popconfirm: Vn, Tooltip: Vn, Tour: Vn, FloatButton: Vn }, Ig = { SelectLike: 50, Dropdown: 50, DatePicker: 50, Menu: 50, ImagePreview: 1 };
function Ag(e2) {
  return e2 in Xc;
}
const Yc = (e2, t) => {
  const [, n] = or(), r = ae.useContext(Kc), a = Ag(e2);
  let o;
  if (t !== void 0) o = [t, t];
  else {
    let i = r ?? 0;
    a ? i += (r ? 0 : n.zIndexPopupBase) + Xc[e2] : i += Ig[e2], o = [r === void 0 ? t : i, i];
  }
  return o;
};
function Vt() {
  Vt = function() {
    return t;
  };
  var e2, t = {}, n = Object.prototype, r = n.hasOwnProperty, a = typeof Symbol == "function" ? Symbol : {}, o = a.iterator || "@@iterator", i = a.asyncIterator || "@@asyncIterator", s = a.toStringTag || "@@toStringTag";
  function c(S, $, P, A) {
    return Object.defineProperty(S, $, { value: P, enumerable: !A, configurable: !A, writable: !A });
  }
  try {
    c({}, "");
  } catch {
    c = function(P, A, N) {
      return P[A] = N;
    };
  }
  function u(S, $, P, A) {
    var N = $ && $.prototype instanceof h ? $ : h, T = Object.create(N.prototype);
    return c(T, "_invoke", /* @__PURE__ */ function(M, _, j) {
      var z = 1;
      return function(L, H) {
        if (z === 3) throw Error("Generator is already running");
        if (z === 4) {
          if (L === "throw") throw H;
          return { value: e2, done: true };
        }
        for (j.method = L, j.arg = H; ; ) {
          var Y = j.delegate;
          if (Y) {
            var k = I(Y, j);
            if (k) {
              if (k === f) continue;
              return k;
            }
          }
          if (j.method === "next") j.sent = j._sent = j.arg;
          else if (j.method === "throw") {
            if (z === 1) throw z = 4, j.arg;
            j.dispatchException(j.arg);
          } else j.method === "return" && j.abrupt("return", j.arg);
          z = 3;
          var F = d(M, _, j);
          if (F.type === "normal") {
            if (z = j.done ? 4 : 2, F.arg === f) continue;
            return { value: F.arg, done: j.done };
          }
          F.type === "throw" && (z = 4, j.method = "throw", j.arg = F.arg);
        }
      };
    }(S, P, new O(A || [])), true), T;
  }
  function d(S, $, P) {
    try {
      return { type: "normal", arg: S.call($, P) };
    } catch (A) {
      return { type: "throw", arg: A };
    }
  }
  t.wrap = u;
  var f = {};
  function h() {
  }
  function p() {
  }
  function g() {
  }
  var v = {};
  c(v, o, function() {
    return this;
  });
  var m = Object.getPrototypeOf, w = m && m(m(R([])));
  w && w !== n && r.call(w, o) && (v = w);
  var b = g.prototype = h.prototype = Object.create(v);
  function C(S) {
    ["next", "throw", "return"].forEach(function($) {
      c(S, $, function(P) {
        return this._invoke($, P);
      });
    });
  }
  function x(S, $) {
    function P(N, T, M, _) {
      var j = d(S[N], S, T);
      if (j.type !== "throw") {
        var z = j.arg, L = z.value;
        return L && et(L) == "object" && r.call(L, "__await") ? $.resolve(L.__await).then(function(H) {
          P("next", H, M, _);
        }, function(H) {
          P("throw", H, M, _);
        }) : $.resolve(L).then(function(H) {
          z.value = H, M(z);
        }, function(H) {
          return P("throw", H, M, _);
        });
      }
      _(j.arg);
    }
    var A;
    c(this, "_invoke", function(N, T) {
      function M() {
        return new $(function(_, j) {
          P(N, T, _, j);
        });
      }
      return A = A ? A.then(M, M) : M();
    }, true);
  }
  function I(S, $) {
    var P = $.method, A = S.i[P];
    if (A === e2) return $.delegate = null, P === "throw" && S.i.return && ($.method = "return", $.arg = e2, I(S, $), $.method === "throw") || P !== "return" && ($.method = "throw", $.arg = new TypeError("The iterator does not provide a '" + P + "' method")), f;
    var N = d(A, S.i, $.arg);
    if (N.type === "throw") return $.method = "throw", $.arg = N.arg, $.delegate = null, f;
    var T = N.arg;
    return T ? T.done ? ($[S.r] = T.value, $.next = S.n, $.method !== "return" && ($.method = "next", $.arg = e2), $.delegate = null, f) : T : ($.method = "throw", $.arg = new TypeError("iterator result is not an object"), $.delegate = null, f);
  }
  function y(S) {
    this.tryEntries.push(S);
  }
  function E(S) {
    var $ = S[4] || {};
    $.type = "normal", $.arg = e2, S[4] = $;
  }
  function O(S) {
    this.tryEntries = [[-1]], S.forEach(y, this), this.reset(true);
  }
  function R(S) {
    if (S != null) {
      var $ = S[o];
      if ($) return $.call(S);
      if (typeof S.next == "function") return S;
      if (!isNaN(S.length)) {
        var P = -1, A = function N() {
          for (; ++P < S.length; ) if (r.call(S, P)) return N.value = S[P], N.done = false, N;
          return N.value = e2, N.done = true, N;
        };
        return A.next = A;
      }
    }
    throw new TypeError(et(S) + " is not iterable");
  }
  return p.prototype = g, c(b, "constructor", g), c(g, "constructor", p), p.displayName = c(g, s, "GeneratorFunction"), t.isGeneratorFunction = function(S) {
    var $ = typeof S == "function" && S.constructor;
    return !!$ && ($ === p || ($.displayName || $.name) === "GeneratorFunction");
  }, t.mark = function(S) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(S, g) : (S.__proto__ = g, c(S, s, "GeneratorFunction")), S.prototype = Object.create(b), S;
  }, t.awrap = function(S) {
    return { __await: S };
  }, C(x.prototype), c(x.prototype, i, function() {
    return this;
  }), t.AsyncIterator = x, t.async = function(S, $, P, A, N) {
    N === void 0 && (N = Promise);
    var T = new x(u(S, $, P, A), N);
    return t.isGeneratorFunction($) ? T : T.next().then(function(M) {
      return M.done ? M.value : T.next();
    });
  }, C(b), c(b, s, "Generator"), c(b, o, function() {
    return this;
  }), c(b, "toString", function() {
    return "[object Generator]";
  }), t.keys = function(S) {
    var $ = Object(S), P = [];
    for (var A in $) P.unshift(A);
    return function N() {
      for (; P.length; ) if ((A = P.pop()) in $) return N.value = A, N.done = false, N;
      return N.done = true, N;
    };
  }, t.values = R, O.prototype = { constructor: O, reset: function($) {
    if (this.prev = this.next = 0, this.sent = this._sent = e2, this.done = false, this.delegate = null, this.method = "next", this.arg = e2, this.tryEntries.forEach(E), !$) for (var P in this) P.charAt(0) === "t" && r.call(this, P) && !isNaN(+P.slice(1)) && (this[P] = e2);
  }, stop: function() {
    this.done = true;
    var $ = this.tryEntries[0][4];
    if ($.type === "throw") throw $.arg;
    return this.rval;
  }, dispatchException: function($) {
    if (this.done) throw $;
    var P = this;
    function A(L) {
      M.type = "throw", M.arg = $, P.next = L;
    }
    for (var N = P.tryEntries.length - 1; N >= 0; --N) {
      var T = this.tryEntries[N], M = T[4], _ = this.prev, j = T[1], z = T[2];
      if (T[0] === -1) return A("end"), false;
      if (!j && !z) throw Error("try statement without catch or finally");
      if (T[0] != null && T[0] <= _) {
        if (_ < j) return this.method = "next", this.arg = e2, A(j), true;
        if (_ < z) return A(z), false;
      }
    }
  }, abrupt: function($, P) {
    for (var A = this.tryEntries.length - 1; A >= 0; --A) {
      var N = this.tryEntries[A];
      if (N[0] > -1 && N[0] <= this.prev && this.prev < N[2]) {
        var T = N;
        break;
      }
    }
    T && ($ === "break" || $ === "continue") && T[0] <= P && P <= T[2] && (T = null);
    var M = T ? T[4] : {};
    return M.type = $, M.arg = P, T ? (this.method = "next", this.next = T[2], f) : this.complete(M);
  }, complete: function($, P) {
    if ($.type === "throw") throw $.arg;
    return $.type === "break" || $.type === "continue" ? this.next = $.arg : $.type === "return" ? (this.rval = this.arg = $.arg, this.method = "return", this.next = "end") : $.type === "normal" && P && (this.next = P), f;
  }, finish: function($) {
    for (var P = this.tryEntries.length - 1; P >= 0; --P) {
      var A = this.tryEntries[P];
      if (A[2] === $) return this.complete(A[4], A[3]), E(A), f;
    }
  }, catch: function($) {
    for (var P = this.tryEntries.length - 1; P >= 0; --P) {
      var A = this.tryEntries[P];
      if (A[0] === $) {
        var N = A[4];
        if (N.type === "throw") {
          var T = N.arg;
          E(A);
        }
        return T;
      }
    }
    throw Error("illegal catch attempt");
  }, delegateYield: function($, P, A) {
    return this.delegate = { i: R($), r: P, n: A }, this.method === "next" && (this.arg = e2), f;
  } }, t;
}
function Vs(e2, t, n, r, a, o, i) {
  try {
    var s = e2[o](i), c = s.value;
  } catch (u) {
    return void n(u);
  }
  s.done ? t(c) : Promise.resolve(c).then(r, a);
}
function sr(e2) {
  return function() {
    var t = this, n = arguments;
    return new Promise(function(r, a) {
      var o = e2.apply(t, n);
      function i(c) {
        Vs(o, r, a, i, s, "next", c);
      }
      function s(c) {
        Vs(o, r, a, i, s, "throw", c);
      }
      i(void 0);
    });
  };
}
var Zr = V({}, Cf), Pg = Zr.version, Eo = Zr.render, Ng = Zr.unmountComponentAtNode, ka;
try {
  var Mg = Number((Pg || "").split(".")[0]);
  Mg >= 18 && (ka = Zr.createRoot);
} catch {
}
function Ws(e2) {
  var t = Zr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  t && et(t) === "object" && (t.usingClientEntryPoint = e2);
}
var Fa = "__rc_react_root__";
function Fg(e2, t) {
  Ws(true);
  var n = t[Fa] || ka(t);
  Ws(false), n.render(e2), t[Fa] = n;
}
function Tg(e2, t) {
  Eo == null ? void 0 : Eo(e2, t);
}
function _g(e2, t) {
  if (ka) {
    Fg(e2, t);
    return;
  }
  Tg(e2, t);
}
function jg(e2) {
  return ci.apply(this, arguments);
}
function ci() {
  return ci = sr(Vt().mark(function e2(t) {
    return Vt().wrap(function(r) {
      for (; ; ) switch (r.prev = r.next) {
        case 0:
          return r.abrupt("return", Promise.resolve().then(function() {
            var a;
            (a = t[Fa]) === null || a === void 0 || a.unmount(), delete t[Fa];
          }));
        case 1:
        case "end":
          return r.stop();
      }
    }, e2);
  })), ci.apply(this, arguments);
}
function Dg(e2) {
  Ng(e2);
}
function Lg(e2) {
  return ui.apply(this, arguments);
}
function ui() {
  return ui = sr(Vt().mark(function e2(t) {
    return Vt().wrap(function(r) {
      for (; ; ) switch (r.prev = r.next) {
        case 0:
          if (ka === void 0) {
            r.next = 2;
            break;
          }
          return r.abrupt("return", jg(t));
        case 2:
          Dg(t);
        case 3:
        case "end":
          return r.stop();
      }
    }, e2);
  })), ui.apply(this, arguments);
}
const Bg = (e2, t) => (_g(e2, t), () => Lg(t));
let zg = Bg;
function Hg() {
  return zg;
}
const Ro = () => ({ height: 0, opacity: 0 }), qs = (e2) => {
  const { scrollHeight: t } = e2;
  return { height: t, opacity: 1 };
}, Vg = (e2) => ({ height: e2 ? e2.offsetHeight : 0 }), Oo = (e2, t) => (t == null ? void 0 : t.deadline) === true || t.propertyName === "height", di = function() {
  return { motionName: `${arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Oc}-motion-collapse`, onAppearStart: Ro, onEnterStart: Ro, onAppearActive: qs, onEnterActive: qs, onLeaveStart: Vg, onLeaveActive: Ro, onAppearEnd: Oo, onEnterEnd: Oo, onLeaveEnd: Oo, motionDeadline: 500 };
}, Qc = (e2, t, n) => n !== void 0 ? n : `${e2}-${t}`;
function dn(e2, t) {
  var n = Object.assign({}, e2);
  return Array.isArray(t) && t.forEach(function(r) {
    delete n[r];
  }), n;
}
const qi = function(e2) {
  if (!e2) return false;
  if (e2 instanceof Element) {
    if (e2.offsetParent) return true;
    if (e2.getBBox) {
      var t = e2.getBBox(), n = t.width, r = t.height;
      if (n || r) return true;
    }
    if (e2.getBoundingClientRect) {
      var a = e2.getBoundingClientRect(), o = a.width, i = a.height;
      if (o || i) return true;
    }
  }
  return false;
}, Wg = (e2) => {
  const { componentCls: t, colorPrimary: n } = e2;
  return { [t]: { position: "absolute", background: "transparent", pointerEvents: "none", boxSizing: "border-box", color: `var(--wave-color, ${n})`, boxShadow: "0 0 0 0 currentcolor", opacity: 0.2, "&.wave-motion-appear": { transition: [`box-shadow 0.4s ${e2.motionEaseOutCirc}`, `opacity 2s ${e2.motionEaseOutCirc}`].join(","), "&-active": { boxShadow: "0 0 0 6px currentcolor", opacity: 0 }, "&.wave-quick": { transition: [`box-shadow ${e2.motionDurationSlow} ${e2.motionEaseInOut}`, `opacity ${e2.motionDurationSlow} ${e2.motionEaseInOut}`].join(",") } } } };
}, qg = Sf("Wave", (e2) => [Wg(e2)]), Jc = `${Oc}-wave-target`;
function Io(e2) {
  return e2 && e2 !== "#fff" && e2 !== "#ffffff" && e2 !== "rgb(255, 255, 255)" && e2 !== "rgba(255, 255, 255, 1)" && !/rgba\((?:\d*, ){3}0\)/.test(e2) && e2 !== "transparent";
}
function Ug(e2) {
  const { borderTopColor: t, borderColor: n, backgroundColor: r } = getComputedStyle(e2);
  return Io(t) ? t : Io(n) ? n : Io(r) ? r : null;
}
function Ao(e2) {
  return Number.isNaN(e2) ? 0 : e2;
}
const kg = (e2) => {
  const { className: t, target: n, component: r, registerUnmount: a } = e2, o = l.useRef(null), i = l.useRef(null);
  l.useEffect(() => {
    i.current = a();
  }, []);
  const [s, c] = l.useState(null), [u, d] = l.useState([]), [f, h] = l.useState(0), [p, g] = l.useState(0), [v, m] = l.useState(0), [w, b] = l.useState(0), [C, x] = l.useState(false), I = { left: f, top: p, width: v, height: w, borderRadius: u.map((O) => `${O}px`).join(" ") };
  s && (I["--wave-color"] = s);
  function y() {
    const O = getComputedStyle(n);
    c(Ug(n));
    const R = O.position === "static", { borderLeftWidth: S, borderTopWidth: $ } = O;
    h(R ? n.offsetLeft : Ao(-parseFloat(S))), g(R ? n.offsetTop : Ao(-parseFloat($))), m(n.offsetWidth), b(n.offsetHeight);
    const { borderTopLeftRadius: P, borderTopRightRadius: A, borderBottomLeftRadius: N, borderBottomRightRadius: T } = O;
    d([P, A, T, N].map((M) => Ao(parseFloat(M))));
  }
  if (l.useEffect(() => {
    if (n) {
      const O = pt(() => {
        y(), x(true);
      });
      let R;
      return typeof ResizeObserver < "u" && (R = new ResizeObserver(y), R.observe(n)), () => {
        pt.cancel(O), R == null ? void 0 : R.disconnect();
      };
    }
  }, []), !C) return null;
  const E = (r === "Checkbox" || r === "Radio") && (n == null ? void 0 : n.classList.contains(Jc));
  return l.createElement(xr, { visible: true, motionAppear: true, motionName: "wave-motion", motionDeadline: 5e3, onAppearEnd: (O, R) => {
    var S, $;
    if (R.deadline || R.propertyName === "opacity") {
      const P = (S = o.current) === null || S === void 0 ? void 0 : S.parentElement;
      ($ = i.current) === null || $ === void 0 || $.call(i).then(() => {
        P == null ? void 0 : P.remove();
      });
    }
    return false;
  } }, (O, R) => {
    let { className: S } = O;
    return l.createElement("div", { ref: Tn(o, R), className: Q(t, S, { "wave-quick": E }), style: I });
  });
}, Gg = (e2, t) => {
  var n;
  const { component: r } = t;
  if (r === "Checkbox" && !(!((n = e2.querySelector("input")) === null || n === void 0) && n.checked)) return;
  const a = document.createElement("div");
  a.style.position = "absolute", a.style.left = "0px", a.style.top = "0px", e2 == null ? void 0 : e2.insertBefore(a, e2 == null ? void 0 : e2.firstChild);
  const o = Hg();
  let i = null;
  function s() {
    return i;
  }
  i = o(l.createElement(kg, Object.assign({}, t, { target: e2, registerUnmount: s })), a);
}, Kg = (e2, t, n) => {
  const { wave: r } = l.useContext(ft), [, a, o] = or(), i = jt((u) => {
    const d = e2.current;
    if ((r == null ? void 0 : r.disabled) || !d) return;
    const f = d.querySelector(`.${Jc}`) || d, { showEffect: h } = r || {};
    (h || Gg)(f, { className: t, token: a, component: n, event: u, hashId: o });
  }), s = l.useRef(null);
  return (u) => {
    pt.cancel(s.current), s.current = pt(() => {
      i(u);
    });
  };
}, Zc = (e2) => {
  const { children: t, disabled: n, component: r } = e2, { getPrefixCls: a } = l.useContext(ft), o = l.useRef(null), i = a("wave"), [, s] = qg(i), c = Kg(o, Q(i, s), r);
  if (ae.useEffect(() => {
    const d = o.current;
    if (!d || d.nodeType !== 1 || n) return;
    const f = (h) => {
      !qi(h.target) || !d.getAttribute || d.getAttribute("disabled") || d.disabled || d.className.includes("disabled") || d.className.includes("-leave") || c(h);
    };
    return d.addEventListener("click", f, true), () => {
      d.removeEventListener("click", f, true);
    };
  }, [n]), !ae.isValidElement(t)) return t ?? null;
  const u = Yr(t) ? Tn(Va(t), o) : o;
  return qn(t, { ref: u });
}, wn = (e2) => {
  const t = ae.useContext(Ic);
  return ae.useMemo(() => e2 ? typeof e2 == "string" ? e2 ?? t : typeof e2 == "function" ? e2(t) : t : t, [e2, t]);
}, Xg = (e2) => {
  const { componentCls: t } = e2;
  return { [t]: { "&-block": { display: "flex", width: "100%" }, "&-vertical": { flexDirection: "column" } } };
}, Yg = (e2) => {
  const { componentCls: t, antCls: n } = e2;
  return { [t]: { display: "inline-flex", "&-rtl": { direction: "rtl" }, "&-vertical": { flexDirection: "column" }, "&-align": { flexDirection: "column", "&-center": { alignItems: "center" }, "&-start": { alignItems: "flex-start" }, "&-end": { alignItems: "flex-end" }, "&-baseline": { alignItems: "baseline" } }, [`${t}-item:empty`]: { display: "none" }, [`${t}-item > ${n}-badge-not-a-wrapper:only-child`]: { display: "block" } } };
}, Qg = (e2) => {
  const { componentCls: t } = e2;
  return { [t]: { "&-gap-row-small": { rowGap: e2.spaceGapSmallSize }, "&-gap-row-middle": { rowGap: e2.spaceGapMiddleSize }, "&-gap-row-large": { rowGap: e2.spaceGapLargeSize }, "&-gap-col-small": { columnGap: e2.spaceGapSmallSize }, "&-gap-col-middle": { columnGap: e2.spaceGapMiddleSize }, "&-gap-col-large": { columnGap: e2.spaceGapLargeSize } } };
}, Jg = Lt("Space", (e2) => {
  const t = mt(e2, { spaceGapSmallSize: e2.paddingXS, spaceGapMiddleSize: e2.padding, spaceGapLargeSize: e2.paddingLG });
  return [Yg(t), Qg(t), Xg(t)];
}, () => ({}), { resetStyle: false });
var eu = function(e2, t) {
  var n = {};
  for (var r in e2) Object.prototype.hasOwnProperty.call(e2, r) && t.indexOf(r) < 0 && (n[r] = e2[r]);
  if (e2 != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e2); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e2, r[a]) && (n[r[a]] = e2[r[a]]);
  return n;
};
const Ga = l.createContext(null), Er = (e2, t) => {
  const n = l.useContext(Ga), r = l.useMemo(() => {
    if (!n) return "";
    const { compactDirection: a, isFirstItem: o, isLastItem: i } = n, s = a === "vertical" ? "-vertical-" : "-";
    return Q(`${e2}-compact${s}item`, { [`${e2}-compact${s}first-item`]: o, [`${e2}-compact${s}last-item`]: i, [`${e2}-compact${s}item-rtl`]: t === "rtl" });
  }, [e2, t, n]);
  return { compactSize: n == null ? void 0 : n.compactSize, compactDirection: n == null ? void 0 : n.compactDirection, compactItemClassnames: r };
}, Zg = (e2) => {
  const { children: t } = e2;
  return l.createElement(Ga.Provider, { value: null }, t);
}, eh = (e2) => {
  const { children: t } = e2, n = eu(e2, ["children"]);
  return l.createElement(Ga.Provider, { value: l.useMemo(() => n, [n]) }, t);
}, W$ = (e2) => {
  const { getPrefixCls: t, direction: n } = l.useContext(ft), { size: r, direction: a, block: o, prefixCls: i, className: s, rootClassName: c, children: u } = e2, d = eu(e2, ["size", "direction", "block", "prefixCls", "className", "rootClassName", "children"]), f = wn((C) => r ?? C), h = t("space-compact", i), [p, g] = Jg(h), v = Q(h, g, { [`${h}-rtl`]: n === "rtl", [`${h}-block`]: o, [`${h}-vertical`]: a === "vertical" }, s, c), m = l.useContext(Ga), w = Mn(u), b = l.useMemo(() => w.map((C, x) => {
    const I = (C == null ? void 0 : C.key) || `${h}-item-${x}`;
    return l.createElement(eh, { key: I, compactSize: f, compactDirection: a, isFirstItem: x === 0 && (!m || (m == null ? void 0 : m.isFirstItem)), isLastItem: x === w.length - 1 && (!m || (m == null ? void 0 : m.isLastItem)) }, C);
  }), [r, w, m]);
  return w.length === 0 ? null : p(l.createElement("div", Object.assign({ className: v }, d), b));
};
var th = function(e2, t) {
  var n = {};
  for (var r in e2) Object.prototype.hasOwnProperty.call(e2, r) && t.indexOf(r) < 0 && (n[r] = e2[r]);
  if (e2 != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e2); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e2, r[a]) && (n[r[a]] = e2[r[a]]);
  return n;
};
const tu = l.createContext(void 0), nh = (e2) => {
  const { getPrefixCls: t, direction: n } = l.useContext(ft), { prefixCls: r, size: a, className: o } = e2, i = th(e2, ["prefixCls", "size", "className"]), s = t("btn-group", r), [, , c] = or(), u = l.useMemo(() => {
    switch (a) {
      case "large":
        return "lg";
      case "small":
        return "sm";
      default:
        return "";
    }
  }, [a]), d = Q(s, { [`${s}-${u}`]: u, [`${s}-rtl`]: n === "rtl" }, o, c);
  return l.createElement(tu.Provider, { value: a }, l.createElement("div", Object.assign({}, i, { className: d })));
}, Us = /^[\u4E00-\u9FA5]{2}$/, fi = Us.test.bind(Us);
function q$(e2) {
  return e2 === "danger" ? { danger: true } : { type: e2 };
}
function ks(e2) {
  return typeof e2 == "string";
}
function Po(e2) {
  return e2 === "text" || e2 === "link";
}
function rh(e2, t) {
  if (e2 == null) return;
  const n = t ? " " : "";
  return typeof e2 != "string" && typeof e2 != "number" && ks(e2.type) && fi(e2.props.children) ? qn(e2, { children: e2.props.children.split("").join(n) }) : ks(e2) ? fi(e2) ? ae.createElement("span", null, e2.split("").join(n)) : ae.createElement("span", null, e2) : kc(e2) ? ae.createElement("span", null, e2) : e2;
}
function ah(e2, t) {
  let n = false;
  const r = [];
  return ae.Children.forEach(e2, (a) => {
    const o = typeof a, i = o === "string" || o === "number";
    if (n && i) {
      const s = r.length - 1, c = r[s];
      r[s] = `${c}${a}`;
    } else r.push(a);
    n = i;
  }), ae.Children.map(r, (a) => rh(a, t));
}
["default", "primary", "danger"].concat(fe(tr));
const mi = l.forwardRef((e2, t) => {
  const { className: n, style: r, children: a, prefixCls: o } = e2, i = Q(`${o}-icon`, n);
  return ae.createElement("span", { ref: t, className: i, style: r }, a);
}), Gs = l.forwardRef((e2, t) => {
  const { prefixCls: n, className: r, style: a, iconClassName: o } = e2, i = Q(`${n}-loading-icon`, r);
  return ae.createElement(mi, { prefixCls: n, className: i, style: a, ref: t }, ae.createElement(Ua, { className: o }));
}), No = () => ({ width: 0, opacity: 0, transform: "scale(0)" }), Mo = (e2) => ({ width: e2.scrollWidth, opacity: 1, transform: "scale(1)" }), oh = (e2) => {
  const { prefixCls: t, loading: n, existIcon: r, className: a, style: o, mount: i } = e2, s = !!n;
  return r ? ae.createElement(Gs, { prefixCls: t, className: a, style: o }) : ae.createElement(xr, { visible: s, motionName: `${t}-loading-icon-motion`, motionAppear: !i, motionEnter: !i, motionLeave: !i, removeOnLeave: true, onAppearStart: No, onAppearActive: Mo, onEnterStart: No, onEnterActive: Mo, onLeaveStart: Mo, onLeaveActive: No }, (c, u) => {
    let { className: d, style: f } = c;
    const h = Object.assign(Object.assign({}, o), f);
    return ae.createElement(Gs, { prefixCls: t, className: Q(a, d), style: h, ref: u });
  });
}, Ks = (e2, t) => ({ [`> span, > ${e2}`]: { "&:not(:last-child)": { [`&, & > ${e2}`]: { "&:not(:disabled)": { borderInlineEndColor: t } } }, "&:not(:first-child)": { [`&, & > ${e2}`]: { "&:not(:disabled)": { borderInlineStartColor: t } } } } }), ih = (e2) => {
  const { componentCls: t, fontSize: n, lineWidth: r, groupBorderColor: a, colorErrorHover: o } = e2;
  return { [`${t}-group`]: [{ position: "relative", display: "inline-flex", [`> span, > ${t}`]: { "&:not(:last-child)": { [`&, & > ${t}`]: { borderStartEndRadius: 0, borderEndEndRadius: 0 } }, "&:not(:first-child)": { marginInlineStart: e2.calc(r).mul(-1).equal(), [`&, & > ${t}`]: { borderStartStartRadius: 0, borderEndStartRadius: 0 } } }, [t]: { position: "relative", zIndex: 1, "&:hover, &:focus, &:active": { zIndex: 2 }, "&[disabled]": { zIndex: 0 } }, [`${t}-icon-only`]: { fontSize: n } }, Ks(`${t}-primary`, a), Ks(`${t}-danger`, o)] };
};
var sh = ["b"], lh = ["v"], Fo = function(t) {
  return Math.round(Number(t || 0));
}, ch = function(t) {
  if (t instanceof Wa) return t;
  if (t && et(t) === "object" && "h" in t && "b" in t) {
    var n = t, r = n.b, a = rt(n, sh);
    return V(V({}, a), {}, { v: r });
  }
  return typeof t == "string" && /hsb/.test(t) ? t.replace(/hsb/, "hsv") : t;
}, Ur = function(e2) {
  za(n, e2);
  var t = Ha(n);
  function n(r) {
    return fn(this, n), t.call(this, ch(r));
  }
  return mn(n, [{ key: "toHsbString", value: function() {
    var a = this.toHsb(), o = Fo(a.s * 100), i = Fo(a.b * 100), s = Fo(a.h), c = a.a, u = "hsb(".concat(s, ", ").concat(o, "%, ").concat(i, "%)"), d = "hsba(".concat(s, ", ").concat(o, "%, ").concat(i, "%, ").concat(c.toFixed(c === 0 ? 0 : 2), ")");
    return c === 1 ? u : d;
  } }, { key: "toHsb", value: function() {
    var a = this.toHsv(), o = a.v, i = rt(a, lh);
    return V(V({}, i), {}, { b: o, a: this.a });
  } }]), n;
}(Wa), uh = function(t) {
  return t instanceof Ur ? t : new Ur(t);
};
uh("#1677ff");
const dh = (e2, t) => (e2 == null ? void 0 : e2.replace(/[^\w/]/g, "").slice(0, t ? 8 : 6)) || "", fh = (e2, t) => e2 ? dh(e2, t) : "";
let mh = function() {
  function e2(t) {
    fn(this, e2);
    var n;
    if (this.cleared = false, t instanceof e2) {
      this.metaColor = t.metaColor.clone(), this.colors = (n = t.colors) === null || n === void 0 ? void 0 : n.map((a) => ({ color: new e2(a.color), percent: a.percent })), this.cleared = t.cleared;
      return;
    }
    const r = Array.isArray(t);
    r && t.length ? (this.colors = t.map((a) => {
      let { color: o, percent: i } = a;
      return { color: new e2(o), percent: i };
    }), this.metaColor = new Ur(this.colors[0].color.metaColor)) : this.metaColor = new Ur(r ? "" : t), (!t || r && !this.colors) && (this.metaColor = this.metaColor.setA(0), this.cleared = true);
  }
  return mn(e2, [{ key: "toHsb", value: function() {
    return this.metaColor.toHsb();
  } }, { key: "toHsbString", value: function() {
    return this.metaColor.toHsbString();
  } }, { key: "toHex", value: function() {
    return fh(this.toHexString(), this.metaColor.a < 1);
  } }, { key: "toHexString", value: function() {
    return this.metaColor.toHexString();
  } }, { key: "toRgb", value: function() {
    return this.metaColor.toRgb();
  } }, { key: "toRgbString", value: function() {
    return this.metaColor.toRgbString();
  } }, { key: "isGradient", value: function() {
    return !!this.colors && !this.cleared;
  } }, { key: "getColors", value: function() {
    return this.colors || [{ color: this, percent: 0 }];
  } }, { key: "toCssString", value: function() {
    const { colors: n } = this;
    return n ? `linear-gradient(90deg, ${n.map((a) => `${a.color.toRgbString()} ${a.percent}%`).join(", ")})` : this.metaColor.toRgbString();
  } }, { key: "equals", value: function(n) {
    return !n || this.isGradient() !== n.isGradient() ? false : this.isGradient() ? this.colors.length === n.colors.length && this.colors.every((r, a) => {
      const o = n.colors[a];
      return r.percent === o.percent && r.color.equals(o.color);
    }) : this.toHexString() === n.toHexString();
  } }]);
}();
var gh = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z" } }] }, name: "right", theme: "outlined" }, hh = function(t, n) {
  return l.createElement(Ft, Ie({}, t, { ref: n, icon: gh }));
}, vh = l.forwardRef(hh), nu = ae.forwardRef(function(e2, t) {
  var n = e2.prefixCls, r = e2.forceRender, a = e2.className, o = e2.style, i = e2.children, s = e2.isActive, c = e2.role, u = e2.classNames, d = e2.styles, f = ae.useState(s || r), h = te(f, 2), p = h[0], g = h[1];
  return ae.useEffect(function() {
    (r || s) && g(true);
  }, [r, s]), p ? ae.createElement("div", { ref: t, className: Q("".concat(n, "-content"), D(D({}, "".concat(n, "-content-active"), s), "".concat(n, "-content-inactive"), !s), a), style: o, role: c }, ae.createElement("div", { className: Q("".concat(n, "-content-box"), u == null ? void 0 : u.body), style: d == null ? void 0 : d.body }, i)) : null;
});
nu.displayName = "PanelContent";
var ph = ["showArrow", "headerClass", "isActive", "onItemClick", "forceRender", "className", "classNames", "styles", "prefixCls", "collapsible", "accordion", "panelKey", "extra", "header", "expandIcon", "openMotion", "destroyInactivePanel", "children"], ru = ae.forwardRef(function(e2, t) {
  var n = e2.showArrow, r = n === void 0 ? true : n, a = e2.headerClass, o = e2.isActive, i = e2.onItemClick, s = e2.forceRender, c = e2.className, u = e2.classNames, d = u === void 0 ? {} : u, f = e2.styles, h = f === void 0 ? {} : f, p = e2.prefixCls, g = e2.collapsible, v = e2.accordion, m = e2.panelKey, w = e2.extra, b = e2.header, C = e2.expandIcon, x = e2.openMotion, I = e2.destroyInactivePanel, y = e2.children, E = rt(e2, ph), O = g === "disabled", R = w != null && typeof w != "boolean", S = D(D(D({ onClick: function() {
    i == null ? void 0 : i(m);
  }, onKeyDown: function(_) {
    (_.key === "Enter" || _.keyCode === He.ENTER || _.which === He.ENTER) && (i == null ? void 0 : i(m));
  }, role: v ? "tab" : "button" }, "aria-expanded", o), "aria-disabled", O), "tabIndex", O ? -1 : 0), $ = typeof C == "function" ? C(e2) : ae.createElement("i", { className: "arrow" }), P = $ && ae.createElement("div", Ie({ className: "".concat(p, "-expand-icon") }, ["header", "icon"].includes(g) ? S : {}), $), A = Q("".concat(p, "-item"), D(D({}, "".concat(p, "-item-active"), o), "".concat(p, "-item-disabled"), O), c), N = Q(a, "".concat(p, "-header"), D({}, "".concat(p, "-collapsible-").concat(g), !!g), d.header), T = V({ className: N, style: h.header }, ["header", "icon"].includes(g) ? {} : S);
  return ae.createElement("div", Ie({}, E, { ref: t, className: A }), ae.createElement("div", T, r && P, ae.createElement("span", Ie({ className: "".concat(p, "-header-text") }, g === "header" ? S : {}), b), R && ae.createElement("div", { className: "".concat(p, "-extra") }, w)), ae.createElement(xr, Ie({ visible: o, leavedClassName: "".concat(p, "-content-hidden") }, x, { forceRender: s, removeOnLeave: I }), function(M, _) {
    var j = M.className, z = M.style;
    return ae.createElement(nu, { ref: _, prefixCls: p, className: j, classNames: d, style: z, styles: h, isActive: o, forceRender: s, role: v ? "tabpanel" : void 0 }, y);
  }));
}), bh = ["children", "label", "key", "collapsible", "onItemClick", "destroyInactivePanel"], yh = function(t, n) {
  var r = n.prefixCls, a = n.accordion, o = n.collapsible, i = n.destroyInactivePanel, s = n.onItemClick, c = n.activeKey, u = n.openMotion, d = n.expandIcon;
  return t.map(function(f, h) {
    var p = f.children, g = f.label, v = f.key, m = f.collapsible, w = f.onItemClick, b = f.destroyInactivePanel, C = rt(f, bh), x = String(v ?? h), I = m ?? o, y = b ?? i, E = function(S) {
      I !== "disabled" && (s(S), w == null ? void 0 : w(S));
    }, O = false;
    return a ? O = c[0] === x : O = c.indexOf(x) > -1, ae.createElement(ru, Ie({}, C, { prefixCls: r, key: x, panelKey: x, isActive: O, accordion: a, openMotion: u, expandIcon: d, header: g, collapsible: I, onItemClick: E, destroyInactivePanel: y }), p);
  });
}, wh = function(t, n, r) {
  if (!t) return null;
  var a = r.prefixCls, o = r.accordion, i = r.collapsible, s = r.destroyInactivePanel, c = r.onItemClick, u = r.activeKey, d = r.openMotion, f = r.expandIcon, h = t.key || String(n), p = t.props, g = p.header, v = p.headerClass, m = p.destroyInactivePanel, w = p.collapsible, b = p.onItemClick, C = false;
  o ? C = u[0] === h : C = u.indexOf(h) > -1;
  var x = w ?? i, I = function(O) {
    x !== "disabled" && (c(O), b == null ? void 0 : b(O));
  }, y = { key: h, panelKey: h, header: g, headerClass: v, isActive: C, prefixCls: a, destroyInactivePanel: m ?? s, openMotion: d, accordion: o, children: t.props.children, onItemClick: I, expandIcon: f, collapsible: x };
  return typeof t.type == "string" ? t : (Object.keys(y).forEach(function(E) {
    typeof y[E] > "u" && delete y[E];
  }), ae.cloneElement(t, y));
};
function Ch(e2, t, n) {
  return Array.isArray(e2) ? yh(e2, n) : Mn(t).map(function(r, a) {
    return wh(r, a, n);
  });
}
function Sh(e2) {
  var t = e2;
  if (!Array.isArray(t)) {
    var n = et(t);
    t = n === "number" || n === "string" ? [t] : [];
  }
  return t.map(function(r) {
    return String(r);
  });
}
var xh = ae.forwardRef(function(e2, t) {
  var n = e2.prefixCls, r = n === void 0 ? "rc-collapse" : n, a = e2.destroyInactivePanel, o = a === void 0 ? false : a, i = e2.style, s = e2.accordion, c = e2.className, u = e2.children, d = e2.collapsible, f = e2.openMotion, h = e2.expandIcon, p = e2.activeKey, g = e2.defaultActiveKey, v = e2.onChange, m = e2.items, w = Q(r, c), b = yn([], { value: p, onChange: function(R) {
    return v == null ? void 0 : v(R);
  }, defaultValue: g, postState: Sh }), C = te(b, 2), x = C[0], I = C[1], y = function(R) {
    return I(function() {
      if (s) return x[0] === R ? [] : [R];
      var S = x.indexOf(R), $ = S > -1;
      return $ ? x.filter(function(P) {
        return P !== R;
      }) : [].concat(fe(x), [R]);
    });
  };
  un(!u, "[rc-collapse] `children` will be removed in next major version. Please use `items` instead.");
  var E = Ch(m, u, { prefixCls: r, accordion: s, openMotion: f, expandIcon: h, collapsible: d, destroyInactivePanel: o, onItemClick: y, activeKey: x });
  return ae.createElement("div", Ie({ ref: t, className: w, style: i, role: s ? "tablist" : void 0 }, nr(e2, { aria: true, data: true })), E);
});
const Ui = Object.assign(xh, { Panel: ru });
Ui.Panel;
const $h = l.forwardRef((e2, t) => {
  const { getPrefixCls: n } = l.useContext(ft), { prefixCls: r, className: a, showArrow: o = true } = e2, i = n("collapse", r), s = Q({ [`${i}-no-arrow`]: !o }, a);
  return l.createElement(Ui.Panel, Object.assign({ ref: t }, e2, { prefixCls: i, className: s }));
}), au = (e2) => ({ [e2.componentCls]: { [`${e2.antCls}-motion-collapse-legacy`]: { overflow: "hidden", "&-active": { transition: `height ${e2.motionDurationMid} ${e2.motionEaseInOut},
        opacity ${e2.motionDurationMid} ${e2.motionEaseInOut} !important` } }, [`${e2.antCls}-motion-collapse`]: { overflow: "hidden", transition: `height ${e2.motionDurationMid} ${e2.motionEaseInOut},
        opacity ${e2.motionDurationMid} ${e2.motionEaseInOut} !important` } } }), Eh = (e2) => ({ animationDuration: e2, animationFillMode: "both" }), Rh = (e2) => ({ animationDuration: e2, animationFillMode: "both" }), ki = function(e2, t, n, r) {
  const o = (arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : false) ? "&" : "";
  return { [`
      ${o}${e2}-enter,
      ${o}${e2}-appear
    `]: Object.assign(Object.assign({}, Eh(r)), { animationPlayState: "paused" }), [`${o}${e2}-leave`]: Object.assign(Object.assign({}, Rh(r)), { animationPlayState: "paused" }), [`
      ${o}${e2}-enter${e2}-enter-active,
      ${o}${e2}-appear${e2}-appear-active
    `]: { animationName: t, animationPlayState: "running" }, [`${o}${e2}-leave${e2}-leave-active`]: { animationName: n, animationPlayState: "running", pointerEvents: "none" } };
}, Oh = new it("antMoveDownIn", { "0%": { transform: "translate3d(0, 100%, 0)", transformOrigin: "0 0", opacity: 0 }, "100%": { transform: "translate3d(0, 0, 0)", transformOrigin: "0 0", opacity: 1 } }), Ih = new it("antMoveDownOut", { "0%": { transform: "translate3d(0, 0, 0)", transformOrigin: "0 0", opacity: 1 }, "100%": { transform: "translate3d(0, 100%, 0)", transformOrigin: "0 0", opacity: 0 } }), Ah = new it("antMoveLeftIn", { "0%": { transform: "translate3d(-100%, 0, 0)", transformOrigin: "0 0", opacity: 0 }, "100%": { transform: "translate3d(0, 0, 0)", transformOrigin: "0 0", opacity: 1 } }), Ph = new it("antMoveLeftOut", { "0%": { transform: "translate3d(0, 0, 0)", transformOrigin: "0 0", opacity: 1 }, "100%": { transform: "translate3d(-100%, 0, 0)", transformOrigin: "0 0", opacity: 0 } }), Nh = new it("antMoveRightIn", { "0%": { transform: "translate3d(100%, 0, 0)", transformOrigin: "0 0", opacity: 0 }, "100%": { transform: "translate3d(0, 0, 0)", transformOrigin: "0 0", opacity: 1 } }), Mh = new it("antMoveRightOut", { "0%": { transform: "translate3d(0, 0, 0)", transformOrigin: "0 0", opacity: 1 }, "100%": { transform: "translate3d(100%, 0, 0)", transformOrigin: "0 0", opacity: 0 } }), Fh = new it("antMoveUpIn", { "0%": { transform: "translate3d(0, -100%, 0)", transformOrigin: "0 0", opacity: 0 }, "100%": { transform: "translate3d(0, 0, 0)", transformOrigin: "0 0", opacity: 1 } }), Th = new it("antMoveUpOut", { "0%": { transform: "translate3d(0, 0, 0)", transformOrigin: "0 0", opacity: 1 }, "100%": { transform: "translate3d(0, -100%, 0)", transformOrigin: "0 0", opacity: 0 } }), _h = { "move-up": { inKeyframes: Fh, outKeyframes: Th }, "move-down": { inKeyframes: Oh, outKeyframes: Ih }, "move-left": { inKeyframes: Ah, outKeyframes: Ph }, "move-right": { inKeyframes: Nh, outKeyframes: Mh } }, Xs = (e2, t) => {
  const { antCls: n } = e2, r = `${n}-${t}`, { inKeyframes: a, outKeyframes: o } = _h[t];
  return [ki(r, a, o, e2.motionDurationMid), { [`
        ${r}-enter,
        ${r}-appear
      `]: { opacity: 0, animationTimingFunction: e2.motionEaseOutCirc }, [`${r}-leave`]: { animationTimingFunction: e2.motionEaseInOutCirc } }];
}, ou = new it("antSlideUpIn", { "0%": { transform: "scaleY(0.8)", transformOrigin: "0% 0%", opacity: 0 }, "100%": { transform: "scaleY(1)", transformOrigin: "0% 0%", opacity: 1 } }), iu = new it("antSlideUpOut", { "0%": { transform: "scaleY(1)", transformOrigin: "0% 0%", opacity: 1 }, "100%": { transform: "scaleY(0.8)", transformOrigin: "0% 0%", opacity: 0 } }), su = new it("antSlideDownIn", { "0%": { transform: "scaleY(0.8)", transformOrigin: "100% 100%", opacity: 0 }, "100%": { transform: "scaleY(1)", transformOrigin: "100% 100%", opacity: 1 } }), lu = new it("antSlideDownOut", { "0%": { transform: "scaleY(1)", transformOrigin: "100% 100%", opacity: 1 }, "100%": { transform: "scaleY(0.8)", transformOrigin: "100% 100%", opacity: 0 } }), jh = new it("antSlideLeftIn", { "0%": { transform: "scaleX(0.8)", transformOrigin: "0% 0%", opacity: 0 }, "100%": { transform: "scaleX(1)", transformOrigin: "0% 0%", opacity: 1 } }), Dh = new it("antSlideLeftOut", { "0%": { transform: "scaleX(1)", transformOrigin: "0% 0%", opacity: 1 }, "100%": { transform: "scaleX(0.8)", transformOrigin: "0% 0%", opacity: 0 } }), Lh = new it("antSlideRightIn", { "0%": { transform: "scaleX(0.8)", transformOrigin: "100% 0%", opacity: 0 }, "100%": { transform: "scaleX(1)", transformOrigin: "100% 0%", opacity: 1 } }), Bh = new it("antSlideRightOut", { "0%": { transform: "scaleX(1)", transformOrigin: "100% 0%", opacity: 1 }, "100%": { transform: "scaleX(0.8)", transformOrigin: "100% 0%", opacity: 0 } }), zh = { "slide-up": { inKeyframes: ou, outKeyframes: iu }, "slide-down": { inKeyframes: su, outKeyframes: lu }, "slide-left": { inKeyframes: jh, outKeyframes: Dh }, "slide-right": { inKeyframes: Lh, outKeyframes: Bh } }, Ys = (e2, t) => {
  const { antCls: n } = e2, r = `${n}-${t}`, { inKeyframes: a, outKeyframes: o } = zh[t];
  return [ki(r, a, o, e2.motionDurationMid), { [`
      ${r}-enter,
      ${r}-appear
    `]: { transform: "scale(0)", transformOrigin: "0% 0%", opacity: 0, animationTimingFunction: e2.motionEaseOutQuint, "&-prepare": { transform: "scale(1)" } }, [`${r}-leave`]: { animationTimingFunction: e2.motionEaseInQuint } }];
}, Gi = new it("antZoomIn", { "0%": { transform: "scale(0.2)", opacity: 0 }, "100%": { transform: "scale(1)", opacity: 1 } }), Hh = new it("antZoomOut", { "0%": { transform: "scale(1)" }, "100%": { transform: "scale(0.2)", opacity: 0 } }), Qs = new it("antZoomBigIn", { "0%": { transform: "scale(0.8)", opacity: 0 }, "100%": { transform: "scale(1)", opacity: 1 } }), Js = new it("antZoomBigOut", { "0%": { transform: "scale(1)" }, "100%": { transform: "scale(0.8)", opacity: 0 } }), Vh = new it("antZoomUpIn", { "0%": { transform: "scale(0.8)", transformOrigin: "50% 0%", opacity: 0 }, "100%": { transform: "scale(1)", transformOrigin: "50% 0%" } }), Wh = new it("antZoomUpOut", { "0%": { transform: "scale(1)", transformOrigin: "50% 0%" }, "100%": { transform: "scale(0.8)", transformOrigin: "50% 0%", opacity: 0 } }), qh = new it("antZoomLeftIn", { "0%": { transform: "scale(0.8)", transformOrigin: "0% 50%", opacity: 0 }, "100%": { transform: "scale(1)", transformOrigin: "0% 50%" } }), Uh = new it("antZoomLeftOut", { "0%": { transform: "scale(1)", transformOrigin: "0% 50%" }, "100%": { transform: "scale(0.8)", transformOrigin: "0% 50%", opacity: 0 } }), kh = new it("antZoomRightIn", { "0%": { transform: "scale(0.8)", transformOrigin: "100% 50%", opacity: 0 }, "100%": { transform: "scale(1)", transformOrigin: "100% 50%" } }), Gh = new it("antZoomRightOut", { "0%": { transform: "scale(1)", transformOrigin: "100% 50%" }, "100%": { transform: "scale(0.8)", transformOrigin: "100% 50%", opacity: 0 } }), Kh = new it("antZoomDownIn", { "0%": { transform: "scale(0.8)", transformOrigin: "50% 100%", opacity: 0 }, "100%": { transform: "scale(1)", transformOrigin: "50% 100%" } }), Xh = new it("antZoomDownOut", { "0%": { transform: "scale(1)", transformOrigin: "50% 100%" }, "100%": { transform: "scale(0.8)", transformOrigin: "50% 100%", opacity: 0 } }), Yh = { zoom: { inKeyframes: Gi, outKeyframes: Hh }, "zoom-big": { inKeyframes: Qs, outKeyframes: Js }, "zoom-big-fast": { inKeyframes: Qs, outKeyframes: Js }, "zoom-left": { inKeyframes: qh, outKeyframes: Uh }, "zoom-right": { inKeyframes: kh, outKeyframes: Gh }, "zoom-up": { inKeyframes: Vh, outKeyframes: Wh }, "zoom-down": { inKeyframes: Kh, outKeyframes: Xh } }, Qh = (e2, t) => {
  const { antCls: n } = e2, r = `${n}-${t}`, { inKeyframes: a, outKeyframes: o } = Yh[t];
  return [ki(r, a, o, t === "zoom-big-fast" ? e2.motionDurationFast : e2.motionDurationMid), { [`
        ${r}-enter,
        ${r}-appear
      `]: { transform: "scale(0)", opacity: 0, animationTimingFunction: e2.motionEaseOutCirc, "&-prepare": { transform: "none" } }, [`${r}-leave`]: { animationTimingFunction: e2.motionEaseInOutCirc } }];
}, Jh = (e2) => {
  const { componentCls: t, contentBg: n, padding: r, headerBg: a, headerPadding: o, collapseHeaderPaddingSM: i, collapseHeaderPaddingLG: s, collapsePanelBorderRadius: c, lineWidth: u, lineType: d, colorBorder: f, colorText: h, colorTextHeading: p, colorTextDisabled: g, fontSizeLG: v, lineHeight: m, lineHeightLG: w, marginSM: b, paddingSM: C, paddingLG: x, paddingXS: I, motionDurationSlow: y, fontSizeIcon: E, contentPadding: O, fontHeight: R, fontHeightLG: S } = e2, $ = `${ne(u)} ${d} ${f}`;
  return { [t]: Object.assign(Object.assign({}, Ut(e2)), { backgroundColor: a, border: $, borderRadius: c, "&-rtl": { direction: "rtl" }, [`& > ${t}-item`]: { borderBottom: $, "&:first-child": { [`
            &,
            & > ${t}-header`]: { borderRadius: `${ne(c)} ${ne(c)} 0 0` } }, "&:last-child": { [`
            &,
            & > ${t}-header`]: { borderRadius: `0 0 ${ne(c)} ${ne(c)}` } }, [`> ${t}-header`]: Object.assign(Object.assign({ position: "relative", display: "flex", flexWrap: "nowrap", alignItems: "flex-start", padding: o, color: p, lineHeight: m, cursor: "pointer", transition: `all ${y}, visibility 0s` }, Hi(e2)), { [`> ${t}-header-text`]: { flex: "auto" }, [`${t}-expand-icon`]: { height: R, display: "flex", alignItems: "center", paddingInlineEnd: b }, [`${t}-arrow`]: Object.assign(Object.assign({}, Jr()), { fontSize: E, transition: `transform ${y}`, svg: { transition: `transform ${y}` } }), [`${t}-header-text`]: { marginInlineEnd: "auto" } }), [`${t}-collapsible-header`]: { cursor: "default", [`${t}-header-text`]: { flex: "none", cursor: "pointer" } }, [`${t}-collapsible-icon`]: { cursor: "unset", [`${t}-expand-icon`]: { cursor: "pointer" } } }, [`${t}-content`]: { color: h, backgroundColor: n, borderTop: $, [`& > ${t}-content-box`]: { padding: O }, "&-hidden": { display: "none" } }, "&-small": { [`> ${t}-item`]: { [`> ${t}-header`]: { padding: i, paddingInlineStart: I, [`> ${t}-expand-icon`]: { marginInlineStart: e2.calc(C).sub(I).equal() } }, [`> ${t}-content > ${t}-content-box`]: { padding: C } } }, "&-large": { [`> ${t}-item`]: { fontSize: v, lineHeight: w, [`> ${t}-header`]: { padding: s, paddingInlineStart: r, [`> ${t}-expand-icon`]: { height: S, marginInlineStart: e2.calc(x).sub(r).equal() } }, [`> ${t}-content > ${t}-content-box`]: { padding: x } } }, [`${t}-item:last-child`]: { borderBottom: 0, [`> ${t}-content`]: { borderRadius: `0 0 ${ne(c)} ${ne(c)}` } }, [`& ${t}-item-disabled > ${t}-header`]: { "\n          &,\n          & > .arrow\n        ": { color: g, cursor: "not-allowed" } }, [`&${t}-icon-position-end`]: { [`& > ${t}-item`]: { [`> ${t}-header`]: { [`${t}-expand-icon`]: { order: 1, paddingInlineEnd: 0, paddingInlineStart: b } } } } }) };
}, Zh = (e2) => {
  const { componentCls: t } = e2, n = `> ${t}-item > ${t}-header ${t}-arrow`;
  return { [`${t}-rtl`]: { [n]: { transform: "rotate(180deg)" } } };
}, ev = (e2) => {
  const { componentCls: t, headerBg: n, paddingXXS: r, colorBorder: a } = e2;
  return { [`${t}-borderless`]: { backgroundColor: n, border: 0, [`> ${t}-item`]: { borderBottom: `1px solid ${a}` }, [`
        > ${t}-item:last-child,
        > ${t}-item:last-child ${t}-header
      `]: { borderRadius: 0 }, [`> ${t}-item:last-child`]: { borderBottom: 0 }, [`> ${t}-item > ${t}-content`]: { backgroundColor: "transparent", borderTop: 0 }, [`> ${t}-item > ${t}-content > ${t}-content-box`]: { paddingTop: r } } };
}, tv = (e2) => {
  const { componentCls: t, paddingSM: n } = e2;
  return { [`${t}-ghost`]: { backgroundColor: "transparent", border: 0, [`> ${t}-item`]: { borderBottom: 0, [`> ${t}-content`]: { backgroundColor: "transparent", border: 0, [`> ${t}-content-box`]: { paddingBlock: n } } } } };
}, nv = (e2) => ({ headerPadding: `${e2.paddingSM}px ${e2.padding}px`, headerBg: e2.colorFillAlter, contentPadding: `${e2.padding}px 16px`, contentBg: e2.colorBgContainer }), rv = Lt("Collapse", (e2) => {
  const t = mt(e2, { collapseHeaderPaddingSM: `${ne(e2.paddingXS)} ${ne(e2.paddingSM)}`, collapseHeaderPaddingLG: `${ne(e2.padding)} ${ne(e2.paddingLG)}`, collapsePanelBorderRadius: e2.borderRadiusLG });
  return [Jh(t), ev(t), tv(t), Zh(t), au(t)];
}, nv), av = l.forwardRef((e2, t) => {
  const { getPrefixCls: n, direction: r, expandIcon: a, className: o, style: i } = _n("collapse"), { prefixCls: s, className: c, rootClassName: u, style: d, bordered: f = true, ghost: h, size: p, expandIconPosition: g = "start", children: v, expandIcon: m } = e2, w = wn((A) => {
    var N;
    return (N = p ?? A) !== null && N !== void 0 ? N : "middle";
  }), b = n("collapse", s), C = n(), [x, I, y] = rv(b), E = l.useMemo(() => g === "left" ? "start" : g === "right" ? "end" : g, [g]), O = m ?? a, R = l.useCallback(function() {
    let A = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const N = typeof O == "function" ? O(A) : l.createElement(vh, { rotate: A.isActive ? r === "rtl" ? -90 : 90 : void 0, "aria-label": A.isActive ? "expanded" : "collapsed" });
    return qn(N, () => {
      var T;
      return { className: Q((T = N == null ? void 0 : N.props) === null || T === void 0 ? void 0 : T.className, `${b}-arrow`) };
    });
  }, [O, b]), S = Q(`${b}-icon-position-${E}`, { [`${b}-borderless`]: !f, [`${b}-rtl`]: r === "rtl", [`${b}-ghost`]: !!h, [`${b}-${w}`]: w !== "middle" }, o, c, u, I, y), $ = Object.assign(Object.assign({}, di(C)), { motionAppear: false, leavedClassName: `${b}-content-hidden` }), P = l.useMemo(() => v ? Mn(v).map((A, N) => {
    var T, M;
    const _ = A.props;
    if (_ == null ? void 0 : _.disabled) {
      const j = (T = A.key) !== null && T !== void 0 ? T : String(N), z = Object.assign(Object.assign({}, dn(A.props, ["disabled"])), { key: j, collapsible: (M = _.collapsible) !== null && M !== void 0 ? M : "disabled" });
      return qn(A, z);
    }
    return A;
  }) : null, [v]);
  return x(l.createElement(Ui, Object.assign({ ref: t, openMotion: $ }, dn(e2, ["rootClassName"]), { expandIcon: R, prefixCls: b, className: S, style: Object.assign(Object.assign({}, i), d) }), P));
}), U$ = Object.assign(av, { Panel: $h }), ov = (e2, t) => {
  const { r: n, g: r, b: a, a: o } = e2.toRgb(), i = new Ur(e2.toRgbString()).onBackground(t).toHsv();
  return o <= 0.5 ? i.v > 0.5 : n * 0.299 + r * 0.587 + a * 0.114 > 192;
}, cu = (e2) => {
  const { paddingInline: t, onlyIconSize: n } = e2;
  return mt(e2, { buttonPaddingHorizontal: t, buttonPaddingVertical: 0, buttonIconOnlyFontSize: n });
}, uu = (e2) => {
  var t, n, r, a, o, i;
  const s = (t = e2.contentFontSize) !== null && t !== void 0 ? t : e2.fontSize, c = (n = e2.contentFontSizeSM) !== null && n !== void 0 ? n : e2.fontSize, u = (r = e2.contentFontSizeLG) !== null && r !== void 0 ? r : e2.fontSizeLG, d = (a = e2.contentLineHeight) !== null && a !== void 0 ? a : xo(s), f = (o = e2.contentLineHeightSM) !== null && o !== void 0 ? o : xo(c), h = (i = e2.contentLineHeightLG) !== null && i !== void 0 ? i : xo(u), p = ov(new mh(e2.colorBgSolid), "#fff") ? "#000" : "#fff", g = tr.reduce((v, m) => Object.assign(Object.assign({}, v), { [`${m}ShadowColor`]: `0 ${ne(e2.controlOutlineWidth)} 0 ${xf(e2[`${m}1`], e2.colorBgContainer)}` }), {});
  return Object.assign(Object.assign({}, g), { fontWeight: 400, defaultShadow: `0 ${e2.controlOutlineWidth}px 0 ${e2.controlTmpOutline}`, primaryShadow: `0 ${e2.controlOutlineWidth}px 0 ${e2.controlOutline}`, dangerShadow: `0 ${e2.controlOutlineWidth}px 0 ${e2.colorErrorOutline}`, primaryColor: e2.colorTextLightSolid, dangerColor: e2.colorTextLightSolid, borderColorDisabled: e2.colorBorder, defaultGhostColor: e2.colorBgContainer, ghostBg: "transparent", defaultGhostBorderColor: e2.colorBgContainer, paddingInline: e2.paddingContentHorizontal - e2.lineWidth, paddingInlineLG: e2.paddingContentHorizontal - e2.lineWidth, paddingInlineSM: 8 - e2.lineWidth, onlyIconSize: "inherit", onlyIconSizeSM: "inherit", onlyIconSizeLG: "inherit", groupBorderColor: e2.colorPrimaryHover, linkHoverBg: "transparent", textTextColor: e2.colorText, textTextHoverColor: e2.colorText, textTextActiveColor: e2.colorText, textHoverBg: e2.colorFillTertiary, defaultColor: e2.colorText, defaultBg: e2.colorBgContainer, defaultBorderColor: e2.colorBorder, defaultBorderColorDisabled: e2.colorBorder, defaultHoverBg: e2.colorBgContainer, defaultHoverColor: e2.colorPrimaryHover, defaultHoverBorderColor: e2.colorPrimaryHover, defaultActiveBg: e2.colorBgContainer, defaultActiveColor: e2.colorPrimaryActive, defaultActiveBorderColor: e2.colorPrimaryActive, solidTextColor: p, contentFontSize: s, contentFontSizeSM: c, contentFontSizeLG: u, contentLineHeight: d, contentLineHeightSM: f, contentLineHeightLG: h, paddingBlock: Math.max((e2.controlHeight - s * d) / 2 - e2.lineWidth, 0), paddingBlockSM: Math.max((e2.controlHeightSM - c * f) / 2 - e2.lineWidth, 0), paddingBlockLG: Math.max((e2.controlHeightLG - u * h) / 2 - e2.lineWidth, 0) });
}, iv = (e2) => {
  const { componentCls: t, iconCls: n, fontWeight: r, opacityLoading: a, motionDurationSlow: o, motionEaseInOut: i, marginXS: s, calc: c } = e2;
  return { [t]: { outline: "none", position: "relative", display: "inline-flex", gap: e2.marginXS, alignItems: "center", justifyContent: "center", fontWeight: r, whiteSpace: "nowrap", textAlign: "center", backgroundImage: "none", background: "transparent", border: `${ne(e2.lineWidth)} ${e2.lineType} transparent`, cursor: "pointer", transition: `all ${e2.motionDurationMid} ${e2.motionEaseInOut}`, userSelect: "none", touchAction: "manipulation", color: e2.colorText, "&:disabled > *": { pointerEvents: "none" }, [`${t}-icon > svg`]: Jr(), "> a": { color: "currentColor" }, "&:not(:disabled)": Hi(e2), [`&${t}-two-chinese-chars::first-letter`]: { letterSpacing: "0.34em" }, [`&${t}-two-chinese-chars > *:not(${n})`]: { marginInlineEnd: "-0.34em", letterSpacing: "0.34em" }, [`&${t}-icon-only`]: { paddingInline: 0, [`&${t}-compact-item`]: { flex: "none" }, [`&${t}-round`]: { width: "auto" } }, [`&${t}-loading`]: { opacity: a, cursor: "default" }, [`${t}-loading-icon`]: { transition: ["width", "opacity", "margin"].map((u) => `${u} ${o} ${i}`).join(",") }, [`&:not(${t}-icon-end)`]: { [`${t}-loading-icon-motion`]: { "&-appear-start, &-enter-start": { marginInlineEnd: c(s).mul(-1).equal() }, "&-appear-active, &-enter-active": { marginInlineEnd: 0 }, "&-leave-start": { marginInlineEnd: 0 }, "&-leave-active": { marginInlineEnd: c(s).mul(-1).equal() } } }, "&-icon-end": { flexDirection: "row-reverse", [`${t}-loading-icon-motion`]: { "&-appear-start, &-enter-start": { marginInlineStart: c(s).mul(-1).equal() }, "&-appear-active, &-enter-active": { marginInlineStart: 0 }, "&-leave-start": { marginInlineStart: 0 }, "&-leave-active": { marginInlineStart: c(s).mul(-1).equal() } } } } };
}, du = (e2, t, n) => ({ [`&:not(:disabled):not(${e2}-disabled)`]: { "&:hover": t, "&:active": n } }), sv = (e2) => ({ minWidth: e2.controlHeight, paddingInlineStart: 0, paddingInlineEnd: 0, borderRadius: "50%" }), lv = (e2) => ({ borderRadius: e2.controlHeight, paddingInlineStart: e2.calc(e2.controlHeight).div(2).equal(), paddingInlineEnd: e2.calc(e2.controlHeight).div(2).equal() }), cv = (e2) => ({ cursor: "not-allowed", borderColor: e2.borderColorDisabled, color: e2.colorTextDisabled, background: e2.colorBgContainerDisabled, boxShadow: "none" }), Ka = (e2, t, n, r, a, o, i, s) => ({ [`&${e2}-background-ghost`]: Object.assign(Object.assign({ color: n || void 0, background: t, borderColor: r || void 0, boxShadow: "none" }, du(e2, Object.assign({ background: t }, i), Object.assign({ background: t }, s))), { "&:disabled": { cursor: "not-allowed", color: a || void 0, borderColor: o || void 0 } }) }), uv = (e2) => ({ [`&:disabled, &${e2.componentCls}-disabled`]: Object.assign({}, cv(e2)) }), dv = (e2) => ({ [`&:disabled, &${e2.componentCls}-disabled`]: { cursor: "not-allowed", color: e2.colorTextDisabled } }), Xa = (e2, t, n, r) => {
  const o = r && ["link", "text"].includes(r) ? dv : uv;
  return Object.assign(Object.assign({}, o(e2)), du(e2.componentCls, t, n));
}, Ya = (e2, t, n, r, a) => ({ [`&${e2.componentCls}-variant-solid`]: Object.assign({ color: t, background: n }, Xa(e2, r, a)) }), Qa = (e2, t, n, r, a) => ({ [`&${e2.componentCls}-variant-outlined, &${e2.componentCls}-variant-dashed`]: Object.assign({ borderColor: t, background: n }, Xa(e2, r, a)) }), Ja = (e2) => ({ [`&${e2.componentCls}-variant-dashed`]: { borderStyle: "dashed" } }), Za = (e2, t, n, r) => ({ [`&${e2.componentCls}-variant-filled`]: Object.assign({ boxShadow: "none", background: t }, Xa(e2, n, r)) }), An = (e2, t, n, r, a) => ({ [`&${e2.componentCls}-variant-${n}`]: Object.assign({ color: t, boxShadow: "none" }, Xa(e2, r, a, n)) }), fv = (e2) => {
  const { componentCls: t } = e2;
  return tr.reduce((n, r) => {
    const a = e2[`${r}6`], o = e2[`${r}1`], i = e2[`${r}5`], s = e2[`${r}2`], c = e2[`${r}3`], u = e2[`${r}7`];
    return Object.assign(Object.assign({}, n), { [`&${t}-color-${r}`]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ color: a, boxShadow: e2[`${r}ShadowColor`] }, Ya(e2, e2.colorTextLightSolid, a, { background: i }, { background: u })), Qa(e2, a, e2.colorBgContainer, { color: i, borderColor: i, background: e2.colorBgContainer }, { color: u, borderColor: u, background: e2.colorBgContainer })), Ja(e2)), Za(e2, o, { background: s }, { background: c })), An(e2, a, "link", { color: i }, { color: u })), An(e2, a, "text", { color: i, background: o }, { color: u, background: c })) });
  }, {});
}, mv = (e2) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ color: e2.defaultColor, boxShadow: e2.defaultShadow }, Ya(e2, e2.solidTextColor, e2.colorBgSolid, { color: e2.solidTextColor, background: e2.colorBgSolidHover }, { color: e2.solidTextColor, background: e2.colorBgSolidActive })), Ja(e2)), Za(e2, e2.colorFillTertiary, { background: e2.colorFillSecondary }, { background: e2.colorFill })), Ka(e2.componentCls, e2.ghostBg, e2.defaultGhostColor, e2.defaultGhostBorderColor, e2.colorTextDisabled, e2.colorBorder)), An(e2, e2.textTextColor, "link", { color: e2.colorLinkHover, background: e2.linkHoverBg }, { color: e2.colorLinkActive })), gv = (e2) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ color: e2.colorPrimary, boxShadow: e2.primaryShadow }, Qa(e2, e2.colorPrimary, e2.colorBgContainer, { color: e2.colorPrimaryTextHover, borderColor: e2.colorPrimaryHover, background: e2.colorBgContainer }, { color: e2.colorPrimaryTextActive, borderColor: e2.colorPrimaryActive, background: e2.colorBgContainer })), Ja(e2)), Za(e2, e2.colorPrimaryBg, { background: e2.colorPrimaryBgHover }, { background: e2.colorPrimaryBorder })), An(e2, e2.colorPrimaryText, "text", { color: e2.colorPrimaryTextHover, background: e2.colorPrimaryBg }, { color: e2.colorPrimaryTextActive, background: e2.colorPrimaryBorder })), An(e2, e2.colorPrimaryText, "link", { color: e2.colorPrimaryTextHover, background: e2.linkHoverBg }, { color: e2.colorPrimaryTextActive })), Ka(e2.componentCls, e2.ghostBg, e2.colorPrimary, e2.colorPrimary, e2.colorTextDisabled, e2.colorBorder, { color: e2.colorPrimaryHover, borderColor: e2.colorPrimaryHover }, { color: e2.colorPrimaryActive, borderColor: e2.colorPrimaryActive })), hv = (e2) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ color: e2.colorError, boxShadow: e2.dangerShadow }, Ya(e2, e2.dangerColor, e2.colorError, { background: e2.colorErrorHover }, { background: e2.colorErrorActive })), Qa(e2, e2.colorError, e2.colorBgContainer, { color: e2.colorErrorHover, borderColor: e2.colorErrorBorderHover }, { color: e2.colorErrorActive, borderColor: e2.colorErrorActive })), Ja(e2)), Za(e2, e2.colorErrorBg, { background: e2.colorErrorBgFilledHover }, { background: e2.colorErrorBgActive })), An(e2, e2.colorError, "text", { color: e2.colorErrorHover, background: e2.colorErrorBg }, { color: e2.colorErrorHover, background: e2.colorErrorBgActive })), An(e2, e2.colorError, "link", { color: e2.colorErrorHover }, { color: e2.colorErrorActive })), Ka(e2.componentCls, e2.ghostBg, e2.colorError, e2.colorError, e2.colorTextDisabled, e2.colorBorder, { color: e2.colorErrorHover, borderColor: e2.colorErrorHover }, { color: e2.colorErrorActive, borderColor: e2.colorErrorActive })), vv = (e2) => Object.assign(Object.assign({}, An(e2, e2.colorLink, "link", { color: e2.colorLinkHover }, { color: e2.colorLinkActive })), Ka(e2.componentCls, e2.ghostBg, e2.colorInfo, e2.colorInfo, e2.colorTextDisabled, e2.colorBorder, { color: e2.colorInfoHover, borderColor: e2.colorInfoHover }, { color: e2.colorInfoActive, borderColor: e2.colorInfoActive })), pv = (e2) => {
  const { componentCls: t } = e2;
  return Object.assign({ [`${t}-color-default`]: mv(e2), [`${t}-color-primary`]: gv(e2), [`${t}-color-dangerous`]: hv(e2), [`${t}-color-link`]: vv(e2) }, fv(e2));
}, bv = (e2) => Object.assign(Object.assign(Object.assign(Object.assign({}, Qa(e2, e2.defaultBorderColor, e2.defaultBg, { color: e2.defaultHoverColor, borderColor: e2.defaultHoverBorderColor, background: e2.defaultHoverBg }, { color: e2.defaultActiveColor, borderColor: e2.defaultActiveBorderColor, background: e2.defaultActiveBg })), An(e2, e2.textTextColor, "text", { color: e2.textTextHoverColor, background: e2.textHoverBg }, { color: e2.textTextActiveColor, background: e2.colorBgTextActive })), Ya(e2, e2.primaryColor, e2.colorPrimary, { background: e2.colorPrimaryHover, color: e2.primaryColor }, { background: e2.colorPrimaryActive, color: e2.primaryColor })), An(e2, e2.colorLink, "link", { color: e2.colorLinkHover, background: e2.linkHoverBg }, { color: e2.colorLinkActive })), Ki = function(e2) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  const { componentCls: n, controlHeight: r, fontSize: a, borderRadius: o, buttonPaddingHorizontal: i, iconCls: s, buttonPaddingVertical: c, buttonIconOnlyFontSize: u } = e2;
  return [{ [t]: { fontSize: a, height: r, padding: `${ne(c)} ${ne(i)}`, borderRadius: o, [`&${n}-icon-only`]: { width: r, [s]: { fontSize: u } } } }, { [`${n}${n}-circle${t}`]: sv(e2) }, { [`${n}${n}-round${t}`]: lv(e2) }];
}, yv = (e2) => {
  const t = mt(e2, { fontSize: e2.contentFontSize });
  return Ki(t, e2.componentCls);
}, wv = (e2) => {
  const t = mt(e2, { controlHeight: e2.controlHeightSM, fontSize: e2.contentFontSizeSM, padding: e2.paddingXS, buttonPaddingHorizontal: e2.paddingInlineSM, buttonPaddingVertical: 0, borderRadius: e2.borderRadiusSM, buttonIconOnlyFontSize: e2.onlyIconSizeSM });
  return Ki(t, `${e2.componentCls}-sm`);
}, Cv = (e2) => {
  const t = mt(e2, { controlHeight: e2.controlHeightLG, fontSize: e2.contentFontSizeLG, buttonPaddingHorizontal: e2.paddingInlineLG, buttonPaddingVertical: 0, borderRadius: e2.borderRadiusLG, buttonIconOnlyFontSize: e2.onlyIconSizeLG });
  return Ki(t, `${e2.componentCls}-lg`);
}, Sv = (e2) => {
  const { componentCls: t } = e2;
  return { [t]: { [`&${t}-block`]: { width: "100%" } } };
}, xv = Lt("Button", (e2) => {
  const t = cu(e2);
  return [iv(t), yv(t), wv(t), Cv(t), Sv(t), pv(t), bv(t), ih(t)];
}, uu, { unitless: { fontWeight: true, contentLineHeight: true, contentLineHeightSM: true, contentLineHeightLG: true } });
function $v(e2, t, n) {
  const { focusElCls: r, focus: a, borderElCls: o } = n, i = o ? "> *" : "", s = ["hover", a ? "focus" : null, "active"].filter(Boolean).map((c) => `&:${c} ${i}`).join(",");
  return { [`&-item:not(${t}-last-item)`]: { marginInlineEnd: e2.calc(e2.lineWidth).mul(-1).equal() }, "&-item": Object.assign(Object.assign({ [s]: { zIndex: 2 } }, r ? { [`&${r}`]: { zIndex: 2 } } : {}), { [`&[disabled] ${i}`]: { zIndex: 0 } }) };
}
function Ev(e2, t, n) {
  const { borderElCls: r } = n, a = r ? `> ${r}` : "";
  return { [`&-item:not(${t}-first-item):not(${t}-last-item) ${a}`]: { borderRadius: 0 }, [`&-item:not(${t}-last-item)${t}-first-item`]: { [`& ${a}, &${e2}-sm ${a}, &${e2}-lg ${a}`]: { borderStartEndRadius: 0, borderEndEndRadius: 0 } }, [`&-item:not(${t}-first-item)${t}-last-item`]: { [`& ${a}, &${e2}-sm ${a}, &${e2}-lg ${a}`]: { borderStartStartRadius: 0, borderEndStartRadius: 0 } } };
}
function eo(e2) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { focus: true };
  const { componentCls: n } = e2, r = `${n}-compact`;
  return { [r]: Object.assign(Object.assign({}, $v(e2, r, t)), Ev(n, r, t)) };
}
function Rv(e2, t) {
  return { [`&-item:not(${t}-last-item)`]: { marginBottom: e2.calc(e2.lineWidth).mul(-1).equal() }, "&-item": { "&:hover,&:focus,&:active": { zIndex: 2 }, "&[disabled]": { zIndex: 0 } } };
}
function Ov(e2, t) {
  return { [`&-item:not(${t}-first-item):not(${t}-last-item)`]: { borderRadius: 0 }, [`&-item${t}-first-item:not(${t}-last-item)`]: { [`&, &${e2}-sm, &${e2}-lg`]: { borderEndEndRadius: 0, borderEndStartRadius: 0 } }, [`&-item${t}-last-item:not(${t}-first-item)`]: { [`&, &${e2}-sm, &${e2}-lg`]: { borderStartStartRadius: 0, borderStartEndRadius: 0 } } };
}
function Iv(e2) {
  const t = `${e2.componentCls}-compact-vertical`;
  return { [t]: Object.assign(Object.assign({}, Rv(e2, t)), Ov(e2.componentCls, t)) };
}
const Av = (e2) => {
  const { componentCls: t, colorPrimaryHover: n, lineWidth: r, calc: a } = e2, o = a(r).mul(-1).equal(), i = (s) => {
    const c = `${t}-compact${s ? "-vertical" : ""}-item${t}-primary:not([disabled])`;
    return { [`${c} + ${c}::before`]: { position: "absolute", top: s ? o : 0, insetInlineStart: s ? 0 : o, backgroundColor: n, content: '""', width: s ? "100%" : r, height: s ? r : "100%" } };
  };
  return Object.assign(Object.assign({}, i()), i(true));
}, Pv = Ac(["Button", "compact"], (e2) => {
  const t = cu(e2);
  return [eo(t), Iv(t), Av(t)];
}, uu);
var Nv = function(e2, t) {
  var n = {};
  for (var r in e2) Object.prototype.hasOwnProperty.call(e2, r) && t.indexOf(r) < 0 && (n[r] = e2[r]);
  if (e2 != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e2); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e2, r[a]) && (n[r[a]] = e2[r[a]]);
  return n;
};
function Mv(e2) {
  if (typeof e2 == "object" && e2) {
    let t = e2 == null ? void 0 : e2.delay;
    return t = !Number.isNaN(t) && typeof t == "number" ? t : 0, { loading: t <= 0, delay: t };
  }
  return { loading: !!e2, delay: 0 };
}
const Fv = { default: ["default", "outlined"], primary: ["primary", "solid"], dashed: ["default", "dashed"], link: ["link", "link"], text: ["default", "text"] }, Tv = ae.forwardRef((e2, t) => {
  var n, r;
  const { loading: a = false, prefixCls: o, color: i, variant: s, type: c, danger: u = false, shape: d = "default", size: f, styles: h, disabled: p, className: g, rootClassName: v, children: m, icon: w, iconPosition: b = "start", ghost: C = false, block: x = false, htmlType: I = "button", classNames: y, style: E = {}, autoInsertSpace: O, autoFocus: R } = e2, S = Nv(e2, ["loading", "prefixCls", "color", "variant", "type", "danger", "shape", "size", "styles", "disabled", "className", "rootClassName", "children", "icon", "iconPosition", "ghost", "block", "htmlType", "classNames", "style", "autoInsertSpace", "autoFocus"]), $ = c || "default", [P, A] = l.useMemo(() => {
    if (i && s) return [i, s];
    const Ae = Fv[$] || [];
    return u ? ["danger", Ae[1]] : Ae;
  }, [c, i, s, u]), T = P === "danger" ? "dangerous" : P, { getPrefixCls: M, direction: _, autoInsertSpace: j, className: z, style: L, classNames: H, styles: Y } = _n("button"), k = (n = O ?? j) !== null && n !== void 0 ? n : true, F = M("btn", o), [B, G, re] = xv(F), W = l.useContext(kn), J = p ?? W, oe = l.useContext(tu), K = l.useMemo(() => Mv(a), [a]), [q, Z] = l.useState(K.loading), [ie, X] = l.useState(false), ee = l.useRef(null), le = Qr(t, ee), se = l.Children.count(m) === 1 && !w && !Po(A), de = l.useRef(true);
  ae.useEffect(() => (de.current = false, () => {
    de.current = true;
  }), []), l.useEffect(() => {
    let Ae = null;
    K.delay > 0 ? Ae = setTimeout(() => {
      Ae = null, Z(true);
    }, K.delay) : Z(K.loading);
    function Je() {
      Ae && (clearTimeout(Ae), Ae = null);
    }
    return Je;
  }, [K]), l.useEffect(() => {
    if (!ee.current || !k) return;
    const Ae = ee.current.textContent || "";
    se && fi(Ae) ? ie || X(true) : ie && X(false);
  }), l.useEffect(() => {
    R && ee.current && ee.current.focus();
  }, []);
  const Oe = ae.useCallback((Ae) => {
    var Je;
    if (q || J) {
      Ae.preventDefault();
      return;
    }
    (Je = e2.onClick) === null || Je === void 0 || Je.call(e2, ("href" in e2, Ae));
  }, [e2.onClick, q, J]), { compactSize: xe, compactItemClassnames: We } = Er(F, _), ce = { large: "lg", small: "sm", middle: void 0 }, ue = wn((Ae) => {
    var Je, Qe;
    return (Qe = (Je = f ?? xe) !== null && Je !== void 0 ? Je : oe) !== null && Qe !== void 0 ? Qe : Ae;
  }), pe = ue && (r = ce[ue]) !== null && r !== void 0 ? r : "", $e = q ? "loading" : w, Fe = dn(S, ["navigate"]), Le = Q(F, G, re, { [`${F}-${d}`]: d !== "default" && d, [`${F}-${$}`]: $, [`${F}-dangerous`]: u, [`${F}-color-${T}`]: T, [`${F}-variant-${A}`]: A, [`${F}-${pe}`]: pe, [`${F}-icon-only`]: !m && m !== 0 && !!$e, [`${F}-background-ghost`]: C && !Po(A), [`${F}-loading`]: q, [`${F}-two-chinese-chars`]: ie && k && !q, [`${F}-block`]: x, [`${F}-rtl`]: _ === "rtl", [`${F}-icon-end`]: b === "end" }, We, g, v, z), je = Object.assign(Object.assign({}, L), E), Ee = Q(y == null ? void 0 : y.icon, H.icon), Be = Object.assign(Object.assign({}, (h == null ? void 0 : h.icon) || {}), Y.icon || {}), Ke = w && !q ? ae.createElement(mi, { prefixCls: F, className: Ee, style: Be }, w) : a && typeof a == "object" && a.icon ? ae.createElement(mi, { prefixCls: F, className: Ee, style: Be }, a.icon) : ae.createElement(oh, { existIcon: !!w, prefixCls: F, loading: q, mount: de.current }), Me = m || m === 0 ? ah(m, se && k) : null;
  if (Fe.href !== void 0) return B(ae.createElement("a", Object.assign({}, Fe, { className: Q(Le, { [`${F}-disabled`]: J }), href: J ? void 0 : Fe.href, style: je, onClick: Oe, ref: le, tabIndex: J ? -1 : 0 }), Ke, Me));
  let be = ae.createElement("button", Object.assign({}, S, { type: I, className: Le, style: je, onClick: Oe, disabled: J, ref: le }), Ke, Me, We && ae.createElement(Pv, { prefixCls: F }));
  return Po(A) || (be = ae.createElement(Zc, { component: "Button", disabled: q }, be)), B(be);
}), Xi = Tv;
Xi.Group = nh;
Xi.__ANT_BUTTON = true;
var fu = l.createContext(null), Zs = [];
function _v(e2, t) {
  var n = l.useState(function() {
    if (!qr()) return null;
    var g = document.createElement("div");
    return g;
  }), r = te(n, 1), a = r[0], o = l.useRef(false), i = l.useContext(fu), s = l.useState(Zs), c = te(s, 2), u = c[0], d = c[1], f = i || (o.current ? void 0 : function(g) {
    d(function(v) {
      var m = [g].concat(fe(v));
      return m;
    });
  });
  function h() {
    a.parentElement || document.body.appendChild(a), o.current = true;
  }
  function p() {
    var g;
    (g = a.parentElement) === null || g === void 0 || g.removeChild(a), o.current = false;
  }
  return ut(function() {
    return e2 ? i ? i(h) : h() : p(), p;
  }, [e2]), ut(function() {
    u.length && (u.forEach(function(g) {
      return g();
    }), d(Zs));
  }, [u]), [a, f];
}
var To;
function mu(e2) {
  var t = "rc-scrollbar-measure-".concat(Math.random().toString(36).substring(7)), n = document.createElement("div");
  n.id = t;
  var r = n.style;
  r.position = "absolute", r.left = "0", r.top = "0", r.width = "100px", r.height = "100px", r.overflow = "scroll";
  var a, o;
  if (e2) {
    var i = getComputedStyle(e2);
    r.scrollbarColor = i.scrollbarColor, r.scrollbarWidth = i.scrollbarWidth;
    var s = getComputedStyle(e2, "::-webkit-scrollbar"), c = parseInt(s.width, 10), u = parseInt(s.height, 10);
    try {
      var d = c ? "width: ".concat(s.width, ";") : "", f = u ? "height: ".concat(s.height, ";") : "";
      zi(`
#`.concat(t, `::-webkit-scrollbar {
`).concat(d, `
`).concat(f, `
}`), t);
    } catch (g) {
      console.error(g), a = c, o = u;
    }
  }
  document.body.appendChild(n);
  var h = e2 && a && !isNaN(a) ? a : n.offsetWidth - n.clientWidth, p = e2 && o && !isNaN(o) ? o : n.offsetHeight - n.clientHeight;
  return document.body.removeChild(n), ti(t), { width: h, height: p };
}
function k$(e2) {
  return typeof document > "u" ? 0 : (To === void 0 && (To = mu()), To.width);
}
function jv(e2) {
  return typeof document > "u" || !e2 || !(e2 instanceof Element) ? { width: 0, height: 0 } : mu(e2);
}
function Dv() {
  return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth;
}
var Lv = "rc-util-locker-".concat(Date.now()), el = 0;
function Bv(e2) {
  var t = !!e2, n = l.useState(function() {
    return el += 1, "".concat(Lv, "_").concat(el);
  }), r = te(n, 1), a = r[0];
  ut(function() {
    if (t) {
      var o = jv(document.body).width, i = Dv();
      zi(`
html body {
  overflow-y: hidden;
  `.concat(i ? "width: calc(100% - ".concat(o, "px);") : "", `
}`), a);
    } else ti(a);
    return function() {
      ti(a);
    };
  }, [t, a]);
}
var zv = false;
function Hv(e2) {
  return zv;
}
var tl = function(t) {
  return t === false ? false : !qr() || !t ? null : typeof t == "string" ? document.querySelector(t) : typeof t == "function" ? t() : t;
}, gu = l.forwardRef(function(e2, t) {
  var n = e2.open, r = e2.autoLock, a = e2.getContainer;
  e2.debug;
  var o = e2.autoDestroy, i = o === void 0 ? true : o, s = e2.children, c = l.useState(n), u = te(c, 2), d = u[0], f = u[1], h = d || n;
  l.useEffect(function() {
    (i || n) && f(n);
  }, [n, i]);
  var p = l.useState(function() {
    return tl(a);
  }), g = te(p, 2), v = g[0], m = g[1];
  l.useEffect(function() {
    var $ = tl(a);
    m($ ?? null);
  });
  var w = _v(h && !v), b = te(w, 2), C = b[0], x = b[1], I = v ?? C;
  Bv(r && n && qr() && (I === C || I === document.body));
  var y = null;
  if (s && Yr(s) && t) {
    var E = s;
    y = E.ref;
  }
  var O = Qr(y, t);
  if (!h || !qr() || v === void 0) return null;
  var R = I === false || Hv(), S = s;
  return t && (S = l.cloneElement(s, { ref: O })), l.createElement(fu.Provider, { value: x }, R ? S : Wr.createPortal(S, I));
});
function Vv() {
  var e2 = V({}, $f);
  return e2.useId;
}
var nl = 0, rl = Vv();
const hu = rl ? function(t) {
  var n = rl();
  return t || n;
} : function(t) {
  var n = l.useState("ssr-id"), r = te(n, 2), a = r[0], o = r[1];
  return l.useEffect(function() {
    var i = nl;
    nl += 1, o("rc_unique_".concat(i));
  }, []), t || a;
};
var Yn = "RC_FORM_INTERNAL_HOOKS", lt = function() {
  un(false, "Can not find FormContext. Please make sure you wrap Field under Form.");
}, rr = l.createContext({ getFieldValue: lt, getFieldsValue: lt, getFieldError: lt, getFieldWarning: lt, getFieldsError: lt, isFieldsTouched: lt, isFieldTouched: lt, isFieldValidating: lt, isFieldsValidating: lt, resetFields: lt, setFields: lt, setFieldValue: lt, setFieldsValue: lt, validateFields: lt, submit: lt, getInternalHooks: function() {
  return lt(), { dispatch: lt, initEntityValue: lt, registerField: lt, useSubscribe: lt, setInitialValues: lt, destroyForm: lt, setCallbacks: lt, registerWatch: lt, getFields: lt, setValidateMessages: lt, setPreserve: lt, getInitialValue: lt };
} }), kr = l.createContext(null);
function gi(e2) {
  return e2 == null ? [] : Array.isArray(e2) ? e2 : [e2];
}
function Wv(e2) {
  return e2 && !!e2._init;
}
function hi() {
  return { default: "Validation error on field %s", required: "%s is required", enum: "%s must be one of %s", whitespace: "%s cannot be empty", date: { format: "%s date %s is invalid for format %s", parse: "%s date could not be parsed, %s is invalid ", invalid: "%s date %s is invalid" }, types: { string: "%s is not a %s", method: "%s is not a %s (function)", array: "%s is not an %s", object: "%s is not an %s", number: "%s is not a %s", date: "%s is not a %s", boolean: "%s is not a %s", integer: "%s is not an %s", float: "%s is not a %s", regexp: "%s is not a valid %s", email: "%s is not a valid %s", url: "%s is not a valid %s", hex: "%s is not a valid %s" }, string: { len: "%s must be exactly %s characters", min: "%s must be at least %s characters", max: "%s cannot be longer than %s characters", range: "%s must be between %s and %s characters" }, number: { len: "%s must equal %s", min: "%s cannot be less than %s", max: "%s cannot be greater than %s", range: "%s must be between %s and %s" }, array: { len: "%s must be exactly %s in length", min: "%s cannot be less than %s in length", max: "%s cannot be greater than %s in length", range: "%s must be between %s and %s in length" }, pattern: { mismatch: "%s value %s does not match pattern %s" }, clone: function() {
    var t = JSON.parse(JSON.stringify(this));
    return t.clone = this.clone, t;
  } };
}
var vi = hi();
function qv(e2) {
  try {
    return Function.toString.call(e2).indexOf("[native code]") !== -1;
  } catch {
    return typeof e2 == "function";
  }
}
function Uv(e2, t, n) {
  if (Ef()) return Reflect.construct.apply(null, arguments);
  var r = [null];
  r.push.apply(r, t);
  var a = new (e2.bind.apply(e2, r))();
  return n && Pc(a, n.prototype), a;
}
function pi(e2) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return pi = function(r) {
    if (r === null || !qv(r)) return r;
    if (typeof r != "function") throw new TypeError("Super expression must either be null or a function");
    if (t !== void 0) {
      if (t.has(r)) return t.get(r);
      t.set(r, a);
    }
    function a() {
      return Uv(r, arguments, Rf(this).constructor);
    }
    return a.prototype = Object.create(r.prototype, { constructor: { value: a, enumerable: false, writable: true, configurable: true } }), Pc(a, r);
  }, pi(e2);
}
var kv = /%[sdj%]/g, Gv = function() {
};
function bi(e2) {
  if (!e2 || !e2.length) return null;
  var t = {};
  return e2.forEach(function(n) {
    var r = n.field;
    t[r] = t[r] || [], t[r].push(n);
  }), t;
}
function en(e2) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
  var a = 0, o = n.length;
  if (typeof e2 == "function") return e2.apply(null, n);
  if (typeof e2 == "string") {
    var i = e2.replace(kv, function(s) {
      if (s === "%%") return "%";
      if (a >= o) return s;
      switch (s) {
        case "%s":
          return String(n[a++]);
        case "%d":
          return Number(n[a++]);
        case "%j":
          try {
            return JSON.stringify(n[a++]);
          } catch {
            return "[Circular]";
          }
          break;
        default:
          return s;
      }
    });
    return i;
  }
  return e2;
}
function Kv(e2) {
  return e2 === "string" || e2 === "url" || e2 === "hex" || e2 === "email" || e2 === "date" || e2 === "pattern";
}
function Ot(e2, t) {
  return !!(e2 == null || t === "array" && Array.isArray(e2) && !e2.length || Kv(t) && typeof e2 == "string" && !e2);
}
function Xv(e2, t, n) {
  var r = [], a = 0, o = e2.length;
  function i(s) {
    r.push.apply(r, fe(s || [])), a++, a === o && n(r);
  }
  e2.forEach(function(s) {
    t(s, i);
  });
}
function al(e2, t, n) {
  var r = 0, a = e2.length;
  function o(i) {
    if (i && i.length) {
      n(i);
      return;
    }
    var s = r;
    r = r + 1, s < a ? t(e2[s], o) : n([]);
  }
  o([]);
}
function Yv(e2) {
  var t = [];
  return Object.keys(e2).forEach(function(n) {
    t.push.apply(t, fe(e2[n] || []));
  }), t;
}
var ol = function(e2) {
  za(n, e2);
  var t = Ha(n);
  function n(r, a) {
    var o;
    return fn(this, n), o = t.call(this, "Async Validation Error"), D(nt(o), "errors", void 0), D(nt(o), "fields", void 0), o.errors = r, o.fields = a, o;
  }
  return mn(n);
}(pi(Error));
function Qv(e2, t, n, r, a) {
  if (t.first) {
    var o = new Promise(function(h, p) {
      var g = function(w) {
        return r(w), w.length ? p(new ol(w, bi(w))) : h(a);
      }, v = Yv(e2);
      al(v, n, g);
    });
    return o.catch(function(h) {
      return h;
    }), o;
  }
  var i = t.firstFields === true ? Object.keys(e2) : t.firstFields || [], s = Object.keys(e2), c = s.length, u = 0, d = [], f = new Promise(function(h, p) {
    var g = function(m) {
      if (d.push.apply(d, m), u++, u === c) return r(d), d.length ? p(new ol(d, bi(d))) : h(a);
    };
    s.length || (r(d), h(a)), s.forEach(function(v) {
      var m = e2[v];
      i.indexOf(v) !== -1 ? al(m, n, g) : Xv(m, n, g);
    });
  });
  return f.catch(function(h) {
    return h;
  }), f;
}
function Jv(e2) {
  return !!(e2 && e2.message !== void 0);
}
function Zv(e2, t) {
  for (var n = e2, r = 0; r < t.length; r++) {
    if (n == null) return n;
    n = n[t[r]];
  }
  return n;
}
function il(e2, t) {
  return function(n) {
    var r;
    return e2.fullFields ? r = Zv(t, e2.fullFields) : r = t[n.field || e2.fullField], Jv(n) ? (n.field = n.field || e2.fullField, n.fieldValue = r, n) : { message: typeof n == "function" ? n() : n, fieldValue: r, field: n.field || e2.fullField };
  };
}
function sl(e2, t) {
  if (t) {
    for (var n in t) if (t.hasOwnProperty(n)) {
      var r = t[n];
      et(r) === "object" && et(e2[n]) === "object" ? e2[n] = V(V({}, e2[n]), r) : e2[n] = r;
    }
  }
  return e2;
}
var fr = "enum", ep = function(t, n, r, a, o) {
  t[fr] = Array.isArray(t[fr]) ? t[fr] : [], t[fr].indexOf(n) === -1 && a.push(en(o.messages[fr], t.fullField, t[fr].join(", ")));
}, tp = function(t, n, r, a, o) {
  if (t.pattern) {
    if (t.pattern instanceof RegExp) t.pattern.lastIndex = 0, t.pattern.test(n) || a.push(en(o.messages.pattern.mismatch, t.fullField, n, t.pattern));
    else if (typeof t.pattern == "string") {
      var i = new RegExp(t.pattern);
      i.test(n) || a.push(en(o.messages.pattern.mismatch, t.fullField, n, t.pattern));
    }
  }
}, np = function(t, n, r, a, o) {
  var i = typeof t.len == "number", s = typeof t.min == "number", c = typeof t.max == "number", u = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, d = n, f = null, h = typeof n == "number", p = typeof n == "string", g = Array.isArray(n);
  if (h ? f = "number" : p ? f = "string" : g && (f = "array"), !f) return false;
  g && (d = n.length), p && (d = n.replace(u, "_").length), i ? d !== t.len && a.push(en(o.messages[f].len, t.fullField, t.len)) : s && !c && d < t.min ? a.push(en(o.messages[f].min, t.fullField, t.min)) : c && !s && d > t.max ? a.push(en(o.messages[f].max, t.fullField, t.max)) : s && c && (d < t.min || d > t.max) && a.push(en(o.messages[f].range, t.fullField, t.min, t.max));
}, vu = function(t, n, r, a, o, i) {
  t.required && (!r.hasOwnProperty(t.field) || Ot(n, i || t.type)) && a.push(en(o.messages.required, t.fullField));
}, ba;
const rp = function() {
  if (ba) return ba;
  var e2 = "[a-fA-F\\d:]", t = function(y) {
    return y && y.includeBoundaries ? "(?:(?<=\\s|^)(?=".concat(e2, ")|(?<=").concat(e2, ")(?=\\s|$))") : "";
  }, n = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}", r = "[a-fA-F\\d]{1,4}", a = ["(?:".concat(r, ":){7}(?:").concat(r, "|:)"), "(?:".concat(r, ":){6}(?:").concat(n, "|:").concat(r, "|:)"), "(?:".concat(r, ":){5}(?::").concat(n, "|(?::").concat(r, "){1,2}|:)"), "(?:".concat(r, ":){4}(?:(?::").concat(r, "){0,1}:").concat(n, "|(?::").concat(r, "){1,3}|:)"), "(?:".concat(r, ":){3}(?:(?::").concat(r, "){0,2}:").concat(n, "|(?::").concat(r, "){1,4}|:)"), "(?:".concat(r, ":){2}(?:(?::").concat(r, "){0,3}:").concat(n, "|(?::").concat(r, "){1,5}|:)"), "(?:".concat(r, ":){1}(?:(?::").concat(r, "){0,4}:").concat(n, "|(?::").concat(r, "){1,6}|:)"), "(?::(?:(?::".concat(r, "){0,5}:").concat(n, "|(?::").concat(r, "){1,7}|:))")], o = "(?:%[0-9a-zA-Z]{1,})?", i = "(?:".concat(a.join("|"), ")").concat(o), s = new RegExp("(?:^".concat(n, "$)|(?:^").concat(i, "$)")), c = new RegExp("^".concat(n, "$")), u = new RegExp("^".concat(i, "$")), d = function(y) {
    return y && y.exact ? s : new RegExp("(?:".concat(t(y)).concat(n).concat(t(y), ")|(?:").concat(t(y)).concat(i).concat(t(y), ")"), "g");
  };
  d.v4 = function(I) {
    return I && I.exact ? c : new RegExp("".concat(t(I)).concat(n).concat(t(I)), "g");
  }, d.v6 = function(I) {
    return I && I.exact ? u : new RegExp("".concat(t(I)).concat(i).concat(t(I)), "g");
  };
  var f = "(?:(?:[a-z]+:)?//)", h = "(?:\\S+(?::\\S*)?@)?", p = d.v4().source, g = d.v6().source, v = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)", m = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*", w = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", b = "(?::\\d{2,5})?", C = '(?:[/?#][^\\s"]*)?', x = "(?:".concat(f, "|www\\.)").concat(h, "(?:localhost|").concat(p, "|").concat(g, "|").concat(v).concat(m).concat(w, ")").concat(b).concat(C);
  return ba = new RegExp("(?:^".concat(x, "$)"), "i"), ba;
};
var ll = { email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/, hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i }, Dr = { integer: function(t) {
  return Dr.number(t) && parseInt(t, 10) === t;
}, float: function(t) {
  return Dr.number(t) && !Dr.integer(t);
}, array: function(t) {
  return Array.isArray(t);
}, regexp: function(t) {
  if (t instanceof RegExp) return true;
  try {
    return !!new RegExp(t);
  } catch {
    return false;
  }
}, date: function(t) {
  return typeof t.getTime == "function" && typeof t.getMonth == "function" && typeof t.getYear == "function" && !isNaN(t.getTime());
}, number: function(t) {
  return isNaN(t) ? false : typeof t == "number";
}, object: function(t) {
  return et(t) === "object" && !Dr.array(t);
}, method: function(t) {
  return typeof t == "function";
}, email: function(t) {
  return typeof t == "string" && t.length <= 320 && !!t.match(ll.email);
}, url: function(t) {
  return typeof t == "string" && t.length <= 2048 && !!t.match(rp());
}, hex: function(t) {
  return typeof t == "string" && !!t.match(ll.hex);
} }, ap = function(t, n, r, a, o) {
  if (t.required && n === void 0) {
    vu(t, n, r, a, o);
    return;
  }
  var i = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"], s = t.type;
  i.indexOf(s) > -1 ? Dr[s](n) || a.push(en(o.messages.types[s], t.fullField, t.type)) : s && et(n) !== t.type && a.push(en(o.messages.types[s], t.fullField, t.type));
}, op = function(t, n, r, a, o) {
  (/^\s+$/.test(n) || n === "") && a.push(en(o.messages.whitespace, t.fullField));
};
const Ze = { required: vu, whitespace: op, type: ap, range: np, enum: ep, pattern: tp };
var ip = function(t, n, r, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (Ot(n) && !t.required) return r();
    Ze.required(t, n, a, i, o);
  }
  r(i);
}, sp = function(t, n, r, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (n == null && !t.required) return r();
    Ze.required(t, n, a, i, o, "array"), n != null && (Ze.type(t, n, a, i, o), Ze.range(t, n, a, i, o));
  }
  r(i);
}, lp = function(t, n, r, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (Ot(n) && !t.required) return r();
    Ze.required(t, n, a, i, o), n !== void 0 && Ze.type(t, n, a, i, o);
  }
  r(i);
}, cp = function(t, n, r, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (Ot(n, "date") && !t.required) return r();
    if (Ze.required(t, n, a, i, o), !Ot(n, "date")) {
      var c;
      n instanceof Date ? c = n : c = new Date(n), Ze.type(t, c, a, i, o), c && Ze.range(t, c.getTime(), a, i, o);
    }
  }
  r(i);
}, up = "enum", dp = function(t, n, r, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (Ot(n) && !t.required) return r();
    Ze.required(t, n, a, i, o), n !== void 0 && Ze[up](t, n, a, i, o);
  }
  r(i);
}, fp = function(t, n, r, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (Ot(n) && !t.required) return r();
    Ze.required(t, n, a, i, o), n !== void 0 && (Ze.type(t, n, a, i, o), Ze.range(t, n, a, i, o));
  }
  r(i);
}, mp = function(t, n, r, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (Ot(n) && !t.required) return r();
    Ze.required(t, n, a, i, o), n !== void 0 && (Ze.type(t, n, a, i, o), Ze.range(t, n, a, i, o));
  }
  r(i);
}, gp = function(t, n, r, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (Ot(n) && !t.required) return r();
    Ze.required(t, n, a, i, o), n !== void 0 && Ze.type(t, n, a, i, o);
  }
  r(i);
}, hp = function(t, n, r, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (n === "" && (n = void 0), Ot(n) && !t.required) return r();
    Ze.required(t, n, a, i, o), n !== void 0 && (Ze.type(t, n, a, i, o), Ze.range(t, n, a, i, o));
  }
  r(i);
}, vp = function(t, n, r, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (Ot(n) && !t.required) return r();
    Ze.required(t, n, a, i, o), n !== void 0 && Ze.type(t, n, a, i, o);
  }
  r(i);
}, pp = function(t, n, r, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (Ot(n, "string") && !t.required) return r();
    Ze.required(t, n, a, i, o), Ot(n, "string") || Ze.pattern(t, n, a, i, o);
  }
  r(i);
}, bp = function(t, n, r, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (Ot(n) && !t.required) return r();
    Ze.required(t, n, a, i, o), Ot(n) || Ze.type(t, n, a, i, o);
  }
  r(i);
}, yp = function(t, n, r, a, o) {
  var i = [], s = Array.isArray(n) ? "array" : et(n);
  Ze.required(t, n, a, i, o, s), r(i);
}, wp = function(t, n, r, a, o) {
  var i = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (Ot(n, "string") && !t.required) return r();
    Ze.required(t, n, a, i, o, "string"), Ot(n, "string") || (Ze.type(t, n, a, i, o), Ze.range(t, n, a, i, o), Ze.pattern(t, n, a, i, o), t.whitespace === true && Ze.whitespace(t, n, a, i, o));
  }
  r(i);
}, _o = function(t, n, r, a, o) {
  var i = t.type, s = [], c = t.required || !t.required && a.hasOwnProperty(t.field);
  if (c) {
    if (Ot(n, i) && !t.required) return r();
    Ze.required(t, n, a, s, o, i), Ot(n, i) || Ze.type(t, n, a, s, o);
  }
  r(s);
};
const zr = { string: wp, method: gp, number: hp, boolean: lp, regexp: bp, integer: mp, float: fp, array: sp, object: vp, enum: dp, pattern: pp, date: cp, url: _o, hex: _o, email: _o, required: yp, any: ip };
var ea = function() {
  function e2(t) {
    fn(this, e2), D(this, "rules", null), D(this, "_messages", vi), this.define(t);
  }
  return mn(e2, [{ key: "define", value: function(n) {
    var r = this;
    if (!n) throw new Error("Cannot configure a schema with no rules");
    if (et(n) !== "object" || Array.isArray(n)) throw new Error("Rules must be an object");
    this.rules = {}, Object.keys(n).forEach(function(a) {
      var o = n[a];
      r.rules[a] = Array.isArray(o) ? o : [o];
    });
  } }, { key: "messages", value: function(n) {
    return n && (this._messages = sl(hi(), n)), this._messages;
  } }, { key: "validate", value: function(n) {
    var r = this, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function() {
    }, i = n, s = a, c = o;
    if (typeof s == "function" && (c = s, s = {}), !this.rules || Object.keys(this.rules).length === 0) return c && c(null, i), Promise.resolve(i);
    function u(g) {
      var v = [], m = {};
      function w(C) {
        if (Array.isArray(C)) {
          var x;
          v = (x = v).concat.apply(x, fe(C));
        } else v.push(C);
      }
      for (var b = 0; b < g.length; b++) w(g[b]);
      v.length ? (m = bi(v), c(v, m)) : c(null, i);
    }
    if (s.messages) {
      var d = this.messages();
      d === vi && (d = hi()), sl(d, s.messages), s.messages = d;
    } else s.messages = this.messages();
    var f = {}, h = s.keys || Object.keys(this.rules);
    h.forEach(function(g) {
      var v = r.rules[g], m = i[g];
      v.forEach(function(w) {
        var b = w;
        typeof b.transform == "function" && (i === n && (i = V({}, i)), m = i[g] = b.transform(m), m != null && (b.type = b.type || (Array.isArray(m) ? "array" : et(m)))), typeof b == "function" ? b = { validator: b } : b = V({}, b), b.validator = r.getValidationMethod(b), b.validator && (b.field = g, b.fullField = b.fullField || g, b.type = r.getType(b), f[g] = f[g] || [], f[g].push({ rule: b, value: m, source: i, field: g }));
      });
    });
    var p = {};
    return Qv(f, s, function(g, v) {
      var m = g.rule, w = (m.type === "object" || m.type === "array") && (et(m.fields) === "object" || et(m.defaultField) === "object");
      w = w && (m.required || !m.required && g.value), m.field = g.field;
      function b(E, O) {
        return V(V({}, O), {}, { fullField: "".concat(m.fullField, ".").concat(E), fullFields: m.fullFields ? [].concat(fe(m.fullFields), [E]) : [E] });
      }
      function C() {
        var E = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], O = Array.isArray(E) ? E : [E];
        !s.suppressWarning && O.length && e2.warning("async-validator:", O), O.length && m.message !== void 0 && (O = [].concat(m.message));
        var R = O.map(il(m, i));
        if (s.first && R.length) return p[m.field] = 1, v(R);
        if (!w) v(R);
        else {
          if (m.required && !g.value) return m.message !== void 0 ? R = [].concat(m.message).map(il(m, i)) : s.error && (R = [s.error(m, en(s.messages.required, m.field))]), v(R);
          var S = {};
          m.defaultField && Object.keys(g.value).map(function(A) {
            S[A] = m.defaultField;
          }), S = V(V({}, S), g.rule.fields);
          var $ = {};
          Object.keys(S).forEach(function(A) {
            var N = S[A], T = Array.isArray(N) ? N : [N];
            $[A] = T.map(b.bind(null, A));
          });
          var P = new e2($);
          P.messages(s.messages), g.rule.options && (g.rule.options.messages = s.messages, g.rule.options.error = s.error), P.validate(g.value, g.rule.options || s, function(A) {
            var N = [];
            R && R.length && N.push.apply(N, fe(R)), A && A.length && N.push.apply(N, fe(A)), v(N.length ? N : null);
          });
        }
      }
      var x;
      if (m.asyncValidator) x = m.asyncValidator(m, g.value, C, g.source, s);
      else if (m.validator) {
        try {
          x = m.validator(m, g.value, C, g.source, s);
        } catch (E) {
          var I, y;
          (I = (y = console).error) === null || I === void 0 || I.call(y, E), s.suppressValidatorError || setTimeout(function() {
            throw E;
          }, 0), C(E.message);
        }
        x === true ? C() : x === false ? C(typeof m.message == "function" ? m.message(m.fullField || m.field) : m.message || "".concat(m.fullField || m.field, " fails")) : x instanceof Array ? C(x) : x instanceof Error && C(x.message);
      }
      x && x.then && x.then(function() {
        return C();
      }, function(E) {
        return C(E);
      });
    }, function(g) {
      u(g);
    }, i);
  } }, { key: "getType", value: function(n) {
    if (n.type === void 0 && n.pattern instanceof RegExp && (n.type = "pattern"), typeof n.validator != "function" && n.type && !zr.hasOwnProperty(n.type)) throw new Error(en("Unknown rule type %s", n.type));
    return n.type || "string";
  } }, { key: "getValidationMethod", value: function(n) {
    if (typeof n.validator == "function") return n.validator;
    var r = Object.keys(n), a = r.indexOf("message");
    return a !== -1 && r.splice(a, 1), r.length === 1 && r[0] === "required" ? zr.required : zr[this.getType(n)] || void 0;
  } }]), e2;
}();
D(ea, "register", function(t, n) {
  if (typeof n != "function") throw new Error("Cannot register a validator by type, validator is not a function");
  zr[t] = n;
});
D(ea, "warning", Gv);
D(ea, "messages", vi);
D(ea, "validators", zr);
var Jt = "'${name}' is not a valid ${type}", pu = { default: "Validation error on field '${name}'", required: "'${name}' is required", enum: "'${name}' must be one of [${enum}]", whitespace: "'${name}' cannot be empty", date: { format: "'${name}' is invalid for format date", parse: "'${name}' could not be parsed as date", invalid: "'${name}' is invalid date" }, types: { string: Jt, method: Jt, array: Jt, object: Jt, number: Jt, date: Jt, boolean: Jt, integer: Jt, float: Jt, regexp: Jt, email: Jt, url: Jt, hex: Jt }, string: { len: "'${name}' must be exactly ${len} characters", min: "'${name}' must be at least ${min} characters", max: "'${name}' cannot be longer than ${max} characters", range: "'${name}' must be between ${min} and ${max} characters" }, number: { len: "'${name}' must equal ${len}", min: "'${name}' cannot be less than ${min}", max: "'${name}' cannot be greater than ${max}", range: "'${name}' must be between ${min} and ${max}" }, array: { len: "'${name}' must be exactly ${len} in length", min: "'${name}' cannot be less than ${min} in length", max: "'${name}' cannot be greater than ${max} in length", range: "'${name}' must be between ${min} and ${max} in length" }, pattern: { mismatch: "'${name}' does not match pattern ${pattern}" } }, cl = ea;
function Cp(e2, t) {
  return e2.replace(/\\?\$\{\w+\}/g, function(n) {
    if (n.startsWith("\\")) return n.slice(1);
    var r = n.slice(2, -1);
    return t[r];
  });
}
var ul = "CODE_LOGIC_ERROR";
function yi(e2, t, n, r, a) {
  return wi.apply(this, arguments);
}
function wi() {
  return wi = sr(Vt().mark(function e2(t, n, r, a, o) {
    var i, s, c, u, d, f, h, p, g;
    return Vt().wrap(function(m) {
      for (; ; ) switch (m.prev = m.next) {
        case 0:
          return i = V({}, r), delete i.ruleIndex, cl.warning = function() {
          }, i.validator && (s = i.validator, i.validator = function() {
            try {
              return s.apply(void 0, arguments);
            } catch (w) {
              return console.error(w), Promise.reject(ul);
            }
          }), c = null, i && i.type === "array" && i.defaultField && (c = i.defaultField, delete i.defaultField), u = new cl(D({}, t, [i])), d = jr(pu, a.validateMessages), u.messages(d), f = [], m.prev = 10, m.next = 13, Promise.resolve(u.validate(D({}, t, n), V({}, a)));
        case 13:
          m.next = 18;
          break;
        case 15:
          m.prev = 15, m.t0 = m.catch(10), m.t0.errors && (f = m.t0.errors.map(function(w, b) {
            var C = w.message, x = C === ul ? d.default : C;
            return l.isValidElement(x) ? l.cloneElement(x, { key: "error_".concat(b) }) : x;
          }));
        case 18:
          if (!(!f.length && c)) {
            m.next = 23;
            break;
          }
          return m.next = 21, Promise.all(n.map(function(w, b) {
            return yi("".concat(t, ".").concat(b), w, c, a, o);
          }));
        case 21:
          return h = m.sent, m.abrupt("return", h.reduce(function(w, b) {
            return [].concat(fe(w), fe(b));
          }, []));
        case 23:
          return p = V(V({}, r), {}, { name: t, enum: (r.enum || []).join(", ") }, o), g = f.map(function(w) {
            return typeof w == "string" ? Cp(w, p) : w;
          }), m.abrupt("return", g);
        case 26:
        case "end":
          return m.stop();
      }
    }, e2, null, [[10, 15]]);
  })), wi.apply(this, arguments);
}
function Sp(e2, t, n, r, a, o) {
  var i = e2.join("."), s = n.map(function(d, f) {
    var h = d.validator, p = V(V({}, d), {}, { ruleIndex: f });
    return h && (p.validator = function(g, v, m) {
      var w = false, b = function() {
        for (var I = arguments.length, y = new Array(I), E = 0; E < I; E++) y[E] = arguments[E];
        Promise.resolve().then(function() {
          un(!w, "Your validator function has already return a promise. `callback` will be ignored."), w || m.apply(void 0, y);
        });
      }, C = h(g, v, b);
      w = C && typeof C.then == "function" && typeof C.catch == "function", un(w, "`callback` is deprecated. Please return a promise instead."), w && C.then(function() {
        m();
      }).catch(function(x) {
        m(x || " ");
      });
    }), p;
  }).sort(function(d, f) {
    var h = d.warningOnly, p = d.ruleIndex, g = f.warningOnly, v = f.ruleIndex;
    return !!h == !!g ? p - v : h ? 1 : -1;
  }), c;
  if (a === true) c = new Promise(function() {
    var d = sr(Vt().mark(function f(h, p) {
      var g, v, m;
      return Vt().wrap(function(b) {
        for (; ; ) switch (b.prev = b.next) {
          case 0:
            g = 0;
          case 1:
            if (!(g < s.length)) {
              b.next = 12;
              break;
            }
            return v = s[g], b.next = 5, yi(i, t, v, r, o);
          case 5:
            if (m = b.sent, !m.length) {
              b.next = 9;
              break;
            }
            return p([{ errors: m, rule: v }]), b.abrupt("return");
          case 9:
            g += 1, b.next = 1;
            break;
          case 12:
            h([]);
          case 13:
          case "end":
            return b.stop();
        }
      }, f);
    }));
    return function(f, h) {
      return d.apply(this, arguments);
    };
  }());
  else {
    var u = s.map(function(d) {
      return yi(i, t, d, r, o).then(function(f) {
        return { errors: f, rule: d };
      });
    });
    c = (a ? $p(u) : xp(u)).then(function(d) {
      return Promise.reject(d);
    });
  }
  return c.catch(function(d) {
    return d;
  }), c;
}
function xp(e2) {
  return Ci.apply(this, arguments);
}
function Ci() {
  return Ci = sr(Vt().mark(function e2(t) {
    return Vt().wrap(function(r) {
      for (; ; ) switch (r.prev = r.next) {
        case 0:
          return r.abrupt("return", Promise.all(t).then(function(a) {
            var o, i = (o = []).concat.apply(o, fe(a));
            return i;
          }));
        case 1:
        case "end":
          return r.stop();
      }
    }, e2);
  })), Ci.apply(this, arguments);
}
function $p(e2) {
  return Si.apply(this, arguments);
}
function Si() {
  return Si = sr(Vt().mark(function e2(t) {
    var n;
    return Vt().wrap(function(a) {
      for (; ; ) switch (a.prev = a.next) {
        case 0:
          return n = 0, a.abrupt("return", new Promise(function(o) {
            t.forEach(function(i) {
              i.then(function(s) {
                s.errors.length && o([s]), n += 1, n === t.length && o([]);
              });
            });
          }));
        case 2:
        case "end":
          return a.stop();
      }
    }, e2);
  })), Si.apply(this, arguments);
}
function Ct(e2) {
  return gi(e2);
}
function dl(e2, t) {
  var n = {};
  return t.forEach(function(r) {
    var a = Nn(e2, r);
    n = Pn(n, r, a);
  }), n;
}
function br(e2, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
  return e2 && e2.some(function(r) {
    return bu(t, r, n);
  });
}
function bu(e2, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
  return !e2 || !t || !n && e2.length !== t.length ? false : t.every(function(r, a) {
    return e2[a] === r;
  });
}
function Ep(e2, t) {
  if (e2 === t) return true;
  if (!e2 && t || e2 && !t || !e2 || !t || et(e2) !== "object" || et(t) !== "object") return false;
  var n = Object.keys(e2), r = Object.keys(t), a = new Set([].concat(n, r));
  return fe(a).every(function(o) {
    var i = e2[o], s = t[o];
    return typeof i == "function" && typeof s == "function" ? true : i === s;
  });
}
function Rp(e2) {
  var t = arguments.length <= 1 ? void 0 : arguments[1];
  return t && t.target && et(t.target) === "object" && e2 in t.target ? t.target[e2] : t;
}
function fl(e2, t, n) {
  var r = e2.length;
  if (t < 0 || t >= r || n < 0 || n >= r) return e2;
  var a = e2[t], o = t - n;
  return o > 0 ? [].concat(fe(e2.slice(0, n)), [a], fe(e2.slice(n, t)), fe(e2.slice(t + 1, r))) : o < 0 ? [].concat(fe(e2.slice(0, t)), fe(e2.slice(t + 1, n + 1)), [a], fe(e2.slice(n + 1, r))) : e2;
}
var Op = ["name"], ln = [];
function jo(e2, t, n, r, a, o) {
  return typeof e2 == "function" ? e2(t, n, "source" in o ? { source: o.source } : {}) : r !== a;
}
var Yi = function(e2) {
  za(n, e2);
  var t = Ha(n);
  function n(r) {
    var a;
    if (fn(this, n), a = t.call(this, r), D(nt(a), "state", { resetCount: 0 }), D(nt(a), "cancelRegisterFunc", null), D(nt(a), "mounted", false), D(nt(a), "touched", false), D(nt(a), "dirty", false), D(nt(a), "validatePromise", void 0), D(nt(a), "prevValidating", void 0), D(nt(a), "errors", ln), D(nt(a), "warnings", ln), D(nt(a), "cancelRegister", function() {
      var c = a.props, u = c.preserve, d = c.isListField, f = c.name;
      a.cancelRegisterFunc && a.cancelRegisterFunc(d, u, Ct(f)), a.cancelRegisterFunc = null;
    }), D(nt(a), "getNamePath", function() {
      var c = a.props, u = c.name, d = c.fieldContext, f = d.prefixName, h = f === void 0 ? [] : f;
      return u !== void 0 ? [].concat(fe(h), fe(u)) : [];
    }), D(nt(a), "getRules", function() {
      var c = a.props, u = c.rules, d = u === void 0 ? [] : u, f = c.fieldContext;
      return d.map(function(h) {
        return typeof h == "function" ? h(f) : h;
      });
    }), D(nt(a), "refresh", function() {
      a.mounted && a.setState(function(c) {
        var u = c.resetCount;
        return { resetCount: u + 1 };
      });
    }), D(nt(a), "metaCache", null), D(nt(a), "triggerMetaEvent", function(c) {
      var u = a.props.onMetaChange;
      if (u) {
        var d = V(V({}, a.getMeta()), {}, { destroy: c });
        $s(a.metaCache, d) || u(d), a.metaCache = d;
      } else a.metaCache = null;
    }), D(nt(a), "onStoreChange", function(c, u, d) {
      var f = a.props, h = f.shouldUpdate, p = f.dependencies, g = p === void 0 ? [] : p, v = f.onReset, m = d.store, w = a.getNamePath(), b = a.getValue(c), C = a.getValue(m), x = u && br(u, w);
      switch (d.type === "valueUpdate" && d.source === "external" && !$s(b, C) && (a.touched = true, a.dirty = true, a.validatePromise = null, a.errors = ln, a.warnings = ln, a.triggerMetaEvent()), d.type) {
        case "reset":
          if (!u || x) {
            a.touched = false, a.dirty = false, a.validatePromise = void 0, a.errors = ln, a.warnings = ln, a.triggerMetaEvent(), v == null ? void 0 : v(), a.refresh();
            return;
          }
          break;
        case "remove": {
          if (h && jo(h, c, m, b, C, d)) {
            a.reRender();
            return;
          }
          break;
        }
        case "setField": {
          var I = d.data;
          if (x) {
            "touched" in I && (a.touched = I.touched), "validating" in I && !("originRCField" in I) && (a.validatePromise = I.validating ? Promise.resolve([]) : null), "errors" in I && (a.errors = I.errors || ln), "warnings" in I && (a.warnings = I.warnings || ln), a.dirty = true, a.triggerMetaEvent(), a.reRender();
            return;
          } else if ("value" in I && br(u, w, true)) {
            a.reRender();
            return;
          }
          if (h && !w.length && jo(h, c, m, b, C, d)) {
            a.reRender();
            return;
          }
          break;
        }
        case "dependenciesUpdate": {
          var y = g.map(Ct);
          if (y.some(function(E) {
            return br(d.relatedFields, E);
          })) {
            a.reRender();
            return;
          }
          break;
        }
        default:
          if (x || (!g.length || w.length || h) && jo(h, c, m, b, C, d)) {
            a.reRender();
            return;
          }
          break;
      }
      h === true && a.reRender();
    }), D(nt(a), "validateRules", function(c) {
      var u = a.getNamePath(), d = a.getValue(), f = c || {}, h = f.triggerName, p = f.validateOnly, g = p === void 0 ? false : p, v = Promise.resolve().then(sr(Vt().mark(function m() {
        var w, b, C, x, I, y, E;
        return Vt().wrap(function(R) {
          for (; ; ) switch (R.prev = R.next) {
            case 0:
              if (a.mounted) {
                R.next = 2;
                break;
              }
              return R.abrupt("return", []);
            case 2:
              if (w = a.props, b = w.validateFirst, C = b === void 0 ? false : b, x = w.messageVariables, I = w.validateDebounce, y = a.getRules(), h && (y = y.filter(function(S) {
                return S;
              }).filter(function(S) {
                var $ = S.validateTrigger;
                if (!$) return true;
                var P = gi($);
                return P.includes(h);
              })), !(I && h)) {
                R.next = 10;
                break;
              }
              return R.next = 8, new Promise(function(S) {
                setTimeout(S, I);
              });
            case 8:
              if (a.validatePromise === v) {
                R.next = 10;
                break;
              }
              return R.abrupt("return", []);
            case 10:
              return E = Sp(u, d, y, c, C, x), E.catch(function(S) {
                return S;
              }).then(function() {
                var S = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ln;
                if (a.validatePromise === v) {
                  var $;
                  a.validatePromise = null;
                  var P = [], A = [];
                  ($ = S.forEach) === null || $ === void 0 || $.call(S, function(N) {
                    var T = N.rule.warningOnly, M = N.errors, _ = M === void 0 ? ln : M;
                    T ? A.push.apply(A, fe(_)) : P.push.apply(P, fe(_));
                  }), a.errors = P, a.warnings = A, a.triggerMetaEvent(), a.reRender();
                }
              }), R.abrupt("return", E);
            case 13:
            case "end":
              return R.stop();
          }
        }, m);
      })));
      return g || (a.validatePromise = v, a.dirty = true, a.errors = ln, a.warnings = ln, a.triggerMetaEvent(), a.reRender()), v;
    }), D(nt(a), "isFieldValidating", function() {
      return !!a.validatePromise;
    }), D(nt(a), "isFieldTouched", function() {
      return a.touched;
    }), D(nt(a), "isFieldDirty", function() {
      if (a.dirty || a.props.initialValue !== void 0) return true;
      var c = a.props.fieldContext, u = c.getInternalHooks(Yn), d = u.getInitialValue;
      return d(a.getNamePath()) !== void 0;
    }), D(nt(a), "getErrors", function() {
      return a.errors;
    }), D(nt(a), "getWarnings", function() {
      return a.warnings;
    }), D(nt(a), "isListField", function() {
      return a.props.isListField;
    }), D(nt(a), "isList", function() {
      return a.props.isList;
    }), D(nt(a), "isPreserve", function() {
      return a.props.preserve;
    }), D(nt(a), "getMeta", function() {
      a.prevValidating = a.isFieldValidating();
      var c = { touched: a.isFieldTouched(), validating: a.prevValidating, errors: a.errors, warnings: a.warnings, name: a.getNamePath(), validated: a.validatePromise === null };
      return c;
    }), D(nt(a), "getOnlyChild", function(c) {
      if (typeof c == "function") {
        var u = a.getMeta();
        return V(V({}, a.getOnlyChild(c(a.getControlled(), u, a.props.fieldContext))), {}, { isFunction: true });
      }
      var d = Mn(c);
      return d.length !== 1 || !l.isValidElement(d[0]) ? { child: d, isFunction: false } : { child: d[0], isFunction: false };
    }), D(nt(a), "getValue", function(c) {
      var u = a.props.fieldContext.getFieldsValue, d = a.getNamePath();
      return Nn(c || u(true), d);
    }), D(nt(a), "getControlled", function() {
      var c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, u = a.props, d = u.name, f = u.trigger, h = u.validateTrigger, p = u.getValueFromEvent, g = u.normalize, v = u.valuePropName, m = u.getValueProps, w = u.fieldContext, b = h !== void 0 ? h : w.validateTrigger, C = a.getNamePath(), x = w.getInternalHooks, I = w.getFieldsValue, y = x(Yn), E = y.dispatch, O = a.getValue(), R = m || function(N) {
        return D({}, v, N);
      }, S = c[f], $ = d !== void 0 ? R(O) : {}, P = V(V({}, c), $);
      P[f] = function() {
        a.touched = true, a.dirty = true, a.triggerMetaEvent();
        for (var N, T = arguments.length, M = new Array(T), _ = 0; _ < T; _++) M[_] = arguments[_];
        p ? N = p.apply(void 0, M) : N = Rp.apply(void 0, [v].concat(M)), g && (N = g(N, O, I(true))), N !== O && E({ type: "updateValue", namePath: C, value: N }), S && S.apply(void 0, M);
      };
      var A = gi(b || []);
      return A.forEach(function(N) {
        var T = P[N];
        P[N] = function() {
          T && T.apply(void 0, arguments);
          var M = a.props.rules;
          M && M.length && E({ type: "validateField", namePath: C, triggerName: N });
        };
      }), P;
    }), r.fieldContext) {
      var o = r.fieldContext.getInternalHooks, i = o(Yn), s = i.initEntityValue;
      s(nt(a));
    }
    return a;
  }
  return mn(n, [{ key: "componentDidMount", value: function() {
    var a = this.props, o = a.shouldUpdate, i = a.fieldContext;
    if (this.mounted = true, i) {
      var s = i.getInternalHooks, c = s(Yn), u = c.registerField;
      this.cancelRegisterFunc = u(this);
    }
    o === true && this.reRender();
  } }, { key: "componentWillUnmount", value: function() {
    this.cancelRegister(), this.triggerMetaEvent(true), this.mounted = false;
  } }, { key: "reRender", value: function() {
    this.mounted && this.forceUpdate();
  } }, { key: "render", value: function() {
    var a = this.state.resetCount, o = this.props.children, i = this.getOnlyChild(o), s = i.child, c = i.isFunction, u;
    return c ? u = s : l.isValidElement(s) ? u = l.cloneElement(s, this.getControlled(s.props)) : (un(!s, "`children` of Field is not validate ReactElement."), u = s), l.createElement(l.Fragment, { key: a }, u);
  } }]), n;
}(l.Component);
D(Yi, "contextType", rr);
D(Yi, "defaultProps", { trigger: "onChange", valuePropName: "value" });
function Qi(e2) {
  var t, n = e2.name, r = rt(e2, Op), a = l.useContext(rr), o = l.useContext(kr), i = n !== void 0 ? Ct(n) : void 0, s = (t = r.isListField) !== null && t !== void 0 ? t : !!o, c = "keep";
  return s || (c = "_".concat((i || []).join("_"))), l.createElement(Yi, Ie({ key: c, name: i, isListField: s }, r, { fieldContext: a }));
}
function yu(e2) {
  var t = e2.name, n = e2.initialValue, r = e2.children, a = e2.rules, o = e2.validateTrigger, i = e2.isListField, s = l.useContext(rr), c = l.useContext(kr), u = l.useRef({ keys: [], id: 0 }), d = u.current, f = l.useMemo(function() {
    var v = Ct(s.prefixName) || [];
    return [].concat(fe(v), fe(Ct(t)));
  }, [s.prefixName, t]), h = l.useMemo(function() {
    return V(V({}, s), {}, { prefixName: f });
  }, [s, f]), p = l.useMemo(function() {
    return { getKey: function(m) {
      var w = f.length, b = m[w];
      return [d.keys[b], m.slice(w + 1)];
    } };
  }, [f]);
  if (typeof r != "function") return un(false, "Form.List only accepts function as children."), null;
  var g = function(m, w, b) {
    var C = b.source;
    return C === "internal" ? false : m !== w;
  };
  return l.createElement(kr.Provider, { value: p }, l.createElement(rr.Provider, { value: h }, l.createElement(Qi, { name: [], shouldUpdate: g, rules: a, validateTrigger: o, initialValue: n, isList: true, isListField: i ?? !!c }, function(v, m) {
    var w = v.value, b = w === void 0 ? [] : w, C = v.onChange, x = s.getFieldValue, I = function() {
      var R = x(f || []);
      return R || [];
    }, y = { add: function(R, S) {
      var $ = I();
      S >= 0 && S <= $.length ? (d.keys = [].concat(fe(d.keys.slice(0, S)), [d.id], fe(d.keys.slice(S))), C([].concat(fe($.slice(0, S)), [R], fe($.slice(S))))) : (d.keys = [].concat(fe(d.keys), [d.id]), C([].concat(fe($), [R]))), d.id += 1;
    }, remove: function(R) {
      var S = I(), $ = new Set(Array.isArray(R) ? R : [R]);
      $.size <= 0 || (d.keys = d.keys.filter(function(P, A) {
        return !$.has(A);
      }), C(S.filter(function(P, A) {
        return !$.has(A);
      })));
    }, move: function(R, S) {
      if (R !== S) {
        var $ = I();
        R < 0 || R >= $.length || S < 0 || S >= $.length || (d.keys = fl(d.keys, R, S), C(fl($, R, S)));
      }
    } }, E = b || [];
    return Array.isArray(E) || (E = []), r(E.map(function(O, R) {
      var S = d.keys[R];
      return S === void 0 && (d.keys[R] = d.id, S = d.keys[R], d.id += 1), { name: R, key: S, isListField: true };
    }), y, m);
  })));
}
function Ip(e2) {
  var t = false, n = e2.length, r = [];
  return e2.length ? new Promise(function(a, o) {
    e2.forEach(function(i, s) {
      i.catch(function(c) {
        return t = true, c;
      }).then(function(c) {
        n -= 1, r[s] = c, !(n > 0) && (t && o(r), a(r));
      });
    });
  }) : Promise.resolve([]);
}
var wu = "__@field_split__";
function Do(e2) {
  return e2.map(function(t) {
    return "".concat(et(t), ":").concat(t);
  }).join(wu);
}
var mr = function() {
  function e2() {
    fn(this, e2), D(this, "kvs", /* @__PURE__ */ new Map());
  }
  return mn(e2, [{ key: "set", value: function(n, r) {
    this.kvs.set(Do(n), r);
  } }, { key: "get", value: function(n) {
    return this.kvs.get(Do(n));
  } }, { key: "update", value: function(n, r) {
    var a = this.get(n), o = r(a);
    o ? this.set(n, o) : this.delete(n);
  } }, { key: "delete", value: function(n) {
    this.kvs.delete(Do(n));
  } }, { key: "map", value: function(n) {
    return fe(this.kvs.entries()).map(function(r) {
      var a = te(r, 2), o = a[0], i = a[1], s = o.split(wu);
      return n({ key: s.map(function(c) {
        var u = c.match(/^([^:]*):(.*)$/), d = te(u, 3), f = d[1], h = d[2];
        return f === "number" ? Number(h) : h;
      }), value: i });
    });
  } }, { key: "toJSON", value: function() {
    var n = {};
    return this.map(function(r) {
      var a = r.key, o = r.value;
      return n[a.join(".")] = o, null;
    }), n;
  } }]), e2;
}(), Ap = ["name"], Pp = mn(function e(t) {
  var n = this;
  fn(this, e), D(this, "formHooked", false), D(this, "forceRootUpdate", void 0), D(this, "subscribable", true), D(this, "store", {}), D(this, "fieldEntities", []), D(this, "initialValues", {}), D(this, "callbacks", {}), D(this, "validateMessages", null), D(this, "preserve", null), D(this, "lastValidatePromise", null), D(this, "getForm", function() {
    return { getFieldValue: n.getFieldValue, getFieldsValue: n.getFieldsValue, getFieldError: n.getFieldError, getFieldWarning: n.getFieldWarning, getFieldsError: n.getFieldsError, isFieldsTouched: n.isFieldsTouched, isFieldTouched: n.isFieldTouched, isFieldValidating: n.isFieldValidating, isFieldsValidating: n.isFieldsValidating, resetFields: n.resetFields, setFields: n.setFields, setFieldValue: n.setFieldValue, setFieldsValue: n.setFieldsValue, validateFields: n.validateFields, submit: n.submit, _init: true, getInternalHooks: n.getInternalHooks };
  }), D(this, "getInternalHooks", function(r) {
    return r === Yn ? (n.formHooked = true, { dispatch: n.dispatch, initEntityValue: n.initEntityValue, registerField: n.registerField, useSubscribe: n.useSubscribe, setInitialValues: n.setInitialValues, destroyForm: n.destroyForm, setCallbacks: n.setCallbacks, setValidateMessages: n.setValidateMessages, getFields: n.getFields, setPreserve: n.setPreserve, getInitialValue: n.getInitialValue, registerWatch: n.registerWatch }) : (un(false, "`getInternalHooks` is internal usage. Should not call directly."), null);
  }), D(this, "useSubscribe", function(r) {
    n.subscribable = r;
  }), D(this, "prevWithoutPreserves", null), D(this, "setInitialValues", function(r, a) {
    if (n.initialValues = r || {}, a) {
      var o, i = jr(r, n.store);
      (o = n.prevWithoutPreserves) === null || o === void 0 || o.map(function(s) {
        var c = s.key;
        i = Pn(i, c, Nn(r, c));
      }), n.prevWithoutPreserves = null, n.updateStore(i);
    }
  }), D(this, "destroyForm", function(r) {
    if (r) n.updateStore({});
    else {
      var a = new mr();
      n.getFieldEntities(true).forEach(function(o) {
        n.isMergedPreserve(o.isPreserve()) || a.set(o.getNamePath(), true);
      }), n.prevWithoutPreserves = a;
    }
  }), D(this, "getInitialValue", function(r) {
    var a = Nn(n.initialValues, r);
    return r.length ? jr(a) : a;
  }), D(this, "setCallbacks", function(r) {
    n.callbacks = r;
  }), D(this, "setValidateMessages", function(r) {
    n.validateMessages = r;
  }), D(this, "setPreserve", function(r) {
    n.preserve = r;
  }), D(this, "watchList", []), D(this, "registerWatch", function(r) {
    return n.watchList.push(r), function() {
      n.watchList = n.watchList.filter(function(a) {
        return a !== r;
      });
    };
  }), D(this, "notifyWatch", function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    if (n.watchList.length) {
      var a = n.getFieldsValue(), o = n.getFieldsValue(true);
      n.watchList.forEach(function(i) {
        i(a, o, r);
      });
    }
  }), D(this, "timeoutId", null), D(this, "warningUnhooked", function() {
  }), D(this, "updateStore", function(r) {
    n.store = r;
  }), D(this, "getFieldEntities", function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
    return r ? n.fieldEntities.filter(function(a) {
      return a.getNamePath().length;
    }) : n.fieldEntities;
  }), D(this, "getFieldsMap", function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false, a = new mr();
    return n.getFieldEntities(r).forEach(function(o) {
      var i = o.getNamePath();
      a.set(i, o);
    }), a;
  }), D(this, "getFieldEntitiesForNamePathList", function(r) {
    if (!r) return n.getFieldEntities(true);
    var a = n.getFieldsMap(true);
    return r.map(function(o) {
      var i = Ct(o);
      return a.get(i) || { INVALIDATE_NAME_PATH: Ct(o) };
    });
  }), D(this, "getFieldsValue", function(r, a) {
    n.warningUnhooked();
    var o, i, s;
    if (r === true || Array.isArray(r) ? (o = r, i = a) : r && et(r) === "object" && (s = r.strict, i = r.filter), o === true && !i) return n.store;
    var c = n.getFieldEntitiesForNamePathList(Array.isArray(o) ? o : null), u = [];
    return c.forEach(function(d) {
      var f, h, p = "INVALIDATE_NAME_PATH" in d ? d.INVALIDATE_NAME_PATH : d.getNamePath();
      if (s) {
        var g, v;
        if ((g = (v = d).isList) !== null && g !== void 0 && g.call(v)) return;
      } else if (!o && (f = (h = d).isListField) !== null && f !== void 0 && f.call(h)) return;
      if (!i) u.push(p);
      else {
        var m = "getMeta" in d ? d.getMeta() : null;
        i(m) && u.push(p);
      }
    }), dl(n.store, u.map(Ct));
  }), D(this, "getFieldValue", function(r) {
    n.warningUnhooked();
    var a = Ct(r);
    return Nn(n.store, a);
  }), D(this, "getFieldsError", function(r) {
    n.warningUnhooked();
    var a = n.getFieldEntitiesForNamePathList(r);
    return a.map(function(o, i) {
      return o && !("INVALIDATE_NAME_PATH" in o) ? { name: o.getNamePath(), errors: o.getErrors(), warnings: o.getWarnings() } : { name: Ct(r[i]), errors: [], warnings: [] };
    });
  }), D(this, "getFieldError", function(r) {
    n.warningUnhooked();
    var a = Ct(r), o = n.getFieldsError([a])[0];
    return o.errors;
  }), D(this, "getFieldWarning", function(r) {
    n.warningUnhooked();
    var a = Ct(r), o = n.getFieldsError([a])[0];
    return o.warnings;
  }), D(this, "isFieldsTouched", function() {
    n.warningUnhooked();
    for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++) a[o] = arguments[o];
    var i = a[0], s = a[1], c, u = false;
    a.length === 0 ? c = null : a.length === 1 ? Array.isArray(i) ? (c = i.map(Ct), u = false) : (c = null, u = i) : (c = i.map(Ct), u = s);
    var d = n.getFieldEntities(true), f = function(m) {
      return m.isFieldTouched();
    };
    if (!c) return u ? d.every(function(v) {
      return f(v) || v.isList();
    }) : d.some(f);
    var h = new mr();
    c.forEach(function(v) {
      h.set(v, []);
    }), d.forEach(function(v) {
      var m = v.getNamePath();
      c.forEach(function(w) {
        w.every(function(b, C) {
          return m[C] === b;
        }) && h.update(w, function(b) {
          return [].concat(fe(b), [v]);
        });
      });
    });
    var p = function(m) {
      return m.some(f);
    }, g = h.map(function(v) {
      var m = v.value;
      return m;
    });
    return u ? g.every(p) : g.some(p);
  }), D(this, "isFieldTouched", function(r) {
    return n.warningUnhooked(), n.isFieldsTouched([r]);
  }), D(this, "isFieldsValidating", function(r) {
    n.warningUnhooked();
    var a = n.getFieldEntities();
    if (!r) return a.some(function(i) {
      return i.isFieldValidating();
    });
    var o = r.map(Ct);
    return a.some(function(i) {
      var s = i.getNamePath();
      return br(o, s) && i.isFieldValidating();
    });
  }), D(this, "isFieldValidating", function(r) {
    return n.warningUnhooked(), n.isFieldsValidating([r]);
  }), D(this, "resetWithFieldInitialValue", function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, a = new mr(), o = n.getFieldEntities(true);
    o.forEach(function(c) {
      var u = c.props.initialValue, d = c.getNamePath();
      if (u !== void 0) {
        var f = a.get(d) || /* @__PURE__ */ new Set();
        f.add({ entity: c, value: u }), a.set(d, f);
      }
    });
    var i = function(u) {
      u.forEach(function(d) {
        var f = d.props.initialValue;
        if (f !== void 0) {
          var h = d.getNamePath(), p = n.getInitialValue(h);
          if (p !== void 0) un(false, "Form already set 'initialValues' with path '".concat(h.join("."), "'. Field can not overwrite it."));
          else {
            var g = a.get(h);
            if (g && g.size > 1) un(false, "Multiple Field with path '".concat(h.join("."), "' set 'initialValue'. Can not decide which one to pick."));
            else if (g) {
              var v = n.getFieldValue(h), m = d.isListField();
              !m && (!r.skipExist || v === void 0) && n.updateStore(Pn(n.store, h, fe(g)[0].value));
            }
          }
        }
      });
    }, s;
    r.entities ? s = r.entities : r.namePathList ? (s = [], r.namePathList.forEach(function(c) {
      var u = a.get(c);
      if (u) {
        var d;
        (d = s).push.apply(d, fe(fe(u).map(function(f) {
          return f.entity;
        })));
      }
    })) : s = o, i(s);
  }), D(this, "resetFields", function(r) {
    n.warningUnhooked();
    var a = n.store;
    if (!r) {
      n.updateStore(jr(n.initialValues)), n.resetWithFieldInitialValue(), n.notifyObservers(a, null, { type: "reset" }), n.notifyWatch();
      return;
    }
    var o = r.map(Ct);
    o.forEach(function(i) {
      var s = n.getInitialValue(i);
      n.updateStore(Pn(n.store, i, s));
    }), n.resetWithFieldInitialValue({ namePathList: o }), n.notifyObservers(a, o, { type: "reset" }), n.notifyWatch(o);
  }), D(this, "setFields", function(r) {
    n.warningUnhooked();
    var a = n.store, o = [];
    r.forEach(function(i) {
      var s = i.name, c = rt(i, Ap), u = Ct(s);
      o.push(u), "value" in c && n.updateStore(Pn(n.store, u, c.value)), n.notifyObservers(a, [u], { type: "setField", data: i });
    }), n.notifyWatch(o);
  }), D(this, "getFields", function() {
    var r = n.getFieldEntities(true), a = r.map(function(o) {
      var i = o.getNamePath(), s = o.getMeta(), c = V(V({}, s), {}, { name: i, value: n.getFieldValue(i) });
      return Object.defineProperty(c, "originRCField", { value: true }), c;
    });
    return a;
  }), D(this, "initEntityValue", function(r) {
    var a = r.props.initialValue;
    if (a !== void 0) {
      var o = r.getNamePath(), i = Nn(n.store, o);
      i === void 0 && n.updateStore(Pn(n.store, o, a));
    }
  }), D(this, "isMergedPreserve", function(r) {
    var a = r !== void 0 ? r : n.preserve;
    return a ?? true;
  }), D(this, "registerField", function(r) {
    n.fieldEntities.push(r);
    var a = r.getNamePath();
    if (n.notifyWatch([a]), r.props.initialValue !== void 0) {
      var o = n.store;
      n.resetWithFieldInitialValue({ entities: [r], skipExist: true }), n.notifyObservers(o, [r.getNamePath()], { type: "valueUpdate", source: "internal" });
    }
    return function(i, s) {
      var c = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
      if (n.fieldEntities = n.fieldEntities.filter(function(f) {
        return f !== r;
      }), !n.isMergedPreserve(s) && (!i || c.length > 1)) {
        var u = i ? void 0 : n.getInitialValue(a);
        if (a.length && n.getFieldValue(a) !== u && n.fieldEntities.every(function(f) {
          return !bu(f.getNamePath(), a);
        })) {
          var d = n.store;
          n.updateStore(Pn(d, a, u, true)), n.notifyObservers(d, [a], { type: "remove" }), n.triggerDependenciesUpdate(d, a);
        }
      }
      n.notifyWatch([a]);
    };
  }), D(this, "dispatch", function(r) {
    switch (r.type) {
      case "updateValue": {
        var a = r.namePath, o = r.value;
        n.updateValue(a, o);
        break;
      }
      case "validateField": {
        var i = r.namePath, s = r.triggerName;
        n.validateFields([i], { triggerName: s });
        break;
      }
    }
  }), D(this, "notifyObservers", function(r, a, o) {
    if (n.subscribable) {
      var i = V(V({}, o), {}, { store: n.getFieldsValue(true) });
      n.getFieldEntities().forEach(function(s) {
        var c = s.onStoreChange;
        c(r, a, i);
      });
    } else n.forceRootUpdate();
  }), D(this, "triggerDependenciesUpdate", function(r, a) {
    var o = n.getDependencyChildrenFields(a);
    return o.length && n.validateFields(o), n.notifyObservers(r, o, { type: "dependenciesUpdate", relatedFields: [a].concat(fe(o)) }), o;
  }), D(this, "updateValue", function(r, a) {
    var o = Ct(r), i = n.store;
    n.updateStore(Pn(n.store, o, a)), n.notifyObservers(i, [o], { type: "valueUpdate", source: "internal" }), n.notifyWatch([o]);
    var s = n.triggerDependenciesUpdate(i, o), c = n.callbacks.onValuesChange;
    if (c) {
      var u = dl(n.store, [o]);
      c(u, n.getFieldsValue());
    }
    n.triggerOnFieldsChange([o].concat(fe(s)));
  }), D(this, "setFieldsValue", function(r) {
    n.warningUnhooked();
    var a = n.store;
    if (r) {
      var o = jr(n.store, r);
      n.updateStore(o);
    }
    n.notifyObservers(a, null, { type: "valueUpdate", source: "external" }), n.notifyWatch();
  }), D(this, "setFieldValue", function(r, a) {
    n.setFields([{ name: r, value: a, errors: [], warnings: [] }]);
  }), D(this, "getDependencyChildrenFields", function(r) {
    var a = /* @__PURE__ */ new Set(), o = [], i = new mr();
    n.getFieldEntities().forEach(function(c) {
      var u = c.props.dependencies;
      (u || []).forEach(function(d) {
        var f = Ct(d);
        i.update(f, function() {
          var h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : /* @__PURE__ */ new Set();
          return h.add(c), h;
        });
      });
    });
    var s = function c(u) {
      var d = i.get(u) || /* @__PURE__ */ new Set();
      d.forEach(function(f) {
        if (!a.has(f)) {
          a.add(f);
          var h = f.getNamePath();
          f.isFieldDirty() && h.length && (o.push(h), c(h));
        }
      });
    };
    return s(r), o;
  }), D(this, "triggerOnFieldsChange", function(r, a) {
    var o = n.callbacks.onFieldsChange;
    if (o) {
      var i = n.getFields();
      if (a) {
        var s = new mr();
        a.forEach(function(u) {
          var d = u.name, f = u.errors;
          s.set(d, f);
        }), i.forEach(function(u) {
          u.errors = s.get(u.name) || u.errors;
        });
      }
      var c = i.filter(function(u) {
        var d = u.name;
        return br(r, d);
      });
      c.length && o(c, i);
    }
  }), D(this, "validateFields", function(r, a) {
    n.warningUnhooked();
    var o, i;
    Array.isArray(r) || typeof r == "string" || typeof a == "string" ? (o = r, i = a) : i = r;
    var s = !!o, c = s ? o.map(Ct) : [], u = [], d = String(Date.now()), f = /* @__PURE__ */ new Set(), h = i || {}, p = h.recursive, g = h.dirty;
    n.getFieldEntities(true).forEach(function(b) {
      if (s || c.push(b.getNamePath()), !(!b.props.rules || !b.props.rules.length) && !(g && !b.isFieldDirty())) {
        var C = b.getNamePath();
        if (f.add(C.join(d)), !s || br(c, C, p)) {
          var x = b.validateRules(V({ validateMessages: V(V({}, pu), n.validateMessages) }, i));
          u.push(x.then(function() {
            return { name: C, errors: [], warnings: [] };
          }).catch(function(I) {
            var y, E = [], O = [];
            return (y = I.forEach) === null || y === void 0 || y.call(I, function(R) {
              var S = R.rule.warningOnly, $ = R.errors;
              S ? O.push.apply(O, fe($)) : E.push.apply(E, fe($));
            }), E.length ? Promise.reject({ name: C, errors: E, warnings: O }) : { name: C, errors: E, warnings: O };
          }));
        }
      }
    });
    var v = Ip(u);
    n.lastValidatePromise = v, v.catch(function(b) {
      return b;
    }).then(function(b) {
      var C = b.map(function(x) {
        var I = x.name;
        return I;
      });
      n.notifyObservers(n.store, C, { type: "validateFinish" }), n.triggerOnFieldsChange(C, b);
    });
    var m = v.then(function() {
      return n.lastValidatePromise === v ? Promise.resolve(n.getFieldsValue(c)) : Promise.reject([]);
    }).catch(function(b) {
      var C = b.filter(function(x) {
        return x && x.errors.length;
      });
      return Promise.reject({ values: n.getFieldsValue(c), errorFields: C, outOfDate: n.lastValidatePromise !== v });
    });
    m.catch(function(b) {
      return b;
    });
    var w = c.filter(function(b) {
      return f.has(b.join(d));
    });
    return n.triggerOnFieldsChange(w), m;
  }), D(this, "submit", function() {
    n.warningUnhooked(), n.validateFields().then(function(r) {
      var a = n.callbacks.onFinish;
      if (a) try {
        a(r);
      } catch (o) {
        console.error(o);
      }
    }).catch(function(r) {
      var a = n.callbacks.onFinishFailed;
      a && a(r);
    });
  }), this.forceRootUpdate = t;
});
function Ji(e2) {
  var t = l.useRef(), n = l.useState({}), r = te(n, 2), a = r[1];
  if (!t.current) if (e2) t.current = e2;
  else {
    var o = function() {
      a({});
    }, i = new Pp(o);
    t.current = i.getForm();
  }
  return [t.current];
}
var xi = l.createContext({ triggerFormChange: function() {
}, triggerFormFinish: function() {
}, registerForm: function() {
}, unregisterForm: function() {
} }), Cu = function(t) {
  var n = t.validateMessages, r = t.onFormChange, a = t.onFormFinish, o = t.children, i = l.useContext(xi), s = l.useRef({});
  return l.createElement(xi.Provider, { value: V(V({}, i), {}, { validateMessages: V(V({}, i.validateMessages), n), triggerFormChange: function(u, d) {
    r && r(u, { changedFields: d, forms: s.current }), i.triggerFormChange(u, d);
  }, triggerFormFinish: function(u, d) {
    a && a(u, { values: d, forms: s.current }), i.triggerFormFinish(u, d);
  }, registerForm: function(u, d) {
    u && (s.current = V(V({}, s.current), {}, D({}, u, d))), i.registerForm(u, d);
  }, unregisterForm: function(u) {
    var d = V({}, s.current);
    delete d[u], s.current = d, i.unregisterForm(u);
  } }) }, o);
}, Np = ["name", "initialValues", "fields", "form", "preserve", "children", "component", "validateMessages", "validateTrigger", "onValuesChange", "onFieldsChange", "onFinish", "onFinishFailed", "clearOnDestroy"], Mp = function(t, n) {
  var r = t.name, a = t.initialValues, o = t.fields, i = t.form, s = t.preserve, c = t.children, u = t.component, d = u === void 0 ? "form" : u, f = t.validateMessages, h = t.validateTrigger, p = h === void 0 ? "onChange" : h, g = t.onValuesChange, v = t.onFieldsChange, m = t.onFinish, w = t.onFinishFailed, b = t.clearOnDestroy, C = rt(t, Np), x = l.useRef(null), I = l.useContext(xi), y = Ji(i), E = te(y, 1), O = E[0], R = O.getInternalHooks(Yn), S = R.useSubscribe, $ = R.setInitialValues, P = R.setCallbacks, A = R.setValidateMessages, N = R.setPreserve, T = R.destroyForm;
  l.useImperativeHandle(n, function() {
    return V(V({}, O), {}, { nativeElement: x.current });
  }), l.useEffect(function() {
    return I.registerForm(r, O), function() {
      I.unregisterForm(r);
    };
  }, [I, O, r]), A(V(V({}, I.validateMessages), f)), P({ onValuesChange: g, onFieldsChange: function(F) {
    if (I.triggerFormChange(r, F), v) {
      for (var B = arguments.length, G = new Array(B > 1 ? B - 1 : 0), re = 1; re < B; re++) G[re - 1] = arguments[re];
      v.apply(void 0, [F].concat(G));
    }
  }, onFinish: function(F) {
    I.triggerFormFinish(r, F), m && m(F);
  }, onFinishFailed: w }), N(s);
  var M = l.useRef(null);
  $(a, !M.current), M.current || (M.current = true), l.useEffect(function() {
    return function() {
      return T(b);
    };
  }, []);
  var _, j = typeof c == "function";
  if (j) {
    var z = O.getFieldsValue(true);
    _ = c(z, O);
  } else _ = c;
  S(!j);
  var L = l.useRef();
  l.useEffect(function() {
    Ep(L.current || [], o || []) || O.setFields(o || []), L.current = o;
  }, [o, O]);
  var H = l.useMemo(function() {
    return V(V({}, O), {}, { validateTrigger: p });
  }, [O, p]), Y = l.createElement(kr.Provider, { value: null }, l.createElement(rr.Provider, { value: H }, _));
  return d === false ? Y : l.createElement(d, Ie({}, C, { ref: x, onSubmit: function(F) {
    F.preventDefault(), F.stopPropagation(), O.submit();
  }, onReset: function(F) {
    var B;
    F.preventDefault(), O.resetFields(), (B = C.onReset) === null || B === void 0 || B.call(C, F);
  } }), Y);
};
function ml(e2) {
  try {
    return JSON.stringify(e2);
  } catch {
    return Math.random();
  }
}
function Su() {
  for (var e2 = arguments.length, t = new Array(e2), n = 0; n < e2; n++) t[n] = arguments[n];
  var r = t[0], a = t[1], o = a === void 0 ? {} : a, i = Wv(o) ? { form: o } : o, s = i.form, c = l.useState(), u = te(c, 2), d = u[0], f = u[1], h = l.useMemo(function() {
    return ml(d);
  }, [d]), p = l.useRef(h);
  p.current = h;
  var g = l.useContext(rr), v = s || g, m = v && v._init, w = Ct(r), b = l.useRef(w);
  return b.current = w, l.useEffect(function() {
    if (m) {
      var C = v.getFieldsValue, x = v.getInternalHooks, I = x(Yn), y = I.registerWatch, E = function($, P) {
        var A = i.preserve ? P : $;
        return typeof r == "function" ? r(A) : Nn(A, b.current);
      }, O = y(function(S, $) {
        var P = E(S, $), A = ml(P);
        p.current !== A && (p.current = A, f(P));
      }), R = E(C(), C(true));
      return d !== R && f(R), O;
    }
  }, [m]), d;
}
var Fp = l.forwardRef(Mp), Rr = Fp;
Rr.FormProvider = Cu;
Rr.Field = Qi;
Rr.List = yu;
Rr.useForm = Ji;
Rr.useWatch = Su;
const Fn = l.createContext({ labelAlign: "right", vertical: false, itemRef: () => {
} }), xu = l.createContext(null), $u = (e2) => {
  const t = dn(e2, ["prefixCls"]);
  return l.createElement(Cu, Object.assign({}, t));
}, Zi = l.createContext({ prefixCls: "" }), Kt = l.createContext({}), Tp = (e2) => {
  let { children: t, status: n, override: r } = e2;
  const a = l.useContext(Kt), o = l.useMemo(() => {
    const i = Object.assign({}, a);
    return r && delete i.isFormItemInput, n && (delete i.status, delete i.hasFeedback, delete i.feedbackIcon), i;
  }, [n, r, a]);
  return l.createElement(Kt.Provider, { value: o }, t);
}, Eu = l.createContext(void 0), Gr = (e2) => {
  const { space: t, form: n, children: r } = e2;
  if (r == null) return null;
  let a = r;
  return n && (a = ae.createElement(Tp, { override: true, status: true }, a)), t && (a = ae.createElement(Zg, null, a)), a;
}, to = (e2) => {
  const { prefixCls: t, className: n, style: r, size: a, shape: o } = e2, i = Q({ [`${t}-lg`]: a === "large", [`${t}-sm`]: a === "small" }), s = Q({ [`${t}-circle`]: o === "circle", [`${t}-square`]: o === "square", [`${t}-round`]: o === "round" }), c = l.useMemo(() => typeof a == "number" ? { width: a, height: a, lineHeight: `${a}px` } : {}, [a]);
  return l.createElement("span", { className: Q(t, i, s, n), style: Object.assign(Object.assign({}, c), r) });
}, _p = new it("ant-skeleton-loading", { "0%": { backgroundPosition: "100% 50%" }, "100%": { backgroundPosition: "0 50%" } }), no = (e2) => ({ height: e2, lineHeight: ne(e2) }), yr = (e2) => Object.assign({ width: e2 }, no(e2)), jp = (e2) => ({ background: e2.skeletonLoadingBackground, backgroundSize: "400% 100%", animationName: _p, animationDuration: e2.skeletonLoadingMotionDuration, animationTimingFunction: "ease", animationIterationCount: "infinite" }), Lo = (e2, t) => Object.assign({ width: t(e2).mul(5).equal(), minWidth: t(e2).mul(5).equal() }, no(e2)), Dp = (e2) => {
  const { skeletonAvatarCls: t, gradientFromColor: n, controlHeight: r, controlHeightLG: a, controlHeightSM: o } = e2;
  return { [t]: Object.assign({ display: "inline-block", verticalAlign: "top", background: n }, yr(r)), [`${t}${t}-circle`]: { borderRadius: "50%" }, [`${t}${t}-lg`]: Object.assign({}, yr(a)), [`${t}${t}-sm`]: Object.assign({}, yr(o)) };
}, Lp = (e2) => {
  const { controlHeight: t, borderRadiusSM: n, skeletonInputCls: r, controlHeightLG: a, controlHeightSM: o, gradientFromColor: i, calc: s } = e2;
  return { [r]: Object.assign({ display: "inline-block", verticalAlign: "top", background: i, borderRadius: n }, Lo(t, s)), [`${r}-lg`]: Object.assign({}, Lo(a, s)), [`${r}-sm`]: Object.assign({}, Lo(o, s)) };
}, gl = (e2) => Object.assign({ width: e2 }, no(e2)), Bp = (e2) => {
  const { skeletonImageCls: t, imageSizeBase: n, gradientFromColor: r, borderRadiusSM: a, calc: o } = e2;
  return { [t]: Object.assign(Object.assign({ display: "inline-flex", alignItems: "center", justifyContent: "center", verticalAlign: "middle", background: r, borderRadius: a }, gl(o(n).mul(2).equal())), { [`${t}-path`]: { fill: "#bfbfbf" }, [`${t}-svg`]: Object.assign(Object.assign({}, gl(n)), { maxWidth: o(n).mul(4).equal(), maxHeight: o(n).mul(4).equal() }), [`${t}-svg${t}-svg-circle`]: { borderRadius: "50%" } }), [`${t}${t}-circle`]: { borderRadius: "50%" } };
}, Bo = (e2, t, n) => {
  const { skeletonButtonCls: r } = e2;
  return { [`${n}${r}-circle`]: { width: t, minWidth: t, borderRadius: "50%" }, [`${n}${r}-round`]: { borderRadius: t } };
}, zo = (e2, t) => Object.assign({ width: t(e2).mul(2).equal(), minWidth: t(e2).mul(2).equal() }, no(e2)), zp = (e2) => {
  const { borderRadiusSM: t, skeletonButtonCls: n, controlHeight: r, controlHeightLG: a, controlHeightSM: o, gradientFromColor: i, calc: s } = e2;
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ [n]: Object.assign({ display: "inline-block", verticalAlign: "top", background: i, borderRadius: t, width: s(r).mul(2).equal(), minWidth: s(r).mul(2).equal() }, zo(r, s)) }, Bo(e2, r, n)), { [`${n}-lg`]: Object.assign({}, zo(a, s)) }), Bo(e2, a, `${n}-lg`)), { [`${n}-sm`]: Object.assign({}, zo(o, s)) }), Bo(e2, o, `${n}-sm`));
}, Hp = (e2) => {
  const { componentCls: t, skeletonAvatarCls: n, skeletonTitleCls: r, skeletonParagraphCls: a, skeletonButtonCls: o, skeletonInputCls: i, skeletonImageCls: s, controlHeight: c, controlHeightLG: u, controlHeightSM: d, gradientFromColor: f, padding: h, marginSM: p, borderRadius: g, titleHeight: v, blockRadius: m, paragraphLiHeight: w, controlHeightXS: b, paragraphMarginTop: C } = e2;
  return { [t]: { display: "table", width: "100%", [`${t}-header`]: { display: "table-cell", paddingInlineEnd: h, verticalAlign: "top", [n]: Object.assign({ display: "inline-block", verticalAlign: "top", background: f }, yr(c)), [`${n}-circle`]: { borderRadius: "50%" }, [`${n}-lg`]: Object.assign({}, yr(u)), [`${n}-sm`]: Object.assign({}, yr(d)) }, [`${t}-content`]: { display: "table-cell", width: "100%", verticalAlign: "top", [r]: { width: "100%", height: v, background: f, borderRadius: m, [`+ ${a}`]: { marginBlockStart: d } }, [a]: { padding: 0, "> li": { width: "100%", height: w, listStyle: "none", background: f, borderRadius: m, "+ li": { marginBlockStart: b } } }, [`${a}> li:last-child:not(:first-child):not(:nth-child(2))`]: { width: "61%" } }, [`&-round ${t}-content`]: { [`${r}, ${a} > li`]: { borderRadius: g } } }, [`${t}-with-avatar ${t}-content`]: { [r]: { marginBlockStart: p, [`+ ${a}`]: { marginBlockStart: C } } }, [`${t}${t}-element`]: Object.assign(Object.assign(Object.assign(Object.assign({ display: "inline-block", width: "auto" }, zp(e2)), Dp(e2)), Lp(e2)), Bp(e2)), [`${t}${t}-block`]: { width: "100%", [o]: { width: "100%" }, [i]: { width: "100%" } }, [`${t}${t}-active`]: { [`
        ${r},
        ${a} > li,
        ${n},
        ${o},
        ${i},
        ${s}
      `]: Object.assign({}, jp(e2)) } };
}, Vp = (e2) => {
  const { colorFillContent: t, colorFill: n } = e2, r = t, a = n;
  return { color: r, colorGradientEnd: a, gradientFromColor: r, gradientToColor: a, titleHeight: e2.controlHeight / 2, blockRadius: e2.borderRadiusSM, paragraphMarginTop: e2.marginLG + e2.marginXXS, paragraphLiHeight: e2.controlHeight / 2 };
}, Or = Lt("Skeleton", (e2) => {
  const { componentCls: t, calc: n } = e2, r = mt(e2, { skeletonAvatarCls: `${t}-avatar`, skeletonTitleCls: `${t}-title`, skeletonParagraphCls: `${t}-paragraph`, skeletonButtonCls: `${t}-button`, skeletonInputCls: `${t}-input`, skeletonImageCls: `${t}-image`, imageSizeBase: n(e2.controlHeight).mul(1.5).equal(), borderRadius: 100, skeletonLoadingBackground: `linear-gradient(90deg, ${e2.gradientFromColor} 25%, ${e2.gradientToColor} 37%, ${e2.gradientFromColor} 63%)`, skeletonLoadingMotionDuration: "1.4s" });
  return [Hp(r)];
}, Vp, { deprecatedTokens: [["color", "gradientFromColor"], ["colorGradientEnd", "gradientToColor"]] }), Wp = (e2) => {
  const { prefixCls: t, className: n, rootClassName: r, active: a, shape: o = "circle", size: i = "default" } = e2, { getPrefixCls: s } = l.useContext(ft), c = s("skeleton", t), [u, d, f] = Or(c), h = dn(e2, ["prefixCls", "className"]), p = Q(c, `${c}-element`, { [`${c}-active`]: a }, n, r, d, f);
  return u(l.createElement("div", { className: p }, l.createElement(to, Object.assign({ prefixCls: `${c}-avatar`, shape: o, size: i }, h))));
}, qp = (e2) => {
  const { prefixCls: t, className: n, rootClassName: r, active: a, block: o = false, size: i = "default" } = e2, { getPrefixCls: s } = l.useContext(ft), c = s("skeleton", t), [u, d, f] = Or(c), h = dn(e2, ["prefixCls"]), p = Q(c, `${c}-element`, { [`${c}-active`]: a, [`${c}-block`]: o }, n, r, d, f);
  return u(l.createElement("div", { className: p }, l.createElement(to, Object.assign({ prefixCls: `${c}-button`, size: i }, h))));
}, Up = "M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z", kp = (e2) => {
  const { prefixCls: t, className: n, rootClassName: r, style: a, active: o } = e2, { getPrefixCls: i } = l.useContext(ft), s = i("skeleton", t), [c, u, d] = Or(s), f = Q(s, `${s}-element`, { [`${s}-active`]: o }, n, r, u, d);
  return c(l.createElement("div", { className: f }, l.createElement("div", { className: Q(`${s}-image`, n), style: a }, l.createElement("svg", { viewBox: "0 0 1098 1024", xmlns: "http://www.w3.org/2000/svg", className: `${s}-image-svg` }, l.createElement("title", null, "Image placeholder"), l.createElement("path", { d: Up, className: `${s}-image-path` })))));
}, Gp = (e2) => {
  const { prefixCls: t, className: n, rootClassName: r, active: a, block: o, size: i = "default" } = e2, { getPrefixCls: s } = l.useContext(ft), c = s("skeleton", t), [u, d, f] = Or(c), h = dn(e2, ["prefixCls"]), p = Q(c, `${c}-element`, { [`${c}-active`]: a, [`${c}-block`]: o }, n, r, d, f);
  return u(l.createElement("div", { className: p }, l.createElement(to, Object.assign({ prefixCls: `${c}-input`, size: i }, h))));
}, Kp = (e2) => {
  const { prefixCls: t, className: n, rootClassName: r, style: a, active: o, children: i } = e2, { getPrefixCls: s } = l.useContext(ft), c = s("skeleton", t), [u, d, f] = Or(c), h = Q(c, `${c}-element`, { [`${c}-active`]: o }, d, n, r, f);
  return u(l.createElement("div", { className: h }, l.createElement("div", { className: Q(`${c}-image`, n), style: a }, i)));
}, Xp = (e2, t) => {
  const { width: n, rows: r = 2 } = t;
  if (Array.isArray(n)) return n[e2];
  if (r - 1 === e2) return n;
}, Yp = (e2) => {
  const { prefixCls: t, className: n, style: r, rows: a = 0 } = e2, o = Array.from({ length: a }).map((i, s) => l.createElement("li", { key: s, style: { width: Xp(s, e2) } }));
  return l.createElement("ul", { className: Q(t, n), style: r }, o);
}, Qp = (e2) => {
  let { prefixCls: t, className: n, width: r, style: a } = e2;
  return l.createElement("h3", { className: Q(t, n), style: Object.assign({ width: r }, a) });
};
function Ho(e2) {
  return e2 && typeof e2 == "object" ? e2 : {};
}
function Jp(e2, t) {
  return e2 && !t ? { size: "large", shape: "square" } : { size: "large", shape: "circle" };
}
function Zp(e2, t) {
  return !e2 && t ? { width: "38%" } : e2 && t ? { width: "50%" } : {};
}
function eb(e2, t) {
  const n = {};
  return (!e2 || !t) && (n.width = "61%"), !e2 && t ? n.rows = 3 : n.rows = 2, n;
}
const ta = (e2) => {
  const { prefixCls: t, loading: n, className: r, rootClassName: a, style: o, children: i, avatar: s = false, title: c = true, paragraph: u = true, active: d, round: f } = e2, { getPrefixCls: h, direction: p, className: g, style: v } = _n("skeleton"), m = h("skeleton", t), [w, b, C] = Or(m);
  if (n || !("loading" in e2)) {
    const x = !!s, I = !!c, y = !!u;
    let E;
    if (x) {
      const S = Object.assign(Object.assign({ prefixCls: `${m}-avatar` }, Jp(I, y)), Ho(s));
      E = l.createElement("div", { className: `${m}-header` }, l.createElement(to, Object.assign({}, S)));
    }
    let O;
    if (I || y) {
      let S;
      if (I) {
        const P = Object.assign(Object.assign({ prefixCls: `${m}-title` }, Zp(x, y)), Ho(c));
        S = l.createElement(Qp, Object.assign({}, P));
      }
      let $;
      if (y) {
        const P = Object.assign(Object.assign({ prefixCls: `${m}-paragraph` }, eb(x, I)), Ho(u));
        $ = l.createElement(Yp, Object.assign({}, P));
      }
      O = l.createElement("div", { className: `${m}-content` }, S, $);
    }
    const R = Q(m, { [`${m}-with-avatar`]: x, [`${m}-active`]: d, [`${m}-rtl`]: p === "rtl", [`${m}-round`]: f }, g, r, a, b, C);
    return w(l.createElement("div", { className: R, style: Object.assign(Object.assign({}, v), o) }, E, O));
  }
  return i ?? null;
};
ta.Button = qp;
ta.Avatar = Wp;
ta.Input = Gp;
ta.Image = kp;
ta.Node = Kp;
const tb = (e2) => {
  const { componentCls: t } = e2;
  return { [t]: { display: "flex", flexFlow: "row wrap", minWidth: 0, "&::before, &::after": { display: "flex" }, "&-no-wrap": { flexWrap: "nowrap" }, "&-start": { justifyContent: "flex-start" }, "&-center": { justifyContent: "center" }, "&-end": { justifyContent: "flex-end" }, "&-space-between": { justifyContent: "space-between" }, "&-space-around": { justifyContent: "space-around" }, "&-space-evenly": { justifyContent: "space-evenly" }, "&-top": { alignItems: "flex-start" }, "&-middle": { alignItems: "center" }, "&-bottom": { alignItems: "flex-end" } } };
}, nb = (e2) => {
  const { componentCls: t } = e2;
  return { [t]: { position: "relative", maxWidth: "100%", minHeight: 1 } };
}, rb = (e2, t) => {
  const { prefixCls: n, componentCls: r, gridColumns: a } = e2, o = {};
  for (let i = a; i >= 0; i--) i === 0 ? (o[`${r}${t}-${i}`] = { display: "none" }, o[`${r}-push-${i}`] = { insetInlineStart: "auto" }, o[`${r}-pull-${i}`] = { insetInlineEnd: "auto" }, o[`${r}${t}-push-${i}`] = { insetInlineStart: "auto" }, o[`${r}${t}-pull-${i}`] = { insetInlineEnd: "auto" }, o[`${r}${t}-offset-${i}`] = { marginInlineStart: 0 }, o[`${r}${t}-order-${i}`] = { order: 0 }) : (o[`${r}${t}-${i}`] = [{ "--ant-display": "block", display: "block" }, { display: "var(--ant-display)", flex: `0 0 ${i / a * 100}%`, maxWidth: `${i / a * 100}%` }], o[`${r}${t}-push-${i}`] = { insetInlineStart: `${i / a * 100}%` }, o[`${r}${t}-pull-${i}`] = { insetInlineEnd: `${i / a * 100}%` }, o[`${r}${t}-offset-${i}`] = { marginInlineStart: `${i / a * 100}%` }, o[`${r}${t}-order-${i}`] = { order: i });
  return o[`${r}${t}-flex`] = { flex: `var(--${n}${t}-flex)` }, o;
}, $i = (e2, t) => rb(e2, t), ab = (e2, t, n) => ({ [`@media (min-width: ${ne(t)})`]: Object.assign({}, $i(e2, n)) }), ob = () => ({}), ib = () => ({}), sb = Lt("Grid", tb, ob), lb = (e2) => ({ xs: e2.screenXSMin, sm: e2.screenSMMin, md: e2.screenMDMin, lg: e2.screenLGMin, xl: e2.screenXLMin, xxl: e2.screenXXLMin }), cb = Lt("Grid", (e2) => {
  const t = mt(e2, { gridColumns: 24 }), n = lb(t);
  return delete n.xs, [nb(t), $i(t, ""), $i(t, "-xs"), Object.keys(n).map((r) => ab(t, n[r], `-${r}`)).reduce((r, a) => Object.assign(Object.assign({}, r), a), {})];
}, ib), G$ = ae.createContext({});
function ub(e2) {
  return (t) => l.createElement(Nc, { theme: { token: { motion: false, zIndexPopupBase: 0 } } }, l.createElement(e2, Object.assign({}, t)));
}
const db = (e2, t, n, r, a) => ub((i) => {
  const { prefixCls: s, style: c } = i, u = l.useRef(null), [d, f] = l.useState(0), [h, p] = l.useState(0), [g, v] = yn(false, { value: i.open }), { getPrefixCls: m } = l.useContext(ft), w = m(r || "select", s);
  l.useEffect(() => {
    if (v(true), typeof ResizeObserver < "u") {
      const x = new ResizeObserver((y) => {
        const E = y[0].target;
        f(E.offsetHeight + 8), p(E.offsetWidth);
      }), I = setInterval(() => {
        var y;
        const E = a ? `.${a(w)}` : `.${w}-dropdown`, O = (y = u.current) === null || y === void 0 ? void 0 : y.querySelector(E);
        O && (clearInterval(I), x.observe(O));
      }, 10);
      return () => {
        clearInterval(I), x.disconnect();
      };
    }
  }, []);
  let b = Object.assign(Object.assign({}, i), { style: Object.assign(Object.assign({}, c), { margin: 0 }), open: g, visible: g, getPopupContainer: () => u.current });
  t && Object.assign(b, { [t]: { overflow: { adjustX: false, adjustY: false } } });
  const C = { paddingBottom: d, position: "relative", minWidth: h };
  return l.createElement("div", { ref: u, style: C }, l.createElement(e2, Object.assign({}, b)));
}), es = function() {
  if (typeof navigator > "u" || typeof window > "u") return false;
  var e2 = navigator.userAgent || navigator.vendor || window.opera;
  return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e2) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(e2 == null ? void 0 : e2.substr(0, 4));
};
var ro = function(t) {
  var n = t.className, r = t.customizeIcon, a = t.customizeIconProps, o = t.children, i = t.onMouseDown, s = t.onClick, c = typeof r == "function" ? r(a) : r;
  return l.createElement("span", { className: n, onMouseDown: function(d) {
    d.preventDefault(), i == null ? void 0 : i(d);
  }, style: { userSelect: "none", WebkitUserSelect: "none" }, unselectable: "on", onClick: s, "aria-hidden": true }, c !== void 0 ? c : l.createElement("span", { className: Q(n.split(/\s+/).map(function(u) {
    return "".concat(u, "-icon");
  })) }, o));
}, fb = function(t, n, r, a, o) {
  var i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : false, s = arguments.length > 6 ? arguments[6] : void 0, c = arguments.length > 7 ? arguments[7] : void 0, u = ae.useMemo(function() {
    if (et(a) === "object") return a.clearIcon;
    if (o) return o;
  }, [a, o]), d = ae.useMemo(function() {
    return !!(!i && a && (r.length || s) && !(c === "combobox" && s === ""));
  }, [a, i, r.length, s, c]);
  return { allowClear: d, clearIcon: ae.createElement(ro, { className: "".concat(t, "-clear"), onMouseDown: n, customizeIcon: u }, "\xD7") };
}, Ru = l.createContext(null);
function mb() {
  return l.useContext(Ru);
}
function gb() {
  var e2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 10, t = l.useState(false), n = te(t, 2), r = n[0], a = n[1], o = l.useRef(null), i = function() {
    window.clearTimeout(o.current);
  };
  l.useEffect(function() {
    return i;
  }, []);
  var s = function(u, d) {
    i(), o.current = window.setTimeout(function() {
      a(u), d && d();
    }, e2);
  };
  return [r, s, i];
}
function Ou() {
  var e2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 250, t = l.useRef(null), n = l.useRef(null);
  l.useEffect(function() {
    return function() {
      window.clearTimeout(n.current);
    };
  }, []);
  function r(a) {
    (a || t.current === null) && (t.current = a), window.clearTimeout(n.current), n.current = window.setTimeout(function() {
      t.current = null;
    }, e2);
  }
  return [function() {
    return t.current;
  }, r];
}
function hb(e2, t, n, r) {
  var a = l.useRef(null);
  a.current = { open: t, triggerOpen: n, customizedTrigger: r }, l.useEffect(function() {
    function o(i) {
      var s;
      if (!((s = a.current) !== null && s !== void 0 && s.customizedTrigger)) {
        var c = i.target;
        c.shadowRoot && i.composed && (c = i.composedPath()[0] || c), a.current.open && e2().filter(function(u) {
          return u;
        }).every(function(u) {
          return !u.contains(c) && u !== c;
        }) && a.current.triggerOpen(false);
      }
    }
    return window.addEventListener("mousedown", o), function() {
      return window.removeEventListener("mousedown", o);
    };
  }, []);
}
function vb(e2) {
  return e2 && ![He.ESC, He.SHIFT, He.BACKSPACE, He.TAB, He.WIN_KEY, He.ALT, He.META, He.WIN_KEY_RIGHT, He.CTRL, He.SEMICOLON, He.EQUALS, He.CAPS_LOCK, He.CONTEXT_MENU, He.F1, He.F2, He.F3, He.F4, He.F5, He.F6, He.F7, He.F8, He.F9, He.F10, He.F11, He.F12].includes(e2);
}
var pb = ["prefixCls", "invalidate", "item", "renderItem", "responsive", "responsiveDisabled", "registerSize", "itemKey", "className", "style", "children", "display", "order", "component"], gr = void 0;
function bb(e2, t) {
  var n = e2.prefixCls, r = e2.invalidate, a = e2.item, o = e2.renderItem, i = e2.responsive, s = e2.responsiveDisabled, c = e2.registerSize, u = e2.itemKey, d = e2.className, f = e2.style, h = e2.children, p = e2.display, g = e2.order, v = e2.component, m = v === void 0 ? "div" : v, w = rt(e2, pb), b = i && !p;
  function C(O) {
    c(u, O);
  }
  l.useEffect(function() {
    return function() {
      C(null);
    };
  }, []);
  var x = o && a !== gr ? o(a, { index: g }) : h, I;
  r || (I = { opacity: b ? 0 : 1, height: b ? 0 : gr, overflowY: b ? "hidden" : gr, order: i ? g : gr, pointerEvents: b ? "none" : gr, position: b ? "absolute" : gr });
  var y = {};
  b && (y["aria-hidden"] = true);
  var E = l.createElement(m, Ie({ className: Q(!r && n, d), style: V(V({}, I), f) }, y, w, { ref: t }), x);
  return i && (E = l.createElement(Gn, { onResize: function(R) {
    var S = R.offsetWidth;
    C(S);
  }, disabled: s }, E)), E;
}
var Hr = l.forwardRef(bb);
Hr.displayName = "Item";
function yb(e2) {
  if (typeof MessageChannel > "u") pt(e2);
  else {
    var t = new MessageChannel();
    t.port1.onmessage = function() {
      return e2();
    }, t.port2.postMessage(void 0);
  }
}
function wb() {
  var e2 = l.useRef(null), t = function(r) {
    e2.current || (e2.current = [], yb(function() {
      Wr.unstable_batchedUpdates(function() {
        e2.current.forEach(function(a) {
          a();
        }), e2.current = null;
      });
    })), e2.current.push(r);
  };
  return t;
}
function Fr(e2, t) {
  var n = l.useState(t), r = te(n, 2), a = r[0], o = r[1], i = jt(function(s) {
    e2(function() {
      o(s);
    });
  });
  return [a, i];
}
var Ta = ae.createContext(null), Cb = ["component"], Sb = ["className"], xb = ["className"], $b = function(t, n) {
  var r = l.useContext(Ta);
  if (!r) {
    var a = t.component, o = a === void 0 ? "div" : a, i = rt(t, Cb);
    return l.createElement(o, Ie({}, i, { ref: n }));
  }
  var s = r.className, c = rt(r, Sb), u = t.className, d = rt(t, xb);
  return l.createElement(Ta.Provider, { value: null }, l.createElement(Hr, Ie({ ref: n, className: Q(s, u) }, c, d)));
}, Iu = l.forwardRef($b);
Iu.displayName = "RawItem";
var Eb = ["prefixCls", "data", "renderItem", "renderRawItem", "itemKey", "itemWidth", "ssr", "style", "className", "maxCount", "renderRest", "renderRawRest", "suffix", "component", "itemComponent", "onVisibleChange"], Au = "responsive", Pu = "invalidate";
function Rb(e2) {
  return "+ ".concat(e2.length, " ...");
}
function Ob(e2, t) {
  var n = e2.prefixCls, r = n === void 0 ? "rc-overflow" : n, a = e2.data, o = a === void 0 ? [] : a, i = e2.renderItem, s = e2.renderRawItem, c = e2.itemKey, u = e2.itemWidth, d = u === void 0 ? 10 : u, f = e2.ssr, h = e2.style, p = e2.className, g = e2.maxCount, v = e2.renderRest, m = e2.renderRawRest, w = e2.suffix, b = e2.component, C = b === void 0 ? "div" : b, x = e2.itemComponent, I = e2.onVisibleChange, y = rt(e2, Eb), E = f === "full", O = wb(), R = Fr(O, null), S = te(R, 2), $ = S[0], P = S[1], A = $ || 0, N = Fr(O, /* @__PURE__ */ new Map()), T = te(N, 2), M = T[0], _ = T[1], j = Fr(O, 0), z = te(j, 2), L = z[0], H = z[1], Y = Fr(O, 0), k = te(Y, 2), F = k[0], B = k[1], G = Fr(O, 0), re = te(G, 2), W = re[0], J = re[1], oe = l.useState(null), K = te(oe, 2), q = K[0], Z = K[1], ie = l.useState(null), X = te(ie, 2), ee = X[0], le = X[1], se = l.useMemo(function() {
    return ee === null && E ? Number.MAX_SAFE_INTEGER : ee || 0;
  }, [ee, $]), de = l.useState(false), Oe = te(de, 2), xe = Oe[0], We = Oe[1], ce = "".concat(r, "-item"), ue = Math.max(L, F), pe = g === Au, $e = o.length && pe, Fe = g === Pu, Le = $e || typeof g == "number" && o.length > g, je = l.useMemo(function() {
    var Se = o;
    return $e ? $ === null && E ? Se = o : Se = o.slice(0, Math.min(o.length, A / d)) : typeof g == "number" && (Se = o.slice(0, g)), Se;
  }, [o, d, $, g, $e]), Ee = l.useMemo(function() {
    return $e ? o.slice(se + 1) : o.slice(je.length);
  }, [o, je, $e, se]), Be = l.useCallback(function(Se, he) {
    var ve;
    return typeof c == "function" ? c(Se) : (ve = c && (Se == null ? void 0 : Se[c])) !== null && ve !== void 0 ? ve : he;
  }, [c]), Ke = l.useCallback(i || function(Se) {
    return Se;
  }, [i]);
  function Me(Se, he, ve) {
    ee === Se && (he === void 0 || he === q) || (le(Se), ve || (We(Se < o.length - 1), I == null ? void 0 : I(Se)), he !== void 0 && Z(he));
  }
  function be(Se, he) {
    P(he.clientWidth);
  }
  function Ae(Se, he) {
    _(function(ve) {
      var at = new Map(ve);
      return he === null ? at.delete(Se) : at.set(Se, he), at;
    });
  }
  function Je(Se, he) {
    B(he), H(F);
  }
  function Qe(Se, he) {
    J(he);
  }
  function st(Se) {
    return M.get(Be(je[Se], Se));
  }
  ut(function() {
    if (A && typeof ue == "number" && je) {
      var Se = W, he = je.length, ve = he - 1;
      if (!he) {
        Me(0, null);
        return;
      }
      for (var at = 0; at < he; at += 1) {
        var gt = st(at);
        if (E && (gt = gt || 0), gt === void 0) {
          Me(at - 1, void 0, true);
          break;
        }
        if (Se += gt, ve === 0 && Se <= A || at === ve - 1 && Se + st(ve) <= A) {
          Me(ve, null);
          break;
        } else if (Se + ue > A) {
          Me(at - 1, Se - gt - W + F);
          break;
        }
      }
      w && st(0) + W > A && Z(null);
    }
  }, [A, M, F, W, Be, je]);
  var ot = xe && !!Ee.length, Bt = {};
  q !== null && $e && (Bt = { position: "absolute", left: q, top: 0 });
  var It = { prefixCls: ce, responsive: $e, component: x, invalidate: Fe }, Te = s ? function(Se, he) {
    var ve = Be(Se, he);
    return l.createElement(Ta.Provider, { key: ve, value: V(V({}, It), {}, { order: he, item: Se, itemKey: ve, registerSize: Ae, display: he <= se }) }, s(Se, he));
  } : function(Se, he) {
    var ve = Be(Se, he);
    return l.createElement(Hr, Ie({}, It, { order: he, key: ve, item: Se, renderItem: Ke, itemKey: ve, registerSize: Ae, display: he <= se }));
  }, ge = { order: ot ? se : Number.MAX_SAFE_INTEGER, className: "".concat(ce, "-rest"), registerSize: Je, display: ot }, De = v || Rb, _e4 = m ? l.createElement(Ta.Provider, { value: V(V({}, It), ge) }, m(Ee)) : l.createElement(Hr, Ie({}, It, ge), typeof De == "function" ? De(Ee) : De), qe = l.createElement(C, Ie({ className: Q(!Fe && r, p), style: h, ref: t }, y), je.map(Te), Le ? _e4 : null, w && l.createElement(Hr, Ie({}, It, { responsive: pe, responsiveDisabled: !$e, order: se, className: "".concat(ce, "-suffix"), registerSize: Qe, display: true, style: Bt }), w));
  return pe ? l.createElement(Gn, { onResize: be, disabled: !$e }, qe) : qe;
}
var na = l.forwardRef(Ob);
na.displayName = "Overflow";
na.Item = Iu;
na.RESPONSIVE = Au;
na.INVALIDATE = Pu;
var Ib = function(t, n) {
  var r, a = t.prefixCls, o = t.id, i = t.inputElement, s = t.disabled, c = t.tabIndex, u = t.autoFocus, d = t.autoComplete, f = t.editable, h = t.activeDescendantId, p = t.value, g = t.maxLength, v = t.onKeyDown, m = t.onMouseDown, w = t.onChange, b = t.onPaste, C = t.onCompositionStart, x = t.onCompositionEnd, I = t.onBlur, y = t.open, E = t.attrs, O = i || l.createElement("input", null), R = O, S = R.ref, $ = R.props, P = $.onKeyDown, A = $.onChange, N = $.onMouseDown, T = $.onCompositionStart, M = $.onCompositionEnd, _ = $.onBlur, j = $.style;
  return Of(!("maxLength" in O.props)), O = l.cloneElement(O, V(V(V({ type: "search" }, $), {}, { id: o, ref: Tn(n, S), disabled: s, tabIndex: c, autoComplete: d || "off", autoFocus: u, className: Q("".concat(a, "-selection-search-input"), (r = O) === null || r === void 0 || (r = r.props) === null || r === void 0 ? void 0 : r.className), role: "combobox", "aria-expanded": y || false, "aria-haspopup": "listbox", "aria-owns": "".concat(o, "_list"), "aria-autocomplete": "list", "aria-controls": "".concat(o, "_list"), "aria-activedescendant": y ? h : void 0 }, E), {}, { value: f ? p : "", maxLength: g, readOnly: !f, unselectable: f ? null : "on", style: V(V({}, j), {}, { opacity: f ? null : 0 }), onKeyDown: function(L) {
    v(L), P && P(L);
  }, onMouseDown: function(L) {
    m(L), N && N(L);
  }, onChange: function(L) {
    w(L), A && A(L);
  }, onCompositionStart: function(L) {
    C(L), T && T(L);
  }, onCompositionEnd: function(L) {
    x(L), M && M(L);
  }, onPaste: b, onBlur: function(L) {
    I(L), _ && _(L);
  } })), O;
}, Nu = l.forwardRef(Ib);
function Mu(e2) {
  return Array.isArray(e2) ? e2 : e2 !== void 0 ? [e2] : [];
}
var Ab = typeof window < "u" && window.document && window.document.documentElement, Pb = Ab;
function Nb(e2) {
  return e2 != null;
}
function Mb(e2) {
  return !e2 && e2 !== 0;
}
function hl(e2) {
  return ["string", "number"].includes(et(e2));
}
function Fu(e2) {
  var t = void 0;
  return e2 && (hl(e2.title) ? t = e2.title.toString() : hl(e2.label) && (t = e2.label.toString())), t;
}
function Fb(e2, t) {
  Pb ? l.useLayoutEffect(e2, t) : l.useEffect(e2, t);
}
function Tb(e2) {
  var t;
  return (t = e2.key) !== null && t !== void 0 ? t : e2.value;
}
var vl = function(t) {
  t.preventDefault(), t.stopPropagation();
}, _b = function(t) {
  var n = t.id, r = t.prefixCls, a = t.values, o = t.open, i = t.searchValue, s = t.autoClearSearchValue, c = t.inputRef, u = t.placeholder, d = t.disabled, f = t.mode, h = t.showSearch, p = t.autoFocus, g = t.autoComplete, v = t.activeDescendantId, m = t.tabIndex, w = t.removeIcon, b = t.maxTagCount, C = t.maxTagTextLength, x = t.maxTagPlaceholder, I = x === void 0 ? function(ie) {
    return "+ ".concat(ie.length, " ...");
  } : x, y = t.tagRender, E = t.onToggleOpen, O = t.onRemove, R = t.onInputChange, S = t.onInputPaste, $ = t.onInputKeyDown, P = t.onInputMouseDown, A = t.onInputCompositionStart, N = t.onInputCompositionEnd, T = t.onInputBlur, M = l.useRef(null), _ = l.useState(0), j = te(_, 2), z = j[0], L = j[1], H = l.useState(false), Y = te(H, 2), k = Y[0], F = Y[1], B = "".concat(r, "-selection"), G = o || f === "multiple" && s === false || f === "tags" ? i : "", re = f === "tags" || f === "multiple" && s === false || h && (o || k);
  Fb(function() {
    L(M.current.scrollWidth);
  }, [G]);
  var W = function(X, ee, le, se, de) {
    return l.createElement("span", { title: Fu(X), className: Q("".concat(B, "-item"), D({}, "".concat(B, "-item-disabled"), le)) }, l.createElement("span", { className: "".concat(B, "-item-content") }, ee), se && l.createElement(ro, { className: "".concat(B, "-item-remove"), onMouseDown: vl, onClick: de, customizeIcon: w }, "\xD7"));
  }, J = function(X, ee, le, se, de, Oe) {
    var xe = function(ce) {
      vl(ce), E(!o);
    };
    return l.createElement("span", { onMouseDown: xe }, y({ label: ee, value: X, disabled: le, closable: se, onClose: de, isMaxTag: !!Oe }));
  }, oe = function(X) {
    var ee = X.disabled, le = X.label, se = X.value, de = !d && !ee, Oe = le;
    if (typeof C == "number" && (typeof le == "string" || typeof le == "number")) {
      var xe = String(Oe);
      xe.length > C && (Oe = "".concat(xe.slice(0, C), "..."));
    }
    var We = function(ue) {
      ue && ue.stopPropagation(), O(X);
    };
    return typeof y == "function" ? J(se, Oe, ee, de, We) : W(X, Oe, ee, de, We);
  }, K = function(X) {
    if (!a.length) return null;
    var ee = typeof I == "function" ? I(X) : I;
    return typeof y == "function" ? J(void 0, ee, false, false, void 0, true) : W({ title: ee }, ee, false);
  }, q = l.createElement("div", { className: "".concat(B, "-search"), style: { width: z }, onFocus: function() {
    F(true);
  }, onBlur: function() {
    F(false);
  } }, l.createElement(Nu, { ref: c, open: o, prefixCls: r, id: n, inputElement: null, disabled: d, autoFocus: p, autoComplete: g, editable: re, activeDescendantId: v, value: G, onKeyDown: $, onMouseDown: P, onChange: R, onPaste: S, onCompositionStart: A, onCompositionEnd: N, onBlur: T, tabIndex: m, attrs: nr(t, true) }), l.createElement("span", { ref: M, className: "".concat(B, "-search-mirror"), "aria-hidden": true }, G, "\xA0")), Z = l.createElement(na, { prefixCls: "".concat(B, "-overflow"), data: a, renderItem: oe, renderRest: K, suffix: q, itemKey: Tb, maxCount: b });
  return l.createElement("span", { className: "".concat(B, "-wrap") }, Z, !a.length && !G && l.createElement("span", { className: "".concat(B, "-placeholder") }, u));
}, jb = function(t) {
  var n = t.inputElement, r = t.prefixCls, a = t.id, o = t.inputRef, i = t.disabled, s = t.autoFocus, c = t.autoComplete, u = t.activeDescendantId, d = t.mode, f = t.open, h = t.values, p = t.placeholder, g = t.tabIndex, v = t.showSearch, m = t.searchValue, w = t.activeValue, b = t.maxLength, C = t.onInputKeyDown, x = t.onInputMouseDown, I = t.onInputChange, y = t.onInputPaste, E = t.onInputCompositionStart, O = t.onInputCompositionEnd, R = t.onInputBlur, S = t.title, $ = l.useState(false), P = te($, 2), A = P[0], N = P[1], T = d === "combobox", M = T || v, _ = h[0], j = m || "";
  T && w && !A && (j = w), l.useEffect(function() {
    T && N(false);
  }, [T, w]);
  var z = d !== "combobox" && !f && !v ? false : !!j, L = S === void 0 ? Fu(_) : S, H = l.useMemo(function() {
    return _ ? null : l.createElement("span", { className: "".concat(r, "-selection-placeholder"), style: z ? { visibility: "hidden" } : void 0 }, p);
  }, [_, z, p, r]);
  return l.createElement("span", { className: "".concat(r, "-selection-wrap") }, l.createElement("span", { className: "".concat(r, "-selection-search") }, l.createElement(Nu, { ref: o, prefixCls: r, id: a, open: f, inputElement: n, disabled: i, autoFocus: s, autoComplete: c, editable: M, activeDescendantId: u, value: j, onKeyDown: C, onMouseDown: x, onChange: function(k) {
    N(true), I(k);
  }, onPaste: y, onCompositionStart: E, onCompositionEnd: O, onBlur: R, tabIndex: g, attrs: nr(t, true), maxLength: T ? b : void 0 })), !T && _ ? l.createElement("span", { className: "".concat(r, "-selection-item"), title: L, style: z ? { visibility: "hidden" } : void 0 }, _.label) : null, H);
}, Db = function(t, n) {
  var r = l.useRef(null), a = l.useRef(false), o = t.prefixCls, i = t.open, s = t.mode, c = t.showSearch, u = t.tokenWithEnter, d = t.disabled, f = t.prefix, h = t.autoClearSearchValue, p = t.onSearch, g = t.onSearchSubmit, v = t.onToggleOpen, m = t.onInputKeyDown, w = t.onInputBlur, b = t.domRef;
  l.useImperativeHandle(n, function() {
    return { focus: function(L) {
      r.current.focus(L);
    }, blur: function() {
      r.current.blur();
    } };
  });
  var C = Ou(0), x = te(C, 2), I = x[0], y = x[1], E = function(L) {
    var H = L.which, Y = r.current instanceof HTMLTextAreaElement;
    !Y && i && (H === He.UP || H === He.DOWN) && L.preventDefault(), m && m(L), H === He.ENTER && s === "tags" && !a.current && !i && (g == null ? void 0 : g(L.target.value)), !(Y && !i && ~[He.UP, He.DOWN, He.LEFT, He.RIGHT].indexOf(H)) && vb(H) && v(true);
  }, O = function() {
    y(true);
  }, R = l.useRef(null), S = function(L) {
    p(L, true, a.current) !== false && v(true);
  }, $ = function() {
    a.current = true;
  }, P = function(L) {
    a.current = false, s !== "combobox" && S(L.target.value);
  }, A = function(L) {
    var H = L.target.value;
    if (u && R.current && /[\r\n]/.test(R.current)) {
      var Y = R.current.replace(/[\r\n]+$/, "").replace(/\r\n/g, " ").replace(/[\r\n]/g, " ");
      H = H.replace(Y, R.current);
    }
    R.current = null, S(H);
  }, N = function(L) {
    var H = L.clipboardData, Y = H == null ? void 0 : H.getData("text");
    R.current = Y || "";
  }, T = function(L) {
    var H = L.target;
    if (H !== r.current) {
      var Y = document.body.style.msTouchAction !== void 0;
      Y ? setTimeout(function() {
        r.current.focus();
      }) : r.current.focus();
    }
  }, M = function(L) {
    var H = I();
    L.target !== r.current && !H && !(s === "combobox" && d) && L.preventDefault(), (s !== "combobox" && (!c || !H) || !i) && (i && h !== false && p("", true, false), v());
  }, _ = { inputRef: r, onInputKeyDown: E, onInputMouseDown: O, onInputChange: A, onInputPaste: N, onInputCompositionStart: $, onInputCompositionEnd: P, onInputBlur: w }, j = s === "multiple" || s === "tags" ? l.createElement(_b, Ie({}, t, _)) : l.createElement(jb, Ie({}, t, _));
  return l.createElement("div", { ref: b, className: "".concat(o, "-selector"), onClick: T, onMouseDown: M }, f && l.createElement("div", { className: "".concat(o, "-prefix") }, f), j);
}, Lb = l.forwardRef(Db);
function Bb(e2) {
  var t = e2.prefixCls, n = e2.align, r = e2.arrow, a = e2.arrowPos, o = r || {}, i = o.className, s = o.content, c = a.x, u = c === void 0 ? 0 : c, d = a.y, f = d === void 0 ? 0 : d, h = l.useRef();
  if (!n || !n.points) return null;
  var p = { position: "absolute" };
  if (n.autoArrow !== false) {
    var g = n.points[0], v = n.points[1], m = g[0], w = g[1], b = v[0], C = v[1];
    m === b || !["t", "b"].includes(m) ? p.top = f : m === "t" ? p.top = 0 : p.bottom = 0, w === C || !["l", "r"].includes(w) ? p.left = u : w === "l" ? p.left = 0 : p.right = 0;
  }
  return l.createElement("div", { ref: h, className: Q("".concat(t, "-arrow"), i), style: p }, s);
}
function zb(e2) {
  var t = e2.prefixCls, n = e2.open, r = e2.zIndex, a = e2.mask, o = e2.motion;
  return a ? l.createElement(xr, Ie({}, o, { motionAppear: true, visible: n, removeOnLeave: true }), function(i) {
    var s = i.className;
    return l.createElement("div", { style: { zIndex: r }, className: Q("".concat(t, "-mask"), s) });
  }) : null;
}
var Hb = l.memo(function(e2) {
  var t = e2.children;
  return t;
}, function(e2, t) {
  return t.cache;
}), Vb = l.forwardRef(function(e2, t) {
  var n = e2.popup, r = e2.className, a = e2.prefixCls, o = e2.style, i = e2.target, s = e2.onVisibleChanged, c = e2.open, u = e2.keepDom, d = e2.fresh, f = e2.onClick, h = e2.mask, p = e2.arrow, g = e2.arrowPos, v = e2.align, m = e2.motion, w = e2.maskMotion, b = e2.forceRender, C = e2.getPopupContainer, x = e2.autoDestroy, I = e2.portal, y = e2.zIndex, E = e2.onMouseEnter, O = e2.onMouseLeave, R = e2.onPointerEnter, S = e2.onPointerDownCapture, $ = e2.ready, P = e2.offsetX, A = e2.offsetY, N = e2.offsetR, T = e2.offsetB, M = e2.onAlign, _ = e2.onPrepare, j = e2.stretch, z = e2.targetWidth, L = e2.targetHeight, H = typeof n == "function" ? n() : n, Y = c || u, k = (C == null ? void 0 : C.length) > 0, F = l.useState(!C || !k), B = te(F, 2), G = B[0], re = B[1];
  if (ut(function() {
    !G && k && i && re(true);
  }, [G, k, i]), !G) return null;
  var W = "auto", J = { left: "-1000vw", top: "-1000vh", right: W, bottom: W };
  if ($ || !c) {
    var oe, K = v.points, q = v.dynamicInset || ((oe = v._experimental) === null || oe === void 0 ? void 0 : oe.dynamicInset), Z = q && K[0][1] === "r", ie = q && K[0][0] === "b";
    Z ? (J.right = N, J.left = W) : (J.left = P, J.right = W), ie ? (J.bottom = T, J.top = W) : (J.top = A, J.bottom = W);
  }
  var X = {};
  return j && (j.includes("height") && L ? X.height = L : j.includes("minHeight") && L && (X.minHeight = L), j.includes("width") && z ? X.width = z : j.includes("minWidth") && z && (X.minWidth = z)), c || (X.pointerEvents = "none"), l.createElement(I, { open: b || Y, getContainer: C && function() {
    return C(i);
  }, autoDestroy: x }, l.createElement(zb, { prefixCls: a, open: c, zIndex: y, mask: h, motion: w }), l.createElement(Gn, { onResize: M, disabled: !c }, function(ee) {
    return l.createElement(xr, Ie({ motionAppear: true, motionEnter: true, motionLeave: true, removeOnLeave: false, forceRender: b, leavedClassName: "".concat(a, "-hidden") }, m, { onAppearPrepare: _, onEnterPrepare: _, visible: c, onVisibleChanged: function(se) {
      var de;
      m == null || (de = m.onVisibleChanged) === null || de === void 0 || de.call(m, se), s(se);
    } }), function(le, se) {
      var de = le.className, Oe = le.style, xe = Q(a, de, r);
      return l.createElement("div", { ref: Tn(ee, t, se), className: xe, style: V(V(V(V({ "--arrow-x": "".concat(g.x || 0, "px"), "--arrow-y": "".concat(g.y || 0, "px") }, J), X), Oe), {}, { boxSizing: "border-box", zIndex: y }, o), onMouseEnter: E, onMouseLeave: O, onPointerEnter: R, onClick: f, onPointerDownCapture: S }, p && l.createElement(Bb, { prefixCls: a, arrow: p, arrowPos: g, align: v }), l.createElement(Hb, { cache: !c && !d }, H));
    });
  }));
}), Wb = l.forwardRef(function(e2, t) {
  var n = e2.children, r = e2.getTriggerDOMNode, a = Yr(n), o = l.useCallback(function(s) {
    If(t, r ? r(s) : s);
  }, [r]), i = Qr(o, Va(n));
  return a ? l.cloneElement(n, { ref: i }) : n;
}), pl = l.createContext(null);
function bl(e2) {
  return e2 ? Array.isArray(e2) ? e2 : [e2] : [];
}
function qb(e2, t, n, r) {
  return l.useMemo(function() {
    var a = bl(n ?? t), o = bl(r ?? t), i = new Set(a), s = new Set(o);
    return e2 && (i.has("hover") && (i.delete("hover"), i.add("click")), s.has("hover") && (s.delete("hover"), s.add("click"))), [i, s];
  }, [e2, t, n, r]);
}
function Ub() {
  var e2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], n = arguments.length > 2 ? arguments[2] : void 0;
  return n ? e2[0] === t[0] : e2[0] === t[0] && e2[1] === t[1];
}
function kb(e2, t, n, r) {
  for (var a = n.points, o = Object.keys(e2), i = 0; i < o.length; i += 1) {
    var s, c = o[i];
    if (Ub((s = e2[c]) === null || s === void 0 ? void 0 : s.points, a, r)) return "".concat(t, "-placement-").concat(c);
  }
  return "";
}
function yl(e2, t, n, r) {
  return t || (n ? { motionName: "".concat(e2, "-").concat(n) } : r ? { motionName: r } : null);
}
function ra(e2) {
  return e2.ownerDocument.defaultView;
}
function Ei(e2) {
  for (var t = [], n = e2 == null ? void 0 : e2.parentElement, r = ["hidden", "scroll", "clip", "auto"]; n; ) {
    var a = ra(n).getComputedStyle(n), o = a.overflowX, i = a.overflowY, s = a.overflow;
    [o, i, s].some(function(c) {
      return r.includes(c);
    }) && t.push(n), n = n.parentElement;
  }
  return t;
}
function Kr(e2) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  return Number.isNaN(e2) ? t : e2;
}
function Tr(e2) {
  return Kr(parseFloat(e2), 0);
}
function wl(e2, t) {
  var n = V({}, e2);
  return (t || []).forEach(function(r) {
    if (!(r instanceof HTMLBodyElement || r instanceof HTMLHtmlElement)) {
      var a = ra(r).getComputedStyle(r), o = a.overflow, i = a.overflowClipMargin, s = a.borderTopWidth, c = a.borderBottomWidth, u = a.borderLeftWidth, d = a.borderRightWidth, f = r.getBoundingClientRect(), h = r.offsetHeight, p = r.clientHeight, g = r.offsetWidth, v = r.clientWidth, m = Tr(s), w = Tr(c), b = Tr(u), C = Tr(d), x = Kr(Math.round(f.width / g * 1e3) / 1e3), I = Kr(Math.round(f.height / h * 1e3) / 1e3), y = (g - v - b - C) * x, E = (h - p - m - w) * I, O = m * I, R = w * I, S = b * x, $ = C * x, P = 0, A = 0;
      if (o === "clip") {
        var N = Tr(i);
        P = N * x, A = N * I;
      }
      var T = f.x + S - P, M = f.y + O - A, _ = T + f.width + 2 * P - S - $ - y, j = M + f.height + 2 * A - O - R - E;
      n.left = Math.max(n.left, T), n.top = Math.max(n.top, M), n.right = Math.min(n.right, _), n.bottom = Math.min(n.bottom, j);
    }
  }), n;
}
function Cl(e2) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = "".concat(t), r = n.match(/^(.*)\%$/);
  return r ? e2 * (parseFloat(r[1]) / 100) : parseFloat(n);
}
function Sl(e2, t) {
  var n = t || [], r = te(n, 2), a = r[0], o = r[1];
  return [Cl(e2.width, a), Cl(e2.height, o)];
}
function xl() {
  var e2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  return [e2[0], e2[1]];
}
function hr(e2, t) {
  var n = t[0], r = t[1], a, o;
  return n === "t" ? o = e2.y : n === "b" ? o = e2.y + e2.height : o = e2.y + e2.height / 2, r === "l" ? a = e2.x : r === "r" ? a = e2.x + e2.width : a = e2.x + e2.width / 2, { x: a, y: o };
}
function Hn(e2, t) {
  var n = { t: "b", b: "t", l: "r", r: "l" };
  return e2.map(function(r, a) {
    return a === t ? n[r] || "c" : r;
  }).join("");
}
function Gb(e2, t, n, r, a, o, i) {
  var s = l.useState({ ready: false, offsetX: 0, offsetY: 0, offsetR: 0, offsetB: 0, arrowX: 0, arrowY: 0, scaleX: 1, scaleY: 1, align: a[r] || {} }), c = te(s, 2), u = c[0], d = c[1], f = l.useRef(0), h = l.useMemo(function() {
    return t ? Ei(t) : [];
  }, [t]), p = l.useRef({}), g = function() {
    p.current = {};
  };
  e2 || g();
  var v = jt(function() {
    if (t && n && e2) {
      let sn = function(dr, Bn) {
        var zn = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ue, Nr = F.x + dr, ma = F.y + Bn, bo = Nr + Z, yo = ma + q, wo = Math.max(Nr, zn.left), Ce = Math.max(ma, zn.top), ze = Math.min(bo, zn.right), vt = Math.min(yo, zn.bottom);
        return Math.max(0, (ze - wo) * (vt - Ce));
      }, fa = function() {
        $t = F.y + ve, _t4 = $t + q, zt = F.x + he, gn = zt + Z;
      };
      var b, C, x, I, y = t, E = y.ownerDocument, O = ra(y), R = O.getComputedStyle(y), S = R.width, $ = R.height, P = R.position, A = y.style.left, N = y.style.top, T = y.style.right, M = y.style.bottom, _ = y.style.overflow, j = V(V({}, a[r]), o), z = E.createElement("div");
      (b = y.parentElement) === null || b === void 0 || b.appendChild(z), z.style.left = "".concat(y.offsetLeft, "px"), z.style.top = "".concat(y.offsetTop, "px"), z.style.position = P, z.style.height = "".concat(y.offsetHeight, "px"), z.style.width = "".concat(y.offsetWidth, "px"), y.style.left = "0", y.style.top = "0", y.style.right = "auto", y.style.bottom = "auto", y.style.overflow = "hidden";
      var L;
      if (Array.isArray(n)) L = { x: n[0], y: n[1], width: 0, height: 0 };
      else {
        var H, Y, k = n.getBoundingClientRect();
        k.x = (H = k.x) !== null && H !== void 0 ? H : k.left, k.y = (Y = k.y) !== null && Y !== void 0 ? Y : k.top, L = { x: k.x, y: k.y, width: k.width, height: k.height };
      }
      var F = y.getBoundingClientRect();
      F.x = (C = F.x) !== null && C !== void 0 ? C : F.left, F.y = (x = F.y) !== null && x !== void 0 ? x : F.top;
      var B = E.documentElement, G = B.clientWidth, re = B.clientHeight, W = B.scrollWidth, J = B.scrollHeight, oe = B.scrollTop, K = B.scrollLeft, q = F.height, Z = F.width, ie = L.height, X = L.width, ee = { left: 0, top: 0, right: G, bottom: re }, le = { left: -K, top: -oe, right: W - K, bottom: J - oe }, se = j.htmlRegion, de = "visible", Oe = "visibleFirst";
      se !== "scroll" && se !== Oe && (se = de);
      var xe = se === Oe, We = wl(le, h), ce = wl(ee, h), ue = se === de ? ce : We, pe = xe ? ce : ue;
      y.style.left = "auto", y.style.top = "auto", y.style.right = "0", y.style.bottom = "0";
      var $e = y.getBoundingClientRect();
      y.style.left = A, y.style.top = N, y.style.right = T, y.style.bottom = M, y.style.overflow = _, (I = y.parentElement) === null || I === void 0 || I.removeChild(z);
      var Fe = Kr(Math.round(Z / parseFloat(S) * 1e3) / 1e3), Le = Kr(Math.round(q / parseFloat($) * 1e3) / 1e3);
      if (Fe === 0 || Le === 0 || ni(n) && !qi(n)) return;
      var je = j.offset, Ee = j.targetOffset, Be = Sl(F, je), Ke = te(Be, 2), Me = Ke[0], be = Ke[1], Ae = Sl(L, Ee), Je = te(Ae, 2), Qe = Je[0], st = Je[1];
      L.x -= Qe, L.y -= st;
      var ot = j.points || [], Bt = te(ot, 2), It = Bt[0], Te = Bt[1], ge = xl(Te), De = xl(It), _e4 = hr(L, ge), qe = hr(F, De), Se = V({}, j), he = _e4.x - qe.x + Me, ve = _e4.y - qe.y + be, at = sn(he, ve), gt = sn(he, ve, ce), we = hr(L, ["t", "l"]), Re = hr(F, ["t", "l"]), Ne = hr(L, ["b", "r"]), Pe = hr(F, ["b", "r"]), Ue = j.overflow || {}, tt = Ue.adjustX, Tt = Ue.adjustY, St = Ue.shiftX, At = Ue.shiftY, ct = function(Bn) {
        return typeof Bn == "boolean" ? Bn : Bn >= 0;
      }, $t, _t4, zt, gn;
      fa();
      var Et = ct(Tt), Mt = De[0] === ge[0];
      if (Et && De[0] === "t" && (_t4 > pe.bottom || p.current.bt)) {
        var me = ve;
        Mt ? me -= q - ie : me = we.y - Pe.y - be;
        var ye = sn(he, me), ke = sn(he, me, ce);
        ye > at || ye === at && (!xe || ke >= gt) ? (p.current.bt = true, ve = me, be = -be, Se.points = [Hn(De, 0), Hn(ge, 0)]) : p.current.bt = false;
      }
      if (Et && De[0] === "b" && ($t < pe.top || p.current.tb)) {
        var Xe = ve;
        Mt ? Xe += q - ie : Xe = Ne.y - Re.y - be;
        var ht = sn(he, Xe), Sn = sn(he, Xe, ce);
        ht > at || ht === at && (!xe || Sn >= gt) ? (p.current.tb = true, ve = Xe, be = -be, Se.points = [Hn(De, 0), Hn(ge, 0)]) : p.current.tb = false;
      }
      var Wt = ct(tt), xn = De[1] === ge[1];
      if (Wt && De[1] === "l" && (gn > pe.right || p.current.rl)) {
        var hn = he;
        xn ? hn -= Z - X : hn = we.x - Pe.x - Me;
        var $n = sn(hn, ve), nn = sn(hn, ve, ce);
        $n > at || $n === at && (!xe || nn >= gt) ? (p.current.rl = true, he = hn, Me = -Me, Se.points = [Hn(De, 1), Hn(ge, 1)]) : p.current.rl = false;
      }
      if (Wt && De[1] === "r" && (zt < pe.left || p.current.lr)) {
        var rn = he;
        xn ? rn += Z - X : rn = Ne.x - Re.x - Me;
        var Xn = sn(rn, ve), cr = sn(rn, ve, ce);
        Xn > at || Xn === at && (!xe || cr >= gt) ? (p.current.lr = true, he = rn, Me = -Me, Se.points = [Hn(De, 1), Hn(ge, 1)]) : p.current.lr = false;
      }
      fa();
      var Xt = St === true ? 0 : St;
      typeof Xt == "number" && (zt < ce.left && (he -= zt - ce.left - Me, L.x + X < ce.left + Xt && (he += L.x - ce.left + X - Xt)), gn > ce.right && (he -= gn - ce.right - Me, L.x > ce.right - Xt && (he += L.x - ce.right + Xt)));
      var Yt = At === true ? 0 : At;
      typeof Yt == "number" && ($t < ce.top && (ve -= $t - ce.top - be, L.y + ie < ce.top + Yt && (ve += L.y - ce.top + ie - Yt)), _t4 > ce.bottom && (ve -= _t4 - ce.bottom - be, L.y > ce.bottom - Yt && (ve += L.y - ce.bottom + Yt)));
      var jn = F.x + he, Dn = jn + Z, an = F.y + ve, ur = an + q, Ln = L.x, Ye = Ln + X, Ve = L.y, Pt = Ve + ie, Nt = Math.max(jn, Ln), bt = Math.min(Dn, Ye), wt = (Nt + bt) / 2, Qt = wt - jn, qt = Math.max(an, Ve), on = Math.min(ur, Pt), En = (qt + on) / 2, vn = En - an;
      i == null ? void 0 : i(t, Se);
      var Rn = $e.right - F.x - (he + F.width), Ht = $e.bottom - F.y - (ve + F.height);
      Fe === 1 && (he = Math.round(he), Rn = Math.round(Rn)), Le === 1 && (ve = Math.round(ve), Ht = Math.round(Ht));
      var po = { ready: true, offsetX: he / Fe, offsetY: ve / Le, offsetR: Rn / Fe, offsetB: Ht / Le, arrowX: Qt / Fe, arrowY: vn / Le, scaleX: Fe, scaleY: Le, align: Se };
      d(po);
    }
  }), m = function() {
    f.current += 1;
    var C = f.current;
    Promise.resolve().then(function() {
      f.current === C && v();
    });
  }, w = function() {
    d(function(C) {
      return V(V({}, C), {}, { ready: false });
    });
  };
  return ut(w, [r]), ut(function() {
    e2 || w();
  }, [e2]), [u.ready, u.offsetX, u.offsetY, u.offsetR, u.offsetB, u.arrowX, u.arrowY, u.scaleX, u.scaleY, u.align, m];
}
function Kb(e2, t, n, r, a) {
  ut(function() {
    if (e2 && t && n) {
      let f = function() {
        r(), a();
      };
      var o = t, i = n, s = Ei(o), c = Ei(i), u = ra(i), d = new Set([u].concat(fe(s), fe(c)));
      return d.forEach(function(h) {
        h.addEventListener("scroll", f, { passive: true });
      }), u.addEventListener("resize", f, { passive: true }), r(), function() {
        d.forEach(function(h) {
          h.removeEventListener("scroll", f), u.removeEventListener("resize", f);
        });
      };
    }
  }, [e2, t, n]);
}
function Xb(e2, t, n, r, a, o, i, s) {
  var c = l.useRef(e2);
  c.current = e2;
  var u = l.useRef(false);
  l.useEffect(function() {
    if (t && r && (!a || o)) {
      var f = function() {
        u.current = false;
      }, h = function(m) {
        var w;
        c.current && !i(((w = m.composedPath) === null || w === void 0 || (w = w.call(m)) === null || w === void 0 ? void 0 : w[0]) || m.target) && !u.current && s(false);
      }, p = ra(r);
      p.addEventListener("pointerdown", f, true), p.addEventListener("mousedown", h, true), p.addEventListener("contextmenu", h, true);
      var g = Ma(n);
      return g && (g.addEventListener("mousedown", h, true), g.addEventListener("contextmenu", h, true)), function() {
        p.removeEventListener("pointerdown", f, true), p.removeEventListener("mousedown", h, true), p.removeEventListener("contextmenu", h, true), g && (g.removeEventListener("mousedown", h, true), g.removeEventListener("contextmenu", h, true));
      };
    }
  }, [t, n, r, a, o]);
  function d() {
    u.current = true;
  }
  return d;
}
var Yb = ["prefixCls", "children", "action", "showAction", "hideAction", "popupVisible", "defaultPopupVisible", "onPopupVisibleChange", "afterPopupVisibleChange", "mouseEnterDelay", "mouseLeaveDelay", "focusDelay", "blurDelay", "mask", "maskClosable", "getPopupContainer", "forceRender", "autoDestroy", "destroyPopupOnHide", "popup", "popupClassName", "popupStyle", "popupPlacement", "builtinPlacements", "popupAlign", "zIndex", "stretch", "getPopupClassNameFromAlign", "fresh", "alignPoint", "onPopupClick", "onPopupAlign", "arrow", "popupMotion", "maskMotion", "popupTransitionName", "popupAnimation", "maskTransitionName", "maskAnimation", "className", "getTriggerDOMNode"];
function Qb() {
  var e2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : gu, t = l.forwardRef(function(n, r) {
    var a = n.prefixCls, o = a === void 0 ? "rc-trigger-popup" : a, i = n.children, s = n.action, c = s === void 0 ? "hover" : s, u = n.showAction, d = n.hideAction, f = n.popupVisible, h = n.defaultPopupVisible, p = n.onPopupVisibleChange, g = n.afterPopupVisibleChange, v = n.mouseEnterDelay, m = n.mouseLeaveDelay, w = m === void 0 ? 0.1 : m, b = n.focusDelay, C = n.blurDelay, x = n.mask, I = n.maskClosable, y = I === void 0 ? true : I, E = n.getPopupContainer, O = n.forceRender, R = n.autoDestroy, S = n.destroyPopupOnHide, $ = n.popup, P = n.popupClassName, A = n.popupStyle, N = n.popupPlacement, T = n.builtinPlacements, M = T === void 0 ? {} : T, _ = n.popupAlign, j = n.zIndex, z = n.stretch, L = n.getPopupClassNameFromAlign, H = n.fresh, Y = n.alignPoint, k = n.onPopupClick, F = n.onPopupAlign, B = n.arrow, G = n.popupMotion, re = n.maskMotion, W = n.popupTransitionName, J = n.popupAnimation, oe = n.maskTransitionName, K = n.maskAnimation, q = n.className, Z = n.getTriggerDOMNode, ie = rt(n, Yb), X = R || S || false, ee = l.useState(false), le = te(ee, 2), se = le[0], de = le[1];
    ut(function() {
      de(es());
    }, []);
    var Oe = l.useRef({}), xe = l.useContext(pl), We = l.useMemo(function() {
      return { registerSubPopup: function(ze, vt) {
        Oe.current[ze] = vt, xe == null ? void 0 : xe.registerSubPopup(ze, vt);
      } };
    }, [xe]), ce = hu(), ue = l.useState(null), pe = te(ue, 2), $e = pe[0], Fe = pe[1], Le = l.useRef(null), je = jt(function(Ce) {
      Le.current = Ce, ni(Ce) && $e !== Ce && Fe(Ce), xe == null ? void 0 : xe.registerSubPopup(ce, Ce);
    }), Ee = l.useState(null), Be = te(Ee, 2), Ke = Be[0], Me = Be[1], be = l.useRef(null), Ae = jt(function(Ce) {
      ni(Ce) && Ke !== Ce && (Me(Ce), be.current = Ce);
    }), Je = l.Children.only(i), Qe = (Je == null ? void 0 : Je.props) || {}, st = {}, ot = jt(function(Ce) {
      var ze, vt, Rt = Ke;
      return (Rt == null ? void 0 : Rt.contains(Ce)) || ((ze = Ma(Rt)) === null || ze === void 0 ? void 0 : ze.host) === Ce || Ce === Rt || ($e == null ? void 0 : $e.contains(Ce)) || ((vt = Ma($e)) === null || vt === void 0 ? void 0 : vt.host) === Ce || Ce === $e || Object.values(Oe.current).some(function(yt) {
        return (yt == null ? void 0 : yt.contains(Ce)) || Ce === yt;
      });
    }), Bt = yl(o, G, J, W), It = yl(o, re, K, oe), Te = l.useState(h || false), ge = te(Te, 2), De = ge[0], _e4 = ge[1], qe = f ?? De, Se = jt(function(Ce) {
      f === void 0 && _e4(Ce);
    });
    ut(function() {
      _e4(f || false);
    }, [f]);
    var he = l.useRef(qe);
    he.current = qe;
    var ve = l.useRef([]);
    ve.current = [];
    var at = jt(function(Ce) {
      var ze;
      Se(Ce), ((ze = ve.current[ve.current.length - 1]) !== null && ze !== void 0 ? ze : qe) !== Ce && (ve.current.push(Ce), p == null ? void 0 : p(Ce));
    }), gt = l.useRef(), we = function() {
      clearTimeout(gt.current);
    }, Re = function(ze) {
      var vt = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      we(), vt === 0 ? at(ze) : gt.current = setTimeout(function() {
        at(ze);
      }, vt * 1e3);
    };
    l.useEffect(function() {
      return we;
    }, []);
    var Ne = l.useState(false), Pe = te(Ne, 2), Ue = Pe[0], tt = Pe[1];
    ut(function(Ce) {
      (!Ce || qe) && tt(true);
    }, [qe]);
    var Tt = l.useState(null), St = te(Tt, 2), At = St[0], ct = St[1], $t = l.useState(null), _t4 = te($t, 2), zt = _t4[0], gn = _t4[1], Et = function(ze) {
      gn([ze.clientX, ze.clientY]);
    }, Mt = Gb(qe, $e, Y && zt !== null ? zt : Ke, N, M, _, F), me = te(Mt, 11), ye = me[0], ke = me[1], Xe = me[2], ht = me[3], Sn = me[4], Wt = me[5], xn = me[6], hn = me[7], $n = me[8], nn = me[9], rn = me[10], Xn = qb(se, c, u, d), cr = te(Xn, 2), Xt = cr[0], Yt = cr[1], jn = Xt.has("click"), Dn = Yt.has("click") || Yt.has("contextMenu"), an = jt(function() {
      Ue || rn();
    }), ur = function() {
      he.current && Y && Dn && Re(false);
    };
    Kb(qe, Ke, $e, an, ur), ut(function() {
      an();
    }, [zt, N]), ut(function() {
      qe && !(M != null && M[N]) && an();
    }, [JSON.stringify(_)]);
    var Ln = l.useMemo(function() {
      var Ce = kb(M, o, nn, Y);
      return Q(Ce, L == null ? void 0 : L(nn));
    }, [nn, L, M, o, Y]);
    l.useImperativeHandle(r, function() {
      return { nativeElement: be.current, popupElement: Le.current, forceAlign: an };
    });
    var Ye = l.useState(0), Ve = te(Ye, 2), Pt = Ve[0], Nt = Ve[1], bt = l.useState(0), wt = te(bt, 2), Qt = wt[0], qt = wt[1], on = function() {
      if (z && Ke) {
        var ze = Ke.getBoundingClientRect();
        Nt(ze.width), qt(ze.height);
      }
    }, En = function() {
      on(), an();
    }, vn = function(ze) {
      tt(false), rn(), g == null ? void 0 : g(ze);
    }, Rn = function() {
      return new Promise(function(ze) {
        on(), ct(function() {
          return ze;
        });
      });
    };
    ut(function() {
      At && (rn(), At(), ct(null));
    }, [At]);
    function Ht(Ce, ze, vt, Rt) {
      st[Ce] = function(yt) {
        var ga;
        Rt == null ? void 0 : Rt(yt), Re(ze, vt);
        for (var Co = arguments.length, bs = new Array(Co > 1 ? Co - 1 : 0), ha = 1; ha < Co; ha++) bs[ha - 1] = arguments[ha];
        (ga = Qe[Ce]) === null || ga === void 0 || ga.call.apply(ga, [Qe, yt].concat(bs));
      };
    }
    (jn || Dn) && (st.onClick = function(Ce) {
      var ze;
      he.current && Dn ? Re(false) : !he.current && jn && (Et(Ce), Re(true));
      for (var vt = arguments.length, Rt = new Array(vt > 1 ? vt - 1 : 0), yt = 1; yt < vt; yt++) Rt[yt - 1] = arguments[yt];
      (ze = Qe.onClick) === null || ze === void 0 || ze.call.apply(ze, [Qe, Ce].concat(Rt));
    });
    var po = Xb(qe, Dn, Ke, $e, x, y, ot, Re), sn = Xt.has("hover"), fa = Yt.has("hover"), dr, Bn;
    sn && (Ht("onMouseEnter", true, v, function(Ce) {
      Et(Ce);
    }), Ht("onPointerEnter", true, v, function(Ce) {
      Et(Ce);
    }), dr = function(ze) {
      (qe || Ue) && $e !== null && $e !== void 0 && $e.contains(ze.target) && Re(true, v);
    }, Y && (st.onMouseMove = function(Ce) {
      var ze;
      (ze = Qe.onMouseMove) === null || ze === void 0 || ze.call(Qe, Ce);
    })), fa && (Ht("onMouseLeave", false, w), Ht("onPointerLeave", false, w), Bn = function() {
      Re(false, w);
    }), Xt.has("focus") && Ht("onFocus", true, b), Yt.has("focus") && Ht("onBlur", false, C), Xt.has("contextMenu") && (st.onContextMenu = function(Ce) {
      var ze;
      he.current && Yt.has("contextMenu") ? Re(false) : (Et(Ce), Re(true)), Ce.preventDefault();
      for (var vt = arguments.length, Rt = new Array(vt > 1 ? vt - 1 : 0), yt = 1; yt < vt; yt++) Rt[yt - 1] = arguments[yt];
      (ze = Qe.onContextMenu) === null || ze === void 0 || ze.call.apply(ze, [Qe, Ce].concat(Rt));
    }), q && (st.className = Q(Qe.className, q));
    var zn = V(V({}, Qe), st), Nr = {}, ma = ["onContextMenu", "onClick", "onMouseDown", "onTouchStart", "onMouseEnter", "onMouseLeave", "onFocus", "onBlur"];
    ma.forEach(function(Ce) {
      ie[Ce] && (Nr[Ce] = function() {
        for (var ze, vt = arguments.length, Rt = new Array(vt), yt = 0; yt < vt; yt++) Rt[yt] = arguments[yt];
        (ze = zn[Ce]) === null || ze === void 0 || ze.call.apply(ze, [zn].concat(Rt)), ie[Ce].apply(ie, Rt);
      });
    });
    var bo = l.cloneElement(Je, V(V({}, zn), Nr)), yo = { x: Wt, y: xn }, wo = B ? V({}, B !== true ? B : {}) : null;
    return l.createElement(l.Fragment, null, l.createElement(Gn, { disabled: !qe, ref: Ae, onResize: En }, l.createElement(Wb, { getTriggerDOMNode: Z }, bo)), l.createElement(pl.Provider, { value: We }, l.createElement(Vb, { portal: e2, ref: je, prefixCls: o, popup: $, className: Q(P, Ln), style: A, target: Ke, onMouseEnter: dr, onMouseLeave: Bn, onPointerEnter: dr, zIndex: j, open: qe, keepDom: Ue, fresh: H, onClick: k, onPointerDownCapture: po, mask: x, motion: Bt, maskMotion: It, onVisibleChanged: vn, onPrepare: Rn, forceRender: O, autoDestroy: X, getPopupContainer: E, align: nn, arrow: wo, arrowPos: yo, ready: ye, offsetX: ke, offsetY: Xe, offsetR: ht, offsetB: Sn, onAlign: an, stretch: z, targetWidth: Pt / hn, targetHeight: Qt / $n })));
  });
  return t;
}
const Tu = Qb(gu);
var Jb = ["prefixCls", "disabled", "visible", "children", "popupElement", "animation", "transitionName", "dropdownStyle", "dropdownClassName", "direction", "placement", "builtinPlacements", "dropdownMatchSelectWidth", "dropdownRender", "dropdownAlign", "getPopupContainer", "empty", "getTriggerDOMNode", "onPopupVisibleChange", "onPopupMouseEnter"], Zb = function(t) {
  var n = t === true ? 0 : 1;
  return { bottomLeft: { points: ["tl", "bl"], offset: [0, 4], overflow: { adjustX: n, adjustY: 1 }, htmlRegion: "scroll" }, bottomRight: { points: ["tr", "br"], offset: [0, 4], overflow: { adjustX: n, adjustY: 1 }, htmlRegion: "scroll" }, topLeft: { points: ["bl", "tl"], offset: [0, -4], overflow: { adjustX: n, adjustY: 1 }, htmlRegion: "scroll" }, topRight: { points: ["br", "tr"], offset: [0, -4], overflow: { adjustX: n, adjustY: 1 }, htmlRegion: "scroll" } };
}, e0 = function(t, n) {
  var r = t.prefixCls;
  t.disabled;
  var a = t.visible, o = t.children, i = t.popupElement, s = t.animation, c = t.transitionName, u = t.dropdownStyle, d = t.dropdownClassName, f = t.direction, h = f === void 0 ? "ltr" : f, p = t.placement, g = t.builtinPlacements, v = t.dropdownMatchSelectWidth, m = t.dropdownRender, w = t.dropdownAlign, b = t.getPopupContainer, C = t.empty, x = t.getTriggerDOMNode, I = t.onPopupVisibleChange, y = t.onPopupMouseEnter, E = rt(t, Jb), O = "".concat(r, "-dropdown"), R = i;
  m && (R = m(i));
  var S = l.useMemo(function() {
    return g || Zb(v);
  }, [g, v]), $ = s ? "".concat(O, "-").concat(s) : c, P = typeof v == "number", A = l.useMemo(function() {
    return P ? null : v === false ? "minWidth" : "width";
  }, [v, P]), N = u;
  P && (N = V(V({}, N), {}, { width: v }));
  var T = l.useRef(null);
  return l.useImperativeHandle(n, function() {
    return { getPopupElement: function() {
      var _;
      return (_ = T.current) === null || _ === void 0 ? void 0 : _.popupElement;
    } };
  }), l.createElement(Tu, Ie({}, E, { showAction: I ? ["click"] : [], hideAction: I ? ["click"] : [], popupPlacement: p || (h === "rtl" ? "bottomRight" : "bottomLeft"), builtinPlacements: S, prefixCls: O, popupTransitionName: $, popup: l.createElement("div", { onMouseEnter: y }, R), ref: T, stretch: A, popupAlign: w, popupVisible: a, getPopupContainer: b, popupClassName: Q(d, D({}, "".concat(O, "-empty"), C)), popupStyle: N, getTriggerDOMNode: x, onPopupVisibleChange: I }), o);
}, t0 = l.forwardRef(e0);
function $l(e2, t) {
  var n = e2.key, r;
  return "value" in e2 && (r = e2.value), n ?? (r !== void 0 ? r : "rc-index-key-".concat(t));
}
function Ri(e2) {
  return typeof e2 < "u" && !Number.isNaN(e2);
}
function _u(e2, t) {
  var n = e2 || {}, r = n.label, a = n.value, o = n.options, i = n.groupLabel, s = r || (t ? "children" : "label");
  return { label: s, value: a || "value", options: o || "options", groupLabel: i || s };
}
function n0(e2) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = t.fieldNames, r = t.childrenAsData, a = [], o = _u(n, false), i = o.label, s = o.value, c = o.options, u = o.groupLabel;
  function d(f, h) {
    Array.isArray(f) && f.forEach(function(p) {
      if (h || !(c in p)) {
        var g = p[s];
        a.push({ key: $l(p, a.length), groupOption: h, data: p, label: p[i], value: g });
      } else {
        var v = p[u];
        v === void 0 && r && (v = p.label), a.push({ key: $l(p, a.length), group: true, data: p, label: v }), d(p[c], true);
      }
    });
  }
  return d(e2, false), a;
}
function Oi(e2) {
  var t = V({}, e2);
  return "props" in t || Object.defineProperty(t, "props", { get: function() {
    return un(false, "Return type is option instead of Option instance. Please read value directly instead of reading from `props`."), t;
  } }), t;
}
var r0 = function(t, n, r) {
  if (!n || !n.length) return null;
  var a = false, o = function s(c, u) {
    var d = Af(u), f = d[0], h = d.slice(1);
    if (!f) return [c];
    var p = c.split(f);
    return a = a || p.length > 1, p.reduce(function(g, v) {
      return [].concat(fe(g), fe(s(v, h)));
    }, []).filter(Boolean);
  }, i = o(t, n);
  return a ? typeof r < "u" ? i.slice(0, r) : i : null;
}, ts = l.createContext(null);
function a0(e2) {
  var t = e2.visible, n = e2.values;
  if (!t) return null;
  var r = 50;
  return l.createElement("span", { "aria-live": "polite", style: { width: 0, height: 0, position: "absolute", overflow: "hidden", opacity: 0 } }, "".concat(n.slice(0, r).map(function(a) {
    var o = a.label, i = a.value;
    return ["number", "string"].includes(et(o)) ? o : i;
  }).join(", ")), n.length > r ? ", ..." : null);
}
var o0 = ["id", "prefixCls", "className", "showSearch", "tagRender", "direction", "omitDomProps", "displayValues", "onDisplayValuesChange", "emptyOptions", "notFoundContent", "onClear", "mode", "disabled", "loading", "getInputElement", "getRawInputElement", "open", "defaultOpen", "onDropdownVisibleChange", "activeValue", "onActiveValueChange", "activeDescendantId", "searchValue", "autoClearSearchValue", "onSearch", "onSearchSplit", "tokenSeparators", "allowClear", "prefix", "suffixIcon", "clearIcon", "OptionList", "animation", "transitionName", "dropdownStyle", "dropdownClassName", "dropdownMatchSelectWidth", "dropdownRender", "dropdownAlign", "placement", "builtinPlacements", "getPopupContainer", "showAction", "onFocus", "onBlur", "onKeyUp", "onKeyDown", "onMouseDown"], i0 = ["value", "onChange", "removeIcon", "placeholder", "autoFocus", "maxTagCount", "maxTagTextLength", "maxTagPlaceholder", "choiceTransitionName", "onInputKeyDown", "onPopupScroll", "tabIndex"], Ii = function(t) {
  return t === "tags" || t === "multiple";
}, s0 = l.forwardRef(function(e2, t) {
  var n, r = e2.id, a = e2.prefixCls, o = e2.className, i = e2.showSearch, s = e2.tagRender, c = e2.direction, u = e2.omitDomProps, d = e2.displayValues, f = e2.onDisplayValuesChange, h = e2.emptyOptions, p = e2.notFoundContent, g = p === void 0 ? "Not Found" : p, v = e2.onClear, m = e2.mode, w = e2.disabled, b = e2.loading, C = e2.getInputElement, x = e2.getRawInputElement, I = e2.open, y = e2.defaultOpen, E = e2.onDropdownVisibleChange, O = e2.activeValue, R = e2.onActiveValueChange, S = e2.activeDescendantId, $ = e2.searchValue, P = e2.autoClearSearchValue, A = e2.onSearch, N = e2.onSearchSplit, T = e2.tokenSeparators, M = e2.allowClear, _ = e2.prefix, j = e2.suffixIcon, z = e2.clearIcon, L = e2.OptionList, H = e2.animation, Y = e2.transitionName, k = e2.dropdownStyle, F = e2.dropdownClassName, B = e2.dropdownMatchSelectWidth, G = e2.dropdownRender, re = e2.dropdownAlign, W = e2.placement, J = e2.builtinPlacements, oe = e2.getPopupContainer, K = e2.showAction, q = K === void 0 ? [] : K, Z = e2.onFocus, ie = e2.onBlur, X = e2.onKeyUp, ee = e2.onKeyDown, le = e2.onMouseDown, se = rt(e2, o0), de = Ii(m), Oe = (i !== void 0 ? i : de) || m === "combobox", xe = V({}, se);
  i0.forEach(function(Ye) {
    delete xe[Ye];
  }), u == null ? void 0 : u.forEach(function(Ye) {
    delete xe[Ye];
  });
  var We = l.useState(false), ce = te(We, 2), ue = ce[0], pe = ce[1];
  l.useEffect(function() {
    pe(es());
  }, []);
  var $e = l.useRef(null), Fe = l.useRef(null), Le = l.useRef(null), je = l.useRef(null), Ee = l.useRef(null), Be = l.useRef(false), Ke = gb(), Me = te(Ke, 3), be = Me[0], Ae = Me[1], Je = Me[2];
  l.useImperativeHandle(t, function() {
    var Ye, Ve;
    return { focus: (Ye = je.current) === null || Ye === void 0 ? void 0 : Ye.focus, blur: (Ve = je.current) === null || Ve === void 0 ? void 0 : Ve.blur, scrollTo: function(Nt) {
      var bt;
      return (bt = Ee.current) === null || bt === void 0 ? void 0 : bt.scrollTo(Nt);
    }, nativeElement: $e.current || Fe.current };
  });
  var Qe = l.useMemo(function() {
    var Ye;
    if (m !== "combobox") return $;
    var Ve = (Ye = d[0]) === null || Ye === void 0 ? void 0 : Ye.value;
    return typeof Ve == "string" || typeof Ve == "number" ? String(Ve) : "";
  }, [$, m, d]), st = m === "combobox" && typeof C == "function" && C() || null, ot = typeof x == "function" && x(), Bt = Qr(Fe, ot == null || (n = ot.props) === null || n === void 0 ? void 0 : n.ref), It = l.useState(false), Te = te(It, 2), ge = Te[0], De = Te[1];
  ut(function() {
    De(true);
  }, []);
  var _e4 = yn(false, { defaultValue: y, value: I }), qe = te(_e4, 2), Se = qe[0], he = qe[1], ve = ge ? Se : false, at = !g && h;
  (w || at && ve && m === "combobox") && (ve = false);
  var gt = at ? false : ve, we = l.useCallback(function(Ye) {
    var Ve = Ye !== void 0 ? Ye : !ve;
    w || (he(Ve), ve !== Ve && (E == null ? void 0 : E(Ve)));
  }, [w, ve, he, E]), Re = l.useMemo(function() {
    return (T || []).some(function(Ye) {
      return [`
`, `\r
`].includes(Ye);
    });
  }, [T]), Ne = l.useContext(ts) || {}, Pe = Ne.maxCount, Ue = Ne.rawValues, tt = function(Ve, Pt, Nt) {
    if (!(de && Ri(Pe) && (Ue == null ? void 0 : Ue.size) >= Pe)) {
      var bt = true, wt = Ve;
      R == null ? void 0 : R(null);
      var Qt = r0(Ve, T, Ri(Pe) ? Pe - Ue.size : void 0), qt = Nt ? null : Qt;
      return m !== "combobox" && qt && (wt = "", N == null ? void 0 : N(qt), we(false), bt = false), A && Qe !== wt && A(wt, { source: Pt ? "typing" : "effect" }), bt;
    }
  }, Tt = function(Ve) {
    !Ve || !Ve.trim() || A(Ve, { source: "submit" });
  };
  l.useEffect(function() {
    !ve && !de && m !== "combobox" && tt("", false, false);
  }, [ve]), l.useEffect(function() {
    Se && w && he(false), w && !Be.current && Ae(false);
  }, [w]);
  var St = Ou(), At = te(St, 2), ct = At[0], $t = At[1], _t4 = l.useRef(false), zt = function(Ve) {
    var Pt = ct(), Nt = Ve.key, bt = Nt === "Enter";
    if (bt && (m !== "combobox" && Ve.preventDefault(), ve || we(true)), $t(!!Qe), Nt === "Backspace" && !Pt && de && !Qe && d.length) {
      for (var wt = fe(d), Qt = null, qt = wt.length - 1; qt >= 0; qt -= 1) {
        var on = wt[qt];
        if (!on.disabled) {
          wt.splice(qt, 1), Qt = on;
          break;
        }
      }
      Qt && f(wt, { type: "remove", values: [Qt] });
    }
    for (var En = arguments.length, vn = new Array(En > 1 ? En - 1 : 0), Rn = 1; Rn < En; Rn++) vn[Rn - 1] = arguments[Rn];
    if (ve && (!bt || !_t4.current)) {
      var Ht;
      bt && (_t4.current = true), (Ht = Ee.current) === null || Ht === void 0 || Ht.onKeyDown.apply(Ht, [Ve].concat(vn));
    }
    ee == null ? void 0 : ee.apply(void 0, [Ve].concat(vn));
  }, gn = function(Ve) {
    for (var Pt = arguments.length, Nt = new Array(Pt > 1 ? Pt - 1 : 0), bt = 1; bt < Pt; bt++) Nt[bt - 1] = arguments[bt];
    if (ve) {
      var wt;
      (wt = Ee.current) === null || wt === void 0 || wt.onKeyUp.apply(wt, [Ve].concat(Nt));
    }
    Ve.key === "Enter" && (_t4.current = false), X == null ? void 0 : X.apply(void 0, [Ve].concat(Nt));
  }, Et = function(Ve) {
    var Pt = d.filter(function(Nt) {
      return Nt !== Ve;
    });
    f(Pt, { type: "remove", values: [Ve] });
  }, Mt = function() {
    _t4.current = false;
  }, me = l.useRef(false), ye = function() {
    Ae(true), w || (Z && !me.current && Z.apply(void 0, arguments), q.includes("focus") && we(true)), me.current = true;
  }, ke = function() {
    Be.current = true, Ae(false, function() {
      me.current = false, Be.current = false, we(false);
    }), !w && (Qe && (m === "tags" ? A(Qe, { source: "submit" }) : m === "multiple" && A("", { source: "blur" })), ie && ie.apply(void 0, arguments));
  }, Xe = [];
  l.useEffect(function() {
    return function() {
      Xe.forEach(function(Ye) {
        return clearTimeout(Ye);
      }), Xe.splice(0, Xe.length);
    };
  }, []);
  var ht = function(Ve) {
    var Pt, Nt = Ve.target, bt = (Pt = Le.current) === null || Pt === void 0 ? void 0 : Pt.getPopupElement();
    if (bt && bt.contains(Nt)) {
      var wt = setTimeout(function() {
        var En = Xe.indexOf(wt);
        if (En !== -1 && Xe.splice(En, 1), Je(), !ue && !bt.contains(document.activeElement)) {
          var vn;
          (vn = je.current) === null || vn === void 0 || vn.focus();
        }
      });
      Xe.push(wt);
    }
    for (var Qt = arguments.length, qt = new Array(Qt > 1 ? Qt - 1 : 0), on = 1; on < Qt; on++) qt[on - 1] = arguments[on];
    le == null ? void 0 : le.apply(void 0, [Ve].concat(qt));
  }, Sn = l.useState({}), Wt = te(Sn, 2), xn = Wt[1];
  function hn() {
    xn({});
  }
  var $n;
  ot && ($n = function(Ve) {
    we(Ve);
  }), hb(function() {
    var Ye;
    return [$e.current, (Ye = Le.current) === null || Ye === void 0 ? void 0 : Ye.getPopupElement()];
  }, gt, we, !!ot);
  var nn = l.useMemo(function() {
    return V(V({}, e2), {}, { notFoundContent: g, open: ve, triggerOpen: gt, id: r, showSearch: Oe, multiple: de, toggleOpen: we });
  }, [e2, g, gt, ve, r, Oe, de, we]), rn = !!j || b, Xn;
  rn && (Xn = l.createElement(ro, { className: Q("".concat(a, "-arrow"), D({}, "".concat(a, "-arrow-loading"), b)), customizeIcon: j, customizeIconProps: { loading: b, searchValue: Qe, open: ve, focused: be, showSearch: Oe } }));
  var cr = function() {
    var Ve;
    v == null ? void 0 : v(), (Ve = je.current) === null || Ve === void 0 || Ve.focus(), f([], { type: "clear", values: d }), tt("", false, false);
  }, Xt = fb(a, cr, d, M, z, w, Qe, m), Yt = Xt.allowClear, jn = Xt.clearIcon, Dn = l.createElement(L, { ref: Ee }), an = Q(a, o, D(D(D(D(D(D(D(D(D(D({}, "".concat(a, "-focused"), be), "".concat(a, "-multiple"), de), "".concat(a, "-single"), !de), "".concat(a, "-allow-clear"), M), "".concat(a, "-show-arrow"), rn), "".concat(a, "-disabled"), w), "".concat(a, "-loading"), b), "".concat(a, "-open"), ve), "".concat(a, "-customize-input"), st), "".concat(a, "-show-search"), Oe)), ur = l.createElement(t0, { ref: Le, disabled: w, prefixCls: a, visible: gt, popupElement: Dn, animation: H, transitionName: Y, dropdownStyle: k, dropdownClassName: F, direction: c, dropdownMatchSelectWidth: B, dropdownRender: G, dropdownAlign: re, placement: W, builtinPlacements: J, getPopupContainer: oe, empty: h, getTriggerDOMNode: function(Ve) {
    return Fe.current || Ve;
  }, onPopupVisibleChange: $n, onPopupMouseEnter: hn }, ot ? l.cloneElement(ot, { ref: Bt }) : l.createElement(Lb, Ie({}, e2, { domRef: Fe, prefixCls: a, inputElement: st, ref: je, id: r, prefix: _, showSearch: Oe, autoClearSearchValue: P, mode: m, activeDescendantId: S, tagRender: s, values: d, open: ve, onToggleOpen: we, activeValue: O, searchValue: Qe, onSearch: tt, onSearchSubmit: Tt, onRemove: Et, tokenWithEnter: Re, onInputBlur: Mt }))), Ln;
  return ot ? Ln = ur : Ln = l.createElement("div", Ie({ className: an }, xe, { ref: $e, onMouseDown: ht, onKeyDown: zt, onKeyUp: gn, onFocus: ye, onBlur: ke }), l.createElement(a0, { visible: be && !ve, values: d }), ur, Xn, Yt && jn), l.createElement(Ru.Provider, { value: nn }, Ln);
}), ns = function() {
  return null;
};
ns.isSelectOptGroup = true;
var rs = function() {
  return null;
};
rs.isSelectOption = true;
var ju = l.forwardRef(function(e2, t) {
  var n = e2.height, r = e2.offsetY, a = e2.offsetX, o = e2.children, i = e2.prefixCls, s = e2.onInnerResize, c = e2.innerProps, u = e2.rtl, d = e2.extra, f = {}, h = { display: "flex", flexDirection: "column" };
  return r !== void 0 && (f = { height: n, position: "relative", overflow: "hidden" }, h = V(V({}, h), {}, D(D(D(D(D({ transform: "translateY(".concat(r, "px)") }, u ? "marginRight" : "marginLeft", -a), "position", "absolute"), "left", 0), "right", 0), "top", 0))), l.createElement("div", { style: f }, l.createElement(Gn, { onResize: function(g) {
    var v = g.offsetHeight;
    v && s && s();
  } }, l.createElement("div", Ie({ style: h, className: Q(D({}, "".concat(i, "-holder-inner"), i)), ref: t }, c), o, d)));
});
ju.displayName = "Filler";
function l0(e2) {
  var t = e2.children, n = e2.setRef, r = l.useCallback(function(a) {
    n(a);
  }, []);
  return l.cloneElement(t, { ref: r });
}
function c0(e2, t, n, r, a, o, i, s) {
  var c = s.getKey;
  return e2.slice(t, n + 1).map(function(u, d) {
    var f = t + d, h = i(u, f, { style: { width: r }, offsetX: a }), p = c(u);
    return l.createElement(l0, { key: p, setRef: function(v) {
      return o(u, v);
    } }, h);
  });
}
function u0(e2, t, n) {
  var r = e2.length, a = t.length, o, i;
  if (r === 0 && a === 0) return null;
  r < a ? (o = e2, i = t) : (o = t, i = e2);
  var s = { __EMPTY_ITEM__: true };
  function c(g) {
    return g !== void 0 ? n(g) : s;
  }
  for (var u = null, d = Math.abs(r - a) !== 1, f = 0; f < i.length; f += 1) {
    var h = c(o[f]), p = c(i[f]);
    if (h !== p) {
      u = f, d = d || h !== c(i[f + 1]);
      break;
    }
  }
  return u === null ? null : { index: u, multiple: d };
}
function d0(e2, t, n) {
  var r = l.useState(e2), a = te(r, 2), o = a[0], i = a[1], s = l.useState(null), c = te(s, 2), u = c[0], d = c[1];
  return l.useEffect(function() {
    var f = u0(o || [], e2 || [], t);
    (f == null ? void 0 : f.index) !== void 0 && d(e2[f.index]), i(e2);
  }, [e2]), [u];
}
var El = (typeof navigator > "u" ? "undefined" : et(navigator)) === "object" && /Firefox/i.test(navigator.userAgent);
const Du = function(e2, t, n, r) {
  var a = l.useRef(false), o = l.useRef(null);
  function i() {
    clearTimeout(o.current), a.current = true, o.current = setTimeout(function() {
      a.current = false;
    }, 50);
  }
  var s = l.useRef({ top: e2, bottom: t, left: n, right: r });
  return s.current.top = e2, s.current.bottom = t, s.current.left = n, s.current.right = r, function(c, u) {
    var d = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false, f = c ? u < 0 && s.current.left || u > 0 && s.current.right : u < 0 && s.current.top || u > 0 && s.current.bottom;
    return d && f ? (clearTimeout(o.current), a.current = false) : (!f || a.current) && i(), !a.current && f;
  };
};
function f0(e2, t, n, r, a, o, i) {
  var s = l.useRef(0), c = l.useRef(null), u = l.useRef(null), d = l.useRef(false), f = Du(t, n, r, a);
  function h(b, C) {
    if (pt.cancel(c.current), !f(false, C)) {
      var x = b;
      if (!x._virtualHandled) x._virtualHandled = true;
      else return;
      s.current += C, u.current = C, El || x.preventDefault(), c.current = pt(function() {
        var I = d.current ? 10 : 1;
        i(s.current * I, false), s.current = 0;
      });
    }
  }
  function p(b, C) {
    i(C, true), El || b.preventDefault();
  }
  var g = l.useRef(null), v = l.useRef(null);
  function m(b) {
    if (e2) {
      pt.cancel(v.current), v.current = pt(function() {
        g.current = null;
      }, 2);
      var C = b.deltaX, x = b.deltaY, I = b.shiftKey, y = C, E = x;
      (g.current === "sx" || !g.current && I && x && !C) && (y = x, E = 0, g.current = "sx");
      var O = Math.abs(y), R = Math.abs(E);
      g.current === null && (g.current = o && O > R ? "x" : "y"), g.current === "y" ? h(b, E) : p(b, y);
    }
  }
  function w(b) {
    e2 && (d.current = b.detail === u.current);
  }
  return [m, w];
}
function m0(e2, t, n, r) {
  var a = l.useMemo(function() {
    return [/* @__PURE__ */ new Map(), []];
  }, [e2, n.id, r]), o = te(a, 2), i = o[0], s = o[1], c = function(d) {
    var f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : d, h = i.get(d), p = i.get(f);
    if (h === void 0 || p === void 0) for (var g = e2.length, v = s.length; v < g; v += 1) {
      var m, w = e2[v], b = t(w);
      i.set(b, v);
      var C = (m = n.get(b)) !== null && m !== void 0 ? m : r;
      if (s[v] = (s[v - 1] || 0) + C, b === d && (h = v), b === f && (p = v), h !== void 0 && p !== void 0) break;
    }
    return { top: s[h - 1] || 0, bottom: s[p] };
  };
  return c;
}
var g0 = function() {
  function e2() {
    fn(this, e2), D(this, "maps", void 0), D(this, "id", 0), D(this, "diffRecords", /* @__PURE__ */ new Map()), this.maps = /* @__PURE__ */ Object.create(null);
  }
  return mn(e2, [{ key: "set", value: function(n, r) {
    this.diffRecords.set(n, this.maps[n]), this.maps[n] = r, this.id += 1;
  } }, { key: "get", value: function(n) {
    return this.maps[n];
  } }, { key: "resetRecord", value: function() {
    this.diffRecords.clear();
  } }, { key: "getRecord", value: function() {
    return this.diffRecords;
  } }]), e2;
}();
function Rl(e2) {
  var t = parseFloat(e2);
  return isNaN(t) ? 0 : t;
}
function h0(e2, t, n) {
  var r = l.useState(0), a = te(r, 2), o = a[0], i = a[1], s = l.useRef(/* @__PURE__ */ new Map()), c = l.useRef(new g0()), u = l.useRef(0);
  function d() {
    u.current += 1;
  }
  function f() {
    var p = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
    d();
    var g = function() {
      var w = false;
      s.current.forEach(function(b, C) {
        if (b && b.offsetParent) {
          var x = b.offsetHeight, I = getComputedStyle(b), y = I.marginTop, E = I.marginBottom, O = Rl(y), R = Rl(E), S = x + O + R;
          c.current.get(C) !== S && (c.current.set(C, S), w = true);
        }
      }), w && i(function(b) {
        return b + 1;
      });
    };
    if (p) g();
    else {
      u.current += 1;
      var v = u.current;
      Promise.resolve().then(function() {
        v === u.current && g();
      });
    }
  }
  function h(p, g) {
    var v = e2(p);
    s.current.get(v), g ? (s.current.set(v, g), f()) : s.current.delete(v);
  }
  return l.useEffect(function() {
    return d;
  }, []), [h, f, c.current, o];
}
var Ol = 14 / 15;
function v0(e2, t, n) {
  var r = l.useRef(false), a = l.useRef(0), o = l.useRef(0), i = l.useRef(null), s = l.useRef(null), c, u = function(p) {
    if (r.current) {
      var g = Math.ceil(p.touches[0].pageX), v = Math.ceil(p.touches[0].pageY), m = a.current - g, w = o.current - v, b = Math.abs(m) > Math.abs(w);
      b ? a.current = g : o.current = v;
      var C = n(b, b ? m : w, false, p);
      C && p.preventDefault(), clearInterval(s.current), C && (s.current = setInterval(function() {
        b ? m *= Ol : w *= Ol;
        var x = Math.floor(b ? m : w);
        (!n(b, x, true) || Math.abs(x) <= 0.1) && clearInterval(s.current);
      }, 16));
    }
  }, d = function() {
    r.current = false, c();
  }, f = function(p) {
    c(), p.touches.length === 1 && !r.current && (r.current = true, a.current = Math.ceil(p.touches[0].pageX), o.current = Math.ceil(p.touches[0].pageY), i.current = p.target, i.current.addEventListener("touchmove", u, { passive: false }), i.current.addEventListener("touchend", d, { passive: true }));
  };
  c = function() {
    i.current && (i.current.removeEventListener("touchmove", u), i.current.removeEventListener("touchend", d));
  }, ut(function() {
    return e2 && t.current.addEventListener("touchstart", f, { passive: true }), function() {
      var h;
      (h = t.current) === null || h === void 0 || h.removeEventListener("touchstart", f), c(), clearInterval(s.current);
    };
  }, [e2]);
}
function Il(e2) {
  return Math.floor(Math.pow(e2, 0.5));
}
function Ai(e2, t) {
  var n = "touches" in e2 ? e2.touches[0] : e2;
  return n[t ? "pageX" : "pageY"] - window[t ? "scrollX" : "scrollY"];
}
function p0(e2, t, n) {
  l.useEffect(function() {
    var r = t.current;
    if (e2 && r) {
      var a = false, o, i, s = function() {
        pt.cancel(o);
      }, c = function h() {
        s(), o = pt(function() {
          n(i), h();
        });
      }, u = function(p) {
        if (!(p.target.draggable || p.button !== 0)) {
          var g = p;
          g._virtualHandled || (g._virtualHandled = true, a = true);
        }
      }, d = function() {
        a = false, s();
      }, f = function(p) {
        if (a) {
          var g = Ai(p, false), v = r.getBoundingClientRect(), m = v.top, w = v.bottom;
          if (g <= m) {
            var b = m - g;
            i = -Il(b), c();
          } else if (g >= w) {
            var C = g - w;
            i = Il(C), c();
          } else s();
        }
      };
      return r.addEventListener("mousedown", u), r.ownerDocument.addEventListener("mouseup", d), r.ownerDocument.addEventListener("mousemove", f), function() {
        r.removeEventListener("mousedown", u), r.ownerDocument.removeEventListener("mouseup", d), r.ownerDocument.removeEventListener("mousemove", f), s();
      };
    }
  }, [e2]);
}
var b0 = 10;
function y0(e2, t, n, r, a, o, i, s) {
  var c = l.useRef(), u = l.useState(null), d = te(u, 2), f = d[0], h = d[1];
  return ut(function() {
    if (f && f.times < b0) {
      if (!e2.current) {
        h(function(z) {
          return V({}, z);
        });
        return;
      }
      o();
      var p = f.targetAlign, g = f.originAlign, v = f.index, m = f.offset, w = e2.current.clientHeight, b = false, C = p, x = null;
      if (w) {
        for (var I = p || g, y = 0, E = 0, O = 0, R = Math.min(t.length - 1, v), S = 0; S <= R; S += 1) {
          var $ = a(t[S]);
          E = y;
          var P = n.get($);
          O = E + (P === void 0 ? r : P), y = O;
        }
        for (var A = I === "top" ? m : w - m, N = R; N >= 0; N -= 1) {
          var T = a(t[N]), M = n.get(T);
          if (M === void 0) {
            b = true;
            break;
          }
          if (A -= M, A <= 0) break;
        }
        switch (I) {
          case "top":
            x = E - m;
            break;
          case "bottom":
            x = O - w + m;
            break;
          default: {
            var _ = e2.current.scrollTop, j = _ + w;
            E < _ ? C = "top" : O > j && (C = "bottom");
          }
        }
        x !== null && i(x), x !== f.lastTop && (b = true);
      }
      b && h(V(V({}, f), {}, { times: f.times + 1, targetAlign: C, lastTop: x }));
    }
  }, [f, e2.current]), function(p) {
    if (p == null) {
      s();
      return;
    }
    if (pt.cancel(c.current), typeof p == "number") i(p);
    else if (p && et(p) === "object") {
      var g, v = p.align;
      "index" in p ? g = p.index : g = t.findIndex(function(b) {
        return a(b) === p.key;
      });
      var m = p.offset, w = m === void 0 ? 0 : m;
      h({ times: 0, index: g, offset: w, originAlign: v });
    }
  };
}
var Al = l.forwardRef(function(e2, t) {
  var n = e2.prefixCls, r = e2.rtl, a = e2.scrollOffset, o = e2.scrollRange, i = e2.onStartMove, s = e2.onStopMove, c = e2.onScroll, u = e2.horizontal, d = e2.spinSize, f = e2.containerSize, h = e2.style, p = e2.thumbStyle, g = e2.showScrollBar, v = l.useState(false), m = te(v, 2), w = m[0], b = m[1], C = l.useState(null), x = te(C, 2), I = x[0], y = x[1], E = l.useState(null), O = te(E, 2), R = O[0], S = O[1], $ = !r, P = l.useRef(), A = l.useRef(), N = l.useState(g), T = te(N, 2), M = T[0], _ = T[1], j = l.useRef(), z = function() {
    g === true || g === false || (clearTimeout(j.current), _(true), j.current = setTimeout(function() {
      _(false);
    }, 3e3));
  }, L = o - f || 0, H = f - d || 0, Y = l.useMemo(function() {
    if (a === 0 || L === 0) return 0;
    var K = a / L;
    return K * H;
  }, [a, L, H]), k = function(q) {
    q.stopPropagation(), q.preventDefault();
  }, F = l.useRef({ top: Y, dragging: w, pageY: I, startTop: R });
  F.current = { top: Y, dragging: w, pageY: I, startTop: R };
  var B = function(q) {
    b(true), y(Ai(q, u)), S(F.current.top), i(), q.stopPropagation(), q.preventDefault();
  };
  l.useEffect(function() {
    var K = function(X) {
      X.preventDefault();
    }, q = P.current, Z = A.current;
    return q.addEventListener("touchstart", K, { passive: false }), Z.addEventListener("touchstart", B, { passive: false }), function() {
      q.removeEventListener("touchstart", K), Z.removeEventListener("touchstart", B);
    };
  }, []);
  var G = l.useRef();
  G.current = L;
  var re = l.useRef();
  re.current = H, l.useEffect(function() {
    if (w) {
      var K, q = function(X) {
        var ee = F.current, le = ee.dragging, se = ee.pageY, de = ee.startTop;
        pt.cancel(K);
        var Oe = P.current.getBoundingClientRect(), xe = f / (u ? Oe.width : Oe.height);
        if (le) {
          var We = (Ai(X, u) - se) * xe, ce = de;
          !$ && u ? ce -= We : ce += We;
          var ue = G.current, pe = re.current, $e = pe ? ce / pe : 0, Fe = Math.ceil($e * ue);
          Fe = Math.max(Fe, 0), Fe = Math.min(Fe, ue), K = pt(function() {
            c(Fe, u);
          });
        }
      }, Z = function() {
        b(false), s();
      };
      return window.addEventListener("mousemove", q, { passive: true }), window.addEventListener("touchmove", q, { passive: true }), window.addEventListener("mouseup", Z, { passive: true }), window.addEventListener("touchend", Z, { passive: true }), function() {
        window.removeEventListener("mousemove", q), window.removeEventListener("touchmove", q), window.removeEventListener("mouseup", Z), window.removeEventListener("touchend", Z), pt.cancel(K);
      };
    }
  }, [w]), l.useEffect(function() {
    return z(), function() {
      clearTimeout(j.current);
    };
  }, [a]), l.useImperativeHandle(t, function() {
    return { delayHidden: z };
  });
  var W = "".concat(n, "-scrollbar"), J = { position: "absolute", visibility: M ? null : "hidden" }, oe = { position: "absolute", background: "rgba(0, 0, 0, 0.5)", borderRadius: 99, cursor: "pointer", userSelect: "none" };
  return u ? (J.height = 8, J.left = 0, J.right = 0, J.bottom = 0, oe.height = "100%", oe.width = d, $ ? oe.left = Y : oe.right = Y) : (J.width = 8, J.top = 0, J.bottom = 0, $ ? J.right = 0 : J.left = 0, oe.width = "100%", oe.height = d, oe.top = Y), l.createElement("div", { ref: P, className: Q(W, D(D(D({}, "".concat(W, "-horizontal"), u), "".concat(W, "-vertical"), !u), "".concat(W, "-visible"), M)), style: V(V({}, J), h), onMouseDown: k, onMouseMove: z }, l.createElement("div", { ref: A, className: Q("".concat(W, "-thumb"), D({}, "".concat(W, "-thumb-moving"), w)), style: V(V({}, oe), p), onMouseDown: B }));
}), w0 = 20;
function Pl() {
  var e2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = e2 / t * e2;
  return isNaN(n) && (n = 0), n = Math.max(n, w0), Math.floor(n);
}
var C0 = ["prefixCls", "className", "height", "itemHeight", "fullHeight", "style", "data", "children", "itemKey", "virtual", "direction", "scrollWidth", "component", "onScroll", "onVirtualScroll", "onVisibleChange", "innerProps", "extraRender", "styles", "showScrollBar"], S0 = [], x0 = { overflowY: "auto", overflowAnchor: "none" };
function $0(e2, t) {
  var n = e2.prefixCls, r = n === void 0 ? "rc-virtual-list" : n, a = e2.className, o = e2.height, i = e2.itemHeight, s = e2.fullHeight, c = s === void 0 ? true : s, u = e2.style, d = e2.data, f = e2.children, h = e2.itemKey, p = e2.virtual, g = e2.direction, v = e2.scrollWidth, m = e2.component, w = m === void 0 ? "div" : m, b = e2.onScroll, C = e2.onVirtualScroll, x = e2.onVisibleChange, I = e2.innerProps, y = e2.extraRender, E = e2.styles, O = e2.showScrollBar, R = O === void 0 ? "optional" : O, S = rt(e2, C0), $ = l.useCallback(function(me) {
    return typeof h == "function" ? h(me) : me == null ? void 0 : me[h];
  }, [h]), P = h0($), A = te(P, 4), N = A[0], T = A[1], M = A[2], _ = A[3], j = !!(p !== false && o && i), z = l.useMemo(function() {
    return Object.values(M.maps).reduce(function(me, ye) {
      return me + ye;
    }, 0);
  }, [M.id, M.maps]), L = j && d && (Math.max(i * d.length, z) > o || !!v), H = g === "rtl", Y = Q(r, D({}, "".concat(r, "-rtl"), H), a), k = d || S0, F = l.useRef(), B = l.useRef(), G = l.useRef(), re = l.useState(0), W = te(re, 2), J = W[0], oe = W[1], K = l.useState(0), q = te(K, 2), Z = q[0], ie = q[1], X = l.useState(false), ee = te(X, 2), le = ee[0], se = ee[1], de = function() {
    se(true);
  }, Oe = function() {
    se(false);
  }, xe = { getKey: $ };
  function We(me) {
    oe(function(ye) {
      var ke;
      typeof me == "function" ? ke = me(ye) : ke = me;
      var Xe = De(ke);
      return F.current.scrollTop = Xe, Xe;
    });
  }
  var ce = l.useRef({ start: 0, end: k.length }), ue = l.useRef(), pe = d0(k, $), $e = te(pe, 1), Fe = $e[0];
  ue.current = Fe;
  var Le = l.useMemo(function() {
    if (!j) return { scrollHeight: void 0, start: 0, end: k.length - 1, offset: void 0 };
    if (!L) {
      var me;
      return { scrollHeight: ((me = B.current) === null || me === void 0 ? void 0 : me.offsetHeight) || 0, start: 0, end: k.length - 1, offset: void 0 };
    }
    for (var ye = 0, ke, Xe, ht, Sn = k.length, Wt = 0; Wt < Sn; Wt += 1) {
      var xn = k[Wt], hn = $(xn), $n = M.get(hn), nn = ye + ($n === void 0 ? i : $n);
      nn >= J && ke === void 0 && (ke = Wt, Xe = ye), nn > J + o && ht === void 0 && (ht = Wt), ye = nn;
    }
    return ke === void 0 && (ke = 0, Xe = 0, ht = Math.ceil(o / i)), ht === void 0 && (ht = k.length - 1), ht = Math.min(ht + 1, k.length - 1), { scrollHeight: ye, start: ke, end: ht, offset: Xe };
  }, [L, j, J, k, _, o]), je = Le.scrollHeight, Ee = Le.start, Be = Le.end, Ke = Le.offset;
  ce.current.start = Ee, ce.current.end = Be, l.useLayoutEffect(function() {
    var me = M.getRecord();
    if (me.size === 1) {
      var ye = Array.from(me.keys())[0], ke = me.get(ye), Xe = k[Ee];
      if (Xe && ke === void 0) {
        var ht = $(Xe);
        if (ht === ye) {
          var Sn = M.get(ye), Wt = Sn - i;
          We(function(xn) {
            return xn + Wt;
          });
        }
      }
    }
    M.resetRecord();
  }, [je]);
  var Me = l.useState({ width: 0, height: o }), be = te(Me, 2), Ae = be[0], Je = be[1], Qe = function(ye) {
    Je({ width: ye.offsetWidth, height: ye.offsetHeight });
  }, st = l.useRef(), ot = l.useRef(), Bt = l.useMemo(function() {
    return Pl(Ae.width, v);
  }, [Ae.width, v]), It = l.useMemo(function() {
    return Pl(Ae.height, je);
  }, [Ae.height, je]), Te = je - o, ge = l.useRef(Te);
  ge.current = Te;
  function De(me) {
    var ye = me;
    return Number.isNaN(ge.current) || (ye = Math.min(ye, ge.current)), ye = Math.max(ye, 0), ye;
  }
  var _e4 = J <= 0, qe = J >= Te, Se = Z <= 0, he = Z >= v, ve = Du(_e4, qe, Se, he), at = function() {
    return { x: H ? -Z : Z, y: J };
  }, gt = l.useRef(at()), we = jt(function(me) {
    if (C) {
      var ye = V(V({}, at()), me);
      (gt.current.x !== ye.x || gt.current.y !== ye.y) && (C(ye), gt.current = ye);
    }
  });
  function Re(me, ye) {
    var ke = me;
    ye ? (Wr.flushSync(function() {
      ie(ke);
    }), we()) : We(ke);
  }
  function Ne(me) {
    var ye = me.currentTarget.scrollTop;
    ye !== J && We(ye), b == null ? void 0 : b(me), we();
  }
  var Pe = function(ye) {
    var ke = ye, Xe = v ? v - Ae.width : 0;
    return ke = Math.max(ke, 0), ke = Math.min(ke, Xe), ke;
  }, Ue = jt(function(me, ye) {
    ye ? (Wr.flushSync(function() {
      ie(function(ke) {
        var Xe = ke + (H ? -me : me);
        return Pe(Xe);
      });
    }), we()) : We(function(ke) {
      var Xe = ke + me;
      return Xe;
    });
  }), tt = f0(j, _e4, qe, Se, he, !!v, Ue), Tt = te(tt, 2), St = Tt[0], At = Tt[1];
  v0(j, F, function(me, ye, ke, Xe) {
    var ht = Xe;
    return ve(me, ye, ke) ? false : !ht || !ht._virtualHandled ? (ht && (ht._virtualHandled = true), St({ preventDefault: function() {
    }, deltaX: me ? ye : 0, deltaY: me ? 0 : ye }), true) : false;
  }), p0(L, F, function(me) {
    We(function(ye) {
      return ye + me;
    });
  }), ut(function() {
    function me(ke) {
      var Xe = _e4 && ke.detail < 0, ht = qe && ke.detail > 0;
      j && !Xe && !ht && ke.preventDefault();
    }
    var ye = F.current;
    return ye.addEventListener("wheel", St, { passive: false }), ye.addEventListener("DOMMouseScroll", At, { passive: true }), ye.addEventListener("MozMousePixelScroll", me, { passive: false }), function() {
      ye.removeEventListener("wheel", St), ye.removeEventListener("DOMMouseScroll", At), ye.removeEventListener("MozMousePixelScroll", me);
    };
  }, [j, _e4, qe]), ut(function() {
    if (v) {
      var me = Pe(Z);
      ie(me), we({ x: me });
    }
  }, [Ae.width, v]);
  var ct = function() {
    var ye, ke;
    (ye = st.current) === null || ye === void 0 || ye.delayHidden(), (ke = ot.current) === null || ke === void 0 || ke.delayHidden();
  }, $t = y0(F, k, M, i, $, function() {
    return T(true);
  }, We, ct);
  l.useImperativeHandle(t, function() {
    return { nativeElement: G.current, getScrollInfo: at, scrollTo: function(ye) {
      function ke(Xe) {
        return Xe && et(Xe) === "object" && ("left" in Xe || "top" in Xe);
      }
      ke(ye) ? (ye.left !== void 0 && ie(Pe(ye.left)), $t(ye.top)) : $t(ye);
    } };
  }), ut(function() {
    if (x) {
      var me = k.slice(Ee, Be + 1);
      x(me, k);
    }
  }, [Ee, Be, k]);
  var _t4 = m0(k, $, M, i), zt = y == null ? void 0 : y({ start: Ee, end: Be, virtual: L, offsetX: Z, offsetY: Ke, rtl: H, getSize: _t4 }), gn = c0(k, Ee, Be, v, Z, N, f, xe), Et = null;
  o && (Et = V(D({}, c ? "height" : "maxHeight", o), x0), j && (Et.overflowY = "hidden", v && (Et.overflowX = "hidden"), le && (Et.pointerEvents = "none")));
  var Mt = {};
  return H && (Mt.dir = "rtl"), l.createElement("div", Ie({ ref: G, style: V(V({}, u), {}, { position: "relative" }), className: Y }, Mt, S), l.createElement(Gn, { onResize: Qe }, l.createElement(w, { className: "".concat(r, "-holder"), style: Et, ref: F, onScroll: Ne, onMouseEnter: ct }, l.createElement(ju, { prefixCls: r, height: je, offsetX: Z, offsetY: Ke, scrollWidth: v, onInnerResize: T, ref: B, innerProps: I, rtl: H, extra: zt }, gn))), L && je > o && l.createElement(Al, { ref: st, prefixCls: r, scrollOffset: J, scrollRange: je, rtl: H, onScroll: Re, onStartMove: de, onStopMove: Oe, spinSize: It, containerSize: Ae.height, style: E == null ? void 0 : E.verticalScrollBar, thumbStyle: E == null ? void 0 : E.verticalScrollBarThumb, showScrollBar: R }), L && v > Ae.width && l.createElement(Al, { ref: ot, prefixCls: r, scrollOffset: Z, scrollRange: v, rtl: H, onScroll: Re, onStartMove: de, onStopMove: Oe, spinSize: Bt, containerSize: Ae.width, horizontal: true, style: E == null ? void 0 : E.horizontalScrollBar, thumbStyle: E == null ? void 0 : E.horizontalScrollBarThumb, showScrollBar: R }));
}
var Lu = l.forwardRef($0);
Lu.displayName = "List";
function E0() {
  return /(mac\sos|macintosh)/i.test(navigator.appVersion);
}
var R0 = ["disabled", "title", "children", "style", "className"];
function Nl(e2) {
  return typeof e2 == "string" || typeof e2 == "number";
}
var O0 = function(t, n) {
  var r = mb(), a = r.prefixCls, o = r.id, i = r.open, s = r.multiple, c = r.mode, u = r.searchValue, d = r.toggleOpen, f = r.notFoundContent, h = r.onPopupScroll, p = l.useContext(ts), g = p.maxCount, v = p.flattenOptions, m = p.onActiveValue, w = p.defaultActiveFirstOption, b = p.onSelect, C = p.menuItemSelectedIcon, x = p.rawValues, I = p.fieldNames, y = p.virtual, E = p.direction, O = p.listHeight, R = p.listItemHeight, S = p.optionRender, $ = "".concat(a, "-item"), P = Pf(function() {
    return v;
  }, [i, v], function(K, q) {
    return q[0] && K[1] !== q[1];
  }), A = l.useRef(null), N = l.useMemo(function() {
    return s && Ri(g) && (x == null ? void 0 : x.size) >= g;
  }, [s, g, x == null ? void 0 : x.size]), T = function(q) {
    q.preventDefault();
  }, M = function(q) {
    var Z;
    (Z = A.current) === null || Z === void 0 || Z.scrollTo(typeof q == "number" ? { index: q } : q);
  }, _ = l.useCallback(function(K) {
    return c === "combobox" ? false : x.has(K);
  }, [c, fe(x).toString(), x.size]), j = function(q) {
    for (var Z = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1, ie = P.length, X = 0; X < ie; X += 1) {
      var ee = (q + X * Z + ie) % ie, le = P[ee] || {}, se = le.group, de = le.data;
      if (!se && !(de != null && de.disabled) && (_(de.value) || !N)) return ee;
    }
    return -1;
  }, z = l.useState(function() {
    return j(0);
  }), L = te(z, 2), H = L[0], Y = L[1], k = function(q) {
    var Z = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    Y(q);
    var ie = { source: Z ? "keyboard" : "mouse" }, X = P[q];
    if (!X) {
      m(null, -1, ie);
      return;
    }
    m(X.value, q, ie);
  };
  l.useEffect(function() {
    k(w !== false ? j(0) : -1);
  }, [P.length, u]);
  var F = l.useCallback(function(K) {
    return c === "combobox" ? String(K).toLowerCase() === u.toLowerCase() : x.has(K);
  }, [c, u, fe(x).toString(), x.size]);
  l.useEffect(function() {
    var K = setTimeout(function() {
      if (!s && i && x.size === 1) {
        var Z = Array.from(x)[0], ie = P.findIndex(function(X) {
          var ee = X.data;
          return ee.value === Z;
        });
        ie !== -1 && (k(ie), M(ie));
      }
    });
    if (i) {
      var q;
      (q = A.current) === null || q === void 0 || q.scrollTo(void 0);
    }
    return function() {
      return clearTimeout(K);
    };
  }, [i, u]);
  var B = function(q) {
    q !== void 0 && b(q, { selected: !x.has(q) }), s || d(false);
  };
  if (l.useImperativeHandle(n, function() {
    return { onKeyDown: function(q) {
      var Z = q.which, ie = q.ctrlKey;
      switch (Z) {
        case He.N:
        case He.P:
        case He.UP:
        case He.DOWN: {
          var X = 0;
          if (Z === He.UP ? X = -1 : Z === He.DOWN ? X = 1 : E0() && ie && (Z === He.N ? X = 1 : Z === He.P && (X = -1)), X !== 0) {
            var ee = j(H + X, X);
            M(ee), k(ee, true);
          }
          break;
        }
        case He.TAB:
        case He.ENTER: {
          var le, se = P[H];
          se && !(se != null && (le = se.data) !== null && le !== void 0 && le.disabled) && !N ? B(se.value) : B(void 0), i && q.preventDefault();
          break;
        }
        case He.ESC:
          d(false), i && q.stopPropagation();
      }
    }, onKeyUp: function() {
    }, scrollTo: function(q) {
      M(q);
    } };
  }), P.length === 0) return l.createElement("div", { role: "listbox", id: "".concat(o, "_list"), className: "".concat($, "-empty"), onMouseDown: T }, f);
  var G = Object.keys(I).map(function(K) {
    return I[K];
  }), re = function(q) {
    return q.label;
  };
  function W(K, q) {
    var Z = K.group;
    return { role: Z ? "presentation" : "option", id: "".concat(o, "_list_").concat(q) };
  }
  var J = function(q) {
    var Z = P[q];
    if (!Z) return null;
    var ie = Z.data || {}, X = ie.value, ee = Z.group, le = nr(ie, true), se = re(Z);
    return Z ? l.createElement("div", Ie({ "aria-label": typeof se == "string" && !ee ? se : null }, le, { key: q }, W(Z, q), { "aria-selected": F(X) }), X) : null;
  }, oe = { role: "listbox", id: "".concat(o, "_list") };
  return l.createElement(l.Fragment, null, y && l.createElement("div", Ie({}, oe, { style: { height: 0, width: 0, overflow: "hidden" } }), J(H - 1), J(H), J(H + 1)), l.createElement(Lu, { itemKey: "key", ref: A, data: P, height: O, itemHeight: R, fullHeight: false, onMouseDown: T, onScroll: h, virtual: y, direction: E, innerProps: y ? null : oe }, function(K, q) {
    var Z = K.group, ie = K.groupOption, X = K.data, ee = K.label, le = K.value, se = X.key;
    if (Z) {
      var de, Oe = (de = X.title) !== null && de !== void 0 ? de : Nl(ee) ? ee.toString() : void 0;
      return l.createElement("div", { className: Q($, "".concat($, "-group"), X.className), title: Oe }, ee !== void 0 ? ee : se);
    }
    var xe = X.disabled, We = X.title;
    X.children;
    var ce = X.style, ue = X.className, pe = rt(X, R0), $e = dn(pe, G), Fe = _(le), Le = xe || !Fe && N, je = "".concat($, "-option"), Ee = Q($, je, ue, D(D(D(D({}, "".concat(je, "-grouped"), ie), "".concat(je, "-active"), H === q && !Le), "".concat(je, "-disabled"), Le), "".concat(je, "-selected"), Fe)), Be = re(K), Ke = !C || typeof C == "function" || Fe, Me = typeof Be == "number" ? Be : Be || le, be = Nl(Me) ? Me.toString() : void 0;
    return We !== void 0 && (be = We), l.createElement("div", Ie({}, nr($e), y ? {} : W(K, q), { "aria-selected": F(le), className: Ee, title: be, onMouseMove: function() {
      H === q || Le || k(q);
    }, onClick: function() {
      Le || B(le);
    }, style: ce }), l.createElement("div", { className: "".concat(je, "-content") }, typeof S == "function" ? S(K, { index: q }) : Me), l.isValidElement(C) || Fe, Ke && l.createElement(ro, { className: "".concat($, "-option-state"), customizeIcon: C, customizeIconProps: { value: le, disabled: Le, isSelected: Fe } }, Fe ? "\u2713" : null));
  }));
}, I0 = l.forwardRef(O0);
const A0 = function(e2, t) {
  var n = l.useRef({ values: /* @__PURE__ */ new Map(), options: /* @__PURE__ */ new Map() }), r = l.useMemo(function() {
    var o = n.current, i = o.values, s = o.options, c = e2.map(function(f) {
      if (f.label === void 0) {
        var h;
        return V(V({}, f), {}, { label: (h = i.get(f.value)) === null || h === void 0 ? void 0 : h.label });
      }
      return f;
    }), u = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map();
    return c.forEach(function(f) {
      u.set(f.value, f), d.set(f.value, t.get(f.value) || s.get(f.value));
    }), n.current.values = u, n.current.options = d, c;
  }, [e2, t]), a = l.useCallback(function(o) {
    return t.get(o) || n.current.options.get(o);
  }, [t]);
  return [r, a];
};
function Vo(e2, t) {
  return Mu(e2).join("").toUpperCase().includes(t);
}
const P0 = function(e2, t, n, r, a) {
  return l.useMemo(function() {
    if (!n || r === false) return e2;
    var o = t.options, i = t.label, s = t.value, c = [], u = typeof r == "function", d = n.toUpperCase(), f = u ? r : function(p, g) {
      return a ? Vo(g[a], d) : g[o] ? Vo(g[i !== "children" ? i : "label"], d) : Vo(g[s], d);
    }, h = u ? function(p) {
      return Oi(p);
    } : function(p) {
      return p;
    };
    return e2.forEach(function(p) {
      if (p[o]) {
        var g = f(n, h(p));
        if (g) c.push(p);
        else {
          var v = p[o].filter(function(m) {
            return f(n, h(m));
          });
          v.length && c.push(V(V({}, p), {}, D({}, o, v)));
        }
        return;
      }
      f(n, h(p)) && c.push(p);
    }), c;
  }, [e2, r, a, n, t]);
};
var Ml = 0, N0 = qr();
function M0() {
  var e2;
  return N0 ? (e2 = Ml, Ml += 1) : e2 = "TEST_OR_SSR", e2;
}
function F0(e2) {
  var t = l.useState(), n = te(t, 2), r = n[0], a = n[1];
  return l.useEffect(function() {
    a("rc_select_".concat(M0()));
  }, []), e2 || r;
}
var T0 = ["children", "value"], _0 = ["children"];
function j0(e2) {
  var t = e2, n = t.key, r = t.props, a = r.children, o = r.value, i = rt(r, T0);
  return V({ key: n, value: o !== void 0 ? o : n, children: a }, i);
}
function Bu(e2) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  return Mn(e2).map(function(n, r) {
    if (!l.isValidElement(n) || !n.type) return null;
    var a = n, o = a.type.isSelectOptGroup, i = a.key, s = a.props, c = s.children, u = rt(s, _0);
    return t || !o ? j0(n) : V(V({ key: "__RC_SELECT_GRP__".concat(i === null ? r : i, "__"), label: i }, u), {}, { options: Bu(c) });
  }).filter(function(n) {
    return n;
  });
}
var D0 = function(t, n, r, a, o) {
  return l.useMemo(function() {
    var i = t, s = !t;
    s && (i = Bu(n));
    var c = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), d = function(p, g, v) {
      v && typeof v == "string" && p.set(g[v], g);
    }, f = function h(p) {
      for (var g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false, v = 0; v < p.length; v += 1) {
        var m = p[v];
        !m[r.options] || g ? (c.set(m[r.value], m), d(u, m, r.label), d(u, m, a), d(u, m, o)) : h(m[r.options], true);
      }
    };
    return f(i), { options: i, valueOptions: c, labelOptions: u };
  }, [t, n, r, a, o]);
};
function Fl(e2) {
  var t = l.useRef();
  t.current = e2;
  var n = l.useCallback(function() {
    return t.current.apply(t, arguments);
  }, []);
  return n;
}
var L0 = ["id", "mode", "prefixCls", "backfill", "fieldNames", "inputValue", "searchValue", "onSearch", "autoClearSearchValue", "onSelect", "onDeselect", "dropdownMatchSelectWidth", "filterOption", "filterSort", "optionFilterProp", "optionLabelProp", "options", "optionRender", "children", "defaultActiveFirstOption", "menuItemSelectedIcon", "virtual", "direction", "listHeight", "listItemHeight", "labelRender", "value", "defaultValue", "labelInValue", "onChange", "maxCount"], B0 = ["inputValue"];
function z0(e2) {
  return !e2 || et(e2) !== "object";
}
var H0 = l.forwardRef(function(e2, t) {
  var n = e2.id, r = e2.mode, a = e2.prefixCls, o = a === void 0 ? "rc-select" : a, i = e2.backfill, s = e2.fieldNames, c = e2.inputValue, u = e2.searchValue, d = e2.onSearch, f = e2.autoClearSearchValue, h = f === void 0 ? true : f, p = e2.onSelect, g = e2.onDeselect, v = e2.dropdownMatchSelectWidth, m = v === void 0 ? true : v, w = e2.filterOption, b = e2.filterSort, C = e2.optionFilterProp, x = e2.optionLabelProp, I = e2.options, y = e2.optionRender, E = e2.children, O = e2.defaultActiveFirstOption, R = e2.menuItemSelectedIcon, S = e2.virtual, $ = e2.direction, P = e2.listHeight, A = P === void 0 ? 200 : P, N = e2.listItemHeight, T = N === void 0 ? 20 : N, M = e2.labelRender, _ = e2.value, j = e2.defaultValue, z = e2.labelInValue, L = e2.onChange, H = e2.maxCount, Y = rt(e2, L0), k = F0(n), F = Ii(r), B = !!(!I && E), G = l.useMemo(function() {
    return w === void 0 && r === "combobox" ? false : w;
  }, [w, r]), re = l.useMemo(function() {
    return _u(s, B);
  }, [JSON.stringify(s), B]), W = yn("", { value: u !== void 0 ? u : c, postState: function(Re) {
    return Re || "";
  } }), J = te(W, 2), oe = J[0], K = J[1], q = D0(I, E, re, C, x), Z = q.valueOptions, ie = q.labelOptions, X = q.options, ee = l.useCallback(function(we) {
    var Re = Mu(we);
    return Re.map(function(Ne) {
      var Pe, Ue, tt, Tt, St;
      if (z0(Ne)) Pe = Ne;
      else {
        var At;
        tt = Ne.key, Ue = Ne.label, Pe = (At = Ne.value) !== null && At !== void 0 ? At : tt;
      }
      var ct = Z.get(Pe);
      if (ct) {
        var $t;
        Ue === void 0 && (Ue = ct == null ? void 0 : ct[x || re.label]), tt === void 0 && (tt = ($t = ct == null ? void 0 : ct.key) !== null && $t !== void 0 ? $t : Pe), Tt = ct == null ? void 0 : ct.disabled, St = ct == null ? void 0 : ct.title;
      }
      return { label: Ue, value: Pe, key: tt, disabled: Tt, title: St };
    });
  }, [re, x, Z]), le = yn(j, { value: _ }), se = te(le, 2), de = se[0], Oe = se[1], xe = l.useMemo(function() {
    var we, Re = F && de === null ? [] : de, Ne = ee(Re);
    return r === "combobox" && Mb((we = Ne[0]) === null || we === void 0 ? void 0 : we.value) ? [] : Ne;
  }, [de, ee, r, F]), We = A0(xe, Z), ce = te(We, 2), ue = ce[0], pe = ce[1], $e = l.useMemo(function() {
    if (!r && ue.length === 1) {
      var we = ue[0];
      if (we.value === null && (we.label === null || we.label === void 0)) return [];
    }
    return ue.map(function(Re) {
      var Ne;
      return V(V({}, Re), {}, { label: (Ne = typeof M == "function" ? M(Re) : Re.label) !== null && Ne !== void 0 ? Ne : Re.value });
    });
  }, [r, ue, M]), Fe = l.useMemo(function() {
    return new Set(ue.map(function(we) {
      return we.value;
    }));
  }, [ue]);
  l.useEffect(function() {
    if (r === "combobox") {
      var we, Re = (we = ue[0]) === null || we === void 0 ? void 0 : we.value;
      K(Nb(Re) ? String(Re) : "");
    }
  }, [ue]);
  var Le = Fl(function(we, Re) {
    var Ne = Re ?? we;
    return D(D({}, re.value, we), re.label, Ne);
  }), je = l.useMemo(function() {
    if (r !== "tags") return X;
    var we = fe(X), Re = function(Pe) {
      return Z.has(Pe);
    };
    return fe(ue).sort(function(Ne, Pe) {
      return Ne.value < Pe.value ? -1 : 1;
    }).forEach(function(Ne) {
      var Pe = Ne.value;
      Re(Pe) || we.push(Le(Pe, Ne.label));
    }), we;
  }, [Le, X, Z, ue, r]), Ee = P0(je, re, oe, G, C), Be = l.useMemo(function() {
    return r !== "tags" || !oe || Ee.some(function(we) {
      return we[C || "value"] === oe;
    }) || Ee.some(function(we) {
      return we[re.value] === oe;
    }) ? Ee : [Le(oe)].concat(fe(Ee));
  }, [Le, C, r, Ee, oe, re]), Ke = function we(Re) {
    var Ne = fe(Re).sort(function(Pe, Ue) {
      return b(Pe, Ue, { searchValue: oe });
    });
    return Ne.map(function(Pe) {
      return Array.isArray(Pe.options) ? V(V({}, Pe), {}, { options: Pe.options.length > 0 ? we(Pe.options) : Pe.options }) : Pe;
    });
  }, Me = l.useMemo(function() {
    return b ? Ke(Be) : Be;
  }, [Be, b, oe]), be = l.useMemo(function() {
    return n0(Me, { fieldNames: re, childrenAsData: B });
  }, [Me, re, B]), Ae = function(Re) {
    var Ne = ee(Re);
    if (Oe(Ne), L && (Ne.length !== ue.length || Ne.some(function(tt, Tt) {
      var St;
      return ((St = ue[Tt]) === null || St === void 0 ? void 0 : St.value) !== (tt == null ? void 0 : tt.value);
    }))) {
      var Pe = z ? Ne : Ne.map(function(tt) {
        return tt.value;
      }), Ue = Ne.map(function(tt) {
        return Oi(pe(tt.value));
      });
      L(F ? Pe : Pe[0], F ? Ue : Ue[0]);
    }
  }, Je = l.useState(null), Qe = te(Je, 2), st = Qe[0], ot = Qe[1], Bt = l.useState(0), It = te(Bt, 2), Te = It[0], ge = It[1], De = O !== void 0 ? O : r !== "combobox", _e4 = l.useCallback(function(we, Re) {
    var Ne = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, Pe = Ne.source, Ue = Pe === void 0 ? "keyboard" : Pe;
    ge(Re), i && r === "combobox" && we !== null && Ue === "keyboard" && ot(String(we));
  }, [i, r]), qe = function(Re, Ne, Pe) {
    var Ue = function() {
      var Et, Mt = pe(Re);
      return [z ? { label: Mt == null ? void 0 : Mt[re.label], value: Re, key: (Et = Mt == null ? void 0 : Mt.key) !== null && Et !== void 0 ? Et : Re } : Re, Oi(Mt)];
    };
    if (Ne && p) {
      var tt = Ue(), Tt = te(tt, 2), St = Tt[0], At = Tt[1];
      p(St, At);
    } else if (!Ne && g && Pe !== "clear") {
      var ct = Ue(), $t = te(ct, 2), _t4 = $t[0], zt = $t[1];
      g(_t4, zt);
    }
  }, Se = Fl(function(we, Re) {
    var Ne, Pe = F ? Re.selected : true;
    Pe ? Ne = F ? [].concat(fe(ue), [we]) : [we] : Ne = ue.filter(function(Ue) {
      return Ue.value !== we;
    }), Ae(Ne), qe(we, Pe), r === "combobox" ? ot("") : (!Ii || h) && (K(""), ot(""));
  }), he = function(Re, Ne) {
    Ae(Re);
    var Pe = Ne.type, Ue = Ne.values;
    (Pe === "remove" || Pe === "clear") && Ue.forEach(function(tt) {
      qe(tt.value, false, Pe);
    });
  }, ve = function(Re, Ne) {
    if (K(Re), ot(null), Ne.source === "submit") {
      var Pe = (Re || "").trim();
      if (Pe) {
        var Ue = Array.from(new Set([].concat(fe(Fe), [Pe])));
        Ae(Ue), qe(Pe, true), K("");
      }
      return;
    }
    Ne.source !== "blur" && (r === "combobox" && Ae(Re), d == null ? void 0 : d(Re));
  }, at = function(Re) {
    var Ne = Re;
    r !== "tags" && (Ne = Re.map(function(Ue) {
      var tt = ie.get(Ue);
      return tt == null ? void 0 : tt.value;
    }).filter(function(Ue) {
      return Ue !== void 0;
    }));
    var Pe = Array.from(new Set([].concat(fe(Fe), fe(Ne))));
    Ae(Pe), Pe.forEach(function(Ue) {
      qe(Ue, true);
    });
  }, gt = l.useMemo(function() {
    var we = S !== false && m !== false;
    return V(V({}, q), {}, { flattenOptions: be, onActiveValue: _e4, defaultActiveFirstOption: De, onSelect: Se, menuItemSelectedIcon: R, rawValues: Fe, fieldNames: re, virtual: we, direction: $, listHeight: A, listItemHeight: T, childrenAsData: B, maxCount: H, optionRender: y });
  }, [H, q, be, _e4, De, Se, R, Fe, re, S, m, $, A, T, B, y]);
  return l.createElement(ts.Provider, { value: gt }, l.createElement(s0, Ie({}, Y, { id: k, prefixCls: o, ref: t, omitDomProps: B0, mode: r, displayValues: $e, onDisplayValuesChange: he, direction: $, searchValue: oe, onSearch: ve, autoClearSearchValue: h, onSearchSplit: at, dropdownMatchSelectWidth: m, OptionList: I0, emptyOptions: !be.length, activeValue: st, activeDescendantId: "".concat(k, "_list_").concat(Te) })));
}), as = H0;
as.Option = rs;
as.OptGroup = ns;
function Cr(e2, t, n) {
  return Q({ [`${e2}-status-success`]: t === "success", [`${e2}-status-warning`]: t === "warning", [`${e2}-status-error`]: t === "error", [`${e2}-status-validating`]: t === "validating", [`${e2}-has-feedback`]: n });
}
const aa = (e2, t) => t || e2, V0 = (e2) => {
  const { componentName: t } = e2, { getPrefixCls: n } = l.useContext(ft), r = n("empty");
  switch (t) {
    case "Table":
    case "List":
      return ae.createElement(Mr, { image: Mr.PRESENTED_IMAGE_SIMPLE });
    case "Select":
    case "TreeSelect":
    case "Cascader":
    case "Transfer":
    case "Mentions":
      return ae.createElement(Mr, { image: Mr.PRESENTED_IMAGE_SIMPLE, className: `${r}-small` });
    case "Table.filter":
      return null;
    default:
      return ae.createElement(Mr, null);
  }
}, ao = function(e2, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0;
  var r, a;
  const { variant: o, [e2]: i } = l.useContext(ft), s = l.useContext(Eu), c = i == null ? void 0 : i.variant;
  let u;
  typeof t < "u" ? u = t : n === false ? u = "borderless" : u = (a = (r = s ?? c) !== null && r !== void 0 ? r : o) !== null && a !== void 0 ? a : "outlined";
  const d = Nf.includes(u);
  return [u, d];
}, W0 = (e2) => {
  const n = { overflow: { adjustX: true, adjustY: true, shiftY: true }, htmlRegion: e2 === "scroll" ? "scroll" : "visible", dynamicInset: true };
  return { bottomLeft: Object.assign(Object.assign({}, n), { points: ["tl", "bl"], offset: [0, 4] }), bottomRight: Object.assign(Object.assign({}, n), { points: ["tr", "br"], offset: [0, 4] }), topLeft: Object.assign(Object.assign({}, n), { points: ["bl", "tl"], offset: [0, -4] }), topRight: Object.assign(Object.assign({}, n), { points: ["br", "tr"], offset: [0, -4] }) };
};
function q0(e2, t) {
  return e2 || W0(t);
}
const Tl = (e2) => {
  const { optionHeight: t, optionFontSize: n, optionLineHeight: r, optionPadding: a } = e2;
  return { position: "relative", display: "block", minHeight: t, padding: a, color: e2.colorText, fontWeight: "normal", fontSize: n, lineHeight: r, boxSizing: "border-box" };
}, U0 = (e2) => {
  const { antCls: t, componentCls: n } = e2, r = `${n}-item`, a = `&${t}-slide-up-enter${t}-slide-up-enter-active`, o = `&${t}-slide-up-appear${t}-slide-up-appear-active`, i = `&${t}-slide-up-leave${t}-slide-up-leave-active`, s = `${n}-dropdown-placement-`, c = `${r}-option-selected`;
  return [{ [`${n}-dropdown`]: Object.assign(Object.assign({}, Ut(e2)), { position: "absolute", top: -9999, zIndex: e2.zIndexPopup, boxSizing: "border-box", padding: e2.paddingXXS, overflow: "hidden", fontSize: e2.fontSize, fontVariant: "initial", backgroundColor: e2.colorBgElevated, borderRadius: e2.borderRadiusLG, outline: "none", boxShadow: e2.boxShadowSecondary, [`
          ${a}${s}bottomLeft,
          ${o}${s}bottomLeft
        `]: { animationName: ou }, [`
          ${a}${s}topLeft,
          ${o}${s}topLeft,
          ${a}${s}topRight,
          ${o}${s}topRight
        `]: { animationName: su }, [`${i}${s}bottomLeft`]: { animationName: iu }, [`
          ${i}${s}topLeft,
          ${i}${s}topRight
        `]: { animationName: lu }, "&-hidden": { display: "none" }, [r]: Object.assign(Object.assign({}, Tl(e2)), { cursor: "pointer", transition: `background ${e2.motionDurationSlow} ease`, borderRadius: e2.borderRadiusSM, "&-group": { color: e2.colorTextDescription, fontSize: e2.fontSizeSM, cursor: "default" }, "&-option": { display: "flex", "&-content": Object.assign({ flex: "auto" }, ri), "&-state": { flex: "none", display: "flex", alignItems: "center" }, [`&-active:not(${r}-option-disabled)`]: { backgroundColor: e2.optionActiveBg }, [`&-selected:not(${r}-option-disabled)`]: { color: e2.optionSelectedColor, fontWeight: e2.optionSelectedFontWeight, backgroundColor: e2.optionSelectedBg, [`${r}-option-state`]: { color: e2.colorPrimary } }, "&-disabled": { [`&${r}-option-selected`]: { backgroundColor: e2.colorBgContainerDisabled }, color: e2.colorTextDisabled, cursor: "not-allowed" }, "&-grouped": { paddingInlineStart: e2.calc(e2.controlPaddingHorizontal).mul(2).equal() } }, "&-empty": Object.assign(Object.assign({}, Tl(e2)), { color: e2.colorTextDisabled }) }), [`${c}:has(+ ${c})`]: { borderEndStartRadius: 0, borderEndEndRadius: 0, [`& + ${c}`]: { borderStartStartRadius: 0, borderStartEndRadius: 0 } }, "&-rtl": { direction: "rtl" } }) }, Ys(e2, "slide-up"), Ys(e2, "slide-down"), Xs(e2, "move-up"), Xs(e2, "move-down")];
}, k0 = (e2) => {
  const { multipleSelectItemHeight: t, paddingXXS: n, lineWidth: r, INTERNAL_FIXED_ITEM_MARGIN: a } = e2, o = e2.max(e2.calc(n).sub(r).equal(), 0), i = e2.max(e2.calc(o).sub(a).equal(), 0);
  return { basePadding: o, containerPadding: i, itemHeight: ne(t), itemLineHeight: ne(e2.calc(t).sub(e2.calc(e2.lineWidth).mul(2)).equal()) };
}, G0 = (e2) => {
  const { multipleSelectItemHeight: t, selectHeight: n, lineWidth: r } = e2;
  return e2.calc(n).sub(t).div(2).sub(r).equal();
}, K0 = (e2) => {
  const { componentCls: t, iconCls: n, borderRadiusSM: r, motionDurationSlow: a, paddingXS: o, multipleItemColorDisabled: i, multipleItemBorderColorDisabled: s, colorIcon: c, colorIconHover: u, INTERNAL_FIXED_ITEM_MARGIN: d } = e2;
  return { [`${t}-selection-overflow`]: { position: "relative", display: "flex", flex: "auto", flexWrap: "wrap", maxWidth: "100%", "&-item": { flex: "none", alignSelf: "center", maxWidth: "100%", display: "inline-flex" }, [`${t}-selection-item`]: { display: "flex", alignSelf: "center", flex: "none", boxSizing: "border-box", maxWidth: "100%", marginBlock: d, borderRadius: r, cursor: "default", transition: `font-size ${a}, line-height ${a}, height ${a}`, marginInlineEnd: e2.calc(d).mul(2).equal(), paddingInlineStart: o, paddingInlineEnd: e2.calc(o).div(2).equal(), [`${t}-disabled&`]: { color: i, borderColor: s, cursor: "not-allowed" }, "&-content": { display: "inline-block", marginInlineEnd: e2.calc(o).div(2).equal(), overflow: "hidden", whiteSpace: "pre", textOverflow: "ellipsis" }, "&-remove": Object.assign(Object.assign({}, Jr()), { display: "inline-flex", alignItems: "center", color: c, fontWeight: "bold", fontSize: 10, lineHeight: "inherit", cursor: "pointer", [`> ${n}`]: { verticalAlign: "-0.2em" }, "&:hover": { color: u } }) } } };
}, X0 = (e2, t) => {
  const { componentCls: n, INTERNAL_FIXED_ITEM_MARGIN: r } = e2, a = `${n}-selection-overflow`, o = e2.multipleSelectItemHeight, i = G0(e2), s = t ? `${n}-${t}` : "", c = k0(e2);
  return { [`${n}-multiple${s}`]: Object.assign(Object.assign({}, K0(e2)), { [`${n}-selector`]: { display: "flex", alignItems: "center", width: "100%", height: "100%", paddingInline: c.basePadding, paddingBlock: c.containerPadding, borderRadius: e2.borderRadius, [`${n}-disabled&`]: { background: e2.multipleSelectorBgDisabled, cursor: "not-allowed" }, "&:after": { display: "inline-block", width: 0, margin: `${ne(r)} 0`, lineHeight: ne(o), visibility: "hidden", content: '"\\a0"' } }, [`${n}-selection-item`]: { height: c.itemHeight, lineHeight: ne(c.itemLineHeight) }, [`${n}-selection-wrap`]: { alignSelf: "flex-start", "&:after": { lineHeight: ne(o), marginBlock: r } }, [`${n}-prefix`]: { marginInlineStart: e2.calc(e2.inputPaddingHorizontalBase).sub(c.basePadding).equal() }, [`${a}-item + ${a}-item,
        ${n}-prefix + ${n}-selection-wrap
      `]: { [`${n}-selection-search`]: { marginInlineStart: 0 }, [`${n}-selection-placeholder`]: { insetInlineStart: 0 } }, [`${a}-item-suffix`]: { minHeight: c.itemHeight, marginBlock: r }, [`${n}-selection-search`]: { display: "inline-flex", position: "relative", maxWidth: "100%", marginInlineStart: e2.calc(e2.inputPaddingHorizontalBase).sub(i).equal(), "\n          &-input,\n          &-mirror\n        ": { height: o, fontFamily: e2.fontFamily, lineHeight: ne(o), transition: `all ${e2.motionDurationSlow}` }, "&-input": { width: "100%", minWidth: 4.1 }, "&-mirror": { position: "absolute", top: 0, insetInlineStart: 0, insetInlineEnd: "auto", zIndex: 999, whiteSpace: "pre", visibility: "hidden" } }, [`${n}-selection-placeholder`]: { position: "absolute", top: "50%", insetInlineStart: e2.calc(e2.inputPaddingHorizontalBase).sub(c.basePadding).equal(), insetInlineEnd: e2.inputPaddingHorizontalBase, transform: "translateY(-50%)", transition: `all ${e2.motionDurationSlow}` } }) };
};
function Wo(e2, t) {
  const { componentCls: n } = e2, r = t ? `${n}-${t}` : "", a = { [`${n}-multiple${r}`]: { fontSize: e2.fontSize, [`${n}-selector`]: { [`${n}-show-search&`]: { cursor: "text" } }, [`
        &${n}-show-arrow ${n}-selector,
        &${n}-allow-clear ${n}-selector
      `]: { paddingInlineEnd: e2.calc(e2.fontSizeIcon).add(e2.controlPaddingHorizontal).equal() } } };
  return [X0(e2, t), a];
}
const Y0 = (e2) => {
  const { componentCls: t } = e2, n = mt(e2, { selectHeight: e2.controlHeightSM, multipleSelectItemHeight: e2.multipleItemHeightSM, borderRadius: e2.borderRadiusSM, borderRadiusSM: e2.borderRadiusXS }), r = mt(e2, { fontSize: e2.fontSizeLG, selectHeight: e2.controlHeightLG, multipleSelectItemHeight: e2.multipleItemHeightLG, borderRadius: e2.borderRadiusLG, borderRadiusSM: e2.borderRadius });
  return [Wo(e2), Wo(n, "sm"), { [`${t}-multiple${t}-sm`]: { [`${t}-selection-placeholder`]: { insetInline: e2.calc(e2.controlPaddingHorizontalSM).sub(e2.lineWidth).equal() }, [`${t}-selection-search`]: { marginInlineStart: 2 } } }, Wo(r, "lg")];
};
function qo(e2, t) {
  const { componentCls: n, inputPaddingHorizontalBase: r, borderRadius: a } = e2, o = e2.calc(e2.controlHeight).sub(e2.calc(e2.lineWidth).mul(2)).equal(), i = t ? `${n}-${t}` : "";
  return { [`${n}-single${i}`]: { fontSize: e2.fontSize, height: e2.controlHeight, [`${n}-selector`]: Object.assign(Object.assign({}, Ut(e2, true)), { display: "flex", borderRadius: a, flex: "1 1 auto", [`${n}-selection-wrap:after`]: { lineHeight: ne(o) }, [`${n}-selection-search`]: { position: "absolute", inset: 0, width: "100%", "&-input": { width: "100%", WebkitAppearance: "textfield" } }, [`
          ${n}-selection-item,
          ${n}-selection-placeholder
        `]: { display: "block", padding: 0, lineHeight: ne(o), transition: `all ${e2.motionDurationSlow}, visibility 0s`, alignSelf: "center" }, [`${n}-selection-placeholder`]: { transition: "none", pointerEvents: "none" }, [["&:after", `${n}-selection-item:empty:after`, `${n}-selection-placeholder:empty:after`].join(",")]: { display: "inline-block", width: 0, visibility: "hidden", content: '"\\a0"' } }), [`
        &${n}-show-arrow ${n}-selection-item,
        &${n}-show-arrow ${n}-selection-search,
        &${n}-show-arrow ${n}-selection-placeholder
      `]: { paddingInlineEnd: e2.showArrowPaddingInlineEnd }, [`&${n}-open ${n}-selection-item`]: { color: e2.colorTextPlaceholder }, [`&:not(${n}-customize-input)`]: { [`${n}-selector`]: { width: "100%", height: "100%", alignItems: "center", padding: `0 ${ne(r)}`, [`${n}-selection-search-input`]: { height: o, fontSize: e2.fontSize }, "&:after": { lineHeight: ne(o) } } }, [`&${n}-customize-input`]: { [`${n}-selector`]: { "&:after": { display: "none" }, [`${n}-selection-search`]: { position: "static", width: "100%" }, [`${n}-selection-placeholder`]: { position: "absolute", insetInlineStart: 0, insetInlineEnd: 0, padding: `0 ${ne(r)}`, "&:after": { display: "none" } } } } } };
}
function Q0(e2) {
  const { componentCls: t } = e2, n = e2.calc(e2.controlPaddingHorizontalSM).sub(e2.lineWidth).equal();
  return [qo(e2), qo(mt(e2, { controlHeight: e2.controlHeightSM, borderRadius: e2.borderRadiusSM }), "sm"), { [`${t}-single${t}-sm`]: { [`&:not(${t}-customize-input)`]: { [`${t}-selector`]: { padding: `0 ${ne(n)}` }, [`&${t}-show-arrow ${t}-selection-search`]: { insetInlineEnd: e2.calc(n).add(e2.calc(e2.fontSize).mul(1.5)).equal() }, [`
            &${t}-show-arrow ${t}-selection-item,
            &${t}-show-arrow ${t}-selection-placeholder
          `]: { paddingInlineEnd: e2.calc(e2.fontSize).mul(1.5).equal() } } } }, qo(mt(e2, { controlHeight: e2.singleItemHeightLG, fontSize: e2.fontSizeLG, borderRadius: e2.borderRadiusLG }), "lg")];
}
const J0 = (e2) => {
  const { fontSize: t, lineHeight: n, lineWidth: r, controlHeight: a, controlHeightSM: o, controlHeightLG: i, paddingXXS: s, controlPaddingHorizontal: c, zIndexPopupBase: u, colorText: d, fontWeightStrong: f, controlItemBgActive: h, controlItemBgHover: p, colorBgContainer: g, colorFillSecondary: v, colorBgContainerDisabled: m, colorTextDisabled: w, colorPrimaryHover: b, colorPrimary: C, controlOutline: x } = e2, I = s * 2, y = r * 2, E = Math.min(a - I, a - y), O = Math.min(o - I, o - y), R = Math.min(i - I, i - y);
  return { INTERNAL_FIXED_ITEM_MARGIN: Math.floor(s / 2), zIndexPopup: u + 50, optionSelectedColor: d, optionSelectedFontWeight: f, optionSelectedBg: h, optionActiveBg: p, optionPadding: `${(a - t * n) / 2}px ${c}px`, optionFontSize: t, optionLineHeight: n, optionHeight: a, selectorBg: g, clearBg: g, singleItemHeightLG: i, multipleItemBg: v, multipleItemBorderColor: "transparent", multipleItemHeight: E, multipleItemHeightSM: O, multipleItemHeightLG: R, multipleSelectorBgDisabled: m, multipleItemColorDisabled: w, multipleItemBorderColorDisabled: "transparent", showArrowPaddingInlineEnd: Math.ceil(e2.fontSize * 1.25), hoverBorderColor: b, activeBorderColor: C, activeOutlineColor: x, selectAffixPadding: s };
}, zu = (e2, t) => {
  const { componentCls: n, antCls: r, controlOutlineWidth: a } = e2;
  return { [`&:not(${n}-customize-input) ${n}-selector`]: { border: `${ne(e2.lineWidth)} ${e2.lineType} ${t.borderColor}`, background: e2.selectorBg }, [`&:not(${n}-disabled):not(${n}-customize-input):not(${r}-pagination-size-changer)`]: { [`&:hover ${n}-selector`]: { borderColor: t.hoverBorderHover }, [`${n}-focused& ${n}-selector`]: { borderColor: t.activeBorderColor, boxShadow: `0 0 0 ${ne(a)} ${t.activeOutlineColor}`, outline: 0 }, [`${n}-prefix`]: { color: t.color } } };
}, _l = (e2, t) => ({ [`&${e2.componentCls}-status-${t.status}`]: Object.assign({}, zu(e2, t)) }), Z0 = (e2) => ({ "&-outlined": Object.assign(Object.assign(Object.assign(Object.assign({}, zu(e2, { borderColor: e2.colorBorder, hoverBorderHover: e2.hoverBorderColor, activeBorderColor: e2.activeBorderColor, activeOutlineColor: e2.activeOutlineColor, color: e2.colorText })), _l(e2, { status: "error", borderColor: e2.colorError, hoverBorderHover: e2.colorErrorHover, activeBorderColor: e2.colorError, activeOutlineColor: e2.colorErrorOutline, color: e2.colorError })), _l(e2, { status: "warning", borderColor: e2.colorWarning, hoverBorderHover: e2.colorWarningHover, activeBorderColor: e2.colorWarning, activeOutlineColor: e2.colorWarningOutline, color: e2.colorWarning })), { [`&${e2.componentCls}-disabled`]: { [`&:not(${e2.componentCls}-customize-input) ${e2.componentCls}-selector`]: { background: e2.colorBgContainerDisabled, color: e2.colorTextDisabled } }, [`&${e2.componentCls}-multiple ${e2.componentCls}-selection-item`]: { background: e2.multipleItemBg, border: `${ne(e2.lineWidth)} ${e2.lineType} ${e2.multipleItemBorderColor}` } }) }), Hu = (e2, t) => {
  const { componentCls: n, antCls: r } = e2;
  return { [`&:not(${n}-customize-input) ${n}-selector`]: { background: t.bg, border: `${ne(e2.lineWidth)} ${e2.lineType} transparent`, color: t.color }, [`&:not(${n}-disabled):not(${n}-customize-input):not(${r}-pagination-size-changer)`]: { [`&:hover ${n}-selector`]: { background: t.hoverBg }, [`${n}-focused& ${n}-selector`]: { background: e2.selectorBg, borderColor: t.activeBorderColor, outline: 0 } } };
}, jl = (e2, t) => ({ [`&${e2.componentCls}-status-${t.status}`]: Object.assign({}, Hu(e2, t)) }), ey = (e2) => ({ "&-filled": Object.assign(Object.assign(Object.assign(Object.assign({}, Hu(e2, { bg: e2.colorFillTertiary, hoverBg: e2.colorFillSecondary, activeBorderColor: e2.activeBorderColor, color: e2.colorText })), jl(e2, { status: "error", bg: e2.colorErrorBg, hoverBg: e2.colorErrorBgHover, activeBorderColor: e2.colorError, color: e2.colorError })), jl(e2, { status: "warning", bg: e2.colorWarningBg, hoverBg: e2.colorWarningBgHover, activeBorderColor: e2.colorWarning, color: e2.colorWarning })), { [`&${e2.componentCls}-disabled`]: { [`&:not(${e2.componentCls}-customize-input) ${e2.componentCls}-selector`]: { borderColor: e2.colorBorder, background: e2.colorBgContainerDisabled, color: e2.colorTextDisabled } }, [`&${e2.componentCls}-multiple ${e2.componentCls}-selection-item`]: { background: e2.colorBgContainer, border: `${ne(e2.lineWidth)} ${e2.lineType} ${e2.colorSplit}` } }) }), ty = (e2) => ({ "&-borderless": { [`${e2.componentCls}-selector`]: { background: "transparent", border: `${ne(e2.lineWidth)} ${e2.lineType} transparent` }, [`&${e2.componentCls}-disabled`]: { [`&:not(${e2.componentCls}-customize-input) ${e2.componentCls}-selector`]: { color: e2.colorTextDisabled } }, [`&${e2.componentCls}-multiple ${e2.componentCls}-selection-item`]: { background: e2.multipleItemBg, border: `${ne(e2.lineWidth)} ${e2.lineType} ${e2.multipleItemBorderColor}` }, [`&${e2.componentCls}-status-error`]: { [`${e2.componentCls}-prefix, ${e2.componentCls}-selection-item`]: { color: e2.colorError } }, [`&${e2.componentCls}-status-warning`]: { [`${e2.componentCls}-prefix, ${e2.componentCls}-selection-item`]: { color: e2.colorWarning } } } }), Vu = (e2, t) => {
  const { componentCls: n, antCls: r } = e2;
  return { [`&:not(${n}-customize-input) ${n}-selector`]: { borderWidth: `0 0 ${ne(e2.lineWidth)} 0`, borderStyle: `none none ${e2.lineType} none`, borderColor: t.borderColor, background: e2.selectorBg, borderRadius: 0 }, [`&:not(${n}-disabled):not(${n}-customize-input):not(${r}-pagination-size-changer)`]: { [`&:hover ${n}-selector`]: { borderColor: t.hoverBorderHover }, [`${n}-focused& ${n}-selector`]: { borderColor: t.activeBorderColor, outline: 0 }, [`${n}-prefix`]: { color: t.color } } };
}, Dl = (e2, t) => ({ [`&${e2.componentCls}-status-${t.status}`]: Object.assign({}, Vu(e2, t)) }), ny = (e2) => ({ "&-underlined": Object.assign(Object.assign(Object.assign(Object.assign({}, Vu(e2, { borderColor: e2.colorBorder, hoverBorderHover: e2.hoverBorderColor, activeBorderColor: e2.activeBorderColor, activeOutlineColor: e2.activeOutlineColor, color: e2.colorText })), Dl(e2, { status: "error", borderColor: e2.colorError, hoverBorderHover: e2.colorErrorHover, activeBorderColor: e2.colorError, activeOutlineColor: e2.colorErrorOutline, color: e2.colorError })), Dl(e2, { status: "warning", borderColor: e2.colorWarning, hoverBorderHover: e2.colorWarningHover, activeBorderColor: e2.colorWarning, activeOutlineColor: e2.colorWarningOutline, color: e2.colorWarning })), { [`&${e2.componentCls}-disabled`]: { [`&:not(${e2.componentCls}-customize-input) ${e2.componentCls}-selector`]: { color: e2.colorTextDisabled } }, [`&${e2.componentCls}-multiple ${e2.componentCls}-selection-item`]: { background: e2.multipleItemBg, border: `${ne(e2.lineWidth)} ${e2.lineType} ${e2.multipleItemBorderColor}` } }) }), ry = (e2) => ({ [e2.componentCls]: Object.assign(Object.assign(Object.assign(Object.assign({}, Z0(e2)), ey(e2)), ty(e2)), ny(e2)) }), ay = (e2) => {
  const { componentCls: t } = e2;
  return { position: "relative", transition: `all ${e2.motionDurationMid} ${e2.motionEaseInOut}`, input: { cursor: "pointer" }, [`${t}-show-search&`]: { cursor: "text", input: { cursor: "auto", color: "inherit", height: "100%" } }, [`${t}-disabled&`]: { cursor: "not-allowed", input: { cursor: "not-allowed" } } };
}, oy = (e2) => {
  const { componentCls: t } = e2;
  return { [`${t}-selection-search-input`]: { margin: 0, padding: 0, background: "transparent", border: "none", outline: "none", appearance: "none", fontFamily: "inherit", "&::-webkit-search-cancel-button": { display: "none", appearance: "none" } } };
}, iy = (e2) => {
  const { antCls: t, componentCls: n, inputPaddingHorizontalBase: r, iconCls: a } = e2, o = { [`${n}-clear`]: { opacity: 1, background: e2.colorBgBase, borderRadius: "50%" } };
  return { [n]: Object.assign(Object.assign({}, Ut(e2)), { position: "relative", display: "inline-flex", cursor: "pointer", [`&:not(${n}-customize-input) ${n}-selector`]: Object.assign(Object.assign({}, ay(e2)), oy(e2)), [`${n}-selection-item`]: Object.assign(Object.assign({ flex: 1, fontWeight: "normal", position: "relative", userSelect: "none" }, ri), { [`> ${t}-typography`]: { display: "inline" } }), [`${n}-selection-placeholder`]: Object.assign(Object.assign({}, ri), { flex: 1, color: e2.colorTextPlaceholder, pointerEvents: "none" }), [`${n}-arrow`]: Object.assign(Object.assign({}, Jr()), { position: "absolute", top: "50%", insetInlineStart: "auto", insetInlineEnd: r, height: e2.fontSizeIcon, marginTop: e2.calc(e2.fontSizeIcon).mul(-1).div(2).equal(), color: e2.colorTextQuaternary, fontSize: e2.fontSizeIcon, lineHeight: 1, textAlign: "center", pointerEvents: "none", display: "flex", alignItems: "center", transition: `opacity ${e2.motionDurationSlow} ease`, [a]: { verticalAlign: "top", transition: `transform ${e2.motionDurationSlow}`, "> svg": { verticalAlign: "top" }, [`&:not(${n}-suffix)`]: { pointerEvents: "auto" } }, [`${n}-disabled &`]: { cursor: "not-allowed" }, "> *:not(:last-child)": { marginInlineEnd: 8 } }), [`${n}-selection-wrap`]: { display: "flex", width: "100%", position: "relative", minWidth: 0, "&:after": { content: '"\\a0"', width: 0, overflow: "hidden" } }, [`${n}-prefix`]: { flex: "none", marginInlineEnd: e2.selectAffixPadding }, [`${n}-clear`]: { position: "absolute", top: "50%", insetInlineStart: "auto", insetInlineEnd: r, zIndex: 1, display: "inline-block", width: e2.fontSizeIcon, height: e2.fontSizeIcon, marginTop: e2.calc(e2.fontSizeIcon).mul(-1).div(2).equal(), color: e2.colorTextQuaternary, fontSize: e2.fontSizeIcon, fontStyle: "normal", lineHeight: 1, textAlign: "center", textTransform: "none", cursor: "pointer", opacity: 0, transition: `color ${e2.motionDurationMid} ease, opacity ${e2.motionDurationSlow} ease`, textRendering: "auto", "&:before": { display: "block" }, "&:hover": { color: e2.colorIcon } }, "@media(hover:none)": o, "&:hover": o }), [`${n}-status`]: { "&-error, &-warning, &-success, &-validating": { [`&${n}-has-feedback`]: { [`${n}-clear`]: { insetInlineEnd: e2.calc(r).add(e2.fontSize).add(e2.paddingXS).equal() } } } } };
}, sy = (e2) => {
  const { componentCls: t } = e2;
  return [{ [t]: { [`&${t}-in-form-item`]: { width: "100%" } } }, iy(e2), Q0(e2), Y0(e2), U0(e2), { [`${t}-rtl`]: { direction: "rtl" } }, eo(e2, { borderElCls: `${t}-selector`, focusElCls: `${t}-focused` })];
}, ly = Lt("Select", (e2, t) => {
  let { rootPrefixCls: n } = t;
  const r = mt(e2, { rootPrefixCls: n, inputPaddingHorizontalBase: e2.calc(e2.paddingSM).sub(1).equal(), multipleSelectItemHeight: e2.multipleItemHeight, selectHeight: e2.controlHeight });
  return [sy(r), ry(r)];
}, J0, { unitless: { optionLineHeight: true, optionSelectedFontWeight: true } });
var cy = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z" } }] }, name: "check", theme: "outlined" }, uy = function(t, n) {
  return l.createElement(Ft, Ie({}, t, { ref: n, icon: cy }));
}, dy = l.forwardRef(uy), fy = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z" } }] }, name: "down", theme: "outlined" }, my = function(t, n) {
  return l.createElement(Ft, Ie({}, t, { ref: n, icon: fy }));
}, Wu = l.forwardRef(my), gy = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" } }] }, name: "search", theme: "outlined" }, hy = function(t, n) {
  return l.createElement(Ft, Ie({}, t, { ref: n, icon: gy }));
}, qu = l.forwardRef(hy);
function vy(e2) {
  let { suffixIcon: t, clearIcon: n, menuItemSelectedIcon: r, removeIcon: a, loading: o, multiple: i, hasFeedback: s, prefixCls: c, showSuffixIcon: u, feedbackIcon: d, showArrow: f, componentName: h } = e2;
  const p = n ?? l.createElement(Wi, null), g = (b) => t === null && !s && !f ? null : l.createElement(l.Fragment, null, u !== false && b, s && d);
  let v = null;
  if (t !== void 0) v = g(t);
  else if (o) v = g(l.createElement(Ua, { spin: true }));
  else {
    const b = `${c}-suffix`;
    v = (C) => {
      let { open: x, showSearch: I } = C;
      return g(x && I ? l.createElement(qu, { className: b }) : l.createElement(Wu, { className: b }));
    };
  }
  let m = null;
  r !== void 0 ? m = r : i ? m = l.createElement(dy, null) : m = null;
  let w = null;
  return a !== void 0 ? w = a : w = l.createElement(ng, null), { clearIcon: p, suffixIcon: v, itemIcon: m, removeIcon: w };
}
function py(e2, t) {
  return t !== void 0 ? t : e2 !== null;
}
var by = function(e2, t) {
  var n = {};
  for (var r in e2) Object.prototype.hasOwnProperty.call(e2, r) && t.indexOf(r) < 0 && (n[r] = e2[r]);
  if (e2 != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e2); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e2, r[a]) && (n[r[a]] = e2[r[a]]);
  return n;
};
const Uu = "SECRET_COMBOBOX_MODE_DO_NOT_USE", yy = (e2, t) => {
  var n;
  const { prefixCls: r, bordered: a, className: o, rootClassName: i, getPopupContainer: s, popupClassName: c, dropdownClassName: u, listHeight: d = 256, placement: f, listItemHeight: h, size: p, disabled: g, notFoundContent: v, status: m, builtinPlacements: w, dropdownMatchSelectWidth: b, popupMatchSelectWidth: C, direction: x, style: I, allowClear: y, variant: E, dropdownStyle: O, transitionName: R, tagRender: S, maxCount: $, prefix: P } = e2, A = by(e2, ["prefixCls", "bordered", "className", "rootClassName", "getPopupContainer", "popupClassName", "dropdownClassName", "listHeight", "placement", "listItemHeight", "size", "disabled", "notFoundContent", "status", "builtinPlacements", "dropdownMatchSelectWidth", "popupMatchSelectWidth", "direction", "style", "allowClear", "variant", "dropdownStyle", "transitionName", "tagRender", "maxCount", "prefix"]), { getPopupContainer: N, getPrefixCls: T, renderEmpty: M, direction: _, virtual: j, popupMatchSelectWidth: z, popupOverflow: L } = l.useContext(ft), H = _n("select"), [, Y] = or(), k = h ?? (Y == null ? void 0 : Y.controlHeight), F = T("select", r), B = T(), G = x ?? _, { compactSize: re, compactItemClassnames: W } = Er(F, G), [J, oe] = ao("select", E, a), K = ir(F), [q, Z, ie] = ly(F, K), X = l.useMemo(() => {
    const { mode: st } = e2;
    if (st !== "combobox") return st === Uu ? "combobox" : st;
  }, [e2.mode]), ee = X === "multiple" || X === "tags", le = py(e2.suffixIcon, e2.showArrow), se = (n = C ?? b) !== null && n !== void 0 ? n : z, { status: de, hasFeedback: Oe, isFormItemInput: xe, feedbackIcon: We } = l.useContext(Kt), ce = aa(de, m);
  let ue;
  v !== void 0 ? ue = v : X === "combobox" ? ue = null : ue = (M == null ? void 0 : M("Select")) || l.createElement(V0, { componentName: "Select" });
  const { suffixIcon: pe, itemIcon: $e, removeIcon: Fe, clearIcon: Le } = vy(Object.assign(Object.assign({}, A), { multiple: ee, hasFeedback: Oe, feedbackIcon: We, showSuffixIcon: le, prefixCls: F, componentName: "Select" })), je = y === true ? { clearIcon: Le } : y, Ee = dn(A, ["suffixIcon", "itemIcon"]), Be = Q(c || u, { [`${F}-dropdown-${G}`]: G === "rtl" }, i, ie, K, Z), Ke = wn((st) => {
    var ot;
    return (ot = p ?? re) !== null && ot !== void 0 ? ot : st;
  }), Me = l.useContext(kn), be = g ?? Me, Ae = Q({ [`${F}-lg`]: Ke === "large", [`${F}-sm`]: Ke === "small", [`${F}-rtl`]: G === "rtl", [`${F}-${J}`]: oe, [`${F}-in-form-item`]: xe }, Cr(F, ce, Oe), W, H.className, o, i, ie, K, Z), Je = l.useMemo(() => f !== void 0 ? f : G === "rtl" ? "bottomRight" : "bottomLeft", [f, G]), [Qe] = Yc("SelectLike", O == null ? void 0 : O.zIndex);
  return q(l.createElement(as, Object.assign({ ref: t, virtual: j, showSearch: H.showSearch }, Ee, { style: Object.assign(Object.assign({}, H.style), I), dropdownMatchSelectWidth: se, transitionName: Qc(B, "slide-up", R), builtinPlacements: q0(w, L), listHeight: d, listItemHeight: k, mode: X, prefixCls: F, placement: Je, direction: G, prefix: P, suffixIcon: pe, menuItemSelectedIcon: $e, removeIcon: Fe, allowClear: je, notFoundContent: ue, className: Ae, getPopupContainer: s || N, dropdownClassName: Be, disabled: be, dropdownStyle: Object.assign(Object.assign({}, O), { zIndex: Qe }), maxCount: ee ? $ : void 0, tagRender: ee ? S : void 0 })));
}, oa = l.forwardRef(yy), wy = db(oa, "dropdownAlign");
oa.SECRET_COMBOBOX_MODE_DO_NOT_USE = Uu;
oa.Option = rs;
oa.OptGroup = ns;
oa._InternalPanelDoNotUseOrYouWillBeFired = wy;
const Sr = ["xxl", "xl", "lg", "md", "sm", "xs"], Cy = (e2) => ({ xs: `(max-width: ${e2.screenXSMax}px)`, sm: `(min-width: ${e2.screenSM}px)`, md: `(min-width: ${e2.screenMD}px)`, lg: `(min-width: ${e2.screenLG}px)`, xl: `(min-width: ${e2.screenXL}px)`, xxl: `(min-width: ${e2.screenXXL}px)` }), Sy = (e2) => {
  const t = e2, n = [].concat(Sr).reverse();
  return n.forEach((r, a) => {
    const o = r.toUpperCase(), i = `screen${o}Min`, s = `screen${o}`;
    if (!(t[i] <= t[s])) throw new Error(`${i}<=${s} fails : !(${t[i]}<=${t[s]})`);
    if (a < n.length - 1) {
      const c = `screen${o}Max`;
      if (!(t[s] <= t[c])) throw new Error(`${s}<=${c} fails : !(${t[s]}<=${t[c]})`);
      const d = `screen${n[a + 1].toUpperCase()}Min`;
      if (!(t[c] <= t[d])) throw new Error(`${c}<=${d} fails : !(${t[c]}<=${t[d]})`);
    }
  }), e2;
}, K$ = (e2, t) => {
  if (t) {
    for (const n of Sr) if (e2[n] && (t == null ? void 0 : t[n]) !== void 0) return t[n];
  }
}, xy = () => {
  const [, e2] = or(), t = Cy(Sy(e2));
  return ae.useMemo(() => {
    const n = /* @__PURE__ */ new Map();
    let r = -1, a = {};
    return { responsiveMap: t, matchHandlers: {}, dispatch(o) {
      return a = o, n.forEach((i) => i(a)), n.size >= 1;
    }, subscribe(o) {
      return n.size || this.register(), r += 1, n.set(r, o), o(a), r;
    }, unsubscribe(o) {
      n.delete(o), n.size || this.unregister();
    }, register() {
      Object.keys(t).forEach((o) => {
        const i = t[o], s = (u) => {
          let { matches: d } = u;
          this.dispatch(Object.assign(Object.assign({}, a), { [o]: d }));
        }, c = window.matchMedia(i);
        c.addListener(s), this.matchHandlers[i] = { mql: c, listener: s }, s(c);
      });
    }, unregister() {
      Object.keys(t).forEach((o) => {
        const i = t[o], s = this.matchHandlers[i];
        s == null ? void 0 : s.mql.removeListener(s == null ? void 0 : s.listener);
      }), n.clear();
    } };
  }, [e2]);
};
function $y() {
  const [, e2] = l.useReducer((t) => t + 1, 0);
  return e2;
}
function Ey() {
  let e2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const n = l.useRef(t), r = $y(), a = xy();
  return ut(() => {
    const o = a.subscribe((i) => {
      n.current = i, e2 && r();
    });
    return () => a.unsubscribe(o);
  }, []), n.current;
}
function ku(e2) {
  var t = e2.children, n = e2.prefixCls, r = e2.id, a = e2.overlayInnerStyle, o = e2.bodyClassName, i = e2.className, s = e2.style;
  return l.createElement("div", { className: Q("".concat(n, "-content"), i), style: s }, l.createElement("div", { className: Q("".concat(n, "-inner"), o), id: r, role: "tooltip", style: a }, typeof t == "function" ? t() : t));
}
var vr = { shiftX: 64, adjustY: 1 }, pr = { adjustX: 1, shiftY: true }, cn = [0, 0], Ry = { left: { points: ["cr", "cl"], overflow: pr, offset: [-4, 0], targetOffset: cn }, right: { points: ["cl", "cr"], overflow: pr, offset: [4, 0], targetOffset: cn }, top: { points: ["bc", "tc"], overflow: vr, offset: [0, -4], targetOffset: cn }, bottom: { points: ["tc", "bc"], overflow: vr, offset: [0, 4], targetOffset: cn }, topLeft: { points: ["bl", "tl"], overflow: vr, offset: [0, -4], targetOffset: cn }, leftTop: { points: ["tr", "tl"], overflow: pr, offset: [-4, 0], targetOffset: cn }, topRight: { points: ["br", "tr"], overflow: vr, offset: [0, -4], targetOffset: cn }, rightTop: { points: ["tl", "tr"], overflow: pr, offset: [4, 0], targetOffset: cn }, bottomRight: { points: ["tr", "br"], overflow: vr, offset: [0, 4], targetOffset: cn }, rightBottom: { points: ["bl", "br"], overflow: pr, offset: [4, 0], targetOffset: cn }, bottomLeft: { points: ["tl", "bl"], overflow: vr, offset: [0, 4], targetOffset: cn }, leftBottom: { points: ["br", "bl"], overflow: pr, offset: [-4, 0], targetOffset: cn } }, Oy = ["overlayClassName", "trigger", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "prefixCls", "children", "onVisibleChange", "afterVisibleChange", "transitionName", "animation", "motion", "placement", "align", "destroyTooltipOnHide", "defaultVisible", "getTooltipContainer", "overlayInnerStyle", "arrowContent", "overlay", "id", "showArrow", "classNames", "styles"], Iy = function(t, n) {
  var r = t.overlayClassName, a = t.trigger, o = a === void 0 ? ["hover"] : a, i = t.mouseEnterDelay, s = i === void 0 ? 0 : i, c = t.mouseLeaveDelay, u = c === void 0 ? 0.1 : c, d = t.overlayStyle, f = t.prefixCls, h = f === void 0 ? "rc-tooltip" : f, p = t.children, g = t.onVisibleChange, v = t.afterVisibleChange, m = t.transitionName, w = t.animation, b = t.motion, C = t.placement, x = C === void 0 ? "right" : C, I = t.align, y = I === void 0 ? {} : I, E = t.destroyTooltipOnHide, O = E === void 0 ? false : E, R = t.defaultVisible, S = t.getTooltipContainer, $ = t.overlayInnerStyle;
  t.arrowContent;
  var P = t.overlay, A = t.id, N = t.showArrow, T = N === void 0 ? true : N, M = t.classNames, _ = t.styles, j = rt(t, Oy), z = hu(A), L = l.useRef(null);
  l.useImperativeHandle(n, function() {
    return L.current;
  });
  var H = V({}, j);
  "visible" in t && (H.popupVisible = t.visible);
  var Y = function() {
    return l.createElement(ku, { key: "content", prefixCls: h, id: z, bodyClassName: M == null ? void 0 : M.body, overlayInnerStyle: V(V({}, $), _ == null ? void 0 : _.body) }, P);
  }, k = function() {
    var B = l.Children.only(p), G = (B == null ? void 0 : B.props) || {}, re = V(V({}, G), {}, { "aria-describedby": P ? z : null });
    return l.cloneElement(p, re);
  };
  return l.createElement(Tu, Ie({ popupClassName: Q(r, M == null ? void 0 : M.root), prefixCls: h, popup: Y, action: o, builtinPlacements: Ry, popupPlacement: x, ref: L, popupAlign: y, getPopupContainer: S, onPopupVisibleChange: g, afterPopupVisibleChange: v, popupTransitionName: m, popupAnimation: w, popupMotion: b, defaultPopupVisible: R, autoDestroy: O, mouseLeaveDelay: u, popupStyle: V(V({}, d), _ == null ? void 0 : _.root), mouseEnterDelay: s, arrow: T }, H), k());
};
const Ay = l.forwardRef(Iy);
function Py(e2) {
  const { sizePopupArrow: t, borderRadiusXS: n, borderRadiusOuter: r } = e2, a = t / 2, o = 0, i = a, s = r * 1 / Math.sqrt(2), c = a - r * (1 - 1 / Math.sqrt(2)), u = a - n * (1 / Math.sqrt(2)), d = r * (Math.sqrt(2) - 1) + n * (1 / Math.sqrt(2)), f = 2 * a - u, h = d, p = 2 * a - s, g = c, v = 2 * a - o, m = i, w = a * Math.sqrt(2) + r * (Math.sqrt(2) - 2), b = r * (Math.sqrt(2) - 1), C = `polygon(${b}px 100%, 50% ${b}px, ${2 * a - b}px 100%, ${b}px 100%)`, x = `path('M ${o} ${i} A ${r} ${r} 0 0 0 ${s} ${c} L ${u} ${d} A ${n} ${n} 0 0 1 ${f} ${h} L ${p} ${g} A ${r} ${r} 0 0 0 ${v} ${m} Z')`;
  return { arrowShadowWidth: w, arrowPath: x, arrowPolygon: C };
}
const Ny = (e2, t, n) => {
  const { sizePopupArrow: r, arrowPolygon: a, arrowPath: o, arrowShadowWidth: i, borderRadiusXS: s, calc: c } = e2;
  return { pointerEvents: "none", width: r, height: r, overflow: "hidden", "&::before": { position: "absolute", bottom: 0, insetInlineStart: 0, width: r, height: c(r).div(2).equal(), background: t, clipPath: { _multi_value_: true, value: [a, o] }, content: '""' }, "&::after": { content: '""', position: "absolute", width: i, height: i, bottom: 0, insetInline: 0, margin: "auto", borderRadius: { _skip_check_: true, value: `0 0 ${ne(s)} 0` }, transform: "translateY(50%) rotate(-135deg)", boxShadow: n, zIndex: 0, background: "transparent" } };
}, Gu = 8;
function Ku(e2) {
  const { contentRadius: t, limitVerticalRadius: n } = e2, r = t > 12 ? t + 2 : 12;
  return { arrowOffsetHorizontal: r, arrowOffsetVertical: n ? Gu : r };
}
function ya(e2, t) {
  return e2 ? t : {};
}
function My(e2, t, n) {
  const { componentCls: r, boxShadowPopoverArrow: a, arrowOffsetVertical: o, arrowOffsetHorizontal: i } = e2, { arrowDistance: s = 0, arrowPlacement: c = { left: true, right: true, top: true, bottom: true } } = n || {};
  return { [r]: Object.assign(Object.assign(Object.assign(Object.assign({ [`${r}-arrow`]: [Object.assign(Object.assign({ position: "absolute", zIndex: 1, display: "block" }, Ny(e2, t, a)), { "&:before": { background: t } })] }, ya(!!c.top, { [[`&-placement-top > ${r}-arrow`, `&-placement-topLeft > ${r}-arrow`, `&-placement-topRight > ${r}-arrow`].join(",")]: { bottom: s, transform: "translateY(100%) rotate(180deg)" }, [`&-placement-top > ${r}-arrow`]: { left: { _skip_check_: true, value: "50%" }, transform: "translateX(-50%) translateY(100%) rotate(180deg)" }, "&-placement-topLeft": { "--arrow-offset-horizontal": i, [`> ${r}-arrow`]: { left: { _skip_check_: true, value: i } } }, "&-placement-topRight": { "--arrow-offset-horizontal": `calc(100% - ${ne(i)})`, [`> ${r}-arrow`]: { right: { _skip_check_: true, value: i } } } })), ya(!!c.bottom, { [[`&-placement-bottom > ${r}-arrow`, `&-placement-bottomLeft > ${r}-arrow`, `&-placement-bottomRight > ${r}-arrow`].join(",")]: { top: s, transform: "translateY(-100%)" }, [`&-placement-bottom > ${r}-arrow`]: { left: { _skip_check_: true, value: "50%" }, transform: "translateX(-50%) translateY(-100%)" }, "&-placement-bottomLeft": { "--arrow-offset-horizontal": i, [`> ${r}-arrow`]: { left: { _skip_check_: true, value: i } } }, "&-placement-bottomRight": { "--arrow-offset-horizontal": `calc(100% - ${ne(i)})`, [`> ${r}-arrow`]: { right: { _skip_check_: true, value: i } } } })), ya(!!c.left, { [[`&-placement-left > ${r}-arrow`, `&-placement-leftTop > ${r}-arrow`, `&-placement-leftBottom > ${r}-arrow`].join(",")]: { right: { _skip_check_: true, value: s }, transform: "translateX(100%) rotate(90deg)" }, [`&-placement-left > ${r}-arrow`]: { top: { _skip_check_: true, value: "50%" }, transform: "translateY(-50%) translateX(100%) rotate(90deg)" }, [`&-placement-leftTop > ${r}-arrow`]: { top: o }, [`&-placement-leftBottom > ${r}-arrow`]: { bottom: o } })), ya(!!c.right, { [[`&-placement-right > ${r}-arrow`, `&-placement-rightTop > ${r}-arrow`, `&-placement-rightBottom > ${r}-arrow`].join(",")]: { left: { _skip_check_: true, value: s }, transform: "translateX(-100%) rotate(-90deg)" }, [`&-placement-right > ${r}-arrow`]: { top: { _skip_check_: true, value: "50%" }, transform: "translateY(-50%) translateX(-100%) rotate(-90deg)" }, [`&-placement-rightTop > ${r}-arrow`]: { top: o }, [`&-placement-rightBottom > ${r}-arrow`]: { bottom: o } })) };
}
function Fy(e2, t, n, r) {
  if (r === false) return { adjustX: false, adjustY: false };
  const a = r && typeof r == "object" ? r : {}, o = {};
  switch (e2) {
    case "top":
    case "bottom":
      o.shiftX = t.arrowOffsetHorizontal * 2 + n, o.shiftY = true, o.adjustY = true;
      break;
    case "left":
    case "right":
      o.shiftY = t.arrowOffsetVertical * 2 + n, o.shiftX = true, o.adjustX = true;
      break;
  }
  const i = Object.assign(Object.assign({}, o), a);
  return i.shiftX || (i.adjustX = true), i.shiftY || (i.adjustY = true), i;
}
const Ll = { left: { points: ["cr", "cl"] }, right: { points: ["cl", "cr"] }, top: { points: ["bc", "tc"] }, bottom: { points: ["tc", "bc"] }, topLeft: { points: ["bl", "tl"] }, leftTop: { points: ["tr", "tl"] }, topRight: { points: ["br", "tr"] }, rightTop: { points: ["tl", "tr"] }, bottomRight: { points: ["tr", "br"] }, rightBottom: { points: ["bl", "br"] }, bottomLeft: { points: ["tl", "bl"] }, leftBottom: { points: ["br", "bl"] } }, Ty = { topLeft: { points: ["bl", "tc"] }, leftTop: { points: ["tr", "cl"] }, topRight: { points: ["br", "tc"] }, rightTop: { points: ["tl", "cr"] }, bottomRight: { points: ["tr", "bc"] }, rightBottom: { points: ["bl", "cr"] }, bottomLeft: { points: ["tl", "bc"] }, leftBottom: { points: ["br", "cl"] } }, _y = /* @__PURE__ */ new Set(["topLeft", "topRight", "bottomLeft", "bottomRight", "leftTop", "leftBottom", "rightTop", "rightBottom"]);
function jy(e2) {
  const { arrowWidth: t, autoAdjustOverflow: n, arrowPointAtCenter: r, offset: a, borderRadius: o, visibleFirst: i } = e2, s = t / 2, c = {};
  return Object.keys(Ll).forEach((u) => {
    const d = r && Ty[u] || Ll[u], f = Object.assign(Object.assign({}, d), { offset: [0, 0], dynamicInset: true });
    switch (c[u] = f, _y.has(u) && (f.autoArrow = false), u) {
      case "top":
      case "topLeft":
      case "topRight":
        f.offset[1] = -s - a;
        break;
      case "bottom":
      case "bottomLeft":
      case "bottomRight":
        f.offset[1] = s + a;
        break;
      case "left":
      case "leftTop":
      case "leftBottom":
        f.offset[0] = -s - a;
        break;
      case "right":
      case "rightTop":
      case "rightBottom":
        f.offset[0] = s + a;
        break;
    }
    const h = Ku({ contentRadius: o, limitVerticalRadius: true });
    if (r) switch (u) {
      case "topLeft":
      case "bottomLeft":
        f.offset[0] = -h.arrowOffsetHorizontal - s;
        break;
      case "topRight":
      case "bottomRight":
        f.offset[0] = h.arrowOffsetHorizontal + s;
        break;
      case "leftTop":
      case "rightTop":
        f.offset[1] = -h.arrowOffsetHorizontal * 2 + s;
        break;
      case "leftBottom":
      case "rightBottom":
        f.offset[1] = h.arrowOffsetHorizontal * 2 - s;
        break;
    }
    f.overflow = Fy(u, h, t, n), i && (f.htmlRegion = "visibleFirst");
  }), c;
}
const Dy = (e2) => {
  const { calc: t, componentCls: n, tooltipMaxWidth: r, tooltipColor: a, tooltipBg: o, tooltipBorderRadius: i, zIndexPopup: s, controlHeight: c, boxShadowSecondary: u, paddingSM: d, paddingXS: f, arrowOffsetHorizontal: h, sizePopupArrow: p } = e2, g = t(i).add(p).add(h).equal(), v = t(i).mul(2).add(p).equal();
  return [{ [n]: Object.assign(Object.assign(Object.assign(Object.assign({}, Ut(e2)), { position: "absolute", zIndex: s, display: "block", width: "max-content", maxWidth: r, visibility: "visible", "--valid-offset-x": "var(--arrow-offset-horizontal, var(--arrow-x))", transformOrigin: ["var(--valid-offset-x, 50%)", "var(--arrow-y, 50%)"].join(" "), "&-hidden": { display: "none" }, "--antd-arrow-background-color": o, [`${n}-inner`]: { minWidth: v, minHeight: c, padding: `${ne(e2.calc(d).div(2).equal())} ${ne(f)}`, color: a, textAlign: "start", textDecoration: "none", wordWrap: "break-word", backgroundColor: o, borderRadius: i, boxShadow: u, boxSizing: "border-box" }, [["&-placement-topLeft", "&-placement-topRight", "&-placement-bottomLeft", "&-placement-bottomRight"].join(",")]: { minWidth: g }, [["&-placement-left", "&-placement-leftTop", "&-placement-leftBottom", "&-placement-right", "&-placement-rightTop", "&-placement-rightBottom"].join(",")]: { [`${n}-inner`]: { borderRadius: e2.min(i, Gu) } }, [`${n}-content`]: { position: "relative" } }), Lm(e2, (m, w) => {
    let { darkColor: b } = w;
    return { [`&${n}-${m}`]: { [`${n}-inner`]: { backgroundColor: b }, [`${n}-arrow`]: { "--antd-arrow-background-color": b } } };
  })), { "&-rtl": { direction: "rtl" } }) }, My(e2, "var(--antd-arrow-background-color)"), { [`${n}-pure`]: { position: "relative", maxWidth: "none", margin: e2.sizePopupArrow } }];
}, Ly = (e2) => Object.assign(Object.assign({ zIndexPopup: e2.zIndexPopupBase + 70 }, Ku({ contentRadius: e2.borderRadius, limitVerticalRadius: true })), Py(mt(e2, { borderRadiusOuter: Math.min(e2.borderRadiusOuter, 4) }))), Xu = function(e2) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  return Lt("Tooltip", (r) => {
    const { borderRadius: a, colorTextLightSolid: o, colorBgSpotlight: i } = r, s = mt(r, { tooltipMaxWidth: 250, tooltipColor: o, tooltipBorderRadius: a, tooltipBg: i });
    return [Dy(s), Qh(r, "zoom-big-fast")];
  }, Ly, { resetStyle: false, injectStyle: t })(e2);
}, By = tr.map((e2) => `${e2}-inverse`), zy = ["success", "processing", "error", "default", "warning"];
function Hy(e2) {
  return (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true) ? [].concat(fe(By), fe(tr)).includes(e2) : tr.includes(e2);
}
function X$(e2) {
  return zy.includes(e2);
}
function Yu(e2, t) {
  const n = Hy(t), r = Q({ [`${e2}-${t}`]: t && n }), a = {}, o = {};
  return t && !n && (a.background = t, o["--antd-arrow-background-color"] = t), { className: r, overlayStyle: a, arrowStyle: o };
}
const Vy = (e2) => {
  const { prefixCls: t, className: n, placement: r = "top", title: a, color: o, overlayInnerStyle: i } = e2, { getPrefixCls: s } = l.useContext(ft), c = s("tooltip", t), [u, d, f] = Xu(c), h = Yu(c, o), p = h.arrowStyle, g = Object.assign(Object.assign({}, i), h.overlayStyle), v = Q(d, f, c, `${c}-pure`, `${c}-placement-${r}`, n, h.className);
  return u(l.createElement("div", { className: v, style: p }, l.createElement("div", { className: `${c}-arrow` }), l.createElement(ku, Object.assign({}, e2, { className: d, prefixCls: c, overlayInnerStyle: g }), a)));
};
var Wy = function(e2, t) {
  var n = {};
  for (var r in e2) Object.prototype.hasOwnProperty.call(e2, r) && t.indexOf(r) < 0 && (n[r] = e2[r]);
  if (e2 != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e2); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e2, r[a]) && (n[r[a]] = e2[r[a]]);
  return n;
};
const qy = l.forwardRef((e2, t) => {
  var n, r;
  const { prefixCls: a, openClassName: o, getTooltipContainer: i, color: s, overlayInnerStyle: c, children: u, afterOpenChange: d, afterVisibleChange: f, destroyTooltipOnHide: h, arrow: p = true, title: g, overlay: v, builtinPlacements: m, arrowPointAtCenter: w = false, autoAdjustOverflow: b = true, motion: C, getPopupContainer: x, placement: I = "top", mouseEnterDelay: y = 0.1, mouseLeaveDelay: E = 0.1, overlayStyle: O, rootClassName: R, overlayClassName: S, styles: $, classNames: P } = e2, A = Wy(e2, ["prefixCls", "openClassName", "getTooltipContainer", "color", "overlayInnerStyle", "children", "afterOpenChange", "afterVisibleChange", "destroyTooltipOnHide", "arrow", "title", "overlay", "builtinPlacements", "arrowPointAtCenter", "autoAdjustOverflow", "motion", "getPopupContainer", "placement", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "rootClassName", "overlayClassName", "styles", "classNames"]), N = !!p, [, T] = or(), { getPopupContainer: M, getPrefixCls: _, direction: j, className: z, style: L, classNames: H, styles: Y } = _n("tooltip"), k = Mc(), F = l.useRef(null), B = () => {
    var Ee;
    (Ee = F.current) === null || Ee === void 0 || Ee.forceAlign();
  };
  l.useImperativeHandle(t, () => {
    var Ee, Be;
    return { forceAlign: B, forcePopupAlign: () => {
      k.deprecated(false, "forcePopupAlign", "forceAlign"), B();
    }, nativeElement: (Ee = F.current) === null || Ee === void 0 ? void 0 : Ee.nativeElement, popupElement: (Be = F.current) === null || Be === void 0 ? void 0 : Be.popupElement };
  });
  const [G, re] = yn(false, { value: (n = e2.open) !== null && n !== void 0 ? n : e2.visible, defaultValue: (r = e2.defaultOpen) !== null && r !== void 0 ? r : e2.defaultVisible }), W = !g && !v && g !== 0, J = (Ee) => {
    var Be, Ke;
    re(W ? false : Ee), W || ((Be = e2.onOpenChange) === null || Be === void 0 || Be.call(e2, Ee), (Ke = e2.onVisibleChange) === null || Ke === void 0 || Ke.call(e2, Ee));
  }, oe = l.useMemo(() => {
    var Ee, Be;
    let Ke = w;
    return typeof p == "object" && (Ke = (Be = (Ee = p.pointAtCenter) !== null && Ee !== void 0 ? Ee : p.arrowPointAtCenter) !== null && Be !== void 0 ? Be : w), m || jy({ arrowPointAtCenter: Ke, autoAdjustOverflow: b, arrowWidth: N ? T.sizePopupArrow : 0, borderRadius: T.borderRadius, offset: T.marginXXS, visibleFirst: true });
  }, [w, p, m, T]), K = l.useMemo(() => g === 0 ? g : v || g || "", [v, g]), q = l.createElement(Gr, { space: true }, typeof K == "function" ? K() : K), Z = _("tooltip", a), ie = _(), X = e2["data-popover-inject"];
  let ee = G;
  !("open" in e2) && !("visible" in e2) && W && (ee = false);
  const le = l.isValidElement(u) && !kc(u) ? u : l.createElement("span", null, u), se = le.props, de = !se.className || typeof se.className == "string" ? Q(se.className, o || `${Z}-open`) : se.className, [Oe, xe, We] = Xu(Z, !X), ce = Yu(Z, s), ue = ce.arrowStyle, pe = Q(S, { [`${Z}-rtl`]: j === "rtl" }, ce.className, R, xe, We, z, H.root, P == null ? void 0 : P.root), $e = Q(H.body, P == null ? void 0 : P.body), [Fe, Le] = Yc("Tooltip", A.zIndex), je = l.createElement(Ay, Object.assign({}, A, { zIndex: Fe, showArrow: N, placement: I, mouseEnterDelay: y, mouseLeaveDelay: E, prefixCls: Z, classNames: { root: pe, body: $e }, styles: { root: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, ue), Y.root), L), O), $ == null ? void 0 : $.root), body: Object.assign(Object.assign(Object.assign(Object.assign({}, Y.body), c), $ == null ? void 0 : $.body), ce.overlayStyle) }, getTooltipContainer: x || i || M, ref: F, builtinPlacements: oe, overlay: q, visible: ee, onVisibleChange: J, afterVisibleChange: d ?? f, arrowContent: l.createElement("span", { className: `${Z}-arrow-content` }), motion: { motionName: Qc(ie, "zoom-big-fast", e2.transitionName), motionDeadline: 1e3 }, destroyTooltipOnHide: !!h }), ee ? qn(le, { className: de }) : le);
  return Oe(l.createElement(Kc.Provider, { value: Le }, je));
}), Qu = qy;
Qu._InternalPanelDoNotUseOrYouWillBeFired = Vy;
function ia(e2) {
  return mt(e2, { inputAffixPadding: e2.paddingXXS });
}
const sa = (e2) => {
  const { controlHeight: t, fontSize: n, lineHeight: r, lineWidth: a, controlHeightSM: o, controlHeightLG: i, fontSizeLG: s, lineHeightLG: c, paddingSM: u, controlPaddingHorizontalSM: d, controlPaddingHorizontal: f, colorFillAlter: h, colorPrimaryHover: p, colorPrimary: g, controlOutlineWidth: v, controlOutline: m, colorErrorOutline: w, colorWarningOutline: b, colorBgContainer: C, inputFontSize: x, inputFontSizeLG: I, inputFontSizeSM: y } = e2, E = x || n, O = y || E, R = I || s, S = Math.round((t - E * r) / 2 * 10) / 10 - a, $ = Math.round((o - O * r) / 2 * 10) / 10 - a, P = Math.ceil((i - R * c) / 2 * 10) / 10 - a;
  return { paddingBlock: Math.max(S, 0), paddingBlockSM: Math.max($, 0), paddingBlockLG: Math.max(P, 0), paddingInline: u - a, paddingInlineSM: d - a, paddingInlineLG: f - a, addonBg: h, activeBorderColor: g, hoverBorderColor: p, activeShadow: `0 0 0 ${v}px ${m}`, errorActiveShadow: `0 0 0 ${v}px ${w}`, warningActiveShadow: `0 0 0 ${v}px ${b}`, hoverBg: C, activeBg: C, inputFontSize: E, inputFontSizeLG: R, inputFontSizeSM: O };
}, Uy = (e2) => ({ borderColor: e2.hoverBorderColor, backgroundColor: e2.hoverBg }), os = (e2) => ({ color: e2.colorTextDisabled, backgroundColor: e2.colorBgContainerDisabled, borderColor: e2.colorBorder, boxShadow: "none", cursor: "not-allowed", opacity: 1, "input[disabled], textarea[disabled]": { cursor: "not-allowed" }, "&:hover:not([disabled])": Object.assign({}, Uy(mt(e2, { hoverBorderColor: e2.colorBorder, hoverBg: e2.colorBgContainerDisabled }))) }), Ju = (e2, t) => ({ background: e2.colorBgContainer, borderWidth: e2.lineWidth, borderStyle: e2.lineType, borderColor: t.borderColor, "&:hover": { borderColor: t.hoverBorderColor, backgroundColor: e2.hoverBg }, "&:focus, &:focus-within": { borderColor: t.activeBorderColor, boxShadow: t.activeShadow, outline: 0, backgroundColor: e2.activeBg } }), Bl = (e2, t) => ({ [`&${e2.componentCls}-status-${t.status}:not(${e2.componentCls}-disabled)`]: Object.assign(Object.assign({}, Ju(e2, t)), { [`${e2.componentCls}-prefix, ${e2.componentCls}-suffix`]: { color: t.affixColor } }), [`&${e2.componentCls}-status-${t.status}${e2.componentCls}-disabled`]: { borderColor: t.borderColor } }), Zu = (e2, t) => ({ "&-outlined": Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Ju(e2, { borderColor: e2.colorBorder, hoverBorderColor: e2.hoverBorderColor, activeBorderColor: e2.activeBorderColor, activeShadow: e2.activeShadow })), { [`&${e2.componentCls}-disabled, &[disabled]`]: Object.assign({}, os(e2)) }), Bl(e2, { status: "error", borderColor: e2.colorError, hoverBorderColor: e2.colorErrorBorderHover, activeBorderColor: e2.colorError, activeShadow: e2.errorActiveShadow, affixColor: e2.colorError })), Bl(e2, { status: "warning", borderColor: e2.colorWarning, hoverBorderColor: e2.colorWarningBorderHover, activeBorderColor: e2.colorWarning, activeShadow: e2.warningActiveShadow, affixColor: e2.colorWarning })), t) }), zl = (e2, t) => ({ [`&${e2.componentCls}-group-wrapper-status-${t.status}`]: { [`${e2.componentCls}-group-addon`]: { borderColor: t.addonBorderColor, color: t.addonColor } } }), ed = (e2) => ({ "&-outlined": Object.assign(Object.assign(Object.assign({ [`${e2.componentCls}-group`]: { "&-addon": { background: e2.addonBg, border: `${ne(e2.lineWidth)} ${e2.lineType} ${e2.colorBorder}` }, "&-addon:first-child": { borderInlineEnd: 0 }, "&-addon:last-child": { borderInlineStart: 0 } } }, zl(e2, { status: "error", addonBorderColor: e2.colorError, addonColor: e2.colorErrorText })), zl(e2, { status: "warning", addonBorderColor: e2.colorWarning, addonColor: e2.colorWarningText })), { [`&${e2.componentCls}-group-wrapper-disabled`]: { [`${e2.componentCls}-group-addon`]: Object.assign({}, os(e2)) } }) }), td = (e2, t) => {
  const { componentCls: n } = e2;
  return { "&-borderless": Object.assign({ background: "transparent", border: "none", "&:focus, &:focus-within": { outline: "none" }, [`&${n}-disabled, &[disabled]`]: { color: e2.colorTextDisabled, cursor: "not-allowed" }, [`&${n}-status-error`]: { "&, & input, & textarea": { color: e2.colorError } }, [`&${n}-status-warning`]: { "&, & input, & textarea": { color: e2.colorWarning } } }, t) };
}, nd = (e2, t) => {
  var n;
  return { background: t.bg, borderWidth: e2.lineWidth, borderStyle: e2.lineType, borderColor: "transparent", "input&, & input, textarea&, & textarea": { color: (n = t == null ? void 0 : t.inputColor) !== null && n !== void 0 ? n : "unset" }, "&:hover": { background: t.hoverBg }, "&:focus, &:focus-within": { outline: 0, borderColor: t.activeBorderColor, backgroundColor: e2.activeBg } };
}, Hl = (e2, t) => ({ [`&${e2.componentCls}-status-${t.status}:not(${e2.componentCls}-disabled)`]: Object.assign(Object.assign({}, nd(e2, t)), { [`${e2.componentCls}-prefix, ${e2.componentCls}-suffix`]: { color: t.affixColor } }) }), rd = (e2, t) => ({ "&-filled": Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, nd(e2, { bg: e2.colorFillTertiary, hoverBg: e2.colorFillSecondary, activeBorderColor: e2.activeBorderColor })), { [`&${e2.componentCls}-disabled, &[disabled]`]: Object.assign({}, os(e2)) }), Hl(e2, { status: "error", bg: e2.colorErrorBg, hoverBg: e2.colorErrorBgHover, activeBorderColor: e2.colorError, inputColor: e2.colorErrorText, affixColor: e2.colorError })), Hl(e2, { status: "warning", bg: e2.colorWarningBg, hoverBg: e2.colorWarningBgHover, activeBorderColor: e2.colorWarning, inputColor: e2.colorWarningText, affixColor: e2.colorWarning })), t) }), Vl = (e2, t) => ({ [`&${e2.componentCls}-group-wrapper-status-${t.status}`]: { [`${e2.componentCls}-group-addon`]: { background: t.addonBg, color: t.addonColor } } }), ad = (e2) => ({ "&-filled": Object.assign(Object.assign(Object.assign({ [`${e2.componentCls}-group`]: { "&-addon": { background: e2.colorFillTertiary }, [`${e2.componentCls}-filled:not(:focus):not(:focus-within)`]: { "&:not(:first-child)": { borderInlineStart: `${ne(e2.lineWidth)} ${e2.lineType} ${e2.colorSplit}` }, "&:not(:last-child)": { borderInlineEnd: `${ne(e2.lineWidth)} ${e2.lineType} ${e2.colorSplit}` } } } }, Vl(e2, { status: "error", addonBg: e2.colorErrorBg, addonColor: e2.colorErrorText })), Vl(e2, { status: "warning", addonBg: e2.colorWarningBg, addonColor: e2.colorWarningText })), { [`&${e2.componentCls}-group-wrapper-disabled`]: { [`${e2.componentCls}-group`]: { "&-addon": { background: e2.colorFillTertiary, color: e2.colorTextDisabled }, "&-addon:first-child": { borderInlineStart: `${ne(e2.lineWidth)} ${e2.lineType} ${e2.colorBorder}`, borderTop: `${ne(e2.lineWidth)} ${e2.lineType} ${e2.colorBorder}`, borderBottom: `${ne(e2.lineWidth)} ${e2.lineType} ${e2.colorBorder}` }, "&-addon:last-child": { borderInlineEnd: `${ne(e2.lineWidth)} ${e2.lineType} ${e2.colorBorder}`, borderTop: `${ne(e2.lineWidth)} ${e2.lineType} ${e2.colorBorder}`, borderBottom: `${ne(e2.lineWidth)} ${e2.lineType} ${e2.colorBorder}` } } } }) }), od = (e2, t) => ({ background: e2.colorBgContainer, borderWidth: `${ne(e2.lineWidth)} 0`, borderStyle: `${e2.lineType} none`, borderColor: `transparent transparent ${t.borderColor} transparent`, borderRadius: 0, "&:hover": { borderColor: `transparent transparent ${t.borderColor} transparent`, backgroundColor: e2.hoverBg }, "&:focus, &:focus-within": { borderColor: `transparent transparent ${t.borderColor} transparent`, outline: 0, backgroundColor: e2.activeBg } }), Wl = (e2, t) => ({ [`&${e2.componentCls}-status-${t.status}:not(${e2.componentCls}-disabled)`]: Object.assign(Object.assign({}, od(e2, t)), { [`${e2.componentCls}-prefix, ${e2.componentCls}-suffix`]: { color: t.affixColor } }), [`&${e2.componentCls}-status-${t.status}${e2.componentCls}-disabled`]: { borderColor: `transparent transparent ${t.borderColor} transparent` } }), id = (e2, t) => ({ "&-underlined": Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, od(e2, { borderColor: e2.colorBorder, hoverBorderColor: e2.hoverBorderColor, activeBorderColor: e2.activeBorderColor, activeShadow: e2.activeShadow })), { [`&${e2.componentCls}-disabled, &[disabled]`]: { color: e2.colorTextDisabled, boxShadow: "none", cursor: "not-allowed", "&:hover": { borderColor: `transparent transparent ${e2.colorBorder} transparent` } }, "input[disabled], textarea[disabled]": { cursor: "not-allowed" } }), Wl(e2, { status: "error", borderColor: e2.colorError, hoverBorderColor: e2.colorErrorBorderHover, activeBorderColor: e2.colorError, activeShadow: e2.errorActiveShadow, affixColor: e2.colorError })), Wl(e2, { status: "warning", borderColor: e2.colorWarning, hoverBorderColor: e2.colorWarningBorderHover, activeBorderColor: e2.colorWarning, activeShadow: e2.warningActiveShadow, affixColor: e2.colorWarning })), t) }), sd = (e2) => ({ "&::-moz-placeholder": { opacity: 1 }, "&::placeholder": { color: e2, userSelect: "none" }, "&:placeholder-shown": { textOverflow: "ellipsis" } }), ld = (e2) => {
  const { paddingBlockLG: t, lineHeightLG: n, borderRadiusLG: r, paddingInlineLG: a } = e2;
  return { padding: `${ne(t)} ${ne(a)}`, fontSize: e2.inputFontSizeLG, lineHeight: n, borderRadius: r };
}, cd = (e2) => ({ padding: `${ne(e2.paddingBlockSM)} ${ne(e2.paddingInlineSM)}`, fontSize: e2.inputFontSizeSM, borderRadius: e2.borderRadiusSM }), oo = (e2) => Object.assign(Object.assign({ position: "relative", display: "inline-block", width: "100%", minWidth: 0, padding: `${ne(e2.paddingBlock)} ${ne(e2.paddingInline)}`, color: e2.colorText, fontSize: e2.inputFontSize, lineHeight: e2.lineHeight, borderRadius: e2.borderRadius, transition: `all ${e2.motionDurationMid}` }, sd(e2.colorTextPlaceholder)), { "&-lg": Object.assign({}, ld(e2)), "&-sm": Object.assign({}, cd(e2)), "&-rtl, &-textarea-rtl": { direction: "rtl" } }), ud = (e2) => {
  const { componentCls: t, antCls: n } = e2;
  return { position: "relative", display: "table", width: "100%", borderCollapse: "separate", borderSpacing: 0, "&[class*='col-']": { paddingInlineEnd: e2.paddingXS, "&:last-child": { paddingInlineEnd: 0 } }, [`&-lg ${t}, &-lg > ${t}-group-addon`]: Object.assign({}, ld(e2)), [`&-sm ${t}, &-sm > ${t}-group-addon`]: Object.assign({}, cd(e2)), [`&-lg ${n}-select-single ${n}-select-selector`]: { height: e2.controlHeightLG }, [`&-sm ${n}-select-single ${n}-select-selector`]: { height: e2.controlHeightSM }, [`> ${t}`]: { display: "table-cell", "&:not(:first-child):not(:last-child)": { borderRadius: 0 } }, [`${t}-group`]: { "&-addon, &-wrap": { display: "table-cell", width: 1, whiteSpace: "nowrap", verticalAlign: "middle", "&:not(:first-child):not(:last-child)": { borderRadius: 0 } }, "&-wrap > *": { display: "block !important" }, "&-addon": { position: "relative", padding: `0 ${ne(e2.paddingInline)}`, color: e2.colorText, fontWeight: "normal", fontSize: e2.inputFontSize, textAlign: "center", borderRadius: e2.borderRadius, transition: `all ${e2.motionDurationSlow}`, lineHeight: 1, [`${n}-select`]: { margin: `${ne(e2.calc(e2.paddingBlock).add(1).mul(-1).equal())} ${ne(e2.calc(e2.paddingInline).mul(-1).equal())}`, [`&${n}-select-single:not(${n}-select-customize-input):not(${n}-pagination-size-changer)`]: { [`${n}-select-selector`]: { backgroundColor: "inherit", border: `${ne(e2.lineWidth)} ${e2.lineType} transparent`, boxShadow: "none" } } }, [`${n}-cascader-picker`]: { margin: `-9px ${ne(e2.calc(e2.paddingInline).mul(-1).equal())}`, backgroundColor: "transparent", [`${n}-cascader-input`]: { textAlign: "start", border: 0, boxShadow: "none" } } } }, [t]: { width: "100%", marginBottom: 0, textAlign: "inherit", "&:focus": { zIndex: 1, borderInlineEndWidth: 1 }, "&:hover": { zIndex: 1, borderInlineEndWidth: 1, [`${t}-search-with-button &`]: { zIndex: 0 } } }, [`> ${t}:first-child, ${t}-group-addon:first-child`]: { borderStartEndRadius: 0, borderEndEndRadius: 0, [`${n}-select ${n}-select-selector`]: { borderStartEndRadius: 0, borderEndEndRadius: 0 } }, [`> ${t}-affix-wrapper`]: { [`&:not(:first-child) ${t}`]: { borderStartStartRadius: 0, borderEndStartRadius: 0 }, [`&:not(:last-child) ${t}`]: { borderStartEndRadius: 0, borderEndEndRadius: 0 } }, [`> ${t}:last-child, ${t}-group-addon:last-child`]: { borderStartStartRadius: 0, borderEndStartRadius: 0, [`${n}-select ${n}-select-selector`]: { borderStartStartRadius: 0, borderEndStartRadius: 0 } }, [`${t}-affix-wrapper`]: { "&:not(:last-child)": { borderStartEndRadius: 0, borderEndEndRadius: 0, [`${t}-search &`]: { borderStartStartRadius: e2.borderRadius, borderEndStartRadius: e2.borderRadius } }, [`&:not(:first-child), ${t}-search &:not(:first-child)`]: { borderStartStartRadius: 0, borderEndStartRadius: 0 } }, [`&${t}-group-compact`]: Object.assign(Object.assign({ display: "block" }, Mf()), { [`${t}-group-addon, ${t}-group-wrap, > ${t}`]: { "&:not(:first-child):not(:last-child)": { borderInlineEndWidth: e2.lineWidth, "&:hover, &:focus": { zIndex: 1 } } }, "& > *": { display: "inline-flex", float: "none", verticalAlign: "top", borderRadius: 0 }, [`
        & > ${t}-affix-wrapper,
        & > ${t}-number-affix-wrapper,
        & > ${n}-picker-range
      `]: { display: "inline-flex" }, "& > *:not(:last-child)": { marginInlineEnd: e2.calc(e2.lineWidth).mul(-1).equal(), borderInlineEndWidth: e2.lineWidth }, [t]: { float: "none" }, [`& > ${n}-select > ${n}-select-selector,
      & > ${n}-select-auto-complete ${t},
      & > ${n}-cascader-picker ${t},
      & > ${t}-group-wrapper ${t}`]: { borderInlineEndWidth: e2.lineWidth, borderRadius: 0, "&:hover, &:focus": { zIndex: 1 } }, [`& > ${n}-select-focused`]: { zIndex: 1 }, [`& > ${n}-select > ${n}-select-arrow`]: { zIndex: 1 }, [`& > *:first-child,
      & > ${n}-select:first-child > ${n}-select-selector,
      & > ${n}-select-auto-complete:first-child ${t},
      & > ${n}-cascader-picker:first-child ${t}`]: { borderStartStartRadius: e2.borderRadius, borderEndStartRadius: e2.borderRadius }, [`& > *:last-child,
      & > ${n}-select:last-child > ${n}-select-selector,
      & > ${n}-cascader-picker:last-child ${t},
      & > ${n}-cascader-picker-focused:last-child ${t}`]: { borderInlineEndWidth: e2.lineWidth, borderStartEndRadius: e2.borderRadius, borderEndEndRadius: e2.borderRadius }, [`& > ${n}-select-auto-complete ${t}`]: { verticalAlign: "top" }, [`${t}-group-wrapper + ${t}-group-wrapper`]: { marginInlineStart: e2.calc(e2.lineWidth).mul(-1).equal(), [`${t}-affix-wrapper`]: { borderRadius: 0 } }, [`${t}-group-wrapper:not(:last-child)`]: { [`&${t}-search > ${t}-group`]: { [`& > ${t}-group-addon > ${t}-search-button`]: { borderRadius: 0 }, [`& > ${t}`]: { borderStartStartRadius: e2.borderRadius, borderStartEndRadius: 0, borderEndEndRadius: 0, borderEndStartRadius: e2.borderRadius } } } }) };
}, ky = (e2) => {
  const { componentCls: t, controlHeightSM: n, lineWidth: r, calc: a } = e2, i = a(n).sub(a(r).mul(2)).sub(16).div(2).equal();
  return { [t]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Ut(e2)), oo(e2)), Zu(e2)), rd(e2)), td(e2)), id(e2)), { '&[type="color"]': { height: e2.controlHeight, [`&${t}-lg`]: { height: e2.controlHeightLG }, [`&${t}-sm`]: { height: n, paddingTop: i, paddingBottom: i } }, '&[type="search"]::-webkit-search-cancel-button, &[type="search"]::-webkit-search-decoration': { appearance: "none" } }) };
}, Gy = (e2) => {
  const { componentCls: t } = e2;
  return { [`${t}-clear-icon`]: { margin: 0, padding: 0, lineHeight: 0, color: e2.colorTextQuaternary, fontSize: e2.fontSizeIcon, verticalAlign: -1, cursor: "pointer", transition: `color ${e2.motionDurationSlow}`, border: "none", outline: "none", backgroundColor: "transparent", "&:hover": { color: e2.colorIcon }, "&:active": { color: e2.colorText }, "&-hidden": { visibility: "hidden" }, "&-has-suffix": { margin: `0 ${ne(e2.inputAffixPadding)}` } } };
}, Ky = (e2) => {
  const { componentCls: t, inputAffixPadding: n, colorTextDescription: r, motionDurationSlow: a, colorIcon: o, colorIconHover: i, iconCls: s } = e2, c = `${t}-affix-wrapper`, u = `${t}-affix-wrapper-disabled`;
  return { [c]: Object.assign(Object.assign(Object.assign(Object.assign({}, oo(e2)), { display: "inline-flex", [`&:not(${t}-disabled):hover`]: { zIndex: 1, [`${t}-search-with-button &`]: { zIndex: 0 } }, "&-focused, &:focus": { zIndex: 1 }, [`> input${t}`]: { padding: 0 }, [`> input${t}, > textarea${t}`]: { fontSize: "inherit", border: "none", borderRadius: 0, outline: "none", background: "transparent", color: "inherit", "&::-ms-reveal": { display: "none" }, "&:focus": { boxShadow: "none !important" } }, "&::before": { display: "inline-block", width: 0, visibility: "hidden", content: '"\\a0"' }, [t]: { "&-prefix, &-suffix": { display: "flex", flex: "none", alignItems: "center", "> *:not(:last-child)": { marginInlineEnd: e2.paddingXS } }, "&-show-count-suffix": { color: r, direction: "ltr" }, "&-show-count-has-suffix": { marginInlineEnd: e2.paddingXXS }, "&-prefix": { marginInlineEnd: n }, "&-suffix": { marginInlineStart: n } } }), Gy(e2)), { [`${s}${t}-password-icon`]: { color: o, cursor: "pointer", transition: `all ${a}`, "&:hover": { color: i } } }), [`${t}-underlined`]: { borderRadius: 0 }, [u]: { [`${s}${t}-password-icon`]: { color: o, cursor: "not-allowed", "&:hover": { color: o } } } };
}, Xy = (e2) => {
  const { componentCls: t, borderRadiusLG: n, borderRadiusSM: r } = e2;
  return { [`${t}-group`]: Object.assign(Object.assign(Object.assign({}, Ut(e2)), ud(e2)), { "&-rtl": { direction: "rtl" }, "&-wrapper": Object.assign(Object.assign(Object.assign({ display: "inline-block", width: "100%", textAlign: "start", verticalAlign: "top", "&-rtl": { direction: "rtl" }, "&-lg": { [`${t}-group-addon`]: { borderRadius: n, fontSize: e2.inputFontSizeLG } }, "&-sm": { [`${t}-group-addon`]: { borderRadius: r } } }, ed(e2)), ad(e2)), { [`&:not(${t}-compact-first-item):not(${t}-compact-last-item)${t}-compact-item`]: { [`${t}, ${t}-group-addon`]: { borderRadius: 0 } }, [`&:not(${t}-compact-last-item)${t}-compact-first-item`]: { [`${t}, ${t}-group-addon`]: { borderStartEndRadius: 0, borderEndEndRadius: 0 } }, [`&:not(${t}-compact-first-item)${t}-compact-last-item`]: { [`${t}, ${t}-group-addon`]: { borderStartStartRadius: 0, borderEndStartRadius: 0 } }, [`&:not(${t}-compact-last-item)${t}-compact-item`]: { [`${t}-affix-wrapper`]: { borderStartEndRadius: 0, borderEndEndRadius: 0 } }, [`&:not(${t}-compact-first-item)${t}-compact-item`]: { [`${t}-affix-wrapper`]: { borderStartStartRadius: 0, borderEndStartRadius: 0 } } }) }) };
}, Yy = (e2) => {
  const { componentCls: t, antCls: n } = e2, r = `${t}-search`;
  return { [r]: { [t]: { "&:hover, &:focus": { [`+ ${t}-group-addon ${r}-button:not(${n}-btn-primary)`]: { borderInlineStartColor: e2.colorPrimaryHover } } }, [`${t}-affix-wrapper`]: { height: e2.controlHeight, borderRadius: 0 }, [`${t}-lg`]: { lineHeight: e2.calc(e2.lineHeightLG).sub(2e-4).equal() }, [`> ${t}-group`]: { [`> ${t}-group-addon:last-child`]: { insetInlineStart: -1, padding: 0, border: 0, [`${r}-button`]: { marginInlineEnd: -1, borderStartStartRadius: 0, borderEndStartRadius: 0, boxShadow: "none" }, [`${r}-button:not(${n}-btn-primary)`]: { color: e2.colorTextDescription, "&:hover": { color: e2.colorPrimaryHover }, "&:active": { color: e2.colorPrimaryActive }, [`&${n}-btn-loading::before`]: { insetInlineStart: 0, insetInlineEnd: 0, insetBlockStart: 0, insetBlockEnd: 0 } } } }, [`${r}-button`]: { height: e2.controlHeight, "&:hover, &:focus": { zIndex: 1 } }, "&-large": { [`${t}-affix-wrapper, ${r}-button`]: { height: e2.controlHeightLG } }, "&-small": { [`${t}-affix-wrapper, ${r}-button`]: { height: e2.controlHeightSM } }, "&-rtl": { direction: "rtl" }, [`&${t}-compact-item`]: { [`&:not(${t}-compact-last-item)`]: { [`${t}-group-addon`]: { [`${t}-search-button`]: { marginInlineEnd: e2.calc(e2.lineWidth).mul(-1).equal(), borderRadius: 0 } } }, [`&:not(${t}-compact-first-item)`]: { [`${t},${t}-affix-wrapper`]: { borderRadius: 0 } }, [`> ${t}-group-addon ${t}-search-button,
        > ${t},
        ${t}-affix-wrapper`]: { "&:hover, &:focus, &:active": { zIndex: 2 } }, [`> ${t}-affix-wrapper-focused`]: { zIndex: 2 } } } };
}, Qy = (e2) => {
  const { componentCls: t } = e2;
  return { [`${t}-out-of-range`]: { [`&, & input, & textarea, ${t}-show-count-suffix, ${t}-data-count`]: { color: e2.colorError } } };
}, dd = Lt(["Input", "Shared"], (e2) => {
  const t = mt(e2, ia(e2));
  return [ky(t), Ky(t)];
}, sa, { resetFont: false }), fd = Lt(["Input", "Component"], (e2) => {
  const t = mt(e2, ia(e2));
  return [Xy(t), Yy(t), Qy(t), eo(t)];
}, sa, { resetFont: false }), md = l.createContext({});
var Jy = function(e2, t) {
  var n = {};
  for (var r in e2) Object.prototype.hasOwnProperty.call(e2, r) && t.indexOf(r) < 0 && (n[r] = e2[r]);
  if (e2 != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e2); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e2, r[a]) && (n[r[a]] = e2[r[a]]);
  return n;
};
function ql(e2) {
  return typeof e2 == "number" ? `${e2} ${e2} auto` : /^\d+(\.\d+)?(px|em|rem|%)$/.test(e2) ? `0 0 ${e2}` : e2;
}
const Zy = ["xs", "sm", "md", "lg", "xl", "xxl"], gd = l.forwardRef((e2, t) => {
  const { getPrefixCls: n, direction: r } = l.useContext(ft), { gutter: a, wrap: o } = l.useContext(md), { prefixCls: i, span: s, order: c, offset: u, push: d, pull: f, className: h, children: p, flex: g, style: v } = e2, m = Jy(e2, ["prefixCls", "span", "order", "offset", "push", "pull", "className", "children", "flex", "style"]), w = n("col", i), [b, C, x] = cb(w), I = {};
  let y = {};
  Zy.forEach((R) => {
    let S = {};
    const $ = e2[R];
    typeof $ == "number" ? S.span = $ : typeof $ == "object" && (S = $ || {}), delete m[R], y = Object.assign(Object.assign({}, y), { [`${w}-${R}-${S.span}`]: S.span !== void 0, [`${w}-${R}-order-${S.order}`]: S.order || S.order === 0, [`${w}-${R}-offset-${S.offset}`]: S.offset || S.offset === 0, [`${w}-${R}-push-${S.push}`]: S.push || S.push === 0, [`${w}-${R}-pull-${S.pull}`]: S.pull || S.pull === 0, [`${w}-rtl`]: r === "rtl" }), S.flex && (y[`${w}-${R}-flex`] = true, I[`--${w}-${R}-flex`] = ql(S.flex));
  });
  const E = Q(w, { [`${w}-${s}`]: s !== void 0, [`${w}-order-${c}`]: c, [`${w}-offset-${u}`]: u, [`${w}-push-${d}`]: d, [`${w}-pull-${f}`]: f }, h, y, C, x), O = {};
  if (a && a[0] > 0) {
    const R = a[0] / 2;
    O.paddingLeft = R, O.paddingRight = R;
  }
  return g && (O.flex = ql(g), o === false && !O.minWidth && (O.minWidth = 0)), b(l.createElement("div", Object.assign({}, m, { style: Object.assign(Object.assign(Object.assign({}, O), v), I), className: E, ref: t }), p));
});
function ew(e2, t) {
  const n = [void 0, void 0], r = Array.isArray(e2) ? e2 : [e2, void 0], a = t || { xs: true, sm: true, md: true, lg: true, xl: true, xxl: true };
  return r.forEach((o, i) => {
    if (typeof o == "object" && o !== null) for (let s = 0; s < Sr.length; s++) {
      const c = Sr[s];
      if (a[c] && o[c] !== void 0) {
        n[i] = o[c];
        break;
      }
    }
    else n[i] = o;
  }), n;
}
var tw = function(e2, t) {
  var n = {};
  for (var r in e2) Object.prototype.hasOwnProperty.call(e2, r) && t.indexOf(r) < 0 && (n[r] = e2[r]);
  if (e2 != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e2); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e2, r[a]) && (n[r[a]] = e2[r[a]]);
  return n;
};
function Ul(e2, t) {
  const [n, r] = l.useState(typeof e2 == "string" ? e2 : ""), a = () => {
    if (typeof e2 == "string" && r(e2), typeof e2 == "object") for (let o = 0; o < Sr.length; o++) {
      const i = Sr[o];
      if (!t || !t[i]) continue;
      const s = e2[i];
      if (s !== void 0) {
        r(s);
        return;
      }
    }
  };
  return l.useEffect(() => {
    a();
  }, [JSON.stringify(e2), t]), n;
}
const nw = l.forwardRef((e2, t) => {
  const { prefixCls: n, justify: r, align: a, className: o, style: i, children: s, gutter: c = 0, wrap: u } = e2, d = tw(e2, ["prefixCls", "justify", "align", "className", "style", "children", "gutter", "wrap"]), { getPrefixCls: f, direction: h } = l.useContext(ft), p = Ey(true, null), g = Ul(a, p), v = Ul(r, p), m = f("row", n), [w, b, C] = sb(m), x = ew(c, p), I = Q(m, { [`${m}-no-wrap`]: u === false, [`${m}-${v}`]: v, [`${m}-${g}`]: g, [`${m}-rtl`]: h === "rtl" }, o, b, C), y = {}, E = x[0] != null && x[0] > 0 ? x[0] / -2 : void 0;
  E && (y.marginLeft = E, y.marginRight = E);
  const [O, R] = x;
  y.rowGap = R;
  const S = l.useMemo(() => ({ gutter: [O, R], wrap: u }), [O, R, u]);
  return w(l.createElement(md.Provider, { value: S }, l.createElement("div", Object.assign({}, d, { className: I, style: Object.assign(Object.assign({}, y), i), ref: t }), s)));
}), rw = (e2) => {
  const { componentCls: t, sizePaddingEdgeHorizontal: n, colorSplit: r, lineWidth: a, textPaddingInline: o, orientationMargin: i, verticalMarginInline: s } = e2;
  return { [t]: Object.assign(Object.assign({}, Ut(e2)), { borderBlockStart: `${ne(a)} solid ${r}`, "&-vertical": { position: "relative", top: "-0.06em", display: "inline-block", height: "0.9em", marginInline: s, marginBlock: 0, verticalAlign: "middle", borderTop: 0, borderInlineStart: `${ne(a)} solid ${r}` }, "&-horizontal": { display: "flex", clear: "both", width: "100%", minWidth: "100%", margin: `${ne(e2.dividerHorizontalGutterMargin)} 0` }, [`&-horizontal${t}-with-text`]: { display: "flex", alignItems: "center", margin: `${ne(e2.dividerHorizontalWithTextGutterMargin)} 0`, color: e2.colorTextHeading, fontWeight: 500, fontSize: e2.fontSizeLG, whiteSpace: "nowrap", textAlign: "center", borderBlockStart: `0 ${r}`, "&::before, &::after": { position: "relative", width: "50%", borderBlockStart: `${ne(a)} solid transparent`, borderBlockStartColor: "inherit", borderBlockEnd: 0, transform: "translateY(50%)", content: "''" } }, [`&-horizontal${t}-with-text-start`]: { "&::before": { width: `calc(${i} * 100%)` }, "&::after": { width: `calc(100% - ${i} * 100%)` } }, [`&-horizontal${t}-with-text-end`]: { "&::before": { width: `calc(100% - ${i} * 100%)` }, "&::after": { width: `calc(${i} * 100%)` } }, [`${t}-inner-text`]: { display: "inline-block", paddingBlock: 0, paddingInline: o }, "&-dashed": { background: "none", borderColor: r, borderStyle: "dashed", borderWidth: `${ne(a)} 0 0` }, [`&-horizontal${t}-with-text${t}-dashed`]: { "&::before, &::after": { borderStyle: "dashed none none" } }, [`&-vertical${t}-dashed`]: { borderInlineStartWidth: a, borderInlineEnd: 0, borderBlockStart: 0, borderBlockEnd: 0 }, "&-dotted": { background: "none", borderColor: r, borderStyle: "dotted", borderWidth: `${ne(a)} 0 0` }, [`&-horizontal${t}-with-text${t}-dotted`]: { "&::before, &::after": { borderStyle: "dotted none none" } }, [`&-vertical${t}-dotted`]: { borderInlineStartWidth: a, borderInlineEnd: 0, borderBlockStart: 0, borderBlockEnd: 0 }, [`&-plain${t}-with-text`]: { color: e2.colorText, fontWeight: "normal", fontSize: e2.fontSize }, [`&-horizontal${t}-with-text-start${t}-no-default-orientation-margin-start`]: { "&::before": { width: 0 }, "&::after": { width: "100%" }, [`${t}-inner-text`]: { paddingInlineStart: n } }, [`&-horizontal${t}-with-text-end${t}-no-default-orientation-margin-end`]: { "&::before": { width: "100%" }, "&::after": { width: 0 }, [`${t}-inner-text`]: { paddingInlineEnd: n } } }) };
}, aw = (e2) => ({ textPaddingInline: "1em", orientationMargin: 0.05, verticalMarginInline: e2.marginXS }), ow = Lt("Divider", (e2) => {
  const t = mt(e2, { dividerHorizontalWithTextGutterMargin: e2.margin, dividerHorizontalGutterMargin: e2.marginLG, sizePaddingEdgeHorizontal: 0 });
  return [rw(t)];
}, aw, { unitless: { orientationMargin: true } });
var iw = function(e2, t) {
  var n = {};
  for (var r in e2) Object.prototype.hasOwnProperty.call(e2, r) && t.indexOf(r) < 0 && (n[r] = e2[r]);
  if (e2 != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e2); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e2, r[a]) && (n[r[a]] = e2[r[a]]);
  return n;
};
const Y$ = (e2) => {
  const { getPrefixCls: t, direction: n, className: r, style: a } = _n("divider"), { prefixCls: o, type: i = "horizontal", orientation: s = "center", orientationMargin: c, className: u, rootClassName: d, children: f, dashed: h, variant: p = "solid", plain: g, style: v } = e2, m = iw(e2, ["prefixCls", "type", "orientation", "orientationMargin", "className", "rootClassName", "children", "dashed", "variant", "plain", "style"]), w = t("divider", o), [b, C, x] = ow(w), I = !!f, y = l.useMemo(() => s === "left" ? n === "rtl" ? "end" : "start" : s === "right" ? n === "rtl" ? "start" : "end" : s, [n, s]), E = y === "start" && c != null, O = y === "end" && c != null, R = Q(w, r, C, x, `${w}-${i}`, { [`${w}-with-text`]: I, [`${w}-with-text-${y}`]: I, [`${w}-dashed`]: !!h, [`${w}-${p}`]: p !== "solid", [`${w}-plain`]: !!g, [`${w}-rtl`]: n === "rtl", [`${w}-no-default-orientation-margin-start`]: E, [`${w}-no-default-orientation-margin-end`]: O }, u, d), S = l.useMemo(() => typeof c == "number" ? c : /^\d+$/.test(c) ? Number(c) : c, [c]), $ = { marginInlineStart: E ? S : void 0, marginInlineEnd: O ? S : void 0 };
  return b(l.createElement("div", Object.assign({ className: R, style: Object.assign(Object.assign({}, a), v) }, m, { role: "separator" }), f && i !== "vertical" && l.createElement("span", { className: `${w}-inner-text`, style: $ }, f)));
};
var sw = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z" } }] }, name: "up", theme: "outlined" }, lw = function(t, n) {
  return l.createElement(Ft, Ie({}, t, { ref: n, icon: sw }));
}, cw = l.forwardRef(lw);
function Pi() {
  return typeof BigInt == "function";
}
function hd(e2) {
  return !e2 && e2 !== 0 && !Number.isNaN(e2) || !String(e2).trim();
}
function Zn(e2) {
  var t = e2.trim(), n = t.startsWith("-");
  n && (t = t.slice(1)), t = t.replace(/(\.\d*[^0])0*$/, "$1").replace(/\.0*$/, "").replace(/^0+/, ""), t.startsWith(".") && (t = "0".concat(t));
  var r = t || "0", a = r.split("."), o = a[0] || "0", i = a[1] || "0";
  o === "0" && i === "0" && (n = false);
  var s = n ? "-" : "";
  return { negative: n, negativeStr: s, trimStr: r, integerStr: o, decimalStr: i, fullStr: "".concat(s).concat(r) };
}
function is(e2) {
  var t = String(e2);
  return !Number.isNaN(Number(t)) && t.includes("e");
}
function Qn(e2) {
  var t = String(e2);
  if (is(e2)) {
    var n = Number(t.slice(t.indexOf("e-") + 2)), r = t.match(/\.(\d+)/);
    return r != null && r[1] && (n += r[1].length), n;
  }
  return t.includes(".") && ss(t) ? t.length - t.indexOf(".") - 1 : 0;
}
function io(e2) {
  var t = String(e2);
  if (is(e2)) {
    if (e2 > Number.MAX_SAFE_INTEGER) return String(Pi() ? BigInt(e2).toString() : Number.MAX_SAFE_INTEGER);
    if (e2 < Number.MIN_SAFE_INTEGER) return String(Pi() ? BigInt(e2).toString() : Number.MIN_SAFE_INTEGER);
    t = e2.toFixed(Qn(t));
  }
  return Zn(t).fullStr;
}
function ss(e2) {
  return typeof e2 == "number" ? !Number.isNaN(e2) : e2 ? /^\s*-?\d+(\.\d+)?\s*$/.test(e2) || /^\s*-?\d+\.\s*$/.test(e2) || /^\s*-?\.\d+\s*$/.test(e2) : false;
}
var uw = function() {
  function e2(t) {
    if (fn(this, e2), D(this, "origin", ""), D(this, "negative", void 0), D(this, "integer", void 0), D(this, "decimal", void 0), D(this, "decimalLen", void 0), D(this, "empty", void 0), D(this, "nan", void 0), hd(t)) {
      this.empty = true;
      return;
    }
    if (this.origin = String(t), t === "-" || Number.isNaN(t)) {
      this.nan = true;
      return;
    }
    var n = t;
    if (is(n) && (n = Number(n)), n = typeof n == "string" ? n : io(n), ss(n)) {
      var r = Zn(n);
      this.negative = r.negative;
      var a = r.trimStr.split(".");
      this.integer = BigInt(a[0]);
      var o = a[1] || "0";
      this.decimal = BigInt(o), this.decimalLen = o.length;
    } else this.nan = true;
  }
  return mn(e2, [{ key: "getMark", value: function() {
    return this.negative ? "-" : "";
  } }, { key: "getIntegerStr", value: function() {
    return this.integer.toString();
  } }, { key: "getDecimalStr", value: function() {
    return this.decimal.toString().padStart(this.decimalLen, "0");
  } }, { key: "alignDecimal", value: function(n) {
    var r = "".concat(this.getMark()).concat(this.getIntegerStr()).concat(this.getDecimalStr().padEnd(n, "0"));
    return BigInt(r);
  } }, { key: "negate", value: function() {
    var n = new e2(this.toString());
    return n.negative = !n.negative, n;
  } }, { key: "cal", value: function(n, r, a) {
    var o = Math.max(this.getDecimalStr().length, n.getDecimalStr().length), i = this.alignDecimal(o), s = n.alignDecimal(o), c = r(i, s).toString(), u = a(o), d = Zn(c), f = d.negativeStr, h = d.trimStr, p = "".concat(f).concat(h.padStart(u + 1, "0"));
    return new e2("".concat(p.slice(0, -u), ".").concat(p.slice(-u)));
  } }, { key: "add", value: function(n) {
    if (this.isInvalidate()) return new e2(n);
    var r = new e2(n);
    return r.isInvalidate() ? this : this.cal(r, function(a, o) {
      return a + o;
    }, function(a) {
      return a;
    });
  } }, { key: "multi", value: function(n) {
    var r = new e2(n);
    return this.isInvalidate() || r.isInvalidate() ? new e2(NaN) : this.cal(r, function(a, o) {
      return a * o;
    }, function(a) {
      return a * 2;
    });
  } }, { key: "isEmpty", value: function() {
    return this.empty;
  } }, { key: "isNaN", value: function() {
    return this.nan;
  } }, { key: "isInvalidate", value: function() {
    return this.isEmpty() || this.isNaN();
  } }, { key: "equals", value: function(n) {
    return this.toString() === (n == null ? void 0 : n.toString());
  } }, { key: "lessEquals", value: function(n) {
    return this.add(n.negate().toString()).toNumber() <= 0;
  } }, { key: "toNumber", value: function() {
    return this.isNaN() ? NaN : Number(this.toString());
  } }, { key: "toString", value: function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
    return n ? this.isInvalidate() ? "" : Zn("".concat(this.getMark()).concat(this.getIntegerStr(), ".").concat(this.getDecimalStr())).fullStr : this.origin;
  } }]), e2;
}(), dw = function() {
  function e2(t) {
    if (fn(this, e2), D(this, "origin", ""), D(this, "number", void 0), D(this, "empty", void 0), hd(t)) {
      this.empty = true;
      return;
    }
    this.origin = String(t), this.number = Number(t);
  }
  return mn(e2, [{ key: "negate", value: function() {
    return new e2(-this.toNumber());
  } }, { key: "add", value: function(n) {
    if (this.isInvalidate()) return new e2(n);
    var r = Number(n);
    if (Number.isNaN(r)) return this;
    var a = this.number + r;
    if (a > Number.MAX_SAFE_INTEGER) return new e2(Number.MAX_SAFE_INTEGER);
    if (a < Number.MIN_SAFE_INTEGER) return new e2(Number.MIN_SAFE_INTEGER);
    var o = Math.max(Qn(this.number), Qn(r));
    return new e2(a.toFixed(o));
  } }, { key: "multi", value: function(n) {
    var r = Number(n);
    if (this.isInvalidate() || Number.isNaN(r)) return new e2(NaN);
    var a = this.number * r;
    if (a > Number.MAX_SAFE_INTEGER) return new e2(Number.MAX_SAFE_INTEGER);
    if (a < Number.MIN_SAFE_INTEGER) return new e2(Number.MIN_SAFE_INTEGER);
    var o = Math.max(Qn(this.number), Qn(r));
    return new e2(a.toFixed(o));
  } }, { key: "isEmpty", value: function() {
    return this.empty;
  } }, { key: "isNaN", value: function() {
    return Number.isNaN(this.number);
  } }, { key: "isInvalidate", value: function() {
    return this.isEmpty() || this.isNaN();
  } }, { key: "equals", value: function(n) {
    return this.toNumber() === (n == null ? void 0 : n.toNumber());
  } }, { key: "lessEquals", value: function(n) {
    return this.add(n.negate().toString()).toNumber() <= 0;
  } }, { key: "toNumber", value: function() {
    return this.number;
  } }, { key: "toString", value: function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
    return n ? this.isInvalidate() ? "" : io(this.number) : this.origin;
  } }]), e2;
}();
function pn(e2) {
  return Pi() ? new uw(e2) : new dw(e2);
}
function xa(e2, t, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
  if (e2 === "") return "";
  var a = Zn(e2), o = a.negativeStr, i = a.integerStr, s = a.decimalStr, c = "".concat(t).concat(s), u = "".concat(o).concat(i);
  if (n >= 0) {
    var d = Number(s[n]);
    if (d >= 5 && !r) {
      var f = pn(e2).add("".concat(o, "0.").concat("0".repeat(n)).concat(10 - d));
      return xa(f.toString(), t, n, r);
    }
    return n === 0 ? u : "".concat(u).concat(t).concat(s.padEnd(n, "0").slice(0, n));
  }
  return c === ".0" ? u : "".concat(u).concat(c);
}
function fw(e2) {
  return !!(e2.addonBefore || e2.addonAfter);
}
function mw(e2) {
  return !!(e2.prefix || e2.suffix || e2.allowClear);
}
function kl(e2, t, n) {
  var r = t.cloneNode(true), a = Object.create(e2, { target: { value: r }, currentTarget: { value: r } });
  return r.value = n, typeof t.selectionStart == "number" && typeof t.selectionEnd == "number" && (r.selectionStart = t.selectionStart, r.selectionEnd = t.selectionEnd), r.setSelectionRange = function() {
    t.setSelectionRange.apply(t, arguments);
  }, a;
}
function _a(e2, t, n, r) {
  if (n) {
    var a = t;
    if (t.type === "click") {
      a = kl(t, e2, ""), n(a);
      return;
    }
    if (e2.type !== "file" && r !== void 0) {
      a = kl(t, e2, r), n(a);
      return;
    }
    n(a);
  }
}
function ls(e2, t) {
  if (e2) {
    e2.focus(t);
    var n = t || {}, r = n.cursor;
    if (r) {
      var a = e2.value.length;
      switch (r) {
        case "start":
          e2.setSelectionRange(0, 0);
          break;
        case "end":
          e2.setSelectionRange(a, a);
          break;
        default:
          e2.setSelectionRange(0, a);
      }
    }
  }
}
var cs = ae.forwardRef(function(e2, t) {
  var n, r, a, o = e2.inputElement, i = e2.children, s = e2.prefixCls, c = e2.prefix, u = e2.suffix, d = e2.addonBefore, f = e2.addonAfter, h = e2.className, p = e2.style, g = e2.disabled, v = e2.readOnly, m = e2.focused, w = e2.triggerFocus, b = e2.allowClear, C = e2.value, x = e2.handleReset, I = e2.hidden, y = e2.classes, E = e2.classNames, O = e2.dataAttrs, R = e2.styles, S = e2.components, $ = e2.onClear, P = i ?? o, A = (S == null ? void 0 : S.affixWrapper) || "span", N = (S == null ? void 0 : S.groupWrapper) || "span", T = (S == null ? void 0 : S.wrapper) || "span", M = (S == null ? void 0 : S.groupAddon) || "span", _ = l.useRef(null), j = function(X) {
    var ee;
    (ee = _.current) !== null && ee !== void 0 && ee.contains(X.target) && (w == null ? void 0 : w());
  }, z = mw(e2), L = l.cloneElement(P, { value: C, className: Q((n = P.props) === null || n === void 0 ? void 0 : n.className, !z && (E == null ? void 0 : E.variant)) || null }), H = l.useRef(null);
  if (ae.useImperativeHandle(t, function() {
    return { nativeElement: H.current || _.current };
  }), z) {
    var Y = null;
    if (b) {
      var k = !g && !v && C, F = "".concat(s, "-clear-icon"), B = et(b) === "object" && b !== null && b !== void 0 && b.clearIcon ? b.clearIcon : "\u2716";
      Y = ae.createElement("button", { type: "button", tabIndex: -1, onClick: function(X) {
        x == null ? void 0 : x(X), $ == null ? void 0 : $();
      }, onMouseDown: function(X) {
        return X.preventDefault();
      }, className: Q(F, D(D({}, "".concat(F, "-hidden"), !k), "".concat(F, "-has-suffix"), !!u)) }, B);
    }
    var G = "".concat(s, "-affix-wrapper"), re = Q(G, D(D(D(D(D({}, "".concat(s, "-disabled"), g), "".concat(G, "-disabled"), g), "".concat(G, "-focused"), m), "".concat(G, "-readonly"), v), "".concat(G, "-input-with-clear-btn"), u && b && C), y == null ? void 0 : y.affixWrapper, E == null ? void 0 : E.affixWrapper, E == null ? void 0 : E.variant), W = (u || b) && ae.createElement("span", { className: Q("".concat(s, "-suffix"), E == null ? void 0 : E.suffix), style: R == null ? void 0 : R.suffix }, Y, u);
    L = ae.createElement(A, Ie({ className: re, style: R == null ? void 0 : R.affixWrapper, onClick: j }, O == null ? void 0 : O.affixWrapper, { ref: _ }), c && ae.createElement("span", { className: Q("".concat(s, "-prefix"), E == null ? void 0 : E.prefix), style: R == null ? void 0 : R.prefix }, c), L, W);
  }
  if (fw(e2)) {
    var J = "".concat(s, "-group"), oe = "".concat(J, "-addon"), K = "".concat(J, "-wrapper"), q = Q("".concat(s, "-wrapper"), J, y == null ? void 0 : y.wrapper, E == null ? void 0 : E.wrapper), Z = Q(K, D({}, "".concat(K, "-disabled"), g), y == null ? void 0 : y.group, E == null ? void 0 : E.groupWrapper);
    L = ae.createElement(N, { className: Z, ref: H }, ae.createElement(T, { className: q }, d && ae.createElement(M, { className: oe }, d), L, f && ae.createElement(M, { className: oe }, f)));
  }
  return ae.cloneElement(L, { className: Q((r = L.props) === null || r === void 0 ? void 0 : r.className, h) || null, style: V(V({}, (a = L.props) === null || a === void 0 ? void 0 : a.style), p), hidden: I });
}), gw = ["show"];
function vd(e2, t) {
  return l.useMemo(function() {
    var n = {};
    t && (n.show = et(t) === "object" && t.formatter ? t.formatter : !!t), n = V(V({}, n), e2);
    var r = n, a = r.show, o = rt(r, gw);
    return V(V({}, o), {}, { show: !!a, showFormatter: typeof a == "function" ? a : void 0, strategy: o.strategy || function(i) {
      return i.length;
    } });
  }, [e2, t]);
}
var hw = ["autoComplete", "onChange", "onFocus", "onBlur", "onPressEnter", "onKeyDown", "onKeyUp", "prefixCls", "disabled", "htmlSize", "className", "maxLength", "suffix", "showCount", "count", "type", "classes", "classNames", "styles", "onCompositionStart", "onCompositionEnd"], vw = l.forwardRef(function(e2, t) {
  var n = e2.autoComplete, r = e2.onChange, a = e2.onFocus, o = e2.onBlur, i = e2.onPressEnter, s = e2.onKeyDown, c = e2.onKeyUp, u = e2.prefixCls, d = u === void 0 ? "rc-input" : u, f = e2.disabled, h = e2.htmlSize, p = e2.className, g = e2.maxLength, v = e2.suffix, m = e2.showCount, w = e2.count, b = e2.type, C = b === void 0 ? "text" : b, x = e2.classes, I = e2.classNames, y = e2.styles, E = e2.onCompositionStart, O = e2.onCompositionEnd, R = rt(e2, hw), S = l.useState(false), $ = te(S, 2), P = $[0], A = $[1], N = l.useRef(false), T = l.useRef(false), M = l.useRef(null), _ = l.useRef(null), j = function(ue) {
    M.current && ls(M.current, ue);
  }, z = yn(e2.defaultValue, { value: e2.value }), L = te(z, 2), H = L[0], Y = L[1], k = H == null ? "" : String(H), F = l.useState(null), B = te(F, 2), G = B[0], re = B[1], W = vd(w, m), J = W.max || g, oe = W.strategy(k), K = !!J && oe > J;
  l.useImperativeHandle(t, function() {
    var ce;
    return { focus: j, blur: function() {
      var pe;
      (pe = M.current) === null || pe === void 0 || pe.blur();
    }, setSelectionRange: function(pe, $e, Fe) {
      var Le;
      (Le = M.current) === null || Le === void 0 || Le.setSelectionRange(pe, $e, Fe);
    }, select: function() {
      var pe;
      (pe = M.current) === null || pe === void 0 || pe.select();
    }, input: M.current, nativeElement: ((ce = _.current) === null || ce === void 0 ? void 0 : ce.nativeElement) || M.current };
  }), l.useEffect(function() {
    T.current && (T.current = false), A(function(ce) {
      return ce && f ? false : ce;
    });
  }, [f]);
  var q = function(ue, pe, $e) {
    var Fe = pe;
    if (!N.current && W.exceedFormatter && W.max && W.strategy(pe) > W.max) {
      if (Fe = W.exceedFormatter(pe, { max: W.max }), pe !== Fe) {
        var Le, je;
        re([((Le = M.current) === null || Le === void 0 ? void 0 : Le.selectionStart) || 0, ((je = M.current) === null || je === void 0 ? void 0 : je.selectionEnd) || 0]);
      }
    } else if ($e.source === "compositionEnd") return;
    Y(Fe), M.current && _a(M.current, ue, r, Fe);
  };
  l.useEffect(function() {
    if (G) {
      var ce;
      (ce = M.current) === null || ce === void 0 || ce.setSelectionRange.apply(ce, fe(G));
    }
  }, [G]);
  var Z = function(ue) {
    q(ue, ue.target.value, { source: "change" });
  }, ie = function(ue) {
    N.current = false, q(ue, ue.currentTarget.value, { source: "compositionEnd" }), O == null ? void 0 : O(ue);
  }, X = function(ue) {
    i && ue.key === "Enter" && !T.current && (T.current = true, i(ue)), s == null ? void 0 : s(ue);
  }, ee = function(ue) {
    ue.key === "Enter" && (T.current = false), c == null ? void 0 : c(ue);
  }, le = function(ue) {
    A(true), a == null ? void 0 : a(ue);
  }, se = function(ue) {
    T.current && (T.current = false), A(false), o == null ? void 0 : o(ue);
  }, de = function(ue) {
    Y(""), j(), M.current && _a(M.current, ue, r);
  }, Oe = K && "".concat(d, "-out-of-range"), xe = function() {
    var ue = dn(e2, ["prefixCls", "onPressEnter", "addonBefore", "addonAfter", "prefix", "suffix", "allowClear", "defaultValue", "showCount", "count", "classes", "htmlSize", "styles", "classNames", "onClear"]);
    return ae.createElement("input", Ie({ autoComplete: n }, ue, { onChange: Z, onFocus: le, onBlur: se, onKeyDown: X, onKeyUp: ee, className: Q(d, D({}, "".concat(d, "-disabled"), f), I == null ? void 0 : I.input), style: y == null ? void 0 : y.input, ref: M, size: h, type: C, onCompositionStart: function($e) {
      N.current = true, E == null ? void 0 : E($e);
    }, onCompositionEnd: ie }));
  }, We = function() {
    var ue = Number(J) > 0;
    if (v || W.show) {
      var pe = W.showFormatter ? W.showFormatter({ value: k, count: oe, maxLength: J }) : "".concat(oe).concat(ue ? " / ".concat(J) : "");
      return ae.createElement(ae.Fragment, null, W.show && ae.createElement("span", { className: Q("".concat(d, "-show-count-suffix"), D({}, "".concat(d, "-show-count-has-suffix"), !!v), I == null ? void 0 : I.count), style: V({}, y == null ? void 0 : y.count) }, pe), v);
    }
    return null;
  };
  return ae.createElement(cs, Ie({}, R, { prefixCls: d, className: Q(p, Oe), handleReset: de, value: k, focused: P, triggerFocus: j, suffix: We(), disabled: f, classes: x, classNames: I, styles: y, ref: _ }), xe());
});
function pw(e2, t) {
  return typeof Proxy < "u" && e2 ? new Proxy(e2, { get: function(r, a) {
    if (t[a]) return t[a];
    var o = r[a];
    return typeof o == "function" ? o.bind(r) : o;
  } }) : e2;
}
function bw(e2, t) {
  var n = l.useRef(null);
  function r() {
    try {
      var o = e2.selectionStart, i = e2.selectionEnd, s = e2.value, c = s.substring(0, o), u = s.substring(i);
      n.current = { start: o, end: i, value: s, beforeTxt: c, afterTxt: u };
    } catch {
    }
  }
  function a() {
    if (e2 && n.current && t) try {
      var o = e2.value, i = n.current, s = i.beforeTxt, c = i.afterTxt, u = i.start, d = o.length;
      if (o.startsWith(s)) d = s.length;
      else if (o.endsWith(c)) d = o.length - n.current.afterTxt.length;
      else {
        var f = s[u - 1], h = o.indexOf(f, u - 1);
        h !== -1 && (d = h + 1);
      }
      e2.setSelectionRange(d, d);
    } catch (p) {
      un(false, "Something warning of cursor restore. Please fire issue about this: ".concat(p.message));
    }
  }
  return [r, a];
}
var yw = function() {
  var t = l.useState(false), n = te(t, 2), r = n[0], a = n[1];
  return ut(function() {
    a(es());
  }, []), r;
}, ww = 200, Cw = 600;
function Sw(e2) {
  var t = e2.prefixCls, n = e2.upNode, r = e2.downNode, a = e2.upDisabled, o = e2.downDisabled, i = e2.onStep, s = l.useRef(), c = l.useRef([]), u = l.useRef();
  u.current = i;
  var d = function() {
    clearTimeout(s.current);
  }, f = function(C, x) {
    C.preventDefault(), d(), u.current(x);
    function I() {
      u.current(x), s.current = setTimeout(I, ww);
    }
    s.current = setTimeout(I, Cw);
  };
  l.useEffect(function() {
    return function() {
      d(), c.current.forEach(function(b) {
        return pt.cancel(b);
      });
    };
  }, []);
  var h = yw();
  if (h) return null;
  var p = "".concat(t, "-handler"), g = Q(p, "".concat(p, "-up"), D({}, "".concat(p, "-up-disabled"), a)), v = Q(p, "".concat(p, "-down"), D({}, "".concat(p, "-down-disabled"), o)), m = function() {
    return c.current.push(pt(d));
  }, w = { unselectable: "on", role: "button", onMouseUp: m, onMouseLeave: m };
  return l.createElement("div", { className: "".concat(p, "-wrap") }, l.createElement("span", Ie({}, w, { onMouseDown: function(C) {
    f(C, true);
  }, "aria-label": "Increase Value", "aria-disabled": a, className: g }), n || l.createElement("span", { unselectable: "on", className: "".concat(t, "-handler-up-inner") })), l.createElement("span", Ie({}, w, { onMouseDown: function(C) {
    f(C, false);
  }, "aria-label": "Decrease Value", "aria-disabled": o, className: v }), r || l.createElement("span", { unselectable: "on", className: "".concat(t, "-handler-down-inner") })));
}
function Gl(e2) {
  var t = typeof e2 == "number" ? io(e2) : Zn(e2).fullStr, n = t.includes(".");
  return n ? Zn(t.replace(/(\d)\.(\d)/g, "$1$2.")).fullStr : e2 + "0";
}
const xw = function() {
  var e2 = l.useRef(0), t = function() {
    pt.cancel(e2.current);
  };
  return l.useEffect(function() {
    return t;
  }, []), function(n) {
    t(), e2.current = pt(function() {
      n();
    });
  };
};
var $w = ["prefixCls", "className", "style", "min", "max", "step", "defaultValue", "value", "disabled", "readOnly", "upHandler", "downHandler", "keyboard", "changeOnWheel", "controls", "classNames", "stringMode", "parser", "formatter", "precision", "decimalSeparator", "onChange", "onInput", "onPressEnter", "onStep", "changeOnBlur", "domRef"], Ew = ["disabled", "style", "prefixCls", "value", "prefix", "suffix", "addonBefore", "addonAfter", "className", "classNames"], Kl = function(t, n) {
  return t || n.isEmpty() ? n.toString() : n.toNumber();
}, Xl = function(t) {
  var n = pn(t);
  return n.isInvalidate() ? null : n;
}, Rw = l.forwardRef(function(e2, t) {
  var n = e2.prefixCls, r = e2.className, a = e2.style, o = e2.min, i = e2.max, s = e2.step, c = s === void 0 ? 1 : s, u = e2.defaultValue, d = e2.value, f = e2.disabled, h = e2.readOnly, p = e2.upHandler, g = e2.downHandler, v = e2.keyboard, m = e2.changeOnWheel, w = m === void 0 ? false : m, b = e2.controls, C = b === void 0 ? true : b;
  e2.classNames;
  var x = e2.stringMode, I = e2.parser, y = e2.formatter, E = e2.precision, O = e2.decimalSeparator, R = e2.onChange, S = e2.onInput, $ = e2.onPressEnter, P = e2.onStep, A = e2.changeOnBlur, N = A === void 0 ? true : A, T = e2.domRef, M = rt(e2, $w), _ = "".concat(n, "-input"), j = l.useRef(null), z = l.useState(false), L = te(z, 2), H = L[0], Y = L[1], k = l.useRef(false), F = l.useRef(false), B = l.useRef(false), G = l.useState(function() {
    return pn(d ?? u);
  }), re = te(G, 2), W = re[0], J = re[1];
  function oe(Te) {
    d === void 0 && J(Te);
  }
  var K = l.useCallback(function(Te, ge) {
    if (!ge) return E >= 0 ? E : Math.max(Qn(Te), Qn(c));
  }, [E, c]), q = l.useCallback(function(Te) {
    var ge = String(Te);
    if (I) return I(ge);
    var De = ge;
    return O && (De = De.replace(O, ".")), De.replace(/[^\w.-]+/g, "");
  }, [I, O]), Z = l.useRef(""), ie = l.useCallback(function(Te, ge) {
    if (y) return y(Te, { userTyping: ge, input: String(Z.current) });
    var De = typeof Te == "number" ? io(Te) : Te;
    if (!ge) {
      var _e4 = K(De, ge);
      if (ss(De) && (O || _e4 >= 0)) {
        var qe = O || ".";
        De = xa(De, qe, _e4);
      }
    }
    return De;
  }, [y, K, O]), X = l.useState(function() {
    var Te = u ?? d;
    return W.isInvalidate() && ["string", "number"].includes(et(Te)) ? Number.isNaN(Te) ? "" : Te : ie(W.toString(), false);
  }), ee = te(X, 2), le = ee[0], se = ee[1];
  Z.current = le;
  function de(Te, ge) {
    se(ie(Te.isInvalidate() ? Te.toString(false) : Te.toString(!ge), ge));
  }
  var Oe = l.useMemo(function() {
    return Xl(i);
  }, [i, E]), xe = l.useMemo(function() {
    return Xl(o);
  }, [o, E]), We = l.useMemo(function() {
    return !Oe || !W || W.isInvalidate() ? false : Oe.lessEquals(W);
  }, [Oe, W]), ce = l.useMemo(function() {
    return !xe || !W || W.isInvalidate() ? false : W.lessEquals(xe);
  }, [xe, W]), ue = bw(j.current, H), pe = te(ue, 2), $e = pe[0], Fe = pe[1], Le = function(ge) {
    return Oe && !ge.lessEquals(Oe) ? Oe : xe && !xe.lessEquals(ge) ? xe : null;
  }, je = function(ge) {
    return !Le(ge);
  }, Ee = function(ge, De) {
    var _e4 = ge, qe = je(_e4) || _e4.isEmpty();
    if (!_e4.isEmpty() && !De && (_e4 = Le(_e4) || _e4, qe = true), !h && !f && qe) {
      var Se = _e4.toString(), he = K(Se, De);
      return he >= 0 && (_e4 = pn(xa(Se, ".", he)), je(_e4) || (_e4 = pn(xa(Se, ".", he, true)))), _e4.equals(W) || (oe(_e4), R == null ? void 0 : R(_e4.isEmpty() ? null : Kl(x, _e4)), d === void 0 && de(_e4, De)), _e4;
    }
    return W;
  }, Be = xw(), Ke = function Te(ge) {
    if ($e(), Z.current = ge, se(ge), !F.current) {
      var De = q(ge), _e4 = pn(De);
      _e4.isNaN() || Ee(_e4, true);
    }
    S == null ? void 0 : S(ge), Be(function() {
      var qe = ge;
      I || (qe = ge.replace(/。/g, ".")), qe !== ge && Te(qe);
    });
  }, Me = function() {
    F.current = true;
  }, be = function() {
    F.current = false, Ke(j.current.value);
  }, Ae = function(ge) {
    Ke(ge.target.value);
  }, Je = function(ge) {
    var De;
    if (!(ge && We || !ge && ce)) {
      k.current = false;
      var _e4 = pn(B.current ? Gl(c) : c);
      ge || (_e4 = _e4.negate());
      var qe = (W || pn(0)).add(_e4.toString()), Se = Ee(qe, false);
      P == null ? void 0 : P(Kl(x, Se), { offset: B.current ? Gl(c) : c, type: ge ? "up" : "down" }), (De = j.current) === null || De === void 0 || De.focus();
    }
  }, Qe = function(ge) {
    var De = pn(q(le)), _e4;
    De.isNaN() ? _e4 = Ee(W, ge) : _e4 = Ee(De, ge), d !== void 0 ? de(W, false) : _e4.isNaN() || de(_e4, false);
  }, st = function() {
    k.current = true;
  }, ot = function(ge) {
    var De = ge.key, _e4 = ge.shiftKey;
    k.current = true, B.current = _e4, De === "Enter" && (F.current || (k.current = false), Qe(false), $ == null ? void 0 : $(ge)), v !== false && !F.current && ["Up", "ArrowUp", "Down", "ArrowDown"].includes(De) && (Je(De === "Up" || De === "ArrowUp"), ge.preventDefault());
  }, Bt = function() {
    k.current = false, B.current = false;
  };
  l.useEffect(function() {
    if (w && H) {
      var Te = function(_e4) {
        Je(_e4.deltaY < 0), _e4.preventDefault();
      }, ge = j.current;
      if (ge) return ge.addEventListener("wheel", Te, { passive: false }), function() {
        return ge.removeEventListener("wheel", Te);
      };
    }
  });
  var It = function() {
    N && Qe(false), Y(false), k.current = false;
  };
  return Lr(function() {
    W.isInvalidate() || de(W, false);
  }, [E, y]), Lr(function() {
    var Te = pn(d);
    J(Te);
    var ge = pn(q(le));
    (!Te.equals(ge) || !k.current || y) && de(Te, k.current);
  }, [d]), Lr(function() {
    y && Fe();
  }, [le]), l.createElement("div", { ref: T, className: Q(n, r, D(D(D(D(D({}, "".concat(n, "-focused"), H), "".concat(n, "-disabled"), f), "".concat(n, "-readonly"), h), "".concat(n, "-not-a-number"), W.isNaN()), "".concat(n, "-out-of-range"), !W.isInvalidate() && !je(W))), style: a, onFocus: function() {
    Y(true);
  }, onBlur: It, onKeyDown: ot, onKeyUp: Bt, onCompositionStart: Me, onCompositionEnd: be, onBeforeInput: st }, C && l.createElement(Sw, { prefixCls: n, upNode: p, downNode: g, upDisabled: We, downDisabled: ce, onStep: Je }), l.createElement("div", { className: "".concat(_, "-wrap") }, l.createElement("input", Ie({ autoComplete: "off", role: "spinbutton", "aria-valuemin": o, "aria-valuemax": i, "aria-valuenow": W.isInvalidate() ? null : W.toString(), step: c }, M, { ref: Tn(j, t), className: _, value: le, onChange: Ae, disabled: f, readOnly: h }))));
}), Ow = l.forwardRef(function(e2, t) {
  var n = e2.disabled, r = e2.style, a = e2.prefixCls, o = a === void 0 ? "rc-input-number" : a, i = e2.value, s = e2.prefix, c = e2.suffix, u = e2.addonBefore, d = e2.addonAfter, f = e2.className, h = e2.classNames, p = rt(e2, Ew), g = l.useRef(null), v = l.useRef(null), m = l.useRef(null), w = function(C) {
    m.current && ls(m.current, C);
  };
  return l.useImperativeHandle(t, function() {
    return pw(m.current, { focus: w, nativeElement: g.current.nativeElement || v.current });
  }), l.createElement(cs, { className: f, triggerFocus: w, prefixCls: o, value: i, disabled: n, style: r, prefix: s, suffix: c, addonAfter: d, addonBefore: u, classNames: h, components: { affixWrapper: "div", groupWrapper: "div", wrapper: "div", groupAddon: "div" }, ref: g }, l.createElement(Rw, Ie({ prefixCls: o, disabled: n, ref: m, domRef: v, className: h == null ? void 0 : h.input }, p)));
});
const Iw = (e2) => {
  var t;
  const n = (t = e2.handleVisible) !== null && t !== void 0 ? t : "auto", r = e2.controlHeightSM - e2.lineWidth * 2;
  return Object.assign(Object.assign({}, sa(e2)), { controlWidth: 90, handleWidth: r, handleFontSize: e2.fontSize / 2, handleVisible: n, handleActiveBg: e2.colorFillAlter, handleBg: e2.colorBgContainer, filledHandleBg: new Wa(e2.colorFillSecondary).onBackground(e2.colorBgContainer).toHexString(), handleHoverColor: e2.colorPrimary, handleBorderColor: e2.colorBorder, handleOpacity: n === true ? 1 : 0, handleVisibleWidth: n === true ? r : 0 });
}, Yl = (e2, t) => {
  let { componentCls: n, borderRadiusSM: r, borderRadiusLG: a } = e2;
  const o = t === "lg" ? a : r;
  return { [`&-${t}`]: { [`${n}-handler-wrap`]: { borderStartEndRadius: o, borderEndEndRadius: o }, [`${n}-handler-up`]: { borderStartEndRadius: o }, [`${n}-handler-down`]: { borderEndEndRadius: o } } };
}, Aw = (e2) => {
  const { componentCls: t, lineWidth: n, lineType: r, borderRadius: a, inputFontSizeSM: o, inputFontSizeLG: i, controlHeightLG: s, controlHeightSM: c, colorError: u, paddingInlineSM: d, paddingBlockSM: f, paddingBlockLG: h, paddingInlineLG: p, colorIcon: g, motionDurationMid: v, handleHoverColor: m, handleOpacity: w, paddingInline: b, paddingBlock: C, handleBg: x, handleActiveBg: I, colorTextDisabled: y, borderRadiusSM: E, borderRadiusLG: O, controlWidth: R, handleBorderColor: S, filledHandleBg: $, lineHeightLG: P, calc: A } = e2;
  return [{ [t]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Ut(e2)), oo(e2)), { display: "inline-block", width: R, margin: 0, padding: 0, borderRadius: a }), Zu(e2, { [`${t}-handler-wrap`]: { background: x, [`${t}-handler-down`]: { borderBlockStart: `${ne(n)} ${r} ${S}` } } })), rd(e2, { [`${t}-handler-wrap`]: { background: $, [`${t}-handler-down`]: { borderBlockStart: `${ne(n)} ${r} ${S}` } }, "&:focus-within": { [`${t}-handler-wrap`]: { background: x } } })), id(e2, { [`${t}-handler-wrap`]: { background: x, [`${t}-handler-down`]: { borderBlockStart: `${ne(n)} ${r} ${S}` } } })), td(e2)), { "&-rtl": { direction: "rtl", [`${t}-input`]: { direction: "rtl" } }, "&-lg": { padding: 0, fontSize: i, lineHeight: P, borderRadius: O, [`input${t}-input`]: { height: A(s).sub(A(n).mul(2)).equal(), padding: `${ne(h)} ${ne(p)}` } }, "&-sm": { padding: 0, fontSize: o, borderRadius: E, [`input${t}-input`]: { height: A(c).sub(A(n).mul(2)).equal(), padding: `${ne(f)} ${ne(d)}` } }, "&-out-of-range": { [`${t}-input-wrap`]: { input: { color: u } } }, "&-group": Object.assign(Object.assign(Object.assign({}, Ut(e2)), ud(e2)), { "&-wrapper": Object.assign(Object.assign(Object.assign({ display: "inline-block", textAlign: "start", verticalAlign: "top", [`${t}-affix-wrapper`]: { width: "100%" }, "&-lg": { [`${t}-group-addon`]: { borderRadius: O, fontSize: e2.fontSizeLG } }, "&-sm": { [`${t}-group-addon`]: { borderRadius: E } } }, ed(e2)), ad(e2)), { [`&:not(${t}-compact-first-item):not(${t}-compact-last-item)${t}-compact-item`]: { [`${t}, ${t}-group-addon`]: { borderRadius: 0 } }, [`&:not(${t}-compact-last-item)${t}-compact-first-item`]: { [`${t}, ${t}-group-addon`]: { borderStartEndRadius: 0, borderEndEndRadius: 0 } }, [`&:not(${t}-compact-first-item)${t}-compact-last-item`]: { [`${t}, ${t}-group-addon`]: { borderStartStartRadius: 0, borderEndStartRadius: 0 } } }) }), [`&-disabled ${t}-input`]: { cursor: "not-allowed" }, [t]: { "&-input": Object.assign(Object.assign(Object.assign(Object.assign({}, Ut(e2)), { width: "100%", padding: `${ne(C)} ${ne(b)}`, textAlign: "start", backgroundColor: "transparent", border: 0, borderRadius: a, outline: 0, transition: `all ${v} linear`, appearance: "textfield", fontSize: "inherit" }), sd(e2.colorTextPlaceholder)), { '&[type="number"]::-webkit-inner-spin-button, &[type="number"]::-webkit-outer-spin-button': { margin: 0, appearance: "none" } }) }, [`&:hover ${t}-handler-wrap, &-focused ${t}-handler-wrap`]: { width: e2.handleWidth, opacity: 1 } }) }, { [t]: Object.assign(Object.assign(Object.assign({ [`${t}-handler-wrap`]: { position: "absolute", insetBlockStart: 0, insetInlineEnd: 0, width: e2.handleVisibleWidth, opacity: w, height: "100%", borderStartStartRadius: 0, borderStartEndRadius: a, borderEndEndRadius: a, borderEndStartRadius: 0, display: "flex", flexDirection: "column", alignItems: "stretch", transition: `all ${v}`, overflow: "hidden", [`${t}-handler`]: { display: "flex", alignItems: "center", justifyContent: "center", flex: "auto", height: "40%", [`
              ${t}-handler-up-inner,
              ${t}-handler-down-inner
            `]: { marginInlineEnd: 0, fontSize: e2.handleFontSize } } }, [`${t}-handler`]: { height: "50%", overflow: "hidden", color: g, fontWeight: "bold", lineHeight: 0, textAlign: "center", cursor: "pointer", borderInlineStart: `${ne(n)} ${r} ${S}`, transition: `all ${v} linear`, "&:active": { background: I }, "&:hover": { height: "60%", [`
              ${t}-handler-up-inner,
              ${t}-handler-down-inner
            `]: { color: m } }, "&-up-inner, &-down-inner": Object.assign(Object.assign({}, Jr()), { color: g, transition: `all ${v} linear`, userSelect: "none" }) }, [`${t}-handler-up`]: { borderStartEndRadius: a }, [`${t}-handler-down`]: { borderEndEndRadius: a } }, Yl(e2, "lg")), Yl(e2, "sm")), { "&-disabled, &-readonly": { [`${t}-handler-wrap`]: { display: "none" }, [`${t}-input`]: { color: "inherit" } }, [`
          ${t}-handler-up-disabled,
          ${t}-handler-down-disabled
        `]: { cursor: "not-allowed" }, [`
          ${t}-handler-up-disabled:hover &-handler-up-inner,
          ${t}-handler-down-disabled:hover &-handler-down-inner
        `]: { color: y } }) }];
}, Pw = (e2) => {
  const { componentCls: t, paddingBlock: n, paddingInline: r, inputAffixPadding: a, controlWidth: o, borderRadiusLG: i, borderRadiusSM: s, paddingInlineLG: c, paddingInlineSM: u, paddingBlockLG: d, paddingBlockSM: f, motionDurationMid: h } = e2;
  return { [`${t}-affix-wrapper`]: Object.assign(Object.assign({ [`input${t}-input`]: { padding: `${ne(n)} 0` } }, oo(e2)), { position: "relative", display: "inline-flex", alignItems: "center", width: o, padding: 0, paddingInlineStart: r, "&-lg": { borderRadius: i, paddingInlineStart: c, [`input${t}-input`]: { padding: `${ne(d)} 0` } }, "&-sm": { borderRadius: s, paddingInlineStart: u, [`input${t}-input`]: { padding: `${ne(f)} 0` } }, [`&:not(${t}-disabled):hover`]: { zIndex: 1 }, "&-focused, &:focus": { zIndex: 1 }, [`&-disabled > ${t}-disabled`]: { background: "transparent" }, [`> div${t}`]: { width: "100%", border: "none", outline: "none", [`&${t}-focused`]: { boxShadow: "none !important" } }, "&::before": { display: "inline-block", width: 0, visibility: "hidden", content: '"\\a0"' }, [`${t}-handler-wrap`]: { zIndex: 2 }, [t]: { position: "static", color: "inherit", "&-prefix, &-suffix": { display: "flex", flex: "none", alignItems: "center", pointerEvents: "none" }, "&-prefix": { marginInlineEnd: a }, "&-suffix": { insetBlockStart: 0, insetInlineEnd: 0, height: "100%", marginInlineEnd: r, marginInlineStart: a, transition: `margin ${h}` } }, [`&:hover ${t}-handler-wrap, &-focused ${t}-handler-wrap`]: { width: e2.handleWidth, opacity: 1 }, [`&:not(${t}-affix-wrapper-without-controls):hover ${t}-suffix`]: { marginInlineEnd: e2.calc(e2.handleWidth).add(r).equal() } }) };
}, Nw = Lt("InputNumber", (e2) => {
  const t = mt(e2, ia(e2));
  return [Aw(t), Pw(t), eo(t)];
}, Iw, { unitless: { handleOpacity: true } });
var Mw = function(e2, t) {
  var n = {};
  for (var r in e2) Object.prototype.hasOwnProperty.call(e2, r) && t.indexOf(r) < 0 && (n[r] = e2[r]);
  if (e2 != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e2); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e2, r[a]) && (n[r[a]] = e2[r[a]]);
  return n;
};
const pd = l.forwardRef((e2, t) => {
  const { getPrefixCls: n, direction: r } = l.useContext(ft), a = l.useRef(null);
  l.useImperativeHandle(t, () => a.current);
  const { className: o, rootClassName: i, size: s, disabled: c, prefixCls: u, addonBefore: d, addonAfter: f, prefix: h, suffix: p, bordered: g, readOnly: v, status: m, controls: w, variant: b } = e2, C = Mw(e2, ["className", "rootClassName", "size", "disabled", "prefixCls", "addonBefore", "addonAfter", "prefix", "suffix", "bordered", "readOnly", "status", "controls", "variant"]), x = n("input-number", u), I = ir(x), [y, E, O] = Nw(x, I), { compactSize: R, compactItemClassnames: S } = Er(x, r);
  let $ = l.createElement(cw, { className: `${x}-handler-up-inner` }), P = l.createElement(Wu, { className: `${x}-handler-down-inner` });
  const A = typeof w == "boolean" ? w : void 0;
  typeof w == "object" && ($ = typeof w.upIcon > "u" ? $ : l.createElement("span", { className: `${x}-handler-up-inner` }, w.upIcon), P = typeof w.downIcon > "u" ? P : l.createElement("span", { className: `${x}-handler-down-inner` }, w.downIcon));
  const { hasFeedback: N, status: T, isFormItemInput: M, feedbackIcon: _ } = l.useContext(Kt), j = aa(T, m), z = wn((W) => {
    var J;
    return (J = s ?? R) !== null && J !== void 0 ? J : W;
  }), L = l.useContext(kn), H = c ?? L, [Y, k] = ao("inputNumber", b, g), F = N && l.createElement(l.Fragment, null, _), B = Q({ [`${x}-lg`]: z === "large", [`${x}-sm`]: z === "small", [`${x}-rtl`]: r === "rtl", [`${x}-in-form-item`]: M }, E), G = `${x}-group`, re = l.createElement(Ow, Object.assign({ ref: a, disabled: H, className: Q(O, I, o, i, S), upHandler: $, downHandler: P, prefixCls: x, readOnly: v, controls: A, prefix: h, suffix: F || p, addonBefore: d && l.createElement(Gr, { form: true, space: true }, d), addonAfter: f && l.createElement(Gr, { form: true, space: true }, f), classNames: { input: B, variant: Q({ [`${x}-${Y}`]: k }, Cr(x, j, N)), affixWrapper: Q({ [`${x}-affix-wrapper-sm`]: z === "small", [`${x}-affix-wrapper-lg`]: z === "large", [`${x}-affix-wrapper-rtl`]: r === "rtl", [`${x}-affix-wrapper-without-controls`]: w === false || H }, E), wrapper: Q({ [`${G}-rtl`]: r === "rtl" }, E), groupWrapper: Q({ [`${x}-group-wrapper-sm`]: z === "small", [`${x}-group-wrapper-lg`]: z === "large", [`${x}-group-wrapper-rtl`]: r === "rtl", [`${x}-group-wrapper-${Y}`]: k }, Cr(`${x}-group-wrapper`, j, N), E) } }, C));
  return y(re);
}), Fw = pd, Tw = (e2) => l.createElement(Nc, { theme: { components: { InputNumber: { handleVisible: true } } } }, l.createElement(pd, Object.assign({}, e2)));
Fw._InternalPanelDoNotUseOrYouWillBeFired = Tw;
const bd = (e2) => {
  let t;
  return typeof e2 == "object" && (e2 == null ? void 0 : e2.clearIcon) ? t = e2 : e2 && (t = { clearIcon: ae.createElement(Wi, null) }), t;
};
function yd(e2, t) {
  const n = l.useRef([]), r = () => {
    n.current.push(setTimeout(() => {
      var a, o, i, s;
      !((a = e2.current) === null || a === void 0) && a.input && ((o = e2.current) === null || o === void 0 ? void 0 : o.input.getAttribute("type")) === "password" && (!((i = e2.current) === null || i === void 0) && i.input.hasAttribute("value")) && ((s = e2.current) === null || s === void 0 || s.input.removeAttribute("value"));
    }));
  };
  return l.useEffect(() => (t && r(), () => n.current.forEach((a) => {
    a && clearTimeout(a);
  })), []), r;
}
function _w(e2) {
  return !!(e2.prefix || e2.suffix || e2.allowClear || e2.showCount);
}
var jw = function(e2, t) {
  var n = {};
  for (var r in e2) Object.prototype.hasOwnProperty.call(e2, r) && t.indexOf(r) < 0 && (n[r] = e2[r]);
  if (e2 != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e2); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e2, r[a]) && (n[r[a]] = e2[r[a]]);
  return n;
};
const so = l.forwardRef((e2, t) => {
  const { prefixCls: n, bordered: r = true, status: a, size: o, disabled: i, onBlur: s, onFocus: c, suffix: u, allowClear: d, addonAfter: f, addonBefore: h, className: p, style: g, styles: v, rootClassName: m, onChange: w, classNames: b, variant: C } = e2, x = jw(e2, ["prefixCls", "bordered", "status", "size", "disabled", "onBlur", "onFocus", "suffix", "allowClear", "addonAfter", "addonBefore", "className", "style", "styles", "rootClassName", "onChange", "classNames", "variant"]), { getPrefixCls: I, direction: y, allowClear: E, autoComplete: O, className: R, style: S, classNames: $, styles: P } = _n("input"), A = I("input", n), N = l.useRef(null), T = ir(A), [M, _, j] = dd(A, m), [z] = fd(A, T), { compactSize: L, compactItemClassnames: H } = Er(A, y), Y = wn((se) => {
    var de;
    return (de = o ?? L) !== null && de !== void 0 ? de : se;
  }), k = ae.useContext(kn), F = i ?? k, { status: B, hasFeedback: G, feedbackIcon: re } = l.useContext(Kt), W = aa(B, a), J = _w(e2) || !!G;
  l.useRef(J);
  const oe = yd(N, true), K = (se) => {
    oe(), s == null ? void 0 : s(se);
  }, q = (se) => {
    oe(), c == null ? void 0 : c(se);
  }, Z = (se) => {
    oe(), w == null ? void 0 : w(se);
  }, ie = (G || u) && ae.createElement(ae.Fragment, null, u, G && re), X = bd(d ?? E), [ee, le] = ao("input", C, r);
  return M(z(ae.createElement(vw, Object.assign({ ref: Tn(t, N), prefixCls: A, autoComplete: O }, x, { disabled: F, onBlur: K, onFocus: q, style: Object.assign(Object.assign({}, S), g), styles: Object.assign(Object.assign({}, P), v), suffix: ie, allowClear: X, className: Q(p, m, j, T, H, R), onChange: Z, addonBefore: h && ae.createElement(Gr, { form: true, space: true }, h), addonAfter: f && ae.createElement(Gr, { form: true, space: true }, f), classNames: Object.assign(Object.assign(Object.assign({}, b), $), { input: Q({ [`${A}-sm`]: Y === "small", [`${A}-lg`]: Y === "large", [`${A}-rtl`]: y === "rtl" }, b == null ? void 0 : b.input, $.input, _), variant: Q({ [`${A}-${ee}`]: le }, Cr(A, W)), affixWrapper: Q({ [`${A}-affix-wrapper-sm`]: Y === "small", [`${A}-affix-wrapper-lg`]: Y === "large", [`${A}-affix-wrapper-rtl`]: y === "rtl" }, _), wrapper: Q({ [`${A}-group-rtl`]: y === "rtl" }, _), groupWrapper: Q({ [`${A}-group-wrapper-sm`]: Y === "small", [`${A}-group-wrapper-lg`]: Y === "large", [`${A}-group-wrapper-rtl`]: y === "rtl", [`${A}-group-wrapper-${ee}`]: le }, Cr(`${A}-group-wrapper`, W, G), _) }) }))));
});
function ja(e2) {
  const [t, n] = l.useState(e2);
  return l.useEffect(() => {
    const r = setTimeout(() => {
      n(e2);
    }, e2.length ? 0 : 10);
    return () => {
      clearTimeout(r);
    };
  }, [e2]), t;
}
const Dw = (e2) => {
  const { componentCls: t } = e2, n = `${t}-show-help`, r = `${t}-show-help-item`;
  return { [n]: { transition: `opacity ${e2.motionDurationFast} ${e2.motionEaseInOut}`, "&-appear, &-enter": { opacity: 0, "&-active": { opacity: 1 } }, "&-leave": { opacity: 1, "&-active": { opacity: 0 } }, [r]: { overflow: "hidden", transition: `height ${e2.motionDurationFast} ${e2.motionEaseInOut},
                     opacity ${e2.motionDurationFast} ${e2.motionEaseInOut},
                     transform ${e2.motionDurationFast} ${e2.motionEaseInOut} !important`, [`&${r}-appear, &${r}-enter`]: { transform: "translateY(-5px)", opacity: 0, "&-active": { transform: "translateY(0)", opacity: 1 } }, [`&${r}-leave-active`]: { transform: "translateY(-5px)" } } } };
}, Lw = (e2) => ({ legend: { display: "block", width: "100%", marginBottom: e2.marginLG, padding: 0, color: e2.colorTextDescription, fontSize: e2.fontSizeLG, lineHeight: "inherit", border: 0, borderBottom: `${ne(e2.lineWidth)} ${e2.lineType} ${e2.colorBorder}` }, 'input[type="search"]': { boxSizing: "border-box" }, 'input[type="radio"], input[type="checkbox"]': { lineHeight: "normal" }, 'input[type="file"]': { display: "block" }, 'input[type="range"]': { display: "block", width: "100%" }, "select[multiple], select[size]": { height: "auto" }, "input[type='file']:focus,\n  input[type='radio']:focus,\n  input[type='checkbox']:focus": { outline: 0, boxShadow: `0 0 0 ${ne(e2.controlOutlineWidth)} ${e2.controlOutline}` }, output: { display: "block", paddingTop: 15, color: e2.colorText, fontSize: e2.fontSize, lineHeight: e2.lineHeight } }), Ql = (e2, t) => {
  const { formItemCls: n } = e2;
  return { [n]: { [`${n}-label > label`]: { height: t }, [`${n}-control-input`]: { minHeight: t } } };
}, Bw = (e2) => {
  const { componentCls: t } = e2;
  return { [e2.componentCls]: Object.assign(Object.assign(Object.assign({}, Ut(e2)), Lw(e2)), { [`${t}-text`]: { display: "inline-block", paddingInlineEnd: e2.paddingSM }, "&-small": Object.assign({}, Ql(e2, e2.controlHeightSM)), "&-large": Object.assign({}, Ql(e2, e2.controlHeightLG)) }) };
}, zw = (e2) => {
  const { formItemCls: t, iconCls: n, rootPrefixCls: r, antCls: a, labelRequiredMarkColor: o, labelColor: i, labelFontSize: s, labelHeight: c, labelColonMarginInlineStart: u, labelColonMarginInlineEnd: d, itemMarginBottom: f } = e2;
  return { [t]: Object.assign(Object.assign({}, Ut(e2)), { marginBottom: f, verticalAlign: "top", "&-with-help": { transition: "none" }, [`&-hidden,
        &-hidden${a}-row`]: { display: "none" }, "&-has-warning": { [`${t}-split`]: { color: e2.colorError } }, "&-has-error": { [`${t}-split`]: { color: e2.colorWarning } }, [`${t}-label`]: { flexGrow: 0, overflow: "hidden", whiteSpace: "nowrap", textAlign: "end", verticalAlign: "middle", "&-left": { textAlign: "start" }, "&-wrap": { overflow: "unset", lineHeight: e2.lineHeight, whiteSpace: "unset" }, "> label": { position: "relative", display: "inline-flex", alignItems: "center", maxWidth: "100%", height: c, color: i, fontSize: s, [`> ${n}`]: { fontSize: e2.fontSize, verticalAlign: "top" }, [`&${t}-required`]: { "&::before": { display: "inline-block", marginInlineEnd: e2.marginXXS, color: o, fontSize: e2.fontSize, fontFamily: "SimSun, sans-serif", lineHeight: 1, content: '"*"' }, [`&${t}-required-mark-hidden, &${t}-required-mark-optional`]: { "&::before": { display: "none" } } }, [`${t}-optional`]: { display: "inline-block", marginInlineStart: e2.marginXXS, color: e2.colorTextDescription, [`&${t}-required-mark-hidden`]: { display: "none" } }, [`${t}-tooltip`]: { color: e2.colorTextDescription, cursor: "help", writingMode: "horizontal-tb", marginInlineStart: e2.marginXXS }, "&::after": { content: '":"', position: "relative", marginBlock: 0, marginInlineStart: u, marginInlineEnd: d }, [`&${t}-no-colon::after`]: { content: '"\\a0"' } } }, [`${t}-control`]: { "--ant-display": "flex", flexDirection: "column", flexGrow: 1, [`&:first-child:not([class^="'${r}-col-'"]):not([class*="' ${r}-col-'"])`]: { width: "100%" }, "&-input": { position: "relative", display: "flex", alignItems: "center", minHeight: e2.controlHeight, "&-content": { flex: "auto", maxWidth: "100%" } } }, [t]: { "&-additional": { display: "flex", flexDirection: "column" }, "&-explain, &-extra": { clear: "both", color: e2.colorTextDescription, fontSize: e2.fontSize, lineHeight: e2.lineHeight }, "&-explain-connected": { width: "100%" }, "&-extra": { minHeight: e2.controlHeightSM, transition: `color ${e2.motionDurationMid} ${e2.motionEaseOut}` }, "&-explain": { "&-error": { color: e2.colorError }, "&-warning": { color: e2.colorWarning } } }, [`&-with-help ${t}-explain`]: { height: "auto", opacity: 1 }, [`${t}-feedback-icon`]: { fontSize: e2.fontSize, textAlign: "center", visibility: "visible", animationName: Gi, animationDuration: e2.motionDurationMid, animationTimingFunction: e2.motionEaseOutBack, pointerEvents: "none", "&-success": { color: e2.colorSuccess }, "&-error": { color: e2.colorError }, "&-warning": { color: e2.colorWarning }, "&-validating": { color: e2.colorPrimary } } }) };
}, Jl = (e2, t) => {
  const { formItemCls: n } = e2;
  return { [`${t}-horizontal`]: { [`${n}-label`]: { flexGrow: 0 }, [`${n}-control`]: { flex: "1 1 0", minWidth: 0 }, [`${n}-label[class$='-24'], ${n}-label[class*='-24 ']`]: { [`& + ${n}-control`]: { minWidth: "unset" } } } };
}, Hw = (e2) => {
  const { componentCls: t, formItemCls: n, inlineItemMarginBottom: r } = e2;
  return { [`${t}-inline`]: { display: "flex", flexWrap: "wrap", [n]: { flex: "none", marginInlineEnd: e2.margin, marginBottom: r, "&-row": { flexWrap: "nowrap" }, [`> ${n}-label,
        > ${n}-control`]: { display: "inline-block", verticalAlign: "top" }, [`> ${n}-label`]: { flex: "none" }, [`${t}-text`]: { display: "inline-block" }, [`${n}-has-feedback`]: { display: "inline-block" } } } };
}, bn = (e2) => ({ padding: e2.verticalLabelPadding, margin: e2.verticalLabelMargin, whiteSpace: "initial", textAlign: "start", "> label": { margin: 0, "&::after": { visibility: "hidden" } } }), wd = (e2) => {
  const { componentCls: t, formItemCls: n, rootPrefixCls: r } = e2;
  return { [`${n} ${n}-label`]: bn(e2), [`${t}:not(${t}-inline)`]: { [n]: { flexWrap: "wrap", [`${n}-label, ${n}-control`]: { [`&:not([class*=" ${r}-col-xs"])`]: { flex: "0 0 100%", maxWidth: "100%" } } } } };
}, Vw = (e2) => {
  const { componentCls: t, formItemCls: n, antCls: r } = e2;
  return { [`${t}-vertical`]: { [`${n}:not(${n}-horizontal)`]: { [`${n}-row`]: { flexDirection: "column" }, [`${n}-label > label`]: { height: "auto" }, [`${n}-control`]: { width: "100%" }, [`${n}-label,
        ${r}-col-24${n}-label,
        ${r}-col-xl-24${n}-label`]: bn(e2) } }, [`@media (max-width: ${ne(e2.screenXSMax)})`]: [wd(e2), { [t]: { [`${n}:not(${n}-horizontal)`]: { [`${r}-col-xs-24${n}-label`]: bn(e2) } } }], [`@media (max-width: ${ne(e2.screenSMMax)})`]: { [t]: { [`${n}:not(${n}-horizontal)`]: { [`${r}-col-sm-24${n}-label`]: bn(e2) } } }, [`@media (max-width: ${ne(e2.screenMDMax)})`]: { [t]: { [`${n}:not(${n}-horizontal)`]: { [`${r}-col-md-24${n}-label`]: bn(e2) } } }, [`@media (max-width: ${ne(e2.screenLGMax)})`]: { [t]: { [`${n}:not(${n}-horizontal)`]: { [`${r}-col-lg-24${n}-label`]: bn(e2) } } } };
}, Ww = (e2) => {
  const { formItemCls: t, antCls: n } = e2;
  return { [`${t}-vertical`]: { [`${t}-row`]: { flexDirection: "column" }, [`${t}-label > label`]: { height: "auto" }, [`${t}-control`]: { width: "100%" } }, [`${t}-vertical ${t}-label,
      ${n}-col-24${t}-label,
      ${n}-col-xl-24${t}-label`]: bn(e2), [`@media (max-width: ${ne(e2.screenXSMax)})`]: [wd(e2), { [t]: { [`${n}-col-xs-24${t}-label`]: bn(e2) } }], [`@media (max-width: ${ne(e2.screenSMMax)})`]: { [t]: { [`${n}-col-sm-24${t}-label`]: bn(e2) } }, [`@media (max-width: ${ne(e2.screenMDMax)})`]: { [t]: { [`${n}-col-md-24${t}-label`]: bn(e2) } }, [`@media (max-width: ${ne(e2.screenLGMax)})`]: { [t]: { [`${n}-col-lg-24${t}-label`]: bn(e2) } } };
}, qw = (e2) => ({ labelRequiredMarkColor: e2.colorError, labelColor: e2.colorTextHeading, labelFontSize: e2.fontSize, labelHeight: e2.controlHeight, labelColonMarginInlineStart: e2.marginXXS / 2, labelColonMarginInlineEnd: e2.marginXS, itemMarginBottom: e2.marginLG, verticalLabelPadding: `0 0 ${e2.paddingXS}px`, verticalLabelMargin: 0, inlineItemMarginBottom: 0 }), Cd = (e2, t) => mt(e2, { formItemCls: `${e2.componentCls}-item`, rootPrefixCls: t }), us = Lt("Form", (e2, t) => {
  let { rootPrefixCls: n } = t;
  const r = Cd(e2, n);
  return [Bw(r), zw(r), Dw(r), Jl(r, r.componentCls), Jl(r, r.formItemCls), Hw(r), Vw(r), Ww(r), au(r), Gi];
}, qw, { order: -1e3 }), Zl = [];
function Uo(e2, t, n) {
  let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
  return { key: typeof e2 == "string" ? e2 : `${t}-${r}`, error: e2, errorStatus: n };
}
const Sd = (e2) => {
  let { help: t, helpStatus: n, errors: r = Zl, warnings: a = Zl, className: o, fieldId: i, onVisibleChanged: s } = e2;
  const { prefixCls: c } = l.useContext(Zi), u = `${c}-item-explain`, d = ir(c), [f, h, p] = us(c, d), g = l.useMemo(() => di(c), [c]), v = ja(r), m = ja(a), w = l.useMemo(() => t != null ? [Uo(t, "help", n)] : [].concat(fe(v.map((x, I) => Uo(x, "error", "error", I))), fe(m.map((x, I) => Uo(x, "warning", "warning", I)))), [t, n, v, m]), b = l.useMemo(() => {
    const x = {};
    return w.forEach((I) => {
      let { key: y } = I;
      x[y] = (x[y] || 0) + 1;
    }), w.map((I, y) => Object.assign(Object.assign({}, I), { key: x[I.key] > 1 ? `${I.key}-fallback-${y}` : I.key }));
  }, [w]), C = {};
  return i && (C.id = `${i}_help`), f(l.createElement(xr, { motionDeadline: g.motionDeadline, motionName: `${c}-show-help`, visible: !!b.length, onVisibleChanged: s }, (x) => {
    const { className: I, style: y } = x;
    return l.createElement("div", Object.assign({}, C, { className: Q(u, I, p, d, o, h), style: y }), l.createElement(Rc, Object.assign({ keys: b }, di(c), { motionName: `${c}-show-help-item`, component: false }), (E) => {
      const { key: O, error: R, errorStatus: S, className: $, style: P } = E;
      return l.createElement("div", { key: O, className: Q($, { [`${u}-${S}`]: S }), style: P }, R);
    }));
  }));
}, Uw = ["parentNode"], kw = "form_item";
function Vr(e2) {
  return e2 === void 0 || e2 === false ? [] : Array.isArray(e2) ? e2 : [e2];
}
function xd(e2, t) {
  if (!e2.length) return;
  const n = e2.join("_");
  return t ? `${t}_${n}` : Uw.includes(n) ? `${kw}_${n}` : n;
}
function $d(e2, t, n, r, a, o) {
  let i = r;
  return o !== void 0 ? i = o : n.validating ? i = "validating" : e2.length ? i = "error" : t.length ? i = "warning" : (n.touched || a && n.validated) && (i = "success"), i;
}
var Gw = function(e2, t) {
  var n = {};
  for (var r in e2) Object.prototype.hasOwnProperty.call(e2, r) && t.indexOf(r) < 0 && (n[r] = e2[r]);
  if (e2 != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e2); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e2, r[a]) && (n[r[a]] = e2[r[a]]);
  return n;
};
function ec(e2) {
  return Vr(e2).join("_");
}
function tc(e2, t) {
  const n = t.getFieldInstance(e2), r = Ff(n);
  if (r) return r;
  const a = xd(Vr(e2), t.__INTERNAL__.name);
  if (a) return document.getElementById(a);
}
function Ed(e2) {
  const [t] = Ji(), n = l.useRef({}), r = l.useMemo(() => e2 ?? Object.assign(Object.assign({}, t), { __INTERNAL__: { itemRef: (a) => (o) => {
    const i = ec(a);
    o ? n.current[i] = o : delete n.current[i];
  } }, scrollToField: function(a) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const { focus: i } = o, s = Gw(o, ["focus"]), c = tc(a, r);
    c && (vg(c, Object.assign({ scrollMode: "if-needed", block: "nearest" }, s)), i && r.focusField(a));
  }, focusField: (a) => {
    var o, i;
    const s = r.getFieldInstance(a);
    typeof (s == null ? void 0 : s.focus) == "function" ? s.focus() : (i = (o = tc(a, r)) === null || o === void 0 ? void 0 : o.focus) === null || i === void 0 || i.call(o);
  }, getFieldInstance: (a) => {
    const o = ec(a);
    return n.current[o];
  } }), [e2, t]);
  return [r];
}
var Kw = function(e2, t) {
  var n = {};
  for (var r in e2) Object.prototype.hasOwnProperty.call(e2, r) && t.indexOf(r) < 0 && (n[r] = e2[r]);
  if (e2 != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e2); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e2, r[a]) && (n[r[a]] = e2[r[a]]);
  return n;
};
const Xw = (e2, t) => {
  const n = l.useContext(kn), { getPrefixCls: r, direction: a, requiredMark: o, colon: i, scrollToFirstError: s, className: c, style: u } = _n("form"), { prefixCls: d, className: f, rootClassName: h, size: p, disabled: g = n, form: v, colon: m, labelAlign: w, labelWrap: b, labelCol: C, wrapperCol: x, hideRequiredMark: I, layout: y = "horizontal", scrollToFirstError: E, requiredMark: O, onFinishFailed: R, name: S, style: $, feedbackIcons: P, variant: A } = e2, N = Kw(e2, ["prefixCls", "className", "rootClassName", "size", "disabled", "form", "colon", "labelAlign", "labelWrap", "labelCol", "wrapperCol", "hideRequiredMark", "layout", "scrollToFirstError", "requiredMark", "onFinishFailed", "name", "style", "feedbackIcons", "variant"]), T = wn(p), M = l.useContext(Tf), _ = l.useMemo(() => O !== void 0 ? O : I ? false : o !== void 0 ? o : true, [I, O, o]), j = m ?? i, z = r("form", d), L = ir(z), [H, Y, k] = us(z, L), F = Q(z, `${z}-${y}`, { [`${z}-hide-required-mark`]: _ === false, [`${z}-rtl`]: a === "rtl", [`${z}-${T}`]: T }, k, L, Y, c, f, h), [B] = Ed(v), { __INTERNAL__: G } = B;
  G.name = S;
  const re = l.useMemo(() => ({ name: S, labelAlign: w, labelCol: C, labelWrap: b, wrapperCol: x, vertical: y === "vertical", colon: j, requiredMark: _, itemRef: G.itemRef, form: B, feedbackIcons: P }), [S, w, C, x, y, j, _, B, P]), W = l.useRef(null);
  l.useImperativeHandle(t, () => {
    var K;
    return Object.assign(Object.assign({}, B), { nativeElement: (K = W.current) === null || K === void 0 ? void 0 : K.nativeElement });
  });
  const J = (K, q) => {
    if (K) {
      let Z = { block: "nearest" };
      typeof K == "object" && (Z = Object.assign(Object.assign({}, Z), K)), B.scrollToField(q, Z);
    }
  }, oe = (K) => {
    if (R == null ? void 0 : R(K), K.errorFields.length) {
      const q = K.errorFields[0].name;
      if (E !== void 0) {
        J(E, q);
        return;
      }
      s !== void 0 && J(s, q);
    }
  };
  return H(l.createElement(Eu.Provider, { value: A }, l.createElement(_f, { disabled: g }, l.createElement(Ic.Provider, { value: T }, l.createElement($u, { validateMessages: M }, l.createElement(Fn.Provider, { value: re }, l.createElement(Rr, Object.assign({ id: S }, N, { name: S, onFinishFailed: oe, form: B, ref: W, style: Object.assign(Object.assign({}, u), $), className: F }))))))));
}, Yw = l.forwardRef(Xw);
function Qw(e2) {
  if (typeof e2 == "function") return e2;
  const t = Mn(e2);
  return t.length <= 1 ? t[0] : t;
}
const Rd = () => {
  const { status: e2, errors: t = [], warnings: n = [] } = l.useContext(Kt);
  return { status: e2, errors: t, warnings: n };
};
Rd.Context = Kt;
function Jw(e2) {
  const [t, n] = l.useState(e2), r = l.useRef(null), a = l.useRef([]), o = l.useRef(false);
  l.useEffect(() => (o.current = false, () => {
    o.current = true, pt.cancel(r.current), r.current = null;
  }), []);
  function i(s) {
    o.current || (r.current === null && (a.current = [], r.current = pt(() => {
      r.current = null, n((c) => {
        let u = c;
        return a.current.forEach((d) => {
          u = d(u);
        }), u;
      });
    })), a.current.push(s));
  }
  return [t, i];
}
function Zw() {
  const { itemRef: e2 } = l.useContext(Fn), t = l.useRef({});
  function n(r, a) {
    const o = a && typeof a == "object" && Va(a), i = r.join("_");
    return (t.current.name !== i || t.current.originRef !== o) && (t.current.name = i, t.current.originRef = o, t.current.ref = Tn(e2(r), o)), t.current.ref;
  }
  return n;
}
const eC = (e2) => {
  const { formItemCls: t } = e2;
  return { "@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none)": { [`${t}-control`]: { display: "flex" } } };
}, tC = Ac(["Form", "item-item"], (e2, t) => {
  let { rootPrefixCls: n } = t;
  const r = Cd(e2, n);
  return [eC(r)];
});
var nC = function(e2, t) {
  var n = {};
  for (var r in e2) Object.prototype.hasOwnProperty.call(e2, r) && t.indexOf(r) < 0 && (n[r] = e2[r]);
  if (e2 != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e2); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e2, r[a]) && (n[r[a]] = e2[r[a]]);
  return n;
};
const rC = 24, aC = (e2) => {
  const { prefixCls: t, status: n, labelCol: r, wrapperCol: a, children: o, errors: i, warnings: s, _internalItemRender: c, extra: u, help: d, fieldId: f, marginBottom: h, onErrorVisibleChanged: p, label: g } = e2, v = `${t}-item`, m = l.useContext(Fn), w = l.useMemo(() => {
    let N = Object.assign({}, a || m.wrapperCol || {});
    return g === null && !r && !a && m.labelCol && [void 0, "xs", "sm", "md", "lg", "xl", "xxl"].forEach((M) => {
      const _ = M ? [M] : [], j = Nn(m.labelCol, _), z = typeof j == "object" ? j : {}, L = Nn(N, _), H = typeof L == "object" ? L : {};
      "span" in z && !("offset" in H) && z.span < rC && (N = Pn(N, [].concat(_, ["offset"]), z.span));
    }), N;
  }, [a, m]), b = Q(`${v}-control`, w.className), C = l.useMemo(() => {
    const { labelCol: N, wrapperCol: T } = m;
    return nC(m, ["labelCol", "wrapperCol"]);
  }, [m]), x = l.useRef(null), [I, y] = l.useState(0);
  ut(() => {
    u && x.current ? y(x.current.clientHeight) : y(0);
  }, [u]);
  const E = l.createElement("div", { className: `${v}-control-input` }, l.createElement("div", { className: `${v}-control-input-content` }, o)), O = l.useMemo(() => ({ prefixCls: t, status: n }), [t, n]), R = h !== null || i.length || s.length ? l.createElement(Zi.Provider, { value: O }, l.createElement(Sd, { fieldId: f, errors: i, warnings: s, help: d, helpStatus: n, className: `${v}-explain-connected`, onVisibleChanged: p })) : null, S = {};
  f && (S.id = `${f}_extra`);
  const $ = u ? l.createElement("div", Object.assign({}, S, { className: `${v}-extra`, ref: x }), u) : null, P = R || $ ? l.createElement("div", { className: `${v}-additional`, style: h ? { minHeight: h + I } : {} }, R, $) : null, A = c && c.mark === "pro_table_render" && c.render ? c.render(e2, { input: E, errorList: R, extra: $ }) : l.createElement(l.Fragment, null, E, P);
  return l.createElement(Fn.Provider, { value: C }, l.createElement(gd, Object.assign({}, w, { className: b }), A), l.createElement(tC, { prefixCls: t }));
};
var oC = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }, { tag: "path", attrs: { d: "M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z" } }] }, name: "question-circle", theme: "outlined" }, iC = function(t, n) {
  return l.createElement(Ft, Ie({}, t, { ref: n, icon: oC }));
}, sC = l.forwardRef(iC), lC = function(e2, t) {
  var n = {};
  for (var r in e2) Object.prototype.hasOwnProperty.call(e2, r) && t.indexOf(r) < 0 && (n[r] = e2[r]);
  if (e2 != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e2); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e2, r[a]) && (n[r[a]] = e2[r[a]]);
  return n;
};
function cC(e2) {
  return e2 ? typeof e2 == "object" && !l.isValidElement(e2) ? e2 : { title: e2 } : null;
}
const uC = (e2) => {
  let { prefixCls: t, label: n, htmlFor: r, labelCol: a, labelAlign: o, colon: i, required: s, requiredMark: c, tooltip: u, vertical: d } = e2;
  var f;
  const [h] = jf("Form"), { labelAlign: p, labelCol: g, labelWrap: v, colon: m } = l.useContext(Fn);
  if (!n) return null;
  const w = a || g || {}, b = o || p, C = `${t}-item-label`, x = Q(C, b === "left" && `${C}-left`, w.className, { [`${C}-wrap`]: !!v });
  let I = n;
  const y = i === true || m !== false && i !== false;
  y && !d && typeof n == "string" && n.trim() && (I = n.replace(/[:|：]\s*$/, ""));
  const O = cC(u);
  if (O) {
    const { icon: N = l.createElement(sC, null) } = O, T = lC(O, ["icon"]), M = l.createElement(Qu, Object.assign({}, T), l.cloneElement(N, { className: `${t}-item-tooltip`, title: "", onClick: (_) => {
      _.preventDefault();
    }, tabIndex: null }));
    I = l.createElement(l.Fragment, null, I, M);
  }
  const R = c === "optional", S = typeof c == "function", $ = c === false;
  S ? I = c(I, { required: !!s }) : R && !s && (I = l.createElement(l.Fragment, null, I, l.createElement("span", { className: `${t}-item-optional`, title: "" }, (h == null ? void 0 : h.optional) || ((f = Df.Form) === null || f === void 0 ? void 0 : f.optional))));
  let P;
  $ ? P = "hidden" : (R || S) && (P = "optional");
  const A = Q({ [`${t}-item-required`]: s, [`${t}-item-required-mark-${P}`]: P, [`${t}-item-no-colon`]: !y });
  return l.createElement(gd, Object.assign({}, w, { className: x }), l.createElement("label", { htmlFor: r, className: A, title: typeof n == "string" ? n : "" }, I));
}, dC = { success: Qm, warning: og, error: Wi, validating: Ua };
function Od(e2) {
  let { children: t, errors: n, warnings: r, hasFeedback: a, validateStatus: o, prefixCls: i, meta: s, noStyle: c } = e2;
  const u = `${i}-item`, { feedbackIcons: d } = l.useContext(Fn), f = $d(n, r, s, null, !!a, o), { isFormItemInput: h, status: p, hasFeedback: g, feedbackIcon: v } = l.useContext(Kt), m = l.useMemo(() => {
    var w;
    let b;
    if (a) {
      const x = a !== true && a.icons || d, I = f && ((w = x == null ? void 0 : x({ status: f, errors: n, warnings: r })) === null || w === void 0 ? void 0 : w[f]), y = f && dC[f];
      b = I !== false && y ? l.createElement("span", { className: Q(`${u}-feedback-icon`, `${u}-feedback-icon-${f}`) }, I || l.createElement(y, null)) : null;
    }
    const C = { status: f || "", errors: n, warnings: r, hasFeedback: !!a, feedbackIcon: b, isFormItemInput: true };
    return c && (C.status = (f ?? p) || "", C.isFormItemInput = h, C.hasFeedback = !!(a ?? g), C.feedbackIcon = a !== void 0 ? C.feedbackIcon : v), C;
  }, [f, a, c, h, p]);
  return l.createElement(Kt.Provider, { value: m }, t);
}
var fC = function(e2, t) {
  var n = {};
  for (var r in e2) Object.prototype.hasOwnProperty.call(e2, r) && t.indexOf(r) < 0 && (n[r] = e2[r]);
  if (e2 != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e2); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e2, r[a]) && (n[r[a]] = e2[r[a]]);
  return n;
};
function mC(e2) {
  const { prefixCls: t, className: n, rootClassName: r, style: a, help: o, errors: i, warnings: s, validateStatus: c, meta: u, hasFeedback: d, hidden: f, children: h, fieldId: p, required: g, isRequired: v, onSubItemMetaChange: m, layout: w } = e2, b = fC(e2, ["prefixCls", "className", "rootClassName", "style", "help", "errors", "warnings", "validateStatus", "meta", "hasFeedback", "hidden", "children", "fieldId", "required", "isRequired", "onSubItemMetaChange", "layout"]), C = `${t}-item`, { requiredMark: x, vertical: I } = l.useContext(Fn), y = I || w === "vertical", E = l.useRef(null), O = ja(i), R = ja(s), S = o != null, $ = !!(S || i.length || s.length), P = !!E.current && qi(E.current), [A, N] = l.useState(null);
  ut(() => {
    if ($ && E.current) {
      const z = getComputedStyle(E.current);
      N(parseInt(z.marginBottom, 10));
    }
  }, [$, P]);
  const T = (z) => {
    z || N(null);
  }, _ = function() {
    let z = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
    const L = z ? O : u.errors, H = z ? R : u.warnings;
    return $d(L, H, u, "", !!d, c);
  }(), j = Q(C, n, r, { [`${C}-with-help`]: S || O.length || R.length, [`${C}-has-feedback`]: _ && d, [`${C}-has-success`]: _ === "success", [`${C}-has-warning`]: _ === "warning", [`${C}-has-error`]: _ === "error", [`${C}-is-validating`]: _ === "validating", [`${C}-hidden`]: f, [`${C}-${w}`]: w });
  return l.createElement("div", { className: j, style: a, ref: E }, l.createElement(nw, Object.assign({ className: `${C}-row` }, dn(b, ["_internalItemRender", "colon", "dependencies", "extra", "fieldKey", "getValueFromEvent", "getValueProps", "htmlFor", "id", "initialValue", "isListField", "label", "labelAlign", "labelCol", "labelWrap", "messageVariables", "name", "normalize", "noStyle", "preserve", "requiredMark", "rules", "shouldUpdate", "trigger", "tooltip", "validateFirst", "validateTrigger", "valuePropName", "wrapperCol", "validateDebounce"])), l.createElement(uC, Object.assign({ htmlFor: p }, e2, { requiredMark: x, required: g ?? v, prefixCls: t, vertical: y })), l.createElement(aC, Object.assign({}, e2, u, { errors: O, warnings: R, prefixCls: t, status: _, help: o, marginBottom: A, onErrorVisibleChanged: T }), l.createElement(xu.Provider, { value: m }, l.createElement(Od, { prefixCls: t, meta: u, errors: u.errors, warnings: u.warnings, hasFeedback: d, validateStatus: _ }, h)))), !!A && l.createElement("div", { className: `${C}-margin-offset`, style: { marginBottom: -A } }));
}
const gC = "__SPLIT__";
function hC(e2, t) {
  const n = Object.keys(e2), r = Object.keys(t);
  return n.length === r.length && n.every((a) => {
    const o = e2[a], i = t[a];
    return o === i || typeof o == "function" || typeof i == "function";
  });
}
const vC = l.memo((e2) => {
  let { children: t } = e2;
  return t;
}, (e2, t) => hC(e2.control, t.control) && e2.update === t.update && e2.childProps.length === t.childProps.length && e2.childProps.every((n, r) => n === t.childProps[r]));
function nc() {
  return { errors: [], warnings: [], touched: false, validating: false, name: [], validated: false };
}
function pC(e2) {
  const { name: t, noStyle: n, className: r, dependencies: a, prefixCls: o, shouldUpdate: i, rules: s, children: c, required: u, label: d, messageVariables: f, trigger: h = "onChange", validateTrigger: p, hidden: g, help: v, layout: m } = e2, { getPrefixCls: w } = l.useContext(ft), { name: b } = l.useContext(Fn), C = Qw(c), x = typeof C == "function", I = l.useContext(xu), { validateTrigger: y } = l.useContext(rr), E = p !== void 0 ? p : y, O = t != null, R = w("form", o), S = ir(R), [$, P, A] = us(R, S);
  Mc();
  const N = l.useContext(kr), T = l.useRef(null), [M, _] = Jw({}), [j, z] = ei(() => nc()), L = (re) => {
    const W = N == null ? void 0 : N.getKey(re.name);
    if (z(re.destroy ? nc() : re, true), n && v !== false && I) {
      let J = re.name;
      if (re.destroy) J = T.current || J;
      else if (W !== void 0) {
        const [oe, K] = W;
        J = [oe].concat(fe(K)), T.current = J;
      }
      I(re, J);
    }
  }, H = (re, W) => {
    _((J) => {
      const oe = Object.assign({}, J), q = [].concat(fe(re.name.slice(0, -1)), fe(W)).join(gC);
      return re.destroy ? delete oe[q] : oe[q] = re, oe;
    });
  }, [Y, k] = l.useMemo(() => {
    const re = fe(j.errors), W = fe(j.warnings);
    return Object.values(M).forEach((J) => {
      re.push.apply(re, fe(J.errors || [])), W.push.apply(W, fe(J.warnings || []));
    }), [re, W];
  }, [M, j.errors, j.warnings]), F = Zw();
  function B(re, W, J) {
    return n && !g ? l.createElement(Od, { prefixCls: R, hasFeedback: e2.hasFeedback, validateStatus: e2.validateStatus, meta: j, errors: Y, warnings: k, noStyle: true }, re) : l.createElement(mC, Object.assign({ key: "row" }, e2, { className: Q(r, A, S, P), prefixCls: R, fieldId: W, isRequired: J, errors: Y, warnings: k, meta: j, onSubItemMetaChange: H, layout: m }), re);
  }
  if (!O && !x && !a) return $(B(C));
  let G = {};
  return typeof d == "string" ? G.label = d : t && (G.label = String(t)), f && (G = Object.assign(Object.assign({}, G), f)), $(l.createElement(Qi, Object.assign({}, e2, { messageVariables: G, trigger: h, validateTrigger: E, onMetaChange: L }), (re, W, J) => {
    const oe = Vr(t).length && W ? W.name : [], K = xd(oe, b), q = u !== void 0 ? u : !!(s == null ? void 0 : s.some((X) => {
      if (X && typeof X == "object" && X.required && !X.warningOnly) return true;
      if (typeof X == "function") {
        const ee = X(J);
        return (ee == null ? void 0 : ee.required) && !(ee == null ? void 0 : ee.warningOnly);
      }
      return false;
    })), Z = Object.assign({}, re);
    let ie = null;
    if (Array.isArray(C) && O) ie = C;
    else if (!(x && (!(i || a) || O))) {
      if (!(a && !x && !O)) if (l.isValidElement(C)) {
        const X = Object.assign(Object.assign({}, C.props), Z);
        if (X.id || (X.id = K), v || Y.length > 0 || k.length > 0 || e2.extra) {
          const se = [];
          (v || Y.length > 0) && se.push(`${K}_help`), e2.extra && se.push(`${K}_extra`), X["aria-describedby"] = se.join(" ");
        }
        Y.length > 0 && (X["aria-invalid"] = "true"), q && (X["aria-required"] = "true"), Yr(C) && (X.ref = F(oe, C)), new Set([].concat(fe(Vr(h)), fe(Vr(E)))).forEach((se) => {
          X[se] = function() {
            for (var de, Oe, xe, We, ce, ue = arguments.length, pe = new Array(ue), $e = 0; $e < ue; $e++) pe[$e] = arguments[$e];
            (xe = Z[se]) === null || xe === void 0 || (de = xe).call.apply(de, [Z].concat(pe)), (ce = (We = C.props)[se]) === null || ce === void 0 || (Oe = ce).call.apply(Oe, [We].concat(pe));
          };
        });
        const le = [X["aria-required"], X["aria-invalid"], X["aria-describedby"]];
        ie = l.createElement(vC, { control: Z, update: C, childProps: le }, qn(C, X));
      } else x && (i || a) && !O ? ie = C(J) : ie = C;
    }
    return B(ie, K, q);
  }));
}
const Id = pC;
Id.useStatus = Rd;
var bC = function(e2, t) {
  var n = {};
  for (var r in e2) Object.prototype.hasOwnProperty.call(e2, r) && t.indexOf(r) < 0 && (n[r] = e2[r]);
  if (e2 != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e2); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e2, r[a]) && (n[r[a]] = e2[r[a]]);
  return n;
};
const yC = (e2) => {
  var { prefixCls: t, children: n } = e2, r = bC(e2, ["prefixCls", "children"]);
  const { getPrefixCls: a } = l.useContext(ft), o = a("form", t), i = l.useMemo(() => ({ prefixCls: o, status: "error" }), [o]);
  return l.createElement(yu, Object.assign({}, r), (s, c, u) => l.createElement(Zi.Provider, { value: i }, n(s.map((d) => Object.assign(Object.assign({}, d), { fieldKey: d.key })), c, { errors: u.errors, warnings: u.warnings })));
};
function wC() {
  const { form: e2 } = l.useContext(Fn);
  return e2;
}
const Kn = Yw;
Kn.Item = Id;
Kn.List = yC;
Kn.ErrorList = Sd;
Kn.useForm = Ed;
Kn.useFormInstance = wC;
Kn.useWatch = Su;
Kn.Provider = $u;
Kn.create = () => {
};
var CC = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z" } }] }, name: "eye", theme: "outlined" }, SC = function(t, n) {
  return l.createElement(Ft, Ie({}, t, { ref: n, icon: CC }));
}, xC = l.forwardRef(SC);
const $C = (e2) => {
  const { getPrefixCls: t, direction: n } = l.useContext(ft), { prefixCls: r, className: a } = e2, o = t("input-group", r), i = t("input"), [s, c, u] = fd(i), d = Q(o, u, { [`${o}-lg`]: e2.size === "large", [`${o}-sm`]: e2.size === "small", [`${o}-compact`]: e2.compact, [`${o}-rtl`]: n === "rtl" }, c, a), f = l.useContext(Kt), h = l.useMemo(() => Object.assign(Object.assign({}, f), { isFormItemInput: false }), [f]);
  return s(l.createElement("span", { className: d, style: e2.style, onMouseEnter: e2.onMouseEnter, onMouseLeave: e2.onMouseLeave, onFocus: e2.onFocus, onBlur: e2.onBlur }, l.createElement(Kt.Provider, { value: h }, e2.children)));
}, EC = (e2) => {
  const { componentCls: t, paddingXS: n } = e2;
  return { [t]: { display: "inline-flex", alignItems: "center", flexWrap: "nowrap", columnGap: n, [`${t}-input-wrapper`]: { position: "relative", [`${t}-mask-icon`]: { position: "absolute", zIndex: "1", top: "50%", right: "50%", transform: "translate(50%, -50%)", pointerEvents: "none" }, [`${t}-mask-input`]: { color: "transparent", caretColor: "var(--ant-color-text)" }, [`${t}-mask-input[type=number]::-webkit-inner-spin-button`]: { "-webkit-appearance": "none", margin: 0 }, [`${t}-mask-input[type=number]`]: { "-moz-appearance": "textfield" } }, "&-rtl": { direction: "rtl" }, [`${t}-input`]: { textAlign: "center", paddingInline: e2.paddingXXS }, [`&${t}-sm ${t}-input`]: { paddingInline: e2.calc(e2.paddingXXS).div(2).equal() }, [`&${t}-lg ${t}-input`]: { paddingInline: e2.paddingXS } } };
}, RC = Lt(["Input", "OTP"], (e2) => {
  const t = mt(e2, ia(e2));
  return [EC(t)];
}, sa);
var OC = function(e2, t) {
  var n = {};
  for (var r in e2) Object.prototype.hasOwnProperty.call(e2, r) && t.indexOf(r) < 0 && (n[r] = e2[r]);
  if (e2 != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e2); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e2, r[a]) && (n[r[a]] = e2[r[a]]);
  return n;
};
const IC = l.forwardRef((e2, t) => {
  const { className: n, value: r, onChange: a, onActiveChange: o, index: i, mask: s } = e2, c = OC(e2, ["className", "value", "onChange", "onActiveChange", "index", "mask"]), { getPrefixCls: u } = l.useContext(ft), d = u("otp"), f = typeof s == "string" ? s : r, h = l.useRef(null);
  l.useImperativeHandle(t, () => h.current);
  const p = (w) => {
    a(i, w.target.value);
  }, g = () => {
    pt(() => {
      var w;
      const b = (w = h.current) === null || w === void 0 ? void 0 : w.input;
      document.activeElement === b && b && b.select();
    });
  }, v = (w) => {
    const { key: b, ctrlKey: C, metaKey: x } = w;
    b === "ArrowLeft" ? o(i - 1) : b === "ArrowRight" ? o(i + 1) : b === "z" && (C || x) && w.preventDefault(), g();
  }, m = (w) => {
    w.key === "Backspace" && !r && o(i - 1), g();
  };
  return l.createElement("span", { className: `${d}-input-wrapper`, role: "presentation" }, s && r !== "" && r !== void 0 && l.createElement("span", { className: `${d}-mask-icon`, "aria-hidden": "true" }, f), l.createElement(so, Object.assign({ "aria-label": `OTP Input ${i + 1}`, type: s === true ? "password" : "text" }, c, { ref: h, value: r, onInput: p, onFocus: g, onKeyDown: v, onKeyUp: m, onMouseDown: g, onMouseUp: g, className: Q(n, { [`${d}-mask-input`]: s }) })));
});
var AC = function(e2, t) {
  var n = {};
  for (var r in e2) Object.prototype.hasOwnProperty.call(e2, r) && t.indexOf(r) < 0 && (n[r] = e2[r]);
  if (e2 != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e2); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e2, r[a]) && (n[r[a]] = e2[r[a]]);
  return n;
};
function wa(e2) {
  return (e2 || "").split("");
}
const PC = (e2) => {
  const { index: t, prefixCls: n, separator: r } = e2, a = typeof r == "function" ? r(t) : r;
  return a ? l.createElement("span", { className: `${n}-separator` }, a) : null;
}, NC = l.forwardRef((e2, t) => {
  const { prefixCls: n, length: r = 6, size: a, defaultValue: o, value: i, onChange: s, formatter: c, separator: u, variant: d, disabled: f, status: h, autoFocus: p, mask: g, type: v, onInput: m, inputMode: w } = e2, b = AC(e2, ["prefixCls", "length", "size", "defaultValue", "value", "onChange", "formatter", "separator", "variant", "disabled", "status", "autoFocus", "mask", "type", "onInput", "inputMode"]), { getPrefixCls: C, direction: x } = l.useContext(ft), I = C("otp", n), y = nr(b, { aria: true, data: true, attr: true }), [E, O, R] = RC(I), S = wn((F) => a ?? F), $ = l.useContext(Kt), P = aa($.status, h), A = l.useMemo(() => Object.assign(Object.assign({}, $), { status: P, hasFeedback: false, feedbackIcon: null }), [$, P]), N = l.useRef(null), T = l.useRef({});
  l.useImperativeHandle(t, () => ({ focus: () => {
    var F;
    (F = T.current[0]) === null || F === void 0 || F.focus();
  }, blur: () => {
    var F;
    for (let B = 0; B < r; B += 1) (F = T.current[B]) === null || F === void 0 || F.blur();
  }, nativeElement: N.current }));
  const M = (F) => c ? c(F) : F, [_, j] = l.useState(() => wa(M(o || "")));
  l.useEffect(() => {
    i !== void 0 && j(wa(i));
  }, [i]);
  const z = jt((F) => {
    j(F), m && m(F), s && F.length === r && F.every((B) => B) && F.some((B, G) => _[G] !== B) && s(F.join(""));
  }), L = jt((F, B) => {
    let G = fe(_);
    for (let W = 0; W < F; W += 1) G[W] || (G[W] = "");
    B.length <= 1 ? G[F] = B : G = G.slice(0, F).concat(wa(B)), G = G.slice(0, r);
    for (let W = G.length - 1; W >= 0 && !G[W]; W -= 1) G.pop();
    const re = M(G.map((W) => W || " ").join(""));
    return G = wa(re).map((W, J) => W === " " && !G[J] ? G[J] : W), G;
  }), H = (F, B) => {
    var G;
    const re = L(F, B), W = Math.min(F + B.length, r - 1);
    W !== F && re[F] !== void 0 && ((G = T.current[W]) === null || G === void 0 || G.focus()), z(re);
  }, Y = (F) => {
    var B;
    (B = T.current[F]) === null || B === void 0 || B.focus();
  }, k = { variant: d, disabled: f, status: P, mask: g, type: v, inputMode: w };
  return E(l.createElement("div", Object.assign({}, y, { ref: N, className: Q(I, { [`${I}-sm`]: S === "small", [`${I}-lg`]: S === "large", [`${I}-rtl`]: x === "rtl" }, R, O), role: "group" }), l.createElement(Kt.Provider, { value: A }, Array.from({ length: r }).map((F, B) => {
    const G = `otp-${B}`, re = _[B] || "";
    return l.createElement(l.Fragment, { key: G }, l.createElement(IC, Object.assign({ ref: (W) => {
      T.current[B] = W;
    }, index: B, size: S, htmlSize: 1, className: `${I}-input`, onChange: H, value: re, onActiveChange: Y, autoFocus: B === 0 && p }, k)), B < r - 1 && l.createElement(PC, { separator: u, index: B, prefixCls: I }));
  }))));
});
var MC = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z" } }, { tag: "path", attrs: { d: "M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z" } }] }, name: "eye-invisible", theme: "outlined" }, FC = function(t, n) {
  return l.createElement(Ft, Ie({}, t, { ref: n, icon: MC }));
}, TC = l.forwardRef(FC), _C = function(e2, t) {
  var n = {};
  for (var r in e2) Object.prototype.hasOwnProperty.call(e2, r) && t.indexOf(r) < 0 && (n[r] = e2[r]);
  if (e2 != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e2); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e2, r[a]) && (n[r[a]] = e2[r[a]]);
  return n;
};
const jC = (e2) => e2 ? l.createElement(xC, null) : l.createElement(TC, null), DC = { click: "onClick", hover: "onMouseOver" }, LC = l.forwardRef((e2, t) => {
  const { disabled: n, action: r = "click", visibilityToggle: a = true, iconRender: o = jC } = e2, i = l.useContext(kn), s = n ?? i, c = typeof a == "object" && a.visible !== void 0, [u, d] = l.useState(() => c ? a.visible : false), f = l.useRef(null);
  l.useEffect(() => {
    c && d(a.visible);
  }, [c, a]);
  const h = yd(f), p = () => {
    var S;
    if (s) return;
    u && h();
    const $ = !u;
    d($), typeof a == "object" && ((S = a.onVisibleChange) === null || S === void 0 || S.call(a, $));
  }, g = (S) => {
    const $ = DC[r] || "", P = o(u), A = { [$]: p, className: `${S}-icon`, key: "passwordIcon", onMouseDown: (N) => {
      N.preventDefault();
    }, onMouseUp: (N) => {
      N.preventDefault();
    } };
    return l.cloneElement(l.isValidElement(P) ? P : l.createElement("span", null, P), A);
  }, { className: v, prefixCls: m, inputPrefixCls: w, size: b } = e2, C = _C(e2, ["className", "prefixCls", "inputPrefixCls", "size"]), { getPrefixCls: x } = l.useContext(ft), I = x("input", w), y = x("input-password", m), E = a && g(y), O = Q(y, v, { [`${y}-${b}`]: !!b }), R = Object.assign(Object.assign({}, dn(C, ["suffix", "iconRender", "visibilityToggle"])), { type: u ? "text" : "password", className: O, prefixCls: I, suffix: E });
  return b && (R.size = b), l.createElement(so, Object.assign({ ref: Tn(t, f) }, R));
});
var BC = function(e2, t) {
  var n = {};
  for (var r in e2) Object.prototype.hasOwnProperty.call(e2, r) && t.indexOf(r) < 0 && (n[r] = e2[r]);
  if (e2 != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e2); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e2, r[a]) && (n[r[a]] = e2[r[a]]);
  return n;
};
const zC = l.forwardRef((e2, t) => {
  const { prefixCls: n, inputPrefixCls: r, className: a, size: o, suffix: i, enterButton: s = false, addonAfter: c, loading: u, disabled: d, onSearch: f, onChange: h, onCompositionStart: p, onCompositionEnd: g } = e2, v = BC(e2, ["prefixCls", "inputPrefixCls", "className", "size", "suffix", "enterButton", "addonAfter", "loading", "disabled", "onSearch", "onChange", "onCompositionStart", "onCompositionEnd"]), { getPrefixCls: m, direction: w } = l.useContext(ft), b = l.useRef(false), C = m("input-search", n), x = m("input", r), { compactSize: I } = Er(C, w), y = wn((H) => {
    var Y;
    return (Y = o ?? I) !== null && Y !== void 0 ? Y : H;
  }), E = l.useRef(null), O = (H) => {
    (H == null ? void 0 : H.target) && H.type === "click" && f && f(H.target.value, H, { source: "clear" }), h == null ? void 0 : h(H);
  }, R = (H) => {
    var Y;
    document.activeElement === ((Y = E.current) === null || Y === void 0 ? void 0 : Y.input) && H.preventDefault();
  }, S = (H) => {
    var Y, k;
    f && f((k = (Y = E.current) === null || Y === void 0 ? void 0 : Y.input) === null || k === void 0 ? void 0 : k.value, H, { source: "input" });
  }, $ = (H) => {
    b.current || u || S(H);
  }, P = typeof s == "boolean" ? l.createElement(qu, null) : null, A = `${C}-button`;
  let N;
  const T = s || {}, M = T.type && T.type.__ANT_BUTTON === true;
  M || T.type === "button" ? N = qn(T, Object.assign({ onMouseDown: R, onClick: (H) => {
    var Y, k;
    (k = (Y = T == null ? void 0 : T.props) === null || Y === void 0 ? void 0 : Y.onClick) === null || k === void 0 || k.call(Y, H), S(H);
  }, key: "enterButton" }, M ? { className: A, size: y } : {})) : N = l.createElement(Xi, { className: A, type: s ? "primary" : void 0, size: y, disabled: d, key: "enterButton", onMouseDown: R, onClick: S, loading: u, icon: P }, s), c && (N = [N, qn(c, { key: "addonAfter" })]);
  const _ = Q(C, { [`${C}-rtl`]: w === "rtl", [`${C}-${y}`]: !!y, [`${C}-with-button`]: !!s }, a), j = Object.assign(Object.assign({}, v), { className: _, prefixCls: x, type: "search" }), z = (H) => {
    b.current = true, p == null ? void 0 : p(H);
  }, L = (H) => {
    b.current = false, g == null ? void 0 : g(H);
  };
  return l.createElement(so, Object.assign({ ref: Tn(E, t), onPressEnter: $ }, j, { size: y, onCompositionStart: z, onCompositionEnd: L, addonAfter: N, suffix: i, onChange: O, disabled: d }));
});
var HC = `
  min-height:0 !important;
  max-height:none !important;
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
  pointer-events: none !important;
`, VC = ["letter-spacing", "line-height", "padding-top", "padding-bottom", "font-family", "font-weight", "font-size", "font-variant", "text-rendering", "text-transform", "width", "text-indent", "padding-left", "padding-right", "border-width", "box-sizing", "word-break", "white-space"], ko = {}, Zt;
function WC(e2) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false, n = e2.getAttribute("id") || e2.getAttribute("data-reactid") || e2.getAttribute("name");
  if (t && ko[n]) return ko[n];
  var r = window.getComputedStyle(e2), a = r.getPropertyValue("box-sizing") || r.getPropertyValue("-moz-box-sizing") || r.getPropertyValue("-webkit-box-sizing"), o = parseFloat(r.getPropertyValue("padding-bottom")) + parseFloat(r.getPropertyValue("padding-top")), i = parseFloat(r.getPropertyValue("border-bottom-width")) + parseFloat(r.getPropertyValue("border-top-width")), s = VC.map(function(u) {
    return "".concat(u, ":").concat(r.getPropertyValue(u));
  }).join(";"), c = { sizingStyle: s, paddingSize: o, borderSize: i, boxSizing: a };
  return t && n && (ko[n] = c), c;
}
function qC(e2) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
  Zt || (Zt = document.createElement("textarea"), Zt.setAttribute("tab-index", "-1"), Zt.setAttribute("aria-hidden", "true"), Zt.setAttribute("name", "hiddenTextarea"), document.body.appendChild(Zt)), e2.getAttribute("wrap") ? Zt.setAttribute("wrap", e2.getAttribute("wrap")) : Zt.removeAttribute("wrap");
  var a = WC(e2, t), o = a.paddingSize, i = a.borderSize, s = a.boxSizing, c = a.sizingStyle;
  Zt.setAttribute("style", "".concat(c, ";").concat(HC)), Zt.value = e2.value || e2.placeholder || "";
  var u = void 0, d = void 0, f, h = Zt.scrollHeight;
  if (s === "border-box" ? h += i : s === "content-box" && (h -= o), n !== null || r !== null) {
    Zt.value = " ";
    var p = Zt.scrollHeight - o;
    n !== null && (u = p * n, s === "border-box" && (u = u + o + i), h = Math.max(u, h)), r !== null && (d = p * r, s === "border-box" && (d = d + o + i), f = h > d ? "" : "hidden", h = Math.min(d, h));
  }
  var g = { height: h, overflowY: f, resize: "none" };
  return u && (g.minHeight = u), d && (g.maxHeight = d), g;
}
var UC = ["prefixCls", "defaultValue", "value", "autoSize", "onResize", "className", "style", "disabled", "onChange", "onInternalAutoSize"], Go = 0, Ko = 1, Xo = 2, kC = l.forwardRef(function(e2, t) {
  var n = e2, r = n.prefixCls, a = n.defaultValue, o = n.value, i = n.autoSize, s = n.onResize, c = n.className, u = n.style, d = n.disabled, f = n.onChange;
  n.onInternalAutoSize;
  var h = rt(n, UC), p = yn(a, { value: o, postState: function(F) {
    return F ?? "";
  } }), g = te(p, 2), v = g[0], m = g[1], w = function(F) {
    m(F.target.value), f == null ? void 0 : f(F);
  }, b = l.useRef();
  l.useImperativeHandle(t, function() {
    return { textArea: b.current };
  });
  var C = l.useMemo(function() {
    return i && et(i) === "object" ? [i.minRows, i.maxRows] : [];
  }, [i]), x = te(C, 2), I = x[0], y = x[1], E = !!i, O = function() {
    try {
      if (document.activeElement === b.current) {
        var F = b.current, B = F.selectionStart, G = F.selectionEnd, re = F.scrollTop;
        b.current.setSelectionRange(B, G), b.current.scrollTop = re;
      }
    } catch {
    }
  }, R = l.useState(Xo), S = te(R, 2), $ = S[0], P = S[1], A = l.useState(), N = te(A, 2), T = N[0], M = N[1], _ = function() {
    P(Go);
  };
  ut(function() {
    E && _();
  }, [o, I, y, E]), ut(function() {
    if ($ === Go) P(Ko);
    else if ($ === Ko) {
      var k = qC(b.current, false, I, y);
      P(Xo), M(k);
    } else O();
  }, [$]);
  var j = l.useRef(), z = function() {
    pt.cancel(j.current);
  }, L = function(F) {
    $ === Xo && (s == null ? void 0 : s(F), i && (z(), j.current = pt(function() {
      _();
    })));
  };
  l.useEffect(function() {
    return z;
  }, []);
  var H = E ? T : null, Y = V(V({}, u), H);
  return ($ === Go || $ === Ko) && (Y.overflowY = "hidden", Y.overflowX = "hidden"), l.createElement(Gn, { onResize: L, disabled: !(i || s) }, l.createElement("textarea", Ie({}, h, { ref: b, style: Y, className: Q(r, c, D({}, "".concat(r, "-disabled"), d)), disabled: d, value: v, onChange: w })));
}), GC = ["defaultValue", "value", "onFocus", "onBlur", "onChange", "allowClear", "maxLength", "onCompositionStart", "onCompositionEnd", "suffix", "prefixCls", "showCount", "count", "className", "style", "disabled", "hidden", "classNames", "styles", "onResize", "onClear", "onPressEnter", "readOnly", "autoSize", "onKeyDown"], KC = ae.forwardRef(function(e2, t) {
  var n, r = e2.defaultValue, a = e2.value, o = e2.onFocus, i = e2.onBlur, s = e2.onChange, c = e2.allowClear, u = e2.maxLength, d = e2.onCompositionStart, f = e2.onCompositionEnd, h = e2.suffix, p = e2.prefixCls, g = p === void 0 ? "rc-textarea" : p, v = e2.showCount, m = e2.count, w = e2.className, b = e2.style, C = e2.disabled, x = e2.hidden, I = e2.classNames, y = e2.styles, E = e2.onResize, O = e2.onClear, R = e2.onPressEnter, S = e2.readOnly, $ = e2.autoSize, P = e2.onKeyDown, A = rt(e2, GC), N = yn(r, { value: a, defaultValue: r }), T = te(N, 2), M = T[0], _ = T[1], j = M == null ? "" : String(M), z = ae.useState(false), L = te(z, 2), H = L[0], Y = L[1], k = ae.useRef(false), F = ae.useState(null), B = te(F, 2), G = B[0], re = B[1], W = l.useRef(null), J = l.useRef(null), oe = function() {
    var be;
    return (be = J.current) === null || be === void 0 ? void 0 : be.textArea;
  }, K = function() {
    oe().focus();
  };
  l.useImperativeHandle(t, function() {
    var Me;
    return { resizableTextArea: J.current, focus: K, blur: function() {
      oe().blur();
    }, nativeElement: ((Me = W.current) === null || Me === void 0 ? void 0 : Me.nativeElement) || oe() };
  }), l.useEffect(function() {
    Y(function(Me) {
      return !C && Me;
    });
  }, [C]);
  var q = ae.useState(null), Z = te(q, 2), ie = Z[0], X = Z[1];
  ae.useEffect(function() {
    if (ie) {
      var Me;
      (Me = oe()).setSelectionRange.apply(Me, fe(ie));
    }
  }, [ie]);
  var ee = vd(m, v), le = (n = ee.max) !== null && n !== void 0 ? n : u, se = Number(le) > 0, de = ee.strategy(j), Oe = !!le && de > le, xe = function(be, Ae) {
    var Je = Ae;
    !k.current && ee.exceedFormatter && ee.max && ee.strategy(Ae) > ee.max && (Je = ee.exceedFormatter(Ae, { max: ee.max }), Ae !== Je && X([oe().selectionStart || 0, oe().selectionEnd || 0])), _(Je), _a(be.currentTarget, be, s, Je);
  }, We = function(be) {
    k.current = true, d == null ? void 0 : d(be);
  }, ce = function(be) {
    k.current = false, xe(be, be.currentTarget.value), f == null ? void 0 : f(be);
  }, ue = function(be) {
    xe(be, be.target.value);
  }, pe = function(be) {
    be.key === "Enter" && R && R(be), P == null ? void 0 : P(be);
  }, $e = function(be) {
    Y(true), o == null ? void 0 : o(be);
  }, Fe = function(be) {
    Y(false), i == null ? void 0 : i(be);
  }, Le = function(be) {
    _(""), K(), _a(oe(), be, s);
  }, je = h, Ee;
  ee.show && (ee.showFormatter ? Ee = ee.showFormatter({ value: j, count: de, maxLength: le }) : Ee = "".concat(de).concat(se ? " / ".concat(le) : ""), je = ae.createElement(ae.Fragment, null, je, ae.createElement("span", { className: Q("".concat(g, "-data-count"), I == null ? void 0 : I.count), style: y == null ? void 0 : y.count }, Ee)));
  var Be = function(be) {
    var Ae;
    E == null ? void 0 : E(be), (Ae = oe()) !== null && Ae !== void 0 && Ae.style.height && re(true);
  }, Ke = !$ && !v && !c;
  return ae.createElement(cs, { ref: W, value: j, allowClear: c, handleReset: Le, suffix: je, prefixCls: g, classNames: V(V({}, I), {}, { affixWrapper: Q(I == null ? void 0 : I.affixWrapper, D(D({}, "".concat(g, "-show-count"), v), "".concat(g, "-textarea-allow-clear"), c)) }), disabled: C, focused: H, className: Q(w, Oe && "".concat(g, "-out-of-range")), style: V(V({}, b), G && !Ke ? { height: "auto" } : {}), dataAttrs: { affixWrapper: { "data-count": typeof Ee == "string" ? Ee : void 0 } }, hidden: x, readOnly: S, onClear: O }, ae.createElement(kC, Ie({}, A, { autoSize: $, maxLength: u, onKeyDown: pe, onChange: ue, onFocus: $e, onBlur: Fe, onCompositionStart: We, onCompositionEnd: ce, className: Q(I == null ? void 0 : I.textarea), style: V(V({}, y == null ? void 0 : y.textarea), {}, { resize: b == null ? void 0 : b.resize }), disabled: C, prefixCls: g, onResize: Be, ref: J, readOnly: S })));
});
const XC = (e2) => {
  const { componentCls: t, paddingLG: n } = e2, r = `${t}-textarea`;
  return { [`textarea${t}`]: { maxWidth: "100%", height: "auto", minHeight: e2.controlHeight, lineHeight: e2.lineHeight, verticalAlign: "bottom", transition: `all ${e2.motionDurationSlow}`, resize: "vertical", [`&${t}-mouse-active`]: { transition: `all ${e2.motionDurationSlow}, height 0s, width 0s` } }, [`${t}-textarea-affix-wrapper-resize-dirty`]: { width: "auto" }, [r]: { position: "relative", "&-show-count": { [`${t}-data-count`]: { position: "absolute", bottom: e2.calc(e2.fontSize).mul(e2.lineHeight).mul(-1).equal(), insetInlineEnd: 0, color: e2.colorTextDescription, whiteSpace: "nowrap", pointerEvents: "none" } }, [`
        &-allow-clear > ${t},
        &-affix-wrapper${r}-has-feedback ${t}
      `]: { paddingInlineEnd: n }, [`&-affix-wrapper${t}-affix-wrapper`]: { padding: 0, [`> textarea${t}`]: { fontSize: "inherit", border: "none", outline: "none", background: "transparent", minHeight: e2.calc(e2.controlHeight).sub(e2.calc(e2.lineWidth).mul(2)).equal(), "&:focus": { boxShadow: "none !important" } }, [`${t}-suffix`]: { margin: 0, "> *:not(:last-child)": { marginInline: 0 }, [`${t}-clear-icon`]: { position: "absolute", insetInlineEnd: e2.paddingInline, insetBlockStart: e2.paddingXS }, [`${r}-suffix`]: { position: "absolute", top: 0, insetInlineEnd: e2.paddingInline, bottom: 0, zIndex: 1, display: "inline-flex", alignItems: "center", margin: "auto", pointerEvents: "none" } } }, [`&-affix-wrapper${t}-affix-wrapper-rtl`]: { [`${t}-suffix`]: { [`${t}-data-count`]: { direction: "ltr", insetInlineStart: 0 } } }, [`&-affix-wrapper${t}-affix-wrapper-sm`]: { [`${t}-suffix`]: { [`${t}-clear-icon`]: { insetInlineEnd: e2.paddingInlineSM } } } } };
}, YC = Lt(["Input", "TextArea"], (e2) => {
  const t = mt(e2, ia(e2));
  return [XC(t)];
}, sa, { resetFont: false });
var QC = function(e2, t) {
  var n = {};
  for (var r in e2) Object.prototype.hasOwnProperty.call(e2, r) && t.indexOf(r) < 0 && (n[r] = e2[r]);
  if (e2 != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e2); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e2, r[a]) && (n[r[a]] = e2[r[a]]);
  return n;
};
const JC = l.forwardRef((e2, t) => {
  var n;
  const { prefixCls: r, bordered: a = true, size: o, disabled: i, status: s, allowClear: c, classNames: u, rootClassName: d, className: f, style: h, styles: p, variant: g, showCount: v, onMouseDown: m, onResize: w } = e2, b = QC(e2, ["prefixCls", "bordered", "size", "disabled", "status", "allowClear", "classNames", "rootClassName", "className", "style", "styles", "variant", "showCount", "onMouseDown", "onResize"]), { getPrefixCls: C, direction: x, allowClear: I, autoComplete: y, className: E, style: O, classNames: R, styles: S } = _n("textArea"), $ = l.useContext(kn), P = i ?? $, { status: A, hasFeedback: N, feedbackIcon: T } = l.useContext(Kt), M = aa(A, s), _ = l.useRef(null);
  l.useImperativeHandle(t, () => {
    var ee;
    return { resizableTextArea: (ee = _.current) === null || ee === void 0 ? void 0 : ee.resizableTextArea, focus: (le) => {
      var se, de;
      ls((de = (se = _.current) === null || se === void 0 ? void 0 : se.resizableTextArea) === null || de === void 0 ? void 0 : de.textArea, le);
    }, blur: () => {
      var le;
      return (le = _.current) === null || le === void 0 ? void 0 : le.blur();
    } };
  });
  const j = C("input", r), z = ir(j), [L, H, Y] = dd(j, d), [k] = YC(j, z), { compactSize: F, compactItemClassnames: B } = Er(j, x), G = wn((ee) => {
    var le;
    return (le = o ?? F) !== null && le !== void 0 ? le : ee;
  }), [re, W] = ao("textArea", g, a), J = bd(c ?? I), [oe, K] = l.useState(false), [q, Z] = l.useState(false), ie = (ee) => {
    K(true), m == null ? void 0 : m(ee);
    const le = () => {
      K(false), document.removeEventListener("mouseup", le);
    };
    document.addEventListener("mouseup", le);
  }, X = (ee) => {
    var le, se;
    if (w == null ? void 0 : w(ee), oe && typeof getComputedStyle == "function") {
      const de = (se = (le = _.current) === null || le === void 0 ? void 0 : le.nativeElement) === null || se === void 0 ? void 0 : se.querySelector("textarea");
      de && getComputedStyle(de).resize === "both" && Z(true);
    }
  };
  return L(k(l.createElement(KC, Object.assign({ autoComplete: y }, b, { style: Object.assign(Object.assign({}, O), h), styles: Object.assign(Object.assign({}, S), p), disabled: P, allowClear: J, className: Q(Y, z, f, d, B, E, q && `${j}-textarea-affix-wrapper-resize-dirty`), classNames: Object.assign(Object.assign(Object.assign({}, u), R), { textarea: Q({ [`${j}-sm`]: G === "small", [`${j}-lg`]: G === "large" }, H, u == null ? void 0 : u.textarea, R.textarea, oe && `${j}-mouse-active`), variant: Q({ [`${j}-${re}`]: W }, Cr(j, M)), affixWrapper: Q(`${j}-textarea-affix-wrapper`, { [`${j}-affix-wrapper-rtl`]: x === "rtl", [`${j}-affix-wrapper-sm`]: G === "small", [`${j}-affix-wrapper-lg`]: G === "large", [`${j}-textarea-show-count`]: v || ((n = e2.count) === null || n === void 0 ? void 0 : n.show) }, H) }), prefixCls: j, suffix: N && l.createElement("span", { className: `${j}-textarea-suffix` }, T), showCount: v, ref: _, onResize: X, onMouseDown: ie }))));
}), la = so;
la.Group = $C;
la.Search = zC;
la.TextArea = JC;
la.Password = LC;
la.OTP = NC;
var ZC = ["prefixCls", "className", "checked", "defaultChecked", "disabled", "loadingIcon", "checkedChildren", "unCheckedChildren", "onClick", "onChange", "onKeyDown"], Ad = l.forwardRef(function(e2, t) {
  var n, r = e2.prefixCls, a = r === void 0 ? "rc-switch" : r, o = e2.className, i = e2.checked, s = e2.defaultChecked, c = e2.disabled, u = e2.loadingIcon, d = e2.checkedChildren, f = e2.unCheckedChildren, h = e2.onClick, p = e2.onChange, g = e2.onKeyDown, v = rt(e2, ZC), m = yn(false, { value: i, defaultValue: s }), w = te(m, 2), b = w[0], C = w[1];
  function x(O, R) {
    var S = b;
    return c || (S = O, C(S), p == null ? void 0 : p(S, R)), S;
  }
  function I(O) {
    O.which === He.LEFT ? x(false, O) : O.which === He.RIGHT && x(true, O), g == null ? void 0 : g(O);
  }
  function y(O) {
    var R = x(!b, O);
    h == null ? void 0 : h(R, O);
  }
  var E = Q(a, o, (n = {}, D(n, "".concat(a, "-checked"), b), D(n, "".concat(a, "-disabled"), c), n));
  return l.createElement("button", Ie({}, v, { type: "button", role: "switch", "aria-checked": b, disabled: c, className: E, ref: t, onKeyDown: I, onClick: y }), u, l.createElement("span", { className: "".concat(a, "-inner") }, l.createElement("span", { className: "".concat(a, "-inner-checked") }, d), l.createElement("span", { className: "".concat(a, "-inner-unchecked") }, f)));
});
Ad.displayName = "Switch";
const eS = (e2) => {
  const { componentCls: t, trackHeightSM: n, trackPadding: r, trackMinWidthSM: a, innerMinMarginSM: o, innerMaxMarginSM: i, handleSizeSM: s, calc: c } = e2, u = `${t}-inner`, d = ne(c(s).add(c(r).mul(2)).equal()), f = ne(c(i).mul(2).equal());
  return { [t]: { [`&${t}-small`]: { minWidth: a, height: n, lineHeight: ne(n), [`${t}-inner`]: { paddingInlineStart: i, paddingInlineEnd: o, [`${u}-checked, ${u}-unchecked`]: { minHeight: n }, [`${u}-checked`]: { marginInlineStart: `calc(-100% + ${d} - ${f})`, marginInlineEnd: `calc(100% - ${d} + ${f})` }, [`${u}-unchecked`]: { marginTop: c(n).mul(-1).equal(), marginInlineStart: 0, marginInlineEnd: 0 } }, [`${t}-handle`]: { width: s, height: s }, [`${t}-loading-icon`]: { top: c(c(s).sub(e2.switchLoadingIconSize)).div(2).equal(), fontSize: e2.switchLoadingIconSize }, [`&${t}-checked`]: { [`${t}-inner`]: { paddingInlineStart: o, paddingInlineEnd: i, [`${u}-checked`]: { marginInlineStart: 0, marginInlineEnd: 0 }, [`${u}-unchecked`]: { marginInlineStart: `calc(100% - ${d} + ${f})`, marginInlineEnd: `calc(-100% + ${d} - ${f})` } }, [`${t}-handle`]: { insetInlineStart: `calc(100% - ${ne(c(s).add(r).equal())})` } }, [`&:not(${t}-disabled):active`]: { [`&:not(${t}-checked) ${u}`]: { [`${u}-unchecked`]: { marginInlineStart: c(e2.marginXXS).div(2).equal(), marginInlineEnd: c(e2.marginXXS).mul(-1).div(2).equal() } }, [`&${t}-checked ${u}`]: { [`${u}-checked`]: { marginInlineStart: c(e2.marginXXS).mul(-1).div(2).equal(), marginInlineEnd: c(e2.marginXXS).div(2).equal() } } } } } };
}, tS = (e2) => {
  const { componentCls: t, handleSize: n, calc: r } = e2;
  return { [t]: { [`${t}-loading-icon${e2.iconCls}`]: { position: "relative", top: r(r(n).sub(e2.fontSize)).div(2).equal(), color: e2.switchLoadingIconColor, verticalAlign: "top" }, [`&${t}-checked ${t}-loading-icon`]: { color: e2.switchColor } } };
}, nS = (e2) => {
  const { componentCls: t, trackPadding: n, handleBg: r, handleShadow: a, handleSize: o, calc: i } = e2, s = `${t}-handle`;
  return { [t]: { [s]: { position: "absolute", top: n, insetInlineStart: n, width: o, height: o, transition: `all ${e2.switchDuration} ease-in-out`, "&::before": { position: "absolute", top: 0, insetInlineEnd: 0, bottom: 0, insetInlineStart: 0, backgroundColor: r, borderRadius: i(o).div(2).equal(), boxShadow: a, transition: `all ${e2.switchDuration} ease-in-out`, content: '""' } }, [`&${t}-checked ${s}`]: { insetInlineStart: `calc(100% - ${ne(i(o).add(n).equal())})` }, [`&:not(${t}-disabled):active`]: { [`${s}::before`]: { insetInlineEnd: e2.switchHandleActiveInset, insetInlineStart: 0 }, [`&${t}-checked ${s}::before`]: { insetInlineEnd: 0, insetInlineStart: e2.switchHandleActiveInset } } } };
}, rS = (e2) => {
  const { componentCls: t, trackHeight: n, trackPadding: r, innerMinMargin: a, innerMaxMargin: o, handleSize: i, calc: s } = e2, c = `${t}-inner`, u = ne(s(i).add(s(r).mul(2)).equal()), d = ne(s(o).mul(2).equal());
  return { [t]: { [c]: { display: "block", overflow: "hidden", borderRadius: 100, height: "100%", paddingInlineStart: o, paddingInlineEnd: a, transition: `padding-inline-start ${e2.switchDuration} ease-in-out, padding-inline-end ${e2.switchDuration} ease-in-out`, [`${c}-checked, ${c}-unchecked`]: { display: "block", color: e2.colorTextLightSolid, fontSize: e2.fontSizeSM, transition: `margin-inline-start ${e2.switchDuration} ease-in-out, margin-inline-end ${e2.switchDuration} ease-in-out`, pointerEvents: "none", minHeight: n }, [`${c}-checked`]: { marginInlineStart: `calc(-100% + ${u} - ${d})`, marginInlineEnd: `calc(100% - ${u} + ${d})` }, [`${c}-unchecked`]: { marginTop: s(n).mul(-1).equal(), marginInlineStart: 0, marginInlineEnd: 0 } }, [`&${t}-checked ${c}`]: { paddingInlineStart: a, paddingInlineEnd: o, [`${c}-checked`]: { marginInlineStart: 0, marginInlineEnd: 0 }, [`${c}-unchecked`]: { marginInlineStart: `calc(100% - ${u} + ${d})`, marginInlineEnd: `calc(-100% + ${u} - ${d})` } }, [`&:not(${t}-disabled):active`]: { [`&:not(${t}-checked) ${c}`]: { [`${c}-unchecked`]: { marginInlineStart: s(r).mul(2).equal(), marginInlineEnd: s(r).mul(-1).mul(2).equal() } }, [`&${t}-checked ${c}`]: { [`${c}-checked`]: { marginInlineStart: s(r).mul(-1).mul(2).equal(), marginInlineEnd: s(r).mul(2).equal() } } } } };
}, aS = (e2) => {
  const { componentCls: t, trackHeight: n, trackMinWidth: r } = e2;
  return { [t]: Object.assign(Object.assign(Object.assign(Object.assign({}, Ut(e2)), { position: "relative", display: "inline-block", boxSizing: "border-box", minWidth: r, height: n, lineHeight: ne(n), verticalAlign: "middle", background: e2.colorTextQuaternary, border: "0", borderRadius: 100, cursor: "pointer", transition: `all ${e2.motionDurationMid}`, userSelect: "none", [`&:hover:not(${t}-disabled)`]: { background: e2.colorTextTertiary } }), Hi(e2)), { [`&${t}-checked`]: { background: e2.switchColor, [`&:hover:not(${t}-disabled)`]: { background: e2.colorPrimaryHover } }, [`&${t}-loading, &${t}-disabled`]: { cursor: "not-allowed", opacity: e2.switchDisabledOpacity, "*": { boxShadow: "none", cursor: "not-allowed" } }, [`&${t}-rtl`]: { direction: "rtl" } }) };
}, oS = (e2) => {
  const { fontSize: t, lineHeight: n, controlHeight: r, colorWhite: a } = e2, o = t * n, i = r / 2, s = 2, c = o - s * 2, u = i - s * 2;
  return { trackHeight: o, trackHeightSM: i, trackMinWidth: c * 2 + s * 4, trackMinWidthSM: u * 2 + s * 2, trackPadding: s, handleBg: a, handleSize: c, handleSizeSM: u, handleShadow: `0 2px 4px 0 ${new Wa("#00230b").setA(0.2).toRgbString()}`, innerMinMargin: c / 2, innerMaxMargin: c + s + s * 2, innerMinMarginSM: u / 2, innerMaxMarginSM: u + s + s * 2 };
}, iS = Lt("Switch", (e2) => {
  const t = mt(e2, { switchDuration: e2.motionDurationMid, switchColor: e2.colorPrimary, switchDisabledOpacity: e2.opacityLoading, switchLoadingIconSize: e2.calc(e2.fontSizeIcon).mul(0.75).equal(), switchLoadingIconColor: `rgba(0, 0, 0, ${e2.opacityLoading})`, switchHandleActiveInset: "-30%" });
  return [aS(t), rS(t), nS(t), tS(t), eS(t)];
}, oS);
var sS = function(e2, t) {
  var n = {};
  for (var r in e2) Object.prototype.hasOwnProperty.call(e2, r) && t.indexOf(r) < 0 && (n[r] = e2[r]);
  if (e2 != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, r = Object.getOwnPropertySymbols(e2); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e2, r[a]) && (n[r[a]] = e2[r[a]]);
  return n;
};
const lS = l.forwardRef((e2, t) => {
  const { prefixCls: n, size: r, disabled: a, loading: o, className: i, rootClassName: s, style: c, checked: u, value: d, defaultChecked: f, defaultValue: h, onChange: p } = e2, g = sS(e2, ["prefixCls", "size", "disabled", "loading", "className", "rootClassName", "style", "checked", "value", "defaultChecked", "defaultValue", "onChange"]), [v, m] = yn(false, { value: u ?? d, defaultValue: f ?? h }), { getPrefixCls: w, direction: b, switch: C } = l.useContext(ft), x = l.useContext(kn), I = (a ?? x) || o, y = w("switch", n), E = l.createElement("div", { className: `${y}-handle` }, o && l.createElement(Ua, { className: `${y}-loading-icon` })), [O, R, S] = iS(y), $ = wn(r), P = Q(C == null ? void 0 : C.className, { [`${y}-small`]: $ === "small", [`${y}-loading`]: o, [`${y}-rtl`]: b === "rtl" }, i, s, R, S), A = Object.assign(Object.assign({}, C == null ? void 0 : C.style), c), N = function() {
    m(arguments.length <= 0 ? void 0 : arguments[0]), p == null ? void 0 : p.apply(void 0, arguments);
  };
  return O(l.createElement(Zc, { component: "Switch" }, l.createElement(Ad, Object.assign({}, g, { checked: v, onChange: N, prefixCls: y, className: P, style: A, disabled: I, ref: t, loadingIcon: E }))));
}), cS = lS;
cS.__ANT_SWITCH = true;
var uS = () => {
  var _a5, _b3, _c4;
  try {
    let e2 = ((_a5 = globalThis.navigator) == null ? void 0 : _a5.userAgent).match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if (e2[1] === "Chrome") return parseInt(e2[2]) < 100 || ((_c4 = (_b3 = globalThis.chrome.runtime) == null ? void 0 : _b3.getManifest()) == null ? void 0 : _c4.manifest_version) === 2;
  } catch {
    return false;
  }
  return false;
}, dS = (_c3 = class {
  constructor({ area: e2 = "sync", allCopied: t = false, copiedKeyList: n = [], serde: r = {} } = {}) {
    __privateAdd(this, _dS_instances);
    __privateAdd(this, _n4);
    __privateAdd(this, _e3);
    __privateAdd(this, _t3);
    __privateAdd(this, _r4);
    __privateAdd(this, _a4, /* @__PURE__ */ new Map());
    __privateAdd(this, _o3);
    __publicField(this, "isCopied", (e2) => this.hasWebApi && (this.allCopied || this.copiedKeySet.has(e2)));
    __privateAdd(this, _i3, false);
    __publicField(this, "getExtStorageApi", () => {
      var _a5, _b3;
      return ((_a5 = globalThis.browser) == null ? void 0 : _a5.storage) || ((_b3 = globalThis.chrome) == null ? void 0 : _b3.storage);
    });
    __publicField(this, "isWatchSupported", () => this.hasExtensionApi);
    __publicField(this, "keyNamespace", "");
    __publicField(this, "isValidKey", (e2) => e2.startsWith(this.keyNamespace));
    __publicField(this, "getNamespacedKey", (e2) => `${this.keyNamespace}${e2}`);
    __publicField(this, "getUnnamespacedKey", (e2) => e2.slice(this.keyNamespace.length));
    __publicField(this, "serde", { serializer: JSON.stringify, deserializer: JSON.parse });
    __publicField(this, "rawGetAll", () => {
      var _a5;
      return (_a5 = __privateGet(this, _e3)) == null ? void 0 : _a5.get();
    });
    __publicField(this, "getAll", async () => {
      let e2 = await this.rawGetAll();
      return Object.entries(e2).filter(([t]) => this.isValidKey(t)).reduce((t, [n, r]) => (t[this.getUnnamespacedKey(n)] = r, t), {});
    });
    __publicField(this, "copy", async (e2) => {
      var _a5, _b3;
      let t = e2 === void 0;
      if (!t && !this.copiedKeySet.has(e2) || !this.allCopied || !this.hasExtensionApi) return false;
      let n = this.allCopied ? await this.rawGetAll() : await __privateGet(this, _e3).get((t ? [...this.copiedKeySet] : [e2]).map(this.getNamespacedKey));
      if (!n) return false;
      let r = false;
      for (let a in n) {
        let o = n[a], i = (_a5 = __privateGet(this, _t3)) == null ? void 0 : _a5.getItem(a);
        (_b3 = __privateGet(this, _t3)) == null ? void 0 : _b3.setItem(a, o), r || (r = o !== i);
      }
      return r;
    });
    __publicField(this, "rawGet", async (e2) => (await this.rawGetMany([e2]))[e2]);
    __publicField(this, "rawGetMany", async (e2) => this.hasExtensionApi ? await __privateGet(this, _e3).get(e2) : e2.filter(this.isCopied).reduce((t, n) => {
      var _a5;
      return t[n] = (_a5 = __privateGet(this, _t3)) == null ? void 0 : _a5.getItem(n), t;
    }, {}));
    __publicField(this, "rawSet", async (e2, t) => await this.rawSetMany({ [e2]: t }));
    __publicField(this, "rawSetMany", async (e2) => (__privateGet(this, _t3) && Object.entries(e2).filter(([t]) => this.isCopied(t)).forEach(([t, n]) => __privateGet(this, _t3).setItem(t, n)), this.hasExtensionApi && await __privateGet(this, _e3).set(e2), null));
    __publicField(this, "clear", async (e2 = false) => {
      var _a5;
      e2 && ((_a5 = __privateGet(this, _t3)) == null ? void 0 : _a5.clear()), await __privateGet(this, _e3).clear();
    });
    __publicField(this, "rawRemove", async (e2) => {
      await this.rawRemoveMany([e2]);
    });
    __publicField(this, "rawRemoveMany", async (e2) => {
      __privateGet(this, _t3) && e2.filter(this.isCopied).forEach((t) => __privateGet(this, _t3).removeItem(t)), this.hasExtensionApi && await __privateGet(this, _e3).remove(e2);
    });
    __publicField(this, "removeAll", async () => {
      let e2 = await this.getAll(), t = Object.keys(e2);
      await this.removeMany(t);
    });
    __publicField(this, "watch", (e2) => {
      let t = this.isWatchSupported();
      return t && __privateGet(this, _s3).call(this, e2), t;
    });
    __privateAdd(this, _s3, (e2) => {
      var _a5;
      for (let t in e2) {
        let n = this.getNamespacedKey(t), r = ((_a5 = __privateGet(this, _a4).get(n)) == null ? void 0 : _a5.callbackSet) || /* @__PURE__ */ new Set();
        if (r.add(e2[t]), r.size > 1) continue;
        let a = (o, i) => {
          if (i !== this.area || !o[n]) return;
          let s = __privateGet(this, _a4).get(n);
          if (!s) throw new Error(`Storage comms does not exist for nsKey: ${n}`);
          Promise.all([this.parseValue(o[n].newValue), this.parseValue(o[n].oldValue)]).then(([c, u]) => {
            for (let d of s.callbackSet) d({ newValue: c, oldValue: u }, i);
          });
        };
        __privateGet(this, _n4).onChanged.addListener(a), __privateGet(this, _a4).set(n, { callbackSet: r, listener: a });
      }
    });
    __publicField(this, "unwatch", (e2) => {
      let t = this.isWatchSupported();
      return t && __privateMethod(this, _dS_instances, u_fn).call(this, e2), t;
    });
    __publicField(this, "unwatchAll", () => __privateMethod(this, _dS_instances, l_fn).call(this));
    this.setCopiedKeySet(n), __privateSet(this, _r4, e2), __privateSet(this, _i3, t), this.serde = { ...this.serde, ...r };
    try {
      this.hasWebApi && (t || n.length > 0) && __privateSet(this, _t3, window.localStorage);
    } catch {
    }
    try {
      this.hasExtensionApi && (__privateSet(this, _n4, this.getExtStorageApi()), uS() ? __privateSet(this, _e3, Lf(__privateGet(this, _n4)[this.area], { exclude: ["getBytesInUse"], errorFirst: false })) : __privateSet(this, _e3, __privateGet(this, _n4)[this.area]));
    } catch {
    }
  }
  get primaryClient() {
    return __privateGet(this, _e3);
  }
  get secondaryClient() {
    return __privateGet(this, _t3);
  }
  get area() {
    return __privateGet(this, _r4);
  }
  get hasWebApi() {
    try {
      return typeof window < "u" && !!window.localStorage;
    } catch (e2) {
      return console.error(e2), false;
    }
  }
  get copiedKeySet() {
    return __privateGet(this, _o3);
  }
  get allCopied() {
    return __privateGet(this, _i3);
  }
  get hasExtensionApi() {
    try {
      return !!this.getExtStorageApi();
    } catch (e2) {
      return console.error(e2), false;
    }
  }
  setCopiedKeySet(e2) {
    __privateSet(this, _o3, new Set(e2));
  }
  async getItem(e2) {
    return this.get(e2);
  }
  async getItems(e2) {
    return await this.getMany(e2);
  }
  async setItem(e2, t) {
    await this.set(e2, t);
  }
  async setItems(e2) {
    await await this.setMany(e2);
  }
  async removeItem(e2) {
    return this.remove(e2);
  }
  async removeItems(e2) {
    return await this.removeMany(e2);
  }
}, _n4 = new WeakMap(), _e3 = new WeakMap(), _t3 = new WeakMap(), _r4 = new WeakMap(), _a4 = new WeakMap(), _o3 = new WeakMap(), _i3 = new WeakMap(), _s3 = new WeakMap(), _dS_instances = new WeakSet(), u_fn = function(e2) {
  for (let t in e2) {
    let n = this.getNamespacedKey(t), r = e2[t], a = __privateGet(this, _a4).get(n);
    a && (a.callbackSet.delete(r), a.callbackSet.size === 0 && (__privateGet(this, _a4).delete(n), __privateGet(this, _n4).onChanged.removeListener(a.listener)));
  }
}, l_fn = function() {
  __privateGet(this, _a4).forEach(({ listener: e2 }) => __privateGet(this, _n4).onChanged.removeListener(e2)), __privateGet(this, _a4).clear();
}, _c3), Ir = class extends dS {
  constructor() {
    super(...arguments);
    __publicField(this, "get", async (e2) => {
      let t = this.getNamespacedKey(e2), n = await this.rawGet(t);
      return this.parseValue(n);
    });
    __publicField(this, "getMany", async (e2) => {
      let t = e2.map(this.getNamespacedKey), n = await this.rawGetMany(t), r = await Promise.all(Object.values(n).map(this.parseValue));
      return Object.keys(n).reduce((a, o, i) => (a[this.getUnnamespacedKey(o)] = r[i], a), {});
    });
    __publicField(this, "set", async (e2, t) => {
      let n = this.getNamespacedKey(e2), r = this.serde.serializer(t);
      return this.rawSet(n, r);
    });
    __publicField(this, "setMany", async (e2) => {
      let t = Object.entries(e2).reduce((n, [r, a]) => (n[this.getNamespacedKey(r)] = this.serde.serializer(a), n), {});
      return await this.rawSetMany(t);
    });
    __publicField(this, "remove", async (e2) => {
      let t = this.getNamespacedKey(e2);
      return this.rawRemove(t);
    });
    __publicField(this, "removeMany", async (e2) => {
      let t = e2.map(this.getNamespacedKey);
      return await this.rawRemoveMany(t);
    });
    __publicField(this, "setNamespace", (e2) => {
      this.keyNamespace = e2;
    });
    __publicField(this, "parseValue", async (e2) => {
      try {
        if (e2 !== void 0) return this.serde.deserializer(e2);
      } catch (t) {
        console.error(t);
      }
    });
  }
};
class ds {
  constructor() {
    __publicField(this, "db");
    __publicField(this, "KEY", "modelNickname");
    this.db = new Ir({ area: "local" });
  }
  async saveModelNickname(t, n, r) {
    const a = await this.db.get(this.KEY) || {};
    a[t] = { model_name: n, ...r && { model_avatar: r } }, await this.db.set(this.KEY, a);
  }
  async getModelNicknameByID(t) {
    return (await this.db.get(this.KEY) || {})[t];
  }
  async getAllModelNicknames() {
    return await this.db.get(this.KEY) || {};
  }
}
const fs = async () => await new ds().getAllModelNicknames(), Q$ = async (e2) => await new ds().getModelNicknameByID(e2), J$ = async ({ model_id: e2, model_name: t, model_avatar: n }) => await new ds().saveModelNickname(e2, t, n);
var $a = { exports: {} }, fS = $a.exports, rc;
function mS() {
  return rc || (rc = 1, function(e2, t) {
    (function(n, r) {
      r(e2);
    })(typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : fS, function(n) {
      if (!(globalThis.chrome && globalThis.chrome.runtime && globalThis.chrome.runtime.id)) throw new Error("This script should only be loaded in a browser extension.");
      if (globalThis.browser && globalThis.browser.runtime && globalThis.browser.runtime.id) n.exports = globalThis.browser;
      else {
        const r = "The message port closed before a response was received.", a = (o) => {
          const i = { alarms: { clear: { minArgs: 0, maxArgs: 1 }, clearAll: { minArgs: 0, maxArgs: 0 }, get: { minArgs: 0, maxArgs: 1 }, getAll: { minArgs: 0, maxArgs: 0 } }, bookmarks: { create: { minArgs: 1, maxArgs: 1 }, get: { minArgs: 1, maxArgs: 1 }, getChildren: { minArgs: 1, maxArgs: 1 }, getRecent: { minArgs: 1, maxArgs: 1 }, getSubTree: { minArgs: 1, maxArgs: 1 }, getTree: { minArgs: 0, maxArgs: 0 }, move: { minArgs: 2, maxArgs: 2 }, remove: { minArgs: 1, maxArgs: 1 }, removeTree: { minArgs: 1, maxArgs: 1 }, search: { minArgs: 1, maxArgs: 1 }, update: { minArgs: 2, maxArgs: 2 } }, browserAction: { disable: { minArgs: 0, maxArgs: 1, fallbackToNoCallback: true }, enable: { minArgs: 0, maxArgs: 1, fallbackToNoCallback: true }, getBadgeBackgroundColor: { minArgs: 1, maxArgs: 1 }, getBadgeText: { minArgs: 1, maxArgs: 1 }, getPopup: { minArgs: 1, maxArgs: 1 }, getTitle: { minArgs: 1, maxArgs: 1 }, openPopup: { minArgs: 0, maxArgs: 0 }, setBadgeBackgroundColor: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: true }, setBadgeText: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: true }, setIcon: { minArgs: 1, maxArgs: 1 }, setPopup: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: true }, setTitle: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: true } }, browsingData: { remove: { minArgs: 2, maxArgs: 2 }, removeCache: { minArgs: 1, maxArgs: 1 }, removeCookies: { minArgs: 1, maxArgs: 1 }, removeDownloads: { minArgs: 1, maxArgs: 1 }, removeFormData: { minArgs: 1, maxArgs: 1 }, removeHistory: { minArgs: 1, maxArgs: 1 }, removeLocalStorage: { minArgs: 1, maxArgs: 1 }, removePasswords: { minArgs: 1, maxArgs: 1 }, removePluginData: { minArgs: 1, maxArgs: 1 }, settings: { minArgs: 0, maxArgs: 0 } }, commands: { getAll: { minArgs: 0, maxArgs: 0 } }, contextMenus: { remove: { minArgs: 1, maxArgs: 1 }, removeAll: { minArgs: 0, maxArgs: 0 }, update: { minArgs: 2, maxArgs: 2 } }, cookies: { get: { minArgs: 1, maxArgs: 1 }, getAll: { minArgs: 1, maxArgs: 1 }, getAllCookieStores: { minArgs: 0, maxArgs: 0 }, remove: { minArgs: 1, maxArgs: 1 }, set: { minArgs: 1, maxArgs: 1 } }, devtools: { inspectedWindow: { eval: { minArgs: 1, maxArgs: 2, singleCallbackArg: false } }, panels: { create: { minArgs: 3, maxArgs: 3, singleCallbackArg: true }, elements: { createSidebarPane: { minArgs: 1, maxArgs: 1 } } } }, downloads: { cancel: { minArgs: 1, maxArgs: 1 }, download: { minArgs: 1, maxArgs: 1 }, erase: { minArgs: 1, maxArgs: 1 }, getFileIcon: { minArgs: 1, maxArgs: 2 }, open: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: true }, pause: { minArgs: 1, maxArgs: 1 }, removeFile: { minArgs: 1, maxArgs: 1 }, resume: { minArgs: 1, maxArgs: 1 }, search: { minArgs: 1, maxArgs: 1 }, show: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: true } }, extension: { isAllowedFileSchemeAccess: { minArgs: 0, maxArgs: 0 }, isAllowedIncognitoAccess: { minArgs: 0, maxArgs: 0 } }, history: { addUrl: { minArgs: 1, maxArgs: 1 }, deleteAll: { minArgs: 0, maxArgs: 0 }, deleteRange: { minArgs: 1, maxArgs: 1 }, deleteUrl: { minArgs: 1, maxArgs: 1 }, getVisits: { minArgs: 1, maxArgs: 1 }, search: { minArgs: 1, maxArgs: 1 } }, i18n: { detectLanguage: { minArgs: 1, maxArgs: 1 }, getAcceptLanguages: { minArgs: 0, maxArgs: 0 } }, identity: { launchWebAuthFlow: { minArgs: 1, maxArgs: 1 } }, idle: { queryState: { minArgs: 1, maxArgs: 1 } }, management: { get: { minArgs: 1, maxArgs: 1 }, getAll: { minArgs: 0, maxArgs: 0 }, getSelf: { minArgs: 0, maxArgs: 0 }, setEnabled: { minArgs: 2, maxArgs: 2 }, uninstallSelf: { minArgs: 0, maxArgs: 1 } }, notifications: { clear: { minArgs: 1, maxArgs: 1 }, create: { minArgs: 1, maxArgs: 2 }, getAll: { minArgs: 0, maxArgs: 0 }, getPermissionLevel: { minArgs: 0, maxArgs: 0 }, update: { minArgs: 2, maxArgs: 2 } }, pageAction: { getPopup: { minArgs: 1, maxArgs: 1 }, getTitle: { minArgs: 1, maxArgs: 1 }, hide: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: true }, setIcon: { minArgs: 1, maxArgs: 1 }, setPopup: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: true }, setTitle: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: true }, show: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: true } }, permissions: { contains: { minArgs: 1, maxArgs: 1 }, getAll: { minArgs: 0, maxArgs: 0 }, remove: { minArgs: 1, maxArgs: 1 }, request: { minArgs: 1, maxArgs: 1 } }, runtime: { getBackgroundPage: { minArgs: 0, maxArgs: 0 }, getPlatformInfo: { minArgs: 0, maxArgs: 0 }, openOptionsPage: { minArgs: 0, maxArgs: 0 }, requestUpdateCheck: { minArgs: 0, maxArgs: 0 }, sendMessage: { minArgs: 1, maxArgs: 3 }, sendNativeMessage: { minArgs: 2, maxArgs: 2 }, setUninstallURL: { minArgs: 1, maxArgs: 1 } }, sessions: { getDevices: { minArgs: 0, maxArgs: 1 }, getRecentlyClosed: { minArgs: 0, maxArgs: 1 }, restore: { minArgs: 0, maxArgs: 1 } }, storage: { local: { clear: { minArgs: 0, maxArgs: 0 }, get: { minArgs: 0, maxArgs: 1 }, getBytesInUse: { minArgs: 0, maxArgs: 1 }, remove: { minArgs: 1, maxArgs: 1 }, set: { minArgs: 1, maxArgs: 1 } }, managed: { get: { minArgs: 0, maxArgs: 1 }, getBytesInUse: { minArgs: 0, maxArgs: 1 } }, sync: { clear: { minArgs: 0, maxArgs: 0 }, get: { minArgs: 0, maxArgs: 1 }, getBytesInUse: { minArgs: 0, maxArgs: 1 }, remove: { minArgs: 1, maxArgs: 1 }, set: { minArgs: 1, maxArgs: 1 } } }, tabs: { captureVisibleTab: { minArgs: 0, maxArgs: 2 }, create: { minArgs: 1, maxArgs: 1 }, detectLanguage: { minArgs: 0, maxArgs: 1 }, discard: { minArgs: 0, maxArgs: 1 }, duplicate: { minArgs: 1, maxArgs: 1 }, executeScript: { minArgs: 1, maxArgs: 2 }, get: { minArgs: 1, maxArgs: 1 }, getCurrent: { minArgs: 0, maxArgs: 0 }, getZoom: { minArgs: 0, maxArgs: 1 }, getZoomSettings: { minArgs: 0, maxArgs: 1 }, goBack: { minArgs: 0, maxArgs: 1 }, goForward: { minArgs: 0, maxArgs: 1 }, highlight: { minArgs: 1, maxArgs: 1 }, insertCSS: { minArgs: 1, maxArgs: 2 }, move: { minArgs: 2, maxArgs: 2 }, query: { minArgs: 1, maxArgs: 1 }, reload: { minArgs: 0, maxArgs: 2 }, remove: { minArgs: 1, maxArgs: 1 }, removeCSS: { minArgs: 1, maxArgs: 2 }, sendMessage: { minArgs: 2, maxArgs: 3 }, setZoom: { minArgs: 1, maxArgs: 2 }, setZoomSettings: { minArgs: 1, maxArgs: 2 }, update: { minArgs: 1, maxArgs: 2 } }, topSites: { get: { minArgs: 0, maxArgs: 0 } }, webNavigation: { getAllFrames: { minArgs: 1, maxArgs: 1 }, getFrame: { minArgs: 1, maxArgs: 1 } }, webRequest: { handlerBehaviorChanged: { minArgs: 0, maxArgs: 0 } }, windows: { create: { minArgs: 0, maxArgs: 1 }, get: { minArgs: 1, maxArgs: 2 }, getAll: { minArgs: 0, maxArgs: 1 }, getCurrent: { minArgs: 0, maxArgs: 1 }, getLastFocused: { minArgs: 0, maxArgs: 1 }, remove: { minArgs: 1, maxArgs: 1 }, update: { minArgs: 2, maxArgs: 2 } } };
          if (Object.keys(i).length === 0) throw new Error("api-metadata.json has not been included in browser-polyfill");
          class s extends WeakMap {
            constructor(E, O = void 0) {
              super(O), this.createItem = E;
            }
            get(E) {
              return this.has(E) || this.set(E, this.createItem(E)), super.get(E);
            }
          }
          const c = (y) => y && typeof y == "object" && typeof y.then == "function", u = (y, E) => (...O) => {
            o.runtime.lastError ? y.reject(new Error(o.runtime.lastError.message)) : E.singleCallbackArg || O.length <= 1 && E.singleCallbackArg !== false ? y.resolve(O[0]) : y.resolve(O);
          }, d = (y) => y == 1 ? "argument" : "arguments", f = (y, E) => function(R, ...S) {
            if (S.length < E.minArgs) throw new Error(`Expected at least ${E.minArgs} ${d(E.minArgs)} for ${y}(), got ${S.length}`);
            if (S.length > E.maxArgs) throw new Error(`Expected at most ${E.maxArgs} ${d(E.maxArgs)} for ${y}(), got ${S.length}`);
            return new Promise(($, P) => {
              if (E.fallbackToNoCallback) try {
                R[y](...S, u({ resolve: $, reject: P }, E));
              } catch (A) {
                console.warn(`${y} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `, A), R[y](...S), E.fallbackToNoCallback = false, E.noCallback = true, $();
              }
              else E.noCallback ? (R[y](...S), $()) : R[y](...S, u({ resolve: $, reject: P }, E));
            });
          }, h = (y, E, O) => new Proxy(E, { apply(R, S, $) {
            return O.call(S, y, ...$);
          } });
          let p = Function.call.bind(Object.prototype.hasOwnProperty);
          const g = (y, E = {}, O = {}) => {
            let R = /* @__PURE__ */ Object.create(null), S = { has(P, A) {
              return A in y || A in R;
            }, get(P, A, N) {
              if (A in R) return R[A];
              if (!(A in y)) return;
              let T = y[A];
              if (typeof T == "function") if (typeof E[A] == "function") T = h(y, y[A], E[A]);
              else if (p(O, A)) {
                let M = f(A, O[A]);
                T = h(y, y[A], M);
              } else T = T.bind(y);
              else if (typeof T == "object" && T !== null && (p(E, A) || p(O, A))) T = g(T, E[A], O[A]);
              else if (p(O, "*")) T = g(T, E[A], O["*"]);
              else return Object.defineProperty(R, A, { configurable: true, enumerable: true, get() {
                return y[A];
              }, set(M) {
                y[A] = M;
              } }), T;
              return R[A] = T, T;
            }, set(P, A, N, T) {
              return A in R ? R[A] = N : y[A] = N, true;
            }, defineProperty(P, A, N) {
              return Reflect.defineProperty(R, A, N);
            }, deleteProperty(P, A) {
              return Reflect.deleteProperty(R, A);
            } }, $ = Object.create(y);
            return new Proxy($, S);
          }, v = (y) => ({ addListener(E, O, ...R) {
            E.addListener(y.get(O), ...R);
          }, hasListener(E, O) {
            return E.hasListener(y.get(O));
          }, removeListener(E, O) {
            E.removeListener(y.get(O));
          } }), m = new s((y) => typeof y != "function" ? y : function(O) {
            const R = g(O, {}, { getContent: { minArgs: 0, maxArgs: 0 } });
            y(R);
          }), w = new s((y) => typeof y != "function" ? y : function(O, R, S) {
            let $ = false, P, A = new Promise((_) => {
              P = function(j) {
                $ = true, _(j);
              };
            }), N;
            try {
              N = y(O, R, P);
            } catch (_) {
              N = Promise.reject(_);
            }
            const T = N !== true && c(N);
            if (N !== true && !T && !$) return false;
            const M = (_) => {
              _.then((j) => {
                S(j);
              }, (j) => {
                let z;
                j && (j instanceof Error || typeof j.message == "string") ? z = j.message : z = "An unexpected error occurred", S({ __mozWebExtensionPolyfillReject__: true, message: z });
              }).catch((j) => {
                console.error("Failed to send onMessage rejected reply", j);
              });
            };
            return M(T ? N : A), true;
          }), b = ({ reject: y, resolve: E }, O) => {
            o.runtime.lastError ? o.runtime.lastError.message === r ? E() : y(new Error(o.runtime.lastError.message)) : O && O.__mozWebExtensionPolyfillReject__ ? y(new Error(O.message)) : E(O);
          }, C = (y, E, O, ...R) => {
            if (R.length < E.minArgs) throw new Error(`Expected at least ${E.minArgs} ${d(E.minArgs)} for ${y}(), got ${R.length}`);
            if (R.length > E.maxArgs) throw new Error(`Expected at most ${E.maxArgs} ${d(E.maxArgs)} for ${y}(), got ${R.length}`);
            return new Promise((S, $) => {
              const P = b.bind(null, { resolve: S, reject: $ });
              R.push(P), O.sendMessage(...R);
            });
          }, x = { devtools: { network: { onRequestFinished: v(m) } }, runtime: { onMessage: v(w), onMessageExternal: v(w), sendMessage: C.bind(null, "sendMessage", { minArgs: 1, maxArgs: 3 }) }, tabs: { sendMessage: C.bind(null, "sendMessage", { minArgs: 2, maxArgs: 3 }) } }, I = { clear: { minArgs: 1, maxArgs: 1 }, get: { minArgs: 1, maxArgs: 1 }, set: { minArgs: 1, maxArgs: 1 } };
          return i.privacy = { network: { "*": I }, services: { "*": I }, websites: { "*": I } }, g(o, x, i);
        };
        n.exports = a(chrome);
      }
    });
  }($a)), $a.exports;
}
var gS = mS();
const hS = Bf(gS), Ca = hS, tn = new Ir(), Pd = new Ir({ area: "local" }), vS = "http://127.0.0.1:11434", pS = async () => await tn.get("urlRewriteEnabled") ?? false, Z$ = async (e2) => {
  await tn.set("urlRewriteEnabled", e2);
}, bS = async () => {
  try {
    return await Pd.get("autoCORSFix") ?? true;
  } catch {
    return true;
  }
}, e1 = async (e2) => {
  await Pd.set("autoCORSFix", e2);
}, yS = async () => {
  try {
    return await tn.get("ollamaEnabledStatus") ?? true;
  } catch {
    return true;
  }
}, wS = async () => {
  const e2 = await tn.get("rewriteUrl");
  return !e2 || e2.trim() === "" ? vS : e2;
}, t1 = async (e2) => {
  await tn.set("rewriteUrl", e2);
}, CS = async () => {
  const [e2, t, n] = await Promise.all([pS(), wS(), bS()]);
  return { isEnableRewriteUrl: e2, rewriteUrl: t, autoCORSFix: n };
}, n1 = async () => await tn.get("copilotResumeLastChat"), r1 = async () => await tn.get("webUIResumeLastChat"), SS = async () => {
  const e2 = await tn.get("customOllamaHeaders");
  return e2 || [];
}, a1 = async (e2) => {
  await tn.set("customOllamaHeaders", e2);
}, xS = async () => {
  const e2 = await SS(), t = {};
  for (const n of e2) t[n.key] = n.value;
  return t;
}, o1 = async () => await tn.get("totalFilePerKB") || 5, $S = async (e2) => {
  await tn.set("totalFilePerKB", e2);
}, i1 = async () => await tn.get("noOfRetrievedDocs") || 4, ES = async (e2) => {
  await tn.set("noOfRetrievedDocs", e2);
};
/**
* @license lucide-react v0.350.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var RS = { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };
/**
* @license lucide-react v0.350.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const OS = (e2) => e2.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
/**
* @license lucide-react v0.350.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Nd = (e2, t) => {
  const n = l.forwardRef(({ color: r = "currentColor", size: a = 24, strokeWidth: o = 2, absoluteStrokeWidth: i, className: s = "", children: c, ...u }, d) => l.createElement("svg", { ref: d, ...RS, width: a, height: a, stroke: r, strokeWidth: i ? Number(o) * 24 / Number(a) : o, className: ["lucide", `lucide-${OS(e2)}`, s].join(" "), ...u }, [...t.map(([f, h]) => l.createElement(f, h)), ...Array.isArray(c) ? c : [c]]));
  return n.displayName = `${e2}`, n;
};
/**
* @license lucide-react v0.350.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const IS = Nd("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
* @license lucide-react v0.350.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const s1 = Nd("Trash2", [["path", { d: "M3 6h18", key: "d0wm0j" }], ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }], ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }], ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }], ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]]);
function Md(e2, t) {
  return function() {
    return e2.apply(t, arguments);
  };
}
const { toString: AS } = Object.prototype, { getPrototypeOf: ms } = Object, { iterator: lo, toStringTag: Fd } = Symbol, co = /* @__PURE__ */ ((e2) => (t) => {
  const n = AS.call(t);
  return e2[n] || (e2[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Cn = (e2) => (e2 = e2.toLowerCase(), (t) => co(t) === e2), uo = (e2) => (t) => typeof t === e2, { isArray: Ar } = Array, Xr = uo("undefined");
function PS(e2) {
  return e2 !== null && !Xr(e2) && e2.constructor !== null && !Xr(e2.constructor) && kt(e2.constructor.isBuffer) && e2.constructor.isBuffer(e2);
}
const Td = Cn("ArrayBuffer");
function NS(e2) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e2) : t = e2 && e2.buffer && Td(e2.buffer), t;
}
const MS = uo("string"), kt = uo("function"), _d = uo("number"), fo = (e2) => e2 !== null && typeof e2 == "object", FS = (e2) => e2 === true || e2 === false, Ea = (e2) => {
  if (co(e2) !== "object") return false;
  const t = ms(e2);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Fd in e2) && !(lo in e2);
}, TS = Cn("Date"), _S = Cn("File"), jS = Cn("Blob"), DS = Cn("FileList"), LS = (e2) => fo(e2) && kt(e2.pipe), BS = (e2) => {
  let t;
  return e2 && (typeof FormData == "function" && e2 instanceof FormData || kt(e2.append) && ((t = co(e2)) === "formdata" || t === "object" && kt(e2.toString) && e2.toString() === "[object FormData]"));
}, zS = Cn("URLSearchParams"), [HS, VS, WS, qS] = ["ReadableStream", "Request", "Response", "Headers"].map(Cn), US = (e2) => e2.trim ? e2.trim() : e2.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ca(e2, t, { allOwnKeys: n = false } = {}) {
  if (e2 === null || typeof e2 > "u") return;
  let r, a;
  if (typeof e2 != "object" && (e2 = [e2]), Ar(e2)) for (r = 0, a = e2.length; r < a; r++) t.call(null, e2[r], r, e2);
  else {
    const o = n ? Object.getOwnPropertyNames(e2) : Object.keys(e2), i = o.length;
    let s;
    for (r = 0; r < i; r++) s = o[r], t.call(null, e2[s], s, e2);
  }
}
function jd(e2, t) {
  t = t.toLowerCase();
  const n = Object.keys(e2);
  let r = n.length, a;
  for (; r-- > 0; ) if (a = n[r], t === a.toLowerCase()) return a;
  return null;
}
const Jn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Dd = (e2) => !Xr(e2) && e2 !== Jn;
function Ni() {
  const { caseless: e2 } = Dd(this) && this || {}, t = {}, n = (r, a) => {
    const o = e2 && jd(t, a) || a;
    Ea(t[o]) && Ea(r) ? t[o] = Ni(t[o], r) : Ea(r) ? t[o] = Ni({}, r) : Ar(r) ? t[o] = r.slice() : t[o] = r;
  };
  for (let r = 0, a = arguments.length; r < a; r++) arguments[r] && ca(arguments[r], n);
  return t;
}
const kS = (e2, t, n, { allOwnKeys: r } = {}) => (ca(t, (a, o) => {
  n && kt(a) ? e2[o] = Md(a, n) : e2[o] = a;
}, { allOwnKeys: r }), e2), GS = (e2) => (e2.charCodeAt(0) === 65279 && (e2 = e2.slice(1)), e2), KS = (e2, t, n, r) => {
  e2.prototype = Object.create(t.prototype, r), e2.prototype.constructor = e2, Object.defineProperty(e2, "super", { value: t.prototype }), n && Object.assign(e2.prototype, n);
}, XS = (e2, t, n, r) => {
  let a, o, i;
  const s = {};
  if (t = t || {}, e2 == null) return t;
  do {
    for (a = Object.getOwnPropertyNames(e2), o = a.length; o-- > 0; ) i = a[o], (!r || r(i, e2, t)) && !s[i] && (t[i] = e2[i], s[i] = true);
    e2 = n !== false && ms(e2);
  } while (e2 && (!n || n(e2, t)) && e2 !== Object.prototype);
  return t;
}, YS = (e2, t, n) => {
  e2 = String(e2), (n === void 0 || n > e2.length) && (n = e2.length), n -= t.length;
  const r = e2.indexOf(t, n);
  return r !== -1 && r === n;
}, QS = (e2) => {
  if (!e2) return null;
  if (Ar(e2)) return e2;
  let t = e2.length;
  if (!_d(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; ) n[t] = e2[t];
  return n;
}, JS = /* @__PURE__ */ ((e2) => (t) => e2 && t instanceof e2)(typeof Uint8Array < "u" && ms(Uint8Array)), ZS = (e2, t) => {
  const r = (e2 && e2[lo]).call(e2);
  let a;
  for (; (a = r.next()) && !a.done; ) {
    const o = a.value;
    t.call(e2, o[0], o[1]);
  }
}, ex = (e2, t) => {
  let n;
  const r = [];
  for (; (n = e2.exec(t)) !== null; ) r.push(n);
  return r;
}, tx = Cn("HTMLFormElement"), nx = (e2) => e2.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(n, r, a) {
  return r.toUpperCase() + a;
}), ac = (({ hasOwnProperty: e2 }) => (t, n) => e2.call(t, n))(Object.prototype), rx = Cn("RegExp"), Ld = (e2, t) => {
  const n = Object.getOwnPropertyDescriptors(e2), r = {};
  ca(n, (a, o) => {
    let i;
    (i = t(a, o, e2)) !== false && (r[o] = i || a);
  }), Object.defineProperties(e2, r);
}, ax = (e2) => {
  Ld(e2, (t, n) => {
    if (kt(e2) && ["arguments", "caller", "callee"].indexOf(n) !== -1) return false;
    const r = e2[n];
    if (kt(r)) {
      if (t.enumerable = false, "writable" in t) {
        t.writable = false;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, ox = (e2, t) => {
  const n = {}, r = (a) => {
    a.forEach((o) => {
      n[o] = true;
    });
  };
  return Ar(e2) ? r(e2) : r(String(e2).split(t)), n;
}, ix = () => {
}, sx = (e2, t) => e2 != null && Number.isFinite(e2 = +e2) ? e2 : t;
function lx(e2) {
  return !!(e2 && kt(e2.append) && e2[Fd] === "FormData" && e2[lo]);
}
const cx = (e2) => {
  const t = new Array(10), n = (r, a) => {
    if (fo(r)) {
      if (t.indexOf(r) >= 0) return;
      if (!("toJSON" in r)) {
        t[a] = r;
        const o = Ar(r) ? [] : {};
        return ca(r, (i, s) => {
          const c = n(i, a + 1);
          !Xr(c) && (o[s] = c);
        }), t[a] = void 0, o;
      }
    }
    return r;
  };
  return n(e2, 0);
}, ux = Cn("AsyncFunction"), dx = (e2) => e2 && (fo(e2) || kt(e2)) && kt(e2.then) && kt(e2.catch), Bd = ((e2, t) => e2 ? setImmediate : t ? ((n, r) => (Jn.addEventListener("message", ({ source: a, data: o }) => {
  a === Jn && o === n && r.length && r.shift()();
}, false), (a) => {
  r.push(a), Jn.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(typeof setImmediate == "function", kt(Jn.postMessage)), fx = typeof queueMicrotask < "u" ? queueMicrotask.bind(Jn) : typeof process < "u" && process.nextTick || Bd, mx = (e2) => e2 != null && kt(e2[lo]), U = { isArray: Ar, isArrayBuffer: Td, isBuffer: PS, isFormData: BS, isArrayBufferView: NS, isString: MS, isNumber: _d, isBoolean: FS, isObject: fo, isPlainObject: Ea, isReadableStream: HS, isRequest: VS, isResponse: WS, isHeaders: qS, isUndefined: Xr, isDate: TS, isFile: _S, isBlob: jS, isRegExp: rx, isFunction: kt, isStream: LS, isURLSearchParams: zS, isTypedArray: JS, isFileList: DS, forEach: ca, merge: Ni, extend: kS, trim: US, stripBOM: GS, inherits: KS, toFlatObject: XS, kindOf: co, kindOfTest: Cn, endsWith: YS, toArray: QS, forEachEntry: ZS, matchAll: ex, isHTMLForm: tx, hasOwnProperty: ac, hasOwnProp: ac, reduceDescriptors: Ld, freezeMethods: ax, toObjectSet: ox, toCamelCase: nx, noop: ix, toFiniteNumber: sx, findKey: jd, global: Jn, isContextDefined: Dd, isSpecCompliantForm: lx, toJSONObject: cx, isAsyncFn: ux, isThenable: dx, setImmediate: Bd, asap: fx, isIterable: mx };
function Ge(e2, t, n, r, a) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e2, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), a && (this.response = a, this.status = a.status ? a.status : null);
}
U.inherits(Ge, Error, { toJSON: function() {
  return { message: this.message, name: this.name, description: this.description, number: this.number, fileName: this.fileName, lineNumber: this.lineNumber, columnNumber: this.columnNumber, stack: this.stack, config: U.toJSONObject(this.config), code: this.code, status: this.status };
} });
const zd = Ge.prototype, Hd = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach((e2) => {
  Hd[e2] = { value: e2 };
});
Object.defineProperties(Ge, Hd);
Object.defineProperty(zd, "isAxiosError", { value: true });
Ge.from = (e2, t, n, r, a, o) => {
  const i = Object.create(zd);
  return U.toFlatObject(e2, i, function(c) {
    return c !== Error.prototype;
  }, (s) => s !== "isAxiosError"), Ge.call(i, e2.message, t, n, r, a), i.cause = e2, i.name = e2.name, o && Object.assign(i, o), i;
};
const gx = null;
function Mi(e2) {
  return U.isPlainObject(e2) || U.isArray(e2);
}
function Vd(e2) {
  return U.endsWith(e2, "[]") ? e2.slice(0, -2) : e2;
}
function oc(e2, t, n) {
  return e2 ? e2.concat(t).map(function(a, o) {
    return a = Vd(a), !n && o ? "[" + a + "]" : a;
  }).join(n ? "." : "") : t;
}
function hx(e2) {
  return U.isArray(e2) && !e2.some(Mi);
}
const vx = U.toFlatObject(U, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function mo(e2, t, n) {
  if (!U.isObject(e2)) throw new TypeError("target must be an object");
  t = t || new FormData(), n = U.toFlatObject(n, { metaTokens: true, dots: false, indexes: false }, false, function(v, m) {
    return !U.isUndefined(m[v]);
  });
  const r = n.metaTokens, a = n.visitor || d, o = n.dots, i = n.indexes, c = (n.Blob || typeof Blob < "u" && Blob) && U.isSpecCompliantForm(t);
  if (!U.isFunction(a)) throw new TypeError("visitor must be a function");
  function u(g) {
    if (g === null) return "";
    if (U.isDate(g)) return g.toISOString();
    if (!c && U.isBlob(g)) throw new Ge("Blob is not supported. Use a Buffer instead.");
    return U.isArrayBuffer(g) || U.isTypedArray(g) ? c && typeof Blob == "function" ? new Blob([g]) : Buffer.from(g) : g;
  }
  function d(g, v, m) {
    let w = g;
    if (g && !m && typeof g == "object") {
      if (U.endsWith(v, "{}")) v = r ? v : v.slice(0, -2), g = JSON.stringify(g);
      else if (U.isArray(g) && hx(g) || (U.isFileList(g) || U.endsWith(v, "[]")) && (w = U.toArray(g))) return v = Vd(v), w.forEach(function(C, x) {
        !(U.isUndefined(C) || C === null) && t.append(i === true ? oc([v], x, o) : i === null ? v : v + "[]", u(C));
      }), false;
    }
    return Mi(g) ? true : (t.append(oc(m, v, o), u(g)), false);
  }
  const f = [], h = Object.assign(vx, { defaultVisitor: d, convertValue: u, isVisitable: Mi });
  function p(g, v) {
    if (!U.isUndefined(g)) {
      if (f.indexOf(g) !== -1) throw Error("Circular reference detected in " + v.join("."));
      f.push(g), U.forEach(g, function(w, b) {
        (!(U.isUndefined(w) || w === null) && a.call(t, w, U.isString(b) ? b.trim() : b, v, h)) === true && p(w, v ? v.concat(b) : [b]);
      }), f.pop();
    }
  }
  if (!U.isObject(e2)) throw new TypeError("data must be an object");
  return p(e2), t;
}
function ic(e2) {
  const t = { "!": "%21", "'": "%27", "(": "%28", ")": "%29", "~": "%7E", "%20": "+", "%00": "\0" };
  return encodeURIComponent(e2).replace(/[!'()~]|%20|%00/g, function(r) {
    return t[r];
  });
}
function gs(e2, t) {
  this._pairs = [], e2 && mo(e2, this, t);
}
const Wd = gs.prototype;
Wd.append = function(t, n) {
  this._pairs.push([t, n]);
};
Wd.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, ic);
  } : ic;
  return this._pairs.map(function(a) {
    return n(a[0]) + "=" + n(a[1]);
  }, "").join("&");
};
function px(e2) {
  return encodeURIComponent(e2).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function qd(e2, t, n) {
  if (!t) return e2;
  const r = n && n.encode || px;
  U.isFunction(n) && (n = { serialize: n });
  const a = n && n.serialize;
  let o;
  if (a ? o = a(t, n) : o = U.isURLSearchParams(t) ? t.toString() : new gs(t, n).toString(r), o) {
    const i = e2.indexOf("#");
    i !== -1 && (e2 = e2.slice(0, i)), e2 += (e2.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e2;
}
class sc {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return this.handlers.push({ fulfilled: t, rejected: n, synchronous: r ? r.synchronous : false, runWhen: r ? r.runWhen : null }), this.handlers.length - 1;
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    U.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const Ud = { silentJSONParsing: true, forcedJSONParsing: true, clarifyTimeoutError: false }, bx = typeof URLSearchParams < "u" ? URLSearchParams : gs, yx = typeof FormData < "u" ? FormData : null, wx = typeof Blob < "u" ? Blob : null, Cx = { isBrowser: true, classes: { URLSearchParams: bx, FormData: yx, Blob: wx }, protocols: ["http", "https", "file", "blob", "url", "data"] }, hs = typeof window < "u" && typeof document < "u", Fi = typeof navigator == "object" && navigator || void 0, Sx = hs && (!Fi || ["ReactNative", "NativeScript", "NS"].indexOf(Fi.product) < 0), xx = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function", $x = hs && window.location.href || "http://localhost", Ex = Object.freeze(Object.defineProperty({ __proto__: null, hasBrowserEnv: hs, hasStandardBrowserEnv: Sx, hasStandardBrowserWebWorkerEnv: xx, navigator: Fi, origin: $x }, Symbol.toStringTag, { value: "Module" })), Dt = { ...Ex, ...Cx };
function Rx(e2, t) {
  return mo(e2, new Dt.classes.URLSearchParams(), Object.assign({ visitor: function(n, r, a, o) {
    return Dt.isNode && U.isBuffer(n) ? (this.append(r, n.toString("base64")), false) : o.defaultVisitor.apply(this, arguments);
  } }, t));
}
function Ox(e2) {
  return U.matchAll(/\w+|\[(\w*)]/g, e2).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Ix(e2) {
  const t = {}, n = Object.keys(e2);
  let r;
  const a = n.length;
  let o;
  for (r = 0; r < a; r++) o = n[r], t[o] = e2[o];
  return t;
}
function kd(e2) {
  function t(n, r, a, o) {
    let i = n[o++];
    if (i === "__proto__") return true;
    const s = Number.isFinite(+i), c = o >= n.length;
    return i = !i && U.isArray(a) ? a.length : i, c ? (U.hasOwnProp(a, i) ? a[i] = [a[i], r] : a[i] = r, !s) : ((!a[i] || !U.isObject(a[i])) && (a[i] = []), t(n, r, a[i], o) && U.isArray(a[i]) && (a[i] = Ix(a[i])), !s);
  }
  if (U.isFormData(e2) && U.isFunction(e2.entries)) {
    const n = {};
    return U.forEachEntry(e2, (r, a) => {
      t(Ox(r), a, n, 0);
    }), n;
  }
  return null;
}
function Ax(e2, t, n) {
  if (U.isString(e2)) try {
    return (t || JSON.parse)(e2), U.trim(e2);
  } catch (r) {
    if (r.name !== "SyntaxError") throw r;
  }
  return (n || JSON.stringify)(e2);
}
const ua = { transitional: Ud, adapter: ["xhr", "http", "fetch"], transformRequest: [function(t, n) {
  const r = n.getContentType() || "", a = r.indexOf("application/json") > -1, o = U.isObject(t);
  if (o && U.isHTMLForm(t) && (t = new FormData(t)), U.isFormData(t)) return a ? JSON.stringify(kd(t)) : t;
  if (U.isArrayBuffer(t) || U.isBuffer(t) || U.isStream(t) || U.isFile(t) || U.isBlob(t) || U.isReadableStream(t)) return t;
  if (U.isArrayBufferView(t)) return t.buffer;
  if (U.isURLSearchParams(t)) return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", false), t.toString();
  let s;
  if (o) {
    if (r.indexOf("application/x-www-form-urlencoded") > -1) return Rx(t, this.formSerializer).toString();
    if ((s = U.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
      const c = this.env && this.env.FormData;
      return mo(s ? { "files[]": t } : t, c && new c(), this.formSerializer);
    }
  }
  return o || a ? (n.setContentType("application/json", false), Ax(t)) : t;
}], transformResponse: [function(t) {
  const n = this.transitional || ua.transitional, r = n && n.forcedJSONParsing, a = this.responseType === "json";
  if (U.isResponse(t) || U.isReadableStream(t)) return t;
  if (t && U.isString(t) && (r && !this.responseType || a)) {
    const i = !(n && n.silentJSONParsing) && a;
    try {
      return JSON.parse(t);
    } catch (s) {
      if (i) throw s.name === "SyntaxError" ? Ge.from(s, Ge.ERR_BAD_RESPONSE, this, null, this.response) : s;
    }
  }
  return t;
}], timeout: 0, xsrfCookieName: "XSRF-TOKEN", xsrfHeaderName: "X-XSRF-TOKEN", maxContentLength: -1, maxBodyLength: -1, env: { FormData: Dt.classes.FormData, Blob: Dt.classes.Blob }, validateStatus: function(t) {
  return t >= 200 && t < 300;
}, headers: { common: { Accept: "application/json, text/plain, */*", "Content-Type": void 0 } } };
U.forEach(["delete", "get", "head", "post", "put", "patch"], (e2) => {
  ua.headers[e2] = {};
});
const Px = U.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]), Nx = (e2) => {
  const t = {};
  let n, r, a;
  return e2 && e2.split(`
`).forEach(function(i) {
    a = i.indexOf(":"), n = i.substring(0, a).trim().toLowerCase(), r = i.substring(a + 1).trim(), !(!n || t[n] && Px[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, lc = Symbol("internals");
function _r(e2) {
  return e2 && String(e2).trim().toLowerCase();
}
function Ra(e2) {
  return e2 === false || e2 == null ? e2 : U.isArray(e2) ? e2.map(Ra) : String(e2);
}
function Mx(e2) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e2); ) t[r[1]] = r[2];
  return t;
}
const Fx = (e2) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e2.trim());
function Yo(e2, t, n, r, a) {
  if (U.isFunction(r)) return r.call(this, t, n);
  if (a && (t = n), !!U.isString(t)) {
    if (U.isString(r)) return t.indexOf(r) !== -1;
    if (U.isRegExp(r)) return r.test(t);
  }
}
function Tx(e2) {
  return e2.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function _x(e2, t) {
  const n = U.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e2, r + n, { value: function(a, o, i) {
      return this[r].call(this, t, a, o, i);
    }, configurable: true });
  });
}
let Gt = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const a = this;
    function o(s, c, u) {
      const d = _r(c);
      if (!d) throw new Error("header name must be a non-empty string");
      const f = U.findKey(a, d);
      (!f || a[f] === void 0 || u === true || u === void 0 && a[f] !== false) && (a[f || c] = Ra(s));
    }
    const i = (s, c) => U.forEach(s, (u, d) => o(u, d, c));
    if (U.isPlainObject(t) || t instanceof this.constructor) i(t, n);
    else if (U.isString(t) && (t = t.trim()) && !Fx(t)) i(Nx(t), n);
    else if (U.isObject(t) && U.isIterable(t)) {
      let s = {}, c, u;
      for (const d of t) {
        if (!U.isArray(d)) throw TypeError("Object iterator must return a key-value pair");
        s[u = d[0]] = (c = s[u]) ? U.isArray(c) ? [...c, d[1]] : [c, d[1]] : d[1];
      }
      i(s, n);
    } else t != null && o(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = _r(t), t) {
      const r = U.findKey(this, t);
      if (r) {
        const a = this[r];
        if (!n) return a;
        if (n === true) return Mx(a);
        if (U.isFunction(n)) return n.call(this, a, r);
        if (U.isRegExp(n)) return n.exec(a);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = _r(t), t) {
      const r = U.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Yo(this, this[r], r, n)));
    }
    return false;
  }
  delete(t, n) {
    const r = this;
    let a = false;
    function o(i) {
      if (i = _r(i), i) {
        const s = U.findKey(r, i);
        s && (!n || Yo(r, r[s], s, n)) && (delete r[s], a = true);
      }
    }
    return U.isArray(t) ? t.forEach(o) : o(t), a;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, a = false;
    for (; r--; ) {
      const o = n[r];
      (!t || Yo(this, this[o], o, t, true)) && (delete this[o], a = true);
    }
    return a;
  }
  normalize(t) {
    const n = this, r = {};
    return U.forEach(this, (a, o) => {
      const i = U.findKey(r, o);
      if (i) {
        n[i] = Ra(a), delete n[o];
        return;
      }
      const s = t ? Tx(o) : String(o).trim();
      s !== o && delete n[o], n[s] = Ra(a), r[s] = true;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return U.forEach(this, (r, a) => {
      r != null && r !== false && (n[a] = t && U.isArray(r) ? r.join(", ") : r);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((a) => r.set(a)), r;
  }
  static accessor(t) {
    const r = (this[lc] = this[lc] = { accessors: {} }).accessors, a = this.prototype;
    function o(i) {
      const s = _r(i);
      r[s] || (_x(a, i), r[s] = true);
    }
    return U.isArray(t) ? t.forEach(o) : o(t), this;
  }
};
Gt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
U.reduceDescriptors(Gt.prototype, ({ value: e2 }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return { get: () => e2, set(r) {
    this[n] = r;
  } };
});
U.freezeMethods(Gt);
function Qo(e2, t) {
  const n = this || ua, r = t || n, a = Gt.from(r.headers);
  let o = r.data;
  return U.forEach(e2, function(s) {
    o = s.call(n, o, a.normalize(), t ? t.status : void 0);
  }), a.normalize(), o;
}
function Gd(e2) {
  return !!(e2 && e2.__CANCEL__);
}
function Pr(e2, t, n) {
  Ge.call(this, e2 ?? "canceled", Ge.ERR_CANCELED, t, n), this.name = "CanceledError";
}
U.inherits(Pr, Ge, { __CANCEL__: true });
function Kd(e2, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e2(n) : t(new Ge("Request failed with status code " + n.status, [Ge.ERR_BAD_REQUEST, Ge.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4], n.config, n.request, n));
}
function jx(e2) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e2);
  return t && t[1] || "";
}
function Dx(e2, t) {
  e2 = e2 || 10;
  const n = new Array(e2), r = new Array(e2);
  let a = 0, o = 0, i;
  return t = t !== void 0 ? t : 1e3, function(c) {
    const u = Date.now(), d = r[o];
    i || (i = u), n[a] = c, r[a] = u;
    let f = o, h = 0;
    for (; f !== a; ) h += n[f++], f = f % e2;
    if (a = (a + 1) % e2, a === o && (o = (o + 1) % e2), u - i < t) return;
    const p = d && u - d;
    return p ? Math.round(h * 1e3 / p) : void 0;
  };
}
function Lx(e2, t) {
  let n = 0, r = 1e3 / t, a, o;
  const i = (u, d = Date.now()) => {
    n = d, a = null, o && (clearTimeout(o), o = null), e2.apply(null, u);
  };
  return [(...u) => {
    const d = Date.now(), f = d - n;
    f >= r ? i(u, d) : (a = u, o || (o = setTimeout(() => {
      o = null, i(a);
    }, r - f)));
  }, () => a && i(a)];
}
const Da = (e2, t, n = 3) => {
  let r = 0;
  const a = Dx(50, 250);
  return Lx((o) => {
    const i = o.loaded, s = o.lengthComputable ? o.total : void 0, c = i - r, u = a(c), d = i <= s;
    r = i;
    const f = { loaded: i, total: s, progress: s ? i / s : void 0, bytes: c, rate: u || void 0, estimated: u && s && d ? (s - i) / u : void 0, event: o, lengthComputable: s != null, [t ? "download" : "upload"]: true };
    e2(f);
  }, n);
}, cc = (e2, t) => {
  const n = e2 != null;
  return [(r) => t[0]({ lengthComputable: n, total: e2, loaded: r }), t[1]];
}, uc = (e2) => (...t) => U.asap(() => e2(...t)), Bx = Dt.hasStandardBrowserEnv ? /* @__PURE__ */ ((e2, t) => (n) => (n = new URL(n, Dt.origin), e2.protocol === n.protocol && e2.host === n.host && (t || e2.port === n.port)))(new URL(Dt.origin), Dt.navigator && /(msie|trident)/i.test(Dt.navigator.userAgent)) : () => true, zx = Dt.hasStandardBrowserEnv ? { write(e2, t, n, r, a, o) {
  const i = [e2 + "=" + encodeURIComponent(t)];
  U.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()), U.isString(r) && i.push("path=" + r), U.isString(a) && i.push("domain=" + a), o === true && i.push("secure"), document.cookie = i.join("; ");
}, read(e2) {
  const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e2 + ")=([^;]*)"));
  return t ? decodeURIComponent(t[3]) : null;
}, remove(e2) {
  this.write(e2, "", Date.now() - 864e5);
} } : { write() {
}, read() {
  return null;
}, remove() {
} };
function Hx(e2) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e2);
}
function Vx(e2, t) {
  return t ? e2.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e2;
}
function Xd(e2, t, n) {
  let r = !Hx(t);
  return e2 && (r || n == false) ? Vx(e2, t) : t;
}
const dc = (e2) => e2 instanceof Gt ? { ...e2 } : e2;
function ar(e2, t) {
  t = t || {};
  const n = {};
  function r(u, d, f, h) {
    return U.isPlainObject(u) && U.isPlainObject(d) ? U.merge.call({ caseless: h }, u, d) : U.isPlainObject(d) ? U.merge({}, d) : U.isArray(d) ? d.slice() : d;
  }
  function a(u, d, f, h) {
    if (U.isUndefined(d)) {
      if (!U.isUndefined(u)) return r(void 0, u, f, h);
    } else return r(u, d, f, h);
  }
  function o(u, d) {
    if (!U.isUndefined(d)) return r(void 0, d);
  }
  function i(u, d) {
    if (U.isUndefined(d)) {
      if (!U.isUndefined(u)) return r(void 0, u);
    } else return r(void 0, d);
  }
  function s(u, d, f) {
    if (f in t) return r(u, d);
    if (f in e2) return r(void 0, u);
  }
  const c = { url: o, method: o, data: o, baseURL: i, transformRequest: i, transformResponse: i, paramsSerializer: i, timeout: i, timeoutMessage: i, withCredentials: i, withXSRFToken: i, adapter: i, responseType: i, xsrfCookieName: i, xsrfHeaderName: i, onUploadProgress: i, onDownloadProgress: i, decompress: i, maxContentLength: i, maxBodyLength: i, beforeRedirect: i, transport: i, httpAgent: i, httpsAgent: i, cancelToken: i, socketPath: i, responseEncoding: i, validateStatus: s, headers: (u, d, f) => a(dc(u), dc(d), f, true) };
  return U.forEach(Object.keys(Object.assign({}, e2, t)), function(d) {
    const f = c[d] || a, h = f(e2[d], t[d], d);
    U.isUndefined(h) && f !== s || (n[d] = h);
  }), n;
}
const Yd = (e2) => {
  const t = ar({}, e2);
  let { data: n, withXSRFToken: r, xsrfHeaderName: a, xsrfCookieName: o, headers: i, auth: s } = t;
  t.headers = i = Gt.from(i), t.url = qd(Xd(t.baseURL, t.url, t.allowAbsoluteUrls), e2.params, e2.paramsSerializer), s && i.set("Authorization", "Basic " + btoa((s.username || "") + ":" + (s.password ? unescape(encodeURIComponent(s.password)) : "")));
  let c;
  if (U.isFormData(n)) {
    if (Dt.hasStandardBrowserEnv || Dt.hasStandardBrowserWebWorkerEnv) i.setContentType(void 0);
    else if ((c = i.getContentType()) !== false) {
      const [u, ...d] = c ? c.split(";").map((f) => f.trim()).filter(Boolean) : [];
      i.setContentType([u || "multipart/form-data", ...d].join("; "));
    }
  }
  if (Dt.hasStandardBrowserEnv && (r && U.isFunction(r) && (r = r(t)), r || r !== false && Bx(t.url))) {
    const u = a && o && zx.read(o);
    u && i.set(a, u);
  }
  return t;
}, Wx = typeof XMLHttpRequest < "u", qx = Wx && function(e2) {
  return new Promise(function(n, r) {
    const a = Yd(e2);
    let o = a.data;
    const i = Gt.from(a.headers).normalize();
    let { responseType: s, onUploadProgress: c, onDownloadProgress: u } = a, d, f, h, p, g;
    function v() {
      p && p(), g && g(), a.cancelToken && a.cancelToken.unsubscribe(d), a.signal && a.signal.removeEventListener("abort", d);
    }
    let m = new XMLHttpRequest();
    m.open(a.method.toUpperCase(), a.url, true), m.timeout = a.timeout;
    function w() {
      if (!m) return;
      const C = Gt.from("getAllResponseHeaders" in m && m.getAllResponseHeaders()), I = { data: !s || s === "text" || s === "json" ? m.responseText : m.response, status: m.status, statusText: m.statusText, headers: C, config: e2, request: m };
      Kd(function(E) {
        n(E), v();
      }, function(E) {
        r(E), v();
      }, I), m = null;
    }
    "onloadend" in m ? m.onloadend = w : m.onreadystatechange = function() {
      !m || m.readyState !== 4 || m.status === 0 && !(m.responseURL && m.responseURL.indexOf("file:") === 0) || setTimeout(w);
    }, m.onabort = function() {
      m && (r(new Ge("Request aborted", Ge.ECONNABORTED, e2, m)), m = null);
    }, m.onerror = function() {
      r(new Ge("Network Error", Ge.ERR_NETWORK, e2, m)), m = null;
    }, m.ontimeout = function() {
      let x = a.timeout ? "timeout of " + a.timeout + "ms exceeded" : "timeout exceeded";
      const I = a.transitional || Ud;
      a.timeoutErrorMessage && (x = a.timeoutErrorMessage), r(new Ge(x, I.clarifyTimeoutError ? Ge.ETIMEDOUT : Ge.ECONNABORTED, e2, m)), m = null;
    }, o === void 0 && i.setContentType(null), "setRequestHeader" in m && U.forEach(i.toJSON(), function(x, I) {
      m.setRequestHeader(I, x);
    }), U.isUndefined(a.withCredentials) || (m.withCredentials = !!a.withCredentials), s && s !== "json" && (m.responseType = a.responseType), u && ([h, g] = Da(u, true), m.addEventListener("progress", h)), c && m.upload && ([f, p] = Da(c), m.upload.addEventListener("progress", f), m.upload.addEventListener("loadend", p)), (a.cancelToken || a.signal) && (d = (C) => {
      m && (r(!C || C.type ? new Pr(null, e2, m) : C), m.abort(), m = null);
    }, a.cancelToken && a.cancelToken.subscribe(d), a.signal && (a.signal.aborted ? d() : a.signal.addEventListener("abort", d)));
    const b = jx(a.url);
    if (b && Dt.protocols.indexOf(b) === -1) {
      r(new Ge("Unsupported protocol " + b + ":", Ge.ERR_BAD_REQUEST, e2));
      return;
    }
    m.send(o || null);
  });
}, Ux = (e2, t) => {
  const { length: n } = e2 = e2 ? e2.filter(Boolean) : [];
  if (t || n) {
    let r = new AbortController(), a;
    const o = function(u) {
      if (!a) {
        a = true, s();
        const d = u instanceof Error ? u : this.reason;
        r.abort(d instanceof Ge ? d : new Pr(d instanceof Error ? d.message : d));
      }
    };
    let i = t && setTimeout(() => {
      i = null, o(new Ge(`timeout ${t} of ms exceeded`, Ge.ETIMEDOUT));
    }, t);
    const s = () => {
      e2 && (i && clearTimeout(i), i = null, e2.forEach((u) => {
        u.unsubscribe ? u.unsubscribe(o) : u.removeEventListener("abort", o);
      }), e2 = null);
    };
    e2.forEach((u) => u.addEventListener("abort", o));
    const { signal: c } = r;
    return c.unsubscribe = () => U.asap(s), c;
  }
}, kx = function* (e2, t) {
  let n = e2.byteLength;
  if (n < t) {
    yield e2;
    return;
  }
  let r = 0, a;
  for (; r < n; ) a = r + t, yield e2.slice(r, a), r = a;
}, Gx = async function* (e2, t) {
  for await (const n of Kx(e2)) yield* kx(n, t);
}, Kx = async function* (e2) {
  if (e2[Symbol.asyncIterator]) {
    yield* e2;
    return;
  }
  const t = e2.getReader();
  try {
    for (; ; ) {
      const { done: n, value: r } = await t.read();
      if (n) break;
      yield r;
    }
  } finally {
    await t.cancel();
  }
}, fc = (e2, t, n, r) => {
  const a = Gx(e2, t);
  let o = 0, i, s = (c) => {
    i || (i = true, r && r(c));
  };
  return new ReadableStream({ async pull(c) {
    try {
      const { done: u, value: d } = await a.next();
      if (u) {
        s(), c.close();
        return;
      }
      let f = d.byteLength;
      if (n) {
        let h = o += f;
        n(h);
      }
      c.enqueue(new Uint8Array(d));
    } catch (u) {
      throw s(u), u;
    }
  }, cancel(c) {
    return s(c), a.return();
  } }, { highWaterMark: 2 });
}, go = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Qd = go && typeof ReadableStream == "function", Xx = go && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e2) => (t) => e2.encode(t))(new TextEncoder()) : async (e2) => new Uint8Array(await new Response(e2).arrayBuffer())), Jd = (e2, ...t) => {
  try {
    return !!e2(...t);
  } catch {
    return false;
  }
}, Yx = Qd && Jd(() => {
  let e2 = false;
  const t = new Request(Dt.origin, { body: new ReadableStream(), method: "POST", get duplex() {
    return e2 = true, "half";
  } }).headers.has("Content-Type");
  return e2 && !t;
}), mc = 64 * 1024, Ti = Qd && Jd(() => U.isReadableStream(new Response("").body)), La = { stream: Ti && ((e2) => e2.body) };
go && ((e2) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !La[t] && (La[t] = U.isFunction(e2[t]) ? (n) => n[t]() : (n, r) => {
      throw new Ge(`Response type '${t}' is not supported`, Ge.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const Qx = async (e2) => {
  if (e2 == null) return 0;
  if (U.isBlob(e2)) return e2.size;
  if (U.isSpecCompliantForm(e2)) return (await new Request(Dt.origin, { method: "POST", body: e2 }).arrayBuffer()).byteLength;
  if (U.isArrayBufferView(e2) || U.isArrayBuffer(e2)) return e2.byteLength;
  if (U.isURLSearchParams(e2) && (e2 = e2 + ""), U.isString(e2)) return (await Xx(e2)).byteLength;
}, Jx = async (e2, t) => {
  const n = U.toFiniteNumber(e2.getContentLength());
  return n ?? Qx(t);
}, Zx = go && (async (e2) => {
  let { url: t, method: n, data: r, signal: a, cancelToken: o, timeout: i, onDownloadProgress: s, onUploadProgress: c, responseType: u, headers: d, withCredentials: f = "same-origin", fetchOptions: h } = Yd(e2);
  u = u ? (u + "").toLowerCase() : "text";
  let p = Ux([a, o && o.toAbortSignal()], i), g;
  const v = p && p.unsubscribe && (() => {
    p.unsubscribe();
  });
  let m;
  try {
    if (c && Yx && n !== "get" && n !== "head" && (m = await Jx(d, r)) !== 0) {
      let I = new Request(t, { method: "POST", body: r, duplex: "half" }), y;
      if (U.isFormData(r) && (y = I.headers.get("content-type")) && d.setContentType(y), I.body) {
        const [E, O] = cc(m, Da(uc(c)));
        r = fc(I.body, mc, E, O);
      }
    }
    U.isString(f) || (f = f ? "include" : "omit");
    const w = "credentials" in Request.prototype;
    g = new Request(t, { ...h, signal: p, method: n.toUpperCase(), headers: d.normalize().toJSON(), body: r, duplex: "half", credentials: w ? f : void 0 });
    let b = await fetch(g);
    const C = Ti && (u === "stream" || u === "response");
    if (Ti && (s || C && v)) {
      const I = {};
      ["status", "statusText", "headers"].forEach((R) => {
        I[R] = b[R];
      });
      const y = U.toFiniteNumber(b.headers.get("content-length")), [E, O] = s && cc(y, Da(uc(s), true)) || [];
      b = new Response(fc(b.body, mc, E, () => {
        O && O(), v && v();
      }), I);
    }
    u = u || "text";
    let x = await La[U.findKey(La, u) || "text"](b, e2);
    return !C && v && v(), await new Promise((I, y) => {
      Kd(I, y, { data: x, headers: Gt.from(b.headers), status: b.status, statusText: b.statusText, config: e2, request: g });
    });
  } catch (w) {
    throw v && v(), w && w.name === "TypeError" && /Load failed|fetch/i.test(w.message) ? Object.assign(new Ge("Network Error", Ge.ERR_NETWORK, e2, g), { cause: w.cause || w }) : Ge.from(w, w && w.code, e2, g);
  }
}), _i = { http: gx, xhr: qx, fetch: Zx };
U.forEach(_i, (e2, t) => {
  if (e2) {
    try {
      Object.defineProperty(e2, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e2, "adapterName", { value: t });
  }
});
const gc = (e2) => `- ${e2}`, e$ = (e2) => U.isFunction(e2) || e2 === null || e2 === false, Zd = { getAdapter: (e2) => {
  e2 = U.isArray(e2) ? e2 : [e2];
  const { length: t } = e2;
  let n, r;
  const a = {};
  for (let o = 0; o < t; o++) {
    n = e2[o];
    let i;
    if (r = n, !e$(n) && (r = _i[(i = String(n)).toLowerCase()], r === void 0)) throw new Ge(`Unknown adapter '${i}'`);
    if (r) break;
    a[i || "#" + o] = r;
  }
  if (!r) {
    const o = Object.entries(a).map(([s, c]) => `adapter ${s} ` + (c === false ? "is not supported by the environment" : "is not available in the build"));
    let i = t ? o.length > 1 ? `since :
` + o.map(gc).join(`
`) : " " + gc(o[0]) : "as no adapter specified";
    throw new Ge("There is no suitable adapter to dispatch the request " + i, "ERR_NOT_SUPPORT");
  }
  return r;
}, adapters: _i };
function Jo(e2) {
  if (e2.cancelToken && e2.cancelToken.throwIfRequested(), e2.signal && e2.signal.aborted) throw new Pr(null, e2);
}
function hc(e2) {
  return Jo(e2), e2.headers = Gt.from(e2.headers), e2.data = Qo.call(e2, e2.transformRequest), ["post", "put", "patch"].indexOf(e2.method) !== -1 && e2.headers.setContentType("application/x-www-form-urlencoded", false), Zd.getAdapter(e2.adapter || ua.adapter)(e2).then(function(r) {
    return Jo(e2), r.data = Qo.call(e2, e2.transformResponse, r), r.headers = Gt.from(r.headers), r;
  }, function(r) {
    return Gd(r) || (Jo(e2), r && r.response && (r.response.data = Qo.call(e2, e2.transformResponse, r.response), r.response.headers = Gt.from(r.response.headers))), Promise.reject(r);
  });
}
const ef = "1.9.0", ho = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e2, t) => {
  ho[e2] = function(r) {
    return typeof r === e2 || "a" + (t < 1 ? "n " : " ") + e2;
  };
});
const vc = {};
ho.transitional = function(t, n, r) {
  function a(o, i) {
    return "[Axios v" + ef + "] Transitional option '" + o + "'" + i + (r ? ". " + r : "");
  }
  return (o, i, s) => {
    if (t === false) throw new Ge(a(i, " has been removed" + (n ? " in " + n : "")), Ge.ERR_DEPRECATED);
    return n && !vc[i] && (vc[i] = true, console.warn(a(i, " has been deprecated since v" + n + " and will be removed in the near future"))), t ? t(o, i, s) : true;
  };
};
ho.spelling = function(t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), true);
};
function t$(e2, t, n) {
  if (typeof e2 != "object") throw new Ge("options must be an object", Ge.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e2);
  let a = r.length;
  for (; a-- > 0; ) {
    const o = r[a], i = t[o];
    if (i) {
      const s = e2[o], c = s === void 0 || i(s, o, e2);
      if (c !== true) throw new Ge("option " + o + " must be " + c, Ge.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== true) throw new Ge("Unknown option " + o, Ge.ERR_BAD_OPTION);
  }
}
const Oa = { assertOptions: t$, validators: ho }, On = Oa.validators;
let er = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = { request: new sc(), response: new sc() };
  }
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let a = {};
        Error.captureStackTrace ? Error.captureStackTrace(a) : a = new Error();
        const o = a.stack ? a.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack ? o && !String(r.stack).endsWith(o.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + o) : r.stack = o;
        } catch {
        }
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = ar(this.defaults, n);
    const { transitional: r, paramsSerializer: a, headers: o } = n;
    r !== void 0 && Oa.assertOptions(r, { silentJSONParsing: On.transitional(On.boolean), forcedJSONParsing: On.transitional(On.boolean), clarifyTimeoutError: On.transitional(On.boolean) }, false), a != null && (U.isFunction(a) ? n.paramsSerializer = { serialize: a } : Oa.assertOptions(a, { encode: On.function, serialize: On.function }, true)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = true), Oa.assertOptions(n, { baseUrl: On.spelling("baseURL"), withXsrfToken: On.spelling("withXSRFToken") }, true), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i = o && U.merge(o.common, o[n.method]);
    o && U.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (g) => {
      delete o[g];
    }), n.headers = Gt.concat(i, o);
    const s = [];
    let c = true;
    this.interceptors.request.forEach(function(v) {
      typeof v.runWhen == "function" && v.runWhen(n) === false || (c = c && v.synchronous, s.unshift(v.fulfilled, v.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function(v) {
      u.push(v.fulfilled, v.rejected);
    });
    let d, f = 0, h;
    if (!c) {
      const g = [hc.bind(this), void 0];
      for (g.unshift.apply(g, s), g.push.apply(g, u), h = g.length, d = Promise.resolve(n); f < h; ) d = d.then(g[f++], g[f++]);
      return d;
    }
    h = s.length;
    let p = n;
    for (f = 0; f < h; ) {
      const g = s[f++], v = s[f++];
      try {
        p = g(p);
      } catch (m) {
        v.call(this, m);
        break;
      }
    }
    try {
      d = hc.call(this, p);
    } catch (g) {
      return Promise.reject(g);
    }
    for (f = 0, h = u.length; f < h; ) d = d.then(u[f++], u[f++]);
    return d;
  }
  getUri(t) {
    t = ar(this.defaults, t);
    const n = Xd(t.baseURL, t.url, t.allowAbsoluteUrls);
    return qd(n, t.params, t.paramsSerializer);
  }
};
U.forEach(["delete", "get", "head", "options"], function(t) {
  er.prototype[t] = function(n, r) {
    return this.request(ar(r || {}, { method: t, url: n, data: (r || {}).data }));
  };
});
U.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(o, i, s) {
      return this.request(ar(s || {}, { method: t, headers: r ? { "Content-Type": "multipart/form-data" } : {}, url: o, data: i }));
    };
  }
  er.prototype[t] = n(), er.prototype[t + "Form"] = n(true);
});
let n$ = class tf {
  constructor(t) {
    if (typeof t != "function") throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(o) {
      n = o;
    });
    const r = this;
    this.promise.then((a) => {
      if (!r._listeners) return;
      let o = r._listeners.length;
      for (; o-- > 0; ) r._listeners[o](a);
      r._listeners = null;
    }), this.promise.then = (a) => {
      let o;
      const i = new Promise((s) => {
        r.subscribe(s), o = s;
      }).then(a);
      return i.cancel = function() {
        r.unsubscribe(o);
      }, i;
    }, t(function(o, i, s) {
      r.reason || (r.reason = new Pr(o, i, s), n(r.reason));
    });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const t = new AbortController(), n = (r) => {
      t.abort(r);
    };
    return this.subscribe(n), t.signal.unsubscribe = () => this.unsubscribe(n), t.signal;
  }
  static source() {
    let t;
    return { token: new tf(function(a) {
      t = a;
    }), cancel: t };
  }
};
function r$(e2) {
  return function(n) {
    return e2.apply(null, n);
  };
}
function a$(e2) {
  return U.isObject(e2) && e2.isAxiosError === true;
}
const ji = { Continue: 100, SwitchingProtocols: 101, Processing: 102, EarlyHints: 103, Ok: 200, Created: 201, Accepted: 202, NonAuthoritativeInformation: 203, NoContent: 204, ResetContent: 205, PartialContent: 206, MultiStatus: 207, AlreadyReported: 208, ImUsed: 226, MultipleChoices: 300, MovedPermanently: 301, Found: 302, SeeOther: 303, NotModified: 304, UseProxy: 305, Unused: 306, TemporaryRedirect: 307, PermanentRedirect: 308, BadRequest: 400, Unauthorized: 401, PaymentRequired: 402, Forbidden: 403, NotFound: 404, MethodNotAllowed: 405, NotAcceptable: 406, ProxyAuthenticationRequired: 407, RequestTimeout: 408, Conflict: 409, Gone: 410, LengthRequired: 411, PreconditionFailed: 412, PayloadTooLarge: 413, UriTooLong: 414, UnsupportedMediaType: 415, RangeNotSatisfiable: 416, ExpectationFailed: 417, ImATeapot: 418, MisdirectedRequest: 421, UnprocessableEntity: 422, Locked: 423, FailedDependency: 424, TooEarly: 425, UpgradeRequired: 426, PreconditionRequired: 428, TooManyRequests: 429, RequestHeaderFieldsTooLarge: 431, UnavailableForLegalReasons: 451, InternalServerError: 500, NotImplemented: 501, BadGateway: 502, ServiceUnavailable: 503, GatewayTimeout: 504, HttpVersionNotSupported: 505, VariantAlsoNegotiates: 506, InsufficientStorage: 507, LoopDetected: 508, NotExtended: 510, NetworkAuthenticationRequired: 511 };
Object.entries(ji).forEach(([e2, t]) => {
  ji[t] = e2;
});
function nf(e2) {
  const t = new er(e2), n = Md(er.prototype.request, t);
  return U.extend(n, er.prototype, t, { allOwnKeys: true }), U.extend(n, t, null, { allOwnKeys: true }), n.create = function(a) {
    return nf(ar(e2, a));
  }, n;
}
const xt = nf(ua);
xt.Axios = er;
xt.CanceledError = Pr;
xt.CancelToken = n$;
xt.isCancel = Gd;
xt.VERSION = ef;
xt.toFormData = mo;
xt.AxiosError = Ge;
xt.Cancel = xt.CanceledError;
xt.all = function(t) {
  return Promise.all(t);
};
xt.spread = r$;
xt.isAxiosError = a$;
xt.mergeConfig = ar;
xt.AxiosHeaders = Gt;
xt.formToJSON = (e2) => kd(U.isHTMLForm(e2) ? new FormData(e2) : e2);
xt.getAdapter = Zd.getAdapter;
xt.HttpStatusCode = ji;
xt.default = xt;
const { Axios: u1, AxiosError: d1, CanceledError: f1, isCancel: m1, CancelToken: g1, VERSION: h1, all: v1, Cancel: p1, isAxiosError: b1, spread: y1, toFormData: w1, AxiosHeaders: C1, HttpStatusCode: S1, formToJSON: x1, getAdapter: $1, mergeConfig: E1 } = xt, pc = ({ headers: e2 }) => {
  try {
    if (!e2) return {};
    if (e2 == {}) return {};
    if (!Array.isArray(e2)) return {};
    const t = {};
    for (const n of e2) n && typeof n.key == "string" && n.value !== void 0 && (t[n.key] = n.value);
    return t;
  } catch (t) {
    return console.error(t, e2), {};
  }
}, vo = async ({ baseUrl: e2, apiKey: t, customHeaders: n = [] }) => {
  try {
    const r = `${e2}/models`, a = t ? { Authorization: `Bearer ${t}`, ...pc({ headers: n }) } : { ...pc({ headers: n }) }, o = new AbortController(), i = setTimeout(() => o.abort(), 1e4), s = await fetch(r, { headers: a, signal: o.signal });
    if (clearTimeout(i), s.url == "https://generativelanguage.googleapis.com/v1beta/openai/models") {
      const u = `https://generativelanguage.googleapis.com/v1beta/models?key=${t}`;
      return (await (await fetch(u, { signal: o.signal })).json()).models.map((h) => ({ id: h.name.replace(/^models\//, ""), name: h.name.replace(/^models\//, "") }));
    }
    return s.ok ? e2 === "https://api.together.xyz/v1" ? (await s.json()).map((d) => ({ id: d.id, name: d.display_name })) : (await s.json()).data : [];
  } catch (r) {
    return r instanceof DOMException && r.name === "AbortError" ? console.error("Request timed out") : console.error(r), [];
  }
}, Un = (e2) => e2.endsWith("/") ? e2.slice(0, -1) : e2, o$ = () => "openai-xxxx-xxx-xxxx".replace(/[x]/g, () => Math.floor(Math.random() * 16).toString(16));
class da {
  constructor() {
    __publicField(this, "db");
    __publicField(this, "getAll", async () => new Promise((t, n) => {
      this.db.get(null, (r) => {
        if (chrome.runtime.lastError) n(chrome.runtime.lastError);
        else {
          const a = Object.keys(r).map((o) => r[o]);
          t(a);
        }
      });
    }));
    __publicField(this, "create", async (t) => new Promise((n, r) => {
      this.db.set({ [t.id]: t }, () => {
        chrome.runtime.lastError ? r(chrome.runtime.lastError) : n();
      });
    }));
    __publicField(this, "getById", async (t) => new Promise((n, r) => {
      this.db.get(t, (a) => {
        chrome.runtime.lastError ? r(chrome.runtime.lastError) : n(a[t]);
      });
    }));
    __publicField(this, "update", async (t) => new Promise((n, r) => {
      this.db.set({ [t.id]: t }, () => {
        chrome.runtime.lastError ? r(chrome.runtime.lastError) : n();
      });
    }));
    __publicField(this, "delete", async (t) => new Promise((n, r) => {
      this.db.remove(t, () => {
        chrome.runtime.lastError ? r(chrome.runtime.lastError) : n();
      });
    }));
    this.db = chrome.storage.local;
  }
}
const R1 = async ({ name: e2, baseUrl: t, apiKey: n, provider: r, headers: a }) => {
  const o = new da(), i = o$(), s = { id: i, name: e2, baseUrl: Un(t), apiKey: n, createdAt: Date.now(), db_type: "openai", provider: r, headers: a };
  return await o.create(s), i;
}, i$ = async () => (await new da().getAll()).filter((n) => (n == null ? void 0 : n.db_type) === "openai"), O1 = async ({ id: e2, name: t, baseUrl: n, apiKey: r, headers: a }) => {
  const o = new da(), s = { ...await o.getById(e2), id: e2, name: t, baseUrl: Un(n), apiKey: r, createdAt: Date.now(), db_type: "openai", headers: a || [] };
  return await o.update(s), s;
}, I1 = async (e2) => {
  await new da().delete(e2), await m$(e2);
}, s$ = async (e2) => await new da().getById(e2), rf = () => "model-xxxx-xxxx-xxx-xxxx".replace(/[x]/g, () => Math.floor(Math.random() * 16).toString(16)), A1 = (e2) => e2.replace(/_model-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{3,4}-[a-f0-9]{4}/, "").replace(/_lmstudio_openai-[a-f0-9]{4}-[a-f0-9]{3}-[a-f0-9]{4}/, "").replace(/_llamafile_openai-[a-f0-9]{4}-[a-f0-9]{3}-[a-f0-9]{4}/, "").replace(/_ollama2_openai-[a-f0-9]{4}-[a-f0-9]{3}-[a-f0-9]{4}/, "").replace(/_llamacpp_openai-[a-f0-9]{4}-[a-f0-9]{3}-[a-f0-9]{4}/, ""), af = (e2) => /_lmstudio_openai-[a-f0-9]{4}-[a-f0-9]{3}-[a-f0-9]{4}/.test(e2), of = (e2) => /_llamafile_openai-[a-f0-9]{4}-[a-f0-9]{3}-[a-f0-9]{4}/.test(e2), sf = (e2) => /_llamacpp_openai-[a-f0-9]{4}-[a-f0-9]{3}-[a-f0-9]{4}/.test(e2), lf = (e2) => /_ollama2_openai-[a-f0-9]{4}-[a-f0-9]{3}-[a-f0-9]{4}/.test(e2), l$ = (e2) => {
  const t = /_lmstudio_openai-[a-f0-9]{4}-[a-f0-9]{3}-[a-f0-9]{4}/, n = e2.match(t);
  if (n) {
    const r = n[0], a = n[0].replace("_lmstudio_openai-", "");
    return { model_id: r, provider_id: a };
  }
  return null;
}, c$ = (e2) => {
  const t = /_ollama2_openai-[a-f0-9]{4}-[a-f0-9]{3}-[a-f0-9]{4}/, n = e2.match(t);
  if (n) {
    const r = n[0], a = n[0].replace("_ollama2_openai-", "");
    return { model_id: r, provider_id: a };
  }
  return null;
}, u$ = (e2) => {
  const t = /_llamafile_openai-[a-f0-9]{4}-[a-f0-9]{3}-[a-f0-9]{4}/, n = e2.match(t);
  if (n) {
    const r = n[0], a = n[0].replace("_llamafile_openai-", "");
    return { model_id: r, provider_id: a };
  }
  return null;
}, d$ = (e2) => {
  const t = /_llamacpp_openai-[a-f0-9]{4}-[a-f0-9]{3}-[a-f0-9]{4}/, n = e2.match(t);
  if (n) {
    const r = n[0], a = n[0].replace("_llamacpp_openai-", "");
    return { model_id: r, provider_id: a };
  }
  return null;
}, P1 = (e2) => af(e2) || of(e2) || lf(e2) || sf(e2) ? true : /_model-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{3,4}-[a-f0-9]{4}/.test(e2);
class lr {
  constructor() {
    __publicField(this, "db");
    __publicField(this, "getAll", async () => new Promise((t, n) => {
      this.db.get(null, (r) => {
        if (chrome.runtime.lastError) n(chrome.runtime.lastError);
        else {
          const a = Object.keys(r).map((o) => r[o]);
          t(a);
        }
      });
    }));
    __publicField(this, "create", async (t) => new Promise((n, r) => {
      this.db.set({ [t.id]: t }, () => {
        chrome.runtime.lastError ? r(chrome.runtime.lastError) : n();
      });
    }));
    __publicField(this, "getById", async (t) => new Promise((n, r) => {
      this.db.get(t, (a) => {
        chrome.runtime.lastError ? r(chrome.runtime.lastError) : n(a[t]);
      });
    }));
    __publicField(this, "update", async (t) => new Promise((n, r) => {
      this.db.set({ [t.id]: t }, () => {
        chrome.runtime.lastError ? r(chrome.runtime.lastError) : n();
      });
    }));
    __publicField(this, "delete", async (t) => new Promise((n, r) => {
      this.db.remove(t, () => {
        chrome.runtime.lastError ? r(chrome.runtime.lastError) : n();
      });
    }));
    __publicField(this, "deleteAll", async () => new Promise((t, n) => {
      this.db.clear(() => {
        chrome.runtime.lastError ? n(chrome.runtime.lastError) : t();
      });
    }));
    this.db = chrome.storage.local;
  }
}
const N1 = async (e2) => {
  const t = new lr(), n = e2.map((r) => ({ ...r, lookup: `${r.model_id}_${r.provider_id}`, id: `${r.model_id}_${rf()}`, db_type: "openai_model", name: r.name.replaceAll(/accounts\/[^\/]+\/models\//g, "") }));
  for (const r of n) await g$(r.lookup) || await t.create(r);
}, M1 = async (e2, t, n, r) => {
  const a = new lr(), o = rf(), i = { id: `${e2}_${o}`, model_id: e2, name: t, provider_id: n, lookup: `${e2}_${n}`, db_type: "openai_model", model_type: r };
  return await a.create(i), i;
}, F1 = async (e2) => {
  const t = new lr();
  if (af(e2)) {
    const r = l$(e2);
    if (!r) throw new Error("Invalid LMStudio model ID");
    return { model_id: e2.replace(/_lmstudio_openai-[a-f0-9]{4}-[a-f0-9]{3}-[a-f0-9]{4}/, ""), provider_id: `openai-${r.provider_id}`, name: e2.replace(/_lmstudio_openai-[a-f0-9]{4}-[a-f0-9]{3}-[a-f0-9]{4}/, "") };
  }
  if (of(e2)) {
    const r = u$(e2);
    if (!r) throw new Error("Invalid LMStudio model ID");
    return { model_id: e2.replace(/_llamafile_openai-[a-f0-9]{4}-[a-f0-9]{3}-[a-f0-9]{4}/, ""), provider_id: `openai-${r.provider_id}`, name: e2.replace(/_llamafile_openai-[a-f0-9]{4}-[a-f0-9]{3}-[a-f0-9]{4}/, "") };
  }
  if (sf(e2)) {
    const r = d$(e2);
    if (!r) throw new Error("Invalid LMStudio model ID");
    return { model_id: e2.replace(/_llamacpp_openai-[a-f0-9]{4}-[a-f0-9]{3}-[a-f0-9]{4}/, ""), provider_id: `openai-${r.provider_id}`, name: e2.replace(/_llamacpp_openai-[a-f0-9]{4}-[a-f0-9]{3}-[a-f0-9]{4}/, "") };
  }
  if (lf(e2)) {
    const r = c$(e2);
    if (!r) throw new Error("Invalid LMStudio model ID");
    return { model_id: e2.replace(/_ollama2_openai-[a-f0-9]{4}-[a-f0-9]{3}-[a-f0-9]{4}/, ""), provider_id: `openai-${r.provider_id}`, name: e2.replace(/_ollama2_openai-[a-f0-9]{4}-[a-f0-9]{3}-[a-f0-9]{4}/, "") };
  }
  return await t.getById(e2);
}, f$ = async () => {
  const e2 = new lr(), t = await fs(), n = (await e2.getAll()).filter((a) => (a == null ? void 0 : a.db_type) === "openai_model");
  return (await Promise.all(n.map(async (a) => {
    const o = await s$(a.provider_id);
    return { ...a, provider: o };
  }))).map((a) => {
    var _a5, _b3;
    return { ...a, nickname: ((_a5 = t[a.id]) == null ? void 0 : _a5.model_name) || a.model_id, avatar: ((_b3 = t[a.id]) == null ? void 0 : _b3.model_avatar) || void 0 };
  });
}, T1 = async (e2) => {
  await new lr().delete(e2);
}, m$ = async (e2) => {
  const t = new lr(), r = (await t.getAll()).filter((a) => a.provider_id === e2);
  for (const a of r) await t.delete(a.id);
}, g$ = async (e2) => !!(await new lr().getAll()).find((a) => (a == null ? void 0 : a.lookup) === e2), h$ = async ({ baseUrl: e2, providerId: t, customHeaders: n = [] }) => (await vo({ baseUrl: e2, customHeaders: n })).map((o) => ({ name: (o == null ? void 0 : o.name) || (o == null ? void 0 : o.id), id: `${o == null ? void 0 : o.id}_lmstudio_${t}`, provider: t, lookup: `${o == null ? void 0 : o.id}_${t}`, provider_id: t })), v$ = async ({ baseUrl: e2, providerId: t, customHeaders: n = [] }) => (await vo({ baseUrl: e2, customHeaders: n })).map((o) => ({ name: (o == null ? void 0 : o.name) || (o == null ? void 0 : o.id), id: `${o == null ? void 0 : o.id}_llamacpp_${t}`, provider: t, lookup: `${o == null ? void 0 : o.id}_${t}`, provider_id: t })), p$ = async ({ baseUrl: e2, providerId: t, customHeaders: n = [] }) => (await vo({ baseUrl: e2, customHeaders: n })).map((o) => ({ name: (o == null ? void 0 : o.name) || (o == null ? void 0 : o.id), id: `${o == null ? void 0 : o.id}_ollama2_${t}`, provider: t, lookup: `${o == null ? void 0 : o.id}_${t}`, provider_id: t })), b$ = async ({ baseUrl: e2, providerId: t, customHeaders: n = [] }) => (await vo({ baseUrl: e2, customHeaders: n })).map((o) => ({ name: (o == null ? void 0 : o.name) || (o == null ? void 0 : o.id), id: `${o == null ? void 0 : o.id}_llamafile_${t}`, provider: t, lookup: `${o == null ? void 0 : o.id}_${t}`, provider_id: t })), Di = async (e2 = "all") => {
  try {
    const [t, n] = await Promise.all([f$(), i$()]), r = await fs(), a = n.filter((y) => y.provider === "lmstudio"), o = n.filter((y) => y.provider === "llamafile"), i = n.filter((y) => y.provider === "ollama2"), s = n.filter((y) => y.provider === "llamacpp"), c = a.map((y) => h$({ baseUrl: y.baseUrl, providerId: y.id, customHeaders: y.headers })), u = o.map((y) => b$({ baseUrl: y.baseUrl, providerId: y.id, customHeaders: y.headers })), d = i.map((y) => p$({ baseUrl: y.baseUrl, providerId: y.id, customHeaders: y.headers })), f = s.map((y) => v$({ baseUrl: y.baseUrl, providerId: y.id, customHeaders: y.headers })), h = await Promise.all(c), p = await Promise.all(u), g = await Promise.all(d), v = await Promise.all(f), m = h.flat(), w = p.flat(), b = g.flat(), C = v.flat();
    return [...e2 !== "all" ? t.filter((y) => y.model_type === e2) : t, ...m, ...w, ...b, ...C].map((y) => {
      var _a5;
      return { name: y.name, model: y.id, modified_at: "", provider: ((_a5 = n.find((E) => E.id === y.provider_id)) == null ? void 0 : _a5.provider) || "custom", size: 0, digest: "", details: { parent_model: "", format: "", family: "", families: [], parameter_size: "", quantization_level: "" } };
    }).map((y) => {
      var _a5, _b3;
      return { ...y, nickname: ((_a5 = r[y.model]) == null ? void 0 : _a5.model_name) || y.name, avatar: ((_b3 = r[y.model]) == null ? void 0 : _b3.model_avatar) || void 0 };
    });
  } catch (t) {
    return console.error(t), [];
  }
}, Li = async function(e2, t = "ollama") {
  if (Ca.runtime && Ca.runtime.id) {
    const { isEnableRewriteUrl: n, rewriteUrl: r, autoCORSFix: a } = await CS();
    if (!a) {
      try {
        Ca.webRequest.onBeforeSendHeaders.removeListener(() => {
        });
      } catch {
      }
      return;
    }
    {
      const o = new URL(e2), i = [`*://${o.hostname}/*`];
      Ca.webRequest.onBeforeSendHeaders.addListener((s) => {
        let c = `${o.protocol}//${o.hostname}`;
        n && r && t === "ollama" && (c = r);
        for (let u = 0; u < s.requestHeaders.length; u++) s.requestHeaders[u].name === "Origin" && (s.requestHeaders[u].value = c);
        return { requestHeaders: s.requestHeaders };
      }, { urls: i }, ["blocking", "requestHeaders"]);
    }
  }
}, y$ = new Ir(), w$ = { name: "Gemini Nano", model: "chrome::gemini-nano::page-assist", modified_at: "", provider: "chrome", size: 0, digest: "", nickname: "Gemini Nano", avatar: void 0, details: { parent_model: "", format: "", family: "", families: [], parameter_size: "", quantization_level: "" } }, C$ = async () => await y$.get("chromeAIStatus") ?? false, bc = async () => await C$() ? [w$] : [], vs = async (e2, t) => {
  const n = { ...t }, r = await xS();
  return n.headers = { ...r, ...n == null ? void 0 : n.headers }, fetch(e2, n);
}, dt = new Ir();
new Ir({ area: "local" });
const yc = "http://127.0.0.1:11434", S$ = "https://pageassist.xyz", x$ = "Given the following conversation and a follow up question, rephrase the follow up question to be a standalone question.   Chat History: {chat_history} Follow Up Input: {question} Standalone question:", $$ = "You are a helpful AI assistant. Use the following pieces of context to answer the question at the end. If you don't know the answer, just say you don't know. DO NOT try to make up an answer. If the question is not related to the context, politely respond that you are tuned to only answer questions that are related to the context.  {context}  Question: {question} Helpful answer:", E$ = `You are an AI model who is expert at searching the web and answering user's queries.

Generate a response that is informative and relevant to the user's query based on provided search results. the current date and time are {current_date_time}.

\`search-results\` block provides knowledge from the web search results. You can use this information to generate a meaningful response.

<search-results>
 {search_results}
</search-results>
`, R$ = `You will give a follow-up question.  You need to rephrase the follow-up question if needed so it is a standalone question that can be used by the AI model to search the internet.

Example:

Follow-up question: What are the symptoms of a heart attack?

Rephrased question: Symptoms of a heart attack.

Follow-up question: Where is the upcoming Olympics being held?

Rephrased question: Location of the upcoming Olympics.

Follow-up question: Taylor Swift's latest album?

Rephrased question: Name of Taylor Swift's latest album.


Previous Conversation:

{chat_history}

Follow-up question: {question}

Rephrased question:
`, ps = async () => {
  const e2 = await dt.get("ollamaURL");
  return !e2 || e2.length === 0 ? (await Li(yc), yc) : (await Li(Un(e2)), e2);
}, _1 = async () => {
  try {
    const e2 = await ps(), t = await vs(`${Un(e2)}`);
    if (!t.ok) throw new Error(t.statusText);
    return true;
  } catch (e2) {
    return console.error(e2), false;
  }
}, Bi = async ({ returnEmpty: e2 = false }) => {
  try {
    const t = await fs();
    if (!await yS()) return [];
    const r = await ps(), a = await vs(`${Un(r)}/api/tags`);
    if (!a.ok) {
      if (e2) return [];
      throw new Error(a.statusText);
    }
    return (await a.json()).models.map((i) => {
      var _a5, _b3;
      return { ...i, nickname: ((_a5 = t[i.name]) == null ? void 0 : _a5.model_name) || i.name, avatar: ((_b3 = t[i.name]) == null ? void 0 : _b3.model_avatar) || void 0 };
    });
  } catch (t) {
    return console.error(t), [];
  }
}, j1 = async () => await dt.get("selectedModel"), D1 = async ({ returnEmpty: e2 }) => {
  try {
    const t = await Bi({ returnEmpty: e2 }), n = await Di("embedding");
    return [...t.map((r) => ({ ...r, provider: "ollama" })), ...n];
  } catch (t) {
    return console.error(t), [];
  }
}, L1 = async (e2) => {
  const t = await ps(), n = await vs(`${Un(t)}/api/delete`, { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name: e2 }) });
  if (!n.ok) throw new Error(n.statusText);
  return "ok";
}, B1 = async ({ returnEmpty: e2 = false }) => {
  var _a5;
  try {
    const n = (_a5 = await Bi({ returnEmpty: e2 })) == null ? void 0 : _a5.filter((o) => {
      var _a6, _b3, _c4, _d3;
      return !((_b3 = (_a6 = o == null ? void 0 : o.details) == null ? void 0 : _a6.families) == null ? void 0 : _b3.includes("bert")) && !((_d3 = (_c4 = o == null ? void 0 : o.details) == null ? void 0 : _c4.families) == null ? void 0 : _d3.includes("nomic-bert"));
    }).map((o) => ({ ...o, provider: "ollama" })), r = await bc(), a = await Di("chat");
    return [...n, ...r, ...a];
  } catch (t) {
    console.error(t);
    const r = (await Bi({ returnEmpty: e2 })).map((i) => ({ ...i, provider: "ollama" })), a = await bc(), o = await Di("chat");
    return [...r, ...a, ...o];
  }
}, z1 = async (e2) => {
  let t = e2;
  t.startsWith("http://localhost:") && (t = t.replace("http://localhost:", "http://127.0.0.1:")), await dt.set("ollamaURL", Un(t)), await Li(Un(t));
}, H1 = async () => await dt.get("systemPromptForNonRag"), V1 = async () => {
  const e2 = await dt.get("systemPromptForRag"), t = await dt.get("questionPromptForRag");
  let n = e2, r = t;
  return (!n || n.length === 0) && (n = $$), (!r || r.length === 0) && (r = x$), { ragPrompt: n, ragQuestionPrompt: r };
}, W1 = async (e2) => {
  await dt.set("systemPromptForNonRag", e2);
}, q1 = async (e2, t) => {
  await dt.set("systemPromptForRag", e2), await dt.set("questionPromptForRag", t);
}, U1 = async () => await dt.get("systemPromptForNonRagOption"), k1 = async () => {
  const e2 = await dt.get("defaultEmbeddingModel");
  return !e2 || e2.length === 0 ? null : e2;
}, G1 = async () => {
  const e2 = await dt.get("defaultEmbeddingChunkSize");
  return !e2 || e2.length === 0 ? 1e3 : parseInt(e2);
}, K1 = async () => {
  const e2 = await dt.get("defaultSplittingStrategy");
  return !e2 || e2.length === 0 ? "RecursiveCharacterTextSplitter" : e2;
}, X1 = async () => {
  const e2 = await dt.get("defaultSplittingSeparator");
  return !e2 || e2.length === 0 ? "\\n\\n" : e2;
}, Y1 = async () => {
  const e2 = await dt.get("defaultEmbeddingChunkOverlap");
  return !e2 || e2.length === 0 ? 200 : parseInt(e2);
}, O$ = async (e2) => {
  await dt.set("defaultSplittingStrategy", e2);
}, I$ = async (e2) => {
  await dt.set("defaultSplittingSeparator", e2);
}, A$ = async (e2) => {
  await dt.set("defaultEmbeddingModel", e2);
}, P$ = async (e2) => {
  await dt.set("defaultEmbeddingChunkSize", e2.toString());
}, N$ = async (e2) => {
  await dt.set("defaultEmbeddingChunkOverlap", e2.toString());
}, Q1 = async (e2, t, n, r, a, o, i) => {
  await A$(e2), await P$(t), await N$(n), await $S(r), a && await ES(a), o && await O$(o), i && await I$(i);
}, J1 = async () => {
  const e2 = await dt.get("webSearchPrompt");
  return !e2 || e2.length === 0 ? E$ : e2;
}, M$ = async (e2) => {
  await dt.set("webSearchPrompt", e2);
}, Z1 = async () => {
  const e2 = await dt.get("webSearchFollowUpPrompt");
  return !e2 || e2.length === 0 ? R$ : e2;
}, F$ = async (e2) => {
  await dt.set("webSearchFollowUpPrompt", e2);
}, eE = async (e2, t) => {
  await M$(e2), await F$(t);
}, tE = async () => {
  const e2 = await dt.get("pageShareUrl");
  return !e2 || e2.length === 0 ? S$ : e2;
}, nE = async (e2) => {
  await dt.set("pageShareUrl", e2);
}, rE = zf((e2) => ({ sendWhenEnter: true, setSendWhenEnter: (t) => e2({ sendWhenEnter: t }), ttsEnabled: true, setTTSEnabled: (t) => e2({ ttsEnabled: t }) })), aE = ({ onClick: e2, disabled: t, className: n, text: r = "save", textOnSave: a = "saved", btnType: o = "button" }) => {
  const [i, s] = l.useState(false), { t: c } = Hf("common");
  return Es.jsxs("button", { type: o, onClick: () => {
    s(true), e2 && e2(), setTimeout(() => {
      s(false);
    }, 1e3);
  }, disabled: t, className: `inline-flex mt-4 items-center rounded-md border border-transparent bg-black px-2 py-2 text-sm font-medium leading-4 text-white shadow-sm dark:bg-white dark:text-gray-800 disabled:opacity-50 ${n}`, children: [i ? Es.jsx(IS, { className: "w-4 h-4 mr-2" }) : null, c(i ? a : r)] });
};
export {
  SS as $,
  IS as A,
  A1 as B,
  U$ as C,
  J$ as D,
  L1 as E,
  Kn as F,
  s1 as G,
  Bi as H,
  la as I,
  T1 as J,
  f$ as K,
  cm as L,
  M1 as M,
  i$ as N,
  yn as O,
  dn as P,
  hu as Q,
  wn as R,
  oa as S,
  Qu as T,
  Y$ as U,
  Z$ as V,
  t1 as W,
  a1 as X,
  e1 as Y,
  pS as Z,
  wS as _,
  Un as a,
  lb as a$,
  bS as a0,
  Ir as a1,
  xt as a2,
  vs as a3,
  nE as a4,
  tE as a5,
  it as a6,
  Wi as a7,
  ng as a8,
  Qm as a9,
  R1 as aA,
  He as aB,
  ia as aC,
  sa as aD,
  oo as aE,
  Ju as aF,
  os as aG,
  cd as aH,
  vh as aI,
  Gn as aJ,
  k$ as aK,
  qi as aL,
  jv as aM,
  Lu as aN,
  Wu as aO,
  so as aP,
  qu as aQ,
  ir as aR,
  V0 as aS,
  Kt as aT,
  Jc as aU,
  Zc as aV,
  L$ as aW,
  ki as aX,
  q$ as aY,
  gu as aZ,
  Qh as a_,
  dy as aa,
  Ft as ab,
  sr as ac,
  Vt as ad,
  nr as ae,
  au as af,
  xC as ag,
  $y as ah,
  di as ai,
  qn as aj,
  Xi as ak,
  Ua as al,
  Mn as am,
  K$ as an,
  Ey as ao,
  eE as ap,
  J1 as aq,
  Z1 as ar,
  i1 as as,
  K1 as at,
  X1 as au,
  N1 as av,
  s$ as aw,
  vo as ax,
  I1 as ay,
  O1 as az,
  Ca as b,
  Yc as b0,
  Gr as b1,
  Kc as b2,
  Qc as b3,
  V$ as b4,
  og as b5,
  B$ as b6,
  Hg as b7,
  pg as b8,
  H$ as b9,
  fs as bA,
  P1 as bB,
  xS as bC,
  F1 as bD,
  lf as bE,
  Li as bF,
  pc as bG,
  j1 as bH,
  Q$ as bI,
  U1 as bJ,
  z$ as ba,
  Sr as bb,
  My as bc,
  tr as bd,
  Py as be,
  Ku as bf,
  ku as bg,
  Tu as bh,
  na as bi,
  Ys as bj,
  lu as bk,
  iu as bl,
  su as bm,
  ou as bn,
  Xs as bo,
  jy as bp,
  db as bq,
  Jg as br,
  W$ as bs,
  Er as bt,
  ub as bu,
  G$ as bv,
  Lm as bw,
  Hy as bx,
  X$ as by,
  mg as bz,
  Nd as c,
  rE as d,
  D$ as e,
  B1 as f,
  ps as g,
  k1 as h,
  _1 as i,
  n1 as j,
  ta as k,
  aE as l,
  W1 as m,
  q1 as n,
  Fw as o,
  cS as p,
  Q1 as q,
  H1 as r,
  z1 as s,
  V1 as t,
  j$ as u,
  D1 as v,
  Y1 as w,
  G1 as x,
  o1 as y,
  r1 as z
};
