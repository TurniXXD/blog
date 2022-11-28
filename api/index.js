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
var import_react8 = require("react"), import_react9 = require("@remix-run/react");

// app/components/navigation.tsx
var import_react2 = require("react"), import_react3 = require("@remix-run/react"), import_jsx_runtime = require("react/jsx-runtime");
function Navigation() {
  return (0, import_react2.useEffect)(() => {
    let navLinks = document.getElementsByClassName("nav-link"), navLinkContainers = document.getElementsByClassName("nav-link-container");
    for (let i = 0; i < navLinkContainers.length; i++)
      navLinkContainers[i].addEventListener("mouseover", () => navLinks[i].classList.add("nav-link-hover")), navLinkContainers[i].addEventListener("mouseout", () => navLinks[i].classList.remove("nav-link-hover"));
  }, []), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
    className: "flex-col relative items-end justify-evenly w-full",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className: "flex-row w-full px-8",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
          className: "nav-link text-2xl",
          children: "About"
        })
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className: "flex-row w-full px-8",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
          className: "nav-link text-2xl",
          children: "Work"
        })
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className: "flex-row w-full px-8",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
          className: "nav-link text-2xl",
          children: "Skills"
        })
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className: "flex-row w-full px-8",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
          className: "nav-link text-2xl",
          children: "Contact"
        })
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "absolute flex-col justify-evenly h-full w-full",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react3.Link, {
            className: "nav-link-container flex-row h-full w-full px-8",
            to: "/"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react3.Link, {
            className: "nav-link-container flex-row h-full w-full px-8",
            to: "/work"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react3.Link, {
            className: "nav-link-container flex-row h-full w-full px-8",
            to: "/skills"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react3.Link, {
            className: "nav-link-container flex-row h-full w-full px-8",
            to: "/contact"
          })
        ]
      })
    ]
  });
}

// app/components/terminal/terminal.tsx
var import_react5 = require("react");

// app/components/terminal/inputLine.tsx
var import_react4 = require("react"), import_react_router_dom = require("react-router-dom"), import_jsx_runtime = require("react/jsx-runtime");
function InputLine({
  output,
  setOutput,
  commandHistory,
  setCommandHistory
}) {
  let navigate = (0, import_react_router_dom.useNavigate)(), [historyLookback, setHistoryLookback] = (0, import_react4.useState)(0), [disableInput, setDisableInput] = (0, import_react4.useState)(!1), [command, setCommand] = (0, import_react4.useState)("");
  (0, import_react4.useEffect)(() => {
    var _a;
    return (_a = document.getElementById("terminal-input")) == null ? void 0 : _a.focus();
  }, []), (0, import_react4.useEffect)(() => {
    let terminalInput = document.getElementById("terminal-input");
    disableInput && (terminalInput == null || terminalInput.removeAttribute("id"));
  }, [disableInput]);
  let handleOutput = (newOutput) => {
    output === newOutput ? (setOutput(commandHistory[historyLookback]), setOutput(newOutput + " ")) : setOutput(newOutput);
  }, handleKeyEvent = (e) => {
    if (e.key === "ArrowUp" && commandHistory.length !== historyLookback && (setCommand(commandHistory[historyLookback]), setHistoryLookback((value) => value + 1)), e.key === "ArrowDown" && (historyLookback !== 0 ? (setCommand(commandHistory[historyLookback - 1]), setHistoryLookback((value) => value - 1)) : setCommand("")), e.key === "Enter" && command !== "") {
      let commandProcessed = command.split(" ");
      setCommandHistory((data) => {
        let dataCommandHistory = data && [...data];
        return dataCommandHistory.push(command), dataCommandHistory || [];
      }), commandProcessed[0] === "cd" ? commandProcessed[1] ? /.txt/g.test(commandProcessed[1]) ? commandProcessed[1] === "me.txt" ? handleOutput("me.txt is a file") : handleOutput(`Cannot find ${commandProcessed[1]}`) : commandProcessed[1] === "about" || commandProcessed[1] === "work" || commandProcessed[1] === "skills" || commandProcessed[1] === "contact" ? (navigate(commandProcessed[1] === "about" ? "/" : commandProcessed[1]), handleOutput("no_output_line")) : handleOutput(`Cannot find ${commandProcessed[1]}`) : handleOutput("No directory specified") : commandProcessed[0] === "ls" ? handleOutput(`
          <a href="/"><strong>about</strong></a> <br/>
          <a href="/work"><strong>work</strong></a> <br/>
          <a href="/skills"><strong>skills</strong></a> <br/>
          <a href="/contact"><strong>contact</strong></a> <br/>
          me.txt
        `) : commandProcessed[0] === "cat" ? commandProcessed[1] === "me.txt" ? handleOutput("It's me") : commandProcessed[1] ? commandProcessed[1] === "about" || commandProcessed[1] === "work" || commandProcessed[1] === "skills" || commandProcessed[1] === "contact" ? handleOutput(`${commandProcessed[1]} is a directory`) : handleOutput(`Cannot find ${commandProcessed[1]}`) : handleOutput("No file specified") : (commandProcessed[0], handleOutput("available commands are help, cd, ls, cat")), setDisableInput(!0);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    className: "flex-row gap-2",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className: "flex-col",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
          className: "text-2xs sm:text-sm",
          children: "[ vantuch@dev ~ ] $"
        })
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className: "flex-auto flex-col",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
          type: "text",
          disabled: disableInput,
          spellCheck: "false",
          autoCorrect: "off",
          autoCapitalize: "none",
          id: "terminal-input",
          className: "w-full bg-grey text-2xs sm:text-sm word-spacing-lg outline-none",
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
    className: "flex sm:my-2 items-center",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
      className: "text-2xs sm:text-sm",
      dangerouslySetInnerHTML: { __html: output }
    })
  });
}

// app/components/terminal/terminal.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function Terminal() {
  let defaultOutput = "Start by typing commands. To see available commands type 'help'.", [output, setOutput] = (0, import_react5.useState)(defaultOutput), [lines, setLines] = (0, import_react5.useState)([]), [commandHistory, setCommandHistory] = (0, import_react5.useState)([]), [lineKey, setLineKey] = (0, import_react5.useState)(0);
  return (0, import_react5.useEffect)(() => {
    setLines((data) => {
      let dataLines = data && [...data];
      return dataLines.length < 1 && (dataLines.push(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OutputLine, {
        output
      }, lineKey)), dataLines.push(
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputLine, {
          output,
          setOutput,
          commandHistory,
          setCommandHistory
        }, lineKey + 1)
      ), setLineKey((lineKey2) => lineKey2 + 1)), dataLines || [];
    }), console.log(lines);
  }, []), (0, import_react5.useEffect)(() => {
    output !== defaultOutput && setLines((data) => {
      console.log(output);
      let dataLines = data && [...data], isNotOutputLine = output === "no_output_line" || output === "no_output_line ";
      return !isNotOutputLine && dataLines.push(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OutputLine, {
        output
      }, lineKey)), dataLines.push(
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputLine, {
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

// app/components/stats.tsx
var import_react6 = require("react");

// app/components/svg.tsx
var import_jsx_runtime = require("react/jsx-runtime"), StatusBar = ({ id }) => {
  let rect = [];
  for (let i = 5; i < 179; i += 6)
    rect.push(i);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
    id,
    width: "181",
    height: "25",
    viewBox: "0 0 181 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
        d: "M0 0H11V2H2V23H11V25H0V0Z",
        fill: "#38BDF8"
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
        d: "M181 0H170V2H179V23H170V25H181V0Z",
        fill: "#38BDF8"
      }),
      rect.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
        className: `${id} hidden`,
        x: r,
        y: "5",
        width: "3",
        height: "15",
        fill: "#38BDF8"
      }, r))
    ]
  });
};

// app/utils/index.ts
var bipolarRandomState = () => {
  let y = Math.random(), status = !1;
  return y < 0.5 ? status = !1 : status = !0, status;
};

// app/components/stats.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function Stats() {
  return (0, import_react6.useEffect)(() => {
    let cpuStatusBar = document.getElementsByClassName("cpu"), memStatusBar = document.getElementsByClassName("mem"), netStatusBar = document.getElementsByClassName("net"), diskStatusBar = document.getElementsByClassName("disk"), cpuStatusBarIndex = 0, memStatusBarIndex = 0, netStatusBarIndex = 0, cpuStatusBarOffset = 13, diskStatusBarIndex = 0, memStatusBarOffset = 15, netStatusBarOffset = 10, diskStatusBarOffset = 20, setStartingStatusBarPosition = (timer, statusBar, i, statusEnd) => {
      statusBar[i].classList.remove("hidden"), statusBar[i].classList.add("block"), i === statusBar.length - statusEnd && (clearInterval(timer), i = statusBar.length - statusEnd - 2, statusEnd = 1);
    }, cpuIntervalStart = setInterval(() => {
      setStartingStatusBarPosition(cpuIntervalStart, cpuStatusBar, cpuStatusBarIndex, cpuStatusBarOffset), cpuStatusBarIndex++;
    }, 50), memIntervalStart = setInterval(() => {
      setStartingStatusBarPosition(memIntervalStart, memStatusBar, memStatusBarIndex, memStatusBarOffset), memStatusBarIndex++;
    }, 50), netIntervalStart = setInterval(() => {
      setStartingStatusBarPosition(netIntervalStart, netStatusBar, netStatusBarIndex, netStatusBarOffset), netStatusBarIndex++;
    }, 50), diskIntervalStart = setInterval(() => {
      setStartingStatusBarPosition(diskIntervalStart, diskStatusBar, diskStatusBarIndex, diskStatusBarOffset), diskStatusBarIndex++;
    }, 50), randomStatusBarState = (statusBar, statusIndex, statusEnd) => {
      var _a, _b, _c, _d;
      let y = bipolarRandomState();
      if (statusEnd === 1 && (y = !0, statusEnd = 0), y) {
        if (y) {
          statusIndex !== statusBar.length && statusIndex++;
          for (let i = statusIndex; i > 0; i--)
            (_c = statusBar[i]) == null || _c.classList.remove("hidden"), (_d = statusBar[i]) == null || _d.classList.add("block");
        }
      } else {
        statusIndex > 0 && statusIndex--;
        for (let i = statusIndex; i < statusBar.length; i++)
          (_a = statusBar[i]) == null || _a.classList.remove("block"), (_b = statusBar[i]) == null || _b.classList.add("hidden");
      }
    };
    setInterval(() => randomStatusBarState(cpuStatusBar, cpuStatusBarIndex, cpuStatusBarOffset), 1e3), setInterval(() => randomStatusBarState(memStatusBar, memStatusBarIndex, memStatusBarOffset), 1e3), setInterval(() => randomStatusBarState(netStatusBar, netStatusBarIndex, netStatusBarOffset), 1e3), setInterval(() => randomStatusBarState(diskStatusBar, diskStatusBarIndex, diskStatusBarOffset), 1e3);
  }, []), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "flex-row justify-between",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
            className: "text-lg",
            children: "CPU"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
            className: "pt-01",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBar, {
              id: "cpu"
            })
          })
        ]
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "flex-row justify-between",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
            className: "text-lg",
            children: "MEM"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
            className: "pt-01",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBar, {
              id: "mem"
            })
          })
        ]
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "flex-row justify-between",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
            className: "text-lg",
            children: "NET"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
            className: "pt-01",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBar, {
              id: "net"
            })
          })
        ]
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "flex-row justify-between",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
            className: "text-lg",
            children: "DISK"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
            className: "pt-01",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBar, {
              id: "disk"
            })
          })
        ]
      })
    ]
  });
}

// app/components/matrix.tsx
var import_react7 = require("react");
var import_jsx_runtime = require("react/jsx-runtime"), StackedElements = ({ count, className }) => {
  let elements = [];
  for (let i = 0; i <= count; i++)
    elements.push(/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
      className
    }, i));
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {
    children: elements
  });
}, Matrix = () => {
  let cols = [];
  (0, import_react7.useEffect)(() => {
    let matrixCols = [], colIndex = 0, level = 10;
    setInterval(() => {
      var _a, _b, _c, _d, _e, _f;
      if (matrixCols.length === 30) {
        for (let i = 0; i < matrixCols.length; i++) {
          let matrixColRowsShift = document.querySelectorAll(`div#matrix-col-${i} > div.matrix-row`);
          (_a = matrixColRowsShift[matrixCols[i]]) == null || _a.classList.remove("bg-blue"), (_b = matrixColRowsShift[matrixCols[i]]) == null || _b.classList.add("bg-grey");
        }
        matrixCols.shift(), matrixCols.push(level);
        for (let i = 0; i < matrixCols.length; i++) {
          let matrixColRowsShift = document.querySelectorAll(`div#matrix-col-${i} > div.matrix-row`);
          (_c = matrixColRowsShift[matrixCols[i]]) == null || _c.classList.remove("bg-grey"), (_d = matrixColRowsShift[matrixCols[i]]) == null || _d.classList.add("bg-blue");
        }
      } else {
        let matrixColRows = document.querySelectorAll(`div#matrix-col-${colIndex} > div.matrix-row`);
        matrixCols.push(level), (_e = matrixColRows[matrixCols[colIndex]]) == null || _e.classList.remove("bg-grey"), (_f = matrixColRows[matrixCols[colIndex]]) == null || _f.classList.add("bg-blue");
      }
      bipolarRandomState() ? level !== 20 && (level += 1) : level !== 0 && (level -= 1), colIndex < 30 ? colIndex++ : colIndex = 0;
    }, 125);
  }, []);
  for (let i = 1; i <= 30; i++)
    cols.push(/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
      id: `matrix-col-${i}`,
      className: "matrix-col grid col-span-1 gap-1 justify-items-center",
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StackedElements, {
        count: 15,
        className: "matrix-row bg-grey grid row-span-1 h-1 w-1 justify-items-center"
      })
    }, i));
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    className: "grid grid-cols-30 grid-rows-15 h-full w-full",
    children: cols
  });
};

// node_modules/remix-image/remix-image.css
var remix_image_default = "/build/_assets/remix-image-WUAL5MSX.css";

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-HFNJAHG5.css";

// app/styles/global.css
var global_default = "/build/_assets/global-DAMTT23R.css";

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
  let [mobileMenuOpen, setMobileMenuOpen] = (0, import_react8.useState)(!1), [mobileNavigationOpen, setMobileNavigationOpen] = (0, import_react8.useState)(!1), [mobileTerminalOpen, setMobileTerminalOpen] = (0, import_react8.useState)(!1);
  return (0, import_react8.useEffect)(() => {
    var _a;
    return (_a = document.getElementById("terminal-container")) == null ? void 0 : _a.addEventListener("click", () => {
      var _a2;
      return (_a2 = document.getElementById("terminal-input")) == null ? void 0 : _a2.focus();
    });
  }, []), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
    lang: "en",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react9.Meta, {}),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react9.Links, {})
        ]
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
        className: "h-screen",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
            className: "hidden sm:block t-01 r-01 absolute h-8 w-8 rotate-45 border-b-2 border-b-sky-400 bg-grey"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
            className: "hidden sm:block b-01 l-01 absolute h-8 w-8 rotate-45 border-t-2 border-t-sky-400 bg-grey"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
            className: "hidden sm:block b-01 r-01 absolute h-8 w-8 rotate-45 border-l-2 border-l-sky-400 bg-grey"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "grid h-screen grid-cols-4 2xl:grid-cols-5 grid-rows-4 gap-4 p-8 sm:p-4",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                className: "row-span-4 gap-4 overflow-y-scroll scrollbar-hide col-span-3 2xl:col-span-4 sm:row-span-3",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react9.Outlet, {})
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: "row-span-4 grid-cols-1 grid-rows-4 hidden border-2 border-sky-400 sm:grid",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                    className: "sm:grid row-span-3",
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      className: "sm:grid grid-rows-2",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                          className: "h-full grid row-span-1",
                          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigation, {})
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                          className: "h-full grid row-span-1 border-t-2 border-t-sky-400 p-8",
                          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stats, {})
                        })
                      ]
                    })
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                    className: "sm:grid row-span-1 w-full px-8 pt-4",
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Matrix, {})
                  })
                ]
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                id: "terminal-container",
                className: "col-span-3 2xl:col-span-4 hidden overflow-y-scroll border-2 border-sky-400 p-4 scrollbar-hide sm:grid",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Terminal, {})
              })
            ]
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "kek absolute bottom-0 block w-full p-4 sm:hidden",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                className: "mobile-menu-corner-tl absolute border-r-2 border-r-sky-400 bg-grey"
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                className: "mobile-menu-corner-tr absolute border-r-2 border-r-sky-400 bg-grey"
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                className: "mobile-menu-corner-br absolute border-r-2 border-r-sky-400 bg-grey"
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                className: "mobile-menu-corner-bl absolute border-r-2 border-r-sky-400 bg-grey"
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                className: "p-4",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className: `grid content-end border-2 border-sky-400 bg-grey ${mobileMenuOpen && "h-more"}`,
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      className: "grid",
                      children: [
                        mobileNavigationOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigation, {}),
                        mobileTerminalOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Terminal, {})
                      ]
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                      className: "grid",
                      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                        className: "flex-row justify-between",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                            className: "h-20 w-3/12 flex-col items-center justify-center bg-blue pr-1",
                            onClick: () => {
                              setMobileMenuOpen(!0), mobileNavigationOpen && setMobileNavigationOpen(!1), setMobileTerminalOpen(!0);
                            },
                            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
                              src: "/svg/nav-terminal.svg",
                              className: "scale-75"
                            })
                          }),
                          mobileMenuOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                            className: "h-20 w-6/12 flex-col items-center justify-center bg-blue",
                            onClick: () => {
                              setMobileMenuOpen(!1), mobileNavigationOpen && setMobileNavigationOpen(!1), mobileTerminalOpen && setMobileTerminalOpen(!1);
                            },
                            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
                              src: "/svg/nav-cross.svg",
                              className: "scale-75"
                            })
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                            className: "h-20 w-3/12 flex-col items-center justify-center bg-blue pl-1",
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
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react9.ScrollRestoration, {}),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react9.Scripts, {}),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react9.LiveReload, {})
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
  let socials = [
    {
      url: "https://github.com/TurniXXD",
      name: "GitHub",
      icon: "github" /* github */
    },
    {
      url: "https://www.linkedin.com/in/jakub-vantuch-552514197/",
      name: "LinkedIn",
      icon: "linkedin" /* linkedin */
    },
    {
      url: "https://t.me/turnix",
      name: "Telegram",
      icon: "telegram" /* telegram */
    },
    {
      url: "mailto:contact@vantuch.dev",
      name: "Email",
      icon: "email" /* email */
    }
  ];
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    className: "gap-4 sm:grid-cols-3 sm:grid-rows-4 h-full",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className: "hidden sm:block t-01 l-01 absolute h-8 w-8 rotate-45 border-r-2 border-r-sky-400 bg-grey"
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className: "grid row-span-2 col-span-1 border-2 border-sky-400",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className: "flex-col relative justify-evenly w-full",
          children: [
            socials.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "flex-row w-full px-8 items-center gap-6",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
                  src: `/svg/${s.icon}.svg`,
                  className: "scale-75 h-10"
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                  className: "nav-link text-base sm:text-lg",
                  children: s.name
                })
              ]
            }, i)),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
              className: "absolute flex-col justify-evenly h-full w-full",
              children: socials.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
                href: s.url,
                target: "__blank",
                rel: "noreferrer noopener nofollow",
                className: "nav-link-container flex-row h-full w-full px-8"
              }, i))
            })
          ]
        })
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "row-span-2 col-span-2 grid-rows-3 h-full gap-4",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
            type: "text",
            name: "name",
            id: "",
            spellCheck: "false",
            autoCorrect: "off",
            className: "h-full w-full px-16 bg-grey border-2 border-sky-400 outline-none text-xl text-center"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
            type: "text",
            name: "email",
            id: "",
            spellCheck: "false",
            autoCorrect: "off",
            className: "h-full w-full px-16 bg-grey border-2 border-sky-400 outline-none text-xl text-center"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
            type: "text",
            name: "phone",
            id: "",
            spellCheck: "false",
            autoCorrect: "off",
            className: "h-full w-full px-16 bg-grey border-2 border-sky-400 outline-none text-xl text-center"
          })
        ]
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className: "grid row-span-2 col-span-3 border-2 border-sky-400",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
          name: "message",
          id: "",
          spellCheck: "false",
          autoCorrect: "off",
          cols: 30,
          rows: 10,
          className: "outline-none text-xl p-10 bg-grey resize-none"
        })
      })
    ]
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
    className: "grid grid-cols-2 gap-20 2xl:gap-40 sm:grid-cols-3 xl:grid-cols-4",
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
      className: "relative work-card col-span-1 row-span-1 grid h-48 2xl:h-56 border-2 border-sky-400",
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
                  className: "work-card-cover absolute top-0 hidden h-48 2xl:h-56 w-full",
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                    className: "absolute bottom-8 left-8 text-lg font-semibold",
                    children: project.name
                  })
                })
              ]
            }),
            i === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
              className: "-top-4 -left-4 absolute h-8 w-8 rotate-45 border-r-2 border-r-sky-400 bg-grey"
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
var assets_manifest_default = { version: "919f752e", entry: { module: "/build/entry.client-PSU6ICS3.js", imports: ["/build/_shared/chunk-VPNDLZRF.js", "/build/_shared/chunk-YE6MABSZ.js", "/build/_shared/chunk-TFY3KWOG.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-AVDP6MDI.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api/image": { id: "routes/api/image", parentId: "root", path: "api/image", index: void 0, caseSensitive: void 0, module: "/build/routes/api/image-ZVGR6KIU.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/contact": { id: "routes/contact", parentId: "root", path: "contact", index: void 0, caseSensitive: void 0, module: "/build/routes/contact-K5SYUEIH.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-HTOXZUU6.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/skills": { id: "routes/skills", parentId: "root", path: "skills", index: void 0, caseSensitive: void 0, module: "/build/routes/skills-KBOWNCIQ.js", imports: ["/build/_shared/chunk-AL6GL34K.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/work": { id: "routes/work", parentId: "root", path: "work", index: void 0, caseSensitive: void 0, module: "/build/routes/work-K7NFXB3B.js", imports: ["/build/_shared/chunk-AL6GL34K.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-919F752E.js" };

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
