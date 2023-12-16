import React from "react";

const InputField = ({ label, name, register, errors, placeholder }) => {
  // name에 "%password%"가 포함되어 있다면 type을 "password"로 설정
  const isPasswordField = name.includes("password");

  return (
    <div className="mb-3">
    <div className="flex justify-between items-center mb-2">
      <div className="form-label">{label}:</div>
    </div>

    <input
      {...register(name, { required: true })}
      type={isPasswordField ? "password" : "text"} // 조건에 따라 type 설정
      className={`form-control ${errors[name] ? 'is-invalid' : ''}`}
      placeholder={placeholder}
    />
    {errors[name] && (
      <div className="invalid-feedback">{`${label} is required.`}</div>
    )}
  </div>
  );
};

export default InputField;
