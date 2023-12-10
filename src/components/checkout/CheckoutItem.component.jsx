// import { Data } from "../../constants";
import { Outlet, useNavigate } from "react-router-dom";
import { ProductProviderGlobalContext } from "../../context/products/product.context";
import { CheckOut } from "./checkOut.component";

const CheckOutItem = () => {
  const navigate = useNavigate()
  const clickHandler = ()=>{
    navigate(`/cart`)
  }
  const { cartItems } = ProductProviderGlobalContext();
  console.log(cartItems);
  return (
    <div className="border border-black w-[20%] py-[1rem] mx-auto px-[1rem]">
      <Outlet />
      {cartItems.map((product) => {
        return <CheckOut key={product.id} product={product} />;
      })}
      <button
        type="button"
        className="text-[22px] font-[700] w-[100%] mx-auto text-white border-2 border-black bg-black hover:text-black hover:bg-white hover:font-serif "
        onClick={clickHandler}
      >
        CheckOut
      </button>
    </div>
  );
};

export { CheckOutItem };
