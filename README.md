# Plinth UI

A design system for agent products. Dark-first, square corners, one accent hue, hairline borders, no shadows. Built on [shadcn/ui](https://ui.shadcn.com) (radix-nova style) + Tailwind v4 + React 19.

The repo is both the kit and its spec sheet: run it and every component is demoed in context.

```bash
npm install
npm run dev        # http://localhost:5173
npm run build
```

## What's in here

| Path | What |
|---|---|
| `src/index.css` | All tokens (colors, radius, fonts, accent themes). The source of truth. |
| `src/components/ui/*` | 62 components. shadcn registry items restyled to the system, plus `toast.tsx` (react-hot-toast wrapper). |
| `src/App.tsx` | Foundations + core components spec sheet, hero mockup. |
| `src/Catalog.tsx` | Every remaining component demoed. |
| `src/spec.tsx` | `Spec` / `Row` layout primitives for the spec sheet pages. |
| `AGENTS.md` | Rules for applying the system in another codebase. Read this if you are an AI agent. |

## Using it in another project

1. Install deps (see `package.json` — the important ones: `tailwindcss@4`, `@tailwindcss/vite`, `shadcn@4`, `@shadcn/react`, `radix-ui`, `@base-ui/react`, `cn`, `class-variance-authority`, `lucide-react`, `tw-animate-css`, `react-hot-toast`).
2. Copy `src/index.css` into your project and import it once.
3. Copy `src/components/ui` (and `src/lib`, `src/hooks`) into `src/`.
4. Add the `@` alias (`vite.config.ts` + `tsconfig` `paths`) and the Google Fonts link from `index.html`.
5. Put `class="dark"` on `<html>`. Optionally `data-accent="ember|moss|violet|mono"`.
6. Wrap the app in `<TooltipProvider>` and render `<Toaster />` once.

Then follow `AGENTS.md`.

## Tokens at a glance

|  | Dark (default) | Light |
|---|---|---|
| background | `#1F201E` | `#EEEEE9` |
| surface / card / sidebar | `#282927` | `#F8F8F5` |
| popover | `#2D2E2C` | `#F8F8F5` |
| foreground | `#D7D9D3` | `#1B1C1A` |
| border | `#383936` | `#D3D4CE` |
| input (border) | `#454644` | `#C9CAC4` |
| primary (button fill) | `#C9CDD1` on `#202020` | `#1B1C1A` on `#F8F8F5` |
| cobalt (accent) | `#4B65EC` | `#3451E6` |
| ember / destructive | `#EF6A3A` | `#DE5325` / `#C6471C` |

Radius: `2px` everywhere (`--radius`). Type: Instrument Sans for everything; Silkscreen only for the marquee.

## Credits

Visual direction inspired by [letta.com](https://www.letta.com) and Amplify UI. Components from shadcn/ui.
