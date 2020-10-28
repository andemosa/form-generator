import React from "react";

const Select = ({ name, label, options, handleChange }) => {
  return (
    <div className="form-group container form-row align-items-center">
      <div className="col-auto my-1">
        <label htmlFor={name} className="label">
          {label}
        </label>
        <select
          name={name}
          id={name}
          className="custom-select mr-sm-2"
          onChange={(e) => handleChange(e)}
        >
          <option>Choose...</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.title}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Select;
