---
id: '012'
created: 2026-05-19
updated: 2026-05-19
status: active
---

# Task: Align Storybook accessibility fixtures and regression checks

## Priority

P1 — Comes after the shared-component and live-site fixes because Storybook should validate the corrected accessibility behavior instead of preserving stale light-only examples.

## Dependencies

- Depends on Task 009: Repair dark-mode contrast across shared components.
- Depends on Task 010: Fix live-site navigation and note-link integrity.
- Depends on Task 011: Improve keyboard, motion, and monospace readability.
- Depends on the existing Storybook addon-a11y and addon-vitest setup in `apps/storybook/.storybook`.
- No ADR dependency; this task uses existing architecture.

## Assignability

**AFK** — the Storybook drift is already identified, and the project already has the addons needed for focused accessibility regression coverage.

## Context

Several Storybook page-context and component stories hardcode light-mode colors such as `#2c2820`, `#0e0c07`, and `#fafaf2`, which makes otherwise correct components appear inaccessible in dark mode. Storybook already includes addon-a11y and addon-vitest, but the current stories do not consistently act as reliable accessibility fixtures for the live digital garden site. This task makes Storybook a trustworthy validation surface again by moving examples back onto the shared token source of truth and adding focused regression checks.

## Use Cases

- **Feature**: Trustworthy dark-mode component review
- **Scenario**: Contributor toggles a story to dark mode
- **Given** a page-context or component story uses shared tokens instead of hardcoded light-only values
- **When** the contributor switches to dark mode
- **Then** the story remains legible and representative of the live site

- **Feature**: Accessibility regression detection in Storybook
- **Scenario**: Contributor changes a shared component
- **Given** the affected stories have focused accessibility regression coverage
- **When** a contrast, focus, labeling, or reduced-motion regression is introduced
- **Then** Storybook verification surfaces the regression before merge

## Definition of Ready

- The affected stories are identified, including sheet, callout, TOC, nav, breadcrumb, banner, search, and overview-style examples with hardcoded light-mode values.
- The shared token source of truth is available for story-level replacements.
- The list of focused accessibility behaviors to verify is known: dark-mode contrast, search naming/focus, and reduced-motion handling.
- The Storybook addons already configured (`@storybook/addon-a11y`, `@storybook/addon-vitest`) are available for focused checks.

## Functional Requirements

- `FR-001`: Storybook fixtures that currently hardcode light-only text or surface colors must be updated to consume shared tokens or theme-aware values.
- `FR-002`: Affected page-context stories must remain representative of the live site after the routing and accessibility fixes land.
- `FR-003`: Focused Storybook accessibility verification must cover the corrected dark-mode contrast surfaces.
- `FR-004`: Focused Storybook accessibility verification must cover the corrected search naming/focus behavior and reduced-motion-sensitive banner behavior where applicable.
- `FR-005`: Storybook-specific accessibility exceptions must remain limited to the explicitly documented false positives already configured in preview.

## Non-Functional Requirements

- `NFR-001`: Storybook examples must stay renderer-compatible with the current web-components setup.
- `NFR-002`: Story fixes must prefer shared tokens over per-story visual forks.
- `NFR-003`: Regression coverage must stay focused enough to run routinely without turning Storybook checks into a broad, flaky E2E suite.

## Observability Requirements

- `OBS-001`: Storybook test output must make failing accessibility stories visible in CI and local review.
- `OBS-002`: Accessibility verification must remain scoped enough that contributors can tell which story regressed.
- `OBS-003`: The task must not introduce new runtime telemetry; the verification surface is Storybook test output and addon-a11y results.

## Acceptance Criteria

- `AC-001`: **Given** a contributor opens an affected Storybook story in dark mode, **When** the story renders, **Then** the example uses theme-aware token values instead of hardcoded light-only foreground/background combinations.
- `AC-002`: **Given** a contributor runs the focused Storybook accessibility checks for the affected stories, **When** the corrected stories are evaluated, **Then** the previously confirmed contrast, search-label, focus, and motion issues no longer fail.
- `AC-003`: **Given** a future contributor reintroduces one of those issues in an affected story, **When** the focused Storybook verification runs, **Then** the regression is surfaced before merge.

## Required Tests

Choose the smallest meaningful test set for this task.
Do not create tests only to satisfy a category.
If a category is not relevant, write `Not applicable — <specific reason>`.

### Unit Tests

- `UT-001`: Not applicable — this task updates Storybook fixtures and focused Storybook verification rather than isolated pure functions.

### Integration Tests

- `IT-001`: **Scenario**: Storybook fixtures remain theme-aware and accessible  
  **Given** the affected component and page-context stories render in Storybook  
  **When** they are evaluated in light and dark themes through the configured accessibility tooling  
  **Then** the stories use shared tokens and pass the focused accessibility checks in scope  
  **And** any failing story is reported by story ID  
  Covers `FR-001`, `FR-002`, `FR-003`, `FR-004`, and `AC-001` through `AC-003`.

### Smoke Tests

- `SMK-001`: **Scenario**: Focused Storybook accessibility verification runs for the affected stories  
  **Given** Storybook is available with addon-a11y and addon-vitest configured  
  **When** the focused story verification command runs  
  **Then** the targeted stories execute without a Storybook configuration crash  
  Covers release confidence for `FR-003` and `FR-004`.

### End-to-End Tests

- `E2E-001`: Not applicable — this task strengthens Storybook fixtures and focused story verification, not a separate end-to-end user journey through the live app.

### Regression Tests

- `REG-001`: Not applicable — there is no tracked defect ID for the newly confirmed Storybook fixture drift and accessibility coverage gap.

### Performance Tests

- `PT-001`: Not applicable — this task does not introduce a new measured runtime performance target.

### Security Tests

- `ST-001`: Not applicable — this task does not change authentication, authorization, secrets, or untrusted input handling.

### Usability Tests

- `UX-001`: Verify an affected dark-mode story remains legible to a reviewer after replacing hardcoded light-only colors with shared tokens. Covers `AC-001`.

### Observability Tests

- `OT-001`: Verify the focused Storybook accessibility run reports the targeted story IDs when a story fails and reports success cleanly when the fixes are present. Covers `OBS-001` and `OBS-002`.

## Definition of Done

- Affected Storybook fixtures consume shared tokens or theme-aware values instead of hardcoded light-only colors.
- Required tests for this task pass.
- Focused Storybook accessibility verification covers the corrected contrast, focus, label, and motion behaviors in scope.
- Storybook becomes a trustworthy review surface for the live digital garden's shared accessibility behavior.
