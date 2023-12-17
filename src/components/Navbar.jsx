import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Margin from "./Margin";
import LoginButton from "./ui/LoginButton";
import LogoutButton from "./ui/LogoutButton";

import NotificationClickButton from "./ui/NotificationClickButton";

function Navbar() {
  const textStyle = {
    fontFamily: 'Spoqa Han Sans Neo, sans-serif',
  };
  
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
    <div className="border-bottom" style={textStyle}>
      <nav className="   flex-col justify-between m-2">
        {/* Logo */}
        <div className="flex items-center justify-between w-full px-4">
          <Link className="navbar-brand relative inline-block">
          <div className="text-xs">글을 사랑하는사람들의 모임</div>
            <div className="flex justify-center align-middle">
              <span
                className="inset-0 bg-blue-500    w-48 h-10"
                style={{
                  clipPath: 'polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%)',
                }}
              ></span>
              <span className="absolute font-bold text-4xl text-white left-[30px] bottom-[2px] z-10">GLUV</span>
            </div>
          </Link>
    <div className="flex justify-center items-center">
      {/* Notification */}
      <Link to="/notification/" className="text-sm mt font-mono  ">
        <div className="text-sm font-mono">
          <NotificationClickButton />
        </div>
      </Link>
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
        <div className="flex w-full">
          <Link to="/submenu1" className="font-bold text-lg px-3 bold">
            공지사항 
          </Link>
          <Link to="/submenu2" className="font-medium text-lg px-3">
            질문·답변
          </Link>
          <Link to="/submenu2" className="font-medium text-lg px-3">
            자유 게시판
          </Link>
          <Link to="/submenu2" className="font-medium text-lg px-3">
            커뮤니티
          </Link>
          <span className="mx-2 border-r-2 h-6 self-center"></span>
          <Link to="/submenu2" className="font-medium text-lg px-3">
            <span className="font-bold">창작 게시판</span>
          </Link>
          <span className="mx-2 border-r-2 h-6 self-center"></span>
          <Link to="/submenu2" className="font-medium text-lg px-3">
            <span className="font-bold">모임 모집 게시판</span>
          </Link>
          {/* Add additional submenus here as needed */}
        </div>
        <div className="mx-2 border-r-2 h-6 self-center"></div>
        <Margin top="40" plustailwind="h-2"></Margin>
      </nav>
    </div>
  );
}

export default Navbar;
