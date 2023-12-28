import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Auth(SpecificComponent) {
  function AuthenticationCheck(props) {

    const isAuthenticated = localStorage.getItem("user");


  
    const navigate = useNavigate();

    useEffect(() => {
   
        // 로그인 하지 않은 상태
        
          if (isAuthenticated == null || isAuthenticated == undefined) {
     
                navigate("/");
            
 
          }
    }, []);

    return <SpecificComponent />;
  }
  return AuthenticationCheck;
}

export default Auth;