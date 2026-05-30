"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

function SparkleIcon() {
  // Two-sparkle composition — big star + small companion.
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 3l1.8 5.4 5.4 1.8-5.4 1.8L12 17.4l-1.8-5.4L4.8 10.2l5.4-1.8L12 3z" />
      <path
        d="M18.8 14.6l.7 2.1 2.1.7-2.1.7-.7 2.1-.7-2.1-2.1-.7 2.1-.7.7-2.1z"
        opacity="0.55"
      />
    </svg>
  );
}

export default function SummarizeFab({
  content,
  title,
}: {
  content: string;
  title: string;
}) {
  const [open, setOpen] = useState(false);
  const [summary, setSummary] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function summarize() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/summarize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content, title }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? `HTTP ${res.status}`);
      setSummary(data.summary);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to summarise");
    } finally {
      setLoading(false);
    }
  }

  function handleOpen() {
    setOpen(true);
    if (!summary && !loading) summarize();
  }

  return (
    <>
      <motion.button
        type="button"
        className="summarize-fab"
        onClick={handleOpen}
        aria-label="Summarise this page"
        aria-expanded={open}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.15 }}
      >
        <SparkleIcon />
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="summarize-sheet"
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            role="dialog"
            aria-label="Page summary"
          >
            <header className="summarize-sheet-header">
              <div className="summarize-sheet-title">
                <SparkleIcon />
                <span>Summary</span>
              </div>
              <button
                type="button"
                className="summarize-sheet-close"
                onClick={() => setOpen(false)}
                aria-label="Close summary"
              >
                ×
              </button>
            </header>

            <div className="summarize-sheet-body">
              {loading && (
                <div className="summarize-sheet-loading">
                  <span className="summarize-pulse" aria-hidden />
                  Summarising the page…
                </div>
              )}
              {error && !loading && (
                <p className="summarize-sheet-error">
                  Couldn’t summarise: {error}
                </p>
              )}
              {summary && !loading && (
                <>
                  <div className="summarize-sheet-text">{summary}</div>
                  <button
                    type="button"
                    onClick={summarize}
                    className="summarize-sheet-regen"
                  >
                    ↻ Regenerate
                  </button>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
