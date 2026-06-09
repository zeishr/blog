---
name: Retro Terminal
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#d4c4ad'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#9d8f7a'
  outline-variant: '#504534'
  surface-tint: '#fcbb2f'
  primary: '#ffc553'
  on-primary: '#412d00'
  primary-container: '#e6a817'
  on-primary-container: '#5c4000'
  inverse-primary: '#7c5800'
  secondary: '#f4be57'
  on-secondary: '#412d00'
  secondary-container: '#956a00'
  on-secondary-container: '#fff7f0'
  tertiary: '#6be3b2'
  on-tertiary: '#003826'
  tertiary-container: '#4dc798'
  on-tertiary-container: '#004f37'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdea7'
  primary-fixed-dim: '#fcbb2f'
  on-primary-fixed: '#271900'
  on-primary-fixed-variant: '#5e4200'
  secondary-fixed: '#ffdea8'
  secondary-fixed-dim: '#f4be57'
  on-secondary-fixed: '#271900'
  on-secondary-fixed-variant: '#5e4200'
  tertiary-fixed: '#81f9c6'
  tertiary-fixed-dim: '#63dcab'
  on-tertiary-fixed: '#002115'
  on-tertiary-fixed-variant: '#005139'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
  surface-deep: '#0c0c0c'
  surface-base: '#191919'
  surface-card: '#1d1d1d'
  surface-elevated: '#232323'
  border-primary: '#252525'
  border-muted: '#363636'
  text-primary: '#f0ede6'
  text-secondary: '#87847f'
  text-muted: '#4c4946'
  status-error: '#d64b4b'
  status-info: '#5ba0c8'
typography:
  display:
    fontFamily: Hanken Grotesk
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 38px
    letterSpacing: -0.02em
  headline-1:
    fontFamily: Hanken Grotesk
    fontSize: 22px
    fontWeight: '500'
    lineHeight: 26px
  headline-2:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '500'
    lineHeight: 22px
  body-prose:
    fontFamily: Hanken Grotesk
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  caption:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '300'
    lineHeight: 18px
  ui-label-lg:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '700'
    lineHeight: 16px
  ui-label-md:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '400'
    lineHeight: 22px
  ui-label-sm:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: '400'
    lineHeight: 12px
  micro-system:
    fontFamily: JetBrains Mono
    fontSize: 9px
    fontWeight: '400'
    lineHeight: 12px
spacing:
  rhythm-xs: 4px
  rhythm-sm: 8px
  rhythm-md: 16px
  rhythm-lg: 24px
  margin-main: 22px
  gutter-inner: 14px
  gap-nav: 10px
---

## Brand & Style

The brand identity is a fusion of early 2000s console interface design (specifically referencing the PS2 BIOS and memory management screens) and modern cybersecurity aesthetics. It targets a technical audience—developers, security researchers, and system architects—who value information density and a "low-life/high-tech" atmosphere.

The design style is **Retro-Futurist / Technical**. It rejects the soft, organic trends of modern SaaS in favor of hard-surface geometry, simulated CRT scanlines, and a monochromatic palette punctuated by a high-visibility amber. The emotional response is one of precision, authority, and nostalgia for the "golden age" of hardware interfaces.

**Key Stylistic Pillars:**
- **Geometry:** Heavy use of chamfered (clipped) corners and octagonal shapes rather than rounded corners.
- **Atmosphere:** A dark, high-contrast environment that mimics a terminal or a system BIOS.
- **Texture:** Visual interest is created through scanline overlays (`repeating-linear-gradient`) and decorative dot-matrix patterns.
- **Density:** High information density with micro-typography and explicit system metadata (timestamps, hex codes).

## Colors

The color system is optimized for high-contrast dark environments. The primary engine is a "monochromatic-plus-one" scheme, where the amber accent (`#e6a817`) serves as the functional highlight for interaction and hierarchy.

- **Primary (Amber):** Used for critical UI paths, active navigation, and primary branding.
- **Surface Palette:** A tiered system of near-blacks and deep grays (`#0c0c0c` to `#2b2b2b`) used to establish depth without shadows.
- **Text:** We avoid pure white to reduce eye strain, using a warm paper-white (`#f0ede6`) for prose and a series of desaturated grays for metadata.
- **Functional Accents:** Success (Emerald), Error (Crimson), and Info (Cerulean) are reserved for system status indicators and badges.

**Implementation Note:** Use `rgba` versions of the primary amber at 10% and 25% opacity for subtle background fills and inner borders on active elements.

## Typography

This design system employs a dual-font strategy to balance technical utility with long-form readability.

- **Hanken Grotesk (Prose):** Used for all storytelling, article content, and high-level headings. It provides a human, modern touch to the otherwise cold interface.
- **JetBrains Mono (System):** Used for all "Chrome" elements, navigation, buttons, code blocks, and metadata. This font reinforces the technical nature of the product.

**Hierarchy Rules:**
- Use **Display** styles for hero names or page titles.
- Use **Micro-System** for timestamps, version numbers, and decorative "memory card" labels.
- **Line heights** for monospace labels should be generous (up to 2.1) when used in sidebar lists to maintain legibility at small sizes.

## Layout & Spacing

The layout philosophy follows a **Fixed-Fluid Hybrid Grid**. The main content containers are often constrained to specific widths to mimic a console's output window, while internal elements reflow.

- **Grid:** A 12-column grid is used for desktop, shifting to a single-column stack for mobile.
- **Breakpoints:** Mobile (<768px), Tablet (768px-1024px), Desktop (>1024px).
- **Rhythm:** A strictly linear spacing scale (4, 8, 16, 24) ensures vertical rhythm.
- **Margins:** Standard page margins are set at `22px`. This non-standard value contributes to the "distinctive" feel of the interface.
- **Internal Spacing:** Components use `14px` padding for internal content to maintain a compact, "check-list" style density.

## Elevation & Depth

This design system is **strictly flat**. Depth is achieved through color layering and texture rather than shadows.

- **Tonal Layering:** Objects closer to the user are lighter in color (`surface-card` vs `surface-base`).
- **Scanlines:** A global overlay of 180-degree scanlines (3px-4px intervals) is applied to "Terminal" blocks and specific header areas to provide a CRT texture.
- **The "Blink" Effect:** Depth of interaction is signaled by motion—specifically a `step-end` blinking cursor in active input areas or terminal windows.
- **Borders as Depth:** Use `2px solid` borders on the left side of cards or the bottom of navigation items to indicate "Active" or "Focus" states, rather than lifting the element.

## Shapes

The shape language is the most distinctive aspect of this design system. It uses **Hard-Surface Chamfers** to create an industrial, hardware-inspired look.

- **Chamfered Corners:** Instead of standard rounded corners, use `clip-path: polygon()` to create 45-degree clipped corners.
  - **Large Containers:** 10px chamfer.
  - **Buttons/Badges:** 6px chamfer.
- **Standard Radii:** Minimal rounding (`2px` to `6px`) is reserved exclusively for interior code blocks or system status swatches where clipping would hinder legibility.
- **Decorative Dot Grids:** Elements may feature a "Memory Card" motif—a 5x5 grid of 5px dots—used in corners or as section separators.

## Components

### Buttons
Buttons are strictly chamfered with a `6px` clip-path. 
- **Primary:** Solid Amber fill with JetBrains Mono (Black) text.
- **Ghost:** Amber border (`1px`) with no fill.
- **Hover:** Shift background from transparent to `rgba(amber, 0.1)`.

### Cards
Cards use the `surface-card` background with a `10px` chamfer. Headers within cards should be separated by a `1px` border of `border-muted` and use the `ui-label-lg` typography style.

### Input Fields
Inputs are rectangular with a `1px` border of `border-primary`. Active state is indicated by a solid Amber left-border (2px) and a blinking `_` cursor character at the end of the text string.

### Progress Bars
Inspired by console loading screens, progress bars are **segmented**. Instead of a continuous fill, use a series of vertical blocks with a `2px` gap between each segment. Fill segments with `primary-color` or `secondary-color` for "dimmed" progress.

### Badges & Tags
Small rectangular elements with a `2px` radius (not clipped). Use `micro-system` typography. Success/Error/Info colors should be applied to the text or a small 6px status dot within the badge.

### Terminal Blocks
Containers used for code or system logs. These must feature the `.sl` (scanline) texture overlay and `surface-elevated` background. Text should strictly follow `ui-label-md` or `ui-label-sm`.
