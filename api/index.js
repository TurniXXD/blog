var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf,
  __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: !0 });
  },
  __copyProps = (to, from, except, desc) => {
    if ((from && typeof from == "object") || typeof from == "function")
      for (let key of __getOwnPropNames(from))
        !__hasOwnProp.call(to, key) &&
          key !== except &&
          __defProp(to, key, {
            get: () => from[key],
            enumerable:
              !(desc = __getOwnPropDesc(from, key)) || desc.enumerable,
          });
    return to;
  };
var __toESM = (mod, isNodeMode, target) => (
    (target = mod != null ? __create(__getProtoOf(mod)) : {}),
    __copyProps(
      isNodeMode || !mod || !mod.__esModule
        ? __defProp(target, "default", { value: mod, enumerable: !0 })
        : target,
      mod
    )
  ),
  __toCommonJS = (mod) =>
    __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  publicPath: () => publicPath,
  routes: () => routes,
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest,
});
var import_react = require("@remix-run/react"),
  import_server = require("react-dom/server"),
  import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function handleRequest(
  request,
  responseStatusCode,
  responseHeaders,
  remixContext
) {
  let markup = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      import_react.RemixServer,
      {
        context: remixContext,
        url: request.url,
      },
      void 0,
      !1,
      {
        fileName: "app/entry.server.tsx",
        lineNumber: 12,
        columnNumber: 5,
      },
      this
    )
  );
  return (
    responseHeaders.set("Content-Type", "text/html"),
    new Response("<!DOCTYPE html>" + markup, {
      status: responseStatusCode,
      headers: responseHeaders,
    })
  );
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta,
});
var import_react8 = require("react"),
  import_react9 = require("@remix-run/react");

// app/components/navigation.tsx
var import_react2 = require("react"),
  import_react3 = require("@remix-run/react"),
  import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Navigation() {
  return (
    (0, import_react2.useEffect)(() => {
      let navLinks = document.getElementsByClassName("nav-link"),
        navLinkContainers =
          document.getElementsByClassName("nav-link-container");
      for (let i = 0; i < navLinkContainers.length; i++)
        navLinkContainers[i].addEventListener("mouseover", () =>
          navLinks[i].classList.add("nav-link-hover")
        ),
          navLinkContainers[i].addEventListener("mouseout", () =>
            navLinks[i].classList.remove("nav-link-hover")
          );
    }, []),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "nav",
      {
        className: "flex-col relative items-end justify-evenly w-full",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "div",
            {
              className: "flex-row w-full px-8",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "span",
                {
                  className: "nav-link text-2xl",
                  children: "About",
                },
                void 0,
                !1,
                {
                  fileName: "app/components/navigation.tsx",
                  lineNumber: 17,
                  columnNumber: 9,
                },
                this
              ),
            },
            void 0,
            !1,
            {
              fileName: "app/components/navigation.tsx",
              lineNumber: 16,
              columnNumber: 7,
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "div",
            {
              className: "flex-row w-full px-8",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "span",
                {
                  className: "nav-link text-2xl",
                  children: "Work",
                },
                void 0,
                !1,
                {
                  fileName: "app/components/navigation.tsx",
                  lineNumber: 20,
                  columnNumber: 9,
                },
                this
              ),
            },
            void 0,
            !1,
            {
              fileName: "app/components/navigation.tsx",
              lineNumber: 19,
              columnNumber: 7,
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "div",
            {
              className: "flex-row w-full px-8",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "span",
                {
                  className: "nav-link text-2xl",
                  children: "Skills",
                },
                void 0,
                !1,
                {
                  fileName: "app/components/navigation.tsx",
                  lineNumber: 23,
                  columnNumber: 9,
                },
                this
              ),
            },
            void 0,
            !1,
            {
              fileName: "app/components/navigation.tsx",
              lineNumber: 22,
              columnNumber: 7,
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "div",
            {
              className: "flex-row w-full px-8",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "span",
                {
                  className: "nav-link text-2xl",
                  children: "Contact",
                },
                void 0,
                !1,
                {
                  fileName: "app/components/navigation.tsx",
                  lineNumber: 26,
                  columnNumber: 9,
                },
                this
              ),
            },
            void 0,
            !1,
            {
              fileName: "app/components/navigation.tsx",
              lineNumber: 25,
              columnNumber: 7,
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "div",
            {
              className: "absolute flex-col justify-evenly h-full w-full",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  import_react3.Link,
                  {
                    className: "nav-link-container flex-row h-full w-full px-8",
                    to: "/",
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/navigation.tsx",
                    lineNumber: 29,
                    columnNumber: 9,
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  import_react3.Link,
                  {
                    className: "nav-link-container flex-row h-full w-full px-8",
                    to: "/work",
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/navigation.tsx",
                    lineNumber: 30,
                    columnNumber: 9,
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  import_react3.Link,
                  {
                    className: "nav-link-container flex-row h-full w-full px-8",
                    to: "/skills",
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/navigation.tsx",
                    lineNumber: 31,
                    columnNumber: 9,
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  import_react3.Link,
                  {
                    className: "nav-link-container flex-row h-full w-full px-8",
                    to: "/contact",
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/navigation.tsx",
                    lineNumber: 32,
                    columnNumber: 9,
                  },
                  this
                ),
              ],
            },
            void 0,
            !0,
            {
              fileName: "app/components/navigation.tsx",
              lineNumber: 28,
              columnNumber: 7,
            },
            this
          ),
        ],
      },
      void 0,
      !0,
      {
        fileName: "app/components/navigation.tsx",
        lineNumber: 15,
        columnNumber: 5,
      },
      this
    )
  );
}

// app/components/terminal/terminal.tsx
var import_react5 = require("react");

// app/components/terminal/inputLine.tsx
var import_react4 = require("react"),
  import_react_router_dom = require("react-router-dom"),
  import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function InputLine({ output, setOutput, commandHistory, setCommandHistory }) {
  let navigate = (0, import_react_router_dom.useNavigate)(),
    [historyLookback, setHistoryLookback] = (0, import_react4.useState)(0),
    [disableInput, setDisableInput] = (0, import_react4.useState)(!1),
    [command, setCommand] = (0, import_react4.useState)("");
  (0, import_react4.useEffect)(() => {
    var _a;
    return (_a = document.getElementById("terminal-input")) == null
      ? void 0
      : _a.focus();
  }, []),
    (0, import_react4.useEffect)(() => {
      let terminalInput = document.getElementById("terminal-input");
      disableInput &&
        (terminalInput == null || terminalInput.removeAttribute("id"));
    }, [disableInput]);
  let handleOutput = (newOutput) => {
      output === newOutput
        ? (setOutput(commandHistory[historyLookback]),
          setOutput(newOutput + " "))
        : setOutput(newOutput);
    },
    handleKeyEvent = (e) => {
      if (
        (e.key === "ArrowUp" &&
          commandHistory.length !== historyLookback &&
          (setCommand(commandHistory[historyLookback]),
          setHistoryLookback((value) => value + 1)),
        e.key === "ArrowDown" &&
          (historyLookback !== 0
            ? (setCommand(commandHistory[historyLookback - 1]),
              setHistoryLookback((value) => value - 1))
            : setCommand("")),
        e.key === "Enter" && command !== "")
      ) {
        let commandProcessed = command.split(" ");
        setCommandHistory((data) => {
          let dataCommandHistory = data && [...data];
          return dataCommandHistory.push(command), dataCommandHistory || [];
        }),
          commandProcessed[0] === "cd"
            ? commandProcessed[1]
              ? /.txt/g.test(commandProcessed[1])
                ? commandProcessed[1] === "me.txt"
                  ? handleOutput("me.txt is a file")
                  : handleOutput(`Cannot find ${commandProcessed[1]}`)
                : commandProcessed[1] === "about" ||
                  commandProcessed[1] === "work" ||
                  commandProcessed[1] === "skills" ||
                  commandProcessed[1] === "contact"
                ? (navigate(
                    commandProcessed[1] === "about" ? "/" : commandProcessed[1]
                  ),
                  handleOutput("no_output_line"))
                : handleOutput(`Cannot find ${commandProcessed[1]}`)
              : handleOutput("No directory specified")
            : commandProcessed[0] === "ls"
            ? handleOutput(`
          <a href="/"><strong>about</strong></a> <br/>
          <a href="/work"><strong>work</strong></a> <br/>
          <a href="/skills"><strong>skills</strong></a> <br/>
          <a href="/contact"><strong>contact</strong></a> <br/>
          me.txt
        `)
            : commandProcessed[0] === "cat"
            ? commandProcessed[1] === "me.txt"
              ? handleOutput("It's me")
              : commandProcessed[1]
              ? commandProcessed[1] === "about" ||
                commandProcessed[1] === "work" ||
                commandProcessed[1] === "skills" ||
                commandProcessed[1] === "contact"
                ? handleOutput(`${commandProcessed[1]} is a directory`)
                : handleOutput(`Cannot find ${commandProcessed[1]}`)
              : handleOutput("No file specified")
            : (commandProcessed[0],
              handleOutput("available commands are help, cd, ls, cat")),
          setDisableInput(!0);
      }
    };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "div",
    {
      className: "flex-row gap-2",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "div",
          {
            className: "flex-col",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "span",
              {
                className: "text-2xs sm:text-sm",
                children: "[ vantuch@dev ~ ] $",
              },
              void 0,
              !1,
              {
                fileName: "app/components/terminal/inputLine.tsx",
                lineNumber: 102,
                columnNumber: 9,
              },
              this
            ),
          },
          void 0,
          !1,
          {
            fileName: "app/components/terminal/inputLine.tsx",
            lineNumber: 101,
            columnNumber: 7,
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "div",
          {
            className: "flex-auto flex-col",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "input",
              {
                type: "text",
                disabled: disableInput,
                spellCheck: "false",
                autoCorrect: "off",
                autoCapitalize: "none",
                id: "terminal-input",
                className:
                  "w-full bg-grey text-2xs sm:text-sm word-spacing-lg outline-none",
                onChange: (value) => setCommand(value.target.value),
                value: command,
                onKeyDown: (e) => handleKeyEvent(e),
              },
              void 0,
              !1,
              {
                fileName: "app/components/terminal/inputLine.tsx",
                lineNumber: 105,
                columnNumber: 9,
              },
              this
            ),
          },
          void 0,
          !1,
          {
            fileName: "app/components/terminal/inputLine.tsx",
            lineNumber: 104,
            columnNumber: 7,
          },
          this
        ),
      ],
    },
    void 0,
    !0,
    {
      fileName: "app/components/terminal/inputLine.tsx",
      lineNumber: 100,
      columnNumber: 5,
    },
    this
  );
}

// app/components/terminal/outputLine.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function OutputLine({ output }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "div",
    {
      className: "flex sm:my-2 items-center",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "span",
        {
          className: "text-2xs sm:text-sm",
          dangerouslySetInnerHTML: { __html: output },
        },
        void 0,
        !1,
        {
          fileName: "app/components/terminal/outputLine.tsx",
          lineNumber: 4,
          columnNumber: 7,
        },
        this
      ),
    },
    void 0,
    !1,
    {
      fileName: "app/components/terminal/outputLine.tsx",
      lineNumber: 3,
      columnNumber: 5,
    },
    this
  );
}

// app/components/terminal/terminal.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Terminal() {
  let defaultOutput =
      "Start by typing commands. To see available commands type 'help'.",
    [output, setOutput] = (0, import_react5.useState)(defaultOutput),
    [lines, setLines] = (0, import_react5.useState)([]),
    [commandHistory, setCommandHistory] = (0, import_react5.useState)([]),
    [lineKey, setLineKey] = (0, import_react5.useState)(0);
  return (
    (0, import_react5.useEffect)(() => {
      setLines((data) => {
        let dataLines = data && [...data];
        return (
          dataLines.length < 1 &&
            (dataLines.push(
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                OutputLine,
                {
                  output,
                },
                lineKey,
                !1,
                {
                  fileName: "app/components/terminal/terminal.tsx",
                  lineNumber: 16,
                  columnNumber: 24,
                },
                this
              )
            ),
            dataLines.push(
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                InputLine,
                {
                  output,
                  setOutput,
                  commandHistory,
                  setCommandHistory,
                },
                lineKey + 1,
                !1,
                {
                  fileName: "app/components/terminal/terminal.tsx",
                  lineNumber: 18,
                  columnNumber: 11,
                },
                this
              )
            ),
            setLineKey((lineKey2) => lineKey2 + 1)),
          dataLines || []
        );
      }),
        console.log(lines);
    }, []),
    (0, import_react5.useEffect)(() => {
      output !== defaultOutput &&
        setLines((data) => {
          console.log(output);
          let dataLines = data && [...data],
            isNotOutputLine =
              output === "no_output_line" || output === "no_output_line ";
          return (
            !isNotOutputLine &&
              dataLines.push(
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  OutputLine,
                  {
                    output,
                  },
                  lineKey,
                  !1,
                  {
                    fileName: "app/components/terminal/terminal.tsx",
                    lineNumber: 39,
                    columnNumber: 44,
                  },
                  this
                )
              ),
            dataLines.push(
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                InputLine,
                {
                  output,
                  setOutput,
                  commandHistory,
                  setCommandHistory,
                },
                isNotOutputLine ? lineKey : lineKey + 1,
                !1,
                {
                  fileName: "app/components/terminal/terminal.tsx",
                  lineNumber: 41,
                  columnNumber: 11,
                },
                this
              )
            ),
            setLineKey((lineKey2) => lineKey2 + 2),
            dataLines || []
          );
        }),
        console.log(lines);
    }, [output]),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "div",
      {
        className: "p-4",
        children: lines && lines.map((line) => line),
      },
      void 0,
      !1,
      {
        fileName: "app/components/terminal/terminal.tsx",
        lineNumber: 56,
        columnNumber: 10,
      },
      this
    )
  );
}

// app/components/stats.tsx
var import_react6 = require("react");

// app/components/svg.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"),
  StatusBar = ({ id }) => {
    let rect = [];
    for (let i = 5; i < 179; i += 6) rect.push(i);
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "svg",
      {
        id,
        width: "181",
        height: "25",
        viewBox: "0 0 181 25",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "path",
            {
              d: "M0 0H11V2H2V23H11V25H0V0Z",
              fill: "#38BDF8",
            },
            void 0,
            !1,
            {
              fileName: "app/components/svg.tsx",
              lineNumber: 7,
              columnNumber: 7,
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "path",
            {
              d: "M181 0H170V2H179V23H170V25H181V0Z",
              fill: "#38BDF8",
            },
            void 0,
            !1,
            {
              fileName: "app/components/svg.tsx",
              lineNumber: 8,
              columnNumber: 7,
            },
            this
          ),
          rect.map((r) =>
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "rect",
              {
                className: `${id} hidden`,
                x: r,
                y: "5",
                width: "3",
                height: "15",
                fill: "#38BDF8",
              },
              r,
              !1,
              {
                fileName: "app/components/svg.tsx",
                lineNumber: 9,
                columnNumber: 22,
              },
              this
            )
          ),
        ],
      },
      void 0,
      !0,
      {
        fileName: "app/components/svg.tsx",
        lineNumber: 6,
        columnNumber: 5,
      },
      this
    );
  };

// app/utils/index.ts
var bipolarRandomState = () => {
  let y = Math.random(),
    status = !1;
  return y < 0.5 ? (status = !1) : (status = !0), status;
};

// app/components/stats.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Stats() {
  return (
    (0, import_react6.useEffect)(() => {
      let cpuStatusBar = document.getElementsByClassName("cpu"),
        memStatusBar = document.getElementsByClassName("mem"),
        netStatusBar = document.getElementsByClassName("net"),
        diskStatusBar = document.getElementsByClassName("disk"),
        cpuStatusBarIndex = 0,
        memStatusBarIndex = 0,
        netStatusBarIndex = 0,
        cpuStatusBarOffset = 13,
        diskStatusBarIndex = 0,
        memStatusBarOffset = 15,
        netStatusBarOffset = 10,
        diskStatusBarOffset = 20,
        setStartingStatusBarPosition = (timer, statusBar, i, statusEnd) => {
          statusBar[i].classList.remove("hidden"),
            statusBar[i].classList.add("block"),
            i === statusBar.length - statusEnd &&
              (clearInterval(timer),
              (i = statusBar.length - statusEnd - 2),
              (statusEnd = 1));
        },
        cpuIntervalStart = setInterval(() => {
          setStartingStatusBarPosition(
            cpuIntervalStart,
            cpuStatusBar,
            cpuStatusBarIndex,
            cpuStatusBarOffset
          ),
            cpuStatusBarIndex++;
        }, 50),
        memIntervalStart = setInterval(() => {
          setStartingStatusBarPosition(
            memIntervalStart,
            memStatusBar,
            memStatusBarIndex,
            memStatusBarOffset
          ),
            memStatusBarIndex++;
        }, 50),
        netIntervalStart = setInterval(() => {
          setStartingStatusBarPosition(
            netIntervalStart,
            netStatusBar,
            netStatusBarIndex,
            netStatusBarOffset
          ),
            netStatusBarIndex++;
        }, 50),
        diskIntervalStart = setInterval(() => {
          setStartingStatusBarPosition(
            diskIntervalStart,
            diskStatusBar,
            diskStatusBarIndex,
            diskStatusBarOffset
          ),
            diskStatusBarIndex++;
        }, 50),
        randomStatusBarState = (statusBar, statusIndex, statusEnd) => {
          var _a, _b, _c, _d;
          let y = bipolarRandomState();
          if ((statusEnd === 1 && ((y = !0), (statusEnd = 0)), y)) {
            if (y) {
              statusIndex !== statusBar.length && statusIndex++;
              for (let i = statusIndex; i > 0; i--)
                (_c = statusBar[i]) == null || _c.classList.remove("hidden"),
                  (_d = statusBar[i]) == null || _d.classList.add("block");
            }
          } else {
            statusIndex > 0 && statusIndex--;
            for (let i = statusIndex; i < statusBar.length; i++)
              (_a = statusBar[i]) == null || _a.classList.remove("block"),
                (_b = statusBar[i]) == null || _b.classList.add("hidden");
          }
        };
      setInterval(
        () =>
          randomStatusBarState(
            cpuStatusBar,
            cpuStatusBarIndex,
            cpuStatusBarOffset
          ),
        1e3
      ),
        setInterval(
          () =>
            randomStatusBarState(
              memStatusBar,
              memStatusBarIndex,
              memStatusBarOffset
            ),
          1e3
        ),
        setInterval(
          () =>
            randomStatusBarState(
              netStatusBar,
              netStatusBarIndex,
              netStatusBarOffset
            ),
          1e3
        ),
        setInterval(
          () =>
            randomStatusBarState(
              diskStatusBar,
              diskStatusBarIndex,
              diskStatusBarOffset
            ),
          1e3
        );
    }, []),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      import_jsx_dev_runtime.Fragment,
      {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "div",
            {
              className: "flex-row justify-center min-[1370px]:justify-between",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  "span",
                  {
                    className: "hidden min-[1370px]:block text-lg",
                    children: "CPU",
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/stats.tsx",
                    lineNumber: 82,
                    columnNumber: 9,
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  "div",
                  {
                    className: "pt-01",
                    children: /* @__PURE__ */ (0,
                    import_jsx_dev_runtime.jsxDEV)(
                      StatusBar,
                      {
                        id: "cpu",
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/components/stats.tsx",
                        lineNumber: 83,
                        columnNumber: 32,
                      },
                      this
                    ),
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/stats.tsx",
                    lineNumber: 83,
                    columnNumber: 9,
                  },
                  this
                ),
              ],
            },
            void 0,
            !0,
            {
              fileName: "app/components/stats.tsx",
              lineNumber: 81,
              columnNumber: 7,
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "div",
            {
              className: "flex-row justify-center min-[1370px]:justify-between",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  "span",
                  {
                    className: "hidden min-[1370px]:block text-lg",
                    children: "MEM",
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/stats.tsx",
                    lineNumber: 86,
                    columnNumber: 9,
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  "div",
                  {
                    className: "pt-01",
                    children: /* @__PURE__ */ (0,
                    import_jsx_dev_runtime.jsxDEV)(
                      StatusBar,
                      {
                        id: "mem",
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/components/stats.tsx",
                        lineNumber: 87,
                        columnNumber: 32,
                      },
                      this
                    ),
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/stats.tsx",
                    lineNumber: 87,
                    columnNumber: 9,
                  },
                  this
                ),
              ],
            },
            void 0,
            !0,
            {
              fileName: "app/components/stats.tsx",
              lineNumber: 85,
              columnNumber: 7,
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "div",
            {
              className: "flex-row justify-center min-[1370px]:justify-between",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  "span",
                  {
                    className: "hidden min-[1370px]:block text-lg",
                    children: "NET",
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/stats.tsx",
                    lineNumber: 90,
                    columnNumber: 9,
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  "div",
                  {
                    className: "pt-01",
                    children: /* @__PURE__ */ (0,
                    import_jsx_dev_runtime.jsxDEV)(
                      StatusBar,
                      {
                        id: "net",
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/components/stats.tsx",
                        lineNumber: 91,
                        columnNumber: 32,
                      },
                      this
                    ),
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/stats.tsx",
                    lineNumber: 91,
                    columnNumber: 9,
                  },
                  this
                ),
              ],
            },
            void 0,
            !0,
            {
              fileName: "app/components/stats.tsx",
              lineNumber: 89,
              columnNumber: 7,
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "div",
            {
              className: "flex-row justify-center min-[1370px]:justify-between",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  "span",
                  {
                    className: "hidden min-[1370px]:block text-lg",
                    children: "DISK",
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/stats.tsx",
                    lineNumber: 94,
                    columnNumber: 9,
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  "div",
                  {
                    className: "pt-01",
                    children: /* @__PURE__ */ (0,
                    import_jsx_dev_runtime.jsxDEV)(
                      StatusBar,
                      {
                        id: "disk",
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/components/stats.tsx",
                        lineNumber: 95,
                        columnNumber: 32,
                      },
                      this
                    ),
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/stats.tsx",
                    lineNumber: 95,
                    columnNumber: 9,
                  },
                  this
                ),
              ],
            },
            void 0,
            !0,
            {
              fileName: "app/components/stats.tsx",
              lineNumber: 93,
              columnNumber: 7,
            },
            this
          ),
        ],
      },
      void 0,
      !0,
      {
        fileName: "app/components/stats.tsx",
        lineNumber: 80,
        columnNumber: 5,
      },
      this
    )
  );
}

// app/components/matrix.tsx
var import_react7 = require("react");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"),
  StackedElements = ({ count, className }) => {
    let elements = [];
    for (let i = 0; i <= count; i++)
      elements.push(
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "div",
          {
            className,
          },
          i,
          !1,
          {
            fileName: "app/components/matrix.tsx",
            lineNumber: 7,
            columnNumber: 19,
          },
          this
        )
      );
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      import_jsx_dev_runtime.Fragment,
      {
        children: elements,
      },
      void 0,
      !1,
      {
        fileName: "app/components/matrix.tsx",
        lineNumber: 11,
        columnNumber: 5,
      },
      this
    );
  },
  Matrix = () => {
    let cols = [];
    (0, import_react7.useEffect)(() => {
      let matrixCols = [],
        colIndex = 0,
        level = 10;
      setInterval(() => {
        var _a, _b, _c, _d, _e, _f;
        if (matrixCols.length === 30) {
          for (let i = 0; i < matrixCols.length; i++) {
            let matrixColRowsShift = document.querySelectorAll(
              `div#matrix-col-${i} > div.matrix-row`
            );
            (_a = matrixColRowsShift[matrixCols[i]]) == null ||
              _a.classList.remove("bg-blue"),
              (_b = matrixColRowsShift[matrixCols[i]]) == null ||
                _b.classList.add("bg-grey");
          }
          matrixCols.shift(), matrixCols.push(level);
          for (let i = 0; i < matrixCols.length; i++) {
            let matrixColRowsShift = document.querySelectorAll(
              `div#matrix-col-${i} > div.matrix-row`
            );
            (_c = matrixColRowsShift[matrixCols[i]]) == null ||
              _c.classList.remove("bg-grey"),
              (_d = matrixColRowsShift[matrixCols[i]]) == null ||
                _d.classList.add("bg-blue");
          }
        } else {
          let matrixColRows = document.querySelectorAll(
            `div#matrix-col-${colIndex} > div.matrix-row`
          );
          matrixCols.push(level),
            (_e = matrixColRows[matrixCols[colIndex]]) == null ||
              _e.classList.remove("bg-grey"),
            (_f = matrixColRows[matrixCols[colIndex]]) == null ||
              _f.classList.add("bg-blue");
        }
        bipolarRandomState()
          ? level !== 20 && (level += 1)
          : level !== 0 && (level -= 1),
          colIndex < 30 ? colIndex++ : (colIndex = 0);
      }, 125);
    }, []);
    for (let i = 1; i <= 30; i++)
      cols.push(
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "div",
          {
            id: `matrix-col-${i}`,
            className: "matrix-col grid col-span-1 gap-1 justify-items-center",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              StackedElements,
              {
                count: 15,
                className:
                  "matrix-row bg-grey grid row-span-1 h-1 w-1 justify-items-center",
              },
              void 0,
              !1,
              {
                fileName: "app/components/matrix.tsx",
                lineNumber: 57,
                columnNumber: 7,
              },
              this
            ),
          },
          i,
          !1,
          {
            fileName: "app/components/matrix.tsx",
            lineNumber: 56,
            columnNumber: 15,
          },
          this
        )
      );
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "div",
      {
        className: "grid grid-cols-30 grid-rows-15 h-full w-full",
        children: cols,
      },
      void 0,
      !1,
      {
        fileName: "app/components/matrix.tsx",
        lineNumber: 61,
        columnNumber: 5,
      },
      this
    );
  };

// node_modules/remix-image/remix-image.css
var remix_image_default = "/build/_assets/remix-image-UKLG3K75.css";

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-J4H3X3TW.css";

// app/styles/global.css
var global_default = "/build/_assets/global-JTNJZZNB.css";

// app/root.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function links() {
  return [
    { rel: "stylesheet", href: remix_image_default },
    { rel: "stylesheet", href: tailwind_default },
    { rel: "stylesheet", href: global_default },
  ];
}
var meta = () => ({
  charset: "utf-8",
  title: "Jakub Vantuch",
  viewport: "width=device-width,initial-scale=1",
});
function App() {
  let [mobileMenuOpen, setMobileMenuOpen] = (0, import_react8.useState)(!1),
    [mobileNavigationOpen, setMobileNavigationOpen] = (0,
    import_react8.useState)(!1),
    [mobileTerminalOpen, setMobileTerminalOpen] = (0, import_react8.useState)(
      !1
    );
  return (
    (0, import_react8.useEffect)(() => {
      var _a;
      return (_a = document.getElementById("terminal-container")) == null
        ? void 0
        : _a.addEventListener("click", () => {
            var _a2;
            return (_a2 = document.getElementById("terminal-input")) == null
              ? void 0
              : _a2.focus();
          });
    }, []),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "html",
      {
        lang: "en",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "head",
            {
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  import_react9.Meta,
                  {},
                  void 0,
                  !1,
                  {
                    fileName: "app/root.tsx",
                    lineNumber: 45,
                    columnNumber: 9,
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  import_react9.Links,
                  {},
                  void 0,
                  !1,
                  {
                    fileName: "app/root.tsx",
                    lineNumber: 46,
                    columnNumber: 9,
                  },
                  this
                ),
              ],
            },
            void 0,
            !0,
            {
              fileName: "app/root.tsx",
              lineNumber: 44,
              columnNumber: 7,
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "body",
            {
              className: "h-screen",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  "div",
                  {
                    className:
                      "hidden sm:block t-01 r-01 absolute h-8 w-8 rotate-45 border-b-2 border-b-sky-400 bg-grey",
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/root.tsx",
                    lineNumber: 49,
                    columnNumber: 9,
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  "div",
                  {
                    className:
                      "hidden sm:block b-01 l-01 absolute h-8 w-8 rotate-45 border-t-2 border-t-sky-400 bg-grey",
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/root.tsx",
                    lineNumber: 50,
                    columnNumber: 9,
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  "div",
                  {
                    className:
                      "hidden sm:block b-01 r-01 absolute h-8 w-8 rotate-45 border-l-2 border-l-sky-400 bg-grey",
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/root.tsx",
                    lineNumber: 51,
                    columnNumber: 9,
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  "div",
                  {
                    className:
                      "grid h-screen grid-cols-4 2xl:grid-cols-5 grid-rows-4 gap-4 p-8 sm:p-4",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                        "div",
                        {
                          className:
                            "row-span-4 gap-4 overflow-y-scroll scrollbar-hide col-span-4 sm:col-span-3 2xl:col-span-4 sm:row-span-3",
                          children: /* @__PURE__ */ (0,
                          import_jsx_dev_runtime.jsxDEV)(
                            import_react9.Outlet,
                            {},
                            void 0,
                            !1,
                            {
                              fileName: "app/root.tsx",
                              lineNumber: 54,
                              columnNumber: 13,
                            },
                            this
                          ),
                        },
                        void 0,
                        !1,
                        {
                          fileName: "app/root.tsx",
                          lineNumber: 53,
                          columnNumber: 11,
                        },
                        this
                      ),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                        "div",
                        {
                          className:
                            "row-span-4 sm:grid-cols-1 sm:grid-rows-4 hidden border-2 border-sky-400 sm:grid",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                              "div",
                              {
                                className: "sm:grid row-span-3",
                                children: /* @__PURE__ */ (0,
                                import_jsx_dev_runtime.jsxDEV)(
                                  "div",
                                  {
                                    className: "sm:grid grid-rows-2",
                                    children: [
                                      /* @__PURE__ */ (0,
                                      import_jsx_dev_runtime.jsxDEV)(
                                        "div",
                                        {
                                          className: "h-full grid row-span-1",
                                          children: /* @__PURE__ */ (0,
                                          import_jsx_dev_runtime.jsxDEV)(
                                            Navigation,
                                            {},
                                            void 0,
                                            !1,
                                            {
                                              fileName: "app/root.tsx",
                                              lineNumber: 60,
                                              columnNumber: 19,
                                            },
                                            this
                                          ),
                                        },
                                        void 0,
                                        !1,
                                        {
                                          fileName: "app/root.tsx",
                                          lineNumber: 59,
                                          columnNumber: 17,
                                        },
                                        this
                                      ),
                                      /* @__PURE__ */ (0,
                                      import_jsx_dev_runtime.jsxDEV)(
                                        "div",
                                        {
                                          className:
                                            "h-full grid row-span-1 border-t-2 border-t-sky-400 p-8",
                                          children: /* @__PURE__ */ (0,
                                          import_jsx_dev_runtime.jsxDEV)(
                                            Stats,
                                            {},
                                            void 0,
                                            !1,
                                            {
                                              fileName: "app/root.tsx",
                                              lineNumber: 63,
                                              columnNumber: 19,
                                            },
                                            this
                                          ),
                                        },
                                        void 0,
                                        !1,
                                        {
                                          fileName: "app/root.tsx",
                                          lineNumber: 62,
                                          columnNumber: 17,
                                        },
                                        this
                                      ),
                                    ],
                                  },
                                  void 0,
                                  !0,
                                  {
                                    fileName: "app/root.tsx",
                                    lineNumber: 58,
                                    columnNumber: 15,
                                  },
                                  this
                                ),
                              },
                              void 0,
                              !1,
                              {
                                fileName: "app/root.tsx",
                                lineNumber: 57,
                                columnNumber: 13,
                              },
                              this
                            ),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                              "div",
                              {
                                className:
                                  "sm:grid row-span-1 w-full px-8 pt-4",
                                children: /* @__PURE__ */ (0,
                                import_jsx_dev_runtime.jsxDEV)(
                                  Matrix,
                                  {},
                                  void 0,
                                  !1,
                                  {
                                    fileName: "app/root.tsx",
                                    lineNumber: 68,
                                    columnNumber: 15,
                                  },
                                  this
                                ),
                              },
                              void 0,
                              !1,
                              {
                                fileName: "app/root.tsx",
                                lineNumber: 67,
                                columnNumber: 13,
                              },
                              this
                            ),
                          ],
                        },
                        void 0,
                        !0,
                        {
                          fileName: "app/root.tsx",
                          lineNumber: 56,
                          columnNumber: 11,
                        },
                        this
                      ),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                        "div",
                        {
                          id: "terminal-container",
                          className:
                            "col-span-3 2xl:col-span-4 hidden overflow-y-scroll border-2 border-sky-400 p-4 scrollbar-hide sm:grid",
                          children: /* @__PURE__ */ (0,
                          import_jsx_dev_runtime.jsxDEV)(
                            Terminal,
                            {},
                            void 0,
                            !1,
                            {
                              fileName: "app/root.tsx",
                              lineNumber: 72,
                              columnNumber: 13,
                            },
                            this
                          ),
                        },
                        void 0,
                        !1,
                        {
                          fileName: "app/root.tsx",
                          lineNumber: 71,
                          columnNumber: 11,
                        },
                        this
                      ),
                    ],
                  },
                  void 0,
                  !0,
                  {
                    fileName: "app/root.tsx",
                    lineNumber: 52,
                    columnNumber: 9,
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  "div",
                  {
                    className:
                      "kek absolute bottom-0 block w-full p-4 sm:hidden",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                        "div",
                        {
                          className:
                            "mobile-menu-corner-tl absolute border-r-2 border-r-sky-400 bg-grey",
                        },
                        void 0,
                        !1,
                        {
                          fileName: "app/root.tsx",
                          lineNumber: 76,
                          columnNumber: 11,
                        },
                        this
                      ),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                        "div",
                        {
                          className:
                            "mobile-menu-corner-tr absolute border-r-2 border-r-sky-400 bg-grey",
                        },
                        void 0,
                        !1,
                        {
                          fileName: "app/root.tsx",
                          lineNumber: 77,
                          columnNumber: 11,
                        },
                        this
                      ),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                        "div",
                        {
                          className:
                            "mobile-menu-corner-br absolute border-r-2 border-r-sky-400 bg-grey",
                        },
                        void 0,
                        !1,
                        {
                          fileName: "app/root.tsx",
                          lineNumber: 78,
                          columnNumber: 11,
                        },
                        this
                      ),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                        "div",
                        {
                          className:
                            "mobile-menu-corner-bl absolute border-r-2 border-r-sky-400 bg-grey",
                        },
                        void 0,
                        !1,
                        {
                          fileName: "app/root.tsx",
                          lineNumber: 79,
                          columnNumber: 11,
                        },
                        this
                      ),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                        "div",
                        {
                          className: "p-4",
                          children: /* @__PURE__ */ (0,
                          import_jsx_dev_runtime.jsxDEV)(
                            "div",
                            {
                              className: `grid content-end border-2 border-sky-400 bg-grey ${
                                mobileMenuOpen && "h-more"
                              }`,
                              children: [
                                /* @__PURE__ */ (0,
                                import_jsx_dev_runtime.jsxDEV)(
                                  "div",
                                  {
                                    className: "grid",
                                    children: [
                                      mobileNavigationOpen &&
                                        /* @__PURE__ */ (0,
                                        import_jsx_dev_runtime.jsxDEV)(
                                          Navigation,
                                          {},
                                          void 0,
                                          !1,
                                          {
                                            fileName: "app/root.tsx",
                                            lineNumber: 87,
                                            columnNumber: 42,
                                          },
                                          this
                                        ),
                                      mobileTerminalOpen &&
                                        /* @__PURE__ */ (0,
                                        import_jsx_dev_runtime.jsxDEV)(
                                          Terminal,
                                          {},
                                          void 0,
                                          !1,
                                          {
                                            fileName: "app/root.tsx",
                                            lineNumber: 88,
                                            columnNumber: 40,
                                          },
                                          this
                                        ),
                                    ],
                                  },
                                  void 0,
                                  !0,
                                  {
                                    fileName: "app/root.tsx",
                                    lineNumber: 86,
                                    columnNumber: 15,
                                  },
                                  this
                                ),
                                /* @__PURE__ */ (0,
                                import_jsx_dev_runtime.jsxDEV)(
                                  "div",
                                  {
                                    className: "grid",
                                    children: /* @__PURE__ */ (0,
                                    import_jsx_dev_runtime.jsxDEV)(
                                      "div",
                                      {
                                        className: "flex-row justify-between",
                                        children: [
                                          /* @__PURE__ */ (0,
                                          import_jsx_dev_runtime.jsxDEV)(
                                            "div",
                                            {
                                              className:
                                                "h-20 w-3/12 flex-col items-center justify-center bg-blue pr-1",
                                              onClick: () => {
                                                setMobileMenuOpen(!0),
                                                  mobileNavigationOpen &&
                                                    setMobileNavigationOpen(!1),
                                                  setMobileTerminalOpen(!0);
                                              },
                                              children: /* @__PURE__ */ (0,
                                              import_jsx_dev_runtime.jsxDEV)(
                                                "img",
                                                {
                                                  src: "/svg/nav-terminal.svg",
                                                  className: "scale-75",
                                                },
                                                void 0,
                                                !1,
                                                {
                                                  fileName: "app/root.tsx",
                                                  lineNumber: 100,
                                                  columnNumber: 21,
                                                },
                                                this
                                              ),
                                            },
                                            void 0,
                                            !1,
                                            {
                                              fileName: "app/root.tsx",
                                              lineNumber: 92,
                                              columnNumber: 19,
                                            },
                                            this
                                          ),
                                          mobileMenuOpen &&
                                            /* @__PURE__ */ (0,
                                            import_jsx_dev_runtime.jsxDEV)(
                                              "div",
                                              {
                                                className:
                                                  "h-20 w-6/12 flex-col items-center justify-center bg-blue",
                                                onClick: () => {
                                                  setMobileMenuOpen(!1),
                                                    mobileNavigationOpen &&
                                                      setMobileNavigationOpen(
                                                        !1
                                                      ),
                                                    mobileTerminalOpen &&
                                                      setMobileTerminalOpen(!1);
                                                },
                                                children: /* @__PURE__ */ (0,
                                                import_jsx_dev_runtime.jsxDEV)(
                                                  "img",
                                                  {
                                                    src: "/svg/nav-cross.svg",
                                                    className: "scale-75",
                                                  },
                                                  void 0,
                                                  !1,
                                                  {
                                                    fileName: "app/root.tsx",
                                                    lineNumber: 111,
                                                    columnNumber: 23,
                                                  },
                                                  this
                                                ),
                                              },
                                              void 0,
                                              !1,
                                              {
                                                fileName: "app/root.tsx",
                                                lineNumber: 103,
                                                columnNumber: 21,
                                              },
                                              this
                                            ),
                                          /* @__PURE__ */ (0,
                                          import_jsx_dev_runtime.jsxDEV)(
                                            "div",
                                            {
                                              className:
                                                "h-20 w-3/12 flex-col items-center justify-center bg-blue pl-1",
                                              onClick: () => {
                                                setMobileMenuOpen(!0),
                                                  mobileTerminalOpen &&
                                                    setMobileTerminalOpen(!1),
                                                  setMobileNavigationOpen(!0);
                                              },
                                              children: /* @__PURE__ */ (0,
                                              import_jsx_dev_runtime.jsxDEV)(
                                                "img",
                                                {
                                                  src: "/svg/nav-menu.svg",
                                                  className: "scale-75",
                                                },
                                                void 0,
                                                !1,
                                                {
                                                  fileName: "app/root.tsx",
                                                  lineNumber: 122,
                                                  columnNumber: 21,
                                                },
                                                this
                                              ),
                                            },
                                            void 0,
                                            !1,
                                            {
                                              fileName: "app/root.tsx",
                                              lineNumber: 114,
                                              columnNumber: 19,
                                            },
                                            this
                                          ),
                                        ],
                                      },
                                      void 0,
                                      !0,
                                      {
                                        fileName: "app/root.tsx",
                                        lineNumber: 91,
                                        columnNumber: 17,
                                      },
                                      this
                                    ),
                                  },
                                  void 0,
                                  !1,
                                  {
                                    fileName: "app/root.tsx",
                                    lineNumber: 90,
                                    columnNumber: 15,
                                  },
                                  this
                                ),
                              ],
                            },
                            void 0,
                            !0,
                            {
                              fileName: "app/root.tsx",
                              lineNumber: 82,
                              columnNumber: 13,
                            },
                            this
                          ),
                        },
                        void 0,
                        !1,
                        {
                          fileName: "app/root.tsx",
                          lineNumber: 80,
                          columnNumber: 11,
                        },
                        this
                      ),
                    ],
                  },
                  void 0,
                  !0,
                  {
                    fileName: "app/root.tsx",
                    lineNumber: 75,
                    columnNumber: 9,
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  import_react9.ScrollRestoration,
                  {},
                  void 0,
                  !1,
                  {
                    fileName: "app/root.tsx",
                    lineNumber: 129,
                    columnNumber: 9,
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  import_react9.Scripts,
                  {},
                  void 0,
                  !1,
                  {
                    fileName: "app/root.tsx",
                    lineNumber: 130,
                    columnNumber: 9,
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  import_react9.LiveReload,
                  {},
                  void 0,
                  !1,
                  {
                    fileName: "app/root.tsx",
                    lineNumber: 131,
                    columnNumber: 9,
                  },
                  this
                ),
              ],
            },
            void 0,
            !0,
            {
              fileName: "app/root.tsx",
              lineNumber: 48,
              columnNumber: 7,
            },
            this
          ),
        ],
      },
      void 0,
      !0,
      {
        fileName: "app/root.tsx",
        lineNumber: 43,
        columnNumber: 5,
      },
      this
    )
  );
}

// app/routes/api/image.ts
var image_exports = {};
__export(image_exports, {
  fetchImage: () => fetchImage,
  loader: () => loader,
});
var import_os = __toESM(require("os")),
  import_path = __toESM(require("path")),
  import_server2 = require("remix-image/server"),
  import_remix_image_sharp = require("remix-image-sharp"),
  fetchImage = async (asset, url, options, basePath) =>
    url.startsWith("/") && (url.length === 1 || url[1] !== "/")
      ? (0, import_server2.fsResolver)(asset, url, options, basePath)
      : (0, import_server2.fetchResolver)(asset, url, options, basePath),
  vercelUrl = process.env.VERCEL_URL || "",
  fixedVercelUrl = vercelUrl.startsWith("https")
    ? vercelUrl
    : `https://${vercelUrl}`,
  config = {
    selfUrl: "http://localhost:3000",
    cache: new import_server2.DiskCache({
      path: import_path.default.join(import_os.default.tmpdir(), "img"),
    }),
    resolver: fetchImage,
    transformer: import_remix_image_sharp.sharpTransformer,
    basePath: "public",
  },
  loader = ({ request }) => (0, import_server2.imageLoader)(config, request);

// app/routes/contact.tsx
var contact_exports = {};
__export(contact_exports, {
  default: () => Contact,
});
var import_react10 = require("react"),
  import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Contact() {
  let socials = [
    {
      url: "https://github.com/TurniXXD",
      name: "GitHub",
      icon: "github" /* github */,
    },
    {
      url: "https://www.linkedin.com/in/jakub-vantuch-552514197/",
      name: "LinkedIn",
      icon: "linkedin" /* linkedin */,
    },
    {
      url: "https://t.me/turnix",
      name: "Telegram",
      icon: "telegram" /* telegram */,
    },
    {
      url: "mailto:contact@vantuch.dev",
      name: "Email",
      icon: "email" /* email */,
    },
  ];
  return (
    (0, import_react10.useEffect)(() => {
      let contactLinks = document.getElementsByClassName("contact-link"),
        contactLinkContainers = document.getElementsByClassName(
          "contact-link-container"
        );
      for (let i = 0; i < contactLinkContainers.length; i++)
        contactLinkContainers[i].addEventListener("mouseover", () =>
          contactLinks[i].classList.add("contact-link-hover")
        ),
          contactLinkContainers[i].addEventListener("mouseout", () =>
            contactLinks[i].classList.remove("contact-link-hover")
          );
    }, []),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "div",
      {
        className: "gap-4 sm:grid-cols-3 sm:grid-rows-4 sm:grid sm:h-full",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "div",
            {
              className:
                "hidden sm:block t-01 l-01 absolute h-8 w-8 rotate-45 border-r-2 border-r-sky-400 bg-grey",
            },
            void 0,
            !1,
            {
              fileName: "app/routes/contact.tsx",
              lineNumber: 51,
              columnNumber: 7,
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "div",
            {
              className: "grid row-span-2 col-span-1 border-2 border-sky-400",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "div",
                {
                  className: "flex-col relative justify-evenly w-full",
                  children: [
                    socials.map((s, i) =>
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                        "div",
                        {
                          className:
                            "flex-row justify-start sm:justify-center lg:justify-start w-full px-8 items-center gap-6",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                              "img",
                              {
                                src: `/svg/${s.icon}.svg`,
                                className: "scale-75 h-10",
                              },
                              void 0,
                              !1,
                              {
                                fileName: "app/routes/contact.tsx",
                                lineNumber: 56,
                                columnNumber: 15,
                              },
                              this
                            ),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                              "span",
                              {
                                className:
                                  "block sm:hidden lg:block contact-link text-base sm:text-lg",
                                children: s.name,
                              },
                              void 0,
                              !1,
                              {
                                fileName: "app/routes/contact.tsx",
                                lineNumber: 57,
                                columnNumber: 15,
                              },
                              this
                            ),
                          ],
                        },
                        i,
                        !0,
                        {
                          fileName: "app/routes/contact.tsx",
                          lineNumber: 55,
                          columnNumber: 13,
                        },
                        this
                      )
                    ),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                      "div",
                      {
                        className:
                          "absolute flex-col justify-evenly h-full w-full",
                        children: socials.map((s, i) =>
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                            "a",
                            {
                              href: s.url,
                              target: "__blank",
                              rel: "noreferrer noopener nofollow",
                              className:
                                "contact-link-container flex-row h-full w-full px-8",
                            },
                            i,
                            !1,
                            {
                              fileName: "app/routes/contact.tsx",
                              lineNumber: 62,
                              columnNumber: 15,
                            },
                            this
                          )
                        ),
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/routes/contact.tsx",
                        lineNumber: 60,
                        columnNumber: 11,
                      },
                      this
                    ),
                  ],
                },
                void 0,
                !0,
                {
                  fileName: "app/routes/contact.tsx",
                  lineNumber: 53,
                  columnNumber: 9,
                },
                this
              ),
            },
            void 0,
            !1,
            {
              fileName: "app/routes/contact.tsx",
              lineNumber: 52,
              columnNumber: 7,
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "div",
            {
              className: "grid row-span-2 col-span-2 grid-rows-3 h-full gap-4",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  "input",
                  {
                    type: "text",
                    name: "name",
                    id: "",
                    placeholder: "Full Name",
                    spellCheck: "false",
                    autoCorrect: "off",
                    className:
                      "h-20 sm:h-full w-full px-16 bg-grey border-2 border-sky-400 outline-none text-xl text-center",
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/contact.tsx",
                    lineNumber: 74,
                    columnNumber: 9,
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  "input",
                  {
                    type: "text",
                    name: "email",
                    id: "",
                    placeholder: "Email",
                    spellCheck: "false",
                    autoCorrect: "off",
                    className:
                      "h-20 sm:h-full w-full px-16 bg-grey border-2 border-sky-400 outline-none text-xl text-center",
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/contact.tsx",
                    lineNumber: 83,
                    columnNumber: 9,
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  "input",
                  {
                    type: "text",
                    name: "phone",
                    id: "",
                    placeholder: "Phone",
                    spellCheck: "false",
                    autoCorrect: "off",
                    className:
                      "h-20 sm:h-full w-full px-16 bg-grey border-2 border-sky-400 outline-none text-xl text-center",
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/contact.tsx",
                    lineNumber: 92,
                    columnNumber: 9,
                  },
                  this
                ),
              ],
            },
            void 0,
            !0,
            {
              fileName: "app/routes/contact.tsx",
              lineNumber: 73,
              columnNumber: 7,
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "div",
            {
              className:
                "relative grid row-span-2 col-span-3 grid-rows-3 border-2 border-sky-400",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  "textarea",
                  {
                    name: "message",
                    id: "",
                    spellCheck: "false",
                    autoCorrect: "off",
                    placeholder: "Let me make your dream come true...",
                    cols: 30,
                    rows: 10,
                    className:
                      "outline-none grid row-span-2 text-xl p-10 bg-grey resize-none mb-6",
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/contact.tsx",
                    lineNumber: 103,
                    columnNumber: 9,
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  "div",
                  {
                    className:
                      "grid absolute bottom-0 right-0 h-28 w-full grid-rows-1 grid-cols-3 row-span-1",
                    children: /* @__PURE__ */ (0,
                    import_jsx_dev_runtime.jsxDEV)(
                      "button",
                      {
                        className:
                          "contact-button relative grid row-span-1 col-start-2 col-span-2 justify-items-center content-center border-2 border-sky-400 border-r-0 border-b-0",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                            "div",
                            {
                              className:
                                "hidden sm:block -top-4 -left-4 absolute h-8 w-8 rotate-45 border-r-2 border-r-sky-400 bg-grey",
                            },
                            void 0,
                            !1,
                            {
                              fileName: "app/routes/contact.tsx",
                              lineNumber: 115,
                              columnNumber: 13,
                            },
                            this
                          ),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                            "span",
                            {
                              className: "text-2xl",
                              children: "Send",
                            },
                            void 0,
                            !1,
                            {
                              fileName: "app/routes/contact.tsx",
                              lineNumber: 116,
                              columnNumber: 13,
                            },
                            this
                          ),
                        ],
                      },
                      void 0,
                      !0,
                      {
                        fileName: "app/routes/contact.tsx",
                        lineNumber: 114,
                        columnNumber: 11,
                      },
                      this
                    ),
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/contact.tsx",
                    lineNumber: 113,
                    columnNumber: 9,
                  },
                  this
                ),
              ],
            },
            void 0,
            !0,
            {
              fileName: "app/routes/contact.tsx",
              lineNumber: 102,
              columnNumber: 7,
            },
            this
          ),
        ],
      },
      void 0,
      !0,
      {
        fileName: "app/routes/contact.tsx",
        lineNumber: 50,
        columnNumber: 5,
      },
      this
    )
  );
}

// app/routes/skills.tsx
var skills_exports = {};
__export(skills_exports, {
  default: () => Skills,
});

// app/data/models.ts
var projects = [
    {
      name: "Steepens",
      url: "https://www.steepensband.eu/",
      imgUrl: "img/projects/steepens.png",
      isRocket: !1,
    },
    {
      name: "Mezi Kozy",
      url: "https://www.mezikozyband.cz/",
      imgUrl: "img/projects/mezikozy.png",
      isRocket: !1,
    },
    {
      name: "Ondr\xE1\u0161ek",
      url: "https://www.ondrasek.cz/",
      imgUrl: "img/projects/ondrasek.png",
      isRocket: !0,
    },
  ],
  skills = [
    {
      skillUrl: "https://nextjs.org/",
      imgUrl: "img/skills/nextjs.svg",
    },
    {
      skillUrl: "https://remix.run/",
      imgUrl: "img/skills/remix.svg",
    },
    {
      skillUrl: "https://www.typescriptlang.org/",
      imgUrl: "img/skills/typescript.svg",
    },
    {
      skillUrl: "https://go.dev/",
      imgUrl: "img/skills/golang.svg",
    },
    {
      skillUrl: "https://www.postgresql.org/",
      imgUrl: "img/skills/postgresql.svg",
    },
    {
      skillUrl: "https://archlinux.org/",
      imgUrl: "img/skills/linux.svg",
    },
  ];

// app/routes/skills.tsx
var import_remix_image2 = require("remix-image"),
  import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Skills() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "div",
    {
      className:
        "grid grid-cols-2 gap-20 2xl:gap-40 sm:grid-cols-3 xl:grid-cols-4",
      children: skills.map((skill, i) =>
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "a",
          {
            href: skill.skillUrl,
            target: "_blank",
            rel: "noreferrer noopener nofollow",
            className: "skills-card col-span-1 row-span-1 grid",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              import_remix_image2.Image,
              {
                loaderUrl: "/api/image",
                src: skill.imgUrl,
                dprVariants: [1, 3],
                className: "h-full w-full",
              },
              void 0,
              !1,
              {
                fileName: "app/routes/skills.tsx",
                lineNumber: 15,
                columnNumber: 11,
              },
              this
            ),
          },
          i,
          !1,
          {
            fileName: "app/routes/skills.tsx",
            lineNumber: 8,
            columnNumber: 9,
          },
          this
        )
      ),
    },
    void 0,
    !1,
    {
      fileName: "app/routes/skills.tsx",
      lineNumber: 6,
      columnNumber: 5,
    },
    this
  );
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
});
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "div",
    {
      className: "p-4",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "h1",
        {
          children: "Welcome to my blog",
        },
        void 0,
        !1,
        {
          fileName: "app/routes/index.tsx",
          lineNumber: 4,
          columnNumber: 7,
        },
        this
      ),
    },
    void 0,
    !1,
    {
      fileName: "app/routes/index.tsx",
      lineNumber: 3,
      columnNumber: 5,
    },
    this
  );
}

// app/routes/work.tsx
var work_exports = {};
__export(work_exports, {
  default: () => Work,
});
var import_remix_image3 = require("remix-image"),
  import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Work() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "div",
    {
      className: "grid grid-cols-3 gap-4",
      children: projects.map((project, i) =>
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "div",
          {
            className:
              "relative work-card col-span-1 row-span-1 grid h-48 2xl:h-56 border-2 border-sky-400",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "a",
                {
                  href: project.url,
                  target: "_blank",
                  rel: "noreferrer noopener nofollow",
                  className: "overflow-hidden",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                      "div",
                      {
                        className: "relative",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                            import_remix_image3.Image,
                            {
                              loaderUrl: "/api/image",
                              src: project.imgUrl,
                              dprVariants: [1, 3],
                              className: "w-full",
                            },
                            void 0,
                            !1,
                            {
                              fileName: "app/routes/work.tsx",
                              lineNumber: 16,
                              columnNumber: 15,
                            },
                            this
                          ),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                            "div",
                            {
                              className:
                                "work-card-cover absolute top-0 hidden h-48 2xl:h-56 w-full",
                              children: /* @__PURE__ */ (0,
                              import_jsx_dev_runtime.jsxDEV)(
                                "span",
                                {
                                  className:
                                    "absolute bottom-8 left-8 text-lg font-semibold",
                                  children: project.name,
                                },
                                void 0,
                                !1,
                                {
                                  fileName: "app/routes/work.tsx",
                                  lineNumber: 23,
                                  columnNumber: 17,
                                },
                                this
                              ),
                            },
                            void 0,
                            !1,
                            {
                              fileName: "app/routes/work.tsx",
                              lineNumber: 22,
                              columnNumber: 15,
                            },
                            this
                          ),
                        ],
                      },
                      void 0,
                      !0,
                      {
                        fileName: "app/routes/work.tsx",
                        lineNumber: 15,
                        columnNumber: 13,
                      },
                      this
                    ),
                    i === 0 &&
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                        "div",
                        {
                          className:
                            "-top-4 -left-4 absolute h-8 w-8 rotate-45 border-r-2 border-r-sky-400 bg-grey",
                        },
                        void 0,
                        !1,
                        {
                          fileName: "app/routes/work.tsx",
                          lineNumber: 29,
                          columnNumber: 15,
                        },
                        this
                      ),
                  ],
                },
                void 0,
                !0,
                {
                  fileName: "app/routes/work.tsx",
                  lineNumber: 9,
                  columnNumber: 11,
                },
                this
              ),
              project.isRocket &&
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  "a",
                  {
                    className:
                      "absolute bottom-0 right-0 flex h-16 w-16 items-center justify-center bg-[#1e1a49]",
                    href: "https://www.prorocketeers.com/",
                    target: "_blank",
                    rel: "noreferrer noopener nofollow",
                    children: /* @__PURE__ */ (0,
                    import_jsx_dev_runtime.jsxDEV)(
                      import_remix_image3.Image,
                      {
                        loaderUrl: "/api/image",
                        src: "img/rocket-logo.png",
                        dprVariants: [1, 3],
                        className: "h-10 w-10",
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/routes/work.tsx",
                        lineNumber: 39,
                        columnNumber: 15,
                      },
                      this
                    ),
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/work.tsx",
                    lineNumber: 33,
                    columnNumber: 13,
                  },
                  this
                ),
            ],
          },
          i,
          !0,
          {
            fileName: "app/routes/work.tsx",
            lineNumber: 8,
            columnNumber: 9,
          },
          this
        )
      ),
    },
    void 0,
    !1,
    {
      fileName: "app/routes/work.tsx",
      lineNumber: 6,
      columnNumber: 5,
    },
    this
  );
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = {
  version: "672849e8",
  entry: {
    module: "/build/entry.client-J3OGDOEN.js",
    imports: [
      "/build/_shared/chunk-KD7SSFPW.js",
      "/build/_shared/chunk-3CPB4T5C.js",
      "/build/_shared/chunk-42Z7WWMI.js",
    ],
  },
  routes: {
    root: {
      id: "root",
      parentId: void 0,
      path: "",
      index: void 0,
      caseSensitive: void 0,
      module: "/build/root-RF55CRLA.js",
      imports: void 0,
      hasAction: !1,
      hasLoader: !1,
      hasCatchBoundary: !1,
      hasErrorBoundary: !1,
    },
    "routes/api/image": {
      id: "routes/api/image",
      parentId: "root",
      path: "api/image",
      index: void 0,
      caseSensitive: void 0,
      module: "/build/routes/api/image-SPOYC2TE.js",
      imports: void 0,
      hasAction: !1,
      hasLoader: !0,
      hasCatchBoundary: !1,
      hasErrorBoundary: !1,
    },
    "routes/contact": {
      id: "routes/contact",
      parentId: "root",
      path: "contact",
      index: void 0,
      caseSensitive: void 0,
      module: "/build/routes/contact-W35RU7IZ.js",
      imports: void 0,
      hasAction: !1,
      hasLoader: !1,
      hasCatchBoundary: !1,
      hasErrorBoundary: !1,
    },
    "routes/index": {
      id: "routes/index",
      parentId: "root",
      path: void 0,
      index: !0,
      caseSensitive: void 0,
      module: "/build/routes/index-LKWNMIK5.js",
      imports: void 0,
      hasAction: !1,
      hasLoader: !1,
      hasCatchBoundary: !1,
      hasErrorBoundary: !1,
    },
    "routes/skills": {
      id: "routes/skills",
      parentId: "root",
      path: "skills",
      index: void 0,
      caseSensitive: void 0,
      module: "/build/routes/skills-HLVMSKTS.js",
      imports: ["/build/_shared/chunk-U72AHZ3B.js"],
      hasAction: !1,
      hasLoader: !1,
      hasCatchBoundary: !1,
      hasErrorBoundary: !1,
    },
    "routes/work": {
      id: "routes/work",
      parentId: "root",
      path: "work",
      index: void 0,
      caseSensitive: void 0,
      module: "/build/routes/work-OZTGW3IM.js",
      imports: ["/build/_shared/chunk-U72AHZ3B.js"],
      hasAction: !1,
      hasLoader: !1,
      hasCatchBoundary: !1,
      hasErrorBoundary: !1,
    },
  },
  url: "/build/manifest-672849E8.js",
};

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build",
  publicPath = "/build/",
  entry = { module: entry_server_exports },
  routes = {
    root: {
      id: "root",
      parentId: void 0,
      path: "",
      index: void 0,
      caseSensitive: void 0,
      module: root_exports,
    },
    "routes/api/image": {
      id: "routes/api/image",
      parentId: "root",
      path: "api/image",
      index: void 0,
      caseSensitive: void 0,
      module: image_exports,
    },
    "routes/contact": {
      id: "routes/contact",
      parentId: "root",
      path: "contact",
      index: void 0,
      caseSensitive: void 0,
      module: contact_exports,
    },
    "routes/skills": {
      id: "routes/skills",
      parentId: "root",
      path: "skills",
      index: void 0,
      caseSensitive: void 0,
      module: skills_exports,
    },
    "routes/index": {
      id: "routes/index",
      parentId: "root",
      path: void 0,
      index: !0,
      caseSensitive: void 0,
      module: routes_exports,
    },
    "routes/work": {
      id: "routes/work",
      parentId: "root",
      path: "work",
      index: void 0,
      caseSensitive: void 0,
      module: work_exports,
    },
  };
// Annotate the CommonJS export names for ESM import in node:
0 &&
  (module.exports = {
    assets,
    assetsBuildDirectory,
    entry,
    publicPath,
    routes,
  });
//# sourceMappingURL=index.js.map
