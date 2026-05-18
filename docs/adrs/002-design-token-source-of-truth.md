# ADR 002: Use one canonical design-token source for components, site, and Storybook

## Status

Accepted

## Date

2026-05-17

## Related Tasks

- `issues/003-define-atomic-design-boundaries.md`
- `issues/004-consolidate-design-tokens-and-atoms.md`
- `issues/007-standardize-react-lit-interop-and-nav.md`

## Context

- Design tokens are currently duplicated in `packages/components/src/styles/tokens.css`, `apps/site/app/globals.css`, and `apps/storybook/src/styles/tokens.css`.
- Token drift would cause visual inconsistency across the site, component package, and Storybook.
- The refactor needs a stable token contract before atom and theme work can proceed safely.

## Decision

- Make the shared component package the canonical token source for reusable design tokens.
- Have the site and Storybook import that token source instead of maintaining active copies.
- Allow app-local styles such as prose rules or route layout utilities to extend the shared tokens without redefining them.

## Options Considered

1. Use the shared component package token stylesheet as the canonical source and import it into the site and Storybook. `(recommended)`
2. Keep separate token copies in the site, Storybook, and component package and update them manually.
3. Create a brand-new standalone tokens package before any route migration work begins.

## Consequences

Positive:

- Eliminates active token drift across the three main surfaces.
- Lets atom and theme changes propagate consistently through the site and Storybook.

Negative:

- The site and Storybook build setup must consume shared CSS correctly.
- Untangling existing app-local overrides may surface hidden dependencies on the duplicated copies.

## Validation

- `docs/atomic-design-migration-matrix.md` remains aligned with the approved token boundary and does not classify token copies as separate shared sources.
- `apps/site/app/globals.css` and `apps/storybook/src/styles/tokens.css` now import `packages/components/src/styles/tokens.css` directly instead of maintaining active duplicate token definitions.
- Updating a shared token changes the component package, site, and Storybook without editing separate copies.
- Storybook token docs and the live site show matching values in light and dark themes.
- App-local prose and layout styles continue to work without redefining shared token names.

## Open Questions

- App-local prose and route-layout variables should remain outside the canonical token file unless future reuse proves they are shared design tokens.
