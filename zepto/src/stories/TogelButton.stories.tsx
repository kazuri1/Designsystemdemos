import type { Meta, StoryObj } from "@storybook/react-vite";
import { TogelButton } from "../components/atoms/TogelButton";

const meta = {
  title: "Atoms/TogelButton",
  component: TogelButton,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
## Visual States

- **Default**: 
  - Background: $comp-togel-bg-gradient (green gradient)
  - Text: $comp-togel-text-super (white, shadow), $comp-togel-text-saver (yellow)
  - Coin: $comp-togel-coin-bg (yellow), $comp-togel-coin-symbol (white)

## Tokens Used
- Global: $sys-color-togel-gradient-start, $sys-color-togel-gradient-end, $sys-color-togel-yellow, $sys-color-togel-white, $sys-color-togel-shadow, $sys-color-togel-coin-border, $sys-color-togel-coin-bg, $sys-color-togel-coin-symbol
- Component: $comp-togel-bg-gradient, $comp-togel-text-super, $comp-togel-text-saver, $comp-togel-shadow-super, $comp-togel-coin-bg, $comp-togel-coin-border, $comp-togel-coin-symbol, $comp-togel-radius, $comp-togel-padding, $comp-togel-font-weight-super, $comp-togel-font-weight-saver, $comp-togel-font-size-super, $comp-togel-font-size-saver

## Accessibility
- High contrast text
- Large touch target
- Focus states should be visible
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    labelSuper: { control: "text", description: "Text for SUPER" },
    labelSaver: { control: "text", description: "Text for SAVER" },
  },
} satisfies Meta<typeof TogelButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    labelSuper: "SUPER",
    labelSaver: "SAVER",
  },
};

export const SupersaverOff: Story = {
  args: {
    labelSuper: "SUPER",
    labelSaver: "SAVER",
    state: "off",
  },
};
