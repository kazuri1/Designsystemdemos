import React, { useState } from "react";
import "../../styles/theme.scss";
import "../../stories/togel-button.scss";

export interface TogelButtonProps {
  labelSuper?: string;
  labelSaver?: string;
  state?: "on" | "off";
  onClick?: () => void;
  onToggle?: (state: "on" | "off") => void;
}

export const TogelButton = ({
  labelSuper = "SUPER",
  labelSaver = "SAVER",
  state,
  onClick,
  onToggle,
  ...props
}: TogelButtonProps) => {
  const [internalState, setInternalState] = useState<"on" | "off">(
    state !== undefined ? state : "off"
  );
  const isControlled = state !== undefined;
  const isOn = isControlled ? state === "on" : internalState === "on";

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newState = isOn ? "off" : "on";
    if (!isControlled) setInternalState(newState);
    onToggle?.(newState);
  };

  return (
    <button
      className={`togel-button${isOn ? "" : " togel-button--off"}`}
      type="button"
      onClick={onClick}
      {...props}
    >
      <span
        className={`togel-morpher${
          isOn ? " togel-morpher--on" : " togel-morpher--off"
        }`}
        onClick={handleToggle}
      >
        <span className="togel-circle" />
        <span className="togel-coin-morph">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="20"
              cy="20"
              r="18"
              fill="#ffe066"
              stroke="#ffd700"
              strokeWidth="4"
            />
            <text
              x="50%"
              y="55%"
              textAnchor="middle"
              fill="#fff"
              fontSize="20"
              fontWeight="bold"
              dy=".3em"
            >
              ₹
            </text>
          </svg>
        </span>
      </span>
      <span className="togel-label">
        <span className={`togel-super${isOn ? "" : " togel-super--off"}`}>
          {labelSuper}
        </span>
        <span className={`togel-saver${isOn ? "" : " togel-saver--off"}`}>
          {labelSaver}
        </span>
      </span>
    </button>
  );
};
