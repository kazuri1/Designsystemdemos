import React from "react";
import "../../styles/theme.scss";

export interface AddButtonProps {
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  size?: "small" | "default";
}

export const AddButton: React.FC<AddButtonProps> = ({
  children = "ADD",
  onClick,
  className = "",
  size = "default",
}) => (
  <button
    className={`add-button${
      size === "small" ? " add-button--small" : ""
    } ${className}`.trim()}
    onClick={onClick}
  >
    {children}
  </button>
);
