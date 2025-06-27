import React from "react";
import { PricingCard } from "../components/atoms/PricingCard";

export default {
  title: "Atoms/PricingCard",
  component: PricingCard,
};

export const Default = () => <PricingCard price={100} mrp={119} />;
export const WithCurrency = () => (
  <PricingCard price={49.99} mrp={79.99} priceCurrency="$" mrpCurrency="$" />
);
export const MixedCurrencies = () => (
  <PricingCard price={100} mrp={119} priceCurrency="$" mrpCurrency="₹" />
);
export const LargeValue = () => (
  <PricingCard price={12345.67} mrp={15000} priceCurrency="€" mrpCurrency="€" />
);
