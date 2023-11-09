import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const url = import.meta.env.VITE_STORE_URL
console.log(url)

export const getInventory = createAsyncThunk('GET/products', async () => {
  const response = await fetch(`${url}/products`);
  const json = await response.json()
  return json.results
})

const inventorySlice = createSlice({
  name: "inventory",
  initialState: {
    categories: [
      { name: 'electronics', displayName: 'Electronics', _id: 1 },
      { name: 'food', displayName: 'Food', _id: 2 },
      { name: 'clothing', displayName: 'Clothing', _id: 3 },
    ],
    products: [
      { name: 'TV', category: 'electronics', price: 699.00, inStock: 5 },
      { name: 'Radio', category: 'electronics', price: 99.00, inStock: 15 },
      { name: 'Shirt', category: 'clothing', price: 9.00, inStock: 25 },
      { name: 'Socks', category: 'clothing', price: 12.00, inStock: 10 },
      { name: 'Apples', category: 'food', price: .99, inStock: 500 },
      { name: 'Eggs', category: 'food', price: 1.99, inStock: 12 },
      { name: 'Bread', category: 'food', price: 2.39, inStock: 90 },
    ],
    activeCategory: 'all'
  },

})

export default inventorySlice;