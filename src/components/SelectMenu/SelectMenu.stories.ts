import type { Meta, StoryObj } from "@storybook/react";

import SelectMenu from "./SelectMenu";

const meta: Meta<typeof SelectMenu> = {
  title: "MyUI/SelectMenu",
  component: SelectMenu,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    background: { control: "color" },
    textColor: { control: "color" },
  },
};

export default meta;
type Story = StoryObj<typeof SelectMenu>;

export const Primary: Story = {
  args: {
    options: [
      { key: "1", label: "Option 1" },
      { key: "2", label: "Option 2" },
    ],
    background: "#b1afaf",
    textColor: "#fff",
  },
};
