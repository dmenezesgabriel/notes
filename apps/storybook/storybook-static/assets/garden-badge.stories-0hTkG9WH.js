import { j as e } from './iframe-BMk1oW9O.js';
import './preload-helper-C1FmrZbK.js';
var s, c, g, p, m, v, u, b, _, S, E, x, f, A, h, y, k, z, N, T, B;
const L = {
    title: 'Atoms/GardenBadge',
    tags: ['autodocs'],
    argTypes: {
      variant: {
        control: 'radio',
        options: ['accent', 'sage', 'muted', 'yellow', 'blue'],
        description:
          'Color variant — `accent` (red), `sage` (green), `muted` (grey), `yellow`, `blue`',
        table: {
          type: { summary: 'accent | sage | muted | yellow | blue' },
          defaultValue: { summary: 'accent' },
        },
      },
      label: { control: 'text', description: 'Label text (slot content)' },
    },
    args: { variant: 'accent', label: 'NEU-BRUTALISM × PUNK ZINE' },
    parameters: {
      docs: {
        description: {
          component:
            'Atom: eyebrow / section-label text placed above headings. Small caps, letter-spaced, red by default. Prefixed with `///` separator in the zine style and themed by the canonical shared tokens.',
        },
      },
    },
  },
  a = ({ variant: M, label: R }) => e.jsx('garden-badge', { variant: M, children: R }),
  r = { render: a },
  n = { args: { variant: 'sage', label: 'KNOWLEDGE MANAGEMENT' }, render: a },
  d = { args: { variant: 'muted', label: 'MAY 2026' }, render: a },
  i = { args: { variant: 'yellow', label: 'FEATURED' }, render: a },
  o = { args: { variant: 'blue', label: 'NEXT.JS SSG' }, render: a },
  l = {
    name: 'Above a heading',
    render: () =>
      e.jsxs('div', {
        style: {
          background: 'var(--zine-paper, #f2edd7)',
          border: '3px solid var(--zine-ink, #0e0c07)',
          borderRight: '5px solid var(--zine-ink, #0e0c07)',
          borderBottom: '5px solid var(--zine-ink, #0e0c07)',
          padding: '1.5rem',
          maxWidth: 480,
        },
        children: [
          e.jsx('garden-badge', {
            style: { display: 'block', marginBottom: 10 },
            children: 'DESIGN SYSTEM · V0.1',
          }),
          e.jsx('h1', {
            style: {
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 32,
              letterSpacing: '0.04em',
              color: 'var(--zine-ink, #0e0c07)',
              margin: '0 0 0.5rem',
              lineHeight: 1,
            },
            children: 'NEU-BRUTALIST COMPONENT LIBRARY',
          }),
          e.jsx('p', {
            style: {
              fontFamily: "'Special Elite', serif",
              fontSize: 14,
              color: 'var(--zine-ink-faded, #2c2820)',
              lineHeight: 1.7,
              margin: 0,
              borderLeft: '4px solid var(--zine-ink, #0e0c07)',
              paddingLeft: '1rem',
            },
            children: 'A raw, loud, opinionated design language for long-form knowledge sites.',
          }),
        ],
      }),
  },
  t = {
    name: 'All variants',
    render: () =>
      e.jsxs('div', {
        style: {
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
          padding: 24,
          background: 'var(--zine-paper, #f2edd7)',
          border: '3px solid var(--zine-ink, #0e0c07)',
          borderRight: '5px solid var(--zine-ink, #0e0c07)',
          borderBottom: '5px solid var(--zine-ink, #0e0c07)',
          maxWidth: 360,
        },
        children: [
          e.jsx('garden-badge', { variant: 'accent', children: 'LIT ELEMENTS' }),
          e.jsx('garden-badge', { variant: 'blue', children: 'NEXT.JS SSG' }),
          e.jsx('garden-badge', { variant: 'yellow', children: 'STORYBOOK READY' }),
          e.jsx('garden-badge', { variant: 'sage', children: 'RESPONSIVE' }),
          e.jsx('garden-badge', { variant: 'muted', children: 'MAY 2026' }),
        ],
      }),
  };
r.parameters = {
  ...r.parameters,
  docs: {
    ...((s = r.parameters) === null || s === void 0 ? void 0 : s.docs),
    source: {
      originalSource: `{
  render
}`,
      ...((g = r.parameters) === null || g === void 0 || (c = g.docs) === null || c === void 0
        ? void 0
        : c.source),
    },
  },
};
n.parameters = {
  ...n.parameters,
  docs: {
    ...((p = n.parameters) === null || p === void 0 ? void 0 : p.docs),
    source: {
      originalSource: `{
  args: {
    variant: 'sage',
    label: 'KNOWLEDGE MANAGEMENT'
  },
  render
}`,
      ...((v = n.parameters) === null || v === void 0 || (m = v.docs) === null || m === void 0
        ? void 0
        : m.source),
    },
  },
};
d.parameters = {
  ...d.parameters,
  docs: {
    ...((u = d.parameters) === null || u === void 0 ? void 0 : u.docs),
    source: {
      originalSource: `{
  args: {
    variant: 'muted',
    label: 'MAY 2026'
  },
  render
}`,
      ...((_ = d.parameters) === null || _ === void 0 || (b = _.docs) === null || b === void 0
        ? void 0
        : b.source),
    },
  },
};
i.parameters = {
  ...i.parameters,
  docs: {
    ...((S = i.parameters) === null || S === void 0 ? void 0 : S.docs),
    source: {
      originalSource: `{
  args: {
    variant: 'yellow',
    label: 'FEATURED'
  },
  render
}`,
      ...((x = i.parameters) === null || x === void 0 || (E = x.docs) === null || E === void 0
        ? void 0
        : E.source),
    },
  },
};
o.parameters = {
  ...o.parameters,
  docs: {
    ...((f = o.parameters) === null || f === void 0 ? void 0 : f.docs),
    source: {
      originalSource: `{
  args: {
    variant: 'blue',
    label: 'NEXT.JS SSG'
  },
  render
}`,
      ...((h = o.parameters) === null || h === void 0 || (A = h.docs) === null || A === void 0
        ? void 0
        : A.source),
    },
  },
};
l.parameters = {
  ...l.parameters,
  docs: {
    ...((y = l.parameters) === null || y === void 0 ? void 0 : y.docs),
    source: {
      originalSource: `{
  name: 'Above a heading',
  render: () => <div style={{
    background: 'var(--zine-paper, #f2edd7)',
    border: '3px solid var(--zine-ink, #0e0c07)',
    borderRight: '5px solid var(--zine-ink, #0e0c07)',
    borderBottom: '5px solid var(--zine-ink, #0e0c07)',
    padding: '1.5rem',
    maxWidth: 480
  }}>
      <garden-badge style={{
      display: 'block',
      marginBottom: 10
    }}>
        DESIGN SYSTEM · V0.1
      </garden-badge>
      <h1 style={{
      fontFamily: "'Bebas Neue', sans-serif",
      fontSize: 32,
      letterSpacing: '0.04em',
      color: 'var(--zine-ink, #0e0c07)',
      margin: '0 0 0.5rem',
      lineHeight: 1
    }}>
        NEU-BRUTALIST COMPONENT LIBRARY
      </h1>
      <p style={{
      fontFamily: "'Special Elite', serif",
      fontSize: 14,
      color: 'var(--zine-ink-faded, #2c2820)',
      lineHeight: 1.7,
      margin: 0,
      borderLeft: '4px solid var(--zine-ink, #0e0c07)',
      paddingLeft: '1rem'
    }}>
        A raw, loud, opinionated design language for long-form knowledge sites.
      </p>
    </div>
}`,
      ...((z = l.parameters) === null || z === void 0 || (k = z.docs) === null || k === void 0
        ? void 0
        : k.source),
    },
  },
};
t.parameters = {
  ...t.parameters,
  docs: {
    ...((N = t.parameters) === null || N === void 0 ? void 0 : N.docs),
    source: {
      originalSource: `{
  name: 'All variants',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    padding: 24,
    background: 'var(--zine-paper, #f2edd7)',
    border: '3px solid var(--zine-ink, #0e0c07)',
    borderRight: '5px solid var(--zine-ink, #0e0c07)',
    borderBottom: '5px solid var(--zine-ink, #0e0c07)',
    maxWidth: 360
  }}>
      <garden-badge variant="accent">LIT ELEMENTS</garden-badge>
      <garden-badge variant="blue">NEXT.JS SSG</garden-badge>
      <garden-badge variant="yellow">STORYBOOK READY</garden-badge>
      <garden-badge variant="sage">RESPONSIVE</garden-badge>
      <garden-badge variant="muted">MAY 2026</garden-badge>
    </div>
}`,
      ...((B = t.parameters) === null || B === void 0 || (T = B.docs) === null || T === void 0
        ? void 0
        : T.source),
    },
  },
};
const D = ['Default', 'Sage', 'Muted', 'Yellow', 'Blue', 'AboveHeading', 'AllVariants'];
export {
  l as AboveHeading,
  t as AllVariants,
  o as Blue,
  r as Default,
  d as Muted,
  n as Sage,
  i as Yellow,
  D as __namedExportsOrder,
  L as default,
};
