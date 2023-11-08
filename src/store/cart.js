import { createSlice } from "@reduxjs/toolkit";
import uuid from 'react-uuid';

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      console.log('payload', action.payload)
      let cartItem = {
        name: action.payload,
        id: uuid()
      }
      console.log(cartItem)
      return [...state, cartItem]
    },
    removeFromCart: (state, action) => {
      return state.filter(item => {
        return action.payload !== item.id
      });
    }
  }
})


export default cartSlice;