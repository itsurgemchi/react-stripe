import React from "react";
import { Field, reduxForm } from "redux-form";

const renderField = ({
  input,
  label,
  type,
  meta: { asyncValidating, touched, error }
}) => (
  <div>
    <label>{label}</label>
    <div className={asyncValidating ? "async-validating" : ""}>
      <input {...input} type={type} placeholder={label} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

const required = value => (value ? undefined : "Required");

const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Invalid email address"
    : undefined;

const AsyncValidationForm = props => {
  const { handleSubmit, pristine, reset, submitting, isvalid } = props;
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Field
          name="email"
          type="text"
          component={renderField}
          label="email"
          validate={[email, required]}
        />
        <Field
          name="password"
          type="password"
          component={renderField}
          label="Password"
          validate={required}
        />
        <Field
          name="sex"
          component={renderField}
          type="radio"
          value="male"
          label="male"
          validate={required}
        />

        <Field
          name="sex"
          component={renderField}
          type="radio"
          value="female"
          label="female"
          validate={required}
        />

        <div>
          <button type="submit" disabled={submitting}>
            Sign Up
          </button>
          <button
            type="button"
            disabled={pristine || submitting}
            onClick={reset}
          >
            Clear Values
          </button>
        </div>
      </form>
      <button
        disabled={isvalid || submitting}
        onClick={handleSubmit(values => pristine)}
      >
        Validate
      </button>
    </div>
  );
};

export default reduxForm({
  form: "asyncValidation", // a unique identifier for this form
  asyncBlurFields: ["email"]
})(AsyncValidationForm);
