import { Data } from "../../constants";

const CheckOut = () => {
  return (
    <div>
      {Data.map((item) => {
        const { imageUrl, name, price, quantity, id } = item;
        return (
          <main
            className="box-border shadow-xl p-[1rem] flex flex-col items-center gap-4  rounded-lg cursor-pointer "
            key={id}
          >
            <div>
              <img src={imageUrl} alt={name} />
            </div>
            <div>
              <span>{name}</span>
              <span>{price}</span>
              <span>{quantity}</span>
            </div>
          </main>
        );
      })}
    </div>
  );
};

export { CheckOut };
