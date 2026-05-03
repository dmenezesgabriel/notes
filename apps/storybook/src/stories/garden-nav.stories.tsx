import type { NavLink } from '@notes/components';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

interface NavArgs {
  brand: string;
  links: NavLink[];
}

const defaultLinks: NavLink[] = [
  { label: 'NOTES', href: '/notes', active: true },
  { label: 'WIKI', href: '/wiki' },
  { label: 'PROJECTS', href: '/projects' },
  { label: 'ABOUT', href: '/about' },
];

const meta: Meta<NavArgs> = {
  title: 'Components/GardenNav',
  tags: ['autodocs'],
  argTypes: {
    brand: {
      control: 'text',
      description:
        'Brand name displayed in display font with yellow colour and misregistration ghost',
      table: { defaultValue: { summary: 'GARDEN.DEV' } },
    },
    links: {
      control: 'object',
      description: 'Array of `{ label, href, active? }` navigation links',
    },
  },
  args: {
    brand: 'GARDEN.DEV',
    links: defaultLinks,
  },
  parameters: {
    layout: 'fullscreen',
    backgrounds: { default: 'corkboard' },
    docs: {
      description: {
        component:
          'Site-level navigation bar. Sticky, black background, misregistered red shadow behind it (xerox artifact). ' +
          'Brand uses Bebas Neue + blue ghost offset. Links use Black Han Sans stamp style. ' +
          'Includes theme toggle (fires `garden-theme-change` event). Supports `actions` and `brand-icon` slots.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const render = ({ brand, links }: NavArgs) => <garden-nav brand={brand} links={links} />;

export const Default: Story = { render };

export const WithSearch: Story = {
  name: 'With search in actions slot',
  render: ({ brand, links }: NavArgs) => (
    <garden-nav brand={brand} links={links}>
      <garden-search slot="actions" placeholder="Search…" kbd="⌘K" style={{ width: 240 }} />
    </garden-nav>
  ),
};

export const CustomBrand: Story = {
  name: 'Custom brand',
  args: {
    brand: 'KNOWLEDGE.BASE',
    links: [
      { label: 'ALL NOTES', href: '/', active: true },
      { label: 'TAGS', href: '/tags' },
      { label: 'ABOUT', href: '/about' },
    ],
  },
  render,
};

export const InPageContext: Story = {
  name: 'In page context',
  render: () => (
    <div
      style={{
        minHeight: '50vh',
        background: '#2a2218',
        backgroundImage:
          'radial-gradient(circle at 20% 50%, rgba(90,70,30,0.3) 0%, transparent 60%)',
      }}
    >
      <garden-nav brand="GARDEN.DEV" links={defaultLinks} />
      {/* Hero section below nav */}
      <div
        style={{
          background: '#f2edd7',
          border: '3px solid #0e0c07',
          borderTop: 'none',
          padding: '2.5rem 1.5rem 2rem',
        }}
      >
        <div
          style={{
            fontFamily: "'Cutive Mono', monospace",
            fontSize: 11,
            letterSpacing: '0.15em',
            textTransform: 'uppercase' as const,
            color: '#d42b2b',
            marginBottom: '0.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <span style={{ color: '#6b6050' }}>///</span>
          NEU-BRUTALISM × PUNK ZINE
        </div>
        <garden-badge style={{ display: 'block', marginBottom: 8 }}>
          DESIGN SYSTEM · V0.1
        </garden-badge>
        <h1
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 32,
            letterSpacing: '0.04em',
            color: '#0e0c07',
            margin: '0 0 0.75rem',
            lineHeight: 1,
          }}
        >
          DIGITAL GARDEN
        </h1>
        <p
          style={{
            fontFamily: "'Special Elite', serif",
            fontSize: 15,
            color: '#2c2820',
            lineHeight: 1.7,
            maxWidth: 480,
            margin: 0,
            borderLeft: '4px solid #0e0c07',
            paddingLeft: '1rem',
          }}
        >
          A raw, loud, opinionated design language for long-form knowledge sites.
        </p>
      </div>
    </div>
  ),
};
