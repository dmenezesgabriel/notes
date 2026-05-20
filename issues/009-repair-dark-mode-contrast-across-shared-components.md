---
id: '009'
created: 2026-05-19
updated: 2026-05-19
status: active
---

# Task: Repair dark-mode contrast across shared components

## Priority

P0 — Direct WCAG AA failures in shared atoms and organisms affect both the live digital garden site and the Storybook design system whenever readers switch to dark mode.

## Dependencies

- No task dependency; can start against the current shared component package and token source of truth.
- No ADR dependency; this task uses existing architecture.

## Assignability

**AFK** — the affected components, failing contrast combinations, and acceptable minimal-fix direction are already known from live Playwright inspection.

## Context

The shared Lit design system currently maps dark-mode fills to Catppuccin pastels while several filled controls still render light foreground text. Playwright inspection confirmed failing dark-mode contrast for `garden-button`, `garden-tag`, `garden-banner`, and the `garden-nav` theme toggle/inactive state. Because these are shared atoms and organisms, one token or component-level mistake propagates to the note page, home page, and Storybook examples.

## Use Cases

- **Feature**: Dark-mode component readability
- **Scenario**: Reader uses the digital garden in dark mode
- **Given** the reader has selected dark theme
- **When** they view filled buttons, tags, banners, and nav controls
- **Then** the text remains readable without abandoning the current visual identity

- **Feature**: Shared dark-mode review in Storybook
- **Scenario**: Contributor validates a component in the design system workbench
- **Given** a shared component story is rendered in dark mode
- **When** the contributor reviews filled and inactive states
- **Then** the story reflects the same accessible contrast behavior expected in the live site

## Definition of Ready

- The current failing component list is confirmed: `garden-button`, `garden-tag`, `garden-banner`, and `garden-nav` dark-mode states.
- The shared token source of truth in `packages/components/src/styles/tokens.css` is available for token-driven fixes.
- The implementation approach stays within minimal adjustments to foreground/background token usage rather than a palette redesign.
- The target contrast threshold for normal-size control text is defined as WCAG AA compliant.

## Functional Requirements

- `FR-001`: Filled `garden-button` variants must use a dark-mode foreground/background pairing that passes WCAG AA in dark theme.
- `FR-002`: Filled `garden-tag` variants must use a dark-mode foreground/background pairing that passes WCAG AA in dark theme.
- `FR-003`: `garden-banner` text and background must remain readable in dark theme while preserving the existing banner composition.
- `FR-004`: `garden-nav` link, active-link, and theme-toggle states must remain legible in dark theme, including inactive icon-only controls.
- `FR-005`: The dark-mode fixes must remain token-driven so the live site and Storybook consume the same contrast behavior.

## Non-Functional Requirements

- `NFR-001`: The fixes must preserve the project's existing neu-brutalism × punk zine design language instead of introducing a new dark-mode palette.
- `NFR-002`: Shared component contrast behavior must be consistent across the live site and Storybook.
- `NFR-003`: The fixes must avoid per-story hardcoded overrides for shared component states that belong in the component package or token source of truth.

## Observability Requirements

- `OBS-001`: Shared component tests must make the corrected dark-mode states visible by asserting the rendered dark-theme classes, tokens, or computed foreground assignments for the affected variants.
- `OBS-002`: Storybook accessibility verification for the affected stories must fail visibly if dark-mode contrast regresses.
- `OBS-003`: The task must not introduce ad hoc runtime logging; accessibility verification should stay test- and story-driven.

## Acceptance Criteria

- `AC-001`: **Given** a reader views `garden-button` variants in dark mode, **When** the filled variants render, **Then** their text is readable at WCAG AA contrast without changing the button variant semantics.
- `AC-002`: **Given** a reader views `garden-tag` variants in dark mode, **When** the filled variants render, **Then** their labels remain readable at WCAG AA contrast.
- `AC-003`: **Given** a contributor opens the banner story in dark mode, **When** the banner text renders, **Then** the text/background pairing is readable without replacing the banner component with a different pattern.
- `AC-004`: **Given** a reader views the shared navigation in dark mode, **When** they inspect active links and theme-toggle states, **Then** all states remain visually distinguishable and readable.

## Required Tests

Choose the smallest meaningful test set for this task.
Do not create tests only to satisfy a category.
If a category is not relevant, write `Not applicable — <specific reason>`.

### Unit Tests

- `UT-001`: Verify `garden-button` applies the corrected dark-mode foreground treatment for filled variants. Covers `FR-001`, `AC-001`.
- `UT-002`: Verify `garden-tag` applies the corrected dark-mode foreground treatment for filled variants. Covers `FR-002`, `AC-002`.
- `UT-003`: Verify `garden-nav` dark-mode state styling keeps active and inactive control treatments distinct. Covers `FR-004`, `AC-004`.

### Integration Tests

- `IT-001`: **Scenario**: Shared dark-mode stories render readable filled states  
  **Given** the affected shared component stories render under `data-theme="dark"`  
  **When** the filled button, tag, banner, and nav states are inspected  
  **Then** the shared components expose the corrected dark-mode foreground/background pairings  
  **And** Storybook accessibility checks no longer report the confirmed contrast failures for those states  
  Covers `FR-001`, `FR-002`, `FR-003`, `FR-004`, and `AC-001` through `AC-004`.

### Smoke Tests

- `SMK-001`: Not applicable — this task changes shared styling and component states, not app startup or deployment availability.

### End-to-End Tests

- `E2E-001`: Not applicable — the critical risk is component-state contrast parity, which is better covered by shared component tests and focused app accessibility checks in later tasks.

### Regression Tests

- `REG-001`: Not applicable — there is no tracked defect ID for the newly confirmed dark-mode contrast failures.

### Performance Tests

- `PT-001`: Not applicable — this task changes token and foreground styling without a new measured performance target.

### Security Tests

- `ST-001`: Not applicable — this task does not change authentication, authorization, secrets, or untrusted input handling.

### Usability Tests

- `UX-001`: Verify keyboard users can still distinguish nav active state and theme-toggle state in dark mode after the contrast adjustments. Covers `AC-004`.

### Observability Tests

- `OT-001`: Verify the focused Storybook accessibility run for the affected stories reports no dark-mode contrast violations after the fixes. Covers `OBS-002`.

## Definition of Done

- Shared dark-mode contrast failures are fixed in the component package and/or shared tokens rather than with route-local patches.
- Required tests for this task pass.
- The live site and Storybook consume the same corrected dark-mode treatments for the affected shared components.
- The visual identity remains recognizably aligned with the current design system.
