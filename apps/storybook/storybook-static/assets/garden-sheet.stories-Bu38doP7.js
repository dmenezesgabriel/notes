import { j as e } from './iframe-BMk1oW9O.js';
import './preload-helper-C1FmrZbK.js';
var t, d, p, c, g, h, m, u, f, y, v, S, _, E, C, P, x, w;
const N = {
    title: 'Components/Sheet',
    tags: ['autodocs'],
    argTypes: {
      pinColor: {
        control: { type: 'select' },
        options: ['red', 'yellow', 'blue', 'green'],
        description: 'Pin color — `red` (default), `yellow`, `blue`, `green`',
      },
      heading: { control: 'text', description: 'Optional section heading' },
    },
    args: { pinColor: 'red', heading: 'SECTION TITLE' },
    parameters: {
      backgrounds: { default: 'dark' },
      docs: {
        description: {
          component:
            'Zine-edition paper sheet pinned to corkboard. Simulates pinned paper with pushpin and optional heading. Uses `--zine-paper`, `--zine-shadow-lg`, `--zine-border` tokens.',
        },
      },
    },
  },
  i = {
    render: (r) =>
      e.jsx('garden-sheet', {
        heading: r.heading,
        children: e.jsx('p', {
          style: { fontFamily: "'Special Elite', serif", color: '#2c2820' },
          children: 'Sheet content goes here.',
        }),
      }),
  },
  a = {
    args: { pinColor: 'yellow', heading: 'COLOUR TOKENS' },
    render: (r) =>
      e.jsx('garden-sheet', {
        pinColor: r.pinColor,
        heading: r.heading,
        children: e.jsx('p', {
          style: { fontFamily: "'Special Elite', serif", color: '#2c2820' },
          children: 'Sheet with yellow pin.',
        }),
      }),
  },
  n = {
    args: { pinColor: 'blue', heading: 'TYPOGRAPHY SCALE' },
    render: (r) =>
      e.jsx('garden-sheet', {
        pinColor: r.pinColor,
        heading: r.heading,
        children: e.jsx('p', {
          style: { fontFamily: "'Special Elite', serif", color: '#2c2820' },
          children: 'Sheet with blue pin.',
        }),
      }),
  },
  o = {
    args: { pinColor: 'green', heading: 'SPACING & SHADOWS' },
    render: (r) =>
      e.jsx('garden-sheet', {
        pinColor: r.pinColor,
        heading: r.heading,
        children: e.jsx('p', {
          style: { fontFamily: "'Special Elite', serif", color: '#2c2820' },
          children: 'Sheet with green pin.',
        }),
      }),
  },
  l = {
    render: () =>
      e.jsx('garden-sheet', {
        children: e.jsx('p', {
          style: { fontFamily: "'Special Elite', serif", color: '#2c2820' },
          children: 'Sheet without heading.',
        }),
      }),
  },
  s = {
    render: () =>
      e.jsxs('div', {
        style: {
          padding: '2rem',
          background: 'var(--ds-page, #11111b)',
          display: 'flex',
          flexDirection: 'column',
          gap: '3rem',
        },
        children: [
          e.jsx('garden-sheet', {
            heading: 'RED PIN (DEFAULT)',
            children: e.jsx('p', {
              style: { fontFamily: "'Special Elite', serif", color: '#2c2820' },
              children: 'Default red pin.',
            }),
          }),
          e.jsx('garden-sheet', {
            pinColor: 'yellow',
            heading: 'YELLOW PIN',
            children: e.jsx('p', {
              style: { fontFamily: "'Special Elite', serif", color: '#2c2820' },
              children: 'Yellow pin variant.',
            }),
          }),
          e.jsx('garden-sheet', {
            pinColor: 'blue',
            heading: 'BLUE PIN',
            children: e.jsx('p', {
              style: { fontFamily: "'Special Elite', serif", color: '#2c2820' },
              children: 'Blue pin variant.',
            }),
          }),
          e.jsx('garden-sheet', {
            pinColor: 'green',
            heading: 'GREEN PIN',
            children: e.jsx('p', {
              style: { fontFamily: "'Special Elite', serif", color: '#2c2820' },
              children: 'Green pin variant.',
            }),
          }),
        ],
      }),
  };
i.parameters = {
  ...i.parameters,
  docs: {
    ...((t = i.parameters) === null || t === void 0 ? void 0 : t.docs),
    source: {
      originalSource: `{
  render: args => <garden-sheet heading={args.heading}>
      <p style={{
      fontFamily: "'Special Elite', serif",
      color: '#2c2820'
    }}>
        Sheet content goes here.
      </p>
    </garden-sheet>
}`,
      ...((p = i.parameters) === null || p === void 0 || (d = p.docs) === null || d === void 0
        ? void 0
        : d.source),
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
    pinColor: 'yellow',
    heading: 'COLOUR TOKENS'
  },
  render: args => <garden-sheet pinColor={args.pinColor} heading={args.heading}>
      <p style={{
      fontFamily: "'Special Elite', serif",
      color: '#2c2820'
    }}>
        Sheet with yellow pin.
      </p>
    </garden-sheet>
}`,
      ...((h = a.parameters) === null || h === void 0 || (g = h.docs) === null || g === void 0
        ? void 0
        : g.source),
    },
  },
};
n.parameters = {
  ...n.parameters,
  docs: {
    ...((m = n.parameters) === null || m === void 0 ? void 0 : m.docs),
    source: {
      originalSource: `{
  args: {
    pinColor: 'blue',
    heading: 'TYPOGRAPHY SCALE'
  },
  render: args => <garden-sheet pinColor={args.pinColor} heading={args.heading}>
      <p style={{
      fontFamily: "'Special Elite', serif",
      color: '#2c2820'
    }}>Sheet with blue pin.</p>
    </garden-sheet>
}`,
      ...((f = n.parameters) === null || f === void 0 || (u = f.docs) === null || u === void 0
        ? void 0
        : u.source),
    },
  },
};
o.parameters = {
  ...o.parameters,
  docs: {
    ...((y = o.parameters) === null || y === void 0 ? void 0 : y.docs),
    source: {
      originalSource: `{
  args: {
    pinColor: 'green',
    heading: 'SPACING & SHADOWS'
  },
  render: args => <garden-sheet pinColor={args.pinColor} heading={args.heading}>
      <p style={{
      fontFamily: "'Special Elite', serif",
      color: '#2c2820'
    }}>
        Sheet with green pin.
      </p>
    </garden-sheet>
}`,
      ...((S = o.parameters) === null || S === void 0 || (v = S.docs) === null || v === void 0
        ? void 0
        : v.source),
    },
  },
};
l.parameters = {
  ...l.parameters,
  docs: {
    ...((_ = l.parameters) === null || _ === void 0 ? void 0 : _.docs),
    source: {
      originalSource: `{
  render: () => <garden-sheet>
      <p style={{
      fontFamily: "'Special Elite', serif",
      color: '#2c2820'
    }}>
        Sheet without heading.
      </p>
    </garden-sheet>
}`,
      ...((C = l.parameters) === null || C === void 0 || (E = C.docs) === null || E === void 0
        ? void 0
        : E.source),
    },
  },
};
s.parameters = {
  ...s.parameters,
  docs: {
    ...((P = s.parameters) === null || P === void 0 ? void 0 : P.docs),
    source: {
      originalSource: `{
  render: () => <div style={{
    padding: '2rem',
    background: 'var(--ds-page, #11111b)',
    display: 'flex',
    flexDirection: 'column',
    gap: '3rem'
  }}>
      <garden-sheet heading="RED PIN (DEFAULT)">
        <p style={{
        fontFamily: "'Special Elite', serif",
        color: '#2c2820'
      }}>Default red pin.</p>
      </garden-sheet>
      <garden-sheet pinColor="yellow" heading="YELLOW PIN">
        <p style={{
        fontFamily: "'Special Elite', serif",
        color: '#2c2820'
      }}>
          Yellow pin variant.
        </p>
      </garden-sheet>
      <garden-sheet pinColor="blue" heading="BLUE PIN">
        <p style={{
        fontFamily: "'Special Elite', serif",
        color: '#2c2820'
      }}>Blue pin variant.</p>
      </garden-sheet>
      <garden-sheet pinColor="green" heading="GREEN PIN">
        <p style={{
        fontFamily: "'Special Elite', serif",
        color: '#2c2820'
      }}>Green pin variant.</p>
      </garden-sheet>
    </div>
}`,
      ...((w = s.parameters) === null || w === void 0 || (x = w.docs) === null || x === void 0
        ? void 0
        : x.source),
    },
  },
};
const b = ['Default', 'YellowPin', 'BluePin', 'GreenPin', 'NoHeading', 'AllVariants'];
export {
  s as AllVariants,
  n as BluePin,
  i as Default,
  o as GreenPin,
  l as NoHeading,
  a as YellowPin,
  b as __namedExportsOrder,
  N as default,
};
