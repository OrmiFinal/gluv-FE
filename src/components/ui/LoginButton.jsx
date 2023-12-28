// LoginButton.js

import React from 'react';

import { FaSignInAlt } from 'react-icons/fa';

const LoginButton = ({ onClick }) => {
  const textStyle = {
    fontFamily: 'Spoqa Han Sans Neo, sans-serif',
  };

  return (
    <button style={textStyle} onClick={onClick} className='flex flex-col justify-center items-center'>
      <FaSignInAlt /> 로그인
    </button>
  );
};

export default LoginButton;
