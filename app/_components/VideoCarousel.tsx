"use client";

import { useEffect, useRef, useState } from "react";
import SmoothCorners from "./SmoothCorners";

export type Clip = { url: string; caption?: string; author?: string };

const isVideoFile = (url: string) =>
  /\.(mp4|webm|mov|m4v)(\?|$)/i.test(url);

/**
 * Single player: 16:9 squircle container, native controls, metadata-
 * only preload (no autoplay). Used standalone for single-clip sections
 * and as the cell inside the multi-clip horizontal scroll.
 */
function ClipPlayer({ clip }: { clip: Clip }) {
  const fileVideo = isVideoFile(clip.url);
  return (
    <figure style={{ margin: 0 }}>
      <SmoothCorners
        radius={20}
        smoothing={0.6}
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "16 / 9",
          background: "#0f0f0f",
        }}
      >
        {fileVideo ? (
          <video
            src={clip.url}
            controls
            playsInline
            preload="metadata"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "contain",
              background: "#000",
            }}
          />
        ) : (
          <iframe
            src={clip.url}
            title={clip.caption ?? clip.author ?? "Video"}
            loading="lazy"
            allow="fullscreen; clipboard-write; encrypted-media; picture-in-picture"
            allowFullScreen
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              border: 0,
            }}
          />
        )}
      </SmoothCorners>

      {(clip.caption || clip.author) && (
        <figcaption
          className="muted"
          style={{ fontSize: 12, marginTop: 8 }}
        >
          {clip.author && (
            <span style={{ color: "var(--ub-fg)" }}>{clip.author}</span>
          )}
          {clip.author && clip.caption ? " · " : ""}
          {clip.caption}
        </figcaption>
      )}
    </figure>
  );
}

/**
 * Multi-clip carousel: author tabs above, horizontally-scrolling row
 * of all clips below. Tabs scroll-snap to the corresponding clip on
 * click and auto-update to reflect the most-visible clip as the user
 * scrolls (IntersectionObserver). Right edge of the row fades to the
 * page background so peeking clips blend out instead of hard-cropping.
 */
function MultiClipCarousel({ clips }: { clips: Clip[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const root = scrollerRef.current;
    if (!root || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry that takes up the most of the scroller's
        // visible area; that becomes the active tab.
        let best = -1;
        let bestIdx = activeIdx;
        for (const e of entries) {
          if (e.intersectionRatio > best) {
            best = e.intersectionRatio;
            bestIdx = Number(
              (e.target as HTMLElement).dataset.idx ?? bestIdx,
            );
          }
        }
        if (best > 0.55) setActiveIdx(bestIdx);
      },
      { root, threshold: [0.55, 0.7, 0.85, 1] },
    );
    itemRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
    // We deliberately only re-run if the clips change; activeIdx
    // inside the callback uses the latest setter so it's fine.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clips.length]);

  function scrollTo(idx: number) {
    setActiveIdx(idx);
    itemRefs.current[idx]?.scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "nearest",
    });
  }

  return (
    <div style={{ marginTop: 16 }}>
      <div className="video-tabs" role="tablist">
        {clips.map((c, idx) => {
          const isActive = idx === activeIdx;
          return (
            <button
              key={c.url}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={
                isActive ? "video-tab is-active" : "video-tab"
              }
              onClick={() => scrollTo(idx)}
            >
              {c.author ?? `Clip ${idx + 1}`}
            </button>
          );
        })}
      </div>
      <div className="video-scroll-wrap">
        <div
          className="video-scroll"
          role="region"
          aria-label="Case study videos"
          ref={scrollerRef}
        >
          {clips.map((c, idx) => (
            <div
              key={c.url}
              className="video-scroll-item"
              data-idx={idx}
              ref={(el) => {
                itemRefs.current[idx] = el;
              }}
            >
              <ClipPlayer clip={c} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function VideoCarousel({ clips }: { clips: Clip[] }) {
  if (clips.length === 0) return null;
  if (clips.length === 1) {
    return (
      <div style={{ marginTop: 16 }}>
        <ClipPlayer clip={clips[0]} />
      </div>
    );
  }
  return <MultiClipCarousel clips={clips} />;
}
