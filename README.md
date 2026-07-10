# Portfolio 26 — Gabrielle Touré

## 1. Run it locally (your machine only)

You need Node.js installed (nodejs.org, LTS version).

```bash
npm install     # once, installs React, Bootstrap, etc.
npm run dev     # starts the site at http://localhost:5173
```

That's it — the site runs only on your computer. Save a file, the browser updates instantly.

## 2. Put it on STAGING (online but private, not indexed)

Easiest way — Vercel (free):

1. Push this folder to a GitHub repo (can be private).
2. Go to vercel.com → sign in with GitHub → "Add New Project" → import your repo.
3. Vercel detects Vite automatically → click Deploy.
4. You get a URL like `portfolio-26-xxx.vercel.app` — that's your staging.

Staging protection already included: `index.html` has
`<meta name="robots" content="noindex, nofollow" />` so Google won't index it.
For real privacy, in Vercel: Settings → Deployment Protection → password.

Every git push = automatic new deploy. Preview links per branch too.

## 3. Going LIVE later

- Remove the `noindex` meta tag from index.html
- Add your domain in Vercel → Settings → Domains

## To do before launch

- [ ] Replace /public/assets/logo.svg with your GT logo export
- [ ] Add cv PDF at /public/assets/cv-gabrielle-toure.pdf
- [ ] Benton Sans font files (or licensed webfont) — currently falls back to Inter
- [ ] Build each page from its Figma frame (stubs in place)
- [ ] Alt text on all case study images
- [ ] Remove noindex when going live
