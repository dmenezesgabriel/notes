import type { PinColor } from '@notes/components';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

interface SheetArgs {
  pinColor: PinColor;
  heading: string;
}

const meta: Meta<SheetArgs> = {
  title: 'Components/Sheet',
  tags: ['autodocs'],
  argTypes: {
    pinColor: {
      control: { type: 'select' },
      options: ['red', 'yellow', 'blue', 'green'],
      description: 'Pin color — `red` (default), `yellow`, `blue`, `green`',
    },
    heading: {
      control: 'text',
      description: 'Optional section heading',
    },
  },
  args: {
    pinColor: 'red',
    heading: 'SECTION TITLE',
  },
  parameters: {
    backgrounds: { default: 'dark' },
    docs: {
      description: {
        component:
          'Zine-edition paper sheet pinned to corkboard. Simulates pinned paper with pushpin and optional heading. Uses `--zine-paper`, `--zine-shadow-lg`, `--zine-border` tokens.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<SheetArgs>;

export const Default: Story = {
  render: (args) => (
    <garden-sheet heading={args.heading}>
      <p style={{ fontFamily: "'Special Elite', serif", color: '#2c2820' }}>
        Sheet content goes here.
      </p>
    </garden-sheet>
  ),
};

export const YellowPin: Story = {
  args: { pinColor: 'yellow', heading: 'COLOUR TOKENS' },
  render: (args) => (
    <garden-sheet pinColor={args.pinColor} heading={args.heading}>
      <p style={{ fontFamily: "'Special Elite', serif", color: '#2c2820' }}>
        Sheet with yellow pin.
      </p>
    </garden-sheet>
  ),
};

export const BluePin: Story = {
  args: { pinColor: 'blue', heading: 'TYPOGRAPHY SCALE' },
  render: (args) => (
    <garden-sheet pinColor={args.pinColor} heading={args.heading}>
      <p style={{ fontFamily: "'Special Elite', serif", color: '#2c2820' }}>Sheet with blue pin.</p>
    </garden-sheet>
  ),
};

export const GreenPin: Story = {
  args: { pinColor: 'green', heading: 'SPACING & SHADOWS' },
  render: (args) => (
    <garden-sheet pinColor={args.pinColor} heading={args.heading}>
      <p style={{ fontFamily: "'Special Elite', serif", color: '#2c2820' }}>
        Sheet with green pin.
      </p>
    </garden-sheet>
  ),
};

export const NoHeading: Story = {
  render: () => (
    <garden-sheet>
      <p style={{ fontFamily: "'Special Elite', serif", color: '#2c2820' }}>
        Sheet without heading.
      </p>
    </garden-sheet>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div
      style={{
        padding: '2rem',
        background: 'var(--ds-page, #11111b)',
        display: 'flex',
        flexDirection: 'column',
        gap: '3rem',
      }}
    >
      <garden-sheet heading="RED PIN (DEFAULT)">
        <p style={{ fontFamily: "'Special Elite', serif", color: '#2c2820' }}>Default red pin.</p>
      </garden-sheet>
      <garden-sheet pinColor="yellow" heading="YELLOW PIN">
        <p style={{ fontFamily: "'Special Elite', serif", color: '#2c2820' }}>
          Yellow pin variant.
        </p>
      </garden-sheet>
      <garden-sheet pinColor="blue" heading="BLUE PIN">
        <p style={{ fontFamily: "'Special Elite', serif", color: '#2c2820' }}>Blue pin variant.</p>
      </garden-sheet>
      <garden-sheet pinColor="green" heading="GREEN PIN">
        <p style={{ fontFamily: "'Special Elite', serif", color: '#2c2820' }}>Green pin variant.</p>
      </garden-sheet>
    </div>
  ),
};
