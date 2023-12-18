import React from 'react'


// Helper function to render input fields with common styling
function RenderInput(label, id, value, onChange, error) {
    return (
      <div className='mb-4'>
        <label htmlFor={id} className='block text-gray-600 text-sm font-medium mb-2'>
          {label}:
        </label>
        <input
          type={id.includes('password') ? 'password' : 'text'}
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          className={`border p-2 w-full rounded-md ${error ? 'border-red-500' : ''}`}
          placeholder={` ${label}을 입력하세요.`}
        />
        {error && <p className='text-red-500 text-sm mt-1'>{error}</p>}
      </div>
    );
  }
  
export default RenderInput