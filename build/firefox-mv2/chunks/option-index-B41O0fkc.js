import { a as U, j as e, c as f, f as L, e as ce, r as E, __tla as __tla_0 } from "./FontSizeProvider-C1DZf1x-.js";
import { B as q, O as de, __tla as __tla_1 } from "./Layout-D44e2h93.js";
import { c as me, u as Z, T as N, d as ue, e as ge, h as $, p as fe, s as Q, a as xe, g as he, i as pe, z as be } from "./SaveButton-B6h4W40A.js";
import { a as ye, u as je, g as we, b as ke, d as G, S as ve, t as X, h as Se, P as Ne, M as Ee, __tla as __tla_2 } from "./key-down-nlLML-El.js";
import { h as T, D as ee, g as Y, X as Ce, I as Re, E as Ie, a as Le, i as Me, j as Te, f as De, e as Pe, k as Oe, l as Fe, __tla as __tla_3 } from "./Sidebar-DZH9YUxk.js";
import { g as Be, __tla as __tla_4 } from "./knowledge-fqI6SHTl.js";
import { u as Ue } from "./use-form-JlyzcUxc.js";
import { C as J } from "./index-23mm4Rzq.js";
import { R as Ke } from "./rotate-ccw-DqNPwFS7.js";
import { T as Ae } from "./Trans-PMjSaMEn.js";
import "./chevron-right-CHUn5UPl.js";
import "./elevenlabs-Aq8HmJkY.js";
import "./color-DZcOeaYD.js";
import "./useBubbleLock-D9rWo-oM.js";
let it;
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
  let Ve, We, He, ze, _e, qe, $e;
  Ve = me("ChevronDown", [
    [
      "path",
      {
        d: "m6 9 6 6 6-6",
        key: "qrunsl"
      }
    ]
  ]);
  We = () => {
    const { t: s } = U("playground"), { setSelectedKnowledge: a, selectedKnowledge: r } = T(), { data: l } = Z({
      queryKey: [
        "getAllKnowledge"
      ],
      queryFn: async () => await Be("finished"),
      refetchInterval: 1e3
    });
    return e.jsx(e.Fragment, {
      children: l && l.length > 0 && e.jsx(ee, {
        menu: {
          items: (l == null ? void 0 : l.map((n) => ({
            key: n.id,
            label: e.jsxs("div", {
              className: "w-52 gap-2 text-lg truncate inline-flex line-clamp-3  items-center  dark:border-gray-700",
              children: [
                e.jsx("div", {
                  children: e.jsx(q, {
                    className: "h-6 w-6 text-gray-400"
                  })
                }),
                n.title
              ]
            }),
            onClick: () => {
              const x = l == null ? void 0 : l.find((c) => c.id === n.id);
              (r == null ? void 0 : r.id) === n.id ? a(null) : a(x);
            }
          }))) || [],
          style: {
            maxHeight: 500,
            overflowY: "scroll"
          },
          className: "no-scrollbar",
          activeKey: r == null ? void 0 : r.id
        },
        placement: "topLeft",
        trigger: [
          "click"
        ],
        children: e.jsx(N, {
          title: s("tooltip.knowledge"),
          children: e.jsx("button", {
            type: "button",
            className: "dark:text-gray-300",
            children: e.jsx(q, {
              className: "h-6 w-6"
            })
          })
        })
      })
    });
  };
  He = ({ dropedFile: s }) => {
    const { t: a } = U([
      "playground",
      "common"
    ]), r = f.useRef(null), [l, n] = f.useState(false), [x] = L("checkWideMode", false), { onSubmit: c, selectedModel: g, chatMode: u, speechToTextLanguage: y, stopStreamingRequest: k, streaming: v, webSearch: d, setWebSearch: j, selectedQuickPrompt: p, textareaRef: m, setSelectedQuickPrompt: D, selectedKnowledge: S, temporaryChat: b, useOCR: h, setUseOCR: C, defaultInternetSearchOn: i, setHistory: K, history: A } = T(), [R] = L("autoSubmitVoiceMessage", false), [P] = L("autoStopTimeout", 2e3), te = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), I = () => {
      m.current && m.current.selectionStart === m.current.selectionEnd && (te() ? m.current.blur() : m.current.focus());
    }, o = Ue({
      initialValues: {
        message: "",
        image: ""
      }
    });
    f.useEffect(() => {
      I(), i && j(true);
    }, []), f.useEffect(() => {
      i && j(true);
    }, [
      i
    ]);
    const O = async (t) => {
      if (t instanceof File) {
        const w = await X(t);
        o.setFieldValue("image", w);
      } else if (t.target.files) {
        const w = await X(t.target.files[0]);
        o.setFieldValue("image", w);
      }
    }, se = (t) => {
      t.clipboardData.files.length > 0 && O(t.clipboardData.files[0]);
    };
    f.useEffect(() => {
      s && O(s);
    }, [
      s
    ]), ye(m, o.values.message, 300);
    const { transcript: V, isListening: M, resetTranscript: ae, start: re, stop: W, supported: ne } = je({
      autoStop: R,
      autoStopTimeout: P,
      onEnd: async () => {
        R && z();
      }
    }), { sendWhenEnter: F, setSendWhenEnter: oe } = ue();
    f.useEffect(() => {
      M && o.setFieldValue("message", V);
    }, [
      V
    ]), f.useEffect(() => {
      var _a;
      if (p) {
        const t = we(p);
        if (o.setFieldValue("message", p), t) {
          (_a = m.current) == null ? void 0 : _a.focus();
          const w = setTimeout(() => {
            var _a2;
            (_a2 = m.current) == null ? void 0 : _a2.setSelectionRange(t.start, t.end), D(null);
          }, 100);
          return () => {
            clearInterval(w);
          };
        }
      }
    }, [
      p
    ]);
    const le = ce(), { mutateAsync: H } = ge({
      mutationFn: c,
      onSuccess: () => {
        I(), le.invalidateQueries({
          queryKey: [
            "fetchChatHistory"
          ]
        });
      },
      onError: (t) => {
        I();
      }
    }), z = () => {
      o.onSubmit(async (t) => {
        if (!(t.message.trim().length === 0 && t.image.length === 0)) {
          if (!g || g.length === 0) {
            o.setFieldError("message", a("formError.noModel"));
            return;
          }
          if (d) {
            const w = await $(), B = await Y();
            if (!w && !B) {
              o.setFieldError("message", a("formError.noEmbeddingModel"));
              return;
            }
          }
          o.reset(), I(), await H({
            image: t.image,
            message: t.message.trim()
          });
        }
      })();
    }, ie = (t) => {
      Se({
        e: t,
        sendWhenEnter: F,
        typing: l,
        isSending: v
      }) && (t.preventDefault(), _(), z());
    }, _ = async () => {
      M && W();
    };
    return e.jsx("div", {
      className: "flex w-full flex-col items-center px-2",
      children: e.jsx("div", {
        className: "relative z-10 flex w-full flex-col items-center justify-center gap-2 text-base",
        children: e.jsx("div", {
          className: "relative flex w-full flex-row justify-center gap-2 lg:w-3/5",
          children: e.jsxs("div", {
            className: ` bg-neutral-50  dark:bg-[#2D2D2D] relative w-full max-w-[48rem] p-1 backdrop-blur-lg duration-100 border border-gray-300 rounded-t-xl  dark:border-gray-600
            ${b ? "!bg-gray-200 dark:!bg-black " : ""}
            ${x ? "max-w-none " : ""}
            `,
            children: [
              e.jsxs("div", {
                className: `border-b border-gray-200 dark:border-gray-600 relative ${o.values.image.length === 0 ? "hidden" : "block"}`,
                children: [
                  e.jsx("button", {
                    type: "button",
                    onClick: () => {
                      o.setFieldValue("image", "");
                    },
                    className: "absolute top-1 left-1 flex items-center justify-center z-10 bg-white dark:bg-[#2D2D2D] p-0.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-600 text-black dark:text-gray-100",
                    children: e.jsx(Ce, {
                      className: "h-4 w-4"
                    })
                  }),
                  " ",
                  e.jsx(Re, {
                    src: o.values.image,
                    alt: "Uploaded Image",
                    preview: false,
                    className: "rounded-md max-h-32"
                  })
                ]
              }),
              e.jsxs("div", {
                children: [
                  e.jsx("div", {
                    className: "flex  bg-transparent ",
                    children: e.jsxs("form", {
                      onSubmit: o.onSubmit(async (t) => {
                        if (_(), !g || g.length === 0) {
                          o.setFieldError("message", a("formError.noModel"));
                          return;
                        }
                        if (d) {
                          const w = await $(), B = await Y();
                          if (!w && !B) {
                            o.setFieldError("message", a("formError.noEmbeddingModel"));
                            return;
                          }
                        }
                        t.message.trim().length === 0 && t.image.length === 0 || (o.reset(), I(), await H({
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
                          ref: r,
                          accept: "image/*",
                          multiple: false,
                          onChange: O
                        }),
                        e.jsxs("div", {
                          className: "w-full  flex flex-col dark:border-gray-600  px-2 pt-2",
                          children: [
                            e.jsx("textarea", {
                              id: "textarea-message",
                              onCompositionStart: () => {
                              },
                              onCompositionEnd: () => {
                              },
                              onKeyDown: (t) => ie(t),
                              ref: m,
                              className: "px-2 py-2 w-full resize-none bg-transparent focus-within:outline-none focus:ring-0 focus-visible:ring-0 ring-0 dark:ring-0 border-0 dark:text-gray-100",
                              onPaste: se,
                              rows: 1,
                              style: {
                                minHeight: "35px"
                              },
                              tabIndex: 0,
                              placeholder: a("form.textarea.placeholder"),
                              ...o.getInputProps("message")
                            }),
                            e.jsxs("div", {
                              className: "mt-2 flex justify-between items-center",
                              children: [
                                e.jsx("div", {
                                  className: "flex",
                                  children: !S && e.jsx(N, {
                                    title: a("tooltip.searchInternet"),
                                    children: e.jsxs("div", {
                                      className: "inline-flex items-center gap-2",
                                      children: [
                                        e.jsx(ke, {
                                          className: "h-5 w-5 dark:text-gray-300 "
                                        }),
                                        e.jsx(fe, {
                                          value: d,
                                          onChange: (t) => j(t),
                                          checkedChildren: a("form.webSearch.on"),
                                          unCheckedChildren: a("form.webSearch.off")
                                        })
                                      ]
                                    })
                                  })
                                }),
                                e.jsxs("div", {
                                  className: "flex !justify-end gap-3",
                                  children: [
                                    A.length > 0 && e.jsx(N, {
                                      title: a("tooltip.clearContext"),
                                      children: e.jsx("button", {
                                        type: "button",
                                        onClick: () => {
                                          K([]);
                                        },
                                        className: `flex items-center justify-center dark:text-gray-300 ${u === "rag" ? "hidden" : "block"}`,
                                        children: e.jsx(Ie, {
                                          className: "h-5 w-5"
                                        })
                                      })
                                    }),
                                    !S && e.jsx(N, {
                                      title: a("tooltip.uploadImage"),
                                      children: e.jsx("button", {
                                        type: "button",
                                        onClick: () => {
                                          var _a;
                                          (_a = r.current) == null ? void 0 : _a.click();
                                        },
                                        className: `flex items-center justify-center dark:text-gray-300 ${u === "rag" ? "hidden" : "block"}`,
                                        children: e.jsx(Le, {
                                          className: "h-5 w-5"
                                        })
                                      })
                                    }),
                                    ne && e.jsx(N, {
                                      title: a("tooltip.speechToText"),
                                      children: e.jsx("button", {
                                        type: "button",
                                        onClick: async () => {
                                          M ? W() : (ae(), re({
                                            continuous: true,
                                            lang: y
                                          }));
                                        },
                                        className: "flex items-center justify-center dark:text-gray-300",
                                        children: M ? e.jsxs("div", {
                                          className: "relative",
                                          children: [
                                            e.jsx("span", {
                                              className: "animate-ping absolute inline-flex h-3 w-3 rounded-full bg-red-400 opacity-75"
                                            }),
                                            e.jsx(G, {
                                              className: "h-5 w-5"
                                            })
                                          ]
                                        }) : e.jsx(G, {
                                          className: "h-5 w-5"
                                        })
                                      })
                                    }),
                                    e.jsx(We, {}),
                                    v ? e.jsxs(N, {
                                      title: a("tooltip.stopStreaming"),
                                      children: [
                                        e.jsx("button", {
                                          type: "button",
                                          onClick: k,
                                          className: "text-gray-800 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-md p-1",
                                          children: e.jsx(ve, {
                                            className: "size-5"
                                          })
                                        }),
                                        " "
                                      ]
                                    }) : e.jsx(ee.Button, {
                                      htmlType: "submit",
                                      disabled: v,
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
                                            label: e.jsx(J, {
                                              checked: F,
                                              onChange: (t) => oe(t.target.checked),
                                              children: a("sendWhenEnter")
                                            })
                                          },
                                          {
                                            key: 2,
                                            label: e.jsx(J, {
                                              checked: h,
                                              onChange: (t) => C(t.target.checked),
                                              children: a("useOCR")
                                            })
                                          }
                                        ]
                                      },
                                      children: e.jsxs("div", {
                                        className: "inline-flex gap-2",
                                        children: [
                                          F ? e.jsxs("svg", {
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
                                          a("common:submit")
                                        ]
                                      })
                                    })
                                  ]
                                })
                              ]
                            })
                          ]
                        })
                      ]
                    })
                  }),
                  o.errors.message && e.jsx("div", {
                    className: "text-red-500 text-center text-sm mt-1",
                    children: o.errors.message
                  })
                ]
              })
            ]
          })
        })
      })
    });
  };
  ze = () => {
    const [s, a] = E.useState(""), { t: r } = U([
      "playground",
      "common"
    ]), [l] = L("checkOllamaStatus", true), { data: n, status: x, refetch: c, isRefetching: g } = Z({
      queryKey: [
        "ollamaStatus"
      ],
      queryFn: async () => {
        const u = await he(), y = await pe();
        return u && Q(u), {
          isOk: y,
          ollamaURL: u
        };
      },
      enabled: l
    });
    return E.useEffect(() => {
      (n == null ? void 0 : n.ollamaURL) && a(n.ollamaURL);
    }, [
      n
    ]), l ? e.jsx("div", {
      className: "mx-auto sm:max-w-xl px-4 mt-10",
      children: e.jsxs("div", {
        className: "rounded-lg justify-center items-center flex flex-col border p-8 bg-gray-50 dark:bg-[#262626]  dark:border-gray-600",
        children: [
          (x === "pending" || g) && e.jsxs("div", {
            className: "inline-flex items-center space-x-2",
            children: [
              e.jsx("div", {
                className: "w-3 h-3 bg-blue-500 rounded-full animate-pulse"
              }),
              e.jsx("p", {
                className: "dark:text-gray-400 text-gray-900",
                children: r("ollamaState.searching")
              })
            ]
          }),
          !g && x === "success" ? n.isOk ? e.jsxs("div", {
            className: "inline-flex  items-center space-x-2",
            children: [
              e.jsx("div", {
                className: "w-3 h-3 bg-green-500 rounded-full animate-pulse"
              }),
              e.jsx("p", {
                className: "dark:text-gray-400 text-gray-900",
                children: r("ollamaState.running")
              })
            ]
          }) : e.jsxs("div", {
            className: "flex flex-col space-y-2 justify-center items-center",
            children: [
              e.jsxs("div", {
                className: "inline-flex  space-x-2",
                children: [
                  e.jsx("div", {
                    className: "w-3 h-3 bg-red-500 rounded-full animate-pulse"
                  }),
                  e.jsx("p", {
                    className: "dark:text-gray-400 text-gray-900",
                    children: r("ollamaState.notRunning")
                  })
                ]
              }),
              e.jsx("input", {
                className: "bg-gray-100 dark:bg-[#262626] dark:text-gray-100 rounded-md px-4 py-2 mt-2 w-full",
                type: "url",
                value: s,
                onChange: (u) => a(u.target.value)
              }),
              e.jsxs("button", {
                onClick: () => {
                  Q(s), c();
                },
                className: "inline-flex mt-4 items-center rounded-md border border-transparent bg-black px-2 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-white dark:text-gray-800 dark:hover:bg-gray-100 dark:focus:ring-gray-500 dark:focus:ring-offset-gray-100 disabled:opacity-50 ",
                children: [
                  e.jsx(Ke, {
                    className: "h-4 w-4 mr-3"
                  }),
                  r("common:retry")
                ]
              }),
              s && xe(s) !== "http://127.0.0.1:11434" && e.jsx("p", {
                className: "text-xs text-gray-500 dark:text-gray-400 mb-4 text-center",
                children: e.jsx(Ae, {
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
          }) : null
        ]
      })
    }) : e.jsx("div", {
      className: "mx-auto sm:max-w-xl px-4 mt-10",
      children: e.jsx("div", {
        className: "rounded-lg justify-center items-center flex flex-col border p-8 bg-gray-50 dark:bg-[#262626] dark:border-gray-600",
        children: e.jsxs("h1", {
          className: "text-sm  font-medium text-center text-gray-500 dark:text-gray-400 flex gap-3 items-center justify-center",
          children: [
            e.jsx("span", {
              children: "\u{1F44B}"
            }),
            e.jsx("span", {
              className: "text-gray-700 dark:text-gray-300",
              children: r("welcome")
            })
          ]
        })
      })
    });
  };
  _e = () => {
    const { messages: s, streaming: a, regenerateLastMessage: r, isSearchingInternet: l, editMessage: n, ttsEnabled: x, onSubmit: c } = T(), [g, u] = f.useState(false), [y, k] = f.useState(null), [v] = L("openReasoning", false);
    return e.jsxs(e.Fragment, {
      children: [
        e.jsxs("div", {
          className: "relative flex w-full flex-col items-center pt-16 pb-4",
          children: [
            s.length === 0 && e.jsx("div", {
              className: "mt-32 w-full",
              children: e.jsx(ze, {})
            }),
            s.map((d, j) => e.jsx(Ne, {
              isBot: d.isBot,
              message: d.message,
              name: d.name,
              images: d.images || [],
              currentMessageIndex: j,
              totalMessages: s.length,
              onRengerate: r,
              isProcessing: a,
              isSearchingInternet: l,
              sources: d.sources,
              onEditFormSubmit: (p, m) => {
                n(j, p, !d.isBot, m);
              },
              onSourceClick: (p) => {
                k(p), u(true);
              },
              isTTSEnabled: x,
              generationInfo: d == null ? void 0 : d.generationInfo,
              isStreaming: a,
              reasoningTimeTaken: d == null ? void 0 : d.reasoning_time_taken,
              openReasoning: v,
              modelImage: d == null ? void 0 : d.modelImage,
              modelName: d == null ? void 0 : d.modelName,
              onContinue: () => {
                c({
                  image: "",
                  message: "",
                  isContinue: true
                });
              }
            }, j))
          ]
        }),
        e.jsx("div", {
          className: "w-full pb-[157px]"
        }),
        e.jsx(Ee, {
          open: g,
          setOpen: u,
          source: y
        })
      ]
    });
  };
  qe = (s, a) => {
    const r = E.useRef(null), [l, n] = E.useState(true);
    return E.useEffect(() => {
      const c = r.current;
      if (!c) return;
      const g = () => {
        const { scrollTop: u, scrollHeight: y, clientHeight: k } = c;
        n(y - u - k < 50);
      };
      return c.addEventListener("scroll", g), () => c.removeEventListener("scroll", g);
    }, []), E.useEffect(() => {
      var _a;
      if (s.length === 0) {
        n(true);
        return;
      }
      if (l && r.current) {
        const c = a ? {
          behavior: "smooth",
          block: "end"
        } : {
          behavior: "auto",
          block: "end"
        };
        (_a = r.current.lastElementChild) == null ? void 0 : _a.scrollIntoView(c);
      }
    }, [
      s,
      a,
      l
    ]), {
      containerRef: r,
      isAtBottom: l,
      scrollToBottom: () => {
        var _a, _b;
        (_b = (_a = r.current) == null ? void 0 : _a.lastElementChild) == null ? void 0 : _b.scrollIntoView({
          behavior: "smooth",
          block: "end"
        });
      }
    };
  };
  $e = () => {
    const s = f.useRef(null), [a, r] = f.useState(), { selectedKnowledge: l, messages: n, setHistoryId: x, setHistory: c, setMessages: g, setSelectedSystemPrompt: u, streaming: y } = T(), { setSystemPrompt: k } = Me(), { containerRef: v, isAtBottom: d, scrollToBottom: j } = qe(n, y), [p, m] = f.useState("idle");
    f.useEffect(() => {
      if (l || !s.current) return;
      const S = (i) => {
        i.preventDefault(), i.stopPropagation();
      }, b = (i) => {
        var _a, _b;
        if (i.preventDefault(), i.stopPropagation(), m("idle"), !Array.from(((_a = i.dataTransfer) == null ? void 0 : _a.files) || []).every((P) => P.type.startsWith("image/"))) {
          m("error");
          return;
        }
        const R = Array.from(((_b = i.dataTransfer) == null ? void 0 : _b.files) || []).slice(0, 1);
        R.length > 0 && r(R[0]);
      }, h = (i) => {
        i.preventDefault(), i.stopPropagation(), m("dragging");
      }, C = (i) => {
        i.preventDefault(), i.stopPropagation(), m("idle");
      };
      return s.current.addEventListener("dragover", S), s.current.addEventListener("drop", b), s.current.addEventListener("dragenter", h), s.current.addEventListener("dragleave", C), () => {
        s.current && (s.current.removeEventListener("dragover", S), s.current.removeEventListener("drop", b), s.current.removeEventListener("dragenter", h), s.current.removeEventListener("dragleave", C));
      };
    }, [
      l
    ]);
    const D = async () => {
      if (await be() && n.length === 0) {
        const b = await Te();
        if (b) {
          x(b.history.id), c(De(b.messages)), g(Pe(b.messages));
          const h = await Oe(b.history.id);
          h && (h.prompt_id && await Fe(h.prompt_id) && (u(h.prompt_id), k(h.prompt_content)), k(h.prompt_content));
        }
      }
    };
    return f.useEffect(() => {
      D();
    }, []), e.jsxs("div", {
      ref: s,
      className: `relative flex h-full flex-col items-center ${p === "dragging" ? "bg-gray-100 dark:bg-gray-800" : ""} bg-white dark:bg-[#171717]`,
      children: [
        e.jsx("div", {
          ref: v,
          className: "custom-scrollbar flex h-full w-full flex-col items-center overflow-x-hidden overflow-y-auto px-5",
          children: e.jsx(_e, {})
        }),
        e.jsxs("div", {
          className: "absolute bottom-0 w-full",
          children: [
            !d && e.jsx("div", {
              className: "fixed bottom-28 z-20 left-0 right-0 flex justify-center",
              children: e.jsx("button", {
                onClick: j,
                className: "bg-gray-50 shadow border border-gray-200 dark:border-none dark:bg-white/20 p-1.5 rounded-full pointer-events-auto",
                children: e.jsx(Ve, {
                  className: "size-4 text-gray-600 dark:text-gray-300"
                })
              })
            }),
            e.jsx(He, {
              dropedFile: a
            })
          ]
        })
      ]
    });
  };
  it = () => e.jsx(de, {
    children: e.jsx($e, {})
  });
});
export {
  __tla,
  it as default
};
