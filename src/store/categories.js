import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const url = import.meta.env.VITE_STORE_URL

export const getCategories = createAsyncThunk('GET/categories', async () => {
  const response = await fetch(`${url}/categories`);
  const json = await response.json()
  return json.results
})



const categoriesSlice = createSlice({
  name: "categoriesSlice",
  initialState: {
    categories: [],
    activeCategory: "all",
  },

  reducers: {
    setActiveCategory: (state, action) => {
      state.activeCategory = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.categories = action.payload
    })
  }
})

export default categoriesSlice;