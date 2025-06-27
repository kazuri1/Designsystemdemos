import React from "react";
import { PriceDisplay } from "../components/atoms/PriceDisplay";

export default {
  title: "Atoms/PriceDisplay",
  component: PriceDisplay,
};

export const Default = () => <PriceDisplay price={100} mrp={119} />;
export const WithCurrency = () => (
  <PriceDisplay price={49.99} mrp={79.99} currency="$" />
);
export const LargeValue = () => (
  <PriceDisplay price={12345.67} mrp={15000} currency="€" />
);
