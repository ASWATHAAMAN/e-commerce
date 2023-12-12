import { MdDeleteForever } from "react-icons/md";
import { ProductProviderGlobalContext } from "../../context/products/product.context";
const CartItem = ({ item }) => {
  const { cartItems,setCartItems } = ProductProviderGlobalContext();
  const deleteHandler = (id) => {
    const remaining = cartItems.filter((items) => items.id !== id)
    setCartItems(remaining)
console.log(remaining);
  }
  return (
    <>
      {cartItems.map((item) => {
        const { imageUrl, name, price, id } = item;

        return (
          <>
            <main
              className="flex justify-between items-center mx-[10rem] mt-[1rem] w-[70%] text-[20px] font-[500] border-b-2 border-black pb-[1rem] "
              key={id}
            >
              <span className="w-[12%]">
                <img src={imageUrl} alt={name} />
              </span>
              <span className="font-[500]">{name}</span>
              <span className="font-[500]">{price}</span>
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
