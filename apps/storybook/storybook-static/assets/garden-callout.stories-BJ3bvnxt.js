import { j as e } from './iframe-BMk1oW9O.js';
import './preload-helper-C1FmrZbK.js';
var s, c, g, u, p, m, v, h, b, f, y, _, x, A, w, I, T, k, S, E, R;
const H = {
    title: 'Components/GardenCallout',
    tags: ['autodocs'],
    argTypes: {
      variant: {
        control: 'radio',
        options: ['note', 'tip', 'warning', 'info'],
        description:
          'Semantic intent — drives border and background colour. `note` (yellow-lt), `tip` (green), `warning` (orange), `info` (blue)',
        table: {
          type: { summary: 'note | tip | warning | info' },
          defaultValue: { summary: 'note' },
        },
      },
      heading: { control: 'text', description: 'Rubber-stamp heading shown above the body' },
      body: { control: 'text', description: 'Body text (slot content)' },
    },
    args: {
      variant: 'note',
      heading: '✦ NOTE',
      body: 'Start with a weekly review — fifteen minutes every Sunday is enough to close the loop.',
    },
    parameters: {
      docs: {
        description: {
          component:
            'Inline callout block. Uses `<div role="note">` internally. Four variants: `note` (yellow-lt), `tip` (green), `warning` (orange), `info` (blue). Hard offset border — xerox rubber stamp aesthetic.',
        },
      },
    },
  },
  r = ({ variant: W, heading: N, body: D }) =>
    e.jsx('garden-callout', { variant: W, heading: N, style: { maxWidth: 480 }, children: D }),
  a = { render: r },
  n = {
    args: {
      variant: 'tip',
      heading: '✦ TIP',
      body: 'Start with a weekly review — fifteen minutes every Sunday.',
    },
    render: r,
  },
  o = {
    args: {
      variant: 'warning',
      heading: '⚠ WARNING',
      body: 'This API changed in v0.2 — update component props before upgrading.',
    },
    render: r,
  },
  t = {
    args: {
      variant: 'info',
      heading: '→ RELATED',
      body: 'Zettelkasten, evergreen notes, PARA method, progressive summarisation.',
    },
    render: r,
  },
  i = {
    name: 'Without heading',
    args: { heading: '', body: 'Your brain is for generating ideas, not storing them.' },
    render: r,
  },
  d = {
    name: 'In article body',
    render: () =>
      e.jsxs('div', {
        style: {
          background: '#fafaf2',
          border: '3px solid #0e0c07',
          borderRight: '5px solid #0e0c07',
          borderBottom: '5px solid #0e0c07',
          padding: '1.75rem',
          maxWidth: 560,
          backgroundImage:
            'repeating-linear-gradient(to bottom, transparent, transparent 31px, rgba(100,120,200,0.1) 31px, rgba(100,120,200,0.1) 32px)',
        },
        children: [
          e.jsx('p', {
            style: {
              fontFamily: "'Special Elite', serif",
              fontSize: 14,
              lineHeight: 1.8,
              color: '#2c2820',
              margin: '0 0 1rem',
            },
            children:
              'Every note you capture is a future conversation with yourself. The format matters less than the habit of externalising thinking.',
          }),
          e.jsx('garden-callout', {
            heading: '✦ TIP',
            style: { marginBottom: 10 },
            children: 'Start with a weekly review — fifteen minutes every Sunday.',
          }),
          e.jsx('garden-callout', {
            variant: 'info',
            heading: '→ RELATED',
            children: 'Zettelkasten, evergreen notes, PARA method.',
          }),
        ],
      }),
  },
  l = {
    name: 'All variants',
    render: () =>
      e.jsxs('div', {
        style: {
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
          padding: 24,
          background: 'var(--zine-paper, #f2edd7)',
          border: '3px solid #0e0c07',
          borderRight: '5px solid #0e0c07',
          borderBottom: '5px solid #0e0c07',
          maxWidth: 520,
        },
        children: [
          e.jsx('garden-callout', {
            variant: 'note',
            heading: '✦ NOTE',
            children: 'Default note callout — yellow-lt background.',
          }),
          e.jsx('garden-callout', {
            variant: 'tip',
            heading: '✦ TIP',
            children: 'Tip callout — green background.',
          }),
          e.jsx('garden-callout', {
            variant: 'warning',
            heading: '⚠ WARNING',
            children: 'Warning callout — orange border.',
          }),
          e.jsx('garden-callout', {
            variant: 'info',
            heading: '→ RELATED',
            children: 'Info callout — blue border, light blue background.',
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
  render
}`,
      ...((g = a.parameters) === null || g === void 0 || (c = g.docs) === null || c === void 0
        ? void 0
        : c.source),
    },
  },
};
n.parameters = {
  ...n.parameters,
  docs: {
    ...((u = n.parameters) === null || u === void 0 ? void 0 : u.docs),
    source: {
      originalSource: `{
  args: {
    variant: 'tip',
    heading: '✦ TIP',
    body: 'Start with a weekly review — fifteen minutes every Sunday.'
  },
  render
}`,
      ...((m = n.parameters) === null || m === void 0 || (p = m.docs) === null || p === void 0
        ? void 0
        : p.source),
    },
  },
};
o.parameters = {
  ...o.parameters,
  docs: {
    ...((v = o.parameters) === null || v === void 0 ? void 0 : v.docs),
    source: {
      originalSource: `{
  args: {
    variant: 'warning',
    heading: '⚠ WARNING',
    body: 'This API changed in v0.2 — update component props before upgrading.'
  },
  render
}`,
      ...((b = o.parameters) === null || b === void 0 || (h = b.docs) === null || h === void 0
        ? void 0
        : h.source),
    },
  },
};
t.parameters = {
  ...t.parameters,
  docs: {
    ...((f = t.parameters) === null || f === void 0 ? void 0 : f.docs),
    source: {
      originalSource: `{
  args: {
    variant: 'info',
    heading: '→ RELATED',
    body: 'Zettelkasten, evergreen notes, PARA method, progressive summarisation.'
  },
  render
}`,
      ...((_ = t.parameters) === null || _ === void 0 || (y = _.docs) === null || y === void 0
        ? void 0
        : y.source),
    },
  },
};
i.parameters = {
  ...i.parameters,
  docs: {
    ...((x = i.parameters) === null || x === void 0 ? void 0 : x.docs),
    source: {
      originalSource: `{
  name: 'Without heading',
  args: {
    heading: '',
    body: 'Your brain is for generating ideas, not storing them.'
  },
  render
}`,
      ...((w = i.parameters) === null || w === void 0 || (A = w.docs) === null || A === void 0
        ? void 0
        : A.source),
    },
  },
};
d.parameters = {
  ...d.parameters,
  docs: {
    ...((I = d.parameters) === null || I === void 0 ? void 0 : I.docs),
    source: {
      originalSource: `{
  name: 'In article body',
  render: () => <div style={{
    background: '#fafaf2',
    border: '3px solid #0e0c07',
    borderRight: '5px solid #0e0c07',
    borderBottom: '5px solid #0e0c07',
    padding: '1.75rem',
    maxWidth: 560,
    backgroundImage: 'repeating-linear-gradient(to bottom, transparent, transparent 31px, rgba(100,120,200,0.1) 31px, rgba(100,120,200,0.1) 32px)'
  }}>
      <p style={{
      fontFamily: "'Special Elite', serif",
      fontSize: 14,
      lineHeight: 1.8,
      color: '#2c2820',
      margin: '0 0 1rem'
    }}>
        Every note you capture is a future conversation with yourself. The format matters less than
        the habit of externalising thinking.
      </p>
      <garden-callout heading="✦ TIP" style={{
      marginBottom: 10
    }}>
        Start with a weekly review — fifteen minutes every Sunday.
      </garden-callout>
      <garden-callout variant="info" heading="→ RELATED">
        Zettelkasten, evergreen notes, PARA method.
      </garden-callout>
    </div>
}`,
      ...((k = d.parameters) === null || k === void 0 || (T = k.docs) === null || T === void 0
        ? void 0
        : T.source),
    },
  },
};
l.parameters = {
  ...l.parameters,
  docs: {
    ...((S = l.parameters) === null || S === void 0 ? void 0 : S.docs),
    source: {
      originalSource: `{
  name: 'All variants',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    padding: 24,
    background: 'var(--zine-paper, #f2edd7)',
    border: '3px solid #0e0c07',
    borderRight: '5px solid #0e0c07',
    borderBottom: '5px solid #0e0c07',
    maxWidth: 520
  }}>
      <garden-callout variant="note" heading="✦ NOTE">
        Default note callout — yellow-lt background.
      </garden-callout>
      <garden-callout variant="tip" heading="✦ TIP">
        Tip callout — green background.
      </garden-callout>
      <garden-callout variant="warning" heading="⚠ WARNING">
        Warning callout — orange border.
      </garden-callout>
      <garden-callout variant="info" heading="→ RELATED">
        Info callout — blue border, light blue background.
      </garden-callout>
    </div>
}`,
      ...((R = l.parameters) === null || R === void 0 || (E = R.docs) === null || E === void 0
        ? void 0
        : E.source),
    },
  },
};
const B = ['Default', 'Tip', 'Warning', 'Info', 'NoHeading', 'InArticle', 'AllVariants'];
export {
  l as AllVariants,
  a as Default,
  d as InArticle,
  t as Info,
  i as NoHeading,
  n as Tip,
  o as Warning,
  B as __namedExportsOrder,
  H as default,
};
