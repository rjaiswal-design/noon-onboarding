"use client";
import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
function RadioGroup({
  options,
  value,
  defaultValue,
  onChange,
  orientation = "vertical"
}) {
  const isControlled = value !== void 0;
  const [internal, setInternal] = useState(defaultValue ?? options[0]?.value);
  const current = isControlled ? value : internal;
  const select = (v) => {
    if (!isControlled) setInternal(v);
    onChange?.(v);
  };
  return /* @__PURE__ */ jsx(
    "div",
    {
      role: "radiogroup",
      style: {
        display: "flex",
        flexDirection: orientation === "vertical" ? "column" : "row",
        gap: orientation === "vertical" ? 8 : 16
      },
      children: options.map((opt) => {
        const active = opt.value === current;
        return /* @__PURE__ */ jsxs(
          "button",
          {
            role: "radio",
            type: "button",
            "aria-checked": active,
            onClick: () => select(opt.value),
            style: {
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              background: "transparent",
              border: "none",
              padding: 0,
              cursor: "pointer",
              textAlign: "left"
            },
            children: [
              /* @__PURE__ */ jsx(
                "span",
                {
                  "aria-hidden": true,
                  style: {
                    width: 16,
                    height: 16,
                    borderRadius: "50%",
                    background: "var(--ub-surface)",
                    border: `1px solid ${active ? "var(--ub-accent)" : "var(--ub-border-strong)"}`,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "border-color 0.12s var(--ub-ease-standard)"
                  },
                  children: active && /* @__PURE__ */ jsx(
                    "span",
                    {
                      style: {
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        background: "var(--ub-accent)"
                      }
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsxs("span", { style: { display: "flex", flexDirection: "column", gap: 2 }, children: [
                /* @__PURE__ */ jsx("span", { style: { color: "var(--ub-fg-soft)", fontSize: 13 }, children: opt.label }),
                opt.hint && /* @__PURE__ */ jsx("span", { style: { color: "var(--ub-fg-muted)", fontSize: 12 }, children: opt.hint })
              ] })
            ]
          },
          opt.value
        );
      })
    }
  );
}
export {
  RadioGroup
};
//# sourceMappingURL=RadioGroup.js.map