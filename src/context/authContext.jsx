// authContext.jsx
import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = async (inputs) => {
    try {
      console.log(inputs);
      const res = await axios.post("http://127.0.0.1:8000/accounts/login/", inputs);
      console.log(res.data);
      setCurrentUser(res.data);

    } catch (error) {
      console.error("Login failed:", error.message);
    }
    return res
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem("user"); // 사용자 정보를 로컬 스토리지에서 제거
  };

  const registerUser = async (inputs) => {
    try {
      console.log(inputs.formData);
      const res = await axios.post("http://localhost:8000/accounts/join/", inputs.formData);
      setCurrentUser(res.data);
    } catch (error) {
      console.error("Registration failed:", error.message);
    }
  };

  const isLogin = () => {
    const user = JSON.parse(localStorage.getItem("user")) || false;
    console.log("user")
    console.log(user)

    return user == false?false: true
  };

  useEffect(() => {
    if (currentUser && currentUser.access_token) {
      console.log(currentUser)
      localStorage.setItem("user", JSON.stringify({
        access_token: currentUser.access_token,
        refresh_token: currentUser.refresh_token,
        user: currentUser.user
      }));
    }
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout, registerUser, isLogin }}>
      {children}
    </AuthContext.Provider>
  );
};
