import { useNavigate } from "react-router-dom";
import { Categories } from "../../constants";
import { FaRegHandPointDown } from "react-icons/fa";

const Directory = () => {
  const navigate = useNavigate();
  const navigateToCategory = (title) => {
    navigate(`/shop/PRODUCTS`);
  };
  return (
    <>
      <div className="flex justify-center items-center gap-20 border-2 w-[60%] mx-auto border-black bg-black text-white cursor-pointer">
        <h1 className="text-[48px] font-serif font-[900]">SALE IS LIVE!</h1>
        <div className="flex items-center gap-2 border-2 border-white bg-white text-black px-[1rem]">
          <span className="text-[26px] font-[500]">Shop Now</span>
          <FaRegHandPointDown />
        </div>
      </div>
      <div className="flex justify-center items-center mt-[1rem] gap-4 border-2 w-[50%] mx-auto rounded-lg cursor-pointer">
        <div className="w-[16%]">
          <img
            src="data:image/jpeg;base64,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WRreQcQPLkoiLuc6z6oWNNiB5LbTVL2HNG9zTzaSD7L3LXzOBDpZCDuC5xB8QTZR0QOI0KFoJmLqQzEJgA0SyADYBzrDwAOi1Syuccz3Fx5uJJ9SvCLhJ5oGAGQEREXF6REREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREX//2Q=="
            alt="bank of baroda"
          />
        </div>
        <div className="w-[15%]">
          <img
            src="https://blog.ipleaders.in/wp-content/uploads/2022/05/HDFC.webp"
            alt="hdfc"
          />
        </div>
        <div className="w-[15%]">
          <img
            src="data:image/png;base64,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"
            alt="icici"
          />
        </div>
        <span className="text-[26px] font-[700] w-[25%]">
          10% Instant Discount*
        </span>
      </div>
      <div className="flex justify-center items-center gap-8 my-[1rem] cursor-pointer">
        <div className="flex justify-between items-center">
          <div className="border border-blue-600 border-r-0 px-[2rem] bg-gradient-to-r from-cyan-500 to-blue-500 ... text-white">
            <h2 className="text-[36px] font-[800]">FLAT ₹ 300 OFF</h2>
            <span className="text-[22px] font-[500]">ON ALL PRODUCTS</span>
          </div>
          <div className="flex flex-col justify-center items-center border border-blue-600 border-l-0 px-[2rem] py-[0.70rem] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... text-white">
            <span className="text-[18px] font-[500]">USE CODE:</span>
            <span className="text-[24px] font-[600] border border-black bg-black text-white px-[1rem]">
              brandlance300
            </span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="border border-blue-600 border-r-0 px-[2rem] bg-gradient-to-r from-cyan-500 to-blue-500 ... text-white">
            <h2 className="text-[36px] font-[800]">FLAT ₹ 500 OFF</h2>
            <span className="text-[22px] font-[500]">ON ALL PRODUCTS</span>
          </div>
          <div className="flex flex-col justify-center items-center border border-blue-600 border-l-0 px-[2rem] py-[0.70rem] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... text-white">
            <span className="text-[18px] font-[500]">USE CODE:</span>
            <span className="text-[24px] font-[600] border border-black bg-black text-white px-[1rem]">
              brandlance500
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center my-[1rem] gap-8">
        {Categories.map((category) => {
          const { id, imgUrl, title } = category;
          return (
            <main
              className="box-border shadow-xl p-[1rem] flex flex-col items-center gap-4  rounded-lg cursor-pointer "
              key={id}
              onClick={navigateToCategory}
            >
              <div
                className="w-[22rem] h-[18rem] bg-center "
                style={{ backgroundImage: `url(${imgUrl})` }}
              ></div>
              <div className="text-[20px] font-[700] font-serif ">
                <p>{title}</p>
              </div>
            </main>
          );
        })}
      </div>
    </>
  );
};

export { Directory };
