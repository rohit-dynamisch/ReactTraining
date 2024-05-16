import { Box, Skeleton } from "@mui/material";
import React from "react";
const ProductListHOC = (ProductList) => {
  return (props) => {
    if (!props.loadingFlag) return <ProductList {...props} />;
    return (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "75vw",
          justifyContent: "space-between",
        }}
      >
        {Array.from(new Array(10)).map((i) => (
          <div
            style={{
              flexBasis: "30%",
              height: "380px",
              padding: "10px",
              marginRight: "10px",
            }}
          >
            <Skeleton variant="rectangular" width="100%" height="70%" />
            <Box sx={{ pt: 0.5 }}>
              <Skeleton />
              <Skeleton width="60%" />
            </Box>
          </div>
        ))}
      </div>
    );
  };
};

export default ProductListHOC;
