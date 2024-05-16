import React, { useState } from "react";
import * as Yup from "yup";
import { v4 as uuid } from "uuid";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Slide, toast } from "react-toastify";
import { useAuthContext } from "../context/AuthContext";
import { useCartContext } from "../context/CartContext";
import { useOrderContext } from "../context/OrderContext";
import { useNavigate } from "react-router-dom";
function Payment({selectedAddress,setAddressError,addressRef}) {
  // throw new Error("cnjewmc")
  const {userAuth}=useAuthContext();
  const {cart,clearCart}=useCartContext();
  const navigate=useNavigate();
  const {placeOrder}=useOrderContext();

  //----------------------------YUP validation schema-----------------------------------
  const paymentSchema = Yup.object().shape({
    payment:Yup.string().required("Please select a payment mode"),
    cardName:Yup.string().when("payment", (payment, schema) => {
        if(payment[0]=='card') 
          return schema.required("Please enter your card name!"). matches(/^[a-zA-Z ]+$/ ,"Please enter a valid name!")
        return schema;
      }),

      cardNumber:Yup.string().when("payment", (payment, schema) => {
        if(payment=='card')
          return schema.required("Please enter your card number!").matches(/^[0-9]{16}$/,"Invalid credit card number")
        return schema;
      }),

      cardExpiry:Yup.date().when("payment", (payment, schema) => {
        if(payment=='card')
          return schema.required("Please select card expiry date").min(new Date(), 'Date must be greater than today').max(new Date(new Date().setFullYear(new Date().getFullYear() + 5)), 'Date must be within 5 years from today')
          return schema;
      }),

      cardCVC:Yup.string().when("payment", (payment, schema) => {
        if(payment=='card')
          return schema.required("Please enter your card CVC").matches(/^[0-9]{3,4}$/,"Invalid CVV number")
          return schema;
      })

  });
  return (
    <Formik
    initialValues={{
        payment:"",
        cardNumber:"",
        cardName:"",
        cardCVC:"",
        cardExpiry:""
    }}
    validationSchema={paymentSchema}
    onSubmit={(values,{setSubmitting})=>{
      if(selectedAddress){
        setAddressError(false)
        toast("Order Placed Successfully!",{
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
    let order={
      userDetails:userAuth,
      address:selectedAddress,
      Order:cart,
      id:uuid(),
      status:"pending",
      payment:values.payment,
      date:new Date().toLocaleString()
      
    }
    placeOrder(order);
    clearCart();
    navigate('/project/orders/'+order.id)
    
      }
      else{
        setAddressError("*Please select an address!")
        addressRef.current?.scrollIntoView({behavior: 'smooth'})

      }
    }}
    >
      {(values) => (
        <Form className="paymentForm">
          <div className="paymentFormContent">
          <h2>Please select a payment mode :-</h2>
          <ErrorMessage name="payment" component="span"  style={{color:"red",fontSize:"0.8rem"}} />
            <div className="cardPayment">
              <Field type="radio" id="paymentInput1" name="payment" value="card"/>
              <label style={{display:"inline-flex",alignItems:"center"}} htmlFor="paymentInput1">CARD  <svg style={{marginLeft:"4px"}} width="24px" height="24px" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle fill="#F2F2F2" cx="50" cy="50" r="50"></circle> <clipPath id="a"> <circle cx="50" cy="50" r="50"></circle> </clipPath> <g fill-rule="evenodd" clip-rule="evenodd" clip-path="url(#a)"> <path fill="#E74C3C" d="M-19 18h90a5 5 0 0 1 5 5v54a5 5 0 0 1-5 5h-90a5 5 0 0 1-5-5V23a5 5 0 0 1 5-5z"></path> <path fill="#2C3E50" d="M-24 24H76v13H-24V24z"></path> <path fill="#ECF0F1" d="M-16 43h62v14h-62zm71 0h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H55a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3z"></path> <path fill="#ffffff" d="M70.948 43.736L53.052 56.264A2.97 2.97 0 0 0 55 57h14a3 3 0 0 0 3-3v-8a2.98 2.98 0 0 0-1.052-2.264z"></path> <path fill="#C0392B" d="M31.5 72h38a2.5 2.5 0 1 1 0 5h-38a2.5 2.5 0 1 1 0-5z"></path> </g> </g></svg></label>
              {values.values.payment=='card' && <div className="cardDetails">
                <div className="cardName">
                  <label htmlFor="cardNameInput">Name on card</label>
                  <Field className="input" type="text" name="cardName" />
                  <ErrorMessage name="cardName" component="span" />
                </div>
                <div className="cardNumber">
                  <label htmlFor="cardNameInput">Enter your card Number</label>
                  <Field className="input" type="number" name="cardNumber" />
                  <ErrorMessage name="cardNumber" component="span" />
                </div>
                <div className="cardExpiry">
                  <label htmlFor="cardExpiryInput">Expiry Date</label>
                  <Field className="input" type="date" name="cardExpiry" />
                  <ErrorMessage name="cardExpiry" component="span" />
                </div>
                <div className="cardCVC">
                  <label htmlFor="cardCVCInput">CVC</label>
                  <Field className="input" type="password" name="cardCVC" />
                  <ErrorMessage name="cardCVC" component="span" />
                </div>
              </div>}
            </div>

            <div className="cashPayment">
            <Field type="radio" id="paymentInput2" name="payment" value="cash"/>
              <label htmlFor="paymentInput2" style={{display:"inline-flex",alignItems:"center"}}>CASH <svg width="24px" height="24px" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M908.400275 471.875982c-1.992481-6.99928-6.870271-12.199594-12.971603-15.151455v-44.755052c0-55.119843-39.806614-100.932568-92.135345-110.593949l-76.086966-154.257539a24.491337 24.491337 0 0 0-14.250436-12.393108 24.556866 24.556866 0 0 0-18.813893 1.222519l-102.797063 50.977202-80.448717-88.411473c-9.118723-10.01667-24.655159-10.785608-34.738382-1.735486L251.050538 299.287824h-40.902171c-62.151887 0-112.665269 50.530789-112.665269 112.681651v407.906699c0 62.08943 50.514406 112.619195 112.665269 112.619195h572.664182c62.085334 0 112.616123-50.530789 112.616123-112.619195v-44.557442c0.578495-0.256995 1.029005-0.706481 1.541971-1.029004 0.706481-0.384981 1.284976-0.897947 1.925929-1.347434 1.541971-1.091462 3.01739-2.182924 4.30339-3.596909 1.5389-1.666885 2.69589-3.530357 3.721823-5.585294 0.260067-0.45051 0.516038-0.834467 0.644024-1.284976 0.512967-1.153919 1.347433-2.054938 1.669957-3.274385 11.811541-42.697042 18.040859-91.813845 18.040859-142.153167 0-51.62225-6.548771-101.830515-18.87635-145.171581z" fill="#27323A"></path><path d="M693.885037 191.100005c10.592094 21.44323 36.404243 73.838514 53.354664 108.187819h-271.657254c81.605708-40.451661 194.288384-96.310749 218.30259-108.187819zM490.924344 149.812853c13.16307 14.448046 36.982738 40.645176 54.449198 59.839954L366.236613 298.452333c-0.384981 0.223207-0.644024 0.640952-1.091461 0.835491h-40.323676c55.153631-49.632841 145.110148-130.533092 166.102868-149.474971z" fill="#79CCBF"></path><path d="M782.812549 883.184027H210.148367c-34.863295 0-63.371334-28.380053-63.371334-63.308877v-407.905675c0-34.928824 28.508039-63.371334 63.371334-63.371334h572.664182c19.261331 0 36.338714 8.85968 47.959812 22.472235H221.194042c-28.508039 0-51.750236 23.17974-51.750236 51.687779v383.379526c0 28.570496 23.242197 51.750236 51.750236 51.750236H833.148799c-11.621098 15.280465-29.727487 25.296111-50.33625 25.29611z" fill="#F4CE73"></path><path d="M846.117331 819.876174c0 1.797943-0.384981 3.405443-0.512967 5.137856H221.194042c-10.401651 0-18.87635-8.474699-18.87635-18.876349V422.759179c0-10.339194 8.474699-18.813893 18.87635-18.813893h624.154351c0.322524 2.633433 0.768938 5.266866 0.768938 8.024189v44.945495c-34.093334 5.072328-71.846033 16.630969-99.585135 35.444862h-49.823283c-68.058681 0-123.405827 55.408578-123.405827 123.468283S628.649207 739.29947 696.708913 739.29947h49.823283c27.611116 18.681812 65.234806 30.112467 99.585135 35.312781v45.263923z" fill="#F4CE73"></path><path d="M866.022685 727.677348c-37.433247-3.4679-77.690371-16.374998-97.724734-32.298462-4.365847-3.530357-9.756603-5.39178-15.341898-5.391781h-56.24714c-40.835618 0-74.094485-33.258867-74.094486-74.160014 0-40.898075 33.258867-74.156942 74.094486-74.156942h56.24714c5.585294 0 10.977075-1.863471 15.341898-5.332395 20.48385-16.370902 59.972035-29.148991 97.146239-32.357848 8.089718 34.6063 12.522118 73.131009 12.522118 113.066633 0 38.90969-4.237861 76.599933-11.943623 110.630809z" fill="#FFFFFF"></path><path d="M727.077351 615.893644c0 22.534692-18.297855 40.835618-40.832546 40.835618-22.472235 0-40.773161-18.300926-40.773162-40.835618 0-22.472235 18.300926-40.773161 40.773162-40.773161 22.535716-0.001024 40.832547 18.299902 40.832546 40.773161z" fill="#27323A"></path></g></svg></label>
            </div>

            <div>
            <button className="paymentBtn" type="submit" >
              Pay Now
            </button>
            
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default Payment;
