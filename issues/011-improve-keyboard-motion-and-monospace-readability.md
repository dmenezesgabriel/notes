---
id: '011'
created: 2026-05-19
updated: 2026-05-19
status: active
---

# Task: Improve keyboard, motion, and monospace readability

## Priority

P1 — Comes after the highest-severity dark-mode and route-integrity fixes because it refines ongoing reading and search usability across the home page and note template.

## Dependencies

- Depends on Task 009: Repair dark-mode contrast across shared components.
- Depends on the existing React-Lit adapter pattern used by the site search wrapper.
- No ADR dependency; this task uses existing architecture.

## Assignability

**AFK** — the weak focus treatment, placeholder-only naming, motion behavior, and undersized monospace text are already confirmed and can be fixed without an architectural decision.

## Context

Playwright inspection confirmed that `garden-search` currently relies on placeholder text as its accessible name and uses only a subtle transform as its keyboard focus indicator. The site and Storybook also use continuously animating marquee text without a reduced-motion fallback. Readability inspection found undersized `Cutive Mono` usage in breadcrumb/search/code treatments and undersized note code text in the live prose styles. These problems are practical accessibility issues for keyboard users, motion-sensitive readers, and anyone reading dense technical content.

## Use Cases

- **Feature**: Accessible site search
- **Scenario**: Keyboard reader starts a search from the home page
- **Given** the reader tabs into the search control
- **When** focus enters the search field and the reader types a query
- **Then** the control exposes a stable accessible name and a clearly visible focus state

- **Feature**: Motion-sensitive reading
- **Scenario**: Reader prefers reduced motion
- **Given** the reader's system requests reduced motion
- **When** they open the home page or any banner-using Storybook example
- **Then** the marquee and related animated motion stop or fall back to a static presentation

- **Feature**: Readable technical content
- **Scenario**: Reader scans breadcrumbs and code examples
- **Given** the reader is on a note page or component story using monospace treatments
- **When** they read breadcrumb text, inline code, or code blocks
- **Then** the monospace typography is legible without zooming immediately

## Definition of Ready

- The affected surfaces are confirmed: `garden-search`, banner/marquee motion, breadcrumb mono text, note prose inline code, and note prose code blocks.
- The site wrapper for `garden-search` is identified as the place where any new label prop must be wired from React into the shared custom element.
- The motion fixes stay within CSS/media-query behavior and do not require a different banner component.
- The typography fixes stay within targeted size/line-height adjustments rather than a full typography redesign.

## Functional Requirements

- `FR-001`: `garden-search` must expose a stable accessible name that does not depend on placeholder text remaining visible.
- `FR-002`: `garden-search` must render a clearly visible keyboard focus indicator beyond the current transform-only treatment.
- `FR-003`: The site search wrapper must pass the shared search naming contract through the React-Lit adapter boundary without breaking query synchronization.
- `FR-004`: Banner and marquee motion used by the site and shared components must respect `prefers-reduced-motion`.
- `FR-005`: Monospace treatments used for breadcrumb text, search text, inline code, and code blocks must be resized to a more readable baseline in the live site and shared components.

## Non-Functional Requirements

- `NFR-001`: The fixes must preserve the current zine visual identity instead of replacing the typography system or motion pattern wholesale.
- `NFR-002`: Monospace readability improvements must remain responsive across desktop and mobile widths.
- `NFR-003`: Keyboard focus treatments must be visible in both light and dark themes.

## Observability Requirements

- `OBS-001`: Component and app tests must make the search control's accessible name and keyboard focus behavior explicit.
- `OBS-002`: Reduced-motion behavior must be verified in tests or stories so future motion regressions are visible during review.
- `OBS-003`: Typography changes must be validated through focused component or app assertions rather than ad hoc runtime logging.

## Acceptance Criteria

- `AC-001`: **Given** a keyboard reader tabs to the home-page search control, **When** focus enters the field, **Then** a clearly visible focus indicator appears and the control keeps a stable accessible name after text entry.
- `AC-002`: **Given** the reader types a search query, **When** the URL updates and results render, **Then** the updated shared search control still exposes the correct label and current value.
- `AC-003`: **Given** the reader prefers reduced motion, **When** they view a marquee/banner surface, **Then** the motion falls back to a non-animating presentation.
- `AC-004`: **Given** the reader opens a representative note page, **When** they read breadcrumb text and code snippets, **Then** the monospace text is more readable than the current undersized baseline.

## Required Tests

Choose the smallest meaningful test set for this task.
Do not create tests only to satisfy a category.
If a category is not relevant, write `Not applicable — <specific reason>`.

### Unit Tests

- `UT-001`: Verify `garden-search` renders the new accessible-name contract and visible focus treatment hooks without depending on placeholder text. Covers `FR-001`, `FR-002`, and `AC-001`.
- `UT-002`: Verify the site search wrapper passes the shared label/name contract and current query value through the React-Lit adapter boundary. Covers `FR-003`, `AC-002`.

### Integration Tests

- `IT-001`: **Scenario**: Search behavior remains accessible through the app wrapper  
  **Given** the home page renders the shared search custom element through the React-Lit adapter  
  **When** a reader focuses the field and enters a query  
  **Then** the wrapper keeps the accessible name and query value in sync  
  **And** the page updates to the expected search-results state  
  Covers `FR-001`, `FR-002`, `FR-003`, and `AC-001` through `AC-002`.

### Smoke Tests

- `SMK-001`: Not applicable — this task changes interaction, motion, and typography details without affecting startup or deployment availability.

### End-to-End Tests

- `E2E-001`: **Scenario**: Keyboard reader searches from the home page  
  **Given** the reader is on `/notes/` using keyboard navigation  
  **When** they tab to the search field and submit a representative query  
  **Then** the search field remains clearly focusable and the results state updates correctly  
  Covers `AC-001` and `AC-002`.

### Regression Tests

- `REG-001`: Not applicable — there is no tracked defect ID for the newly confirmed search-label, focus-indicator, motion, or monospace-size issues.

### Performance Tests

- `PT-001`: Not applicable — this task adjusts accessibility behavior and typography without adding a new measured performance target.

### Security Tests

- `ST-001`: Not applicable — this task does not change authentication, authorization, secrets, or untrusted input handling.

### Usability Tests

- `UX-001`: Verify representative breadcrumb, search, inline-code, and code-block surfaces are readable at the new monospace baseline in both themes. Covers `AC-004`.
- `UX-002`: Verify reduced-motion readers are not forced to watch a continuously scrolling marquee. Covers `AC-003`.

### Observability Tests

- `OT-001`: Not applicable — this task does not add or modify runtime logs, metrics, traces, or analytics events.

## Definition of Done

- The shared search contract, focus treatment, motion fallback, and monospace readability updates are implemented in the correct shared-component and app-style boundaries.
- Required tests for this task pass.
- The live site preserves query behavior while exposing a more accessible search experience.
- Representative Storybook stories show the corrected focus, motion, and readable monospace treatments.
