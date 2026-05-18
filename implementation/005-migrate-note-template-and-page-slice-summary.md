---
id: '005'
issue: 'issues/005-migrate-note-template-and-page-slice.md'
created: 2026-05-17
updated: 2026-05-17
---

# Implementation Summary: Migrate the note template and page slice

## Related Task

- `issues/005-migrate-note-template-and-page-slice.md`

## Files Changed

- `apps/site/app/[...slug]/page.tsx` — moved the note route to a dedicated `NotePageSlice` composition and resolved backlinks through note-template helpers.
- `apps/site/app/components/note-page-slice.tsx` — added the site-level note template/page composition that keeps `garden-article` as the template boundary while binding real route data.
- `apps/site/app/components/note-page-slice.test.tsx` — added integration-style coverage for notes with and without optional sidebar/backlink regions using real processed note data.
- `apps/site/app/components/site-breadcrumb.tsx` — updated the breadcrumb wrapper to use the shared React-Lit adapter helpers and support direct slot placement.
- `apps/site/app/components/site-toc.tsx` — updated the TOC wrapper to use the shared React-Lit adapter helpers and support direct slot placement.
- `apps/site/app/lib/react-lit-adapter.ts` — added shared helpers to map breadcrumb and TOC data into the supported custom-element contracts and assign array props consistently.
- `apps/site/app/lib/react-lit-adapter.test.ts` — added unit coverage for breadcrumb and TOC adapter mapping.
- `apps/site/app/lib/note-template.ts` — added note-template helpers for optional sidebar/backlink state and backlink resolution.
- `apps/site/app/lib/note-template.test.ts` — added unit coverage for note-template state and backlink resolution.
- `apps/storybook/src/stories/garden-article.stories.tsx` — updated the article stories to document the supported note template state matrix with realistic content.
- `packages/components/src/garden-article/garden-article.ts` — aligned the rendered title heading id with the live note-route contract used by the E2E suite.
- `apps/site/e2e/note.spec.ts` — updated the note-route E2E selector for metadata tags to target the slotted `garden-tag` contract correctly.

## Behavior Implemented

- Kept `garden-article` as the shared Template boundary for the note slice while moving the live route composition into `NotePageSlice` inside `apps/site`.
- Replaced route-local breadcrumb and TOC array-prop bridging with reusable React-Lit adapter helpers for the supported custom-element contracts.
- Added explicit note-template helpers so the sidebar and backlinks regions are derived from real note data and omitted cleanly when absent.
- Preserved the live note route behavior for:
  - notes with a TOC and backlinks
  - notes without a sidebar
  - notes without backlinks
- Updated Storybook to document the supported note template states used by the live route: default, with sidebar, with backlinks, and dark mode.
- Kept the prose styling contract in the light DOM by continuing to slot `.prose` content into `garden-article` rather than moving prose rendering into shadow DOM.

## Tests Added or Updated

- `apps/site/app/lib/react-lit-adapter.test.ts` — verifies breadcrumb and TOC adapter helpers map note data into the supported custom-element contracts. Covers `UT-001`.
- `apps/site/app/lib/note-template.test.ts` — verifies optional note regions are omitted or enabled based on real TOC/backlink state and that missing backlinks are filtered safely. Covers `UT-002`.
- `apps/site/app/components/note-page-slice.test.tsx` — verifies the note route composes the article template with real processed note data and omits optional regions when absent. Covers `IT-001`.
- `apps/site/e2e/note.spec.ts` — validates a reader-visible note page with title, breadcrumb, article content, TOC, backlinks, and metadata tag behavior. Covers `E2E-001`.

## Test Categories Not Applicable

- `Regression`: Not applicable — there is no specific known defect ID for the note template state handling yet.
- `Performance`: Not applicable — the task preserves an existing statically generated route and does not add a new measured performance risk.
- `Security`: Not applicable — the task does not change authentication, authorization, secrets, or the trusted note HTML pipeline.
- `Observability`: Not applicable — the task does not add logs, metrics, traces, or analytics events.

## Validation Run

```text
pnpm -C apps/site test — passed
pnpm -C packages/components test — passed
pnpm -C packages/components build — passed
pnpm -C apps/site typecheck — passed
pnpm -C apps/storybook typecheck — passed
pnpm content:build && pnpm -C apps/site build — passed
pnpm -C apps/storybook build — passed
CI=1 pnpm -C apps/site exec playwright test e2e/note.spec.ts — passed
CI=1 pnpm -C apps/site exec playwright test e2e/accessibility.spec.ts — passed
```

## Accessibility Notes

- Verified the note-route accessibility checks in `apps/site/e2e/accessibility.spec.ts` after the note slice changes.
- Preserved breadcrumb navigation, TOC navigation, and backlinks as semantic links rather than custom keyboard handlers.
- Kept the note title rendered as a real `h1`, preserving the route’s document structure for assistive technology.

## Observability Changes

- Not applicable — no logs, metrics, traces, or analytics were added or changed.

## ADR Updates

- None. The implementation followed the accepted boundaries from ADR `001` and ADR `003` without changing their decisions.

## Unresolved Assumptions or Follow-Up

- `apps/site/e2e/navigation.spec.ts` still contains an unrelated flaky brand-link assertion that is outside the scope of Issue `005`; it was observed during exploratory validation and not changed here.
- The repository still contains other uncommitted work from earlier issues; this summary covers only the files and behavior relevant to Issue `005`.
