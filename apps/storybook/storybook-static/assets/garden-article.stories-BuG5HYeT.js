import { j as e } from './iframe-BMk1oW9O.js';
import './preload-helper-C1FmrZbK.js';
var n, l, d, o, c, b, h, g, m, p, u, k;
const x = {
    title: 'Templates/GardenArticle',
    tags: ['autodocs'],
    parameters: {
      backgrounds: { default: 'paper' },
      layout: 'padded',
      docs: {
        description: {
          component:
            '`<garden-article>` — Note/article page layout shell. Provides the h1 title, meta-tags row, optional two-column grid with sticky sidebar, and backlinks section. All content is injected via **named slots** in the light DOM so host-document CSS (`.prose`, `globals.css`) applies to slotted children without any shadow-DOM workarounds. These stories document the supported note template states used by the live note route: without sidebar, with sidebar, and with backlinks.\n\n**Slots:** `breadcrumb` · `meta` · `content` · `sidebar` · `backlinks`',
        },
      },
    },
  },
  i = `
<h2 id="intro">Introduction</h2>
<p>
  The goal isn't to remember everything — it's to
  <mark style="background:var(--zine-yellow,#f5c800);padding:0 3px">think better</mark>
  by offloading storage to a trusted system you actually use.
</p>
<h3 id="capture">The capture habit</h3>
<p>
  Every note you capture is a future conversation with yourself.
  The format matters less than the habit of externalising thinking
  before it disappears.
</p>
<blockquote>
  <p>"We are what we repeatedly do. Excellence, then, is not an act, but a habit." — Aristotle</p>
</blockquote>
<h2 id="organisation">Organisation</h2>
<p>
  PARA (Projects, Areas, Resources, Archives) gives you a four-bucket system
  that maps to how you actually <em>use</em> information, not how you
  <em>think</em> about it academically.
</p>
<pre><code class="language-ts">const garden = new Garden({
  theme: 'neu-brutalist-zine',
  fonts: 'ransom-note',
});</code></pre>
`,
  a = {
    name: 'Default (no sidebar)',
    render: () =>
      e.jsx('div', {
        style: { maxWidth: 900 },
        children: e.jsxs('garden-article', {
          title: 'On building a second brain',
          children: [
            e.jsx('div', {
              slot: 'breadcrumb',
              children: e.jsx('garden-breadcrumb', {
                style: { display: 'block' },
                items: [
                  { label: 'home', href: '/' },
                  { label: 'PKM', href: '/notes/pkm' },
                  { label: 'On building a second brain' },
                ],
              }),
            }),
            e.jsx('garden-tag', { slot: 'meta', variant: 'sage', children: 'PKM' }),
            e.jsx('garden-tag', { slot: 'meta', variant: 'default', children: 'DRAFT' }),
            e.jsx('div', {
              slot: 'content',
              className: 'prose',
              dangerouslySetInnerHTML: { __html: i },
            }),
          ],
        }),
      }),
  },
  t = {
    name: 'With sidebar (TOC)',
    render: () =>
      e.jsx('div', {
        style: { maxWidth: 900 },
        children: e.jsxs('garden-article', {
          title: 'On building a second brain',
          'has-sidebar': '',
          children: [
            e.jsx('div', {
              slot: 'breadcrumb',
              children: e.jsx('garden-breadcrumb', {
                style: { display: 'block' },
                items: [
                  { label: 'home', href: '/' },
                  { label: 'PKM', href: '/notes/pkm' },
                  { label: 'On building a second brain' },
                ],
              }),
            }),
            e.jsx('garden-tag', { slot: 'meta', variant: 'sage', children: 'PKM' }),
            e.jsx('div', {
              slot: 'content',
              className: 'prose',
              dangerouslySetInnerHTML: { __html: i },
            }),
            e.jsx('garden-toc', {
              slot: 'sidebar',
              heading: 'On this page',
              items: [
                { id: 'intro', label: 'Introduction', depth: 1 },
                { id: 'capture', label: 'The capture habit', depth: 2 },
                { id: 'organisation', label: 'Organisation', depth: 1 },
              ],
              style: { display: 'block' },
            }),
          ],
        }),
      }),
  },
  r = {
    name: 'With backlinks',
    render: () =>
      e.jsx('div', {
        style: { maxWidth: 900 },
        children: e.jsxs('garden-article', {
          title: 'On building a second brain',
          'has-sidebar': '',
          'has-backlinks': '',
          children: [
            e.jsx('div', {
              slot: 'breadcrumb',
              children: e.jsx('garden-breadcrumb', {
                style: { display: 'block' },
                items: [
                  { label: 'home', href: '/' },
                  { label: 'PKM', href: '/notes/pkm' },
                  { label: 'On building a second brain' },
                ],
              }),
            }),
            e.jsx('garden-tag', { slot: 'meta', variant: 'sage', children: 'PKM' }),
            e.jsx('div', {
              slot: 'content',
              className: 'prose',
              dangerouslySetInnerHTML: { __html: i },
            }),
            e.jsx('garden-toc', {
              slot: 'sidebar',
              heading: 'On this page',
              items: [
                { id: 'intro', label: 'Introduction', depth: 1 },
                { id: 'capture', label: 'The capture habit', depth: 2 },
                { id: 'organisation', label: 'Organisation', depth: 1 },
              ],
              style: { display: 'block' },
            }),
            e.jsx('li', {
              slot: 'backlinks',
              children: e.jsx('garden-tag', {
                href: '/notes/zettelkasten',
                children: 'Zettelkasten',
              }),
            }),
            e.jsx('li', {
              slot: 'backlinks',
              children: e.jsx('garden-tag', { href: '/notes/para', children: 'PARA Method' }),
            }),
            e.jsx('li', {
              slot: 'backlinks',
              children: e.jsx('garden-tag', { href: '/notes/pkm', children: 'PKM' }),
            }),
          ],
        }),
      }),
  },
  s = {
    name: 'Dark mode',
    parameters: { backgrounds: { default: 'dark' } },
    render: () =>
      e.jsx('div', {
        style: { maxWidth: 900 },
        children: e.jsxs('garden-article', {
          title: 'On building a second brain',
          'has-sidebar': '',
          'has-backlinks': '',
          children: [
            e.jsx('div', {
              slot: 'breadcrumb',
              children: e.jsx('garden-breadcrumb', {
                style: { display: 'block' },
                items: [
                  { label: 'home', href: '/' },
                  { label: 'PKM', href: '/notes/pkm' },
                  { label: 'On building a second brain' },
                ],
              }),
            }),
            e.jsx('garden-tag', { slot: 'meta', variant: 'accent', children: 'PKM' }),
            e.jsx('div', {
              slot: 'content',
              className: 'prose',
              dangerouslySetInnerHTML: { __html: i },
            }),
            e.jsx('garden-toc', {
              slot: 'sidebar',
              heading: 'On this page',
              items: [
                { id: 'intro', label: 'Introduction', depth: 1 },
                { id: 'capture', label: 'The capture habit', depth: 2 },
                { id: 'organisation', label: 'Organisation', depth: 1 },
              ],
              style: { display: 'block' },
            }),
            e.jsx('li', {
              slot: 'backlinks',
              children: e.jsx('garden-tag', {
                href: '/notes/zettelkasten',
                children: 'Zettelkasten',
              }),
            }),
            e.jsx('li', {
              slot: 'backlinks',
              children: e.jsx('garden-tag', { href: '/notes/para', children: 'PARA Method' }),
            }),
          ],
        }),
      }),
  };
a.parameters = {
  ...a.parameters,
  docs: {
    ...((n = a.parameters) === null || n === void 0 ? void 0 : n.docs),
    source: {
      originalSource: `{
  name: 'Default (no sidebar)',
  render: () => <div style={{
    maxWidth: 900
  }}>
      <garden-article title="On building a second brain">
        <div slot="breadcrumb">
          <garden-breadcrumb style={{
          display: 'block'
        }} items={[{
          label: 'home',
          href: '/'
        }, {
          label: 'PKM',
          href: '/notes/pkm'
        }, {
          label: 'On building a second brain'
        }]} />
        </div>
        <garden-tag slot="meta" variant="sage">
          PKM
        </garden-tag>
        <garden-tag slot="meta" variant="default">
          DRAFT
        </garden-tag>
        <div slot="content" className="prose" dangerouslySetInnerHTML={{
        __html: sampleProse
      }} />
      </garden-article>
    </div>
}`,
      ...((d = a.parameters) === null || d === void 0 || (l = d.docs) === null || l === void 0
        ? void 0
        : l.source),
    },
  },
};
t.parameters = {
  ...t.parameters,
  docs: {
    ...((o = t.parameters) === null || o === void 0 ? void 0 : o.docs),
    source: {
      originalSource: `{
  name: 'With sidebar (TOC)',
  render: () => <div style={{
    maxWidth: 900
  }}>
      <garden-article title="On building a second brain" has-sidebar="">
        <div slot="breadcrumb">
          <garden-breadcrumb style={{
          display: 'block'
        }} items={[{
          label: 'home',
          href: '/'
        }, {
          label: 'PKM',
          href: '/notes/pkm'
        }, {
          label: 'On building a second brain'
        }]} />
        </div>
        <garden-tag slot="meta" variant="sage">
          PKM
        </garden-tag>
        <div slot="content" className="prose" dangerouslySetInnerHTML={{
        __html: sampleProse
      }} />
        <garden-toc slot="sidebar" heading="On this page" items={[{
        id: 'intro',
        label: 'Introduction',
        depth: 1
      }, {
        id: 'capture',
        label: 'The capture habit',
        depth: 2
      }, {
        id: 'organisation',
        label: 'Organisation',
        depth: 1
      }]} style={{
        display: 'block'
      }} />
      </garden-article>
    </div>
}`,
      ...((b = t.parameters) === null || b === void 0 || (c = b.docs) === null || c === void 0
        ? void 0
        : c.source),
    },
  },
};
r.parameters = {
  ...r.parameters,
  docs: {
    ...((h = r.parameters) === null || h === void 0 ? void 0 : h.docs),
    source: {
      originalSource: `{
  name: 'With backlinks',
  render: () => <div style={{
    maxWidth: 900
  }}>
      <garden-article title="On building a second brain" has-sidebar="" has-backlinks="">
        <div slot="breadcrumb">
          <garden-breadcrumb style={{
          display: 'block'
        }} items={[{
          label: 'home',
          href: '/'
        }, {
          label: 'PKM',
          href: '/notes/pkm'
        }, {
          label: 'On building a second brain'
        }]} />
        </div>
        <garden-tag slot="meta" variant="sage">
          PKM
        </garden-tag>
        <div slot="content" className="prose" dangerouslySetInnerHTML={{
        __html: sampleProse
      }} />
        <garden-toc slot="sidebar" heading="On this page" items={[{
        id: 'intro',
        label: 'Introduction',
        depth: 1
      }, {
        id: 'capture',
        label: 'The capture habit',
        depth: 2
      }, {
        id: 'organisation',
        label: 'Organisation',
        depth: 1
      }]} style={{
        display: 'block'
      }} />
        <li slot="backlinks">
          <garden-tag href="/notes/zettelkasten">Zettelkasten</garden-tag>
        </li>
        <li slot="backlinks">
          <garden-tag href="/notes/para">PARA Method</garden-tag>
        </li>
        <li slot="backlinks">
          <garden-tag href="/notes/pkm">PKM</garden-tag>
        </li>
      </garden-article>
    </div>
}`,
      ...((m = r.parameters) === null || m === void 0 || (g = m.docs) === null || g === void 0
        ? void 0
        : g.source),
    },
  },
};
s.parameters = {
  ...s.parameters,
  docs: {
    ...((p = s.parameters) === null || p === void 0 ? void 0 : p.docs),
    source: {
      originalSource: `{
  name: 'Dark mode',
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  },
  render: () => <div style={{
    maxWidth: 900
  }}>
      <garden-article title="On building a second brain" has-sidebar="" has-backlinks="">
        <div slot="breadcrumb">
          <garden-breadcrumb style={{
          display: 'block'
        }} items={[{
          label: 'home',
          href: '/'
        }, {
          label: 'PKM',
          href: '/notes/pkm'
        }, {
          label: 'On building a second brain'
        }]} />
        </div>
        <garden-tag slot="meta" variant="accent">
          PKM
        </garden-tag>
        <div slot="content" className="prose" dangerouslySetInnerHTML={{
        __html: sampleProse
      }} />
        <garden-toc slot="sidebar" heading="On this page" items={[{
        id: 'intro',
        label: 'Introduction',
        depth: 1
      }, {
        id: 'capture',
        label: 'The capture habit',
        depth: 2
      }, {
        id: 'organisation',
        label: 'Organisation',
        depth: 1
      }]} style={{
        display: 'block'
      }} />
        <li slot="backlinks">
          <garden-tag href="/notes/zettelkasten">Zettelkasten</garden-tag>
        </li>
        <li slot="backlinks">
          <garden-tag href="/notes/para">PARA Method</garden-tag>
        </li>
      </garden-article>
    </div>
}`,
      ...((k = s.parameters) === null || k === void 0 || (u = k.docs) === null || u === void 0
        ? void 0
        : u.source),
    },
  },
};
const f = ['Default', 'WithSidebar', 'WithBacklinks', 'DarkMode'];
export {
  s as DarkMode,
  a as Default,
  r as WithBacklinks,
  t as WithSidebar,
  f as __namedExportsOrder,
  x as default,
};
