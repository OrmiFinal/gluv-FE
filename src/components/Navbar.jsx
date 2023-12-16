import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Margin from "./Margin";
import LoginButton from "./ui/LoginButton";
import LogoutButton from "./ui/LogoutButton";

import NotificationClickButton from "./ui/NotificationClickButton";

function Navbar() {
  const { currentUser, logout } = useContext(AuthContext);
  const navigate = useNavigate();



  const logoutBtn = () => {
    logout();
    navigate('/home');
  };



  // 유즈컨텐트로 관리해야함

  const [isNotificationEnabled, setIsNotificationEnabled] = useState(true);



  const toggleNotification = () => {
    // 알람 토글 로직 구현
    setIsNotificationEnabled((prev) => !prev);
  };

  return (
    <div className="border-bottom">
      <nav className="   flex-col justify-between m-2">

        {/* Logo */}
        <div className="flex items-center justify-between w-full px-4">
          <Link className="navbar-brand relative inline-block">
            <div className="flex justify-center align-middle">
              <span
                className="inset-0 bg-blue-500 w-24 h-6"
                style={{
                  clipPath: 'polygon(0% 0%, 80% 0%, 100% 50%, 80% 100%, 0% 100%)',
                }}
              ></span>
              <span className="absolute font-bold text-2xl text-white left-[10px] bottom-[2px] z-10">GLUV</span>
            </div>
          </Link>
<div className="flex justify-center items-center">
        


      {/* Notification */}
          <div className="text-sm font-mono">
        <button onClick={toggleNotification}>
           <NotificationClickButton />
 
        </button>
      </div>


      <Margin left="3"></Margin>
        {/* Login/Logout */}
      {currentUser ? (
        <span className="text-sm font-mono" onClick={logoutBtn}>
          <LogoutButton /> 
        </span>
      ) : (
        <Link to="/login" className="text-sm mt font-mono  ">
          <div>
            <LoginButton />
          </div>
        </Link>
      )}
     

   
    </div>

    </div>
      
        {/* Submenus */}
        <Margin plustailwind="h-8"></Margin>
        <div className="flex px-4 w-full">
          <Link to="/submenu1" className=" font-bold text-lg mx-2 bold">
          공지상황 
          </Link>
          <Link to="/submenu2" className="font-mono text-lg mx-2">
          질문/답변
          </Link>
          <Link to="/submenu2" className="font-mono text-lg mx-2">
          자유게시판
          </Link>
          <Link to="/submenu2" className="font-mono text-lg mx-2">
          커뮤니티
          </Link>
          <Link to="/submenu2" className="font-mono text-lg mx-2">
          창장게시판/모임모집
          </Link>
          {/* Add additional submenus here as needed */}
        </div>
        <Margin top="40" plustailwind="h-2"></Margin>
      </nav>
    </div>
  );
}

export default Navbar;
