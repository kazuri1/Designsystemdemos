import React from "react";
import type { Meta } from "@storybook/react";
import { Cards } from "../components/molecules/Cards";
import "../styles/theme.scss";

const meta = {
  title: "Molecules/Cards",
  component: Cards,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Cards>;

export default meta;

export const Default = () => <Cards />;
