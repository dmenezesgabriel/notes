# Code Context

## Files Retrieved

1. `packages/components/src/index.ts` (lines 1-23) - flat component export surface; no explicit atoms/molecules/organisms folders.
2. `packages/components/src/styles/base.ts` (lines 3-20) - every Lit component inherits root CSS vars through shadow DOM.
3. `packages/components/src/styles/tokens.css` (lines 1-187) - library token set: `--zine-*`, `--ds-*`, spacing, dark theme.
4. `packages/components/src/garden-tag/garden-tag.ts` (lines 6-120) - primitive chip/tag API used in home and note pages.
5. `packages/components/src/garden-button/garden-button.ts` (lines 6-136) - primitive action button API.
6. `packages/components/src/garden-search/garden-search.ts` (lines 7-128) - search primitive emits `garden-search` custom event.
7. `packages/components/src/garden-card/garden-card.ts` (lines 6-247) - card organism with `footer`/`thumb` slots and `--card-rotate` styling hook.
8. `packages/components/src/garden-nav/garden-nav.ts` (lines 6-298) - nav organism with `links` array prop, theme observer, `garden-theme-change` event.
9. `packages/components/src/garden-breadcrumb/garden-breadcrumb.ts` (lines 6-116) - breadcrumb array-prop component.
10. `packages/components/src/garden-toc/garden-toc.ts` (lines 6-165) - TOC array-prop component.
11. `packages/components/src/garden-article/garden-article.ts` (lines 7-180) - page-shell/template component with named slots for breadcrumb/meta/content/sidebar/backlinks.
12. `packages/components/src/garden-mermaid/garden-mermaid.ts` (lines 11-160) - specialized content component with dynamic import + theme re-render.
13. `apps/site/app/layout.tsx` (lines 1-60) - root app wiring: globals, theme bootstrap, web-component registration, nav.
14. `apps/site/app/components/register-webcomponents.tsx` (lines 1-7) - client-side `@notes/components` side-effect import.
15. `apps/site/app/types.d.ts` (lines 3-78) - manual JSX typings for only a subset of custom elements.
16. `apps/site/app/components/site-nav.tsx` (lines 14-72) - React wrapper for `garden-nav` property/event bridging.
17. `apps/site/app/components/site-search.tsx` (lines 8-60) - React wrapper for `garden-search` event bridging + URL sync.
18. `apps/site/app/components/site-breadcrumb.tsx` (lines 14-29) - sets `items` via JS property.
19. `apps/site/app/components/site-toc.tsx` (lines 18-31) - sets `items` via JS property.
20. `apps/site/app/page.tsx` (lines 13-168) - home hero uses tags + search, but composition is mostly inline-styled app code.
21. `apps/site/app/components/home-page-content.tsx` (lines 10-327) - app-level grouping/search logic; renders `garden-card` grids.
22. `apps/site/app/[...slug]/page.tsx` (lines 31-107) - richest production composition slice for note pages.
23. `apps/site/app/globals.css` (lines 16-195, 244-568) - site duplicates token definitions and owns prose/layout utilities.
24. `apps/site/app/lib/note-processor.ts` (lines 25-99, 105-118, 167-241) - note data flow into note page shell.
25. `apps/site/app/lib/rehype-code.ts` (lines 6-50) - markdown mermaid fences become `<garden-mermaid>`.
26. `packages/content/src/index.ts` (lines 7-30, 87-122) - shared `Note`/`TocEntry` types and TOC extraction contract.
27. `apps/storybook/.storybook/main.ts` (lines 9-52) - Storybook uses `@storybook/nextjs-vite`, Lit dedupe, prebundles `@notes/components`.
28. `apps/storybook/.storybook/preview.ts` (lines 1-63) - globally registers components, imports Storybook token CSS, applies theme/a11y config.
29. `apps/storybook/src/styles/tokens.css` (lines 1-198) - separate Storybook token copy.
30. `apps/storybook/src/stories/design-system-tokens.stories.tsx` (lines 3-247) - token docs; confirms intended design language.
31. `apps/storybook/src/stories/garden-article.stories.tsx` (lines 3-196) - best doc of current slot-based article composition.
32. `apps/storybook/src/stories/kitchen-sink.stories.tsx` (lines 3-185) - current pseudo-template/full-page showcase.

## Key Code

- **No explicit atomic taxonomy today.** The library is a flat set of feature folders exported from `packages/components/src/index.ts:1-23`.
- **Implicit taxonomy only:**
  - primitives: `garden-tag`, `garden-button`, `garden-badge`, `garden-divider`, `garden-highlight`
  - composed blocks: `garden-search`, `garden-breadcrumb`, `garden-toc`, `garden-card`
  - shells/organisms: `garden-nav`, `garden-article`
  - specialized content: `garden-mermaid`
- **Styling is CSS-variable driven, not Tailwind.** Components rely on root vars cascading into shadow DOM (`packages/components/src/styles/base.ts:3-20`).
- **Tokens are duplicated in 3 places:**
  - library: `packages/components/src/styles/tokens.css:1-187`
  - site: `apps/site/app/globals.css:16-195`
  - Storybook: `apps/storybook/src/styles/tokens.css:1-198`
- **Library components are mostly presentational; app code still owns composition.** Example: home hero and category sections are inline-styled in `apps/site/app/page.tsx:31-157` and `apps/site/app/components/home-page-content.tsx:95-323`.
- **React/web-component bridge is manual.** Array props and custom events require wrappers:
  - `SiteNav` sets `links`, `homeHref`, listens to `garden-theme-change` (`apps/site/app/components/site-nav.tsx:25-70`)
  - `SiteSearch` seeds `.value` and listens to `garden-search` (`apps/site/app/components/site-search.tsx:18-45`)
  - `SiteBreadcrumb`/`SiteToc` set `items` imperatively (`apps/site/app/components/site-breadcrumb.tsx:21-28`, `apps/site/app/components/site-toc.tsx:24-31`)
- **`garden-article` is the clearest current template boundary.** It exposes named slots for breadcrumb/meta/content/sidebar/backlinks (`packages/components/src/garden-article/garden-article.ts:14-21,143-179`) and the note page fills those slots (`apps/site/app/[...slug]/page.tsx:55-106`).
- **`garden-card` is the clearest current listing organism.** It accepts `headline/meta/excerpt/href`, supports `footer` tags, and exposes `--card-rotate` for app-level variance (`packages/components/src/garden-card/garden-card.ts:12-20,35-39,231-245`; used in `apps/site/app/components/home-page-content.tsx:169-180,310-320`).
- **`garden-nav` is the highest-coupling component.** It owns sticky layout + theme toggle and emits `garden-theme-change` (`packages/components/src/garden-nav/garden-nav.ts:17-18,43-69,239-247,255-297`).
- **`.prose` is not in the component package.** Note typography/layout live in app CSS (`apps/site/app/globals.css:244-465`), so `garden-article` depends on host styling by design.

## Architecture

- `packages/components` = Lit custom-element library.
- `apps/site` = Next.js app that:
  - imports global CSS/tokens in `layout.tsx`
  - registers all custom elements via `RegisterWebComponents`
  - wraps components when React cannot pass complex props or listen to hyphenated events.
- `packages/content` + `apps/site/app/lib/note-processor.ts` feed note data into UI:
  - `Note` + `TocEntry` come from `packages/content/src/index.ts:7-30`
  - `processNote()` returns `html`, `toc`, `frontmatter` (`apps/site/app/lib/note-processor.ts:167-212`)
  - note page injects those into `garden-article` slots (`apps/site/app/[...slug]/page.tsx:61-106`)
  - mermaid fences are transformed to `<garden-mermaid>` before render (`apps/site/app/lib/rehype-code.ts:6-50`)
- `apps/storybook` is the workbench/docs layer:
  - registers the same components globally (`apps/storybook/.storybook/preview.ts:1-3`)
  - imports its own token CSS copy (`apps/storybook/.storybook/preview.ts:1-3`)
  - documents tokens (`design-system-tokens.stories.tsx`) and showcases full-page composition (`kitchen-sink.stories.tsx`).

## Start Here

`apps/site/app/[...slug]/page.tsx` — it is the most valuable real slice: data pipeline in, slot-based page shell out, React wrapper seams visible, and it shows where “template/page” boundaries already exist.

## Smallest safe migration slices

1. **Primitive status/actions slice** — `garden-tag`, `garden-badge`, `garden-button` in `apps/site/app/page.tsx:135-150`, `apps/site/app/error.tsx:25-68`, `apps/site/app/not-found.tsx:18-20`. Lowest coupling.
2. **Search slice** — `garden-search` + `SiteSearch` + home hero (`packages/components/src/garden-search/garden-search.ts:89-128`, `apps/site/app/components/site-search.tsx:18-60`, `apps/site/app/page.tsx:152-155`). Small but exercises event bridging.
3. **Listing slice** — `garden-card` + home grids (`packages/components/src/garden-card/garden-card.ts:231-245`, `apps/site/app/components/home-page-content.tsx:162-181,301-322`). Good first organism refactor.
4. **Note shell slice** — `garden-article` + breadcrumb/TOC wrappers + `.prose` (`apps/site/app/[...slug]/page.tsx:55-106`, `packages/components/src/garden-article/garden-article.ts:14-21,143-179`, `apps/site/app/globals.css:244-465`). Best template/page migration slice.
5. **Nav/theme slice** — `garden-nav` + `SiteNav` + `layout.tsx` theme bootstrap (`packages/components/src/garden-nav/garden-nav.ts:43-69,239-247`, `apps/site/app/components/site-nav.tsx:25-72`, `apps/site/app/layout.tsx:25-56`). Highest risk/cross-cutting.
6. **Specialized content slice** — mermaid only (`apps/site/app/lib/rehype-code.ts:6-50`, `packages/components/src/garden-mermaid/garden-mermaid.ts:11-160`). Safe if kept separate from broader DS taxonomy work.

## Risks / open questions

- **Token source of truth is unclear** because tokens are duplicated across library/site/Storybook.
- **Wrapper location is unclear**: current React adapter logic lives in the app, not alongside the component library.
- **Page composition still lives mostly in app inline styles**, so an atomic refactor must decide what stays app-only template/page code vs what moves into reusable library organisms/templates.
- **Several library components appear Storybook-only today** (e.g. banner/callout/divider/highlight/sheet/tape are not used in app render paths), so they are lower-risk but less representative migration targets.
