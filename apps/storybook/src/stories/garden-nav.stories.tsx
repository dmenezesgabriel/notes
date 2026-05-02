import type { NavLink } from '@notes/components';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

interface NavArgs {
  brand: string;
  links: NavLink[];
}

const defaultLinks: NavLink[] = [
  { label: 'notes', href: '/notes', active: true },
  { label: 'wiki', href: '/wiki' },
  { label: 'projects', href: '/projects' },
  { label: 'about', href: '/about' },
];

const meta: Meta<NavArgs> = {
  title: 'Components/GardenNav',
  tags: ['autodocs'],
  argTypes: {
    brand: {
      control: 'text',
      description: 'Brand name displayed next to the accent dot',
      table: { defaultValue: { summary: 'garden.dev' } },
    },
    links: {
      control: 'object',
      description: 'Array of `{ label, href, active? }` navigation links',
    },
  },
  args: {
    brand: 'garden.dev',
    links: defaultLinks,
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Site-level navigation bar. Sticky with glass-morphism background. Includes theme toggle (fires `garden-theme-change` event). Supports `actions` and `brand-icon` slots.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const render = ({ brand, links }: NavArgs) => <garden-nav brand={brand} links={links} />;

export const Default: Story = { render };

export const WithSearch: Story = {
  name: 'With search slot',
  render: ({ brand, links }: NavArgs) => (
    <garden-nav brand={brand} links={links}>
      <garden-search slot="actions" placeholder="Search…" kbd="⌘K" style={{ width: 240 }} />
    </garden-nav>
  ),
};

export const CustomBrand: Story = {
  name: 'Custom brand',
  args: {
    brand: 'knowledge.base',
    links: [
      { label: 'all notes', href: '/', active: true },
      { label: 'tags', href: '/tags' },
      { label: 'about', href: '/about' },
    ],
  },
  render,
};

export const InPageContext: Story = {
  name: 'In page context',
  render: () => (
    <div style={{ minHeight: '50vh', background: 'var(--ds-page)' }}>
      <garden-nav brand="garden.dev" links={defaultLinks} />
      <main style={{ padding: '2rem 1.25rem', maxWidth: 960, margin: '0 auto' }}>
        <garden-badge style={{ display: 'block', marginBottom: 8 }}>notes</garden-badge>
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 28,
            fontWeight: 500,
            letterSpacing: '-0.02em',
            color: 'var(--ds-ink)',
            margin: '0 0 0.75rem',
          }}
        >
          Digital Garden
        </h1>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 15,
            color: 'var(--ds-muted)',
            lineHeight: 1.7,
            maxWidth: 480,
            margin: 0,
          }}
        >
          A warm, readable design language for long-form knowledge sites.
        </p>
      </main>
    </div>
  ),
};
