// authContext.jsx
import React, { createContext, useState } from "react";
import axios from "axios";

export const ModelContext = createContext();

export const ModelContextProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState({
    category: '공지사항',
    subcategory: '',
  });
  
  const [content, setContent] = useState({});

  const ToggleMiniChatModel = ({content}) => {

    setSelectedCategory(content);

  };

  return (
    <ModelContext.Provider value={{ selectedCategory, ToggleMiniChatModel,setContent ,content}}>
      {children}
    </ModelContext.Provider>
  );
};
