import React from "react";
import PropTypes from "prop-types";
const Button = ({
  type = "button",
  onClick,
  children,
  disabled = false,
  className = "",
  style = {},
  ...props
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`button ${className}`}
      style={style}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
};
export default Button;
