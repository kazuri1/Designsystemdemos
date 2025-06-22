import React, { useState } from "react";
import { TogelButton } from "../atoms/TogelButton";
import { LocationSelector } from "../atoms/LocationSelector";
import { SearchBar } from "../molecules/SearchBar";
import { IconButton } from "../atoms/IconButton";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import "../../styles/components/_top-nav.scss";

export const TopNav = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="top-nav">
      <div className="top-nav__left">
        <img
          src="/assets/logos/primary-logo.svg"
          alt="Zepto Logo"
          className="top-nav__logo"
        />
        <div className="top-nav__toggle-wrapper">
          <TogelButton />
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
