// authContext.jsx
import React, { createContext, useState } from "react";

import LoginForm from "../components/Login/LoginForm";
import AlertForm from "../components/Login/AlertForm";
import NotifyForm from "../components/Login/NotifyForm";
import PasswordChangeForm from "../components/Login/PasswordChageForm.jsx";
import LoginRegister from "../components/Login/LoginRegister.jsx";
import AlertFormMain from  "../components/Login/AlertFormMain";
import ProfleForm from "../components/Login/ProfleForm.jsx";
export const OpenModalContext = createContext();

export const OpenModalProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const openForm = (category) => {
    setSelectedCategory(category);
  };

  const closeForm = () => {
    setSelectedCategory(null);
  };

  const renderForm = () => {
    switch (selectedCategory) {
      case "loginForm":
        return <LoginForm  />;
      case "registerForm":
        return <LoginRegister />;
      case "alertForm":
        return <AlertForm onClose={closeForm} />;
      case "notifyForm":
        return <NotifyForm onClose={closeForm} />;
      case "alertFormMain":
        return <AlertFormMain></AlertFormMain>
      case "passwordChangeForm":
        return <PasswordChangeForm onClose={closeForm} />;
        case "profleForm":
        return <ProfleForm />;
      default:
        return null;
    }
  };

  return (
    <OpenModalContext.Provider value={{ openForm, closeForm }}>
      {renderForm()}
      {children}
    </OpenModalContext.Provider>
  );
};
