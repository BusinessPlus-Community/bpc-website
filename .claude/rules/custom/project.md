# Project: BPC Website

**Last Updated:** 2026-02-01

## Overview

Official website for the BusinessPlus Community at bpluscommunity.org. Static Next.js site for an independent, volunteer-driven group of K-12 technology professionals (NOT affiliated with PowerSchool).

## Technology Stack

- **Runtime:** Bun
- **Framework:** Next.js 15 (App Router, static export)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4
- **Components:** shadcn/ui (Radix UI primitives)
- **Icons:** Lucide React
- **Dark Mode:** next-themes
- **Linting:** ESLint, Prettier

## Directory Structure (Planned)

```
src/
├── app/              # Next.js App Router pages
├── components/       # React components
│   ├── layout/       # Header, Footer, Nav
│   └── ui/           # shadcn/ui components
└── lib/              # Utilities (cn helper)
public/               # Static assets
context/powerschool/  # Design reference files
```

## Development Commands

```bash
bun install           # Install dependencies
bun run dev           # Start dev server
bun run build         # Build static export to out/
bun run lint          # Run ESLint
bunx shadcn@latest add <component>  # Add shadcn component
```

## Key Requirements

- **Static Export:** `output: 'export'` in next.config.ts
- **Accessibility:** WCAG 2.2 AA compliance required
- **Deployment:** Self-hosted on Proxmox containers behind HAProxy

## Design Direction

- PowerSchool-inspired but independent branding
- Teal/blue color palette
- Professional, clean, accessible
- Light/dark mode with system preference detection

---

## shadcn/ui Usage

**Adding components:**
```bash
bunx shadcn@latest add button
bunx shadcn@latest add card
bunx shadcn@latest add accordion
```

**Component location:** `src/components/ui/`

**Styling customization:** Modify CSS variables in `globals.css`:
```css
@theme {
  --color-primary: oklch(...);
  --color-secondary: oklch(...);
}
```

**Do not modify shadcn components directly** - use wrapper components or CSS variables.

## Next.js App Router Conventions

**Page files:**
- `page.tsx` - Route component
- `layout.tsx` - Shared layout
- `loading.tsx` - Loading UI
- `error.tsx` - Error boundary
- `not-found.tsx` - 404 page

**Metadata:** Use Next.js Metadata API:
```tsx
export const metadata: Metadata = {
  title: 'Page Title',
  description: 'Page description',
}
```

**Static generation:** All pages are statically generated. No `use client` at page level unless absolutely necessary.

## Static Export Constraints

**Not available in static export:**
- API routes (`app/api/`)
- Dynamic server functions
- `headers()`, `cookies()` at request time
- Image optimization (use `unoptimized: true`)
- Middleware (limited)

**Use instead:**
- Client-side data fetching if needed
- Static JSON files in `public/`
- Email links instead of contact forms

## Dark Mode (next-themes)

**Provider setup in layout.tsx:**
```tsx
<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
  {children}
</ThemeProvider>
```

**Tailwind v4 dark mode:**
```css
@variant dark (&:is(.dark, .dark *));
```

**Toggle component:** Use shadcn's dropdown with sun/moon icons.

## Lucide React Icons

**Import pattern:**
```tsx
import { Menu, X, Sun, Moon } from 'lucide-react'
```

**Usage:**
```tsx
<Menu className="h-6 w-6" />
<Sun className="h-5 w-5" aria-hidden="true" />
```

**Always include `aria-hidden="true"` for decorative icons** or provide accessible labels.

## WCAG 2.2 AA Checklist

| Requirement | Implementation |
|-------------|----------------|
| Color contrast 4.5:1 | Use oklch colors, test with DevTools |
| Keyboard navigation | Native elements, focus-visible |
| Skip link | First focusable element |
| Focus indicators | Tailwind focus-visible classes |
| Alt text | All images need alt |
| Heading hierarchy | One h1, logical h2-h6 |
| Reduced motion | `motion-safe:` variant |
