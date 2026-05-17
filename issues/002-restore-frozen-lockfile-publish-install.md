---
id: '002'
created: 2026-05-17
updated: 2026-05-17
status: active
---

# Task: Restore frozen-lockfile installs for the publish workflow

## Priority

P0 — GitHub Pages deploys are currently blocked because the publish workflow fails during `pnpm install` before the site build can start.

## Dependencies

- No task dependency; this fix can start immediately.
- Depends on the existing root `pnpm-lock.yaml`, `packages/components/package.json`, and `.github/workflows/publish.yml` workflow contract.
- No ADR dependency; this task uses the existing pnpm workspace and GitHub Actions architecture.

## Assignability

**AFK** — the failure is reproducible from the repository state and workflow config, and the task does not require a new architectural or product decision.

## Context

The digital garden publish workflow installs workspace dependencies on GitHub Actions with pnpm 9.15.4 and Node 22. In CI, pnpm uses `frozen-lockfile` by default, and the current run fails because `packages/components/package.json` now declares `stylelint` in `devDependencies` while the committed `pnpm-lock.yaml` importer for `packages/components` was not refreshed. The fix must restore the lockfile/package manifest contract rather than bypassing the CI safeguard with `--no-frozen-lockfile`.

## Use Cases

- **Feature**: Publish workflow dependency install
- **Scenario**: Maintainer pushes a deployable change to `master`
- **Given** the repository is checked out on a clean GitHub Actions runner
- **When** the publish workflow runs `pnpm install`
- **Then** dependency installation completes under the default frozen-lockfile CI behavior and the build job can continue

- **Feature**: Local reproduction of CI install rules
- **Scenario**: Contributor validates the workspace before pushing
- **Given** the contributor has a clean checkout of the repository
- **When** they run `pnpm install --frozen-lockfile` at the workspace root
- **Then** the command succeeds without a lockfile mismatch for `packages/components`

## Definition of Ready

- The current install failure is reproducible from the committed workflow and workspace manifests.
- The `packages/components/package.json` to `pnpm-lock.yaml` mismatch is identified as the direct cause of the CI failure.
- The remediation path preserves frozen-lockfile validation instead of relaxing CI with `--no-frozen-lockfile`.
- The publish verification commands (`pnpm install --frozen-lockfile` and `pnpm build`) are available locally.

## Functional Requirements

- `FR-001`: The `packages/components` importer entry in `pnpm-lock.yaml` must match the dependency specifiers committed in `packages/components/package.json`, including `stylelint`.
- `FR-002`: Running `pnpm install --frozen-lockfile` at the workspace root must succeed without `ERR_PNPM_OUTDATED_LOCKFILE`.
- `FR-003`: The publish workflow must continue to rely on the committed lockfile as the source of truth and must not switch to `--no-frozen-lockfile` to mask dependency drift.
- `FR-004`: After dependencies install successfully, the existing site build entry point must remain runnable in the same workspace state.

## Non-Functional Requirements

- `NFR-001`: The fix must be valid under the toolchain pinned in `.github/workflows/publish.yml` (`pnpm` 9.15.4 and Node 22).
- `NFR-002`: The lockfile update must stay scoped to manifest synchronization and must not introduce unrelated dependency changes.
- `NFR-003`: The verification path must be non-interactive and runnable in a clean local or CI environment.

## Observability Requirements

- `OBS-001`: The validation commands for this task must keep lockfile drift visible through failing exit codes and clear pnpm error output.
- `OBS-002`: The implementation must not suppress lockfile drift by disabling frozen-lockfile behavior in CI.

## Acceptance Criteria

- `AC-001`: **Given** a clean checkout of the repository, **When** `pnpm install --frozen-lockfile` runs at the root, **Then** it exits successfully and does not report an outdated lockfile for `packages/components`.
- `AC-002`: **Given** the publish workflow tool versions from `.github/workflows/publish.yml`, **When** the build job executes its dependency install step, **Then** the step succeeds without adding `--no-frozen-lockfile`.
- `AC-003`: **Given** the lockfile has been synchronized, **When** `pnpm build` runs after install, **Then** the build starts from a valid dependency state instead of failing during package resolution.

## Required Tests

Choose the smallest meaningful test set for this task.
Do not create tests only to satisfy a category.
If a category is not relevant, write `Not applicable — <specific reason>`.

### Unit Tests

- `UT-001`: Not applicable — this task updates workspace dependency metadata and CI verification, not isolated runtime logic.

### Integration Tests

- `IT-001`: **Scenario**: Frozen workspace install matches committed manifests  
  **Given** a clean checkout with the workflow's Node and pnpm versions  
  **When** `pnpm install --frozen-lockfile` runs at the repository root  
  **Then** the workspace install succeeds  
  **And** pnpm accepts the `packages/components` importer as synchronized with `packages/components/package.json`  
  Covers `FR-001`, `FR-002`, and `AC-001`.

### Smoke Tests

- `SMK-001`: **Scenario**: Publish build can start from the synchronized dependency state  
  **Given** a clean checkout of the repository  
  **When** `pnpm install --frozen-lockfile` and `NEXT_PUBLIC_SITE_BASE_PATH=/notes pnpm build` run in sequence  
  **Then** the install and build complete without a dependency-resolution crash  
  Covers release confidence for `FR-004` and `AC-003`.

### End-to-End Tests

- `E2E-001`: Not applicable — the task changes dependency metadata for CI and does not alter a user-facing application journey.

### Regression Tests

- `REG-001`: **Scenario**: Components manifest drift no longer blocks CI install  
  **Given** `packages/components/package.json` declares `stylelint` in `devDependencies`  
  **When** the publish workflow install is reproduced with frozen-lockfile enabled  
  **Then** pnpm does not report `ERR_PNPM_OUTDATED_LOCKFILE` for `packages/components`  
  Covers previous defect `gha-publish-frozen-lockfile-2026-05-17`.

### Performance Tests

- `PT-001`: Not applicable — synchronizing the lockfile does not change a performance-sensitive runtime path.

### Security Tests

- `ST-001`: Not applicable — the task does not affect authentication, authorization, secrets, or untrusted input handling.

### Usability Tests

- `UX-001`: Not applicable — the task is internal to dependency management and CI reliability, with no user-facing interaction change.

### Observability Tests

- `OT-001`: Not applicable — the task does not add or modify logs, metrics, traces, or analytics beyond preserving pnpm's existing failure signal.

## Definition of Done

- The committed lockfile is synchronized with `packages/components/package.json`.
- Required tests for this task pass.
- The publish workflow's dependency install succeeds with frozen-lockfile behavior intact.
- The site build remains runnable from the synchronized workspace state.
- Any touched workflow or dependency-management comments stay aligned with the chosen verification commands.
