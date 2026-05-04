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
          'Typewriter search bar. White background, thick offset border, Cutive Mono font, blinking cursor. ' +
          'Fires `garden-search` CustomEvent `{ detail: { query } }` on every keystroke.',
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

export const InZineSheet: Story = {
  name: 'In zine sheet',
  render: () => (
    <div
      style={{
        background: 'var(--zine-paper, #f2edd7)',
        border: '3px solid #0e0c07',
        borderRight: '5px solid #0e0c07',
        borderBottom: '5px solid #0e0c07',
        padding: '1.5rem',
        maxWidth: 560,
        position: 'relative',
      }}
    >
      {/* yellow pin */}
      <div
        style={{
          position: 'absolute',
          top: -10,
          left: 24,
          width: 18,
          height: 18,
          background: '#f5c800',
          border: '2px solid #a08800',
          borderRadius: '50%',
          boxShadow: '0 2px 4px rgba(0,0,0,0.4)',
        }}
      />
      <div
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: 22,
          color: '#0e0c07',
          letterSpacing: '0.08em',
          marginBottom: '1.25rem',
          display: 'flex',
          alignItems: 'center',
          gap: 10,
        }}
      >
        <span style={{ color: '#d42b2b' }}>//</span> SEARCH
        <div
          style={{ flex: 1, height: 3, background: 'var(--zine-ink, #0e0c07)', marginLeft: 8 }}
        />
      </div>
      <garden-search placeholder="Search notes, wiki, projects…" kbd="⌘K" />
    </div>
  ),
};

export const InNav: Story = {
  name: 'Slotted in garden-nav',
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div style={{ background: 'var(--ds-page, #11111b)' }}>
      <garden-nav brand="GARDEN.DEV" links={[{ label: 'NOTES', href: '/notes', active: true }]}>
        <garden-search slot="actions" placeholder="Search…" kbd="⌘K" style={{ width: 260 }} />
      </garden-nav>
    </div>
  ),
};
