import React from "react";
import "./input.css";
import { MdKeyboardArrowDown } from "react-icons/md";
import "../styles/themes/default-light.css";

export interface InputProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  variant?: "default" | "disabled" | "underline";
  placeholder?: string;
  options?: string[];
}

export const Input: React.FC<InputProps> = ({
  variant = "default",
  placeholder = "Placeholder",
  options = [],
  ...props
}) => {
  const isDisabled = variant === "disabled" || props.disabled;
  return (
    <div className={`input-wrapper input-${variant}`}>
      <select className="input" disabled={isDisabled} {...props}>
        <option value="" disabled selected hidden>
          {placeholder}
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      <MdKeyboardArrowDown className="input-icon" />
    </div>
  );
};
