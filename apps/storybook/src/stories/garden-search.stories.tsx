import type { Meta, StoryObj } from '@storybook/nextjs-vite';

interface SearchArgs {
  label: string;
  placeholder: string;
  kbd: string;
  value: string;
}

const meta: Meta<SearchArgs> = {
  title: 'Molecules/GardenSearch',
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description:
        'Stable accessible name exposed to assistive technology. Takes precedence over `placeholder` for `aria-label`.',
    },
    placeholder: {
      control: 'text',
      description:
        'Input placeholder text. Also used as `aria-label` fallback when `label` is not set.',
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
    label: 'Search notes',
    placeholder: 'Search notes, wiki, projects…',
    kbd: '⌘K',
    value: '',
  },
  parameters: {
    docs: {
      description: {
        component:
          'Typewriter search bar used by the home discovery slice and navigation actions. White background, thick offset border, Cutive Mono font, blinking cursor. ' +
          'Fires `garden-search` CustomEvent `{ detail: { query } }` on every keystroke. ' +
          'Exposes a stable accessible name via the `label` property (falls back to `placeholder`). ' +
          'Focus shows a yellow outline (`--zine-yellow`) in addition to the translate offset.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const render = ({ label, placeholder, kbd, value }: SearchArgs) => (
  <garden-search
    label={label}
    placeholder={placeholder}
    kbd={kbd}
    value={value}
    style={{ maxWidth: 480 }}
  />
);

export const Default: Story = { render };

export const FocusIndicator: Story = {
  name: 'Keyboard focus indicator',
  args: { label: 'Search notes', kbd: '⌘K' },
  render,
  play: async ({ canvasElement }) => {
    const el = canvasElement.querySelector('garden-search') as HTMLElement;
    const input = el?.shadowRoot?.querySelector('input') as HTMLInputElement | null;
    input?.focus();
  },
};

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
      <garden-search label="Search notes" placeholder="Search notes, wiki, projects…" kbd="⌘K" />
    </div>
  ),
};

export const HomeHeroSearch: Story = {
  name: 'Home hero search',
  render: () => (
    <div
      style={{
        background: 'var(--zine-paper, #f2edd7)',
        border: '3px solid var(--zine-ink, #0e0c07)',
        borderTop: 'none',
        padding: '2rem 1.5rem 2.5rem',
        maxWidth: 620,
      }}
    >
      <p
        style={{
          fontFamily: 'var(--font-body, "Special Elite", serif)',
          fontSize: 15,
          color: 'var(--zine-ink-faded, #2c2820)',
          margin: '0 0 1rem',
        }}
      >
        Search notes across books, software engineering, productivity, and design.
      </p>
      <garden-search
        label="Search notes"
        placeholder="Search notes…"
        kbd="⌘K"
        style={{ width: '100%' }}
      />
    </div>
  ),
};

export const InNav: Story = {
  name: 'Slotted in garden-nav',
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div style={{ background: 'var(--ds-page, #11111b)' }}>
      <garden-nav brand="GARDEN.DEV" links={[{ label: 'NOTES', href: '/notes', active: true }]}>
        <garden-search
          slot="actions"
          label="Search notes"
          placeholder="Search…"
          kbd="⌘K"
          style={{ width: 260 }}
        />
      </garden-nav>
    </div>
  ),
};
