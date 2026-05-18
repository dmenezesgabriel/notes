---
id: '007'
issue: 'issues/007-standardize-react-lit-interop-and-nav.md'
created: '2026-05-18'
updated: '2026-05-18'
---

# Implementation Summary: Standardize React-Lit interop and migrate the nav/theme slice

## Related Task

- `issues/007-standardize-react-lit-interop-and-nav.md`

## Files Changed

- `apps/site/app/components/site-nav.tsx` — moved nav/theme interop onto the centralized adapter boundary, preserved active-link updates, and kept theme persistence wired through the nav event contract.
- `apps/site/app/components/site-search.tsx` — switched search query syncing to the shared React-Lit adapter helpers instead of route-local imperative casts.
- `apps/site/app/components/site-breadcrumb.tsx` — updated the breadcrumb adapter to use the centralized typed element contract.
- `apps/site/app/components/site-toc.tsx` — updated the TOC adapter to use the centralized typed element contract.
- `apps/site/app/layout.tsx` — reused the shared theme bootstrap script for first-paint theme persistence.
- `apps/site/app/types.d.ts` — expanded supported JSX typings for the in-scope custom elements used by the site.
- `apps/site/app/lib/react-lit-adapter.ts` — standardized the app-level React-Lit adapter helpers for property assignment, imperative method calls, custom-event wiring, and supported element typings.
- `apps/site/app/lib/react-lit-adapter.test.ts` — added unit coverage for property assignment, deferred upgrade handling, imperative method calls, custom-event wiring, and existing breadcrumb/TOC mapping helpers.
- `apps/site/app/lib/theme-preference.ts` — extracted safe theme read/write/apply helpers plus the shared layout bootstrap script.
- `apps/site/app/lib/theme-preference.test.ts` — added unit coverage for supported theme persistence and document-theme synchronization.
- `apps/site/app/components/site-nav.test.tsx` — added integration coverage for the centralized nav adapter, active-link assignment, and theme persistence behavior.
- `apps/site/app/lib/navigation-storybook.test.ts` — added repo-level coverage that Storybook documents realistic nav route contexts.
- `apps/site/e2e/navigation.spec.ts` — added end-to-end coverage for keyboard theme toggling, persistence across route changes and reloads, and active-link visibility on the destination route.
- `apps/storybook/src/stories/garden-nav.stories.tsx` — updated nav stories to document realistic home-route and note-route layout contexts.
- `apps/storybook/src/custom-elements.d.ts` — aligned Storybook custom-element typings with the shared `@notes/components` nav, breadcrumb, and TOC contracts to reduce adapter/type drift.
- `implementation/007-standardize-react-lit-interop-and-nav-summary.md` — recorded the implementation details and validation results for this task.

## Behavior Implemented

- Centralized the supported React-Lit adapter boundary in `apps/site/app/lib/react-lit-adapter.ts` so supported custom elements now share one app-level pattern for:
  - complex property assignment
  - imperative method calls
  - custom-event wiring
  - typed supported element contracts
- Reduced route-local wrapper duplication by moving `garden-nav`, `garden-search`, `garden-breadcrumb`, and `garden-toc` onto the same adapter helpers instead of bespoke casts.
- Preserved the framework-agnostic boundary of `packages/components`; all React-specific interop stayed inside `apps/site`.
- Expanded site JSX typings for supported custom elements, including the nav `homeHref`/`links` contract and array-prop contracts for breadcrumb and TOC.
- Aligned Storybook JSX typings with the shared component package contracts for `garden-nav`, `garden-breadcrumb`, and `garden-toc` so page-context stories typecheck against the same shapes as the live site.
- Extracted theme persistence into shared helpers so the layout bootstrap script, nav event handling, and document theme updates stay aligned on the same supported `light`/`dark` contract.
- Preserved `garden-nav` behavior for:
  - active-link updates from the current route
  - theme toggling via `garden-theme-change`
  - persisted theme state across navigation and reloads
- Updated Storybook nav documentation to show realistic home-route and note-route page context instead of only isolated demo states.

## Tests Added or Updated

- `apps/site/app/lib/react-lit-adapter.test.ts` — covers `UT-001` for centralized adapter property assignment, deferred upgrade handling, imperative method calls, custom-event wiring, and supported data mapping.
- `apps/site/app/lib/theme-preference.test.ts` — covers `UT-002` for safe theme persistence and document-theme helpers.
- `apps/site/app/components/site-nav.test.tsx` — covers `IT-001` for nav adapter behavior, active-link assignment, and theme persistence from the centralized boundary.
- `apps/site/app/lib/navigation-storybook.test.ts` — supports `FR-004` and `OBS-003` by asserting realistic nav route-context stories exist.
- `apps/site/e2e/navigation.spec.ts` — covers `SMK-001`, `E2E-001`, and `UX-001` for layout load, keyboard theme toggling, persistence across route changes/reload, and destination active-link visibility.

## Test Categories Not Applicable

- `Regression`: Not applicable — there is no single tracked defect ID for the current adapter duplication or nav/theme migration.
- `Performance`: Not applicable — this task reorganizes adapter logic and theme behavior without introducing a new measured performance target.
- `Security`: Not applicable — this task does not change authentication, authorization, secrets, or untrusted input handling.
- `Observability`: Not applicable — this task does not add runtime telemetry beyond typecheck, story coverage, and explicit behavior tests.

## Validation Run

```text
pnpm -C apps/site test app/lib/react-lit-adapter.test.ts app/lib/theme-preference.test.ts app/components/site-nav.test.tsx app/lib/navigation-storybook.test.ts — passed
pnpm -C apps/site typecheck — passed
pnpm -C apps/storybook typecheck — passed
CI=1 pnpm -C apps/site exec playwright test e2e/navigation.spec.ts — passed
```

## Accessibility Notes

- Verified keyboard activation of the nav theme toggle in Playwright.
- Preserved the existing semantic button and `aria-pressed` behavior for light/dark theme state.
- Kept the route-local nav smoke coverage focused on keyboard-focusable brand/navigation affordances and visible active-link state.

## Observability Changes

- Not applicable — no logs, metrics, traces, or analytics were added or changed.

## ADR Updates

- None. The implementation followed ADR `002` and ADR `003` without changing their accepted decisions.

## Unresolved Assumptions or Follow-Up

- The repository still contains unrelated in-progress work from earlier issues; this summary covers only the files and behavior relevant to Issue `007`.
- The nav brand link still renders with `/` in the current dev runtime even though the issue contract did not require brand-link route assertions; the new smoke coverage verifies that the brand affordance remains present and keyboard-focusable, but a dedicated follow-up should reconcile the brand-home URL with the `/notes/...` public path contract.
