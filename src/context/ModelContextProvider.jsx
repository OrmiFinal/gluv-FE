import React, { createContext, useState, useEffect } from "react";

export const ModelContext = createContext();

export const ModelContextProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState({
    category: '공지사항',
    subcategory: '',
    search: '',
    order: '',
    page: 1,
    order_by: ''
  });

  const [pagecount, setPagecount] = useState(1);
  const [content, setContent] = useState({});

  const ToggleMiniChatModel = ({ content }) => {
    setSelectedCategory((prev) => ({
      ...prev,
      ...content,
    }));
  };

  return (
    <ModelContext.Provider
      value={{ selectedCategory, ToggleMiniChatModel, setContent, content, pagecount}}
    >
      {children}
    </ModelContext.Provider>
  );
};
