import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  ReferenceLine,
} from "recharts";
import "../../styles/components/income-expense-chart.css";
import { Input } from "../../stories/Input";

const data = [
  { month: "JAN", income: 5000, expense: 1200 },
  { month: "FEB", income: 7000, expense: 2500 },
  { month: "MAR", income: 10000, expense: 4000 },
  { month: "APR", income: 6500, expense: 2000 },
  { month: "MAY", income: 8000, expense: 3000 },
  { month: "JUN", income: 7500, expense: 4200 },
];

const incomeTotal = 1412;
const incomeChange = 4.51;
const expenseTotal = 612.34;
const expenseChange = -2.41;
const activeMonth = "MAR";

export const IncomeExpenseChart: React.FC<{ brand?: string }> = ({
  brand = "pulse",
}) => {
  const [range, setRange] = useState("Last 6 months");

  // Determine bar colors based on brand
  const incomeColor =
    brand === "1mg" ? "var(--income-bar, #ff9800)" : "#22c55e";
  const expenseColor =
    brand === "1mg" ? "var(--expense-bar, #ffb74d)" : "#fbbf24";

  // Determine summary label colors based on brand
  const summaryIncomeLabelColor =
    brand === "1mg" ? "var(--cashflow-line, #ff9800)" : "#22c55e";
  const summaryExpenseLabelColor =
    brand === "1mg" ? "var(--cashflow-line, #ff9800)" : "#fbbf24";

  return (
    <div className="income-expense-chart-card">
      <div className="income-expense-chart-header">
        <div className="income-expense-chart-title">Income & Expense</div>
        <Input
          asText={false}
          variant="default"
          value={range}
          options={["Last 6 months", "Last 12 months", "Last 3 months"]}
          onChange={(e) => setRange(e.target.value)}
          style={{ minWidth: 20, fontSize: 12, height: 24, padding: "2px 8px" }}
        />
      </div>
      <div className="income-expense-chart-summary-row">
        <div className="income-expense-chart-summary-col">
          <div
            className="income-expense-chart-summary-label"
            style={{ color: summaryIncomeLabelColor }}
          >
            TOTAL INCOME
          </div>
          <div className="income-expense-chart-summary-value">
            ${incomeTotal.toLocaleString()}
          </div>
          <div className="income-expense-chart-summary-change up">
            +{incomeChange}%
          </div>
        </div>
        <div className="income-expense-chart-summary-col">
          <div
            className="income-expense-chart-summary-label"
            style={{ color: summaryExpenseLabelColor }}
          >
            TOTAL EXPENSES
          </div>
          <div className="income-expense-chart-summary-value">
            ${expenseTotal.toLocaleString()}
          </div>
          <div className="income-expense-chart-summary-change down">
            {expenseChange}%
          </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart
          data={data}
          margin={{ top: 16, right: 24, left: 16, bottom: 0 }}
          barGap={8}
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
            width={40}
            domain={[0, 10000]}
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
            formatter={(value: number, name: string) => [
              `$${value.toLocaleString()}`,
              name === "income" ? "Income" : "Expense",
            ]}
          />
          {data.map((entry) =>
            entry.month === activeMonth ? (
              <ReferenceLine
                key={entry.month}
                x={entry.month}
                stroke="#a3e635"
                strokeWidth={2}
                label={{
                  value: "",
                  position: "top",
                }}
              />
            ) : null
          )}
          <Bar
            dataKey="income"
            fill={incomeColor}
            radius={[8, 8, 0, 0]}
            barSize={24}
            name="Income"
          />
          <Bar
            dataKey="expense"
            fill={expenseColor}
            radius={[8, 8, 0, 0]}
            barSize={24}
            name="Expense"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default IncomeExpenseChart;
