import { j as e } from './iframe-BMk1oW9O.js';
import './preload-helper-C1FmrZbK.js';
var n, l, d, c, s, u, p, m, g, b, h, f;
const k = {
    title: 'Components/Blockquote',
    tags: ['autodocs'],
    argTypes: {
      variant: {
        control: { type: 'select' },
        options: ['default', 'accent'],
        description: 'Visual variant — `default` (zine paper), `accent` (red accent)',
      },
      cite: { control: 'text', description: 'Optional attribution for the quote' },
    },
    args: { variant: 'default', cite: '' },
    parameters: {
      backgrounds: { default: 'paper' },
      docs: {
        description: {
          component:
            'Zine-edition xerox blockquote. Left border, large quote mark, italic body, optional citation. Uses `--zine-ink` and `--zine-red` tokens.',
        },
      },
    },
  },
  t = {
    render: (i) =>
      e.jsx('garden-blockquote', {
        cite: i.cite,
        children: 'We are what we repeatedly do. Excellence, then, is not an act, but a habit.',
      }),
  },
  a = {
    args: { cite: 'Aristotle' },
    render: (i) =>
      e.jsx('garden-blockquote', {
        cite: i.cite,
        children: 'We are what we repeatedly do. Excellence, then, is not an act, but a habit.',
      }),
  },
  r = {
    render: () =>
      e.jsxs('div', {
        style: {
          maxWidth: 600,
          background: '#fafaf2',
          padding: '1.75rem',
          border: '3px solid #0e0c07',
          borderRight: '5px solid #0e0c07',
          borderBottom: '5px solid #0e0c07',
        },
        children: [
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
              e.jsx('span', {
                style: { background: '#f5c800', padding: '0 3px' },
                children: 'think better',
              }),
              ' by offloading memory to a trusted system.',
            ],
          }),
          e.jsx('garden-blockquote', {
            cite: 'Aristotle',
            children: 'We are what we repeatedly do. Excellence, then, is not an act, but a habit.',
          }),
        ],
      }),
  },
  o = {
    render: () =>
      e.jsxs('div', {
        style: {
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          padding: '2rem',
          background: 'var(--zine-paper, #f2edd7)',
        },
        children: [
          e.jsx('garden-blockquote', { children: 'Default blockquote without citation.' }),
          e.jsx('garden-blockquote', {
            cite: 'Author',
            children: 'Default blockquote with citation.',
          }),
        ],
      }),
  };
t.parameters = {
  ...t.parameters,
  docs: {
    ...((n = t.parameters) === null || n === void 0 ? void 0 : n.docs),
    source: {
      originalSource: `{
  render: args => <garden-blockquote cite={args.cite}>
      We are what we repeatedly do. Excellence, then, is not an act, but a habit.
    </garden-blockquote>
}`,
      ...((d = t.parameters) === null || d === void 0 || (l = d.docs) === null || l === void 0
        ? void 0
        : l.source),
    },
  },
};
a.parameters = {
  ...a.parameters,
  docs: {
    ...((c = a.parameters) === null || c === void 0 ? void 0 : c.docs),
    source: {
      originalSource: `{
  args: {
    cite: 'Aristotle'
  },
  render: args => <garden-blockquote cite={args.cite}>
      We are what we repeatedly do. Excellence, then, is not an act, but a habit.
    </garden-blockquote>
}`,
      ...((u = a.parameters) === null || u === void 0 || (s = u.docs) === null || s === void 0
        ? void 0
        : s.source),
    },
  },
};
r.parameters = {
  ...r.parameters,
  docs: {
    ...((p = r.parameters) === null || p === void 0 ? void 0 : p.docs),
    source: {
      originalSource: `{
  render: () => <div style={{
    maxWidth: 600,
    background: '#fafaf2',
    padding: '1.75rem',
    border: '3px solid #0e0c07',
    borderRight: '5px solid #0e0c07',
    borderBottom: '5px solid #0e0c07'
  }}>
      <p style={{
      fontFamily: "'Special Elite', serif",
      fontSize: 14,
      color: '#2c2820',
      lineHeight: 1.8,
      margin: '0 0 1rem'
    }}>
        The goal isn't to remember everything — it's to
        <span style={{
        background: '#f5c800',
        padding: '0 3px'
      }}>think better</span> by offloading
        memory to a trusted system.
      </p>
      <garden-blockquote cite="Aristotle">
        We are what we repeatedly do. Excellence, then, is not an act, but a habit.
      </garden-blockquote>
    </div>
}`,
      ...((g = r.parameters) === null || g === void 0 || (m = g.docs) === null || m === void 0
        ? void 0
        : m.source),
    },
  },
};
o.parameters = {
  ...o.parameters,
  docs: {
    ...((b = o.parameters) === null || b === void 0 ? void 0 : b.docs),
    source: {
      originalSource: `{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    padding: '2rem',
    background: 'var(--zine-paper, #f2edd7)'
  }}>
      <garden-blockquote>Default blockquote without citation.</garden-blockquote>
      <garden-blockquote cite="Author">Default blockquote with citation.</garden-blockquote>
    </div>
}`,
      ...((f = o.parameters) === null || f === void 0 || (h = f.docs) === null || h === void 0
        ? void 0
        : h.source),
    },
  },
};
const _ = ['Default', 'WithCitation', 'InArticle', 'AllVariants'];
export {
  o as AllVariants,
  t as Default,
  r as InArticle,
  a as WithCitation,
  _ as __namedExportsOrder,
  k as default,
};
