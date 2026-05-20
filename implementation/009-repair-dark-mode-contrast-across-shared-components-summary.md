---
id: '009'
issue: 'issues/009-repair-dark-mode-contrast-across-shared-components.md'
created: 2026-05-19
updated: 2026-05-19
---

# Implementation Summary: Repair dark-mode contrast across shared components

## Related Task

- `issues/009-repair-dark-mode-contrast-across-shared-components.md`

## Files Changed

- `packages/components/src/styles/tokens.css` — added shared dark-mode foreground tokens for filled surfaces, banners, and nav toggle states.
- `packages/components/src/garden-button/garden-button.ts` — moved filled-variant foreground handling onto the host so slotted labels/icons inherit the corrected dark-mode color.
- `packages/components/src/garden-tag/garden-tag.ts` — moved filled-variant foreground handling onto the host and corrected yellow dark-mode text treatment.
- `packages/components/src/garden-banner/garden-banner.ts` — switched marquee text to host-inherited banner contrast tokens.
- `packages/components/src/garden-nav/garden-nav.ts` — applied dark-mode nav link and theme-toggle colors with `styleMap` so active/inactive states render distinct accessible colors.
- `packages/components/src/garden-button/garden-button.test.ts` — updated unit coverage for token-driven filled button foreground behavior.
- `packages/components/src/garden-tag/garden-tag.test.ts` — updated unit coverage for token-driven filled tag foreground behavior.
- `packages/components/src/garden-banner/garden-banner.test.ts` — updated token coverage for banner host-inherited contrast behavior.
- `packages/components/src/garden-nav/garden-nav.test.ts` — updated nav unit coverage for active/inactive dark-mode token usage.
- `apps/storybook/.storybook/preview.ts` — changed runtime component registration to explicit built-component imports via a local registration module.
- `apps/storybook/src/register-components.ts` — registered built Lit components directly from `packages/components/dist/*.js` so Storybook uses the latest shared package build.
- `apps/storybook/src/stories/story-helpers/dark-mode-contrast.ts` — added reusable Storybook contrast assertions for shadow-DOM components.
- `apps/storybook/src/stories/story-helpers/dark-theme-frame.tsx` — added a shared dark-theme fixture wrapper and shared dark-theme token fixtures for review stories.
- `apps/storybook/src/stories/garden-button.stories.tsx` — added a focused dark-mode contrast review story and play assertions.
- `apps/storybook/src/stories/garden-tag.stories.tsx` — added a focused dark-mode contrast review story and play assertions.
- `apps/storybook/src/stories/garden-banner.stories.tsx` — added a focused dark-mode contrast review story and play assertions.
- `apps/storybook/src/stories/garden-nav.stories.tsx` — added a focused dark-mode contrast review story and play assertions.

## Behavior Implemented

- Filled `garden-button` variants now give slotted labels/icons the correct dark-mode foreground via host-level token assignment.
- Filled `garden-tag` variants now keep accent, blue, green/sage, and yellow labels readable in dark mode.
- `garden-banner` now uses a shared banner text token so marquee text stays legible on dark-theme pastel backgrounds.
- `garden-nav` now renders active links, inactive links, and theme-toggle buttons with distinct dark-mode colors that remain readable.
- Storybook now exposes dedicated dark-mode review stories for the affected shared components, with play assertions that fail when contrast regresses.

## Design Notes

- The fix stayed inside the shared component package and shared token source of truth; no route-local overrides were added.
- Host-level foreground assignment was used selectively for Lit components with slotted text because shadow-internal text color rules do not control distributed light-DOM labels reliably.
- Storybook runtime registration now imports built component entrypoints directly so dark-mode review stories exercise the current shared package output instead of stale prebundled package code.
- The Storybook contrast checks use a shared helper to keep the review stories small and to make regressions visible in one place.

## Tests Added or Updated

- `packages/components/src/garden-button/garden-button.test.ts` — verifies token-driven filled button foreground handling.
- `packages/components/src/garden-tag/garden-tag.test.ts` — verifies token-driven filled tag foreground handling.
- `packages/components/src/garden-nav/garden-nav.test.ts` — verifies active/inactive nav dark-mode token usage stays distinct.
- `packages/components/src/garden-banner/garden-banner.test.ts` — verifies banner contrast token inheritance.
- `apps/storybook/src/stories/garden-button.stories.tsx` — `DarkModeContrastReview` story asserts WCAG AA contrast for filled buttons.
- `apps/storybook/src/stories/garden-tag.stories.tsx` — `DarkModeContrastReview` story asserts WCAG AA contrast for filled tags.
- `apps/storybook/src/stories/garden-banner.stories.tsx` — `DarkModeContrastReview` story asserts WCAG AA contrast for the marquee banner.
- `apps/storybook/src/stories/garden-nav.stories.tsx` — `DarkModeContrastReview` story asserts active/inactive nav and theme-toggle contrast/state behavior.

## Test Categories Not Applicable

- `Smoke`: Not applicable — this task changes shared styling and review stories, not app startup or deployment availability.
- `E2E`: Not applicable — the risk is shared component-state contrast, which is covered by shared component tests and focused Storybook review stories.
- `Regression`: Not applicable — no separate tracked defect ID exists for these newly confirmed contrast failures.
- `Performance`: Not applicable — no performance-sensitive runtime behavior changed.
- `Security`: Not applicable — no auth, authorization, secrets, or untrusted input handling changed.

## Validation Run

```text
pnpm -C packages/components test — passed
pnpm -C packages/components typecheck — passed
pnpm -C packages/components lint — passed
pnpm -C packages/components build — passed
pnpm -C apps/storybook typecheck — passed
pnpm exec eslint apps/storybook/.storybook/preview.ts apps/storybook/src/register-components.ts apps/storybook/src/stories/story-helpers/dark-mode-contrast.ts apps/storybook/src/stories/story-helpers/dark-theme-frame.tsx apps/storybook/src/stories/garden-button.stories.tsx apps/storybook/src/stories/garden-tag.stories.tsx apps/storybook/src/stories/garden-banner.stories.tsx apps/storybook/src/stories/garden-nav.stories.tsx — passed
pnpm -C apps/storybook build — passed
pnpm -C apps/storybook exec test-storybook --url http://127.0.0.1:7007 --includeTags dark-contrast --maxWorkers 1 --testTimeout 30000 — passed
```

## Accessibility Notes

- Interactive primitives remain native (`<button>`/`<a>`), so keyboard semantics stay intact while foreground colors now match their dark-mode filled surfaces.
- The nav review story asserts active/inactive theme-toggle state semantics (`aria-pressed`) alongside contrast checks.
- Focus-visible styling was preserved; no custom ARIA widgets were introduced.

## Observability Changes

- No runtime logging, metrics, traces, or analytics were added.
- Storybook play assertions now act as the visibility mechanism for contrast regressions in the affected shared stories.

## ADR Updates

- Not applicable — this task stayed within the existing shared component and token architecture.

## Unresolved Assumptions or Follow-Up

- `storybook_run-story-tests` via the Storybook MCP tool timed out against the live dev server during this session, so the focused story validation was executed with the local Storybook test runner against the freshly built static bundle served on port `7007`.
- `pnpm -C apps/storybook lint` was not used as the validation command because it traverses generated `storybook-static/` output with pre-existing lint noise; targeted ESLint was run on the changed Storybook source files instead.
