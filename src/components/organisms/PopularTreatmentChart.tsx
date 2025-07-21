import React from "react";
import "../../styles/components/income-expense-chart.css";

const treatments = [
  { name: "Scaling Teeth", rating: 4.7 },
  { name: "Tooth Extraction", rating: 4.4 },
  { name: "General Checkup", rating: 4.6 },
  { name: "Root Canal", rating: 4.5 },
];

export const PopularTreatmentChart: React.FC = () => {
  return (
    <div
      className="income-expense-chart-card"
      style={{
        padding: 20,
        maxWidth: 340,
        margin: "0 auto",
        color: "var(--text-color, #1f1f1f)",
      }}
    >
      <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 16 }}>
        Popular Treatment
      </div>
      <div>
        {treatments.map((treatment, idx) => (
          <div
            key={treatment.name}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: idx !== treatments.length - 1 ? 16 : 0,
            }}
          >
            <div
              style={{ display: "flex", alignItems: "center", fontSize: 15 }}
            >
              <span
                style={{
                  color: "var(--drawer-sectionTitle, #868686)",
                  fontWeight: 600,
                  marginRight: 8,
                }}
              >
                |
              </span>
              <span style={{ color: "var(--text-color, #1f1f1f)" }}>
                {treatment.name}
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
              <span style={{ color: "#FBBF24", fontSize: 18, marginRight: 2 }}>
                ★
              </span>
              <span
                style={{ color: "var(--text-color, #1f1f1f)", fontWeight: 600 }}
              >
                {treatment.rating}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularTreatmentChart;
