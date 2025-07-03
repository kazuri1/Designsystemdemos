import React from "react";
import { Button } from "./Button";
import "./header.css";
import { GiHamburgerMenu } from "react-icons/gi";
import pulselogo from "../assets/pulselogo.png";
import oneMgLogo from "../assets/1mg.png";
import { Input } from "./Input";

type User = {
  name: string;
};

export interface HeaderProps {
  user?: User;
  onLogin?: () => void;
  onLogout?: () => void;
  onCreateAccount?: () => void;
  onHamburgerClick?: () => void;
  brand?: string;
  onBrandChange?: (brand: string) => void;
  theme?: string;
  onThemeChange?: (theme: string) => void;
}

export const Header = ({
  user,
  onLogin,
  onLogout,
  onCreateAccount,
  onHamburgerClick,
  brand = "pulse",
  onBrandChange,
  theme = "light",
  onThemeChange,
}: HeaderProps) => (
  <header>
    <div className="storybook-header">
      <div style={{ display: "flex", alignItems: "center", gap: 12, flex: 1 }}>
        <span style={{ cursor: "pointer" }} onClick={onHamburgerClick}>
          <GiHamburgerMenu size={24} style={{ color: "var(--icon-color)" }} />
        </span>
        <img
          src={brand === "1mg" ? oneMgLogo : pulselogo}
          alt={brand === "1mg" ? "1mg Logo" : "Pulse Logo"}
          style={{ height: 40, width: 40 }}
        />
        <div
          style={{
            marginLeft: "auto",
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <Input
            asText={false}
            variant="default"
            value={brand}
            onChange={(e) => onBrandChange && onBrandChange(e.target.value)}
            options={["pulse", "1mg"]}
            style={{ minWidth: 100 }}
          />
          <label className="theme-toggle-switch" style={{ marginLeft: 8 }}>
            <input
              type="checkbox"
              checked={theme === "dark"}
              onChange={(e) =>
                onThemeChange &&
                onThemeChange(e.target.checked ? "dark" : "light")
              }
            />
            <span className="slider" />
            <span style={{ fontSize: 14, marginLeft: 8 }}>
              {theme === "dark" ? "Dark" : "Light"} Mode
            </span>
          </label>
        </div>
      </div>
      <div>
        {user ? (
          <>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                paddingLeft: 10,
              }}
            >
              <span className="welcome">
                Welcome, <b>{user.name}</b>!
              </span>
              <Button primary size="small" onClick={onLogout} label="Log out" />
            </div>
          </>
        ) : (
          <>
            <Button size="small" onClick={onLogin} label="Log in" />
            <Button
              primary
              size="small"
              onClick={onCreateAccount}
              label="Sign up"
            />
          </>
        )}
      </div>
    </div>
  </header>
);
