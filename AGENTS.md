# Project Guidelines

This is a Digital Garden project.

## Stack

- Pnpm as package manager (pnpm workspaces monorepo)
- Vite as build tool (used in apps/storybook and packages/components)
- Lit Elements as web component library (packages/components)
- React / Next.js as UI library and SSG framework (apps/site — Next.js 15, App Router)
- Tailwind CSS as styling framework
- TypeScript as programming language (all configs are .ts, no .js config files)
- Prettier for code formatting
- ESLint for linting
- Husky for Git hooks
- Commitlint for commit message linting
- Vitest for testing
- V8 for code coverage
- Storybook 10 for UI component development (apps/storybook — web-components/Vite)
- Playwright for end-to-end testing

## Monorepo Layout

```
notes/           ← Dendron markdown notes (single source of truth, never duplicated)
packages/
  content/       ← Next-agnostic content pipeline: scans notes/, emits manifest.json + search index
  components/    ← Lit web components (TypeScript)
apps/
  site/          ← Next.js 15 (App Router) digital garden site
  storybook/     ← Storybook 10 (web-components + Vite) component workbench
```

## Storybook MCP Server

Storybook exposes an MCP server at **http://localhost:6006/mcp** (requires Storybook dev server running).
It is registered as the `storybook` server in `.pi/mcp.json`.

When working on UI components, always use the `storybook` MCP tools:

- **CRITICAL: Never hallucinate component properties!** Before using ANY property on a Lit component, use the MCP tools to check if the property is documented for that component.
- `list-all-documentation` — get an index of all documented components and stories
- `get-documentation` — get detailed docs, props and example stories for a specific component
- `get-documentation-for-story` — get the full story source and associated docs
- `get-storybook-story-instructions` — fetch the latest instructions for creating or updating stories
- `preview-stories` — render story previews directly in the agent's chat interface
- `run-story-tests` — run component + interaction tests and return results (requires @storybook/addon-vitest)

> **Note:** The docs toolset (list-all-documentation, get-documentation) is currently React-only in Storybook's manifest generation. Since this project uses the web-components renderer, component documentation will be limited until Storybook adds manifest support for web components. The development toolset (preview-stories, get-storybook-story-instructions) works with all renderers.

To start Storybook: `pnpm -C apps/storybook dev`

## Code Style

- Use camelCase for variable and function names
- Use PascalCase for component names
- Use kebab-case for file names
- Use single quotes for strings
- Use semicolons at the end of statements
- Use 2 spaces for indentation
- Use trailing commas in objects and arrays
- Use parentheses around arrow function parameters
- Use template literals for string concatenation
- Use descriptive variable and function names
- Avoid using `any` type in TypeScript
- Use interfaces for defining types in TypeScript
- Use React hooks for state management and side effects
- Use functional components instead of class components
- Use PropTypes for type checking in React components
- Use JSDoc comments for documenting functions and components
- Use Storybook for developing and testing UI components in isolation
- Use MSW for mocking API requests in tests
- Use Next.js for Static Site Generation (SSG) to improve performance and SEO
- Follow the principles of DRY (Don't Repeat Yourself) and KISS (Keep It Simple, Stupid)

## Testing

- Write unit tests for all components and functions
- Write integration tests for critical user flows
- Write end-to-end tests for the entire application
- Aim for high test coverage, but prioritize meaningful tests over achieving 100% coverage
- Use descriptive test names that clearly indicate what is being tested
- Use Arrange-Act-Assert (AAA) pattern for structuring tests
- Mock external dependencies and API calls in tests to ensure isolation
- Use code coverage tools to identify untested code and improve test coverage
- Cover edge cases and error handling in tests

## Way of Working

- Plan work in small, manageable chunks
- Use a Test-Driven Development (TDD) approach to ensure code quality and maintainability
