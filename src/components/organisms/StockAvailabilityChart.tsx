import React from "react";
import "../../styles/components/stock-availability-chart.css";

const pulseBarColors = [
  { label: "Available", color: "#3B82F6" }, // blue
  { label: "Low Stock", color: "#8B5CF6" }, // purple
  { label: "Out of stock", color: "#22C55E" }, // green
];
const mg1BarColors = [
  { label: "Available", color: "#ffb300" }, // subtle orange
  { label: "Low Stock", color: "#ffcc80" }, // pale orange
  { label: "Out of stock", color: "#ff7043" }, // coral orange
];

const stockData = {
  totalAsset: 53000,
  totalProduct: 442,
  bar: [
    { label: "Available", value: 70 },
    { label: "Low Stock", value: 20 },
    { label: "Out of stock", value: 10 },
  ],
  lowStock: [
    { name: "Dental Brush", qty: 3 },
    { name: "Charmflex Regular", qty: 2 },
  ],
};

export const StockAvailabilityChart: React.FC<{ brand?: string }> = ({
  brand = "pulse",
}) => {
  const barColors = brand === "1mg" ? mg1BarColors : pulseBarColors;
  const barData = stockData.bar.map((b, idx) => ({
    ...b,
    color: barColors[idx]?.color || barColors[0].color,
  }));
  const totalBar = barData.reduce((sum, b) => sum + b.value, 0);
  return (
    <div className="stock-availability-chart-card">
      <div className="stock-availability-header">Stock avability</div>
      <div className="stock-availability-totals-row">
        <div>
          <div className="stock-availability-label">TOTAL ASSET</div>
          <div className="stock-availability-total">
            ${stockData.totalAsset.toLocaleString()}
          </div>
        </div>
        <div>
          <div className="stock-availability-label">TOTAL PRODUCT</div>
          <div className="stock-availability-total">
            {stockData.totalProduct}
          </div>
        </div>
      </div>
      <div className="stock-availability-bar-row">
        <div className="stock-availability-bar-bg">
          {barData.map((b, idx) => (
            <div
              key={b.label}
              className="stock-availability-bar-segment"
              style={{
                width: `${(b.value / totalBar) * 100}%`,
                background: b.color,
                borderTopLeftRadius: idx === 0 ? 8 : 0,
                borderBottomLeftRadius: idx === 0 ? 8 : 0,
                borderTopRightRadius: idx === barData.length - 1 ? 8 : 0,
                borderBottomRightRadius: idx === barData.length - 1 ? 8 : 0,
              }}
            />
          ))}
        </div>
        <div className="stock-availability-bar-legend-row">
          {barData.map((b) => (
            <div key={b.label} className="stock-availability-bar-legend-item">
              <span
                className="stock-availability-bar-legend-dot"
                style={{ background: b.color }}
              />
              <span className="stock-availability-bar-legend-label">
                {b.label}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="stock-availability-lowstock-row">
        <div className="stock-availability-lowstock-title">LOW STOCK</div>
        <a className="stock-availability-lowstock-viewall" href="#">
          View all
        </a>
      </div>
      <div className="stock-availability-lowstock-list">
        {stockData.lowStock.map((item) => (
          <div className="stock-availability-lowstock-item" key={item.name}>
            <span className="stock-availability-lowstock-name">
              {item.name}
            </span>
            <span className="stock-availability-lowstock-qty">
              Qty: {item.qty}
            </span>
            <a className="stock-availability-lowstock-order" href="#">
              Order
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StockAvailabilityChart;
