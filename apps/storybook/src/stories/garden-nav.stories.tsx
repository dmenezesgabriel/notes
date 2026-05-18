import type { NavLink } from '@notes/components';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

interface NavArgs {
  brand: string;
  links: NavLink[];
}

const siteLinks: NavLink[] = [
  { label: 'notes', href: '/notes/', active: true },
  { label: 'books', href: '/notes/books/' },
  { label: 'about', href: '/notes/about/' },
];

const meta: Meta<NavArgs> = {
  title: 'Components/GardenNav',
  tags: ['autodocs'],
  argTypes: {
    brand: {
      control: 'text',
      description:
        'Brand name displayed in display font with yellow colour and misregistration ghost',
      table: { defaultValue: { summary: 'garden.dev' } },
    },
    links: {
      control: 'object',
      description: 'Array of `{ label, href, active? }` navigation links',
    },
  },
  args: {
    brand: 'garden.dev',
    links: siteLinks,
  },
  parameters: {
    layout: 'fullscreen',
    backgrounds: { default: 'dark' },
    docs: {
      description: {
        component:
          'Site-level navigation bar for the live digital garden. Includes active-link rendering, theme switching, and the brand/home affordance used by the shared site layout.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const render = ({ brand, links }: NavArgs) => (
  <garden-nav brand={brand} links={links} homeHref="/notes/" />
);

export const Default: Story = { render };

export const HomeRouteContext: Story = {
  name: 'Home route context',
  render: () => (
    <div style={{ minHeight: '50vh', background: 'var(--ds-page, #ede5c8)' }}>
      <garden-nav brand="garden.dev" links={siteLinks} homeHref="/notes/" />
      <section
        aria-label="Site introduction"
        style={{
          background: 'var(--zine-paper, #f2edd7)',
          border: '3px solid var(--zine-ink, #0e0c07)',
          borderTop: 'none',
          padding: '2.5rem 1.5rem 3rem',
        }}
      >
        <div
          style={{
            fontFamily: "'Cutive Mono', monospace",
            fontSize: 11,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--zine-red, #d42b2b)',
            marginBottom: '0.5rem',
          }}
        >
          /// NEU-BRUTALISM × PUNK ZINE × SCRAPBOOK
        </div>
        <h1
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(36px, 6vw, 64px)',
            letterSpacing: '0.04em',
            color: 'var(--zine-ink, #0e0c07)',
            margin: '0 0 0.75rem',
            lineHeight: 1,
          }}
        >
          THE knowledge GARDEN
        </h1>
        <p
          style={{
            fontFamily: "'Special Elite', serif",
            fontSize: 15,
            color: 'var(--zine-ink-faded, #2c2820)',
            lineHeight: 1.7,
            maxWidth: 520,
            margin: 0,
            borderLeft: '4px solid var(--zine-ink, #0e0c07)',
            paddingLeft: '1rem',
          }}
        >
          Search and browse notes on software engineering, books, productivity, and more.
        </p>
      </section>
    </div>
  ),
};

export const NoteRouteContext: Story = {
  name: 'Note route context',
  render: () => (
    <div style={{ minHeight: '50vh', background: 'var(--ds-page, #ede5c8)' }}>
      <garden-nav brand="garden.dev" links={siteLinks} homeHref="/notes/" />
      <main style={{ padding: '1.5rem' }}>
        <div
          style={{
            maxWidth: 900,
            margin: '0 auto',
            background: 'var(--zine-paper, #f2edd7)',
            border: '3px solid var(--zine-ink, #0e0c07)',
            padding: '1.5rem',
          }}
        >
          <garden-breadcrumb
            items={[
              { label: 'home', href: '/notes/' },
              { label: 'books', href: '/notes/books/' },
              { label: 'A Philosophy of Software Design' },
            ]}
          />
          <h1
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 40,
              letterSpacing: '0.04em',
              margin: '1.25rem 0 0.75rem',
              color: 'var(--zine-ink, #0e0c07)',
            }}
          >
            A Philosophy of Software Design
          </h1>
          <p
            style={{
              fontFamily: "'Special Elite', serif",
              fontSize: 15,
              color: 'var(--zine-ink-faded, #2c2820)',
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            Real page-context preview for the shared layout: the navigation stays sticky, keeps the
            notes link active, and sits above route-owned content.
          </p>
        </div>
      </main>
    </div>
  ),
};
