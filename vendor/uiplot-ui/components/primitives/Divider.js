import { jsx, jsxs } from "react/jsx-runtime";
function Divider({
  vertical,
  dashed,
  label
}) {
  if (label) {
    return /* @__PURE__ */ jsxs(
      "div",
      {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 12,
          color: "var(--ub-fg-muted)"
        },
        children: [
          /* @__PURE__ */ jsx("span", { style: { flex: 1, height: 1, background: "var(--ub-border)" } }),
          /* @__PURE__ */ jsx("span", { className: "ub-mono", style: { fontSize: 10, color: "var(--ub-fg-muted)" }, children: label }),
          /* @__PURE__ */ jsx("span", { style: { flex: 1, height: 1, background: "var(--ub-border)" } })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsx(
    "span",
    {
      style: {
        display: "block",
        width: vertical ? 1 : "100%",
        height: vertical ? "100%" : 1,
        background: dashed ? "transparent" : "var(--ub-border)",
        borderLeft: vertical && dashed ? "1px dashed var(--ub-border)" : void 0,
        borderTop: !vertical && dashed ? "1px dashed var(--ub-border)" : void 0
      }
    }
  );
}
export {
  Divider
};
//# sourceMappingURL=Divider.js.map