// LogoutButton.js

import React from 'react';
import { FaSignOutAlt } from 'react-icons/fa';

const LogoutButton = ({ onClick }) => {
  const textStyle = {
    fontFamily: 'Spoqa Han Sans Neo, sans-serif',
  };

  return (
    <button onClick={onClick} style={textStyle} className='flex flex-col justify-center items-center'>
      <FaSignOutAlt/>로그아웃
    </button>
  );
};

export default LogoutButton;
