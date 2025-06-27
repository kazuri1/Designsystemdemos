import React from "react";
import "../../styles/theme.scss";
import { AddButton } from "../atoms/AddButton";

export interface ProductCardProps {
  image: string;
  saveLabel: string;
  weight: string;
  title: string;
  desc: string;
  ratingValue: number;
  ratingCount: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  image,
  saveLabel,
  weight,
  title,
  desc,
  ratingValue,
  ratingCount,
}) => (
  <div className="product-card">
    <div
      className="product-card__image-wrapper"
      style={{ position: "relative" }}
    >
      <img className="product-card__image" src={image} alt={title} />
      <div style={{ position: "absolute", right: 12, bottom: 12, zIndex: 2 }}>
        <AddButton size="small" />
      </div>
    </div>
    <div className="product-card__save-label">{saveLabel}</div>
    <div className="product-card__weight">{weight}</div>
    <div className="product-card__title">{title}</div>
    <div className="product-card__desc">{desc}</div>
    <div className="product-card__rating">
      <span className="product-card__rating-star">★</span>
      <span className="product-card__rating-value">{ratingValue}</span>
      <span className="product-card__rating-count">({ratingCount})</span>
    </div>
  </div>
);
