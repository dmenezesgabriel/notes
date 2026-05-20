---
task: '011'
title: Improve keyboard, motion, and monospace readability
date: 2026-05-20
status: complete
---

## Files Changed

| File                                                             | Change                                                                                                                                                                                                         |
| ---------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --- | --------------------------------------------------------------------------- |
| `packages/components/src/garden-search/garden-search.ts`         | Added `label` property; `aria-label` uses `label                                                                                                                                                               |     | placeholder`; added outline focus indicator; bumped input font-size 14→16px |
| `packages/components/src/garden-banner/garden-banner.ts`         | Added `@media (prefers-reduced-motion: reduce)` block that sets `animation: none` on `[part='text']`                                                                                                           |
| `packages/components/src/garden-breadcrumb/garden-breadcrumb.ts` | Bumped `li` font-size 12→13px                                                                                                                                                                                  |
| `apps/site/app/components/site-search.tsx`                       | Added `label="Search notes"` attribute to the `<garden-search>` element                                                                                                                                        |
| `apps/site/app/globals.css`                                      | Added `@media (prefers-reduced-motion: reduce)` for `.zine-marquee-text`; bumped `.prose code` 0.875em→0.9em; bumped `.prose .shiki`, `.prose pre:not(.shiki)`, and `.prose pre:not(.shiki) code` from 12→14px |
| `packages/components/src/garden-search/garden-search.test.ts`    | Added UT-001: label-as-accessible-name, placeholder-fallback, and outline focus-indicator CSS tests                                                                                                            |
| `packages/components/src/garden-banner/garden-banner.test.ts`    | Added UX-002: reduced-motion CSS presence test                                                                                                                                                                 |
| `apps/site/app/components/site-search.test.tsx`                  | Created UT-002: verifies `setCustomElementProperty` assigns `label` and `value` through the React-Lit adapter boundary                                                                                         |

## Behavior Implemented

- **FR-001/AC-001**: `garden-search` now exposes a dedicated `label` property for its accessible name. `aria-label` resolves to `label` when set, falling back to `placeholder`. The site wrapper passes `label="Search notes"` so the accessible name is stable and does not depend on visible placeholder text.
- **FR-002/AC-001**: `[role='search']:focus-within` now renders a 3px yellow (`--zine-yellow`) outline in addition to the existing translate transform, giving keyboard users a clearly visible focus ring in both light and dark themes.
- **FR-003/AC-002**: `site-search.tsx` passes `label` as a static JSX attribute. Dynamic query value continues to flow through `setCustomElementProperty` as before.
- **FR-004/AC-003**: Both `garden-banner` (Lit component) and `.zine-marquee-text` (site CSS class) stop their marquee animation under `prefers-reduced-motion: reduce`.
- **FR-005/AC-004**: Monospace type is more readable: search input at 16px, breadcrumb items at 13px, prose inline code at 0.9em, prose code blocks at 14px.

## Tests Added or Updated

- **UT-001** (`garden-search.test.ts`): 3 new tests — label accessible name, placeholder fallback, outline focus indicator in CSS. Total: 10 tests, all passing.
- **UX-002** (`garden-banner.test.ts`): 1 new test — `prefers-reduced-motion` in CSS. Total: 9 tests, all passing.
- **UT-002** (`site-search.test.tsx`, new file): 2 tests — adapter property assignment for `label` and `value`.

## Validations Run

- `pnpm -C packages/components test`: **126/126 pass**
- `pnpm -C apps/site test`: **59/60 pass** — 1 failure is pre-existing `site-nav` test unrelated to this task (confirmed by running tests against the baseline commit)
- `pnpm -C packages/components lint`: clean
- `pnpm -C apps/site lint`: clean
- `pnpm -C packages/components build`: clean (TypeScript)

## Accessibility Checks

- `aria-label` is now sourced from an explicit `label` property, not placeholder text — satisfies WCAG 2.1 SC 4.1.2 (Name, Role, Value).
- Focus indicator uses `outline` with sufficient contrast (`--zine-yellow` on the dark border background) — satisfies WCAG 2.1 SC 1.4.11 (Non-text Contrast).
- Reduced-motion fallback is CSS-only and applies automatically — satisfies WCAG 2.1 SC 2.3.3 (Animation from Interactions).

## Non-Applicable Test Categories (from task)

- **SMK-001**: No deployment or startup surface touched.
- **REG-001**: No tracked defect ID for these issues.
- **PT-001**: No new performance target added.
- **ST-001**: No auth, secrets, or untrusted input handling changed.
- **OT-001**: No logs, metrics, or analytics events added.
- **IT-001/E2E-001**: Integration and E2E tests require a running Next.js app and Playwright browser; these surfaces are not exercised in the unit/adapter test layer. The unit and adapter tests together cover the same contract: label passed through the boundary, query sync preserved.

## Unresolved Assumptions

- **site-nav pre-existing test failure** (`site-nav.test.tsx`): `homehref` attribute not set on the rendered nav element. This failure exists on `master` before this task's changes and is out of scope.
- **E2E-001**: A full Playwright keyboard-navigation test against the running site would give the strongest AC-001/AC-002 confidence but was not run in this session (no browser environment available). The unit tests cover the contract; visual verification of the focus ring requires a browser.
