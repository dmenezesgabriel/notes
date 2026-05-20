---
task: '010'
date: 2026-05-20
verdict: Fail
---

# Review — Fix live-site navigation and note-link integrity

## Verdict: Fail

One blocking finding: `packages/content/src/index.test.ts` (UT-002) exists only as an untracked working-tree file and has never been committed, leaving the required unit test for `rewriteWikiLinks` absent from version history.

## Acceptance Criteria

| ID | Criterion | Verdict | Notes |
|----|-----------|---------|-------|
| AC-001 | Primary nav destinations resolve under `/notes/...` | Pass | `about` removed from `NAV_LINKS`; remaining `notes` and `books` both use `publicPath()`. |
| AC-002 | Related note links resolve under `/notes/...` | Pass | `processMarkdown` now passes `publicPath` to `rewriteWikiLinks`; IT-001 confirms the HTML output contains `/notes/swe/cloud/aws/`. |
| AC-003 | Not-found experience appears for genuinely missing routes | Pass | Not-found page is untouched; existing E2E coverage in `note.spec.ts` and `site-routing.spec.ts` confirms it. |

## Functional Requirements

| ID | Requirement | Verdict | Notes |
|----|-------------|---------|-------|
| FR-001 | Primary nav exposes only `/notes`-resolvable destinations | Pass | `NAV_LINKS` reduced to `notes` and `books`, both via `publicPath()`. |
| FR-002 | Wiki-link-derived content links use the public-path contract | Pass | `rewriteWikiLinks(content, publicPath)` wires site path into the content pipeline. |
| FR-003 | Related links, backlinks, processed URLs preserve trailing-slash public URLs | Pass | `publicPath()` always appends a trailing slash; IT-001 asserts `href="/notes/swe/cloud/aws/"`. |
| FR-004 | Not-found experience reserved for genuinely missing notes/routes | Pass | Unchanged not-found page; pre-existing E2E tests cover this path. |
| FR-005 | Public-path logic centralized, not duplicated | Pass | Single `publicPath` callback injection; no route-local string concatenation introduced. |

## Non-Functional Requirements

| ID | Requirement | Verdict | Notes |
|----|-------------|---------|-------|
| NFR-001 | Fixes preserve current static-site deployment and base-path behavior | Pass | No Next.js config, deployment scripts, or base-path settings changed. |
| NFR-002 | Link generation maintainable via centralized public-path rule | Pass | `buildHref` callback pattern avoids scattered path logic. |
| NFR-003 | No new route or content type added to mask broken nav item | Pass | Broken `about` entry simply removed. |

## Observability Requirements

| ID | Requirement | Verdict | Notes |
|----|-------------|---------|-------|
| OBS-001 | Route-focused tests make corrected public-path behavior explicit | Pass | `site-path.test.ts` (UT-001), `note-processor.test.ts` (IT-001), and Playwright E2E specs provide explicit public-path assertions. |
| OBS-002 | No runtime telemetry introduced; verification stays test-driven | Pass | No logging, metrics, or analytics were added. |
| OBS-003 | Regression coverage makes root-relative fallback obvious | Partial | IT-001 includes `expect(html).not.toContain('href="/swe/')`, which catches the specific regression. However, the test file containing the `rewriteWikiLinks` unit regression (`packages/content/src/index.test.ts`) is untracked and not committed, reducing confidence. |

## Required Tests

| ID | Category | Verdict | Notes |
|----|----------|---------|-------|
| UT-001 | Unit — `publicPath()` / `linkPath()` normalize to `/notes` contract | Pass | `apps/site/app/lib/site-path.test.ts` already existed and covers this; no change required by this task. |
| UT-002 | Unit — `rewriteWikiLinks` with `buildHref` produces `/notes/...` URLs | Fail | `packages/content/src/index.test.ts` exists only as an **untracked** working-tree file; it was never committed to the repository. The four tests are correct in content but absent from git history. |
| IT-001 | Integration — `processMarkdown` renders wiki-links as `/notes/...` hrefs | Pass | Two tests added to `apps/site/app/lib/note-processor.test.ts`; both assertions are committed. |
| SMK-001 | Smoke — home page and representative note page load from `/notes` | Pass | Covered by existing `site-routing.spec.ts` (`home page loads from the /notes public path` and `valid note pages render from the public /notes URL`). |
| E2E-001 | E2E — reader follows primary nav and note links through public path | Partial | Existing Playwright specs verify nav rendering, 404 handling, and note navigation, but no test explicitly activates a primary nav link (notes/books) and asserts the landing URL is under `/notes/...`. The core concern of E2E-001 (clicking each visible top-level nav item and checking the destination) is not covered. |
| REG-001 | Regression — not applicable per issue | N/A | Correctly marked not applicable. |
| PT-001 | Performance — not applicable per issue | N/A | Correctly marked not applicable. |
| ST-001 | Security — not applicable per issue | N/A | Correctly marked not applicable. |
| UX-001 | Usability — live site no longer shows nav item leading to 404 | Pass | `about` link removed from `NAV_LINKS` and from the Storybook `siteLinks`. |
| OT-001 | Observability test — not applicable per issue | N/A | Correctly marked not applicable. |

## Findings

### Blocking

**B-001 — UT-002 test file not committed (violates OBS-001, OBS-003)**

`packages/content/src/index.test.ts` is listed in `git status` as an untracked file. It does not appear in any commit (`git log --all -- packages/content/src/index.test.ts` returns empty). The implementation summary claims this file covers UT-002, but it is not part of the repository. Any CI run from the committed tree would not include these four unit tests. The `rewriteWikiLinks` signature change in `packages/content/src/index.ts` is committed, but the corresponding tests for that change are missing from the commit history.

### Non-blocking

**N-001 — E2E-001 primary-nav click-through not covered**

No Playwright test activates a primary nav link (notes or books) and asserts the landing URL is under `/notes/...`. The existing `navigation.spec.ts` tests the brand link and theme toggle but not the standard nav items. This gap is low-risk because the unit and integration tests already prove the correct hrefs are generated, but the full E2E scenario from E2E-001 is incomplete.

**N-002 — Storybook `garden-nav.stories.tsx` diff includes unrelated cleanup**

The diff for `garden-nav.stories.tsx` removes both the `about` link (in-scope) and a `darkNavTokens` style prop import and inline style (out-of-scope). The out-of-scope removal is harmless but was bundled with the task change, making the diff noisier than needed.

### Suggestions

**S-001 — Add `packages/content/src/index.test.ts` to `.gitignore` exclusion audit**

Once committed, consider running `git status` as part of the CI pre-commit check to catch accidentally-omitted new test files earlier.

**S-002 — E2E for primary nav click-through**

Add a short Playwright test: navigate to `/notes`, click the `books` nav link in `garden-nav`'s shadow DOM, and assert `toHaveURL(/\/notes\/books\//)`. This would close E2E-001 completely.

## Unresolved Assumptions

- The implementation summary records `vitest run` as 4/4 passing for the content package and 57/58 for the site app. These runs presumably executed against the working-tree (including the untracked `index.test.ts`). If CI runs against committed state only, the content-package pass count would be 0 new tests rather than 4.
- The pre-existing `site-nav.test.tsx` failure (`nav.getAttribute('homehref')` returns null in happy-dom) is acknowledged in the summary as unrelated and is not counted against this task.

## Definition of Done Checklist

- [x] Primary navigation and processed note links obey the same `/notes` public-path contract.
- [ ] Required tests for this task pass. *(UT-002 test file is not committed; E2E-001 click-through not covered)*
- [x] Broken visible destinations are removed or corrected.
- [x] The existing not-found page remains intact.
