// SelectField.js
import React from "react";

const SelectField = ({ label, name, register, options }) => (
  <div className="mb-3">
    <div className="form-label">{label}:</div>
    <select
      {...register(name, { required: true })}
      className="form-control"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

export default SelectField;
