// src/components/Button/Button.tsx
import { Button as AntdButton } from "antd";
import { jsx } from "react/jsx-runtime";
var Button = ({ label, onClick, ...props }) => {
  return /* @__PURE__ */ jsx(
    "div",
    {
      style: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      },
      children: /* @__PURE__ */ jsx(AntdButton, { onClick, ...props, children: label })
    }
  );
};
var Button_default = Button;

// src/components/Card/Card.tsx
import { Fragment, jsx as jsx2, jsxs } from "react/jsx-runtime";
var Card = ({ title, content, footer }) => {
  return /* @__PURE__ */ jsx2(Fragment, { children: /* @__PURE__ */ jsxs(
    "div",
    {
      style: {
        border: "1px solid #ccc",
        borderRadius: "4px",
        padding: "16px",
        width: "300px"
      },
      children: [
        /* @__PURE__ */ jsx2("h2", { style: { margin: "0 0 16px 0" }, children: title }),
        /* @__PURE__ */ jsx2("p", { style: { margin: "0 0 16px 0" }, children: content }),
        footer && /* @__PURE__ */ jsx2("div", { style: { marginTop: "16px" }, children: footer })
      ]
    }
  ) });
};
var Card_default = Card;
export {
  Button_default as Button,
  Card_default as Card
};
