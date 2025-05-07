import { a as p, e as f, j as e, c as S, r as k, f as h, __tla as __tla_0 } from "./FontSizeProvider-C1DZf1x-.js";
import { B as v, S as N, __tla as __tla_1 } from "./SettingsOptionLayout-OzuGfHmE.js";
import { O as w, __tla as __tla_2 } from "./Layout-D44e2h93.js";
import { c as I, F as t, u, I as L, o as s, C as b, p as c, l as j, k as y, s as O, L as C, g as P } from "./SaveButton-B6h4W40A.js";
import { A as K } from "./AdvanceOllamaSettings-zphIMASi.js";
import { N as M, O as R, __tla as __tla_3 } from "./Sidebar-DZH9YUxk.js";
import { T as g } from "./Trans-PMjSaMEn.js";
import "./chevron-right-CHUn5UPl.js";
let _;
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
  })()
]).then(async () => {
  let U, A, E;
  U = I("AlertCircle", [
    [
      "circle",
      {
        cx: "12",
        cy: "12",
        r: "10",
        key: "1mglay"
      }
    ],
    [
      "line",
      {
        x1: "12",
        x2: "12",
        y1: "8",
        y2: "12",
        key: "1pkeuh"
      }
    ],
    [
      "line",
      {
        x1: "12",
        x2: "12.01",
        y1: "16",
        y2: "16",
        key: "4dfq90"
      }
    ]
  ]);
  A = () => {
    const { t: l } = p("common"), [n] = t.useForm(), m = f(), { isPending: o } = u({
      queryKey: [
        "fetchModelConfig"
      ],
      queryFn: async () => {
        const i = await R();
        return n.setFieldsValue(i), i;
      }
    });
    return e.jsxs("div", {
      children: [
        e.jsxs("div", {
          children: [
            e.jsxs("div", {
              className: "inline-flex items-center gap-2",
              children: [
                e.jsx(v, {}),
                e.jsx("h2", {
                  className: "text-base font-semibold leading-7 text-gray-900 dark:text-white",
                  children: l("modelSettings.label")
                })
              ]
            }),
            e.jsx("p", {
              className: "text-sm text-gray-700 dark:text-neutral-400 mt-1",
              children: l("modelSettings.description")
            }),
            e.jsx("div", {
              className: "border border-b border-gray-200 dark:border-gray-600 mt-3 mb-6"
            })
          ]
        }),
        o ? e.jsx(y, {
          active: true
        }) : e.jsxs(t, {
          onFinish: (i) => {
            Object.entries(i).forEach(([d, r]) => {
              M(d, r);
            }), m.invalidateQueries({
              queryKey: [
                "fetchModelConfig"
              ]
            });
          },
          form: n,
          layout: "vertical",
          children: [
            e.jsx(t.Item, {
              name: "keepAlive",
              help: l("modelSettings.form.keepAlive.help"),
              label: l("modelSettings.form.keepAlive.label"),
              children: e.jsx(L, {
                size: "large",
                placeholder: l("modelSettings.form.keepAlive.placeholder")
              })
            }),
            e.jsx(t.Item, {
              name: "temperature",
              label: l("modelSettings.form.temperature.label"),
              children: e.jsx(s, {
                size: "large",
                style: {
                  width: "100%"
                },
                placeholder: l("modelSettings.form.temperature.placeholder")
              })
            }),
            e.jsx(t.Item, {
              name: "numCtx",
              label: l("modelSettings.form.numCtx.label"),
              children: e.jsx(s, {
                style: {
                  width: "100%"
                },
                placeholder: l("modelSettings.form.numCtx.placeholder"),
                size: "large"
              })
            }),
            e.jsx(t.Item, {
              name: "numPredict",
              label: l("modelSettings.form.numPredict.label"),
              children: e.jsx(s, {
                style: {
                  width: "100%"
                },
                placeholder: l("modelSettings.form.numPredict.placeholder")
              })
            }),
            e.jsx(b, {
              ghost: true,
              className: "border-none bg-transparent",
              items: [
                {
                  key: "1",
                  label: l("modelSettings.advanced"),
                  children: e.jsxs(S.Fragment, {
                    children: [
                      e.jsx(t.Item, {
                        name: "topK",
                        label: l("modelSettings.form.topK.label"),
                        children: e.jsx(s, {
                          style: {
                            width: "100%"
                          },
                          placeholder: l("modelSettings.form.topK.placeholder"),
                          size: "large"
                        })
                      }),
                      e.jsx(t.Item, {
                        name: "topP",
                        label: l("modelSettings.form.topP.label"),
                        children: e.jsx(s, {
                          style: {
                            width: "100%"
                          },
                          size: "large",
                          placeholder: l("modelSettings.form.topP.placeholder")
                        })
                      }),
                      e.jsx(t.Item, {
                        name: "numGpu",
                        label: l("modelSettings.form.numGpu.label"),
                        children: e.jsx(s, {
                          style: {
                            width: "100%"
                          },
                          size: "large",
                          placeholder: l("modelSettings.form.numGpu.placeholder")
                        })
                      }),
                      e.jsx(t.Item, {
                        name: "minP",
                        label: l("modelSettings.form.minP.label"),
                        children: e.jsx(s, {
                          style: {
                            width: "100%"
                          },
                          placeholder: l("modelSettings.form.minP.placeholder")
                        })
                      }),
                      e.jsx(t.Item, {
                        name: "repeatPenalty",
                        label: l("modelSettings.form.repeatPenalty.label"),
                        children: e.jsx(s, {
                          style: {
                            width: "100%"
                          },
                          placeholder: l("modelSettings.form.repeatPenalty.placeholder")
                        })
                      }),
                      e.jsx(t.Item, {
                        name: "repeatLastN",
                        label: l("modelSettings.form.repeatLastN.label"),
                        children: e.jsx(s, {
                          style: {
                            width: "100%"
                          },
                          placeholder: l("modelSettings.form.repeatLastN.placeholder")
                        })
                      }),
                      e.jsx(t.Item, {
                        name: "tfsZ",
                        label: l("modelSettings.form.tfsZ.label"),
                        children: e.jsx(s, {
                          style: {
                            width: "100%"
                          },
                          placeholder: l("modelSettings.form.tfsZ.placeholder")
                        })
                      }),
                      e.jsx(t.Item, {
                        name: "numKeep",
                        label: l("modelSettings.form.numKeep.label"),
                        children: e.jsx(s, {
                          style: {
                            width: "100%"
                          },
                          placeholder: l("modelSettings.form.numKeep.placeholder")
                        })
                      }),
                      e.jsx(t.Item, {
                        name: "numThread",
                        label: l("modelSettings.form.numThread.label"),
                        children: e.jsx(s, {
                          style: {
                            width: "100%"
                          },
                          placeholder: l("modelSettings.form.numThread.placeholder")
                        })
                      }),
                      e.jsx(t.Item, {
                        name: "useMMap",
                        label: l("modelSettings.form.useMMap.label"),
                        children: e.jsx(c, {})
                      }),
                      e.jsx(t.Item, {
                        name: "useMlock",
                        label: l("modelSettings.form.useMlock.label"),
                        children: e.jsx(c, {})
                      })
                    ]
                  })
                }
              ]
            }),
            e.jsx("div", {
              className: "flex justify-end",
              children: e.jsx(j, {
                btnType: "submit"
              })
            })
          ]
        })
      ]
    });
  };
  E = () => {
    const [l, n] = k.useState(""), [m, o] = h("ollamaEnabledStatus", true), [i, d] = h("checkOllamaStatus", true), { t: r } = p("settings"), { status: x } = u({
      queryKey: [
        "fetchOllamURL"
      ],
      queryFn: async () => {
        try {
          const [a] = await Promise.all([
            P()
          ]);
          return n(a), {};
        } catch (a) {
          return console.error(a), {};
        }
      }
    });
    return e.jsxs("div", {
      className: "flex flex-col space-y-3",
      children: [
        x === "pending" && e.jsx(y, {
          paragraph: {
            rows: 4
          },
          active: true
        }),
        x === "success" && e.jsxs("div", {
          className: "flex flex-col space-y-6",
          children: [
            e.jsxs("div", {
              children: [
                e.jsxs("div", {
                  children: [
                    e.jsx("h2", {
                      className: "text-base font-semibold leading-7 text-gray-900 dark:text-white",
                      children: r("ollamaSettings.heading")
                    }),
                    e.jsx("div", {
                      className: "border border-b border-gray-200 dark:border-gray-600 mt-3 mb-6"
                    })
                  ]
                }),
                e.jsxs("div", {
                  className: "mb-3",
                  children: [
                    e.jsx("label", {
                      htmlFor: "ollamaURL",
                      className: "text-sm font-medium dark:text-gray-200",
                      children: r("ollamaSettings.settings.ollamaUrl.label")
                    }),
                    e.jsx("input", {
                      type: "url",
                      id: "ollamaURL",
                      value: l,
                      onChange: (a) => {
                        n(a.target.value);
                      },
                      placeholder: r("ollamaSettings.settings.ollamaUrl.placeholder"),
                      className: "w-full p-2 border border-gray-300 rounded-md dark:bg-[#262626] dark:text-gray-100"
                    })
                  ]
                }),
                e.jsx("div", {
                  className: "flex justify-end mb-3",
                  children: e.jsx(j, {
                    onClick: () => {
                      O(l);
                    },
                    className: "mt-2"
                  })
                }),
                e.jsx(b, {
                  size: "small",
                  items: [
                    {
                      key: "1",
                      label: e.jsxs("div", {
                        children: [
                          e.jsx("h2", {
                            className: "text-base font-semibold leading-7 text-gray-900 dark:text-white",
                            children: r("ollamaSettings.settings.advanced.label")
                          }),
                          e.jsx("p", {
                            className: "text-xs text-gray-700 dark:text-gray-400 mb-4",
                            children: e.jsx(g, {
                              i18nKey: "settings:ollamaSettings.settings.advanced.help",
                              components: {
                                anchor: e.jsx("a", {
                                  href: "https://github.com/n4ze3m/page-assist/blob/main/docs/connection-issue.md#solutions",
                                  target: "__blank",
                                  className: "text-blue-600 dark:text-blue-400"
                                })
                              }
                            })
                          })
                        ]
                      }),
                      children: e.jsx(K, {})
                    }
                  ]
                }),
                e.jsxs("div", {
                  className: "mt-8 mb-4",
                  children: [
                    e.jsxs("div", {
                      className: "flex items-center justify-between",
                      children: [
                        e.jsx("label", {
                          className: "text-sm font-medium dark:text-gray-200",
                          children: r("ollamaSettings.settings.globalEnable.label")
                        }),
                        e.jsx(c, {
                          checked: m,
                          onChange: (a) => {
                            o(a), d(a);
                          }
                        })
                      ]
                    }),
                    !m && e.jsx("div", {
                      className: "mt-2 p-3 bg-yellow-50 dark:bg-yellow-900/30 rounded-md",
                      children: e.jsxs("div", {
                        className: "flex",
                        children: [
                          e.jsx("div", {
                            className: "flex-shrink-0",
                            children: e.jsx(U, {
                              className: "h-5 w-5 text-yellow-400 dark:text-yellow-500"
                            })
                          }),
                          e.jsx("div", {
                            className: "ml-3",
                            children: e.jsx("p", {
                              className: "text-sm text-yellow-800 dark:text-yellow-200",
                              children: e.jsx(g, {
                                i18nKey: "settings:ollamaSettings.settings.globalEnable.warning",
                                components: {
                                  anchor: e.jsx(C, {
                                    to: "/settings/openai",
                                    className: "text-blue-600 dark:text-blue-400"
                                  })
                                }
                              })
                            })
                          })
                        ]
                      })
                    }),
                    " "
                  ]
                })
              ]
            }),
            e.jsx(A, {})
          ]
        })
      ]
    });
  };
  _ = () => e.jsx(w, {
    children: e.jsx(N, {
      children: e.jsx(E, {})
    })
  });
});
export {
  __tla,
  _ as default
};
