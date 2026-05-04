import type { CardVariant } from '@notes/components';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

interface CardArgs {
  variant: CardVariant;
  headline: string;
  meta: string;
  excerpt: string;
  href: string;
}

const metaDef: Meta<CardArgs> = {
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
          'Note/wiki card. When `href` is provided the headline becomes a stretched link (CSS `::after`) so the whole card is clickable — `<article>` is never wrapped by `<a>`.',
      },
    },
  },
};

export default metaDef;
type Story = StoryObj<typeof metaDef>;

const render = ({ variant, headline, meta: metaText, excerpt, href }: CardArgs) => (
  <garden-card
    variant={variant}
    headline={headline}
    meta={metaText}
    excerpt={excerpt}
    href={href}
    style={{ maxWidth: 320 }}
  >
    <garden-tag slot="footer" variant="sage">
      frontend
    </garden-tag>
    <garden-tag slot="footer">lit</garden-tag>
  </garden-card>
);

export const Default: Story = { render };

export const Featured: Story = {
  args: {
    variant: 'featured',
    headline: 'On building a second brain',
    meta: '3 days ago · 8 min read',
    excerpt:
      "The goal isn't to remember everything — it's to think better by offloading storage to a trusted system.",
    href: '/notes/second-brain',
  },
  render: ({ variant, headline, meta: metaText, excerpt, href }: CardArgs) => (
    <garden-card
      variant={variant}
      headline={headline}
      meta={metaText}
      excerpt={excerpt}
      href={href}
      style={{ maxWidth: 320 }}
    >
      <garden-tag slot="footer" variant="accent">
        pkm
      </garden-tag>
      <garden-tag slot="footer">zettelkasten</garden-tag>
    </garden-card>
  ),
};

export const Wiki: Story = {
  args: {
    variant: 'wiki',
    headline: 'Zettelkasten',
    meta: 'wiki · knowledge management',
    excerpt: 'A slip-box method for networked thinking developed by Niklas Luhmann.',
    href: '/wiki/zettelkasten',
  },
  render: ({ variant, headline, meta: metaText, excerpt, href }: CardArgs) => (
    <garden-card
      variant={variant}
      headline={headline}
      meta={metaText}
      excerpt={excerpt}
      href={href}
      style={{ maxWidth: 220 }}
    />
  ),
};

export const NoteGrid: Story = {
  name: 'Note card grid',
  render: () => (
    <section
      aria-label="Recent notes"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 16,
        padding: '1.5rem',
        maxWidth: 680,
        background: 'var(--zine-paper, #f2edd7)',
        border: '3px solid #0e0c07',
        borderRight: '5px solid #0e0c07',
        borderBottom: '5px solid #0e0c07',
      }}
    >
      <garden-card
        variant="featured"
        headline="On building a second brain"
        meta="3 days ago · 8 min read"
        excerpt="The goal isn't to remember everything — it's to think better."
        href="/notes/second-brain"
      >
        <garden-tag slot="footer" variant="accent">
          pkm
        </garden-tag>
        <garden-tag slot="footer">zettelkasten</garden-tag>
      </garden-card>
      <garden-card
        headline="Lit elements vs React"
        meta="1 week ago · 5 min read"
        excerpt="Web components shine when the goal is portability across stacks."
        href="/notes/lit-vs-react"
      >
        <garden-tag slot="footer" variant="sage">
          frontend
        </garden-tag>
        <garden-tag slot="footer">lit</garden-tag>
      </garden-card>
      <garden-card
        headline="Synthwave palettes and why they work"
        meta="2 weeks ago · 4 min read"
        excerpt="High contrast + neon against dark surfaces triggers the same visual comfort as CRT phosphor glow."
        href="/notes/synthwave"
      >
        <garden-tag slot="footer">design</garden-tag>
        <garden-tag slot="footer">color</garden-tag>
      </garden-card>
      <garden-card
        headline="Pixel art as a design constraint"
        meta="3 weeks ago · 6 min read"
        excerpt="When every pixel costs effort, you're forced into clarity."
        href="/notes/pixel-art"
      >
        <garden-tag slot="footer">game design</garden-tag>
        <garden-tag slot="footer" variant="sage">
          pixel
        </garden-tag>
      </garden-card>
    </section>
  ),
};

export const WikiGrid: Story = {
  name: 'Wiki card grid',
  render: () => (
    <section
      aria-label="Wiki articles"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 14,
        padding: '1.5rem',
        maxWidth: 600,
        background: 'var(--zine-paper, #f2edd7)',
        border: '3px solid #0e0c07',
        borderRight: '5px solid #0e0c07',
        borderBottom: '5px solid #0e0c07',
      }}
    >
      <garden-card
        variant="wiki"
        headline="Zettelkasten"
        meta="wiki · knowledge management"
        excerpt="A slip-box method for networked thinking."
        href="/wiki/zettelkasten"
      />
      <garden-card
        variant="wiki"
        headline="PARA method"
        meta="wiki · organisation"
        excerpt="Projects, Areas, Resources, Archive — Tiago Forte's structure."
        href="/wiki/para"
      />
      <garden-card
        variant="wiki"
        headline="Evergreen notes"
        meta="wiki · writing"
        excerpt="Notes written to accumulate insight over time."
        href="/wiki/evergreen"
      />
    </section>
  ),
};
