# Deployment and troubleshooting patterns

Use this before editing host configuration, deployment scripts, or build diagnostics.

## Deployment decision map

| Need | Check |
| --- | --- |
| Provider-managed builds | Provider docs page under `host-and-deploy/host-on-*` plus CI config |
| Object storage deploys | `configuration/deployment` and `hugo deploy` |
| Manual sync | rsync or rclone docs pages |
| GitHub/GitLab pages | Workflow or CI file, base URL, publish directory, branch/source settings |
| Netlify/Vercel/Cloudflare/Render/Firebase | Provider config file and environment variables |

## Build troubleshooting checklist

1. Reproduce locally with the same Hugo version and environment where possible.
2. Check `hugo env` and the build command used by CI or the host.
3. Inspect effective config with `hugo config`.
4. For module issues, run `hugo config mounts`, `hugo mod graph`, and `hugo mod verify`.
5. For template issues, run `hugo --templateMetrics --templateMetricsHints` or `hugo --printUnusedTemplates`.
6. For URL/path issues, run `hugo --printPathWarnings`.
7. For deprecations, fetch the deprecation troubleshooting page and update the root cause.

## Guardrails

- Do not change hosting provider, deployment target, or publish directory architecture unless requested.
- Keep secrets in provider settings or ignored local env files, never in repository files.
- Prefer provider-supported Hugo version pinning over relying on defaults.
- Be explicit about `baseURL`, environment, and publish directory differences between preview and production.
- If a fix only works locally, inspect CI environment variables and installed extended/non-extended Hugo version.

## Validation

- Run the local production build.
- Run provider preview commands only when available and non-interactive.
- For deployment config changes, dry-run if the tool supports it.
