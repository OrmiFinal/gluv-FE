import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Margin from "./Margin";
import LoginButton from "./ui/LoginButton";
import LogoutButton from "./ui/LogoutButton";

import NotificationClickButton from "./ui/NotificationClickButton";
import { OpenModalContext } from "../context/OpenModalProvider";

function Logo() {
  
const logoContainerStyle = {
    display: 'flex',
    alignItems: 'center',
  };
  
const logoTextStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#000000',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    marginRight: '10px',
  };

  return (
    <div style={logoContainerStyle}>
      <span style={logoTextStyle}>GLUV</span>
    </div>
  );
}

function Navbar() {

  const { closeForm,openForm } = useContext(OpenModalContext);

  const textStyle = {
    fontFamily: 'Spoqa Han Sans Neo, sans-serif',
  };


  const { currentUser, logout } = useContext(AuthContext);
  
  const gotoLogin = () => {
    openForm("loginForm"); // Replace "loginForm" with the desired form category
  };

  





  const [isNotificationEnabled, setIsNotificationEnabled] = useState(true);
  const toggleNotification = () => {
    // 알람 토글 로직 구현
    setIsNotificationEnabled((prev) => !prev);
  };
  


  return (
    <div className="border-bottom" style={textStyle}>
      <nav className="flex-col justify-between my-2">
        {/* 로고 */}
        <div className="flex items-center justify-between w-full pl-0 pr-4 my-4">
          <Link className="navbar-brand relative inline-block">
            <div className="flex justify-center align-middle">
              <Logo></Logo>
              <span className="absolute font-bold text-xl text-black"></span>
            </div>
          </Link>

      
      
        <div className="flex justify-center items-center gap-4">
          {/* Notification */}
          <Link to="/notification/" className="text-sm mt font-mono  ">
            <div className="text-sm font-mono">
              <NotificationClickButton className="m-4 p-4"/>
            </div>
          </Link>
          {/* Login/Logout */}
          {currentUser ? (
            <span className="text-sm font-mono" onClick={logoutBtn}>
              <LogoutButton /> 
            </span>
            ) : (
            <div  className="text-sm mt font-mono  "
            onClick={gotoLogin}
            >
              <div>
                <LoginButton/>
              </div>
            </div>
            )}
        </div>



    </div>
        {/* Submenus */}
        <div className="flex w-full pb-4">
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
        <hr className="border-b-2 border-b-[#f5f5f5] border-t-0"></hr>
        <Margin plustailwind="h-1"></Margin>
      </nav>
    </div>
  );
}

export default Navbar;
