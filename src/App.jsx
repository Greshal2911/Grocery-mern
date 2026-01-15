
import {Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";

const App = () => {
  return (
    <div>
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Products/>} />
        <Route path="/product/:id" element={<ProductDetails/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </div>
  </div>
  )
}

export default App