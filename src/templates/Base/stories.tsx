import { Meta, StoryObj } from "@storybook/react";
import { Base } from "./Base";
import mockWithChildren from "./mockWithChildren";

const meta: Meta<typeof Base> = {
  title: "Templates/Base",
  component: Base,
  args: mockWithChildren,
};

export default meta;

type Story = StoryObj<typeof Base>;

export const Template: Story = {};
