import React from "react";
import { Button } from "./Button";
import "./header.css";
import { GiHamburgerMenu } from "react-icons/gi";
import pulselogo from "../assets/pulselogo.png";
import { Input } from "./Input";

type User = {
  name: string;
};

export interface HeaderProps {
  user?: User;
  onLogin?: () => void;
  onLogout?: () => void;
  onCreateAccount?: () => void;
}

export const Header = ({
  user,
  onLogin,
  onLogout,
  onCreateAccount,
}: HeaderProps) => (
  <header>
    <div className="storybook-header">
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <GiHamburgerMenu size={24} style={{ color: "var(--icon-color)" }} />
        <img
          src={pulselogo}
          alt="Pulse Logo"
          style={{ height: 40, width: 40 }}
        />
      </div>
      <div>
        {user ? (
          <>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ minWidth: 180 }}>
                <Input
                  variant="default"
                  placeholder="Search..."
                  options={["Option 1", "Option 2", "Option 3"]}
                />
              </div>
              <span className="welcome">
                Welcome, <b>{user.name}</b>!
              </span>
              <Button size="small" onClick={onLogout} label="Log out" />
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
