const Product = ({ product }) => {
  // console.log(
  //   product.map((item) => {
  //     console.log(item);
  //   })
  //   );
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
              <span className="text-[16px] font-[500] border-2 px-[1rem] py-[0.25rem] border-black bg-black text-white rounded-lg hover:bg-white hover:text-red-600 hover:border-blue-500 ">
                ADD TO CART
              </span>
            </div>
          </main>
        );
      })}
    </div>
  );
};

export { Product };
