import axios from "axios";
import React, { useState } from "react";
import { useAuthContext } from "../context/AuthContext";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuthContext();
  const [loginData, setLogindata] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    emailError: "",
    passwordError: "",
  });

  const handleChange = (e) => {
    setLogindata({
      ...loginData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    let check;
    setErrors((error) => {
      return {
        emailError: "",
        passwordError: "",
      };
    });
    let errorFlag = false;

    if (!loginData.email.trim()) {
      setErrors((error) => {
        return {
          ...error,
          emailError: "Email cant be empty!",
        };
      });
      errorFlag = true;
    } else if (
      !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        loginData.email
      )
    ) {
      setErrors((error) => {
        return {
          ...error,
          emailError: "Invalid Email!",
        };
      });
      errorFlag = true;
    } else {
      try {
        check = await axios.get(
          `http://localhost:3006/auth?email=${loginData.email}`
        );
      } catch (err) {
        console.log(err);
      }
      if (check?.data?.length == 0) {
        setErrors((error) => {
          return {
            ...error,
            emailError: "Email doesn't Exist!",
          };
        });
        errorFlag = true;
      }
    }

    if (!loginData.password.trim()) {
      setErrors((error) => {
        return {
          ...error,
          passwordError: "Please enter a password!",
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
          passwordError:
            "Password must contain at least one lowercase letter,one uppercase letter,one number,one special character and 8 character long!",
        };
      });
      errorFlag = true;
    } else if (
      check?.data?.length > 0 &&
      check?.data[0].password != loginData.password
    ) {
      setErrors((err) => {
        return {
          ...err,
          passwordError: "Please Enter correct password!",
        };
      });
      errorFlag = true;
    }

    if (errorFlag) return;
    console.log(loginData)
    login(loginData);
  };
  return (
    <div className="leftAuth">
      <div className="authEmailLogin">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          onChange={handleChange}
          value={loginData.email}
        />
        <span>&nbsp; {errors.emailError}</span>
      </div>
      <div className="authPasswordLogin">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          onChange={handleChange}
          value={loginData.password}
        />
        <span>&nbsp; {errors.passwordError}</span>
      </div>
      <div>Forgot Password?</div>
      <div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div>Already Registered?</div>
    </div>
  );
}

export default Login;
