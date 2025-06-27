import React from "react";
import "../../styles/theme.scss";

const cardData = [
  {
    src: "/assets/Zepto Main Cards/Atta, Rice, Oil & Dals.png",
    alt: "Atta, Rice, Oil & Dals",
  },
  {
    src: "/assets/Zepto Main Cards/Fruits and Vegetables.png",
    alt: "Fruits and Vegetables",
  },
  {
    src: "/assets/Zepto Main Cards/Ice Creams & More.png",
    alt: "Ice Creams & More",
  },
  {
    src: "/assets/Zepto Main Cards/Packaged Food.png",
    alt: "Packaged Food",
  },
  {
    src: "/assets/Zepto Main Cards/Frozen Food.png",
    alt: "Frozen Food",
  },
  {
    src: "/assets/Zepto Main Cards/Jewellery & Accessories.png",
    alt: "Jewellery & Accessories",
  },
  {
    src: "/assets/Zepto Main Cards/Apparel Lifestyle.png",
    alt: "Apparel Lifestyle",
  },
  {
    src: "/assets/Zepto Main Cards/Toys & Sports.png",
    alt: "Toys & Sports",
  },
  {
    src: "/assets/Zepto Main Cards/Sweets Craving.png",
    alt: "Sweets Craving",
  },
  {
    src: "/assets/Zepto Main Cards/Zepto Cafe.png",
    alt: "Zepto Cafe",
  },
  {
    src: "/assets/Zepto Main Cards/Masala & Dry Fruits.png",
    alt: "Masala & Dry Fruits",
  },
];

const supersaverCardData = [
  { src: "/assets/zeptosupersavercards/Atta.webp", alt: "Atta" },
  { src: "/assets/zeptosupersavercards/rice.webp", alt: "Rice" },
  { src: "/assets/zeptosupersavercards/Oil.webp", alt: "Oil" },
  {
    src: "/assets/zeptosupersavercards/Dals & Pulses.webp",
    alt: "Dals & Pulses",
  },
  {
    src: "/assets/zeptosupersavercards/Dairy,Bread and Eggs.webp",
    alt: "Dairy, Bread and Eggs",
  },
  {
    src: "/assets/zeptosupersavercards/Fruits and Vegetables.webp",
    alt: "Fruits and Vegetables",
  },
  { src: "/assets/zeptosupersavercards/Daily Goods.webp", alt: "Daily Goods" },
];

export const Cards = () => (
  <div style={{ display: "flex", gap: 32 }}>
    {cardData.map((card) => (
      <img
        key={card.alt}
        src={card.src}
        alt={card.alt}
        style={{ width: 100, height: "auto", borderRadius: 12 }}
      />
    ))}
  </div>
);

export const SupersaverCards = () => (
  <div style={{ display: "flex", gap: 32 }}>
    {supersaverCardData.map((card) => (
      <img
        key={card.alt}
        src={card.src}
        alt={card.alt}
        style={{ width: 200, height: "auto", borderRadius: 12 }}
      />
    ))}
  </div>
);
