# Hugo template reference strategy

This skill keeps compact indexes and workflow notes instead of vendoring every Hugo function, method, and template page.

## How to use these references

1. Start with `source-pages.md` for canonical docs URLs.
2. Use `function-index.md` and `method-index.md` to find the right function or method page.
3. Read the compact pattern references in this directory for common template decisions.
4. Fetch the exact docs page on demand when method context, function signatures, lookup order, or escaping behavior matters:

```text
https://r.jina.ai/https://gohugo.io/<section>/<page>/
```

Examples:

```text
https://r.jina.ai/https://gohugo.io/functions/collections/where/
https://r.jina.ai/https://gohugo.io/methods/page/resources/
https://r.jina.ai/https://gohugo.io/templates/lookup-order/
```

5. Prefer freshly fetched Hugo docs over curated notes when they conflict.

## Security note

Do not commit API keys, local `.env` files, or generated fetch caches. Use ignored local environment files only if authenticated fetches are needed.

## Source inventory

`source-pages.md`, `function-index.md`, and `method-index.md` were generated from `https://gohugo.io/sitemap.xml` on 2026-06-09.
