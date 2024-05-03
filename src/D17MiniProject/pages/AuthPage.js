import React from "react";
import { Outlet } from "react-router-dom";
import Login from "../components/Login";
import Signup from "../components/Signup";
import ForgotPassword from "../components/ForgorPassword";
import img from "../Images/4040107.jpg"
function AuthPage() {
  return (
    <div className="authContainer">
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
