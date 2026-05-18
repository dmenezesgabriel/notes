import { j as e } from './iframe-BMk1oW9O.js';
import './preload-helper-C1FmrZbK.js';
var m, p, h, f, v, x, u, k, w, y, b, _, W, j, R, T, A, G;
const D = {
    title: 'Components/GardenCard',
    tags: ['autodocs'],
    argTypes: {
      variant: {
        control: 'radio',
        options: ['default', 'featured', 'wiki'],
        description:
          '`default` — zine paper card with rotate; `featured` — yellow-lt + red top border + ★ FEATURED badge; `wiki` — hatched thumbnail with abbr text',
        table: {
          type: { summary: 'default | featured | wiki' },
          defaultValue: { summary: 'default' },
        },
      },
      headline: { control: 'text', description: 'Card title' },
      meta: { control: 'text', description: 'Metadata line (date, read time, etc.)' },
      excerpt: { control: 'text', description: 'Short body text' },
      href: { control: 'text', description: 'When set, headline becomes a stretched link' },
    },
    args: {
      variant: 'default',
      headline: 'Lit elements vs React: a pragmatic view',
      meta: '1 week ago · 5 min read',
      excerpt:
        'Web components shine when the goal is portability across stacks, not developer ergonomics first.',
      href: '',
    },
    parameters: {
      docs: {
        description: {
          component:
            'Note/wiki card used by the home discovery slice and other route-local compositions. When `href` is provided the headline becomes a stretched link (CSS `::after`) so the whole card is clickable — `<article>` is never wrapped by `<a>`.',
        },
      },
    },
  },
  z = ({ variant: r, headline: a, meta: t, excerpt: i, href: o }) =>
    e.jsxs('garden-card', {
      variant: r,
      headline: a,
      meta: t,
      excerpt: i,
      href: o,
      style: { maxWidth: 320 },
      children: [
        e.jsx('garden-tag', { slot: 'footer', variant: 'sage', children: 'frontend' }),
        e.jsx('garden-tag', { slot: 'footer', children: 'lit' }),
      ],
    }),
  n = { render: z },
  d = {
    args: {
      variant: 'featured',
      headline: 'On building a second brain',
      meta: '3 days ago · 8 min read',
      excerpt:
        "The goal isn't to remember everything — it's to think better by offloading storage to a trusted system.",
      href: '/notes/second-brain',
    },
    render: ({ variant: r, headline: a, meta: t, excerpt: i, href: o }) =>
      e.jsxs('garden-card', {
        variant: r,
        headline: a,
        meta: t,
        excerpt: i,
        href: o,
        style: { maxWidth: 320 },
        children: [
          e.jsx('garden-tag', { slot: 'footer', variant: 'accent', children: 'pkm' }),
          e.jsx('garden-tag', { slot: 'footer', children: 'zettelkasten' }),
        ],
      }),
  },
  s = {
    args: {
      variant: 'wiki',
      headline: 'Zettelkasten',
      meta: 'wiki · knowledge management',
      excerpt: 'A slip-box method for networked thinking developed by Niklas Luhmann.',
      href: '/wiki/zettelkasten',
    },
    render: ({ variant: r, headline: a, meta: t, excerpt: i, href: o }) =>
      e.jsx('garden-card', {
        variant: r,
        headline: a,
        meta: t,
        excerpt: i,
        href: o,
        style: { maxWidth: 220 },
      }),
  },
  l = {
    name: 'Note card grid',
    render: () =>
      e.jsxs('section', {
        'aria-label': 'Recent notes',
        style: {
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 16,
          padding: '1.5rem',
          maxWidth: 680,
          background: 'var(--zine-paper, #f2edd7)',
          border: '3px solid #0e0c07',
          borderRight: '5px solid #0e0c07',
          borderBottom: '5px solid #0e0c07',
        },
        children: [
          e.jsxs('garden-card', {
            variant: 'featured',
            headline: 'On building a second brain',
            meta: '3 days ago · 8 min read',
            excerpt: "The goal isn't to remember everything — it's to think better.",
            href: '/notes/second-brain',
            children: [
              e.jsx('garden-tag', { slot: 'footer', variant: 'accent', children: 'pkm' }),
              e.jsx('garden-tag', { slot: 'footer', children: 'zettelkasten' }),
            ],
          }),
          e.jsxs('garden-card', {
            headline: 'Lit elements vs React',
            meta: '1 week ago · 5 min read',
            excerpt: 'Web components shine when the goal is portability across stacks.',
            href: '/notes/lit-vs-react',
            children: [
              e.jsx('garden-tag', { slot: 'footer', variant: 'sage', children: 'frontend' }),
              e.jsx('garden-tag', { slot: 'footer', children: 'lit' }),
            ],
          }),
          e.jsxs('garden-card', {
            headline: 'Synthwave palettes and why they work',
            meta: '2 weeks ago · 4 min read',
            excerpt:
              'High contrast + neon against dark surfaces triggers the same visual comfort as CRT phosphor glow.',
            href: '/notes/synthwave',
            children: [
              e.jsx('garden-tag', { slot: 'footer', children: 'design' }),
              e.jsx('garden-tag', { slot: 'footer', children: 'color' }),
            ],
          }),
          e.jsxs('garden-card', {
            headline: 'Pixel art as a design constraint',
            meta: '3 weeks ago · 6 min read',
            excerpt: "When every pixel costs effort, you're forced into clarity.",
            href: '/notes/pixel-art',
            children: [
              e.jsx('garden-tag', { slot: 'footer', children: 'game design' }),
              e.jsx('garden-tag', { slot: 'footer', variant: 'sage', children: 'pixel' }),
            ],
          }),
        ],
      }),
  },
  c = {
    name: 'Wiki card grid',
    render: () =>
      e.jsxs('section', {
        'aria-label': 'Wiki articles',
        style: {
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 14,
          padding: '1.5rem',
          maxWidth: 600,
          background: 'var(--zine-paper, #f2edd7)',
          border: '3px solid #0e0c07',
          borderRight: '5px solid #0e0c07',
          borderBottom: '5px solid #0e0c07',
        },
        children: [
          e.jsx('garden-card', {
            variant: 'wiki',
            headline: 'Zettelkasten',
            meta: 'wiki · knowledge management',
            excerpt: 'A slip-box method for networked thinking.',
            href: '/wiki/zettelkasten',
          }),
          e.jsx('garden-card', {
            variant: 'wiki',
            headline: 'PARA method',
            meta: 'wiki · organisation',
            excerpt: "Projects, Areas, Resources, Archive — Tiago Forte's structure.",
            href: '/wiki/para',
          }),
          e.jsx('garden-card', {
            variant: 'wiki',
            headline: 'Evergreen notes',
            meta: 'wiki · writing',
            excerpt: 'Notes written to accumulate insight over time.',
            href: '/wiki/evergreen',
          }),
        ],
      }),
  },
  g = {
    name: 'Home discovery grid',
    render: () =>
      e.jsxs('section', {
        'aria-label': 'Home discovery cards',
        style: {
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
          gap: 16,
          padding: '1.5rem',
          maxWidth: 760,
          background: 'var(--zine-paper, #f2edd7)',
          border: '3px solid #0e0c07',
          borderRight: '5px solid #0e0c07',
          borderBottom: '5px solid #0e0c07',
        },
        children: [
          e.jsx('garden-card', {
            headline: 'A Philosophy of Software Design',
            excerpt:
              'Notes on complexity, module depth, and why simple interfaces matter more than clever implementations.',
            href: '/notes/books/a-philosophy-of-software-design/',
          }),
          e.jsx('garden-card', {
            headline: 'Lit elements vs React',
            excerpt:
              "Web components shine when the goal is portability across stacks, not one framework's ergonomics.",
            href: '/notes/swe/lit-elements-vs-react/',
          }),
          e.jsx('garden-card', {
            headline: 'Synthwave palettes and why they work',
            excerpt:
              'High contrast plus neon on dark surfaces can stay readable when the hierarchy is disciplined.',
            href: '/notes/design/synthwave-palettes/',
          }),
        ],
      }),
  };
n.parameters = {
  ...n.parameters,
  docs: {
    ...((m = n.parameters) === null || m === void 0 ? void 0 : m.docs),
    source: {
      originalSource: `{
  render
}`,
      ...((h = n.parameters) === null || h === void 0 || (p = h.docs) === null || p === void 0
        ? void 0
        : p.source),
    },
  },
};
d.parameters = {
  ...d.parameters,
  docs: {
    ...((f = d.parameters) === null || f === void 0 ? void 0 : f.docs),
    source: {
      originalSource: `{
  args: {
    variant: 'featured',
    headline: 'On building a second brain',
    meta: '3 days ago · 8 min read',
    excerpt: "The goal isn't to remember everything — it's to think better by offloading storage to a trusted system.",
    href: '/notes/second-brain'
  },
  render: ({
    variant,
    headline,
    meta: metaText,
    excerpt,
    href
  }: CardArgs) => <garden-card variant={variant} headline={headline} meta={metaText} excerpt={excerpt} href={href} style={{
    maxWidth: 320
  }}>
      <garden-tag slot="footer" variant="accent">
        pkm
      </garden-tag>
      <garden-tag slot="footer">zettelkasten</garden-tag>
    </garden-card>
}`,
      ...((x = d.parameters) === null || x === void 0 || (v = x.docs) === null || v === void 0
        ? void 0
        : v.source),
    },
  },
};
s.parameters = {
  ...s.parameters,
  docs: {
    ...((u = s.parameters) === null || u === void 0 ? void 0 : u.docs),
    source: {
      originalSource: `{
  args: {
    variant: 'wiki',
    headline: 'Zettelkasten',
    meta: 'wiki · knowledge management',
    excerpt: 'A slip-box method for networked thinking developed by Niklas Luhmann.',
    href: '/wiki/zettelkasten'
  },
  render: ({
    variant,
    headline,
    meta: metaText,
    excerpt,
    href
  }: CardArgs) => <garden-card variant={variant} headline={headline} meta={metaText} excerpt={excerpt} href={href} style={{
    maxWidth: 220
  }} />
}`,
      ...((w = s.parameters) === null || w === void 0 || (k = w.docs) === null || k === void 0
        ? void 0
        : k.source),
    },
  },
};
l.parameters = {
  ...l.parameters,
  docs: {
    ...((y = l.parameters) === null || y === void 0 ? void 0 : y.docs),
    source: {
      originalSource: `{
  name: 'Note card grid',
  render: () => <section aria-label="Recent notes" style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: 16,
    padding: '1.5rem',
    maxWidth: 680,
    background: 'var(--zine-paper, #f2edd7)',
    border: '3px solid #0e0c07',
    borderRight: '5px solid #0e0c07',
    borderBottom: '5px solid #0e0c07'
  }}>
      <garden-card variant="featured" headline="On building a second brain" meta="3 days ago · 8 min read" excerpt="The goal isn't to remember everything — it's to think better." href="/notes/second-brain">
        <garden-tag slot="footer" variant="accent">
          pkm
        </garden-tag>
        <garden-tag slot="footer">zettelkasten</garden-tag>
      </garden-card>
      <garden-card headline="Lit elements vs React" meta="1 week ago · 5 min read" excerpt="Web components shine when the goal is portability across stacks." href="/notes/lit-vs-react">
        <garden-tag slot="footer" variant="sage">
          frontend
        </garden-tag>
        <garden-tag slot="footer">lit</garden-tag>
      </garden-card>
      <garden-card headline="Synthwave palettes and why they work" meta="2 weeks ago · 4 min read" excerpt="High contrast + neon against dark surfaces triggers the same visual comfort as CRT phosphor glow." href="/notes/synthwave">
        <garden-tag slot="footer">design</garden-tag>
        <garden-tag slot="footer">color</garden-tag>
      </garden-card>
      <garden-card headline="Pixel art as a design constraint" meta="3 weeks ago · 6 min read" excerpt="When every pixel costs effort, you're forced into clarity." href="/notes/pixel-art">
        <garden-tag slot="footer">game design</garden-tag>
        <garden-tag slot="footer" variant="sage">
          pixel
        </garden-tag>
      </garden-card>
    </section>
}`,
      ...((_ = l.parameters) === null || _ === void 0 || (b = _.docs) === null || b === void 0
        ? void 0
        : b.source),
    },
  },
};
c.parameters = {
  ...c.parameters,
  docs: {
    ...((W = c.parameters) === null || W === void 0 ? void 0 : W.docs),
    source: {
      originalSource: `{
  name: 'Wiki card grid',
  render: () => <section aria-label="Wiki articles" style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 14,
    padding: '1.5rem',
    maxWidth: 600,
    background: 'var(--zine-paper, #f2edd7)',
    border: '3px solid #0e0c07',
    borderRight: '5px solid #0e0c07',
    borderBottom: '5px solid #0e0c07'
  }}>
      <garden-card variant="wiki" headline="Zettelkasten" meta="wiki · knowledge management" excerpt="A slip-box method for networked thinking." href="/wiki/zettelkasten" />
      <garden-card variant="wiki" headline="PARA method" meta="wiki · organisation" excerpt="Projects, Areas, Resources, Archive — Tiago Forte's structure." href="/wiki/para" />
      <garden-card variant="wiki" headline="Evergreen notes" meta="wiki · writing" excerpt="Notes written to accumulate insight over time." href="/wiki/evergreen" />
    </section>
}`,
      ...((R = c.parameters) === null || R === void 0 || (j = R.docs) === null || j === void 0
        ? void 0
        : j.source),
    },
  },
};
g.parameters = {
  ...g.parameters,
  docs: {
    ...((T = g.parameters) === null || T === void 0 ? void 0 : T.docs),
    source: {
      originalSource: `{
  name: 'Home discovery grid',
  render: () => <section aria-label="Home discovery cards" style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
    gap: 16,
    padding: '1.5rem',
    maxWidth: 760,
    background: 'var(--zine-paper, #f2edd7)',
    border: '3px solid #0e0c07',
    borderRight: '5px solid #0e0c07',
    borderBottom: '5px solid #0e0c07'
  }}>
      <garden-card headline="A Philosophy of Software Design" excerpt="Notes on complexity, module depth, and why simple interfaces matter more than clever implementations." href="/notes/books/a-philosophy-of-software-design/" />
      <garden-card headline="Lit elements vs React" excerpt="Web components shine when the goal is portability across stacks, not one framework's ergonomics." href="/notes/swe/lit-elements-vs-react/" />
      <garden-card headline="Synthwave palettes and why they work" excerpt="High contrast plus neon on dark surfaces can stay readable when the hierarchy is disciplined." href="/notes/design/synthwave-palettes/" />
    </section>
}`,
      ...((G = g.parameters) === null || G === void 0 || (A = G.docs) === null || A === void 0
        ? void 0
        : A.source),
    },
  },
};
const N = ['Default', 'Featured', 'Wiki', 'NoteGrid', 'WikiGrid', 'HomeDiscoveryGrid'];
export {
  n as Default,
  d as Featured,
  g as HomeDiscoveryGrid,
  l as NoteGrid,
  s as Wiki,
  c as WikiGrid,
  N as __namedExportsOrder,
  D as default,
};
