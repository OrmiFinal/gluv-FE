// authContext.jsx
import React, { createContext, useState } from "react";

import LoginForm from "../components/Login/LoginForm";
import AlertForm from "../components/Login/alertForm";
import NotifyForm from "../components/Login/notifyForm";
import PasswordChangeForm from "../components/Login/PasswordChageForm.jsx";
import LoginRegister from "../components/Login/LoginRegister.jsx";

export const OpenModalContext = createContext();

export const OpenModalProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

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
      case "passwordChangeForm":
        return <PasswordChangeForm onClose={closeForm} />;
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
