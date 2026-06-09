# Hugo build and deploy reference strategy

This skill keeps compact build/deploy notes and URL inventories instead of vendoring full Hugo documentation pages.

## How to use these references

1. Start with `source-pages.md` for canonical Hugo docs URLs.
2. Read `pipes-patterns.md` or `deploy-troubleshooting.md` for workflow guidance.
3. Fetch exact docs on demand when changing pipeline options, hosting provider configuration, deployment commands, or diagnostic flags:

```text
https://r.jina.ai/https://gohugo.io/<section>/<page>/
```

Examples:

```text
https://r.jina.ai/https://gohugo.io/hugo-pipes/js/
https://r.jina.ai/https://gohugo.io/host-and-deploy/host-on-github-pages/
https://r.jina.ai/https://gohugo.io/troubleshooting/performance/
```

4. Prefer freshly fetched Hugo docs over curated notes when they conflict.

## Security note

Never commit API keys, local `.env` files, generated fetch caches, deployment credentials, or provider tokens.

## Source inventory

`source-pages.md` was generated from `https://gohugo.io/sitemap.xml` on 2026-06-09.
