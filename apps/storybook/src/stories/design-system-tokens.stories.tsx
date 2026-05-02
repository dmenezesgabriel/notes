import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta = {
  title: 'Design System/Tokens',
  parameters: {
    docs: {
      description: {
        component:
          'Garden Design System — warm "Cozy Editorial" palette. Terracotta × Sage × Parchment. All values are CSS custom properties that cascade into Lit shadow DOMs.',
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const Swatch = ({ color, label, variable }: { color: string; label: string; variable: string }) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
    <div
      style={{
        width: 48,
        height: 48,
        borderRadius: 8,
        background: color,
        border: '1px solid rgba(28,26,22,0.15)',
      }}
    />
    <span style={{ fontSize: 11, color: 'var(--ds-muted)', textAlign: 'center' }}>{label}</span>
    <span style={{ fontSize: 10, fontFamily: 'monospace', color: 'var(--ds-accent)' }}>
      {variable}
    </span>
  </div>
);

export const ColorTokens: Story = {
  name: 'Color tokens',
  render: () => (
    <div style={{ padding: 24, background: 'var(--ds-page)' }}>
      <p
        style={{
          fontSize: 11,
          letterSpacing: '0.07em',
          textTransform: 'uppercase',
          color: 'var(--ds-muted)',
          marginBottom: 16,
        }}
      >
        Palette
      </p>
      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
        <Swatch color="var(--ds-accent)" label="accent" variable="--ds-accent" />
        <Swatch color="var(--ds-accent-light)" label="accent light" variable="--ds-accent-light" />
        <Swatch color="var(--ds-accent-dark)" label="accent dark" variable="--ds-accent-dark" />
        <Swatch color="var(--ds-sage)" label="sage" variable="--ds-sage" />
        <Swatch color="var(--ds-sage-light)" label="sage light" variable="--ds-sage-light" />
        <Swatch color="var(--ds-sand)" label="sand" variable="--ds-sand" />
        <Swatch color="var(--ds-ink)" label="ink" variable="--ds-ink" />
        <Swatch color="var(--ds-muted)" label="muted" variable="--ds-muted" />
        <Swatch color="var(--ds-surface)" label="surface" variable="--ds-surface" />
        <Swatch color="var(--ds-tag-bg)" label="tag bg" variable="--ds-tag-bg" />
        <Swatch color="var(--ds-code-bg)" label="code bg" variable="--ds-code-bg" />
      </div>
    </div>
  ),
};

export const TypographyScale: Story = {
  name: 'Typography scale',
  render: () => (
    <div
      style={{
        padding: 24,
        background: 'var(--ds-surface)',
        borderRadius: 12,
        border: '1px solid var(--ds-border)',
        maxWidth: 600,
      }}
    >
      {[
        {
          label: 'display',
          style: {
            fontSize: 28,
            fontWeight: 500,
            fontFamily: 'var(--font-display)',
            letterSpacing: '-0.02em',
          },
          text: 'The knowledge garden',
        },
        {
          label: 'h1',
          style: {
            fontSize: 20,
            fontWeight: 500,
            fontFamily: 'var(--font-body)',
            letterSpacing: '-0.015em',
          },
          text: 'Article title sits here',
        },
        {
          label: 'h2',
          style: { fontSize: 16, fontWeight: 500, fontFamily: 'var(--font-body)' },
          text: 'Section heading',
        },
        {
          label: 'body',
          style: {
            fontSize: 15,
            lineHeight: 1.75,
            fontFamily: 'var(--font-body)',
            color: 'var(--ds-muted)',
          },
          text: 'Long-form prose at 15px / 1.75 — comfortable for extended reading sessions on both desktop and mobile screens.',
        },
        {
          label: 'caption',
          style: { fontSize: 12, color: 'var(--ds-muted)', fontFamily: 'var(--font-ui)' },
          text: 'Tags · metadata · timestamps · labels',
        },
        {
          label: 'mono',
          style: {
            fontSize: 13,
            fontFamily: 'var(--font-mono)',
            background: 'var(--ds-code-bg)',
            color: 'var(--ds-code-text)',
            padding: '2px 8px',
            borderRadius: 4,
            display: 'inline-block',
          },
          text: 'const garden = new Garden()',
        },
      ].map(({ label, style, text }) => (
        <div
          key={label}
          style={{
            display: 'flex',
            alignItems: 'baseline',
            gap: 16,
            padding: '10px 0',
            borderBottom: '1px solid var(--ds-border)',
          }}
        >
          <span style={{ fontSize: 11, color: 'var(--ds-muted)', minWidth: 64 }}>{label}</span>
          <span style={style as React.CSSProperties}>{text}</span>
        </div>
      ))}
    </div>
  ),
};

export const SpacingScale: Story = {
  name: 'Spacing & radius',
  render: () => (
    <div style={{ padding: 24, background: 'var(--ds-page)', display: 'flex', gap: 32 }}>
      <div>
        <p
          style={{
            fontSize: 11,
            letterSpacing: '0.07em',
            textTransform: 'uppercase',
            color: 'var(--ds-muted)',
            marginBottom: 12,
          }}
        >
          Spacing
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
            <div key={n} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div
                style={{
                  height: 16,
                  width: `var(--space-${n})`,
                  background: 'var(--ds-accent)',
                  borderRadius: 2,
                  minWidth: 4,
                }}
              />
              <span style={{ fontSize: 11, fontFamily: 'monospace', color: 'var(--ds-muted)' }}>
                --space-{n}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <p
          style={{
            fontSize: 11,
            letterSpacing: '0.07em',
            textTransform: 'uppercase',
            color: 'var(--ds-muted)',
            marginBottom: 12,
          }}
        >
          Border radius
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {[
            { label: '--radius-sm', value: 'var(--radius-sm)' },
            { label: '--radius-md', value: 'var(--radius-md)' },
            { label: '--radius-lg', value: 'var(--radius-lg)' },
            { label: '--radius-pill', value: 'var(--radius-pill)' },
          ].map(({ label, value }) => (
            <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div
                style={{
                  width: 48,
                  height: 24,
                  background: 'var(--ds-accent)',
                  borderRadius: value,
                }}
              />
              <span style={{ fontSize: 11, fontFamily: 'monospace', color: 'var(--ds-muted)' }}>
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};
