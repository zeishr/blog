# Hugo configuration patterns

Use this before editing Hugo configuration. Fetch exact docs from `source-pages.md` when changing a setting with subtle precedence or version behavior.

## Configuration layout checklist

Inspect these before editing:

- Root config: `hugo.toml`, `hugo.yaml`, or `hugo.json`.
- Split config: `config/_default/`, `config/<environment>/`, and language-specific files.
- Theme and module config contributions.
- CLI flags, environment variables, and CI-specific overrides.

Use `hugo config` to inspect effective configuration when behavior is unclear.

## Decision map

| Need | Config area |
| --- | --- |
| Custom site values | `params` |
| Repeated page front matter | `cascade` or section front matter |
| Language and locale behavior | `languages`, language-specific params and menus |
| Markdown rendering | `markup` |
| Central menu definitions | `menus` |
| Custom media or output files | `mediaTypes`, `outputFormats`, `outputs` |
| URL shape | `permalinks`, `uglyURLs`, front matter `url`/`slug` |
| Taxonomy names | `taxonomies` |
| Embedded service behavior | `services`, `privacy` |
| Build behavior | `build`, `minify`, `imaging`, `caches`, `related`, `segments` |
| External access and helpers | `security` |
| Development server behavior | `server` |

## Guardrails

- Keep the project’s existing config format and layout unless a migration is requested.
- Add custom settings under `params`; do not invent top-level keys.
- Check language-specific overrides before changing shared defaults in multilingual projects.
- Treat `security` settings as an allowlist. Do not broaden them unless the task requires it.
- Markup settings can affect render hooks and existing content. Inspect `layouts/_markup/` before changing Goldmark options.
- Output format changes can affect templates, generated URLs, RSS, sitemap, robots, and deployment rules.

## Validation

- `hugo config` for effective configuration.
- `hugo config mounts` when modules or mounts are involved.
- `hugo --printPathWarnings` when changing URLs or permalinks.
- A normal production build after config changes.
