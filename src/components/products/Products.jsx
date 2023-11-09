// import React from "react";
import { Grid } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import Product from "../product/Product";
import {useEffect} from "react"
import { getProducts } from "../../store/products";


const Products = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('use effect')
    dispatch(getProducts())
  }, [dispatch])

  const products = useSelector((state) => {
    return state.products.products
  });
  
  const category = useSelector((state => {
    return state.categories.activeCategory
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
