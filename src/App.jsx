import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Categories from "./components/categories/Categories";
import Products from "./components/products/Products";
import SimpleCart from "./components/simplecart/SimpleCart";

const App = () => {
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