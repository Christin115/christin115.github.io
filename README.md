# christin115.github.io

Personal portfolio site for Christin Jordan — Full-Stack Software Engineer.

Live at [christin115.github.io](https://christin115.github.io).

## Stack

- React + Vite
- Plain CSS (no framework) — a "code editor" inspired design system: IBM Plex Sans for body/headings, JetBrains Mono for code-flavored accents

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages automatically. In the repo's Settings → Pages, the source must be set to **GitHub Actions** (one-time setup).
