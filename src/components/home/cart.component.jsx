import { Outlet } from "react-router-dom";
import { CheckOutItem } from "../checkout/CheckoutItem.component";
import { CartItem } from "./cartItem.component";
// import { ProductProviderGlobalContext } from "../../context/products/product.context";
// import { CartItem } from "./cartItem.component";

const Cart = () => {
  // const {cartItems} = ProductProviderGlobalContext()
  return (
    <>
      <Outlet />
      <main className="flex justify-evenly items-center text-[20px] font-[500] underline ">
        <span>Product</span>
        <span>Description</span>
        <span>Price</span>
        <span>Remove</span>
      </main>
     <CartItem/>
    </>
  );
};

export { Cart };
