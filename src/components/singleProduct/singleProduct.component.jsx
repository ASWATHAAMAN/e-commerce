import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const { productName } = useParams();
  return (
    <h2 className="text-[24px] text-center mb-8 font-[700]">{productName}</h2>
  );
};

export { SingleProduct };
