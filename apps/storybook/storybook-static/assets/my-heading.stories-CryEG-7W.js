import { j as n } from './iframe-BMk1oW9O.js';
import './preload-helper-C1FmrZbK.js';
var o, r, a, s, d, m;
const l = { title: 'Components/MyHeading' },
  e = { render: () => n.jsx('my-heading', { text: 'Hello Storybook' }) },
  t = { render: () => n.jsx('my-heading', { text: 'Custom heading text' }) };
e.parameters = {
  ...e.parameters,
  docs: {
    ...((o = e.parameters) === null || o === void 0 ? void 0 : o.docs),
    source: {
      originalSource: `{
  render: () => <my-heading text="Hello Storybook" />
}`,
      ...((a = e.parameters) === null || a === void 0 || (r = a.docs) === null || r === void 0
        ? void 0
        : r.source),
    },
  },
};
t.parameters = {
  ...t.parameters,
  docs: {
    ...((s = t.parameters) === null || s === void 0 ? void 0 : s.docs),
    source: {
      originalSource: `{
  render: () => <my-heading text="Custom heading text" />
}`,
      ...((m = t.parameters) === null || m === void 0 || (d = m.docs) === null || d === void 0
        ? void 0
        : d.source),
    },
  },
};
const p = ['Default', 'CustomText'];
export { t as CustomText, e as Default, p as __namedExportsOrder, l as default };
