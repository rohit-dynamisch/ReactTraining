import React from "react";
import { useCartContext } from "../context/CartContext";
import CartCard from "../components/CartCard";
import { Link } from "react-router-dom";

function Cart({ handleOrder }) {
  const { cart } = useCartContext();
  return (
    <div className="cartContainer">
      <center>
        <h1>Shopping Cart!</h1>
      </center>
      {cart.length > 0 ? (
        <div className="cartDiv">
          {cart.length > 0 && cart.map((item) => <CartCard item={item} />)}
          <div className="subTotal">
            <div>
              <h2>Subtotal</h2>
            </div>
            <div>
              <h2>
                ₹
                {cart.reduce(
                  (acc, item) => acc + parseFloat(item.price) * item.quantity,
                  0
                )}
              </h2>
            </div>
          </div>

          <div className="totalItem">
            <div>
              <h2>Total items in cart</h2>
            </div>
            <div>
              {" "}
              <h2>{cart?.length}</h2>
            </div>
          </div>

          <div className="cartBtn">
            <div>
              <Link
                style={{
                  textDecoration: "none",
                  backgroundColor: "white",
                  border: "none",
                }}
                to="/project"
              >
                Continue Shopping
              </Link>
            </div>
            <div>
              {!handleOrder && (
                <button>
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to="/project/checkout"
                  >
                    Checkout
                  </Link>
                </button>
              )}
            </div>
          </div>
        </div>
      ) : (
        <h2>Cart is Empty</h2>
      )}
    </div>
  );
}

export default Cart;
