import { c as D, T as A, A as X, B as ge, C as U } from "./SaveButton-B6h4W40A.js";
import { a as _, j as t, r as k, c as w, g as fe, f as O, __tla as __tla_0 } from "./FontSizeProvider-C1DZf1x-.js";
import { r as he, s as me, m as Z, I as Q, n as ee, A as xe, T as ye, p as ve, o as be, q as pe, t as je, __tla as __tla_1 } from "./Sidebar-DZH9YUxk.js";
import { u as we } from "./use-form-JlyzcUxc.js";
import { g as ke, a as Me, b as Se, i as $e, c as Ne, d as Ce, e as Ee, f as W } from "./elevenlabs-Aq8HmJkY.js";
import { P as te, t as Te } from "./color-DZcOeaYD.js";
import { d as se, R as Pe } from "./rotate-ccw-DqNPwFS7.js";
let pt, bt, vt, Ie, St, Mt, yt, jt, $t, wt, kt;
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
  })()
]).then(async () => {
  const Re = D("Globe", [
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
      "path",
      {
        d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",
        key: "13o1zl"
      }
    ],
    [
      "path",
      {
        d: "M2 12h20",
        key: "9i4pu4"
      }
    ]
  ]);
  yt = D("Mic", [
    [
      "path",
      {
        d: "M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",
        key: "131961"
      }
    ],
    [
      "path",
      {
        d: "M19 10v2a7 7 0 0 1-14 0v-2",
        key: "1vc78b"
      }
    ],
    [
      "line",
      {
        x1: "12",
        x2: "12",
        y1: "19",
        y2: "22",
        key: "x3vr5v"
      }
    ]
  ]);
  const Ae = D("PlayCircle", [
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
      "polygon",
      {
        points: "10 8 16 12 10 16 10 8",
        key: "1cimsy"
      }
    ]
  ]);
  const De = D("Play", [
    [
      "polygon",
      {
        points: "6 3 20 12 6 21 6 3",
        key: "1oa8hb"
      }
    ]
  ]);
  const re = D("Square", [
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
    ]
  ]);
  vt = D("StopCircle", [
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
      "rect",
      {
        width: "6",
        height: "6",
        x: "9",
        y: "9",
        key: "1wrtvo"
      }
    ]
  ]);
  let ze, He, ne, Oe, Be, Fe, ae, Le;
  ze = D("Volume2", [
    [
      "polygon",
      {
        points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5",
        key: "16drj5"
      }
    ],
    [
      "path",
      {
        d: "M15.54 8.46a5 5 0 0 1 0 7.07",
        key: "ltjumu"
      }
    ],
    [
      "path",
      {
        d: "M19.07 4.93a10 10 0 0 1 0 14.14",
        key: "1kegas"
      }
    ]
  ]);
  He = () => {
    const { t: e } = _("common");
    return t.jsxs("div", {
      className: "animated-gradient-border mt-4 flex w-56 items-center gap-4 !rounded-lg bg-neutral-100 p-1 text-slate-900 dark:bg-neutral-800 dark:text-slate-50",
      children: [
        t.jsx("div", {
          className: "rounded p-1",
          children: t.jsx(Re, {
            className: "w-6 h-6"
          })
        }),
        t.jsx("div", {
          className: "text-sm font-semibold",
          children: e("webSearch")
        })
      ]
    });
  };
  Ie = (e, s, r) => {
    k.useEffect(() => {
      const n = e.current;
      if (n) {
        n.style.height = "0px";
        const i = n.scrollHeight;
        r ? (n.style.maxHeight = `${r}px`, n.style.overflowY = i > r ? "scroll" : "hidden", n.style.height = `${Math.min(i, r)}px`) : n.style.height = `${i}px`;
      }
    }, [
      e,
      s,
      r
    ]);
  };
  ne = (e) => {
    const [s, r] = w.useState(false), n = w.useRef(null), { t: i } = _("common"), l = we({
      initialValues: {
        message: e.value
      }
    });
    return Ie(n, l.values.message, 300), w.useEffect(() => {
      l.setFieldValue("message", e.value);
    }, [
      e.value
    ]), t.jsxs("form", {
      onSubmit: l.onSubmit((d) => {
        s || (e.onClose(), e.onSumbit(d.message, true));
      }),
      className: "flex flex-col gap-2",
      children: [
        t.jsx("textarea", {
          ...l.getInputProps("message"),
          onCompositionStart: () => {
          },
          onCompositionEnd: () => {
          },
          required: true,
          rows: 1,
          style: {
            minHeight: "60px"
          },
          tabIndex: 0,
          placeholder: i("editMessage.placeholder"),
          ref: n,
          className: "w-full  bg-transparent focus-within:outline-none focus:ring-0 focus-visible:ring-0 ring-0 dark:ring-0 border-0 dark:text-gray-100"
        }),
        t.jsx("div", {
          className: "flex flex-wrap gap-2 mt-2",
          children: t.jsxs("div", {
            className: `w-full flex ${e.isBot ? "justify-end" : "justify-between"}`,
            children: [
              !e.isBot && t.jsx("button", {
                type: "button",
                onClick: () => {
                  e.onSumbit(l.values.message, false), e.onClose();
                },
                "aria-label": i("save"),
                className: "border border-gray-600 px-2 py-1.5 rounded-lg text-gray-700 dark:text-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500 hover:bg-gray-100 dark:hover:bg-gray-900 text-sm",
                children: i("save")
              }),
              t.jsxs("div", {
                className: "flex space-x-2",
                children: [
                  t.jsx("button", {
                    "aria-label": i("save"),
                    className: "bg-black px-2 py-1.5 rounded-lg text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500 hover:bg-gray-900 text-sm",
                    children: e.isBot ? i("save") : i("saveAndSubmit")
                  }),
                  t.jsx("button", {
                    onClick: e.onClose,
                    "aria-label": i("cancel"),
                    className: "border dark:border-gray-600 px-2 py-1.5 rounded-lg text-gray-700 dark:text-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500 hover:bg-gray-100 dark:hover:bg-gray-900 text-sm",
                    children: i("cancel")
                  })
                ]
              })
            ]
          })
        }),
        " "
      ]
    });
  };
  Oe = w.forwardRef((e, s) => t.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    version: "1.1",
    viewBox: "0 0 303.188 303.188",
    xmlSpace: "preserve",
    ref: s,
    ...e,
    children: [
      t.jsx("path", {
        fill: "#E4E4E4",
        d: "M219.821 0L32.842 0 32.842 303.188 270.346 303.188 270.346 50.525z"
      }),
      t.jsx("path", {
        fill: "#007934",
        d: "M227.64 25.263L32.842 25.263 32.842 0 219.821 0z"
      }),
      t.jsx("g", {
        fill: "#A4A9AD",
        children: t.jsx("path", {
          d: "M114.872 227.984c-2.982 0-5.311 1.223-6.982 3.666-1.671 2.444-2.507 5.814-2.507 10.109 0 8.929 3.396 13.393 10.188 13.393 2.052 0 4.041-.285 5.967-.856a59.8 59.8 0 005.808-2.063v10.601c-3.872 1.713-8.252 2.57-13.14 2.57-7.004 0-12.373-2.031-16.107-6.094-3.734-4.062-5.602-9.934-5.602-17.615 0-4.803.904-9.023 2.714-12.663 1.809-3.64 4.411-6.438 7.808-8.395 3.396-1.957 7.39-2.937 11.98-2.937 5.016 0 9.808 1.09 14.378 3.27l-3.841 9.871a42.982 42.982 0 00-5.141-2.031c-1.714-.55-3.554-.826-5.523-.826zM166.732 250.678c0 2.878-.729 5.433-2.191 7.665-1.459 2.232-3.565 3.967-6.315 5.205-2.751 1.237-5.977 1.856-9.681 1.856-3.089 0-5.681-.217-7.775-.65-2.095-.434-4.274-1.191-6.538-2.27v-11.172a37.254 37.254 0 007.458 2.872c2.582.689 4.951 1.032 7.109 1.032 1.862 0 3.227-.322 4.095-.969.867-.645 1.302-1.476 1.302-2.491 0-.635-.175-1.19-.524-1.666-.349-.477-.91-.958-1.682-1.444-.772-.486-2.83-1.48-6.173-2.983-3.026-1.375-5.296-2.708-6.809-3.999s-2.634-2.771-3.364-4.443-1.095-3.65-1.095-5.936c0-4.273 1.555-7.605 4.666-9.997 3.109-2.391 7.384-3.587 12.822-3.587 4.803 0 9.7 1.111 14.694 3.333l-3.841 9.681c-4.337-1.989-8.082-2.984-11.234-2.984-1.63 0-2.814.286-3.555.857s-1.111 1.28-1.111 2.127c0 .91.471 1.725 1.412 2.443.941.72 3.496 2.031 7.665 3.936 3.999 1.799 6.776 3.729 8.331 5.792 1.557 2.063 2.334 4.661 2.334 7.792zM199.964 218.368h14.027l-15.202 46.401H184.03l-15.139-46.401h14.092l6.316 23.519c1.312 5.227 2.031 8.865 2.158 10.918.148-1.481.443-3.333.889-5.555.443-2.222.835-3.967 1.174-5.236l6.444-23.646z"
        })
      }),
      t.jsx("path", {
        fill: "#D1D3D3",
        d: "M219.821 50.525L270.346 50.525 219.821 0z"
      }),
      t.jsx("path", {
        fill: "#007934",
        d: "M134.957 80.344H168.231V95.762H134.957z"
      }),
      t.jsx("path", {
        fill: "#007934",
        d: "M175.602 80.344H208.875V95.762H175.602z"
      }),
      t.jsx("path", {
        fill: "#007934",
        d: "M134.957 102.661H168.231V118.08H134.957z"
      }),
      t.jsx("path", {
        fill: "#007934",
        d: "M175.602 102.661H208.875V118.08H175.602z"
      }),
      t.jsx("path", {
        fill: "#007934",
        d: "M134.957 124.979H168.231V140.397H134.957z"
      }),
      t.jsx("path", {
        fill: "#007934",
        d: "M175.602 124.979H208.875V140.397H175.602z"
      }),
      t.jsx("path", {
        fill: "#007934",
        d: "M94.312 124.979H127.58500000000001V140.397H94.312z"
      }),
      t.jsx("path", {
        fill: "#007934",
        d: "M134.957 147.298H168.231V162.716H134.957z"
      }),
      t.jsx("path", {
        fill: "#007934",
        d: "M175.602 147.298H208.875V162.716H175.602z"
      }),
      t.jsx("path", {
        fill: "#007934",
        d: "M94.312 147.298H127.58500000000001V162.716H94.312z"
      }),
      t.jsx("path", {
        fill: "#007934",
        d: "M127.088 116.162h-10.04l-6.262-10.041-6.196 10.041h-9.821l10.656-16.435L95.406 84.04h9.624l5.8 9.932 5.581-9.932h9.909l-10.173 16.369 10.941 15.753z"
      })
    ]
  }));
  Be = w.forwardRef((e, s) => t.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    version: "1.1",
    viewBox: "0 0 303.188 303.188",
    xmlSpace: "preserve",
    ref: s,
    ...e,
    children: [
      t.jsx("path", {
        fill: "#E8E8E8",
        d: "M219.821 0L32.842 0 32.842 303.188 270.346 303.188 270.346 50.525z"
      }),
      t.jsx("path", {
        fill: "#FB3449",
        d: "M230.013 149.935c-3.643-6.493-16.231-8.533-22.006-9.451-4.552-.724-9.199-.94-13.803-.936-3.615-.024-7.177.154-10.693.354-1.296.087-2.579.199-3.861.31a93.594 93.594 0 01-3.813-4.202c-7.82-9.257-14.134-19.755-19.279-30.664 1.366-5.271 2.459-10.772 3.119-16.485 1.205-10.427 1.619-22.31-2.288-32.251-1.349-3.431-4.946-7.608-9.096-5.528-4.771 2.392-6.113 9.169-6.502 13.973-.313 3.883-.094 7.776.558 11.594.664 3.844 1.733 7.494 2.897 11.139a165.324 165.324 0 003.588 9.943 171.593 171.593 0 01-2.63 7.603c-2.152 5.643-4.479 11.004-6.717 16.161l-3.465 7.507c-3.576 7.855-7.458 15.566-11.815 23.02-10.163 3.585-19.283 7.741-26.857 12.625-4.063 2.625-7.652 5.476-10.641 8.603-2.822 2.952-5.69 6.783-5.941 11.024-.141 2.394.807 4.717 2.768 6.137 2.697 2.015 6.271 1.881 9.4 1.225 10.25-2.15 18.121-10.961 24.824-18.387 4.617-5.115 9.872-11.61 15.369-19.465l.037-.054c9.428-2.923 19.689-5.391 30.579-7.205 4.975-.825 10.082-1.5 15.291-1.974 3.663 3.431 7.621 6.555 11.939 9.164 3.363 2.069 6.94 3.816 10.684 5.119 3.786 1.237 7.595 2.247 11.528 2.886 1.986.284 4.017.413 6.092.335 4.631-.175 11.278-1.951 11.714-7.57.134-1.72-.237-3.228-.98-4.55zm-110.869 10.31a170.827 170.827 0 01-6.232 9.041c-4.827 6.568-10.34 14.369-18.322 17.286-1.516.554-3.512 1.126-5.616 1.002-1.874-.11-3.722-.937-3.637-3.065.042-1.114.587-2.535 1.423-3.931.915-1.531 2.048-2.935 3.275-4.226 2.629-2.762 5.953-5.439 9.777-7.918 5.865-3.805 12.867-7.23 20.672-10.286-.449.71-.897 1.416-1.34 2.097zm27.222-84.26a38.169 38.169 0 01-.323-10.503 24.858 24.858 0 011.038-4.952c.428-1.33 1.352-4.576 2.826-4.993 2.43-.688 3.177 4.529 3.452 6.005 1.566 8.396.186 17.733-1.693 25.969-.299 1.31-.632 2.599-.973 3.883a121.219 121.219 0 01-1.648-4.821c-1.1-3.525-2.106-7.091-2.679-10.588zm16.683 66.28a236.508 236.508 0 00-25.979 5.708c.983-.275 5.475-8.788 6.477-10.555 4.721-8.315 8.583-17.042 11.358-26.197 4.9 9.691 10.847 18.962 18.153 27.214.673.749 1.357 1.489 2.053 2.22-4.094.441-8.123.978-12.062 1.61zm61.744 11.694c-.334 1.805-4.189 2.837-5.988 3.121-5.316.836-10.94.167-16.028-1.542-3.491-1.172-6.858-2.768-10.057-4.688-3.18-1.921-6.155-4.181-8.936-6.673 3.429-.206 6.9-.341 10.388-.275 3.488.035 7.003.211 10.475.664 6.511.726 13.807 2.961 18.932 7.186 1.009.833 1.331 1.569 1.214 2.207z"
      }),
      t.jsx("path", {
        fill: "#FB3449",
        d: "M227.64 25.263L32.842 25.263 32.842 0 219.821 0z"
      }),
      t.jsx("g", {
        fill: "#A4A9AD",
        children: t.jsx("path", {
          d: "M126.841 241.152c0 5.361-1.58 9.501-4.742 12.421-3.162 2.921-7.652 4.381-13.472 4.381h-3.643v15.917H92.022v-47.979h16.606c6.06 0 10.611 1.324 13.652 3.971 3.041 2.647 4.561 6.41 4.561 11.289zm-21.856 6.235h2.363c1.947 0 3.495-.546 4.644-1.641 1.149-1.094 1.723-2.604 1.723-4.529 0-3.238-1.794-4.857-5.382-4.857h-3.348v11.027zM175.215 248.864c0 8.007-2.205 14.177-6.613 18.509s-10.606 6.498-18.591 6.498h-15.523v-47.979h16.606c7.701 0 13.646 1.969 17.836 5.907 4.189 3.938 6.285 9.627 6.285 17.065zm-13.455.46c0-4.398-.87-7.657-2.609-9.78-1.739-2.122-4.381-3.183-7.926-3.183h-3.773v26.877h2.888c3.939 0 6.826-1.143 8.664-3.43 1.837-2.285 2.756-5.78 2.756-10.484zM196.579 273.871h-12.766v-47.979h28.355v10.403h-15.589v9.156h14.374v10.403h-14.374v18.017z"
        })
      }),
      t.jsx("path", {
        fill: "#D1D3D3",
        d: "M219.821 50.525L270.346 50.525 219.821 0z"
      })
    ]
  }));
  Fe = w.forwardRef((e, s) => t.jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "-4 0 64 64",
    ref: s,
    ...e,
    children: [
      t.jsx("path", {
        fill: "#F9CA06",
        fillRule: "evenodd",
        d: "M5.151-.036A5.074 5.074 0 00.077 5.038v53.841a5.073 5.073 0 005.074 5.074h45.774a5.074 5.074 0 005.074-5.074V20.274L37.097-.036H5.151z",
        clipRule: "evenodd"
      }),
      t.jsxs("g", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        children: [
          t.jsx("path", {
            fill: "#F7BC04",
            d: "M56.008 20.316v1H43.209s-6.312-1.26-6.129-6.708c0 0 .208 5.708 6.004 5.708h12.924z"
          }),
          t.jsx("path", {
            fill: "#fff",
            d: "M37.106-.036v14.561c0 1.656 1.104 5.792 6.104 5.792h12.799L37.106-.036z",
            opacity: "0.5"
          })
        ]
      }),
      t.jsx("path", {
        fill: "#fff",
        d: "M18.763 43.045h-3.277v10.047a.734.734 0 01-.756.738.73.73 0 01-.738-.738V43.045h-3.259c-.36 0-.648-.288-.648-.684 0-.36.288-.648.648-.648h8.03c.36 0 .648.288.648.685a.645.645 0 01-.648.647zm11.7 10.803a.64.64 0 01-.541-.27l-3.727-4.97-3.745 4.97a.639.639 0 01-.54.27.71.71 0 01-.72-.72c0-.144.036-.306.144-.432l3.889-5.131-3.619-4.826a.721.721 0 01-.144-.414c0-.343.288-.721.72-.721.216 0 .432.108.576.288l3.439 4.627 3.439-4.646a.642.642 0 01.541-.27c.378 0 .738.306.738.721a.7.7 0 01-.126.414l-3.619 4.808 3.89 5.149c.09.126.126.27.126.415a.739.739 0 01-.721.738zm11.195-10.803h-3.277v10.047a.734.734 0 01-.756.738.73.73 0 01-.738-.738V43.045h-3.259c-.36 0-.648-.288-.648-.684 0-.36.288-.648.648-.648h8.03c.36 0 .648.288.648.685a.644.644 0 01-.648.647z"
      })
    ]
  }));
  ae = ({ type: e, className: s = "w-6 h-6" }) => {
    if (e === "pdf" || e === "application/pdf") return t.jsx(Be, {
      className: s
    });
    if (e === "csv" || e === "text/csv") return t.jsx(Oe, {
      className: s
    });
    if (e === "txt" || e === "text/plain") return t.jsx(Fe, {
      className: s
    });
  };
  Le = ({ source: e, onSourceClick: s }) => (e == null ? void 0 : e.mode) === "rag" || (e == null ? void 0 : e.mode) === "chat" ? t.jsxs("button", {
    onClick: () => {
      s && s(e);
    },
    className: "inline-flex gap-2   cursor-pointer transition-shadow duration-300 ease-in-out hover:shadow-lg  items-center rounded-md bg-gray-100 p-1 text-xs text-gray-800 border border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100 opacity-80 hover:opacity-100",
    children: [
      t.jsx(ae, {
        type: e.type,
        className: "h-3 w-3"
      }),
      t.jsx("span", {
        className: "text-xs",
        children: e.name
      })
    ]
  }) : t.jsx("a", {
    href: e == null ? void 0 : e.url,
    target: "_blank",
    className: "inline-flex cursor-pointer transition-shadow duration-300 ease-in-out hover:shadow-lg  items-center rounded-md bg-gray-100 p-1 text-xs text-gray-800 border border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100 opacity-80 hover:opacity-100",
    children: t.jsx("span", {
      className: "text-xs",
      children: e.name
    })
  });
  function _e(e) {
    let s = e.replace(/\\n/g, "<break/>");
    return s = s.replace(/^(#{1,6}) (.*?)(?=\r?\n\s*?(?:\r?\n|$))/gm, (r, n, i) => `<prosody rate="${(n.length - 1) * 10 + 100}%">${i}</prosody>`), s = s.replace(/\\\*\\\*(.\*?)\\\*\\\*/g, "<emphasis>$1</emphasis>"), s = s.replace(/\\\*(.\*?)\\\*/g, '<amazon:effect name="whispered">$1</amazon:effect>'), s = `<speak>${s}</speak>`, `<?xml version="1.0"?>${s}`;
  }
  const ie = /```[\s\S]*?```/g, Ve = (e) => {
    const s = /[\uD800-\uDBFF][\uDC00-\uDFFF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDE4F]/g;
    return e.replace(s, "");
  }, Ze = (e) => e.replace(/(```[\s\S]*?```)/g, "").replace(/^\|.*\|$/gm, "").replace(/(?:\*\*|__)(.*?)(?:\*\*|__)/g, "$1").replace(/(?:[*_])(.*?)(?:[*_])/g, "$1").replace(/~~(.*?)~~/g, "$1").replace(/`([^`]+)`/g, "$1").replace(/!?\[([^\]]*)\](?:\([^)]+\)|\[[^\]]*\])/g, "$1").replace(/^\[[^\]]+\]:\s*.*$/gm, "").replace(/^#{1,6}\s+/gm, "").replace(/^\s*[-*+]\s+/gm, "").replace(/^\s*(?:\d+\.)\s+/gm, "").replace(/^\s*>[> ]*/gm, "").replace(/^\s*:\s+/gm, "").replace(/\[\^[^\]]*\]/g, "").replace(/[-*_~]/g, "").replace(/\n{2,}/g, `
`), Y = (e) => Ze(Ve(e.trim())), Ye = (e) => {
    const s = [];
    let r = 0;
    return e.replace(ie, (l) => {
      const d = `\0${r}\0`;
      return s[r++] = l, d;
    }).split(new RegExp("(?<=[.!?])\\s+")).map((l) => l.replace(/\u0000(\d+)\u0000/g, (d, c) => s[c])).map(Y).filter(Boolean);
  }, Ue = (e) => {
    const s = [];
    let r = 0;
    return e.replace(ie, (i) => {
      const l = `\0${r}\0`;
      return s[r++] = i, l;
    }).split(/\n+/).map((i) => i.replace(/\u0000(\d+)\u0000/g, (l, d) => s[d])).map(Y).filter(Boolean);
  }, We = (e) => Ye(e).reduce((s, r) => {
    const n = s.length - 1;
    if (n >= 0) {
      const i = s[n], l = i.split(/\s+/).length, d = i.length;
      l < 4 || d < 50 ? s[n] = `${i} ${r}` : s.push(r);
    } else s.push(r);
    return s;
  }, []), Ke = (e, s = "punctuation") => {
    const r = [];
    switch (s) {
      case "punctuation":
        r.push(...We(e));
        break;
      case "paragraph":
        r.push(...Ue(e));
        break;
      case "none":
        r.push(Y(e));
        break;
    }
    return r;
  }, oe = () => {
    const [e, s] = k.useState(false), [r, n] = k.useState(null), i = async ({ utterance: d }) => {
      try {
        const c = await ke(), u = await Me();
        if (await Se() && (d = he(d)), u === "browser") {
          await $e() && (d = _e(d));
          {
            const p = new SpeechSynthesisUtterance(d);
            p.onstart = () => {
              s(true);
            }, p.onend = () => {
              s(false);
            };
            const f = window.speechSynthesis.getVoices().find((m) => m.name === c);
            f ? p.voice = f : window.speechSynthesis.onvoiceschanged = () => {
              const b = window.speechSynthesis.getVoices().find((R) => R.name === c);
              b && (p.voice = b);
            }, window.speechSynthesis.speak(p);
          }
        } else if (u === "elevenlabs") {
          const x = await Ne(), p = await Ce(), j = await Ee(), f = Ke(d);
          let m = null;
          if (!x || !p || !j) throw new Error("Missing ElevenLabs configuration");
          for (let b = 0; b < f.length; b++) {
            s(true);
            let R = m || await W(x, f[b], j, p);
            b < f.length - 1 && W(x, f[b + 1], j, p).then((T) => {
              T = T;
            }).catch(console.error);
            const E = new Blob([
              R
            ], {
              type: "audio/mpeg"
            }), z = URL.createObjectURL(E), C = new Audio(z);
            n(C), await new Promise((T) => {
              C.onended = T, C.play();
            }), URL.revokeObjectURL(z);
          }
          s(false), n(null);
        }
      } catch {
        s(false), n(null), me.error({
          message: "Error",
          description: "Something went wrong while trying to play the audio"
        });
      }
    }, l = () => {
      if (r) {
        r.pause(), r.currentTime = 0, n(null), s(false);
        return;
      }
      window.speechSynthesis.cancel(), s(false);
    };
    return k.useEffect(() => () => {
      l();
    }, []), {
      speak: i,
      cancel: l,
      isSpeaking: e
    };
  }, Ge = ({ generationInfo: e }) => {
    if (!e) return null;
    const s = (i, l) => !i || !l ? 0 : i / l * 1e9, r = (i) => {
      if (!i) return "0ms";
      const l = i / 1e6;
      return l < 1 ? `${l.toFixed(3)}ms` : l < 1e3 ? `${Math.round(l)}ms` : `${(l / 1e3).toFixed(2)}s`;
    }, n = {
      ...e,
      ...(e == null ? void 0 : e.eval_count) && (e == null ? void 0 : e.eval_duration) ? {
        tokens_per_second: s(e.eval_count, e.eval_duration).toFixed(2)
      } : {}
    };
    return t.jsx("div", {
      className: "p-2 w-full",
      children: t.jsx("div", {
        className: "flex flex-col gap-2",
        children: Object.entries(n).filter(([i]) => i !== "model").map(([i, l]) => t.jsxs("div", {
          className: "flex flex-wrap justify-between",
          children: [
            t.jsx("div", {
              className: "font-medium text-xs",
              children: i
            }),
            t.jsx("div", {
              className: "font-medium text-xs break-all",
              children: i.includes("duration") ? r(l) : String(l)
            })
          ]
        }, i))
      })
    });
  };
  var B = {
    exports: {}
  }, qe = B.exports, K;
  function Je() {
    return K || (K = 1, function(e, s) {
      (function(r, n) {
        e.exports = n();
      })(qe, function() {
        var r, n, i = 1e3, l = 6e4, d = 36e5, c = 864e5, u = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, N = 31536e6, x = 2628e6, p = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, j = {
          years: N,
          months: x,
          days: c,
          hours: d,
          minutes: l,
          seconds: i,
          milliseconds: 1,
          weeks: 6048e5
        }, f = function(h) {
          return h instanceof T;
        }, m = function(h, o, a) {
          return new T(h, a, o.$l);
        }, b = function(h) {
          return n.p(h) + "s";
        }, R = function(h) {
          return h < 0;
        }, E = function(h) {
          return R(h) ? Math.ceil(h) : Math.floor(h);
        }, z = function(h) {
          return Math.abs(h);
        }, C = function(h, o) {
          return h ? R(h) ? {
            negative: true,
            format: "" + z(h) + o
          } : {
            negative: false,
            format: "" + h + o
          } : {
            negative: false,
            format: ""
          };
        }, T = function() {
          function h(a, g, v) {
            var y = this;
            if (this.$d = {}, this.$l = v, a === void 0 && (this.$ms = 0, this.parseFromMilliseconds()), g) return m(a * j[b(g)], this);
            if (typeof a == "number") return this.$ms = a, this.parseFromMilliseconds(), this;
            if (typeof a == "object") return Object.keys(a).forEach(function($) {
              y.$d[b($)] = a[$];
            }), this.calMilliseconds(), this;
            if (typeof a == "string") {
              var M = a.match(p);
              if (M) {
                var S = M.slice(2).map(function($) {
                  return $ != null ? Number($) : 0;
                });
                return this.$d.years = S[0], this.$d.months = S[1], this.$d.weeks = S[2], this.$d.days = S[3], this.$d.hours = S[4], this.$d.minutes = S[5], this.$d.seconds = S[6], this.calMilliseconds(), this;
              }
            }
            return this;
          }
          var o = h.prototype;
          return o.calMilliseconds = function() {
            var a = this;
            this.$ms = Object.keys(this.$d).reduce(function(g, v) {
              return g + (a.$d[v] || 0) * j[v];
            }, 0);
          }, o.parseFromMilliseconds = function() {
            var a = this.$ms;
            this.$d.years = E(a / N), a %= N, this.$d.months = E(a / x), a %= x, this.$d.days = E(a / c), a %= c, this.$d.hours = E(a / d), a %= d, this.$d.minutes = E(a / l), a %= l, this.$d.seconds = E(a / i), a %= i, this.$d.milliseconds = a;
          }, o.toISOString = function() {
            var a = C(this.$d.years, "Y"), g = C(this.$d.months, "M"), v = +this.$d.days || 0;
            this.$d.weeks && (v += 7 * this.$d.weeks);
            var y = C(v, "D"), M = C(this.$d.hours, "H"), S = C(this.$d.minutes, "M"), $ = this.$d.seconds || 0;
            this.$d.milliseconds && ($ += this.$d.milliseconds / 1e3, $ = Math.round(1e3 * $) / 1e3);
            var H = C($, "S"), I = a.negative || g.negative || y.negative || M.negative || S.negative || H.negative, de = M.format || S.format || H.format ? "T" : "", V = (I ? "-" : "") + "P" + a.format + g.format + y.format + de + M.format + S.format + H.format;
            return V === "P" || V === "-P" ? "P0D" : V;
          }, o.toJSON = function() {
            return this.toISOString();
          }, o.format = function(a) {
            var g = a || "YYYY-MM-DDTHH:mm:ss", v = {
              Y: this.$d.years,
              YY: n.s(this.$d.years, 2, "0"),
              YYYY: n.s(this.$d.years, 4, "0"),
              M: this.$d.months,
              MM: n.s(this.$d.months, 2, "0"),
              D: this.$d.days,
              DD: n.s(this.$d.days, 2, "0"),
              H: this.$d.hours,
              HH: n.s(this.$d.hours, 2, "0"),
              m: this.$d.minutes,
              mm: n.s(this.$d.minutes, 2, "0"),
              s: this.$d.seconds,
              ss: n.s(this.$d.seconds, 2, "0"),
              SSS: n.s(this.$d.milliseconds, 3, "0")
            };
            return g.replace(u, function(y, M) {
              return M || String(v[y]);
            });
          }, o.as = function(a) {
            return this.$ms / j[b(a)];
          }, o.get = function(a) {
            var g = this.$ms, v = b(a);
            return v === "milliseconds" ? g %= 1e3 : g = v === "weeks" ? E(g / j[v]) : this.$d[v], g || 0;
          }, o.add = function(a, g, v) {
            var y;
            return y = g ? a * j[b(g)] : f(a) ? a.$ms : m(a, this).$ms, m(this.$ms + y * (v ? -1 : 1), this);
          }, o.subtract = function(a, g) {
            return this.add(a, g, true);
          }, o.locale = function(a) {
            var g = this.clone();
            return g.$l = a, g;
          }, o.clone = function() {
            return m(this.$ms, this);
          }, o.humanize = function(a) {
            return r().add(this.$ms, "ms").locale(this.$l).fromNow(!a);
          }, o.valueOf = function() {
            return this.asMilliseconds();
          }, o.milliseconds = function() {
            return this.get("milliseconds");
          }, o.asMilliseconds = function() {
            return this.as("milliseconds");
          }, o.seconds = function() {
            return this.get("seconds");
          }, o.asSeconds = function() {
            return this.as("seconds");
          }, o.minutes = function() {
            return this.get("minutes");
          }, o.asMinutes = function() {
            return this.as("minutes");
          }, o.hours = function() {
            return this.get("hours");
          }, o.asHours = function() {
            return this.as("hours");
          }, o.days = function() {
            return this.get("days");
          }, o.asDays = function() {
            return this.as("days");
          }, o.weeks = function() {
            return this.get("weeks");
          }, o.asWeeks = function() {
            return this.as("weeks");
          }, o.months = function() {
            return this.get("months");
          }, o.asMonths = function() {
            return this.as("months");
          }, o.years = function() {
            return this.get("years");
          }, o.asYears = function() {
            return this.as("years");
          }, h;
        }(), P = function(h, o, a) {
          return h.add(o.years() * a, "y").add(o.months() * a, "M").add(o.days() * a, "d").add(o.hours() * a, "h").add(o.minutes() * a, "m").add(o.seconds() * a, "s").add(o.milliseconds() * a, "ms");
        };
        return function(h, o, a) {
          r = a, n = a().$utils(), a.duration = function(y, M) {
            var S = a.locale();
            return m(y, {
              $l: S
            }, M);
          }, a.isDuration = f;
          var g = o.prototype.add, v = o.prototype.subtract;
          o.prototype.add = function(y, M) {
            return f(y) ? P(this, y, 1) : g.bind(this)(y, M);
          }, o.prototype.subtract = function(y, M) {
            return f(y) ? P(this, y, -1) : v.bind(this)(y, M);
          };
        };
      });
    }(B)), B.exports;
  }
  var Xe = Je();
  const Qe = fe(Xe);
  se.extend(Qe);
  let et, tt, st, G;
  et = (e) => {
    try {
      const s = se.duration(e);
      return e < 1e3 ? `${e}ms` : e < 6e4 ? `${Math.floor(s.asSeconds())}s` : e < 36e5 ? `${Math.floor(s.asMinutes())}m` : e < 864e5 ? `${Math.floor(s.asHours())}h` : `${Math.floor(s.asDays())}d`;
    } catch {
      return `${e}ms`;
    }
  };
  tt = ({ message: e }) => {
    const [s] = O("useMarkdownForUserMessage", false);
    return s ? t.jsx(Z, {
      message: e
    }) : t.jsx("span", {
      className: "whitespace-pre-wrap",
      children: e
    });
  };
  st = (e) => {
    const [s] = O("checkWideMode", false), [r, n] = w.useState(false), [i, l] = w.useState(false), { t: d } = _("common"), { cancel: c, isSpeaking: u, speak: N } = oe();
    return t.jsxs("div", {
      className: `group gap-2 relative flex w-full max-w-3xl flex-col items-end justify-center pb-2 md:px-4 lg:w-4/5 text-[#242424] dark:text-gray-100 ${s ? "max-w-none" : ""}`,
      children: [
        t.jsx("div", {
          dir: "auto",
          className: "message-bubble bg-gray-50 dark:bg-[#242424] rounded-3xl prose dark:prose-invert break-words text-primary min-h-7 prose-p:opacity-95 prose-strong:opacity-100 bg-foreground border border-input-border max-w-[100%] sm:max-w-[90%] px-4 py-2.5 rounded-br-lg dark:border-[#2D2D2D]",
          children: i ? t.jsx("div", {
            className: "w-screen max-w-[100%]",
            children: t.jsx(ne, {
              value: e.message,
              onSumbit: e.onEditFormSubmit,
              onClose: () => l(false),
              isBot: e.isBot
            })
          }) : t.jsx(tt, {
            message: e.message
          })
        }),
        e.images && e.images.filter((x) => x.length > 0).length > 0 && t.jsx("div", {
          children: e.images.filter((x) => x.length > 0).map((x, p) => t.jsx(Q, {
            src: x,
            alt: "Uploaded Image",
            width: 180,
            className: "rounded-lg relative"
          }, p))
        }),
        !e.isProcessing && !i ? t.jsxs("div", {
          className: `space-x-2 gap-2 flex ${e.currentMessageIndex !== e.totalMessages - 1 ? "invisible group-hover:visible" : ""}`,
          children: [
            e.isTTSEnabled && t.jsx(A, {
              title: d("tts"),
              children: t.jsx("button", {
                "aria-label": d("tts"),
                onClick: () => {
                  u ? c() : N({
                    utterance: e.message
                  });
                },
                className: "flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 dark:bg-[#242424] hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500",
                children: u ? t.jsx(re, {
                  className: "w-3 h-3 text-red-400 group-hover:text-red-500"
                }) : t.jsx(De, {
                  className: "w-3 h-3 text-gray-400 group-hover:text-gray-500"
                })
              })
            }),
            !e.hideCopy && t.jsx(A, {
              title: d("copyToClipboard"),
              children: t.jsx("button", {
                "aria-label": d("copyToClipboard"),
                onClick: () => {
                  navigator.clipboard.writeText(e.message), n(true), setTimeout(() => {
                    n(false);
                  }, 2e3);
                },
                className: "flex items-center justify-center w-6 h-6 rounded-full bg-gray-50 dark:bg-[#242424] hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500",
                children: r ? t.jsx(X, {
                  className: "w-3 h-3 text-green-400 group-hover:text-green-500"
                }) : t.jsx(ee, {
                  className: "w-3 h-3 text-gray-400 group-hover:text-gray-500"
                })
              })
            }),
            !e.hideEditAndRegenerate && t.jsx(A, {
              title: d("edit"),
              children: t.jsx("button", {
                onClick: () => l(true),
                "aria-label": d("edit"),
                className: "flex items-center justify-center w-6 h-6 rounded-full bg-gray-50 dark:bg-[#242424] hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500",
                children: t.jsx(te, {
                  className: "w-3 h-3 text-gray-400 group-hover:text-gray-500"
                })
              })
            })
          ]
        }) : t.jsx("div", {
          className: "invisible",
          children: t.jsx("div", {
            className: "flex items-center justify-center w-6 h-6 rounded-full bg-gray-50 dark:bg-[#242424] hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          })
        })
      ]
    });
  };
  bt = (e) => {
    var _a, _b;
    const [s, r] = w.useState(false), [n, i] = w.useState(false), [l] = O("checkWideMode", false), [d] = O("userChatBubble", true), [c] = O("autoCopyResponseToClipboard", false), { t: u } = _("common"), { cancel: N, isSpeaking: x, speak: p } = oe(), j = e.currentMessageIndex === e.totalMessages - 1;
    return k.useEffect(() => {
      c && e.isBot && j && !e.isStreaming && !e.isProcessing && e.message.trim().length > 0 && (navigator.clipboard.writeText(e.message), r(true), setTimeout(() => {
        r(false);
      }, 2e3));
    }, [
      c,
      e.isBot,
      e.currentMessageIndex,
      e.totalMessages,
      e.isStreaming,
      e.isProcessing,
      e.message
    ]), d && !e.isBot ? t.jsx(st, {
      ...e
    }) : t.jsx("div", {
      className: `group relative flex w-full max-w-3xl flex-col items-end justify-center pb-2 md:px-4 lg:w-4/5 text-gray-800 dark:text-gray-100 ${l ? "max-w-none" : ""}`,
      children: t.jsxs("div", {
        className: "flex flex-row gap-4 md:gap-6 my-2 m-auto w-full",
        children: [
          t.jsx("div", {
            className: "w-8 flex flex-col relative items-end",
            children: e.isBot ? e.modelImage ? t.jsx(xe, {
              src: e.modelImage,
              alt: e.name,
              className: "size-8"
            }) : t.jsx("div", {
              className: "relative h-7 w-7 p-1 rounded-sm text-white flex items-center justify-center  text-opacity-100",
              children: t.jsx("div", {
                className: "absolute h-8 w-8 rounded-full bg-gradient-to-r from-green-300 to-purple-400"
              })
            }) : e.userAvatar ? e.userAvatar : t.jsx("div", {
              className: "relative h-7 w-7 p-1 rounded-sm text-white flex items-center justify-center  text-opacity-100",
              children: t.jsx("div", {
                className: "absolute h-8 w-8 rounded-full from-blue-400 to-blue-600 bg-gradient-to-r"
              })
            })
          }),
          t.jsxs("div", {
            className: "flex w-[calc(100%-50px)] flex-col gap-2 lg:w-[calc(100%-115px)]",
            children: [
              t.jsx("span", {
                className: "text-xs font-bold text-gray-800 dark:text-white",
                children: e.isBot ? e.name === "chrome::gemini-nano::page-assist" ? "Gemini Nano" : ge((_a = `${(e == null ? void 0 : e.modelName) || (e == null ? void 0 : e.name)}`) == null ? void 0 : _a.replaceAll(/accounts\/[^\/]+\/models\//g, "")) : "You"
              }),
              e.isBot && e.isSearchingInternet && j ? t.jsx(He, {}) : null,
              t.jsx("div", {
                children: (e == null ? void 0 : e.message_type) && t.jsx(ye, {
                  color: Te[e == null ? void 0 : e.message_type] || "default",
                  children: u(`copilot.${e == null ? void 0 : e.message_type}`)
                })
              }),
              t.jsx("div", {
                className: "flex flex-grow flex-col",
                children: n ? t.jsx(ne, {
                  value: e.message,
                  onSumbit: e.onEditFormSubmit,
                  onClose: () => i(false),
                  isBot: e.isBot
                }) : e.isBot ? t.jsx(t.Fragment, {
                  children: ve(e.message).map((f, m) => f.type === "reasoning" ? t.jsx(U, {
                    className: "border-none !mb-3",
                    defaultActiveKey: (e == null ? void 0 : e.openReasoning) ? "reasoning" : void 0,
                    items: [
                      {
                        key: "reasoning",
                        label: e.isStreaming && (f == null ? void 0 : f.reasoning_running) ? t.jsx("div", {
                          className: "flex items-center gap-2",
                          children: t.jsx("span", {
                            className: "italic",
                            children: u("reasoning.thinking")
                          })
                        }) : u("reasoning.thought", {
                          time: et(e.reasoningTimeTaken)
                        }),
                        children: t.jsx(Z, {
                          message: f.content
                        })
                      }
                    ]
                  }, m) : t.jsx(Z, {
                    message: f.content
                  }, m))
                }) : t.jsx("p", {
                  className: `prose dark:prose-invert whitespace-pre-line prose-p:leading-relaxed prose-pre:p-0 dark:prose-dark ${e.message_type && "italic text-gray-500 dark:text-gray-400 text-sm"}
                  ${l ? "max-w-none" : ""}
                  `,
                  children: e.message
                })
              }),
              e.images && e.images.filter((f) => f.length > 0).length > 0 && t.jsx("div", {
                children: e.images.filter((f) => f.length > 0).map((f, m) => t.jsx(Q, {
                  src: f,
                  alt: "Uploaded Image",
                  width: 180,
                  className: "rounded-md relative"
                }, m))
              }),
              e.isBot && (e == null ? void 0 : e.sources) && (e == null ? void 0 : e.sources.length) > 0 && t.jsx(U, {
                className: "mt-6",
                ghost: true,
                items: [
                  {
                    key: "1",
                    label: t.jsx("div", {
                      className: "italic text-gray-500 dark:text-gray-400",
                      children: u("citations")
                    }),
                    children: t.jsx("div", {
                      className: "mb-3 flex flex-wrap gap-2",
                      children: (_b = e == null ? void 0 : e.sources) == null ? void 0 : _b.map((f, m) => t.jsx(Le, {
                        onSourceClick: e.onSourceClick,
                        source: f
                      }, m))
                    })
                  }
                ]
              }),
              !e.isProcessing && !n ? t.jsxs("div", {
                className: `space-x-2 gap-2 flex ${e.currentMessageIndex !== e.totalMessages - 1 ? "invisible group-hover:visible" : ""}`,
                children: [
                  e.isTTSEnabled && t.jsx(A, {
                    title: u("tts"),
                    children: t.jsx("button", {
                      "aria-label": u("tts"),
                      onClick: () => {
                        x ? N() : p({
                          utterance: e.message
                        });
                      },
                      className: "flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500",
                      children: x ? t.jsx(re, {
                        className: "w-3 h-3 text-red-400 group-hover:text-red-500"
                      }) : t.jsx(ze, {
                        className: "w-3 h-3 text-gray-400 group-hover:text-gray-500"
                      })
                    })
                  }),
                  !e.hideCopy && t.jsx(A, {
                    title: u("copyToClipboard"),
                    children: t.jsx("button", {
                      "aria-label": u("copyToClipboard"),
                      onClick: () => {
                        navigator.clipboard.writeText(e.message), r(true), setTimeout(() => {
                          r(false);
                        }, 2e3);
                      },
                      className: "flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500",
                      children: s ? t.jsx(X, {
                        className: "w-3 h-3 text-green-400 group-hover:text-green-500"
                      }) : t.jsx(ee, {
                        className: "w-3 h-3 text-gray-400 group-hover:text-gray-500"
                      })
                    })
                  }),
                  e.isBot && t.jsxs(t.Fragment, {
                    children: [
                      e.generationInfo && t.jsx(be, {
                        content: t.jsx(Ge, {
                          generationInfo: e.generationInfo
                        }),
                        title: u("generationInfo"),
                        children: t.jsx("button", {
                          "aria-label": u("generationInfo"),
                          className: "flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500",
                          children: t.jsx(pe, {
                            className: "w-3 h-3 text-gray-400 group-hover:text-gray-500"
                          })
                        })
                      }),
                      !e.hideEditAndRegenerate && j && t.jsx(A, {
                        title: u("regenerate"),
                        children: t.jsx("button", {
                          "aria-label": u("regenerate"),
                          onClick: e.onRengerate,
                          className: "flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500",
                          children: t.jsx(Pe, {
                            className: "w-3 h-3 text-gray-400 group-hover:text-gray-500"
                          })
                        })
                      }),
                      !e.hideContinue && j && t.jsx(A, {
                        title: u("continue"),
                        children: t.jsx("button", {
                          "aria-label": u("continue"),
                          onClick: e == null ? void 0 : e.onContinue,
                          className: "flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500",
                          children: t.jsx(Ae, {
                            className: "w-3 h-3 text-gray-400 group-hover:text-gray-500"
                          })
                        })
                      })
                    ]
                  }),
                  !e.hideEditAndRegenerate && t.jsx(A, {
                    title: u("edit"),
                    children: t.jsx("button", {
                      onClick: () => i(true),
                      "aria-label": u("edit"),
                      className: "flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500",
                      children: t.jsx(te, {
                        className: "w-3 h-3 text-gray-400 group-hover:text-gray-500"
                      })
                    })
                  })
                ]
              }) : t.jsx("div", {
                className: "invisible",
                children: t.jsx("div", {
                  className: "flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                })
              })
            ]
          })
        ]
      })
    });
  };
  pt = ({ source: e, open: s, setOpen: r }) => {
    var _a, _b, _c, _d, _e2, _f, _g;
    return t.jsx(je, {
      open: s,
      zIndex: 1e4,
      onCancel: () => r(false),
      footer: null,
      onOk: () => r(false),
      children: t.jsxs("div", {
        className: "flex flex-col gap-2 mt-6",
        children: [
          t.jsxs("h4", {
            className: "bg-gray-100 text-md dark:bg-gray-800 inline-flex gap-2 items-center text-gray-800 dark:text-gray-100 font-semibold p-2",
            children: [
              (e == null ? void 0 : e.type) && t.jsx(ae, {
                type: e == null ? void 0 : e.type,
                className: "h-4 w-5"
              }),
              e == null ? void 0 : e.name
            ]
          }),
          (e == null ? void 0 : e.type) === "pdf" ? t.jsxs(t.Fragment, {
            children: [
              t.jsx("p", {
                className: "text-gray-500 text-sm",
                children: e == null ? void 0 : e.pageContent
              }),
              t.jsxs("div", {
                className: "flex flex-wrap gap-3",
                children: [
                  t.jsx("span", {
                    className: "border border-gray-300 dark:border-gray-700 rounded-md p-1 text-gray-500 text-xs",
                    children: `Page ${(_a = e == null ? void 0 : e.metadata) == null ? void 0 : _a.page}`
                  }),
                  t.jsx("span", {
                    className: "border border-gray-300 dark:border-gray-700 rounded-md p-1 text-xs text-gray-500",
                    children: `Line ${(_d = (_c = (_b = e == null ? void 0 : e.metadata) == null ? void 0 : _b.loc) == null ? void 0 : _c.lines) == null ? void 0 : _d.from} - ${(_g = (_f = (_e2 = e == null ? void 0 : e.metadata) == null ? void 0 : _e2.loc) == null ? void 0 : _f.lines) == null ? void 0 : _g.to}`
                  })
                ]
              })
            ]
          }) : t.jsx(t.Fragment, {
            children: t.jsx("p", {
              className: "text-gray-500 text-sm",
              children: e == null ? void 0 : e.pageContent
            })
          })
        ]
      })
    });
  };
  jt = (e) => {
    const s = /{([^}]+)}/g;
    let r = null, n;
    for (; (n = s.exec(e)) !== null; ) n.index === s.lastIndex && s.lastIndex++, r = {
      word: n[1],
      start: n.index,
      end: n.index + n[0].length
    };
    return r;
  };
  wt = (e) => new Promise((s, r) => {
    const n = new FileReader();
    n.readAsDataURL(e), n.onload = () => s(n.result), n.onerror = (i) => r(i);
  });
  G = (e, s) => {
    const r = k.useRef();
    return k.useEffect(() => {
      r.current = e;
    }, [
      e,
      ...s
    ]), k.useCallback((...n) => {
      const i = r.current;
      return i(...n);
    }, [
      r
    ]);
  };
  kt = (e = {}) => {
    const { onEnd: s = () => {
    }, onResult: r = () => {
    }, onError: n = () => {
    }, autoStop: i = false, autoStopTimeout: l = 5e3, autoSubmit: d = false } = e, c = k.useRef(null), [u, N] = k.useState(false), [x, p] = k.useState(false), [j, f] = k.useState(""), m = k.useRef(null), b = k.useRef("");
    k.useEffect(() => {
      typeof window > "u" || (window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition, window.SpeechRecognition && (p(true), c.current = new window.SpeechRecognition()));
    }, []);
    const R = () => {
      f(""), b.current = "";
    }, E = (P, h, o) => {
      const a = Array.from(P.results).map((g) => g[0]).map((g) => g.transcript).join("");
      r(a), h && a !== b.current && (b.current = a, m.current && clearTimeout(m.current), m.current = setTimeout(() => {
        T(), o && r(a);
      }, l));
    }, z = (P) => {
      P.error === "not-allowed" && (c.current && (c.current.onend = null), N(false)), n(P);
    }, C = G((P = {}) => {
      if (u || !x) return;
      const { lang: h = "", interimResults: o = true, continuous: a = false, maxAlternatives: g = 1, grammars: v, autoStop: y = i, autoStopTimeout: M = l, autoSubmit: S = d } = P;
      N(true), f(""), b.current = "", c.current && (c.current.lang = h, c.current.interimResults = o, c.current.onresult = ($) => {
        E($, y, S);
        const H = Array.from($.results).map((I) => I[0]).map((I) => I.transcript).join("");
        f(H);
      }, c.current.onerror = z, c.current.continuous = a, c.current.maxAlternatives = g, v && (c.current.grammars = v), c.current.onend = () => {
        c.current && !y ? c.current.start() : s();
      }, c.current && c.current.start());
    }, [
      u,
      x,
      c,
      i,
      l,
      d
    ]), T = G(() => {
      !u || !x || (m.current && (clearTimeout(m.current), m.current = null), c.current && (c.current.onresult = null, c.current.onend = null, c.current.onerror = null, N(false), c.current.stop()), s());
    }, [
      u,
      x,
      c,
      s
    ]);
    return k.useEffect(() => () => {
      m.current && clearTimeout(m.current);
    }, []), {
      start: C,
      isListening: u,
      stop: T,
      supported: x,
      transcript: j,
      resetTranscript: R
    };
  };
  var le = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0
  }, q = w.createContext && w.createContext(le), rt = [
    "attr",
    "size",
    "title"
  ];
  function nt(e, s) {
    if (e == null) return {};
    var r = at(e, s), n, i;
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      for (i = 0; i < l.length; i++) n = l[i], !(s.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
    }
    return r;
  }
  function at(e, s) {
    if (e == null) return {};
    var r = {};
    for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (s.indexOf(n) >= 0) continue;
      r[n] = e[n];
    }
    return r;
  }
  function F() {
    return F = Object.assign ? Object.assign.bind() : function(e) {
      for (var s = 1; s < arguments.length; s++) {
        var r = arguments[s];
        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
      }
      return e;
    }, F.apply(this, arguments);
  }
  function J(e, s) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      s && (n = n.filter(function(i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })), r.push.apply(r, n);
    }
    return r;
  }
  function L(e) {
    for (var s = 1; s < arguments.length; s++) {
      var r = arguments[s] != null ? arguments[s] : {};
      s % 2 ? J(Object(r), true).forEach(function(n) {
        it(e, n, r[n]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : J(Object(r)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
      });
    }
    return e;
  }
  function it(e, s, r) {
    return s = ot(s), s in e ? Object.defineProperty(e, s, {
      value: r,
      enumerable: true,
      configurable: true,
      writable: true
    }) : e[s] = r, e;
  }
  function ot(e) {
    var s = lt(e, "string");
    return typeof s == "symbol" ? s : s + "";
  }
  function lt(e, s) {
    if (typeof e != "object" || !e) return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
      var n = r.call(e, s);
      if (typeof n != "object") return n;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (s === "string" ? String : Number)(e);
  }
  function ce(e) {
    return e && e.map((s, r) => w.createElement(s.tag, L({
      key: r
    }, s.attr), ce(s.child)));
  }
  function ue(e) {
    return (s) => w.createElement(ct, F({
      attr: L({}, e.attr)
    }, s), ce(e.child));
  }
  function ct(e) {
    var s = (r) => {
      var { attr: n, size: i, title: l } = e, d = nt(e, rt), c = i || r.size || "1em", u;
      return r.className && (u = r.className), e.className && (u = (u ? u + " " : "") + e.className), w.createElement("svg", F({
        stroke: "currentColor",
        fill: "currentColor",
        strokeWidth: "0"
      }, r.attr, n, d, {
        className: u,
        style: L(L({
          color: e.color || r.color
        }, r.style), e.style),
        height: c,
        width: c,
        xmlns: "http://www.w3.org/2000/svg"
      }), l && w.createElement("title", null, l), e.children);
    };
    return q !== void 0 ? w.createElement(q.Consumer, null, (r) => s(r)) : s(le);
  }
  Mt = function(e) {
    return ue({
      attr: {
        viewBox: "0 0 256 256",
        fill: "currentColor"
      },
      child: [
        {
          tag: "path",
          attr: {
            d: "M128,24a104,104,0,0,0,0,208,8,8,0,0,0,5-14.23h0c-1.12-.91-20.88-17.32-31.06-49.77h26a8,8,0,0,0,0-16H98.08a140.17,140.17,0,0,1,0-48h59.88A138,138,0,0,1,160,128a8,8,0,0,0,16,0,154.7,154.7,0,0,0-1.84-24h38.51A87.61,87.61,0,0,1,216,128a8,8,0,0,0,16,0A104.11,104.11,0,0,0,128,24ZM107.59,42.4A135.28,135.28,0,0,0,85.29,88H49.63A88.29,88.29,0,0,1,107.59,42.4Zm0,171.2a88.29,88.29,0,0,1-58-45.6H85.29A135.28,135.28,0,0,0,107.59,213.6ZM81.84,152H43.33a88.15,88.15,0,0,1,0-48H81.84a157.44,157.44,0,0,0,0,48ZM102,88a115.11,115.11,0,0,1,26-45,115.27,115.27,0,0,1,26,45Zm68.75,0a135.28,135.28,0,0,0-22.3-45.6,88.29,88.29,0,0,1,58,45.6Zm50.95,85.66L203.31,192l18.35,18.34a8,8,0,0,1-11.32,11.32L192,203.31l-18.34,18.35a8,8,0,0,1-11.32-11.32L180.69,192l-18.35-18.34a8,8,0,0,1,11.32-11.32L192,180.69l18.34-18.35a8,8,0,0,1,11.32,11.32Z"
          },
          child: []
        }
      ]
    })(e);
  };
  St = function(e) {
    return ue({
      attr: {
        viewBox: "0 0 256 256",
        fill: "currentColor"
      },
      child: [
        {
          tag: "path",
          attr: {
            d: "M128,24h0A104,104,0,1,0,232,128,104.12,104.12,0,0,0,128,24Zm88,104a87.61,87.61,0,0,1-3.33,24H174.16a157.44,157.44,0,0,0,0-48h38.51A87.61,87.61,0,0,1,216,128ZM102,168H154a115.11,115.11,0,0,1-26,45A115.27,115.27,0,0,1,102,168Zm-3.9-16a140.84,140.84,0,0,1,0-48h59.88a140.84,140.84,0,0,1,0,48ZM40,128a87.61,87.61,0,0,1,3.33-24H81.84a157.44,157.44,0,0,0,0,48H43.33A87.61,87.61,0,0,1,40,128ZM154,88H102a115.11,115.11,0,0,1,26-45A115.27,115.27,0,0,1,154,88Zm52.33,0H170.71a135.28,135.28,0,0,0-22.3-45.6A88.29,88.29,0,0,1,206.37,88ZM107.59,42.4A135.28,135.28,0,0,0,85.29,88H49.63A88.29,88.29,0,0,1,107.59,42.4ZM49.63,168H85.29a135.28,135.28,0,0,0,22.3,45.6A88.29,88.29,0,0,1,49.63,168Zm98.78,45.6a135.28,135.28,0,0,0,22.3-45.6h35.66A88.29,88.29,0,0,1,148.41,213.6Z"
          },
          child: []
        }
      ]
    })(e);
  };
  $t = ({ e, sendWhenEnter: s, typing: r, isSending: n }) => e.key === "Enter" && !e.shiftKey && !e.nativeEvent.isComposing && !n && s;
});
export {
  pt as M,
  bt as P,
  vt as S,
  __tla,
  Ie as a,
  St as b,
  Mt as c,
  yt as d,
  jt as g,
  $t as h,
  wt as t,
  kt as u
};
