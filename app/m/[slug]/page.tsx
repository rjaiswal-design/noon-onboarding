import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { allModules, getModule, packs } from "../../content";
import { Rule, SiteFooter } from "../../_components";
import { CredentialsDisclosure } from "../../_credentials";
import { MotionToolsDisclosure } from "../../_motion";
import SmoothCorners from "../../_components/SmoothCorners";
import VideoCarousel from "../../_components/VideoCarousel";
import SectionsWithSearch from "../../_components/SectionsWithSearch";
import FigmaFilesTable from "../../_components/FigmaFilesTable";
import ToolsTable from "../../_components/ToolsTable";
import People from "../../_components/People";
import ProductCloud from "../../_components/ProductCloud";
import ToolkitDisclosure from "../../_components/ToolkitDisclosure";
import ModuleSidebar from "../../_components/ModuleSidebar";
import PageFade from "../../_components/PageFade";
import NumberText from "../../_components/NumberText";
import Table from "../../_components/Table";
import Pie from "../../_components/Pie";
import SummarizeFab from "../../_components/SummarizeFab";
import { serializeModule } from "../../_lib/serializeModule";

/** Any figma.com URL — design, file, prototype, or proto. */
function isFigmaUrl(href: string): boolean {
  try {
    const u = new URL(href);
    return /(^|\.)figma\.com$/i.test(u.hostname);
  } catch {
    return false;
  }
}

/** Pull the file name out of a figma.com URL.
 *  e.g. /design/wFRK.../Field-Design-System?... → "Field Design System" */
function figmaFileName(href: string): string | null {
  try {
    const u = new URL(href);
    const parts = u.pathname.split("/").filter(Boolean);
    // /design/{key}/{name}, /file/{key}/{name}, /proto/{key}/{name}
    if (parts.length >= 3 && /^(design|file|proto)$/i.test(parts[0])) {
      return decodeURIComponent(parts[2]).replace(/[-_]+/g, " ");
    }
    return null;
  } catch {
    return null;
  }
}

/** Extract the node-id query param (Figma deep-link target frame). */
function figmaNodeId(href: string): string | null {
  try {
    return new URL(href).searchParams.get("node-id");
  } catch {
    return null;
  }
}


export function generateStaticParams() {
  return allModules.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const m = getModule(slug);
  if (!m) return { title: "Not found · noon onboarding" };
  return {
    title: `${m.num} · ${m.title} · noon onboarding`,
    description: m.summary,
  };
}

export default async function ModulePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const m = getModule(slug);
  if (!m) notFound();

  const idx = allModules.findIndex((x) => x.slug === m.slug);
  const prev = idx > 0 ? allModules[idx - 1] : null;
  const next = idx < allModules.length - 1 ? allModules[idx + 1] : null;

  return (
    <div className="module-shell">
      <ModuleSidebar currentSlug={m.slug} />

      <PageFade>
      <div className="doc">
      <span className="eyebrow">
        Module {m.num} · {m.when}
      </span>
      <h1 className="h-title" style={{ marginTop: 12 }}>
        {m.title}
      </h1>
      {m.summary && (
        <p className="lead">
          <NumberText>{m.summary}</NumberText>
        </p>
      )}

      {m.wip && (
        <div className="wip-banner" role="note">
          <span className="wip-tag">WIP</span>
          <span>
            This page is a work in progress. Sections below are draft and
            will keep evolving as the program is finalised.
          </span>
        </div>
      )}

      <div style={{ marginTop: 32 }} />

      {/* POD user research packs — picker UI in place of the
          generic section loop. Renders the available packs as
          designed cards; coming-soon PODs are flagged below. */}
      {m.slug === "pod-research" && (
        <div
          style={{
            marginTop: 32,
            display: "flex",
            flexDirection: "column",
            gap: 14,
          }}
        >
          {packs.map((p) => (
            <Link
              key={p.slug}
              href={`/m/${p.slug}`}
              className="plain pack-card"
            >
              <div className="pack-card-eyebrow">
                <span className="dot" aria-hidden />
                <span>{p.num}</span>
                <span>·</span>
                <span>{p.format}</span>
              </div>
              <h3 className="pack-card-title">{p.title}</h3>
              {p.summary && (
                <p className="pack-card-body">
                  <NumberText>{p.summary}</NumberText>
                </p>
              )}
              <span className="pack-card-cta">Open pack →</span>
            </Link>
          ))}
          <p
            className="muted"
            style={{ marginTop: 8, fontSize: 13 }}
          >
            Storefront, Monetization, Cart &amp; Checkout, and Customer
            POD packs are being written by their POD seniors.
          </p>
        </div>
      )}

      {/* Modules with a libraries table get a page-wide live search
          (SectionsWithSearch is a client component). Everything else
          renders on the server. */}
      {m.sections.some((s) => s.libs && s.libs.length > 0) ? (
        <SectionsWithSearch sections={m.sections} />
      ) : (
      m.sections.length > 0 && (
      <section style={{ display: "flex", flexDirection: "column", gap: 40 }}>
        {m.sections.map((s) => {
          // On the Toolkit page, every section that carries a tools[]
          // table becomes a collapsible disclosure ("Product & visual
          // toolkit", "Softwares", etc.). The disclosure component
          // reveals a grouped ToolsTable inside.
          if (m.slug === "toolkit" && s.tools && s.tools.length > 0) {
            return (
              <ToolkitDisclosure
                key={s.heading}
                heading={s.heading}
                body={s.body ?? ""}
                tools={s.tools}
              />
            );
          }
          // On the Toolkit page, "Licenses & credentials" and "Motion
          // tool stack" each become their own collapsible disclosure
          // (Motion was previously bundled inside Licenses; split out
          // so the section order in content.ts drives the page order).
          if (m.slug === "toolkit" && s.heading === "Licenses & credentials") {
            return (
              <CredentialsDisclosure
                key={s.heading}
                heading={s.heading}
                body={s.body ?? ""}
              />
            );
          }
          if (m.slug === "toolkit" && s.heading === "Motion tool stack") {
            return (
              <MotionToolsDisclosure
                key={s.heading}
                heading={s.heading}
                body={s.body ?? ""}
              />
            );
          }
          return (
            <div key={s.heading}>
              <h2 className="h-sec" style={{ marginBottom: 10 }}>
                {s.heading}
              </h2>
              {s.body && (
                <p style={{ margin: 0 }}>
                  <NumberText>{s.body}</NumberText>
                </p>
              )}
              {s.table && <Table data={s.table} />}
              {s.pie && <Pie data={s.pie} />}
              {s.people && s.people.length > 0 && (
                <People people={s.people} />
              )}
              {s.products && s.products.length > 0 && (
                <ProductCloud products={s.products} />
              )}
              {s.tools && s.tools.length > 0 && (
                <ToolsTable tools={s.tools} />
              )}
              {s.figmaFiles && s.figmaFiles.length > 0 && (
                <FigmaFilesTable
                  files={s.figmaFiles}
                  flat={s.flatFiles}
                />
              )}
              {/* Video: single (legacy `s.video`) or carousel (`s.videos`).
                  Both feed into VideoCarousel; the tab row hides when there's
                  only one clip. */}
              {(s.videos?.length ?? 0) > 0 && (
                <VideoCarousel clips={s.videos!} />
              )}
              {!s.videos && s.video && (
                <VideoCarousel
                  clips={[
                    { url: s.video.url, caption: s.video.caption },
                  ]}
                />
              )}
            </div>
          );
        })}
      </section>
      )
      )}

      {m.links && m.links.length > 0 && (
        <section>
          <h2 className="h-sec" style={{ marginBottom: 12 }}>
            Links
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {m.links.map((l) => {
              const figma = isFigmaUrl(l.href);
              // Figma URLs become a live embed (their /embed endpoint
              // accepts any figma.com design URL and respects node-id
              // deep links, so the frame opens on the right canvas).
              // Anything else stays as a card link — safer than risking
              // X-Frame-Options blocking an arbitrary site.
              if (!figma) {
                // Non-Figma external link. If we have a self-hosted
                // screenshot preview, render a hero card with the image
                // (the preview sandbox blocks all non-localhost iframes,
                // so a static image is the only way to get a real visual
                // here). Falls back to a plain card link otherwise.
                if (l.preview) {
                  return (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      className="plain"
                      style={{ display: "block" }}
                    >
                      <SmoothCorners
                        radius={20}
                        smoothing={0.6}
                        style={{
                          position: "relative",
                          width: "100%",
                          aspectRatio: "16 / 10",
                          background: "#fff",
                          border: "1px solid #e6e7eb",
                          overflow: "hidden",
                        }}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={l.preview}
                          alt={`${l.label} — preview`}
                          style={{
                            position: "absolute",
                            inset: 0,
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "top",
                          }}
                        />
                      </SmoothCorners>
                      <div
                        style={{
                          marginTop: 8,
                          fontSize: 12,
                          display: "flex",
                          justifyContent: "space-between",
                          gap: 12,
                        }}
                      >
                        <span className="muted">{l.label}</span>
                        <span className="muted">Open ↗</span>
                      </div>
                    </a>
                  );
                }
                return (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="plain"
                    style={{
                      display: "block",
                      padding: "14px 16px",
                      border: "1px solid #e6e7eb",
                      borderRadius: 12,
                      fontSize: 14,
                      lineHeight: "20px",
                    }}
                  >
                    <span>{l.label}</span>
                    <span className="muted" style={{ marginLeft: 8 }}>
                      ↗
                    </span>
                  </a>
                );
              }
              // Figma URLs get a branded preview card instead of a live
              // iframe. The Figma /embed endpoint works in production, but
              // this preview sandbox blocks all non-localhost iframes
              // ("Preview only supports localhost URLs"), so an iframe
              // would render as a blank box here. The card is visually
              // substantial and routes the user to the real file.
              const fileName = figmaFileName(l.href) ?? l.label;
              const nodeId = figmaNodeId(l.href);
              return (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="plain"
                  style={{ display: "block" }}
                >
                  <SmoothCorners
                    radius={20}
                    smoothing={0.6}
                    style={{
                      position: "relative",
                      // Figma-ish dark gradient with the brand color dots
                      // (red/green/blue/yellow/purple) as a hero stripe.
                      background:
                        "linear-gradient(135deg, #1e1e1e 0%, #2c2c2c 100%)",
                      color: "#fff",
                      padding: "28px 24px 24px",
                      border: "1px solid #2a2a2a",
                    }}
                  >
                    {/* Figma brand color dots */}
                    <div
                      style={{
                        display: "flex",
                        gap: 6,
                        marginBottom: 20,
                      }}
                      aria-hidden
                    >
                      {[
                        "#F24E1E",
                        "#A259FF",
                        "#1ABCFE",
                        "#0ACF83",
                        "#FF7262",
                      ].map((c) => (
                        <span
                          key={c}
                          style={{
                            width: 10,
                            height: 10,
                            borderRadius: 9999,
                            background: c,
                          }}
                        />
                      ))}
                    </div>
                    <div
                      style={{
                        fontSize: 11,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        color: "rgba(255,255,255,0.55)",
                        marginBottom: 6,
                      }}
                    >
                      Figma file
                    </div>
                    <div
                      style={{
                        fontSize: 22,
                        fontWeight: 600,
                        lineHeight: "28px",
                        marginBottom: 14,
                      }}
                    >
                      {fileName}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        gap: 8,
                        flexWrap: "wrap",
                        alignItems: "center",
                      }}
                    >
                      {nodeId && (
                        <span
                          style={{
                            fontSize: 11,
                            padding: "4px 8px",
                            borderRadius: 6,
                            background: "rgba(255,255,255,0.08)",
                            color: "rgba(255,255,255,0.75)",
                            fontFamily:
                              "ui-monospace, SFMono-Regular, Menlo, monospace",
                          }}
                        >
                          node-id: {nodeId}
                        </span>
                      )}
                      <span style={{ flex: 1 }} />
                      <span
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: "#fff",
                        }}
                      >
                        Open in Figma ↗
                      </span>
                    </div>
                  </SmoothCorners>
                </a>
              );
            })}
          </div>
        </section>
      )}

      <Rule />

      {/* prev / next */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: 16,
          fontSize: 13,
        }}
      >
        {prev ? (
          <Link href={`/m/${prev.slug}`} className="plain">
            <span className="muted">← {prev.num}</span> {prev.title}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link href={`/m/${next.slug}`} className="plain" style={{ textAlign: "right" }}>
            {next.title} <span className="muted">{next.num} →</span>
          </Link>
        ) : (
          <span />
        )}
      </nav>

      <Rule />

      <SiteFooter />
      </div>
      </PageFade>

      {/* Experimental: AI summary FAB. Scoped to noon-one for now;
          if it lands, drop the slug guard to enable everywhere. */}
      {m.slug === "noon-one" && (
        <SummarizeFab content={serializeModule(m)} title={m.title} />
      )}
    </div>
  );
}
