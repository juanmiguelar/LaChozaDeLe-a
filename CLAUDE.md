# CLAUDE.md - Project Guide

## Project Overview

La Choza de Leña - A restaurant website for a Costa Rican steakhouse built with Nuxt 3. The site showcases the menu, restaurant info, and ordering options. Content is in Spanish.

## Tech Stack

- **Framework:** Nuxt 3 (v3.12.2) with SSR enabled
- **Language:** TypeScript + Vue 3 (Composition API with `<script setup>`)
- **Styling:** Tailwind CSS with custom theme (primary color `#d97706`)
- **Fonts:** Playfair Display (display), Lato (body)
- **Icons:** Material Icons Round
- **SEO:** @nuxtjs/sitemap, @nuxtjs/robots, schema.org JSON-LD
- **Images:** @nuxt/image module

## Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start dev server on port 3000 |
| `npm run build` | Production build |
| `npm run generate` | Static site generation |
| `npm run preview` | Preview production build |

No test framework is configured.

## Project Structure

```
components/          # Vue SFCs (AppNav, Hero, Menu, InfoBar, VisitUs, StickyCTA)
composables/         # Vue 3 composables (useTheme.ts)
layouts/             # Nuxt layouts (default.vue)
pages/               # File-based routing (index.vue)
app.vue              # Root component
nuxt.config.ts       # Nuxt config (SSR, modules, head, Tailwind theme)
vite.config.ts       # Vite dev server and env config
```

## Coding Conventions

- **Components:** PascalCase SFCs with `<script setup lang="ts">`
- **Composables:** camelCase prefixed with `use` (e.g., `useTheme`)
- **Styling:** Tailwind utility classes inline; dark mode via `dark:` prefix; responsive via `md:` breakpoint
- **Dark mode:** Client-side toggle using localStorage + system preference detection (`useTheme` composable)
- **SEO:** Use `useSeoMeta()` for meta tags and `useHead()` for JSON-LD structured data
- **Icons:** `<span class="material-icons-round">icon_name</span>`

## Environment Variables

- `GEMINI_API_KEY` - Optional Gemini AI API key (set in `.env.local`)

## Key Architecture Notes

- SSR is enabled for SEO; static generation also supported via `npm run generate`
- No backend API or database - content is hardcoded in components
- Mobile-first responsive design with sticky CTA for phone/WhatsApp ordering
- Images served from external CDN URLs (not local assets)
- Site language is Spanish (`lang: 'es'`)
- Prices are in Costa Rican colones (₡)
