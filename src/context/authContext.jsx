// authContext.jsx
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import {jwtDecode} from 'jwt-decode';
import {httpClient} from '../api/interceptor';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(() => {
    const user = localStorage.getItem("user");

    return JSON.parse(user) || null;
  });

  const apiURL = import.meta.env.VITE_APP_API_KEY;


  const login = async (inputs) => {
    try {

      const res = await axios.post(`${apiURL}/users/login/`, inputs);
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


  const getDecodedToken = () => {
    // 디코딩된 토큰을 받아오는 함수
    // ex) decodedToken.user_id = 유저 pk
    const token = localStorage.getItem('user');
  
    if (token) {
      const decodedToken = jwtDecode(token);
      return decodedToken;
    }
    return null;
  };

  const getUserInfo = async () => {
    const decodedToken = getDecodedToken();
    if (decodedToken) {
      const userId = decodedToken.user_id;
      const tokenObject = JSON.parse(localStorage.getItem('user'));
      const accessToken = tokenObject.access_token;
  
      try {
        // 유저 프로필 정보 api
        const response = await httpClient.get(`${apiURL}/users/${userId}/profile`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
  
        const data = response.data;
        setCurrentUser(data);
  
        // Promise에서 유저 정보 반환
        return data;
      } catch (error) {
        console.error('Failed to fetch user profile:', error);
        throw error;
      }
    }
  };


  const registerUser = async (inputs) => {

    try {
  
      const res = await axios.post(`${apiURL}/users/signup/`, inputs);
      // 성공적으로 로그인한 경우
      if (res.status === 200) {
   
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
    <AuthContext.Provider value={{ currentUser, login, logout, registerUser, isLogin, getDecodedToken, getUserInfo}}>
      {children}
    </AuthContext.Provider>
  );

  
};

