import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { Slide, toast } from "react-toastify";

function ForgotPassword() {
  const { login } = useAuthContext();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors((error) => {
      return {
        email: "",
        password: "",
        confirmPassword: "",
      };
    });
    let errorFlag = false;
    let check = await axios.get(
      `http://localhost:3006/auth?email=${loginData.email}`
    );

    if (!loginData.email.trim()) {
      setErrors((error) => {
        return {
          ...error,
          email: "Email cant be empty!",
        };
      });
      errorFlag = true;
      return;
    } else if (
      !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        loginData.email
      )
    ) {
      setErrors((error) => {
        return {
          ...error,
          email: "Invalid Email!",
        };
      });
      errorFlag = true;
      return;
    } else if (check?.data?.length == 0) {
      setErrors((error) => {
        return {
          ...error,
          email: "Email doesn't exist!",
        };
      });
      errorFlag = true;
      return;
    }

    if (!loginData.password.trim()) {
      setErrors((error) => {
        return {
          ...error,
          password: "Please enter a password!",
        };
      });
      errorFlag = true;
    } else if (
      !/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(
        loginData.password
      )
    ) {
      setErrors((error) => {
        return {
          ...error,
          password:
            "Password must contain at least one lowercase letter,one uppercase letter,one number,one special character and 8 character long!",
        };
      });
      errorFlag = true;
    }
    // else if()

    if (loginData.confirmPassword != loginData.password) {
      setErrors((error) => {
        return {
          ...error,
          confirmPassword: "Confirm Password must match with password!",
        };
      });
      errorFlag = true;
    }

    if (errorFlag) return;

    let res = await axios.put(
      `http://localhost:3006/auth/${check.data[0].id}`,
      { ...check.data[0], ...loginData }
    );
    if (res.status == 200 || res.status == 201) {
      // login({...check.data[0],...loginData})
      toast("Password changed Successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        type: "success",
        transition: Slide,
        theme: "colored",
      });
      navigate("/project/auth/login");
    }
  };
  return (
    <div className="forgotPasswordDiv">
      <h2>Forgot Password</h2>
      <div className="forgotContainer">
        <div className="forgotEmail">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            onChange={handleChange}
            value={loginData.email}
          />
          <span>&nbsp; {errors.email}</span>
        </div>
        <div className="forgotPassword">
          <label htmlFor="password">Password</label>
          <div style={{ position: "relative" }}>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              onChange={handleChange}
              value={loginData.password}
            />
            <span style={{ position: "absolute", right: "-5px", top: "4px" }}>
              {!showPassword ? (
                <svg
                  onClick={() => setShowPassword(!showPassword)}
                  width="22px"
                  height="22px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                    <path
                      d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              ) : (
                <svg
                  onClick={() => setShowPassword(!showPassword)}
                  width="22px"
                  height="22px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M2.99902 3L20.999 21M9.8433 9.91364C9.32066 10.4536 8.99902 11.1892 8.99902 12C8.99902 13.6569 10.3422 15 11.999 15C12.8215 15 13.5667 14.669 14.1086 14.133M6.49902 6.64715C4.59972 7.90034 3.15305 9.78394 2.45703 12C3.73128 16.0571 7.52159 19 11.9992 19C13.9881 19 15.8414 18.4194 17.3988 17.4184M10.999 5.04939C11.328 5.01673 11.6617 5 11.9992 5C16.4769 5 20.2672 7.94291 21.5414 12C21.2607 12.894 20.8577 13.7338 20.3522 14.5"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              )}
            </span>
          </div>
          <span>&nbsp; {errors.password}</span>
        </div>
        <div className="forgotConfirmPassword">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <div style={{ position: "relative" }}>
            <input
              type={showPassword1 ? "text" : "password"}
              id="confirmPassword"
              onChange={handleChange}
              value={loginData.confirmPassword}
            />
            <span style={{ position: "absolute", right: "-5px", top: "4px" }}>
              {!showPassword1 ? (
                <svg
                  onClick={() => setShowPassword1(!showPassword1)}
                  width="22px"
                  height="22px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                    <path
                      d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              ) : (
                <svg
                  onClick={() => setShowPassword1(!showPassword1)}
                  width="22px"
                  height="22px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M2.99902 3L20.999 21M9.8433 9.91364C9.32066 10.4536 8.99902 11.1892 8.99902 12C8.99902 13.6569 10.3422 15 11.999 15C12.8215 15 13.5667 14.669 14.1086 14.133M6.49902 6.64715C4.59972 7.90034 3.15305 9.78394 2.45703 12C3.73128 16.0571 7.52159 19 11.9992 19C13.9881 19 15.8414 18.4194 17.3988 17.4184M10.999 5.04939C11.328 5.01673 11.6617 5 11.9992 5C16.4769 5 20.2672 7.94291 21.5414 12C21.2607 12.894 20.8577 13.7338 20.3522 14.5"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              )}
            </span>
          </div>
          <span>&nbsp; {errors.confirmPassword}</span>
        </div>
        <div>
          <button
            style={{
              height: "2rem",
              border: "none",
              backgroundColor: "#50c878",
              fontSize: "1.2rem",
              borderRadius: "10px",
              cursor: "pointer",
            }}
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/project/auth/login">
            Login
          </Link>
          <Link style={{ textDecoration: "none" }} to="/project/auth/signup">
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
