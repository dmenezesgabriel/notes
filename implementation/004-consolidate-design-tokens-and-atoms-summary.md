---
id: '004'
issue: 'issues/004-consolidate-design-tokens-and-atoms.md'
created: 2026-05-17
updated: 2026-05-17
---

# Implementation Summary: Consolidate design tokens and primitive atoms

## Related Task

- `issues/004-consolidate-design-tokens-and-atoms.md`

## Files Changed

- `apps/site/app/globals.css` — removed duplicated shared token definitions and imported the canonical token source from `packages/components`.
- `apps/storybook/src/styles/tokens.css` — converted the Storybook token file into a thin wrapper around the canonical token source with only story-canvas baseline styles.
- `apps/storybook/.storybook/main.ts` — fixed Storybook production build resolution for Lit under pnpm while preserving a single shared Lit entrypoint.
- `apps/storybook/src/stories/design-system-tokens.stories.tsx` — documented the canonical token source in the token docs story.
- `apps/storybook/src/stories/garden-tag.stories.tsx` — moved the atom story into the Storybook atom taxonomy and kept variant coverage.
- `apps/storybook/src/stories/garden-badge.stories.tsx` — moved the atom story into the Storybook atom taxonomy and kept variant coverage.
- `apps/storybook/src/stories/garden-button.stories.tsx` — moved the atom story into the Storybook atom taxonomy and kept variant and disabled-state coverage.
- `apps/storybook/src/stories/garden-divider.stories.tsx` — moved the atom story into the Storybook atom taxonomy and configured the named `solid` and `red` stories to render their actual variants.
- `apps/storybook/src/stories/garden-highlight.stories.tsx` — moved the atom story into the Storybook atom taxonomy and replaced light-only wrapper colors with shared tokens.
- `apps/site/app/lib/design-system-tokens.test.ts` — added integration-style validation for the canonical token source, Storybook atom taxonomy, atom review states, and tokenized dark-theme story wrappers.
- `packages/components/src/garden-tag/garden-tag.test.ts` — expanded atom variant and link rendering coverage.
- `packages/components/src/garden-badge/garden-badge.test.ts` — expanded atom variant coverage.
- `packages/components/src/garden-button/garden-button.test.ts` — expanded atom variant coverage.
- `docs/adrs/002-design-token-source-of-truth.md` — updated the accepted ADR to record the implemented direct-import token strategy.
- `implementation/004-consolidate-design-tokens-and-atoms-summary.md` — recorded the implementation, validations, and scope.

## Behavior Implemented

- Established `packages/components/src/styles/tokens.css` as the canonical Token Source of Truth consumed by the component package, the site, and Storybook.
- Removed active duplicate shared token definitions from `apps/site/app/globals.css` and `apps/storybook/src/styles/tokens.css` while preserving app-local layout, prose, and story-canvas styles.
- Organized the in-scope primitive atoms (`garden-tag`, `garden-badge`, `garden-button`, `garden-divider`, `garden-highlight`) under the Storybook atom taxonomy without changing their public exports.
- Preserved backward-compatible atom usage in the site and Storybook while expanding test coverage for supported variants, atom states, tokenized dark-theme story wrappers, and explicit divider story variant configuration.
- Replaced hard-coded light-theme wrapper text and border colors in the affected atom stories with shared `--zine-*` tokens so Storybook light and dark theme review stays visually valid.
- Restored Storybook production build stability for the shared atom docs by narrowing Lit dedupe to the public `lit` entrypoint and explicitly prebundling the needed Lit packages.

## Design Notes

- I kept the canonical token source inside `packages/components` per the accepted ADR instead of introducing a new tokens package or moving app-local prose/layout tokens into the shared file.
- The site and Storybook now import the canonical token file directly and keep only their local, non-shared CSS concerns nearby.
- I used the existing story files as the smallest safe place to express the Atomic Design taxonomy for the in-scope atoms rather than introducing a broader Storybook reorganization.
- The Storybook Vite fix stays narrow: it only addresses pnpm + Lit build resolution needed to keep the atom docs buildable after this task.
- I did not touch `garden-tape`, `garden-banner`, `garden-sheet`, `garden-article`, or `my-heading`, which are explicitly out of scope for Issue `004`.

## Tests Added or Updated

- `apps/site/app/lib/design-system-tokens.test.ts` — verifies the site and Storybook import the canonical token file, do not redefine shared tokens locally, keep the atom taxonomy, retain theme/focus/disabled review states, keep atom story wrapper colors tokenized for dark-theme review, and configure divider named stories for real variant coverage.
- `packages/components/src/garden-tag/garden-tag.test.ts` — verifies yellow, blue, and green variants plus linked-tag rendering.
- `packages/components/src/garden-badge/garden-badge.test.ts` — verifies muted, yellow, and blue variants.
- `packages/components/src/garden-button/garden-button.test.ts` — verifies yellow and blue variants alongside the existing disabled-state coverage.

## Test Categories Not Applicable

- `E2E`: Not applicable — this task changes shared foundations rather than one complete end-user journey.
- `Regression`: Not applicable — there is no single prior defect ID to lock down beyond the new canonical token-source contract.
- `Performance`: Not applicable — the task does not add a new performance-sensitive runtime path.
- `Security`: Not applicable — token consolidation and atom taxonomy do not affect authentication, authorization, secrets, or untrusted input handling.
- `Observability`: Not applicable — the task relies on existing build, test, and story signals and does not add runtime telemetry.

## Validation Run

```text
pnpm -C packages/components test — passed
pnpm -C apps/site test — passed
pnpm -C packages/components build — passed
pnpm -C packages/components typecheck — passed
pnpm -C apps/site typecheck — passed
pnpm -C apps/storybook typecheck — passed
pnpm content:build && pnpm -C apps/site build — passed
pnpm -C apps/storybook build — passed
pnpm -C apps/storybook lint — passed
pnpm -C apps/storybook lint:css — passed
pnpm -C apps/site lint — passed
pnpm -C apps/site lint:css — passed
pnpm -C packages/components lint — passed
pnpm -C apps/storybook typecheck — passed
pnpm -C apps/site test — passed (re-run after dark-theme story wrapper fix)
pnpm -C apps/storybook build — passed (re-run after dark-theme story wrapper fix)
pnpm -C apps/site test — passed (re-run after divider story variant fix)
pnpm -C apps/storybook typecheck — passed (re-run after divider story variant fix)
pnpm -C apps/storybook build — passed (re-run after divider story variant fix)
```

## Accessibility Notes

- Storybook retains explicit light and dark theme review through the existing global theme decorator.
- The in-scope atom stories still expose disabled and all-variant states for review, and the integration test verifies those review hooks remain present.
- The affected atom story wrappers now use shared tokens for text and border colors so dark-mode review uses the same token source as light mode.
- `garden-button` keeps its disabled state behavior, and `garden-tag`/`garden-button` keep focus-visible styling in component source.

## Observability Changes

- Not applicable — no logs, metrics, traces, or analytics were added or changed.

## ADR Updates

- `docs/adrs/002-design-token-source-of-truth.md` — updated the accepted ADR validation section to record that the site and Storybook now import the canonical token file directly.

## Unresolved Assumptions or Follow-Up

- The approved `undecided` status for `garden-tape`, `garden-banner`, and `garden-sheet` remains unchanged and should be revisited only in a later dedicated task.
