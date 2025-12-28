# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start SvelteKit dev server (blog only)
npm run build     # Build SvelteKit blog to /build
npm run start     # Serve Definity template on port 8006
npm run check     # TypeScript/Svelte type checking
npm run lint      # ESLint + Prettier check
npm run format    # Format src/ with Prettier
```

## Architecture

Production site (https://skillbased.net/) combines Definity template + SvelteKit blog, served via nginx.

### Definity Template (Main Site)
`Definity_MultipurposeOne-MultiPageTemplate/Definity/`

Deployed pages:
- `index.html` - Homepage
- `consultancy.html`, `about_us.html` - New pages
- `consultant.html` → deployed as `home-consultant.html`
- `pages/` - Subpages (AgentModule, CandidateModule, etc.)
- `assets/`, `documents/`, `sso/` - Static resources

Legacy pages (still deployed): `client.html`, `senior-consultant.html`, `partnerships.html`, `business_network.html`, `platform.html`

### SvelteKit Blog
`src/` - Built to `/build`, deployed at `/blog` on production

- `src/routes/blog/` - Blog post pages
- `src/lib/posts.ts` - Post metadata and authors
- `src/lib/images/` - Images (use vite-imagetools: `?webp&h=400`)

### Deployment
Dockerfile: Node 16 builds SvelteKit → nginx serves combined static files
