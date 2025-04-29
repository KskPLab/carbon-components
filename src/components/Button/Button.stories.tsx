import type { Meta, StoryObj } from "@storybook/react";

import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "Label of the button",
      defaultValue: "Click Me",
    },
    onClick: {
      action: "clicked",
      description: "Click event handler",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    label: "Click Me",
    type: "default",
  },
};
export const Primary: Story = {
  args: {
    label: "Click Me",
    type: "primary",
  },
};
export const Dashed: Story = {
  args: {
    label: "Click Me",
    type: "dashed",
  },
};

export const Text: Story = {
  args: {
    label: "Click Me",
    type: "text",
  },
};

export const Link: Story = {
  args: {
    label: "Click Me",
    type: "link",
  },
};

export const Small: Story = {
  args: {
    label: "Click Me",
    type: "default",
    size: "small",
  },
};

export const Middle: Story = {
  args: {
    label: "Click Me",
    type: "default",
    size: "middle",
  },
};

export const Large: Story = {
  args: {
    label: "Click Me",
    type: "default",
    size: "large",
  },
};
