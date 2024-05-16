import React, { useEffect, useState } from "react";
import { useProductContext } from "../context/ProductContext";
import { useLocation, useNavigate } from "react-router-dom";
import { v4 } from "uuid";
import { Button } from "@mui/material";
function ProductForm() {
  const navigate = useNavigate();
  const location = useLocation();
  let data;
  if (location?.state) data = location?.state?.data;

  const { updateProduct, addProduct } = useProductContext();

  const [formData, setFormData] = useState({
    title: "",
    price: "",
    discountPercentage: "",
    brand: "",
    category: "",
    rating: "",
    thumbnail: "https://cdn.dummyjson.com/product-images/6/thumbnail.png",
  });
  const [error, setError] = useState({
    titleError: "",
    priceError: "",
    discountPercentageError: "",
    brandError: "",
    categoryError: "",
    ratingError: "",
    thumbnailError: "https://cdn.dummyjson.com/product-images/6/thumbnail.png",
  });

  useEffect(() => {
    if (data) setFormData(data);
  }, [data]);


  //------------------------------Edit submission button-------------------------------
  const handleEdit = async (e) => {
    e.preventDefault();
    if (handleValidation()) return;
    if (formData.id) {
      await updateProduct(formData);
      setFormData({
        title: "",
        price: "",
        discountPercentage: "",
        brand: "",
        rating: "",
        category: "",
        thumbnail: "https://cdn.dummyjson.com/product-images/6/thumbnail.png",
        images: [
          "https://cdn.dummyjson.com/product-images/2/1.jpg",
          "https://cdn.dummyjson.com/product-images/2/2.jpg",
          "https://cdn.dummyjson.com/product-images/2/3.jpg",
          "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg",
        ],
      });
    }
    navigate("/project");
  };

  //------------------------------handle form inputs--------------------------------
  const handleChange = (e) => {
    if (["price", "rating", "discountPercentage"].includes(e.target.id)) {
      setFormData({
        ...formData,
        [e.target.id]: e.target.value,
      });
      return;
    }
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  //------------------------------validation function without yup----------------------
  const handleValidation = () => {
    let errorFlag = false;
    setError({
      titleError: "",
      priceError: "",
      discountPercentageError: "",
      brandError: "",
      categoryError: "",
      ratingError: "",
    });
    if (!formData.title.trim()) {
      errorFlag = true;
      setError((prev) => {
        return { ...prev, titleError: "title is required!" };
      });
    }
    if (!formData.brand.trim()) {
      errorFlag = true;
      setError((prev) => {
        return { ...prev, brandError: "brand is required!" };
      });
    }
    if (!formData.category.trim()) {
      errorFlag = true;
      setError((prev) => {
        return { ...prev, categoryError: "category is required!" };
      });
    }
    if (!formData.price) {
      errorFlag = true;
      setError((prev) => {
        return { ...prev, priceError: "price is required!" };
      });
    } else if (parseInt(formData.price) <= 0) {
      errorFlag = true;
      setError((prev) => {
        return { ...prev, priceError: "price cant be less than zero!" };
      });
    }
    if (!formData.discountPercentage) {
      errorFlag = true;
      setError((prev) => {
        return {
          ...prev,
          discountPercentageError: "discount Percentage is required!",
        };
      });
    } else if (
      formData.discountPercentage <= 0 ||
      formData.discountPercentage >= 100
    ) {
      errorFlag = true;
      setError((prev) => {
        return {
          ...prev,
          discountPercentageError:
            "discount Percentage can only be between 0 to 100!",
        };
      });
    }

    if (!formData.rating) {
      errorFlag = true;
      setError((prev) => {
        return { ...prev, ratingError: "rating is required!" };
      });
    } else if (formData.rating < 0 || formData.rating > 5) {
      errorFlag = true;
      setError((prev) => {
        return { ...prev, ratingError: "rating can only be between 0 to 5!" };
      });
    }
    return errorFlag;
  };

  const handleAdd = async (e) => {
    e.preventDefault();

    if (handleValidation()) return;
    else {
      await addProduct({
        ...formData,
        id: v4(),
        images: [
          "https://cdn.dummyjson.com/product-images/2/1.jpg",
          "https://cdn.dummyjson.com/product-images/2/2.jpg",
          "https://cdn.dummyjson.com/product-images/2/3.jpg",
          "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg",
        ],
      });
      setFormData({
        title: "",
        price: "",
        discountPercentage: "",
        brand: "",
        category: "",
        rating: "",
        thumbnail: "https://cdn.dummyjson.com/product-images/6/thumbnail.png",
        images: [
          "https://cdn.dummyjson.com/product-images/2/1.jpg",
          "https://cdn.dummyjson.com/product-images/2/2.jpg",
          "https://cdn.dummyjson.com/product-images/2/3.jpg",
          "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg",
        ],
      });
    }
    navigate("/project");
  };

  const handleCancel = (e) => {
    e.preventDefault();
    handleReset(e);
    navigate("/project");
  };

  const handleReset = (e) => {
    e.preventDefault();
    setFormData({
      title: "",
      price: "",
      discountPercentage: "",
      brand: "",
      category: "",
      rating: "",
      thumbnail: "https://cdn.dummyjson.com/product-images/6/thumbnail.png",
      images: [
        "https://cdn.dummyjson.com/product-images/2/1.jpg",
        "https://cdn.dummyjson.com/product-images/2/2.jpg",
        "https://cdn.dummyjson.com/product-images/2/3.jpg",
        "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg",
      ],
    });
  };

  return (
    <div className="editForm">
      <form>
        <div style={{ borderBottom: "2px solid rgb(229 231 235)" }}>
          {" "}
          {location.state ? <h3>Edit Product</h3> : <h3>Add Product</h3>}
        </div>
        <div>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            value={formData.title}
            onChange={handleChange}
            type="text"
          />
          <span>{error.titleError}</span>
        </div>
        <div className="price">
          <label htmlFor="price">Price</label>
          <input
            value={formData.price}
            onChange={handleChange}
            id="price"
            type="number"
          />
          <span>{error.priceError}</span>
        </div>
        <div className="discount">
          <label htmlFor="discountPercentage">Discount Percentage</label>
          <input
            value={formData.discountPercentage}
            onChange={handleChange}
            id="discountPercentage"
            type="number"
          />
          <span>{error.discountPercentageError}</span>
        </div>
        <div>
          <label htmlFor="brand">Brand</label>
          <input
            value={formData.brand}
            onChange={handleChange}
            id="brand"
            type="text"
          />
          <span>{error.brandError}</span>
        </div>
        <div>
          <label htmlFor="category">Category</label>
          <input
            value={formData.category}
            onChange={handleChange}
            id="category"
            type="text"
          />
          <span>{error.categoryError}</span>
        </div>

        <div>
          <label htmlFor="rating">Rating</label>
          <input
            value={formData.rating}
            onChange={handleChange}
            id="rating"
            type="number"
          />
          <span>{error.ratingError}</span>
        </div>

        <div>
          <label htmlFor="thumbnail">Thumbnail</label>
          <input
            // value={formData.rating}
            onChange={handleChange}
            id="thumbnail"
            type="file"
          />
          <span>{error.thumbnail}</span>
        </div>

        <div className="productBtn">
          <div>
          <Button
              onClick={handleCancel}
              sx={{ mr: 1 }}
              type="reset"
              variant="contained"
              color="error"
              size="small"
            >
              Cancel
            </Button>
          </div>
          <div>
            <Button
              onClick={handleReset}
              sx={{ mr: 1 }}
              type="reset"
              variant="outlined"
              color="secondary"
              size="small"
            >
              Reset
            </Button>
          </div>
          {location.state ? (
            <div>
              <Button
              onClick={handleEdit}
              sx={{ mr: 1 }}
              type="reset"
              variant="contained"
              color="success"
              size="small"
            >
              Edit
            </Button>
            </div>
          ) : (
            <div >
            <Button
              onClick={handleAdd}
              sx={{ mr: 1 }}
              type="reset"
              variant="contained"
              color="success"
              size="small"
            >
              Add
            </Button>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}

export default ProductForm;
