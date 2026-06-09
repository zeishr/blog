# Hugo content authoring patterns

Use this as a compact checklist before editing Hugo content, archetypes, or content-related templates. Fetch the exact Hugo docs page from `source-pages.md` when details matter.

## Decision map

| Need | Prefer | Check docs topic |
| --- | --- | --- |
| Generate consistent new content | Archetypes | `content-management/archetypes` |
| Store page metadata | Front matter | `content-management/front-matter` |
| Attach page-scoped files | Page bundles and page resources | `content-management/page-bundles`, `page-resources` |
| Classify content | Taxonomies | `content-management/taxonomies`, `configuration/taxonomies` |
| Author reusable content snippets | Shortcodes | `content-management/shortcodes`, `templates/shortcode` |
| Change Markdown HTML globally | Render hooks | `render-hooks/*` |
| Control published paths | URL management, permalinks, aliases | `content-management/urls`, `configuration/permalinks` |
| Localize content | Multilingual content and language config | `content-management/multilingual`, `configuration/languages` |
| Control page build behavior | Build options | `content-management/build-options` |

## Front matter guardrails

- Preserve the project’s existing front matter format unless conversion is explicitly requested.
- Use reserved fields such as `title`, `date`, `draft`, `layout`, `type`, `url`, `slug`, `aliases`, `outputs`, `weight`, `summary`, `description`, and `cascade` only for Hugo-defined behavior.
- Put custom values under `params` to avoid collisions with Hugo page fields.
- Remember that `draft`, `publishDate`, and `expiryDate` interact with build flags such as `--buildDrafts`, `--buildFuture`, and `--buildExpired`.
- For dates, prefer explicit RFC3339 timestamps or the date style already used by the project.

## Organization and bundles

- `_index.md` creates a branch bundle or section page.
- `index.md` creates a leaf bundle for page-scoped resources.
- Co-locate page-specific images, data files, and downloads inside a leaf bundle when templates need `.Resources`.
- Use front matter `resources` metadata to assign resource names, titles, or custom params when filename conventions are not enough.
- Avoid moving content solely for template convenience; content paths affect section, type, URLs, and lookup behavior.

## Links, summaries, and URLs

- Prefer `ref` and `relref` for internal content links when Hugo should validate the target.
- Use front matter `aliases` for redirects from old paths.
- Use `slug` for the last URL segment and `url` only when you need to override the whole path.
- Use manual summary separators only when automatic summaries are insufficient.

## Validation

- Run the project’s normal Hugo build after content structure changes.
- Use `hugo --printPathWarnings` when changing URLs, aliases, permalinks, or section paths.
- Inspect generated pages when changing bundles, render hooks, or shortcode behavior.
