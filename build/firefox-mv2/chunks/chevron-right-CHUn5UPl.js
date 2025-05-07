import { s as L, v as z, w as W, r as i, W as N, l as S, an as B, c as b, C as U, aw as V, Y as X } from "./FontSizeProvider-C1DZf1x-.js";
import { a6 as M, b4 as Y, aR as _, b8 as K, al as q, b5 as Q, a7 as J, a9 as Z, b6 as ee, b9 as ne, a8 as te, ba as oe, b7 as se, bv as re, c as H } from "./SaveButton-B6h4W40A.js";
const ae = (n) => {
  const { componentCls: e, iconCls: s, boxShadow: t, colorText: o, colorSuccess: r, colorError: d, colorWarning: p, colorInfo: c, fontSizeLG: a, motionEaseInOutCirc: u, motionDurationSlow: l, marginXS: C, paddingXS: m, borderRadiusLG: g, zIndexPopup: v, contentPadding: h, contentBg: P } = n, $ = `${e}-notice`, x = new M("MessageMoveIn", { "0%": { padding: 0, transform: "translateY(-100%)", opacity: 0 }, "100%": { padding: m, transform: "translateY(0)", opacity: 1 } }), E = new M("MessageMoveOut", { "0%": { maxHeight: n.height, padding: m, opacity: 1 }, "100%": { maxHeight: 0, padding: 0, opacity: 0 } }), y = { padding: m, textAlign: "center", [`${e}-custom-content`]: { display: "flex", alignItems: "center" }, [`${e}-custom-content > ${s}`]: { marginInlineEnd: C, fontSize: a }, [`${$}-content`]: { display: "inline-block", padding: h, background: P, borderRadius: g, boxShadow: t, pointerEvents: "all" }, [`${e}-success > ${s}`]: { color: r }, [`${e}-error > ${s}`]: { color: d }, [`${e}-warning > ${s}`]: { color: p }, [`${e}-info > ${s},
      ${e}-loading > ${s}`]: { color: c } };
  return [{ [e]: Object.assign(Object.assign({}, W(n)), { color: o, position: "fixed", top: C, width: "100%", pointerEvents: "none", zIndex: v, [`${e}-move-up`]: { animationFillMode: "forwards" }, [`
        ${e}-move-up-appear,
        ${e}-move-up-enter
      `]: { animationName: x, animationDuration: l, animationPlayState: "paused", animationTimingFunction: u }, [`
        ${e}-move-up-appear${e}-move-up-appear-active,
        ${e}-move-up-enter${e}-move-up-enter-active
      `]: { animationPlayState: "running" }, [`${e}-move-up-leave`]: { animationName: E, animationDuration: l, animationPlayState: "paused", animationTimingFunction: u }, [`${e}-move-up-leave${e}-move-up-leave-active`]: { animationPlayState: "running" }, "&-rtl": { direction: "rtl", span: { direction: "rtl" } } }) }, { [e]: { [`${$}-wrapper`]: Object.assign({}, y) } }, { [`${e}-notice-pure-panel`]: Object.assign(Object.assign({}, y), { padding: 0, textAlign: "start" }) }];
}, ce = (n) => ({ zIndexPopup: n.zIndexPopupBase + Y + 10, contentBg: n.colorBgElevated, contentPadding: `${(n.controlHeightLG - n.fontSize * n.lineHeight) / 2}px ${n.paddingSM}px` }), D = L("Message", (n) => {
  const e = z(n, { height: 150 });
  return [ae(e)];
}, ce);
var ie = function(n, e) {
  var s = {};
  for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && e.indexOf(t) < 0 && (s[t] = n[t]);
  if (n != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, t = Object.getOwnPropertySymbols(n); o < t.length; o++) e.indexOf(t[o]) < 0 && Object.prototype.propertyIsEnumerable.call(n, t[o]) && (s[t[o]] = n[t[o]]);
  return s;
};
const le = { info: i.createElement(ee, null), success: i.createElement(Z, null), error: i.createElement(J, null), warning: i.createElement(Q, null), loading: i.createElement(q, null) }, G = (n) => {
  let { prefixCls: e, type: s, icon: t, children: o } = n;
  return i.createElement("div", { className: S(`${e}-custom-content`, `${e}-${s}`) }, t || le[s], i.createElement("span", null, o));
}, ue = (n) => {
  const { prefixCls: e, className: s, type: t, icon: o, content: r } = n, d = ie(n, ["prefixCls", "className", "type", "icon", "content"]), { getPrefixCls: p } = i.useContext(N), c = e || p("message"), a = _(c), [u, l, C] = D(c, a);
  return u(i.createElement(K, Object.assign({}, d, { prefixCls: c, className: S(s, l, `${c}-notice-pure-panel`, C, a), eventKey: "pure", duration: null, content: i.createElement(G, { prefixCls: c, type: t, icon: o }, r) })));
};
function de(n, e) {
  return { motionName: e ?? `${n}-move-up` };
}
function F(n) {
  let e;
  const s = new Promise((o) => {
    e = n(() => {
      o(true);
    });
  }), t = () => {
    e == null ? void 0 : e();
  };
  return t.then = (o, r) => s.then(o, r), t.promise = s, t;
}
var pe = function(n, e) {
  var s = {};
  for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && e.indexOf(t) < 0 && (s[t] = n[t]);
  if (n != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, t = Object.getOwnPropertySymbols(n); o < t.length; o++) e.indexOf(t[o]) < 0 && Object.prototype.propertyIsEnumerable.call(n, t[o]) && (s[t[o]] = n[t[o]]);
  return s;
};
const ge = 8, fe = 3, me = (n) => {
  let { children: e, prefixCls: s } = n;
  const t = _(s), [o, r, d] = D(s, t);
  return o(i.createElement(oe, { classNames: { list: S(r, d, t) } }, e));
}, ve = (n, e) => {
  let { prefixCls: s, key: t } = e;
  return i.createElement(me, { prefixCls: s, key: t }, n);
}, Ce = i.forwardRef((n, e) => {
  const { top: s, prefixCls: t, getContainer: o, maxCount: r, duration: d = fe, rtl: p, transitionName: c, onAllRemoved: a } = n, { getPrefixCls: u, getPopupContainer: l, message: C, direction: m } = i.useContext(N), g = t || u("message"), v = () => ({ left: "50%", transform: "translateX(-50%)", top: s ?? ge }), h = () => S({ [`${g}-rtl`]: p ?? m === "rtl" }), P = () => de(g, c), $ = i.createElement("span", { className: `${g}-close-x` }, i.createElement(te, { className: `${g}-close-icon` })), [x, E] = ne({ prefixCls: g, style: v, className: h, motion: P, closable: false, closeIcon: $, duration: d, getContainer: () => (o == null ? void 0 : o()) || (l == null ? void 0 : l()) || document.body, maxCount: r, onAllRemoved: a, renderNotifications: ve });
  return i.useImperativeHandle(e, () => Object.assign(Object.assign({}, x), { prefixCls: g, message: C })), E;
});
let A = 0;
function k(n) {
  const e = i.useRef(null);
  return B(), [i.useMemo(() => {
    const t = (c) => {
      var a;
      (a = e.current) === null || a === void 0 || a.close(c);
    }, o = (c) => {
      if (!e.current) {
        const j = () => {
        };
        return j.then = () => {
        }, j;
      }
      const { open: a, prefixCls: u, message: l } = e.current, C = `${u}-notice`, { content: m, icon: g, type: v, key: h, className: P, style: $, onClose: x } = c, E = pe(c, ["content", "icon", "type", "key", "className", "style", "onClose"]);
      let y = h;
      return y == null && (A += 1, y = `antd-message-${A}`), F((j) => (a(Object.assign(Object.assign({}, E), { key: y, content: i.createElement(G, { prefixCls: u, type: v, icon: g }, m), placement: "top", className: S(v && `${C}-${v}`, P, l == null ? void 0 : l.className), style: Object.assign(Object.assign({}, l == null ? void 0 : l.style), $), onClose: () => {
        x == null ? void 0 : x(), j();
      } })), () => {
        t(y);
      }));
    }, d = { open: o, destroy: (c) => {
      var a;
      c !== void 0 ? t(c) : (a = e.current) === null || a === void 0 || a.destroy();
    } };
    return ["info", "success", "warning", "error", "loading"].forEach((c) => {
      const a = (u, l, C) => {
        let m;
        u && typeof u == "object" && "content" in u ? m = u : m = { content: u };
        let g, v;
        typeof l == "function" ? v = l : (g = l, v = C);
        const h = Object.assign(Object.assign({ onClose: v, duration: g }, m), { type: c });
        return o(h);
      };
      d[c] = a;
    }), d;
  }, []), i.createElement(Ce, Object.assign({ key: "message-holder" }, n, { ref: e }))];
}
function ye(n) {
  return k(n);
}
let f = null, O = (n) => n(), I = [], w = {};
function T() {
  const { getContainer: n, duration: e, rtl: s, maxCount: t, top: o } = w, r = (n == null ? void 0 : n()) || document.body;
  return { getContainer: () => r, duration: e, rtl: s, maxCount: t, top: o };
}
const be = b.forwardRef((n, e) => {
  const { messageConfig: s, sync: t } = n, { getPrefixCls: o } = i.useContext(N), r = w.prefixCls || o("message"), d = i.useContext(re), [p, c] = k(Object.assign(Object.assign(Object.assign({}, s), { prefixCls: r }), d.message));
  return b.useImperativeHandle(e, () => {
    const a = Object.assign({}, p);
    return Object.keys(a).forEach((u) => {
      a[u] = function() {
        return t(), p[u].apply(p, arguments);
      };
    }), { instance: a, sync: t };
  }), c;
}), he = b.forwardRef((n, e) => {
  const [s, t] = b.useState(T), o = () => {
    t(T);
  };
  b.useEffect(o, []);
  const r = V(), d = r.getRootPrefixCls(), p = r.getIconPrefixCls(), c = r.getTheme(), a = b.createElement(be, { ref: e, sync: o, messageConfig: s });
  return b.createElement(U, { prefixCls: d, iconPrefixCls: p, theme: c }, r.holderRender ? r.holderRender(a) : a);
});
function R() {
  if (!f) {
    const n = document.createDocumentFragment(), e = { fragment: n };
    f = e, O(() => {
      se()(b.createElement(he, { ref: (t) => {
        const { instance: o, sync: r } = t || {};
        Promise.resolve().then(() => {
          !e.instance && o && (e.instance = o, e.sync = r, R());
        });
      } }), n);
    });
    return;
  }
  f.instance && (I.forEach((n) => {
    const { type: e, skipped: s } = n;
    if (!s) switch (e) {
      case "open": {
        O(() => {
          const t = f.instance.open(Object.assign(Object.assign({}, w), n.config));
          t == null ? void 0 : t.then(n.resolve), n.setCloseFn(t);
        });
        break;
      }
      case "destroy":
        O(() => {
          f == null ? void 0 : f.instance.destroy(n.key);
        });
        break;
      default:
        O(() => {
          var t;
          const o = (t = f.instance)[e].apply(t, X(n.args));
          o == null ? void 0 : o.then(n.resolve), n.setCloseFn(o);
        });
    }
  }), I = []);
}
function xe(n) {
  w = Object.assign(Object.assign({}, w), n), O(() => {
    var e;
    (e = f == null ? void 0 : f.sync) === null || e === void 0 || e.call(f);
  });
}
function Oe(n) {
  const e = F((s) => {
    let t;
    const o = { type: "open", config: n, resolve: s, setCloseFn: (r) => {
      t = r;
    } };
    return I.push(o), () => {
      t ? O(() => {
        t();
      }) : o.skipped = true;
    };
  });
  return R(), e;
}
function $e(n, e) {
  const s = F((t) => {
    let o;
    const r = { type: n, args: e, resolve: t, setCloseFn: (d) => {
      o = d;
    } };
    return I.push(r), () => {
      o ? O(() => {
        o();
      }) : r.skipped = true;
    };
  });
  return R(), s;
}
const Pe = (n) => {
  I.push({ type: "destroy", key: n }), R();
}, Ee = ["success", "info", "warning", "error", "loading"], Ie = { open: Oe, destroy: Pe, config: xe, useMessage: ye, _InternalPanelDoNotUseOrYouWillBeFired: ue }, we = Ie;
Ee.forEach((n) => {
  we[n] = function() {
    for (var e = arguments.length, s = new Array(e), t = 0; t < e; t++) s[t] = arguments[t];
    return $e(n, s);
  };
});
/**
* @license lucide-react v0.350.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Re = H("ChevronLeft", [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]]);
/**
* @license lucide-react v0.350.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const Ne = H("ChevronRight", [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]]);
export {
  Ne as C,
  Re as a,
  we as s
};
