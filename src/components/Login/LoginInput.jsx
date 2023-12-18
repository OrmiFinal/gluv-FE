// LoginInput.js

import React from 'react';

function LoginInput({ label, type, id, name, value, onChange, placeholder }) {
  return (
    <div className='mb-4'>
      <label htmlFor={id} className='block text-gray-600 text-sm font-medium mb-2 z-50'>
        {label}:
      </label>
      <input
        type={type}
        id={id}
        name={name}
        className='border p-2 w-full rounded-md z-50'
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default LoginInput;
