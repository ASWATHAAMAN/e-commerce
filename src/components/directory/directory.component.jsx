import { useNavigate } from "react-router-dom";
import { Categories } from "../../constants";

const Directory = () => {
  const navigate = useNavigate()
  const navigateToCategory = (title)=>{
    navigate(`/shop/PRODUCTS`)
    
  }
  return (
    <div className="flex flex-wrap justify-center my-[2rem] gap-8"onClick={navigateToCategory}>
      {Categories.map((category) => {
        const { id, imgUrl, title } = category;
        return (
          <main
            className="box-border shadow-xl p-[1rem] flex flex-col items-center gap-4  rounded-lg cursor-pointer "
            key={id}
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
  );
};

export { Directory };
