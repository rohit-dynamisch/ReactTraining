import React, { useEffect, useState } from "react";
import { Country, State, City } from "country-state-city";
import { Slide, toast } from "react-toastify";
import axios from "axios";
import { v4 as uuid } from "uuid";
import { useFormik } from "formik";
import * as Yup from "yup";
import MyInput from "./Input";
import MyError from "./MyError";
import { Button } from "@mui/material";
function AddressForm({ setAddress, address, setToggleForm }) {
  // console.log(Country.getAllCountries())
  // console.log(State.getStatesOfCountry('AF'))

  // const [form,setForm]=useState({
  //     name:"",
  //     email:"",
  //     phone:"",
  //     address:"",
  //     country:"",
  //     state:"",
  //     city:"",
  //     pin:""
  // })
  // const [errors,setErrors]=useState({
  //     name:"",
  //     email:"",
  //     phone:"",
  //     address:"",
  //     country:"",
  //     state:"",
  //     city:"",
  //     pin:""
  // })

  //   const handleChange=(e)=>{
  //       if(e.target.id=='country'){
  //           setSelectedCountry(e.target.value);
  //           console.log(State.getStatesOfCountry("IN"))
  //       }
  //       if(e.target.id=="state"){
  //           // console.log(City.getCitiesOfCountry('IN'),City.getCitiesOfState('MH'))
  //           setSelectedState(e.target.value)
  //       }
  //       setForm(prev=>{
  //           return {
  //               ...prev,
  //               [e.target.id]:e.target.value
  //           }
  //       })
  //   }

  //   const handleSubmit=async(e)=>{
  //       setErrors({
  //           name:"",
  //           email:"",
  //           phone:"",
  //           address:"",
  //           country:"",
  //           state:"",
  //           city:"",
  //           pin:""
  //       })
  //       let flagError=false;

  //       if(!/^(?!-)(?!.*-$)[a-zA-Z-]+$/.test(form.name)){

  //         if(!form.name.trim()){
  //           setErrors(error=>{return{
  //             ...error,
  //             name:"Please enter your name!"
  //           }}
  //         )
  //         }else{
  //           setErrors(error=>{return{
  //             ...error,
  //             name:"Invalid name field!"
  //           }}
  //         )
  //         }
  //         flagError=true;
  //       }

  //       if(!form.email.trim()){
  //         setErrors(error=>{return{
  //           ...error,
  //           email:"Please enter your Email!"
  //         }})
  //         flagError=true;
  //       }
  //      else if( !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(form.email)){
  //       setErrors(error=>{return {
  //         ...error,
  //         email:"Invalid Email!"
  //       }})
  //       flagError=true;
  //     }

  //     if(!form.phone.trim()){
  //       setErrors(error=>{return{
  //         ...error,
  //         phone:"Number cant be empty!"
  //       }})
  //       flagError=true;
  //     }else if(form.phone.length!=10 ){
  //       setErrors(error=>{return{
  //         ...error,
  //         phone:"Invalid phone number"
  //       }})
  //       flagError=true;
  //     }

  //     if(!form.pin.trim()){
  //       setErrors(error=>{return{
  //         ...error,
  //         pin:"Please enter your Pincode!"
  //       }})
  //       flagError=true;
  //     }else if(!(form.pin.length >= 5 && form.pin.length <=7) && Number.isInteger(+form.pin)){
  //       setErrors(error=>{return{
  //         ...error,
  //         pin:"Enter valid pincode!"
  //       }})
  //       flagError=true;
  //     }

  //  if(!form.address.trim()){
  //   setErrors(error=>{return{
  //       ...error,
  //       address:"Please enter your address!"
  //     }})
  //     flagError=true;
  //  }

  //  if(!form.country){
  //   setErrors(error=>{return{
  //       ...error,
  //       country:"Please select your country!"
  //     }})
  //     flagError=true;
  //  }
  //  if(!form.city){
  //   setErrors(error=>{return{
  //       ...error,
  //       city:"Please select your city!"
  //     }})
  //     flagError=true;
  //  }
  //  if(!form.state){
  //   setErrors(error=>{return{
  //       ...error,
  //       state:"Please select your state!"
  //     }})
  //     flagError=true;
  //  }

  //     if(flagError) return;
  //     let tempForm={id:uuid(),...form}
  //     axios.post("http://localhost:3006/address",tempForm).then(res=>{
  //       if(res.status==200 || res.status==201){
  //         toast("Address added Successful!",{
  //           position:"top-right",
  //           autoClose:3000,
  //           hideProgressBar:false,
  //           closeOnClick:true,
  //           pauseOnHover:true,
  //           draggable:true,
  //           type:"success",
  //           transition:Slide,
  //           theme:"colored",
  //       })
  //       setAddress([...address,tempForm])
  //       }
  //     }).catch(err=>console.log(err))

  //     }


  
  const addressSchema = Yup.object().shape({
    name: Yup.string()
      .required("Please enter your name!")
      .matches(/^(?!-)(?!.*-$)[a-zA-Z-]+$/, "Invalid name!"),
    email: Yup.string()
      .required("Please enter your email!")
      .matches(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Invalid Email!"
      ),
    phone: Yup.string()
      .required("Please enter your phone number!")
      .test("numberTest", "Invalid Phone Number", function (number) {
        return number.toString().length == 10;
      }),
    address: Yup.string().required("Please enter your address!"),
    country: Yup.string().required("Please select your country!"),
    state: Yup.string().required("Please select your state!"),
    city: Yup.string().required("Please select your city!"),
    pin: Yup.string()
      .required("Please enter your pincode!")
      .test("pincodeTest", "Invalid Pincode", function (pincode) {
        if (pincode.toString().length >= 5 && pincode.toString().length <= 7)
          return true;
        return false;
      }),
  });

  const formik = useFormik({
    // validateOnBlur:false,
    // validateOnChange:false,
    initialValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      country: "",
      state: "",
      city: "",
      pin: "",
    },
    validationSchema: addressSchema,
    onSubmit: (values, { resetForm, validate }) => {
      // validate(values)

      let tempForm = { id: uuid(), ...values };
      axios
        .post("http://localhost:3006/address", tempForm)
        .then((res) => {
          if (res.status == 200 || res.status == 201) {
            toast("Address added Successful!", {
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
            setAddress([...address, tempForm]);
          }
        })
        .catch((err) => console.log(err));
      resetForm();
      setToggleForm(false);
    },
  });

  return (
    <div className="AddressFormDiv">
      <div style={{ marginLeft: "20px" }}>
        <h2>Address Form</h2>
      </div>
      <form
        className="AddressForm"
        onSubmit={formik.handleSubmit}
        onReset={formik.handleReset}
      >
        <div>
          <label htmlFor="name">Full Name</label>
          <MyInput type="text" id="name" formik={formik} />
          <MyError formik={formik} fieldName={"name"} />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <MyInput type="email" id="email" formik={formik} />
          <MyError formik={formik} fieldName={"email"} />
        </div>
        <div>
          <label htmlFor="phone">Phone </label>
          <MyInput type="number" id="phone" formik={formik} />
          <MyError formik={formik} fieldName={"phone"} />
        </div>
        <div
          className="addressCountry"
          style={{ flexDirection: "row", justifyContent: "space-between" }}
        >
          <div>
            <label htmlFor="country">Country</label>
            <MyInput type="select" id="country" formik={formik}>
              <option value="" disabled selected>
                Select your option
              </option>
              {Country.getAllCountries().map((item) => (
                <option name="country" value={item.isoCode} id={item.isoCode}>
                  {item.name}
                </option>
              ))}
            </MyInput>
            <MyError formik={formik} fieldName={"country"} />
          </div>
          <div>
            <label htmlFor="country">state</label>
            <MyInput type="select" id="state" formik={formik}>
              <option value="" disabled selected>
                Select your option
              </option>
              {State.getStatesOfCountry(formik.values.country).map((item) => (
                <option name="state" value={item.isoCode} id={item.isoCode}>
                  {item.name}
                </option>
              ))}
            </MyInput>
            <MyError formik={formik} fieldName={"state"} />
          </div>
          <div>
            <label htmlFor="city">city</label>
            <MyInput type="select" id="city" formik={formik}>
              <option value="" disabled selected>
                Select your option
              </option>
              {City.getCitiesOfCountry(formik.values.country).map((item) => (
                <option name="city" value={item.isoCode} id={item.isoCode}>
                  {item.name}
                </option>
              ))}
            </MyInput>
            <MyError formik={formik} fieldName={"city"} />
          </div>
        </div>
        <div>
          <label htmlFor="address">Address </label>
          <MyInput type="text" id="address" formik={formik} />

          <MyError formik={formik} fieldName={"address"} />
        </div>

        <div>
          <label htmlFor="pin">Pincode </label>
          <MyInput type="text" id="pin" formik={formik} />
          <MyError formik={formik} fieldName={"pin"} />
        </div>
        <div
          className="addressBtn"
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <div>
          <Button sx={{ mr: 1 }} type="reset" variant="outlined" color="secondary" size="small">
             Reset
            </Button>
            <Button sx={{ mr: 1 }} onClick={() => setToggleForm(false)} variant="contained" color="error" size="small">
              Cancel
            </Button>
          </div>

          <div>
            <Button type="submit" variant="contained" color="success" size="small">
              Add Address
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddressForm;
