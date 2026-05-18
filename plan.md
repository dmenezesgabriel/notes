# Implementation Plan

## Goal

Refactor the notes monorepo design system and site toward atomic design with clear package boundaries, one token source of truth, standardized React↔Lit interop, and incremental route-slice migrations validated in Storybook and the live site.

## Tasks

1. **Define atomic design boundaries and the migration matrix**
   - File: `CONTEXT.md`, `docs/adrs/001-atomic-component-promotion-boundary.md`, `docs/adrs/002-design-token-source-of-truth.md`, `docs/adrs/003-react-lit-interop-boundary.md`, `issues/003-define-atomic-design-boundaries.md`
   - Changes: document the atomic vocabulary, audit the current exports and route compositions, classify each pattern by atomic level and target home, and record the cross-cutting ADRs that unblock implementation.
   - Acceptance: every current shared component and real site composition has an atomic level, target location, and migration status; the three ADR stubs exist and are linked from dependent tasks.
2. **Consolidate design tokens and primitive atoms**
   - File: `packages/components/src/styles/tokens.css`, `apps/site/app/globals.css`, `apps/storybook/src/styles/tokens.css`, `packages/components/src/index.ts`, `packages/components/src/garden-tag/*`, `packages/components/src/garden-badge/*`, `packages/components/src/garden-button/*`, `packages/components/src/garden-divider/*`, `packages/components/src/garden-highlight/*`, `issues/004-consolidate-design-tokens-and-atoms.md`
   - Changes: establish the canonical token source, remove active token duplication, reorganize primitive shared components as atoms, and update Storybook documentation to consume the same token definitions.
   - Acceptance: token changes flow from one canonical source into the component package, Storybook, and site; primitive atoms remain backward-compatible and documented in both themes.
3. **Migrate the note template and page slice**
   - File: `packages/components/src/garden-article/*`, `packages/components/src/garden-breadcrumb/*`, `packages/components/src/garden-toc/*`, `apps/site/app/[...slug]/page.tsx`, `apps/site/app/components/site-breadcrumb.tsx`, `apps/site/app/components/site-toc.tsx`, `apps/site/app/globals.css`, `apps/storybook/src/stories/garden-article.stories.tsx`, `issues/005-migrate-note-template-and-page-slice.md`
   - Changes: turn the note route into the first atomic template/page slice, apply the approved interop boundary to breadcrumb and TOC, and document real note states in Storybook.
   - Acceptance: note pages still render content, metadata, sidebar, and backlinks correctly across optional states; Storybook exposes the supported template variants.
4. **Migrate the home discovery slice**
   - File: `apps/site/app/page.tsx`, `apps/site/app/components/home-page-content.tsx`, `apps/site/app/components/site-search.tsx`, `packages/components/src/garden-card/*`, `packages/components/src/garden-search/*`, `apps/storybook/src/stories/garden-card.stories.tsx`, `apps/storybook/src/stories/garden-search.stories.tsx`, `issues/006-migrate-home-discovery-slice.md`
   - Changes: refactor the home page into explicit atomic compositions, keep route-specific hero and category structures in `apps/site` unless reuse is proven, and harden the shared search and card building blocks with real-content states.
   - Acceptance: the home route keeps its default, results, and no-results states; shared card and search behavior remain correct and documented.
5. **Standardize React-Lit interop and migrate the nav/theme slice**
   - File: `apps/site/app/components/site-nav.tsx`, `apps/site/app/components/site-search.tsx`, `apps/site/app/components/site-breadcrumb.tsx`, `apps/site/app/components/site-toc.tsx`, `apps/site/app/types.d.ts`, `packages/components/src/garden-nav/*`, `apps/storybook/src/stories/garden-nav.stories.tsx`, `issues/007-standardize-react-lit-interop-and-nav.md`
   - Changes: replace scattered route-local bridge code with the approved adapter pattern, align JSX typings with supported custom elements, and migrate the nav/theme behavior without breaking active-link or theme persistence behavior.
   - Acceptance: supported custom elements no longer require ad-hoc route-level `any` casts; nav theme switching and active states still work in site and Storybook contexts.
6. **Document governance, deprecations, and Storybook parity**
   - File: `packages/components/src/index.ts`, `apps/storybook/src/stories/kitchen-sink.stories.tsx`, `issues/008-document-governance-and-deprecations.md`
   - Changes: update Storybook information architecture to reflect the atomic taxonomy, document promotion and deprecation rules, and create an explicit legacy cleanup list for items such as `my-heading`, duplicate aliases, or low-confidence shared components.
   - Acceptance: Storybook reflects the migrated system, the contribution rules are discoverable, and every legacy component or alias has a documented status and replacement path.

## Files to Modify

- `CONTEXT.md` - add project vocabulary for atomic design, adapters, and migration constraints.
- `packages/components/src/index.ts` - keep a stable export surface while the internal taxonomy and deprecations evolve.
- `packages/components/src/styles/tokens.css` - serve as or re-export the canonical token source.
- `packages/components/src/garden-tag/*` - align the tag primitive with the atom taxonomy and canonical token usage.
- `packages/components/src/garden-badge/*` - align the badge primitive with the atom taxonomy and canonical token usage.
- `packages/components/src/garden-button/*` - align the button primitive with the atom taxonomy and canonical token usage.
- `packages/components/src/garden-divider/*` - align the divider primitive with the atom taxonomy and canonical token usage.
- `packages/components/src/garden-highlight/*` - align the highlight primitive with the atom taxonomy and canonical token usage.
- `packages/components/src/garden-article/*` - validate the shared-shell or template decision on the real note route.
- `packages/components/src/garden-breadcrumb/*` - align the breadcrumb data contract with the approved adapter boundary.
- `packages/components/src/garden-toc/*` - align the TOC data contract with the approved adapter boundary.
- `packages/components/src/garden-card/*` - harden the listing organism against real-content extremes from the home route.
- `packages/components/src/garden-search/*` - harden the search molecule and its event contract for the home slice.
- `packages/components/src/garden-nav/*` - migrate the highest-coupling organism to the standardized adapter and token boundaries.
- `apps/site/app/globals.css` - stop actively duplicating the token source and preserve or document the prose contract.
- `apps/site/app/[...slug]/page.tsx` - become the first atomic template/page validation slice.
- `apps/site/app/page.tsx` - become the home discovery page slice.
- `apps/site/app/components/home-page-content.tsx` - extract named home compositions and preserve query states.
- `apps/site/app/components/site-nav.tsx` - align nav bridging with the approved adapter boundary.
- `apps/site/app/components/site-search.tsx` - align search bridging with the approved adapter boundary.
- `apps/site/app/components/site-breadcrumb.tsx` - align breadcrumb bridging with the approved adapter boundary.
- `apps/site/app/components/site-toc.tsx` - align TOC bridging with the approved adapter boundary.
- `apps/site/app/types.d.ts` - expand or replace JSX custom-element typings for the supported components.
- `apps/storybook/src/stories/garden-article.stories.tsx` - document the note template state matrix.
- `apps/storybook/src/stories/garden-card.stories.tsx` - document real-content listing states.
- `apps/storybook/src/stories/garden-search.stories.tsx` - document search states and usage.
- `apps/storybook/src/stories/garden-nav.stories.tsx` - document nav and theme behavior in realistic context.
- `apps/storybook/src/stories/kitchen-sink.stories.tsx` - reflect the final migrated system instead of stale demo-only markup.
- `apps/storybook/src/styles/tokens.css` - stop actively duplicating the token source.

## New Files

- `CONTEXT.md` - atomic-design vocabulary and migration constraints for the project.
- `docs/adrs/001-atomic-component-promotion-boundary.md` - decision record for what belongs in the shared package versus the site app.
- `docs/adrs/002-design-token-source-of-truth.md` - decision record for the canonical token artifact.
- `docs/adrs/003-react-lit-interop-boundary.md` - decision record for React↔Lit wrappers, typings, and bridge helpers.
- `issues/003-define-atomic-design-boundaries.md` - P0 planning and decision-capture task.
- `issues/004-consolidate-design-tokens-and-atoms.md` - P0 shared foundation task.
- `issues/005-migrate-note-template-and-page-slice.md` - P1 note-route tracer bullet.
- `issues/006-migrate-home-discovery-slice.md` - P1 home-route tracer bullet.
- `issues/007-standardize-react-lit-interop-and-nav.md` - P2 global interop and nav/theme task.
- `issues/008-document-governance-and-deprecations.md` - P2 governance and cleanup task.

## Dependencies

- Task 1 blocks every execution task because it creates the vocabulary, migration matrix, and ADR stubs.
- Task 2 depends on Task 1 and ADRs 001-002 because the token source and shared-package boundary must be settled first.
- Task 3 depends on Task 2 and ADRs 001 and 003 because the note route needs the shared foundations and the approved adapter boundary.
- Task 4 depends on Tasks 2-3 and ADRs 001 and 003 because the home route builds on the same token and interop conventions.
- Task 5 depends on Tasks 3-4 and ADRs 002-003 because nav/theme is the highest-coupling cross-cutting migration.
- Task 6 depends on Tasks 2-5 and all three ADRs because governance should document the system only after the migrated slices are real.

## Risks

- `garden-article` already behaves like a shared template shell, so ADR 001 must decide whether shared templates are allowed or whether this component becomes a special-case exception.
- Token duplication spans three active surfaces; careless consolidation could break either the site prose contract or Storybook theming.
- React↔Lit interop is currently manual and partially typed, so adapter cleanup can accidentally regress search, breadcrumb, TOC, or theme behavior if not validated slice by slice.
- The home hero and category sections are visually rich but may still be site-specific; promoting them too early would create shared-library bloat.
- Storybook web-component docs are limited, so story coverage must stay grounded in real route usage rather than relying only on generated prop metadata.
