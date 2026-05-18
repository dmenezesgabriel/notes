import { j as e } from './iframe-BMk1oW9O.js';
import './preload-helper-C1FmrZbK.js';
var r, t, i;
const l = {
    title: 'Design System/Kitchen Sink',
    parameters: {
      layout: 'fullscreen',
      backgrounds: { default: 'dark' },
      docs: {
        description: {
          component:
            'NEU-BRUTALISM × PUNK ZINE design system showcase — all Garden components assembled into a realistic digital garden page.',
        },
      },
    },
  },
  n = [
    { label: 'NOTES', href: '/notes', active: !0 },
    { label: 'WIKI', href: '/wiki' },
    { label: 'PROJECTS', href: '/projects' },
    { label: 'ABOUT', href: '/about' },
  ],
  o = [
    { id: 'intro', label: 'Introduction', active: !0 },
    { id: 'capture', label: 'The capture habit', depth: 2 },
    { id: 'organisation', label: 'Organisation', depth: 2 },
    { id: 'retrieval', label: 'Retrieval', depth: 2 },
    { id: 'see-also', label: 'See also' },
  ],
  a = {
    name: 'Full page',
    render: () =>
      e.jsxs('div', {
        style: {
          minHeight: '100vh',
          background: 'var(--ds-page, #11111b)',
          backgroundImage:
            'radial-gradient(circle at 20% 50%, rgba(90,70,30,0.3) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(60,40,10,0.4) 0%, transparent 50%)',
          fontFamily: "'Special Elite', serif",
        },
        children: [
          e.jsx('div', {
            style: {
              background: '#d42b2b',
              padding: '10px 0',
              overflow: 'hidden',
              borderTop: '3px solid #0e0c07',
              borderBottom: '3px solid #0e0c07',
              position: 'relative',
            },
            children: e.jsx('div', {
              style: {
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 14,
                letterSpacing: '0.25em',
                color: '#f5c800',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
                display: 'inline-block',
                animation: 'marquee 20s linear infinite',
              },
              children:
                'KNOWLEDGE GARDEN  ·  NEU-BRUTALISM × PUNK ZINE  ·  DO IT YOURSELF  ·  NOTES  ·  WIKI  ·  SECOND BRAIN  · ',
            }),
          }),
          e.jsx('garden-nav', { brand: 'GARDEN.DEV', links: n }),
          e.jsxs('div', {
            style: {
              background: 'var(--zine-paper, #f2edd7)',
              border: '3px solid #0e0c07',
              borderTop: 'none',
              padding: '2.5rem 1.5rem 3rem',
              position: 'relative',
            },
            children: [
              e.jsxs('div', {
                style: {
                  fontFamily: "'Cutive Mono', monospace",
                  fontSize: 11,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#d42b2b',
                  marginBottom: '0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                },
                children: [
                  e.jsx('span', { style: { color: '#6b6050' }, children: '///' }),
                  'NEU-BRUTALISM × PUNK ZINE × SCRAPBOOK',
                ],
              }),
              e.jsxs('div', {
                style: {
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'baseline',
                  gap: 6,
                  marginBottom: '1.25rem',
                  lineHeight: 1,
                },
                children: [
                  e.jsx('span', {
                    style: {
                      display: 'inline-block',
                      background: 'var(--zine-ink, #0e0c07)',
                      color: '#f2edd7',
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: 52,
                      padding: '2px 10px 0',
                      transform: 'rotate(-1deg)',
                      boxShadow: '4px 4px 0 #0e0c07',
                    },
                    children: 'THE',
                  }),
                  e.jsx('span', {
                    style: {
                      fontFamily: "'Permanent Marker', cursive",
                      fontSize: 36,
                      color: '#1a3c8f',
                      transform: 'rotate(-2deg)',
                      display: 'inline-block',
                    },
                    children: 'knowledge',
                  }),
                  e.jsx('span', {
                    style: {
                      display: 'inline-block',
                      background: '#f5c800',
                      color: '#0e0c07',
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: 52,
                      padding: '2px 10px 0',
                      transform: 'rotate(1.5deg)',
                      boxShadow: '4px 4px 0 #0e0c07',
                    },
                    children: 'GARDEN',
                  }),
                ],
              }),
              e.jsxs('p', {
                style: {
                  fontFamily: "'Special Elite', serif",
                  fontSize: 15,
                  color: '#2c2820',
                  maxWidth: 520,
                  lineHeight: 1.7,
                  margin: '0 0 1.25rem',
                  borderLeft: '4px solid #0e0c07',
                  paddingLeft: '1rem',
                },
                children: [
                  'A ',
                  e.jsx('span', {
                    style: { background: '#f5c800', padding: '0 3px' },
                    children: 'raw, loud, opinionated',
                  }),
                  ' ',
                  'design language for long-form knowledge sites. Built with Lit elements + Next.js SSG.',
                ],
              }),
              e.jsxs('div', {
                style: { display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: '1.5rem' },
                children: [
                  e.jsx('garden-tag', { variant: 'accent', children: 'LIT ELEMENTS' }),
                  e.jsx('garden-tag', { variant: 'blue', children: 'NEXT.JS SSG' }),
                  e.jsx('garden-tag', { variant: 'yellow', children: 'STORYBOOK' }),
                  e.jsx('garden-tag', { variant: 'green', children: 'RESPONSIVE' }),
                  e.jsx('garden-tag', { children: 'NO FRAMEWORK BS' }),
                ],
              }),
              e.jsx('garden-search', { placeholder: 'Search notes, wiki, projects…', kbd: '⌘K' }),
            ],
          }),
          e.jsxs('div', {
            style: { padding: '2rem 1.5rem 0', maxWidth: 960, margin: '0 auto' },
            children: [
              e.jsxs('div', {
                style: {
                  background: 'var(--zine-paper, #f2edd7)',
                  border: '3px solid #0e0c07',
                  borderRight: '5px solid #0e0c07',
                  borderBottom: '5px solid #0e0c07',
                  padding: '1.5rem',
                  marginTop: '2.5rem',
                  position: 'relative',
                  boxShadow: '6px 6px 0 #0e0c07',
                },
                children: [
                  e.jsx('div', {
                    style: {
                      position: 'absolute',
                      top: -10,
                      left: 24,
                      width: 18,
                      height: 18,
                      background: '#4a80d4',
                      border: '2px solid #1a3c8f',
                      borderRadius: '50%',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.4)',
                    },
                  }),
                  e.jsxs('div', {
                    style: {
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: 22,
                      color: '#0e0c07',
                      letterSpacing: '0.08em',
                      marginBottom: '1.25rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 10,
                    },
                    children: [
                      e.jsx('span', { style: { color: '#d42b2b' }, children: '//' }),
                      ' BUTTONS & ACTIONS',
                      e.jsx('div', {
                        style: {
                          flex: 1,
                          height: 3,
                          background: 'var(--zine-ink, #0e0c07)',
                          marginLeft: 8,
                        },
                      }),
                    ],
                  }),
                  e.jsxs('div', {
                    style: { display: 'flex', flexWrap: 'wrap', gap: 0, alignItems: 'center' },
                    children: [
                      e.jsx('garden-button', { variant: 'primary', children: '✦ PUBLISH NOTE' }),
                      e.jsx('garden-button', { variant: 'yellow', children: '◆ SAVE DRAFT' }),
                      e.jsx('garden-button', { variant: 'blue', children: '↑ EXPORT' }),
                      e.jsx('garden-button', { children: '✂ CLIP' }),
                      e.jsx('garden-button', { variant: 'ghost', children: '✕ CANCEL' }),
                    ],
                  }),
                ],
              }),
              e.jsxs('div', {
                style: {
                  background: 'var(--zine-paper, #f2edd7)',
                  border: '3px solid #0e0c07',
                  borderRight: '5px solid #0e0c07',
                  borderBottom: '5px solid #0e0c07',
                  padding: '1.5rem 1.5rem 2rem',
                  marginTop: '2.5rem',
                  position: 'relative',
                  boxShadow: '6px 6px 0 #0e0c07',
                },
                children: [
                  e.jsx('div', {
                    style: {
                      position: 'absolute',
                      top: -10,
                      left: 24,
                      width: 18,
                      height: 18,
                      background: '#f5c800',
                      border: '2px solid #a08800',
                      borderRadius: '50%',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.4)',
                    },
                  }),
                  e.jsxs('div', {
                    style: {
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: 22,
                      color: '#0e0c07',
                      letterSpacing: '0.08em',
                      marginBottom: '1.25rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 10,
                    },
                    children: [
                      e.jsx('span', { style: { color: '#d42b2b' }, children: '//' }),
                      ' NOTE CARDS',
                      e.jsx('div', {
                        style: {
                          flex: 1,
                          height: 3,
                          background: 'var(--zine-ink, #0e0c07)',
                          marginLeft: 8,
                        },
                      }),
                    ],
                  }),
                  e.jsxs('div', {
                    style: { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 },
                    children: [
                      e.jsxs('garden-card', {
                        variant: 'featured',
                        headline: 'On building a second brain',
                        meta: '3 DAYS AGO · 8 MIN READ · LVL.8',
                        excerpt:
                          "The goal isn't to remember everything — it's to think better by offloading storage to a trusted system.",
                        href: '/notes/second-brain',
                        style: { '--card-rotate': '-0.6deg' },
                        children: [
                          e.jsx('garden-tag', {
                            slot: 'footer',
                            variant: 'accent',
                            children: 'PKM',
                          }),
                          e.jsx('garden-tag', { slot: 'footer', children: 'ZETTELKASTEN' }),
                        ],
                      }),
                      e.jsxs('garden-card', {
                        headline: 'Lit elements vs React: a pragmatic view',
                        meta: '1 WEEK AGO · 5 MIN READ',
                        excerpt:
                          'Web components shine when the goal is portability across stacks, not developer ergonomics first.',
                        href: '/notes/lit-vs-react',
                        style: { '--card-rotate': '0.7deg' },
                        children: [
                          e.jsx('garden-tag', {
                            slot: 'footer',
                            variant: 'blue',
                            children: 'FRONTEND',
                          }),
                          e.jsx('garden-tag', { slot: 'footer', children: 'LIT' }),
                        ],
                      }),
                      e.jsxs('garden-card', {
                        headline: 'Pixel art as a design constraint',
                        meta: '3 WEEKS AGO · 6 MIN READ',
                        excerpt:
                          "When every pixel costs effort, you're forced into clarity. The grid is the system.",
                        href: '/notes/pixel-art',
                        style: { '--card-rotate': '-0.4deg' },
                        children: [
                          e.jsx('garden-tag', {
                            slot: 'footer',
                            variant: 'green',
                            children: 'GAME DESIGN',
                          }),
                          e.jsx('garden-tag', {
                            slot: 'footer',
                            variant: 'yellow',
                            children: 'PIXEL',
                          }),
                        ],
                      }),
                      e.jsxs('garden-card', {
                        headline: 'Synthwave palettes and why they work',
                        meta: '2 WEEKS AGO · 4 MIN READ',
                        excerpt:
                          'High contrast + neon against dark surfaces triggers the same visual comfort as CRT phosphor glow.',
                        href: '/notes/synthwave',
                        style: { '--card-rotate': '1.1deg' },
                        children: [
                          e.jsx('garden-tag', { slot: 'footer', children: 'DESIGN' }),
                          e.jsx('garden-tag', { slot: 'footer', children: 'COLOR' }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs('div', {
                style: {
                  background: 'var(--zine-paper, #f2edd7)',
                  border: '3px solid #0e0c07',
                  borderRight: '5px solid #0e0c07',
                  borderBottom: '5px solid #0e0c07',
                  padding: '1.5rem',
                  marginTop: '2.5rem',
                  position: 'relative',
                  boxShadow: '6px 6px 0 #0e0c07',
                },
                children: [
                  e.jsx('div', {
                    style: {
                      position: 'absolute',
                      top: -10,
                      left: 24,
                      width: 18,
                      height: 18,
                      background: '#d42b2b',
                      border: '2px solid #8a0000',
                      borderRadius: '50%',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.4)',
                    },
                  }),
                  e.jsxs('div', {
                    style: {
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: 22,
                      color: '#0e0c07',
                      letterSpacing: '0.08em',
                      marginBottom: '1.25rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 10,
                    },
                    children: [
                      e.jsx('span', { style: { color: '#d42b2b' }, children: '//' }),
                      ' ARTICLE LAYOUT',
                      e.jsx('div', {
                        style: {
                          flex: 1,
                          height: 3,
                          background: 'var(--zine-ink, #0e0c07)',
                          marginLeft: 8,
                        },
                      }),
                    ],
                  }),
                  e.jsxs('div', {
                    style: {
                      display: 'grid',
                      gridTemplateColumns: '1fr 180px',
                      gap: 16,
                      alignItems: 'start',
                    },
                    children: [
                      e.jsxs('div', {
                        style: {
                          background: '#fafaf2',
                          border: '3px solid #0e0c07',
                          borderRight: '5px solid #0e0c07',
                          borderBottom: '5px solid #0e0c07',
                          padding: '1.75rem',
                          backgroundImage:
                            'repeating-linear-gradient(to bottom, transparent, transparent 31px, rgba(100,120,200,0.1) 31px, rgba(100,120,200,0.1) 32px)',
                        },
                        children: [
                          e.jsx('garden-breadcrumb', {
                            items: [
                              { label: 'home', href: '/' },
                              { label: 'notes', href: '/notes' },
                              { label: 'second brain' },
                            ],
                            style: { marginBottom: 10 },
                          }),
                          e.jsx('div', {
                            style: {
                              fontFamily: "'Cutive Mono', monospace",
                              fontSize: 10,
                              color: '#6b6050',
                              marginBottom: 6,
                              letterSpacing: '0.1em',
                              textTransform: 'uppercase',
                            },
                            children: 'NOTES / PKM / SECOND-BRAIN',
                          }),
                          e.jsx('h2', {
                            style: {
                              fontFamily: "'Bebas Neue', sans-serif",
                              fontSize: 26,
                              letterSpacing: '0.03em',
                              color: '#0e0c07',
                              margin: '0 0 6px',
                              lineHeight: 1.15,
                            },
                            children: 'On building a second brain',
                          }),
                          e.jsxs('div', {
                            style: {
                              fontFamily: "'Cutive Mono', monospace",
                              fontSize: 10,
                              color: '#6b6050',
                              marginBottom: '1rem',
                              display: 'flex',
                              gap: 10,
                              letterSpacing: '0.06em',
                            },
                            children: [
                              e.jsx('span', { children: 'MAY 2026' }),
                              e.jsx('span', { children: '·' }),
                              e.jsx('span', { children: '8 MIN READ' }),
                              e.jsx('span', { children: '·' }),
                              e.jsx('span', {
                                style: {
                                  background: '#d42b2b',
                                  color: '#fff',
                                  padding: '1px 7px',
                                  fontFamily: "'Black Han Sans', sans-serif",
                                  fontSize: 10,
                                },
                                children: 'PKM',
                              }),
                            ],
                          }),
                          e.jsxs('p', {
                            style: {
                              fontFamily: "'Special Elite', serif",
                              fontSize: 14,
                              color: '#2c2820',
                              lineHeight: 1.8,
                              margin: '0 0 1rem',
                            },
                            children: [
                              "The goal isn't to remember everything — it's to",
                              ' ',
                              e.jsx('span', {
                                style: { background: '#f5c800', padding: '0 3px' },
                                children: 'think better',
                              }),
                              ' by offloading memory to a trusted external system.',
                            ],
                          }),
                          e.jsx('blockquote', {
                            style: {
                              borderLeft: '5px solid #0e0c07',
                              padding: '0.6rem 0 0.6rem 1rem',
                              color: '#6b6050',
                              fontFamily: "'Special Elite', serif",
                              fontSize: 14,
                              fontStyle: 'italic',
                              margin: '1rem 0',
                              background: 'rgba(14,12,7,0.04)',
                              position: 'relative',
                            },
                            children:
                              '“We are what we repeatedly do. Excellence, then, is not an act, but a habit.” — Aristotle',
                          }),
                          e.jsx('garden-callout', {
                            heading: '✦ TIP',
                            style: { marginBottom: 10 },
                            children:
                              'Start with a weekly review — fifteen minutes every Sunday is enough to close the loop and trust the system.',
                          }),
                          e.jsx('garden-callout', {
                            variant: 'info',
                            heading: '→ RELATED',
                            children:
                              'Zettelkasten, evergreen notes, PARA method, progressive summarisation.',
                          }),
                        ],
                      }),
                      e.jsx('garden-toc', { items: o }),
                    ],
                  }),
                ],
              }),
              e.jsxs('div', {
                style: {
                  background: 'var(--zine-paper, #f2edd7)',
                  border: '3px solid #0e0c07',
                  borderRight: '5px solid #0e0c07',
                  borderBottom: '5px solid #0e0c07',
                  padding: '1.5rem 1.5rem 2rem',
                  marginTop: '2.5rem',
                  marginBottom: '3rem',
                  position: 'relative',
                  boxShadow: '6px 6px 0 #0e0c07',
                },
                children: [
                  e.jsx('div', {
                    style: {
                      position: 'absolute',
                      top: -10,
                      left: 24,
                      width: 18,
                      height: 18,
                      background: '#a8d8a0',
                      border: '2px solid #1d6b2e',
                      borderRadius: '50%',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.4)',
                    },
                  }),
                  e.jsxs('div', {
                    style: {
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: 22,
                      color: '#0e0c07',
                      letterSpacing: '0.08em',
                      marginBottom: '1.25rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 10,
                    },
                    children: [
                      e.jsx('span', { style: { color: '#d42b2b' }, children: '//' }),
                      ' WIKI ARTICLE CARDS',
                      e.jsx('div', {
                        style: {
                          flex: 1,
                          height: 3,
                          background: 'var(--zine-ink, #0e0c07)',
                          marginLeft: 8,
                        },
                      }),
                    ],
                  }),
                  e.jsxs('div', {
                    style: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 },
                    children: [
                      e.jsx('garden-card', {
                        variant: 'wiki',
                        headline: 'Zettelkasten',
                        meta: 'WIKI · KNOWLEDGE MGMT',
                        excerpt:
                          'A slip-box method for networked thinking developed by Niklas Luhmann.',
                        href: '/wiki/zettelkasten',
                        style: { '--card-rotate': '-1deg' },
                      }),
                      e.jsx('garden-card', {
                        variant: 'wiki',
                        headline: 'PARA Method',
                        meta: 'WIKI · ORGANISATION',
                        excerpt:
                          "Projects, Areas, Resources, Archive — Tiago Forte's actionable structure.",
                        href: '/wiki/para',
                        style: { '--card-rotate': '1.2deg' },
                      }),
                      e.jsx('garden-card', {
                        variant: 'wiki',
                        headline: 'Evergreen Notes',
                        meta: 'WIKI · WRITING',
                        excerpt:
                          'Notes written to accumulate insight over time, not to record information once.',
                        href: '/wiki/evergreen',
                        style: { '--card-rotate': '-0.7deg' },
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          e.jsx('div', {
            style: {
              fontFamily: "'Cutive Mono', monospace",
              fontSize: 10,
              color: 'rgba(255,255,255,0.3)',
              textAlign: 'center',
              marginTop: '3rem',
              paddingBottom: '2rem',
              letterSpacing: '0.1em',
            },
            children:
              'GARDEN.DEV DESIGN SYSTEM · NEU-BRUTALISM × PUNK ZINE · V0.2 · LIT + NEXT.JS · STORYBOOK READY',
          }),
        ],
      }),
  };
a.parameters = {
  ...a.parameters,
  docs: {
    ...((r = a.parameters) === null || r === void 0 ? void 0 : r.docs),
    source: {
      originalSource: `{
  name: 'Full page',
  render: () => <div style={{
    minHeight: '100vh',
    background: 'var(--ds-page, #11111b)',
    backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(90,70,30,0.3) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(60,40,10,0.4) 0%, transparent 50%)',
    fontFamily: "'Special Elite', serif"
  }}>
      {/* Running marquee banner */}
      <div style={{
      background: '#d42b2b',
      padding: '10px 0',
      overflow: 'hidden',
      borderTop: '3px solid #0e0c07',
      borderBottom: '3px solid #0e0c07',
      position: 'relative'
    }}>
        <div style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: 14,
        letterSpacing: '0.25em',
        color: '#f5c800',
        textTransform: 'uppercase',
        whiteSpace: 'nowrap',
        display: 'inline-block',
        animation: 'marquee 20s linear infinite'
      }}>
          KNOWLEDGE GARDEN &nbsp;·&nbsp; NEU-BRUTALISM × PUNK ZINE &nbsp;·&nbsp; DO IT YOURSELF
          &nbsp;·&nbsp; NOTES &nbsp;·&nbsp; WIKI &nbsp;·&nbsp; SECOND BRAIN &nbsp;·&nbsp;
        </div>
      </div>

      {/* Nav */}
      <garden-nav brand="GARDEN.DEV" links={navLinks} />

      {/* Hero */}
      <div style={{
      background: 'var(--zine-paper, #f2edd7)',
      border: '3px solid #0e0c07',
      borderTop: 'none',
      padding: '2.5rem 1.5rem 3rem',
      position: 'relative'
    }}>
        <div style={{
        fontFamily: "'Cutive Mono', monospace",
        fontSize: 11,
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        color: '#d42b2b',
        marginBottom: '0.5rem',
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }}>
          <span style={{
          color: '#6b6050'
        }}>///</span>
          NEU-BRUTALISM × PUNK ZINE × SCRAPBOOK
        </div>

        {/* Ransom-note headline */}
        <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'baseline',
        gap: 6,
        marginBottom: '1.25rem',
        lineHeight: 1
      }}>
          <span style={{
          display: 'inline-block',
          background: 'var(--zine-ink, #0e0c07)',
          color: '#f2edd7',
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: 52,
          padding: '2px 10px 0',
          transform: 'rotate(-1deg)',
          boxShadow: '4px 4px 0 #0e0c07'
        }}>
            THE
          </span>
          <span style={{
          fontFamily: "'Permanent Marker', cursive",
          fontSize: 36,
          color: '#1a3c8f',
          transform: 'rotate(-2deg)',
          display: 'inline-block'
        }}>
            knowledge
          </span>
          <span style={{
          display: 'inline-block',
          background: '#f5c800',
          color: '#0e0c07',
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: 52,
          padding: '2px 10px 0',
          transform: 'rotate(1.5deg)',
          boxShadow: '4px 4px 0 #0e0c07'
        }}>
            GARDEN
          </span>
        </div>

        <p style={{
        fontFamily: "'Special Elite', serif",
        fontSize: 15,
        color: '#2c2820',
        maxWidth: 520,
        lineHeight: 1.7,
        margin: '0 0 1.25rem',
        borderLeft: '4px solid #0e0c07',
        paddingLeft: '1rem'
      }}>
          A <span style={{
          background: '#f5c800',
          padding: '0 3px'
        }}>raw, loud, opinionated</span>{' '}
          design language for long-form knowledge sites. Built with Lit elements + Next.js SSG.
        </p>

        <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 6,
        marginBottom: '1.5rem'
      }}>
          <garden-tag variant="accent">LIT ELEMENTS</garden-tag>
          <garden-tag variant="blue">NEXT.JS SSG</garden-tag>
          <garden-tag variant="yellow">STORYBOOK</garden-tag>
          <garden-tag variant="green">RESPONSIVE</garden-tag>
          <garden-tag>NO FRAMEWORK BS</garden-tag>
        </div>

        <garden-search placeholder="Search notes, wiki, projects…" kbd="⌘K" />
      </div>

      {/* Content area */}
      <div style={{
      padding: '2rem 1.5rem 0',
      maxWidth: 960,
      margin: '0 auto'
    }}>
        {/* Buttons section */}
        <div style={{
        background: 'var(--zine-paper, #f2edd7)',
        border: '3px solid #0e0c07',
        borderRight: '5px solid #0e0c07',
        borderBottom: '5px solid #0e0c07',
        padding: '1.5rem',
        marginTop: '2.5rem',
        position: 'relative',
        boxShadow: '6px 6px 0 #0e0c07'
      }}>
          <div style={{
          position: 'absolute',
          top: -10,
          left: 24,
          width: 18,
          height: 18,
          background: '#4a80d4',
          border: '2px solid #1a3c8f',
          borderRadius: '50%',
          boxShadow: '0 2px 4px rgba(0,0,0,0.4)'
        }} />
          <div style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: 22,
          color: '#0e0c07',
          letterSpacing: '0.08em',
          marginBottom: '1.25rem',
          display: 'flex',
          alignItems: 'center',
          gap: 10
        }}>
            <span style={{
            color: '#d42b2b'
          }}>//</span> BUTTONS &amp; ACTIONS
            <div style={{
            flex: 1,
            height: 3,
            background: 'var(--zine-ink, #0e0c07)',
            marginLeft: 8
          }} />
          </div>
          <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 0,
          alignItems: 'center'
        }}>
            <garden-button variant="primary">✦ PUBLISH NOTE</garden-button>
            <garden-button variant="yellow">◆ SAVE DRAFT</garden-button>
            <garden-button variant="blue">↑ EXPORT</garden-button>
            <garden-button>✂ CLIP</garden-button>
            <garden-button variant="ghost">✕ CANCEL</garden-button>
          </div>
        </div>

        {/* Note cards */}
        <div style={{
        background: 'var(--zine-paper, #f2edd7)',
        border: '3px solid #0e0c07',
        borderRight: '5px solid #0e0c07',
        borderBottom: '5px solid #0e0c07',
        padding: '1.5rem 1.5rem 2rem',
        marginTop: '2.5rem',
        position: 'relative',
        boxShadow: '6px 6px 0 #0e0c07'
      }}>
          <div style={{
          position: 'absolute',
          top: -10,
          left: 24,
          width: 18,
          height: 18,
          background: '#f5c800',
          border: '2px solid #a08800',
          borderRadius: '50%',
          boxShadow: '0 2px 4px rgba(0,0,0,0.4)'
        }} />
          <div style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: 22,
          color: '#0e0c07',
          letterSpacing: '0.08em',
          marginBottom: '1.25rem',
          display: 'flex',
          alignItems: 'center',
          gap: 10
        }}>
            <span style={{
            color: '#d42b2b'
          }}>//</span> NOTE CARDS
            <div style={{
            flex: 1,
            height: 3,
            background: 'var(--zine-ink, #0e0c07)',
            marginLeft: 8
          }} />
          </div>
          <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 16
        }}>
            <garden-card variant="featured" headline="On building a second brain" meta="3 DAYS AGO · 8 MIN READ · LVL.8" excerpt="The goal isn't to remember everything — it's to think better by offloading storage to a trusted system." href="/notes/second-brain" style={{
            '--card-rotate': '-0.6deg'
          } as React.CSSProperties}>
              <garden-tag slot="footer" variant="accent">
                PKM
              </garden-tag>
              <garden-tag slot="footer">ZETTELKASTEN</garden-tag>
            </garden-card>
            <garden-card headline="Lit elements vs React: a pragmatic view" meta="1 WEEK AGO · 5 MIN READ" excerpt="Web components shine when the goal is portability across stacks, not developer ergonomics first." href="/notes/lit-vs-react" style={{
            '--card-rotate': '0.7deg'
          } as React.CSSProperties}>
              <garden-tag slot="footer" variant="blue">
                FRONTEND
              </garden-tag>
              <garden-tag slot="footer">LIT</garden-tag>
            </garden-card>
            <garden-card headline="Pixel art as a design constraint" meta="3 WEEKS AGO · 6 MIN READ" excerpt="When every pixel costs effort, you're forced into clarity. The grid is the system." href="/notes/pixel-art" style={{
            '--card-rotate': '-0.4deg'
          } as React.CSSProperties}>
              <garden-tag slot="footer" variant="green">
                GAME DESIGN
              </garden-tag>
              <garden-tag slot="footer" variant="yellow">
                PIXEL
              </garden-tag>
            </garden-card>
            <garden-card headline="Synthwave palettes and why they work" meta="2 WEEKS AGO · 4 MIN READ" excerpt="High contrast + neon against dark surfaces triggers the same visual comfort as CRT phosphor glow." href="/notes/synthwave" style={{
            '--card-rotate': '1.1deg'
          } as React.CSSProperties}>
              <garden-tag slot="footer">DESIGN</garden-tag>
              <garden-tag slot="footer">COLOR</garden-tag>
            </garden-card>
          </div>
        </div>

        {/* Article layout specimen */}
        <div style={{
        background: 'var(--zine-paper, #f2edd7)',
        border: '3px solid #0e0c07',
        borderRight: '5px solid #0e0c07',
        borderBottom: '5px solid #0e0c07',
        padding: '1.5rem',
        marginTop: '2.5rem',
        position: 'relative',
        boxShadow: '6px 6px 0 #0e0c07'
      }}>
          <div style={{
          position: 'absolute',
          top: -10,
          left: 24,
          width: 18,
          height: 18,
          background: '#d42b2b',
          border: '2px solid #8a0000',
          borderRadius: '50%',
          boxShadow: '0 2px 4px rgba(0,0,0,0.4)'
        }} />
          <div style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: 22,
          color: '#0e0c07',
          letterSpacing: '0.08em',
          marginBottom: '1.25rem',
          display: 'flex',
          alignItems: 'center',
          gap: 10
        }}>
            <span style={{
            color: '#d42b2b'
          }}>//</span> ARTICLE LAYOUT
            <div style={{
            flex: 1,
            height: 3,
            background: 'var(--zine-ink, #0e0c07)',
            marginLeft: 8
          }} />
          </div>
          <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 180px',
          gap: 16,
          alignItems: 'start'
        }}>
            {/* Reading area — typewriter paper */}
            <div style={{
            background: '#fafaf2',
            border: '3px solid #0e0c07',
            borderRight: '5px solid #0e0c07',
            borderBottom: '5px solid #0e0c07',
            padding: '1.75rem',
            backgroundImage: 'repeating-linear-gradient(to bottom, transparent, transparent 31px, rgba(100,120,200,0.1) 31px, rgba(100,120,200,0.1) 32px)'
          }}>
              <garden-breadcrumb items={[{
              label: 'home',
              href: '/'
            }, {
              label: 'notes',
              href: '/notes'
            }, {
              label: 'second brain'
            }]} style={{
              marginBottom: 10
            }} />
              <div style={{
              fontFamily: "'Cutive Mono', monospace",
              fontSize: 10,
              color: '#6b6050',
              marginBottom: 6,
              letterSpacing: '0.1em',
              textTransform: 'uppercase'
            }}>
                NOTES / PKM / SECOND-BRAIN
              </div>
              <h2 style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 26,
              letterSpacing: '0.03em',
              color: '#0e0c07',
              margin: '0 0 6px',
              lineHeight: 1.15
            }}>
                On building a second brain
              </h2>
              <div style={{
              fontFamily: "'Cutive Mono', monospace",
              fontSize: 10,
              color: '#6b6050',
              marginBottom: '1rem',
              display: 'flex',
              gap: 10,
              letterSpacing: '0.06em'
            }}>
                <span>MAY 2026</span>
                <span>·</span>
                <span>8 MIN READ</span>
                <span>·</span>
                <span style={{
                background: '#d42b2b',
                color: '#fff',
                padding: '1px 7px',
                fontFamily: "'Black Han Sans', sans-serif",
                fontSize: 10
              }}>
                  PKM
                </span>
              </div>
              <p style={{
              fontFamily: "'Special Elite', serif",
              fontSize: 14,
              color: '#2c2820',
              lineHeight: 1.8,
              margin: '0 0 1rem'
            }}>
                The goal isn&apos;t to remember everything — it&apos;s to{' '}
                <span style={{
                background: '#f5c800',
                padding: '0 3px'
              }}>think better</span> by
                offloading memory to a trusted external system.
              </p>
              <blockquote style={{
              borderLeft: '5px solid #0e0c07',
              padding: '0.6rem 0 0.6rem 1rem',
              color: '#6b6050',
              fontFamily: "'Special Elite', serif",
              fontSize: 14,
              fontStyle: 'italic',
              margin: '1rem 0',
              background: 'rgba(14,12,7,0.04)',
              position: 'relative'
            }}>
                &ldquo;We are what we repeatedly do. Excellence, then, is not an act, but a
                habit.&rdquo; — Aristotle
              </blockquote>
              <garden-callout heading="✦ TIP" style={{
              marginBottom: 10
            }}>
                Start with a weekly review — fifteen minutes every Sunday is enough to close the
                loop and trust the system.
              </garden-callout>
              <garden-callout variant="info" heading="→ RELATED">
                Zettelkasten, evergreen notes, PARA method, progressive summarisation.
              </garden-callout>
            </div>

            {/* TOC */}
            <garden-toc items={tocItems} />
          </div>
        </div>

        {/* Wiki cards */}
        <div style={{
        background: 'var(--zine-paper, #f2edd7)',
        border: '3px solid #0e0c07',
        borderRight: '5px solid #0e0c07',
        borderBottom: '5px solid #0e0c07',
        padding: '1.5rem 1.5rem 2rem',
        marginTop: '2.5rem',
        marginBottom: '3rem',
        position: 'relative',
        boxShadow: '6px 6px 0 #0e0c07'
      }}>
          <div style={{
          position: 'absolute',
          top: -10,
          left: 24,
          width: 18,
          height: 18,
          background: '#a8d8a0',
          border: '2px solid #1d6b2e',
          borderRadius: '50%',
          boxShadow: '0 2px 4px rgba(0,0,0,0.4)'
        }} />
          <div style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: 22,
          color: '#0e0c07',
          letterSpacing: '0.08em',
          marginBottom: '1.25rem',
          display: 'flex',
          alignItems: 'center',
          gap: 10
        }}>
            <span style={{
            color: '#d42b2b'
          }}>//</span> WIKI ARTICLE CARDS
            <div style={{
            flex: 1,
            height: 3,
            background: 'var(--zine-ink, #0e0c07)',
            marginLeft: 8
          }} />
          </div>
          <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 14
        }}>
            <garden-card variant="wiki" headline="Zettelkasten" meta="WIKI · KNOWLEDGE MGMT" excerpt="A slip-box method for networked thinking developed by Niklas Luhmann." href="/wiki/zettelkasten" style={{
            '--card-rotate': '-1deg'
          } as React.CSSProperties} />
            <garden-card variant="wiki" headline="PARA Method" meta="WIKI · ORGANISATION" excerpt="Projects, Areas, Resources, Archive — Tiago Forte's actionable structure." href="/wiki/para" style={{
            '--card-rotate': '1.2deg'
          } as React.CSSProperties} />
            <garden-card variant="wiki" headline="Evergreen Notes" meta="WIKI · WRITING" excerpt="Notes written to accumulate insight over time, not to record information once." href="/wiki/evergreen" style={{
            '--card-rotate': '-0.7deg'
          } as React.CSSProperties} />
          </div>
        </div>
      </div>

      {/* Footer note */}
      <div style={{
      fontFamily: "'Cutive Mono', monospace",
      fontSize: 10,
      color: 'rgba(255,255,255,0.3)',
      textAlign: 'center',
      marginTop: '3rem',
      paddingBottom: '2rem',
      letterSpacing: '0.1em'
    }}>
        GARDEN.DEV DESIGN SYSTEM · NEU-BRUTALISM × PUNK ZINE · V0.2 · LIT + NEXT.JS · STORYBOOK
        READY
      </div>
    </div>
}`,
      ...((i = a.parameters) === null || i === void 0 || (t = i.docs) === null || t === void 0
        ? void 0
        : t.source),
    },
  },
};
const g = ['FullPage'];
export { a as FullPage, g as __namedExportsOrder, l as default };
