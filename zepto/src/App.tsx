import "./App.css";
import { TopNav } from "./components/organisms/TopNav";
import { Tab } from "./components/atoms/Tab";
import React, { useState } from "react";
import { Cards } from "./components/molecules/Cards";

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

function App() {
  const [active, setActive] = useState("All");
  return (
    <>
      <TopNav />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          background: "#fff",
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
              icon={icons[tab.key] || icons.All}
              label={tab.label}
              active={active === tab.key}
              onClick={() => setActive(tab.key)}
            />
          ))}
        </div>
        <div
          style={{
            width: "100%",
            borderBottom: "1px solid #eee",
            marginTop: 15,
          }}
        />
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
    </>
  );
}

export default App;
