import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import {  Link } from "react-router-dom";
import { Slide, toast } from "react-toastify";
import * as Yup from "yup";
import { ErrorMessage, Field, Formik,Form } from "formik";
function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  // const [signupData,setSignupData]=useState({
  //   name:"",
  //   email:"",
  //   number:"",
  //   dob:"",
  //   gender:"male",
  //   country:"",
  //   pincode:"",
  //   password:"",
  //   confirmPassword:""

  // });
  // const [errors,setErrors]=useState({
  //   nameError:"",
  //   emailError:"",
  //   numberError:"",
  //   dobError:"",
  //   genderError:"",
  //   countryError:"",
  //   pincodeError:"",
  //   passwordError:"",
  //   confirmPasswordError:""
  // })
  const [countries, setCountries] = useState([]);
  const { login } = useAuthContext();

  useEffect(() => {
    fetch(
      "https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code"
    )
      .then((response) => response.json())
      .then((data) => {
        // setCountries(data.countries);
        setCountries(data.countries.map((item) => item.label.split(" ")[1]));
        // setSelectedCountry(data.userSelectValue);
      });
  }, []);

  // const handleChange=(e)=>{
  //   setSignupData({
  //     ...signupData,
  //     [e.target.id]:e.target.value
  //   })
  // }

  // const handleSubmit=async(e)=>{
  //   e.preventDefault();
  //   setErrors({
  //     nameError:"",
  //     emailError:"",
  //     numberError:"",
  //     dobError:"",
  //     genderError:"",
  //     countryError:"",
  //     pincodeError:"",
  //     passwordError:"",
  //     confirmPasswordError:""
  //   })
  //   let flagError=false;

  //   if(!/^(?!-)(?!.*-$)[a-zA-Z-]+$/.test(signupData.name)){

  //     if(!signupData.name.trim()){
  //       setErrors(error=>{return{
  //         ...error,
  //         nameError:"Name cant be empty!"
  //       }}
  //     )
  //     }else{
  //       setErrors(error=>{return{
  //         ...error,
  //         nameError:"Invalid name field!"
  //       }}
  //     )
  //     }
  //     flagError=true;
  //   }

  //   if(!signupData.email.trim()){
  //     setErrors(error=>{return{
  //       ...error,
  //       emailError:"Email cant be empty!"
  //     }})
  //     flagError=true;
  //   }
  //  else if( !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(signupData.email)){
  //   setErrors(error=>{return {
  //     ...error,
  //     emailError:"Invalid Email!"
  //   }})
  //   flagError=true;
  // }

  // if(!signupData.number.trim()){
  //   setErrors(error=>{return{
  //     ...error,
  //     numberError:"Number cant be empty!"
  //   }})
  //   flagError=true;
  // }else if(signupData.number.length!=10 ){
  //   setErrors(error=>{return{
  //     ...error,
  //     numberError:"Invalid phone number"
  //   }})
  //   flagError=true;
  // }

  // if(!signupData.dob){
  //   setErrors(error=>{return {
  //     ...error,
  //     dobError:"Please select a date!"
  //   }})
  //   flagError=true;
  // }

  // if(!signupData.pincode.trim()){
  //   setErrors(error=>{return{
  //     ...error,
  //     pincodeError:"Please enter your Pincode!"
  //   }})
  //   flagError=true;
  // }else if(!(signupData.pincode.length >= 5 && signupData.pincode.length <=7) && Number.isInteger(+signupData.pincode)){
  //   setErrors(error=>{return{
  //     ...error,
  //     pincodeError:"Enter valid pincode!"
  //   }})
  //   flagError=true;
  // }

  // if(!signupData.password.trim()){
  //   setErrors(error=>{return{
  //     ...error,
  //     passwordError:"Please enter a password!"
  //   }})
  //   flagError=true;
  // }else if(! /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(signupData.password)){
  //   setErrors(error=>{return{
  //     ...error,
  //     passwordError:"Password must contain at least one lowercase,one uppercase letter,one number,one special character and 8 character long!"
  //   }})
  //   flagError=true;
  // }

  // if(signupData.confirmPassword!=signupData.password){
  //   setErrors(error=>{return {
  //     ...error,
  //     confirmPasswordError:"Password must match!"
  //   }})
  //   flagError=true;
  // }

  // if(!signupData.country){
  //   setErrors(error=>{return {
  //     ...error,
  //     countryError:"Please select a country!"
  //   }})
  //   flagError=true;
  // }

  // let check = await axios.get(`http://localhost:3006/auth?email=${signupData.email}`)
  // if(check.data.length>0){
  //   setErrors(error=>{return {
  //     ...error,
  //     emailError:"Email Already Exists!"
  //   }})
  //   flagError=true;
  // }

  // if(flagError) return;
  // let temp=signupData;
  // delete temp['confirmPassword'];
  // axios.post("http://localhost:3006/auth",temp).then(res=>{
  //   if(res.status==200 || res.status==201){
  //     toast("Signup Successful!",{
  //       position:"top-right",
  //       autoClose:3000,
  //       hideProgressBar:false,
  //       closeOnClick:true,
  //       pauseOnHover:true,
  //       draggable:true,
  //       type:"success",
  //       transition:Slide,
  //       theme:"colored",
  //   })
  //     login(signupData);
  //   }
  // })

  // }

  const signupSchema = Yup.object().shape({
    name:Yup.string().required("Please fill your name!").matches(/^(?!-)(?!.*-$)[a-zA-Z-]+$/,"Invalid Name!"),

    email: Yup.string()
      .email("Invalid Email")
      .required("Please fill your Email id")
      .test(
        "email already exist",
        "Email already exist!",
        async function (email) {
          let check;
          try {
            check = await axios.get(
              `http://localhost:3006/auth?email=${email}`
            );
          } catch (err) {
            console.log(err);
          }
          if (check?.data?.length > 0) {
            return false;
          }
          return true;
        }
      ),
    password: Yup.string()
      .required("Please generate a password")
      .matches(
        /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
        "Password must contain at least one lowercase letter,one uppercase letter,one number,one special character and 8 character long!"
      ),

      confirmPassword:Yup.string()
      .required("Please confirm your Password!")
      .test('confirmPasswordTest',"Confirm Password must match with Password",function(password){
        if(this.parent.password==password) return true;
        return false;
      }),

      number:Yup.number().required('Please enter your Number')
      .test("numberLength","Invalid Phone Number",function(number){
        if((number).toString().length==10) return true;
        return false;
      }),

      pincode:Yup.number().required("Please enter your pincode")
      // .min(5,"Enter valid pincode!")
      .test("pincodeTest","Invalid Pincode",function (pincode) {
        if(pincode.toString().length>=5 && pincode.toString().length<=7) return true;
        return false;
      }),

      country:Yup.string().required("Please Select a country!")
     ,
     dob:Yup.date().required("Please select a date!") 

  });

  return (
    <Formik
      // className="leftAuthSignup"
      initialValues={{
        name: "",
        email: "",
        number: "",
        dob: "",
        gender: "male",
        country: "",
        pincode: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={signupSchema}
      onSubmit={(values, { setSubmitting }) => {
        axios.post("http://localhost:3006/auth",values).then(res=>{
    if(res.status==200 || res.status==201){
      toast("Signup Successful!",{
        position:"top-right",
        autoClose:3000,
        hideProgressBar:false,
        closeOnClick:true,
        pauseOnHover:true,
        draggable:true,
        type:"success",
        transition:Slide,
        theme:"colored",
    })
      login(values);
    
    }
        })}}
    >
      {({ isSubmitting }) => (
        <Form className="leftAuthSignup">
        <h2 style={{margin:"0px"}}>Signup</h2>
          <div className="authEmailNameSignup">
            <div className="authNameSignup">
              <label htmlFor="name">Name</label>
              <Field className="input" type="text" name="name" />
              <span>
                &nbsp;
                <ErrorMessage name="name" component="span" />
              </span>
            </div>
            <div className="authEmailSignup">
              <label htmlFor="email">Email</label>
              <Field className="input" type="email" name="email" />
              <span>
                &nbsp;
                <ErrorMessage name="email" component="span" />
              </span>
            </div>
          </div>
          <div className="authNumberDobSignup">
            <div className="authNumberSignup">
              <label htmlFor="number">Number</label>
              <Field className="input" type="number" name="number" />
              <span>
                &nbsp;
                <ErrorMessage name="number" component="span" />
              </span>
            </div>
            <div className="authDobSignup">
              <label htmlFor="dob">DOB</label>
              <Field
                name="dob"
                type="date"
                style={{height:"1.2rem"}}
                max={new Date().toISOString().split("T")[0]}
              />
              <span>
                &nbsp;
                <ErrorMessage name="dob" component="span" />
              </span>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "start",
              paddingLeft: "18px",
              boxSizing: "border-box",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
              className="gender"
            >
              <label htmlFor="signupGender">Gender</label>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <Field name="gender" value="male" type="radio" /> Male
                <Field name="gender" value="female" type="radio" /> Female
                {/* <span>error</span> */}
              </div>
            </div>
          </div>
          <div className="authCountryPinSignup">
            <div className="authCountrySignup">
              <label htmlFor="country">Country</label>
              <Field as="select" name="country">
                <option value="" disabled selected>
                  Select your option
                </option>
                {countries.map((item) => (
                  <option value={item}>{item}</option>
                ))}
              </Field>
              <span>
                &nbsp;
                <ErrorMessage name="country" component="span" />
              </span>
            </div>
            <div className="authPinSignup">
              <label htmlFor="pincode">Pincode</label>
              <Field style={{height:"1.2rem",width:"100%"}} name="pincode" type="number" />
              <span>
                &nbsp;
                <ErrorMessage name="pincode" component="span" />
              </span>
            </div>
          </div>
          <div className="authPassSignup">
            <div className="authPasswordSignup">
              <label htmlFor="password">Password</label>
              <div className="signupShow">
                <Field
                style={{height:"1.5rem",width:"100%"}}
                  name="password"
                  type={showPassword ? "text" : "password"}
                />
                {!showPassword ? (
                  <svg
                  style={{position:"absolute",right:"0px"}}
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
                   style={{position:"absolute",right:"0px"}}
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
              </div>
              <span>
                &nbsp;
                <ErrorMessage name="password" component="span" />
              </span>
            </div>
            <div className="authConfPasswordSignup">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <div className="signupShow">
                <Field
                style={{height:"1.5rem",width:"100%"}}

                  name="confirmPassword"
                  type={showPassword2 ? "text" : "password"}
                />
                <span onClick={() => setShowPassword2(!showPassword2)}>
                  {!showPassword2 ? (
                    <svg
                     style={{position:"absolute",right:"0px"}}
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
                     style={{position:"absolute",right:"0px"}}
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
                &nbsp;
                <ErrorMessage name="confirmPassword" component="span" />
              </span>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <button className="signupSubmit">Submit</button>
            <Link style={{ textDecoration: "none" }} to="/project/login">
              Already Registered?
            </Link>
          </div>
        </Form>
      )}
    </Formik>

    // <div className='leftAuthSignup'>
    // {/* <h2>Signup</h2> */}
    //   <div className='authEmailNameSignup'>
    //     <div className='authNameSignup'>
    //       <label htmlFor='name'>Name</label>
    //       <input id='name' value={signupData.name} onChange={handleChange} type='text'/>
    //       <span>&nbsp;{errors.nameError}</span>
    //     </div>
    //     <div className='authEmailSignup'>
    //       <label htmlFor='email'>Email</label>
    //       <input id='email' value={signupData.email} onChange={handleChange} type='email' autocomplete="off"/>
    //       <span>&nbsp;{errors.emailError}</span>
    //     </div>
    //   </div>
    //   <div className='authNumberDobSignup'>
    //     <div className='authNumberSignup'>
    //       <label htmlFor='number'>Number</label>
    //       <input id='number' type='number' value={signupData.number} onChange={handleChange}/>
    //       <span>&nbsp;{errors.numberError}</span>
    //     </div>
    //     <div className='authDobSignup'>
    //       <label htmlFor='dob'>DOB</label>
    //       <input id='dob' type='date' value={signupData.dob} onChange={handleChange} max={new Date().toISOString().split("T")[0]}/>
    //       <span>&nbsp;{errors.dobError}</span>
    //     </div>
    //   </div>
    //   <div style={{display:"flex",flexDirection:"row",justifyContent:"start",paddingLeft:"18px",boxSizing:"border-box"}}>
    //   <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}} className='gender'>
    //     <label htmlFor="signupGender">Gender</label>
    //     <div style={{display:"flex",flexDirection:"row"}}>
    //     <input id='gender' value="male" type='radio' checked={signupData.gender=='male'} onChange={handleChange}/> Male
    //     <input id="gender" value="female" checked={signupData.gender=='female'}  type='radio' onChange={handleChange}/> Female
    //     {/* <span>error</span> */}
    //     </div>
    //   </div>
    //   </div>
    //   <div className='authCountryPinSignup'>
    //     <div className='authCountrySignup'>
    //       <label htmlFor='country'>Country</label>
    //       <select id='country' onChange={handleChange} value={signupData.country}>
    //       <option value="" disabled selected>Select your option</option>
    //       {
    //         countries.map(item=><option value={item}>{item}</option>)
    //       }
    //       </select>
    //       <span>&nbsp;{errors.countryError}</span>
    //     </div>
    //     <div className='authPinSignup'>
    //       <label htmlFor='pincode'>Pincode</label>
    //       <input id='pincode' type='number' value={signupData.pincode} onChange={handleChange}/>
    //       <span>&nbsp;{errors.pincodeError}</span>
    //     </div>
    //   </div>
    //   <div className='authPassSignup'>
    //     <div className='authPasswordSignup'>
    //       <label htmlFor='password'>Password</label>
    //       <div className='signupShow'>
    //       <input id='password' type={showPassword?'text':'password'} value={signupData.password} onChange={handleChange}/>
    //       {!showPassword?<svg onClick={()=>setShowPassword(!showPassword)} width="22px" height="22px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
    //       :<svg onClick={()=>setShowPassword(!showPassword)} width="22px" height="22px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2.99902 3L20.999 21M9.8433 9.91364C9.32066 10.4536 8.99902 11.1892 8.99902 12C8.99902 13.6569 10.3422 15 11.999 15C12.8215 15 13.5667 14.669 14.1086 14.133M6.49902 6.64715C4.59972 7.90034 3.15305 9.78394 2.45703 12C3.73128 16.0571 7.52159 19 11.9992 19C13.9881 19 15.8414 18.4194 17.3988 17.4184M10.999 5.04939C11.328 5.01673 11.6617 5 11.9992 5C16.4769 5 20.2672 7.94291 21.5414 12C21.2607 12.894 20.8577 13.7338 20.3522 14.5" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
    //       }
    //       </div>
    //       <span>&nbsp;{errors.passwordError}</span>
    //     </div>
    //     <div className='authConfPasswordSignup'>
    //       <label htmlFor='confirmPassword'>Confirm Password</label>
    //       <div className='signupShow'>
    //       <input id='confirmPassword' type={showPassword2?'text':'password'} value={signupData.confirmPassword} onChange={handleChange}/>
    //       <span onClick={()=>setShowPassword2(!showPassword2)}>{!showPassword2?
    //         <svg width="22px" height="22px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
    //       :<svg width="22px" height="22px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2.99902 3L20.999 21M9.8433 9.91364C9.32066 10.4536 8.99902 11.1892 8.99902 12C8.99902 13.6569 10.3422 15 11.999 15C12.8215 15 13.5667 14.669 14.1086 14.133M6.49902 6.64715C4.59972 7.90034 3.15305 9.78394 2.45703 12C3.73128 16.0571 7.52159 19 11.9992 19C13.9881 19 15.8414 18.4194 17.3988 17.4184M10.999 5.04939C11.328 5.01673 11.6617 5 11.9992 5C16.4769 5 20.2672 7.94291 21.5414 12C21.2607 12.894 20.8577 13.7338 20.3522 14.5" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
    //       }</span>
    //       </div>
    //       <span>&nbsp;{errors.confirmPasswordError}</span>
    //     </div>
    //   </div>
    //   <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
    //   <button className='signupSubmit' onClick={handleSubmit}>Submit</button>
    //   <Link style={{textDecoration:"none"}} to="/project/login">Already Registered?</Link>
    //   </div>

    // </div>
  );
}

export default Signup;
