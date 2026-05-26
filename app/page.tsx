import {
  Button,
  Card,
  Badge,
  Divider,
  TitleStroke,
  MonoLabel,
  SectionHeader,
  FocusParagraph,
  LiveRipple,
} from "@uiplot/ui";
import { themes, modules, principles, dependencies, owners } from "./content";

export default function OnboardingPage() {
  return (
    <main
      style={{
        maxWidth: 1120,
        margin: "0 auto",
        padding: "56px 80px 160px",
        display: "flex",
        flexDirection: "column",
        gap: 128,
        position: "relative",
        zIndex: 1,
      }}
    >
      <Hero />
      <Themes />
      <Modules />
      <Principles />
      <Dependencies />
      <Owners />
      <Foot />
    </main>
  );
}

function Hero() {
  return (
    <section
      id="hero"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        gap: 32,
        paddingTop: 64,
        paddingBottom: 24,
      }}
    >
      <span
        className="ub-mono"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 10,
          padding: "5px 11px 5px 8px",
          background: "var(--ub-surface)",
          border: "1px solid var(--ub-border)",
          borderRadius: 999,
          fontSize: 10,
          color: "var(--ub-fg-mutedXX)",
        }}
      >
        <LiveRipple label="V1" />
        <span style={{ color: "var(--ub-border-strong)" }}>·</span>
        NOON · DESIGN · ONBOARDING
        <span style={{ color: "var(--ub-border-strong)" }}>·</span>
        2-WEEK PROGRAM
      </span>

      <TitleStroke size={96}>
        Two weeks to{" "}
        <span style={{ fontStyle: "italic", color: "var(--ub-accent)" }}>
          belong,
        </span>{" "}
        contribute, ship.
      </TitleStroke>

      <p
        style={{
          fontFamily: "var(--ub-font-body)",
          maxWidth: 640,
          fontSize: 16,
          lineHeight: 1.65,
          color: "var(--ub-fg-muted)",
          margin: 0,
          fontWeight: 300,
        }}
      >
        The first two weeks for any new designer joining noon. Not a product tour —
        enough context, language, exposure, and belonging that they can start
        contributing with confidence by the end of week 2.
      </p>

      <div style={{ display: "flex", gap: 10, marginTop: 8 }}>
        <Button size="lg" variant="primary">
          VIEW THE 7 MODULES →
        </Button>
        <Button size="lg" variant="outline">
          THE TWO PRINCIPLES
        </Button>
      </div>

      <div
        style={{
          marginTop: 40,
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 12,
          width: "100%",
          maxWidth: 720,
        }}
      >
        {[
          { n: "07", l: "Modules across 4 themes" },
          { n: "04", l: "Designers featured in case studies" },
          { n: "04", l: "PODs covered in research packs" },
        ].map((s, i) => (
          <Card key={i} padded>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <span
                style={{
                  fontFamily: "var(--ub-font-title)",
                  fontSize: 44,
                  fontWeight: 500,
                  letterSpacing: "-1.2px",
                  lineHeight: 1,
                  color: "var(--ub-fg-strong)",
                }}
              >
                {s.n}
              </span>
              <MonoLabel tone="muted" style={{ fontSize: 10 }}>
                {s.l}
              </MonoLabel>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

function Themes() {
  return (
    <section id="themes" style={{ display: "flex", flexDirection: "column", gap: 32 }}>
      <SectionHeader number="01" eyebrow="THEMES" title="Four themes carry the program." />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
        {themes.map((t) => (
          <Card key={t.tag} padded>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <MonoLabel tone="accent" style={{ fontSize: 10 }}>
                THEME · {t.tag}
              </MonoLabel>
              <div
                style={{
                  fontFamily: "var(--ub-font-title)",
                  fontSize: 22,
                  fontWeight: 500,
                  letterSpacing: "-0.4px",
                  lineHeight: 1.1,
                  color: "var(--ub-fg-strong)",
                }}
              >
                {t.title}
              </div>
              <div
                style={{
                  fontSize: 13,
                  lineHeight: 1.55,
                  color: "var(--ub-fg-muted)",
                  fontWeight: 300,
                }}
              >
                {t.desc}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

function Modules() {
  return (
    <section id="modules" style={{ display: "flex", flexDirection: "column", gap: 32 }}>
      <SectionHeader number="02" eyebrow="PROGRAM" title="Seven modules.">
        Each module has named owners, a format, and a clear placement in the two-week arc.
      </SectionHeader>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        {modules.map((m) => (
          <Card key={m.num} padded>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 12,
                }}
              >
                <MonoLabel tone="muted" style={{ fontSize: 10 }}>
                  {m.num} · {m.section}
                </MonoLabel>
                <Badge tone="accent">{m.when}</Badge>
              </div>
              <div
                style={{
                  fontFamily: "var(--ub-font-title)",
                  fontSize: 26,
                  fontWeight: 500,
                  letterSpacing: "-0.6px",
                  lineHeight: 1.1,
                  color: "var(--ub-fg-strong)",
                }}
              >
                {m.title}
              </div>
              <div
                style={{
                  fontSize: 13.5,
                  lineHeight: 1.6,
                  color: "var(--ub-fg-muted)",
                  fontWeight: 300,
                }}
              >
                {m.body}
              </div>
              <Divider />
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {m.owners.map((o) => (
                  <Badge key={o} tone="neutral">
                    {o.toUpperCase()}
                  </Badge>
                ))}
                <Badge tone="muted">{m.format}</Badge>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

function Principles() {
  return (
    <section id="principles" style={{ display: "flex", flexDirection: "column", gap: 32 }}>
      <SectionHeader number="03" eyebrow="WHY" title="Two principles." />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        {principles.map((p, i) => (
          <Card key={p.title} padded>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <MonoLabel tone="accent" style={{ fontSize: 11 }}>
                P/0{i + 1}
              </MonoLabel>
              <div
                style={{
                  fontFamily: "var(--ub-font-title)",
                  fontSize: 28,
                  fontWeight: 500,
                  letterSpacing: "-0.7px",
                  lineHeight: 1.1,
                  color: "var(--ub-fg-strong)",
                }}
              >
                {p.title}
              </div>
              <FocusParagraph>{p.body}</FocusParagraph>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

function Dependencies() {
  return (
    <section id="deps" style={{ display: "flex", flexDirection: "column", gap: 32 }}>
      <SectionHeader number="04" eyebrow="DEPENDENCIES" title="Parallel workstreams.">
        Three threads need to be built alongside this program for it to fully land.
      </SectionHeader>
      <Card padded>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {dependencies.map((d, i) => (
            <div key={d.num}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "44px 1fr",
                  gap: 18,
                  padding: "18px 0",
                  alignItems: "start",
                }}
              >
                <MonoLabel tone="accent" style={{ fontSize: 11 }}>
                  {d.num}
                </MonoLabel>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <div
                    style={{
                      fontFamily: "var(--ub-font-title)",
                      fontSize: 20,
                      fontWeight: 500,
                      letterSpacing: "-0.3px",
                      color: "var(--ub-fg-strong)",
                    }}
                  >
                    {d.title}
                  </div>
                  <div
                    style={{
                      fontSize: 13.5,
                      lineHeight: 1.6,
                      color: "var(--ub-fg-muted)",
                      fontWeight: 300,
                    }}
                  >
                    {d.body}
                  </div>
                </div>
              </div>
              {i < dependencies.length - 1 && <Divider />}
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
}

function Owners() {
  return (
    <section id="owners" style={{ display: "flex", flexDirection: "column", gap: 32 }}>
      <SectionHeader number="05" eyebrow="PEOPLE" title="Owners." />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
        {owners.map((o) => (
          <Card key={o.name} padded>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <span
                style={{
                  fontFamily: "var(--ub-font-title)",
                  fontSize: 20,
                  fontWeight: 500,
                  letterSpacing: "-0.3px",
                  color: "var(--ub-fg-strong)",
                }}
              >
                {o.name}
              </span>
              <MonoLabel tone="muted" style={{ fontSize: 10 }}>
                {o.role.toUpperCase()}
              </MonoLabel>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

function Foot() {
  return (
    <footer
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 24,
        borderTop: "1px solid var(--ub-border)",
      }}
    >
      <MonoLabel tone="muted" style={{ fontSize: 10 }}>
        DOCUMENT v1 · LIVING
      </MonoLabel>
      <MonoLabel tone="muted" style={{ fontSize: 10 }}>
        NOON / DESIGN / ONBOARDING
      </MonoLabel>
    </footer>
  );
}
