import React from "react";
import "../../styles/components/_tab.scss";

export interface TabProps {
  icon: string; // path to SVG
  label: string;
  active?: boolean;
  onClick?: () => void;
}

export const Tab = ({ icon, label, active = false, onClick }: TabProps) => (
  <button
    className={`tab${active ? " tab--active" : ""}`}
    onClick={onClick}
    type="button"
  >
    <span className="tab__icon-wrapper">
      <img src={icon} alt={label} className="tab__icon" />
    </span>
    <span className="tab__label">{label}</span>
  </button>
);
