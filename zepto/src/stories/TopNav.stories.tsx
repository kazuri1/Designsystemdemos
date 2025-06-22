import type { Meta, StoryObj } from "@storybook/react";
import { TopNav } from "../components/organisms/TopNav";
import "../styles/theme.scss";

const meta = {
  title: "Organisms/TopNav",
  component: TopNav,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof TopNav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
