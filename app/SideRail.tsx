"use client";
import { useEffect, useState } from "react";
import { OutlineRail } from "@uiplot/ui";

const items = [
  { id: "hero", major: true },
  { id: "themes" },
  { id: "modules", major: true },
  { id: "principle-quote" },
  { id: "principle-spot" },
  { id: "deps", major: true },
];

export function SideRail() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0, 0.1, 0.5] },
    );

    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const onSelect = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div
      style={{
        position: "fixed",
        left: 16,
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 20,
      }}
    >
      <OutlineRail items={items} activeId={active} onSelect={onSelect} />
    </div>
  );
}
