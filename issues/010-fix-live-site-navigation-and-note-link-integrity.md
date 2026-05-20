---
id: '010'
created: 2026-05-19
updated: 2026-05-19
status: active
---

# Task: Fix live-site navigation and note-link integrity

## Priority

P0 — Broken primary navigation and note-internal links send readers into 404 states and violate the live site's `/notes` public-path contract.

## Dependencies

- Depends on the existing `publicPath()` / `linkPath()` route contract in `apps/site/app/lib/site-path.ts`.
- Depends on the manifest-backed note-processing pipeline in `apps/site/app/lib/note-processor.ts` and `packages/content` wiki-link rewriting.
- No ADR dependency; this task uses existing architecture.

## Assignability

**AFK** — the broken paths and affected code boundaries are already known from app navigation and note-page Playwright inspection.

## Context

The static digital garden is published under `/notes`, but some navigation and generated note links bypass that contract. The current `ABOUT` top-level nav item points to a missing route, and related note links generated from wiki-link rewriting can resolve to `/swe/...` instead of `/notes/swe/...`. Readers experience this as apparently valid links that lead to not-found pages even though the referenced notes exist.

## Use Cases

- **Feature**: Stable public-path routing
- **Scenario**: Reader follows a related note link from a note page
- **Given** the reader is on a note page under `/notes/...`
- **When** they activate a related link or backlink
- **Then** the next note resolves under the same `/notes` public path instead of a broken root-relative path

- **Feature**: Primary navigation correctness
- **Scenario**: Reader uses the top-level site navigation
- **Given** the shared navigation is visible on the site
- **When** the reader activates a primary nav link
- **Then** it leads to a real destination instead of a 404 page

## Definition of Ready

- The current failing destinations are confirmed: `/notes/about/` and root-relative related links rendered from note content.
- The current route helpers and wiki-link rewriting behavior are documented.
- The implementation keeps the site published under `/notes` and does not change the public-path contract.
- A clear rule is chosen for primary nav items: only render destinations that exist in the live site.

## Functional Requirements

- `FR-001`: The live site's primary navigation must expose only destinations that resolve successfully under the `/notes` public path.
- `FR-002`: Note content links generated from wiki links must resolve through the same public-path contract used by the live site navigation.
- `FR-003`: Related links, backlinks, and other processed note links must preserve valid trailing-slash public URLs.
- `FR-004`: The not-found experience must remain reserved for genuinely missing notes or routes after the fixes land.
- `FR-005`: The route helpers and note-processing pipeline must avoid duplicating public-path logic across separate code paths.

## Non-Functional Requirements

- `NFR-001`: The fixes must preserve the current static-site deployment model and base-path behavior.
- `NFR-002`: Link generation must stay maintainable by centralizing the public-path rule instead of introducing route-local string concatenation.
- `NFR-003`: The fixes must not require a new route or content type just to mask a broken primary navigation item.

## Observability Requirements

- `OBS-001`: Route-focused tests must make the corrected public-path behavior explicit for nav links, processed note links, and valid note routes.
- `OBS-002`: The task must not introduce runtime telemetry; verification should stay test-driven because the issue is deterministic routing behavior.
- `OBS-003`: Regression coverage must make it obvious when generated note HTML falls back to root-relative links again.

## Acceptance Criteria

- `AC-001`: **Given** a reader uses the live primary navigation, **When** they activate each visible top-level destination, **Then** each destination resolves successfully under `/notes/...`.
- `AC-002`: **Given** a note page contains related links derived from wiki links, **When** the reader activates one, **Then** the destination note resolves under `/notes/...` instead of a root-relative broken path.
- `AC-003`: **Given** a route truly does not exist, **When** the reader navigates to it, **Then** the existing not-found experience still appears.

## Required Tests

Choose the smallest meaningful test set for this task.
Do not create tests only to satisfy a category.
If a category is not relevant, write `Not applicable — <specific reason>`.

### Unit Tests

- `UT-001`: Verify `publicPath()` and related helpers normalize note URLs to the `/notes` public-path contract with stable trailing-slash behavior. Covers `FR-001`, `FR-003`, `AC-001`.
- `UT-002`: Verify the wiki-link rewriting path builder produces `/notes/...` URLs for rendered note links in the site context. Covers `FR-002`, `FR-005`, `AC-002`.

### Integration Tests

- `IT-001`: **Scenario**: Processed note HTML preserves the public path  
  **Given** a note contains wiki links to other notes  
  **When** the note is processed through the site note-processing pipeline  
  **Then** the rendered related links and backlinks use `/notes/...` URLs  
  **And** valid note destinations resolve through the manifest-backed route layer  
  Covers `FR-002`, `FR-003`, and `AC-002`.

### Smoke Tests

- `SMK-001`: **Scenario**: Primary site routes load from the configured public path  
  **Given** the site is running with the `/notes` base path  
  **When** the reader opens the home page and a representative note page  
  **Then** both routes load without a routing or hydration crash  
  Covers release confidence for `FR-001` and `FR-002`.

### End-to-End Tests

- `E2E-001`: **Scenario**: Reader follows primary navigation and note links through the public path  
  **Given** the reader is on the live site home page or a note page  
  **When** they activate visible primary navigation links and a representative related note link  
  **Then** each destination resolves successfully under `/notes/...`  
  Covers `AC-001`, `AC-002`, and `AC-003`.

### Regression Tests

- `REG-001`: Not applicable — there is no single tracked defect ID for the newly confirmed `/notes/about/` and root-relative related-link failures.

### Performance Tests

- `PT-001`: Not applicable — this task changes deterministic route generation without introducing a new measured performance target.

### Security Tests

- `ST-001`: Not applicable — this task does not change authentication, authorization, secrets, or untrusted input handling.

### Usability Tests

- `UX-001`: Verify the live site no longer presents a visible top-level nav item that immediately leads to a not-found page. Covers `AC-001`.

### Observability Tests

- `OT-001`: Not applicable — this task does not add or modify runtime logs, metrics, traces, or analytics events.

## Definition of Done

- Primary navigation and processed note links obey the same `/notes` public-path contract.
- Required tests for this task pass.
- Broken visible destinations are removed or corrected in the live site and matching Storybook page-context stories.
- The existing not-found page remains intact for genuinely invalid routes.
