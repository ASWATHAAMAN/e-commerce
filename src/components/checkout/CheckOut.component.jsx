import { Product } from "../products/products.components";

const CheckOut = ({ product }) => {
  const { imageUrl, name, price, id } = product;
  // console.log(product);
  return (
    <>
    <div>
      <main
        className="p-[1rem] flex flex-col items-center justify-center gap-4 rounded-lg cursor-pointer "
        key={id}
      >
        <div className="w-[50%]">
          <img src={imageUrl} alt={name} />
        </div>
        <div className="flex flex-col items-center justify-between gap-">
          <span className="text-[22px] font-[700] text-blue-700">{name}</span>
          <span className="text-[22px] font-[700] text-blue-700">{price}</span>
          {/* <span className="text-[22px] font-[700] text-red-600">{quantity}</span> */}
        </div>
      </main>
    </div>
    </>
  );
};

export { CheckOut };
