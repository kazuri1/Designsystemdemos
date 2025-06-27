import React from "react";
import "../../styles/theme.scss";

export interface PricingCardProps {
  price: number | string;
  mrp: number | string;
  priceCurrency?: string;
  mrpCurrency?: string;
  className?: string;
}

export const PricingCard: React.FC<PricingCardProps> = ({
  price,
  mrp,
  priceCurrency = "₹",
  mrpCurrency = "₹",
  className = "",
}) => (
  <div className={`pricing-card ${className}`.trim()}>
    <div className="pricing-card__top">
      <span className="pricing-card__price">
        {priceCurrency}
        {price}
      </span>
    </div>
    <div className="pricing-card__bottom">
      <span className="pricing-card__mrp">
        {mrpCurrency}
        {mrp}
      </span>
    </div>
  </div>
);
