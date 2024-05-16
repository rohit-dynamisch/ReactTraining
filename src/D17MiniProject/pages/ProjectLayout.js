import React from "react";
import { Outlet } from "react-router-dom";
import { ProductContextProvider } from "../context/ProductContext";
import Navbar from "../components/Navbar";
import { CartContextProvider } from "../context/CartContext";
import { AuthContextProvider } from "../context/AuthContext";
// import { ToastContainer } from 'react-toastify'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { OrderContextProvider } from "../context/OrderContext";
function ProjectLayout() {
  return (
    <div className="projectMain">
      <ProductContextProvider>
        <CartContextProvider>
          <OrderContextProvider>
            <ToastContainer />
            <Navbar />
            <Outlet />
          </OrderContextProvider>
        </CartContextProvider>
      </ProductContextProvider>
    </div>
  );
}

export default ProjectLayout;
