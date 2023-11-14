import type { Meta, StoryObj } from "@storybook/react";

import { ToastStatus } from "@enums";

import Toast from "./Toast";

const meta: Meta<typeof Toast> = {
  title: "MyUI/Toast",
  component: Toast,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    background: { control: "color" },
    textColor: { control: "color" },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Primary: Story = {
  args: {
    type: ToastStatus.SUCCESS,
    message: "Toast's message",
  },
};
