# Plinth UI — rules for agents

You are applying the Plinth design system to a codebase. This file is the contract. `src/index.css` and `src/components/ui/*` are the implementation; when this file and the code disagree, the code wins — update this file.

## 1. Non-negotiables

- **Square.** `--radius: 2px`. Every `rounded-*` token resolves to 2px. Never write `rounded-md`, `rounded-lg`, `rounded-full` on new UI except avatars, dots and spinners. Inputs are the one exception at `rounded-[4px]`.
- **No shadows.** No `shadow-*`, no `ring-foreground/10` halos. Elevation is a 1px `border` and a slightly lighter `bg-popover`.
- **One accent.** `cobalt` is the only action hue. Do not introduce blues, greens, purples. Status uses `ember` (destructive/warning) and `muted-foreground` (neutral). Never use `text-white` on cobalt — use `text-cobalt-foreground` (mono theme flips it).
- **Dark first.** Design and check in dark; light must also work. Both are driven by tokens, so never hardcode a hex in a component.
- **Hairlines, not cards.** Group content with `border-t`/`divide-y` rows and `Spec`/`Row`-style grids. Reach for `<Card>` only when something is genuinely a discrete object (an agent, a file).
- **No AI-slop chrome.** No all-caps tracked eyebrows, no `A · B · C` meta strings, no `→` glued to link text, no gradient washes, no identical rounded cards in a grid, no fade-up-on-scroll sections. Motion is 160ms and only in response to a user action.
- **Font.** Instrument Sans for everything (`font-sans`). Silkscreen (`font-pixel`) only for marquee/pixel ornament, never for UI text. No monospace for data labels — use `tabular-nums`.

## 2. Tokens you may use

Colors (Tailwind utilities, all theme-aware):

```
bg-background  bg-surface  bg-card  bg-popover  bg-muted  bg-secondary
text-foreground  text-muted-foreground  text-popover-foreground
border-border  border-input  ring-ring
bg-cobalt  text-cobalt  text-cobalt-foreground      ← the action hue
bg-ember   text-ember   bg-destructive  text-destructive
bg-primary text-primary-foreground                    ← pale-grey default button fill
chart-1 … chart-5
```

`surface` is for inputs, sidebars and the chat column — one step lighter than `background`. `popover` is one more step lighter and is used by every floating layer.

Accent themes: set `data-accent="ember" | "moss" | "violet" | "mono"` on `<html>` (omit for cobalt). Only `--cobalt`, `--ring`, `--chart-*` and `--cobalt-foreground` change. If you add a theme, add both the light block and the `.dark[data-accent=…]` block in `src/index.css`.

## 3. Components

Import from `@/components/ui/<name>`. All 62 shadcn registry items are present and already restyled; **do not re-run `shadcn add` over an existing file** — it will overwrite the house styling. Add a new registry item with `npx shadcn add <name>`, then restyle it (see §4).

Button — the most-used piece, get it right:

| variant | use |
|---|---|
| `default` | the main action in a view. Pale-grey fill, dark text. One per view. |
| `accent` | cobalt fill. Only for the single "go" action in a flow (Send, Run, Deploy). |
| `outline` | secondary actions. `border-foreground/40`, transparent. |
| `ghost` | toolbar / icon actions. |
| `secondary` | low-emphasis filled. Rare. |
| `destructive` | tinted ember text, no solid fill. |
| `link` | inline text actions only. |

Sizes: `xs` (28) `sm` (32) `default` (40) `lg` (48) `xl` (56), and `icon-xs` / `icon-sm` / `icon` / `icon-lg`. Buttons are full-width only in dialog footers on mobile.

Inputs: `Input`, `Textarea`, `Select` all sit on `bg-surface` with `border-input`, 40px tall (`size="sm"` → 32px). For a chat composer, copy the pattern in `App.tsx` (`Textarea` with `rounded-none border-0 bg-transparent`, send button absolute top-right, 32px toolbar underneath).

Overlays: `Dialog`/`AlertDialog` have a roomy header (`p-6`) and a thin `bg-muted/50` footer. `Popover` is `p-3`. `Sheet` has a `border-l` and no shadow. `Drawer` (vaul) for mobile only.

Feedback: use `toast` from `@/components/ui/toast` (`toast.success / error / loading / promise / dismiss`). Render `<Toaster />` once at the root. Do not install sonner.

Chat: `Message`, `MessageAvatar`, `Bubble`, `Marker`, `MessageScroller` (wrap in `MessageScrollerProvider`), `Trace`, `CodeBlock`, `Attachment`, `Questionnaire` — see `Catalog.tsx` for the composed examples.

Layout helpers: `Spec({id,title,note})` and `Row({label})` from `src/spec.tsx` give the label | demo two-column sheet. Use them for docs/settings pages too — they are the house layout.

## 4. Restyling a fresh shadcn component

When you pull a new registry item, make these edits before using it:

1. `rounded-md|lg|xl` → delete (the tokens already resolve to 2px) or `rounded-none`.
2. `shadow-*` → delete.
3. `ring-1 ring-foreground/10` → `border`.
4. Floating content: `bg-popover` + `border`, `p-3` for popovers, `p-6` for dialogs.
5. Any `bg-primary` meant as the "brand" color → decide: `bg-primary` (grey, default) or `bg-cobalt` (accent).
6. Check `.animate-in/.animate-out` is used for motion; durations are globally 160ms.
7. Check dark **and** light, and the `mono` accent (it inverts cobalt).

## 5. Checking your work

```bash
npx tsc -p tsconfig.app.json --noEmit
npm run dev   # open, toggle Light/Dark and the accent swatches bottom-right
```

Every new component gets a row in `Catalog.tsx` under the matching `Spec` section. If it isn't demoed, it isn't done.

## 6. Writing

Sentence case. Verbs on buttons say what happens ("Save changes", not "Submit"). Same word through the whole flow: a "Publish" button produces a "Published" toast. Empty states say what to do next; errors say what went wrong and how to fix it, never "something went wrong".
