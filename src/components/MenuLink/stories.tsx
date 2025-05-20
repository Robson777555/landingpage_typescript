import { Meta, StoryObj } from "@storybook/react";
import { MenuLink } from "./MenuLink";

const meta: Meta<typeof MenuLink> = {
  title: "Components/MenuLink",
  component: MenuLink,
  argTypes: {
    children: {
      control: "text",
      defaultValue: "Menu Item",
    },
    link: {
      control: "text",
      defaultValue: "#section",
    },
    newTab: {
      control: "boolean",
      defaultValue: false,
    },
  },
  args: {
    children: "Menu Item",
    link: "#section",
    newTab: false,
  },
};

export default meta;

type Story = StoryObj<typeof MenuLink>;

export const InternalLink: Story = {
  args: {
    link: "#section",
  },
};

export const ExternalLink: Story = {
  args: {
    link: "https://example.com",
    newTab: true,
  },
};

export const ActiveLink: Story = {
  args: {
    link: "#active",
  },
  parameters: {
    nextjs: {
      navigation: {
        pathname: "#active",
      },
    },
  },
};
