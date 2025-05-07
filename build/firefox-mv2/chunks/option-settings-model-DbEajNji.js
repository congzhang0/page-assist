import { g as oe, a as k, e as S, c as B, j as e, f as G, r as j, __tla as __tla_0 } from "./FontSizeProvider-C1DZf1x-.js";
import { S as ne, __tla as __tla_1 } from "./SettingsOptionLayout-OzuGfHmE.js";
import { O as re, __tla as __tla_2 } from "./Layout-D44e2h93.js";
import { d as R, R as ie } from "./rotate-ccw-DqNPwFS7.js";
import { c as de, F as o, e as v, D as me, I as _, l as ce, u as C, k as T, o as h, C as ue, p as V, E as fe, T as I, G as U, b as Z, H as ge, J as pe, K as he, S as $, M as xe, N as ye } from "./SaveButton-B6h4W40A.js";
import { t as F, v as H, w as J, s as z, A as W, x as X, T as Y, y as je, __tla as __tla_3 } from "./Sidebar-DZH9YUxk.js";
import { L as D } from "./loader-2-DQbjhJ0G.js";
import { u as ee } from "./use-form-JlyzcUxc.js";
import { F as Q, __tla as __tla_4 } from "./Table-D7-VcBcl.js";
import { R as O } from "./index-Bva-imIy.js";
import { S as be } from "./index-vMKz604o.js";
import "./chevron-right-CHUn5UPl.js";
import "./index-23mm4Rzq.js";
import "./useBubbleLock-D9rWo-oM.js";
let Ze;
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
  const te = de("Settings", [
    [
      "path",
      {
        d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
        key: "1qme2f"
      }
    ],
    [
      "circle",
      {
        cx: "12",
        cy: "12",
        r: "3",
        key: "1v7zrd"
      }
    ]
  ]);
  var A = {
    exports: {}
  }, Me = A.exports, L;
  function ve() {
    return L || (L = 1, function(r, a) {
      (function(l, d) {
        r.exports = d();
      })(Me, function() {
        return function(l, d, t) {
          l = l || {};
          var i = d.prototype, s = {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
          };
          function g(m, n, x, b) {
            return i.fromToBase(m, n, x, b);
          }
          t.en.relativeTime = s, i.fromToBase = function(m, n, x, b, y) {
            for (var f, w, c, p = x.$locale().relativeTime || s, K = l.thresholds || [
              {
                l: "s",
                r: 44,
                d: "second"
              },
              {
                l: "m",
                r: 89
              },
              {
                l: "mm",
                r: 44,
                d: "minute"
              },
              {
                l: "h",
                r: 89
              },
              {
                l: "hh",
                r: 21,
                d: "hour"
              },
              {
                l: "d",
                r: 35
              },
              {
                l: "dd",
                r: 25,
                d: "day"
              },
              {
                l: "M",
                r: 45
              },
              {
                l: "MM",
                r: 10,
                d: "month"
              },
              {
                l: "y",
                r: 17
              },
              {
                l: "yy",
                d: "year"
              }
            ], se = K.length, q = 0; q < se; q += 1) {
              var M = K[q];
              M.d && (f = b ? t(m).diff(x, M.d, true) : x.diff(m, M.d, true));
              var N = (l.rounding || Math.round)(Math.abs(f));
              if (c = f > 0, N <= M.r || !M.r) {
                N <= 1 && q > 0 && (M = K[q - 1]);
                var P = p[M.l];
                y && (N = y("" + N)), w = typeof P == "string" ? P.replace("%d", N) : P(N, n, M.l, c);
                break;
              }
            }
            if (n) return w;
            var E = c ? p.future : p.past;
            return typeof E == "function" ? E(w) : E.replace("%s", w);
          }, i.to = function(m, n) {
            return g(m, n, this, true);
          }, i.from = function(m, n) {
            return g(m, n, this);
          };
          var u = function(m) {
            return m.$u ? t.utc() : t();
          };
          i.toNow = function(m) {
            return this.to(u(this), m);
          }, i.fromNow = function(m) {
            return this.from(u(this), m);
          };
        };
      });
    }(A)), A.exports;
  }
  var ke = ve();
  const ae = oe(ke), Se = [
    "byte",
    "kilobyte",
    "megabyte",
    "gigabyte",
    "terabyte",
    "petabyte"
  ], we = (r) => {
    const a = r == 0 ? 0 : Math.floor(Math.log(r) / Math.log(1024));
    return {
      value: r / Math.pow(1024, a),
      unit: Se[a]
    };
  }, Ne = (r) => {
    const { unit: a, value: l } = we(r);
    return new Intl.NumberFormat("en", {
      notation: "compact",
      style: "unit",
      unit: a
    }).format(l);
  }, le = ({ model_id: r, open: a, setOpen: l, model_avatar: d, model_name: t }) => {
    const [i] = o.useForm(), { t: s } = k("openai"), g = S();
    B.useEffect(() => {
      i.setFieldsValue({
        model_name: t,
        model_avatar: d
      });
    }, [
      r,
      d,
      t
    ]);
    const { mutate: u } = v({
      mutationFn: me,
      onSuccess: async () => {
        await g.invalidateQueries({
          queryKey: [
            "fetchModel"
          ]
        }), await g.invalidateQueries({
          queryKey: [
            "fetchAllModels"
          ]
        }), await g.invalidateQueries({
          queryKey: [
            "fetchCustomModels"
          ]
        }), l(false);
      }
    });
    return e.jsx(F, {
      title: s("nicknameModal.title"),
      open: a,
      onCancel: () => l(false),
      footer: null,
      children: e.jsxs(o, {
        form: i,
        layout: "vertical",
        initialValues: {
          model_name: t,
          model_avatar: d
        },
        onFinish: async (m) => {
          await u({
            model_id: r,
            ...m
          });
        },
        children: [
          e.jsx(o.Item, {
            name: "model_name",
            label: s("nicknameModal.form.modelName.label"),
            rules: [
              {
                required: true,
                message: s("nicknameModal.form.modelName.required")
              }
            ],
            children: e.jsx(_, {
              placeholder: "DeepSeek R1"
            })
          }),
          e.jsx(o.Item, {
            name: "model_avatar",
            label: s("nicknameModal.form.modelAvatar.label"),
            help: s("nicknameModal.form.modelAvatar.help"),
            children: e.jsx(_, {
              placeholder: "https://example.com/model.png"
            })
          }),
          e.jsx(ce, {
            btnType: "submit",
            className: "w-full flex justify-center"
          })
        ]
      })
    });
  }, Ie = ({ model_id: r, open: a, setOpen: l }) => {
    const [d] = o.useForm(), { t } = k("common"), i = S(), { status: s, isError: g } = C({
      queryKey: [
        "fetchModelSettings",
        r
      ],
      queryFn: async () => {
        const n = await J(r);
        return d.setFieldsValue(n), n;
      },
      staleTime: 0
    }), { mutate: u, isPending: m } = v({
      mutationFn: H,
      onSuccess: async () => {
        await i.invalidateQueries({
          queryKey: [
            "fetchModel"
          ]
        }), await i.invalidateQueries({
          queryKey: [
            "fetchAllModels"
          ]
        }), await i.invalidateQueries({
          queryKey: [
            "fetchCustomModels"
          ]
        }), l(false);
      }
    });
    return e.jsxs(F, {
      title: t("modelSettings.label"),
      open: a,
      onCancel: () => {
        l(false);
      },
      footer: null,
      children: [
        s === "pending" && e.jsx(T, {
          active: true
        }),
        s === "success" && e.jsxs(o, {
          onFinish: (n) => {
            u({
              model_id: r,
              settings: n
            });
          },
          form: d,
          layout: "vertical",
          children: [
            e.jsx(o.Item, {
              name: "keepAlive",
              help: t("modelSettings.form.keepAlive.help"),
              label: t("modelSettings.form.keepAlive.label"),
              children: e.jsx(_, {
                size: "large",
                placeholder: t("modelSettings.form.keepAlive.placeholder")
              })
            }),
            e.jsx(o.Item, {
              name: "temperature",
              label: t("modelSettings.form.temperature.label"),
              children: e.jsx(h, {
                size: "large",
                style: {
                  width: "100%"
                },
                placeholder: t("modelSettings.form.temperature.placeholder")
              })
            }),
            e.jsx(o.Item, {
              name: "numCtx",
              label: t("modelSettings.form.numCtx.label"),
              children: e.jsx(h, {
                style: {
                  width: "100%"
                },
                placeholder: t("modelSettings.form.numCtx.placeholder"),
                size: "large"
              })
            }),
            e.jsx(o.Item, {
              name: "numPredict",
              label: t("modelSettings.form.numPredict.label"),
              children: e.jsx(h, {
                style: {
                  width: "100%"
                },
                placeholder: t("modelSettings.form.numPredict.placeholder")
              })
            }),
            e.jsx(ue, {
              ghost: true,
              className: "border-none bg-transparent",
              items: [
                {
                  key: "1",
                  label: t("modelSettings.advanced"),
                  children: e.jsxs(B.Fragment, {
                    children: [
                      e.jsx(o.Item, {
                        name: "topK",
                        label: t("modelSettings.form.topK.label"),
                        children: e.jsx(h, {
                          style: {
                            width: "100%"
                          },
                          placeholder: t("modelSettings.form.topK.placeholder"),
                          size: "large"
                        })
                      }),
                      e.jsx(o.Item, {
                        name: "topP",
                        label: t("modelSettings.form.topP.label"),
                        children: e.jsx(h, {
                          style: {
                            width: "100%"
                          },
                          size: "large",
                          placeholder: t("modelSettings.form.topP.placeholder")
                        })
                      }),
                      e.jsx(o.Item, {
                        name: "numGpu",
                        label: t("modelSettings.form.numGpu.label"),
                        children: e.jsx(h, {
                          style: {
                            width: "100%"
                          },
                          size: "large",
                          placeholder: t("modelSettings.form.numGpu.placeholder")
                        })
                      }),
                      e.jsx(o.Item, {
                        name: "minP",
                        label: t("modelSettings.form.minP.label"),
                        children: e.jsx(h, {
                          style: {
                            width: "100%"
                          },
                          placeholder: t("modelSettings.form.minP.placeholder")
                        })
                      }),
                      e.jsx(o.Item, {
                        name: "repeatPenalty",
                        label: t("modelSettings.form.repeatPenalty.label"),
                        children: e.jsx(h, {
                          style: {
                            width: "100%"
                          },
                          placeholder: t("modelSettings.form.repeatPenalty.placeholder")
                        })
                      }),
                      e.jsx(o.Item, {
                        name: "repeatLastN",
                        label: t("modelSettings.form.repeatLastN.label"),
                        children: e.jsx(h, {
                          style: {
                            width: "100%"
                          },
                          placeholder: t("modelSettings.form.repeatLastN.placeholder")
                        })
                      }),
                      e.jsx(o.Item, {
                        name: "tfsZ",
                        label: t("modelSettings.form.tfsZ.label"),
                        children: e.jsx(h, {
                          style: {
                            width: "100%"
                          },
                          placeholder: t("modelSettings.form.tfsZ.placeholder")
                        })
                      }),
                      e.jsx(o.Item, {
                        name: "numKeep",
                        label: t("modelSettings.form.numKeep.label"),
                        children: e.jsx(h, {
                          style: {
                            width: "100%"
                          },
                          placeholder: t("modelSettings.form.numKeep.placeholder")
                        })
                      }),
                      e.jsx(o.Item, {
                        name: "numThread",
                        label: t("modelSettings.form.numThread.label"),
                        children: e.jsx(h, {
                          style: {
                            width: "100%"
                          },
                          placeholder: t("modelSettings.form.numThread.placeholder")
                        })
                      }),
                      e.jsx(o.Item, {
                        name: "useMMap",
                        label: t("modelSettings.form.useMMap.label"),
                        children: e.jsx(V, {})
                      }),
                      e.jsx(o.Item, {
                        name: "useMlock",
                        label: t("modelSettings.form.useMlock.label"),
                        children: e.jsx(V, {})
                      })
                    ]
                  })
                }
              ]
            }),
            e.jsx("button", {
              type: "submit",
              className: "inline-flex justify-center w-full text-center mt-4 items-center rounded-md border border-transparent bg-black px-2 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-white dark:text-gray-800 dark:hover:bg-gray-100 dark:focus:ring-gray-500 dark:focus:ring-offset-gray-100 disabled:opacity-50 ",
              children: m ? e.jsx(D, {
                className: "mr-2 h-4 w-4 animate-spin"
              }) : t("save")
            })
          ]
        })
      ]
    });
  };
  R.extend(ae);
  const _e = () => {
    const r = S(), { t: a } = k([
      "settings",
      "common",
      "openai"
    ]), [l, d] = G("selectedModel"), [t, i] = j.useState(false), [s, g] = j.useState(false), [u, m] = j.useState({
      model_id: "",
      model_name: "",
      model_avatar: ""
    }), n = ee({
      initialValues: {
        model: ""
      }
    }), { data: x, status: b } = C({
      queryKey: [
        "fetchAllModels"
      ],
      queryFn: async () => await ge({
        returnEmpty: true
      })
    }), { mutate: y } = v({
      mutationFn: fe,
      onSuccess: () => {
        r.invalidateQueries({
          queryKey: [
            "fetchAllModels"
          ]
        }), z.success({
          message: a("manageModels.notification.success"),
          description: a("manageModels.notification.successDeleteDescription")
        });
      },
      onError: (c) => {
        z.error({
          message: "Error",
          description: (c == null ? void 0 : c.message) || a("manageModels.notification.someError")
        });
      }
    }), f = async (c) => (z.info({
      message: a("manageModels.notification.pullModel"),
      description: a("manageModels.notification.pullModelDescription", {
        modelName: c
      })
    }), n.reset(), Z.runtime.sendMessage({
      type: "pull_model",
      modelName: c
    }), true), { mutate: w } = v({
      mutationFn: f
    });
    return e.jsxs("div", {
      children: [
        e.jsxs("div", {
          children: [
            b === "pending" && e.jsx(T, {
              paragraph: {
                rows: 8
              }
            }),
            b === "success" && e.jsx("div", {
              className: "overflow-x-auto",
              children: e.jsx(Q, {
                columns: [
                  {
                    title: a("openai:manageModels.columns.nickname"),
                    dataIndex: "nickname",
                    key: "nickname",
                    render: (c, p) => e.jsxs("div", {
                      className: "flex items-center gap-2",
                      children: [
                        p.avatar && e.jsx(W, {
                          size: "small",
                          src: p.avatar,
                          alt: p.nickname
                        }),
                        e.jsx("span", {
                          children: c
                        }),
                        e.jsx("button", {
                          onClick: () => {
                            m({
                              model_id: p.model,
                              model_name: p.nickname,
                              model_avatar: p.avatar
                            }), i(true);
                          },
                          children: e.jsx(X, {
                            className: "size-3"
                          })
                        })
                      ]
                    })
                  },
                  {
                    title: "Model ID",
                    dataIndex: "name",
                    key: "name"
                  },
                  {
                    title: a("manageModels.columns.digest"),
                    dataIndex: "digest",
                    key: "digest",
                    render: (c) => e.jsx(I, {
                      title: c,
                      children: e.jsx(Y, {
                        className: "cursor-pointer",
                        color: "blue",
                        children: `${c == null ? void 0 : c.slice(0, 5)}...${c == null ? void 0 : c.slice(-4)}`
                      })
                    })
                  },
                  {
                    title: a("manageModels.columns.modifiedAt"),
                    dataIndex: "modified_at",
                    key: "modified_at",
                    render: (c) => R(c).fromNow(true)
                  },
                  {
                    title: a("manageModels.columns.size"),
                    dataIndex: "size",
                    key: "size",
                    render: (c) => Ne(c)
                  },
                  {
                    title: a("manageModels.columns.actions"),
                    render: (c, p) => e.jsxs("div", {
                      className: "flex gap-2",
                      children: [
                        e.jsx(I, {
                          title: a("common:modelSettings.label"),
                          children: e.jsx("button", {
                            onClick: () => {
                              m({
                                model_id: p.model
                              }), g(true);
                            },
                            className: "text-gray-700 dark:text-gray-400",
                            children: e.jsx(te, {
                              className: "size-4"
                            })
                          })
                        }),
                        e.jsx(I, {
                          title: a("manageModels.tooltip.delete"),
                          children: e.jsx("button", {
                            onClick: () => {
                              window.confirm(a("manageModels.confirm.delete")) && (y(p.model), l && l === p.model && d(null));
                            },
                            className: "text-red-500 dark:text-red-400",
                            children: e.jsx(U, {
                              className: "size-4"
                            })
                          })
                        }),
                        e.jsx(I, {
                          title: a("manageModels.tooltip.repull"),
                          children: e.jsx("button", {
                            onClick: () => {
                              window.confirm(a("manageModels.confirm.repull")) && w(p.model);
                            },
                            className: "text-gray-700 dark:text-gray-400",
                            children: e.jsx(ie, {
                              className: "size-4"
                            })
                          })
                        })
                      ]
                    })
                  }
                ],
                expandable: {
                  expandedRowRender: (c) => e.jsx(Q, {
                    pagination: false,
                    columns: [
                      {
                        title: a("manageModels.expandedColumns.parentModel"),
                        key: "parent_model",
                        dataIndex: "parent_model"
                      },
                      {
                        title: a("manageModels.expandedColumns.format"),
                        key: "format",
                        dataIndex: "format"
                      },
                      {
                        title: a("manageModels.expandedColumns.family"),
                        key: "family",
                        dataIndex: "family"
                      },
                      {
                        title: a("manageModels.expandedColumns.parameterSize"),
                        key: "parameter_size",
                        dataIndex: "parameter_size"
                      },
                      {
                        title: a("manageModels.expandedColumns.quantizationLevel"),
                        key: "quantization_level",
                        dataIndex: "quantization_level"
                      }
                    ],
                    dataSource: [
                      c.details
                    ],
                    locale: {
                      emptyText: a("common:noData")
                    }
                  }),
                  defaultExpandAllRows: false
                },
                bordered: true,
                dataSource: x,
                rowKey: (c) => `${c.model}-${c.digest}`
              })
            })
          ]
        }),
        e.jsx(le, {
          model_id: u.model_id,
          open: t,
          setOpen: i,
          model_name: u.model_name,
          model_avatar: u.model_avatar
        }),
        e.jsx(Ie, {
          model_id: u.model_id,
          open: s,
          setOpen: g
        })
      ]
    });
  }, qe = ({ model_id: r, open: a, setOpen: l }) => {
    const [d] = o.useForm(), { t } = k("common"), i = S(), { status: s, isError: g } = C({
      queryKey: [
        "fetchModelSettings",
        r
      ],
      queryFn: async () => {
        const n = await J(r);
        return d.setFieldsValue(n), n;
      },
      staleTime: 0
    }), { mutate: u, isPending: m } = v({
      mutationFn: H,
      onSuccess: async () => {
        await i.invalidateQueries({
          queryKey: [
            "fetchModel"
          ]
        }), await i.invalidateQueries({
          queryKey: [
            "fetchAllModels"
          ]
        }), await i.invalidateQueries({
          queryKey: [
            "fetchCustomModels"
          ]
        }), l(false);
      }
    });
    return e.jsxs(F, {
      title: t("modelSettings.label"),
      open: a,
      onCancel: () => {
        l(false);
      },
      footer: null,
      children: [
        s === "pending" && e.jsx(T, {
          active: true
        }),
        s === "success" && e.jsxs(o, {
          onFinish: (n) => {
            u({
              model_id: r,
              settings: n
            });
          },
          form: d,
          layout: "vertical",
          children: [
            e.jsx(o.Item, {
              name: "temperature",
              label: t("modelSettings.form.temperature.label"),
              children: e.jsx(h, {
                size: "large",
                style: {
                  width: "100%"
                },
                placeholder: t("modelSettings.form.temperature.placeholder")
              })
            }),
            e.jsx(o.Item, {
              name: "numPredict",
              label: t("modelSettings.form.numPredict.label"),
              children: e.jsx(h, {
                style: {
                  width: "100%"
                },
                placeholder: t("modelSettings.form.numPredict.placeholder")
              })
            }),
            e.jsx(o.Item, {
              name: "topP",
              label: t("modelSettings.form.topP.label"),
              children: e.jsx(h, {
                style: {
                  width: "100%"
                },
                size: "large",
                placeholder: t("modelSettings.form.topP.placeholder")
              })
            }),
            e.jsx(o.Item, {
              name: "reasoningEffort",
              label: t("modelSettings.form.reasoningEffort.label"),
              children: e.jsx(_, {
                style: {
                  width: "100%"
                },
                placeholder: t("modelSettings.form.reasoningEffort.placeholder")
              })
            }),
            e.jsx("button", {
              type: "submit",
              className: "inline-flex justify-center w-full text-center mt-4 items-center rounded-md border border-transparent bg-black px-2 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-white dark:text-gray-800 dark:hover:bg-gray-100 dark:focus:ring-gray-500 dark:focus:ring-offset-gray-100 disabled:opacity-50 ",
              children: m ? e.jsx(D, {
                className: "mr-2 h-4 w-4 animate-spin"
              }) : t("save")
            })
          ]
        })
      ]
    });
  }, Ce = () => {
    const [r, a] = G("selectedModel"), [l, d] = j.useState(false), [t, i] = j.useState({
      model_id: "",
      model_name: "",
      model_avatar: ""
    }), { t: s } = k([
      "openai",
      "common"
    ]), [g, u] = j.useState(false), m = S(), { data: n, status: x } = C({
      queryKey: [
        "fetchCustomModels"
      ],
      queryFn: () => he()
    }), { mutate: b } = v({
      mutationFn: pe,
      onSuccess: () => {
        m.invalidateQueries({
          queryKey: [
            "fetchCustomModels"
          ]
        });
      }
    });
    return e.jsxs("div", {
      children: [
        e.jsxs("div", {
          children: [
            x === "pending" && e.jsx(T, {
              paragraph: {
                rows: 8
              }
            }),
            x === "success" && e.jsx("div", {
              className: "overflow-x-auto",
              children: e.jsx(Q, {
                columns: [
                  {
                    title: s("manageModels.columns.nickname"),
                    dataIndex: "nickname",
                    key: "nickname",
                    render: (y, f) => e.jsxs("div", {
                      className: "flex items-center gap-2",
                      children: [
                        f.avatar && e.jsx(W, {
                          size: "small",
                          src: f.avatar,
                          alt: f.nickname
                        }),
                        e.jsx("span", {
                          children: y
                        }),
                        e.jsx("button", {
                          onClick: () => {
                            i({
                              model_id: f.id,
                              model_name: f.nickname,
                              model_avatar: f.avatar
                            }), d(true);
                          },
                          children: e.jsx(X, {
                            className: "size-3"
                          })
                        })
                      ]
                    })
                  },
                  {
                    title: s("manageModels.columns.model_id"),
                    dataIndex: "model_id",
                    key: "model_id"
                  },
                  {
                    title: s("manageModels.columns.model_type"),
                    dataIndex: "model_type",
                    render: (y) => e.jsx(Y, {
                      color: y === "chat" ? "green" : "blue",
                      children: s(`radio.${y}`)
                    })
                  },
                  {
                    title: s("manageModels.columns.provider"),
                    dataIndex: "provider",
                    render: (y, f) => f.provider.name
                  },
                  {
                    title: s("manageModels.columns.actions"),
                    render: (y, f) => e.jsxs("div", {
                      className: "flex gap-2",
                      children: [
                        e.jsx(I, {
                          title: s("common:modelSettings.label"),
                          children: e.jsx("button", {
                            onClick: () => {
                              i({
                                model_id: f.id
                              }), u(true);
                            },
                            className: "text-gray-700 dark:text-gray-400",
                            children: e.jsx(te, {
                              className: "size-4"
                            })
                          })
                        }),
                        e.jsx(I, {
                          title: s("manageModels.tooltip.delete"),
                          children: e.jsx("button", {
                            onClick: () => {
                              window.confirm(s("manageModels.confirm.delete")) && (b(f.id), r && r === f.id && a(null));
                            },
                            className: "text-red-500 dark:text-red-400",
                            children: e.jsx(U, {
                              className: "w-5 h-5"
                            })
                          })
                        })
                      ]
                    })
                  }
                ],
                bordered: true,
                dataSource: n
              })
            })
          ]
        }),
        e.jsx(le, {
          model_id: t.model_id,
          open: l,
          setOpen: d,
          model_name: t.model_name,
          model_avatar: t.model_avatar
        }),
        e.jsx(qe, {
          model_id: t.model_id,
          open: g,
          setOpen: u
        })
      ]
    });
  }, Fe = ({ open: r, setOpen: a }) => {
    const { t: l } = k([
      "settings",
      "common",
      "openai"
    ]);
    S();
    const d = ee({
      initialValues: {
        model: ""
      }
    }), t = async (s) => (s.replaceAll("ollama pull", "").replaceAll("ollama run", "").trim(), z.info({
      message: l("manageModels.notification.pullModel"),
      description: l("manageModels.notification.pullModelDescription", {
        modelName: s
      })
    }), a(false), d.reset(), Z.runtime.sendMessage({
      type: "pull_model",
      modelName: s
    }), true), { mutate: i } = v({
      mutationFn: t
    });
    return e.jsx(F, {
      footer: null,
      open: r,
      title: l("manageModels.modal.title"),
      onCancel: () => a(false),
      children: e.jsxs("form", {
        onSubmit: d.onSubmit((s) => i(s.model)),
        children: [
          e.jsx(_, {
            ...d.getInputProps("model"),
            required: true,
            placeholder: "qwen2.5:3b",
            size: "large"
          }),
          e.jsxs("button", {
            type: "submit",
            className: "inline-flex justify-center w-full text-center mt-4 items-center rounded-md border border-transparent bg-black px-2 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-white dark:text-gray-800 dark:hover:bg-gray-100 dark:focus:ring-gray-500 dark:focus:ring-offset-gray-100 disabled:opacity-50 ",
            children: [
              e.jsx(je, {
                className: "w-5 h-5 mr-3"
              }),
              l("manageModels.modal.pull")
            ]
          })
        ]
      })
    });
  }, ze = ({ open: r, setOpen: a }) => {
    const { t: l } = k([
      "openai"
    ]), [d] = o.useForm(), t = S(), { data: i, isPending: s } = C({
      queryKey: [
        "fetchProviders"
      ],
      queryFn: async () => (await ye()).filter((x) => x.provider !== "lmstudio")
    }), g = async (n) => (await xe(n.model_id, n.model_id, n.provider_id, n.model_type), true), { mutate: u, isPending: m } = v({
      mutationFn: g,
      onSuccess: () => {
        t.invalidateQueries({
          queryKey: [
            "fetchCustomModels"
          ]
        }), t.invalidateQueries({
          queryKey: [
            "fetchModel"
          ]
        }), a(false), d.resetFields();
      }
    });
    return e.jsx(F, {
      footer: null,
      open: r,
      title: l("manageModels.modal.title"),
      onCancel: () => a(false),
      children: e.jsxs(o, {
        form: d,
        onFinish: u,
        layout: "vertical",
        children: [
          e.jsx(o.Item, {
            name: "model_id",
            label: l("manageModels.modal.form.name.label"),
            rules: [
              {
                required: true,
                message: l("manageModels.modal.form.name.required")
              }
            ],
            children: e.jsx(_, {
              placeholder: l("manageModels.modal.form.name.placeholder"),
              size: "large"
            })
          }),
          e.jsx(o.Item, {
            name: "provider_id",
            label: l("manageModels.modal.form.provider.label"),
            rules: [
              {
                required: true,
                message: l("manageModels.modal.form.provider.required")
              }
            ],
            children: e.jsx($, {
              placeholder: l("manageModels.modal.form.provider.placeholder"),
              size: "large",
              loading: s,
              children: i == null ? void 0 : i.map((n) => e.jsx($.Option, {
                value: n.id,
                children: n.name
              }, n.id))
            })
          }),
          e.jsx(o.Item, {
            name: "model_type",
            label: l("manageModels.modal.form.type.label"),
            initialValue: "chat",
            rules: [
              {
                required: true,
                message: l("manageModels.modal.form.type.required")
              }
            ],
            children: e.jsxs(O.Group, {
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
            })
          }),
          e.jsx(o.Item, {
            children: e.jsx("button", {
              type: "submit",
              disabled: m,
              className: "inline-flex justify-center w-full text-center mt-4 items-center rounded-md border border-transparent bg-black px-2 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-white dark:text-gray-800 dark:hover:bg-gray-100 dark:focus:ring-gray-500 dark:focus:ring-offset-gray-100 disabled:opacity-50 ",
              children: m ? e.jsx(D, {
                className: "w-5 h-5  animate-spin"
              }) : l("common:save")
            })
          })
        ]
      })
    });
  };
  R.extend(ae);
  let Ae;
  Ae = () => {
    const [r, a] = j.useState(false), [l, d] = j.useState(false), [t, i] = j.useState("ollama"), { t: s } = k([
      "settings",
      "common",
      "openai"
    ]);
    return e.jsxs("div", {
      children: [
        e.jsxs("div", {
          children: [
            e.jsxs("div", {
              className: "mb-6",
              children: [
                e.jsx("div", {
                  className: "-ml-4 -mt-2 flex flex-wrap items-center justify-end sm:flex-nowrap",
                  children: e.jsx("div", {
                    className: "ml-4 mt-2 flex-shrink-0",
                    children: e.jsx("button", {
                      onClick: () => {
                        t === "ollama" ? a(true) : d(true);
                      },
                      className: "inline-flex items-center rounded-md border border-transparent bg-black px-2 py-2 text-md font-medium leading-4 text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-white dark:text-gray-800 dark:hover:bg-gray-100 dark:focus:ring-gray-500 dark:focus:ring-offset-gray-100 disabled:opacity-50",
                      children: s("manageModels.addBtn")
                    })
                  })
                }),
                e.jsx("div", {
                  className: "flex items-center justify-end mt-3",
                  children: e.jsx(be, {
                    options: [
                      {
                        label: s("common:segmented.ollama"),
                        value: "ollama"
                      },
                      {
                        label: s("common:segmented.custom"),
                        value: "custom"
                      }
                    ],
                    onChange: (g) => {
                      i(g);
                    }
                  })
                })
              ]
            }),
            t === "ollama" ? e.jsx(_e, {}) : e.jsx(Ce, {})
          ]
        }),
        e.jsx(Fe, {
          open: r,
          setOpen: a
        }),
        e.jsx(ze, {
          open: l,
          setOpen: d
        })
      ]
    });
  };
  Ze = () => e.jsx(re, {
    children: e.jsx(ne, {
      children: e.jsx(Ae, {})
    })
  });
});
export {
  __tla,
  Ze as default
};
