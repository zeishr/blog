---
name: hugo-config-modules
description: Use this for Hugo site configuration, config directories, build settings, cascade, languages, markup, menus, modules, mounts, params, permalinks, privacy, output formats, taxonomies, security, services, versions, and Hugo Modules. Use compact references and fetch exact Hugo docs on demand.
---

# Hugo configuration and modules

Use this skill when editing Hugo configuration or Hugo Modules.

## How to work

1. Inspect the current configuration layout:
   - Root config such as `hugo.toml`, `hugo.yaml`, or `hugo.json`.
   - Environment-specific or split config under `config/`.
   - `go.mod`, `go.sum`, `package.json`, and theme/module directories when modules are involved.
2. Load only the relevant compact reference:
   - `references/reference-strategy.md` explains why full docs are not vendored and how to fetch exact Hugo pages.
   - `references/configuration-patterns.md` covers config layout, decision points, guardrails, and validation.
   - `references/module-patterns.md` covers Hugo Modules, imports, mounts, theme components, and module validation.
   - `references/source-pages.md` is the canonical Hugo docs URL inventory for configuration, modules, and quick references.
3. If exact syntax, precedence, module behavior, security policy, or version-specific details matter, fetch the specific Hugo docs page through the Jina reader URL shown in `references/reference-strategy.md`.
4. Make minimal, explicit config changes. Do not silently redesign the site structure, theme composition, or module graph.
5. Keep the project’s existing serialization format unless the user asks to convert it.
6. Validate with Hugo commands when possible:
   - `hugo config` to inspect effective configuration.
   - `hugo config mounts` for module mount issues.
   - `hugo mod graph`, `hugo mod tidy`, or `hugo mod verify` for module changes.
   - A targeted build command for final verification.

## Key Hugo config reminders

- Hugo supports TOML, YAML, and JSON config; split config directories can vary by environment and language.
- Configuration values may come from files, directories, environment variables, CLI flags, and modules. Check effective config before assuming precedence.
- `params` contains custom site parameters; avoid adding custom top-level settings that collide with Hugo settings.
- Module imports and mounts can replace or augment standard component folders such as `content`, `layouts`, `assets`, `static`, `data`, `i18n`, and `archetypes`.
- Markup settings affect Markdown rendering and may interact with render hooks.
- Security settings control allowed environment variables, HTTP methods, module imports, and external helpers.
- Multilingual projects may define language-specific parameters, menus, permalinks, and output behavior.
