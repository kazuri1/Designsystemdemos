import React, { useState, useEffect } from "react";
import ThemeToggle from "./theme/ThemeToggle";
import { Header } from "./stories/Header";
import { Drawer } from "./components/organisms/Drawer";
import { CashflowChart } from "./components/organisms/CashflowChart";
import { ExpensesChart } from "./components/organisms/ExpensesChart";
import { IncomeExpenseChart } from "./components/organisms/IncomeExpenseChart";
import { PatientsChart } from "./components/organisms/PatientsChart";
import { PopularTreatmentChart } from "./components/organisms/PopularTreatmentChart";
import { StockAvailabilityChart } from "./components/organisms/StockAvailabilityChart";

const themeCssMap: Record<string, Record<string, string>> = {
  pulse: {
    light: "/src/styles/themes/default-light.css",
    dark: "/src/styles/themes/default-dark.css",
  },
  "1mg": {
    light: "/src/styles/themes/1mg-light.css",
    dark: "/src/styles/themes/1mg-dark.css",
  },
};

function App() {
  const [drawerVariant, setDrawerVariant] = useState<"default" | "icon-only">(
    "default"
  );
  const [brand, setBrand] = useState<string>("pulse");
  const [theme, setTheme] = useState<string>("light");

  // Listen for theme changes (if you have a ThemeProvider, sync with it)
  useEffect(() => {
    // Remove any previously injected theme link
    const existing = document.getElementById("theme-css");
    if (existing) existing.remove();
    // Inject the correct theme CSS
    const link = document.createElement("link");
    link.id = "theme-css";
    link.rel = "stylesheet";
    link.href = themeCssMap[brand][theme];
    document.head.appendChild(link);
    // Set body class for dark mode if needed
    document.body.classList.toggle("dark", theme === "dark");
    // Always set body background color to black with !important
    document.body.style.setProperty("background-color", "#000", "important");
  }, [brand, theme]);

  const handleHamburgerClick = () => {
    setDrawerVariant((prev) => (prev === "default" ? "icon-only" : "default"));
  };

  // Optionally, listen for theme toggle changes if ThemeToggle updates theme
  // For now, you can manually set theme via setTheme if needed

  return (
    <div>
      <Header
        user={{ name: "Kazuri" }}
        onHamburgerClick={handleHamburgerClick}
        brand={brand}
        onBrandChange={setBrand}
        theme={theme}
        onThemeChange={setTheme}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          minHeight: "calc(100vh - 64px)",
        }}
      >
        <Drawer variant={drawerVariant} />
        <div style={{ flex: 1 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              gap: 12, // reduced from 24 to 12
              width: "100%",
            }}
          >
            <div>
              <CashflowChart />
              <div
                style={{
                  marginTop: -6,
                  display: "flex",
                  flexDirection: "row",
                  gap: 24,
                }}
              >
                <IncomeExpenseChart brand={brand} />
                <div style={{ marginLeft: -10, marginTop: 20 }}>
                  <PatientsChart />
                  <div style={{ marginTop: 16 }}>
                    <PopularTreatmentChart />
                  </div>
                </div>
              </div>
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <ExpensesChart brand={brand} />
              <div
                style={{
                  marginTop: 14,
                  display: "flex",
                  width: "100%",
                }}
              >
                <StockAvailabilityChart brand={brand} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
