import type { Meta, StoryObj } from '@storybook/nextjs-vite';

interface SearchArgs {
  placeholder: string;
  kbd: string;
  value: string;
}

const meta: Meta<SearchArgs> = {
  title: 'Components/GardenSearch',
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Input placeholder text (also used as `aria-label`)',
    },
    kbd: {
      control: 'text',
      description: 'Keyboard shortcut badge text. Leave empty to hide.',
    },
    value: {
      control: 'text',
      description: 'Current search value',
    },
  },
  args: {
    placeholder: 'Search notes, wiki, projects…',
    kbd: '⌘K',
    value: '',
  },
  parameters: {
    docs: {
      description: {
        component:
          'Search bar with optional keyboard shortcut badge. Fires `garden-search` CustomEvent `{ detail: { query } }` on every keystroke.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const render = ({ placeholder, kbd, value }: SearchArgs) => (
  <garden-search placeholder={placeholder} kbd={kbd} value={value} style={{ maxWidth: 480 }} />
);

export const Default: Story = { render };

export const NoKbd: Story = {
  name: 'Without shortcut badge',
  args: { kbd: '' },
  render,
};

export const WithValue: Story = {
  name: 'Pre-filled value',
  args: { value: 'zettelkasten' },
  render,
};

export const InNavbar: Story = {
  name: 'In navbar',
  render: () => (
    <header
      style={{
        background: 'var(--ds-surface)',
        borderBottom: '1px solid var(--ds-border)',
        padding: '8px 20px',
        display: 'flex',
        alignItems: 'center',
        gap: 16,
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-ui)',
          fontSize: 15,
          fontWeight: 500,
          color: 'var(--ds-ink)',
          whiteSpace: 'nowrap',
        }}
      >
        garden.dev
      </span>
      <nav aria-label="Main navigation" style={{ display: 'flex', gap: 4 }}>
        {['notes', 'wiki', 'about'].map((l) => (
          <a
            key={l}
            href="#"
            style={{
              fontSize: 13,
              color: 'var(--ds-muted)',
              padding: '4px 10px',
              textDecoration: 'none',
            }}
          >
            {l}
          </a>
        ))}
      </nav>
      <garden-search placeholder="Search…" kbd="⌘K" style={{ flex: 1, maxWidth: 360 }} />
    </header>
  ),
};
