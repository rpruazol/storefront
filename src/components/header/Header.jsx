import { AppBar, Toolbar, Typography } from "@mui/material";
import { useSelector } from "react-redux";


const Header = () => {
  const cart = useSelector((state) => {
    console.log(state.cart.length)
    return state.cart.length
  });
  return (
    <AppBar position="static" style={{ padding: "8px" }}>
      <Toolbar>
        <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
          Virtual Store Application
        </Typography>
      </Toolbar>
      <Toolbar>
        <Typography variant="p" component="div" sx={{ flexGrow: 1 }}>
          Cart ({cart})
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
