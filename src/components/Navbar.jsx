import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const { currentUser, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const logoutBtn = () => {
    logout();
    navigate('/home');
  };

  return (
    <div className="border-bottom shadow-sm">
      <nav className="navbar navbar-expand-lg navbar-light bg-light flex-col justify-between">

        {/* 글로브와 로그인을 가로로 배치 */}
        <div className="flex items-center justify-between w-full px-4">
          <Link className="navbar-brand" to="/home">
            Gluv
          </Link>

          {currentUser ? (
            <span className="text-sm" onClick={logoutBtn}>
              Logout
            </span>
          ) : (
            <Link to="/login" className="text-sm">
              <div>Login</div>
            </Link>
          )}
        </div>

        {/* 추가: 하위 메뉴를 가로로 배치 */}
    
          <div className="flex px-4 w-full">
            <Link to="/submenu1" className="text-sm mx-2">
              Submenu 1
            </Link>
            <Link to="/submenu2" className="text-sm mx-2">
              Submenu 2
            </Link>
            {/* 필요에 따라 추가적인 하위 메뉴를 여기에 추가할 수 있습니다. */}
          </div>
        

      </nav>
    </div>
  );
}

export default Navbar;
