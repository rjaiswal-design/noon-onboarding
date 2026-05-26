import type { Metadata } from "next";
import { principles } from "../content";
import { Rule, TopBar, SiteFooter } from "../_components";

export const metadata: Metadata = {
  title: "Two principles · noon onboarding",
  description: "The two ideas the seven modules are all serving.",
};

export default function PrinciplesPage() {
  return (
    <div className="doc">
      <TopBar back />

      <span className="eyebrow">Why it’s built this way</span>
      <h1 className="h-title" style={{ marginTop: 12 }}>
        Two principles.
      </h1>
      <p style={{ marginTop: 16 }}>
        The two ideas that the seven modules are all serving.
      </p>

      <Rule />

      <section style={{ display: "flex", flexDirection: "column", gap: 32 }}>
        {principles.map((p, i) => (
          <div key={i}>
            <p style={{ margin: 0 }}>
              <span className="em">P/0{i + 1}</span>{"  "}
              <span className="fg" style={{ fontWeight: 600 }}>
                {p.title}
              </span>
            </p>
            <p className="muted" style={{ margin: "6px 0 0" }}>
              {p.body}
            </p>
          </div>
        ))}
      </section>

      <Rule />

      <SiteFooter />
    </div>
  );
}
