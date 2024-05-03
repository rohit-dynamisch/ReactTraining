import React, { useState } from "react";
import "../Main.css";
import { useCartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
function Navbar() {
  const [showProfileOptions, setShowProfileOptions] = useState(false)
  const {cart}=useCartContext();
  return (
    <div className="navbar">
      <div className="leftNav">
        <div>Logo</div>
        <div><Link to="/project">Products</Link></div>
        <div>Orders</div>
        <div><Link to="/project/addProduct">Add Product</Link></div>
      </div>
      <div className="rightNav">
        <div>
        <svg viewBox="0 0 24 24" height="32px" width="32px" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z" fill="#a72a2a"></path> </g></svg>
        </div>

        <div className="cart">
          <p>{cart.length>0 && cart.length}</p>
          <Link to="/project/cart">
          <svg
            width="2rem"
            height="2rem"
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
              <g clip-path="url(#clip0_15_35)">
                {" "}
                <rect width="24" height="24" fill="white"></rect>{" "}
                <path
                  d="M5.33331 6H19.8672C20.4687 6 20.9341 6.52718 20.8595 7.12403L20.1095 13.124C20.0469 13.6245 19.6215 14 19.1172 14H16.5555H9.44442H7.99998"
                  stroke="#000000"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  d="M2 4H4.23362C4.68578 4 5.08169 4.30341 5.19924 4.74003L8.30076 16.26C8.41831 16.6966 8.81422 17 9.26638 17H19"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <circle
                  cx="10"
                  cy="20"
                  r="1"
                  stroke="#000000"
                  stroke-linejoin="round"
                ></circle>{" "}
                <circle
                  cx="17.5"
                  cy="20"
                  r="1"
                  stroke="#000000"
                  stroke-linejoin="round"
                ></circle>{" "}
              </g>{" "}
              <defs>
                {" "}
                <clipPath id="clip0_15_35">
                  {" "}
                  <rect width="24" height="24" fill="white"></rect>{" "}
                </clipPath>{" "}
              </defs>{" "}
            </g>
          </svg>
          </Link>
        </div>

        <div className="profile">
          <div onClick={() => setShowProfileOptions(!showProfileOptions)}><svg
            width="2rem"
            height="2rem"
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
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.5 7.063C16.5 10.258 14.57 13 12 13c-2.572 0-4.5-2.742-4.5-5.938C7.5 3.868 9.16 2 12 2s4.5 1.867 4.5 5.063zM4.102 20.142C4.487 20.6 6.145 22 12 22c5.855 0 7.512-1.4 7.898-1.857a.416.416 0 0 0 .09-.317C19.9 18.944 19.106 15 12 15s-7.9 3.944-7.989 4.826a.416.416 0 0 0 .091.317z"
                fill="#000000"
              ></path>
            </g>
          </svg>
          </div>
          {showProfileOptions && <div className="profileOptions">
            <div>
              <p>My Profile</p>
            </div>
            <div>
              <p>My Orders</p>
            </div>
            <div>
              <p>Logout</p>
            </div>
          </div>}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
