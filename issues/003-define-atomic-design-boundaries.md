---
id: '003'
created: 2026-05-17
updated: 2026-05-17
status: active
---

# Task: Define atomic design boundaries and the migration matrix

## Priority

P0 — Required before implementation because every refactor task depends on a shared atomic vocabulary, package boundary, and migration target for existing components.

## Dependencies

- No task dependency; this task starts the refactor.
- Depends on the current component inventory in `packages/components`, `apps/site`, and `apps/storybook`.
- No ADR dependency; this task creates the ADR stubs the rest of the plan depends on.

## Assignability

**HITL** — requires human approval of the recommended component promotion boundary, canonical token source, and React-Lit adapter boundary before downstream implementation begins.

## Context

The current design system is a flat Lit component export surface with duplicated tokens, manual React wrappers, and no explicit atomic taxonomy. Before moving code, the refactor needs one shared vocabulary, an inventory of what exists today, and explicit decisions for what belongs in the shared package versus the site app.

## Use Cases

- **Feature**: Atomic design migration planning
- **Scenario**: Maintainer audits the current system before refactoring
- **Given** the monorepo contains shared Lit components, Storybook stories, and Next.js route compositions
- **When** the maintainer reviews the design system inventory
- **Then** each current UI artifact has an atomic level, target home, and migration status

- **Feature**: Contribution guidance
- **Scenario**: Contributor needs to place a new component correctly
- **Given** the project uses atomic design terminology
- **When** the contributor reads the context and ADRs
- **Then** they can tell whether the component should be shared, site-local, or legacy

## Definition of Ready

- Storybook documentation is available for the current shared components.
- The existing site routes and wrappers have been inspected for real usage patterns.
- `CONTEXT.md` is available to record the project vocabulary.
- `docs/adrs/001-atomic-component-promotion-boundary.md`, `docs/adrs/002-design-token-source-of-truth.md`, and `docs/adrs/003-react-lit-interop-boundary.md` are created by this task.

## Functional Requirements

- `FR-001`: The task must define and record the project vocabulary for Atomic Design, Atom, Molecule, Organism, Template, Page, Component Promotion Boundary, Token Source of Truth, and React-Lit Adapter.
- `FR-002`: The task must classify every current shared component and every real site composition in scope as shared, site-local, legacy, or undecided.
- `FR-003`: The task must assign each in-scope artifact an atomic level and a target implementation home.
- `FR-004`: The task must create ADR stubs for the component promotion boundary, token source of truth, and React-Lit interop boundary.
- `FR-005`: The task must produce sequenced implementation tasks that depend on the inventory and ADRs instead of bypassing them.

## Non-Functional Requirements

- `NFR-001`: The inventory must be understandable without prior conversation context.
- `NFR-002`: The migration matrix must use the same terminology across issues, ADRs, Storybook, and the site.
- `NFR-003`: The task must not require runtime code changes to validate the design-system direction.

## Observability Requirements

- `OBS-001`: The migration matrix must make every in-scope component's atomic level and target home visible in version-controlled documents.
- `OBS-002`: The ADRs must expose open architecture decisions instead of allowing downstream tasks to depend on hidden assumptions.
- `OBS-003`: Cross-links between `CONTEXT.md`, ADRs, and issue files must make missing decisions discoverable during review.

## Acceptance Criteria

- `AC-001`: **Given** the current component package, site routes, and Storybook stories, **When** the inventory is completed, **Then** each in-scope artifact has an atomic level, target home, and migration status.
- `AC-002`: **Given** a contributor reads the planning output, **When** they check the ADRs and context file, **Then** they can tell which decisions must be approved before implementation starts.
- `AC-003`: **Given** downstream tasks reference the planning output, **When** they list dependencies, **Then** they point to the created ADR files instead of vague architecture assumptions.

## Required Tests

Choose the smallest meaningful test set for this task.
Do not create tests only to satisfy a category.
If a category is not relevant, write `Not applicable — <specific reason>`.

### Unit Tests

- `UT-001`: Not applicable — this task creates planning artifacts and does not implement isolated runtime logic.

### Integration Tests

- `IT-001`: **Scenario**: Planning artifacts stay internally consistent  
  **Given** `CONTEXT.md`, the three ADR stubs, and the issue files exist  
  **When** a reviewer follows their cross-links and dependency references  
  **Then** each downstream issue points to the required ADRs  
  **And** the vocabulary used in the issues matches the context file  
  Covers `FR-001`, `FR-004`, and `FR-005`.

### Smoke Tests

- `SMK-001`: Not applicable — this task does not change build, startup, or deploy behavior.

### End-to-End Tests

- `E2E-001`: Not applicable — this task does not change a user-facing application journey.

### Regression Tests

- `REG-001`: Not applicable — there is no known previous production defect that this planning-only task must lock down.

### Performance Tests

- `PT-001`: Not applicable — this task does not affect runtime latency, rendering, or throughput.

### Security Tests

- `ST-001`: Not applicable — this task does not touch authentication, authorization, secrets, or untrusted input handling.

### Usability Tests

- `UX-001`: Not applicable — this task creates internal planning and governance artifacts, not end-user UI behavior.

### Observability Tests

- `OT-001`: Not applicable — this task does not add application logs, metrics, traces, or analytics events.

## Definition of Done

- `CONTEXT.md` records the atomic design vocabulary for this project.
- The three ADR stubs exist and are linked from dependent tasks.
- Required tests for this task pass.
- The migration matrix and task sequence are committed in version-controlled files.
- The required human approval checkpoint for the ADR recommendations is explicit.
