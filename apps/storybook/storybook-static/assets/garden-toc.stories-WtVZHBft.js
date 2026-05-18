import { j as e } from './iframe-BMk1oW9O.js';
import './preload-helper-C1FmrZbK.js';
var n, o, s, l, d, c, m, p, g, u, b, h;
const f = [
    { id: 'intro', label: 'Introduction', active: !0 },
    { id: 'capture', label: 'The capture habit', depth: 2 },
    { id: 'organisation', label: 'Organisation', depth: 2 },
    { id: 'retrieval', label: 'Retrieval', depth: 2 },
    { id: 'see-also', label: 'See also' },
  ],
  C = {
    title: 'Components/GardenToc',
    tags: ['autodocs'],
    argTypes: {
      heading: {
        control: 'text',
        description: 'Marker-font header text above the list',
        table: { defaultValue: { summary: 'On this page' } },
      },
      items: {
        control: 'object',
        description:
          'Array of `{ id, label, depth?, active? }`. `depth: 2` indents the item. `active: true` highlights it in red with a checked box.',
      },
    },
    args: { heading: 'On this page', items: f },
    parameters: {
      docs: {
        description: {
          component:
            'Hand-drawn checklist TOC sidebar. Rotated slightly, Permanent Marker title, checkbox items. Active item highlighted in red with `✕` in the checkbox.',
        },
      },
    },
  },
  v = ({ heading: x, items: y }) =>
    e.jsx('garden-toc', { heading: x, items: y, style: { maxWidth: 200 } }),
  t = { render: v },
  a = { name: 'Custom heading', args: { heading: 'Contents' }, render: v },
  r = {
    name: 'Flat list',
    args: {
      items: [
        { id: 'intro', label: 'Introduction', active: !0 },
        { id: 'background', label: 'Background' },
        { id: 'implementation', label: 'Implementation' },
        { id: 'conclusion', label: 'Conclusion' },
      ],
    },
    render: v,
  },
  i = {
    name: 'In article layout',
    render: () =>
      e.jsxs('div', {
        style: {
          display: 'grid',
          gridTemplateColumns: '1fr 180px',
          gap: 16,
          padding: 16,
          maxWidth: 760,
          alignItems: 'start',
          background: 'var(--ds-page, #11111b)',
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
                  fontSize: 26,
                  letterSpacing: '0.03em',
                  color: '#0e0c07',
                  margin: '0 0 6px',
                  lineHeight: 1.15,
                },
                children: 'On building a second brain',
              }),
              e.jsx('p', {
                style: {
                  fontFamily: "'Special Elite', serif",
                  fontSize: 14,
                  color: '#2c2820',
                  lineHeight: 1.8,
                  margin: 0,
                },
                children:
                  "The goal isn't to remember everything — it's to think better by offloading memory to a trusted external system.",
              }),
            ],
          }),
          e.jsx('garden-toc', { items: f }),
        ],
      }),
  };
t.parameters = {
  ...t.parameters,
  docs: {
    ...((n = t.parameters) === null || n === void 0 ? void 0 : n.docs),
    source: {
      originalSource: `{
  render
}`,
      ...((s = t.parameters) === null || s === void 0 || (o = s.docs) === null || o === void 0
        ? void 0
        : o.source),
    },
  },
};
a.parameters = {
  ...a.parameters,
  docs: {
    ...((l = a.parameters) === null || l === void 0 ? void 0 : l.docs),
    source: {
      originalSource: `{
  name: 'Custom heading',
  args: {
    heading: 'Contents'
  },
  render
}`,
      ...((c = a.parameters) === null || c === void 0 || (d = c.docs) === null || d === void 0
        ? void 0
        : d.source),
    },
  },
};
r.parameters = {
  ...r.parameters,
  docs: {
    ...((m = r.parameters) === null || m === void 0 ? void 0 : m.docs),
    source: {
      originalSource: `{
  name: 'Flat list',
  args: {
    items: [{
      id: 'intro',
      label: 'Introduction',
      active: true
    }, {
      id: 'background',
      label: 'Background'
    }, {
      id: 'implementation',
      label: 'Implementation'
    }, {
      id: 'conclusion',
      label: 'Conclusion'
    }]
  },
  render
}`,
      ...((g = r.parameters) === null || g === void 0 || (p = g.docs) === null || p === void 0
        ? void 0
        : p.source),
    },
  },
};
i.parameters = {
  ...i.parameters,
  docs: {
    ...((u = i.parameters) === null || u === void 0 ? void 0 : u.docs),
    source: {
      originalSource: `{
  name: 'In article layout',
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: '1fr 180px',
    gap: 16,
    padding: 16,
    maxWidth: 760,
    alignItems: 'start',
    background: 'var(--ds-page, #11111b)'
  }}>
      {/* Reading pane */}
      <div style={{
      background: '#fafaf2',
      border: '3px solid #0e0c07',
      borderRight: '5px solid #0e0c07',
      borderBottom: '5px solid #0e0c07',
      padding: '1.75rem',
      backgroundImage: 'repeating-linear-gradient(to bottom, transparent, transparent 31px, rgba(100,120,200,0.1) 31px, rgba(100,120,200,0.1) 32px)'
    }}>
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
        fontSize: 26,
        letterSpacing: '0.03em',
        color: '#0e0c07',
        margin: '0 0 6px',
        lineHeight: 1.15
      }}>
          On building a second brain
        </h1>
        <p style={{
        fontFamily: "'Special Elite', serif",
        fontSize: 14,
        color: '#2c2820',
        lineHeight: 1.8,
        margin: 0
      }}>
          The goal isn&apos;t to remember everything — it&apos;s to think better by offloading
          memory to a trusted external system.
        </p>
      </div>

      {/* TOC */}
      <garden-toc items={defaultItems} />
    </div>
}`,
      ...((h = i.parameters) === null || h === void 0 || (b = h.docs) === null || b === void 0
        ? void 0
        : b.source),
    },
  },
};
const I = ['Default', 'CustomHeading', 'FlatList', 'InArticleLayout'];
export {
  a as CustomHeading,
  t as Default,
  r as FlatList,
  i as InArticleLayout,
  I as __namedExportsOrder,
  C as default,
};
