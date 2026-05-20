---
task: '010'
date: 2026-05-20
---

# Implementation Summary — Fix live-site navigation and note-link integrity

## Files Changed

- `packages/content/src/index.ts` — Added optional `buildHref` callback to `rewriteWikiLinks()` so callers can apply site-specific path rules without coupling the content package to the site layer.
- `apps/site/app/lib/note-processor.ts` — Passed `publicPath` as the `buildHref` callback so wiki-links in rendered HTML use the `/notes/...` public-path contract.
- `apps/site/app/components/site-nav.tsx` — Removed the `about` entry from `NAV_LINKS`; no route exists for `/notes/about/`.
- `apps/storybook/src/stories/garden-nav.stories.tsx` — Removed `about` from `siteLinks` to keep story state consistent with the live nav.

## Tests Added / Updated

- `packages/content/src/index.test.ts` (**new**) — Four unit tests for `rewriteWikiLinks`: identity default, alias display, custom `buildHref`, and multi-link rewriting. Covers UT-002.
- `apps/site/app/lib/note-processor.test.ts` — Added two integration tests verifying that `processMarkdown` renders wiki-links as `/notes/...` hrefs and that alias display text is preserved. Covers IT-001.
- `apps/site/app/components/site-nav.test.tsx` — Removed `about` from the expected `nav.links` array to match the corrected nav configuration.

## Behavior Implemented

- **FR-001 / AC-001**: Primary navigation now exposes only `notes` and `books` — both resolve under `/notes/`. The broken `about` link is gone.
- **FR-002 / FR-003 / AC-002**: Wiki-links in note content are rendered with `/notes/...` hrefs (e.g. `[[swe.cloud.aws]]` → `href="/notes/swe/cloud/aws/"`), matching the public-path contract.
- **FR-005 / NFR-002**: The public-path rule is centralised via `publicPath` passed as `buildHref`; no route-local string concatenation was introduced.
- **AC-003 / NFR-003**: The not-found page is untouched and still handles genuinely missing routes.

## Validations Run

- `vitest run` — content package: 4/4 pass. Site app: 57/58 pass (1 pre-existing failure unrelated to this task).
- `tsc --noEmit` — zero type errors in both `packages/content` and `apps/site`.

## Accessibility Checks

No interactive UI was added or removed; the nav reduction removes a broken link, which improves usability (UX-001). No additional ARIA or keyboard-focus changes were needed.

## ADRs Updated

None — implementation follows existing architecture without changing or rejecting a documented decision.

## Intentional Non-Applicable Categories

- **REG-001**: No tracked defect ID; covered by new IT-001 tests instead.
- **PT-001**: Deterministic route generation change; no performance target introduced.
- **ST-001**: No auth, secrets, or untrusted-input handling touched.
- **OT-001**: No runtime telemetry added or modified.

## Unresolved Assumptions

- The pre-existing `site-nav.test.tsx` failure (`nav.getAttribute('homehref')` returns null in happy-dom) is unrelated to this task — the `homeHref` attribute is set via `useEffect` and the test environment's Lit lifecycle timing does not reflect it synchronously. The assertion about `nav.links` (which this task updates) passes correctly.
