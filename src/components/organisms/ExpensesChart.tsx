import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { Input } from "../../stories/Input";
import "../../styles/components/expenses-chart.css";

const defaultColors = [
  "#8B5CF6",
  "#3B82F6",
  "#22C55E",
  "#F59E42",
  "#F472B6",
  "#A3A3A3",
];
const orangeShades = [
  "var(--cashflow-line, #ff9800)", // vivid orange
  "#ff5722", // deep orange-red
  "#ffc107", // bright gold
  "#ff7043", // coral orange
  "#ffa726", // light orange
  "#bc5100", // dark burnt orange
];

const baseData = [
  { name: "Rental Cost", value: 26000, percent: 30 },
  { name: "Wages", value: 16500, percent: 22 },
  { name: "Medical Equipment", value: 15640, percent: 20 },
  { name: "Supplies", value: 13564, percent: 18 },
  { name: "Promotion Costs", value: 6000, percent: 8 },
  { name: "Other", value: 2000, percent: 2 },
];

export const ExpensesChart: React.FC<{ brand?: string }> = ({
  brand = "pulse",
}) => {
  const colorPalette = brand === "1mg" ? orangeShades : defaultColors;
  const data = baseData.map((item, idx) => ({
    ...item,
    color: colorPalette[idx % colorPalette.length],
  }));

  // Track dark mode with state and MutationObserver
  const [isDark, setIsDark] = useState(
    () =>
      typeof document !== "undefined" &&
      document.body.classList.contains("dark")
  );
  useEffect(() => {
    if (typeof document === "undefined") return;
    const observer = new MutationObserver(() => {
      setIsDark(document.body.classList.contains("dark"));
    });
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="expenses-chart-card">
      <div
        className="expenses-chart-header"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          className="expenses-chart-title"
          style={{ fontSize: 16, paddingRight: 66 }}
        >
          Expenses
        </div>
        <Input
          asText={false}
          variant="default"
          value={"Last 6 months"}
          options={["Last 6 months", "Last 12 months", "Last 3 months"]}
          style={{
            minWidth: 50,
            fontSize: 12,
            height: 30,
            padding: "2px 8px",
          }}
        />
      </div>
      <div className="expenses-chart-grid">
        <div className="expenses-chart-donut-wrap">
          <ResponsiveContainer width={160} height={160}>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={54}
                outerRadius={80}
                paddingAngle={2}
                stroke="none"
              >
                {data.map((entry, idx) => (
                  <Cell key={entry.name} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  background: "var(--cashflow-tooltip-bg, #222)",
                  color: "var(--cashflow-tooltip-text, #fff)",
                  borderRadius: "var(--cashflow-radius, 8px)",
                  fontSize: 14,
                  border: "none",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                }}
                formatter={(value: number, name: string) => [
                  `$${value.toLocaleString()}`,
                  name,
                ]}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="expenses-chart-total-center">
            <div className="expenses-chart-total-label">Total Expense</div>
            <div className="expenses-chart-total-value">$80,832</div>
          </div>
        </div>
        <div className="expenses-chart-legend-col">
          {data.map((item) => (
            <div className="expenses-chart-legend-item" key={item.name}>
              <span
                className="expenses-chart-legend-dot"
                style={{ background: item.color }}
              />
              <span
                className="expenses-chart-legend-label"
                style={
                  brand === "1mg" && !isDark ? { color: "#1f1f1f" } : undefined
                }
              >
                {item.name}
              </span>
              <span
                className="expenses-chart-legend-percent"
                style={
                  brand === "1mg" && !isDark ? { color: "#1f1f1f" } : undefined
                }
              >
                {item.percent}%
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="expenses-chart-categories-grid">
        {data.map((item) => (
          <div className="expenses-chart-category-item" key={item.name}>
            <div
              className="expenses-chart-top-label"
              style={
                brand === "1mg" && !isDark
                  ? { color: "#1f1f1f" }
                  : { color: item.color }
              }
            >
              {item.name}
            </div>
            <div className="expenses-chart-top-value">
              ${item.value.toLocaleString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpensesChart;
