import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta = {
  title: 'Design System/Overview',
  parameters: {
    layout: 'fullscreen',
    backgrounds: { default: 'paper' },
    docs: {
      description: {
        component:
          'Reviewer-facing map of the current atomic system. This overview mirrors the approved taxonomy, the live route proofs, and the explicit legacy/undecided statuses described in `docs/design-system-governance.md` and `docs/atomic-design-migration-matrix.md`.',
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const navLinks = [
  { label: 'notes', href: '/notes/', active: true },
  { label: 'books', href: '/notes/books/' },
  { label: 'about', href: '/notes/about/' },
];

const tocItems = [
  { id: 'intro', label: 'Introduction', active: true },
  { id: 'shared', label: 'Shared system', depth: 2 },
  { id: 'local', label: 'Site-local slices', depth: 2 },
  { id: 'status-board', label: 'Status board' },
];

const boardStyle: React.CSSProperties = {
  background: 'var(--zine-paper, #f2edd7)',
  border: '3px solid var(--zine-ink, #0e0c07)',
  borderRight: '5px solid var(--zine-ink, #0e0c07)',
  borderBottom: '5px solid var(--zine-ink, #0e0c07)',
  boxShadow: 'var(--zine-shadow-lg, 6px 6px 0 #0e0c07)',
};

function Board({ children }: { children: React.ReactNode }) {
  return <section style={{ ...boardStyle, padding: '1.4rem 1.5rem' }}>{children}</section>;
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2
      style={{
        fontFamily: 'var(--font-display, "Bebas Neue", sans-serif)',
        fontSize: 24,
        letterSpacing: '0.05em',
        color: 'var(--zine-ink, #0e0c07)',
        margin: '0 0 0.8rem',
      }}
    >
      {children}
    </h2>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        fontFamily: 'var(--font-mono, "Cutive Mono", monospace)',
        fontSize: 10,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: 'var(--zine-red, #d42b2b)',
        marginBottom: '0.55rem',
      }}
    >
      {children}
    </div>
  );
}

export const CurrentSystem: Story = {
  name: 'Current system',
  render: () => (
    <div
      style={{
        minHeight: '100vh',
        background: 'var(--ds-page, #ede5c8)',
        paddingBottom: '3rem',
      }}
    >
      <garden-nav brand="garden.dev" links={navLinks} homeHref="/notes/" />

      <section
        style={{
          ...boardStyle,
          borderTop: 'none',
          maxWidth: 1100,
          margin: '0 auto',
          padding: '2rem 1.5rem 2.5rem',
        }}
      >
        <Label>atomic design · live route proofs · governance</Label>
        <h1
          style={{
            fontFamily: 'var(--font-display, "Bebas Neue", sans-serif)',
            fontSize: 'clamp(38px, 6vw, 68px)',
            letterSpacing: '0.05em',
            color: 'var(--zine-ink, #0e0c07)',
            lineHeight: 1,
            margin: '0 0 0.8rem',
          }}
        >
          THE CURRENT DESIGN SYSTEM
        </h1>
        <p
          style={{
            fontFamily: 'var(--font-body, "Special Elite", serif)',
            fontSize: 15,
            lineHeight: 1.75,
            color: 'var(--zine-ink-faded, #2c2820)',
            maxWidth: 700,
            margin: '0 0 1.25rem',
          }}
        >
          Shared UI lives in <code>packages/components</code>. Route-specific page slices stay in
          <code> apps/site</code>. Storybook mirrors the approved atomic taxonomy and calls out the
          remaining <code>undecided</code> and <code>legacy</code> exports directly.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: '1.5rem' }}>
          <garden-tag variant="accent">atoms</garden-tag>
          <garden-tag variant="blue">molecules</garden-tag>
          <garden-tag variant="green">organisms</garden-tag>
          <garden-tag variant="yellow">templates</garden-tag>
          <garden-tag>site-local pages</garden-tag>
        </div>
        <garden-search placeholder="Search shared contracts…" kbd="⌘K" style={{ maxWidth: 520 }} />
      </section>

      <div
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          padding: '2rem 1.5rem 0',
          display: 'grid',
          gap: '1.5rem',
        }}
      >
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '1.5rem' }}>
          <Board>
            <SectionHeading>Shared taxonomy</SectionHeading>
            <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(2, 1fr)' }}>
              <div>
                <Label>Atoms</Label>
                <p style={{ fontFamily: 'var(--font-body, "Special Elite", serif)', margin: 0 }}>
                  <code>garden-tag</code>, <code>garden-badge</code>, <code>garden-button</code>,
                  <code> garden-divider</code>, <code>garden-highlight</code>
                </p>
              </div>
              <div>
                <Label>Molecules</Label>
                <p style={{ fontFamily: 'var(--font-body, "Special Elite", serif)', margin: 0 }}>
                  <code>garden-breadcrumb</code>, <code>garden-search</code>,
                  <code> garden-blockquote</code>, <code>garden-callout</code>,
                  <code> garden-mermaid</code>
                </p>
              </div>
              <div>
                <Label>Organisms</Label>
                <p style={{ fontFamily: 'var(--font-body, "Special Elite", serif)', margin: 0 }}>
                  <code>garden-card</code>, <code>garden-nav</code>, <code>garden-toc</code>
                </p>
              </div>
              <div>
                <Label>Templates</Label>
                <p style={{ fontFamily: 'var(--font-body, "Special Elite", serif)', margin: 0 }}>
                  <code>garden-article</code>
                </p>
              </div>
            </div>
          </Board>

          <Board>
            <SectionHeading>Status board</SectionHeading>
            <ul
              style={{
                margin: 0,
                paddingLeft: '1.1rem',
                fontFamily: 'var(--font-body, "Special Elite", serif)',
                lineHeight: 1.8,
                color: 'var(--zine-ink-faded, #2c2820)',
              }}
            >
              <li>
                <strong>Undecided:</strong> <code>garden-banner</code>, <code>garden-sheet</code>,
                <code> garden-tape</code>
              </li>
              <li>
                <strong>Legacy:</strong> <code>my-heading</code>
              </li>
              <li>
                <strong>Canonical tokens:</strong>{' '}
                <code>packages/components/src/styles/tokens.css</code>
              </li>
              <li>
                <strong>React/Lit boundary:</strong>{' '}
                <code>apps/site/app/lib/react-lit-adapter.ts</code>
              </li>
            </ul>
          </Board>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.25fr 0.75fr', gap: '1.5rem' }}>
          <Board>
            <SectionHeading>Live route proofs</SectionHeading>
            <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: '1fr 1fr' }}>
              <div>
                <Label>Home discovery slice</Label>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                    gap: 12,
                  }}
                >
                  <garden-card
                    headline="A Philosophy of Software Design"
                    excerpt="Home discovery validates the shared card contract with real note content."
                    href="/notes/books/a-philosophy-of-software-design/"
                  />
                  <garden-card
                    headline="Lit elements vs React"
                    excerpt="Search and result states stay route-local while the card stays shared."
                    href="/notes/swe/lit-elements-vs-react/"
                  />
                </div>
              </div>

              <div>
                <Label>Note page slice</Label>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 180px',
                    gap: 12,
                    alignItems: 'start',
                  }}
                >
                  <div
                    style={{
                      background: 'var(--zine-paper, #f2edd7)',
                      border: '3px solid var(--zine-ink, #0e0c07)',
                      padding: '1rem',
                    }}
                  >
                    <garden-breadcrumb
                      items={[
                        { label: 'home', href: '/notes/' },
                        { label: 'books', href: '/notes/books/' },
                        { label: 'A Philosophy of Software Design' },
                      ]}
                    />
                    <p
                      style={{
                        fontFamily: 'var(--font-body, "Special Elite", serif)',
                        color: 'var(--zine-ink-faded, #2c2820)',
                        lineHeight: 1.7,
                        margin: '0.9rem 0 0',
                      }}
                    >
                      Breadcrumb and TOC stay shared while the route-level note composition remains
                      site-local.
                    </p>
                  </div>
                  <garden-toc heading="On this page" items={tocItems} />
                </div>
              </div>
            </div>
          </Board>

          <Board>
            <SectionHeading>Reference files</SectionHeading>
            <ul
              style={{
                margin: 0,
                paddingLeft: '1.1rem',
                fontFamily: 'var(--font-mono, "Cutive Mono", monospace)',
                fontSize: 12,
                lineHeight: 1.8,
                color: 'var(--zine-ink-faded, #2c2820)',
              }}
            >
              <li>
                <code>docs/design-system-governance.md</code>
              </li>
              <li>
                <code>docs/atomic-design-migration-matrix.md</code>
              </li>
              <li>
                <code>CONTEXT.md</code>
              </li>
              <li>
                <code>docs/adrs/001-atomic-component-promotion-boundary.md</code>
              </li>
              <li>
                <code>docs/adrs/002-design-token-source-of-truth.md</code>
              </li>
              <li>
                <code>docs/adrs/003-react-lit-interop-boundary.md</code>
              </li>
            </ul>
          </Board>
        </div>
      </div>
    </div>
  ),
};
