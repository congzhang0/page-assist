import { r as F, a as D, e as ne, f as V, j as e, c as o, __tla as __tla_0 } from "./FontSizeProvider-C1DZf1x-.js";
import { u as R, X as G, I as le, M as ie, a as oe, D as ce, g as Q, E as de, P as me, B as ue, C as ge, b as fe, c as he, S as xe, s as pe, d as ye, f as be, e as ke, __tla as __tla_1 } from "./Sidebar-DZH9YUxk.js";
import { b as A, c as I, u as ve, s as je, a as we, S as Ne, g as Se, i as Me, f as Ee, d as X, e as Ce, T as M, h as T, L as Le, j as Re } from "./SaveButton-B6h4W40A.js";
import { P as Ie, M as Oe, u as Pe, a as Te, g as Fe, b as De, c as We, d as _, S as ze, t as Z, h as Be, __tla as __tla_2 } from "./key-down-nlLML-El.js";
import { L as Ae } from "./loader-2-DQbjhJ0G.js";
import { R as Ue } from "./rotate-ccw-DqNPwFS7.js";
import { T as Ve } from "./Trans-PMjSaMEn.js";
import { u as He } from "./use-form-JlyzcUxc.js";
import { C as U } from "./index-23mm4Rzq.js";
import { l as qe } from "./icon-BmsVQuvA.js";
import "./elevenlabs-Aq8HmJkY.js";
import "./color-DZcOeaYD.js";
import "./useBubbleLock-D9rWo-oM.js";
let ft;
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
  })()
]).then(async () => {
  function $e() {
    const [a, l] = F.useState(null);
    return F.useEffect(() => {
      const d = (h) => {
        h.from === "background" && l(h);
      };
      return A.runtime.connect({
        name: "pgCopilot"
      }), A.runtime.onMessage.addListener(d), () => {
        A.runtime.onMessage.removeListener(d);
      };
    }, []), a;
  }
  const Ke = I("Boxes", [
    [
      "path",
      {
        d: "M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",
        key: "lc1i9w"
      }
    ],
    [
      "path",
      {
        d: "m7 16.5-4.74-2.85",
        key: "1o9zyk"
      }
    ],
    [
      "path",
      {
        d: "m7 16.5 5-3",
        key: "va8pkn"
      }
    ],
    [
      "path",
      {
        d: "M7 16.5v5.17",
        key: "jnp8gn"
      }
    ],
    [
      "path",
      {
        d: "M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",
        key: "8zsnat"
      }
    ],
    [
      "path",
      {
        d: "m17 16.5-5-3",
        key: "8arw3v"
      }
    ],
    [
      "path",
      {
        d: "m17 16.5 4.74-2.85",
        key: "8rfmw"
      }
    ],
    [
      "path",
      {
        d: "M17 16.5v5.17",
        key: "k6z78m"
      }
    ],
    [
      "path",
      {
        d: "M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",
        key: "1xygjf"
      }
    ],
    [
      "path",
      {
        d: "M12 8 7.26 5.15",
        key: "1vbdud"
      }
    ],
    [
      "path",
      {
        d: "m12 8 4.74-2.85",
        key: "3rx089"
      }
    ],
    [
      "path",
      {
        d: "M12 13.5V8",
        key: "1io7kd"
      }
    ]
  ]);
  const Qe = I("EyeOff", [
    [
      "path",
      {
        d: "M9.88 9.88a3 3 0 1 0 4.24 4.24",
        key: "1jxqfv"
      }
    ],
    [
      "path",
      {
        d: "M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",
        key: "9wicm4"
      }
    ],
    [
      "path",
      {
        d: "M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",
        key: "1jreej"
      }
    ],
    [
      "line",
      {
        x1: "2",
        x2: "22",
        y1: "2",
        y2: "22",
        key: "a6p6uj"
      }
    ]
  ]);
  const _e = I("Eye", [
    [
      "path",
      {
        d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",
        key: "rwhkz3"
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
  const Ze = I("History", [
    [
      "path",
      {
        d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
        key: "1357e3"
      }
    ],
    [
      "path",
      {
        d: "M3 3v5h5",
        key: "1xhq8a"
      }
    ],
    [
      "path",
      {
        d: "M12 7v5l4 2",
        key: "1fdv2h"
      }
    ]
  ]);
  let Ge, Xe, Je, Ye, et;
  Ge = I("PlusSquare", [
    [
      "rect",
      {
        width: "18",
        height: "18",
        x: "3",
        y: "3",
        rx: "2",
        key: "afitv7"
      }
    ],
    [
      "path",
      {
        d: "M8 12h8",
        key: "1wcyev"
      }
    ],
    [
      "path",
      {
        d: "M12 8v8",
        key: "napkw2"
      }
    ]
  ]);
  Xe = () => {
    const [a, l] = F.useState(""), { t: d } = D([
      "playground",
      "common"
    ]), h = ne(), [v] = V("checkOllamaStatus", true), { data: c, status: x, refetch: n, isRefetching: j } = ve({
      queryKey: [
        "ollamaStatus",
        v
      ],
      queryFn: async () => {
        const r = await Se(), y = await Me(), u = await Ee({
          returnEmpty: false
        });
        return h.invalidateQueries({
          queryKey: [
            "getAllModelsForSelect"
          ]
        }), {
          isOk: v ? y : true,
          models: u,
          ollamaURL: r
        };
      }
    });
    F.useEffect(() => {
      (c == null ? void 0 : c.ollamaURL) && l(c.ollamaURL);
    }, [
      c
    ]);
    const { setSelectedModel: s, selectedModel: N, chatMode: i, setChatMode: w } = R(), m = () => {
      var _a;
      return e.jsxs("div", {
        className: "mt-4",
        children: [
          e.jsx(Ne, {
            onChange: (r) => {
              s(r), localStorage.setItem("selectedModel", r);
            },
            value: N,
            size: "large",
            filterOption: (r, y) => y.label.toLowerCase().indexOf(r.toLowerCase()) >= 0 || y.value.toLowerCase().indexOf(r.toLowerCase()) >= 0,
            showSearch: true,
            placeholder: d("common:selectAModel"),
            style: {
              width: "100%"
            },
            className: "mt-4",
            options: (_a = c.models) == null ? void 0 : _a.map((r) => ({
              label: (r == null ? void 0 : r.nickname) || r.name,
              value: r.model
            }))
          }),
          e.jsx("div", {
            className: "mt-4",
            children: e.jsxs("div", {
              className: "inline-flex items-center",
              children: [
                e.jsxs("label", {
                  className: "relative flex items-center p-3 rounded-full cursor-pointer",
                  htmlFor: "check",
                  children: [
                    e.jsx("input", {
                      type: "checkbox",
                      checked: i === "rag",
                      onChange: (r) => {
                        w(r.target.checked ? "rag" : "normal");
                      },
                      className: "before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity",
                      id: "check"
                    }),
                    e.jsx("span", {
                      className: "absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100 ",
                      children: e.jsx("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "h-3.5 w-3.5",
                        viewBox: "0 0 20 20",
                        fill: "currentColor",
                        stroke: "currentColor",
                        strokeWidth: "1",
                        children: e.jsx("path", {
                          fillRule: "evenodd",
                          d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                          clipRule: "evenodd"
                        })
                      })
                    })
                  ]
                }),
                e.jsx("label", {
                  className: "mt-px font-light  cursor-pointer select-none text-gray-900 dark:text-gray-400",
                  htmlFor: "check",
                  children: d("common:chatWithCurrentPage")
                })
              ]
            })
          })
        ]
      });
    };
    return v ? e.jsx("div", {
      className: "mx-auto sm:max-w-lg px-4 mt-10",
      children: e.jsxs("div", {
        className: "rounded-lg  justify-center items-center flex flex-col border border-gray-300 dark:border-gray-700 p-8 bg-white dark:bg-[#262626] shadow-sm",
        children: [
          (x === "pending" || j) && e.jsxs("div", {
            className: "inline-flex items-center space-x-2",
            children: [
              e.jsx("div", {
                className: "w-3 h-3 bg-blue-500 rounded-full animate-bounce"
              }),
              e.jsx("p", {
                className: "dark:text-gray-400 text-gray-900",
                children: d("ollamaState.searching")
              })
            ]
          }),
          !j && x === "success" ? c.isOk ? e.jsxs("div", {
            className: "inline-flex  items-center space-x-2",
            children: [
              e.jsx("div", {
                className: "w-3 h-3 bg-green-500 rounded-full"
              }),
              e.jsx("p", {
                className: "dark:text-gray-400 text-gray-900",
                children: d("ollamaState.running")
              })
            ]
          }) : e.jsxs("div", {
            className: "flex flex-col space-y-2 justify-center items-center",
            children: [
              e.jsxs("div", {
                className: "inline-flex  space-x-2",
                children: [
                  e.jsx("div", {
                    className: "w-3 h-3 bg-red-500 rounded-full"
                  }),
                  e.jsx("p", {
                    className: "dark:text-gray-400 text-gray-900",
                    children: d("ollamaState.notRunning")
                  })
                ]
              }),
              e.jsx("input", {
                className: "bg-gray-100 dark:bg-black dark:text-gray-100 rounded-md px-4 py-2 mt-2 w-full",
                type: "url",
                value: a,
                onChange: (r) => l(r.target.value)
              }),
              e.jsxs("button", {
                onClick: () => {
                  je(a), n();
                },
                className: "inline-flex mt-4 items-center rounded-md border border-transparent bg-black px-2 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-white dark:text-gray-800 dark:hover:bg-gray-100 dark:focus:ring-gray-500 dark:focus:ring-offset-gray-100 disabled:opacity-50 ",
                children: [
                  e.jsx(Ue, {
                    className: "h-4 w-4 mr-3"
                  }),
                  d("common:retry")
                ]
              }),
              a && we(a) !== "http://127.0.0.1:11434" && e.jsx("p", {
                className: "text-xs text-gray-700 dark:text-gray-400 mb-4 text-center",
                children: e.jsx(Ve, {
                  i18nKey: "playground:ollamaState.connectionError",
                  components: {
                    anchor: e.jsx("a", {
                      href: "https://github.com/n4ze3m/page-assist/blob/main/docs/connection-issue.md",
                      target: "__blank",
                      className: "text-blue-600 dark:text-blue-400"
                    })
                  }
                })
              })
            ]
          }) : null,
          x === "success" && c.isOk && m()
        ]
      })
    }) : e.jsx("div", {
      className: "mx-auto sm:max-w-md px-4 mt-10",
      children: e.jsxs("div", {
        className: "rounded-lg justify-center items-center flex flex-col border dark:border-gray-700 p-8 bg-white dark:bg-[#262626] shadow-sm",
        children: [
          e.jsx("div", {
            className: "inline-flex items-center space-x-2",
            children: e.jsxs("p", {
              className: "dark:text-gray-400 text-gray-900",
              children: [
                e.jsx("span", {
                  children: "\u{1F44B}"
                }),
                d("welcome")
              ]
            })
          }),
          x === "pending" && e.jsx(Ae, {
            className: "mr-2 h-4 w-4 animate-spin"
          }),
          x === "success" && c.isOk && m()
        ]
      })
    });
  };
  Je = () => {
    const { messages: a, streaming: l, regenerateLastMessage: d, editMessage: h, isSearchingInternet: v } = R(), c = o.useRef(null), [x, n] = o.useState(false), [j, s] = o.useState(null), { ttsEnabled: N } = X();
    return o.useEffect(() => {
      c.current && c.current.scrollIntoView({
        behavior: "smooth"
      });
    }), e.jsxs(e.Fragment, {
      children: [
        e.jsxs("div", {
          className: "relative flex w-full flex-col items-center pt-16 pb-4",
          children: [
            a.length === 0 && e.jsx(Xe, {}),
            a.map((i, w) => e.jsx(Ie, {
              isBot: i.isBot,
              message: i.message,
              name: i.name,
              images: i.images || [],
              currentMessageIndex: w,
              totalMessages: a.length,
              onRengerate: d,
              message_type: i.messageType,
              isProcessing: l,
              isSearchingInternet: v,
              sources: i.sources,
              onEditFormSubmit: (m) => {
                h(w, m, !i.isBot);
              },
              onSourceClick: (m) => {
                s(m), n(true);
              },
              isTTSEnabled: N,
              generationInfo: i == null ? void 0 : i.generationInfo,
              isStreaming: l,
              reasoningTimeTaken: i == null ? void 0 : i.reasoning_time_taken,
              modelImage: i == null ? void 0 : i.modelImage,
              modelName: i == null ? void 0 : i.modelName
            }, w)),
            e.jsx("div", {
              ref: c
            })
          ]
        }),
        e.jsx("div", {
          className: "w-full pb-[157px]"
        }),
        e.jsx(Oe, {
          open: x,
          setOpen: n,
          source: j
        })
      ]
    });
  };
  Ye = ({ dropedFile: a }) => {
    const l = o.useRef(null), d = o.useRef(null), { sendWhenEnter: h, setSendWhenEnter: v } = X(), [c, x] = o.useState(false), { t: n } = D([
      "playground",
      "common"
    ]), [j] = V("chatWithWebsiteEmbedding", true), s = He({
      initialValues: {
        message: "",
        image: ""
      }
    }), { transcript: N, isListening: i, resetTranscript: w, start: m, stop: r, supported: y } = Pe(), u = async () => {
      i && r();
    }, S = async (t) => {
      if (t instanceof File) {
        const f = await Z(t);
        s.setFieldValue("image", f);
      } else if (t.target.files) {
        const f = await Z(t.target.files[0]);
        s.setFieldValue("image", f);
      }
    }, b = () => {
      l.current && l.current.focus();
    }, g = (t) => {
      t.key === "Process" || t.key === "229" || Be({
        e: t,
        sendWhenEnter: h,
        typing: c,
        isSending: K
      }) && (t.preventDefault(), s.onSubmit(async (f) => {
        if (!(f.message.trim().length === 0 && f.image.length === 0)) {
          if (await u(), !E || E.length === 0) {
            s.setFieldError("message", n("formError.noModel"));
            return;
          }
          if (p === "rag" && !await T() && j) {
            s.setFieldError("message", n("formError.noEmbeddingModel"));
            return;
          }
          if (O) {
            const k = await T(), C = await Q();
            if (!k && !C) {
              s.setFieldError("message", n("formError.noEmbeddingModel"));
              return;
            }
          }
          s.reset(), b(), await $({
            image: f.image,
            message: f.message.trim()
          });
        }
      })());
    }, H = (t) => {
      t.clipboardData.files.length > 0 && S(t.clipboardData.files[0]);
    }, { onSubmit: q, selectedModel: E, chatMode: p, stopStreamingRequest: J, streaming: Y, setChatMode: L, webSearch: O, setWebSearch: W, selectedQuickPrompt: P, setSelectedQuickPrompt: ee, speechToTextLanguage: te, useOCR: se, setUseOCR: ae, defaultInternetSearchOn: z, defaultChatWithWebsite: B } = R();
    o.useEffect(() => {
      a && S(a);
    }, [
      a
    ]), Te(l, s.values.message, 120), o.useEffect(() => {
      i && s.setFieldValue("message", N);
    }, [
      N
    ]), o.useEffect(() => {
      var _a;
      if (P) {
        const t = Fe(P);
        if (s.setFieldValue("message", P), t) {
          (_a = l.current) == null ? void 0 : _a.focus();
          const f = setTimeout(() => {
            var _a2;
            (_a2 = l.current) == null ? void 0 : _a2.setSelectionRange(t.start, t.end), ee(null);
          }, 100);
          return () => {
            clearInterval(f);
          };
        }
      }
    }, [
      P
    ]);
    const { mutateAsync: $, isPending: K } = Ce({
      mutationFn: q,
      onSuccess: () => {
        b();
      },
      onError: (t) => {
        b();
      }
    });
    return o.useEffect(() => {
      var _a, _b;
      const t = (k) => {
        var _a2;
        if (k.preventDefault(), (_a2 = k.dataTransfer) == null ? void 0 : _a2.items) for (let C = 0; C < k.dataTransfer.items.length; C++) k.dataTransfer.items[C].type === "text/plain" && k.dataTransfer.items[C].getAsString((re) => {
          s.setFieldValue("message", re);
        });
      }, f = (k) => {
        k.preventDefault();
      };
      return (_a = l.current) == null ? void 0 : _a.addEventListener("drop", t), (_b = l.current) == null ? void 0 : _b.addEventListener("dragover", f), z && W(true), B && L("rag"), () => {
        var _a2, _b2;
        (_a2 = l.current) == null ? void 0 : _a2.removeEventListener("drop", t), (_b2 = l.current) == null ? void 0 : _b2.removeEventListener("dragover", f);
      };
    }, []), o.useEffect(() => {
      z && W(true);
    }, [
      z
    ]), o.useEffect(() => {
      B && L("rag");
    }, [
      B
    ]), e.jsx("div", {
      className: "flex w-full flex-col items-center px-2",
      children: e.jsx("div", {
        className: "relative z-10 flex w-full flex-col items-center justify-center gap-2 text-base",
        children: e.jsx("div", {
          className: "relative flex w-full flex-row justify-center gap-2 lg:w-4/5",
          children: e.jsxs("div", {
            className: ` bg-neutral-50  dark:bg-[#262626] relative w-full max-w-[48rem] p-1 backdrop-blur-lg duration-100 border border-gray-300 rounded-t-xl  dark:border-gray-600
          `,
            children: [
              e.jsxs("div", {
                className: `border-b border-gray-200 dark:border-gray-600 relative ${s.values.image.length === 0 ? "hidden" : "block"}`,
                children: [
                  e.jsx("button", {
                    type: "button",
                    onClick: () => {
                      s.setFieldValue("image", "");
                    },
                    className: "absolute top-1 left-1 flex items-center justify-center z-10 bg-white dark:bg-[#262626] p-0.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-600 text-black dark:text-gray-100",
                    children: e.jsx(G, {
                      className: "h-4 w-4"
                    })
                  }),
                  " ",
                  e.jsx(le, {
                    src: s.values.image,
                    alt: "Uploaded Image",
                    preview: false,
                    className: "rounded-md max-h-32"
                  })
                ]
              }),
              e.jsxs("div", {
                children: [
                  e.jsx("div", {
                    className: "flex",
                    children: e.jsxs("form", {
                      onSubmit: s.onSubmit(async (t) => {
                        if (!E || E.length === 0) {
                          s.setFieldError("message", n("formError.noModel"));
                          return;
                        }
                        if (p === "rag" && !await T() && j) {
                          s.setFieldError("message", n("formError.noEmbeddingModel"));
                          return;
                        }
                        if (O) {
                          const f = await T(), k = await Q();
                          if (!f && !k) {
                            s.setFieldError("message", n("formError.noEmbeddingModel"));
                            return;
                          }
                        }
                        await u(), !(t.message.trim().length === 0 && t.image.length === 0) && (s.reset(), b(), await $({
                          image: t.image,
                          message: t.message.trim()
                        }));
                      }),
                      className: "shrink-0 flex-grow  flex flex-col items-center ",
                      children: [
                        e.jsx("input", {
                          id: "file-upload",
                          name: "file-upload",
                          type: "file",
                          className: "sr-only",
                          ref: d,
                          accept: "image/*",
                          multiple: false,
                          onChange: S
                        }),
                        e.jsxs("div", {
                          className: "w-full  flex flex-col px-1",
                          children: [
                            e.jsx("textarea", {
                              onKeyDown: (t) => g(t),
                              ref: l,
                              className: "px-2 py-2 w-full resize-none bg-transparent focus-within:outline-none focus:ring-0 focus-visible:ring-0 ring-0 dark:ring-0 border-0 dark:text-gray-100",
                              onPaste: H,
                              rows: 1,
                              style: {
                                minHeight: "60px"
                              },
                              tabIndex: 0,
                              onCompositionStart: () => {
                              },
                              onCompositionEnd: () => {
                              },
                              placeholder: n("form.textarea.placeholder"),
                              ...s.getInputProps("message")
                            }),
                            e.jsxs("div", {
                              className: "flex mt-4 justify-end gap-3",
                              children: [
                                p !== "vision" && e.jsx(M, {
                                  title: n("tooltip.searchInternet"),
                                  children: e.jsx("button", {
                                    type: "button",
                                    onClick: () => W(!O),
                                    className: `inline-flex items-center gap-2   ${p === "rag" ? "hidden" : "block"}`,
                                    children: O ? e.jsx(De, {
                                      className: "h-5 w-5 text-blue-600 dark:text-blue-400"
                                    }) : e.jsx(We, {
                                      className: "h-5 w-5 text-gray-600 dark:text-gray-400"
                                    })
                                  })
                                }),
                                e.jsx(ie, {}),
                                y && e.jsx(M, {
                                  title: n("tooltip.speechToText"),
                                  children: e.jsx("button", {
                                    type: "button",
                                    onClick: async () => {
                                      i ? u() : (w(), m({
                                        continuous: true,
                                        lang: te
                                      }));
                                    },
                                    className: "flex items-center justify-center dark:text-gray-300",
                                    children: i ? e.jsxs("div", {
                                      className: "relative",
                                      children: [
                                        e.jsx("span", {
                                          className: "animate-ping absolute inline-flex h-3 w-3 rounded-full bg-red-400 opacity-75"
                                        }),
                                        e.jsx(_, {
                                          className: "h-5 w-5"
                                        })
                                      ]
                                    }) : e.jsx(_, {
                                      className: "h-5 w-5"
                                    })
                                  })
                                }),
                                e.jsx(M, {
                                  title: n("tooltip.vision"),
                                  children: e.jsx("button", {
                                    type: "button",
                                    onClick: () => {
                                      L(p === "vision" ? "normal" : "vision");
                                    },
                                    disabled: p === "rag",
                                    className: `flex items-center justify-center dark:text-gray-300 ${p === "rag" ? "hidden" : "block"} disabled:opacity-50`,
                                    children: p === "vision" ? e.jsx(_e, {
                                      className: "h-5 w-5"
                                    }) : e.jsx(Qe, {
                                      className: "h-5 w-5"
                                    })
                                  })
                                }),
                                e.jsx(M, {
                                  title: n("tooltip.uploadImage"),
                                  children: e.jsx("button", {
                                    type: "button",
                                    onClick: () => {
                                      var _a;
                                      (_a = d.current) == null ? void 0 : _a.click();
                                    },
                                    disabled: p === "vision",
                                    className: `flex items-center justify-center disabled:opacity-50 dark:text-gray-300 ${p === "rag" ? "hidden" : "block"}`,
                                    children: e.jsx(oe, {
                                      className: "h-5 w-5"
                                    })
                                  })
                                }),
                                Y ? e.jsx(M, {
                                  title: n("tooltip.stopStreaming"),
                                  children: e.jsx("button", {
                                    type: "button",
                                    onClick: J,
                                    className: "text-gray-800 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-md p-1",
                                    children: e.jsx(ze, {
                                      className: "h-6 w-6"
                                    })
                                  })
                                }) : e.jsx(ce.Button, {
                                  htmlType: "submit",
                                  disabled: K,
                                  className: "!justify-end !w-auto",
                                  icon: e.jsx("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    strokeWidth: 1.5,
                                    stroke: "currentColor",
                                    className: "w-5 h-5",
                                    children: e.jsx("path", {
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                      d: "m19.5 8.25-7.5 7.5-7.5-7.5"
                                    })
                                  }),
                                  menu: {
                                    items: [
                                      {
                                        key: 1,
                                        label: e.jsx(U, {
                                          checked: h,
                                          onChange: (t) => v(t.target.checked),
                                          children: n("sendWhenEnter")
                                        })
                                      },
                                      {
                                        key: 2,
                                        label: e.jsx(U, {
                                          checked: p === "rag",
                                          onChange: (t) => {
                                            L(t.target.checked ? "rag" : "normal");
                                          },
                                          children: n("common:chatWithCurrentPage")
                                        })
                                      },
                                      {
                                        key: 3,
                                        label: e.jsx(U, {
                                          checked: se,
                                          onChange: (t) => ae(t.target.checked),
                                          children: n("useOCR")
                                        })
                                      }
                                    ]
                                  },
                                  children: e.jsxs("div", {
                                    className: "inline-flex gap-2",
                                    children: [
                                      h ? e.jsxs("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: "2",
                                        className: "h-5 w-5",
                                        viewBox: "0 0 24 24",
                                        children: [
                                          e.jsx("path", {
                                            d: "M9 10L4 15 9 20"
                                          }),
                                          e.jsx("path", {
                                            d: "M20 4v7a4 4 0 01-4 4H4"
                                          })
                                        ]
                                      }) : null,
                                      n("common:submit")
                                    ]
                                  })
                                })
                              ]
                            })
                          ]
                        })
                      ]
                    })
                  }),
                  s.errors.message && e.jsx("div", {
                    className: "text-red-500 text-center text-sm mt-1",
                    children: s.errors.message
                  })
                ]
              })
            ]
          })
        })
      })
    });
  };
  et = () => {
    const [a] = V("hideCurrentChatModelSettings", false), { clearChat: l, isEmbedding: d, messages: h, streaming: v, selectedSystemPrompt: c, setSelectedSystemPrompt: x, setSelectedQuickPrompt: n, setMessages: j, setHistory: s, setHistoryId: N, setSelectedModel: i, historyId: w, history: m } = R(), { t: r } = D([
      "sidepanel",
      "common",
      "option"
    ]), [y, u] = o.useState(false), [S, b] = o.useState(false);
    return e.jsxs("div", {
      className: " px-3 justify-between bg-white dark:bg-[#171717] border-b border-gray-300 dark:border-gray-700 py-4 items-center absolute top-0 z-10 flex h-14 w-full",
      children: [
        e.jsxs("div", {
          className: "focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-700 flex items-center dark:text-white",
          children: [
            e.jsx("img", {
              className: "h-6 w-auto",
              src: qe,
              alt: r("common:pageAssist")
            }),
            e.jsx("span", {
              className: "ml-1 text-sm ",
              children: r("common:pageAssist")
            })
          ]
        }),
        e.jsxs("div", {
          className: "flex items-center space-x-3",
          children: [
            d ? e.jsx(M, {
              title: r("tooltip.embed"),
              children: e.jsx(Ke, {
                className: "h-5 w-5 text-gray-500 dark:text-gray-400 animate-bounce animate-infinite"
              })
            }) : null,
            h.length > 0 && !v && e.jsx("button", {
              title: r("option:newChat"),
              onClick: () => {
                l();
              },
              className: "flex items-center space-x-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-700",
              children: e.jsx(Ge, {
                className: "h-5 w-5 text-gray-500 dark:text-gray-400"
              })
            }),
            m.length > 0 && e.jsx("button", {
              title: r("tooltip.clearContext"),
              onClick: () => {
                s([]);
              },
              className: "flex items-center space-x-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-700",
              children: e.jsx(de, {
                className: "h-5 w-5 text-gray-500 dark:text-gray-400"
              })
            }),
            e.jsx(M, {
              title: r("tooltip.history"),
              children: e.jsx("button", {
                onClick: () => {
                  b(true);
                },
                className: "flex items-center space-x-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-700",
                children: e.jsx(Ze, {
                  className: "h-5 w-5 text-gray-500 dark:text-gray-400"
                })
              })
            }),
            e.jsx(me, {
              selectedSystemPrompt: c,
              setSelectedSystemPrompt: x,
              setSelectedQuickPrompt: n,
              className: "text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            }),
            !a && e.jsx(M, {
              title: r("common:currentChatModelSettings"),
              children: e.jsx("button", {
                onClick: () => u(true),
                className: "text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors",
                children: e.jsx(ue, {
                  className: "w-5 h-5"
                })
              })
            }),
            e.jsx(Le, {
              to: "/settings",
              children: e.jsx(ge, {
                className: "h-5 w-5 text-gray-500 dark:text-gray-400"
              })
            })
          ]
        }),
        e.jsx(fe, {
          open: y,
          setOpen: u
        }),
        e.jsx(he, {
          title: e.jsxs("div", {
            className: "flex items-center justify-between",
            children: [
              e.jsx("div", {
                className: "flex items-center justify-between",
                children: r("tooltip.history")
              }),
              e.jsx("button", {
                onClick: () => b(false),
                children: e.jsx(G, {
                  className: "h-5 w-5 text-gray-500 dark:text-gray-400"
                })
              })
            ]
          }),
          placement: "left",
          closeIcon: null,
          onClose: () => b(false),
          open: S,
          children: e.jsx(xe, {
            isOpen: S,
            onClose: () => b(false),
            setMessages: j,
            setHistory: s,
            setHistoryId: N,
            setSelectedModel: i,
            setSelectedSystemPrompt: x,
            clearChat: l,
            historyId: w,
            setSystemPrompt: (g) => {
            },
            temporaryChat: false,
            history: m
          })
        })
      ]
    });
  };
  ft = () => {
    const a = o.useRef(null), [l, d] = o.useState(), { t: h } = D([
      "playground"
    ]), [v, c] = o.useState("idle"), { streaming: x, onSubmit: n, messages: j, setHistory: s, setHistoryId: N, setMessages: i, selectedModel: w } = R(), m = $e(), r = async () => {
      if (await Re() && j.length === 0) {
        const u = await ye();
        u && (N(u.history.id), s(be(u.messages)), i(ke(u.messages)));
      }
    };
    return o.useEffect(() => {
      if (!a.current) return;
      const y = (g) => {
        g.preventDefault(), g.stopPropagation();
      }, u = (g) => {
        var _a, _b;
        if (g.preventDefault(), g.stopPropagation(), c("idle"), !Array.from(((_a = g.dataTransfer) == null ? void 0 : _a.files) || []).every((p) => p.type.startsWith("image/"))) {
          c("error");
          return;
        }
        const E = Array.from(((_b = g.dataTransfer) == null ? void 0 : _b.files) || []).slice(0, 1);
        E.length > 0 && d(E[0]);
      }, S = (g) => {
        g.preventDefault(), g.stopPropagation(), c("dragging");
      }, b = (g) => {
        g.preventDefault(), g.stopPropagation(), c("idle");
      };
      return a.current.addEventListener("dragover", y), a.current.addEventListener("drop", u), a.current.addEventListener("dragenter", S), a.current.addEventListener("dragleave", b), () => {
        a.current && (a.current.removeEventListener("dragover", y), a.current.removeEventListener("drop", u), a.current.removeEventListener("dragenter", S), a.current.removeEventListener("dragleave", b));
      };
    }, []), o.useEffect(() => {
      r();
    }, []), o.useEffect(() => {
      m && !x && (w ? n({
        message: m.text,
        messageType: m.type,
        image: ""
      }) : pe.error({
        message: h("formError.noModel")
      }));
    }, [
      m
    ]), e.jsx("div", {
      className: "flex h-full w-full",
      children: e.jsxs("main", {
        className: "relative h-dvh w-full",
        children: [
          e.jsx("div", {
            className: "relative z-10 w-full",
            children: e.jsx(et, {})
          }),
          e.jsxs("div", {
            ref: a,
            className: `relative flex h-full flex-col items-center ${v === "dragging" ? "bg-gray-100 dark:bg-gray-800" : ""} bg-white dark:bg-[#171717]`,
            children: [
              e.jsx("div", {
                className: "custom-scrollbar  flex h-full w-full flex-col items-center overflow-x-hidden overflow-y-auto px-5",
                children: e.jsx(Je, {})
              }),
              e.jsx("div", {
                className: "absolute bottom-0 w-full",
                children: e.jsx(Ye, {
                  dropedFile: l
                })
              })
            ]
          })
        ]
      })
    });
  };
});
export {
  __tla,
  ft as default
};
