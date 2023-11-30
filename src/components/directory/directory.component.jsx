import { Categories } from "../../constants";

const Directory = () => {
  return Categories.map((category) => {
    const { id, imgUrl, title } = category;
    return (
      <main key={id}>
        <div
          className="w-[100%]"
          style={{ backgroundImage: `url(${imgUrl})` }}
        ></div>
        <p>{title}</p>
      </main>
    );
  });
};

export { Directory };
