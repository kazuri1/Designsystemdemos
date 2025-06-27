import React from "react";
import { TopNav } from "../components/organisms/TopNav";
import { SupersaverCards } from "../components/molecules/Cards";
import { ProductCard } from "../components/molecules/ProductCard";
import { PricingCard } from "../components/atoms/PricingCard";

const productCards = [
  {
    image: "/assets/Zeptoveggies/Carrot Ooty.jpg",
    saveLabel: "SAVE ₹19",
    weight: "500 g",
    title: "Carrot Ooty",
    desc: "Tender & Fresh",
    ratingValue: 4.5,
    ratingCount: "4.0k",
    price: 47.25,
    mrp: 116,
  },
  {
    image: "/assets/Zeptoveggies/Carrott local.jpg",
    saveLabel: "SAVE ₹10",
    weight: "500 g",
    title: "Carrot Local",
    desc: "Juicy & Sweet",
    ratingValue: 4.2,
    ratingCount: "2.1k",
    price: 39.5,
    mrp: 50,
  },
  {
    image: "/assets/Zeptoveggies/Beans.jpg",
    saveLabel: "SAVE ₹15",
    weight: "250 g",
    title: "Beans",
    desc: "Tender & Green",
    ratingValue: 4.7,
    ratingCount: "1.2k",
    price: 28,
    mrp: 43,
  },
  {
    image: "/assets/Zeptoveggies/capsicum green.jpg",
    saveLabel: "SAVE ₹8",
    weight: "500 g",
    title: "Capsicum Green",
    desc: "Crisp & Fresh",
    ratingValue: 4.3,
    ratingCount: "3.5k",
    price: 32,
    mrp: 40,
  },
  {
    image: "/assets/Zeptoveggies/Knol Knol.jpg",
    saveLabel: "SAVE ₹12",
    weight: "1 pc",
    title: "Knol Knol",
    desc: "Crunchy & Nutritious",
    ratingValue: 4.6,
    ratingCount: "2.8k",
    price: 18,
    mrp: 30,
  },
  {
    image: "/assets/Zeptoveggies/Sweetcorn.jpg",
    saveLabel: "SAVE ₹9",
    weight: "2 pcs",
    title: "Sweetcorn",
    desc: "Sweet & Juicy",
    ratingValue: 4.4,
    ratingCount: "1.9k",
    price: 22,
    mrp: 31,
  },
];

function SuperSaverOnPage({ onToggle }: { onToggle: () => void }) {
  return (
    <>
      <TopNav onTogelOff={onToggle} superSaverState="on" />
      <div
        style={{
          width: "100%",
          maxWidth: "1440px",
          margin: "32px auto 0 auto",
          paddingLeft: 0,
          paddingRight: 0,
          boxSizing: "border-box",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src="/assets/Zepto Main Cards/supersaverbanner.jpg"
          alt="Super Saver On Banner"
          style={{ width: "100%", borderRadius: 16, objectFit: "cover" }}
        />
      </div>
      <div
        style={{
          width: "100%",
          maxWidth: "1440px",
          margin: "32px auto 0 auto",
          paddingLeft: 0,
          paddingRight: 0,
          boxSizing: "border-box",
        }}
      >
        <SupersaverCards />
      </div>
      <h2 className="section-heading">Fruits and Vegetables</h2>
      <div
        style={{
          width: "100%",
          maxWidth: "1440px",
          margin: "24px auto 24px auto",
          display: "flex",
          justifyContent: "flex-start",
        }}
      ></div>
      <div
        style={{
          width: "100%",
          maxWidth: "1440px",
          margin: "24px auto 0 auto",
          display: "flex",
          flexWrap: "wrap",
          gap: 24,
          justifyContent: "flex-start",
        }}
      >
        {productCards.slice(0, 6).map((card, idx) => (
          <ProductCard key={idx} {...card} />
        ))}
      </div>
      <div style={{ marginBottom: 32 }} />
    </>
  );
}

export default SuperSaverOnPage;
