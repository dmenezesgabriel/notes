# Design System Governance

## Purpose

This document defines how contributors decide whether UI belongs in the shared design system, stays site-local, or should be treated as legacy during the atomic migration.

Use this file together with:

- `CONTEXT.md`
- `docs/atomic-design-migration-matrix.md`
- `docs/adrs/001-atomic-component-promotion-boundary.md`
- `docs/adrs/002-design-token-source-of-truth.md`
- `docs/adrs/003-react-lit-interop-boundary.md`

## Normal workflow

1. Start in Storybook under `Design System/Overview` and `Design System/Governance`.
2. Use the atomic taxonomy from `CONTEXT.md`: `Atom`, `Molecule`, `Organism`, `Template`, `Page`.
3. Check `docs/atomic-design-migration-matrix.md` before promoting, demoting, or deprecating a shared artifact.
4. Follow the accepted boundaries from the ADRs before changing the shared package.

## Canonical boundaries

### Shared vs site-local UI

- Put context-agnostic atoms, molecules, and proven reusable organisms/templates in `packages/components`.
- Keep route composition, route data binding, and Next.js page concerns in `apps/site`.
- Do not promote a route-local composition into the shared package until reuse is proven in at least two real site contexts or a clear cross-route contract already exists.

### Token Source of Truth

- The canonical shared token file is `packages/components/src/styles/tokens.css`.
- Storybook and the site must import that file instead of maintaining active token copies.
- App-local prose, layout, or route styles may extend shared tokens, but must not fork the shared token names.

### React-Lit Adapter boundary

- Keep `@notes/components` framework-agnostic.
- Keep React-specific interop in `apps/site/app/lib/react-lit-adapter.ts` and related app-level wrappers.
- Do not move React wrappers, route-local event plumbing, or framework-specific typings into the Lit component package.

## Storybook information architecture

Storybook is the reviewer-facing map of the current system.

- `Design System/*` explains the system, references, and governance rules.
- `Atoms/*`, `Molecules/*`, `Organisms/*`, and `Templates/*` document the approved shared taxonomy.
- `Undecided/*` marks low-confidence shared components that still exist but are not approved for new shared adoption.
- `Legacy/*` marks backward-compatibility exports that should not receive new usage.

If Storybook structure and the migration matrix disagree, fix the docs before adding more shared UI.

## Promotion rules

Promote an artifact into `packages/components` only when all of the following are true:

1. The UI is context-agnostic.
2. The styling contract is token-backed rather than route-specific.
3. The data contract is stable enough to document in Storybook.
4. Reuse is already proven in at least two real site contexts, or the cross-route contract is already clear.
5. The component does not require React-only behavior to function.

Keep the artifact site-local when any of the following are true:

- it binds route-specific content or layout
- it depends on Next.js route state or app-only data loading
- it is a page slice rather than a reusable shared contract
- it is only visually similar to another component but not actually reused yet

## Deprecation rules

When a shared artifact becomes legacy or low-confidence:

1. Update its Storybook location or description so the status is visible in review.
2. Update `docs/atomic-design-migration-matrix.md` with the status and replacement path.
3. Preserve backward compatibility until all known consumers have a migration path.
4. Do not add new usage while the artifact is `legacy` or `undecided`.

## Current explicit statuses and replacement paths

| Artifact        | Status      | Why it is not active shared UI                                                                        | Replacement path                                                                                          |
| --------------- | ----------- | ----------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `garden-banner` | `undecided` | The live home page still owns its marquee composition locally, so cross-route reuse is unproven.      | Keep marquee/banner composition route-local in `apps/site` until a second real route proves the contract. |
| `garden-sheet`  | `undecided` | It overlaps visually with pinned-paper sections, but no live route depends on the shared element yet. | Keep pinned-paper wrappers local to the route slice until reuse is proven.                                |
| `garden-tape`   | `undecided` | Decorative scrapbook accent with Storybook-only usage today.                                          | Use route-local decoration or plain layout copy until a reusable contract is proven.                      |
| `my-heading`    | `legacy`    | Backward-compatibility export with no live-site role in the approved atomic system.                   | Replace with semantic page headings or shared template headings; do not add new `my-heading` usage.       |

## Current live-route proofs

These route slices are the proof cases for the shared system:

- `apps/site/app/components/home-page-slice.tsx` validates `garden-search` and `garden-card` in a real discovery page.
- `apps/site/app/components/note-page-slice.tsx` validates `garden-article`, `garden-breadcrumb`, and `garden-toc` on a real note route.
- `apps/site/app/components/site-nav.tsx` validates the shared `garden-nav` organism through the app-level React-Lit adapter boundary.

## Contributor checklist

Before merging design-system work, confirm:

- Storybook category matches the approved atomic taxonomy.
- The migration matrix matches the code and Storybook status.
- Token changes still flow from `packages/components/src/styles/tokens.css`.
- React-specific interop still lives under `apps/site`.
- Any `undecided` or `legacy` artifact has an explicit replacement path.
