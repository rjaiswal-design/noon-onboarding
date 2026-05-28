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
 *  groups files visually under the owning team. */
export type FigmaFile = { key: string; name: string; pod?: string };

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

export type Section = {
  heading: string;
  body: string;
  /** Optional embedded video (e.g. screen.studio share URL).
   *  Rendered below the section body as a 16:9 iframe. */
  video?: { url: string; caption?: string };
  /** Optional libraries table. Rendered below the body as a 2-column
   *  table: library chip-link | what it does. */
  libs?: Lib[];
  /** Optional Figma files table. Rendered below the body as a list of
   *  file rows, each linking to the file on figma.com. */
  figmaFiles?: FigmaFile[];
  /** Optional tools / resources table. Same 2-column shape as libs
   *  but labelled "Tool / Use case". */
  tools?: Tool[];
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
    title: "Toolkit",
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
    title: "Real-life case studies",
    when: "WK1 · D1–2",
    format: "Produced video + live panel",
    owners: ["Ayaneshu", "Tamanna", "Sid", "Saswata"],
    summary:
      "Four designers, four lenses. Produced case-study videos plus a 30-minute live panel. Peer onboarding, not top-down.",
    sections: [
      {
        heading: "Product design",
        body: "How the product design team works day-to-day at noon. The walkthrough below is the profile page as a worked example.",
        video: {
          // Self-hosted under /public/videos. Originally a screen.studio share
          // (https://screen.studio/share/2HyoOgyi) but screen.studio sets
          // `frame-ancestors 'self'` + `X-Frame-Options: SAMEORIGIN`, so the
          // share page cannot be iframed. We downloaded the underlying MP4
          // once and serve it from /public so the player works inline.
          url: "/videos/product-design-profile-walkthrough.mp4",
          caption: "Walkthrough · profile page",
        },
      },
      {
        heading: "Visual design",
        body: "How visual designers approach brand expression, hero compositions, and the visual layer of the product.",
      },
      {
        heading: "Motion",
        body: "How motion is used at noon. Principles first, then the tokens and primitives that keep it consistent.",
      },
    ],
  },
  {
    num: "03",
    slug: "file-directory-access",
    title: "File directory access",
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
          { name: "Address 2.0  [Revamp]", key: "gumh2DH8XdWlCBtLyrM7dd", pod: "Customer" },
          { name: "Ads on noon", key: "saogKp1kUUvefrEbTWYs46", pod: "Monetization" },
          { name: "Asset Collection - Repository", key: "ziw6iPjwcuSvu83B4rSEpn", pod: "Customer" },
          { name: "Brand Ads", key: "r858X0lphsPJoZ2uWZq1MV", pod: "Monetization" },
          { name: "Cart new game", key: "Og45KucvzYGNa35p3yyDE8", pod: "Cart & checkout" },
          { name: "Cart revamp", key: "S1R36kvqX3vPhcWXupbCUe", pod: "Cart & checkout" },
          { name: "Co-brand cards landing page", key: "msJlqDipTHyD0QCJa4X8uu", pod: "Partnership" },
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
          { name: "My Account - noon Re-Design 2.0", key: "4NvyqO60K7Xn4gRJrkWmzQ", pod: "Customer" },
          { name: "New Category Grid", key: "o9mRzpuvgRauAT2Gl9kDVs", pod: "Discovery" },
          { name: "New widget (CMS)", key: "mZh8jgjwvjaH6t8HZoA0xY", pod: "Customer" },
          { name: "Onboarding", key: "o65TUSOL2EScYY6w5NVNx0", pod: "Customer" },
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
          { name: "Saved cards", key: "gbdWWC0jMzJSQWM0mNrUMA", pod: "Cart & checkout" },
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
    ],
  },
  {
    num: "04",
    slug: "design-system-archetype",
    title: "Design system & archetype",
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
    title: "POD user research packs",
    when: "WK2 · D6–10",
    format: "Resource pack per POD",
    owners: ["POD seniors"],
    wip: true,
    summary:
      "For your POD: existing features, PRDs, and 3 to 5 benchmark companies. A light-touch scan of the others.",
    sections: [
      {
        heading: "Intent",
        body: "For the problem space you’re about to work in: companies worth studying, PRDs explaining decisions, and existing features. So you don’t redesign what already exists.",
      },
      {
        heading: "The four PODs",
        body: "Storefront, Monetization, Cart & Checkout, Customer. Each pack has existing features, PRDs, and 3 to 5 benchmark companies with a short note on each.",
      },
      {
        heading: "Depth strategy",
        body: "Go deep on your placed POD; light-touch scan the other three. Each pack is owned by someone inside that POD, so it stays living and accurate.",
      },
    ],
  },
  {
    num: "06",
    slug: "tech-understanding",
    title: "Tech understanding",
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
    num: "08",
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
        heading: "What we look up to",
        body: "The products, studios, and people whose craft sets our bar. Not to copy, but to calibrate against.",
      },
      {
        heading: "What we value",
        body: "Clarity over decoration. Flat surfaces, honest hierarchy. Motion that means something. Restraint.",
      },
      {
        heading: "How to use it",
        body: "Read it to calibrate your eye to where the team is now. When something raises the bar for you, drop it in with a line on why.",
      },
    ],
  },
  {
    num: "09",
    slug: "affinity",
    title: "Affinity for product & craft",
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
    num: "10",
    slug: "events-buzz",
    title: "Offline events & buzz",
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
    num: "11",
    slug: "ui-visual-motion",
    title: "UI, visual & motion sessions",
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

export const allModules = [...modules, ...resources];

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
