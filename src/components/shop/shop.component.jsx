import { Outlet } from "react-router-dom";
import { Product } from "../products/products.components";
import { Data } from "../../constants";

const Shop = () => {
  return (
    <>
      <Product key={Data.id} />;
      <Outlet />
    </>
  );
};

export { Shop };
