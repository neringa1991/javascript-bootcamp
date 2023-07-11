import React from "react";
import "./CartItem.css";

// @ts-ignore
import CartIcon from "../../assets/icons8-cart-50.png";
import Button from "../../reusableComponents/Button";

// allows to create types
interface CartItemProps {
  name: string;
  description?: string;
  price: string;
  img: string;
}
export const CartItem = ({name, description, price, img}: CartItemProps) => {
  return (
    <div className="CartItem">
      <div>
        <h1>{name}</h1>
        {/* below is ternary operator */}
        <p>{description ? description : "No description..."}</p>
        <p>{price}</p>
      </div>
      <img className="CartItemImage" src={img} alt="Iphone 14"></img>
      <Button buttonColor="green" text="Buy Now" icon={CartIcon} />
    </div>
  );
};
