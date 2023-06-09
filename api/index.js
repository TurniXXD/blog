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
        fill: "#7dd8ff"
      }, void 0, !1, {
        fileName: "app/components/svg.tsx",
        lineNumber: 14,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        d: "M181 0H170V2H179V23H170V25H181V0Z",
        fill: "#7dd8ff"
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
        fill: "#7dd8ff"
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
        fill: "#7dd8ff"
      }, void 0, !1, {
        fileName: "app/components/svg.tsx",
        lineNumber: 45,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        d: "M23.0002 179V170H25.0002V181H0V170H2V179H23.0002Z",
        fill: "#7dd8ff"
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
        fill: "#7dd8ff"
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
  setLocale,
  setMobileMenuOpen
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
    className: "relative w-full flex-col justify-evenly gap-8 sm:items-end sm:gap-0",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "mx-auto flex-row px-4 sm:w-full lg:px-8 md:mt-8",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
          className: "nav-link text-3xl sm:text-xl md:text-2xl",
          children: t.menu.services
        }, void 0, !1, {
          fileName: "app/components/navigation.tsx",
          lineNumber: 36,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/navigation.tsx",
        lineNumber: 35,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "mx-auto flex-row px-4 sm:w-full lg:px-8",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
          className: "nav-link text-3xl sm:text-xl md:text-2xl",
          children: t.menu.work
        }, void 0, !1, {
          fileName: "app/components/navigation.tsx",
          lineNumber: 41,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/navigation.tsx",
        lineNumber: 40,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "mx-auto flex-row px-4 sm:w-full lg:px-8",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
          className: "nav-link text-3xl sm:text-xl md:text-2xl",
          children: t.menu.skills
        }, void 0, !1, {
          fileName: "app/components/navigation.tsx",
          lineNumber: 46,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/navigation.tsx",
        lineNumber: 45,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "mx-auto flex-row px-4 pb-8 sm:w-full sm:pb-0 lg:px-8",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
          className: "nav-link text-3xl sm:text-xl md:text-2xl",
          children: t.menu.contact
        }, void 0, !1, {
          fileName: "app/components/navigation.tsx",
          lineNumber: 51,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/navigation.tsx",
        lineNumber: 50,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "absolute h-full w-full flex-col justify-evenly",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react3.Link, {
            className: "nav-link-container h-full w-full flex-row sm:px-4 lg:px-8",
            to: "/",
            onClick: () => setMobileMenuOpen && setMobileMenuOpen(!1),
            children: " "
          }, void 0, !1, {
            fileName: "app/components/navigation.tsx",
            lineNumber: 56,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react3.Link, {
            className: "nav-link-container h-full w-full flex-row px-4 lg:px-8",
            to: "/work",
            onClick: () => setMobileMenuOpen && setMobileMenuOpen(!1),
            children: " "
          }, void 0, !1, {
            fileName: "app/components/navigation.tsx",
            lineNumber: 63,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react3.Link, {
            className: "nav-link-container h-full w-full flex-row px-4 lg:px-8",
            to: "/skills",
            onClick: () => setMobileMenuOpen && setMobileMenuOpen(!1),
            children: " "
          }, void 0, !1, {
            fileName: "app/components/navigation.tsx",
            lineNumber: 70,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react3.Link, {
            className: "nav-link-container h-full w-full flex-row px-4 lg:px-8",
            to: "/contact",
            onClick: () => setMobileMenuOpen && setMobileMenuOpen(!1),
            children: " "
          }, void 0, !1, {
            fileName: "app/components/navigation.tsx",
            lineNumber: 77,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/navigation.tsx",
        lineNumber: 55,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "hidden sm:block",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flag, {
          locale,
          setLocale
        }, void 0, !1, {
          fileName: "app/components/navigation.tsx",
          lineNumber: 86,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/navigation.tsx",
        lineNumber: 85,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/navigation.tsx",
    lineNumber: 34,
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
        commandProcessed[1] ? /.txt/g.test(commandProcessed[1]) ? commandProcessed[1] === t.terminal.commands.ls.meditationsTxt || commandProcessed[1] === t.terminal.commands.ls.meTxt || commandProcessed[1] === t.terminal.commands.ls.startupGuide ? handleOutput(
          fieldWithValue(t.terminal.messages.isFile, {
            file: commandProcessed[1]
          })
        ) : handleOutput(
          fieldWithValue(t.terminal.messages.cannotFind, {
            dir: commandProcessed[1]
          })
        ) : commandProcessed[1] === t.terminal.commands.ls.services || commandProcessed[1] === t.terminal.commands.ls.work || commandProcessed[1] === t.terminal.commands.ls.skills || commandProcessed[1] === t.terminal.commands.ls.contact ? (navigate(
          commandProcessed[1] === t.terminal.commands.ls.services ? "/" : commandProcessed[1]
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
              <a href="/"><strong>${t.terminal.commands.ls.services}</strong></a> <br/>
              <a href="/work"><strong>${t.terminal.commands.ls.work}</strong></a> <br/>
              <a href="/skills"><strong>${t.terminal.commands.ls.skills}</strong></a> <br/>
              <a href="/contact"><strong>${t.terminal.commands.ls.contact}</strong></a> <br/>
              ${t.terminal.commands.ls.meTxt} <br/>
              ${t.terminal.commands.ls.meditationsTxt} <br/>
              ${t.terminal.commands.ls.startupGuide}
            `;
          handleOutput(dirs);
        }
      else
        commandProcessed[0] === "cat" ? commandProcessed[1] === t.terminal.commands.ls.meTxt ? handleOutput(t.terminal.commands.cat.meTxt) : commandProcessed[1] === t.terminal.commands.ls.meditationsTxt ? handleOutput(t.terminal.commands.cat.meditationsTxt) : commandProcessed[1] === t.terminal.commands.ls.startupGuide ? handleOutput(t.terminal.commands.cat.startupGuide) : commandProcessed[1] ? commandProcessed[1] === t.terminal.commands.ls.services || commandProcessed[1] === t.terminal.commands.ls.work || commandProcessed[1] === t.terminal.commands.ls.skills || commandProcessed[1] === t.terminal.commands.ls.contact ? handleOutput(
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
          lineNumber: 152,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/terminal/inputLine.tsx",
        lineNumber: 151,
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
          lineNumber: 155,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/terminal/inputLine.tsx",
        lineNumber: 154,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/terminal/inputLine.tsx",
    lineNumber: 150,
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
              className: "hidden text-xl min-[1370px]:block",
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
              className: "hidden text-xl min-[1370px]:block",
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
              className: "hidden text-xl min-[1370px]:block",
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
              className: "hidden text-xl min-[1370px]:block",
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
var tailwind_default = "/build/_assets/tailwind-UUYCQ7MC.css";

// app/styles/global.css
var global_default = "/build/_assets/global-SDRHPUYE.css";

// app/root.tsx
var import_mail = __toESM(require("@sendgrid/mail"));

// app/data/locales/common/common.ts
var cz = {
  menu: {
    services: "Slu\u017Eby",
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
        services: "slu\u017Eby",
        work: "projekty",
        skills: "dovednosti",
        contact: "kontakt",
        meTxt: "j\xE1.txt",
        meditationsTxt: "moje_meditace.txt",
        startupGuide: "pr\u016Fvodce_startupem.txt"
      },
      cat: {
        meTxt: "Jsem full-stack web developer z \u010Cesk\xE9 republiky zam\u011B\u0159uj\xEDc\xED se p\u0159edev\u0161\xEDm na technologie postaven\xE9 na frameworku React.js, a backendov\xE9 \u0159e\u0161en\xED v Go nebo Node.js.",
        meditationsTxt: `Smrti bychom se nem\u011Bli b\xE1t, je tu naprost\xE1 nicota, kterou nebudete muset za\u017E\xEDt ve srovn\xE1n\xED s jak\xFDmkoli jin\xFDm strachem ov\u011B\u0159en\xFDm zku\u0161enostmi. Nen\xED to ani strach z nezn\xE1m\xE9ho, co vede ke smrti, ale strach, \u017Ee znalosti, kter\xE9 jste z\xEDskali, nebudou zachov\xE1ny. Na evolu\u010Dn\xED \xFArovni bylo sd\xEDlen\xED znalost\xED reprodukc\xED kl\xED\u010Dem k dne\u0161n\xEDmu \u017Eivotu. Na molekul\xE1rn\xED \xFArovni v\u0161e, co bu\u0148ky d\u011Blaj\xED, je sd\xEDlet informace nebo zem\u0159\xEDt. Sd\xEDlet znalosti znamen\xE1 st\xE1t se nesmrteln\xFDm.

        Je d\u016Fle\u017Eit\xE9 stanovit, \u017Ee znalosti by nem\u011Bly b\xFDt n\u011B\u010D\xEDm, co je \u010Dlov\u011Bku vnuceno, m\u011Blo by to b\xFDt takov\xE9, aby se \u010Dlov\u011Bk v\xEDce soust\u0159edil na sd\xEDlen\xED a zlep\u0161ov\xE1n\xED z\xEDskan\xFDch znalost\xED. Pr\xE1v\u011B te\u010F je jedine\u010Dn\xE1 dovednost to, co vede \u010Dlov\u011Bka na cestu bohatstv\xED, ale je to pouze do bodu, kdy ho nelze snadno nahradit nebo kdy si vytvo\u0159\xED dostatek bohatstv\xED k dosa\u017Een\xED nez\xE1vislosti. Z v\u011Bt\u0161\xEDho hlediska jedin\xE9, o co \u010Dlov\u011Bk tou\u017E\xED, je zdrav\xED, bohatstv\xED a \u0161t\u011Bst\xED, ale co je to bohatstv\xED, kdy\u017E \u010Dlov\u011Bk v\u017Edy tou\u017E\xED po tom, co je ciz\xED, a po\u010D\xEDt\xE1 jen to, co je\u0161t\u011B mus\xED z\xEDskat, a nikdy ne to, co u\u017E m\xE1. Jedin\u011B tak, \u017Ee bude \u017E\xEDt a nebude p\u0159\xEDli\u0161 hodnotit v\u011Bci, kter\xE9 mu mohou b\xFDt kdykoli odebr\xE1ny, m\u016F\u017Ee objevit ten prav\xFD, neot\u0159esiteln\xFD klid a spokojenost.
       
        P\u0159ed z\xEDsk\xE1n\xEDm znalost\xED by m\u011Bla b\xFDt prok\xE1z\xE1na pravdivost argumentu, ale jak m\u016F\u017Eeme rozli\u0161it pravdu od klamn\xFDch l\u017E\xED? Kdy\u017E \u010Dlov\u011Bk l\u017Ee, sna\u017E\xED se lidi v\xEDce p\u0159esv\u011Bd\u010Dit o sv\xE9m argumentu a \u017Ee neexistuje \u017E\xE1dn\xE1 mo\u017Enost, \u017Ee by to nebylo spr\xE1vn\xE9, pak pokud mluvil pravdu. V prudk\xFDch h\xE1dk\xE1ch n\xE1s \u0159e\u010D t\u011Bla u\u010D\xED, \u017Ee \u010Dlov\u011Bk bude pou\u017E\xEDvat otev\u0159enou \u0159e\u010D t\u011Bla d\u016Frazn\u011Bji (bouch\xE1 rukama do stolu s otev\u0159en\xFDmi dlan\u011Bmi, pou\u017E\xEDv\xE1 v\xEDce gest), kdy\u017E se ze v\u0161ech sil sna\u017E\xED vyj\xE1d\u0159it sv\u016Fj n\xE1zor. Nejhor\u0161\xED sc\xE9n\xE1\u0159 je, pokud \u010Dlov\u011Bk v\u011B\u0159\xED, \u017Ee to, co sd\xEDl\xED, je pravda, co\u017E mu d\xE1v\xE1 jistotu o jeho \u010Dinech. To se m\u016F\u017Ee st\xE1t pouze \u010Dlov\u011Bku, kter\xFD se slep\u011B pod\u0159\xEDdil informac\xEDm, ani\u017E by o tom p\u0159em\xFD\u0161lel. Zabij\xE1kem duch\u016F je tak\xE9 v\u011B\u0159it v n\xE1bo\u017Eenstv\xED nebo um\u011Ble vytvo\u0159en\xE1 p\u0159esv\u011Bd\u010Den\xED v\xEDce ne\u017E ve filozofii a psychologii.
       
        \u010Clov\u011Bk, kter\xFD nev\xED, do kter\xE9ho p\u0159\xEDstavu pluje, neshled\xE1v\xE1 \u017E\xE1dn\xFD p\u0159\xEDstav v\xFDhodn\xFD. Jin\xFDmi slovy, \u017Eivot beze smyslu znamen\xE1 v\u017Edy se ocitnout v m\xEDst\u011B nejist\xE9 budoucnosti, kr\xE1tkodob\xE9ho uspokojen\xED, bez sebereflexe a bez jak\xE9koli mo\u017Enosti \xFAniku. \u010C\xEDm d\u0159\xEDve p\u0159estanete d\xE1vat lidem \u0161anci zni\u010Dit va\u0161i p\u0159edstavivost, t\xEDm d\u0159\xEDve najdete sv\u016Fj v\xFDznam. V p\u0159edstav\xE1ch trp\xEDme v\xEDce ne\u017E v re\xE1ln\xE9m \u017Eivot\u011B, proto\u017Ee skute\u010Dn\xFD \u017Eivot je v\xFDsledkem p\u0159edstavivosti, pokud si dok\xE1\u017Eete spr\xE1vn\u011B nastavit sv\xE9 my\u0161len\xED. Ur\u010Dete, co bude v\xFDsledkem va\u0161ich \u010Din\u016F, ne\u017E se vyd\xE1te na tuto cestu, jestli to p\u0159inese sv\u011Btu kolem v\xE1s n\u011Bjakou skute\u010Dnou hodnotu a zm\u011Bn\xED \u017Eivoty lid\xED, nebo jestli to jen pom\u016F\u017Ee rozto\u010Dit nekone\u010Dn\xE1 kola syst\xE9mu. Neztr\xE1cejte \u010Das mluven\xEDm o tom, jak\xFD je dobr\xFD mu\u017E, m\u011Bli byste j\xEDm b\xFDt. Kdy\u017E najdete sv\u016Fj v\xFDznam, dr\u017Ete se ho a v\u011Bnujte mu sto procent sv\xE9ho \xFAsil\xED. Brzy pochop\xEDte, \u017Ee pokud chcete j\xEDt rychle, jd\u011Bte sami, ale pokud chcete j\xEDt daleko, najd\u011Bte si spolehliv\xFD t\xFDm, kter\xFD bude sd\xEDlet va\u0161i vizi. Kdy\u017E pe\u010Dujete o sv\u016Fj c\xEDl, je t\u011B\u017Ek\xE9 sv\u011B\u0159it n\u011Bkomu p\xE9\u010Di o n\u011Bj, ale b\xFDt v\u0161ude znamen\xE1 neb\xFDt nikde a pomal\xFDm p\u0159ed\xE1v\xE1n\xEDm pod\u0159\xEDzen\xFDch \xFAkol\u016F jin\xFDm lidem se m\u016F\u017Eete soust\u0159edit na \u0161ir\u0161\xED obraz.
       
        Zab\xFDv\xE1me se marketingem, i kdy\u017E v\xEDme, \u017Ee v\u0161echny na\u0161e celebrity a idoly jsou pad\u011Blky. Pro\u010D plat\xEDme n\u011Bkoho, kdo um\xED kopat do m\xED\u010De v milionech, a l\xE9ka\u0159i a v\u011Bdci nedostanou prakticky nic. N\xE1\u0161 \xFAsudek nem\u016F\u017Ee b\xFDt takov\xFD, dokud tyto hodnoty nebudou obnoveny`,
        startupGuide: `1. Vytvo\u0159te strategickou s\xED\u0165 <br/>
        2. Najd\u011Bte probl\xE9m / N\u011Bkdo za v\xE1mi p\u0159ijde s probl\xE9mem / Pokud p\u0159ijdete s \u0159e\u0161en\xEDm nejprve ov\u011B\u0159te, \u017Ee existuje probl\xE9m, zam\u011B\u0159te se na B2B <br/>
        3. Ov\u011B\u0159te, \u017Ee probl\xE9m existuje s v\xEDce lidmi <br/>
        4. Najd\u011Bte \u0159e\u0161en\xED <br/>
        5. Ur\u010Dete c\xEDlov\xE9 publikum, bu\u010Fte konkr\xE9tn\xED, je v po\u0159\xE1dku vytv\xE1\u0159et r\u016Fzn\xE9 pl\xE1ny pro r\u016Fzn\xE9 c\xEDlov\xE9 skupiny <br/>
        6. Vytvo\u0159te \u0161t\xEDhl\xE9 pl\xE1tno a swot <br/>
        7. Validace probl\xE9m a anyl\xE1za trhu formou obvol\xE1n\xED potencion\xE1ln\xEDch z\xE1kazn\xEDk\u016F / Formul\xE1\u0159em /  P\u0159imou konzultac\xED s n\u011Bk\xFDm z c\xEDlov\xE9 skupiny <br/>
        8. Vytvo\u0159te MVP <br/>
        9. P\u0159ipojte se k sout\u011B\u017Ei / Akceler\xE1toru <br/>
        10. Najd\u011Bte investora <br/>`
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
    services: "Services",
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
        services: "services",
        work: "work",
        skills: "skills",
        contact: "contact",
        meTxt: "me.txt",
        meditationsTxt: "my_meditations.txt",
        startupGuide: "startup_guide.txt"
      },
      cat: {
        meTxt: "It's me! I am a full-stack web developer from Czech Republic. My main focus are technologies built on top of the React.js framework, and Go or Node.js backend solutions to power my projects.",
        meditationsTxt: `We shouldn't be afraid of death, there is absolute nothingness that you won't have to expirience compared to any other fear that is proven by experience. It is not even the fear of the unknown that proceeds death it's the fear that the knowledge that you gained won't be preserved. On the evolution level, sharing knowledge by reproducing, was the key to today's life. On a molecular level all that cells do is share information or die. To share knowledge is to become immortal.

        It's important to establish that knowledge shouldn't be something that is forced to a person, it should be of a kind that makes a person more focused on sharing and improving his gained knowledge. Right now unique skill is what leads a person to the path of wealth, but it is only to a point when person cannot be easilly replaced or when he establishes enough wealth to reach independence. From a bigger point of view the only things that a person strives for are health, wealth and happiness, but what is wealth if person is always after what is another's and only counts what he has yet to get, and never what he already has. Only by living thus, and not setting too high value on things which can at any moment be taken away from him, can he discover that true, unshakable peace and contentment.
        
        Before acquiring knowledge the truthfulness of an argument should be established, but how can we tell the truth from deceptive lies? When person lies he is trying to convince people more about his argument, and that there is no possibilty that it isn't right, then if he was telling the truth. In heated arguments body language teaches us that person will use open body language more forcefully (banging his hands on the table with his palms open, using more gestures) when he tries his best to express his opinion. The worst scenario is if a person believes that what he shares is the truth, which gaves him assurance about his acts. This can only happen to a person who blindly subjugated to the information without contemplating about it. It is also a spirit killer to believe in religion or artificially created beliefs more than philosophy and psychology.
        
        A man who knows not to which port he sails doesn't find any port favorable. In other words, living without meaning is always finding yourself in a place of uncertain future, short lasting gratification, no self reflection and without any possibility of escape. The sooner you begin to stop giving people chances to destroy your imagination, the sooner you can find your meaning. We suffer more in imagination then in real life, because real life is the result of imagination, if you can set you mindset properly. Determine what will be the result of your doings before going on this path, if it will bring any real value to the world around you and change people's lives, or if it will just help to spin the neverending wheels of the system. Don't waste your time talking about what good man is like, you should be one. When you find your meaning stick to it and give it hundred percent of your effort. Soon you'll understand that if you wanna go fast then go alone, but if you wanna go far then go find a reliable team that will share your vision. When you nurture your goal it's hard to entrust someone with care of it, but to be everywhere is to be nowhere, and by slowly passing on subordinate tasks to other people you can focus on the bigger picture.
        
        We pursue marketing even though we know all of our celebrities and idols are counterfits. Why are we paying off someone who can kick ball in millions, and doctors and scientists get practically nothing. Our judgement cannot be thus until these values are restored`,
        startupGuide: `1. Create strategic network <br/>
        2. Find problem / Someone comes to you with a problem / If you come up with a solutions first validate that there is a problem, focus on B2B <br/>
        3. Validate that a problem exists with more people <br/>
        4. Find solutions <br/>
        5. Determine target audience, be specific it is okay to create different plans for different audiences <br/>
        6. Create lean canvas and swot <br/>
        7. Validate market direct approach / Call / Form / Consult with someone from target group <br/>
        8. Create MVP <br/>
        9. Join contest / Accelerator <br/>
        10. Find investor <br/>`
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
            lineNumber: 79,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react9.Links, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 80,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 78,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", {
        className: "h-screen",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "t-01 r-01 border-b-sky-400 bg-main absolute hidden h-8 w-8 rotate-45 border-b-2 sm:block"
          }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 83,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "b-01 l-01 border-t-sky-400 bg-main absolute hidden h-8 w-8 rotate-45 border-t-2 sm:block"
          }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 84,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "b-01 r-01 border-l-sky-400 bg-main absolute hidden h-8 w-8 rotate-45 border-l-2 sm:block"
          }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 85,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "grid h-screen grid-cols-4 grid-rows-4 gap-4 p-8 sm:p-4 2xl:grid-cols-5",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "col-span-4 row-span-4 gap-4 overflow-y-scroll pb-24 scrollbar-hide sm:col-span-3 sm:row-span-3 sm:pb-0 2xl:col-span-4",
                children: transition.state === "loading" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "grid h-full place-items-center",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Loader, {}, void 0, !1, {
                    fileName: "app/root.tsx",
                    lineNumber: 90,
                    columnNumber: 17
                  }, this)
                }, void 0, !1, {
                  fileName: "app/root.tsx",
                  lineNumber: 89,
                  columnNumber: 15
                }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react9.Outlet, {
                  context: { locale }
                }, void 0, !1, {
                  fileName: "app/root.tsx",
                  lineNumber: 93,
                  columnNumber: 15
                }, this)
              }, void 0, !1, {
                fileName: "app/root.tsx",
                lineNumber: 87,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "border-sky-400 row-span-4 hidden border-2 sm:grid sm:grid-cols-1 sm:grid-rows-4",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "row-span-4 sm:grid lg:row-span-3",
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
                            lineNumber: 100,
                            columnNumber: 19
                          }, this)
                        }, void 0, !1, {
                          fileName: "app/root.tsx",
                          lineNumber: 99,
                          columnNumber: 17
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                          className: "border-t-sky-400 row-span-1 grid h-full place-items-center border-t-2 p-6 lg:place-items-stretch 2xl:px-3 2xl:py-8 3xl:p-8",
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stats, {
                            t
                          }, void 0, !1, {
                            fileName: "app/root.tsx",
                            lineNumber: 103,
                            columnNumber: 19
                          }, this)
                        }, void 0, !1, {
                          fileName: "app/root.tsx",
                          lineNumber: 102,
                          columnNumber: 17
                        }, this)
                      ]
                    }, void 0, !0, {
                      fileName: "app/root.tsx",
                      lineNumber: 98,
                      columnNumber: 15
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/root.tsx",
                    lineNumber: 97,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "row-span-1 hidden w-full px-8 pt-4 lg:grid",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Matrix, {}, void 0, !1, {
                      fileName: "app/root.tsx",
                      lineNumber: 108,
                      columnNumber: 15
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/root.tsx",
                    lineNumber: 107,
                    columnNumber: 13
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/root.tsx",
                lineNumber: 96,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                id: "terminal-container",
                className: "border-sky-400 col-span-3 hidden overflow-y-scroll border-2 p-4 scrollbar-hide sm:grid 2xl:col-span-4",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Terminal, {
                  t
                }, void 0, !1, {
                  fileName: "app/root.tsx",
                  lineNumber: 115,
                  columnNumber: 13
                }, this)
              }, void 0, !1, {
                fileName: "app/root.tsx",
                lineNumber: 111,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/root.tsx",
            lineNumber: 86,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "absolute bottom-0 block w-full p-4 sm:hidden",
            children: [
              mobileMenuOpen && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "mobile-menu-corner-tl border-r-sky-400 bg-main top-26 absolute border-r-2"
                  }, void 0, !1, {
                    fileName: "app/root.tsx",
                    lineNumber: 121,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "mobile-menu-corner-tr border-r-sky-400 bg-main top-26 absolute border-r-2"
                  }, void 0, !1, {
                    fileName: "app/root.tsx",
                    lineNumber: 124,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/root.tsx",
                lineNumber: 120,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "mobile-menu-corner-br border-r-sky-400 bg-main absolute border-r-2"
              }, void 0, !1, {
                fileName: "app/root.tsx",
                lineNumber: 129,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "mobile-menu-corner-bl border-r-sky-400 bg-main absolute border-r-2"
              }, void 0, !1, {
                fileName: "app/root.tsx",
                lineNumber: 132,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: `p-4 ${mobileMenuOpen && "pt-24"}`,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: `border-sky-400 bg-main grid content-end border-2 ${mobileMenuOpen && "h-mobile-menu"}`,
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "flex-row",
                      children: [
                        mobileMenuOpen && mobileNavigationOpen && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Navigation, {
                          t,
                          locale,
                          setLocale,
                          setMobileMenuOpen
                        }, void 0, !1, {
                          fileName: "app/root.tsx",
                          lineNumber: 144,
                          columnNumber: 19
                        }, this),
                        mobileMenuOpen && mobileTerminalOpen && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Terminal, {
                          t
                        }, void 0, !1, {
                          fileName: "app/root.tsx",
                          lineNumber: 146,
                          columnNumber: 58
                        }, this)
                      ]
                    }, void 0, !0, {
                      fileName: "app/root.tsx",
                      lineNumber: 142,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "grid",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "flex-row justify-between",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                            className: "h-20 w-3/12 flex-col items-center justify-center pr-1 bg-blue",
                            onClick: () => {
                              setMobileMenuOpen(!0), mobileNavigationOpen && setMobileNavigationOpen(!1), setMobileTerminalOpen(!0);
                            },
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                              src: "/svg/nav-terminal.svg",
                              className: "scale-75",
                              alt: "icon-terminal"
                            }, void 0, !1, {
                              fileName: "app/root.tsx",
                              lineNumber: 158,
                              columnNumber: 21
                            }, this)
                          }, void 0, !1, {
                            fileName: "app/root.tsx",
                            lineNumber: 150,
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
                              lineNumber: 173,
                              columnNumber: 23
                            }, this)
                          }, void 0, !1, {
                            fileName: "app/root.tsx",
                            lineNumber: 165,
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
                              lineNumber: 188,
                              columnNumber: 21
                            }, this)
                          }, void 0, !1, {
                            fileName: "app/root.tsx",
                            lineNumber: 180,
                            columnNumber: 19
                          }, this)
                        ]
                      }, void 0, !0, {
                        fileName: "app/root.tsx",
                        lineNumber: 149,
                        columnNumber: 17
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/root.tsx",
                      lineNumber: 148,
                      columnNumber: 15
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/root.tsx",
                  lineNumber: 137,
                  columnNumber: 13
                }, this)
              }, void 0, !1, {
                fileName: "app/root.tsx",
                lineNumber: 135,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/root.tsx",
            lineNumber: 118,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react9.Scripts, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 199,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react9.LiveReload, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 200,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 82,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 77,
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
    email: "contact@vantuch.dev"
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
      placeholder: "123456789"
    },
    messagePlaceholder: "Dovolte mi prom\u011Bnit Va\u0161i vizi v realitu...",
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
    email: "contact@vantuch.dev"
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
      placeholder: "123456789"
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
  }
];
var skills = [
  {
    skillUrl: "https://nextjs.org/",
    skillSvg: "nextjs" /* NextJs */
  },
  {
    skillUrl: "https://www.typescriptlang.org/",
    skillSvg: "typescript" /* Typescript */
  },
  {
    skillUrl: "https://go.dev/",
    skillSvg: "golang" /* Golang */
  },
  {
    skillUrl: "https://www.postgresql.org/",
    skillSvg: "postgresql" /* PostgreSql */
  },
  {
    skillUrl: "https://archlinux.org/",
    skillSvg: "linux" /* Linux */
  },
  {
    skillUrl: "https://www.figma.com/",
    skillSvg: "figma" /* Figma */
  }
];
var socials = [
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
var import_react_use2 = require("react-use"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), action = async ({ request }) => {
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
      to: "kontakt@horal.app",
      from: "kontakt@horal.app",
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
    }).catch((err) => {
      console.error(err), console.error(err.response.body.errors);
    }), "success");
  }
};
function Contact() {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
  let actionData = (0, import_react10.useActionData)(), { locale } = useLocale(), isEmailFieldNameOnlyMin = (0, import_react_use2.useMedia)("(min-width: 1024px)", !1), isEmailFieldNameOnlyMax = (0, import_react_use2.useMedia)("(max-width: 1500px)", !1), t = (0, import_react11.useMemo)(() => locale === "en" /* en */ ? en2 : cz2, [locale]);
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
        lineNumber: 91,
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
                    lineNumber: 99,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                    className: "contact-link block text-base sm:hidden sm:text-lg lg:block",
                    children: i === socials.length - 1 && isEmailFieldNameOnlyMax && isEmailFieldNameOnlyMin ? "Email" : t.links[s.icon]
                  }, void 0, !1, {
                    fileName: "app/routes/contact.tsx",
                    lineNumber: 104,
                    columnNumber: 15
                  }, this)
                ]
              }, i, !0, {
                fileName: "app/routes/contact.tsx",
                lineNumber: 95,
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
                  lineNumber: 111,
                  columnNumber: 15
                }, this))
              }, void 0, !1, {
                fileName: "app/routes/contact.tsx",
                lineNumber: 109,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/contact.tsx",
            lineNumber: 93,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "contact-socials-corner-tr border-r-sky-400 bg-main absolute border-r-2 sm:hidden"
          }, void 0, !1, {
            fileName: "app/routes/contact.tsx",
            lineNumber: 123,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "contact-socials-corner-tl border-r-sky-400 bg-main absolute border-r-2 sm:hidden"
          }, void 0, !1, {
            fileName: "app/routes/contact.tsx",
            lineNumber: 124,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 92,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "col-span-2 row-span-2 my-4 grid h-full grid-rows-3 gap-4 sm:m-0",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: `relative h-20 w-full border-2 sm:h-full ${(_a = actionData == null ? void 0 : actionData.formErrors) != null && _a.name ? "border-error" : "border-sky-400"}`,
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: `bg-main absolute left-4 h-10 px-2 text-sm t-contact-field-title ${((_b = actionData == null ? void 0 : actionData.formErrors) == null ? void 0 : _b.name) && "text-error"}`,
                children: (_c = actionData == null ? void 0 : actionData.formErrors) != null && _c.name ? (_d = actionData == null ? void 0 : actionData.formErrors) == null ? void 0 : _d.name : t.fields.name.title
              }, void 0, !1, {
                fileName: "app/routes/contact.tsx",
                lineNumber: 131,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                type: "text",
                name: "name",
                placeholder: t.fields.name.placeholder || "",
                spellCheck: "false",
                autoCorrect: "off",
                className: "bg-main h-full w-full px-16 text-center text-xl outline-none"
              }, void 0, !1, {
                fileName: "app/routes/contact.tsx",
                lineNumber: 139,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/contact.tsx",
            lineNumber: 127,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: `relative h-20 w-full border-2 sm:h-full ${(_e = actionData == null ? void 0 : actionData.formErrors) != null && _e.email ? "border-error" : "border-sky-400"}`,
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: `bg-main absolute left-4 t-contact-field-title h-10 px-2 text-sm ${((_f = actionData == null ? void 0 : actionData.formErrors) == null ? void 0 : _f.email) && "text-error"}`,
                children: (_g = actionData == null ? void 0 : actionData.formErrors) != null && _g.email ? (_h = actionData == null ? void 0 : actionData.formErrors) == null ? void 0 : _h.email : t.fields.email.title
              }, void 0, !1, {
                fileName: "app/routes/contact.tsx",
                lineNumber: 152,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                type: "text",
                name: "email",
                placeholder: t.fields.email.placeholder || "",
                spellCheck: "false",
                autoCorrect: "off",
                className: "bg-main h-full w-full px-16 text-center text-xl outline-none"
              }, void 0, !1, {
                fileName: "app/routes/contact.tsx",
                lineNumber: 160,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/contact.tsx",
            lineNumber: 148,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: `relative h-20 w-full border-2 sm:h-full ${(_i = actionData == null ? void 0 : actionData.formErrors) != null && _i.phone ? "border-error" : "border-sky-400"}`,
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: `bg-main absolute left-4 t-contact-field-title h-10 px-2 text-sm ${((_j = actionData == null ? void 0 : actionData.formErrors) == null ? void 0 : _j.phone) && "text-error"}`,
                children: (_k = actionData == null ? void 0 : actionData.formErrors) != null && _k.phone ? (_l = actionData == null ? void 0 : actionData.formErrors) == null ? void 0 : _l.phone : t.fields.phone.title
              }, void 0, !1, {
                fileName: "app/routes/contact.tsx",
                lineNumber: 173,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                type: "text",
                name: "phone",
                placeholder: t.fields.phone.placeholder || "",
                spellCheck: "false",
                autoCorrect: "off",
                className: "bg-main h-full w-full px-16 text-center text-xl outline-none"
              }, void 0, !1, {
                fileName: "app/routes/contact.tsx",
                lineNumber: 181,
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
        lineNumber: 126,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: `border-red relative col-span-3 row-span-2 grid grid-rows-4 border-2 ${(_m = actionData == null ? void 0 : actionData.formErrors) != null && _m.message ? "border-error" : "border-sky-400"}`,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
            name: "message",
            spellCheck: "false",
            autoCorrect: "off",
            placeholder: t.fields.messagePlaceholder || "",
            cols: 30,
            rows: 10,
            className: "bg-main row-span-3 mb-6 grid resize-none p-10 text-xl outline-none"
          }, void 0, !1, {
            fileName: "app/routes/contact.tsx",
            lineNumber: 195,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "absolute bottom-0 right-0 row-span-1 grid h-16 w-full grid-cols-3 grid-rows-1 lg:h-20",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
              type: "submit",
              className: "contact-button border-sky-400 relative col-span-2 col-start-2 row-span-1 grid content-center justify-items-center border-2 border-r-0 border-b-0",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "border-r-sky-400 bg-main absolute -top-4 -left-4 h-8 w-8 rotate-45 border-r-2"
                }, void 0, !1, {
                  fileName: "app/routes/contact.tsx",
                  lineNumber: 209,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  className: "text-2xl",
                  children: t.fields.send
                }, void 0, !1, {
                  fileName: "app/routes/contact.tsx",
                  lineNumber: 210,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/contact.tsx",
              lineNumber: 205,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/contact.tsx",
            lineNumber: 204,
            columnNumber: 9
          }, this),
          ((_n = actionData == null ? void 0 : actionData.formErrors) == null ? void 0 : _n.phone) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "text-error bg-main absolute left-4 -top-3 h-10 px-2 text-sm",
            children: actionData.formErrors.message
          }, void 0, !1, {
            fileName: "app/routes/contact.tsx",
            lineNumber: 214,
            columnNumber: 11
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/contact.tsx",
        lineNumber: 191,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/contact.tsx",
    lineNumber: 87,
    columnNumber: 5
  }, this);
}

// app/routes/skills.tsx
var skills_exports = {};
__export(skills_exports, {
  default: () => Skills
});

// app/components/skills/golang.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Golang() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
    width: "250",
    height: "250",
    viewBox: "0 0 250 250",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-full w-full",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
        x: "22",
        width: "40",
        height: "2",
        stroke: "#7dd8ff",
        strokeWidth: "2"
      }, void 0, !1, {
        fileName: "app/components/skills/golang.tsx",
        lineNumber: 4,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
        y: "62",
        width: "40",
        height: "2",
        transform: "rotate(-90 0 62)",
        stroke: "#7dd8ff",
        strokeWidth: "2"
      }, void 0, !1, {
        fileName: "app/components/skills/golang.tsx",
        lineNumber: 11,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
        y: "21.9204",
        width: "31",
        height: "2",
        transform: "rotate(-45 0 21.9204)",
        fill: "#7DD8FF",
        stroke: "#7dd8ff",
        strokeWidth: "1"
      }, void 0, !1, {
        fileName: "app/components/skills/golang.tsx",
        lineNumber: 19,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        className: "skills-border",
        d: "M0 228.08L21.9203 250L22.0004 249.92V250H188V248H22.7487L2.00039 227.252L2.00039 62H0.000387967L0.000387967 228H0.0796908L0 228.08Z"
      }, void 0, !1, {
        fileName: "app/components/skills/golang.tsx",
        lineNumber: 28,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
        x: "228.001",
        y: "250",
        width: "40",
        height: "2",
        transform: "rotate(-180 228.001 250)",
        stroke: "#7dd8ff",
        strokeWidth: "2"
      }, void 0, !1, {
        fileName: "app/components/skills/golang.tsx",
        lineNumber: 32,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
        x: "250.001",
        y: "188",
        width: "40",
        height: "2",
        transform: "rotate(90 250.001 188)",
        stroke: "#7dd8ff",
        strokeWidth: "2"
      }, void 0, !1, {
        fileName: "app/components/skills/golang.tsx",
        lineNumber: 41,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
        x: "250.001",
        y: "228.08",
        width: "31",
        height: "2",
        transform: "rotate(135 250.001 228.08)",
        stroke: "#7dd8ff",
        strokeWidth: "2"
      }, void 0, !1, {
        fileName: "app/components/skills/golang.tsx",
        lineNumber: 50,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        className: "skills-border",
        d: "M250.001 21.9203L228.081 0L228.001 0.0800781V0L62.0006 0V2L227.252 2L248.001 22.7484V188H250.001V22H249.921L250.001 21.9203Z"
      }, void 0, !1, {
        fileName: "app/components/skills/golang.tsx",
        lineNumber: 59,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        d: "M82.8867 179H72.0703C70.9062 179 69.8477 178.781 68.8945 178.344C67.9414 177.906 67.125 177.309 66.4453 176.551C65.7734 175.793 65.2539 174.902 64.8867 173.879C64.5195 172.855 64.3359 171.762 64.3359 170.598C64.3359 169.441 64.5195 168.355 64.8867 167.34C65.2539 166.316 65.7734 165.426 66.4453 164.668C67.125 163.902 67.9414 163.301 68.8945 162.863C69.8477 162.418 70.9062 162.195 72.0703 162.195H82.8867V164.598H72.0703C71.2422 164.598 70.4961 164.758 69.832 165.078C69.1758 165.391 68.6172 165.82 68.1562 166.367C67.7031 166.906 67.3516 167.539 67.1016 168.266C66.8594 168.992 66.7383 169.77 66.7383 170.598C66.7383 171.426 66.8594 172.207 67.1016 172.941C67.3516 173.668 67.7031 174.305 68.1562 174.852C68.6172 175.391 69.1758 175.816 69.832 176.129C70.4961 176.441 71.2422 176.598 72.0703 176.598H80.4844V171.805H70.3125V169.402H82.8867V179ZM102.129 172.402C102.129 173.309 101.957 174.16 101.613 174.957C101.27 175.754 100.801 176.453 100.207 177.055C99.6211 177.648 98.9297 178.121 98.1328 178.473C97.3359 178.816 96.4844 178.992 95.5781 179H91.8867C90.9805 178.992 90.1289 178.816 89.332 178.473C88.5352 178.121 87.8398 177.648 87.2461 177.055C86.6602 176.453 86.1953 175.754 85.8516 174.957C85.5078 174.16 85.3359 173.309 85.3359 172.402C85.3359 171.496 85.5078 170.645 85.8516 169.848C86.1953 169.043 86.6602 168.344 87.2461 167.75C87.8398 167.148 88.5352 166.676 89.332 166.332C90.1289 165.98 90.9805 165.805 91.8867 165.805H95.5781C96.1797 165.805 96.7617 165.883 97.3242 166.039C97.8867 166.195 98.4102 166.418 98.8945 166.707C99.3789 166.996 99.8203 167.344 100.219 167.75C100.617 168.148 100.957 168.594 101.238 169.086C101.52 169.57 101.738 170.094 101.895 170.656C102.051 171.219 102.129 171.801 102.129 172.402ZM99.7383 172.402C99.7383 171.824 99.6289 171.281 99.4102 170.773C99.1914 170.266 98.8945 169.824 98.5195 169.449C98.1445 169.066 97.7031 168.766 97.1953 168.547C96.6953 168.32 96.1562 168.203 95.5781 168.195H91.8867C91.3086 168.203 90.7656 168.32 90.2578 168.547C89.7578 168.766 89.3203 169.066 88.9453 169.449C88.5703 169.824 88.2734 170.266 88.0547 170.773C87.8438 171.281 87.7383 171.824 87.7383 172.402C87.7383 172.98 87.8438 173.523 88.0547 174.031C88.2734 174.539 88.5703 174.984 88.9453 175.367C89.3203 175.742 89.7578 176.043 90.2578 176.27C90.7656 176.488 91.3086 176.598 91.8867 176.598H95.5781C96.1562 176.598 96.6953 176.488 97.1953 176.27C97.7031 176.043 98.1445 175.742 98.5195 175.367C98.8945 174.984 99.1914 174.539 99.4102 174.031C99.6289 173.523 99.7383 172.98 99.7383 172.402ZM130.102 179H114.047V162.195H116.449V176.598H130.102V179ZM147.117 179H135.117C134.531 179 133.984 178.891 133.477 178.672C132.969 178.453 132.523 178.156 132.141 177.781C131.758 177.398 131.457 176.953 131.238 176.445C131.02 175.93 130.91 175.383 130.91 174.805C130.91 174.219 131.02 173.672 131.238 173.164C131.457 172.656 131.758 172.211 132.141 171.828C132.523 171.445 132.969 171.145 133.477 170.926C133.984 170.707 134.531 170.598 135.117 170.598H143.508V173H135.117C134.867 173 134.633 173.051 134.414 173.152C134.195 173.246 134.004 173.375 133.84 173.539C133.676 173.703 133.547 173.895 133.453 174.113C133.359 174.332 133.312 174.562 133.312 174.805C133.312 175.055 133.359 175.289 133.453 175.508C133.547 175.719 133.676 175.906 133.84 176.07C134.004 176.234 134.195 176.363 134.414 176.457C134.633 176.551 134.867 176.598 135.117 176.598H144.715V170C144.715 169.758 144.664 169.527 144.562 169.309C144.469 169.09 144.34 168.898 144.176 168.734C144.012 168.57 143.82 168.441 143.602 168.348C143.383 168.246 143.152 168.195 142.91 168.195H133.312V165.805H142.91C143.496 165.805 144.043 165.914 144.551 166.133C145.059 166.352 145.504 166.652 145.887 167.035C146.27 167.41 146.57 167.852 146.789 168.359C147.008 168.867 147.117 169.414 147.117 170V179ZM152.883 179H150.48V165.805H159.48C160.387 165.805 161.238 165.98 162.035 166.332C162.832 166.676 163.527 167.148 164.121 167.75C164.715 168.344 165.184 169.043 165.527 169.848C165.871 170.645 166.043 171.496 166.043 172.402V179H163.641V172.402C163.641 171.824 163.531 171.281 163.312 170.773C163.094 170.266 162.797 169.824 162.422 169.449C162.047 169.066 161.605 168.766 161.098 168.547C160.598 168.32 160.059 168.203 159.48 168.195H152.883V179ZM183.996 179.598C183.996 180.184 183.883 180.73 183.656 181.238C183.438 181.746 183.137 182.191 182.754 182.574C182.379 182.957 181.934 183.258 181.418 183.477C180.91 183.695 180.367 183.805 179.789 183.805H170.191V181.402H179.789C180.031 181.402 180.262 181.355 180.48 181.262C180.699 181.168 180.891 181.039 181.055 180.875C181.219 180.711 181.348 180.52 181.441 180.301C181.543 180.082 181.594 179.848 181.594 179.598V168.195H174.996C174.418 168.203 173.875 168.32 173.367 168.547C172.867 168.766 172.43 169.066 172.055 169.449C171.68 169.824 171.383 170.266 171.164 170.773C170.953 171.281 170.848 171.824 170.848 172.402C170.848 172.98 170.953 173.523 171.164 174.031C171.383 174.531 171.68 174.973 172.055 175.355C172.43 175.73 172.867 176.031 173.367 176.258C173.875 176.477 174.418 176.59 174.996 176.598H180.398V179H174.996C174.09 178.992 173.238 178.816 172.441 178.473C171.645 178.121 170.949 177.648 170.355 177.055C169.77 176.453 169.305 175.754 168.961 174.957C168.617 174.16 168.445 173.309 168.445 172.402C168.445 171.496 168.617 170.645 168.961 169.848C169.305 169.051 169.77 168.355 170.355 167.762C170.949 167.16 171.645 166.688 172.441 166.344C173.238 165.992 174.09 165.812 174.996 165.805H183.996V179.598Z",
        fill: "#7DD8FF"
      }, void 0, !1, {
        fileName: "app/components/skills/golang.tsx",
        lineNumber: 63,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        d: "M53.0972 82.6896C52.8135 82.6896 52.7425 82.5477 52.8844 82.3348L54.3844 80.3991C54.4817 80.2852 54.6031 80.1943 54.7398 80.133C54.8765 80.0717 55.0251 80.0414 55.1749 80.0444H80.745C81.0288 80.0444 81.0998 80.2572 80.9579 80.47L79.7417 82.3348C79.5676 82.5663 79.3088 82.7194 79.0221 82.7605L53.0972 82.6896Z",
        fill: "#7DD8FF"
      }, void 0, !1, {
        fileName: "app/components/skills/golang.tsx",
        lineNumber: 66,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        d: "M42.2838 89.2776C42 89.2776 41.9291 89.1357 42.0709 88.9229L43.5709 86.9872C43.6683 86.8733 43.7897 86.7824 43.9263 86.7211C44.063 86.6597 44.2116 86.6295 44.3614 86.6325H77.0361C77.0911 86.6242 77.1474 86.6303 77.1994 86.6501C77.2514 86.67 77.2974 86.7028 77.3331 86.7456C77.3687 86.7884 77.3927 86.8396 77.4028 86.8943C77.413 86.949 77.4088 87.0054 77.3908 87.0581L76.8131 88.781C76.7683 88.9143 76.68 89.0287 76.5624 89.1059C76.4448 89.1831 76.3047 89.2186 76.1645 89.2067L42.2838 89.2776Z",
        fill: "#7DD8FF"
      }, void 0, !1, {
        fileName: "app/components/skills/golang.tsx",
        lineNumber: 69,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        d: "M59.6138 95.8649C59.3301 95.8649 59.2591 95.6521 59.401 95.4393L60.4145 93.6454C60.4942 93.5244 60.6004 93.4231 60.7251 93.3494C60.8498 93.2756 60.9897 93.2313 61.1341 93.2197H75.4546C75.7384 93.2197 75.8802 93.4325 75.8802 93.7163L75.7384 95.4393C75.729 95.5679 75.6736 95.6888 75.5824 95.78C75.4913 95.8711 75.3704 95.9265 75.2418 95.9359L59.6138 95.8649Z",
        fill: "#7DD8FF"
      }, void 0, !1, {
        fileName: "app/components/skills/golang.tsx",
        lineNumber: 72,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        d: "M133.964 81.3621C129.454 82.5073 126.373 83.389 121.934 84.514C120.859 84.7978 120.788 84.8687 119.907 83.7944C119.008 82.641 117.857 81.7084 116.542 81.0682C112.032 78.8486 107.664 79.4973 103.579 82.1425C101.256 83.5512 99.3531 85.5569 98.068 87.9507C96.7829 90.3444 96.1628 93.0388 96.2722 95.7536C96.2408 98.4836 97.2051 101.132 98.9846 103.202C100.764 105.273 103.237 106.624 105.941 107.003C108.204 107.34 110.515 107.081 112.647 106.253C114.78 105.425 116.66 104.056 118.103 102.28C118.751 101.49 119.319 100.628 120.038 99.6352H106.174C104.674 99.6352 104.309 98.7028 104.816 97.4866C105.748 95.267 107.461 91.5375 108.464 89.6828C108.619 89.3375 108.871 89.045 109.19 88.8415C109.509 88.638 109.88 88.5323 110.258 88.5375H136.325C136.183 90.4733 136.183 92.409 135.899 94.3347C135.155 99.4345 133.133 104.263 130.021 108.371C127.633 111.689 124.589 114.48 121.078 116.572C117.567 118.664 113.663 120.012 109.61 120.533C106.247 121.081 102.809 120.945 99.5004 120.134C96.1918 119.322 93.0808 117.852 90.3535 115.81C87.8021 113.949 85.6714 111.57 84.0998 108.831C82.5283 106.091 81.5512 103.051 81.2321 99.9088C80.2997 92.105 82.5902 85.0816 87.313 78.9196C92.1622 72.3692 99.3423 67.932 107.37 66.5247C114.099 65.3085 120.545 66.0991 126.352 70.0314C130.069 72.5077 132.963 76.0365 134.663 80.1662C135.109 80.825 134.805 81.1797 133.964 81.3621Z",
        fill: "#7DD8FF"
      }, void 0, !1, {
        fileName: "app/components/skills/golang.tsx",
        lineNumber: 75,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        d: "M157.67 120.999C151.281 121.042 145.087 118.807 140.197 114.695C136.026 111.179 133.278 106.266 132.464 100.871C131.177 92.7635 133.397 85.6185 138.261 79.2437C143.491 72.3723 149.795 68.7845 158.318 67.2846C165.625 65.9974 172.507 66.7069 178.73 70.9331C181.487 72.6897 183.824 75.031 185.575 77.7913C187.326 80.5515 188.45 83.6631 188.865 86.9056C189.561 91.324 189.175 95.8456 187.74 100.082C186.305 104.319 183.864 108.144 180.625 111.229C175.938 115.945 169.93 119.125 163.396 120.35C161.46 120.715 159.534 120.786 157.67 120.999ZM174.716 92.0642C174.691 91.2736 174.62 90.4852 174.504 89.7028C174.24 88.0819 173.642 86.5338 172.746 85.1575C171.85 83.7813 170.677 82.6072 169.301 81.7104C167.926 80.8137 166.378 80.214 164.757 79.9498C163.136 79.6856 161.478 79.7626 159.889 80.176C156.786 80.7478 153.929 82.2442 151.692 84.4688C149.454 86.6935 147.942 89.5424 147.352 92.6419C146.701 95.3128 147.002 98.1275 148.205 100.6C149.408 103.072 151.436 105.046 153.94 106.182C155.788 107.014 157.802 107.408 159.827 107.334C161.852 107.26 163.833 106.72 165.615 105.756C171.271 102.817 174.352 98.2363 174.737 92.0744L174.716 92.0642Z",
        fill: "#7DD8FF"
      }, void 0, !1, {
        fileName: "app/components/skills/golang.tsx",
        lineNumber: 78,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/skills/golang.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/components/skills/nextjs.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Nextjs() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
    width: "250",
    height: "250",
    viewBox: "0 0 250 250",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-full w-full",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
        x: "22",
        width: "40",
        height: "2",
        stroke: "#7dd8ff",
        strokeWidth: "2"
      }, void 0, !1, {
        fileName: "app/components/skills/nextjs.tsx",
        lineNumber: 4,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
        y: "62",
        width: "40",
        height: "2",
        transform: "rotate(-90 0 62)",
        stroke: "#7dd8ff",
        strokeWidth: "2"
      }, void 0, !1, {
        fileName: "app/components/skills/nextjs.tsx",
        lineNumber: 6,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
        y: "21.9204",
        width: "31",
        height: "2",
        transform: "rotate(-45 0 21.9204)",
        stroke: "#7dd8ff",
        strokeWidth: "2"
      }, void 0, !1, {
        fileName: "app/components/skills/nextjs.tsx",
        lineNumber: 8,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
        x: "228",
        y: "250",
        width: "40",
        height: "2",
        transform: "rotate(-180 228 250)",
        stroke: "#7dd8ff",
        strokeWidth: "2"
      }, void 0, !1, {
        fileName: "app/components/skills/nextjs.tsx",
        lineNumber: 10,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
        x: "250",
        y: "188",
        width: "40",
        height: "2",
        transform: "rotate(90 250 188)",
        stroke: "#7dd8ff",
        strokeWidth: "2"
      }, void 0, !1, {
        fileName: "app/components/skills/nextjs.tsx",
        lineNumber: 12,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
        x: "250",
        y: "228.08",
        width: "31",
        height: "2",
        transform: "rotate(135 250 228.08)",
        stroke: "#7dd8ff",
        strokeWidth: "2"
      }, void 0, !1, {
        fileName: "app/components/skills/nextjs.tsx",
        lineNumber: 14,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        className: "skills-border",
        d: "M-0.000489243 228L-0.000496499 62L1.99951 62L1.99952 227.251L22.7483 248L188 248L188 250L21.9995 250L21.9995 249.92L21.9199 250L-0.000388925 228.08L0.079302 228L-0.000489243 228Z"
      }, void 0, !1, {
        fileName: "app/components/skills/nextjs.tsx",
        lineNumber: 16,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        className: "skills-border",
        d: "M250 21.9203L228.08 -9.58167e-07L228 0.0800772L228 7.25607e-06L61.9996 0L61.9996 1.99999L227.251 2L248 22.7484L248 188L250 188L250 22L249.92 22L250 21.9203Z"
      }, void 0, !1, {
        fileName: "app/components/skills/nextjs.tsx",
        lineNumber: 17,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        d: "M121.586 47.024C121.394 47.0413 120.785 47.1022 120.237 47.1457C107.596 48.2853 95.7555 55.105 88.2562 65.5868C84.0803 71.4149 81.4094 78.0258 80.4002 85.0282C80.0435 87.4725 80 88.1945 80 91.5087C80 94.8229 80.0435 95.5449 80.4002 97.9892C82.8188 114.699 94.7115 128.739 110.841 133.941C113.73 134.871 116.774 135.506 120.237 135.889C121.586 136.037 127.414 136.037 128.763 135.889C134.74 135.228 139.803 133.749 144.797 131.201C145.562 130.809 145.71 130.705 145.606 130.618C145.536 130.566 142.274 126.19 138.359 120.901L131.242 111.289L122.325 98.0936C117.418 90.8389 113.382 84.9065 113.347 84.9065C113.312 84.8978 113.277 90.7606 113.26 97.9196C113.234 110.454 113.225 110.959 113.068 111.255C112.842 111.681 112.668 111.855 112.303 112.046C112.024 112.185 111.781 112.211 110.467 112.211H108.962L108.562 111.959C108.301 111.794 108.109 111.576 107.979 111.324L107.796 110.933L107.814 93.492L107.84 76.0426L108.109 75.7033C108.249 75.5206 108.544 75.2858 108.753 75.1727C109.11 74.9987 109.249 74.9813 110.754 74.9813C112.529 74.9813 112.825 75.0509 113.286 75.5554C113.416 75.6946 118.245 82.9667 124.022 91.7262C129.798 100.486 137.698 112.446 141.578 118.318L148.625 128.991L148.982 128.756C152.14 126.703 155.48 123.781 158.125 120.736C163.754 114.273 167.382 106.392 168.6 97.9892C168.957 95.5449 169 94.8229 169 91.5087C169 88.1945 168.957 87.4725 168.6 85.0282C166.181 68.3182 154.288 54.2786 138.159 49.0768C135.314 48.1548 132.286 47.5198 128.893 47.137C128.058 47.05 122.308 46.9544 121.586 47.024ZM139.803 73.9375C140.221 74.1463 140.56 74.5464 140.682 74.9639C140.751 75.1901 140.769 80.0265 140.751 90.9259L140.725 106.566L137.967 102.339L135.201 98.111V86.7419C135.201 79.3915 135.236 75.2597 135.288 75.0596C135.427 74.5725 135.732 74.1898 136.149 73.9636C136.506 73.7809 136.636 73.7635 138.002 73.7635C139.29 73.7635 139.516 73.7809 139.803 73.9375Z",
        fill: "#7DD8FF"
      }, void 0, !1, {
        fileName: "app/components/skills/nextjs.tsx",
        lineNumber: 18,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        d: "M79.0664 182H76.6641V165.195H77.8594C78.6406 165.195 79.4688 165.297 80.3438 165.5C81.2266 165.703 82.125 165.996 83.0391 166.379C83.9531 166.762 84.8633 167.227 85.7695 167.773C86.6836 168.312 87.5664 168.926 88.418 169.613C89.2695 170.301 90.0703 171.051 90.8203 171.863C91.5703 172.668 92.2422 173.527 92.8359 174.441V165.195H95.2383V182H92.8359C92.8359 180.766 92.6211 179.578 92.1914 178.438C91.7617 177.289 91.1875 176.207 90.4688 175.191C89.75 174.176 88.9219 173.242 87.9844 172.391C87.0469 171.531 86.0664 170.777 85.043 170.129C84.0273 169.48 83.0039 168.949 81.9727 168.535C80.9414 168.113 79.9727 167.832 79.0664 167.691V182ZM114.281 173C114.281 173.586 114.172 174.133 113.953 174.641C113.734 175.148 113.434 175.594 113.051 175.977C112.676 176.352 112.23 176.648 111.715 176.867C111.207 177.086 110.664 177.195 110.086 177.195H100.887C101.059 177.547 101.273 177.871 101.531 178.168C101.789 178.465 102.078 178.719 102.398 178.93C102.719 179.141 103.066 179.305 103.441 179.422C103.824 179.539 104.223 179.598 104.637 179.598H112.488V182H104.637C103.73 181.992 102.879 181.816 102.082 181.473C101.285 181.121 100.59 180.648 99.9961 180.055C99.4102 179.453 98.9453 178.754 98.6016 177.957C98.2578 177.16 98.0859 176.309 98.0859 175.402C98.0859 174.496 98.2578 173.645 98.6016 172.848C98.9453 172.051 99.4102 171.355 99.9961 170.762C100.59 170.16 101.285 169.688 102.082 169.344C102.879 168.992 103.73 168.812 104.637 168.805H110.086C110.664 168.805 111.207 168.914 111.715 169.133C112.23 169.352 112.676 169.652 113.051 170.035C113.434 170.41 113.734 170.852 113.953 171.359C114.172 171.867 114.281 172.414 114.281 173ZM110.086 174.805C110.328 174.805 110.559 174.758 110.777 174.664C110.996 174.57 111.188 174.441 111.352 174.277C111.516 174.113 111.645 173.922 111.738 173.703C111.832 173.484 111.879 173.25 111.879 173C111.879 172.758 111.832 172.527 111.738 172.309C111.645 172.09 111.516 171.898 111.352 171.734C111.188 171.57 110.996 171.441 110.777 171.348C110.559 171.246 110.328 171.195 110.086 171.195H104.637C104.105 171.195 103.605 171.289 103.137 171.477C102.676 171.664 102.262 171.922 101.895 172.25C101.535 172.57 101.234 172.953 100.992 173.398C100.758 173.836 100.605 174.305 100.535 174.805H110.086ZM131.977 182H128.555L123.41 177.031L118.371 182H114.938L121.758 175.426L114.938 168.805H118.371L131.977 182ZM131.977 168.805L126.27 174.371L124.547 172.836L128.555 168.805H131.977ZM138.527 182H136.125V171.195H132.527V168.805H136.125V164H138.527V168.805H146.93V171.195H138.527V182ZM150.938 180.195C150.938 180.445 150.887 180.68 150.785 180.898C150.691 181.117 150.562 181.309 150.398 181.473C150.234 181.637 150.043 181.766 149.824 181.859C149.605 181.953 149.375 182 149.133 182C148.883 182 148.648 181.953 148.43 181.859C148.219 181.766 148.031 181.637 147.867 181.473C147.703 181.309 147.574 181.117 147.48 180.898C147.387 180.68 147.34 180.445 147.34 180.195C147.34 179.953 147.387 179.723 147.48 179.504C147.574 179.285 147.703 179.094 147.867 178.93C148.031 178.766 148.219 178.637 148.43 178.543C148.648 178.449 148.883 178.402 149.133 178.402C149.375 178.402 149.605 178.449 149.824 178.543C150.043 178.637 150.234 178.766 150.398 178.93C150.562 179.094 150.691 179.285 150.785 179.504C150.887 179.723 150.938 179.953 150.938 180.195ZM156.375 182.598C156.375 183.184 156.266 183.73 156.047 184.238C155.828 184.746 155.527 185.191 155.145 185.574C154.77 185.957 154.328 186.258 153.82 186.477C153.312 186.695 152.766 186.805 152.18 186.805H146.777V184.402H152.18C152.422 184.402 152.652 184.355 152.871 184.262C153.09 184.168 153.281 184.039 153.445 183.875C153.609 183.711 153.738 183.52 153.832 183.301C153.926 183.082 153.973 182.848 153.973 182.598V168.805H156.375V182.598ZM156.973 165.805C156.973 166.055 156.926 166.289 156.832 166.508C156.738 166.719 156.609 166.906 156.445 167.07C156.289 167.234 156.102 167.363 155.883 167.457C155.664 167.551 155.43 167.598 155.18 167.598C154.93 167.598 154.695 167.551 154.477 167.457C154.258 167.363 154.066 167.234 153.902 167.07C153.738 166.906 153.609 166.719 153.516 166.508C153.422 166.289 153.375 166.055 153.375 165.805C153.375 165.562 153.422 165.332 153.516 165.113C153.609 164.895 153.738 164.703 153.902 164.539C154.066 164.375 154.258 164.246 154.477 164.152C154.695 164.051 154.93 164 155.18 164C155.43 164 155.664 164.051 155.883 164.152C156.102 164.246 156.289 164.375 156.445 164.539C156.609 164.703 156.738 164.895 156.832 165.113C156.926 165.332 156.973 165.562 156.973 165.805ZM173.613 177.805C173.613 178.383 173.504 178.93 173.285 179.445C173.066 179.953 172.766 180.398 172.383 180.781C172.008 181.156 171.562 181.453 171.047 181.672C170.539 181.891 169.996 182 169.418 182H159.211V179.598H169.418C169.66 179.598 169.891 179.551 170.109 179.457C170.328 179.363 170.52 179.234 170.684 179.07C170.848 178.906 170.977 178.719 171.07 178.508C171.164 178.289 171.211 178.055 171.211 177.805C171.211 177.562 171.164 177.332 171.07 177.113C170.977 176.895 170.848 176.703 170.684 176.539C170.52 176.375 170.328 176.246 170.109 176.152C169.891 176.051 169.66 176 169.418 176H162.809C162.309 176 161.84 175.906 161.402 175.719C160.965 175.531 160.582 175.277 160.254 174.957C159.934 174.629 159.68 174.246 159.492 173.809C159.305 173.371 159.211 172.902 159.211 172.402C159.211 171.902 159.305 171.434 159.492 170.996C159.68 170.559 159.934 170.18 160.254 169.859C160.582 169.531 160.965 169.273 161.402 169.086C161.84 168.898 162.309 168.805 162.809 168.805H172.418V171.195H162.809C162.473 171.195 162.188 171.312 161.953 171.547C161.727 171.773 161.613 172.059 161.613 172.402C161.613 172.738 161.727 173.023 161.953 173.258C162.188 173.484 162.473 173.598 162.809 173.598H169.418C169.996 173.598 170.539 173.707 171.047 173.926C171.562 174.145 172.008 174.445 172.383 174.828C172.766 175.211 173.066 175.656 173.285 176.164C173.504 176.672 173.613 177.219 173.613 177.805Z",
        fill: "#7DD8FF"
      }, void 0, !1, {
        fileName: "app/components/skills/nextjs.tsx",
        lineNumber: 19,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/skills/nextjs.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/components/skills/typescript.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Typescript() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
    width: "250",
    height: "250",
    viewBox: "0 0 250 250",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-full w-full",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
        x: "22",
        width: "40",
        height: "2",
        stroke: "#7dd8ff",
        strokeWidth: "2"
      }, void 0, !1, {
        fileName: "app/components/skills/typescript.tsx",
        lineNumber: 4,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
        y: "62",
        width: "40",
        height: "2",
        transform: "rotate(-90 0 62)",
        stroke: "#7dd8ff",
        strokeWidth: "2"
      }, void 0, !1, {
        fileName: "app/components/skills/typescript.tsx",
        lineNumber: 6,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
        y: "21.9204",
        width: "31",
        height: "2",
        transform: "rotate(-45 0 21.9204)",
        stroke: "#7dd8ff",
        strokeWidth: "2"
      }, void 0, !1, {
        fileName: "app/components/skills/typescript.tsx",
        lineNumber: 8,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
        x: "228",
        y: "250",
        width: "40",
        height: "2",
        transform: "rotate(-180 228 250)",
        stroke: "#7dd8ff",
        strokeWidth: "2"
      }, void 0, !1, {
        fileName: "app/components/skills/typescript.tsx",
        lineNumber: 10,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
        x: "250",
        y: "188",
        width: "40",
        height: "2",
        transform: "rotate(90 250 188)",
        stroke: "#7dd8ff",
        strokeWidth: "2"
      }, void 0, !1, {
        fileName: "app/components/skills/typescript.tsx",
        lineNumber: 12,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
        x: "250",
        y: "228.08",
        width: "31",
        height: "2",
        transform: "rotate(135 250 228.08)",
        stroke: "#7dd8ff",
        strokeWidth: "2"
      }, void 0, !1, {
        fileName: "app/components/skills/typescript.tsx",
        lineNumber: 14,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        className: "skills-border",
        d: "M250.001 21.9203L228.081 2.50327e-06L228.001 0.0800806L228.001 2.62352e-07L62.0006 2.24188e-06L62.0006 2L227.252 2L248.001 22.7483L248.001 188L250.001 188L250.001 22L249.921 22L250.001 21.9203Z"
      }, void 0, !1, {
        fileName: "app/components/skills/typescript.tsx",
        lineNumber: 16,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        className: "skills-border",
        d: "M2.61397e-07 228.08L21.9203 250L22.0004 249.92L22.0004 250L188 250L188 248L22.7487 248L2.00039 227.252L2.00039 62L0.000390209 62L0.000388229 228L0.0796893 228L2.61397e-07 228.08Z"
      }, void 0, !1, {
        fileName: "app/components/skills/typescript.tsx",
        lineNumber: 17,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        d: "M55.5117 180H53.1094V165.598H44.6133V163.195H64.0078V165.598H55.5117V180ZM80.6836 180.598C80.6836 181.184 80.5742 181.73 80.3555 182.238C80.1367 182.746 79.8359 183.191 79.4531 183.574C79.0781 183.957 78.6328 184.258 78.1172 184.477C77.6094 184.695 77.0664 184.805 76.4883 184.805H66.8906V182.402H76.4883C76.7305 182.402 76.9609 182.355 77.1797 182.262C77.3984 182.168 77.5898 182.039 77.7539 181.875C77.918 181.711 78.0469 181.52 78.1406 181.301C78.2344 181.082 78.2812 180.848 78.2812 180.598V180H71.6836C70.7773 180 69.9258 179.828 69.1289 179.484C68.332 179.133 67.6367 178.66 67.043 178.066C66.457 177.465 65.9922 176.766 65.6484 175.969C65.3047 175.164 65.1328 174.309 65.1328 173.402V166.805H67.5352V173.402C67.5352 173.98 67.6406 174.523 67.8516 175.031C68.0703 175.531 68.3672 175.973 68.7422 176.355C69.1172 176.73 69.5547 177.031 70.0547 177.258C70.5625 177.477 71.1055 177.59 71.6836 177.598H78.2812V166.805H80.6836V180.598ZM99.7031 173.402C99.7031 174.309 99.5312 175.164 99.1875 175.969C98.8438 176.766 98.375 177.465 97.7812 178.066C97.1875 178.66 96.4922 179.133 95.6953 179.484C94.8984 179.828 94.0469 180 93.1406 180H87.75V177.598H93.1406C93.7188 177.59 94.2578 177.477 94.7578 177.258C95.2656 177.031 95.707 176.73 96.082 176.355C96.457 175.973 96.7539 175.531 96.9727 175.031C97.1914 174.523 97.3008 173.98 97.3008 173.402C97.3008 172.824 97.1914 172.281 96.9727 171.773C96.7539 171.258 96.457 170.812 96.082 170.438C95.707 170.055 95.2656 169.754 94.7578 169.535C94.2578 169.309 93.7188 169.195 93.1406 169.195H86.543V184.805H84.1406V166.805H93.1406C94.0469 166.812 94.8984 166.992 95.6953 167.344C96.4922 167.688 97.1875 168.16 97.7812 168.762C98.375 169.355 98.8438 170.051 99.1875 170.848C99.5312 171.645 99.7031 172.496 99.7031 173.402ZM117.668 171C117.668 171.586 117.559 172.133 117.34 172.641C117.121 173.148 116.82 173.594 116.438 173.977C116.062 174.352 115.617 174.648 115.102 174.867C114.594 175.086 114.051 175.195 113.473 175.195H104.273C104.445 175.547 104.66 175.871 104.918 176.168C105.176 176.465 105.465 176.719 105.785 176.93C106.105 177.141 106.453 177.305 106.828 177.422C107.211 177.539 107.609 177.598 108.023 177.598H115.875V180H108.023C107.117 179.992 106.266 179.816 105.469 179.473C104.672 179.121 103.977 178.648 103.383 178.055C102.797 177.453 102.332 176.754 101.988 175.957C101.645 175.16 101.473 174.309 101.473 173.402C101.473 172.496 101.645 171.645 101.988 170.848C102.332 170.051 102.797 169.355 103.383 168.762C103.977 168.16 104.672 167.688 105.469 167.344C106.266 166.992 107.117 166.812 108.023 166.805H113.473C114.051 166.805 114.594 166.914 115.102 167.133C115.617 167.352 116.062 167.652 116.438 168.035C116.82 168.41 117.121 168.852 117.34 169.359C117.559 169.867 117.668 170.414 117.668 171ZM113.473 172.805C113.715 172.805 113.945 172.758 114.164 172.664C114.383 172.57 114.574 172.441 114.738 172.277C114.902 172.113 115.031 171.922 115.125 171.703C115.219 171.484 115.266 171.25 115.266 171C115.266 170.758 115.219 170.527 115.125 170.309C115.031 170.09 114.902 169.898 114.738 169.734C114.574 169.57 114.383 169.441 114.164 169.348C113.945 169.246 113.715 169.195 113.473 169.195H108.023C107.492 169.195 106.992 169.289 106.523 169.477C106.062 169.664 105.648 169.922 105.281 170.25C104.922 170.57 104.621 170.953 104.379 171.398C104.145 171.836 103.992 172.305 103.922 172.805H113.473ZM133.805 175.805C133.805 176.383 133.695 176.93 133.477 177.445C133.258 177.953 132.957 178.398 132.574 178.781C132.199 179.156 131.754 179.453 131.238 179.672C130.73 179.891 130.188 180 129.609 180H119.402V177.598H129.609C129.852 177.598 130.082 177.551 130.301 177.457C130.52 177.363 130.711 177.234 130.875 177.07C131.039 176.906 131.168 176.719 131.262 176.508C131.355 176.289 131.402 176.055 131.402 175.805C131.402 175.562 131.355 175.332 131.262 175.113C131.168 174.895 131.039 174.703 130.875 174.539C130.711 174.375 130.52 174.246 130.301 174.152C130.082 174.051 129.852 174 129.609 174H123C122.5 174 122.031 173.906 121.594 173.719C121.156 173.531 120.773 173.277 120.445 172.957C120.125 172.629 119.871 172.246 119.684 171.809C119.496 171.371 119.402 170.902 119.402 170.402C119.402 169.902 119.496 169.434 119.684 168.996C119.871 168.559 120.125 168.18 120.445 167.859C120.773 167.531 121.156 167.273 121.594 167.086C122.031 166.898 122.5 166.805 123 166.805H132.609V169.195H123C122.664 169.195 122.379 169.312 122.145 169.547C121.918 169.773 121.805 170.059 121.805 170.402C121.805 170.738 121.918 171.023 122.145 171.258C122.379 171.484 122.664 171.598 123 171.598H129.609C130.188 171.598 130.73 171.707 131.238 171.926C131.754 172.145 132.199 172.445 132.574 172.828C132.957 173.211 133.258 173.656 133.477 174.164C133.695 174.672 133.805 175.219 133.805 175.805ZM149.836 180H141.984C141.078 179.992 140.227 179.816 139.43 179.473C138.633 179.121 137.938 178.648 137.344 178.055C136.758 177.453 136.293 176.754 135.949 175.957C135.605 175.16 135.434 174.309 135.434 173.402C135.434 172.496 135.605 171.645 135.949 170.848C136.293 170.043 136.758 169.344 137.344 168.75C137.938 168.148 138.633 167.676 139.43 167.332C140.227 166.98 141.078 166.805 141.984 166.805H149.836V169.195H141.984C141.406 169.203 140.863 169.32 140.355 169.547C139.855 169.766 139.418 170.066 139.043 170.449C138.668 170.824 138.371 171.266 138.152 171.773C137.941 172.281 137.836 172.824 137.836 173.402C137.836 173.98 137.941 174.523 138.152 175.031C138.371 175.539 138.668 175.984 139.043 176.367C139.418 176.742 139.855 177.043 140.355 177.27C140.863 177.488 141.406 177.598 141.984 177.598H149.836V180ZM165.574 169.195H156.574C156.324 169.195 156.09 169.246 155.871 169.348C155.652 169.441 155.461 169.57 155.297 169.734C155.133 169.898 155.004 170.09 154.91 170.309C154.816 170.527 154.77 170.758 154.77 171V180H152.367V171C152.367 170.414 152.477 169.867 152.695 169.359C152.914 168.852 153.215 168.41 153.598 168.035C153.98 167.652 154.426 167.352 154.934 167.133C155.441 166.914 155.988 166.805 156.574 166.805H165.574V169.195ZM170.508 163.805C170.508 164.055 170.461 164.289 170.367 164.508C170.273 164.719 170.145 164.906 169.98 165.07C169.816 165.234 169.625 165.363 169.406 165.457C169.188 165.551 168.957 165.598 168.715 165.598C168.465 165.598 168.23 165.551 168.012 165.457C167.793 165.363 167.602 165.234 167.438 165.07C167.273 164.906 167.145 164.719 167.051 164.508C166.957 164.289 166.91 164.055 166.91 163.805C166.91 163.562 166.957 163.332 167.051 163.113C167.145 162.895 167.273 162.703 167.438 162.539C167.602 162.375 167.793 162.246 168.012 162.152C168.23 162.051 168.465 162 168.715 162C168.957 162 169.188 162.051 169.406 162.152C169.625 162.246 169.816 162.375 169.98 162.539C170.145 162.703 170.273 162.895 170.367 163.113C170.461 163.332 170.508 163.562 170.508 163.805ZM169.91 180H167.508V166.805H169.91V180ZM188.93 173.402C188.93 174.309 188.758 175.164 188.414 175.969C188.07 176.766 187.602 177.465 187.008 178.066C186.414 178.66 185.719 179.133 184.922 179.484C184.125 179.828 183.273 180 182.367 180H176.977V177.598H182.367C182.945 177.59 183.484 177.477 183.984 177.258C184.492 177.031 184.934 176.73 185.309 176.355C185.684 175.973 185.98 175.531 186.199 175.031C186.418 174.523 186.527 173.98 186.527 173.402C186.527 172.824 186.418 172.281 186.199 171.773C185.98 171.258 185.684 170.812 185.309 170.438C184.934 170.055 184.492 169.754 183.984 169.535C183.484 169.309 182.945 169.195 182.367 169.195H175.77V184.805H173.367V166.805H182.367C183.273 166.812 184.125 166.992 184.922 167.344C185.719 167.688 186.414 168.16 187.008 168.762C187.602 169.355 188.07 170.051 188.414 170.848C188.758 171.645 188.93 172.496 188.93 173.402ZM196.055 180H193.652V169.195H190.055V166.805H193.652V162H196.055V166.805H204.457V169.195H196.055V180Z",
        fill: "#7DD8FF"
      }, void 0, !1, {
        fileName: "app/components/skills/typescript.tsx",
        lineNumber: 18,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
        x: "81",
        y: "46",
        width: "87",
        height: "87",
        rx: "13",
        stroke: "#7DD8FF",
        "stroke-width": "2"
      }, void 0, !1, {
        fileName: "app/components/skills/typescript.tsx",
        lineNumber: 19,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        d: "M100.538 87.3218H131.657V94.1313H120.652V125.909H111.733V94.1313H100.538V87.3218Z",
        fill: "#7DD8FF"
      }, void 0, !1, {
        fileName: "app/components/skills/typescript.tsx",
        lineNumber: 20,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        d: "M141.658 87.5935C144.9 86.0769 147.761 86.0769 150.431 86.0769C154.202 86.0769 159.967 87.5935 159.967 87.5935V95.5558C159.967 95.5558 154.436 92.9017 150.431 92.9017C147.415 92.9017 143.864 94.0754 143.947 97.0724C144.011 99.4279 148.142 101.433 148.142 101.433C148.142 101.433 153.677 103.76 156.915 105.793C160.539 108.068 161.778 111.421 161.492 115.651C161.243 119.353 160.348 121.718 156.915 123.993C153.833 126.035 151.575 126.136 147.761 126.457C141.277 127.002 134.983 124.372 134.983 124.372V116.03C134.983 116.03 141.858 119.632 146.617 119.632C149.287 119.632 151.999 118.298 152.147 115.651C152.274 113.388 150.539 112.162 148.524 111.101C145.282 109.395 143.756 109.205 140.895 107.499C136.831 105.075 134.513 101.775 134.792 97.0724C135.063 92.519 137.506 89.5358 141.658 87.5935Z",
        fill: "#7DD8FF"
      }, void 0, !1, {
        fileName: "app/components/skills/typescript.tsx",
        lineNumber: 21,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/skills/typescript.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/components/skills/linux.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Linux() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
    width: "250",
    height: "250",
    viewBox: "0 0 250 250",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-full w-full",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
        x: "22",
        width: "40",
        height: "2",
        stroke: "#7dd8ff",
        strokeWidth: "2"
      }, void 0, !1, {
        fileName: "app/components/skills/linux.tsx",
        lineNumber: 4,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
        y: "62",
        width: "40",
        height: "2",
        transform: "rotate(-90 0 62)",
        stroke: "#7dd8ff",
        strokeWidth: "2"
      }, void 0, !1, {
        fileName: "app/components/skills/linux.tsx",
        lineNumber: 6,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
        y: "21.9204",
        width: "31",
        height: "2",
        transform: "rotate(-45 0 21.9204)",
        stroke: "#7dd8ff",
        strokeWidth: "2"
      }, void 0, !1, {
        fileName: "app/components/skills/linux.tsx",
        lineNumber: 8,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
        x: "228.001",
        y: "250",
        width: "40",
        height: "2",
        transform: "rotate(-180 228.001 250)",
        stroke: "#7dd8ff",
        strokeWidth: "2"
      }, void 0, !1, {
        fileName: "app/components/skills/linux.tsx",
        lineNumber: 10,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
        x: "250.001",
        y: "188",
        width: "40",
        height: "2",
        transform: "rotate(90 250.001 188)",
        stroke: "#7dd8ff",
        strokeWidth: "2"
      }, void 0, !1, {
        fileName: "app/components/skills/linux.tsx",
        lineNumber: 12,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
        x: "250.001",
        y: "228.08",
        width: "31",
        height: "2",
        transform: "rotate(135 250.001 228.08)",
        stroke: "#7dd8ff",
        strokeWidth: "2"
      }, void 0, !1, {
        fileName: "app/components/skills/linux.tsx",
        lineNumber: 14,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        className: "skills-border",
        d: "M-9.58168e-07 228.08L21.9203 250L22.0004 249.92L22.0004 250L188 250L188 248L22.7487 248L2.0004 227.252L2.00039 62L0.000379749 62L0.000387005 228L0.07969 228L-9.58168e-07 228.08Z"
      }, void 0, !1, {
        fileName: "app/components/skills/linux.tsx",
        lineNumber: 16,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        className: "skills-border",
        d: "M250.001 21.9203L228.081 -9.58167e-07L228.001 0.0800772L228.001 7.25607e-06L62.0006 0L62.0006 1.99999L227.252 2L248.001 22.7484L248.001 188L250.001 188L250.001 22L249.921 22L250.001 21.9203Z"
      }, void 0, !1, {
        fileName: "app/components/skills/linux.tsx",
        lineNumber: 17,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        d: "M65.0273 176H62.625V171.195H49.2188V168.805H62.625V161.598H54.0117C53.1914 161.598 52.418 161.758 51.6914 162.078C50.9648 162.391 50.332 162.82 49.793 163.367C49.2539 163.906 48.8242 164.539 48.5039 165.266C48.1914 165.992 48.0352 166.77 48.0352 167.598V176H45.6328V167.598C45.6328 166.824 45.7305 166.082 45.9258 165.371C46.1289 164.652 46.4102 163.984 46.7695 163.367C47.1367 162.742 47.5742 162.176 48.082 161.668C48.5977 161.152 49.1641 160.711 49.7812 160.344C50.4062 159.977 51.0742 159.695 51.7852 159.5C52.4961 159.297 53.2383 159.195 54.0117 159.195H65.0273V176ZM81.8789 165.195H72.8789C72.6289 165.195 72.3945 165.246 72.1758 165.348C71.957 165.441 71.7656 165.57 71.6016 165.734C71.4375 165.898 71.3086 166.09 71.2148 166.309C71.1211 166.527 71.0742 166.758 71.0742 167V176H68.6719V167C68.6719 166.414 68.7812 165.867 69 165.359C69.2188 164.852 69.5195 164.41 69.9023 164.035C70.2852 163.652 70.7305 163.352 71.2383 163.133C71.7461 162.914 72.293 162.805 72.8789 162.805H81.8789V165.195ZM97.2188 176H89.3672C88.4609 175.992 87.6094 175.816 86.8125 175.473C86.0156 175.121 85.3203 174.648 84.7266 174.055C84.1406 173.453 83.6758 172.754 83.332 171.957C82.9883 171.16 82.8164 170.309 82.8164 169.402C82.8164 168.496 82.9883 167.645 83.332 166.848C83.6758 166.043 84.1406 165.344 84.7266 164.75C85.3203 164.148 86.0156 163.676 86.8125 163.332C87.6094 162.98 88.4609 162.805 89.3672 162.805H97.2188V165.195H89.3672C88.7891 165.203 88.2461 165.32 87.7383 165.547C87.2383 165.766 86.8008 166.066 86.4258 166.449C86.0508 166.824 85.7539 167.266 85.5352 167.773C85.3242 168.281 85.2188 168.824 85.2188 169.402C85.2188 169.98 85.3242 170.523 85.5352 171.031C85.7539 171.539 86.0508 171.984 86.4258 172.367C86.8008 172.742 87.2383 173.043 87.7383 173.27C88.2461 173.488 88.7891 173.598 89.3672 173.598H97.2188V176ZM115.406 176H113.004V169.402C113.004 168.824 112.895 168.281 112.676 167.773C112.457 167.266 112.16 166.824 111.785 166.449C111.41 166.066 110.969 165.766 110.461 165.547C109.961 165.32 109.422 165.203 108.844 165.195H102.246V176H99.8438V158H102.246V162.805H108.844C109.75 162.805 110.602 162.98 111.398 163.332C112.195 163.676 112.891 164.148 113.484 164.75C114.078 165.344 114.547 166.043 114.891 166.848C115.234 167.645 115.406 168.496 115.406 169.402V176ZM143.988 176H127.934V159.195H130.336V173.598H143.988V176ZM148.969 159.805C148.969 160.055 148.922 160.289 148.828 160.508C148.734 160.719 148.605 160.906 148.441 161.07C148.277 161.234 148.086 161.363 147.867 161.457C147.648 161.551 147.418 161.598 147.176 161.598C146.926 161.598 146.691 161.551 146.473 161.457C146.254 161.363 146.062 161.234 145.898 161.07C145.734 160.906 145.605 160.719 145.512 160.508C145.418 160.289 145.371 160.055 145.371 159.805C145.371 159.562 145.418 159.332 145.512 159.113C145.605 158.895 145.734 158.703 145.898 158.539C146.062 158.375 146.254 158.246 146.473 158.152C146.691 158.051 146.926 158 147.176 158C147.418 158 147.648 158.051 147.867 158.152C148.086 158.246 148.277 158.375 148.441 158.539C148.605 158.703 148.734 158.895 148.828 159.113C148.922 159.332 148.969 159.562 148.969 159.805ZM148.371 176H145.969V162.805H148.371V176ZM154.23 176H151.828V162.805H160.828C161.734 162.805 162.586 162.98 163.383 163.332C164.18 163.676 164.875 164.148 165.469 164.75C166.062 165.344 166.531 166.043 166.875 166.848C167.219 167.645 167.391 168.496 167.391 169.402V176H164.988V169.402C164.988 168.824 164.879 168.281 164.66 167.773C164.441 167.266 164.145 166.824 163.77 166.449C163.395 166.066 162.953 165.766 162.445 165.547C161.945 165.32 161.406 165.203 160.828 165.195H154.23V176ZM185.965 176H176.965C176.059 176 175.207 175.828 174.41 175.484C173.613 175.133 172.918 174.66 172.324 174.066C171.738 173.465 171.273 172.766 170.93 171.969C170.586 171.164 170.414 170.309 170.414 169.402V162.805H172.816V169.402C172.816 169.98 172.922 170.523 173.133 171.031C173.352 171.531 173.648 171.973 174.023 172.355C174.398 172.73 174.836 173.031 175.336 173.258C175.844 173.477 176.387 173.59 176.965 173.598H183.562V162.805H185.965V176ZM204.902 176H201.48L196.336 171.031L191.297 176H187.863L194.684 169.426L187.863 162.805H191.297L204.902 176ZM204.902 162.805L199.195 168.371L197.473 166.836L201.48 162.805H204.902Z",
        fill: "#7DD8FF"
      }, void 0, !1, {
        fileName: "app/components/skills/linux.tsx",
        lineNumber: 18,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        d: "M125.5 45.0001C121.538 54.7127 119.132 61.0743 114.723 70.4986C117.426 73.3647 120.75 76.691 126.141 80.461C120.345 78.0761 116.394 75.6884 113.44 73.2034C107.796 84.9819 98.946 101.754 81 134C95.1009 125.859 106.034 120.836 116.222 118.92C115.785 117.041 115.553 115 115.569 112.879L115.581 112.434C115.805 103.398 120.506 96.449 126.076 96.9204C131.644 97.3919 135.98 105.103 135.756 114.141C135.713 115.843 135.515 117.478 135.18 118.997C145.258 120.968 156.087 125.968 170 134C167.256 128.949 164.799 124.398 162.46 120.06C158.776 117.205 154.935 113.491 147.098 109.468C152.485 110.868 156.345 112.487 159.352 114.292C135.575 70.0216 133.653 64.1351 125.5 45.0001V45V45.0001Z",
        fill: "#7DD8FF"
      }, void 0, !1, {
        fileName: "app/components/skills/linux.tsx",
        lineNumber: 19,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/skills/linux.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/components/skills/postgresql.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Postgresql() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
    width: "250",
    height: "250",
    viewBox: "0 0 250 250",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-full w-full",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
        x: "22",
        width: "40",
        height: "2",
        stroke: "#7dd8ff",
        strokeWidth: "2"
      }, void 0, !1, {
        fileName: "app/components/skills/postgresql.tsx",
        lineNumber: 4,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
        y: "62",
        width: "40",
        height: "2",
        transform: "rotate(-90 0 62)",
        stroke: "#7dd8ff",
        strokeWidth: "2"
      }, void 0, !1, {
        fileName: "app/components/skills/postgresql.tsx",
        lineNumber: 6,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
        y: "21.9204",
        width: "31",
        height: "2",
        transform: "rotate(-45 0 21.9204)",
        stroke: "#7dd8ff",
        strokeWidth: "2"
      }, void 0, !1, {
        fileName: "app/components/skills/postgresql.tsx",
        lineNumber: 8,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
        x: "228.001",
        y: "250",
        width: "40",
        height: "2",
        transform: "rotate(-180 228.001 250)",
        stroke: "#7dd8ff",
        strokeWidth: "2"
      }, void 0, !1, {
        fileName: "app/components/skills/postgresql.tsx",
        lineNumber: 10,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
        x: "250.001",
        y: "188",
        width: "40",
        height: "2",
        transform: "rotate(90 250.001 188)",
        stroke: "#7dd8ff",
        strokeWidth: "2"
      }, void 0, !1, {
        fileName: "app/components/skills/postgresql.tsx",
        lineNumber: 12,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
        x: "250.001",
        y: "228.08",
        width: "31",
        height: "2",
        transform: "rotate(135 250.001 228.08)",
        stroke: "#7dd8ff",
        strokeWidth: "2"
      }, void 0, !1, {
        fileName: "app/components/skills/postgresql.tsx",
        lineNumber: 14,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        className: "skills-border",
        d: "M250.001 21.9203L228.081 2.50327e-06L228.001 0.0800806L228.001 2.62352e-07L62.0006 2.24188e-06L62.0006 2L227.252 2L248.001 22.7483L248.001 188L250.001 188L250.001 22L249.921 22L250.001 21.9203Z"
      }, void 0, !1, {
        fileName: "app/components/skills/postgresql.tsx",
        lineNumber: 16,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        className: "skills-border",
        d: "M2.61397e-07 228.08L21.9203 250L22.0004 249.92L22.0004 250L188 250L188 248L22.7487 248L2.00039 227.252L2.00039 62L0.000390209 62L0.000388229 228L0.0796893 228L2.61397e-07 228.08Z"
      }, void 0, !1, {
        fileName: "app/components/skills/postgresql.tsx",
        lineNumber: 17,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        d: "M53.332 168.195C53.332 169.023 53.1719 169.805 52.8516 170.539C52.5391 171.266 52.1094 171.902 51.5625 172.449C51.0234 172.988 50.3906 173.414 49.6641 173.727C48.9375 174.039 48.1602 174.195 47.332 174.195H37.6875V171.828H47.332C47.832 171.828 48.3008 171.734 48.7383 171.547C49.1758 171.352 49.5547 171.09 49.875 170.762C50.2031 170.434 50.4609 170.051 50.6484 169.613C50.8359 169.168 50.9297 168.695 50.9297 168.195C50.9297 167.695 50.8359 167.227 50.6484 166.789C50.4609 166.352 50.2031 165.973 49.875 165.652C49.5547 165.324 49.1758 165.066 48.7383 164.879C48.3008 164.691 47.832 164.598 47.332 164.598H36.3398V179H33.9375V162.195H47.332C48.1602 162.195 48.9375 162.355 49.6641 162.676C50.3906 162.988 51.0234 163.418 51.5625 163.965C52.1094 164.504 52.5391 165.137 52.8516 165.863C53.1719 166.59 53.332 167.367 53.332 168.195ZM71.6133 172.402C71.6133 173.309 71.4414 174.16 71.0977 174.957C70.7539 175.754 70.2852 176.453 69.6914 177.055C69.1055 177.648 68.4141 178.121 67.6172 178.473C66.8203 178.816 65.9688 178.992 65.0625 179H61.3711C60.4648 178.992 59.6133 178.816 58.8164 178.473C58.0195 178.121 57.3242 177.648 56.7305 177.055C56.1445 176.453 55.6797 175.754 55.3359 174.957C54.9922 174.16 54.8203 173.309 54.8203 172.402C54.8203 171.496 54.9922 170.645 55.3359 169.848C55.6797 169.043 56.1445 168.344 56.7305 167.75C57.3242 167.148 58.0195 166.676 58.8164 166.332C59.6133 165.98 60.4648 165.805 61.3711 165.805H65.0625C65.6641 165.805 66.2461 165.883 66.8086 166.039C67.3711 166.195 67.8945 166.418 68.3789 166.707C68.8633 166.996 69.3047 167.344 69.7031 167.75C70.1016 168.148 70.4414 168.594 70.7227 169.086C71.0039 169.57 71.2227 170.094 71.3789 170.656C71.5352 171.219 71.6133 171.801 71.6133 172.402ZM69.2227 172.402C69.2227 171.824 69.1133 171.281 68.8945 170.773C68.6758 170.266 68.3789 169.824 68.0039 169.449C67.6289 169.066 67.1875 168.766 66.6797 168.547C66.1797 168.32 65.6406 168.203 65.0625 168.195H61.3711C60.793 168.203 60.25 168.32 59.7422 168.547C59.2422 168.766 58.8047 169.066 58.4297 169.449C58.0547 169.824 57.7578 170.266 57.5391 170.773C57.3281 171.281 57.2227 171.824 57.2227 172.402C57.2227 172.98 57.3281 173.523 57.5391 174.031C57.7578 174.539 58.0547 174.984 58.4297 175.367C58.8047 175.742 59.2422 176.043 59.7422 176.27C60.25 176.488 60.793 176.598 61.3711 176.598H65.0625C65.6406 176.598 66.1797 176.488 66.6797 176.27C67.1875 176.043 67.6289 175.742 68.0039 175.367C68.3789 174.984 68.6758 174.539 68.8945 174.031C69.1133 173.523 69.2227 172.98 69.2227 172.402ZM88.0195 174.805C88.0195 175.383 87.9102 175.93 87.6914 176.445C87.4727 176.953 87.1719 177.398 86.7891 177.781C86.4141 178.156 85.9688 178.453 85.4531 178.672C84.9453 178.891 84.4023 179 83.8242 179H73.6172V176.598H83.8242C84.0664 176.598 84.2969 176.551 84.5156 176.457C84.7344 176.363 84.9258 176.234 85.0898 176.07C85.2539 175.906 85.3828 175.719 85.4766 175.508C85.5703 175.289 85.6172 175.055 85.6172 174.805C85.6172 174.562 85.5703 174.332 85.4766 174.113C85.3828 173.895 85.2539 173.703 85.0898 173.539C84.9258 173.375 84.7344 173.246 84.5156 173.152C84.2969 173.051 84.0664 173 83.8242 173H77.2148C76.7148 173 76.2461 172.906 75.8086 172.719C75.3711 172.531 74.9883 172.277 74.6602 171.957C74.3398 171.629 74.0859 171.246 73.8984 170.809C73.7109 170.371 73.6172 169.902 73.6172 169.402C73.6172 168.902 73.7109 168.434 73.8984 167.996C74.0859 167.559 74.3398 167.18 74.6602 166.859C74.9883 166.531 75.3711 166.273 75.8086 166.086C76.2461 165.898 76.7148 165.805 77.2148 165.805H86.8242V168.195H77.2148C76.8789 168.195 76.5938 168.312 76.3594 168.547C76.1328 168.773 76.0195 169.059 76.0195 169.402C76.0195 169.738 76.1328 170.023 76.3594 170.258C76.5938 170.484 76.8789 170.598 77.2148 170.598H83.8242C84.4023 170.598 84.9453 170.707 85.4531 170.926C85.9688 171.145 86.4141 171.445 86.7891 171.828C87.1719 172.211 87.4727 172.656 87.6914 173.164C87.9102 173.672 88.0195 174.219 88.0195 174.805ZM95.0742 179H92.6719V168.195H89.0742V165.805H92.6719V161H95.0742V165.805H103.477V168.195H95.0742V179ZM119.918 179.598C119.918 180.184 119.805 180.73 119.578 181.238C119.359 181.746 119.059 182.191 118.676 182.574C118.301 182.957 117.855 183.258 117.34 183.477C116.832 183.695 116.289 183.805 115.711 183.805H106.113V181.402H115.711C115.953 181.402 116.184 181.355 116.402 181.262C116.621 181.168 116.812 181.039 116.977 180.875C117.141 180.711 117.27 180.52 117.363 180.301C117.465 180.082 117.516 179.848 117.516 179.598V168.195H110.918C110.34 168.203 109.797 168.32 109.289 168.547C108.789 168.766 108.352 169.066 107.977 169.449C107.602 169.824 107.305 170.266 107.086 170.773C106.875 171.281 106.77 171.824 106.77 172.402C106.77 172.98 106.875 173.523 107.086 174.031C107.305 174.531 107.602 174.973 107.977 175.355C108.352 175.73 108.789 176.031 109.289 176.258C109.797 176.477 110.34 176.59 110.918 176.598H116.32V179H110.918C110.012 178.992 109.16 178.816 108.363 178.473C107.566 178.121 106.871 177.648 106.277 177.055C105.691 176.453 105.227 175.754 104.883 174.957C104.539 174.16 104.367 173.309 104.367 172.402C104.367 171.496 104.539 170.645 104.883 169.848C105.227 169.051 105.691 168.355 106.277 167.762C106.871 167.16 107.566 166.688 108.363 166.344C109.16 165.992 110.012 165.812 110.918 165.805H119.918V179.598ZM136.477 168.195H127.477C127.227 168.195 126.992 168.246 126.773 168.348C126.555 168.441 126.363 168.57 126.199 168.734C126.035 168.898 125.906 169.09 125.812 169.309C125.719 169.527 125.672 169.758 125.672 170V179H123.27V170C123.27 169.414 123.379 168.867 123.598 168.359C123.816 167.852 124.117 167.41 124.5 167.035C124.883 166.652 125.328 166.352 125.836 166.133C126.344 165.914 126.891 165.805 127.477 165.805H136.477V168.195ZM153.609 170C153.609 170.586 153.5 171.133 153.281 171.641C153.062 172.148 152.762 172.594 152.379 172.977C152.004 173.352 151.559 173.648 151.043 173.867C150.535 174.086 149.992 174.195 149.414 174.195H140.215C140.387 174.547 140.602 174.871 140.859 175.168C141.117 175.465 141.406 175.719 141.727 175.93C142.047 176.141 142.395 176.305 142.77 176.422C143.152 176.539 143.551 176.598 143.965 176.598H151.816V179H143.965C143.059 178.992 142.207 178.816 141.41 178.473C140.613 178.121 139.918 177.648 139.324 177.055C138.738 176.453 138.273 175.754 137.93 174.957C137.586 174.16 137.414 173.309 137.414 172.402C137.414 171.496 137.586 170.645 137.93 169.848C138.273 169.051 138.738 168.355 139.324 167.762C139.918 167.16 140.613 166.688 141.41 166.344C142.207 165.992 143.059 165.812 143.965 165.805H149.414C149.992 165.805 150.535 165.914 151.043 166.133C151.559 166.352 152.004 166.652 152.379 167.035C152.762 167.41 153.062 167.852 153.281 168.359C153.5 168.867 153.609 169.414 153.609 170ZM149.414 171.805C149.656 171.805 149.887 171.758 150.105 171.664C150.324 171.57 150.516 171.441 150.68 171.277C150.844 171.113 150.973 170.922 151.066 170.703C151.16 170.484 151.207 170.25 151.207 170C151.207 169.758 151.16 169.527 151.066 169.309C150.973 169.09 150.844 168.898 150.68 168.734C150.516 168.57 150.324 168.441 150.105 168.348C149.887 168.246 149.656 168.195 149.414 168.195H143.965C143.434 168.195 142.934 168.289 142.465 168.477C142.004 168.664 141.59 168.922 141.223 169.25C140.863 169.57 140.562 169.953 140.32 170.398C140.086 170.836 139.934 171.305 139.863 171.805H149.414ZM174.809 174.195C174.809 174.867 174.684 175.496 174.434 176.082C174.184 176.66 173.84 177.168 173.402 177.605C172.973 178.035 172.465 178.375 171.879 178.625C171.301 178.875 170.68 179 170.016 179H155.414V176.598H170.016C170.352 176.598 170.664 176.535 170.953 176.41C171.242 176.285 171.492 176.113 171.703 175.895C171.922 175.676 172.094 175.422 172.219 175.133C172.344 174.836 172.406 174.523 172.406 174.195C172.406 173.867 172.344 173.559 172.219 173.27C172.094 172.98 171.922 172.727 171.703 172.508C171.492 172.289 171.242 172.117 170.953 171.992C170.664 171.867 170.352 171.805 170.016 171.805H160.219C159.562 171.805 158.941 171.68 158.355 171.43C157.77 171.18 157.258 170.84 156.82 170.41C156.391 169.973 156.047 169.461 155.789 168.875C155.539 168.289 155.414 167.664 155.414 167C155.414 166.344 155.539 165.723 155.789 165.137C156.047 164.551 156.391 164.043 156.82 163.613C157.258 163.176 157.77 162.832 158.355 162.582C158.941 162.324 159.562 162.195 160.219 162.195H173.613V164.598H160.219C159.891 164.598 159.578 164.66 159.281 164.785C158.992 164.91 158.738 165.082 158.52 165.301C158.301 165.52 158.129 165.777 158.004 166.074C157.879 166.363 157.816 166.672 157.816 167C157.816 167.328 157.879 167.641 158.004 167.938C158.129 168.227 158.301 168.48 158.52 168.699C158.738 168.918 158.992 169.09 159.281 169.215C159.578 169.34 159.891 169.402 160.219 169.402H170.016C170.68 169.402 171.301 169.531 171.879 169.789C172.465 170.039 172.973 170.383 173.402 170.82C173.84 171.25 174.184 171.758 174.434 172.344C174.684 172.922 174.809 173.539 174.809 174.195ZM192.75 181.016L190.594 178.977C190.5 178.992 190.398 179 190.289 179C190.188 179 190.09 179 189.996 179H184.406C183.242 179 182.184 178.781 181.23 178.344C180.277 177.906 179.461 177.309 178.781 176.551C178.109 175.793 177.59 174.902 177.223 173.879C176.855 172.855 176.672 171.762 176.672 170.598C176.672 169.441 176.855 168.355 177.223 167.34C177.59 166.316 178.109 165.426 178.781 164.668C179.461 163.902 180.277 163.301 181.23 162.863C182.184 162.418 183.242 162.195 184.406 162.195H189.996C191.152 162.195 192.203 162.418 193.148 162.863C194.094 163.301 194.902 163.902 195.574 164.668C196.254 165.426 196.777 166.316 197.145 167.34C197.512 168.355 197.695 169.441 197.695 170.598C197.695 171.465 197.59 172.297 197.379 173.094C197.176 173.883 196.879 174.613 196.488 175.285C196.098 175.949 195.621 176.543 195.059 177.066C194.504 177.582 193.879 178.004 193.184 178.332L195.996 181.016H192.75ZM195.293 170.598C195.293 169.77 195.172 168.992 194.93 168.266C194.688 167.539 194.336 166.906 193.875 166.367C193.422 165.82 192.867 165.391 192.211 165.078C191.562 164.758 190.824 164.598 189.996 164.598H184.406C183.578 164.598 182.832 164.758 182.168 165.078C181.512 165.391 180.953 165.82 180.492 166.367C180.039 166.906 179.688 167.539 179.438 168.266C179.195 168.992 179.074 169.77 179.074 170.598C179.074 171.426 179.195 172.207 179.438 172.941C179.688 173.668 180.039 174.305 180.492 174.852C180.953 175.391 181.512 175.816 182.168 176.129C182.832 176.441 183.578 176.598 184.406 176.598H188.098L185.812 174.418H189.176L191.262 176.457C191.895 176.309 192.461 176.055 192.961 175.695C193.461 175.328 193.883 174.887 194.227 174.371C194.578 173.855 194.844 173.277 195.023 172.637C195.203 171.996 195.293 171.316 195.293 170.598ZM216.82 179H200.766V162.195H203.168V176.598H216.82V179Z",
        fill: "#7DD8FF"
      }, void 0, !1, {
        fileName: "app/components/skills/postgresql.tsx",
        lineNumber: 18,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
        clipPath: "url(#clip0_1111_240)",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M120.17 104.002C120.858 104.022 121.4 104.595 121.38 105.282C121.243 110.207 121.26 115.141 121.432 119.136C121.518 121.135 121.641 122.885 121.801 124.274C121.966 125.705 121.487 126.498 121.661 126.932M120.17 104.002C119.483 103.983 118.91 104.525 118.891 105.213L120.17 104.002ZM118.891 105.213C118.752 110.183 118.769 115.177 118.943 119.243L118.891 105.213ZM118.943 119.243C119.03 121.275 119.158 123.089 119.326 124.558L118.943 119.243ZM119.326 124.558C119.49 125.985 119.706 127.213 120.017 127.99L119.326 124.558ZM142.7 105.246C143.386 105.297 143.901 105.895 143.849 106.581C143.675 108.904 142.335 120.089 141.635 124.141C141.146 126.979 140.306 129.244 138.655 130.96C137.006 132.674 134.697 133.686 131.606 134.349C127.72 135.182 125.012 134.334 123.146 132.763C121.356 131.255 120.503 129.205 120.017 127.99L120.017 127.99M142.7 105.246C142.014 105.195 141.417 105.709 141.365 106.395L142.7 105.246ZM141.365 106.395C141.197 108.638 140.731 117.463 140.045 121.437L141.365 106.395ZM140.045 121.437L141.419 106.531L140.045 121.437ZM141.419 106.531C140.968 109.146 142.575 105.329 141.419 106.531V106.531ZM141.419 106.531C141.419 106.531 140.439 119.393 138.546 126.432C137.348 129.63 135.852 130.362 133.851 131.128C129.155 132.927 126.022 131.928 124.751 130.858C123.48 129.787 122.543 127.147 122.061 125.94",
            fill: "#7DD8FF"
          }, void 0, !1, {
            fileName: "app/components/skills/postgresql.tsx",
            lineNumber: 20,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M112.06 54.4911C112.061 54.4914 112.062 54.4916 111.597 55.6293L112.062 54.4916C112.698 54.7519 113.004 55.479 112.743 56.1157C112.483 56.7523 111.756 57.0575 111.12 56.7975L111.119 56.7973L111.591 55.6445C111.119 56.7973 111.12 56.7975 111.12 56.7975L111.119 56.7973L111.117 56.7964L111.103 56.7908C111.09 56.7856 111.069 56.7773 111.041 56.7663C110.985 56.7442 110.9 56.7111 110.788 56.6685C110.563 56.5834 110.229 56.4607 109.802 56.3141C108.948 56.0208 107.725 55.6329 106.262 55.2586C103.322 54.5064 99.4729 53.8262 95.7112 54.0419C91.9478 54.2577 88.4122 55.3592 85.896 58.0247C83.3906 60.6787 81.6938 65.0986 82.0585 72.3896C82.1326 73.871 82.7229 77.5981 83.7585 82.2197C84.7881 86.8149 86.2366 92.1999 87.9934 96.9786C89.7717 101.816 91.7945 105.826 93.8884 107.862C94.918 108.862 95.8123 109.238 96.5838 109.205C98.481 108.947 99.4802 107.4 101.878 104.551C103.128 103.066 105.311 100.716 106.274 99.6554C106.587 99.3114 108.466 100.989 108.71 100.696M108.719 100.686L108.719 100.687L108.71 100.696L108.682 100.726C108.656 100.753 108.618 100.793 108.567 100.846C108.466 100.953 108.317 101.111 108.125 101.315C107.743 101.724 107.192 102.318 106.521 103.056C105.178 104.533 103.359 106.584 101.45 108.88L101.45 108.881C100.012 110.609 98.4251 111.62 96.6895 111.694C94.9616 111.767 93.436 110.896 92.1523 109.648C89.6192 107.186 87.4406 102.694 85.6555 97.8381C83.849 92.9242 82.3724 87.4264 81.3278 82.7643C80.2892 78.1286 79.6562 74.2237 79.5707 72.514C79.1852 64.8054 80.9603 59.6246 84.0847 56.3148C87.1983 53.0165 91.4505 51.7912 95.5686 51.5551C99.6884 51.3188 103.815 52.0616 106.879 52.8454C108.419 53.2391 109.706 53.6474 110.611 53.9583C111.064 54.1139 111.422 54.2453 111.669 54.3388C111.793 54.3855 111.888 54.4228 111.955 54.4488C111.988 54.4618 112.013 54.4721 112.031 54.4793L112.052 54.4878L112.058 54.4903L112.06 54.4911",
            fill: "#7DD8FF"
          }, void 0, !1, {
            fileName: "app/components/skills/postgresql.tsx",
            lineNumber: 21,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M129.592 54.346C129.53 54.3773 129.466 54.4039 129.397 54.4253C129.375 54.4322 129.328 54.4468 129.276 54.4593C129.261 54.4629 129.236 54.4686 129.205 54.4743C129.184 54.478 129.114 54.4907 129.023 54.4939C128.971 54.4946 128.833 54.4862 128.749 54.4732C128.593 54.4337 128.181 54.2063 127.968 53.9776C127.782 53.5978 127.781 52.9027 127.889 52.6448C127.964 52.5252 128.106 52.359 128.163 52.3063C128.255 52.227 128.339 52.1788 128.359 52.1676C128.359 52.1673 128.36 52.167 128.36 52.1668C128.393 52.1482 128.42 52.1346 128.435 52.1271C128.466 52.1119 128.492 52.1002 128.507 52.0938C128.54 52.08 128.572 52.0671 128.6 52.0566C128.71 52.0144 128.886 51.9527 129.117 51.8789C129.583 51.7294 130.311 51.5172 131.245 51.299C133.11 50.863 135.821 50.3969 138.926 50.3681C145.133 50.3105 153.055 52.0082 158.798 59.3468L158.798 59.3468C160.034 60.9256 160.461 63.4688 160.417 66.3316C160.372 69.267 159.823 72.8184 158.828 76.6703C156.838 84.3764 153.02 93.4424 147.629 101.441C147.245 102.012 146.471 102.162 145.901 101.778C145.33 101.394 145.179 100.62 145.564 100.049C150.786 92.2995 154.493 83.4964 156.417 76.0473C157.379 72.3217 157.885 68.974 157.927 66.2931C157.969 63.5397 157.516 61.7495 156.837 60.8819C151.741 54.3712 144.709 52.8054 138.949 52.8589C136.072 52.8856 133.547 53.3188 131.812 53.7244C130.945 53.927 130.282 54.1212 129.877 54.2509C129.755 54.29 129.66 54.3221 129.592 54.346Z",
            fill: "#7DD8FF"
          }, void 0, !1, {
            fileName: "app/components/skills/postgresql.tsx",
            lineNumber: 22,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M110.238 55.2104C113.155 52.7812 117.058 51.2331 122.206 51.3175C132.413 51.4848 139.148 56.7328 143.196 61.9072C145.215 64.4889 146.579 67.0666 147.394 69.0241C147.8 70.0003 148.079 70.8441 148.232 71.4751C148.307 71.7814 148.364 72.0859 148.378 72.3501C148.384 72.4699 148.388 72.6703 148.336 72.8859C148.307 73.0088 148.117 73.7214 147.327 73.8849L146.877 73.895C141.765 73.0764 139.421 73.9449 138.403 75.1089C137.368 76.2938 137.228 78.3167 137.904 81.0273C138.56 83.6578 139.884 86.5251 141.156 88.9652C141.763 90.1291 142.347 91.1779 142.832 92.0461L142.906 92.1801C143.373 93.0166 143.787 93.7607 143.972 94.2079C144.598 95.7252 145.383 96.7926 146.089 97.6839C146.168 97.7836 146.249 97.8847 146.33 97.9864C146.598 98.3211 146.871 98.6617 147.091 98.9761C147.372 99.3757 147.66 99.8546 147.796 100.409C147.805 100.424 147.82 100.449 147.846 100.483C147.926 100.586 148.11 101.012 148.638 101.23C149.73 101.683 145.74 100.455 145.044 100.435M145.067 100.428C145.06 100.43 145.052 100.433 145.044 100.435C144.773 100.513 144.437 100.619 144.087 100.776C143.364 101.102 142.584 101.65 142.039 102.649C141.508 103.622 141.27 104.898 141.364 106.559C141.447 108.007 142.751 108.66 143.657 108.942C144.682 109.26 145.984 109.374 147.306 109.36C149.946 109.331 153.107 108.78 155.151 107.831L155.151 107.831C156.342 107.278 157.419 106.63 158.298 105.974C159.16 105.333 159.9 104.633 160.348 103.957C160.566 103.628 160.787 103.198 160.834 102.711C160.889 102.146 160.694 101.54 160.156 101.131C159.706 100.789 159.16 100.698 158.713 100.683C158.488 100.675 154.24 101.527 151.136 101.454C147.694 101.373 145.362 100.369 145.044 100.435M145.067 100.428C145.062 100.421 145.058 100.414 145.053 100.407C144.881 100.163 144.679 99.9097 144.426 99.5941C144.336 99.4816 144.24 99.3611 144.136 99.2303C143.376 98.2701 142.425 96.9907 141.669 95.1579C141.554 94.8788 141.233 94.2932 140.716 93.3672L140.653 93.2533C140.17 92.3877 139.57 91.312 138.947 90.1163C137.653 87.6336 136.217 84.5548 135.487 81.6301C134.778 78.7854 134.627 75.6441 136.528 73.4697C138.231 71.5207 141.212 70.7617 145.559 71.2085C145.439 70.8516 145.285 70.4392 145.094 69.9811C144.355 68.2045 143.099 65.8262 141.234 63.4419C137.512 58.6843 131.422 53.9598 122.165 53.808C117.582 53.7329 114.199 55.164 111.763 57.1922C109.303 59.24 107.595 61.7935 106.642 64.8487C105.894 66.935 105.043 70.6401 104.806 72.8437C104.688 73.9419 104.639 74.856 104.619 75.4918C104.609 75.8095 104.607 76.0571 104.606 76.2228C104.606 76.3057 104.607 76.368 104.608 76.4083C104.608 76.4285 104.608 76.4432 104.608 76.4521L104.608 76.4613C104.608 76.4613 104.619 70.4923 106.642 64.8487C108.772 59.2904 111.763 57.1922 111.763 57.1922M145.891 72.484C145.891 72.4946 145.891 72.4932 145.891 72.4818C145.891 72.4826 145.891 72.4833 145.891 72.484ZM146.47 102.609C146.795 102.874 147.206 103.125 147.722 103.339C149.488 104.07 152.466 104.352 157.591 103.294C157.61 103.291 157.629 103.287 157.647 103.283C157.419 103.497 157.14 103.731 156.81 103.977C156.074 104.526 155.145 105.088 154.102 105.572C152.48 106.325 149.699 106.843 147.279 106.869C146.072 106.882 145.065 106.771 144.396 106.563C144.058 106.458 143.907 106.366 143.846 106.317C143.784 105.008 143.994 104.266 144.226 103.842C144.449 103.433 144.751 103.21 145.11 103.048C145.301 102.961 145.507 102.894 145.738 102.827C145.786 102.813 145.841 102.798 145.9 102.781C146.078 102.731 146.293 102.671 146.47 102.609ZM143.809 106.279C143.81 106.279 143.815 106.284 143.822 106.295C143.812 106.285 143.808 106.279 143.809 106.279Z",
            fill: "#7DD8FF"
          }, void 0, !1, {
            fileName: "app/components/skills/postgresql.tsx",
            lineNumber: 23,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M118.407 100.86C118.417 100.864 118.425 100.867 118.434 100.871L118.434 100.871C119.665 101.381 120.594 102.548 121.044 103.763C121.499 104.99 121.568 106.56 120.646 107.85C116.177 114.109 109.533 113.039 106.888 112.377C106.267 112.222 105.57 111.96 104.958 111.625C104.394 111.317 103.696 110.836 103.327 110.152C103.122 109.772 102.995 109.28 103.12 108.739C103.241 108.21 103.565 107.806 103.927 107.51C104.608 106.955 105.688 106.57 107.098 106.279L107.099 106.279C109.827 105.717 110.702 105.347 111.259 104.903C111.546 104.674 111.794 104.389 112.184 103.898C112.242 103.825 112.302 103.749 112.365 103.669C112.717 103.222 113.158 102.661 113.759 101.99M118.407 100.86C118.012 100.696 117.294 100.398 116.432 100.473L118.407 100.86ZM116.432 100.473C115.492 100.555 114.602 101.046 113.759 101.99L116.432 100.473ZM115.569 103.65L114.688 102.82L115.616 103.65C115.071 104.259 114.679 104.756 114.329 105.201C114.263 105.285 114.199 105.366 114.135 105.446C113.742 105.942 113.342 106.428 112.811 106.851C111.733 107.71 110.296 108.164 107.601 108.719M115.569 103.65C116.111 103.043 116.501 102.967 116.648 102.955L115.569 103.65ZM116.648 102.955C116.853 102.937 117.165 102.953 116.666 102.953L116.648 102.955ZM116.666 102.953C117.964 103.053 118.434 103.889 118.708 104.628C118.978 105.356 118.913 105.992 118.62 106.403C115.113 111.313 109.951 110.576 107.493 109.961L107.493 109.961C107.062 109.853 106.567 109.666 106.154 109.44C106.033 109.374 105.926 109.308 105.835 109.245C105.915 109.208 106.011 109.167 106.123 109.124C106.477 108.99 106.959 108.851 107.601 108.719",
            fill: "#7DD8FF"
          }, void 0, !1, {
            fileName: "app/components/skills/postgresql.tsx",
            lineNumber: 24,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M115.392 71.9914C117.286 72.7225 118.7 74.301 119.256 76.8691C120.562 82.9089 120.418 86.9794 119.718 90.0654C119.37 91.6016 118.89 92.8609 118.419 93.9572C118.238 94.3798 118.067 94.758 117.908 95.1123C117.636 95.7165 117.395 96.2509 117.184 96.8169C117.121 96.9885 117.058 97.1567 116.996 97.3217C116.602 98.3792 116.256 99.3072 116.016 100.171C115.739 101.167 115.644 101.942 115.742 102.578C115.846 103.258 115.379 103.893 114.7 103.998C114.02 104.102 113.384 103.635 113.28 102.955C113.254 102.79 113.237 102.624 113.226 102.458C106.335 102.29 100.856 95.6063 101.917 88.0214C102.52 83.7104 102.303 79.9913 102.179 77.8834C102.144 77.2756 102.177 78.1988 102.179 77.8834L102.278 76.1757C102.282 75.6353 102.434 75.5543 102.548 75.4157C102.715 75.2134 102.922 75.0232 103.133 74.8522C103.56 74.505 104.132 74.1298 104.786 73.7654C106.098 73.0354 107.863 72.2794 109.71 71.8531C111.535 71.4322 113.595 71.2973 115.392 71.9914ZM113.494 99.9692C113.532 99.8132 113.573 99.6579 113.616 99.5035C113.887 98.5282 114.276 97.4866 114.667 96.4401C114.727 96.2769 114.788 96.1136 114.849 95.9504L114.849 95.9498C115.086 95.3124 115.388 94.6401 115.686 93.9772C115.839 93.6385 115.99 93.3023 116.131 92.9743C116.568 91.9568 116.986 90.8497 117.289 89.5142C117.892 86.8567 118.068 83.1626 116.821 77.3957C116.425 75.5647 115.53 74.7149 114.495 74.3151C113.364 73.8783 111.875 73.91 110.27 74.2803C108.688 74.6452 107.142 75.3048 105.998 75.9417C105.425 76.2607 104.984 76.5568 104.704 76.7846C104.673 76.8104 104.645 76.834 104.62 76.8555C104.629 77.0308 104.642 77.2479 104.657 77.5028C104.777 79.4779 105.033 83.7218 104.384 88.3664C103.494 94.7279 108.142 99.9524 113.494 99.9692ZM104.475 76.9949C104.452 77.0289 104.444 77.0322 104.47 77.0009C104.471 76.9991 104.473 76.9971 104.475 76.9949Z",
            fill: "#7DD8FF"
          }, void 0, !1, {
            fileName: "app/components/skills/postgresql.tsx",
            lineNumber: 25,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
            d: "M111.474 76.3155C111.416 76.7229 112.22 77.8102 113.267 77.9555C114.313 78.1014 115.208 77.2517 115.265 76.8446C115.322 76.4372 114.519 75.9884 113.471 75.8425C112.425 75.6964 111.529 75.909 111.474 76.3155H111.474Z",
            fill: "#7DD8FF"
          }, void 0, !1, {
            fileName: "app/components/skills/postgresql.tsx",
            lineNumber: 26,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M113.529 75.4314C112.968 75.3531 112.428 75.3677 112.005 75.4679L113.529 75.4314ZM112.005 75.4679C111.795 75.5178 111.736 75.6617 111.57 75.7761L112.005 75.4679ZM111.57 75.7761C111.497 75.8269 111.332 75.8983 111.27 75.9759L111.57 75.7761ZM111.27 75.9759C111.27 75.9759 111.198 75.9483 111.171 75.9759C111.071 76.0758 111.063 76.2575 111.063 76.2575C111.03 76.4906 111.119 76.7313 111.214 76.9142C111.318 77.1152 111.47 77.3254 111.655 77.5202C112.022 77.9053 112.565 78.2773 113.21 78.3668M111.894 76.3945C111.895 76.3934 111.897 76.3922 111.898 76.3911C111.949 76.3558 112.045 76.3117 112.197 76.2759C112.497 76.2048 112.929 76.186 113.414 76.2538C113.9 76.3214 114.311 76.4575 114.58 76.608C114.716 76.6839 114.796 76.7526 114.836 76.8005C114.839 76.8044 114.842 76.8079 114.844 76.811C114.832 76.8374 114.805 76.8848 114.753 76.9504C114.672 77.0505 114.554 77.1628 114.404 77.2638C114.103 77.4678 113.72 77.5996 113.325 77.5444L113.324 77.5444C112.922 77.4885 112.539 77.2443 112.257 76.9476C112.118 76.8015 112.014 76.6544 111.951 76.5325C111.917 76.4666 111.901 76.4212 111.894 76.3945ZM115.477 76.273C115.605 76.4288 115.712 76.6464 115.676 76.902C115.647 77.1122 115.527 77.3121 115.4 77.4707C115.264 77.6398 115.083 77.8072 114.87 77.9512C114.448 78.2373 113.861 78.4574 113.21 78.3668M115.477 76.273C115.349 76.1177 115.174 75.9887 114.985 75.8832L115.477 76.273ZM114.985 75.8832C114.605 75.6709 114.09 75.5096 113.529 75.4314L114.985 75.8832Z",
            fill: "#7DD8FF"
          }, void 0, !1, {
            fileName: "app/components/skills/postgresql.tsx",
            lineNumber: 27,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
            d: "M143.331 75.4848C143.388 75.8923 142.585 76.9796 141.537 77.1248C140.49 77.2707 139.595 76.421 139.538 76.014C139.483 75.6065 140.285 75.1577 141.332 75.0119C142.379 74.866 143.274 75.0784 143.331 75.485V75.4848Z",
            fill: "#7DD8FF"
          }, void 0, !1, {
            fileName: "app/components/skills/postgresql.tsx",
            lineNumber: 28,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M142.655 75.2433C142.324 75.1649 141.865 75.1472 141.36 75.2175C140.856 75.2878 140.419 75.4302 140.123 75.5961C139.973 75.6794 139.869 75.7632 139.807 75.8381C139.746 75.9125 139.74 75.9604 139.743 75.9856C139.75 76.0335 139.79 76.1275 139.889 76.2497C139.983 76.3671 140.117 76.4931 140.283 76.6049C140.614 76.8295 141.048 76.9834 141.508 76.9193L141.508 76.9193C141.972 76.855 142.394 76.5789 142.697 76.2601C142.848 76.1018 142.964 75.9389 143.037 75.7972C143.115 75.6467 143.13 75.5505 143.125 75.5138L143.125 75.5138C143.121 75.4892 143.103 75.4448 143.023 75.3898C142.944 75.3348 142.821 75.2827 142.655 75.2433ZM143.259 75.0483C143.396 75.143 143.511 75.2776 143.536 75.4563L143.536 75.4563C143.559 75.6235 143.495 75.8159 143.406 75.9881C143.312 76.1693 143.172 76.3637 142.998 76.5463C142.653 76.9093 142.15 77.2495 141.565 77.3305C140.978 77.4123 140.442 77.2143 140.05 76.9487C139.853 76.8154 139.687 76.6618 139.565 76.51C139.447 76.3634 139.354 76.1988 139.332 76.043L139.332 76.042L139.332 76.042C139.308 75.8634 139.381 75.7025 139.487 75.574C139.593 75.4456 139.744 75.3317 139.92 75.2337C140.272 75.0369 140.761 74.8819 141.303 74.8063C141.845 74.7307 142.358 74.7463 142.75 74.8393C142.946 74.8857 143.123 74.9538 143.259 75.0483Z",
            fill: "#7DD8FF"
          }, void 0, !1, {
            fileName: "app/components/skills/postgresql.tsx",
            lineNumber: 29,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M145.84 72.7786C146.527 72.7416 148.281 71.9112 148.318 72.598C148.411 74.3279 148.223 75.7742 148.012 77.1618C147.988 77.325 147.963 77.487 147.938 77.6485C147.75 78.8689 147.567 80.0576 147.522 81.4801L147.522 81.4808C147.485 82.6155 147.602 83.815 147.756 85.1273C147.78 85.3364 147.806 85.5487 147.831 85.7638C147.965 86.8711 148.107 88.0516 148.165 89.2448C148.308 92.1396 147.975 95.271 145.875 98.4063C145.492 98.9778 144.719 99.1309 144.147 98.7482C143.576 98.3655 143.423 97.592 143.805 97.0204C145.501 94.4884 145.805 91.9559 145.678 89.3674C145.624 88.2699 145.494 87.1911 145.361 86.0842C145.335 85.8632 145.308 85.6411 145.282 85.4175C145.127 84.1006 144.989 82.7384 145.032 81.4007M145.84 72.7786C145.153 72.8157 145.803 72.0918 145.84 72.7786V72.7786ZM145.84 72.7786C145.74 74.2773 145.74 74.2773 145.55 76.789L145.84 72.7786ZM145.55 76.789C145.526 76.9457 145.501 77.1043 145.477 77.2651L145.55 76.789ZM145.477 77.2651C145.289 78.48 145.083 79.8179 145.032 81.3999L145.477 77.2651Z",
            fill: "#7DD8FF"
          }, void 0, !1, {
            fileName: "app/components/skills/postgresql.tsx",
            lineNumber: 30,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M110.054 59.8937C108.861 61.7794 107.523 64.1001 106.796 66.0108C106.078 67.8992 105.539 70.4915 105.177 72.6668C104.998 73.7432 104.866 74.6971 104.778 75.3814C104.734 75.7233 104.702 75.9973 104.681 76.1849C104.67 76.2787 104.662 76.3509 104.657 76.3991C104.654 76.4232 104.652 76.4413 104.651 76.4532L104.65 76.4662L104.649 76.4696C104.649 76.4696 104.649 76.4695 103.457 76.3469C102.264 76.2243 102.264 76.2242 102.264 76.2241L102.265 76.2179L102.266 76.2017C102.268 76.1878 102.27 76.1675 102.273 76.1412C102.278 76.0885 102.287 76.0117 102.298 75.9131C102.321 75.7159 102.354 75.4311 102.399 75.0774C102.49 74.3706 102.626 73.386 102.811 72.2733C103.178 70.0703 103.748 67.2815 104.555 65.1587C105.371 63.0108 106.82 60.5213 108.028 58.6116C108.638 57.647 109.199 56.8119 109.608 56.2177C109.812 55.9203 109.979 55.6827 110.095 55.5187C110.153 55.4367 110.198 55.3731 110.23 55.3295C110.245 55.3077 110.257 55.291 110.266 55.2794L110.275 55.2661L110.279 55.261C110.279 55.2609 110.279 55.2608 111.25 55.9645C112.221 56.6681 112.221 56.6681 112.221 56.668L112.219 56.6709L112.211 56.6817C112.204 56.6914 112.193 56.7064 112.179 56.7264C112.15 56.7662 112.107 56.8261 112.052 56.904C111.942 57.06 111.781 57.2887 111.584 57.5761C111.188 58.1515 110.645 58.9605 110.054 59.8937Z",
            fill: "#7DD8FF"
          }, void 0, !1, {
            fileName: "app/components/skills/postgresql.tsx",
            lineNumber: 31,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
            d: "M111.171 75.9759C111.171 75.9759 111.45 75.6935 111.67 75.5762C111.988 75.4074 112.211 75.408 112.57 75.3764C113.038 75.3351 113.308 75.3854 113.769 75.4763C114.168 75.5552 114.401 75.5984 114.768 75.7761C114.973 75.8753 115.091 75.9323 115.267 76.0758C115.396 76.1802 115.567 76.3756 115.567 76.3756L114.168 77.3747L113.569 78.3738H113.169L111.77 77.3747L111.171 75.9759Z",
            fill: "#7DD8FF"
          }, void 0, !1, {
            fileName: "app/components/skills/postgresql.tsx",
            lineNumber: 32,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
            d: "M107.374 107.749L115.867 103.252L116.466 102.853L116.866 102.753L117.166 102.853L117.565 103.153C117.565 103.153 117.013 102.986 116.666 103.053C116.235 103.135 115.717 103.652 115.717 103.652L115.067 104.252L114.668 104.352L108.173 108.548H107.374V107.749Z",
            fill: "#7DD8FF"
          }, void 0, !1, {
            fileName: "app/components/skills/postgresql.tsx",
            lineNumber: 33,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
            d: "M115.566 100.755L115.866 100.555C115.866 100.555 116.29 100.467 116.566 100.455C116.957 100.438 117.184 100.462 117.565 100.555C117.889 100.634 118.364 100.855 118.364 100.855L117.964 101.754H115.566V100.755Z",
            fill: "#7DD8FF"
          }, void 0, !1, {
            fileName: "app/components/skills/postgresql.tsx",
            lineNumber: 34,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M119.677 126.858C119.273 125.23 118.866 122.583 118.765 118.371C118.714 116.285 118.664 113.684 118.627 111.606C118.608 110.567 118.593 109.658 118.582 109.008C118.576 108.684 118.572 108.424 118.569 108.245L118.565 107.969C118.565 107.969 118.565 107.969 119.863 107.949C121.162 107.928 121.162 107.928 121.162 107.928L121.167 108.203C121.169 108.381 121.174 108.641 121.179 108.965C121.19 109.613 121.206 110.521 121.224 111.559C121.262 113.636 121.312 116.231 121.362 118.308C121.46 122.389 121.852 124.838 122.198 126.232C122.371 126.928 122.53 127.354 122.631 127.585C122.681 127.7 122.716 127.766 122.731 127.792C122.738 127.805 122.741 127.808 122.737 127.802C122.735 127.8 122.732 127.795 122.727 127.787C122.724 127.784 122.722 127.78 122.718 127.775L122.713 127.768L122.71 127.764L122.709 127.762C122.708 127.761 122.707 127.76 121.662 128.531C120.616 129.301 120.615 129.3 120.615 129.299L120.613 129.297L120.61 129.293L120.603 129.283C120.599 129.277 120.594 129.27 120.589 129.263C120.578 129.248 120.567 129.231 120.555 129.212C120.531 129.175 120.503 129.129 120.472 129.074C120.409 128.964 120.334 128.817 120.25 128.624C120.082 128.24 119.879 127.673 119.677 126.858Z",
            fill: "#7DD8FF"
          }, void 0, !1, {
            fileName: "app/components/skills/postgresql.tsx",
            lineNumber: 35,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M143.743 105.55L141.945 122.136L139.561 121.878L141.359 105.292L143.743 105.55Z",
            fill: "#7DD8FF"
          }, void 0, !1, {
            fileName: "app/components/skills/postgresql.tsx",
            lineNumber: 36,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/components/skills/postgresql.tsx",
        lineNumber: 19,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("defs", {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("clipPath", {
          id: "clip0_1111_240",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
            width: "86.3399",
            height: "89",
            fill: "white",
            transform: "translate(77 48)"
          }, void 0, !1, {
            fileName: "app/components/skills/postgresql.tsx",
            lineNumber: 40,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/components/skills/postgresql.tsx",
          lineNumber: 39,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/skills/postgresql.tsx",
        lineNumber: 38,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/skills/postgresql.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/components/skills/figma.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Figma() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
    width: "250",
    height: "250",
    viewBox: "0 0 250 250",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-full w-full",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
        x: "22",
        width: "40",
        height: "2",
        stroke: "#7dd8ff",
        strokeWidth: "2"
      }, void 0, !1, {
        fileName: "app/components/skills/figma.tsx",
        lineNumber: 4,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
        y: "62",
        width: "40",
        height: "2",
        transform: "rotate(-90 0 62)",
        stroke: "#7dd8ff",
        strokeWidth: "2"
      }, void 0, !1, {
        fileName: "app/components/skills/figma.tsx",
        lineNumber: 6,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
        y: "21.9204",
        width: "31",
        height: "2",
        transform: "rotate(-45 0 21.9204)",
        stroke: "#7dd8ff",
        strokeWidth: "2"
      }, void 0, !1, {
        fileName: "app/components/skills/figma.tsx",
        lineNumber: 8,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        className: "skills-border",
        d: "M-9.58167e-07 228.08L21.9203 250L22.0004 249.92L22.0004 250L188 250L188 248L22.7487 248L2.0004 227.252L2.00039 62L0.000380711 62L0.000387967 228L0.0796899 228L-9.58167e-07 228.08Z"
      }, void 0, !1, {
        fileName: "app/components/skills/figma.tsx",
        lineNumber: 10,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        className: "skills-border",
        d: "M250.001 21.9203L228.081 -9.58167e-07L228.001 0.0800772L228.001 7.25607e-06L62.0006 0L62.0006 1.99999L227.252 2L248.001 22.7484L248.001 188L250.001 188L250.001 22L249.921 22L250.001 21.9203Z"
      }, void 0, !1, {
        fileName: "app/components/skills/figma.tsx",
        lineNumber: 11,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
        x: "228",
        y: "250",
        width: "40",
        height: "2",
        transform: "rotate(-180 228 250)",
        stroke: "#7dd8ff",
        strokeWidth: "2"
      }, void 0, !1, {
        fileName: "app/components/skills/figma.tsx",
        lineNumber: 12,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
        x: "250",
        y: "188",
        width: "40",
        height: "2",
        transform: "rotate(90 250 188)",
        stroke: "#7dd8ff",
        strokeWidth: "2"
      }, void 0, !1, {
        fileName: "app/components/skills/figma.tsx",
        lineNumber: 14,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
        x: "250",
        y: "228.08",
        width: "31",
        height: "2",
        transform: "rotate(135 250 228.08)",
        stroke: "#7dd8ff",
        strokeWidth: "2"
      }, void 0, !1, {
        fileName: "app/components/skills/figma.tsx",
        lineNumber: 16,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        d: "M101.566 161.598H86.5664V176H84.1641V159.195H101.566V161.598ZM99.5039 168.805H87.7617V166.402H99.5039V168.805ZM106.699 159.805C106.699 160.055 106.652 160.289 106.559 160.508C106.465 160.719 106.336 160.906 106.172 161.07C106.008 161.234 105.816 161.363 105.598 161.457C105.379 161.551 105.148 161.598 104.906 161.598C104.656 161.598 104.422 161.551 104.203 161.457C103.984 161.363 103.793 161.234 103.629 161.07C103.465 160.906 103.336 160.719 103.242 160.508C103.148 160.289 103.102 160.055 103.102 159.805C103.102 159.562 103.148 159.332 103.242 159.113C103.336 158.895 103.465 158.703 103.629 158.539C103.793 158.375 103.984 158.246 104.203 158.152C104.422 158.051 104.656 158 104.906 158C105.148 158 105.379 158.051 105.598 158.152C105.816 158.246 106.008 158.375 106.172 158.539C106.336 158.703 106.465 158.895 106.559 159.113C106.652 159.332 106.699 159.562 106.699 159.805ZM106.102 176H103.699V162.805H106.102V176ZM124.277 176.598C124.277 177.184 124.164 177.73 123.938 178.238C123.719 178.746 123.418 179.191 123.035 179.574C122.66 179.957 122.215 180.258 121.699 180.477C121.191 180.695 120.648 180.805 120.07 180.805H110.473V178.402H120.07C120.312 178.402 120.543 178.355 120.762 178.262C120.98 178.168 121.172 178.039 121.336 177.875C121.5 177.711 121.629 177.52 121.723 177.301C121.824 177.082 121.875 176.848 121.875 176.598V165.195H115.277C114.699 165.203 114.156 165.32 113.648 165.547C113.148 165.766 112.711 166.066 112.336 166.449C111.961 166.824 111.664 167.266 111.445 167.773C111.234 168.281 111.129 168.824 111.129 169.402C111.129 169.98 111.234 170.523 111.445 171.031C111.664 171.531 111.961 171.973 112.336 172.355C112.711 172.73 113.148 173.031 113.648 173.258C114.156 173.477 114.699 173.59 115.277 173.598H120.68V176H115.277C114.371 175.992 113.52 175.816 112.723 175.473C111.926 175.121 111.23 174.648 110.637 174.055C110.051 173.453 109.586 172.754 109.242 171.957C108.898 171.16 108.727 170.309 108.727 169.402C108.727 168.496 108.898 167.645 109.242 166.848C109.586 166.051 110.051 165.355 110.637 164.762C111.23 164.16 111.926 163.688 112.723 163.344C113.52 162.992 114.371 162.812 115.277 162.805H124.277V176.598ZM130.125 176H127.723V162.805H140.379C141.285 162.805 142.137 162.98 142.934 163.332C143.73 163.676 144.422 164.148 145.008 164.75C145.602 165.344 146.07 166.043 146.414 166.848C146.758 167.645 146.93 168.496 146.93 169.402V176H144.527V169.402C144.527 168.824 144.418 168.281 144.199 167.773C143.98 167.266 143.684 166.824 143.309 166.449C142.934 166.066 142.492 165.766 141.984 165.547C141.484 165.32 140.949 165.203 140.379 165.195H138.527V176H136.125V165.195H130.125V176ZM165.211 176H153.211C152.625 176 152.078 175.891 151.57 175.672C151.062 175.453 150.617 175.156 150.234 174.781C149.852 174.398 149.551 173.953 149.332 173.445C149.113 172.93 149.004 172.383 149.004 171.805C149.004 171.219 149.113 170.672 149.332 170.164C149.551 169.656 149.852 169.211 150.234 168.828C150.617 168.445 151.062 168.145 151.57 167.926C152.078 167.707 152.625 167.598 153.211 167.598H161.602V170H153.211C152.961 170 152.727 170.051 152.508 170.152C152.289 170.246 152.098 170.375 151.934 170.539C151.77 170.703 151.641 170.895 151.547 171.113C151.453 171.332 151.406 171.562 151.406 171.805C151.406 172.055 151.453 172.289 151.547 172.508C151.641 172.719 151.77 172.906 151.934 173.07C152.098 173.234 152.289 173.363 152.508 173.457C152.727 173.551 152.961 173.598 153.211 173.598H162.809V167C162.809 166.758 162.758 166.527 162.656 166.309C162.562 166.09 162.434 165.898 162.27 165.734C162.105 165.57 161.914 165.441 161.695 165.348C161.477 165.246 161.246 165.195 161.004 165.195H151.406V162.805H161.004C161.59 162.805 162.137 162.914 162.645 163.133C163.152 163.352 163.598 163.652 163.98 164.035C164.363 164.41 164.664 164.852 164.883 165.359C165.102 165.867 165.211 166.414 165.211 167V176Z",
        fill: "#7DD8FF"
      }, void 0, !1, {
        fileName: "app/components/skills/figma.tsx",
        lineNumber: 18,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        d: "M109.83 134C118.017 134 124.661 127.355 124.661 119.167V104.333H109.83C101.644 104.333 95 110.979 95 119.167C95 127.355 101.644 134 109.83 134Z",
        fill: "#7DD8FF"
      }, void 0, !1, {
        fileName: "app/components/skills/figma.tsx",
        lineNumber: 19,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        d: "M95 89.5001C95 81.3121 101.644 74.6667 109.83 74.6667H124.661V104.333H109.83C101.644 104.333 95 97.6881 95 89.5001Z",
        fill: "#7DD8FF"
      }, void 0, !1, {
        fileName: "app/components/skills/figma.tsx",
        lineNumber: 20,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        d: "M95 59.8333C95 51.6453 101.644 45 109.83 45H124.661V74.6667H109.83C101.644 74.6667 95 68.0213 95 59.8333Z",
        fill: "#7DD8FF"
      }, void 0, !1, {
        fileName: "app/components/skills/figma.tsx",
        lineNumber: 21,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        d: "M124.66 45H139.491C147.677 45 154.321 51.6453 154.321 59.8333C154.321 68.0213 147.677 74.6667 139.491 74.6667H124.66V45Z",
        fill: "#7DD8FF"
      }, void 0, !1, {
        fileName: "app/components/skills/figma.tsx",
        lineNumber: 22,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
        d: "M154.321 89.5001C154.321 97.6881 147.677 104.333 139.491 104.333C131.304 104.333 124.66 97.6881 124.66 89.5001C124.66 81.3121 131.304 74.6667 139.491 74.6667C147.677 74.6667 154.321 81.3121 154.321 89.5001Z",
        fill: "#7DD8FF"
      }, void 0, !1, {
        fileName: "app/components/skills/figma.tsx",
        lineNumber: 23,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/skills/figma.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/routes/skills.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Skills() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "grid grid-cols-2 gap-20 md:grid-cols-3 xl:grid-cols-4 2xl:gap-40",
    children: skills.map((skill, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
      href: skill.skillUrl,
      target: "_blank",
      rel: "noreferrer noopener nofollow",
      className: "skills-card col-span-1 row-span-1 grid",
      children: [
        skill.skillSvg === "golang" /* Golang */ && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Golang, {}, void 0, !1, {
          fileName: "app/routes/skills.tsx",
          lineNumber: 21,
          columnNumber: 52
        }, this),
        skill.skillSvg === "figma" /* Figma */ && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Figma, {}, void 0, !1, {
          fileName: "app/routes/skills.tsx",
          lineNumber: 22,
          columnNumber: 51
        }, this),
        skill.skillSvg === "typescript" /* Typescript */ && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Typescript, {}, void 0, !1, {
          fileName: "app/routes/skills.tsx",
          lineNumber: 23,
          columnNumber: 56
        }, this),
        skill.skillSvg === "nextjs" /* NextJs */ && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nextjs, {}, void 0, !1, {
          fileName: "app/routes/skills.tsx",
          lineNumber: 24,
          columnNumber: 52
        }, this),
        skill.skillSvg === "linux" /* Linux */ && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Linux, {}, void 0, !1, {
          fileName: "app/routes/skills.tsx",
          lineNumber: 25,
          columnNumber: 51
        }, this),
        skill.skillSvg === "postgresql" /* PostgreSql */ && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Postgresql, {}, void 0, !1, {
          fileName: "app/routes/skills.tsx",
          lineNumber: 26,
          columnNumber: 56
        }, this)
      ]
    }, i, !0, {
      fileName: "app/routes/skills.tsx",
      lineNumber: 14,
      columnNumber: 9
    }, this))
  }, void 0, !1, {
    fileName: "app/routes/skills.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
var import_react12 = require("react");

// app/data/locales/services/common.ts
var cz3 = {
  title: "Jakub Vantuch",
  desc: "Webov\xE9 str\xE1nky a dal\u0161\xED \u0159e\u0161en\xED na m\xEDru va\u0161emu z\xE1m\u011Bru",
  customers: [
    {
      title: "E-Commerce",
      icon: "cart" /* Cart */,
      desc: [
        {
          title: "E-Shop",
          text: "Tvorba e-shopu s administra\u010Dn\xEDm prost\u0159ed\xEDm pro mal\xE9 i velk\xE9 prodejce. P\u0159ipojen\xED a nastaven\xED platebn\xED br\xE1ny, kter\xE1 bude nejvhodn\u011Bj\u0161\xED pro v\xE1\u0161 p\u0159\xEDpad."
        },
        {
          title: "Partne\u0159i",
          text: "Napojen\xED na strategick\xE9 partnery, specialisty na soci\xE1ln\xED s\xEDt\u011B a marketingov\xE9 firmy."
        },
        {
          title: "Focen\xED produktu",
          text: "Domluven\xED fotografa ve va\u0161em okol\xED, kter\xFD fotografie va\u0161eho produktu p\u0159izp\u016Fsob\xED designu."
        },
        {
          title: "Design",
          text: "Design grafiky loga, produkt\u016F, merche, soci\xE1ln\xEDch s\xEDt\xED, vizitek a email\u016F."
        }
      ]
    },
    {
      title: "Blog",
      icon: "blog" /* Blog */,
      desc: [
        {
          title: "Webov\xE1 prezentace",
          text: "Va\u0161e str\xE1nka, kter\xE1 v\xE1m pom\u016F\u017Ee prezentovat va\u0161e osobn\xED z\xE1m\u011Bry a my\u0161lenky jasn\xFDm a srozumiteln\xFDm zp\u016Fsobem."
        },
        {
          title: "Design",
          text: "Design grafiky soci\xE1ln\xEDch s\xEDt\xED, vizitek a email\u016F."
        }
      ]
    },
    {
      title: "Chata",
      icon: "cabin" /* Cabin */,
      desc: [
        {
          title: "Webov\xE1 str\xE1nka",
          text: "Design a tvorba webov\xE9 str\xE1nky s administra\u010Dn\xEDm prost\u0159ed\xEDm pro mal\xE9 i velk\xE9 chaty."
        },
        {
          title: "Rezerva\u010Dn\xED syst\xE9m",
          text: "D\xEDky rezerva\u010Dn\xEDmu syst\xE9mu napojen\xE9mu na kalend\xE1\u0159 budete m\xEDt dokonal\xFD p\u0159ehled o v\u0161ech rezervac\xEDch."
        },
        {
          title: "Focen\xED chaty a ubytov\xE1n\xED",
          text: "Domluven\xED fotografa a pop\u0159\xEDpad\u011B i projektov\xE9ho designera ve va\u0161em okol\xED, kte\u0159\xED va\u0161\xED chat\u011B zajist\xED nejlep\u0161\xED mo\u017En\xFD vzhled pou\u017Eiteln\xFD jak na webu tak i na soci\xE1ln\xEDch str\xE1nk\xE1ch."
        }
      ]
    },
    {
      title: "Kav\xE1rna",
      icon: "coffee" /* Coffee */,
      desc: [
        {
          title: "Webov\xE1 str\xE1nka",
          text: "Design a tvorba webov\xE9 str\xE1nky s administra\u010Dn\xEDm prost\u0159ed\xEDm pro mal\xE9 i velk\xE9 kav\xE1rny."
        },
        {
          title: "E-Shop",
          text: "Pokud m\xE1te vlastn\xED pra\u017Eenou k\xE1vu nebo chcete prod\xE1vat produkty, kter\xE9 pomohou va\u0161emu podniku tak je pro v\xE1s e-shopu nezbytn\xFD. E-shop dok\xE1\u017Eete jednodu\u0161e spravovat p\u0159es jednoduch\xE9 administra\u010Dn\xED prost\u0159ed\xED nebo se domluvit na spr\xE1v\u011B e-shopu mnou. Pro jak\xFDkoliv dotaz pot\xE9 sta\u010D\xED napsat na m\u016Fj e-mail"
        },
        {
          title: "Design",
          text: "Design grafiky loga, produkt\u016F, merche, soci\xE1ln\xEDch s\xEDt\xED, vizitek a email\u016F."
        },
        {
          title: "Focen\xED chaty a ubytov\xE1n\xED",
          text: "Domluven\xED fotografa a pop\u0159\xEDpad\u011B i projektov\xE9ho designera ve va\u0161em okol\xED, kte\u0159\xED va\u0161\xED kav\xE1rn\u011B zajist\xED nejlep\u0161\xED mo\u017En\xFD vzhled pou\u017Eiteln\xFD jak na webu tak i na soci\xE1ln\xEDch str\xE1nk\xE1ch."
        }
      ]
    },
    {
      title: "\u010Cajovna",
      icon: "tea" /* Tea */,
      desc: [
        {
          title: "Webov\xE1 str\xE1nka",
          text: "Design a tvorba webov\xE9 str\xE1nky s administra\u010Dn\xEDm prost\u0159ed\xEDm pro mal\xE9 i velk\xE9 \u010Dajovny."
        },
        {
          title: "E-Shop",
          text: "Pokud m\xE1te vlastn\xED produkty, kter\xE9 pomohou va\u0161emu podniku tak je pro v\xE1s e-shopu nezbytn\xFD. E-shop dok\xE1\u017Eete jednodu\u0161e spravovat p\u0159es jednoduch\xE9 administra\u010Dn\xED prost\u0159ed\xED nebo se domluvit na spr\xE1v\u011B e-shopu mnou. Pro jak\xFDkoliv dotaz pot\xE9 sta\u010D\xED napsat na m\u016Fj e-mail"
        }
      ]
    },
    {
      title: "\u0158emesln\xEDk",
      icon: "hammer" /* Hammer */,
      desc: [
        {
          title: "Webov\xE1 str\xE1nka",
          text: "Design a tvorba webov\xE9 str\xE1nky s administra\u010Dn\xEDm prost\u0159ed\xEDm, kde z\u0159eteln\u011B pop\xED\u0161ete a uspo\u0159\xE1d\xE1te informace o va\u0161\xED nab\xEDdce."
        }
      ]
    },
    {
      title: "Z\xE1me\u010Dn\xEDk",
      icon: "lock" /* Lock */,
      desc: [
        {
          title: "Webov\xE1 str\xE1nka",
          text: "Design a tvorba webov\xE9 str\xE1nky s administra\u010Dn\xEDm prost\u0159ed\xEDm pro samostatn\xE9 z\xE1me\u010Dn\xEDky i v\u011Bt\u0161\xED podniky."
        }
      ]
    },
    {
      title: "Cestovn\xED agentura",
      icon: "plane" /* Plane */,
      desc: [
        {
          title: "Webov\xE1 str\xE1nka",
          text: "Design a tvorba webov\xE9 str\xE1nky s administra\u010Dn\xEDm prost\u0159ed\xEDm pro mal\xE9 i velk\xE9 agentury."
        }
      ]
    },
    {
      title: "Kade\u0159n\xEDk / Barber",
      icon: "scissors" /* Scissors */,
      desc: [
        {
          title: "Webov\xE1 str\xE1nka",
          text: "Design a tvorba webov\xE9 str\xE1nky s administra\u010Dn\xEDm prost\u0159ed\xEDm pro mal\xE9 i velk\xE9 podniky."
        },
        {
          title: "Design",
          text: "Design grafiky soci\xE1ln\xEDch s\xEDt\xED, vizitek a email\u016F."
        },
        {
          title: "Partne\u0159i",
          text: "Napojen\xED na strategick\xE9 partnery, specialisty na soci\xE1ln\xED s\xEDt\u011B a marketingov\xE9 firmy."
        }
      ]
    },
    {
      title: "Auto\u0161kola",
      icon: "car" /* Car */,
      desc: [
        {
          title: "Webov\xE1 str\xE1nka",
          text: "Design a tvorba webov\xE9 str\xE1nky s administra\u010Dn\xEDm prost\u0159ed\xEDm pro mal\xE9 i velk\xE9 auto\u0161koly."
        }
      ]
    },
    {
      title: "Kapela",
      icon: "guitar" /* Guitar */,
      desc: [
        {
          title: "E-Shop",
          text: "Design a vytvo\u0159en\xED e-shopu s administra\u010Dn\xEDm prost\u0159ed\xEDm pro mal\xE9 i velk\xE9 prodejce."
        },
        {
          title: "Podpora",
          text: "Napojen\xED na strategick\xE9 partnery a marketingov\xE9 firmy."
        }
      ]
    },
    {
      title: "Startup",
      icon: "lightbulb" /* Lightbulb */,
      desc: [
        {
          title: "E-Shop",
          text: "Design a vytvo\u0159en\xED e-shopu s administra\u010Dn\xEDm prost\u0159ed\xEDm pro mal\xE9 i velk\xE9 prodejce."
        },
        {
          title: "Podpora",
          text: "Napojen\xED na strategick\xE9 partnery a marketingov\xE9 firmy."
        }
      ]
    },
    {
      title: "Ostatn\xED",
      icon: "other" /* Other */,
      desc: [
        {
          title: "E-Shop",
          text: "Design a vytvo\u0159en\xED e-shopu s administra\u010Dn\xEDm prost\u0159ed\xEDm pro mal\xE9 i velk\xE9 prodejce."
        },
        {
          title: "Podpora",
          text: "Napojen\xED na strategick\xE9 partnery a marketingov\xE9 firmy."
        }
      ]
    }
  ]
}, en3 = {
  title: "Jakub Vantuch",
  desc: "Websites and other solutions tailored to your needs",
  customers: [
    {
      title: "E-Commerce",
      icon: "cart" /* Cart */,
      desc: [
        {
          title: "E-Shop",
          text: "Design a vytvo\u0159en\xED e-shopu s administra\u010Dn\xEDm prost\u0159ed\xEDm pro mal\xE9 i velk\xE9 prodejce."
        },
        {
          title: "Podpora",
          text: "Napojen\xED na strategick\xE9 partnery a marketingov\xE9 firmy."
        }
      ]
    },
    {
      title: "Blog",
      icon: "blog" /* Blog */,
      desc: [
        {
          title: "E-Shop",
          text: "Design a vytvo\u0159en\xED e-shopu s administra\u010Dn\xEDm prost\u0159ed\xEDm pro mal\xE9 i velk\xE9 prodejce."
        },
        {
          title: "Podpora",
          text: "Napojen\xED na strategick\xE9 partnery a marketingov\xE9 firmy."
        }
      ]
    },
    {
      title: "Cabin",
      icon: "cabin" /* Cabin */,
      desc: [
        {
          title: "E-Shop",
          text: "Design a vytvo\u0159en\xED e-shopu s administra\u010Dn\xEDm prost\u0159ed\xEDm pro mal\xE9 i velk\xE9 prodejce."
        },
        {
          title: "Podpora",
          text: "Napojen\xED na strategick\xE9 partnery a marketingov\xE9 firmy."
        }
      ]
    },
    {
      title: "Cafe",
      icon: "coffee" /* Coffee */,
      desc: [
        {
          title: "E-Shop",
          text: "Design a vytvo\u0159en\xED e-shopu s administra\u010Dn\xEDm prost\u0159ed\xEDm pro mal\xE9 i velk\xE9 prodejce."
        },
        {
          title: "Podpora",
          text: "Napojen\xED na strategick\xE9 partnery a marketingov\xE9 firmy."
        }
      ]
    },
    {
      title: "Teahouse",
      icon: "tea" /* Tea */,
      desc: [
        {
          title: "E-Shop",
          text: "Design a vytvo\u0159en\xED e-shopu s administra\u010Dn\xEDm prost\u0159ed\xEDm pro mal\xE9 i velk\xE9 prodejce."
        },
        {
          title: "Podpora",
          text: "Napojen\xED na strategick\xE9 partnery a marketingov\xE9 firmy."
        }
      ]
    },
    {
      title: "Craftsman",
      icon: "hammer" /* Hammer */,
      desc: [
        {
          title: "E-Shop",
          text: "Design a vytvo\u0159en\xED e-shopu s administra\u010Dn\xEDm prost\u0159ed\xEDm pro mal\xE9 i velk\xE9 prodejce."
        },
        {
          title: "Podpora",
          text: "Napojen\xED na strategick\xE9 partnery a marketingov\xE9 firmy."
        }
      ]
    },
    {
      title: "Locksmith",
      icon: "lock" /* Lock */,
      desc: [
        {
          title: "E-Shop",
          text: "Design a vytvo\u0159en\xED e-shopu s administra\u010Dn\xEDm prost\u0159ed\xEDm pro mal\xE9 i velk\xE9 prodejce."
        },
        {
          title: "Podpora",
          text: "Napojen\xED na strategick\xE9 partnery a marketingov\xE9 firmy."
        }
      ]
    },
    {
      title: "Travel agency",
      icon: "plane" /* Plane */,
      desc: [
        {
          title: "E-Shop",
          text: "Design a vytvo\u0159en\xED e-shopu s administra\u010Dn\xEDm prost\u0159ed\xEDm pro mal\xE9 i velk\xE9 prodejce."
        },
        {
          title: "Podpora",
          text: "Napojen\xED na strategick\xE9 partnery a marketingov\xE9 firmy."
        }
      ]
    },
    {
      title: "Hairdresser / Barber",
      icon: "scissors" /* Scissors */,
      desc: [
        {
          title: "E-Shop",
          text: "Design a vytvo\u0159en\xED e-shopu s administra\u010Dn\xEDm prost\u0159ed\xEDm pro mal\xE9 i velk\xE9 prodejce."
        },
        {
          title: "Podpora",
          text: "Napojen\xED na strategick\xE9 partnery a marketingov\xE9 firmy."
        }
      ]
    },
    {
      title: "Driving school",
      icon: "car" /* Car */,
      desc: [
        {
          title: "E-Shop",
          text: "Design a vytvo\u0159en\xED e-shopu s administra\u010Dn\xEDm prost\u0159ed\xEDm pro mal\xE9 i velk\xE9 prodejce."
        },
        {
          title: "Podpora",
          text: "Napojen\xED na strategick\xE9 partnery a marketingov\xE9 firmy."
        }
      ]
    },
    {
      title: "Music band",
      icon: "guitar" /* Guitar */,
      desc: [
        {
          title: "E-Shop",
          text: "Design a vytvo\u0159en\xED e-shopu s administra\u010Dn\xEDm prost\u0159ed\xEDm pro mal\xE9 i velk\xE9 prodejce."
        },
        {
          title: "Podpora",
          text: "Napojen\xED na strategick\xE9 partnery a marketingov\xE9 firmy."
        }
      ]
    },
    {
      title: "Startup",
      icon: "lightbulb" /* Lightbulb */,
      desc: [
        {
          title: "E-Shop",
          text: "Design a vytvo\u0159en\xED e-shopu s administra\u010Dn\xEDm prost\u0159ed\xEDm pro mal\xE9 i velk\xE9 prodejce."
        },
        {
          title: "Podpora",
          text: "Napojen\xED na strategick\xE9 partnery a marketingov\xE9 firmy."
        }
      ]
    },
    {
      title: "Other",
      icon: "other" /* Other */,
      desc: [
        {
          title: "E-Shop",
          text: "Design a vytvo\u0159en\xED e-shopu s administra\u010Dn\xEDm prost\u0159ed\xEDm pro mal\xE9 i velk\xE9 prodejce."
        },
        {
          title: "Podpora",
          text: "Napojen\xED na strategick\xE9 partnery a marketingov\xE9 firmy."
        }
      ]
    }
  ]
};

// app/routes/index.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Index() {
  let { locale } = useLocale(), [activeCustomerField, setActiveCustomerField] = (0, import_react12.useState)(0), t = (0, import_react12.useMemo)(() => locale === "en" /* en */ ? en3 : cz3, [locale]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "h-full",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "flex flex-col",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
          className: "flex flex-row contact-link text-xl sm:text-4xl mb-3",
          children: t.title
        }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 18,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
          className: "flex flex-row contact-link sm:text-xl",
          children: t.desc
        }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 21,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "flex flex-row border-sky-400 border-t-2 w-full my-10"
        }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 24,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "flex flex-row",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "flex-col w-content-one-third sm:w-content-half",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "flex flex-row gap-4 flex-wrap",
                children: t.customers.map((c, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: `relative flex flex-row customer-field py-2 border-sky-400 border-2 hover:cursor-pointer ${activeCustomerField === i && "customer-field-active"} items-center`,
                  onClick: () => setActiveCustomerField(i),
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "t-customer-field l-customer-field border-r-sky-400 bg-main absolute h-4 w-4 rotate-45 border-r-2"
                    }, void 0, !1, {
                      fileName: "app/routes/index.tsx",
                      lineNumber: 34,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "b-customer-field r-customer-field border-r-sky-400 bg-main absolute h-4 w-4 rotate-45 border-l-2"
                    }, void 0, !1, {
                      fileName: "app/routes/index.tsx",
                      lineNumber: 35,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                      src: activeCustomerField === i ? `/svg/icons/dark/${c.icon}.svg` : `/svg/icons/${c.icon}.svg`,
                      className: "h-8 scale-75 w-1/5 mx-1 sm:mr-0",
                      alt: c.title
                    }, void 0, !1, {
                      fileName: "app/routes/index.tsx",
                      lineNumber: 36,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                      className: "text-xs sm:text-base w-4/5",
                      children: c.title
                    }, void 0, !1, {
                      fileName: "app/routes/index.tsx",
                      lineNumber: 41,
                      columnNumber: 19
                    }, this)
                  ]
                }, i, !0, {
                  fileName: "app/routes/index.tsx",
                  lineNumber: 29,
                  columnNumber: 17
                }, this))
              }, void 0, !1, {
                fileName: "app/routes/index.tsx",
                lineNumber: 27,
                columnNumber: 13
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 26,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "flex-col w-content-two-thirds sm:w-content-half pl-3 sm:px-8",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "flex flex-row justify-start items-center",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                      src: `/svg/icons/${t.customers[activeCustomerField].icon}.svg`,
                      className: "h-8 sm:h-10 scale-75 mr-2",
                      alt: t.customers[activeCustomerField].title
                    }, void 0, !1, {
                      fileName: "app/routes/index.tsx",
                      lineNumber: 50,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                      className: "text-base sm:text-xl ",
                      children: t.customers[activeCustomerField].title
                    }, void 0, !1, {
                      fileName: "app/routes/index.tsx",
                      lineNumber: 55,
                      columnNumber: 15
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/index.tsx",
                  lineNumber: 49,
                  columnNumber: 13
                }, this),
                t.customers[activeCustomerField].desc.map((desc, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "mt-5 ml-1",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                      children: desc.title
                    }, void 0, !1, {
                      fileName: "app/routes/index.tsx",
                      lineNumber: 61,
                      columnNumber: 17
                    }, this),
                    " ",
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, !1, {
                      fileName: "app/routes/index.tsx",
                      lineNumber: 61,
                      columnNumber: 43
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                      className: "mt-1 text-customer-desc",
                      children: desc.text
                    }, void 0, !1, {
                      fileName: "app/routes/index.tsx",
                      lineNumber: 62,
                      columnNumber: 17
                    }, this)
                  ]
                }, i, !0, {
                  fileName: "app/routes/index.tsx",
                  lineNumber: 60,
                  columnNumber: 15
                }, this))
              ]
            }, void 0, !0, {
              fileName: "app/routes/index.tsx",
              lineNumber: 48,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/index.tsx",
          lineNumber: 25,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/index.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}

// app/routes/work.tsx
var work_exports = {};
__export(work_exports, {
  default: () => Work
});
var import_remix_image2 = require("remix-image"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
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
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_remix_image2.Image, {
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
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_remix_image2.Image, {
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
var assets_manifest_default = { version: "84b23552", entry: { module: "/build/entry.client-VD5M43FA.js", imports: ["/build/_shared/chunk-GZLMHRJT.js", "/build/_shared/chunk-VFZ2QWLC.js", "/build/_shared/chunk-4IYZMDEG.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-6MY46ZP6.js", imports: ["/build/_shared/chunk-VJ5NUVZ3.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api/image": { id: "routes/api/image", parentId: "root", path: "api/image", index: void 0, caseSensitive: void 0, module: "/build/routes/api/image-H3LVIN35.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/contact": { id: "routes/contact", parentId: "root", path: "contact", index: void 0, caseSensitive: void 0, module: "/build/routes/contact-HD4TCATM.js", imports: ["/build/_shared/chunk-PH4JMBAY.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-KX2GEDD3.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/skills": { id: "routes/skills", parentId: "root", path: "skills", index: void 0, caseSensitive: void 0, module: "/build/routes/skills-RMDYLX7T.js", imports: ["/build/_shared/chunk-PH4JMBAY.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/work": { id: "routes/work", parentId: "root", path: "work", index: void 0, caseSensitive: void 0, module: "/build/routes/work-BFH4IUWZ.js", imports: ["/build/_shared/chunk-PH4JMBAY.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-84B23552.js" };

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
