import type { Meta, StoryObj } from "@storybook/react";

import Card from "./Card";

const meta: Meta<typeof Card> = {
  title: "Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "Title of the card",
      defaultValue: "Card Title",
    },
    content: {
      control: "text",
      description: "Content of the card",
      defaultValue: "This is the content of the card.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: "Card Title",
    content: "This is the content of the card.",
  },
};

export const WithFooter: Story = {
  args: {
    title: "Card Title",
    content: "This is the content of the card.",
    footer: <button>Footer Button</button>,
  },
};

export const LongContent: Story = {
  args: {
    title: "Card Title",
    content:
      "This is the content of the card. It can be quite long and span multiple lines. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
};
