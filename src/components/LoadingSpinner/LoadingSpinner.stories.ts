import type { Meta, StoryObj } from "@storybook/react";

import LoadingSpinner from "./LoadingSpinner";

const meta: any = {
  title: "Example/LoadingSpinner",
  component: LoadingSpinner,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof LoadingSpinner>;

export default meta;

type Story = StoryObj<typeof LoadingSpinner>; //meta>;

export const Spinning: Story = {
  args: {
    active: true,
    invert: true,
  },
};
