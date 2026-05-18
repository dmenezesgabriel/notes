import { j as e } from './iframe-BMk1oW9O.js';
import './preload-helper-C1FmrZbK.js';
var o, s, d, i, l, c, m, p, u;
const E = {
    title: 'Components/Banner',
    tags: ['autodocs'],
    argTypes: { text: { control: 'text', description: 'Banner text (marquee scrolling)' } },
    args: { text: 'NEU-BRUTALISM × PUNK ZINE · DESIGN SYSTEM V0.1 · GARDEN.DEV' },
    parameters: {
      backgrounds: { default: 'dark' },
      docs: {
        description: {
          component:
            'Zine-edition misregistration banner. Xerox artifact with scrolling marquee text and blue shadow offset. Uses `--zine-red`, `--zine-yellow`, `--zine-blue` tokens.',
        },
      },
    },
  },
  r = { render: (a) => e.jsx('garden-banner', { text: a.text }) },
  t = {
    args: { text: 'CUSTOM BANNER TEXT · DO IT YOURSELF · NO RULES' },
    render: (a) => e.jsx('garden-banner', { text: a.text }),
  },
  n = {
    render: () =>
      e.jsxs('div', {
        style: { minHeight: 200, background: 'var(--ds-page, #11111b)' },
        children: [
          e.jsx('garden-banner', {
            text: 'KNOWLEDGE GARDEN · NEU-BRUTALISM × PUNK ZINE · NOTES · WIKI · SECOND BRAIN',
          }),
          e.jsxs('div', {
            style: {
              padding: '2rem',
              background: '#f2edd7',
              border: '3px solid #0e0c07',
              borderTop: 'none',
            },
            children: [
              e.jsx('h2', {
                style: { fontFamily: "'Bebas Neue', sans-serif", fontSize: 26 },
                children: 'Page Content',
              }),
              e.jsx('p', {
                style: { fontFamily: "'Special Elite', serif", color: '#2c2820' },
                children: 'Content below the banner.',
              }),
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
  render: args => <garden-banner text={args.text}></garden-banner>
}`,
      ...((d = r.parameters) === null || d === void 0 || (s = d.docs) === null || s === void 0
        ? void 0
        : s.source),
    },
  },
};
t.parameters = {
  ...t.parameters,
  docs: {
    ...((i = t.parameters) === null || i === void 0 ? void 0 : i.docs),
    source: {
      originalSource: `{
  args: {
    text: 'CUSTOM BANNER TEXT · DO IT YOURSELF · NO RULES'
  },
  render: args => <garden-banner text={args.text}></garden-banner>
}`,
      ...((c = t.parameters) === null || c === void 0 || (l = c.docs) === null || l === void 0
        ? void 0
        : l.source),
    },
  },
};
n.parameters = {
  ...n.parameters,
  docs: {
    ...((m = n.parameters) === null || m === void 0 ? void 0 : m.docs),
    source: {
      originalSource: `{
  render: () => <div style={{
    minHeight: 200,
    background: 'var(--ds-page, #11111b)'
  }}>
      <garden-banner text="KNOWLEDGE GARDEN · NEU-BRUTALISM × PUNK ZINE · NOTES · WIKI · SECOND BRAIN"></garden-banner>
      <div style={{
      padding: '2rem',
      background: '#f2edd7',
      border: '3px solid #0e0c07',
      borderTop: 'none'
    }}>
        <h2 style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: 26
      }}>Page Content</h2>
        <p style={{
        fontFamily: "'Special Elite', serif",
        color: '#2c2820'
      }}>
          Content below the banner.
        </p>
      </div>
    </div>
}`,
      ...((u = n.parameters) === null || u === void 0 || (p = u.docs) === null || p === void 0
        ? void 0
        : p.source),
    },
  },
};
const b = ['Default', 'CustomText', 'InPageContext'];
export {
  t as CustomText,
  r as Default,
  n as InPageContext,
  b as __namedExportsOrder,
  E as default,
};
