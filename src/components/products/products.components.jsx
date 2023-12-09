import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  // const {addCartItem} = ProductProviderGlobalContext()
  const navigate = useNavigate();
  const navigateToCategory = (title) => {
    navigate(`/cart/ITEMS`);
  };
  return (
    <div className="flex flex-wrap justify-center my-[2rem] gap-8 ">
      {product.map((item) => {
        const { id, imageUrl, name, price } = item;
        return (
          <main
            className="box-border shadow-xl p-[1rem] flex flex-col items-center gap-4  rounded-lg cursor-pointer "
            key={id}
          >
            <div
              className="w-[22rem] h-[18rem] bg-center "
              style={{ backgroundImage: `url(${imageUrl})` }}
            ></div>
            <div className="text-[20px] font-[700] font-serif text-center flex flex-col gap-[10px] ">
              <p className="text-blue-500 ">{name}</p>
              <p> {price}</p>
              <button type="button"
                className="text-[16px] font-[500] border-2 px-[1rem] py-[0.25rem] border-black bg-black text-white rounded-lg hover:bg-white hover:text-red-600 hover:border-blue-500 "
                onClick={navigateToCategory}
              >
                ADD TO CART
              </button>
            </div>
          </main>
        );
      })}
    </div>
  );
};

export { Product };
