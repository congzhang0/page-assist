import { a as P, r as u, e as E, j as e, __tla as __tla_0 } from "./FontSizeProvider-C1DZf1x-.js";
import { S as R, __tla as __tla_1 } from "./SettingsOptionLayout-OzuGfHmE.js";
import { O as _, __tla as __tla_2 } from "./Layout-D44e2h93.js";
import { u as Q, e as k, I as p, av as V, aw as B, ax as D, F as x, T as F, G as L, S as G, ay as $, az as H, aA as J, N as W } from "./SaveButton-B6h4W40A.js";
import { s as N } from "./chevron-right-CHUn5UPl.js";
import { S as X, F as Y, __tla as __tla_3 } from "./Table-D7-VcBcl.js";
import { C as K } from "./index-23mm4Rzq.js";
import { R as O } from "./index-Bva-imIy.js";
import { o as Z, q as ee, x as ae, y as se, t as T, af as te, __tla as __tla_4 } from "./Sidebar-DZH9YUxk.js";
import "./useBubbleLock-D9rWo-oM.js";
let be;
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
  let le, z, q, ne;
  le = ({ openaiId: a, setOpenModelModal: w }) => {
    const { t: l } = P([
      "openai"
    ]), [i, o] = u.useState([]), [h, c] = u.useState(""), [b, f] = u.useState("chat"), S = E(), { data: r, status: g } = Q({
      queryKey: [
        "openAIConfigs",
        a
      ],
      queryFn: async () => {
        const t = await B(a);
        return await D({
          baseUrl: t.baseUrl,
          apiKey: t.apiKey,
          customHeaders: t.headers
        });
      },
      enabled: !!a
    }), m = u.useMemo(() => (r == null ? void 0 : r.filter((t) => (t.name ?? t.id).toLowerCase().includes(h.toLowerCase()))) || [], [
      r,
      h
    ]), C = (t) => {
      o(t ? m.map((d) => d.id) : []);
    }, v = (t, d) => {
      o(d ? (s) => [
        ...s,
        t
      ] : (s) => s.filter((n) => n !== t));
    }, I = async (t) => {
      const d = t.map((s) => {
        var _a;
        return {
          model_id: s,
          name: ((_a = m.find((n) => n.id === s)) == null ? void 0 : _a.name) ?? s,
          provider_id: a,
          model_type: b
        };
      });
      return await V(d), true;
    }, { mutate: U, isPending: y } = k({
      mutationFn: I,
      onSuccess: () => {
        w(false), S.invalidateQueries({
          queryKey: [
            "fetchModel"
          ]
        }), N.success(l("modal.model.success"));
      }
    }), M = () => {
      U(i);
    };
    return g === "pending" ? e.jsx("div", {
      className: "flex items-center justify-center h-40",
      children: e.jsx(X, {
        size: "large"
      })
    }) : g === "error" || !r || r.length === 0 ? e.jsx("div", {
      className: "flex items-center justify-center h-40",
      children: e.jsx("p", {
        className: "text-md text-center text-gray-600 dark:text-gray-300",
        children: l("noModelFound")
      })
    }) : e.jsxs("div", {
      className: "space-y-4",
      children: [
        e.jsx("p", {
          className: "text-sm text-gray-500 dark:text-gray-400",
          children: l("modal.model.subheading")
        }),
        e.jsx(p, {
          placeholder: l("searchModel"),
          value: h,
          onChange: (t) => c(t.target.value),
          className: "w-full"
        }),
        e.jsxs("div", {
          className: "flex  justify-between",
          children: [
            e.jsx(K, {
              checked: i.length === m.length,
              indeterminate: i.length > 0 && i.length < m.length,
              onChange: (t) => C(t.target.checked),
              children: l("selectAll")
            }),
            e.jsx("div", {
              className: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200",
              children: `${i == null ? void 0 : i.length} / ${r == null ? void 0 : r.length}`
            })
          ]
        }),
        e.jsx("div", {
          className: "space-y-2 custom-scrollbar max-h-[300px] border overflow-y-auto dark:border-gray-600 rounded-md p-3",
          children: e.jsx("div", {
            className: "divide-y divide-gray-200 dark:divide-gray-700",
            children: m.map((t, d) => e.jsx("div", {
              onClick: () => {
                v(t.id, !i.includes(t.id));
              },
              className: "flex cursor-pointer items-center justify-between py-3 hover:bg-gray-50 dark:hover:bg-gray-800 px-2 ",
              children: e.jsxs("div", {
                className: "flex items-center space-x-3",
                children: [
                  e.jsx(K, {
                    checked: i.includes(t.id),
                    onChange: (s) => v(t.id, s.target.checked)
                  }),
                  e.jsxs("div", {
                    className: "flex flex-col",
                    children: [
                      e.jsx("span", {
                        className: "text-sm font-medium text-gray-900 dark:text-gray-100",
                        children: `${(t == null ? void 0 : t.name) || t.id}`.replaceAll(/accounts\/[^\/]+\/models\//g, "")
                      }),
                      e.jsx("span", {
                        className: "text-xs text-gray-500 dark:text-gray-400",
                        children: t.id
                      })
                    ]
                  })
                ]
              })
            }, d))
          })
        }),
        e.jsxs("div", {
          className: "flex items-center",
          children: [
            e.jsxs(O.Group, {
              onChange: (t) => f(t.target.value),
              value: b,
              children: [
                e.jsx(O, {
                  value: "chat",
                  children: l("radio.chat")
                }),
                e.jsx(O, {
                  value: "embedding",
                  children: l("radio.embedding")
                })
              ]
            }),
            e.jsx(Z, {
              content: e.jsxs("div", {
                children: [
                  e.jsxs("p", {
                    children: [
                      e.jsx("b", {
                        className: "text-gray-800 dark:text-gray-100",
                        children: l("radio.chat")
                      }),
                      " ",
                      l("radio.chatInfo")
                    ]
                  }),
                  e.jsxs("p", {
                    children: [
                      e.jsx("b", {
                        className: "text-gray-800 dark:text-gray-100",
                        children: l("radio.embedding")
                      }),
                      " ",
                      l("radio.embeddingInfo")
                    ]
                  })
                ]
              }),
              children: e.jsx(ee, {
                className: "ml-2 h-4 w-4 text-gray-500 cursor-pointer"
              })
            })
          ]
        }),
        e.jsx("button", {
          onClick: M,
          disabled: y,
          className: "inline-flex justify-center w-full text-center mt-4 items-center rounded-md border border-transparent bg-black px-2 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-white dark:text-gray-800 dark:hover:bg-gray-100 dark:focus:ring-gray-500 dark:focus:ring-offset-gray-100 disabled:opacity-50",
          children: l(y ? "saving" : "save")
        })
      ]
    });
  };
  z = [
    {
      label: "Custom",
      value: "custom",
      baseUrl: ""
    },
    {
      label: "LLaMa.cpp",
      value: "llamacpp",
      baseUrl: "http://localhost:8080/v1"
    },
    {
      label: "LM Studio",
      value: "lmstudio",
      baseUrl: "http://localhost:1234/v1"
    },
    {
      label: "Llamafile",
      value: "llamafile",
      baseUrl: "http://127.0.0.1:8080/v1"
    },
    {
      label: "Ollama",
      value: "ollama2",
      baseUrl: "http://localhost:11434/v1"
    },
    {
      label: "OpenAI",
      value: "openai",
      baseUrl: "https://api.openai.com/v1"
    },
    {
      label: "DeepSeek",
      value: "deepseek",
      baseUrl: "https://api.deepseek.com"
    },
    {
      label: "Fireworks",
      value: "fireworks",
      baseUrl: "https://api.fireworks.ai/inference/v1"
    },
    {
      label: "Novita AI",
      value: "novita",
      baseUrl: "https://api.novita.ai/v3/openai"
    },
    {
      label: "Groq",
      value: "groq",
      baseUrl: "https://api.groq.com/openai/v1"
    },
    {
      label: "Together",
      value: "together",
      baseUrl: "https://api.together.xyz/v1"
    },
    {
      label: "OpenRouter",
      value: "openrouter",
      baseUrl: "https://openrouter.ai/api/v1"
    },
    {
      label: "Google AI",
      value: "gemini",
      baseUrl: "https://generativelanguage.googleapis.com/v1beta/openai"
    },
    {
      label: "Mistral",
      value: "mistral",
      baseUrl: "https://api.mistral.ai/v1"
    },
    {
      label: "Infinigence AI",
      value: "infinitenceai",
      baseUrl: "https://cloud.infini-ai.com/maas/v1"
    },
    {
      label: "SiliconFlow",
      value: "siliconflow",
      baseUrl: "https://api.siliconflow.cn/v1"
    },
    {
      label: "VolcEngine",
      value: "volcengine",
      baseUrl: "https://ark.cn-beijing.volces.com/api/v3"
    },
    {
      label: "TencentCloud",
      value: "tencentcloud",
      baseUrl: "https://api.lkeap.cloud.tencent.com/v1"
    },
    {
      label: "AliBaBaCloud",
      value: "alibabacloud",
      baseUrl: "https://dashscope.aliyuncs.com/compatible-mode/v1"
    }
  ];
  q = [
    "lmstudio",
    "llamafile",
    "ollama2",
    "llamacpp"
  ];
  ne = () => {
    const { t: a } = P([
      "openai",
      "settings"
    ]), [w, l] = u.useState(false), [i, o] = u.useState(null), h = E(), [c] = x.useForm(), [b, f] = u.useState(null), [S, r] = u.useState(false), [g, m] = u.useState("custom"), { data: C, isLoading: v } = Q({
      queryKey: [
        "openAIConfigs"
      ],
      queryFn: W
    }), I = k({
      mutationFn: J,
      onSuccess: (s) => {
        h.invalidateQueries({
          queryKey: [
            "openAIConfigs"
          ]
        }), l(false), N.success(a("addSuccess")), q.includes(g) || (f(s), r(true)), c.resetFields(), m("custom");
      }
    }), U = k({
      mutationFn: H,
      onSuccess: () => {
        h.invalidateQueries({
          queryKey: [
            "openAIConfigs"
          ]
        }), l(false), c.resetFields(), o(null), N.success(a("updateSuccess"));
      }
    }), y = k({
      mutationFn: $,
      onSuccess: () => {
        h.invalidateQueries({
          queryKey: [
            "openAIConfigs"
          ]
        }), N.success(a("deleteSuccess"));
      }
    }), M = (s) => {
      i ? U.mutate({
        id: i.id,
        ...s
      }) : I.mutate({
        ...s,
        provider: g
      });
    }, t = (s) => {
      o({
        ...s,
        headers: (s == null ? void 0 : s.headers) || []
      }), c.setFieldsValue({
        ...s,
        headers: (s == null ? void 0 : s.headers) || []
      }), l(true);
    }, d = (s) => {
      y.mutate(s);
    };
    return e.jsx("div", {
      children: e.jsxs("div", {
        children: [
          e.jsxs("div", {
            children: [
              e.jsx("h2", {
                className: "text-base font-semibold leading-7 text-gray-900 dark:text-white",
                children: a("heading")
              }),
              e.jsx("p", {
                className: "mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400",
                children: a("subheading")
              }),
              e.jsx("div", {
                className: "border border-b border-gray-200 dark:border-gray-600 mt-3 mb-6"
              })
            ]
          }),
          e.jsx("div", {
            className: "mb-6",
            children: e.jsx("div", {
              className: "-ml-4 -mt-2 flex flex-wrap items-center justify-end sm:flex-nowrap",
              children: e.jsx("div", {
                className: "ml-4 mt-2 flex-shrink-0",
                children: e.jsx("button", {
                  onClick: () => {
                    o(null), l(true), c.resetFields();
                  },
                  className: "inline-flex items-center rounded-md border border-transparent bg-black px-2 py-2 text-md font-medium leading-4 text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-white dark:text-gray-800 dark:hover:bg-gray-100 dark:focus:ring-gray-500 dark:focus:ring-offset-gray-100 disabled:opacity-50",
                  children: a("addBtn")
                })
              })
            })
          }),
          e.jsx(Y, {
            columns: [
              {
                title: a("table.name"),
                dataIndex: "name",
                key: "name"
              },
              {
                title: a("table.baseUrl"),
                dataIndex: "baseUrl",
                key: "baseUrl"
              },
              {
                title: a("table.actions"),
                key: "actions",
                render: (s, n) => e.jsxs("div", {
                  className: "flex gap-4",
                  children: [
                    e.jsx(F, {
                      title: a("edit"),
                      children: e.jsx("button", {
                        className: "text-gray-700 dark:text-gray-400",
                        onClick: () => t(n),
                        children: e.jsx(ae, {
                          className: "size-4"
                        })
                      })
                    }),
                    e.jsx(F, {
                      title: q.includes(n.provider) ? a("noNewModel") : a("newModel"),
                      children: e.jsx("button", {
                        className: "text-gray-700 dark:text-gray-400 disabled:opacity-50",
                        onClick: () => {
                          r(true), f(n.id);
                        },
                        disabled: !n.id || q.includes(n.provider),
                        children: e.jsx(se, {
                          className: "size-4"
                        })
                      })
                    }),
                    e.jsx(F, {
                      title: a("delete"),
                      children: e.jsx("button", {
                        className: "text-red-500 dark:text-red-400",
                        onClick: () => {
                          confirm(a("modal.deleteConfirm", {
                            name: n.name
                          })) && d(n.id);
                        },
                        children: e.jsx(L, {
                          className: "size-4"
                        })
                      })
                    })
                  ]
                })
              }
            ],
            dataSource: C,
            loading: v,
            rowKey: "id",
            bordered: true
          }),
          e.jsxs(T, {
            open: w,
            title: a(i ? "modal.titleEdit" : "modal.titleAdd"),
            onCancel: () => {
              l(false), o(null), m("custom"), c.resetFields();
            },
            footer: null,
            children: [
              !i && e.jsx(G, {
                value: g,
                onSelect: (s) => {
                  const n = z.find((A) => A.value === s);
                  c.setFieldsValue({
                    baseUrl: n == null ? void 0 : n.baseUrl,
                    name: n == null ? void 0 : n.label
                  }), m(s);
                },
                filterOption: (s, n) => {
                  var _a, _b, _c;
                  return ((_c = (_b = (_a = n == null ? void 0 : n.label) == null ? void 0 : _a.props["data-title"]) == null ? void 0 : _b.toLowerCase()) == null ? void 0 : _c.indexOf(s.toLowerCase())) >= 0;
                },
                showSearch: true,
                className: "w-full !mb-4",
                options: z.map((s) => ({
                  value: s.value,
                  label: e.jsxs("span", {
                    "data-title": s.label,
                    className: "flex flex-row gap-3 items-center ",
                    children: [
                      e.jsx(te, {
                        provider: s.value,
                        className: "size-5"
                      }),
                      e.jsx("span", {
                        className: "line-clamp-2",
                        children: s.label
                      })
                    ]
                  }, s.value)
                }))
              }),
              e.jsxs(x, {
                form: c,
                layout: "vertical",
                onFinish: M,
                initialValues: {
                  ...i
                },
                children: [
                  e.jsx(x.Item, {
                    name: "name",
                    label: a("modal.name.label"),
                    rules: [
                      {
                        required: true,
                        message: a("modal.name.required")
                      }
                    ],
                    children: e.jsx(p, {
                      size: "large",
                      placeholder: a("modal.name.placeholder")
                    })
                  }),
                  e.jsx(x.Item, {
                    name: "baseUrl",
                    label: a("modal.baseUrl.label"),
                    help: a("modal.baseUrl.help"),
                    rules: [
                      {
                        required: true,
                        message: a("modal.baseUrl.required")
                      }
                    ],
                    children: e.jsx(p, {
                      size: "large",
                      placeholder: a("modal.baseUrl.placeholder")
                    })
                  }),
                  e.jsx(x.Item, {
                    name: "apiKey",
                    label: a("modal.apiKey.label"),
                    children: e.jsx(p.Password, {
                      size: "large",
                      placeholder: a("modal.apiKey.placeholder")
                    })
                  }),
                  e.jsx(x.List, {
                    name: "headers",
                    children: (s, { add: n, remove: A }) => e.jsxs("div", {
                      className: "flex flex-col ",
                      children: [
                        e.jsxs("div", {
                          className: "flex justify-between items-center",
                          children: [
                            e.jsx("h3", {
                              className: "text-md font-semibold",
                              children: a("settings:ollamaSettings.settings.advanced.headers.label")
                            }),
                            e.jsx("button", {
                              type: "button",
                              className: "dark:bg-white dark:text-black text-white bg-black p-1.5 text-xs rounded-md",
                              onClick: () => {
                                n();
                              },
                              children: a("settings:ollamaSettings.settings.advanced.headers.add")
                            })
                          ]
                        }),
                        s.map((j, ie) => e.jsxs("div", {
                          className: "flex items-center   w-full",
                          children: [
                            e.jsxs("div", {
                              className: "flex-grow flex mt-3 space-x-4",
                              children: [
                                e.jsx(x.Item, {
                                  label: a("settings:ollamaSettings.settings.advanced.headers.key.label"),
                                  name: [
                                    j.name,
                                    "key"
                                  ],
                                  className: "flex-1 mb-0",
                                  children: e.jsx(p, {
                                    className: "w-full",
                                    placeholder: a("settings:ollamaSettings.settings.advanced.headers.key.placeholder")
                                  })
                                }),
                                e.jsx(x.Item, {
                                  label: a("settings:ollamaSettings.settings.advanced.headers.value.label"),
                                  name: [
                                    j.name,
                                    "value"
                                  ],
                                  className: "flex-1 mb-0",
                                  children: e.jsx(p, {
                                    className: "w-full",
                                    placeholder: a("settings:ollamaSettings.settings.advanced.headers.value.placeholder")
                                  })
                                })
                              ]
                            }),
                            e.jsx("button", {
                              type: "button",
                              onClick: () => {
                                A(j.name);
                              },
                              className: "shrink-0 ml-2 text-red-500 dark:text-red-400",
                              children: e.jsx(L, {
                                className: "w-5 h-5"
                              })
                            })
                          ]
                        }, j.key))
                      ]
                    })
                  }),
                  g === "lmstudio" && e.jsx("div", {
                    className: "text-xs text-gray-600 dark:text-gray-400 mb-4",
                    children: a("modal.tipLMStudio")
                  }),
                  e.jsx("button", {
                    type: "submit",
                    className: "inline-flex justify-center w-full text-center mt-4 items-center rounded-md border border-transparent bg-black px-2 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-white dark:text-gray-800 dark:hover:bg-gray-100 dark:focus:ring-gray-500 dark:focus:ring-offset-gray-100 disabled:opacity-50",
                    children: a(i ? "modal.update" : "modal.submit")
                  })
                ]
              })
            ]
          }),
          e.jsx(T, {
            open: S,
            title: a("modal.model.title"),
            footer: null,
            onCancel: () => r(false),
            children: b ? e.jsx(le, {
              openaiId: b,
              setOpenModelModal: r
            }) : null
          })
        ]
      })
    });
  };
  be = () => e.jsx(_, {
    children: e.jsx(R, {
      children: e.jsx(ne, {})
    })
  });
});
export {
  __tla,
  be as default
};
