---
name: atomic-design
description: Design, review, or refactor user interfaces and design systems using Brad Frost's atomic design methodology; atoms, molecules, organisms, templates, pages, pattern libraries, workflow, and governance.
---

# Atomic Design

Use this skill when the user asks to design, review, refactor, document, or maintain UI components, component libraries, pattern libraries, design systems, page templates, or reusable interface patterns using atomic design.

This skill is based on Brad Frost's *Atomic Design* chapters:

- https://atomicdesign.bradfrost.com/chapter-1/
- https://atomicdesign.bradfrost.com/chapter-2/
- https://atomicdesign.bradfrost.com/chapter-3/
- https://atomicdesign.bradfrost.com/chapter-4/
- https://atomicdesign.bradfrost.com/chapter-5/

## Core mindset

Create design systems, not isolated pages. Treat pages and screens as concrete instances of an underlying system of reusable patterns.

When applying atomic design:

- Scope work by components, content types, states, interactions, and system impact rather than by page count alone.
- Move between the small parts and the complete experience. Atomic design is not a linear process.
- Prefer reusable, context-aware patterns over one-off page-specific implementations.
- Preserve the project's existing naming, component model, and framework conventions unless the user explicitly asks for a redesign.
- Do not force Brad Frost's exact taxonomy if the project already uses different names. Map the local taxonomy to the atomic model and explain the mapping when useful.
- Treat front-end implementation as part of design. Validate decisions in the actual medium when possible.
- Treat the design system as a living product, not a static deliverable.

## Atomic hierarchy

Use this hierarchy as a mental model for UI systems.

### Atoms

Atoms are foundational interface elements that cannot be broken down further without losing their practical function.

Examples:

- Design tokens and primitive values: color, spacing, typography, radii, shadows, motion timing.
- Basic HTML or native UI elements: labels, inputs, buttons, links, headings, icons, images.
- Base styles and accessibility primitives.

When working with atoms:

- Keep them focused and predictable.
- Define clear states such as default, hover, focus, active, disabled, invalid, loading, and selected where relevant.
- Bake in accessibility, responsive behavior, and semantic markup early.
- Avoid coupling atoms to page-specific content or layout.

### Molecules

Molecules are simple groups of atoms that function together as one reusable component.

Examples:

- Search form made from a label, input, and button.
- Form field made from label, control, help text, and validation message.
- Card summary made from image, heading, metadata, and action.
- Button group, pagination control, nav item, alert row.

When working with molecules:

- Follow single responsibility: one molecule should do one clear thing well.
- Keep APIs small and content contracts explicit.
- Design for real content lengths, missing content, error states, and disabled states.
- Prefer composition over deeply nested conditional logic.

### Organisms

Organisms are relatively complex sections composed of atoms, molecules, and sometimes other organisms.

Examples:

- Header, footer, sidebar, product grid, article list, checkout summary, dashboard panel.

When working with organisms:

- Make them reusable across contexts when the structure supports it.
- Document which smaller patterns they contain and where they are used.
- Verify layout, responsiveness, interaction, accessibility, and performance in realistic contexts.
- Avoid placing unrelated responsibilities into a single organism.

### Templates

Templates place components into a layout and express the page or screen's underlying content structure.

Templates should show:

- Which organisms and molecules appear.
- Their relative hierarchy and source order.
- Content slots, constraints, and guardrails such as image ratios, heading lengths, list sizes, and optional regions.
- Layout behavior across viewport sizes and containers.

Templates should use representative placeholders or structured sample data, but they are not final content.

### Pages

Pages are concrete instances of templates with real or representative content applied.

Use pages to test whether the system holds up under realistic conditions:

- Short, normal, and long content.
- Empty, loading, error, success, and permission-specific states.
- Different user roles, locales, themes, content densities, and data volumes.
- Accessibility and keyboard flows.
- Responsive behavior across the full viewport spectrum, not just a few device presets.

If a page breaks, loop back and improve the relevant molecule, organism, or template rather than patching only that page when a systemic fix is appropriate.

## Recommended workflow

### 1. Inspect the existing system

Before changing code, analyze the current structure and conventions:

- Component directories and naming conventions.
- Styling approach, token usage, theme files, and layout primitives.
- Existing tests, stories, examples, documentation, and visual regression setup.
- Repeated UI patterns and inconsistencies.
- Accessibility and responsive patterns already in use.

Use the project's existing libraries and patterns. Ask before introducing new third-party dependencies.

### 2. Conduct a lightweight interface inventory

When designing or refactoring a broader UI area, identify the unique patterns involved.

Capture or list categories such as:

- Global elements: headers, footers, shells.
- Navigation: primary nav, breadcrumbs, tabs, pagination.
- Forms: fields, checkboxes, radios, selects, validation, errors.
- Buttons and actions: primary, secondary, destructive, icon-only, loading.
- Typography: headings, body text, captions, labels.
- Cards, blocks, lists, grids, media, tables.
- Messaging: alerts, toasts, empty states, dialogs, tooltips.
- Interactive components: accordions, carousels, menus, popovers.
- Colors, icons, motion, third-party widgets.

Use the inventory to expose duplication, inconsistent naming, missing states, and opportunities for reuse.

### 3. Classify and name patterns

Map each pattern to the smallest useful atomic level:

- Atom if it is a primitive or indivisible UI element.
- Molecule if it is a simple functional group.
- Organism if it is a complex, standalone section.
- Template if it defines layout and content structure.
- Page if it applies real content and variations.

Name patterns by structure and role rather than by page or content when possible:

- Prefer `card` over `product-card` when the component can hold many content types.
- Prefer `carousel` over `homepage-carousel` when it is not homepage-specific.
- Use content-specific names only when the content contract is genuinely part of the component's purpose.

If naming is ambiguous, propose options and explain the tradeoff.

### 4. Design and implement from both directions

Work from small parts upward and from real use cases downward:

- Extract atoms and molecules only when they have a clear purpose and reuse path.
- Build organisms by composing smaller parts instead of duplicating markup and styling.
- Create templates or page examples to prove components work together.
- Test with representative content early, including edge cases.
- Avoid premature abstractions that make the system harder to understand.

For code changes:

- Keep changes minimal and consistent with the project.
- Preserve behavior unless the user asked for behavior changes.
- Prefer composition, slots, render props, children, or local equivalents over deep branching.
- Keep component APIs explicit and small.
- Keep styling close to existing project conventions.

### 5. Document patterns as living system assets

When adding or changing reusable patterns, update nearby documentation, stories, examples, or tests when they exist.

Useful pattern documentation includes:

- Purpose: why this pattern exists.
- Anatomy: the atoms/molecules/organisms it contains.
- Usage: when to use it and when not to use it.
- Content contract: required and optional content, character limits, image ratios, data shape.
- Variants and states: default, hover, focus, active, disabled, loading, empty, error, success.
- Accessibility: semantics, labels, roles, focus order, keyboard behavior, reduced motion.
- Responsive behavior: viewport and container expectations.
- Performance considerations: heavy media, lazy loading, rendering cost.
- Lineage: where the pattern is used and what depends on it, when discoverable.

### 6. Validate the system impact

For implementation work, validate at the smallest useful scope first, then broaden:

- Unit tests for component logic and rendering decisions.
- Accessibility checks where tooling exists.
- Storybook, pattern library, preview, or screenshot checks where available.
- Page/template tests for composed behavior.
- Responsive checks across a range of viewport widths.

Do not claim validation passed unless you actually ran it.

## Review checklist

When reviewing UI code or a design system, look for:

- Page-specific implementations that should be reusable patterns.
- Duplicate atoms, molecules, or organisms with slight visual or behavioral drift.
- Components with unclear responsibility or overly broad APIs.
- Pattern names tied too tightly to page location or temporary content.
- Missing states, variants, empty states, error states, or loading states.
- Components that work only with ideal content.
- Accessibility gaps in semantics, labels, focus, keyboard behavior, or motion.
- Responsive behavior tested only at fixed device widths.
- Pattern documentation that omits usage guidance or context.
- Pattern library drift from production code.
- One-off fixes that should be made at the system level.

## Governance and maintenance guidance

A design system needs care after initial delivery.

When asked about maintaining or evolving a system, recommend:

- Make ownership explicit: identify makers, users, reviewers, and approvers.
- Define how patterns are added, changed, deprecated, and removed.
- Prefer systemic fixes when an issue affects multiple pages or products.
- Keep the pattern library, docs, examples, and production code as synchronized as the project's architecture allows.
- Communicate changes with changelogs, release notes, roadmap updates, or team channels.
- Create feedback loops between system maintainers and product teams.
- Make contribution paths approachable: issues, pull requests, office hours, review guidelines, or templates.
- Treat the system as adaptable. Avoid freezing patterns into dogma when user needs, business needs, or platform capabilities change.

## Response format when applying this skill

When helping the user, include the relevant atomic design lens in the response:

- For new UI work: identify the likely atoms, molecules, organisms, templates, and pages involved.
- For refactors: describe what was extracted, what stayed page-specific, and why.
- For reviews: group findings by system impact and prioritize issues that improve reuse, consistency, accessibility, and maintainability.
- For documentation: provide concise usage guidance, states, content constraints, and accessibility notes.
- For architecture decisions: call out tradeoffs between local simplicity and system-wide reuse.

Keep guidance practical. Atomic design should make the UI easier to build, test, understand, and evolve; it should not add ceremony for its own sake.
