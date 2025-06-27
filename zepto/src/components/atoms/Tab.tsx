import React from "react";
import { useTheme } from "../../ThemeContext";
import "../../styles/components/_tab.scss";

export interface TabProps {
  icon: string | React.ReactNode; // path to SVG or React component
  label: string;
  active?: boolean;
  onClick?: () => void;
}

// Utility function to convert hex to hue
const hexToHue = (hex: string): number => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (result) {
    const r = parseInt(result[1], 16) / 255;
    const g = parseInt(result[2], 16) / 255;
    const b = parseInt(result[3], 16) / 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0;

    if (max === min) {
      h = 0; // achromatic
    } else {
      const d = max - min;
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
      }
      h /= 6;
    }

    return h * 360;
  }
  return 0;
};

export const Tab = ({ icon, label, active = false, onClick }: TabProps) => {
  const { currentTabTheme } = useTheme();

  const activeStyles = active
    ? ({
        "--theme-accent": currentTabTheme.accent,
        "--theme-gradient-start": currentTabTheme.gradientStart,
        "--theme-gradient-end": currentTabTheme.gradientEnd,
        "--theme-hue": hexToHue(currentTabTheme.accent).toString(),
        "--theme-icon-color": currentTabTheme.accent,
      } as React.CSSProperties)
    : {};

  return (
    <button
      className={`tab${active ? " tab--active" : ""}`}
      onClick={onClick}
      type="button"
      style={activeStyles}
    >
      <span className="tab__icon-wrapper">
        {typeof icon === "string" ? (
          <img src={icon} alt={label} className="tab__icon" />
        ) : (
          <div
            style={{
              color: active
                ? currentTabTheme.accent
                : "var(--sys-color-text-primary, #222)",
            }}
          >
            {icon}
          </div>
        )}
      </span>
      <span className="tab__label">{label}</span>
    </button>
  );
};
