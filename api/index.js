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
var import_react5 = require("react"), import_react6 = require("@remix-run/react");

// app/components/navigation.tsx
var import_react2 = require("@remix-run/react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Navigation() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
    className: "flex-col items-end justify-around w-full",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Link, {
        className: "flex-row h-full w-full px-8 items-center",
        to: "/",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
          className: "text-2xl",
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Link, {
        className: "flex-row h-full w-full px-8 items-center",
        to: "/work",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
          className: "text-2xl",
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Link, {
        className: "flex-row h-full w-full px-8 items-center",
        to: "/skills",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
          className: "text-2xl",
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Link, {
        className: "flex-row h-full w-full px-8 items-center",
        to: "/contact",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
          className: "text-2xl",
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
var import_react3 = require("react"), import_react_router_dom = require("react-router-dom"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function InputLine({
  focusOnInput,
  output,
  setOutput,
  commandHistory,
  setCommandHistory
}) {
  let navigate = (0, import_react_router_dom.useNavigate)(), [historyLookback, setHistoryLookback] = (0, import_react3.useState)(0), [disableInput, setDisableInput] = (0, import_react3.useState)(!1), [command, setCommand] = (0, import_react3.useState)(""), handleOutput = (newOutput) => {
    output === newOutput ? (setOutput(commandHistory[historyLookback]), setOutput(newOutput + " ")) : setOutput(newOutput);
  }, handleKeyEvent = (e) => {
    if (e.key === "ArrowUp" && commandHistory.length !== historyLookback && (setCommand(commandHistory[historyLookback]), setHistoryLookback((value) => value + 1)), e.key === "ArrowDown" && (historyLookback !== 0 ? (setCommand(commandHistory[historyLookback - 1]), setHistoryLookback((value) => value - 1)) : setCommand("")), e.key === "Enter" && (console.log("kek"), command !== "")) {
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex-row gap-2",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex-col",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
          className: "text-xs sm:text-sm",
          children: "[ vantuch@dev ~ ] $"
        }, void 0, !1, {
          fileName: "app/components/terminal/inputLine.tsx",
          lineNumber: 100,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/terminal/inputLine.tsx",
        lineNumber: 99,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex-auto flex-col",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
          type: "text",
          disabled: disableInput,
          autoFocus: focusOnInput,
          spellCheck: "false",
          className: "w-full bg-gray-900 text-xs sm:text-sm word-spacing-lg outline-none",
          onChange: (value) => setCommand(value.target.value),
          value: command,
          onKeyDown: (e) => handleKeyEvent(e)
        }, void 0, !1, {
          fileName: "app/components/terminal/inputLine.tsx",
          lineNumber: 103,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/terminal/inputLine.tsx",
        lineNumber: 102,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/terminal/inputLine.tsx",
    lineNumber: 98,
    columnNumber: 5
  }, this);
}

// app/components/terminal/outputLine.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function OutputLine({ output }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "container my-2",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
      className: "text-xs sm:text-sm",
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
function Terminal({ focusOnInput }) {
  let defaultOutput = "Start by typing commands. To see available commands type 'help'.", [output, setOutput] = (0, import_react4.useState)(defaultOutput), [lines, setLines] = (0, import_react4.useState)([]), [commandHistory, setCommandHistory] = (0, import_react4.useState)([]), [lineKey, setLineKey] = (0, import_react4.useState)(0);
  return (0, import_react4.useEffect)(() => {
    setLines((data) => {
      let dataLines = data && [...data];
      return dataLines.length < 1 && (dataLines.push(/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OutputLine, {
        output
      }, lineKey, !1, {
        fileName: "app/components/terminal/terminal.tsx",
        lineNumber: 16,
        columnNumber: 24
      }, this)), dataLines.push(
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InputLine, {
          focusOnInput,
          output,
          setOutput,
          commandHistory,
          setCommandHistory
        }, lineKey + 1, !1, {
          fileName: "app/components/terminal/terminal.tsx",
          lineNumber: 18,
          columnNumber: 11
        }, this)
      ), setLineKey((lineKey2) => lineKey2 + 1)), dataLines || [];
    }), console.log(lines);
  }, []), (0, import_react4.useEffect)(() => {
    output !== defaultOutput && setLines((data) => {
      console.log(output);
      let dataLines = data && [...data], isNotOutputLine = output === "no_output_line" || output === "no_output_line ";
      return !isNotOutputLine && dataLines.push(/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OutputLine, {
        output
      }, lineKey, !1, {
        fileName: "app/components/terminal/terminal.tsx",
        lineNumber: 40,
        columnNumber: 44
      }, this)), dataLines.push(
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InputLine, {
          focusOnInput,
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
    }), console.log(lines);
  }, [output]), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "p-4",
    children: lines && lines.map((line) => line)
  }, void 0, !1, {
    fileName: "app/components/terminal/terminal.tsx",
    lineNumber: 58,
    columnNumber: 10
  }, this);
}

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
        lineNumber: 7,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        d: "M181 0H170V2H179V23H170V25H181V0Z",
        fill: "#38BDF8"
      }, void 0, !1, {
        fileName: "app/components/svg.tsx",
        lineNumber: 8,
        columnNumber: 7
      }, this),
      rect.map((r) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
        className: `${id} hidden`,
        x: r,
        y: "5",
        width: "3",
        height: "15",
        fill: "#38BDF8"
      }, void 0, !1, {
        fileName: "app/components/svg.tsx",
        lineNumber: 9,
        columnNumber: 22
      }, this))
    ]
  }, void 0, !0, {
    fileName: "app/components/svg.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}, Matrix = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
  width: "267",
  height: "141",
  viewBox: "0 0 267 141",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      y: "63",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 16,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      y: "27",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 17,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      y: "99",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 18,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      y: "135",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 19,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      y: "45",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 20,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      y: "9",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 21,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      y: "81",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 22,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      y: "117",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 23,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "18",
      y: "45",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 24,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "18",
      y: "9",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 25,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "18",
      y: "81",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 26,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "18",
      y: "117",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 27,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "36",
      y: "45",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 28,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "36",
      y: "9",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 29,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "36",
      y: "81",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 30,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "36",
      y: "117",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 31,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "54",
      y: "45",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 32,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "54",
      y: "9",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 33,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "54",
      y: "81",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 34,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "54",
      y: "117",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 35,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "72",
      y: "45",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 36,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "72",
      y: "9",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 37,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "72",
      y: "81",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 38,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "72",
      y: "117",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 39,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "90",
      y: "45",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 40,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "90",
      y: "9",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 41,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "90",
      y: "81",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 42,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "90",
      y: "117",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 43,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "108",
      y: "45",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 44,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "108",
      y: "9",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 45,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "108",
      y: "81",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 46,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "108",
      y: "117",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 47,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "126",
      y: "45",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 48,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "126",
      y: "9",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 49,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "126",
      y: "81",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 50,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "126",
      y: "117",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 51,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "144",
      y: "45",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 52,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "144",
      y: "9",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 53,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "144",
      y: "81",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 54,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "144",
      y: "117",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 55,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "162",
      y: "45",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 56,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "162",
      y: "9",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 57,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "162",
      y: "81",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 58,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "162",
      y: "117",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 59,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "180",
      y: "45",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 60,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "180",
      y: "9",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 61,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "180",
      y: "81",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 62,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "180",
      y: "117",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 63,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "198",
      y: "45",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 64,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "198",
      y: "9",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 65,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "198",
      y: "81",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 66,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "198",
      y: "117",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 67,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "216",
      y: "45",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 68,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "216",
      y: "9",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 69,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "216",
      y: "81",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 70,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "216",
      y: "117",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 71,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "234",
      y: "45",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 72,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "234",
      y: "9",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 73,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "234",
      y: "81",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 74,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "234",
      y: "117",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 75,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "252",
      y: "45",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 76,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "252",
      y: "9",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 77,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "252",
      y: "81",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 78,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "252",
      y: "117",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 79,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "18",
      y: "63",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 80,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "18",
      y: "27",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 81,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "18",
      y: "99",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 82,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "18",
      y: "135",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 83,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "36",
      y: "63",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 84,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "36",
      y: "27",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 85,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "36",
      y: "99",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 86,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "36",
      y: "135",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 87,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "54",
      y: "63",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 88,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "54",
      y: "27",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 89,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "54",
      y: "99",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 90,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "54",
      y: "135",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 91,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "72",
      y: "63",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 92,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "72",
      y: "27",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 93,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "72",
      y: "99",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 94,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "72",
      y: "135",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 95,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "90",
      y: "63",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 96,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "90",
      y: "27",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 97,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "90",
      y: "99",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 98,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "90",
      y: "135",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 99,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "108",
      y: "63",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 100,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "108",
      y: "27",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 101,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "108",
      y: "99",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 102,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "108",
      y: "135",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 103,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "126",
      y: "63",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 104,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "126",
      y: "27",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 105,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "126",
      y: "99",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 106,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "126",
      y: "135",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 107,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "144",
      y: "63",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 108,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "144",
      y: "27",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 109,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "144",
      y: "99",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 110,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "144",
      y: "135",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 111,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "162",
      y: "63",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 112,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "162",
      y: "27",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 113,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "162",
      y: "99",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 114,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "162",
      y: "135",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 115,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "180",
      y: "63",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 116,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "180",
      y: "27",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 117,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "180",
      y: "99",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 118,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "180",
      y: "135",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 119,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "198",
      y: "63",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 120,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "198",
      y: "27",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 121,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "198",
      y: "99",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 122,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "198",
      y: "135",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 123,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "216",
      y: "63",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 124,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "216",
      y: "27",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 125,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "216",
      y: "99",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 126,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "216",
      y: "135",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 127,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "234",
      y: "63",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 128,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "234",
      y: "27",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 129,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "234",
      y: "99",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 130,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "234",
      y: "135",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 131,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "252",
      y: "63",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 132,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "252",
      y: "27",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 133,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "252",
      y: "99",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 134,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "252",
      y: "135",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 135,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "9",
      y: "63",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 136,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "9",
      y: "27",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 137,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "9",
      y: "99",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 138,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "9",
      y: "135",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 139,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "9",
      y: "45",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 140,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "9",
      y: "9",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 141,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "9",
      y: "81",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 142,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "9",
      y: "117",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 143,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "27",
      y: "45",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 144,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "27",
      y: "9",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 145,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "27",
      y: "81",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 146,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "27",
      y: "117",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 147,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "45",
      y: "45",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 148,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "45",
      y: "9",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 149,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "45",
      y: "81",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 150,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "45",
      y: "117",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 151,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "63",
      y: "45",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 152,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "63",
      y: "9",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 153,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "63",
      y: "81",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 154,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "63",
      y: "117",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 155,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "81",
      y: "45",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 156,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "81",
      y: "9",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 157,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "81",
      y: "81",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 158,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "81",
      y: "117",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 159,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "99",
      y: "45",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 160,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "99",
      y: "9",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 161,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "99",
      y: "81",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 162,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "99",
      y: "117",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 163,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "117",
      y: "45",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 164,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "117",
      y: "9",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 165,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "117",
      y: "81",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 166,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "117",
      y: "117",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 167,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "135",
      y: "45",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 168,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "135",
      y: "9",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 169,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "135",
      y: "81",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 170,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "135",
      y: "117",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 171,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "153",
      y: "45",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 172,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "153",
      y: "9",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 173,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "153",
      y: "81",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 174,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "153",
      y: "117",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 175,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "171",
      y: "45",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 176,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "171",
      y: "9",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 177,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "171",
      y: "81",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 178,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "171",
      y: "117",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 179,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "189",
      y: "45",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 180,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "189",
      y: "9",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 181,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "189",
      y: "81",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 182,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "189",
      y: "117",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 183,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "207",
      y: "45",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 184,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "207",
      y: "9",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 185,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "207",
      y: "81",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 186,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "207",
      y: "117",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 187,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "225",
      y: "45",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 188,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "225",
      y: "9",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 189,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "225",
      y: "81",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 190,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "225",
      y: "117",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 191,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "243",
      y: "45",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 192,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "243",
      y: "9",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 193,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "243",
      y: "81",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 194,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "243",
      y: "117",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 195,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "261",
      y: "45",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 196,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "261",
      y: "9",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 197,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "261",
      y: "81",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 198,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "261",
      y: "117",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 199,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "27",
      y: "63",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 200,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "27",
      y: "27",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 201,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "27",
      y: "99",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 202,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "27",
      y: "135",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 203,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "45",
      y: "63",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 204,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "45",
      y: "27",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 205,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "45",
      y: "99",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 206,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "45",
      y: "135",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 207,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "63",
      y: "63",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 208,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "63",
      y: "27",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 209,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "63",
      y: "99",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 210,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "63",
      y: "135",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 211,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "81",
      y: "63",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 212,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "81",
      y: "27",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 213,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "81",
      y: "99",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 214,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "81",
      y: "135",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 215,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "99",
      y: "63",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 216,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "99",
      y: "27",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 217,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "99",
      y: "99",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 218,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "99",
      y: "135",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 219,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "117",
      y: "63",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 220,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "117",
      y: "27",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 221,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "117",
      y: "99",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 222,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "117",
      y: "135",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 223,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "135",
      y: "63",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 224,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "135",
      y: "27",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 225,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "135",
      y: "99",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 226,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "135",
      y: "135",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 227,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "153",
      y: "63",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 228,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "153",
      y: "27",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 229,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "153",
      y: "99",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 230,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "153",
      y: "135",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 231,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "171",
      y: "63",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 232,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "171",
      y: "27",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 233,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "171",
      y: "99",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 234,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "171",
      y: "135",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 235,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "189",
      y: "63",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 236,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "189",
      y: "27",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 237,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "189",
      y: "99",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 238,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "189",
      y: "135",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 239,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "207",
      y: "63",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 240,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "207",
      y: "27",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 241,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "207",
      y: "99",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 242,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "207",
      y: "135",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 243,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "225",
      y: "63",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 244,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "225",
      y: "27",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 245,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "225",
      y: "99",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 246,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "225",
      y: "135",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 247,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "243",
      y: "63",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 248,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "243",
      y: "27",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 249,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "243",
      y: "99",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 250,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "243",
      y: "135",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 251,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "261",
      y: "63",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 252,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "261",
      y: "27",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 253,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "261",
      y: "99",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 254,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "261",
      y: "135",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 255,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      y: "54",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 256,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      y: "18",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 257,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      y: "90",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 258,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      y: "126",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 259,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      y: "36",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 260,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 261,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      y: "72",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 262,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      y: "108",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 263,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "18",
      y: "36",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 264,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "18",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 265,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "18",
      y: "72",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 266,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "18",
      y: "108",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 267,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "36",
      y: "36",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 268,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "36",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 269,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "36",
      y: "72",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 270,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "36",
      y: "108",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 271,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "54",
      y: "36",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 272,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "54",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 273,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "54",
      y: "72",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 274,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "54",
      y: "108",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 275,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "72",
      y: "36",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 276,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "72",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 277,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "72",
      y: "72",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 278,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "72",
      y: "108",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 279,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "90",
      y: "36",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 280,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "90",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 281,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "90",
      y: "72",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 282,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "90",
      y: "108",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 283,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "108",
      y: "36",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 284,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "108",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 285,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "108",
      y: "72",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 286,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "108",
      y: "108",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 287,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "126",
      y: "36",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 288,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "126",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 289,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "126",
      y: "72",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 290,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "126",
      y: "108",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 291,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "144",
      y: "36",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 292,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "144",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 293,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "144",
      y: "72",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 294,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "144",
      y: "108",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 295,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "162",
      y: "36",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 296,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "162",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 297,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "162",
      y: "72",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 298,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "162",
      y: "108",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 299,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "180",
      y: "36",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 300,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "180",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 301,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "180",
      y: "72",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 302,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "180",
      y: "108",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 303,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "198",
      y: "36",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 304,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "198",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 305,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "198",
      y: "72",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 306,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "198",
      y: "108",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 307,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "216",
      y: "36",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 308,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "216",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 309,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "216",
      y: "72",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 310,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "216",
      y: "108",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 311,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "234",
      y: "36",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 312,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "234",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 313,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "234",
      y: "72",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 314,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "234",
      y: "108",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 315,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "252",
      y: "36",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 316,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "252",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 317,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "252",
      y: "72",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 318,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "252",
      y: "108",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 319,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "18",
      y: "54",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 320,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "18",
      y: "18",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 321,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "18",
      y: "90",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 322,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "18",
      y: "126",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 323,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "36",
      y: "54",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 324,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "36",
      y: "18",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 325,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "36",
      y: "90",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 326,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "36",
      y: "126",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 327,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "54",
      y: "54",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 328,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "54",
      y: "18",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 329,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "54",
      y: "90",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 330,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "54",
      y: "126",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 331,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "72",
      y: "54",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 332,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "72",
      y: "18",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 333,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "72",
      y: "90",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 334,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "72",
      y: "126",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 335,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "90",
      y: "54",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 336,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "90",
      y: "18",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 337,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "90",
      y: "90",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 338,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "90",
      y: "126",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 339,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "108",
      y: "54",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 340,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "108",
      y: "18",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 341,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "108",
      y: "90",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 342,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "108",
      y: "126",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 343,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "126",
      y: "54",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 344,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "126",
      y: "18",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 345,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "126",
      y: "90",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 346,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "126",
      y: "126",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 347,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "144",
      y: "54",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 348,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "144",
      y: "18",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 349,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "144",
      y: "90",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 350,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "144",
      y: "126",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 351,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "162",
      y: "54",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 352,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "162",
      y: "18",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 353,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "162",
      y: "90",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 354,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "162",
      y: "126",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 355,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "180",
      y: "54",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 356,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "180",
      y: "18",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 357,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "180",
      y: "90",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 358,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "180",
      y: "126",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 359,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "198",
      y: "54",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 360,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "198",
      y: "18",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 361,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "198",
      y: "90",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 362,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "198",
      y: "126",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 363,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "216",
      y: "54",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 364,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "216",
      y: "18",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 365,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "216",
      y: "90",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 366,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "216",
      y: "126",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 367,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "234",
      y: "54",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 368,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "234",
      y: "18",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 369,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "234",
      y: "90",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 370,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "234",
      y: "126",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 371,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "252",
      y: "54",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 372,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "252",
      y: "18",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 373,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "252",
      y: "90",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 374,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "252",
      y: "126",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 375,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "9",
      y: "54",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 376,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "9",
      y: "18",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 377,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "9",
      y: "90",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 378,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "9",
      y: "126",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 379,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "9",
      y: "36",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 380,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "9",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 381,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "9",
      y: "72",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 382,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "9",
      y: "108",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 383,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "27",
      y: "36",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 384,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "27",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 385,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "27",
      y: "72",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 386,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "27",
      y: "108",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 387,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "45",
      y: "36",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 388,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "45",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 389,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "45",
      y: "72",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 390,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "45",
      y: "108",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 391,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "63",
      y: "36",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 392,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "63",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 393,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "63",
      y: "72",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 394,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "63",
      y: "108",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 395,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "81",
      y: "36",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 396,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "81",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 397,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "81",
      y: "72",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 398,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "81",
      y: "108",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 399,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "99",
      y: "36",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 400,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "99",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 401,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "99",
      y: "72",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 402,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "99",
      y: "108",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 403,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "117",
      y: "36",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 404,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "117",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 405,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "117",
      y: "72",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 406,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "117",
      y: "108",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 407,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "135",
      y: "36",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 408,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "135",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 409,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "135",
      y: "72",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 410,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "135",
      y: "108",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 411,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "153",
      y: "36",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 412,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "153",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 413,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "153",
      y: "72",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 414,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "153",
      y: "108",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 415,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "171",
      y: "36",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 416,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "171",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 417,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "171",
      y: "72",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 418,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "171",
      y: "108",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 419,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "189",
      y: "36",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 420,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "189",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 421,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "189",
      y: "72",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 422,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "189",
      y: "108",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 423,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "207",
      y: "36",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 424,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "207",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 425,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "207",
      y: "72",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 426,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "207",
      y: "108",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 427,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "225",
      y: "36",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 428,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "225",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 429,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "225",
      y: "72",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 430,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "225",
      y: "108",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 431,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "243",
      y: "36",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 432,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "243",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 433,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "243",
      y: "72",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 434,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "243",
      y: "108",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 435,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "261",
      y: "36",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 436,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "261",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 437,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "261",
      y: "72",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 438,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "261",
      y: "108",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 439,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "27",
      y: "54",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 440,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "27",
      y: "18",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 441,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "27",
      y: "90",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 442,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "27",
      y: "126",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 443,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "45",
      y: "54",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 444,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "45",
      y: "18",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 445,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "45",
      y: "90",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 446,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "45",
      y: "126",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 447,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "63",
      y: "54",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 448,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "63",
      y: "18",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 449,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "63",
      y: "90",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 450,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "63",
      y: "126",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 451,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "81",
      y: "54",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 452,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "81",
      y: "18",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 453,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "81",
      y: "90",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 454,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "81",
      y: "126",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 455,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "99",
      y: "54",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 456,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "99",
      y: "18",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 457,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "99",
      y: "90",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 458,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "99",
      y: "126",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 459,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "117",
      y: "54",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 460,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "117",
      y: "18",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 461,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "117",
      y: "90",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 462,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "117",
      y: "126",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 463,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "135",
      y: "54",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 464,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "135",
      y: "18",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 465,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "135",
      y: "90",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 466,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "135",
      y: "126",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 467,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "153",
      y: "54",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 468,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "153",
      y: "18",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 469,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "153",
      y: "90",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 470,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "153",
      y: "126",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 471,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "171",
      y: "54",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 472,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "171",
      y: "18",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 473,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "171",
      y: "90",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 474,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "171",
      y: "126",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 475,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "189",
      y: "54",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 476,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "189",
      y: "18",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 477,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "189",
      y: "90",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 478,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "189",
      y: "126",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 479,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "207",
      y: "54",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 480,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "207",
      y: "18",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 481,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "207",
      y: "90",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 482,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "207",
      y: "126",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 483,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "225",
      y: "54",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 484,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "225",
      y: "18",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 485,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "225",
      y: "90",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 486,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "225",
      y: "126",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 487,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "243",
      y: "54",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 488,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "243",
      y: "18",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 489,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "243",
      y: "90",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 490,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "243",
      y: "126",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 491,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "261",
      y: "54",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 492,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "261",
      y: "18",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 493,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "261",
      y: "90",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 494,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
      x: "261",
      y: "126",
      width: "6",
      height: "6",
      fill: "#38BDF8"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 495,
      columnNumber: 5
    }, this)
  ]
}, void 0, !0, {
  fileName: "app/components/svg.tsx",
  lineNumber: 15,
  columnNumber: 3
}, this);

// node_modules/remix-image/remix-image.css
var remix_image_default = "/build/_assets/remix-image-UKLG3K75.css";

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-CTBG5QHD.css";

// app/styles/global.css
var global_default = "/build/_assets/global-VO3XJBG2.css";

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
  return (0, import_react5.useEffect)(() => {
    let cpuStatusBar = document.getElementsByClassName("cpu"), memStatusBar = document.getElementsByClassName("mem"), netStatusBar = document.getElementsByClassName("net"), diskStatusBar = document.getElementsByClassName("disk"), cpuStatusBarIndex = 0, memStatusBarIndex = 0, netStatusBarIndex = 0, cpuStatusBarOffset = 7, diskStatusBarIndex = 0, memStatusBarOffset = 15, netStatusBarOffset = 10, diskStatusBarOffset = 20, cpuIntervalStart = setInterval(() => {
      cpuStatusBar[cpuStatusBarIndex].classList.remove("hidden"), cpuStatusBar[cpuStatusBarIndex].classList.add("block"), cpuStatusBarIndex++, cpuStatusBarIndex === cpuStatusBar.length - cpuStatusBarOffset && (clearInterval(cpuIntervalStart), cpuStatusBarIndex = cpuStatusBar.length - cpuStatusBarOffset - 1, cpuStatusBarOffset = 1);
    }, 25), memIntervalStart = setInterval(() => {
      memStatusBar[memStatusBarIndex].classList.remove("hidden"), memStatusBar[memStatusBarIndex].classList.add("block"), memStatusBarIndex++, memStatusBarIndex === memStatusBar.length - memStatusBarOffset && (clearInterval(memIntervalStart), memStatusBarIndex = memStatusBar.length - memStatusBarOffset - 1, memStatusBarOffset = 1);
    }, 50), netIntervalStart = setInterval(() => {
      netStatusBar[netStatusBarIndex].classList.remove("hidden"), netStatusBar[netStatusBarIndex].classList.add("block"), netStatusBarIndex++, netStatusBarIndex === netStatusBar.length - netStatusBarOffset && (clearInterval(netIntervalStart), netStatusBarIndex = netStatusBar.length - netStatusBarOffset - 1, netStatusBarOffset = 1);
    }, 25), diskIntervalStart = setInterval(() => {
      diskStatusBar[diskStatusBarIndex].classList.remove("hidden"), diskStatusBar[diskStatusBarIndex].classList.add("block"), diskStatusBarIndex++, diskStatusBarIndex === diskStatusBar.length - diskStatusBarOffset && (clearInterval(diskIntervalStart), diskStatusBarIndex = diskStatusBar.length - diskStatusBarOffset - 1, diskStatusBarOffset = 1);
    }, 75);
    setInterval(() => {
      var _a, _b, _c, _d;
      let y = Math.random();
      if (cpuStatusBarOffset === 1 && (y = 1, cpuStatusBarOffset = 0), y < 0.5 ? y = 0 : y = 1, y === 0) {
        cpuStatusBarIndex !== 0 && cpuStatusBarIndex--;
        for (let i = cpuStatusBarIndex; i < cpuStatusBar.length; i++)
          (_a = cpuStatusBar[i]) == null || _a.classList.remove("block"), (_b = cpuStatusBar[i]) == null || _b.classList.add("hidden");
      } else if (y === 1) {
        cpuStatusBarIndex !== cpuStatusBar.length && cpuStatusBarIndex++;
        for (let i = cpuStatusBarIndex; i > 0; i--)
          (_c = cpuStatusBar[i]) == null || _c.classList.remove("hidden"), (_d = cpuStatusBar[i]) == null || _d.classList.add("block");
      }
    }, 1e3), setInterval(() => {
      var _a, _b, _c, _d;
      let y = Math.random();
      if (memStatusBarOffset === 1 && (y = 1, memStatusBarOffset = 0), y < 0.5 ? y = 0 : y = 1, y === 0) {
        memStatusBarIndex !== 0 && memStatusBarIndex--;
        for (let i = memStatusBarIndex; i < memStatusBar.length; i++)
          (_a = memStatusBar[i]) == null || _a.classList.remove("block"), (_b = memStatusBar[i]) == null || _b.classList.add("hidden");
      } else if (y === 1) {
        memStatusBarIndex !== memStatusBar.length && memStatusBarIndex++;
        for (let i = memStatusBarIndex; i > 0; i--)
          (_c = memStatusBar[i]) == null || _c.classList.remove("hidden"), (_d = memStatusBar[i]) == null || _d.classList.add("block");
      }
    }, 1e3), setInterval(() => {
      var _a, _b, _c, _d;
      let y = Math.random();
      if (netStatusBarOffset === 1 && (y = 1, netStatusBarOffset = 0), y < 0.5 ? y = 0 : y = 1, y === 0) {
        netStatusBarIndex !== 0 && netStatusBarIndex--;
        for (let i = netStatusBarIndex; i < netStatusBar.length; i++)
          (_a = netStatusBar[i]) == null || _a.classList.remove("block"), (_b = netStatusBar[i]) == null || _b.classList.add("hidden");
      } else if (y === 1) {
        netStatusBarIndex !== netStatusBar.length && netStatusBarIndex++;
        for (let i = netStatusBarIndex; i > 0; i--)
          (_c = netStatusBar[i]) == null || _c.classList.remove("hidden"), (_d = netStatusBar[i]) == null || _d.classList.add("block");
      }
    }, 1e3), setInterval(() => {
      var _a, _b, _c, _d;
      let y = Math.random();
      if (diskStatusBarOffset === 1 && (y = 1, diskStatusBarOffset = 0), y < 0.5 ? y = 0 : y = 1, y === 0) {
        diskStatusBarIndex !== 0 && diskStatusBarIndex--;
        for (let i = diskStatusBarIndex; i < diskStatusBar.length; i++)
          (_a = diskStatusBar[i]) == null || _a.classList.remove("block"), (_b = diskStatusBar[i]) == null || _b.classList.add("hidden");
      } else if (y === 1) {
        diskStatusBarIndex !== diskStatusBar.length && diskStatusBarIndex++;
        for (let i = diskStatusBarIndex; i > 0; i--)
          (_c = diskStatusBar[i]) == null || _c.classList.remove("hidden"), (_d = diskStatusBar[i]) == null || _d.classList.add("block");
      }
    }, 1e3);
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
    lang: "en",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react6.Meta, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 239,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react6.Links, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 240,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 238,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", {
        className: "h-screen",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "hidden sm:block t-01 r-01 absolute h-8 w-8 rotate-45 border-b-2 border-b-sky-400 bg-gray-900"
          }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 243,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "hidden sm:block b-01 l-01 absolute h-8 w-8 rotate-45 border-t-2 border-t-sky-400 bg-gray-900"
          }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 244,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "hidden sm:block b-01 r-01 absolute h-8 w-8 rotate-45 border-l-2 border-l-sky-400 bg-gray-900"
          }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 245,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "grid h-screen grid-cols-4 2xl:grid-cols-5 grid-rows-4 gap-4 p-8 sm:p-4",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "row-span-4 gap-4 overflow-y-scroll scrollbar-hide col-span-3 2xl:col-span-4 sm:row-span-3",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react6.Outlet, {}, void 0, !1, {
                  fileName: "app/root.tsx",
                  lineNumber: 248,
                  columnNumber: 13
                }, this)
              }, void 0, !1, {
                fileName: "app/root.tsx",
                lineNumber: 247,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "row-span-4 grid-cols-1 grid-rows-5 hidden border-2 border-sky-400 sm:grid",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "h-full grid row-span-2",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Navigation, {}, void 0, !1, {
                      fileName: "app/root.tsx",
                      lineNumber: 252,
                      columnNumber: 15
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/root.tsx",
                    lineNumber: 251,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "h-full grid row-span-3 border-t-2 border-t-sky-400 p-8",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "flex-row justify-between",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                            className: "text-lg",
                            children: "CPU"
                          }, void 0, !1, {
                            fileName: "app/root.tsx",
                            lineNumber: 256,
                            columnNumber: 17
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                            className: "pt-01",
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatusBar, {
                              id: "cpu"
                            }, void 0, !1, {
                              fileName: "app/root.tsx",
                              lineNumber: 257,
                              columnNumber: 40
                            }, this)
                          }, void 0, !1, {
                            fileName: "app/root.tsx",
                            lineNumber: 257,
                            columnNumber: 17
                          }, this)
                        ]
                      }, void 0, !0, {
                        fileName: "app/root.tsx",
                        lineNumber: 255,
                        columnNumber: 15
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "flex-row justify-between",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                            className: "text-lg",
                            children: "MEM"
                          }, void 0, !1, {
                            fileName: "app/root.tsx",
                            lineNumber: 260,
                            columnNumber: 17
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                            className: "pt-01",
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatusBar, {
                              id: "mem"
                            }, void 0, !1, {
                              fileName: "app/root.tsx",
                              lineNumber: 261,
                              columnNumber: 40
                            }, this)
                          }, void 0, !1, {
                            fileName: "app/root.tsx",
                            lineNumber: 261,
                            columnNumber: 17
                          }, this)
                        ]
                      }, void 0, !0, {
                        fileName: "app/root.tsx",
                        lineNumber: 259,
                        columnNumber: 15
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "flex-row justify-between",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                            className: "text-lg",
                            children: "NET"
                          }, void 0, !1, {
                            fileName: "app/root.tsx",
                            lineNumber: 264,
                            columnNumber: 17
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                            className: "pt-01",
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatusBar, {
                              id: "net"
                            }, void 0, !1, {
                              fileName: "app/root.tsx",
                              lineNumber: 265,
                              columnNumber: 40
                            }, this)
                          }, void 0, !1, {
                            fileName: "app/root.tsx",
                            lineNumber: 265,
                            columnNumber: 17
                          }, this)
                        ]
                      }, void 0, !0, {
                        fileName: "app/root.tsx",
                        lineNumber: 263,
                        columnNumber: 15
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "flex-row justify-between",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                            className: "text-lg",
                            children: "DISK"
                          }, void 0, !1, {
                            fileName: "app/root.tsx",
                            lineNumber: 268,
                            columnNumber: 17
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                            className: "pt-01",
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatusBar, {
                              id: "disk"
                            }, void 0, !1, {
                              fileName: "app/root.tsx",
                              lineNumber: 269,
                              columnNumber: 40
                            }, this)
                          }, void 0, !1, {
                            fileName: "app/root.tsx",
                            lineNumber: 269,
                            columnNumber: 17
                          }, this)
                        ]
                      }, void 0, !0, {
                        fileName: "app/root.tsx",
                        lineNumber: 267,
                        columnNumber: 15
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "w-full",
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Matrix, {}, void 0, !1, {
                          fileName: "app/root.tsx",
                          lineNumber: 271,
                          columnNumber: 39
                        }, this)
                      }, void 0, !1, {
                        fileName: "app/root.tsx",
                        lineNumber: 271,
                        columnNumber: 15
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/root.tsx",
                    lineNumber: 254,
                    columnNumber: 13
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/root.tsx",
                lineNumber: 250,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "col-span-3 2xl:col-span-4 hidden overflow-y-scroll border-2 border-sky-400 p-4 scrollbar-hide sm:grid",
                onClick: () => setFocusOnInput(!0),
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Terminal, {
                  focusOnInput
                }, void 0, !1, {
                  fileName: "app/root.tsx",
                  lineNumber: 278,
                  columnNumber: 13
                }, this)
              }, void 0, !1, {
                fileName: "app/root.tsx",
                lineNumber: 274,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/root.tsx",
            lineNumber: 246,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "kek absolute bottom-0 block w-full p-4 sm:hidden",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "mobile-menu-corner-tl absolute border-r-2 border-r-sky-400 bg-gray-900"
              }, void 0, !1, {
                fileName: "app/root.tsx",
                lineNumber: 282,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "mobile-menu-corner-tr absolute border-r-2 border-r-sky-400 bg-gray-900"
              }, void 0, !1, {
                fileName: "app/root.tsx",
                lineNumber: 283,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "mobile-menu-corner-br absolute border-r-2 border-r-sky-400 bg-gray-900"
              }, void 0, !1, {
                fileName: "app/root.tsx",
                lineNumber: 284,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "mobile-menu-corner-bl absolute border-r-2 border-r-sky-400 bg-gray-900"
              }, void 0, !1, {
                fileName: "app/root.tsx",
                lineNumber: 285,
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
                          lineNumber: 293,
                          columnNumber: 42
                        }, this),
                        mobileTerminalOpen && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Terminal, {
                          focusOnInput
                        }, void 0, !1, {
                          fileName: "app/root.tsx",
                          lineNumber: 294,
                          columnNumber: 40
                        }, this)
                      ]
                    }, void 0, !0, {
                      fileName: "app/root.tsx",
                      lineNumber: 292,
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
                              lineNumber: 306,
                              columnNumber: 21
                            }, this)
                          }, void 0, !1, {
                            fileName: "app/root.tsx",
                            lineNumber: 298,
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
                              lineNumber: 317,
                              columnNumber: 23
                            }, this)
                          }, void 0, !1, {
                            fileName: "app/root.tsx",
                            lineNumber: 309,
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
                              lineNumber: 328,
                              columnNumber: 21
                            }, this)
                          }, void 0, !1, {
                            fileName: "app/root.tsx",
                            lineNumber: 320,
                            columnNumber: 19
                          }, this)
                        ]
                      }, void 0, !0, {
                        fileName: "app/root.tsx",
                        lineNumber: 297,
                        columnNumber: 17
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/root.tsx",
                      lineNumber: 296,
                      columnNumber: 15
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/root.tsx",
                  lineNumber: 288,
                  columnNumber: 13
                }, this)
              }, void 0, !1, {
                fileName: "app/root.tsx",
                lineNumber: 286,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/root.tsx",
            lineNumber: 281,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react6.ScrollRestoration, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 335,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react6.Scripts, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 336,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react6.LiveReload, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 337,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 242,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 237,
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
var import_remix_image2 = require("remix-image"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Skills() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "grid grid-cols-2 gap-20 2xl:gap-40 sm:grid-cols-3 xl:grid-cols-4",
    children: skills.map((skill, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
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
        lineNumber: 15,
        columnNumber: 11
      }, this)
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
var import_remix_image3 = require("remix-image"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Work() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "grid grid-cols-3 gap-4",
    children: projects.map((project, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "relative work-card col-span-1 row-span-1 grid h-48 2xl:h-56 border-2 border-sky-400",
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
                  lineNumber: 16,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "work-card-cover absolute top-0 hidden h-48 2xl:h-56 w-full",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                    className: "absolute bottom-8 left-8 text-lg font-semibold",
                    children: project.name
                  }, void 0, !1, {
                    fileName: "app/routes/work.tsx",
                    lineNumber: 23,
                    columnNumber: 17
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/work.tsx",
                  lineNumber: 22,
                  columnNumber: 15
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/work.tsx",
              lineNumber: 15,
              columnNumber: 13
            }, this),
            i === 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "-top-4 -left-4 absolute h-8 w-8 rotate-45 border-r-2 border-r-sky-400 bg-gray-900"
            }, void 0, !1, {
              fileName: "app/routes/work.tsx",
              lineNumber: 29,
              columnNumber: 15
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/work.tsx",
          lineNumber: 9,
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
            lineNumber: 39,
            columnNumber: 15
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/work.tsx",
          lineNumber: 33,
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
var assets_manifest_default = { version: "db2f5ede", entry: { module: "/build/entry.client-4TOAKYEO.js", imports: ["/build/_shared/chunk-LMPYLZEG.js", "/build/_shared/chunk-3CPB4T5C.js", "/build/_shared/chunk-42Z7WWMI.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-5ABNBREA.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api/image": { id: "routes/api/image", parentId: "root", path: "api/image", index: void 0, caseSensitive: void 0, module: "/build/routes/api/image-SPOYC2TE.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/contact": { id: "routes/contact", parentId: "root", path: "contact", index: void 0, caseSensitive: void 0, module: "/build/routes/contact-7LF5FQVX.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-LKWNMIK5.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/skills": { id: "routes/skills", parentId: "root", path: "skills", index: void 0, caseSensitive: void 0, module: "/build/routes/skills-HLVMSKTS.js", imports: ["/build/_shared/chunk-U72AHZ3B.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/work": { id: "routes/work", parentId: "root", path: "work", index: void 0, caseSensitive: void 0, module: "/build/routes/work-SKZUQGAA.js", imports: ["/build/_shared/chunk-U72AHZ3B.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-DB2F5EDE.js" };

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
