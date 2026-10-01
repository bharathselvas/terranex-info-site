# Terranex — Judge-Facing Product Dossier

A single-page, interactive product documentation site for **Terranex**, a parcel-centric
orchestration layer for land acquisition under the RFCTLARR Act, 2013.

**SIH 2026 · Problem Statement 26016 · Department of Land Resources**

> This site is a **frontend documentation experience**. It has no backend, makes no API calls,
> and connects to no government system. Every screenshot is a real screen from the Terranex
> prototype, captured at the current build, and every parcel, owner, amount and event shown is
> synthetic demonstration data.

---

## Stack

Deliberately the same stack as the Terranex prototype, so the dossier reads as the same product.

| Layer | Choice |
|---|---|
| Framework | React 18 + TypeScript + Vite 5 |
| Styling | Tailwind CSS 3 (Terranex palette lifted from the prototype) |
| Icons | Lucide React |
| Routing | None — the whole experience is one narrative document |
| Images | WebP, lazy-loaded, intrinsic dimensions to avoid layout shift |

No state library, no router, no animation runtime. Scroll reveals use `IntersectionObserver`
with a `prefers-reduced-motion` escape hatch.

## Commands

```bash
npm install
npm run dev        # local dev server on :3200
npm run build      # typecheck + production build to dist/
npm run preview    # serve the production build on :4173
npm run typecheck  # tsc --noEmit
npm run lint       # oxlint
```

## Structure

```
src/
  components/
    Navbar.tsx           sticky nav, IntersectionObserver scroll-spy, focus-trapped drawer
    Footer.tsx
    Section.tsx          shared section chrome (eyebrow, heading, deck, tone)
    ScreenshotFrame.tsx  BrowserFrame · PhoneFrame · UIFragment · ProductPanel
    StatusTag.tsx        the PROTOTYPE / PLANNED honesty primitive
    Reveal.tsx           reduced-motion-aware scroll reveal
    Flow.tsx             FlowChain · ConvergeDiagram · FactStrip · DiagramNode
  sections/              17 sections, one per file, in reading order
  data/
    dossier.ts           all copy + content model in one place
public/
  screenshots/           61 WebP captures of the real prototype UI
  architecture/          the working architecture diagram
```

## Design system

Tokens live in `tailwind.config.ts` and mirror the prototype so the site is unmistakably Terranex:
navy `#0F2340`, saffron, Inter + JetBrains Mono, the tricolour rule, and the shield mark.

Two colours were **darkened from the prototype's palette for accessibility**:

- `saffron-600` `#C96A1A` → `#A85A14` — clears 4.5:1 on white for the small-caps eyebrow text.
- `slate-400` `#94A3B8` → `#64748B` — clears 4.5:1 on white.

Verified at 0 contrast failures across ~820 text nodes at 1440px and 390px.
`slate-300` is retained but reserved for decorative rules and empty grid cells, never text.

## The prototype / planned boundary

This is the site's core editorial rule, enforced structurally: `StatusTag` is the only way a
capability is labelled, and the content model requires a status on every claim.

| Label | Meaning |
|---|---|
| `PROTOTYPE` | Running in the frontend prototype today |
| `DEMONSTRATION` | Rendered with synthetic data, not government records |
| `PLANNED` | Designed and scoped, not yet connected |
| `TARGET WORKFLOW` | Intended production behaviour of the screen |

Sections 13, 15 and the architecture layer stack carry the explicit prototype → target split.
No security certification, throughput figure or percentage improvement is claimed anywhere.

## Verified

- Production build, typecheck and lint clean
- 0 horizontal overflow at 1440 / 1024 / 390
- All 62 images load; 60 lazy, 2 eager (hero + first phone)
- No 4xx/5xx responses; no console errors
- All navigation anchors resolve; mobile drawer opens, closes and scrolls
- Keyboard: skip link first, visible focus ring on every focusable, focus trapped in drawer
- `prefers-reduced-motion` honoured — all 76 reveals render immediately, scrolling is instant
- One `h1`, 17 `h2`, no heading-level jumps, every image has `alt`

## Deploy

`vercel.json` sets the build command, output directory and long-lived immutable caching for
image assets. No rewrites are required — the site has no client-side routes.