import { a as c, j as e, ap as i, __tla as __tla_0 } from "./FontSizeProvider-C1DZf1x-.js";
import { c as s, L as o } from "./SaveButton-B6h4W40A.js";
import { T as h, ak as x, al as m, am as g, q as p, __tla as __tla_1 } from "./Sidebar-DZH9YUxk.js";
import { B as y, __tla as __tla_2 } from "./Layout-D44e2h93.js";
let j, N;
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
  const d = s("BrainCircuit", [
    [
      "path",
      {
        d: "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",
        key: "l5xja"
      }
    ],
    [
      "path",
      {
        d: "M9 13a4.5 4.5 0 0 0 3-4",
        key: "10igwf"
      }
    ],
    [
      "path",
      {
        d: "M6.003 5.125A3 3 0 0 0 6.401 6.5",
        key: "105sqy"
      }
    ],
    [
      "path",
      {
        d: "M3.477 10.896a4 4 0 0 1 .585-.396",
        key: "ql3yin"
      }
    ],
    [
      "path",
      {
        d: "M6 18a4 4 0 0 1-1.967-.516",
        key: "2e4loj"
      }
    ],
    [
      "path",
      {
        d: "M12 13h4",
        key: "1ku699"
      }
    ],
    [
      "path",
      {
        d: "M12 18h6a2 2 0 0 1 2 2v1",
        key: "105ag5"
      }
    ],
    [
      "path",
      {
        d: "M12 8h8",
        key: "1lhi5i"
      }
    ],
    [
      "path",
      {
        d: "M16 8V5a2 2 0 0 1 2-2",
        key: "u6izg6"
      }
    ],
    [
      "circle",
      {
        cx: "16",
        cy: "13",
        r: ".5",
        key: "ry7gng"
      }
    ],
    [
      "circle",
      {
        cx: "18",
        cy: "3",
        r: ".5",
        key: "1aiba7"
      }
    ],
    [
      "circle",
      {
        cx: "20",
        cy: "21",
        r: ".5",
        key: "yhc1fs"
      }
    ],
    [
      "circle",
      {
        cx: "20",
        cy: "8",
        r: ".5",
        key: "1e43v0"
      }
    ]
  ]);
  const k = s("Combine", [
    [
      "rect",
      {
        width: "8",
        height: "8",
        x: "2",
        y: "2",
        rx: "2",
        key: "z1hh3n"
      }
    ],
    [
      "path",
      {
        d: "M14 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2",
        key: "83orz6"
      }
    ],
    [
      "path",
      {
        d: "M20 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2",
        key: "k86dmt"
      }
    ],
    [
      "path",
      {
        d: "M10 18H5c-1.7 0-3-1.3-3-3v-1",
        key: "6vokjl"
      }
    ],
    [
      "polyline",
      {
        points: "7 21 10 18 7 15",
        key: "1k02g0"
      }
    ],
    [
      "rect",
      {
        width: "8",
        height: "8",
        x: "14",
        y: "14",
        rx: "2",
        key: "1fa9i4"
      }
    ]
  ]);
  const f = s("Orbit", [
    [
      "circle",
      {
        cx: "12",
        cy: "12",
        r: "3",
        key: "1v7zrd"
      }
    ],
    [
      "circle",
      {
        cx: "19",
        cy: "5",
        r: "2",
        key: "mhkx31"
      }
    ],
    [
      "circle",
      {
        cx: "5",
        cy: "19",
        r: "2",
        key: "v8kfzx"
      }
    ],
    [
      "path",
      {
        d: "M10.4 21.9a10 10 0 0 0 9.941-15.416",
        key: "eohfx2"
      }
    ],
    [
      "path",
      {
        d: "M13.5 2.1a10 10 0 0 0-9.841 15.416",
        key: "19pvbm"
      }
    ]
  ]);
  let u;
  u = s("Share", [
    [
      "path",
      {
        d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",
        key: "1b2hhj"
      }
    ],
    [
      "polyline",
      {
        points: "16 6 12 2 8 6",
        key: "m901s6"
      }
    ],
    [
      "line",
      {
        x1: "12",
        x2: "12",
        y1: "2",
        y2: "15",
        key: "1p0rca"
      }
    ]
  ]);
  j = ({ className: a }) => {
    const { t } = c("common");
    return e.jsx(h, {
      className: a,
      color: "yellow",
      children: t("beta")
    });
  };
  function l(...a) {
    return a.filter(Boolean).join(" ");
  }
  let n;
  n = (a) => e.jsxs("li", {
    className: "inline-flex items-center",
    children: [
      e.jsxs(o, {
        to: a.href,
        className: l(a.current === a.href ? "bg-gray-100 text-gray-600 dark:bg-[#262626] dark:text-white" : "text-gray-700 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:text-white dark:hover:bg-[#262626]", "group flex gap-x-3 rounded-md py-2 pl-2 pr-3 text-sm font-semibold"),
        children: [
          e.jsx(a.icon, {
            className: l(a.current === a.href ? "text-gray-600 dark:text-white" : "text-gray-500 group-hover:text-gray-600 dark:text-gray-200 dark:group-hover:text-white", "h-6 w-6 shrink-0"),
            "aria-hidden": "true"
          }),
          a.name
        ]
      }),
      a.beta && e.jsx(j, {})
    ]
  });
  N = ({ children: a }) => {
    const t = i(), { t: r } = c([
      "settings",
      "common",
      "openai"
    ]);
    return e.jsx("div", {
      className: "flex min-h-screen  w-full flex-col",
      children: e.jsx("main", {
        className: "relative w-full flex-1",
        children: e.jsx("div", {
          className: "mx-auto w-full h-full custom-scrollbar overflow-y-auto",
          children: e.jsxs("div", {
            className: "flex flex-col lg:flex-row lg:gap-x-16 lg:px-24",
            children: [
              e.jsx("aside", {
                className: "sticky lg:mt-0 mt-14 top-0  bg-white dark:bg-[#171717] border-b dark:border-gray-600 lg:border-0 lg:bg-transparent lg:dark:bg-transparent",
                children: e.jsx("nav", {
                  className: "w-full overflow-x-auto px-4 py-4 sm:px-6 lg:px-0 lg:py-0 lg:mt-20",
                  children: e.jsxs("ul", {
                    role: "list",
                    className: "flex flex-row lg:flex-col gap-x-3 gap-y-1 min-w-max lg:min-w-0",
                    children: [
                      e.jsx(n, {
                        href: "/settings",
                        name: r("generalSettings.title"),
                        icon: f,
                        current: t.pathname
                      }),
                      e.jsx(n, {
                        href: "/settings/rag",
                        name: r("rag.title"),
                        icon: k,
                        current: t.pathname
                      }),
                      e.jsx(n, {
                        href: "/settings/ollama",
                        name: r("ollamaSettings.title"),
                        icon: x,
                        current: t.pathname
                      }),
                      false,
                      e.jsx(n, {
                        href: "/settings/openai",
                        name: r("openai:settings"),
                        icon: m,
                        current: t.pathname
                      }),
                      e.jsx(n, {
                        href: "/settings/model",
                        name: r("manageModels.title"),
                        current: t.pathname,
                        icon: d
                      }),
                      e.jsx(n, {
                        href: "/settings/knowledge",
                        name: e.jsx("div", {
                          className: "inline-flex items-center gap-2",
                          children: r("manageKnowledge.title")
                        }),
                        icon: y,
                        current: t.pathname
                      }),
                      e.jsx(n, {
                        href: "/settings/prompt",
                        name: r("managePrompts.title"),
                        icon: g,
                        current: t.pathname
                      }),
                      e.jsx(n, {
                        href: "/settings/share",
                        name: r("manageShare.title"),
                        icon: u,
                        current: t.pathname
                      }),
                      e.jsx(n, {
                        href: "/settings/about",
                        name: r("about.title"),
                        icon: p,
                        current: t.pathname
                      })
                    ]
                  })
                })
              }),
              e.jsx("main", {
                className: "flex-1 px-4 py-8 sm:px-6 lg:px-0 lg:py-20",
                children: e.jsx("div", {
                  className: "mx-auto max-w-4xl space-y-8 sm:space-y-10",
                  children: a
                })
              })
            ]
          })
        })
      })
    });
  };
});
export {
  j as B,
  N as S,
  __tla
};
