# Function and method patterns

Use `function-index.md` and `method-index.md` for lookup. Fetch exact function or method docs before relying on argument order, return type, or context-specific fields.

## Function family map

| Need | Function family |
| --- | --- |
| Filter, sort, merge, group, slice, query maps | `collections` |
| Compare values and provide fallbacks | `compare` |
| Build CSS, Sass, PostCSS, Tailwind | `css` |
| Build JavaScript or TypeScript | `js` |
| Work with Hugo resources | `resources` |
| Transform images or inspect image config | `images` |
| Print warnings or errors | `fmt` |
| Debug values and timings | `debug` |
| Call partials | `partials` |
| Manipulate strings | `strings` |
| Parse, format, or localize time | `time`, `lang` |
| Build URLs or references | `urls` |
| Convert or marshal data | `transform`, `encoding`, `cast` |
| Inspect runtime or environment | `hugo`, `os` |
| Mark content safe for output context | `safe` |

## Method group map

| Object | Common uses |
| --- | --- |
| `Page` | metadata, content, resources, translations, links, render helpers, pagination |
| `Pages` | sorting, grouping, filtering, next/previous, related content |
| `Site` | site-wide params, pages, menus, taxonomies, language, config, data |
| `Resource` | asset content, media type, image processing, fingerprinting, publishing |
| `Shortcode` | params, inner content, parent, position, page/site access |
| `Menu` and `MenuEntry` | menu ordering, children, identifiers, params, page refs |
| `Pager` | paginated navigation and page groups |
| `Time` and `Duration` | formatting, arithmetic, truncation, comparison |
| `Taxonomy` | term pages, counts, ordering |

## Guardrails

- In pipelines, confirm whether the piped value becomes the first or last argument for the target function.
- Check whether a method is available on the current object type before using it.
- Prefer `.Param` for fallback-aware access and `.Params` when you intentionally need the raw params map.
- Use `.GetPage`, `ref`, and `relref` carefully; missing pages should fail loudly for content-critical links.
- Use `try` or explicit error handling only when a recoverable failure is expected.
