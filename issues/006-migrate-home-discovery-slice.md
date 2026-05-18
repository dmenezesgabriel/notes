---
id: '006'
created: 2026-05-17
updated: 2026-05-17
status: active
---

# Task: Migrate the home discovery slice

## Priority

P1 — Second tracer-bullet route after the note page because it validates search, listing, and route-local composition on the public landing experience.

## Dependencies

- Depends on Task 004: Consolidate design tokens and primitive atoms.
- Depends on Task 005: Migrate the note template and page slice.
- Depends on ADR `docs/adrs/001-atomic-component-promotion-boundary.md`.
- Depends on ADR `docs/adrs/003-react-lit-interop-boundary.md`.

## Assignability

**AFK** — after the boundary and interop ADRs are approved, the home route has concrete behaviors and can be migrated incrementally without additional architecture decisions.

## Context

The home page currently mixes shared components with heavy inline composition in the app: a route-specific hero, category sections, and client-side search results rendered through `garden-card` and `garden-search`. This task refactors that landing experience into explicit atomic compositions while keeping route-specific page structures in `apps/site` unless reuse is proven.

## Use Cases

- **Feature**: Home discovery page
- **Scenario**: Reader lands on the site without a search query
- **Given** the manifest contains notes across multiple categories
- **When** the reader opens the home page
- **Then** the page shows the hero and category sections with note listings

- **Feature**: Home search
- **Scenario**: Reader searches for notes from the landing page
- **Given** the home page search input is available
- **When** the reader enters a query that has matches or no matches
- **Then** the page shows either the matching note cards or a clear no-results state

## Definition of Ready

- ADR `docs/adrs/001-atomic-component-promotion-boundary.md` is accepted or has no open question blocking shared card and search scope.
- ADR `docs/adrs/003-react-lit-interop-boundary.md` is accepted or has no open question blocking the search adapter pattern.
- The current default, results, and no-results home states are documented.
- Representative manifest data exists for multiple categories and search result extremes.

## Functional Requirements

- `FR-001`: The home route must preserve its default discovery state with hero content and categorized note listings.
- `FR-002`: The home route must preserve its search results and no-results states.
- `FR-003`: Shared `garden-card` and `garden-search` behavior must be validated against real home-page content extremes.
- `FR-004`: Route-specific hero and category composition must remain in `apps/site` unless the approved promotion boundary proves broader reuse.
- `FR-005`: Storybook must document the relevant shared home-building blocks and their real-content states.

## Non-Functional Requirements

- `NFR-001`: Search interaction and URL synchronization must remain stable during the refactor.
- `NFR-002`: The home route must stay responsive across its discovery and search states.
- `NFR-003`: The route refactor must avoid coupling shared components to home-page-only copy or layout assumptions.

## Observability Requirements

- `OBS-001`: Storybook must expose real-content card and search states so visual regressions are visible during review.
- `OBS-002`: Tests must make default, results, and no-results home states explicitly observable.
- `OBS-003`: Search query synchronization failures must remain easy to diagnose through route and component tests.

## Acceptance Criteria

- `AC-001`: **Given** the home route loads without a query, **When** the page renders, **Then** the hero and category sections appear with note cards.
- `AC-002`: **Given** the reader submits a query with matches, **When** the search state renders, **Then** the page shows matching cards and a clear results header.
- `AC-003`: **Given** the reader submits a query with no matches, **When** the search state renders, **Then** the page shows a clear no-results message and a way to clear the query.

## Required Tests

Choose the smallest meaningful test set for this task.
Do not create tests only to satisfy a category.
If a category is not relevant, write `Not applicable — <specific reason>`.

### Unit Tests

- `UT-001`: Verify the search filtering and excerpt-cleaning helpers handle representative home-page content inputs. Covers `FR-002`, `FR-003`.
- `UT-002`: Verify the home state logic distinguishes default, results, and no-results rendering paths. Covers `AC-001`, `AC-002`, `AC-003`.

### Integration Tests

- `IT-001`: **Scenario**: Home route composes shared card and search components with real manifest data  
  **Given** a manifest with categorized notes and searchable content  
  **When** the home route renders with and without a query  
  **Then** it shows the expected default, results, and no-results states  
  **And** the shared card and search contracts are exercised with real content  
  Covers `FR-001`, `FR-002`, `FR-003`, and `AC-001`.

### Smoke Tests

- `SMK-001`: **Scenario**: Home page loads after the discovery refactor  
  **Given** the site is built from a clean workspace  
  **When** the reader opens the home route  
  **Then** the route loads without a client-side crash  
  Covers release confidence for `FR-001`.

### End-to-End Tests

- `E2E-001`: **Scenario**: Reader searches from the landing page  
  **Given** the reader is on the home page  
  **When** they search for a known term and then a missing term  
  **Then** they see the matching results state and the no-results state with a clear reset path  
  Covers `AC-002`, `AC-003`.

### Regression Tests

- `REG-001`: Not applicable — there is no known previous defect ID tied to the landing-page refactor yet.

### Performance Tests

- `PT-001`: Not applicable — this task preserves the current client-side search model and does not introduce a new measured performance requirement.

### Security Tests

- `ST-001`: Not applicable — this task does not change authentication, authorization, secrets, or untrusted input handling.

### Usability Tests

- `UX-001`: Verify the home search makes the results count, no-results copy, and clear action understandable in keyboard and screen-reader use. Covers `AC-002`, `AC-003`.

### Observability Tests

- `OT-001`: Not applicable — this task does not add new runtime telemetry beyond the explicit state coverage in route and story tests.

## Definition of Done

- The home route uses explicit atomic compositions while preserving its route-specific structures where reuse is unproven.
- Required tests for this task pass.
- Shared card and search stories reflect real home-page states and content extremes.
- The live home page preserves default, results, and no-results behavior.
- The route remains free of new shared-library abstractions that are only justified by this one page.
