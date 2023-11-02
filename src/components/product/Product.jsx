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
import inventorySlice from "../../store/inventory";

const Product = ({ product }) => {
  // define dispatch
  const dispatch = useDispatch();
  
  const handleClick = () => {
    // dispatch the action to update the selected product
    // it's like setting state, but we ask the store to do it
    // dispatch the action and pass the action the payload
    dispatch(inventorySlice.actions.setActiveCategory(product));
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
            {product.category}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.pricen}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleClick}>
            Select
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Product;
