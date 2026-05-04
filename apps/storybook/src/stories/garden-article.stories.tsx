import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta = {
  title: 'Components/GardenArticle',
  tags: ['autodocs'],
  parameters: {
    backgrounds: { default: 'paper' },
    layout: 'padded',
    docs: {
      description: {
        component:
          '`<garden-article>` — Note/article page layout shell. ' +
          'Provides the h1 title, meta-tags row, optional two-column grid with sticky sidebar, ' +
          'and backlinks section. All content is injected via **named slots** in the light DOM ' +
          'so host-document CSS (`.prose`, `globals.css`) applies to slotted children without ' +
          'any shadow-DOM workarounds. ' +
          '\n\n**Slots:** `breadcrumb` · `meta` · `content` · `sidebar` · `backlinks`',
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

const sampleProse = `
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
`;

export const Default: Story = {
  name: 'Default (no sidebar)',
  render: () => (
    <div style={{ maxWidth: 900 }}>
      <garden-article title="On building a second brain">
        <div slot="breadcrumb">
          <garden-breadcrumb
            style={{ display: 'block' }}
            items={[
              { label: 'home', href: '/' },
              { label: 'PKM', href: '/notes/pkm' },
              { label: 'On building a second brain' },
            ]}
          />
        </div>
        <garden-tag slot="meta" variant="sage">
          PKM
        </garden-tag>
        <garden-tag slot="meta" variant="default">
          DRAFT
        </garden-tag>
        <div slot="content" className="prose" dangerouslySetInnerHTML={{ __html: sampleProse }} />
      </garden-article>
    </div>
  ),
};

export const WithSidebar: Story = {
  name: 'With sidebar (TOC)',
  render: () => (
    <div style={{ maxWidth: 900 }}>
      <garden-article title="On building a second brain" has-sidebar="">
        <div slot="breadcrumb">
          <garden-breadcrumb
            style={{ display: 'block' }}
            items={[
              { label: 'home', href: '/' },
              { label: 'PKM', href: '/notes/pkm' },
              { label: 'On building a second brain' },
            ]}
          />
        </div>
        <garden-tag slot="meta" variant="sage">
          PKM
        </garden-tag>
        <div slot="content" className="prose" dangerouslySetInnerHTML={{ __html: sampleProse }} />
        <garden-toc
          slot="sidebar"
          heading="On this page"
          items={[
            { id: 'intro', label: 'Introduction', depth: 1 },
            { id: 'capture', label: 'The capture habit', depth: 2 },
            { id: 'organisation', label: 'Organisation', depth: 1 },
          ]}
          style={{ display: 'block' }}
        />
      </garden-article>
    </div>
  ),
};

export const WithBacklinks: Story = {
  name: 'With backlinks',
  render: () => (
    <div style={{ maxWidth: 900 }}>
      <garden-article title="On building a second brain" has-sidebar="" has-backlinks="">
        <div slot="breadcrumb">
          <garden-breadcrumb
            style={{ display: 'block' }}
            items={[
              { label: 'home', href: '/' },
              { label: 'PKM', href: '/notes/pkm' },
              { label: 'On building a second brain' },
            ]}
          />
        </div>
        <garden-tag slot="meta" variant="sage">
          PKM
        </garden-tag>
        <div slot="content" className="prose" dangerouslySetInnerHTML={{ __html: sampleProse }} />
        <garden-toc
          slot="sidebar"
          heading="On this page"
          items={[
            { id: 'intro', label: 'Introduction', depth: 1 },
            { id: 'capture', label: 'The capture habit', depth: 2 },
            { id: 'organisation', label: 'Organisation', depth: 1 },
          ]}
          style={{ display: 'block' }}
        />
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
  ),
};

export const DarkMode: Story = {
  name: 'Dark mode',
  parameters: { backgrounds: { default: 'dark' } },
  render: () => (
    <div style={{ maxWidth: 900 }}>
      <garden-article title="On building a second brain" has-sidebar="" has-backlinks="">
        <div slot="breadcrumb">
          <garden-breadcrumb
            style={{ display: 'block' }}
            items={[
              { label: 'home', href: '/' },
              { label: 'PKM', href: '/notes/pkm' },
              { label: 'On building a second brain' },
            ]}
          />
        </div>
        <garden-tag slot="meta" variant="accent">
          PKM
        </garden-tag>
        <div slot="content" className="prose" dangerouslySetInnerHTML={{ __html: sampleProse }} />
        <garden-toc
          slot="sidebar"
          heading="On this page"
          items={[
            { id: 'intro', label: 'Introduction', depth: 1 },
            { id: 'capture', label: 'The capture habit', depth: 2 },
            { id: 'organisation', label: 'Organisation', depth: 1 },
          ]}
          style={{ display: 'block' }}
        />
        <li slot="backlinks">
          <garden-tag href="/notes/zettelkasten">Zettelkasten</garden-tag>
        </li>
        <li slot="backlinks">
          <garden-tag href="/notes/para">PARA Method</garden-tag>
        </li>
      </garden-article>
    </div>
  ),
};
