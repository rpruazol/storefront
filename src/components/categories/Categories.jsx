import { FormControl, InputLabel, Menu, MenuItem, Select } from "@mui/material";
// import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./categories.css"
import categoriesSlice from "../../store/categories";
import { getCategories } from "../../store/categories";
import { useEffect } from "react";

const Categories = () => {
  const dispatch = useDispatch();

  const categories = useSelector((state) => state.categories.categories);
  const activeCategory = useSelector((state) => state.categories.activeCategory)
  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch])
  console.log(categories)
  const handleChange = (e) => {
    console.log(e.target.value)
    dispatch(categoriesSlice.actions.setActiveCategory(e.target.value));
  };
  
  return (
    <div style={{width: "250px"}} className="category">
      <FormControl fullWidth>
        <InputLabel id="num-of-horns-label">Categories</InputLabel>
        <Select
          labelId="num-of-horns-label"
          id="num-of-horns"
          value={activeCategory}
          label="Categories"
          onChange={handleChange}
        >
        <MenuItem value={"all"}>
          All
        </MenuItem>
          {categories.map((category) => {
            return (
            <MenuItem value={category.name}>{category.name}</MenuItem>
            )
          })}
        </Select>
      </FormControl>
    </div >
  );
};

export default Categories;
