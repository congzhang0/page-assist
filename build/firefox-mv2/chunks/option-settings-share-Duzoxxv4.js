import { e as j, a as w, f as k, j as e, __tla as __tla_0 } from "./FontSizeProvider-C1DZf1x-.js";
import { S as v, __tla as __tla_1 } from "./SettingsOptionLayout-OzuGfHmE.js";
import { O as N, __tla as __tla_2 } from "./Layout-D44e2h93.js";
import { a3 as m, a as E, u as I, e as c, k as T, F as o, I as _, l as F, p as O, T as P, G as U, a4 as h, a5 as q } from "./SaveButton-B6h4W40A.js";
import { a1 as M, a2 as C, a3 as K, __tla as __tla_3 } from "./Sidebar-DZH9YUxk.js";
import { T as Q } from "./Trans-PMjSaMEn.js";
import { F as L, __tla as __tla_4 } from "./Table-D7-VcBcl.js";
import { s as n } from "./chevron-right-CHUn5UPl.js";
import "./index-23mm4Rzq.js";
import "./useBubbleLock-D9rWo-oM.js";
import "./index-Bva-imIy.js";
let ee;
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
  })()
]).then(async () => {
  let z, B;
  z = async (t) => {
    const a = await m(`${E(t)}/api/v1/ping`);
    if (!a.ok) throw new Error("Unable to verify page share");
    return await a.text() === "pong";
  };
  B = () => {
    const t = j(), { t: a } = w([
      "settings"
    ]), [i, u] = k("shareMode", false), { status: l, data: d } = I({
      queryKey: [
        "fetchShareInfo"
      ],
      queryFn: async () => {
        const [r, s] = await Promise.all([
          q(),
          K()
        ]);
        return {
          url: r,
          shares: s
        };
      }
    }), g = async (r) => {
      i ? await z(r.url) && await h(r.url) : await h(r.url);
    }, x = async ({ api_url: r, share_id: s, id: y }) => {
      const S = await M();
      if (!(await m(`${r}/api/v1/share/delete`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          share_id: s,
          owner_id: S
        })
      })).ok) throw new Error("Failed to delete share link");
      return await C(y), "ok";
    }, { mutate: b, isPending: p } = c({
      mutationFn: g,
      onSuccess: () => {
        t.invalidateQueries({
          queryKey: [
            "fetchShareInfo"
          ]
        }), n.success(a("manageShare.notification.pageShareSuccess"));
      },
      onError: (r) => {
        n.error((r == null ? void 0 : r.message) || a("manageShare.notification.someError"));
      }
    }), { mutate: f } = c({
      mutationFn: x,
      onSuccess: () => {
        t.invalidateQueries({
          queryKey: [
            "fetchShareInfo"
          ]
        }), n.success(a("manageShare.notification.webShareDeleteSuccess"));
      },
      onError: (r) => {
        n.error((r == null ? void 0 : r.message) || a("manageShare.notification.someError"));
      }
    });
    return e.jsxs("div", {
      className: "flex flex-col space-y-3",
      children: [
        l === "pending" && e.jsx(T, {
          paragraph: {
            rows: 4
          },
          active: true
        }),
        l === "success" && e.jsxs("div", {
          children: [
            e.jsxs("div", {
              children: [
                e.jsxs("div", {
                  children: [
                    e.jsx("h2", {
                      className: "text-base font-semibold leading-7 text-gray-900 dark:text-white",
                      children: a("manageShare.heading")
                    }),
                    e.jsx("div", {
                      className: "border border-b border-gray-200 dark:border-gray-600 mt-3 mb-6"
                    })
                  ]
                }),
                e.jsxs(o, {
                  layout: "vertical",
                  onFinish: b,
                  initialValues: {
                    url: d.url
                  },
                  children: [
                    e.jsx(o.Item, {
                      name: "url",
                      help: e.jsx(Q, {
                        i18nKey: "settings:manageShare.form.url.help",
                        components: {
                          anchor: e.jsx("a", {
                            href: "https://github.com/n4ze3m/page-assist/blob/main/page-share.md",
                            target: "__blank",
                            className: "text-blue-600 dark:text-blue-400"
                          })
                        }
                      }),
                      rules: [
                        {
                          required: true,
                          message: a("manageShare.form.url.required")
                        }
                      ],
                      label: a("manageShare.form.url.label"),
                      children: e.jsx(_, {
                        placeholder: a("manageShare.form.url.placeholder"),
                        size: "large"
                      })
                    }),
                    e.jsx(o.Item, {
                      children: e.jsx("div", {
                        className: "flex justify-end",
                        children: e.jsx(F, {
                          disabled: p,
                          btnType: "submit"
                        })
                      })
                    })
                  ]
                }),
                e.jsxs("div", {
                  className: "space-y-2 flex mb-4 flex-row items-center justify-between rounded-lg  dark:border-gray-600 ",
                  children: [
                    e.jsxs("div", {
                      className: "space-y-0.5",
                      children: [
                        e.jsx("label", {
                          className: "text-sm font-semibold leading-5 text-gray-900 dark:text-white",
                          children: a("manageShare.webshare.label")
                        }),
                        e.jsx("p", {
                          className: "text-sm font-normal leading-5 text-gray-700 dark:text-gray-400",
                          children: a("manageShare.webshare.description")
                        })
                      ]
                    }),
                    e.jsx(O, {
                      checked: i,
                      onChange: u
                    })
                  ]
                })
              ]
            }),
            e.jsxs("div", {
              children: [
                e.jsxs("div", {
                  children: [
                    e.jsx("h2", {
                      className: "text-base font-semibold leading-7 text-gray-900 dark:text-white",
                      children: a("manageShare.webshare.heading")
                    }),
                    e.jsx("div", {
                      className: "border border-b border-gray-200 dark:border-gray-600 mt-3 mb-6"
                    })
                  ]
                }),
                e.jsx("div", {
                  children: e.jsx(L, {
                    dataSource: d.shares,
                    columns: [
                      {
                        title: a("manageShare.webshare.columns.title"),
                        dataIndex: "title",
                        key: "title"
                      },
                      {
                        title: a("manageShare.webshare.columns.url"),
                        dataIndex: "url",
                        key: "url",
                        render: (r) => e.jsx("a", {
                          href: r,
                          target: "__blank",
                          className: "text-blue-600 dark:text-blue-400",
                          children: r
                        })
                      },
                      {
                        title: a("manageShare.webshare.columns.actions"),
                        render: (r, s) => e.jsx(P, {
                          title: a("manageShare.webshare.tooltip.delete"),
                          children: e.jsx("button", {
                            onClick: () => {
                              window.confirm(a("manageShare.webshare.confirm.delete")) && f({
                                id: s.id,
                                share_id: s.share_id,
                                api_url: s.api_url
                              });
                            },
                            className: "text-red-500 dark:text-red-400",
                            children: e.jsx(U, {
                              className: "w-5 h-5"
                            })
                          })
                        })
                      }
                    ]
                  })
                })
              ]
            })
          ]
        })
      ]
    });
  };
  ee = () => e.jsx(N, {
    children: e.jsx(v, {
      children: e.jsx(B, {})
    })
  });
});
export {
  __tla,
  ee as default
};
