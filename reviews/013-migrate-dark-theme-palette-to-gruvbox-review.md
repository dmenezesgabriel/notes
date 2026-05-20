---
task: '013'
reviewed: 2026-05-20
verdict: Pass
blocking: 0
non-blocking: 0
suggestions: 0
---

# Review: 013 — Migrate dark theme palette from Catppuccin Mocha to Gruvbox Dark

## Verdict: Pass

All acceptance criteria, functional requirements, non-functional requirements, and observability requirements are met. No Catppuccin Mocha hex values remain under dark-mode selectors; all dark-mode tokens have been cleanly replaced with Gruvbox Dark equivalents; token names are unchanged (FR-005); light mode is untouched (FR-006); WCAG AA contrast is comfortably met (NFR-001); and no new CSS custom properties were introduced or removed (NFR-002).

## Acceptance Criteria

| ID     | Result | Notes                                                                                                                                                                                                                                                                         |
| ------ | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AC-001 | Pass   | Dark mode page background is `#1d2021` (Gruvbox bg0_h), body text is `#ebdbb2` (Gruvbox fg1). Verified in `globals.css` lines 38–39 and `tokens.css` lines 163, 160.                                                                                                          |
| AC-002 | Pass   | All prose typography (headings, links, code, blockquotes, callouts) use Gruvbox token values via CSS custom properties. Verified in `globals.css` dark-mode selectors (lines 88–98, 144–146, 168–171, 194–198, 282–285).                                                      |
| AC-003 | Pass   | Nav background, links, and active-link highlight all use Gruvbox values. Verified: `--nav-bg: #3c3836`, `--nav-link-color: #d5c4a1`, `--nav-active-bg: #fabd2f`, `--nav-active-text: #282828` in `tokens.css` lines 173–177. No Catppuccin hex values in dark-mode selectors. |
| AC-004 | Pass   | Storybook dark theme canvas background is `#282828` (Gruvbox bg0) in `preview.ts` line 30. Component colours match via dark-theme-frame.tsx overrides (lines 8–17).                                                                                                           |
| AC-005 | Pass   | Primary pairing `#ebdbb2` on `#282828` has a contrast ratio of **10.75:1**, far exceeding WCAG AA requirement of 4.5:1. Verified via WCAG contrast calculation.                                                                                                               |
| AC-006 | Pass   | Light mode tokens (`:root` block) remain entirely unchanged. Verified: zero diff output for lines 1–115 of `tokens.css`.                                                                                                                                                      |

## Functional Requirements

| ID     | Result | Notes                                                                                                                                                                                                                                                                                                                                                                                            |
| ------ | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| FR-001 | Pass   | All CSS custom properties under `[data-theme='dark']` in `tokens.css` lines 116–201 use Gruvbox Dark values. No Catppuccin hex values remain. Verified via grep for known Catppuccin hex codes (#cdd6f4, #1e1e2e, #bac2de, #a6adc8, #11111b, #181825, #313244, #45475a, #f38ba8, #eba0ac, #f9e2af, #a6e3a1, #89b4fa, #74c7ec, #f5c2e7, #fab387) — all return zero matches in dark-mode sections. |
| FR-002 | Pass   | Palette comment block updated at lines 117–125 of `tokens.css` documents Gruvbox Dark with full reference (bg0_h, bg0, bg1, bg2, fg1, fg2, fg3, and all accent colours). Previous Catppuccin Mocha reference removed.                                                                                                                                                                            |
| FR-003 | Pass   | `dark-theme-frame.tsx` lines 8–17 hardcoded palette values replaced: `--ds-page` (#1d2021), `--zine-paper` (#282828), `--zine-paper-alt` (#1d2021), `--zine-ink` (#ebdbb2), `--zine-ink-faded` (#d5c4a1), `--zine-muted` (#bdae93), `--zine-red` (#fb4934), `--zine-yellow` (#fabd2f). All Catppuccin values removed.                                                                            |
| FR-004 | Pass   | `preview.ts` lines 29–30: dark mode preset is `#1d2021` (Gruvbox Hard), dark-surface is `#282828` (Gruvbox bg0). Comment at line 24 updated to reference "Gruvbox Hard" instead of "Catppuccin Crust".                                                                                                                                                                                           |
| FR-005 | Pass   | Token name parity verified: 56 token names in old dark block, 56 in new dark block, all identical. No tokens removed or renamed. Only values changed. Example: `--zine-paper` still exists (value changed `#1e1e2e` → `#282828`); `--ds-page` still exists (value changed `#11111b` → `#1d2021`).                                                                                                |
| FR-006 | Pass   | Light mode `:root` block (lines 1–115 of `tokens.css`) shows zero diffs. All light-mode token values and names unchanged. Verified: `--zine-paper: #f2edd7`, `--zine-ink: #0e0c07`, etc. remain identical.                                                                                                                                                                                       |

## Non-Functional Requirements

| ID      | Result | Notes                                                                                                                                                                                                                                                                                                                                                                                   |
| ------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| NFR-001 | Pass   | All critical dark-mode text/background pairings tested for WCAG AA compliance (4.5:1 minimum for normal text): (1) `#ebdbb2` on `#282828` (primary) = **10.75:1** (AAA); (2) `#d5c4a1` on `#3c3836` (nav link) = **6.76:1** (AAA); (3) `#282828` on `#fabd2f` (active nav) = **8.69:1** (AAA); (4) `#bdae93` on `#282828` (muted text) = **6.77:1** (AAA). All exceed AA; all meet AAA. |
| NFR-002 | Pass   | CSS custom property surface area unchanged. Token inventory (56 properties under `[data-theme='dark']`) identical before and after. No new properties introduced; none removed. Only hex values changed.                                                                                                                                                                                |
| NFR-003 | Pass   | Neu-brutalism × punk zine character preserved. Warm earthy Gruvbox tones (browns, muted yellows, creams) replace cool pastels; high-contrast primary pairing (#ebdbb2 on #282828) maintains visual punch. No layout, border, or shadow geometry changes. Verified in git diff: only colour values changed, no structural CSS modifications.                                             |

## Required Tests

| Category | Result  | Notes                                                                                                                                                                                                                                                                                                                             |
| -------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| UT-001   | N/A     | CSS token values are not unit-testable in isolation; correctness verified by AC and usability sign-off.                                                                                                                                                                                                                           |
| IT-001   | N/A     | No API, service, or database boundary crossed. Palette substitution has no integration scope.                                                                                                                                                                                                                                     |
| SMK-001  | Pending | Smoke test (site loads in dark mode without CSS parse errors) is a prerequisite for release but cannot be verified in this code review alone. Requires live dev server execution. Implementation appears syntactically sound (no malformed CSS, all hex values well-formed).                                                      |
| E2E-001  | N/A     | Palette substitution does not change user journey or interaction. Smoke + usability review sufficient.                                                                                                                                                                                                                            |
| REG-001  | N/A     | No previous Gruvbox-related defect to regress.                                                                                                                                                                                                                                                                                    |
| PT-001   | N/A     | CSS custom property substitution has no measurable runtime performance impact.                                                                                                                                                                                                                                                    |
| ST-001   | N/A     | No authentication, authorization, input handling, storage, secrets, or external communication touched.                                                                                                                                                                                                                            |
| UX-001   | Pending | Human visual sign-off required: requester must open site in real browser with dark mode active and confirm body text, headings, links, code blocks, nav, tags, banners, and callouts all render clearly in Gruvbox palette. Cannot be verified in code review. **This is a HITL gate and must be completed before task closure.** |
| UX-002   | Pending | Toggle between light and dark mode to verify smooth transitions and no missing-variable fallbacks or colour flashes. Cannot be verified in code review.                                                                                                                                                                           |
| OT-001   | N/A     | No operationally relevant behaviour changes.                                                                                                                                                                                                                                                                                      |

## Observability Requirements

| ID      | Result | Notes                                                                     |
| ------- | ------ | ------------------------------------------------------------------------- |
| OBS-001 | N/A    | Purely visual change; no logging, metrics, tracing, or analytics surface. |

## Findings

### Blocking

(none)

### Non-blocking

(none)

### Suggestions

(none)

## Unresolved Assumptions

**Visual sign-off required (UX-001, UX-002):** The implementer's summary correctly notes that "the final rendered appearance" cannot be confirmed without human approval. A person with design or accessibility expertise must:

1. Open the site in a browser with dark mode active (`data-theme="dark"`)
2. Verify all surfaces (page, prose, code blocks, nav, callouts, tags, banners) render with Gruvbox Dark palette
3. Confirm text is readable (especially low-luminance pairings like muted text `#bdae93` on `#282828`)
4. Toggle between light and dark mode to check for smooth transitions and no missing-variable fallbacks

**Smoke test (SMK-001):** Dev server must load the updated site without CSS parse errors or visible missing-variable fallbacks in DevTools. Code review confirms syntax is sound; execution is needed.

Once these are complete, the task is ready to mark Done.

---

**Review Summary:**

This is a clean, thorough palette substitution. All 56 dark-mode token names are preserved; only hex values changed. No Catppuccin Mocha values remain in dark-mode CSS (verified by grep for 16 known hex codes across all changed files). Light mode is completely untouched. WCAG AA contrast is exceeded by a large margin across all critical pairings (primary pairing is 10.75:1, well above 4.5:1 minimum). The implementation matches the task specification exactly: `tokens.css` is the single source of truth, and hardcoded values in `preview.ts` and `dark-theme-frame.tsx` correctly reference the new palette.

The task is **Pass** in code review. Release readiness depends on successful smoke test and visual sign-off (UX-001, UX-002).
