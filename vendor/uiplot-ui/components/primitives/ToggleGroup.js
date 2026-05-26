"use client";
import { jsx } from "react/jsx-runtime";
import { useState } from "react";
function ToggleGroup({
  items,
  value,
  defaultValue,
  onChange
}) {
  const isControlled = value !== void 0;
  const [internal, setInternal] = useState(defaultValue ?? items[0]?.value);
  const current = isControlled ? value : internal;
  const select = (v) => {
    if (!isControlled) setInternal(v);
    onChange?.(v);
  };
  return /* @__PURE__ */ jsx(
    "div",
    {
      role: "group",
      style: {
        display: "inline-flex",
        padding: 3,
        gap: 2,
        background: "var(--ub-surface)",
        border: "1px solid var(--ub-border)",
        borderRadius: "var(--ub-radius-md)"
      },
      children: items.map((it) => {
        const active = it.value === current;
        return /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            "aria-pressed": active,
            onClick: () => select(it.value),
            className: "ub-mono",
            style: {
              padding: "5px 11px",
              background: active ? "var(--ub-menu)" : "transparent",
              color: active ? "var(--ub-fg)" : "var(--ub-fg-muted)",
              border: "none",
              borderRadius: "var(--ub-radius-xs)",
              fontSize: 10,
              cursor: "pointer",
              transition: "background 0.12s var(--ub-ease-standard), color 0.12s var(--ub-ease-standard)"
            },
            children: it.label
          },
          it.value
        );
      })
    }
  );
}
export {
  ToggleGroup
};
//# sourceMappingURL=ToggleGroup.js.map