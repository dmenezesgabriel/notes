import { j as e } from './iframe-BMk1oW9O.js';
import './preload-helper-C1FmrZbK.js';
var n, i, l, c, p, m, v, u, h, g, b, f, x, _, y, S, k, j;
const K = {
    title: 'Components/GardenSearch',
    tags: ['autodocs'],
    argTypes: {
      placeholder: {
        control: 'text',
        description: 'Input placeholder text (also used as `aria-label`)',
      },
      kbd: { control: 'text', description: 'Keyboard shortcut badge text. Leave empty to hide.' },
      value: { control: 'text', description: 'Current search value' },
    },
    args: { placeholder: 'Search notes, wiki, projects…', kbd: '⌘K', value: '' },
    parameters: {
      docs: {
        description: {
          component:
            'Typewriter search bar used by the home discovery slice and navigation actions. White background, thick offset border, Cutive Mono font, blinking cursor. Fires `garden-search` CustomEvent `{ detail: { query } }` on every keystroke.',
        },
      },
    },
  },
  z = ({ placeholder: N, kbd: w, value: I }) =>
    e.jsx('garden-search', { placeholder: N, kbd: w, value: I, style: { maxWidth: 480 } }),
  r = { render: z },
  a = { name: 'Without shortcut badge', args: { kbd: '' }, render: z },
  o = { name: 'Pre-filled value', args: { value: 'zettelkasten' }, render: z },
  t = {
    name: 'In zine sheet',
    render: () =>
      e.jsxs('div', {
        style: {
          background: 'var(--zine-paper, #f2edd7)',
          border: '3px solid #0e0c07',
          borderRight: '5px solid #0e0c07',
          borderBottom: '5px solid #0e0c07',
          padding: '1.5rem',
          maxWidth: 560,
          position: 'relative',
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
              ' SEARCH',
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
          e.jsx('garden-search', { placeholder: 'Search notes, wiki, projects…', kbd: '⌘K' }),
        ],
      }),
  },
  s = {
    name: 'Home hero search',
    render: () =>
      e.jsxs('div', {
        style: {
          background: 'var(--zine-paper, #f2edd7)',
          border: '3px solid var(--zine-ink, #0e0c07)',
          borderTop: 'none',
          padding: '2rem 1.5rem 2.5rem',
          maxWidth: 620,
        },
        children: [
          e.jsx('p', {
            style: {
              fontFamily: 'var(--font-body, "Special Elite", serif)',
              fontSize: 15,
              color: 'var(--zine-ink-faded, #2c2820)',
              margin: '0 0 1rem',
            },
            children: 'Search notes across books, software engineering, productivity, and design.',
          }),
          e.jsx('garden-search', {
            placeholder: 'Search notes…',
            kbd: '⌘K',
            style: { width: '100%' },
          }),
        ],
      }),
  },
  d = {
    name: 'Slotted in garden-nav',
    parameters: { layout: 'fullscreen' },
    render: () =>
      e.jsx('div', {
        style: { background: 'var(--ds-page, #11111b)' },
        children: e.jsx('garden-nav', {
          brand: 'GARDEN.DEV',
          links: [{ label: 'NOTES', href: '/notes', active: !0 }],
          children: e.jsx('garden-search', {
            slot: 'actions',
            placeholder: 'Search…',
            kbd: '⌘K',
            style: { width: 260 },
          }),
        }),
      }),
  };
r.parameters = {
  ...r.parameters,
  docs: {
    ...((n = r.parameters) === null || n === void 0 ? void 0 : n.docs),
    source: {
      originalSource: `{
  render
}`,
      ...((l = r.parameters) === null || l === void 0 || (i = l.docs) === null || i === void 0
        ? void 0
        : i.source),
    },
  },
};
a.parameters = {
  ...a.parameters,
  docs: {
    ...((c = a.parameters) === null || c === void 0 ? void 0 : c.docs),
    source: {
      originalSource: `{
  name: 'Without shortcut badge',
  args: {
    kbd: ''
  },
  render
}`,
      ...((m = a.parameters) === null || m === void 0 || (p = m.docs) === null || p === void 0
        ? void 0
        : p.source),
    },
  },
};
o.parameters = {
  ...o.parameters,
  docs: {
    ...((v = o.parameters) === null || v === void 0 ? void 0 : v.docs),
    source: {
      originalSource: `{
  name: 'Pre-filled value',
  args: {
    value: 'zettelkasten'
  },
  render
}`,
      ...((h = o.parameters) === null || h === void 0 || (u = h.docs) === null || u === void 0
        ? void 0
        : u.source),
    },
  },
};
t.parameters = {
  ...t.parameters,
  docs: {
    ...((g = t.parameters) === null || g === void 0 ? void 0 : g.docs),
    source: {
      originalSource: `{
  name: 'In zine sheet',
  render: () => <div style={{
    background: 'var(--zine-paper, #f2edd7)',
    border: '3px solid #0e0c07',
    borderRight: '5px solid #0e0c07',
    borderBottom: '5px solid #0e0c07',
    padding: '1.5rem',
    maxWidth: 560,
    position: 'relative'
  }}>
      {/* yellow pin */}
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
      }}>//</span> SEARCH
        <div style={{
        flex: 1,
        height: 3,
        background: 'var(--zine-ink, #0e0c07)',
        marginLeft: 8
      }} />
      </div>
      <garden-search placeholder="Search notes, wiki, projects…" kbd="⌘K" />
    </div>
}`,
      ...((f = t.parameters) === null || f === void 0 || (b = f.docs) === null || b === void 0
        ? void 0
        : b.source),
    },
  },
};
s.parameters = {
  ...s.parameters,
  docs: {
    ...((x = s.parameters) === null || x === void 0 ? void 0 : x.docs),
    source: {
      originalSource: `{
  name: 'Home hero search',
  render: () => <div style={{
    background: 'var(--zine-paper, #f2edd7)',
    border: '3px solid var(--zine-ink, #0e0c07)',
    borderTop: 'none',
    padding: '2rem 1.5rem 2.5rem',
    maxWidth: 620
  }}>
      <p style={{
      fontFamily: 'var(--font-body, "Special Elite", serif)',
      fontSize: 15,
      color: 'var(--zine-ink-faded, #2c2820)',
      margin: '0 0 1rem'
    }}>
        Search notes across books, software engineering, productivity, and design.
      </p>
      <garden-search placeholder="Search notes…" kbd="⌘K" style={{
      width: '100%'
    }} />
    </div>
}`,
      ...((y = s.parameters) === null || y === void 0 || (_ = y.docs) === null || _ === void 0
        ? void 0
        : _.source),
    },
  },
};
d.parameters = {
  ...d.parameters,
  docs: {
    ...((S = d.parameters) === null || S === void 0 ? void 0 : S.docs),
    source: {
      originalSource: `{
  name: 'Slotted in garden-nav',
  parameters: {
    layout: 'fullscreen'
  },
  render: () => <div style={{
    background: 'var(--ds-page, #11111b)'
  }}>
      <garden-nav brand="GARDEN.DEV" links={[{
      label: 'NOTES',
      href: '/notes',
      active: true
    }]}>
        <garden-search slot="actions" placeholder="Search…" kbd="⌘K" style={{
        width: 260
      }} />
      </garden-nav>
    </div>
}`,
      ...((j = d.parameters) === null || j === void 0 || (k = j.docs) === null || k === void 0
        ? void 0
        : k.source),
    },
  },
};
const W = ['Default', 'NoKbd', 'WithValue', 'InZineSheet', 'HomeHeroSearch', 'InNav'];
export {
  r as Default,
  s as HomeHeroSearch,
  d as InNav,
  t as InZineSheet,
  a as NoKbd,
  o as WithValue,
  W as __namedExportsOrder,
  K as default,
};
