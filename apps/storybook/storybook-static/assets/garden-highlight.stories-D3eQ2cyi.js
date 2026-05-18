import { j as e } from './iframe-BMk1oW9O.js';
import './preload-helper-C1FmrZbK.js';
var s, d, g, h, o, p, c, u, m, v, y, _, x, f, j;
const r = {
    fontFamily: "'Special Elite', serif",
    fontSize: 15,
    color: 'var(--zine-ink-faded, #2c2820)',
  },
  H = {
    title: 'Atoms/GardenHighlight',
    tags: ['autodocs'],
    argTypes: {
      variant: {
        control: { type: 'select' },
        options: ['default', 'blue', 'red', 'green'],
        description: 'Visual variant — `default` (yellow), `blue`, `red`, `green`',
      },
      label: { control: 'text', description: 'Highlighted text (slot content)' },
    },
    args: { variant: 'default', label: 'raw, loud, opinionated' },
    parameters: {
      backgrounds: { default: 'paper' },
      docs: {
        description: {
          component:
            'Atom: zine-edition text highlighter. Background highlight with inline display. Uses the canonical shared `--zine-*` tokens.',
        },
      },
    },
  },
  i = {
    name: 'Default (yellow)',
    render: (b) =>
      e.jsxs('p', {
        style: r,
        children: [
          'A ',
          e.jsx('garden-highlight', { children: b.label }),
          ' design language for long-form knowledge sites.',
        ],
      }),
  },
  a = {
    render: () =>
      e.jsxs('p', {
        style: r,
        children: [
          'This is ',
          e.jsx('garden-highlight', { variant: 'blue', children: 'blue highlighted text' }),
          ' in a sentence.',
        ],
      }),
  },
  l = {
    render: () =>
      e.jsxs('p', {
        style: r,
        children: [
          'Warning: ',
          e.jsx('garden-highlight', { variant: 'red', children: 'Breaking change ahead' }),
        ],
      }),
  },
  t = {
    render: () =>
      e.jsxs('p', {
        style: r,
        children: [
          'The ',
          e.jsx('garden-highlight', { variant: 'green', children: 'grid is the system.' }),
        ],
      }),
  },
  n = {
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
          e.jsxs('p', {
            style: r,
            children: ['Default: ', e.jsx('garden-highlight', { children: 'yellow highlight' })],
          }),
          e.jsxs('p', {
            style: r,
            children: [
              'Blue: ',
              e.jsx('garden-highlight', { variant: 'blue', children: 'blue highlight' }),
            ],
          }),
          e.jsxs('p', {
            style: r,
            children: [
              'Red: ',
              e.jsx('garden-highlight', { variant: 'red', children: 'red highlight' }),
            ],
          }),
          e.jsxs('p', {
            style: r,
            children: [
              'Green: ',
              e.jsx('garden-highlight', { variant: 'green', children: 'green highlight' }),
            ],
          }),
        ],
      }),
  };
i.parameters = {
  ...i.parameters,
  docs: {
    ...((s = i.parameters) === null || s === void 0 ? void 0 : s.docs),
    source: {
      originalSource: `{
  name: 'Default (yellow)',
  render: args => <p style={proseHighlightStyle}>
      A <garden-highlight>{args.label}</garden-highlight> design language for long-form knowledge
      sites.
    </p>
}`,
      ...((g = i.parameters) === null || g === void 0 || (d = g.docs) === null || d === void 0
        ? void 0
        : d.source),
    },
  },
};
a.parameters = {
  ...a.parameters,
  docs: {
    ...((h = a.parameters) === null || h === void 0 ? void 0 : h.docs),
    source: {
      originalSource: `{
  render: () => <p style={proseHighlightStyle}>
      This is <garden-highlight variant="blue">blue highlighted text</garden-highlight> in a
      sentence.
    </p>
}`,
      ...((p = a.parameters) === null || p === void 0 || (o = p.docs) === null || o === void 0
        ? void 0
        : o.source),
    },
  },
};
l.parameters = {
  ...l.parameters,
  docs: {
    ...((c = l.parameters) === null || c === void 0 ? void 0 : c.docs),
    source: {
      originalSource: `{
  render: () => <p style={proseHighlightStyle}>
      Warning: <garden-highlight variant="red">Breaking change ahead</garden-highlight>
    </p>
}`,
      ...((m = l.parameters) === null || m === void 0 || (u = m.docs) === null || u === void 0
        ? void 0
        : u.source),
    },
  },
};
t.parameters = {
  ...t.parameters,
  docs: {
    ...((v = t.parameters) === null || v === void 0 ? void 0 : v.docs),
    source: {
      originalSource: `{
  render: () => <p style={proseHighlightStyle}>
      The <garden-highlight variant="green">grid is the system.</garden-highlight>
    </p>
}`,
      ...((_ = t.parameters) === null || _ === void 0 || (y = _.docs) === null || y === void 0
        ? void 0
        : y.source),
    },
  },
};
n.parameters = {
  ...n.parameters,
  docs: {
    ...((x = n.parameters) === null || x === void 0 ? void 0 : x.docs),
    source: {
      originalSource: `{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    padding: '2rem',
    background: 'var(--zine-paper, #f2edd7)'
  }}>
      <p style={proseHighlightStyle}>
        Default: <garden-highlight>yellow highlight</garden-highlight>
      </p>
      <p style={proseHighlightStyle}>
        Blue: <garden-highlight variant="blue">blue highlight</garden-highlight>
      </p>
      <p style={proseHighlightStyle}>
        Red: <garden-highlight variant="red">red highlight</garden-highlight>
      </p>
      <p style={proseHighlightStyle}>
        Green: <garden-highlight variant="green">green highlight</garden-highlight>
      </p>
    </div>
}`,
      ...((j = n.parameters) === null || j === void 0 || (f = j.docs) === null || f === void 0
        ? void 0
        : f.source),
    },
  },
};
const k = ['Default', 'Blue', 'Red', 'Green', 'AllVariants'];
export {
  n as AllVariants,
  a as Blue,
  i as Default,
  t as Green,
  l as Red,
  k as __namedExportsOrder,
  H as default,
};
