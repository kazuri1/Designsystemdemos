import React, { useState, useEffect } from "react";
import { TopNav } from "../components/organisms/TopNav";
import { Tab } from "../components/atoms/Tab";
import { Cards } from "../components/molecules/Cards";
import { useTheme } from "../ThemeContext";
import { getThemeForTab } from "../utils/themeManager";
import AllIcon from "../components/icons/AllIcon";
import CafeIcon from "../components/icons/CafeIcon";
import HomeIcon from "../components/icons/HomeIcon";
import ToysIcon from "../components/icons/ToysIcon";
import FreshIcon from "../components/icons/FreshIcon";
import ElectronicsIcon from "../components/icons/ElectronicsIcon";
import MobileIcon from "../components/icons/MobileIcon";
import BeautyIcon from "../components/icons/BeautyIcon";
import FashionIcon from "../components/icons/FashionIcon";

const icons: Record<string, string | React.ReactNode> = {
  All: <AllIcon />,
  Cafe: <CafeIcon />,
  Home: <HomeIcon />,
  Toys: <ToysIcon />,
  Fresh: <FreshIcon />,
  Electronics: <ElectronicsIcon />,
  Mobile: <MobileIcon />,
  Beauty: <BeautyIcon />,
  Fashion: <FashionIcon />,
};

const tabList = [
  { key: "All", label: "All" },
  { key: "Cafe", label: "Cafe" },
  { key: "Home", label: "Home" },
  { key: "Toys", label: "Toys" },
  { key: "Fresh", label: "Fresh" },
  { key: "Electronics", label: "Electronics" },
  { key: "Mobile", label: "Mobiles" },
  { key: "Beauty", label: "Beauty" },
  { key: "Fashion", label: "Fashion" },
];

function SuperSaverOffPage({ onToggle }: { onToggle: () => void }) {
  const [active, setActive] = useState("All");
  const { setTabTheme, setActiveTab, currentTabTheme } = useTheme();

  const handleTabClick = (tabKey: string) => {
    setActive(tabKey);
    setActiveTab(tabKey);

    // Get theme for the selected tab
    const theme = getThemeForTab(tabKey);
    setTabTheme(theme);
  };

  // Apply initial theme on component mount
  useEffect(() => {
    const initialTheme = getThemeForTab(active);
    setTabTheme(initialTheme);
  }, []);

  const bodyStyle = {
    background: "#ffffff",
    minHeight: "100vh",
    position: "relative",
  } as React.CSSProperties;

  const gradientOverlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "200px", // Only cover header and tabs area
    background: `linear-gradient(135deg, ${currentTabTheme.gradientStart}10 0%, ${currentTabTheme.gradientEnd}10 100%)`,
    pointerEvents: "none",
    zIndex: 1,
  } as React.CSSProperties;

  const contentStyle = {
    position: "relative",
    zIndex: 2,
  } as React.CSSProperties;

  const whiteContentStyle = {
    background: "#ffffff",
    position: "relative",
    zIndex: 2,
  } as React.CSSProperties;

  return (
    <div style={bodyStyle}>
      <div style={gradientOverlayStyle} />
      <div style={contentStyle}>
        <TopNav onTogelOn={onToggle} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            background: "transparent",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: 20,
              position: "relative",
              width: "100%",
              maxWidth: "1440px",
              margin: "0 auto",
              paddingLeft: 8,
              paddingRight: 48,
              paddingTop: 20,
              boxSizing: "border-box",
            }}
          >
            {tabList.map((tab) => (
              <Tab
                key={tab.key}
                icon={
                  typeof icons[tab.key] === "string" ? (
                    <img
                      src={icons[tab.key] as string}
                      alt={tab.label}
                      style={{ width: 24, height: 24 }}
                    />
                  ) : (
                    icons[tab.key]
                  )
                }
                label={tab.label}
                active={active === tab.key}
                onClick={() => handleTabClick(tab.key)}
              />
            ))}
          </div>
          <div
            style={{
              width: "100%",
              borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
              marginTop: 15,
            }}
          />
        </div>
      </div>
      <div style={whiteContentStyle}>
        <div
          style={{
            width: "100%",
            maxWidth: "1440px",
            margin: "32px auto 0 auto",
            paddingLeft: 0,
            paddingRight: 48,
            boxSizing: "border-box",
          }}
        >
          <Cards />
        </div>
        <div
          style={{
            width: "100%",
            maxWidth: "1440px",
            margin: "32px auto 0 auto",
            paddingLeft: 0,
            paddingRight: 0,
            boxSizing: "border-box",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src="/assets/Zepto Main Cards/pancover.jpg"
            alt="Pan Cover"
            style={{ width: "100%", borderRadius: 16, objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
}

export default SuperSaverOffPage;
