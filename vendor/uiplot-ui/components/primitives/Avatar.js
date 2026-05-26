import { jsx } from "react/jsx-runtime";
function Avatar({ initials, active = true, size = 36, color = "var(--ub-accent)" }) {
  return /* @__PURE__ */ jsx(
    "span",
    {
      style: {
        width: size,
        height: size,
        borderRadius: "50%",
        background: "var(--ub-bg-deep)",
        color: "var(--ub-fg-strong)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "var(--ub-font-mono)",
        fontWeight: 700,
        fontSize: size * 0.32,
        letterSpacing: "0.04em",
        border: `1.5px ${active ? "solid" : "dashed"} ${active ? color : "#8e8e8e"}`,
        textTransform: "uppercase"
      },
      children: initials.slice(0, 2)
    }
  );
}
export {
  Avatar
};
//# sourceMappingURL=Avatar.js.map