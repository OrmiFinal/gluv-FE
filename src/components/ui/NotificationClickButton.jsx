// NotificationClickButton.js

import React from 'react';
import { FaBell } from 'react-icons/fa';

const NotificationClickButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className='flex flex-col justify-center items-center'>
      <FaBell /> 알림
    </button>
  );
};


export default NotificationClickButton;
