// import React from "react";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import Product from "../product/Product";
// map through beastdata and pass individual beasts to beast components
const Products = () => {
  const products = useSelector((state) => {
    return state.inventory.products
  });
  const category = useSelector((state => {
    return state.inventory.activeCategory
  }))
  return (
    <Grid container spacing={2} marginTop={"16px"}>
    {products
    .filter((product) => category === 'all' ? product : product.category === category)
    .map((product) => (
          <Product key={product.name}   product={product} />
        ))}
    </Grid>
  );
};

export default Products;
