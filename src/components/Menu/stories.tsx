import { Meta, StoryObj } from "@storybook/react";
import { Menu } from "./Menu";
import linksMock from "../NavLinks/mock";

interface LogoData {
  text: string;
  link: string;
  srcImg?: string;
}

export default {
  title: "Components/Menu",
  component: Menu,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    links: {
      control: {
        type: "object",
      },
    },
    logoData: {
      control: {
        type: "object",
      },
    },
  },
  args: {
    links: linksMock,
    logoData: {
      text: "Logo",
      link: "#target",
      srcImg: "",
    } as LogoData,
  },
} as Meta<typeof Menu>;

type Story = StoryObj<typeof Menu>;

export const Desktop: Story = {};

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};
