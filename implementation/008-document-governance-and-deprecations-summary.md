---
id: '008'
issue: 'issues/008-document-governance-and-deprecations.md'
created: 2026-05-19
updated: 2026-05-19
---

# Implementation Summary: Document governance, Storybook parity, and deprecations

## Related Task

- `issues/008-document-governance-and-deprecations.md`

## Files Changed

- `docs/design-system-governance.md` — added the canonical governance guide for promotion, deprecation, token, and React-Lit adapter rules.
- `docs/atomic-design-migration-matrix.md` — added explicit status terms and replacement-path notes for `garden-banner`, `garden-sheet`, `garden-tape`, and `my-heading`.
- `CONTEXT.md` — added the domain terms `Undecided Shared Component` and `Legacy Export`.
- `README.md` — added a design-system workflow section that points contributors to Storybook, governance docs, the matrix, vocabulary, and ADRs.
- `apps/storybook/src/stories/design-system-overview.stories.tsx` — renamed the stale kitchen-sink story file to match its new `Design System/Overview` role and kept the approved taxonomy and live route proofs.
- `apps/storybook/src/stories/design-system-governance.stories.tsx` — added the Storybook governance overview with canonical references, promotion rules, and explicit replacement paths.
- `apps/storybook/src/stories/garden-breadcrumb.stories.tsx` — moved the story to `Molecules/GardenBreadcrumb`.
- `apps/storybook/src/stories/garden-search.stories.tsx` — moved the story to `Molecules/GardenSearch`.
- `apps/storybook/src/stories/garden-blockquote.stories.tsx` — moved the story to `Molecules/GardenBlockquote`.
- `apps/storybook/src/stories/garden-callout.stories.tsx` — moved the story to `Molecules/GardenCallout`.
- `apps/storybook/src/stories/garden-mermaid.stories.tsx` — moved the story to `Molecules/GardenMermaid`.
- `apps/storybook/src/stories/garden-card.stories.tsx` — moved the story to `Organisms/GardenCard`.
- `apps/storybook/src/stories/garden-nav.stories.tsx` — moved the story to `Organisms/GardenNav`.
- `apps/storybook/src/stories/garden-toc.stories.tsx` — moved the story to `Organisms/GardenToc`.
- `apps/storybook/src/stories/garden-banner.stories.tsx` — moved the story to `Undecided/GardenBanner` and documented its status and route-local replacement path.
- `apps/storybook/src/stories/garden-sheet.stories.tsx` — moved the story to `Undecided/GardenSheet` and documented its status and route-local replacement path.
- `apps/storybook/src/stories/garden-tape.stories.tsx` — moved the story to `Undecided/GardenTape` and documented its status and route-local replacement path.
- `apps/storybook/src/stories/my-heading.stories.tsx` — moved the story to `Legacy/MyHeading` and documented its replacement path.
- `apps/site/app/lib/design-system-governance.test.ts` — added integration-style coverage for the governance docs, Storybook information architecture, live-route proofs, and explicit replacement paths.

## Behavior Implemented

- Storybook now reflects the approved atomic taxonomy through `Atoms/*`, `Molecules/*`, `Organisms/*`, `Templates/*`, `Undecided/*`, `Legacy/*`, and `Design System/*` sections.
- Added a contributor-facing governance doc that explains:
  - when UI belongs in `packages/components`
  - when it must stay route-local in `apps/site`
  - where the canonical token source lives
  - where React-Lit adapter logic must live
  - how to mark `undecided` and `legacy` artifacts
- Replaced the stale kitchen-sink overview with a current-system Storybook overview that points reviewers to the real route proofs and current status board.
- Made the status of `garden-banner`, `garden-sheet`, `garden-tape`, and `my-heading` explicit in both project docs and Storybook, including a replacement path for each.
- Added repo-root workflow links so contributors can find governance guidance from the normal design-system entry points.

## Design Notes

- I kept the change documentation-first and Storybook-first instead of introducing new runtime abstractions or changing component APIs.
- The Storybook reorganization follows the approved vocabulary from `CONTEXT.md` and the boundaries already accepted in ADRs `001` through `003`.
- The Storybook overview now lives in `design-system-overview.stories.tsx`, so the file naming matches the published `Design System/Overview` entry instead of keeping stale kitchen-sink terminology.
- Replacement paths prefer route-local composition for low-confidence shared artifacts, which matches the accepted Component Promotion Boundary.

## Tests Added or Updated

- `apps/site/app/lib/design-system-governance.test.ts` — verifies canonical governance references, Storybook taxonomy/status folders, live-route proof references, and explicit replacement paths. Covers `IT-001` and `UX-001`.
- Existing Storybook-coverage tests were re-run:
  - `apps/site/app/lib/design-system-tokens.test.ts`
  - `apps/site/app/lib/home-discovery-storybook.test.ts`
  - `apps/site/app/lib/navigation-storybook.test.ts`

## Test Categories Not Applicable

- `Unit`: Not applicable — the task changes documentation and Storybook information architecture, not isolated runtime logic.
- `End-to-End`: Not applicable — no end-user site journey changed.
- `Regression`: Not applicable — there is no tracked historical defect ID for this governance drift.
- `Performance`: Not applicable — the task does not change measured runtime behavior.
- `Security`: Not applicable — the task does not affect auth, trust boundaries, secrets, or untrusted input handling.
- `Observability`: Not applicable — the task adds reviewability in docs/Storybook, not runtime telemetry.

## Validation Run

```text
pnpm -C apps/site test app/lib/design-system-governance.test.ts app/lib/design-system-tokens.test.ts app/lib/home-discovery-storybook.test.ts app/lib/navigation-storybook.test.ts — passed
pnpm -C apps/storybook typecheck — passed
pnpm -C apps/site typecheck — passed
pnpm -C apps/storybook exec eslint src/stories/*.stories.tsx — passed
pnpm -C apps/site exec eslint app/lib/design-system-governance.test.ts — passed
pnpm -C apps/storybook exec stylelint "src/stories/*.{ts,tsx}" — passed
pnpm components:build — passed
pnpm -C apps/storybook build — passed
Storybook MCP: `storybook_list-all-documentation`, `storybook_get-documentation`, and `storybook_preview-stories` for `design-system-overview--current-system` and `design-system-governance--overview` — passed
```

## Accessibility Notes

- The new Storybook docs stories use semantic headings, lists, and tables rather than custom widgets.
- Storybook previews were reviewed through the Storybook MCP tools to confirm the overview and governance pages render and remain navigable as documentation surfaces.
- No new product interaction flow or custom keyboard behavior was introduced.

## Observability Changes

- Not applicable — no logs, metrics, traces, or analytics were added or changed.

## ADR Updates

- None. The implementation documents and reinforces ADR `001`, ADR `002`, and ADR `003` without changing their decisions.

## Unresolved Assumptions or Follow-Up

- `pnpm -C apps/storybook lint` and `pnpm -C apps/site lint` still fail when run package-wide because they scan committed/generated build-output directories (`apps/storybook/storybook-static/**` and `apps/site/out/**`). This is pre-existing and out of scope for Issue `008`, so source-file lint validation was run directly against the changed files instead.
