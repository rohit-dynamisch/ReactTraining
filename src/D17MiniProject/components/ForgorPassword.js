import axios from "axios";
import React, { useState } from "react";

function ForgotPassword() {
    const [showPassword,setShowPassword]=useState(false);
    const [loginData,setLoginData]=useState({
        email:"",
        password:"",
        confirmPassword:""
    })
    const [errors,setErrors]=useState({
        email:"",
        password:"",
        confirmPassword:""
    })
    const handleChange=(e)=>{
        setLoginData({
            ...loginData,
            [e.target.id]:e.target.value,
        })
    }
    const handleSubmit=async()=>{
        setErrors(error=>{
            return {
              email:"",
              password:"",
              confirmPassword:""
            }
          })
          let errorFlag=false;
          let check=await axios.get(`http://localhost:3006/auth?email=${loginData.email}`)


          if(!loginData.email.trim()){
            setErrors(error=>{return{
              ...error,
              email:"Email cant be empty!"
            }})
            errorFlag=true;
          }
         else if( !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(loginData.email)){
          setErrors(error=>{return {
            ...error,
            email:"Invalid Email!"
          }})
          errorFlag=true;
        }else if(check?.data?.length>0){
          setErrors(error=>{return {
            ...error,
            email:"Email doesn't exist!"
          }})
          errorFlag=true;
        }

        if(errorFlag) return;
         
      
          if(!loginData.password.trim()){
            setErrors(error=>{return{
              ...error,
              password:"Please enter a password!"
            }})
            errorFlag=true;
          }else if(! /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(loginData.password)){
            setErrors(error=>{return{
              ...error,
              password:"Password must contain at least one lowercase letter,one uppercase letter,one number,one special character and 8 character long!"
            }})
            errorFlag=true;
          }
          // else if()
      
          
        

        if(loginData.confirmPassword!=loginData.password){
            setErrors(error=>{return{
                ...error,
                confirmPassword:"Confirm Password must match with password!"
              }})
              errorFlag=true;
        }
      
          if(errorFlag) return;
          console.log(loginData);

    }
  return (
    <div className="forgotPasswordDiv">
      <div>Forgot Password</div>
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
          <input
            type="text"
            id="password"
            onChange={handleChange}
            value={loginData.password}
          />
          <span>&nbsp; {errors.password}</span>
        </div>
        <div className="forgotConfirmPassword">
          <label htmlFor="confirmPassword">Password</label>
          <input
            type="password"
            id="confirmPassword"
            onChange={handleChange}
            value={loginData.confirmPassword}
          />
          <span>&nbsp; {errors.confirmPassword}</span>
        </div>
        <div>
          <button onClick={handleSubmit}>Submit</button>
        </div>
        <div>Already Registered?</div>
        <div>Register</div>
      </div>
    </div>
  );
}

export default ForgotPassword;
