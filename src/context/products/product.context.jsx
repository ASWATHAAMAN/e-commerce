import { createContext, useContext, useState } from "react";
import { Data } from "../../constants";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(Data);
  const initialValues = { products, setProducts };
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
