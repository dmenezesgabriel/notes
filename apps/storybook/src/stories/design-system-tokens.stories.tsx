import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta = {
  title: 'Design System/Tokens',
  parameters: {
    backgrounds: { default: 'corkboard' },
    docs: {
      description: {
        component:
          'Garden Design System — NEU-BRUTALISM × PUNK ZINE palette. ' +
          'Zine paper × Ink × Red × Yellow × Blue. ' +
          'All values are CSS custom properties (`--zine-*`) that cascade into Lit shadow DOMs automatically.',
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

/** Paint-swatch block matching the reference design */
const Swatch = ({ color, label, variable }: { color: string; label: string; variable: string }) => (
  <div
    style={{
      border: '3px solid #0e0c07',
      borderRight: '4px solid #0e0c07',
      borderBottom: '4px solid #0e0c07',
      display: 'inline-flex',
      flexDirection: 'column',
    }}
  >
    <div style={{ width: 52, height: 44, background: color }} />
    <div
      style={{
        fontFamily: "'Cutive Mono', monospace",
        fontSize: 9,
        padding: '3px 5px',
        background: '#f2edd7',
        color: '#0e0c07',
        borderTop: '2px solid #0e0c07',
        letterSpacing: '0.04em',
        lineHeight: 1.5,
      }}
    >
      {variable}
      <br />
      {label}
    </div>
  </div>
);

const TokenRow = ({ name, value }: { name: string; value: string }) => (
  <div
    style={{
      fontFamily: "'Cutive Mono', monospace",
      fontSize: 11,
      display: 'flex',
      justifyContent: 'space-between',
      padding: '4px 6px',
      border: '1px solid rgba(14, 12, 7, 0.15)',
      background: 'rgba(255,255,255,0.4)',
    }}
  >
    <span style={{ color: '#2c2820' }}>{name}</span>
    <span style={{ color: '#d42b2b', fontWeight: 'bold' }}>{value}</span>
  </div>
);

const SectionLabel = ({ children }: { children: string }) => (
  <div
    style={{
      fontFamily: "'Bebas Neue', sans-serif",
      fontSize: 22,
      color: '#0e0c07',
      letterSpacing: '0.08em',
      marginBottom: '1.25rem',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
    }}
  >
    <span style={{ color: '#d42b2b' }}>//</span>
    {children}
    <div style={{ flex: 1, height: 3, background: '#0e0c07', marginLeft: 8 }} />
  </div>
);

const Sheet = ({
  children,
  pinColor = '#d42b2b',
  pinBorder = '#8a0000',
}: {
  children: React.ReactNode;
  pinColor?: string;
  pinBorder?: string;
}) => (
  <div
    style={{
      background: '#f2edd7',
      border: '3px solid #0e0c07',
      borderRight: '5px solid #0e0c07',
      borderBottom: '5px solid #0e0c07',
      padding: '1.5rem',
      position: 'relative',
      marginTop: '2.5rem',
      boxShadow: '6px 6px 0 #0e0c07',
    }}
  >
    <div
      style={{
        position: 'absolute',
        top: -10,
        left: 24,
        width: 18,
        height: 18,
        background: pinColor,
        border: `2px solid ${pinBorder}`,
        borderRadius: '50%',
        boxShadow: '0 2px 4px rgba(0,0,0,0.4)',
      }}
    />
    {children}
  </div>
);

export const ColorTokens: Story = {
  name: 'Color tokens',
  render: () => (
    <div
      style={{
        padding: '2rem 1.5rem',
        background: '#2a2218',
        minHeight: '100vh',
        backgroundImage:
          'radial-gradient(circle at 20% 50%, rgba(90,70,30,0.3) 0%, transparent 60%)',
      }}
    >
      <Sheet pinColor="#d42b2b" pinBorder="#8a0000">
        <SectionLabel>COLOUR TOKENS</SectionLabel>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: '1rem' }}>
          <Swatch color="#d42b2b" label="#D42B2B" variable="--zine-red" />
          <Swatch color="#f5c800" label="#F5C800" variable="--zine-yellow" />
          <Swatch color="#1a3c8f" label="#1A3C8F" variable="--zine-blue" />
          <Swatch color="#1d6b2e" label="#1D6B2E" variable="--zine-green" />
          <Swatch color="#e85d1a" label="#E85D1A" variable="--zine-orange" />
          <Swatch color="#e8317a" label="#E8317A" variable="--zine-pink" />
          <Swatch color="#0e0c07" label="#0E0C07" variable="--zine-ink" />
          <Swatch color="#f2edd7" label="#F2EDD7" variable="--zine-paper" />
          <Swatch color="#ede5c8" label="#EDE5C8" variable="--zine-paper-alt" />
          <Swatch color="#fdf0a0" label="#FDF0A0" variable="--zine-yellow-lt" />
          <Swatch color="#4a80d4" label="#4A80D4" variable="--zine-blue-lt" />
          <Swatch color="#a8d8a0" label="#A8D8A0" variable="--zine-green-lt" />
          <Swatch color="#2c2820" label="#2C2820" variable="--zine-ink-faded" />
          <Swatch color="#6b6050" label="#6B6050" variable="--zine-muted" />
        </div>

        <div
          style={{
            height: 4,
            background:
              'repeating-linear-gradient(90deg,#0e0c07 0,#0e0c07 8px,transparent 8px,transparent 12px)',
            margin: '1rem 0',
            opacity: 0.4,
          }}
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 4,
          }}
        >
          <TokenRow name="--zine-shadow" value="4px 4px 0 #0E0C07" />
          <TokenRow name="--zine-shadow-lg" value="6px 6px 0 #0E0C07" />
          <TokenRow name="--zine-border" value="3px solid #0E0C07" />
          <TokenRow name="--zine-shadow-red" value="4px 4px 0 #D42B2B" />
          <TokenRow name="--font-display" value="Bebas Neue" />
          <TokenRow name="--font-body" value="Special Elite" />
          <TokenRow name="--font-marker" value="Permanent Marker" />
          <TokenRow name="--font-mono" value="Cutive Mono" />
          <TokenRow name="--font-stamp" value="Black Han Sans" />
          <TokenRow name="--radius-*" value="0 (no rounding)" />
        </div>
      </Sheet>
    </div>
  ),
};

export const TypographyScale: Story = {
  name: 'Typography scale',
  render: () => (
    <div
      style={{
        padding: '2rem 1.5rem',
        background: '#2a2218',
        minHeight: '100vh',
      }}
    >
      <Sheet pinColor="#a8d8a0" pinBorder="#1d6b2e">
        <div
          style={{
            position: 'absolute',
            top: -10,
            right: 80,
            background: 'rgba(245,200,0,0.75)',
            padding: '3px 18px',
            fontFamily: "'Cutive Mono', monospace",
            fontSize: 10,
            letterSpacing: '0.08em',
            color: '#0e0c07',
            transform: 'rotate(1.8deg)',
            border: '1px solid rgba(0,0,0,0.15)',
          }}
        >
          RANSOM NOTE SYSTEM
        </div>
        <SectionLabel>TYPOGRAPHY SCALE</SectionLabel>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {[
            {
              meta: 'rubber stamp / Black Han Sans',
              style: {
                fontFamily: "'Black Han Sans', sans-serif",
                fontSize: 32,
                color: '#d42b2b',
                letterSpacing: '0.06em',
                opacity: 0.85,
              },
              text: 'GARDEN.DEV',
            },
            {
              meta: 'display / Bebas Neue',
              style: {
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 42,
                color: '#0e0c07',
                letterSpacing: '0.04em',
              },
              text: 'The knowledge garden',
            },
            {
              meta: 'h1 / display 28px',
              style: {
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 28,
                color: '#0e0c07',
                letterSpacing: '0.03em',
              },
              text: 'Article title sits here',
            },
            {
              meta: 'h2 / marker 20px',
              style: {
                fontFamily: "'Permanent Marker', cursive",
                fontSize: 20,
                color: '#1a3c8f',
              },
              text: 'Section heading — handwritten',
            },
            {
              meta: 'body / typewriter 15px',
              style: {
                fontFamily: "'Special Elite', serif",
                fontSize: 15,
                color: '#2c2820',
                lineHeight: 1.7,
                maxWidth: 400,
              },
              text: 'Long-form prose at 15px / 1.7 — Special Elite gives the feel of typewritten notes, warm and intentional.',
            },
            {
              meta: 'mono / code 13px',
              style: {
                fontFamily: "'Cutive Mono', monospace",
                fontSize: 13,
                color: '#0e0c07',
                background: 'rgba(14,12,7,0.07)',
                padding: '3px 8px',
                borderLeft: '3px solid #0e0c07',
                display: 'inline-block',
              },
              text: "const garden = new Garden({ theme: 'zine' })",
            },
            {
              meta: 'caption / label',
              style: {
                fontFamily: "'Cutive Mono', monospace",
                fontSize: 11,
                color: '#6b6050',
                letterSpacing: '0.08em',
                textTransform: 'uppercase' as const,
              },
              text: 'tags · metadata · timestamps · xerox artifacts',
            },
          ].map(({ meta: metaLabel, style, text }) => (
            <div
              key={metaLabel}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 14,
                padding: '10px 0',
                borderBottom: '2px solid rgba(14,12,7,0.12)',
              }}
            >
              <span
                style={{
                  fontFamily: "'Cutive Mono', monospace",
                  fontSize: 10,
                  color: '#6b6050',
                  minWidth: 140,
                  flexShrink: 0,
                }}
              >
                {metaLabel}
              </span>
              <span style={style as React.CSSProperties}>{text}</span>
            </div>
          ))}
        </div>
      </Sheet>
    </div>
  ),
};

export const SpacingScale: Story = {
  name: 'Spacing & shadows',
  render: () => (
    <div
      style={{
        padding: '2rem 1.5rem',
        background: '#2a2218',
        minHeight: '100vh',
      }}
    >
      <Sheet pinColor="#4a80d4" pinBorder="#1a3c8f">
        <SectionLabel>SPACING & SHADOWS</SectionLabel>
        <div style={{ display: 'flex', gap: 48, flexWrap: 'wrap' }}>
          {/* Spacing */}
          <div>
            <div
              style={{
                fontFamily: "'Black Han Sans', sans-serif",
                fontSize: 12,
                letterSpacing: '0.08em',
                color: '#6b6050',
                marginBottom: 12,
              }}
            >
              SPACING SCALE
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {[
                { n: 1, px: 4 },
                { n: 2, px: 8 },
                { n: 3, px: 12 },
                { n: 4, px: 16 },
                { n: 5, px: 24 },
                { n: 6, px: 32 },
                { n: 7, px: 48 },
                { n: 8, px: 64 },
              ].map(({ n, px }) => (
                <div key={n} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div
                    style={{
                      height: 16,
                      width: px,
                      background: '#d42b2b',
                      minWidth: 4,
                      border: '1px solid #8a0000',
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "'Cutive Mono', monospace",
                      fontSize: 11,
                      color: '#6b6050',
                    }}
                  >
                    --space-{n} / {px}px
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Shadows */}
          <div>
            <div
              style={{
                fontFamily: "'Black Han Sans', sans-serif",
                fontSize: 12,
                letterSpacing: '0.08em',
                color: '#6b6050',
                marginBottom: 12,
              }}
            >
              FLAT OFFSET SHADOWS
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {[
                { label: '--shadow-sm', shadow: '2px 2px 0 #0e0c07' },
                { label: '--shadow-md / --zine-shadow', shadow: '4px 4px 0 #0e0c07' },
                { label: '--shadow-lg / --zine-shadow-lg', shadow: '6px 6px 0 #0e0c07' },
                { label: '--zine-shadow-red', shadow: '4px 4px 0 #d42b2b' },
                { label: '--zine-shadow-blue', shadow: '4px 4px 0 #1a3c8f' },
              ].map(({ label, shadow }) => (
                <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <div
                    style={{
                      width: 48,
                      height: 28,
                      background: '#f2edd7',
                      border: '3px solid #0e0c07',
                      boxShadow: shadow,
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "'Cutive Mono', monospace",
                      fontSize: 10,
                      color: '#6b6050',
                    }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Border radius — always 0 */}
          <div>
            <div
              style={{
                fontFamily: "'Black Han Sans', sans-serif",
                fontSize: 12,
                letterSpacing: '0.08em',
                color: '#6b6050',
                marginBottom: 12,
              }}
            >
              BORDER RADIUS (ALWAYS 0)
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {['--radius-sm', '--radius-md', '--radius-lg', '--radius-pill'].map((label) => (
                <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div
                    style={{
                      width: 48,
                      height: 24,
                      background: '#d42b2b',
                      border: '2px solid #0e0c07',
                      borderRadius: 0,
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "'Cutive Mono', monospace",
                      fontSize: 10,
                      color: '#6b6050',
                    }}
                  >
                    {label} = 0
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Sheet>
    </div>
  ),
};
