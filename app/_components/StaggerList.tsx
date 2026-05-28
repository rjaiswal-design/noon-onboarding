"use client";

import { motion, useReducedMotion } from "motion/react";
import { Children, type ReactNode } from "react";

/**
 * Wraps a list of children and fades each in with a small Y offset,
 * staggered by `gapMs`. Used for the module lists on the index page.
 * Total reveal stays under ~400ms even for the longest list.
 */
export default function StaggerList({
  children,
  gapMs = 40,
}: {
  children: ReactNode;
  gapMs?: number;
}) {
  const reduce = useReducedMotion();
  const items = Children.toArray(children);

  if (reduce) return <>{children}</>;

  return (
    <>
      {items.map((child, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.28,
            ease: [0.22, 1, 0.36, 1],
            delay: i * (gapMs / 1000),
          }}
        >
          {child}
        </motion.div>
      ))}
    </>
  );
}
