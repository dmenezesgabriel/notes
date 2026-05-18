---
id: '005'
issue: 'issues/005-migrate-note-template-and-page-slice.md'
created: 2026-05-17
updated: 2026-05-17
---

# Review: Migrate the note template and page slice

## Related Task

- `issues/005-migrate-note-template-and-page-slice.md`

## Overall Verdict

**Pass**

No Blocking findings.

## Findings

| ID    | Level        | Requirement | Description                                                                                                                                                                                                                                                                                 | Evidence                                                                                                                                  |
| ----- | ------------ | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| F-001 | Non-blocking | UX-001      | The required usability coverage exists, but it does not explicitly verify keyboard traversal or focus behavior for the optional TOC and backlinks states. Current tests confirm visibility and semantic structure, but the keyboard-accessible part of `UX-001` is only indirectly covered. | `apps/site/e2e/note.spec.ts:73-82`; `apps/site/e2e/accessibility.spec.ts:39-60`; `issues/005-migrate-note-template-and-page-slice.md:111` |

## AC Evaluation

| AC     | Result | Notes                                                                                                                                                                                                                                                                                                                                                                         |
| ------ | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AC-001 | Pass   | The note route now composes real processed note data through `NotePageSlice`, including breadcrumb, meta tags, content, TOC, and backlinks for notes that have them. Evidence: `apps/site/app/[...slug]/page.tsx:30-60`; `apps/site/app/components/note-page-slice.tsx:36-74`; `apps/site/app/components/note-page-slice.test.tsx:41-54`; `apps/site/e2e/note.spec.ts:73-82`. |
| AC-002 | Pass   | Optional regions are omitted cleanly when the note does not have enough headings or backlinks. Evidence: `apps/site/app/lib/note-template.ts:14-22`; `apps/site/app/components/note-page-slice.tsx:58-73`; `apps/site/app/components/note-page-slice.test.tsx:56-64`.                                                                                                         |
| AC-003 | Pass   | Storybook documents the supported note template states with realistic content for without-sidebar, with-sidebar, with-backlinks, and dark mode review. Evidence: `apps/storybook/src/stories/garden-article.stories.tsx:3-197`.                                                                                                                                               |

## Test Coverage Evaluation

| Test Category        | Status         | Notes                                                                                                                                                                                                           |
| -------------------- | -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Unit (UT-001)        | Present        | `apps/site/app/lib/react-lit-adapter.test.ts:7-33` verifies breadcrumb and TOC data mapping into the supported custom-element contracts.                                                                        |
| Unit (UT-002)        | Present        | `apps/site/app/lib/note-template.test.ts:6-50` verifies optional note regions and backlink resolution behavior.                                                                                                 |
| Integration (IT-001) | Present        | `apps/site/app/components/note-page-slice.test.tsx:41-64` verifies route composition with real processed note data and optional region behavior.                                                                |
| Smoke (SMK-001)      | Present        | `pnpm content:build && pnpm -C apps/site build` passed during review, confirming the statically generated note route still builds and exports.                                                                  |
| End-to-End (E2E-001) | Present        | `apps/site/e2e/note.spec.ts:14-96` verifies the note page title, article content, breadcrumb, TOC, backlinks, and metadata tag behavior in the browser.                                                         |
| Regression           | Not applicable | The issue marks regression not applicable because there is no specific known defect ID for note template state handling.                                                                                        |
| Performance          | Not applicable | The issue marks performance not applicable because the route remains an existing static page without a new measured risk.                                                                                       |
| Security             | Not applicable | The issue marks security not applicable because the trusted note HTML pipeline and auth boundaries were not changed.                                                                                            |
| Usability (UX-001)   | Present        | `apps/site/e2e/accessibility.spec.ts:39-60` and `apps/site/e2e/note.spec.ts:73-82` cover structure and visible optional states; see F-001 for narrower keyboard-specific coverage than the issue text suggests. |
| Observability        | Not applicable | The issue marks observability tests not applicable because no runtime telemetry was added.                                                                                                                      |

## Observability Evaluation

| OBS ID  | Requirement                                                                                                                                | Status | Notes                                                                                                                                                                                                                                                                                                                                                                                                              |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| OBS-001 | Storybook must expose the with-sidebar, without-sidebar, and with-backlinks note template states so reviewers can inspect them explicitly. | Met    | Storybook documents default, with-sidebar, with-backlinks, and dark-mode note template states. Evidence: `apps/storybook/src/stories/garden-article.stories.tsx:54-197`.                                                                                                                                                                                                                                           |
| OBS-002 | Build or test failures in note rendering must remain visible instead of being swallowed by adapter abstractions.                           | Met    | The adapter helpers are explicit, unit-tested, and validation failures surface through `apps/site` tests, Playwright, and site builds. Evidence: `apps/site/app/lib/react-lit-adapter.ts:13-35`; `apps/site/app/lib/react-lit-adapter.test.ts:7-33`; review validations `pnpm -C apps/site test`, `CI=1 pnpm -C apps/site exec playwright test e2e/note.spec.ts`, `pnpm content:build && pnpm -C apps/site build`. |
| OBS-003 | The route-level tests must make missing TOC or backlink state handling easy to diagnose.                                                   | Met    | `NotePageSlice` integration tests explicitly assert the presence and absence of sidebar and backlinks markup based on real processed note fixtures. Evidence: `apps/site/app/components/note-page-slice.test.tsx:41-64`; `apps/site/app/lib/note-template.test.ts:6-50`.                                                                                                                                           |

## ADR Compliance

| ADR                                                    | Required Action                                                                                                 | Status |
| ------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------- | ------ |
| `docs/adrs/001-atomic-component-promotion-boundary.md` | Follow the accepted boundary that keeps `garden-article` shared while the page composition stays in `apps/site` | Done   |
| `docs/adrs/003-react-lit-interop-boundary.md`          | Follow the accepted app-level React-Lit adapter boundary for breadcrumb and TOC data                            | Done   |

## Convention Notes

- `F-001` — Non-blocking — the implementation follows the project’s testing and adapter conventions, but the keyboard-specific part of the optional-state usability contract could be asserted more directly in a future follow-up.

## Unresolved Assumptions or Follow-Up

- The repository contains unrelated uncommitted changes from earlier issues; this review was scoped to the implementation files and validations relevant to `issues/005-migrate-note-template-and-page-slice.md`.
- `apps/site/e2e/navigation.spec.ts` still contains an unrelated flaky brand-link assertion outside the scope of Issue `005`.
