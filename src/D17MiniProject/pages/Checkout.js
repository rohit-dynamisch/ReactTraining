import React, { useEffect, useRef, useState } from "react";
import AddressForm from "../components/AddressForm";
import Cart from "./Cart";
import axios from "axios";
import AddressCard from "../components/AddressCard";
import { v4 as uuid } from "uuid";
import Payment from "./Payment";
import ErrorBoundary from "../components/ErrorBoundary";
import { Fab } from "@mui/material";
import { AddBox, AddCardSharp } from "@mui/icons-material";
import AddCircleSharpIcon from '@mui/icons-material/AddCircleSharp';
import { Navigate } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
function Checkout() {
  const addressRef = useRef();
  const [selectedAddress, setSelectedAddress] = useState();
  const [addressError, setAddressError] = useState(false);
  const [address, setAddress] = useState([]);
  const [toggleForm, setToggleForm] = useState(false);
  const {cart}=useCartContext();

  //---------------------------------API request to get user addresses---------------------------------
  useEffect(() => {
    axios.get("http://localhost:3006/address").then((res) => {
      setAddress(res.data);
    });
  }, []);

  
  useEffect(() => {
    if (selectedAddress) setAddressError("");
  }, [selectedAddress]);


  const handleOrder = () => {
    if (!selectedAddress) {
      // alert("pls select address!");
      return;
    }
  };
  return (
    <div className="checkout">
    {cart.length==0 && <Navigate to="/project"/>}
      <div>
        {toggleForm && (
          <AddressForm
            setAddress={setAddress}
            address={address}
            tabIndex={0}
            setToggleForm={setToggleForm}
          />
        )}
        <div className="selectAddress" ref={addressRef}>
          <div
            style={{
              fontSize: "1rem",
              margin: "10px",
              borderBottom: "2px solid rgb(209 213 219)",
              paddingBottom: "10px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <h3>
              Select an Address!{" "}
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 1024 1024"
                fill="#000000"
                class="icon"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M512 1012.8c-253.6 0-511.2-54.4-511.2-158.4 0-92.8 198.4-131.2 283.2-143.2h3.2c12 0 22.4 8.8 24 20.8 0.8 6.4-0.8 12.8-4.8 17.6-4 4.8-9.6 8.8-16 9.6-176.8 25.6-242.4 72-242.4 96 0 44.8 180.8 110.4 463.2 110.4s463.2-65.6 463.2-110.4c0-24-66.4-70.4-244.8-96-6.4-0.8-12-4-16-9.6-4-4.8-5.6-11.2-4.8-17.6 1.6-12 12-20.8 24-20.8h3.2c85.6 12 285.6 50.4 285.6 143.2 0.8 103.2-256 158.4-509.6 158.4z m-16.8-169.6c-12-11.2-288.8-272.8-288.8-529.6 0-168 136.8-304.8 304.8-304.8S816 145.6 816 313.6c0 249.6-276.8 517.6-288.8 528.8l-16 16-16-15.2zM512 56.8c-141.6 0-256.8 115.2-256.8 256.8 0 200.8 196 416 256.8 477.6 61.6-63.2 257.6-282.4 257.6-477.6C768.8 172.8 653.6 56.8 512 56.8z m0 392.8c-80 0-144.8-64.8-144.8-144.8S432 160 512 160c80 0 144.8 64.8 144.8 144.8 0 80-64.8 144.8-144.8 144.8zM512 208c-53.6 0-96.8 43.2-96.8 96.8S458.4 401.6 512 401.6c53.6 0 96.8-43.2 96.8-96.8S564.8 208 512 208z"
                    fill=""
                  ></path>
                </g>
              </svg>
            </h3>
            <Fab onClick={() => setToggleForm(!toggleForm)} variant="extended" color="primary" size="small">
              <AddCircleSharpIcon sx={{ mr: 1 }}/>
              Add an Address
            </Fab>
          </div>
          {addressError && (
            <span style={{ color: "red", fontSize: "0.8rem" }}>
              *{addressError}
            </span>
          )}
          {address?.length > 0 ? (
            address.map((item) => (
              <AddressCard
                setSelectedAddress={setSelectedAddress}
                item={item}
                selectedAddress={selectedAddress}
              />
            ))
          ) : (
            <p style={{ color: "red" }}>Please add an Address!</p>
          )}
        </div>
        <ErrorBoundary>
          <Payment
            selectedAddress={selectedAddress}
            setAddressError={setAddressError}
            addressRef={addressRef}
          />
        </ErrorBoundary>
      </div>

      <div>
        <Cart handleOrder={handleOrder} />
      </div>
    </div>
  );
}

export default Checkout;
