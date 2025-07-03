import React from "react";
import "../styles/components/button.css";

export interface ButtonProps {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** How large should the button be? */
  size?: "small" | "medium" | "large";
  /** Button contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const Button = ({
  primary = false,
  size = "medium",
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? "btn-primary" : "btn-secondary";
  const sizeClass = `btn-${size}`;
  return (
    <button
      type="button"
      className={["btn", mode, sizeClass].join(" ")}
      {...props}
    >
      {label}
    </button>
  );
};
