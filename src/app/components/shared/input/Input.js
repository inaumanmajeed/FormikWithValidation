import React from "react";

const CustomInput = ({ field, form, type = "text", label, ...props }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...field} type={type} {...props} />
      {form.errors[field.name] && form.touched[field.name] ? (
        <div style={{ color: "red" }}>{form.errors[field.name]}</div>
      ) : null}
    </div>
  );
};

export default CustomInput;
