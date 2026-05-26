"use client";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
function Popover({
  trigger,
  children,
  placement = "bottom-start",
  offset = 6,
  width,
  open: controlled,
  onOpenChange,
  contentStyle
}) {
  const [internal, setInternal] = useState(false);
  const isControlled = controlled !== void 0;
  const open = isControlled ? controlled : internal;
  const setOpen = (n) => {
    if (!isControlled) setInternal(n);
    onOpenChange?.(n);
  };
  const triggerRef = useRef(null);
  const contentRef = useRef(null);
  const [pos, setPos] = useState({
    top: 0,
    left: 0
  });
  useEffect(() => {
    if (!open) return;
    const place = () => {
      const t = triggerRef.current?.getBoundingClientRect();
      const c = contentRef.current?.getBoundingClientRect();
      if (!t) return;
      const w = width === "trigger" ? t.width : c?.width ?? 200;
      let top = t.bottom + offset;
      let left = t.left;
      if (placement === "top") top = t.top - (c?.height ?? 0) - offset;
      if (placement === "bottom-end") left = t.right - w;
      setPos({ top, left, w });
    };
    place();
    window.addEventListener("scroll", place, true);
    window.addEventListener("resize", place);
    return () => {
      window.removeEventListener("scroll", place, true);
      window.removeEventListener("resize", place);
    };
  }, [open, placement, offset, width]);
  useEffect(() => {
    if (!open) return;
    const onClick = (e) => {
      const target = e.target;
      if (contentRef.current?.contains(target) || triggerRef.current?.contains(target))
        return;
      setOpen(false);
    };
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "span",
      {
        ref: triggerRef,
        onClick: () => setOpen(!open),
        style: { display: "inline-flex" },
        children: trigger
      }
    ),
    open && /* @__PURE__ */ jsx(
      "div",
      {
        ref: contentRef,
        role: "dialog",
        style: {
          position: "fixed",
          top: pos.top,
          left: pos.left,
          width: width === "trigger" ? pos.w : width,
          background: "var(--ub-menu)",
          border: "1px solid var(--ub-border)",
          borderRadius: "var(--ub-radius-md)",
          boxShadow: "var(--ub-shadow-md)",
          padding: 6,
          zIndex: 50,
          animation: "ub-pop-in 0.14s var(--ub-ease-standard)",
          ...contentStyle
        },
        children
      }
    )
  ] });
}
export {
  Popover
};
//# sourceMappingURL=Popover.js.map