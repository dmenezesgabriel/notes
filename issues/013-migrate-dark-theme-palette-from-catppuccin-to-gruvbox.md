---
id: '013'
created: 2026-05-20
updated: 2026-05-20
status: active
---

# Task: Migrate dark theme palette from Catppuccin Mocha to Gruvbox Dark

## Priority

P1 — Standalone visual change with no downstream feature blockers; can be done after any in-flight accessibility fixes (issue 009) since both touch the same token file.

## Dependencies

- No task dependency; can start independently of any open task.
- No ADR dependency; this is a palette substitution within the existing token architecture, not an architectural change.
- Awareness of issue 009 (`issues/009-repair-dark-mode-contrast-across-shared-components.md`): if 009 is in flight, coordinate to avoid merge conflicts in `tokens.css`.

## Assignability

**HITL** — requires human visual sign-off on the rendered Gruvbox theme before closing; the final palette appearance and WCAG AA contrast ratios must be confirmed by a person in a browser. The implementer may verify contrast programmatically but the visual result must be approved by the requester before the task is marked done.

## Context

The site's dark mode is driven by CSS custom properties under `[data-theme='dark']` in `packages/components/src/styles/tokens.css` (lines 116–201). Those tokens currently map to the **Catppuccin Mocha** palette — a cool-blue pastel scheme. The requester wants the dark variant replaced with **Gruvbox Dark** — a warm, retro-inspired palette with earthy browns, muted greens, and high-contrast yellows.

All hardcoded colour values in downstream files must be updated to match the new palette so that the token file remains the single source of truth.

**Gruvbox Dark reference palette:**

| Role       | Token name      | Hard bg   | Bg0 / Medium | Bg1       | Bg2       |
| ---------- | --------------- | --------- | ------------ | --------- | --------- |
| Background | bg0_h / bg0     | `#1d2021` | `#282828`    | `#3c3836` | `#504945` |
| Foreground | fg1 / fg2 / fg3 | —         | `#ebdbb2`    | `#d5c4a1` | `#bdae93` |
| Red        | bright / dark   | `#fb4934` | `#cc241d`    |           |           |
| Orange     | bright          | `#fe8019` | `#d65d0e`    |           |           |
| Yellow     | bright          | `#fabd2f` | `#d79921`    |           |           |
| Green      | bright          | `#b8bb26` | `#98971a`    |           |           |
| Aqua/Teal  | bright          | `#8ec07c` | `#689d6a`    |           |           |
| Blue       | bright          | `#83a598` | `#458588`    |           |           |
| Purple     | bright          | `#d3869b` | `#b16286`    |           |           |

**Files to update:**

| File                                                                       | Reason                                                                |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `packages/components/src/styles/tokens.css` lines 116–201                  | Token source of truth; all dark-mode variables                        |
| `apps/storybook/.storybook/preview.ts` lines 24, 32                        | Hardcoded Catppuccin background presets for dark mode panel           |
| `apps/storybook/src/stories/story-helpers/dark-theme-frame.tsx` lines 8–17 | Hardcoded palette values duplicating tokens                           |
| `apps/site/app/globals.css`                                                | Any hardcoded colour references under `[data-theme='dark']` selectors |

## Use Cases

- **Feature**: Dark theme palette
- **Scenario**: Reader uses the site in dark mode
- **Given** a user has selected dark mode (or their OS prefers dark)
- **When** they read notes, navigate, or interact with any component
- **Then** all surfaces, text, accents, and borders render in the Gruvbox Dark palette rather than Catppuccin Mocha

---

- **Feature**: Dark theme palette
- **Scenario**: Developer previews components in Storybook dark mode
- **Given** a developer opens Storybook and selects the dark theme
- **When** they view any component story
- **Then** the Storybook canvas background and all component colours match the Gruvbox Dark palette

## Definition of Ready

- Gruvbox Dark palette values are agreed upon (specified above; no further decision needed).
- Issue 009 status is known; if in-flight, the implementer coordinates to avoid conflicts in `tokens.css`.
- The requester is available to give visual sign-off on the rendered result.

## Functional Requirements

- `FR-001`: Under `[data-theme='dark']`, all CSS custom properties in `tokens.css` use Gruvbox Dark colour values, not Catppuccin Mocha values.
- `FR-002`: The palette comment block in `tokens.css` is updated to document the Gruvbox Dark palette instead of the Catppuccin Mocha palette.
- `FR-003`: Hardcoded Catppuccin colour values in `dark-theme-frame.tsx` are replaced with the equivalent Gruvbox Dark values.
- `FR-004`: Hardcoded background presets in `apps/storybook/.storybook/preview.ts` reference Gruvbox Dark backgrounds (`#282828` for Base, `#1d2021` for Hard).
- `FR-005`: No token previously set under `[data-theme='dark']` is removed or renamed; only the colour values change.
- `FR-006`: Light mode tokens (`:root` block) are unchanged.

## Non-Functional Requirements

- `NFR-001`: All dark mode foreground/background token pairings used for body text, links, and interactive elements must meet WCAG AA contrast ratio (≥ 4.5:1 for normal text, ≥ 3:1 for large text and UI components).
- `NFR-002`: The palette substitution must not introduce new CSS custom property names or remove existing ones; the token surface area stays identical.
- `NFR-003`: The "neu-brutalism × punk zine" design character is preserved — warm earthy tones replace the cool pastels without changing layout, borders, or shadow geometry.

## Observability Requirements

- `OBS-001`: Not applicable — this is a purely visual change with no runtime logging, metrics, tracing, or analytics surface.

## Acceptance Criteria

- `AC-001`: **Given** dark mode is active, **When** the site home page loads, **Then** the page background matches Gruvbox `bg0_h` (`#1d2021`) and body text matches Gruvbox `fg1` (`#ebdbb2`).
- `AC-002`: **Given** dark mode is active, **When** a reader views a note page, **Then** prose text, headings, links, code blocks, blockquotes, and callouts all use Gruvbox palette colours.
- `AC-003`: **Given** dark mode is active, **When** the navigation bar is visible, **Then** nav background, link colours, and the active-link highlight all use Gruvbox values (no Catppuccin hex values remain in computed styles).
- `AC-004`: **Given** the Storybook dark theme is selected, **When** any component story is displayed, **Then** the canvas background is `#282828` (Gruvbox bg0) and component colours match Gruvbox tokens.
- `AC-005`: **Given** a colour-contrast tool is run against dark mode body text and background, **When** the default pairing `#ebdbb2` on `#282828` is measured, **Then** it reports ≥ 4.5:1 contrast ratio.
- `AC-006`: **Given** the light theme is active, **When** any page or component is rendered, **Then** no token values or visual appearance has changed from the pre-task baseline.

## Required Tests

### Unit Tests

- `UT-001`: Not applicable — CSS token values are not testable in isolation via unit tests; correctness is verified by the acceptance criteria and usability review.

### Integration Tests

- `IT-001`: Not applicable — no API, service, or database boundary is crossed.

### Smoke Tests

- `SMK-001`: **Scenario**: Site loads in dark mode without crash after token change
  **Given** the dev server is running with the updated tokens
  **When** a developer opens the site with `data-theme="dark"` applied
  **Then** the page renders without CSS parse errors or missing-variable fallbacks visible in DevTools
  Covers release confidence for `FR-001`.

### End-to-End Tests

- `E2E-001`: Not applicable — colour palette substitution does not change any user journey or interaction; the smoke test and usability review are sufficient.

### Regression Tests

- `REG-001`: Not applicable — there is no previous defect related to Gruvbox that could regress.

### Performance Tests

- `PT-001`: Not applicable — CSS custom property substitution has no measurable runtime performance impact.

### Security Tests

- `ST-001`: Not applicable — this task does not touch authentication, authorization, input handling, storage, secrets, or external communication.

### Usability Tests

- `UX-001`: Open the site in dark mode in a real browser and visually verify that body text, headings, links, code blocks, nav, tags, banners, and callouts all read clearly with the Gruvbox palette. Covers `AC-001`, `AC-002`, `AC-003`, `NFR-001`. **This review requires human approval before the task is marked done.**
- `UX-002`: Toggle between light and dark mode and verify transitions are smooth and no colour "flashes" or missing-variable fallbacks appear. Covers `AC-006`.

### Observability Tests

- `OT-001`: Not applicable — no operationally relevant behaviour changes.

## Definition of Done

- All Catppuccin Mocha hex values under `[data-theme='dark']` in `tokens.css` are replaced with Gruvbox Dark equivalents.
- The palette comment block in `tokens.css` documents Gruvbox Dark with the full palette reference.
- Hardcoded colour values in `dark-theme-frame.tsx` and `preview.ts` are updated to match.
- `apps/site/app/globals.css` contains no remaining Catppuccin hex values under dark-mode selectors.
- Light mode tokens are unchanged and verified.
- WCAG AA contrast is confirmed for the primary text/background pairing (`AC-005`).
- The requester has given visual sign-off on the Gruvbox dark theme appearance in a browser (`UX-001`).
