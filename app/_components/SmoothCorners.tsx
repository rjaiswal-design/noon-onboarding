"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { getSvgPath } from "figma-squircle";

/**
 * iOS / Figma-style corner smoothing wrapper.
 *
 * CSS `border-radius` clips corners with circular arcs, which produces a
 * visible "kink" where the arc meets the straight edge. Figma (and iOS)
 * use a superellipse (squircle) instead — the curvature is continuous,
 * which reads as softer at larger radii.
 *
 * Measures itself with `ResizeObserver`, asks `figma-squircle` for the
 * matching SVG path, and applies it as a `clip-path`.
 *
 * Smoothing defaults to `0.6` — Figma's "iOS" preset.
 *
 * (Mirrors `@ui/SmoothCorners` from noon-merged so the two apps share
 * the same corner treatment.)
 */
export interface SmoothCornersProps {
  radius: number;
  smoothing?: number;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

export default function SmoothCorners({
  radius,
  smoothing = 0.6,
  className,
  style,
  children,
}: SmoothCornersProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [clipPath, setClipPath] = useState<string | undefined>(undefined);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = () => {
      const { width, height } = el.getBoundingClientRect();
      if (!width || !height) return;
      const path = getSvgPath({
        width,
        height,
        cornerRadius: radius,
        cornerSmoothing: smoothing,
        preserveSmoothing: true,
      });
      setClipPath(`path("${path}")`);
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [radius, smoothing]);

  return (
    <div
      ref={ref}
      className={className}
      style={{ ...style, clipPath, WebkitClipPath: clipPath }}
    >
      {children}
    </div>
  );
}
