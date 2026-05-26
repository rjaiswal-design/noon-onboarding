import { jsx } from "react/jsx-runtime";
function Kbd({ children }) {
  return /* @__PURE__ */ jsx(
    "span",
    {
      className: "ub-mono",
      style: {
        display: "inline-flex",
        alignItems: "center",
        padding: "2px 6px",
        background: "var(--ub-menu)",
        color: "var(--ub-fg-soft)",
        border: "1px solid var(--ub-border)",
        borderRadius: "var(--ub-radius-xs)",
        fontSize: 10,
        boxShadow: "inset 0 -1px 0 rgba(0,0,0,0.4)"
      },
      children
    }
  );
}
export {
  Kbd
};
//# sourceMappingURL=Kbd.js.map