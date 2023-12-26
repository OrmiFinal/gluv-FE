// NotificationClickButton.js

import React from 'react';

import { FaBell } from 'react-icons/fa';

const NotificationClickButton = ({ onClick }) => {
  const textStyle = {
    fontFamily: 'Spoqa Han Sans Neo, sans-serif',
  };

  return (
    <button style={textStyle} 
      onClick={onClick} 
      className='flex flex-col justify-center items-center'>
      <FaBell/> 알림
    </button>
  );
};


export default NotificationClickButton;
