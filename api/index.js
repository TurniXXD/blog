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
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_runtime = require("react/jsx-runtime"), ABORT_DELAY = 5e3;
async function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let callbackName = (0, import_isbot.default)(request.headers.get("user-agent")) ? "onAllReady" : "onShellReady";
  return new Promise(async (res, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.RemixServer, {
        context: remixContext,
        url: request.url
      }),
      {
        [callbackName]() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), res(
            new import_node.Response(body, {
              status: didError ? 500 : responseStatusCode,
              headers: responseHeaders
            })
          ), pipe(body);
        },
        onShellError(err) {
          reject(err);
        },
        onError(error) {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  loader: () => loader,
  meta: () => meta,
  useLocale: () => useLocale
});
var import_react8 = require("react"), import_react9 = require("@remix-run/react");

// app/components/navigation.tsx
var import_react2 = require("react"), import_react3 = require("@remix-run/react");

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
}, Loader = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
  className: "h-36 w-full",
  width: "250",
  height: "250",
  viewBox: "0 0 250 250",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
        d: "M75 0H175L250 75V175L175 250H75L0 175V75L75 0Z",
        fill: "#182139"
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
        d: "M82.251 18.4993H167.251L231.001 82.2493V167.249L167.251 230.999H82.251L18.501 167.249V82.2493L82.251 18.4993Z",
        fill: "#0f1524"
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
        className: "loader-sec-a",
        d: "M81.999 5.00024L167.999 5.00024L164.999 12.5002L84.9988 12.5002L81.999 5.00024Z",
        fill: "#7DD8FF"
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
        className: "loader-sec-b",
        d: "M241.501 73.4998L234.001 76.4998L173.501 15.9998L176.501 8.49976L241.501 73.4998Z",
        fill: "#7DD8FF"
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
        className: "loader-sec-c",
        d: "M244.999 81.9998V168L237.499 165V84.9997L244.999 81.9998Z",
        fill: "#7DD8FF"
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
        className: "loader-sec-d",
        d: "M176.501 241.5L173.501 234L234.001 173.5L241.501 176.5L176.501 241.5Z",
        fill: "#7DD8FF"
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
        className: "loader-sec-a",
        d: "M168.001 245H82.001L85.001 237.5H165.001L168.001 245Z",
        fill: "#7DD8FF"
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
        className: "loader-sec-b",
        d: "M8.49902 176.5L15.999 173.5L76.499 234L73.499 241.5L8.49902 176.5Z",
        fill: "#7DD8FF"
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
        className: "loader-sec-c",
        d: "M5.00098 168L5.00098 82.0005L12.501 85.0005V165L5.00098 168Z",
        fill: "#7DD8FF"
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
        className: "loader-sec-d",
        d: "M73.5 8.49976L76.5 15.9998L16 76.4998L8.5 73.4998L73.5 8.49976Z",
        fill: "#7DD8FF"
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
        id: "Group 84",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
            d: "M109.097 85.5H140.407L164.002 109.095V140.405L140.407 164H109.097L85.502 140.405V109.095L109.097 85.5Z",
            fill: "#182139"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M108.476 84H141.028L165.502 108.474V141.026L141.028 165.5H108.476L84.002 141.026V108.474L108.476 84ZM140.407 164H109.097L85.502 140.405V109.095L109.097 85.5H140.407L164.002 109.095V140.405L140.407 164Z",
            fill: "#182139"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
            className: "loader-sec-a",
            d: "M109.098 85.5H140.407L137.231 94.1214H112.728L109.098 85.5Z",
            fill: "#7DD8FF"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
            className: "loader-sec-b",
            d: "M137.229 94.1214L140.406 85.5L164.001 109.095L155.834 112.725L137.229 94.1214Z",
            fill: "#7DD8FF"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
            className: "loader-sec-c",
            d: "M155.833 112.726L164.001 109.096V140.405L155.833 137.229V112.726Z",
            fill: "#7DD8FF"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
            className: "loader-sec-d",
            d: "M137.229 155.832L155.834 137.228L164.001 140.405L140.406 164L137.229 155.832Z",
            fill: "#7DD8FF"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
            className: "loader-sec-a",
            d: "M112.728 155.833H137.231L140.407 164H109.098L112.728 155.833Z",
            fill: "#7DD8FF"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
            className: "loader-sec-b",
            d: "M94.1233 137.228L112.727 155.832L109.097 164L85.502 140.405L94.1233 137.228Z",
            fill: "#7DD8FF"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
            className: "loader-sec-c",
            d: "M85.502 109.096L94.1233 112.726V137.229L85.502 140.405V109.096Z",
            fill: "#7DD8FF"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
            className: "loader-sec-d",
            d: "M109.097 85.5L112.727 94.1214L94.1233 112.725L85.502 109.095L109.097 85.5Z",
            fill: "#7DD8FF"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
            d: "M111.119 90.0786H139.037L160.076 110.921V138.578L139.037 159.42H111.119L90.0801 138.578V110.921L111.119 90.0786Z",
            fill: "#121929"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
            d: "M113.636 96.9993H136.37L153.503 113.832V136.167L136.37 152.999H113.636L96.5029 136.167V113.832L113.636 96.9993Z",
            fill: "#182139"
          })
        ]
      })
    ]
  })
}), FlagCz = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
  width: "71",
  height: "58",
  viewBox: "0 0 71 58",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
      d: "M2 2H47L69 23.6V56H24L2 34.4V2Z",
      fill: "#344F96"
    }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M0 0H47.8177L71 22.7608V58H23.1823L0 35.2392V0ZM2 2V34.4L24 56H69V23.6L47 2H2Z",
      fill: "#71D4FF"
    }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
      d: "M2 2L46.5 1L69 23V29H34.5L2 2Z",
      fill: "#71D4FF"
    }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
      d: "M23.5 57H46.5H69.5L70 29H34.5L18.25 42.5L13.5 46.5L23.5 57Z",
      fill: "#2089B7"
    }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M0 0H47.8177L71 22.7608V58H23.1823L0 35.2392V0ZM2 2V34.4L24 56H69V23.6L47 2H2Z",
      fill: "#71D4FF"
    })
  ]
}), FlagEn = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
  width: "71",
  height: "58",
  viewBox: "0 0 71 58",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
      d: "M2 1H1V2V34.4V34.8196L1.29941 35.1136L23.2994 56.7136L23.5912 57H24H69H70V56V23.6V23.1804L69.7006 22.8864L47.7006 1.28644L47.4088 1H47H2Z",
      fill: "#71D4FF",
      stroke: "#71D4FF",
      strokeWidth: "2"
    }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
      d: "M39 2H31V56H39V2Z",
      fill: "#2C7B9E"
    }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
      d: "M69 25.0001L2 25V33H69V25.0001Z",
      fill: "#2C7B9E"
    }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
      d: "M0 19V8L17 21H0V19Z",
      fill: "#344F96"
    }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
      d: "M0 5.5V2H1.5L25 21H20L0 5.5Z",
      fill: "#2C7B9E"
    }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
      d: "M28 2V13V21L4.5 2H28Z",
      fill: "#344F96"
    }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
      d: "M70 39V50L53 37H70V39Z",
      fill: "#344F96"
    }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
      d: "M70 52.5V56H68.5L45 37H50L70 52.5Z",
      fill: "#2C7B9E"
    }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
      d: "M42 56V45V37L65.5 56H42Z",
      fill: "#344F96"
    }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
      d: "M3 38L6 40L8.50034 43L16.5003 37H2L3 38Z",
      fill: "#344F96"
    }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
      d: "M10.5 44L12.0002 47L12.7501 46.5L24.5001 37H19.5001L10.5 44Z",
      fill: "#2C7B9E"
    }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
      d: "M28 56V37L15.75 46.5L14 48L22 56L24 57H27L28 56Z",
      fill: "#344F96"
    }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
      d: "M68 21L62 14L52.9997 21L68 21Z",
      fill: "#344F96"
    }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
      d: "M60 13L57.5 11L44.9996 21L49.9996 21L60 13Z",
      fill: "#2C7B9E"
    }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
      d: "M42 2V13L42 21L53.75 11.5L56.6875 9.125L48.5 1L45.5 1L42.5 1L42 2Z",
      fill: "#344F96"
    }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
      d: "M2 1H1V2V34.4V34.8196L1.29941 35.1136L23.2994 56.7136L23.5912 57H24H69H70V56V23.6V23.1804L69.7006 22.8864L47.7006 1.28644L47.4088 1H47H2Z",
      stroke: "#71D4FF",
      strokeWidth: "2"
    })
  ]
});

// app/components/flag.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function Flag({
  locale,
  setLocale
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    id: "flag",
    className: "-t-01 -r-01 absolute transition duration-300 ease-in-out hover:-translate-x-1 hover:translate-y-1 hover:scale-[1.1] hover:cursor-pointer",
    onClick: () => setLocale(
      (value) => value === "en" /* en */ ? value = "cz" /* cz */ : value = "en" /* en */
    ),
    children: locale === "en" /* en */ ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlagCz, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlagEn, {})
  });
}

// app/components/navigation.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function Navigation({
  t,
  locale,
  setLocale
}) {
  return (0, import_react2.useEffect)(() => {
    let navLinks = document.getElementsByClassName("nav-link"), navLinkContainers = document.getElementsByClassName("nav-link-container");
    for (let i = 0; i < navLinkContainers.length; i++)
      navLinkContainers[i].addEventListener(
        "mouseover",
        () => navLinks[i].classList.add("nav-link-hover")
      ), navLinkContainers[i].addEventListener(
        "mouseout",
        () => navLinks[i].classList.remove("nav-link-hover")
      );
  }, []), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
    className: "relative w-full flex-col items-end justify-evenly",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className: "w-full flex-row px-8",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
          className: "nav-link text-2xl",
          children: t.menu.about
        })
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className: "w-full flex-row px-8",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
          className: "nav-link text-2xl",
          children: t.menu.work
        })
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className: "w-full flex-row px-8",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
          className: "nav-link text-2xl",
          children: t.menu.skills
        })
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className: "w-full flex-row px-8",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
          className: "nav-link text-2xl",
          children: t.menu.contact
        })
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "absolute h-full w-full flex-col justify-evenly",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react3.Link, {
            className: "nav-link-container h-full w-full flex-row px-8",
            to: "/",
            children: " "
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react3.Link, {
            className: "nav-link-container h-full w-full flex-row px-8",
            to: "/work",
            children: " "
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react3.Link, {
            className: "nav-link-container h-full w-full flex-row px-8",
            to: "/skills",
            children: " "
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react3.Link, {
            className: "nav-link-container h-full w-full flex-row px-8",
            to: "/contact",
            children: " "
          })
        ]
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flag, {
        locale,
        setLocale
      })
    ]
  });
}

// app/components/terminal/terminal.tsx
var import_react5 = require("react");

// app/components/terminal/inputLine.tsx
var import_react4 = require("react"), import_react_router_dom = require("react-router-dom");

// app/data/locales/fields.ts
var fieldWithValue = (field, values) => field.replace(/{{([^{}]*)}}/g, (match, key) => values[key] || match);

// app/components/terminal/inputLine.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function InputLine({
  t,
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
      if (setCommandHistory((data) => {
        let dataCommandHistory = data && [...data];
        return dataCommandHistory.push(command), dataCommandHistory || [];
      }), commandProcessed[0] === "cd")
        commandProcessed[1] ? /.txt/g.test(commandProcessed[1]) ? commandProcessed[1] === t.terminal.commands.ls.meTxt ? handleOutput(
          fieldWithValue(t.terminal.messages.isFile, {
            file: commandProcessed[1]
          })
        ) : handleOutput(
          fieldWithValue(t.terminal.messages.cannotFind, {
            dir: commandProcessed[1]
          })
        ) : commandProcessed[1] === t.terminal.commands.ls.about || commandProcessed[1] === t.terminal.commands.ls.work || commandProcessed[1] === t.terminal.commands.ls.skills || commandProcessed[1] === t.terminal.commands.ls.contact ? (navigate(
          commandProcessed[1] === t.terminal.commands.ls.about ? "/" : commandProcessed[1]
        ), handleOutput("no_output_line")) : handleOutput(
          fieldWithValue(t.terminal.messages.cannotFind, {
            dir: commandProcessed[1]
          })
        ) : handleOutput(t.terminal.messages.noDir);
      else if (commandProcessed[0] === "ls")
        if (commandProcessed[1])
          handleOutput(t.terminal.messages.lsNoParam);
        else {
          let dirs = `
              <a href="/"><strong>${t.terminal.commands.ls.about}</strong></a> <br/>
              <a href="/work"><strong>${t.terminal.commands.ls.work}</strong></a> <br/>
              <a href="/skills"><strong>${t.terminal.commands.ls.skills}</strong></a> <br/>
              <a href="/contact"><strong>${t.terminal.commands.ls.contact}</strong></a> <br/>
              ${t.terminal.commands.ls.meTxt}
            `;
          handleOutput(dirs);
        }
      else
        commandProcessed[0] === "cat" ? commandProcessed[1] === t.terminal.commands.ls.meTxt ? handleOutput(t.terminal.commands.cat.meTxt) : commandProcessed[1] ? commandProcessed[1] === t.terminal.commands.ls.about || commandProcessed[1] === t.terminal.commands.ls.work || commandProcessed[1] === t.terminal.commands.ls.skills || commandProcessed[1] === t.terminal.commands.ls.contact ? handleOutput(
          fieldWithValue(t.terminal.messages.isDir, {
            dir: commandProcessed[1]
          })
        ) : handleOutput(
          fieldWithValue(t.terminal.messages.cannotFind, {
            dir: commandProcessed[1]
          })
        ) : handleOutput(t.terminal.messages.noFile) : (commandProcessed[0], handleOutput(t.terminal.commands.help));
      setDisableInput(!0);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    className: "flex-row gap-2",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className: "flex-col",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
          className: "text-2xs sm:text-sm",
          children: [
            "[ ",
            t.terminal.user,
            " ~ ] $"
          ]
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
          className: "text-2xs word-spacing-lg bg-main w-full outline-none sm:text-sm",
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
    className: "flex items-center sm:my-2",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
      className: "text-2xs sm:text-sm",
      dangerouslySetInnerHTML: { __html: output }
    })
  });
}

// app/components/terminal/terminal.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function Terminal({ t }) {
  let defaultOutput = t.terminal.tooltip, [output, setOutput] = (0, import_react5.useState)(defaultOutput), [lines, setLines] = (0, import_react5.useState)([]), [commandHistory, setCommandHistory] = (0, import_react5.useState)([]), [lineKey, setLineKey] = (0, import_react5.useState)(0);
  return (0, import_react5.useEffect)(() => {
    setLines((data) => {
      let dataLines = data && [...data];
      return dataLines.length < 1 && (dataLines.push(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OutputLine, {
        output
      }, lineKey)), dataLines.push(
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputLine, {
          t,
          output,
          setOutput,
          commandHistory,
          setCommandHistory
        }, lineKey + 1)
      ), setLineKey((lineKey2) => lineKey2 + 1)), dataLines || [];
    });
  }, []), (0, import_react5.useEffect)(() => {
    output !== defaultOutput && setLines((data) => {
      let dataLines = data && [...data], isNotOutputLine = output === "no_output_line";
      return !isNotOutputLine && dataLines.push(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OutputLine, {
        output
      }, lineKey)), dataLines.push(
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputLine, {
          t,
          output,
          setOutput,
          commandHistory,
          setCommandHistory
        }, isNotOutputLine ? lineKey : lineKey + 1)
      ), setLineKey((lineKey2) => lineKey2 + 2), dataLines || [];
    });
  }, [output]), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    className: "p-4",
    children: lines && lines.map((line) => line)
  });
}

// app/components/stats.tsx
var import_react6 = require("react");

// app/utils/index.ts
var bipolarRandomState = () => {
  let y = Math.random(), status = !1;
  return y < 0.5 ? status = !1 : status = !0, status;
};

// app/components/stats.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function Stats({ t }) {
  return (0, import_react6.useEffect)(() => {
    let cpuStatusBar = document.getElementsByClassName("cpu"), memStatusBar = document.getElementsByClassName("mem"), netStatusBar = document.getElementsByClassName("net"), diskStatusBar = document.getElementsByClassName("disk"), cpuStatusBarIndex = 0, memStatusBarIndex = 0, netStatusBarIndex = 0, cpuStatusBarOffset = 13, diskStatusBarIndex = 0, memStatusBarOffset = 15, netStatusBarOffset = 10, diskStatusBarOffset = 20, setStartingStatusBarPosition = (timer, statusBar, i, statusEnd) => {
      statusBar[i].classList.remove("hidden"), statusBar[i].classList.add("block"), i === statusBar.length - statusEnd && (clearInterval(timer), i = statusBar.length - statusEnd - 2, statusEnd = 1);
    }, cpuIntervalStart = setInterval(() => {
      setStartingStatusBarPosition(
        cpuIntervalStart,
        cpuStatusBar,
        cpuStatusBarIndex,
        cpuStatusBarOffset
      ), cpuStatusBarIndex++;
    }, 50), memIntervalStart = setInterval(() => {
      setStartingStatusBarPosition(
        memIntervalStart,
        memStatusBar,
        memStatusBarIndex,
        memStatusBarOffset
      ), memStatusBarIndex++;
    }, 50), netIntervalStart = setInterval(() => {
      setStartingStatusBarPosition(
        netIntervalStart,
        netStatusBar,
        netStatusBarIndex,
        netStatusBarOffset
      ), netStatusBarIndex++;
    }, 50), diskIntervalStart = setInterval(() => {
      setStartingStatusBarPosition(
        diskIntervalStart,
        diskStatusBar,
        diskStatusBarIndex,
        diskStatusBarOffset
      ), diskStatusBarIndex++;
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
    setInterval(
      () => randomStatusBarState(
        cpuStatusBar,
        cpuStatusBarIndex,
        cpuStatusBarOffset
      ),
      1e3
    ), setInterval(
      () => randomStatusBarState(
        memStatusBar,
        memStatusBarIndex,
        memStatusBarOffset
      ),
      1e3
    ), setInterval(
      () => randomStatusBarState(
        netStatusBar,
        netStatusBarIndex,
        netStatusBarOffset
      ),
      1e3
    ), setInterval(
      () => randomStatusBarState(
        diskStatusBar,
        diskStatusBarIndex,
        diskStatusBarOffset
      ),
      1e3
    );
  }, []), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "flex-row justify-center min-[1370px]:justify-between",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
            className: "hidden text-lg min-[1370px]:block",
            children: t.stats.cpu
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
        className: "flex-row justify-center min-[1370px]:justify-between",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
            className: "hidden text-lg min-[1370px]:block",
            children: t.stats.mem
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
        className: "flex-row justify-center min-[1370px]:justify-between",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
            className: "hidden text-lg min-[1370px]:block",
            children: t.stats.net
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
        className: "flex-row justify-center min-[1370px]:justify-between",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
            className: "hidden text-lg min-[1370px]:block",
            children: t.stats.disk
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
var import_jsx_runtime = require("react/jsx-runtime"), StackedElements = ({
  count,
  className
}) => {
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
          let matrixColRowsShift = document.querySelectorAll(
            `div#matrix-col-${i} > div.matrix-row`
          );
          (_a = matrixColRowsShift[matrixCols[i]]) == null || _a.classList.remove("bg-blue"), (_b = matrixColRowsShift[matrixCols[i]]) == null || _b.classList.add("bg-main");
        }
        matrixCols.shift(), matrixCols.push(level);
        for (let i = 0; i < matrixCols.length; i++) {
          let matrixColRowsShift = document.querySelectorAll(
            `div#matrix-col-${i} > div.matrix-row`
          );
          (_c = matrixColRowsShift[matrixCols[i]]) == null || _c.classList.remove("bg-main"), (_d = matrixColRowsShift[matrixCols[i]]) == null || _d.classList.add("bg-blue");
        }
      } else {
        let matrixColRows = document.querySelectorAll(
          `div#matrix-col-${colIndex} > div.matrix-row`
        );
        matrixCols.push(level), (_e = matrixColRows[matrixCols[colIndex]]) == null || _e.classList.remove("bg-main"), (_f = matrixColRows[matrixCols[colIndex]]) == null || _f.classList.add("bg-blue");
      }
      bipolarRandomState() ? level !== 20 && (level += 1) : level !== 0 && (level -= 1), colIndex < 30 ? colIndex++ : colIndex = 0;
    }, 125);
  }, []);
  for (let i = 1; i <= 30; i++)
    cols.push(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        id: `matrix-col-${i}`,
        className: "matrix-col col-span-1 grid justify-items-center gap-1",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StackedElements, {
          count: 15,
          className: "matrix-row bg-main row-span-1 grid h-1 w-1 justify-items-center"
        })
      }, i)
    );
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    className: "grid-cols-30 grid-rows-15 grid h-full w-full",
    children: cols
  });
};

// node_modules/remix-image/remix-image.css
var remix_image_default = "/build/_assets/remix-image-WUAL5MSX.css";

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-CR22JGYT.css";

// app/styles/global.css
var global_default = "/build/_assets/global-QASBVSXV.css";

// app/root.tsx
var import_mail = __toESM(require("@sendgrid/mail"));

// app/data/locales/common/common.ts
var cz = {
  menu: {
    about: "O m\u011B",
    work: "Projekty",
    skills: "Dovednosti",
    contact: "Kontakt"
  },
  stats: {
    cpu: "CPU",
    mem: "MEM",
    net: "NET",
    disk: "DISK"
  },
  terminal: {
    tooltip: "Za\u010Dn\u011Bte spu\u0161t\u011Bn\xEDm p\u0159\xEDkaz\u016F. Pro zobrazen\xED dostupn\xFDch p\u0159\xEDkaz\u016F napi\u0161te 'help'.",
    user: "vantuch@dev",
    commands: {
      help: "Dostupn\xE9 p\u0159\xEDkazy jsou 'help', 'cd', 'ls', 'cat'",
      ls: {
        about: "o_m\u011B",
        work: "projekty",
        skills: "dovednosti",
        contact: "kontakt",
        meTxt: "m\u016Fj_p\u0159\xEDb\u011Bh.txt"
      },
      cat: {
        meTxt: "Jsem full-stack web developer z \u010Cesk\xE9 republiky zam\u011B\u0159uj\xEDc\xED se p\u0159edev\u0161\xEDm na technologie postaven\xE9 na frameworku React.js, a backendov\xE9 \u0159e\u0161en\xED v Go nebo Node.js."
      }
    },
    messages: {
      noDir: "Nebyl zvolen adres\xE1\u0159",
      cannotFind: "Adres\xE1\u0159 {{dir}} nebyl nalezen",
      noFile: "Nebyl specifikov\xE1n \u017E\xE1dn\xFD soubor",
      isDir: "{{dir}} je adres\xE1\u0159",
      isFile: "{{file}} je soubor",
      lsNoParam: "P\u0159\xEDkaz ls nem\xE1 \u017E\xE1dn\xFD parametr"
    }
  }
}, en = {
  menu: {
    about: "About",
    work: "Work",
    skills: "Skills",
    contact: "Contact"
  },
  stats: {
    cpu: "CPU",
    mem: "MEM",
    net: "NET",
    disk: "DISK"
  },
  terminal: {
    tooltip: "Start by typing commands. To see available commands type 'help'.",
    user: "vantuch@dev",
    commands: {
      help: "Available commands are 'help', 'cd', 'ls', 'cat'",
      ls: {
        about: "about",
        work: "work",
        skills: "skills",
        contact: "contact",
        meTxt: "me.txt"
      },
      cat: {
        meTxt: "It's me! I am a full-stack web developer from the Czech Republic focusing primarily on technologies built on top of the React.js framework, and Go or Node.js backend solutions to power my projects."
      }
    },
    messages: {
      noDir: "No directory specified",
      cannotFind: "No such file or directory {{value}}",
      noFile: "No file specified",
      isDir: "{{dir}} is a directory",
      isFile: "{{file}} is a file",
      lsNoParam: "Command ls has no parameters"
    }
  }
};

// app/root.tsx
var import_jsx_runtime = require("react/jsx-runtime"), links = () => [
  { rel: "stylesheet", href: remix_image_default },
  { rel: "stylesheet", href: tailwind_default },
  { rel: "stylesheet", href: global_default }
], meta = () => ({
  charset: "utf-8",
  title: "Jakub Vantuch",
  viewport: "width=device-width,initial-scale=1"
}), loader = async () => (import_mail.default.setApiKey(process.env.SENDGRID_API_KEY || ""), null);
function useLocale() {
  return (0, import_react9.useOutletContext)();
}
function App() {
  let [mobileMenuOpen, setMobileMenuOpen] = (0, import_react8.useState)(!1), [mobileNavigationOpen, setMobileNavigationOpen] = (0, import_react8.useState)(!1), [mobileTerminalOpen, setMobileTerminalOpen] = (0, import_react8.useState)(!1), [locale, setLocale] = (0, import_react8.useState)("en" /* en */), transition = (0, import_react9.useTransition)();
  (0, import_react8.useEffect)(() => {
    var _a;
    (_a = document.getElementById("terminal-container")) == null || _a.addEventListener(
      "click",
      () => {
        var _a2;
        return (_a2 = document.getElementById("terminal-input")) == null ? void 0 : _a2.focus();
      }
    );
  }, []);
  let t = (0, import_react8.useMemo)(() => locale === "en" /* en */ ? en : cz, [locale]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
    lang: locale,
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
            className: "t-01 r-01 border-b-sky-400 bg-main absolute hidden h-8 w-8 rotate-45 border-b-2 sm:block"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
            className: "b-01 l-01 border-t-sky-400 bg-main absolute hidden h-8 w-8 rotate-45 border-t-2 sm:block"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
            className: "b-01 r-01 border-l-sky-400 bg-main absolute hidden h-8 w-8 rotate-45 border-l-2 sm:block"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "grid h-screen grid-cols-4 grid-rows-4 gap-4 p-8 sm:p-4 2xl:grid-cols-5",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                className: "col-span-4 row-span-4 gap-4 overflow-y-scroll scrollbar-hide sm:col-span-3 sm:row-span-3 2xl:col-span-4",
                children: transition.state === "loading" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Loader, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react9.Outlet, {
                  context: { locale }
                })
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: "border-sky-400 row-span-4 hidden border-2 sm:grid sm:grid-cols-1 sm:grid-rows-4",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                    className: "row-span-3 sm:grid",
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      className: "relative grid-rows-2 sm:grid",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                          className: "row-span-1 grid h-full",
                          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigation, {
                            t,
                            locale,
                            setLocale
                          })
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                          className: "border-t-sky-400 row-span-1 grid h-full border-t-2 p-8",
                          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stats, {
                            t
                          })
                        })
                      ]
                    })
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                    className: "row-span-1 w-full px-8 pt-4 sm:grid",
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Matrix, {})
                  })
                ]
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                id: "terminal-container",
                className: "border-sky-400 col-span-3 hidden overflow-y-scroll border-2 p-4 scrollbar-hide sm:grid 2xl:col-span-4",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Terminal, {
                  t
                })
              })
            ]
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "absolute bottom-0 block w-full p-4 sm:hidden",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                className: "mobile-menu-corner-tl border-r-sky-400 bg-main absolute border-r-2"
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                className: "mobile-menu-corner-tr border-r-sky-400 bg-main absolute border-r-2"
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                className: "mobile-menu-corner-br border-r-sky-400 bg-main absolute border-r-2"
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                className: "mobile-menu-corner-bl border-r-sky-400 bg-main absolute border-r-2"
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                className: "p-4",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className: `border-sky-400 bg-main grid content-end border-2 ${mobileMenuOpen && "h-more"}`,
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      className: "grid",
                      children: [
                        mobileNavigationOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigation, {
                          t,
                          locale,
                          setLocale
                        }),
                        mobileTerminalOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Terminal, {
                          t
                        })
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
                              className: "scale-75",
                              alt: "icon-terminal"
                            })
                          }),
                          mobileMenuOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                            className: "h-20 w-6/12 flex-col items-center justify-center bg-blue",
                            onClick: () => {
                              setMobileMenuOpen(!1), mobileNavigationOpen && setMobileNavigationOpen(!1), mobileTerminalOpen && setMobileTerminalOpen(!1);
                            },
                            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
                              src: "/svg/nav-cross.svg",
                              className: "scale-75",
                              alt: "icon-cross"
                            })
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                            className: "h-20 w-3/12 flex-col items-center justify-center bg-blue pl-1",
                            onClick: () => {
                              setMobileMenuOpen(!0), mobileTerminalOpen && setMobileTerminalOpen(!1), setMobileNavigationOpen(!0);
                            },
                            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
                              src: "/svg/nav-menu.svg",
                              className: "scale-75",
                              alt: "icon-menu"
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
  loader: () => loader2
});
var import_os = __toESM(require("os")), import_path = __toESM(require("path")), import_server2 = require("remix-image/server"), import_remix_image_sharp = require("remix-image-sharp"), fetchImage = async (asset, url, options, basePath) => url.startsWith("/") && (url.length === 1 || url[1] !== "/") ? (0, import_server2.fsResolver)(asset, url, options, basePath) : (0, import_server2.fetchResolver)(asset, url, options, basePath), vercelUrl = process.env.VERCEL_URL || "", fixedVercelUrl = vercelUrl.startsWith("https") ? vercelUrl : `https://${vercelUrl}`, config = {
  selfUrl: fixedVercelUrl,
  cache: new import_server2.DiskCache({
    path: import_path.default.join(import_os.default.tmpdir(), "img")
  }),
  resolver: fetchImage,
  transformer: import_remix_image_sharp.sharpTransformer,
  basePath: "/"
}, loader2 = ({ request }) => (0, import_server2.imageLoader)(config, request);

// app/routes/contact.tsx
var contact_exports = {};
__export(contact_exports, {
  action: () => action,
  default: () => Contact
});
var import_react10 = require("@remix-run/react"), import_react11 = require("react"), import_mail2 = __toESM(require("@sendgrid/mail"));

// app/data/locales/contact/contact.ts
var cz2 = {
  links: {
    github: "GitHub",
    linkedin: "LinkedIn",
    telegram: "Telegram",
    email: "Email"
  },
  fields: {
    name: {
      title: "Jm\xE9no",
      placeholder: "Jakub Vantuch"
    },
    email: {
      title: "Email",
      placeholder: "contact@vantuch.dev"
    },
    phone: {
      title: "Telefon",
      placeholder: "+420123456789"
    },
    messagePlaceholder: "Dovolte mi v\xE1m pomoc s va\u0161\xED viz\xED...",
    send: "Odeslat",
    messages: {
      requiredField: "Toto pole je povinn\xE9",
      invalidEmail: "Neplatn\xE1 emailov\xE1 adresa",
      invalidPhone: "Neplatn\xE9 telefonn\xED \u010D\xEDslo"
    },
    success: "\xDAsp\u011B\u0161n\u011B odesl\xE1no",
    error: "Zpr\xE1vu se nepoda\u0159ilo odeslat"
  }
}, en2 = {
  links: {
    github: "GitHub",
    linkedin: "LinkedIn",
    telegram: "Telegram",
    email: "Email"
  },
  fields: {
    name: {
      title: "Name",
      placeholder: "Jakub Vantuch"
    },
    email: {
      title: "Email",
      placeholder: "contact@vantuch.dev"
    },
    phone: {
      title: "Phone",
      placeholder: "+420123456789"
    },
    messagePlaceholder: "Let me make your dream come true...",
    send: "Send",
    messages: {
      requiredField: "This field is required",
      invalidEmail: "Invad email address",
      invalidPhone: "Invalid phone number"
    },
    success: "Send successfully",
    error: "Message wasn't sent"
  }
};

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
], socials = [
  {
    url: "https://github.com/TurniXXD",
    icon: "github" /* github */
  },
  {
    url: "https://www.linkedin.com/in/jakub-vantuch-552514197/",
    icon: "linkedin" /* linkedin */
  },
  {
    url: "https://t.me/turnix",
    icon: "telegram" /* telegram */
  },
  {
    url: "mailto:contact@vantuch.dev",
    icon: "email" /* email */
  }
];

// app/routes/contact.tsx
var import_jsx_runtime = require("react/jsx-runtime"), action = async ({ request }) => {
  let formData = Object.fromEntries(await request.formData()), { name, email, phone, message } = formData;
  if (typeof name == "string" && typeof email == "string" && typeof message == "string" && typeof phone == "string") {
    let formErrors = {
      ...!name && { name: "This field is required" },
      ...email ? !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && {
        email: "Invalid email address"
      } : { email: "This field is required" },
      ...phone && !/^\d+$/.test(phone) && { phone: "Invalid phone number" },
      ...!message && { message: "This field is required" }
    };
    return Object.values(formErrors).some(Boolean) ? { formErrors } : (await import_mail2.default.send({
      to: "contact@vantuch.dev",
      from: "contact@vantuch.dev",
      subject: "New contact from blog",
      html: `
      <div>
        <ul>
          <li><strong>Name: </strong> ${name}</li>
          <li><strong>Email: </strong> ${email}</li>
          ${phone && `<li><strong>Tel: </strong> ${phone}</li>`}
        </ul>
        <p>${message}</p>
      </div>
      `
    }).then(() => {
    }).catch((err) => console.error(err)), "success");
  }
};
function Contact() {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
  let actionData = (0, import_react10.useActionData)(), { locale } = useLocale(), t = (0, import_react11.useMemo)(() => locale === "en" /* en */ ? en2 : cz2, [locale]);
  return (0, import_react11.useEffect)(() => {
    let contactLinks = document.getElementsByClassName("contact-link"), contactLinkContainers = document.getElementsByClassName(
      "contact-link-container"
    );
    for (let i = 0; i < contactLinkContainers.length; i++)
      contactLinkContainers[i].addEventListener(
        "mouseover",
        () => contactLinks[i].classList.add("contact-link-hover")
      ), contactLinkContainers[i].addEventListener(
        "mouseout",
        () => contactLinks[i].classList.remove("contact-link-hover")
      );
  }, []), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react10.Form, {
    method: "post",
    className: "gap-4 sm:grid sm:h-full sm:grid-cols-3 sm:grid-rows-4",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className: "t-01 l-01 border-r-sky-400 bg-main absolute hidden h-8 w-8 rotate-45 border-r-2 sm:block"
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className: "border-sky-400 col-span-1 row-span-2 grid border-2",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className: "relative w-full flex-col justify-evenly",
          children: [
            socials.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "w-full flex-row items-center justify-start gap-6 px-8 sm:justify-center lg:justify-start",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
                  src: `/svg/${s.icon}.svg`,
                  className: "h-10 scale-75",
                  alt: s.icon
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                  className: "contact-link block text-base sm:hidden sm:text-lg lg:block",
                  children: t.links[s.icon]
                })
              ]
            }, i)),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
              className: "absolute h-full w-full flex-col justify-evenly",
              children: socials.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
                href: s.url,
                target: "__blank",
                rel: "noreferrer noopener nofollow",
                className: "contact-link-container h-full w-full flex-row px-8",
                children: " "
              }, i))
            })
          ]
        })
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "col-span-2 row-span-2 grid h-full grid-rows-3 gap-4",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: `relative h-20 w-full border-2 sm:h-full ${(_a = actionData == null ? void 0 : actionData.formErrors) != null && _a.name ? "border-error" : "border-sky-400"}`,
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                className: `bg-main absolute left-4 -top-2 h-10 px-2 text-sm ${((_b = actionData == null ? void 0 : actionData.formErrors) == null ? void 0 : _b.name) && "text-error"}`,
                children: (_c = actionData == null ? void 0 : actionData.formErrors) != null && _c.name ? (_d = actionData == null ? void 0 : actionData.formErrors) == null ? void 0 : _d.name : t.fields.name.title
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
                type: "text",
                name: "name",
                id: "",
                placeholder: t.fields.name.placeholder || "",
                spellCheck: "false",
                autoCorrect: "off",
                className: "bg-main h-full w-full px-16 text-center text-xl outline-none"
              })
            ]
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: `relative h-20 w-full border-2 sm:h-full ${(_e = actionData == null ? void 0 : actionData.formErrors) != null && _e.email ? "border-error" : "border-sky-400"}`,
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                className: `bg-main absolute left-4 -top-3 h-10 px-2 text-sm ${((_f = actionData == null ? void 0 : actionData.formErrors) == null ? void 0 : _f.email) && "text-error"}`,
                children: (_g = actionData == null ? void 0 : actionData.formErrors) != null && _g.email ? (_h = actionData == null ? void 0 : actionData.formErrors) == null ? void 0 : _h.email : t.fields.email.title
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
                type: "text",
                name: "email",
                id: "",
                placeholder: t.fields.email.placeholder || "",
                spellCheck: "false",
                autoCorrect: "off",
                className: "bg-main h-full w-full px-16 text-center text-xl outline-none"
              })
            ]
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: `relative h-20 w-full border-2 sm:h-full ${(_i = actionData == null ? void 0 : actionData.formErrors) != null && _i.phone ? "border-error" : "border-sky-400"}`,
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                className: `bg-main absolute left-4 -top-3 h-10 px-2 text-sm ${((_j = actionData == null ? void 0 : actionData.formErrors) == null ? void 0 : _j.phone) && "text-error"}`,
                children: (_k = actionData == null ? void 0 : actionData.formErrors) != null && _k.phone ? (_l = actionData == null ? void 0 : actionData.formErrors) == null ? void 0 : _l.phone : t.fields.phone.title
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
                type: "text",
                name: "phone",
                id: "",
                placeholder: t.fields.phone.placeholder || "",
                spellCheck: "false",
                autoCorrect: "off",
                className: "bg-main h-full w-full px-16 text-center text-xl outline-none"
              })
            ]
          })
        ]
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: `border-red relative col-span-3 row-span-2 grid grid-rows-3 border-2 ${(_m = actionData == null ? void 0 : actionData.formErrors) != null && _m.message ? "border-error" : "border-sky-400"}`,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
            name: "message",
            id: "",
            spellCheck: "false",
            autoCorrect: "off",
            placeholder: t.fields.messagePlaceholder || "",
            cols: 30,
            rows: 10,
            className: "bg-main row-span-2 mb-6 grid resize-none p-10 text-xl outline-none"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
            className: "absolute bottom-0 right-0 row-span-1 grid h-28 w-full grid-cols-3 grid-rows-1",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
              type: "submit",
              className: "contact-button border-sky-400 relative col-span-2 col-start-2 row-span-1 grid content-center justify-items-center border-2 border-r-0 border-b-0",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                  className: "border-r-sky-400 bg-main absolute -top-4 -left-4 hidden h-8 w-8 rotate-45 border-r-2 sm:block"
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                  className: "text-2xl",
                  children: t.fields.send
                })
              ]
            })
          }),
          ((_n = actionData == null ? void 0 : actionData.formErrors) == null ? void 0 : _n.phone) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
            className: "text-error bg-main absolute left-4 -top-3 h-10 px-2 text-sm",
            children: actionData.formErrors.message
          })
        ]
      })
    ]
  });
}

// app/routes/skills.tsx
var skills_exports = {};
__export(skills_exports, {
  default: () => Skills
});
var import_remix_image2 = require("remix-image"), import_jsx_runtime = require("react/jsx-runtime");
function Skills() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    className: "grid grid-cols-2 gap-20 md:grid-cols-3 xl:grid-cols-4 2xl:gap-40",
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
    className: "h-full p-4",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
      className: "grid h-full place-items-center",
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Loader, {})
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
      className: "work-card border-sky-400 relative col-span-1 row-span-1 grid h-48 border-2 2xl:h-56",
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
                  className: "work-card-cover absolute top-0 hidden h-48 w-full 2xl:h-56",
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                    className: "absolute bottom-8 left-8 text-lg font-semibold",
                    children: project.name
                  })
                })
              ]
            }),
            i === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
              className: "border-r-sky-400 bg-main absolute -top-4 -left-4 h-8 w-8 rotate-45 border-r-2"
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
var assets_manifest_default = { version: "58aa34d2", entry: { module: "/build/entry.client-L2J7CZAI.js", imports: ["/build/_shared/chunk-M74EOIOK.js", "/build/_shared/chunk-ISKBWJDU.js", "/build/_shared/chunk-G5WX4PPA.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-XRFNXMLJ.js", imports: ["/build/_shared/chunk-7MHDETNY.js", "/build/_shared/chunk-JXUZ3RII.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api/image": { id: "routes/api/image", parentId: "root", path: "api/image", index: void 0, caseSensitive: void 0, module: "/build/routes/api/image-NSNWNJ3I.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/contact": { id: "routes/contact", parentId: "root", path: "contact", index: void 0, caseSensitive: void 0, module: "/build/routes/contact-JGP5YFRI.js", imports: ["/build/_shared/chunk-N3IIWCGR.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-ZNED3MML.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/skills": { id: "routes/skills", parentId: "root", path: "skills", index: void 0, caseSensitive: void 0, module: "/build/routes/skills-IWZWRB7N.js", imports: ["/build/_shared/chunk-LCK7PR72.js", "/build/_shared/chunk-N3IIWCGR.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/work": { id: "routes/work", parentId: "root", path: "work", index: void 0, caseSensitive: void 0, module: "/build/routes/work-LG6DGXQA.js", imports: ["/build/_shared/chunk-LCK7PR72.js", "/build/_shared/chunk-N3IIWCGR.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-58AA34D2.js" };

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
