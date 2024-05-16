import React from "react";
import { useProductContext } from "../context/ProductContext";
import { Link, useNavigate } from "react-router-dom";
import { Rating } from "@mui/material";

function ProductCard({ data, handleOpen }) {
  const navigate = useNavigate();
  const { deleteProduct, setDeleteId } = useProductContext();

  const navigateDetails = (e) => {
    e.stopPropagation();
    navigate(`/project/productDetails/${data.id}`);
  };
  
  return (
    <div className="card" onClick={navigateDetails}>
      <div className="wishlist">
        {/* <svg viewBox="0 0 24 24" height="22px" width="22px" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z" fill="#a72a2a"></path> </g></svg> */}
        {/* <svg width="22px" height="22px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.7 4C18.87 4 21 6.98 21 9.76C21 15.39 12.16 20 12 20C11.84 20 3 15.39 3 9.76C3 6.98 5.13 4 8.3 4C10.12 4 11.31 4.91 12 5.71C12.69 4.91 13.88 4 15.7 4Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg> */}
      </div>
      <div className="imgDiv">
        <img loading="lazy" src={data.thumbnail} />
      </div>
      <div className="cardContent">
        <div>
          {data.brand} {data.title}
        </div>
        <div>
          <span>₹{parseInt(data.price)}</span>{" "}
          {data.discountPercentage && data.discountPercentage > 0 && (
            <span style={{ color: "GrayText" }}>
              {data.discountPercentage}%off
            </span>
          )}{" "}
        </div>
        {data.discountPercentage && data.discountPercentage > 0 && (
          <div style={{ textDecoration: "line-through", color: "GrayText" }}>
            ₹{parseInt(data.price / (1 - data.discountPercentage / 100))}
          </div>
        )}
        <div style={{ display: "flex", alignItems: "center" }}>
          <Rating name="half-rating" defaultValue={data.rating} precision={0.1} readOnly size="small"/>
          
        </div>
        <div>
          <Link
            to="/project/editProduct"
            state={{ data: data }}
            onClick={(e) => e.stopPropagation()}
          >
            <svg
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
                  d="M20.1497 7.93997L8.27971 19.81C7.21971 20.88 4.04971 21.3699 3.27971 20.6599C2.50971 19.9499 3.06969 16.78 4.12969 15.71L15.9997 3.84C16.5478 3.31801 17.2783 3.03097 18.0351 3.04019C18.7919 3.04942 19.5151 3.35418 20.0503 3.88938C20.5855 4.42457 20.8903 5.14781 20.8995 5.90463C20.9088 6.66146 20.6217 7.39189 20.0997 7.93997H20.1497Z"
                  stroke="#000000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  d="M21 21H12"
                  stroke="#000000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>{" "}
          </Link>
          <button
          style={{
              cursor: "pointer",
              backgroundColor: "white",
              border: "none",
            }}
            onClick={(e) => {
              e.stopPropagation();
              setDeleteId(data.id);
              handleOpen();
            }}
          >
            <svg
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
                  d="M10 11V17"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  d="M14 11V17"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  d="M4 7H20"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  d="M6 7H12H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
