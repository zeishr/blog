---
name: hugo-build-deploy
description: Use this for Hugo Pipes, asset pipelines, CSS/Sass/PostCSS/Tailwind, JavaScript building, resource fingerprinting, minification, deployment, hosting providers, hugo deploy, rsync/rclone, build troubleshooting, audits, logging, inspection, and performance. Use compact references and fetch exact Hugo docs on demand.
---

# Hugo build, pipes, deploy, and troubleshooting

Use this skill when changing Hugo asset pipelines, deployment configuration, hosting setup, or troubleshooting builds.

## How to work

1. Inspect the build and deploy surface first:
   - `hugo.toml` or `config/`
   - `assets/`, `layouts/partials/`, and templates that call resource functions.
   - `package.json`, PostCSS, Tailwind, Sass, or JS config files.
   - CI files such as `.github/workflows/`, GitLab CI, Netlify, Vercel, Cloudflare, Firebase, Render, or provider-specific configs.
2. Load only the relevant compact reference:
   - `references/reference-strategy.md` explains why full docs are not vendored and how to fetch exact Hugo pages.
   - `references/pipes-patterns.md` covers Hugo Pipes and asset pipeline decisions.
   - `references/deploy-troubleshooting.md` covers deployment choices and diagnostic workflows.
   - `references/source-pages.md` is the canonical Hugo docs URL inventory for Hugo Pipes, host/deploy, troubleshooting, and build-related configuration pages.
3. If exact pipeline options, hosting-provider instructions, deployment syntax, or version-specific troubleshooting details matter, fetch the specific Hugo docs page through the Jina reader URL shown in `references/reference-strategy.md`.
4. Preserve the existing deployment target and CI design unless the user explicitly asks for a migration.
5. Prefer Hugo’s built-in Pipes functions and existing project dependencies. Ask before adding third-party tools.
6. Validate narrowly first, then broadly:
   - Run the specific asset-related command if available.
   - Run `hugo --gc --minify` or the project’s configured production build.
   - Use `hugo --printPathWarnings`, `hugo --printUnusedTemplates`, `hugo --templateMetrics`, or provider-specific preview commands when troubleshooting.

## Key Hugo build reminders

- Hugo Pipes operates on resources from `assets/`, page resources, remote resources, or generated resources.
- Use fingerprinting for cache busting and SRI when publishing static assets.
- `resources.PostProcess` runs after the build and is commonly used for transformations that need final published paths.
- CSS/Sass/PostCSS/Tailwind and JS building may depend on Node packages; check existing package files before changing pipelines.
- Deployment config for `hugo deploy` is separate from host-provider CI configuration.
- Troubleshooting should start by reproducing the build with verbose or diagnostic flags and checking effective configuration.
