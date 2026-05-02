import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta = {
  title: 'Design System/Kitchen Sink',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Full design system showcase — all Garden components assembled into a realistic digital garden page.',
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const navLinks = [
  { label: 'notes', href: '/notes', active: true },
  { label: 'wiki', href: '/wiki' },
  { label: 'projects', href: '/projects' },
  { label: 'about', href: '/about' },
];

const tocItems = [
  { id: 'intro', label: 'Introduction', active: true },
  { id: 'capture', label: 'The capture habit', depth: 2 },
  { id: 'organisation', label: 'Organisation', depth: 2 },
  { id: 'retrieval', label: 'Retrieval', depth: 2 },
  { id: 'see-also', label: 'See also' },
];

export const FullPage: Story = {
  name: 'Full page',
  render: () => (
    <div style={{ minHeight: '100vh', background: 'var(--ds-page)' }}>
      {/* Nav */}
      <garden-nav brand="garden.dev" links={navLinks} />

      {/* Hero */}
      <div
        style={{
          background: 'var(--ds-surface)',
          borderBottom: '1px solid var(--ds-border)',
          padding: '2.5rem 1.25rem 1.5rem',
        }}
      >
        <garden-breadcrumb
          items={[{ label: 'home', href: '/' }, { label: 'design system' }]}
          style={{ marginBottom: 12 }}
        />
        <garden-badge style={{ marginBottom: 8, display: 'block' }}>
          design system · v0.1
        </garden-badge>
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 28,
            fontWeight: 500,
            letterSpacing: '-0.02em',
            color: 'var(--ds-ink)',
            margin: '0 0 0.75rem',
            lineHeight: 1.2,
          }}
        >
          Cozy minimal — component library
        </h1>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 15,
            color: 'var(--ds-muted)',
            maxWidth: 480,
            lineHeight: 1.6,
            margin: '0 0 1.25rem',
          }}
        >
          A warm, readable design language for long-form knowledge sites. Built for Lit + Next.js,
          optimised for content and focus.
        </p>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          <garden-tag variant="accent">lit elements</garden-tag>
          <garden-tag variant="sage">next.js ssg</garden-tag>
          <garden-tag>storybook</garden-tag>
          <garden-tag>responsive</garden-tag>
          <garden-tag>light / dark</garden-tag>
        </div>
      </div>

      <div style={{ padding: '1.75rem 1.25rem 0', maxWidth: 960, margin: '0 auto' }}>
        {/* Search */}
        <div style={{ marginBottom: '1.75rem' }}>
          <p
            style={{
              fontSize: 11,
              letterSpacing: '0.07em',
              textTransform: 'uppercase',
              color: 'var(--ds-muted)',
              marginBottom: 12,
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
            Search
            <span
              style={{ flex: 1, height: 1, background: 'var(--ds-border)', display: 'block' }}
            />
          </p>
          <garden-search placeholder="Search notes, wiki, projects…" kbd="⌘K" />
        </div>

        {/* Buttons */}
        <div style={{ marginBottom: '1.75rem' }}>
          <p
            style={{
              fontSize: 11,
              letterSpacing: '0.07em',
              textTransform: 'uppercase',
              color: 'var(--ds-muted)',
              marginBottom: 12,
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
            Buttons
            <span style={{ flex: 1, height: 1, background: 'var(--ds-border)' }} />
          </p>
          <div
            style={{
              background: 'var(--ds-surface)',
              border: '1px solid var(--ds-border)',
              borderRadius: 12,
              padding: 16,
              display: 'flex',
              gap: 8,
              flexWrap: 'wrap',
              alignItems: 'center',
            }}
          >
            <garden-button variant="primary">Publish note</garden-button>
            <garden-button>Save draft</garden-button>
            <garden-button variant="ghost">Cancel</garden-button>
          </div>
        </div>

        {/* Note cards */}
        <div style={{ marginBottom: '1.75rem' }}>
          <p
            style={{
              fontSize: 11,
              letterSpacing: '0.07em',
              textTransform: 'uppercase',
              color: 'var(--ds-muted)',
              marginBottom: 12,
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
            Note cards
            <span style={{ flex: 1, height: 1, background: 'var(--ds-border)' }} />
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: 12,
            }}
          >
            <garden-card
              variant="featured"
              headline="On building a second brain"
              meta="3 days ago · 8 min read"
              excerpt="The goal isn't to remember everything — it's to think better by offloading storage to a trusted system."
              href="/notes/second-brain"
            >
              <garden-tag slot="footer" variant="accent">
                pkm
              </garden-tag>
              <garden-tag slot="footer">zettelkasten</garden-tag>
            </garden-card>
            <garden-card
              headline="Lit elements vs React: a pragmatic view"
              meta="1 week ago · 5 min read"
              excerpt="Web components shine when the goal is portability across stacks, not developer ergonomics first."
              href="/notes/lit-vs-react"
            >
              <garden-tag slot="footer" variant="sage">
                frontend
              </garden-tag>
              <garden-tag slot="footer">lit</garden-tag>
            </garden-card>
          </div>
        </div>

        {/* Article layout specimen */}
        <div style={{ marginBottom: '1.75rem' }}>
          <p
            style={{
              fontSize: 11,
              letterSpacing: '0.07em',
              textTransform: 'uppercase',
              color: 'var(--ds-muted)',
              marginBottom: 12,
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
            Article layout specimen
            <span style={{ flex: 1, height: 1, background: 'var(--ds-border)' }} />
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 180px',
              gap: 16,
              alignItems: 'start',
            }}
          >
            <div
              style={{
                background: 'var(--ds-surface)',
                border: '1px solid var(--ds-border)',
                borderRadius: 12,
                padding: '1.5rem',
              }}
            >
              <garden-breadcrumb
                items={[
                  { label: 'notes', href: '/notes' },
                  { label: 'pkm', href: '/notes/pkm' },
                  { label: 'second brain' },
                ]}
                style={{ marginBottom: 8 }}
              />
              <h2
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 20,
                  fontWeight: 500,
                  letterSpacing: '-0.015em',
                  color: 'var(--ds-ink)',
                  margin: '0 0 0.4rem',
                }}
              >
                On building a second brain
              </h2>
              <div
                style={{
                  fontSize: 12,
                  color: 'var(--ds-muted)',
                  marginBottom: '1rem',
                  display: 'flex',
                  gap: 10,
                  fontFamily: 'var(--font-ui)',
                }}
              >
                <span>May 2026</span>
                <span>·</span>
                <span>8 min read</span>
                <span>·</span>
                <span style={{ color: 'var(--ds-sage)' }}>pkm</span>
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 14,
                  color: 'var(--ds-muted)',
                  lineHeight: 1.75,
                  margin: '0 0 0.75rem',
                }}
              >
                The goal isn't to remember everything — it's to think better by offloading memory to
                a trusted external system.
              </p>
              <blockquote
                style={{
                  borderLeft: '3px solid var(--ds-border-strong)',
                  padding: '0.4rem 0 0.4rem 1rem',
                  color: 'var(--ds-muted)',
                  fontFamily: 'var(--font-body)',
                  fontSize: 14,
                  fontStyle: 'italic',
                  margin: '0.75rem 0',
                }}
              >
                "We are what we repeatedly do. Excellence, then, is not an act, but a habit." —
                Aristotle
              </blockquote>
              <garden-callout heading="Tip" style={{ marginBottom: 10 }}>
                Start with a weekly review — fifteen minutes every Sunday.
              </garden-callout>
              <garden-callout variant="tip" heading="Related">
                Zettelkasten, evergreen notes, PARA method, progressive summarisation.
              </garden-callout>
            </div>
            <garden-toc items={tocItems} />
          </div>
        </div>

        {/* Wiki cards */}
        <div style={{ marginBottom: '2rem', paddingBottom: '2rem' }}>
          <p
            style={{
              fontSize: 11,
              letterSpacing: '0.07em',
              textTransform: 'uppercase',
              color: 'var(--ds-muted)',
              marginBottom: 12,
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
            Wiki article cards
            <span style={{ flex: 1, height: 1, background: 'var(--ds-border)' }} />
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 12,
            }}
          >
            <garden-card
              variant="wiki"
              headline="Zettelkasten"
              meta="wiki · knowledge management"
              excerpt="A slip-box method for networked thinking developed by Niklas Luhmann."
              href="/wiki/zettelkasten"
            />
            <garden-card
              variant="wiki"
              headline="PARA method"
              meta="wiki · organisation"
              excerpt="Projects, Areas, Resources, Archive — Tiago Forte's actionable structure."
              href="/wiki/para"
            />
            <garden-card
              variant="wiki"
              headline="Evergreen notes"
              meta="wiki · writing"
              excerpt="Notes written to accumulate insight over time, not to record information once."
              href="/wiki/evergreen"
            />
          </div>
        </div>
      </div>
    </div>
  ),
};
