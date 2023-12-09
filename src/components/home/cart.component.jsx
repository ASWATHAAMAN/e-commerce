import { Outlet } from "react-router-dom";
import { CheckOut } from "../checkout/checkOut.component";
import { ProductProviderGlobalContext } from "../../context/products/product.context";

const Cart = () => {
  const {products} = ProductProviderGlobalContext()
  return (
    <>
      <Outlet />
      <main className="flex justify-around items-center text-[20px] font-[500] underline ">
        <span>Product</span>
        <span>Description</span>
        <span>Quantity</span>
        <span>Price</span>
        <span>Remove</span>
      </main>
      {products.map((product) => (
        <CheckOut key={product.id} product={product.items} />
      ))}
      {/* <CheckOut /> */}
    </>
  );
};

export { Cart };
