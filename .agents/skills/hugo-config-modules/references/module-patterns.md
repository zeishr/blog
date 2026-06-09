# Hugo Modules patterns

Use this before editing Hugo module imports, mounts, or theme composition.

## Module checklist

Inspect these files and directories:

- `go.mod` and `go.sum`
- Hugo `module` configuration
- `themes/` if the project still uses theme directories
- `package.json` when Node dependencies are packaged through modules
- Existing mounts from `hugo config mounts`

## Common operations

| Need | Prefer |
| --- | --- |
| Use a theme as a module | Add a module import and keep `go.mod` current |
| Compose multiple theme components | Multiple `module.imports` entries |
| Override module files locally | Place files in the project path with higher precedence |
| Map module folders into Hugo component folders | `module.mounts` |
| Vendor dependencies for reproducible/offline builds | `hugo mod vendor` when the project expects vendoring |
| Update module dependencies | `hugo mod get`, then `hugo mod tidy` and build |
| Inspect dependency graph | `hugo mod graph` |

## Mount guardrails

- Mounts can replace default component folder behavior. Confirm the full effective mount table before editing.
- Preserve standard component semantics: `content`, `layouts`, `assets`, `static`, `data`, `i18n`, and `archetypes`.
- Be explicit when adding mounts so local project overrides remain predictable.
- Do not switch from theme directories to modules, or vice versa, unless the user asks for that architecture change.

## Validation

- `hugo config mounts`
- `hugo mod graph`
- `hugo mod tidy` after dependency changes
- `hugo mod verify` when dependency integrity is relevant
- The project’s normal build command
