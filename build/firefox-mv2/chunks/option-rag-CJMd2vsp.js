import { a as x, c as R, e as b, j as e, __tla as __tla_0 } from "./FontSizeProvider-C1DZf1x-.js";
import { S as k, __tla as __tla_1 } from "./SettingsOptionLayout-OzuGfHmE.js";
import { O, __tla as __tla_2 } from "./Layout-D44e2h93.js";
import { u as y, k as j, F as a, I as n, l as h, n as I, ap as N, t as E, aq as K, ar as z, e as B, S, o as c, q as T, v as U, w as A, x as C, h as D, y as M, as as G, at as Q, au as V } from "./SaveButton-B6h4W40A.js";
import { R as u } from "./index-Bva-imIy.js";
import { S as L } from "./sidepanel-rag-HIjhea93.js";
import { A as W, af as H, __tla as __tla_3 } from "./Sidebar-DZH9YUxk.js";
import "./chevron-right-CHUn5UPl.js";
import "./useBubbleLock-D9rWo-oM.js";
let le;
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
  let J, X;
  J = () => {
    const { t: r } = x("settings"), [o, g] = R.useState("rag"), p = b(), { status: s, data: l } = y({
      queryKey: [
        "fetchRagPrompt"
      ],
      queryFn: async () => {
        const [i, m, t] = await Promise.all([
          E(),
          K(),
          z()
        ]);
        return {
          prompt: i,
          webSearchPrompt: m,
          webSearchFollowUpPrompt: t
        };
      }
    });
    return e.jsxs("div", {
      className: "flex flex-col gap-3",
      children: [
        s === "pending" && e.jsx(j, {
          paragraph: {
            rows: 4
          },
          active: true
        }),
        s === "success" && e.jsxs("div", {
          children: [
            e.jsx("div", {
              className: "my-3 flex justify-end",
              children: e.jsxs(u.Group, {
                defaultValue: o,
                onChange: (i) => g(i.target.value),
                children: [
                  e.jsx(u.Button, {
                    value: "rag",
                    children: "RAG"
                  }),
                  e.jsx(u.Button, {
                    value: "web",
                    children: r("rag.prompt.option2")
                  })
                ]
              })
            }),
            o === "rag" && e.jsxs(a, {
              layout: "vertical",
              onFinish: (i) => {
                I((i == null ? void 0 : i.systemPrompt) || "", (i == null ? void 0 : i.questionPrompt) || ""), p.invalidateQueries({
                  queryKey: [
                    "fetchRagPrompt"
                  ]
                });
              },
              initialValues: {
                systemPrompt: l.prompt.ragPrompt,
                questionPrompt: l.prompt.ragQuestionPrompt
              },
              children: [
                e.jsx(a.Item, {
                  label: r("managePrompts.systemPrompt"),
                  name: "systemPrompt",
                  rules: [
                    {
                      required: true,
                      message: "Enter a prompt."
                    }
                  ],
                  children: e.jsx(n.TextArea, {
                    value: l.webSearchPrompt,
                    rows: 5,
                    placeholder: "Enter a prompt."
                  })
                }),
                e.jsx(a.Item, {
                  label: r("managePrompts.questionPrompt"),
                  name: "questionPrompt",
                  rules: [
                    {
                      required: true,
                      message: "Enter a follow up prompt."
                    }
                  ],
                  children: e.jsx(n.TextArea, {
                    value: l.webSearchFollowUpPrompt,
                    rows: 5,
                    placeholder: r("rag.prompt.webSearchFollowUpPromptPlaceholder")
                  })
                }),
                e.jsxs(a.Item, {
                  children: [
                    e.jsx("div", {
                      className: "flex justify-end",
                      children: e.jsx(h, {
                        btnType: "submit"
                      })
                    }),
                    " "
                  ]
                })
              ]
            }),
            o === "web" && e.jsxs(a, {
              layout: "vertical",
              onFinish: (i) => {
                N((i == null ? void 0 : i.webSearchPrompt) || "", (i == null ? void 0 : i.webSearchFollowUpPrompt) || ""), p.invalidateQueries({
                  queryKey: [
                    "fetchRagPrompt"
                  ]
                });
              },
              initialValues: {
                webSearchPrompt: l.webSearchPrompt,
                webSearchFollowUpPrompt: l.webSearchFollowUpPrompt
              },
              children: [
                e.jsx(a.Item, {
                  label: r("rag.prompt.webSearchPrompt"),
                  name: "webSearchPrompt",
                  help: r("rag.prompt.webSearchPromptHelp"),
                  rules: [
                    {
                      required: true,
                      message: r("rag.prompt.webSearchPromptError")
                    }
                  ],
                  children: e.jsx(n.TextArea, {
                    value: l.webSearchPrompt,
                    rows: 5,
                    placeholder: r("rag.prompt.webSearchPromptPlaceholder")
                  })
                }),
                e.jsx(a.Item, {
                  label: r("rag.prompt.webSearchFollowUpPrompt"),
                  name: "webSearchFollowUpPrompt",
                  help: r("rag.prompt.webSearchFollowUpPromptHelp"),
                  rules: [
                    {
                      required: true,
                      message: r("rag.prompt.webSearchFollowUpPromptError")
                    }
                  ],
                  children: e.jsx(n.TextArea, {
                    value: l.webSearchFollowUpPrompt,
                    rows: 5,
                    placeholder: r("rag.prompt.webSearchFollowUpPromptPlaceholder")
                  })
                }),
                e.jsxs(a.Item, {
                  children: [
                    e.jsx("div", {
                      className: "flex justify-end",
                      children: e.jsx(h, {
                        btnType: "submit"
                      })
                    }),
                    " "
                  ]
                })
              ]
            })
          ]
        })
      ]
    });
  };
  X = () => {
    var _a;
    const { t: r } = x("settings"), [o] = a.useForm(), g = a.useWatch("splittingStrategy", o), p = b(), { data: s, status: l } = y({
      queryKey: [
        "fetchRAGSettings"
      ],
      queryFn: async () => {
        const [t, d, v, w, P, f, F, q] = await Promise.all([
          U({
            returnEmpty: true
          }),
          A(),
          C(),
          D(),
          M(),
          G(),
          Q(),
          V()
        ]);
        return {
          models: t,
          chunkOverlap: d,
          chunkSize: v,
          defaultEM: w,
          totalFilePerKB: P,
          noOfRetrievedDocs: f,
          splittingStrategy: F,
          splittingSeparator: q
        };
      }
    }), { mutate: i, isPending: m } = B({
      mutationFn: async (t) => (await T(t.model, t.chunkSize, t.overlap, t.totalFilePerKB, t.noOfRetrievedDocs, t.strategy, t.separator), true),
      onSuccess: () => {
        p.invalidateQueries({
          queryKey: [
            "fetchRAGSettings"
          ]
        });
      }
    });
    return e.jsxs("div", {
      className: "flex flex-col space-y-3",
      children: [
        l === "pending" && e.jsx(j, {
          paragraph: {
            rows: 4
          },
          active: true
        }),
        l === "success" && e.jsxs("div", {
          className: "flex flex-col space-y-6",
          children: [
            e.jsxs("div", {
              children: [
                e.jsxs("div", {
                  children: [
                    e.jsx("h2", {
                      className: "text-base font-semibold leading-7 text-gray-900 dark:text-white",
                      children: r("rag.ragSettings.label")
                    }),
                    e.jsx("div", {
                      className: "border border-b border-gray-200 dark:border-gray-600 mt-3 mb-6"
                    })
                  ]
                }),
                e.jsxs(a, {
                  form: o,
                  layout: "vertical",
                  onFinish: (t) => {
                    i({
                      model: t.defaultEM,
                      chunkSize: t.chunkSize,
                      overlap: t.chunkOverlap,
                      totalFilePerKB: t.totalFilePerKB,
                      noOfRetrievedDocs: t.noOfRetrievedDocs,
                      separator: t.splittingSeparator,
                      strategy: t.splittingStrategy
                    });
                  },
                  initialValues: {
                    chunkSize: s == null ? void 0 : s.chunkSize,
                    chunkOverlap: s == null ? void 0 : s.chunkOverlap,
                    defaultEM: s == null ? void 0 : s.defaultEM,
                    totalFilePerKB: s == null ? void 0 : s.totalFilePerKB,
                    noOfRetrievedDocs: s == null ? void 0 : s.noOfRetrievedDocs,
                    splittingStrategy: s == null ? void 0 : s.splittingStrategy,
                    splittingSeparator: s == null ? void 0 : s.splittingSeparator
                  },
                  children: [
                    e.jsx(a.Item, {
                      name: "defaultEM",
                      label: r("rag.ragSettings.model.label"),
                      help: r("rag.ragSettings.model.help"),
                      rules: [
                        {
                          required: true,
                          message: r("rag.ragSettings.model.required")
                        }
                      ],
                      children: e.jsx(S, {
                        size: "large",
                        showSearch: true,
                        placeholder: r("rag.ragSettings.model.placeholder"),
                        style: {
                          width: "100%"
                        },
                        className: "mt-4",
                        filterOption: (t, d) => d.label.key.toLowerCase().indexOf(t.toLowerCase()) >= 0,
                        options: (_a = s.models) == null ? void 0 : _a.map((t) => ({
                          label: e.jsxs("span", {
                            className: "flex flex-row gap-3 items-center truncate",
                            children: [
                              (t == null ? void 0 : t.avatar) ? e.jsx(W, {
                                src: t.avatar,
                                alt: t.name,
                                size: "small"
                              }) : e.jsx(H, {
                                provider: t == null ? void 0 : t.provider,
                                className: "w-5 h-5"
                              }),
                              e.jsx("span", {
                                className: "truncate",
                                children: (t == null ? void 0 : t.nickname) || (t == null ? void 0 : t.name)
                              })
                            ]
                          }, t.model),
                          value: t.model
                        }))
                      })
                    }),
                    e.jsx(a.Item, {
                      name: "splittingStrategy",
                      label: r("rag.ragSettings.splittingStrategy.label"),
                      rules: [
                        {
                          required: true,
                          message: r("rag.ragSettings.model.required")
                        }
                      ],
                      children: e.jsx(S, {
                        size: "large",
                        showSearch: true,
                        style: {
                          width: "100%"
                        },
                        className: "mt-4",
                        options: [
                          "RecursiveCharacterTextSplitter",
                          "CharacterTextSplitter"
                        ].map((t) => ({
                          label: t,
                          value: t
                        }))
                      })
                    }),
                    g !== "RecursiveCharacterTextSplitter" && e.jsx(a.Item, {
                      name: "splittingSeparator",
                      label: r("rag.ragSettings.splittingSeparator.label"),
                      rules: [
                        {
                          required: true,
                          message: r("rag.ragSettings.splittingSeparator.required")
                        }
                      ],
                      children: e.jsx(n, {
                        size: "large",
                        style: {
                          width: "100%"
                        },
                        placeholder: r("rag.ragSettings.splittingSeparator.placeholder")
                      })
                    }),
                    e.jsx(a.Item, {
                      name: "chunkSize",
                      label: r("rag.ragSettings.chunkSize.label"),
                      rules: [
                        {
                          required: true,
                          message: r("rag.ragSettings.chunkSize.required")
                        }
                      ],
                      children: e.jsx(c, {
                        style: {
                          width: "100%"
                        },
                        placeholder: r("rag.ragSettings.chunkSize.placeholder")
                      })
                    }),
                    e.jsx(a.Item, {
                      name: "chunkOverlap",
                      label: r("rag.ragSettings.chunkOverlap.label"),
                      rules: [
                        {
                          required: true,
                          message: r("rag.ragSettings.chunkOverlap.required")
                        }
                      ],
                      children: e.jsx(c, {
                        style: {
                          width: "100%"
                        },
                        placeholder: r("rag.ragSettings.chunkOverlap.placeholder")
                      })
                    }),
                    e.jsx(a.Item, {
                      name: "noOfRetrievedDocs",
                      label: r("rag.ragSettings.noOfRetrievedDocs.label"),
                      rules: [
                        {
                          required: true,
                          message: r("rag.ragSettings.noOfRetrievedDocs.required")
                        }
                      ],
                      children: e.jsx(c, {
                        style: {
                          width: "100%"
                        },
                        placeholder: r("rag.ragSettings.noOfRetrievedDocs.placeholder")
                      })
                    }),
                    e.jsx(a.Item, {
                      name: "totalFilePerKB",
                      label: r("rag.ragSettings.totalFilePerKB.label"),
                      rules: [
                        {
                          required: true,
                          message: r("rag.ragSettings.totalFilePerKB.required")
                        }
                      ],
                      children: e.jsx(c, {
                        style: {
                          width: "100%"
                        },
                        min: 1,
                        placeholder: r("rag.ragSettings.totalFilePerKB.placeholder")
                      })
                    }),
                    e.jsx("div", {
                      className: "flex justify-end",
                      children: e.jsx(h, {
                        disabled: m,
                        btnType: "submit"
                      })
                    })
                  ]
                })
              ]
            }),
            e.jsx(L, {}),
            e.jsxs("div", {
              children: [
                e.jsxs("div", {
                  children: [
                    e.jsx("h2", {
                      className: "text-base font-semibold leading-7 text-gray-900 dark:text-white",
                      children: r("rag.prompt.label")
                    }),
                    e.jsx("div", {
                      className: "border border-b border-gray-200 dark:border-gray-600 mt-3 mb-6"
                    })
                  ]
                }),
                e.jsx(J, {})
              ]
            })
          ]
        })
      ]
    });
  };
  le = () => e.jsx(O, {
    children: e.jsx(k, {
      children: e.jsx(X, {})
    })
  });
});
export {
  __tla,
  le as default
};
