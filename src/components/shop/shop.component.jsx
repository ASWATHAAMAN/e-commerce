import { Outlet } from "react-router-dom";
import { Product } from "../products/products.components";
import { ProductProviderGlobalContext } from "../../context/products/product.context";

const Shop = () => {
  const {products} = ProductProviderGlobalContext()
  return (
    <>
      <Outlet />
      <div>
     {products.map((product)=> <Product key={product.id} {...product}/>
     )}
      </div>
    </>
  );
};

export { Shop };
