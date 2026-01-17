import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import MyOrders from "./pages/myOrders";
import Navbar from "./components/Navbar";
import { AppContext } from "./context/appContext";
import { useContext } from "react";
import Auth from "./models/Auth";
import ProductCategory from "./pages/ProductCategory";

const App = () => {
  const { isAdmin, showUserLogin } = useContext(AppContext);
  const isAdminPath = useLocation().pathname.includes("admin");
  return (
    <div className="text-default min-h-screen">
      {isAdminPath ? null : <Navbar />}
      {showUserLogin ? <Auth /> : null}
      <div className ="px-6 md:px-16 lg:px-24 xl:px-32">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:category/:id" element={<ProductDetails />} />
          <Route path="/product/:category" element={<ProductCategory />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/my-Orders" element={<MyOrders />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
