import React from "react";
import "../../styles/atoms/button.scss";

interface ButtonProps {
  children: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "danger";
  disabled?: boolean;
  maxWidth?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  disabled = false,
  maxWidth,
}) => {
  return (
    <button
      className={`button button--${variant}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
      style={{ maxWidth }}
    >
      {children}
    </button>
  );
};

export default Button;
