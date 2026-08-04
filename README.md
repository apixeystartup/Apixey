# brainvoice-website

BrainVoice is an AI visibility and brand intelligence platform that helps businesses understand how their brand appears across AI-generated answers and modern search discovery.

## Project Structure

This project contains the custom homepage (`index.html`) and its supporting assets. All other pages (About, Blogs, Careers, Success Stories, Get Started) are hosted on Wix Studio and proxied through Vercel rewrites.

### Key Files

- `index.html` — Main homepage
- `includes/` — Site footer HTML, CSS, and loader script
- `images/` — Logo and dashboard image
- `textures/` — 3D model textures
- `wp-content/themes/startdigital/static/` — Tailwind CSS, GSAP/Three.js scripts, fonts, and 3D models
- `vercel.json` — Vercel config with rewrites proxying to Wix Studio

### Route Mapping

| Route | Destination |
|-------|-------------|
| `/` | Vercel (homepage) |
| `/about` | Wix Studio → `blank` |
| `/blogs` | Wix Studio → `blank-1` |
| `/careers` | Wix Studio → `blank-2` |
| `/success-stories` | Wix Studio → `blank-3` |
| `/get-started` | Wix Studio → `blank-4` |

## Deploy

Static site on [Vercel](https://vercel.com). Connect this repo; no build step required.

### DNS Requirements

Point `brainvoice.ai` (and `www.brainvoice.ai`) to Vercel:

1. In your DNS provider, add a CNAME record:
   - `www` → `cname.vercel-dns.com`
2. For the apex domain (`brainvoice.ai`), add an A record:
   - `@` → `76.76.21.21`
3. In the Vercel dashboard, add the domain and verify DNS propagation.

### How Routing Works

1. **`/`** — Served directly by Vercel from `index.html`.
2. **`/about`, `/blogs`, `/careers`, `/success-stories`, `/get-started`** — Vercel rewrites fetch the corresponding Wix Studio page server-side and return the HTML to the browser. The browser URL remains `brainvoice.ai/...` and never sees the Wix Studio domain.
3. All internal navigation links use relative paths (`/about`, `/blogs`, etc.) so they work both locally and in production.
