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
  Avatar,
  SpotlightCard,
} from "@uiplot/ui";
import { themes, modules, principles, dependencies, ownerInitials } from "./content";
import { SideRail } from "./SideRail";

const CASE_STUDY_FOUR = ["Ayaneshu", "Tamanna", "Sid", "Saswata"];

export default function OnboardingPage() {
  return (
    <>
      <SideRail />
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
        <PrincipleQuote />
        <PrincipleSpot />
        <Dependencies />
        <Foot />
      </main>
    </>
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
          gridTemplateColumns: "1.1fr 1fr",
          gap: 12,
          width: "100%",
          maxWidth: 720,
          textAlign: "left",
        }}
      >
        <Card padded>
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
              07
            </span>
            <MonoLabel tone="muted" style={{ fontSize: 10 }}>
              MODULES · 4 THEMES
            </MonoLabel>
          </div>
        </Card>
        <Card padded>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ display: "flex", gap: -8, alignItems: "center" }}>
              {CASE_STUDY_FOUR.map((name, i) => (
                <span
                  key={name}
                  style={{
                    marginLeft: i === 0 ? 0 : -10,
                    border: "2px solid var(--ub-surface)",
                    borderRadius: "50%",
                    display: "inline-flex",
                  }}
                >
                  <Avatar
                    initials={ownerInitials[name]}
                    size={32}
                    color="var(--ub-accent)"
                  />
                </span>
              ))}
            </div>
            <MonoLabel tone="muted" style={{ fontSize: 10 }}>
              FOUR DESIGNERS · CASE STUDIES
            </MonoLabel>
          </div>
        </Card>
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
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
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
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 12,
                  flexWrap: "wrap",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    {m.owners.map((o, i) => (
                      <span
                        key={o}
                        style={{
                          marginLeft: i === 0 ? 0 : -8,
                          border: "2px solid var(--ub-surface)",
                          borderRadius: "50%",
                          display: "inline-flex",
                        }}
                      >
                        <Avatar
                          initials={ownerInitials[o] ?? o.slice(0, 2)}
                          size={26}
                          color="var(--ub-accent)"
                        />
                      </span>
                    ))}
                  </div>
                  <span
                    style={{
                      fontSize: 12,
                      color: "var(--ub-fg-soft)",
                      fontWeight: 400,
                    }}
                  >
                    {m.owners.length === 1
                      ? m.owners[0]
                      : `${m.owners.slice(0, -1).join(", ")} & ${m.owners.at(-1)}`}
                  </span>
                </div>
                <Badge tone="muted">{m.format}</Badge>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

function PrincipleQuote() {
  const p = principles[0];
  return (
    <section
      id="principle-quote"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        gap: 24,
        paddingTop: 24,
        paddingBottom: 24,
      }}
    >
      <MonoLabel tone="accent" style={{ fontSize: 11 }}>
        P/01 · PRINCIPLE
      </MonoLabel>
      <h2
        style={{
          fontFamily: "var(--ub-font-title)",
          fontWeight: 400,
          fontStyle: "italic",
          fontSize: 64,
          letterSpacing: "-1.6px",
          lineHeight: 1.02,
          margin: 0,
          maxWidth: 880,
          color: "var(--ub-fg-strong)",
        }}
      >
        “Affinity for product and craft is{" "}
        <span style={{ color: "var(--ub-accent)" }}>built,</span> not assigned.”
      </h2>
      <FocusParagraph>{p.body}</FocusParagraph>
    </section>
  );
}

function PrincipleSpot() {
  const p = principles[1];
  return (
    <section id="principle-spot" style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <SpotlightCard
        intensity={0.22}
        style={{ padding: "40px 44px" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto 1fr",
            gap: 36,
            alignItems: "center",
          }}
        >
          {/* Arc visual: WK1 → WK2 */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14, minWidth: 220 }}>
            <MonoLabel tone="accent" style={{ fontSize: 11 }}>
              P/02 · THE ARC
            </MonoLabel>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <ArcChip label="WK1" sub="audience" tone="muted" />
              <span
                aria-hidden
                style={{
                  width: 36,
                  height: 1,
                  background:
                    "linear-gradient(to right, var(--ub-fg-mutedXX), var(--ub-accent))",
                }}
              />
              <ArcChip label="WK2" sub="contributor" tone="accent" />
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div
              style={{
                fontFamily: "var(--ub-font-title)",
                fontSize: 30,
                fontWeight: 500,
                letterSpacing: "-0.7px",
                lineHeight: 1.15,
                color: "var(--ub-fg-strong)",
              }}
            >
              {p.title}
            </div>
            <div
              style={{
                fontSize: 14.5,
                lineHeight: 1.65,
                color: "var(--ub-fg-muted)",
                fontWeight: 300,
              }}
            >
              {p.body}
            </div>
          </div>
        </div>
      </SpotlightCard>
    </section>
  );
}

function ArcChip({ label, sub, tone }: { label: string; sub: string; tone: "muted" | "accent" }) {
  const accent = tone === "accent";
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
        padding: "12px 16px",
        border: `1px solid ${accent ? "var(--ub-accent-border)" : "var(--ub-border)"}`,
        borderRadius: "var(--ub-radius-lg)",
        background: accent ? "var(--ub-accent-08)" : "var(--ub-bg-deep)",
        minWidth: 88,
      }}
    >
      <span
        className="ub-mono"
        style={{
          fontSize: 11,
          color: accent ? "var(--ub-accent)" : "var(--ub-fg-soft)",
        }}
      >
        {label}
      </span>
      <span
        className="ub-mono"
        style={{ fontSize: 9, color: "var(--ub-fg-mutedXX)" }}
      >
        {sub.toUpperCase()}
      </span>
    </div>
  );
}

function Dependencies() {
  return (
    <section
      id="deps"
      style={{
        display: "grid",
        gridTemplateColumns: "0.7fr 1fr",
        gap: 36,
        alignItems: "start",
      }}
    >
      <div style={{ position: "sticky", top: 56, display: "flex", flexDirection: "column", gap: 14 }}>
        <SectionHeader number="04" eyebrow="DEPENDENCIES" title="Parallel workstreams.">
          Three threads need to be built alongside this program for it to fully land.
        </SectionHeader>
      </div>
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
