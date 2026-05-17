---
id: '002'
issue: 'issues/002-restore-frozen-lockfile-publish-install.md'
created: 2026-05-17
updated: 2026-05-17
---

# Implementation Summary: Restore frozen-lockfile installs for the publish workflow

## Related Task

- `issues/002-restore-frozen-lockfile-publish-install.md`

## Files Changed

- `pnpm-lock.yaml` — synchronized stale workspace importer specifiers with the committed package manifests so frozen-lockfile installs succeed again.
- `implementation/002-restore-frozen-lockfile-publish-install-summary.md` — recorded the implementation, validations, and scope.

## Behavior Implemented

- Restored `pnpm install --frozen-lockfile` for the workspace without weakening CI to `--no-frozen-lockfile`.
- Added the missing `stylelint` importer entries for `packages/components` and `apps/storybook`, which were both declared in `package.json` files but absent from the committed lockfile importers.
- Kept the existing publish workflow unchanged; the fix is in the committed lockfile contract rather than in CI behavior.

## Design Notes

- The smallest safe fix was to update only `pnpm-lock.yaml` because the manifests already expressed the intended dependencies.
- I did not touch `.github/workflows/publish.yml`; frozen-lockfile validation remains the guardrail.
- Although the reported CI error named `packages/components`, local frozen-lockfile validation also exposed the same stale `stylelint` specifier in `apps/storybook`, so both importer mismatches were corrected in the same lockfile sync.
- No new abstraction, package, or workflow workaround was introduced.

## Tests Added or Updated

- No test files were added or updated; this task was validated through the workspace install and build commands required by the issue.

## Test Categories Not Applicable

- `Unit`: Not applicable — no isolated runtime logic changed.
- `Component`: Not applicable — no UI component behavior changed.
- `End-to-End`: Not applicable — no user-facing application journey changed.
- `Performance`: Not applicable — lockfile synchronization does not alter runtime performance.
- `Security`: Not applicable — the fix does not affect auth, secrets, or trust boundaries.
- `Accessibility`: Not applicable — no user-facing UI or semantic markup changed.
- `Observability`: Not applicable — no logs, metrics, traces, or analytics changed.

## Validation Run

```text
pnpm install --frozen-lockfile — passed
NEXT_PUBLIC_SITE_BASE_PATH=/notes pnpm build — passed
pnpm typecheck — passed
rm -rf apps/site/out && pnpm lint — passed
```

## Accessibility Notes

- Not applicable — this task changed dependency metadata only.

## Observability Changes

- Not applicable — the task did not add or modify operational telemetry.

## ADR Updates

- Not applicable — the implementation stayed within the existing pnpm workspace and GitHub Actions setup.

## Unresolved Assumptions or Follow-Up

- The repository still has pre-existing planning artifacts outside this task (`issues/002-restore-frozen-lockfile-publish-install.md` is untracked and `issues-lock.json` is modified), but this implementation did not change them.
