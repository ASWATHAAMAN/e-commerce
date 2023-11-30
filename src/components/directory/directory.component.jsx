import { Categories } from "../../constants";

const Directory = () => {
  return (
    <div className="flex flex-wrap justify-center my-[2rem] gap-8 ">
      {Categories.map((category) => {
        const { id, imgUrl, title } = category;
        return (
          <main
            className="box-border shadow-xl p-[1rem] flex flex-col items-center gap-4  rounded-lg cursor-pointer "
            key={id}
          >
            <div
              className="w-[24rem] ml-[10px] h-[18rem] bg-center "
              style={{ backgroundImage: `url(${imgUrl})` }}
            ></div>
            <div>
              <p>{title}</p>
            </div>
          </main>
        );
      })}
    </div>
  );
};

export { Directory };
