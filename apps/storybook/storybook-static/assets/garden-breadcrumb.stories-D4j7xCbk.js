import { j as e } from './iframe-BMk1oW9O.js';
import './preload-helper-C1FmrZbK.js';
var t, s, i, l, d, m, c, p, b, u, g, h;
const k = {
    title: 'Components/GardenBreadcrumb',
    tags: ['autodocs'],
    argTypes: {
      items: {
        control: 'object',
        description:
          'Array of `{ label, href? }`. The last item is always the current page (`aria-current="page"` on its span, no link).',
      },
    },
    args: {
      items: [
        { label: 'home', href: '/' },
        { label: 'notes', href: '/notes' },
        { label: 'design system' },
      ],
    },
    parameters: {
      docs: {
        description: {
          component:
            'Accessible navigation trail. Mono font, white background, hard border, red `/` separators. Renders `<nav aria-label="Breadcrumb">` with an ordered list. Last item is automatically marked `aria-current="page"` in Black Han Sans stamp style.',
        },
      },
    },
  },
  f = ({ items: v }) => e.jsx('garden-breadcrumb', { items: v }),
  r = { render: f },
  a = {
    name: 'Two levels',
    args: { items: [{ label: 'home', href: '/' }, { label: 'on building a second brain' }] },
    render: f,
  },
  n = {
    name: 'Deep path',
    args: {
      items: [
        { label: 'home', href: '/' },
        { label: 'wiki', href: '/wiki' },
        { label: 'pkm', href: '/wiki/pkm' },
        { label: 'zettelkasten' },
      ],
    },
    render: f,
  },
  o = {
    name: 'In article header',
    render: () =>
      e.jsxs('div', {
        style: {
          background: '#fafaf2',
          border: '3px solid #0e0c07',
          borderRight: '5px solid #0e0c07',
          borderBottom: '5px solid #0e0c07',
          padding: '1.5rem 1.75rem',
          maxWidth: 600,
          backgroundImage:
            'repeating-linear-gradient(to bottom, transparent, transparent 31px, rgba(100,120,200,0.1) 31px, rgba(100,120,200,0.1) 32px)',
        },
        children: [
          e.jsx('garden-breadcrumb', {
            items: [
              { label: 'home', href: '/' },
              { label: 'notes', href: '/notes' },
              { label: 'pkm', href: '/notes/pkm' },
              { label: 'On building a second brain' },
            ],
            style: { marginBottom: 14 },
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
          e.jsx('h1', {
            style: {
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 28,
              letterSpacing: '0.03em',
              color: '#0e0c07',
              margin: 0,
              lineHeight: 1.15,
            },
            children: 'On building a second brain',
          }),
        ],
      }),
  };
r.parameters = {
  ...r.parameters,
  docs: {
    ...((t = r.parameters) === null || t === void 0 ? void 0 : t.docs),
    source: {
      originalSource: `{
  render
}`,
      ...((i = r.parameters) === null || i === void 0 || (s = i.docs) === null || s === void 0
        ? void 0
        : s.source),
    },
  },
};
a.parameters = {
  ...a.parameters,
  docs: {
    ...((l = a.parameters) === null || l === void 0 ? void 0 : l.docs),
    source: {
      originalSource: `{
  name: 'Two levels',
  args: {
    items: [{
      label: 'home',
      href: '/'
    }, {
      label: 'on building a second brain'
    }]
  },
  render
}`,
      ...((m = a.parameters) === null || m === void 0 || (d = m.docs) === null || d === void 0
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
  name: 'Deep path',
  args: {
    items: [{
      label: 'home',
      href: '/'
    }, {
      label: 'wiki',
      href: '/wiki'
    }, {
      label: 'pkm',
      href: '/wiki/pkm'
    }, {
      label: 'zettelkasten'
    }]
  },
  render
}`,
      ...((b = n.parameters) === null || b === void 0 || (p = b.docs) === null || p === void 0
        ? void 0
        : p.source),
    },
  },
};
o.parameters = {
  ...o.parameters,
  docs: {
    ...((u = o.parameters) === null || u === void 0 ? void 0 : u.docs),
    source: {
      originalSource: `{
  name: 'In article header',
  render: () => <div style={{
    background: '#fafaf2',
    border: '3px solid #0e0c07',
    borderRight: '5px solid #0e0c07',
    borderBottom: '5px solid #0e0c07',
    padding: '1.5rem 1.75rem',
    maxWidth: 600,
    backgroundImage: 'repeating-linear-gradient(to bottom, transparent, transparent 31px, rgba(100,120,200,0.1) 31px, rgba(100,120,200,0.1) 32px)'
  }}>
      <garden-breadcrumb items={[{
      label: 'home',
      href: '/'
    }, {
      label: 'notes',
      href: '/notes'
    }, {
      label: 'pkm',
      href: '/notes/pkm'
    }, {
      label: 'On building a second brain'
    }]} style={{
      marginBottom: 14
    }} />
      <div style={{
      fontFamily: "'Cutive Mono', monospace",
      fontSize: 10,
      color: '#6b6050',
      marginBottom: 6,
      letterSpacing: '0.1em',
      textTransform: 'uppercase' as const
    }}>
        NOTES / PKM / SECOND-BRAIN
      </div>
      <h1 style={{
      fontFamily: "'Bebas Neue', sans-serif",
      fontSize: 28,
      letterSpacing: '0.03em',
      color: '#0e0c07',
      margin: 0,
      lineHeight: 1.15
    }}>
        On building a second brain
      </h1>
    </div>
}`,
      ...((h = o.parameters) === null || h === void 0 || (g = h.docs) === null || g === void 0
        ? void 0
        : g.source),
    },
  },
};
const y = ['Default', 'TwoLevels', 'DeepPath', 'InArticleHeader'];
export {
  n as DeepPath,
  r as Default,
  o as InArticleHeader,
  a as TwoLevels,
  y as __namedExportsOrder,
  k as default,
};
