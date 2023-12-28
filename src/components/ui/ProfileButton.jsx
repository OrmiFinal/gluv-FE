// LogoutButton.js

import React from 'react';

import { FaUser } from 'react-icons/fa';

const ProfileButton = ({ onClick }) => {
  const textStyle = {
    fontFamily: 'Spoqa Han Sans Neo, sans-serif',
  };
  return (
    <button 
    style={textStyle} 
    className='flex flex-col items-center justify-center text-center' onClick={onClick}>
      <FaUser className='w-5' />
      <div>프로필</div>
    </button>
  );
};

export default ProfileButton;
