---
name: hugo-content-authoring
description: Use this for Hugo content management, front matter, archetypes, page bundles, page resources, taxonomies, menus, multilingual content, render hooks, shortcodes, markdown attributes, summaries, diagrams, math, URL management, and content authoring workflows. Use compact references and fetch exact Hugo docs on demand.
---

# Hugo content authoring

Use this skill when working on Hugo content structure, content files, front matter, shortcodes, render hooks, or authoring conventions.

## How to work

1. Inspect the project before editing:
   - `hugo.toml` or files under `config/`
   - `content/`, `archetypes/`, `layouts/_markup/`, `layouts/shortcodes/`, `assets/`, and `static/`
2. Load only the relevant compact reference:
   - `references/reference-strategy.md` explains why full docs are not vendored and how to fetch exact Hugo pages.
   - `references/content-patterns.md` covers front matter, archetypes, bundles, resources, taxonomies, URLs, and validation.
   - `references/shortcodes-render-hooks.md` covers shortcode and Markdown render hook authoring.
   - `references/source-pages.md` is the canonical Hugo docs URL inventory for content, shortcodes, render hooks, and quick references.
3. If exact syntax, context fields, or version-specific details matter, fetch the specific Hugo docs page through the Jina reader URL shown in `references/reference-strategy.md`.
4. Prefer Hugo-native constructs over custom processing:
   - Use front matter for page metadata and `params` for custom fields.
   - Use page bundles and page resources for page-scoped assets.
   - Use render hooks when Markdown rendering needs site-wide behavior.
   - Use shortcodes when authors need reusable inline or block content controls.
5. Keep content changes compatible with the site’s current front matter format and section organization.
6. Validate with a targeted Hugo build when possible, for example `hugo --gc --minify` or the project’s configured build command.

## Key Hugo authoring reminders

- Hugo infers content type from the top-level directory unless front matter `type` overrides it.
- Branch bundles use `_index.md`; leaf bundles use `index.md`.
- Put custom page metadata under `params` to avoid collisions with reserved front matter fields.
- Use `ref`/`relref` for internal links when possible so Hugo can validate and resolve targets.
- Use render hooks under `layouts/_markup/` to customize Markdown output such as links, images, headings, tables, blockquotes, code blocks, and passthrough blocks.
- Use shortcode templates under `layouts/shortcodes/`; shortcode context differs from page context, so use `.Page`, `.Site`, `.Params`, `.Get`, `.Inner`, and related shortcode methods intentionally.
