# Atomic Design Migration Matrix

## Status

Approved baseline for Issue `004` — created to satisfy `issues/003-define-atomic-design-boundaries.md` and approved at the human checkpoint on 2026-05-17.

## Related artifacts

- Issue: `issues/003-define-atomic-design-boundaries.md`
- ADR: `docs/adrs/001-atomic-component-promotion-boundary.md`
- ADR: `docs/adrs/002-design-token-source-of-truth.md`
- ADR: `docs/adrs/003-react-lit-interop-boundary.md`
- Vocabulary: `CONTEXT.md`

## Scope

This matrix classifies:

- every current shared component exported from `packages/components/src/index.ts`
- every real site composition in `apps/site/app` that already assembles those shared components on live routes

Out of scope for the matrix:

- Storybook docs-only entries such as `design-system-tokens` and `kitchen-sink`
- non-UI support files such as `register-webcomponents.tsx`, `types.d.ts`, `note-processor.ts`, and `rehype-code.ts`
- later implementation work from Issues `004` through `008`

## Classification rules

- **Atomic level** uses only the project vocabulary from `CONTEXT.md`: `Atom`, `Molecule`, `Organism`, `Template`, or `Page`.
- **Target home** must be one of `packages/components`, `apps/site`, `legacy`, or `undecided`.
- **Migration status / notes** explains whether the artifact is already in the right place, should stay local, or needs a later route-slice validation.
- Adapter behavior belongs in migration notes, not as a separate atomic level.

## Shared component inventory

| Artifact            | Current path                                 | Atomic level | Target home           | Migration status / notes                                                                                                                                                                                    |
| ------------------- | -------------------------------------------- | ------------ | --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `garden-tag`        | `packages/components/src/garden-tag/`        | Atom         | `packages/components` | Keep shared. Already used on the home page and note page as a token-backed primitive.                                                                                                                       |
| `garden-badge`      | `packages/components/src/garden-badge/`      | Atom         | `packages/components` | Keep shared. Live site uses it for status labels on error and not-found pages.                                                                                                                              |
| `garden-button`     | `packages/components/src/garden-button/`     | Atom         | `packages/components` | Keep shared. Live site uses it for error recovery actions.                                                                                                                                                  |
| `garden-divider`    | `packages/components/src/garden-divider/`    | Atom         | `packages/components` | Keep shared. No live route usage yet, but it is a context-agnostic primitive and should be validated during later content-route work rather than demoted now.                                               |
| `garden-highlight`  | `packages/components/src/garden-highlight/`  | Atom         | `packages/components` | Keep shared. Storybook-only today; later route work can replace equivalent inline highlight markup with this atom where it improves consistency.                                                            |
| `garden-tape`       | `packages/components/src/garden-tape/`       | Atom         | `undecided`           | Human approval needed. Decorative primitive with Storybook-only usage; keep shared only if the scrapbook accent is expected on more than one real route.                                                    |
| `garden-breadcrumb` | `packages/components/src/garden-breadcrumb/` | Molecule     | `packages/components` | Keep shared. Live note pages already depend on it through the React-Lit adapter boundary.                                                                                                                   |
| `garden-search`     | `packages/components/src/garden-search/`     | Molecule     | `packages/components` | Keep shared. Live home search and the nav actions story both validate it as a reusable focused interaction.                                                                                                 |
| `garden-blockquote` | `packages/components/src/garden-blockquote/` | Molecule     | `packages/components` | Keep shared. Storybook-only today, but it is a reusable rich-content primitive rather than a page-specific composition.                                                                                     |
| `garden-callout`    | `packages/components/src/garden-callout/`    | Molecule     | `packages/components` | Keep shared. Storybook-only today, but it matches a reusable content pattern for later note/article slices.                                                                                                 |
| `garden-mermaid`    | `packages/components/src/garden-mermaid/`    | Molecule     | `packages/components` | Keep shared. Real note pages already render it through the markdown-to-custom-element pipeline.                                                                                                             |
| `garden-card`       | `packages/components/src/garden-card/`       | Organism     | `packages/components` | Keep shared. The card contract is reused for home-page note listings, while the surrounding grids and section chrome remain site-local.                                                                     |
| `garden-nav`        | `packages/components/src/garden-nav/`        | Organism     | `packages/components` | Keep shared. It is the highest-coupling organism and must stay framework-agnostic while the React adapter is standardized later.                                                                            |
| `garden-toc`        | `packages/components/src/garden-toc/`        | Organism     | `packages/components` | Keep shared. Note pages already use it as a reusable sidebar section through an adapter.                                                                                                                    |
| `garden-banner`     | `packages/components/src/garden-banner/`     | Organism     | `undecided`           | Human approval needed. The live home page currently reimplements the marquee inline instead of using this shared component. Keep shared only if a second real route or a clear cross-route contract exists. |
| `garden-sheet`      | `packages/components/src/garden-sheet/`      | Organism     | `undecided`           | Human approval needed. Visually overlaps with the home page’s pinned-paper sections, but no live route consumes it yet.                                                                                     |
| `garden-article`    | `packages/components/src/garden-article/`    | Template     | `packages/components` | Keep shared for now. Real note pages already depend on its slot contract, but ADR `001` still asks whether it should stay shared if note pages remain its only near-term consumer.                          |
| `my-heading`        | `packages/components/src/my-heading/`        | Atom         | `legacy`              | Legacy-only. Backward-compat export with no live-site usage; do not expand or migrate into the new taxonomy beyond documenting its removal path.                                                            |

## Real site composition inventory

| Artifact          | Current path                                     | Atomic level | Target home | Migration status / notes                                                                                                                                                                          |
| ----------------- | ------------------------------------------------ | ------------ | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `RootLayout`      | `apps/site/app/layout.tsx`                       | Template     | `apps/site` | Keep site-local. It is the Next.js route shell that owns the skip link, theme bootstrap script, custom-element registration mount, and placement of shared navigation.                            |
| `SiteNav`         | `apps/site/app/components/site-nav.tsx`          | Organism     | `apps/site` | Keep app-level. It is a React-Lit adapter around the shared `garden-nav` organism and should later move into the centralized React-Lit adapter boundary from ADR `003`, not into the Lit package. |
| `SiteSearch`      | `apps/site/app/components/site-search.tsx`       | Molecule     | `apps/site` | Keep app-level. It is a React-Lit adapter around the shared `garden-search` molecule for Next.js routing and value synchronization.                                                               |
| `SiteBreadcrumb`  | `apps/site/app/components/site-breadcrumb.tsx`   | Molecule     | `apps/site` | Keep app-level. It is a React-Lit adapter around the shared `garden-breadcrumb` molecule and should be consolidated with other adapters later.                                                    |
| `SiteToc`         | `apps/site/app/components/site-toc.tsx`          | Organism     | `apps/site` | Keep app-level. It is a React-Lit adapter around the shared `garden-toc` organism, not a candidate shared Lit component.                                                                          |
| `HomePage`        | `apps/site/app/page.tsx`                         | Page         | `apps/site` | Keep site-local. The hero, marquee, tags row, and search entry validate the design system with real content but are still route-specific compositions.                                            |
| `HomePageContent` | `apps/site/app/components/home-page-content.tsx` | Page         | `apps/site` | Keep site-local. It owns category grouping, results state, and pinned-paper section composition around shared `garden-card` blocks.                                                               |
| `NotePage`        | `apps/site/app/[...slug]/page.tsx`               | Page         | `apps/site` | Keep site-local. It binds real note data, TOC rules, and backlinks to the shared `garden-article` template.                                                                                       |
| `ErrorPage`       | `apps/site/app/error.tsx`                        | Page         | `apps/site` | Keep site-local. It is a route-level recovery page that consumes shared atoms but should not be promoted into the design-system package.                                                          |
| `NotFound`        | `apps/site/app/not-found.tsx`                    | Page         | `apps/site` | Keep site-local. It is a route-level 404 page that consumes shared styling language without proving reusable structure.                                                                           |

## Boundary decisions already supported by code inspection

1. **The shared package already contains a useful atomic core**: atoms, molecules, organisms, and one live template are present even though the export surface is flat.
2. **Real page composition still lives in `apps/site`**: the home page and note page are the strongest proofs that pages should stay local while shared contracts mature.
3. **React-Lit interop is currently app-owned**: `SiteNav`, `SiteSearch`, `SiteBreadcrumb`, and `SiteToc` are adapter seams, not missing Lit components.
4. **Storybook-only shared components split into two groups**:
   - keep shared now: `garden-divider`, `garden-highlight`, `garden-blockquote`, `garden-callout`
   - require explicit approval before staying shared: `garden-tape`, `garden-banner`, `garden-sheet`, plus the legacy `my-heading` removal path

## Approved decisions

The human approval checkpoint for Issue `003` was completed on 2026-05-17. Issue `004` should proceed using these approved decisions:

1. **Component Promotion Boundary** — keep atoms, molecules, and proven reusable organisms/templates in `packages/components`; keep page composition in `apps/site` until reuse is proven.
2. **Token Source of Truth** — use `packages/components/src/styles/tokens.css` as the canonical shared token source and stop maintaining active token copies in the site and Storybook.
3. **React-Lit Adapter Boundary** — keep `@notes/components` framework-agnostic and centralize React adapters in the app layer.
4. **Storybook-only component status** — keep `garden-tape`, `garden-banner`, and `garden-sheet` as `undecided`; do not expand their scope in Issue `004`.
5. **Template/legacy exceptions** — keep `garden-article` as a shared template for now, and keep `my-heading` as a legacy backward-compat export pending a later cleanup task.

## Next issue handoff

Issue `004` can proceed using this matrix as its inventory baseline without redefining shared boundaries.
