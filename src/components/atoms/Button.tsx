import React from "react";
import "../../styles/atoms/button.scss";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "danger";
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  type = "button",
  variant = "primary",
  ...props
}) => {
  return (
    <button
      className={`button button--${variant}`}
      onClick={onClick}
      type={type}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
