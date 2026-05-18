import { j as e } from './iframe-BMk1oW9O.js';
import './preload-helper-C1FmrZbK.js';
var t, a, i, s, d, l, c, m, p;
const v = [
    { label: 'notes', href: '/notes/', active: !0 },
    { label: 'books', href: '/notes/books/' },
    { label: 'about', href: '/notes/about/' },
  ],
  k = {
    title: 'Components/GardenNav',
    tags: ['autodocs'],
    argTypes: {
      brand: {
        control: 'text',
        description:
          'Brand name displayed in display font with yellow colour and misregistration ghost',
        table: { defaultValue: { summary: 'garden.dev' } },
      },
      links: {
        control: 'object',
        description: 'Array of `{ label, href, active? }` navigation links',
      },
    },
    args: { brand: 'garden.dev', links: v },
    parameters: {
      layout: 'fullscreen',
      backgrounds: { default: 'dark' },
      docs: {
        description: {
          component:
            'Site-level navigation bar for the live digital garden. Includes active-link rendering, theme switching, and the brand/home affordance used by the shared site layout.',
        },
      },
    },
  },
  u = ({ brand: g, links: f }) => e.jsx('garden-nav', { brand: g, links: f, homeHref: '/notes/' }),
  o = { render: u },
  r = {
    name: 'Home route context',
    render: () =>
      e.jsxs('div', {
        style: { minHeight: '50vh', background: 'var(--ds-page, #ede5c8)' },
        children: [
          e.jsx('garden-nav', { brand: 'garden.dev', links: v, homeHref: '/notes/' }),
          e.jsxs('section', {
            'aria-label': 'Site introduction',
            style: {
              background: 'var(--zine-paper, #f2edd7)',
              border: '3px solid var(--zine-ink, #0e0c07)',
              borderTop: 'none',
              padding: '2.5rem 1.5rem 3rem',
            },
            children: [
              e.jsx('div', {
                style: {
                  fontFamily: "'Cutive Mono', monospace",
                  fontSize: 11,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--zine-red, #d42b2b)',
                  marginBottom: '0.5rem',
                },
                children: '/// NEU-BRUTALISM × PUNK ZINE × SCRAPBOOK',
              }),
              e.jsx('h1', {
                style: {
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: 'clamp(36px, 6vw, 64px)',
                  letterSpacing: '0.04em',
                  color: 'var(--zine-ink, #0e0c07)',
                  margin: '0 0 0.75rem',
                  lineHeight: 1,
                },
                children: 'THE knowledge GARDEN',
              }),
              e.jsx('p', {
                style: {
                  fontFamily: "'Special Elite', serif",
                  fontSize: 15,
                  color: 'var(--zine-ink-faded, #2c2820)',
                  lineHeight: 1.7,
                  maxWidth: 520,
                  margin: 0,
                  borderLeft: '4px solid var(--zine-ink, #0e0c07)',
                  paddingLeft: '1rem',
                },
                children:
                  'Search and browse notes on software engineering, books, productivity, and more.',
              }),
            ],
          }),
        ],
      }),
  },
  n = {
    name: 'Note route context',
    render: () =>
      e.jsxs('div', {
        style: { minHeight: '50vh', background: 'var(--ds-page, #ede5c8)' },
        children: [
          e.jsx('garden-nav', { brand: 'garden.dev', links: v, homeHref: '/notes/' }),
          e.jsx('main', {
            style: { padding: '1.5rem' },
            children: e.jsxs('div', {
              style: {
                maxWidth: 900,
                margin: '0 auto',
                background: 'var(--zine-paper, #f2edd7)',
                border: '3px solid var(--zine-ink, #0e0c07)',
                padding: '1.5rem',
              },
              children: [
                e.jsx('garden-breadcrumb', {
                  items: [
                    { label: 'home', href: '/notes/' },
                    { label: 'books', href: '/notes/books/' },
                    { label: 'A Philosophy of Software Design' },
                  ],
                }),
                e.jsx('h1', {
                  style: {
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: 40,
                    letterSpacing: '0.04em',
                    margin: '1.25rem 0 0.75rem',
                    color: 'var(--zine-ink, #0e0c07)',
                  },
                  children: 'A Philosophy of Software Design',
                }),
                e.jsx('p', {
                  style: {
                    fontFamily: "'Special Elite', serif",
                    fontSize: 15,
                    color: 'var(--zine-ink-faded, #2c2820)',
                    lineHeight: 1.7,
                    margin: 0,
                  },
                  children:
                    'Real page-context preview for the shared layout: the navigation stays sticky, keeps the notes link active, and sits above route-owned content.',
                }),
              ],
            }),
          }),
        ],
      }),
  };
o.parameters = {
  ...o.parameters,
  docs: {
    ...((t = o.parameters) === null || t === void 0 ? void 0 : t.docs),
    source: {
      originalSource: `{
  render
}`,
      ...((i = o.parameters) === null || i === void 0 || (a = i.docs) === null || a === void 0
        ? void 0
        : a.source),
    },
  },
};
r.parameters = {
  ...r.parameters,
  docs: {
    ...((s = r.parameters) === null || s === void 0 ? void 0 : s.docs),
    source: {
      originalSource: `{
  name: 'Home route context',
  render: () => <div style={{
    minHeight: '50vh',
    background: 'var(--ds-page, #ede5c8)'
  }}>
      <garden-nav brand="garden.dev" links={siteLinks} homeHref="/notes/" />
      <section aria-label="Site introduction" style={{
      background: 'var(--zine-paper, #f2edd7)',
      border: '3px solid var(--zine-ink, #0e0c07)',
      borderTop: 'none',
      padding: '2.5rem 1.5rem 3rem'
    }}>
        <div style={{
        fontFamily: "'Cutive Mono', monospace",
        fontSize: 11,
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        color: 'var(--zine-red, #d42b2b)',
        marginBottom: '0.5rem'
      }}>
          /// NEU-BRUTALISM × PUNK ZINE × SCRAPBOOK
        </div>
        <h1 style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: 'clamp(36px, 6vw, 64px)',
        letterSpacing: '0.04em',
        color: 'var(--zine-ink, #0e0c07)',
        margin: '0 0 0.75rem',
        lineHeight: 1
      }}>
          THE knowledge GARDEN
        </h1>
        <p style={{
        fontFamily: "'Special Elite', serif",
        fontSize: 15,
        color: 'var(--zine-ink-faded, #2c2820)',
        lineHeight: 1.7,
        maxWidth: 520,
        margin: 0,
        borderLeft: '4px solid var(--zine-ink, #0e0c07)',
        paddingLeft: '1rem'
      }}>
          Search and browse notes on software engineering, books, productivity, and more.
        </p>
      </section>
    </div>
}`,
      ...((l = r.parameters) === null || l === void 0 || (d = l.docs) === null || d === void 0
        ? void 0
        : d.source),
    },
  },
};
n.parameters = {
  ...n.parameters,
  docs: {
    ...((c = n.parameters) === null || c === void 0 ? void 0 : c.docs),
    source: {
      originalSource: `{
  name: 'Note route context',
  render: () => <div style={{
    minHeight: '50vh',
    background: 'var(--ds-page, #ede5c8)'
  }}>
      <garden-nav brand="garden.dev" links={siteLinks} homeHref="/notes/" />
      <main style={{
      padding: '1.5rem'
    }}>
        <div style={{
        maxWidth: 900,
        margin: '0 auto',
        background: 'var(--zine-paper, #f2edd7)',
        border: '3px solid var(--zine-ink, #0e0c07)',
        padding: '1.5rem'
      }}>
          <garden-breadcrumb items={[{
          label: 'home',
          href: '/notes/'
        }, {
          label: 'books',
          href: '/notes/books/'
        }, {
          label: 'A Philosophy of Software Design'
        }]} />
          <h1 style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: 40,
          letterSpacing: '0.04em',
          margin: '1.25rem 0 0.75rem',
          color: 'var(--zine-ink, #0e0c07)'
        }}>
            A Philosophy of Software Design
          </h1>
          <p style={{
          fontFamily: "'Special Elite', serif",
          fontSize: 15,
          color: 'var(--zine-ink-faded, #2c2820)',
          lineHeight: 1.7,
          margin: 0
        }}>
            Real page-context preview for the shared layout: the navigation stays sticky, keeps the
            notes link active, and sits above route-owned content.
          </p>
        </div>
      </main>
    </div>
}`,
      ...((p = n.parameters) === null || p === void 0 || (m = p.docs) === null || m === void 0
        ? void 0
        : m.source),
    },
  },
};
const x = ['Default', 'HomeRouteContext', 'NoteRouteContext'];
export {
  o as Default,
  r as HomeRouteContext,
  n as NoteRouteContext,
  x as __namedExportsOrder,
  k as default,
};
