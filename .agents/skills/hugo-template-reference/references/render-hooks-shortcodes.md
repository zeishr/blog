# Template contexts for render hooks and shortcodes

This reference focuses on template-author concerns. For author-facing content guidance, use the content skill.

## Shortcode templates

Locations:

```text
layouts/shortcodes/<name>.html
layouts/shortcodes/<name>.md
```

Use shortcode methods intentionally:

- `.Get` for a named or positional parameter.
- `.Params` when iterating or passing all params onward.
- `.Inner` or `.InnerDeindent` for paired shortcodes.
- `.Page` to access page methods.
- `.Site` for site methods.
- `.Parent` for nested shortcode behavior.
- `.Position` in `errorf` or `warnf` diagnostics.

## Render hook templates

Common paths:

```text
layouts/_markup/render-link.html
layouts/_markup/render-image.html
layouts/_markup/render-heading.html
layouts/_markup/render-codeblock.html
layouts/_markup/render-blockquote.html
layouts/_markup/render-table.html
layouts/_markup/render-passthrough.html
```

Guardrails:

- Each hook has its own context. Fetch the exact render hook docs before using hook-specific fields.
- Preserve semantic output and accessibility attributes.
- Handle missing page resources with actionable diagnostics.
- Be careful with `safeHTML` in hooks because Markdown content may include author-controlled input.
