import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import "../../styles/components/cashflow-chart.css";
import { Input } from "../../stories/Input";

const data = [
  { month: "JAN", value: 2000 },
  { month: "FEB", value: 1800 },
  { month: "MAR", value: 1700 },
  { month: "APR", value: 4000 },
  { month: "MAY", value: 5000 },
  { month: "JUN", value: 10897 },
  { month: "JUL", value: 7000 },
  { month: "AUG", value: 8000 },
  { month: "SEP", value: 9500 },
  { month: "OCT", value: 10500 },
  { month: "NOV", value: 11500 },
  { month: "DEC", value: 12500 },
];

export const CashflowChart: React.FC = () => {
  return (
    <div className="cashflow-chart-card" style={{ maxWidth: 830 }}>
      <div className="cashflow-chart-header">
        <div>
          <div className="cashflow-chart-title">Cashflow</div>
          <div className="cashflow-chart-label">TOTAL CASH</div>
          <div className="cashflow-chart-total">
            $130,232 <span className="cashflow-chart-change">+4.51%</span>
          </div>
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
            value={"Last 12 month"}
            options={["Last 12 month", "Last 6 month", "Last 3 month"]}
            style={{
              minWidth: 50,
              fontSize: 12,
              height: 24,
              padding: "2px 8px",
            }}
          />
          <div
            className="cashflow-chart-daterange"
            style={{
              fontSize: 12,
              color: "var(--cashflow-axis-light, #bbb)",
              marginTop: 8,
            }}
          >
            January 2022 - December 2022
          </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={220}>
        <LineChart
          data={data}
          margin={{ top: 16, right: 24, left: 16, bottom: 0 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="var(--cashflow-grid, #eee)"
          />
          <XAxis
            dataKey="month"
            tick={{
              fill: "var(--cashflow-axis-light, #bbb)",
              fontSize: 12,
              fontWeight: 500,
            }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{
              fill: "var(--cashflow-axis-light, #bbb)",
              fontSize: 12,
              fontWeight: 500,
            }}
            axisLine={false}
            tickLine={false}
            tickFormatter={(v) => (v >= 1000 ? `${v / 1000}K` : v)}
            width={48}
          />
          <Tooltip
            contentStyle={{
              background: "var(--cashflow-tooltip-bg, #222)",
              color: "var(--cashflow-tooltip-text, #fff)",
              borderRadius: "var(--cashflow-radius, 8px)",
              fontSize: 14,
              border: "none",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            }}
            formatter={(value: number) => [
              `$${value.toLocaleString()}`,
              "Total",
            ]}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="var(--cashflow-line, var(--button-primary-background, #068bee))"
            strokeWidth={3}
            dot={{
              r: 4,
              fill: "var(--cashflow-dot, var(--button-primary-background, #068bee))",
            }}
            activeDot={{
              r: 6,
              fill: "var(--cashflow-dot-active, var(--button-primary-background, #068bee))",
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CashflowChart;
