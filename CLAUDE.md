# Alex Panteli — Portfolio Site

Personal portfolio for Alex Panteli, Senior Frontend Developer. Live at [alexpanteli.com](https://alexpanteli.com).

## Tech Stack

- **Framework**: Next.js 16 (App Router), React 19, TypeScript 6
- **Styling**: Tailwind CSS v4, shadcn/ui (new-york style), tw-animate-css
- **Animation**: Motion (`motion/react` — import from `motion/react`, not `framer-motion`)
- **Theming**: next-themes (light/dark)
- **Contact form**: Formspree + reCAPTCHA v2
- **Analytics**: Vercel Analytics + Speed Insights
- **Deployment**: Vercel

## Commands

```bash
npm run dev      # dev server (localhost:3000)
npm run build    # production build
npm run lint     # ESLint
```

## Environment Variables

```
NEXT_PUBLIC_FORMSPREE_URL=
NEXT_PUBLIC_FORMSPREE_RECAPTCHA_SITE_KEY=
```

Copy `.env.example` to `.env.local` and fill in values.

## Project Structure

```
src/
├── app/                  # App Router pages & layouts
│   ├── layout.tsx        # Root layout — fonts, metadata, theme, analytics
│   ├── globals.css       # Design tokens, Tailwind theme, utility classes
│   ├── page.tsx          # Home → HeroSection + SelectedWork
│   ├── about/page.tsx    # ProfileSection + SkillsGrid
│   ├── experience/page.tsx # Timeline + Education
│   └── contact/page.tsx  # ContactInfo + ContactForm (side-by-side on desktop)
├── components/
│   ├── ui/               # shadcn primitives (do not hand-edit)
│   ├── layout/           # Navbar, Footer, MobileNav, NavigationProgress
│   ├── home/             # HeroSection, SelectedWork
│   ├── about/            # ProfileSection, SkillsGrid
│   ├── experience/       # Timeline, TimelineItem
│   ├── contact/          # ContactForm, ContactInfo
│   └── shared/           # PageTransition, ScrollReveal, SectionHeading, SpotlightCard, CookieConsent
├── data/
│   └── cv-data.ts        # Single source of truth for all CV content — edit here first
├── lib/
│   ├── constants.ts      # NAV_LINKS, SITE_CONFIG
│   └── utils.ts          # cn() and other utilities
├── hooks/                # use-recaptcha
└── providers/            # ThemeProvider
```

## Design System — Cold Steel

Developer-tooling aesthetic: cool blue-gray palette with cyan phosphor accent, monospace-forward typography. Oscilloscope meets editorial IDE.

### Fonts

| Role    | Family          | CSS var        | Tailwind class   |
|---------|-----------------|----------------|------------------|
| Display | Fira Code       | `--font-fira`  | `font-display`   |
| Body/UI | IBM Plex Sans   | `--font-ibm`   | `font-sans`      |
| Mono    | Fira Code       | `--font-fira`  | `font-mono`      |

### Colors

| Token         | Light     | Dark      |
|---------------|-----------|-----------|
| background    | `#EFF2F6` | `#0A0C10` |
| foreground    | `#0C1018` | `#B8C8D8` |
| heading       | `#080B12` | `#D8E4F0` |
| `--phosphor`  | `#0077B6` | `#38BDF8` |

Use phosphor as: `text-(--phosphor)`, `border-(--phosphor)`, `bg-(--phosphor)`.

`--cobalt` and `--green` are aliased to `--phosphor` for backward compatibility — use `--phosphor` in new code.

### Key Conventions

- **Radius**: `--radius: 0.25rem` — detectably rounded but editorial-sharp
- **Labels**: `font-mono text-[11px] uppercase tracking-widest text-(--phosphor)`
- **Section headings**: Fira Code, `//` prefix in phosphor + short phosphor rule `<span class="block h-px w-16 bg-(--phosphor)/40" />`
- **Active nav**: phosphor color + hairline underline `h-px bg-(--phosphor)/60`
- **Timeline**: two-column grid (`md:grid-cols-[180px_1fr] lg:grid-cols-[220px_1fr]`) — period/location left, content right; `[NN]` zero-padded index in phosphor/60; per-role `stack[]` rendered as bordered mono tags; dash bullets `h-px w-3 bg-(--phosphor)/40`
- **Skills**: 2-col stacked list per category (one skill per line), not dot-prose or pills
- **Focus rings**: `focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--phosphor)` on every interactive element
- **Minimum text size**: 11px for micro-labels; 12–13px for content labels. No 9–10px text.

### CSS Utility Classes (defined in globals.css)

- `.spotlight-card` — phosphor glow card effect
- `.grid-overlay` — graph-paper background (applied in layout.tsx)
- `.blink` — terminal cursor blink (respects `prefers-reduced-motion`)

## Architecture Notes

- **All CV content** lives in `src/data/cv-data.ts`. Years of experience is calculated dynamically from career start date (April 2015).
- **SectionHeading** component accepts `label` (phosphor mono tag above title), `title` (Fira Code heading with `//` prefix), and optional `subtitle`.
- **View Transitions** enabled via `experimental.viewTransition` in next.config.ts. NavigationProgress is Suspense-wrapped in layout.
- **Security headers** configured in next.config.ts: CSP allows Google reCAPTCHA, Vercel scripts, Formspree, Google Fonts.
- **Path alias**: `@/` → `src/`
- **Tailwind v4** — no tailwind.config.js; all theme configuration is in `globals.css` via `@theme inline {}` and CSS variables.

## shadcn Components

Config in `components.json`. To add a new component:

```bash
npx shadcn add <component>
```

Do not manually edit files in `src/components/ui/` — regenerate them via the CLI instead.
