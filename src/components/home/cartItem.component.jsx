import { MdDeleteForever } from "react-icons/md";
import { CheckOutItem } from "../checkout/CheckoutItem.component";
const CartItem = ({CheckOutItem}) => {

  const { imageUrl, name, price,id } = CheckOutItem;
  return (
    <div key={id}>
      <div>
        <img src={imageUrl} alt={name} />
      </div>
      <span>{name}</span>
      <span>{price}</span>
      <MdDeleteForever />;
      
    </div>
  );
};

export { CartItem };
