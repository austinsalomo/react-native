import React from "react";
import "./button.css";
import { Link } from "react-router-dom";

const styles = ["btn--primary", "btn--outline"];
const sizes = ["btn--medium", "btn--large"];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  to,
}) => {
  const checkButtonStyle = styles.includes(buttonStyle)
    ? buttonStyle
    : styles[0];

  const checkButtonSize = sizes.includes(buttonSize) ? buttonSize : sizes[0];

  return (
    <Link to={to} className="btn-mobile">
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
