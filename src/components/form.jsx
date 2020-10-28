import React, { Component } from "react";
import Input from "./form-controls/input";
import Select from "./form-controls/select";
import Radio from "./form-controls/radio";
import TextArea from "./form-controls/textarea";

class Form extends Component {
  renderHeader(title) {
    return <h3 className="container">{title}</h3>;
  }

  renderButton(label) {
    return <button className="btn btn-secondary">{label}</button>;
  }

  renderInput(name, label, type, handleChange, min) {
    return (
      <Input
        key={name}
        type={type}
        label={label}
        name={name}
        handleChange={handleChange}
        min={min}
      />
    );
  }

  renderSelect(name, label, options, handleChange) {
    return (
      <Select
        key={name}
        label={label}
        options={options}
        name={name}
        handleChange={handleChange}
      />
    );
  }

  renderRadio(name, label, options, handleChange) {
    return (
      <Radio
        key={name}
        label={label}
        options={options}
        name={name}
        handleChange={handleChange}
      />
    );
  }

  renderTextArea(name, label, handleChange) {
    return (
      <TextArea
        label={label}
        name={name}
        handleChange={handleChange}
        key={name}
      />
    );
  }
}

export default Form;
