# Shortcodes and render hooks

Use shortcodes when authors need an explicit content primitive. Use render hooks when Markdown should render differently without changing every content file.

## Shortcodes

Common locations:

```text
layouts/shortcodes/<name>.html
layouts/shortcodes/<name>.md
```

Key context values:

- `.Get` reads positional or named shortcode parameters.
- `.Params` exposes all parameters.
- `.Inner` contains the shortcode body.
- `.Page` gives access to the current page.
- `.Site` gives access to the current site.
- `.Position` helps produce actionable diagnostics.

Guardrails:

- Support either named or positional params deliberately; validate required inputs with clear errors.
- Keep shortcode output stable for authors. Avoid breaking existing content syntax without a migration.
- Use `.Page.RenderString` only when shortcode input should be interpreted as Markdown.
- Avoid unsafe HTML unless input is trusted and the output context is understood.

## Render hooks

Common locations:

```text
layouts/_markup/render-link.html
layouts/_markup/render-image.html
layouts/_markup/render-heading.html
layouts/_markup/render-codeblock.html
layouts/_markup/render-blockquote.html
layouts/_markup/render-table.html
layouts/_markup/render-passthrough.html
```

Some render hook types support more specific lookup variants. Fetch the exact render hook docs page before adding a less common hook.

Typical uses:

- Add external-link attributes or internal-link validation.
- Render responsive images for Markdown images.
- Customize heading anchors and table of contents behavior.
- Wrap code blocks with copy buttons, filenames, captions, or diagrams.
- Support math or diagram passthrough blocks.

Guardrails:

- Render hook context is not identical for every hook type. Fetch the exact docs page before relying on field names.
- Keep output accessible: preserve alt text, link text, heading IDs, captions, and semantic HTML.
- If a render hook uses page resources, handle missing resources with actionable errors or safe fallbacks.
- Check `markup.goldmark.renderer.unsafe` only when raw HTML rendering is intentionally required.
