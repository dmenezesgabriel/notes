import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta = {
  title: 'Components/MyHeading',
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <my-heading text="Hello Storybook" />,
};

export const CustomText: Story = {
  render: () => <my-heading text="Custom heading text" />,
};
