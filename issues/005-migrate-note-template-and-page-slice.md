---
id: '005'
created: 2026-05-17
updated: 2026-05-17
status: active
---

# Task: Migrate the note template and page slice

## Priority

P1 — First real tracer-bullet route after the shared foundations because the note page already exposes the clearest template boundary in the live site.

## Dependencies

- Depends on Task 004: Consolidate design tokens and primitive atoms.
- Depends on ADR `docs/adrs/001-atomic-component-promotion-boundary.md`.
- Depends on ADR `docs/adrs/003-react-lit-interop-boundary.md`.

## Assignability

**AFK** — after the boundary and interop ADRs are approved, the note route is a well-defined vertical slice with concrete existing behavior to preserve.

## Context

The note page is the strongest current example of template-plus-page composition. `garden-article` already provides named slots for breadcrumb, meta, content, sidebar, and backlinks, while the Next.js note route feeds real note content, TOC data, and backlinks through React wrappers. This task makes that route the first fully documented atomic template/page slice.

## Use Cases

- **Feature**: Note page rendering
- **Scenario**: Reader opens a note with a table of contents and backlinks
- **Given** a note has enough headings for a TOC and has backlinks in the manifest
- **When** the reader opens the note route
- **Then** the page shows the article template, meta tags, TOC, and backlinks correctly

- **Feature**: Optional note states
- **Scenario**: Reader opens a note without TOC or backlinks
- **Given** a note does not meet the sidebar or backlink conditions
- **When** the reader opens the note route
- **Then** the page omits those optional regions without breaking the article layout

## Definition of Ready

- ADR `docs/adrs/001-atomic-component-promotion-boundary.md` is accepted or has no open question blocking `garden-article` placement.
- ADR `docs/adrs/003-react-lit-interop-boundary.md` is accepted or has no open question blocking breadcrumb and TOC adapters.
- The current note route behavior in `apps/site/app/[...slug]/page.tsx` is documented.
- Representative note fixtures exist for with-TOC, without-TOC, and with-backlinks states.

## Functional Requirements

- `FR-001`: The note route must continue to render note title, metadata tags, rendered content, and optional breadcrumb, sidebar, and backlink regions.
- `FR-002`: `garden-article` must remain the template boundary for the note slice unless the approved promotion boundary says otherwise.
- `FR-003`: Breadcrumb and TOC data must use the approved React-Lit adapter pattern instead of route-local ad-hoc bridging.
- `FR-004`: Storybook must document the supported note template states using realistic content.
- `FR-005`: The route must preserve note rendering for notes with and without TOC and backlinks.

## Non-Functional Requirements

- `NFR-001`: The refactor must preserve static generation and existing route behavior for note pages.
- `NFR-002`: The rendered note content must keep the host prose styling contract intact.
- `NFR-003`: The note template states must remain accessible and visually stable in both themes.

## Observability Requirements

- `OBS-001`: Storybook must expose the with-sidebar, without-sidebar, and with-backlinks note template states so reviewers can inspect them explicitly.
- `OBS-002`: Build or test failures in note rendering must remain visible instead of being swallowed by adapter abstractions.
- `OBS-003`: The route-level tests must make missing TOC or backlink state handling easy to diagnose.

## Acceptance Criteria

- `AC-001`: **Given** a note with headings and backlinks, **When** the note route renders, **Then** the article template shows the breadcrumb, meta tags, content, TOC, and backlinks in the expected regions.
- `AC-002`: **Given** a note without enough headings for a TOC, **When** the note route renders, **Then** the sidebar region is omitted without breaking the rest of the layout.
- `AC-003`: **Given** the Storybook note template stories render representative note states, **When** reviewers inspect them, **Then** they match the supported live-site behaviors.

## Required Tests

Choose the smallest meaningful test set for this task.
Do not create tests only to satisfy a category.
If a category is not relevant, write `Not applicable — <specific reason>`.

### Unit Tests

- `UT-001`: Verify breadcrumb and TOC adapter helpers map data into the supported custom-element contracts. Covers `FR-003`.
- `UT-002`: Verify optional note regions are omitted when sidebar or backlink conditions are false. Covers `FR-005`, `AC-002`.

### Integration Tests

- `IT-001`: **Scenario**: Note route composes the article template with real processed note data  
  **Given** a processed note with HTML, TOC entries, and backlinks  
  **When** the note route renders the page  
  **Then** the article template receives the expected regions and metadata  
  **And** the optional sidebar and backlinks render only when the input data supports them  
  Covers `FR-001`, `FR-005`, and `AC-001`.

### Smoke Tests

- `SMK-001`: **Scenario**: A statically generated note page loads after the refactor  
  **Given** the site is built from a clean workspace  
  **When** a representative note route is opened  
  **Then** the page loads without a hydration or custom-element crash  
  Covers release confidence for `FR-001` and `NFR-001`.

### End-to-End Tests

- `E2E-001`: **Scenario**: Reader opens a note with sidebar content  
  **Given** a built site contains a note with a TOC and backlinks  
  **When** the reader opens that note page in the browser  
  **Then** the note title, content, TOC, and backlinks are visible  
  Covers `AC-001`.

### Regression Tests

- `REG-001`: Not applicable — there is no specific known defect ID for the note template state handling yet.

### Performance Tests

- `PT-001`: Not applicable — this task preserves an existing statically generated route and does not add a new measured performance risk.

### Security Tests

- `ST-001`: Not applicable — this task does not change authentication, authorization, secrets, or the trusted note HTML pipeline.

### Usability Tests

- `UX-001`: Verify the optional sidebar and backlinks states remain understandable and keyboard-accessible in the note template. Covers `AC-002`, `AC-003`.

### Observability Tests

- `OT-001`: Not applicable — this task does not add new runtime logs, metrics, traces, or analytics events.

## Definition of Done

- The note route uses the approved template and adapter boundaries.
- Required tests for this task pass.
- Storybook documents the supported note template state matrix with realistic content.
- The live note route preserves current behavior for with-TOC, without-TOC, and with-backlinks states.
- The prose styling contract needed by rendered note HTML remains documented and intact.
