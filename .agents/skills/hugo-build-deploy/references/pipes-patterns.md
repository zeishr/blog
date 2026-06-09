# Hugo Pipes patterns

Use this before editing asset pipelines. Fetch exact docs for individual functions such as `css.Sass`, `css.PostCSS`, `js.Build`, `resources.Fingerprint`, or `resources.PostProcess`.

## Pipeline checklist

1. Identify the source resource:
   - Global asset from `assets/` via `resources.Get` or `resources.Match`.
   - Page resource via `.Resources`.
   - Remote resource via `resources.GetRemote`.
   - Generated resource via `resources.FromString` or `resources.ExecuteAsTemplate`.
2. Apply transformations in a predictable order.
3. Minify and fingerprint production assets when appropriate.
4. Publish or link the final resource, not an intermediate resource.

## Common pipeline shapes

| Need | Typical pieces |
| --- | --- |
| Sass to CSS | `resources.Get`, `css.Sass`, optional `css.PostCSS`, minify, fingerprint |
| Tailwind | Tailwind/CSS integration, PostCSS or Hugo CSS functions, project package config |
| JavaScript/TypeScript | `js.Build`, target options, minify, fingerprint |
| Bundle files | `resources.Concat` or higher-level build function |
| Cache busting and SRI | `resources.Fingerprint`, then use `.RelPermalink` and `.Data.Integrity` |
| Generated assets | `resources.ExecuteAsTemplate` or `resources.FromString` |
| Final-path dependent rewrites | `resources.PostProcess` |

## Guardrails

- Check `package.json` and existing Node tooling before changing CSS or JS build behavior.
- Do not add new dependencies without asking.
- Keep development and production behavior explicit. Use `hugo.IsProduction` or environment-specific config when needed.
- Handle missing resources with `errorf` or clear fallbacks; silent missing assets create broken pages.
- Avoid broad `resources.Match` patterns that accidentally include source maps, partials, or unrelated files.

## Validation

- Run the project’s asset/build command if one exists.
- Run the production Hugo build, usually `hugo --gc --minify` or the project’s configured command.
- Inspect generated asset URLs, fingerprints, and integrity attributes.
