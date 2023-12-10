import { createContext, useContext, useState } from "react";
import { Data } from "../../constants";

const ProductContext = createContext();
// functions
  const addItemToCart = (cartItems, productToAdd) => {
    // console.log(cartItems);
    console.log(productToAdd);
    const existingItem = cartItems.find(
      (cartItem) => cartItem.id === productToAdd.id
    );
    // console.log(existingItem);
    if (existingItem) {
      cartItems.map((cartItem) =>
        cartItem.id === productToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    } else {
      return [...cartItems, { ...productToAdd, quantity: 1 }];
    }
  };

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(Data);
  const [cartItems, setCartItems] = useState([]);
// console.log(cartItems);
  const addCartItem = (addProduct) => {
    // console.log(addProduct);
    setCartItems(addItemToCart(cartItems, addProduct));
    // console.log(cartItems);
  };

  const initialValues = { products, setProducts, addCartItem,cartItems };
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
