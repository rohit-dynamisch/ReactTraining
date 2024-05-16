import React, { useEffect, useState } from "react";
import { useProductContext } from "../context/ProductContext";
import ProductComponent from "../../D9Loops/ProductComponent";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import Modal from "./Modal";


import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { Box, Slider } from "@mui/material";
import Skeleton from '@mui/material/Skeleton';
import PRoductList from "./PRoductList";
import ProductListHOC from "./ProductListHOC";
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};



function Products() {
  const [open, setOpen] = React.useState(false);
  let { products, handleDelete, setDeleteId,productToShow,filters,setFilters,handleFilter,range,handleRange } = useProductContext();
  const { loadingFlag } = useProductContext();
  

  const handleClose = () => {
    setOpen(false);
    setDeleteId("");
  };

  const handleOpen = () => {
    setOpen(true);
  };



  return (
    <div className="products">
      <div className="filters">
      <FormControl sx={{ m: 1, width: 300 }}>
      <p>Filter by Category</p>
      {filters.length==0 && <p style={{position:"absolute",marginTop:"60px",color:"GrayText"}}>Select Category..</p>}
        <Select
        sx={{
          maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
        }}
          id="demo-multiple-checkbox"
          multiple
          displayEmpty
          value={filters}
          onChange={handleFilter}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {[...new Set(products.map(item=>item.category.toLowerCase()))].map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={filters.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Box sx={{ width: 200 }}>
      <p>FIlter by Price :-</p>
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={range}
        onChange={handleRange}
        valueLabelDisplay="auto"
        max="10000"
        step="100"
        // getAriaValueText={valuetext}
      />
      <div style={{display:"flex",justifyContent:"space-between",width:"100%"}}>
      <span>Min: {range[0]}</span>
      <span>Max: {range[1]}</span>
      </div>
    </Box>


      </div>
      <div className="productList">
      <PRoductList productToShow={productToShow} handleOpen={handleOpen} loadingFlag={loadingFlag}/>
      </div>
      <Modal isOpen={open} onClose={handleClose}>
        <div style={{ position: "relative" }}>
          <h3
            style={{ marginTop: "30px", position: "absolute", width: "100%" }}
          >
            Do you really want to delete this item?
          </h3>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              marginTop: "90px",
              position: "absolute",
            }}
          >
            <button
              style={{
                height: "1.5rem",
                width: "5rem",
                backgroundColor: "rgb(79 70 229)",
                border: "none",
                color: "white",
                cursor: "pointer",
                borderRadius: "10px",
              }}
              onClick={() => {
                handleDelete();
                handleClose();
              }}
            >
              Yes
            </button>
            <button
              style={{
                height: "1.5rem",
                width: "5rem",
                backgroundColor: "rgb(79 70 229)",
                border: "none",
                color: "white",
                cursor: "pointer",
                borderRadius: "10px",
              }}
              onClick={handleClose}
            >
              No
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
export default Products;
