import React from "react";
import { Link, useLocation } from "react-router-dom";

function SelectMenu() {
  const location = useLocation();
  
  // 현재 경로가 주어진 경로와 일치하는지 확인하는 함수
  const isActive = (pathname) => location.pathname === pathname;

  return (
    <div className="flex">
      <Link to="/users/myteams/">
        <div className={`text-2xl border-black cursor-pointer text-base ${isActive("/users/myteams/") ? "font-bold underline" : ""}`}>
          활동중인 모임
        </div>
      </Link>
      <Link to="/users/myappliedteams/">
        <div className={`text-2xl border-black cursor-pointer text-base ml-4 ${isActive("/users/myappliedteams/") ? "font-bold underline" : ""}`}>
          신청중인 모임
        </div>
      </Link>
    
    </div>
  );
}

export default SelectMenu;
