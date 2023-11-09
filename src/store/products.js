import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const url = import.meta.env.VITE_STORE_URL

export const getProducts = createAsyncThunk('GET/products', async () => {
  const response = await fetch(`${url}/products`);
  console.log(response)
  const json = await response.json()
  return json.results
})




const productsSlice = createSlice({
  name: "productsSlice",
  initialState: {
    products: [],
    selectedProduct: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload
    })
    // handling the async thunk - acts like a switch case 
  }
})

export default productsSlice;