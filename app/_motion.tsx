"use client";
import { useState } from "react";
import Collapsible from "./_components/Collapsible";
import DisclosureChevron from "./_components/DisclosureChevron";

type Tool = { name: string; use: string; href: string; linkLabel: string };

const tools: Tool[] = [
  { name: "Overlord", use: "Figma → AE asset transfer, layers intact", href: "https://battleaxe.co/overlord/docs", linkLabel: "battleaxe.co" },
  { name: "ConsoleFX", use: "Searchable command palette for effects", href: "https://www.videocopilot.net/blog/2018/05/fx-console-updated-to-v1-0-3/", linkLabel: "videocopilot.net" },
  { name: "Mt. Mograph Motion 4", use: "Easing curves, property & timing tweaks, layer nav", href: "https://mtmograph.com/pages/downloads", linkLabel: "mtmograph.com" },
  { name: "Motion Tools Pro", use: "Rigging, alignment, scene utilities", href: "https://motiondesign.school/products/motion-tools-classic/", linkLabel: "motiondesign.school" },
  { name: "FrameForge", use: "Validate & optimise comps for Lottie (in-house)", href: "https://drive.google.com/file/d/1_BcK9JpMH0LAlB_PWIi0yR3VaxjUV_T8/view?usp=share_link", linkLabel: "Google Drive (internal)" },
  { name: "LottieFiles", use: "Export comps to Lottie JSON", href: "", linkLabel: "Creative Cloud → Plugins" },
];

export function MotionToolsDisclosure({
  heading,
  body,
}: {
  heading: string;
  body: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        type="button"
        className="disclosure"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <span className="h-sec">{heading}</span>
        <DisclosureChevron open={open} />
      </button>
      <p style={{ margin: "8px 0 0" }}>{body}</p>

      <Collapsible open={open}>
        <div style={{ marginTop: 18 }}>
          <div className="cred-wrap">
            <table className="cred">
              <thead>
                <tr>
                  <th>Plugin</th>
                  <th>Use case</th>
                  <th>Download</th>
                </tr>
              </thead>
              <tbody>
                {tools.map((t) => (
                  <tr key={t.name}>
                    <td className="k">{t.name}</td>
                    <td>{t.use}</td>
                    <td>
                      {t.href ? (
                        <a href={t.href} target="_blank" rel="noreferrer">
                          {t.linkLabel}
                        </a>
                      ) : (
                        <span className="muted">{t.linkLabel}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Collapsible>
    </div>
  );
}
