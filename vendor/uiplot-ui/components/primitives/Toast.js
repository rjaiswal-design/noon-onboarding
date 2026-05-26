"use client";
import { jsx, jsxs } from "react/jsx-runtime";
import {
  createContext,
  useCallback,
  useContext,
  useState
} from "react";
const ToastCtx = createContext(null);
function ToastProvider({ children }) {
  const [items, setItems] = useState([]);
  const push = useCallback((t) => {
    const id = Date.now() + Math.random();
    setItems((s) => [...s, { ...t, id }]);
    setTimeout(() => setItems((s) => s.filter((i) => i.id !== id)), 3500);
  }, []);
  return /* @__PURE__ */ jsxs(ToastCtx.Provider, { value: { push }, children: [
    children,
    /* @__PURE__ */ jsx(
      "div",
      {
        style: {
          position: "fixed",
          bottom: 24,
          right: 24,
          display: "flex",
          flexDirection: "column",
          gap: 8,
          zIndex: 60
        },
        children: items.map((it) => /* @__PURE__ */ jsxs(
          "div",
          {
            style: {
              minWidth: 240,
              maxWidth: 360,
              padding: "12px 14px",
              background: "var(--ub-surface)",
              border: `1px solid ${it.tone === "accent" ? "var(--ub-accent)" : it.tone === "success" ? "var(--ub-success)" : it.tone === "danger" ? "var(--ub-danger)" : "var(--ub-border)"}`,
              borderRadius: "var(--ub-radius-lg)",
              boxShadow: "var(--ub-shadow-md)",
              animation: "ub-pop-in 0.18s var(--ub-ease-spring-light)"
            },
            children: [
              /* @__PURE__ */ jsx("div", { className: "ub-mono", style: { fontSize: 10, color: "var(--ub-fg-mutedXX)", marginBottom: 4 }, children: it.tone }),
              /* @__PURE__ */ jsx("div", { style: { color: "var(--ub-fg)", fontSize: 14, fontWeight: 500 }, children: it.title }),
              it.body && /* @__PURE__ */ jsx("div", { style: { color: "var(--ub-fg-muted)", fontSize: 13, marginTop: 2 }, children: it.body })
            ]
          },
          it.id
        ))
      }
    )
  ] });
}
function useToast() {
  const ctx = useContext(ToastCtx);
  if (!ctx) throw new Error("useToast must be used inside ToastProvider");
  return ctx;
}
export {
  ToastProvider,
  useToast
};
//# sourceMappingURL=Toast.js.map