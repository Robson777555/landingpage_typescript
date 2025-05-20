import { Meta, StoryObj } from "@storybook/react";
import { Heading } from "./Heading";
import { theme } from "../../styles/theme";

const meta: Meta<typeof Heading> = {
  title: "Components/Heading",
  component: Heading,
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
      defaultValue: "Edite este texto",
    },
    colorDark: {
      control: "boolean",
      defaultValue: true,
    },
    as: {
      control: "select",
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
      defaultValue: "h1",
    },
    size: {
      control: "select",
      options: ["small", "medium", "big", "huge"],
      defaultValue: "huge",
    },
    uppercase: {
      control: "boolean",
      defaultValue: false,
    },
  },
  args: {
    children: "Edite este texto",
    colorDark: true,
    as: "h1",
    size: "huge",
    uppercase: false,
  },
};

export default meta;

type Story = StoryObj<typeof Heading>;

export const Default: Story = {};

export const Light: Story = {
  args: {
    colorDark: true,
    children: "Texto escuro",
  },
  parameters: {
    backgrounds: {
      default: "light",
      values: [{ name: "light", value: theme.colors.white }],
    },
  },
};

export const Dark: Story = {
  args: {
    colorDark: false,
    children: "Texto claro",
  },
  parameters: {
    backgrounds: {
      default: "dark",
      values: [{ name: "dark", value: theme.colors.primaryColor }],
    },
  },
};

export const Uppercase: Story = {
  args: {
    uppercase: true,
    children: "TEXTO EM MAIÚSCULAS",
  },
};

export const CustomSize: Story = {
  args: {
    size: "medium",
    children: "Tamanho médio",
  },
};
