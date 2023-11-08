// import React from 'react'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import cartSlice from "../../store/cart";

const Product = ({ product }) => {
  // define dispatch
  const dispatch = useDispatch();
  
  const handleClick = (e) => {
    console.log('adding 1', e.target.value, 'to your cart')
    dispatch(cartSlice.actions.addToCart(e.target.value));

  };
  return (
    <Grid item xs={3}>
      <Card>
        <CardMedia
          sx={{ height: 275 }}
          // image={product.image_url}
          title={product.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ${product.price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleClick} value={product.name}>
            Add to Cart
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Product;
