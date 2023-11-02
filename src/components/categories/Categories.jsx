import { FormControl, InputLabel, Menu, MenuItem, Select } from "@mui/material";
// import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import inventorySlice from "../../store/inventory";
const Categories = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.inventory.categories);
  const activeCategory = useSelector((state) => state.inventory.activeCategory)
  console.log('activeCategory', activeCategory)
  const handleChange = (e) => {
    console.log(e.target.value)
    dispatch(inventorySlice.actions.setActiveCategory(e.target.value));
  };
  return (
    <div style={{ width: "250px" }}>
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
            <MenuItem value={category.name}>{category.displayName}</MenuItem>
            )
          })}
        </Select>
      </FormControl>
    </div >
  );
};

export default Categories;
