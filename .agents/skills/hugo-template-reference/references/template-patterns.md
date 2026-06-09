# Hugo template patterns

Use this before writing or refactoring Hugo templates. Fetch the exact docs page when lookup order, context, or function signature details matter.

## Context first

Before editing, identify the current dot (`.`):

- Page template: usually a `Page`.
- List template: a section, taxonomy, term, or home page with page collections.
- Partial: whatever caller passes.
- Shortcode template: shortcode context, not direct page context.
- Render hook: hook-specific context.
- Base template block: context passed by the invoking template.

Most Hugo template bugs come from assuming `.`, `.Page`, `.Site`, `.Pages`, or `.Resources` has the same meaning everywhere.

## Template lookup checklist

Check these before creating new template files:

- Page kind: home, page, section, taxonomy, term, 404, sitemap, robots, RSS, etc.
- Section and type.
- Front matter `layout`.
- Output format and media type.
- Language and module/theme override order.

Use a more specific template only when necessary. Prefer reusable partials for shared markup.

## Partial and block patterns

- Pass small dictionaries to partials when they need more than one input.
- Use `partialCached` only when all cache-varying inputs are included in the cache key.
- Keep base templates responsible for page chrome and blocks responsible for page-specific regions.
- Avoid large nested conditionals in templates; extract partials or data-driven maps.

## Page collection patterns

Common operations:

- Filter with `where`.
- Order with `sort`, `ByWeight`, `ByDate`, `ByTitle`, or related methods.
- Limit with `first`, `last`, or collection `Limit` methods.
- Group with `GroupBy`, `GroupByDate`, or taxonomy structures.
- Paginate only once per page and keep pagination state near the list template.

## Safety and escaping

Hugo uses Go `html/template`, so output is context-aware. Use `safeHTML`, `safeURL`, `safeCSS`, `safeJS`, and related functions only for trusted or sanitized values.

## Validation

- Run a normal Hugo build.
- Use `hugo --templateMetrics --templateMetricsHints` for performance and partial-cache concerns.
- Use `hugo --printUnusedTemplates` after template lookup changes.
