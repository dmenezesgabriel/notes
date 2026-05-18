import { j as e } from './iframe-BMk1oW9O.js';
import './preload-helper-C1FmrZbK.js';
var c, g, p, v, m, u, _, S, E, b, T, f, h, x, A, O, N, y, I, K, R, j, w, M;
const V = {
    title: 'Atoms/GardenTag',
    tags: ['autodocs'],
    argTypes: {
      variant: {
        control: 'radio',
        options: ['default', 'accent', 'sage', 'green', 'yellow', 'blue'],
        description:
          'Visual variant — `default` (zine paper), `accent` (red), `sage`/`green` (green), `yellow`, `blue`',
        table: {
          type: { summary: 'default | accent | sage | green | yellow | blue' },
          defaultValue: { summary: 'default' },
        },
      },
      label: { control: 'text', description: 'Tag text (slot content)' },
    },
    args: { variant: 'default', label: 'ZETTELKASTEN' },
    parameters: {
      docs: {
        description: {
          component:
            'Atom: compact stamp chip for categories and metadata. Hard borders, flat offset shadow, slight rotation — hand-stamped feel. Themes automatically via the canonical shared `--zine-*` CSS tokens.',
        },
      },
    },
  },
  a = ({ variant: B, label: L }) => e.jsx('garden-tag', { variant: B, children: L }),
  r = { render: a },
  n = { args: { variant: 'accent', label: 'LIT ELEMENTS' }, render: a },
  t = { args: { variant: 'blue', label: 'NEXT.JS SSG' }, render: a },
  o = { args: { variant: 'yellow', label: 'STORYBOOK' }, render: a },
  d = { args: { variant: 'sage', label: 'PKM' }, render: a },
  s = { args: { variant: 'green', label: 'RESPONSIVE' }, render: a },
  l = {
    name: 'All variants',
    render: () =>
      e.jsxs('div', {
        style: {
          display: 'flex',
          gap: 8,
          flexWrap: 'wrap',
          padding: 24,
          background: 'var(--zine-paper, #f2edd7)',
          border: '3px solid var(--zine-ink, #0e0c07)',
          borderRight: '5px solid var(--zine-ink, #0e0c07)',
          borderBottom: '5px solid var(--zine-ink, #0e0c07)',
          maxWidth: 500,
        },
        children: [
          e.jsx('garden-tag', { variant: 'accent', children: 'LIT ELEMENTS' }),
          e.jsx('garden-tag', { variant: 'blue', children: 'NEXT.JS SSG' }),
          e.jsx('garden-tag', { variant: 'yellow', children: 'STORYBOOK' }),
          e.jsx('garden-tag', { variant: 'green', children: 'RESPONSIVE' }),
          e.jsx('garden-tag', { variant: 'sage', children: 'PKM' }),
          e.jsx('garden-tag', { children: 'NO FRAMEWORK BS' }),
          e.jsx('garden-tag', { children: 'ZETTELKASTEN' }),
        ],
      }),
  },
  i = {
    name: 'In card footer',
    render: () =>
      e.jsxs('garden-card', {
        headline: 'On building a second brain',
        meta: '3 DAYS AGO · 8 MIN READ',
        excerpt: "The goal isn't to remember everything — it's to think better.",
        href: '/notes/second-brain',
        variant: 'featured',
        style: { maxWidth: 320 },
        children: [
          e.jsx('garden-tag', { slot: 'footer', variant: 'accent', children: 'PKM' }),
          e.jsx('garden-tag', { slot: 'footer', children: 'ZETTELKASTEN' }),
          e.jsx('garden-tag', { slot: 'footer', variant: 'blue', children: 'NOTES' }),
        ],
      }),
  };
r.parameters = {
  ...r.parameters,
  docs: {
    ...((c = r.parameters) === null || c === void 0 ? void 0 : c.docs),
    source: {
      originalSource: `{
  render
}`,
      ...((p = r.parameters) === null || p === void 0 || (g = p.docs) === null || g === void 0
        ? void 0
        : g.source),
    },
  },
};
n.parameters = {
  ...n.parameters,
  docs: {
    ...((v = n.parameters) === null || v === void 0 ? void 0 : v.docs),
    source: {
      originalSource: `{
  args: {
    variant: 'accent',
    label: 'LIT ELEMENTS'
  },
  render
}`,
      ...((u = n.parameters) === null || u === void 0 || (m = u.docs) === null || m === void 0
        ? void 0
        : m.source),
    },
  },
};
t.parameters = {
  ...t.parameters,
  docs: {
    ...((_ = t.parameters) === null || _ === void 0 ? void 0 : _.docs),
    source: {
      originalSource: `{
  args: {
    variant: 'blue',
    label: 'NEXT.JS SSG'
  },
  render
}`,
      ...((E = t.parameters) === null || E === void 0 || (S = E.docs) === null || S === void 0
        ? void 0
        : S.source),
    },
  },
};
o.parameters = {
  ...o.parameters,
  docs: {
    ...((b = o.parameters) === null || b === void 0 ? void 0 : b.docs),
    source: {
      originalSource: `{
  args: {
    variant: 'yellow',
    label: 'STORYBOOK'
  },
  render
}`,
      ...((f = o.parameters) === null || f === void 0 || (T = f.docs) === null || T === void 0
        ? void 0
        : T.source),
    },
  },
};
d.parameters = {
  ...d.parameters,
  docs: {
    ...((h = d.parameters) === null || h === void 0 ? void 0 : h.docs),
    source: {
      originalSource: `{
  args: {
    variant: 'sage',
    label: 'PKM'
  },
  render
}`,
      ...((A = d.parameters) === null || A === void 0 || (x = A.docs) === null || x === void 0
        ? void 0
        : x.source),
    },
  },
};
s.parameters = {
  ...s.parameters,
  docs: {
    ...((O = s.parameters) === null || O === void 0 ? void 0 : O.docs),
    source: {
      originalSource: `{
  args: {
    variant: 'green',
    label: 'RESPONSIVE'
  },
  render
}`,
      ...((y = s.parameters) === null || y === void 0 || (N = y.docs) === null || N === void 0
        ? void 0
        : N.source),
    },
  },
};
l.parameters = {
  ...l.parameters,
  docs: {
    ...((I = l.parameters) === null || I === void 0 ? void 0 : I.docs),
    source: {
      originalSource: `{
  name: 'All variants',
  render: () => <div style={{
    display: 'flex',
    gap: 8,
    flexWrap: 'wrap',
    padding: 24,
    background: 'var(--zine-paper, #f2edd7)',
    border: '3px solid var(--zine-ink, #0e0c07)',
    borderRight: '5px solid var(--zine-ink, #0e0c07)',
    borderBottom: '5px solid var(--zine-ink, #0e0c07)',
    maxWidth: 500
  }}>
      <garden-tag variant="accent">LIT ELEMENTS</garden-tag>
      <garden-tag variant="blue">NEXT.JS SSG</garden-tag>
      <garden-tag variant="yellow">STORYBOOK</garden-tag>
      <garden-tag variant="green">RESPONSIVE</garden-tag>
      <garden-tag variant="sage">PKM</garden-tag>
      <garden-tag>NO FRAMEWORK BS</garden-tag>
      <garden-tag>ZETTELKASTEN</garden-tag>
    </div>
}`,
      ...((R = l.parameters) === null || R === void 0 || (K = R.docs) === null || K === void 0
        ? void 0
        : K.source),
    },
  },
};
i.parameters = {
  ...i.parameters,
  docs: {
    ...((j = i.parameters) === null || j === void 0 ? void 0 : j.docs),
    source: {
      originalSource: `{
  name: 'In card footer',
  render: () => <garden-card headline="On building a second brain" meta="3 DAYS AGO · 8 MIN READ" excerpt="The goal isn't to remember everything — it's to think better." href="/notes/second-brain" variant="featured" style={{
    maxWidth: 320
  }}>
      <garden-tag slot="footer" variant="accent">
        PKM
      </garden-tag>
      <garden-tag slot="footer">ZETTELKASTEN</garden-tag>
      <garden-tag slot="footer" variant="blue">
        NOTES
      </garden-tag>
    </garden-card>
}`,
      ...((M = i.parameters) === null || M === void 0 || (w = M.docs) === null || w === void 0
        ? void 0
        : w.source),
    },
  },
};
const Y = ['Default', 'Accent', 'Blue', 'Yellow', 'Sage', 'Green', 'AllVariants', 'InCardFooter'];
export {
  n as Accent,
  l as AllVariants,
  t as Blue,
  r as Default,
  s as Green,
  i as InCardFooter,
  d as Sage,
  o as Yellow,
  Y as __namedExportsOrder,
  V as default,
};
