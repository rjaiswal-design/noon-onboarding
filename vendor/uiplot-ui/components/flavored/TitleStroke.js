import { jsx } from "react/jsx-runtime";
function TitleStroke({ children, size = 60, italic, as: Tag = "h1" }) {
  return /* @__PURE__ */ jsx(
    Tag,
    {
      style: {
        fontFamily: "var(--ub-font-title)",
        fontWeight: 500,
        fontStyle: italic ? "italic" : "normal",
        fontSize: size,
        letterSpacing: size > 48 ? "-1.8px" : "-0.6px",
        lineHeight: 1,
        color: "var(--ub-fg)",
        margin: 0
      },
      children
    }
  );
}
export {
  TitleStroke
};
//# sourceMappingURL=TitleStroke.js.map