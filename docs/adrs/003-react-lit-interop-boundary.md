# ADR 003: Centralize React-Lit interop outside the Lit component package

## Status

Accepted

## Date

2026-05-17

## Related Tasks

- `issues/003-define-atomic-design-boundaries.md`
- `issues/005-migrate-note-template-and-page-slice.md`
- `issues/006-migrate-home-discovery-slice.md`
- `issues/007-standardize-react-lit-interop-and-nav.md`

## Context

- The Next.js app currently uses manual wrappers for `garden-nav`, `garden-search`, `garden-breadcrumb`, and `garden-toc`.
- Complex props and custom events are bridged with route-local imperative code and partial JSX typings.
- The shared Lit package should remain framework-agnostic, but the app still needs a consistent, typed interop boundary.

## Decision

- Keep the Lit component package framework-agnostic.
- Centralize React-Lit adapter logic, typings, and helpers in one app-level adapter layer instead of scattering wrappers across routes.
- Use that adapter layer for complex property assignment, custom event wiring, and supported JSX typings.

## Options Considered

1. Keep Lit framework-agnostic and centralize React adapters in one app-level boundary. `(recommended)`
2. Continue using route-local wrappers and ad-hoc `any` casts where needed.
3. Add React-specific wrapper logic directly to `@notes/components`.

## Consequences

Positive:

- Reduces duplication and type drift in React usage of custom elements.
- Preserves the portability of the Lit component package.

Negative:

- Adds one explicit adapter layer to maintain.
- Some existing wrappers will need to move or be refactored before the pattern feels simpler.

## Validation

- `docs/atomic-design-migration-matrix.md` continues to classify React wrapper artifacts as app-level adapters rather than hidden shared components.
- Supported custom elements can receive complex props and custom events without route-local `any` casts.
- The note page, home search, and nav/theme flows use the same interop conventions.
- Typecheck and behavior tests fail when adapter contracts drift from the underlying custom elements.

## Open Questions

- Keep the adapter layer inside `apps/site` for now; revisit a dedicated React package only if reuse outside the site becomes real.
- Issue `004` remains out of scope for adapter refactors beyond preserving the accepted boundary; later issues should determine which components need full adapters versus only expanded JSX typings.
