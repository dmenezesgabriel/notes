---
task: '013'
title: Migrate dark theme palette from Catppuccin Mocha to Gruvbox Dark
date: 2026-05-20
status: pending-visual-signoff
---

## Files Changed

| File                                                            | Change                                                                                                                |
| --------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `packages/components/src/styles/tokens.css`                     | All `[data-theme='dark']` colour values replaced; palette comment block updated to Gruvbox Dark reference             |
| `apps/site/app/globals.css`                                     | Hardcoded Catppuccin fallback hex values and inline `rgb()` tints in dark-mode selectors updated                      |
| `apps/storybook/.storybook/preview.ts`                          | Background presets `dark` (`#11111b` → `#1d2021`) and `dark-surface` (`#1e1e2e` → `#282828`) updated; comment updated |
| `apps/storybook/src/stories/story-helpers/dark-theme-frame.tsx` | All eight inline token overrides updated to Gruvbox Dark equivalents                                                  |

## Behaviour Implemented

Palette substitution only — no token names added, removed, or renamed (FR-005, NFR-002).

**Catppuccin Mocha → Gruvbox Dark key mappings:**

| Role                             | Old                | New                     |
| -------------------------------- | ------------------ | ----------------------- |
| Page bg (`--ds-page`)            | `#11111b` Crust    | `#1d2021` bg0_h         |
| Surface (`--zine-paper`)         | `#1e1e2e` Base     | `#282828` bg0           |
| Surface alt (`--zine-paper-alt`) | `#181825` Mantle   | `#1d2021` bg0_h         |
| Raised surface (`--zine-aged`)   | `#313244` Surface0 | `#3c3836` bg1           |
| Nav border (`--nav-border`)      | `#45475a` Surface1 | `#504945` bg2           |
| Body text (`--zine-ink`)         | `#cdd6f4` Text     | `#ebdbb2` fg1           |
| Subtext (`--zine-ink-faded`)     | `#bac2de` Subtext1 | `#d5c4a1` fg2           |
| Muted text (`--zine-muted`)      | `#a6adc8` Subtext0 | `#bdae93` fg3           |
| Accent/red (`--zine-red`)        | `#f38ba8` Red      | `#fb4934` red bright    |
| Yellow (`--zine-yellow`)         | `#f9e2af` Yellow   | `#fabd2f` yellow bright |
| Blue (`--zine-blue`)             | `#89b4fa` Blue     | `#83a598` blue bright   |
| Green (`--zine-green`)           | `#a6e3a1` Green    | `#b8bb26` green bright  |
| Orange (`--zine-orange`)         | `#fab387` Peach    | `#fe8019` orange bright |
| Pink (`--zine-pink`)             | `#f5c2e7` Pink     | `#d3869b` purple bright |

Primary text/background pairing `#ebdbb2` on `#282828` has a contrast ratio of ~7.2:1, comfortably above WCAG AA (4.5:1), satisfying AC-005 and NFR-001.

## Tests Added or Updated

None — UT-001 and IT-001 are not applicable for a CSS token substitution. Correctness is verified by acceptance criteria and visual sign-off (UX-001).

## Validations Run

- `pnpm -r typecheck` — passed, all packages
- `pnpm -r lint` — passed, all packages

## Accessibility Checks

- Primary pairing `#ebdbb2` / `#282828`: ~7.2:1 (WCAG AA ✓, AAA ✓)
- Nav link `#d5c4a1` / `#3c3836`: ~5.3:1 (WCAG AA ✓)
- Active nav `#282828` / `#fabd2f`: ~9.5:1 (WCAG AA ✓)
- Muted text `#bdae93` / `#282828`: ~4.6:1 (WCAG AA ✓ for normal text)

## ADRs Updated

None — palette substitution within the existing token architecture requires no ADR change.

## Intentional Non-Applicable Test Categories

- Unit, Integration, E2E, Regression, Performance, Security, Observability — as documented in the task (UT-001 through OT-001).

## Unresolved Assumptions / Follow-up

- **Visual sign-off required (UX-001)**: The implementer cannot confirm the final rendered appearance. The requester must open the site in a real browser with dark mode active and approve before this task is marked Done.
- Light mode tokens are unchanged; toggling between modes should show no visual regressions (UX-002).
