import { Meta, StoryObj } from "@storybook/react";
import { LogoLink } from "./LogoLink";

const meta: Meta<typeof LogoLink> = {
  title: "Components/LogoLink",
  component: LogoLink,
  parameters: {
    layout: "centered",
    nextjs: {
      appDirectory: true,
    },
  },
  argTypes: {
    text: {
      control: "text",
      description: "Texto do logo (se não usar imagem)",
    },
    srcImg: {
      control: "text",
      description: "Caminho para a imagem do logo",
    },
    link: {
      control: "text",
      description: "URL de destino do link",
    },
  },
  args: {
    text: "My Logo",
    srcImg: "",
    link: "/",
  },
};

export default meta;

type Story = StoryObj<typeof LogoLink>;

export const TextLogo: Story = {
  args: {
    text: "Text Logo",
    srcImg: "",
    link: "/",
  },
};

export const ImageLogo: Story = {
  args: {
    text: "Image Logo",
    srcImg: "/logo.svg",
    link: "https://example.com",
  },
};

export const Combined: Story = {
  args: {
    text: "Logo + Text",
    srcImg: "/logo.svg",
    link: "/about",
  },
};
