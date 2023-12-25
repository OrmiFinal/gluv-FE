import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContextProvider";
import Margin from "./Margin";
import LoginButton from "./ui/LoginButton";
import LogoutButton from "./ui/LogoutButton";

import NotificationClickButton from "./ui/NotificationClickButton";
import { OpenModalContext } from "../context/OpenModalProvider";
import ProfileButton from "./ui/ProfileButton";

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
  const { closeForm, openForm } = useContext(OpenModalContext);
  const { currentUser, logout } = useContext(AuthContext);

  const textStyle = {
    fontFamily: 'Spoqa Han Sans Neo, sans-serif',
  };

  const gotoLogin = () => {
    openForm("loginForm");
  };

  const gotoAlertForm = () => {
    openForm("alertForm");
  };
  const gotoProfleForm = () => {
    openForm("profleForm");
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
        <div className="flex items-center justify-between w-full pl-0 pr-4 my-4 ">
          <Link className="navbar-brand relative inline-block mx-5">
            <div className="flex justify-center align-middle">
              <Logo></Logo>
              <span className="absolute font-bold text-xl text-black"></span>
            </div>
          </Link>
        <div className="flex justify-center items-center gap-4">
          {/* Notification */}
          <div to="/notification/" className="text-sm mt"
          onClick={gotoAlertForm}
          >
            <div className="text-sm ">
              <NotificationClickButton className="m-4 p-4"/>
            </div>
          </div>
          {/* Login/Logout */}

          {currentUser ? (
            <div className="flex">
            <span className="text-sm" onClick={logout}>

              <LogoutButton /> 
            </span>
            <Margin left="2"></Margin>
              <span className="text-sm" onClick={gotoProfleForm}>
              <ProfileButton /> 
            </span>
            </div>
            ) : (
            <div  className="text-sm mt"
            onClick={gotoLogin}
            >
              <div>
                <LoginButton/>
              </div>
            </div>
            )}
        </div>
    </div>
        <div className="flex w-full pb-4">
          <Link to="/posts/notices/" className="font-bold text-lg px-3 bold">
            공지사항 
          </Link>
          <Link to="/posts/?category=qna" className="font-bold text-lg px-3">
            질문·답변
          </Link>
          <Link to="/posts/?category=comm" className="font-bold text-lg px-3">
            자유 게시판
          </Link>
          <span className="mx-2 border-r-2 h-6 self-center"></span>
          <Link to="/posts/?category=creation" className="font-bold text-lg px-3">
            창작 게시판
          </Link>
          <span className="mx-2 border-r-2 h-6 self-center"></span>
          <Link to="/recruits/" className="font-bold text-lg px-3">
            모임 모집 게시판
          </Link>
        </div>
        <hr className="border-b-2 border-b-[#f5f5f5] border-t-0"></hr>
        <Margin plustailwind="h-1"></Margin>
      </nav>
    </div>
  );
}

export default Navbar;
