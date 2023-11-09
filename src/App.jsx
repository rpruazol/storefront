import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Categories from "./components/categories/Categories";
import Products from "./components/products/Products";
import SimpleCart from "./components/simplecart/SimpleCart";
import { getProducts } from "./store/products";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const App = () => {

  // const products = useSelector((state) => state.productSlice.products)

  return (
    <div>
      <Header />
      <Categories />
      <SimpleCart />
      <Products />
      <Footer />
    </div>
  );
};

export default App;