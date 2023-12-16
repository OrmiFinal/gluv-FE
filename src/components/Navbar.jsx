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
    

<Link className="navbar-brand relative inline-block">
  <div className="flex justify-center align-middle ">

  <span
className=" inset-0 bg-blue-500 w-32 h-6 "
style={{
  clipPath: 'polygon(0% 0%, 80% 0%, 100% 50%, 80% 100%, 0% 100%)',
}}
></span>
<span className=" absolute font-bold text-2xl text-white right-10 bottom-[2px] z-10">GLUV</span>

  </div>

</Link>



          {currentUser ? (
            <span className="text-sm font-cormorant" onClick={logoutBtn}>
              Logout
            </span>
          ) : (
            <Link to="/login" className="text-sm   font-light">
              <div>Login</div>
            </Link>
          )}
        </div>

        {/* 추가: 하위 메뉴를 가로로 배치 */}
    
          <div className="flex px-4 w-full">
            <Link to="/submenu1" className="font-cormorant text-sm mx-2">
              Submenu 1
            </Link>
            <Link to="/submenu2" className="font-cormorant text-sm mx-2">
              Submenu 2
            </Link>
            {/* 필요에 따라 추가적인 하위 메뉴를 여기에 추가할 수 있습니다. */}
          </div>
        

      </nav>
    </div>
  );
}

export default Navbar;
