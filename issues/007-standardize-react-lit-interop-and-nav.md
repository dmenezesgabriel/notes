---
id: '007'
created: 2026-05-17
updated: 2026-05-17
status: active
---

# Task: Standardize React-Lit interop and migrate the nav/theme slice

## Priority

P2 — Comes after the first route slices because navigation and theme behavior are the highest-coupling parts of the system and should be migrated only after the shared contracts are proven.

## Dependencies

- Depends on Task 005: Migrate the note template and page slice.
- Depends on Task 006: Migrate the home discovery slice.
- Depends on ADR `docs/adrs/002-design-token-source-of-truth.md`.
- Depends on ADR `docs/adrs/003-react-lit-interop-boundary.md`.

## Assignability

**AFK** — after the token and interop ADRs are approved, the nav/theme behavior and adapter consolidation can be implemented against known existing site behavior.

## Context

The current app bridges Lit components into React with route-local wrappers and partial JSX typings. `garden-nav` is the highest-coupling shared component because it owns active-link rendering, theme switching, and event emission, while the site wrapper persists theme choice and assigns complex props imperatively. This task standardizes the adapter pattern and applies it to the navigation and theme slice.

## Use Cases

- **Feature**: Shared React-Lit adapter boundary
- **Scenario**: Contributor renders a supported custom element from React
- **Given** the project has a central adapter pattern and typings for supported elements
- **When** the contributor passes complex props or listens to custom events
- **Then** they do so without route-local `any` casts or bespoke wrapper logic

- **Feature**: Navigation and theme persistence
- **Scenario**: Reader toggles the site theme from the navigation
- **Given** the site navigation is visible
- **When** the reader changes the theme and navigates between routes
- **Then** the selected theme and active navigation state remain correct

## Definition of Ready

- ADR `docs/adrs/002-design-token-source-of-truth.md` is accepted or has no open question blocking theme token usage.
- ADR `docs/adrs/003-react-lit-interop-boundary.md` is accepted or has no open question blocking adapter placement.
- The current wrapper behavior for nav, search, breadcrumb, and TOC is documented.
- The supported custom elements that need adapters versus only typings are identified.

## Functional Requirements

- `FR-001`: Supported custom elements must use the approved centralized React-Lit adapter pattern for complex props and custom events.
- `FR-002`: The app's JSX typings must cover the supported custom elements used in the site.
- `FR-003`: `garden-nav` must preserve active-link behavior, theme switching, and theme persistence after the refactor.
- `FR-004`: Shared nav stories must document real page-context behavior rather than only isolated happy paths.
- `FR-005`: Route-local wrapper duplication must be reduced for the supported custom elements in scope.

## Non-Functional Requirements

- `NFR-001`: The Lit component package must remain framework-agnostic.
- `NFR-002`: Theme changes must remain visually stable across light and dark modes.
- `NFR-003`: The adapter layer must improve maintainability by making supported component usage more type-safe than the current route-local wrappers.

## Observability Requirements

- `OBS-001`: Typecheck failures must surface missing custom-element typings or adapter drift clearly.
- `OBS-002`: Tests must make theme persistence and active-link behavior visible across route changes.
- `OBS-003`: Storybook must expose nav behavior in realistic page context so regressions are easy to spot during review.

## Acceptance Criteria

- `AC-001`: **Given** a supported custom element needs complex props or custom events, **When** it is used from React, **Then** it goes through the approved adapter boundary instead of route-local `any` casts.
- `AC-002`: **Given** the reader toggles the theme from the navigation, **When** they navigate or reload the site, **Then** the selected theme remains applied.
- `AC-003`: **Given** the reader opens a route in the site, **When** the navigation renders, **Then** the correct active link is shown.

## Required Tests

Choose the smallest meaningful test set for this task.
Do not create tests only to satisfy a category.
If a category is not relevant, write `Not applicable — <specific reason>`.

### Unit Tests

- `UT-001`: Verify adapter helpers assign complex props and wire custom events for supported custom elements. Covers `FR-001`, `FR-005`.
- `UT-002`: Verify theme persistence helpers read and write the supported theme values safely. Covers `FR-003`, `AC-002`.

### Integration Tests

- `IT-001`: **Scenario**: Navigation and adapters work through the centralized React-Lit boundary  
  **Given** the site renders supported custom elements from React  
  **When** the navigation receives links and emits a theme-change event  
  **Then** the adapter layer assigns the expected props and updates the document theme state  
  **And** the active navigation state remains correct for the current route  
  Covers `FR-001`, `FR-003`, `FR-005`, and `AC-003`.

### Smoke Tests

- `SMK-001`: **Scenario**: Site layout loads with the standardized navigation  
  **Given** the site is built from a clean workspace  
  **When** the reader opens a route with the shared layout  
  **Then** the navigation renders without a custom-element or hydration crash  
  Covers release confidence for `FR-003`.

### End-to-End Tests

- `E2E-001`: **Scenario**: Reader toggles theme and keeps it across navigation  
  **Given** the reader is on the site with navigation visible  
  **When** they change the theme and move to another route  
  **Then** the selected theme and active link remain correct  
  Covers `AC-002`, `AC-003`.

### Regression Tests

- `REG-001`: Not applicable — there is no single tracked defect ID for the current wrapper duplication or nav migration yet.

### Performance Tests

- `PT-001`: Not applicable — this task reorganizes adapter logic and theme behavior without introducing a new measured performance target.

### Security Tests

- `ST-001`: Not applicable — this task does not change authentication, authorization, secrets, or untrusted input handling.

### Usability Tests

- `UX-001`: Verify the navigation theme control and active-link state remain clear and keyboard-accessible in both themes. Covers `AC-002`, `AC-003`.

### Observability Tests

- `OT-001`: Not applicable — this task does not add new runtime logs, metrics, traces, or analytics events.

## Definition of Done

- Supported custom elements in scope use the approved centralized adapter pattern or explicit typings.
- Required tests for this task pass.
- The navigation and theme behavior are preserved in the live site.
- Storybook documents the navigation in realistic page context.
- The component package remains framework-agnostic while the React app gains a clearer interop boundary.
