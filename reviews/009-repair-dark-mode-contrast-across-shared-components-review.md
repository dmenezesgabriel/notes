---
id: '009'
issue: 'issues/009-repair-dark-mode-contrast-across-shared-components.md'
created: 2026-05-20
updated: 2026-05-20
---

# Review: Repair dark-mode contrast across shared components

## Related Task

- `issues/009-repair-dark-mode-contrast-across-shared-components.md`

## Overall Verdict

**Pass**

No Blocking findings. Two Non-blocking findings and two Suggestions should be addressed in follow-up.

## Findings

| ID    | Level        | Requirement | Description                                                                                                                                                                       | Evidence                                                                      |
| ----- | ------------ | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| F-001 | Non-blocking | NFR-003     | `dark-theme-frame.tsx` exports `darkFilledComponentTokens`, `darkBannerTokens`, and `darkNavTokens` with hardcoded Catppuccin palette values that duplicate `tokens.css`. If dark-mode palette values are later updated in the Token Source of Truth, these story helpers silently become stale and may produce false-positive contrast passes. | `apps/storybook/src/stories/story-helpers/dark-theme-frame.tsx` lines 10–47  |
| F-002 | Non-blocking | —           | Ghost button hover color regression: the old `button.ghost:hover { color: var(--zine-ink) }` rule was removed and the `updated()` lifecycle assigns a static muted color regardless of hover state. Ghost button text no longer shifts to ink on hover. Ghost is outside the failing-component scope, but the behavior change is undocumented. | `packages/components/src/garden-button/garden-button.ts` lines 105–115 (CSS removed) |
| F-003 | Non-blocking | OBS-001     | `garden-banner` has a redundant color assignment: `:host { color: var(--zine-banner-text, #fff) }` is already in the shadow stylesheet, yet `updated()` also sets `this.style.color = 'var(--zine-banner-text, #fff)'`. The inline style overrides the CSS rule (higher specificity) and runs on every update cycle unnecessarily. Button and tag need `updated()` due to variant branching; banner does not. | `packages/components/src/garden-banner/garden-banner.ts` line 78 and CSS `:host` block |
| F-004 | Suggestion   | UT-001, UT-002, UT-003 | Unit tests for button, tag, nav, and banner assert contrast token presence by inspecting the source string of `updated()` and the serialised stylesheet (`String(GardenButton.styles)`). Source-string inspection will break under any refactor that extracts token names into constants or renames the lifecycle method, even when behavior is unchanged. Tests that assert the resolved `style.color` on a rendered element instance would be more durable. | `packages/components/src/garden-button/garden-button.test.ts` lines 77–84; analogous in tag, nav, banner tests |
| F-005 | Suggestion   | NFR-003     | Nav active link background and color are now applied with `styleMap` inline styles instead of CSS rules. While the inline values still reference CSS custom properties (`var(--nav-active-bg)`), moving state-driven presentation from stylesheet to JS template makes it harder for consumers to override via CSS selectors. A pure-CSS approach using `:host` attribute selectors or CSS `[aria-current='page']` rules within the component stylesheet would keep the Token Source of Truth purely in CSS. | `packages/components/src/garden-nav/garden-nav.ts` lines 267–290 (template render) |

## AC Evaluation

| AC     | Result | Notes                                                                                                                                                                                                                                                      |
| ------ | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AC-001 | Pass   | `garden-button` filled variants (primary, yellow, blue) use `--zine-filled-text` / `--zine-light-fill-text` tokens via `updated()`. `DarkModeContrastReview` story asserts `expectShadowTextContrast` for all three variants. Validation run passed.       |
| AC-002 | Pass   | `garden-tag` filled variants (accent, sage, green, blue, yellow) apply the same token pattern. `DarkModeContrastReview` story asserts contrast for filled tags. Validation run passed.                                                                      |
| AC-003 | Pass   | `garden-banner` preserves the marquee composition; marquee text color moves from `--zine-yellow` to host-inherited `--zine-banner-text`. In dark mode this resolves to `#1e1e2e` on `#f38ba8` (Catppuccin red), giving approx 7:1 contrast. Story asserts `expectShadowTextContrast` on `[part="text"]`. |
| AC-004 | Pass   | `garden-nav` active links and theme-toggle buttons receive distinct colors via `styleMap`. Story asserts `aria-pressed` state semantics and `expectShadowTextContrast` for active link, inactive link, active dark-theme button, and inactive light-theme button. |

## Test Coverage Evaluation

| Test Category        | Status         | Notes                                                                                                                                        |
| -------------------- | -------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Unit (UT-001)        | Present        | `packages/components/src/garden-button/garden-button.test.ts` — asserts `--zine-filled-text` token present in `updated()` and `color: inherit` in stylesheet. See F-004 for fragility concern. |
| Unit (UT-002)        | Present        | `packages/components/src/garden-tag/garden-tag.test.ts` — same pattern.                                                                     |
| Unit (UT-003)        | Present        | `packages/components/src/garden-nav/garden-nav.test.ts` — asserts `--nav-active-text`, `--nav-active-bg`, `--nav-link-color`, `--nav-toggle-icon` present in `render()` source string. |
| Integration (IT-001) | Present        | `DarkModeContrastReview` stories added to all four affected component story files; tagged `dark-contrast`; play assertions use `expectShadowTextContrast`. |
| Smoke (SMK-001)      | Not applicable | Not applicable — task changes shared styling, not app startup or deployment availability.                                                    |
| E2E (E2E-001)        | Not applicable | Not applicable — risk is component-state contrast parity, covered by shared component tests and focused Storybook review stories.            |
| Regression (REG-001) | Not applicable | Not applicable — no tracked defect ID for the newly confirmed contrast failures.                                                             |
| Performance (PT-001) | Not applicable | Not applicable — no performance-sensitive runtime behavior changed.                                                                          |
| Security (ST-001)    | Not applicable | Not applicable — no auth, authorization, secrets, or untrusted input handling changed.                                                       |
| Usability (UX-001)   | Present        | `garden-nav` `DarkModeContrastReview` story asserts `aria-pressed` attributes for both theme-toggle buttons, confirming keyboard users can distinguish active vs inactive state. |
| Observability (OT-001) | Present      | Storybook test runner was executed against the built static bundle with `--includeTags dark-contrast`; validation summary reports pass. All four `DarkModeContrastReview` stories carry the `dark-contrast` tag.    |

## Observability Evaluation

| OBS ID  | Requirement                                                                                        | Status  | Notes                                                                                                                                          |
| ------- | -------------------------------------------------------------------------------------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| OBS-001 | Tests assert rendered dark-theme classes, tokens, or computed foreground assignments               | Met     | Unit tests inspect token names in serialized stylesheet and `updated()` source string. See F-004 for fragility concern (source-string vs. rendered value). |
| OBS-002 | Storybook accessibility checks fail visibly if dark-mode contrast regresses                        | Met     | `expectShadowTextContrast` uses the WCAG luminance formula against `getComputedStyle` values; tagged stories fail if ratio drops below 4.5:1.  |
| OBS-003 | No ad hoc runtime logging; verification stays test- and story-driven                              | Met     | No `console.log`, metrics, or traces introduced. Contrast verification is story-only.                                                          |

## ADR Compliance

Not applicable — no ADR dependencies listed in the task.

## Convention Notes

- `F-001` — Non-blocking — `dark-theme-frame.tsx` duplicates the dark-mode palette values already present in `tokens.css`. The `DarkThemeFrame` component sets `data-theme="dark"` on `document.documentElement` via `useLayoutEffect`, and `tokens.css` is already imported globally in `preview.ts`, so the CSS custom properties from `[data-theme='dark']` cascade automatically. The inline token overrides on each component are therefore redundant and create a maintenance drift risk. Recommended follow-up: remove the explicit `darkFilledComponentTokens`, `darkBannerTokens`, and `darkNavTokens` inline overrides from the story helpers and verify the contrast assertions still pass with tokens sourced solely from `tokens.css`.

- `F-002` — Non-blocking — Ghost button hover color change (ink on hover) was an undocumented regression of the `updated()` refactor. If hover color feedback for the ghost variant is intentional product behavior, it should be restored via a CSS `:host(:hover)` rule or a `mouseenter`/`mouseleave` listener.

- `F-003` — Non-blocking — `garden-banner` `updated()` is redundant; the `:host { color: var(--zine-banner-text, #fff) }` CSS rule already covers the same assignment and does not require branching logic. The `updated()` override adds inline style specificity unnecessarily.

- `F-004` — Suggestion — Unit tests that serialize function bodies or stylesheet text are fragile under refactoring. Consider using `@web/test-runner` or `@open-wc/testing` fixtures with actual DOM rendering and `getComputedStyle` assertions to verify the resolved `color` value on the element.

- `F-005` — Suggestion — Moving nav active-link color/background to `styleMap` inline styles reduces CSS overrideability. If the component API supports consumer token customization, keeping these as CSS rules with CSS custom property references (e.g., `[part='link'][aria-current='page'] { background: var(--nav-active-bg); color: var(--nav-active-text); }`) preserves that contract.

## Unresolved Assumptions or Follow-Up

- The Storybook test runner (`pnpm exec test-storybook`) execution is reported only via the implementation summary's validation log. The actual pass/fail output was not observable in this review session. Results are accepted based on the reported summary.
- OT-001 verification relies on the implementation summary's claim that `pnpm -C apps/storybook exec test-storybook --url http://127.0.0.1:7007 --includeTags dark-contrast --maxWorkers 1 --testTimeout 30000` passed. Follow-up: run this command independently to confirm.
- F-001 follow-up: once the redundant inline story-helper token overrides are removed, re-run the dark-contrast story suite to confirm contrast assertions still pass via `tokens.css` alone.
