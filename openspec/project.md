# Project Context

## Purpose
Moinhos Do Dao - Eco Quinta is a farm website built with Nuxt 4. The site showcases farm activities through a blog, provides contact information and location, and enables cottage rental bookings for "Boa Vista".

## Tech Stack
- **Framework:** Nuxt 4.2.2 (Vue 3.5.25)
- **Language:** TypeScript 5.6.3
- **Content:** @nuxt/content 3.9.0 (markdown-based pages)
- **UI:** @nuxt/ui 4.2.1
- **Images:** @nuxt/image 2.0.0
- **Linting:** @nuxt/eslint with ESLint 9.0
- **Package Manager:** Bun (use `bunx` instead of `npx`)

## Project Conventions

### Code Style
- Follow @nuxt/eslint recommended rules
- Use Vue Composition API with `<script setup>` syntax
- Leverage Nuxt auto-imports (no explicit imports for Vue/Nuxt utilities)
- Use scoped CSS in Vue components (`<style scoped>`)

### Architecture Patterns
- **Pages:** File-based routing via `app/pages/`
- **Components:** Reusable components in `app/components/` (auto-imported)
- **Content:** Markdown files in `content/` rendered via Nuxt Content
- **Static Generation:** Site is statically generated (`nuxt generate`)

### Testing Strategy
[To be defined - consider Vitest for unit tests, Playwright for E2E]

### Git Workflow
- Main branch: `main`
- Commit messages: Conventional commits preferred
- Use OpenSpec change proposals for significant features

## Domain Context
- "Moinhos Do Dao - Eco Quinta" - Portuguese eco-farm offering activities and cottage rental
- "Boa Vista" - cottage available for short-term rental with date-based booking
- Content is written in Markdown with embedded Vue components
- Target audience: tourists and visitors interested in eco-farm experiences
- All booking/contact forms use mailto: links (no server-side processing)

## Important Constraints
- **Static hosting only:** No server-side runtime; site must be fully static
- **No database:** All content lives in markdown files (better-sqlite3 dependency can be removed)
- **Performance:** Optimize for fast load times and good Core Web Vitals

## External Dependencies
- Hosted as static files (Vercel, Netlify, Cloudflare Pages, or similar)
- No external APIs currently integrated
