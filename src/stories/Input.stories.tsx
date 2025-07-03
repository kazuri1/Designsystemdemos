import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "./Input";

const meta = {
  title: "Example/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default",
    placeholder: "Placeholder",
    options: ["Option 1", "Option 2", "Option 3"],
  },
};

export const Disabled: Story = {
  args: {
    variant: "disabled",
    placeholder: "Placeholder",
    options: ["Option 1", "Option 2", "Option 3"],
    disabled: true,
  },
};

export const Underline: Story = {
  args: {
    variant: "underline",
    placeholder: "Placeholder",
    options: ["Option 1", "Option 2", "Option 3"],
  },
};
