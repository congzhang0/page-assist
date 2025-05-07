import { g as M, G, H as q, I as U, r as E, J as K, K as I, L as P, N as X } from "./FontSizeProvider-C1DZf1x-.js";
var D, L;
function Y() {
  return L || (L = 1, D = { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, link: true, meta: true, param: true, source: true, track: true, wbr: true }), D;
}
var Z = Y();
const Q = M(Z);
var _ = /\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;
function W(e) {
  var t = { type: "tag", name: "", voidElement: false, attrs: {}, children: [] }, n = e.match(/<\/?([^\s]+?)[/\s>]/);
  if (n && (t.name = n[1], (Q[n[1]] || e.charAt(e.length - 2) === "/") && (t.voidElement = true), t.name.startsWith("!--"))) {
    var i = e.indexOf("-->");
    return { type: "comment", comment: i !== -1 ? e.slice(4, i) : "" };
  }
  for (var f = new RegExp(_), r = null; (r = f.exec(e)) !== null; ) if (r[0].trim()) if (r[1]) {
    var c = r[1].trim(), l = [c, ""];
    c.indexOf("=") > -1 && (l = c.split("=")), t.attrs[l[0]] = l[1], f.lastIndex--;
  } else r[2] && (t.attrs[r[2]] = r[3].trim().substring(1, r[3].length - 1));
  return t;
}
var R = /<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g, ee = /^\s*$/, te = /* @__PURE__ */ Object.create(null);
function z(e, t) {
  switch (t.type) {
    case "text":
      return e + t.content;
    case "tag":
      return e += "<" + t.name + (t.attrs ? function(n) {
        var i = [];
        for (var f in n) i.push(f + '="' + n[f] + '"');
        return i.length ? " " + i.join(" ") : "";
      }(t.attrs) : "") + (t.voidElement ? "/>" : ">"), t.voidElement ? e : e + t.children.reduce(z, "") + "</" + t.name + ">";
    case "comment":
      return e + "<!--" + t.comment + "-->";
  }
}
var ne = { parse: function(e, t) {
  t || (t = {}), t.components || (t.components = te);
  var n, i = [], f = [], r = -1, c = false;
  if (e.indexOf("<") !== 0) {
    var l = e.indexOf("<");
    i.push({ type: "text", content: l === -1 ? e : e.substring(0, l) });
  }
  return e.replace(R, function(u, m) {
    if (c) {
      if (u !== "</" + n.name + ">") return;
      c = false;
    }
    var v, g = u.charAt(1) !== "/", A = u.startsWith("<!--"), b = m + u.length, $ = e.charAt(b);
    if (A) {
      var h = W(u);
      return r < 0 ? (i.push(h), i) : ((v = f[r]).children.push(h), i);
    }
    if (g && (r++, (n = W(u)).type === "tag" && t.components[n.name] && (n.type = "component", c = true), n.voidElement || c || !$ || $ === "<" || n.children.push({ type: "text", content: e.slice(b, e.indexOf("<", b)) }), r === 0 && i.push(n), (v = f[r - 1]) && v.children.push(n), f[r] = n), (!g || n.voidElement) && (r > -1 && (n.voidElement || n.name === u.slice(2, -1)) && (r--, n = r === -1 ? i : f[r]), !c && $ !== "<" && $)) {
      v = r === -1 ? i : f[r].children;
      var p = e.indexOf("<", b), o = e.slice(b, p === -1 ? void 0 : p);
      ee.test(o) && (o = " "), (p > -1 && r + v.length >= 0 || o !== " ") && v.push({ type: "text", content: o });
    }
  }), i;
}, stringify: function(e) {
  return e.reduce(function(t, n) {
    return t + z("", n);
  }, "");
} };
const S = (e, t) => {
  if (!e) return false;
  const n = e.props ? e.props.children : e.children;
  return t ? n.length > 0 : !!n;
}, B = (e) => {
  if (!e) return [];
  const t = e.props ? e.props.children : e.children;
  return e.props && e.props.i18nIsDynamicList ? V(t) : t;
}, se = (e) => Array.isArray(e) && e.every(E.isValidElement), V = (e) => Array.isArray(e) ? e : [e], re = (e, t) => {
  const n = { ...t };
  return n.props = Object.assign(e.props, t.props), n;
}, J = (e, t) => {
  if (!e) return "";
  let n = "";
  const i = V(e), f = t.transSupportBasicHtmlNodes && t.transKeepBasicHtmlNodesFor ? t.transKeepBasicHtmlNodesFor : [];
  return i.forEach((r, c) => {
    if (K(r)) n += `${r}`;
    else if (E.isValidElement(r)) {
      const { props: l, type: u } = r, m = Object.keys(l).length, v = f.indexOf(u) > -1, g = l.children;
      if (!g && v && !m) n += `<${u}/>`;
      else if (!g && (!v || m) || l.i18nIsDynamicList) n += `<${c}></${c}>`;
      else if (v && m === 1 && K(g)) n += `<${u}>${g}</${u}>`;
      else {
        const A = J(g, t);
        n += `<${c}>${A}</${c}>`;
      }
    } else if (r === null) I("Trans: the passed in value is invalid - seems you passed in a null child.");
    else if (P(r)) {
      const { format: l, ...u } = r, m = Object.keys(u);
      if (m.length === 1) {
        const v = l ? `${m[0]}, ${l}` : m[0];
        n += `{{${v}}}`;
      } else I("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.", r);
    } else I("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.", r);
  }), n;
}, ae = (e, t, n, i, f, r) => {
  if (t === "") return [];
  const c = i.transKeepBasicHtmlNodesFor || [], l = t && new RegExp(c.map((p) => `<${p}`).join("|")).test(t);
  if (!e && !l && !r) return [t];
  const u = {}, m = (p) => {
    V(p).forEach((a) => {
      K(a) || (S(a) ? m(B(a)) : P(a) && !E.isValidElement(a) && Object.assign(u, a));
    });
  };
  m(e);
  const v = ne.parse(`<0>${t}</0>`), g = { ...u, ...f }, A = (p, o, a) => {
    const x = B(p), C = $(x, o.children, a);
    return se(x) && C.length === 0 || p.props && p.props.i18nIsDynamicList ? x : C;
  }, b = (p, o, a, x, C) => {
    p.dummy ? (p.children = o, a.push(E.cloneElement(p, { key: x }, C ? void 0 : o))) : a.push(...E.Children.map([p], (d) => {
      const s = { ...d.props };
      return delete s.i18nIsDynamicList, E.createElement(d.type, { ...s, key: x, ref: d.ref }, C ? null : o);
    }));
  }, $ = (p, o, a) => {
    const x = V(p);
    return V(o).reduce((d, s, T) => {
      const N = s.children && s.children[0] && s.children[0].content && n.services.interpolator.interpolate(s.children[0].content, g, n.language);
      if (s.type === "tag") {
        let k = x[parseInt(s.name, 10)];
        a.length === 1 && !k && (k = a[0][s.name]), k || (k = {});
        const y = Object.keys(s.attrs).length !== 0 ? re({ props: s.attrs }, k) : k, w = E.isValidElement(y), j = w && S(s, true) && !s.voidElement, F = l && P(y) && y.dummy && !w, H = P(e) && Object.hasOwnProperty.call(e, s.name);
        if (K(y)) {
          const O = n.services.interpolator.interpolate(y, g, n.language);
          d.push(O);
        } else if (S(y) || j) {
          const O = A(y, s, a);
          b(y, O, d, T);
        } else if (F) {
          const O = $(x, s.children, a);
          b(y, O, d, T);
        } else if (Number.isNaN(parseFloat(s.name))) if (H) {
          const O = A(y, s, a);
          b(y, O, d, T, s.voidElement);
        } else if (i.transSupportBasicHtmlNodes && c.indexOf(s.name) > -1) if (s.voidElement) d.push(E.createElement(s.name, { key: `${s.name}-${T}` }));
        else {
          const O = $(x, s.children, a);
          d.push(E.createElement(s.name, { key: `${s.name}-${T}` }, O));
        }
        else if (s.voidElement) d.push(`<${s.name} />`);
        else {
          const O = $(x, s.children, a);
          d.push(`<${s.name}>${O}</${s.name}>`);
        }
        else if (P(y) && !w) {
          const O = s.children[0] ? N : null;
          O && d.push(O);
        } else b(y, N, d, T, s.children.length !== 1 || !N);
      } else if (s.type === "text") {
        const k = i.transWrapTextNodes, y = r ? i.unescape(n.services.interpolator.interpolate(s.content, g, n.language)) : n.services.interpolator.interpolate(s.content, g, n.language);
        k ? d.push(E.createElement(k, { key: `${s.name}-${T}` }, y)) : d.push(y);
      }
      return d;
    }, []);
  }, h = $([{ dummy: true, children: e || [] }], v, V(e || []));
  return B(h[0]);
};
function ie(e) {
  let { children: t, count: n, parent: i, i18nKey: f, context: r, tOptions: c = {}, values: l, defaults: u, components: m, ns: v, i18n: g, t: A, shouldUnescape: b, ...$ } = e;
  const h = g || q();
  if (!h) return G("You will need to pass in an i18next instance by using i18nextReactModule"), t;
  const p = A || h.t.bind(h) || ((j) => j), o = { ...U(), ...h.options && h.options.react };
  let a = v || p.ns || h.options && h.options.defaultNS;
  a = K(a) ? [a] : a || ["translation"];
  const x = J(t, o), C = u || x || o.transEmptyNodeValue || f, { hashTransKey: d } = o, s = f || (d ? d(x || C) : x || C);
  h.options && h.options.interpolation && h.options.interpolation.defaultVariables && (l = l && Object.keys(l).length > 0 ? { ...l, ...h.options.interpolation.defaultVariables } : { ...h.options.interpolation.defaultVariables });
  const T = l || n !== void 0 || !t ? c.interpolation : { interpolation: { ...c.interpolation, prefix: "#$?", suffix: "?$#" } }, N = { ...c, context: r || c.context, count: n, ...l, ...T, defaultValue: C, ns: a }, k = s ? p(s, N) : C;
  m && Object.keys(m).forEach((j) => {
    const F = m[j];
    if (typeof F.type == "function" || !F.props || !F.props.children || k.indexOf(`${j}/>`) < 0 && k.indexOf(`${j} />`) < 0) return;
    function H() {
      return E.createElement(E.Fragment, null, F);
    }
    m[j] = E.createElement(H);
  });
  const y = ae(m || t, k, h, o, N, b), w = i !== void 0 ? i : o.defaultTransParent;
  return w ? E.createElement(w, $, y) : y;
}
function le(e) {
  let { children: t, count: n, parent: i, i18nKey: f, context: r, tOptions: c = {}, values: l, defaults: u, components: m, ns: v, i18n: g, t: A, shouldUnescape: b, ...$ } = e;
  const { i18n: h, defaultNS: p } = E.useContext(X) || {}, o = g || h || q(), a = A || o && o.t.bind(o);
  return ie({ children: t, count: n, parent: i, i18nKey: f, context: r, tOptions: c, values: l, defaults: u, components: m, ns: v || a && a.ns || p || o && o.options && o.options.defaultNS, i18n: o, t: A, shouldUnescape: b, ...$ });
}
export {
  le as T
};
