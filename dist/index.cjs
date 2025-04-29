"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Button: () => Button_default,
  Card: () => Card_default
});
module.exports = __toCommonJS(index_exports);

// src/components/Button/Button.tsx
var import_antd = require("antd");
var import_jsx_runtime = require("react/jsx-runtime");
var Button = ({ label, onClick, ...props }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    {
      style: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_antd.Button, { onClick, ...props, children: label })
    }
  );
};
var Button_default = Button;

// src/components/Card/Card.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var Card = ({ title, content, footer }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_jsx_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
    "div",
    {
      style: {
        border: "1px solid #ccc",
        borderRadius: "4px",
        padding: "16px",
        width: "300px"
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h2", { style: { margin: "0 0 16px 0" }, children: title }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { style: { margin: "0 0 16px 0" }, children: content }),
        footer && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { style: { marginTop: "16px" }, children: footer })
      ]
    }
  ) });
};
var Card_default = Card;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button,
  Card
});
