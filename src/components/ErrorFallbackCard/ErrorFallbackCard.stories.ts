import type { Meta, StoryObj } from "@storybook/react";

import ErrorFallbackCard from "./ErrorFallbackCard";

const meta: Meta<typeof ErrorFallbackCard> = {
  title: "MyUI/ErrorFallbackCard",
  component: ErrorFallbackCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ErrorFallbackCard>;

export const Primary: Story = {
  args: {},
};
