import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { FetchAllContext } from "../api/post";

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
  

  const fetchData = async (  order, order_by,search,page) => {
    try {
      const postResponse = await FetchAllContext({
        search: '',
        category: selectedCategory.category,
        subcategory: selectedCategory.subcategory,
        order: selectedCategory.order,
        page: selectedCategory.page,
        order_by: selectedCategory.order_by,
        search: selectedCategory.search,
      });

      setContent(postResponse.data);


      
      if (postResponse) {
        console.log('postResponse', postResponse);
      }
    } catch (error) {
      console.error('Error fetching FetchAllContextdata:', error.message);
    }
  };

  useEffect(() => {
    // selectedCategory가 변경될 때마다 fetchData 호출
    fetchData();
    

  }, [selectedCategory]);

  return (
    <ModelContext.Provider
      value={{ selectedCategory, ToggleMiniChatModel, setContent, content, fetchData ,pagecount}}
    >
      {children}
    </ModelContext.Provider>
  );
};
