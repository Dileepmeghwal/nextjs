import React from "react";
import PropTypes from "prop-types";

const Input = ({
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  disabled = false,
  className = "",
  style = {},
  ...props
}) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className={`input ${className}`}
      style={style}
      {...props}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

export default Input;
