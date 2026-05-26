"use client";
import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
import { Button } from "./Button";
function AlertDialog({
  open,
  onClose,
  title,
  description,
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  onConfirm,
  destructive,
  children
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);
  if (!open) return null;
  return /* @__PURE__ */ jsx(
    "div",
    {
      onClick: onClose,
      style: {
        position: "fixed",
        inset: 0,
        background: "var(--ub-overlay)",
        backdropFilter: "blur(6px)",
        WebkitBackdropFilter: "blur(6px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 50,
        animation: "ub-fade-in 0.18s var(--ub-ease-standard)"
      },
      children: /* @__PURE__ */ jsxs(
        "div",
        {
          onClick: (e) => e.stopPropagation(),
          style: {
            width: 420,
            maxWidth: "calc(100vw - 32px)",
            background: "var(--ub-surface)",
            border: "1px solid var(--ub-border)",
            borderRadius: "var(--ub-radius-2xl)",
            padding: 24,
            boxShadow: "var(--ub-shadow-modal)",
            animation: "ub-pop-in 0.22s var(--ub-ease-spring-light)"
          },
          children: [
            /* @__PURE__ */ jsx(
              "h3",
              {
                style: {
                  fontFamily: "var(--ub-font-title)",
                  fontSize: 24,
                  letterSpacing: "-0.5px",
                  fontWeight: 500,
                  margin: 0,
                  marginBottom: 8
                },
                children: title
              }
            ),
            description && /* @__PURE__ */ jsx(
              "p",
              {
                style: {
                  color: "var(--ub-fg-muted)",
                  fontSize: 14,
                  lineHeight: 1.55,
                  margin: 0,
                  marginBottom: 18
                },
                children: description
              }
            ),
            children,
            /* @__PURE__ */ jsxs("div", { style: { display: "flex", gap: 8, justifyContent: "flex-end", marginTop: 4 }, children: [
              /* @__PURE__ */ jsx(Button, { variant: "ghost", onClick: onClose, children: cancelLabel }),
              /* @__PURE__ */ jsx(
                Button,
                {
                  variant: destructive ? "danger" : "primary",
                  onClick: () => {
                    onConfirm?.();
                    onClose();
                  },
                  children: confirmLabel
                }
              )
            ] })
          ]
        }
      )
    }
  );
}
export {
  AlertDialog
};
//# sourceMappingURL=AlertDialog.js.map