---
id: '008'
created: 2026-05-17
updated: 2026-05-17
status: active
---

# Task: Document governance, Storybook parity, and deprecations

## Priority

P2 — Comes last because governance and cleanup should describe the system after the route slices and shared boundaries are proven in working code.

## Dependencies

- Depends on Task 004: Consolidate design tokens and primitive atoms.
- Depends on Task 005: Migrate the note template and page slice.
- Depends on Task 006: Migrate the home discovery slice.
- Depends on Task 007: Standardize React-Lit interop and migrate the nav/theme slice.
- Depends on ADR `docs/adrs/001-atomic-component-promotion-boundary.md`.
- Depends on ADR `docs/adrs/002-design-token-source-of-truth.md`.
- Depends on ADR `docs/adrs/003-react-lit-interop-boundary.md`.

## Assignability

**AFK** — after the implementation slices land, the remaining work is explicit documentation, Storybook information architecture, and legacy cleanup planning.

## Context

Atomic design refactors fail when the pattern library drifts from the real product. After the shared foundations and route slices are migrated, the project needs Storybook information architecture that matches the new taxonomy, clear contribution rules for promotion and deprecation, and an explicit status for legacy or low-confidence shared components such as `my-heading` or Storybook-only artifacts.

## Use Cases

- **Feature**: Design-system contribution governance
- **Scenario**: Contributor proposes a new shared component
- **Given** the project has atomic terminology and a promotion boundary
- **When** the contributor checks the design-system docs
- **Then** they can tell where the component belongs and how it should be documented or deprecated

- **Feature**: Storybook parity
- **Scenario**: Reviewer audits the design system after the refactor
- **Given** the component library and the live site have been migrated incrementally
- **When** the reviewer opens Storybook
- **Then** the Storybook structure reflects the real atomic system and the legacy status of older artifacts is visible

## Definition of Ready

- Tasks 004 through 007 are complete enough to describe the real migrated system.
- The atomic taxonomy and promotion boundary are settled.
- The current Storybook structure and legacy exports are identified.
- The components or aliases with unclear long-term status are listed.

## Functional Requirements

- `FR-001`: Storybook information architecture must reflect the approved atomic taxonomy.
- `FR-002`: The design system must document promotion rules, deprecation rules, and the expected relationship between shared components and site-local pages.
- `FR-003`: Legacy exports and low-confidence shared components must have an explicit status and replacement path.
- `FR-004`: Storybook docs such as the kitchen sink or equivalent overview must describe the current system instead of stale demo-only markup.
- `FR-005`: The final governance docs must point contributors to the canonical token source and React-Lit adapter boundary.

## Non-Functional Requirements

- `NFR-001`: Governance docs must be discoverable from the normal design-system workflow.
- `NFR-002`: The documentation must avoid contradicting the implemented shared boundaries.
- `NFR-003`: The cleanup plan must preserve backward compatibility or documented migration paths for legacy exports still in use.

## Observability Requirements

- `OBS-001`: Storybook must make the atomic taxonomy and legacy status of components visible to reviewers.
- `OBS-002`: Documentation updates must make missing migration paths or stale stories easy to detect in review.
- `OBS-003`: The legacy cleanup list must make unresolved deprecations explicit rather than leaving them as hidden tribal knowledge.

## Acceptance Criteria

- `AC-001`: **Given** a contributor reviews the design-system docs, **When** they decide where a component belongs, **Then** the docs tell them whether it should be shared, site-local, or deprecated.
- `AC-002`: **Given** a reviewer opens Storybook after the refactor, **When** they inspect the system structure, **Then** it matches the approved atomic taxonomy and current live-site patterns.
- `AC-003`: **Given** a legacy component or export still exists, **When** the reviewer checks its status, **Then** they can see whether it is active, deprecated, or scheduled for replacement.

## Required Tests

Choose the smallest meaningful test set for this task.
Do not create tests only to satisfy a category.
If a category is not relevant, write `Not applicable — <specific reason>`.

### Unit Tests

- `UT-001`: Not applicable — this task is documentation and Storybook structure work, not isolated runtime logic.

### Integration Tests

- `IT-001`: **Scenario**: Storybook and governance docs point to the current system  
  **Given** the migrated design system has approved taxonomy, token, and adapter boundaries  
  **When** Storybook docs and governance references are reviewed together  
  **Then** they point to the same atomic structure and legacy statuses  
  **And** contributors can trace shared-boundary guidance back to the ADRs and context file  
  Covers `FR-001`, `FR-002`, `FR-003`, and `FR-005`.

### Smoke Tests

- `SMK-001`: **Scenario**: Storybook still builds after the documentation reorganization  
  **Given** the workspace is built from a clean checkout  
  **When** Storybook starts or builds  
  **Then** the updated information architecture loads without broken documentation entries  
  Covers release confidence for `FR-001` and `FR-004`.

### End-to-End Tests

- `E2E-001`: Not applicable — this task does not change a complete end-user product journey.

### Regression Tests

- `REG-001`: Not applicable — there is no specific tracked defect ID for governance or Storybook taxonomy drift yet.

### Performance Tests

- `PT-001`: Not applicable — this task does not affect measured runtime performance.

### Security Tests

- `ST-001`: Not applicable — this task does not change authentication, authorization, secrets, or untrusted input handling.

### Usability Tests

- `UX-001`: Verify a contributor can find the promotion rule, deprecation status, and current shared component guidance from Storybook and linked docs without ambiguity. Covers `AC-001`, `AC-003`.

### Observability Tests

- `OT-001`: Not applicable — this task does not add runtime telemetry; its feedback loop is documentation and Storybook reviewability.

## Definition of Done

- Storybook structure and overview docs reflect the approved atomic system.
- Required tests for this task pass.
- Contribution guidance documents promotion, token, interop, and deprecation rules.
- Legacy exports and low-confidence shared components have an explicit status and migration path.
- Reviewers can use Storybook and project docs to understand the real migrated system without relying on prior conversation context.
