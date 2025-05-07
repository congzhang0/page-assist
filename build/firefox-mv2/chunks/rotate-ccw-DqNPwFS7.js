import { g as G } from "./FontSizeProvider-C1DZf1x-.js";
import { c as K } from "./SaveButton-B6h4W40A.js";
var W = { exports: {} }, X = W.exports, z;
function tt() {
  return z || (z = 1, function(E, rt) {
    (function(A, x) {
      E.exports = x();
    })(X, function() {
      var A = 1e3, x = 6e4, U = 36e5, I = "millisecond", S = "second", w = "minute", _ = "hour", M = "day", H = "week", m = "month", q = "quarter", y = "year", O = "date", J = "Invalid Date", V = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, B = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, P = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(s) {
        var r = ["th", "st", "nd", "rd"], t = s % 100;
        return "[" + s + (r[(t - 20) % 10] || r[t] || r[0]) + "]";
      } }, F = function(s, r, t) {
        var n = String(s);
        return !n || n.length >= r ? s : "" + Array(r + 1 - n.length).join(t) + s;
      }, Q = { s: F, z: function(s) {
        var r = -s.utcOffset(), t = Math.abs(r), n = Math.floor(t / 60), e = t % 60;
        return (r <= 0 ? "+" : "-") + F(n, 2, "0") + ":" + F(e, 2, "0");
      }, m: function s(r, t) {
        if (r.date() < t.date()) return -s(t, r);
        var n = 12 * (t.year() - r.year()) + (t.month() - r.month()), e = r.clone().add(n, m), i = t - e < 0, a = r.clone().add(n + (i ? -1 : 1), m);
        return +(-(n + (t - e) / (i ? e - a : a - e)) || 0);
      }, a: function(s) {
        return s < 0 ? Math.ceil(s) || 0 : Math.floor(s);
      }, p: function(s) {
        return { M: m, y, w: H, d: M, D: O, h: _, m: w, s: S, ms: I, Q: q }[s] || String(s || "").toLowerCase().replace(/s$/, "");
      }, u: function(s) {
        return s === void 0;
      } }, k = "en", p = {};
      p[k] = P;
      var R = "$isDayjsObject", N = function(s) {
        return s instanceof C || !(!s || !s[R]);
      }, T = function s(r, t, n) {
        var e;
        if (!r) return k;
        if (typeof r == "string") {
          var i = r.toLowerCase();
          p[i] && (e = i), t && (p[i] = t, e = i);
          var a = r.split("-");
          if (!e && a.length > 1) return s(a[0]);
        } else {
          var o = r.name;
          p[o] = r, e = o;
        }
        return !n && e && (k = e), e || !n && k;
      }, f = function(s, r) {
        if (N(s)) return s.clone();
        var t = typeof r == "object" ? r : {};
        return t.date = s, t.args = arguments, new C(t);
      }, u = Q;
      u.l = T, u.i = N, u.w = function(s, r) {
        return f(s, { locale: r.$L, utc: r.$u, x: r.$x, $offset: r.$offset });
      };
      var C = function() {
        function s(t) {
          this.$L = T(t.locale, null, true), this.parse(t), this.$x = this.$x || t.x || {}, this[R] = true;
        }
        var r = s.prototype;
        return r.parse = function(t) {
          this.$d = function(n) {
            var e = n.date, i = n.utc;
            if (e === null) return /* @__PURE__ */ new Date(NaN);
            if (u.u(e)) return /* @__PURE__ */ new Date();
            if (e instanceof Date) return new Date(e);
            if (typeof e == "string" && !/Z$/i.test(e)) {
              var a = e.match(V);
              if (a) {
                var o = a[2] - 1 || 0, c = (a[7] || "0").substring(0, 3);
                return i ? new Date(Date.UTC(a[1], o, a[3] || 1, a[4] || 0, a[5] || 0, a[6] || 0, c)) : new Date(a[1], o, a[3] || 1, a[4] || 0, a[5] || 0, a[6] || 0, c);
              }
            }
            return new Date(e);
          }(t), this.init();
        }, r.init = function() {
          var t = this.$d;
          this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds();
        }, r.$utils = function() {
          return u;
        }, r.isValid = function() {
          return this.$d.toString() !== J;
        }, r.isSame = function(t, n) {
          var e = f(t);
          return this.startOf(n) <= e && e <= this.endOf(n);
        }, r.isAfter = function(t, n) {
          return f(t) < this.startOf(n);
        }, r.isBefore = function(t, n) {
          return this.endOf(n) < f(t);
        }, r.$g = function(t, n, e) {
          return u.u(t) ? this[n] : this.set(e, t);
        }, r.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, r.valueOf = function() {
          return this.$d.getTime();
        }, r.startOf = function(t, n) {
          var e = this, i = !!u.u(n) || n, a = u.p(t), o = function(g, $) {
            var v = u.w(e.$u ? Date.UTC(e.$y, $, g) : new Date(e.$y, $, g), e);
            return i ? v : v.endOf(M);
          }, c = function(g, $) {
            return u.w(e.toDate()[g].apply(e.toDate("s"), (i ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice($)), e);
          }, h = this.$W, d = this.$M, l = this.$D, b = "set" + (this.$u ? "UTC" : "");
          switch (a) {
            case y:
              return i ? o(1, 0) : o(31, 11);
            case m:
              return i ? o(1, d) : o(0, d + 1);
            case H:
              var D = this.$locale().weekStart || 0, Y = (h < D ? h + 7 : h) - D;
              return o(i ? l - Y : l + (6 - Y), d);
            case M:
            case O:
              return c(b + "Hours", 0);
            case _:
              return c(b + "Minutes", 1);
            case w:
              return c(b + "Seconds", 2);
            case S:
              return c(b + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, r.endOf = function(t) {
          return this.startOf(t, false);
        }, r.$set = function(t, n) {
          var e, i = u.p(t), a = "set" + (this.$u ? "UTC" : ""), o = (e = {}, e[M] = a + "Date", e[O] = a + "Date", e[m] = a + "Month", e[y] = a + "FullYear", e[_] = a + "Hours", e[w] = a + "Minutes", e[S] = a + "Seconds", e[I] = a + "Milliseconds", e)[i], c = i === M ? this.$D + (n - this.$W) : n;
          if (i === m || i === y) {
            var h = this.clone().set(O, 1);
            h.$d[o](c), h.init(), this.$d = h.set(O, Math.min(this.$D, h.daysInMonth())).$d;
          } else o && this.$d[o](c);
          return this.init(), this;
        }, r.set = function(t, n) {
          return this.clone().$set(t, n);
        }, r.get = function(t) {
          return this[u.p(t)]();
        }, r.add = function(t, n) {
          var e, i = this;
          t = Number(t);
          var a = u.p(n), o = function(d) {
            var l = f(i);
            return u.w(l.date(l.date() + Math.round(d * t)), i);
          };
          if (a === m) return this.set(m, this.$M + t);
          if (a === y) return this.set(y, this.$y + t);
          if (a === M) return o(1);
          if (a === H) return o(7);
          var c = (e = {}, e[w] = x, e[_] = U, e[S] = A, e)[a] || 1, h = this.$d.getTime() + t * c;
          return u.w(h, this);
        }, r.subtract = function(t, n) {
          return this.add(-1 * t, n);
        }, r.format = function(t) {
          var n = this, e = this.$locale();
          if (!this.isValid()) return e.invalidDate || J;
          var i = t || "YYYY-MM-DDTHH:mm:ssZ", a = u.z(this), o = this.$H, c = this.$m, h = this.$M, d = e.weekdays, l = e.months, b = e.meridiem, D = function($, v, j, L) {
            return $ && ($[v] || $(n, i)) || j[v].slice(0, L);
          }, Y = function($) {
            return u.s(o % 12 || 12, $, "0");
          }, g = b || function($, v, j) {
            var L = $ < 12 ? "AM" : "PM";
            return j ? L.toLowerCase() : L;
          };
          return i.replace(B, function($, v) {
            return v || function(j) {
              switch (j) {
                case "YY":
                  return String(n.$y).slice(-2);
                case "YYYY":
                  return u.s(n.$y, 4, "0");
                case "M":
                  return h + 1;
                case "MM":
                  return u.s(h + 1, 2, "0");
                case "MMM":
                  return D(e.monthsShort, h, l, 3);
                case "MMMM":
                  return D(l, h);
                case "D":
                  return n.$D;
                case "DD":
                  return u.s(n.$D, 2, "0");
                case "d":
                  return String(n.$W);
                case "dd":
                  return D(e.weekdaysMin, n.$W, d, 2);
                case "ddd":
                  return D(e.weekdaysShort, n.$W, d, 3);
                case "dddd":
                  return d[n.$W];
                case "H":
                  return String(o);
                case "HH":
                  return u.s(o, 2, "0");
                case "h":
                  return Y(1);
                case "hh":
                  return Y(2);
                case "a":
                  return g(o, c, true);
                case "A":
                  return g(o, c, false);
                case "m":
                  return String(c);
                case "mm":
                  return u.s(c, 2, "0");
                case "s":
                  return String(n.$s);
                case "ss":
                  return u.s(n.$s, 2, "0");
                case "SSS":
                  return u.s(n.$ms, 3, "0");
                case "Z":
                  return a;
              }
              return null;
            }($) || a.replace(":", "");
          });
        }, r.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, r.diff = function(t, n, e) {
          var i, a = this, o = u.p(n), c = f(t), h = (c.utcOffset() - this.utcOffset()) * x, d = this - c, l = function() {
            return u.m(a, c);
          };
          switch (o) {
            case y:
              i = l() / 12;
              break;
            case m:
              i = l();
              break;
            case q:
              i = l() / 3;
              break;
            case H:
              i = (d - h) / 6048e5;
              break;
            case M:
              i = (d - h) / 864e5;
              break;
            case _:
              i = d / U;
              break;
            case w:
              i = d / x;
              break;
            case S:
              i = d / A;
              break;
            default:
              i = d;
          }
          return e ? i : u.a(i);
        }, r.daysInMonth = function() {
          return this.endOf(m).$D;
        }, r.$locale = function() {
          return p[this.$L];
        }, r.locale = function(t, n) {
          if (!t) return this.$L;
          var e = this.clone(), i = T(t, n, true);
          return i && (e.$L = i), e;
        }, r.clone = function() {
          return u.w(this.$d, this);
        }, r.toDate = function() {
          return new Date(this.valueOf());
        }, r.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, r.toISOString = function() {
          return this.$d.toISOString();
        }, r.toString = function() {
          return this.$d.toUTCString();
        }, s;
      }(), Z = C.prototype;
      return f.prototype = Z, [["$ms", I], ["$s", S], ["$m", w], ["$H", _], ["$W", M], ["$M", m], ["$y", y], ["$D", O]].forEach(function(s) {
        Z[s[1]] = function(r) {
          return this.$g(r, s[0], s[1]);
        };
      }), f.extend = function(s, r) {
        return s.$i || (s(r, C, f), s.$i = true), f;
      }, f.locale = T, f.isDayjs = N, f.unix = function(s) {
        return f(1e3 * s);
      }, f.en = p[k], f.Ls = p, f.p = {}, f;
    });
  }(W)), W.exports;
}
var et = tt();
const it = G(et);
/**
* @license lucide-react v0.350.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
const at = K("RotateCcw", [["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }], ["path", { d: "M3 3v5h5", key: "1xhq8a" }]]);
export {
  at as R,
  it as d
};
