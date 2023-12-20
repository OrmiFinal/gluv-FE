// authContext.jsx
import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(() => {
    const user = localStorage.getItem("user");
    console.log(user);
    return JSON.parse(user) || null;
  });
 
const apiURL = import.meta.env.VITE_APP_API_KEY;


  const login = async (inputs) => {
    try {
      
      const res = await axios.post("http://127.0.0.1:8000/users/login/", inputs);
      const token = res.data
      setCurrentUser(token);
      return true
    } catch (error) {
      console.error("Login failed:", error.message);
      return false
    }
    return false
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem("user"); // 사용자 정보를 로컬 스토리지에서 제거
  };




  const registerUser = async (inputs) => {
    
    try {
      console.log(apiURL+"apiURL")
      console.log(inputs);
      const res = await axios.post(`${apiURL}/users/signup/`, inputs);
      // 성공적으로 로그인한 경우
      if (res.status === 200) {
        console.log(apiURL)
        setCurrentUser(res.data);
        return { success: true, data: res.data };
      } else {
        return { success: false, error: "Unexpected status code" };
      }
    } catch (error) {
      // 로그인에 실패한 경우
      console.error("Login failed:", error.message);
      return { success: false, error: error.message };
    }
  };

  const isLogin = () => {
    const user = JSON.parse(localStorage.getItem("user")) || false;
    return user ? true : false;
  };

  useEffect(() => {
    if (currentUser && currentUser.access) {
      console.log(currentUser)
      localStorage.setItem("user", JSON.stringify({
        access_token: currentUser.access,
        refresh_token: currentUser.refresh,
        // user: currentUser 
      }));
    }
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout, registerUser, isLogin }}>
      {children}
    </AuthContext.Provider>
  );
};
