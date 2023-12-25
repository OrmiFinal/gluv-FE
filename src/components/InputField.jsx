// InputField.js

import React from 'react';

const InputField = ({ label, id, value, onChange }) => {
  return (
    <div>
      <label htmlFor={id} className="text-sm">
        {label}
      </label>
      <input
        id={id}
        className="border p-2 w-full rounded-md mt-1"
        value={value}
        onChange={(e) => onChange(e, id)}
      />
    </div>
  );
};

export default InputField;
