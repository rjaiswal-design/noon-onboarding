export const themes = [
  { tag: "01", title: "Context & tools", desc: "Case studies from four designers, and a map of the Figma file directory." },
  { tag: "02", title: "Design language", desc: "Self-study on the design system + archetype; deep sessions in UI, visual, motion." },
  { tag: "03", title: "Research & product", desc: "POD resource packs and a lived product experience, with the team lead." },
  { tag: "04", title: "Community", desc: "Exposure to noon’s offline events and the visibility of its design leads." },
];

/** A library referenced inside a section. Renders as a chip-link to
 *  the library's home (GitHub repo, NPM page, or official docs) plus
 *  a short "what it gives you" description in a scannable table. */
export type Lib = {
  /** Package name as it appears in package.json. Shown verbatim. */
  name: string;
  /** Canonical source: GitHub repo, project homepage, or NPM page. */
  href: string;
  /** One-line description, design-facing (what it unlocks for you). */
  what: string;
};

/** A single Figma file in a project. Rendered as a row in a table
 *  with the file name as the clickable link. The optional `pod`
 *  groups files visually under the owning team. `barRaiser` marks
 *  files worth studying first; surfaces a chip beside the name and
 *  also pulls into a dedicated "Bar raisers" section at the bottom. */
export type FigmaFile = {
  key: string;
  name: string;
  pod?: string;
  barRaiser?: boolean;
};

/** A tool, plugin, asset pack, or external resource. Shape matches
 *  Lib but reads semantically as "tools" in the table header. */
export type Tool = {
  name: string;
  href: string;
  /** Short use-case copy. One line. */
  what: string;
  /** Optional kind/category. Drives sub-section grouping in the
   *  tools table (Plugins / Fonts / Access). Not rendered per-row. */
  kind?: string;
  /** Optional CTA text override (e.g. "Request seat"). Falls back to
   *  a per-kind default (Install / Download / Request), then "Open". */
  cta?: string;
};

/** Generic table — rendered with the same `.cred-wrap` Notion-style
 *  shell as the credentials and library tables. First column gets
 *  the bold `k` treatment. Numbers in any cell are auto-chipped. */
export type TableData = {
  headers: string[];
  rows: string[][];
};

/** A person we look up to. Rendered as a row in the designers
 *  table with X (Twitter) and portfolio link columns. */
export type Person = {
  name: string;
  x?: string;
  portfolio?: string;
  /** Optional short descriptor (e.g. team, focus area). */
  note?: string;
};

/** A product we admire. Rendered as a chip in the products cloud. */
export type Product = {
  name: string;
  url?: string;
};

/** Donut chart data. `centerLabel` is the small caps label inside
 *  the hole; the total of all slice values is rendered beneath it.
 *  `unit` (e.g. "k", "%") is appended to slice values in the legend. */
export type PieData = {
  centerLabel?: string;
  unit?: string;
  slices: { label: string; value: number; color?: string }[];
};

export type Section = {
  heading: string;
  /** Optional sub-copy. When omitted, the section heading sits
   *  directly above whatever structured content follows (table,
   *  videos, etc.). */
  body?: string;
  /** Optional embedded video (e.g. screen.studio share URL).
   *  Rendered below the section body as a 16:9 iframe. Kept for
   *  single-video sections; use `videos` for multi-clip carousels. */
  video?: { url: string; caption?: string };
  /** Optional carousel of videos. Each entry adds an author tab at
   *  the top of the player. */
  videos?: { url: string; caption?: string; author?: string }[];
  /** Optional libraries table. Rendered below the body as a 2-column
   *  table: library chip-link | what it does. */
  libs?: Lib[];
  /** Optional Figma files table. Rendered below the body as a list of
   *  file rows, each linking to the file on figma.com. */
  figmaFiles?: FigmaFile[];
  /** When true, render the figmaFiles table as a flat list (no POD
   *  grouping, no search input). Used by the "Bar raisers" section. */
  flatFiles?: boolean;
  /** Optional tools / resources table. Same 2-column shape as libs
   *  but labelled "Tool / Use case". */
  tools?: Tool[];
  /** Optional free-form table (Markets/Plans/Pricing etc.). */
  table?: TableData;
  /** Optional donut chart (Current pulse etc.). */
  pie?: PieData;
  /** Optional table of people we follow (designers, etc.).
   *  Rendered with X + portfolio link columns. */
  people?: Person[];
  /** Optional product cloud — chip-link list of products we admire. */
  products?: Product[];
};

export type Link = {
  label: string;
  href: string;
  /** Optional preview image (path under /public). When set, the link
   *  renders as a hero card with the screenshot instead of a plain
   *  text row. Used for external sites we can't iframe in the preview
   *  sandbox (anything that isn't localhost). */
  preview?: string;
};

export type Module = {
  num: string;
  slug: string;
  title: string;
  when: string;
  format: string;
  owners: string[];
  summary?: string;
  sections: Section[];
  links?: Link[];
  /** When true, the page renders a "WIP" banner up top and a small
   *  chip beside the title in the sidebar and on the index list. */
  wip?: boolean;
};

// Ways of working
export const modules: Module[] = [
  {
    num: "01",
    slug: "toolkit",
    title: "Setup",
    when: "setup",
    format: "Setup + access",
    owners: ["Design ops"],
    summary:
      "Everything you need installed and licensed on day one. Tools, plugins, fonts, and where to get credentials.",
    sections: [
      {
        heading: "Softwares",
        body: "The tool stack every noon designer should have installed. From the design ops Tool stack frame.",
        tools: [
          // ── Browser ────────────────────────────────────────
          {
            name: "Dia",
            kind: "Browser",
            href: "https://www.diabrowser.com",
            what: "AI-native browser. Chat directly with your open tabs to synthesise information without copy-pasting.",
          },
          {
            name: "Atlas",
            kind: "Browser",
            href: "https://chatgpt.com/atlas",
            what: "OpenAI’s AI-native browser. Modern interface with new features in every build.",
          },
          {
            name: "Arc",
            kind: "Browser",
            href: "https://arc.net",
            what: "The Browser Company’s opinionated browser. Spaces, sidebar tabs, command bar, easy on the eye.",
          },
          // ── Design ─────────────────────────────────────────
          {
            name: "Figma",
            kind: "Design",
            href: "https://www.figma.com/downloads/",
            what: "Where every screen, library and prototype lives. The shared canvas for the whole design team.",
          },
          {
            name: "Adobe Creative Cloud",
            kind: "Design",
            href: "https://www.adobe.com/creativecloud.html",
            what: "Photoshop, Illustrator, After Effects and the rest. For anything Figma can’t do.",
          },
          {
            name: "ProtoPie",
            kind: "Design",
            href: "https://www.protopie.io/download",
            what: "High-fidelity prototyping when you need real interactions, gestures, sensors or live data.",
          },
          // ── AI ─────────────────────────────────────────────
          {
            name: "Claude",
            kind: "AI",
            href: "https://claude.ai",
            what: "General-purpose AI assistant for research, writing, summarising and thinking out loud.",
          },
          // ── Notes ──────────────────────────────────────────
          {
            name: "Obsidian",
            kind: "Notes",
            href: "https://obsidian.md",
            what: "Local-first markdown notes with backlinks. Your personal knowledge base.",
          },
          // ── Code editor ────────────────────────────────────
          {
            name: "Cursor",
            kind: "Code editor",
            href: "https://cursor.com",
            what: "AI-first code editor. Same shape as VS Code, with agentic editing built in.",
          },
          {
            name: "VS Code",
            kind: "Code editor",
            href: "https://code.visualstudio.com",
            what: "The standard editor. Reach for it when you want pure editing, no AI in the loop.",
          },
          {
            name: "Conductor",
            kind: "Code editor",
            href: "https://conductor.build",
            what: "Run multiple Claude Code agents in parallel against the same repo. For when one stream isn’t enough.",
          },
          // ── Terminal ───────────────────────────────────────
          {
            name: "Warp",
            kind: "Terminal",
            href: "https://www.warp.dev",
            what: "Modern, AI-native terminal. Blocks, history search and agentic command suggestions.",
          },
          {
            name: "Terminal",
            kind: "Terminal",
            href: "https://support.apple.com/guide/terminal/welcome/mac",
            what: "macOS’s built-in terminal. Lightweight, always available, zero setup.",
            cta: "Open",
          },
          // ── Task management ────────────────────────────────
          {
            name: "ClickUp",
            kind: "Task management",
            href: "https://clickup.com",
            what: "Visual timeline for the design team. Align tasks to bandwidth instantly.",
          },
          // ── Conversations ──────────────────────────────────
          {
            name: "Google Chat",
            kind: "Conversations",
            href: "https://chat.google.com",
            what: "Primary space for official conversations, threads and shared spaces with product and engineering.",
          },
          {
            name: "WhatsApp",
            kind: "Conversations",
            href: "https://web.whatsapp.com",
            what: "Where most internal design discussions happen, in POD-specific groups.",
          },
        ],
      },
      {
        heading: "Licenses & credentials",
        body: "Where to request paid seats, who approves them, and where shared credentials live. Ask in the design ops channel.",
      },
      {
        heading: "Product & visual toolkit",
        body: "The plugins, assets and access you’ll actually use day-to-day. Install once, ready for the rest of onboarding.",
        tools: [
          {
            name: "PDP populator",
            kind: "Figma plugin",
            href: "https://www.figma.com/community/plugin/1581005409576507210",
            what: "Drops real noon PDP content into your file so screens stop looking like Lorem ipsum.",
          },
          {
            name: "Field token mapper",
            kind: "Figma plugin",
            href: "https://www.figma.com/community/plugin/1627627108013150586",
            what: "Wires your file up to Field DS. Populates the design system tokens automatically.",
          },
          {
            name: "Noontree font",
            kind: "Font pack",
            href: "/assets/Noontree.zip",
            what: "The noon brand typeface. Install once on your machine. Every weight, OTF + WOFF + WOFF2.",
          },
          {
            name: "Request a collaborator seat",
            kind: "Access",
            href: "https://www.figma.com/files/772143963201265266/project/391685352",
            what: "Open the noon Figma project. If you’re not in yet, Figma will prompt you to request access from design ops.",
          },
        ],
      },
      {
        heading: "Motion tool stack",
        body: "Our After Effects to Lottie pipeline. The plugins we use and what each one is for.",
      },
    ],
  },
  {
    num: "02",
    slug: "real-life-case-studies",
    title: "Case studies",
    when: "WK1 · D1–2",
    format: "Produced video + live panel",
    owners: ["Ayaneshu", "Tamanna", "Sid", "Saswata"],
    summary:
      "Four designers, four lenses. Produced case-study videos plus a 30-minute live panel. Peer onboarding, not top-down.",
    sections: [
      {
        heading: "Product design",
        videos: [
          {
            url: "/videos/product-design-profile-walkthrough.mp4",
            author: "Rahul",
            caption: "Profile page walkthrough",
          },
          {
            url: "/videos/product-design-address-sid.mp4",
            author: "Sid",
            caption: "Address case study",
          },
          {
            url: "/videos/product-design-reviews-anurag.mp4",
            author: "Anurag",
            caption: "Reviews case study",
          },
        ],
      },
      {
        heading: "Visual design",
        videos: [
          {
            url: "/videos/visual-design-tamanna.mp4",
            author: "Tamanna",
            caption: "Visual design walkthrough",
          },
        ],
      },
      {
        heading: "Motion",
      },
    ],
  },
  {
    num: "03",
    slug: "file-directory-access",
    title: "Files",
    when: "WK1 · D1",
    format: "Convention + 15-min walkthrough",
    owners: ["Ayaneshu"],
    sections: [
      {
        heading: "What needs to exist",
        body: "A documented Figma structure: folder hierarchy by POD, naming conventions, and status tags for exploration, in review, and shipped.",
      },
      {
        heading: "Access process",
        body: "Day 1: workspace and POD-specific projects. Day 2: a 15-minute walkthrough where Ayaneshu shows the structure and anchor files.",
      },
      {
        heading: "Files in the noon 2.0 project",
        body: "Live list of every file in the noon 2.0 Figma project. Click any row to open the file in Figma.",
        figmaFiles: [
          { name: "Address 2.0  [Revamp]", key: "gumh2DH8XdWlCBtLyrM7dd", pod: "Customer", barRaiser: true },
          { name: "Ads on noon", key: "saogKp1kUUvefrEbTWYs46", pod: "Monetization" },
          { name: "Asset Collection - Repository", key: "ziw6iPjwcuSvu83B4rSEpn", pod: "Customer" },
          { name: "Brand Ads", key: "r858X0lphsPJoZ2uWZq1MV", pod: "Monetization" },
          { name: "Cart new game", key: "Og45KucvzYGNa35p3yyDE8", pod: "Cart & checkout" },
          { name: "Cart revamp", key: "S1R36kvqX3vPhcWXupbCUe", pod: "Cart & checkout" },
          { name: "Co-brand cards landing page", key: "msJlqDipTHyD0QCJa4X8uu", pod: "Partnership", barRaiser: true },
          { name: "Collections", key: "BjOhHBHDBe8kzL22ThqPqG", pod: "Discovery" },
          { name: "Collections Dev Handoff file", key: "1rBQhJHcgKplNy0y4TJLPN", pod: "Discovery" },
          { name: "Cross border order tracking", key: "nBRyz3vSV97rHT9qRIAjBu", pod: "Cart & checkout" },
          { name: "Design File Template (Copy)", key: "1CQWvxult5V6APvLpTWR0b", pod: "Customer" },
          { name: "Facets 2.0", key: "IGcL8ZFfQSnFcDnFsTCzoE", pod: "Discovery" },
          { name: "Facets 2.0", key: "OUeC1I9eTtVs3tzCZsvKtc", pod: "Discovery" },
          { name: "Font Changes - DQA", key: "rbMPY08mZowmDfcl5quBwO", pod: "Customer" },
          { name: "Global", key: "32jKbgHbpsByEFYwZMA09R", pod: "Customer" },
          { name: "Homepage Revamp 2025 | noon", key: "iRE9RwO94eMAyW3j3XKNXW", pod: "Customer" },
          { name: "Homepage Revamp 2025 | noon (Copy)", key: "1gJaiuc709VEV9thU8I49g", pod: "Customer" },
          { name: "IPL Revamp 2026", key: "iICCNgWkLFIEmhWEov9ePG", pod: "Customer" },
          { name: "Installation Add-On", key: "mQOS4yBaErKWjujtmtGKoP", pod: "Cart & checkout" },
          { name: "Marketplace Switcher", key: "J575bVy8d0OiOBs5hVvGp8", pod: "Customer" },
          { name: "Marketplace Upsell Bottomsheet", key: "TKZiWOhTadymtHEcuAZ4jm", pod: "Customer" },
          { name: "Master file", key: "QlmeohTxuz9vrITspppECZ", pod: "Customer" },
          { name: "My Account - noon Re-Design 2.0", key: "4NvyqO60K7Xn4gRJrkWmzQ", pod: "Customer", barRaiser: true },
          { name: "New Category Grid", key: "o9mRzpuvgRauAT2Gl9kDVs", pod: "Discovery" },
          { name: "New widget (CMS)", key: "mZh8jgjwvjaH6t8HZoA0xY", pod: "Customer" },
          { name: "Onboarding", key: "o65TUSOL2EScYY6w5NVNx0", pod: "Customer", barRaiser: true },
          { name: "Order confirmation", key: "HfoetirHifa3gCNL9tJh6V", pod: "Cart & checkout" },
          { name: "Orders 2.0 [2026]", key: "Kj3myTvCAZAFzV4quSy6f6", pod: "Cart & checkout" },
          { name: "PDP Redesign", key: "xPr9Ln37JGSBGvNtrsyD0y", pod: "Discovery" },
          { name: "PIF - Rewards", key: "yyUe2DAQa7j7T8a5ukgZBv", pod: "Customer" },
          { name: "PLP- Midroll Filters Revamp", key: "NzG5i19RFoFHXPeFdNPVW5", pod: "Discovery" },
          { name: "PowerPlay  2026", key: "tbVBoFbQQlNybOqDytI4A4", pod: "Customer" },
          { name: "R&R - Homepage Reminder", key: "em8ELnu2g9twe11XRA87j2", pod: "Customer" },
          { name: "R&R 2.0", key: "KzR8dy12uT8CtgBRHHY6Qx", pod: "Customer" },
          { name: "Returns", key: "dZxYYSY5A5uSnvbgTICTaV", pod: "Cart & checkout" },
          { name: "Saved Cards Payment", key: "ufpp1476iTIlCUS8bXRmdS", pod: "Cart & checkout" },
          { name: "Saved cards", key: "gbdWWC0jMzJSQWM0mNrUMA", pod: "Cart & checkout", barRaiser: true },
          { name: "Search", key: "4Xn0zIMvvaEbA3knmlPzrT", pod: "Discovery" },
          { name: "Search Penetration", key: "RNIBxpntBgeuTszo2d36mH", pod: "Discovery" },
          { name: "Services [UC + Aster]", key: "lUl0aXaeM0D2VcU4fEmVcP", pod: "Customer" },
          { name: "Storefront", key: "2ldJbjmQq4RkhnrNFCfXQB", pod: "Discovery" },
          { name: "Template library", key: "DBMfO8vwyekcAn9Sz0uUEQ", pod: "Customer" },
          { name: "Untitled", key: "ntpmJDtQTEKpY20Hqs3dUV", pod: "Other" },
          { name: "Warranty Claims", key: "qndwVtlaX6gYaWKM3jnV6L", pod: "Cart & checkout" },
          { name: "Web Product Box PDP/ PLP", key: "i0LUMKmPoUd2B7lkdIfxyS", pod: "Web" },
          { name: "illustration Library", key: "4L1MFeexnspo7AmmOx4prT", pod: "Customer" },
          { name: "noon - Base Screens", key: "bTClav635zgMpBOw5qiKj2", pod: "Customer" },
          { name: "noon Experience", key: "MylqYA8Opky80gx2kqJaui", pod: "noon Experiences" },
          { name: "noon Experiences", key: "tNTqjliKqaaSzZJ4zMTQem", pod: "noon Experiences" },
          { name: "noon Gaming-YFS", key: "bnj3ARlMT3XBNnH2rQe2az", pod: "noon Experiences" },
          { name: "noon One <> Dev ready files (Copy)", key: "VW6bDgmfh4tMnfnYZHJQwc", pod: "noon One" },
          { name: "✅ Buy now v2", key: "AmAM2S45pOELL4YwD1gizc", pod: "Cart & checkout" },
        ],
      },
      {
        heading: "Bar raisers",
        body: "Files worth studying first. Bar-raising work from the team that resets what good looks like.",
        flatFiles: true,
        figmaFiles: [
          { name: "Address 2.0  [Revamp]", key: "gumh2DH8XdWlCBtLyrM7dd", barRaiser: true },
          { name: "Co-brand cards landing page", key: "msJlqDipTHyD0QCJa4X8uu", barRaiser: true },
          { name: "Saved cards", key: "gbdWWC0jMzJSQWM0mNrUMA", barRaiser: true },
          { name: "My Account - noon Re-Design 2.0", key: "4NvyqO60K7Xn4gRJrkWmzQ", barRaiser: true },
          { name: "Onboarding", key: "o65TUSOL2EScYY6w5NVNx0", barRaiser: true },
        ],
      },
    ],
  },
  {
    num: "04",
    slug: "design-system-archetype",
    title: "The system",
    when: "WK1 · D3–4",
    format: "Playground + Storybook",
    owners: ["Ayaneshu", "Rahul"],
    summary:
      "Field DS is noon’s design system, built by Ayaneshu and Rahul. Ships with a live playground and a Storybook.",
    sections: [],
    links: [
      {
        label: "Field Design System (Figma)",
        href: "https://www.figma.com/design/wFRKiKskxZ4vjIHbDVvngJ/Field-Design-System?node-id=105-6659&t=gatOrYtUx4gx8NQU-1",
      },
      {
        label: "Field DS playground",
        href: "https://field-ds-playground.vercel.app/",
        preview: "/images/field-ds-playground.png",
      },
    ],
  },
  {
    num: "05",
    slug: "pod-research",
    title: "POD packs",
    when: "WK2 · D6–10",
    format: "Resource pack per POD",
    owners: ["POD seniors"],
    summary:
      "Per-POD context: existing features, PRDs, and 3 to 5 benchmark companies. The packs themselves are linked below.",
    sections: [],
  },
  {
    num: "06",
    slug: "tech-understanding",
    title: "The stack",
    when: "reference",
    format: "Primer",
    owners: ["Eng partners"],
    summary:
      "noon’s app is React Native: 99 runtime libraries, 61 dev. Designers who know what already exists in the codebase design faster.",
    sections: [
      {
        heading: "The shape of the stack",
        body: "React + React Native at the core, with 160 third-party libraries. Mobile-heavy: native modules for camera, maps, video, gestures, animation.",
        libs: [
          { name: "react", href: "https://react.dev", what: "Component model and rendering." },
          { name: "react-native", href: "https://reactnative.dev", what: "Native iOS + Android runtime for React." },
        ],
      },
      {
        heading: "Navigation, gestures, motion",
        body: "Screens, transitions, drag-to-dismiss sheets, parallax, snappy presses. Stay within these primitives and motion is free.",
        libs: [
          { name: "react-native-navigation", href: "https://github.com/wix/react-native-navigation", what: "Native screen stack, transitions, tab bar." },
          { name: "react-native-gesture-handler", href: "https://github.com/software-mansion/react-native-gesture-handler", what: "Native-thread pan/swipe/tap recognisers." },
          { name: "react-native-reanimated", href: "https://github.com/software-mansion/react-native-reanimated", what: "60fps animations on the UI thread (springs, timing, gestures)." },
          { name: "react-native-tab-view", href: "https://github.com/react-navigation/react-navigation/tree/main/packages/react-native-tab-view", what: "Swipeable top tabs." },
          { name: "react-native-pager-view", href: "https://github.com/callstack/react-native-pager-view", what: "Native horizontal pager (carousels, swipe screens)." },
        ],
      },
      {
        heading: "UI primitives already in place",
        body: "Before you build a custom version of anything, check what ships. If you’re tempted to draw a new component, search this table first.",
        libs: [
          { name: "@gorhom/bottom-sheet", href: "https://github.com/gorhom/react-native-bottom-sheet", what: "Drag sheets, modal sheets, snap points." },
          { name: "react-native-svg", href: "https://github.com/software-mansion/react-native-svg", what: "Any vector: icons, illustrations, custom shapes." },
          { name: "react-native-linear-gradient", href: "https://github.com/react-native-linear-gradient/react-native-linear-gradient", what: "Gradient fills for surfaces and CTAs." },
          { name: "react-native-fast-image", href: "https://github.com/DylanVann/react-native-fast-image", what: "Priority-aware image loading with caching." },
          { name: "react-native-calendars", href: "https://github.com/wix/react-native-calendars", what: "Date pickers, ranges, agenda views." },
          { name: "react-native-progress", href: "https://github.com/oblador/react-native-progress", what: "Rings, bars, circular and indeterminate loaders." },
          { name: "lottie-react-native", href: "https://github.com/lottie-react-native/lottie-react-native", what: "Vector animations from After Effects." },
        ],
      },
      {
        heading: "Native capabilities you can rely on",
        body: "If your design needs the device’s real abilities, the plumbing exists. Talk to your POD’s engineers before assuming something isn’t possible.",
        libs: [
          { name: "react-native-vision-camera", href: "https://github.com/mrousavy/react-native-vision-camera", what: "Camera capture, frame processing, scanning." },
          { name: "react-native-maps", href: "https://github.com/react-native-maps/react-native-maps", what: "Native maps with markers, polylines, overlays." },
          { name: "react-native-webview", href: "https://github.com/react-native-webview/react-native-webview", what: "In-app browser surfaces and embedded web content." },
          { name: "react-native-video", href: "https://github.com/TheWidlarzGroup/react-native-video", what: "Inline video playback (HLS, MP4, controls)." },
          { name: "react-native-keychain", href: "https://github.com/oblador/react-native-keychain", what: "Secure credential storage (Keychain / Keystore)." },
          { name: "react-native-contacts", href: "https://github.com/morenoh149/react-native-contacts", what: "Read the device contacts." },
          { name: "react-native-document-picker", href: "https://github.com/rnmods/react-native-document-picker", what: "Pick files from the OS file picker." },
          { name: "react-native-image-picker", href: "https://github.com/react-native-image-picker/react-native-image-picker", what: "Pick or capture photos and videos." },
          { name: "react-native-device-info", href: "https://github.com/react-native-device-info/react-native-device-info", what: "Device, OS, network details for conditional design." },
          { name: "react-native-permissions", href: "https://github.com/zoontek/react-native-permissions", what: "Cross-platform runtime permission prompts." },
        ],
      },
      {
        heading: "Localization & locale-aware design",
        body: "noon ships across multiple markets. Design for translation length, RTL mirroring, locale formatting, and currency precision from the start.",
        libs: [
          { name: "i18n-js", href: "https://github.com/fnando/i18n", what: "Translation strings, interpolation, pluralisation." },
          { name: "react-native-localize", href: "https://github.com/zoontek/react-native-localize", what: "Device locale, RTL detection, currency/region helpers." },
          { name: "dayjs", href: "https://github.com/iamkun/dayjs", what: "Date formatting, parsing, locale plugins." },
          { name: "libphonenumber-js", href: "https://github.com/catamphetamine/libphonenumber-js", what: "Phone number validation and formatting per country." },
          { name: "decimal.js", href: "https://github.com/MikeMcl/decimal.js", what: "Arbitrary-precision math (currency, totals)." },
          { name: "card-validator", href: "https://github.com/braintree/card-validator", what: "Credit card number, CVV and expiry validation." },
        ],
      },
      {
        heading: "Quality, observability, design consistency",
        body: "The DS components you use are typed, tested, and previewable in Storybook. Anything you ship will be monitored.",
        libs: [
          { name: "typescript", href: "https://www.typescriptlang.org", what: "Static typing. Every component’s props are documented in code." },
          { name: "eslint", href: "https://eslint.org", what: "Catches drift from house style and common bugs." },
          { name: "prettier", href: "https://prettier.io", what: "Auto-formatting so code reads the same everywhere." },
          { name: "husky", href: "https://github.com/typicode/husky", what: "Git hooks. Runs checks before commits land." },
          { name: "lint-staged", href: "https://github.com/lint-staged/lint-staged", what: "Pairs with husky to only re-check changed files." },
          { name: "jest", href: "https://jestjs.io", what: "Unit and integration test runner." },
          { name: "@testing-library/react-native", href: "https://callstack.github.io/react-native-testing-library/", what: "User-facing component tests (renders, taps, queries)." },
          { name: "storybook", href: "https://storybook.js.org", what: "Browse every DS primitive in isolation with controls." },
          { name: "@sentry/react-native", href: "https://github.com/getsentry/sentry-react-native", what: "Crash and error tracking in production." },
          { name: "react-native-adjust", href: "https://github.com/adjust/react_native_sdk", what: "Attribution and marketing event tracking." },
        ],
      },
    ],
  },
];

// Reference & culture
export const resources: Module[] = [
  {
    num: "07",
    slug: "values",
    title: "Values",
    when: "day one, every day",
    format: "Seven lines",
    owners: ["The team"],
    summary:
      "How we behave on this team. Not aspirations. Defaults. Hold yourself to these. We will.",
    sections: [
      {
        heading: "The customer doesn’t care what you do.",
        body: "Product, visual, motion. These are administrative labels. The person opening the app doesn’t know them and doesn’t care. They see one thing: the screen in front of them. If your beautiful illustration confuses the flow, the illustration is wrong. If your slick interaction breaks the visual rhythm, the interaction is wrong. The end experience is the only KPI. Everything else is internal scaffolding. Defend the screen, not your discipline. If you find yourself defending your craft because it’s your craft, you’ve already lost the argument.",
      },
      {
        heading: "Be an owner. Renters don’t last.",
        body: "Own everything. Not just the file with your name on it. The studio kitchen. The design system. The bug nobody else has noticed yet. From the first sketch to the bug report that lands six months later, the work is yours. You don’t hand off problems and watch them go sideways from a safe distance. You notice what’s off and you fix it. You give credit. You absorb blame. The high here comes from caring more than your job description asks for. That’s the dopamine. That’s why owners keep showing up. Renters get treated like renters, and the team moves on without them. If you ever catch yourself thinking “that’s not my problem,” you’ve already failed. We’ll notice before you do.",
      },
      {
        heading: "Obsess over the customer.",
        body: "Talk about the customer more than the work. Their problems get the meeting time. Their feedback gets read first, every time. Every Monday someone should walk in saying “a customer told us X” and the week should re-orient around it. If you’ve gone two weeks without watching a real user open this app, you’re guessing. Designers who guess for a living get replaced by designers who don’t. Craft serves the customer. Not the other way around.",
      },
      {
        heading: "Craft is baseline. Obsession is the bar.",
        body: "Knowing how to design isn’t special here. That’s the floor. The bar is obsession over every micro-decision: the letter spacing, the exact word in the button, the illustration that almost works versus actually works, the 250 milliseconds of emotion when the screen lands. You should be vibrating about shipping this to a real customer. If you’re not obsessing over the small things, the work isn’t done, and you’re not the person to finish it. Shipping is agentic, not assigned. You don’t wait to be asked. You don’t do “your part.” You take it across the line because no one else cares as much as you do. Or you’re replaceable by someone who will.",
      },
      {
        heading: "Best idea wins. Step on toes if you must.",
        body: "Seniority doesn’t win arguments. Tenure doesn’t win arguments. The clearest case wins, even when the person making it is two months in. Toe-stepping is fine. Politeness with bad ideas is cowardice. Be respectful of people. Be ruthless with the work. If you keep your mouth shut to avoid friction, you’ve already lost something more expensive than the argument.",
      },
      {
        heading: "Principled confrontation.",
        body: "When something is wrong, say it. In the meeting, not the corridor afterwards. Bring the principle, not your mood. The discomfort of an honest conversation is always cheaper than the rework you’ll do to avoid it. If you whisper in the hallway what you should have said in the room, you’re part of the problem. Fix it on the spot, or stop calling it a problem.",
      },
      {
        heading: "Nothing is permanent except change.",
        body: "The product will change. The team will change. The market will change. If you build your value on how things were last quarter, you’re already obsolete. Hold opinions strongly. Hold attachments loosely. The designer who survives this place is the one who adapts faster than it does. The one who doesn’t, doesn’t.",
      },
    ],
  },
  {
    num: "08",
    slug: "beyond-pixels",
    title: "Beyond pixels",
    when: "the team",
    format: "Shared doc",
    owners: ["Everyone"],
    wip: true,
    summary:
      "We’re more than our Figma files. Bring what you’re into: movies, sports, the places you love.",
    sections: [
      {
        heading: "Why this exists",
        body: "The best teams know each other as people, not just collaborators. Affinity isn’t only for the product; it’s for each other.",
      },
      {
        heading: "Bring yours",
        body: "Films you rewatch, the sport you follow, your favourite travel destination, the hobby nobody asked about. Add yours to the team doc.",
      },
      {
        heading: "What it unlocks",
        body: "Better conversations, easier trust, and small talk that turns into real talk. Plus great travel and watchlist recommendations.",
      },
    ],
  },
  {
    num: "09",
    slug: "taste",
    title: "taste.md",
    when: "living",
    format: "Living doc",
    owners: ["The team"],
    wip: true,
    summary:
      "What good looks like to us right now, and who we look up to. A living snapshot of the team’s taste.",
    sections: [
      {
        heading: "Designers we follow",
        body: "Watch what they ship and how they talk about it. Their feeds are a free education.",
        people: [
          { name: "Benji Taylor", x: "https://x.com/benjitaylor", portfolio: "https://benjitay.com" },
          { name: "Emil Kowalski", x: "https://x.com/emilkowalski_", portfolio: "https://emilkowal.ski" },
          { name: "Rauno Freiberg", x: "https://x.com/raunofreiberg", portfolio: "https://rauno.me" },
        ],
      },
      {
        heading: "Products we admire",
        body: "Open them. Use them. Steal the right things; reject the wrong ones. The bar is set by people who care about the same details we do.",
        products: [
          { name: "Apple", url: "https://apple.com" },
          { name: "Airbnb", url: "https://airbnb.com" },
          { name: "Spotify", url: "https://spotify.com" },
          { name: "Family Wallet", url: "https://family.co" },
          { name: "Bump" },
          { name: "Wise", url: "https://wise.com" },
          { name: "Revolut", url: "https://revolut.com" },
          { name: "Uber", url: "https://uber.com" },
          { name: "Duolingo", url: "https://duolingo.com" },
          { name: "Netflix", url: "https://netflix.com" },
          { name: "Linear", url: "https://linear.app" },
          { name: "Raycast", url: "https://raycast.com" },
          { name: "YouTube", url: "https://youtube.com" },
          { name: "World App", url: "https://world.org" },
          { name: "Base", url: "https://base.org" },
          { name: "Go Steps" },
          { name: "Any Distance", url: "https://anydistance.club" },
          { name: "X", url: "https://x.com" },
          { name: "Brilliant", url: "https://brilliant.org" },
          { name: "Lego building flow" },
          { name: "Box Box Club" },
          { name: "Telegram", url: "https://telegram.org" },
          { name: "Arc", url: "https://arc.net" },
          { name: "Cash App", url: "https://cash.app" },
          { name: "Luminar", url: "https://skylum.com/luminar" },
          { name: "Exoplan" },
          { name: "Dieter Rams · Braun" },
          { name: "Discord", url: "https://discord.com" },
          { name: "Untitled" },
        ],
      },
      {
        heading: "Where to study",
        body: "When you need fresh references, these are the wells.",
        tools: [
          {
            name: "Mobbin",
            kind: "Reference",
            href: "https://mobbin.com",
            what: "Searchable library of real product UX. Every flow, screen by screen.",
          },
          {
            name: "60fps.design",
            kind: "Reference",
            href: "https://60fps.design",
            what: "Curated motion design references. The bar for what 60fps actually feels like.",
          },
        ],
      },
    ],
  },
  {
    num: "10",
    slug: "affinity",
    title: "Craft",
    when: "WK2 + ongoing",
    format: "Lived experience + a rhythm",
    owners: ["Team lead"],
    wip: true,
    summary:
      "Place a real order, complete one full POD loop, then talk it through with your team lead. The conversation is the point.",
    sections: [
      {
        heading: "Lived product experience",
        body: "Place an order on noon and complete one full POD loop. Then talk it through with your team lead. That dialogue is where affinity forms.",
      },
      {
        heading: "Craft as a continuous practice",
        body: "Onboarding doesn’t end here. A shared resource program with everyone contributing: books, podcasts, long-form on product decisions.",
      },
    ],
  },
  {
    num: "11",
    slug: "events-buzz",
    title: "Buzz",
    when: "WK2 · ongoing",
    format: "Exposure (passive)",
    owners: ["Parallel program"],
    wip: true,
    summary:
      "Hosted events and PR for design leads. You walk in to a team that’s already known.",
    sections: [
      {
        heading: "Intent",
        body: "Two pillars: hosted events bringing industry leaders into noon, and PR for design leads. The noon design team is known, and you feel it on arrival.",
      },
      {
        heading: "Your role here",
        body: "Passive. If an event happens in your first two weeks, attend. Buzz that has to be manufactured by the new joiner isn’t real buzz.",
      },
    ],
  },
  {
    num: "12",
    slug: "ui-visual-motion",
    title: "Sessions",
    when: "WK2 · D6–8",
    format: "3 sessions + 3 deliverables",
    owners: ["Ayaneshu", "Tamanna", "Saswata"],
    wip: true,
    summary:
      "Three deep dives into how noon thinks about UI, visual, and motion, each ending with a deliverable.",
    sections: [
      {
        heading: "Intent",
        body: "Not generic craft sessions. How noon thinks about UI, visual, and motion. Each session ends with one tangible deliverable.",
      },
      {
        heading: "The three sessions",
        body: "UI (Ayaneshu), Visual (Tamanna), Motion (Saswata). Each ends with a small deliverable: a flow, a composition exercise, a motion study.",
      },
      {
        heading: "On grading",
        body: "The deliverables aren’t graded. They’re conversation starters with the session owner; that conversation is the actual learning.",
      },
    ],
  },
];

// POD packs — dedicated context pages linked from POD user research packs.
// Live alongside modules and resources but with their own sidebar group so
// they don't disturb the "Six ways of working / five reference" framing on
// the index page.
export const packs: Module[] = [
  {
    num: "P1",
    slug: "noon-one",
    title: "noon One",
    when: "reference",
    format: "Product context pack",
    owners: ["Rahul"],
    summary:
      "noon’s paid membership: unlimited free delivery, member-only deals, bundled entertainment across every noon vertical. ~1.2M members today.",
    sections: [
      {
        heading: "The job it does",
        body: "noon One is the connective tissue of the super app. It converts a transactional shopper into a member who pays off across e-commerce, food, and quick commerce. Every feature is judged on one of two mandates: acquisition or retention.",
      },
      {
        heading: "Why a super-app subscription is different",
        body: "Multi-vertical payoff is the moat: hard to match, sticky once two verticals activate. Frequency in food and Minutes manufactures the daily habit; the high-margin shopping verticals carry the unit economics. The savings tracker is the renewal argument.",
      },
      {
        heading: "Markets, plans & pricing",
        body: "Available in UAE and KSA. Prices below are the base / rack rate; most members enter via a trial or a promo.",
        table: {
          headers: ["Market", "Plan", "Price", "Notes"],
          rows: [
            ["UAE", "One Monthly", "AED 24.99", "Standard entry"],
            ["UAE", "One Annual", "~60% cheaper / mo", "Best value, commitment play"],
            ["UAE", "Bundle (OSN+ + Yango)", "Promotional", "Membership + streaming"],
            ["UAE", "Duo (upcoming)", "~AED 39.99", "2 seats"],
            ["UAE", "Family (upcoming)", "~AED 49.99", "5 seats"],
            ["KSA", "Premium Monthly", "SAR 29.99", "Major metros only"],
            ["KSA", "Standard", "—", "Rest of Kingdom"],
            ["KSA", "VIP core", "SAR 19.99", "Lower tier"],
            ["KSA", "OSN+ bundle", "Promotional", "Streaming"],
          ],
        },
      },
      {
        heading: "Current pulse",
        body: "Active members split between markets. UAE deeper and more mature; KSA earlier-stage but with higher AOV. Members out-transact regulars ~1.2× on TPC; acquisition is softening and churn now outpaces new joins.",
        pie: {
          centerLabel: "Active",
          unit: "k",
          slices: [
            { label: "UAE", value: 564, color: "#ff5800" },
            { label: "KSA", value: 338, color: "#1d2539" },
          ],
        },
      },
      {
        heading: "Benefits, vertical by vertical",
        body: "Unlimited free delivery above a per-surface MOV across noon, noon Food, noon Minutes, Supermall and NowNow. noon One Day on the 1st of every month is the recurring hook. Member-only deals, priority support, streaming up to 50% off, and the running savings tally.",
      },
      {
        heading: "Partnerships",
        body: "Streaming: OSN+ and Yango (Yango Play). Co-brand cards: Emirates NBD (UAE, 1 year free + lifetime 50% off) and SAB / SABB (KSA, 2 years free Premium). Bank-card members are a structurally different cohort — pre-committed for 1–2 years.",
      },
      {
        heading: "Competitive landscape",
        body: "Region: Amazon Prime, talabat pro, Careem Plus, Deliveroo Plus, HungerStation/Jahez/Mrsool. Global inspiration: Walmart+, Swiggy One, Zomato Gold, Meituan, Yandex Plus, Spotify Duo/Family.",
      },
      {
        heading: "Behavioural signals shaping the roadmap",
        body: "48% of noon One users share a payment method (vs 38% of regular). 35% of UAE accounts log in on 2+ devices (vs 18%). ~40% of shared-Wi-Fi clusters are 2-person — a market a 5-seat family plan over-serves.",
      },
      {
        heading: "Active workstreams",
        body: "Duo + Family sharing plans (Spotify-style, no household lock). Landing funnel revamp. Tighter noon One × Minutes and × Food initiatives — order notifications, coupon integration, the noon One toggle.",
      },
      {
        heading: "Strategic lens for new features",
        body: "Five questions. Which mandate (acquisition or retention)? Does it compound across verticals? Does it strengthen the savings narrative? What cohort (organic, bank-card, bundle, trial, shared)? Where’s the blind spot — receiver-side demand, the activation cliff, or KSA penetration?",
      },
    ],
    links: [
      {
        label: "noon One — full context doc (May 2026)",
        href: "/docs/noon-one-context.md",
      },
    ],
  },
];

export const allModules = [...modules, ...resources, ...packs];

export function getModule(slug: string) {
  return allModules.find((m) => m.slug === slug);
}

export type Credential = {
  platform: string;
  account: string;
  password: string;
  ownership: string;
  poc: string;
};

export const credentials: Credential[] = [
  { platform: "Adobe", account: "product@noon.com", password: "BLRdesign@123", ownership: "Rahul / Saswata", poc: "Rahul / Ayush" },
  { platform: "Adobe 2", account: "aykapoor@noon.com", password: "NoonDesign@123", ownership: "Sanket / Tamanna", poc: "Rahul / Ayush" },
  { platform: "Freepik", account: "product@noon.com", password: "NoonDesign@123", ownership: "Everyone", poc: "Rahul / Ayush" },
  { platform: "Mobbin", account: "mhusni@noon.com", password: "NoMoreDribbble123", ownership: "Everyone", poc: "Rahul / Ayush" },
  { platform: "ProtoPie", account: "aykapoor@noon.com", password: "NoonDesign@123", ownership: "", poc: "Rahul / Ayush" },
  { platform: "Envato Elements", account: "sdutta@noon.com", password: "#SaaS10@01@2002#", ownership: "", poc: "Rahul / Ayush" },
  { platform: "Lottie Files", account: "amchoudhary@noon.com", password: "Inazuma11@07", ownership: "", poc: "Rahul / Ayush" },
  { platform: "Iconscout", account: "", password: "", ownership: "", poc: "" },
  { platform: "60fps.com", account: "", password: "1FFA9753-EE0E4D23-B824DE7B-D5646CC7", ownership: "", poc: "Rahul / Ayush" },
];

export const devmode = {
  note: "Do not give dev mode access to individual accounts. Instead ask them to sign in using one of these credentials.",
  password: "&&@WmfiZpvuEw7G",
  poc: "Husni",
  accounts: [
    "uaedevmode@noon.com",
    "sldevmode@noon.com",
    "egdevmode@noon.com",
    "figmadevmode@noon.com",
  ],
};

export const principles = [
  {
    title: "Affinity for product and craft is built, not assigned.",
    body: "Every module reinforces it. The new joiner places real orders, has real conversations, and reads real PRDs. Not a curriculum about noon, but exposure to how noon actually works.",
  },
  {
    title: "The new joiner is the audience in week 1, a contributor by week 2.",
    body: "Week 1 is for receiving: videos, walkthroughs, the design system. Week 2 is for producing: three deliverables, a POD deep-read, a soft hand-off. The arc is deliberate.",
  },
];

export const dependencies = [
  {
    num: "01",
    title: "Archetype self-study doc",
    body: "The day-3 reading behind the archetype framework. Design system & archetype leans on this existing.",
  },
  {
    num: "02",
    title: "Events and PR program",
    body: "Hosted events, talks, articles, podcasts. Offline events & buzz references this; it’s a broader, separate initiative building the team’s public presence.",
  },
  {
    num: "03",
    title: "Shared resource program",
    body: "Books, podcasts, references on a regular cadence the whole team contributes to and consumes. The craft-as-practice layer in Affinity for product & craft depends on this rhythm existing.",
  },
];
