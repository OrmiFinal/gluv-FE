// authContext.jsx
import React, { createContext, useState } from "react";
import axios from "axios";

export const ModelContext = createContext();

export const ModelContextProvider = ({ children }) => {
  const [openMiniChatModel, setMiniOpenChatModel] = useState(false);


  const toggleMiniChatModel = () => {
    setMiniOpenChatModel((prev) => !prev);
  };

  return (
    <ModelContext.Provider value={{ openMiniChatModel, toggleMiniChatModel }}>
      {children}
    </ModelContext.Provider>
  );
};
