---
id: '007'
issue: 'issues/007-standardize-react-lit-interop-and-nav.md'
created: 2026-05-18
updated: 2026-05-18
---

# Review: Standardize React-Lit interop and migrate the nav/theme slice

## Related Task

- `issues/007-standardize-react-lit-interop-and-nav.md`

## Overall Verdict

**Pass**

No Blocking findings.

## Findings

| ID   | Level | Requirement | Description                                                                                                                                                                                                                                                                                         | Evidence                                                                                                                                                                                                                                                                                                                                                                                                        |
| ---- | ----- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| None | —     | —           | No Blocking, Non-blocking, or Suggestion findings. The in-scope custom elements now share one app-level React-Lit adapter boundary, nav theme persistence remains intact across navigation/reload, Storybook documents realistic route context, and the required tests/typechecks passed in review. | `apps/site/app/lib/react-lit-adapter.ts:11-132`, `apps/site/app/components/site-nav.tsx:17-69`, `apps/site/app/lib/theme-preference.ts:1-60`, `apps/storybook/src/stories/garden-nav.stories.tsx:9-159`, `apps/site/app/lib/react-lit-adapter.test.ts:15-120`, `apps/site/app/lib/theme-preference.test.ts:13-84`, `apps/site/app/components/site-nav.test.tsx:30-99`, `apps/site/e2e/navigation.spec.ts:36-58` |

## AC Evaluation

| AC     | Result | Notes                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ------ | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AC-001 | Pass   | Supported custom elements in scope use the centralized adapter helpers for property assignment and custom-event wiring instead of route-local `any` casts: `site-nav`, `site-search`, `site-breadcrumb`, and `site-toc` all delegate through `react-lit-adapter.ts`. Verified in `apps/site/app/lib/react-lit-adapter.ts:64-116`, `apps/site/app/components/site-nav.tsx:45-66`, `apps/site/app/components/site-search.tsx:19-40`, `apps/site/app/components/site-breadcrumb.tsx:22-29`, and `apps/site/app/components/site-toc.tsx:23-30`. |
| AC-002 | Pass   | Theme changes are applied to `<html>`, persisted to localStorage, restored by the shared bootstrap script, and covered across navigation/reload. Verified in `apps/site/app/lib/theme-preference.ts:3-60`, `apps/site/app/layout.tsx:32-37`, `apps/site/app/components/site-nav.tsx:45-60`, and `apps/site/e2e/navigation.spec.ts:36-58`.                                                                                                                                                                                                   |
| AC-003 | Pass   | Active links are derived from the current route and set on `garden-nav`; both integration and E2E coverage verify the correct active link renders on route changes. Verified in `apps/site/app/components/site-nav.tsx:17-31`, `apps/site/app/components/site-nav.tsx:64-66`, `apps/site/app/components/site-nav.test.tsx:70-82`, and `apps/site/e2e/navigation.spec.ts:48-57`.                                                                                                                                                             |

## Test Coverage Evaluation

| Test Category          | Status         | Notes                                                                                                                                                                                                                                                                                            |
| ---------------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Unit (UT-001)          | Present        | `apps/site/app/lib/react-lit-adapter.test.ts:15-120` verifies centralized property assignment, deferred upgrade handling, imperative method calls, custom-event wiring, and supported breadcrumb/TOC mapping. Review run passed: `pnpm -C apps/site test app/lib/react-lit-adapter.test.ts ...`. |
| Unit (UT-002)          | Present        | `apps/site/app/lib/theme-preference.test.ts:13-84` verifies supported theme read/write behavior, invalid value handling, document-theme syncing, and bootstrap-script contract.                                                                                                                  |
| Integration (IT-001)   | Present        | `apps/site/app/components/site-nav.test.tsx:30-99` renders `SiteNav`, verifies assigned links/home href, active-link state, and theme-change persistence through the centralized boundary.                                                                                                       |
| Smoke (SMK-001)        | Present        | `apps/site/e2e/navigation.spec.ts:27-34` and `apps/site/e2e/navigation.spec.ts:36-58` exercise the shared layout with the standardized nav loaded in a running site; review run passed: `CI=1 pnpm -C apps/site exec playwright test e2e/navigation.spec.ts`.                                    |
| End-to-End (E2E-001)   | Present        | `apps/site/e2e/navigation.spec.ts:36-58` verifies keyboard theme toggling, persistence across route changes and reload, and correct active-link visibility on the destination route.                                                                                                             |
| Regression (REG-001)   | Not applicable | Not applicable — there is no single tracked defect ID for the current wrapper duplication or nav migration yet.                                                                                                                                                                                  |
| Performance (PT-001)   | Not applicable | Not applicable — this task reorganizes adapter logic and theme behavior without introducing a new measured performance target.                                                                                                                                                                   |
| Security (ST-001)      | Not applicable | Not applicable — this task does not change authentication, authorization, secrets, or untrusted input handling.                                                                                                                                                                                  |
| Usability (UX-001)     | Present        | `apps/site/e2e/navigation.spec.ts:27-34` and `apps/site/e2e/navigation.spec.ts:36-58` verify keyboard-focusable brand/theme controls, keyboard activation of the theme toggle, `aria-pressed` state, and visible active-link state.                                                              |
| Observability (OT-001) | Not applicable | Not applicable — this task does not add new runtime logs, metrics, traces, or analytics events.                                                                                                                                                                                                  |

## Observability Evaluation

| OBS ID  | Requirement                                                                                                 | Status | Notes                                                                                                                                                                                                                                                                                                                                                                                                 |
| ------- | ----------------------------------------------------------------------------------------------------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| OBS-001 | Typecheck failures must surface missing custom-element typings or adapter drift clearly.                    | Met    | Site and Storybook typings now reference shared component contracts for the supported elements in scope, and both typecheck runs passed in review. Verified in `apps/site/app/types.d.ts:19-25`, `apps/site/app/types.d.ts:48-53`, `apps/site/app/types.d.ts:79-84`, `apps/storybook/src/custom-elements.d.ts:46-90`; review runs: `pnpm -C apps/site typecheck`, `pnpm -C apps/storybook typecheck`. |
| OBS-002 | Tests must make theme persistence and active-link behavior visible across route changes.                    | Met    | Integration and E2E tests explicitly assert `aria-current`, `data-theme`, persisted theme state, and reload behavior. Verified in `apps/site/app/components/site-nav.test.tsx:70-99` and `apps/site/e2e/navigation.spec.ts:36-58`.                                                                                                                                                                    |
| OBS-003 | Storybook must expose nav behavior in realistic page context so regressions are easy to spot during review. | Met    | Storybook now includes explicit home-route and note-route context stories, and repo-level test coverage asserts those contexts remain present. Verified in `apps/storybook/src/stories/garden-nav.stories.tsx:53-159` and `apps/site/app/lib/navigation-storybook.test.ts:14-22`.                                                                                                                     |

## ADR Compliance

| ADR                                             | Required Action                                                  | Status |
| ----------------------------------------------- | ---------------------------------------------------------------- | ------ |
| `docs/adrs/002-design-token-source-of-truth.md` | Be accepted or have no open question blocking theme token usage. | Done   |
| `docs/adrs/003-react-lit-interop-boundary.md`   | Be accepted or have no open question blocking adapter placement. | Done   |

## Convention Notes

None.

## Unresolved Assumptions or Follow-Up

- The working tree contains unrelated in-progress changes from other issues; this review was scoped to the Issue `007` files, direct dependencies, and the tests that exercise the nav/theme adapter slice.
