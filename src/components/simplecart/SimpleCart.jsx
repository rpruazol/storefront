// displays a short list (title only) of products in the cart
// this should be present at all times

import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './SimpleCart.css'
import { useDispatch, useSelector } from "react-redux";
import cartSlice from '../../store/cart';




export default function SimpleCart() {
  const dispatch = useDispatch()

  const cart = useSelector((state) => {
    return state.cart
  });
  const handleClick = (e) => {
    console.log(e.target.value)
    dispatch(cartSlice.actions.removeFromCart(e.target.value));

  }
  return (
    <Box sx={{ minWidth: 275 }} className="cart">
      <Card variant="outlined">
        {cart.map(item => {
          return (
            <React.Fragment>
              <CardContent>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {item.name}
                </Typography>
                {/* <Typography variant="body2">
              </Typography> */}
              <CardActions>
                <Button size="small" value={item.id} onClick={handleClick}>x</Button>
              </CardActions>
              </CardContent>
            </React.Fragment>
          )
        })
        }

      </Card>
    </Box>
  );
}

