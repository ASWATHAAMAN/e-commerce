import { Outlet } from "react-router-dom";
import { CheckOutItem } from "../checkout/CheckoutItem.component";
import { CartItem } from "./cartItem.component";
import { Navbar } from "../navbar/navbar.component";
// import { ProductProviderGlobalContext } from "../../context/products/product.context";
// import { CartItem } from "./cartItem.component";

const Cart = () => {
  // const {cartItems} = ProductProviderGlobalContext()
  return (
    <>
    <Navbar/>
      <div className="border-2 border-black mt-[6rem] w-[85%] mx-auto pb-[2rem]">
        <Outlet />
        <main className="flex justify-evenly items-center text-[20px] font-[700] underline py-[2rem] ">
          <span>Product</span>
          <span>Description</span>
          <span>Price</span>
          <span>Remove</span>
        </main>
        <CartItem />
      </div>
      <div className="float-right pr-[6rem] mt-[1rem] ">
        <button className="border border-orange-500 bg-orange-500 text-white px-[1rem] py-[0.25rem] text-[20px] font-[700] hover:bg-orange-600">BUY NOW</button>
      </div>
    </>
  );
};

export { Cart };
