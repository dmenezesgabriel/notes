import type { Meta, StoryObj } from '@storybook/nextjs-vite';

interface BannerArgs {
  text: string;
}

const meta: Meta<BannerArgs> = {
  title: 'Components/Banner',
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: 'text',
      description: 'Banner text (marquee scrolling)',
    },
  },
  args: {
    text: 'NEU-BRUTALISM × PUNK ZINE · DESIGN SYSTEM V0.1 · GARDEN.DEV',
  },
  parameters: {
    backgrounds: { default: 'corkboard' },
    docs: {
      description: {
        component:
          'Zine-edition misregistration banner. Xerox artifact with scrolling marquee text and blue shadow offset. Uses `--zine-red`, `--zine-yellow`, `--zine-blue` tokens.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<BannerArgs>;

export const Default: Story = {
  render: (args) => <garden-banner text={args.text}></garden-banner>,
};

export const CustomText: Story = {
  args: {
    text: 'CUSTOM BANNER TEXT · DO IT YOURSELF · NO RULES',
  },
  render: (args) => <garden-banner text={args.text}></garden-banner>,
};

export const InPageContext: Story = {
  render: () => (
    <div style={{ minHeight: 200, background: '#2a2218' }}>
      <garden-banner text="KNOWLEDGE GARDEN · NEU-BRUTALISM × PUNK ZINE · NOTES · WIKI · SECOND BRAIN"></garden-banner>
      <div
        style={{
          padding: '2rem',
          background: '#f2edd7',
          border: '3px solid #0e0c07',
          borderTop: 'none',
        }}
      >
        <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 26 }}>Page Content</h2>
        <p style={{ fontFamily: "'Special Elite', serif", color: '#2c2820' }}>
          Content below the banner.
        </p>
      </div>
    </div>
  ),
};
