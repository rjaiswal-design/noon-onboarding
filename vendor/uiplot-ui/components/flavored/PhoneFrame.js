import { jsx } from "react/jsx-runtime";
function PhoneFrame({ children, width = 244, height = 528 }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      style: {
        width,
        height,
        background: "var(--ub-bg-deep)",
        border: "6.5px solid var(--ub-bg-deep)",
        borderRadius: 31,
        overflow: "hidden",
        boxShadow: "var(--ub-shadow-lg)",
        position: "relative"
      },
      children: /* @__PURE__ */ jsx(
        "div",
        {
          style: {
            width: "100%",
            height: "100%",
            background: "var(--ub-surface)",
            borderRadius: 24,
            overflow: "hidden"
          },
          children
        }
      )
    }
  );
}
export {
  PhoneFrame
};
//# sourceMappingURL=PhoneFrame.js.map