# Task 012 — Align Storybook Accessibility Fixtures and Regression Checks

## Behavior Implemented

Storybook fixtures and regression checks now align with the shared token source of truth and provide focused accessibility coverage for the corrected components.

### FR-001 — Token replacements in page-context stories

Hardcoded light-only hex values replaced with CSS token references in six story files:

| Story                                         | Values fixed                                                                                                                                    |
| --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `garden-sheet`                                | `#2c2820` → `var(--zine-ink-faded, #2c2820)` (all slotted content)                                                                              |
| `garden-callout` (`InArticle`, `AllVariants`) | `#fafaf2` → `var(--zine-paper, …)`, `#0e0c07` → `var(--zine-ink, …)`, `#2c2820` → `var(--zine-ink-faded, …)`                                    |
| `garden-toc` (`InArticleLayout`)              | `#fafaf2`, `#0e0c07`, `#6b6050`, `#2c2820` → respective tokens                                                                                  |
| `garden-breadcrumb` (`InArticleHeader`)       | `#fafaf2`, `#0e0c07`, `#6b6050` → respective tokens                                                                                             |
| `garden-banner` (`InPageContext`)             | `#f2edd7`, `#0e0c07`, `#2c2820` → respective tokens                                                                                             |
| `garden-search` (`InZineSheet`)               | `#0e0c07`, `#d42b2b`, `#f5c800` → `var(--zine-ink, …)`, `var(--zine-red, …)`, `var(--zine-yellow, …)` (pin border `#a08800` left as decorative) |
| `design-system-overview` (`CurrentSystem`)    | `#fafaf2` (not a token) → `var(--zine-paper, #f2edd7)`                                                                                          |

### FR-003/FR-004 — Focused accessibility regression coverage

New `DarkModeContrastReview` stories added to four components that previously lacked focused dark-mode coverage:

- **`garden-sheet`** — `DarkThemeFrame` + `expectShadowTextContrast` on `[part="heading"]`
- **`garden-callout`** — `DarkThemeFrame` + `expectShadowTextContrast` on `[part="heading"]`
- **`garden-toc`** — `DarkThemeFrame` + `expectShadowTextContrast` on `[part="title"]`
- **`garden-breadcrumb`** — `DarkThemeFrame` + `expectShadowTextContrast` on `a` and `[aria-current="page"]`
- **`garden-search`** — `DarkThemeFrame` + aria-label assertion (`label` prop → input `aria-label`) + `expectShadowTextContrast` on `[part="input"]`

The `garden-search` `FocusIndicator` play function was also updated to assert `aria-label="Search notes"` is present before focusing, covering FR-004's search naming requirement.

Reduced-motion coverage for `garden-banner` was already present via the `ReducedMotion` story (no change needed).

## Files Changed

- `apps/storybook/src/stories/garden-sheet.stories.tsx`
- `apps/storybook/src/stories/garden-callout.stories.tsx`
- `apps/storybook/src/stories/garden-toc.stories.tsx`
- `apps/storybook/src/stories/garden-breadcrumb.stories.tsx`
- `apps/storybook/src/stories/garden-banner.stories.tsx`
- `apps/storybook/src/stories/garden-search.stories.tsx`
- `apps/storybook/src/stories/design-system-overview.stories.tsx`

## Tests Added or Updated

| Story                                      | Type             | Change                                               |
| ------------------------------------------ | ---------------- | ---------------------------------------------------- |
| `garden-sheet/DarkModeContrastReview`      | New story + play | WCAG AA check on sheet heading                       |
| `garden-callout/DarkModeContrastReview`    | New story + play | WCAG AA check on callout heading                     |
| `garden-toc/DarkModeContrastReview`        | New story + play | WCAG AA check on TOC title                           |
| `garden-breadcrumb/DarkModeContrastReview` | New story + play | WCAG AA check on breadcrumb link and current item    |
| `garden-search/DarkModeContrastReview`     | New story + play | aria-label assertion + WCAG AA check on search input |
| `garden-search/FocusIndicator`             | Updated play     | Added aria-label assertion before focus              |

## Validations Run

- `pnpm --filter apps-storybook typecheck` — passed (no errors)
- `pnpm --filter apps-storybook lint` — passed (no errors)

## Accessibility Checks

All affected stories now use `var(--token, #fallback)` syntax, so both the Storybook theme switcher and addon-a11y operate against the correct dark-mode values. New `DarkModeContrastReview` stories explicitly verify WCAG AA (4.5:1) contrast via `expectShadowTextContrast` inside shadow DOMs — the same approach used by the existing `garden-nav` and `garden-banner` contrast reviews.

## ADRs Updated

None — token source-of-truth (ADR-002) is unchanged. Stories now correctly consume it.

## Intentional Non-Applicable Test Categories

- **Unit tests** — no pure functions changed
- **E2E tests** — task scope is Storybook fixtures, not live-site journeys
- **Regression tests** — no tracked defect ID for the fixture drift
- **Performance tests** — no measured runtime target
- **Security tests** — no auth, secrets, or untrusted input touched

## Unresolved Assumptions

- `#a08800` (pin border shadow in `InZineSheet`) is not a design token. Left hardcoded because the pin circle is a purely decorative affordance and its inner border is not readable content.
- Runtime Storybook browser tests (`vitest --browser`) require a running Storybook dev server (`localhost:6006`). These were not executed locally due to the mobile environment; CI is the intended execution surface for story play functions.
