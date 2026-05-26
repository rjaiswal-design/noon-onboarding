import { jsx, jsxs } from "react/jsx-runtime";
function Label({ children, optional, style, ...rest }) {
  return /* @__PURE__ */ jsxs(
    "label",
    {
      ...rest,
      className: `ub-mono ${rest.className ?? ""}`,
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        fontSize: 10,
        color: "var(--ub-fg-mutedXX)",
        ...style
      },
      children: [
        children,
        optional && /* @__PURE__ */ jsx("span", { style: { color: "var(--ub-fg-disabled)", fontWeight: 500 }, children: "(OPTIONAL)" })
      ]
    }
  );
}
export {
  Label
};
//# sourceMappingURL=Label.js.map