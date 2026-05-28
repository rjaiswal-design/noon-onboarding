"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

/**
 * Animated expand/collapse panel for disclosure widgets. Replaces
 * the abrupt `{open && <content>}` show/hide with a smooth height +
 * opacity transition. The `overflow: hidden` while animating
 * prevents content from spilling during the height interpolation.
 *
 * Respects `prefers-reduced-motion`.
 */
export default function Collapsible({
  open,
  children,
}: {
  open: boolean;
  children: ReactNode;
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return open ? <>{children}</> : null;
  }

  return (
    <AnimatePresence initial={false}>
      {open && (
        <motion.div
          key="panel"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{
            height: { duration: 0.26, ease: [0.4, 0, 0.2, 1] },
            opacity: { duration: 0.2, ease: "linear" },
          }}
          style={{ overflow: "hidden" }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
