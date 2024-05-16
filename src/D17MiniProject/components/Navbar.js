import React, { useState } from "react";
import "../Main.css";
import { useCartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { Badge } from "@mui/material";
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useProductContext } from "../context/ProductContext";
function Navbar() {
  const [showProfileOptions, setShowProfileOptions] = useState(false);
  const { cart } = useCartContext();
  const { logout } = useAuthContext();
  const {userAuth}=useAuthContext();
  const {search,handleSearch}=useProductContext()
  return (
    <div className="navbar">
      <div className="leftNav">
        <div>
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/project"
          >
            Products
          </Link>
        </div>
        <div>
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/project/allorders"
          >
            All Orders
          </Link>
        </div>
        <div>
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/project/addProduct"
          >
            Add Product
          </Link>
        </div>
      </div>
      <div style={{textAlign:"center",fontFamily:"Jaro",fontSize:"1.2rem"}}>
        LOGO HERE
      </div>
      <div className="rightNav">
        {/* <div>
        <svg viewBox="0 0 24 24" height="32px" width="32px" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z" fill="#a72a2a"></path> </g></svg>
        </div> */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "3rem",
            margin: "10px",
            marginLeft: "33%",
          }}
        >
          <svg
            style={{ position: "absolute", top: "4px", left: "5px" }}
            width="24px"
            height="24px"
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
              <g clip-path="url(#clip0_15_152)">
                {" "}
                <rect width="24" height="24" fill="white"></rect>{" "}
                <circle
                  cx="10.5"
                  cy="10.5"
                  r="6.5"
                  stroke="#000000"
                  stroke-linejoin="round"
                ></circle>{" "}
                <path
                  d="M19.6464 20.3536C19.8417 20.5488 20.1583 20.5488 20.3536 20.3536C20.5488 20.1583 20.5488 19.8417 20.3536 19.6464L19.6464 20.3536ZM20.3536 19.6464L15.3536 14.6464L14.6464 15.3536L19.6464 20.3536L20.3536 19.6464Z"
                  fill="#000000"
                ></path>{" "}
              </g>{" "}
              <defs>
                {" "}
                <clipPath id="clip0_15_152">
                  {" "}
                  <rect width="24" height="24" fill="white"></rect>{" "}
                </clipPath>{" "}
              </defs>{" "}
            </g>
          </svg>
          <input
            type="search"
            value={search}
            onChange={handleSearch}
            placeholder="Search Product..."
            style={{
              height: "2rem",
              paddingLeft: "30px",
              borderRadius: "10px",
              width: "20rem",
            }}
          />
        </div>

        <div className="cart">
          <Link
            style={{ textDecoration: "none", color: "#2f2626" }}
            to="/project/cart"
          >
            <Badge badgeContent={cart.length} color="success">
              <ShoppingCartIcon color="primary"/>
            </Badge>
          </Link>
        </div>

        <div className="profile">
          <div onClick={() => setShowProfileOptions(!showProfileOptions)}>
           <AccountCircleSharpIcon/>
          </div>
          {showProfileOptions && (
            <div className="profileOptions">              <div onClick={() => setShowProfileOptions(!showProfileOptions)}>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/project/myorders"
                >
                  <p>My Orders</p>
                </Link>
              </div>
              <div
                onClick={() => {
                  setShowProfileOptions(!showProfileOptions);
                  logout();
                }}
              >
                <p>Logout</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
