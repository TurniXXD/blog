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
var import_react8 = require("react"), import_react9 = require("@remix-run/react");

// app/components/navigation.tsx
var import_react2 = require("react"), import_react3 = require("@remix-run/react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Navigation() {
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
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
    className: "relative w-full flex-col items-end justify-evenly",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "w-full flex-row px-8",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
          className: "nav-link text-2xl",
          children: "About"
        }, void 0, !1, {
          fileName: "app/components/navigation.tsx",
          lineNumber: 22,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/navigation.tsx",
        lineNumber: 21,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "w-full flex-row px-8",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
          className: "nav-link text-2xl",
          children: "Work"
        }, void 0, !1, {
          fileName: "app/components/navigation.tsx",
          lineNumber: 25,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/navigation.tsx",
        lineNumber: 24,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "w-full flex-row px-8",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
          className: "nav-link text-2xl",
          children: "Skills"
        }, void 0, !1, {
          fileName: "app/components/navigation.tsx",
          lineNumber: 28,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/navigation.tsx",
        lineNumber: 27,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "w-full flex-row px-8",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
          className: "nav-link text-2xl",
          children: "Contact"
        }, void 0, !1, {
          fileName: "app/components/navigation.tsx",
          lineNumber: 31,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/navigation.tsx",
        lineNumber: 30,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "absolute h-full w-full flex-col justify-evenly",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react3.Link, {
            className: "nav-link-container h-full w-full flex-row px-8",
            to: "/"
          }, void 0, !1, {
            fileName: "app/components/navigation.tsx",
            lineNumber: 34,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react3.Link, {
            className: "nav-link-container h-full w-full flex-row px-8",
            to: "/work"
          }, void 0, !1, {
            fileName: "app/components/navigation.tsx",
            lineNumber: 38,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react3.Link, {
            className: "nav-link-container h-full w-full flex-row px-8",
            to: "/skills"
          }, void 0, !1, {
            fileName: "app/components/navigation.tsx",
            lineNumber: 42,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react3.Link, {
            className: "nav-link-container h-full w-full flex-row px-8",
            to: "/contact"
          }, void 0, !1, {
            fileName: "app/components/navigation.tsx",
            lineNumber: 46,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/navigation.tsx",
        lineNumber: 33,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/navigation.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}

// app/components/terminal/terminal.tsx
var import_react5 = require("react");

// app/components/terminal/inputLine.tsx
var import_react4 = require("react"), import_react_router_dom = require("react-router-dom"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
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
      }), commandProcessed[0] === "cd" ? commandProcessed[1] ? /.txt/g.test(commandProcessed[1]) ? commandProcessed[1] === "me.txt" ? handleOutput("me.txt is a file") : handleOutput(`Cannot find ${commandProcessed[1]}`) : commandProcessed[1] === "about" || commandProcessed[1] === "work" || commandProcessed[1] === "skills" || commandProcessed[1] === "contact" ? (navigate(
        commandProcessed[1] === "about" ? "/" : commandProcessed[1]
      ), handleOutput("no_output_line")) : handleOutput(`Cannot find ${commandProcessed[1]}`) : handleOutput("No directory specified") : commandProcessed[0] === "ls" ? handleOutput(`
          <a href="/"><strong>about</strong></a> <br/>
          <a href="/work"><strong>work</strong></a> <br/>
          <a href="/skills"><strong>skills</strong></a> <br/>
          <a href="/contact"><strong>contact</strong></a> <br/>
          me.txt
        `) : commandProcessed[0] === "cat" ? commandProcessed[1] === "me.txt" ? handleOutput("It's me") : commandProcessed[1] ? commandProcessed[1] === "about" || commandProcessed[1] === "work" || commandProcessed[1] === "skills" || commandProcessed[1] === "contact" ? handleOutput(`${commandProcessed[1]} is a directory`) : handleOutput(`Cannot find ${commandProcessed[1]}`) : handleOutput("No file specified") : (commandProcessed[0], handleOutput("available commands are help, cd, ls, cat")), setDisableInput(!0);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex-row gap-2",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex-col",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
          className: "text-2xs sm:text-sm",
          children: "[ vantuch@dev ~ ] $"
        }, void 0, !1, {
          fileName: "app/components/terminal/inputLine.tsx",
          lineNumber: 108,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/terminal/inputLine.tsx",
        lineNumber: 107,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex-auto flex-col",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
          type: "text",
          disabled: disableInput,
          spellCheck: "false",
          autoCorrect: "off",
          autoCapitalize: "none",
          id: "terminal-input",
          className: "text-2xs word-spacing-lg w-full bg-grey outline-none sm:text-sm",
          onChange: (value) => setCommand(value.target.value),
          value: command,
          onKeyDown: (e) => handleKeyEvent(e)
        }, void 0, !1, {
          fileName: "app/components/terminal/inputLine.tsx",
          lineNumber: 111,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/terminal/inputLine.tsx",
        lineNumber: 110,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/terminal/inputLine.tsx",
    lineNumber: 106,
    columnNumber: 5
  }, this);
}

// app/components/terminal/outputLine.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function OutputLine({ output }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex items-center sm:my-2",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
      className: "text-2xs sm:text-sm",
      dangerouslySetInnerHTML: { __html: output }
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
function Terminal() {
  let defaultOutput = "Start by typing commands. To see available commands type 'help'.", [output, setOutput] = (0, import_react5.useState)(defaultOutput), [lines, setLines] = (0, import_react5.useState)([]), [commandHistory, setCommandHistory] = (0, import_react5.useState)([]), [lineKey, setLineKey] = (0, import_react5.useState)(0);
  return (0, import_react5.useEffect)(() => {
    setLines((data) => {
      let dataLines = data && [...data];
      return dataLines.length < 1 && (dataLines.push(/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OutputLine, {
        output
      }, lineKey, !1, {
        fileName: "app/components/terminal/terminal.tsx",
        lineNumber: 17,
        columnNumber: 24
      }, this)), dataLines.push(
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InputLine, {
          output,
          setOutput,
          commandHistory,
          setCommandHistory
        }, lineKey + 1, !1, {
          fileName: "app/components/terminal/terminal.tsx",
          lineNumber: 19,
          columnNumber: 11
        }, this)
      ), setLineKey((lineKey2) => lineKey2 + 1)), dataLines || [];
    });
  }, []), (0, import_react5.useEffect)(() => {
    output !== defaultOutput && setLines((data) => {
      let dataLines = data && [...data], isNotOutputLine = output === "no_output_line" || output === "no_output_line ";
      return !isNotOutputLine && dataLines.push(/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OutputLine, {
        output
      }, lineKey, !1, {
        fileName: "app/components/terminal/terminal.tsx",
        lineNumber: 40,
        columnNumber: 26
      }, this)), dataLines.push(
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InputLine, {
          output,
          setOutput,
          commandHistory,
          setCommandHistory
        }, isNotOutputLine ? lineKey : lineKey + 1, !1, {
          fileName: "app/components/terminal/terminal.tsx",
          lineNumber: 42,
          columnNumber: 11
        }, this)
      ), setLineKey((lineKey2) => lineKey2 + 2), dataLines || [];
    });
  }, [output]), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "p-4",
    children: lines && lines.map((line) => line)
  }, void 0, !1, {
    fileName: "app/components/terminal/terminal.tsx",
    lineNumber: 56,
    columnNumber: 10
  }, this);
}

// app/components/stats.tsx
var import_react6 = require("react");

// app/components/svg.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), StatusBar = ({ id }) => {
  let rect = [];
  for (let i = 5; i < 179; i += 6)
    rect.push(i);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
    id,
    width: "181",
    height: "25",
    viewBox: "0 0 181 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        d: "M0 0H11V2H2V23H11V25H0V0Z",
        fill: "#38BDF8"
      }, void 0, !1, {
        fileName: "app/components/svg.tsx",
        lineNumber: 14,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        d: "M181 0H170V2H179V23H170V25H181V0Z",
        fill: "#38BDF8"
      }, void 0, !1, {
        fileName: "app/components/svg.tsx",
        lineNumber: 15,
        columnNumber: 7
      }, this),
      rect.map((r) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
        className: `${id} hidden`,
        x: r,
        y: "5",
        width: "3",
        height: "15",
        fill: "#38BDF8"
      }, r, !1, {
        fileName: "app/components/svg.tsx",
        lineNumber: 17,
        columnNumber: 9
      }, this))
    ]
  }, void 0, !0, {
    fileName: "app/components/svg.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}, Loader = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
  className: "h-36 w-full",
  width: "250",
  height: "250",
  viewBox: "0 0 250 250",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        d: "M75 0H175L250 75V175L175 250H75L0 175V75L75 0Z",
        fill: "#182139"
      }, void 0, !1, {
        fileName: "app/components/svg.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        d: "M82.251 18.4993H167.251L231.001 82.2493V167.249L167.251 230.999H82.251L18.501 167.249V82.2493L82.251 18.4993Z",
        fill: "#0f1524"
      }, void 0, !1, {
        fileName: "app/components/svg.tsx",
        lineNumber: 46,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        className: "loader-sec-a",
        d: "M81.999 5.00024L167.999 5.00024L164.999 12.5002L84.9988 12.5002L81.999 5.00024Z",
        fill: "#7DD8FF"
      }, void 0, !1, {
        fileName: "app/components/svg.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        className: "loader-sec-b",
        d: "M241.501 73.4998L234.001 76.4998L173.501 15.9998L176.501 8.49976L241.501 73.4998Z",
        fill: "#7DD8FF"
      }, void 0, !1, {
        fileName: "app/components/svg.tsx",
        lineNumber: 55,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        className: "loader-sec-c",
        d: "M244.999 81.9998V168L237.499 165V84.9997L244.999 81.9998Z",
        fill: "#7DD8FF"
      }, void 0, !1, {
        fileName: "app/components/svg.tsx",
        lineNumber: 60,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        className: "loader-sec-d",
        d: "M176.501 241.5L173.501 234L234.001 173.5L241.501 176.5L176.501 241.5Z",
        fill: "#7DD8FF"
      }, void 0, !1, {
        fileName: "app/components/svg.tsx",
        lineNumber: 65,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        className: "loader-sec-a",
        d: "M168.001 245H82.001L85.001 237.5H165.001L168.001 245Z",
        fill: "#7DD8FF"
      }, void 0, !1, {
        fileName: "app/components/svg.tsx",
        lineNumber: 70,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        className: "loader-sec-b",
        d: "M8.49902 176.5L15.999 173.5L76.499 234L73.499 241.5L8.49902 176.5Z",
        fill: "#7DD8FF"
      }, void 0, !1, {
        fileName: "app/components/svg.tsx",
        lineNumber: 75,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        className: "loader-sec-c",
        d: "M5.00098 168L5.00098 82.0005L12.501 85.0005V165L5.00098 168Z",
        fill: "#7DD8FF"
      }, void 0, !1, {
        fileName: "app/components/svg.tsx",
        lineNumber: 80,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        className: "loader-sec-d",
        d: "M73.5 8.49976L76.5 15.9998L16 76.4998L8.5 73.4998L73.5 8.49976Z",
        fill: "#7DD8FF"
      }, void 0, !1, {
        fileName: "app/components/svg.tsx",
        lineNumber: 85,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
        id: "Group 84",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
            d: "M109.097 85.5H140.407L164.002 109.095V140.405L140.407 164H109.097L85.502 140.405V109.095L109.097 85.5Z",
            fill: "#182139"
          }, void 0, !1, {
            fileName: "app/components/svg.tsx",
            lineNumber: 91,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M108.476 84H141.028L165.502 108.474V141.026L141.028 165.5H108.476L84.002 141.026V108.474L108.476 84ZM140.407 164H109.097L85.502 140.405V109.095L109.097 85.5H140.407L164.002 109.095V140.405L140.407 164Z",
            fill: "#182139"
          }, void 0, !1, {
            fileName: "app/components/svg.tsx",
            lineNumber: 95,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
            className: "loader-sec-a",
            d: "M109.098 85.5H140.407L137.231 94.1214H112.728L109.098 85.5Z",
            fill: "#7DD8FF"
          }, void 0, !1, {
            fileName: "app/components/svg.tsx",
            lineNumber: 101,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
            className: "loader-sec-b",
            d: "M137.229 94.1214L140.406 85.5L164.001 109.095L155.834 112.725L137.229 94.1214Z",
            fill: "#7DD8FF"
          }, void 0, !1, {
            fileName: "app/components/svg.tsx",
            lineNumber: 106,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
            className: "loader-sec-c",
            d: "M155.833 112.726L164.001 109.096V140.405L155.833 137.229V112.726Z",
            fill: "#7DD8FF"
          }, void 0, !1, {
            fileName: "app/components/svg.tsx",
            lineNumber: 111,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
            className: "loader-sec-d",
            d: "M137.229 155.832L155.834 137.228L164.001 140.405L140.406 164L137.229 155.832Z",
            fill: "#7DD8FF"
          }, void 0, !1, {
            fileName: "app/components/svg.tsx",
            lineNumber: 116,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
            className: "loader-sec-a",
            d: "M112.728 155.833H137.231L140.407 164H109.098L112.728 155.833Z",
            fill: "#7DD8FF"
          }, void 0, !1, {
            fileName: "app/components/svg.tsx",
            lineNumber: 121,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
            className: "loader-sec-b",
            d: "M94.1233 137.228L112.727 155.832L109.097 164L85.502 140.405L94.1233 137.228Z",
            fill: "#7DD8FF"
          }, void 0, !1, {
            fileName: "app/components/svg.tsx",
            lineNumber: 126,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
            className: "loader-sec-c",
            d: "M85.502 109.096L94.1233 112.726V137.229L85.502 140.405V109.096Z",
            fill: "#7DD8FF"
          }, void 0, !1, {
            fileName: "app/components/svg.tsx",
            lineNumber: 131,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
            className: "loader-sec-d",
            d: "M109.097 85.5L112.727 94.1214L94.1233 112.725L85.502 109.095L109.097 85.5Z",
            fill: "#7DD8FF"
          }, void 0, !1, {
            fileName: "app/components/svg.tsx",
            lineNumber: 136,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
            d: "M111.119 90.0786H139.037L160.076 110.921V138.578L139.037 159.42H111.119L90.0801 138.578V110.921L111.119 90.0786Z",
            fill: "#0f1524"
          }, void 0, !1, {
            fileName: "app/components/svg.tsx",
            lineNumber: 141,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
            d: "M113.636 96.9993H136.37L153.503 113.832V136.167L136.37 152.999H113.636L96.5029 136.167V113.832L113.636 96.9993Z",
            fill: "#182139"
          }, void 0, !1, {
            fileName: "app/components/svg.tsx",
            lineNumber: 145,
            columnNumber: 11
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/svg.tsx",
        lineNumber: 90,
        columnNumber: 9
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/svg.tsx",
    lineNumber: 41,
    columnNumber: 7
  }, this)
}, void 0, !1, {
  fileName: "app/components/svg.tsx",
  lineNumber: 33,
  columnNumber: 5
}, this);

// app/utils/index.ts
var bipolarRandomState = () => {
  let y = Math.random(), status = !1;
  return y < 0.5 ? status = !1 : status = !0, status;
};

// app/components/stats.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Stats() {
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
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex-row justify-center min-[1370px]:justify-between",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
            className: "hidden text-lg min-[1370px]:block",
            children: "CPU"
          }, void 0, !1, {
            fileName: "app/components/stats.tsx",
            lineNumber: 143,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "pt-01",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatusBar, {
              id: "cpu"
            }, void 0, !1, {
              fileName: "app/components/stats.tsx",
              lineNumber: 145,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/components/stats.tsx",
            lineNumber: 144,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/stats.tsx",
        lineNumber: 142,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex-row justify-center min-[1370px]:justify-between",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
            className: "hidden text-lg min-[1370px]:block",
            children: "MEM"
          }, void 0, !1, {
            fileName: "app/components/stats.tsx",
            lineNumber: 149,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "pt-01",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatusBar, {
              id: "mem"
            }, void 0, !1, {
              fileName: "app/components/stats.tsx",
              lineNumber: 151,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/components/stats.tsx",
            lineNumber: 150,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/stats.tsx",
        lineNumber: 148,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex-row justify-center min-[1370px]:justify-between",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
            className: "hidden text-lg min-[1370px]:block",
            children: "NET"
          }, void 0, !1, {
            fileName: "app/components/stats.tsx",
            lineNumber: 155,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "pt-01",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatusBar, {
              id: "net"
            }, void 0, !1, {
              fileName: "app/components/stats.tsx",
              lineNumber: 157,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/components/stats.tsx",
            lineNumber: 156,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/stats.tsx",
        lineNumber: 154,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex-row justify-center min-[1370px]:justify-between",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
            className: "hidden text-lg min-[1370px]:block",
            children: "DISK"
          }, void 0, !1, {
            fileName: "app/components/stats.tsx",
            lineNumber: 161,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "pt-01",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatusBar, {
              id: "disk"
            }, void 0, !1, {
              fileName: "app/components/stats.tsx",
              lineNumber: 163,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/components/stats.tsx",
            lineNumber: 162,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/stats.tsx",
        lineNumber: 160,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/stats.tsx",
    lineNumber: 141,
    columnNumber: 5
  }, this);
}

// app/components/matrix.tsx
var import_react7 = require("react");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), StackedElements = ({
  count,
  className
}) => {
  let elements = [];
  for (let i = 0; i <= count; i++)
    elements.push(/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className
    }, i, !1, {
      fileName: "app/components/matrix.tsx",
      lineNumber: 13,
      columnNumber: 19
    }, this));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: elements
  }, void 0, !1, {
    fileName: "app/components/matrix.tsx",
    lineNumber: 16,
    columnNumber: 10
  }, this);
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
          (_a = matrixColRowsShift[matrixCols[i]]) == null || _a.classList.remove("bg-blue"), (_b = matrixColRowsShift[matrixCols[i]]) == null || _b.classList.add("bg-grey");
        }
        matrixCols.shift(), matrixCols.push(level);
        for (let i = 0; i < matrixCols.length; i++) {
          let matrixColRowsShift = document.querySelectorAll(
            `div#matrix-col-${i} > div.matrix-row`
          );
          (_c = matrixColRowsShift[matrixCols[i]]) == null || _c.classList.remove("bg-grey"), (_d = matrixColRowsShift[matrixCols[i]]) == null || _d.classList.add("bg-blue");
        }
      } else {
        let matrixColRows = document.querySelectorAll(
          `div#matrix-col-${colIndex} > div.matrix-row`
        );
        matrixCols.push(level), (_e = matrixColRows[matrixCols[colIndex]]) == null || _e.classList.remove("bg-grey"), (_f = matrixColRows[matrixCols[colIndex]]) == null || _f.classList.add("bg-blue");
      }
      bipolarRandomState() ? level !== 20 && (level += 1) : level !== 0 && (level -= 1), colIndex < 30 ? colIndex++ : colIndex = 0;
    }, 125);
  }, []);
  for (let i = 1; i <= 30; i++)
    cols.push(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        id: `matrix-col-${i}`,
        className: "matrix-col col-span-1 grid justify-items-center gap-1",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StackedElements, {
          count: 15,
          className: "matrix-row row-span-1 grid h-1 w-1 justify-items-center bg-grey"
        }, void 0, !1, {
          fileName: "app/components/matrix.tsx",
          lineNumber: 72,
          columnNumber: 9
        }, this)
      }, i, !1, {
        fileName: "app/components/matrix.tsx",
        lineNumber: 67,
        columnNumber: 7
      }, this)
    );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "grid-cols-30 grid-rows-15 grid h-full w-full",
    children: cols
  }, void 0, !1, {
    fileName: "app/components/matrix.tsx",
    lineNumber: 80,
    columnNumber: 5
  }, this);
};

// node_modules/remix-image/remix-image.css
var remix_image_default = "/build/_assets/remix-image-UKLG3K75.css";

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-HQXPKP2K.css";

// app/styles/global.css
var global_default = "/build/_assets/global-M5NHAAUH.css";

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
  let [mobileMenuOpen, setMobileMenuOpen] = (0, import_react8.useState)(!1), [mobileNavigationOpen, setMobileNavigationOpen] = (0, import_react8.useState)(!1), [mobileTerminalOpen, setMobileTerminalOpen] = (0, import_react8.useState)(!1);
  return (0, import_react8.useEffect)(
    () => {
      var _a;
      return (_a = document.getElementById("terminal-container")) == null ? void 0 : _a.addEventListener(
        "click",
        () => {
          var _a2;
          return (_a2 = document.getElementById("terminal-input")) == null ? void 0 : _a2.focus();
        }
      );
    },
    []
  ), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
    lang: "en",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react9.Meta, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 52,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react9.Links, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 53,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 51,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", {
        className: "h-screen",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "t-01 r-01 border-b-sky-400 absolute hidden h-8 w-8 rotate-45 border-b-2 bg-grey sm:block"
          }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 56,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "b-01 l-01 border-t-sky-400 absolute hidden h-8 w-8 rotate-45 border-t-2 bg-grey sm:block"
          }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 57,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "b-01 r-01 border-l-sky-400 absolute hidden h-8 w-8 rotate-45 border-l-2 bg-grey sm:block"
          }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 58,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "grid h-screen grid-cols-4 grid-rows-4 gap-4 p-8 sm:p-4 2xl:grid-cols-5",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "col-span-4 row-span-4 gap-4 overflow-y-scroll scrollbar-hide sm:col-span-3 sm:row-span-3 2xl:col-span-4",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react9.Outlet, {}, void 0, !1, {
                  fileName: "app/root.tsx",
                  lineNumber: 61,
                  columnNumber: 13
                }, this)
              }, void 0, !1, {
                fileName: "app/root.tsx",
                lineNumber: 60,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "border-sky-400 row-span-4 hidden border-2 sm:grid sm:grid-cols-1 sm:grid-rows-4",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "row-span-3 sm:grid",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "grid-rows-2 sm:grid",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                          className: "row-span-1 grid h-full",
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Navigation, {}, void 0, !1, {
                            fileName: "app/root.tsx",
                            lineNumber: 67,
                            columnNumber: 19
                          }, this)
                        }, void 0, !1, {
                          fileName: "app/root.tsx",
                          lineNumber: 66,
                          columnNumber: 17
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                          className: "border-t-sky-400 row-span-1 grid h-full border-t-2 p-8",
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stats, {}, void 0, !1, {
                            fileName: "app/root.tsx",
                            lineNumber: 70,
                            columnNumber: 19
                          }, this)
                        }, void 0, !1, {
                          fileName: "app/root.tsx",
                          lineNumber: 69,
                          columnNumber: 17
                        }, this)
                      ]
                    }, void 0, !0, {
                      fileName: "app/root.tsx",
                      lineNumber: 65,
                      columnNumber: 15
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/root.tsx",
                    lineNumber: 64,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "row-span-1 w-full px-8 pt-4 sm:grid",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Matrix, {}, void 0, !1, {
                      fileName: "app/root.tsx",
                      lineNumber: 75,
                      columnNumber: 15
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/root.tsx",
                    lineNumber: 74,
                    columnNumber: 13
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/root.tsx",
                lineNumber: 63,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                id: "terminal-container",
                className: "border-sky-400 col-span-3 hidden overflow-y-scroll border-2 p-4 scrollbar-hide sm:grid 2xl:col-span-4",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Terminal, {}, void 0, !1, {
                  fileName: "app/root.tsx",
                  lineNumber: 82,
                  columnNumber: 13
                }, this)
              }, void 0, !1, {
                fileName: "app/root.tsx",
                lineNumber: 78,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/root.tsx",
            lineNumber: 59,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "absolute bottom-0 block w-full p-4 sm:hidden",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "mobile-menu-corner-tl border-r-sky-400 absolute border-r-2 bg-grey"
              }, void 0, !1, {
                fileName: "app/root.tsx",
                lineNumber: 86,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "mobile-menu-corner-tr border-r-sky-400 absolute border-r-2 bg-grey"
              }, void 0, !1, {
                fileName: "app/root.tsx",
                lineNumber: 87,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "mobile-menu-corner-br border-r-sky-400 absolute border-r-2 bg-grey"
              }, void 0, !1, {
                fileName: "app/root.tsx",
                lineNumber: 88,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "mobile-menu-corner-bl border-r-sky-400 absolute border-r-2 bg-grey"
              }, void 0, !1, {
                fileName: "app/root.tsx",
                lineNumber: 89,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "p-4",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: `border-sky-400 grid content-end border-2 bg-grey ${mobileMenuOpen && "h-more"}`,
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "grid",
                      children: [
                        mobileNavigationOpen && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Navigation, {}, void 0, !1, {
                          fileName: "app/root.tsx",
                          lineNumber: 98,
                          columnNumber: 42
                        }, this),
                        mobileTerminalOpen && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Terminal, {}, void 0, !1, {
                          fileName: "app/root.tsx",
                          lineNumber: 99,
                          columnNumber: 40
                        }, this)
                      ]
                    }, void 0, !0, {
                      fileName: "app/root.tsx",
                      lineNumber: 97,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "grid",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "flex-row justify-between",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                            className: "h-20 w-3/12 flex-col items-center justify-center bg-blue pr-1",
                            onClick: () => {
                              setMobileMenuOpen(!0), mobileNavigationOpen && setMobileNavigationOpen(!1), setMobileTerminalOpen(!0);
                            },
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                              src: "/svg/nav-terminal.svg",
                              className: "scale-75"
                            }, void 0, !1, {
                              fileName: "app/root.tsx",
                              lineNumber: 111,
                              columnNumber: 21
                            }, this)
                          }, void 0, !1, {
                            fileName: "app/root.tsx",
                            lineNumber: 103,
                            columnNumber: 19
                          }, this),
                          mobileMenuOpen && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                            className: "h-20 w-6/12 flex-col items-center justify-center bg-blue",
                            onClick: () => {
                              setMobileMenuOpen(!1), mobileNavigationOpen && setMobileNavigationOpen(!1), mobileTerminalOpen && setMobileTerminalOpen(!1);
                            },
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                              src: "/svg/nav-cross.svg",
                              className: "scale-75"
                            }, void 0, !1, {
                              fileName: "app/root.tsx",
                              lineNumber: 122,
                              columnNumber: 23
                            }, this)
                          }, void 0, !1, {
                            fileName: "app/root.tsx",
                            lineNumber: 114,
                            columnNumber: 21
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                            className: "h-20 w-3/12 flex-col items-center justify-center bg-blue pl-1",
                            onClick: () => {
                              setMobileMenuOpen(!0), mobileTerminalOpen && setMobileTerminalOpen(!1), setMobileNavigationOpen(!0);
                            },
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                              src: "/svg/nav-menu.svg",
                              className: "scale-75"
                            }, void 0, !1, {
                              fileName: "app/root.tsx",
                              lineNumber: 133,
                              columnNumber: 21
                            }, this)
                          }, void 0, !1, {
                            fileName: "app/root.tsx",
                            lineNumber: 125,
                            columnNumber: 19
                          }, this)
                        ]
                      }, void 0, !0, {
                        fileName: "app/root.tsx",
                        lineNumber: 102,
                        columnNumber: 17
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/root.tsx",
                      lineNumber: 101,
                      columnNumber: 15
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/root.tsx",
                  lineNumber: 92,
                  columnNumber: 13
                }, this)
              }, void 0, !1, {
                fileName: "app/root.tsx",
                lineNumber: 90,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/root.tsx",
            lineNumber: 85,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react9.ScrollRestoration, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 140,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react9.Scripts, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 141,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react9.LiveReload, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 142,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 55,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 50,
    columnNumber: 5
  }, this);
}

// app/routes/api/image.ts
var image_exports = {};
__export(image_exports, {
  fetchImage: () => fetchImage,
  loader: () => loader
});
var import_os = __toESM(require("os")), import_path = __toESM(require("path")), import_server2 = require("remix-image/server"), import_remix_image_sharp = require("remix-image-sharp"), fetchImage = async (asset, url, options, basePath) => url.startsWith("/") && (url.length === 1 || url[1] !== "/") ? (0, import_server2.fsResolver)(asset, url, options, basePath) : (0, import_server2.fetchResolver)(asset, url, options, basePath), vercelUrl = process.env.VERCEL_URL || "", fixedVercelUrl = vercelUrl.startsWith("https") ? vercelUrl : `https://${vercelUrl}`, config = {
  selfUrl: "http://localhost:3000",
  cache: new import_server2.DiskCache({
    path: import_path.default.join(import_os.default.tmpdir(), "img")
  }),
  resolver: fetchImage,
  transformer: import_remix_image_sharp.sharpTransformer,
  basePath: "public"
}, loader = ({ request }) => (0, import_server2.imageLoader)(config, request);

// app/routes/contact.tsx
var contact_exports = {};
__export(contact_exports, {
  action: () => action,
  default: () => Contact
});
var import_react10 = require("@remix-run/react"), import_react11 = require("react");

// app/utils/config.tsx
var import_nodemailer_react = require("nodemailer-react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), transport = {
  host: "smtp.example.com",
  secure: !0,
  auth: { user: "username", pass: "password" }
}, defaults = {
  from: "sender@server.com"
}, ContactEmailResponse = ({
  name,
  email,
  phone,
  message
}) => ({
  subject: `\u2709\uFE0F ${name}`,
  body: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
        children: [
          "From: ",
          name
        ]
      }, void 0, !0, {
        fileName: "app/utils/config.tsx",
        lineNumber: 29,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
        children: [
          "Email: ",
          email
        ]
      }, void 0, !0, {
        fileName: "app/utils/config.tsx",
        lineNumber: 30,
        columnNumber: 7
      }, this),
      phone && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
        children: [
          "Phone: ",
          phone
        ]
      }, void 0, !0, {
        fileName: "app/utils/config.tsx",
        lineNumber: 31,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
        children: message
      }, void 0, !1, {
        fileName: "app/utils/config.tsx",
        lineNumber: 32,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/utils/config.tsx",
    lineNumber: 28,
    columnNumber: 5
  }, this)
}), mailer = (0, import_nodemailer_react.Mailer)({ transport, defaults }, { ContactEmailResponse });

// app/routes/contact.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
var action = async ({ request }) => {
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
    return Object.values(formErrors).some(Boolean) ? { formErrors } : (mailer.send(
      "ContactEmailResponse",
      { name, email, ...phone && { phone }, message },
      {
        to: "my@email.com"
      }
    ).catch((err) => console.log(err)).then((res) => console.log(res)), "success");
  }
};
function Contact() {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  let actionData = (0, import_react10.useActionData)(), socials = [
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
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react10.Form, {
    method: "post",
    className: "gap-4 sm:grid sm:h-full sm:grid-cols-3 sm:grid-rows-4",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "t-01 l-01 border-r-sky-400 absolute hidden h-8 w-8 rotate-45 border-r-2 bg-grey sm:block"
      }, void 0, !1, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 103,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "border-sky-400 col-span-1 row-span-2 grid border-2",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "relative w-full flex-col justify-evenly",
          children: [
            socials.map((s, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "w-full flex-row items-center justify-start gap-6 px-8 sm:justify-center lg:justify-start",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                  src: `/svg/${s.icon}.svg`,
                  className: "h-10 scale-75"
                }, void 0, !1, {
                  fileName: "app/routes/contact.tsx",
                  lineNumber: 111,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  className: "contact-link block text-base sm:hidden sm:text-lg lg:block",
                  children: s.name
                }, void 0, !1, {
                  fileName: "app/routes/contact.tsx",
                  lineNumber: 112,
                  columnNumber: 15
                }, this)
              ]
            }, i, !0, {
              fileName: "app/routes/contact.tsx",
              lineNumber: 107,
              columnNumber: 13
            }, this)),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "absolute h-full w-full flex-col justify-evenly",
              children: socials.map((s, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                href: s.url,
                target: "__blank",
                rel: "noreferrer noopener nofollow",
                className: "contact-link-container h-full w-full flex-row px-8"
              }, i, !1, {
                fileName: "app/routes/contact.tsx",
                lineNumber: 119,
                columnNumber: 15
              }, this))
            }, void 0, !1, {
              fileName: "app/routes/contact.tsx",
              lineNumber: 117,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/contact.tsx",
          lineNumber: 105,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 104,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "col-span-2 row-span-2 grid h-full grid-rows-3 gap-4",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: `relative h-20 w-full border-2 sm:h-full ${(_a = actionData == null ? void 0 : actionData.formErrors) != null && _a.name ? "border-error" : "border-sky-400"}`,
            children: [
              ((_b = actionData == null ? void 0 : actionData.formErrors) == null ? void 0 : _b.name) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "text-error absolute left-4 -top-2 h-10 bg-grey px-2 text-sm",
                children: actionData.formErrors.name
              }, void 0, !1, {
                fileName: "app/routes/contact.tsx",
                lineNumber: 137,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                type: "text",
                name: "name",
                id: "",
                placeholder: "Name",
                spellCheck: "false",
                autoCorrect: "off",
                className: "h-full w-full bg-grey px-16 text-center text-xl outline-none"
              }, void 0, !1, {
                fileName: "app/routes/contact.tsx",
                lineNumber: 141,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/contact.tsx",
            lineNumber: 131,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: `relative h-20 w-full border-2 sm:h-full ${(_c = actionData == null ? void 0 : actionData.formErrors) != null && _c.email ? "border-error" : "border-sky-400"}`,
            children: [
              ((_d = actionData == null ? void 0 : actionData.formErrors) == null ? void 0 : _d.email) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "text-error absolute left-4 -top-3 h-10 bg-grey px-2 text-sm",
                children: actionData.formErrors.email
              }, void 0, !1, {
                fileName: "app/routes/contact.tsx",
                lineNumber: 157,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                type: "text",
                name: "email",
                id: "",
                placeholder: "Email",
                spellCheck: "false",
                autoCorrect: "off",
                className: "h-full w-full bg-grey px-16 text-center text-xl outline-none"
              }, void 0, !1, {
                fileName: "app/routes/contact.tsx",
                lineNumber: 161,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/contact.tsx",
            lineNumber: 151,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: `relative h-20 w-full border-2 sm:h-full ${(_e = actionData == null ? void 0 : actionData.formErrors) != null && _e.phone ? "border-error" : "border-sky-400"}`,
            children: [
              ((_f = actionData == null ? void 0 : actionData.formErrors) == null ? void 0 : _f.phone) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "text-error absolute left-4 -top-3 h-10 bg-grey px-2 text-sm",
                children: actionData.formErrors.phone
              }, void 0, !1, {
                fileName: "app/routes/contact.tsx",
                lineNumber: 177,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                type: "text",
                name: "phone",
                id: "",
                placeholder: "Phone",
                spellCheck: "false",
                autoCorrect: "off",
                className: "h-full w-full bg-grey px-16 text-center text-xl outline-none"
              }, void 0, !1, {
                fileName: "app/routes/contact.tsx",
                lineNumber: 181,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/contact.tsx",
            lineNumber: 171,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 130,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: `border-red relative col-span-3 row-span-2 grid grid-rows-3 border-2 ${(_g = actionData == null ? void 0 : actionData.formErrors) != null && _g.message ? "border-error" : "border-sky-400"}`,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
            name: "message",
            id: "",
            spellCheck: "false",
            autoCorrect: "off",
            placeholder: "Let me make your dream come true...",
            cols: 30,
            rows: 10,
            className: "row-span-2 mb-6 grid resize-none bg-grey p-10 text-xl outline-none"
          }, void 0, !1, {
            fileName: "app/routes/contact.tsx",
            lineNumber: 197,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "absolute bottom-0 right-0 row-span-1 grid h-28 w-full grid-cols-3 grid-rows-1",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
              type: "submit",
              className: "contact-button border-sky-400 relative col-span-2 col-start-2 row-span-1 grid content-center justify-items-center border-2 border-r-0 border-b-0",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "border-r-sky-400 absolute -top-4 -left-4 hidden h-8 w-8 rotate-45 border-r-2 bg-grey sm:block"
                }, void 0, !1, {
                  fileName: "app/routes/contact.tsx",
                  lineNumber: 212,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  className: "text-2xl",
                  children: "Send"
                }, void 0, !1, {
                  fileName: "app/routes/contact.tsx",
                  lineNumber: 213,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/contact.tsx",
              lineNumber: 208,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/contact.tsx",
            lineNumber: 207,
            columnNumber: 9
          }, this),
          ((_h = actionData == null ? void 0 : actionData.formErrors) == null ? void 0 : _h.phone) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "text-error absolute left-4 -top-3 h-10 bg-grey px-2 text-sm",
            children: actionData.formErrors.message
          }, void 0, !1, {
            fileName: "app/routes/contact.tsx",
            lineNumber: 217,
            columnNumber: 11
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 192,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/contact.tsx",
    lineNumber: 99,
    columnNumber: 5
  }, this);
}

// app/routes/skills.tsx
var skills_exports = {};
__export(skills_exports, {
  default: () => Skills
});
var import_react12 = require("react");

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
var import_remix_image2 = require("remix-image");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Skills() {
  let [isLoading, setIsLoading] = (0, import_react12.useState)(!1);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "grid grid-cols-2 gap-20 sm:grid-cols-3 xl:grid-cols-4 2xl:gap-40",
    children: isLoading ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Loader, {}, void 0, !1, {
      fileName: "app/routes/skills.tsx",
      lineNumber: 21,
      columnNumber: 9
    }, this) : skills.map((skill, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
      href: skill.skillUrl,
      target: "_blank",
      rel: "noreferrer noopener nofollow",
      className: "skills-card col-span-1 row-span-1 grid",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_remix_image2.Image, {
        loaderUrl: "/api/image",
        src: skill.imgUrl,
        dprVariants: [1, 3],
        className: "h-full w-full"
      }, void 0, !1, {
        fileName: "app/routes/skills.tsx",
        lineNumber: 31,
        columnNumber: 13
      }, this)
    }, i, !1, {
      fileName: "app/routes/skills.tsx",
      lineNumber: 24,
      columnNumber: 11
    }, this))
  }, void 0, !1, {
    fileName: "app/routes/skills.tsx",
    lineNumber: 19,
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
    className: "h-full p-4",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "grid h-full place-items-center",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Loader, {}, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 7,
        columnNumber: 9
      }, this)
    }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/index.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/work.tsx
var work_exports = {};
__export(work_exports, {
  default: () => Work
});
var import_remix_image3 = require("remix-image"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Work() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "grid grid-cols-3 gap-4",
    children: projects.map((project, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "work-card border-sky-400 relative col-span-1 row-span-1 grid h-48 border-2 2xl:h-56",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
          href: project.url,
          target: "_blank",
          rel: "noreferrer noopener nofollow",
          className: "overflow-hidden",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "relative",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_remix_image3.Image, {
                  loaderUrl: "/api/image",
                  src: project.imgUrl,
                  dprVariants: [1, 3],
                  className: "w-full"
                }, void 0, !1, {
                  fileName: "app/routes/work.tsx",
                  lineNumber: 19,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "work-card-cover absolute top-0 hidden h-48 w-full 2xl:h-56",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                    className: "absolute bottom-8 left-8 text-lg font-semibold",
                    children: project.name
                  }, void 0, !1, {
                    fileName: "app/routes/work.tsx",
                    lineNumber: 26,
                    columnNumber: 17
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/work.tsx",
                  lineNumber: 25,
                  columnNumber: 15
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/work.tsx",
              lineNumber: 18,
              columnNumber: 13
            }, this),
            i === 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "border-r-sky-400 absolute -top-4 -left-4 h-8 w-8 rotate-45 border-r-2 bg-grey"
            }, void 0, !1, {
              fileName: "app/routes/work.tsx",
              lineNumber: 32,
              columnNumber: 15
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/work.tsx",
          lineNumber: 12,
          columnNumber: 11
        }, this),
        project.isRocket && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
          className: "absolute bottom-0 right-0 flex h-16 w-16 items-center justify-center bg-[#1e1a49]",
          href: "https://www.prorocketeers.com/",
          target: "_blank",
          rel: "noreferrer noopener nofollow",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_remix_image3.Image, {
            loaderUrl: "/api/image",
            src: "img/rocket-logo.png",
            dprVariants: [1, 3],
            className: "h-10 w-10"
          }, void 0, !1, {
            fileName: "app/routes/work.tsx",
            lineNumber: 42,
            columnNumber: 15
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/work.tsx",
          lineNumber: 36,
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
var assets_manifest_default = { version: "d36fe766", entry: { module: "/build/entry.client-6QOPJ36K.js", imports: ["/build/_shared/chunk-5GBMPF77.js", "/build/_shared/chunk-3CPB4T5C.js", "/build/_shared/chunk-42Z7WWMI.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-3DBAXVAU.js", imports: ["/build/_shared/chunk-C62QY4KY.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api/image": { id: "routes/api/image", parentId: "root", path: "api/image", index: void 0, caseSensitive: void 0, module: "/build/routes/api/image-SPOYC2TE.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/contact": { id: "routes/contact", parentId: "root", path: "contact", index: void 0, caseSensitive: void 0, module: "/build/routes/contact-5OYX6CMV.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-2AHVPD3B.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/skills": { id: "routes/skills", parentId: "root", path: "skills", index: void 0, caseSensitive: void 0, module: "/build/routes/skills-2DBLPPSH.js", imports: ["/build/_shared/chunk-U72AHZ3B.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/work": { id: "routes/work", parentId: "root", path: "work", index: void 0, caseSensitive: void 0, module: "/build/routes/work-AG75GMGK.js", imports: ["/build/_shared/chunk-U72AHZ3B.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-D36FE766.js" };

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
