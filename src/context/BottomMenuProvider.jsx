import React, { createContext, useState } from "react";

export const BottomMenuP = createContext();

export const BottomMenuProvider = ({ children }) => {
  const [openMiniMenu, setBottomMenu] = useState('');

  const toggleBottomMenuP = ({content}) => {
    setBottomMenu(content);
  };

  return (
    <BottomMenuP.Provider value={{ openMiniMenu, toggleBottomMenuP }}>
      {children}
    </BottomMenuP.Provider>
  );
};
