// LogoutButton.js

import React from 'react';
import { FaSignOutAlt } from 'react-icons/fa';

const LogoutButton = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      <FaSignOutAlt /> 로그아웃
    </button>
  );
};

export default LogoutButton;
