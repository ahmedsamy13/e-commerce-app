import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";

export const Shopcontext = createContext();

const ShopContextProvider = ({ children }) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState("");
  const [cartItems, setCartItems] = useState(function () {
    const storedItems = localStorage.getItem("cartItems");
    return storedItems ? JSON.parse(storedItems) : [];
  });
  useEffect(
    function () {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    },
    [cartItems]
  );
  const addToCart = (productId, size) => {
    if (!size) {
      toast.error("Please select a size");
      return;
    }
    setCartItems([...cartItems, { id: productId, size }]);
  };

  const getCartCount = () => cartItems.length;
  const updateQuantity = (id, size, quantity) => {
    if (quantity <= 0) {
      setCartItems((prev) =>
        prev.filter((item) => !(item.id === id && item.size === size))
      );
    } else {
      setCartItems((prev) =>
        prev.map((item) =>
          item.id === id && item.size === size ? { ...item, quantity } : item
        )
      );
    }
  };
  const getCartTotal = () => {
    return cartItems.reduce((total, item) => {
      const product = products.find((p) => p._id === item.id);
      if (!product) return total;
      return total + product.price * (item.quantity || 1);
    }, 0);
  };

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    updateQuantity,
    setSearch,
    cartItems,
    addToCart,
    getCartCount,
    getCartTotal,
  };

  return <Shopcontext.Provider value={value}>{children}</Shopcontext.Provider>;
};

export default ShopContextProvider;
