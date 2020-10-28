import React from "react";

const TextArea = ({ name, label, handleChange }) => {
  return (
    <div className="form-group container">
      <label htmlFor={name} className="label">
        {label}
      </label>
      <textarea
        className="form-control"
        name={name}
        id={name}
        rows="3"
        onChange={(e) => handleChange(e)}
      ></textarea>
    </div>
  );
};

export default TextArea;
