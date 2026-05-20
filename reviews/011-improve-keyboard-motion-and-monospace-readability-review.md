---
id: '011'
issue: 'issues/011-improve-keyboard-motion-and-monospace-readability.md'
created: 2026-05-20
updated: 2026-05-20
---

# Review: Improve keyboard, motion, and monospace readability

## Related Task

- `issues/011-improve-keyboard-motion-and-monospace-readability.md`

## Overall Verdict

**Pass**

No Blocking findings. Four non-blocking gaps and one suggestion should be addressed before or during a follow-up.

## Findings

| ID    | Level        | Requirement     | Description                                                                                                                                                                                                                                        | Evidence                                                                                                     |
| ----- | ------------ | --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| F-001 | Non-blocking | UX-001, OBS-003 | No test verifies the new font sizes for breadcrumb (13px), prose inline code (0.9em), or code blocks (14px). OBS-003 requires assertions, not just CSS edits.                                                                                      | `packages/components/src/garden-breadcrumb/garden-breadcrumb.ts:57`, `apps/site/app/globals.css:187,211,224` |
| F-002 | Non-blocking | IT-001          | `site-search.test.tsx` tests `setCustomElementProperty` directly rather than rendering `SiteSearchInner`. The full integration scenario (label stability through router navigation) is not exercised.                                              | `apps/site/app/components/site-search.test.tsx:1–20`                                                         |
| F-003 | Non-blocking | OBS-002         | UX-002 verifies reduced-motion only in `GardenBanner` Lit styles. The site-level `.zine-marquee-text` reduced-motion block in `globals.css` has no test; a future deletion would be invisible.                                                     | `apps/site/app/globals.css:345–349`                                                                          |
| F-004 | Non-blocking | DoD             | Definition of Done requires "Representative Storybook stories show the corrected focus, motion, and readable monospace treatments." No Storybook story files appear in the diff.                                                                   | git diff — no `*.stories.ts` files modified                                                                  |
| F-005 | Suggestion   | —               | `[role='search']` has `transition: transform 0.1s` with no `prefers-reduced-motion` guard. FR-004 targets banner/marquee only, so this is not required, but disabling the transform under reduced-motion would improve parity with the banner fix. | `packages/components/src/garden-search/garden-search.ts:42`                                                  |

## AC Evaluation

| AC     | Result | Notes                                                                                                                                                                                                                      |
| ------ | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AC-001 | Pass   | `[role='search']:focus-within` now has `outline: 3px solid var(--zine-yellow)` + `outline-offset: 2px`. `aria-label` resolves to `label` when set, confirmed by UT-001 tests.                                              |
| AC-002 | Pass   | `label="Search notes"` is a static JSX attribute and persists through query changes. `setCustomElementProperty` keeps `value` in sync with `currentQuery`. Behavior is implemented; F-002 flags the weak integration test. |
| AC-003 | Pass   | `garden-banner.ts` and `globals.css` both add `@media (prefers-reduced-motion: reduce) { animation: none }`. UX-002 test verifies the Lit component CSS.                                                                   |
| AC-004 | Pass   | Breadcrumb 12→13px, search input 14→16px, inline code 0.875em→0.9em, code blocks 12→14px. CSS changes are in the diff. F-001 flags the missing UX-001 assertion test.                                                      |

## Test Coverage Evaluation

| Test Category          | Status            | Notes                                                                                                                                  |
| ---------------------- | ----------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| Unit (UT-001)          | Present           | `packages/components/src/garden-search/garden-search.test.ts` — 3 new tests: label name, placeholder fallback, outline CSS.            |
| Unit (UT-002)          | Present (partial) | `apps/site/app/components/site-search.test.tsx` — tests adapter functions directly; does not render `SiteSearchInner`. See F-002.      |
| Integration (IT-001)   | Partial           | No rendering-level integration test for the `SiteSearchInner` component with a simulated router. See F-002.                            |
| Smoke (SMK-001)        | Not applicable    | Issue: no startup or deployment surface changed.                                                                                       |
| End-to-End (E2E-001)   | Not applicable    | No Playwright environment available; implementer documented this in Unresolved Assumptions.                                            |
| Regression (REG-001)   | Not applicable    | Issue: no tracked defect ID.                                                                                                           |
| Performance (PT-001)   | Not applicable    | Issue: no new measured performance target.                                                                                             |
| Security (ST-001)      | Not applicable    | Issue: no auth, authorization, or untrusted input changes.                                                                             |
| Usability (UX-001)     | Missing           | No test asserts the new breadcrumb, inline-code, or code-block font sizes. See F-001.                                                  |
| Usability (UX-002)     | Present           | `packages/components/src/garden-banner/garden-banner.test.ts` — verifies `prefers-reduced-motion` and `animation: none` in Lit styles. |
| Observability (OT-001) | Not applicable    | Issue: no runtime logs, metrics, or analytics events added.                                                                            |

## Observability Evaluation

| OBS ID  | Requirement                                                                                                  | Status  | Notes                                                                                                                 |
| ------- | ------------------------------------------------------------------------------------------------------------ | ------- | --------------------------------------------------------------------------------------------------------------------- |
| OBS-001 | Component and app tests must make the search control's accessible name and keyboard focus behavior explicit. | Met     | UT-001 adds three explicit tests for label name, placeholder fallback, and CSS outline.                               |
| OBS-002 | Reduced-motion behavior must be verified in tests or stories so future motion regressions are visible.       | Partial | UX-002 covers `garden-banner` Lit styles only. Site-level `globals.css` reduced-motion block is untested. See F-003.  |
| OBS-003 | Typography changes must be validated through focused component or app assertions.                            | Partial | Font-size CSS edits are present in the diff; no assertion verifies the new values. UX-001 test is missing. See F-001. |

## ADR Compliance

Not applicable — no ADR dependencies listed in the task.

## Convention Notes

- `F-002` — Non-blocking — `site-search.test.tsx` follows the `// @vitest-environment happy-dom` header pattern from `react-lit-adapter.test.ts`, which is consistent. However, the test exercises the adapter helper functions directly rather than rendering `SiteSearchInner` as other component-slice tests (`home-page-slice.test.tsx`, `note-page-slice.test.tsx`) do. A rendering-level test would align better with the existing integration test convention.
- `F-005` — Suggestion — All other focus/motion CSS in this task uses token-backed fallbacks. Adding a `@media (prefers-reduced-motion: reduce)` guard to the `transition: transform 0.1s` on `[role='search']` would complete the motion-safety story without conflicting with NFR-001.

## Unresolved Assumptions or Follow-Up

- **E2E-001**: No Playwright keyboard-navigation test was run against the live site. Implementer noted no browser environment was available. A manual smoke-check or a future Playwright run remains the most direct way to verify AC-001 and AC-002 end-to-end.
- **Storybook stories** (F-004): The DoD required Storybook stories to reflect the corrected focus, motion, and monospace treatments. These were not updated. Should be addressed before or immediately after shipping.
- **Site-level reduced-motion test** (F-003): The `globals.css` `@media (prefers-reduced-motion: reduce)` block for `.zine-marquee-text` has no automated test. A CSS assertion test similar to UX-002 (but targeting site-level styles) would close this gap.
- **UX-001 font-size assertions** (F-001): A style-text assertion similar to the existing banner and search CSS tests could verify the new breadcrumb (13px) and code-block (14px) sizes without requiring a browser.
