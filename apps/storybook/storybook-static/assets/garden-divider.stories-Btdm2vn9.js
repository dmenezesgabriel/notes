import { j as e } from './iframe-BMk1oW9O.js';
import './preload-helper-C1FmrZbK.js';
var o, s, t, l, v, c, m, p, u, g, f, _;
const D = {
    title: 'Atoms/GardenDivider',
    tags: ['autodocs'],
    argTypes: {
      variant: {
        control: { type: 'select' },
        options: ['dashed', 'solid', 'red'],
        description: 'Visual variant — `dashed` (default, dotted), `solid`, `red`',
      },
    },
    args: { variant: 'dashed' },
    parameters: {
      backgrounds: { default: 'paper' },
      docs: {
        description: {
          component:
            'Atom: zine-edition hand-drawn style divider. Dashed (default), solid, or red variants. Uses the canonical shared `--zine-*` tokens.',
        },
      },
    },
  },
  r = { name: 'Dashed (default)', render: () => e.jsx('garden-divider', {}) },
  a = {
    args: { variant: 'solid' },
    render: (n) => e.jsx('garden-divider', { variant: n.variant }),
  },
  d = { args: { variant: 'red' }, render: (n) => e.jsx('garden-divider', { variant: n.variant }) },
  i = {
    render: () =>
      e.jsxs('div', {
        style: {
          padding: '2rem',
          background: 'var(--zine-paper, #f2edd7)',
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
        },
        children: [
          e.jsxs('div', {
            children: [
              e.jsx('strong', {
                style: {
                  fontFamily: "'Cutive Mono', monospace",
                  fontSize: '11px',
                  color: 'var(--zine-muted, #6b6050)',
                },
                children: 'DASHED (default)',
              }),
              e.jsx('garden-divider', {}),
            ],
          }),
          e.jsxs('div', {
            children: [
              e.jsx('strong', {
                style: {
                  fontFamily: "'Cutive Mono', monospace",
                  fontSize: '11px',
                  color: 'var(--zine-muted, #6b6050)',
                },
                children: 'SOLID',
              }),
              e.jsx('garden-divider', { variant: 'solid' }),
            ],
          }),
          e.jsxs('div', {
            children: [
              e.jsx('strong', {
                style: {
                  fontFamily: "'Cutive Mono', monospace",
                  fontSize: '11px',
                  color: 'var(--zine-muted, #6b6050)',
                },
                children: 'RED',
              }),
              e.jsx('garden-divider', { variant: 'red' }),
            ],
          }),
        ],
      }),
  };
r.parameters = {
  ...r.parameters,
  docs: {
    ...((o = r.parameters) === null || o === void 0 ? void 0 : o.docs),
    source: {
      originalSource: `{
  name: 'Dashed (default)',
  render: () => <garden-divider></garden-divider>
}`,
      ...((t = r.parameters) === null || t === void 0 || (s = t.docs) === null || s === void 0
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
  args: {
    variant: 'solid'
  },
  render: args => <garden-divider variant={args.variant}></garden-divider>
}`,
      ...((c = a.parameters) === null || c === void 0 || (v = c.docs) === null || v === void 0
        ? void 0
        : v.source),
    },
  },
};
d.parameters = {
  ...d.parameters,
  docs: {
    ...((m = d.parameters) === null || m === void 0 ? void 0 : m.docs),
    source: {
      originalSource: `{
  args: {
    variant: 'red'
  },
  render: args => <garden-divider variant={args.variant}></garden-divider>
}`,
      ...((u = d.parameters) === null || u === void 0 || (p = u.docs) === null || p === void 0
        ? void 0
        : p.source),
    },
  },
};
i.parameters = {
  ...i.parameters,
  docs: {
    ...((g = i.parameters) === null || g === void 0 ? void 0 : g.docs),
    source: {
      originalSource: `{
  render: () => <div style={{
    padding: '2rem',
    background: 'var(--zine-paper, #f2edd7)',
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  }}>
      <div>
        <strong style={{
        fontFamily: "'Cutive Mono', monospace",
        fontSize: '11px',
        color: 'var(--zine-muted, #6b6050)'
      }}>
          DASHED (default)
        </strong>
        <garden-divider></garden-divider>
      </div>
      <div>
        <strong style={{
        fontFamily: "'Cutive Mono', monospace",
        fontSize: '11px',
        color: 'var(--zine-muted, #6b6050)'
      }}>
          SOLID
        </strong>
        <garden-divider variant="solid"></garden-divider>
      </div>
      <div>
        <strong style={{
        fontFamily: "'Cutive Mono', monospace",
        fontSize: '11px',
        color: 'var(--zine-muted, #6b6050)'
      }}>
          RED
        </strong>
        <garden-divider variant="red"></garden-divider>
      </div>
    </div>
}`,
      ...((_ = i.parameters) === null || _ === void 0 || (f = _.docs) === null || f === void 0
        ? void 0
        : f.source),
    },
  },
};
const S = ['Default', 'Solid', 'Red', 'AllVariants'];
export {
  i as AllVariants,
  r as Default,
  d as Red,
  a as Solid,
  S as __namedExportsOrder,
  D as default,
};
