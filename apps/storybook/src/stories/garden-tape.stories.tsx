import type { TapeVariant } from '@notes/components';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

interface TapeArgs {
  variant: TapeVariant;
  text: string;
}

const meta: Meta<TapeArgs> = {
  title: 'Components/Tape',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'red', 'blue', 'white'],
      description: 'Visual variant — `default` (yellow), `red`, `blue`, `white`',
    },
    text: {
      control: 'text',
      description: 'Tape text content',
    },
  },
  args: {
    variant: 'default',
    text: 'DESIGN SYSTEM · V0.1',
  },
  parameters: {
    backgrounds: { default: 'paper' },
    docs: {
      description: {
        component:
          'Zine-edition decorative tape strip. Diagonal tape element for scrapbook/decorative effect. Uses `--font-mono` token.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<TapeArgs>;

export const Default: Story = {
  render: (args) => (
    <div style={{ position: 'relative', padding: '2rem' }}>
      <garden-tape text={args.text}></garden-tape>
      <p style={{ fontFamily: "'Special Elite', serif", color: '#2c2820', marginTop: '2rem' }}>
        Content with tape decoration.
      </p>
    </div>
  ),
};

export const RedTape: Story = {
  args: { variant: 'red', text: 'CUT HERE ✂' },
  render: (args) => (
    <div style={{ position: 'relative', padding: '2rem' }}>
      <garden-tape variant={args.variant} text={args.text}></garden-tape>
      <p style={{ fontFamily: "'Special Elite', serif", color: '#2c2820', marginTop: '2rem' }}>
        Content with red tape.
      </p>
    </div>
  ),
};

export const BlueTape: Story = {
  args: { variant: 'blue', text: 'PAINT SWATCHES' },
  render: (args) => (
    <div style={{ position: 'relative', padding: '2rem' }}>
      <garden-tape variant={args.variant} text={args.text}></garden-tape>
      <p style={{ fontFamily: "'Special Elite', serif", color: '#2c2820', marginTop: '2rem' }}>
        Content with blue tape.
      </p>
    </div>
  ),
};

export const WhiteTape: Story = {
  args: { variant: 'white', text: 'RANSOM NOTE SYSTEM' },
  render: (args) => (
    <div style={{ position: 'relative', padding: '2rem' }}>
      <garden-tape variant={args.variant} text={args.text}></garden-tape>
      <p style={{ fontFamily: "'Special Elite', serif", color: '#2c2820', marginTop: '2rem' }}>
        Content with white tape.
      </p>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div
      style={{
        position: 'relative',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '3rem',
      }}
    >
      <div style={{ position: 'relative' }}>
        <garden-tape text="DEFAULT TAPE"></garden-tape>
      </div>
      <div style={{ position: 'relative' }}>
        <garden-tape variant="red" text="RED TAPE"></garden-tape>
      </div>
      <div style={{ position: 'relative' }}>
        <garden-tape variant="blue" text="BLUE TAPE"></garden-tape>
      </div>
      <div style={{ position: 'relative' }}>
        <garden-tape variant="white" text="WHITE TAPE"></garden-tape>
      </div>
    </div>
  ),
};
