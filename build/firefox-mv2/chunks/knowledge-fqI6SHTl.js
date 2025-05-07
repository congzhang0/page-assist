var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { ad as l, ae as i, __tla as __tla_0 } from "./Sidebar-DZH9YUxk.js";
let b, h, g, p, x, f, y, E, m;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const u = () => "pa_knowledge_xxxx-xxxx-xxx-xxxx".replace(/[x]/g, () => Math.floor(Math.random() * 16).toString(16));
  class s {
    constructor() {
      __publicField(this, "db");
      __publicField(this, "getAll", async () => new Promise((t, r) => {
        this.db.get(null, (e) => {
          if (chrome.runtime.lastError) r(chrome.runtime.lastError);
          else {
            const n = Object.keys(e).map((a) => e[a]);
            t(n);
          }
        });
      }));
      __publicField(this, "getById", async (t) => new Promise((r, e) => {
        this.db.get(t, (n) => {
          chrome.runtime.lastError ? e(chrome.runtime.lastError) : r(n[t]);
        });
      }));
      __publicField(this, "create", async (t) => new Promise((r, e) => {
        this.db.set({
          [t.id]: t
        }, () => {
          chrome.runtime.lastError ? e(chrome.runtime.lastError) : r();
        });
      }));
      __publicField(this, "update", async (t) => new Promise((r, e) => {
        this.db.set({
          [t.id]: t
        }, () => {
          chrome.runtime.lastError ? e(chrome.runtime.lastError) : r();
        });
      }));
      __publicField(this, "delete", async (t) => new Promise((r, e) => {
        this.db.remove(t, () => {
          chrome.runtime.lastError ? e(chrome.runtime.lastError) : r();
        });
      }));
      __publicField(this, "deleteSource", async (t, r) => new Promise((e, n) => {
        this.db.get(t, (a) => {
          if (chrome.runtime.lastError) n(chrome.runtime.lastError);
          else {
            const c = a[t];
            c.source = c.source.filter((d) => d.source_id !== r), this.db.set({
              [t]: c
            }, () => {
              chrome.runtime.lastError ? n(chrome.runtime.lastError) : e();
            });
          }
        });
      }));
      this.db = chrome.storage.local;
    }
  }
  g = async ({ source: o, title: t, embedding_model: r }) => {
    const e = new s(), a = {
      id: u(),
      title: t,
      db_type: "knowledge",
      source: o,
      status: "pending",
      knownledge: {},
      embedding_model: r,
      createdAt: Date.now()
    };
    return await e.create(a), a;
  };
  b = async (o) => new s().getById(o);
  m = async (o, t) => {
    var _a;
    const r = new s(), e = await r.getById(o);
    t === "finished" && (e.source = (_a = e == null ? void 0 : e.source) == null ? void 0 : _a.map((n) => ({
      ...n,
      content: void 0
    }))), await r.update({
      ...e,
      status: t
    });
  };
  h = async (o, t) => {
    await m(o, "processing");
    const r = new s(), e = await r.getById(o);
    await r.update({
      ...e,
      source: [
        ...e.source,
        ...t
      ]
    });
  };
  y = async (o) => {
    const r = await new s().getAll();
    return o ? r.filter((e) => (e == null ? void 0 : e.db_type) === "knowledge").filter((e) => (e == null ? void 0 : e.status) === o).map((e) => (e.source.forEach((n) => {
      delete n.content;
    }), e)).sort((e, n) => n.createdAt - e.createdAt) : r.filter((e) => (e == null ? void 0 : e.db_type) === "knowledge").map((e) => (e == null ? void 0 : e.source.forEach((n) => {
      delete n.content;
    }), e)).sort((e, n) => n.createdAt - e.createdAt);
  };
  f = async (o) => {
    await new s().delete(o), await i(`vector:${o}`);
  };
  p = async (o, t) => {
    await new s().deleteSource(o, t), await l(`vector:${o}`, t);
  };
  x = async () => await new s().getAll();
  E = async (o) => {
    const t = new s();
    for (const r of o) await t.create(r);
  };
});
export {
  __tla,
  b as a,
  h as b,
  g as c,
  p as d,
  x as e,
  f,
  y as g,
  E as i,
  m as u
};
