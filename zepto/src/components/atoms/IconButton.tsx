import React from "react";
import "../../styles/components/_icon-button.scss";

export interface IconButtonProps {
  icon: React.ReactNode;
  label?: string;
  onClick?: () => void;
}

export const IconButton = ({ icon, label, onClick }: IconButtonProps) => (
  <button className="icon-button" onClick={onClick}>
    <span className="icon-button-icon-wrapper">{icon}</span>
    <span className="icon-button-label">{label}</span>
  </button>
);
