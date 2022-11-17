var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react"), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, {
      context: remixContext,
      url: request.url
    }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 12,
      columnNumber: 5
    }, this)
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
var import_react2 = require("@remix-run/react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Navigation() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
    className: "flex-col items-end justify-around p-4",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex-row",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Link, {
          to: "/",
          children: "About"
        }, void 0, !1, {
          fileName: "app/components/navigation.tsx",
          lineNumber: 7,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/navigation.tsx",
        lineNumber: 6,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex-row",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Link, {
          to: "/work",
          children: "Work"
        }, void 0, !1, {
          fileName: "app/components/navigation.tsx",
          lineNumber: 10,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/navigation.tsx",
        lineNumber: 9,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex-row",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Link, {
          to: "/skills",
          children: "Skills"
        }, void 0, !1, {
          fileName: "app/components/navigation.tsx",
          lineNumber: 13,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/navigation.tsx",
        lineNumber: 12,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex-row",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Link, {
          to: "/contact",
          children: "Contact"
        }, void 0, !1, {
          fileName: "app/components/navigation.tsx",
          lineNumber: 16,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/navigation.tsx",
        lineNumber: 15,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/navigation.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/components/terminal/terminal.tsx
var import_react4 = require("react");

// app/components/terminal/inputLine.tsx
var import_react3 = require("react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function InputLine({
  focusOnInput,
  setOutput,
  commandHistory,
  setCommandHistory
}) {
  let [historyLookback, setHistoryLookback] = (0, import_react3.useState)(0), [disableInput, setDisableInput] = (0, import_react3.useState)(!1), [command, setCommand] = (0, import_react3.useState)(""), handleKeyEvent = (e) => {
    e.key === "ArrowUp" && (console.log(commandHistory), commandHistory.length !== historyLookback && (setCommand(commandHistory[historyLookback]), console.log(command), setHistoryLookback((value) => value + 1))), e.key === "ArrowDown" && (historyLookback !== 0 ? (setCommand(commandHistory[historyLookback - 1]), console.log(command), setHistoryLookback((value) => value - 1)) : setCommand("")), e.key === "Enter" && (console.log("kek"), command !== "" && (setCommandHistory((data) => {
      let dataCommandHistory = data && [...data];
      return dataCommandHistory.push(command), dataCommandHistory || [];
    }), setOutput(command), setDisableInput(!0)));
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex-row gap-2",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex-col",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
          className: "text-sm",
          children: "[ vantuch@dev ~ ] $"
        }, void 0, !1, {
          fileName: "app/components/terminal/inputLine.tsx",
          lineNumber: 58,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/terminal/inputLine.tsx",
        lineNumber: 57,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex-auto flex-col",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
          type: "text",
          disabled: disableInput,
          autoFocus: focusOnInput,
          spellCheck: "false",
          className: "w-full bg-gray-900 text-sm outline-none",
          onChange: (value) => setCommand(value.target.value),
          value: command,
          onKeyDown: (e) => handleKeyEvent(e)
        }, void 0, !1, {
          fileName: "app/components/terminal/inputLine.tsx",
          lineNumber: 61,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/terminal/inputLine.tsx",
        lineNumber: 60,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/terminal/inputLine.tsx",
    lineNumber: 56,
    columnNumber: 5
  }, this);
}

// app/components/terminal/outputLine.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function OutputLine({ output }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "container my-2",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
      className: "text-sm",
      children: output
    }, void 0, !1, {
      fileName: "app/components/terminal/outputLine.tsx",
      lineNumber: 4,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/components/terminal/outputLine.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/components/terminal/terminal.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Terminal({ focusOnInput }) {
  let [output, setOutput] = (0, import_react4.useState)(""), [lines, setLines] = (0, import_react4.useState)([]), [commandHistory, setCommandHistory] = (0, import_react4.useState)([]);
  return (0, import_react4.useEffect)(() => {
    setLines((data) => {
      let dataLines = data && [...data];
      return dataLines.length < 1 && dataLines.push(
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InputLine, {
          focusOnInput,
          setOutput,
          commandHistory,
          setCommandHistory
        }, void 0, !1, {
          fileName: "app/components/terminal/terminal.tsx",
          lineNumber: 15,
          columnNumber: 11
        }, this)
      ), dataLines || [];
    }), console.log(lines);
  }, []), (0, import_react4.useEffect)(() => {
    output !== "" && setLines((data) => {
      let dataLines = data && [...data];
      return dataLines.push(/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OutputLine, {
        output
      }, void 0, !1, {
        fileName: "app/components/terminal/terminal.tsx",
        lineNumber: 31,
        columnNumber: 24
      }, this)), dataLines.push(
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InputLine, {
          focusOnInput,
          setOutput,
          commandHistory,
          setCommandHistory
        }, void 0, !1, {
          fileName: "app/components/terminal/terminal.tsx",
          lineNumber: 33,
          columnNumber: 11
        }, this)
      ), dataLines || [];
    }), console.log(lines);
  }, [output]), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "p-4",
    children: lines && lines.map((line) => line)
  }, void 0, !1, {
    fileName: "app/components/terminal/terminal.tsx",
    lineNumber: 46,
    columnNumber: 10
  }, this);
}

// node_modules/remix-image/remix-image.css
var remix_image_default = "/build/_assets/remix-image-UKLG3K75.css";

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-KHGCITU5.css";

// app/styles/global.css
var global_default = "/build/_assets/global-AK3WZZHG.css";

// app/root.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
    lang: "en",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react6.Meta, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 41,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react6.Links, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 42,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 40,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", {
        className: "h-screen",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "t-01 r-01 absolute h-8 w-8 rotate-45 border-b-2 border-b-sky-400 bg-gray-900"
          }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 45,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "b-01 l-01 absolute h-8 w-8 rotate-45 border-t-2 border-t-sky-400 bg-gray-900"
          }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 46,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "b-01 r-01 absolute h-8 w-8 rotate-45 border-l-2 border-l-sky-400 bg-gray-900"
          }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 47,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "grid h-screen grid-cols-4 grid-rows-4 gap-4 p-4",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "col-span-4 row-span-4 gap-4 overflow-y-scroll scrollbar-hide sm:col-span-3 sm:row-span-3",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react6.Outlet, {}, void 0, !1, {
                  fileName: "app/root.tsx",
                  lineNumber: 50,
                  columnNumber: 13
                }, this)
              }, void 0, !1, {
                fileName: "app/root.tsx",
                lineNumber: 49,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "row-span-4 hidden border-2 border-sky-400 p-4 sm:grid",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "h-full flex-row",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Navigation, {}, void 0, !1, {
                      fileName: "app/root.tsx",
                      lineNumber: 54,
                      columnNumber: 15
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/root.tsx",
                    lineNumber: 53,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "h-full flex-row justify-around",
                    children: "kek"
                  }, void 0, !1, {
                    fileName: "app/root.tsx",
                    lineNumber: 56,
                    columnNumber: 13
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/root.tsx",
                lineNumber: 52,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "col-span-3 hidden overflow-y-scroll border-2 border-sky-400 p-4 scrollbar-hide sm:grid",
                onClick: () => setFocusOnInput(!0),
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Terminal, {
                  focusOnInput
                }, void 0, !1, {
                  fileName: "app/root.tsx",
                  lineNumber: 62,
                  columnNumber: 13
                }, this)
              }, void 0, !1, {
                fileName: "app/root.tsx",
                lineNumber: 58,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/root.tsx",
            lineNumber: 48,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "kek absolute bottom-0 block w-full p-4 sm:hidden",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "mobile-menu-corner-tl absolute border-r-2 border-r-sky-400 bg-gray-900"
              }, void 0, !1, {
                fileName: "app/root.tsx",
                lineNumber: 66,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "mobile-menu-corner-tr absolute border-r-2 border-r-sky-400 bg-gray-900"
              }, void 0, !1, {
                fileName: "app/root.tsx",
                lineNumber: 67,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "mobile-menu-corner-br absolute border-r-2 border-r-sky-400 bg-gray-900"
              }, void 0, !1, {
                fileName: "app/root.tsx",
                lineNumber: 68,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "mobile-menu-corner-bl absolute border-r-2 border-r-sky-400 bg-gray-900"
              }, void 0, !1, {
                fileName: "app/root.tsx",
                lineNumber: 69,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "p-4",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: `grid content-end border-2 border-sky-400 bg-gray-900 ${mobileMenuOpen && "h-more"}`,
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "grid",
                      children: [
                        mobileNavigationOpen && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Navigation, {}, void 0, !1, {
                          fileName: "app/root.tsx",
                          lineNumber: 78,
                          columnNumber: 42
                        }, this),
                        mobileTerminalOpen && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Terminal, {
                          focusOnInput
                        }, void 0, !1, {
                          fileName: "app/root.tsx",
                          lineNumber: 79,
                          columnNumber: 40
                        }, this)
                      ]
                    }, void 0, !0, {
                      fileName: "app/root.tsx",
                      lineNumber: 77,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "grid",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "flex-row justify-between",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                            className: "h-20 w-3/12 flex-col items-center justify-center bg-sky-400 pr-1",
                            onClick: () => {
                              setMobileMenuOpen(!0), mobileNavigationOpen && setMobileNavigationOpen(!1), setMobileTerminalOpen(!0);
                            },
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                              src: "/svg/nav-terminal.svg",
                              className: "scale-75"
                            }, void 0, !1, {
                              fileName: "app/root.tsx",
                              lineNumber: 91,
                              columnNumber: 21
                            }, this)
                          }, void 0, !1, {
                            fileName: "app/root.tsx",
                            lineNumber: 83,
                            columnNumber: 19
                          }, this),
                          mobileMenuOpen && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                            className: "h-20 w-6/12 flex-col items-center justify-center bg-sky-400",
                            onClick: () => {
                              setMobileMenuOpen(!1), mobileNavigationOpen && setMobileNavigationOpen(!1), mobileTerminalOpen && setMobileTerminalOpen(!1);
                            },
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                              src: "/svg/nav-cross.svg",
                              className: "scale-75"
                            }, void 0, !1, {
                              fileName: "app/root.tsx",
                              lineNumber: 102,
                              columnNumber: 23
                            }, this)
                          }, void 0, !1, {
                            fileName: "app/root.tsx",
                            lineNumber: 94,
                            columnNumber: 21
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                            className: "h-20 w-3/12 flex-col items-center justify-center bg-sky-400 pl-1",
                            onClick: () => {
                              setMobileMenuOpen(!0), mobileTerminalOpen && setMobileTerminalOpen(!1), setMobileNavigationOpen(!0);
                            },
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                              src: "/svg/nav-menu.svg",
                              className: "scale-75"
                            }, void 0, !1, {
                              fileName: "app/root.tsx",
                              lineNumber: 113,
                              columnNumber: 21
                            }, this)
                          }, void 0, !1, {
                            fileName: "app/root.tsx",
                            lineNumber: 105,
                            columnNumber: 19
                          }, this)
                        ]
                      }, void 0, !0, {
                        fileName: "app/root.tsx",
                        lineNumber: 82,
                        columnNumber: 17
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/root.tsx",
                      lineNumber: 81,
                      columnNumber: 15
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/root.tsx",
                  lineNumber: 72,
                  columnNumber: 13
                }, this)
              }, void 0, !1, {
                fileName: "app/root.tsx",
                lineNumber: 70,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/root.tsx",
            lineNumber: 65,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react6.ScrollRestoration, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 120,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react6.Scripts, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 121,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react6.LiveReload, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 122,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 44,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 39,
    columnNumber: 5
  }, this);
}

// app/routes/api/image.ts
var image_exports = {};
__export(image_exports, {
  loader: () => loader
});
var import_server2 = require("remix-image/server"), config = {
  selfUrl: "http://localhost:3000",
  cache: new import_server2.DiskCache()
}, loader = ({ request }) => (0, import_server2.imageLoader)(config, request);

// app/routes/contact.tsx
var contact_exports = {};
__export(contact_exports, {
  default: () => Contact
});
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Contact() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" },
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
      children: "Welcome to Contact"
    }, void 0, !1, {
      fileName: "app/routes/contact.tsx",
      lineNumber: 4,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/contact.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
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
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Skills() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "grid grid-cols-2 gap-20 sm:grid-cols-3 xl:grid-cols-4",
    children: skills.map((skill, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
      href: skill.skillUrl,
      target: "_blank",
      rel: "noreferrer noopener nofollow",
      className: "skills-card col-span-1 row-span-1 grid"
    }, i, !1, {
      fileName: "app/routes/skills.tsx",
      lineNumber: 8,
      columnNumber: 9
    }, this))
  }, void 0, !1, {
    fileName: "app/routes/skills.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "p-4",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
      children: "Welcome to my blog"
    }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 4,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/index.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/routes/work.tsx
var work_exports = {};
__export(work_exports, {
  default: () => Work
});
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Work() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "grid grid-cols-3 gap-4",
    children: projects.map((project, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
      href: project.url,
      target: "_blank",
      rel: "noreferrer noopener nofollow",
      className: "work-card col-span-1 row-span-1 grid h-48 border-2 border-sky-400",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "relative overflow-hidden",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "work-card-cover absolute top-0 hidden h-48 w-full",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                className: "absolute bottom-8 left-8 text-lg font-semibold",
                children: project.name
              }, void 0, !1, {
                fileName: "app/routes/work.tsx",
                lineNumber: 23,
                columnNumber: 15
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/work.tsx",
              lineNumber: 22,
              columnNumber: 13
            }, this),
            project.isRocket && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
              className: "absolute bottom-0 right-0 flex h-16 w-16 items-center justify-center bg-[#1e1a49]",
              href: "https://www.prorocketeers.com/",
              target: "_blank",
              rel: "noreferrer noopener nofollow"
            }, void 0, !1, {
              fileName: "app/routes/work.tsx",
              lineNumber: 28,
              columnNumber: 15
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/work.tsx",
          lineNumber: 15,
          columnNumber: 11
        }, this),
        i === 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "t-01 l-01 absolute h-8 w-8 rotate-45 border-r-2 border-r-sky-400 bg-gray-900"
        }, void 0, !1, {
          fileName: "app/routes/work.tsx",
          lineNumber: 44,
          columnNumber: 13
        }, this)
      ]
    }, i, !0, {
      fileName: "app/routes/work.tsx",
      lineNumber: 8,
      columnNumber: 9
    }, this))
  }, void 0, !1, {
    fileName: "app/routes/work.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "aa187372", entry: { module: "/build/entry.client-5URMFCPQ.js", imports: ["/build/_shared/chunk-KV4EBUZQ.js", "/build/_shared/chunk-3CPB4T5C.js", "/build/_shared/chunk-42Z7WWMI.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-Q6CE6GS2.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api/image": { id: "routes/api/image", parentId: "root", path: "api/image", index: void 0, caseSensitive: void 0, module: "/build/routes/api/image-SPOYC2TE.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/contact": { id: "routes/contact", parentId: "root", path: "contact", index: void 0, caseSensitive: void 0, module: "/build/routes/contact-7LF5FQVX.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-LKWNMIK5.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/skills": { id: "routes/skills", parentId: "root", path: "skills", index: void 0, caseSensitive: void 0, module: "/build/routes/skills-3DT23N4J.js", imports: ["/build/_shared/chunk-J5GBIGUK.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/work": { id: "routes/work", parentId: "root", path: "work", index: void 0, caseSensitive: void 0, module: "/build/routes/work-JKWJJXW7.js", imports: ["/build/_shared/chunk-J5GBIGUK.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-AA187372.js" };

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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
