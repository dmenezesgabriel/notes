# Project Context

This file defines the domain vocabulary for this project. Both plan-it and implement-it read it at session start to use consistent terminology in task names, requirements, acceptance criteria, test names, and code.

Update this file when a domain term is first defined or clarified. Do not batch updates — add terms as they emerge.

---

## Domain terms

### Atomic Design

**Definition**: The design-system methodology used in this project to organize reusable UI into atoms, molecules, organisms, templates, and pages.
**Usage**: "atomic design" in planning docs, Storybook information architecture, and component migration tasks.
**Constraints**: The stages are a hierarchy for reasoning and governance, not a strict implementation waterfall.

### Atom

**Definition**: A smallest reusable UI primitive such as a token-backed tag, badge, button, divider, or highlight.
**Usage**: Shared Lit primitives in `packages/components` and Storybook atomic component sections.
**Constraints**: Atoms must stay context-agnostic, token-driven, and safe to reuse across routes.

### Molecule

**Definition**: A small composition of atoms that encapsulates one focused behavior, such as search input behavior or breadcrumb rendering.
**Usage**: Shared Lit components in `packages/components` and migration tasks that group small interactive or data-shaped UI blocks.
**Constraints**: Molecules may depend on atoms and stable data contracts, but must not encode page-specific layout assumptions.

### Organism

**Definition**: A larger reusable composition that combines atoms and molecules into a meaningful section such as navigation or note cards.
**Usage**: Shared Lit components like `garden-card` grids or `garden-nav`, and Storybook organism-level docs.
**Constraints**: Organisms should move to the shared package only when reuse is proven in more than one real site context.

### Template

**Definition**: A reusable structural layout that defines slots, regions, and state boundaries without hard-coding route-specific content.
**Usage**: Shared shells like `garden-article` and site migration tasks for route composition.
**Constraints**: Templates may live in `packages/components` only when their structure is genuinely reusable across real pages.

### Page

**Definition**: A concrete route that binds real content, data loading, and route-specific composition to templates, organisms, molecules, and atoms.
**Usage**: Next.js routes in `apps/site/app`, especially the home page and note page slices.
**Constraints**: Pages validate the design system with realistic content and states; they must not be replaced by abstract demos.

### Component Promotion Boundary

**Definition**: The rule that decides whether a UI artifact belongs in the shared component package, stays site-local, or is marked legacy.
**Usage**: Migration matrix, ADRs, and contribution guidance.
**Constraints**: Route-specific compositions stay in `apps/site` until reuse is proven; shared exports must remain context-agnostic.

### Token Source of Truth

**Definition**: The canonical stylesheet or artifact from which the site, Storybook, and Lit components consume shared design tokens.
**Usage**: `packages/components/src/styles/tokens.css`, theme setup, and token consolidation tasks.
**Constraints**: Active token duplication across app and Storybook is not allowed after the refactor; app-local layout or prose styles may extend but not fork shared tokens.

### React-Lit Adapter

**Definition**: The boundary layer that lets the Next.js React app pass complex data and custom events to Lit web components safely.
**Usage**: Wrappers, typings, and helper modules under `apps/site/app/components` or a future dedicated adapter layer.
**Constraints**: The Lit component package must remain framework-agnostic; adapter logic must avoid route-local `any` casts for supported elements.

### Migration Matrix

**Definition**: The version-controlled inventory that classifies current shared components and real site compositions by atomic level, target home, and migration status.
**Usage**: `docs/atomic-design-migration-matrix.md`, issue sequencing, and human approval of shared-vs-local boundaries.
**Constraints**: The matrix must stay aligned with `CONTEXT.md`, the ADRs, and the actual codebase; unresolved promotions must be marked `undecided` instead of being silently assumed.

### Undecided Shared Component

**Definition**: A shared-package artifact whose long-term place in the atomic system is not yet approved because real route reuse is still unproven.
**Usage**: Storybook `Undecided/*` sections, migration-matrix notes, and cleanup planning.
**Constraints**: Do not add new shared usage while the status is `undecided`; prefer route-local composition until the Component Promotion Boundary is satisfied.

### Legacy Export

**Definition**: A backward-compatibility export that remains available temporarily but is no longer part of the approved active shared taxonomy.
**Usage**: Storybook `Legacy/*` sections, migration-matrix notes, and deprecation guidance.
**Constraints**: Do not add new usage; every legacy export must have an explicit replacement path before removal.

---

## Decisions and constraints

### Atomic migration strategy

Refactor the design system through real route slices instead of a big-bang rewrite. Start with boundaries and shared foundations, then validate the system on the note page and home page before touching the highest-coupling navigation/theme behavior.

### Shared component rule

`packages/components` is for tokens, atoms, molecules, and only those organisms or templates whose reuse is proven in the live site. Route-specific page composition remains in `apps/site` until the component promotion boundary says otherwise.

### Inventory source of truth

The current atomic inventory lives in `docs/atomic-design-migration-matrix.md`. Update that file when a shared component changes status, a route-local composition is promoted, or a legacy export gains a deprecation decision.

---

## Out of scope

- This refactor does not require renaming every existing component to generic atomic nouns if the current `garden-*` names remain clearer and backward compatible.
- This refactor does not require moving all page layout and prose styling into the shared component package.
- This refactor does not require a big-bang replacement of all existing components before incremental site migration begins.
