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
│   ├── page.tsx          # Home → HeroSection only
│   ├── about/page.tsx    # ProfileSection, StatsCounter, SkillsGrid
│   ├── experience/page.tsx # Timeline + Education
│   └── contact/page.tsx  # ContactInfo + ContactForm (side-by-side on desktop)
├── components/
│   ├── ui/               # shadcn primitives (do not hand-edit)
│   ├── layout/           # Navbar, Footer, MobileNav, NavigationProgress
│   ├── home/             # HeroSection
│   ├── about/            # ProfileSection, SkillsGrid, StatsCounter
│   ├── experience/       # Timeline, TimelineItem
│   ├── contact/          # ContactForm, ContactInfo
│   └── shared/           # PageTransition, ScrollReveal, SectionHeading, SpotlightCard, CookieConsent
├── data/
│   └── cv-data.ts        # Single source of truth for all CV content — edit here first
├── lib/
│   ├── constants.ts      # NAV_LINKS, SITE_CONFIG
│   └── utils.ts          # cn() and other utilities
├── hooks/                # use-counter-animation, use-recaptcha
└── providers/            # ThemeProvider
```

## Design System — MERIDIAN

Editorial precision aesthetic: prestige print publication meets fintech.

### Fonts

| Role    | Family              | CSS var              | Tailwind class   |
|---------|---------------------|----------------------|------------------|
| Display | Cormorant Garamond  | `--font-cormorant`   | `font-display`   |
| Body/UI | Syne                | `--font-syne`        | `font-sans`      |
| Mono    | Fira Code           | `--font-fira`        | `font-mono`      |

### Colors

| Token         | Light           | Dark            |
|---------------|-----------------|-----------------|
| background    | `#F6F1E7` cream | `#0E0B07` warm black |
| foreground    | `#18140C`       | `#F0E9D7`       |
| `--cobalt`    | `#1B4DFF`       | `#6B8FFF`       |

Use cobalt as: `text-(--cobalt)`, `border-(--cobalt)`, `bg-(--cobalt)`

`--green` is aliased to `--cobalt` for backward compatibility — do not use `--green` in new code.

### Key Conventions

- **Radius**: `--radius: 0.25rem` — sharp, editorial corners everywhere
- **Labels**: `font-mono text-[11px] uppercase tracking-widest text-(--cobalt)`
- **Section headings**: Cormorant 42–54px + short cobalt rule `<span class="block h-px w-16 bg-(--cobalt)" />`
- **Active nav**: cobalt hairline underline `h-px bg-(--cobalt)`
- **Timeline**: two-column grid — period/location left, content right; border-top separators; dash bullets `h-px w-4 bg-(--cobalt)/50`
- **Skills**: flowing dot-separated text, not pills or badges

### CSS Utility Classes (defined in globals.css)

- `.spotlight-card` — cobalt glow card effect
- `.dot-grid` — subtle background dot pattern
- `.grain-overlay` — paper texture overlay (applied in layout.tsx)

## Architecture Notes

- **All CV content** lives in `src/data/cv-data.ts`. Years of experience is calculated dynamically from career start date (April 2015).
- **SectionHeading** component accepts `label` (cobalt mono tag above title), `title` (Cormorant heading), and optional `subtitle`.
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
