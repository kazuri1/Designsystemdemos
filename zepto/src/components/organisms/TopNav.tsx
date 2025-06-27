import React, { useState } from "react";
import { TogelButton } from "../atoms/TogelButton";
import { LocationSelector } from "../atoms/LocationSelector";
import { SearchBar } from "../molecules/SearchBar";
import { IconButton } from "../atoms/IconButton";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useTheme } from "../../ThemeContext";
import "../../styles/components/_top-nav.scss";

interface TopNavProps {
  onTogelOn?: () => void;
  onTogelOff?: () => void;
  superSaverState?: "on" | "off";
}

export const TopNav = ({
  onTogelOn,
  onTogelOff,
  superSaverState,
}: TopNavProps) => {
  const [searchValue, setSearchValue] = useState("");
  const [toggle, setToggle] = useState<"on" | "off">(superSaverState || "off");
  const { currentTabTheme } = useTheme();

  const handleToggle = (state: "on" | "off") => {
    setToggle(state);
    if (state === "on" && onTogelOn) onTogelOn();
    if (state === "off" && onTogelOff) onTogelOff();
  };

  const navStyle = {
    background: "transparent",
  } as React.CSSProperties;

  return (
    <div className="top-nav" style={navStyle}>
      <div className="top-nav__left">
        <img
          src="/assets/logos/primary-logo.svg"
          alt="Zepto Logo"
          className="top-nav__logo"
        />
        <div className="top-nav__toggle-wrapper">
          <TogelButton state={toggle} onToggle={handleToggle} />
        </div>
        <LocationSelector />
      </div>
      <div className="top-nav__search">
        <SearchBar
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder='Search for "banana"'
        />
      </div>
      <div className="top-nav__right">
        <IconButton
          icon={<AccountCircleOutlinedIcon fontSize="inherit" />}
          label="Login"
        />
        <IconButton
          icon={<ShoppingCartOutlinedIcon fontSize="inherit" />}
          label="Cart"
        />
      </div>
    </div>
  );
};

// Helper function to convert hex to RGB
function hexToRgb(hex: string): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (result) {
    const r = parseInt(result[1], 16);
    const g = parseInt(result[2], 16);
    const b = parseInt(result[3], 16);
    return `${r}, ${g}, ${b}`;
  }
  return "177, 35, 230"; // Default purple
}
