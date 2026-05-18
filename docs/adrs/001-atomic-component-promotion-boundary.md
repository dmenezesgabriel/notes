# ADR 001: Use a component promotion boundary for shared vs site-local UI

## Status

Accepted

## Date

2026-05-17

## Related Tasks

- `issues/003-define-atomic-design-boundaries.md`
- `issues/004-consolidate-design-tokens-and-atoms.md`
- `issues/005-migrate-note-template-and-page-slice.md`
- `issues/006-migrate-home-discovery-slice.md`

## Context

- The current component library is a flat export surface with no explicit atomic taxonomy.
- Some components are clearly reusable primitives, while others may still be route-specific compositions.
- Promoting one-off page sections into `packages/components` too early would create shared-library bloat and blur the boundary between reusable system pieces and concrete site pages.

## Decision

- Use a component promotion boundary to decide whether UI belongs in `packages/components`, stays in `apps/site`, or is marked legacy.
- Keep atoms, molecules, and proven reusable organisms in `packages/components`.
- Keep route-specific compositions and page assemblies in `apps/site` until reuse is proven by at least two real site contexts or a clear cross-route contract.

## Options Considered

1. Keep shared atoms, molecules, and proven reusable organisms/templates in `packages/components`; keep route-specific compositions in `apps/site` until reuse is proven. `(recommended)`
2. Move every visible section into `packages/components` during the refactor.
3. Keep almost all composition in `apps/site` and use `packages/components` only for low-level primitives.

## Consequences

Positive:

- Reduces premature abstraction and shared-library bloat.
- Keeps the shared package focused on reusable, context-agnostic UI contracts.

Negative:

- Some visually similar sections may remain split across package and app for a while.
- Contributors must apply judgment and maintain the migration matrix as reuse evolves.

## Validation

- `docs/atomic-design-migration-matrix.md` classifies every current component and real route composition by atomic level and target home.
- The note page and home page migrations confirm the boundary on real routes before additional promotion.
- Storybook and the site both reflect the same shared components without forcing page-specific sections into the package.

## Open Questions

- `garden-article` stays a shared template for now, even if note pages remain its only near-term consumer; revisit only if future route slices prove this boundary wrong.
- `garden-tape`, `garden-banner`, and `garden-sheet` remain `undecided` and out of scope for Issue `004` until live multi-route reuse is proven.
- `my-heading` remains a legacy export for backward compatibility and should be removed only in a later dedicated cleanup task.
