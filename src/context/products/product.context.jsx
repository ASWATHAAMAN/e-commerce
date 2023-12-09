import { createContext, useContext, useState } from "react";
import { Data } from "../../constants";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(Data);
  const [cartItems, setCartItems] = useState([]);
  // functions
  const addItemToCart = (cartItems, productToAdd) => {
    const existingItem = cartItems.find(
      (cartItem) => cartItem.id === productToAdd.id
    );
    if (existingItem) {
      cartItems.map((cartItem) =>
        cartItem.id === productToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }
    return [...cartItems, {productToAdd, quantity:1}]
  };

  const addCartItem = (addProduct) => {
    setCartItems(addItemToCart(cartItems,addProduct))
  };

  const initialValues = { products, setProducts,addCartItem };
  return (
    <ProductContext.Provider value={initialValues}>
      {children}
    </ProductContext.Provider>
  );
};

const ProductProviderGlobalContext = () => {
  return useContext(ProductContext);
};

export { ProductProvider, ProductProviderGlobalContext };
