# noon-onboarding

Landing page for noon's two-week designer onboarding program. Built on the [Plot UI kit](https://github.com/rjaiswal-design/plot-ui) — the dark editorial design system. Kit is vendored under `vendor/uiplot-ui/`.

## Run

```bash
npm install
npm run dev
# → http://localhost:3400
```

## Stack

- Next.js 16 (App Router) + React 19
- Tailwind v4
- Plot UI kit (vendored) — Cormorant Garamond + JetBrains Mono, `#ff5800` accent

## Structure

- `app/page.tsx` — the full landing page
- `app/content.ts` — copy + module/timeline data
- `app/globals.css` — token import + body chrome
- `vendor/uiplot-ui/` — built kit (dist) imported as `@uiplot/ui`
