"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// server.js
var server_exports = {};
__export(server_exports, {
  default: () => server_default
});
module.exports = __toCommonJS(server_exports);
var import_vercel = require("@remix-run/vercel");

// server-entry-module:@remix-run/dev/server-build
var server_build_exports = {};
__export(server_build_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  publicPath: () => publicPath,
  routes: () => routes
});

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react"), import_server = require("react-dom/server"), import_jsx_runtime = require("react/jsx-runtime");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.RemixServer, {
      context: remixContext,
      url: request.url
    })
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react5 = require("react"), import_react6 = require("@remix-run/react");

// app/components/navigation.tsx
var import_react2 = require("@remix-run/react"), import_jsx_runtime = require("react/jsx-runtime");
function Navigation() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
    className: "flex-col items-end justify-around w-full",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react2.Link, {
        className: "flex-row h-full w-full px-8 items-center",
        to: "/",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
          className: "text-2xl",
          children: "About"
        })
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react2.Link, {
        className: "flex-row h-full w-full px-8 items-center",
        to: "/work",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
          className: "text-2xl",
          children: "Work"
        })
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react2.Link, {
        className: "flex-row h-full w-full px-8 items-center",
        to: "/skills",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
          className: "text-2xl",
          children: "Skills"
        })
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react2.Link, {
        className: "flex-row h-full w-full px-8 items-center",
        to: "/contact",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
          className: "text-2xl",
          children: "Contact"
        })
      })
    ]
  });
}

// app/components/terminal/terminal.tsx
var import_react4 = require("react");

// app/components/terminal/inputLine.tsx
var import_react3 = require("react"), import_react_router_dom = require("react-router-dom"), import_jsx_runtime = require("react/jsx-runtime");
function InputLine({
  focusOnInput,
  output,
  setOutput,
  commandHistory,
  setCommandHistory
}) {
  let navigate = (0, import_react_router_dom.useNavigate)(), [historyLookback, setHistoryLookback] = (0, import_react3.useState)(0), [disableInput, setDisableInput] = (0, import_react3.useState)(!1), [command, setCommand] = (0, import_react3.useState)(""), handleOutput = (newOutput) => {
    output === newOutput ? (console.log(output), console.log("kekek"), setOutput("x"), console.log(output), setOutput(newOutput + " "), console.log(output)) : setOutput(newOutput);
  }, handleKeyEvent = (e) => {
    if (e.key === "ArrowUp" && (console.log(commandHistory), commandHistory.length !== historyLookback && (setCommand(commandHistory[historyLookback]), console.log(command), setHistoryLookback((value) => value + 1))), e.key === "ArrowDown" && (historyLookback !== 0 ? (setCommand(commandHistory[historyLookback - 1]), console.log(command), setHistoryLookback((value) => value - 1)) : setCommand("")), e.key === "Enter" && (console.log("kek"), command !== "")) {
      let commandProcessed = command.split(" ");
      console.log(commandProcessed), setCommandHistory((data) => {
        let dataCommandHistory = data && [...data];
        return dataCommandHistory.push(command), dataCommandHistory || [];
      }), commandProcessed[0] === "cd" ? commandProcessed[1] ? /.txt/g.test(commandProcessed[1]) ? commandProcessed[1] === "me.txt" ? handleOutput("me.txt is a file") : handleOutput(`Cannot find ${commandProcessed[1]}`) : commandProcessed[1] === "about" || commandProcessed[1] === "work" || commandProcessed[1] === "skills" || commandProcessed[1] === "contact" ? (navigate(commandProcessed[1] === "about" ? "/" : commandProcessed[1]), handleOutput("no_output_line")) : handleOutput(`Cannot find ${commandProcessed[1]}`) : handleOutput("No directory specified") : commandProcessed[0] === "ls" ? handleOutput(`
          <strong>about</strong> <br/>
          <strong>work</strong> <br/>
          <strong>skills</strong> <br/>
          <strong>contact</strong> <br/>
          me.txt
        `) : commandProcessed[0] === "cat" ? commandProcessed[1] === "me.txt" ? handleOutput("It's me") : commandProcessed[1] ? commandProcessed[1] === "about" || commandProcessed[1] === "work" || commandProcessed[1] === "skills" || commandProcessed[1] === "contact" ? handleOutput(`${commandProcessed[1]} is a directory`) : handleOutput(`Cannot find ${commandProcessed[1]}`) : handleOutput("No file specified") : handleOutput("available commands are cd, ls, cat"), setDisableInput(!0);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    className: "flex-row gap-2",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className: "flex-col",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
          className: "text-sm",
          children: "[ vantuch@dev ~ ] $"
        })
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className: "flex-auto flex-col",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
          type: "text",
          disabled: disableInput,
          autoFocus: focusOnInput,
          spellCheck: "false",
          className: "w-full bg-gray-900 text-sm outline-none",
          onChange: (value) => setCommand(value.target.value),
          value: command,
          onKeyDown: (e) => handleKeyEvent(e)
        })
      })
    ]
  });
}

// app/components/terminal/outputLine.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function OutputLine({ output }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    className: "container my-2",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
      className: "text-sm",
      dangerouslySetInnerHTML: { __html: output }
    })
  });
}

// app/components/terminal/terminal.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function Terminal({ focusOnInput }) {
  let [output, setOutput] = (0, import_react4.useState)(""), [lines, setLines] = (0, import_react4.useState)([]), [commandHistory, setCommandHistory] = (0, import_react4.useState)([]), [lineKey, setLineKey] = (0, import_react4.useState)(0);
  return (0, import_react4.useEffect)(() => {
    setLines((data) => {
      let dataLines = data && [...data];
      return dataLines.length < 1 && dataLines.push(
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputLine, {
          focusOnInput,
          output,
          setOutput,
          commandHistory,
          setCommandHistory
        }, lineKey)
      ), setLineKey((lineKey2) => lineKey2 + 1), dataLines || [];
    }), console.log(lines);
  }, []), (0, import_react4.useEffect)(() => {
    output !== "" && setLines((data) => {
      console.log(output);
      let dataLines = data && [...data], isNotOutputLine = output === "no_output_line" || output === "no_output_line ";
      return !isNotOutputLine && dataLines.push(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OutputLine, {
        output
      }, lineKey)), dataLines.push(
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputLine, {
          focusOnInput,
          output,
          setOutput,
          commandHistory,
          setCommandHistory
        }, isNotOutputLine ? lineKey : lineKey + 1)
      ), setLineKey((lineKey2) => lineKey2 + 2), dataLines || [];
    }), console.log(lines);
  }, [output]), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    className: "p-4",
    children: lines && lines.map((line) => line)
  });
}

// node_modules/remix-image/remix-image.css
var remix_image_default = "/build/_assets/remix-image-WUAL5MSX.css";

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-UDEVFV6W.css";

// app/styles/global.css
var global_default = "/build/_assets/global-GDUBFSJA.css";

// app/root.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function links() {
  return [
    { rel: "stylesheet", href: remix_image_default },
    { rel: "stylesheet", href: tailwind_default },
    { rel: "stylesheet", href: global_default }
  ];
}
var meta = () => ({
  charset: "utf-8",
  title: "Jakub Vantuch",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  let [mobileMenuOpen, setMobileMenuOpen] = (0, import_react5.useState)(!1), [mobileNavigationOpen, setMobileNavigationOpen] = (0, import_react5.useState)(!1), [mobileTerminalOpen, setMobileTerminalOpen] = (0, import_react5.useState)(!1), [focusOnInput, setFocusOnInput] = (0, import_react5.useState)(!1);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
    lang: "en",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react6.Meta, {}),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react6.Links, {})
        ]
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
        className: "h-screen",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
            className: "t-01 r-01 absolute h-8 w-8 rotate-45 border-b-2 border-b-sky-400 bg-gray-900"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
            className: "b-01 l-01 absolute h-8 w-8 rotate-45 border-t-2 border-t-sky-400 bg-gray-900"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
            className: "b-01 r-01 absolute h-8 w-8 rotate-45 border-l-2 border-l-sky-400 bg-gray-900"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "grid h-screen grid-cols-4 grid-rows-4 gap-4 p-4",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                className: "col-span-4 row-span-4 gap-4 overflow-y-scroll scrollbar-hide sm:col-span-3 sm:row-span-3",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react6.Outlet, {})
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: "row-span-4 hidden border-2 border-sky-400 sm:grid",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                    className: "h-full flex-row",
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigation, {})
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                    className: "h-full flex-row justify-around"
                  })
                ]
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                className: "col-span-3 hidden overflow-y-scroll border-2 border-sky-400 p-4 scrollbar-hide sm:grid",
                onClick: () => setFocusOnInput(!0),
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Terminal, {
                  focusOnInput
                })
              })
            ]
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "kek absolute bottom-0 block w-full p-4 sm:hidden",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                className: "mobile-menu-corner-tl absolute border-r-2 border-r-sky-400 bg-gray-900"
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                className: "mobile-menu-corner-tr absolute border-r-2 border-r-sky-400 bg-gray-900"
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                className: "mobile-menu-corner-br absolute border-r-2 border-r-sky-400 bg-gray-900"
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                className: "mobile-menu-corner-bl absolute border-r-2 border-r-sky-400 bg-gray-900"
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                className: "p-4",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className: `grid content-end border-2 border-sky-400 bg-gray-900 ${mobileMenuOpen && "h-more"}`,
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      className: "grid",
                      children: [
                        mobileNavigationOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigation, {}),
                        mobileTerminalOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Terminal, {
                          focusOnInput
                        })
                      ]
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                      className: "grid",
                      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                        className: "flex-row justify-between",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                            className: "h-20 w-3/12 flex-col items-center justify-center bg-sky-400 pr-1",
                            onClick: () => {
                              setMobileMenuOpen(!0), mobileNavigationOpen && setMobileNavigationOpen(!1), setMobileTerminalOpen(!0);
                            },
                            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
                              src: "/svg/nav-terminal.svg",
                              className: "scale-75"
                            })
                          }),
                          mobileMenuOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                            className: "h-20 w-6/12 flex-col items-center justify-center bg-sky-400",
                            onClick: () => {
                              setMobileMenuOpen(!1), mobileNavigationOpen && setMobileNavigationOpen(!1), mobileTerminalOpen && setMobileTerminalOpen(!1);
                            },
                            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
                              src: "/svg/nav-cross.svg",
                              className: "scale-75"
                            })
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                            className: "h-20 w-3/12 flex-col items-center justify-center bg-sky-400 pl-1",
                            onClick: () => {
                              setMobileMenuOpen(!0), mobileTerminalOpen && setMobileTerminalOpen(!1), setMobileNavigationOpen(!0);
                            },
                            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
                              src: "/svg/nav-menu.svg",
                              className: "scale-75"
                            })
                          })
                        ]
                      })
                    })
                  ]
                })
              })
            ]
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react6.ScrollRestoration, {}),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react6.Scripts, {}),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react6.LiveReload, {})
        ]
      })
    ]
  });
}

// app/routes/api/image.ts
var image_exports = {};
__export(image_exports, {
  fetchImage: () => fetchImage,
  loader: () => loader
});
var import_os = __toESM(require("os")), import_path = __toESM(require("path")), import_server2 = require("remix-image/server"), import_remix_image_sharp = require("remix-image-sharp"), fetchImage = async (asset, url, options, basePath) => url.startsWith("/") && (url.length === 1 || url[1] !== "/") ? (0, import_server2.fsResolver)(asset, url, options, basePath) : (0, import_server2.fetchResolver)(asset, url, options, basePath), vercelUrl = process.env.VERCEL_URL || "", fixedVercelUrl = vercelUrl.startsWith("https") ? vercelUrl : `https://${vercelUrl}`, config = {
  selfUrl: fixedVercelUrl,
  cache: new import_server2.DiskCache({
    path: import_path.default.join(import_os.default.tmpdir(), "img")
  }),
  resolver: fetchImage,
  transformer: import_remix_image_sharp.sharpTransformer,
  basePath: "/"
}, loader = ({ request }) => (0, import_server2.imageLoader)(config, request);

// app/routes/contact.tsx
var contact_exports = {};
__export(contact_exports, {
  default: () => Contact
});
var import_jsx_runtime = require("react/jsx-runtime");
function Contact() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" },
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
      children: "Welcome to Contact"
    })
  });
}

// app/routes/skills.tsx
var skills_exports = {};
__export(skills_exports, {
  default: () => Skills
});

// app/data/models.ts
var projects = [
  {
    name: "Steepens",
    url: "https://www.steepensband.eu/",
    imgUrl: "img/projects/steepens.png",
    isRocket: !1
  },
  {
    name: "Mezi Kozy",
    url: "https://www.mezikozyband.cz/",
    imgUrl: "img/projects/mezikozy.png",
    isRocket: !1
  },
  {
    name: "Ondr\xE1\u0161ek",
    url: "https://www.ondrasek.cz/",
    imgUrl: "img/projects/ondrasek.png",
    isRocket: !0
  }
], skills = [
  {
    skillUrl: "https://nextjs.org/",
    imgUrl: "img/skills/nextjs.svg"
  },
  {
    skillUrl: "https://remix.run/",
    imgUrl: "img/skills/remix.svg"
  },
  {
    skillUrl: "https://www.typescriptlang.org/",
    imgUrl: "img/skills/typescript.svg"
  },
  {
    skillUrl: "https://go.dev/",
    imgUrl: "img/skills/golang.svg"
  },
  {
    skillUrl: "https://www.postgresql.org/",
    imgUrl: "img/skills/postgresql.svg"
  },
  {
    skillUrl: "https://archlinux.org/",
    imgUrl: "img/skills/linux.svg"
  }
];

// app/routes/skills.tsx
var import_remix_image2 = require("remix-image"), import_jsx_runtime = require("react/jsx-runtime");
function Skills() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    className: "grid grid-cols-2 gap-20 sm:grid-cols-3 xl:grid-cols-4",
    children: skills.map((skill, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
      href: skill.skillUrl,
      target: "_blank",
      rel: "noreferrer noopener nofollow",
      className: "skills-card col-span-1 row-span-1 grid",
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_remix_image2.Image, {
        loaderUrl: "/api/image",
        src: skill.imgUrl,
        dprVariants: [1, 3],
        className: "h-full w-full"
      })
    }, i))
  });
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
var import_jsx_runtime = require("react/jsx-runtime");
function Index() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    className: "p-4",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
      children: "Welcome to my blog"
    })
  });
}

// app/routes/work.tsx
var work_exports = {};
__export(work_exports, {
  default: () => Work
});
var import_remix_image3 = require("remix-image"), import_jsx_runtime = require("react/jsx-runtime");
function Work() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    className: "grid grid-cols-3 gap-4",
    children: projects.map((project, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
      className: "relative work-card col-span-1 row-span-1 grid h-48 border-2 border-sky-400",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
          href: project.url,
          target: "_blank",
          rel: "noreferrer noopener nofollow",
          className: "overflow-hidden",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "relative",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_remix_image3.Image, {
                  loaderUrl: "/api/image",
                  src: project.imgUrl,
                  dprVariants: [1, 3],
                  className: "w-full"
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                  className: "work-card-cover absolute top-0 hidden h-48 w-full",
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                    className: "absolute bottom-8 left-8 text-lg font-semibold",
                    children: project.name
                  })
                })
              ]
            }),
            i === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
              className: "-top-4 -left-4 absolute h-8 w-8 rotate-45 border-r-2 border-r-sky-400 bg-gray-900"
            })
          ]
        }),
        project.isRocket && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
          className: "absolute bottom-0 right-0 flex h-16 w-16 items-center justify-center bg-[#1e1a49]",
          href: "https://www.prorocketeers.com/",
          target: "_blank",
          rel: "noreferrer noopener nofollow",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_remix_image3.Image, {
            loaderUrl: "/api/image",
            src: "img/rocket-logo.png",
            dprVariants: [1, 3],
            className: "h-10 w-10"
          })
        })
      ]
    }, i))
  });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "601494b6", entry: { module: "/build/entry.client-PSU6ICS3.js", imports: ["/build/_shared/chunk-VPNDLZRF.js", "/build/_shared/chunk-YE6MABSZ.js", "/build/_shared/chunk-TFY3KWOG.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-NP74AXKF.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api/image": { id: "routes/api/image", parentId: "root", path: "api/image", index: void 0, caseSensitive: void 0, module: "/build/routes/api/image-ZVGR6KIU.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/contact": { id: "routes/contact", parentId: "root", path: "contact", index: void 0, caseSensitive: void 0, module: "/build/routes/contact-4NX6M6YM.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-HTOXZUU6.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/skills": { id: "routes/skills", parentId: "root", path: "skills", index: void 0, caseSensitive: void 0, module: "/build/routes/skills-JRXN3B6G.js", imports: ["/build/_shared/chunk-AL6GL34K.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/work": { id: "routes/work", parentId: "root", path: "work", index: void 0, caseSensitive: void 0, module: "/build/routes/work-6VLSTVU5.js", imports: ["/build/_shared/chunk-AL6GL34K.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-601494B6.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/api/image": {
    id: "routes/api/image",
    parentId: "root",
    path: "api/image",
    index: void 0,
    caseSensitive: void 0,
    module: image_exports
  },
  "routes/contact": {
    id: "routes/contact",
    parentId: "root",
    path: "contact",
    index: void 0,
    caseSensitive: void 0,
    module: contact_exports
  },
  "routes/skills": {
    id: "routes/skills",
    parentId: "root",
    path: "skills",
    index: void 0,
    caseSensitive: void 0,
    module: skills_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/work": {
    id: "routes/work",
    parentId: "root",
    path: "work",
    index: void 0,
    caseSensitive: void 0,
    module: work_exports
  }
};

// server.js
var server_default = (0, import_vercel.createRequestHandler)({ build: server_build_exports, mode: "production" });
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
