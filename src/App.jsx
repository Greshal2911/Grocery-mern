import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import MyOrders from "./pages/myOrders";
import Navbar from "./components/Navbar";
import { AppContext } from "./context/AppContext";
import { useContext } from "react";
import Auth from "./models/Auth";

const App = () => {
  const { isAdmin, showUserLogin } = useContext(AppContext);
  const isAdminPath = useLocation().pathname.includes("admin");
  return (
    <div>
      {isAdminPath ? null : <Navbar />}
      {showUserLogin ? <Auth /> : null}
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/my-Orders" element={<MyOrders />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
