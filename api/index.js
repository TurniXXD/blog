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
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
async function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let callbackName = (0, import_isbot.default)(request.headers.get("user-agent")) ? "onAllReady" : "onShellReady";
  return new Promise(async (res, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, {
        context: remixContext,
        url: request.url
      }, void 0, !1, {
        fileName: "app/entry.server.tsx",
        lineNumber: 25,
        columnNumber: 7
      }, this),
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
}, StatusBarCol = ({ id }) => {
  let rect = [];
  for (let i = 5; i < 179; i += 6)
    rect.push(i);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
    id,
    width: "25",
    height: "181",
    viewBox: "0 0 25 181",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "-rotate-180",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        d: "M0 0H2H25V11H23V2H2V11H0V0Z",
        fill: "#38BDF8"
      }, void 0, !1, {
        fileName: "app/components/svg.tsx",
        lineNumber: 45,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        d: "M23.0002 179V170H25.0002V181H0V170H2V179H23.0002Z",
        fill: "#38BDF8"
      }, void 0, !1, {
        fileName: "app/components/svg.tsx",
        lineNumber: 46,
        columnNumber: 7
      }, this),
      rect.map((r) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
        className: `${id} hidden`,
        x: "5",
        y: r,
        width: "15",
        height: "3",
        fill: "#38BDF8"
      }, r, !1, {
        fileName: "app/components/svg.tsx",
        lineNumber: 51,
        columnNumber: 9
      }, this))
    ]
  }, void 0, !0, {
    fileName: "app/components/svg.tsx",
    lineNumber: 36,
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
        lineNumber: 75,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        d: "M82.251 18.4993H167.251L231.001 82.2493V167.249L167.251 230.999H82.251L18.501 167.249V82.2493L82.251 18.4993Z",
        fill: "#0f1524"
      }, void 0, !1, {
        fileName: "app/components/svg.tsx",
        lineNumber: 76,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        className: "loader-sec-a",
        d: "M81.999 5.00024L167.999 5.00024L164.999 12.5002L84.9988 12.5002L81.999 5.00024Z",
        fill: "#7DD8FF"
      }, void 0, !1, {
        fileName: "app/components/svg.tsx",
        lineNumber: 80,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        className: "loader-sec-b",
        d: "M241.501 73.4998L234.001 76.4998L173.501 15.9998L176.501 8.49976L241.501 73.4998Z",
        fill: "#7DD8FF"
      }, void 0, !1, {
        fileName: "app/components/svg.tsx",
        lineNumber: 85,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        className: "loader-sec-c",
        d: "M244.999 81.9998V168L237.499 165V84.9997L244.999 81.9998Z",
        fill: "#7DD8FF"
      }, void 0, !1, {
        fileName: "app/components/svg.tsx",
        lineNumber: 90,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        className: "loader-sec-d",
        d: "M176.501 241.5L173.501 234L234.001 173.5L241.501 176.5L176.501 241.5Z",
        fill: "#7DD8FF"
      }, void 0, !1, {
        fileName: "app/components/svg.tsx",
        lineNumber: 95,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        className: "loader-sec-a",
        d: "M168.001 245H82.001L85.001 237.5H165.001L168.001 245Z",
        fill: "#7DD8FF"
      }, void 0, !1, {
        fileName: "app/components/svg.tsx",
        lineNumber: 100,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        className: "loader-sec-b",
        d: "M8.49902 176.5L15.999 173.5L76.499 234L73.499 241.5L8.49902 176.5Z",
        fill: "#7DD8FF"
      }, void 0, !1, {
        fileName: "app/components/svg.tsx",
        lineNumber: 105,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        className: "loader-sec-c",
        d: "M5.00098 168L5.00098 82.0005L12.501 85.0005V165L5.00098 168Z",
        fill: "#7DD8FF"
      }, void 0, !1, {
        fileName: "app/components/svg.tsx",
        lineNumber: 110,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        className: "loader-sec-d",
        d: "M73.5 8.49976L76.5 15.9998L16 76.4998L8.5 73.4998L73.5 8.49976Z",
        fill: "#7DD8FF"
      }, void 0, !1, {
        fileName: "app/components/svg.tsx",
        lineNumber: 115,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
        id: "Group 84",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
            d: "M109.097 85.5H140.407L164.002 109.095V140.405L140.407 164H109.097L85.502 140.405V109.095L109.097 85.5Z",
            fill: "#182139"
          }, void 0, !1, {
            fileName: "app/components/svg.tsx",
            lineNumber: 121,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M108.476 84H141.028L165.502 108.474V141.026L141.028 165.5H108.476L84.002 141.026V108.474L108.476 84ZM140.407 164H109.097L85.502 140.405V109.095L109.097 85.5H140.407L164.002 109.095V140.405L140.407 164Z",
            fill: "#182139"
          }, void 0, !1, {
            fileName: "app/components/svg.tsx",
            lineNumber: 125,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
            className: "loader-sec-a",
            d: "M109.098 85.5H140.407L137.231 94.1214H112.728L109.098 85.5Z",
            fill: "#7DD8FF"
          }, void 0, !1, {
            fileName: "app/components/svg.tsx",
            lineNumber: 131,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
            className: "loader-sec-b",
            d: "M137.229 94.1214L140.406 85.5L164.001 109.095L155.834 112.725L137.229 94.1214Z",
            fill: "#7DD8FF"
          }, void 0, !1, {
            fileName: "app/components/svg.tsx",
            lineNumber: 136,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
            className: "loader-sec-c",
            d: "M155.833 112.726L164.001 109.096V140.405L155.833 137.229V112.726Z",
            fill: "#7DD8FF"
          }, void 0, !1, {
            fileName: "app/components/svg.tsx",
            lineNumber: 141,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
            className: "loader-sec-d",
            d: "M137.229 155.832L155.834 137.228L164.001 140.405L140.406 164L137.229 155.832Z",
            fill: "#7DD8FF"
          }, void 0, !1, {
            fileName: "app/components/svg.tsx",
            lineNumber: 146,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
            className: "loader-sec-a",
            d: "M112.728 155.833H137.231L140.407 164H109.098L112.728 155.833Z",
            fill: "#7DD8FF"
          }, void 0, !1, {
            fileName: "app/components/svg.tsx",
            lineNumber: 151,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
            className: "loader-sec-b",
            d: "M94.1233 137.228L112.727 155.832L109.097 164L85.502 140.405L94.1233 137.228Z",
            fill: "#7DD8FF"
          }, void 0, !1, {
            fileName: "app/components/svg.tsx",
            lineNumber: 156,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
            className: "loader-sec-c",
            d: "M85.502 109.096L94.1233 112.726V137.229L85.502 140.405V109.096Z",
            fill: "#7DD8FF"
          }, void 0, !1, {
            fileName: "app/components/svg.tsx",
            lineNumber: 161,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
            className: "loader-sec-d",
            d: "M109.097 85.5L112.727 94.1214L94.1233 112.725L85.502 109.095L109.097 85.5Z",
            fill: "#7DD8FF"
          }, void 0, !1, {
            fileName: "app/components/svg.tsx",
            lineNumber: 166,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
            d: "M111.119 90.0786H139.037L160.076 110.921V138.578L139.037 159.42H111.119L90.0801 138.578V110.921L111.119 90.0786Z",
            fill: "#121929"
          }, void 0, !1, {
            fileName: "app/components/svg.tsx",
            lineNumber: 171,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
            d: "M113.636 96.9993H136.37L153.503 113.832V136.167L136.37 152.999H113.636L96.5029 136.167V113.832L113.636 96.9993Z",
            fill: "#182139"
          }, void 0, !1, {
            fileName: "app/components/svg.tsx",
            lineNumber: 175,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/svg.tsx",
        lineNumber: 120,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/svg.tsx",
    lineNumber: 74,
    columnNumber: 5
  }, this)
}, void 0, !1, {
  fileName: "app/components/svg.tsx",
  lineNumber: 66,
  columnNumber: 3
}, this), FlagCz = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
  width: "71",
  height: "58",
  viewBox: "0 0 71 58",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
      d: "M2 2H47L69 23.6V56H24L2 34.4V2Z",
      fill: "#344F96"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 192,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M0 0H47.8177L71 22.7608V58H23.1823L0 35.2392V0ZM2 2V34.4L24 56H69V23.6L47 2H2Z",
      fill: "#71D4FF"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 193,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
      d: "M2 2L46.5 1L69 23V29H34.5L2 2Z",
      fill: "#71D4FF"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 199,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
      d: "M23.5 57H46.5H69.5L70 29H34.5L18.25 42.5L13.5 46.5L23.5 57Z",
      fill: "#2089B7"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 200,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M0 0H47.8177L71 22.7608V58H23.1823L0 35.2392V0ZM2 2V34.4L24 56H69V23.6L47 2H2Z",
      fill: "#71D4FF"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 204,
      columnNumber: 5
    }, this)
  ]
}, void 0, !0, {
  fileName: "app/components/svg.tsx",
  lineNumber: 185,
  columnNumber: 3
}, this), FlagEn = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
  width: "71",
  height: "58",
  viewBox: "0 0 71 58",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
      d: "M2 1H1V2V34.4V34.8196L1.29941 35.1136L23.2994 56.7136L23.5912 57H24H69H70V56V23.6V23.1804L69.7006 22.8864L47.7006 1.28644L47.4088 1H47H2Z",
      fill: "#71D4FF",
      stroke: "#71D4FF",
      strokeWidth: "2"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 221,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
      d: "M39 2H31V56H39V2Z",
      fill: "#2C7B9E"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 227,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
      d: "M69 25.0001L2 25V33H69V25.0001Z",
      fill: "#2C7B9E"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 228,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
      d: "M0 19V8L17 21H0V19Z",
      fill: "#344F96"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 229,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
      d: "M0 5.5V2H1.5L25 21H20L0 5.5Z",
      fill: "#2C7B9E"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 230,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
      d: "M28 2V13V21L4.5 2H28Z",
      fill: "#344F96"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 231,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
      d: "M70 39V50L53 37H70V39Z",
      fill: "#344F96"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 232,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
      d: "M70 52.5V56H68.5L45 37H50L70 52.5Z",
      fill: "#2C7B9E"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 233,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
      d: "M42 56V45V37L65.5 56H42Z",
      fill: "#344F96"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 234,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
      d: "M3 38L6 40L8.50034 43L16.5003 37H2L3 38Z",
      fill: "#344F96"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 235,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
      d: "M10.5 44L12.0002 47L12.7501 46.5L24.5001 37H19.5001L10.5 44Z",
      fill: "#2C7B9E"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 236,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
      d: "M28 56V37L15.75 46.5L14 48L22 56L24 57H27L28 56Z",
      fill: "#344F96"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 240,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
      d: "M68 21L62 14L52.9997 21L68 21Z",
      fill: "#344F96"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 241,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
      d: "M60 13L57.5 11L44.9996 21L49.9996 21L60 13Z",
      fill: "#2C7B9E"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 242,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
      d: "M42 2V13L42 21L53.75 11.5L56.6875 9.125L48.5 1L45.5 1L42.5 1L42 2Z",
      fill: "#344F96"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 243,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
      d: "M2 1H1V2V34.4V34.8196L1.29941 35.1136L23.2994 56.7136L23.5912 57H24H69H70V56V23.6V23.1804L69.7006 22.8864L47.7006 1.28644L47.4088 1H47H2Z",
      stroke: "#71D4FF",
      strokeWidth: "2"
    }, void 0, !1, {
      fileName: "app/components/svg.tsx",
      lineNumber: 247,
      columnNumber: 5
    }, this)
  ]
}, void 0, !0, {
  fileName: "app/components/svg.tsx",
  lineNumber: 214,
  columnNumber: 3
}, this);

// app/components/flag.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Flag({
  locale,
  setLocale
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    id: "flag",
    className: "-t-01 -r-01 absolute transition duration-300 ease-in-out hover:-translate-x-1 hover:translate-y-1 hover:scale-[1.1] hover:cursor-pointer",
    onClick: () => setLocale(
      (value) => value === "en" /* en */ ? value = "cz" /* cz */ : value = "en" /* en */
    ),
    children: locale === "en" /* en */ ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FlagCz, {}, void 0, !1, {
      fileName: "app/components/flag.tsx",
      lineNumber: 22,
      columnNumber: 30
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FlagEn, {}, void 0, !1, {
      fileName: "app/components/flag.tsx",
      lineNumber: 22,
      columnNumber: 43
    }, this)
  }, void 0, !1, {
    fileName: "app/components/flag.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

// app/components/navigation.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
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
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
    className: "relative w-full flex-col items-end justify-evenly",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "w-full flex-row px-8",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
          className: "nav-link text-2xl sm:text-xl md:text-2xl",
          children: t.menu.about
        }, void 0, !1, {
          fileName: "app/components/navigation.tsx",
          lineNumber: 34,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/navigation.tsx",
        lineNumber: 33,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "w-full flex-row px-8",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
          className: "nav-link text-2xl sm:text-xl md:text-2xl",
          children: t.menu.work
        }, void 0, !1, {
          fileName: "app/components/navigation.tsx",
          lineNumber: 39,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/navigation.tsx",
        lineNumber: 38,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "w-full flex-row px-8",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
          className: "nav-link text-2xl sm:text-xl md:text-2xl",
          children: t.menu.skills
        }, void 0, !1, {
          fileName: "app/components/navigation.tsx",
          lineNumber: 44,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/navigation.tsx",
        lineNumber: 43,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "w-full flex-row px-8",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
          className: "nav-link text-2xl sm:text-xl md:text-2xl",
          children: t.menu.contact
        }, void 0, !1, {
          fileName: "app/components/navigation.tsx",
          lineNumber: 49,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/navigation.tsx",
        lineNumber: 48,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "absolute h-full w-full flex-col justify-evenly",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react3.Link, {
            className: "nav-link-container h-full w-full flex-row px-8",
            to: "/",
            children: " "
          }, void 0, !1, {
            fileName: "app/components/navigation.tsx",
            lineNumber: 54,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react3.Link, {
            className: "nav-link-container h-full w-full flex-row px-8",
            to: "/work",
            children: " "
          }, void 0, !1, {
            fileName: "app/components/navigation.tsx",
            lineNumber: 57,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react3.Link, {
            className: "nav-link-container h-full w-full flex-row px-8",
            to: "/skills",
            children: " "
          }, void 0, !1, {
            fileName: "app/components/navigation.tsx",
            lineNumber: 63,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react3.Link, {
            className: "nav-link-container h-full w-full flex-row px-8",
            to: "/contact",
            children: " "
          }, void 0, !1, {
            fileName: "app/components/navigation.tsx",
            lineNumber: 69,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/navigation.tsx",
        lineNumber: 53,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flag, {
        locale,
        setLocale
      }, void 0, !1, {
        fileName: "app/components/navigation.tsx",
        lineNumber: 76,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/navigation.tsx",
    lineNumber: 32,
    columnNumber: 5
  }, this);
}

// app/components/terminal/terminal.tsx
var import_react5 = require("react");

// app/components/terminal/inputLine.tsx
var import_react4 = require("react"), import_react_router_dom = require("react-router-dom");

// app/data/locales/fields.ts
var fieldWithValue = (field, values) => field.replace(/{{([^{}]*)}}/g, (match, key) => values[key] || match);

// app/components/terminal/inputLine.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex-row gap-2",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex-col",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
          className: "text-2xs sm:text-sm",
          children: [
            "[ ",
            t.terminal.user,
            " ~ ] $"
          ]
        }, void 0, !0, {
          fileName: "app/components/terminal/inputLine.tsx",
          lineNumber: 143,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/terminal/inputLine.tsx",
        lineNumber: 142,
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
          className: "text-2xs word-spacing-lg bg-main w-full outline-none sm:text-sm",
          onChange: (value) => setCommand(value.target.value),
          value: command,
          onKeyDown: (e) => handleKeyEvent(e)
        }, void 0, !1, {
          fileName: "app/components/terminal/inputLine.tsx",
          lineNumber: 146,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/terminal/inputLine.tsx",
        lineNumber: 145,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/terminal/inputLine.tsx",
    lineNumber: 141,
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
function Terminal({ t }) {
  let defaultOutput = t.terminal.tooltip, [output, setOutput] = (0, import_react5.useState)(defaultOutput), [lines, setLines] = (0, import_react5.useState)([]), [commandHistory, setCommandHistory] = (0, import_react5.useState)([]), [lineKey, setLineKey] = (0, import_react5.useState)(0);
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
          t,
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
      let dataLines = data && [...data], isNotOutputLine = output === "no_output_line";
      return !isNotOutputLine && dataLines.push(/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OutputLine, {
        output
      }, lineKey, !1, {
        fileName: "app/components/terminal/terminal.tsx",
        lineNumber: 40,
        columnNumber: 26
      }, this)), dataLines.push(
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InputLine, {
          t,
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
    lineNumber: 57,
    columnNumber: 10
  }, this);
}

// app/components/stats.tsx
var import_react6 = require("react");

// app/utils/index.ts
var bipolarRandomState = () => {
  let y = Math.random(), status = !1;
  return y < 0.5 ? status = !1 : status = !0, status;
};

// app/components/stats.tsx
var import_react_use = require("react-use"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Stats({ t }) {
  let isPC = (0, import_react_use.useMedia)("(min-width: 1050px)", !1), isTablet = (0, import_react_use.useMedia)("(min-width: 640px)", !1);
  return (0, import_react6.useEffect)(() => {
    let setStartingStatusBarPosition = (timer, statusBar, i, statusEnd) => {
      var _a, _b;
      (_a = statusBar[i]) == null || _a.classList.remove("hidden"), (_b = statusBar[i]) == null || _b.classList.add("block"), i === statusBar.length - statusEnd && (clearInterval(timer), i = statusBar.length - statusEnd - 2, statusEnd = 1);
    }, randomStatusBarState = (statusBar, statusIndex, statusEnd) => {
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
    }, statusProgress = (className, delay) => {
      let statusBar = document.getElementsByClassName(className), statusBarIndex = 0, intervalStart = setInterval(() => {
        setStartingStatusBarPosition(
          intervalStart,
          statusBar,
          statusBarIndex,
          delay
        ), statusBarIndex++;
      }, 50);
      setInterval(
        () => randomStatusBarState(statusBar, statusBarIndex, delay),
        1e3
      );
    };
    if (isPC) {
      statusProgress("cpu", 13), statusProgress("mem", 15), statusProgress("net", 10), statusProgress("disk", 20);
      return;
    }
    isTablet && (statusProgress("mobile-stat-1", 10), statusProgress("mobile-stat-2", 7), statusProgress("mobile-stat-3", 5));
  }, [isPC, isTablet]), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: isPC ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "flex-row justify-center gap-5 min-[1370px]:justify-between",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
              className: "hidden text-lg min-[1370px]:block",
              children: t.stats.cpu
            }, void 0, !1, {
              fileName: "app/components/stats.tsx",
              lineNumber: 93,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "pt-01",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatusBar, {
                id: "cpu"
              }, void 0, !1, {
                fileName: "app/components/stats.tsx",
                lineNumber: 97,
                columnNumber: 15
              }, this)
            }, void 0, !1, {
              fileName: "app/components/stats.tsx",
              lineNumber: 96,
              columnNumber: 13
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/components/stats.tsx",
          lineNumber: 92,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "flex-row justify-center gap-5 min-[1370px]:justify-between",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
              className: "hidden text-lg min-[1370px]:block",
              children: t.stats.mem
            }, void 0, !1, {
              fileName: "app/components/stats.tsx",
              lineNumber: 101,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "pt-01",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatusBar, {
                id: "mem"
              }, void 0, !1, {
                fileName: "app/components/stats.tsx",
                lineNumber: 105,
                columnNumber: 15
              }, this)
            }, void 0, !1, {
              fileName: "app/components/stats.tsx",
              lineNumber: 104,
              columnNumber: 13
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/components/stats.tsx",
          lineNumber: 100,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "flex-row justify-center gap-5 min-[1370px]:justify-between",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
              className: "hidden text-lg min-[1370px]:block",
              children: t.stats.net
            }, void 0, !1, {
              fileName: "app/components/stats.tsx",
              lineNumber: 109,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "pt-01",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatusBar, {
                id: "net"
              }, void 0, !1, {
                fileName: "app/components/stats.tsx",
                lineNumber: 113,
                columnNumber: 15
              }, this)
            }, void 0, !1, {
              fileName: "app/components/stats.tsx",
              lineNumber: 112,
              columnNumber: 13
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/components/stats.tsx",
          lineNumber: 108,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "flex-row justify-center gap-5 min-[1370px]:justify-between",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
              className: "hidden text-lg min-[1370px]:block",
              children: t.stats.disk
            }, void 0, !1, {
              fileName: "app/components/stats.tsx",
              lineNumber: 117,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "pt-01",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatusBar, {
                id: "disk"
              }, void 0, !1, {
                fileName: "app/components/stats.tsx",
                lineNumber: 121,
                columnNumber: 15
              }, this)
            }, void 0, !1, {
              fileName: "app/components/stats.tsx",
              lineNumber: 120,
              columnNumber: 13
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/components/stats.tsx",
          lineNumber: 116,
          columnNumber: 11
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/components/stats.tsx",
      lineNumber: 91,
      columnNumber: 9
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "status-bar-cols flex-row justify-center gap-10",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatusBarCol, {
          id: "mobile-stat-1"
        }, void 0, !1, {
          fileName: "app/components/stats.tsx",
          lineNumber: 127,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatusBarCol, {
          id: "mobile-stat-2"
        }, void 0, !1, {
          fileName: "app/components/stats.tsx",
          lineNumber: 128,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StatusBarCol, {
          id: "mobile-stat-3"
        }, void 0, !1, {
          fileName: "app/components/stats.tsx",
          lineNumber: 129,
          columnNumber: 11
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/components/stats.tsx",
      lineNumber: 126,
      columnNumber: 9
    }, this)
  }, void 0, !1, {
    fileName: "app/components/stats.tsx",
    lineNumber: 89,
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        id: `matrix-col-${i}`,
        className: "matrix-col col-span-1 grid justify-items-center gap-1",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StackedElements, {
          count: 15,
          className: "matrix-row bg-main row-span-1 grid h-1 w-1 justify-items-center"
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
    className: "nav-matrix grid-cols-30 grid-rows-15 grid h-full w-full",
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
var tailwind_default = "/build/_assets/tailwind-27SJUHVU.css";

// app/styles/global.css
var global_default = "/build/_assets/global-OHYTPU47.css";

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
        meTxt: "It's me! I am a full-stack web developer from Czech Republic. My main focus are technologies built on top of the React.js framework, and Go or Node.js backend solutions to power my projects."
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
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), links = () => [
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
    lang: locale,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react9.Meta, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 78,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react9.Links, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 79,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 77,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", {
        className: "h-screen",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "t-01 r-01 border-b-sky-400 bg-main absolute hidden h-8 w-8 rotate-45 border-b-2 sm:block"
          }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 82,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "b-01 l-01 border-t-sky-400 bg-main absolute hidden h-8 w-8 rotate-45 border-t-2 sm:block"
          }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 83,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "b-01 r-01 border-l-sky-400 bg-main absolute hidden h-8 w-8 rotate-45 border-l-2 sm:block"
          }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 84,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "grid h-screen grid-cols-4 grid-rows-4 gap-4 p-8 sm:p-4 2xl:grid-cols-5",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "col-span-4 row-span-4 gap-4 overflow-y-scroll scrollbar-hide sm:col-span-3 sm:row-span-3 2xl:col-span-4",
                children: transition.state === "loading" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "grid h-full place-items-center",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Loader, {}, void 0, !1, {
                    fileName: "app/root.tsx",
                    lineNumber: 89,
                    columnNumber: 17
                  }, this)
                }, void 0, !1, {
                  fileName: "app/root.tsx",
                  lineNumber: 88,
                  columnNumber: 15
                }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react9.Outlet, {
                  context: { locale }
                }, void 0, !1, {
                  fileName: "app/root.tsx",
                  lineNumber: 92,
                  columnNumber: 15
                }, this)
              }, void 0, !1, {
                fileName: "app/root.tsx",
                lineNumber: 86,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "border-sky-400 row-span-4 hidden border-2 sm:grid sm:grid-cols-1 sm:grid-rows-4",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "row-span-3 sm:grid",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "relative grid-rows-2 sm:grid",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                          className: "row-span-1 grid h-full",
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Navigation, {
                            t,
                            locale,
                            setLocale
                          }, void 0, !1, {
                            fileName: "app/root.tsx",
                            lineNumber: 99,
                            columnNumber: 19
                          }, this)
                        }, void 0, !1, {
                          fileName: "app/root.tsx",
                          lineNumber: 98,
                          columnNumber: 17
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                          className: "border-t-sky-400 row-span-1 grid h-full border-t-2 p-8 2xl:px-3 2xl:py-8 3xl:p-8",
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stats, {
                            t
                          }, void 0, !1, {
                            fileName: "app/root.tsx",
                            lineNumber: 102,
                            columnNumber: 19
                          }, this)
                        }, void 0, !1, {
                          fileName: "app/root.tsx",
                          lineNumber: 101,
                          columnNumber: 17
                        }, this)
                      ]
                    }, void 0, !0, {
                      fileName: "app/root.tsx",
                      lineNumber: 97,
                      columnNumber: 15
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/root.tsx",
                    lineNumber: 96,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "row-span-1 w-full px-8 pt-4 sm:grid",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Matrix, {}, void 0, !1, {
                      fileName: "app/root.tsx",
                      lineNumber: 107,
                      columnNumber: 15
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/root.tsx",
                    lineNumber: 106,
                    columnNumber: 13
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/root.tsx",
                lineNumber: 95,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                id: "terminal-container",
                className: "border-sky-400 col-span-3 hidden overflow-y-scroll border-2 p-4 scrollbar-hide sm:grid 2xl:col-span-4",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Terminal, {
                  t
                }, void 0, !1, {
                  fileName: "app/root.tsx",
                  lineNumber: 114,
                  columnNumber: 13
                }, this)
              }, void 0, !1, {
                fileName: "app/root.tsx",
                lineNumber: 110,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/root.tsx",
            lineNumber: 85,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "absolute bottom-0 block w-full p-4 sm:hidden",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "mobile-menu-corner-tl border-r-sky-400 bg-main absolute border-r-2"
              }, void 0, !1, {
                fileName: "app/root.tsx",
                lineNumber: 118,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "mobile-menu-corner-tr border-r-sky-400 bg-main absolute border-r-2"
              }, void 0, !1, {
                fileName: "app/root.tsx",
                lineNumber: 119,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "mobile-menu-corner-br border-r-sky-400 bg-main absolute border-r-2"
              }, void 0, !1, {
                fileName: "app/root.tsx",
                lineNumber: 120,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "mobile-menu-corner-bl border-r-sky-400 bg-main absolute border-r-2"
              }, void 0, !1, {
                fileName: "app/root.tsx",
                lineNumber: 121,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "p-4",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: `border-sky-400 bg-main grid content-end border-2 ${mobileMenuOpen && "h-more"}`,
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "grid",
                      children: [
                        mobileNavigationOpen && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Navigation, {
                          t,
                          locale,
                          setLocale
                        }, void 0, !1, {
                          fileName: "app/root.tsx",
                          lineNumber: 131,
                          columnNumber: 19
                        }, this),
                        mobileTerminalOpen && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Terminal, {
                          t
                        }, void 0, !1, {
                          fileName: "app/root.tsx",
                          lineNumber: 133,
                          columnNumber: 40
                        }, this)
                      ]
                    }, void 0, !0, {
                      fileName: "app/root.tsx",
                      lineNumber: 129,
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
                              className: "scale-75",
                              alt: "icon-terminal"
                            }, void 0, !1, {
                              fileName: "app/root.tsx",
                              lineNumber: 145,
                              columnNumber: 21
                            }, this)
                          }, void 0, !1, {
                            fileName: "app/root.tsx",
                            lineNumber: 137,
                            columnNumber: 19
                          }, this),
                          mobileMenuOpen && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                            className: "h-20 w-6/12 flex-col items-center justify-center bg-blue",
                            onClick: () => {
                              setMobileMenuOpen(!1), mobileNavigationOpen && setMobileNavigationOpen(!1), mobileTerminalOpen && setMobileTerminalOpen(!1);
                            },
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                              src: "/svg/nav-cross.svg",
                              className: "scale-75",
                              alt: "icon-cross"
                            }, void 0, !1, {
                              fileName: "app/root.tsx",
                              lineNumber: 160,
                              columnNumber: 23
                            }, this)
                          }, void 0, !1, {
                            fileName: "app/root.tsx",
                            lineNumber: 152,
                            columnNumber: 21
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                            className: "h-20 w-3/12 flex-col items-center justify-center bg-blue pl-1",
                            onClick: () => {
                              setMobileMenuOpen(!0), mobileTerminalOpen && setMobileTerminalOpen(!1), setMobileNavigationOpen(!0);
                            },
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                              src: "/svg/nav-menu.svg",
                              className: "scale-75",
                              alt: "icon-menu"
                            }, void 0, !1, {
                              fileName: "app/root.tsx",
                              lineNumber: 175,
                              columnNumber: 21
                            }, this)
                          }, void 0, !1, {
                            fileName: "app/root.tsx",
                            lineNumber: 167,
                            columnNumber: 19
                          }, this)
                        ]
                      }, void 0, !0, {
                        fileName: "app/root.tsx",
                        lineNumber: 136,
                        columnNumber: 17
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/root.tsx",
                      lineNumber: 135,
                      columnNumber: 15
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/root.tsx",
                  lineNumber: 124,
                  columnNumber: 13
                }, this)
              }, void 0, !1, {
                fileName: "app/root.tsx",
                lineNumber: 122,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/root.tsx",
            lineNumber: 117,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react9.Scripts, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 186,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react9.LiveReload, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 187,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 81,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 76,
    columnNumber: 5
  }, this);
}

// app/routes/api/image.ts
var image_exports = {};
__export(image_exports, {
  fetchImage: () => fetchImage,
  loader: () => loader2
});
var import_os = __toESM(require("os")), import_path = __toESM(require("path")), import_server2 = require("remix-image/server"), import_remix_image_sharp = require("remix-image-sharp"), fetchImage = async (asset, url, options, basePath) => url.startsWith("/") && (url.length === 1 || url[1] !== "/") ? (0, import_server2.fsResolver)(asset, url, options, basePath) : (0, import_server2.fetchResolver)(asset, url, options, basePath), vercelUrl = process.env.VERCEL_URL || "", fixedVercelUrl = vercelUrl.startsWith("https") ? vercelUrl : `https://${vercelUrl}`, config = {
  selfUrl: "http://localhost:3000",
  cache: new import_server2.DiskCache({
    path: import_path.default.join(import_os.default.tmpdir(), "img")
  }),
  resolver: fetchImage,
  transformer: import_remix_image_sharp.sharpTransformer,
  basePath: "public"
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
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), action = async ({ request }) => {
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
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react10.Form, {
    method: "post",
    className: "gap-4 sm:grid sm:h-full sm:grid-cols-3 sm:grid-rows-4",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "t-01 l-01 border-r-sky-400 bg-main absolute hidden h-8 w-8 rotate-45 border-r-2 sm:block"
      }, void 0, !1, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 85,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "border-sky-400 relative col-span-1 row-span-2 grid border-2 py-4 sm:static sm:p-0",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "relative w-full flex-col justify-evenly",
            children: [
              socials.map((s, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "w-full flex-row items-center justify-start gap-6 px-8 sm:justify-center lg:justify-start",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                    src: `/svg/${s.icon}.svg`,
                    className: "h-10 scale-75",
                    alt: s.icon
                  }, void 0, !1, {
                    fileName: "app/routes/contact.tsx",
                    lineNumber: 93,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                    className: "contact-link block text-base sm:hidden sm:text-lg lg:block",
                    children: t.links[s.icon]
                  }, void 0, !1, {
                    fileName: "app/routes/contact.tsx",
                    lineNumber: 98,
                    columnNumber: 15
                  }, this)
                ]
              }, i, !0, {
                fileName: "app/routes/contact.tsx",
                lineNumber: 89,
                columnNumber: 13
              }, this)),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "absolute h-full w-full flex-col justify-evenly",
                children: socials.map((s, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                  href: s.url,
                  target: "__blank",
                  rel: "noreferrer noopener nofollow",
                  className: "contact-link-container h-full w-full flex-row px-8",
                  children: " "
                }, i, !1, {
                  fileName: "app/routes/contact.tsx",
                  lineNumber: 105,
                  columnNumber: 15
                }, this))
              }, void 0, !1, {
                fileName: "app/routes/contact.tsx",
                lineNumber: 103,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/contact.tsx",
            lineNumber: 87,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "contact-socials-corner-tr border-r-sky-400 bg-main absolute border-r-2 sm:hidden"
          }, void 0, !1, {
            fileName: "app/routes/contact.tsx",
            lineNumber: 117,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "contact-socials-corner-tl border-r-sky-400 bg-main absolute border-r-2 sm:hidden"
          }, void 0, !1, {
            fileName: "app/routes/contact.tsx",
            lineNumber: 118,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 86,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "col-span-2 row-span-2 my-4 grid h-full grid-rows-3 gap-4 sm:m-0",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: `relative h-20 w-full border-2 sm:h-full ${(_a = actionData == null ? void 0 : actionData.formErrors) != null && _a.name ? "border-error" : "border-sky-400"}`,
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: `bg-main absolute left-4 -top-3 h-10 px-2 text-sm sm:-top-2 ${((_b = actionData == null ? void 0 : actionData.formErrors) == null ? void 0 : _b.name) && "text-error"}`,
                children: (_c = actionData == null ? void 0 : actionData.formErrors) != null && _c.name ? (_d = actionData == null ? void 0 : actionData.formErrors) == null ? void 0 : _d.name : t.fields.name.title
              }, void 0, !1, {
                fileName: "app/routes/contact.tsx",
                lineNumber: 126,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                type: "text",
                name: "name",
                id: "",
                placeholder: t.fields.name.placeholder || "",
                spellCheck: "false",
                autoCorrect: "off",
                className: "bg-main h-full w-full px-16 text-center text-xl outline-none"
              }, void 0, !1, {
                fileName: "app/routes/contact.tsx",
                lineNumber: 135,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/contact.tsx",
            lineNumber: 121,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: `relative h-20 w-full border-2 sm:h-full ${(_e = actionData == null ? void 0 : actionData.formErrors) != null && _e.email ? "border-error" : "border-sky-400"}`,
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: `bg-main absolute left-4 -top-3 h-10 px-2 text-sm ${((_f = actionData == null ? void 0 : actionData.formErrors) == null ? void 0 : _f.email) && "text-error"}`,
                children: (_g = actionData == null ? void 0 : actionData.formErrors) != null && _g.email ? (_h = actionData == null ? void 0 : actionData.formErrors) == null ? void 0 : _h.email : t.fields.email.title
              }, void 0, !1, {
                fileName: "app/routes/contact.tsx",
                lineNumber: 150,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                type: "text",
                name: "email",
                id: "",
                placeholder: t.fields.email.placeholder || "",
                spellCheck: "false",
                autoCorrect: "off",
                className: "bg-main h-full w-full px-16 text-center text-xl outline-none"
              }, void 0, !1, {
                fileName: "app/routes/contact.tsx",
                lineNumber: 159,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/contact.tsx",
            lineNumber: 145,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: `relative h-20 w-full border-2 sm:h-full ${(_i = actionData == null ? void 0 : actionData.formErrors) != null && _i.phone ? "border-error" : "border-sky-400"}`,
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: `bg-main absolute left-4 -top-3 h-10 px-2 text-sm ${((_j = actionData == null ? void 0 : actionData.formErrors) == null ? void 0 : _j.phone) && "text-error"}`,
                children: (_k = actionData == null ? void 0 : actionData.formErrors) != null && _k.phone ? (_l = actionData == null ? void 0 : actionData.formErrors) == null ? void 0 : _l.phone : t.fields.phone.title
              }, void 0, !1, {
                fileName: "app/routes/contact.tsx",
                lineNumber: 174,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                type: "text",
                name: "phone",
                id: "",
                placeholder: t.fields.phone.placeholder || "",
                spellCheck: "false",
                autoCorrect: "off",
                className: "bg-main h-full w-full px-16 text-center text-xl outline-none"
              }, void 0, !1, {
                fileName: "app/routes/contact.tsx",
                lineNumber: 183,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/contact.tsx",
            lineNumber: 169,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 120,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: `border-red relative col-span-3 row-span-2 grid grid-rows-4 border-2 ${(_m = actionData == null ? void 0 : actionData.formErrors) != null && _m.message ? "border-error" : "border-sky-400"}`,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
            name: "message",
            id: "",
            spellCheck: "false",
            autoCorrect: "off",
            placeholder: t.fields.messagePlaceholder || "",
            cols: 30,
            rows: 10,
            className: "bg-main row-span-3 mb-6 grid resize-none p-10 text-xl outline-none"
          }, void 0, !1, {
            fileName: "app/routes/contact.tsx",
            lineNumber: 199,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "absolute bottom-0 right-0 row-span-1 grid h-16 w-full grid-cols-3 grid-rows-1 lg:h-20",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
              type: "submit",
              className: "contact-button border-sky-400 relative col-span-2 col-start-2 row-span-1 grid content-center justify-items-center border-2 border-r-0 border-b-0",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "border-r-sky-400 bg-main absolute -top-4 -left-4 hidden h-8 w-8 rotate-45 border-r-2 sm:block"
                }, void 0, !1, {
                  fileName: "app/routes/contact.tsx",
                  lineNumber: 214,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  className: "text-2xl",
                  children: t.fields.send
                }, void 0, !1, {
                  fileName: "app/routes/contact.tsx",
                  lineNumber: 215,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/contact.tsx",
              lineNumber: 210,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/contact.tsx",
            lineNumber: 209,
            columnNumber: 9
          }, this),
          ((_n = actionData == null ? void 0 : actionData.formErrors) == null ? void 0 : _n.phone) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "text-error bg-main absolute left-4 -top-3 h-10 px-2 text-sm",
            children: actionData.formErrors.message
          }, void 0, !1, {
            fileName: "app/routes/contact.tsx",
            lineNumber: 219,
            columnNumber: 11
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 194,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/contact.tsx",
    lineNumber: 81,
    columnNumber: 5
  }, this);
}

// app/routes/skills.tsx
var skills_exports = {};
__export(skills_exports, {
  default: () => Skills
});
var import_remix_image2 = require("remix-image"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Skills() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "grid grid-cols-2 gap-20 md:grid-cols-3 xl:grid-cols-4 2xl:gap-40",
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
    className: "flex-row flex-wrap gap-4 lg:flex-nowrap",
    children: projects.map((project, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "work-card border-sky-400 w-work-card max-h-full flex-col overflow-hidden border-2",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "relative",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
              href: project.url,
              target: "_blank",
              rel: "noreferrer noopener nofollow",
              className: "overflow-hidden",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "relative",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_remix_image3.Image, {
                    loaderUrl: "/api/image",
                    src: project.imgUrl,
                    dprVariants: [1, 3],
                    className: "w-full"
                  }, void 0, !1, {
                    fileName: "app/routes/work.tsx",
                    lineNumber: 20,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "work-card-cover absolute top-0 hidden h-48 w-full 2xl:h-56",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                      className: "absolute bottom-8 left-8 text-lg font-semibold",
                      children: project.name
                    }, void 0, !1, {
                      fileName: "app/routes/work.tsx",
                      lineNumber: 27,
                      columnNumber: 19
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/routes/work.tsx",
                    lineNumber: 26,
                    columnNumber: 17
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/routes/work.tsx",
                lineNumber: 19,
                columnNumber: 15
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/work.tsx",
              lineNumber: 13,
              columnNumber: 13
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
                lineNumber: 40,
                columnNumber: 17
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/work.tsx",
              lineNumber: 34,
              columnNumber: 15
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/work.tsx",
          lineNumber: 12,
          columnNumber: 11
        }, this),
        i === 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "border-r-sky-400 bg-main t-01 l-01 absolute hidden h-8 w-8 rotate-45 border-r-2 sm:block"
        }, void 0, !1, {
          fileName: "app/routes/work.tsx",
          lineNumber: 50,
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
var assets_manifest_default = { version: "a1811aa2", entry: { module: "/build/entry.client-VD5M43FA.js", imports: ["/build/_shared/chunk-GZLMHRJT.js", "/build/_shared/chunk-VFZ2QWLC.js", "/build/_shared/chunk-4IYZMDEG.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-KU3V4QO2.js", imports: ["/build/_shared/chunk-N2INDCMC.js", "/build/_shared/chunk-7BWQAFJL.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api/image": { id: "routes/api/image", parentId: "root", path: "api/image", index: void 0, caseSensitive: void 0, module: "/build/routes/api/image-H3LVIN35.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/contact": { id: "routes/contact", parentId: "root", path: "contact", index: void 0, caseSensitive: void 0, module: "/build/routes/contact-WVOXZMVU.js", imports: ["/build/_shared/chunk-M4AVGPZZ.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-XJFZG46T.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/skills": { id: "routes/skills", parentId: "root", path: "skills", index: void 0, caseSensitive: void 0, module: "/build/routes/skills-L2TR734H.js", imports: ["/build/_shared/chunk-VDWFF27J.js", "/build/_shared/chunk-M4AVGPZZ.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/work": { id: "routes/work", parentId: "root", path: "work", index: void 0, caseSensitive: void 0, module: "/build/routes/work-7RAUXPEW.js", imports: ["/build/_shared/chunk-VDWFF27J.js", "/build/_shared/chunk-M4AVGPZZ.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-A1811AA2.js" };

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
