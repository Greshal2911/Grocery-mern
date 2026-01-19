import { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { dummyProducts } from "../assets/assets";
import toast from "react-hot-toast";
export const AppContext = createContext(null);
export const useAppContext = () => {
  return useContext(AppContext);
};
export const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(true);
  const [isAdmin, setIsAdmin] = useState(null);
  const [showUserLogin, setShowUserLogin] = useState(false);
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState({});
  const [searchQuery, setSearchQuery] = useState("");

  const addToCart = (itemId) => {
    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      cartData[itemId] += 1;
    } else {
      cartData[itemId] = 1;
    }
    setCartItems(cartData);
    toast.success("Added to Cart");
  };

  const removeFromCart = (itemId) => {
    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      cartData[itemId] -= 1;
      if (cartData[itemId] === 0) {
        delete cartData[itemId];
      }
      toast.success(`Removed from cart`);
      setCartItems(cartData);
    }
  };

  const updateCartItem = (itemId,quantity)=>{
    let cartData = structuredClone(cartItems);
    cartData[itemId] = quantity;
    setCartItems(cartData);
    toast.success("Cart Updated");
  };

  const cartCount=()=>{
    let totalCount=0;
    for (const item in cartItems){
      totalCount += cartItems[item];
    }
    return totalCount;
  };

  const totalCartAmount=()=>{
    let totalAmount=0;
    for(const items in cartItems){
      let itemInfo=products.find((product)=>product._id===items);
      if(cartItems[items]>0){
        totalAmount += cartItems[items]*  itemInfo.offerPrice;
      }
    }
    return Math.floor(totalAmount*100)/100;
  };

  const fetchProducts = async () => {
    setProducts(dummyProducts);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  const value = {
    navigate,
    user,
    setUser,
    isAdmin,
    setIsAdmin,
    showUserLogin,
    setShowUserLogin,
    products,
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItem,
    cartCount,
    totalCartAmount,
    setSearchQuery,
    searchQuery,
    
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
export default AppContextProvider;
