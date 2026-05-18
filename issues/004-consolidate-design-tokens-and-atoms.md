---
id: '004'
created: 2026-05-17
updated: 2026-05-17
status: active
---

# Task: Consolidate design tokens and primitive atoms

## Priority

P0 — Required before route migrations because token drift and primitive inconsistency would otherwise spread into every later slice.

## Dependencies

- Depends on Task 003: Define atomic design boundaries and the migration matrix.
- Depends on ADR `docs/adrs/001-atomic-component-promotion-boundary.md`.
- Depends on ADR `docs/adrs/002-design-token-source-of-truth.md`.

## Assignability

**AFK** — once the boundary and token ADRs are approved, the requirements are concrete and the work can be delegated safely without mid-task human decisions.

## Context

Shared tokens are currently duplicated across the component package, the site, and Storybook. Primitive shared components such as tags, badges, buttons, dividers, and highlights already exist, but they are not yet framed as atoms with one canonical token source. This task creates the shared foundation that the route slices will depend on.

## Use Cases

- **Feature**: Shared token propagation
- **Scenario**: Maintainer updates a shared design token
- **Given** the component package, site, and Storybook all consume the same token contract
- **When** the maintainer changes a shared token value
- **Then** the visual change appears consistently across all three surfaces without editing duplicate copies

- **Feature**: Atomic primitive reuse
- **Scenario**: Contributor uses an atom on a route and in Storybook
- **Given** primitive atoms are documented and exported from the shared package
- **When** the contributor renders a tag, badge, or button in the site and Storybook
- **Then** the component uses the same token-backed behavior in both places

## Definition of Ready

- ADR `docs/adrs/001-atomic-component-promotion-boundary.md` is accepted or has no open question blocking atom placement.
- ADR `docs/adrs/002-design-token-source-of-truth.md` is accepted or has no open question blocking token import strategy.
- The in-scope atoms are confirmed as `garden-tag`, `garden-badge`, `garden-button`, `garden-divider`, and `garden-highlight`.
- The site and Storybook token consumers have been identified.

## Functional Requirements

- `FR-001`: The refactor must establish one canonical token source for shared design tokens.
- `FR-002`: The site and Storybook must consume the canonical token source instead of maintaining active duplicate token definitions.
- `FR-003`: The shared primitive atoms must be documented and organized as atoms in the design-system taxonomy.
- `FR-004`: Existing public exports for in-scope atoms must remain backward compatible for current site usage during the migration.
- `FR-005`: Storybook stories for in-scope atoms must exercise the supported variants in both light and dark themes.

## Non-Functional Requirements

- `NFR-001`: The task must avoid unrelated visual rewrites outside the token and atom scope.
- `NFR-002`: The site and Storybook must keep working with the existing pnpm workspace and build tooling.
- `NFR-003`: The shared atom API surface must stay stable enough for incremental route migration.

## Observability Requirements

- `OBS-001`: Storybook token and atom stories must make token drift visible in light and dark themes.
- `OBS-002`: The build and test pipeline must fail clearly if the site or Storybook stops consuming the canonical token source.
- `OBS-003`: Reviewers must be able to trace token changes back to the canonical source file in version control.

## Acceptance Criteria

- `AC-001`: **Given** the shared token source is updated, **When** the site and Storybook load, **Then** they both reflect the same token values without editing separate token copies.
- `AC-002`: **Given** a contributor imports an in-scope atom from `@notes/components`, **When** they use it on a real route and in Storybook, **Then** the atom behaves consistently in both places.
- `AC-003`: **Given** the shared atom stories run in light and dark themes, **When** the stories render, **Then** their supported variants remain visually and behaviorally valid.

## Required Tests

Choose the smallest meaningful test set for this task.
Do not create tests only to satisfy a category.
If a category is not relevant, write `Not applicable — <specific reason>`.

### Unit Tests

- `UT-001`: Verify the in-scope atom components still render their supported variants and states after token consolidation. Covers `FR-003`, `FR-004`.

### Integration Tests

- `IT-001`: **Scenario**: Site and Storybook consume the canonical token source  
  **Given** the canonical token file is the only shared token definition  
  **When** the site and Storybook build their styles  
  **Then** both surfaces resolve the shared token names successfully  
  **And** no active duplicate token file is required to render the in-scope atoms  
  Covers `FR-001`, `FR-002`, and `AC-001`.

### Smoke Tests

- `SMK-001`: **Scenario**: Shared atoms render after token consolidation  
  **Given** the component package and Storybook are built from a clean workspace  
  **When** the atom stories and the site home route start  
  **Then** they load without a token import crash  
  Covers release confidence for `FR-005`.

### End-to-End Tests

- `E2E-001`: Not applicable — this task changes shared foundations rather than a single complete user journey.

### Regression Tests

- `REG-001`: Not applicable — there is no single previously reported defect ID to preserve beyond the new shared-source contract.

### Performance Tests

- `PT-001`: Not applicable — this task does not introduce a new performance-sensitive runtime path.

### Security Tests

- `ST-001`: Not applicable — token consolidation and atom taxonomy do not affect authentication, authorization, secrets, or untrusted input handling.

### Usability Tests

- `UX-001`: Verify focus, disabled, and high-contrast states remain clear for the in-scope atoms in Storybook light and dark themes. Covers `AC-003`.

### Observability Tests

- `OT-001`: Not applicable — the task relies on existing build and story signals and does not add new runtime telemetry.

## Definition of Done

- The canonical token source is implemented and consumed by the component package, site, and Storybook.
- The in-scope primitive atoms are documented as atoms and remain backward compatible.
- Required tests for this task pass.
- Storybook demonstrates the in-scope atoms and token behavior in both themes.
- Any remaining app-local styles are explicitly limited to non-shared layout or prose concerns.
