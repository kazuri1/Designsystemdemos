import React, { useState, useEffect } from "react";
import ThemeToggle from "./theme/ThemeToggle";
import { Header } from "./stories/Header";
import { Drawer } from "./components/organisms/Drawer";

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
  }, [brand, theme]);

  const handleHamburgerClick = () => {
    setDrawerVariant((prev) => (prev === "default" ? "icon-only" : "default"));
  };

  // Optionally, listen for theme toggle changes if ThemeToggle updates theme
  // For now, you can manually set theme via setTheme if needed

  return (
    <div>
      <ThemeToggle />
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
        <div style={{ flex: 1 }} />
      </div>
    </div>
  );
}

export default App;
