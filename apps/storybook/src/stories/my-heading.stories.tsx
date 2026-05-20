import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta = {
  title: 'Legacy/MyHeading',
  parameters: {
    docs: {
      description: {
        component:
          'Status: `legacy` export. Backward-compatibility custom element with no approved role in the current atomic system. Replace with semantic page headings or shared template headings, and do not add new `my-heading` usage.',
      },
    },
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <my-heading text="Hello Storybook" />,
};

export const CustomText: Story = {
  render: () => <my-heading text="Custom heading text" />,
};
