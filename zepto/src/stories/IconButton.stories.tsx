import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { IconButton } from "../components/atoms/IconButton";
import "../styles/theme.scss";

// --- Storybook Meta ---
const meta = {
  title: "Example/IconButton",
  component: IconButton,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
## Icon Button
A reusable button with an icon and text, styled with TT Norms Pro font.
### Tokens Used
- Icon Color: $comp-loginbutton-icon-color
- Icon Size: $comp-loginbutton-icon-size
- Text Color: $comp-loginbutton-text-color
- Font Family: $comp-loginbutton-font-family
- Font Size: $comp-loginbutton-font-size
- Gap: $comp-loginbutton-icon-text-gap
`,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    icon: { control: false },
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Login: Story = {
  args: {
    icon: <AccountCircleOutlinedIcon fontSize="inherit" />,
    label: "Login",
  },
};

export const Cart: Story = {
  args: {
    icon: <ShoppingCartOutlinedIcon fontSize="inherit" />,
    label: "Cart",
  },
};
