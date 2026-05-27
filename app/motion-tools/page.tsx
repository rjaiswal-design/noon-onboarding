import type { Metadata } from "next";
import { Rule, TopBar, SiteFooter } from "../_components";

export const metadata: Metadata = {
  title: "Motion tool stack · noon onboarding",
  description:
    "Our After Effects to Lottie motion pipeline: the plugins we use and what each one is for.",
};

type Tool = {
  num: string;
  name: string;
  purpose: string;
  link: string;
  linkLabel: string;
  uses: string[];
  tip: string;
};

const tools: Tool[] = [
  {
    num: "01",
    name: "Overlord",
    purpose: "Move design assets directly from Figma into After Effects as fully editable, layered compositions.",
    link: "https://battleaxe.co/overlord/docs",
    linkLabel: "battleaxe.co/overlord/docs",
    uses: [
      "Transferring shapes, vectors, text, and groups from Figma to AE without flattening",
      "Preserving layer hierarchy, naming, and structure",
      "Avoiding the manual rebuild step that breaks the design-to-motion handoff",
    ],
    tip: "Keep your Figma layers cleanly named and grouped before transferring. Overlord mirrors the structure exactly, so a tidy Figma file means a tidy AE project.",
  },
  {
    num: "02",
    name: "ConsoleFX",
    purpose: "Rapidly apply effects, presets, and adjustments via a searchable command palette.",
    link: "https://www.videocopilot.net/blog/2018/05/fx-console-updated-to-v1-0-3/",
    linkLabel: "videocopilot.net",
    uses: [
      "Applying common effects without digging through menus",
      "Speeding up repetitive effect-stacking workflows",
      "Keyboard-first effect application during animation passes",
    ],
    tip: "Build out custom shortcuts and presets early. The time savings compound across a project.",
  },
  {
    num: "03",
    name: "Mt. Mograph Motion 4",
    purpose: "The everyday animation control panel: easing curves, property adjustments, and fast layer management.",
    link: "https://mtmograph.com/pages/downloads",
    linkLabel: "mtmograph.com/pages/downloads",
    uses: [
      "Applying and customizing easing curves (the core of polished motion)",
      "Tweaking transform, anchor point, and timing properties efficiently",
      "Navigating and isolating layers in complex comps",
    ],
    tip: "Treat Motion 4 as the primary animate tool. Most timing, easing, and rig setup work flows through here.",
  },
  {
    num: "04",
    name: "Motion Tools Pro",
    purpose: "A broad set of utilities that complement Motion 4, covering rigging, alignment, and general scene management.",
    link: "https://motiondesign.school/products/motion-tools-classic/",
    linkLabel: "motiondesign.school",
    uses: [
      "Layer rigging and parenting helpers",
      "Alignment, distribution, and precision positioning",
      "Workflow shortcuts that fill gaps in native AE tools",
    ],
    tip: "Use alongside Motion 4. They overlap slightly, but the combined toolkit covers nearly every routine animation task.",
  },
  {
    num: "05",
    name: "FrameForge",
    purpose: "Our in-house plugin, built specifically to optimize compositions for Lottie export and to restrict effects to the Lottie-supported subset.",
    link: "https://drive.google.com/file/d/1_BcK9JpMH0LAlB_PWIi0yR3VaxjUV_T8/view?usp=share_link",
    linkLabel: "Google Drive (internal)",
    uses: [
      "Validating that animations only use Lottie-supported effects and properties",
      "Optimizing comp structure, expressions, and layer counts before export",
      "Catching export-breaking issues early in the animation phase rather than at delivery",
    ],
    tip: "Run FrameForge checks regularly during animation, not just at the end. Catching unsupported effects early prevents costly rework.",
  },
  {
    num: "06",
    name: "LottieFiles Official Plugin",
    purpose: "Final-stage export of optimized compositions to Lottie JSON.",
    link: "",
    linkLabel: "Install via Creative Cloud → Plugins / Marketplace (search “LottieFiles”)",
    uses: [
      "Exporting .json Lottie files for handoff to engineering",
      "Previewing Lottie output before delivery",
      "Uploading directly to the LottieFiles workspace for review and sharing",
    ],
    tip: "Always preview the exported Lottie in the plugin before handoff. What plays correctly in AE doesn’t always render identically in Lottie.",
  },
];

const pipeline = [
  "Design handoff — pull assets from Figma using Overlord",
  "Setup — organize layers and rig using Motion Tools Pro and Motion 4",
  "Animate — time, ease, and refine with Motion 4; apply effects via ConsoleFX",
  "Optimize — validate Lottie compatibility with FrameForge",
  "Export — deliver final .json via the LottieFiles plugin",
];

const notes = [
  "Keep plugins updated. Lottie-supported feature sets evolve, and FrameForge rules are tied to the current Lottie spec.",
  "When in doubt about a Lottie-unsupported effect, check FrameForge before animating around it.",
  "Document any custom ConsoleFX presets and Motion 4 rigs in the team library so the workflow stays consistent across animators.",
];

export default function MotionToolsPage() {
  return (
    <div className="doc">
      <TopBar back />

      <span className="eyebrow">Toolkit · Motion pipeline</span>
      <h1 className="h-title" style={{ marginTop: 12 }}>
        Motion tool stack
      </h1>
      <p style={{ marginTop: 16 }}>
        Our motion workflow is built around After Effects, with a curated set of
        plugins that streamline asset transfer, effect application, animation
        refinement, and Lottie delivery. Each tool below has a specific role in
        the pipeline, from Figma handoff to final Lottie export.
      </p>

      <Rule />

      <section style={{ display: "flex", flexDirection: "column", gap: 36 }}>
        {tools.map((t) => (
          <div key={t.num}>
            <div style={{ display: "flex", gap: 12, alignItems: "baseline", marginBottom: 8 }}>
              <span className="accent" style={{ fontWeight: 600 }}>{t.num}</span>
              <h2 className="h-sec">{t.name}</h2>
            </div>
            <p style={{ margin: 0 }}>{t.purpose}</p>
            <ul className="list">
              {t.uses.map((u) => (
                <li key={u}>{u}</li>
              ))}
            </ul>
            <p className="tip">Tip — {t.tip}</p>
            <p style={{ margin: "8px 0 0", fontSize: 13 }}>
              {t.link ? (
                <a href={t.link} target="_blank" rel="noreferrer">
                  {t.linkLabel}
                </a>
              ) : (
                <span className="muted">{t.linkLabel}</span>
              )}
            </p>
          </div>
        ))}
      </section>

      <Rule />

      <section>
        <h2 className="h-sec" style={{ marginBottom: 12 }}>
          Recommended pipeline order
        </h2>
        <ol className="list ol">
          {pipeline.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ol>
      </section>

      <Rule />

      <section>
        <h2 className="h-sec" style={{ marginBottom: 12 }}>
          Notes
        </h2>
        <ul className="list">
          {notes.map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ul>
      </section>

      <Rule />

      <SiteFooter />
    </div>
  );
}
