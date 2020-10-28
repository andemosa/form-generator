import React from "react";
import Form from "./form";

class FormPage extends Form {
  state = {
    errorMessage: "",
    successMessage: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    await this.setState({ errorMessage: "", successMessage: "" });
    const requiredFields = [
      "officer-name",
      "date",
      "gender",
      "time",
    ];
    const filledFields = Object.keys(this.state);
    const allValues = requiredFields.every((value) =>
      filledFields.includes(value)
    );
    if (!allValues) {
      const errorMessage = "Please fill all required fields";
      return this.setState({ errorMessage });
    }
    const successMessage = "Your response has been sent. Thanks";
    await this.setState({ successMessage });
    form.reset();
  };

  render() {
    const form = [
      {
        label: "What is the name of the officer in question?",
        type: "text",
        name: "officer-name",
      },
      {
        label: "When was the date of the incident?",
        type: "date",
        name: "date",
      },
      {
        label: "What time of the day did the incident occur?",
        type: "select",
        options: [
          { title: "Morning", value: "morning" },
          { title: "Afternoon", value: "afternoon" },
          { title: "Evening", value: "evening" },
        ],
        name: "time",
      },
      {
        label: "Gender",
        type: "radio",
        options: [
          { title: "Male", value: "male" },
          { title: "Female", value: "female" },
        ],
        name: "gender",
      },
      {
        label: "How much in naira is the bribe that was paid? (optional)",
        type: "number",
        name: "bribe-amount",
        min: 0,
      },
      {
        label:
          "What other important details about the incident would you like to add? (optional)",
        type: "textarea",
        name: "other-details",
      },
    ];
    return (
      <div className="container">
        <form onSubmit={(e) => this.handleSubmit(e)}>
          {this.renderHeader("Police Brutality Report Form")}
          {form.map((input) => {
            const { name, label, options, type, min } = input;
            if (type === "select") {
              return this.renderSelect(name, label, options, this.handleChange);
            } else if (type === "radio") {
              return this.renderRadio(name, label, options, this.handleChange);
            } else if (type === "textarea") {
              return this.renderTextArea(name, label, this.handleChange);
            } else
              return this.renderInput(
                name,
                label,
                type,
                this.handleChange,
                min
              );
          })}
          {this.renderButton("Submit")}
        </form>
        {this.state.errorMessage && (
          <p className="alert alert-danger container my-4 mx-2">
            {this.state.errorMessage}
          </p>
        )}
        {this.state.successMessage && (
          <p className="alert alert-success container my-4 mx-2">
            {this.state.successMessage}
          </p>
        )}
      </div>
    );
  }
}

export default FormPage;
