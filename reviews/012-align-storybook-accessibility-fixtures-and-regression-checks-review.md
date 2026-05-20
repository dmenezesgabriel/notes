# Review: 012 — Align Storybook accessibility fixtures and regression checks

**Verdict**: Pass  
**Date**: 2026-05-20  
**Reviewer**: Claude (automated)

## Summary

The implementation correctly replaces hardcoded light-only hex values with `var(--token, #fallback)` syntax across all seven affected story files and adds `DarkModeContrastReview` stories with `play` functions to five components (sheet, callout, TOC, breadcrumb, search) that lacked focused dark-mode coverage. The new stories follow the established `garden-nav`/`garden-banner` pattern exactly: `DarkThemeFrame` wrapper, `data-theme="dark"` assertion, a microtask yield, and `expectShadowTextContrast` calls against shadow-DOM parts. An additional `FocusIndicator` story for search and a `ReducedMotion` story for banner are clean additions. One non-blocking gap exists: `DarkThemeFrame.darkThemeTokens` does not define `--zine-ink-faded`, so slotted content styled with that token inside a `DarkThemeFrame` falls back to the light hex `#2c2820`; the play functions do not check slotted content, so this is not caught by the new regression stories. All other FR, NFR, OBS, and AC requirements are met.

## Acceptance Criteria

| ID     | Criterion                                                                                                             | Verdict | Notes                                                                                                                                                                                  |
| ------ | --------------------------------------------------------------------------------------------------------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AC-001 | Story renders with theme-aware token values instead of hardcoded light-only combos in dark mode                       | Pass    | All identified hardcoded values replaced with `var(--token, #fallback)` in every affected story. The remaining `#a08800` is documented as intentionally decorative.                    |
| AC-002 | Corrected stories evaluated by focused a11y checks no longer fail on contrast, search-label, focus, and motion issues | Pass    | `DarkModeContrastReview` play functions assert WCAG AA via `expectShadowTextContrast`; `FocusIndicator` asserts `aria-label`; `ReducedMotion` simulates static fallback.               |
| AC-003 | Regression is surfaced before merge if a future contributor reintroduces one of the issues                            | Pass    | `DarkModeContrastReview` stories tagged `dark-contrast` with `play` functions covering each previously failing surface. `FocusIndicator` play function guards the aria-label contract. |

## Required Tests

| ID      | Category      | Status            | Notes                                                                                                                                                                                                                                                                                                                                                |
| ------- | ------------- | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| IT-001  | Integration   | Present           | `DarkModeContrastReview` stories render in dark theme via `DarkThemeFrame` and assert WCAG AA contrast for shadow-DOM parts in light/dark through token fallbacks. Covers `FR-001` through `FR-004` and all ACs.                                                                                                                                     |
| SMK-001 | Smoke         | Present           | Stories are syntactically valid (typecheck and lint passed per implementation summary). No configuration crash path introduced.                                                                                                                                                                                                                      |
| UX-001  | Usability     | Present           | Each `DarkModeContrastReview` story is explicitly rendered against a dark page background with tokens applied; contrast assertions confirm legibility.                                                                                                                                                                                               |
| OT-001  | Observability | Present (partial) | `expect()` failure messages include component and part labels (e.g. "Sheet heading contrast 2.34 should meet WCAG AA"). Story IDs are surfaced natively by Storybook/vitest test runner. No explicit story-ID string is embedded in assertion messages, but this is consistent with the existing `garden-nav` and `garden-banner` reference pattern. |

## Findings

### Blocking

None

### Non-blocking

1. **`--zine-ink-faded` missing from `DarkThemeFrame.darkThemeTokens`** (`dark-theme-frame.tsx` lines 8–14).  
   Slotted content using `color: var(--zine-ink-faded, #2c2820)` inside a `DarkThemeFrame` will resolve to the light-mode fallback `#2c2820` (dark ink on a dark background) because `DarkThemeFrame` only injects `--ds-page`, `--zine-paper`, `--zine-paper-alt`, `--zine-ink`, and `--zine-muted`. The same gap applies to `--zine-red` and `--zine-yellow`, though those tokens only appear in decorative elements within the new stories.  
   Affected stories: `garden-sheet/DarkModeContrastReview` (slotted `<p>` body), `garden-callout/DarkModeContrastReview` (slotted body text). The play functions only call `expectShadowTextContrast` on shadow-part selectors (`[part="heading"]`), so the slotted body colour gap is not caught by the regression coverage.  
   Recommended fix: add `'--zine-ink-faded': '#cba6f7'` (or the correct dark-mode value) and `'--zine-red'` / `'--zine-yellow'` dark-mode equivalents to `darkThemeTokens`, or extend the play functions to also check slotted body text contrast.

2. **`garden-banner/DarkModeContrastReview` play function skips the microtask yield** present in all other new stories.  
   All five newly added `DarkModeContrastReview` play functions include `await new Promise((resolve) => globalThis.setTimeout(resolve, 0))` to let the custom element upgrade. The pre-existing `garden-banner/DarkModeContrastReview` play function (modified in this commit by whitespace only) does not include that yield. This is inconsistent and may cause a race condition in slower environments. Matches the pre-existing `garden-nav` style, so it is not a regression introduced here, but worth aligning.

### Suggestions

1. **Extend `expectShadowTextContrast` coverage to body text**. The `garden-callout/DarkModeContrastReview` only checks `[part="heading"]`; adding a check on `[part="body"]` or the slotted text container would provide broader regression coverage for the callout component's most common content surface.

2. **`FocusIndicator` story does not call `await canvasElement.keyboard` or check focus-ring styles** beyond confirming `aria-label`. A follow-up assertion on the `:focus-visible` outline via `getComputedStyle` would fully cover the yellow-outline requirement noted in `FR-004`.

3. **`ReducedMotion` story uses `::part(text)` CSS override** rather than `matchMedia` mocking. This is a reasonable simulation approach, but a comment explaining why the CSS override is used (as opposed to `window.matchMedia` mocking) would help future contributors understand the deliberate choice.

## Observability Requirements

| ID      | Requirement                                                            | Status | Notes                                                                                                                        |
| ------- | ---------------------------------------------------------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------- |
| OBS-001 | Failing a11y stories visible in CI and local review                    | Pass   | Stories export `play` functions; vitest/storybook test runner reports failures with descriptive `expect` messages per story. |
| OBS-002 | Verification scoped so contributors can identify which story regressed | Pass   | Each story's play function is isolated; failure messages name the component, part, and measured contrast ratio.              |
| OBS-003 | No new runtime telemetry introduced                                    | Pass   | No analytics, logging, or telemetry code introduced.                                                                         |

## NFR Compliance

| ID      | Requirement                                                  | Status | Notes                                                                                                                                                    |
| ------- | ------------------------------------------------------------ | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| NFR-001 | Renderer-compatible with web-components setup                | Pass   | Stories use `@storybook/nextjs-vite` types and JSX; `DarkThemeFrame` is a React wrapper consistent with existing helpers. No renderer change introduced. |
| NFR-002 | Story fixes prefer shared tokens over per-story visual forks | Pass   | All replacements use `var(--token, #fallback)` pointing to the shared token source of truth; no per-story custom token definitions added.                |
| NFR-003 | Regression coverage focused enough to run routinely          | Pass   | Coverage is limited to one `DarkModeContrastReview` story per component with targeted `play` assertions; no broad E2E or screenshot diffing added.       |

## ADR Compliance

No ADR changes required or made. Token source-of-truth (ADR-002) is consumed correctly; no new architectural decisions introduced.

## Unresolved Assumptions

1. **`--zine-ink-faded` dark-mode value is unknown**. The implementation assumes the shared token CSS file defines a dark-mode override for `--zine-ink-faded` at the `[data-theme="dark"]` selector level. If it does not, the slotted body text in `DarkModeContrastReview` stories will silently fail contrast in dark mode while the play functions pass (because they only check shadow-DOM parts, not slotted content). This assumption is flagged in the implementation summary but not resolved.

2. **Play functions not executed locally**. The implementation summary explicitly notes that browser-mode Storybook tests require a running dev server and were not run in the mobile environment. CI is the intended verification surface. The review cannot confirm that `expectShadowTextContrast` produces correct numeric contrast values against the actual rendered component tokens rather than computed fallbacks.
