// LogoutButton.js

import React from 'react';
import { FaSignOutAlt } from 'react-icons/fa';

const LogoutButton = ({ onClick }) => {
  return (
    <button className='flex flex-col items-center justify-center text-center' onClick={onClick}>
      <FaSignOutAlt className='w-5' />
      <div>로그아웃</div>
    </button>
  );
};

export default LogoutButton;
