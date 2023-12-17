// authContext.jsx
import React, { createContext, useState } from "react";
import axios from "axios";

export const ModelContext = createContext();

export const ModelContextProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState({
    category: '',
    subcategory: '',
  });
  


  const ToggleMiniChatModel = ({content}) => {

    setSelectedCategory(content);
    console.log('asdad'+selectedCategory.category)
  };

  return (
    <ModelContext.Provider value={{ selectedCategory, ToggleMiniChatModel }}>
      {children}
    </ModelContext.Provider>
  );
};
