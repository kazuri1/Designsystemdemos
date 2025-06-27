import React from "react";
import { AddButton } from "../components/atoms/AddButton";

export default {
  title: "Atoms/AddButton",
  component: AddButton,
};

export const Default = () => <AddButton />;
export const CustomText = () => <AddButton>ADD TO CART</AddButton>;
