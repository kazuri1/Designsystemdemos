import React, { useState } from "react";
import {
  MdDashboard,
  MdNotifications,
  MdPayment,
  MdSecurity,
  MdVpnKey,
  MdStorage,
  MdVerifiedUser,
  MdSettings,
  MdBookmarkAdd,
} from "react-icons/md";
import { Input } from "../../stories/Input";
import "../../styles/components/drawer.css";

const menuItems = [
  { label: "Dashboard", icon: <MdDashboard className="drawer__icon" /> },
  {
    label: "Notifications",
    icon: <MdNotifications className="drawer__icon" />,
  },
  { label: "Billing", icon: <MdPayment className="drawer__icon" /> },
  { label: "Security", icon: <MdSecurity className="drawer__icon" /> },
  { label: "SSH Keys", icon: <MdVpnKey className="drawer__icon" /> },
  { label: "Databases", icon: <MdStorage className="drawer__icon" /> },
  {
    label: "Authentication",
    icon: <MdVerifiedUser className="drawer__icon" />,
  },
  { label: "Other Settings", icon: <MdSettings className="drawer__icon" /> },
];

export interface DrawerProps {
  variant?: "default" | "icon-only";
}

export const Drawer: React.FC<DrawerProps> = ({ variant = "default" }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [search, setSearch] = useState("");

  const filteredItems = menuItems.filter((item) =>
    item.label.toLowerCase().includes(search.toLowerCase())
  );

  if (variant === "icon-only") {
    return (
      <nav className="drawer drawer--icon-only">
        <div className="drawer__menu">
          {menuItems.map((item, idx) => (
            <div
              key={item.label}
              className={`drawer__item drawer__item--icon-only${
                activeIndex === idx ? " drawer__item--active" : ""
              }`}
              onClick={() => setActiveIndex(idx)}
            >
              {React.cloneElement(item.icon, {
                className: "drawer__icon drawer__icon--large",
              })}
            </div>
          ))}
        </div>
      </nav>
    );
  }

  return (
    <nav className="drawer">
      <Input
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
        asText={true}
      />
      <div className="drawer__menu">
        {filteredItems.map((item, idx) => (
          <div
            key={item.label}
            className={`drawer__item${
              activeIndex === idx ? " drawer__item--active" : ""
            }`}
            onClick={() => setActiveIndex(idx)}
          >
            {item.icon}
            {item.label}
          </div>
        ))}
      </div>
      <a className="drawer__bookmark" href="#">
        <MdBookmarkAdd className="drawer__icon" /> Add Bookmark
      </a>
    </nav>
  );
};

export default Drawer;
