---
id: '001'
created: 2026-05-17
updated: 2026-05-17
status: active
---

# Task: Restore export-safe /notes routing in site dev

## Priority

P0 — `pnpm site:dev` currently serves the home page but fails on note detail routes and `/favicon.ico`, which blocks normal development of the digital garden.

## Dependencies

- No task dependency; this is the first fix for the failing `pnpm site:dev` flow.
- Depends on the generated content manifest in `apps/site/.content/manifest.json` and the existing note source files in `notes/`.
- No ADR dependency; this task uses the existing Next.js App Router + static export architecture.

## Assignability

**AFK** — the failing behavior, affected files, and expected public URL shape are all discoverable from the codebase and existing tests; no irreversible architecture decision remains open.

## Context

The digital garden site uses Next.js App Router with `output: 'export'`, a catch-all note route at `apps/site/app/[...slug]/page.tsx`, and a public `/notes` URL shape that is already encoded in `site-path.ts` and Playwright tests. `pnpm site:dev` currently starts, but valid note URLs such as `/notes/books/14-habits-of-highly-productive-developers` fail with `Page "/[...slug]/page" is missing param "/[...slug]" in "generateStaticParams()"`, and the browser's automatic `/favicon.ico` request also returns 500. The fix must preserve the existing `/notes` public URL contract while making local development compatible with the app's static-export setup.

## Use Cases

- **Feature**: Digital garden note routing in development
- **Scenario**: Reader opens a valid note from the public `/notes` URL
- **Given** the content manifest contains `books.14-habits-of-highly-productive-developers`
- **When** the browser requests `/notes/books/14-habits-of-highly-productive-developers`
- **Then** the note detail page renders instead of a 500 error

- **Feature**: Static assets during page load
- **Scenario**: Browser requests the site favicon
- **Given** the development server is running
- **When** the browser requests `/favicon.ico`
- **Then** the request resolves without falling into the note catch-all route

## Definition of Ready

- The current failure is reproducible from `pnpm site:dev` logs.
- The public URL contract remains `/notes/...` in local development, as established by `app/lib/site-path.ts` comments and the existing Playwright specs.
- The implementation path identifies how valid note slugs, invalid note slugs, and `/favicon.ico` are routed under `output: 'export'`.
- No ADR is required because this task keeps the existing architecture and only repairs routing behavior within it.

## Functional Requirements

- `FR-001`: `pnpm site:dev` must continue serving the digital garden under the existing public `/notes` URL prefix in local development.
- `FR-002`: Valid note URLs backed by the content manifest must resolve through `apps/site/app/[...slug]/page.tsx` without triggering the missing-`generateStaticParams` export error.
- `FR-003`: `/favicon.ico` must resolve through an explicit asset or route and must not be handled by the note catch-all page.
- `FR-004`: Invalid note URLs under `/notes/...` must keep returning the existing note not found experience instead of a 500 export-routing error.
- `FR-005`: Link-generation helpers and in-app navigation must keep producing URLs that work both in local development and in the exported site.

## Non-Functional Requirements

- `NFR-001`: Starting `pnpm site:dev` and opening the home page, a valid note page, and `/favicon.ico` must complete without HTTP 500 responses.
- `NFR-002`: The routing fix must remain compatible with `pnpm site:build` and must not rely on unsupported local-only behavior that breaks static export.
- `NFR-003`: The fix must use the existing Next.js, Vitest, and Playwright toolchain without introducing a new routing proxy or server dependency.

## Observability Requirements

- `OBS-001`: Automated verification for this task must fail fast when `/notes/<existing-note>` or `/favicon.ico` returns 500 so the regression is visible in local and CI output.
- `OBS-002`: The fix must not suppress unexpected routing failures behind silent fallbacks; valid notes should render, and invalid notes should still surface through the existing `notFound()` path.

## Acceptance Criteria

- `AC-001`: **Given** the generated note manifest and a running dev server, **When** a user opens `/notes/books/a-philosophy-of-software-design`, **Then** the response is successful and the note title is visible.
- `AC-002`: **Given** the dev server is running, **When** the browser requests `/favicon.ico`, **Then** the response is not a 500 and the request does not invoke the note catch-all route.
- `AC-003`: **Given** an invalid note path such as `/notes/this-does-not-exist-at-all`, **When** the page is opened, **Then** the existing not-found UI is shown instead of the missing-params export error.
- `AC-004`: **Given** the routing fix is implemented, **When** `pnpm site:build` runs, **Then** the exported site still includes valid note detail routes without reintroducing the current dev-only failure.

## Required Tests

Choose the smallest meaningful test set for this task.
Do not create tests only to satisfy a category.
If a category is not relevant, write `Not applicable — <specific reason>`.

### Unit Tests

- `UT-001`: Validate that `linkPath()` and `publicPath()` preserve the `/notes` public URL contract while returning route paths that remain valid for local navigation and exported output. Covers `FR-001`, `FR-005`.
- `UT-002`: Validate that static note params are derived from manifest note ids into the expected catch-all slug arrays for existing notes. Covers `FR-002`.

### Integration Tests

- `IT-001`: **Scenario**: Manifest-backed note params are generated for the catch-all page  
  **Given** the generated manifest contains `books.a-philosophy-of-software-design`  
  **When** the static note param helper runs  
  **Then** it returns `slug: ['books', 'a-philosophy-of-software-design']`  
  **And** valid note ids remain routable through the existing note-processing boundary  
  Covers `FR-002`, `AC-004`.

### Smoke Tests

- `SMK-001`: **Scenario**: Dev server serves the critical note-routing paths  
  **Given** `pnpm site:dev` is running with generated content  
  **When** `/`, `/notes/books/a-philosophy-of-software-design`, and `/favicon.ico` are requested  
  **Then** each request completes without a 500 response  
  Covers release confidence for `FR-001`, `FR-002`, and `FR-003`.

### End-to-End Tests

- `E2E-001`: **Scenario**: Reader navigates from the home page to a note detail page  
  **Given** the user is on the digital garden home page  
  **When** they open a note card that points to `/notes/...`  
  **Then** the note detail page loads successfully and displays the note heading  
  Covers `FR-001`, `AC-001`.

### Regression Tests

- `REG-001`: **Scenario**: Valid `/notes` note pages no longer trigger the export missing-params failure  
  **Given** `books.14-habits-of-highly-productive-developers` exists in the manifest  
  **When** the browser opens `/notes/books/14-habits-of-highly-productive-developers` during `pnpm site:dev`  
  **Then** the page renders successfully  
  **And** the server output does not report `Page "/[...slug]/page" is missing param "/[...slug]" in "generateStaticParams()"`  
  Covers previous defect `site-dev-export-catchall-2026-05-17`.

### Performance Tests

- `PT-001`: Not applicable — this task repairs routing and asset resolution; it does not introduce a new performance-sensitive code path.

### Security Tests

- `ST-001`: Not applicable — the task does not change authentication, authorization, secrets, or untrusted-input handling.

### Usability Tests

- `UX-001`: Not applicable — the user-facing copy, layout, and interaction design stay the same; the task restores existing page availability.

### Observability Tests

- `OT-001`: Not applicable — the task does not add or modify logs, metrics, traces, or analytics events; failure visibility is covered by smoke and regression command checks.

## Definition of Done

- Code is implemented behind the existing Next.js route, asset, and path-helper boundaries.
- Required tests for this task pass.
- Valid note pages, invalid note pages, and favicon requests all behave correctly during local development.
- No new unsupported routing workaround is introduced that breaks static export.
- Any routing or path-contract changes are documented alongside the affected code and tests.
