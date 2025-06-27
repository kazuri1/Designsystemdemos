import React from "react";
import { ProductCard } from "../components/molecules/ProductCard";

export default {
  title: "Molecules/ProductCard",
  component: ProductCard,
};

export const Carrot = () => (
  <ProductCard
    image="https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80"
    saveLabel="SAVE ₹19"
    weight="500 g"
    title="Carrot Ooty"
    desc="Tender & Fresh"
    ratingValue={4.5}
    ratingCount="4.0k"
  />
);

export const Tomato = () => (
  <ProductCard
    image="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=400&q=80"
    saveLabel="SAVE ₹10"
    weight="1 kg"
    title="Tomato Local"
    desc="Juicy & Ripe"
    ratingValue={4.2}
    ratingCount="2.1k"
  />
);
