import { configureStore } from "@reduxjs/toolkit";
import inventory from "./inventory";
import cart from "./cart"
import categories from "./categories"
import products from "./products"

export const store = configureStore({
  reducer: {
    categories: categories.reducer,
    cart: cart.reducer,
    products: products.reducer
  },
});
