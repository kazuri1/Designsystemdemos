import React, { useState } from "react";
import type { Meta } from "@storybook/react";
import { Tab } from "../components/atoms/Tab";
import "../styles/theme.scss";

const icons: Record<string, string> = {
  All: "/assets/Zepto Icons/All.svg",
  Cafe: "/assets/Zepto Icons/cafe.svg",
  Home: "/assets/Zepto Icons/home.svg",
  Toys: "/assets/Zepto Icons/toys.svg",
  Fresh: "/assets/Zepto Icons/fresh.svg",
  Electronics: "/assets/Zepto Icons/electronics.svg",
  Mobile: "/assets/Zepto Icons/mobile.svg",
  Beauty: "/assets/Zepto Icons/beauty.svg",
  Fashion: "/assets/Zepto Icons/fashion.svg",
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
} satisfies Meta<typeof Tab>;

export default meta;

export const Default = () => {
  const [active, setActive] = useState("All");
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
            onClick={() => setActive(tab.key)}
          />
        ))}
      </div>
      <div
        style={{ width: "100%", borderBottom: "1px solid #eee", marginTop: 15 }}
      />
    </div>
  );
};
