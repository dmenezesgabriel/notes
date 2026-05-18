---
id: '006'
issue: 'issues/006-migrate-home-discovery-slice.md'
created: 2026-05-17
updated: 2026-05-18
---

# Implementation Summary: Migrate the home discovery slice

## Related Task

- `issues/006-migrate-home-discovery-slice.md`

## Files Changed

- `apps/site/app/page.tsx` — simplified the route to delegate the landing experience to the route-local home slice.
- `apps/site/app/components/home-page-content.tsx` — converted the client wrapper into a thin search-param adapter around the route-local home slice.
- `apps/site/app/components/home-page-slice.tsx` — added the explicit route-local home discovery slice that owns the hero, default category sections, search results state, and no-results state, and now keeps the hero/search visible in query states.
- `apps/site/app/lib/home-discovery.ts` — extracted home discovery helpers for category labels, excerpt cleaning, search matching, and default/results/no-results state derivation.
- `apps/site/app/lib/home-discovery.test.ts` — added unit coverage for excerpt cleaning, search matching, and home discovery state selection.
- `apps/site/app/components/home-page-slice.test.tsx` — added integration-style coverage for default, results, and no-results home states with real manifest data, including search-slot presence in query states.
- `apps/site/app/lib/home-discovery-storybook.test.ts` — added repo-level validation that Storybook documents the relevant shared card and search states for the home discovery slice.
- `apps/site/e2e/home.spec.ts` — extended the home E2E coverage to verify matching results, no-results copy, results count, clear action behavior, and search UI persistence after query sync.
- `apps/storybook/src/stories/garden-card.stories.tsx` — documented a real-content home discovery card grid state.
- `apps/storybook/src/stories/garden-search.stories.tsx` — documented a home-hero search state using the live landing-page search copy.

## Behavior Implemented

- Added an explicit route-local `HomePageSlice` so the public landing experience is composed through one site-owned Page boundary instead of being split across `page.tsx` and heavy inline rendering.
- Preserved the accepted Component Promotion Boundary:
  - route-specific hero and category-section composition stays in `apps/site`
  - shared `garden-card` and `garden-search` remain shared building blocks
- Preserved the accepted React-Lit Adapter boundary by keeping `SiteSearch` as the app-level adapter and passing it into the route-local slice rather than moving search behavior into the shared component package.
- Preserved the home route behaviors for:
  - default discovery state with hero and categorized note listings
  - matching search results with a results header, results count, and the landing-page search UI still available above the results
  - no-results search state with clear copy, a clear action, and the landing-page search UI still available above the feedback
- Kept the route responsive by preserving the existing grid and layout structure while moving the state logic into testable helpers.
- Added Storybook coverage for the relevant shared home-building blocks using real-content card and search states.

## Tests Added or Updated

- `apps/site/app/lib/home-discovery.test.ts` — verifies excerpt cleaning, home search matching, and default/results/no-results state derivation. Covers `UT-001` and `UT-002`.
- `apps/site/app/components/home-page-slice.test.tsx` — verifies the home route composes hero content, category sections, search results, no-results behavior, and preserved search-slot visibility from real manifest data. Covers `IT-001` and strengthens `OBS-003` coverage.
- `apps/site/app/lib/home-discovery-storybook.test.ts` — verifies Storybook documents the relevant shared card and search states for the home discovery slice. Supports `FR-005` and `OBS-001`.
- `apps/site/e2e/home.spec.ts` — verifies reader-visible matching results and no-results search behavior, results count visibility, clear action behavior, and persisted search UI/value in query states. Covers `E2E-001`, `UX-001`, and strengthens `OBS-003` coverage.

## Test Categories Not Applicable

- `Regression`: Not applicable — there is no known previous defect ID tied to the landing-page refactor.
- `Performance`: Not applicable — the task preserves the current client-side search model and does not introduce a new measured performance requirement.
- `Security`: Not applicable — the task does not change authentication, authorization, secrets, or untrusted input handling.
- `Observability`: Not applicable — the task does not add runtime telemetry beyond explicit state coverage in route and story tests.

## Validation Run

```text
pnpm -C apps/site test app/components/home-page-slice.test.tsx app/lib/home-discovery.test.ts — passed
pnpm -C apps/site typecheck — passed
CI=1 pnpm -C apps/site exec playwright test e2e/home.spec.ts — passed

Earlier issue-level validation also passed:
pnpm -C apps/site test
pnpm -C apps/storybook typecheck
CI=1 pnpm -C apps/site exec playwright test e2e/accessibility.spec.ts
pnpm -C packages/components build
pnpm content:build && pnpm -C apps/site build
pnpm -C apps/storybook build
```

## Accessibility Notes

- Verified the home search flow in Playwright with accessible searchbox and clear-link interactions.
- Kept the no-results message in a `role="status"` live region so screen readers receive explicit feedback when a query has no matches.
- Preserved the main landmark, hero copy, and categorized section headings for the landing page.

## Observability Changes

- Not applicable — no logs, metrics, traces, or analytics were added or changed.

## ADR Updates

- None. The implementation follows the accepted boundaries from ADR `001` and ADR `003` without changing their decisions.

## Unresolved Assumptions or Follow-Up

- Because the repository contains unrelated in-progress changes in `packages/components`, one earlier site build attempt failed with a transient `/_document` resolution error before the final validation run. Rebuilding `packages/components` and rerunning the site build resolved it; Issue `006` itself does not depend on a new package-components behavior.
- `apps/site/e2e/navigation.spec.ts` still contains an unrelated flaky brand-link assertion outside the scope of Issue `006`.
- The repository still contains unrelated uncommitted work from earlier issues; this summary covers only the files and behavior relevant to Issue `006`.
