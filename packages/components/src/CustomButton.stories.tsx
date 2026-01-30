import type { Meta, StoryObj } from '@storybook/react';
import { CustomButton } from './CustomButton';

const meta = {
  title: 'Components/CustomButton',
  component: CustomButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['primary', 'default', 'dashed', 'link', 'text'],
    },
  },
} satisfies Meta<typeof CustomButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Primary Button',
    type: 'primary',
  },
};

export const Default: Story = {
  args: {
    label: 'Default Button',
  },
};

export const Dashed: Story = {
  args: {
    label: 'Dashed Button',
    type: 'dashed',
  },
};

export const Link: Story = {
  args: {
    label: 'Link Button',
    type: 'link',
  },
};
