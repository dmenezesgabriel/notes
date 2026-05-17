---
id: '001'
issue: 'issues/001-fix-export-safe-dev-routing.md'
created: 2026-05-17
updated: 2026-05-17
---

# Implementation Summary: Restore export-safe /notes routing in site dev

## Related Task

- `issues/001-fix-export-safe-dev-routing.md`

## Files Changed

- `apps/site/next.config.ts` — made static export production-only while keeping the `/notes` base path and low-memory webpack parallelism.
- `apps/site/package.json` — capped `next dev` heap usage with `NODE_OPTIONS='--max-old-space-size=1536'`.
- `apps/site/playwright.config.ts` — reduced Playwright concurrency to a single worker and pointed web-server readiness at `/notes`.
- `apps/site/app/lib/site-path.ts` — kept the `/notes` public-path contract while returning basePath-free app-router links.
- `apps/site/app/lib/site-path.test.ts` — added path-helper coverage for `/notes`, trailing slashes, and query/hash handling.
- `apps/site/app/lib/note-processor.test.ts` — added manifest-backed catch-all param coverage.
- `apps/site/app/lib/note-processor.ts` — autofixed import ordering so the production build lint step passes.
- `apps/site/app/favicon.ico` — added an explicit favicon asset resolved from the `/notes` base path.
- `apps/site/e2e/site-routing.spec.ts` — added focused route, regression, 404, and favicon coverage for the public `/notes` URLs.

## Behavior Implemented

- `pnpm site:dev` now serves the site under `/notes` without the export-mode missing-param failure on valid note pages.
- Invalid `/notes/...` note URLs now return the existing not-found experience instead of a 500 export error during development.
- The favicon is now resolved explicitly at `/notes/favicon.ico` and no longer falls through the catch-all route.
- Dev/test memory pressure is reduced by capping the Next.js heap, forcing webpack parallelism to `1`, and running Playwright with a single worker.

## Design Notes

- The smallest safe fix was to keep `output: 'export'` for production builds only; `next dev` does not need export-mode routing constraints, but `next build` still does.
- The existing `/notes` public URL contract was preserved through `basePath` and the existing path-helper boundary instead of reintroducing unsupported rewrites.
- I avoided broader route rewrites or middleware because the bug was caused by dev-time export restrictions, not by the note-processing pipeline itself.
- Tests were kept focused on the route contract, regression, and favicon behavior rather than broad unrelated UI coverage.

## Tests Added or Updated

- `apps/site/app/lib/site-path.test.ts` — verifies `/notes` public paths and basePath-free link paths.
- `apps/site/app/lib/note-processor.test.ts` — verifies manifest note ids become catch-all slug params without the `/notes` prefix.
- `apps/site/e2e/site-routing.spec.ts` — verifies home routing, valid note routing, the specific regression note route, invalid-note 404 behavior, and favicon resolution.

## Test Categories Not Applicable

- `Performance`: Not applicable — no user-facing performance contract changed; the work reduces developer-memory pressure rather than runtime latency.
- `Security`: Not applicable — routing and favicon resolution do not change authentication, authorization, or trust boundaries.
- `Component`: Not applicable — no isolated component behavior changed; the risk was route/config integration.
- `Accessibility`: Not applicable — no interactive UI or semantic markup was changed; route coverage exercises existing pages only.
- `Observability`: Not applicable — the task did not require logs, metrics, traces, or analytics changes.

## Validation Run

```text
pnpm -C apps/site test -- app/lib/site-path.test.ts app/lib/note-processor.test.ts — passed
pnpm -C apps/site typecheck — passed
pnpm -C apps/site e2e -- e2e/site-routing.spec.ts — passed
NODE_OPTIONS='--max-old-space-size=3072' pnpm -C apps/site build — passed
```

## Accessibility Notes

- Not applicable — this fix changed routing/configuration behavior and an asset path, not semantic HTML, labels, focus behavior, or keyboard interaction.

## Observability Changes

- Not applicable — no logs, metrics, traces, or analytics were added or changed.

## ADR Updates

- Not applicable — the implementation stayed within the existing Next.js App Router and static-export architecture.

## Unresolved Assumptions or Follow-Up

- The broader legacy E2E suite was not used as the completion gate for this issue; validation was limited to the new focused routing spec plus build/typecheck/unit coverage.
- None.
