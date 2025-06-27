import React, { useState, useEffect } from "react";
import type { Meta } from "@storybook/react";
import { Tab } from "../components/atoms/Tab";
import { ThemeProvider, useTheme } from "../ThemeContext";
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
import "../styles/theme.scss";

const icons: Record<string, React.ReactNode> = {
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

const meta = {
  title: "Molecules/Tab",
  component: Tab,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof Tab>;

export default meta;

const TabStory = () => {
  const [active, setActive] = useState("All");
  const { setTabTheme, setActiveTab } = useTheme();

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

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <div style={{ display: "flex", gap: 20, position: "relative" }}>
        {tabList.map((tab) => (
          <Tab
            key={tab.key}
            icon={icons[tab.key] || icons.All}
            label={tab.label}
            active={active === tab.key}
            onClick={() => handleTabClick(tab.key)}
          />
        ))}
      </div>
      <div
        style={{ width: "100%", borderBottom: "1px solid #eee", marginTop: 15 }}
      />
    </div>
  );
};

export const Default = () => <TabStory />;
