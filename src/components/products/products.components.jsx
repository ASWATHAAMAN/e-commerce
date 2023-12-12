import { useNavigate } from "react-router-dom";
import { ProductProviderGlobalContext } from "../../context/products/product.context";
import { Navbar } from "../navbar/navbar.component";

const Product = ({ product }) => {
  const { addCartItem } = ProductProviderGlobalContext();
  const navigate = useNavigate();
  const checkOutHandler = (id, imageUrl, name, price) => {
    addCartItem({ id, imageUrl, name, price });
    navigate(`/list/ShoppingCart`);
  };

  // const navigateToCategory = (title) => {
  // };
  return (
    <>
      <Navbar />
      <div className="flex flex-wrap justify-center items-center my-[6rem] gap-8 ">
        {product.map((item) => {
          const { id, imageUrl, name, price } = item;
          return (
            <main
              className="box-border shadow-xl p-[1rem] flex flex-col items-center gap-4  rounded-lg cursor-pointer bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ..."
              key={id}
            >
              <div
                className="w-[22rem] h-[18rem] bg-center "
                style={{ backgroundImage: `url(${imageUrl})` }}
              ></div>
              <div className="text-[20px] font-[800] font-serif text-center flex flex-col gap-[10px] ">
                <p className="text-white text-[24px] ">{name}</p>
                <p className="text-white"> {price}</p>
                <button
                  type="button"
                  className="text-[16px] font-[800] border-2 px-[1rem] py-[0.25rem] border-black bg-black text-white rounded-lg hover:bg-white hover: bg-gradient-to-r from-pink-500 hover:text-black "
                  onClick={() => checkOutHandler(id, imageUrl, name, price)}
                >
                  ADD TO CART
                </button>
              </div>
            </main>
          );
        })}
      </div>
    </>
  );
};

export { Product };
