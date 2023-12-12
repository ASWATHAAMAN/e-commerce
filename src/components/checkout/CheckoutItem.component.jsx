// import { Data } from "../../constants";
import { Outlet, useNavigate } from "react-router-dom";
import { ProductProviderGlobalContext } from "../../context/products/product.context";
import { CheckOut } from "./checkOut.component";
import { Navbar } from "../navbar/navbar.component";

const CheckOutItem = () => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate(`/cart`);
  };
  const { cartItems } = ProductProviderGlobalContext();
  console.log(cartItems);
  return (
    <>
      <div className="border-black border my-[6rem] w-[50%] mx-auto pb-[1rem]">
        <Outlet />
        <div className="flex flex-wrap w-[80%] py-[1rem] mx-auto px-[1rem] border-t-2 border-black border-b-2 ">
          {cartItems.map((product) => {
            return <CheckOut key={product.id} product={product} />;
          })}
        </div>
        <div className="w-[15%] mt-[1rem] mx-auto flex justify-center">
          <button
            type="button"
            className="text-[22px] font-[700] w-[100%] flex justify-center px-[5rem] mx-auto text-white border-2 border-black bg-black hover:text-black hover:bg-white hover:font-serif py-[0.5rem]"
            onClick={clickHandler}
          >
            CheckOut
          </button>
        </div>
      </div>
    </>
  );
};

export { CheckOutItem };
