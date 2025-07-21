import React from "react";
import "../../styles/components/cashflow-chart.css";
import { Input } from "../../stories/Input";

export const PatientsChart: React.FC = () => {
  // Example data
  const newPatients = 21;
  const returningPatients = 142;
  const newPercent = 36.52;
  const returningPercent = 61.41;

  return (
    <div
      className="cashflow-chart-card"
      style={{ padding: 20, maxWidth: 420, margin: "0 auto" }}
    >
      <div className="cashflow-chart-header">
        <div>
          <div className="cashflow-chart-title">Patients</div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          <Input
            asText={false}
            variant="default"
            value={"This month"}
            options={["This month", "Last month", "This year"]}
            style={{
              minWidth: 150,
              fontSize: 12,
              height: 24,
              padding: "2px 8px",
            }}
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 16,
          alignItems: "flex-end",
          minHeight: 100,
        }}
      >
        {/* New Patients */}
        <div style={{ flex: 1 }}>
          <div
            style={{
              fontSize: 28,
              fontWeight: 700,
              color: "var(--text-color, #1f1f1f)",
            }}
          >
            {newPatients}
          </div>
          <div
            style={{
              height: 8,
              background: "var(--patients-bar-bg, #e0e7ef)",
              borderRadius: 4,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${newPercent}%`,
                height: "100%",
                background: "var(--button-primary-background, #3B82F6)",
              }}
            />
          </div>
          <div
            style={{
              fontSize: 13,
              paddingTop: 10,
              color: "var(--text-color, #1f1f1f)",
              fontWeight: 600,
            }}
          >
            {newPercent}%
          </div>
          <div
            style={{
              fontSize: 13,
              color: "var(--text-color, #1f1f1f)",
              marginBottom: 4,
            }}
          >
            New patients
          </div>
        </div>
        {/* Returning Patients */}
        <div style={{ flex: 1 }}>
          <div
            style={{
              fontSize: 28,
              fontWeight: 700,

              color: "var(--text-color, #1f1f1f)",
            }}
          >
            {returningPatients}
          </div>
          <div
            style={{
              height: 8,
              background: "var(--patients-bar-bg, #e0e7ef)",
              borderRadius: 4,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${returningPercent}%`,
                height: "100%",
                background: "var(--button-primary-background, #3B82F6)",
              }}
            />
          </div>
          <div
            style={{
              fontSize: 13,
              paddingTop: 10,
              color: "var(--text-color, #1f1f1f)",
              fontWeight: 600,
            }}
          >
            {returningPercent}%
          </div>
          <div
            style={{
              fontSize: 13,
              color: "var(--text-color, #1f1f1f)",
              marginBottom: 4,
            }}
          >
            Returning patients
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientsChart;
