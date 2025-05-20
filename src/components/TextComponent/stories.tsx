import { Meta, StoryObj } from "@storybook/react";
import { TextComponent } from "./TextComponent";

const meta: Meta<typeof TextComponent> = {
  title: "Components/TextComponent",
  component: TextComponent,
  parameters: {
    layout: "padded",
  },
  argTypes: {
    children: {
      control: "text",
      description: "Text content (supports HTML)",
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    as: {
      control: "select",
      options: ["div", "p", "span"],
    },
  },
  args: {
    children: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Nihil unde quod veritatis quam, exercitationem odit totam.`,
    size: "medium",
    as: "div",
  },
};

export default meta;

type Story = StoryObj<typeof TextComponent>;

export const Default: Story = {};

export const SmallText: Story = {
  args: {
    size: "small",
  },
};

export const LargeText: Story = {
  args: {
    size: "large",
  },
};

export const Paragraph: Story = {
  args: {
    as: "p",
  },
};

export const WithHTML: Story = {
  args: {
    children: 'Text with <a href="#">link</a> and <strong>strong</strong> text',
  },
};
