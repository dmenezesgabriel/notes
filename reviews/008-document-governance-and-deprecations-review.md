---
id: '008'
issue: 'issues/008-document-governance-and-deprecations.md'
created: 2026-05-19
updated: 2026-05-19
---

# Review: Document governance, Storybook parity, and deprecations

## Verdict

**Pass with notes**

## Review

- Correct: Contributor guidance is now canonical and discoverable. `docs/design-system-governance.md:15-104` covers workflow, Storybook IA, promotion rules, deprecation rules, live-route proofs, token source, and the React-Lit adapter boundary. `README.md:18-27` links the normal workflow back to Storybook, the governance doc, the migration matrix, `CONTEXT.md`, and ADRs `001`-`003`.
- Correct: Storybook source now matches the approved taxonomy. Source stories publish `Atoms/*`, `Molecules/*`, `Organisms/*`, `Templates/*`, `Undecided/*`, `Legacy/*`, and `Design System/*`, with no remaining `Components/*` titles in `apps/storybook/src/stories/*.stories.tsx`. Representative evidence: `apps/storybook/src/stories/design-system-overview.stories.tsx:4`, `design-system-governance.stories.tsx:4`, `design-system-tokens.stories.tsx:4`, `garden-article.stories.tsx:4`, `garden-breadcrumb.stories.tsx:9`, `garden-card.stories.tsx:13`, `garden-banner.stories.tsx:8`, `my-heading.stories.tsx:4`.
- Correct: ADR alignment is intact. The governance doc and matrix reinforce ADR `001`'s promotion boundary (`docs/design-system-governance.md:24-28`, `docs/atomic-design-migration-matrix.md:92-96`), ADR `002`'s token source (`docs/design-system-governance.md:30-34`, `README.md:24-27`), and ADR `003`'s app-owned React/Lit adapter boundary (`docs/design-system-governance.md:36-40`, `docs/atomic-design-migration-matrix.md:69-72`).
- Correct: Explicit status and replacement-path coverage is present in both docs and Storybook for the low-confidence and legacy artifacts required by the issue. Evidence: `docs/design-system-governance.md:79-86`, `docs/atomic-design-migration-matrix.md:35-62`, `apps/storybook/src/stories/garden-banner.stories.tsx:19-25`, `garden-sheet.stories.tsx:27-33`, `garden-tape.stories.tsx:27-33`, `my-heading.stories.tsx:5-10`.
- Fixed: The overview story rename is addressed in source. The new overview story lives at `apps/storybook/src/stories/design-system-overview.stories.tsx:4` with title `Design System/Overview`; `apps/storybook/src/stories/kitchen-sink.stories.tsx` is deleted from the source tree (`git diff --name-status` shows `D apps/storybook/src/stories/kitchen-sink.stories.tsx`), and a fresh Storybook build emits `design-system-overview--current-system` with no `kitchen-sink` entry in `/tmp/storybook-008-review/index.json`.
- Blocker: None.
- Note: Two stale `kitchen-sink` references remain outside the renamed source story: `docs/atomic-design-migration-matrix.md:24` still lists `kitchen-sink` as an out-of-scope docs entry, and tracked built artifacts still point at the deleted story (`apps/storybook/storybook-static/index.json:934-940`, `apps/storybook/storybook-static/manifests/components.json:703-718`). The implementation itself is correct and a fresh build is clean, but the repo still has outdated references.

## Contract evaluation

### Functional requirements

| ID     | Result | Evidence                                                                                                                                                                                                                                                                                                                                                                 |
| ------ | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| FR-001 | Pass   | Storybook source uses the approved taxonomy and status folders: `apps/storybook/src/stories/design-system-overview.stories.tsx:4`, `design-system-governance.stories.tsx:4`, `garden-breadcrumb.stories.tsx:9`, `garden-search.stories.tsx:10`, `garden-card.stories.tsx:13`, `garden-article.stories.tsx:4`, `garden-banner.stories.tsx:8`, `my-heading.stories.tsx:4`. |
| FR-002 | Pass   | Governance, promotion, deprecation, token, and shared-vs-site-local rules are documented in `docs/design-system-governance.md:15-104`, with workflow discovery links in `README.md:18-27`.                                                                                                                                                                               |
| FR-003 | Pass   | Legacy and low-confidence shared components have explicit status and replacement paths in `docs/design-system-governance.md:79-86`, `docs/atomic-design-migration-matrix.md:50-62`, and the corresponding Storybook stories.                                                                                                                                             |
| FR-004 | Pass   | The stale kitchen-sink source story has been replaced by a current overview story at `apps/storybook/src/stories/design-system-overview.stories.tsx:4-289`, which documents shared taxonomy, status board, live-route proofs, and reference files (`:147-205`, `:211-279`).                                                                                              |
| FR-005 | Pass   | The governance doc points contributors to the canonical token and adapter boundaries: `docs/design-system-governance.md:30-40`, `:102-103`; Storybook governance repeats those boundaries at `apps/storybook/src/stories/design-system-governance.stories.tsx:134-153`.                                                                                                  |

### Non-functional requirements

| ID      | Result         | Evidence                                                                                                                                                                                                                                                                           |
| ------- | -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| NFR-001 | Pass           | The workflow is discoverable from `README.md:18-27` and reinforced in `docs/design-system-governance.md:15-20`.                                                                                                                                                                    |
| NFR-002 | Pass with note | The new docs align with the implemented boundaries (`docs/design-system-governance.md:24-51`, `docs/atomic-design-migration-matrix.md:45-77`), but stale `kitchen-sink` references remain in `docs/atomic-design-migration-matrix.md:24` and tracked `storybook-static` artifacts. |
| NFR-003 | Pass           | Backward compatibility and migration paths are documented for `garden-banner`, `garden-sheet`, `garden-tape`, and `my-heading` in `docs/design-system-governance.md:81-86` and `docs/atomic-design-migration-matrix.md:59-62`.                                                     |

### Acceptance criteria

| ID     | Result | Evidence                                                                                                                                                                                                                                                                                           |
| ------ | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AC-001 | Pass   | Contributors can determine shared vs site-local vs deprecated placement from `docs/design-system-governance.md:24-77`, the status table at `:79-86`, and the workflow links in `README.md:18-27`.                                                                                                  |
| AC-002 | Pass   | Storybook source reflects the approved structure and current route proofs through `apps/storybook/src/stories/design-system-overview.stories.tsx:147-279` and `design-system-governance.stories.tsx:123-253`.                                                                                      |
| AC-003 | Pass   | Visible statuses and replacement paths are present for all required legacy/undecided artifacts in docs and stories: `docs/design-system-governance.md:81-86`, `garden-banner.stories.tsx:19-25`, `garden-sheet.stories.tsx:27-33`, `garden-tape.stories.tsx:27-33`, `my-heading.stories.tsx:5-10`. |

### Observability requirements

| ID      | Result         | Evidence                                                                                                                                                                                                                                                                         |
| ------- | -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| OBS-001 | Pass           | Storybook source exposes active taxonomy plus `Undecided/*` and `Legacy/*` folders, and the overview/governance stories surface status context: `apps/storybook/src/stories/design-system-overview.stories.tsx:179-205`, `design-system-governance.stories.tsx:157-253`.         |
| OBS-002 | Pass with note | Replacement paths and canonical references are easy to review in `docs/design-system-governance.md:79-104` and `design-system-governance.stories.tsx:123-253`, but the stale `kitchen-sink` references noted above should be cleaned up to remove the last outdated breadcrumbs. |
| OBS-003 | Pass           | The cleanup list is explicit in `docs/design-system-governance.md:79-86` and `docs/atomic-design-migration-matrix.md:35-62`.                                                                                                                                                     |

## Test verification

| Category | Result         | Evidence                                                                                                                                                                                                                                                                                                         |
| -------- | -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| UT-001   | Not applicable | Matches the issue contract for documentation/Storybook IA work.                                                                                                                                                                                                                                                  |
| IT-001   | Pass           | `pnpm -C apps/site test app/lib/design-system-governance.test.ts` passed. The test file checks governance references, taxonomy folders, live-route proofs, and replacement paths: `apps/site/app/lib/design-system-governance.test.ts:14-107`.                                                                   |
| SMK-001  | Pass           | `pnpm -C apps/storybook exec storybook build --output-dir /tmp/storybook-008-review` passed. The generated `/tmp/storybook-008-review/index.json` includes `design-system-overview--current-system` and `design-system-governance--overview`, with no `kitchen-sink` entry.                                      |
| E2E-001  | Not applicable | Matches the issue contract.                                                                                                                                                                                                                                                                                      |
| REG-001  | Not applicable | Matches the issue contract.                                                                                                                                                                                                                                                                                      |
| PT-001   | Not applicable | Matches the issue contract.                                                                                                                                                                                                                                                                                      |
| ST-001   | Not applicable | Matches the issue contract.                                                                                                                                                                                                                                                                                      |
| UX-001   | Pass           | The same governance test plus the overview/governance stories make promotion rules, statuses, and references discoverable: `apps/site/app/lib/design-system-governance.test.ts:74-107`, `apps/storybook/src/stories/design-system-overview.stories.tsx:211-279`, `design-system-governance.stories.tsx:123-253`. |
| OT-001   | Not applicable | Matches the issue contract.                                                                                                                                                                                                                                                                                      |

## Validation run

- `pnpm -C apps/site test app/lib/design-system-governance.test.ts` ✅
- `pnpm -C apps/storybook typecheck` ✅
- `pnpm -C apps/storybook exec storybook build --output-dir /tmp/storybook-008-review` ✅
