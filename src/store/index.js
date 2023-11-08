import { configureStore } from "@reduxjs/toolkit";
import inventory from "./inventory";
import cart from "./cart"

export const store = configureStore({
  reducer: {
    inventory: inventory.reducer,
    cart: cart.reducer
  },
});
