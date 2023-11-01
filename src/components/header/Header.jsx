import { AppBar, Toolbar, Typography } from "@mui/material";
import Categories from "../categories/Categories";
const Header = () => {
  return (
    <AppBar position="static" style={{ padding: "8px" }}>
      <Toolbar>
        <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
          Virtual Store Application
        </Typography>
        <Categories/>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
