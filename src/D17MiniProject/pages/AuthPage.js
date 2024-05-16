import React, { useEffect } from "react";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import Login from "../components/Login";
import Signup from "../components/Signup";
import ForgotPassword from "../components/ForgorPassword";
import img from "../Images/4040107.jpg"
import { useAuthContext } from "../context/AuthContext";
function AuthPage() {
  const {userAuth}=useAuthContext();
  return (
    <div className="authContainer">
    {JSON.parse(localStorage.getItem('user')) && <Navigate to="/project" replace={true}/>}
      <div className="authDiv">
        <Outlet/>
        <div className="rightAuth">
          <div className="authImageDiv">
            <img src={img} height="400px" width="300px"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
