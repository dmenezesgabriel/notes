---
id: '006'
issue: 'issues/006-migrate-home-discovery-slice.md'
created: 2026-05-18
updated: 2026-05-18
---

# Review: Migrate the home discovery slice

## Related Task

- `issues/006-migrate-home-discovery-slice.md`

## Overall Verdict

**Pass**

No Blocking findings.

## Findings

| ID   | Level | Requirement | Description                                                                                                                                                                                                      | Evidence                                                                                                                                                                                                     |
| ---- | ----- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| None | —     | —           | No Blocking, Non-blocking, or Suggestion findings. The latest fixes restore persistent home search UI in query states and the required coverage now verifies default, results, and no-results behavior directly. | `apps/site/app/components/home-page-slice.tsx:36-154`, `apps/site/app/components/home-page-slice.tsx:298-395`, `apps/site/app/components/home-page-slice.test.tsx:31-50`, `apps/site/e2e/home.spec.ts:74-98` |

## AC Evaluation

| AC     | Result | Notes                                                                                                                                                                                                                                                                                                                                                                        |
| ------ | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AC-001 | Pass   | Default state renders the marquee, hero, category sections, and note cards when no query is present. Verified in `apps/site/app/components/home-page-slice.tsx:22-296` and `apps/site/app/components/home-page-slice.test.tsx:18-29`.                                                                                                                                        |
| AC-002 | Pass   | Matching-query state renders a `RESULTS FOR` header, results count, matching cards, and keeps the search UI available. Verified in `apps/site/app/components/home-page-slice.tsx:36-154`, `apps/site/app/components/home-page-slice.tsx:298-386`, `apps/site/app/components/home-page-slice.test.tsx:31-39`, and `apps/site/e2e/home.spec.ts:80-86`.                         |
| AC-003 | Pass   | No-results state renders a clear no-results message and preserves a clear/reset path via the `CLEAR` link while keeping the search UI visible. Verified in `apps/site/app/components/home-page-slice.tsx:36-154`, `apps/site/app/components/home-page-slice.tsx:331-364`, `apps/site/app/components/home-page-slice.test.tsx:41-50`, and `apps/site/e2e/home.spec.ts:88-97`. |

## Test Coverage Evaluation

| Test Category          | Status         | Notes                                                                                                                                                                                                                                          |
| ---------------------- | -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Unit (UT-001)          | Present        | `apps/site/app/lib/home-discovery.test.ts:26-35` verifies excerpt cleaning and search matching across title, excerpt, and note id.                                                                                                             |
| Unit (UT-002)          | Present        | `apps/site/app/lib/home-discovery.test.ts:38-47` verifies `default`, `results`, and `no-results` state selection.                                                                                                                              |
| Integration (IT-001)   | Present        | `apps/site/app/components/home-page-slice.test.tsx:18-50` renders the route-local slice with real manifest data for default, results, and no-results states, exercising shared card/search contracts with real content.                        |
| Smoke (SMK-001)        | Present        | `apps/site/e2e/home.spec.ts:12-71` loads the home route and asserts the route renders core discovery UI without a client-side crash; this spec also passed in the review run (`CI=1 pnpm -C apps/site exec playwright test e2e/home.spec.ts`). |
| End-to-End (E2E-001)   | Present        | `apps/site/e2e/home.spec.ts:74-98` covers known-term search, missing-term search, URL sync, results header, visible search UI, and clear/reset behavior.                                                                                       |
| Regression (REG-001)   | Not applicable | Not applicable — there is no known previous defect ID tied to the landing-page refactor yet.                                                                                                                                                   |
| Performance (PT-001)   | Not applicable | Not applicable — this task preserves the current client-side search model and does not introduce a new measured performance requirement.                                                                                                       |
| Security (ST-001)      | Not applicable | Not applicable — this task does not change authentication, authorization, secrets, or untrusted input handling.                                                                                                                                |
| Usability (UX-001)     | Present        | `apps/site/e2e/home.spec.ts:78-97` checks the accessible searchbox, results count label, no-results copy, and clear action; supporting UI is implemented in `apps/site/app/components/home-page-slice.tsx:317-363`.                            |
| Observability (OT-001) | Not applicable | Not applicable — this task does not add new runtime telemetry beyond the explicit state coverage in route and story tests.                                                                                                                     |

## Observability Evaluation

| OBS ID  | Requirement                                                                                                | Status | Notes                                                                                                                                                                                                                                                                        |
| ------- | ---------------------------------------------------------------------------------------------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| OBS-001 | Storybook must expose real-content card and search states so visual regressions are visible during review. | Met    | `apps/storybook/src/stories/garden-card.stories.tsx:222-256` adds `Home discovery grid`, `apps/storybook/src/stories/garden-search.stories.tsx:113-138` adds `Home hero search`, and `apps/site/app/lib/home-discovery-storybook.test.ts:14-24` verifies both stories exist. |
| OBS-002 | Tests must make default, results, and no-results home states explicitly observable.                        | Met    | `apps/site/app/lib/home-discovery.test.ts:38-47`, `apps/site/app/components/home-page-slice.test.tsx:18-50`, and `apps/site/e2e/home.spec.ts:74-98` each exercise explicit home-state transitions.                                                                           |
| OBS-003 | Search query synchronization failures must remain easy to diagnose through route and component tests.      | Met    | `apps/site/app/components/home-page-slice.test.tsx:31-50` verifies query states keep the search UI present, while `apps/site/e2e/home.spec.ts:80-97` verifies URL sync, persisted search values, and clear/reset behavior.                                                   |

## ADR Compliance

| ADR                                                    | Required Action                                                                            | Status |
| ------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------ |
| `docs/adrs/001-atomic-component-promotion-boundary.md` | Be accepted or have no open question blocking shared card/search scope for the home slice. | Done   |
| `docs/adrs/003-react-lit-interop-boundary.md`          | Be accepted or have no open question blocking the search adapter pattern.                  | Done   |

## Convention Notes

None.

## Unresolved Assumptions or Follow-Up

- None.
