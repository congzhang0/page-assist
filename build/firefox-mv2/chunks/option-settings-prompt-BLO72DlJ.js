import { e as U, r as n, a as V, j as e, __tla as __tla_0 } from "./FontSizeProvider-C1DZf1x-.js";
import { S as Z, __tla as __tla_1 } from "./SettingsOptionLayout-OzuGfHmE.js";
import { O as H, __tla as __tla_2 } from "./Layout-D44e2h93.js";
import { F as r, u as S, e as l, I as i, p as w, k as F, T as f, G as J } from "./SaveButton-B6h4W40A.js";
import { t as x, z as $, Z as W, T as X, F as Y, s as o, G as ee, H as te, J as se, K as re, L as ae, __tla as __tla_3 } from "./Sidebar-DZH9YUxk.js";
import { P as N, t as oe } from "./color-DZcOeaYD.js";
import { S as ne } from "./index-vMKz604o.js";
import { F as C, __tla as __tla_4 } from "./Table-D7-VcBcl.js";
import "./chevron-right-CHUn5UPl.js";
import "./index-23mm4Rzq.js";
import "./useBubbleLock-D9rWo-oM.js";
import "./index-Bva-imIy.js";
let je;
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
  let ie;
  ie = () => {
    const m = U(), [I, c] = n.useState(false), [E, d] = n.useState(false), [q, T] = n.useState(""), [h] = r.useForm(), [p] = r.useForm(), { t } = V([
      "settings",
      "common"
    ]), [P, z] = n.useState("custom"), [A, u] = n.useState(false), [K, R] = n.useState(""), [g] = r.useForm(), { data: _, status: y } = S({
      queryKey: [
        "fetchAllPrompts"
      ],
      queryFn: re
    }), { data: O, status: j } = S({
      queryKey: [
        "fetchCopilotPrompts"
      ],
      queryFn: ae
    }), { mutate: Q } = l({
      mutationFn: se,
      onSuccess: () => {
        m.invalidateQueries({
          queryKey: [
            "fetchAllPrompts"
          ]
        }), o.success({
          message: t("managePrompts.notification.deletedSuccess"),
          description: t("managePrompts.notification.deletedSuccessDesc")
        });
      },
      onError: (s) => {
        o.error({
          message: t("managePrompts.notification.error"),
          description: (s == null ? void 0 : s.message) || t("managePrompts.notification.someError")
        });
      }
    }), { mutate: D, isPending: b } = l({
      mutationFn: Y,
      onSuccess: () => {
        m.invalidateQueries({
          queryKey: [
            "fetchAllPrompts"
          ]
        }), c(false), h.resetFields(), o.success({
          message: t("managePrompts.notification.addSuccess"),
          description: t("managePrompts.notification.addSuccessDesc")
        });
      },
      onError: (s) => {
        o.error({
          message: t("managePrompts.notification.error"),
          description: (s == null ? void 0 : s.message) || t("managePrompts.notification.someError")
        });
      }
    }), { mutate: M, isPending: k } = l({
      mutationFn: async (s) => await ee({
        ...s,
        id: q
      }),
      onSuccess: () => {
        m.invalidateQueries({
          queryKey: [
            "fetchAllPrompts"
          ]
        }), d(false), p.resetFields(), o.success({
          message: t("managePrompts.notification.updatedSuccess"),
          description: t("managePrompts.notification.updatedSuccessDesc")
        });
      },
      onError: (s) => {
        o.error({
          message: t("managePrompts.notification.error"),
          description: (s == null ? void 0 : s.message) || t("managePrompts.notification.someError")
        });
      }
    }), { mutate: L, isPending: v } = l({
      mutationFn: async (s) => await te([
        {
          key: s.key,
          prompt: s.prompt
        }
      ]),
      onSuccess: () => {
        m.invalidateQueries({
          queryKey: [
            "fetchCopilotPrompts"
          ]
        }), u(false), g.resetFields(), o.success({
          message: t("managePrompts.notification.updatedSuccess"),
          description: t("managePrompts.notification.updatedSuccessDesc")
        });
      },
      onError: (s) => {
        o.error({
          message: t("managePrompts.notification.error"),
          description: (s == null ? void 0 : s.message) || t("managePrompts.notification.someError")
        });
      }
    });
    function B() {
      return e.jsxs("div", {
        children: [
          e.jsx("div", {
            className: "mb-6",
            children: e.jsx("div", {
              className: "-ml-4 -mt-2 flex flex-wrap items-center justify-end sm:flex-nowrap",
              children: e.jsx("div", {
                className: "ml-4 mt-2 flex-shrink-0",
                children: e.jsx("button", {
                  onClick: () => c(true),
                  className: "inline-flex items-center rounded-md border border-transparent bg-black px-2 py-2 text-md font-medium leading-4 text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-white dark:text-gray-800 dark:hover:bg-gray-100 dark:focus:ring-gray-500 dark:focus:ring-offset-gray-100 disabled:opacity-50",
                  children: t("managePrompts.addBtn")
                })
              })
            })
          }),
          y === "pending" && e.jsx(F, {
            paragraph: {
              rows: 8
            }
          }),
          y === "success" && e.jsx(C, {
            columns: [
              {
                title: t("managePrompts.columns.title"),
                dataIndex: "title",
                key: "title",
                render: (s) => e.jsx("span", {
                  className: "line-clamp-1",
                  children: s
                })
              },
              {
                title: t("managePrompts.columns.prompt"),
                dataIndex: "content",
                key: "content",
                render: (s) => e.jsx("span", {
                  className: "line-clamp-1",
                  children: s
                })
              },
              {
                title: t("managePrompts.columns.type"),
                dataIndex: "is_system",
                key: "is_system",
                render: (s) => e.jsx("span", {
                  className: "flex items-center gap-2 text-xs w-32",
                  children: s ? e.jsxs(e.Fragment, {
                    children: [
                      e.jsx($, {
                        className: "size-4"
                      }),
                      " ",
                      t("managePrompts.systemPrompt")
                    ]
                  }) : e.jsxs(e.Fragment, {
                    children: [
                      e.jsx(W, {
                        className: "size-4"
                      }),
                      " ",
                      t("managePrompts.quickPrompt")
                    ]
                  })
                })
              },
              {
                title: t("managePrompts.columns.actions"),
                render: (s, a) => e.jsxs("div", {
                  className: "flex gap-4",
                  children: [
                    e.jsx(f, {
                      title: t("managePrompts.tooltip.delete"),
                      children: e.jsx("button", {
                        onClick: () => {
                          window.confirm(t("managePrompts.confirm.delete")) && Q(a.id);
                        },
                        className: "text-red-500 dark:text-red-400",
                        children: e.jsx(J, {
                          className: "size-4"
                        })
                      })
                    }),
                    e.jsx(f, {
                      title: t("managePrompts.tooltip.edit"),
                      children: e.jsx("button", {
                        onClick: () => {
                          T(a.id), p.setFieldsValue(a), d(true);
                        },
                        className: "text-gray-500 dark:text-gray-400",
                        children: e.jsx(N, {
                          className: "size-4"
                        })
                      })
                    })
                  ]
                })
              }
            ],
            bordered: true,
            dataSource: _,
            rowKey: (s) => s.id
          })
        ]
      });
    }
    function G() {
      return e.jsxs("div", {
        children: [
          j === "pending" && e.jsx(F, {
            paragraph: {
              rows: 8
            }
          }),
          j === "success" && e.jsx(C, {
            columns: [
              {
                title: t("managePrompts.columns.title"),
                dataIndex: "key",
                key: "key",
                render: (s) => e.jsx("span", {
                  className: "line-clamp-1",
                  children: e.jsx(X, {
                    color: oe[s || "default"],
                    children: t(`common:copilot.${s}`)
                  })
                })
              },
              {
                title: t("managePrompts.columns.prompt"),
                dataIndex: "prompt",
                key: "prompt",
                render: (s) => e.jsx("span", {
                  className: "line-clamp-1",
                  children: s
                })
              },
              {
                render: (s, a) => e.jsx("div", {
                  className: "flex gap-4",
                  children: e.jsx(f, {
                    title: t("managePrompts.tooltip.edit"),
                    children: e.jsx("button", {
                      onClick: () => {
                        R(a.key), g.setFieldsValue(a), u(true);
                      },
                      className: "text-gray-500 dark:text-gray-400",
                      children: e.jsx(N, {
                        className: "size-4"
                      })
                    })
                  })
                })
              }
            ],
            bordered: true,
            dataSource: O,
            rowKey: (s) => s.key
          })
        ]
      });
    }
    return e.jsxs("div", {
      children: [
        e.jsx("div", {
          className: "flex items-center justify-end mb-6",
          children: e.jsx(ne, {
            size: "large",
            options: [
              {
                label: t("managePrompts.segmented.custom"),
                value: "custom"
              },
              {
                label: t("managePrompts.segmented.copilot"),
                value: "copilot"
              }
            ],
            onChange: (s) => {
              z(s);
            }
          })
        }),
        P === "custom" && B(),
        P === "copilot" && G(),
        e.jsx(x, {
          title: t("managePrompts.modal.addTitle"),
          open: I,
          onCancel: () => c(false),
          footer: null,
          children: e.jsxs(r, {
            onFinish: (s) => D(s),
            layout: "vertical",
            form: h,
            children: [
              e.jsx(r.Item, {
                name: "title",
                label: t("managePrompts.form.title.label"),
                rules: [
                  {
                    required: true,
                    message: t("managePrompts.form.title.required")
                  }
                ],
                children: e.jsx(i, {
                  placeholder: t("managePrompts.form.title.placeholder")
                })
              }),
              e.jsx(r.Item, {
                name: "content",
                label: t("managePrompts.form.prompt.label"),
                rules: [
                  {
                    required: true,
                    message: t("managePrompts.form.prompt.required")
                  }
                ],
                help: t("managePrompts.form.prompt.help"),
                children: e.jsx(i.TextArea, {
                  placeholder: t("managePrompts.form.prompt.placeholder"),
                  autoSize: {
                    minRows: 3,
                    maxRows: 10
                  }
                })
              }),
              e.jsx(r.Item, {
                name: "is_system",
                label: t("managePrompts.form.isSystem.label"),
                valuePropName: "checked",
                children: e.jsx(w, {})
              }),
              e.jsx(r.Item, {
                children: e.jsx("button", {
                  disabled: b,
                  className: "inline-flex justify-center w-full text-center mt-4 items-center rounded-md border border-transparent bg-black px-2 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-white dark:text-gray-800 dark:hover:bg-gray-100 dark:focus:ring-gray-500 dark:focus:ring-offset-gray-100 disabled:opacity-50 ",
                  children: t(b ? "managePrompts.form.btnSave.saving" : "managePrompts.form.btnSave.save")
                })
              })
            ]
          })
        }),
        e.jsx(x, {
          title: t("managePrompts.modal.editTitle"),
          open: E,
          onCancel: () => d(false),
          footer: null,
          children: e.jsxs(r, {
            onFinish: (s) => M(s),
            layout: "vertical",
            form: p,
            children: [
              e.jsx(r.Item, {
                name: "title",
                label: t("managePrompts.form.title.label"),
                rules: [
                  {
                    required: true,
                    message: t("managePrompts.form.title.required")
                  }
                ],
                children: e.jsx(i, {
                  placeholder: t("managePrompts.form.title.placeholder")
                })
              }),
              e.jsx(r.Item, {
                name: "content",
                label: t("managePrompts.form.prompt.label"),
                rules: [
                  {
                    required: true,
                    message: t("managePrompts.form.prompt.required")
                  }
                ],
                help: t("managePrompts.form.prompt.help"),
                children: e.jsx(i.TextArea, {
                  placeholder: t("managePrompts.form.prompt.placeholder"),
                  autoSize: {
                    minRows: 3,
                    maxRows: 10
                  }
                })
              }),
              e.jsx(r.Item, {
                name: "is_system",
                label: t("managePrompts.form.isSystem.label"),
                valuePropName: "checked",
                children: e.jsx(w, {})
              }),
              e.jsx(r.Item, {
                children: e.jsx("button", {
                  disabled: k,
                  className: "inline-flex justify-center w-full text-center mt-4 items-center rounded-md border border-transparent bg-black px-2 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-white dark:text-gray-800 dark:hover:bg-gray-100 dark:focus:ring-gray-500 dark:focus:ring-offset-gray-100 disabled:opacity-50 ",
                  children: t(k ? "managePrompts.form.btnEdit.saving" : "managePrompts.form.btnEdit.save")
                })
              })
            ]
          })
        }),
        e.jsx(x, {
          title: t("managePrompts.modal.editTitle"),
          open: A,
          onCancel: () => u(false),
          footer: null,
          children: e.jsxs(r, {
            onFinish: (s) => L({
              key: K,
              prompt: s.prompt
            }),
            layout: "vertical",
            form: g,
            children: [
              e.jsx(r.Item, {
                name: "prompt",
                label: t("managePrompts.form.prompt.label"),
                rules: [
                  {
                    required: true,
                    message: t("managePrompts.form.prompt.required")
                  },
                  {
                    validator: (s, a) => a && a.includes("{text}") ? Promise.resolve() : Promise.reject(new Error(t("managePrompts.form.prompt.missingTextPlaceholder")))
                  }
                ],
                children: e.jsx(i.TextArea, {
                  placeholder: t("managePrompts.form.prompt.placeholder"),
                  autoSize: {
                    minRows: 3,
                    maxRows: 10
                  }
                })
              }),
              e.jsx(r.Item, {
                children: e.jsx("button", {
                  disabled: v,
                  className: "inline-flex justify-center w-full text-center mt-4 items-center rounded-md border border-transparent bg-black px-2 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-white dark:text-gray-800 dark:hover:bg-gray-100 dark:focus:ring-gray-500 dark:focus:ring-offset-gray-100 disabled:opacity-50 ",
                  children: t(v ? "managePrompts.form.btnEdit.saving" : "managePrompts.form.btnEdit.save")
                })
              })
            ]
          })
        })
      ]
    });
  };
  je = () => e.jsx(H, {
    children: e.jsx(Z, {
      children: e.jsx(ie, {})
    })
  });
});
export {
  __tla,
  je as default
};
