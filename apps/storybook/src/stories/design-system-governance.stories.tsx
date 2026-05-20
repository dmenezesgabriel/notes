import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta = {
  title: 'Design System/Governance',
  parameters: {
    layout: 'fullscreen',
    backgrounds: { default: 'paper' },
    docs: {
      description: {
        component:
          'Contribution rules for the approved atomic system. Start here before promoting a new shared component, deprecating an export, or wiring route-local React/Lit behavior. Canonical references live in `docs/design-system-governance.md`, `docs/atomic-design-migration-matrix.md`, and ADRs `001` through `003`.',
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const frameStyle: React.CSSProperties = {
  background: 'var(--zine-paper, #f2edd7)',
  border: '3px solid var(--zine-ink, #0e0c07)',
  borderRight: '5px solid var(--zine-ink, #0e0c07)',
  borderBottom: '5px solid var(--zine-ink, #0e0c07)',
  boxShadow: 'var(--zine-shadow-lg, 6px 6px 0 #0e0c07)',
};

const chipStyle: React.CSSProperties = {
  display: 'inline-block',
  padding: '0.2rem 0.55rem',
  border: '2px solid var(--zine-ink, #0e0c07)',
  fontFamily: 'var(--font-mono, "Cutive Mono", monospace)',
  fontSize: 10,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
};

const sectionHeadingStyle: React.CSSProperties = {
  fontFamily: 'var(--font-display, "Bebas Neue", sans-serif)',
  fontSize: 24,
  letterSpacing: '0.05em',
  color: 'var(--zine-ink, #0e0c07)',
  margin: '0 0 0.9rem',
};

function Section({ children, title }: { children: React.ReactNode; title: string }) {
  return (
    <section style={{ ...frameStyle, padding: '1.4rem 1.5rem' }}>
      <h2 style={sectionHeadingStyle}>{title}</h2>
      {children}
    </section>
  );
}

function PathItem({ children }: { children: React.ReactNode }) {
  return (
    <li
      style={{
        fontFamily: 'var(--font-mono, "Cutive Mono", monospace)',
        fontSize: 12,
        lineHeight: 1.7,
        color: 'var(--zine-ink-faded, #2c2820)',
      }}
    >
      <code>{children}</code>
    </li>
  );
}

export const Overview: Story = {
  name: 'Governance overview',
  render: () => (
    <div
      style={{
        minHeight: '100vh',
        background: 'var(--ds-page, #ede5c8)',
        padding: '2rem 1.5rem 3rem',
      }}
    >
      <div style={{ maxWidth: 1080, margin: '0 auto', display: 'grid', gap: '1.5rem' }}>
        <section style={{ ...frameStyle, padding: '1.75rem 1.5rem' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: '0.9rem' }}>
            <span style={{ ...chipStyle, background: 'var(--zine-yellow, #f5c800)' }}>shared</span>
            <span style={{ ...chipStyle, background: 'var(--zine-green-lt, #a8d8a0)' }}>
              site-local
            </span>
            <span style={{ ...chipStyle, background: 'var(--zine-blue-lt, #4a80d4)' }}>
              adapter
            </span>
            <span style={{ ...chipStyle, background: 'var(--zine-paper-alt, #ede5c8)' }}>
              legacy / undecided
            </span>
          </div>
          <h1
            style={{
              fontFamily: 'var(--font-display, "Bebas Neue", sans-serif)',
              fontSize: 'clamp(34px, 5vw, 58px)',
              letterSpacing: '0.05em',
              color: 'var(--zine-ink, #0e0c07)',
              margin: '0 0 0.75rem',
              lineHeight: 1,
            }}
          >
            DESIGN SYSTEM GOVERNANCE
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-body, "Special Elite", serif)',
              fontSize: 15,
              lineHeight: 1.75,
              color: 'var(--zine-ink-faded, #2c2820)',
              margin: 0,
              maxWidth: 760,
            }}
          >
            Shared components live in <code>packages/components</code>. Page slices, Next.js route
            composition, and React/Lit bridging stay in <code>apps/site</code>. The matrix and ADRs
            decide promotion, deprecation, and the allowed token and adapter boundaries.
          </p>
        </section>

        <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(2, 1fr)' }}>
          <Section title="Canonical references">
            <ul style={{ margin: 0, paddingLeft: '1.1rem' }}>
              <PathItem>docs/design-system-governance.md</PathItem>
              <PathItem>docs/atomic-design-migration-matrix.md</PathItem>
              <PathItem>docs/adrs/001-atomic-component-promotion-boundary.md</PathItem>
              <PathItem>docs/adrs/002-design-token-source-of-truth.md</PathItem>
              <PathItem>docs/adrs/003-react-lit-interop-boundary.md</PathItem>
              <PathItem>CONTEXT.md</PathItem>
            </ul>
          </Section>

          <Section title="Promotion rules">
            <ol
              style={{
                margin: 0,
                paddingLeft: '1.15rem',
                fontFamily: 'var(--font-body, "Special Elite", serif)',
                color: 'var(--zine-ink-faded, #2c2820)',
                lineHeight: 1.75,
                fontSize: 15,
              }}
            >
              <li>Keep atoms, molecules, and proven reusable organisms/templates shared.</li>
              <li>Keep route-specific composition site-local until reuse is proven.</li>
              <li>
                Keep tokens canonical in <code>packages/components/src/styles/tokens.css</code>.
              </li>
              <li>
                Keep React/Lit adapters in <code>apps/site/app/lib/react-lit-adapter.ts</code>.
              </li>
            </ol>
          </Section>
        </div>

        <Section title="Explicit statuses and replacement paths">
          <div style={{ overflowX: 'auto' }}>
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse',
                fontFamily: 'var(--font-body, "Special Elite", serif)',
                fontSize: 14,
                color: 'var(--zine-ink-faded, #2c2820)',
              }}
            >
              <thead>
                <tr>
                  <th
                    style={{
                      borderBottom: '2px solid var(--zine-ink, #0e0c07)',
                      padding: '0.6rem',
                    }}
                  >
                    Artifact
                  </th>
                  <th
                    style={{
                      borderBottom: '2px solid var(--zine-ink, #0e0c07)',
                      padding: '0.6rem',
                    }}
                  >
                    Status
                  </th>
                  <th
                    style={{
                      borderBottom: '2px solid var(--zine-ink, #0e0c07)',
                      padding: '0.6rem',
                    }}
                  >
                    Replacement path
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    artifact: 'garden-banner',
                    status: 'undecided',
                    replacement:
                      'Keep marquee composition route-local until a second real route proves reuse.',
                  },
                  {
                    artifact: 'garden-sheet',
                    status: 'undecided',
                    replacement:
                      'Keep pinned-paper wrappers inside the route slice until reuse is proven.',
                  },
                  {
                    artifact: 'garden-tape',
                    status: 'undecided',
                    replacement:
                      'Use route-local decoration or plain copy until a reusable contract exists.',
                  },
                  {
                    artifact: 'my-heading',
                    status: 'legacy',
                    replacement:
                      'Use semantic page headings or shared template headings; do not add new usage.',
                  },
                ].map((row) => (
                  <tr key={row.artifact}>
                    <td
                      style={{
                        borderBottom: '1px solid rgba(14,12,7,0.15)',
                        padding: '0.7rem 0.6rem',
                      }}
                    >
                      <code>{row.artifact}</code>
                    </td>
                    <td
                      style={{
                        borderBottom: '1px solid rgba(14,12,7,0.15)',
                        padding: '0.7rem 0.6rem',
                      }}
                    >
                      {row.status}
                    </td>
                    <td
                      style={{
                        borderBottom: '1px solid rgba(14,12,7,0.15)',
                        padding: '0.7rem 0.6rem',
                      }}
                    >
                      {row.replacement}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>
      </div>
    </div>
  ),
};
