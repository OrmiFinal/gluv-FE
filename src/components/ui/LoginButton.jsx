// LoginButton.js

import React from 'react';
import { FaSignInAlt } from 'react-icons/fa';

const LoginButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className='flex flex-col justify-center items-center'>
      <FaSignInAlt /> 로그인
    </button>
  );
};

export default LoginButton;
