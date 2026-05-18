import { j as e } from './iframe-BMk1oW9O.js';
import './preload-helper-C1FmrZbK.js';
var s, d, l, p, v, c, m, g, x, u, T, y, E, _, f;
const j = {
    title: 'Components/Tape',
    tags: ['autodocs'],
    argTypes: {
      variant: {
        control: { type: 'select' },
        options: ['default', 'red', 'blue', 'white'],
        description: 'Visual variant — `default` (yellow), `red`, `blue`, `white`',
      },
      text: { control: 'text', description: 'Tape text content' },
    },
    args: { variant: 'default', text: 'DESIGN SYSTEM · V0.1' },
    parameters: {
      backgrounds: { default: 'paper' },
      docs: {
        description: {
          component:
            'Zine-edition decorative tape strip. Diagonal tape element for scrapbook/decorative effect. Uses `--font-mono` token.',
        },
      },
    },
  },
  a = {
    render: (t) =>
      e.jsxs('div', {
        style: { position: 'relative', padding: '2rem' },
        children: [
          e.jsx('garden-tape', { text: t.text }),
          e.jsx('p', {
            style: { fontFamily: "'Special Elite', serif", color: '#2c2820', marginTop: '2rem' },
            children: 'Content with tape decoration.',
          }),
        ],
      }),
  },
  r = {
    args: { variant: 'red', text: 'CUT HERE ✂' },
    render: (t) =>
      e.jsxs('div', {
        style: { position: 'relative', padding: '2rem' },
        children: [
          e.jsx('garden-tape', { variant: t.variant, text: t.text }),
          e.jsx('p', {
            style: { fontFamily: "'Special Elite', serif", color: '#2c2820', marginTop: '2rem' },
            children: 'Content with red tape.',
          }),
        ],
      }),
  },
  i = {
    args: { variant: 'blue', text: 'PAINT SWATCHES' },
    render: (t) =>
      e.jsxs('div', {
        style: { position: 'relative', padding: '2rem' },
        children: [
          e.jsx('garden-tape', { variant: t.variant, text: t.text }),
          e.jsx('p', {
            style: { fontFamily: "'Special Elite', serif", color: '#2c2820', marginTop: '2rem' },
            children: 'Content with blue tape.',
          }),
        ],
      }),
  },
  o = {
    args: { variant: 'white', text: 'RANSOM NOTE SYSTEM' },
    render: (t) =>
      e.jsxs('div', {
        style: { position: 'relative', padding: '2rem' },
        children: [
          e.jsx('garden-tape', { variant: t.variant, text: t.text }),
          e.jsx('p', {
            style: { fontFamily: "'Special Elite', serif", color: '#2c2820', marginTop: '2rem' },
            children: 'Content with white tape.',
          }),
        ],
      }),
  },
  n = {
    render: () =>
      e.jsxs('div', {
        style: {
          position: 'relative',
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '3rem',
        },
        children: [
          e.jsx('div', {
            style: { position: 'relative' },
            children: e.jsx('garden-tape', { text: 'DEFAULT TAPE' }),
          }),
          e.jsx('div', {
            style: { position: 'relative' },
            children: e.jsx('garden-tape', { variant: 'red', text: 'RED TAPE' }),
          }),
          e.jsx('div', {
            style: { position: 'relative' },
            children: e.jsx('garden-tape', { variant: 'blue', text: 'BLUE TAPE' }),
          }),
          e.jsx('div', {
            style: { position: 'relative' },
            children: e.jsx('garden-tape', { variant: 'white', text: 'WHITE TAPE' }),
          }),
        ],
      }),
  };
a.parameters = {
  ...a.parameters,
  docs: {
    ...((s = a.parameters) === null || s === void 0 ? void 0 : s.docs),
    source: {
      originalSource: `{
  render: args => <div style={{
    position: 'relative',
    padding: '2rem'
  }}>
      <garden-tape text={args.text}></garden-tape>
      <p style={{
      fontFamily: "'Special Elite', serif",
      color: '#2c2820',
      marginTop: '2rem'
    }}>
        Content with tape decoration.
      </p>
    </div>
}`,
      ...((l = a.parameters) === null || l === void 0 || (d = l.docs) === null || d === void 0
        ? void 0
        : d.source),
    },
  },
};
r.parameters = {
  ...r.parameters,
  docs: {
    ...((p = r.parameters) === null || p === void 0 ? void 0 : p.docs),
    source: {
      originalSource: `{
  args: {
    variant: 'red',
    text: 'CUT HERE ✂'
  },
  render: args => <div style={{
    position: 'relative',
    padding: '2rem'
  }}>
      <garden-tape variant={args.variant} text={args.text}></garden-tape>
      <p style={{
      fontFamily: "'Special Elite', serif",
      color: '#2c2820',
      marginTop: '2rem'
    }}>
        Content with red tape.
      </p>
    </div>
}`,
      ...((c = r.parameters) === null || c === void 0 || (v = c.docs) === null || v === void 0
        ? void 0
        : v.source),
    },
  },
};
i.parameters = {
  ...i.parameters,
  docs: {
    ...((m = i.parameters) === null || m === void 0 ? void 0 : m.docs),
    source: {
      originalSource: `{
  args: {
    variant: 'blue',
    text: 'PAINT SWATCHES'
  },
  render: args => <div style={{
    position: 'relative',
    padding: '2rem'
  }}>
      <garden-tape variant={args.variant} text={args.text}></garden-tape>
      <p style={{
      fontFamily: "'Special Elite', serif",
      color: '#2c2820',
      marginTop: '2rem'
    }}>
        Content with blue tape.
      </p>
    </div>
}`,
      ...((x = i.parameters) === null || x === void 0 || (g = x.docs) === null || g === void 0
        ? void 0
        : g.source),
    },
  },
};
o.parameters = {
  ...o.parameters,
  docs: {
    ...((u = o.parameters) === null || u === void 0 ? void 0 : u.docs),
    source: {
      originalSource: `{
  args: {
    variant: 'white',
    text: 'RANSOM NOTE SYSTEM'
  },
  render: args => <div style={{
    position: 'relative',
    padding: '2rem'
  }}>
      <garden-tape variant={args.variant} text={args.text}></garden-tape>
      <p style={{
      fontFamily: "'Special Elite', serif",
      color: '#2c2820',
      marginTop: '2rem'
    }}>
        Content with white tape.
      </p>
    </div>
}`,
      ...((y = o.parameters) === null || y === void 0 || (T = y.docs) === null || T === void 0
        ? void 0
        : T.source),
    },
  },
};
n.parameters = {
  ...n.parameters,
  docs: {
    ...((E = n.parameters) === null || E === void 0 ? void 0 : E.docs),
    source: {
      originalSource: `{
  render: () => <div style={{
    position: 'relative',
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '3rem'
  }}>
      <div style={{
      position: 'relative'
    }}>
        <garden-tape text="DEFAULT TAPE"></garden-tape>
      </div>
      <div style={{
      position: 'relative'
    }}>
        <garden-tape variant="red" text="RED TAPE"></garden-tape>
      </div>
      <div style={{
      position: 'relative'
    }}>
        <garden-tape variant="blue" text="BLUE TAPE"></garden-tape>
      </div>
      <div style={{
      position: 'relative'
    }}>
        <garden-tape variant="white" text="WHITE TAPE"></garden-tape>
      </div>
    </div>
}`,
      ...((f = n.parameters) === null || f === void 0 || (_ = f.docs) === null || _ === void 0
        ? void 0
        : _.source),
    },
  },
};
const A = ['Default', 'RedTape', 'BlueTape', 'WhiteTape', 'AllVariants'];
export {
  n as AllVariants,
  i as BlueTape,
  a as Default,
  r as RedTape,
  o as WhiteTape,
  A as __namedExportsOrder,
  j as default,
};
