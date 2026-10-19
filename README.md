# Pipeloop

Responsive marketing site for Pipeloop, an AI-powered CRM and sales automation product. It is built from the Figma frame "AI CRM Automation Homepage" (desktop 1440px and mobile 390px).

Stack: Vite, React 19, TypeScript, Tailwind CSS 4.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The production base path comes from `BASE_PATH` and defaults to `/`. The GitHub Pages workflow in `.github/workflows/deploy.yml` sets it to `/<repository-name>/` automatically.

## Deploy to GitHub Pages

1. Push this project to a GitHub repository on the `main` branch.
2. In **Settings → Pages**, set **Source** to **GitHub Actions**.
3. Every push to `main` builds the site and deploys it to `https://<user>.github.io/<repository-name>/`.
