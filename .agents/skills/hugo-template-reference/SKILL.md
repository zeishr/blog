---
name: hugo-template-reference
description: Use this for Hugo templates, Go template syntax, partials, base templates, lookup order, template types, functions, methods, page collections, resources, shortcodes, render hooks, and template debugging. Use compact indexes and fetch exact Hugo docs on demand.
---

# Hugo template reference

Use this skill when writing or debugging Hugo templates, partials, shortcode templates, render hooks, or template logic.

## How to work

1. Inspect the template and data context before editing:
   - `layouts/`, `layouts/_default/`, `layouts/partials/`, `layouts/shortcodes/`, `layouts/_markup/`
   - `assets/`, `data/`, `content/`, `hugo.toml`, and module mounts when relevant.
2. Load only the relevant compact reference:
   - `references/reference-strategy.md` explains why full docs are not vendored and how to fetch exact Hugo pages.
   - `references/template-patterns.md` covers context, lookup order, partials, blocks, collections, safety, and validation.
   - `references/function-method-patterns.md` maps common needs to Hugo function families and method groups.
   - `references/render-hooks-shortcodes.md` covers specialized shortcode and render hook template contexts.
   - `references/function-index.md` is the generated index of Hugo function pages.
   - `references/method-index.md` is the generated index of Hugo method pages.
   - `references/source-pages.md` is the canonical Hugo docs URL inventory for templates, functions, methods, render hooks, shortcodes, and quick references.
3. If exact arguments, return values, hook fields, method availability, lookup order, or version-specific details matter, fetch the specific Hugo docs page through the Jina reader URL shown in `references/reference-strategy.md`.
4. Confirm the current dot (`.`) context before using methods. In ranges, partials, render hooks, and shortcodes, the context may not be the same as the outer page.
5. Prefer small partials and clear data dictionaries over deeply nested template logic.
6. Validate with `hugo --templateMetrics --templateMetricsHints` when performance or lookup behavior matters, and with a normal build for correctness.

## Key Hugo template reminders

- Hugo templates use Go’s `html/template` syntax plus Hugo functions and methods.
- Template lookup order depends on page kind, section, type, layout, output format, and language.
- Use `.Site`, `.Page`, `.Pages`, `.Resources`, `.Params`, and `.Store` only when they are valid for the current context.
- Use `partial` and `partialCached` intentionally; include all cache-variant inputs when using `partialCached`.
- Use `with` for optional values, `default` for fallback values, and `where`, `sort`, `first`, `last`, `groupBy`, and related page collection methods for list logic.
- Escape and safety functions are context-sensitive. Use `safeHTML`, `safeURL`, `safeCSS`, and similar functions only when the value is trusted or sanitized.
- Use `warnf`, `errorf`, `warnidf`, `erroridf`, and `debug.Dump` for actionable template diagnostics.
