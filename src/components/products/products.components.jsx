import { Data } from "../../constants";

const Product = () => {

  return (
    <div className="flex flex-wrap justify-center my-[2rem] gap-8 ">
      {Data.map((data) => {
        const { id,name, imageUrl,price } = data;
        return (
          <main
            className="box-border shadow-xl p-[1rem] flex flex-col items-center gap-4  rounded-lg cursor-pointer "
            key={id}
          >
            <div
              className="w-[22rem] h-[18rem] bg-center "
              style={{ backgroundImage: `url(${imageUrl})` }}
            ></div>
            <div className="text-[20px] font-[700] font-serif ">
              <p>{name}</p>
              <p>{price}</p>
            </div>
          </main>
        );
      })}
    </div>
  );
};

export { Product };
