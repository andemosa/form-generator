import React from "react";

const Radio = ({ name, label, options, handleChange }) => {
  return (
    <div className="form-group container row">
      <legend className="col-form-label col-sm-2 pt-0 label">{label}</legend>
      <div className="col-sm-10">
        {options.map((option) => (
          <div className="form-check" key={option.value}>
            <input
              className="form-check-input"
              type="radio"
              name={name}
              id={option.value}
              value={option.value}
              onChange={(e) => handleChange(e)}
            />
            <label className="form-check-label" htmlFor={option.value}>
              {option.title}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Radio;
