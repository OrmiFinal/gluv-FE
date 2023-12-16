import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const TextEditor = () => {
  const [value, setValue] = useState('');

  const handleChange = (content) => {
    setValue(content);
  };

  return (
    <div className="h-[400px] w-full flex items-center justify-center z-10">
      <ReactQuill
        theme="snow"
        style={{ width: "100%", height: "400px",zIndex:"1" }}
        value={value}
        onChange={handleChange}
        placeholder="내용을 작성해주세요."
       
      />
    </div>
  );
};

export default TextEditor;
