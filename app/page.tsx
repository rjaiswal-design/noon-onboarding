import { modules, principles, dependencies } from "./content";

export default function OnboardingPage() {
  return (
    <div className="doc">
      {/* top nav line */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          marginBottom: 56,
        }}
      >
        <a href="#modules">[ Index ]</a>
        <span className="muted" style={{ fontSize: 12 }}>
          noon / design
        </span>
      </div>

      {/* header */}
      <span className="eyebrow">Onboarding · Designers</span>
      <h1 className="h-title" style={{ marginTop: 12 }}>
        noon design — onboarding
      </h1>
      <p className="muted" style={{ margin: "6px 0 0", fontSize: 13 }}>
        27 May, 2026 · v1 · living document
      </p>

      <p style={{ marginTop: 28 }}>
        The first two weeks for any new designer joining noon. Not a product tour
        — enough <span className="fg">context, language, exposure,</span> and
        belonging that they can start contributing with confidence by the end of
        week 2. Seven modules, four themes, two principles.
      </p>

      <Rule />

      {/* THE FOLD — 7 modules */}
      <section id="modules">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            marginBottom: 14,
          }}
        >
          <h2 className="h-sec">Seven modules</h2>
          <span className="muted" style={{ fontSize: 12 }}>
            wk1 → wk2
          </span>
        </div>

        <div>
          {modules.map((m) => (
            <a key={m.num} href={`#mod-${m.num}`} className="mod-row">
              <span className="mod-num">{m.num}</span>
              <span className="mod-name">{m.title}</span>
              <span className="mod-when">{m.when}</span>
            </a>
          ))}
        </div>
      </section>

      <Rule />

      {/* module detail sections */}
      <section style={{ display: "flex", flexDirection: "column", gap: 44 }}>
        {modules.map((m) => (
          <div key={m.num} id={`mod-${m.num}`} style={{ scrollMarginTop: 24 }}>
            <div
              style={{
                display: "flex",
                gap: 12,
                alignItems: "baseline",
                marginBottom: 8,
              }}
            >
              <span className="accent" style={{ fontWeight: 600 }}>
                {m.num}
              </span>
              <h2 className="h-sec">{m.title}</h2>
            </div>
            <p style={{ margin: 0 }}>{m.body}</p>
            <div
              className="muted"
              style={{ fontSize: 12, marginTop: 12, display: "flex", gap: 8, flexWrap: "wrap" }}
            >
              <Meta label="when" value={m.when} />
              <span className="muted">·</span>
              <Meta label="format" value={m.format} />
              <span className="muted">·</span>
              <Meta label="owners" value={m.owners.join(", ")} />
            </div>
          </div>
        ))}
      </section>

      <Rule />

      {/* principles */}
      <section>
        <h2 className="h-sec" style={{ marginBottom: 18 }}>
          Two principles
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
          {principles.map((p, i) => (
            <div key={i}>
              <p style={{ margin: 0 }}>
                <span className="accent">P/0{i + 1}</span>{"  "}
                <span className="fg" style={{ fontWeight: 500 }}>
                  {p.title}
                </span>
              </p>
              <p className="muted" style={{ margin: "4px 0 0" }}>
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Rule />

      {/* dependencies */}
      <section>
        <h2 className="h-sec" style={{ marginBottom: 6 }}>
          Parallel workstreams
        </h2>
        <p className="muted" style={{ marginTop: 0 }}>
          Three threads need to be built alongside this program for it to fully
          land.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 18, marginTop: 18 }}>
          {dependencies.map((d) => (
            <div
              key={d.num}
              style={{ display: "grid", gridTemplateColumns: "28px 1fr", gap: 16 }}
            >
              <span className="mod-num">{d.num}</span>
              <div>
                <p className="fg" style={{ margin: 0, fontWeight: 500 }}>
                  {d.title}
                </p>
                <p className="muted" style={{ margin: "2px 0 0" }}>
                  {d.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Rule />

      {/* footer */}
      <footer className="muted" style={{ fontSize: 12 }}>
        <p style={{ margin: 0 }}>
          Built on the{" "}
          <a href="https://github.com/rjaiswal-design/plot-ui">Plot UI kit</a>.
          Owners: Ayaneshu, Tamanna, Saswata, Sid, design + team leads, POD
          seniors.
        </p>
        <p style={{ margin: "8px 0 0" }}>noon / design / onboarding — document v1</p>
      </footer>
    </div>
  );
}

function Rule() {
  return (
    <div className="rule" aria-hidden>
      * * *
    </div>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <span>
      <span className="muted">{label}:</span>{" "}
      <span className="fg">{value}</span>
    </span>
  );
}
