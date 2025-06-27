import React from "react";
import "../../styles/theme.scss";

export interface PriceDisplayProps {
  price: number | string;
  mrp: number | string;
  currency?: string;
  className?: string;
}

export const PriceDisplay: React.FC<PriceDisplayProps> = ({
  price,
  mrp,
  currency = "₹",
  className = "",
}) => (
  <div className={`price-display-card ${className}`.trim()}>
    <div className="price-display-card__top">
      <span className="price-display-card__price">
        {currency}
        {price}
      </span>
    </div>
    <div className="price-display-card__bottom">
      <span className="price-display-card__mrp">
        {currency}
        {mrp}
      </span>
    </div>
  </div>
);
