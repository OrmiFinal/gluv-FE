import React, { createContext, useState } from "react";

export const BottomMenuP = createContext();
/** 메인페이지 아래메뉴의 훅입니다. */
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
