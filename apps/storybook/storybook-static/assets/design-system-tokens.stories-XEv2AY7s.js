import { j as e } from './iframe-BMk1oW9O.js';
import './preload-helper-C1FmrZbK.js';
var s, c, p, b, m, v, x, g, f;
const w = {
    title: 'Design System/Tokens',
    parameters: {
      backgrounds: { default: 'paper' },
      docs: {
        description: {
          component:
            'Garden Design System — NEU-BRUTALISM × PUNK ZINE palette. All values are CSS custom properties (`--zine-*`, `--ds-*`) sourced from `packages/components/src/styles/tokens.css` and cascade into Lit shadow DOMs automatically. Use the theme toggle (☀/☽) or the Storybook Themes addon to preview dark mode.',
        },
      },
    },
  },
  a = ({ color: r, label: i, variable: n, dark: z = !1 }) =>
    e.jsxs('div', {
      style: {
        border: '3px solid var(--zine-ink, #0e0c07)',
        borderRight: '4px solid var(--zine-ink, #0e0c07)',
        borderBottom: '4px solid var(--zine-ink, #0e0c07)',
        display: 'inline-flex',
        flexDirection: 'column',
      },
      children: [
        e.jsx('div', { style: { width: 52, height: 44, background: r } }),
        e.jsxs('div', {
          style: {
            fontFamily: "'Cutive Mono', monospace",
            fontSize: 9,
            padding: '3px 5px',
            background: z ? '#0e0c07' : 'var(--zine-paper, #f2edd7)',
            color: z ? '#f2edd7' : 'var(--zine-ink, #0e0c07)',
            borderTop: '2px solid var(--zine-ink, #0e0c07)',
            letterSpacing: '0.04em',
            lineHeight: 1.5,
          },
          children: [n, e.jsx('br', {}), i],
        }),
      ],
    }),
  l = ({ name: r, value: i }) =>
    e.jsxs('div', {
      style: {
        fontFamily: "'Cutive Mono', monospace",
        fontSize: 11,
        display: 'flex',
        justifyContent: 'space-between',
        padding: '4px 6px',
        border: '1px solid var(--ds-border, rgba(14, 12, 7, 0.15))',
        background: 'var(--ds-toggle-bg, rgba(255,255,255,0.25))',
      },
      children: [
        e.jsx('span', { style: { color: 'var(--zine-ink-faded, #2c2820)' }, children: r }),
        e.jsx('span', {
          style: { color: 'var(--zine-red, #d42b2b)', fontWeight: 'bold' },
          children: i,
        }),
      ],
    }),
  h = ({ children: r }) =>
    e.jsxs('div', {
      style: {
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: 22,
        color: 'var(--zine-ink, #0e0c07)',
        letterSpacing: '0.08em',
        marginBottom: '1.25rem',
        display: 'flex',
        alignItems: 'center',
        gap: 10,
      },
      children: [
        e.jsx('span', { style: { color: 'var(--zine-red, #d42b2b)' }, children: '//' }),
        r,
        e.jsx('div', {
          style: { flex: 1, height: 3, background: 'var(--zine-ink, #0e0c07)', marginLeft: 8 },
        }),
      ],
    }),
  y = ({
    children: r,
    pinColor: i = 'var(--zine-red, #d42b2b)',
    pinBorder: n = 'var(--zine-red-dark, #8a0000)',
  }) =>
    e.jsxs('div', {
      style: {
        background: 'var(--zine-paper, #f2edd7)',
        border: 'var(--zine-border, 3px solid #0e0c07)',
        borderRight: '5px solid var(--zine-ink, #0e0c07)',
        borderBottom: '5px solid var(--zine-ink, #0e0c07)',
        padding: '1.5rem',
        position: 'relative',
        marginTop: '2.5rem',
        boxShadow: 'var(--zine-shadow-lg, 6px 6px 0 #0e0c07)',
      },
      children: [
        e.jsx('div', {
          style: {
            position: 'absolute',
            top: -10,
            left: 24,
            width: 18,
            height: 18,
            background: i,
            border: `2px solid ${n}`,
            borderRadius: '50%',
            boxShadow: '0 2px 4px rgba(0,0,0,0.4)',
          },
        }),
        r,
      ],
    }),
  S = ({ children: r }) =>
    e.jsx('div', {
      style: { padding: '2rem 1.5rem', background: 'var(--ds-page, #ede5c8)', minHeight: '100vh' },
      children: r,
    }),
  o = {
    name: 'Color tokens',
    render: () =>
      e.jsx(S, {
        children: e.jsxs(y, {
          children: [
            e.jsx(h, { children: 'LIGHT MODE PALETTE' }),
            e.jsx('div', {
              style: {
                fontFamily: "'Black Han Sans', sans-serif",
                fontSize: 11,
                letterSpacing: '0.08em',
                color: 'var(--zine-muted, #6b6050)',
                marginBottom: 12,
              },
              children: 'ZINE BASE COLOURS (light)',
            }),
            e.jsxs('div', {
              style: { display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: '1.5rem' },
              children: [
                e.jsx(a, { color: '#d42b2b', label: '#D42B2B', variable: '--zine-red' }),
                e.jsx(a, { color: '#f5c800', label: '#F5C800', variable: '--zine-yellow' }),
                e.jsx(a, { color: '#1a3c8f', label: '#1A3C8F', variable: '--zine-blue' }),
                e.jsx(a, { color: '#1d6b2e', label: '#1D6B2E', variable: '--zine-green' }),
                e.jsx(a, { color: '#e85d1a', label: '#E85D1A', variable: '--zine-orange' }),
                e.jsx(a, { color: '#e8317a', label: '#E8317A', variable: '--zine-pink' }),
                e.jsx(a, { color: '#0e0c07', label: '#0E0C07', variable: '--zine-ink' }),
                e.jsx(a, { color: '#f2edd7', label: '#F2EDD7', variable: '--zine-paper' }),
                e.jsx(a, {
                  color: '#ede5c8',
                  label: '#EDE5C8',
                  variable: '--zine-paper-alt / --ds-page (light)',
                }),
                e.jsx(a, { color: '#fdf0a0', label: '#FDF0A0', variable: '--zine-yellow-lt' }),
                e.jsx(a, { color: '#4a80d4', label: '#4A80D4', variable: '--zine-blue-lt' }),
                e.jsx(a, { color: '#a8d8a0', label: '#A8D8A0', variable: '--zine-green-lt' }),
                e.jsx(a, { color: '#2c2820', label: '#2C2820', variable: '--zine-ink-faded' }),
                e.jsx(a, { color: '#6b6050', label: '#6B6050', variable: '--zine-muted' }),
              ],
            }),
            e.jsx('div', {
              style: {
                fontFamily: "'Black Han Sans', sans-serif",
                fontSize: 11,
                letterSpacing: '0.08em',
                color: 'var(--zine-muted, #6b6050)',
                marginBottom: 12,
              },
              children: 'CATPPUCCIN MOCHA (dark mode overrides)',
            }),
            e.jsxs('div', {
              style: { display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: '1.5rem' },
              children: [
                e.jsx(a, {
                  color: '#f38ba8',
                  label: '#F38BA8',
                  variable: '--zine-red (dark)',
                  dark: !0,
                }),
                e.jsx(a, {
                  color: '#f9e2af',
                  label: '#F9E2AF',
                  variable: '--zine-yellow (dark)',
                  dark: !0,
                }),
                e.jsx(a, {
                  color: '#89b4fa',
                  label: '#89B4FA',
                  variable: '--zine-blue (dark)',
                  dark: !0,
                }),
                e.jsx(a, {
                  color: '#a6e3a1',
                  label: '#A6E3A1',
                  variable: '--zine-green (dark)',
                  dark: !0,
                }),
                e.jsx(a, {
                  color: '#fab387',
                  label: '#FAB387',
                  variable: '--zine-orange (dark)',
                  dark: !0,
                }),
                e.jsx(a, {
                  color: '#f5c2e7',
                  label: '#F5C2E7',
                  variable: '--zine-pink (dark)',
                  dark: !0,
                }),
                e.jsx(a, {
                  color: '#cdd6f4',
                  label: '#CDD6F4',
                  variable: '--zine-ink (dark)',
                  dark: !0,
                }),
                e.jsx(a, {
                  color: '#1e1e2e',
                  label: '#1E1E2E',
                  variable: '--zine-paper (dark)',
                  dark: !0,
                }),
                e.jsx(a, {
                  color: '#181825',
                  label: '#181825',
                  variable: '--zine-paper-alt / breadcrumb-bg (dark)',
                  dark: !0,
                }),
                e.jsx(a, {
                  color: '#11111b',
                  label: '#11111B',
                  variable: '--ds-page (dark)',
                  dark: !0,
                }),
                e.jsx(a, {
                  color: '#313244',
                  label: '#313244',
                  variable: '--zine-aged / nav-bg (dark)',
                  dark: !0,
                }),
                e.jsx(a, {
                  color: '#bac2de',
                  label: '#BAC2DE',
                  variable: '--zine-ink-faded (dark)',
                  dark: !0,
                }),
                e.jsx(a, {
                  color: '#a6adc8',
                  label: '#A6ADC8',
                  variable: '--zine-muted (dark)',
                  dark: !0,
                }),
              ],
            }),
            e.jsx('div', {
              style: {
                height: 4,
                background:
                  'repeating-linear-gradient(90deg, var(--zine-ink,#0e0c07) 0, var(--zine-ink,#0e0c07) 8px, transparent 8px, transparent 12px)',
                margin: '1rem 0',
                opacity: 0.4,
              },
            }),
            e.jsxs('div', {
              style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4 },
              children: [
                e.jsx(l, { name: '--zine-shadow', value: '4px 4px 0 ink / rgba(0,0,0,.9) dark' }),
                e.jsx(l, {
                  name: '--zine-shadow-lg',
                  value: '6px 6px 0 ink / rgba(0,0,0,.9) dark',
                }),
                e.jsx(l, { name: '--zine-border', value: '3px solid ink / #cdd6f4 dark' }),
                e.jsx(l, { name: '--zine-shadow-red', value: '4px 4px 0 red variant' }),
                e.jsx(l, { name: '--font-display', value: 'Bebas Neue' }),
                e.jsx(l, { name: '--font-body', value: 'Special Elite' }),
                e.jsx(l, { name: '--font-marker', value: 'Permanent Marker' }),
                e.jsx(l, { name: '--font-mono', value: 'Cutive Mono' }),
                e.jsx(l, { name: '--font-stamp', value: 'Black Han Sans' }),
                e.jsx(l, { name: '--radius-*', value: '0 (no rounding)' }),
              ],
            }),
          ],
        }),
      }),
  },
  t = {
    name: 'Typography scale',
    render: () =>
      e.jsx(S, {
        children: e.jsxs(y, {
          pinColor: 'var(--zine-green-lt, #a8d8a0)',
          pinBorder: 'var(--zine-green, #1d6b2e)',
          children: [
            e.jsx('div', {
              style: {
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
              },
              children: 'RANSOM NOTE SYSTEM',
            }),
            e.jsx(h, { children: 'TYPOGRAPHY SCALE' }),
            e.jsx('div', {
              style: { display: 'flex', flexDirection: 'column' },
              children: [
                {
                  meta: 'rubber stamp / Black Han Sans',
                  style: {
                    fontFamily: "'Black Han Sans', sans-serif",
                    fontSize: 32,
                    color: 'var(--zine-red, #d42b2b)',
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
                    color: 'var(--zine-ink, #0e0c07)',
                    letterSpacing: '0.04em',
                  },
                  text: 'The knowledge garden',
                },
                {
                  meta: 'h1 / display 28px',
                  style: {
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: 28,
                    color: 'var(--zine-ink, #0e0c07)',
                    letterSpacing: '0.03em',
                  },
                  text: 'Article title sits here',
                },
                {
                  meta: 'h2 / marker 20px',
                  style: {
                    fontFamily: "'Permanent Marker', cursive",
                    fontSize: 20,
                    color: 'var(--zine-blue, #1a3c8f)',
                  },
                  text: 'Section heading — handwritten',
                },
                {
                  meta: 'body / typewriter 15px',
                  style: {
                    fontFamily: "'Special Elite', serif",
                    fontSize: 15,
                    color: 'var(--zine-ink-faded, #2c2820)',
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
                    color: 'var(--zine-ink, #0e0c07)',
                    background: 'var(--ds-toggle-bg, rgba(14,12,7,0.07))',
                    padding: '3px 8px',
                    borderLeft: '3px solid var(--zine-ink, #0e0c07)',
                    display: 'inline-block',
                  },
                  text: "const garden = new Garden({ theme: 'zine' })",
                },
                {
                  meta: 'caption / label',
                  style: {
                    fontFamily: "'Cutive Mono', monospace",
                    fontSize: 11,
                    color: 'var(--zine-muted, #6b6050)',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                  },
                  text: 'tags · metadata · timestamps · xerox artifacts',
                },
              ].map(({ meta: r, style: i, text: n }) =>
                e.jsxs(
                  'div',
                  {
                    style: {
                      display: 'flex',
                      alignItems: 'center',
                      gap: 14,
                      padding: '10px 0',
                      borderBottom: '2px solid var(--ds-border, rgba(14,12,7,0.12))',
                    },
                    children: [
                      e.jsx('span', {
                        style: {
                          fontFamily: "'Cutive Mono', monospace",
                          fontSize: 10,
                          color: 'var(--zine-muted, #6b6050)',
                          minWidth: 140,
                          flexShrink: 0,
                        },
                        children: r,
                      }),
                      e.jsx('span', { style: i, children: n }),
                    ],
                  },
                  r,
                ),
              ),
            }),
          ],
        }),
      }),
  },
  d = {
    name: 'Spacing & shadows',
    render: () =>
      e.jsx(S, {
        children: e.jsxs(y, {
          pinColor: 'var(--zine-blue-lt, #4a80d4)',
          pinBorder: 'var(--zine-blue, #1a3c8f)',
          children: [
            e.jsx(h, { children: 'SPACING & SHADOWS' }),
            e.jsxs('div', {
              style: { display: 'flex', gap: 48, flexWrap: 'wrap' },
              children: [
                e.jsxs('div', {
                  children: [
                    e.jsx('div', {
                      style: {
                        fontFamily: "'Black Han Sans', sans-serif",
                        fontSize: 12,
                        letterSpacing: '0.08em',
                        color: 'var(--zine-muted, #6b6050)',
                        marginBottom: 12,
                      },
                      children: 'SPACING SCALE',
                    }),
                    e.jsx('div', {
                      style: { display: 'flex', flexDirection: 'column', gap: 8 },
                      children: [
                        { n: 1, px: 4 },
                        { n: 2, px: 8 },
                        { n: 3, px: 12 },
                        { n: 4, px: 16 },
                        { n: 5, px: 24 },
                        { n: 6, px: 32 },
                        { n: 7, px: 48 },
                        { n: 8, px: 64 },
                      ].map(({ n: r, px: i }) =>
                        e.jsxs(
                          'div',
                          {
                            style: { display: 'flex', alignItems: 'center', gap: 10 },
                            children: [
                              e.jsx('div', {
                                style: {
                                  height: 16,
                                  width: i,
                                  background: 'var(--zine-red, #d42b2b)',
                                  minWidth: 4,
                                  border: '1px solid var(--zine-red-dark, #8a0000)',
                                },
                              }),
                              e.jsxs('span', {
                                style: {
                                  fontFamily: "'Cutive Mono', monospace",
                                  fontSize: 11,
                                  color: 'var(--zine-muted, #6b6050)',
                                },
                                children: ['--space-', r, ' / ', i, 'px'],
                              }),
                            ],
                          },
                          r,
                        ),
                      ),
                    }),
                  ],
                }),
                e.jsxs('div', {
                  children: [
                    e.jsx('div', {
                      style: {
                        fontFamily: "'Black Han Sans', sans-serif",
                        fontSize: 12,
                        letterSpacing: '0.08em',
                        color: 'var(--zine-muted, #6b6050)',
                        marginBottom: 12,
                      },
                      children: 'FLAT OFFSET SHADOWS',
                    }),
                    e.jsx('div', {
                      style: { display: 'flex', flexDirection: 'column', gap: 20 },
                      children: [
                        { label: '--shadow-sm', shadow: 'var(--shadow-sm, 2px 2px 0 #0e0c07)' },
                        {
                          label: '--shadow-md / --zine-shadow',
                          shadow: 'var(--shadow-md, 4px 4px 0 #0e0c07)',
                        },
                        {
                          label: '--shadow-lg / --zine-shadow-lg',
                          shadow: 'var(--shadow-lg, 6px 6px 0 #0e0c07)',
                        },
                        {
                          label: '--zine-shadow-red',
                          shadow: 'var(--zine-shadow-red, 4px 4px 0 #d42b2b)',
                        },
                        {
                          label: '--zine-shadow-blue',
                          shadow: 'var(--zine-shadow-blue, 4px 4px 0 #1a3c8f)',
                        },
                      ].map(({ label: r, shadow: i }) =>
                        e.jsxs(
                          'div',
                          {
                            style: { display: 'flex', alignItems: 'center', gap: 16 },
                            children: [
                              e.jsx('div', {
                                style: {
                                  width: 48,
                                  height: 28,
                                  background: 'var(--zine-paper, #f2edd7)',
                                  border: 'var(--zine-border, 3px solid #0e0c07)',
                                  boxShadow: i,
                                  flexShrink: 0,
                                },
                              }),
                              e.jsx('span', {
                                style: {
                                  fontFamily: "'Cutive Mono', monospace",
                                  fontSize: 10,
                                  color: 'var(--zine-muted, #6b6050)',
                                },
                                children: r,
                              }),
                            ],
                          },
                          r,
                        ),
                      ),
                    }),
                  ],
                }),
                e.jsxs('div', {
                  children: [
                    e.jsx('div', {
                      style: {
                        fontFamily: "'Black Han Sans', sans-serif",
                        fontSize: 12,
                        letterSpacing: '0.08em',
                        color: 'var(--zine-muted, #6b6050)',
                        marginBottom: 12,
                      },
                      children: 'BORDER RADIUS (ALWAYS 0)',
                    }),
                    e.jsx('div', {
                      style: { display: 'flex', flexDirection: 'column', gap: 12 },
                      children: ['--radius-sm', '--radius-md', '--radius-lg', '--radius-pill'].map(
                        (r) =>
                          e.jsxs(
                            'div',
                            {
                              style: { display: 'flex', alignItems: 'center', gap: 12 },
                              children: [
                                e.jsx('div', {
                                  style: {
                                    width: 48,
                                    height: 24,
                                    background: 'var(--zine-red, #d42b2b)',
                                    border: '2px solid var(--zine-ink, #0e0c07)',
                                    borderRadius: 0,
                                  },
                                }),
                                e.jsxs('span', {
                                  style: {
                                    fontFamily: "'Cutive Mono', monospace",
                                    fontSize: 10,
                                    color: 'var(--zine-muted, #6b6050)',
                                  },
                                  children: [r, ' = 0'],
                                }),
                              ],
                            },
                            r,
                          ),
                      ),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
  };
o.parameters = {
  ...o.parameters,
  docs: {
    ...((s = o.parameters) === null || s === void 0 ? void 0 : s.docs),
    source: {
      originalSource: `{
  name: 'Color tokens',
  render: () => <PageWrap>
      <Sheet>
        <SectionLabel>LIGHT MODE PALETTE</SectionLabel>

        <div style={{
        fontFamily: "'Black Han Sans', sans-serif",
        fontSize: 11,
        letterSpacing: '0.08em',
        color: 'var(--zine-muted, #6b6050)',
        marginBottom: 12
      }}>
          ZINE BASE COLOURS (light)
        </div>
        <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 8,
        marginBottom: '1.5rem'
      }}>
          <Swatch color="#d42b2b" label="#D42B2B" variable="--zine-red" />
          <Swatch color="#f5c800" label="#F5C800" variable="--zine-yellow" />
          <Swatch color="#1a3c8f" label="#1A3C8F" variable="--zine-blue" />
          <Swatch color="#1d6b2e" label="#1D6B2E" variable="--zine-green" />
          <Swatch color="#e85d1a" label="#E85D1A" variable="--zine-orange" />
          <Swatch color="#e8317a" label="#E8317A" variable="--zine-pink" />
          <Swatch color="#0e0c07" label="#0E0C07" variable="--zine-ink" />
          <Swatch color="#f2edd7" label="#F2EDD7" variable="--zine-paper" />
          <Swatch color="#ede5c8" label="#EDE5C8" variable="--zine-paper-alt / --ds-page (light)" />
          <Swatch color="#fdf0a0" label="#FDF0A0" variable="--zine-yellow-lt" />
          <Swatch color="#4a80d4" label="#4A80D4" variable="--zine-blue-lt" />
          <Swatch color="#a8d8a0" label="#A8D8A0" variable="--zine-green-lt" />
          <Swatch color="#2c2820" label="#2C2820" variable="--zine-ink-faded" />
          <Swatch color="#6b6050" label="#6B6050" variable="--zine-muted" />
        </div>

        <div style={{
        fontFamily: "'Black Han Sans', sans-serif",
        fontSize: 11,
        letterSpacing: '0.08em',
        color: 'var(--zine-muted, #6b6050)',
        marginBottom: 12
      }}>
          CATPPUCCIN MOCHA (dark mode overrides)
        </div>
        <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 8,
        marginBottom: '1.5rem'
      }}>
          <Swatch color="#f38ba8" label="#F38BA8" variable="--zine-red (dark)" dark />
          <Swatch color="#f9e2af" label="#F9E2AF" variable="--zine-yellow (dark)" dark />
          <Swatch color="#89b4fa" label="#89B4FA" variable="--zine-blue (dark)" dark />
          <Swatch color="#a6e3a1" label="#A6E3A1" variable="--zine-green (dark)" dark />
          <Swatch color="#fab387" label="#FAB387" variable="--zine-orange (dark)" dark />
          <Swatch color="#f5c2e7" label="#F5C2E7" variable="--zine-pink (dark)" dark />
          <Swatch color="#cdd6f4" label="#CDD6F4" variable="--zine-ink (dark)" dark />
          <Swatch color="#1e1e2e" label="#1E1E2E" variable="--zine-paper (dark)" dark />
          <Swatch color="#181825" label="#181825" variable="--zine-paper-alt / breadcrumb-bg (dark)" dark />
          <Swatch color="#11111b" label="#11111B" variable="--ds-page (dark)" dark />
          <Swatch color="#313244" label="#313244" variable="--zine-aged / nav-bg (dark)" dark />
          <Swatch color="#bac2de" label="#BAC2DE" variable="--zine-ink-faded (dark)" dark />
          <Swatch color="#a6adc8" label="#A6ADC8" variable="--zine-muted (dark)" dark />
        </div>

        <div style={{
        height: 4,
        background: 'repeating-linear-gradient(90deg, var(--zine-ink,#0e0c07) 0, var(--zine-ink,#0e0c07) 8px, transparent 8px, transparent 12px)',
        margin: '1rem 0',
        opacity: 0.4
      }} />

        <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 4
      }}>
          <TokenRow name="--zine-shadow" value="4px 4px 0 ink / rgba(0,0,0,.9) dark" />
          <TokenRow name="--zine-shadow-lg" value="6px 6px 0 ink / rgba(0,0,0,.9) dark" />
          <TokenRow name="--zine-border" value="3px solid ink / #cdd6f4 dark" />
          <TokenRow name="--zine-shadow-red" value="4px 4px 0 red variant" />
          <TokenRow name="--font-display" value="Bebas Neue" />
          <TokenRow name="--font-body" value="Special Elite" />
          <TokenRow name="--font-marker" value="Permanent Marker" />
          <TokenRow name="--font-mono" value="Cutive Mono" />
          <TokenRow name="--font-stamp" value="Black Han Sans" />
          <TokenRow name="--radius-*" value="0 (no rounding)" />
        </div>
      </Sheet>
    </PageWrap>
}`,
      ...((p = o.parameters) === null || p === void 0 || (c = p.docs) === null || c === void 0
        ? void 0
        : c.source),
    },
  },
};
t.parameters = {
  ...t.parameters,
  docs: {
    ...((b = t.parameters) === null || b === void 0 ? void 0 : b.docs),
    source: {
      originalSource: `{
  name: 'Typography scale',
  render: () => <PageWrap>
      <Sheet pinColor="var(--zine-green-lt, #a8d8a0)" pinBorder="var(--zine-green, #1d6b2e)">
        <div style={{
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
        border: '1px solid rgba(0,0,0,0.15)'
      }}>
          RANSOM NOTE SYSTEM
        </div>
        <SectionLabel>TYPOGRAPHY SCALE</SectionLabel>
        <div style={{
        display: 'flex',
        flexDirection: 'column'
      }}>
          {[{
          meta: 'rubber stamp / Black Han Sans',
          style: {
            fontFamily: "'Black Han Sans', sans-serif",
            fontSize: 32,
            color: 'var(--zine-red, #d42b2b)',
            letterSpacing: '0.06em',
            opacity: 0.85
          },
          text: 'GARDEN.DEV'
        }, {
          meta: 'display / Bebas Neue',
          style: {
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 42,
            color: 'var(--zine-ink, #0e0c07)',
            letterSpacing: '0.04em'
          },
          text: 'The knowledge garden'
        }, {
          meta: 'h1 / display 28px',
          style: {
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 28,
            color: 'var(--zine-ink, #0e0c07)',
            letterSpacing: '0.03em'
          },
          text: 'Article title sits here'
        }, {
          meta: 'h2 / marker 20px',
          style: {
            fontFamily: "'Permanent Marker', cursive",
            fontSize: 20,
            color: 'var(--zine-blue, #1a3c8f)'
          },
          text: 'Section heading — handwritten'
        }, {
          meta: 'body / typewriter 15px',
          style: {
            fontFamily: "'Special Elite', serif",
            fontSize: 15,
            color: 'var(--zine-ink-faded, #2c2820)',
            lineHeight: 1.7,
            maxWidth: 400
          },
          text: 'Long-form prose at 15px / 1.7 — Special Elite gives the feel of typewritten notes, warm and intentional.'
        }, {
          meta: 'mono / code 13px',
          style: {
            fontFamily: "'Cutive Mono', monospace",
            fontSize: 13,
            color: 'var(--zine-ink, #0e0c07)',
            background: 'var(--ds-toggle-bg, rgba(14,12,7,0.07))',
            padding: '3px 8px',
            borderLeft: '3px solid var(--zine-ink, #0e0c07)',
            display: 'inline-block'
          },
          text: "const garden = new Garden({ theme: 'zine' })"
        }, {
          meta: 'caption / label',
          style: {
            fontFamily: "'Cutive Mono', monospace",
            fontSize: 11,
            color: 'var(--zine-muted, #6b6050)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase' as const
          },
          text: 'tags · metadata · timestamps · xerox artifacts'
        }].map(({
          meta: metaLabel,
          style,
          text
        }) => <div key={metaLabel} style={{
          display: 'flex',
          alignItems: 'center',
          gap: 14,
          padding: '10px 0',
          borderBottom: '2px solid var(--ds-border, rgba(14,12,7,0.12))'
        }}>
              <span style={{
            fontFamily: "'Cutive Mono', monospace",
            fontSize: 10,
            color: 'var(--zine-muted, #6b6050)',
            minWidth: 140,
            flexShrink: 0
          }}>
                {metaLabel}
              </span>
              <span style={style as React.CSSProperties}>{text}</span>
            </div>)}
        </div>
      </Sheet>
    </PageWrap>
}`,
      ...((v = t.parameters) === null || v === void 0 || (m = v.docs) === null || m === void 0
        ? void 0
        : m.source),
    },
  },
};
d.parameters = {
  ...d.parameters,
  docs: {
    ...((x = d.parameters) === null || x === void 0 ? void 0 : x.docs),
    source: {
      originalSource: `{
  name: 'Spacing & shadows',
  render: () => <PageWrap>
      <Sheet pinColor="var(--zine-blue-lt, #4a80d4)" pinBorder="var(--zine-blue, #1a3c8f)">
        <SectionLabel>SPACING & SHADOWS</SectionLabel>
        <div style={{
        display: 'flex',
        gap: 48,
        flexWrap: 'wrap'
      }}>
          {/* Spacing */}
          <div>
            <div style={{
            fontFamily: "'Black Han Sans', sans-serif",
            fontSize: 12,
            letterSpacing: '0.08em',
            color: 'var(--zine-muted, #6b6050)',
            marginBottom: 12
          }}>
              SPACING SCALE
            </div>
            <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 8
          }}>
              {[{
              n: 1,
              px: 4
            }, {
              n: 2,
              px: 8
            }, {
              n: 3,
              px: 12
            }, {
              n: 4,
              px: 16
            }, {
              n: 5,
              px: 24
            }, {
              n: 6,
              px: 32
            }, {
              n: 7,
              px: 48
            }, {
              n: 8,
              px: 64
            }].map(({
              n,
              px
            }) => <div key={n} style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10
            }}>
                  <div style={{
                height: 16,
                width: px,
                background: 'var(--zine-red, #d42b2b)',
                minWidth: 4,
                border: '1px solid var(--zine-red-dark, #8a0000)'
              }} />
                  <span style={{
                fontFamily: "'Cutive Mono', monospace",
                fontSize: 11,
                color: 'var(--zine-muted, #6b6050)'
              }}>
                    --space-{n} / {px}px
                  </span>
                </div>)}
            </div>
          </div>

          {/* Shadows */}
          <div>
            <div style={{
            fontFamily: "'Black Han Sans', sans-serif",
            fontSize: 12,
            letterSpacing: '0.08em',
            color: 'var(--zine-muted, #6b6050)',
            marginBottom: 12
          }}>
              FLAT OFFSET SHADOWS
            </div>
            <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 20
          }}>
              {[{
              label: '--shadow-sm',
              shadow: 'var(--shadow-sm, 2px 2px 0 #0e0c07)'
            }, {
              label: '--shadow-md / --zine-shadow',
              shadow: 'var(--shadow-md, 4px 4px 0 #0e0c07)'
            }, {
              label: '--shadow-lg / --zine-shadow-lg',
              shadow: 'var(--shadow-lg, 6px 6px 0 #0e0c07)'
            }, {
              label: '--zine-shadow-red',
              shadow: 'var(--zine-shadow-red, 4px 4px 0 #d42b2b)'
            }, {
              label: '--zine-shadow-blue',
              shadow: 'var(--zine-shadow-blue, 4px 4px 0 #1a3c8f)'
            }].map(({
              label,
              shadow
            }) => <div key={label} style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16
            }}>
                  <div style={{
                width: 48,
                height: 28,
                background: 'var(--zine-paper, #f2edd7)',
                border: 'var(--zine-border, 3px solid #0e0c07)',
                boxShadow: shadow,
                flexShrink: 0
              }} />
                  <span style={{
                fontFamily: "'Cutive Mono', monospace",
                fontSize: 10,
                color: 'var(--zine-muted, #6b6050)'
              }}>
                    {label}
                  </span>
                </div>)}
            </div>
          </div>

          {/* Border radius — always 0 */}
          <div>
            <div style={{
            fontFamily: "'Black Han Sans', sans-serif",
            fontSize: 12,
            letterSpacing: '0.08em',
            color: 'var(--zine-muted, #6b6050)',
            marginBottom: 12
          }}>
              BORDER RADIUS (ALWAYS 0)
            </div>
            <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 12
          }}>
              {['--radius-sm', '--radius-md', '--radius-lg', '--radius-pill'].map(label => <div key={label} style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12
            }}>
                  <div style={{
                width: 48,
                height: 24,
                background: 'var(--zine-red, #d42b2b)',
                border: '2px solid var(--zine-ink, #0e0c07)',
                borderRadius: 0
              }} />
                  <span style={{
                fontFamily: "'Cutive Mono', monospace",
                fontSize: 10,
                color: 'var(--zine-muted, #6b6050)'
              }}>
                    {label} = 0
                  </span>
                </div>)}
            </div>
          </div>
        </div>
      </Sheet>
    </PageWrap>
}`,
      ...((f = d.parameters) === null || f === void 0 || (g = f.docs) === null || g === void 0
        ? void 0
        : g.source),
    },
  },
};
const j = ['ColorTokens', 'TypographyScale', 'SpacingScale'];
export {
  o as ColorTokens,
  d as SpacingScale,
  t as TypographyScale,
  j as __namedExportsOrder,
  w as default,
};
