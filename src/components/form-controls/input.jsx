import React from "react";

const Input = ({ name, label, type, handleChange, min }) => {
  return (
    <div className="form-group container">
      <label htmlFor={name} className="label">
        {label}
      </label>
      <input
        name={name}
        type={type}
        id={name}
        min={min}
        className="form-control"
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};

export default Input;
