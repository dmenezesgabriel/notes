import type { BreadcrumbItem } from '@notes/components';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

interface BreadcrumbArgs {
  items: BreadcrumbItem[];
}

const meta: Meta<BreadcrumbArgs> = {
  title: 'Components/GardenBreadcrumb',
  tags: ['autodocs'],
  argTypes: {
    items: {
      control: 'object',
      description:
        'Array of `{ label, href? }`. The last item is always the current page (`aria-current="page"` on its span, no link).',
    },
  },
  args: {
    items: [
      { label: 'home', href: '/' },
      { label: 'notes', href: '/notes' },
      { label: 'design system' },
    ],
  },
  parameters: {
    docs: {
      description: {
        component:
          'Accessible navigation trail. Renders `<nav aria-label="Breadcrumb">` with an ordered list. Last item is automatically marked `aria-current="page"` — no link.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const render = ({ items }: BreadcrumbArgs) => <garden-breadcrumb items={items} />;

export const Default: Story = { render };

export const TwoLevels: Story = {
  name: 'Two levels',
  args: {
    items: [{ label: 'home', href: '/' }, { label: 'on building a second brain' }],
  },
  render,
};

export const DeepPath: Story = {
  name: 'Deep path',
  args: {
    items: [
      { label: 'home', href: '/' },
      { label: 'wiki', href: '/wiki' },
      { label: 'pkm', href: '/wiki/pkm' },
      { label: 'zettelkasten' },
    ],
  },
  render,
};

export const InArticleHeader: Story = {
  name: 'In article header',
  render: () => (
    <header
      style={{
        background: 'var(--ds-surface)',
        padding: 24,
        borderRadius: 12,
        border: '1px solid var(--ds-border)',
        maxWidth: 600,
      }}
    >
      <garden-breadcrumb
        items={[
          { label: 'home', href: '/' },
          { label: 'notes', href: '/notes' },
          { label: 'pkm', href: '/notes/pkm' },
          { label: 'On building a second brain' },
        ]}
        style={{ marginBottom: 12 }}
      />
      <h1
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: 20,
          fontWeight: 500,
          letterSpacing: '-0.015em',
          margin: 0,
          color: 'var(--ds-ink)',
        }}
      >
        On building a second brain
      </h1>
    </header>
  ),
};
