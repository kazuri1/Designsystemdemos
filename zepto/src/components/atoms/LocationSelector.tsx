import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "../../stories/location-selector.scss";

export interface LocationSelectorProps {
  label?: string;
  onClick?: () => void;
}

export const LocationSelector = ({
  label = "Select Location",
  onClick,
}: LocationSelectorProps) => (
  <button className="location-selector" onClick={onClick}>
    <span className="location-selector-label">{label}</span>
    <span className="location-selector-icon-wrapper">
      <KeyboardArrowDownIcon fontSize="inherit" />
    </span>
  </button>
);
