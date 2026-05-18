# Research: Atomic design guidance for refactoring a design system and component library

## Summary

Atomic design is less a folder scheme than a system-first workflow: refactor by reusable interface parts, compose them concurrently into templates/pages, and validate them with real content in real site contexts. For a monorepo, the practical target is a single source of truth where shared components feed both docs/Storybook and the site, with governance, variation testing, and incremental adoption to avoid library/app drift. [Chapter 1](https://atomicdesign.bradfrost.com/chapter-1/) [Chapter 2](https://atomicdesign.bradfrost.com/chapter-2/) [Chapter 5](https://atomicdesign.bradfrost.com/chapter-5/)

## Findings

1. **Core principles**
   - **Design systems, not pages** — scope work by components and behaviors, not page counts; modularity is the response to multi-device complexity. [Chapter 1](https://atomicdesign.bradfrost.com/chapter-1/)
   - **The five stages are a hierarchy, not a sequence** — atoms, molecules, organisms, templates, and pages should be developed together, not in a strict waterfall. [Chapter 2](https://atomicdesign.bradfrost.com/chapter-2/) [Chapter 4](https://atomicdesign.bradfrost.com/chapter-4/)
   - **Separate structure from content** — templates define layout/content structure; pages validate that structure with representative content and variation states. [Chapter 2](https://atomicdesign.bradfrost.com/chapter-2/) [Chapter 3](https://atomicdesign.bradfrost.com/chapter-3/)
   - **Treat the pattern library as part of the product** — it must be living, cross-disciplinary, and maintained, not a side artifact. [Chapter 1](https://atomicdesign.bradfrost.com/chapter-1/) [Chapter 5](https://atomicdesign.bradfrost.com/chapter-5/)

2. **Refactor heuristics**
   - **Start with an interface inventory** — audit the current site UI, cluster duplicate buttons/forms/cards/navs, then decide keep/merge/remove before refactoring code. [Chapter 4](https://atomicdesign.bradfrost.com/chapter-4/)
   - **Extract primitives first** — stabilize tokens/base elements and small single-purpose molecules; only promote larger organisms to the shared package when reuse is proven. [Chapter 2](https://atomicdesign.bradfrost.com/chapter-2/) [Chapter 5](https://atomicdesign.bradfrost.com/chapter-5/)
   - **Use context-agnostic names** — prefer names like `card`, `alert`, or `nav-list` over page-bound names, but pair them with documentation showing real usage context and lineage. [Chapter 5](https://atomicdesign.bradfrost.com/chapter-5/) [Chapter 3](https://atomicdesign.bradfrost.com/chapter-3/)
   - **Test components with real content extremes** — long titles, empty states, admin states, missing images, repeated lists, etc. should be first-class scenarios. [Chapter 2](https://atomicdesign.bradfrost.com/chapter-2/) [Chapter 3](https://atomicdesign.bradfrost.com/chapter-3/)
   - **Make docs use the real components** — Storybook/pattern docs should render the same components the site consumes; avoid duplicated markup/styles between docs and app. [Chapter 3](https://atomicdesign.bradfrost.com/chapter-3/) [Chapter 5](https://atomicdesign.bradfrost.com/chapter-5/)
   - **Move decisions into the browser early** — use static comps for direction-setting, not as implementation specs; refine responsive behavior and interactions in code. [Chapter 4](https://atomicdesign.bradfrost.com/chapter-4/)

3. **Migration risks / anti-patterns**
   - **Big-bang or page-first rewrites** — atomic design is concurrent and iterative, so “finish the library, then integrate the site” is risky. [Chapter 2](https://atomicdesign.bradfrost.com/chapter-2/) [Chapter 4](https://atomicdesign.bradfrost.com/chapter-4/)
   - **Treating the library as an auxiliary project** — without ownership, budget, and workflow integration, it will drift or die. [Chapter 1](https://atomicdesign.bradfrost.com/chapter-1/) [Chapter 5](https://atomicdesign.bradfrost.com/chapter-5/)
   - **Over-literal taxonomy dogma** — don’t force every artifact into atomic labels if the organization needs plainer terminology. [Chapter 2](https://atomicdesign.bradfrost.com/chapter-2/)
   - **Best-case-only demos** — lorem ipsum and perfect mock data hide failures that real content exposes. [Chapter 2](https://atomicdesign.bradfrost.com/chapter-2/) [Chapter 3](https://atomicdesign.bradfrost.com/chapter-3/)
   - **Context-bound APIs/names** — components like `homepageHero` or `productPageDropdown` reduce reuse and harden page assumptions into the library. [Chapter 5](https://atomicdesign.bradfrost.com/chapter-5/)
   - **Shared-library bloat** — extracting one-off site sections too early makes the system harder to govern. [Chapter 5](https://atomicdesign.bradfrost.com/chapter-5/)
   - **Docs/app drift** — copying components into docs or site code instead of consuming one source of truth undermines maintainability. [Chapter 3](https://atomicdesign.bradfrost.com/chapter-3/) [Chapter 5](https://atomicdesign.bradfrost.com/chapter-5/)

4. **Suggested task sequencing for a monorepo with shared components + site**
   1. **Inventory current UI** across the site; dedupe patterns, agree names, and identify keep/merge/remove candidates. [Chapter 4](https://atomicdesign.bradfrost.com/chapter-4/)
   2. **Set system boundaries** — keep `packages/components` for tokens, primitives, and reusable compositions; keep `apps/site` for templates, page assembly, and site-only compositions until reuse is proven. [Chapter 2](https://atomicdesign.bradfrost.com/chapter-2/) [Chapter 5](https://atomicdesign.bradfrost.com/chapter-5/)
   3. **Refactor atoms and molecules first** in the shared package: typography, buttons, inputs, icons, spacing, list/form primitives, with tests and docs. [Chapter 2](https://atomicdesign.bradfrost.com/chapter-2/) [Chapter 3](https://atomicdesign.bradfrost.com/chapter-3/)
   4. **Refactor organisms next, selectively** — extract to shared only when at least 2+ real site contexts need the same structure/behavior; otherwise keep local to the site. [Chapter 2](https://atomicdesign.bradfrost.com/chapter-2/) [Chapter 5](https://atomicdesign.bradfrost.com/chapter-5/)
   5. **Create template/page scenarios in the site app** using representative content fixtures and variation states to validate the shared pieces. [Chapter 2](https://atomicdesign.bradfrost.com/chapter-2/) [Chapter 3](https://atomicdesign.bradfrost.com/chapter-3/)
   6. **Wire docs/Storybook for context** — show code, variants, responsive behavior, lineage, and usage notes for each shared component. [Chapter 3](https://atomicdesign.bradfrost.com/chapter-3/) [Chapter 5](https://atomicdesign.bradfrost.com/chapter-5/)
   7. **Migrate incrementally** by section or route, replacing legacy UI with shared components while tracking regressions. [Chapter 4](https://atomicdesign.bradfrost.com/chapter-4/) [Chapter 5](https://atomicdesign.bradfrost.com/chapter-5/)
   8. **Finish with governance** — assign owners, define contribution/deprecation rules, publish a changelog/roadmap, and require shared fixes to land in the system first rather than as app-only hotfixes. [Chapter 5](https://atomicdesign.bradfrost.com/chapter-5/)

## Sources

- Kept: Designing Systems | Atomic Design by Brad Frost (https://atomicdesign.bradfrost.com/chapter-1/) — primary source for system-first framing, style guide benefits, and failure modes.
- Kept: Atomic Design Methodology | Atomic Design by Brad Frost (https://atomicdesign.bradfrost.com/chapter-2/) — primary source for the five-stage model, non-linearity, and structure/content separation.
- Kept: Tools of the Trade | Atomic Design by Brad Frost (https://atomicdesign.bradfrost.com/chapter-3/) — primary source for DRY composition, dynamic data, lineage, and living documentation.
- Kept: The Atomic Workflow | Atomic Design by Brad Frost (https://atomicdesign.bradfrost.com/chapter-4/) — primary source for interface inventory, parallel workflow, and in-browser iteration.
- Kept: Maintaining Design Systems | Atomic Design by Brad Frost (https://atomicdesign.bradfrost.com/chapter-5/) — primary source for governance, visibility, maintainability, and single-source-of-truth guidance.
- Dropped: Secondary blog/Medium/DEV posts from search — useful commentary, but excluded in favor of Frost’s original chapters.

## Gaps

The chapters are methodological, not implementation-specific. They do not prescribe exact monorepo boundaries, versioning strategy, or Storybook/package tooling, so the monorepo recommendations above are derived implications rather than explicit instructions. Next step: audit the current `packages/components` and `apps/site` boundaries against these heuristics, then draft a concrete extraction matrix for shared vs site-only components.
