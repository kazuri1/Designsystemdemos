import React, { useState } from "react";
import ThemeToggle from "./theme/ThemeToggle";
import { Header } from "./stories/Header";
import { Drawer } from "./components/organisms/Drawer";

function App() {
  const [drawerVariant, setDrawerVariant] = useState<"default" | "icon-only">(
    "default"
  );

  const handleHamburgerClick = () => {
    setDrawerVariant((prev) => (prev === "default" ? "icon-only" : "default"));
  };

  return (
    <div>
      <ThemeToggle />
      <Header
        user={{ name: "Kazuri" }}
        onHamburgerClick={handleHamburgerClick}
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
