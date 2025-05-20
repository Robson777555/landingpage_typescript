import { Meta, StoryObj } from "@storybook/react";
import { NavLinks } from "./NavLinks";
import mock from "./mock";

const meta: Meta<typeof NavLinks> = {
  title: "Components/NavLinks",
  component: NavLinks,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    links: {
      control: {
        type: "object",
      },
    },
    onLinkClick: {
      action: "clicked",
    },
  },
  args: {
    links: mock,
  },
};

export default meta;

type Story = StoryObj<typeof NavLinks>;

export const Default: Story = {};

export const MobileView: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};

export const Empty: Story = {
  args: {
    links: [],
  },
};
