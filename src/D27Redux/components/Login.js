import axios from "axios";
import React, { useState } from "react";
import { Slide, toast } from "react-toastify";
import * as Yup from "yup";
import "react-toastify/dist/ReactToastify.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginAsync } from "../Slice/authSlice";
function RtkLogin() {
  const navigate=useNavigate();
  const user=useSelector(state=>state.auth.user)

  const [showPassword, setShowPassword] = useState(false);
  const dispatch=useDispatch();
  //--------------------------formik schema----------------------------------
  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid Email")
      .required("Email is Required")
      .test(
        "email does not exist",
        "Email does not exist!",
        async function (email) {
          let check;
          try {
            check = await axios.get(
              `http://localhost:3010/auth?email=${email}`
            );
          } catch (err) {
            console.log(err);
          }
          if (check?.data?.length > 0) {
            return true;
          }
          return false;
        }
      ),
    password: Yup.string().when("email", (email, schema) => {
      async function validate(email) {
        let check;
        try {
          check = await axios.get(`http://localhost:3010/auth?email=${email}`);
        } catch (err) {
          console.log(err);
        }
        if (check?.data?.length > 0) {
          return true;
        }
        return false;
      }
      if (validate) {
        return schema
          .required("Password is Required")
          .matches(
            /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
            "Password must contain at least one lowercase letter,one uppercase letter,one number,one special character and 8 character long!"
          )
          .test(
            "password matching",
            "Incorrect Password",
            async function (password, { from }) {
              const { email } = this.parent;
              let check;
              try {
                check = await axios.get(
                  `http://localhost:3010/auth?email=${email}`
                );
              } catch (err) {
                console.log(err);
              }
              if (check?.data[0]?.password != password) {
                return false;
              }
              return true;
            }
          );
      }
      return schema;
    }),
  });


  return (
    <div style={{marginLeft:"40%"}}>
    {user.length>0 && <Navigate to="/day27/reduxToolKit"></Navigate>}
    <Formik
    
      className="leftAuth"
      initialValues={{ email: "", password: "" }}
      validationSchema={loginSchema}
      onSubmit={(values, { setSubmitting }) => {
        toast("Login Success", {
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
        console.log(values)
        dispatch(loginAsync(values));
      }}
    >
      {({ isSubmitting }) => (
        <Form className="leftAuth">
          {" "}
          <h2>Login</h2>
          <div className="authEmailLogin">
            <label htmlFor="email">Email</label>
            <Field className="input" type="email" name="email" />
            <span>
              &nbsp; <ErrorMessage name="email" component="span"  />
            </span>
          </div>
          <div className="authPasswordLogin">
            <label htmlFor="password">Password</label>
            <div style={{ display: "flex", position: "relative" }}>
              <Field
                type={showPassword ? "text" : "password"}
                name="password"
                className="input"
              />
              <span style={{ position: "absolute", right: "0px", top: "2px" }}>
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
            <span>
              &nbsp; <ErrorMessage name="password" component="div" />
            </span>
            {/* <div className="loginForgot">
              <Link
                style={{ textDecoration: "none", color: "#13274F" }}
                to="/project/auth/forgotPassword"
              >
                Forgot Password?
              </Link>
            </div> */}
          </div>
          <div>
            <button className="loginBtn" type="submit" >
              Submit
            </button>
          </div>
          <div>
            <Link style={{ textDecoration: "none" }} to="/day27/reduxToolKit/signup">
              New User? Create an account
            </Link>
          </div>
        </Form>
      )}
    </Formik>
    </div>
  );
}

export default RtkLogin;
