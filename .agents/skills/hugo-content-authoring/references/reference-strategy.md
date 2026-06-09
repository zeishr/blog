# Hugo content reference strategy

This skill intentionally avoids vendoring the full Hugo documentation. Large generated markdown dumps make the repository noisy, go stale quickly, and are hard for an agent to read selectively.

## How to use these references

1. Start with `source-pages.md` to find the canonical Hugo documentation URL for the topic.
2. Read the compact curated references in this directory for workflow guidance and common pitfalls.
3. When exact syntax, template context, or version-specific behavior matters, fetch the canonical page on demand through Jina Reader:

```text
https://r.jina.ai/https://gohugo.io/<section>/<page>/
```

Example:

```text
https://r.jina.ai/https://gohugo.io/content-management/front-matter/
```

4. Prefer the freshly fetched canonical page over the curated notes if they conflict.

## Security note

Never commit API keys or fetched caches. If authenticated Jina access is needed, use a local environment variable or `.env` file that is ignored by git.

## Source inventory

`source-pages.md` was generated from `https://gohugo.io/sitemap.xml` on 2026-06-09. Refresh it when the Hugo docs change significantly or when adding references for new topics.
