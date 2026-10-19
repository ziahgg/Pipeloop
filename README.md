# Pipeloop

**Live site: [https://ziahgg.github.io/Pipeloop/](https://ziahgg.github.io/Pipeloop/)**

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

The production base path comes from `BASE_PATH` and defaults to `/`. The GitHub Pages workflow in `.github/workflows/deploy.yml` sets it to `/<repository-name>/` automatically, which is `/Pipeloop/` for this repository.

## Deploy to GitHub Pages

The site is published at **[https://ziahgg.github.io/Pipeloop/](https://ziahgg.github.io/Pipeloop/)** from the `ziahgg/Pipeloop` repository.

1. Push this project to `ziahgg/Pipeloop` on the `main` branch. The repository name is case-sensitive and must be exactly `Pipeloop`.
2. In **Settings → Pages**, set **Source** to **GitHub Actions**.
3. Every push to `main` builds the site and deploys it to https://ziahgg.github.io/Pipeloop/.
