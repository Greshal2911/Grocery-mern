import { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { dummyProducts } from "../assets/assets";
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

  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const removeFromCart = (itemId) => {
    if (cartItems[itemId] > 0) {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
      if (cartItems[itemId] === 1) {
        let newCart = { ...cartItems };
        delete newCart[itemId];
        setCartItems(newCart);
      }
    }
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
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
export default AppContextProvider;
