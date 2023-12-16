
import React from "react";

const InputFieldOtion = ({ label, name, register, errors, placeholder,option }) => (
  <div className="mb-3">
    <div className="flex justify-between items-center mb-2">
      <div className="form-label">{label}:</div>
      <div>{label === 'ID' && <div className="btn btn-primary btn-block">{option}</div>}</div>
    </div>

    <input
      {...register(name, { required: true })}
      className={`form-control ${errors[name] ? 'is-invalid' : ''}`}
      placeholder={placeholder}
    />
    {errors[name] && (
      <div className="invalid-feedback">{`${label} is required.`}</div>
    )}
  </div>
);

export default InputFieldOtion;
