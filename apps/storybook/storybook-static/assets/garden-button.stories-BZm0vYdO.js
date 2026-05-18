import { j as e } from './iframe-BMk1oW9O.js';
import './preload-helper-C1FmrZbK.js';
var v, m, b, g, _, h, f, y, x, A, w, E, S, P, k, I, T, B, D, V, C, R, j, L;
const z = {
    title: 'Atoms/GardenButton',
    tags: ['autodocs'],
    argTypes: {
      variant: {
        control: 'radio',
        options: ['default', 'primary', 'yellow', 'blue', 'ghost'],
        description:
          'Visual variant — `default` (paper fill), `primary` (red/punk fill), `yellow` (yellow fill), `blue` (blue fill), `ghost` (no fill, muted border)',
        table: {
          type: { summary: 'default | primary | yellow | blue | ghost' },
          defaultValue: { summary: 'default' },
        },
      },
      disabled: {
        control: 'boolean',
        description: 'Disables the button',
        table: { defaultValue: { summary: 'false' } },
      },
      label: { control: 'text', description: 'Button label (slot content)' },
    },
    args: { variant: 'default', disabled: !1, label: '✂ CLIP' },
    parameters: {
      docs: {
        description: {
          component:
            'Atom: punk rubber stamp button. Five variants: `default` (zine paper), `primary` (red), `yellow`, `blue`, `ghost` (no border). Thick right+bottom border creates the neubrutalist offset press effect. Supports an `icon-left` slot and uses the canonical shared tokens.',
        },
      },
    },
  },
  r = ({ variant: u, disabled: c, label: p }) =>
    e.jsx('garden-button', { variant: u, disabled: c, children: p }),
  a = { render: r },
  t = { args: { variant: 'primary', label: '✦ PUBLISH NOTE' }, render: r },
  o = { args: { variant: 'yellow', label: '◆ SAVE DRAFT' }, render: r },
  n = { args: { variant: 'blue', label: '↑ EXPORT' }, render: r },
  l = { args: { variant: 'ghost', label: '✕ CANCEL' }, render: r },
  s = { args: { variant: 'primary', disabled: !0, label: 'SAVING…' }, render: r },
  i = {
    name: 'With leading icon',
    args: { label: '↑ EXPORT' },
    render: ({ label: u, variant: c, disabled: p }) =>
      e.jsxs('garden-button', {
        variant: c,
        disabled: p,
        children: [
          e.jsx('svg', {
            slot: 'icon-left',
            width: '14',
            height: '14',
            viewBox: '0 0 14 14',
            fill: 'none',
            stroke: 'currentColor',
            'stroke-width': '1.5',
            'aria-hidden': 'true',
            children: e.jsx('path', { d: 'M7 1v6M4 4l3-3 3 3M2 10v2h10v-2' }),
          }),
          u,
        ],
      }),
  },
  d = {
    name: 'All variants',
    render: () =>
      e.jsxs('div', {
        style: {
          display: 'flex',
          flexWrap: 'wrap',
          gap: 0,
          padding: 24,
          alignItems: 'center',
          background: 'var(--zine-paper, #f2edd7)',
          border: '3px solid var(--zine-ink, #0e0c07)',
          borderRight: '5px solid var(--zine-ink, #0e0c07)',
          borderBottom: '5px solid var(--zine-ink, #0e0c07)',
        },
        children: [
          e.jsx('garden-button', { variant: 'primary', children: '✦ PUBLISH NOTE' }),
          e.jsx('garden-button', { variant: 'yellow', children: '◆ SAVE DRAFT' }),
          e.jsx('garden-button', { variant: 'blue', children: '↑ EXPORT' }),
          e.jsx('garden-button', { children: '✂ CLIP' }),
          e.jsx('garden-button', { variant: 'ghost', children: '✕ CANCEL' }),
        ],
      }),
  };
a.parameters = {
  ...a.parameters,
  docs: {
    ...((v = a.parameters) === null || v === void 0 ? void 0 : v.docs),
    source: {
      originalSource: `{
  render
}`,
      ...((b = a.parameters) === null || b === void 0 || (m = b.docs) === null || m === void 0
        ? void 0
        : m.source),
    },
  },
};
t.parameters = {
  ...t.parameters,
  docs: {
    ...((g = t.parameters) === null || g === void 0 ? void 0 : g.docs),
    source: {
      originalSource: `{
  args: {
    variant: 'primary',
    label: '✦ PUBLISH NOTE'
  },
  render
}`,
      ...((h = t.parameters) === null || h === void 0 || (_ = h.docs) === null || _ === void 0
        ? void 0
        : _.source),
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
    variant: 'yellow',
    label: '◆ SAVE DRAFT'
  },
  render
}`,
      ...((x = o.parameters) === null || x === void 0 || (y = x.docs) === null || y === void 0
        ? void 0
        : y.source),
    },
  },
};
n.parameters = {
  ...n.parameters,
  docs: {
    ...((A = n.parameters) === null || A === void 0 ? void 0 : A.docs),
    source: {
      originalSource: `{
  args: {
    variant: 'blue',
    label: '↑ EXPORT'
  },
  render
}`,
      ...((E = n.parameters) === null || E === void 0 || (w = E.docs) === null || w === void 0
        ? void 0
        : w.source),
    },
  },
};
l.parameters = {
  ...l.parameters,
  docs: {
    ...((S = l.parameters) === null || S === void 0 ? void 0 : S.docs),
    source: {
      originalSource: `{
  args: {
    variant: 'ghost',
    label: '✕ CANCEL'
  },
  render
}`,
      ...((k = l.parameters) === null || k === void 0 || (P = k.docs) === null || P === void 0
        ? void 0
        : P.source),
    },
  },
};
s.parameters = {
  ...s.parameters,
  docs: {
    ...((I = s.parameters) === null || I === void 0 ? void 0 : I.docs),
    source: {
      originalSource: `{
  args: {
    variant: 'primary',
    disabled: true,
    label: 'SAVING…'
  },
  render
}`,
      ...((B = s.parameters) === null || B === void 0 || (T = B.docs) === null || T === void 0
        ? void 0
        : T.source),
    },
  },
};
i.parameters = {
  ...i.parameters,
  docs: {
    ...((D = i.parameters) === null || D === void 0 ? void 0 : D.docs),
    source: {
      originalSource: `{
  name: 'With leading icon',
  args: {
    label: '↑ EXPORT'
  },
  render: ({
    label,
    variant,
    disabled
  }) => <garden-button variant={variant} disabled={disabled}>
      <svg slot="icon-left" width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
        <path d="M7 1v6M4 4l3-3 3 3M2 10v2h10v-2" />
      </svg>
      {label}
    </garden-button>
}`,
      ...((C = i.parameters) === null || C === void 0 || (V = C.docs) === null || V === void 0
        ? void 0
        : V.source),
    },
  },
};
d.parameters = {
  ...d.parameters,
  docs: {
    ...((R = d.parameters) === null || R === void 0 ? void 0 : R.docs),
    source: {
      originalSource: `{
  name: 'All variants',
  render: () => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: 0,
    padding: 24,
    alignItems: 'center',
    background: 'var(--zine-paper, #f2edd7)',
    border: '3px solid var(--zine-ink, #0e0c07)',
    borderRight: '5px solid var(--zine-ink, #0e0c07)',
    borderBottom: '5px solid var(--zine-ink, #0e0c07)'
  }}>
      <garden-button variant="primary">✦ PUBLISH NOTE</garden-button>
      <garden-button variant="yellow">◆ SAVE DRAFT</garden-button>
      <garden-button variant="blue">↑ EXPORT</garden-button>
      <garden-button>✂ CLIP</garden-button>
      <garden-button variant="ghost">✕ CANCEL</garden-button>
    </div>
}`,
      ...((L = d.parameters) === null || L === void 0 || (j = L.docs) === null || j === void 0
        ? void 0
        : j.source),
    },
  },
};
const W = ['Default', 'Primary', 'Yellow', 'Blue', 'Ghost', 'Disabled', 'WithIcon', 'AllVariants'];
export {
  d as AllVariants,
  n as Blue,
  a as Default,
  s as Disabled,
  l as Ghost,
  t as Primary,
  i as WithIcon,
  o as Yellow,
  W as __namedExportsOrder,
  z as default,
};
