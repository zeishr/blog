# Hugo configuration reference strategy

This skill keeps compact guidance and URL inventories instead of vendoring full Hugo documentation pages.

## How to use these references

1. Start with `source-pages.md` to find the canonical Hugo docs URL.
2. Read `configuration-patterns.md` or `module-patterns.md` for the decision path and common pitfalls.
3. Fetch exact docs on demand when changing behavior that depends on Hugo version, config precedence, module mounts, security policy, or output formats:

```text
https://r.jina.ai/https://gohugo.io/<section>/<page>/
```

Example:

```text
https://r.jina.ai/https://gohugo.io/configuration/module/
```

4. Prefer freshly fetched Hugo docs over curated notes when they conflict.

## Security note

Never commit API keys, local `.env` files, or generated fetch caches. Use ignored local environment files only.

## Source inventory

`source-pages.md` was generated from `https://gohugo.io/sitemap.xml` on 2026-06-09.
