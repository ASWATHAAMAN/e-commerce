import { MdDeleteForever } from "react-icons/md";
import { ProductProviderGlobalContext } from "../../context/products/product.context";
const CartItem = ({ item }) => {
  const { cartItems } = ProductProviderGlobalContext();
  const deleteHandler = (id) => {
    cartItems.filter((items) => items.id !== id)
  }
  return (
    <>
      {cartItems.map((item) => {
        const { imageUrl, name, price, id } = item;

        return (
          <>
            <main
              className="flex justify-between items-center mx-[9rem] mt-[1rem] w-[70%] text-[20px] font-[500] "
              key={id}
            >
              <span className="w-[15%]">
                <img src={imageUrl} alt={name} />
              </span>
              <span>{name}</span>
              <span>{price}</span>
              {/* <span>Remove</span> */}
              <MdDeleteForever
                className="cursor-pointer"
                onClick={() => deleteHandler(id)}
              />
            </main>
          </>
        );
      })}
    </>
  );
};

export { CartItem };
