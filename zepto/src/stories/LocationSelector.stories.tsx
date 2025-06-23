import type { Meta, StoryObj } from "@storybook/react";
import { LocationSelector } from "../components/atoms/LocationSelector";

const meta = {
  title: "Atoms/LocationSelector",
  component: LocationSelector,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
## Location Selector
A simple dropdown-style button for selecting a location.
### Tokens Used
- Text Color: $comp-locationselector-text-color
- Icon Color: $comp-locationselector-icon-color
- Font Family: $comp-locationselector-font-family
- Font Size: $comp-locationselector-font-size
- Gap: $comp-locationselector-icon-text-gap
`,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
  },
} satisfies Meta<typeof LocationSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Select Location",
  },
};
