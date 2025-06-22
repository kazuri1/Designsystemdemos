import type { Meta, StoryObj } from "@storybook/react-vite";
import React, { useState } from "react";
import { SearchBar } from "../components/molecules/SearchBar";

const meta = {
  title: "Example/SearchBar",
  component: SearchBar,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
## Tokens Used
- Background: $comp-searchbar-bg
- Border: $comp-searchbar-border
- Radius: $comp-searchbar-radius
- Padding: $comp-searchbar-padding
- Icon Color: $comp-searchbar-icon-color
- Font Size: $comp-searchbar-font-size
- Font Family: $comp-searchbar-font-family
- Shadow: $comp-searchbar-shadow

## Usage
- Uses Material Icons for the search icon.
- Fully tokenized for easy theming.
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    value: { control: "text" },
    placeholder: { control: "text" },
  },
} satisfies Meta<typeof SearchBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState("");
    return (
      <SearchBar
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  },
  args: {
    placeholder: 'Search for "banana"',
  },
};
