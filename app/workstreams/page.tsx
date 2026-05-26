import type { Metadata } from "next";
import { dependencies } from "../content";
import { Rule, TopBar, SiteFooter } from "../_components";

export const metadata: Metadata = {
  title: "Parallel workstreams — noon onboarding",
  description: "Three threads that need to be built alongside the program.",
};

export default function WorkstreamsPage() {
  return (
    <div className="doc">
      <TopBar back />

      <span className="eyebrow">Dependencies</span>
      <h1 className="h-title" style={{ marginTop: 12 }}>
        Parallel workstreams.
      </h1>
      <p style={{ marginTop: 16 }}>
        Three threads need to be built alongside this program for it to fully
        land. Each is its own thread.
      </p>

      <Rule />

      <section style={{ display: "flex", flexDirection: "column", gap: 22 }}>
        {dependencies.map((d) => (
          <div
            key={d.num}
            style={{ display: "grid", gridTemplateColumns: "28px 1fr", gap: 16 }}
          >
            <span className="mod-num">{d.num}</span>
            <div>
              <p className="fg" style={{ margin: 0, fontWeight: 600 }}>
                {d.title}
              </p>
              <p className="muted" style={{ margin: "4px 0 0" }}>
                {d.body}
              </p>
            </div>
          </div>
        ))}
      </section>

      <Rule />

      <SiteFooter />
    </div>
  );
}
